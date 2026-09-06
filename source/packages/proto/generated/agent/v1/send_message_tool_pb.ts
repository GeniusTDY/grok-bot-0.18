/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39023-39234
 * Region SHA-256: ec00f1d213d7e0adf905a2438123b3bde9715201a5b193f725458b1e8da72c4d
 * Atomic B1 exports: 7 messages + 0 enums = 7
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SendMessageText$Runtime = (() => class _SendMessageText extends Message<_SendMessageText> {
  declare content: string;
  constructor(data?: PartialMessage<_SendMessageText>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _SendMessageText);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageText {
    return new _SendMessageText().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageText {
    return new _SendMessageText().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageText {
    return new _SendMessageText().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageText | PlainMessage<_SendMessageText> | undefined | null, b2: _SendMessageText | PlainMessage<_SendMessageText> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageText as unknown as MessageType<_SendMessageText>, a, b2);
  }
})();
export type SendMessageText = InstanceType<typeof SendMessageText$Runtime>;
var SendMessageText: MessageType<SendMessageText> = SendMessageText$Runtime as unknown as MessageType<SendMessageText>;
(SendMessageText as MutableMessageType<SendMessageText>).runtime = proto3;
(SendMessageText as MutableMessageType<SendMessageText>).typeName = "agent.v1.SendMessageText";
(SendMessageText as MutableMessageType<SendMessageText>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendMessageAttachment$Runtime = (() => class _SendMessageAttachment extends Message<_SendMessageAttachment> {
  declare url: string;
  declare alt?: string;
  constructor(data?: PartialMessage<_SendMessageAttachment>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _SendMessageAttachment);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageAttachment {
    return new _SendMessageAttachment().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageAttachment {
    return new _SendMessageAttachment().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageAttachment {
    return new _SendMessageAttachment().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageAttachment | PlainMessage<_SendMessageAttachment> | undefined | null, b2: _SendMessageAttachment | PlainMessage<_SendMessageAttachment> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageAttachment as unknown as MessageType<_SendMessageAttachment>, a, b2);
  }
})();
export type SendMessageAttachment = InstanceType<typeof SendMessageAttachment$Runtime>;
var SendMessageAttachment: MessageType<SendMessageAttachment> = SendMessageAttachment$Runtime as unknown as MessageType<SendMessageAttachment>;
(SendMessageAttachment as MutableMessageType<SendMessageAttachment>).runtime = proto3;
(SendMessageAttachment as MutableMessageType<SendMessageAttachment>).typeName = "agent.v1.SendMessageAttachment";
(SendMessageAttachment as MutableMessageType<SendMessageAttachment>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "alt", kind: "scalar", T: 9, opt: true }
]);
var SendMessageArgs$Runtime = (() => class _SendMessageArgs extends Message<_SendMessageArgs> {
  declare message: { case: "text"; value: SendMessageText } | { case: "attachment"; value: SendMessageAttachment } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SendMessageArgs>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _SendMessageArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageArgs {
    return new _SendMessageArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageArgs {
    return new _SendMessageArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageArgs {
    return new _SendMessageArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageArgs | PlainMessage<_SendMessageArgs> | undefined | null, b2: _SendMessageArgs | PlainMessage<_SendMessageArgs> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageArgs as unknown as MessageType<_SendMessageArgs>, a, b2);
  }
})();
export type SendMessageArgs = InstanceType<typeof SendMessageArgs$Runtime>;
var SendMessageArgs: MessageType<SendMessageArgs> = SendMessageArgs$Runtime as unknown as MessageType<SendMessageArgs>;
(SendMessageArgs as MutableMessageType<SendMessageArgs>).runtime = proto3;
(SendMessageArgs as MutableMessageType<SendMessageArgs>).typeName = "agent.v1.SendMessageArgs";
(SendMessageArgs as MutableMessageType<SendMessageArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: SendMessageText, oneof: "message" },
  { no: 2, name: "attachment", kind: "message", T: SendMessageAttachment, oneof: "message" }
]);
var SendMessageSuccess$Runtime = (() => class _SendMessageSuccess extends Message<_SendMessageSuccess> {
  declare timestamp: bigint;
  declare messageId: string;
  constructor(data?: PartialMessage<_SendMessageSuccess>) {
    super();
    this.timestamp = protoInt64.zero;
    this.messageId = "";
    proto3.util.initPartial(data, this as _SendMessageSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageSuccess {
    return new _SendMessageSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageSuccess {
    return new _SendMessageSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageSuccess {
    return new _SendMessageSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageSuccess | PlainMessage<_SendMessageSuccess> | undefined | null, b2: _SendMessageSuccess | PlainMessage<_SendMessageSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageSuccess as unknown as MessageType<_SendMessageSuccess>, a, b2);
  }
})();
export type SendMessageSuccess = InstanceType<typeof SendMessageSuccess$Runtime>;
var SendMessageSuccess: MessageType<SendMessageSuccess> = SendMessageSuccess$Runtime as unknown as MessageType<SendMessageSuccess>;
(SendMessageSuccess as MutableMessageType<SendMessageSuccess>).runtime = proto3;
(SendMessageSuccess as MutableMessageType<SendMessageSuccess>).typeName = "agent.v1.SendMessageSuccess";
(SendMessageSuccess as MutableMessageType<SendMessageSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "message_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendMessageError$Runtime = (() => class _SendMessageError extends Message<_SendMessageError> {
  declare error: string;
  constructor(data?: PartialMessage<_SendMessageError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SendMessageError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageError {
    return new _SendMessageError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageError {
    return new _SendMessageError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageError {
    return new _SendMessageError().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageError | PlainMessage<_SendMessageError> | undefined | null, b2: _SendMessageError | PlainMessage<_SendMessageError> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageError as unknown as MessageType<_SendMessageError>, a, b2);
  }
})();
export type SendMessageError = InstanceType<typeof SendMessageError$Runtime>;
var SendMessageError: MessageType<SendMessageError> = SendMessageError$Runtime as unknown as MessageType<SendMessageError>;
(SendMessageError as MutableMessageType<SendMessageError>).runtime = proto3;
(SendMessageError as MutableMessageType<SendMessageError>).typeName = "agent.v1.SendMessageError";
(SendMessageError as MutableMessageType<SendMessageError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendMessageResult$Runtime = (() => class _SendMessageResult extends Message<_SendMessageResult> {
  declare result: { case: "success"; value: SendMessageSuccess } | { case: "error"; value: SendMessageError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SendMessageResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SendMessageResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageResult {
    return new _SendMessageResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageResult {
    return new _SendMessageResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageResult {
    return new _SendMessageResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageResult | PlainMessage<_SendMessageResult> | undefined | null, b2: _SendMessageResult | PlainMessage<_SendMessageResult> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageResult as unknown as MessageType<_SendMessageResult>, a, b2);
  }
})();
export type SendMessageResult = InstanceType<typeof SendMessageResult$Runtime>;
var SendMessageResult: MessageType<SendMessageResult> = SendMessageResult$Runtime as unknown as MessageType<SendMessageResult>;
(SendMessageResult as MutableMessageType<SendMessageResult>).runtime = proto3;
(SendMessageResult as MutableMessageType<SendMessageResult>).typeName = "agent.v1.SendMessageResult";
(SendMessageResult as MutableMessageType<SendMessageResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SendMessageSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SendMessageError, oneof: "result" }
]);
var SendMessageToolCall$Runtime = (() => class _SendMessageToolCall extends Message<_SendMessageToolCall> {
  declare args?: SendMessageArgs;
  declare result?: SendMessageResult;
  constructor(data?: PartialMessage<_SendMessageToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SendMessageToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendMessageToolCall {
    return new _SendMessageToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendMessageToolCall {
    return new _SendMessageToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendMessageToolCall {
    return new _SendMessageToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SendMessageToolCall | PlainMessage<_SendMessageToolCall> | undefined | null, b2: _SendMessageToolCall | PlainMessage<_SendMessageToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SendMessageToolCall as unknown as MessageType<_SendMessageToolCall>, a, b2);
  }
})();
export type SendMessageToolCall = InstanceType<typeof SendMessageToolCall$Runtime>;
var SendMessageToolCall: MessageType<SendMessageToolCall> = SendMessageToolCall$Runtime as unknown as MessageType<SendMessageToolCall>;
(SendMessageToolCall as MutableMessageType<SendMessageToolCall>).runtime = proto3;
(SendMessageToolCall as MutableMessageType<SendMessageToolCall>).typeName = "agent.v1.SendMessageToolCall";
(SendMessageToolCall as MutableMessageType<SendMessageToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SendMessageArgs },
  { no: 2, name: "result", kind: "message", T: SendMessageResult }
]);


export { SendMessageText, SendMessageAttachment, SendMessageArgs, SendMessageSuccess, SendMessageError, SendMessageResult, SendMessageToolCall };
