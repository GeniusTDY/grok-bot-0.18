import { setTimeout as delay } from "node:timers/promises";
import { posix } from "node:path";
import {
  ComputerUseAction,
  ComputerUseArgs,
  Coordinate,
  ClickAction,
  CursorPositionAction,
  DragAction,
  KeyAction,
  MouseButton,
  MouseDownAction,
  MouseMoveAction,
  MouseUpAction,
  ScrollAction,
  ScrollDirection,
  ScreenshotAction,
  TypeAction,
  WaitAction,
  type ComputerUseResult as GeneratedComputerUseResult,
} from "../../packages/proto/generated/agent/v1/computer_use_tool_pb.js";
import {
  backgroundShellExecutorResource,
  writeBackgroundShellInputExecutorResource,
} from "../../packages/agent-exec/background-shell.js";
import { computerUseExecutorResource } from "../../packages/agent-exec/computer-use.js";
import { shellExecutorResource } from "../../packages/agent-exec/shell.js";
import type { Executor, ExecutorOptions } from "../../packages/agent-exec/remote.js";
import type { Context as OperationContext } from "../../packages/context/core.js";
import {
  BackgroundShellSpawnArgs,
  WriteShellStdinArgs,
  type BackgroundShellSpawnResult,
  type WriteShellStdinResult,
} from "../../packages/proto/generated/agent/v1/background_shell_exec_pb.js";
import { buildHostShellArgs, type HostShellArgsInput } from "../box/box-shell-command.js";
import {
  ShellCommandParsingResult,
  ShellCommandParsingResult_ExecutableCommand,
  type ShellArgs,
  type ShellResult,
} from "../../packages/proto/generated/agent/v1/shell_exec_pb.js";
import { shellSingleQuote } from "../box/box-file-transfer.js";
import type {
  ComputerProtocolAction,
  ComputerToolDependencies,
  ComputerUseResult,
  ReportedComputerAction,
} from "./tools/sand-computer-tool.js";
import type { BrowserDriverDependencies } from "./tools/sand-browser-tools.js";
import type { SandBrowserAutoReviewOptions } from "./sand-browser-auto-review.js";
import type { SandComputerAutoReviewOptions } from "./sand-computer-auto-review.js";
import { parseShellTerminalFooter } from "./background-work.js";
import {
  SAND_BROWSER_ENCRYPTED_RESULT_MARKER,
  SAND_BROWSER_RESULT_MARKER,
  SAND_BROWSER_STDIN_READY_MARKER,
} from "./tools/sand-browser-driver-source.js";

export interface HostComputerToolProjectionInput<Context = unknown> {
  readonly resourceAccessor: { get(resource: unknown): unknown };
  readonly autoReview?: SandComputerAutoReviewOptions;
  readonly persistImage?: (
    bytes: Uint8Array,
    mimeType: string,
  ) => Promise<{ readonly fileUrl: string } | undefined>;
  readonly isUnicodeTypingEnabled?: () => boolean;
  readonly onComputerAction?: (action: ReportedComputerAction) => void;
}

export interface HostShellExecutorProjectionInput {
  readonly resourceAccessor: { get(resource: unknown): unknown };
  readonly assertNoPendingApproval: () => void;
  readonly auditShellCommand: (command: string) => void;
}

export interface HostShellExecutor {
  execute(
    context: unknown,
    args: HostShellArgsInput,
    options?: ExecutorOptions,
  ): Promise<ShellResult>;
}

export interface HostBrowserBoxOwner<Context = unknown> {
  ensureReady(context: Context, agentId: string): Promise<{ readonly terminalsFolder?: string }>;
  getAgentWindowIndex(agentId: string): number | undefined;
  uploadFile(context: Context, agentId: string, path: string, bytes: Uint8Array): Promise<void>;
  downloadFile(context: Context, agentId: string, path: string): Promise<Uint8Array>;
}

export interface HostBrowserDriverProjectionInput<Context = unknown> {
  readonly resourceAccessor: { get(resource: unknown): unknown };
  readonly box: HostBrowserBoxOwner<Context>;
  readonly getBoxId: () => string;
  readonly getWindowAgentId?: () => string;
  readonly getDefaultViewId: () => string;
  readonly executeShell: HostShellExecutor;
  readonly getPersistImage?: BrowserDriverDependencies<Context>["getPersistImage"];
  readonly autoReview?: SandBrowserAutoReviewOptions;
}

type ActionValue = Readonly<Record<string, unknown>>;

function valueRecord(value: unknown, actionCase: string): ActionValue {
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw new TypeError(`computer action ${actionCase} has no value`);
  }
  return value as ActionValue;
}

function requiredNumber(value: unknown, field: string): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`computer action field ${field} is not numeric`);
  }
  return value;
}

function requiredString(value: unknown, field: string): string {
  if (typeof value !== "string") {
    throw new TypeError(`computer action field ${field} is not textual`);
  }
  return value;
}

function optionalCoordinate(value: unknown): Coordinate | undefined {
  if (value == null) return undefined;
  const record = valueRecord(value, "coordinate");
  return new Coordinate({
    x: requiredNumber(record.x, "coordinate.x"),
    y: requiredNumber(record.y, "coordinate.y"),
  });
}

function button(value: unknown): MouseButton {
  if (typeof value !== "string") {
    throw new TypeError("computer action button is not textual");
  }
  const buttons: Readonly<Record<string, MouseButton>> = {
    LEFT: MouseButton.LEFT,
    RIGHT: MouseButton.RIGHT,
    MIDDLE: MouseButton.MIDDLE,
    BACK: MouseButton.BACK,
    FORWARD: MouseButton.FORWARD,
  };
  const result = buttons[value];
  if (result === undefined) throw new TypeError(`unknown computer action button: ${value}`);
  return result;
}

function direction(value: unknown): ScrollDirection {
  if (typeof value !== "string") {
    throw new TypeError("computer action direction is not textual");
  }
  const directions: Readonly<Record<string, ScrollDirection>> = {
    UP: ScrollDirection.UP,
    DOWN: ScrollDirection.DOWN,
    LEFT: ScrollDirection.LEFT,
    RIGHT: ScrollDirection.RIGHT,
  };
  const result = directions[value];
  if (result === undefined) throw new TypeError(`unknown computer action direction: ${value}`);
  return result;
}

function generatedAction(action: ComputerProtocolAction): ComputerUseAction {
  const actionCase = action.action.case;
  if (actionCase === undefined) throw new TypeError("computer action has no case");
  const value = valueRecord(action.action.value, actionCase);
  switch (actionCase) {
    case "mouseMove":
      {
        const coordinate = optionalCoordinate(value.coordinate);
      return new ComputerUseAction({
        action: {
          case: "mouseMove",
          value: new MouseMoveAction({
            ...(coordinate === undefined ? {} : { coordinate }),
          }),
        },
      });
      }
    case "click":
      {
        const coordinate = optionalCoordinate(value.coordinate);
      return new ComputerUseAction({
        action: {
          case: "click",
          value: new ClickAction({
            ...(coordinate === undefined ? {} : { coordinate }),
            button: button(value.button),
            count: requiredNumber(value.count, "count"),
            ...(value.modifierKeys == null ? {} : { modifierKeys: requiredString(value.modifierKeys, "modifierKeys") }),
          }),
        },
      });
      }
    case "mouseDown":
      return new ComputerUseAction({ action: { case: "mouseDown", value: new MouseDownAction({ button: button(value.button) }) } });
    case "mouseUp":
      return new ComputerUseAction({ action: { case: "mouseUp", value: new MouseUpAction({ button: button(value.button) }) } });
    case "drag": {
      if (!Array.isArray(value.path)) throw new TypeError("computer action drag path is not an array");
      const path = value.path.map(point => {
        const coordinate = optionalCoordinate(point);
        if (coordinate === undefined) throw new TypeError("computer action drag path contains no coordinate");
        return coordinate;
      });
      return new ComputerUseAction({
        action: {
          case: "drag",
          value: new DragAction({
            path,
            button: button(value.button),
            ...(value.modifierKeys == null ? {} : { modifierKeys: requiredString(value.modifierKeys, "modifierKeys") }),
          }),
        },
      });
    }
    case "scroll":
      {
        const coordinate = optionalCoordinate(value.coordinate);
      return new ComputerUseAction({
        action: {
          case: "scroll",
          value: new ScrollAction({
            ...(coordinate === undefined ? {} : { coordinate }),
            direction: direction(value.direction),
            amount: requiredNumber(value.amount, "amount"),
            ...(value.modifierKeys == null ? {} : { modifierKeys: requiredString(value.modifierKeys, "modifierKeys") }),
          }),
        },
      });
      }
    case "type":
      return new ComputerUseAction({ action: { case: "type", value: new TypeAction({ text: requiredString(value.text, "text") }) } });
    case "key":
      return new ComputerUseAction({
        action: {
          case: "key",
          value: new KeyAction({
            key: requiredString(value.key, "key"),
            ...(value.holdDurationMs == null ? {} : { holdDurationMs: requiredNumber(value.holdDurationMs, "holdDurationMs") }),
          }),
        },
      });
    case "wait":
      return new ComputerUseAction({ action: { case: "wait", value: new WaitAction({ durationMs: requiredNumber(value.durationMs, "durationMs") }) } });
    case "screenshot":
      return new ComputerUseAction({ action: { case: "screenshot", value: new ScreenshotAction({}) } });
    case "cursorPosition":
      return new ComputerUseAction({ action: { case: "cursorPosition", value: new CursorPositionAction({}) } });
    default:
      throw new TypeError(`unsupported computer action: ${actionCase}`);
  }
}

export function toGeneratedComputerUseArgs(args: {
  readonly toolCallId: string;
  readonly actions: readonly ComputerProtocolAction[];
  readonly bindUnmappedCharacters?: boolean;
  readonly description?: string;
}): ComputerUseArgs {
  return new ComputerUseArgs({
    toolCallId: args.toolCallId,
    actions: args.actions.map(generatedAction),
    ...(args.bindUnmappedCharacters === undefined ? {} : { bindUnmappedCharacters: args.bindUnmappedCharacters }),
    ...(args.description === undefined ? {} : { description: args.description }),
  });
}

function fromGeneratedComputerUseResult(result: GeneratedComputerUseResult): ComputerUseResult {
  if (result.result.case === "success") {
    const value = result.result.value;
    return {
      result: {
        case: "success",
        value: {
          ...(value.screenshot === undefined ? {} : { screenshot: value.screenshot }),
          ...(value.cursorPosition === undefined ? {} : { cursorPosition: { x: value.cursorPosition.x, y: value.cursorPosition.y } }),
        },
      },
    };
  }
  if (result.result.case === "error") {
    return { result: { case: "error", value: { error: result.result.value.error } } };
  }
  return { result: { case: "" } };
}

/**
 * Projects the real per-turn remote executor and, when enabled, the live
 * generated Auto-review classifier/controller contract into the host tool.
 */
export function createHostComputerToolDependencies<Context = unknown>(
  input: HostComputerToolProjectionInput<Context>,
): ComputerToolDependencies<Context> {
  const executor = input.resourceAccessor.get(computerUseExecutorResource) as Executor<ComputerUseArgs, GeneratedComputerUseResult>;
  return {
    resourceAccessor: input.resourceAccessor,
    async execute(context, args) {
      return fromGeneratedComputerUseResult(await executor.execute(context as never, toGeneratedComputerUseArgs(args)));
    },
    getPersistImage: () => input.persistImage,
    ...(input.isUnicodeTypingEnabled === undefined ? {} : { isUnicodeTypingEnabled: input.isUnicodeTypingEnabled }),
    ...(input.onComputerAction === undefined ? {} : { onComputerAction: input.onComputerAction }),
    ...(input.autoReview === undefined ? {} : { autoReview: input.autoReview }),
  };
}

/**
 * Projects the real box shell resource without inventing approval or audit
 * behavior. Both safety callbacks are mandatory and run before the generated
 * executor receives the caller's context and abort-bearing options.
 */
export function createHostShellExecutor(
  input: HostShellExecutorProjectionInput,
): HostShellExecutor {
  const executor = input.resourceAccessor.get(shellExecutorResource) as Executor<ShellArgs, ShellResult>;
  return {
    async execute(context, args, options?: ExecutorOptions) {
      input.assertNoPendingApproval();
      input.auditShellCommand(args.command);
      return await executor.execute(
        context as OperationContext,
        buildHostShellArgs(args),
        options,
      );
    },
  };
}

/**
 * Projects the immutable browser identity contract. Window readiness is
 * checked before lookup; an unassigned window remains undefined so the
 * browser driver retains its shipped missing-view error. The transcript ID
 * is the default view identity, not a synthetic literal.
 */
export function createHostBrowserDriverDependencies<Context = unknown>(
  input: HostBrowserDriverProjectionInput<Context>,
): BrowserDriverDependencies<Context> {
  return {
    resourceAccessor: input.resourceAccessor,
    async getWindowIndex(context) {
      const boxId = input.getBoxId();
      const windowAgentId = input.getWindowAgentId?.() ?? boxId;
      await input.box.ensureReady(context, windowAgentId);
      return input.box.getAgentWindowIndex(windowAgentId);
    },
    getBoxId: input.getBoxId,
    getDefaultViewId: input.getDefaultViewId,
    async uploadFile(context, boxId, path, bytes) {
      await input.box.uploadFile(context, boxId, path, bytes);
    },
    async downloadFile(context, boxId, path) {
      return await input.box.downloadFile(context, boxId, path);
    },
    async removeFile(context, boxId, path) {
      if (boxId !== input.getBoxId()) {
        throw new TypeError("Browser screenshot cleanup box does not match the active box");
      }
      if (!/^\/tmp\/\.sand-browser\/shot-[A-Za-z0-9_-]+\.png$/u.test(path)) {
        throw new TypeError("Browser screenshot cleanup path is outside the private screenshot area");
      }
      const operationContext = context as unknown as OperationContext;
      const [cleanupContext, cancelCleanup] = operationContext
        .withDetached()
        .withTimeoutAndCancel(10_000);
      try {
        const result = await input.executeShell.execute(cleanupContext, {
          command: `rm -f -- ${shellSingleQuote(path)}`,
          name: "rm",
          workingDirectory: "/workspace",
          toolCallId: `sand-browser-screenshot-cleanup-${Date.now()}`,
        });
        if (
          result.result.case !== "success"
          || result.result.value.exitCode !== 0
        ) {
          throw new Error("Browser screenshot cleanup command failed");
        }
      } finally {
        cancelCleanup();
      }
    },
    async executeShellWithInput(context, shellInput, stdin) {
      const operationContext = context as unknown as OperationContext;
      const connection = await input.box.ensureReady(
        context,
        input.getWindowAgentId?.() ?? input.getBoxId(),
      );
      if (connection.terminalsFolder == null || connection.terminalsFolder.length === 0) {
        return { case: "spawnError" };
      }
      const background = input.resourceAccessor.get(backgroundShellExecutorResource) as Executor<BackgroundShellSpawnArgs, BackgroundShellSpawnResult>;
      const writeInput = input.resourceAccessor.get(writeBackgroundShellInputExecutorResource) as Executor<WriteShellStdinArgs, WriteShellStdinResult>;
      let terminalPath: string | undefined;
      let shellPid: number | undefined;
      let driverResultObserved = false;
      const readTerminal = async (pollContext: OperationContext): Promise<string | undefined> => {
        if (terminalPath == null) return undefined;
        if (pollContext.signal.aborted) throw pollContext.reason;
        try {
          return Buffer.from(await input.box.downloadFile(
            pollContext as unknown as Context,
            input.getBoxId(),
            terminalPath,
          )).toString("utf8");
        } catch {
          return undefined;
        }
      };
      const waitFor = async (
        pollContext: OperationContext,
        timeoutMs: number,
        predicate: (output: string) => boolean,
      ): Promise<string> => {
        const deadline = Date.now() + timeoutMs;
        while (Date.now() < deadline) {
          if (pollContext.signal.aborted) throw pollContext.reason;
          const output = await readTerminal(pollContext);
          if (output != null && predicate(output)) return output;
          await delay(50, undefined, { signal: pollContext.signal });
        }
        throw new Error("Browser driver terminal response timed out");
      };
      try {
        const spawned = await background.execute(operationContext, new BackgroundShellSpawnArgs({
          command: shellInput.command,
          workingDirectory: shellInput.workingDirectory,
          toolCallId: shellInput.toolCallId,
          enableWriteShellStdinTool: true,
          skipApproval: true,
          parsingResult: new ShellCommandParsingResult({
            parsingFailed: false,
            executableCommands: [new ShellCommandParsingResult_ExecutableCommand({
              name: shellInput.name,
              args: [],
              fullText: shellInput.command,
            })],
            hasRedirects: false,
            hasCommandSubstitution: false,
          }),
        }));
        if (spawned.result.case !== "success") return { case: spawned.result.case ?? "" };
        const shellId = spawned.result.value.shellId;
        shellPid = spawned.result.value.pid;
        terminalPath = posix.join(connection.terminalsFolder, `${shellId}.txt`);
        await waitFor(operationContext, 10_000, output => output.includes(SAND_BROWSER_STDIN_READY_MARKER));
        const written = await writeInput.execute(operationContext, new WriteShellStdinArgs({
          shellId,
          // BackgroundShellManager interprets EOT as an instruction to end
          // the pipe without forwarding the control byte. The Browser driver
          // reads one line, but a paused open stdin would otherwise keep its
          // natural Windows shutdown alive until the footer watchdog kills it.
          chars: `${stdin}\x04`,
        }));
        if (written.result.case !== "success") return { case: written.result.case ?? "" };
        const stdout = await waitFor(
          operationContext,
          95_000,
          output => output.includes(SAND_BROWSER_ENCRYPTED_RESULT_MARKER)
            || output.includes(SAND_BROWSER_RESULT_MARKER),
        );
        driverResultObserved = true;
        return { case: "success", stdout, stderr: "", exitCode: 0 };
      } finally {
        if (terminalPath != null) {
          const pathToRemove = terminalPath;
          // The background process can outlive an aborted caller. Complete the
          // bounded detached cleanup before this operation settles: otherwise
          // its queued footer append can outlive the owning box/temp directory,
          // recreate a transcript after an early unlink, or reject as an
          // unhandled write after teardown.
          const runCleanupCommand = async (
            command: string,
            suffix: string,
          ): Promise<void> => {
            const [cleanupContext, cancelCleanup] = operationContext
              .withDetached()
              .withTimeoutAndCancel(5_000);
            try {
              await input.executeShell.execute(cleanupContext, {
                command,
                name: "sh",
                workingDirectory: "/workspace",
                toolCallId: `${shellInput.toolCallId}-${suffix}`,
              }).catch(() => undefined);
            } finally {
              cancelCleanup();
            }
          };
          const terminateDriver = async (signal: "TERM" | "KILL"): Promise<void> => {
            if (!Number.isSafeInteger(shellPid) || (shellPid ?? 0) <= 1) return;
            const pid = Math.trunc(shellPid!);
            // Verify the exact internal command immediately before signaling so
            // a stale/reused PID cannot terminate an unrelated box process.
            const expectedCommand = shellSingleQuote(shellInput.command);
            const command = [
              `pid=${pid}`,
              `if test -r "/proc/$pid/cmdline" && tr '\\000' ' ' < "/proc/$pid/cmdline" | grep -Fq -- ${expectedCommand}; then`,
              `  kill -${signal} -- "-$pid" 2>/dev/null || kill -${signal} -- "$pid" 2>/dev/null || true`,
              "fi",
            ].join("\n");
            await runCleanupCommand(command, `driver-${signal.toLowerCase()}`);
          };
          const waitForFooter = async (timeoutMs: number): Promise<boolean> => {
            const [footerContext, cancelFooter] = operationContext
              .withDetached()
              .withTimeoutAndCancel(timeoutMs);
            try {
              return await waitFor(
                footerContext,
                timeoutMs,
                output => parseShellTerminalFooter(output).isComplete,
              ).then(() => true, () => false);
            } finally {
              cancelFooter();
            }
          };

          // Cancellation can leave the background driver alive after the tool
          // promise rejects. Stop only the attested command's process group so
          // its footer is queued promptly instead of leaving detached work.
          if (!driverResultObserved) await terminateDriver("TERM");
          let footerComplete = await waitForFooter(shellPid == null ? 95_000 : 10_000);
          if (!footerComplete) {
            await terminateDriver("KILL");
            footerComplete = await waitForFooter(5_000);
          }
          void footerComplete;
          // A result marker can be appended just before the exec daemon's
          // terminal footer. The waits above ensure the final unlink happens
          // after that authoritative append, so the transcript stays removed.
          await runCleanupCommand(
            `rm -f -- ${shellSingleQuote(pathToRemove)}`,
            "terminal-cleanup",
          );
        }
      }
    },
    ...(input.getPersistImage === undefined ? {} : { getPersistImage: input.getPersistImage }),
    ...(input.autoReview === undefined ? {} : { autoReview: input.autoReview }),
  };
}
