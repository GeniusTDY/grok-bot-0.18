/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:413271-414252
 * Region SHA-256: 748f03940c037f0e9e5cdac76bf86e07bf1d2af8cf99aab7f27ce7c2dd37a295
 * BackgroundComposer closure exports: 25 messages + 1 enums = 26
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ContainerRuntime, FirecrackerVersion, BlobStorageFormat, ImageMetadata, PortDefinition, DevContainerExecCommand, DevContainerConfig_RegistryReferenceAlias, Build, V4RootArchiveOptions } from "./common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type IsoEnvExtraDrivePurpose = 0 | 1;
var IsoEnvExtraDrivePurpose: {
  "UNSPECIFIED": 0;
  "CHECKPOINT_SCRATCH": 1;
  0: "UNSPECIFIED";
  1: "CHECKPOINT_SCRATCH";
};
(function(IsoEnvExtraDrivePurpose2) {
  IsoEnvExtraDrivePurpose2[IsoEnvExtraDrivePurpose2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  IsoEnvExtraDrivePurpose2[IsoEnvExtraDrivePurpose2["CHECKPOINT_SCRATCH"] = 1] = "CHECKPOINT_SCRATCH";
})(IsoEnvExtraDrivePurpose! || (IsoEnvExtraDrivePurpose = {} as typeof IsoEnvExtraDrivePurpose));
proto3.util.setEnumType(IsoEnvExtraDrivePurpose, "anyrun.v1.IsoEnvExtraDrivePurpose", [
  { no: 0, name: "ISO_ENV_EXTRA_DRIVE_PURPOSE_UNSPECIFIED" },
  { no: 1, name: "ISO_ENV_EXTRA_DRIVE_PURPOSE_CHECKPOINT_SCRATCH" }
]);
var PersistedGitRepoSource$Runtime = (() => class _PersistedGitRepoSource extends Message<_PersistedGitRepoSource> {
  declare cacheUri: string;
  declare commitHash: Uint8Array;
  constructor(data?: PartialMessage<_PersistedGitRepoSource>) {
    super();
    this.cacheUri = "";
    this.commitHash = new Uint8Array(0);
    proto3.util.initPartial(data, this as _PersistedGitRepoSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedGitRepoSource {
    return new _PersistedGitRepoSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedGitRepoSource {
    return new _PersistedGitRepoSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedGitRepoSource {
    return new _PersistedGitRepoSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedGitRepoSource | PlainMessage<_PersistedGitRepoSource> | undefined | null, b2: _PersistedGitRepoSource | PlainMessage<_PersistedGitRepoSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedGitRepoSource as unknown as MessageType<_PersistedGitRepoSource>, a, b2);
  }
})();
export type PersistedGitRepoSource = InstanceType<typeof PersistedGitRepoSource$Runtime>;
var PersistedGitRepoSource: MessageType<PersistedGitRepoSource> = PersistedGitRepoSource$Runtime as unknown as MessageType<PersistedGitRepoSource>;
(PersistedGitRepoSource as MutableMessageType<PersistedGitRepoSource>).runtime = proto3;
(PersistedGitRepoSource as MutableMessageType<PersistedGitRepoSource>).typeName = "anyrun.v1.PersistedGitRepoSource";
(PersistedGitRepoSource as MutableMessageType<PersistedGitRepoSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cache_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var PersistedTarRepoSource$Runtime = (() => class _PersistedTarRepoSource extends Message<_PersistedTarRepoSource> {
  declare name: string;
  constructor(data?: PartialMessage<_PersistedTarRepoSource>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _PersistedTarRepoSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedTarRepoSource {
    return new _PersistedTarRepoSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedTarRepoSource {
    return new _PersistedTarRepoSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedTarRepoSource {
    return new _PersistedTarRepoSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedTarRepoSource | PlainMessage<_PersistedTarRepoSource> | undefined | null, b2: _PersistedTarRepoSource | PlainMessage<_PersistedTarRepoSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedTarRepoSource as unknown as MessageType<_PersistedTarRepoSource>, a, b2);
  }
})();
export type PersistedTarRepoSource = InstanceType<typeof PersistedTarRepoSource$Runtime>;
var PersistedTarRepoSource: MessageType<PersistedTarRepoSource> = PersistedTarRepoSource$Runtime as unknown as MessageType<PersistedTarRepoSource>;
(PersistedTarRepoSource as MutableMessageType<PersistedTarRepoSource>).runtime = proto3;
(PersistedTarRepoSource as MutableMessageType<PersistedTarRepoSource>).typeName = "anyrun.v1.PersistedTarRepoSource";
(PersistedTarRepoSource as MutableMessageType<PersistedTarRepoSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistedLocalRepoSource$Runtime = (() => class _PersistedLocalRepoSource extends Message<_PersistedLocalRepoSource> {
  declare path: string;
  constructor(data?: PartialMessage<_PersistedLocalRepoSource>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _PersistedLocalRepoSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedLocalRepoSource {
    return new _PersistedLocalRepoSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedLocalRepoSource {
    return new _PersistedLocalRepoSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedLocalRepoSource {
    return new _PersistedLocalRepoSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedLocalRepoSource | PlainMessage<_PersistedLocalRepoSource> | undefined | null, b2: _PersistedLocalRepoSource | PlainMessage<_PersistedLocalRepoSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedLocalRepoSource as unknown as MessageType<_PersistedLocalRepoSource>, a, b2);
  }
})();
export type PersistedLocalRepoSource = InstanceType<typeof PersistedLocalRepoSource$Runtime>;
var PersistedLocalRepoSource: MessageType<PersistedLocalRepoSource> = PersistedLocalRepoSource$Runtime as unknown as MessageType<PersistedLocalRepoSource>;
(PersistedLocalRepoSource as MutableMessageType<PersistedLocalRepoSource>).runtime = proto3;
(PersistedLocalRepoSource as MutableMessageType<PersistedLocalRepoSource>).typeName = "anyrun.v1.PersistedLocalRepoSource";
(PersistedLocalRepoSource as MutableMessageType<PersistedLocalRepoSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistedTarGzipUrlSource$Runtime = (() => class _PersistedTarGzipUrlSource extends Message<_PersistedTarGzipUrlSource> {
  declare name: string;
  constructor(data?: PartialMessage<_PersistedTarGzipUrlSource>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _PersistedTarGzipUrlSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedTarGzipUrlSource {
    return new _PersistedTarGzipUrlSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedTarGzipUrlSource {
    return new _PersistedTarGzipUrlSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedTarGzipUrlSource {
    return new _PersistedTarGzipUrlSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedTarGzipUrlSource | PlainMessage<_PersistedTarGzipUrlSource> | undefined | null, b2: _PersistedTarGzipUrlSource | PlainMessage<_PersistedTarGzipUrlSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedTarGzipUrlSource as unknown as MessageType<_PersistedTarGzipUrlSource>, a, b2);
  }
})();
export type PersistedTarGzipUrlSource = InstanceType<typeof PersistedTarGzipUrlSource$Runtime>;
var PersistedTarGzipUrlSource: MessageType<PersistedTarGzipUrlSource> = PersistedTarGzipUrlSource$Runtime as unknown as MessageType<PersistedTarGzipUrlSource>;
(PersistedTarGzipUrlSource as MutableMessageType<PersistedTarGzipUrlSource>).runtime = proto3;
(PersistedTarGzipUrlSource as MutableMessageType<PersistedTarGzipUrlSource>).typeName = "anyrun.v1.PersistedTarGzipUrlSource";
(PersistedTarGzipUrlSource as MutableMessageType<PersistedTarGzipUrlSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistedNoopSource$Runtime = (() => class _PersistedNoopSource extends Message<_PersistedNoopSource> {
  constructor(data?: PartialMessage<_PersistedNoopSource>) {
    super();
    proto3.util.initPartial(data, this as _PersistedNoopSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedNoopSource {
    return new _PersistedNoopSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedNoopSource {
    return new _PersistedNoopSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedNoopSource {
    return new _PersistedNoopSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedNoopSource | PlainMessage<_PersistedNoopSource> | undefined | null, b2: _PersistedNoopSource | PlainMessage<_PersistedNoopSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedNoopSource as unknown as MessageType<_PersistedNoopSource>, a, b2);
  }
})();
export type PersistedNoopSource = InstanceType<typeof PersistedNoopSource$Runtime>;
var PersistedNoopSource: MessageType<PersistedNoopSource> = PersistedNoopSource$Runtime as unknown as MessageType<PersistedNoopSource>;
(PersistedNoopSource as MutableMessageType<PersistedNoopSource>).runtime = proto3;
(PersistedNoopSource as MutableMessageType<PersistedNoopSource>).typeName = "anyrun.v1.PersistedNoopSource";
(PersistedNoopSource as MutableMessageType<PersistedNoopSource>).fields = proto3.util.newFieldList(() => []);
var PersistedMultiSourceEntry$Runtime = (() => class _PersistedMultiSourceEntry extends Message<_PersistedMultiSourceEntry> {
  declare relativePath: string;
  declare source: { case: "git"; value: PersistedGitRepoSource } | { case: "tar"; value: PersistedTarRepoSource } | { case: "local"; value: PersistedLocalRepoSource } | { case: "tarGzipUrl"; value: PersistedTarGzipUrlSource } | { case: "noop"; value: PersistedNoopSource } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PersistedMultiSourceEntry>) {
    super();
    this.relativePath = "";
    this.source = { case: void 0 };
    proto3.util.initPartial(data, this as _PersistedMultiSourceEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedMultiSourceEntry {
    return new _PersistedMultiSourceEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedMultiSourceEntry {
    return new _PersistedMultiSourceEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedMultiSourceEntry {
    return new _PersistedMultiSourceEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedMultiSourceEntry | PlainMessage<_PersistedMultiSourceEntry> | undefined | null, b2: _PersistedMultiSourceEntry | PlainMessage<_PersistedMultiSourceEntry> | undefined | null): boolean {
    return proto3.util.equals(_PersistedMultiSourceEntry as unknown as MessageType<_PersistedMultiSourceEntry>, a, b2);
  }
})();
export type PersistedMultiSourceEntry = InstanceType<typeof PersistedMultiSourceEntry$Runtime>;
var PersistedMultiSourceEntry: MessageType<PersistedMultiSourceEntry> = PersistedMultiSourceEntry$Runtime as unknown as MessageType<PersistedMultiSourceEntry>;
(PersistedMultiSourceEntry as MutableMessageType<PersistedMultiSourceEntry>).runtime = proto3;
(PersistedMultiSourceEntry as MutableMessageType<PersistedMultiSourceEntry>).typeName = "anyrun.v1.PersistedMultiSourceEntry";
(PersistedMultiSourceEntry as MutableMessageType<PersistedMultiSourceEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "git", kind: "message", T: PersistedGitRepoSource, oneof: "source" },
  { no: 3, name: "tar", kind: "message", T: PersistedTarRepoSource, oneof: "source" },
  { no: 4, name: "local", kind: "message", T: PersistedLocalRepoSource, oneof: "source" },
  { no: 5, name: "tar_gzip_url", kind: "message", T: PersistedTarGzipUrlSource, oneof: "source" },
  { no: 6, name: "noop", kind: "message", T: PersistedNoopSource, oneof: "source" }
]);
var PersistedMultiSource$Runtime = (() => class _PersistedMultiSource extends Message<_PersistedMultiSource> {
  declare sources: PersistedMultiSourceEntry[];
  constructor(data?: PartialMessage<_PersistedMultiSource>) {
    super();
    this.sources = [];
    proto3.util.initPartial(data, this as _PersistedMultiSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedMultiSource {
    return new _PersistedMultiSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedMultiSource {
    return new _PersistedMultiSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedMultiSource {
    return new _PersistedMultiSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedMultiSource | PlainMessage<_PersistedMultiSource> | undefined | null, b2: _PersistedMultiSource | PlainMessage<_PersistedMultiSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedMultiSource as unknown as MessageType<_PersistedMultiSource>, a, b2);
  }
})();
export type PersistedMultiSource = InstanceType<typeof PersistedMultiSource$Runtime>;
var PersistedMultiSource: MessageType<PersistedMultiSource> = PersistedMultiSource$Runtime as unknown as MessageType<PersistedMultiSource>;
(PersistedMultiSource as MutableMessageType<PersistedMultiSource>).runtime = proto3;
(PersistedMultiSource as MutableMessageType<PersistedMultiSource>).typeName = "anyrun.v1.PersistedMultiSource";
(PersistedMultiSource as MutableMessageType<PersistedMultiSource>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "sources", kind: "message", T: PersistedMultiSourceEntry, repeated: true }
]);
var PersistedExternalSnapshot$Runtime = (() => class _PersistedExternalSnapshot extends Message<_PersistedExternalSnapshot> {
  declare snapshotId: string;
  declare cpuBaselineId?: string;
  constructor(data?: PartialMessage<_PersistedExternalSnapshot>) {
    super();
    this.snapshotId = "";
    proto3.util.initPartial(data, this as _PersistedExternalSnapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedExternalSnapshot {
    return new _PersistedExternalSnapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedExternalSnapshot {
    return new _PersistedExternalSnapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedExternalSnapshot {
    return new _PersistedExternalSnapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedExternalSnapshot | PlainMessage<_PersistedExternalSnapshot> | undefined | null, b2: _PersistedExternalSnapshot | PlainMessage<_PersistedExternalSnapshot> | undefined | null): boolean {
    return proto3.util.equals(_PersistedExternalSnapshot as unknown as MessageType<_PersistedExternalSnapshot>, a, b2);
  }
})();
export type PersistedExternalSnapshot = InstanceType<typeof PersistedExternalSnapshot$Runtime>;
var PersistedExternalSnapshot: MessageType<PersistedExternalSnapshot> = PersistedExternalSnapshot$Runtime as unknown as MessageType<PersistedExternalSnapshot>;
(PersistedExternalSnapshot as MutableMessageType<PersistedExternalSnapshot>).runtime = proto3;
(PersistedExternalSnapshot as MutableMessageType<PersistedExternalSnapshot>).typeName = "anyrun.v1.PersistedExternalSnapshot";
(PersistedExternalSnapshot as MutableMessageType<PersistedExternalSnapshot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "snapshot_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "cpu_baseline_id", kind: "scalar", T: 9, opt: true }
]);
var PersistedEnvVar$Runtime = (() => class _PersistedEnvVar extends Message<_PersistedEnvVar> {
  declare name: string;
  declare value: string;
  constructor(data?: PartialMessage<_PersistedEnvVar>) {
    super();
    this.name = "";
    this.value = "";
    proto3.util.initPartial(data, this as _PersistedEnvVar);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedEnvVar {
    return new _PersistedEnvVar().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedEnvVar {
    return new _PersistedEnvVar().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedEnvVar {
    return new _PersistedEnvVar().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedEnvVar | PlainMessage<_PersistedEnvVar> | undefined | null, b2: _PersistedEnvVar | PlainMessage<_PersistedEnvVar> | undefined | null): boolean {
    return proto3.util.equals(_PersistedEnvVar as unknown as MessageType<_PersistedEnvVar>, a, b2);
  }
})();
export type PersistedEnvVar = InstanceType<typeof PersistedEnvVar$Runtime>;
var PersistedEnvVar: MessageType<PersistedEnvVar> = PersistedEnvVar$Runtime as unknown as MessageType<PersistedEnvVar>;
(PersistedEnvVar as MutableMessageType<PersistedEnvVar>).runtime = proto3;
(PersistedEnvVar as MutableMessageType<PersistedEnvVar>).typeName = "anyrun.v1.PersistedEnvVar";
(PersistedEnvVar as MutableMessageType<PersistedEnvVar>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistedDevContainerConfig$Runtime = (() => class _PersistedDevContainerConfig extends Message<_PersistedDevContainerConfig> {
  declare prepareCommands: DevContainerExecCommand[];
  declare installCommands: DevContainerExecCommand[];
  declare verifyCommands: DevContainerExecCommand[];
  declare startCommands: DevContainerExecCommand[];
  declare env: PersistedEnvVar[];
  declare ports: PortDefinition[];
  declare shell: string;
  declare user?: string;
  declare privileged?: boolean;
  declare buildContainer?: boolean;
  declare enableCheckpointScratchDrive?: boolean;
  declare blobClientResilienceEnabled?: boolean;
  declare containerRuntime: ContainerRuntime;
  declare firecrackerVersion: FirecrackerVersion;
  declare enableLazyV3SquashfsSnapshotLoad?: boolean;
  declare enableLazyV4Load?: boolean;
  declare source: { case: "git"; value: PersistedGitRepoSource } | { case: "tar"; value: PersistedTarRepoSource } | { case: "local"; value: PersistedLocalRepoSource } | { case: "tarGzipUrl"; value: PersistedTarGzipUrlSource } | { case: "noop"; value: PersistedNoopSource } | { case: "multi"; value: PersistedMultiSource } | { case: undefined; value?: undefined };
  declare image: { case: "registryReference"; value: string } | { case: "build"; value: Build } | { case: "snapshotId"; value: string } | { case: "externalSnapshot"; value: PersistedExternalSnapshot } | { case: "checkpointGroupId"; value: string } | { case: "registryReferenceAlias"; value: DevContainerConfig_RegistryReferenceAlias } | { case: undefined; value?: undefined };
  declare workspace: { case: "workspacePath"; value: string } | { case: "workdirRelativePath"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PersistedDevContainerConfig>) {
    super();
    this.source = { case: void 0 };
    this.image = { case: void 0 };
    this.workspace = { case: void 0 };
    this.prepareCommands = [];
    this.installCommands = [];
    this.verifyCommands = [];
    this.startCommands = [];
    this.env = [];
    this.ports = [];
    this.shell = "";
    this.containerRuntime = ContainerRuntime.DOCKERD_UNSPECIFIED;
    this.firecrackerVersion = FirecrackerVersion.UNSPECIFIED;
    proto3.util.initPartial(data, this as _PersistedDevContainerConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedDevContainerConfig {
    return new _PersistedDevContainerConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedDevContainerConfig {
    return new _PersistedDevContainerConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedDevContainerConfig {
    return new _PersistedDevContainerConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedDevContainerConfig | PlainMessage<_PersistedDevContainerConfig> | undefined | null, b2: _PersistedDevContainerConfig | PlainMessage<_PersistedDevContainerConfig> | undefined | null): boolean {
    return proto3.util.equals(_PersistedDevContainerConfig as unknown as MessageType<_PersistedDevContainerConfig>, a, b2);
  }
})();
export type PersistedDevContainerConfig = InstanceType<typeof PersistedDevContainerConfig$Runtime>;
var PersistedDevContainerConfig: MessageType<PersistedDevContainerConfig> = PersistedDevContainerConfig$Runtime as unknown as MessageType<PersistedDevContainerConfig>;
(PersistedDevContainerConfig as MutableMessageType<PersistedDevContainerConfig>).runtime = proto3;
(PersistedDevContainerConfig as MutableMessageType<PersistedDevContainerConfig>).typeName = "anyrun.v1.PersistedDevContainerConfig";
(PersistedDevContainerConfig as MutableMessageType<PersistedDevContainerConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "git", kind: "message", T: PersistedGitRepoSource, oneof: "source" },
  { no: 2, name: "tar", kind: "message", T: PersistedTarRepoSource, oneof: "source" },
  { no: 3, name: "local", kind: "message", T: PersistedLocalRepoSource, oneof: "source" },
  { no: 4, name: "tar_gzip_url", kind: "message", T: PersistedTarGzipUrlSource, oneof: "source" },
  { no: 18, name: "noop", kind: "message", T: PersistedNoopSource, oneof: "source" },
  { no: 23, name: "multi", kind: "message", T: PersistedMultiSource, oneof: "source" },
  { no: 5, name: "registry_reference", kind: "scalar", T: 9, oneof: "image" },
  { no: 6, name: "build", kind: "message", T: Build, oneof: "image" },
  { no: 7, name: "snapshot_id", kind: "scalar", T: 9, oneof: "image" },
  { no: 20, name: "external_snapshot", kind: "message", T: PersistedExternalSnapshot, oneof: "image" },
  { no: 21, name: "checkpoint_group_id", kind: "scalar", T: 9, oneof: "image" },
  { no: 24, name: "registry_reference_alias", kind: "enum", T: proto3.getEnumType(DevContainerConfig_RegistryReferenceAlias), oneof: "image" },
  { no: 8, name: "workspace_path", kind: "scalar", T: 9, oneof: "workspace" },
  { no: 9, name: "workdir_relative_path", kind: "scalar", T: 9, oneof: "workspace" },
  { no: 10, name: "prepare_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 11, name: "install_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 19, name: "verify_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 12, name: "start_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 13, name: "env", kind: "message", T: PersistedEnvVar, repeated: true },
  { no: 14, name: "ports", kind: "message", T: PortDefinition, repeated: true },
  {
    no: 15,
    name: "shell",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 16, name: "user", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "privileged", kind: "scalar", T: 8, opt: true },
  { no: 22, name: "build_container", kind: "scalar", T: 8, opt: true },
  { no: 25, name: "enable_checkpoint_scratch_drive", kind: "scalar", T: 8, opt: true },
  { no: 26, name: "blob_client_resilience_enabled", kind: "scalar", T: 8, opt: true },
  { no: 27, name: "container_runtime", kind: "enum", T: proto3.getEnumType(ContainerRuntime) },
  { no: 28, name: "firecracker_version", kind: "enum", T: proto3.getEnumType(FirecrackerVersion) },
  { no: 29, name: "enable_lazy_v3_squashfs_snapshot_load", kind: "scalar", T: 8, opt: true },
  { no: 30, name: "enable_lazy_v4_load", kind: "scalar", T: 8, opt: true }
]);
var IsoDevContainerMetadata$Runtime = (() => class _IsoDevContainerMetadata extends Message<_IsoDevContainerMetadata> {
  declare name: string;
  declare persistentState?: DockerDevContainerPersistentState;
  declare envConfig?: IsoEnvConfig;
  declare driveDescriptors: PersistedDriveDescriptor[];
  constructor(data?: PartialMessage<_IsoDevContainerMetadata>) {
    super();
    this.name = "";
    this.driveDescriptors = [];
    proto3.util.initPartial(data, this as _IsoDevContainerMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsoDevContainerMetadata {
    return new _IsoDevContainerMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsoDevContainerMetadata {
    return new _IsoDevContainerMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsoDevContainerMetadata {
    return new _IsoDevContainerMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _IsoDevContainerMetadata | PlainMessage<_IsoDevContainerMetadata> | undefined | null, b2: _IsoDevContainerMetadata | PlainMessage<_IsoDevContainerMetadata> | undefined | null): boolean {
    return proto3.util.equals(_IsoDevContainerMetadata as unknown as MessageType<_IsoDevContainerMetadata>, a, b2);
  }
})();
export type IsoDevContainerMetadata = InstanceType<typeof IsoDevContainerMetadata$Runtime>;
var IsoDevContainerMetadata: MessageType<IsoDevContainerMetadata> = IsoDevContainerMetadata$Runtime as unknown as MessageType<IsoDevContainerMetadata>;
(IsoDevContainerMetadata as MutableMessageType<IsoDevContainerMetadata>).runtime = proto3;
(IsoDevContainerMetadata as MutableMessageType<IsoDevContainerMetadata>).typeName = "anyrun.v1.IsoDevContainerMetadata";
(IsoDevContainerMetadata as MutableMessageType<IsoDevContainerMetadata>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "persistent_state", kind: "message", T: DockerDevContainerPersistentState },
  { no: 3, name: "env_config", kind: "message", T: IsoEnvConfig },
  { no: 4, name: "drive_descriptors", kind: "message", T: PersistedDriveDescriptor, repeated: true }
]);
var PersistedDriveDescriptor$Runtime = (() => class _PersistedDriveDescriptor extends Message<_PersistedDriveDescriptor> {
  declare descriptor: { case: "fileV1"; value: PersistedFileDriveDescriptor } | { case: "lazySquashfsV1"; value: PersistedLazySquashfsDriveDescriptor } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PersistedDriveDescriptor>) {
    super();
    this.descriptor = { case: void 0 };
    proto3.util.initPartial(data, this as _PersistedDriveDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedDriveDescriptor {
    return new _PersistedDriveDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedDriveDescriptor {
    return new _PersistedDriveDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedDriveDescriptor {
    return new _PersistedDriveDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedDriveDescriptor | PlainMessage<_PersistedDriveDescriptor> | undefined | null, b2: _PersistedDriveDescriptor | PlainMessage<_PersistedDriveDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_PersistedDriveDescriptor as unknown as MessageType<_PersistedDriveDescriptor>, a, b2);
  }
})();
export type PersistedDriveDescriptor = InstanceType<typeof PersistedDriveDescriptor$Runtime>;
var PersistedDriveDescriptor: MessageType<PersistedDriveDescriptor> = PersistedDriveDescriptor$Runtime as unknown as MessageType<PersistedDriveDescriptor>;
(PersistedDriveDescriptor as MutableMessageType<PersistedDriveDescriptor>).runtime = proto3;
(PersistedDriveDescriptor as MutableMessageType<PersistedDriveDescriptor>).typeName = "anyrun.v1.PersistedDriveDescriptor";
(PersistedDriveDescriptor as MutableMessageType<PersistedDriveDescriptor>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_v1", kind: "message", T: PersistedFileDriveDescriptor, oneof: "descriptor" },
  { no: 2, name: "lazy_squashfs_v1", kind: "message", T: PersistedLazySquashfsDriveDescriptor, oneof: "descriptor" }
]);
var PersistedFileDriveDescriptor$Runtime = (() => class _PersistedFileDriveDescriptor extends Message<_PersistedFileDriveDescriptor> {
  declare artifactReference: string;
  declare driveId: string;
  declare guestPath: string;
  declare isRootDevice: boolean;
  declare sizeMib?: number;
  constructor(data?: PartialMessage<_PersistedFileDriveDescriptor>) {
    super();
    this.artifactReference = "";
    this.driveId = "";
    this.guestPath = "";
    this.isRootDevice = false;
    proto3.util.initPartial(data, this as _PersistedFileDriveDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedFileDriveDescriptor {
    return new _PersistedFileDriveDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedFileDriveDescriptor {
    return new _PersistedFileDriveDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedFileDriveDescriptor {
    return new _PersistedFileDriveDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedFileDriveDescriptor | PlainMessage<_PersistedFileDriveDescriptor> | undefined | null, b2: _PersistedFileDriveDescriptor | PlainMessage<_PersistedFileDriveDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_PersistedFileDriveDescriptor as unknown as MessageType<_PersistedFileDriveDescriptor>, a, b2);
  }
})();
export type PersistedFileDriveDescriptor = InstanceType<typeof PersistedFileDriveDescriptor$Runtime>;
var PersistedFileDriveDescriptor: MessageType<PersistedFileDriveDescriptor> = PersistedFileDriveDescriptor$Runtime as unknown as MessageType<PersistedFileDriveDescriptor>;
(PersistedFileDriveDescriptor as MutableMessageType<PersistedFileDriveDescriptor>).runtime = proto3;
(PersistedFileDriveDescriptor as MutableMessageType<PersistedFileDriveDescriptor>).typeName = "anyrun.v1.PersistedFileDriveDescriptor";
(PersistedFileDriveDescriptor as MutableMessageType<PersistedFileDriveDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "artifact_reference",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "drive_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "guest_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_root_device",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "size_mib", kind: "scalar", T: 13, opt: true }
]);
var PersistedLazySquashfsDriveDescriptor$Runtime = (() => class _PersistedLazySquashfsDriveDescriptor extends Message<_PersistedLazySquashfsDriveDescriptor> {
  declare driveId: string;
  declare guestPath: string;
  declare chunkSize: bigint;
  declare blobStorageFormat?: BlobStorageFormat;
  declare v4RootArchiveOptions?: V4RootArchiveOptions;
  declare source: { case: "snapshot"; value: PersistedLazySnapshotSource } | { case: "checkpoint"; value: PersistedLazyCheckpointSource } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PersistedLazySquashfsDriveDescriptor>) {
    super();
    this.driveId = "";
    this.guestPath = "";
    this.source = { case: void 0 };
    this.chunkSize = protoInt64.zero;
    proto3.util.initPartial(data, this as _PersistedLazySquashfsDriveDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedLazySquashfsDriveDescriptor {
    return new _PersistedLazySquashfsDriveDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedLazySquashfsDriveDescriptor {
    return new _PersistedLazySquashfsDriveDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedLazySquashfsDriveDescriptor {
    return new _PersistedLazySquashfsDriveDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedLazySquashfsDriveDescriptor | PlainMessage<_PersistedLazySquashfsDriveDescriptor> | undefined | null, b2: _PersistedLazySquashfsDriveDescriptor | PlainMessage<_PersistedLazySquashfsDriveDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_PersistedLazySquashfsDriveDescriptor as unknown as MessageType<_PersistedLazySquashfsDriveDescriptor>, a, b2);
  }
})();
export type PersistedLazySquashfsDriveDescriptor = InstanceType<typeof PersistedLazySquashfsDriveDescriptor$Runtime>;
var PersistedLazySquashfsDriveDescriptor: MessageType<PersistedLazySquashfsDriveDescriptor> = PersistedLazySquashfsDriveDescriptor$Runtime as unknown as MessageType<PersistedLazySquashfsDriveDescriptor>;
(PersistedLazySquashfsDriveDescriptor as MutableMessageType<PersistedLazySquashfsDriveDescriptor>).runtime = proto3;
(PersistedLazySquashfsDriveDescriptor as MutableMessageType<PersistedLazySquashfsDriveDescriptor>).typeName = "anyrun.v1.PersistedLazySquashfsDriveDescriptor";
(PersistedLazySquashfsDriveDescriptor as MutableMessageType<PersistedLazySquashfsDriveDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "drive_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "guest_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "snapshot", kind: "message", T: PersistedLazySnapshotSource, oneof: "source" },
  { no: 5, name: "checkpoint", kind: "message", T: PersistedLazyCheckpointSource, oneof: "source" },
  {
    no: 4,
    name: "chunk_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 6, name: "blob_storage_format", kind: "enum", T: proto3.getEnumType(BlobStorageFormat), opt: true },
  { no: 7, name: "v4_root_archive_options", kind: "message", T: V4RootArchiveOptions, opt: true }
]);
var PersistedLazySnapshotSource$Runtime = (() => class _PersistedLazySnapshotSource extends Message<_PersistedLazySnapshotSource> {
  declare tenantId: string;
  declare snapshotId: string;
  constructor(data?: PartialMessage<_PersistedLazySnapshotSource>) {
    super();
    this.tenantId = "";
    this.snapshotId = "";
    proto3.util.initPartial(data, this as _PersistedLazySnapshotSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedLazySnapshotSource {
    return new _PersistedLazySnapshotSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedLazySnapshotSource {
    return new _PersistedLazySnapshotSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedLazySnapshotSource {
    return new _PersistedLazySnapshotSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedLazySnapshotSource | PlainMessage<_PersistedLazySnapshotSource> | undefined | null, b2: _PersistedLazySnapshotSource | PlainMessage<_PersistedLazySnapshotSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedLazySnapshotSource as unknown as MessageType<_PersistedLazySnapshotSource>, a, b2);
  }
})();
export type PersistedLazySnapshotSource = InstanceType<typeof PersistedLazySnapshotSource$Runtime>;
var PersistedLazySnapshotSource: MessageType<PersistedLazySnapshotSource> = PersistedLazySnapshotSource$Runtime as unknown as MessageType<PersistedLazySnapshotSource>;
(PersistedLazySnapshotSource as MutableMessageType<PersistedLazySnapshotSource>).runtime = proto3;
(PersistedLazySnapshotSource as MutableMessageType<PersistedLazySnapshotSource>).typeName = "anyrun.v1.PersistedLazySnapshotSource";
(PersistedLazySnapshotSource as MutableMessageType<PersistedLazySnapshotSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "snapshot_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PersistedLazyCheckpointSource$Runtime = (() => class _PersistedLazyCheckpointSource extends Message<_PersistedLazyCheckpointSource> {
  declare tenantId: string;
  declare checkpointId: string;
  constructor(data?: PartialMessage<_PersistedLazyCheckpointSource>) {
    super();
    this.tenantId = "";
    this.checkpointId = "";
    proto3.util.initPartial(data, this as _PersistedLazyCheckpointSource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PersistedLazyCheckpointSource {
    return new _PersistedLazyCheckpointSource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PersistedLazyCheckpointSource {
    return new _PersistedLazyCheckpointSource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PersistedLazyCheckpointSource {
    return new _PersistedLazyCheckpointSource().fromJsonString(jsonString, options);
  }
  static equals(a: _PersistedLazyCheckpointSource | PlainMessage<_PersistedLazyCheckpointSource> | undefined | null, b2: _PersistedLazyCheckpointSource | PlainMessage<_PersistedLazyCheckpointSource> | undefined | null): boolean {
    return proto3.util.equals(_PersistedLazyCheckpointSource as unknown as MessageType<_PersistedLazyCheckpointSource>, a, b2);
  }
})();
export type PersistedLazyCheckpointSource = InstanceType<typeof PersistedLazyCheckpointSource$Runtime>;
var PersistedLazyCheckpointSource: MessageType<PersistedLazyCheckpointSource> = PersistedLazyCheckpointSource$Runtime as unknown as MessageType<PersistedLazyCheckpointSource>;
(PersistedLazyCheckpointSource as MutableMessageType<PersistedLazyCheckpointSource>).runtime = proto3;
(PersistedLazyCheckpointSource as MutableMessageType<PersistedLazyCheckpointSource>).typeName = "anyrun.v1.PersistedLazyCheckpointSource";
(PersistedLazyCheckpointSource as MutableMessageType<PersistedLazyCheckpointSource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "checkpoint_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var IsoEnvExtraDriveConfig$Runtime = (() => class _IsoEnvExtraDriveConfig extends Message<_IsoEnvExtraDriveConfig> {
  declare purpose: IsoEnvExtraDrivePurpose;
  declare sizeMib: number;
  declare driveId: string;
  declare guestDevice: string;
  declare guestMountPath: string;
  constructor(data?: PartialMessage<_IsoEnvExtraDriveConfig>) {
    super();
    this.purpose = IsoEnvExtraDrivePurpose.UNSPECIFIED;
    this.sizeMib = 0;
    this.driveId = "";
    this.guestDevice = "";
    this.guestMountPath = "";
    proto3.util.initPartial(data, this as _IsoEnvExtraDriveConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsoEnvExtraDriveConfig {
    return new _IsoEnvExtraDriveConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsoEnvExtraDriveConfig {
    return new _IsoEnvExtraDriveConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsoEnvExtraDriveConfig {
    return new _IsoEnvExtraDriveConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _IsoEnvExtraDriveConfig | PlainMessage<_IsoEnvExtraDriveConfig> | undefined | null, b2: _IsoEnvExtraDriveConfig | PlainMessage<_IsoEnvExtraDriveConfig> | undefined | null): boolean {
    return proto3.util.equals(_IsoEnvExtraDriveConfig as unknown as MessageType<_IsoEnvExtraDriveConfig>, a, b2);
  }
})();
export type IsoEnvExtraDriveConfig = InstanceType<typeof IsoEnvExtraDriveConfig$Runtime>;
var IsoEnvExtraDriveConfig: MessageType<IsoEnvExtraDriveConfig> = IsoEnvExtraDriveConfig$Runtime as unknown as MessageType<IsoEnvExtraDriveConfig>;
(IsoEnvExtraDriveConfig as MutableMessageType<IsoEnvExtraDriveConfig>).runtime = proto3;
(IsoEnvExtraDriveConfig as MutableMessageType<IsoEnvExtraDriveConfig>).typeName = "anyrun.v1.IsoEnvExtraDriveConfig";
(IsoEnvExtraDriveConfig as MutableMessageType<IsoEnvExtraDriveConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "purpose", kind: "enum", T: proto3.getEnumType(IsoEnvExtraDrivePurpose) },
  {
    no: 3,
    name: "size_mib",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "drive_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "guest_device",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "guest_mount_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var IsoEnvBalloonConfig$Runtime = (() => class _IsoEnvBalloonConfig extends Message<_IsoEnvBalloonConfig> {
  declare amountMib: number;
  declare deflateOnOom: boolean;
  declare statsPollingIntervalS?: number;
  constructor(data?: PartialMessage<_IsoEnvBalloonConfig>) {
    super();
    this.amountMib = 0;
    this.deflateOnOom = false;
    proto3.util.initPartial(data, this as _IsoEnvBalloonConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsoEnvBalloonConfig {
    return new _IsoEnvBalloonConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsoEnvBalloonConfig {
    return new _IsoEnvBalloonConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsoEnvBalloonConfig {
    return new _IsoEnvBalloonConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _IsoEnvBalloonConfig | PlainMessage<_IsoEnvBalloonConfig> | undefined | null, b2: _IsoEnvBalloonConfig | PlainMessage<_IsoEnvBalloonConfig> | undefined | null): boolean {
    return proto3.util.equals(_IsoEnvBalloonConfig as unknown as MessageType<_IsoEnvBalloonConfig>, a, b2);
  }
})();
export type IsoEnvBalloonConfig = InstanceType<typeof IsoEnvBalloonConfig$Runtime>;
var IsoEnvBalloonConfig: MessageType<IsoEnvBalloonConfig> = IsoEnvBalloonConfig$Runtime as unknown as MessageType<IsoEnvBalloonConfig>;
(IsoEnvBalloonConfig as MutableMessageType<IsoEnvBalloonConfig>).runtime = proto3;
(IsoEnvBalloonConfig as MutableMessageType<IsoEnvBalloonConfig>).typeName = "anyrun.v1.IsoEnvBalloonConfig";
(IsoEnvBalloonConfig as MutableMessageType<IsoEnvBalloonConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "amount_mib",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "deflate_on_oom",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "stats_polling_interval_s", kind: "scalar", T: 13, opt: true }
]);
var IsoEnvConfig$Runtime = (() => class _IsoEnvConfig extends Message<_IsoEnvConfig> {
  declare vcpuCount: number;
  declare memSizeMib: number;
  declare swapSizeMib?: number;
  declare rootfsSizeMib?: number;
  declare extraDrives: IsoEnvExtraDriveConfig[];
  declare balloon?: IsoEnvBalloonConfig;
  declare firecrackerVersion: FirecrackerVersion;
  constructor(data?: PartialMessage<_IsoEnvConfig>) {
    super();
    this.vcpuCount = 0;
    this.memSizeMib = 0;
    this.extraDrives = [];
    this.firecrackerVersion = FirecrackerVersion.UNSPECIFIED;
    proto3.util.initPartial(data, this as _IsoEnvConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsoEnvConfig {
    return new _IsoEnvConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsoEnvConfig {
    return new _IsoEnvConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsoEnvConfig {
    return new _IsoEnvConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _IsoEnvConfig | PlainMessage<_IsoEnvConfig> | undefined | null, b2: _IsoEnvConfig | PlainMessage<_IsoEnvConfig> | undefined | null): boolean {
    return proto3.util.equals(_IsoEnvConfig as unknown as MessageType<_IsoEnvConfig>, a, b2);
  }
})();
export type IsoEnvConfig = InstanceType<typeof IsoEnvConfig$Runtime>;
var IsoEnvConfig: MessageType<IsoEnvConfig> = IsoEnvConfig$Runtime as unknown as MessageType<IsoEnvConfig>;
(IsoEnvConfig as MutableMessageType<IsoEnvConfig>).runtime = proto3;
(IsoEnvConfig as MutableMessageType<IsoEnvConfig>).typeName = "anyrun.v1.IsoEnvConfig";
(IsoEnvConfig as MutableMessageType<IsoEnvConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "vcpu_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "mem_size_mib",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 3, name: "swap_size_mib", kind: "scalar", T: 13, opt: true },
  { no: 4, name: "rootfs_size_mib", kind: "scalar", T: 13, opt: true },
  { no: 5, name: "extra_drives", kind: "message", T: IsoEnvExtraDriveConfig, repeated: true },
  { no: 6, name: "balloon", kind: "message", T: IsoEnvBalloonConfig, opt: true },
  { no: 7, name: "firecracker_version", kind: "enum", T: proto3.getEnumType(FirecrackerVersion) }
]);
var DockerDevContainerPersistentState$Runtime = (() => class _DockerDevContainerPersistentState extends Message<_DockerDevContainerPersistentState> {
  declare name: string;
  declare container?: DockerContainerPersistentState;
  declare runtimeState?: RuntimeStatePersistentState;
  declare imageMetadata?: ImageMetadata;
  declare networkInfo?: NetworkInfo;
  declare user?: string;
  declare shell: string;
  declare daemonPort: number;
  declare workspace?: WorkspaceConfig;
  declare v2Hydrated: boolean;
  declare podDaemonAuthToken?: string;
  constructor(data?: PartialMessage<_DockerDevContainerPersistentState>) {
    super();
    this.name = "";
    this.shell = "";
    this.daemonPort = 0;
    this.v2Hydrated = false;
    proto3.util.initPartial(data, this as _DockerDevContainerPersistentState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerDevContainerPersistentState {
    return new _DockerDevContainerPersistentState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerDevContainerPersistentState {
    return new _DockerDevContainerPersistentState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerDevContainerPersistentState {
    return new _DockerDevContainerPersistentState().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerDevContainerPersistentState | PlainMessage<_DockerDevContainerPersistentState> | undefined | null, b2: _DockerDevContainerPersistentState | PlainMessage<_DockerDevContainerPersistentState> | undefined | null): boolean {
    return proto3.util.equals(_DockerDevContainerPersistentState as unknown as MessageType<_DockerDevContainerPersistentState>, a, b2);
  }
})();
export type DockerDevContainerPersistentState = InstanceType<typeof DockerDevContainerPersistentState$Runtime>;
var DockerDevContainerPersistentState: MessageType<DockerDevContainerPersistentState> = DockerDevContainerPersistentState$Runtime as unknown as MessageType<DockerDevContainerPersistentState>;
(DockerDevContainerPersistentState as MutableMessageType<DockerDevContainerPersistentState>).runtime = proto3;
(DockerDevContainerPersistentState as MutableMessageType<DockerDevContainerPersistentState>).typeName = "anyrun.v1.DockerDevContainerPersistentState";
(DockerDevContainerPersistentState as MutableMessageType<DockerDevContainerPersistentState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "container", kind: "message", T: DockerContainerPersistentState },
  { no: 3, name: "runtime_state", kind: "message", T: RuntimeStatePersistentState },
  { no: 4, name: "image_metadata", kind: "message", T: ImageMetadata },
  { no: 5, name: "network_info", kind: "message", T: NetworkInfo },
  { no: 6, name: "user", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "shell",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "daemon_port",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 9, name: "workspace", kind: "message", T: WorkspaceConfig },
  {
    no: 10,
    name: "v2_hydrated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 11, name: "pod_daemon_auth_token", kind: "scalar", T: 9, opt: true }
]);
var DockerContainerPersistentState$Runtime = (() => class _DockerContainerPersistentState extends Message<_DockerContainerPersistentState> {
  declare id: string;
  declare name: string;
  declare stopped: boolean;
  declare removed: boolean;
  declare leaked: boolean;
  declare postPauseUnpauseDelayMs?: bigint;
  declare isodContainerName?: string;
  constructor(data?: PartialMessage<_DockerContainerPersistentState>) {
    super();
    this.id = "";
    this.name = "";
    this.stopped = false;
    this.removed = false;
    this.leaked = false;
    proto3.util.initPartial(data, this as _DockerContainerPersistentState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerContainerPersistentState {
    return new _DockerContainerPersistentState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerContainerPersistentState {
    return new _DockerContainerPersistentState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerContainerPersistentState {
    return new _DockerContainerPersistentState().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerContainerPersistentState | PlainMessage<_DockerContainerPersistentState> | undefined | null, b2: _DockerContainerPersistentState | PlainMessage<_DockerContainerPersistentState> | undefined | null): boolean {
    return proto3.util.equals(_DockerContainerPersistentState as unknown as MessageType<_DockerContainerPersistentState>, a, b2);
  }
})();
export type DockerContainerPersistentState = InstanceType<typeof DockerContainerPersistentState$Runtime>;
var DockerContainerPersistentState: MessageType<DockerContainerPersistentState> = DockerContainerPersistentState$Runtime as unknown as MessageType<DockerContainerPersistentState>;
(DockerContainerPersistentState as MutableMessageType<DockerContainerPersistentState>).runtime = proto3;
(DockerContainerPersistentState as MutableMessageType<DockerContainerPersistentState>).typeName = "anyrun.v1.DockerContainerPersistentState";
(DockerContainerPersistentState as MutableMessageType<DockerContainerPersistentState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stopped",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "removed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "leaked",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "post_pause_unpause_delay_ms", kind: "scalar", T: 4, opt: true },
  { no: 8, name: "isod_container_name", kind: "scalar", T: 9, opt: true }
]);
var RuntimeStatePersistentState$Runtime = (() => class _RuntimeStatePersistentState extends Message<_RuntimeStatePersistentState> {
  declare commandHandlers: { [key: string]: DaemonCommandHandlerPersistentState };
  constructor(data?: PartialMessage<_RuntimeStatePersistentState>) {
    super();
    this.commandHandlers = {};
    proto3.util.initPartial(data, this as _RuntimeStatePersistentState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RuntimeStatePersistentState {
    return new _RuntimeStatePersistentState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RuntimeStatePersistentState {
    return new _RuntimeStatePersistentState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RuntimeStatePersistentState {
    return new _RuntimeStatePersistentState().fromJsonString(jsonString, options);
  }
  static equals(a: _RuntimeStatePersistentState | PlainMessage<_RuntimeStatePersistentState> | undefined | null, b2: _RuntimeStatePersistentState | PlainMessage<_RuntimeStatePersistentState> | undefined | null): boolean {
    return proto3.util.equals(_RuntimeStatePersistentState as unknown as MessageType<_RuntimeStatePersistentState>, a, b2);
  }
})();
export type RuntimeStatePersistentState = InstanceType<typeof RuntimeStatePersistentState$Runtime>;
var RuntimeStatePersistentState: MessageType<RuntimeStatePersistentState> = RuntimeStatePersistentState$Runtime as unknown as MessageType<RuntimeStatePersistentState>;
(RuntimeStatePersistentState as MutableMessageType<RuntimeStatePersistentState>).runtime = proto3;
(RuntimeStatePersistentState as MutableMessageType<RuntimeStatePersistentState>).typeName = "anyrun.v1.RuntimeStatePersistentState";
(RuntimeStatePersistentState as MutableMessageType<RuntimeStatePersistentState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "command_handlers", kind: "map", K: 9, V: { kind: "message", T: DaemonCommandHandlerPersistentState } }
]);
var DaemonCommandHandlerPersistentState$Runtime = (() => class _DaemonCommandHandlerPersistentState extends Message<_DaemonCommandHandlerPersistentState> {
  declare vpid: bigint;
  declare lastEventId?: string;
  constructor(data?: PartialMessage<_DaemonCommandHandlerPersistentState>) {
    super();
    this.vpid = protoInt64.zero;
    proto3.util.initPartial(data, this as _DaemonCommandHandlerPersistentState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DaemonCommandHandlerPersistentState {
    return new _DaemonCommandHandlerPersistentState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DaemonCommandHandlerPersistentState {
    return new _DaemonCommandHandlerPersistentState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DaemonCommandHandlerPersistentState {
    return new _DaemonCommandHandlerPersistentState().fromJsonString(jsonString, options);
  }
  static equals(a: _DaemonCommandHandlerPersistentState | PlainMessage<_DaemonCommandHandlerPersistentState> | undefined | null, b2: _DaemonCommandHandlerPersistentState | PlainMessage<_DaemonCommandHandlerPersistentState> | undefined | null): boolean {
    return proto3.util.equals(_DaemonCommandHandlerPersistentState as unknown as MessageType<_DaemonCommandHandlerPersistentState>, a, b2);
  }
})();
export type DaemonCommandHandlerPersistentState = InstanceType<typeof DaemonCommandHandlerPersistentState$Runtime>;
var DaemonCommandHandlerPersistentState: MessageType<DaemonCommandHandlerPersistentState> = DaemonCommandHandlerPersistentState$Runtime as unknown as MessageType<DaemonCommandHandlerPersistentState>;
(DaemonCommandHandlerPersistentState as MutableMessageType<DaemonCommandHandlerPersistentState>).runtime = proto3;
(DaemonCommandHandlerPersistentState as MutableMessageType<DaemonCommandHandlerPersistentState>).typeName = "anyrun.v1.DaemonCommandHandlerPersistentState";
(DaemonCommandHandlerPersistentState as MutableMessageType<DaemonCommandHandlerPersistentState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "vpid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "last_event_id", kind: "scalar", T: 9, opt: true }
]);
var NetworkInfo$Runtime = (() => class _NetworkInfo extends Message<_NetworkInfo> {
  declare ipAddress: string;
  constructor(data?: PartialMessage<_NetworkInfo>) {
    super();
    this.ipAddress = "";
    proto3.util.initPartial(data, this as _NetworkInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NetworkInfo {
    return new _NetworkInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NetworkInfo {
    return new _NetworkInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NetworkInfo {
    return new _NetworkInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _NetworkInfo | PlainMessage<_NetworkInfo> | undefined | null, b2: _NetworkInfo | PlainMessage<_NetworkInfo> | undefined | null): boolean {
    return proto3.util.equals(_NetworkInfo as unknown as MessageType<_NetworkInfo>, a, b2);
  }
})();
export type NetworkInfo = InstanceType<typeof NetworkInfo$Runtime>;
var NetworkInfo: MessageType<NetworkInfo> = NetworkInfo$Runtime as unknown as MessageType<NetworkInfo>;
(NetworkInfo as MutableMessageType<NetworkInfo>).runtime = proto3;
(NetworkInfo as MutableMessageType<NetworkInfo>).typeName = "anyrun.v1.NetworkInfo";
(NetworkInfo as MutableMessageType<NetworkInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "ip_address",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WorkspaceConfig$Runtime = (() => class _WorkspaceConfig extends Message<_WorkspaceConfig> {
  declare config: { case: "absolute"; value: string } | { case: "workdirRelative"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WorkspaceConfig>) {
    super();
    this.config = { case: void 0 };
    proto3.util.initPartial(data, this as _WorkspaceConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WorkspaceConfig {
    return new _WorkspaceConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WorkspaceConfig {
    return new _WorkspaceConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WorkspaceConfig {
    return new _WorkspaceConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _WorkspaceConfig | PlainMessage<_WorkspaceConfig> | undefined | null, b2: _WorkspaceConfig | PlainMessage<_WorkspaceConfig> | undefined | null): boolean {
    return proto3.util.equals(_WorkspaceConfig as unknown as MessageType<_WorkspaceConfig>, a, b2);
  }
})();
export type WorkspaceConfig = InstanceType<typeof WorkspaceConfig$Runtime>;
var WorkspaceConfig: MessageType<WorkspaceConfig> = WorkspaceConfig$Runtime as unknown as MessageType<WorkspaceConfig>;
(WorkspaceConfig as MutableMessageType<WorkspaceConfig>).runtime = proto3;
(WorkspaceConfig as MutableMessageType<WorkspaceConfig>).typeName = "anyrun.v1.WorkspaceConfig";
(WorkspaceConfig as MutableMessageType<WorkspaceConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "absolute", kind: "scalar", T: 9, oneof: "config" },
  { no: 2, name: "workdir_relative", kind: "scalar", T: 9, oneof: "config" }
]);


export { IsoEnvExtraDrivePurpose, PersistedGitRepoSource, PersistedTarRepoSource, PersistedLocalRepoSource, PersistedTarGzipUrlSource, PersistedNoopSource, PersistedMultiSourceEntry, PersistedMultiSource, PersistedExternalSnapshot, PersistedEnvVar, PersistedDevContainerConfig, IsoDevContainerMetadata, PersistedDriveDescriptor, PersistedFileDriveDescriptor, PersistedLazySquashfsDriveDescriptor, PersistedLazySnapshotSource, PersistedLazyCheckpointSource, IsoEnvExtraDriveConfig, IsoEnvBalloonConfig, IsoEnvConfig, DockerDevContainerPersistentState, DockerContainerPersistentState, RuntimeStatePersistentState, DaemonCommandHandlerPersistentState, NetworkInfo, WorkspaceConfig };
