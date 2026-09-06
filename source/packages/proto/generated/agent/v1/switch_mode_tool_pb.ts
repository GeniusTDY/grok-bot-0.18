/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34331-34625
 * Region SHA-256: 30a018678e9c4c48cbeea96524620f950240124537343bdac9b113aa812d51fa
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SwitchModeArgs$Runtime = (() => class _SwitchModeArgs extends Message<_SwitchModeArgs> {
  declare targetModeId: string;
  declare explanation?: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_SwitchModeArgs>) {
    super();
    this.targetModeId = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _SwitchModeArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeArgs {
    return new _SwitchModeArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeArgs {
    return new _SwitchModeArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeArgs {
    return new _SwitchModeArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeArgs | PlainMessage<_SwitchModeArgs> | undefined | null, b2: _SwitchModeArgs | PlainMessage<_SwitchModeArgs> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeArgs as unknown as MessageType<_SwitchModeArgs>, a, b2);
  }
})();
export type SwitchModeArgs = InstanceType<typeof SwitchModeArgs$Runtime>;
var SwitchModeArgs: MessageType<SwitchModeArgs> = SwitchModeArgs$Runtime as unknown as MessageType<SwitchModeArgs>;
(SwitchModeArgs as MutableMessageType<SwitchModeArgs>).runtime = proto3;
(SwitchModeArgs as MutableMessageType<SwitchModeArgs>).typeName = "agent.v1.SwitchModeArgs";
(SwitchModeArgs as MutableMessageType<SwitchModeArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "target_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "explanation", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwitchModeResult$Runtime = (() => class _SwitchModeResult extends Message<_SwitchModeResult> {
  declare result: { case: "success"; value: SwitchModeSuccess } | { case: "error"; value: SwitchModeError } | { case: "rejected"; value: SwitchModeRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SwitchModeResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SwitchModeResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeResult | PlainMessage<_SwitchModeResult> | undefined | null, b2: _SwitchModeResult | PlainMessage<_SwitchModeResult> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeResult as unknown as MessageType<_SwitchModeResult>, a, b2);
  }
})();
export type SwitchModeResult = InstanceType<typeof SwitchModeResult$Runtime>;
var SwitchModeResult: MessageType<SwitchModeResult> = SwitchModeResult$Runtime as unknown as MessageType<SwitchModeResult>;
(SwitchModeResult as MutableMessageType<SwitchModeResult>).runtime = proto3;
(SwitchModeResult as MutableMessageType<SwitchModeResult>).typeName = "agent.v1.SwitchModeResult";
(SwitchModeResult as MutableMessageType<SwitchModeResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SwitchModeSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SwitchModeError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: SwitchModeRejected, oneof: "result" }
]);
var SwitchModeSuccess$Runtime = (() => class _SwitchModeSuccess extends Message<_SwitchModeSuccess> {
  declare fromModeId: string;
  declare toModeId: string;
  constructor(data?: PartialMessage<_SwitchModeSuccess>) {
    super();
    this.fromModeId = "";
    this.toModeId = "";
    proto3.util.initPartial(data, this as _SwitchModeSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeSuccess {
    return new _SwitchModeSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeSuccess {
    return new _SwitchModeSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeSuccess {
    return new _SwitchModeSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeSuccess | PlainMessage<_SwitchModeSuccess> | undefined | null, b2: _SwitchModeSuccess | PlainMessage<_SwitchModeSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeSuccess as unknown as MessageType<_SwitchModeSuccess>, a, b2);
  }
})();
export type SwitchModeSuccess = InstanceType<typeof SwitchModeSuccess$Runtime>;
var SwitchModeSuccess: MessageType<SwitchModeSuccess> = SwitchModeSuccess$Runtime as unknown as MessageType<SwitchModeSuccess>;
(SwitchModeSuccess as MutableMessageType<SwitchModeSuccess>).runtime = proto3;
(SwitchModeSuccess as MutableMessageType<SwitchModeSuccess>).typeName = "agent.v1.SwitchModeSuccess";
(SwitchModeSuccess as MutableMessageType<SwitchModeSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "from_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "to_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwitchModeError$Runtime = (() => class _SwitchModeError extends Message<_SwitchModeError> {
  declare error: string;
  constructor(data?: PartialMessage<_SwitchModeError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SwitchModeError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeError {
    return new _SwitchModeError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeError {
    return new _SwitchModeError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeError {
    return new _SwitchModeError().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeError | PlainMessage<_SwitchModeError> | undefined | null, b2: _SwitchModeError | PlainMessage<_SwitchModeError> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeError as unknown as MessageType<_SwitchModeError>, a, b2);
  }
})();
export type SwitchModeError = InstanceType<typeof SwitchModeError$Runtime>;
var SwitchModeError: MessageType<SwitchModeError> = SwitchModeError$Runtime as unknown as MessageType<SwitchModeError>;
(SwitchModeError as MutableMessageType<SwitchModeError>).runtime = proto3;
(SwitchModeError as MutableMessageType<SwitchModeError>).typeName = "agent.v1.SwitchModeError";
(SwitchModeError as MutableMessageType<SwitchModeError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwitchModeRejected$Runtime = (() => class _SwitchModeRejected extends Message<_SwitchModeRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_SwitchModeRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _SwitchModeRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeRejected {
    return new _SwitchModeRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeRejected {
    return new _SwitchModeRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeRejected {
    return new _SwitchModeRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeRejected | PlainMessage<_SwitchModeRejected> | undefined | null, b2: _SwitchModeRejected | PlainMessage<_SwitchModeRejected> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeRejected as unknown as MessageType<_SwitchModeRejected>, a, b2);
  }
})();
export type SwitchModeRejected = InstanceType<typeof SwitchModeRejected$Runtime>;
var SwitchModeRejected: MessageType<SwitchModeRejected> = SwitchModeRejected$Runtime as unknown as MessageType<SwitchModeRejected>;
(SwitchModeRejected as MutableMessageType<SwitchModeRejected>).runtime = proto3;
(SwitchModeRejected as MutableMessageType<SwitchModeRejected>).typeName = "agent.v1.SwitchModeRejected";
(SwitchModeRejected as MutableMessageType<SwitchModeRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwitchModeToolCall$Runtime = (() => class _SwitchModeToolCall extends Message<_SwitchModeToolCall> {
  declare args?: SwitchModeArgs;
  declare result?: SwitchModeResult;
  constructor(data?: PartialMessage<_SwitchModeToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SwitchModeToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeToolCall {
    return new _SwitchModeToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeToolCall {
    return new _SwitchModeToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeToolCall {
    return new _SwitchModeToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeToolCall | PlainMessage<_SwitchModeToolCall> | undefined | null, b2: _SwitchModeToolCall | PlainMessage<_SwitchModeToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeToolCall as unknown as MessageType<_SwitchModeToolCall>, a, b2);
  }
})();
export type SwitchModeToolCall = InstanceType<typeof SwitchModeToolCall$Runtime>;
var SwitchModeToolCall: MessageType<SwitchModeToolCall> = SwitchModeToolCall$Runtime as unknown as MessageType<SwitchModeToolCall>;
(SwitchModeToolCall as MutableMessageType<SwitchModeToolCall>).runtime = proto3;
(SwitchModeToolCall as MutableMessageType<SwitchModeToolCall>).typeName = "agent.v1.SwitchModeToolCall";
(SwitchModeToolCall as MutableMessageType<SwitchModeToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SwitchModeArgs },
  { no: 2, name: "result", kind: "message", T: SwitchModeResult }
]);
var SwitchModeRequestQuery$Runtime = (() => class _SwitchModeRequestQuery extends Message<_SwitchModeRequestQuery> {
  declare args?: SwitchModeArgs;
  constructor(data?: PartialMessage<_SwitchModeRequestQuery>) {
    super();
    proto3.util.initPartial(data, this as _SwitchModeRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeRequestQuery {
    return new _SwitchModeRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeRequestQuery {
    return new _SwitchModeRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeRequestQuery {
    return new _SwitchModeRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeRequestQuery | PlainMessage<_SwitchModeRequestQuery> | undefined | null, b2: _SwitchModeRequestQuery | PlainMessage<_SwitchModeRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeRequestQuery as unknown as MessageType<_SwitchModeRequestQuery>, a, b2);
  }
})();
export type SwitchModeRequestQuery = InstanceType<typeof SwitchModeRequestQuery$Runtime>;
var SwitchModeRequestQuery: MessageType<SwitchModeRequestQuery> = SwitchModeRequestQuery$Runtime as unknown as MessageType<SwitchModeRequestQuery>;
(SwitchModeRequestQuery as MutableMessageType<SwitchModeRequestQuery>).runtime = proto3;
(SwitchModeRequestQuery as MutableMessageType<SwitchModeRequestQuery>).typeName = "agent.v1.SwitchModeRequestQuery";
(SwitchModeRequestQuery as MutableMessageType<SwitchModeRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SwitchModeArgs }
]);
var SwitchModeRequestResponse$Runtime = (() => class _SwitchModeRequestResponse extends Message<_SwitchModeRequestResponse> {
  declare result: { case: "approved"; value: SwitchModeRequestResponse_Approved } | { case: "rejected"; value: SwitchModeRequestResponse_Rejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SwitchModeRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SwitchModeRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeRequestResponse {
    return new _SwitchModeRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse {
    return new _SwitchModeRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse {
    return new _SwitchModeRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeRequestResponse | PlainMessage<_SwitchModeRequestResponse> | undefined | null, b2: _SwitchModeRequestResponse | PlainMessage<_SwitchModeRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeRequestResponse as unknown as MessageType<_SwitchModeRequestResponse>, a, b2);
  }
})();
export type SwitchModeRequestResponse = InstanceType<typeof SwitchModeRequestResponse$Runtime>;
var SwitchModeRequestResponse: MessageType<SwitchModeRequestResponse> = SwitchModeRequestResponse$Runtime as unknown as MessageType<SwitchModeRequestResponse>;
(SwitchModeRequestResponse as MutableMessageType<SwitchModeRequestResponse>).runtime = proto3;
(SwitchModeRequestResponse as MutableMessageType<SwitchModeRequestResponse>).typeName = "agent.v1.SwitchModeRequestResponse";
(SwitchModeRequestResponse as MutableMessageType<SwitchModeRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: SwitchModeRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: SwitchModeRequestResponse_Rejected, oneof: "result" }
]);
var SwitchModeRequestResponse_Approved$Runtime = (() => class _SwitchModeRequestResponse_Approved extends Message<_SwitchModeRequestResponse_Approved> {
  constructor(data?: PartialMessage<_SwitchModeRequestResponse_Approved>) {
    super();
    proto3.util.initPartial(data, this as _SwitchModeRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeRequestResponse_Approved {
    return new _SwitchModeRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse_Approved {
    return new _SwitchModeRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse_Approved {
    return new _SwitchModeRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeRequestResponse_Approved | PlainMessage<_SwitchModeRequestResponse_Approved> | undefined | null, b2: _SwitchModeRequestResponse_Approved | PlainMessage<_SwitchModeRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeRequestResponse_Approved as unknown as MessageType<_SwitchModeRequestResponse_Approved>, a, b2);
  }
})();
export type SwitchModeRequestResponse_Approved = InstanceType<typeof SwitchModeRequestResponse_Approved$Runtime>;
var SwitchModeRequestResponse_Approved: MessageType<SwitchModeRequestResponse_Approved> = SwitchModeRequestResponse_Approved$Runtime as unknown as MessageType<SwitchModeRequestResponse_Approved>;
(SwitchModeRequestResponse_Approved as MutableMessageType<SwitchModeRequestResponse_Approved>).runtime = proto3;
(SwitchModeRequestResponse_Approved as MutableMessageType<SwitchModeRequestResponse_Approved>).typeName = "agent.v1.SwitchModeRequestResponse.Approved";
(SwitchModeRequestResponse_Approved as MutableMessageType<SwitchModeRequestResponse_Approved>).fields = proto3.util.newFieldList(() => []);
var SwitchModeRequestResponse_Rejected$Runtime = (() => class _SwitchModeRequestResponse_Rejected extends Message<_SwitchModeRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_SwitchModeRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _SwitchModeRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeRequestResponse_Rejected {
    return new _SwitchModeRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse_Rejected {
    return new _SwitchModeRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeRequestResponse_Rejected {
    return new _SwitchModeRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeRequestResponse_Rejected | PlainMessage<_SwitchModeRequestResponse_Rejected> | undefined | null, b2: _SwitchModeRequestResponse_Rejected | PlainMessage<_SwitchModeRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeRequestResponse_Rejected as unknown as MessageType<_SwitchModeRequestResponse_Rejected>, a, b2);
  }
})();
export type SwitchModeRequestResponse_Rejected = InstanceType<typeof SwitchModeRequestResponse_Rejected$Runtime>;
var SwitchModeRequestResponse_Rejected: MessageType<SwitchModeRequestResponse_Rejected> = SwitchModeRequestResponse_Rejected$Runtime as unknown as MessageType<SwitchModeRequestResponse_Rejected>;
(SwitchModeRequestResponse_Rejected as MutableMessageType<SwitchModeRequestResponse_Rejected>).runtime = proto3;
(SwitchModeRequestResponse_Rejected as MutableMessageType<SwitchModeRequestResponse_Rejected>).typeName = "agent.v1.SwitchModeRequestResponse.Rejected";
(SwitchModeRequestResponse_Rejected as MutableMessageType<SwitchModeRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { SwitchModeArgs, SwitchModeResult, SwitchModeSuccess, SwitchModeError, SwitchModeRejected, SwitchModeToolCall, SwitchModeRequestQuery, SwitchModeRequestResponse, SwitchModeRequestResponse_Approved, SwitchModeRequestResponse_Rejected };
