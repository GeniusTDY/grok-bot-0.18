/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:27149-28667
 * Region SHA-256: dcfc5c59a5350e1269fe46bcfc32fec87a4e10f31cd5e001a5c9374424b95ec5
 * Atomic B1 exports: 43 messages + 1 enums = 44
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { SimpleRange } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type CodeSymbolWithAction_CodeSymbolAction = 0 | 1 | 2 | 3;
var CodeSymbolWithAction_CodeSymbolAction: {
  "UNSPECIFIED": 0;
  "GO_TO_DEFINITION": 1;
  "GO_TO_IMPLEMENTATION": 2;
  "REFERENCES": 3;
  0: "UNSPECIFIED";
  1: "GO_TO_DEFINITION";
  2: "GO_TO_IMPLEMENTATION";
  3: "REFERENCES";
};
var CreateExperimentalIndexRequest$Runtime = (() => class _CreateExperimentalIndexRequest extends Message<_CreateExperimentalIndexRequest> {
  declare files: string[];
  declare targetDir: string;
  declare repo: string;
  constructor(data?: PartialMessage<_CreateExperimentalIndexRequest>) {
    super();
    this.files = [];
    this.targetDir = "";
    this.repo = "";
    proto3.util.initPartial(data, this as _CreateExperimentalIndexRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateExperimentalIndexRequest {
    return new _CreateExperimentalIndexRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateExperimentalIndexRequest {
    return new _CreateExperimentalIndexRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateExperimentalIndexRequest {
    return new _CreateExperimentalIndexRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateExperimentalIndexRequest | PlainMessage<_CreateExperimentalIndexRequest> | undefined | null, b2: _CreateExperimentalIndexRequest | PlainMessage<_CreateExperimentalIndexRequest> | undefined | null): boolean {
    return proto3.util.equals(_CreateExperimentalIndexRequest as unknown as MessageType<_CreateExperimentalIndexRequest>, a, b2);
  }
})();
export type CreateExperimentalIndexRequest = InstanceType<typeof CreateExperimentalIndexRequest$Runtime>;
var CreateExperimentalIndexRequest: MessageType<CreateExperimentalIndexRequest> = CreateExperimentalIndexRequest$Runtime as unknown as MessageType<CreateExperimentalIndexRequest>;
(CreateExperimentalIndexRequest as MutableMessageType<CreateExperimentalIndexRequest>).runtime = proto3;
(CreateExperimentalIndexRequest as MutableMessageType<CreateExperimentalIndexRequest>).typeName = "aiserver.v1.CreateExperimentalIndexRequest";
(CreateExperimentalIndexRequest as MutableMessageType<CreateExperimentalIndexRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "target_dir",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateExperimentalIndexResponse$Runtime = (() => class _CreateExperimentalIndexResponse extends Message<_CreateExperimentalIndexResponse> {
  declare indexId: string;
  constructor(data?: PartialMessage<_CreateExperimentalIndexResponse>) {
    super();
    this.indexId = "";
    proto3.util.initPartial(data, this as _CreateExperimentalIndexResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateExperimentalIndexResponse {
    return new _CreateExperimentalIndexResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateExperimentalIndexResponse {
    return new _CreateExperimentalIndexResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateExperimentalIndexResponse {
    return new _CreateExperimentalIndexResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateExperimentalIndexResponse | PlainMessage<_CreateExperimentalIndexResponse> | undefined | null, b2: _CreateExperimentalIndexResponse | PlainMessage<_CreateExperimentalIndexResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreateExperimentalIndexResponse as unknown as MessageType<_CreateExperimentalIndexResponse>, a, b2);
  }
})();
export type CreateExperimentalIndexResponse = InstanceType<typeof CreateExperimentalIndexResponse$Runtime>;
var CreateExperimentalIndexResponse: MessageType<CreateExperimentalIndexResponse> = CreateExperimentalIndexResponse$Runtime as unknown as MessageType<CreateExperimentalIndexResponse>;
(CreateExperimentalIndexResponse as MutableMessageType<CreateExperimentalIndexResponse>).runtime = proto3;
(CreateExperimentalIndexResponse as MutableMessageType<CreateExperimentalIndexResponse>).typeName = "aiserver.v1.CreateExperimentalIndexResponse";
(CreateExperimentalIndexResponse as MutableMessageType<CreateExperimentalIndexResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListExperimentalIndexFilesRequest$Runtime = (() => class _ListExperimentalIndexFilesRequest extends Message<_ListExperimentalIndexFilesRequest> {
  declare indexId: string;
  constructor(data?: PartialMessage<_ListExperimentalIndexFilesRequest>) {
    super();
    this.indexId = "";
    proto3.util.initPartial(data, this as _ListExperimentalIndexFilesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListExperimentalIndexFilesRequest {
    return new _ListExperimentalIndexFilesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListExperimentalIndexFilesRequest {
    return new _ListExperimentalIndexFilesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListExperimentalIndexFilesRequest {
    return new _ListExperimentalIndexFilesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListExperimentalIndexFilesRequest | PlainMessage<_ListExperimentalIndexFilesRequest> | undefined | null, b2: _ListExperimentalIndexFilesRequest | PlainMessage<_ListExperimentalIndexFilesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListExperimentalIndexFilesRequest as unknown as MessageType<_ListExperimentalIndexFilesRequest>, a, b2);
  }
})();
export type ListExperimentalIndexFilesRequest = InstanceType<typeof ListExperimentalIndexFilesRequest$Runtime>;
var ListExperimentalIndexFilesRequest: MessageType<ListExperimentalIndexFilesRequest> = ListExperimentalIndexFilesRequest$Runtime as unknown as MessageType<ListExperimentalIndexFilesRequest>;
(ListExperimentalIndexFilesRequest as MutableMessageType<ListExperimentalIndexFilesRequest>).runtime = proto3;
(ListExperimentalIndexFilesRequest as MutableMessageType<ListExperimentalIndexFilesRequest>).typeName = "aiserver.v1.ListExperimentalIndexFilesRequest";
(ListExperimentalIndexFilesRequest as MutableMessageType<ListExperimentalIndexFilesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListExperimentalIndexFilesResponse$Runtime = (() => class _ListExperimentalIndexFilesResponse extends Message<_ListExperimentalIndexFilesResponse> {
  declare indexId: string;
  declare files: IndexFileData[];
  constructor(data?: PartialMessage<_ListExperimentalIndexFilesResponse>) {
    super();
    this.indexId = "";
    this.files = [];
    proto3.util.initPartial(data, this as _ListExperimentalIndexFilesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListExperimentalIndexFilesResponse {
    return new _ListExperimentalIndexFilesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListExperimentalIndexFilesResponse {
    return new _ListExperimentalIndexFilesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListExperimentalIndexFilesResponse {
    return new _ListExperimentalIndexFilesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListExperimentalIndexFilesResponse | PlainMessage<_ListExperimentalIndexFilesResponse> | undefined | null, b2: _ListExperimentalIndexFilesResponse | PlainMessage<_ListExperimentalIndexFilesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListExperimentalIndexFilesResponse as unknown as MessageType<_ListExperimentalIndexFilesResponse>, a, b2);
  }
})();
export type ListExperimentalIndexFilesResponse = InstanceType<typeof ListExperimentalIndexFilesResponse$Runtime>;
var ListExperimentalIndexFilesResponse: MessageType<ListExperimentalIndexFilesResponse> = ListExperimentalIndexFilesResponse$Runtime as unknown as MessageType<ListExperimentalIndexFilesResponse>;
(ListExperimentalIndexFilesResponse as MutableMessageType<ListExperimentalIndexFilesResponse>).runtime = proto3;
(ListExperimentalIndexFilesResponse as MutableMessageType<ListExperimentalIndexFilesResponse>).typeName = "aiserver.v1.ListExperimentalIndexFilesResponse";
(ListExperimentalIndexFilesResponse as MutableMessageType<ListExperimentalIndexFilesResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "files", kind: "message", T: IndexFileData, repeated: true }
]);
var ListenExperimentalIndexRequest$Runtime = (() => class _ListenExperimentalIndexRequest extends Message<_ListenExperimentalIndexRequest> {
  declare indexId: string;
  constructor(data?: PartialMessage<_ListenExperimentalIndexRequest>) {
    super();
    this.indexId = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexRequest {
    return new _ListenExperimentalIndexRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexRequest {
    return new _ListenExperimentalIndexRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexRequest {
    return new _ListenExperimentalIndexRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexRequest | PlainMessage<_ListenExperimentalIndexRequest> | undefined | null, b2: _ListenExperimentalIndexRequest | PlainMessage<_ListenExperimentalIndexRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexRequest as unknown as MessageType<_ListenExperimentalIndexRequest>, a, b2);
  }
})();
export type ListenExperimentalIndexRequest = InstanceType<typeof ListenExperimentalIndexRequest$Runtime>;
var ListenExperimentalIndexRequest: MessageType<ListenExperimentalIndexRequest> = ListenExperimentalIndexRequest$Runtime as unknown as MessageType<ListenExperimentalIndexRequest>;
(ListenExperimentalIndexRequest as MutableMessageType<ListenExperimentalIndexRequest>).runtime = proto3;
(ListenExperimentalIndexRequest as MutableMessageType<ListenExperimentalIndexRequest>).typeName = "aiserver.v1.ListenExperimentalIndexRequest";
(ListenExperimentalIndexRequest as MutableMessageType<ListenExperimentalIndexRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListenExperimentalIndexResponse$Runtime = (() => class _ListenExperimentalIndexResponse extends Message<_ListenExperimentalIndexResponse> {
  declare indexId: string;
  declare item: { case: "ready"; value: ListenExperimentalIndexResponse_ReadyItem } | { case: "register"; value: ListenExperimentalIndexResponse_RegisterItem } | { case: "choose"; value: ListenExperimentalIndexResponse_ChooseItem } | { case: "summarize"; value: ListenExperimentalIndexResponse_SummarizeItem } | { case: "error"; value: ListenExperimentalIndexResponse_ErrorItem } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse>) {
    super();
    this.indexId = "";
    this.item = { case: void 0 };
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse {
    return new _ListenExperimentalIndexResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse {
    return new _ListenExperimentalIndexResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse {
    return new _ListenExperimentalIndexResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse | PlainMessage<_ListenExperimentalIndexResponse> | undefined | null, b2: _ListenExperimentalIndexResponse | PlainMessage<_ListenExperimentalIndexResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse as unknown as MessageType<_ListenExperimentalIndexResponse>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse = InstanceType<typeof ListenExperimentalIndexResponse$Runtime>;
var ListenExperimentalIndexResponse: MessageType<ListenExperimentalIndexResponse> = ListenExperimentalIndexResponse$Runtime as unknown as MessageType<ListenExperimentalIndexResponse>;
(ListenExperimentalIndexResponse as MutableMessageType<ListenExperimentalIndexResponse>).runtime = proto3;
(ListenExperimentalIndexResponse as MutableMessageType<ListenExperimentalIndexResponse>).typeName = "aiserver.v1.ListenExperimentalIndexResponse";
(ListenExperimentalIndexResponse as MutableMessageType<ListenExperimentalIndexResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "ready", kind: "message", T: ListenExperimentalIndexResponse_ReadyItem, oneof: "item" },
  { no: 3, name: "register", kind: "message", T: ListenExperimentalIndexResponse_RegisterItem, oneof: "item" },
  { no: 4, name: "choose", kind: "message", T: ListenExperimentalIndexResponse_ChooseItem, oneof: "item" },
  { no: 5, name: "summarize", kind: "message", T: ListenExperimentalIndexResponse_SummarizeItem, oneof: "item" },
  { no: 6, name: "error", kind: "message", T: ListenExperimentalIndexResponse_ErrorItem, oneof: "item" }
]);
var ListenExperimentalIndexResponse_ReadyItem$Runtime = (() => class _ListenExperimentalIndexResponse_ReadyItem extends Message<_ListenExperimentalIndexResponse_ReadyItem> {
  declare indexId: string;
  declare request?: ListenExperimentalIndexRequest;
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse_ReadyItem>) {
    super();
    this.indexId = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse_ReadyItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse_ReadyItem {
    return new _ListenExperimentalIndexResponse_ReadyItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ReadyItem {
    return new _ListenExperimentalIndexResponse_ReadyItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ReadyItem {
    return new _ListenExperimentalIndexResponse_ReadyItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse_ReadyItem | PlainMessage<_ListenExperimentalIndexResponse_ReadyItem> | undefined | null, b2: _ListenExperimentalIndexResponse_ReadyItem | PlainMessage<_ListenExperimentalIndexResponse_ReadyItem> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse_ReadyItem as unknown as MessageType<_ListenExperimentalIndexResponse_ReadyItem>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse_ReadyItem = InstanceType<typeof ListenExperimentalIndexResponse_ReadyItem$Runtime>;
var ListenExperimentalIndexResponse_ReadyItem: MessageType<ListenExperimentalIndexResponse_ReadyItem> = ListenExperimentalIndexResponse_ReadyItem$Runtime as unknown as MessageType<ListenExperimentalIndexResponse_ReadyItem>;
(ListenExperimentalIndexResponse_ReadyItem as MutableMessageType<ListenExperimentalIndexResponse_ReadyItem>).runtime = proto3;
(ListenExperimentalIndexResponse_ReadyItem as MutableMessageType<ListenExperimentalIndexResponse_ReadyItem>).typeName = "aiserver.v1.ListenExperimentalIndexResponse.ReadyItem";
(ListenExperimentalIndexResponse_ReadyItem as MutableMessageType<ListenExperimentalIndexResponse_ReadyItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "request", kind: "message", T: ListenExperimentalIndexRequest }
]);
var ListenExperimentalIndexResponse_RegisterItem$Runtime = (() => class _ListenExperimentalIndexResponse_RegisterItem extends Message<_ListenExperimentalIndexResponse_RegisterItem> {
  declare response?: RegisterFileToIndexResponse;
  declare request?: RegisterFileToIndexRequest;
  declare reqUuid: string;
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse_RegisterItem>) {
    super();
    this.reqUuid = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse_RegisterItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse_RegisterItem {
    return new _ListenExperimentalIndexResponse_RegisterItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_RegisterItem {
    return new _ListenExperimentalIndexResponse_RegisterItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_RegisterItem {
    return new _ListenExperimentalIndexResponse_RegisterItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse_RegisterItem | PlainMessage<_ListenExperimentalIndexResponse_RegisterItem> | undefined | null, b2: _ListenExperimentalIndexResponse_RegisterItem | PlainMessage<_ListenExperimentalIndexResponse_RegisterItem> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse_RegisterItem as unknown as MessageType<_ListenExperimentalIndexResponse_RegisterItem>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse_RegisterItem = InstanceType<typeof ListenExperimentalIndexResponse_RegisterItem$Runtime>;
var ListenExperimentalIndexResponse_RegisterItem: MessageType<ListenExperimentalIndexResponse_RegisterItem> = ListenExperimentalIndexResponse_RegisterItem$Runtime as unknown as MessageType<ListenExperimentalIndexResponse_RegisterItem>;
(ListenExperimentalIndexResponse_RegisterItem as MutableMessageType<ListenExperimentalIndexResponse_RegisterItem>).runtime = proto3;
(ListenExperimentalIndexResponse_RegisterItem as MutableMessageType<ListenExperimentalIndexResponse_RegisterItem>).typeName = "aiserver.v1.ListenExperimentalIndexResponse.RegisterItem";
(ListenExperimentalIndexResponse_RegisterItem as MutableMessageType<ListenExperimentalIndexResponse_RegisterItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: RegisterFileToIndexResponse },
  { no: 2, name: "request", kind: "message", T: RegisterFileToIndexRequest },
  {
    no: 3,
    name: "req_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListenExperimentalIndexResponse_ChooseItem$Runtime = (() => class _ListenExperimentalIndexResponse_ChooseItem extends Message<_ListenExperimentalIndexResponse_ChooseItem> {
  declare response?: ChooseCodeReferencesResponse;
  declare request?: ChooseCodeReferencesRequest;
  declare reqUuid: string;
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse_ChooseItem>) {
    super();
    this.reqUuid = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse_ChooseItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse_ChooseItem {
    return new _ListenExperimentalIndexResponse_ChooseItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ChooseItem {
    return new _ListenExperimentalIndexResponse_ChooseItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ChooseItem {
    return new _ListenExperimentalIndexResponse_ChooseItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse_ChooseItem | PlainMessage<_ListenExperimentalIndexResponse_ChooseItem> | undefined | null, b2: _ListenExperimentalIndexResponse_ChooseItem | PlainMessage<_ListenExperimentalIndexResponse_ChooseItem> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse_ChooseItem as unknown as MessageType<_ListenExperimentalIndexResponse_ChooseItem>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse_ChooseItem = InstanceType<typeof ListenExperimentalIndexResponse_ChooseItem$Runtime>;
var ListenExperimentalIndexResponse_ChooseItem: MessageType<ListenExperimentalIndexResponse_ChooseItem> = ListenExperimentalIndexResponse_ChooseItem$Runtime as unknown as MessageType<ListenExperimentalIndexResponse_ChooseItem>;
(ListenExperimentalIndexResponse_ChooseItem as MutableMessageType<ListenExperimentalIndexResponse_ChooseItem>).runtime = proto3;
(ListenExperimentalIndexResponse_ChooseItem as MutableMessageType<ListenExperimentalIndexResponse_ChooseItem>).typeName = "aiserver.v1.ListenExperimentalIndexResponse.ChooseItem";
(ListenExperimentalIndexResponse_ChooseItem as MutableMessageType<ListenExperimentalIndexResponse_ChooseItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: ChooseCodeReferencesResponse },
  { no: 2, name: "request", kind: "message", T: ChooseCodeReferencesRequest },
  {
    no: 3,
    name: "req_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListenExperimentalIndexResponse_SummarizeItem$Runtime = (() => class _ListenExperimentalIndexResponse_SummarizeItem extends Message<_ListenExperimentalIndexResponse_SummarizeItem> {
  declare response?: SummarizeWithReferencesResponse;
  declare request?: SummarizeWithReferencesRequest;
  declare reqUuid: string;
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse_SummarizeItem>) {
    super();
    this.reqUuid = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse_SummarizeItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse_SummarizeItem {
    return new _ListenExperimentalIndexResponse_SummarizeItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_SummarizeItem {
    return new _ListenExperimentalIndexResponse_SummarizeItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_SummarizeItem {
    return new _ListenExperimentalIndexResponse_SummarizeItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse_SummarizeItem | PlainMessage<_ListenExperimentalIndexResponse_SummarizeItem> | undefined | null, b2: _ListenExperimentalIndexResponse_SummarizeItem | PlainMessage<_ListenExperimentalIndexResponse_SummarizeItem> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse_SummarizeItem as unknown as MessageType<_ListenExperimentalIndexResponse_SummarizeItem>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse_SummarizeItem = InstanceType<typeof ListenExperimentalIndexResponse_SummarizeItem$Runtime>;
var ListenExperimentalIndexResponse_SummarizeItem: MessageType<ListenExperimentalIndexResponse_SummarizeItem> = ListenExperimentalIndexResponse_SummarizeItem$Runtime as unknown as MessageType<ListenExperimentalIndexResponse_SummarizeItem>;
(ListenExperimentalIndexResponse_SummarizeItem as MutableMessageType<ListenExperimentalIndexResponse_SummarizeItem>).runtime = proto3;
(ListenExperimentalIndexResponse_SummarizeItem as MutableMessageType<ListenExperimentalIndexResponse_SummarizeItem>).typeName = "aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem";
(ListenExperimentalIndexResponse_SummarizeItem as MutableMessageType<ListenExperimentalIndexResponse_SummarizeItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: SummarizeWithReferencesResponse },
  { no: 2, name: "request", kind: "message", T: SummarizeWithReferencesRequest },
  {
    no: 3,
    name: "req_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListenExperimentalIndexResponse_ErrorItem$Runtime = (() => class _ListenExperimentalIndexResponse_ErrorItem extends Message<_ListenExperimentalIndexResponse_ErrorItem> {
  declare message: string;
  declare statusCode: number;
  declare reqUuid: string;
  declare request: { case: "register"; value: RegisterFileToIndexRequest } | { case: "choose"; value: ChooseCodeReferencesRequest } | { case: "summarize"; value: SummarizeWithReferencesRequest } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ListenExperimentalIndexResponse_ErrorItem>) {
    super();
    this.message = "";
    this.statusCode = 0;
    this.request = { case: void 0 };
    this.reqUuid = "";
    proto3.util.initPartial(data, this as _ListenExperimentalIndexResponse_ErrorItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListenExperimentalIndexResponse_ErrorItem {
    return new _ListenExperimentalIndexResponse_ErrorItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ErrorItem {
    return new _ListenExperimentalIndexResponse_ErrorItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListenExperimentalIndexResponse_ErrorItem {
    return new _ListenExperimentalIndexResponse_ErrorItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ListenExperimentalIndexResponse_ErrorItem | PlainMessage<_ListenExperimentalIndexResponse_ErrorItem> | undefined | null, b2: _ListenExperimentalIndexResponse_ErrorItem | PlainMessage<_ListenExperimentalIndexResponse_ErrorItem> | undefined | null): boolean {
    return proto3.util.equals(_ListenExperimentalIndexResponse_ErrorItem as unknown as MessageType<_ListenExperimentalIndexResponse_ErrorItem>, a, b2);
  }
})();
export type ListenExperimentalIndexResponse_ErrorItem = InstanceType<typeof ListenExperimentalIndexResponse_ErrorItem$Runtime>;
var ListenExperimentalIndexResponse_ErrorItem: MessageType<ListenExperimentalIndexResponse_ErrorItem> = ListenExperimentalIndexResponse_ErrorItem$Runtime as unknown as MessageType<ListenExperimentalIndexResponse_ErrorItem>;
(ListenExperimentalIndexResponse_ErrorItem as MutableMessageType<ListenExperimentalIndexResponse_ErrorItem>).runtime = proto3;
(ListenExperimentalIndexResponse_ErrorItem as MutableMessageType<ListenExperimentalIndexResponse_ErrorItem>).typeName = "aiserver.v1.ListenExperimentalIndexResponse.ErrorItem";
(ListenExperimentalIndexResponse_ErrorItem as MutableMessageType<ListenExperimentalIndexResponse_ErrorItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "register", kind: "message", T: RegisterFileToIndexRequest, oneof: "request" },
  { no: 4, name: "choose", kind: "message", T: ChooseCodeReferencesRequest, oneof: "request" },
  { no: 5, name: "summarize", kind: "message", T: SummarizeWithReferencesRequest, oneof: "request" },
  {
    no: 6,
    name: "req_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RegisterFileToIndexRequest$Runtime = (() => class _RegisterFileToIndexRequest extends Message<_RegisterFileToIndexRequest> {
  declare indexId: string;
  declare workspaceRelativePath: string;
  declare rootContextNode?: SerializedContextNode;
  declare content: string[];
  constructor(data?: PartialMessage<_RegisterFileToIndexRequest>) {
    super();
    this.indexId = "";
    this.workspaceRelativePath = "";
    this.content = [];
    proto3.util.initPartial(data, this as _RegisterFileToIndexRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RegisterFileToIndexRequest {
    return new _RegisterFileToIndexRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RegisterFileToIndexRequest {
    return new _RegisterFileToIndexRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RegisterFileToIndexRequest {
    return new _RegisterFileToIndexRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RegisterFileToIndexRequest | PlainMessage<_RegisterFileToIndexRequest> | undefined | null, b2: _RegisterFileToIndexRequest | PlainMessage<_RegisterFileToIndexRequest> | undefined | null): boolean {
    return proto3.util.equals(_RegisterFileToIndexRequest as unknown as MessageType<_RegisterFileToIndexRequest>, a, b2);
  }
})();
export type RegisterFileToIndexRequest = InstanceType<typeof RegisterFileToIndexRequest$Runtime>;
var RegisterFileToIndexRequest: MessageType<RegisterFileToIndexRequest> = RegisterFileToIndexRequest$Runtime as unknown as MessageType<RegisterFileToIndexRequest>;
(RegisterFileToIndexRequest as MutableMessageType<RegisterFileToIndexRequest>).runtime = proto3;
(RegisterFileToIndexRequest as MutableMessageType<RegisterFileToIndexRequest>).typeName = "aiserver.v1.RegisterFileToIndexRequest";
(RegisterFileToIndexRequest as MutableMessageType<RegisterFileToIndexRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "workspace_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "root_context_node", kind: "message", T: SerializedContextNode },
  { no: 4, name: "content", kind: "scalar", T: 9, repeated: true }
]);
var RegisterFileToIndexResponse$Runtime = (() => class _RegisterFileToIndexResponse extends Message<_RegisterFileToIndexResponse> {
  declare fileId: string;
  declare rootContextNodeId: string;
  declare dependencyResolutionAttempts: URIResolutionAttempt[];
  declare fileData?: IndexFileData;
  constructor(data?: PartialMessage<_RegisterFileToIndexResponse>) {
    super();
    this.fileId = "";
    this.rootContextNodeId = "";
    this.dependencyResolutionAttempts = [];
    proto3.util.initPartial(data, this as _RegisterFileToIndexResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RegisterFileToIndexResponse {
    return new _RegisterFileToIndexResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RegisterFileToIndexResponse {
    return new _RegisterFileToIndexResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RegisterFileToIndexResponse {
    return new _RegisterFileToIndexResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RegisterFileToIndexResponse | PlainMessage<_RegisterFileToIndexResponse> | undefined | null, b2: _RegisterFileToIndexResponse | PlainMessage<_RegisterFileToIndexResponse> | undefined | null): boolean {
    return proto3.util.equals(_RegisterFileToIndexResponse as unknown as MessageType<_RegisterFileToIndexResponse>, a, b2);
  }
})();
export type RegisterFileToIndexResponse = InstanceType<typeof RegisterFileToIndexResponse$Runtime>;
var RegisterFileToIndexResponse: MessageType<RegisterFileToIndexResponse> = RegisterFileToIndexResponse$Runtime as unknown as MessageType<RegisterFileToIndexResponse>;
(RegisterFileToIndexResponse as MutableMessageType<RegisterFileToIndexResponse>).runtime = proto3;
(RegisterFileToIndexResponse as MutableMessageType<RegisterFileToIndexResponse>).typeName = "aiserver.v1.RegisterFileToIndexResponse";
(RegisterFileToIndexResponse as MutableMessageType<RegisterFileToIndexResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "root_context_node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "dependency_resolution_attempts", kind: "message", T: URIResolutionAttempt, repeated: true },
  { no: 4, name: "file_data", kind: "message", T: IndexFileData }
]);
var SetupIndexDependenciesRequest$Runtime = (() => class _SetupIndexDependenciesRequest extends Message<_SetupIndexDependenciesRequest> {
  declare indexId: string;
  declare fileId: string;
  declare dependencyResolutionResults: URIResolutionResult[];
  constructor(data?: PartialMessage<_SetupIndexDependenciesRequest>) {
    super();
    this.indexId = "";
    this.fileId = "";
    this.dependencyResolutionResults = [];
    proto3.util.initPartial(data, this as _SetupIndexDependenciesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupIndexDependenciesRequest {
    return new _SetupIndexDependenciesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupIndexDependenciesRequest {
    return new _SetupIndexDependenciesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupIndexDependenciesRequest {
    return new _SetupIndexDependenciesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupIndexDependenciesRequest | PlainMessage<_SetupIndexDependenciesRequest> | undefined | null, b2: _SetupIndexDependenciesRequest | PlainMessage<_SetupIndexDependenciesRequest> | undefined | null): boolean {
    return proto3.util.equals(_SetupIndexDependenciesRequest as unknown as MessageType<_SetupIndexDependenciesRequest>, a, b2);
  }
})();
export type SetupIndexDependenciesRequest = InstanceType<typeof SetupIndexDependenciesRequest$Runtime>;
var SetupIndexDependenciesRequest: MessageType<SetupIndexDependenciesRequest> = SetupIndexDependenciesRequest$Runtime as unknown as MessageType<SetupIndexDependenciesRequest>;
(SetupIndexDependenciesRequest as MutableMessageType<SetupIndexDependenciesRequest>).runtime = proto3;
(SetupIndexDependenciesRequest as MutableMessageType<SetupIndexDependenciesRequest>).typeName = "aiserver.v1.SetupIndexDependenciesRequest";
(SetupIndexDependenciesRequest as MutableMessageType<SetupIndexDependenciesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "file_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "dependency_resolution_results", kind: "message", T: URIResolutionResult, repeated: true }
]);
var SetupIndexDependenciesResponse$Runtime = (() => class _SetupIndexDependenciesResponse extends Message<_SetupIndexDependenciesResponse> {
  constructor(data?: PartialMessage<_SetupIndexDependenciesResponse>) {
    super();
    proto3.util.initPartial(data, this as _SetupIndexDependenciesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupIndexDependenciesResponse {
    return new _SetupIndexDependenciesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupIndexDependenciesResponse {
    return new _SetupIndexDependenciesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupIndexDependenciesResponse {
    return new _SetupIndexDependenciesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupIndexDependenciesResponse | PlainMessage<_SetupIndexDependenciesResponse> | undefined | null, b2: _SetupIndexDependenciesResponse | PlainMessage<_SetupIndexDependenciesResponse> | undefined | null): boolean {
    return proto3.util.equals(_SetupIndexDependenciesResponse as unknown as MessageType<_SetupIndexDependenciesResponse>, a, b2);
  }
})();
export type SetupIndexDependenciesResponse = InstanceType<typeof SetupIndexDependenciesResponse$Runtime>;
var SetupIndexDependenciesResponse: MessageType<SetupIndexDependenciesResponse> = SetupIndexDependenciesResponse$Runtime as unknown as MessageType<SetupIndexDependenciesResponse>;
(SetupIndexDependenciesResponse as MutableMessageType<SetupIndexDependenciesResponse>).runtime = proto3;
(SetupIndexDependenciesResponse as MutableMessageType<SetupIndexDependenciesResponse>).typeName = "aiserver.v1.SetupIndexDependenciesResponse";
(SetupIndexDependenciesResponse as MutableMessageType<SetupIndexDependenciesResponse>).fields = proto3.util.newFieldList(() => []);
var ComputeIndexTopoSortRequest$Runtime = (() => class _ComputeIndexTopoSortRequest extends Message<_ComputeIndexTopoSortRequest> {
  declare indexId: string;
  constructor(data?: PartialMessage<_ComputeIndexTopoSortRequest>) {
    super();
    this.indexId = "";
    proto3.util.initPartial(data, this as _ComputeIndexTopoSortRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputeIndexTopoSortRequest {
    return new _ComputeIndexTopoSortRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputeIndexTopoSortRequest {
    return new _ComputeIndexTopoSortRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputeIndexTopoSortRequest {
    return new _ComputeIndexTopoSortRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputeIndexTopoSortRequest | PlainMessage<_ComputeIndexTopoSortRequest> | undefined | null, b2: _ComputeIndexTopoSortRequest | PlainMessage<_ComputeIndexTopoSortRequest> | undefined | null): boolean {
    return proto3.util.equals(_ComputeIndexTopoSortRequest as unknown as MessageType<_ComputeIndexTopoSortRequest>, a, b2);
  }
})();
export type ComputeIndexTopoSortRequest = InstanceType<typeof ComputeIndexTopoSortRequest$Runtime>;
var ComputeIndexTopoSortRequest: MessageType<ComputeIndexTopoSortRequest> = ComputeIndexTopoSortRequest$Runtime as unknown as MessageType<ComputeIndexTopoSortRequest>;
(ComputeIndexTopoSortRequest as MutableMessageType<ComputeIndexTopoSortRequest>).runtime = proto3;
(ComputeIndexTopoSortRequest as MutableMessageType<ComputeIndexTopoSortRequest>).typeName = "aiserver.v1.ComputeIndexTopoSortRequest";
(ComputeIndexTopoSortRequest as MutableMessageType<ComputeIndexTopoSortRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ComputeIndexTopoSortResponse$Runtime = (() => class _ComputeIndexTopoSortResponse extends Message<_ComputeIndexTopoSortResponse> {
  constructor(data?: PartialMessage<_ComputeIndexTopoSortResponse>) {
    super();
    proto3.util.initPartial(data, this as _ComputeIndexTopoSortResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputeIndexTopoSortResponse {
    return new _ComputeIndexTopoSortResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputeIndexTopoSortResponse {
    return new _ComputeIndexTopoSortResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputeIndexTopoSortResponse {
    return new _ComputeIndexTopoSortResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputeIndexTopoSortResponse | PlainMessage<_ComputeIndexTopoSortResponse> | undefined | null, b2: _ComputeIndexTopoSortResponse | PlainMessage<_ComputeIndexTopoSortResponse> | undefined | null): boolean {
    return proto3.util.equals(_ComputeIndexTopoSortResponse as unknown as MessageType<_ComputeIndexTopoSortResponse>, a, b2);
  }
})();
export type ComputeIndexTopoSortResponse = InstanceType<typeof ComputeIndexTopoSortResponse$Runtime>;
var ComputeIndexTopoSortResponse: MessageType<ComputeIndexTopoSortResponse> = ComputeIndexTopoSortResponse$Runtime as unknown as MessageType<ComputeIndexTopoSortResponse>;
(ComputeIndexTopoSortResponse as MutableMessageType<ComputeIndexTopoSortResponse>).runtime = proto3;
(ComputeIndexTopoSortResponse as MutableMessageType<ComputeIndexTopoSortResponse>).typeName = "aiserver.v1.ComputeIndexTopoSortResponse";
(ComputeIndexTopoSortResponse as MutableMessageType<ComputeIndexTopoSortResponse>).fields = proto3.util.newFieldList(() => []);
var ChooseCodeReferencesRequest$Runtime = (() => class _ChooseCodeReferencesRequest extends Message<_ChooseCodeReferencesRequest> {
  declare indexId: string;
  declare recompute: boolean;
  declare request: { case: "file"; value: ChooseCodeReferencesRequest_FileRequest } | { case: "node"; value: ChooseCodeReferencesRequest_NodeRequest } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ChooseCodeReferencesRequest>) {
    super();
    this.indexId = "";
    this.request = { case: void 0 };
    this.recompute = false;
    proto3.util.initPartial(data, this as _ChooseCodeReferencesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesRequest {
    return new _ChooseCodeReferencesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest {
    return new _ChooseCodeReferencesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest {
    return new _ChooseCodeReferencesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesRequest | PlainMessage<_ChooseCodeReferencesRequest> | undefined | null, b2: _ChooseCodeReferencesRequest | PlainMessage<_ChooseCodeReferencesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesRequest as unknown as MessageType<_ChooseCodeReferencesRequest>, a, b2);
  }
})();
export type ChooseCodeReferencesRequest = InstanceType<typeof ChooseCodeReferencesRequest$Runtime>;
var ChooseCodeReferencesRequest: MessageType<ChooseCodeReferencesRequest> = ChooseCodeReferencesRequest$Runtime as unknown as MessageType<ChooseCodeReferencesRequest>;
(ChooseCodeReferencesRequest as MutableMessageType<ChooseCodeReferencesRequest>).runtime = proto3;
(ChooseCodeReferencesRequest as MutableMessageType<ChooseCodeReferencesRequest>).typeName = "aiserver.v1.ChooseCodeReferencesRequest";
(ChooseCodeReferencesRequest as MutableMessageType<ChooseCodeReferencesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file", kind: "message", T: ChooseCodeReferencesRequest_FileRequest, oneof: "request" },
  { no: 3, name: "node", kind: "message", T: ChooseCodeReferencesRequest_NodeRequest, oneof: "request" },
  {
    no: 4,
    name: "recompute",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ChooseCodeReferencesRequest_FileRequest$Runtime = (() => class _ChooseCodeReferencesRequest_FileRequest extends Message<_ChooseCodeReferencesRequest_FileRequest> {
  declare fileId: string;
  constructor(data?: PartialMessage<_ChooseCodeReferencesRequest_FileRequest>) {
    super();
    this.fileId = "";
    proto3.util.initPartial(data, this as _ChooseCodeReferencesRequest_FileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesRequest_FileRequest {
    return new _ChooseCodeReferencesRequest_FileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest_FileRequest {
    return new _ChooseCodeReferencesRequest_FileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest_FileRequest {
    return new _ChooseCodeReferencesRequest_FileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesRequest_FileRequest | PlainMessage<_ChooseCodeReferencesRequest_FileRequest> | undefined | null, b2: _ChooseCodeReferencesRequest_FileRequest | PlainMessage<_ChooseCodeReferencesRequest_FileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesRequest_FileRequest as unknown as MessageType<_ChooseCodeReferencesRequest_FileRequest>, a, b2);
  }
})();
export type ChooseCodeReferencesRequest_FileRequest = InstanceType<typeof ChooseCodeReferencesRequest_FileRequest$Runtime>;
var ChooseCodeReferencesRequest_FileRequest: MessageType<ChooseCodeReferencesRequest_FileRequest> = ChooseCodeReferencesRequest_FileRequest$Runtime as unknown as MessageType<ChooseCodeReferencesRequest_FileRequest>;
(ChooseCodeReferencesRequest_FileRequest as MutableMessageType<ChooseCodeReferencesRequest_FileRequest>).runtime = proto3;
(ChooseCodeReferencesRequest_FileRequest as MutableMessageType<ChooseCodeReferencesRequest_FileRequest>).typeName = "aiserver.v1.ChooseCodeReferencesRequest.FileRequest";
(ChooseCodeReferencesRequest_FileRequest as MutableMessageType<ChooseCodeReferencesRequest_FileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ChooseCodeReferencesRequest_NodeRequest$Runtime = (() => class _ChooseCodeReferencesRequest_NodeRequest extends Message<_ChooseCodeReferencesRequest_NodeRequest> {
  declare nodeId: string;
  constructor(data?: PartialMessage<_ChooseCodeReferencesRequest_NodeRequest>) {
    super();
    this.nodeId = "";
    proto3.util.initPartial(data, this as _ChooseCodeReferencesRequest_NodeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesRequest_NodeRequest {
    return new _ChooseCodeReferencesRequest_NodeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest_NodeRequest {
    return new _ChooseCodeReferencesRequest_NodeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesRequest_NodeRequest {
    return new _ChooseCodeReferencesRequest_NodeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesRequest_NodeRequest | PlainMessage<_ChooseCodeReferencesRequest_NodeRequest> | undefined | null, b2: _ChooseCodeReferencesRequest_NodeRequest | PlainMessage<_ChooseCodeReferencesRequest_NodeRequest> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesRequest_NodeRequest as unknown as MessageType<_ChooseCodeReferencesRequest_NodeRequest>, a, b2);
  }
})();
export type ChooseCodeReferencesRequest_NodeRequest = InstanceType<typeof ChooseCodeReferencesRequest_NodeRequest$Runtime>;
var ChooseCodeReferencesRequest_NodeRequest: MessageType<ChooseCodeReferencesRequest_NodeRequest> = ChooseCodeReferencesRequest_NodeRequest$Runtime as unknown as MessageType<ChooseCodeReferencesRequest_NodeRequest>;
(ChooseCodeReferencesRequest_NodeRequest as MutableMessageType<ChooseCodeReferencesRequest_NodeRequest>).runtime = proto3;
(ChooseCodeReferencesRequest_NodeRequest as MutableMessageType<ChooseCodeReferencesRequest_NodeRequest>).typeName = "aiserver.v1.ChooseCodeReferencesRequest.NodeRequest";
(ChooseCodeReferencesRequest_NodeRequest as MutableMessageType<ChooseCodeReferencesRequest_NodeRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ChooseCodeReferencesResponse$Runtime = (() => class _ChooseCodeReferencesResponse extends Message<_ChooseCodeReferencesResponse> {
  declare response: { case: "file"; value: ChooseCodeReferencesResponse_FileResponse } | { case: "node"; value: ChooseCodeReferencesResponse_NodeResponse } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ChooseCodeReferencesResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _ChooseCodeReferencesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesResponse {
    return new _ChooseCodeReferencesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse {
    return new _ChooseCodeReferencesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse {
    return new _ChooseCodeReferencesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesResponse | PlainMessage<_ChooseCodeReferencesResponse> | undefined | null, b2: _ChooseCodeReferencesResponse | PlainMessage<_ChooseCodeReferencesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesResponse as unknown as MessageType<_ChooseCodeReferencesResponse>, a, b2);
  }
})();
export type ChooseCodeReferencesResponse = InstanceType<typeof ChooseCodeReferencesResponse$Runtime>;
var ChooseCodeReferencesResponse: MessageType<ChooseCodeReferencesResponse> = ChooseCodeReferencesResponse$Runtime as unknown as MessageType<ChooseCodeReferencesResponse>;
(ChooseCodeReferencesResponse as MutableMessageType<ChooseCodeReferencesResponse>).runtime = proto3;
(ChooseCodeReferencesResponse as MutableMessageType<ChooseCodeReferencesResponse>).typeName = "aiserver.v1.ChooseCodeReferencesResponse";
(ChooseCodeReferencesResponse as MutableMessageType<ChooseCodeReferencesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file", kind: "message", T: ChooseCodeReferencesResponse_FileResponse, oneof: "response" },
  { no: 2, name: "node", kind: "message", T: ChooseCodeReferencesResponse_NodeResponse, oneof: "response" }
]);
var ChooseCodeReferencesResponse_NodeResponse$Runtime = (() => class _ChooseCodeReferencesResponse_NodeResponse extends Message<_ChooseCodeReferencesResponse_NodeResponse> {
  declare nodeId: string;
  declare actions: CodeSymbolWithAction[];
  declare skipped: boolean;
  declare dependencies: string[];
  constructor(data?: PartialMessage<_ChooseCodeReferencesResponse_NodeResponse>) {
    super();
    this.nodeId = "";
    this.actions = [];
    this.skipped = false;
    this.dependencies = [];
    proto3.util.initPartial(data, this as _ChooseCodeReferencesResponse_NodeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesResponse_NodeResponse {
    return new _ChooseCodeReferencesResponse_NodeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse_NodeResponse {
    return new _ChooseCodeReferencesResponse_NodeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse_NodeResponse {
    return new _ChooseCodeReferencesResponse_NodeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesResponse_NodeResponse | PlainMessage<_ChooseCodeReferencesResponse_NodeResponse> | undefined | null, b2: _ChooseCodeReferencesResponse_NodeResponse | PlainMessage<_ChooseCodeReferencesResponse_NodeResponse> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesResponse_NodeResponse as unknown as MessageType<_ChooseCodeReferencesResponse_NodeResponse>, a, b2);
  }
})();
export type ChooseCodeReferencesResponse_NodeResponse = InstanceType<typeof ChooseCodeReferencesResponse_NodeResponse$Runtime>;
var ChooseCodeReferencesResponse_NodeResponse: MessageType<ChooseCodeReferencesResponse_NodeResponse> = ChooseCodeReferencesResponse_NodeResponse$Runtime as unknown as MessageType<ChooseCodeReferencesResponse_NodeResponse>;
(ChooseCodeReferencesResponse_NodeResponse as MutableMessageType<ChooseCodeReferencesResponse_NodeResponse>).runtime = proto3;
(ChooseCodeReferencesResponse_NodeResponse as MutableMessageType<ChooseCodeReferencesResponse_NodeResponse>).typeName = "aiserver.v1.ChooseCodeReferencesResponse.NodeResponse";
(ChooseCodeReferencesResponse_NodeResponse as MutableMessageType<ChooseCodeReferencesResponse_NodeResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "actions", kind: "message", T: CodeSymbolWithAction, repeated: true },
  {
    no: 3,
    name: "skipped",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: true }
]);
var ChooseCodeReferencesResponse_FileResponse$Runtime = (() => class _ChooseCodeReferencesResponse_FileResponse extends Message<_ChooseCodeReferencesResponse_FileResponse> {
  declare fileId: string;
  declare nodeResponses: ChooseCodeReferencesResponse_NodeResponse[];
  constructor(data?: PartialMessage<_ChooseCodeReferencesResponse_FileResponse>) {
    super();
    this.fileId = "";
    this.nodeResponses = [];
    proto3.util.initPartial(data, this as _ChooseCodeReferencesResponse_FileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChooseCodeReferencesResponse_FileResponse {
    return new _ChooseCodeReferencesResponse_FileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse_FileResponse {
    return new _ChooseCodeReferencesResponse_FileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChooseCodeReferencesResponse_FileResponse {
    return new _ChooseCodeReferencesResponse_FileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ChooseCodeReferencesResponse_FileResponse | PlainMessage<_ChooseCodeReferencesResponse_FileResponse> | undefined | null, b2: _ChooseCodeReferencesResponse_FileResponse | PlainMessage<_ChooseCodeReferencesResponse_FileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ChooseCodeReferencesResponse_FileResponse as unknown as MessageType<_ChooseCodeReferencesResponse_FileResponse>, a, b2);
  }
})();
export type ChooseCodeReferencesResponse_FileResponse = InstanceType<typeof ChooseCodeReferencesResponse_FileResponse$Runtime>;
var ChooseCodeReferencesResponse_FileResponse: MessageType<ChooseCodeReferencesResponse_FileResponse> = ChooseCodeReferencesResponse_FileResponse$Runtime as unknown as MessageType<ChooseCodeReferencesResponse_FileResponse>;
(ChooseCodeReferencesResponse_FileResponse as MutableMessageType<ChooseCodeReferencesResponse_FileResponse>).runtime = proto3;
(ChooseCodeReferencesResponse_FileResponse as MutableMessageType<ChooseCodeReferencesResponse_FileResponse>).typeName = "aiserver.v1.ChooseCodeReferencesResponse.FileResponse";
(ChooseCodeReferencesResponse_FileResponse as MutableMessageType<ChooseCodeReferencesResponse_FileResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "node_responses", kind: "message", T: ChooseCodeReferencesResponse_NodeResponse, repeated: true }
]);
var RegisterCodeReferencesRequest$Runtime = (() => class _RegisterCodeReferencesRequest extends Message<_RegisterCodeReferencesRequest> {
  declare nodeId: string;
  declare references: SymbolActionResults[];
  constructor(data?: PartialMessage<_RegisterCodeReferencesRequest>) {
    super();
    this.nodeId = "";
    this.references = [];
    proto3.util.initPartial(data, this as _RegisterCodeReferencesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RegisterCodeReferencesRequest {
    return new _RegisterCodeReferencesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RegisterCodeReferencesRequest {
    return new _RegisterCodeReferencesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RegisterCodeReferencesRequest {
    return new _RegisterCodeReferencesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RegisterCodeReferencesRequest | PlainMessage<_RegisterCodeReferencesRequest> | undefined | null, b2: _RegisterCodeReferencesRequest | PlainMessage<_RegisterCodeReferencesRequest> | undefined | null): boolean {
    return proto3.util.equals(_RegisterCodeReferencesRequest as unknown as MessageType<_RegisterCodeReferencesRequest>, a, b2);
  }
})();
export type RegisterCodeReferencesRequest = InstanceType<typeof RegisterCodeReferencesRequest$Runtime>;
var RegisterCodeReferencesRequest: MessageType<RegisterCodeReferencesRequest> = RegisterCodeReferencesRequest$Runtime as unknown as MessageType<RegisterCodeReferencesRequest>;
(RegisterCodeReferencesRequest as MutableMessageType<RegisterCodeReferencesRequest>).runtime = proto3;
(RegisterCodeReferencesRequest as MutableMessageType<RegisterCodeReferencesRequest>).typeName = "aiserver.v1.RegisterCodeReferencesRequest";
(RegisterCodeReferencesRequest as MutableMessageType<RegisterCodeReferencesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "references", kind: "message", T: SymbolActionResults, repeated: true }
]);
var RegisterCodeReferencesResponse$Runtime = (() => class _RegisterCodeReferencesResponse extends Message<_RegisterCodeReferencesResponse> {
  declare dependencies: string[];
  constructor(data?: PartialMessage<_RegisterCodeReferencesResponse>) {
    super();
    this.dependencies = [];
    proto3.util.initPartial(data, this as _RegisterCodeReferencesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RegisterCodeReferencesResponse {
    return new _RegisterCodeReferencesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RegisterCodeReferencesResponse {
    return new _RegisterCodeReferencesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RegisterCodeReferencesResponse {
    return new _RegisterCodeReferencesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RegisterCodeReferencesResponse | PlainMessage<_RegisterCodeReferencesResponse> | undefined | null, b2: _RegisterCodeReferencesResponse | PlainMessage<_RegisterCodeReferencesResponse> | undefined | null): boolean {
    return proto3.util.equals(_RegisterCodeReferencesResponse as unknown as MessageType<_RegisterCodeReferencesResponse>, a, b2);
  }
})();
export type RegisterCodeReferencesResponse = InstanceType<typeof RegisterCodeReferencesResponse$Runtime>;
var RegisterCodeReferencesResponse: MessageType<RegisterCodeReferencesResponse> = RegisterCodeReferencesResponse$Runtime as unknown as MessageType<RegisterCodeReferencesResponse>;
(RegisterCodeReferencesResponse as MutableMessageType<RegisterCodeReferencesResponse>).runtime = proto3;
(RegisterCodeReferencesResponse as MutableMessageType<RegisterCodeReferencesResponse>).typeName = "aiserver.v1.RegisterCodeReferencesResponse";
(RegisterCodeReferencesResponse as MutableMessageType<RegisterCodeReferencesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "dependencies", kind: "scalar", T: 9, repeated: true }
]);
var SummarizeWithReferencesRequest$Runtime = (() => class _SummarizeWithReferencesRequest extends Message<_SummarizeWithReferencesRequest> {
  declare indexId: string;
  declare nodeId: string;
  declare recompute: boolean;
  constructor(data?: PartialMessage<_SummarizeWithReferencesRequest>) {
    super();
    this.indexId = "";
    this.nodeId = "";
    this.recompute = false;
    proto3.util.initPartial(data, this as _SummarizeWithReferencesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeWithReferencesRequest {
    return new _SummarizeWithReferencesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesRequest {
    return new _SummarizeWithReferencesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesRequest {
    return new _SummarizeWithReferencesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeWithReferencesRequest | PlainMessage<_SummarizeWithReferencesRequest> | undefined | null, b2: _SummarizeWithReferencesRequest | PlainMessage<_SummarizeWithReferencesRequest> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeWithReferencesRequest as unknown as MessageType<_SummarizeWithReferencesRequest>, a, b2);
  }
})();
export type SummarizeWithReferencesRequest = InstanceType<typeof SummarizeWithReferencesRequest$Runtime>;
var SummarizeWithReferencesRequest: MessageType<SummarizeWithReferencesRequest> = SummarizeWithReferencesRequest$Runtime as unknown as MessageType<SummarizeWithReferencesRequest>;
(SummarizeWithReferencesRequest as MutableMessageType<SummarizeWithReferencesRequest>).runtime = proto3;
(SummarizeWithReferencesRequest as MutableMessageType<SummarizeWithReferencesRequest>).typeName = "aiserver.v1.SummarizeWithReferencesRequest";
(SummarizeWithReferencesRequest as MutableMessageType<SummarizeWithReferencesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "recompute",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SummarizeWithReferencesResponse$Runtime = (() => class _SummarizeWithReferencesResponse extends Message<_SummarizeWithReferencesResponse> {
  declare nodeId: string;
  declare response: { case: "success"; value: SummarizeWithReferencesResponse_Success } | { case: "dependency"; value: SummarizeWithReferencesResponse_Dependency } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SummarizeWithReferencesResponse>) {
    super();
    this.response = { case: void 0 };
    this.nodeId = "";
    proto3.util.initPartial(data, this as _SummarizeWithReferencesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeWithReferencesResponse {
    return new _SummarizeWithReferencesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse {
    return new _SummarizeWithReferencesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse {
    return new _SummarizeWithReferencesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeWithReferencesResponse | PlainMessage<_SummarizeWithReferencesResponse> | undefined | null, b2: _SummarizeWithReferencesResponse | PlainMessage<_SummarizeWithReferencesResponse> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeWithReferencesResponse as unknown as MessageType<_SummarizeWithReferencesResponse>, a, b2);
  }
})();
export type SummarizeWithReferencesResponse = InstanceType<typeof SummarizeWithReferencesResponse$Runtime>;
var SummarizeWithReferencesResponse: MessageType<SummarizeWithReferencesResponse> = SummarizeWithReferencesResponse$Runtime as unknown as MessageType<SummarizeWithReferencesResponse>;
(SummarizeWithReferencesResponse as MutableMessageType<SummarizeWithReferencesResponse>).runtime = proto3;
(SummarizeWithReferencesResponse as MutableMessageType<SummarizeWithReferencesResponse>).typeName = "aiserver.v1.SummarizeWithReferencesResponse";
(SummarizeWithReferencesResponse as MutableMessageType<SummarizeWithReferencesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SummarizeWithReferencesResponse_Success, oneof: "response" },
  { no: 2, name: "dependency", kind: "message", T: SummarizeWithReferencesResponse_Dependency, oneof: "response" },
  {
    no: 3,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SummarizeWithReferencesResponse_Success$Runtime = (() => class _SummarizeWithReferencesResponse_Success extends Message<_SummarizeWithReferencesResponse_Success> {
  declare summary: string;
  constructor(data?: PartialMessage<_SummarizeWithReferencesResponse_Success>) {
    super();
    this.summary = "";
    proto3.util.initPartial(data, this as _SummarizeWithReferencesResponse_Success);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeWithReferencesResponse_Success {
    return new _SummarizeWithReferencesResponse_Success().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse_Success {
    return new _SummarizeWithReferencesResponse_Success().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse_Success {
    return new _SummarizeWithReferencesResponse_Success().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeWithReferencesResponse_Success | PlainMessage<_SummarizeWithReferencesResponse_Success> | undefined | null, b2: _SummarizeWithReferencesResponse_Success | PlainMessage<_SummarizeWithReferencesResponse_Success> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeWithReferencesResponse_Success as unknown as MessageType<_SummarizeWithReferencesResponse_Success>, a, b2);
  }
})();
export type SummarizeWithReferencesResponse_Success = InstanceType<typeof SummarizeWithReferencesResponse_Success$Runtime>;
var SummarizeWithReferencesResponse_Success: MessageType<SummarizeWithReferencesResponse_Success> = SummarizeWithReferencesResponse_Success$Runtime as unknown as MessageType<SummarizeWithReferencesResponse_Success>;
(SummarizeWithReferencesResponse_Success as MutableMessageType<SummarizeWithReferencesResponse_Success>).runtime = proto3;
(SummarizeWithReferencesResponse_Success as MutableMessageType<SummarizeWithReferencesResponse_Success>).typeName = "aiserver.v1.SummarizeWithReferencesResponse.Success";
(SummarizeWithReferencesResponse_Success as MutableMessageType<SummarizeWithReferencesResponse_Success>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SummarizeWithReferencesResponse_Dependency$Runtime = (() => class _SummarizeWithReferencesResponse_Dependency extends Message<_SummarizeWithReferencesResponse_Dependency> {
  declare nodes: string[];
  constructor(data?: PartialMessage<_SummarizeWithReferencesResponse_Dependency>) {
    super();
    this.nodes = [];
    proto3.util.initPartial(data, this as _SummarizeWithReferencesResponse_Dependency);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeWithReferencesResponse_Dependency {
    return new _SummarizeWithReferencesResponse_Dependency().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse_Dependency {
    return new _SummarizeWithReferencesResponse_Dependency().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeWithReferencesResponse_Dependency {
    return new _SummarizeWithReferencesResponse_Dependency().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeWithReferencesResponse_Dependency | PlainMessage<_SummarizeWithReferencesResponse_Dependency> | undefined | null, b2: _SummarizeWithReferencesResponse_Dependency | PlainMessage<_SummarizeWithReferencesResponse_Dependency> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeWithReferencesResponse_Dependency as unknown as MessageType<_SummarizeWithReferencesResponse_Dependency>, a, b2);
  }
})();
export type SummarizeWithReferencesResponse_Dependency = InstanceType<typeof SummarizeWithReferencesResponse_Dependency$Runtime>;
var SummarizeWithReferencesResponse_Dependency: MessageType<SummarizeWithReferencesResponse_Dependency> = SummarizeWithReferencesResponse_Dependency$Runtime as unknown as MessageType<SummarizeWithReferencesResponse_Dependency>;
(SummarizeWithReferencesResponse_Dependency as MutableMessageType<SummarizeWithReferencesResponse_Dependency>).runtime = proto3;
(SummarizeWithReferencesResponse_Dependency as MutableMessageType<SummarizeWithReferencesResponse_Dependency>).typeName = "aiserver.v1.SummarizeWithReferencesResponse.Dependency";
(SummarizeWithReferencesResponse_Dependency as MutableMessageType<SummarizeWithReferencesResponse_Dependency>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "nodes", kind: "scalar", T: 9, repeated: true }
]);
var RequestReceivedResponse$Runtime = (() => class _RequestReceivedResponse extends Message<_RequestReceivedResponse> {
  declare reqUuid: string;
  constructor(data?: PartialMessage<_RequestReceivedResponse>) {
    super();
    this.reqUuid = "";
    proto3.util.initPartial(data, this as _RequestReceivedResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestReceivedResponse {
    return new _RequestReceivedResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestReceivedResponse {
    return new _RequestReceivedResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestReceivedResponse {
    return new _RequestReceivedResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestReceivedResponse | PlainMessage<_RequestReceivedResponse> | undefined | null, b2: _RequestReceivedResponse | PlainMessage<_RequestReceivedResponse> | undefined | null): boolean {
    return proto3.util.equals(_RequestReceivedResponse as unknown as MessageType<_RequestReceivedResponse>, a, b2);
  }
})();
export type RequestReceivedResponse = InstanceType<typeof RequestReceivedResponse$Runtime>;
var RequestReceivedResponse: MessageType<RequestReceivedResponse> = RequestReceivedResponse$Runtime as unknown as MessageType<RequestReceivedResponse>;
(RequestReceivedResponse as MutableMessageType<RequestReceivedResponse>).runtime = proto3;
(RequestReceivedResponse as MutableMessageType<RequestReceivedResponse>).typeName = "aiserver.v1.RequestReceivedResponse";
(RequestReceivedResponse as MutableMessageType<RequestReceivedResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "req_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReflectionData$Runtime = (() => class _ReflectionData extends Message<_ReflectionData> {
  declare indexId: string;
  declare id: string;
  declare summary: string;
  constructor(data?: PartialMessage<_ReflectionData>) {
    super();
    this.indexId = "";
    this.id = "";
    this.summary = "";
    proto3.util.initPartial(data, this as _ReflectionData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectionData {
    return new _ReflectionData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectionData {
    return new _ReflectionData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectionData {
    return new _ReflectionData().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectionData | PlainMessage<_ReflectionData> | undefined | null, b2: _ReflectionData | PlainMessage<_ReflectionData> | undefined | null): boolean {
    return proto3.util.equals(_ReflectionData as unknown as MessageType<_ReflectionData>, a, b2);
  }
})();
export type ReflectionData = InstanceType<typeof ReflectionData$Runtime>;
var ReflectionData: MessageType<ReflectionData> = ReflectionData$Runtime as unknown as MessageType<ReflectionData>;
(ReflectionData as MutableMessageType<ReflectionData>).runtime = proto3;
(ReflectionData as MutableMessageType<ReflectionData>).typeName = "aiserver.v1.ReflectionData";
(ReflectionData as MutableMessageType<ReflectionData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var IndexFileData$Runtime = (() => class _IndexFileData extends Message<_IndexFileData> {
  declare indexId: string;
  declare workspaceRelativePath: string;
  declare stage: string;
  declare order: number;
  declare nodes: IndexFileData_NodeData[];
  constructor(data?: PartialMessage<_IndexFileData>) {
    super();
    this.indexId = "";
    this.workspaceRelativePath = "";
    this.stage = "";
    this.order = 0;
    this.nodes = [];
    proto3.util.initPartial(data, this as _IndexFileData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IndexFileData {
    return new _IndexFileData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IndexFileData {
    return new _IndexFileData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IndexFileData {
    return new _IndexFileData().fromJsonString(jsonString, options);
  }
  static equals(a: _IndexFileData | PlainMessage<_IndexFileData> | undefined | null, b2: _IndexFileData | PlainMessage<_IndexFileData> | undefined | null): boolean {
    return proto3.util.equals(_IndexFileData as unknown as MessageType<_IndexFileData>, a, b2);
  }
})();
export type IndexFileData = InstanceType<typeof IndexFileData$Runtime>;
var IndexFileData: MessageType<IndexFileData> = IndexFileData$Runtime as unknown as MessageType<IndexFileData>;
(IndexFileData as MutableMessageType<IndexFileData>).runtime = proto3;
(IndexFileData as MutableMessageType<IndexFileData>).typeName = "aiserver.v1.IndexFileData";
(IndexFileData as MutableMessageType<IndexFileData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "workspace_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stage",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "order",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "nodes", kind: "message", T: IndexFileData_NodeData, repeated: true }
]);
var IndexFileData_NodeData$Runtime = (() => class _IndexFileData_NodeData extends Message<_IndexFileData_NodeData> {
  declare nodeId: string;
  declare stage: string;
  declare content: string;
  declare summary: string;
  constructor(data?: PartialMessage<_IndexFileData_NodeData>) {
    super();
    this.nodeId = "";
    this.stage = "";
    this.content = "";
    this.summary = "";
    proto3.util.initPartial(data, this as _IndexFileData_NodeData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IndexFileData_NodeData {
    return new _IndexFileData_NodeData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IndexFileData_NodeData {
    return new _IndexFileData_NodeData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IndexFileData_NodeData {
    return new _IndexFileData_NodeData().fromJsonString(jsonString, options);
  }
  static equals(a: _IndexFileData_NodeData | PlainMessage<_IndexFileData_NodeData> | undefined | null, b2: _IndexFileData_NodeData | PlainMessage<_IndexFileData_NodeData> | undefined | null): boolean {
    return proto3.util.equals(_IndexFileData_NodeData as unknown as MessageType<_IndexFileData_NodeData>, a, b2);
  }
})();
export type IndexFileData_NodeData = InstanceType<typeof IndexFileData_NodeData$Runtime>;
var IndexFileData_NodeData: MessageType<IndexFileData_NodeData> = IndexFileData_NodeData$Runtime as unknown as MessageType<IndexFileData_NodeData>;
(IndexFileData_NodeData as MutableMessageType<IndexFileData_NodeData>).runtime = proto3;
(IndexFileData_NodeData as MutableMessageType<IndexFileData_NodeData>).typeName = "aiserver.v1.IndexFileData.NodeData";
(IndexFileData_NodeData as MutableMessageType<IndexFileData_NodeData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "stage",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SerializedContextNode$Runtime = (() => class _SerializedContextNode extends Message<_SerializedContextNode> {
  declare workspaceRelativePath: string;
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare children: _SerializedContextNode[];
  declare nodeSnippets?: FileCodeSnippets;
  constructor(data?: PartialMessage<_SerializedContextNode>) {
    super();
    this.workspaceRelativePath = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.children = [];
    proto3.util.initPartial(data, this as _SerializedContextNode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SerializedContextNode {
    return new _SerializedContextNode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SerializedContextNode {
    return new _SerializedContextNode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SerializedContextNode {
    return new _SerializedContextNode().fromJsonString(jsonString, options);
  }
  static equals(a: _SerializedContextNode | PlainMessage<_SerializedContextNode> | undefined | null, b2: _SerializedContextNode | PlainMessage<_SerializedContextNode> | undefined | null): boolean {
    return proto3.util.equals(_SerializedContextNode as unknown as MessageType<_SerializedContextNode>, a, b2);
  }
})();
export type SerializedContextNode = InstanceType<typeof SerializedContextNode$Runtime>;
var SerializedContextNode: MessageType<SerializedContextNode> = SerializedContextNode$Runtime as unknown as MessageType<SerializedContextNode>;
(SerializedContextNode as MutableMessageType<SerializedContextNode>).runtime = proto3;
(SerializedContextNode as MutableMessageType<SerializedContextNode>).typeName = "aiserver.v1.SerializedContextNode";
(SerializedContextNode as MutableMessageType<SerializedContextNode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "workspace_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "children", kind: "message", T: SerializedContextNode, repeated: true },
  { no: 5, name: "node_snippets", kind: "message", T: FileCodeSnippets }
]);
var URIResolutionAttempt$Runtime = (() => class _URIResolutionAttempt extends Message<_URIResolutionAttempt> {
  declare workspaceRelativePath: string;
  declare nodeId: string;
  declare symbol?: CodeSymbolWithAction;
  constructor(data?: PartialMessage<_URIResolutionAttempt>) {
    super();
    this.workspaceRelativePath = "";
    this.nodeId = "";
    proto3.util.initPartial(data, this as _URIResolutionAttempt);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _URIResolutionAttempt {
    return new _URIResolutionAttempt().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _URIResolutionAttempt {
    return new _URIResolutionAttempt().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _URIResolutionAttempt {
    return new _URIResolutionAttempt().fromJsonString(jsonString, options);
  }
  static equals(a: _URIResolutionAttempt | PlainMessage<_URIResolutionAttempt> | undefined | null, b2: _URIResolutionAttempt | PlainMessage<_URIResolutionAttempt> | undefined | null): boolean {
    return proto3.util.equals(_URIResolutionAttempt as unknown as MessageType<_URIResolutionAttempt>, a, b2);
  }
})();
export type URIResolutionAttempt = InstanceType<typeof URIResolutionAttempt$Runtime>;
var URIResolutionAttempt: MessageType<URIResolutionAttempt> = URIResolutionAttempt$Runtime as unknown as MessageType<URIResolutionAttempt>;
(URIResolutionAttempt as MutableMessageType<URIResolutionAttempt>).runtime = proto3;
(URIResolutionAttempt as MutableMessageType<URIResolutionAttempt>).typeName = "aiserver.v1.URIResolutionAttempt";
(URIResolutionAttempt as MutableMessageType<URIResolutionAttempt>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "workspace_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "symbol", kind: "message", T: CodeSymbolWithAction }
]);
var URIResolutionResult$Runtime = (() => class _URIResolutionResult extends Message<_URIResolutionResult> {
  declare request?: URIResolutionAttempt;
  declare resolvedPaths: string[];
  constructor(data?: PartialMessage<_URIResolutionResult>) {
    super();
    this.resolvedPaths = [];
    proto3.util.initPartial(data, this as _URIResolutionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _URIResolutionResult {
    return new _URIResolutionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _URIResolutionResult {
    return new _URIResolutionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _URIResolutionResult {
    return new _URIResolutionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _URIResolutionResult | PlainMessage<_URIResolutionResult> | undefined | null, b2: _URIResolutionResult | PlainMessage<_URIResolutionResult> | undefined | null): boolean {
    return proto3.util.equals(_URIResolutionResult as unknown as MessageType<_URIResolutionResult>, a, b2);
  }
})();
export type URIResolutionResult = InstanceType<typeof URIResolutionResult$Runtime>;
var URIResolutionResult: MessageType<URIResolutionResult> = URIResolutionResult$Runtime as unknown as MessageType<URIResolutionResult>;
(URIResolutionResult as MutableMessageType<URIResolutionResult>).runtime = proto3;
(URIResolutionResult as MutableMessageType<URIResolutionResult>).typeName = "aiserver.v1.URIResolutionResult";
(URIResolutionResult as MutableMessageType<URIResolutionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: URIResolutionAttempt },
  { no: 2, name: "resolved_paths", kind: "scalar", T: 9, repeated: true }
]);
var ExtractPathsRequest$Runtime = (() => class _ExtractPathsRequest extends Message<_ExtractPathsRequest> {
  declare fileCodeSnippets?: FileCodeSnippets;
  constructor(data?: PartialMessage<_ExtractPathsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ExtractPathsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExtractPathsRequest {
    return new _ExtractPathsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExtractPathsRequest {
    return new _ExtractPathsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExtractPathsRequest {
    return new _ExtractPathsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ExtractPathsRequest | PlainMessage<_ExtractPathsRequest> | undefined | null, b2: _ExtractPathsRequest | PlainMessage<_ExtractPathsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ExtractPathsRequest as unknown as MessageType<_ExtractPathsRequest>, a, b2);
  }
})();
export type ExtractPathsRequest = InstanceType<typeof ExtractPathsRequest$Runtime>;
var ExtractPathsRequest: MessageType<ExtractPathsRequest> = ExtractPathsRequest$Runtime as unknown as MessageType<ExtractPathsRequest>;
(ExtractPathsRequest as MutableMessageType<ExtractPathsRequest>).runtime = proto3;
(ExtractPathsRequest as MutableMessageType<ExtractPathsRequest>).typeName = "aiserver.v1.ExtractPathsRequest";
(ExtractPathsRequest as MutableMessageType<ExtractPathsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_code_snippets", kind: "message", T: FileCodeSnippets }
]);
var ExtractPathsResponse$Runtime = (() => class _ExtractPathsResponse extends Message<_ExtractPathsResponse> {
  declare paths: CodeSymbolWithAction[];
  constructor(data?: PartialMessage<_ExtractPathsResponse>) {
    super();
    this.paths = [];
    proto3.util.initPartial(data, this as _ExtractPathsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExtractPathsResponse {
    return new _ExtractPathsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExtractPathsResponse {
    return new _ExtractPathsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExtractPathsResponse {
    return new _ExtractPathsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ExtractPathsResponse | PlainMessage<_ExtractPathsResponse> | undefined | null, b2: _ExtractPathsResponse | PlainMessage<_ExtractPathsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ExtractPathsResponse as unknown as MessageType<_ExtractPathsResponse>, a, b2);
  }
})();
export type ExtractPathsResponse = InstanceType<typeof ExtractPathsResponse$Runtime>;
var ExtractPathsResponse: MessageType<ExtractPathsResponse> = ExtractPathsResponse$Runtime as unknown as MessageType<ExtractPathsResponse>;
(ExtractPathsResponse as MutableMessageType<ExtractPathsResponse>).runtime = proto3;
(ExtractPathsResponse as MutableMessageType<ExtractPathsResponse>).typeName = "aiserver.v1.ExtractPathsResponse";
(ExtractPathsResponse as MutableMessageType<ExtractPathsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "paths", kind: "message", T: CodeSymbolWithAction, repeated: true }
]);
var SymbolActionResults$Runtime = (() => class _SymbolActionResults extends Message<_SymbolActionResults> {
  declare action?: CodeSymbolWithAction;
  declare references: SymbolActionResultReference[];
  constructor(data?: PartialMessage<_SymbolActionResults>) {
    super();
    this.references = [];
    proto3.util.initPartial(data, this as _SymbolActionResults);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SymbolActionResults {
    return new _SymbolActionResults().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SymbolActionResults {
    return new _SymbolActionResults().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SymbolActionResults {
    return new _SymbolActionResults().fromJsonString(jsonString, options);
  }
  static equals(a: _SymbolActionResults | PlainMessage<_SymbolActionResults> | undefined | null, b2: _SymbolActionResults | PlainMessage<_SymbolActionResults> | undefined | null): boolean {
    return proto3.util.equals(_SymbolActionResults as unknown as MessageType<_SymbolActionResults>, a, b2);
  }
})();
export type SymbolActionResults = InstanceType<typeof SymbolActionResults$Runtime>;
var SymbolActionResults: MessageType<SymbolActionResults> = SymbolActionResults$Runtime as unknown as MessageType<SymbolActionResults>;
(SymbolActionResults as MutableMessageType<SymbolActionResults>).runtime = proto3;
(SymbolActionResults as MutableMessageType<SymbolActionResults>).typeName = "aiserver.v1.SymbolActionResults";
(SymbolActionResults as MutableMessageType<SymbolActionResults>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "action", kind: "message", T: CodeSymbolWithAction },
  { no: 2, name: "references", kind: "message", T: SymbolActionResultReference, repeated: true }
]);
var SymbolActionResultReference$Runtime = (() => class _SymbolActionResultReference extends Message<_SymbolActionResultReference> {
  declare range?: SimpleRange;
  declare reference?: FileCodeSnippets;
  constructor(data?: PartialMessage<_SymbolActionResultReference>) {
    super();
    proto3.util.initPartial(data, this as _SymbolActionResultReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SymbolActionResultReference {
    return new _SymbolActionResultReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SymbolActionResultReference {
    return new _SymbolActionResultReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SymbolActionResultReference {
    return new _SymbolActionResultReference().fromJsonString(jsonString, options);
  }
  static equals(a: _SymbolActionResultReference | PlainMessage<_SymbolActionResultReference> | undefined | null, b2: _SymbolActionResultReference | PlainMessage<_SymbolActionResultReference> | undefined | null): boolean {
    return proto3.util.equals(_SymbolActionResultReference as unknown as MessageType<_SymbolActionResultReference>, a, b2);
  }
})();
export type SymbolActionResultReference = InstanceType<typeof SymbolActionResultReference$Runtime>;
var SymbolActionResultReference: MessageType<SymbolActionResultReference> = SymbolActionResultReference$Runtime as unknown as MessageType<SymbolActionResultReference>;
(SymbolActionResultReference as MutableMessageType<SymbolActionResultReference>).runtime = proto3;
(SymbolActionResultReference as MutableMessageType<SymbolActionResultReference>).typeName = "aiserver.v1.SymbolActionResultReference";
(SymbolActionResultReference as MutableMessageType<SymbolActionResultReference>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "range", kind: "message", T: SimpleRange },
  { no: 2, name: "reference", kind: "message", T: FileCodeSnippets }
]);
var FileCodeSnippets$Runtime = (() => class _FileCodeSnippets extends Message<_FileCodeSnippets> {
  declare relativeWorkspacePath: string;
  declare totalLines: number;
  declare snippets: CodeSnippet[];
  constructor(data?: PartialMessage<_FileCodeSnippets>) {
    super();
    this.relativeWorkspacePath = "";
    this.totalLines = 0;
    this.snippets = [];
    proto3.util.initPartial(data, this as _FileCodeSnippets);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileCodeSnippets {
    return new _FileCodeSnippets().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileCodeSnippets {
    return new _FileCodeSnippets().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileCodeSnippets {
    return new _FileCodeSnippets().fromJsonString(jsonString, options);
  }
  static equals(a: _FileCodeSnippets | PlainMessage<_FileCodeSnippets> | undefined | null, b2: _FileCodeSnippets | PlainMessage<_FileCodeSnippets> | undefined | null): boolean {
    return proto3.util.equals(_FileCodeSnippets as unknown as MessageType<_FileCodeSnippets>, a, b2);
  }
})();
export type FileCodeSnippets = InstanceType<typeof FileCodeSnippets$Runtime>;
var FileCodeSnippets: MessageType<FileCodeSnippets> = FileCodeSnippets$Runtime as unknown as MessageType<FileCodeSnippets>;
(FileCodeSnippets as MutableMessageType<FileCodeSnippets>).runtime = proto3;
(FileCodeSnippets as MutableMessageType<FileCodeSnippets>).typeName = "aiserver.v1.FileCodeSnippets";
(FileCodeSnippets as MutableMessageType<FileCodeSnippets>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "snippets", kind: "message", T: CodeSnippet, repeated: true }
]);
var CodeSnippet$Runtime = (() => class _CodeSnippet extends Message<_CodeSnippet> {
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare lines: string[];
  constructor(data?: PartialMessage<_CodeSnippet>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.lines = [];
    proto3.util.initPartial(data, this as _CodeSnippet);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeSnippet {
    return new _CodeSnippet().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeSnippet {
    return new _CodeSnippet().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeSnippet {
    return new _CodeSnippet().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeSnippet | PlainMessage<_CodeSnippet> | undefined | null, b2: _CodeSnippet | PlainMessage<_CodeSnippet> | undefined | null): boolean {
    return proto3.util.equals(_CodeSnippet as unknown as MessageType<_CodeSnippet>, a, b2);
  }
})();
export type CodeSnippet = InstanceType<typeof CodeSnippet$Runtime>;
var CodeSnippet: MessageType<CodeSnippet> = CodeSnippet$Runtime as unknown as MessageType<CodeSnippet>;
(CodeSnippet as MutableMessageType<CodeSnippet>).runtime = proto3;
(CodeSnippet as MutableMessageType<CodeSnippet>).typeName = "aiserver.v1.CodeSnippet";
(CodeSnippet as MutableMessageType<CodeSnippet>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true }
]);
var CodeSymbolWithAction$Runtime = (() => class _CodeSymbolWithAction extends Message<_CodeSymbolWithAction> {
  declare workspaceRelativePath: string;
  declare lineNumber: number;
  declare symbolStartColumn: number;
  declare symbolEndColumn: number;
  declare action: CodeSymbolWithAction_CodeSymbolAction;
  declare symbol: string;
  constructor(data?: PartialMessage<_CodeSymbolWithAction>) {
    super();
    this.workspaceRelativePath = "";
    this.lineNumber = 0;
    this.symbolStartColumn = 0;
    this.symbolEndColumn = 0;
    this.action = CodeSymbolWithAction_CodeSymbolAction.UNSPECIFIED;
    this.symbol = "";
    proto3.util.initPartial(data, this as _CodeSymbolWithAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeSymbolWithAction {
    return new _CodeSymbolWithAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeSymbolWithAction {
    return new _CodeSymbolWithAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeSymbolWithAction {
    return new _CodeSymbolWithAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeSymbolWithAction | PlainMessage<_CodeSymbolWithAction> | undefined | null, b2: _CodeSymbolWithAction | PlainMessage<_CodeSymbolWithAction> | undefined | null): boolean {
    return proto3.util.equals(_CodeSymbolWithAction as unknown as MessageType<_CodeSymbolWithAction>, a, b2);
  }
})();
export type CodeSymbolWithAction = InstanceType<typeof CodeSymbolWithAction$Runtime>;
var CodeSymbolWithAction: MessageType<CodeSymbolWithAction> = CodeSymbolWithAction$Runtime as unknown as MessageType<CodeSymbolWithAction>;
(CodeSymbolWithAction as MutableMessageType<CodeSymbolWithAction>).runtime = proto3;
(CodeSymbolWithAction as MutableMessageType<CodeSymbolWithAction>).typeName = "aiserver.v1.CodeSymbolWithAction";
(CodeSymbolWithAction as MutableMessageType<CodeSymbolWithAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "workspace_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "symbol_start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "symbol_end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "action", kind: "enum", T: proto3.getEnumType(CodeSymbolWithAction_CodeSymbolAction) },
  {
    no: 6,
    name: "symbol",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(CodeSymbolWithAction_CodeSymbolAction2) {
  CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["GO_TO_DEFINITION"] = 1] = "GO_TO_DEFINITION";
  CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["GO_TO_IMPLEMENTATION"] = 2] = "GO_TO_IMPLEMENTATION";
  CodeSymbolWithAction_CodeSymbolAction2[CodeSymbolWithAction_CodeSymbolAction2["REFERENCES"] = 3] = "REFERENCES";
})(CodeSymbolWithAction_CodeSymbolAction! || (CodeSymbolWithAction_CodeSymbolAction = {} as typeof CodeSymbolWithAction_CodeSymbolAction));
proto3.util.setEnumType(CodeSymbolWithAction_CodeSymbolAction, "aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [
  { no: 0, name: "CODE_SYMBOL_ACTION_UNSPECIFIED" },
  { no: 1, name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION" },
  { no: 2, name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION" },
  { no: 3, name: "CODE_SYMBOL_ACTION_REFERENCES" }
]);


export { CreateExperimentalIndexRequest, CreateExperimentalIndexResponse, ListExperimentalIndexFilesRequest, ListExperimentalIndexFilesResponse, ListenExperimentalIndexRequest, ListenExperimentalIndexResponse, ListenExperimentalIndexResponse_ReadyItem, ListenExperimentalIndexResponse_RegisterItem, ListenExperimentalIndexResponse_ChooseItem, ListenExperimentalIndexResponse_SummarizeItem, ListenExperimentalIndexResponse_ErrorItem, RegisterFileToIndexRequest, RegisterFileToIndexResponse, SetupIndexDependenciesRequest, SetupIndexDependenciesResponse, ComputeIndexTopoSortRequest, ComputeIndexTopoSortResponse, ChooseCodeReferencesRequest, ChooseCodeReferencesRequest_FileRequest, ChooseCodeReferencesRequest_NodeRequest, ChooseCodeReferencesResponse, ChooseCodeReferencesResponse_NodeResponse, ChooseCodeReferencesResponse_FileResponse, RegisterCodeReferencesRequest, RegisterCodeReferencesResponse, SummarizeWithReferencesRequest, SummarizeWithReferencesResponse, SummarizeWithReferencesResponse_Success, SummarizeWithReferencesResponse_Dependency, RequestReceivedResponse, ReflectionData, IndexFileData, IndexFileData_NodeData, SerializedContextNode, URIResolutionAttempt, URIResolutionResult, ExtractPathsRequest, ExtractPathsResponse, SymbolActionResults, SymbolActionResultReference, FileCodeSnippets, CodeSnippet, CodeSymbolWithAction, CodeSymbolWithAction_CodeSymbolAction };
