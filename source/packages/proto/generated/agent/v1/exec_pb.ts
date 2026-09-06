/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:65281-65806
 * Region SHA-256: fd81fa7df18ed8c8bcd43cadaad2e893a6901b64ebcfd2f95551a582a543722a
 * B11 exports: 13 messages + 0 enums + 0 services = 13
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { AdoptArgs, AdoptResult } from "./adopt_tool_pb.js";
import { PreCompactRequestQuery, PreCompactRequestResponse, SubagentStartRequestQuery, SubagentStartRequestResponse, SubagentStopRequestQuery, SubagentStopRequestResponse, BeforeSubmitPromptRequestQuery, BeforeSubmitPromptRequestResponse, AfterAgentResponseRequestQuery, AfterAgentResponseRequestResponse, AfterAgentThoughtRequestQuery, AfterAgentThoughtRequestResponse, StopRequestQuery, StopRequestResponse, PreToolUseRequestQuery, PreToolUseRequestResponse, PostToolUseRequestQuery, PostToolUseRequestResponse, PostToolUseFailureRequestQuery, PostToolUseFailureRequestResponse } from "./agent_pb.js";
import { AgentStoreConflictArgs, AgentStoreConflictResult } from "./agent_store_conflict_exec_pb.js";
import { BackgroundShellSpawnArgs, BackgroundShellSpawnResult, WriteShellStdinArgs, WriteShellStdinResult } from "./background_shell_exec_pb.js";
import { CanvasDiagnosticsArgs, CanvasDiagnosticsResult } from "./canvas_diagnostics_exec_pb.js";
import { ComputerUseArgs, ComputerUseResult } from "./computer_use_tool_pb.js";
import { ConversationSearchArgs, ConversationSearchResult } from "./conversation_search_exec_pb.js";
import { DeleteArgs, DeleteResult } from "./delete_exec_pb.js";
import { DiagnosticsArgs, DiagnosticsResult } from "./diagnostics_exec_pb.js";
import { FetchArgs, FetchResult } from "./fetch_exec_pb.js";
import { GrepArgs, GrepResult } from "./grep_exec_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";
import { LsArgs, LsResult } from "./ls_exec_pb.js";
import { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult } from "./mcp_allowlist_precheck_exec_pb.js";
import { McpArgs, McpResult, McpStateExecArgs, McpStateExecResult, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult } from "./mcp_exec_pb.js";
import { PiBashExecArgs, PiBashExecResult } from "./pi_bash_exec_pb.js";
import { PiEditExecArgs, PiEditExecResult } from "./pi_edit_exec_pb.js";
import { PiFindExecArgs, PiFindExecResult } from "./pi_find_exec_pb.js";
import { PiGrepExecArgs, PiGrepExecResult } from "./pi_grep_exec_pb.js";
import { PiLsExecArgs, PiLsExecResult } from "./pi_ls_exec_pb.js";
import { PiReadExecArgs, PiReadExecResult } from "./pi_read_exec_pb.js";
import { PiWriteExecArgs, PiWriteExecResult } from "./pi_write_exec_pb.js";
import { ReadArgs, ReadResult } from "./read_exec_pb.js";
import { RecordScreenArgs, RecordScreenResult } from "./record_screen_exec_pb.js";
import { RequestContextArgs, RequestContextResult } from "./request_context_exec_pb.js";
import { ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult } from "./shell_allowlist_precheck_exec_pb.js";
import { ForceBackgroundShellArgs, ForceBackgroundShellResult, ShellArgs, ShellResult, ShellStream } from "./shell_exec_pb.js";
import { SmartModeClassifierArgs, SmartModeClassifierResult } from "./smart_mode_classifier_exec_pb.js";
import { SubagentArgs, SubagentResult, SubagentAwaitArgs, SubagentAwaitResult, ForceBackgroundSubagentArgs, ForceBackgroundSubagentResult } from "./subagent_exec_pb.js";
import { WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult } from "./web_fetch_allowlist_precheck_exec_pb.js";
import { WriteArgs, WriteResult } from "./write_exec_pb.js";
import { GetDiffRequest, GetDiffResponse } from "../../aiserver/v1/utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ExecClientStreamClose$Runtime = (() => class _ExecClientStreamClose extends Message<_ExecClientStreamClose> {
  declare id: number;
  constructor(data?: PartialMessage<_ExecClientStreamClose>) {
    super();
    this.id = 0;
    proto3.util.initPartial(data, this as _ExecClientStreamClose);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecClientStreamClose {
    return new _ExecClientStreamClose().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecClientStreamClose {
    return new _ExecClientStreamClose().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecClientStreamClose {
    return new _ExecClientStreamClose().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecClientStreamClose | PlainMessage<_ExecClientStreamClose> | undefined | null, b2: _ExecClientStreamClose | PlainMessage<_ExecClientStreamClose> | undefined | null): boolean {
    return proto3.util.equals(_ExecClientStreamClose as unknown as MessageType<_ExecClientStreamClose>, a, b2);
  }
})();
export type ExecClientStreamClose = InstanceType<typeof ExecClientStreamClose$Runtime>;
var ExecClientStreamClose: MessageType<ExecClientStreamClose> = ExecClientStreamClose$Runtime as unknown as MessageType<ExecClientStreamClose>;
(ExecClientStreamClose as MutableMessageType<ExecClientStreamClose>).runtime = proto3;
(ExecClientStreamClose as MutableMessageType<ExecClientStreamClose>).typeName = "agent.v1.ExecClientStreamClose";
(ExecClientStreamClose as MutableMessageType<ExecClientStreamClose>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ExecClientThrow$Runtime = (() => class _ExecClientThrow extends Message<_ExecClientThrow> {
  declare id: number;
  declare error: string;
  declare stackTrace?: string;
  declare errorCode?: string;
  constructor(data?: PartialMessage<_ExecClientThrow>) {
    super();
    this.id = 0;
    this.error = "";
    proto3.util.initPartial(data, this as _ExecClientThrow);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecClientThrow {
    return new _ExecClientThrow().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecClientThrow {
    return new _ExecClientThrow().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecClientThrow {
    return new _ExecClientThrow().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecClientThrow | PlainMessage<_ExecClientThrow> | undefined | null, b2: _ExecClientThrow | PlainMessage<_ExecClientThrow> | undefined | null): boolean {
    return proto3.util.equals(_ExecClientThrow as unknown as MessageType<_ExecClientThrow>, a, b2);
  }
})();
export type ExecClientThrow = InstanceType<typeof ExecClientThrow$Runtime>;
var ExecClientThrow: MessageType<ExecClientThrow> = ExecClientThrow$Runtime as unknown as MessageType<ExecClientThrow>;
(ExecClientThrow as MutableMessageType<ExecClientThrow>).runtime = proto3;
(ExecClientThrow as MutableMessageType<ExecClientThrow>).typeName = "agent.v1.ExecClientThrow";
(ExecClientThrow as MutableMessageType<ExecClientThrow>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "stack_trace", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "error_code", kind: "scalar", T: 9, opt: true }
]);
var ExecClientHeartbeat$Runtime = (() => class _ExecClientHeartbeat extends Message<_ExecClientHeartbeat> {
  declare id: number;
  constructor(data?: PartialMessage<_ExecClientHeartbeat>) {
    super();
    this.id = 0;
    proto3.util.initPartial(data, this as _ExecClientHeartbeat);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecClientHeartbeat {
    return new _ExecClientHeartbeat().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecClientHeartbeat {
    return new _ExecClientHeartbeat().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecClientHeartbeat {
    return new _ExecClientHeartbeat().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecClientHeartbeat | PlainMessage<_ExecClientHeartbeat> | undefined | null, b2: _ExecClientHeartbeat | PlainMessage<_ExecClientHeartbeat> | undefined | null): boolean {
    return proto3.util.equals(_ExecClientHeartbeat as unknown as MessageType<_ExecClientHeartbeat>, a, b2);
  }
})();
export type ExecClientHeartbeat = InstanceType<typeof ExecClientHeartbeat$Runtime>;
var ExecClientHeartbeat: MessageType<ExecClientHeartbeat> = ExecClientHeartbeat$Runtime as unknown as MessageType<ExecClientHeartbeat>;
(ExecClientHeartbeat as MutableMessageType<ExecClientHeartbeat>).runtime = proto3;
(ExecClientHeartbeat as MutableMessageType<ExecClientHeartbeat>).typeName = "agent.v1.ExecClientHeartbeat";
(ExecClientHeartbeat as MutableMessageType<ExecClientHeartbeat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ExecClientControlMessage$Runtime = (() => class _ExecClientControlMessage extends Message<_ExecClientControlMessage> {
  declare message: { case: "streamClose"; value: ExecClientStreamClose } | { case: "throw"; value: ExecClientThrow } | { case: "heartbeat"; value: ExecClientHeartbeat } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecClientControlMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecClientControlMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecClientControlMessage {
    return new _ExecClientControlMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecClientControlMessage {
    return new _ExecClientControlMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecClientControlMessage {
    return new _ExecClientControlMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecClientControlMessage | PlainMessage<_ExecClientControlMessage> | undefined | null, b2: _ExecClientControlMessage | PlainMessage<_ExecClientControlMessage> | undefined | null): boolean {
    return proto3.util.equals(_ExecClientControlMessage as unknown as MessageType<_ExecClientControlMessage>, a, b2);
  }
})();
export type ExecClientControlMessage = InstanceType<typeof ExecClientControlMessage$Runtime>;
var ExecClientControlMessage: MessageType<ExecClientControlMessage> = ExecClientControlMessage$Runtime as unknown as MessageType<ExecClientControlMessage>;
(ExecClientControlMessage as MutableMessageType<ExecClientControlMessage>).runtime = proto3;
(ExecClientControlMessage as MutableMessageType<ExecClientControlMessage>).typeName = "agent.v1.ExecClientControlMessage";
(ExecClientControlMessage as MutableMessageType<ExecClientControlMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stream_close", kind: "message", T: ExecClientStreamClose, oneof: "message" },
  { no: 2, name: "throw", kind: "message", T: ExecClientThrow, oneof: "message" },
  { no: 3, name: "heartbeat", kind: "message", T: ExecClientHeartbeat, oneof: "message" }
]);
var SpanContext$Runtime = (() => class _SpanContext extends Message<_SpanContext> {
  declare traceId: string;
  declare spanId: string;
  declare traceFlags?: number;
  declare traceState?: string;
  constructor(data?: PartialMessage<_SpanContext>) {
    super();
    this.traceId = "";
    this.spanId = "";
    proto3.util.initPartial(data, this as _SpanContext);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SpanContext {
    return new _SpanContext().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SpanContext {
    return new _SpanContext().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SpanContext {
    return new _SpanContext().fromJsonString(jsonString, options2);
  }
  static equals(a: _SpanContext | PlainMessage<_SpanContext> | undefined | null, b2: _SpanContext | PlainMessage<_SpanContext> | undefined | null): boolean {
    return proto3.util.equals(_SpanContext as unknown as MessageType<_SpanContext>, a, b2);
  }
})();
export type SpanContext = InstanceType<typeof SpanContext$Runtime>;
var SpanContext: MessageType<SpanContext> = SpanContext$Runtime as unknown as MessageType<SpanContext>;
(SpanContext as MutableMessageType<SpanContext>).runtime = proto3;
(SpanContext as MutableMessageType<SpanContext>).typeName = "agent.v1.SpanContext";
(SpanContext as MutableMessageType<SpanContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "trace_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "trace_flags", kind: "scalar", T: 13, opt: true },
  { no: 4, name: "trace_state", kind: "scalar", T: 9, opt: true }
]);
var AbortArgs$Runtime = (() => class _AbortArgs extends Message<_AbortArgs> {
  constructor(data?: PartialMessage<_AbortArgs>) {
    super();
    proto3.util.initPartial(data, this as _AbortArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AbortArgs {
    return new _AbortArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AbortArgs {
    return new _AbortArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AbortArgs {
    return new _AbortArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _AbortArgs | PlainMessage<_AbortArgs> | undefined | null, b2: _AbortArgs | PlainMessage<_AbortArgs> | undefined | null): boolean {
    return proto3.util.equals(_AbortArgs as unknown as MessageType<_AbortArgs>, a, b2);
  }
})();
export type AbortArgs = InstanceType<typeof AbortArgs$Runtime>;
var AbortArgs: MessageType<AbortArgs> = AbortArgs$Runtime as unknown as MessageType<AbortArgs>;
(AbortArgs as MutableMessageType<AbortArgs>).runtime = proto3;
(AbortArgs as MutableMessageType<AbortArgs>).typeName = "agent.v1.AbortArgs";
(AbortArgs as MutableMessageType<AbortArgs>).fields = proto3.util.newFieldList(() => []);
var AbortResult$Runtime = (() => class _AbortResult extends Message<_AbortResult> {
  constructor(data?: PartialMessage<_AbortResult>) {
    super();
    proto3.util.initPartial(data, this as _AbortResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AbortResult {
    return new _AbortResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AbortResult {
    return new _AbortResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AbortResult {
    return new _AbortResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _AbortResult | PlainMessage<_AbortResult> | undefined | null, b2: _AbortResult | PlainMessage<_AbortResult> | undefined | null): boolean {
    return proto3.util.equals(_AbortResult as unknown as MessageType<_AbortResult>, a, b2);
  }
})();
export type AbortResult = InstanceType<typeof AbortResult$Runtime>;
var AbortResult: MessageType<AbortResult> = AbortResult$Runtime as unknown as MessageType<AbortResult>;
(AbortResult as MutableMessageType<AbortResult>).runtime = proto3;
(AbortResult as MutableMessageType<AbortResult>).typeName = "agent.v1.AbortResult";
(AbortResult as MutableMessageType<AbortResult>).fields = proto3.util.newFieldList(() => []);
var ExecServerMessage$Runtime = (() => class _ExecServerMessage extends Message<_ExecServerMessage> {
  declare id: number;
  declare execId: string;
  declare spanContext?: SpanContext;
  declare acceptHookAdditionalContexts?: boolean;
  declare message: { case: "shellArgs"; value: ShellArgs } | { case: "writeArgs"; value: WriteArgs } | { case: "deleteArgs"; value: DeleteArgs } | { case: "grepArgs"; value: GrepArgs } | { case: "readArgs"; value: ReadArgs } | { case: "redactedReadArgs"; value: ReadArgs } | { case: "lsArgs"; value: LsArgs } | { case: "diagnosticsArgs"; value: DiagnosticsArgs } | { case: "requestContextArgs"; value: RequestContextArgs } | { case: "mcpArgs"; value: McpArgs } | { case: "shellStreamArgs"; value: ShellArgs } | { case: "backgroundShellSpawnArgs"; value: BackgroundShellSpawnArgs } | { case: "listMcpResourcesExecArgs"; value: ListMcpResourcesExecArgs } | { case: "readMcpResourceExecArgs"; value: ReadMcpResourceExecArgs } | { case: "mcpStateExecArgs"; value: McpStateExecArgs } | { case: "fetchArgs"; value: FetchArgs } | { case: "recordScreenArgs"; value: RecordScreenArgs } | { case: "computerUseArgs"; value: ComputerUseArgs } | { case: "writeShellStdinArgs"; value: WriteShellStdinArgs } | { case: "executeHookArgs"; value: ExecuteHookArgs } | { case: "subagentArgs"; value: SubagentArgs } | { case: "forceBackgroundShellArgs"; value: ForceBackgroundShellArgs } | { case: "forceBackgroundSubagentArgs"; value: ForceBackgroundSubagentArgs } | { case: "subagentAwaitArgs"; value: SubagentAwaitArgs } | { case: "smartModeClassifierArgs"; value: SmartModeClassifierArgs } | { case: "canvasDiagnosticsArgs"; value: CanvasDiagnosticsArgs } | { case: "shellAllowlistPrecheckArgs"; value: ShellAllowlistPrecheckArgs } | { case: "mcpAllowlistPrecheckArgs"; value: McpAllowlistPrecheckArgs } | { case: "webFetchAllowlistPrecheckArgs"; value: WebFetchAllowlistPrecheckArgs } | { case: "gitDiffRequest"; value: GetDiffRequest } | { case: "piReadArgs"; value: PiReadExecArgs } | { case: "piBashArgs"; value: PiBashExecArgs } | { case: "piEditArgs"; value: PiEditExecArgs } | { case: "piWriteArgs"; value: PiWriteExecArgs } | { case: "piGrepArgs"; value: PiGrepExecArgs } | { case: "piFindArgs"; value: PiFindExecArgs } | { case: "piLsArgs"; value: PiLsExecArgs } | { case: "miniSweAgentBashArgs"; value: ShellArgs } | { case: "conversationSearchArgs"; value: ConversationSearchArgs } | { case: "agentStoreConflictArgs"; value: AgentStoreConflictArgs } | { case: "adoptArgs"; value: AdoptArgs } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecServerMessage>) {
    super();
    this.id = 0;
    this.execId = "";
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecServerMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecServerMessage {
    return new _ExecServerMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecServerMessage {
    return new _ExecServerMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecServerMessage {
    return new _ExecServerMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecServerMessage | PlainMessage<_ExecServerMessage> | undefined | null, b2: _ExecServerMessage | PlainMessage<_ExecServerMessage> | undefined | null): boolean {
    return proto3.util.equals(_ExecServerMessage as unknown as MessageType<_ExecServerMessage>, a, b2);
  }
})();
export type ExecServerMessage = InstanceType<typeof ExecServerMessage$Runtime>;
var ExecServerMessage: MessageType<ExecServerMessage> = ExecServerMessage$Runtime as unknown as MessageType<ExecServerMessage>;
(ExecServerMessage as MutableMessageType<ExecServerMessage>).runtime = proto3;
(ExecServerMessage as MutableMessageType<ExecServerMessage>).typeName = "agent.v1.ExecServerMessage";
(ExecServerMessage as MutableMessageType<ExecServerMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 15,
    name: "exec_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "shell_args", kind: "message", T: ShellArgs, oneof: "message" },
  { no: 3, name: "write_args", kind: "message", T: WriteArgs, oneof: "message" },
  { no: 4, name: "delete_args", kind: "message", T: DeleteArgs, oneof: "message" },
  { no: 5, name: "grep_args", kind: "message", T: GrepArgs, oneof: "message" },
  { no: 7, name: "read_args", kind: "message", T: ReadArgs, oneof: "message" },
  { no: 29, name: "redacted_read_args", kind: "message", T: ReadArgs, oneof: "message" },
  { no: 8, name: "ls_args", kind: "message", T: LsArgs, oneof: "message" },
  { no: 9, name: "diagnostics_args", kind: "message", T: DiagnosticsArgs, oneof: "message" },
  { no: 10, name: "request_context_args", kind: "message", T: RequestContextArgs, oneof: "message" },
  { no: 11, name: "mcp_args", kind: "message", T: McpArgs, oneof: "message" },
  { no: 14, name: "shell_stream_args", kind: "message", T: ShellArgs, oneof: "message" },
  { no: 16, name: "background_shell_spawn_args", kind: "message", T: BackgroundShellSpawnArgs, oneof: "message" },
  { no: 17, name: "list_mcp_resources_exec_args", kind: "message", T: ListMcpResourcesExecArgs, oneof: "message" },
  { no: 18, name: "read_mcp_resource_exec_args", kind: "message", T: ReadMcpResourceExecArgs, oneof: "message" },
  { no: 36, name: "mcp_state_exec_args", kind: "message", T: McpStateExecArgs, oneof: "message" },
  { no: 20, name: "fetch_args", kind: "message", T: FetchArgs, oneof: "message" },
  { no: 21, name: "record_screen_args", kind: "message", T: RecordScreenArgs, oneof: "message" },
  { no: 22, name: "computer_use_args", kind: "message", T: ComputerUseArgs, oneof: "message" },
  { no: 23, name: "write_shell_stdin_args", kind: "message", T: WriteShellStdinArgs, oneof: "message" },
  { no: 27, name: "execute_hook_args", kind: "message", T: ExecuteHookArgs, oneof: "message" },
  { no: 28, name: "subagent_args", kind: "message", T: SubagentArgs, oneof: "message" },
  { no: 30, name: "force_background_shell_args", kind: "message", T: ForceBackgroundShellArgs, oneof: "message" },
  { no: 31, name: "force_background_subagent_args", kind: "message", T: ForceBackgroundSubagentArgs, oneof: "message" },
  { no: 37, name: "subagent_await_args", kind: "message", T: SubagentAwaitArgs, oneof: "message" },
  { no: 38, name: "smart_mode_classifier_args", kind: "message", T: SmartModeClassifierArgs, oneof: "message" },
  { no: 40, name: "canvas_diagnostics_args", kind: "message", T: CanvasDiagnosticsArgs, oneof: "message" },
  { no: 41, name: "shell_allowlist_precheck_args", kind: "message", T: ShellAllowlistPrecheckArgs, oneof: "message" },
  { no: 42, name: "mcp_allowlist_precheck_args", kind: "message", T: McpAllowlistPrecheckArgs, oneof: "message" },
  { no: 43, name: "web_fetch_allowlist_precheck_args", kind: "message", T: WebFetchAllowlistPrecheckArgs, oneof: "message" },
  { no: 44, name: "git_diff_request", kind: "message", T: GetDiffRequest, oneof: "message" },
  { no: 45, name: "pi_read_args", kind: "message", T: PiReadExecArgs, oneof: "message" },
  { no: 46, name: "pi_bash_args", kind: "message", T: PiBashExecArgs, oneof: "message" },
  { no: 47, name: "pi_edit_args", kind: "message", T: PiEditExecArgs, oneof: "message" },
  { no: 48, name: "pi_write_args", kind: "message", T: PiWriteExecArgs, oneof: "message" },
  { no: 49, name: "pi_grep_args", kind: "message", T: PiGrepExecArgs, oneof: "message" },
  { no: 50, name: "pi_find_args", kind: "message", T: PiFindExecArgs, oneof: "message" },
  { no: 51, name: "pi_ls_args", kind: "message", T: PiLsExecArgs, oneof: "message" },
  { no: 52, name: "mini_swe_agent_bash_args", kind: "message", T: ShellArgs, oneof: "message" },
  { no: 53, name: "conversation_search_args", kind: "message", T: ConversationSearchArgs, oneof: "message" },
  { no: 54, name: "agent_store_conflict_args", kind: "message", T: AgentStoreConflictArgs, oneof: "message" },
  { no: 56, name: "adopt_args", kind: "message", T: AdoptArgs, oneof: "message" },
  { no: 19, name: "span_context", kind: "message", T: SpanContext, opt: true },
  { no: 55, name: "accept_hook_additional_contexts", kind: "scalar", T: 8, opt: true }
]);
var ExecClientMessage$Runtime = (() => class _ExecClientMessage extends Message<_ExecClientMessage> {
  declare id: number;
  declare execId: string;
  declare localExecutionTimeMs?: number;
  declare hookAdditionalContexts: HookAdditionalContext[];
  declare message: { case: "shellResult"; value: ShellResult } | { case: "writeResult"; value: WriteResult } | { case: "deleteResult"; value: DeleteResult } | { case: "grepResult"; value: GrepResult } | { case: "readResult"; value: ReadResult } | { case: "redactedReadResult"; value: ReadResult } | { case: "lsResult"; value: LsResult } | { case: "diagnosticsResult"; value: DiagnosticsResult } | { case: "requestContextResult"; value: RequestContextResult } | { case: "mcpResult"; value: McpResult } | { case: "shellStream"; value: ShellStream } | { case: "backgroundShellSpawnResult"; value: BackgroundShellSpawnResult } | { case: "listMcpResourcesExecResult"; value: ListMcpResourcesExecResult } | { case: "readMcpResourceExecResult"; value: ReadMcpResourceExecResult } | { case: "mcpStateExecResult"; value: McpStateExecResult } | { case: "fetchResult"; value: FetchResult } | { case: "recordScreenResult"; value: RecordScreenResult } | { case: "computerUseResult"; value: ComputerUseResult } | { case: "writeShellStdinResult"; value: WriteShellStdinResult } | { case: "executeHookResult"; value: ExecuteHookResult } | { case: "subagentResult"; value: SubagentResult } | { case: "forceBackgroundShellResult"; value: ForceBackgroundShellResult } | { case: "forceBackgroundSubagentResult"; value: ForceBackgroundSubagentResult } | { case: "subagentAwaitResult"; value: SubagentAwaitResult } | { case: "smartModeClassifierResult"; value: SmartModeClassifierResult } | { case: "canvasDiagnosticsResult"; value: CanvasDiagnosticsResult } | { case: "shellAllowlistPrecheckResult"; value: ShellAllowlistPrecheckResult } | { case: "mcpAllowlistPrecheckResult"; value: McpAllowlistPrecheckResult } | { case: "webFetchAllowlistPrecheckResult"; value: WebFetchAllowlistPrecheckResult } | { case: "gitDiffResponse"; value: GetDiffResponse } | { case: "piReadResult"; value: PiReadExecResult } | { case: "piBashResult"; value: PiBashExecResult } | { case: "piEditResult"; value: PiEditExecResult } | { case: "piWriteResult"; value: PiWriteExecResult } | { case: "piGrepResult"; value: PiGrepExecResult } | { case: "piFindResult"; value: PiFindExecResult } | { case: "piLsResult"; value: PiLsExecResult } | { case: "conversationSearchResult"; value: ConversationSearchResult } | { case: "agentStoreConflictResult"; value: AgentStoreConflictResult } | { case: "miniSweAgentBashResult"; value: ShellResult } | { case: "adoptResult"; value: AdoptResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecClientMessage>) {
    super();
    this.id = 0;
    this.execId = "";
    this.hookAdditionalContexts = [];
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecClientMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecClientMessage {
    return new _ExecClientMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecClientMessage {
    return new _ExecClientMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecClientMessage {
    return new _ExecClientMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecClientMessage | PlainMessage<_ExecClientMessage> | undefined | null, b2: _ExecClientMessage | PlainMessage<_ExecClientMessage> | undefined | null): boolean {
    return proto3.util.equals(_ExecClientMessage as unknown as MessageType<_ExecClientMessage>, a, b2);
  }
})();
export type ExecClientMessage = InstanceType<typeof ExecClientMessage$Runtime>;
var ExecClientMessage: MessageType<ExecClientMessage> = ExecClientMessage$Runtime as unknown as MessageType<ExecClientMessage>;
(ExecClientMessage as MutableMessageType<ExecClientMessage>).runtime = proto3;
(ExecClientMessage as MutableMessageType<ExecClientMessage>).typeName = "agent.v1.ExecClientMessage";
(ExecClientMessage as MutableMessageType<ExecClientMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 15,
    name: "exec_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 39, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true },
  { no: 45, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true },
  { no: 2, name: "shell_result", kind: "message", T: ShellResult, oneof: "message" },
  { no: 3, name: "write_result", kind: "message", T: WriteResult, oneof: "message" },
  { no: 4, name: "delete_result", kind: "message", T: DeleteResult, oneof: "message" },
  { no: 5, name: "grep_result", kind: "message", T: GrepResult, oneof: "message" },
  { no: 7, name: "read_result", kind: "message", T: ReadResult, oneof: "message" },
  { no: 29, name: "redacted_read_result", kind: "message", T: ReadResult, oneof: "message" },
  { no: 8, name: "ls_result", kind: "message", T: LsResult, oneof: "message" },
  { no: 9, name: "diagnostics_result", kind: "message", T: DiagnosticsResult, oneof: "message" },
  { no: 10, name: "request_context_result", kind: "message", T: RequestContextResult, oneof: "message" },
  { no: 11, name: "mcp_result", kind: "message", T: McpResult, oneof: "message" },
  { no: 14, name: "shell_stream", kind: "message", T: ShellStream, oneof: "message" },
  { no: 16, name: "background_shell_spawn_result", kind: "message", T: BackgroundShellSpawnResult, oneof: "message" },
  { no: 17, name: "list_mcp_resources_exec_result", kind: "message", T: ListMcpResourcesExecResult, oneof: "message" },
  { no: 18, name: "read_mcp_resource_exec_result", kind: "message", T: ReadMcpResourceExecResult, oneof: "message" },
  { no: 36, name: "mcp_state_exec_result", kind: "message", T: McpStateExecResult, oneof: "message" },
  { no: 20, name: "fetch_result", kind: "message", T: FetchResult, oneof: "message" },
  { no: 21, name: "record_screen_result", kind: "message", T: RecordScreenResult, oneof: "message" },
  { no: 22, name: "computer_use_result", kind: "message", T: ComputerUseResult, oneof: "message" },
  { no: 23, name: "write_shell_stdin_result", kind: "message", T: WriteShellStdinResult, oneof: "message" },
  { no: 27, name: "execute_hook_result", kind: "message", T: ExecuteHookResult, oneof: "message" },
  { no: 28, name: "subagent_result", kind: "message", T: SubagentResult, oneof: "message" },
  { no: 30, name: "force_background_shell_result", kind: "message", T: ForceBackgroundShellResult, oneof: "message" },
  { no: 31, name: "force_background_subagent_result", kind: "message", T: ForceBackgroundSubagentResult, oneof: "message" },
  { no: 37, name: "subagent_await_result", kind: "message", T: SubagentAwaitResult, oneof: "message" },
  { no: 38, name: "smart_mode_classifier_result", kind: "message", T: SmartModeClassifierResult, oneof: "message" },
  { no: 40, name: "canvas_diagnostics_result", kind: "message", T: CanvasDiagnosticsResult, oneof: "message" },
  { no: 41, name: "shell_allowlist_precheck_result", kind: "message", T: ShellAllowlistPrecheckResult, oneof: "message" },
  { no: 42, name: "mcp_allowlist_precheck_result", kind: "message", T: McpAllowlistPrecheckResult, oneof: "message" },
  { no: 43, name: "web_fetch_allowlist_precheck_result", kind: "message", T: WebFetchAllowlistPrecheckResult, oneof: "message" },
  { no: 44, name: "git_diff_response", kind: "message", T: GetDiffResponse, oneof: "message" },
  { no: 46, name: "pi_read_result", kind: "message", T: PiReadExecResult, oneof: "message" },
  { no: 47, name: "pi_bash_result", kind: "message", T: PiBashExecResult, oneof: "message" },
  { no: 48, name: "pi_edit_result", kind: "message", T: PiEditExecResult, oneof: "message" },
  { no: 49, name: "pi_write_result", kind: "message", T: PiWriteExecResult, oneof: "message" },
  { no: 50, name: "pi_grep_result", kind: "message", T: PiGrepExecResult, oneof: "message" },
  { no: 51, name: "pi_find_result", kind: "message", T: PiFindExecResult, oneof: "message" },
  { no: 52, name: "pi_ls_result", kind: "message", T: PiLsExecResult, oneof: "message" },
  { no: 53, name: "conversation_search_result", kind: "message", T: ConversationSearchResult, oneof: "message" },
  { no: 54, name: "agent_store_conflict_result", kind: "message", T: AgentStoreConflictResult, oneof: "message" },
  { no: 55, name: "mini_swe_agent_bash_result", kind: "message", T: ShellResult, oneof: "message" },
  { no: 56, name: "adopt_result", kind: "message", T: AdoptResult, oneof: "message" }
]);
var ExecuteHookArgs$Runtime = (() => class _ExecuteHookArgs extends Message<_ExecuteHookArgs> {
  declare request?: ExecuteHookRequest;
  constructor(data?: PartialMessage<_ExecuteHookArgs>) {
    super();
    proto3.util.initPartial(data, this as _ExecuteHookArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecuteHookArgs {
    return new _ExecuteHookArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecuteHookArgs {
    return new _ExecuteHookArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecuteHookArgs {
    return new _ExecuteHookArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecuteHookArgs | PlainMessage<_ExecuteHookArgs> | undefined | null, b2: _ExecuteHookArgs | PlainMessage<_ExecuteHookArgs> | undefined | null): boolean {
    return proto3.util.equals(_ExecuteHookArgs as unknown as MessageType<_ExecuteHookArgs>, a, b2);
  }
})();
export type ExecuteHookArgs = InstanceType<typeof ExecuteHookArgs$Runtime>;
var ExecuteHookArgs: MessageType<ExecuteHookArgs> = ExecuteHookArgs$Runtime as unknown as MessageType<ExecuteHookArgs>;
(ExecuteHookArgs as MutableMessageType<ExecuteHookArgs>).runtime = proto3;
(ExecuteHookArgs as MutableMessageType<ExecuteHookArgs>).typeName = "agent.v1.ExecuteHookArgs";
(ExecuteHookArgs as MutableMessageType<ExecuteHookArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: ExecuteHookRequest }
]);
var ExecuteHookResult$Runtime = (() => class _ExecuteHookResult extends Message<_ExecuteHookResult> {
  declare response?: ExecuteHookResponse;
  constructor(data?: PartialMessage<_ExecuteHookResult>) {
    super();
    proto3.util.initPartial(data, this as _ExecuteHookResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecuteHookResult {
    return new _ExecuteHookResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecuteHookResult {
    return new _ExecuteHookResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecuteHookResult {
    return new _ExecuteHookResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecuteHookResult | PlainMessage<_ExecuteHookResult> | undefined | null, b2: _ExecuteHookResult | PlainMessage<_ExecuteHookResult> | undefined | null): boolean {
    return proto3.util.equals(_ExecuteHookResult as unknown as MessageType<_ExecuteHookResult>, a, b2);
  }
})();
export type ExecuteHookResult = InstanceType<typeof ExecuteHookResult$Runtime>;
var ExecuteHookResult: MessageType<ExecuteHookResult> = ExecuteHookResult$Runtime as unknown as MessageType<ExecuteHookResult>;
(ExecuteHookResult as MutableMessageType<ExecuteHookResult>).runtime = proto3;
(ExecuteHookResult as MutableMessageType<ExecuteHookResult>).typeName = "agent.v1.ExecuteHookResult";
(ExecuteHookResult as MutableMessageType<ExecuteHookResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: ExecuteHookResponse }
]);
var ExecuteHookRequest$Runtime = (() => class _ExecuteHookRequest extends Message<_ExecuteHookRequest> {
  declare request: { case: "preCompact"; value: PreCompactRequestQuery } | { case: "subagentStart"; value: SubagentStartRequestQuery } | { case: "subagentStop"; value: SubagentStopRequestQuery } | { case: "preToolUse"; value: PreToolUseRequestQuery } | { case: "postToolUse"; value: PostToolUseRequestQuery } | { case: "postToolUseFailure"; value: PostToolUseFailureRequestQuery } | { case: "beforeSubmitPrompt"; value: BeforeSubmitPromptRequestQuery } | { case: "afterAgentResponse"; value: AfterAgentResponseRequestQuery } | { case: "afterAgentThought"; value: AfterAgentThoughtRequestQuery } | { case: "stop"; value: StopRequestQuery } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecuteHookRequest>) {
    super();
    this.request = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecuteHookRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecuteHookRequest {
    return new _ExecuteHookRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecuteHookRequest {
    return new _ExecuteHookRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecuteHookRequest {
    return new _ExecuteHookRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecuteHookRequest | PlainMessage<_ExecuteHookRequest> | undefined | null, b2: _ExecuteHookRequest | PlainMessage<_ExecuteHookRequest> | undefined | null): boolean {
    return proto3.util.equals(_ExecuteHookRequest as unknown as MessageType<_ExecuteHookRequest>, a, b2);
  }
})();
export type ExecuteHookRequest = InstanceType<typeof ExecuteHookRequest$Runtime>;
var ExecuteHookRequest: MessageType<ExecuteHookRequest> = ExecuteHookRequest$Runtime as unknown as MessageType<ExecuteHookRequest>;
(ExecuteHookRequest as MutableMessageType<ExecuteHookRequest>).runtime = proto3;
(ExecuteHookRequest as MutableMessageType<ExecuteHookRequest>).typeName = "agent.v1.ExecuteHookRequest";
(ExecuteHookRequest as MutableMessageType<ExecuteHookRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pre_compact", kind: "message", T: PreCompactRequestQuery, oneof: "request" },
  { no: 2, name: "subagent_start", kind: "message", T: SubagentStartRequestQuery, oneof: "request" },
  { no: 3, name: "subagent_stop", kind: "message", T: SubagentStopRequestQuery, oneof: "request" },
  { no: 4, name: "pre_tool_use", kind: "message", T: PreToolUseRequestQuery, oneof: "request" },
  { no: 5, name: "post_tool_use", kind: "message", T: PostToolUseRequestQuery, oneof: "request" },
  { no: 6, name: "post_tool_use_failure", kind: "message", T: PostToolUseFailureRequestQuery, oneof: "request" },
  { no: 7, name: "before_submit_prompt", kind: "message", T: BeforeSubmitPromptRequestQuery, oneof: "request" },
  { no: 8, name: "after_agent_response", kind: "message", T: AfterAgentResponseRequestQuery, oneof: "request" },
  { no: 9, name: "after_agent_thought", kind: "message", T: AfterAgentThoughtRequestQuery, oneof: "request" },
  { no: 11, name: "stop", kind: "message", T: StopRequestQuery, oneof: "request" }
]);
var ExecuteHookResponse$Runtime = (() => class _ExecuteHookResponse extends Message<_ExecuteHookResponse> {
  declare response: { case: "preCompact"; value: PreCompactRequestResponse } | { case: "subagentStart"; value: SubagentStartRequestResponse } | { case: "subagentStop"; value: SubagentStopRequestResponse } | { case: "preToolUse"; value: PreToolUseRequestResponse } | { case: "postToolUse"; value: PostToolUseRequestResponse } | { case: "postToolUseFailure"; value: PostToolUseFailureRequestResponse } | { case: "beforeSubmitPrompt"; value: BeforeSubmitPromptRequestResponse } | { case: "afterAgentResponse"; value: AfterAgentResponseRequestResponse } | { case: "afterAgentThought"; value: AfterAgentThoughtRequestResponse } | { case: "stop"; value: StopRequestResponse } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecuteHookResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecuteHookResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecuteHookResponse {
    return new _ExecuteHookResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecuteHookResponse {
    return new _ExecuteHookResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecuteHookResponse {
    return new _ExecuteHookResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecuteHookResponse | PlainMessage<_ExecuteHookResponse> | undefined | null, b2: _ExecuteHookResponse | PlainMessage<_ExecuteHookResponse> | undefined | null): boolean {
    return proto3.util.equals(_ExecuteHookResponse as unknown as MessageType<_ExecuteHookResponse>, a, b2);
  }
})();
export type ExecuteHookResponse = InstanceType<typeof ExecuteHookResponse$Runtime>;
var ExecuteHookResponse: MessageType<ExecuteHookResponse> = ExecuteHookResponse$Runtime as unknown as MessageType<ExecuteHookResponse>;
(ExecuteHookResponse as MutableMessageType<ExecuteHookResponse>).runtime = proto3;
(ExecuteHookResponse as MutableMessageType<ExecuteHookResponse>).typeName = "agent.v1.ExecuteHookResponse";
(ExecuteHookResponse as MutableMessageType<ExecuteHookResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pre_compact", kind: "message", T: PreCompactRequestResponse, oneof: "response" },
  { no: 2, name: "subagent_start", kind: "message", T: SubagentStartRequestResponse, oneof: "response" },
  { no: 3, name: "subagent_stop", kind: "message", T: SubagentStopRequestResponse, oneof: "response" },
  { no: 4, name: "pre_tool_use", kind: "message", T: PreToolUseRequestResponse, oneof: "response" },
  { no: 5, name: "post_tool_use", kind: "message", T: PostToolUseRequestResponse, oneof: "response" },
  { no: 6, name: "post_tool_use_failure", kind: "message", T: PostToolUseFailureRequestResponse, oneof: "response" },
  { no: 7, name: "before_submit_prompt", kind: "message", T: BeforeSubmitPromptRequestResponse, oneof: "response" },
  { no: 8, name: "after_agent_response", kind: "message", T: AfterAgentResponseRequestResponse, oneof: "response" },
  { no: 9, name: "after_agent_thought", kind: "message", T: AfterAgentThoughtRequestResponse, oneof: "response" },
  { no: 11, name: "stop", kind: "message", T: StopRequestResponse, oneof: "response" }
]);


export { ExecClientStreamClose, ExecClientThrow, ExecClientHeartbeat, ExecClientControlMessage, SpanContext, AbortArgs, AbortResult, ExecServerMessage, ExecClientMessage, ExecuteHookArgs, ExecuteHookResult, ExecuteHookRequest, ExecuteHookResponse };
