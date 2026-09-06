/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:36792-37077
 * Region SHA-256: 88dc1b4acd9b0f1fdfb06adf802cd6364599bfbc15d6c830b73636d813a8174a
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpAuthArgs$Runtime = (() => class _McpAuthArgs extends Message<_McpAuthArgs> {
  declare serverIdentifier: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_McpAuthArgs>) {
    super();
    this.serverIdentifier = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _McpAuthArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthArgs {
    return new _McpAuthArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthArgs {
    return new _McpAuthArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthArgs {
    return new _McpAuthArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthArgs | PlainMessage<_McpAuthArgs> | undefined | null, b2: _McpAuthArgs | PlainMessage<_McpAuthArgs> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthArgs as unknown as MessageType<_McpAuthArgs>, a, b2);
  }
})();
export type McpAuthArgs = InstanceType<typeof McpAuthArgs$Runtime>;
var McpAuthArgs: MessageType<McpAuthArgs> = McpAuthArgs$Runtime as unknown as MessageType<McpAuthArgs>;
(McpAuthArgs as MutableMessageType<McpAuthArgs>).runtime = proto3;
(McpAuthArgs as MutableMessageType<McpAuthArgs>).typeName = "agent.v1.McpAuthArgs";
(McpAuthArgs as MutableMessageType<McpAuthArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthResult$Runtime = (() => class _McpAuthResult extends Message<_McpAuthResult> {
  declare result: { case: "success"; value: McpAuthSuccess } | { case: "error"; value: McpAuthError } | { case: "rejected"; value: McpAuthRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpAuthResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _McpAuthResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthResult | PlainMessage<_McpAuthResult> | undefined | null, b2: _McpAuthResult | PlainMessage<_McpAuthResult> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthResult as unknown as MessageType<_McpAuthResult>, a, b2);
  }
})();
export type McpAuthResult = InstanceType<typeof McpAuthResult$Runtime>;
var McpAuthResult: MessageType<McpAuthResult> = McpAuthResult$Runtime as unknown as MessageType<McpAuthResult>;
(McpAuthResult as MutableMessageType<McpAuthResult>).runtime = proto3;
(McpAuthResult as MutableMessageType<McpAuthResult>).typeName = "agent.v1.McpAuthResult";
(McpAuthResult as MutableMessageType<McpAuthResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: McpAuthSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: McpAuthError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: McpAuthRejected, oneof: "result" }
]);
var McpAuthSuccess$Runtime = (() => class _McpAuthSuccess extends Message<_McpAuthSuccess> {
  declare serverIdentifier: string;
  constructor(data?: PartialMessage<_McpAuthSuccess>) {
    super();
    this.serverIdentifier = "";
    proto3.util.initPartial(data, this as _McpAuthSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthSuccess {
    return new _McpAuthSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthSuccess {
    return new _McpAuthSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthSuccess {
    return new _McpAuthSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthSuccess | PlainMessage<_McpAuthSuccess> | undefined | null, b2: _McpAuthSuccess | PlainMessage<_McpAuthSuccess> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthSuccess as unknown as MessageType<_McpAuthSuccess>, a, b2);
  }
})();
export type McpAuthSuccess = InstanceType<typeof McpAuthSuccess$Runtime>;
var McpAuthSuccess: MessageType<McpAuthSuccess> = McpAuthSuccess$Runtime as unknown as MessageType<McpAuthSuccess>;
(McpAuthSuccess as MutableMessageType<McpAuthSuccess>).runtime = proto3;
(McpAuthSuccess as MutableMessageType<McpAuthSuccess>).typeName = "agent.v1.McpAuthSuccess";
(McpAuthSuccess as MutableMessageType<McpAuthSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthError$Runtime = (() => class _McpAuthError extends Message<_McpAuthError> {
  declare error: string;
  constructor(data?: PartialMessage<_McpAuthError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _McpAuthError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthError {
    return new _McpAuthError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthError {
    return new _McpAuthError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthError {
    return new _McpAuthError().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthError | PlainMessage<_McpAuthError> | undefined | null, b2: _McpAuthError | PlainMessage<_McpAuthError> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthError as unknown as MessageType<_McpAuthError>, a, b2);
  }
})();
export type McpAuthError = InstanceType<typeof McpAuthError$Runtime>;
var McpAuthError: MessageType<McpAuthError> = McpAuthError$Runtime as unknown as MessageType<McpAuthError>;
(McpAuthError as MutableMessageType<McpAuthError>).runtime = proto3;
(McpAuthError as MutableMessageType<McpAuthError>).typeName = "agent.v1.McpAuthError";
(McpAuthError as MutableMessageType<McpAuthError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthRejected$Runtime = (() => class _McpAuthRejected extends Message<_McpAuthRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_McpAuthRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _McpAuthRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthRejected {
    return new _McpAuthRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthRejected {
    return new _McpAuthRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthRejected {
    return new _McpAuthRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthRejected | PlainMessage<_McpAuthRejected> | undefined | null, b2: _McpAuthRejected | PlainMessage<_McpAuthRejected> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthRejected as unknown as MessageType<_McpAuthRejected>, a, b2);
  }
})();
export type McpAuthRejected = InstanceType<typeof McpAuthRejected$Runtime>;
var McpAuthRejected: MessageType<McpAuthRejected> = McpAuthRejected$Runtime as unknown as MessageType<McpAuthRejected>;
(McpAuthRejected as MutableMessageType<McpAuthRejected>).runtime = proto3;
(McpAuthRejected as MutableMessageType<McpAuthRejected>).typeName = "agent.v1.McpAuthRejected";
(McpAuthRejected as MutableMessageType<McpAuthRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthToolCall$Runtime = (() => class _McpAuthToolCall extends Message<_McpAuthToolCall> {
  declare args?: McpAuthArgs;
  declare result?: McpAuthResult;
  constructor(data?: PartialMessage<_McpAuthToolCall>) {
    super();
    proto3.util.initPartial(data, this as _McpAuthToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthToolCall {
    return new _McpAuthToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthToolCall {
    return new _McpAuthToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthToolCall {
    return new _McpAuthToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthToolCall | PlainMessage<_McpAuthToolCall> | undefined | null, b2: _McpAuthToolCall | PlainMessage<_McpAuthToolCall> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthToolCall as unknown as MessageType<_McpAuthToolCall>, a, b2);
  }
})();
export type McpAuthToolCall = InstanceType<typeof McpAuthToolCall$Runtime>;
var McpAuthToolCall: MessageType<McpAuthToolCall> = McpAuthToolCall$Runtime as unknown as MessageType<McpAuthToolCall>;
(McpAuthToolCall as MutableMessageType<McpAuthToolCall>).runtime = proto3;
(McpAuthToolCall as MutableMessageType<McpAuthToolCall>).typeName = "agent.v1.McpAuthToolCall";
(McpAuthToolCall as MutableMessageType<McpAuthToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: McpAuthArgs },
  { no: 2, name: "result", kind: "message", T: McpAuthResult }
]);
var McpAuthRequestQuery$Runtime = (() => class _McpAuthRequestQuery extends Message<_McpAuthRequestQuery> {
  declare args?: McpAuthArgs;
  constructor(data?: PartialMessage<_McpAuthRequestQuery>) {
    super();
    proto3.util.initPartial(data, this as _McpAuthRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthRequestQuery {
    return new _McpAuthRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthRequestQuery {
    return new _McpAuthRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthRequestQuery {
    return new _McpAuthRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthRequestQuery | PlainMessage<_McpAuthRequestQuery> | undefined | null, b2: _McpAuthRequestQuery | PlainMessage<_McpAuthRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthRequestQuery as unknown as MessageType<_McpAuthRequestQuery>, a, b2);
  }
})();
export type McpAuthRequestQuery = InstanceType<typeof McpAuthRequestQuery$Runtime>;
var McpAuthRequestQuery: MessageType<McpAuthRequestQuery> = McpAuthRequestQuery$Runtime as unknown as MessageType<McpAuthRequestQuery>;
(McpAuthRequestQuery as MutableMessageType<McpAuthRequestQuery>).runtime = proto3;
(McpAuthRequestQuery as MutableMessageType<McpAuthRequestQuery>).typeName = "agent.v1.McpAuthRequestQuery";
(McpAuthRequestQuery as MutableMessageType<McpAuthRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: McpAuthArgs }
]);
var McpAuthRequestResponse$Runtime = (() => class _McpAuthRequestResponse extends Message<_McpAuthRequestResponse> {
  declare result: { case: "approved"; value: McpAuthRequestResponse_Approved } | { case: "rejected"; value: McpAuthRequestResponse_Rejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpAuthRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _McpAuthRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthRequestResponse {
    return new _McpAuthRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse {
    return new _McpAuthRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse {
    return new _McpAuthRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthRequestResponse | PlainMessage<_McpAuthRequestResponse> | undefined | null, b2: _McpAuthRequestResponse | PlainMessage<_McpAuthRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthRequestResponse as unknown as MessageType<_McpAuthRequestResponse>, a, b2);
  }
})();
export type McpAuthRequestResponse = InstanceType<typeof McpAuthRequestResponse$Runtime>;
var McpAuthRequestResponse: MessageType<McpAuthRequestResponse> = McpAuthRequestResponse$Runtime as unknown as MessageType<McpAuthRequestResponse>;
(McpAuthRequestResponse as MutableMessageType<McpAuthRequestResponse>).runtime = proto3;
(McpAuthRequestResponse as MutableMessageType<McpAuthRequestResponse>).typeName = "agent.v1.McpAuthRequestResponse";
(McpAuthRequestResponse as MutableMessageType<McpAuthRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: McpAuthRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: McpAuthRequestResponse_Rejected, oneof: "result" }
]);
var McpAuthRequestResponse_Approved$Runtime = (() => class _McpAuthRequestResponse_Approved extends Message<_McpAuthRequestResponse_Approved> {
  constructor(data?: PartialMessage<_McpAuthRequestResponse_Approved>) {
    super();
    proto3.util.initPartial(data, this as _McpAuthRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthRequestResponse_Approved {
    return new _McpAuthRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse_Approved {
    return new _McpAuthRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse_Approved {
    return new _McpAuthRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthRequestResponse_Approved | PlainMessage<_McpAuthRequestResponse_Approved> | undefined | null, b2: _McpAuthRequestResponse_Approved | PlainMessage<_McpAuthRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthRequestResponse_Approved as unknown as MessageType<_McpAuthRequestResponse_Approved>, a, b2);
  }
})();
export type McpAuthRequestResponse_Approved = InstanceType<typeof McpAuthRequestResponse_Approved$Runtime>;
var McpAuthRequestResponse_Approved: MessageType<McpAuthRequestResponse_Approved> = McpAuthRequestResponse_Approved$Runtime as unknown as MessageType<McpAuthRequestResponse_Approved>;
(McpAuthRequestResponse_Approved as MutableMessageType<McpAuthRequestResponse_Approved>).runtime = proto3;
(McpAuthRequestResponse_Approved as MutableMessageType<McpAuthRequestResponse_Approved>).typeName = "agent.v1.McpAuthRequestResponse.Approved";
(McpAuthRequestResponse_Approved as MutableMessageType<McpAuthRequestResponse_Approved>).fields = proto3.util.newFieldList(() => []);
var McpAuthRequestResponse_Rejected$Runtime = (() => class _McpAuthRequestResponse_Rejected extends Message<_McpAuthRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_McpAuthRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _McpAuthRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthRequestResponse_Rejected {
    return new _McpAuthRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse_Rejected {
    return new _McpAuthRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthRequestResponse_Rejected {
    return new _McpAuthRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthRequestResponse_Rejected | PlainMessage<_McpAuthRequestResponse_Rejected> | undefined | null, b2: _McpAuthRequestResponse_Rejected | PlainMessage<_McpAuthRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthRequestResponse_Rejected as unknown as MessageType<_McpAuthRequestResponse_Rejected>, a, b2);
  }
})();
export type McpAuthRequestResponse_Rejected = InstanceType<typeof McpAuthRequestResponse_Rejected$Runtime>;
var McpAuthRequestResponse_Rejected: MessageType<McpAuthRequestResponse_Rejected> = McpAuthRequestResponse_Rejected$Runtime as unknown as MessageType<McpAuthRequestResponse_Rejected>;
(McpAuthRequestResponse_Rejected as MutableMessageType<McpAuthRequestResponse_Rejected>).runtime = proto3;
(McpAuthRequestResponse_Rejected as MutableMessageType<McpAuthRequestResponse_Rejected>).typeName = "agent.v1.McpAuthRequestResponse.Rejected";
(McpAuthRequestResponse_Rejected as MutableMessageType<McpAuthRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { McpAuthArgs, McpAuthResult, McpAuthSuccess, McpAuthError, McpAuthRejected, McpAuthToolCall, McpAuthRequestQuery, McpAuthRequestResponse, McpAuthRequestResponse_Approved, McpAuthRequestResponse_Rejected };
