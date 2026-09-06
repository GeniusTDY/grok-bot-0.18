/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39426-39564
 * Region SHA-256: 67e9bcda9adbec28ae29759f774e7b9dc2f154641a09a199dff7bfbc3b24f415
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SendToUserArgs$Runtime = (() => class _SendToUserArgs extends Message<_SendToUserArgs> {
  declare message: string;
  constructor(data?: PartialMessage<_SendToUserArgs>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _SendToUserArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToUserArgs {
    return new _SendToUserArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToUserArgs {
    return new _SendToUserArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToUserArgs {
    return new _SendToUserArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToUserArgs | PlainMessage<_SendToUserArgs> | undefined | null, b2: _SendToUserArgs | PlainMessage<_SendToUserArgs> | undefined | null): boolean {
    return proto3.util.equals(_SendToUserArgs as unknown as MessageType<_SendToUserArgs>, a, b2);
  }
})();
export type SendToUserArgs = InstanceType<typeof SendToUserArgs$Runtime>;
var SendToUserArgs: MessageType<SendToUserArgs> = SendToUserArgs$Runtime as unknown as MessageType<SendToUserArgs>;
(SendToUserArgs as MutableMessageType<SendToUserArgs>).runtime = proto3;
(SendToUserArgs as MutableMessageType<SendToUserArgs>).typeName = "agent.v1.SendToUserArgs";
(SendToUserArgs as MutableMessageType<SendToUserArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendToUserSuccess$Runtime = (() => class _SendToUserSuccess extends Message<_SendToUserSuccess> {
  constructor(data?: PartialMessage<_SendToUserSuccess>) {
    super();
    proto3.util.initPartial(data, this as _SendToUserSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToUserSuccess {
    return new _SendToUserSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToUserSuccess {
    return new _SendToUserSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToUserSuccess {
    return new _SendToUserSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToUserSuccess | PlainMessage<_SendToUserSuccess> | undefined | null, b2: _SendToUserSuccess | PlainMessage<_SendToUserSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SendToUserSuccess as unknown as MessageType<_SendToUserSuccess>, a, b2);
  }
})();
export type SendToUserSuccess = InstanceType<typeof SendToUserSuccess$Runtime>;
var SendToUserSuccess: MessageType<SendToUserSuccess> = SendToUserSuccess$Runtime as unknown as MessageType<SendToUserSuccess>;
(SendToUserSuccess as MutableMessageType<SendToUserSuccess>).runtime = proto3;
(SendToUserSuccess as MutableMessageType<SendToUserSuccess>).typeName = "agent.v1.SendToUserSuccess";
(SendToUserSuccess as MutableMessageType<SendToUserSuccess>).fields = proto3.util.newFieldList(() => []);
var SendToUserError$Runtime = (() => class _SendToUserError extends Message<_SendToUserError> {
  declare error: string;
  constructor(data?: PartialMessage<_SendToUserError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SendToUserError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToUserError {
    return new _SendToUserError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToUserError {
    return new _SendToUserError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToUserError {
    return new _SendToUserError().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToUserError | PlainMessage<_SendToUserError> | undefined | null, b2: _SendToUserError | PlainMessage<_SendToUserError> | undefined | null): boolean {
    return proto3.util.equals(_SendToUserError as unknown as MessageType<_SendToUserError>, a, b2);
  }
})();
export type SendToUserError = InstanceType<typeof SendToUserError$Runtime>;
var SendToUserError: MessageType<SendToUserError> = SendToUserError$Runtime as unknown as MessageType<SendToUserError>;
(SendToUserError as MutableMessageType<SendToUserError>).runtime = proto3;
(SendToUserError as MutableMessageType<SendToUserError>).typeName = "agent.v1.SendToUserError";
(SendToUserError as MutableMessageType<SendToUserError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendToUserResult$Runtime = (() => class _SendToUserResult extends Message<_SendToUserResult> {
  declare result: { case: "success"; value: SendToUserSuccess } | { case: "error"; value: SendToUserError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SendToUserResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SendToUserResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToUserResult {
    return new _SendToUserResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToUserResult {
    return new _SendToUserResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToUserResult {
    return new _SendToUserResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToUserResult | PlainMessage<_SendToUserResult> | undefined | null, b2: _SendToUserResult | PlainMessage<_SendToUserResult> | undefined | null): boolean {
    return proto3.util.equals(_SendToUserResult as unknown as MessageType<_SendToUserResult>, a, b2);
  }
})();
export type SendToUserResult = InstanceType<typeof SendToUserResult$Runtime>;
var SendToUserResult: MessageType<SendToUserResult> = SendToUserResult$Runtime as unknown as MessageType<SendToUserResult>;
(SendToUserResult as MutableMessageType<SendToUserResult>).runtime = proto3;
(SendToUserResult as MutableMessageType<SendToUserResult>).typeName = "agent.v1.SendToUserResult";
(SendToUserResult as MutableMessageType<SendToUserResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SendToUserSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SendToUserError, oneof: "result" }
]);
var SendToUserToolCall$Runtime = (() => class _SendToUserToolCall extends Message<_SendToUserToolCall> {
  declare args?: SendToUserArgs;
  declare result?: SendToUserResult;
  constructor(data?: PartialMessage<_SendToUserToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SendToUserToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToUserToolCall {
    return new _SendToUserToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToUserToolCall {
    return new _SendToUserToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToUserToolCall {
    return new _SendToUserToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToUserToolCall | PlainMessage<_SendToUserToolCall> | undefined | null, b2: _SendToUserToolCall | PlainMessage<_SendToUserToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SendToUserToolCall as unknown as MessageType<_SendToUserToolCall>, a, b2);
  }
})();
export type SendToUserToolCall = InstanceType<typeof SendToUserToolCall$Runtime>;
var SendToUserToolCall: MessageType<SendToUserToolCall> = SendToUserToolCall$Runtime as unknown as MessageType<SendToUserToolCall>;
(SendToUserToolCall as MutableMessageType<SendToUserToolCall>).runtime = proto3;
(SendToUserToolCall as MutableMessageType<SendToUserToolCall>).typeName = "agent.v1.SendToUserToolCall";
(SendToUserToolCall as MutableMessageType<SendToUserToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SendToUserArgs },
  { no: 2, name: "result", kind: "message", T: SendToUserResult }
]);


export { SendToUserArgs, SendToUserSuccess, SendToUserError, SendToUserResult, SendToUserToolCall };
