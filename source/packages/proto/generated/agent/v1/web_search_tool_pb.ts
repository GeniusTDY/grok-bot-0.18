/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:33382-33707
 * Region SHA-256: 07e21cba0cca5741b01a114a7347e92a7aaa42a4e246272569fd44b9d5a7e564
 * Atomic B1 exports: 11 messages + 0 enums = 11
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var WebSearchArgs$Runtime = (() => class _WebSearchArgs extends Message<_WebSearchArgs> {
  declare searchTerm: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_WebSearchArgs>) {
    super();
    this.searchTerm = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _WebSearchArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchArgs {
    return new _WebSearchArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchArgs {
    return new _WebSearchArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchArgs {
    return new _WebSearchArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchArgs | PlainMessage<_WebSearchArgs> | undefined | null, b2: _WebSearchArgs | PlainMessage<_WebSearchArgs> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchArgs as unknown as MessageType<_WebSearchArgs>, a, b2);
  }
})();
export type WebSearchArgs = InstanceType<typeof WebSearchArgs$Runtime>;
var WebSearchArgs: MessageType<WebSearchArgs> = WebSearchArgs$Runtime as unknown as MessageType<WebSearchArgs>;
(WebSearchArgs as MutableMessageType<WebSearchArgs>).runtime = proto3;
(WebSearchArgs as MutableMessageType<WebSearchArgs>).typeName = "agent.v1.WebSearchArgs";
(WebSearchArgs as MutableMessageType<WebSearchArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "search_term",
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
var WebSearchResult$Runtime = (() => class _WebSearchResult extends Message<_WebSearchResult> {
  declare result: { case: "success"; value: WebSearchSuccess } | { case: "error"; value: WebSearchError } | { case: "rejected"; value: WebSearchRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WebSearchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WebSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchResult | PlainMessage<_WebSearchResult> | undefined | null, b2: _WebSearchResult | PlainMessage<_WebSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchResult as unknown as MessageType<_WebSearchResult>, a, b2);
  }
})();
export type WebSearchResult = InstanceType<typeof WebSearchResult$Runtime>;
var WebSearchResult: MessageType<WebSearchResult> = WebSearchResult$Runtime as unknown as MessageType<WebSearchResult>;
(WebSearchResult as MutableMessageType<WebSearchResult>).runtime = proto3;
(WebSearchResult as MutableMessageType<WebSearchResult>).typeName = "agent.v1.WebSearchResult";
(WebSearchResult as MutableMessageType<WebSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: WebSearchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: WebSearchError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: WebSearchRejected, oneof: "result" }
]);
var WebSearchSuccess$Runtime = (() => class _WebSearchSuccess extends Message<_WebSearchSuccess> {
  declare references: WebSearchReference[];
  constructor(data?: PartialMessage<_WebSearchSuccess>) {
    super();
    this.references = [];
    proto3.util.initPartial(data, this as _WebSearchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchSuccess {
    return new _WebSearchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchSuccess {
    return new _WebSearchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchSuccess {
    return new _WebSearchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchSuccess | PlainMessage<_WebSearchSuccess> | undefined | null, b2: _WebSearchSuccess | PlainMessage<_WebSearchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchSuccess as unknown as MessageType<_WebSearchSuccess>, a, b2);
  }
})();
export type WebSearchSuccess = InstanceType<typeof WebSearchSuccess$Runtime>;
var WebSearchSuccess: MessageType<WebSearchSuccess> = WebSearchSuccess$Runtime as unknown as MessageType<WebSearchSuccess>;
(WebSearchSuccess as MutableMessageType<WebSearchSuccess>).runtime = proto3;
(WebSearchSuccess as MutableMessageType<WebSearchSuccess>).typeName = "agent.v1.WebSearchSuccess";
(WebSearchSuccess as MutableMessageType<WebSearchSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "references", kind: "message", T: WebSearchReference, repeated: true }
]);
var WebSearchError$Runtime = (() => class _WebSearchError extends Message<_WebSearchError> {
  declare error: string;
  constructor(data?: PartialMessage<_WebSearchError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _WebSearchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchError {
    return new _WebSearchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchError {
    return new _WebSearchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchError {
    return new _WebSearchError().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchError | PlainMessage<_WebSearchError> | undefined | null, b2: _WebSearchError | PlainMessage<_WebSearchError> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchError as unknown as MessageType<_WebSearchError>, a, b2);
  }
})();
export type WebSearchError = InstanceType<typeof WebSearchError$Runtime>;
var WebSearchError: MessageType<WebSearchError> = WebSearchError$Runtime as unknown as MessageType<WebSearchError>;
(WebSearchError as MutableMessageType<WebSearchError>).runtime = proto3;
(WebSearchError as MutableMessageType<WebSearchError>).typeName = "agent.v1.WebSearchError";
(WebSearchError as MutableMessageType<WebSearchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebSearchRejected$Runtime = (() => class _WebSearchRejected extends Message<_WebSearchRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_WebSearchRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _WebSearchRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchRejected {
    return new _WebSearchRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchRejected {
    return new _WebSearchRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchRejected {
    return new _WebSearchRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchRejected | PlainMessage<_WebSearchRejected> | undefined | null, b2: _WebSearchRejected | PlainMessage<_WebSearchRejected> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchRejected as unknown as MessageType<_WebSearchRejected>, a, b2);
  }
})();
export type WebSearchRejected = InstanceType<typeof WebSearchRejected$Runtime>;
var WebSearchRejected: MessageType<WebSearchRejected> = WebSearchRejected$Runtime as unknown as MessageType<WebSearchRejected>;
(WebSearchRejected as MutableMessageType<WebSearchRejected>).runtime = proto3;
(WebSearchRejected as MutableMessageType<WebSearchRejected>).typeName = "agent.v1.WebSearchRejected";
(WebSearchRejected as MutableMessageType<WebSearchRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebSearchReference$Runtime = (() => class _WebSearchReference extends Message<_WebSearchReference> {
  declare title: string;
  declare url: string;
  declare chunk: string;
  constructor(data?: PartialMessage<_WebSearchReference>) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    proto3.util.initPartial(data, this as _WebSearchReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchReference {
    return new _WebSearchReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchReference {
    return new _WebSearchReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchReference {
    return new _WebSearchReference().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchReference | PlainMessage<_WebSearchReference> | undefined | null, b2: _WebSearchReference | PlainMessage<_WebSearchReference> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchReference as unknown as MessageType<_WebSearchReference>, a, b2);
  }
})();
export type WebSearchReference = InstanceType<typeof WebSearchReference$Runtime>;
var WebSearchReference: MessageType<WebSearchReference> = WebSearchReference$Runtime as unknown as MessageType<WebSearchReference>;
(WebSearchReference as MutableMessageType<WebSearchReference>).runtime = proto3;
(WebSearchReference as MutableMessageType<WebSearchReference>).typeName = "agent.v1.WebSearchReference";
(WebSearchReference as MutableMessageType<WebSearchReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebSearchToolCall$Runtime = (() => class _WebSearchToolCall extends Message<_WebSearchToolCall> {
  declare args?: WebSearchArgs;
  declare result?: WebSearchResult;
  constructor(data?: PartialMessage<_WebSearchToolCall>) {
    super();
    proto3.util.initPartial(data, this as _WebSearchToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchToolCall {
    return new _WebSearchToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchToolCall {
    return new _WebSearchToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchToolCall {
    return new _WebSearchToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchToolCall | PlainMessage<_WebSearchToolCall> | undefined | null, b2: _WebSearchToolCall | PlainMessage<_WebSearchToolCall> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchToolCall as unknown as MessageType<_WebSearchToolCall>, a, b2);
  }
})();
export type WebSearchToolCall = InstanceType<typeof WebSearchToolCall$Runtime>;
var WebSearchToolCall: MessageType<WebSearchToolCall> = WebSearchToolCall$Runtime as unknown as MessageType<WebSearchToolCall>;
(WebSearchToolCall as MutableMessageType<WebSearchToolCall>).runtime = proto3;
(WebSearchToolCall as MutableMessageType<WebSearchToolCall>).typeName = "agent.v1.WebSearchToolCall";
(WebSearchToolCall as MutableMessageType<WebSearchToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: WebSearchArgs },
  { no: 2, name: "result", kind: "message", T: WebSearchResult }
]);
var WebSearchRequestQuery$Runtime = (() => class _WebSearchRequestQuery extends Message<_WebSearchRequestQuery> {
  declare args?: WebSearchArgs;
  constructor(data?: PartialMessage<_WebSearchRequestQuery>) {
    super();
    proto3.util.initPartial(data, this as _WebSearchRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchRequestQuery {
    return new _WebSearchRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchRequestQuery {
    return new _WebSearchRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchRequestQuery {
    return new _WebSearchRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchRequestQuery | PlainMessage<_WebSearchRequestQuery> | undefined | null, b2: _WebSearchRequestQuery | PlainMessage<_WebSearchRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchRequestQuery as unknown as MessageType<_WebSearchRequestQuery>, a, b2);
  }
})();
export type WebSearchRequestQuery = InstanceType<typeof WebSearchRequestQuery$Runtime>;
var WebSearchRequestQuery: MessageType<WebSearchRequestQuery> = WebSearchRequestQuery$Runtime as unknown as MessageType<WebSearchRequestQuery>;
(WebSearchRequestQuery as MutableMessageType<WebSearchRequestQuery>).runtime = proto3;
(WebSearchRequestQuery as MutableMessageType<WebSearchRequestQuery>).typeName = "agent.v1.WebSearchRequestQuery";
(WebSearchRequestQuery as MutableMessageType<WebSearchRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: WebSearchArgs }
]);
var WebSearchRequestResponse$Runtime = (() => class _WebSearchRequestResponse extends Message<_WebSearchRequestResponse> {
  declare result: { case: "approved"; value: WebSearchRequestResponse_Approved } | { case: "rejected"; value: WebSearchRequestResponse_Rejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WebSearchRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WebSearchRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchRequestResponse {
    return new _WebSearchRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse {
    return new _WebSearchRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse {
    return new _WebSearchRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchRequestResponse | PlainMessage<_WebSearchRequestResponse> | undefined | null, b2: _WebSearchRequestResponse | PlainMessage<_WebSearchRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchRequestResponse as unknown as MessageType<_WebSearchRequestResponse>, a, b2);
  }
})();
export type WebSearchRequestResponse = InstanceType<typeof WebSearchRequestResponse$Runtime>;
var WebSearchRequestResponse: MessageType<WebSearchRequestResponse> = WebSearchRequestResponse$Runtime as unknown as MessageType<WebSearchRequestResponse>;
(WebSearchRequestResponse as MutableMessageType<WebSearchRequestResponse>).runtime = proto3;
(WebSearchRequestResponse as MutableMessageType<WebSearchRequestResponse>).typeName = "agent.v1.WebSearchRequestResponse";
(WebSearchRequestResponse as MutableMessageType<WebSearchRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: WebSearchRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: WebSearchRequestResponse_Rejected, oneof: "result" }
]);
var WebSearchRequestResponse_Approved$Runtime = (() => class _WebSearchRequestResponse_Approved extends Message<_WebSearchRequestResponse_Approved> {
  constructor(data?: PartialMessage<_WebSearchRequestResponse_Approved>) {
    super();
    proto3.util.initPartial(data, this as _WebSearchRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchRequestResponse_Approved {
    return new _WebSearchRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse_Approved {
    return new _WebSearchRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse_Approved {
    return new _WebSearchRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchRequestResponse_Approved | PlainMessage<_WebSearchRequestResponse_Approved> | undefined | null, b2: _WebSearchRequestResponse_Approved | PlainMessage<_WebSearchRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchRequestResponse_Approved as unknown as MessageType<_WebSearchRequestResponse_Approved>, a, b2);
  }
})();
export type WebSearchRequestResponse_Approved = InstanceType<typeof WebSearchRequestResponse_Approved$Runtime>;
var WebSearchRequestResponse_Approved: MessageType<WebSearchRequestResponse_Approved> = WebSearchRequestResponse_Approved$Runtime as unknown as MessageType<WebSearchRequestResponse_Approved>;
(WebSearchRequestResponse_Approved as MutableMessageType<WebSearchRequestResponse_Approved>).runtime = proto3;
(WebSearchRequestResponse_Approved as MutableMessageType<WebSearchRequestResponse_Approved>).typeName = "agent.v1.WebSearchRequestResponse.Approved";
(WebSearchRequestResponse_Approved as MutableMessageType<WebSearchRequestResponse_Approved>).fields = proto3.util.newFieldList(() => []);
var WebSearchRequestResponse_Rejected$Runtime = (() => class _WebSearchRequestResponse_Rejected extends Message<_WebSearchRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_WebSearchRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _WebSearchRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchRequestResponse_Rejected {
    return new _WebSearchRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse_Rejected {
    return new _WebSearchRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchRequestResponse_Rejected {
    return new _WebSearchRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchRequestResponse_Rejected | PlainMessage<_WebSearchRequestResponse_Rejected> | undefined | null, b2: _WebSearchRequestResponse_Rejected | PlainMessage<_WebSearchRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchRequestResponse_Rejected as unknown as MessageType<_WebSearchRequestResponse_Rejected>, a, b2);
  }
})();
export type WebSearchRequestResponse_Rejected = InstanceType<typeof WebSearchRequestResponse_Rejected$Runtime>;
var WebSearchRequestResponse_Rejected: MessageType<WebSearchRequestResponse_Rejected> = WebSearchRequestResponse_Rejected$Runtime as unknown as MessageType<WebSearchRequestResponse_Rejected>;
(WebSearchRequestResponse_Rejected as MutableMessageType<WebSearchRequestResponse_Rejected>).runtime = proto3;
(WebSearchRequestResponse_Rejected as MutableMessageType<WebSearchRequestResponse_Rejected>).typeName = "agent.v1.WebSearchRequestResponse.Rejected";
(WebSearchRequestResponse_Rejected as MutableMessageType<WebSearchRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { WebSearchArgs, WebSearchResult, WebSearchSuccess, WebSearchError, WebSearchRejected, WebSearchReference, WebSearchToolCall, WebSearchRequestQuery, WebSearchRequestResponse, WebSearchRequestResponse_Approved, WebSearchRequestResponse_Rejected };
