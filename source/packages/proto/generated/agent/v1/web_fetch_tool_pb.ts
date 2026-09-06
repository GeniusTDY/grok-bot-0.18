/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:35553-35865
 * Region SHA-256: 46a4204afba35b535430e9c9e251f892e44a655b5cbb1e55697a229b9353fe84
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var WebFetchArgs$Runtime = (() => class _WebFetchArgs extends Message<_WebFetchArgs> {
  declare url: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_WebFetchArgs>) {
    super();
    this.url = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _WebFetchArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchArgs {
    return new _WebFetchArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchArgs {
    return new _WebFetchArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchArgs {
    return new _WebFetchArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchArgs | PlainMessage<_WebFetchArgs> | undefined | null, b2: _WebFetchArgs | PlainMessage<_WebFetchArgs> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchArgs as unknown as MessageType<_WebFetchArgs>, a, b2);
  }
})();
export type WebFetchArgs = InstanceType<typeof WebFetchArgs$Runtime>;
var WebFetchArgs: MessageType<WebFetchArgs> = WebFetchArgs$Runtime as unknown as MessageType<WebFetchArgs>;
(WebFetchArgs as MutableMessageType<WebFetchArgs>).runtime = proto3;
(WebFetchArgs as MutableMessageType<WebFetchArgs>).typeName = "agent.v1.WebFetchArgs";
(WebFetchArgs as MutableMessageType<WebFetchArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
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
var WebFetchResult$Runtime = (() => class _WebFetchResult extends Message<_WebFetchResult> {
  declare result: { case: "success"; value: WebFetchSuccess } | { case: "error"; value: WebFetchError } | { case: "rejected"; value: WebFetchRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WebFetchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WebFetchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchResult | PlainMessage<_WebFetchResult> | undefined | null, b2: _WebFetchResult | PlainMessage<_WebFetchResult> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchResult as unknown as MessageType<_WebFetchResult>, a, b2);
  }
})();
export type WebFetchResult = InstanceType<typeof WebFetchResult$Runtime>;
var WebFetchResult: MessageType<WebFetchResult> = WebFetchResult$Runtime as unknown as MessageType<WebFetchResult>;
(WebFetchResult as MutableMessageType<WebFetchResult>).runtime = proto3;
(WebFetchResult as MutableMessageType<WebFetchResult>).typeName = "agent.v1.WebFetchResult";
(WebFetchResult as MutableMessageType<WebFetchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: WebFetchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: WebFetchError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: WebFetchRejected, oneof: "result" }
]);
var WebFetchSuccess$Runtime = (() => class _WebFetchSuccess extends Message<_WebFetchSuccess> {
  declare url: string;
  declare markdown: string;
  declare outputLocation?: OutputLocation;
  constructor(data?: PartialMessage<_WebFetchSuccess>) {
    super();
    this.url = "";
    this.markdown = "";
    proto3.util.initPartial(data, this as _WebFetchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchSuccess {
    return new _WebFetchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchSuccess {
    return new _WebFetchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchSuccess {
    return new _WebFetchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchSuccess | PlainMessage<_WebFetchSuccess> | undefined | null, b2: _WebFetchSuccess | PlainMessage<_WebFetchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchSuccess as unknown as MessageType<_WebFetchSuccess>, a, b2);
  }
})();
export type WebFetchSuccess = InstanceType<typeof WebFetchSuccess$Runtime>;
var WebFetchSuccess: MessageType<WebFetchSuccess> = WebFetchSuccess$Runtime as unknown as MessageType<WebFetchSuccess>;
(WebFetchSuccess as MutableMessageType<WebFetchSuccess>).runtime = proto3;
(WebFetchSuccess as MutableMessageType<WebFetchSuccess>).typeName = "agent.v1.WebFetchSuccess";
(WebFetchSuccess as MutableMessageType<WebFetchSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "markdown",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "output_location", kind: "message", T: OutputLocation, opt: true }
]);
var WebFetchError$Runtime = (() => class _WebFetchError extends Message<_WebFetchError> {
  declare url: string;
  declare error: string;
  constructor(data?: PartialMessage<_WebFetchError>) {
    super();
    this.url = "";
    this.error = "";
    proto3.util.initPartial(data, this as _WebFetchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchError {
    return new _WebFetchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchError {
    return new _WebFetchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchError {
    return new _WebFetchError().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchError | PlainMessage<_WebFetchError> | undefined | null, b2: _WebFetchError | PlainMessage<_WebFetchError> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchError as unknown as MessageType<_WebFetchError>, a, b2);
  }
})();
export type WebFetchError = InstanceType<typeof WebFetchError$Runtime>;
var WebFetchError: MessageType<WebFetchError> = WebFetchError$Runtime as unknown as MessageType<WebFetchError>;
(WebFetchError as MutableMessageType<WebFetchError>).runtime = proto3;
(WebFetchError as MutableMessageType<WebFetchError>).typeName = "agent.v1.WebFetchError";
(WebFetchError as MutableMessageType<WebFetchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebFetchRejected$Runtime = (() => class _WebFetchRejected extends Message<_WebFetchRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_WebFetchRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _WebFetchRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchRejected {
    return new _WebFetchRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchRejected {
    return new _WebFetchRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchRejected {
    return new _WebFetchRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchRejected | PlainMessage<_WebFetchRejected> | undefined | null, b2: _WebFetchRejected | PlainMessage<_WebFetchRejected> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchRejected as unknown as MessageType<_WebFetchRejected>, a, b2);
  }
})();
export type WebFetchRejected = InstanceType<typeof WebFetchRejected$Runtime>;
var WebFetchRejected: MessageType<WebFetchRejected> = WebFetchRejected$Runtime as unknown as MessageType<WebFetchRejected>;
(WebFetchRejected as MutableMessageType<WebFetchRejected>).runtime = proto3;
(WebFetchRejected as MutableMessageType<WebFetchRejected>).typeName = "agent.v1.WebFetchRejected";
(WebFetchRejected as MutableMessageType<WebFetchRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebFetchToolCall$Runtime = (() => class _WebFetchToolCall extends Message<_WebFetchToolCall> {
  declare args?: WebFetchArgs;
  declare result?: WebFetchResult;
  constructor(data?: PartialMessage<_WebFetchToolCall>) {
    super();
    proto3.util.initPartial(data, this as _WebFetchToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchToolCall {
    return new _WebFetchToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchToolCall {
    return new _WebFetchToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchToolCall {
    return new _WebFetchToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchToolCall | PlainMessage<_WebFetchToolCall> | undefined | null, b2: _WebFetchToolCall | PlainMessage<_WebFetchToolCall> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchToolCall as unknown as MessageType<_WebFetchToolCall>, a, b2);
  }
})();
export type WebFetchToolCall = InstanceType<typeof WebFetchToolCall$Runtime>;
var WebFetchToolCall: MessageType<WebFetchToolCall> = WebFetchToolCall$Runtime as unknown as MessageType<WebFetchToolCall>;
(WebFetchToolCall as MutableMessageType<WebFetchToolCall>).runtime = proto3;
(WebFetchToolCall as MutableMessageType<WebFetchToolCall>).typeName = "agent.v1.WebFetchToolCall";
(WebFetchToolCall as MutableMessageType<WebFetchToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: WebFetchArgs },
  { no: 2, name: "result", kind: "message", T: WebFetchResult }
]);
var WebFetchRequestQuery$Runtime = (() => class _WebFetchRequestQuery extends Message<_WebFetchRequestQuery> {
  declare args?: WebFetchArgs;
  declare skipApproval: boolean;
  declare smartModeApproval?: SmartModeApproval;
  constructor(data?: PartialMessage<_WebFetchRequestQuery>) {
    super();
    this.skipApproval = false;
    proto3.util.initPartial(data, this as _WebFetchRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchRequestQuery {
    return new _WebFetchRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchRequestQuery {
    return new _WebFetchRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchRequestQuery {
    return new _WebFetchRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchRequestQuery | PlainMessage<_WebFetchRequestQuery> | undefined | null, b2: _WebFetchRequestQuery | PlainMessage<_WebFetchRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchRequestQuery as unknown as MessageType<_WebFetchRequestQuery>, a, b2);
  }
})();
export type WebFetchRequestQuery = InstanceType<typeof WebFetchRequestQuery$Runtime>;
var WebFetchRequestQuery: MessageType<WebFetchRequestQuery> = WebFetchRequestQuery$Runtime as unknown as MessageType<WebFetchRequestQuery>;
(WebFetchRequestQuery as MutableMessageType<WebFetchRequestQuery>).runtime = proto3;
(WebFetchRequestQuery as MutableMessageType<WebFetchRequestQuery>).typeName = "agent.v1.WebFetchRequestQuery";
(WebFetchRequestQuery as MutableMessageType<WebFetchRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: WebFetchArgs },
  {
    no: 2,
    name: "skip_approval",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "smart_mode_approval", kind: "message", T: SmartModeApproval }
]);
var WebFetchRequestResponse$Runtime = (() => class _WebFetchRequestResponse extends Message<_WebFetchRequestResponse> {
  declare result: { case: "approved"; value: WebFetchRequestResponse_Approved } | { case: "rejected"; value: WebFetchRequestResponse_Rejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WebFetchRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WebFetchRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchRequestResponse {
    return new _WebFetchRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse {
    return new _WebFetchRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse {
    return new _WebFetchRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchRequestResponse | PlainMessage<_WebFetchRequestResponse> | undefined | null, b2: _WebFetchRequestResponse | PlainMessage<_WebFetchRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchRequestResponse as unknown as MessageType<_WebFetchRequestResponse>, a, b2);
  }
})();
export type WebFetchRequestResponse = InstanceType<typeof WebFetchRequestResponse$Runtime>;
var WebFetchRequestResponse: MessageType<WebFetchRequestResponse> = WebFetchRequestResponse$Runtime as unknown as MessageType<WebFetchRequestResponse>;
(WebFetchRequestResponse as MutableMessageType<WebFetchRequestResponse>).runtime = proto3;
(WebFetchRequestResponse as MutableMessageType<WebFetchRequestResponse>).typeName = "agent.v1.WebFetchRequestResponse";
(WebFetchRequestResponse as MutableMessageType<WebFetchRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: WebFetchRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: WebFetchRequestResponse_Rejected, oneof: "result" }
]);
var WebFetchRequestResponse_Approved$Runtime = (() => class _WebFetchRequestResponse_Approved extends Message<_WebFetchRequestResponse_Approved> {
  constructor(data?: PartialMessage<_WebFetchRequestResponse_Approved>) {
    super();
    proto3.util.initPartial(data, this as _WebFetchRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchRequestResponse_Approved {
    return new _WebFetchRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse_Approved {
    return new _WebFetchRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse_Approved {
    return new _WebFetchRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchRequestResponse_Approved | PlainMessage<_WebFetchRequestResponse_Approved> | undefined | null, b2: _WebFetchRequestResponse_Approved | PlainMessage<_WebFetchRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchRequestResponse_Approved as unknown as MessageType<_WebFetchRequestResponse_Approved>, a, b2);
  }
})();
export type WebFetchRequestResponse_Approved = InstanceType<typeof WebFetchRequestResponse_Approved$Runtime>;
var WebFetchRequestResponse_Approved: MessageType<WebFetchRequestResponse_Approved> = WebFetchRequestResponse_Approved$Runtime as unknown as MessageType<WebFetchRequestResponse_Approved>;
(WebFetchRequestResponse_Approved as MutableMessageType<WebFetchRequestResponse_Approved>).runtime = proto3;
(WebFetchRequestResponse_Approved as MutableMessageType<WebFetchRequestResponse_Approved>).typeName = "agent.v1.WebFetchRequestResponse.Approved";
(WebFetchRequestResponse_Approved as MutableMessageType<WebFetchRequestResponse_Approved>).fields = proto3.util.newFieldList(() => []);
var WebFetchRequestResponse_Rejected$Runtime = (() => class _WebFetchRequestResponse_Rejected extends Message<_WebFetchRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_WebFetchRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _WebFetchRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchRequestResponse_Rejected {
    return new _WebFetchRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse_Rejected {
    return new _WebFetchRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchRequestResponse_Rejected {
    return new _WebFetchRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchRequestResponse_Rejected | PlainMessage<_WebFetchRequestResponse_Rejected> | undefined | null, b2: _WebFetchRequestResponse_Rejected | PlainMessage<_WebFetchRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchRequestResponse_Rejected as unknown as MessageType<_WebFetchRequestResponse_Rejected>, a, b2);
  }
})();
export type WebFetchRequestResponse_Rejected = InstanceType<typeof WebFetchRequestResponse_Rejected$Runtime>;
var WebFetchRequestResponse_Rejected: MessageType<WebFetchRequestResponse_Rejected> = WebFetchRequestResponse_Rejected$Runtime as unknown as MessageType<WebFetchRequestResponse_Rejected>;
(WebFetchRequestResponse_Rejected as MutableMessageType<WebFetchRequestResponse_Rejected>).runtime = proto3;
(WebFetchRequestResponse_Rejected as MutableMessageType<WebFetchRequestResponse_Rejected>).typeName = "agent.v1.WebFetchRequestResponse.Rejected";
(WebFetchRequestResponse_Rejected as MutableMessageType<WebFetchRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { WebFetchArgs, WebFetchResult, WebFetchSuccess, WebFetchError, WebFetchRejected, WebFetchToolCall, WebFetchRequestQuery, WebFetchRequestResponse, WebFetchRequestResponse_Approved, WebFetchRequestResponse_Rejected };
