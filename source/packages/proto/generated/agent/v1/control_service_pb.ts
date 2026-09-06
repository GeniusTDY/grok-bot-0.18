/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:532716-534900
 * Region SHA-256: 0ceb35b5355de33cd192afdd859cd7dd9f1095cdb6483d38c4bcbf8e44186ba9
 * B11 exports: 65 messages + 8 enums + 0 services = 73
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { GetDiffRequest, GetDiffResponse } from "../../aiserver/v1/utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type EntryType = 0 | 1 | 2 | 3;
var EntryType: {
  "UNSPECIFIED": 0;
  "FILE": 1;
  "DIRECTORY": 2;
  "SYMLINK": 3;
  0: "UNSPECIFIED";
  1: "FILE";
  2: "DIRECTORY";
  3: "SYMLINK";
};
export type BatchGetDiffErrorKind = 0 | 1 | 2 | 3 | 4 | 5;
var BatchGetDiffErrorKind: {
  "UNSPECIFIED": 0;
  "FETCH_FAILED": 1;
  "DIFF_FAILED": 2;
  "UNAUTHENTICATED": 3;
  "NOT_FOUND": 4;
  "INTERNAL": 5;
  0: "UNSPECIFIED";
  1: "FETCH_FAILED";
  2: "DIFF_FAILED";
  3: "UNAUTHENTICATED";
  4: "NOT_FOUND";
  5: "INTERNAL";
};
export type ArtifactUploadStatus = 0 | 1 | 2 | 3 | 4;
var ArtifactUploadStatus: {
  "UNSPECIFIED": 0;
  "NOT_STARTED": 1;
  "IN_PROGRESS": 2;
  "COMPLETED": 3;
  "FAILED": 4;
  0: "UNSPECIFIED";
  1: "NOT_STARTED";
  2: "IN_PROGRESS";
  3: "COMPLETED";
  4: "FAILED";
};
export type ArtifactPathErrorKind = 0 | 1 | 2 | 3 | 4 | 5;
var ArtifactPathErrorKind: {
  "UNSPECIFIED": 0;
  "MISSING": 1;
  "PERMISSION": 2;
  "NOT_A_FILE": 3;
  "INVALID_PATH": 4;
  "UNKNOWN": 5;
  0: "UNSPECIFIED";
  1: "MISSING";
  2: "PERMISSION";
  3: "NOT_A_FILE";
  4: "INVALID_PATH";
  5: "UNKNOWN";
};
export type ArtifactRootKind = 0 | 1 | 2;
var ArtifactRootKind: {
  "UNSPECIFIED": 0;
  "LOCAL": 1;
  "AGENT_STORE_BACKED": 2;
  0: "UNSPECIFIED";
  1: "LOCAL";
  2: "AGENT_STORE_BACKED";
};
export type ArtifactUploadDispatchStatus = 0 | 1 | 2 | 3;
var ArtifactUploadDispatchStatus: {
  "UNSPECIFIED": 0;
  "ACCEPTED": 1;
  "REJECTED": 2;
  "SKIPPED_ALREADY_IN_PROGRESS": 3;
  0: "UNSPECIFIED";
  1: "ACCEPTED";
  2: "REJECTED";
  3: "SKIPPED_ALREADY_IN_PROGRESS";
};
export type PersistArtifactToAgentStoreStatus = 0 | 1 | 2;
var PersistArtifactToAgentStoreStatus: {
  "UNSPECIFIED": 0;
  "PERSISTED": 1;
  "REJECTED": 2;
  0: "UNSPECIFIED";
  1: "PERSISTED";
  2: "REJECTED";
};
export type ArtifactRestoreStatus = 0 | 1 | 2 | 3;
var ArtifactRestoreStatus: {
  "UNSPECIFIED": 0;
  "RESTORED": 1;
  "SKIPPED_ALREADY_EXISTS": 2;
  "REJECTED": 3;
  0: "UNSPECIFIED";
  1: "RESTORED";
  2: "SKIPPED_ALREADY_EXISTS";
  3: "REJECTED";
};
(function(EntryType3) {
  EntryType3[EntryType3["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EntryType3[EntryType3["FILE"] = 1] = "FILE";
  EntryType3[EntryType3["DIRECTORY"] = 2] = "DIRECTORY";
  EntryType3[EntryType3["SYMLINK"] = 3] = "SYMLINK";
})(EntryType! || (EntryType = {} as typeof EntryType));
proto3.util.setEnumType(EntryType, "agent.v1.EntryType", [
  { no: 0, name: "ENTRY_TYPE_UNSPECIFIED" },
  { no: 1, name: "ENTRY_TYPE_FILE" },
  { no: 2, name: "ENTRY_TYPE_DIRECTORY" },
  { no: 3, name: "ENTRY_TYPE_SYMLINK" }
]);
(function(BatchGetDiffErrorKind2) {
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["FETCH_FAILED"] = 1] = "FETCH_FAILED";
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["DIFF_FAILED"] = 2] = "DIFF_FAILED";
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["UNAUTHENTICATED"] = 3] = "UNAUTHENTICATED";
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["NOT_FOUND"] = 4] = "NOT_FOUND";
  BatchGetDiffErrorKind2[BatchGetDiffErrorKind2["INTERNAL"] = 5] = "INTERNAL";
})(BatchGetDiffErrorKind! || (BatchGetDiffErrorKind = {} as typeof BatchGetDiffErrorKind));
proto3.util.setEnumType(BatchGetDiffErrorKind, "agent.v1.BatchGetDiffErrorKind", [
  { no: 0, name: "BATCH_GET_DIFF_ERROR_KIND_UNSPECIFIED" },
  { no: 1, name: "BATCH_GET_DIFF_ERROR_KIND_FETCH_FAILED" },
  { no: 2, name: "BATCH_GET_DIFF_ERROR_KIND_DIFF_FAILED" },
  { no: 3, name: "BATCH_GET_DIFF_ERROR_KIND_UNAUTHENTICATED" },
  { no: 4, name: "BATCH_GET_DIFF_ERROR_KIND_NOT_FOUND" },
  { no: 5, name: "BATCH_GET_DIFF_ERROR_KIND_INTERNAL" }
]);
(function(ArtifactUploadStatus2) {
  ArtifactUploadStatus2[ArtifactUploadStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ArtifactUploadStatus2[ArtifactUploadStatus2["NOT_STARTED"] = 1] = "NOT_STARTED";
  ArtifactUploadStatus2[ArtifactUploadStatus2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
  ArtifactUploadStatus2[ArtifactUploadStatus2["COMPLETED"] = 3] = "COMPLETED";
  ArtifactUploadStatus2[ArtifactUploadStatus2["FAILED"] = 4] = "FAILED";
})(ArtifactUploadStatus! || (ArtifactUploadStatus = {} as typeof ArtifactUploadStatus));
proto3.util.setEnumType(ArtifactUploadStatus, "agent.v1.ArtifactUploadStatus", [
  { no: 0, name: "ARTIFACT_UPLOAD_STATUS_UNSPECIFIED" },
  { no: 1, name: "ARTIFACT_UPLOAD_STATUS_NOT_STARTED" },
  { no: 2, name: "ARTIFACT_UPLOAD_STATUS_IN_PROGRESS" },
  { no: 3, name: "ARTIFACT_UPLOAD_STATUS_COMPLETED" },
  { no: 4, name: "ARTIFACT_UPLOAD_STATUS_FAILED" }
]);
(function(ArtifactPathErrorKind2) {
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["MISSING"] = 1] = "MISSING";
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["PERMISSION"] = 2] = "PERMISSION";
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["NOT_A_FILE"] = 3] = "NOT_A_FILE";
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["INVALID_PATH"] = 4] = "INVALID_PATH";
  ArtifactPathErrorKind2[ArtifactPathErrorKind2["UNKNOWN"] = 5] = "UNKNOWN";
})(ArtifactPathErrorKind! || (ArtifactPathErrorKind = {} as typeof ArtifactPathErrorKind));
proto3.util.setEnumType(ArtifactPathErrorKind, "agent.v1.ArtifactPathErrorKind", [
  { no: 0, name: "ARTIFACT_PATH_ERROR_KIND_UNSPECIFIED" },
  { no: 1, name: "ARTIFACT_PATH_ERROR_KIND_MISSING" },
  { no: 2, name: "ARTIFACT_PATH_ERROR_KIND_PERMISSION" },
  { no: 3, name: "ARTIFACT_PATH_ERROR_KIND_NOT_A_FILE" },
  { no: 4, name: "ARTIFACT_PATH_ERROR_KIND_INVALID_PATH" },
  { no: 5, name: "ARTIFACT_PATH_ERROR_KIND_UNKNOWN" }
]);
(function(ArtifactRootKind2) {
  ArtifactRootKind2[ArtifactRootKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ArtifactRootKind2[ArtifactRootKind2["LOCAL"] = 1] = "LOCAL";
  ArtifactRootKind2[ArtifactRootKind2["AGENT_STORE_BACKED"] = 2] = "AGENT_STORE_BACKED";
})(ArtifactRootKind! || (ArtifactRootKind = {} as typeof ArtifactRootKind));
proto3.util.setEnumType(ArtifactRootKind, "agent.v1.ArtifactRootKind", [
  { no: 0, name: "ARTIFACT_ROOT_KIND_UNSPECIFIED" },
  { no: 1, name: "ARTIFACT_ROOT_KIND_LOCAL" },
  { no: 2, name: "ARTIFACT_ROOT_KIND_AGENT_STORE_BACKED" }
]);
(function(ArtifactUploadDispatchStatus2) {
  ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["ACCEPTED"] = 1] = "ACCEPTED";
  ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["REJECTED"] = 2] = "REJECTED";
  ArtifactUploadDispatchStatus2[ArtifactUploadDispatchStatus2["SKIPPED_ALREADY_IN_PROGRESS"] = 3] = "SKIPPED_ALREADY_IN_PROGRESS";
})(ArtifactUploadDispatchStatus! || (ArtifactUploadDispatchStatus = {} as typeof ArtifactUploadDispatchStatus));
proto3.util.setEnumType(ArtifactUploadDispatchStatus, "agent.v1.ArtifactUploadDispatchStatus", [
  { no: 0, name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_UNSPECIFIED" },
  { no: 1, name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_ACCEPTED" },
  { no: 2, name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_REJECTED" },
  { no: 3, name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_SKIPPED_ALREADY_IN_PROGRESS" }
]);
(function(PersistArtifactToAgentStoreStatus2) {
  PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["PERSISTED"] = 1] = "PERSISTED";
  PersistArtifactToAgentStoreStatus2[PersistArtifactToAgentStoreStatus2["REJECTED"] = 2] = "REJECTED";
})(PersistArtifactToAgentStoreStatus! || (PersistArtifactToAgentStoreStatus = {} as typeof PersistArtifactToAgentStoreStatus));
proto3.util.setEnumType(PersistArtifactToAgentStoreStatus, "agent.v1.PersistArtifactToAgentStoreStatus", [
  { no: 0, name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_UNSPECIFIED" },
  { no: 1, name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_PERSISTED" },
  { no: 2, name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_REJECTED" }
]);
(function(ArtifactRestoreStatus2) {
  ArtifactRestoreStatus2[ArtifactRestoreStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ArtifactRestoreStatus2[ArtifactRestoreStatus2["RESTORED"] = 1] = "RESTORED";
  ArtifactRestoreStatus2[ArtifactRestoreStatus2["SKIPPED_ALREADY_EXISTS"] = 2] = "SKIPPED_ALREADY_EXISTS";
  ArtifactRestoreStatus2[ArtifactRestoreStatus2["REJECTED"] = 3] = "REJECTED";
})(ArtifactRestoreStatus! || (ArtifactRestoreStatus = {} as typeof ArtifactRestoreStatus));
proto3.util.setEnumType(ArtifactRestoreStatus, "agent.v1.ArtifactRestoreStatus", [
  { no: 0, name: "ARTIFACT_RESTORE_STATUS_UNSPECIFIED" },
  { no: 1, name: "ARTIFACT_RESTORE_STATUS_RESTORED" },
  { no: 2, name: "ARTIFACT_RESTORE_STATUS_SKIPPED_ALREADY_EXISTS" },
  { no: 3, name: "ARTIFACT_RESTORE_STATUS_REJECTED" }
]);
var PingRequest$Runtime = (() => class _PingRequest extends Message<_PingRequest> {
  constructor(data?: PartialMessage<_PingRequest>) {
    super();
    proto3.util.initPartial(data, this as _PingRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PingRequest {
    return new _PingRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PingRequest {
    return new _PingRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PingRequest {
    return new _PingRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _PingRequest | PlainMessage<_PingRequest> | undefined | null, b2: _PingRequest | PlainMessage<_PingRequest> | undefined | null): boolean {
    return proto3.util.equals(_PingRequest as unknown as MessageType<_PingRequest>, a, b2);
  }
})();
export type PingRequest = InstanceType<typeof PingRequest$Runtime>;
var PingRequest: MessageType<PingRequest> = PingRequest$Runtime as unknown as MessageType<PingRequest>;
(PingRequest as MutableMessageType<PingRequest>).runtime = proto3;
(PingRequest as MutableMessageType<PingRequest>).typeName = "agent.v1.PingRequest";
(PingRequest as MutableMessageType<PingRequest>).fields = proto3.util.newFieldList(() => []);
var PingResponse$Runtime = (() => class _PingResponse extends Message<_PingResponse> {
  constructor(data?: PartialMessage<_PingResponse>) {
    super();
    proto3.util.initPartial(data, this as _PingResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PingResponse {
    return new _PingResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PingResponse {
    return new _PingResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PingResponse {
    return new _PingResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _PingResponse | PlainMessage<_PingResponse> | undefined | null, b2: _PingResponse | PlainMessage<_PingResponse> | undefined | null): boolean {
    return proto3.util.equals(_PingResponse as unknown as MessageType<_PingResponse>, a, b2);
  }
})();
export type PingResponse = InstanceType<typeof PingResponse$Runtime>;
var PingResponse: MessageType<PingResponse> = PingResponse$Runtime as unknown as MessageType<PingResponse>;
(PingResponse as MutableMessageType<PingResponse>).runtime = proto3;
(PingResponse as MutableMessageType<PingResponse>).typeName = "agent.v1.PingResponse";
(PingResponse as MutableMessageType<PingResponse>).fields = proto3.util.newFieldList(() => []);
var GetCapabilitiesRequest$Runtime = (() => class _GetCapabilitiesRequest extends Message<_GetCapabilitiesRequest> {
  constructor(data?: PartialMessage<_GetCapabilitiesRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetCapabilitiesRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetCapabilitiesRequest {
    return new _GetCapabilitiesRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetCapabilitiesRequest {
    return new _GetCapabilitiesRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetCapabilitiesRequest {
    return new _GetCapabilitiesRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetCapabilitiesRequest | PlainMessage<_GetCapabilitiesRequest> | undefined | null, b2: _GetCapabilitiesRequest | PlainMessage<_GetCapabilitiesRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetCapabilitiesRequest as unknown as MessageType<_GetCapabilitiesRequest>, a, b2);
  }
})();
export type GetCapabilitiesRequest = InstanceType<typeof GetCapabilitiesRequest$Runtime>;
var GetCapabilitiesRequest: MessageType<GetCapabilitiesRequest> = GetCapabilitiesRequest$Runtime as unknown as MessageType<GetCapabilitiesRequest>;
(GetCapabilitiesRequest as MutableMessageType<GetCapabilitiesRequest>).runtime = proto3;
(GetCapabilitiesRequest as MutableMessageType<GetCapabilitiesRequest>).typeName = "agent.v1.GetCapabilitiesRequest";
(GetCapabilitiesRequest as MutableMessageType<GetCapabilitiesRequest>).fields = proto3.util.newFieldList(() => []);
var GetCapabilitiesResponse$Runtime = (() => class _GetCapabilitiesResponse extends Message<_GetCapabilitiesResponse> {
  declare computerUseSupported?: boolean;
  declare installPluginArtifactSupported?: boolean;
  constructor(data?: PartialMessage<_GetCapabilitiesResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetCapabilitiesResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetCapabilitiesResponse {
    return new _GetCapabilitiesResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetCapabilitiesResponse {
    return new _GetCapabilitiesResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetCapabilitiesResponse {
    return new _GetCapabilitiesResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetCapabilitiesResponse | PlainMessage<_GetCapabilitiesResponse> | undefined | null, b2: _GetCapabilitiesResponse | PlainMessage<_GetCapabilitiesResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetCapabilitiesResponse as unknown as MessageType<_GetCapabilitiesResponse>, a, b2);
  }
})();
export type GetCapabilitiesResponse = InstanceType<typeof GetCapabilitiesResponse$Runtime>;
var GetCapabilitiesResponse: MessageType<GetCapabilitiesResponse> = GetCapabilitiesResponse$Runtime as unknown as MessageType<GetCapabilitiesResponse>;
(GetCapabilitiesResponse as MutableMessageType<GetCapabilitiesResponse>).runtime = proto3;
(GetCapabilitiesResponse as MutableMessageType<GetCapabilitiesResponse>).typeName = "agent.v1.GetCapabilitiesResponse";
(GetCapabilitiesResponse as MutableMessageType<GetCapabilitiesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "computer_use_supported", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "install_plugin_artifact_supported", kind: "scalar", T: 8, opt: true }
]);
var ReloadAgentSkillsRequest$Runtime = (() => class _ReloadAgentSkillsRequest extends Message<_ReloadAgentSkillsRequest> {
  constructor(data?: PartialMessage<_ReloadAgentSkillsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ReloadAgentSkillsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReloadAgentSkillsRequest {
    return new _ReloadAgentSkillsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReloadAgentSkillsRequest {
    return new _ReloadAgentSkillsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReloadAgentSkillsRequest {
    return new _ReloadAgentSkillsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReloadAgentSkillsRequest | PlainMessage<_ReloadAgentSkillsRequest> | undefined | null, b2: _ReloadAgentSkillsRequest | PlainMessage<_ReloadAgentSkillsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReloadAgentSkillsRequest as unknown as MessageType<_ReloadAgentSkillsRequest>, a, b2);
  }
})();
export type ReloadAgentSkillsRequest = InstanceType<typeof ReloadAgentSkillsRequest$Runtime>;
var ReloadAgentSkillsRequest: MessageType<ReloadAgentSkillsRequest> = ReloadAgentSkillsRequest$Runtime as unknown as MessageType<ReloadAgentSkillsRequest>;
(ReloadAgentSkillsRequest as MutableMessageType<ReloadAgentSkillsRequest>).runtime = proto3;
(ReloadAgentSkillsRequest as MutableMessageType<ReloadAgentSkillsRequest>).typeName = "agent.v1.ReloadAgentSkillsRequest";
(ReloadAgentSkillsRequest as MutableMessageType<ReloadAgentSkillsRequest>).fields = proto3.util.newFieldList(() => []);
var ReloadAgentSkillsResponse$Runtime = (() => class _ReloadAgentSkillsResponse extends Message<_ReloadAgentSkillsResponse> {
  constructor(data?: PartialMessage<_ReloadAgentSkillsResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReloadAgentSkillsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReloadAgentSkillsResponse {
    return new _ReloadAgentSkillsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReloadAgentSkillsResponse {
    return new _ReloadAgentSkillsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReloadAgentSkillsResponse {
    return new _ReloadAgentSkillsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReloadAgentSkillsResponse | PlainMessage<_ReloadAgentSkillsResponse> | undefined | null, b2: _ReloadAgentSkillsResponse | PlainMessage<_ReloadAgentSkillsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReloadAgentSkillsResponse as unknown as MessageType<_ReloadAgentSkillsResponse>, a, b2);
  }
})();
export type ReloadAgentSkillsResponse = InstanceType<typeof ReloadAgentSkillsResponse$Runtime>;
var ReloadAgentSkillsResponse: MessageType<ReloadAgentSkillsResponse> = ReloadAgentSkillsResponse$Runtime as unknown as MessageType<ReloadAgentSkillsResponse>;
(ReloadAgentSkillsResponse as MutableMessageType<ReloadAgentSkillsResponse>).runtime = proto3;
(ReloadAgentSkillsResponse as MutableMessageType<ReloadAgentSkillsResponse>).typeName = "agent.v1.ReloadAgentSkillsResponse";
(ReloadAgentSkillsResponse as MutableMessageType<ReloadAgentSkillsResponse>).fields = proto3.util.newFieldList(() => []);
var ReloadPluginsRequest$Runtime = (() => class _ReloadPluginsRequest extends Message<_ReloadPluginsRequest> {
  declare reloadTargets: string[];
  constructor(data?: PartialMessage<_ReloadPluginsRequest>) {
    super();
    this.reloadTargets = [];
    proto3.util.initPartial(data, this as _ReloadPluginsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReloadPluginsRequest {
    return new _ReloadPluginsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReloadPluginsRequest {
    return new _ReloadPluginsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReloadPluginsRequest {
    return new _ReloadPluginsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReloadPluginsRequest | PlainMessage<_ReloadPluginsRequest> | undefined | null, b2: _ReloadPluginsRequest | PlainMessage<_ReloadPluginsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReloadPluginsRequest as unknown as MessageType<_ReloadPluginsRequest>, a, b2);
  }
})();
export type ReloadPluginsRequest = InstanceType<typeof ReloadPluginsRequest$Runtime>;
var ReloadPluginsRequest: MessageType<ReloadPluginsRequest> = ReloadPluginsRequest$Runtime as unknown as MessageType<ReloadPluginsRequest>;
(ReloadPluginsRequest as MutableMessageType<ReloadPluginsRequest>).runtime = proto3;
(ReloadPluginsRequest as MutableMessageType<ReloadPluginsRequest>).typeName = "agent.v1.ReloadPluginsRequest";
(ReloadPluginsRequest as MutableMessageType<ReloadPluginsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "reload_targets", kind: "scalar", T: 9, repeated: true }
]);
var ReloadPluginsResponse$Runtime = (() => class _ReloadPluginsResponse extends Message<_ReloadPluginsResponse> {
  constructor(data?: PartialMessage<_ReloadPluginsResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReloadPluginsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReloadPluginsResponse {
    return new _ReloadPluginsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReloadPluginsResponse {
    return new _ReloadPluginsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReloadPluginsResponse {
    return new _ReloadPluginsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReloadPluginsResponse | PlainMessage<_ReloadPluginsResponse> | undefined | null, b2: _ReloadPluginsResponse | PlainMessage<_ReloadPluginsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReloadPluginsResponse as unknown as MessageType<_ReloadPluginsResponse>, a, b2);
  }
})();
export type ReloadPluginsResponse = InstanceType<typeof ReloadPluginsResponse$Runtime>;
var ReloadPluginsResponse: MessageType<ReloadPluginsResponse> = ReloadPluginsResponse$Runtime as unknown as MessageType<ReloadPluginsResponse>;
(ReloadPluginsResponse as MutableMessageType<ReloadPluginsResponse>).runtime = proto3;
(ReloadPluginsResponse as MutableMessageType<ReloadPluginsResponse>).typeName = "agent.v1.ReloadPluginsResponse";
(ReloadPluginsResponse as MutableMessageType<ReloadPluginsResponse>).fields = proto3.util.newFieldList(() => []);
var ExecRequest$Runtime = (() => class _ExecRequest extends Message<_ExecRequest> {
  declare command: string;
  declare cwd?: string;
  declare args: string[];
  declare environment: { [key: string]: string };
  constructor(data?: PartialMessage<_ExecRequest>) {
    super();
    this.command = "";
    this.args = [];
    this.environment = {};
    proto3.util.initPartial(data, this as _ExecRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecRequest {
    return new _ExecRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecRequest {
    return new _ExecRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecRequest {
    return new _ExecRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecRequest | PlainMessage<_ExecRequest> | undefined | null, b2: _ExecRequest | PlainMessage<_ExecRequest> | undefined | null): boolean {
    return proto3.util.equals(_ExecRequest as unknown as MessageType<_ExecRequest>, a, b2);
  }
})();
export type ExecRequest = InstanceType<typeof ExecRequest$Runtime>;
var ExecRequest: MessageType<ExecRequest> = ExecRequest$Runtime as unknown as MessageType<ExecRequest>;
(ExecRequest as MutableMessageType<ExecRequest>).runtime = proto3;
(ExecRequest as MutableMessageType<ExecRequest>).typeName = "agent.v1.ExecRequest";
(ExecRequest as MutableMessageType<ExecRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "args", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "environment", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ExecResponse$Runtime = (() => class _ExecResponse extends Message<_ExecResponse> {
  declare event: { case: "stdoutEvent"; value: StdoutEvent } | { case: "stderrEvent"; value: StderrEvent } | { case: "exitEvent"; value: ExitEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecResponse>) {
    super();
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecResponse {
    return new _ExecResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecResponse {
    return new _ExecResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecResponse {
    return new _ExecResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecResponse | PlainMessage<_ExecResponse> | undefined | null, b2: _ExecResponse | PlainMessage<_ExecResponse> | undefined | null): boolean {
    return proto3.util.equals(_ExecResponse as unknown as MessageType<_ExecResponse>, a, b2);
  }
})();
export type ExecResponse = InstanceType<typeof ExecResponse$Runtime>;
var ExecResponse: MessageType<ExecResponse> = ExecResponse$Runtime as unknown as MessageType<ExecResponse>;
(ExecResponse as MutableMessageType<ExecResponse>).runtime = proto3;
(ExecResponse as MutableMessageType<ExecResponse>).typeName = "agent.v1.ExecResponse";
(ExecResponse as MutableMessageType<ExecResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stdout_event", kind: "message", T: StdoutEvent, oneof: "event" },
  { no: 2, name: "stderr_event", kind: "message", T: StderrEvent, oneof: "event" },
  { no: 3, name: "exit_event", kind: "message", T: ExitEvent, oneof: "event" }
]);
var StdoutEvent$Runtime = (() => class _StdoutEvent extends Message<_StdoutEvent> {
  declare data: string;
  constructor(data?: PartialMessage<_StdoutEvent>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _StdoutEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _StdoutEvent {
    return new _StdoutEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _StdoutEvent {
    return new _StdoutEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _StdoutEvent {
    return new _StdoutEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _StdoutEvent | PlainMessage<_StdoutEvent> | undefined | null, b2: _StdoutEvent | PlainMessage<_StdoutEvent> | undefined | null): boolean {
    return proto3.util.equals(_StdoutEvent as unknown as MessageType<_StdoutEvent>, a, b2);
  }
})();
export type StdoutEvent = InstanceType<typeof StdoutEvent$Runtime>;
var StdoutEvent: MessageType<StdoutEvent> = StdoutEvent$Runtime as unknown as MessageType<StdoutEvent>;
(StdoutEvent as MutableMessageType<StdoutEvent>).runtime = proto3;
(StdoutEvent as MutableMessageType<StdoutEvent>).typeName = "agent.v1.StdoutEvent";
(StdoutEvent as MutableMessageType<StdoutEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StderrEvent$Runtime = (() => class _StderrEvent extends Message<_StderrEvent> {
  declare data: string;
  constructor(data?: PartialMessage<_StderrEvent>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _StderrEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _StderrEvent {
    return new _StderrEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _StderrEvent {
    return new _StderrEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _StderrEvent {
    return new _StderrEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _StderrEvent | PlainMessage<_StderrEvent> | undefined | null, b2: _StderrEvent | PlainMessage<_StderrEvent> | undefined | null): boolean {
    return proto3.util.equals(_StderrEvent as unknown as MessageType<_StderrEvent>, a, b2);
  }
})();
export type StderrEvent = InstanceType<typeof StderrEvent$Runtime>;
var StderrEvent: MessageType<StderrEvent> = StderrEvent$Runtime as unknown as MessageType<StderrEvent>;
(StderrEvent as MutableMessageType<StderrEvent>).runtime = proto3;
(StderrEvent as MutableMessageType<StderrEvent>).typeName = "agent.v1.StderrEvent";
(StderrEvent as MutableMessageType<StderrEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ExitEvent$Runtime = (() => class _ExitEvent extends Message<_ExitEvent> {
  declare exitCode: number;
  constructor(data?: PartialMessage<_ExitEvent>) {
    super();
    this.exitCode = 0;
    proto3.util.initPartial(data, this as _ExitEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExitEvent {
    return new _ExitEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExitEvent {
    return new _ExitEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExitEvent {
    return new _ExitEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExitEvent | PlainMessage<_ExitEvent> | undefined | null, b2: _ExitEvent | PlainMessage<_ExitEvent> | undefined | null): boolean {
    return proto3.util.equals(_ExitEvent as unknown as MessageType<_ExitEvent>, a, b2);
  }
})();
export type ExitEvent = InstanceType<typeof ExitEvent$Runtime>;
var ExitEvent: MessageType<ExitEvent> = ExitEvent$Runtime as unknown as MessageType<ExitEvent>;
(ExitEvent as MutableMessageType<ExitEvent>).runtime = proto3;
(ExitEvent as MutableMessageType<ExitEvent>).typeName = "agent.v1.ExitEvent";
(ExitEvent as MutableMessageType<ExitEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ListDirectoryRequest$Runtime = (() => class _ListDirectoryRequest extends Message<_ListDirectoryRequest> {
  declare path: string;
  declare includeHidden: boolean;
  constructor(data?: PartialMessage<_ListDirectoryRequest>) {
    super();
    this.path = "";
    this.includeHidden = false;
    proto3.util.initPartial(data, this as _ListDirectoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListDirectoryRequest | PlainMessage<_ListDirectoryRequest> | undefined | null, b2: _ListDirectoryRequest | PlainMessage<_ListDirectoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListDirectoryRequest as unknown as MessageType<_ListDirectoryRequest>, a, b2);
  }
})();
export type ListDirectoryRequest = InstanceType<typeof ListDirectoryRequest$Runtime>;
var ListDirectoryRequest: MessageType<ListDirectoryRequest> = ListDirectoryRequest$Runtime as unknown as MessageType<ListDirectoryRequest>;
(ListDirectoryRequest as MutableMessageType<ListDirectoryRequest>).runtime = proto3;
(ListDirectoryRequest as MutableMessageType<ListDirectoryRequest>).typeName = "agent.v1.ListDirectoryRequest";
(ListDirectoryRequest as MutableMessageType<ListDirectoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "include_hidden",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ListDirectoryResponse$Runtime = (() => class _ListDirectoryResponse extends Message<_ListDirectoryResponse> {
  declare entries: DirectoryEntry[];
  constructor(data?: PartialMessage<_ListDirectoryResponse>) {
    super();
    this.entries = [];
    proto3.util.initPartial(data, this as _ListDirectoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListDirectoryResponse | PlainMessage<_ListDirectoryResponse> | undefined | null, b2: _ListDirectoryResponse | PlainMessage<_ListDirectoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListDirectoryResponse as unknown as MessageType<_ListDirectoryResponse>, a, b2);
  }
})();
export type ListDirectoryResponse = InstanceType<typeof ListDirectoryResponse$Runtime>;
var ListDirectoryResponse: MessageType<ListDirectoryResponse> = ListDirectoryResponse$Runtime as unknown as MessageType<ListDirectoryResponse>;
(ListDirectoryResponse as MutableMessageType<ListDirectoryResponse>).runtime = proto3;
(ListDirectoryResponse as MutableMessageType<ListDirectoryResponse>).typeName = "agent.v1.ListDirectoryResponse";
(ListDirectoryResponse as MutableMessageType<ListDirectoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "entries", kind: "message", T: DirectoryEntry, repeated: true }
]);
var DirectoryEntry$Runtime = (() => class _DirectoryEntry extends Message<_DirectoryEntry> {
  declare name: string;
  declare path: string;
  declare type: EntryType;
  declare sizeBytes: bigint;
  declare modifiedAtUnixMs: bigint;
  constructor(data?: PartialMessage<_DirectoryEntry>) {
    super();
    this.name = "";
    this.path = "";
    this.type = EntryType.UNSPECIFIED;
    this.sizeBytes = protoInt64.zero;
    this.modifiedAtUnixMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _DirectoryEntry);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromJsonString(jsonString, options2);
  }
  static equals(a: _DirectoryEntry | PlainMessage<_DirectoryEntry> | undefined | null, b2: _DirectoryEntry | PlainMessage<_DirectoryEntry> | undefined | null): boolean {
    return proto3.util.equals(_DirectoryEntry as unknown as MessageType<_DirectoryEntry>, a, b2);
  }
})();
export type DirectoryEntry = InstanceType<typeof DirectoryEntry$Runtime>;
var DirectoryEntry: MessageType<DirectoryEntry> = DirectoryEntry$Runtime as unknown as MessageType<DirectoryEntry>;
(DirectoryEntry as MutableMessageType<DirectoryEntry>).runtime = proto3;
(DirectoryEntry as MutableMessageType<DirectoryEntry>).typeName = "agent.v1.DirectoryEntry";
(DirectoryEntry as MutableMessageType<DirectoryEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(EntryType) },
  {
    no: 4,
    name: "size_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "modified_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var ReadTextFileRequest$Runtime = (() => class _ReadTextFileRequest extends Message<_ReadTextFileRequest> {
  declare path: string;
  constructor(data?: PartialMessage<_ReadTextFileRequest>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadTextFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadTextFileRequest | PlainMessage<_ReadTextFileRequest> | undefined | null, b2: _ReadTextFileRequest | PlainMessage<_ReadTextFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReadTextFileRequest as unknown as MessageType<_ReadTextFileRequest>, a, b2);
  }
})();
export type ReadTextFileRequest = InstanceType<typeof ReadTextFileRequest$Runtime>;
var ReadTextFileRequest: MessageType<ReadTextFileRequest> = ReadTextFileRequest$Runtime as unknown as MessageType<ReadTextFileRequest>;
(ReadTextFileRequest as MutableMessageType<ReadTextFileRequest>).runtime = proto3;
(ReadTextFileRequest as MutableMessageType<ReadTextFileRequest>).typeName = "agent.v1.ReadTextFileRequest";
(ReadTextFileRequest as MutableMessageType<ReadTextFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadTextFileResponse$Runtime = (() => class _ReadTextFileResponse extends Message<_ReadTextFileResponse> {
  declare content: string;
  constructor(data?: PartialMessage<_ReadTextFileResponse>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _ReadTextFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadTextFileResponse | PlainMessage<_ReadTextFileResponse> | undefined | null, b2: _ReadTextFileResponse | PlainMessage<_ReadTextFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReadTextFileResponse as unknown as MessageType<_ReadTextFileResponse>, a, b2);
  }
})();
export type ReadTextFileResponse = InstanceType<typeof ReadTextFileResponse$Runtime>;
var ReadTextFileResponse: MessageType<ReadTextFileResponse> = ReadTextFileResponse$Runtime as unknown as MessageType<ReadTextFileResponse>;
(ReadTextFileResponse as MutableMessageType<ReadTextFileResponse>).runtime = proto3;
(ReadTextFileResponse as MutableMessageType<ReadTextFileResponse>).typeName = "agent.v1.ReadTextFileResponse";
(ReadTextFileResponse as MutableMessageType<ReadTextFileResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WriteTextFileRequest$Runtime = (() => class _WriteTextFileRequest extends Message<_WriteTextFileRequest> {
  declare path: string;
  declare content: string;
  constructor(data?: PartialMessage<_WriteTextFileRequest>) {
    super();
    this.path = "";
    this.content = "";
    proto3.util.initPartial(data, this as _WriteTextFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteTextFileRequest | PlainMessage<_WriteTextFileRequest> | undefined | null, b2: _WriteTextFileRequest | PlainMessage<_WriteTextFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_WriteTextFileRequest as unknown as MessageType<_WriteTextFileRequest>, a, b2);
  }
})();
export type WriteTextFileRequest = InstanceType<typeof WriteTextFileRequest$Runtime>;
var WriteTextFileRequest: MessageType<WriteTextFileRequest> = WriteTextFileRequest$Runtime as unknown as MessageType<WriteTextFileRequest>;
(WriteTextFileRequest as MutableMessageType<WriteTextFileRequest>).runtime = proto3;
(WriteTextFileRequest as MutableMessageType<WriteTextFileRequest>).typeName = "agent.v1.WriteTextFileRequest";
(WriteTextFileRequest as MutableMessageType<WriteTextFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WriteTextFileResponse$Runtime = (() => class _WriteTextFileResponse extends Message<_WriteTextFileResponse> {
  constructor(data?: PartialMessage<_WriteTextFileResponse>) {
    super();
    proto3.util.initPartial(data, this as _WriteTextFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteTextFileResponse | PlainMessage<_WriteTextFileResponse> | undefined | null, b2: _WriteTextFileResponse | PlainMessage<_WriteTextFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_WriteTextFileResponse as unknown as MessageType<_WriteTextFileResponse>, a, b2);
  }
})();
export type WriteTextFileResponse = InstanceType<typeof WriteTextFileResponse$Runtime>;
var WriteTextFileResponse: MessageType<WriteTextFileResponse> = WriteTextFileResponse$Runtime as unknown as MessageType<WriteTextFileResponse>;
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).runtime = proto3;
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).typeName = "agent.v1.WriteTextFileResponse";
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).fields = proto3.util.newFieldList(() => []);
var ReadBinaryFileRequest$Runtime = (() => class _ReadBinaryFileRequest extends Message<_ReadBinaryFileRequest> {
  declare path: string;
  constructor(data?: PartialMessage<_ReadBinaryFileRequest>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadBinaryFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadBinaryFileRequest | PlainMessage<_ReadBinaryFileRequest> | undefined | null, b2: _ReadBinaryFileRequest | PlainMessage<_ReadBinaryFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReadBinaryFileRequest as unknown as MessageType<_ReadBinaryFileRequest>, a, b2);
  }
})();
export type ReadBinaryFileRequest = InstanceType<typeof ReadBinaryFileRequest$Runtime>;
var ReadBinaryFileRequest: MessageType<ReadBinaryFileRequest> = ReadBinaryFileRequest$Runtime as unknown as MessageType<ReadBinaryFileRequest>;
(ReadBinaryFileRequest as MutableMessageType<ReadBinaryFileRequest>).runtime = proto3;
(ReadBinaryFileRequest as MutableMessageType<ReadBinaryFileRequest>).typeName = "agent.v1.ReadBinaryFileRequest";
(ReadBinaryFileRequest as MutableMessageType<ReadBinaryFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadBinaryFileResponse$Runtime = (() => class _ReadBinaryFileResponse extends Message<_ReadBinaryFileResponse> {
  declare content: Uint8Array;
  constructor(data?: PartialMessage<_ReadBinaryFileResponse>) {
    super();
    this.content = new Uint8Array(0);
    proto3.util.initPartial(data, this as _ReadBinaryFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadBinaryFileResponse | PlainMessage<_ReadBinaryFileResponse> | undefined | null, b2: _ReadBinaryFileResponse | PlainMessage<_ReadBinaryFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReadBinaryFileResponse as unknown as MessageType<_ReadBinaryFileResponse>, a, b2);
  }
})();
export type ReadBinaryFileResponse = InstanceType<typeof ReadBinaryFileResponse$Runtime>;
var ReadBinaryFileResponse: MessageType<ReadBinaryFileResponse> = ReadBinaryFileResponse$Runtime as unknown as MessageType<ReadBinaryFileResponse>;
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).runtime = proto3;
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).typeName = "agent.v1.ReadBinaryFileResponse";
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var ExportFileRequest$Runtime = (() => class _ExportFileRequest extends Message<_ExportFileRequest> {
  declare path: string;
  declare workspaceRootPath: string;
  constructor(data?: PartialMessage<_ExportFileRequest>) {
    super();
    this.path = "";
    this.workspaceRootPath = "";
    proto3.util.initPartial(data, this as _ExportFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExportFileRequest {
    return new _ExportFileRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExportFileRequest {
    return new _ExportFileRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExportFileRequest {
    return new _ExportFileRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExportFileRequest | PlainMessage<_ExportFileRequest> | undefined | null, b2: _ExportFileRequest | PlainMessage<_ExportFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ExportFileRequest as unknown as MessageType<_ExportFileRequest>, a, b2);
  }
})();
export type ExportFileRequest = InstanceType<typeof ExportFileRequest$Runtime>;
var ExportFileRequest: MessageType<ExportFileRequest> = ExportFileRequest$Runtime as unknown as MessageType<ExportFileRequest>;
(ExportFileRequest as MutableMessageType<ExportFileRequest>).runtime = proto3;
(ExportFileRequest as MutableMessageType<ExportFileRequest>).typeName = "agent.v1.ExportFileRequest";
(ExportFileRequest as MutableMessageType<ExportFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "workspace_root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ExportFileMetadata$Runtime = (() => class _ExportFileMetadata extends Message<_ExportFileMetadata> {
  declare totalBytes: bigint;
  constructor(data?: PartialMessage<_ExportFileMetadata>) {
    super();
    this.totalBytes = protoInt64.zero;
    proto3.util.initPartial(data, this as _ExportFileMetadata);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExportFileMetadata {
    return new _ExportFileMetadata().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExportFileMetadata {
    return new _ExportFileMetadata().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExportFileMetadata {
    return new _ExportFileMetadata().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExportFileMetadata | PlainMessage<_ExportFileMetadata> | undefined | null, b2: _ExportFileMetadata | PlainMessage<_ExportFileMetadata> | undefined | null): boolean {
    return proto3.util.equals(_ExportFileMetadata as unknown as MessageType<_ExportFileMetadata>, a, b2);
  }
})();
export type ExportFileMetadata = InstanceType<typeof ExportFileMetadata$Runtime>;
var ExportFileMetadata: MessageType<ExportFileMetadata> = ExportFileMetadata$Runtime as unknown as MessageType<ExportFileMetadata>;
(ExportFileMetadata as MutableMessageType<ExportFileMetadata>).runtime = proto3;
(ExportFileMetadata as MutableMessageType<ExportFileMetadata>).typeName = "agent.v1.ExportFileMetadata";
(ExportFileMetadata as MutableMessageType<ExportFileMetadata>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "total_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var ExportFileResponse$Runtime = (() => class _ExportFileResponse extends Message<_ExportFileResponse> {
  declare payload: { case: "contentChunk"; value: Uint8Array } | { case: "metadata"; value: ExportFileMetadata } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExportFileResponse>) {
    super();
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _ExportFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExportFileResponse {
    return new _ExportFileResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExportFileResponse {
    return new _ExportFileResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExportFileResponse {
    return new _ExportFileResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExportFileResponse | PlainMessage<_ExportFileResponse> | undefined | null, b2: _ExportFileResponse | PlainMessage<_ExportFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ExportFileResponse as unknown as MessageType<_ExportFileResponse>, a, b2);
  }
})();
export type ExportFileResponse = InstanceType<typeof ExportFileResponse$Runtime>;
var ExportFileResponse: MessageType<ExportFileResponse> = ExportFileResponse$Runtime as unknown as MessageType<ExportFileResponse>;
(ExportFileResponse as MutableMessageType<ExportFileResponse>).runtime = proto3;
(ExportFileResponse as MutableMessageType<ExportFileResponse>).typeName = "agent.v1.ExportFileResponse";
(ExportFileResponse as MutableMessageType<ExportFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content_chunk", kind: "scalar", T: 12, oneof: "payload" },
  { no: 2, name: "metadata", kind: "message", T: ExportFileMetadata, oneof: "payload" }
]);
var WriteBinaryFileRequest$Runtime = (() => class _WriteBinaryFileRequest extends Message<_WriteBinaryFileRequest> {
  declare path: string;
  declare content: Uint8Array;
  constructor(data?: PartialMessage<_WriteBinaryFileRequest>) {
    super();
    this.path = "";
    this.content = new Uint8Array(0);
    proto3.util.initPartial(data, this as _WriteBinaryFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteBinaryFileRequest | PlainMessage<_WriteBinaryFileRequest> | undefined | null, b2: _WriteBinaryFileRequest | PlainMessage<_WriteBinaryFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_WriteBinaryFileRequest as unknown as MessageType<_WriteBinaryFileRequest>, a, b2);
  }
})();
export type WriteBinaryFileRequest = InstanceType<typeof WriteBinaryFileRequest$Runtime>;
var WriteBinaryFileRequest: MessageType<WriteBinaryFileRequest> = WriteBinaryFileRequest$Runtime as unknown as MessageType<WriteBinaryFileRequest>;
(WriteBinaryFileRequest as MutableMessageType<WriteBinaryFileRequest>).runtime = proto3;
(WriteBinaryFileRequest as MutableMessageType<WriteBinaryFileRequest>).typeName = "agent.v1.WriteBinaryFileRequest";
(WriteBinaryFileRequest as MutableMessageType<WriteBinaryFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var WriteBinaryFileResponse$Runtime = (() => class _WriteBinaryFileResponse extends Message<_WriteBinaryFileResponse> {
  constructor(data?: PartialMessage<_WriteBinaryFileResponse>) {
    super();
    proto3.util.initPartial(data, this as _WriteBinaryFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteBinaryFileResponse | PlainMessage<_WriteBinaryFileResponse> | undefined | null, b2: _WriteBinaryFileResponse | PlainMessage<_WriteBinaryFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_WriteBinaryFileResponse as unknown as MessageType<_WriteBinaryFileResponse>, a, b2);
  }
})();
export type WriteBinaryFileResponse = InstanceType<typeof WriteBinaryFileResponse$Runtime>;
var WriteBinaryFileResponse: MessageType<WriteBinaryFileResponse> = WriteBinaryFileResponse$Runtime as unknown as MessageType<WriteBinaryFileResponse>;
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).runtime = proto3;
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).typeName = "agent.v1.WriteBinaryFileResponse";
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).fields = proto3.util.newFieldList(() => []);
var GetWorkspaceChangesHashRequest$Runtime = (() => class _GetWorkspaceChangesHashRequest extends Message<_GetWorkspaceChangesHashRequest> {
  declare rootPath: string;
  declare baseRef: string;
  constructor(data?: PartialMessage<_GetWorkspaceChangesHashRequest>) {
    super();
    this.rootPath = "";
    this.baseRef = "";
    proto3.util.initPartial(data, this as _GetWorkspaceChangesHashRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetWorkspaceChangesHashRequest {
    return new _GetWorkspaceChangesHashRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetWorkspaceChangesHashRequest {
    return new _GetWorkspaceChangesHashRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetWorkspaceChangesHashRequest {
    return new _GetWorkspaceChangesHashRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetWorkspaceChangesHashRequest | PlainMessage<_GetWorkspaceChangesHashRequest> | undefined | null, b2: _GetWorkspaceChangesHashRequest | PlainMessage<_GetWorkspaceChangesHashRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetWorkspaceChangesHashRequest as unknown as MessageType<_GetWorkspaceChangesHashRequest>, a, b2);
  }
})();
export type GetWorkspaceChangesHashRequest = InstanceType<typeof GetWorkspaceChangesHashRequest$Runtime>;
var GetWorkspaceChangesHashRequest: MessageType<GetWorkspaceChangesHashRequest> = GetWorkspaceChangesHashRequest$Runtime as unknown as MessageType<GetWorkspaceChangesHashRequest>;
(GetWorkspaceChangesHashRequest as MutableMessageType<GetWorkspaceChangesHashRequest>).runtime = proto3;
(GetWorkspaceChangesHashRequest as MutableMessageType<GetWorkspaceChangesHashRequest>).typeName = "agent.v1.GetWorkspaceChangesHashRequest";
(GetWorkspaceChangesHashRequest as MutableMessageType<GetWorkspaceChangesHashRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "base_ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetWorkspaceChangesHashResponse$Runtime = (() => class _GetWorkspaceChangesHashResponse extends Message<_GetWorkspaceChangesHashResponse> {
  declare hash: string;
  constructor(data?: PartialMessage<_GetWorkspaceChangesHashResponse>) {
    super();
    this.hash = "";
    proto3.util.initPartial(data, this as _GetWorkspaceChangesHashResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetWorkspaceChangesHashResponse {
    return new _GetWorkspaceChangesHashResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetWorkspaceChangesHashResponse {
    return new _GetWorkspaceChangesHashResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetWorkspaceChangesHashResponse {
    return new _GetWorkspaceChangesHashResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetWorkspaceChangesHashResponse | PlainMessage<_GetWorkspaceChangesHashResponse> | undefined | null, b2: _GetWorkspaceChangesHashResponse | PlainMessage<_GetWorkspaceChangesHashResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetWorkspaceChangesHashResponse as unknown as MessageType<_GetWorkspaceChangesHashResponse>, a, b2);
  }
})();
export type GetWorkspaceChangesHashResponse = InstanceType<typeof GetWorkspaceChangesHashResponse$Runtime>;
var GetWorkspaceChangesHashResponse: MessageType<GetWorkspaceChangesHashResponse> = GetWorkspaceChangesHashResponse$Runtime as unknown as MessageType<GetWorkspaceChangesHashResponse>;
(GetWorkspaceChangesHashResponse as MutableMessageType<GetWorkspaceChangesHashResponse>).runtime = proto3;
(GetWorkspaceChangesHashResponse as MutableMessageType<GetWorkspaceChangesHashResponse>).typeName = "agent.v1.GetWorkspaceChangesHashResponse";
(GetWorkspaceChangesHashResponse as MutableMessageType<GetWorkspaceChangesHashResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BatchGetDiffRequest$Runtime = (() => class _BatchGetDiffRequest extends Message<_BatchGetDiffRequest> {
  declare items: BatchGetDiffItem[];
  constructor(data?: PartialMessage<_BatchGetDiffRequest>) {
    super();
    this.items = [];
    proto3.util.initPartial(data, this as _BatchGetDiffRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchGetDiffRequest {
    return new _BatchGetDiffRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchGetDiffRequest {
    return new _BatchGetDiffRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchGetDiffRequest {
    return new _BatchGetDiffRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchGetDiffRequest | PlainMessage<_BatchGetDiffRequest> | undefined | null, b2: _BatchGetDiffRequest | PlainMessage<_BatchGetDiffRequest> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetDiffRequest as unknown as MessageType<_BatchGetDiffRequest>, a, b2);
  }
})();
export type BatchGetDiffRequest = InstanceType<typeof BatchGetDiffRequest$Runtime>;
var BatchGetDiffRequest: MessageType<BatchGetDiffRequest> = BatchGetDiffRequest$Runtime as unknown as MessageType<BatchGetDiffRequest>;
(BatchGetDiffRequest as MutableMessageType<BatchGetDiffRequest>).runtime = proto3;
(BatchGetDiffRequest as MutableMessageType<BatchGetDiffRequest>).typeName = "agent.v1.BatchGetDiffRequest";
(BatchGetDiffRequest as MutableMessageType<BatchGetDiffRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "items", kind: "message", T: BatchGetDiffItem, repeated: true }
]);
var BatchGetDiffItem$Runtime = (() => class _BatchGetDiffItem extends Message<_BatchGetDiffItem> {
  declare diffRequest?: GetDiffRequest;
  declare fetchBranches: string[];
  constructor(data?: PartialMessage<_BatchGetDiffItem>) {
    super();
    this.fetchBranches = [];
    proto3.util.initPartial(data, this as _BatchGetDiffItem);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchGetDiffItem {
    return new _BatchGetDiffItem().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchGetDiffItem {
    return new _BatchGetDiffItem().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchGetDiffItem {
    return new _BatchGetDiffItem().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchGetDiffItem | PlainMessage<_BatchGetDiffItem> | undefined | null, b2: _BatchGetDiffItem | PlainMessage<_BatchGetDiffItem> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetDiffItem as unknown as MessageType<_BatchGetDiffItem>, a, b2);
  }
})();
export type BatchGetDiffItem = InstanceType<typeof BatchGetDiffItem$Runtime>;
var BatchGetDiffItem: MessageType<BatchGetDiffItem> = BatchGetDiffItem$Runtime as unknown as MessageType<BatchGetDiffItem>;
(BatchGetDiffItem as MutableMessageType<BatchGetDiffItem>).runtime = proto3;
(BatchGetDiffItem as MutableMessageType<BatchGetDiffItem>).typeName = "agent.v1.BatchGetDiffItem";
(BatchGetDiffItem as MutableMessageType<BatchGetDiffItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diff_request", kind: "message", T: GetDiffRequest },
  { no: 2, name: "fetch_branches", kind: "scalar", T: 9, repeated: true }
]);
var BatchGetDiffResponse$Runtime = (() => class _BatchGetDiffResponse extends Message<_BatchGetDiffResponse> {
  declare results: BatchGetDiffResult[];
  constructor(data?: PartialMessage<_BatchGetDiffResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _BatchGetDiffResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchGetDiffResponse {
    return new _BatchGetDiffResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchGetDiffResponse {
    return new _BatchGetDiffResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchGetDiffResponse {
    return new _BatchGetDiffResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchGetDiffResponse | PlainMessage<_BatchGetDiffResponse> | undefined | null, b2: _BatchGetDiffResponse | PlainMessage<_BatchGetDiffResponse> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetDiffResponse as unknown as MessageType<_BatchGetDiffResponse>, a, b2);
  }
})();
export type BatchGetDiffResponse = InstanceType<typeof BatchGetDiffResponse$Runtime>;
var BatchGetDiffResponse: MessageType<BatchGetDiffResponse> = BatchGetDiffResponse$Runtime as unknown as MessageType<BatchGetDiffResponse>;
(BatchGetDiffResponse as MutableMessageType<BatchGetDiffResponse>).runtime = proto3;
(BatchGetDiffResponse as MutableMessageType<BatchGetDiffResponse>).typeName = "agent.v1.BatchGetDiffResponse";
(BatchGetDiffResponse as MutableMessageType<BatchGetDiffResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: BatchGetDiffResult, repeated: true }
]);
var BatchGetDiffResult$Runtime = (() => class _BatchGetDiffResult extends Message<_BatchGetDiffResult> {
  declare itemIndex: number;
  declare fetchedBranches: string[];
  declare failedBranches: string[];
  declare result: { case: "diff"; value: GetDiffResponse } | { case: "error"; value: BatchGetDiffError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BatchGetDiffResult>) {
    super();
    this.itemIndex = 0;
    this.fetchedBranches = [];
    this.failedBranches = [];
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _BatchGetDiffResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchGetDiffResult {
    return new _BatchGetDiffResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchGetDiffResult {
    return new _BatchGetDiffResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchGetDiffResult {
    return new _BatchGetDiffResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchGetDiffResult | PlainMessage<_BatchGetDiffResult> | undefined | null, b2: _BatchGetDiffResult | PlainMessage<_BatchGetDiffResult> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetDiffResult as unknown as MessageType<_BatchGetDiffResult>, a, b2);
  }
})();
export type BatchGetDiffResult = InstanceType<typeof BatchGetDiffResult$Runtime>;
var BatchGetDiffResult: MessageType<BatchGetDiffResult> = BatchGetDiffResult$Runtime as unknown as MessageType<BatchGetDiffResult>;
(BatchGetDiffResult as MutableMessageType<BatchGetDiffResult>).runtime = proto3;
(BatchGetDiffResult as MutableMessageType<BatchGetDiffResult>).typeName = "agent.v1.BatchGetDiffResult";
(BatchGetDiffResult as MutableMessageType<BatchGetDiffResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "item_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 4, name: "fetched_branches", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "failed_branches", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "diff", kind: "message", T: GetDiffResponse, oneof: "result" },
  { no: 3, name: "error", kind: "message", T: BatchGetDiffError, oneof: "result" }
]);
var BatchGetDiffError$Runtime = (() => class _BatchGetDiffError extends Message<_BatchGetDiffError> {
  declare kind: BatchGetDiffErrorKind;
  declare message: string;
  constructor(data?: PartialMessage<_BatchGetDiffError>) {
    super();
    this.kind = BatchGetDiffErrorKind.UNSPECIFIED;
    this.message = "";
    proto3.util.initPartial(data, this as _BatchGetDiffError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchGetDiffError {
    return new _BatchGetDiffError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchGetDiffError {
    return new _BatchGetDiffError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchGetDiffError {
    return new _BatchGetDiffError().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchGetDiffError | PlainMessage<_BatchGetDiffError> | undefined | null, b2: _BatchGetDiffError | PlainMessage<_BatchGetDiffError> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetDiffError as unknown as MessageType<_BatchGetDiffError>, a, b2);
  }
})();
export type BatchGetDiffError = InstanceType<typeof BatchGetDiffError$Runtime>;
var BatchGetDiffError: MessageType<BatchGetDiffError> = BatchGetDiffError$Runtime as unknown as MessageType<BatchGetDiffError>;
(BatchGetDiffError as MutableMessageType<BatchGetDiffError>).runtime = proto3;
(BatchGetDiffError as MutableMessageType<BatchGetDiffError>).typeName = "agent.v1.BatchGetDiffError";
(BatchGetDiffError as MutableMessageType<BatchGetDiffError>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(BatchGetDiffErrorKind) },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RefreshGithubAccessTokenRequest$Runtime = (() => class _RefreshGithubAccessTokenRequest extends Message<_RefreshGithubAccessTokenRequest> {
  declare githubAccessToken: string;
  declare hostname: string;
  declare repoUrl?: string;
  declare cloneUsername?: string;
  constructor(data?: PartialMessage<_RefreshGithubAccessTokenRequest>) {
    super();
    this.githubAccessToken = "";
    this.hostname = "";
    proto3.util.initPartial(data, this as _RefreshGithubAccessTokenRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RefreshGithubAccessTokenRequest {
    return new _RefreshGithubAccessTokenRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RefreshGithubAccessTokenRequest {
    return new _RefreshGithubAccessTokenRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RefreshGithubAccessTokenRequest {
    return new _RefreshGithubAccessTokenRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _RefreshGithubAccessTokenRequest | PlainMessage<_RefreshGithubAccessTokenRequest> | undefined | null, b2: _RefreshGithubAccessTokenRequest | PlainMessage<_RefreshGithubAccessTokenRequest> | undefined | null): boolean {
    return proto3.util.equals(_RefreshGithubAccessTokenRequest as unknown as MessageType<_RefreshGithubAccessTokenRequest>, a, b2);
  }
})();
export type RefreshGithubAccessTokenRequest = InstanceType<typeof RefreshGithubAccessTokenRequest$Runtime>;
var RefreshGithubAccessTokenRequest: MessageType<RefreshGithubAccessTokenRequest> = RefreshGithubAccessTokenRequest$Runtime as unknown as MessageType<RefreshGithubAccessTokenRequest>;
(RefreshGithubAccessTokenRequest as MutableMessageType<RefreshGithubAccessTokenRequest>).runtime = proto3;
(RefreshGithubAccessTokenRequest as MutableMessageType<RefreshGithubAccessTokenRequest>).typeName = "agent.v1.RefreshGithubAccessTokenRequest";
(RefreshGithubAccessTokenRequest as MutableMessageType<RefreshGithubAccessTokenRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "github_access_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "hostname",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "clone_username", kind: "scalar", T: 9, opt: true }
]);
var RefreshGithubAccessTokenResponse$Runtime = (() => class _RefreshGithubAccessTokenResponse extends Message<_RefreshGithubAccessTokenResponse> {
  constructor(data?: PartialMessage<_RefreshGithubAccessTokenResponse>) {
    super();
    proto3.util.initPartial(data, this as _RefreshGithubAccessTokenResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RefreshGithubAccessTokenResponse {
    return new _RefreshGithubAccessTokenResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RefreshGithubAccessTokenResponse {
    return new _RefreshGithubAccessTokenResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RefreshGithubAccessTokenResponse {
    return new _RefreshGithubAccessTokenResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _RefreshGithubAccessTokenResponse | PlainMessage<_RefreshGithubAccessTokenResponse> | undefined | null, b2: _RefreshGithubAccessTokenResponse | PlainMessage<_RefreshGithubAccessTokenResponse> | undefined | null): boolean {
    return proto3.util.equals(_RefreshGithubAccessTokenResponse as unknown as MessageType<_RefreshGithubAccessTokenResponse>, a, b2);
  }
})();
export type RefreshGithubAccessTokenResponse = InstanceType<typeof RefreshGithubAccessTokenResponse$Runtime>;
var RefreshGithubAccessTokenResponse: MessageType<RefreshGithubAccessTokenResponse> = RefreshGithubAccessTokenResponse$Runtime as unknown as MessageType<RefreshGithubAccessTokenResponse>;
(RefreshGithubAccessTokenResponse as MutableMessageType<RefreshGithubAccessTokenResponse>).runtime = proto3;
(RefreshGithubAccessTokenResponse as MutableMessageType<RefreshGithubAccessTokenResponse>).typeName = "agent.v1.RefreshGithubAccessTokenResponse";
(RefreshGithubAccessTokenResponse as MutableMessageType<RefreshGithubAccessTokenResponse>).fields = proto3.util.newFieldList(() => []);
var WarmRemoteAccessServerRequest$Runtime = (() => class _WarmRemoteAccessServerRequest extends Message<_WarmRemoteAccessServerRequest> {
  declare commit: string;
  declare port: number;
  declare connectionToken: string;
  constructor(data?: PartialMessage<_WarmRemoteAccessServerRequest>) {
    super();
    this.commit = "";
    this.port = 0;
    this.connectionToken = "";
    proto3.util.initPartial(data, this as _WarmRemoteAccessServerRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WarmRemoteAccessServerRequest {
    return new _WarmRemoteAccessServerRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WarmRemoteAccessServerRequest {
    return new _WarmRemoteAccessServerRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WarmRemoteAccessServerRequest {
    return new _WarmRemoteAccessServerRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _WarmRemoteAccessServerRequest | PlainMessage<_WarmRemoteAccessServerRequest> | undefined | null, b2: _WarmRemoteAccessServerRequest | PlainMessage<_WarmRemoteAccessServerRequest> | undefined | null): boolean {
    return proto3.util.equals(_WarmRemoteAccessServerRequest as unknown as MessageType<_WarmRemoteAccessServerRequest>, a, b2);
  }
})();
export type WarmRemoteAccessServerRequest = InstanceType<typeof WarmRemoteAccessServerRequest$Runtime>;
var WarmRemoteAccessServerRequest: MessageType<WarmRemoteAccessServerRequest> = WarmRemoteAccessServerRequest$Runtime as unknown as MessageType<WarmRemoteAccessServerRequest>;
(WarmRemoteAccessServerRequest as MutableMessageType<WarmRemoteAccessServerRequest>).runtime = proto3;
(WarmRemoteAccessServerRequest as MutableMessageType<WarmRemoteAccessServerRequest>).typeName = "agent.v1.WarmRemoteAccessServerRequest";
(WarmRemoteAccessServerRequest as MutableMessageType<WarmRemoteAccessServerRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "port",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "connection_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WarmRemoteAccessServerResponse$Runtime = (() => class _WarmRemoteAccessServerResponse extends Message<_WarmRemoteAccessServerResponse> {
  constructor(data?: PartialMessage<_WarmRemoteAccessServerResponse>) {
    super();
    proto3.util.initPartial(data, this as _WarmRemoteAccessServerResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WarmRemoteAccessServerResponse {
    return new _WarmRemoteAccessServerResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WarmRemoteAccessServerResponse {
    return new _WarmRemoteAccessServerResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WarmRemoteAccessServerResponse {
    return new _WarmRemoteAccessServerResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _WarmRemoteAccessServerResponse | PlainMessage<_WarmRemoteAccessServerResponse> | undefined | null, b2: _WarmRemoteAccessServerResponse | PlainMessage<_WarmRemoteAccessServerResponse> | undefined | null): boolean {
    return proto3.util.equals(_WarmRemoteAccessServerResponse as unknown as MessageType<_WarmRemoteAccessServerResponse>, a, b2);
  }
})();
export type WarmRemoteAccessServerResponse = InstanceType<typeof WarmRemoteAccessServerResponse$Runtime>;
var WarmRemoteAccessServerResponse: MessageType<WarmRemoteAccessServerResponse> = WarmRemoteAccessServerResponse$Runtime as unknown as MessageType<WarmRemoteAccessServerResponse>;
(WarmRemoteAccessServerResponse as MutableMessageType<WarmRemoteAccessServerResponse>).runtime = proto3;
(WarmRemoteAccessServerResponse as MutableMessageType<WarmRemoteAccessServerResponse>).typeName = "agent.v1.WarmRemoteAccessServerResponse";
(WarmRemoteAccessServerResponse as MutableMessageType<WarmRemoteAccessServerResponse>).fields = proto3.util.newFieldList(() => []);
var ListArtifactsRequest$Runtime = (() => class _ListArtifactsRequest extends Message<_ListArtifactsRequest> {
  declare extraPaths: string[];
  constructor(data?: PartialMessage<_ListArtifactsRequest>) {
    super();
    this.extraPaths = [];
    proto3.util.initPartial(data, this as _ListArtifactsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListArtifactsRequest {
    return new _ListArtifactsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListArtifactsRequest {
    return new _ListArtifactsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListArtifactsRequest {
    return new _ListArtifactsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListArtifactsRequest | PlainMessage<_ListArtifactsRequest> | undefined | null, b2: _ListArtifactsRequest | PlainMessage<_ListArtifactsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListArtifactsRequest as unknown as MessageType<_ListArtifactsRequest>, a, b2);
  }
})();
export type ListArtifactsRequest = InstanceType<typeof ListArtifactsRequest$Runtime>;
var ListArtifactsRequest: MessageType<ListArtifactsRequest> = ListArtifactsRequest$Runtime as unknown as MessageType<ListArtifactsRequest>;
(ListArtifactsRequest as MutableMessageType<ListArtifactsRequest>).runtime = proto3;
(ListArtifactsRequest as MutableMessageType<ListArtifactsRequest>).typeName = "agent.v1.ListArtifactsRequest";
(ListArtifactsRequest as MutableMessageType<ListArtifactsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "extra_paths", kind: "scalar", T: 9, repeated: true }
]);
var ArtifactUploadMetadata$Runtime = (() => class _ArtifactUploadMetadata extends Message<_ArtifactUploadMetadata> {
  declare absolutePath: string;
  declare sizeBytes: bigint;
  declare updatedAtUnixMs: bigint;
  declare status: ArtifactUploadStatus;
  declare bytesUploaded: bigint;
  declare lastError: string;
  declare uploadAttempts: number;
  declare lastStartedAtUnixMs: bigint;
  declare lastFinishedAtUnixMs: bigint;
  declare uploadId: string;
  declare artifactRelativePath?: string;
  constructor(data?: PartialMessage<_ArtifactUploadMetadata>) {
    super();
    this.absolutePath = "";
    this.sizeBytes = protoInt64.zero;
    this.updatedAtUnixMs = protoInt64.zero;
    this.status = ArtifactUploadStatus.UNSPECIFIED;
    this.bytesUploaded = protoInt64.zero;
    this.lastError = "";
    this.uploadAttempts = 0;
    this.lastStartedAtUnixMs = protoInt64.zero;
    this.lastFinishedAtUnixMs = protoInt64.zero;
    this.uploadId = "";
    proto3.util.initPartial(data, this as _ArtifactUploadMetadata);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ArtifactUploadMetadata {
    return new _ArtifactUploadMetadata().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ArtifactUploadMetadata {
    return new _ArtifactUploadMetadata().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ArtifactUploadMetadata {
    return new _ArtifactUploadMetadata().fromJsonString(jsonString, options2);
  }
  static equals(a: _ArtifactUploadMetadata | PlainMessage<_ArtifactUploadMetadata> | undefined | null, b2: _ArtifactUploadMetadata | PlainMessage<_ArtifactUploadMetadata> | undefined | null): boolean {
    return proto3.util.equals(_ArtifactUploadMetadata as unknown as MessageType<_ArtifactUploadMetadata>, a, b2);
  }
})();
export type ArtifactUploadMetadata = InstanceType<typeof ArtifactUploadMetadata$Runtime>;
var ArtifactUploadMetadata: MessageType<ArtifactUploadMetadata> = ArtifactUploadMetadata$Runtime as unknown as MessageType<ArtifactUploadMetadata>;
(ArtifactUploadMetadata as MutableMessageType<ArtifactUploadMetadata>).runtime = proto3;
(ArtifactUploadMetadata as MutableMessageType<ArtifactUploadMetadata>).typeName = "agent.v1.ArtifactUploadMetadata";
(ArtifactUploadMetadata as MutableMessageType<ArtifactUploadMetadata>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "size_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "updated_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(ArtifactUploadStatus) },
  {
    no: 5,
    name: "bytes_uploaded",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 6,
    name: "last_error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "upload_attempts",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 8,
    name: "last_started_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 9,
    name: "last_finished_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 10,
    name: "upload_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "artifact_relative_path", kind: "scalar", T: 9, opt: true }
]);
var ArtifactPathError$Runtime = (() => class _ArtifactPathError extends Message<_ArtifactPathError> {
  declare kind: ArtifactPathErrorKind;
  declare code: string;
  declare message: string;
  constructor(data?: PartialMessage<_ArtifactPathError>) {
    super();
    this.kind = ArtifactPathErrorKind.UNSPECIFIED;
    this.code = "";
    this.message = "";
    proto3.util.initPartial(data, this as _ArtifactPathError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ArtifactPathError {
    return new _ArtifactPathError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ArtifactPathError {
    return new _ArtifactPathError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ArtifactPathError {
    return new _ArtifactPathError().fromJsonString(jsonString, options2);
  }
  static equals(a: _ArtifactPathError | PlainMessage<_ArtifactPathError> | undefined | null, b2: _ArtifactPathError | PlainMessage<_ArtifactPathError> | undefined | null): boolean {
    return proto3.util.equals(_ArtifactPathError as unknown as MessageType<_ArtifactPathError>, a, b2);
  }
})();
export type ArtifactPathError = InstanceType<typeof ArtifactPathError$Runtime>;
var ArtifactPathError: MessageType<ArtifactPathError> = ArtifactPathError$Runtime as unknown as MessageType<ArtifactPathError>;
(ArtifactPathError as MutableMessageType<ArtifactPathError>).runtime = proto3;
(ArtifactPathError as MutableMessageType<ArtifactPathError>).typeName = "agent.v1.ArtifactPathError";
(ArtifactPathError as MutableMessageType<ArtifactPathError>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(ArtifactPathErrorKind) },
  {
    no: 2,
    name: "code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListArtifactsResponse$Runtime = (() => class _ListArtifactsResponse extends Message<_ListArtifactsResponse> {
  declare artifacts: ArtifactUploadMetadata[];
  declare pathErrors: { [key: string]: ArtifactPathError };
  declare rootKind: ArtifactRootKind;
  constructor(data?: PartialMessage<_ListArtifactsResponse>) {
    super();
    this.artifacts = [];
    this.pathErrors = {};
    this.rootKind = ArtifactRootKind.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ListArtifactsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListArtifactsResponse {
    return new _ListArtifactsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListArtifactsResponse {
    return new _ListArtifactsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListArtifactsResponse {
    return new _ListArtifactsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListArtifactsResponse | PlainMessage<_ListArtifactsResponse> | undefined | null, b2: _ListArtifactsResponse | PlainMessage<_ListArtifactsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListArtifactsResponse as unknown as MessageType<_ListArtifactsResponse>, a, b2);
  }
})();
export type ListArtifactsResponse = InstanceType<typeof ListArtifactsResponse$Runtime>;
var ListArtifactsResponse: MessageType<ListArtifactsResponse> = ListArtifactsResponse$Runtime as unknown as MessageType<ListArtifactsResponse>;
(ListArtifactsResponse as MutableMessageType<ListArtifactsResponse>).runtime = proto3;
(ListArtifactsResponse as MutableMessageType<ListArtifactsResponse>).typeName = "agent.v1.ListArtifactsResponse";
(ListArtifactsResponse as MutableMessageType<ListArtifactsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "artifacts", kind: "message", T: ArtifactUploadMetadata, repeated: true },
  { no: 2, name: "path_errors", kind: "map", K: 9, V: { kind: "message", T: ArtifactPathError } },
  { no: 3, name: "root_kind", kind: "enum", T: proto3.getEnumType(ArtifactRootKind) }
]);
var UploadArtifactsRequest$Runtime = (() => class _UploadArtifactsRequest extends Message<_UploadArtifactsRequest> {
  declare uploads: ArtifactUploadInstruction[];
  declare waitForCompletion: boolean;
  constructor(data?: PartialMessage<_UploadArtifactsRequest>) {
    super();
    this.uploads = [];
    this.waitForCompletion = false;
    proto3.util.initPartial(data, this as _UploadArtifactsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadArtifactsRequest {
    return new _UploadArtifactsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadArtifactsRequest {
    return new _UploadArtifactsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadArtifactsRequest {
    return new _UploadArtifactsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadArtifactsRequest | PlainMessage<_UploadArtifactsRequest> | undefined | null, b2: _UploadArtifactsRequest | PlainMessage<_UploadArtifactsRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadArtifactsRequest as unknown as MessageType<_UploadArtifactsRequest>, a, b2);
  }
})();
export type UploadArtifactsRequest = InstanceType<typeof UploadArtifactsRequest$Runtime>;
var UploadArtifactsRequest: MessageType<UploadArtifactsRequest> = UploadArtifactsRequest$Runtime as unknown as MessageType<UploadArtifactsRequest>;
(UploadArtifactsRequest as MutableMessageType<UploadArtifactsRequest>).runtime = proto3;
(UploadArtifactsRequest as MutableMessageType<UploadArtifactsRequest>).typeName = "agent.v1.UploadArtifactsRequest";
(UploadArtifactsRequest as MutableMessageType<UploadArtifactsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uploads", kind: "message", T: ArtifactUploadInstruction, repeated: true },
  {
    no: 2,
    name: "wait_for_completion",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ArtifactUploadInstruction$Runtime = (() => class _ArtifactUploadInstruction extends Message<_ArtifactUploadInstruction> {
  declare absolutePath: string;
  declare uploadUrl: string;
  declare method: string;
  declare headers: { [key: string]: string };
  declare contentType?: string;
  declare slackUploadUrl?: string;
  declare slackFileId?: string;
  declare artifactRelativePath?: string;
  constructor(data?: PartialMessage<_ArtifactUploadInstruction>) {
    super();
    this.absolutePath = "";
    this.uploadUrl = "";
    this.method = "";
    this.headers = {};
    proto3.util.initPartial(data, this as _ArtifactUploadInstruction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ArtifactUploadInstruction {
    return new _ArtifactUploadInstruction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ArtifactUploadInstruction {
    return new _ArtifactUploadInstruction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ArtifactUploadInstruction {
    return new _ArtifactUploadInstruction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ArtifactUploadInstruction | PlainMessage<_ArtifactUploadInstruction> | undefined | null, b2: _ArtifactUploadInstruction | PlainMessage<_ArtifactUploadInstruction> | undefined | null): boolean {
    return proto3.util.equals(_ArtifactUploadInstruction as unknown as MessageType<_ArtifactUploadInstruction>, a, b2);
  }
})();
export type ArtifactUploadInstruction = InstanceType<typeof ArtifactUploadInstruction$Runtime>;
var ArtifactUploadInstruction: MessageType<ArtifactUploadInstruction> = ArtifactUploadInstruction$Runtime as unknown as MessageType<ArtifactUploadInstruction>;
(ArtifactUploadInstruction as MutableMessageType<ArtifactUploadInstruction>).runtime = proto3;
(ArtifactUploadInstruction as MutableMessageType<ArtifactUploadInstruction>).typeName = "agent.v1.ArtifactUploadInstruction";
(ArtifactUploadInstruction as MutableMessageType<ArtifactUploadInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "upload_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "method",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "headers", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 5, name: "content_type", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "slack_upload_url", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "slack_file_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "artifact_relative_path", kind: "scalar", T: 9, opt: true }
]);
var ArtifactUploadDispatchResult$Runtime = (() => class _ArtifactUploadDispatchResult extends Message<_ArtifactUploadDispatchResult> {
  declare absolutePath: string;
  declare status: ArtifactUploadDispatchStatus;
  declare message: string;
  declare slackFileId?: string;
  constructor(data?: PartialMessage<_ArtifactUploadDispatchResult>) {
    super();
    this.absolutePath = "";
    this.status = ArtifactUploadDispatchStatus.UNSPECIFIED;
    this.message = "";
    proto3.util.initPartial(data, this as _ArtifactUploadDispatchResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ArtifactUploadDispatchResult {
    return new _ArtifactUploadDispatchResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ArtifactUploadDispatchResult {
    return new _ArtifactUploadDispatchResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ArtifactUploadDispatchResult {
    return new _ArtifactUploadDispatchResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _ArtifactUploadDispatchResult | PlainMessage<_ArtifactUploadDispatchResult> | undefined | null, b2: _ArtifactUploadDispatchResult | PlainMessage<_ArtifactUploadDispatchResult> | undefined | null): boolean {
    return proto3.util.equals(_ArtifactUploadDispatchResult as unknown as MessageType<_ArtifactUploadDispatchResult>, a, b2);
  }
})();
export type ArtifactUploadDispatchResult = InstanceType<typeof ArtifactUploadDispatchResult$Runtime>;
var ArtifactUploadDispatchResult: MessageType<ArtifactUploadDispatchResult> = ArtifactUploadDispatchResult$Runtime as unknown as MessageType<ArtifactUploadDispatchResult>;
(ArtifactUploadDispatchResult as MutableMessageType<ArtifactUploadDispatchResult>).runtime = proto3;
(ArtifactUploadDispatchResult as MutableMessageType<ArtifactUploadDispatchResult>).typeName = "agent.v1.ArtifactUploadDispatchResult";
(ArtifactUploadDispatchResult as MutableMessageType<ArtifactUploadDispatchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(ArtifactUploadDispatchStatus) },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "slack_file_id", kind: "scalar", T: 9, opt: true }
]);
var UploadArtifactsResponse$Runtime = (() => class _UploadArtifactsResponse extends Message<_UploadArtifactsResponse> {
  declare results: ArtifactUploadDispatchResult[];
  constructor(data?: PartialMessage<_UploadArtifactsResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _UploadArtifactsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadArtifactsResponse {
    return new _UploadArtifactsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadArtifactsResponse {
    return new _UploadArtifactsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadArtifactsResponse {
    return new _UploadArtifactsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadArtifactsResponse | PlainMessage<_UploadArtifactsResponse> | undefined | null, b2: _UploadArtifactsResponse | PlainMessage<_UploadArtifactsResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadArtifactsResponse as unknown as MessageType<_UploadArtifactsResponse>, a, b2);
  }
})();
export type UploadArtifactsResponse = InstanceType<typeof UploadArtifactsResponse$Runtime>;
var UploadArtifactsResponse: MessageType<UploadArtifactsResponse> = UploadArtifactsResponse$Runtime as unknown as MessageType<UploadArtifactsResponse>;
(UploadArtifactsResponse as MutableMessageType<UploadArtifactsResponse>).runtime = proto3;
(UploadArtifactsResponse as MutableMessageType<UploadArtifactsResponse>).typeName = "agent.v1.UploadArtifactsResponse";
(UploadArtifactsResponse as MutableMessageType<UploadArtifactsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: ArtifactUploadDispatchResult, repeated: true }
]);
var PersistArtifactToAgentStoreInstruction$Runtime = (() => class _PersistArtifactToAgentStoreInstruction extends Message<_PersistArtifactToAgentStoreInstruction> {
  declare absolutePath: string;
  declare artifactRelativePath?: string;
  constructor(data?: PartialMessage<_PersistArtifactToAgentStoreInstruction>) {
    super();
    this.absolutePath = "";
    proto3.util.initPartial(data, this as _PersistArtifactToAgentStoreInstruction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PersistArtifactToAgentStoreInstruction {
    return new _PersistArtifactToAgentStoreInstruction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PersistArtifactToAgentStoreInstruction {
    return new _PersistArtifactToAgentStoreInstruction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PersistArtifactToAgentStoreInstruction {
    return new _PersistArtifactToAgentStoreInstruction().fromJsonString(jsonString, options2);
  }
  static equals(a: _PersistArtifactToAgentStoreInstruction | PlainMessage<_PersistArtifactToAgentStoreInstruction> | undefined | null, b2: _PersistArtifactToAgentStoreInstruction | PlainMessage<_PersistArtifactToAgentStoreInstruction> | undefined | null): boolean {
    return proto3.util.equals(_PersistArtifactToAgentStoreInstruction as unknown as MessageType<_PersistArtifactToAgentStoreInstruction>, a, b2);
  }
})();
export type PersistArtifactToAgentStoreInstruction = InstanceType<typeof PersistArtifactToAgentStoreInstruction$Runtime>;
var PersistArtifactToAgentStoreInstruction: MessageType<PersistArtifactToAgentStoreInstruction> = PersistArtifactToAgentStoreInstruction$Runtime as unknown as MessageType<PersistArtifactToAgentStoreInstruction>;
(PersistArtifactToAgentStoreInstruction as MutableMessageType<PersistArtifactToAgentStoreInstruction>).runtime = proto3;
(PersistArtifactToAgentStoreInstruction as MutableMessageType<PersistArtifactToAgentStoreInstruction>).typeName = "agent.v1.PersistArtifactToAgentStoreInstruction";
(PersistArtifactToAgentStoreInstruction as MutableMessageType<PersistArtifactToAgentStoreInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "artifact_relative_path", kind: "scalar", T: 9, opt: true }
]);
var PersistArtifactsToAgentStoreRequest$Runtime = (() => class _PersistArtifactsToAgentStoreRequest extends Message<_PersistArtifactsToAgentStoreRequest> {
  declare artifacts: PersistArtifactToAgentStoreInstruction[];
  constructor(data?: PartialMessage<_PersistArtifactsToAgentStoreRequest>) {
    super();
    this.artifacts = [];
    proto3.util.initPartial(data, this as _PersistArtifactsToAgentStoreRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PersistArtifactsToAgentStoreRequest {
    return new _PersistArtifactsToAgentStoreRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PersistArtifactsToAgentStoreRequest {
    return new _PersistArtifactsToAgentStoreRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PersistArtifactsToAgentStoreRequest {
    return new _PersistArtifactsToAgentStoreRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _PersistArtifactsToAgentStoreRequest | PlainMessage<_PersistArtifactsToAgentStoreRequest> | undefined | null, b2: _PersistArtifactsToAgentStoreRequest | PlainMessage<_PersistArtifactsToAgentStoreRequest> | undefined | null): boolean {
    return proto3.util.equals(_PersistArtifactsToAgentStoreRequest as unknown as MessageType<_PersistArtifactsToAgentStoreRequest>, a, b2);
  }
})();
export type PersistArtifactsToAgentStoreRequest = InstanceType<typeof PersistArtifactsToAgentStoreRequest$Runtime>;
var PersistArtifactsToAgentStoreRequest: MessageType<PersistArtifactsToAgentStoreRequest> = PersistArtifactsToAgentStoreRequest$Runtime as unknown as MessageType<PersistArtifactsToAgentStoreRequest>;
(PersistArtifactsToAgentStoreRequest as MutableMessageType<PersistArtifactsToAgentStoreRequest>).runtime = proto3;
(PersistArtifactsToAgentStoreRequest as MutableMessageType<PersistArtifactsToAgentStoreRequest>).typeName = "agent.v1.PersistArtifactsToAgentStoreRequest";
(PersistArtifactsToAgentStoreRequest as MutableMessageType<PersistArtifactsToAgentStoreRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "artifacts", kind: "message", T: PersistArtifactToAgentStoreInstruction, repeated: true }
]);
var PersistArtifactToAgentStoreResult$Runtime = (() => class _PersistArtifactToAgentStoreResult extends Message<_PersistArtifactToAgentStoreResult> {
  declare absolutePath: string;
  declare status: PersistArtifactToAgentStoreStatus;
  declare message: string;
  constructor(data?: PartialMessage<_PersistArtifactToAgentStoreResult>) {
    super();
    this.absolutePath = "";
    this.status = PersistArtifactToAgentStoreStatus.UNSPECIFIED;
    this.message = "";
    proto3.util.initPartial(data, this as _PersistArtifactToAgentStoreResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PersistArtifactToAgentStoreResult {
    return new _PersistArtifactToAgentStoreResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PersistArtifactToAgentStoreResult {
    return new _PersistArtifactToAgentStoreResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PersistArtifactToAgentStoreResult {
    return new _PersistArtifactToAgentStoreResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PersistArtifactToAgentStoreResult | PlainMessage<_PersistArtifactToAgentStoreResult> | undefined | null, b2: _PersistArtifactToAgentStoreResult | PlainMessage<_PersistArtifactToAgentStoreResult> | undefined | null): boolean {
    return proto3.util.equals(_PersistArtifactToAgentStoreResult as unknown as MessageType<_PersistArtifactToAgentStoreResult>, a, b2);
  }
})();
export type PersistArtifactToAgentStoreResult = InstanceType<typeof PersistArtifactToAgentStoreResult$Runtime>;
var PersistArtifactToAgentStoreResult: MessageType<PersistArtifactToAgentStoreResult> = PersistArtifactToAgentStoreResult$Runtime as unknown as MessageType<PersistArtifactToAgentStoreResult>;
(PersistArtifactToAgentStoreResult as MutableMessageType<PersistArtifactToAgentStoreResult>).runtime = proto3;
(PersistArtifactToAgentStoreResult as MutableMessageType<PersistArtifactToAgentStoreResult>).typeName = "agent.v1.PersistArtifactToAgentStoreResult";
(PersistArtifactToAgentStoreResult as MutableMessageType<PersistArtifactToAgentStoreResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(PersistArtifactToAgentStoreStatus) },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistArtifactsToAgentStoreResponse$Runtime = (() => class _PersistArtifactsToAgentStoreResponse extends Message<_PersistArtifactsToAgentStoreResponse> {
  declare results: PersistArtifactToAgentStoreResult[];
  constructor(data?: PartialMessage<_PersistArtifactsToAgentStoreResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _PersistArtifactsToAgentStoreResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PersistArtifactsToAgentStoreResponse {
    return new _PersistArtifactsToAgentStoreResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PersistArtifactsToAgentStoreResponse {
    return new _PersistArtifactsToAgentStoreResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PersistArtifactsToAgentStoreResponse {
    return new _PersistArtifactsToAgentStoreResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _PersistArtifactsToAgentStoreResponse | PlainMessage<_PersistArtifactsToAgentStoreResponse> | undefined | null, b2: _PersistArtifactsToAgentStoreResponse | PlainMessage<_PersistArtifactsToAgentStoreResponse> | undefined | null): boolean {
    return proto3.util.equals(_PersistArtifactsToAgentStoreResponse as unknown as MessageType<_PersistArtifactsToAgentStoreResponse>, a, b2);
  }
})();
export type PersistArtifactsToAgentStoreResponse = InstanceType<typeof PersistArtifactsToAgentStoreResponse$Runtime>;
var PersistArtifactsToAgentStoreResponse: MessageType<PersistArtifactsToAgentStoreResponse> = PersistArtifactsToAgentStoreResponse$Runtime as unknown as MessageType<PersistArtifactsToAgentStoreResponse>;
(PersistArtifactsToAgentStoreResponse as MutableMessageType<PersistArtifactsToAgentStoreResponse>).runtime = proto3;
(PersistArtifactsToAgentStoreResponse as MutableMessageType<PersistArtifactsToAgentStoreResponse>).typeName = "agent.v1.PersistArtifactsToAgentStoreResponse";
(PersistArtifactsToAgentStoreResponse as MutableMessageType<PersistArtifactsToAgentStoreResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: PersistArtifactToAgentStoreResult, repeated: true }
]);
var RestoreArtifactInstruction$Runtime = (() => class _RestoreArtifactInstruction extends Message<_RestoreArtifactInstruction> {
  declare absolutePath: string;
  declare downloadUrl: string;
  declare updatedAtUnixMs: bigint;
  declare artifactRelativePath?: string;
  constructor(data?: PartialMessage<_RestoreArtifactInstruction>) {
    super();
    this.absolutePath = "";
    this.downloadUrl = "";
    this.updatedAtUnixMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _RestoreArtifactInstruction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RestoreArtifactInstruction {
    return new _RestoreArtifactInstruction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RestoreArtifactInstruction {
    return new _RestoreArtifactInstruction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RestoreArtifactInstruction {
    return new _RestoreArtifactInstruction().fromJsonString(jsonString, options2);
  }
  static equals(a: _RestoreArtifactInstruction | PlainMessage<_RestoreArtifactInstruction> | undefined | null, b2: _RestoreArtifactInstruction | PlainMessage<_RestoreArtifactInstruction> | undefined | null): boolean {
    return proto3.util.equals(_RestoreArtifactInstruction as unknown as MessageType<_RestoreArtifactInstruction>, a, b2);
  }
})();
export type RestoreArtifactInstruction = InstanceType<typeof RestoreArtifactInstruction$Runtime>;
var RestoreArtifactInstruction: MessageType<RestoreArtifactInstruction> = RestoreArtifactInstruction$Runtime as unknown as MessageType<RestoreArtifactInstruction>;
(RestoreArtifactInstruction as MutableMessageType<RestoreArtifactInstruction>).runtime = proto3;
(RestoreArtifactInstruction as MutableMessageType<RestoreArtifactInstruction>).typeName = "agent.v1.RestoreArtifactInstruction";
(RestoreArtifactInstruction as MutableMessageType<RestoreArtifactInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "download_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "updated_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "artifact_relative_path", kind: "scalar", T: 9, opt: true }
]);
var RestoreArtifactResult$Runtime = (() => class _RestoreArtifactResult extends Message<_RestoreArtifactResult> {
  declare status: ArtifactRestoreStatus;
  declare errorMessage: string;
  constructor(data?: PartialMessage<_RestoreArtifactResult>) {
    super();
    this.status = ArtifactRestoreStatus.UNSPECIFIED;
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _RestoreArtifactResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RestoreArtifactResult {
    return new _RestoreArtifactResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RestoreArtifactResult {
    return new _RestoreArtifactResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RestoreArtifactResult {
    return new _RestoreArtifactResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _RestoreArtifactResult | PlainMessage<_RestoreArtifactResult> | undefined | null, b2: _RestoreArtifactResult | PlainMessage<_RestoreArtifactResult> | undefined | null): boolean {
    return proto3.util.equals(_RestoreArtifactResult as unknown as MessageType<_RestoreArtifactResult>, a, b2);
  }
})();
export type RestoreArtifactResult = InstanceType<typeof RestoreArtifactResult$Runtime>;
var RestoreArtifactResult: MessageType<RestoreArtifactResult> = RestoreArtifactResult$Runtime as unknown as MessageType<RestoreArtifactResult>;
(RestoreArtifactResult as MutableMessageType<RestoreArtifactResult>).runtime = proto3;
(RestoreArtifactResult as MutableMessageType<RestoreArtifactResult>).typeName = "agent.v1.RestoreArtifactResult";
(RestoreArtifactResult as MutableMessageType<RestoreArtifactResult>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(ArtifactRestoreStatus) },
  {
    no: 3,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RestoreArtifactsRequest$Runtime = (() => class _RestoreArtifactsRequest extends Message<_RestoreArtifactsRequest> {
  declare artifacts: RestoreArtifactInstruction[];
  constructor(data?: PartialMessage<_RestoreArtifactsRequest>) {
    super();
    this.artifacts = [];
    proto3.util.initPartial(data, this as _RestoreArtifactsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RestoreArtifactsRequest {
    return new _RestoreArtifactsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RestoreArtifactsRequest {
    return new _RestoreArtifactsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RestoreArtifactsRequest {
    return new _RestoreArtifactsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _RestoreArtifactsRequest | PlainMessage<_RestoreArtifactsRequest> | undefined | null, b2: _RestoreArtifactsRequest | PlainMessage<_RestoreArtifactsRequest> | undefined | null): boolean {
    return proto3.util.equals(_RestoreArtifactsRequest as unknown as MessageType<_RestoreArtifactsRequest>, a, b2);
  }
})();
export type RestoreArtifactsRequest = InstanceType<typeof RestoreArtifactsRequest$Runtime>;
var RestoreArtifactsRequest: MessageType<RestoreArtifactsRequest> = RestoreArtifactsRequest$Runtime as unknown as MessageType<RestoreArtifactsRequest>;
(RestoreArtifactsRequest as MutableMessageType<RestoreArtifactsRequest>).runtime = proto3;
(RestoreArtifactsRequest as MutableMessageType<RestoreArtifactsRequest>).typeName = "agent.v1.RestoreArtifactsRequest";
(RestoreArtifactsRequest as MutableMessageType<RestoreArtifactsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "artifacts", kind: "message", T: RestoreArtifactInstruction, repeated: true }
]);
var RestoreArtifactsResponse$Runtime = (() => class _RestoreArtifactsResponse extends Message<_RestoreArtifactsResponse> {
  declare results: RestoreArtifactResult[];
  constructor(data?: PartialMessage<_RestoreArtifactsResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _RestoreArtifactsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RestoreArtifactsResponse {
    return new _RestoreArtifactsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RestoreArtifactsResponse {
    return new _RestoreArtifactsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RestoreArtifactsResponse {
    return new _RestoreArtifactsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _RestoreArtifactsResponse | PlainMessage<_RestoreArtifactsResponse> | undefined | null, b2: _RestoreArtifactsResponse | PlainMessage<_RestoreArtifactsResponse> | undefined | null): boolean {
    return proto3.util.equals(_RestoreArtifactsResponse as unknown as MessageType<_RestoreArtifactsResponse>, a, b2);
  }
})();
export type RestoreArtifactsResponse = InstanceType<typeof RestoreArtifactsResponse$Runtime>;
var RestoreArtifactsResponse: MessageType<RestoreArtifactsResponse> = RestoreArtifactsResponse$Runtime as unknown as MessageType<RestoreArtifactsResponse>;
(RestoreArtifactsResponse as MutableMessageType<RestoreArtifactsResponse>).runtime = proto3;
(RestoreArtifactsResponse as MutableMessageType<RestoreArtifactsResponse>).typeName = "agent.v1.RestoreArtifactsResponse";
(RestoreArtifactsResponse as MutableMessageType<RestoreArtifactsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: RestoreArtifactResult, repeated: true }
]);
var GetMcpRefreshTokensRequest$Runtime = (() => class _GetMcpRefreshTokensRequest extends Message<_GetMcpRefreshTokensRequest> {
  constructor(data?: PartialMessage<_GetMcpRefreshTokensRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetMcpRefreshTokensRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetMcpRefreshTokensRequest {
    return new _GetMcpRefreshTokensRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetMcpRefreshTokensRequest {
    return new _GetMcpRefreshTokensRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetMcpRefreshTokensRequest {
    return new _GetMcpRefreshTokensRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetMcpRefreshTokensRequest | PlainMessage<_GetMcpRefreshTokensRequest> | undefined | null, b2: _GetMcpRefreshTokensRequest | PlainMessage<_GetMcpRefreshTokensRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpRefreshTokensRequest as unknown as MessageType<_GetMcpRefreshTokensRequest>, a, b2);
  }
})();
export type GetMcpRefreshTokensRequest = InstanceType<typeof GetMcpRefreshTokensRequest$Runtime>;
var GetMcpRefreshTokensRequest: MessageType<GetMcpRefreshTokensRequest> = GetMcpRefreshTokensRequest$Runtime as unknown as MessageType<GetMcpRefreshTokensRequest>;
(GetMcpRefreshTokensRequest as MutableMessageType<GetMcpRefreshTokensRequest>).runtime = proto3;
(GetMcpRefreshTokensRequest as MutableMessageType<GetMcpRefreshTokensRequest>).typeName = "agent.v1.GetMcpRefreshTokensRequest";
(GetMcpRefreshTokensRequest as MutableMessageType<GetMcpRefreshTokensRequest>).fields = proto3.util.newFieldList(() => []);
var GetMcpRefreshTokensResponse$Runtime = (() => class _GetMcpRefreshTokensResponse extends Message<_GetMcpRefreshTokensResponse> {
  declare refreshTokens: { [key: string]: string };
  constructor(data?: PartialMessage<_GetMcpRefreshTokensResponse>) {
    super();
    this.refreshTokens = {};
    proto3.util.initPartial(data, this as _GetMcpRefreshTokensResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetMcpRefreshTokensResponse {
    return new _GetMcpRefreshTokensResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetMcpRefreshTokensResponse {
    return new _GetMcpRefreshTokensResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetMcpRefreshTokensResponse {
    return new _GetMcpRefreshTokensResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetMcpRefreshTokensResponse | PlainMessage<_GetMcpRefreshTokensResponse> | undefined | null, b2: _GetMcpRefreshTokensResponse | PlainMessage<_GetMcpRefreshTokensResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpRefreshTokensResponse as unknown as MessageType<_GetMcpRefreshTokensResponse>, a, b2);
  }
})();
export type GetMcpRefreshTokensResponse = InstanceType<typeof GetMcpRefreshTokensResponse$Runtime>;
var GetMcpRefreshTokensResponse: MessageType<GetMcpRefreshTokensResponse> = GetMcpRefreshTokensResponse$Runtime as unknown as MessageType<GetMcpRefreshTokensResponse>;
(GetMcpRefreshTokensResponse as MutableMessageType<GetMcpRefreshTokensResponse>).runtime = proto3;
(GetMcpRefreshTokensResponse as MutableMessageType<GetMcpRefreshTokensResponse>).typeName = "agent.v1.GetMcpRefreshTokensResponse";
(GetMcpRefreshTokensResponse as MutableMessageType<GetMcpRefreshTokensResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "refresh_tokens", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var UpdateEnvironmentVariablesRequest$Runtime = (() => class _UpdateEnvironmentVariablesRequest extends Message<_UpdateEnvironmentVariablesRequest> {
  declare env: { [key: string]: string };
  declare replace: boolean;
  declare restorePreviousValues: boolean;
  declare runScopedOverlay?: RunScopedOverlay;
  constructor(data?: PartialMessage<_UpdateEnvironmentVariablesRequest>) {
    super();
    this.env = {};
    this.replace = false;
    this.restorePreviousValues = false;
    proto3.util.initPartial(data, this as _UpdateEnvironmentVariablesRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateEnvironmentVariablesRequest {
    return new _UpdateEnvironmentVariablesRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateEnvironmentVariablesRequest {
    return new _UpdateEnvironmentVariablesRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateEnvironmentVariablesRequest {
    return new _UpdateEnvironmentVariablesRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateEnvironmentVariablesRequest | PlainMessage<_UpdateEnvironmentVariablesRequest> | undefined | null, b2: _UpdateEnvironmentVariablesRequest | PlainMessage<_UpdateEnvironmentVariablesRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateEnvironmentVariablesRequest as unknown as MessageType<_UpdateEnvironmentVariablesRequest>, a, b2);
  }
})();
export type UpdateEnvironmentVariablesRequest = InstanceType<typeof UpdateEnvironmentVariablesRequest$Runtime>;
var UpdateEnvironmentVariablesRequest: MessageType<UpdateEnvironmentVariablesRequest> = UpdateEnvironmentVariablesRequest$Runtime as unknown as MessageType<UpdateEnvironmentVariablesRequest>;
(UpdateEnvironmentVariablesRequest as MutableMessageType<UpdateEnvironmentVariablesRequest>).runtime = proto3;
(UpdateEnvironmentVariablesRequest as MutableMessageType<UpdateEnvironmentVariablesRequest>).typeName = "agent.v1.UpdateEnvironmentVariablesRequest";
(UpdateEnvironmentVariablesRequest as MutableMessageType<UpdateEnvironmentVariablesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "env", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 2,
    name: "replace",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "restore_previous_values",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "run_scoped_overlay", kind: "message", T: RunScopedOverlay }
]);
var RunScopedOverlay$Runtime = (() => class _RunScopedOverlay extends Message<_RunScopedOverlay> {
  declare runId: string;
  declare release: boolean;
  declare holder: string;
  constructor(data?: PartialMessage<_RunScopedOverlay>) {
    super();
    this.runId = "";
    this.release = false;
    this.holder = "";
    proto3.util.initPartial(data, this as _RunScopedOverlay);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RunScopedOverlay {
    return new _RunScopedOverlay().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RunScopedOverlay {
    return new _RunScopedOverlay().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RunScopedOverlay {
    return new _RunScopedOverlay().fromJsonString(jsonString, options2);
  }
  static equals(a: _RunScopedOverlay | PlainMessage<_RunScopedOverlay> | undefined | null, b2: _RunScopedOverlay | PlainMessage<_RunScopedOverlay> | undefined | null): boolean {
    return proto3.util.equals(_RunScopedOverlay as unknown as MessageType<_RunScopedOverlay>, a, b2);
  }
})();
export type RunScopedOverlay = InstanceType<typeof RunScopedOverlay$Runtime>;
var RunScopedOverlay: MessageType<RunScopedOverlay> = RunScopedOverlay$Runtime as unknown as MessageType<RunScopedOverlay>;
(RunScopedOverlay as MutableMessageType<RunScopedOverlay>).runtime = proto3;
(RunScopedOverlay as MutableMessageType<RunScopedOverlay>).typeName = "agent.v1.RunScopedOverlay";
(RunScopedOverlay as MutableMessageType<RunScopedOverlay>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "release",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "holder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateEnvironmentVariablesResponse$Runtime = (() => class _UpdateEnvironmentVariablesResponse extends Message<_UpdateEnvironmentVariablesResponse> {
  declare applied: number;
  declare removed: number;
  constructor(data?: PartialMessage<_UpdateEnvironmentVariablesResponse>) {
    super();
    this.applied = 0;
    this.removed = 0;
    proto3.util.initPartial(data, this as _UpdateEnvironmentVariablesResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateEnvironmentVariablesResponse {
    return new _UpdateEnvironmentVariablesResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateEnvironmentVariablesResponse {
    return new _UpdateEnvironmentVariablesResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateEnvironmentVariablesResponse {
    return new _UpdateEnvironmentVariablesResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateEnvironmentVariablesResponse | PlainMessage<_UpdateEnvironmentVariablesResponse> | undefined | null, b2: _UpdateEnvironmentVariablesResponse | PlainMessage<_UpdateEnvironmentVariablesResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateEnvironmentVariablesResponse as unknown as MessageType<_UpdateEnvironmentVariablesResponse>, a, b2);
  }
})();
export type UpdateEnvironmentVariablesResponse = InstanceType<typeof UpdateEnvironmentVariablesResponse$Runtime>;
var UpdateEnvironmentVariablesResponse: MessageType<UpdateEnvironmentVariablesResponse> = UpdateEnvironmentVariablesResponse$Runtime as unknown as MessageType<UpdateEnvironmentVariablesResponse>;
(UpdateEnvironmentVariablesResponse as MutableMessageType<UpdateEnvironmentVariablesResponse>).runtime = proto3;
(UpdateEnvironmentVariablesResponse as MutableMessageType<UpdateEnvironmentVariablesResponse>).typeName = "agent.v1.UpdateEnvironmentVariablesResponse";
(UpdateEnvironmentVariablesResponse as MutableMessageType<UpdateEnvironmentVariablesResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "applied",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "removed",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var DownloadCursorServerRequest$Runtime = (() => class _DownloadCursorServerRequest extends Message<_DownloadCursorServerRequest> {
  declare commit: string;
  constructor(data?: PartialMessage<_DownloadCursorServerRequest>) {
    super();
    this.commit = "";
    proto3.util.initPartial(data, this as _DownloadCursorServerRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DownloadCursorServerRequest {
    return new _DownloadCursorServerRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DownloadCursorServerRequest {
    return new _DownloadCursorServerRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DownloadCursorServerRequest {
    return new _DownloadCursorServerRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DownloadCursorServerRequest | PlainMessage<_DownloadCursorServerRequest> | undefined | null, b2: _DownloadCursorServerRequest | PlainMessage<_DownloadCursorServerRequest> | undefined | null): boolean {
    return proto3.util.equals(_DownloadCursorServerRequest as unknown as MessageType<_DownloadCursorServerRequest>, a, b2);
  }
})();
export type DownloadCursorServerRequest = InstanceType<typeof DownloadCursorServerRequest$Runtime>;
var DownloadCursorServerRequest: MessageType<DownloadCursorServerRequest> = DownloadCursorServerRequest$Runtime as unknown as MessageType<DownloadCursorServerRequest>;
(DownloadCursorServerRequest as MutableMessageType<DownloadCursorServerRequest>).runtime = proto3;
(DownloadCursorServerRequest as MutableMessageType<DownloadCursorServerRequest>).typeName = "agent.v1.DownloadCursorServerRequest";
(DownloadCursorServerRequest as MutableMessageType<DownloadCursorServerRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DownloadCursorServerResponse$Runtime = (() => class _DownloadCursorServerResponse extends Message<_DownloadCursorServerResponse> {
  declare alreadyDownloaded: boolean;
  constructor(data?: PartialMessage<_DownloadCursorServerResponse>) {
    super();
    this.alreadyDownloaded = false;
    proto3.util.initPartial(data, this as _DownloadCursorServerResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DownloadCursorServerResponse {
    return new _DownloadCursorServerResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DownloadCursorServerResponse {
    return new _DownloadCursorServerResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DownloadCursorServerResponse {
    return new _DownloadCursorServerResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DownloadCursorServerResponse | PlainMessage<_DownloadCursorServerResponse> | undefined | null, b2: _DownloadCursorServerResponse | PlainMessage<_DownloadCursorServerResponse> | undefined | null): boolean {
    return proto3.util.equals(_DownloadCursorServerResponse as unknown as MessageType<_DownloadCursorServerResponse>, a, b2);
  }
})();
export type DownloadCursorServerResponse = InstanceType<typeof DownloadCursorServerResponse$Runtime>;
var DownloadCursorServerResponse: MessageType<DownloadCursorServerResponse> = DownloadCursorServerResponse$Runtime as unknown as MessageType<DownloadCursorServerResponse>;
(DownloadCursorServerResponse as MutableMessageType<DownloadCursorServerResponse>).runtime = proto3;
(DownloadCursorServerResponse as MutableMessageType<DownloadCursorServerResponse>).typeName = "agent.v1.DownloadCursorServerResponse";
(DownloadCursorServerResponse as MutableMessageType<DownloadCursorServerResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "already_downloaded",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var InstallPluginArtifactRequest$Runtime = (() => class _InstallPluginArtifactRequest extends Message<_InstallPluginArtifactRequest> {
  declare downloadUrl: string;
  declare targetRoot: string;
  declare artifactDigest: string;
  constructor(data?: PartialMessage<_InstallPluginArtifactRequest>) {
    super();
    this.downloadUrl = "";
    this.targetRoot = "";
    this.artifactDigest = "";
    proto3.util.initPartial(data, this as _InstallPluginArtifactRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InstallPluginArtifactRequest {
    return new _InstallPluginArtifactRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InstallPluginArtifactRequest {
    return new _InstallPluginArtifactRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InstallPluginArtifactRequest {
    return new _InstallPluginArtifactRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _InstallPluginArtifactRequest | PlainMessage<_InstallPluginArtifactRequest> | undefined | null, b2: _InstallPluginArtifactRequest | PlainMessage<_InstallPluginArtifactRequest> | undefined | null): boolean {
    return proto3.util.equals(_InstallPluginArtifactRequest as unknown as MessageType<_InstallPluginArtifactRequest>, a, b2);
  }
})();
export type InstallPluginArtifactRequest = InstanceType<typeof InstallPluginArtifactRequest$Runtime>;
var InstallPluginArtifactRequest: MessageType<InstallPluginArtifactRequest> = InstallPluginArtifactRequest$Runtime as unknown as MessageType<InstallPluginArtifactRequest>;
(InstallPluginArtifactRequest as MutableMessageType<InstallPluginArtifactRequest>).runtime = proto3;
(InstallPluginArtifactRequest as MutableMessageType<InstallPluginArtifactRequest>).typeName = "agent.v1.InstallPluginArtifactRequest";
(InstallPluginArtifactRequest as MutableMessageType<InstallPluginArtifactRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "download_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "target_root",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "artifact_digest",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InstallPluginArtifactResponse$Runtime = (() => class _InstallPluginArtifactResponse extends Message<_InstallPluginArtifactResponse> {
  constructor(data?: PartialMessage<_InstallPluginArtifactResponse>) {
    super();
    proto3.util.initPartial(data, this as _InstallPluginArtifactResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InstallPluginArtifactResponse {
    return new _InstallPluginArtifactResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InstallPluginArtifactResponse {
    return new _InstallPluginArtifactResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InstallPluginArtifactResponse {
    return new _InstallPluginArtifactResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _InstallPluginArtifactResponse | PlainMessage<_InstallPluginArtifactResponse> | undefined | null, b2: _InstallPluginArtifactResponse | PlainMessage<_InstallPluginArtifactResponse> | undefined | null): boolean {
    return proto3.util.equals(_InstallPluginArtifactResponse as unknown as MessageType<_InstallPluginArtifactResponse>, a, b2);
  }
})();
export type InstallPluginArtifactResponse = InstanceType<typeof InstallPluginArtifactResponse$Runtime>;
var InstallPluginArtifactResponse: MessageType<InstallPluginArtifactResponse> = InstallPluginArtifactResponse$Runtime as unknown as MessageType<InstallPluginArtifactResponse>;
(InstallPluginArtifactResponse as MutableMessageType<InstallPluginArtifactResponse>).runtime = proto3;
(InstallPluginArtifactResponse as MutableMessageType<InstallPluginArtifactResponse>).typeName = "agent.v1.InstallPluginArtifactResponse";
(InstallPluginArtifactResponse as MutableMessageType<InstallPluginArtifactResponse>).fields = proto3.util.newFieldList(() => []);
var LoadMcpServersRequest$Runtime = (() => class _LoadMcpServersRequest extends Message<_LoadMcpServersRequest> {
  declare mcpConfigJson: string;
  declare removeMissing: boolean;
  constructor(data?: PartialMessage<_LoadMcpServersRequest>) {
    super();
    this.mcpConfigJson = "";
    this.removeMissing = false;
    proto3.util.initPartial(data, this as _LoadMcpServersRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LoadMcpServersRequest {
    return new _LoadMcpServersRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LoadMcpServersRequest {
    return new _LoadMcpServersRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LoadMcpServersRequest {
    return new _LoadMcpServersRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _LoadMcpServersRequest | PlainMessage<_LoadMcpServersRequest> | undefined | null, b2: _LoadMcpServersRequest | PlainMessage<_LoadMcpServersRequest> | undefined | null): boolean {
    return proto3.util.equals(_LoadMcpServersRequest as unknown as MessageType<_LoadMcpServersRequest>, a, b2);
  }
})();
export type LoadMcpServersRequest = InstanceType<typeof LoadMcpServersRequest$Runtime>;
var LoadMcpServersRequest: MessageType<LoadMcpServersRequest> = LoadMcpServersRequest$Runtime as unknown as MessageType<LoadMcpServersRequest>;
(LoadMcpServersRequest as MutableMessageType<LoadMcpServersRequest>).runtime = proto3;
(LoadMcpServersRequest as MutableMessageType<LoadMcpServersRequest>).typeName = "agent.v1.LoadMcpServersRequest";
(LoadMcpServersRequest as MutableMessageType<LoadMcpServersRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "mcp_config_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "remove_missing",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var LoadMcpServersResponse$Runtime = (() => class _LoadMcpServersResponse extends Message<_LoadMcpServersResponse> {
  declare loadedServerNames: string[];
  constructor(data?: PartialMessage<_LoadMcpServersResponse>) {
    super();
    this.loadedServerNames = [];
    proto3.util.initPartial(data, this as _LoadMcpServersResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LoadMcpServersResponse {
    return new _LoadMcpServersResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LoadMcpServersResponse {
    return new _LoadMcpServersResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LoadMcpServersResponse {
    return new _LoadMcpServersResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _LoadMcpServersResponse | PlainMessage<_LoadMcpServersResponse> | undefined | null, b2: _LoadMcpServersResponse | PlainMessage<_LoadMcpServersResponse> | undefined | null): boolean {
    return proto3.util.equals(_LoadMcpServersResponse as unknown as MessageType<_LoadMcpServersResponse>, a, b2);
  }
})();
export type LoadMcpServersResponse = InstanceType<typeof LoadMcpServersResponse$Runtime>;
var LoadMcpServersResponse: MessageType<LoadMcpServersResponse> = LoadMcpServersResponse$Runtime as unknown as MessageType<LoadMcpServersResponse>;
(LoadMcpServersResponse as MutableMessageType<LoadMcpServersResponse>).runtime = proto3;
(LoadMcpServersResponse as MutableMessageType<LoadMcpServersResponse>).typeName = "agent.v1.LoadMcpServersResponse";
(LoadMcpServersResponse as MutableMessageType<LoadMcpServersResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "loaded_server_names", kind: "scalar", T: 9, repeated: true }
]);

export { EntryType, BatchGetDiffErrorKind, ArtifactUploadStatus, ArtifactPathErrorKind, ArtifactRootKind, ArtifactUploadDispatchStatus, PersistArtifactToAgentStoreStatus, ArtifactRestoreStatus, PingRequest, PingResponse, GetCapabilitiesRequest, GetCapabilitiesResponse, ReloadAgentSkillsRequest, ReloadAgentSkillsResponse, ReloadPluginsRequest, ReloadPluginsResponse, ExecRequest, ExecResponse, StdoutEvent, StderrEvent, ExitEvent, ListDirectoryRequest, ListDirectoryResponse, DirectoryEntry, ReadTextFileRequest, ReadTextFileResponse, WriteTextFileRequest, WriteTextFileResponse, ReadBinaryFileRequest, ReadBinaryFileResponse, ExportFileRequest, ExportFileMetadata, ExportFileResponse, WriteBinaryFileRequest, WriteBinaryFileResponse, GetWorkspaceChangesHashRequest, GetWorkspaceChangesHashResponse, BatchGetDiffRequest, BatchGetDiffItem, BatchGetDiffResponse, BatchGetDiffResult, BatchGetDiffError, RefreshGithubAccessTokenRequest, RefreshGithubAccessTokenResponse, WarmRemoteAccessServerRequest, WarmRemoteAccessServerResponse, ListArtifactsRequest, ArtifactUploadMetadata, ArtifactPathError, ListArtifactsResponse, UploadArtifactsRequest, ArtifactUploadInstruction, ArtifactUploadDispatchResult, UploadArtifactsResponse, PersistArtifactToAgentStoreInstruction, PersistArtifactsToAgentStoreRequest, PersistArtifactToAgentStoreResult, PersistArtifactsToAgentStoreResponse, RestoreArtifactInstruction, RestoreArtifactResult, RestoreArtifactsRequest, RestoreArtifactsResponse, GetMcpRefreshTokensRequest, GetMcpRefreshTokensResponse, UpdateEnvironmentVariablesRequest, RunScopedOverlay, UpdateEnvironmentVariablesResponse, DownloadCursorServerRequest, DownloadCursorServerResponse, InstallPluginArtifactRequest, InstallPluginArtifactResponse, LoadMcpServersRequest, LoadMcpServersResponse };
