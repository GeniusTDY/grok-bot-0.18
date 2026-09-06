/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:488426-491543
 * Region SHA-256: 97542b1dfa32dc680164e885132c0ca5e51e1de5e3fa9f5cc4c4c4ed8f7d298b
 */
import { Any, Empty, Message, Struct, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type SandSetupManifestScopeKind = 0 | 1 | 2 | 3;
var SandSetupManifestScopeKind: {
  "UNSPECIFIED": 0;
  "USER": 1;
  "TEAM": 2;
  "ORGANIZATION": 3;
  0: "UNSPECIFIED";
  1: "USER";
  2: "TEAM";
  3: "ORGANIZATION";
};
export type SandBoxMigrationPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
var SandBoxMigrationPhase: {
  "UNSPECIFIED": 0;
  "BACKING_UP": 1;
  "CREATING": 2;
  "MOVING": 3;
  "CLEANING_UP": 4;
  "WIPING": 5;
  "DONE": 6;
  "FAILED": 7;
  0: "UNSPECIFIED";
  1: "BACKING_UP";
  2: "CREATING";
  3: "MOVING";
  4: "CLEANING_UP";
  5: "WIPING";
  6: "DONE";
  7: "FAILED";
};
export type SandBoxRunState = 0 | 1 | 2 | 3;
var SandBoxRunState: {
  "UNSPECIFIED": 0;
  "ABSENT": 1;
  "HIBERNATED": 2;
  "RUNNING": 3;
  0: "UNSPECIFIED";
  1: "ABSENT";
  2: "HIBERNATED";
  3: "RUNNING";
};
export type SandBoxStoreMultipartOperationFailureCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
var SandBoxStoreMultipartOperationFailureCode: {
  "UNSPECIFIED": 0;
  "PRECONDITION_FAILED": 1;
  "UPLOAD_NOT_FOUND": 2;
  "INVALID_PARTS": 3;
  "CHECKSUM_MISMATCH": 4;
  "TRANSIENT": 5;
  "INTERNAL": 6;
  "RESTART_REQUIRED": 7;
  0: "UNSPECIFIED";
  1: "PRECONDITION_FAILED";
  2: "UPLOAD_NOT_FOUND";
  3: "INVALID_PARTS";
  4: "CHECKSUM_MISMATCH";
  5: "TRANSIENT";
  6: "INTERNAL";
  7: "RESTART_REQUIRED";
};
(function(SandSetupManifestScopeKind2) {
  SandSetupManifestScopeKind2[SandSetupManifestScopeKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandSetupManifestScopeKind2[SandSetupManifestScopeKind2["USER"] = 1] = "USER";
  SandSetupManifestScopeKind2[SandSetupManifestScopeKind2["TEAM"] = 2] = "TEAM";
  SandSetupManifestScopeKind2[SandSetupManifestScopeKind2["ORGANIZATION"] = 3] = "ORGANIZATION";
})(SandSetupManifestScopeKind! || (SandSetupManifestScopeKind = {} as typeof SandSetupManifestScopeKind));
proto3.util.setEnumType(SandSetupManifestScopeKind, "aiserver.v1.SandSetupManifestScopeKind", [
  { no: 0, name: "SAND_SETUP_MANIFEST_SCOPE_KIND_UNSPECIFIED" },
  { no: 1, name: "SAND_SETUP_MANIFEST_SCOPE_KIND_USER" },
  { no: 2, name: "SAND_SETUP_MANIFEST_SCOPE_KIND_TEAM" },
  { no: 3, name: "SAND_SETUP_MANIFEST_SCOPE_KIND_ORGANIZATION" }
]);
(function(SandBoxMigrationPhase2) {
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["BACKING_UP"] = 1] = "BACKING_UP";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["CREATING"] = 2] = "CREATING";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["MOVING"] = 3] = "MOVING";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["CLEANING_UP"] = 4] = "CLEANING_UP";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["WIPING"] = 5] = "WIPING";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["DONE"] = 6] = "DONE";
  SandBoxMigrationPhase2[SandBoxMigrationPhase2["FAILED"] = 7] = "FAILED";
})(SandBoxMigrationPhase! || (SandBoxMigrationPhase = {} as typeof SandBoxMigrationPhase));
proto3.util.setEnumType(SandBoxMigrationPhase, "aiserver.v1.SandBoxMigrationPhase", [
  { no: 0, name: "SAND_BOX_MIGRATION_PHASE_UNSPECIFIED" },
  { no: 1, name: "SAND_BOX_MIGRATION_PHASE_BACKING_UP" },
  { no: 2, name: "SAND_BOX_MIGRATION_PHASE_CREATING" },
  { no: 3, name: "SAND_BOX_MIGRATION_PHASE_MOVING" },
  { no: 4, name: "SAND_BOX_MIGRATION_PHASE_CLEANING_UP" },
  { no: 5, name: "SAND_BOX_MIGRATION_PHASE_WIPING" },
  { no: 6, name: "SAND_BOX_MIGRATION_PHASE_DONE" },
  { no: 7, name: "SAND_BOX_MIGRATION_PHASE_FAILED" }
]);
(function(SandBoxRunState2) {
  SandBoxRunState2[SandBoxRunState2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandBoxRunState2[SandBoxRunState2["ABSENT"] = 1] = "ABSENT";
  SandBoxRunState2[SandBoxRunState2["HIBERNATED"] = 2] = "HIBERNATED";
  SandBoxRunState2[SandBoxRunState2["RUNNING"] = 3] = "RUNNING";
})(SandBoxRunState! || (SandBoxRunState = {} as typeof SandBoxRunState));
proto3.util.setEnumType(SandBoxRunState, "aiserver.v1.SandBoxRunState", [
  { no: 0, name: "SAND_BOX_RUN_STATE_UNSPECIFIED" },
  { no: 1, name: "SAND_BOX_RUN_STATE_ABSENT" },
  { no: 2, name: "SAND_BOX_RUN_STATE_HIBERNATED" },
  { no: 3, name: "SAND_BOX_RUN_STATE_RUNNING" }
]);
(function(SandBoxStoreMultipartOperationFailureCode2) {
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["PRECONDITION_FAILED"] = 1] = "PRECONDITION_FAILED";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["UPLOAD_NOT_FOUND"] = 2] = "UPLOAD_NOT_FOUND";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["INVALID_PARTS"] = 3] = "INVALID_PARTS";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["CHECKSUM_MISMATCH"] = 4] = "CHECKSUM_MISMATCH";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["TRANSIENT"] = 5] = "TRANSIENT";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["INTERNAL"] = 6] = "INTERNAL";
  SandBoxStoreMultipartOperationFailureCode2[SandBoxStoreMultipartOperationFailureCode2["RESTART_REQUIRED"] = 7] = "RESTART_REQUIRED";
})(SandBoxStoreMultipartOperationFailureCode! || (SandBoxStoreMultipartOperationFailureCode = {} as typeof SandBoxStoreMultipartOperationFailureCode));
proto3.util.setEnumType(SandBoxStoreMultipartOperationFailureCode, "aiserver.v1.SandBoxStoreMultipartOperationFailureCode", [
  { no: 0, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_UNSPECIFIED" },
  { no: 1, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_PRECONDITION_FAILED" },
  { no: 2, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_UPLOAD_NOT_FOUND" },
  { no: 3, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_INVALID_PARTS" },
  { no: 4, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_CHECKSUM_MISMATCH" },
  { no: 5, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_TRANSIENT" },
  { no: 6, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_INTERNAL" },
  { no: 7, name: "SAND_BOX_STORE_MULTIPART_OPERATION_FAILURE_CODE_RESTART_REQUIRED" }
]);
var NotifySandAgentTurnFinishedRequest$Runtime = (() => class _NotifySandAgentTurnFinishedRequest extends Message<_NotifySandAgentTurnFinishedRequest> {
  declare agentId: string;
  declare agentName: string;
  declare messagePreview: string;
  declare lastMessageId: string;
  declare awaitingUserResponse: boolean;
  constructor(data?: PartialMessage<_NotifySandAgentTurnFinishedRequest>) {
    super();
    this.agentId = "";
    this.agentName = "";
    this.messagePreview = "";
    this.lastMessageId = "";
    this.awaitingUserResponse = false;
    proto3.util.initPartial(data, this as _NotifySandAgentTurnFinishedRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NotifySandAgentTurnFinishedRequest {
    return new _NotifySandAgentTurnFinishedRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NotifySandAgentTurnFinishedRequest {
    return new _NotifySandAgentTurnFinishedRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NotifySandAgentTurnFinishedRequest {
    return new _NotifySandAgentTurnFinishedRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _NotifySandAgentTurnFinishedRequest | PlainMessage<_NotifySandAgentTurnFinishedRequest> | undefined | null, b2: _NotifySandAgentTurnFinishedRequest | PlainMessage<_NotifySandAgentTurnFinishedRequest> | undefined | null): boolean {
    return proto3.util.equals(_NotifySandAgentTurnFinishedRequest as unknown as MessageType<_NotifySandAgentTurnFinishedRequest>, a, b2);
  }
})();
export type NotifySandAgentTurnFinishedRequest = InstanceType<typeof NotifySandAgentTurnFinishedRequest$Runtime>;
var NotifySandAgentTurnFinishedRequest: MessageType<NotifySandAgentTurnFinishedRequest> = NotifySandAgentTurnFinishedRequest$Runtime as unknown as MessageType<NotifySandAgentTurnFinishedRequest>;
(NotifySandAgentTurnFinishedRequest as MutableMessageType<NotifySandAgentTurnFinishedRequest>).runtime = proto3;
(NotifySandAgentTurnFinishedRequest as MutableMessageType<NotifySandAgentTurnFinishedRequest>).typeName = "aiserver.v1.NotifySandAgentTurnFinishedRequest";
(NotifySandAgentTurnFinishedRequest as MutableMessageType<NotifySandAgentTurnFinishedRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "agent_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message_preview",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "last_message_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "awaiting_user_response",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var NotifySandAgentTurnFinishedResponse$Runtime = (() => class _NotifySandAgentTurnFinishedResponse extends Message<_NotifySandAgentTurnFinishedResponse> {
  constructor(data?: PartialMessage<_NotifySandAgentTurnFinishedResponse>) {
    super();
    proto3.util.initPartial(data, this as _NotifySandAgentTurnFinishedResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NotifySandAgentTurnFinishedResponse {
    return new _NotifySandAgentTurnFinishedResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NotifySandAgentTurnFinishedResponse {
    return new _NotifySandAgentTurnFinishedResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NotifySandAgentTurnFinishedResponse {
    return new _NotifySandAgentTurnFinishedResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _NotifySandAgentTurnFinishedResponse | PlainMessage<_NotifySandAgentTurnFinishedResponse> | undefined | null, b2: _NotifySandAgentTurnFinishedResponse | PlainMessage<_NotifySandAgentTurnFinishedResponse> | undefined | null): boolean {
    return proto3.util.equals(_NotifySandAgentTurnFinishedResponse as unknown as MessageType<_NotifySandAgentTurnFinishedResponse>, a, b2);
  }
})();
export type NotifySandAgentTurnFinishedResponse = InstanceType<typeof NotifySandAgentTurnFinishedResponse$Runtime>;
var NotifySandAgentTurnFinishedResponse: MessageType<NotifySandAgentTurnFinishedResponse> = NotifySandAgentTurnFinishedResponse$Runtime as unknown as MessageType<NotifySandAgentTurnFinishedResponse>;
(NotifySandAgentTurnFinishedResponse as MutableMessageType<NotifySandAgentTurnFinishedResponse>).runtime = proto3;
(NotifySandAgentTurnFinishedResponse as MutableMessageType<NotifySandAgentTurnFinishedResponse>).typeName = "aiserver.v1.NotifySandAgentTurnFinishedResponse";
(NotifySandAgentTurnFinishedResponse as MutableMessageType<NotifySandAgentTurnFinishedResponse>).fields = proto3.util.newFieldList(() => []);
var ListSandSetupManifestsRequest$Runtime = (() => class _ListSandSetupManifestsRequest extends Message<_ListSandSetupManifestsRequest> {
  constructor(data?: PartialMessage<_ListSandSetupManifestsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListSandSetupManifestsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandSetupManifestsRequest {
    return new _ListSandSetupManifestsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandSetupManifestsRequest {
    return new _ListSandSetupManifestsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandSetupManifestsRequest {
    return new _ListSandSetupManifestsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandSetupManifestsRequest | PlainMessage<_ListSandSetupManifestsRequest> | undefined | null, b2: _ListSandSetupManifestsRequest | PlainMessage<_ListSandSetupManifestsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListSandSetupManifestsRequest as unknown as MessageType<_ListSandSetupManifestsRequest>, a, b2);
  }
})();
export type ListSandSetupManifestsRequest = InstanceType<typeof ListSandSetupManifestsRequest$Runtime>;
var ListSandSetupManifestsRequest: MessageType<ListSandSetupManifestsRequest> = ListSandSetupManifestsRequest$Runtime as unknown as MessageType<ListSandSetupManifestsRequest>;
(ListSandSetupManifestsRequest as MutableMessageType<ListSandSetupManifestsRequest>).runtime = proto3;
(ListSandSetupManifestsRequest as MutableMessageType<ListSandSetupManifestsRequest>).typeName = "aiserver.v1.ListSandSetupManifestsRequest";
(ListSandSetupManifestsRequest as MutableMessageType<ListSandSetupManifestsRequest>).fields = proto3.util.newFieldList(() => []);
var SandSetupManifestEntry$Runtime = (() => class _SandSetupManifestEntry extends Message<_SandSetupManifestEntry> {
  declare id: string;
  declare setup: string;
  declare check?: string;
  constructor(data?: PartialMessage<_SandSetupManifestEntry>) {
    super();
    this.id = "";
    this.setup = "";
    proto3.util.initPartial(data, this as _SandSetupManifestEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandSetupManifestEntry {
    return new _SandSetupManifestEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandSetupManifestEntry {
    return new _SandSetupManifestEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandSetupManifestEntry {
    return new _SandSetupManifestEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _SandSetupManifestEntry | PlainMessage<_SandSetupManifestEntry> | undefined | null, b2: _SandSetupManifestEntry | PlainMessage<_SandSetupManifestEntry> | undefined | null): boolean {
    return proto3.util.equals(_SandSetupManifestEntry as unknown as MessageType<_SandSetupManifestEntry>, a, b2);
  }
})();
export type SandSetupManifestEntry = InstanceType<typeof SandSetupManifestEntry$Runtime>;
var SandSetupManifestEntry: MessageType<SandSetupManifestEntry> = SandSetupManifestEntry$Runtime as unknown as MessageType<SandSetupManifestEntry>;
(SandSetupManifestEntry as MutableMessageType<SandSetupManifestEntry>).runtime = proto3;
(SandSetupManifestEntry as MutableMessageType<SandSetupManifestEntry>).typeName = "aiserver.v1.SandSetupManifestEntry";
(SandSetupManifestEntry as MutableMessageType<SandSetupManifestEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "setup",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "check", kind: "scalar", T: 9, opt: true }
]);
var SandAssignedSetupManifest$Runtime = (() => class _SandAssignedSetupManifest extends Message<_SandAssignedSetupManifest> {
  declare scopeKind: SandSetupManifestScopeKind;
  declare scopeId: string;
  declare manifestId: string;
  declare revision: string;
  declare entries: SandSetupManifestEntry[];
  constructor(data?: PartialMessage<_SandAssignedSetupManifest>) {
    super();
    this.scopeKind = SandSetupManifestScopeKind.UNSPECIFIED;
    this.scopeId = "";
    this.manifestId = "";
    this.revision = "";
    this.entries = [];
    proto3.util.initPartial(data, this as _SandAssignedSetupManifest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandAssignedSetupManifest {
    return new _SandAssignedSetupManifest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandAssignedSetupManifest {
    return new _SandAssignedSetupManifest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandAssignedSetupManifest {
    return new _SandAssignedSetupManifest().fromJsonString(jsonString, options);
  }
  static equals(a: _SandAssignedSetupManifest | PlainMessage<_SandAssignedSetupManifest> | undefined | null, b2: _SandAssignedSetupManifest | PlainMessage<_SandAssignedSetupManifest> | undefined | null): boolean {
    return proto3.util.equals(_SandAssignedSetupManifest as unknown as MessageType<_SandAssignedSetupManifest>, a, b2);
  }
})();
export type SandAssignedSetupManifest = InstanceType<typeof SandAssignedSetupManifest$Runtime>;
var SandAssignedSetupManifest: MessageType<SandAssignedSetupManifest> = SandAssignedSetupManifest$Runtime as unknown as MessageType<SandAssignedSetupManifest>;
(SandAssignedSetupManifest as MutableMessageType<SandAssignedSetupManifest>).runtime = proto3;
(SandAssignedSetupManifest as MutableMessageType<SandAssignedSetupManifest>).typeName = "aiserver.v1.SandAssignedSetupManifest";
(SandAssignedSetupManifest as MutableMessageType<SandAssignedSetupManifest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "scope_kind", kind: "enum", T: proto3.getEnumType(SandSetupManifestScopeKind) },
  {
    no: 2,
    name: "scope_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "manifest_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "revision",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "entries", kind: "message", T: SandSetupManifestEntry, repeated: true }
]);
var ListSandSetupManifestsResponse$Runtime = (() => class _ListSandSetupManifestsResponse extends Message<_ListSandSetupManifestsResponse> {
  declare schemaVersion: number;
  declare manifests: SandAssignedSetupManifest[];
  constructor(data?: PartialMessage<_ListSandSetupManifestsResponse>) {
    super();
    this.schemaVersion = 0;
    this.manifests = [];
    proto3.util.initPartial(data, this as _ListSandSetupManifestsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandSetupManifestsResponse {
    return new _ListSandSetupManifestsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandSetupManifestsResponse {
    return new _ListSandSetupManifestsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandSetupManifestsResponse {
    return new _ListSandSetupManifestsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandSetupManifestsResponse | PlainMessage<_ListSandSetupManifestsResponse> | undefined | null, b2: _ListSandSetupManifestsResponse | PlainMessage<_ListSandSetupManifestsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListSandSetupManifestsResponse as unknown as MessageType<_ListSandSetupManifestsResponse>, a, b2);
  }
})();
export type ListSandSetupManifestsResponse = InstanceType<typeof ListSandSetupManifestsResponse$Runtime>;
var ListSandSetupManifestsResponse: MessageType<ListSandSetupManifestsResponse> = ListSandSetupManifestsResponse$Runtime as unknown as MessageType<ListSandSetupManifestsResponse>;
(ListSandSetupManifestsResponse as MutableMessageType<ListSandSetupManifestsResponse>).runtime = proto3;
(ListSandSetupManifestsResponse as MutableMessageType<ListSandSetupManifestsResponse>).typeName = "aiserver.v1.ListSandSetupManifestsResponse";
(ListSandSetupManifestsResponse as MutableMessageType<ListSandSetupManifestsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "schema_version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "manifests", kind: "message", T: SandAssignedSetupManifest, repeated: true }
]);
var SandTeamSetupManifest$Runtime = (() => class _SandTeamSetupManifest extends Message<_SandTeamSetupManifest> {
  declare manifestId: string;
  declare revision: string;
  declare etag: string;
  declare entries: SandSetupManifestEntry[];
  constructor(data?: PartialMessage<_SandTeamSetupManifest>) {
    super();
    this.manifestId = "";
    this.revision = "";
    this.etag = "";
    this.entries = [];
    proto3.util.initPartial(data, this as _SandTeamSetupManifest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandTeamSetupManifest {
    return new _SandTeamSetupManifest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandTeamSetupManifest {
    return new _SandTeamSetupManifest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandTeamSetupManifest {
    return new _SandTeamSetupManifest().fromJsonString(jsonString, options);
  }
  static equals(a: _SandTeamSetupManifest | PlainMessage<_SandTeamSetupManifest> | undefined | null, b2: _SandTeamSetupManifest | PlainMessage<_SandTeamSetupManifest> | undefined | null): boolean {
    return proto3.util.equals(_SandTeamSetupManifest as unknown as MessageType<_SandTeamSetupManifest>, a, b2);
  }
})();
export type SandTeamSetupManifest = InstanceType<typeof SandTeamSetupManifest$Runtime>;
var SandTeamSetupManifest: MessageType<SandTeamSetupManifest> = SandTeamSetupManifest$Runtime as unknown as MessageType<SandTeamSetupManifest>;
(SandTeamSetupManifest as MutableMessageType<SandTeamSetupManifest>).runtime = proto3;
(SandTeamSetupManifest as MutableMessageType<SandTeamSetupManifest>).typeName = "aiserver.v1.SandTeamSetupManifest";
(SandTeamSetupManifest as MutableMessageType<SandTeamSetupManifest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "manifest_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "revision",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "entries", kind: "message", T: SandSetupManifestEntry, repeated: true }
]);
var ListTeamSandSetupManifestsRequest$Runtime = (() => class _ListTeamSandSetupManifestsRequest extends Message<_ListTeamSandSetupManifestsRequest> {
  constructor(data?: PartialMessage<_ListTeamSandSetupManifestsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListTeamSandSetupManifestsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListTeamSandSetupManifestsRequest {
    return new _ListTeamSandSetupManifestsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListTeamSandSetupManifestsRequest {
    return new _ListTeamSandSetupManifestsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListTeamSandSetupManifestsRequest {
    return new _ListTeamSandSetupManifestsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListTeamSandSetupManifestsRequest | PlainMessage<_ListTeamSandSetupManifestsRequest> | undefined | null, b2: _ListTeamSandSetupManifestsRequest | PlainMessage<_ListTeamSandSetupManifestsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListTeamSandSetupManifestsRequest as unknown as MessageType<_ListTeamSandSetupManifestsRequest>, a, b2);
  }
})();
export type ListTeamSandSetupManifestsRequest = InstanceType<typeof ListTeamSandSetupManifestsRequest$Runtime>;
var ListTeamSandSetupManifestsRequest: MessageType<ListTeamSandSetupManifestsRequest> = ListTeamSandSetupManifestsRequest$Runtime as unknown as MessageType<ListTeamSandSetupManifestsRequest>;
(ListTeamSandSetupManifestsRequest as MutableMessageType<ListTeamSandSetupManifestsRequest>).runtime = proto3;
(ListTeamSandSetupManifestsRequest as MutableMessageType<ListTeamSandSetupManifestsRequest>).typeName = "aiserver.v1.ListTeamSandSetupManifestsRequest";
(ListTeamSandSetupManifestsRequest as MutableMessageType<ListTeamSandSetupManifestsRequest>).fields = proto3.util.newFieldList(() => []);
var ListTeamSandSetupManifestsResponse$Runtime = (() => class _ListTeamSandSetupManifestsResponse extends Message<_ListTeamSandSetupManifestsResponse> {
  declare teamId: string;
  declare canManage: boolean;
  declare manifests: SandTeamSetupManifest[];
  constructor(data?: PartialMessage<_ListTeamSandSetupManifestsResponse>) {
    super();
    this.teamId = "";
    this.canManage = false;
    this.manifests = [];
    proto3.util.initPartial(data, this as _ListTeamSandSetupManifestsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListTeamSandSetupManifestsResponse {
    return new _ListTeamSandSetupManifestsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListTeamSandSetupManifestsResponse {
    return new _ListTeamSandSetupManifestsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListTeamSandSetupManifestsResponse {
    return new _ListTeamSandSetupManifestsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListTeamSandSetupManifestsResponse | PlainMessage<_ListTeamSandSetupManifestsResponse> | undefined | null, b2: _ListTeamSandSetupManifestsResponse | PlainMessage<_ListTeamSandSetupManifestsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListTeamSandSetupManifestsResponse as unknown as MessageType<_ListTeamSandSetupManifestsResponse>, a, b2);
  }
})();
export type ListTeamSandSetupManifestsResponse = InstanceType<typeof ListTeamSandSetupManifestsResponse$Runtime>;
var ListTeamSandSetupManifestsResponse: MessageType<ListTeamSandSetupManifestsResponse> = ListTeamSandSetupManifestsResponse$Runtime as unknown as MessageType<ListTeamSandSetupManifestsResponse>;
(ListTeamSandSetupManifestsResponse as MutableMessageType<ListTeamSandSetupManifestsResponse>).runtime = proto3;
(ListTeamSandSetupManifestsResponse as MutableMessageType<ListTeamSandSetupManifestsResponse>).typeName = "aiserver.v1.ListTeamSandSetupManifestsResponse";
(ListTeamSandSetupManifestsResponse as MutableMessageType<ListTeamSandSetupManifestsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "can_manage",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "manifests", kind: "message", T: SandTeamSetupManifest, repeated: true }
]);
var SaveTeamSandSetupManifestRequest$Runtime = (() => class _SaveTeamSandSetupManifestRequest extends Message<_SaveTeamSandSetupManifestRequest> {
  declare manifestId: string;
  declare expectedEtag: string;
  declare entries: SandSetupManifestEntry[];
  constructor(data?: PartialMessage<_SaveTeamSandSetupManifestRequest>) {
    super();
    this.manifestId = "";
    this.expectedEtag = "";
    this.entries = [];
    proto3.util.initPartial(data, this as _SaveTeamSandSetupManifestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SaveTeamSandSetupManifestRequest {
    return new _SaveTeamSandSetupManifestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SaveTeamSandSetupManifestRequest {
    return new _SaveTeamSandSetupManifestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SaveTeamSandSetupManifestRequest {
    return new _SaveTeamSandSetupManifestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SaveTeamSandSetupManifestRequest | PlainMessage<_SaveTeamSandSetupManifestRequest> | undefined | null, b2: _SaveTeamSandSetupManifestRequest | PlainMessage<_SaveTeamSandSetupManifestRequest> | undefined | null): boolean {
    return proto3.util.equals(_SaveTeamSandSetupManifestRequest as unknown as MessageType<_SaveTeamSandSetupManifestRequest>, a, b2);
  }
})();
export type SaveTeamSandSetupManifestRequest = InstanceType<typeof SaveTeamSandSetupManifestRequest$Runtime>;
var SaveTeamSandSetupManifestRequest: MessageType<SaveTeamSandSetupManifestRequest> = SaveTeamSandSetupManifestRequest$Runtime as unknown as MessageType<SaveTeamSandSetupManifestRequest>;
(SaveTeamSandSetupManifestRequest as MutableMessageType<SaveTeamSandSetupManifestRequest>).runtime = proto3;
(SaveTeamSandSetupManifestRequest as MutableMessageType<SaveTeamSandSetupManifestRequest>).typeName = "aiserver.v1.SaveTeamSandSetupManifestRequest";
(SaveTeamSandSetupManifestRequest as MutableMessageType<SaveTeamSandSetupManifestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "manifest_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "expected_etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "entries", kind: "message", T: SandSetupManifestEntry, repeated: true }
]);
var SaveTeamSandSetupManifestResponse$Runtime = (() => class _SaveTeamSandSetupManifestResponse extends Message<_SaveTeamSandSetupManifestResponse> {
  declare manifest?: SandTeamSetupManifest;
  constructor(data?: PartialMessage<_SaveTeamSandSetupManifestResponse>) {
    super();
    proto3.util.initPartial(data, this as _SaveTeamSandSetupManifestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SaveTeamSandSetupManifestResponse {
    return new _SaveTeamSandSetupManifestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SaveTeamSandSetupManifestResponse {
    return new _SaveTeamSandSetupManifestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SaveTeamSandSetupManifestResponse {
    return new _SaveTeamSandSetupManifestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SaveTeamSandSetupManifestResponse | PlainMessage<_SaveTeamSandSetupManifestResponse> | undefined | null, b2: _SaveTeamSandSetupManifestResponse | PlainMessage<_SaveTeamSandSetupManifestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SaveTeamSandSetupManifestResponse as unknown as MessageType<_SaveTeamSandSetupManifestResponse>, a, b2);
  }
})();
export type SaveTeamSandSetupManifestResponse = InstanceType<typeof SaveTeamSandSetupManifestResponse$Runtime>;
var SaveTeamSandSetupManifestResponse: MessageType<SaveTeamSandSetupManifestResponse> = SaveTeamSandSetupManifestResponse$Runtime as unknown as MessageType<SaveTeamSandSetupManifestResponse>;
(SaveTeamSandSetupManifestResponse as MutableMessageType<SaveTeamSandSetupManifestResponse>).runtime = proto3;
(SaveTeamSandSetupManifestResponse as MutableMessageType<SaveTeamSandSetupManifestResponse>).typeName = "aiserver.v1.SaveTeamSandSetupManifestResponse";
(SaveTeamSandSetupManifestResponse as MutableMessageType<SaveTeamSandSetupManifestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "manifest", kind: "message", T: SandTeamSetupManifest }
]);
var DeleteTeamSandSetupManifestRequest$Runtime = (() => class _DeleteTeamSandSetupManifestRequest extends Message<_DeleteTeamSandSetupManifestRequest> {
  declare manifestId: string;
  declare expectedEtag: string;
  constructor(data?: PartialMessage<_DeleteTeamSandSetupManifestRequest>) {
    super();
    this.manifestId = "";
    this.expectedEtag = "";
    proto3.util.initPartial(data, this as _DeleteTeamSandSetupManifestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteTeamSandSetupManifestRequest {
    return new _DeleteTeamSandSetupManifestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteTeamSandSetupManifestRequest {
    return new _DeleteTeamSandSetupManifestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteTeamSandSetupManifestRequest {
    return new _DeleteTeamSandSetupManifestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteTeamSandSetupManifestRequest | PlainMessage<_DeleteTeamSandSetupManifestRequest> | undefined | null, b2: _DeleteTeamSandSetupManifestRequest | PlainMessage<_DeleteTeamSandSetupManifestRequest> | undefined | null): boolean {
    return proto3.util.equals(_DeleteTeamSandSetupManifestRequest as unknown as MessageType<_DeleteTeamSandSetupManifestRequest>, a, b2);
  }
})();
export type DeleteTeamSandSetupManifestRequest = InstanceType<typeof DeleteTeamSandSetupManifestRequest$Runtime>;
var DeleteTeamSandSetupManifestRequest: MessageType<DeleteTeamSandSetupManifestRequest> = DeleteTeamSandSetupManifestRequest$Runtime as unknown as MessageType<DeleteTeamSandSetupManifestRequest>;
(DeleteTeamSandSetupManifestRequest as MutableMessageType<DeleteTeamSandSetupManifestRequest>).runtime = proto3;
(DeleteTeamSandSetupManifestRequest as MutableMessageType<DeleteTeamSandSetupManifestRequest>).typeName = "aiserver.v1.DeleteTeamSandSetupManifestRequest";
(DeleteTeamSandSetupManifestRequest as MutableMessageType<DeleteTeamSandSetupManifestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "manifest_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "expected_etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteTeamSandSetupManifestResponse$Runtime = (() => class _DeleteTeamSandSetupManifestResponse extends Message<_DeleteTeamSandSetupManifestResponse> {
  constructor(data?: PartialMessage<_DeleteTeamSandSetupManifestResponse>) {
    super();
    proto3.util.initPartial(data, this as _DeleteTeamSandSetupManifestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteTeamSandSetupManifestResponse {
    return new _DeleteTeamSandSetupManifestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteTeamSandSetupManifestResponse {
    return new _DeleteTeamSandSetupManifestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteTeamSandSetupManifestResponse {
    return new _DeleteTeamSandSetupManifestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteTeamSandSetupManifestResponse | PlainMessage<_DeleteTeamSandSetupManifestResponse> | undefined | null, b2: _DeleteTeamSandSetupManifestResponse | PlainMessage<_DeleteTeamSandSetupManifestResponse> | undefined | null): boolean {
    return proto3.util.equals(_DeleteTeamSandSetupManifestResponse as unknown as MessageType<_DeleteTeamSandSetupManifestResponse>, a, b2);
  }
})();
export type DeleteTeamSandSetupManifestResponse = InstanceType<typeof DeleteTeamSandSetupManifestResponse$Runtime>;
var DeleteTeamSandSetupManifestResponse: MessageType<DeleteTeamSandSetupManifestResponse> = DeleteTeamSandSetupManifestResponse$Runtime as unknown as MessageType<DeleteTeamSandSetupManifestResponse>;
(DeleteTeamSandSetupManifestResponse as MutableMessageType<DeleteTeamSandSetupManifestResponse>).runtime = proto3;
(DeleteTeamSandSetupManifestResponse as MutableMessageType<DeleteTeamSandSetupManifestResponse>).typeName = "aiserver.v1.DeleteTeamSandSetupManifestResponse";
(DeleteTeamSandSetupManifestResponse as MutableMessageType<DeleteTeamSandSetupManifestResponse>).fields = proto3.util.newFieldList(() => []);
var ListTeamMemberSandBoxesRequest$Runtime = (() => class _ListTeamMemberSandBoxesRequest extends Message<_ListTeamMemberSandBoxesRequest> {
  declare teamId: number;
  declare userId: number;
  constructor(data?: PartialMessage<_ListTeamMemberSandBoxesRequest>) {
    super();
    this.teamId = 0;
    this.userId = 0;
    proto3.util.initPartial(data, this as _ListTeamMemberSandBoxesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListTeamMemberSandBoxesRequest {
    return new _ListTeamMemberSandBoxesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListTeamMemberSandBoxesRequest {
    return new _ListTeamMemberSandBoxesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListTeamMemberSandBoxesRequest {
    return new _ListTeamMemberSandBoxesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListTeamMemberSandBoxesRequest | PlainMessage<_ListTeamMemberSandBoxesRequest> | undefined | null, b2: _ListTeamMemberSandBoxesRequest | PlainMessage<_ListTeamMemberSandBoxesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListTeamMemberSandBoxesRequest as unknown as MessageType<_ListTeamMemberSandBoxesRequest>, a, b2);
  }
})();
export type ListTeamMemberSandBoxesRequest = InstanceType<typeof ListTeamMemberSandBoxesRequest$Runtime>;
var ListTeamMemberSandBoxesRequest: MessageType<ListTeamMemberSandBoxesRequest> = ListTeamMemberSandBoxesRequest$Runtime as unknown as MessageType<ListTeamMemberSandBoxesRequest>;
(ListTeamMemberSandBoxesRequest as MutableMessageType<ListTeamMemberSandBoxesRequest>).runtime = proto3;
(ListTeamMemberSandBoxesRequest as MutableMessageType<ListTeamMemberSandBoxesRequest>).typeName = "aiserver.v1.ListTeamMemberSandBoxesRequest";
(ListTeamMemberSandBoxesRequest as MutableMessageType<ListTeamMemberSandBoxesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var TeamMemberSandBoxPod$Runtime = (() => class _TeamMemberSandBoxPod extends Message<_TeamMemberSandBoxPod> {
  declare cluster: string;
  declare podId: string;
  declare tenantId: string;
  declare flavor: string;
  declare runState: string;
  declare imageTag?: string;
  declare createdAtMs?: bigint;
  declare lastActiveAtMs?: bigint;
  declare nodeId?: string;
  declare failureReason?: string;
  constructor(data?: PartialMessage<_TeamMemberSandBoxPod>) {
    super();
    this.cluster = "";
    this.podId = "";
    this.tenantId = "";
    this.flavor = "";
    this.runState = "";
    proto3.util.initPartial(data, this as _TeamMemberSandBoxPod);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TeamMemberSandBoxPod {
    return new _TeamMemberSandBoxPod().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TeamMemberSandBoxPod {
    return new _TeamMemberSandBoxPod().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TeamMemberSandBoxPod {
    return new _TeamMemberSandBoxPod().fromJsonString(jsonString, options);
  }
  static equals(a: _TeamMemberSandBoxPod | PlainMessage<_TeamMemberSandBoxPod> | undefined | null, b2: _TeamMemberSandBoxPod | PlainMessage<_TeamMemberSandBoxPod> | undefined | null): boolean {
    return proto3.util.equals(_TeamMemberSandBoxPod as unknown as MessageType<_TeamMemberSandBoxPod>, a, b2);
  }
})();
export type TeamMemberSandBoxPod = InstanceType<typeof TeamMemberSandBoxPod$Runtime>;
var TeamMemberSandBoxPod: MessageType<TeamMemberSandBoxPod> = TeamMemberSandBoxPod$Runtime as unknown as MessageType<TeamMemberSandBoxPod>;
(TeamMemberSandBoxPod as MutableMessageType<TeamMemberSandBoxPod>).runtime = proto3;
(TeamMemberSandBoxPod as MutableMessageType<TeamMemberSandBoxPod>).typeName = "aiserver.v1.TeamMemberSandBoxPod";
(TeamMemberSandBoxPod as MutableMessageType<TeamMemberSandBoxPod>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cluster",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "run_state",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "image_tag", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "created_at_ms", kind: "scalar", T: 3, opt: true },
  { no: 8, name: "last_active_at_ms", kind: "scalar", T: 3, opt: true },
  { no: 9, name: "node_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "failure_reason", kind: "scalar", T: 9, opt: true }
]);
var ListTeamMemberSandBoxesResponse$Runtime = (() => class _ListTeamMemberSandBoxesResponse extends Message<_ListTeamMemberSandBoxesResponse> {
  declare userId: number;
  declare email: string;
  declare name: string;
  declare boxes: TeamMemberSandBoxPod[];
  declare scanIncomplete: boolean;
  constructor(data?: PartialMessage<_ListTeamMemberSandBoxesResponse>) {
    super();
    this.userId = 0;
    this.email = "";
    this.name = "";
    this.boxes = [];
    this.scanIncomplete = false;
    proto3.util.initPartial(data, this as _ListTeamMemberSandBoxesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListTeamMemberSandBoxesResponse {
    return new _ListTeamMemberSandBoxesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListTeamMemberSandBoxesResponse {
    return new _ListTeamMemberSandBoxesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListTeamMemberSandBoxesResponse {
    return new _ListTeamMemberSandBoxesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListTeamMemberSandBoxesResponse | PlainMessage<_ListTeamMemberSandBoxesResponse> | undefined | null, b2: _ListTeamMemberSandBoxesResponse | PlainMessage<_ListTeamMemberSandBoxesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListTeamMemberSandBoxesResponse as unknown as MessageType<_ListTeamMemberSandBoxesResponse>, a, b2);
  }
})();
export type ListTeamMemberSandBoxesResponse = InstanceType<typeof ListTeamMemberSandBoxesResponse$Runtime>;
var ListTeamMemberSandBoxesResponse: MessageType<ListTeamMemberSandBoxesResponse> = ListTeamMemberSandBoxesResponse$Runtime as unknown as MessageType<ListTeamMemberSandBoxesResponse>;
(ListTeamMemberSandBoxesResponse as MutableMessageType<ListTeamMemberSandBoxesResponse>).runtime = proto3;
(ListTeamMemberSandBoxesResponse as MutableMessageType<ListTeamMemberSandBoxesResponse>).typeName = "aiserver.v1.ListTeamMemberSandBoxesResponse";
(ListTeamMemberSandBoxesResponse as MutableMessageType<ListTeamMemberSandBoxesResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "email",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "boxes", kind: "message", T: TeamMemberSandBoxPod, repeated: true },
  {
    no: 5,
    name: "scan_incomplete",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var KillTeamMemberSandBoxRequest$Runtime = (() => class _KillTeamMemberSandBoxRequest extends Message<_KillTeamMemberSandBoxRequest> {
  declare teamId: number;
  declare userId: number;
  declare podId: string;
  declare cluster: string;
  constructor(data?: PartialMessage<_KillTeamMemberSandBoxRequest>) {
    super();
    this.teamId = 0;
    this.userId = 0;
    this.podId = "";
    this.cluster = "";
    proto3.util.initPartial(data, this as _KillTeamMemberSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KillTeamMemberSandBoxRequest {
    return new _KillTeamMemberSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KillTeamMemberSandBoxRequest {
    return new _KillTeamMemberSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KillTeamMemberSandBoxRequest {
    return new _KillTeamMemberSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _KillTeamMemberSandBoxRequest | PlainMessage<_KillTeamMemberSandBoxRequest> | undefined | null, b2: _KillTeamMemberSandBoxRequest | PlainMessage<_KillTeamMemberSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_KillTeamMemberSandBoxRequest as unknown as MessageType<_KillTeamMemberSandBoxRequest>, a, b2);
  }
})();
export type KillTeamMemberSandBoxRequest = InstanceType<typeof KillTeamMemberSandBoxRequest$Runtime>;
var KillTeamMemberSandBoxRequest: MessageType<KillTeamMemberSandBoxRequest> = KillTeamMemberSandBoxRequest$Runtime as unknown as MessageType<KillTeamMemberSandBoxRequest>;
(KillTeamMemberSandBoxRequest as MutableMessageType<KillTeamMemberSandBoxRequest>).runtime = proto3;
(KillTeamMemberSandBoxRequest as MutableMessageType<KillTeamMemberSandBoxRequest>).typeName = "aiserver.v1.KillTeamMemberSandBoxRequest";
(KillTeamMemberSandBoxRequest as MutableMessageType<KillTeamMemberSandBoxRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "cluster",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var KillTeamMemberSandBoxResponse$Runtime = (() => class _KillTeamMemberSandBoxResponse extends Message<_KillTeamMemberSandBoxResponse> {
  declare killed: boolean;
  declare reason: string;
  declare deletedCount: number;
  constructor(data?: PartialMessage<_KillTeamMemberSandBoxResponse>) {
    super();
    this.killed = false;
    this.reason = "";
    this.deletedCount = 0;
    proto3.util.initPartial(data, this as _KillTeamMemberSandBoxResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KillTeamMemberSandBoxResponse {
    return new _KillTeamMemberSandBoxResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KillTeamMemberSandBoxResponse {
    return new _KillTeamMemberSandBoxResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KillTeamMemberSandBoxResponse {
    return new _KillTeamMemberSandBoxResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _KillTeamMemberSandBoxResponse | PlainMessage<_KillTeamMemberSandBoxResponse> | undefined | null, b2: _KillTeamMemberSandBoxResponse | PlainMessage<_KillTeamMemberSandBoxResponse> | undefined | null): boolean {
    return proto3.util.equals(_KillTeamMemberSandBoxResponse as unknown as MessageType<_KillTeamMemberSandBoxResponse>, a, b2);
  }
})();
export type KillTeamMemberSandBoxResponse = InstanceType<typeof KillTeamMemberSandBoxResponse$Runtime>;
var KillTeamMemberSandBoxResponse: MessageType<KillTeamMemberSandBoxResponse> = KillTeamMemberSandBoxResponse$Runtime as unknown as MessageType<KillTeamMemberSandBoxResponse>;
(KillTeamMemberSandBoxResponse as MutableMessageType<KillTeamMemberSandBoxResponse>).runtime = proto3;
(KillTeamMemberSandBoxResponse as MutableMessageType<KillTeamMemberSandBoxResponse>).typeName = "aiserver.v1.KillTeamMemberSandBoxResponse";
(KillTeamMemberSandBoxResponse as MutableMessageType<KillTeamMemberSandBoxResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "killed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "deleted_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var EnsureSandBoxRequest$Runtime = (() => class _EnsureSandBoxRequest extends Message<_EnsureSandBoxRequest> {
  constructor(data?: PartialMessage<_EnsureSandBoxRequest>) {
    super();
    proto3.util.initPartial(data, this as _EnsureSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnsureSandBoxRequest {
    return new _EnsureSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnsureSandBoxRequest {
    return new _EnsureSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnsureSandBoxRequest {
    return new _EnsureSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _EnsureSandBoxRequest | PlainMessage<_EnsureSandBoxRequest> | undefined | null, b2: _EnsureSandBoxRequest | PlainMessage<_EnsureSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_EnsureSandBoxRequest as unknown as MessageType<_EnsureSandBoxRequest>, a, b2);
  }
})();
export type EnsureSandBoxRequest = InstanceType<typeof EnsureSandBoxRequest$Runtime>;
var EnsureSandBoxRequest: MessageType<EnsureSandBoxRequest> = EnsureSandBoxRequest$Runtime as unknown as MessageType<EnsureSandBoxRequest>;
(EnsureSandBoxRequest as MutableMessageType<EnsureSandBoxRequest>).runtime = proto3;
(EnsureSandBoxRequest as MutableMessageType<EnsureSandBoxRequest>).typeName = "aiserver.v1.EnsureSandBoxRequest";
(EnsureSandBoxRequest as MutableMessageType<EnsureSandBoxRequest>).fields = proto3.util.newFieldList(() => []);
var EnsureSandBoxWindowRequest$Runtime = (() => class _EnsureSandBoxWindowRequest extends Message<_EnsureSandBoxWindowRequest> {
  declare windowIndex: number;
  constructor(data?: PartialMessage<_EnsureSandBoxWindowRequest>) {
    super();
    this.windowIndex = 0;
    proto3.util.initPartial(data, this as _EnsureSandBoxWindowRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnsureSandBoxWindowRequest {
    return new _EnsureSandBoxWindowRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnsureSandBoxWindowRequest {
    return new _EnsureSandBoxWindowRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnsureSandBoxWindowRequest {
    return new _EnsureSandBoxWindowRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _EnsureSandBoxWindowRequest | PlainMessage<_EnsureSandBoxWindowRequest> | undefined | null, b2: _EnsureSandBoxWindowRequest | PlainMessage<_EnsureSandBoxWindowRequest> | undefined | null): boolean {
    return proto3.util.equals(_EnsureSandBoxWindowRequest as unknown as MessageType<_EnsureSandBoxWindowRequest>, a, b2);
  }
})();
export type EnsureSandBoxWindowRequest = InstanceType<typeof EnsureSandBoxWindowRequest$Runtime>;
var EnsureSandBoxWindowRequest: MessageType<EnsureSandBoxWindowRequest> = EnsureSandBoxWindowRequest$Runtime as unknown as MessageType<EnsureSandBoxWindowRequest>;
(EnsureSandBoxWindowRequest as MutableMessageType<EnsureSandBoxWindowRequest>).runtime = proto3;
(EnsureSandBoxWindowRequest as MutableMessageType<EnsureSandBoxWindowRequest>).typeName = "aiserver.v1.EnsureSandBoxWindowRequest";
(EnsureSandBoxWindowRequest as MutableMessageType<EnsureSandBoxWindowRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "window_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var EnsureSandBoxResponse$Runtime = (() => class _EnsureSandBoxResponse extends Message<_EnsureSandBoxResponse> {
  declare cluster: string;
  declare tenantId: string;
  declare podId: string;
  declare networkToken: string;
  declare execDaemonAuthToken: string;
  declare execDaemonUrl: string;
  declare vncUrl: string;
  declare terminalsFolder: string;
  declare forkVncBaseUrl: string;
  declare imageUpdateAvailable?: boolean;
  declare gatewayUrl: string;
  declare gatewayToken: string;
  constructor(data?: PartialMessage<_EnsureSandBoxResponse>) {
    super();
    this.cluster = "";
    this.tenantId = "";
    this.podId = "";
    this.networkToken = "";
    this.execDaemonAuthToken = "";
    this.execDaemonUrl = "";
    this.vncUrl = "";
    this.terminalsFolder = "";
    this.forkVncBaseUrl = "";
    this.gatewayUrl = "";
    this.gatewayToken = "";
    proto3.util.initPartial(data, this as _EnsureSandBoxResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnsureSandBoxResponse {
    return new _EnsureSandBoxResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnsureSandBoxResponse {
    return new _EnsureSandBoxResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnsureSandBoxResponse {
    return new _EnsureSandBoxResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _EnsureSandBoxResponse | PlainMessage<_EnsureSandBoxResponse> | undefined | null, b2: _EnsureSandBoxResponse | PlainMessage<_EnsureSandBoxResponse> | undefined | null): boolean {
    return proto3.util.equals(_EnsureSandBoxResponse as unknown as MessageType<_EnsureSandBoxResponse>, a, b2);
  }
})();
export type EnsureSandBoxResponse = InstanceType<typeof EnsureSandBoxResponse$Runtime>;
var EnsureSandBoxResponse: MessageType<EnsureSandBoxResponse> = EnsureSandBoxResponse$Runtime as unknown as MessageType<EnsureSandBoxResponse>;
(EnsureSandBoxResponse as MutableMessageType<EnsureSandBoxResponse>).runtime = proto3;
(EnsureSandBoxResponse as MutableMessageType<EnsureSandBoxResponse>).typeName = "aiserver.v1.EnsureSandBoxResponse";
(EnsureSandBoxResponse as MutableMessageType<EnsureSandBoxResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cluster",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "network_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "exec_daemon_auth_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "exec_daemon_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "vnc_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "terminals_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "fork_vnc_base_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "image_update_available", kind: "scalar", T: 8, opt: true },
  {
    no: 10,
    name: "gateway_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 11,
    name: "gateway_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecreateSandBoxRequest$Runtime = (() => class _RecreateSandBoxRequest extends Message<_RecreateSandBoxRequest> {
  declare preserveData: boolean;
  declare force: boolean;
  constructor(data?: PartialMessage<_RecreateSandBoxRequest>) {
    super();
    this.preserveData = false;
    this.force = false;
    proto3.util.initPartial(data, this as _RecreateSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecreateSandBoxRequest {
    return new _RecreateSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecreateSandBoxRequest {
    return new _RecreateSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecreateSandBoxRequest {
    return new _RecreateSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RecreateSandBoxRequest | PlainMessage<_RecreateSandBoxRequest> | undefined | null, b2: _RecreateSandBoxRequest | PlainMessage<_RecreateSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_RecreateSandBoxRequest as unknown as MessageType<_RecreateSandBoxRequest>, a, b2);
  }
})();
export type RecreateSandBoxRequest = InstanceType<typeof RecreateSandBoxRequest$Runtime>;
var RecreateSandBoxRequest: MessageType<RecreateSandBoxRequest> = RecreateSandBoxRequest$Runtime as unknown as MessageType<RecreateSandBoxRequest>;
(RecreateSandBoxRequest as MutableMessageType<RecreateSandBoxRequest>).runtime = proto3;
(RecreateSandBoxRequest as MutableMessageType<RecreateSandBoxRequest>).typeName = "aiserver.v1.RecreateSandBoxRequest";
(RecreateSandBoxRequest as MutableMessageType<RecreateSandBoxRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "preserve_data",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "force",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ForceRecreateSandBoxRequest$Runtime = (() => class _ForceRecreateSandBoxRequest extends Message<_ForceRecreateSandBoxRequest> {
  constructor(data?: PartialMessage<_ForceRecreateSandBoxRequest>) {
    super();
    proto3.util.initPartial(data, this as _ForceRecreateSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ForceRecreateSandBoxRequest {
    return new _ForceRecreateSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ForceRecreateSandBoxRequest {
    return new _ForceRecreateSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ForceRecreateSandBoxRequest {
    return new _ForceRecreateSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ForceRecreateSandBoxRequest | PlainMessage<_ForceRecreateSandBoxRequest> | undefined | null, b2: _ForceRecreateSandBoxRequest | PlainMessage<_ForceRecreateSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_ForceRecreateSandBoxRequest as unknown as MessageType<_ForceRecreateSandBoxRequest>, a, b2);
  }
})();
export type ForceRecreateSandBoxRequest = InstanceType<typeof ForceRecreateSandBoxRequest$Runtime>;
var ForceRecreateSandBoxRequest: MessageType<ForceRecreateSandBoxRequest> = ForceRecreateSandBoxRequest$Runtime as unknown as MessageType<ForceRecreateSandBoxRequest>;
(ForceRecreateSandBoxRequest as MutableMessageType<ForceRecreateSandBoxRequest>).runtime = proto3;
(ForceRecreateSandBoxRequest as MutableMessageType<ForceRecreateSandBoxRequest>).typeName = "aiserver.v1.ForceRecreateSandBoxRequest";
(ForceRecreateSandBoxRequest as MutableMessageType<ForceRecreateSandBoxRequest>).fields = proto3.util.newFieldList(() => []);
var RecreateSandBoxResponse$Runtime = (() => class _RecreateSandBoxResponse extends Message<_RecreateSandBoxResponse> {
  declare started: boolean;
  declare reason: string;
  declare operationId: string;
  constructor(data?: PartialMessage<_RecreateSandBoxResponse>) {
    super();
    this.started = false;
    this.reason = "";
    this.operationId = "";
    proto3.util.initPartial(data, this as _RecreateSandBoxResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecreateSandBoxResponse {
    return new _RecreateSandBoxResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecreateSandBoxResponse {
    return new _RecreateSandBoxResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecreateSandBoxResponse {
    return new _RecreateSandBoxResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RecreateSandBoxResponse | PlainMessage<_RecreateSandBoxResponse> | undefined | null, b2: _RecreateSandBoxResponse | PlainMessage<_RecreateSandBoxResponse> | undefined | null): boolean {
    return proto3.util.equals(_RecreateSandBoxResponse as unknown as MessageType<_RecreateSandBoxResponse>, a, b2);
  }
})();
export type RecreateSandBoxResponse = InstanceType<typeof RecreateSandBoxResponse$Runtime>;
var RecreateSandBoxResponse: MessageType<RecreateSandBoxResponse> = RecreateSandBoxResponse$Runtime as unknown as MessageType<RecreateSandBoxResponse>;
(RecreateSandBoxResponse as MutableMessageType<RecreateSandBoxResponse>).runtime = proto3;
(RecreateSandBoxResponse as MutableMessageType<RecreateSandBoxResponse>).typeName = "aiserver.v1.RecreateSandBoxResponse";
(RecreateSandBoxResponse as MutableMessageType<RecreateSandBoxResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "operation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminRecreateSandBoxRequest$Runtime = (() => class _AdminRecreateSandBoxRequest extends Message<_AdminRecreateSandBoxRequest> {
  declare authId: string;
  declare flavor: string;
  declare preserveData: boolean;
  declare force: boolean;
  constructor(data?: PartialMessage<_AdminRecreateSandBoxRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    this.preserveData = false;
    this.force = false;
    proto3.util.initPartial(data, this as _AdminRecreateSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminRecreateSandBoxRequest {
    return new _AdminRecreateSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminRecreateSandBoxRequest {
    return new _AdminRecreateSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminRecreateSandBoxRequest {
    return new _AdminRecreateSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminRecreateSandBoxRequest | PlainMessage<_AdminRecreateSandBoxRequest> | undefined | null, b2: _AdminRecreateSandBoxRequest | PlainMessage<_AdminRecreateSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminRecreateSandBoxRequest as unknown as MessageType<_AdminRecreateSandBoxRequest>, a, b2);
  }
})();
export type AdminRecreateSandBoxRequest = InstanceType<typeof AdminRecreateSandBoxRequest$Runtime>;
var AdminRecreateSandBoxRequest: MessageType<AdminRecreateSandBoxRequest> = AdminRecreateSandBoxRequest$Runtime as unknown as MessageType<AdminRecreateSandBoxRequest>;
(AdminRecreateSandBoxRequest as MutableMessageType<AdminRecreateSandBoxRequest>).runtime = proto3;
(AdminRecreateSandBoxRequest as MutableMessageType<AdminRecreateSandBoxRequest>).typeName = "aiserver.v1.AdminRecreateSandBoxRequest";
(AdminRecreateSandBoxRequest as MutableMessageType<AdminRecreateSandBoxRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "preserve_data",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "force",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AdminForceRecreateSandBoxRequest$Runtime = (() => class _AdminForceRecreateSandBoxRequest extends Message<_AdminForceRecreateSandBoxRequest> {
  declare authId: string;
  declare flavor: string;
  constructor(data?: PartialMessage<_AdminForceRecreateSandBoxRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    proto3.util.initPartial(data, this as _AdminForceRecreateSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminForceRecreateSandBoxRequest {
    return new _AdminForceRecreateSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminForceRecreateSandBoxRequest {
    return new _AdminForceRecreateSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminForceRecreateSandBoxRequest {
    return new _AdminForceRecreateSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminForceRecreateSandBoxRequest | PlainMessage<_AdminForceRecreateSandBoxRequest> | undefined | null, b2: _AdminForceRecreateSandBoxRequest | PlainMessage<_AdminForceRecreateSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminForceRecreateSandBoxRequest as unknown as MessageType<_AdminForceRecreateSandBoxRequest>, a, b2);
  }
})();
export type AdminForceRecreateSandBoxRequest = InstanceType<typeof AdminForceRecreateSandBoxRequest$Runtime>;
var AdminForceRecreateSandBoxRequest: MessageType<AdminForceRecreateSandBoxRequest> = AdminForceRecreateSandBoxRequest$Runtime as unknown as MessageType<AdminForceRecreateSandBoxRequest>;
(AdminForceRecreateSandBoxRequest as MutableMessageType<AdminForceRecreateSandBoxRequest>).runtime = proto3;
(AdminForceRecreateSandBoxRequest as MutableMessageType<AdminForceRecreateSandBoxRequest>).typeName = "aiserver.v1.AdminForceRecreateSandBoxRequest";
(AdminForceRecreateSandBoxRequest as MutableMessageType<AdminForceRecreateSandBoxRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminSandBoxStoreStatusRequest$Runtime = (() => class _AdminSandBoxStoreStatusRequest extends Message<_AdminSandBoxStoreStatusRequest> {
  declare authId: string;
  declare flavor: string;
  constructor(data?: PartialMessage<_AdminSandBoxStoreStatusRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    proto3.util.initPartial(data, this as _AdminSandBoxStoreStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSandBoxStoreStatusRequest {
    return new _AdminSandBoxStoreStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSandBoxStoreStatusRequest {
    return new _AdminSandBoxStoreStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSandBoxStoreStatusRequest {
    return new _AdminSandBoxStoreStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSandBoxStoreStatusRequest | PlainMessage<_AdminSandBoxStoreStatusRequest> | undefined | null, b2: _AdminSandBoxStoreStatusRequest | PlainMessage<_AdminSandBoxStoreStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminSandBoxStoreStatusRequest as unknown as MessageType<_AdminSandBoxStoreStatusRequest>, a, b2);
  }
})();
export type AdminSandBoxStoreStatusRequest = InstanceType<typeof AdminSandBoxStoreStatusRequest$Runtime>;
var AdminSandBoxStoreStatusRequest: MessageType<AdminSandBoxStoreStatusRequest> = AdminSandBoxStoreStatusRequest$Runtime as unknown as MessageType<AdminSandBoxStoreStatusRequest>;
(AdminSandBoxStoreStatusRequest as MutableMessageType<AdminSandBoxStoreStatusRequest>).runtime = proto3;
(AdminSandBoxStoreStatusRequest as MutableMessageType<AdminSandBoxStoreStatusRequest>).typeName = "aiserver.v1.AdminSandBoxStoreStatusRequest";
(AdminSandBoxStoreStatusRequest as MutableMessageType<AdminSandBoxStoreStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminSandBoxStoreStatusResponse$Runtime = (() => class _AdminSandBoxStoreStatusResponse extends Message<_AdminSandBoxStoreStatusResponse> {
  declare durable: boolean;
  declare entryCount: bigint;
  declare totalBytes: bigint;
  declare lastSnapshotAtMs: bigint;
  declare reachable: boolean;
  constructor(data?: PartialMessage<_AdminSandBoxStoreStatusResponse>) {
    super();
    this.durable = false;
    this.entryCount = protoInt64.zero;
    this.totalBytes = protoInt64.zero;
    this.lastSnapshotAtMs = protoInt64.zero;
    this.reachable = false;
    proto3.util.initPartial(data, this as _AdminSandBoxStoreStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSandBoxStoreStatusResponse {
    return new _AdminSandBoxStoreStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSandBoxStoreStatusResponse {
    return new _AdminSandBoxStoreStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSandBoxStoreStatusResponse {
    return new _AdminSandBoxStoreStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSandBoxStoreStatusResponse | PlainMessage<_AdminSandBoxStoreStatusResponse> | undefined | null, b2: _AdminSandBoxStoreStatusResponse | PlainMessage<_AdminSandBoxStoreStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminSandBoxStoreStatusResponse as unknown as MessageType<_AdminSandBoxStoreStatusResponse>, a, b2);
  }
})();
export type AdminSandBoxStoreStatusResponse = InstanceType<typeof AdminSandBoxStoreStatusResponse$Runtime>;
var AdminSandBoxStoreStatusResponse: MessageType<AdminSandBoxStoreStatusResponse> = AdminSandBoxStoreStatusResponse$Runtime as unknown as MessageType<AdminSandBoxStoreStatusResponse>;
(AdminSandBoxStoreStatusResponse as MutableMessageType<AdminSandBoxStoreStatusResponse>).runtime = proto3;
(AdminSandBoxStoreStatusResponse as MutableMessageType<AdminSandBoxStoreStatusResponse>).typeName = "aiserver.v1.AdminSandBoxStoreStatusResponse";
(AdminSandBoxStoreStatusResponse as MutableMessageType<AdminSandBoxStoreStatusResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "durable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "entry_count",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "total_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "last_snapshot_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "reachable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AdminUpdateSandBoxHostRequest$Runtime = (() => class _AdminUpdateSandBoxHostRequest extends Message<_AdminUpdateSandBoxHostRequest> {
  declare authId: string;
  declare flavor: string;
  declare force: boolean;
  constructor(data?: PartialMessage<_AdminUpdateSandBoxHostRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    this.force = false;
    proto3.util.initPartial(data, this as _AdminUpdateSandBoxHostRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminUpdateSandBoxHostRequest {
    return new _AdminUpdateSandBoxHostRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminUpdateSandBoxHostRequest {
    return new _AdminUpdateSandBoxHostRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminUpdateSandBoxHostRequest {
    return new _AdminUpdateSandBoxHostRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminUpdateSandBoxHostRequest | PlainMessage<_AdminUpdateSandBoxHostRequest> | undefined | null, b2: _AdminUpdateSandBoxHostRequest | PlainMessage<_AdminUpdateSandBoxHostRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminUpdateSandBoxHostRequest as unknown as MessageType<_AdminUpdateSandBoxHostRequest>, a, b2);
  }
})();
export type AdminUpdateSandBoxHostRequest = InstanceType<typeof AdminUpdateSandBoxHostRequest$Runtime>;
var AdminUpdateSandBoxHostRequest: MessageType<AdminUpdateSandBoxHostRequest> = AdminUpdateSandBoxHostRequest$Runtime as unknown as MessageType<AdminUpdateSandBoxHostRequest>;
(AdminUpdateSandBoxHostRequest as MutableMessageType<AdminUpdateSandBoxHostRequest>).runtime = proto3;
(AdminUpdateSandBoxHostRequest as MutableMessageType<AdminUpdateSandBoxHostRequest>).typeName = "aiserver.v1.AdminUpdateSandBoxHostRequest";
(AdminUpdateSandBoxHostRequest as MutableMessageType<AdminUpdateSandBoxHostRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "force",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AdminUpdateSandBoxHostResponse$Runtime = (() => class _AdminUpdateSandBoxHostResponse extends Message<_AdminUpdateSandBoxHostResponse> {
  declare started: boolean;
  declare reason: string;
  declare version: string;
  constructor(data?: PartialMessage<_AdminUpdateSandBoxHostResponse>) {
    super();
    this.started = false;
    this.reason = "";
    this.version = "";
    proto3.util.initPartial(data, this as _AdminUpdateSandBoxHostResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminUpdateSandBoxHostResponse {
    return new _AdminUpdateSandBoxHostResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminUpdateSandBoxHostResponse {
    return new _AdminUpdateSandBoxHostResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminUpdateSandBoxHostResponse {
    return new _AdminUpdateSandBoxHostResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminUpdateSandBoxHostResponse | PlainMessage<_AdminUpdateSandBoxHostResponse> | undefined | null, b2: _AdminUpdateSandBoxHostResponse | PlainMessage<_AdminUpdateSandBoxHostResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminUpdateSandBoxHostResponse as unknown as MessageType<_AdminUpdateSandBoxHostResponse>, a, b2);
  }
})();
export type AdminUpdateSandBoxHostResponse = InstanceType<typeof AdminUpdateSandBoxHostResponse$Runtime>;
var AdminUpdateSandBoxHostResponse: MessageType<AdminUpdateSandBoxHostResponse> = AdminUpdateSandBoxHostResponse$Runtime as unknown as MessageType<AdminUpdateSandBoxHostResponse>;
(AdminUpdateSandBoxHostResponse as MutableMessageType<AdminUpdateSandBoxHostResponse>).runtime = proto3;
(AdminUpdateSandBoxHostResponse as MutableMessageType<AdminUpdateSandBoxHostResponse>).typeName = "aiserver.v1.AdminUpdateSandBoxHostResponse";
(AdminUpdateSandBoxHostResponse as MutableMessageType<AdminUpdateSandBoxHostResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminSandBoxHostStatusRequest$Runtime = (() => class _AdminSandBoxHostStatusRequest extends Message<_AdminSandBoxHostStatusRequest> {
  declare authId: string;
  declare flavor: string;
  constructor(data?: PartialMessage<_AdminSandBoxHostStatusRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    proto3.util.initPartial(data, this as _AdminSandBoxHostStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSandBoxHostStatusRequest {
    return new _AdminSandBoxHostStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSandBoxHostStatusRequest {
    return new _AdminSandBoxHostStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSandBoxHostStatusRequest {
    return new _AdminSandBoxHostStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSandBoxHostStatusRequest | PlainMessage<_AdminSandBoxHostStatusRequest> | undefined | null, b2: _AdminSandBoxHostStatusRequest | PlainMessage<_AdminSandBoxHostStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminSandBoxHostStatusRequest as unknown as MessageType<_AdminSandBoxHostStatusRequest>, a, b2);
  }
})();
export type AdminSandBoxHostStatusRequest = InstanceType<typeof AdminSandBoxHostStatusRequest$Runtime>;
var AdminSandBoxHostStatusRequest: MessageType<AdminSandBoxHostStatusRequest> = AdminSandBoxHostStatusRequest$Runtime as unknown as MessageType<AdminSandBoxHostStatusRequest>;
(AdminSandBoxHostStatusRequest as MutableMessageType<AdminSandBoxHostStatusRequest>).runtime = proto3;
(AdminSandBoxHostStatusRequest as MutableMessageType<AdminSandBoxHostStatusRequest>).typeName = "aiserver.v1.AdminSandBoxHostStatusRequest";
(AdminSandBoxHostStatusRequest as MutableMessageType<AdminSandBoxHostStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminSandBoxHostStatusResponse$Runtime = (() => class _AdminSandBoxHostStatusResponse extends Message<_AdminSandBoxHostStatusResponse> {
  declare gatewayReachable: boolean;
  declare hostVersion?: string;
  declare hostUpdateAvailable?: boolean;
  declare latestHostVersion?: string;
  declare isBusy?: boolean;
  declare lastBusyAtMs?: bigint;
  constructor(data?: PartialMessage<_AdminSandBoxHostStatusResponse>) {
    super();
    this.gatewayReachable = false;
    proto3.util.initPartial(data, this as _AdminSandBoxHostStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSandBoxHostStatusResponse {
    return new _AdminSandBoxHostStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSandBoxHostStatusResponse {
    return new _AdminSandBoxHostStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSandBoxHostStatusResponse {
    return new _AdminSandBoxHostStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSandBoxHostStatusResponse | PlainMessage<_AdminSandBoxHostStatusResponse> | undefined | null, b2: _AdminSandBoxHostStatusResponse | PlainMessage<_AdminSandBoxHostStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminSandBoxHostStatusResponse as unknown as MessageType<_AdminSandBoxHostStatusResponse>, a, b2);
  }
})();
export type AdminSandBoxHostStatusResponse = InstanceType<typeof AdminSandBoxHostStatusResponse$Runtime>;
var AdminSandBoxHostStatusResponse: MessageType<AdminSandBoxHostStatusResponse> = AdminSandBoxHostStatusResponse$Runtime as unknown as MessageType<AdminSandBoxHostStatusResponse>;
(AdminSandBoxHostStatusResponse as MutableMessageType<AdminSandBoxHostStatusResponse>).runtime = proto3;
(AdminSandBoxHostStatusResponse as MutableMessageType<AdminSandBoxHostStatusResponse>).typeName = "aiserver.v1.AdminSandBoxHostStatusResponse";
(AdminSandBoxHostStatusResponse as MutableMessageType<AdminSandBoxHostStatusResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "gateway_reachable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "host_version", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "host_update_available", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "latest_host_version", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "is_busy", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "last_busy_at_ms", kind: "scalar", T: 3, opt: true }
]);
var AdminSnapshotSandBoxStoreRequest$Runtime = (() => class _AdminSnapshotSandBoxStoreRequest extends Message<_AdminSnapshotSandBoxStoreRequest> {
  declare authId: string;
  declare flavor: string;
  constructor(data?: PartialMessage<_AdminSnapshotSandBoxStoreRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    proto3.util.initPartial(data, this as _AdminSnapshotSandBoxStoreRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSnapshotSandBoxStoreRequest {
    return new _AdminSnapshotSandBoxStoreRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSnapshotSandBoxStoreRequest {
    return new _AdminSnapshotSandBoxStoreRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSnapshotSandBoxStoreRequest {
    return new _AdminSnapshotSandBoxStoreRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSnapshotSandBoxStoreRequest | PlainMessage<_AdminSnapshotSandBoxStoreRequest> | undefined | null, b2: _AdminSnapshotSandBoxStoreRequest | PlainMessage<_AdminSnapshotSandBoxStoreRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminSnapshotSandBoxStoreRequest as unknown as MessageType<_AdminSnapshotSandBoxStoreRequest>, a, b2);
  }
})();
export type AdminSnapshotSandBoxStoreRequest = InstanceType<typeof AdminSnapshotSandBoxStoreRequest$Runtime>;
var AdminSnapshotSandBoxStoreRequest: MessageType<AdminSnapshotSandBoxStoreRequest> = AdminSnapshotSandBoxStoreRequest$Runtime as unknown as MessageType<AdminSnapshotSandBoxStoreRequest>;
(AdminSnapshotSandBoxStoreRequest as MutableMessageType<AdminSnapshotSandBoxStoreRequest>).runtime = proto3;
(AdminSnapshotSandBoxStoreRequest as MutableMessageType<AdminSnapshotSandBoxStoreRequest>).typeName = "aiserver.v1.AdminSnapshotSandBoxStoreRequest";
(AdminSnapshotSandBoxStoreRequest as MutableMessageType<AdminSnapshotSandBoxStoreRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminSnapshotSandBoxStoreResponse$Runtime = (() => class _AdminSnapshotSandBoxStoreResponse extends Message<_AdminSnapshotSandBoxStoreResponse> {
  declare ok: boolean;
  declare manifestEntries: bigint;
  declare filesUploaded: bigint;
  declare reason: string;
  constructor(data?: PartialMessage<_AdminSnapshotSandBoxStoreResponse>) {
    super();
    this.ok = false;
    this.manifestEntries = protoInt64.zero;
    this.filesUploaded = protoInt64.zero;
    this.reason = "";
    proto3.util.initPartial(data, this as _AdminSnapshotSandBoxStoreResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminSnapshotSandBoxStoreResponse {
    return new _AdminSnapshotSandBoxStoreResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminSnapshotSandBoxStoreResponse {
    return new _AdminSnapshotSandBoxStoreResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminSnapshotSandBoxStoreResponse {
    return new _AdminSnapshotSandBoxStoreResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminSnapshotSandBoxStoreResponse | PlainMessage<_AdminSnapshotSandBoxStoreResponse> | undefined | null, b2: _AdminSnapshotSandBoxStoreResponse | PlainMessage<_AdminSnapshotSandBoxStoreResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminSnapshotSandBoxStoreResponse as unknown as MessageType<_AdminSnapshotSandBoxStoreResponse>, a, b2);
  }
})();
export type AdminSnapshotSandBoxStoreResponse = InstanceType<typeof AdminSnapshotSandBoxStoreResponse$Runtime>;
var AdminSnapshotSandBoxStoreResponse: MessageType<AdminSnapshotSandBoxStoreResponse> = AdminSnapshotSandBoxStoreResponse$Runtime as unknown as MessageType<AdminSnapshotSandBoxStoreResponse>;
(AdminSnapshotSandBoxStoreResponse as MutableMessageType<AdminSnapshotSandBoxStoreResponse>).runtime = proto3;
(AdminSnapshotSandBoxStoreResponse as MutableMessageType<AdminSnapshotSandBoxStoreResponse>).typeName = "aiserver.v1.AdminSnapshotSandBoxStoreResponse";
(AdminSnapshotSandBoxStoreResponse as MutableMessageType<AdminSnapshotSandBoxStoreResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "ok",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "manifest_entries",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "files_uploaded",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminHibernateSandBoxRequest$Runtime = (() => class _AdminHibernateSandBoxRequest extends Message<_AdminHibernateSandBoxRequest> {
  declare authId: string;
  declare flavor: string;
  declare force: boolean;
  constructor(data?: PartialMessage<_AdminHibernateSandBoxRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    this.force = false;
    proto3.util.initPartial(data, this as _AdminHibernateSandBoxRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminHibernateSandBoxRequest {
    return new _AdminHibernateSandBoxRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminHibernateSandBoxRequest {
    return new _AdminHibernateSandBoxRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminHibernateSandBoxRequest {
    return new _AdminHibernateSandBoxRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminHibernateSandBoxRequest | PlainMessage<_AdminHibernateSandBoxRequest> | undefined | null, b2: _AdminHibernateSandBoxRequest | PlainMessage<_AdminHibernateSandBoxRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminHibernateSandBoxRequest as unknown as MessageType<_AdminHibernateSandBoxRequest>, a, b2);
  }
})();
export type AdminHibernateSandBoxRequest = InstanceType<typeof AdminHibernateSandBoxRequest$Runtime>;
var AdminHibernateSandBoxRequest: MessageType<AdminHibernateSandBoxRequest> = AdminHibernateSandBoxRequest$Runtime as unknown as MessageType<AdminHibernateSandBoxRequest>;
(AdminHibernateSandBoxRequest as MutableMessageType<AdminHibernateSandBoxRequest>).runtime = proto3;
(AdminHibernateSandBoxRequest as MutableMessageType<AdminHibernateSandBoxRequest>).typeName = "aiserver.v1.AdminHibernateSandBoxRequest";
(AdminHibernateSandBoxRequest as MutableMessageType<AdminHibernateSandBoxRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "force",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AdminHibernateSandBoxResponse$Runtime = (() => class _AdminHibernateSandBoxResponse extends Message<_AdminHibernateSandBoxResponse> {
  declare started: boolean;
  declare reason: string;
  constructor(data?: PartialMessage<_AdminHibernateSandBoxResponse>) {
    super();
    this.started = false;
    this.reason = "";
    proto3.util.initPartial(data, this as _AdminHibernateSandBoxResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminHibernateSandBoxResponse {
    return new _AdminHibernateSandBoxResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminHibernateSandBoxResponse {
    return new _AdminHibernateSandBoxResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminHibernateSandBoxResponse {
    return new _AdminHibernateSandBoxResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminHibernateSandBoxResponse | PlainMessage<_AdminHibernateSandBoxResponse> | undefined | null, b2: _AdminHibernateSandBoxResponse | PlainMessage<_AdminHibernateSandBoxResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminHibernateSandBoxResponse as unknown as MessageType<_AdminHibernateSandBoxResponse>, a, b2);
  }
})();
export type AdminHibernateSandBoxResponse = InstanceType<typeof AdminHibernateSandBoxResponse$Runtime>;
var AdminHibernateSandBoxResponse: MessageType<AdminHibernateSandBoxResponse> = AdminHibernateSandBoxResponse$Runtime as unknown as MessageType<AdminHibernateSandBoxResponse>;
(AdminHibernateSandBoxResponse as MutableMessageType<AdminHibernateSandBoxResponse>).runtime = proto3;
(AdminHibernateSandBoxResponse as MutableMessageType<AdminHibernateSandBoxResponse>).typeName = "aiserver.v1.AdminHibernateSandBoxResponse";
(AdminHibernateSandBoxResponse as MutableMessageType<AdminHibernateSandBoxResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminListSandAgentsRequest$Runtime = (() => class _AdminListSandAgentsRequest extends Message<_AdminListSandAgentsRequest> {
  declare authId: string;
  declare flavor: string;
  constructor(data?: PartialMessage<_AdminListSandAgentsRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    proto3.util.initPartial(data, this as _AdminListSandAgentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminListSandAgentsRequest {
    return new _AdminListSandAgentsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminListSandAgentsRequest {
    return new _AdminListSandAgentsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminListSandAgentsRequest {
    return new _AdminListSandAgentsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminListSandAgentsRequest | PlainMessage<_AdminListSandAgentsRequest> | undefined | null, b2: _AdminListSandAgentsRequest | PlainMessage<_AdminListSandAgentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminListSandAgentsRequest as unknown as MessageType<_AdminListSandAgentsRequest>, a, b2);
  }
})();
export type AdminListSandAgentsRequest = InstanceType<typeof AdminListSandAgentsRequest$Runtime>;
var AdminListSandAgentsRequest: MessageType<AdminListSandAgentsRequest> = AdminListSandAgentsRequest$Runtime as unknown as MessageType<AdminListSandAgentsRequest>;
(AdminListSandAgentsRequest as MutableMessageType<AdminListSandAgentsRequest>).runtime = proto3;
(AdminListSandAgentsRequest as MutableMessageType<AdminListSandAgentsRequest>).typeName = "aiserver.v1.AdminListSandAgentsRequest";
(AdminListSandAgentsRequest as MutableMessageType<AdminListSandAgentsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminListSandAgentsResponse$Runtime = (() => class _AdminListSandAgentsResponse extends Message<_AdminListSandAgentsResponse> {
  declare reachable: boolean;
  declare agentsJson: string;
  declare reason: string;
  constructor(data?: PartialMessage<_AdminListSandAgentsResponse>) {
    super();
    this.reachable = false;
    this.agentsJson = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _AdminListSandAgentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminListSandAgentsResponse {
    return new _AdminListSandAgentsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminListSandAgentsResponse {
    return new _AdminListSandAgentsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminListSandAgentsResponse {
    return new _AdminListSandAgentsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminListSandAgentsResponse | PlainMessage<_AdminListSandAgentsResponse> | undefined | null, b2: _AdminListSandAgentsResponse | PlainMessage<_AdminListSandAgentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminListSandAgentsResponse as unknown as MessageType<_AdminListSandAgentsResponse>, a, b2);
  }
})();
export type AdminListSandAgentsResponse = InstanceType<typeof AdminListSandAgentsResponse$Runtime>;
var AdminListSandAgentsResponse: MessageType<AdminListSandAgentsResponse> = AdminListSandAgentsResponse$Runtime as unknown as MessageType<AdminListSandAgentsResponse>;
(AdminListSandAgentsResponse as MutableMessageType<AdminListSandAgentsResponse>).runtime = proto3;
(AdminListSandAgentsResponse as MutableMessageType<AdminListSandAgentsResponse>).typeName = "aiserver.v1.AdminListSandAgentsResponse";
(AdminListSandAgentsResponse as MutableMessageType<AdminListSandAgentsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reachable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "agents_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdminGetSandAgentTranscriptPageRequest$Runtime = (() => class _AdminGetSandAgentTranscriptPageRequest extends Message<_AdminGetSandAgentTranscriptPageRequest> {
  declare authId: string;
  declare flavor: string;
  declare agentId: string;
  declare beforeSeq: bigint;
  declare limit: number;
  declare sinceMs: bigint;
  declare untilMs: bigint;
  constructor(data?: PartialMessage<_AdminGetSandAgentTranscriptPageRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    this.agentId = "";
    this.beforeSeq = protoInt64.zero;
    this.limit = 0;
    this.sinceMs = protoInt64.zero;
    this.untilMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _AdminGetSandAgentTranscriptPageRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminGetSandAgentTranscriptPageRequest {
    return new _AdminGetSandAgentTranscriptPageRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminGetSandAgentTranscriptPageRequest {
    return new _AdminGetSandAgentTranscriptPageRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminGetSandAgentTranscriptPageRequest {
    return new _AdminGetSandAgentTranscriptPageRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminGetSandAgentTranscriptPageRequest | PlainMessage<_AdminGetSandAgentTranscriptPageRequest> | undefined | null, b2: _AdminGetSandAgentTranscriptPageRequest | PlainMessage<_AdminGetSandAgentTranscriptPageRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminGetSandAgentTranscriptPageRequest as unknown as MessageType<_AdminGetSandAgentTranscriptPageRequest>, a, b2);
  }
})();
export type AdminGetSandAgentTranscriptPageRequest = InstanceType<typeof AdminGetSandAgentTranscriptPageRequest$Runtime>;
var AdminGetSandAgentTranscriptPageRequest: MessageType<AdminGetSandAgentTranscriptPageRequest> = AdminGetSandAgentTranscriptPageRequest$Runtime as unknown as MessageType<AdminGetSandAgentTranscriptPageRequest>;
(AdminGetSandAgentTranscriptPageRequest as MutableMessageType<AdminGetSandAgentTranscriptPageRequest>).runtime = proto3;
(AdminGetSandAgentTranscriptPageRequest as MutableMessageType<AdminGetSandAgentTranscriptPageRequest>).typeName = "aiserver.v1.AdminGetSandAgentTranscriptPageRequest";
(AdminGetSandAgentTranscriptPageRequest as MutableMessageType<AdminGetSandAgentTranscriptPageRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "before_seq",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "limit",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 6,
    name: "since_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 7,
    name: "until_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var AdminGetSandAgentTranscriptPageResponse$Runtime = (() => class _AdminGetSandAgentTranscriptPageResponse extends Message<_AdminGetSandAgentTranscriptPageResponse> {
  declare reachable: boolean;
  declare entriesJson: string;
  declare reason: string;
  declare nextBeforeSeq: bigint;
  constructor(data?: PartialMessage<_AdminGetSandAgentTranscriptPageResponse>) {
    super();
    this.reachable = false;
    this.entriesJson = "";
    this.reason = "";
    this.nextBeforeSeq = protoInt64.zero;
    proto3.util.initPartial(data, this as _AdminGetSandAgentTranscriptPageResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminGetSandAgentTranscriptPageResponse {
    return new _AdminGetSandAgentTranscriptPageResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminGetSandAgentTranscriptPageResponse {
    return new _AdminGetSandAgentTranscriptPageResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminGetSandAgentTranscriptPageResponse {
    return new _AdminGetSandAgentTranscriptPageResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminGetSandAgentTranscriptPageResponse | PlainMessage<_AdminGetSandAgentTranscriptPageResponse> | undefined | null, b2: _AdminGetSandAgentTranscriptPageResponse | PlainMessage<_AdminGetSandAgentTranscriptPageResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminGetSandAgentTranscriptPageResponse as unknown as MessageType<_AdminGetSandAgentTranscriptPageResponse>, a, b2);
  }
})();
export type AdminGetSandAgentTranscriptPageResponse = InstanceType<typeof AdminGetSandAgentTranscriptPageResponse$Runtime>;
var AdminGetSandAgentTranscriptPageResponse: MessageType<AdminGetSandAgentTranscriptPageResponse> = AdminGetSandAgentTranscriptPageResponse$Runtime as unknown as MessageType<AdminGetSandAgentTranscriptPageResponse>;
(AdminGetSandAgentTranscriptPageResponse as MutableMessageType<AdminGetSandAgentTranscriptPageResponse>).runtime = proto3;
(AdminGetSandAgentTranscriptPageResponse as MutableMessageType<AdminGetSandAgentTranscriptPageResponse>).typeName = "aiserver.v1.AdminGetSandAgentTranscriptPageResponse";
(AdminGetSandAgentTranscriptPageResponse as MutableMessageType<AdminGetSandAgentTranscriptPageResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reachable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "entries_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "next_before_seq",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var WatchSandBoxMigrationRequest$Runtime = (() => class _WatchSandBoxMigrationRequest extends Message<_WatchSandBoxMigrationRequest> {
  declare fromOffsetKey: string;
  declare includeFinished: boolean;
  constructor(data?: PartialMessage<_WatchSandBoxMigrationRequest>) {
    super();
    this.fromOffsetKey = "";
    this.includeFinished = false;
    proto3.util.initPartial(data, this as _WatchSandBoxMigrationRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WatchSandBoxMigrationRequest {
    return new _WatchSandBoxMigrationRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WatchSandBoxMigrationRequest {
    return new _WatchSandBoxMigrationRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WatchSandBoxMigrationRequest {
    return new _WatchSandBoxMigrationRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _WatchSandBoxMigrationRequest | PlainMessage<_WatchSandBoxMigrationRequest> | undefined | null, b2: _WatchSandBoxMigrationRequest | PlainMessage<_WatchSandBoxMigrationRequest> | undefined | null): boolean {
    return proto3.util.equals(_WatchSandBoxMigrationRequest as unknown as MessageType<_WatchSandBoxMigrationRequest>, a, b2);
  }
})();
export type WatchSandBoxMigrationRequest = InstanceType<typeof WatchSandBoxMigrationRequest$Runtime>;
var WatchSandBoxMigrationRequest: MessageType<WatchSandBoxMigrationRequest> = WatchSandBoxMigrationRequest$Runtime as unknown as MessageType<WatchSandBoxMigrationRequest>;
(WatchSandBoxMigrationRequest as MutableMessageType<WatchSandBoxMigrationRequest>).runtime = proto3;
(WatchSandBoxMigrationRequest as MutableMessageType<WatchSandBoxMigrationRequest>).typeName = "aiserver.v1.WatchSandBoxMigrationRequest";
(WatchSandBoxMigrationRequest as MutableMessageType<WatchSandBoxMigrationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "from_offset_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "include_finished",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AdminWatchSandBoxMigrationRequest$Runtime = (() => class _AdminWatchSandBoxMigrationRequest extends Message<_AdminWatchSandBoxMigrationRequest> {
  declare authId: string;
  declare flavor: string;
  declare fromOffsetKey: string;
  constructor(data?: PartialMessage<_AdminWatchSandBoxMigrationRequest>) {
    super();
    this.authId = "";
    this.flavor = "";
    this.fromOffsetKey = "";
    proto3.util.initPartial(data, this as _AdminWatchSandBoxMigrationRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminWatchSandBoxMigrationRequest {
    return new _AdminWatchSandBoxMigrationRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminWatchSandBoxMigrationRequest {
    return new _AdminWatchSandBoxMigrationRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminWatchSandBoxMigrationRequest {
    return new _AdminWatchSandBoxMigrationRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminWatchSandBoxMigrationRequest | PlainMessage<_AdminWatchSandBoxMigrationRequest> | undefined | null, b2: _AdminWatchSandBoxMigrationRequest | PlainMessage<_AdminWatchSandBoxMigrationRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminWatchSandBoxMigrationRequest as unknown as MessageType<_AdminWatchSandBoxMigrationRequest>, a, b2);
  }
})();
export type AdminWatchSandBoxMigrationRequest = InstanceType<typeof AdminWatchSandBoxMigrationRequest$Runtime>;
var AdminWatchSandBoxMigrationRequest: MessageType<AdminWatchSandBoxMigrationRequest> = AdminWatchSandBoxMigrationRequest$Runtime as unknown as MessageType<AdminWatchSandBoxMigrationRequest>;
(AdminWatchSandBoxMigrationRequest as MutableMessageType<AdminWatchSandBoxMigrationRequest>).runtime = proto3;
(AdminWatchSandBoxMigrationRequest as MutableMessageType<AdminWatchSandBoxMigrationRequest>).typeName = "aiserver.v1.AdminWatchSandBoxMigrationRequest";
(AdminWatchSandBoxMigrationRequest as MutableMessageType<AdminWatchSandBoxMigrationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "flavor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "from_offset_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SandBoxMigrationEvent$Runtime = (() => class _SandBoxMigrationEvent extends Message<_SandBoxMigrationEvent> {
  declare phase: SandBoxMigrationPhase;
  declare detail: string;
  declare atMs: bigint;
  declare offsetKey: string;
  declare operationId: string;
  constructor(data?: PartialMessage<_SandBoxMigrationEvent>) {
    super();
    this.phase = SandBoxMigrationPhase.UNSPECIFIED;
    this.detail = "";
    this.atMs = protoInt64.zero;
    this.offsetKey = "";
    this.operationId = "";
    proto3.util.initPartial(data, this as _SandBoxMigrationEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxMigrationEvent {
    return new _SandBoxMigrationEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxMigrationEvent {
    return new _SandBoxMigrationEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxMigrationEvent {
    return new _SandBoxMigrationEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxMigrationEvent | PlainMessage<_SandBoxMigrationEvent> | undefined | null, b2: _SandBoxMigrationEvent | PlainMessage<_SandBoxMigrationEvent> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxMigrationEvent as unknown as MessageType<_SandBoxMigrationEvent>, a, b2);
  }
})();
export type SandBoxMigrationEvent = InstanceType<typeof SandBoxMigrationEvent$Runtime>;
var SandBoxMigrationEvent: MessageType<SandBoxMigrationEvent> = SandBoxMigrationEvent$Runtime as unknown as MessageType<SandBoxMigrationEvent>;
(SandBoxMigrationEvent as MutableMessageType<SandBoxMigrationEvent>).runtime = proto3;
(SandBoxMigrationEvent as MutableMessageType<SandBoxMigrationEvent>).typeName = "aiserver.v1.SandBoxMigrationEvent";
(SandBoxMigrationEvent as MutableMessageType<SandBoxMigrationEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "phase", kind: "enum", T: proto3.getEnumType(SandBoxMigrationPhase) },
  {
    no: 2,
    name: "detail",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "offset_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "operation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetSandBoxRunStateRequest$Runtime = (() => class _GetSandBoxRunStateRequest extends Message<_GetSandBoxRunStateRequest> {
  constructor(data?: PartialMessage<_GetSandBoxRunStateRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetSandBoxRunStateRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSandBoxRunStateRequest {
    return new _GetSandBoxRunStateRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSandBoxRunStateRequest {
    return new _GetSandBoxRunStateRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSandBoxRunStateRequest {
    return new _GetSandBoxRunStateRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSandBoxRunStateRequest | PlainMessage<_GetSandBoxRunStateRequest> | undefined | null, b2: _GetSandBoxRunStateRequest | PlainMessage<_GetSandBoxRunStateRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSandBoxRunStateRequest as unknown as MessageType<_GetSandBoxRunStateRequest>, a, b2);
  }
})();
export type GetSandBoxRunStateRequest = InstanceType<typeof GetSandBoxRunStateRequest$Runtime>;
var GetSandBoxRunStateRequest: MessageType<GetSandBoxRunStateRequest> = GetSandBoxRunStateRequest$Runtime as unknown as MessageType<GetSandBoxRunStateRequest>;
(GetSandBoxRunStateRequest as MutableMessageType<GetSandBoxRunStateRequest>).runtime = proto3;
(GetSandBoxRunStateRequest as MutableMessageType<GetSandBoxRunStateRequest>).typeName = "aiserver.v1.GetSandBoxRunStateRequest";
(GetSandBoxRunStateRequest as MutableMessageType<GetSandBoxRunStateRequest>).fields = proto3.util.newFieldList(() => []);
var GetSandBoxRunStateResponse$Runtime = (() => class _GetSandBoxRunStateResponse extends Message<_GetSandBoxRunStateResponse> {
  declare state: SandBoxRunState;
  declare imageUpdateAvailable?: boolean;
  constructor(data?: PartialMessage<_GetSandBoxRunStateResponse>) {
    super();
    this.state = SandBoxRunState.UNSPECIFIED;
    proto3.util.initPartial(data, this as _GetSandBoxRunStateResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSandBoxRunStateResponse {
    return new _GetSandBoxRunStateResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSandBoxRunStateResponse {
    return new _GetSandBoxRunStateResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSandBoxRunStateResponse {
    return new _GetSandBoxRunStateResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSandBoxRunStateResponse | PlainMessage<_GetSandBoxRunStateResponse> | undefined | null, b2: _GetSandBoxRunStateResponse | PlainMessage<_GetSandBoxRunStateResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSandBoxRunStateResponse as unknown as MessageType<_GetSandBoxRunStateResponse>, a, b2);
  }
})();
export type GetSandBoxRunStateResponse = InstanceType<typeof GetSandBoxRunStateResponse$Runtime>;
var GetSandBoxRunStateResponse: MessageType<GetSandBoxRunStateResponse> = GetSandBoxRunStateResponse$Runtime as unknown as MessageType<GetSandBoxRunStateResponse>;
(GetSandBoxRunStateResponse as MutableMessageType<GetSandBoxRunStateResponse>).runtime = proto3;
(GetSandBoxRunStateResponse as MutableMessageType<GetSandBoxRunStateResponse>).typeName = "aiserver.v1.GetSandBoxRunStateResponse";
(GetSandBoxRunStateResponse as MutableMessageType<GetSandBoxRunStateResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(SandBoxRunState) },
  { no: 2, name: "image_update_available", kind: "scalar", T: 8, opt: true }
]);
var SandBoxDescriptor$Runtime = (() => class _SandBoxDescriptor extends Message<_SandBoxDescriptor> {
  declare running: boolean;
  constructor(data?: PartialMessage<_SandBoxDescriptor>) {
    super();
    this.running = false;
    proto3.util.initPartial(data, this as _SandBoxDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxDescriptor {
    return new _SandBoxDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxDescriptor {
    return new _SandBoxDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxDescriptor {
    return new _SandBoxDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxDescriptor | PlainMessage<_SandBoxDescriptor> | undefined | null, b2: _SandBoxDescriptor | PlainMessage<_SandBoxDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxDescriptor as unknown as MessageType<_SandBoxDescriptor>, a, b2);
  }
})();
export type SandBoxDescriptor = InstanceType<typeof SandBoxDescriptor$Runtime>;
var SandBoxDescriptor: MessageType<SandBoxDescriptor> = SandBoxDescriptor$Runtime as unknown as MessageType<SandBoxDescriptor>;
(SandBoxDescriptor as MutableMessageType<SandBoxDescriptor>).runtime = proto3;
(SandBoxDescriptor as MutableMessageType<SandBoxDescriptor>).typeName = "aiserver.v1.SandBoxDescriptor";
(SandBoxDescriptor as MutableMessageType<SandBoxDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "running",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ListSandBoxesRequest$Runtime = (() => class _ListSandBoxesRequest extends Message<_ListSandBoxesRequest> {
  constructor(data?: PartialMessage<_ListSandBoxesRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListSandBoxesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandBoxesRequest {
    return new _ListSandBoxesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandBoxesRequest {
    return new _ListSandBoxesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandBoxesRequest {
    return new _ListSandBoxesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandBoxesRequest | PlainMessage<_ListSandBoxesRequest> | undefined | null, b2: _ListSandBoxesRequest | PlainMessage<_ListSandBoxesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListSandBoxesRequest as unknown as MessageType<_ListSandBoxesRequest>, a, b2);
  }
})();
export type ListSandBoxesRequest = InstanceType<typeof ListSandBoxesRequest$Runtime>;
var ListSandBoxesRequest: MessageType<ListSandBoxesRequest> = ListSandBoxesRequest$Runtime as unknown as MessageType<ListSandBoxesRequest>;
(ListSandBoxesRequest as MutableMessageType<ListSandBoxesRequest>).runtime = proto3;
(ListSandBoxesRequest as MutableMessageType<ListSandBoxesRequest>).typeName = "aiserver.v1.ListSandBoxesRequest";
(ListSandBoxesRequest as MutableMessageType<ListSandBoxesRequest>).fields = proto3.util.newFieldList(() => []);
var ListSandBoxesResponse$Runtime = (() => class _ListSandBoxesResponse extends Message<_ListSandBoxesResponse> {
  declare boxes: SandBoxDescriptor[];
  constructor(data?: PartialMessage<_ListSandBoxesResponse>) {
    super();
    this.boxes = [];
    proto3.util.initPartial(data, this as _ListSandBoxesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandBoxesResponse {
    return new _ListSandBoxesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandBoxesResponse {
    return new _ListSandBoxesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandBoxesResponse {
    return new _ListSandBoxesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandBoxesResponse | PlainMessage<_ListSandBoxesResponse> | undefined | null, b2: _ListSandBoxesResponse | PlainMessage<_ListSandBoxesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListSandBoxesResponse as unknown as MessageType<_ListSandBoxesResponse>, a, b2);
  }
})();
export type ListSandBoxesResponse = InstanceType<typeof ListSandBoxesResponse$Runtime>;
var ListSandBoxesResponse: MessageType<ListSandBoxesResponse> = ListSandBoxesResponse$Runtime as unknown as MessageType<ListSandBoxesResponse>;
(ListSandBoxesResponse as MutableMessageType<ListSandBoxesResponse>).runtime = proto3;
(ListSandBoxesResponse as MutableMessageType<ListSandBoxesResponse>).typeName = "aiserver.v1.ListSandBoxesResponse";
(ListSandBoxesResponse as MutableMessageType<ListSandBoxesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "boxes", kind: "message", T: SandBoxDescriptor, repeated: true }
]);
var SandBoxStoreMultipartPart$Runtime = (() => class _SandBoxStoreMultipartPart extends Message<_SandBoxStoreMultipartPart> {
  declare partNumber: number;
  declare sizeBytes: bigint;
  declare sha256: string;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartPart>) {
    super();
    this.partNumber = 0;
    this.sizeBytes = protoInt64.zero;
    this.sha256 = "";
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartPart {
    return new _SandBoxStoreMultipartPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartPart {
    return new _SandBoxStoreMultipartPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartPart {
    return new _SandBoxStoreMultipartPart().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartPart | PlainMessage<_SandBoxStoreMultipartPart> | undefined | null, b2: _SandBoxStoreMultipartPart | PlainMessage<_SandBoxStoreMultipartPart> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartPart as unknown as MessageType<_SandBoxStoreMultipartPart>, a, b2);
  }
})();
export type SandBoxStoreMultipartPart = InstanceType<typeof SandBoxStoreMultipartPart$Runtime>;
var SandBoxStoreMultipartPart: MessageType<SandBoxStoreMultipartPart> = SandBoxStoreMultipartPart$Runtime as unknown as MessageType<SandBoxStoreMultipartPart>;
(SandBoxStoreMultipartPart as MutableMessageType<SandBoxStoreMultipartPart>).runtime = proto3;
(SandBoxStoreMultipartPart as MutableMessageType<SandBoxStoreMultipartPart>).typeName = "aiserver.v1.SandBoxStoreMultipartPart";
(SandBoxStoreMultipartPart as MutableMessageType<SandBoxStoreMultipartPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "part_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "sha256",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SandBoxStoreWriteFile$Runtime = (() => class _SandBoxStoreWriteFile extends Message<_SandBoxStoreWriteFile> {
  declare relPath: string;
  declare sha256: string;
  declare sizeBytes: bigint;
  declare contentAddressed: boolean;
  declare ifMatchEtag: string;
  declare expectAbsent: boolean;
  declare multipartParts: SandBoxStoreMultipartPart[];
  constructor(data?: PartialMessage<_SandBoxStoreWriteFile>) {
    super();
    this.relPath = "";
    this.sha256 = "";
    this.sizeBytes = protoInt64.zero;
    this.contentAddressed = false;
    this.ifMatchEtag = "";
    this.expectAbsent = false;
    this.multipartParts = [];
    proto3.util.initPartial(data, this as _SandBoxStoreWriteFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreWriteFile {
    return new _SandBoxStoreWriteFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreWriteFile {
    return new _SandBoxStoreWriteFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreWriteFile {
    return new _SandBoxStoreWriteFile().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreWriteFile | PlainMessage<_SandBoxStoreWriteFile> | undefined | null, b2: _SandBoxStoreWriteFile | PlainMessage<_SandBoxStoreWriteFile> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreWriteFile as unknown as MessageType<_SandBoxStoreWriteFile>, a, b2);
  }
})();
export type SandBoxStoreWriteFile = InstanceType<typeof SandBoxStoreWriteFile$Runtime>;
var SandBoxStoreWriteFile: MessageType<SandBoxStoreWriteFile> = SandBoxStoreWriteFile$Runtime as unknown as MessageType<SandBoxStoreWriteFile>;
(SandBoxStoreWriteFile as MutableMessageType<SandBoxStoreWriteFile>).runtime = proto3;
(SandBoxStoreWriteFile as MutableMessageType<SandBoxStoreWriteFile>).typeName = "aiserver.v1.SandBoxStoreWriteFile";
(SandBoxStoreWriteFile as MutableMessageType<SandBoxStoreWriteFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "sha256",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "content_addressed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "if_match_etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "expect_absent",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "multipart_parts", kind: "message", T: SandBoxStoreMultipartPart, repeated: true }
]);
var PresignSandBoxStoreWritesRequest$Runtime = (() => class _PresignSandBoxStoreWritesRequest extends Message<_PresignSandBoxStoreWritesRequest> {
  declare files: SandBoxStoreWriteFile[];
  constructor(data?: PartialMessage<_PresignSandBoxStoreWritesRequest>) {
    super();
    this.files = [];
    proto3.util.initPartial(data, this as _PresignSandBoxStoreWritesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PresignSandBoxStoreWritesRequest {
    return new _PresignSandBoxStoreWritesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreWritesRequest {
    return new _PresignSandBoxStoreWritesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreWritesRequest {
    return new _PresignSandBoxStoreWritesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _PresignSandBoxStoreWritesRequest | PlainMessage<_PresignSandBoxStoreWritesRequest> | undefined | null, b2: _PresignSandBoxStoreWritesRequest | PlainMessage<_PresignSandBoxStoreWritesRequest> | undefined | null): boolean {
    return proto3.util.equals(_PresignSandBoxStoreWritesRequest as unknown as MessageType<_PresignSandBoxStoreWritesRequest>, a, b2);
  }
})();
export type PresignSandBoxStoreWritesRequest = InstanceType<typeof PresignSandBoxStoreWritesRequest$Runtime>;
var PresignSandBoxStoreWritesRequest: MessageType<PresignSandBoxStoreWritesRequest> = PresignSandBoxStoreWritesRequest$Runtime as unknown as MessageType<PresignSandBoxStoreWritesRequest>;
(PresignSandBoxStoreWritesRequest as MutableMessageType<PresignSandBoxStoreWritesRequest>).runtime = proto3;
(PresignSandBoxStoreWritesRequest as MutableMessageType<PresignSandBoxStoreWritesRequest>).typeName = "aiserver.v1.PresignSandBoxStoreWritesRequest";
(PresignSandBoxStoreWritesRequest as MutableMessageType<PresignSandBoxStoreWritesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: SandBoxStoreWriteFile, repeated: true }
]);
var SandBoxStoreMultipartUploadPartInstruction$Runtime = (() => class _SandBoxStoreMultipartUploadPartInstruction extends Message<_SandBoxStoreMultipartUploadPartInstruction> {
  declare partNumber: number;
  declare url: string;
  declare headers: { [key: string]: string };
  declare offsetBytes: bigint;
  declare sizeBytes: bigint;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartUploadPartInstruction>) {
    super();
    this.partNumber = 0;
    this.url = "";
    this.headers = {};
    this.offsetBytes = protoInt64.zero;
    this.sizeBytes = protoInt64.zero;
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartUploadPartInstruction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartUploadPartInstruction {
    return new _SandBoxStoreMultipartUploadPartInstruction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadPartInstruction {
    return new _SandBoxStoreMultipartUploadPartInstruction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadPartInstruction {
    return new _SandBoxStoreMultipartUploadPartInstruction().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartUploadPartInstruction | PlainMessage<_SandBoxStoreMultipartUploadPartInstruction> | undefined | null, b2: _SandBoxStoreMultipartUploadPartInstruction | PlainMessage<_SandBoxStoreMultipartUploadPartInstruction> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartUploadPartInstruction as unknown as MessageType<_SandBoxStoreMultipartUploadPartInstruction>, a, b2);
  }
})();
export type SandBoxStoreMultipartUploadPartInstruction = InstanceType<typeof SandBoxStoreMultipartUploadPartInstruction$Runtime>;
var SandBoxStoreMultipartUploadPartInstruction: MessageType<SandBoxStoreMultipartUploadPartInstruction> = SandBoxStoreMultipartUploadPartInstruction$Runtime as unknown as MessageType<SandBoxStoreMultipartUploadPartInstruction>;
(SandBoxStoreMultipartUploadPartInstruction as MutableMessageType<SandBoxStoreMultipartUploadPartInstruction>).runtime = proto3;
(SandBoxStoreMultipartUploadPartInstruction as MutableMessageType<SandBoxStoreMultipartUploadPartInstruction>).typeName = "aiserver.v1.SandBoxStoreMultipartUploadPartInstruction";
(SandBoxStoreMultipartUploadPartInstruction as MutableMessageType<SandBoxStoreMultipartUploadPartInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "part_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "headers", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 4,
    name: "offset_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var SandBoxStoreMultipartUploadContext$Runtime = (() => class _SandBoxStoreMultipartUploadContext extends Message<_SandBoxStoreMultipartUploadContext> {
  declare uploadId: string;
  declare relPath: string;
  declare sizeBytes: bigint;
  declare sha256: string;
  declare expectedPartCount: number;
  declare partSha256s: string[];
  declare sessionId: string;
  declare precondition: { case: "ifMatchEtag"; value: string } | { case: "expectAbsent"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SandBoxStoreMultipartUploadContext>) {
    super();
    this.uploadId = "";
    this.relPath = "";
    this.sizeBytes = protoInt64.zero;
    this.sha256 = "";
    this.expectedPartCount = 0;
    this.partSha256s = [];
    this.precondition = { case: void 0 };
    this.sessionId = "";
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartUploadContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartUploadContext {
    return new _SandBoxStoreMultipartUploadContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadContext {
    return new _SandBoxStoreMultipartUploadContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadContext {
    return new _SandBoxStoreMultipartUploadContext().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartUploadContext | PlainMessage<_SandBoxStoreMultipartUploadContext> | undefined | null, b2: _SandBoxStoreMultipartUploadContext | PlainMessage<_SandBoxStoreMultipartUploadContext> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartUploadContext as unknown as MessageType<_SandBoxStoreMultipartUploadContext>, a, b2);
  }
})();
export type SandBoxStoreMultipartUploadContext = InstanceType<typeof SandBoxStoreMultipartUploadContext$Runtime>;
var SandBoxStoreMultipartUploadContext: MessageType<SandBoxStoreMultipartUploadContext> = SandBoxStoreMultipartUploadContext$Runtime as unknown as MessageType<SandBoxStoreMultipartUploadContext>;
(SandBoxStoreMultipartUploadContext as MutableMessageType<SandBoxStoreMultipartUploadContext>).runtime = proto3;
(SandBoxStoreMultipartUploadContext as MutableMessageType<SandBoxStoreMultipartUploadContext>).typeName = "aiserver.v1.SandBoxStoreMultipartUploadContext";
(SandBoxStoreMultipartUploadContext as MutableMessageType<SandBoxStoreMultipartUploadContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "upload_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "sha256",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "expected_part_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 6, name: "part_sha256s", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "if_match_etag", kind: "scalar", T: 9, oneof: "precondition" },
  { no: 8, name: "expect_absent", kind: "scalar", T: 8, oneof: "precondition" },
  {
    no: 9,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SandBoxStoreMultipartWriteInstruction$Runtime = (() => class _SandBoxStoreMultipartWriteInstruction extends Message<_SandBoxStoreMultipartWriteInstruction> {
  declare context?: SandBoxStoreMultipartUploadContext;
  declare parts: SandBoxStoreMultipartUploadPartInstruction[];
  declare partUrlsExpiresAtMs: bigint;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartWriteInstruction>) {
    super();
    this.parts = [];
    this.partUrlsExpiresAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartWriteInstruction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartWriteInstruction {
    return new _SandBoxStoreMultipartWriteInstruction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteInstruction {
    return new _SandBoxStoreMultipartWriteInstruction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteInstruction {
    return new _SandBoxStoreMultipartWriteInstruction().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartWriteInstruction | PlainMessage<_SandBoxStoreMultipartWriteInstruction> | undefined | null, b2: _SandBoxStoreMultipartWriteInstruction | PlainMessage<_SandBoxStoreMultipartWriteInstruction> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartWriteInstruction as unknown as MessageType<_SandBoxStoreMultipartWriteInstruction>, a, b2);
  }
})();
export type SandBoxStoreMultipartWriteInstruction = InstanceType<typeof SandBoxStoreMultipartWriteInstruction$Runtime>;
var SandBoxStoreMultipartWriteInstruction: MessageType<SandBoxStoreMultipartWriteInstruction> = SandBoxStoreMultipartWriteInstruction$Runtime as unknown as MessageType<SandBoxStoreMultipartWriteInstruction>;
(SandBoxStoreMultipartWriteInstruction as MutableMessageType<SandBoxStoreMultipartWriteInstruction>).runtime = proto3;
(SandBoxStoreMultipartWriteInstruction as MutableMessageType<SandBoxStoreMultipartWriteInstruction>).typeName = "aiserver.v1.SandBoxStoreMultipartWriteInstruction";
(SandBoxStoreMultipartWriteInstruction as MutableMessageType<SandBoxStoreMultipartWriteInstruction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context", kind: "message", T: SandBoxStoreMultipartUploadContext },
  { no: 2, name: "parts", kind: "message", T: SandBoxStoreMultipartUploadPartInstruction, repeated: true },
  {
    no: 3,
    name: "part_urls_expires_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var SandBoxStoreWriteInstruction$Runtime = (() => class _SandBoxStoreWriteInstruction extends Message<_SandBoxStoreWriteInstruction> {
  declare relPath: string;
  declare url: string;
  declare headers: { [key: string]: string };
  declare expiresAtMs: bigint;
  declare multipart?: SandBoxStoreMultipartWriteInstruction;
  constructor(data?: PartialMessage<_SandBoxStoreWriteInstruction>) {
    super();
    this.relPath = "";
    this.url = "";
    this.headers = {};
    this.expiresAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _SandBoxStoreWriteInstruction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreWriteInstruction {
    return new _SandBoxStoreWriteInstruction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreWriteInstruction {
    return new _SandBoxStoreWriteInstruction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreWriteInstruction {
    return new _SandBoxStoreWriteInstruction().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreWriteInstruction | PlainMessage<_SandBoxStoreWriteInstruction> | undefined | null, b2: _SandBoxStoreWriteInstruction | PlainMessage<_SandBoxStoreWriteInstruction> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreWriteInstruction as unknown as MessageType<_SandBoxStoreWriteInstruction>, a, b2);
  }
})();
export type SandBoxStoreWriteInstruction = InstanceType<typeof SandBoxStoreWriteInstruction$Runtime>;
var SandBoxStoreWriteInstruction: MessageType<SandBoxStoreWriteInstruction> = SandBoxStoreWriteInstruction$Runtime as unknown as MessageType<SandBoxStoreWriteInstruction>;
(SandBoxStoreWriteInstruction as MutableMessageType<SandBoxStoreWriteInstruction>).runtime = proto3;
(SandBoxStoreWriteInstruction as MutableMessageType<SandBoxStoreWriteInstruction>).typeName = "aiserver.v1.SandBoxStoreWriteInstruction";
(SandBoxStoreWriteInstruction as MutableMessageType<SandBoxStoreWriteInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
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
  { no: 3, name: "headers", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 4,
    name: "expires_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 5, name: "multipart", kind: "message", T: SandBoxStoreMultipartWriteInstruction, opt: true }
]);
var PresignSandBoxStoreWritesResponse$Runtime = (() => class _PresignSandBoxStoreWritesResponse extends Message<_PresignSandBoxStoreWritesResponse> {
  declare instructions: SandBoxStoreWriteInstruction[];
  constructor(data?: PartialMessage<_PresignSandBoxStoreWritesResponse>) {
    super();
    this.instructions = [];
    proto3.util.initPartial(data, this as _PresignSandBoxStoreWritesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PresignSandBoxStoreWritesResponse {
    return new _PresignSandBoxStoreWritesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreWritesResponse {
    return new _PresignSandBoxStoreWritesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreWritesResponse {
    return new _PresignSandBoxStoreWritesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PresignSandBoxStoreWritesResponse | PlainMessage<_PresignSandBoxStoreWritesResponse> | undefined | null, b2: _PresignSandBoxStoreWritesResponse | PlainMessage<_PresignSandBoxStoreWritesResponse> | undefined | null): boolean {
    return proto3.util.equals(_PresignSandBoxStoreWritesResponse as unknown as MessageType<_PresignSandBoxStoreWritesResponse>, a, b2);
  }
})();
export type PresignSandBoxStoreWritesResponse = InstanceType<typeof PresignSandBoxStoreWritesResponse$Runtime>;
var PresignSandBoxStoreWritesResponse: MessageType<PresignSandBoxStoreWritesResponse> = PresignSandBoxStoreWritesResponse$Runtime as unknown as MessageType<PresignSandBoxStoreWritesResponse>;
(PresignSandBoxStoreWritesResponse as MutableMessageType<PresignSandBoxStoreWritesResponse>).runtime = proto3;
(PresignSandBoxStoreWritesResponse as MutableMessageType<PresignSandBoxStoreWritesResponse>).typeName = "aiserver.v1.PresignSandBoxStoreWritesResponse";
(PresignSandBoxStoreWritesResponse as MutableMessageType<PresignSandBoxStoreWritesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "instructions", kind: "message", T: SandBoxStoreWriteInstruction, repeated: true }
]);
var SandBoxStoreMultipartUploadedPart$Runtime = (() => class _SandBoxStoreMultipartUploadedPart extends Message<_SandBoxStoreMultipartUploadedPart> {
  declare partNumber: number;
  declare etag: string;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartUploadedPart>) {
    super();
    this.partNumber = 0;
    this.etag = "";
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartUploadedPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartUploadedPart {
    return new _SandBoxStoreMultipartUploadedPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadedPart {
    return new _SandBoxStoreMultipartUploadedPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartUploadedPart {
    return new _SandBoxStoreMultipartUploadedPart().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartUploadedPart | PlainMessage<_SandBoxStoreMultipartUploadedPart> | undefined | null, b2: _SandBoxStoreMultipartUploadedPart | PlainMessage<_SandBoxStoreMultipartUploadedPart> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartUploadedPart as unknown as MessageType<_SandBoxStoreMultipartUploadedPart>, a, b2);
  }
})();
export type SandBoxStoreMultipartUploadedPart = InstanceType<typeof SandBoxStoreMultipartUploadedPart$Runtime>;
var SandBoxStoreMultipartUploadedPart: MessageType<SandBoxStoreMultipartUploadedPart> = SandBoxStoreMultipartUploadedPart$Runtime as unknown as MessageType<SandBoxStoreMultipartUploadedPart>;
(SandBoxStoreMultipartUploadedPart as MutableMessageType<SandBoxStoreMultipartUploadedPart>).runtime = proto3;
(SandBoxStoreMultipartUploadedPart as MutableMessageType<SandBoxStoreMultipartUploadedPart>).typeName = "aiserver.v1.SandBoxStoreMultipartUploadedPart";
(SandBoxStoreMultipartUploadedPart as MutableMessageType<SandBoxStoreMultipartUploadedPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "part_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SandBoxStoreMultipartWriteCompletion$Runtime = (() => class _SandBoxStoreMultipartWriteCompletion extends Message<_SandBoxStoreMultipartWriteCompletion> {
  declare context?: SandBoxStoreMultipartUploadContext;
  declare parts: SandBoxStoreMultipartUploadedPart[];
  constructor(data?: PartialMessage<_SandBoxStoreMultipartWriteCompletion>) {
    super();
    this.parts = [];
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartWriteCompletion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartWriteCompletion {
    return new _SandBoxStoreMultipartWriteCompletion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteCompletion {
    return new _SandBoxStoreMultipartWriteCompletion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteCompletion {
    return new _SandBoxStoreMultipartWriteCompletion().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartWriteCompletion | PlainMessage<_SandBoxStoreMultipartWriteCompletion> | undefined | null, b2: _SandBoxStoreMultipartWriteCompletion | PlainMessage<_SandBoxStoreMultipartWriteCompletion> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartWriteCompletion as unknown as MessageType<_SandBoxStoreMultipartWriteCompletion>, a, b2);
  }
})();
export type SandBoxStoreMultipartWriteCompletion = InstanceType<typeof SandBoxStoreMultipartWriteCompletion$Runtime>;
var SandBoxStoreMultipartWriteCompletion: MessageType<SandBoxStoreMultipartWriteCompletion> = SandBoxStoreMultipartWriteCompletion$Runtime as unknown as MessageType<SandBoxStoreMultipartWriteCompletion>;
(SandBoxStoreMultipartWriteCompletion as MutableMessageType<SandBoxStoreMultipartWriteCompletion>).runtime = proto3;
(SandBoxStoreMultipartWriteCompletion as MutableMessageType<SandBoxStoreMultipartWriteCompletion>).typeName = "aiserver.v1.SandBoxStoreMultipartWriteCompletion";
(SandBoxStoreMultipartWriteCompletion as MutableMessageType<SandBoxStoreMultipartWriteCompletion>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context", kind: "message", T: SandBoxStoreMultipartUploadContext },
  { no: 2, name: "parts", kind: "message", T: SandBoxStoreMultipartUploadedPart, repeated: true }
]);
var CompleteSandBoxStoreMultipartWritesRequest$Runtime = (() => class _CompleteSandBoxStoreMultipartWritesRequest extends Message<_CompleteSandBoxStoreMultipartWritesRequest> {
  declare completions: SandBoxStoreMultipartWriteCompletion[];
  constructor(data?: PartialMessage<_CompleteSandBoxStoreMultipartWritesRequest>) {
    super();
    this.completions = [];
    proto3.util.initPartial(data, this as _CompleteSandBoxStoreMultipartWritesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CompleteSandBoxStoreMultipartWritesRequest {
    return new _CompleteSandBoxStoreMultipartWritesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CompleteSandBoxStoreMultipartWritesRequest {
    return new _CompleteSandBoxStoreMultipartWritesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CompleteSandBoxStoreMultipartWritesRequest {
    return new _CompleteSandBoxStoreMultipartWritesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CompleteSandBoxStoreMultipartWritesRequest | PlainMessage<_CompleteSandBoxStoreMultipartWritesRequest> | undefined | null, b2: _CompleteSandBoxStoreMultipartWritesRequest | PlainMessage<_CompleteSandBoxStoreMultipartWritesRequest> | undefined | null): boolean {
    return proto3.util.equals(_CompleteSandBoxStoreMultipartWritesRequest as unknown as MessageType<_CompleteSandBoxStoreMultipartWritesRequest>, a, b2);
  }
})();
export type CompleteSandBoxStoreMultipartWritesRequest = InstanceType<typeof CompleteSandBoxStoreMultipartWritesRequest$Runtime>;
var CompleteSandBoxStoreMultipartWritesRequest: MessageType<CompleteSandBoxStoreMultipartWritesRequest> = CompleteSandBoxStoreMultipartWritesRequest$Runtime as unknown as MessageType<CompleteSandBoxStoreMultipartWritesRequest>;
(CompleteSandBoxStoreMultipartWritesRequest as MutableMessageType<CompleteSandBoxStoreMultipartWritesRequest>).runtime = proto3;
(CompleteSandBoxStoreMultipartWritesRequest as MutableMessageType<CompleteSandBoxStoreMultipartWritesRequest>).typeName = "aiserver.v1.CompleteSandBoxStoreMultipartWritesRequest";
(CompleteSandBoxStoreMultipartWritesRequest as MutableMessageType<CompleteSandBoxStoreMultipartWritesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "completions", kind: "message", T: SandBoxStoreMultipartWriteCompletion, repeated: true }
]);
var SandBoxStoreMultipartWriteSuccess$Runtime = (() => class _SandBoxStoreMultipartWriteSuccess extends Message<_SandBoxStoreMultipartWriteSuccess> {
  declare etag: string;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartWriteSuccess>) {
    super();
    this.etag = "";
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartWriteSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartWriteSuccess {
    return new _SandBoxStoreMultipartWriteSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteSuccess {
    return new _SandBoxStoreMultipartWriteSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteSuccess {
    return new _SandBoxStoreMultipartWriteSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartWriteSuccess | PlainMessage<_SandBoxStoreMultipartWriteSuccess> | undefined | null, b2: _SandBoxStoreMultipartWriteSuccess | PlainMessage<_SandBoxStoreMultipartWriteSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartWriteSuccess as unknown as MessageType<_SandBoxStoreMultipartWriteSuccess>, a, b2);
  }
})();
export type SandBoxStoreMultipartWriteSuccess = InstanceType<typeof SandBoxStoreMultipartWriteSuccess$Runtime>;
var SandBoxStoreMultipartWriteSuccess: MessageType<SandBoxStoreMultipartWriteSuccess> = SandBoxStoreMultipartWriteSuccess$Runtime as unknown as MessageType<SandBoxStoreMultipartWriteSuccess>;
(SandBoxStoreMultipartWriteSuccess as MutableMessageType<SandBoxStoreMultipartWriteSuccess>).runtime = proto3;
(SandBoxStoreMultipartWriteSuccess as MutableMessageType<SandBoxStoreMultipartWriteSuccess>).typeName = "aiserver.v1.SandBoxStoreMultipartWriteSuccess";
(SandBoxStoreMultipartWriteSuccess as MutableMessageType<SandBoxStoreMultipartWriteSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SandBoxStoreMultipartOperationFailure$Runtime = (() => class _SandBoxStoreMultipartOperationFailure extends Message<_SandBoxStoreMultipartOperationFailure> {
  declare code: SandBoxStoreMultipartOperationFailureCode;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartOperationFailure>) {
    super();
    this.code = SandBoxStoreMultipartOperationFailureCode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartOperationFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartOperationFailure {
    return new _SandBoxStoreMultipartOperationFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartOperationFailure {
    return new _SandBoxStoreMultipartOperationFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartOperationFailure {
    return new _SandBoxStoreMultipartOperationFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartOperationFailure | PlainMessage<_SandBoxStoreMultipartOperationFailure> | undefined | null, b2: _SandBoxStoreMultipartOperationFailure | PlainMessage<_SandBoxStoreMultipartOperationFailure> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartOperationFailure as unknown as MessageType<_SandBoxStoreMultipartOperationFailure>, a, b2);
  }
})();
export type SandBoxStoreMultipartOperationFailure = InstanceType<typeof SandBoxStoreMultipartOperationFailure$Runtime>;
var SandBoxStoreMultipartOperationFailure: MessageType<SandBoxStoreMultipartOperationFailure> = SandBoxStoreMultipartOperationFailure$Runtime as unknown as MessageType<SandBoxStoreMultipartOperationFailure>;
(SandBoxStoreMultipartOperationFailure as MutableMessageType<SandBoxStoreMultipartOperationFailure>).runtime = proto3;
(SandBoxStoreMultipartOperationFailure as MutableMessageType<SandBoxStoreMultipartOperationFailure>).typeName = "aiserver.v1.SandBoxStoreMultipartOperationFailure";
(SandBoxStoreMultipartOperationFailure as MutableMessageType<SandBoxStoreMultipartOperationFailure>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(SandBoxStoreMultipartOperationFailureCode) }
]);
var SandBoxStoreMultipartWriteResult$Runtime = (() => class _SandBoxStoreMultipartWriteResult extends Message<_SandBoxStoreMultipartWriteResult> {
  declare inputIndex: number;
  declare relPath: string;
  declare outcome: { case: "success"; value: SandBoxStoreMultipartWriteSuccess } | { case: "failure"; value: SandBoxStoreMultipartOperationFailure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SandBoxStoreMultipartWriteResult>) {
    super();
    this.inputIndex = 0;
    this.relPath = "";
    this.outcome = { case: void 0 };
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartWriteResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartWriteResult {
    return new _SandBoxStoreMultipartWriteResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteResult {
    return new _SandBoxStoreMultipartWriteResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteResult {
    return new _SandBoxStoreMultipartWriteResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartWriteResult | PlainMessage<_SandBoxStoreMultipartWriteResult> | undefined | null, b2: _SandBoxStoreMultipartWriteResult | PlainMessage<_SandBoxStoreMultipartWriteResult> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartWriteResult as unknown as MessageType<_SandBoxStoreMultipartWriteResult>, a, b2);
  }
})();
export type SandBoxStoreMultipartWriteResult = InstanceType<typeof SandBoxStoreMultipartWriteResult$Runtime>;
var SandBoxStoreMultipartWriteResult: MessageType<SandBoxStoreMultipartWriteResult> = SandBoxStoreMultipartWriteResult$Runtime as unknown as MessageType<SandBoxStoreMultipartWriteResult>;
(SandBoxStoreMultipartWriteResult as MutableMessageType<SandBoxStoreMultipartWriteResult>).runtime = proto3;
(SandBoxStoreMultipartWriteResult as MutableMessageType<SandBoxStoreMultipartWriteResult>).typeName = "aiserver.v1.SandBoxStoreMultipartWriteResult";
(SandBoxStoreMultipartWriteResult as MutableMessageType<SandBoxStoreMultipartWriteResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "input_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "success", kind: "message", T: SandBoxStoreMultipartWriteSuccess, oneof: "outcome" },
  { no: 4, name: "failure", kind: "message", T: SandBoxStoreMultipartOperationFailure, oneof: "outcome" }
]);
var CompleteSandBoxStoreMultipartWritesResponse$Runtime = (() => class _CompleteSandBoxStoreMultipartWritesResponse extends Message<_CompleteSandBoxStoreMultipartWritesResponse> {
  declare results: SandBoxStoreMultipartWriteResult[];
  constructor(data?: PartialMessage<_CompleteSandBoxStoreMultipartWritesResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _CompleteSandBoxStoreMultipartWritesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CompleteSandBoxStoreMultipartWritesResponse {
    return new _CompleteSandBoxStoreMultipartWritesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CompleteSandBoxStoreMultipartWritesResponse {
    return new _CompleteSandBoxStoreMultipartWritesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CompleteSandBoxStoreMultipartWritesResponse {
    return new _CompleteSandBoxStoreMultipartWritesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CompleteSandBoxStoreMultipartWritesResponse | PlainMessage<_CompleteSandBoxStoreMultipartWritesResponse> | undefined | null, b2: _CompleteSandBoxStoreMultipartWritesResponse | PlainMessage<_CompleteSandBoxStoreMultipartWritesResponse> | undefined | null): boolean {
    return proto3.util.equals(_CompleteSandBoxStoreMultipartWritesResponse as unknown as MessageType<_CompleteSandBoxStoreMultipartWritesResponse>, a, b2);
  }
})();
export type CompleteSandBoxStoreMultipartWritesResponse = InstanceType<typeof CompleteSandBoxStoreMultipartWritesResponse$Runtime>;
var CompleteSandBoxStoreMultipartWritesResponse: MessageType<CompleteSandBoxStoreMultipartWritesResponse> = CompleteSandBoxStoreMultipartWritesResponse$Runtime as unknown as MessageType<CompleteSandBoxStoreMultipartWritesResponse>;
(CompleteSandBoxStoreMultipartWritesResponse as MutableMessageType<CompleteSandBoxStoreMultipartWritesResponse>).runtime = proto3;
(CompleteSandBoxStoreMultipartWritesResponse as MutableMessageType<CompleteSandBoxStoreMultipartWritesResponse>).typeName = "aiserver.v1.CompleteSandBoxStoreMultipartWritesResponse";
(CompleteSandBoxStoreMultipartWritesResponse as MutableMessageType<CompleteSandBoxStoreMultipartWritesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: SandBoxStoreMultipartWriteResult, repeated: true }
]);
var SandBoxStoreMultipartWriteAbort$Runtime = (() => class _SandBoxStoreMultipartWriteAbort extends Message<_SandBoxStoreMultipartWriteAbort> {
  declare context?: SandBoxStoreMultipartUploadContext;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartWriteAbort>) {
    super();
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartWriteAbort);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartWriteAbort {
    return new _SandBoxStoreMultipartWriteAbort().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteAbort {
    return new _SandBoxStoreMultipartWriteAbort().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartWriteAbort {
    return new _SandBoxStoreMultipartWriteAbort().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartWriteAbort | PlainMessage<_SandBoxStoreMultipartWriteAbort> | undefined | null, b2: _SandBoxStoreMultipartWriteAbort | PlainMessage<_SandBoxStoreMultipartWriteAbort> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartWriteAbort as unknown as MessageType<_SandBoxStoreMultipartWriteAbort>, a, b2);
  }
})();
export type SandBoxStoreMultipartWriteAbort = InstanceType<typeof SandBoxStoreMultipartWriteAbort$Runtime>;
var SandBoxStoreMultipartWriteAbort: MessageType<SandBoxStoreMultipartWriteAbort> = SandBoxStoreMultipartWriteAbort$Runtime as unknown as MessageType<SandBoxStoreMultipartWriteAbort>;
(SandBoxStoreMultipartWriteAbort as MutableMessageType<SandBoxStoreMultipartWriteAbort>).runtime = proto3;
(SandBoxStoreMultipartWriteAbort as MutableMessageType<SandBoxStoreMultipartWriteAbort>).typeName = "aiserver.v1.SandBoxStoreMultipartWriteAbort";
(SandBoxStoreMultipartWriteAbort as MutableMessageType<SandBoxStoreMultipartWriteAbort>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context", kind: "message", T: SandBoxStoreMultipartUploadContext }
]);
var AbortSandBoxStoreMultipartWritesRequest$Runtime = (() => class _AbortSandBoxStoreMultipartWritesRequest extends Message<_AbortSandBoxStoreMultipartWritesRequest> {
  declare uploads: SandBoxStoreMultipartWriteAbort[];
  constructor(data?: PartialMessage<_AbortSandBoxStoreMultipartWritesRequest>) {
    super();
    this.uploads = [];
    proto3.util.initPartial(data, this as _AbortSandBoxStoreMultipartWritesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AbortSandBoxStoreMultipartWritesRequest {
    return new _AbortSandBoxStoreMultipartWritesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AbortSandBoxStoreMultipartWritesRequest {
    return new _AbortSandBoxStoreMultipartWritesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AbortSandBoxStoreMultipartWritesRequest {
    return new _AbortSandBoxStoreMultipartWritesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AbortSandBoxStoreMultipartWritesRequest | PlainMessage<_AbortSandBoxStoreMultipartWritesRequest> | undefined | null, b2: _AbortSandBoxStoreMultipartWritesRequest | PlainMessage<_AbortSandBoxStoreMultipartWritesRequest> | undefined | null): boolean {
    return proto3.util.equals(_AbortSandBoxStoreMultipartWritesRequest as unknown as MessageType<_AbortSandBoxStoreMultipartWritesRequest>, a, b2);
  }
})();
export type AbortSandBoxStoreMultipartWritesRequest = InstanceType<typeof AbortSandBoxStoreMultipartWritesRequest$Runtime>;
var AbortSandBoxStoreMultipartWritesRequest: MessageType<AbortSandBoxStoreMultipartWritesRequest> = AbortSandBoxStoreMultipartWritesRequest$Runtime as unknown as MessageType<AbortSandBoxStoreMultipartWritesRequest>;
(AbortSandBoxStoreMultipartWritesRequest as MutableMessageType<AbortSandBoxStoreMultipartWritesRequest>).runtime = proto3;
(AbortSandBoxStoreMultipartWritesRequest as MutableMessageType<AbortSandBoxStoreMultipartWritesRequest>).typeName = "aiserver.v1.AbortSandBoxStoreMultipartWritesRequest";
(AbortSandBoxStoreMultipartWritesRequest as MutableMessageType<AbortSandBoxStoreMultipartWritesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uploads", kind: "message", T: SandBoxStoreMultipartWriteAbort, repeated: true }
]);
var SandBoxStoreMultipartAbortSuccess$Runtime = (() => class _SandBoxStoreMultipartAbortSuccess extends Message<_SandBoxStoreMultipartAbortSuccess> {
  declare alreadyFinished: boolean;
  constructor(data?: PartialMessage<_SandBoxStoreMultipartAbortSuccess>) {
    super();
    this.alreadyFinished = false;
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartAbortSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartAbortSuccess {
    return new _SandBoxStoreMultipartAbortSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartAbortSuccess {
    return new _SandBoxStoreMultipartAbortSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartAbortSuccess {
    return new _SandBoxStoreMultipartAbortSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartAbortSuccess | PlainMessage<_SandBoxStoreMultipartAbortSuccess> | undefined | null, b2: _SandBoxStoreMultipartAbortSuccess | PlainMessage<_SandBoxStoreMultipartAbortSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartAbortSuccess as unknown as MessageType<_SandBoxStoreMultipartAbortSuccess>, a, b2);
  }
})();
export type SandBoxStoreMultipartAbortSuccess = InstanceType<typeof SandBoxStoreMultipartAbortSuccess$Runtime>;
var SandBoxStoreMultipartAbortSuccess: MessageType<SandBoxStoreMultipartAbortSuccess> = SandBoxStoreMultipartAbortSuccess$Runtime as unknown as MessageType<SandBoxStoreMultipartAbortSuccess>;
(SandBoxStoreMultipartAbortSuccess as MutableMessageType<SandBoxStoreMultipartAbortSuccess>).runtime = proto3;
(SandBoxStoreMultipartAbortSuccess as MutableMessageType<SandBoxStoreMultipartAbortSuccess>).typeName = "aiserver.v1.SandBoxStoreMultipartAbortSuccess";
(SandBoxStoreMultipartAbortSuccess as MutableMessageType<SandBoxStoreMultipartAbortSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "already_finished",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SandBoxStoreMultipartAbortResult$Runtime = (() => class _SandBoxStoreMultipartAbortResult extends Message<_SandBoxStoreMultipartAbortResult> {
  declare inputIndex: number;
  declare relPath: string;
  declare outcome: { case: "success"; value: SandBoxStoreMultipartAbortSuccess } | { case: "failure"; value: SandBoxStoreMultipartOperationFailure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SandBoxStoreMultipartAbortResult>) {
    super();
    this.inputIndex = 0;
    this.relPath = "";
    this.outcome = { case: void 0 };
    proto3.util.initPartial(data, this as _SandBoxStoreMultipartAbortResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreMultipartAbortResult {
    return new _SandBoxStoreMultipartAbortResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartAbortResult {
    return new _SandBoxStoreMultipartAbortResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreMultipartAbortResult {
    return new _SandBoxStoreMultipartAbortResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreMultipartAbortResult | PlainMessage<_SandBoxStoreMultipartAbortResult> | undefined | null, b2: _SandBoxStoreMultipartAbortResult | PlainMessage<_SandBoxStoreMultipartAbortResult> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreMultipartAbortResult as unknown as MessageType<_SandBoxStoreMultipartAbortResult>, a, b2);
  }
})();
export type SandBoxStoreMultipartAbortResult = InstanceType<typeof SandBoxStoreMultipartAbortResult$Runtime>;
var SandBoxStoreMultipartAbortResult: MessageType<SandBoxStoreMultipartAbortResult> = SandBoxStoreMultipartAbortResult$Runtime as unknown as MessageType<SandBoxStoreMultipartAbortResult>;
(SandBoxStoreMultipartAbortResult as MutableMessageType<SandBoxStoreMultipartAbortResult>).runtime = proto3;
(SandBoxStoreMultipartAbortResult as MutableMessageType<SandBoxStoreMultipartAbortResult>).typeName = "aiserver.v1.SandBoxStoreMultipartAbortResult";
(SandBoxStoreMultipartAbortResult as MutableMessageType<SandBoxStoreMultipartAbortResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "input_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "success", kind: "message", T: SandBoxStoreMultipartAbortSuccess, oneof: "outcome" },
  { no: 4, name: "failure", kind: "message", T: SandBoxStoreMultipartOperationFailure, oneof: "outcome" }
]);
var AbortSandBoxStoreMultipartWritesResponse$Runtime = (() => class _AbortSandBoxStoreMultipartWritesResponse extends Message<_AbortSandBoxStoreMultipartWritesResponse> {
  declare results: SandBoxStoreMultipartAbortResult[];
  constructor(data?: PartialMessage<_AbortSandBoxStoreMultipartWritesResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _AbortSandBoxStoreMultipartWritesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AbortSandBoxStoreMultipartWritesResponse {
    return new _AbortSandBoxStoreMultipartWritesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AbortSandBoxStoreMultipartWritesResponse {
    return new _AbortSandBoxStoreMultipartWritesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AbortSandBoxStoreMultipartWritesResponse {
    return new _AbortSandBoxStoreMultipartWritesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AbortSandBoxStoreMultipartWritesResponse | PlainMessage<_AbortSandBoxStoreMultipartWritesResponse> | undefined | null, b2: _AbortSandBoxStoreMultipartWritesResponse | PlainMessage<_AbortSandBoxStoreMultipartWritesResponse> | undefined | null): boolean {
    return proto3.util.equals(_AbortSandBoxStoreMultipartWritesResponse as unknown as MessageType<_AbortSandBoxStoreMultipartWritesResponse>, a, b2);
  }
})();
export type AbortSandBoxStoreMultipartWritesResponse = InstanceType<typeof AbortSandBoxStoreMultipartWritesResponse$Runtime>;
var AbortSandBoxStoreMultipartWritesResponse: MessageType<AbortSandBoxStoreMultipartWritesResponse> = AbortSandBoxStoreMultipartWritesResponse$Runtime as unknown as MessageType<AbortSandBoxStoreMultipartWritesResponse>;
(AbortSandBoxStoreMultipartWritesResponse as MutableMessageType<AbortSandBoxStoreMultipartWritesResponse>).runtime = proto3;
(AbortSandBoxStoreMultipartWritesResponse as MutableMessageType<AbortSandBoxStoreMultipartWritesResponse>).typeName = "aiserver.v1.AbortSandBoxStoreMultipartWritesResponse";
(AbortSandBoxStoreMultipartWritesResponse as MutableMessageType<AbortSandBoxStoreMultipartWritesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: SandBoxStoreMultipartAbortResult, repeated: true }
]);
var PresignSandBoxStoreReadsRequest$Runtime = (() => class _PresignSandBoxStoreReadsRequest extends Message<_PresignSandBoxStoreReadsRequest> {
  declare relPaths: string[];
  constructor(data?: PartialMessage<_PresignSandBoxStoreReadsRequest>) {
    super();
    this.relPaths = [];
    proto3.util.initPartial(data, this as _PresignSandBoxStoreReadsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PresignSandBoxStoreReadsRequest {
    return new _PresignSandBoxStoreReadsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreReadsRequest {
    return new _PresignSandBoxStoreReadsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreReadsRequest {
    return new _PresignSandBoxStoreReadsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _PresignSandBoxStoreReadsRequest | PlainMessage<_PresignSandBoxStoreReadsRequest> | undefined | null, b2: _PresignSandBoxStoreReadsRequest | PlainMessage<_PresignSandBoxStoreReadsRequest> | undefined | null): boolean {
    return proto3.util.equals(_PresignSandBoxStoreReadsRequest as unknown as MessageType<_PresignSandBoxStoreReadsRequest>, a, b2);
  }
})();
export type PresignSandBoxStoreReadsRequest = InstanceType<typeof PresignSandBoxStoreReadsRequest$Runtime>;
var PresignSandBoxStoreReadsRequest: MessageType<PresignSandBoxStoreReadsRequest> = PresignSandBoxStoreReadsRequest$Runtime as unknown as MessageType<PresignSandBoxStoreReadsRequest>;
(PresignSandBoxStoreReadsRequest as MutableMessageType<PresignSandBoxStoreReadsRequest>).runtime = proto3;
(PresignSandBoxStoreReadsRequest as MutableMessageType<PresignSandBoxStoreReadsRequest>).typeName = "aiserver.v1.PresignSandBoxStoreReadsRequest";
(PresignSandBoxStoreReadsRequest as MutableMessageType<PresignSandBoxStoreReadsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rel_paths", kind: "scalar", T: 9, repeated: true }
]);
var SandBoxStoreReadInstruction$Runtime = (() => class _SandBoxStoreReadInstruction extends Message<_SandBoxStoreReadInstruction> {
  declare relPath: string;
  declare url: string;
  declare expiresAtMs: bigint;
  constructor(data?: PartialMessage<_SandBoxStoreReadInstruction>) {
    super();
    this.relPath = "";
    this.url = "";
    this.expiresAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _SandBoxStoreReadInstruction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreReadInstruction {
    return new _SandBoxStoreReadInstruction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreReadInstruction {
    return new _SandBoxStoreReadInstruction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreReadInstruction {
    return new _SandBoxStoreReadInstruction().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreReadInstruction | PlainMessage<_SandBoxStoreReadInstruction> | undefined | null, b2: _SandBoxStoreReadInstruction | PlainMessage<_SandBoxStoreReadInstruction> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreReadInstruction as unknown as MessageType<_SandBoxStoreReadInstruction>, a, b2);
  }
})();
export type SandBoxStoreReadInstruction = InstanceType<typeof SandBoxStoreReadInstruction$Runtime>;
var SandBoxStoreReadInstruction: MessageType<SandBoxStoreReadInstruction> = SandBoxStoreReadInstruction$Runtime as unknown as MessageType<SandBoxStoreReadInstruction>;
(SandBoxStoreReadInstruction as MutableMessageType<SandBoxStoreReadInstruction>).runtime = proto3;
(SandBoxStoreReadInstruction as MutableMessageType<SandBoxStoreReadInstruction>).typeName = "aiserver.v1.SandBoxStoreReadInstruction";
(SandBoxStoreReadInstruction as MutableMessageType<SandBoxStoreReadInstruction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
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
    name: "expires_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var PresignSandBoxStoreReadsResponse$Runtime = (() => class _PresignSandBoxStoreReadsResponse extends Message<_PresignSandBoxStoreReadsResponse> {
  declare instructions: SandBoxStoreReadInstruction[];
  constructor(data?: PartialMessage<_PresignSandBoxStoreReadsResponse>) {
    super();
    this.instructions = [];
    proto3.util.initPartial(data, this as _PresignSandBoxStoreReadsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PresignSandBoxStoreReadsResponse {
    return new _PresignSandBoxStoreReadsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreReadsResponse {
    return new _PresignSandBoxStoreReadsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PresignSandBoxStoreReadsResponse {
    return new _PresignSandBoxStoreReadsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PresignSandBoxStoreReadsResponse | PlainMessage<_PresignSandBoxStoreReadsResponse> | undefined | null, b2: _PresignSandBoxStoreReadsResponse | PlainMessage<_PresignSandBoxStoreReadsResponse> | undefined | null): boolean {
    return proto3.util.equals(_PresignSandBoxStoreReadsResponse as unknown as MessageType<_PresignSandBoxStoreReadsResponse>, a, b2);
  }
})();
export type PresignSandBoxStoreReadsResponse = InstanceType<typeof PresignSandBoxStoreReadsResponse$Runtime>;
var PresignSandBoxStoreReadsResponse: MessageType<PresignSandBoxStoreReadsResponse> = PresignSandBoxStoreReadsResponse$Runtime as unknown as MessageType<PresignSandBoxStoreReadsResponse>;
(PresignSandBoxStoreReadsResponse as MutableMessageType<PresignSandBoxStoreReadsResponse>).runtime = proto3;
(PresignSandBoxStoreReadsResponse as MutableMessageType<PresignSandBoxStoreReadsResponse>).typeName = "aiserver.v1.PresignSandBoxStoreReadsResponse";
(PresignSandBoxStoreReadsResponse as MutableMessageType<PresignSandBoxStoreReadsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "instructions", kind: "message", T: SandBoxStoreReadInstruction, repeated: true }
]);
var StatSandBoxStoreObjectRequest$Runtime = (() => class _StatSandBoxStoreObjectRequest extends Message<_StatSandBoxStoreObjectRequest> {
  declare relPath: string;
  constructor(data?: PartialMessage<_StatSandBoxStoreObjectRequest>) {
    super();
    this.relPath = "";
    proto3.util.initPartial(data, this as _StatSandBoxStoreObjectRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StatSandBoxStoreObjectRequest {
    return new _StatSandBoxStoreObjectRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StatSandBoxStoreObjectRequest {
    return new _StatSandBoxStoreObjectRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StatSandBoxStoreObjectRequest {
    return new _StatSandBoxStoreObjectRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StatSandBoxStoreObjectRequest | PlainMessage<_StatSandBoxStoreObjectRequest> | undefined | null, b2: _StatSandBoxStoreObjectRequest | PlainMessage<_StatSandBoxStoreObjectRequest> | undefined | null): boolean {
    return proto3.util.equals(_StatSandBoxStoreObjectRequest as unknown as MessageType<_StatSandBoxStoreObjectRequest>, a, b2);
  }
})();
export type StatSandBoxStoreObjectRequest = InstanceType<typeof StatSandBoxStoreObjectRequest$Runtime>;
var StatSandBoxStoreObjectRequest: MessageType<StatSandBoxStoreObjectRequest> = StatSandBoxStoreObjectRequest$Runtime as unknown as MessageType<StatSandBoxStoreObjectRequest>;
(StatSandBoxStoreObjectRequest as MutableMessageType<StatSandBoxStoreObjectRequest>).runtime = proto3;
(StatSandBoxStoreObjectRequest as MutableMessageType<StatSandBoxStoreObjectRequest>).typeName = "aiserver.v1.StatSandBoxStoreObjectRequest";
(StatSandBoxStoreObjectRequest as MutableMessageType<StatSandBoxStoreObjectRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StatSandBoxStoreObjectResponse$Runtime = (() => class _StatSandBoxStoreObjectResponse extends Message<_StatSandBoxStoreObjectResponse> {
  declare exists: boolean;
  declare etag: string;
  declare sizeBytes: bigint;
  declare lastModifiedMs: bigint;
  constructor(data?: PartialMessage<_StatSandBoxStoreObjectResponse>) {
    super();
    this.exists = false;
    this.etag = "";
    this.sizeBytes = protoInt64.zero;
    this.lastModifiedMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _StatSandBoxStoreObjectResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StatSandBoxStoreObjectResponse {
    return new _StatSandBoxStoreObjectResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StatSandBoxStoreObjectResponse {
    return new _StatSandBoxStoreObjectResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StatSandBoxStoreObjectResponse {
    return new _StatSandBoxStoreObjectResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StatSandBoxStoreObjectResponse | PlainMessage<_StatSandBoxStoreObjectResponse> | undefined | null, b2: _StatSandBoxStoreObjectResponse | PlainMessage<_StatSandBoxStoreObjectResponse> | undefined | null): boolean {
    return proto3.util.equals(_StatSandBoxStoreObjectResponse as unknown as MessageType<_StatSandBoxStoreObjectResponse>, a, b2);
  }
})();
export type StatSandBoxStoreObjectResponse = InstanceType<typeof StatSandBoxStoreObjectResponse$Runtime>;
var StatSandBoxStoreObjectResponse: MessageType<StatSandBoxStoreObjectResponse> = StatSandBoxStoreObjectResponse$Runtime as unknown as MessageType<StatSandBoxStoreObjectResponse>;
(StatSandBoxStoreObjectResponse as MutableMessageType<StatSandBoxStoreObjectResponse>).runtime = proto3;
(StatSandBoxStoreObjectResponse as MutableMessageType<StatSandBoxStoreObjectResponse>).typeName = "aiserver.v1.StatSandBoxStoreObjectResponse";
(StatSandBoxStoreObjectResponse as MutableMessageType<StatSandBoxStoreObjectResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exists",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "last_modified_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var ListSandBoxStoreObjectsRequest$Runtime = (() => class _ListSandBoxStoreObjectsRequest extends Message<_ListSandBoxStoreObjectsRequest> {
  declare prefix: string;
  declare cursor: string;
  declare maxEntries: number;
  constructor(data?: PartialMessage<_ListSandBoxStoreObjectsRequest>) {
    super();
    this.prefix = "";
    this.cursor = "";
    this.maxEntries = 0;
    proto3.util.initPartial(data, this as _ListSandBoxStoreObjectsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandBoxStoreObjectsRequest {
    return new _ListSandBoxStoreObjectsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandBoxStoreObjectsRequest {
    return new _ListSandBoxStoreObjectsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandBoxStoreObjectsRequest {
    return new _ListSandBoxStoreObjectsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandBoxStoreObjectsRequest | PlainMessage<_ListSandBoxStoreObjectsRequest> | undefined | null, b2: _ListSandBoxStoreObjectsRequest | PlainMessage<_ListSandBoxStoreObjectsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListSandBoxStoreObjectsRequest as unknown as MessageType<_ListSandBoxStoreObjectsRequest>, a, b2);
  }
})();
export type ListSandBoxStoreObjectsRequest = InstanceType<typeof ListSandBoxStoreObjectsRequest$Runtime>;
var ListSandBoxStoreObjectsRequest: MessageType<ListSandBoxStoreObjectsRequest> = ListSandBoxStoreObjectsRequest$Runtime as unknown as MessageType<ListSandBoxStoreObjectsRequest>;
(ListSandBoxStoreObjectsRequest as MutableMessageType<ListSandBoxStoreObjectsRequest>).runtime = proto3;
(ListSandBoxStoreObjectsRequest as MutableMessageType<ListSandBoxStoreObjectsRequest>).typeName = "aiserver.v1.ListSandBoxStoreObjectsRequest";
(ListSandBoxStoreObjectsRequest as MutableMessageType<ListSandBoxStoreObjectsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prefix",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "cursor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "max_entries",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SandBoxStoreObjectEntry$Runtime = (() => class _SandBoxStoreObjectEntry extends Message<_SandBoxStoreObjectEntry> {
  declare relPath: string;
  declare etag: string;
  declare sizeBytes: bigint;
  declare lastModifiedMs: bigint;
  constructor(data?: PartialMessage<_SandBoxStoreObjectEntry>) {
    super();
    this.relPath = "";
    this.etag = "";
    this.sizeBytes = protoInt64.zero;
    this.lastModifiedMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _SandBoxStoreObjectEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandBoxStoreObjectEntry {
    return new _SandBoxStoreObjectEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandBoxStoreObjectEntry {
    return new _SandBoxStoreObjectEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandBoxStoreObjectEntry {
    return new _SandBoxStoreObjectEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _SandBoxStoreObjectEntry | PlainMessage<_SandBoxStoreObjectEntry> | undefined | null, b2: _SandBoxStoreObjectEntry | PlainMessage<_SandBoxStoreObjectEntry> | undefined | null): boolean {
    return proto3.util.equals(_SandBoxStoreObjectEntry as unknown as MessageType<_SandBoxStoreObjectEntry>, a, b2);
  }
})();
export type SandBoxStoreObjectEntry = InstanceType<typeof SandBoxStoreObjectEntry$Runtime>;
var SandBoxStoreObjectEntry: MessageType<SandBoxStoreObjectEntry> = SandBoxStoreObjectEntry$Runtime as unknown as MessageType<SandBoxStoreObjectEntry>;
(SandBoxStoreObjectEntry as MutableMessageType<SandBoxStoreObjectEntry>).runtime = proto3;
(SandBoxStoreObjectEntry as MutableMessageType<SandBoxStoreObjectEntry>).typeName = "aiserver.v1.SandBoxStoreObjectEntry";
(SandBoxStoreObjectEntry as MutableMessageType<SandBoxStoreObjectEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "etag",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "last_modified_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var ListSandBoxStoreObjectsResponse$Runtime = (() => class _ListSandBoxStoreObjectsResponse extends Message<_ListSandBoxStoreObjectsResponse> {
  declare entries: SandBoxStoreObjectEntry[];
  declare nextCursor: string;
  declare truncated: boolean;
  constructor(data?: PartialMessage<_ListSandBoxStoreObjectsResponse>) {
    super();
    this.entries = [];
    this.nextCursor = "";
    this.truncated = false;
    proto3.util.initPartial(data, this as _ListSandBoxStoreObjectsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListSandBoxStoreObjectsResponse {
    return new _ListSandBoxStoreObjectsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListSandBoxStoreObjectsResponse {
    return new _ListSandBoxStoreObjectsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListSandBoxStoreObjectsResponse {
    return new _ListSandBoxStoreObjectsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListSandBoxStoreObjectsResponse | PlainMessage<_ListSandBoxStoreObjectsResponse> | undefined | null, b2: _ListSandBoxStoreObjectsResponse | PlainMessage<_ListSandBoxStoreObjectsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListSandBoxStoreObjectsResponse as unknown as MessageType<_ListSandBoxStoreObjectsResponse>, a, b2);
  }
})();
export type ListSandBoxStoreObjectsResponse = InstanceType<typeof ListSandBoxStoreObjectsResponse$Runtime>;
var ListSandBoxStoreObjectsResponse: MessageType<ListSandBoxStoreObjectsResponse> = ListSandBoxStoreObjectsResponse$Runtime as unknown as MessageType<ListSandBoxStoreObjectsResponse>;
(ListSandBoxStoreObjectsResponse as MutableMessageType<ListSandBoxStoreObjectsResponse>).runtime = proto3;
(ListSandBoxStoreObjectsResponse as MutableMessageType<ListSandBoxStoreObjectsResponse>).typeName = "aiserver.v1.ListSandBoxStoreObjectsResponse";
(ListSandBoxStoreObjectsResponse as MutableMessageType<ListSandBoxStoreObjectsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "entries", kind: "message", T: SandBoxStoreObjectEntry, repeated: true },
  {
    no: 2,
    name: "next_cursor",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { SandSetupManifestScopeKind, SandBoxMigrationPhase, SandBoxRunState, SandBoxStoreMultipartOperationFailureCode, NotifySandAgentTurnFinishedRequest, NotifySandAgentTurnFinishedResponse, ListSandSetupManifestsRequest, SandSetupManifestEntry, SandAssignedSetupManifest, ListSandSetupManifestsResponse, SandTeamSetupManifest, ListTeamSandSetupManifestsRequest, ListTeamSandSetupManifestsResponse, SaveTeamSandSetupManifestRequest, SaveTeamSandSetupManifestResponse, DeleteTeamSandSetupManifestRequest, DeleteTeamSandSetupManifestResponse, ListTeamMemberSandBoxesRequest, TeamMemberSandBoxPod, ListTeamMemberSandBoxesResponse, KillTeamMemberSandBoxRequest, KillTeamMemberSandBoxResponse, EnsureSandBoxRequest, EnsureSandBoxWindowRequest, EnsureSandBoxResponse, RecreateSandBoxRequest, ForceRecreateSandBoxRequest, RecreateSandBoxResponse, AdminRecreateSandBoxRequest, AdminForceRecreateSandBoxRequest, AdminSandBoxStoreStatusRequest, AdminSandBoxStoreStatusResponse, AdminUpdateSandBoxHostRequest, AdminUpdateSandBoxHostResponse, AdminSandBoxHostStatusRequest, AdminSandBoxHostStatusResponse, AdminSnapshotSandBoxStoreRequest, AdminSnapshotSandBoxStoreResponse, AdminHibernateSandBoxRequest, AdminHibernateSandBoxResponse, AdminListSandAgentsRequest, AdminListSandAgentsResponse, AdminGetSandAgentTranscriptPageRequest, AdminGetSandAgentTranscriptPageResponse, WatchSandBoxMigrationRequest, AdminWatchSandBoxMigrationRequest, SandBoxMigrationEvent, GetSandBoxRunStateRequest, GetSandBoxRunStateResponse, SandBoxDescriptor, ListSandBoxesRequest, ListSandBoxesResponse, SandBoxStoreMultipartPart, SandBoxStoreWriteFile, PresignSandBoxStoreWritesRequest, SandBoxStoreMultipartUploadPartInstruction, SandBoxStoreMultipartUploadContext, SandBoxStoreMultipartWriteInstruction, SandBoxStoreWriteInstruction, PresignSandBoxStoreWritesResponse, SandBoxStoreMultipartUploadedPart, SandBoxStoreMultipartWriteCompletion, CompleteSandBoxStoreMultipartWritesRequest, SandBoxStoreMultipartWriteSuccess, SandBoxStoreMultipartOperationFailure, SandBoxStoreMultipartWriteResult, CompleteSandBoxStoreMultipartWritesResponse, SandBoxStoreMultipartWriteAbort, AbortSandBoxStoreMultipartWritesRequest, SandBoxStoreMultipartAbortSuccess, SandBoxStoreMultipartAbortResult, AbortSandBoxStoreMultipartWritesResponse, PresignSandBoxStoreReadsRequest, SandBoxStoreReadInstruction, PresignSandBoxStoreReadsResponse, StatSandBoxStoreObjectRequest, StatSandBoxStoreObjectResponse, ListSandBoxStoreObjectsRequest, SandBoxStoreObjectEntry, ListSandBoxStoreObjectsResponse };
