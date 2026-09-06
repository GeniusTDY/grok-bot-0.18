/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:35413-35552
 * Region SHA-256: 37d171bc067fcfcf5f7aa4667bf620118fe16ff273ebcaf123b08020dda14b41
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var StartGrindPlanningArgs$Runtime = (() => class _StartGrindPlanningArgs extends Message<_StartGrindPlanningArgs> {
  declare explanation?: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_StartGrindPlanningArgs>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _StartGrindPlanningArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindPlanningArgs {
    return new _StartGrindPlanningArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindPlanningArgs {
    return new _StartGrindPlanningArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindPlanningArgs {
    return new _StartGrindPlanningArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindPlanningArgs | PlainMessage<_StartGrindPlanningArgs> | undefined | null, b2: _StartGrindPlanningArgs | PlainMessage<_StartGrindPlanningArgs> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindPlanningArgs as unknown as MessageType<_StartGrindPlanningArgs>, a, b2);
  }
})();
export type StartGrindPlanningArgs = InstanceType<typeof StartGrindPlanningArgs$Runtime>;
var StartGrindPlanningArgs: MessageType<StartGrindPlanningArgs> = StartGrindPlanningArgs$Runtime as unknown as MessageType<StartGrindPlanningArgs>;
(StartGrindPlanningArgs as MutableMessageType<StartGrindPlanningArgs>).runtime = proto3;
(StartGrindPlanningArgs as MutableMessageType<StartGrindPlanningArgs>).typeName = "agent.v1.StartGrindPlanningArgs";
(StartGrindPlanningArgs as MutableMessageType<StartGrindPlanningArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "explanation", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StartGrindPlanningResult$Runtime = (() => class _StartGrindPlanningResult extends Message<_StartGrindPlanningResult> {
  declare result: { case: "success"; value: StartGrindPlanningSuccess } | { case: "error"; value: StartGrindPlanningError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StartGrindPlanningResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _StartGrindPlanningResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindPlanningResult {
    return new _StartGrindPlanningResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindPlanningResult {
    return new _StartGrindPlanningResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindPlanningResult {
    return new _StartGrindPlanningResult().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindPlanningResult | PlainMessage<_StartGrindPlanningResult> | undefined | null, b2: _StartGrindPlanningResult | PlainMessage<_StartGrindPlanningResult> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindPlanningResult as unknown as MessageType<_StartGrindPlanningResult>, a, b2);
  }
})();
export type StartGrindPlanningResult = InstanceType<typeof StartGrindPlanningResult$Runtime>;
var StartGrindPlanningResult: MessageType<StartGrindPlanningResult> = StartGrindPlanningResult$Runtime as unknown as MessageType<StartGrindPlanningResult>;
(StartGrindPlanningResult as MutableMessageType<StartGrindPlanningResult>).runtime = proto3;
(StartGrindPlanningResult as MutableMessageType<StartGrindPlanningResult>).typeName = "agent.v1.StartGrindPlanningResult";
(StartGrindPlanningResult as MutableMessageType<StartGrindPlanningResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: StartGrindPlanningSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: StartGrindPlanningError, oneof: "result" }
]);
var StartGrindPlanningSuccess$Runtime = (() => class _StartGrindPlanningSuccess extends Message<_StartGrindPlanningSuccess> {
  constructor(data?: PartialMessage<_StartGrindPlanningSuccess>) {
    super();
    proto3.util.initPartial(data, this as _StartGrindPlanningSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindPlanningSuccess {
    return new _StartGrindPlanningSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindPlanningSuccess {
    return new _StartGrindPlanningSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindPlanningSuccess {
    return new _StartGrindPlanningSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindPlanningSuccess | PlainMessage<_StartGrindPlanningSuccess> | undefined | null, b2: _StartGrindPlanningSuccess | PlainMessage<_StartGrindPlanningSuccess> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindPlanningSuccess as unknown as MessageType<_StartGrindPlanningSuccess>, a, b2);
  }
})();
export type StartGrindPlanningSuccess = InstanceType<typeof StartGrindPlanningSuccess$Runtime>;
var StartGrindPlanningSuccess: MessageType<StartGrindPlanningSuccess> = StartGrindPlanningSuccess$Runtime as unknown as MessageType<StartGrindPlanningSuccess>;
(StartGrindPlanningSuccess as MutableMessageType<StartGrindPlanningSuccess>).runtime = proto3;
(StartGrindPlanningSuccess as MutableMessageType<StartGrindPlanningSuccess>).typeName = "agent.v1.StartGrindPlanningSuccess";
(StartGrindPlanningSuccess as MutableMessageType<StartGrindPlanningSuccess>).fields = proto3.util.newFieldList(() => []);
var StartGrindPlanningError$Runtime = (() => class _StartGrindPlanningError extends Message<_StartGrindPlanningError> {
  declare error: string;
  constructor(data?: PartialMessage<_StartGrindPlanningError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _StartGrindPlanningError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindPlanningError {
    return new _StartGrindPlanningError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindPlanningError {
    return new _StartGrindPlanningError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindPlanningError {
    return new _StartGrindPlanningError().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindPlanningError | PlainMessage<_StartGrindPlanningError> | undefined | null, b2: _StartGrindPlanningError | PlainMessage<_StartGrindPlanningError> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindPlanningError as unknown as MessageType<_StartGrindPlanningError>, a, b2);
  }
})();
export type StartGrindPlanningError = InstanceType<typeof StartGrindPlanningError$Runtime>;
var StartGrindPlanningError: MessageType<StartGrindPlanningError> = StartGrindPlanningError$Runtime as unknown as MessageType<StartGrindPlanningError>;
(StartGrindPlanningError as MutableMessageType<StartGrindPlanningError>).runtime = proto3;
(StartGrindPlanningError as MutableMessageType<StartGrindPlanningError>).typeName = "agent.v1.StartGrindPlanningError";
(StartGrindPlanningError as MutableMessageType<StartGrindPlanningError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StartGrindPlanningToolCall$Runtime = (() => class _StartGrindPlanningToolCall extends Message<_StartGrindPlanningToolCall> {
  declare args?: StartGrindPlanningArgs;
  declare result?: StartGrindPlanningResult;
  constructor(data?: PartialMessage<_StartGrindPlanningToolCall>) {
    super();
    proto3.util.initPartial(data, this as _StartGrindPlanningToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartGrindPlanningToolCall {
    return new _StartGrindPlanningToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartGrindPlanningToolCall {
    return new _StartGrindPlanningToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartGrindPlanningToolCall {
    return new _StartGrindPlanningToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _StartGrindPlanningToolCall | PlainMessage<_StartGrindPlanningToolCall> | undefined | null, b2: _StartGrindPlanningToolCall | PlainMessage<_StartGrindPlanningToolCall> | undefined | null): boolean {
    return proto3.util.equals(_StartGrindPlanningToolCall as unknown as MessageType<_StartGrindPlanningToolCall>, a, b2);
  }
})();
export type StartGrindPlanningToolCall = InstanceType<typeof StartGrindPlanningToolCall$Runtime>;
var StartGrindPlanningToolCall: MessageType<StartGrindPlanningToolCall> = StartGrindPlanningToolCall$Runtime as unknown as MessageType<StartGrindPlanningToolCall>;
(StartGrindPlanningToolCall as MutableMessageType<StartGrindPlanningToolCall>).runtime = proto3;
(StartGrindPlanningToolCall as MutableMessageType<StartGrindPlanningToolCall>).typeName = "agent.v1.StartGrindPlanningToolCall";
(StartGrindPlanningToolCall as MutableMessageType<StartGrindPlanningToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: StartGrindPlanningArgs },
  { no: 2, name: "result", kind: "message", T: StartGrindPlanningResult }
]);


export { StartGrindPlanningArgs, StartGrindPlanningResult, StartGrindPlanningSuccess, StartGrindPlanningError, StartGrindPlanningToolCall };
