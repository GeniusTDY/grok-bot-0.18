/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34626-34901
 * Region SHA-256: 0d21f972ab717044e073a0a1ae632d7cd3f765e1361de84f7fc696bbbd63366b
 * Atomic B1 exports: 9 messages + 0 enums = 9
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GenerateImageArgs$Runtime = (() => class _GenerateImageArgs extends Message<_GenerateImageArgs> {
  declare description: string;
  declare filePath?: string;
  declare referenceImagePaths: string[];
  declare aspectRatio?: string;
  constructor(data?: PartialMessage<_GenerateImageArgs>) {
    super();
    this.description = "";
    this.referenceImagePaths = [];
    proto3.util.initPartial(data, this as _GenerateImageArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageArgs {
    return new _GenerateImageArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageArgs {
    return new _GenerateImageArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageArgs {
    return new _GenerateImageArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageArgs | PlainMessage<_GenerateImageArgs> | undefined | null, b2: _GenerateImageArgs | PlainMessage<_GenerateImageArgs> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageArgs as unknown as MessageType<_GenerateImageArgs>, a, b2);
  }
})();
export type GenerateImageArgs = InstanceType<typeof GenerateImageArgs$Runtime>;
var GenerateImageArgs: MessageType<GenerateImageArgs> = GenerateImageArgs$Runtime as unknown as MessageType<GenerateImageArgs>;
(GenerateImageArgs as MutableMessageType<GenerateImageArgs>).runtime = proto3;
(GenerateImageArgs as MutableMessageType<GenerateImageArgs>).typeName = "agent.v1.GenerateImageArgs";
(GenerateImageArgs as MutableMessageType<GenerateImageArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file_path", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "reference_image_paths", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "aspect_ratio", kind: "scalar", T: 9, opt: true }
]);
var GenerateImageResult$Runtime = (() => class _GenerateImageResult extends Message<_GenerateImageResult> {
  declare result: { case: "success"; value: GenerateImageSuccess } | { case: "error"; value: GenerateImageError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GenerateImageResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GenerateImageResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageResult {
    return new _GenerateImageResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageResult {
    return new _GenerateImageResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageResult {
    return new _GenerateImageResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageResult | PlainMessage<_GenerateImageResult> | undefined | null, b2: _GenerateImageResult | PlainMessage<_GenerateImageResult> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageResult as unknown as MessageType<_GenerateImageResult>, a, b2);
  }
})();
export type GenerateImageResult = InstanceType<typeof GenerateImageResult$Runtime>;
var GenerateImageResult: MessageType<GenerateImageResult> = GenerateImageResult$Runtime as unknown as MessageType<GenerateImageResult>;
(GenerateImageResult as MutableMessageType<GenerateImageResult>).runtime = proto3;
(GenerateImageResult as MutableMessageType<GenerateImageResult>).typeName = "agent.v1.GenerateImageResult";
(GenerateImageResult as MutableMessageType<GenerateImageResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: GenerateImageSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GenerateImageError, oneof: "result" }
]);
var GenerateImageSuccess$Runtime = (() => class _GenerateImageSuccess extends Message<_GenerateImageSuccess> {
  declare filePath: string;
  declare imageData: string;
  constructor(data?: PartialMessage<_GenerateImageSuccess>) {
    super();
    this.filePath = "";
    this.imageData = "";
    proto3.util.initPartial(data, this as _GenerateImageSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageSuccess {
    return new _GenerateImageSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageSuccess {
    return new _GenerateImageSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageSuccess {
    return new _GenerateImageSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageSuccess | PlainMessage<_GenerateImageSuccess> | undefined | null, b2: _GenerateImageSuccess | PlainMessage<_GenerateImageSuccess> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageSuccess as unknown as MessageType<_GenerateImageSuccess>, a, b2);
  }
})();
export type GenerateImageSuccess = InstanceType<typeof GenerateImageSuccess$Runtime>;
var GenerateImageSuccess: MessageType<GenerateImageSuccess> = GenerateImageSuccess$Runtime as unknown as MessageType<GenerateImageSuccess>;
(GenerateImageSuccess as MutableMessageType<GenerateImageSuccess>).runtime = proto3;
(GenerateImageSuccess as MutableMessageType<GenerateImageSuccess>).typeName = "agent.v1.GenerateImageSuccess";
(GenerateImageSuccess as MutableMessageType<GenerateImageSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "image_data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GenerateImageError$Runtime = (() => class _GenerateImageError extends Message<_GenerateImageError> {
  declare error: string;
  constructor(data?: PartialMessage<_GenerateImageError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GenerateImageError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageError {
    return new _GenerateImageError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageError {
    return new _GenerateImageError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageError {
    return new _GenerateImageError().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageError | PlainMessage<_GenerateImageError> | undefined | null, b2: _GenerateImageError | PlainMessage<_GenerateImageError> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageError as unknown as MessageType<_GenerateImageError>, a, b2);
  }
})();
export type GenerateImageError = InstanceType<typeof GenerateImageError$Runtime>;
var GenerateImageError: MessageType<GenerateImageError> = GenerateImageError$Runtime as unknown as MessageType<GenerateImageError>;
(GenerateImageError as MutableMessageType<GenerateImageError>).runtime = proto3;
(GenerateImageError as MutableMessageType<GenerateImageError>).typeName = "agent.v1.GenerateImageError";
(GenerateImageError as MutableMessageType<GenerateImageError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GenerateImageToolCall$Runtime = (() => class _GenerateImageToolCall extends Message<_GenerateImageToolCall> {
  declare args?: GenerateImageArgs;
  declare result?: GenerateImageResult;
  constructor(data?: PartialMessage<_GenerateImageToolCall>) {
    super();
    proto3.util.initPartial(data, this as _GenerateImageToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageToolCall {
    return new _GenerateImageToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageToolCall {
    return new _GenerateImageToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageToolCall {
    return new _GenerateImageToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageToolCall | PlainMessage<_GenerateImageToolCall> | undefined | null, b2: _GenerateImageToolCall | PlainMessage<_GenerateImageToolCall> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageToolCall as unknown as MessageType<_GenerateImageToolCall>, a, b2);
  }
})();
export type GenerateImageToolCall = InstanceType<typeof GenerateImageToolCall$Runtime>;
var GenerateImageToolCall: MessageType<GenerateImageToolCall> = GenerateImageToolCall$Runtime as unknown as MessageType<GenerateImageToolCall>;
(GenerateImageToolCall as MutableMessageType<GenerateImageToolCall>).runtime = proto3;
(GenerateImageToolCall as MutableMessageType<GenerateImageToolCall>).typeName = "agent.v1.GenerateImageToolCall";
(GenerateImageToolCall as MutableMessageType<GenerateImageToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GenerateImageArgs },
  { no: 2, name: "result", kind: "message", T: GenerateImageResult }
]);
var GenerateImageRequestQuery$Runtime = (() => class _GenerateImageRequestQuery extends Message<_GenerateImageRequestQuery> {
  declare args?: GenerateImageArgs;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_GenerateImageRequestQuery>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _GenerateImageRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageRequestQuery {
    return new _GenerateImageRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageRequestQuery {
    return new _GenerateImageRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageRequestQuery {
    return new _GenerateImageRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageRequestQuery | PlainMessage<_GenerateImageRequestQuery> | undefined | null, b2: _GenerateImageRequestQuery | PlainMessage<_GenerateImageRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageRequestQuery as unknown as MessageType<_GenerateImageRequestQuery>, a, b2);
  }
})();
export type GenerateImageRequestQuery = InstanceType<typeof GenerateImageRequestQuery$Runtime>;
var GenerateImageRequestQuery: MessageType<GenerateImageRequestQuery> = GenerateImageRequestQuery$Runtime as unknown as MessageType<GenerateImageRequestQuery>;
(GenerateImageRequestQuery as MutableMessageType<GenerateImageRequestQuery>).runtime = proto3;
(GenerateImageRequestQuery as MutableMessageType<GenerateImageRequestQuery>).typeName = "agent.v1.GenerateImageRequestQuery";
(GenerateImageRequestQuery as MutableMessageType<GenerateImageRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GenerateImageArgs },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GenerateImageRequestResponse$Runtime = (() => class _GenerateImageRequestResponse extends Message<_GenerateImageRequestResponse> {
  declare result: { case: "approved"; value: GenerateImageRequestResponse_Approved } | { case: "rejected"; value: GenerateImageRequestResponse_Rejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GenerateImageRequestResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GenerateImageRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageRequestResponse {
    return new _GenerateImageRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse {
    return new _GenerateImageRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse {
    return new _GenerateImageRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageRequestResponse | PlainMessage<_GenerateImageRequestResponse> | undefined | null, b2: _GenerateImageRequestResponse | PlainMessage<_GenerateImageRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageRequestResponse as unknown as MessageType<_GenerateImageRequestResponse>, a, b2);
  }
})();
export type GenerateImageRequestResponse = InstanceType<typeof GenerateImageRequestResponse$Runtime>;
var GenerateImageRequestResponse: MessageType<GenerateImageRequestResponse> = GenerateImageRequestResponse$Runtime as unknown as MessageType<GenerateImageRequestResponse>;
(GenerateImageRequestResponse as MutableMessageType<GenerateImageRequestResponse>).runtime = proto3;
(GenerateImageRequestResponse as MutableMessageType<GenerateImageRequestResponse>).typeName = "agent.v1.GenerateImageRequestResponse";
(GenerateImageRequestResponse as MutableMessageType<GenerateImageRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "approved", kind: "message", T: GenerateImageRequestResponse_Approved, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: GenerateImageRequestResponse_Rejected, oneof: "result" }
]);
var GenerateImageRequestResponse_Approved$Runtime = (() => class _GenerateImageRequestResponse_Approved extends Message<_GenerateImageRequestResponse_Approved> {
  declare description: string;
  constructor(data?: PartialMessage<_GenerateImageRequestResponse_Approved>) {
    super();
    this.description = "";
    proto3.util.initPartial(data, this as _GenerateImageRequestResponse_Approved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageRequestResponse_Approved {
    return new _GenerateImageRequestResponse_Approved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse_Approved {
    return new _GenerateImageRequestResponse_Approved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse_Approved {
    return new _GenerateImageRequestResponse_Approved().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageRequestResponse_Approved | PlainMessage<_GenerateImageRequestResponse_Approved> | undefined | null, b2: _GenerateImageRequestResponse_Approved | PlainMessage<_GenerateImageRequestResponse_Approved> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageRequestResponse_Approved as unknown as MessageType<_GenerateImageRequestResponse_Approved>, a, b2);
  }
})();
export type GenerateImageRequestResponse_Approved = InstanceType<typeof GenerateImageRequestResponse_Approved$Runtime>;
var GenerateImageRequestResponse_Approved: MessageType<GenerateImageRequestResponse_Approved> = GenerateImageRequestResponse_Approved$Runtime as unknown as MessageType<GenerateImageRequestResponse_Approved>;
(GenerateImageRequestResponse_Approved as MutableMessageType<GenerateImageRequestResponse_Approved>).runtime = proto3;
(GenerateImageRequestResponse_Approved as MutableMessageType<GenerateImageRequestResponse_Approved>).typeName = "agent.v1.GenerateImageRequestResponse.Approved";
(GenerateImageRequestResponse_Approved as MutableMessageType<GenerateImageRequestResponse_Approved>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GenerateImageRequestResponse_Rejected$Runtime = (() => class _GenerateImageRequestResponse_Rejected extends Message<_GenerateImageRequestResponse_Rejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_GenerateImageRequestResponse_Rejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _GenerateImageRequestResponse_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenerateImageRequestResponse_Rejected {
    return new _GenerateImageRequestResponse_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse_Rejected {
    return new _GenerateImageRequestResponse_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenerateImageRequestResponse_Rejected {
    return new _GenerateImageRequestResponse_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _GenerateImageRequestResponse_Rejected | PlainMessage<_GenerateImageRequestResponse_Rejected> | undefined | null, b2: _GenerateImageRequestResponse_Rejected | PlainMessage<_GenerateImageRequestResponse_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_GenerateImageRequestResponse_Rejected as unknown as MessageType<_GenerateImageRequestResponse_Rejected>, a, b2);
  }
})();
export type GenerateImageRequestResponse_Rejected = InstanceType<typeof GenerateImageRequestResponse_Rejected$Runtime>;
var GenerateImageRequestResponse_Rejected: MessageType<GenerateImageRequestResponse_Rejected> = GenerateImageRequestResponse_Rejected$Runtime as unknown as MessageType<GenerateImageRequestResponse_Rejected>;
(GenerateImageRequestResponse_Rejected as MutableMessageType<GenerateImageRequestResponse_Rejected>).runtime = proto3;
(GenerateImageRequestResponse_Rejected as MutableMessageType<GenerateImageRequestResponse_Rejected>).typeName = "agent.v1.GenerateImageRequestResponse.Rejected";
(GenerateImageRequestResponse_Rejected as MutableMessageType<GenerateImageRequestResponse_Rejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { GenerateImageArgs, GenerateImageResult, GenerateImageSuccess, GenerateImageError, GenerateImageToolCall, GenerateImageRequestQuery, GenerateImageRequestResponse, GenerateImageRequestResponse_Approved, GenerateImageRequestResponse_Rejected };
