/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:20179-20514
 * Region SHA-256: 609f329525432d7de782025d9c83f3dd1977600378d70f725a9c908d62a49c13
 * Atomic B1 exports: 8 messages + 0 enums = 8
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { ShellCommandParsingResult, CommandClassifierResult, ShellOutputNotificationConfig, ShellHookApprovalRequirement, ShellSandboxUnsupported, ShellRejected, ShellPermissionDenied } from "./shell_exec_pb.js";
import { SandboxPolicy } from "./sandbox_pb.js";
import { SmartModeApproval } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var BackgroundShellSpawnArgs$Runtime = (() => class _BackgroundShellSpawnArgs extends Message<_BackgroundShellSpawnArgs> {
  declare command: string;
  declare workingDirectory: string;
  declare toolCallId: string;
  declare parsingResult?: ShellCommandParsingResult;
  declare sandboxPolicy?: SandboxPolicy;
  declare enableWriteShellStdinTool: boolean;
  declare description?: string;
  declare classifierResult?: CommandClassifierResult;
  declare outputNotification?: ShellOutputNotificationConfig;
  declare smartModeApproval?: SmartModeApproval;
  declare hookApprovalRequirement?: ShellHookApprovalRequirement;
  declare skipApproval: boolean;
  declare conversationId?: string;
  declare adminCommandDenylist: string[];
  constructor(data?: PartialMessage<_BackgroundShellSpawnArgs>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.toolCallId = "";
    this.enableWriteShellStdinTool = false;
    this.skipApproval = false;
    this.adminCommandDenylist = [];
    proto3.util.initPartial(data, this as _BackgroundShellSpawnArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundShellSpawnArgs {
    return new _BackgroundShellSpawnArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnArgs {
    return new _BackgroundShellSpawnArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnArgs {
    return new _BackgroundShellSpawnArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundShellSpawnArgs | PlainMessage<_BackgroundShellSpawnArgs> | undefined | null, b2: _BackgroundShellSpawnArgs | PlainMessage<_BackgroundShellSpawnArgs> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundShellSpawnArgs as unknown as MessageType<_BackgroundShellSpawnArgs>, a, b2);
  }
})();
export type BackgroundShellSpawnArgs = InstanceType<typeof BackgroundShellSpawnArgs$Runtime>;
var BackgroundShellSpawnArgs: MessageType<BackgroundShellSpawnArgs> = BackgroundShellSpawnArgs$Runtime as unknown as MessageType<BackgroundShellSpawnArgs>;
(BackgroundShellSpawnArgs as MutableMessageType<BackgroundShellSpawnArgs>).runtime = proto3;
(BackgroundShellSpawnArgs as MutableMessageType<BackgroundShellSpawnArgs>).typeName = "agent.v1.BackgroundShellSpawnArgs";
(BackgroundShellSpawnArgs as MutableMessageType<BackgroundShellSpawnArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "parsing_result", kind: "message", T: ShellCommandParsingResult },
  { no: 5, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  {
    no: 6,
    name: "enable_write_shell_stdin_tool",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "classifier_result", kind: "message", T: CommandClassifierResult, opt: true },
  { no: 9, name: "output_notification", kind: "message", T: ShellOutputNotificationConfig, opt: true },
  { no: 10, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true },
  { no: 11, name: "hook_approval_requirement", kind: "message", T: ShellHookApprovalRequirement, opt: true },
  {
    no: 12,
    name: "skip_approval",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 13, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }
]);
var BackgroundShellSpawnResult$Runtime = (() => class _BackgroundShellSpawnResult extends Message<_BackgroundShellSpawnResult> {
  declare result: { case: "success"; value: BackgroundShellSpawnSuccess } | { case: "error"; value: BackgroundShellSpawnError } | { case: "rejected"; value: ShellRejected } | { case: "permissionDenied"; value: ShellPermissionDenied } | { case: "sandboxUnsupported"; value: ShellSandboxUnsupported } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BackgroundShellSpawnResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _BackgroundShellSpawnResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundShellSpawnResult {
    return new _BackgroundShellSpawnResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnResult {
    return new _BackgroundShellSpawnResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnResult {
    return new _BackgroundShellSpawnResult().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundShellSpawnResult | PlainMessage<_BackgroundShellSpawnResult> | undefined | null, b2: _BackgroundShellSpawnResult | PlainMessage<_BackgroundShellSpawnResult> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundShellSpawnResult as unknown as MessageType<_BackgroundShellSpawnResult>, a, b2);
  }
})();
export type BackgroundShellSpawnResult = InstanceType<typeof BackgroundShellSpawnResult$Runtime>;
var BackgroundShellSpawnResult: MessageType<BackgroundShellSpawnResult> = BackgroundShellSpawnResult$Runtime as unknown as MessageType<BackgroundShellSpawnResult>;
(BackgroundShellSpawnResult as MutableMessageType<BackgroundShellSpawnResult>).runtime = proto3;
(BackgroundShellSpawnResult as MutableMessageType<BackgroundShellSpawnResult>).typeName = "agent.v1.BackgroundShellSpawnResult";
(BackgroundShellSpawnResult as MutableMessageType<BackgroundShellSpawnResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: BackgroundShellSpawnSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: BackgroundShellSpawnError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: ShellRejected, oneof: "result" },
  { no: 4, name: "permission_denied", kind: "message", T: ShellPermissionDenied, oneof: "result" },
  { no: 5, name: "sandbox_unsupported", kind: "message", T: ShellSandboxUnsupported, oneof: "result" }
]);
var BackgroundShellSpawnSuccess$Runtime = (() => class _BackgroundShellSpawnSuccess extends Message<_BackgroundShellSpawnSuccess> {
  declare shellId: number;
  declare command: string;
  declare workingDirectory: string;
  declare pid?: number;
  constructor(data?: PartialMessage<_BackgroundShellSpawnSuccess>) {
    super();
    this.shellId = 0;
    this.command = "";
    this.workingDirectory = "";
    proto3.util.initPartial(data, this as _BackgroundShellSpawnSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundShellSpawnSuccess {
    return new _BackgroundShellSpawnSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnSuccess {
    return new _BackgroundShellSpawnSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnSuccess {
    return new _BackgroundShellSpawnSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundShellSpawnSuccess | PlainMessage<_BackgroundShellSpawnSuccess> | undefined | null, b2: _BackgroundShellSpawnSuccess | PlainMessage<_BackgroundShellSpawnSuccess> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundShellSpawnSuccess as unknown as MessageType<_BackgroundShellSpawnSuccess>, a, b2);
  }
})();
export type BackgroundShellSpawnSuccess = InstanceType<typeof BackgroundShellSpawnSuccess$Runtime>;
var BackgroundShellSpawnSuccess: MessageType<BackgroundShellSpawnSuccess> = BackgroundShellSpawnSuccess$Runtime as unknown as MessageType<BackgroundShellSpawnSuccess>;
(BackgroundShellSpawnSuccess as MutableMessageType<BackgroundShellSpawnSuccess>).runtime = proto3;
(BackgroundShellSpawnSuccess as MutableMessageType<BackgroundShellSpawnSuccess>).typeName = "agent.v1.BackgroundShellSpawnSuccess";
(BackgroundShellSpawnSuccess as MutableMessageType<BackgroundShellSpawnSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "shell_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "pid", kind: "scalar", T: 13, opt: true }
]);
var BackgroundShellSpawnError$Runtime = (() => class _BackgroundShellSpawnError extends Message<_BackgroundShellSpawnError> {
  declare command: string;
  declare workingDirectory: string;
  declare error: string;
  constructor(data?: PartialMessage<_BackgroundShellSpawnError>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.error = "";
    proto3.util.initPartial(data, this as _BackgroundShellSpawnError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundShellSpawnError {
    return new _BackgroundShellSpawnError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnError {
    return new _BackgroundShellSpawnError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundShellSpawnError {
    return new _BackgroundShellSpawnError().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundShellSpawnError | PlainMessage<_BackgroundShellSpawnError> | undefined | null, b2: _BackgroundShellSpawnError | PlainMessage<_BackgroundShellSpawnError> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundShellSpawnError as unknown as MessageType<_BackgroundShellSpawnError>, a, b2);
  }
})();
export type BackgroundShellSpawnError = InstanceType<typeof BackgroundShellSpawnError$Runtime>;
var BackgroundShellSpawnError: MessageType<BackgroundShellSpawnError> = BackgroundShellSpawnError$Runtime as unknown as MessageType<BackgroundShellSpawnError>;
(BackgroundShellSpawnError as MutableMessageType<BackgroundShellSpawnError>).runtime = proto3;
(BackgroundShellSpawnError as MutableMessageType<BackgroundShellSpawnError>).typeName = "agent.v1.BackgroundShellSpawnError";
(BackgroundShellSpawnError as MutableMessageType<BackgroundShellSpawnError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WriteShellStdinArgs$Runtime = (() => class _WriteShellStdinArgs extends Message<_WriteShellStdinArgs> {
  declare shellId: number;
  declare chars: string;
  constructor(data?: PartialMessage<_WriteShellStdinArgs>) {
    super();
    this.shellId = 0;
    this.chars = "";
    proto3.util.initPartial(data, this as _WriteShellStdinArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinArgs {
    return new _WriteShellStdinArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinArgs {
    return new _WriteShellStdinArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinArgs {
    return new _WriteShellStdinArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinArgs | PlainMessage<_WriteShellStdinArgs> | undefined | null, b2: _WriteShellStdinArgs | PlainMessage<_WriteShellStdinArgs> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinArgs as unknown as MessageType<_WriteShellStdinArgs>, a, b2);
  }
})();
export type WriteShellStdinArgs = InstanceType<typeof WriteShellStdinArgs$Runtime>;
var WriteShellStdinArgs: MessageType<WriteShellStdinArgs> = WriteShellStdinArgs$Runtime as unknown as MessageType<WriteShellStdinArgs>;
(WriteShellStdinArgs as MutableMessageType<WriteShellStdinArgs>).runtime = proto3;
(WriteShellStdinArgs as MutableMessageType<WriteShellStdinArgs>).typeName = "agent.v1.WriteShellStdinArgs";
(WriteShellStdinArgs as MutableMessageType<WriteShellStdinArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "shell_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "chars",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WriteShellStdinResult$Runtime = (() => class _WriteShellStdinResult extends Message<_WriteShellStdinResult> {
  declare result: { case: "success"; value: WriteShellStdinSuccess } | { case: "error"; value: WriteShellStdinError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WriteShellStdinResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WriteShellStdinResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinResult {
    return new _WriteShellStdinResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinResult {
    return new _WriteShellStdinResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinResult {
    return new _WriteShellStdinResult().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinResult | PlainMessage<_WriteShellStdinResult> | undefined | null, b2: _WriteShellStdinResult | PlainMessage<_WriteShellStdinResult> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinResult as unknown as MessageType<_WriteShellStdinResult>, a, b2);
  }
})();
export type WriteShellStdinResult = InstanceType<typeof WriteShellStdinResult$Runtime>;
var WriteShellStdinResult: MessageType<WriteShellStdinResult> = WriteShellStdinResult$Runtime as unknown as MessageType<WriteShellStdinResult>;
(WriteShellStdinResult as MutableMessageType<WriteShellStdinResult>).runtime = proto3;
(WriteShellStdinResult as MutableMessageType<WriteShellStdinResult>).typeName = "agent.v1.WriteShellStdinResult";
(WriteShellStdinResult as MutableMessageType<WriteShellStdinResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: WriteShellStdinSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: WriteShellStdinError, oneof: "result" }
]);
var WriteShellStdinSuccess$Runtime = (() => class _WriteShellStdinSuccess extends Message<_WriteShellStdinSuccess> {
  declare shellId: number;
  declare terminalFileLengthBeforeInputWritten: number;
  constructor(data?: PartialMessage<_WriteShellStdinSuccess>) {
    super();
    this.shellId = 0;
    this.terminalFileLengthBeforeInputWritten = 0;
    proto3.util.initPartial(data, this as _WriteShellStdinSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinSuccess {
    return new _WriteShellStdinSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinSuccess {
    return new _WriteShellStdinSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinSuccess {
    return new _WriteShellStdinSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinSuccess | PlainMessage<_WriteShellStdinSuccess> | undefined | null, b2: _WriteShellStdinSuccess | PlainMessage<_WriteShellStdinSuccess> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinSuccess as unknown as MessageType<_WriteShellStdinSuccess>, a, b2);
  }
})();
export type WriteShellStdinSuccess = InstanceType<typeof WriteShellStdinSuccess$Runtime>;
var WriteShellStdinSuccess: MessageType<WriteShellStdinSuccess> = WriteShellStdinSuccess$Runtime as unknown as MessageType<WriteShellStdinSuccess>;
(WriteShellStdinSuccess as MutableMessageType<WriteShellStdinSuccess>).runtime = proto3;
(WriteShellStdinSuccess as MutableMessageType<WriteShellStdinSuccess>).typeName = "agent.v1.WriteShellStdinSuccess";
(WriteShellStdinSuccess as MutableMessageType<WriteShellStdinSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "shell_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "terminal_file_length_before_input_written",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var WriteShellStdinError$Runtime = (() => class _WriteShellStdinError extends Message<_WriteShellStdinError> {
  declare error: string;
  constructor(data?: PartialMessage<_WriteShellStdinError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _WriteShellStdinError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinError {
    return new _WriteShellStdinError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinError {
    return new _WriteShellStdinError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinError {
    return new _WriteShellStdinError().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinError | PlainMessage<_WriteShellStdinError> | undefined | null, b2: _WriteShellStdinError | PlainMessage<_WriteShellStdinError> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinError as unknown as MessageType<_WriteShellStdinError>, a, b2);
  }
})();
export type WriteShellStdinError = InstanceType<typeof WriteShellStdinError$Runtime>;
var WriteShellStdinError: MessageType<WriteShellStdinError> = WriteShellStdinError$Runtime as unknown as MessageType<WriteShellStdinError>;
(WriteShellStdinError as MutableMessageType<WriteShellStdinError>).runtime = proto3;
(WriteShellStdinError as MutableMessageType<WriteShellStdinError>).typeName = "agent.v1.WriteShellStdinError";
(WriteShellStdinError as MutableMessageType<WriteShellStdinError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { BackgroundShellSpawnArgs, BackgroundShellSpawnResult, BackgroundShellSpawnSuccess, BackgroundShellSpawnError, WriteShellStdinArgs, WriteShellStdinResult, WriteShellStdinSuccess, WriteShellStdinError };
