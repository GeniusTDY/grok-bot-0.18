/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:415043-415511
 * Region SHA-256: 71ceb34806a7f890bac1f1454c8355fd50d828a585e798a69fe8451ea842d32c
 * BackgroundComposer closure exports: 9 messages + 3 enums = 12
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PersistedDevContainerConfig, IsoDevContainerMetadata } from "./persisted_dev_container_pb.js";
import { BlobStorageFormat, ImageMetadata, ResourceRequests, ResourceLimits, SnapshotUsageStats, V4RootArchiveOptions } from "./common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type SnapshotState = 0 | 1 | 2 | 3 | 4;
var SnapshotState: {
  "UNSPECIFIED": 0;
  "CREATING": 1;
  "READY": 2;
  "FAILED": 3;
  "FINALIZING": 4;
  0: "UNSPECIFIED";
  1: "CREATING";
  2: "READY";
  3: "FAILED";
  4: "FINALIZING";
};
export type SnapshotCategory = 0 | 1;
var SnapshotCategory: {
  "EXPLICIT_FORMAT": 0;
  "FULL_VM": 1;
  0: "EXPLICIT_FORMAT";
  1: "FULL_VM";
};
export type SnapshotMemoryHashAlgorithm = 0 | 1 | 2;
var SnapshotMemoryHashAlgorithm: {
  "UNSPECIFIED": 0;
  "SHA256": 1;
  "BLAKE3": 2;
  0: "UNSPECIFIED";
  1: "SHA256";
  2: "BLAKE3";
};
(function(SnapshotState2) {
  SnapshotState2[SnapshotState2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SnapshotState2[SnapshotState2["CREATING"] = 1] = "CREATING";
  SnapshotState2[SnapshotState2["READY"] = 2] = "READY";
  SnapshotState2[SnapshotState2["FAILED"] = 3] = "FAILED";
  SnapshotState2[SnapshotState2["FINALIZING"] = 4] = "FINALIZING";
})(SnapshotState! || (SnapshotState = {} as typeof SnapshotState));
proto3.util.setEnumType(SnapshotState, "anyrun.v1.SnapshotState", [
  { no: 0, name: "SNAPSHOT_STATE_UNSPECIFIED" },
  { no: 1, name: "SNAPSHOT_STATE_CREATING" },
  { no: 2, name: "SNAPSHOT_STATE_READY" },
  { no: 3, name: "SNAPSHOT_STATE_FAILED" },
  { no: 4, name: "SNAPSHOT_STATE_FINALIZING" }
]);
(function(SnapshotCategory2) {
  SnapshotCategory2[SnapshotCategory2["EXPLICIT_FORMAT"] = 0] = "EXPLICIT_FORMAT";
  SnapshotCategory2[SnapshotCategory2["FULL_VM"] = 1] = "FULL_VM";
})(SnapshotCategory! || (SnapshotCategory = {} as typeof SnapshotCategory));
proto3.util.setEnumType(SnapshotCategory, "anyrun.v1.SnapshotCategory", [
  { no: 0, name: "SNAPSHOT_CATEGORY_EXPLICIT_FORMAT" },
  { no: 1, name: "SNAPSHOT_CATEGORY_FULL_VM" }
]);
(function(SnapshotMemoryHashAlgorithm2) {
  SnapshotMemoryHashAlgorithm2[SnapshotMemoryHashAlgorithm2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SnapshotMemoryHashAlgorithm2[SnapshotMemoryHashAlgorithm2["SHA256"] = 1] = "SHA256";
  SnapshotMemoryHashAlgorithm2[SnapshotMemoryHashAlgorithm2["BLAKE3"] = 2] = "BLAKE3";
})(SnapshotMemoryHashAlgorithm! || (SnapshotMemoryHashAlgorithm = {} as typeof SnapshotMemoryHashAlgorithm));
proto3.util.setEnumType(SnapshotMemoryHashAlgorithm, "anyrun.v1.SnapshotMemoryHashAlgorithm", [
  { no: 0, name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_UNSPECIFIED" },
  { no: 1, name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_SHA256" },
  { no: 2, name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_BLAKE3" }
]);
var Snapshot$Runtime = (() => class _Snapshot extends Message<_Snapshot> {
  declare snapshotId: string;
  declare resourceVersion: number;
  declare name: string;
  declare labels: { [key: string]: string };
  declare creationTimestamp: bigint;
  declare deletionTimestamp?: bigint;
  declare deletionDurationMs?: bigint;
  declare archiveTimestamp?: bigint;
  declare archiveDurationMs?: bigint;
  declare tenantId: string;
  declare podId: string;
  declare podConfig?: PersistedDevContainerConfig;
  declare state: SnapshotState;
  declare imageMetadata?: ImageMetadata;
  declare blobStorageFormat: BlobStorageFormat;
  declare nodeMachineType?: string;
  declare resourceRequests?: ResourceRequests;
  declare resourceLimits?: ResourceLimits;
  declare cpuBaselineId?: string;
  declare usageStats?: SnapshotUsageStats;
  declare objectSizeBytes?: bigint;
  declare v4RootArchiveOptions?: V4RootArchiveOptions;
  declare failureReason?: string;
  constructor(data?: PartialMessage<_Snapshot>) {
    super();
    this.snapshotId = "";
    this.resourceVersion = 0;
    this.name = "";
    this.labels = {};
    this.creationTimestamp = protoInt64.zero;
    this.tenantId = "";
    this.podId = "";
    this.state = SnapshotState.UNSPECIFIED;
    this.blobStorageFormat = BlobStorageFormat.LEGACY_UNSPECIFIED;
    proto3.util.initPartial(data, this as _Snapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Snapshot {
    return new _Snapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Snapshot {
    return new _Snapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Snapshot {
    return new _Snapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _Snapshot | PlainMessage<_Snapshot> | undefined | null, b2: _Snapshot | PlainMessage<_Snapshot> | undefined | null): boolean {
    return proto3.util.equals(_Snapshot as unknown as MessageType<_Snapshot>, a, b2);
  }
})();
export type Snapshot = InstanceType<typeof Snapshot$Runtime>;
var Snapshot: MessageType<Snapshot> = Snapshot$Runtime as unknown as MessageType<Snapshot>;
(Snapshot as MutableMessageType<Snapshot>).runtime = proto3;
(Snapshot as MutableMessageType<Snapshot>).typeName = "anyrun.v1.Snapshot";
(Snapshot as MutableMessageType<Snapshot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "snapshot_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "resource_version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 5,
    name: "creation_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 6, name: "deletion_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 12, name: "deletion_duration_ms", kind: "scalar", T: 4, opt: true },
  { no: 14, name: "archive_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 15, name: "archive_duration_ms", kind: "scalar", T: 4, opt: true },
  {
    no: 7,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 13, name: "pod_config", kind: "message", T: PersistedDevContainerConfig, opt: true },
  { no: 9, name: "state", kind: "enum", T: proto3.getEnumType(SnapshotState) },
  { no: 10, name: "image_metadata", kind: "message", T: ImageMetadata },
  { no: 11, name: "blob_storage_format", kind: "enum", T: proto3.getEnumType(BlobStorageFormat) },
  { no: 16, name: "node_machine_type", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "resource_requests", kind: "message", T: ResourceRequests, opt: true },
  { no: 18, name: "resource_limits", kind: "message", T: ResourceLimits, opt: true },
  { no: 19, name: "cpu_baseline_id", kind: "scalar", T: 9, opt: true },
  { no: 20, name: "usage_stats", kind: "message", T: SnapshotUsageStats, opt: true },
  { no: 21, name: "object_size_bytes", kind: "scalar", T: 4, opt: true },
  { no: 22, name: "v4_root_archive_options", kind: "message", T: V4RootArchiveOptions, opt: true },
  { no: 23, name: "failure_reason", kind: "scalar", T: 9, opt: true }
]);
var SnapshotCollection$Runtime = (() => class _SnapshotCollection extends Message<_SnapshotCollection> {
  declare items: Snapshot[];
  declare nextCursor?: string;
  constructor(data?: PartialMessage<_SnapshotCollection>) {
    super();
    this.items = [];
    proto3.util.initPartial(data, this as _SnapshotCollection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotCollection {
    return new _SnapshotCollection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotCollection {
    return new _SnapshotCollection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotCollection {
    return new _SnapshotCollection().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotCollection | PlainMessage<_SnapshotCollection> | undefined | null, b2: _SnapshotCollection | PlainMessage<_SnapshotCollection> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotCollection as unknown as MessageType<_SnapshotCollection>, a, b2);
  }
})();
export type SnapshotCollection = InstanceType<typeof SnapshotCollection$Runtime>;
var SnapshotCollection: MessageType<SnapshotCollection> = SnapshotCollection$Runtime as unknown as MessageType<SnapshotCollection>;
(SnapshotCollection as MutableMessageType<SnapshotCollection>).runtime = proto3;
(SnapshotCollection as MutableMessageType<SnapshotCollection>).typeName = "anyrun.v1.SnapshotCollection";
(SnapshotCollection as MutableMessageType<SnapshotCollection>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "items", kind: "message", T: Snapshot, repeated: true },
  { no: 2, name: "next_cursor", kind: "scalar", T: 9, opt: true }
]);
var SnapshotFileChunk$Runtime = (() => class _SnapshotFileChunk extends Message<_SnapshotFileChunk> {
  declare blobBegin: bigint;
  declare blobEnd: bigint;
  declare fileBegin: bigint;
  declare fileEnd: bigint;
  declare hash: string;
  constructor(data?: PartialMessage<_SnapshotFileChunk>) {
    super();
    this.blobBegin = protoInt64.zero;
    this.blobEnd = protoInt64.zero;
    this.fileBegin = protoInt64.zero;
    this.fileEnd = protoInt64.zero;
    this.hash = "";
    proto3.util.initPartial(data, this as _SnapshotFileChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotFileChunk {
    return new _SnapshotFileChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotFileChunk {
    return new _SnapshotFileChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotFileChunk {
    return new _SnapshotFileChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotFileChunk | PlainMessage<_SnapshotFileChunk> | undefined | null, b2: _SnapshotFileChunk | PlainMessage<_SnapshotFileChunk> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotFileChunk as unknown as MessageType<_SnapshotFileChunk>, a, b2);
  }
})();
export type SnapshotFileChunk = InstanceType<typeof SnapshotFileChunk$Runtime>;
var SnapshotFileChunk: MessageType<SnapshotFileChunk> = SnapshotFileChunk$Runtime as unknown as MessageType<SnapshotFileChunk>;
(SnapshotFileChunk as MutableMessageType<SnapshotFileChunk>).runtime = proto3;
(SnapshotFileChunk as MutableMessageType<SnapshotFileChunk>).typeName = "anyrun.v1.SnapshotFileChunk";
(SnapshotFileChunk as MutableMessageType<SnapshotFileChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_begin",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "blob_end",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "file_begin",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 4,
    name: "file_end",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SnapshotExtraDriveFile$Runtime = (() => class _SnapshotExtraDriveFile extends Message<_SnapshotExtraDriveFile> {
  declare driveId: string;
  declare fileChunks: SnapshotFileChunk[];
  declare fileSize: bigint;
  constructor(data?: PartialMessage<_SnapshotExtraDriveFile>) {
    super();
    this.driveId = "";
    this.fileChunks = [];
    this.fileSize = protoInt64.zero;
    proto3.util.initPartial(data, this as _SnapshotExtraDriveFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotExtraDriveFile {
    return new _SnapshotExtraDriveFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotExtraDriveFile {
    return new _SnapshotExtraDriveFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotExtraDriveFile {
    return new _SnapshotExtraDriveFile().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotExtraDriveFile | PlainMessage<_SnapshotExtraDriveFile> | undefined | null, b2: _SnapshotExtraDriveFile | PlainMessage<_SnapshotExtraDriveFile> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotExtraDriveFile as unknown as MessageType<_SnapshotExtraDriveFile>, a, b2);
  }
})();
export type SnapshotExtraDriveFile = InstanceType<typeof SnapshotExtraDriveFile$Runtime>;
var SnapshotExtraDriveFile: MessageType<SnapshotExtraDriveFile> = SnapshotExtraDriveFile$Runtime as unknown as MessageType<SnapshotExtraDriveFile>;
(SnapshotExtraDriveFile as MutableMessageType<SnapshotExtraDriveFile>).runtime = proto3;
(SnapshotExtraDriveFile as MutableMessageType<SnapshotExtraDriveFile>).typeName = "anyrun.v1.SnapshotExtraDriveFile";
(SnapshotExtraDriveFile as MutableMessageType<SnapshotExtraDriveFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "drive_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file_chunks", kind: "message", T: SnapshotFileChunk, repeated: true },
  {
    no: 3,
    name: "file_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var SnapshotVmSnapshotV1Metadata$Runtime = (() => class _SnapshotVmSnapshotV1Metadata extends Message<_SnapshotVmSnapshotV1Metadata> {
  declare rootfsFileChunks: SnapshotFileChunk[];
  declare rootfsFileSize: bigint;
  declare memoryFileChunk?: SnapshotFileChunk;
  declare stateFileChunk?: SnapshotFileChunk;
  declare kernelFileChunk?: SnapshotFileChunk;
  declare devContainerMetadata?: IsoDevContainerMetadata;
  declare extraDriveFiles: SnapshotExtraDriveFile[];
  constructor(data?: PartialMessage<_SnapshotVmSnapshotV1Metadata>) {
    super();
    this.rootfsFileChunks = [];
    this.rootfsFileSize = protoInt64.zero;
    this.extraDriveFiles = [];
    proto3.util.initPartial(data, this as _SnapshotVmSnapshotV1Metadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotVmSnapshotV1Metadata {
    return new _SnapshotVmSnapshotV1Metadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotVmSnapshotV1Metadata {
    return new _SnapshotVmSnapshotV1Metadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotVmSnapshotV1Metadata {
    return new _SnapshotVmSnapshotV1Metadata().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotVmSnapshotV1Metadata | PlainMessage<_SnapshotVmSnapshotV1Metadata> | undefined | null, b2: _SnapshotVmSnapshotV1Metadata | PlainMessage<_SnapshotVmSnapshotV1Metadata> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotVmSnapshotV1Metadata as unknown as MessageType<_SnapshotVmSnapshotV1Metadata>, a, b2);
  }
})();
export type SnapshotVmSnapshotV1Metadata = InstanceType<typeof SnapshotVmSnapshotV1Metadata$Runtime>;
var SnapshotVmSnapshotV1Metadata: MessageType<SnapshotVmSnapshotV1Metadata> = SnapshotVmSnapshotV1Metadata$Runtime as unknown as MessageType<SnapshotVmSnapshotV1Metadata>;
(SnapshotVmSnapshotV1Metadata as MutableMessageType<SnapshotVmSnapshotV1Metadata>).runtime = proto3;
(SnapshotVmSnapshotV1Metadata as MutableMessageType<SnapshotVmSnapshotV1Metadata>).typeName = "anyrun.v1.SnapshotVmSnapshotV1Metadata";
(SnapshotVmSnapshotV1Metadata as MutableMessageType<SnapshotVmSnapshotV1Metadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rootfs_file_chunks", kind: "message", T: SnapshotFileChunk, repeated: true },
  {
    no: 2,
    name: "rootfs_file_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 3, name: "memory_file_chunk", kind: "message", T: SnapshotFileChunk },
  { no: 4, name: "state_file_chunk", kind: "message", T: SnapshotFileChunk },
  { no: 5, name: "kernel_file_chunk", kind: "message", T: SnapshotFileChunk },
  { no: 6, name: "dev_container_metadata", kind: "message", T: IsoDevContainerMetadata },
  { no: 7, name: "extra_drive_files", kind: "message", T: SnapshotExtraDriveFile, repeated: true }
]);
var SnapshotMemoryCell$Runtime = (() => class _SnapshotMemoryCell extends Message<_SnapshotMemoryCell> {
  declare blobBegin: bigint;
  declare blobEnd: bigint;
  constructor(data?: PartialMessage<_SnapshotMemoryCell>) {
    super();
    this.blobBegin = protoInt64.zero;
    this.blobEnd = protoInt64.zero;
    proto3.util.initPartial(data, this as _SnapshotMemoryCell);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotMemoryCell {
    return new _SnapshotMemoryCell().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotMemoryCell {
    return new _SnapshotMemoryCell().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotMemoryCell {
    return new _SnapshotMemoryCell().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotMemoryCell | PlainMessage<_SnapshotMemoryCell> | undefined | null, b2: _SnapshotMemoryCell | PlainMessage<_SnapshotMemoryCell> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotMemoryCell as unknown as MessageType<_SnapshotMemoryCell>, a, b2);
  }
})();
export type SnapshotMemoryCell = InstanceType<typeof SnapshotMemoryCell$Runtime>;
var SnapshotMemoryCell: MessageType<SnapshotMemoryCell> = SnapshotMemoryCell$Runtime as unknown as MessageType<SnapshotMemoryCell>;
(SnapshotMemoryCell as MutableMessageType<SnapshotMemoryCell>).runtime = proto3;
(SnapshotMemoryCell as MutableMessageType<SnapshotMemoryCell>).typeName = "anyrun.v1.SnapshotMemoryCell";
(SnapshotMemoryCell as MutableMessageType<SnapshotMemoryCell>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_begin",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "blob_end",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var SnapshotMemoryCellAttributes$Runtime = (() => class _SnapshotMemoryCellAttributes extends Message<_SnapshotMemoryCellAttributes> {
  declare chunkIndex: bigint;
  declare hash?: Uint8Array;
  constructor(data?: PartialMessage<_SnapshotMemoryCellAttributes>) {
    super();
    this.chunkIndex = protoInt64.zero;
    proto3.util.initPartial(data, this as _SnapshotMemoryCellAttributes);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotMemoryCellAttributes {
    return new _SnapshotMemoryCellAttributes().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotMemoryCellAttributes {
    return new _SnapshotMemoryCellAttributes().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotMemoryCellAttributes {
    return new _SnapshotMemoryCellAttributes().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotMemoryCellAttributes | PlainMessage<_SnapshotMemoryCellAttributes> | undefined | null, b2: _SnapshotMemoryCellAttributes | PlainMessage<_SnapshotMemoryCellAttributes> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotMemoryCellAttributes as unknown as MessageType<_SnapshotMemoryCellAttributes>, a, b2);
  }
})();
export type SnapshotMemoryCellAttributes = InstanceType<typeof SnapshotMemoryCellAttributes$Runtime>;
var SnapshotMemoryCellAttributes: MessageType<SnapshotMemoryCellAttributes> = SnapshotMemoryCellAttributes$Runtime as unknown as MessageType<SnapshotMemoryCellAttributes>;
(SnapshotMemoryCellAttributes as MutableMessageType<SnapshotMemoryCellAttributes>).runtime = proto3;
(SnapshotMemoryCellAttributes as MutableMessageType<SnapshotMemoryCellAttributes>).typeName = "anyrun.v1.SnapshotMemoryCellAttributes";
(SnapshotMemoryCellAttributes as MutableMessageType<SnapshotMemoryCellAttributes>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "chunk_index",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 2, name: "hash", kind: "scalar", T: 12, opt: true }
]);
var SnapshotMemoryPrefetchHint$Runtime = (() => class _SnapshotMemoryPrefetchHint extends Message<_SnapshotMemoryPrefetchHint> {
  declare version: number;
  declare payload: Uint8Array;
  constructor(data?: PartialMessage<_SnapshotMemoryPrefetchHint>) {
    super();
    this.version = 0;
    this.payload = new Uint8Array(0);
    proto3.util.initPartial(data, this as _SnapshotMemoryPrefetchHint);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotMemoryPrefetchHint {
    return new _SnapshotMemoryPrefetchHint().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotMemoryPrefetchHint {
    return new _SnapshotMemoryPrefetchHint().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotMemoryPrefetchHint {
    return new _SnapshotMemoryPrefetchHint().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotMemoryPrefetchHint | PlainMessage<_SnapshotMemoryPrefetchHint> | undefined | null, b2: _SnapshotMemoryPrefetchHint | PlainMessage<_SnapshotMemoryPrefetchHint> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotMemoryPrefetchHint as unknown as MessageType<_SnapshotMemoryPrefetchHint>, a, b2);
  }
})();
export type SnapshotMemoryPrefetchHint = InstanceType<typeof SnapshotMemoryPrefetchHint$Runtime>;
var SnapshotMemoryPrefetchHint: MessageType<SnapshotMemoryPrefetchHint> = SnapshotMemoryPrefetchHint$Runtime as unknown as MessageType<SnapshotMemoryPrefetchHint>;
(SnapshotMemoryPrefetchHint as MutableMessageType<SnapshotMemoryPrefetchHint>).runtime = proto3;
(SnapshotMemoryPrefetchHint as MutableMessageType<SnapshotMemoryPrefetchHint>).typeName = "anyrun.v1.SnapshotMemoryPrefetchHint";
(SnapshotMemoryPrefetchHint as MutableMessageType<SnapshotMemoryPrefetchHint>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var SnapshotVmSnapshotV2Metadata$Runtime = (() => class _SnapshotVmSnapshotV2Metadata extends Message<_SnapshotVmSnapshotV2Metadata> {
  declare rootfsFileChunks: SnapshotFileChunk[];
  declare rootfsFileSize: bigint;
  declare memoryCells: SnapshotMemoryCell[];
  declare memoryFileSize: bigint;
  declare memoryCellSize: bigint;
  declare stateFileChunk?: SnapshotFileChunk;
  declare kernelFileChunk?: SnapshotFileChunk;
  declare devContainerMetadata?: IsoDevContainerMetadata;
  declare extraDriveFiles: SnapshotExtraDriveFile[];
  declare memoryPrefetchHint?: SnapshotMemoryPrefetchHint;
  declare memoryHashAlgorithm: SnapshotMemoryHashAlgorithm;
  declare memoryCellAttrs: SnapshotMemoryCellAttributes[];
  constructor(data?: PartialMessage<_SnapshotVmSnapshotV2Metadata>) {
    super();
    this.rootfsFileChunks = [];
    this.rootfsFileSize = protoInt64.zero;
    this.memoryCells = [];
    this.memoryFileSize = protoInt64.zero;
    this.memoryCellSize = protoInt64.zero;
    this.extraDriveFiles = [];
    this.memoryHashAlgorithm = SnapshotMemoryHashAlgorithm.UNSPECIFIED;
    this.memoryCellAttrs = [];
    proto3.util.initPartial(data, this as _SnapshotVmSnapshotV2Metadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotVmSnapshotV2Metadata {
    return new _SnapshotVmSnapshotV2Metadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotVmSnapshotV2Metadata {
    return new _SnapshotVmSnapshotV2Metadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotVmSnapshotV2Metadata {
    return new _SnapshotVmSnapshotV2Metadata().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotVmSnapshotV2Metadata | PlainMessage<_SnapshotVmSnapshotV2Metadata> | undefined | null, b2: _SnapshotVmSnapshotV2Metadata | PlainMessage<_SnapshotVmSnapshotV2Metadata> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotVmSnapshotV2Metadata as unknown as MessageType<_SnapshotVmSnapshotV2Metadata>, a, b2);
  }
})();
export type SnapshotVmSnapshotV2Metadata = InstanceType<typeof SnapshotVmSnapshotV2Metadata$Runtime>;
var SnapshotVmSnapshotV2Metadata: MessageType<SnapshotVmSnapshotV2Metadata> = SnapshotVmSnapshotV2Metadata$Runtime as unknown as MessageType<SnapshotVmSnapshotV2Metadata>;
(SnapshotVmSnapshotV2Metadata as MutableMessageType<SnapshotVmSnapshotV2Metadata>).runtime = proto3;
(SnapshotVmSnapshotV2Metadata as MutableMessageType<SnapshotVmSnapshotV2Metadata>).typeName = "anyrun.v1.SnapshotVmSnapshotV2Metadata";
(SnapshotVmSnapshotV2Metadata as MutableMessageType<SnapshotVmSnapshotV2Metadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rootfs_file_chunks", kind: "message", T: SnapshotFileChunk, repeated: true },
  {
    no: 2,
    name: "rootfs_file_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 3, name: "memory_cells", kind: "message", T: SnapshotMemoryCell, repeated: true },
  {
    no: 4,
    name: "memory_file_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "memory_cell_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 6, name: "state_file_chunk", kind: "message", T: SnapshotFileChunk },
  { no: 7, name: "kernel_file_chunk", kind: "message", T: SnapshotFileChunk },
  { no: 8, name: "dev_container_metadata", kind: "message", T: IsoDevContainerMetadata },
  { no: 9, name: "extra_drive_files", kind: "message", T: SnapshotExtraDriveFile, repeated: true },
  { no: 10, name: "memory_prefetch_hint", kind: "message", T: SnapshotMemoryPrefetchHint, opt: true },
  { no: 11, name: "memory_hash_algorithm", kind: "enum", T: proto3.getEnumType(SnapshotMemoryHashAlgorithm) },
  { no: 12, name: "memory_cell_attrs", kind: "message", T: SnapshotMemoryCellAttributes, repeated: true }
]);


export { SnapshotState, SnapshotCategory, SnapshotMemoryHashAlgorithm, Snapshot, SnapshotCollection, SnapshotFileChunk, SnapshotExtraDriveFile, SnapshotVmSnapshotV1Metadata, SnapshotMemoryCell, SnapshotMemoryCellAttributes, SnapshotMemoryPrefetchHint, SnapshotVmSnapshotV2Metadata };
