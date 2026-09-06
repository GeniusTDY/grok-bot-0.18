/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:40846-41209
 * Region SHA-256: 3e95eb5c7eb2e8bbe363dd3b314907ca50536ebaab2cf959c7893723a4d1e9d1
 * Atomic B1 exports: 13 messages + 0 enums = 13
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ConnectScmArgs$Runtime = (() => class _ConnectScmArgs extends Message<_ConnectScmArgs> {
  declare toolCallId: string;
  declare target: { case: "github"; value: ConnectScmGithub } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConnectScmArgs>) {
    super();
    this.toolCallId = "";
    this.target = { case: void 0 };
    proto3.util.initPartial(data, this as _ConnectScmArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmArgs {
    return new _ConnectScmArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmArgs {
    return new _ConnectScmArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmArgs {
    return new _ConnectScmArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmArgs | PlainMessage<_ConnectScmArgs> | undefined | null, b2: _ConnectScmArgs | PlainMessage<_ConnectScmArgs> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmArgs as unknown as MessageType<_ConnectScmArgs>, a, b2);
  }
})();
export type ConnectScmArgs = InstanceType<typeof ConnectScmArgs$Runtime>;
var ConnectScmArgs: MessageType<ConnectScmArgs> = ConnectScmArgs$Runtime as unknown as MessageType<ConnectScmArgs>;
(ConnectScmArgs as MutableMessageType<ConnectScmArgs>).runtime = proto3;
(ConnectScmArgs as MutableMessageType<ConnectScmArgs>).typeName = "agent.v1.ConnectScmArgs";
(ConnectScmArgs as MutableMessageType<ConnectScmArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "github", kind: "message", T: ConnectScmGithub, oneof: "target" }
]);
var ConnectScmGithub$Runtime = (() => class _ConnectScmGithub extends Message<_ConnectScmGithub> {
  declare repository?: ConnectScmGithubRepository;
  declare gheApplication?: string;
  constructor(data?: PartialMessage<_ConnectScmGithub>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmGithub);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmGithub | PlainMessage<_ConnectScmGithub> | undefined | null, b2: _ConnectScmGithub | PlainMessage<_ConnectScmGithub> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmGithub as unknown as MessageType<_ConnectScmGithub>, a, b2);
  }
})();
export type ConnectScmGithub = InstanceType<typeof ConnectScmGithub$Runtime>;
var ConnectScmGithub: MessageType<ConnectScmGithub> = ConnectScmGithub$Runtime as unknown as MessageType<ConnectScmGithub>;
(ConnectScmGithub as MutableMessageType<ConnectScmGithub>).runtime = proto3;
(ConnectScmGithub as MutableMessageType<ConnectScmGithub>).typeName = "agent.v1.ConnectScmGithub";
(ConnectScmGithub as MutableMessageType<ConnectScmGithub>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: ConnectScmGithubRepository },
  { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }
]);
var ConnectScmGithubRepository$Runtime = (() => class _ConnectScmGithubRepository extends Message<_ConnectScmGithubRepository> {
  declare owner: string;
  declare repo: string;
  constructor(data?: PartialMessage<_ConnectScmGithubRepository>) {
    super();
    this.owner = "";
    this.repo = "";
    proto3.util.initPartial(data, this as _ConnectScmGithubRepository);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmGithubRepository | PlainMessage<_ConnectScmGithubRepository> | undefined | null, b2: _ConnectScmGithubRepository | PlainMessage<_ConnectScmGithubRepository> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmGithubRepository as unknown as MessageType<_ConnectScmGithubRepository>, a, b2);
  }
})();
export type ConnectScmGithubRepository = InstanceType<typeof ConnectScmGithubRepository$Runtime>;
var ConnectScmGithubRepository: MessageType<ConnectScmGithubRepository> = ConnectScmGithubRepository$Runtime as unknown as MessageType<ConnectScmGithubRepository>;
(ConnectScmGithubRepository as MutableMessageType<ConnectScmGithubRepository>).runtime = proto3;
(ConnectScmGithubRepository as MutableMessageType<ConnectScmGithubRepository>).typeName = "agent.v1.ConnectScmGithubRepository";
(ConnectScmGithubRepository as MutableMessageType<ConnectScmGithubRepository>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmResult$Runtime = (() => class _ConnectScmResult extends Message<_ConnectScmResult> {
  declare result: { case: "success"; value: ConnectScmSuccess } | { case: "error"; value: ConnectScmError } | { case: "rejected"; value: ConnectScmRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConnectScmResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ConnectScmResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmResult | PlainMessage<_ConnectScmResult> | undefined | null, b2: _ConnectScmResult | PlainMessage<_ConnectScmResult> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmResult as unknown as MessageType<_ConnectScmResult>, a, b2);
  }
})();
export type ConnectScmResult = InstanceType<typeof ConnectScmResult$Runtime>;
var ConnectScmResult: MessageType<ConnectScmResult> = ConnectScmResult$Runtime as unknown as MessageType<ConnectScmResult>;
(ConnectScmResult as MutableMessageType<ConnectScmResult>).runtime = proto3;
(ConnectScmResult as MutableMessageType<ConnectScmResult>).typeName = "agent.v1.ConnectScmResult";
(ConnectScmResult as MutableMessageType<ConnectScmResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ConnectScmSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ConnectScmError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: ConnectScmRejected, oneof: "result" }
]);
var ConnectScmSuccess$Runtime = (() => class _ConnectScmSuccess extends Message<_ConnectScmSuccess> {
  constructor(data?: PartialMessage<_ConnectScmSuccess>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmSuccess {
    return new _ConnectScmSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmSuccess {
    return new _ConnectScmSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmSuccess {
    return new _ConnectScmSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmSuccess | PlainMessage<_ConnectScmSuccess> | undefined | null, b2: _ConnectScmSuccess | PlainMessage<_ConnectScmSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmSuccess as unknown as MessageType<_ConnectScmSuccess>, a, b2);
  }
})();
export type ConnectScmSuccess = InstanceType<typeof ConnectScmSuccess$Runtime>;
var ConnectScmSuccess: MessageType<ConnectScmSuccess> = ConnectScmSuccess$Runtime as unknown as MessageType<ConnectScmSuccess>;
(ConnectScmSuccess as MutableMessageType<ConnectScmSuccess>).runtime = proto3;
(ConnectScmSuccess as MutableMessageType<ConnectScmSuccess>).typeName = "agent.v1.ConnectScmSuccess";
(ConnectScmSuccess as MutableMessageType<ConnectScmSuccess>).fields = proto3.util.newFieldList(() => []);
var ConnectScmError$Runtime = (() => class _ConnectScmError extends Message<_ConnectScmError> {
  declare error: string;
  constructor(data?: PartialMessage<_ConnectScmError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ConnectScmError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmError {
    return new _ConnectScmError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmError {
    return new _ConnectScmError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmError {
    return new _ConnectScmError().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmError | PlainMessage<_ConnectScmError> | undefined | null, b2: _ConnectScmError | PlainMessage<_ConnectScmError> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmError as unknown as MessageType<_ConnectScmError>, a, b2);
  }
})();
export type ConnectScmError = InstanceType<typeof ConnectScmError$Runtime>;
var ConnectScmError: MessageType<ConnectScmError> = ConnectScmError$Runtime as unknown as MessageType<ConnectScmError>;
(ConnectScmError as MutableMessageType<ConnectScmError>).runtime = proto3;
(ConnectScmError as MutableMessageType<ConnectScmError>).typeName = "agent.v1.ConnectScmError";
(ConnectScmError as MutableMessageType<ConnectScmError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmRejected$Runtime = (() => class _ConnectScmRejected extends Message<_ConnectScmRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_ConnectScmRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _ConnectScmRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRejected {
    return new _ConnectScmRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRejected {
    return new _ConnectScmRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRejected {
    return new _ConnectScmRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRejected | PlainMessage<_ConnectScmRejected> | undefined | null, b2: _ConnectScmRejected | PlainMessage<_ConnectScmRejected> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRejected as unknown as MessageType<_ConnectScmRejected>, a, b2);
  }
})();
export type ConnectScmRejected = InstanceType<typeof ConnectScmRejected$Runtime>;
var ConnectScmRejected: MessageType<ConnectScmRejected> = ConnectScmRejected$Runtime as unknown as MessageType<ConnectScmRejected>;
(ConnectScmRejected as MutableMessageType<ConnectScmRejected>).runtime = proto3;
(ConnectScmRejected as MutableMessageType<ConnectScmRejected>).typeName = "agent.v1.ConnectScmRejected";
(ConnectScmRejected as MutableMessageType<ConnectScmRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmToolCall$Runtime = (() => class _ConnectScmToolCall extends Message<_ConnectScmToolCall> {
  declare args?: ConnectScmArgs;
  declare result?: ConnectScmResult;
  constructor(data?: PartialMessage<_ConnectScmToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmToolCall {
    return new _ConnectScmToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmToolCall {
    return new _ConnectScmToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmToolCall {
    return new _ConnectScmToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmToolCall | PlainMessage<_ConnectScmToolCall> | undefined | null, b2: _ConnectScmToolCall | PlainMessage<_ConnectScmToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmToolCall as unknown as MessageType<_ConnectScmToolCall>, a, b2);
  }
})();
export type ConnectScmToolCall = InstanceType<typeof ConnectScmToolCall$Runtime>;
var ConnectScmToolCall: MessageType<ConnectScmToolCall> = ConnectScmToolCall$Runtime as unknown as MessageType<ConnectScmToolCall>;
(ConnectScmToolCall as MutableMessageType<ConnectScmToolCall>).runtime = proto3;
(ConnectScmToolCall as MutableMessageType<ConnectScmToolCall>).typeName = "agent.v1.ConnectScmToolCall";
(ConnectScmToolCall as MutableMessageType<ConnectScmToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ConnectScmArgs },
  { no: 2, name: "result", kind: "message", T: ConnectScmResult }
]);
var ConnectScmRequestQuery$Runtime = (() => class _ConnectScmRequestQuery extends Message<_ConnectScmRequestQuery> {
  declare args?: ConnectScmArgs;
  constructor(data?: PartialMessage<_ConnectScmRequestQuery>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRequestQuery {
    return new _ConnectScmRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRequestQuery {
    return new _ConnectScmRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRequestQuery {
    return new _ConnectScmRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRequestQuery | PlainMessage<_ConnectScmRequestQuery> | undefined | null, b2: _ConnectScmRequestQuery | PlainMessage<_ConnectScmRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRequestQuery as unknown as MessageType<_ConnectScmRequestQuery>, a, b2);
  }
})();
export type ConnectScmRequestQuery = InstanceType<typeof ConnectScmRequestQuery$Runtime>;
var ConnectScmRequestQuery: MessageType<ConnectScmRequestQuery> = ConnectScmRequestQuery$Runtime as unknown as MessageType<ConnectScmRequestQuery>;
(ConnectScmRequestQuery as MutableMessageType<ConnectScmRequestQuery>).runtime = proto3;
(ConnectScmRequestQuery as MutableMessageType<ConnectScmRequestQuery>).typeName = "agent.v1.ConnectScmRequestQuery";
(ConnectScmRequestQuery as MutableMessageType<ConnectScmRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ConnectScmArgs }
]);
var ConnectScmRequestResponse$Runtime = (() => class _ConnectScmRequestResponse extends Message<_ConnectScmRequestResponse> {
  declare result: { case: "approved"; value: ConnectScmRequestResponse_Approved } | { case: "rejected"; value: ConnectScmRequestResponse_Rejected } | { case: "failed"; value: ConnectScmRequestResponse_Failed } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConnectScmRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ConnectScmRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRequestResponse {
    return new _ConnectScmRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse {
    return new _ConnectScmRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse {
    return new _ConnectScmRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRequestResponse | PlainMessage<_ConnectScmRequestResponse> | undefined | null, b2: _ConnectScmRequestResponse | PlainMessage<_ConnectScmRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRequestResponse as unknown as MessageType<_ConnectScmRequestResponse>, a, b2);
  }
})();
export type ConnectScmRequestResponse = InstanceType<typeof ConnectScmRequestResponse$Runtime>;
var ConnectScmRequestResponse: MessageType<ConnectScmRequestResponse> = ConnectScmRequestResponse$Runtime as unknown as MessageType<ConnectScmRequestResponse>;
(ConnectScmRequestResponse as MutableMessageType<ConnectScmRequestResponse>).runtime = proto3;
(ConnectScmRequestResponse as MutableMessageType<ConnectScmRequestResponse>).typeName = "agent.v1.ConnectScmRequestResponse";
(ConnectScmRequestResponse as MutableMessageType<ConnectScmRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: ConnectScmRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: ConnectScmRequestResponse_Rejected, oneof: "result" },
  { no: 3, name: "failed", kind: "message", T: ConnectScmRequestResponse_Failed, oneof: "result" }
]);
var ConnectScmRequestResponse_Approved$Runtime = (() => class _ConnectScmRequestResponse_Approved extends Message<_ConnectScmRequestResponse_Approved> {
  constructor(data?: PartialMessage<_ConnectScmRequestResponse_Approved>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRequestResponse_Approved {
    return new _ConnectScmRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Approved {
    return new _ConnectScmRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Approved {
    return new _ConnectScmRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRequestResponse_Approved | PlainMessage<_ConnectScmRequestResponse_Approved> | undefined | null, b2: _ConnectScmRequestResponse_Approved | PlainMessage<_ConnectScmRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRequestResponse_Approved as unknown as MessageType<_ConnectScmRequestResponse_Approved>, a, b2);
  }
})();
export type ConnectScmRequestResponse_Approved = InstanceType<typeof ConnectScmRequestResponse_Approved$Runtime>;
var ConnectScmRequestResponse_Approved: MessageType<ConnectScmRequestResponse_Approved> = ConnectScmRequestResponse_Approved$Runtime as unknown as MessageType<ConnectScmRequestResponse_Approved>;
(ConnectScmRequestResponse_Approved as MutableMessageType<ConnectScmRequestResponse_Approved>).runtime = proto3;
(ConnectScmRequestResponse_Approved as MutableMessageType<ConnectScmRequestResponse_Approved>).typeName = "agent.v1.ConnectScmRequestResponse.Approved";
(ConnectScmRequestResponse_Approved as MutableMessageType<ConnectScmRequestResponse_Approved>).fields = proto3.util.newFieldList(() => []);
var ConnectScmRequestResponse_Rejected$Runtime = (() => class _ConnectScmRequestResponse_Rejected extends Message<_ConnectScmRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_ConnectScmRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _ConnectScmRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRequestResponse_Rejected {
    return new _ConnectScmRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Rejected {
    return new _ConnectScmRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Rejected {
    return new _ConnectScmRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRequestResponse_Rejected | PlainMessage<_ConnectScmRequestResponse_Rejected> | undefined | null, b2: _ConnectScmRequestResponse_Rejected | PlainMessage<_ConnectScmRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRequestResponse_Rejected as unknown as MessageType<_ConnectScmRequestResponse_Rejected>, a, b2);
  }
})();
export type ConnectScmRequestResponse_Rejected = InstanceType<typeof ConnectScmRequestResponse_Rejected$Runtime>;
var ConnectScmRequestResponse_Rejected: MessageType<ConnectScmRequestResponse_Rejected> = ConnectScmRequestResponse_Rejected$Runtime as unknown as MessageType<ConnectScmRequestResponse_Rejected>;
(ConnectScmRequestResponse_Rejected as MutableMessageType<ConnectScmRequestResponse_Rejected>).runtime = proto3;
(ConnectScmRequestResponse_Rejected as MutableMessageType<ConnectScmRequestResponse_Rejected>).typeName = "agent.v1.ConnectScmRequestResponse.Rejected";
(ConnectScmRequestResponse_Rejected as MutableMessageType<ConnectScmRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmRequestResponse_Failed$Runtime = (() => class _ConnectScmRequestResponse_Failed extends Message<_ConnectScmRequestResponse_Failed> {
  declare error: string;
  constructor(data?: PartialMessage<_ConnectScmRequestResponse_Failed>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ConnectScmRequestResponse_Failed);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmRequestResponse_Failed {
    return new _ConnectScmRequestResponse_Failed().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Failed {
    return new _ConnectScmRequestResponse_Failed().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmRequestResponse_Failed {
    return new _ConnectScmRequestResponse_Failed().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmRequestResponse_Failed | PlainMessage<_ConnectScmRequestResponse_Failed> | undefined | null, b2: _ConnectScmRequestResponse_Failed | PlainMessage<_ConnectScmRequestResponse_Failed> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmRequestResponse_Failed as unknown as MessageType<_ConnectScmRequestResponse_Failed>, a, b2);
  }
})();
export type ConnectScmRequestResponse_Failed = InstanceType<typeof ConnectScmRequestResponse_Failed$Runtime>;
var ConnectScmRequestResponse_Failed: MessageType<ConnectScmRequestResponse_Failed> = ConnectScmRequestResponse_Failed$Runtime as unknown as MessageType<ConnectScmRequestResponse_Failed>;
(ConnectScmRequestResponse_Failed as MutableMessageType<ConnectScmRequestResponse_Failed>).runtime = proto3;
(ConnectScmRequestResponse_Failed as MutableMessageType<ConnectScmRequestResponse_Failed>).typeName = "agent.v1.ConnectScmRequestResponse.Failed";
(ConnectScmRequestResponse_Failed as MutableMessageType<ConnectScmRequestResponse_Failed>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ConnectScmArgs, ConnectScmGithub, ConnectScmGithubRepository, ConnectScmResult, ConnectScmSuccess, ConnectScmError, ConnectScmRejected, ConnectScmToolCall, ConnectScmRequestQuery, ConnectScmRequestResponse, ConnectScmRequestResponse_Approved, ConnectScmRequestResponse_Rejected, ConnectScmRequestResponse_Failed };
