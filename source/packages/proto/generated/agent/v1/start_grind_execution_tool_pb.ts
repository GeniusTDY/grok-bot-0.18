/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:35273-35412
 * Region SHA-256: fc6c28aa1ff1ea790a16118036b6da0cefc1724ab8eb4398b46aa580f264c0d2
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var StartGrindExecutionArgs$Runtime = (() => class _StartGrindExecutionArgs extends Message<_StartGrindExecutionArgs> {
  declare explanation?: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_StartGrindExecutionArgs>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _StartGrindExecutionArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindExecutionArgs {
    return new _StartGrindExecutionArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindExecutionArgs {
    return new _StartGrindExecutionArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindExecutionArgs {
    return new _StartGrindExecutionArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindExecutionArgs | PlainMessage<_StartGrindExecutionArgs> | undefined | null, b2: _StartGrindExecutionArgs | PlainMessage<_StartGrindExecutionArgs> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindExecutionArgs as unknown as MessageType<_StartGrindExecutionArgs>, a, b2);
  }
})();
export type StartGrindExecutionArgs = InstanceType<typeof StartGrindExecutionArgs$Runtime>;
var StartGrindExecutionArgs: MessageType<StartGrindExecutionArgs> = StartGrindExecutionArgs$Runtime as unknown as MessageType<StartGrindExecutionArgs>;
(StartGrindExecutionArgs as MutableMessageType<StartGrindExecutionArgs>).runtime = proto3;
(StartGrindExecutionArgs as MutableMessageType<StartGrindExecutionArgs>).typeName = "agent.v1.StartGrindExecutionArgs";
(StartGrindExecutionArgs as MutableMessageType<StartGrindExecutionArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "explanation", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StartGrindExecutionResult$Runtime = (() => class _StartGrindExecutionResult extends Message<_StartGrindExecutionResult> {
  declare result: { case: "success"; value: StartGrindExecutionSuccess } | { case: "error"; value: StartGrindExecutionError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StartGrindExecutionResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _StartGrindExecutionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindExecutionResult {
    return new _StartGrindExecutionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindExecutionResult {
    return new _StartGrindExecutionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindExecutionResult {
    return new _StartGrindExecutionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindExecutionResult | PlainMessage<_StartGrindExecutionResult> | undefined | null, b2: _StartGrindExecutionResult | PlainMessage<_StartGrindExecutionResult> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindExecutionResult as unknown as MessageType<_StartGrindExecutionResult>, a, b2);
  }
})();
export type StartGrindExecutionResult = InstanceType<typeof StartGrindExecutionResult$Runtime>;
var StartGrindExecutionResult: MessageType<StartGrindExecutionResult> = StartGrindExecutionResult$Runtime as unknown as MessageType<StartGrindExecutionResult>;
(StartGrindExecutionResult as MutableMessageType<StartGrindExecutionResult>).runtime = proto3;
(StartGrindExecutionResult as MutableMessageType<StartGrindExecutionResult>).typeName = "agent.v1.StartGrindExecutionResult";
(StartGrindExecutionResult as MutableMessageType<StartGrindExecutionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: StartGrindExecutionSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: StartGrindExecutionError, oneof: "result" }
]);
var StartGrindExecutionSuccess$Runtime = (() => class _StartGrindExecutionSuccess extends Message<_StartGrindExecutionSuccess> {
  constructor(data?: PartialMessage<_StartGrindExecutionSuccess>) {
    super();
    proto3.util.initPartial(data, this as _StartGrindExecutionSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindExecutionSuccess {
    return new _StartGrindExecutionSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindExecutionSuccess {
    return new _StartGrindExecutionSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindExecutionSuccess {
    return new _StartGrindExecutionSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindExecutionSuccess | PlainMessage<_StartGrindExecutionSuccess> | undefined | null, b2: _StartGrindExecutionSuccess | PlainMessage<_StartGrindExecutionSuccess> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindExecutionSuccess as unknown as MessageType<_StartGrindExecutionSuccess>, a, b2);
  }
})();
export type StartGrindExecutionSuccess = InstanceType<typeof StartGrindExecutionSuccess$Runtime>;
var StartGrindExecutionSuccess: MessageType<StartGrindExecutionSuccess> = StartGrindExecutionSuccess$Runtime as unknown as MessageType<StartGrindExecutionSuccess>;
(StartGrindExecutionSuccess as MutableMessageType<StartGrindExecutionSuccess>).runtime = proto3;
(StartGrindExecutionSuccess as MutableMessageType<StartGrindExecutionSuccess>).typeName = "agent.v1.StartGrindExecutionSuccess";
(StartGrindExecutionSuccess as MutableMessageType<StartGrindExecutionSuccess>).fields = proto3.util.newFieldList(() => []);
var StartGrindExecutionError$Runtime = (() => class _StartGrindExecutionError extends Message<_StartGrindExecutionError> {
  declare error: string;
  constructor(data?: PartialMessage<_StartGrindExecutionError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _StartGrindExecutionError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindExecutionError {
    return new _StartGrindExecutionError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindExecutionError {
    return new _StartGrindExecutionError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindExecutionError {
    return new _StartGrindExecutionError().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindExecutionError | PlainMessage<_StartGrindExecutionError> | undefined | null, b2: _StartGrindExecutionError | PlainMessage<_StartGrindExecutionError> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindExecutionError as unknown as MessageType<_StartGrindExecutionError>, a, b2);
  }
})();
export type StartGrindExecutionError = InstanceType<typeof StartGrindExecutionError$Runtime>;
var StartGrindExecutionError: MessageType<StartGrindExecutionError> = StartGrindExecutionError$Runtime as unknown as MessageType<StartGrindExecutionError>;
(StartGrindExecutionError as MutableMessageType<StartGrindExecutionError>).runtime = proto3;
(StartGrindExecutionError as MutableMessageType<StartGrindExecutionError>).typeName = "agent.v1.StartGrindExecutionError";
(StartGrindExecutionError as MutableMessageType<StartGrindExecutionError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StartGrindExecutionToolCall$Runtime = (() => class _StartGrindExecutionToolCall extends Message<_StartGrindExecutionToolCall> {
  declare args?: StartGrindExecutionArgs;
  declare result?: StartGrindExecutionResult;
  constructor(data?: PartialMessage<_StartGrindExecutionToolCall>) {
    super();
    proto3.util.initPartial(data, this as _StartGrindExecutionToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindExecutionToolCall {
    return new _StartGrindExecutionToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindExecutionToolCall {
    return new _StartGrindExecutionToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindExecutionToolCall {
    return new _StartGrindExecutionToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindExecutionToolCall | PlainMessage<_StartGrindExecutionToolCall> | undefined | null, b2: _StartGrindExecutionToolCall | PlainMessage<_StartGrindExecutionToolCall> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindExecutionToolCall as unknown as MessageType<_StartGrindExecutionToolCall>, a, b2);
  }
})();
export type StartGrindExecutionToolCall = InstanceType<typeof StartGrindExecutionToolCall$Runtime>;
var StartGrindExecutionToolCall: MessageType<StartGrindExecutionToolCall> = StartGrindExecutionToolCall$Runtime as unknown as MessageType<StartGrindExecutionToolCall>;
(StartGrindExecutionToolCall as MutableMessageType<StartGrindExecutionToolCall>).runtime = proto3;
(StartGrindExecutionToolCall as MutableMessageType<StartGrindExecutionToolCall>).typeName = "agent.v1.StartGrindExecutionToolCall";
(StartGrindExecutionToolCall as MutableMessageType<StartGrindExecutionToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: StartGrindExecutionArgs },
  { no: 2, name: "result", kind: "message", T: StartGrindExecutionResult }
]);


export { StartGrindExecutionArgs, StartGrindExecutionResult, StartGrindExecutionSuccess, StartGrindExecutionError, StartGrindExecutionToolCall };
