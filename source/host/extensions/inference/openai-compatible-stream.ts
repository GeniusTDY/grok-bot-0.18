import {
  PROXY_GATEWAY_MAX_JSON_BYTES,
  PROXY_GATEWAY_MAX_STREAM_BYTES,
  PROXY_GATEWAY_REQUEST_TIMEOUT_MS,
  proxyGatewayEndpoint,
  requireProxyGatewayModel,
  type ProxyGatewayProtocol,
  type ProxyGatewayTurnConfig,
} from "../../../shared/proxy-gateway.js";

type Loose = Record<string, any>;
export type OpenAiCompatibleUsage = { inputTokens: number; outputTokens: number; cacheReadTokens: number; cacheWriteTokens: number };
export type OpenAiCompatibleTool = { name: string; description?: string; parameters: unknown; source: Loose };
export type OpenAiCompatibleEvent =
  | { type: "text-delta"; delta: string }
  | { type: "done"; text: string; responseId: string; usage: OpenAiCompatibleUsage; protocol: Exclude<ProxyGatewayProtocol, "auto"> };
export type OpenAiCompatibleModelStepEvent =
  | { type: "text-delta"; textDelta: string }
  | { type: "tool-call"; toolCallId: string; toolName: string; args: unknown }
  | {
      type: "done";
      responseId: string;
      usage: OpenAiCompatibleUsage;
      content: readonly (
        | { type: "text"; text: string }
        | { type: "tool-call"; toolCallId: string; toolName: string; args: unknown }
      )[];
      protocol: "chat-completions";
    };

export interface OpenAiCompatibleOptions {
  readonly fetch?: typeof fetch;
  readonly config: ProxyGatewayTurnConfig;
  readonly instructions: string;
  readonly messages: readonly { role: string; content: unknown }[];
  readonly tools?: readonly OpenAiCompatibleTool[];
  readonly executeTool?: (tool: OpenAiCompatibleTool, args: unknown, toolCallId: string) => Promise<unknown>;
  readonly maxSteps?: number;
  readonly timeoutMs?: number;
  readonly signal?: AbortSignal;
}

function record(value: unknown): Loose | null { return typeof value === "object" && value != null && !Array.isArray(value) ? value as Loose : null; }
function safeJson(value: unknown): string {
  try { return JSON.stringify(value, (_key, item) => typeof item === "bigint" ? item.toString() : item) ?? "null"; }
  catch { return JSON.stringify({ isError: true, error: "Tool result was not JSON serializable." }); }
}
function zeroUsage(): OpenAiCompatibleUsage { return { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 }; }
function addUsage(a: OpenAiCompatibleUsage, b: OpenAiCompatibleUsage): OpenAiCompatibleUsage {
  return { inputTokens: a.inputTokens + b.inputTokens, outputTokens: a.outputTokens + b.outputTokens, cacheReadTokens: a.cacheReadTokens + b.cacheReadTokens, cacheWriteTokens: a.cacheWriteTokens + b.cacheWriteTokens };
}
function numeric(value: unknown): number { return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : 0; }
function chatUsage(value: unknown): OpenAiCompatibleUsage {
  const usage = record(value) ?? {}, inputDetails = record(usage.prompt_tokens_details) ?? {};
  return { inputTokens: numeric(usage.prompt_tokens), outputTokens: numeric(usage.completion_tokens), cacheReadTokens: numeric(inputDetails.cached_tokens), cacheWriteTokens: 0 };
}
function responsesUsage(value: unknown): OpenAiCompatibleUsage {
  const usage = record(value) ?? {}, inputDetails = record(usage.input_tokens_details) ?? {};
  return { inputTokens: numeric(usage.input_tokens), outputTokens: numeric(usage.output_tokens), cacheReadTokens: numeric(inputDetails.cached_tokens), cacheWriteTokens: 0 };
}

function requestTools(tools: readonly OpenAiCompatibleTool[] | undefined, protocol: "chat-completions" | "responses"): Loose[] | undefined {
  if (tools == null || tools.length === 0) return undefined;
  const seen = new Set<string>();
  return tools.map(tool => {
    if (seen.has(tool.name)) throw new Error(`Proxy Gateway MCP tools contain a duplicate name: ${tool.name}`);
    seen.add(tool.name);
    const fn = { name: tool.name, ...(tool.description == null ? {} : { description: tool.description }), parameters: tool.parameters, strict: false };
    return protocol === "chat-completions" ? { type: "function", function: fn } : { type: "function", ...fn };
  });
}

type RequestLease = { timer: ReturnType<typeof setTimeout>; controller: AbortController; timedOut: boolean; callerAborted: boolean; cleanup(): void };
const requestLeases = new WeakMap<Response, RequestLease>();

async function readWithLease(reader: ReadableStreamDefaultReader<Uint8Array>, lease: RequestLease | undefined): Promise<ReadableStreamReadResult<Uint8Array>> {
  if (lease == null) return reader.read();
  if (lease.controller.signal.aborted) throw new Error("Proxy Gateway stream aborted.");
  return await new Promise((resolve, reject) => {
    const onAbort = () => reject(new Error("Proxy Gateway stream aborted."));
    lease.controller.signal.addEventListener("abort", onAbort, { once: true });
    void reader.read().then(resolve, reject).finally(() => lease.controller.signal.removeEventListener("abort", onAbort));
  });
}

function cancellationError(options: OpenAiCompatibleOptions): Error | null {
  return options.signal?.aborted === true ? new Error("Proxy Gateway request was cancelled.") : null;
}

async function boundedRequest(options: OpenAiCompatibleOptions, endpoint: "chat/completions" | "responses", body: unknown): Promise<Response> {
  const serialized = JSON.stringify(body);
  if (Buffer.byteLength(serialized) > PROXY_GATEWAY_MAX_JSON_BYTES) throw new Error("Proxy Gateway request is too large.");
  const controller = new AbortController();
  const lease = { timer: undefined as unknown as ReturnType<typeof setTimeout>, controller, timedOut: false, callerAborted: false, cleanup: () => {} };
  const onCallerAbort = () => { lease.callerAborted = true; controller.abort(); };
  if (options.signal?.aborted === true) throw new Error("Proxy Gateway request was cancelled.");
  options.signal?.addEventListener("abort", onCallerAbort, { once: true });
  lease.timer = setTimeout(() => { lease.timedOut = true; controller.abort(); }, options.timeoutMs ?? PROXY_GATEWAY_REQUEST_TIMEOUT_MS);
  lease.timer.unref?.();
  lease.cleanup = () => { clearTimeout(lease.timer); options.signal?.removeEventListener("abort", onCallerAbort); };
  try {
    const response = await (options.fetch ?? fetch)(proxyGatewayEndpoint(options.config, endpoint), {
      method: "POST",
      headers: { authorization: `Bearer ${options.config.apiKey}`, "content-type": "application/json", accept: "text/event-stream", "user-agent": "grok-bot-proxy-gateway/1" },
      body: serialized,
      redirect: "error",
      signal: controller.signal,
    });
    if (!response.ok) {
      try { await response.body?.cancel(); } catch {}
      lease.cleanup();
      throw new Error(`Proxy Gateway ${endpoint === "responses" ? "Responses" : "Chat Completions"} request failed with HTTP ${response.status}.`);
    }
    requestLeases.set(response, lease);
    return response;
  } catch (error) {
    lease.cleanup();
    if (lease.callerAborted) throw new Error("Proxy Gateway request was cancelled.");
    if (lease.timedOut) throw new Error("Proxy Gateway request timed out.");
    if (error instanceof Error && error.message.startsWith("Proxy Gateway ")) throw error;
    throw new Error("Proxy Gateway request could not be completed.");
  }
}

const SSE_DONE = Symbol("proxy-gateway-sse-done");

async function* sse(response: Response): AsyncGenerator<Loose | typeof SSE_DONE> {
  const lease = requestLeases.get(response);
  if (response.body == null) {
    lease?.cleanup(); requestLeases.delete(response);
    throw new Error("Proxy Gateway response did not include a stream.");
  }
  const reader = response.body.getReader(), decoder = new TextDecoder();
  let buffer = "", bytes = 0;
  try {
    while (true) {
      const { done, value } = await readWithLease(reader, lease);
      if (value != null) {
        bytes += value.byteLength;
        if (bytes > PROXY_GATEWAY_MAX_STREAM_BYTES) throw new Error("Proxy Gateway response exceeded the stream size limit.");
      }
      buffer += decoder.decode(value, { stream: !done });
      if (buffer.length > PROXY_GATEWAY_MAX_JSON_BYTES) throw new Error("Proxy Gateway sent an oversized SSE event.");
      let boundary: number;
      while ((boundary = buffer.search(/\r?\n\r?\n/)) !== -1) {
        const match = /\r?\n\r?\n/.exec(buffer.slice(boundary))!;
        const block = buffer.slice(0, boundary).replaceAll("\r", "");
        buffer = buffer.slice(boundary + match[0].length);
        const data = block.split("\n").filter(line => line.startsWith("data:")).map(line => line.slice(5).trimStart()).join("\n");
        if (data.length === 0) continue;
        if (data === "[DONE]") {
          yield SSE_DONE;
          return;
        }
        let parsed: unknown;
        try { parsed = JSON.parse(data); } catch { throw new Error("Proxy Gateway returned malformed streaming JSON."); }
        const event = record(parsed); if (event != null) yield event;
      }
      if (done) break;
    }
    if (buffer.trim() === "data: [DONE]") yield SSE_DONE;
    else if (buffer.trim().length > 0) throw new Error("Proxy Gateway stream ended with an incomplete event.");
  } catch (error) {
    if (lease?.callerAborted) throw new Error("Proxy Gateway request was cancelled.");
    if (lease?.timedOut) throw new Error("Proxy Gateway request timed out.");
    throw error;
  } finally { lease?.cleanup(); requestLeases.delete(response); try { await reader.cancel(); } catch {} try { reader.releaseLock(); } catch {} }
}

type ToolCall = { id: string; name: string; arguments: string };

function imageDataUrl(value: unknown, mimeType: unknown): string | null {
  if (typeof value === "string") {
    if (/^(?:data:image\/|https:\/\/)/iu.test(value)) return value;
    if (typeof mimeType === "string" && /^image\/[a-z0-9.+-]+$/iu.test(mimeType)) {
      return `data:${mimeType};base64,${value}`;
    }
    return null;
  }
  const bytes = value instanceof Uint8Array
    ? value
    : value instanceof ArrayBuffer
      ? new Uint8Array(value)
      : null;
  if (bytes == null || typeof mimeType !== "string" || !/^image\/[a-z0-9.+-]+$/iu.test(mimeType)) return null;
  return `data:${mimeType};base64,${Buffer.from(bytes).toString("base64")}`;
}

function chatUserContent(content: unknown): string | Loose[] {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return safeJson(content);
  const parts = content.flatMap((raw): Loose[] => {
    const part = record(raw);
    if (part?.type === "text" && typeof part.text === "string") return [{ type: "text", text: part.text }];
    if (part?.type === "image") {
      const url = imageDataUrl(part.image, part.mimeType);
      return url == null ? [] : [{ type: "image_url", image_url: { url } }];
    }
    return [];
  });
  return parts.length > 0 ? parts : safeJson(content);
}

function chatAssistantMessage(content: unknown): Loose {
  if (typeof content === "string") return { role: "assistant", content };
  if (!Array.isArray(content)) return { role: "assistant", content: safeJson(content) };
  const text = content.flatMap(raw => {
    const part = record(raw);
    return part?.type === "text" && typeof part.text === "string" ? [part.text] : [];
  }).join("");
  const toolCalls = content.flatMap((raw): Loose[] => {
    const part = record(raw);
    if (part?.type !== "tool-call" || typeof part.toolCallId !== "string" || typeof part.toolName !== "string") return [];
    return [{
      id: part.toolCallId,
      type: "function",
      function: { name: part.toolName, arguments: typeof part.args === "string" ? part.args : safeJson(part.args) },
    }];
  });
  return {
    role: "assistant",
    content: text.length > 0 ? text : null,
    ...(toolCalls.length === 0 ? {} : { tool_calls: toolCalls }),
  };
}

const TRAILING_TOOL_CALL_TAG = /<tool_call_id>[A-Za-z0-9]{7}<\/tool_call_id>$/u;

function splitTrailingToolCallTag(value: string): { readonly body: string; readonly tag: string } | null {
  const match = TRAILING_TOOL_CALL_TAG.exec(value);
  if (match == null) return null;
  const beforeTag = value.slice(0, match.index);
  return {
    body: beforeTag.endsWith("\n") ? beforeTag.slice(0, -1) : beforeTag,
    tag: match[0],
  };
}

function mergeToolResultText(primary: string, experimental: string): string {
  if (experimental.length === 0 || experimental === primary) return primary;
  const primaryTagged = splitTrailingToolCallTag(primary);
  const experimentalTagged = splitTrailingToolCallTag(experimental);
  if (primaryTagged != null && experimentalTagged?.tag === primaryTagged.tag) {
    if (experimentalTagged.body === primaryTagged.body) return primary;
    if (primaryTagged.body.length === 0 || experimentalTagged.body.startsWith(`${primaryTagged.body}\n`)) return experimental;
    if (experimentalTagged.body.length === 0 || primaryTagged.body.startsWith(`${experimentalTagged.body}\n`)) return primary;
    return `${primaryTagged.body}\n${experimentalTagged.body}\n${primaryTagged.tag}`;
  }
  if (experimental.startsWith(`${primary}\n`)) return experimental;
  if (primary.startsWith(`${experimental}\n`)) return primary;
  return `${primary}\n${experimental}`;
}

function chatToolMessages(content: unknown): { messages: Loose[]; supplementalImages: Loose[] } {
  if (!Array.isArray(content)) return { messages: [{ role: "user", content: safeJson(content) }], supplementalImages: [] };
  const toolMessages: Loose[] = [];
  const supplementalImages: Loose[] = [];
  for (const raw of content) {
    const part = record(raw);
    if (part?.type !== "tool-result" || typeof part.toolCallId !== "string") continue;
    const experimental = Array.isArray(part.experimental_content) ? part.experimental_content : [];
    const experimentalText = experimental.flatMap(item => {
      const entry = record(item);
      return entry?.type === "text" && typeof entry.text === "string" ? [entry.text] : [];
    }).join("\n");
    const primary = typeof part.result === "string" ? part.result : null;
    const output = primary == null
      ? experimentalText.length > 0 ? experimentalText : safeJson(part.result)
      : mergeToolResultText(primary, experimentalText);
    toolMessages.push({ role: "tool", tool_call_id: part.toolCallId, content: output });
    for (const item of experimental) {
      const entry = record(item);
      if (entry?.type !== "image") continue;
      const url = imageDataUrl(entry.data ?? entry.image, entry.mimeType);
      if (url != null) supplementalImages.push({ type: "image_url", image_url: { url } });
    }
  }
  return toolMessages.length > 0
    ? { messages: toolMessages, supplementalImages }
    : { messages: [{ role: "user", content: safeJson(content) }], supplementalImages: [] };
}

function nativeChatMessages(instructions: string, messages: OpenAiCompatibleOptions["messages"]): Loose[] {
  const rendered: Loose[] = [{ role: "system", content: instructions }];
  let pendingToolImages: Loose[] = [];
  const flushToolImages = () => {
    if (pendingToolImages.length === 0) return;
    rendered.push({
      role: "user",
      content: [{ type: "text", text: "Visual output returned by the preceding Grok Bot tool call." }, ...pendingToolImages],
    });
    pendingToolImages = [];
  };
  for (const message of messages) {
    if (message.role === "tool") {
      const tool = chatToolMessages(message.content);
      rendered.push(...tool.messages);
      pendingToolImages.push(...tool.supplementalImages);
      continue;
    }
    flushToolImages();
    if (message.role === "assistant") rendered.push(chatAssistantMessage(message.content));
    else if (message.role === "system") rendered.push({ role: "system", content: typeof message.content === "string" ? message.content : safeJson(message.content) });
    else rendered.push({ role: "user", content: chatUserContent(message.content) });
  }
  flushToolImages();
  return rendered;
}

function boundedToolOutput(value: unknown): string {
  const output = safeJson(value);
  return Buffer.byteLength(output) <= PROXY_GATEWAY_MAX_JSON_BYTES ? output : safeJson({ isError: true, error: "Tool result exceeded the size limit." });
}

async function executeCalls(calls: readonly ToolCall[], tools: readonly OpenAiCompatibleTool[] | undefined, executeTool: OpenAiCompatibleOptions["executeTool"], signal?: AbortSignal): Promise<Array<{ call: ToolCall; output: string }>> {
  if (calls.length === 0) return [];
  if (executeTool == null) throw new Error("Proxy Gateway requested an MCP tool while tool routing is disabled.");
  const byName = new Map((tools ?? []).map(tool => [tool.name, tool]));
  const callIds = new Set<string>();
  const results = [];
  for (const call of calls) {
    if (signal?.aborted) throw new Error("Proxy Gateway request was cancelled.");
    if (call.id.trim().length === 0 || call.name.trim().length === 0) throw new Error("Proxy Gateway returned an invalid tool call.");
    if (callIds.has(call.id)) throw new Error("Proxy Gateway returned duplicate tool-call identifiers.");
    callIds.add(call.id);
    const selected = byName.get(call.name);
    if (selected == null) { results.push({ call, output: safeJson({ isError: true, error: "Unknown Grok Bot tool." }) }); continue; }
    let args: unknown;
    try { args = call.arguments.length === 0 ? {} : JSON.parse(call.arguments); }
    catch { results.push({ call, output: safeJson({ isError: true, error: "Tool arguments were not valid JSON." }) }); continue; }
    try { results.push({ call, output: boundedToolOutput(await executeTool(selected, args, call.id)) }); }
    catch { results.push({ call, output: safeJson({ isError: true, error: "Tool execution failed." }) }); }
    if (signal?.aborted) throw new Error("Proxy Gateway request was cancelled.");
  }
  return results;
}

async function* streamChat(options: OpenAiCompatibleOptions, irreversible: () => void): AsyncGenerator<OpenAiCompatibleEvent> {
  const model = requireProxyGatewayModel(options.config.model), maxSteps = options.maxSteps ?? 8;
  const declaredTools = requestTools(options.tools, "chat-completions");
  let messages: Loose[] = [{ role: "system", content: options.instructions }, ...options.messages.map(message => ({ role: message.role === "assistant" ? "assistant" : "user", content: typeof message.content === "string" ? message.content : safeJson(message.content) }))];
  let text = "", responseId = "", usage = zeroUsage();
  for (let step = 0; step < maxSteps; step += 1) {
    const response = await boundedRequest(options, "chat/completions", { model, messages, ...(declaredTools == null ? {} : { tools: declaredTools, tool_choice: "auto", parallel_tool_calls: true }), stream: true, stream_options: { include_usage: true } });
    const calls = new Map<number, ToolCall>();
    let stepUsage = zeroUsage(), completed = false;
    for await (const chunk of sse(response)) {
      if (chunk === SSE_DONE) { completed = true; continue; }
      if (chunk.error != null) throw new Error("Proxy Gateway Chat Completions request failed.");
      if (typeof chunk.id === "string") responseId = chunk.id;
      const observedUsage = chatUsage(chunk.usage);
      if (observedUsage.inputTokens + observedUsage.outputTokens + observedUsage.cacheReadTokens > 0) stepUsage = observedUsage;
      const choices = Array.isArray(chunk.choices) ? chunk.choices : [];
      for (const rawChoice of choices) {
        const choice = record(rawChoice) ?? {};
        if (typeof choice.finish_reason === "string" && choice.finish_reason.trim().length > 0) completed = true;
        const delta = record(choice.delta) ?? {};
        if (typeof delta.content === "string" && delta.content.length > 0) { irreversible(); text += delta.content; yield { type: "text-delta", delta: delta.content }; }
        const streamedToolCalls = Array.isArray(delta.tool_calls) ? delta.tool_calls : [];
        if (streamedToolCalls.length > 0) irreversible();
        for (const rawCall of streamedToolCalls) {
          const part = record(rawCall) ?? {}, index = Number.isInteger(part.index) ? part.index : calls.size, fn = record(part.function) ?? {};
          const previous = calls.get(index) ?? { id: "", name: "", arguments: "" };
          calls.set(index, { id: typeof part.id === "string" ? part.id : previous.id, name: previous.name + (typeof fn.name === "string" ? fn.name : ""), arguments: previous.arguments + (typeof fn.arguments === "string" ? fn.arguments : "") });
        }
      }
    }
    if (!completed) throw new Error("Proxy Gateway Chat Completions stream ended before completion.");
    usage = addUsage(usage, stepUsage);
    const completeCalls = [...calls.values()];
    if (completeCalls.length === 0) { yield { type: "done", text, responseId, usage, protocol: "chat-completions" }; return; }
    irreversible();
    const cancelled = cancellationError(options); if (cancelled != null) throw cancelled;
    const results = await executeCalls(completeCalls, options.tools, options.executeTool, options.signal);
    messages = [...messages, { role: "assistant", content: null, tool_calls: completeCalls.map(call => ({ id: call.id, type: "function", function: { name: call.name, arguments: call.arguments } })) }, ...results.map(({ call, output }) => ({ role: "tool", tool_call_id: call.id, content: output }))];
  }
  throw new Error(`Proxy Gateway exceeded Grok Bot's ${maxSteps}-step tool limit.`);
}

async function* streamResponses(options: OpenAiCompatibleOptions, irreversible: () => void): AsyncGenerator<OpenAiCompatibleEvent> {
  const model = requireProxyGatewayModel(options.config.model), maxSteps = options.maxSteps ?? 8;
  const declaredTools = requestTools(options.tools, "responses");
  let input: Loose[] = options.messages.map(message => ({ role: message.role === "assistant" ? "assistant" : "user", content: typeof message.content === "string" ? message.content : safeJson(message.content) }));
  let text = "", responseId = "", usage = zeroUsage();
  for (let step = 0; step < maxSteps; step += 1) {
    const response = await boundedRequest(options, "responses", { model, instructions: options.instructions, input, ...(declaredTools == null ? {} : { tools: declaredTools, tool_choice: "auto", parallel_tool_calls: true }), stream: true, store: false });
    let completed: Loose | null = null; const observed: Loose[] = [];
    for await (const event of sse(response)) {
      if (event === SSE_DONE) continue;
      if (event.type === "response.output_text.delta" && typeof event.delta === "string") { irreversible(); text += event.delta; yield { type: "text-delta", delta: event.delta }; }
      else if (event.type === "response.output_item.done") { const item = record(event.item); if (item != null) observed.push(item); }
      else if (event.type === "response.completed") completed = record(event.response);
      else if (event.type === "response.failed" || event.type === "error") throw new Error("Proxy Gateway Responses request failed.");
    }
    if (completed == null) throw new Error("Proxy Gateway Responses stream ended before completion.");
    if (typeof completed.id === "string") responseId = completed.id;
    usage = addUsage(usage, responsesUsage(completed.usage));
    const output = Array.isArray(completed.output) && completed.output.length > 0 ? completed.output.map(item => record(item) ?? {}) : observed;
    const calls: ToolCall[] = output.flatMap(item => item.type === "function_call" && typeof item.call_id === "string" && typeof item.name === "string" ? [{ id: item.call_id, name: item.name, arguments: typeof item.arguments === "string" ? item.arguments : "" }] : []);
    if (calls.length === 0) { yield { type: "done", text, responseId, usage, protocol: "responses" }; return; }
    irreversible();
    const cancelled = cancellationError(options); if (cancelled != null) throw cancelled;
    const results = await executeCalls(calls, options.tools, options.executeTool, options.signal);
    input = [...input, ...output, ...results.map(({ call, output: toolOutput }) => ({ type: "function_call_output", call_id: call.id, output: toolOutput }))];
  }
  throw new Error(`Proxy Gateway exceeded Grok Bot's ${maxSteps}-step tool limit.`);
}

export async function* streamOpenAiCompatible(options: OpenAiCompatibleOptions): AsyncGenerator<OpenAiCompatibleEvent> {
  const configured = options.config.protocol;
  if (configured !== "auto") {
    yield* configured === "responses" ? streamResponses(options, () => {}) : streamChat(options, () => {});
    return;
  }
  let irreversible = false;
  try { yield* streamChat(options, () => { irreversible = true; }); }
  catch (error) {
    if (irreversible) throw error;
    yield* streamResponses(options, () => { irreversible = true; });
  }
}

/**
 * Executes exactly one Chat Completions model step for Grok Bot's native agent
 * loop. Tool calls are emitted, not executed here; the host's reviewed tool
 * runtime executes them and appends the resulting `tool` messages before the
 * next model step.
 */
export async function* streamOpenAiCompatibleModelStep(
  options: Omit<OpenAiCompatibleOptions, "executeTool" | "maxSteps">,
): AsyncGenerator<OpenAiCompatibleModelStepEvent> {
  if (options.config.protocol === "responses") {
    throw new Error("Proxy Gateway Responses mode is not available for Grok Bot's native tools. Choose Chat Completions or Auto.");
  }
  const model = requireProxyGatewayModel(options.config.model);
  const declaredTools = requestTools(options.tools, "chat-completions");
  const response = await boundedRequest(options, "chat/completions", {
    model,
    messages: nativeChatMessages(options.instructions, options.messages),
    ...(declaredTools == null ? {} : { tools: declaredTools, tool_choice: "auto", parallel_tool_calls: true }),
    stream: true,
    stream_options: { include_usage: true },
  });
  const calls = new Map<number, ToolCall>();
  let responseId = "";
  let text = "";
  let usage = zeroUsage();
  let completed = false;
  for await (const chunk of sse(response)) {
    if (chunk === SSE_DONE) { completed = true; continue; }
    if (chunk.error != null) throw new Error("Proxy Gateway Chat Completions request failed.");
    if (typeof chunk.id === "string") responseId = chunk.id;
    const observedUsage = chatUsage(chunk.usage);
    if (observedUsage.inputTokens + observedUsage.outputTokens + observedUsage.cacheReadTokens > 0) usage = observedUsage;
    const choices = Array.isArray(chunk.choices) ? chunk.choices : [];
    for (const rawChoice of choices) {
      const choice = record(rawChoice) ?? {};
      if (typeof choice.finish_reason === "string" && choice.finish_reason.trim().length > 0) completed = true;
      const delta = record(choice.delta) ?? {};
      if (typeof delta.content === "string" && delta.content.length > 0) {
        text += delta.content;
        yield { type: "text-delta", textDelta: delta.content };
      }
      for (const rawCall of Array.isArray(delta.tool_calls) ? delta.tool_calls : []) {
        const part = record(rawCall) ?? {};
        const index = Number.isInteger(part.index) ? part.index : calls.size;
        const fn = record(part.function) ?? {};
        const previous = calls.get(index) ?? { id: "", name: "", arguments: "" };
        calls.set(index, {
          id: typeof part.id === "string" ? part.id : previous.id,
          name: previous.name + (typeof fn.name === "string" ? fn.name : ""),
          arguments: previous.arguments + (typeof fn.arguments === "string" ? fn.arguments : ""),
        });
      }
    }
  }
  if (!completed) throw new Error("Proxy Gateway Chat Completions stream ended before completion.");
  const callIds = new Set<string>();
  const content: Array<{ type: "text"; text: string } | { type: "tool-call"; toolCallId: string; toolName: string; args: unknown }> = [];
  if (text.length > 0) content.push({ type: "text", text });
  for (const call of calls.values()) {
    if (call.id.trim().length === 0 || call.name.trim().length === 0 || callIds.has(call.id)) {
      throw new Error("Proxy Gateway returned an invalid tool call.");
    }
    callIds.add(call.id);
    let args: unknown;
    try { args = call.arguments.length === 0 ? {} : JSON.parse(call.arguments); }
    catch { args = call.arguments; }
    const event = { type: "tool-call" as const, toolCallId: call.id, toolName: call.name, args };
    content.push(event);
    yield event;
  }
  yield { type: "done", responseId, usage, content, protocol: "chat-completions" };
}
