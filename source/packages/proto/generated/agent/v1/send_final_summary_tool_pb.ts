/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:38011-38151
 * Region SHA-256: cc335b7c16159f5792b61121435a7c79b12571bb822a084a54652bb16278ef5e
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SendFinalSummaryArgs$Runtime = (() => class _SendFinalSummaryArgs extends Message<_SendFinalSummaryArgs> {
  declare finalSummary?: string;
  constructor(data?: PartialMessage<_SendFinalSummaryArgs>) {
    super();
    proto3.util.initPartial(data, this as _SendFinalSummaryArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendFinalSummaryArgs {
    return new _SendFinalSummaryArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendFinalSummaryArgs {
    return new _SendFinalSummaryArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendFinalSummaryArgs {
    return new _SendFinalSummaryArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SendFinalSummaryArgs | PlainMessage<_SendFinalSummaryArgs> | undefined | null, b2: _SendFinalSummaryArgs | PlainMessage<_SendFinalSummaryArgs> | undefined | null): boolean {
    return proto3.util.equals(_SendFinalSummaryArgs as unknown as MessageType<_SendFinalSummaryArgs>, a, b2);
  }
})();
export type SendFinalSummaryArgs = InstanceType<typeof SendFinalSummaryArgs$Runtime>;
var SendFinalSummaryArgs: MessageType<SendFinalSummaryArgs> = SendFinalSummaryArgs$Runtime as unknown as MessageType<SendFinalSummaryArgs>;
(SendFinalSummaryArgs as MutableMessageType<SendFinalSummaryArgs>).runtime = proto3;
(SendFinalSummaryArgs as MutableMessageType<SendFinalSummaryArgs>).typeName = "agent.v1.SendFinalSummaryArgs";
(SendFinalSummaryArgs as MutableMessageType<SendFinalSummaryArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "final_summary", kind: "scalar", T: 9, opt: true }
]);
var SendFinalSummarySuccess$Runtime = (() => class _SendFinalSummarySuccess extends Message<_SendFinalSummarySuccess> {
  declare finalSummary: string;
  constructor(data?: PartialMessage<_SendFinalSummarySuccess>) {
    super();
    this.finalSummary = "";
    proto3.util.initPartial(data, this as _SendFinalSummarySuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendFinalSummarySuccess {
    return new _SendFinalSummarySuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendFinalSummarySuccess {
    return new _SendFinalSummarySuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendFinalSummarySuccess {
    return new _SendFinalSummarySuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SendFinalSummarySuccess | PlainMessage<_SendFinalSummarySuccess> | undefined | null, b2: _SendFinalSummarySuccess | PlainMessage<_SendFinalSummarySuccess> | undefined | null): boolean {
    return proto3.util.equals(_SendFinalSummarySuccess as unknown as MessageType<_SendFinalSummarySuccess>, a, b2);
  }
})();
export type SendFinalSummarySuccess = InstanceType<typeof SendFinalSummarySuccess$Runtime>;
var SendFinalSummarySuccess: MessageType<SendFinalSummarySuccess> = SendFinalSummarySuccess$Runtime as unknown as MessageType<SendFinalSummarySuccess>;
(SendFinalSummarySuccess as MutableMessageType<SendFinalSummarySuccess>).runtime = proto3;
(SendFinalSummarySuccess as MutableMessageType<SendFinalSummarySuccess>).typeName = "agent.v1.SendFinalSummarySuccess";
(SendFinalSummarySuccess as MutableMessageType<SendFinalSummarySuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "final_summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendFinalSummaryError$Runtime = (() => class _SendFinalSummaryError extends Message<_SendFinalSummaryError> {
  declare error: string;
  constructor(data?: PartialMessage<_SendFinalSummaryError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SendFinalSummaryError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendFinalSummaryError {
    return new _SendFinalSummaryError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendFinalSummaryError {
    return new _SendFinalSummaryError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendFinalSummaryError {
    return new _SendFinalSummaryError().fromJsonString(jsonString, options);
  }
  static equals(a: _SendFinalSummaryError | PlainMessage<_SendFinalSummaryError> | undefined | null, b2: _SendFinalSummaryError | PlainMessage<_SendFinalSummaryError> | undefined | null): boolean {
    return proto3.util.equals(_SendFinalSummaryError as unknown as MessageType<_SendFinalSummaryError>, a, b2);
  }
})();
export type SendFinalSummaryError = InstanceType<typeof SendFinalSummaryError$Runtime>;
var SendFinalSummaryError: MessageType<SendFinalSummaryError> = SendFinalSummaryError$Runtime as unknown as MessageType<SendFinalSummaryError>;
(SendFinalSummaryError as MutableMessageType<SendFinalSummaryError>).runtime = proto3;
(SendFinalSummaryError as MutableMessageType<SendFinalSummaryError>).typeName = "agent.v1.SendFinalSummaryError";
(SendFinalSummaryError as MutableMessageType<SendFinalSummaryError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendFinalSummaryResult$Runtime = (() => class _SendFinalSummaryResult extends Message<_SendFinalSummaryResult> {
  declare result: { case: "success"; value: SendFinalSummarySuccess } | { case: "error"; value: SendFinalSummaryError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SendFinalSummaryResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SendFinalSummaryResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendFinalSummaryResult {
    return new _SendFinalSummaryResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendFinalSummaryResult {
    return new _SendFinalSummaryResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendFinalSummaryResult {
    return new _SendFinalSummaryResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SendFinalSummaryResult | PlainMessage<_SendFinalSummaryResult> | undefined | null, b2: _SendFinalSummaryResult | PlainMessage<_SendFinalSummaryResult> | undefined | null): boolean {
    return proto3.util.equals(_SendFinalSummaryResult as unknown as MessageType<_SendFinalSummaryResult>, a, b2);
  }
})();
export type SendFinalSummaryResult = InstanceType<typeof SendFinalSummaryResult$Runtime>;
var SendFinalSummaryResult: MessageType<SendFinalSummaryResult> = SendFinalSummaryResult$Runtime as unknown as MessageType<SendFinalSummaryResult>;
(SendFinalSummaryResult as MutableMessageType<SendFinalSummaryResult>).runtime = proto3;
(SendFinalSummaryResult as MutableMessageType<SendFinalSummaryResult>).typeName = "agent.v1.SendFinalSummaryResult";
(SendFinalSummaryResult as MutableMessageType<SendFinalSummaryResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SendFinalSummarySuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SendFinalSummaryError, oneof: "result" }
]);
var SendFinalSummaryToolCall$Runtime = (() => class _SendFinalSummaryToolCall extends Message<_SendFinalSummaryToolCall> {
  declare args?: SendFinalSummaryArgs;
  declare result?: SendFinalSummaryResult;
  constructor(data?: PartialMessage<_SendFinalSummaryToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SendFinalSummaryToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendFinalSummaryToolCall {
    return new _SendFinalSummaryToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendFinalSummaryToolCall {
    return new _SendFinalSummaryToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendFinalSummaryToolCall {
    return new _SendFinalSummaryToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SendFinalSummaryToolCall | PlainMessage<_SendFinalSummaryToolCall> | undefined | null, b2: _SendFinalSummaryToolCall | PlainMessage<_SendFinalSummaryToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SendFinalSummaryToolCall as unknown as MessageType<_SendFinalSummaryToolCall>, a, b2);
  }
})();
export type SendFinalSummaryToolCall = InstanceType<typeof SendFinalSummaryToolCall$Runtime>;
var SendFinalSummaryToolCall: MessageType<SendFinalSummaryToolCall> = SendFinalSummaryToolCall$Runtime as unknown as MessageType<SendFinalSummaryToolCall>;
(SendFinalSummaryToolCall as MutableMessageType<SendFinalSummaryToolCall>).runtime = proto3;
(SendFinalSummaryToolCall as MutableMessageType<SendFinalSummaryToolCall>).typeName = "agent.v1.SendFinalSummaryToolCall";
(SendFinalSummaryToolCall as MutableMessageType<SendFinalSummaryToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SendFinalSummaryArgs },
  { no: 2, name: "result", kind: "message", T: SendFinalSummaryResult }
]);


export { SendFinalSummaryArgs, SendFinalSummarySuccess, SendFinalSummaryError, SendFinalSummaryResult, SendFinalSummaryToolCall };
