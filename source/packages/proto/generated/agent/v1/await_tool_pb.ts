/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:37078-37353
 * Region SHA-256: 55daa98a9cf6f5d4061bd253f3aa94d611a41c573fc23b1752554311bd98c59a
 * Atomic B1 exports: 7 messages + 0 enums = 7
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AwaitArgs$Runtime = (() => class _AwaitArgs extends Message<_AwaitArgs> {
  declare taskId: string;
  declare blockUntilMs?: number;
  declare regex?: string;
  constructor(data?: PartialMessage<_AwaitArgs>) {
    super();
    this.taskId = "";
    proto3.util.initPartial(data, this as _AwaitArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitArgs {
    return new _AwaitArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitArgs {
    return new _AwaitArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitArgs {
    return new _AwaitArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitArgs | PlainMessage<_AwaitArgs> | undefined | null, b2: _AwaitArgs | PlainMessage<_AwaitArgs> | undefined | null): boolean {
    return proto3.util.equals(_AwaitArgs as unknown as MessageType<_AwaitArgs>, a, b2);
  }
})();
export type AwaitArgs = InstanceType<typeof AwaitArgs$Runtime>;
var AwaitArgs: MessageType<AwaitArgs> = AwaitArgs$Runtime as unknown as MessageType<AwaitArgs>;
(AwaitArgs as MutableMessageType<AwaitArgs>).runtime = proto3;
(AwaitArgs as MutableMessageType<AwaitArgs>).typeName = "agent.v1.AwaitArgs";
(AwaitArgs as MutableMessageType<AwaitArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "block_until_ms", kind: "scalar", T: 13, opt: true },
  { no: 3, name: "regex", kind: "scalar", T: 9, opt: true }
]);
var AwaitTaskComplete$Runtime = (() => class _AwaitTaskComplete extends Message<_AwaitTaskComplete> {
  declare taskId: string;
  declare runtimeMs: bigint;
  declare outputFilePath: string;
  declare outputLength: bigint;
  declare regexRequested: boolean;
  declare regexMatch?: string;
  declare exitCode?: number;
  declare wakeReason?: string;
  constructor(data?: PartialMessage<_AwaitTaskComplete>) {
    super();
    this.taskId = "";
    this.runtimeMs = protoInt64.zero;
    this.outputFilePath = "";
    this.outputLength = protoInt64.zero;
    this.regexRequested = false;
    proto3.util.initPartial(data, this as _AwaitTaskComplete);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskComplete {
    return new _AwaitTaskComplete().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskComplete {
    return new _AwaitTaskComplete().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskComplete {
    return new _AwaitTaskComplete().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskComplete | PlainMessage<_AwaitTaskComplete> | undefined | null, b2: _AwaitTaskComplete | PlainMessage<_AwaitTaskComplete> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskComplete as unknown as MessageType<_AwaitTaskComplete>, a, b2);
  }
})();
export type AwaitTaskComplete = InstanceType<typeof AwaitTaskComplete$Runtime>;
var AwaitTaskComplete: MessageType<AwaitTaskComplete> = AwaitTaskComplete$Runtime as unknown as MessageType<AwaitTaskComplete>;
(AwaitTaskComplete as MutableMessageType<AwaitTaskComplete>).runtime = proto3;
(AwaitTaskComplete as MutableMessageType<AwaitTaskComplete>).typeName = "agent.v1.AwaitTaskComplete";
(AwaitTaskComplete as MutableMessageType<AwaitTaskComplete>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "runtime_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "output_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "output_length",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "regex_requested",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "exit_code", kind: "scalar", T: 17, opt: true },
  { no: 8, name: "wake_reason", kind: "scalar", T: 9, opt: true }
]);
var AwaitTaskStillRunning$Runtime = (() => class _AwaitTaskStillRunning extends Message<_AwaitTaskStillRunning> {
  declare taskId: string;
  declare runtimeMs: bigint;
  declare outputFilePath: string;
  declare outputLength: bigint;
  declare regexRequested: boolean;
  declare regexMatch?: string;
  declare wakeReason?: string;
  constructor(data?: PartialMessage<_AwaitTaskStillRunning>) {
    super();
    this.taskId = "";
    this.runtimeMs = protoInt64.zero;
    this.outputFilePath = "";
    this.outputLength = protoInt64.zero;
    this.regexRequested = false;
    proto3.util.initPartial(data, this as _AwaitTaskStillRunning);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskStillRunning {
    return new _AwaitTaskStillRunning().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskStillRunning {
    return new _AwaitTaskStillRunning().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskStillRunning {
    return new _AwaitTaskStillRunning().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskStillRunning | PlainMessage<_AwaitTaskStillRunning> | undefined | null, b2: _AwaitTaskStillRunning | PlainMessage<_AwaitTaskStillRunning> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskStillRunning as unknown as MessageType<_AwaitTaskStillRunning>, a, b2);
  }
})();
export type AwaitTaskStillRunning = InstanceType<typeof AwaitTaskStillRunning$Runtime>;
var AwaitTaskStillRunning: MessageType<AwaitTaskStillRunning> = AwaitTaskStillRunning$Runtime as unknown as MessageType<AwaitTaskStillRunning>;
(AwaitTaskStillRunning as MutableMessageType<AwaitTaskStillRunning>).runtime = proto3;
(AwaitTaskStillRunning as MutableMessageType<AwaitTaskStillRunning>).typeName = "agent.v1.AwaitTaskStillRunning";
(AwaitTaskStillRunning as MutableMessageType<AwaitTaskStillRunning>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "runtime_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "output_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "output_length",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "regex_requested",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "regex_match", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "wake_reason", kind: "scalar", T: 9, opt: true }
]);
var AwaitError$Runtime = (() => class _AwaitError extends Message<_AwaitError> {
  declare error: string;
  constructor(data?: PartialMessage<_AwaitError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _AwaitError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitError {
    return new _AwaitError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitError {
    return new _AwaitError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitError {
    return new _AwaitError().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitError | PlainMessage<_AwaitError> | undefined | null, b2: _AwaitError | PlainMessage<_AwaitError> | undefined | null): boolean {
    return proto3.util.equals(_AwaitError as unknown as MessageType<_AwaitError>, a, b2);
  }
})();
export type AwaitError = InstanceType<typeof AwaitError$Runtime>;
var AwaitError: MessageType<AwaitError> = AwaitError$Runtime as unknown as MessageType<AwaitError>;
(AwaitError as MutableMessageType<AwaitError>).runtime = proto3;
(AwaitError as MutableMessageType<AwaitError>).typeName = "agent.v1.AwaitError";
(AwaitError as MutableMessageType<AwaitError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AwaitSuccess$Runtime = (() => class _AwaitSuccess extends Message<_AwaitSuccess> {
  declare awaitResult: { case: "complete"; value: AwaitTaskComplete } | { case: "stillRunning"; value: AwaitTaskStillRunning } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AwaitSuccess>) {
    super();
    this.awaitResult = { case: void 0 };
    proto3.util.initPartial(data, this as _AwaitSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitSuccess {
    return new _AwaitSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitSuccess {
    return new _AwaitSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitSuccess {
    return new _AwaitSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitSuccess | PlainMessage<_AwaitSuccess> | undefined | null, b2: _AwaitSuccess | PlainMessage<_AwaitSuccess> | undefined | null): boolean {
    return proto3.util.equals(_AwaitSuccess as unknown as MessageType<_AwaitSuccess>, a, b2);
  }
})();
export type AwaitSuccess = InstanceType<typeof AwaitSuccess$Runtime>;
var AwaitSuccess: MessageType<AwaitSuccess> = AwaitSuccess$Runtime as unknown as MessageType<AwaitSuccess>;
(AwaitSuccess as MutableMessageType<AwaitSuccess>).runtime = proto3;
(AwaitSuccess as MutableMessageType<AwaitSuccess>).typeName = "agent.v1.AwaitSuccess";
(AwaitSuccess as MutableMessageType<AwaitSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "complete", kind: "message", T: AwaitTaskComplete, oneof: "await_result" },
  { no: 2, name: "still_running", kind: "message", T: AwaitTaskStillRunning, oneof: "await_result" }
]);
var AwaitResult$Runtime = (() => class _AwaitResult extends Message<_AwaitResult> {
  declare result: { case: "complete"; value: AwaitTaskComplete } | { case: "stillRunning"; value: AwaitTaskStillRunning } | { case: "error"; value: AwaitError } | { case: "success"; value: AwaitSuccess } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AwaitResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _AwaitResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitResult {
    return new _AwaitResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitResult {
    return new _AwaitResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitResult {
    return new _AwaitResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitResult | PlainMessage<_AwaitResult> | undefined | null, b2: _AwaitResult | PlainMessage<_AwaitResult> | undefined | null): boolean {
    return proto3.util.equals(_AwaitResult as unknown as MessageType<_AwaitResult>, a, b2);
  }
})();
export type AwaitResult = InstanceType<typeof AwaitResult$Runtime>;
var AwaitResult: MessageType<AwaitResult> = AwaitResult$Runtime as unknown as MessageType<AwaitResult>;
(AwaitResult as MutableMessageType<AwaitResult>).runtime = proto3;
(AwaitResult as MutableMessageType<AwaitResult>).typeName = "agent.v1.AwaitResult";
(AwaitResult as MutableMessageType<AwaitResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "complete", kind: "message", T: AwaitTaskComplete, oneof: "result" },
  { no: 2, name: "still_running", kind: "message", T: AwaitTaskStillRunning, oneof: "result" },
  { no: 3, name: "error", kind: "message", T: AwaitError, oneof: "result" },
  { no: 4, name: "success", kind: "message", T: AwaitSuccess, oneof: "result" }
]);
var AwaitToolCall$Runtime = (() => class _AwaitToolCall extends Message<_AwaitToolCall> {
  declare args?: AwaitArgs;
  declare result?: AwaitResult;
  constructor(data?: PartialMessage<_AwaitToolCall>) {
    super();
    proto3.util.initPartial(data, this as _AwaitToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitToolCall {
    return new _AwaitToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitToolCall {
    return new _AwaitToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitToolCall {
    return new _AwaitToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitToolCall | PlainMessage<_AwaitToolCall> | undefined | null, b2: _AwaitToolCall | PlainMessage<_AwaitToolCall> | undefined | null): boolean {
    return proto3.util.equals(_AwaitToolCall as unknown as MessageType<_AwaitToolCall>, a, b2);
  }
})();
export type AwaitToolCall = InstanceType<typeof AwaitToolCall$Runtime>;
var AwaitToolCall: MessageType<AwaitToolCall> = AwaitToolCall$Runtime as unknown as MessageType<AwaitToolCall>;
(AwaitToolCall as MutableMessageType<AwaitToolCall>).runtime = proto3;
(AwaitToolCall as MutableMessageType<AwaitToolCall>).typeName = "agent.v1.AwaitToolCall";
(AwaitToolCall as MutableMessageType<AwaitToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: AwaitArgs },
  { no: 2, name: "result", kind: "message", T: AwaitResult }
]);


export { AwaitArgs, AwaitTaskComplete, AwaitTaskStillRunning, AwaitError, AwaitSuccess, AwaitResult, AwaitToolCall };
