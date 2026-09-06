/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:170802-171517
 * Region SHA-256: 569febd8da811af3bce592e2e8eaa85ac04e94336c1ec9ce495badb4aa708716
 * AI Server closure exports: 18 messages + 2 enums = 20
 */
import { Message, proto3, Timestamp, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { SimpleRange } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type FSUploadErrorType = 0 | 1 | 2;
var FSUploadErrorType: {
  "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED": 0;
  "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT": 1;
  "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH": 2;
  0: "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED";
  1: "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT";
  2: "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH";
};
export type FSSyncErrorType = 0 | 1 | 2;
var FSSyncErrorType: {
  "FS_SYNC_ERROR_TYPE_UNSPECIFIED": 0;
  "FS_SYNC_ERROR_TYPE_NON_EXISTANT": 1;
  "FS_SYNC_ERROR_TYPE_HASH_MISMATCH": 2;
  0: "FS_SYNC_ERROR_TYPE_UNSPECIFIED";
  1: "FS_SYNC_ERROR_TYPE_NON_EXISTANT";
  2: "FS_SYNC_ERROR_TYPE_HASH_MISMATCH";
};
(function(FSUploadErrorType2) {
  FSUploadErrorType2[FSUploadErrorType2["FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"] = 0] = "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED";
  FSUploadErrorType2[FSUploadErrorType2["FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"] = 1] = "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT";
  FSUploadErrorType2[FSUploadErrorType2["FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH"] = 2] = "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH";
})(FSUploadErrorType! || (FSUploadErrorType = {} as typeof FSUploadErrorType));
proto3.util.setEnumType(FSUploadErrorType, "aiserver.v1.FSUploadErrorType", [
  { no: 0, name: "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED" },
  { no: 1, name: "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT" },
  { no: 2, name: "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH" }
]);
(function(FSSyncErrorType2) {
  FSSyncErrorType2[FSSyncErrorType2["FS_SYNC_ERROR_TYPE_UNSPECIFIED"] = 0] = "FS_SYNC_ERROR_TYPE_UNSPECIFIED";
  FSSyncErrorType2[FSSyncErrorType2["FS_SYNC_ERROR_TYPE_NON_EXISTANT"] = 1] = "FS_SYNC_ERROR_TYPE_NON_EXISTANT";
  FSSyncErrorType2[FSSyncErrorType2["FS_SYNC_ERROR_TYPE_HASH_MISMATCH"] = 2] = "FS_SYNC_ERROR_TYPE_HASH_MISMATCH";
})(FSSyncErrorType! || (FSSyncErrorType = {} as typeof FSSyncErrorType));
proto3.util.setEnumType(FSSyncErrorType, "aiserver.v1.FSSyncErrorType", [
  { no: 0, name: "FS_SYNC_ERROR_TYPE_UNSPECIFIED" },
  { no: 1, name: "FS_SYNC_ERROR_TYPE_NON_EXISTANT" },
  { no: 2, name: "FS_SYNC_ERROR_TYPE_HASH_MISMATCH" }
]);
var FSUploadFileRequest$Runtime = (() => class _FSUploadFileRequest extends Message<_FSUploadFileRequest> {
  declare uuid: string;
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare modelVersion: number;
  declare sha256Hash?: string;
  constructor(data?: PartialMessage<_FSUploadFileRequest>) {
    super();
    this.uuid = "";
    this.relativeWorkspacePath = "";
    this.contents = "";
    this.modelVersion = 0;
    proto3.util.initPartial(data, this as _FSUploadFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSUploadFileRequest {
    return new _FSUploadFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSUploadFileRequest {
    return new _FSUploadFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSUploadFileRequest {
    return new _FSUploadFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSUploadFileRequest | PlainMessage<_FSUploadFileRequest> | undefined | null, b2: _FSUploadFileRequest | PlainMessage<_FSUploadFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSUploadFileRequest as unknown as MessageType<_FSUploadFileRequest>, a, b2);
  }
})();
export type FSUploadFileRequest = InstanceType<typeof FSUploadFileRequest$Runtime>;
var FSUploadFileRequest: MessageType<FSUploadFileRequest> = FSUploadFileRequest$Runtime as unknown as MessageType<FSUploadFileRequest>;
(FSUploadFileRequest as MutableMessageType<FSUploadFileRequest>).runtime = proto3;
(FSUploadFileRequest as MutableMessageType<FSUploadFileRequest>).typeName = "aiserver.v1.FSUploadFileRequest";
(FSUploadFileRequest as MutableMessageType<FSUploadFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "sha256_hash", kind: "scalar", T: 9, opt: true }
]);
var FSUploadFileResponse$Runtime = (() => class _FSUploadFileResponse extends Message<_FSUploadFileResponse> {
  declare error: FSUploadErrorType;
  constructor(data?: PartialMessage<_FSUploadFileResponse>) {
    super();
    this.error = FSUploadErrorType.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED;
    proto3.util.initPartial(data, this as _FSUploadFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSUploadFileResponse {
    return new _FSUploadFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSUploadFileResponse {
    return new _FSUploadFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSUploadFileResponse {
    return new _FSUploadFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSUploadFileResponse | PlainMessage<_FSUploadFileResponse> | undefined | null, b2: _FSUploadFileResponse | PlainMessage<_FSUploadFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSUploadFileResponse as unknown as MessageType<_FSUploadFileResponse>, a, b2);
  }
})();
export type FSUploadFileResponse = InstanceType<typeof FSUploadFileResponse$Runtime>;
var FSUploadFileResponse: MessageType<FSUploadFileResponse> = FSUploadFileResponse$Runtime as unknown as MessageType<FSUploadFileResponse>;
(FSUploadFileResponse as MutableMessageType<FSUploadFileResponse>).runtime = proto3;
(FSUploadFileResponse as MutableMessageType<FSUploadFileResponse>).typeName = "aiserver.v1.FSUploadFileResponse";
(FSUploadFileResponse as MutableMessageType<FSUploadFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "enum", T: proto3.getEnumType(FSUploadErrorType) }
]);
var FilesyncUpdateWithModelVersion$Runtime = (() => class _FilesyncUpdateWithModelVersion extends Message<_FilesyncUpdateWithModelVersion> {
  declare modelVersion: number;
  declare relativeWorkspacePath: string;
  declare updates: SingleUpdateRequest[];
  declare expectedFileLength: number;
  constructor(data?: PartialMessage<_FilesyncUpdateWithModelVersion>) {
    super();
    this.modelVersion = 0;
    this.relativeWorkspacePath = "";
    this.updates = [];
    this.expectedFileLength = 0;
    proto3.util.initPartial(data, this as _FilesyncUpdateWithModelVersion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FilesyncUpdateWithModelVersion {
    return new _FilesyncUpdateWithModelVersion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FilesyncUpdateWithModelVersion {
    return new _FilesyncUpdateWithModelVersion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FilesyncUpdateWithModelVersion {
    return new _FilesyncUpdateWithModelVersion().fromJsonString(jsonString, options);
  }
  static equals(a: _FilesyncUpdateWithModelVersion | PlainMessage<_FilesyncUpdateWithModelVersion> | undefined | null, b2: _FilesyncUpdateWithModelVersion | PlainMessage<_FilesyncUpdateWithModelVersion> | undefined | null): boolean {
    return proto3.util.equals(_FilesyncUpdateWithModelVersion as unknown as MessageType<_FilesyncUpdateWithModelVersion>, a, b2);
  }
})();
export type FilesyncUpdateWithModelVersion = InstanceType<typeof FilesyncUpdateWithModelVersion$Runtime>;
var FilesyncUpdateWithModelVersion: MessageType<FilesyncUpdateWithModelVersion> = FilesyncUpdateWithModelVersion$Runtime as unknown as MessageType<FilesyncUpdateWithModelVersion>;
(FilesyncUpdateWithModelVersion as MutableMessageType<FilesyncUpdateWithModelVersion>).runtime = proto3;
(FilesyncUpdateWithModelVersion as MutableMessageType<FilesyncUpdateWithModelVersion>).typeName = "aiserver.v1.FilesyncUpdateWithModelVersion";
(FilesyncUpdateWithModelVersion as MutableMessageType<FilesyncUpdateWithModelVersion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "updates", kind: "message", T: SingleUpdateRequest, repeated: true },
  {
    no: 4,
    name: "expected_file_length",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SingleUpdateRequest$Runtime = (() => class _SingleUpdateRequest extends Message<_SingleUpdateRequest> {
  declare startPosition: number;
  declare endPosition: number;
  declare changeLength: number;
  declare replacedString: string;
  declare range?: SimpleRange;
  constructor(data?: PartialMessage<_SingleUpdateRequest>) {
    super();
    this.startPosition = 0;
    this.endPosition = 0;
    this.changeLength = 0;
    this.replacedString = "";
    proto3.util.initPartial(data, this as _SingleUpdateRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SingleUpdateRequest {
    return new _SingleUpdateRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SingleUpdateRequest {
    return new _SingleUpdateRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SingleUpdateRequest {
    return new _SingleUpdateRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SingleUpdateRequest | PlainMessage<_SingleUpdateRequest> | undefined | null, b2: _SingleUpdateRequest | PlainMessage<_SingleUpdateRequest> | undefined | null): boolean {
    return proto3.util.equals(_SingleUpdateRequest as unknown as MessageType<_SingleUpdateRequest>, a, b2);
  }
})();
export type SingleUpdateRequest = InstanceType<typeof SingleUpdateRequest$Runtime>;
var SingleUpdateRequest: MessageType<SingleUpdateRequest> = SingleUpdateRequest$Runtime as unknown as MessageType<SingleUpdateRequest>;
(SingleUpdateRequest as MutableMessageType<SingleUpdateRequest>).runtime = proto3;
(SingleUpdateRequest as MutableMessageType<SingleUpdateRequest>).typeName = "aiserver.v1.SingleUpdateRequest";
(SingleUpdateRequest as MutableMessageType<SingleUpdateRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_position",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_position",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "change_length",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "replaced_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "range", kind: "message", T: SimpleRange }
]);
var FSSyncFileRequest$Runtime = (() => class _FSSyncFileRequest extends Message<_FSSyncFileRequest> {
  declare uuid: string;
  declare relativeWorkspacePath: string;
  declare modelVersion: number;
  declare filesyncUpdates: FilesyncUpdateWithModelVersion[];
  declare sha256Hash: string;
  constructor(data?: PartialMessage<_FSSyncFileRequest>) {
    super();
    this.uuid = "";
    this.relativeWorkspacePath = "";
    this.modelVersion = 0;
    this.filesyncUpdates = [];
    this.sha256Hash = "";
    proto3.util.initPartial(data, this as _FSSyncFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSSyncFileRequest {
    return new _FSSyncFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSSyncFileRequest {
    return new _FSSyncFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSSyncFileRequest {
    return new _FSSyncFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSSyncFileRequest | PlainMessage<_FSSyncFileRequest> | undefined | null, b2: _FSSyncFileRequest | PlainMessage<_FSSyncFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSSyncFileRequest as unknown as MessageType<_FSSyncFileRequest>, a, b2);
  }
})();
export type FSSyncFileRequest = InstanceType<typeof FSSyncFileRequest$Runtime>;
var FSSyncFileRequest: MessageType<FSSyncFileRequest> = FSSyncFileRequest$Runtime as unknown as MessageType<FSSyncFileRequest>;
(FSSyncFileRequest as MutableMessageType<FSSyncFileRequest>).runtime = proto3;
(FSSyncFileRequest as MutableMessageType<FSSyncFileRequest>).typeName = "aiserver.v1.FSSyncFileRequest";
(FSSyncFileRequest as MutableMessageType<FSSyncFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "filesync_updates", kind: "message", T: FilesyncUpdateWithModelVersion, repeated: true },
  {
    no: 5,
    name: "sha256_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FSSyncFileResponse$Runtime = (() => class _FSSyncFileResponse extends Message<_FSSyncFileResponse> {
  declare error: FSSyncErrorType;
  constructor(data?: PartialMessage<_FSSyncFileResponse>) {
    super();
    this.error = FSSyncErrorType.FS_SYNC_ERROR_TYPE_UNSPECIFIED;
    proto3.util.initPartial(data, this as _FSSyncFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSSyncFileResponse {
    return new _FSSyncFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSSyncFileResponse {
    return new _FSSyncFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSSyncFileResponse {
    return new _FSSyncFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSSyncFileResponse | PlainMessage<_FSSyncFileResponse> | undefined | null, b2: _FSSyncFileResponse | PlainMessage<_FSSyncFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSSyncFileResponse as unknown as MessageType<_FSSyncFileResponse>, a, b2);
  }
})();
export type FSSyncFileResponse = InstanceType<typeof FSSyncFileResponse$Runtime>;
var FSSyncFileResponse: MessageType<FSSyncFileResponse> = FSSyncFileResponse$Runtime as unknown as MessageType<FSSyncFileResponse>;
(FSSyncFileResponse as MutableMessageType<FSSyncFileResponse>).runtime = proto3;
(FSSyncFileResponse as MutableMessageType<FSSyncFileResponse>).typeName = "aiserver.v1.FSSyncFileResponse";
(FSSyncFileResponse as MutableMessageType<FSSyncFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "enum", T: proto3.getEnumType(FSSyncErrorType) }
]);
var FSIsEnabledForUserRequest$Runtime = (() => class _FSIsEnabledForUserRequest extends Message<_FSIsEnabledForUserRequest> {
  declare uuid: string;
  constructor(data?: PartialMessage<_FSIsEnabledForUserRequest>) {
    super();
    this.uuid = "";
    proto3.util.initPartial(data, this as _FSIsEnabledForUserRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSIsEnabledForUserRequest {
    return new _FSIsEnabledForUserRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSIsEnabledForUserRequest {
    return new _FSIsEnabledForUserRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSIsEnabledForUserRequest {
    return new _FSIsEnabledForUserRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSIsEnabledForUserRequest | PlainMessage<_FSIsEnabledForUserRequest> | undefined | null, b2: _FSIsEnabledForUserRequest | PlainMessage<_FSIsEnabledForUserRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSIsEnabledForUserRequest as unknown as MessageType<_FSIsEnabledForUserRequest>, a, b2);
  }
})();
export type FSIsEnabledForUserRequest = InstanceType<typeof FSIsEnabledForUserRequest$Runtime>;
var FSIsEnabledForUserRequest: MessageType<FSIsEnabledForUserRequest> = FSIsEnabledForUserRequest$Runtime as unknown as MessageType<FSIsEnabledForUserRequest>;
(FSIsEnabledForUserRequest as MutableMessageType<FSIsEnabledForUserRequest>).runtime = proto3;
(FSIsEnabledForUserRequest as MutableMessageType<FSIsEnabledForUserRequest>).typeName = "aiserver.v1.FSIsEnabledForUserRequest";
(FSIsEnabledForUserRequest as MutableMessageType<FSIsEnabledForUserRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FSIsEnabledForUserResponse$Runtime = (() => class _FSIsEnabledForUserResponse extends Message<_FSIsEnabledForUserResponse> {
  declare enabled: boolean;
  constructor(data?: PartialMessage<_FSIsEnabledForUserResponse>) {
    super();
    this.enabled = false;
    proto3.util.initPartial(data, this as _FSIsEnabledForUserResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSIsEnabledForUserResponse {
    return new _FSIsEnabledForUserResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSIsEnabledForUserResponse {
    return new _FSIsEnabledForUserResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSIsEnabledForUserResponse {
    return new _FSIsEnabledForUserResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSIsEnabledForUserResponse | PlainMessage<_FSIsEnabledForUserResponse> | undefined | null, b2: _FSIsEnabledForUserResponse | PlainMessage<_FSIsEnabledForUserResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSIsEnabledForUserResponse as unknown as MessageType<_FSIsEnabledForUserResponse>, a, b2);
  }
})();
export type FSIsEnabledForUserResponse = InstanceType<typeof FSIsEnabledForUserResponse$Runtime>;
var FSIsEnabledForUserResponse: MessageType<FSIsEnabledForUserResponse> = FSIsEnabledForUserResponse$Runtime as unknown as MessageType<FSIsEnabledForUserResponse>;
(FSIsEnabledForUserResponse as MutableMessageType<FSIsEnabledForUserResponse>).runtime = proto3;
(FSIsEnabledForUserResponse as MutableMessageType<FSIsEnabledForUserResponse>).typeName = "aiserver.v1.FSIsEnabledForUserResponse";
(FSIsEnabledForUserResponse as MutableMessageType<FSIsEnabledForUserResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var FSGetFileContentsRequest$Runtime = (() => class _FSGetFileContentsRequest extends Message<_FSGetFileContentsRequest> {
  declare uuid: string;
  declare authId: string;
  declare relativeWorkspacePath: string;
  declare modelVersion: number;
  declare filesyncUpdates: FilesyncUpdateWithModelVersion[];
  declare sha256Hash?: string;
  declare earliestTime?: Timestamp;
  constructor(data?: PartialMessage<_FSGetFileContentsRequest>) {
    super();
    this.uuid = "";
    this.authId = "";
    this.relativeWorkspacePath = "";
    this.modelVersion = 0;
    this.filesyncUpdates = [];
    proto3.util.initPartial(data, this as _FSGetFileContentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSGetFileContentsRequest {
    return new _FSGetFileContentsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSGetFileContentsRequest {
    return new _FSGetFileContentsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSGetFileContentsRequest {
    return new _FSGetFileContentsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSGetFileContentsRequest | PlainMessage<_FSGetFileContentsRequest> | undefined | null, b2: _FSGetFileContentsRequest | PlainMessage<_FSGetFileContentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSGetFileContentsRequest as unknown as MessageType<_FSGetFileContentsRequest>, a, b2);
  }
})();
export type FSGetFileContentsRequest = InstanceType<typeof FSGetFileContentsRequest$Runtime>;
var FSGetFileContentsRequest: MessageType<FSGetFileContentsRequest> = FSGetFileContentsRequest$Runtime as unknown as MessageType<FSGetFileContentsRequest>;
(FSGetFileContentsRequest as MutableMessageType<FSGetFileContentsRequest>).runtime = proto3;
(FSGetFileContentsRequest as MutableMessageType<FSGetFileContentsRequest>).typeName = "aiserver.v1.FSGetFileContentsRequest";
(FSGetFileContentsRequest as MutableMessageType<FSGetFileContentsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "filesync_updates", kind: "message", T: FilesyncUpdateWithModelVersion, repeated: true },
  { no: 6, name: "sha256_hash", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "earliest_time", kind: "message", T: Timestamp, opt: true }
]);
var FSGetFileContentsResponse$Runtime = (() => class _FSGetFileContentsResponse extends Message<_FSGetFileContentsResponse> {
  declare contents: string;
  declare sha256Hash?: string;
  constructor(data?: PartialMessage<_FSGetFileContentsResponse>) {
    super();
    this.contents = "";
    proto3.util.initPartial(data, this as _FSGetFileContentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSGetFileContentsResponse {
    return new _FSGetFileContentsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSGetFileContentsResponse {
    return new _FSGetFileContentsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSGetFileContentsResponse {
    return new _FSGetFileContentsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSGetFileContentsResponse | PlainMessage<_FSGetFileContentsResponse> | undefined | null, b2: _FSGetFileContentsResponse | PlainMessage<_FSGetFileContentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSGetFileContentsResponse as unknown as MessageType<_FSGetFileContentsResponse>, a, b2);
  }
})();
export type FSGetFileContentsResponse = InstanceType<typeof FSGetFileContentsResponse$Runtime>;
var FSGetFileContentsResponse: MessageType<FSGetFileContentsResponse> = FSGetFileContentsResponse$Runtime as unknown as MessageType<FSGetFileContentsResponse>;
(FSGetFileContentsResponse as MutableMessageType<FSGetFileContentsResponse>).runtime = proto3;
(FSGetFileContentsResponse as MutableMessageType<FSGetFileContentsResponse>).typeName = "aiserver.v1.FSGetFileContentsResponse";
(FSGetFileContentsResponse as MutableMessageType<FSGetFileContentsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "sha256_hash", kind: "scalar", T: 9, opt: true }
]);
var FileRequest$Runtime = (() => class _FileRequest extends Message<_FileRequest> {
  declare relativeWorkspacePath: string;
  declare requestedVersion?: number;
  declare sha256Hash?: string;
  declare required: boolean;
  declare earliestTime?: Timestamp;
  constructor(data?: PartialMessage<_FileRequest>) {
    super();
    this.relativeWorkspacePath = "";
    this.required = false;
    proto3.util.initPartial(data, this as _FileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileRequest {
    return new _FileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileRequest {
    return new _FileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileRequest {
    return new _FileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FileRequest | PlainMessage<_FileRequest> | undefined | null, b2: _FileRequest | PlainMessage<_FileRequest> | undefined | null): boolean {
    return proto3.util.equals(_FileRequest as unknown as MessageType<_FileRequest>, a, b2);
  }
})();
export type FileRequest = InstanceType<typeof FileRequest$Runtime>;
var FileRequest: MessageType<FileRequest> = FileRequest$Runtime as unknown as MessageType<FileRequest>;
(FileRequest as MutableMessageType<FileRequest>).runtime = proto3;
(FileRequest as MutableMessageType<FileRequest>).typeName = "aiserver.v1.FileRequest";
(FileRequest as MutableMessageType<FileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "requested_version", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "sha256_hash", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "required",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "earliest_time", kind: "message", T: Timestamp, opt: true }
]);
var FSGetMultiFileContentsRequest$Runtime = (() => class _FSGetMultiFileContentsRequest extends Message<_FSGetMultiFileContentsRequest> {
  declare authId: string;
  declare filesyncUpdates: FilesyncUpdateWithModelVersion[];
  declare fileRequests: FileRequest[];
  declare getAllRecentFiles: boolean;
  constructor(data?: PartialMessage<_FSGetMultiFileContentsRequest>) {
    super();
    this.authId = "";
    this.filesyncUpdates = [];
    this.fileRequests = [];
    this.getAllRecentFiles = false;
    proto3.util.initPartial(data, this as _FSGetMultiFileContentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSGetMultiFileContentsRequest {
    return new _FSGetMultiFileContentsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSGetMultiFileContentsRequest {
    return new _FSGetMultiFileContentsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSGetMultiFileContentsRequest {
    return new _FSGetMultiFileContentsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSGetMultiFileContentsRequest | PlainMessage<_FSGetMultiFileContentsRequest> | undefined | null, b2: _FSGetMultiFileContentsRequest | PlainMessage<_FSGetMultiFileContentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSGetMultiFileContentsRequest as unknown as MessageType<_FSGetMultiFileContentsRequest>, a, b2);
  }
})();
export type FSGetMultiFileContentsRequest = InstanceType<typeof FSGetMultiFileContentsRequest$Runtime>;
var FSGetMultiFileContentsRequest: MessageType<FSGetMultiFileContentsRequest> = FSGetMultiFileContentsRequest$Runtime as unknown as MessageType<FSGetMultiFileContentsRequest>;
(FSGetMultiFileContentsRequest as MutableMessageType<FSGetMultiFileContentsRequest>).runtime = proto3;
(FSGetMultiFileContentsRequest as MutableMessageType<FSGetMultiFileContentsRequest>).typeName = "aiserver.v1.FSGetMultiFileContentsRequest";
(FSGetMultiFileContentsRequest as MutableMessageType<FSGetMultiFileContentsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "filesync_updates", kind: "message", T: FilesyncUpdateWithModelVersion, repeated: true },
  { no: 3, name: "file_requests", kind: "message", T: FileRequest, repeated: true },
  {
    no: 4,
    name: "get_all_recent_files",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var FileRetrieved$Runtime = (() => class _FileRetrieved extends Message<_FileRetrieved> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare modelVersion: number;
  declare lastModified?: Timestamp;
  constructor(data?: PartialMessage<_FileRetrieved>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    this.modelVersion = 0;
    proto3.util.initPartial(data, this as _FileRetrieved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileRetrieved {
    return new _FileRetrieved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileRetrieved {
    return new _FileRetrieved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileRetrieved {
    return new _FileRetrieved().fromJsonString(jsonString, options);
  }
  static equals(a: _FileRetrieved | PlainMessage<_FileRetrieved> | undefined | null, b2: _FileRetrieved | PlainMessage<_FileRetrieved> | undefined | null): boolean {
    return proto3.util.equals(_FileRetrieved as unknown as MessageType<_FileRetrieved>, a, b2);
  }
})();
export type FileRetrieved = InstanceType<typeof FileRetrieved$Runtime>;
var FileRetrieved: MessageType<FileRetrieved> = FileRetrieved$Runtime as unknown as MessageType<FileRetrieved>;
(FileRetrieved as MutableMessageType<FileRetrieved>).runtime = proto3;
(FileRetrieved as MutableMessageType<FileRetrieved>).typeName = "aiserver.v1.FileRetrieved";
(FileRetrieved as MutableMessageType<FileRetrieved>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "last_modified", kind: "message", T: Timestamp }
]);
var FSGetMultiFileContentsResponse$Runtime = (() => class _FSGetMultiFileContentsResponse extends Message<_FSGetMultiFileContentsResponse> {
  declare files: FileRetrieved[];
  constructor(data?: PartialMessage<_FSGetMultiFileContentsResponse>) {
    super();
    this.files = [];
    proto3.util.initPartial(data, this as _FSGetMultiFileContentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSGetMultiFileContentsResponse {
    return new _FSGetMultiFileContentsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSGetMultiFileContentsResponse {
    return new _FSGetMultiFileContentsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSGetMultiFileContentsResponse {
    return new _FSGetMultiFileContentsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSGetMultiFileContentsResponse | PlainMessage<_FSGetMultiFileContentsResponse> | undefined | null, b2: _FSGetMultiFileContentsResponse | PlainMessage<_FSGetMultiFileContentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSGetMultiFileContentsResponse as unknown as MessageType<_FSGetMultiFileContentsResponse>, a, b2);
  }
})();
export type FSGetMultiFileContentsResponse = InstanceType<typeof FSGetMultiFileContentsResponse$Runtime>;
var FSGetMultiFileContentsResponse: MessageType<FSGetMultiFileContentsResponse> = FSGetMultiFileContentsResponse$Runtime as unknown as MessageType<FSGetMultiFileContentsResponse>;
(FSGetMultiFileContentsResponse as MutableMessageType<FSGetMultiFileContentsResponse>).runtime = proto3;
(FSGetMultiFileContentsResponse as MutableMessageType<FSGetMultiFileContentsResponse>).typeName = "aiserver.v1.FSGetMultiFileContentsResponse";
(FSGetMultiFileContentsResponse as MutableMessageType<FSGetMultiFileContentsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: FileRetrieved, repeated: true }
]);
var FSInternalHealthCheckRequest$Runtime = (() => class _FSInternalHealthCheckRequest extends Message<_FSInternalHealthCheckRequest> {
  declare fromServer?: boolean;
  constructor(data?: PartialMessage<_FSInternalHealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this as _FSInternalHealthCheckRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSInternalHealthCheckRequest {
    return new _FSInternalHealthCheckRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSInternalHealthCheckRequest {
    return new _FSInternalHealthCheckRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSInternalHealthCheckRequest {
    return new _FSInternalHealthCheckRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSInternalHealthCheckRequest | PlainMessage<_FSInternalHealthCheckRequest> | undefined | null, b2: _FSInternalHealthCheckRequest | PlainMessage<_FSInternalHealthCheckRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSInternalHealthCheckRequest as unknown as MessageType<_FSInternalHealthCheckRequest>, a, b2);
  }
})();
export type FSInternalHealthCheckRequest = InstanceType<typeof FSInternalHealthCheckRequest$Runtime>;
var FSInternalHealthCheckRequest: MessageType<FSInternalHealthCheckRequest> = FSInternalHealthCheckRequest$Runtime as unknown as MessageType<FSInternalHealthCheckRequest>;
(FSInternalHealthCheckRequest as MutableMessageType<FSInternalHealthCheckRequest>).runtime = proto3;
(FSInternalHealthCheckRequest as MutableMessageType<FSInternalHealthCheckRequest>).typeName = "aiserver.v1.FSInternalHealthCheckRequest";
(FSInternalHealthCheckRequest as MutableMessageType<FSInternalHealthCheckRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "from_server", kind: "scalar", T: 8, opt: true }
]);
var FSInternalHealthCheckResponse$Runtime = (() => class _FSInternalHealthCheckResponse extends Message<_FSInternalHealthCheckResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_FSInternalHealthCheckResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _FSInternalHealthCheckResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSInternalHealthCheckResponse {
    return new _FSInternalHealthCheckResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSInternalHealthCheckResponse {
    return new _FSInternalHealthCheckResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSInternalHealthCheckResponse {
    return new _FSInternalHealthCheckResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSInternalHealthCheckResponse | PlainMessage<_FSInternalHealthCheckResponse> | undefined | null, b2: _FSInternalHealthCheckResponse | PlainMessage<_FSInternalHealthCheckResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSInternalHealthCheckResponse as unknown as MessageType<_FSInternalHealthCheckResponse>, a, b2);
  }
})();
export type FSInternalHealthCheckResponse = InstanceType<typeof FSInternalHealthCheckResponse$Runtime>;
var FSInternalHealthCheckResponse: MessageType<FSInternalHealthCheckResponse> = FSInternalHealthCheckResponse$Runtime as unknown as MessageType<FSInternalHealthCheckResponse>;
(FSInternalHealthCheckResponse as MutableMessageType<FSInternalHealthCheckResponse>).runtime = proto3;
(FSInternalHealthCheckResponse as MutableMessageType<FSInternalHealthCheckResponse>).typeName = "aiserver.v1.FSInternalHealthCheckResponse";
(FSInternalHealthCheckResponse as MutableMessageType<FSInternalHealthCheckResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var FSConfigRequest$Runtime = (() => class _FSConfigRequest extends Message<_FSConfigRequest> {
  constructor(data?: PartialMessage<_FSConfigRequest>) {
    super();
    proto3.util.initPartial(data, this as _FSConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSConfigRequest {
    return new _FSConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSConfigRequest {
    return new _FSConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSConfigRequest {
    return new _FSConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FSConfigRequest | PlainMessage<_FSConfigRequest> | undefined | null, b2: _FSConfigRequest | PlainMessage<_FSConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_FSConfigRequest as unknown as MessageType<_FSConfigRequest>, a, b2);
  }
})();
export type FSConfigRequest = InstanceType<typeof FSConfigRequest$Runtime>;
var FSConfigRequest: MessageType<FSConfigRequest> = FSConfigRequest$Runtime as unknown as MessageType<FSConfigRequest>;
(FSConfigRequest as MutableMessageType<FSConfigRequest>).runtime = proto3;
(FSConfigRequest as MutableMessageType<FSConfigRequest>).typeName = "aiserver.v1.FSConfigRequest";
(FSConfigRequest as MutableMessageType<FSConfigRequest>).fields = proto3.util.newFieldList(() => []);
var FSConfigResponse$Runtime = (() => class _FSConfigResponse extends Message<_FSConfigResponse> {
  declare checkFilesyncHashPercent: number;
  declare rateLimiterBreakerResetTimeMs?: number;
  declare rateLimiterRps?: number;
  declare rateLimiterBurstCapacity?: number;
  declare maxRecentUpdatesStored?: number;
  declare maxModelVersionCacheSize?: number;
  declare maxFileSizeToSyncBytes?: number;
  declare syncRetryMaxAttempts?: number;
  declare syncRetryInitialDelayMs?: number;
  declare syncRetryTimeMultiplier?: number;
  declare fileSyncStatusMaxCacheSize?: number;
  declare successiveSyncsRequiredForReliance?: number;
  declare extraSuccessfulSyncsNeededAfterErrors?: number;
  declare bigChangeStrippingThresholdBytes?: number;
  declare lastNUpdatesToSend?: number;
  declare fileSyncStatusTtlMs?: number;
  declare syncDebounceMs?: number;
  declare syncUpdateThreshold?: number;
  constructor(data?: PartialMessage<_FSConfigResponse>) {
    super();
    this.checkFilesyncHashPercent = 0;
    proto3.util.initPartial(data, this as _FSConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FSConfigResponse {
    return new _FSConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FSConfigResponse {
    return new _FSConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FSConfigResponse {
    return new _FSConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FSConfigResponse | PlainMessage<_FSConfigResponse> | undefined | null, b2: _FSConfigResponse | PlainMessage<_FSConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_FSConfigResponse as unknown as MessageType<_FSConfigResponse>, a, b2);
  }
})();
export type FSConfigResponse = InstanceType<typeof FSConfigResponse$Runtime>;
var FSConfigResponse: MessageType<FSConfigResponse> = FSConfigResponse$Runtime as unknown as MessageType<FSConfigResponse>;
(FSConfigResponse as MutableMessageType<FSConfigResponse>).runtime = proto3;
(FSConfigResponse as MutableMessageType<FSConfigResponse>).typeName = "aiserver.v1.FSConfigResponse";
(FSConfigResponse as MutableMessageType<FSConfigResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "check_filesync_hash_percent",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 2, name: "rate_limiter_breaker_reset_time_ms", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "rate_limiter_rps", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "rate_limiter_burst_capacity", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "max_recent_updates_stored", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "max_model_version_cache_size", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "max_file_size_to_sync_bytes", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "sync_retry_max_attempts", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "sync_retry_initial_delay_ms", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "sync_retry_time_multiplier", kind: "scalar", T: 5, opt: true },
  { no: 11, name: "file_sync_status_max_cache_size", kind: "scalar", T: 5, opt: true },
  { no: 12, name: "successive_syncs_required_for_reliance", kind: "scalar", T: 5, opt: true },
  { no: 13, name: "extra_successful_syncs_needed_after_errors", kind: "scalar", T: 5, opt: true },
  { no: 14, name: "big_change_stripping_threshold_bytes", kind: "scalar", T: 5, opt: true },
  { no: 15, name: "last_n_updates_to_send", kind: "scalar", T: 5, opt: true },
  { no: 16, name: "file_sync_status_ttl_ms", kind: "scalar", T: 5, opt: true },
  { no: 17, name: "sync_debounce_ms", kind: "scalar", T: 5, opt: true },
  { no: 18, name: "sync_update_threshold", kind: "scalar", T: 5, opt: true }
]);


export { FSUploadErrorType, FSSyncErrorType, FSUploadFileRequest, FSUploadFileResponse, FilesyncUpdateWithModelVersion, SingleUpdateRequest, FSSyncFileRequest, FSSyncFileResponse, FSIsEnabledForUserRequest, FSIsEnabledForUserResponse, FSGetFileContentsRequest, FSGetFileContentsResponse, FileRequest, FSGetMultiFileContentsRequest, FileRetrieved, FSGetMultiFileContentsResponse, FSInternalHealthCheckRequest, FSInternalHealthCheckResponse, FSConfigRequest, FSConfigResponse };
