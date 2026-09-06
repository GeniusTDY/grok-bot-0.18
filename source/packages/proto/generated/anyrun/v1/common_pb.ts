/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:411444-413270
 * Region SHA-256: 9f4d5212aae7cb75eeb8c3b5566bd8534eb3398f3770944111970ce4232b2cb5
 * BackgroundComposer closure exports: 42 messages + 12 enums = 54
 */
import { Message, proto3, protoInt64, Empty, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ProcessSupervision } from "./pod_daemon_pb.js";
import { PodErrorEvent, BuildStepStarted, BuildStatusLine, InternalBuildMessage } from "./pod_event_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type DrainingReason = 0 | 1 | 2 | 3 | 4 | 5;
var DrainingReason: {
  "UNSPECIFIED": 0;
  "CAPACITY": 1;
  "UPGRADE": 2;
  "MANUAL": 3;
  "HEALTH": 4;
  "RETIREMENT": 5;
  0: "UNSPECIFIED";
  1: "CAPACITY";
  2: "UPGRADE";
  3: "MANUAL";
  4: "HEALTH";
  5: "RETIREMENT";
};
export type UploadPriority = 0 | 1 | 2 | 3;
var UploadPriority: {
  "UNSPECIFIED": 0;
  "P0": 1;
  "P1": 2;
  "P2": 3;
  0: "UNSPECIFIED";
  1: "P0";
  2: "P1";
  3: "P2";
};
export type WorkspaceGitSetupMode = 0 | 1 | 2 | 3;
var WorkspaceGitSetupMode: {
  "UNSPECIFIED": 0;
  "REUSE": 1;
  "REUSE_THEN_CHECKOUT": 2;
  "NO_REPO": 3;
  0: "UNSPECIFIED";
  1: "REUSE";
  2: "REUSE_THEN_CHECKOUT";
  3: "NO_REPO";
};
export type WarmForkMode = 0 | 1 | 2 | 3 | 4 | 5;
var WarmForkMode: {
  "UNSPECIFIED": 0;
  "NONE": 1;
  "FORKED": 2;
  "COLD_FALLBACK": 3;
  "LAZY_LOAD": 4;
  "COLD_FALLBACK_LAZY_LOAD": 5;
  0: "UNSPECIFIED";
  1: "NONE";
  2: "FORKED";
  3: "COLD_FALLBACK";
  4: "LAZY_LOAD";
  5: "COLD_FALLBACK_LAZY_LOAD";
};
export type EnvironmentBuildResolution = 0 | 1 | 2 | 3;
var EnvironmentBuildResolution: {
  "UNSPECIFIED": 0;
  "RESOLVED": 1;
  "NO_FINISHED_BUILDS": 2;
  "NO_HEALTHY_BUILDS": 3;
  0: "UNSPECIFIED";
  1: "RESOLVED";
  2: "NO_FINISHED_BUILDS";
  3: "NO_HEALTHY_BUILDS";
};
export type ContainerRuntime = 0 | 1 | 2;
var ContainerRuntime: {
  "DOCKERD_UNSPECIFIED": 0;
  "ISOD_RUNC": 1;
  "WINDOWS_GUEST": 2;
  0: "DOCKERD_UNSPECIFIED";
  1: "ISOD_RUNC";
  2: "WINDOWS_GUEST";
};
export type FirecrackerVersion = 0 | 1 | 2;
var FirecrackerVersion: {
  "UNSPECIFIED": 0;
  "V1_12_1": 1;
  "V1_16_1": 2;
  0: "UNSPECIFIED";
  1: "V1_12_1";
  2: "V1_16_1";
};
export type BlobStorageFormat = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
var BlobStorageFormat: {
  "LEGACY_UNSPECIFIED": 0;
  "V1": 1;
  "VM_SNAPSHOT_V1": 2;
  "V2": 3;
  "V2_LAYERED": 4;
  "V3": 5;
  "VM_SNAPSHOT_V2": 6;
  "V4": 7;
  0: "LEGACY_UNSPECIFIED";
  1: "V1";
  2: "VM_SNAPSHOT_V1";
  3: "V2";
  4: "V2_LAYERED";
  5: "V3";
  6: "VM_SNAPSHOT_V2";
  7: "V4";
};
export type RootArchiveFormat = 0 | 1 | 2 | 3;
var RootArchiveFormat: {
  "UNSPECIFIED": 0;
  "EXT4": 1;
  "SQUASHFS": 2;
  "EROFS": 3;
  0: "UNSPECIFIED";
  1: "EXT4";
  2: "SQUASHFS";
  3: "EROFS";
};
export type RootArchiveCompressionAlgorithm = 0 | 1;
var RootArchiveCompressionAlgorithm: {
  "NONE": 0;
  "ZSTD": 1;
  0: "NONE";
  1: "ZSTD";
};
export type DevContainerConfig_RegistryReferenceAlias = 0 | 1;
var DevContainerConfig_RegistryReferenceAlias: {
  "UNSPECIFIED": 0;
  "BUILDER": 1;
  0: "UNSPECIFIED";
  1: "BUILDER";
};
export type ScmConfig_AuthMethod = 0 | 1 | 2;
var ScmConfig_AuthMethod: {
  "UNSPECIFIED": 0;
  "BASIC": 1;
  "BEARER": 2;
  0: "UNSPECIFIED";
  1: "BASIC";
  2: "BEARER";
};
(function(DrainingReason2) {
  DrainingReason2[DrainingReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DrainingReason2[DrainingReason2["CAPACITY"] = 1] = "CAPACITY";
  DrainingReason2[DrainingReason2["UPGRADE"] = 2] = "UPGRADE";
  DrainingReason2[DrainingReason2["MANUAL"] = 3] = "MANUAL";
  DrainingReason2[DrainingReason2["HEALTH"] = 4] = "HEALTH";
  DrainingReason2[DrainingReason2["RETIREMENT"] = 5] = "RETIREMENT";
})(DrainingReason! || (DrainingReason = {} as typeof DrainingReason));
proto3.util.setEnumType(DrainingReason, "anyrun.v1.DrainingReason", [
  { no: 0, name: "DRAINING_REASON_UNSPECIFIED" },
  { no: 1, name: "DRAINING_REASON_CAPACITY" },
  { no: 2, name: "DRAINING_REASON_UPGRADE" },
  { no: 3, name: "DRAINING_REASON_MANUAL" },
  { no: 4, name: "DRAINING_REASON_HEALTH" },
  { no: 5, name: "DRAINING_REASON_RETIREMENT" }
]);
(function(UploadPriority2) {
  UploadPriority2[UploadPriority2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UploadPriority2[UploadPriority2["P0"] = 1] = "P0";
  UploadPriority2[UploadPriority2["P1"] = 2] = "P1";
  UploadPriority2[UploadPriority2["P2"] = 3] = "P2";
})(UploadPriority! || (UploadPriority = {} as typeof UploadPriority));
proto3.util.setEnumType(UploadPriority, "anyrun.v1.UploadPriority", [
  { no: 0, name: "UPLOAD_PRIORITY_UNSPECIFIED" },
  { no: 1, name: "UPLOAD_PRIORITY_P0" },
  { no: 2, name: "UPLOAD_PRIORITY_P1" },
  { no: 3, name: "UPLOAD_PRIORITY_P2" }
]);
(function(WorkspaceGitSetupMode2) {
  WorkspaceGitSetupMode2[WorkspaceGitSetupMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WorkspaceGitSetupMode2[WorkspaceGitSetupMode2["REUSE"] = 1] = "REUSE";
  WorkspaceGitSetupMode2[WorkspaceGitSetupMode2["REUSE_THEN_CHECKOUT"] = 2] = "REUSE_THEN_CHECKOUT";
  WorkspaceGitSetupMode2[WorkspaceGitSetupMode2["NO_REPO"] = 3] = "NO_REPO";
})(WorkspaceGitSetupMode! || (WorkspaceGitSetupMode = {} as typeof WorkspaceGitSetupMode));
proto3.util.setEnumType(WorkspaceGitSetupMode, "anyrun.v1.WorkspaceGitSetupMode", [
  { no: 0, name: "WORKSPACE_GIT_SETUP_MODE_UNSPECIFIED" },
  { no: 1, name: "WORKSPACE_GIT_SETUP_MODE_REUSE" },
  { no: 2, name: "WORKSPACE_GIT_SETUP_MODE_REUSE_THEN_CHECKOUT" },
  { no: 3, name: "WORKSPACE_GIT_SETUP_MODE_NO_REPO" }
]);
(function(WarmForkMode2) {
  WarmForkMode2[WarmForkMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WarmForkMode2[WarmForkMode2["NONE"] = 1] = "NONE";
  WarmForkMode2[WarmForkMode2["FORKED"] = 2] = "FORKED";
  WarmForkMode2[WarmForkMode2["COLD_FALLBACK"] = 3] = "COLD_FALLBACK";
  WarmForkMode2[WarmForkMode2["LAZY_LOAD"] = 4] = "LAZY_LOAD";
  WarmForkMode2[WarmForkMode2["COLD_FALLBACK_LAZY_LOAD"] = 5] = "COLD_FALLBACK_LAZY_LOAD";
})(WarmForkMode! || (WarmForkMode = {} as typeof WarmForkMode));
proto3.util.setEnumType(WarmForkMode, "anyrun.v1.WarmForkMode", [
  { no: 0, name: "WARM_FORK_MODE_UNSPECIFIED" },
  { no: 1, name: "WARM_FORK_MODE_NONE" },
  { no: 2, name: "WARM_FORK_MODE_FORKED" },
  { no: 3, name: "WARM_FORK_MODE_COLD_FALLBACK" },
  { no: 4, name: "WARM_FORK_MODE_LAZY_LOAD" },
  { no: 5, name: "WARM_FORK_MODE_COLD_FALLBACK_LAZY_LOAD" }
]);
(function(EnvironmentBuildResolution2) {
  EnvironmentBuildResolution2[EnvironmentBuildResolution2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EnvironmentBuildResolution2[EnvironmentBuildResolution2["RESOLVED"] = 1] = "RESOLVED";
  EnvironmentBuildResolution2[EnvironmentBuildResolution2["NO_FINISHED_BUILDS"] = 2] = "NO_FINISHED_BUILDS";
  EnvironmentBuildResolution2[EnvironmentBuildResolution2["NO_HEALTHY_BUILDS"] = 3] = "NO_HEALTHY_BUILDS";
})(EnvironmentBuildResolution! || (EnvironmentBuildResolution = {} as typeof EnvironmentBuildResolution));
proto3.util.setEnumType(EnvironmentBuildResolution, "anyrun.v1.EnvironmentBuildResolution", [
  { no: 0, name: "ENVIRONMENT_BUILD_RESOLUTION_UNSPECIFIED" },
  { no: 1, name: "ENVIRONMENT_BUILD_RESOLUTION_RESOLVED" },
  { no: 2, name: "ENVIRONMENT_BUILD_RESOLUTION_NO_FINISHED_BUILDS" },
  { no: 3, name: "ENVIRONMENT_BUILD_RESOLUTION_NO_HEALTHY_BUILDS" }
]);
(function(ContainerRuntime2) {
  ContainerRuntime2[ContainerRuntime2["DOCKERD_UNSPECIFIED"] = 0] = "DOCKERD_UNSPECIFIED";
  ContainerRuntime2[ContainerRuntime2["ISOD_RUNC"] = 1] = "ISOD_RUNC";
  ContainerRuntime2[ContainerRuntime2["WINDOWS_GUEST"] = 2] = "WINDOWS_GUEST";
})(ContainerRuntime! || (ContainerRuntime = {} as typeof ContainerRuntime));
proto3.util.setEnumType(ContainerRuntime, "anyrun.v1.ContainerRuntime", [
  { no: 0, name: "CONTAINER_RUNTIME_DOCKERD_UNSPECIFIED" },
  { no: 1, name: "CONTAINER_RUNTIME_ISOD_RUNC" },
  { no: 2, name: "CONTAINER_RUNTIME_WINDOWS_GUEST" }
]);
(function(FirecrackerVersion2) {
  FirecrackerVersion2[FirecrackerVersion2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FirecrackerVersion2[FirecrackerVersion2["V1_12_1"] = 1] = "V1_12_1";
  FirecrackerVersion2[FirecrackerVersion2["V1_16_1"] = 2] = "V1_16_1";
})(FirecrackerVersion! || (FirecrackerVersion = {} as typeof FirecrackerVersion));
proto3.util.setEnumType(FirecrackerVersion, "anyrun.v1.FirecrackerVersion", [
  { no: 0, name: "FIRECRACKER_VERSION_UNSPECIFIED" },
  { no: 1, name: "FIRECRACKER_VERSION_V1_12_1" },
  { no: 2, name: "FIRECRACKER_VERSION_V1_16_1" }
]);
(function(BlobStorageFormat2) {
  BlobStorageFormat2[BlobStorageFormat2["LEGACY_UNSPECIFIED"] = 0] = "LEGACY_UNSPECIFIED";
  BlobStorageFormat2[BlobStorageFormat2["V1"] = 1] = "V1";
  BlobStorageFormat2[BlobStorageFormat2["VM_SNAPSHOT_V1"] = 2] = "VM_SNAPSHOT_V1";
  BlobStorageFormat2[BlobStorageFormat2["V2"] = 3] = "V2";
  BlobStorageFormat2[BlobStorageFormat2["V2_LAYERED"] = 4] = "V2_LAYERED";
  BlobStorageFormat2[BlobStorageFormat2["V3"] = 5] = "V3";
  BlobStorageFormat2[BlobStorageFormat2["VM_SNAPSHOT_V2"] = 6] = "VM_SNAPSHOT_V2";
  BlobStorageFormat2[BlobStorageFormat2["V4"] = 7] = "V4";
})(BlobStorageFormat! || (BlobStorageFormat = {} as typeof BlobStorageFormat));
proto3.util.setEnumType(BlobStorageFormat, "anyrun.v1.BlobStorageFormat", [
  { no: 0, name: "BLOB_STORAGE_FORMAT_LEGACY_UNSPECIFIED" },
  { no: 1, name: "BLOB_STORAGE_FORMAT_V1" },
  { no: 2, name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V1" },
  { no: 3, name: "BLOB_STORAGE_FORMAT_V2" },
  { no: 4, name: "BLOB_STORAGE_FORMAT_V2_LAYERED" },
  { no: 5, name: "BLOB_STORAGE_FORMAT_V3" },
  { no: 6, name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V2" },
  { no: 7, name: "BLOB_STORAGE_FORMAT_V4" }
]);
(function(RootArchiveFormat2) {
  RootArchiveFormat2[RootArchiveFormat2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RootArchiveFormat2[RootArchiveFormat2["EXT4"] = 1] = "EXT4";
  RootArchiveFormat2[RootArchiveFormat2["SQUASHFS"] = 2] = "SQUASHFS";
  RootArchiveFormat2[RootArchiveFormat2["EROFS"] = 3] = "EROFS";
})(RootArchiveFormat! || (RootArchiveFormat = {} as typeof RootArchiveFormat));
proto3.util.setEnumType(RootArchiveFormat, "anyrun.v1.RootArchiveFormat", [
  { no: 0, name: "ROOT_ARCHIVE_FORMAT_UNSPECIFIED" },
  { no: 1, name: "ROOT_ARCHIVE_FORMAT_EXT4" },
  { no: 2, name: "ROOT_ARCHIVE_FORMAT_SQUASHFS" },
  { no: 3, name: "ROOT_ARCHIVE_FORMAT_EROFS" }
]);
(function(RootArchiveCompressionAlgorithm2) {
  RootArchiveCompressionAlgorithm2[RootArchiveCompressionAlgorithm2["NONE"] = 0] = "NONE";
  RootArchiveCompressionAlgorithm2[RootArchiveCompressionAlgorithm2["ZSTD"] = 1] = "ZSTD";
})(RootArchiveCompressionAlgorithm! || (RootArchiveCompressionAlgorithm = {} as typeof RootArchiveCompressionAlgorithm));
proto3.util.setEnumType(RootArchiveCompressionAlgorithm, "anyrun.v1.RootArchiveCompressionAlgorithm", [
  { no: 0, name: "ROOT_ARCHIVE_COMPRESSION_ALGORITHM_NONE" },
  { no: 1, name: "ROOT_ARCHIVE_COMPRESSION_ALGORITHM_ZSTD" }
]);
var ImageMetadata$Runtime = (() => class _ImageMetadata extends Message<_ImageMetadata> {
  declare user?: string;
  declare env: { [key: string]: string };
  declare workingDir?: string;
  declare arch?: string;
  constructor(data?: PartialMessage<_ImageMetadata>) {
    super();
    this.env = {};
    proto3.util.initPartial(data, this as _ImageMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageMetadata {
    return new _ImageMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageMetadata {
    return new _ImageMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageMetadata {
    return new _ImageMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageMetadata | PlainMessage<_ImageMetadata> | undefined | null, b2: _ImageMetadata | PlainMessage<_ImageMetadata> | undefined | null): boolean {
    return proto3.util.equals(_ImageMetadata as unknown as MessageType<_ImageMetadata>, a, b2);
  }
})();
export type ImageMetadata = InstanceType<typeof ImageMetadata$Runtime>;
var ImageMetadata: MessageType<ImageMetadata> = ImageMetadata$Runtime as unknown as MessageType<ImageMetadata>;
(ImageMetadata as MutableMessageType<ImageMetadata>).runtime = proto3;
(ImageMetadata as MutableMessageType<ImageMetadata>).typeName = "anyrun.v1.ImageMetadata";
(ImageMetadata as MutableMessageType<ImageMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "env", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 3, name: "working_dir", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "arch", kind: "scalar", T: 9, opt: true }
]);
var PortDefinition$Runtime = (() => class _PortDefinition extends Message<_PortDefinition> {
  declare name: string;
  declare port: number;
  declare visibility: { case: "public"; value: Empty } | { case: "private"; value: Empty } | { case: undefined; value?: undefined };
  declare authentication: { case: "open"; value: Empty } | { case: "token"; value: Empty } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PortDefinition>) {
    super();
    this.name = "";
    this.port = 0;
    this.visibility = { case: void 0 };
    this.authentication = { case: void 0 };
    proto3.util.initPartial(data, this as _PortDefinition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PortDefinition {
    return new _PortDefinition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PortDefinition {
    return new _PortDefinition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PortDefinition {
    return new _PortDefinition().fromJsonString(jsonString, options);
  }
  static equals(a: _PortDefinition | PlainMessage<_PortDefinition> | undefined | null, b2: _PortDefinition | PlainMessage<_PortDefinition> | undefined | null): boolean {
    return proto3.util.equals(_PortDefinition as unknown as MessageType<_PortDefinition>, a, b2);
  }
})();
export type PortDefinition = InstanceType<typeof PortDefinition$Runtime>;
var PortDefinition: MessageType<PortDefinition> = PortDefinition$Runtime as unknown as MessageType<PortDefinition>;
(PortDefinition as MutableMessageType<PortDefinition>).runtime = proto3;
(PortDefinition as MutableMessageType<PortDefinition>).typeName = "anyrun.v1.PortDefinition";
(PortDefinition as MutableMessageType<PortDefinition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "port",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 3, name: "public", kind: "message", T: Empty, oneof: "visibility" },
  { no: 4, name: "private", kind: "message", T: Empty, oneof: "visibility" },
  { no: 5, name: "open", kind: "message", T: Empty, oneof: "authentication" },
  { no: 6, name: "token", kind: "message", T: Empty, oneof: "authentication" }
]);
var DefaultPortConfig$Runtime = (() => class _DefaultPortConfig extends Message<_DefaultPortConfig> {
  declare visibility: { case: "public"; value: Empty } | { case: "private"; value: Empty } | { case: undefined; value?: undefined };
  declare authentication: { case: "open"; value: Empty } | { case: "token"; value: Empty } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DefaultPortConfig>) {
    super();
    this.visibility = { case: void 0 };
    this.authentication = { case: void 0 };
    proto3.util.initPartial(data, this as _DefaultPortConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DefaultPortConfig {
    return new _DefaultPortConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DefaultPortConfig {
    return new _DefaultPortConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DefaultPortConfig {
    return new _DefaultPortConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _DefaultPortConfig | PlainMessage<_DefaultPortConfig> | undefined | null, b2: _DefaultPortConfig | PlainMessage<_DefaultPortConfig> | undefined | null): boolean {
    return proto3.util.equals(_DefaultPortConfig as unknown as MessageType<_DefaultPortConfig>, a, b2);
  }
})();
export type DefaultPortConfig = InstanceType<typeof DefaultPortConfig$Runtime>;
var DefaultPortConfig: MessageType<DefaultPortConfig> = DefaultPortConfig$Runtime as unknown as MessageType<DefaultPortConfig>;
(DefaultPortConfig as MutableMessageType<DefaultPortConfig>).runtime = proto3;
(DefaultPortConfig as MutableMessageType<DefaultPortConfig>).typeName = "anyrun.v1.DefaultPortConfig";
(DefaultPortConfig as MutableMessageType<DefaultPortConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "public", kind: "message", T: Empty, oneof: "visibility" },
  { no: 2, name: "private", kind: "message", T: Empty, oneof: "visibility" },
  { no: 3, name: "open", kind: "message", T: Empty, oneof: "authentication" },
  { no: 4, name: "token", kind: "message", T: Empty, oneof: "authentication" }
]);
var DevContainerExecCommand$Runtime = (() => class _DevContainerExecCommand extends Message<_DevContainerExecCommand> {
  declare name: string;
  declare user?: string;
  declare command: string;
  declare isSystem: boolean;
  declare cacheKey?: string;
  declare failureTolerant: boolean;
  declare dependsOn: string[];
  declare dependsOnGitCheckout: boolean;
  declare supervision?: ProcessSupervision;
  declare ignoreFailureForInstallHealth: boolean;
  constructor(data?: PartialMessage<_DevContainerExecCommand>) {
    super();
    this.name = "";
    this.command = "";
    this.isSystem = false;
    this.failureTolerant = false;
    this.dependsOn = [];
    this.dependsOnGitCheckout = false;
    this.ignoreFailureForInstallHealth = false;
    proto3.util.initPartial(data, this as _DevContainerExecCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DevContainerExecCommand {
    return new _DevContainerExecCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DevContainerExecCommand {
    return new _DevContainerExecCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DevContainerExecCommand {
    return new _DevContainerExecCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _DevContainerExecCommand | PlainMessage<_DevContainerExecCommand> | undefined | null, b2: _DevContainerExecCommand | PlainMessage<_DevContainerExecCommand> | undefined | null): boolean {
    return proto3.util.equals(_DevContainerExecCommand as unknown as MessageType<_DevContainerExecCommand>, a, b2);
  }
})();
export type DevContainerExecCommand = InstanceType<typeof DevContainerExecCommand$Runtime>;
var DevContainerExecCommand: MessageType<DevContainerExecCommand> = DevContainerExecCommand$Runtime as unknown as MessageType<DevContainerExecCommand>;
(DevContainerExecCommand as MutableMessageType<DevContainerExecCommand>).runtime = proto3;
(DevContainerExecCommand as MutableMessageType<DevContainerExecCommand>).typeName = "anyrun.v1.DevContainerExecCommand";
(DevContainerExecCommand as MutableMessageType<DevContainerExecCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "user", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_system",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "cache_key", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "failure_tolerant",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "depends_on", kind: "scalar", T: 9, repeated: true },
  {
    no: 8,
    name: "depends_on_git_checkout",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 9, name: "supervision", kind: "message", T: ProcessSupervision, opt: true },
  {
    no: 10,
    name: "ignore_failure_for_install_health",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ResourceRequests$Runtime = (() => class _ResourceRequests extends Message<_ResourceRequests> {
  declare cpuMcores: bigint;
  declare memoryMb: bigint;
  declare diskMb: bigint;
  declare gpuCount: bigint;
  constructor(data?: PartialMessage<_ResourceRequests>) {
    super();
    this.cpuMcores = protoInt64.zero;
    this.memoryMb = protoInt64.zero;
    this.diskMb = protoInt64.zero;
    this.gpuCount = protoInt64.zero;
    proto3.util.initPartial(data, this as _ResourceRequests);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResourceRequests {
    return new _ResourceRequests().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResourceRequests {
    return new _ResourceRequests().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResourceRequests {
    return new _ResourceRequests().fromJsonString(jsonString, options);
  }
  static equals(a: _ResourceRequests | PlainMessage<_ResourceRequests> | undefined | null, b2: _ResourceRequests | PlainMessage<_ResourceRequests> | undefined | null): boolean {
    return proto3.util.equals(_ResourceRequests as unknown as MessageType<_ResourceRequests>, a, b2);
  }
})();
export type ResourceRequests = InstanceType<typeof ResourceRequests$Runtime>;
var ResourceRequests: MessageType<ResourceRequests> = ResourceRequests$Runtime as unknown as MessageType<ResourceRequests>;
(ResourceRequests as MutableMessageType<ResourceRequests>).runtime = proto3;
(ResourceRequests as MutableMessageType<ResourceRequests>).typeName = "anyrun.v1.ResourceRequests";
(ResourceRequests as MutableMessageType<ResourceRequests>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cpu_mcores",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "memory_mb",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "disk_mb",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 4,
    name: "gpu_count",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var ResourceLimits$Runtime = (() => class _ResourceLimits extends Message<_ResourceLimits> {
  declare cpuMcores?: bigint;
  declare memoryMb?: bigint;
  declare diskMb?: bigint;
  declare swapMb?: bigint;
  constructor(data?: PartialMessage<_ResourceLimits>) {
    super();
    proto3.util.initPartial(data, this as _ResourceLimits);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResourceLimits {
    return new _ResourceLimits().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResourceLimits {
    return new _ResourceLimits().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResourceLimits {
    return new _ResourceLimits().fromJsonString(jsonString, options);
  }
  static equals(a: _ResourceLimits | PlainMessage<_ResourceLimits> | undefined | null, b2: _ResourceLimits | PlainMessage<_ResourceLimits> | undefined | null): boolean {
    return proto3.util.equals(_ResourceLimits as unknown as MessageType<_ResourceLimits>, a, b2);
  }
})();
export type ResourceLimits = InstanceType<typeof ResourceLimits$Runtime>;
var ResourceLimits: MessageType<ResourceLimits> = ResourceLimits$Runtime as unknown as MessageType<ResourceLimits>;
(ResourceLimits as MutableMessageType<ResourceLimits>).runtime = proto3;
(ResourceLimits as MutableMessageType<ResourceLimits>).typeName = "anyrun.v1.ResourceLimits";
(ResourceLimits as MutableMessageType<ResourceLimits>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpu_mcores", kind: "scalar", T: 4, opt: true },
  { no: 2, name: "memory_mb", kind: "scalar", T: 4, opt: true },
  { no: 3, name: "disk_mb", kind: "scalar", T: 4, opt: true },
  { no: 4, name: "swap_mb", kind: "scalar", T: 4, opt: true }
]);
var SnapshotUsageStats$Runtime = (() => class _SnapshotUsageStats extends Message<_SnapshotUsageStats> {
  declare maxMemoryBytes: bigint;
  declare avgCpuMcores: bigint;
  declare sampleCount: number;
  declare lastUpdatedTimestamp: bigint;
  declare maxCacheAdjustedMemoryBytes?: bigint;
  declare cacheAdjustedSampleCount: number;
  constructor(data?: PartialMessage<_SnapshotUsageStats>) {
    super();
    this.maxMemoryBytes = protoInt64.zero;
    this.avgCpuMcores = protoInt64.zero;
    this.sampleCount = 0;
    this.lastUpdatedTimestamp = protoInt64.zero;
    this.cacheAdjustedSampleCount = 0;
    proto3.util.initPartial(data, this as _SnapshotUsageStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SnapshotUsageStats {
    return new _SnapshotUsageStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SnapshotUsageStats {
    return new _SnapshotUsageStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SnapshotUsageStats {
    return new _SnapshotUsageStats().fromJsonString(jsonString, options);
  }
  static equals(a: _SnapshotUsageStats | PlainMessage<_SnapshotUsageStats> | undefined | null, b2: _SnapshotUsageStats | PlainMessage<_SnapshotUsageStats> | undefined | null): boolean {
    return proto3.util.equals(_SnapshotUsageStats as unknown as MessageType<_SnapshotUsageStats>, a, b2);
  }
})();
export type SnapshotUsageStats = InstanceType<typeof SnapshotUsageStats$Runtime>;
var SnapshotUsageStats: MessageType<SnapshotUsageStats> = SnapshotUsageStats$Runtime as unknown as MessageType<SnapshotUsageStats>;
(SnapshotUsageStats as MutableMessageType<SnapshotUsageStats>).runtime = proto3;
(SnapshotUsageStats as MutableMessageType<SnapshotUsageStats>).typeName = "anyrun.v1.SnapshotUsageStats";
(SnapshotUsageStats as MutableMessageType<SnapshotUsageStats>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "max_memory_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "avg_cpu_mcores",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "sample_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "last_updated_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 5, name: "max_cache_adjusted_memory_bytes", kind: "scalar", T: 4, opt: true },
  {
    no: 6,
    name: "cache_adjusted_sample_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var DiskUsage$Runtime = (() => class _DiskUsage extends Message<_DiskUsage> {
  declare bytesUsed: bigint;
  declare bytesTotal: bigint;
  declare busyPercentage?: number;
  constructor(data?: PartialMessage<_DiskUsage>) {
    super();
    this.bytesUsed = protoInt64.zero;
    this.bytesTotal = protoInt64.zero;
    proto3.util.initPartial(data, this as _DiskUsage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiskUsage {
    return new _DiskUsage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiskUsage {
    return new _DiskUsage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiskUsage {
    return new _DiskUsage().fromJsonString(jsonString, options);
  }
  static equals(a: _DiskUsage | PlainMessage<_DiskUsage> | undefined | null, b2: _DiskUsage | PlainMessage<_DiskUsage> | undefined | null): boolean {
    return proto3.util.equals(_DiskUsage as unknown as MessageType<_DiskUsage>, a, b2);
  }
})();
export type DiskUsage = InstanceType<typeof DiskUsage$Runtime>;
var DiskUsage: MessageType<DiskUsage> = DiskUsage$Runtime as unknown as MessageType<DiskUsage>;
(DiskUsage as MutableMessageType<DiskUsage>).runtime = proto3;
(DiskUsage as MutableMessageType<DiskUsage>).typeName = "anyrun.v1.DiskUsage";
(DiskUsage as MutableMessageType<DiskUsage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bytes_used",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "bytes_total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 3, name: "busy_percentage", kind: "scalar", T: 1, opt: true }
]);
var MemoryUsage$Runtime = (() => class _MemoryUsage extends Message<_MemoryUsage> {
  declare bytesUsed: bigint;
  declare bytesTotal: bigint;
  declare collectedAtTimestamp: bigint;
  constructor(data?: PartialMessage<_MemoryUsage>) {
    super();
    this.bytesUsed = protoInt64.zero;
    this.bytesTotal = protoInt64.zero;
    this.collectedAtTimestamp = protoInt64.zero;
    proto3.util.initPartial(data, this as _MemoryUsage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MemoryUsage {
    return new _MemoryUsage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MemoryUsage {
    return new _MemoryUsage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MemoryUsage {
    return new _MemoryUsage().fromJsonString(jsonString, options);
  }
  static equals(a: _MemoryUsage | PlainMessage<_MemoryUsage> | undefined | null, b2: _MemoryUsage | PlainMessage<_MemoryUsage> | undefined | null): boolean {
    return proto3.util.equals(_MemoryUsage as unknown as MessageType<_MemoryUsage>, a, b2);
  }
})();
export type MemoryUsage = InstanceType<typeof MemoryUsage$Runtime>;
var MemoryUsage: MessageType<MemoryUsage> = MemoryUsage$Runtime as unknown as MessageType<MemoryUsage>;
(MemoryUsage as MutableMessageType<MemoryUsage>).runtime = proto3;
(MemoryUsage as MutableMessageType<MemoryUsage>).typeName = "anyrun.v1.MemoryUsage";
(MemoryUsage as MutableMessageType<MemoryUsage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bytes_used",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "bytes_total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "collected_at_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var EnvironmentBuildBootInfo$Runtime = (() => class _EnvironmentBuildBootInfo extends Message<_EnvironmentBuildBootInfo> {
  declare buildId?: string;
  declare snapshotId: string;
  declare workspaceGitSetupMode: WorkspaceGitSetupMode;
  declare warmForkMode: WarmForkMode;
  declare fastForwardDefaultBranch: boolean;
  declare resolution: EnvironmentBuildResolution;
  declare defaultImageFallback: boolean;
  constructor(data?: PartialMessage<_EnvironmentBuildBootInfo>) {
    super();
    this.snapshotId = "";
    this.workspaceGitSetupMode = WorkspaceGitSetupMode.UNSPECIFIED;
    this.warmForkMode = WarmForkMode.UNSPECIFIED;
    this.fastForwardDefaultBranch = false;
    this.resolution = EnvironmentBuildResolution.UNSPECIFIED;
    this.defaultImageFallback = false;
    proto3.util.initPartial(data, this as _EnvironmentBuildBootInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnvironmentBuildBootInfo {
    return new _EnvironmentBuildBootInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnvironmentBuildBootInfo {
    return new _EnvironmentBuildBootInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnvironmentBuildBootInfo {
    return new _EnvironmentBuildBootInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _EnvironmentBuildBootInfo | PlainMessage<_EnvironmentBuildBootInfo> | undefined | null, b2: _EnvironmentBuildBootInfo | PlainMessage<_EnvironmentBuildBootInfo> | undefined | null): boolean {
    return proto3.util.equals(_EnvironmentBuildBootInfo as unknown as MessageType<_EnvironmentBuildBootInfo>, a, b2);
  }
})();
export type EnvironmentBuildBootInfo = InstanceType<typeof EnvironmentBuildBootInfo$Runtime>;
var EnvironmentBuildBootInfo: MessageType<EnvironmentBuildBootInfo> = EnvironmentBuildBootInfo$Runtime as unknown as MessageType<EnvironmentBuildBootInfo>;
(EnvironmentBuildBootInfo as MutableMessageType<EnvironmentBuildBootInfo>).runtime = proto3;
(EnvironmentBuildBootInfo as MutableMessageType<EnvironmentBuildBootInfo>).typeName = "anyrun.v1.EnvironmentBuildBootInfo";
(EnvironmentBuildBootInfo as MutableMessageType<EnvironmentBuildBootInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "build_id", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "snapshot_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "workspace_git_setup_mode", kind: "enum", T: proto3.getEnumType(WorkspaceGitSetupMode) },
  { no: 4, name: "warm_fork_mode", kind: "enum", T: proto3.getEnumType(WarmForkMode) },
  {
    no: 5,
    name: "fast_forward_default_branch",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "resolution", kind: "enum", T: proto3.getEnumType(EnvironmentBuildResolution) },
  {
    no: 7,
    name: "default_image_fallback",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitRepoSourceReference$Runtime = (() => class _GitRepoSourceReference extends Message<_GitRepoSourceReference> {
  declare cacheUri: string;
  declare checkoutUri: string;
  declare commitHash: Uint8Array;
  declare httpProxy: string;
  declare mtlsCertPem?: string;
  declare mtlsKeyPem?: string;
  constructor(data?: PartialMessage<_GitRepoSourceReference>) {
    super();
    this.cacheUri = "";
    this.checkoutUri = "";
    this.commitHash = new Uint8Array(0);
    this.httpProxy = "";
    proto3.util.initPartial(data, this as _GitRepoSourceReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitRepoSourceReference {
    return new _GitRepoSourceReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitRepoSourceReference {
    return new _GitRepoSourceReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitRepoSourceReference {
    return new _GitRepoSourceReference().fromJsonString(jsonString, options);
  }
  static equals(a: _GitRepoSourceReference | PlainMessage<_GitRepoSourceReference> | undefined | null, b2: _GitRepoSourceReference | PlainMessage<_GitRepoSourceReference> | undefined | null): boolean {
    return proto3.util.equals(_GitRepoSourceReference as unknown as MessageType<_GitRepoSourceReference>, a, b2);
  }
})();
export type GitRepoSourceReference = InstanceType<typeof GitRepoSourceReference$Runtime>;
var GitRepoSourceReference: MessageType<GitRepoSourceReference> = GitRepoSourceReference$Runtime as unknown as MessageType<GitRepoSourceReference>;
(GitRepoSourceReference as MutableMessageType<GitRepoSourceReference>).runtime = proto3;
(GitRepoSourceReference as MutableMessageType<GitRepoSourceReference>).typeName = "anyrun.v1.GitRepoSourceReference";
(GitRepoSourceReference as MutableMessageType<GitRepoSourceReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cache_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "checkout_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "commit_hash",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 5,
    name: "http_proxy",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "mtls_cert_pem", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "mtls_key_pem", kind: "scalar", T: 9, opt: true }
]);
var TarRepoSourceReference$Runtime = (() => class _TarRepoSourceReference extends Message<_TarRepoSourceReference> {
  declare name: string;
  declare tarArchive: Uint8Array;
  constructor(data?: PartialMessage<_TarRepoSourceReference>) {
    super();
    this.name = "";
    this.tarArchive = new Uint8Array(0);
    proto3.util.initPartial(data, this as _TarRepoSourceReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TarRepoSourceReference {
    return new _TarRepoSourceReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TarRepoSourceReference {
    return new _TarRepoSourceReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TarRepoSourceReference {
    return new _TarRepoSourceReference().fromJsonString(jsonString, options);
  }
  static equals(a: _TarRepoSourceReference | PlainMessage<_TarRepoSourceReference> | undefined | null, b2: _TarRepoSourceReference | PlainMessage<_TarRepoSourceReference> | undefined | null): boolean {
    return proto3.util.equals(_TarRepoSourceReference as unknown as MessageType<_TarRepoSourceReference>, a, b2);
  }
})();
export type TarRepoSourceReference = InstanceType<typeof TarRepoSourceReference$Runtime>;
var TarRepoSourceReference: MessageType<TarRepoSourceReference> = TarRepoSourceReference$Runtime as unknown as MessageType<TarRepoSourceReference>;
(TarRepoSourceReference as MutableMessageType<TarRepoSourceReference>).runtime = proto3;
(TarRepoSourceReference as MutableMessageType<TarRepoSourceReference>).typeName = "anyrun.v1.TarRepoSourceReference";
(TarRepoSourceReference as MutableMessageType<TarRepoSourceReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tar_archive",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var LocalDirectoryReference$Runtime = (() => class _LocalDirectoryReference extends Message<_LocalDirectoryReference> {
  declare path: string;
  constructor(data?: PartialMessage<_LocalDirectoryReference>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _LocalDirectoryReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LocalDirectoryReference {
    return new _LocalDirectoryReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LocalDirectoryReference {
    return new _LocalDirectoryReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LocalDirectoryReference {
    return new _LocalDirectoryReference().fromJsonString(jsonString, options);
  }
  static equals(a: _LocalDirectoryReference | PlainMessage<_LocalDirectoryReference> | undefined | null, b2: _LocalDirectoryReference | PlainMessage<_LocalDirectoryReference> | undefined | null): boolean {
    return proto3.util.equals(_LocalDirectoryReference as unknown as MessageType<_LocalDirectoryReference>, a, b2);
  }
})();
export type LocalDirectoryReference = InstanceType<typeof LocalDirectoryReference$Runtime>;
var LocalDirectoryReference: MessageType<LocalDirectoryReference> = LocalDirectoryReference$Runtime as unknown as MessageType<LocalDirectoryReference>;
(LocalDirectoryReference as MutableMessageType<LocalDirectoryReference>).runtime = proto3;
(LocalDirectoryReference as MutableMessageType<LocalDirectoryReference>).typeName = "anyrun.v1.LocalDirectoryReference";
(LocalDirectoryReference as MutableMessageType<LocalDirectoryReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TarGzipUrlSourceReference$Runtime = (() => class _TarGzipUrlSourceReference extends Message<_TarGzipUrlSourceReference> {
  declare name: string;
  declare url: string;
  constructor(data?: PartialMessage<_TarGzipUrlSourceReference>) {
    super();
    this.name = "";
    this.url = "";
    proto3.util.initPartial(data, this as _TarGzipUrlSourceReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TarGzipUrlSourceReference {
    return new _TarGzipUrlSourceReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TarGzipUrlSourceReference {
    return new _TarGzipUrlSourceReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TarGzipUrlSourceReference {
    return new _TarGzipUrlSourceReference().fromJsonString(jsonString, options);
  }
  static equals(a: _TarGzipUrlSourceReference | PlainMessage<_TarGzipUrlSourceReference> | undefined | null, b2: _TarGzipUrlSourceReference | PlainMessage<_TarGzipUrlSourceReference> | undefined | null): boolean {
    return proto3.util.equals(_TarGzipUrlSourceReference as unknown as MessageType<_TarGzipUrlSourceReference>, a, b2);
  }
})();
export type TarGzipUrlSourceReference = InstanceType<typeof TarGzipUrlSourceReference$Runtime>;
var TarGzipUrlSourceReference: MessageType<TarGzipUrlSourceReference> = TarGzipUrlSourceReference$Runtime as unknown as MessageType<TarGzipUrlSourceReference>;
(TarGzipUrlSourceReference as MutableMessageType<TarGzipUrlSourceReference>).runtime = proto3;
(TarGzipUrlSourceReference as MutableMessageType<TarGzipUrlSourceReference>).typeName = "anyrun.v1.TarGzipUrlSourceReference";
(TarGzipUrlSourceReference as MutableMessageType<TarGzipUrlSourceReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  }
]);
var NoopSourceReference$Runtime = (() => class _NoopSourceReference extends Message<_NoopSourceReference> {
  constructor(data?: PartialMessage<_NoopSourceReference>) {
    super();
    proto3.util.initPartial(data, this as _NoopSourceReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NoopSourceReference {
    return new _NoopSourceReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NoopSourceReference {
    return new _NoopSourceReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NoopSourceReference {
    return new _NoopSourceReference().fromJsonString(jsonString, options);
  }
  static equals(a: _NoopSourceReference | PlainMessage<_NoopSourceReference> | undefined | null, b2: _NoopSourceReference | PlainMessage<_NoopSourceReference> | undefined | null): boolean {
    return proto3.util.equals(_NoopSourceReference as unknown as MessageType<_NoopSourceReference>, a, b2);
  }
})();
export type NoopSourceReference = InstanceType<typeof NoopSourceReference$Runtime>;
var NoopSourceReference: MessageType<NoopSourceReference> = NoopSourceReference$Runtime as unknown as MessageType<NoopSourceReference>;
(NoopSourceReference as MutableMessageType<NoopSourceReference>).runtime = proto3;
(NoopSourceReference as MutableMessageType<NoopSourceReference>).typeName = "anyrun.v1.NoopSourceReference";
(NoopSourceReference as MutableMessageType<NoopSourceReference>).fields = proto3.util.newFieldList(() => []);
var MultiSourceEntry$Runtime = (() => class _MultiSourceEntry extends Message<_MultiSourceEntry> {
  declare relativePath: string;
  declare source: { case: "git"; value: GitRepoSourceReference } | { case: "tar"; value: TarRepoSourceReference } | { case: "local"; value: LocalDirectoryReference } | { case: "tarGzipUrl"; value: TarGzipUrlSourceReference } | { case: "noop"; value: NoopSourceReference } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_MultiSourceEntry>) {
    super();
    this.relativePath = "";
    this.source = { case: void 0 };
    proto3.util.initPartial(data, this as _MultiSourceEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MultiSourceEntry {
    return new _MultiSourceEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MultiSourceEntry {
    return new _MultiSourceEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MultiSourceEntry {
    return new _MultiSourceEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _MultiSourceEntry | PlainMessage<_MultiSourceEntry> | undefined | null, b2: _MultiSourceEntry | PlainMessage<_MultiSourceEntry> | undefined | null): boolean {
    return proto3.util.equals(_MultiSourceEntry as unknown as MessageType<_MultiSourceEntry>, a, b2);
  }
})();
export type MultiSourceEntry = InstanceType<typeof MultiSourceEntry$Runtime>;
var MultiSourceEntry: MessageType<MultiSourceEntry> = MultiSourceEntry$Runtime as unknown as MessageType<MultiSourceEntry>;
(MultiSourceEntry as MutableMessageType<MultiSourceEntry>).runtime = proto3;
(MultiSourceEntry as MutableMessageType<MultiSourceEntry>).typeName = "anyrun.v1.MultiSourceEntry";
(MultiSourceEntry as MutableMessageType<MultiSourceEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "git", kind: "message", T: GitRepoSourceReference, oneof: "source" },
  { no: 3, name: "tar", kind: "message", T: TarRepoSourceReference, oneof: "source" },
  { no: 4, name: "local", kind: "message", T: LocalDirectoryReference, oneof: "source" },
  { no: 5, name: "tar_gzip_url", kind: "message", T: TarGzipUrlSourceReference, oneof: "source" },
  { no: 6, name: "noop", kind: "message", T: NoopSourceReference, oneof: "source" }
]);
var MultiSourceReference$Runtime = (() => class _MultiSourceReference extends Message<_MultiSourceReference> {
  declare sources: MultiSourceEntry[];
  constructor(data?: PartialMessage<_MultiSourceReference>) {
    super();
    this.sources = [];
    proto3.util.initPartial(data, this as _MultiSourceReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MultiSourceReference {
    return new _MultiSourceReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MultiSourceReference {
    return new _MultiSourceReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MultiSourceReference {
    return new _MultiSourceReference().fromJsonString(jsonString, options);
  }
  static equals(a: _MultiSourceReference | PlainMessage<_MultiSourceReference> | undefined | null, b2: _MultiSourceReference | PlainMessage<_MultiSourceReference> | undefined | null): boolean {
    return proto3.util.equals(_MultiSourceReference as unknown as MessageType<_MultiSourceReference>, a, b2);
  }
})();
export type MultiSourceReference = InstanceType<typeof MultiSourceReference$Runtime>;
var MultiSourceReference: MessageType<MultiSourceReference> = MultiSourceReference$Runtime as unknown as MessageType<MultiSourceReference>;
(MultiSourceReference as MutableMessageType<MultiSourceReference>).runtime = proto3;
(MultiSourceReference as MutableMessageType<MultiSourceReference>).typeName = "anyrun.v1.MultiSourceReference";
(MultiSourceReference as MutableMessageType<MultiSourceReference>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "sources", kind: "message", T: MultiSourceEntry, repeated: true }
]);
var AnygressPodDenyRule$Runtime = (() => class _AnygressPodDenyRule extends Message<_AnygressPodDenyRule> {
  declare verb: string;
  declare path: string;
  constructor(data?: PartialMessage<_AnygressPodDenyRule>) {
    super();
    this.verb = "";
    this.path = "";
    proto3.util.initPartial(data, this as _AnygressPodDenyRule);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnygressPodDenyRule {
    return new _AnygressPodDenyRule().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnygressPodDenyRule {
    return new _AnygressPodDenyRule().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnygressPodDenyRule {
    return new _AnygressPodDenyRule().fromJsonString(jsonString, options);
  }
  static equals(a: _AnygressPodDenyRule | PlainMessage<_AnygressPodDenyRule> | undefined | null, b2: _AnygressPodDenyRule | PlainMessage<_AnygressPodDenyRule> | undefined | null): boolean {
    return proto3.util.equals(_AnygressPodDenyRule as unknown as MessageType<_AnygressPodDenyRule>, a, b2);
  }
})();
export type AnygressPodDenyRule = InstanceType<typeof AnygressPodDenyRule$Runtime>;
var AnygressPodDenyRule: MessageType<AnygressPodDenyRule> = AnygressPodDenyRule$Runtime as unknown as MessageType<AnygressPodDenyRule>;
(AnygressPodDenyRule as MutableMessageType<AnygressPodDenyRule>).runtime = proto3;
(AnygressPodDenyRule as MutableMessageType<AnygressPodDenyRule>).typeName = "anyrun.v1.AnygressPodDenyRule";
(AnygressPodDenyRule as MutableMessageType<AnygressPodDenyRule>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "verb",
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
  }
]);
var AnygressPodDenyRuleList$Runtime = (() => class _AnygressPodDenyRuleList extends Message<_AnygressPodDenyRuleList> {
  declare rules: AnygressPodDenyRule[];
  constructor(data?: PartialMessage<_AnygressPodDenyRuleList>) {
    super();
    this.rules = [];
    proto3.util.initPartial(data, this as _AnygressPodDenyRuleList);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnygressPodDenyRuleList {
    return new _AnygressPodDenyRuleList().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnygressPodDenyRuleList {
    return new _AnygressPodDenyRuleList().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnygressPodDenyRuleList {
    return new _AnygressPodDenyRuleList().fromJsonString(jsonString, options);
  }
  static equals(a: _AnygressPodDenyRuleList | PlainMessage<_AnygressPodDenyRuleList> | undefined | null, b2: _AnygressPodDenyRuleList | PlainMessage<_AnygressPodDenyRuleList> | undefined | null): boolean {
    return proto3.util.equals(_AnygressPodDenyRuleList as unknown as MessageType<_AnygressPodDenyRuleList>, a, b2);
  }
})();
export type AnygressPodDenyRuleList = InstanceType<typeof AnygressPodDenyRuleList$Runtime>;
var AnygressPodDenyRuleList: MessageType<AnygressPodDenyRuleList> = AnygressPodDenyRuleList$Runtime as unknown as MessageType<AnygressPodDenyRuleList>;
(AnygressPodDenyRuleList as MutableMessageType<AnygressPodDenyRuleList>).runtime = proto3;
(AnygressPodDenyRuleList as MutableMessageType<AnygressPodDenyRuleList>).typeName = "anyrun.v1.AnygressPodDenyRuleList";
(AnygressPodDenyRuleList as MutableMessageType<AnygressPodDenyRuleList>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rules", kind: "message", T: AnygressPodDenyRule, repeated: true }
]);
var AnygressPerPodDenyRules$Runtime = (() => class _AnygressPerPodDenyRules extends Message<_AnygressPerPodDenyRules> {
  declare denies: { [key: string]: AnygressPodDenyRuleList };
  constructor(data?: PartialMessage<_AnygressPerPodDenyRules>) {
    super();
    this.denies = {};
    proto3.util.initPartial(data, this as _AnygressPerPodDenyRules);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnygressPerPodDenyRules {
    return new _AnygressPerPodDenyRules().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnygressPerPodDenyRules {
    return new _AnygressPerPodDenyRules().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnygressPerPodDenyRules {
    return new _AnygressPerPodDenyRules().fromJsonString(jsonString, options);
  }
  static equals(a: _AnygressPerPodDenyRules | PlainMessage<_AnygressPerPodDenyRules> | undefined | null, b2: _AnygressPerPodDenyRules | PlainMessage<_AnygressPerPodDenyRules> | undefined | null): boolean {
    return proto3.util.equals(_AnygressPerPodDenyRules as unknown as MessageType<_AnygressPerPodDenyRules>, a, b2);
  }
})();
export type AnygressPerPodDenyRules = InstanceType<typeof AnygressPerPodDenyRules$Runtime>;
var AnygressPerPodDenyRules: MessageType<AnygressPerPodDenyRules> = AnygressPerPodDenyRules$Runtime as unknown as MessageType<AnygressPerPodDenyRules>;
(AnygressPerPodDenyRules as MutableMessageType<AnygressPerPodDenyRules>).runtime = proto3;
(AnygressPerPodDenyRules as MutableMessageType<AnygressPerPodDenyRules>).typeName = "anyrun.v1.AnygressPerPodDenyRules";
(AnygressPerPodDenyRules as MutableMessageType<AnygressPerPodDenyRules>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "denies", kind: "map", K: 9, V: { kind: "message", T: AnygressPodDenyRuleList } }
]);
var AnygressLocalPodDenyRules$Runtime = (() => class _AnygressLocalPodDenyRules extends Message<_AnygressLocalPodDenyRules> {
  declare version: number;
  declare podId: string;
  declare denyRules?: AnygressPerPodDenyRules;
  constructor(data?: PartialMessage<_AnygressLocalPodDenyRules>) {
    super();
    this.version = 0;
    this.podId = "";
    proto3.util.initPartial(data, this as _AnygressLocalPodDenyRules);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnygressLocalPodDenyRules {
    return new _AnygressLocalPodDenyRules().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnygressLocalPodDenyRules {
    return new _AnygressLocalPodDenyRules().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnygressLocalPodDenyRules {
    return new _AnygressLocalPodDenyRules().fromJsonString(jsonString, options);
  }
  static equals(a: _AnygressLocalPodDenyRules | PlainMessage<_AnygressLocalPodDenyRules> | undefined | null, b2: _AnygressLocalPodDenyRules | PlainMessage<_AnygressLocalPodDenyRules> | undefined | null): boolean {
    return proto3.util.equals(_AnygressLocalPodDenyRules as unknown as MessageType<_AnygressLocalPodDenyRules>, a, b2);
  }
})();
export type AnygressLocalPodDenyRules = InstanceType<typeof AnygressLocalPodDenyRules$Runtime>;
var AnygressLocalPodDenyRules: MessageType<AnygressLocalPodDenyRules> = AnygressLocalPodDenyRules$Runtime as unknown as MessageType<AnygressLocalPodDenyRules>;
(AnygressLocalPodDenyRules as MutableMessageType<AnygressLocalPodDenyRules>).runtime = proto3;
(AnygressLocalPodDenyRules as MutableMessageType<AnygressLocalPodDenyRules>).typeName = "anyrun.v1.AnygressLocalPodDenyRules";
(AnygressLocalPodDenyRules as MutableMessageType<AnygressLocalPodDenyRules>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "deny_rules", kind: "message", T: AnygressPerPodDenyRules }
]);
var DevContainerSpec$Runtime = (() => class _DevContainerSpec extends Message<_DevContainerSpec> {
  declare name: string;
  declare platform?: string;
  declare deletionTimestamp?: bigint;
  declare hibernationTimestamp?: bigint;
  declare podLabels: { [key: string]: string };
  declare nodeLabels: { [key: string]: string };
  declare lowCardinalityPodLabels: string[];
  declare requests?: ResourceRequests;
  declare hibernatedRequests?: ResourceRequests;
  declare limits?: ResourceLimits;
  declare cache?: boolean;
  declare enableBaseContainerCache?: boolean;
  declare enableCheckpointRead?: boolean;
  declare enableCheckpointWrite?: boolean;
  declare blobStorageFormat: BlobStorageFormat;
  declare cacheTag?: string;
  declare workload: string;
  declare config?: DevContainerConfig;
  declare persistConfig?: boolean;
  declare expectedForkCount?: number;
  declare egressPolicy?: EgressPolicy;
  declare anygressPerPodDenyRules?: AnygressPerPodDenyRules;
  declare antiAffinityTags?: AntiAffinityTags;
  declare enableLazyV3SquashfsSnapshotLoad?: boolean;
  declare v4RootArchiveOptions?: V4RootArchiveOptions;
  declare enableLazyV4Load?: boolean;
  constructor(data?: PartialMessage<_DevContainerSpec>) {
    super();
    this.name = "";
    this.podLabels = {};
    this.nodeLabels = {};
    this.lowCardinalityPodLabels = [];
    this.blobStorageFormat = BlobStorageFormat.LEGACY_UNSPECIFIED;
    this.workload = "";
    proto3.util.initPartial(data, this as _DevContainerSpec);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DevContainerSpec {
    return new _DevContainerSpec().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DevContainerSpec {
    return new _DevContainerSpec().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DevContainerSpec {
    return new _DevContainerSpec().fromJsonString(jsonString, options);
  }
  static equals(a: _DevContainerSpec | PlainMessage<_DevContainerSpec> | undefined | null, b2: _DevContainerSpec | PlainMessage<_DevContainerSpec> | undefined | null): boolean {
    return proto3.util.equals(_DevContainerSpec as unknown as MessageType<_DevContainerSpec>, a, b2);
  }
})();
export type DevContainerSpec = InstanceType<typeof DevContainerSpec$Runtime>;
var DevContainerSpec: MessageType<DevContainerSpec> = DevContainerSpec$Runtime as unknown as MessageType<DevContainerSpec>;
(DevContainerSpec as MutableMessageType<DevContainerSpec>).runtime = proto3;
(DevContainerSpec as MutableMessageType<DevContainerSpec>).typeName = "anyrun.v1.DevContainerSpec";
(DevContainerSpec as MutableMessageType<DevContainerSpec>).fields = proto3.util.newFieldList(() => [
  {
    no: 5,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 23, name: "platform", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "deletion_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 14, name: "hibernation_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 7, name: "pod_labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 8, name: "node_labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 27, name: "low_cardinality_pod_labels", kind: "scalar", T: 9, repeated: true },
  { no: 9, name: "requests", kind: "message", T: ResourceRequests },
  { no: 16, name: "hibernated_requests", kind: "message", T: ResourceRequests },
  { no: 10, name: "limits", kind: "message", T: ResourceLimits },
  { no: 13, name: "cache", kind: "scalar", T: 8, opt: true },
  { no: 20, name: "enable_base_container_cache", kind: "scalar", T: 8, opt: true },
  { no: 18, name: "enable_checkpoint_read", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "enable_checkpoint_write", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "blob_storage_format", kind: "enum", T: proto3.getEnumType(BlobStorageFormat) },
  { no: 15, name: "cache_tag", kind: "scalar", T: 9, opt: true },
  {
    no: 21,
    name: "workload",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 12, name: "config", kind: "message", T: DevContainerConfig },
  { no: 22, name: "persist_config", kind: "scalar", T: 8, opt: true },
  { no: 24, name: "expected_fork_count", kind: "scalar", T: 13, opt: true },
  { no: 26, name: "egress_policy", kind: "message", T: EgressPolicy, opt: true },
  { no: 28, name: "anygress_per_pod_deny_rules", kind: "message", T: AnygressPerPodDenyRules, opt: true },
  { no: 32, name: "anti_affinity_tags", kind: "message", T: AntiAffinityTags, opt: true },
  { no: 34, name: "enable_lazy_v3_squashfs_snapshot_load", kind: "scalar", T: 8, opt: true },
  { no: 35, name: "v4_root_archive_options", kind: "message", T: V4RootArchiveOptions, opt: true },
  { no: 36, name: "enable_lazy_v4_load", kind: "scalar", T: 8, opt: true }
]);
var AntiAffinityTags$Runtime = (() => class _AntiAffinityTags extends Message<_AntiAffinityTags> {
  declare tags: string[];
  constructor(data?: PartialMessage<_AntiAffinityTags>) {
    super();
    this.tags = [];
    proto3.util.initPartial(data, this as _AntiAffinityTags);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AntiAffinityTags {
    return new _AntiAffinityTags().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AntiAffinityTags {
    return new _AntiAffinityTags().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AntiAffinityTags {
    return new _AntiAffinityTags().fromJsonString(jsonString, options);
  }
  static equals(a: _AntiAffinityTags | PlainMessage<_AntiAffinityTags> | undefined | null, b2: _AntiAffinityTags | PlainMessage<_AntiAffinityTags> | undefined | null): boolean {
    return proto3.util.equals(_AntiAffinityTags as unknown as MessageType<_AntiAffinityTags>, a, b2);
  }
})();
export type AntiAffinityTags = InstanceType<typeof AntiAffinityTags$Runtime>;
var AntiAffinityTags: MessageType<AntiAffinityTags> = AntiAffinityTags$Runtime as unknown as MessageType<AntiAffinityTags>;
(AntiAffinityTags as MutableMessageType<AntiAffinityTags>).runtime = proto3;
(AntiAffinityTags as MutableMessageType<AntiAffinityTags>).typeName = "anyrun.v1.AntiAffinityTags";
(AntiAffinityTags as MutableMessageType<AntiAffinityTags>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tags", kind: "scalar", T: 9, repeated: true }
]);
var DevContainerEnv$Runtime = (() => class _DevContainerEnv extends Message<_DevContainerEnv> {
  declare name: string;
  declare valueHash?: string;
  declare value: { case: "inline"; value: string } | { case: "encrypted"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DevContainerEnv>) {
    super();
    this.name = "";
    this.value = { case: void 0 };
    proto3.util.initPartial(data, this as _DevContainerEnv);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DevContainerEnv {
    return new _DevContainerEnv().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DevContainerEnv {
    return new _DevContainerEnv().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DevContainerEnv {
    return new _DevContainerEnv().fromJsonString(jsonString, options);
  }
  static equals(a: _DevContainerEnv | PlainMessage<_DevContainerEnv> | undefined | null, b2: _DevContainerEnv | PlainMessage<_DevContainerEnv> | undefined | null): boolean {
    return proto3.util.equals(_DevContainerEnv as unknown as MessageType<_DevContainerEnv>, a, b2);
  }
})();
export type DevContainerEnv = InstanceType<typeof DevContainerEnv$Runtime>;
var DevContainerEnv: MessageType<DevContainerEnv> = DevContainerEnv$Runtime as unknown as MessageType<DevContainerEnv>;
(DevContainerEnv as MutableMessageType<DevContainerEnv>).runtime = proto3;
(DevContainerEnv as MutableMessageType<DevContainerEnv>).typeName = "anyrun.v1.DevContainerEnv";
(DevContainerEnv as MutableMessageType<DevContainerEnv>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "inline", kind: "scalar", T: 9, oneof: "value" },
  { no: 3, name: "encrypted", kind: "scalar", T: 9, oneof: "value" },
  { no: 4, name: "value_hash", kind: "scalar", T: 9, opt: true }
]);
var ExternalSnapshot$Runtime = (() => class _ExternalSnapshot extends Message<_ExternalSnapshot> {
  declare snapshotId: string;
  declare presignedUrl: string;
  declare imageMetadata?: ImageMetadata;
  declare blobStorageFormat: BlobStorageFormat;
  declare nodeMachineType?: string;
  declare cpuBaselineId?: string;
  declare usageStats?: SnapshotUsageStats;
  declare v4RootArchiveOptions?: V4RootArchiveOptions;
  constructor(data?: PartialMessage<_ExternalSnapshot>) {
    super();
    this.snapshotId = "";
    this.presignedUrl = "";
    this.blobStorageFormat = BlobStorageFormat.LEGACY_UNSPECIFIED;
    proto3.util.initPartial(data, this as _ExternalSnapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExternalSnapshot {
    return new _ExternalSnapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExternalSnapshot {
    return new _ExternalSnapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExternalSnapshot {
    return new _ExternalSnapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _ExternalSnapshot | PlainMessage<_ExternalSnapshot> | undefined | null, b2: _ExternalSnapshot | PlainMessage<_ExternalSnapshot> | undefined | null): boolean {
    return proto3.util.equals(_ExternalSnapshot as unknown as MessageType<_ExternalSnapshot>, a, b2);
  }
})();
export type ExternalSnapshot = InstanceType<typeof ExternalSnapshot$Runtime>;
var ExternalSnapshot: MessageType<ExternalSnapshot> = ExternalSnapshot$Runtime as unknown as MessageType<ExternalSnapshot>;
(ExternalSnapshot as MutableMessageType<ExternalSnapshot>).runtime = proto3;
(ExternalSnapshot as MutableMessageType<ExternalSnapshot>).typeName = "anyrun.v1.ExternalSnapshot";
(ExternalSnapshot as MutableMessageType<ExternalSnapshot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "snapshot_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "presigned_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "image_metadata", kind: "message", T: ImageMetadata },
  { no: 4, name: "blob_storage_format", kind: "enum", T: proto3.getEnumType(BlobStorageFormat) },
  { no: 5, name: "node_machine_type", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "cpu_baseline_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "usage_stats", kind: "message", T: SnapshotUsageStats, opt: true },
  { no: 8, name: "v4_root_archive_options", kind: "message", T: V4RootArchiveOptions, opt: true }
]);
var DockerArchiveImage$Runtime = (() => class _DockerArchiveImage extends Message<_DockerArchiveImage> {
  declare url: string;
  declare registryReference: string;
  constructor(data?: PartialMessage<_DockerArchiveImage>) {
    super();
    this.url = "";
    this.registryReference = "";
    proto3.util.initPartial(data, this as _DockerArchiveImage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerArchiveImage {
    return new _DockerArchiveImage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerArchiveImage {
    return new _DockerArchiveImage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerArchiveImage {
    return new _DockerArchiveImage().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerArchiveImage | PlainMessage<_DockerArchiveImage> | undefined | null, b2: _DockerArchiveImage | PlainMessage<_DockerArchiveImage> | undefined | null): boolean {
    return proto3.util.equals(_DockerArchiveImage as unknown as MessageType<_DockerArchiveImage>, a, b2);
  }
})();
export type DockerArchiveImage = InstanceType<typeof DockerArchiveImage$Runtime>;
var DockerArchiveImage: MessageType<DockerArchiveImage> = DockerArchiveImage$Runtime as unknown as MessageType<DockerArchiveImage>;
(DockerArchiveImage as MutableMessageType<DockerArchiveImage>).runtime = proto3;
(DockerArchiveImage as MutableMessageType<DockerArchiveImage>).typeName = "anyrun.v1.DockerArchiveImage";
(DockerArchiveImage as MutableMessageType<DockerArchiveImage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "registry_reference",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DevContainerConfig$Runtime = (() => class _DevContainerConfig extends Message<_DevContainerConfig> {
  declare prepareCommandsTag?: Uint8Array;
  declare prepareCommands: DevContainerExecCommand[];
  declare installCommandsTag?: Uint8Array;
  declare installCommands: DevContainerExecCommand[];
  declare verifyCommandsTag?: Uint8Array;
  declare verifyCommands: DevContainerExecCommand[];
  declare startCommandsTag?: Uint8Array;
  declare startCommands: DevContainerExecCommand[];
  declare ports: PortDefinition[];
  declare defaultPortConfig?: DefaultPortConfig;
  declare user?: string;
  declare env: DevContainerEnv[];
  declare shell: string;
  declare privileged?: boolean;
  declare buildContainer?: boolean;
  declare checkpointThresholdMs?: bigint;
  declare enableCgroupSubtreeControl?: boolean;
  declare enableCheckpointScratchDrive?: boolean;
  declare blobClientResilienceEnabled?: boolean;
  declare skipWorkspaceSourceCheckout?: boolean;
  declare containerRuntime: ContainerRuntime;
  declare firecrackerVersion: FirecrackerVersion;
  declare source: { case: "git"; value: GitRepoSourceReference } | { case: "tar"; value: TarRepoSourceReference } | { case: "local"; value: LocalDirectoryReference } | { case: "tarGzipUrl"; value: TarGzipUrlSourceReference } | { case: "noop"; value: NoopSourceReference } | { case: "multi"; value: MultiSourceReference } | { case: undefined; value?: undefined };
  declare image: { case: "registryReference"; value: string } | { case: "snapshotId"; value: string } | { case: "build"; value: Build } | { case: "externalSnapshot"; value: ExternalSnapshot } | { case: "checkpointGroupId"; value: string } | { case: "registryReferenceAlias"; value: DevContainerConfig_RegistryReferenceAlias } | { case: "inlineBuild"; value: InlineBuild } | { case: "dockerArchive"; value: DockerArchiveImage } | { case: undefined; value?: undefined };
  declare workspace: { case: "workspacePath"; value: string } | { case: "workdirRelativePath"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DevContainerConfig>) {
    super();
    this.source = { case: void 0 };
    this.image = { case: void 0 };
    this.workspace = { case: void 0 };
    this.prepareCommands = [];
    this.installCommands = [];
    this.verifyCommands = [];
    this.startCommands = [];
    this.ports = [];
    this.env = [];
    this.shell = "";
    this.containerRuntime = ContainerRuntime.DOCKERD_UNSPECIFIED;
    this.firecrackerVersion = FirecrackerVersion.UNSPECIFIED;
    proto3.util.initPartial(data, this as _DevContainerConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DevContainerConfig {
    return new _DevContainerConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DevContainerConfig {
    return new _DevContainerConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DevContainerConfig {
    return new _DevContainerConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _DevContainerConfig | PlainMessage<_DevContainerConfig> | undefined | null, b2: _DevContainerConfig | PlainMessage<_DevContainerConfig> | undefined | null): boolean {
    return proto3.util.equals(_DevContainerConfig as unknown as MessageType<_DevContainerConfig>, a, b2);
  }
})();
export type DevContainerConfig = InstanceType<typeof DevContainerConfig$Runtime>;
var DevContainerConfig: MessageType<DevContainerConfig> = DevContainerConfig$Runtime as unknown as MessageType<DevContainerConfig>;
(DevContainerConfig as MutableMessageType<DevContainerConfig>).runtime = proto3;
(DevContainerConfig as MutableMessageType<DevContainerConfig>).typeName = "anyrun.v1.DevContainerConfig";
(DevContainerConfig as MutableMessageType<DevContainerConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "git", kind: "message", T: GitRepoSourceReference, oneof: "source" },
  { no: 2, name: "tar", kind: "message", T: TarRepoSourceReference, oneof: "source" },
  { no: 15, name: "local", kind: "message", T: LocalDirectoryReference, oneof: "source" },
  { no: 16, name: "tar_gzip_url", kind: "message", T: TarGzipUrlSourceReference, oneof: "source" },
  { no: 22, name: "noop", kind: "message", T: NoopSourceReference, oneof: "source" },
  { no: 31, name: "multi", kind: "message", T: MultiSourceReference, oneof: "source" },
  { no: 4, name: "registry_reference", kind: "scalar", T: 9, oneof: "image" },
  { no: 5, name: "snapshot_id", kind: "scalar", T: 9, oneof: "image" },
  { no: 6, name: "build", kind: "message", T: Build, oneof: "image" },
  { no: 27, name: "external_snapshot", kind: "message", T: ExternalSnapshot, oneof: "image" },
  { no: 28, name: "checkpoint_group_id", kind: "scalar", T: 9, oneof: "image" },
  { no: 32, name: "registry_reference_alias", kind: "enum", T: proto3.getEnumType(DevContainerConfig_RegistryReferenceAlias), oneof: "image" },
  { no: 33, name: "inline_build", kind: "message", T: InlineBuild, oneof: "image" },
  { no: 38, name: "docker_archive", kind: "message", T: DockerArchiveImage, oneof: "image" },
  { no: 7, name: "workspace_path", kind: "scalar", T: 9, oneof: "workspace" },
  { no: 18, name: "workdir_relative_path", kind: "scalar", T: 9, oneof: "workspace" },
  { no: 19, name: "prepare_commands_tag", kind: "scalar", T: 12, opt: true },
  { no: 8, name: "prepare_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 20, name: "install_commands_tag", kind: "scalar", T: 12, opt: true },
  { no: 9, name: "install_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 24, name: "verify_commands_tag", kind: "scalar", T: 12, opt: true },
  { no: 25, name: "verify_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 21, name: "start_commands_tag", kind: "scalar", T: 12, opt: true },
  { no: 10, name: "start_commands", kind: "message", T: DevContainerExecCommand, repeated: true },
  { no: 11, name: "ports", kind: "message", T: PortDefinition, repeated: true },
  { no: 26, name: "default_port_config", kind: "message", T: DefaultPortConfig, opt: true },
  { no: 12, name: "user", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "env", kind: "message", T: DevContainerEnv, repeated: true },
  {
    no: 14,
    name: "shell",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 17, name: "privileged", kind: "scalar", T: 8, opt: true },
  { no: 29, name: "build_container", kind: "scalar", T: 8, opt: true },
  { no: 23, name: "checkpoint_threshold_ms", kind: "scalar", T: 4, opt: true },
  { no: 30, name: "enable_cgroup_subtree_control", kind: "scalar", T: 8, opt: true },
  { no: 34, name: "enable_checkpoint_scratch_drive", kind: "scalar", T: 8, opt: true },
  { no: 35, name: "blob_client_resilience_enabled", kind: "scalar", T: 8, opt: true },
  { no: 36, name: "skip_workspace_source_checkout", kind: "scalar", T: 8, opt: true },
  { no: 37, name: "container_runtime", kind: "enum", T: proto3.getEnumType(ContainerRuntime) },
  { no: 39, name: "firecracker_version", kind: "enum", T: proto3.getEnumType(FirecrackerVersion) }
]);
(function(DevContainerConfig_RegistryReferenceAlias2) {
  DevContainerConfig_RegistryReferenceAlias2[DevContainerConfig_RegistryReferenceAlias2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DevContainerConfig_RegistryReferenceAlias2[DevContainerConfig_RegistryReferenceAlias2["BUILDER"] = 1] = "BUILDER";
})(DevContainerConfig_RegistryReferenceAlias! || (DevContainerConfig_RegistryReferenceAlias = {} as typeof DevContainerConfig_RegistryReferenceAlias));
proto3.util.setEnumType(DevContainerConfig_RegistryReferenceAlias, "anyrun.v1.DevContainerConfig.RegistryReferenceAlias", [
  { no: 0, name: "REGISTRY_REFERENCE_ALIAS_UNSPECIFIED" },
  { no: 1, name: "REGISTRY_REFERENCE_ALIAS_BUILDER" }
]);
var Build$Runtime = (() => class _Build extends Message<_Build> {
  declare dockerfile: string;
  declare context: string;
  constructor(data?: PartialMessage<_Build>) {
    super();
    this.dockerfile = "";
    this.context = "";
    proto3.util.initPartial(data, this as _Build);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Build {
    return new _Build().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Build {
    return new _Build().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Build {
    return new _Build().fromJsonString(jsonString, options);
  }
  static equals(a: _Build | PlainMessage<_Build> | undefined | null, b2: _Build | PlainMessage<_Build> | undefined | null): boolean {
    return proto3.util.equals(_Build as unknown as MessageType<_Build>, a, b2);
  }
})();
export type Build = InstanceType<typeof Build$Runtime>;
var Build: MessageType<Build> = Build$Runtime as unknown as MessageType<Build>;
(Build as MutableMessageType<Build>).runtime = proto3;
(Build as MutableMessageType<Build>).typeName = "anyrun.v1.Build";
(Build as MutableMessageType<Build>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "dockerfile",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InlineBuild$Runtime = (() => class _InlineBuild extends Message<_InlineBuild> {
  declare dockerfileContents: string;
  declare context: string;
  constructor(data?: PartialMessage<_InlineBuild>) {
    super();
    this.dockerfileContents = "";
    this.context = "";
    proto3.util.initPartial(data, this as _InlineBuild);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InlineBuild {
    return new _InlineBuild().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InlineBuild {
    return new _InlineBuild().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InlineBuild {
    return new _InlineBuild().fromJsonString(jsonString, options);
  }
  static equals(a: _InlineBuild | PlainMessage<_InlineBuild> | undefined | null, b2: _InlineBuild | PlainMessage<_InlineBuild> | undefined | null): boolean {
    return proto3.util.equals(_InlineBuild as unknown as MessageType<_InlineBuild>, a, b2);
  }
})();
export type InlineBuild = InstanceType<typeof InlineBuild$Runtime>;
var InlineBuild: MessageType<InlineBuild> = InlineBuild$Runtime as unknown as MessageType<InlineBuild>;
(InlineBuild as MutableMessageType<InlineBuild>).runtime = proto3;
(InlineBuild as MutableMessageType<InlineBuild>).typeName = "anyrun.v1.InlineBuild";
(InlineBuild as MutableMessageType<InlineBuild>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "dockerfile_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DockerBuildSecretEntry$Runtime = (() => class _DockerBuildSecretEntry extends Message<_DockerBuildSecretEntry> {
  declare name: string;
  declare valueHash?: string;
  declare value: { case: "inline"; value: string } | { case: "encrypted"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DockerBuildSecretEntry>) {
    super();
    this.name = "";
    this.value = { case: void 0 };
    proto3.util.initPartial(data, this as _DockerBuildSecretEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerBuildSecretEntry {
    return new _DockerBuildSecretEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerBuildSecretEntry {
    return new _DockerBuildSecretEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerBuildSecretEntry {
    return new _DockerBuildSecretEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerBuildSecretEntry | PlainMessage<_DockerBuildSecretEntry> | undefined | null, b2: _DockerBuildSecretEntry | PlainMessage<_DockerBuildSecretEntry> | undefined | null): boolean {
    return proto3.util.equals(_DockerBuildSecretEntry as unknown as MessageType<_DockerBuildSecretEntry>, a, b2);
  }
})();
export type DockerBuildSecretEntry = InstanceType<typeof DockerBuildSecretEntry$Runtime>;
var DockerBuildSecretEntry: MessageType<DockerBuildSecretEntry> = DockerBuildSecretEntry$Runtime as unknown as MessageType<DockerBuildSecretEntry>;
(DockerBuildSecretEntry as MutableMessageType<DockerBuildSecretEntry>).runtime = proto3;
(DockerBuildSecretEntry as MutableMessageType<DockerBuildSecretEntry>).typeName = "anyrun.v1.DockerBuildSecretEntry";
(DockerBuildSecretEntry as MutableMessageType<DockerBuildSecretEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "inline", kind: "scalar", T: 9, oneof: "value" },
  { no: 3, name: "encrypted", kind: "scalar", T: 9, oneof: "value" },
  { no: 4, name: "value_hash", kind: "scalar", T: 9, opt: true }
]);
var DockerBuildConfig$Runtime = (() => class _DockerBuildConfig extends Message<_DockerBuildConfig> {
  declare dockerfile: string;
  declare context: string;
  declare user: string;
  declare registryCacheRef: string;
  declare cacheRegistryCredentials?: RegistryCredentials;
  declare buildSecrets: DockerBuildSecretEntry[];
  declare cacheFromRefs: string[];
  constructor(data?: PartialMessage<_DockerBuildConfig>) {
    super();
    this.dockerfile = "";
    this.context = "";
    this.user = "";
    this.registryCacheRef = "";
    this.buildSecrets = [];
    this.cacheFromRefs = [];
    proto3.util.initPartial(data, this as _DockerBuildConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerBuildConfig {
    return new _DockerBuildConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerBuildConfig {
    return new _DockerBuildConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerBuildConfig {
    return new _DockerBuildConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerBuildConfig | PlainMessage<_DockerBuildConfig> | undefined | null, b2: _DockerBuildConfig | PlainMessage<_DockerBuildConfig> | undefined | null): boolean {
    return proto3.util.equals(_DockerBuildConfig as unknown as MessageType<_DockerBuildConfig>, a, b2);
  }
})();
export type DockerBuildConfig = InstanceType<typeof DockerBuildConfig$Runtime>;
var DockerBuildConfig: MessageType<DockerBuildConfig> = DockerBuildConfig$Runtime as unknown as MessageType<DockerBuildConfig>;
(DockerBuildConfig as MutableMessageType<DockerBuildConfig>).runtime = proto3;
(DockerBuildConfig as MutableMessageType<DockerBuildConfig>).typeName = "anyrun.v1.DockerBuildConfig";
(DockerBuildConfig as MutableMessageType<DockerBuildConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "dockerfile",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "user",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "registry_cache_ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "cache_registry_credentials", kind: "message", T: RegistryCredentials },
  { no: 6, name: "build_secrets", kind: "message", T: DockerBuildSecretEntry, repeated: true },
  { no: 7, name: "cache_from_refs", kind: "scalar", T: 9, repeated: true }
]);
var RegistryCredentials$Runtime = (() => class _RegistryCredentials extends Message<_RegistryCredentials> {
  declare registryUrl: string;
  declare username: string;
  declare password: string;
  constructor(data?: PartialMessage<_RegistryCredentials>) {
    super();
    this.registryUrl = "";
    this.username = "";
    this.password = "";
    proto3.util.initPartial(data, this as _RegistryCredentials);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RegistryCredentials {
    return new _RegistryCredentials().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RegistryCredentials {
    return new _RegistryCredentials().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RegistryCredentials {
    return new _RegistryCredentials().fromJsonString(jsonString, options);
  }
  static equals(a: _RegistryCredentials | PlainMessage<_RegistryCredentials> | undefined | null, b2: _RegistryCredentials | PlainMessage<_RegistryCredentials> | undefined | null): boolean {
    return proto3.util.equals(_RegistryCredentials as unknown as MessageType<_RegistryCredentials>, a, b2);
  }
})();
export type RegistryCredentials = InstanceType<typeof RegistryCredentials$Runtime>;
var RegistryCredentials: MessageType<RegistryCredentials> = RegistryCredentials$Runtime as unknown as MessageType<RegistryCredentials>;
(RegistryCredentials as MutableMessageType<RegistryCredentials>).runtime = proto3;
(RegistryCredentials as MutableMessageType<RegistryCredentials>).typeName = "anyrun.v1.RegistryCredentials";
(RegistryCredentials as MutableMessageType<RegistryCredentials>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "registry_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "username",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "password",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DockerImageRef$Runtime = (() => class _DockerImageRef extends Message<_DockerImageRef> {
  declare registryReference: string;
  constructor(data?: PartialMessage<_DockerImageRef>) {
    super();
    this.registryReference = "";
    proto3.util.initPartial(data, this as _DockerImageRef);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerImageRef {
    return new _DockerImageRef().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerImageRef {
    return new _DockerImageRef().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerImageRef {
    return new _DockerImageRef().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerImageRef | PlainMessage<_DockerImageRef> | undefined | null, b2: _DockerImageRef | PlainMessage<_DockerImageRef> | undefined | null): boolean {
    return proto3.util.equals(_DockerImageRef as unknown as MessageType<_DockerImageRef>, a, b2);
  }
})();
export type DockerImageRef = InstanceType<typeof DockerImageRef$Runtime>;
var DockerImageRef: MessageType<DockerImageRef> = DockerImageRef$Runtime as unknown as MessageType<DockerImageRef>;
(DockerImageRef as MutableMessageType<DockerImageRef>).runtime = proto3;
(DockerImageRef as MutableMessageType<DockerImageRef>).typeName = "anyrun.v1.DockerImageRef";
(DockerImageRef as MutableMessageType<DockerImageRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "registry_reference",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DockerBuildResult$Runtime = (() => class _DockerBuildResult extends Message<_DockerBuildResult> {
  declare image?: DockerImageRef;
  constructor(data?: PartialMessage<_DockerBuildResult>) {
    super();
    proto3.util.initPartial(data, this as _DockerBuildResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerBuildResult {
    return new _DockerBuildResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerBuildResult {
    return new _DockerBuildResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerBuildResult {
    return new _DockerBuildResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerBuildResult | PlainMessage<_DockerBuildResult> | undefined | null, b2: _DockerBuildResult | PlainMessage<_DockerBuildResult> | undefined | null): boolean {
    return proto3.util.equals(_DockerBuildResult as unknown as MessageType<_DockerBuildResult>, a, b2);
  }
})();
export type DockerBuildResult = InstanceType<typeof DockerBuildResult$Runtime>;
var DockerBuildResult: MessageType<DockerBuildResult> = DockerBuildResult$Runtime as unknown as MessageType<DockerBuildResult>;
(DockerBuildResult as MutableMessageType<DockerBuildResult>).runtime = proto3;
(DockerBuildResult as MutableMessageType<DockerBuildResult>).typeName = "anyrun.v1.DockerBuildResult";
(DockerBuildResult as MutableMessageType<DockerBuildResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "image", kind: "message", T: DockerImageRef }
]);
var DockerImageBuildEvent$Runtime = (() => class _DockerImageBuildEvent extends Message<_DockerImageBuildEvent> {
  declare creationTimestamp: bigint;
  declare payload: { case: "queued"; value: Empty } | { case: "started"; value: Empty } | { case: "buildStatusMessage"; value: string } | { case: "buildStepStarted"; value: BuildStepStarted } | { case: "buildStatusLine"; value: BuildStatusLine } | { case: "internalBuildMessage"; value: InternalBuildMessage } | { case: "error"; value: PodErrorEvent } | { case: "completed"; value: DockerBuildResult } | { case: "buildExitCode"; value: number } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DockerImageBuildEvent>) {
    super();
    this.creationTimestamp = protoInt64.zero;
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _DockerImageBuildEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerImageBuildEvent {
    return new _DockerImageBuildEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerImageBuildEvent {
    return new _DockerImageBuildEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerImageBuildEvent {
    return new _DockerImageBuildEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerImageBuildEvent | PlainMessage<_DockerImageBuildEvent> | undefined | null, b2: _DockerImageBuildEvent | PlainMessage<_DockerImageBuildEvent> | undefined | null): boolean {
    return proto3.util.equals(_DockerImageBuildEvent as unknown as MessageType<_DockerImageBuildEvent>, a, b2);
  }
})();
export type DockerImageBuildEvent = InstanceType<typeof DockerImageBuildEvent$Runtime>;
var DockerImageBuildEvent: MessageType<DockerImageBuildEvent> = DockerImageBuildEvent$Runtime as unknown as MessageType<DockerImageBuildEvent>;
(DockerImageBuildEvent as MutableMessageType<DockerImageBuildEvent>).runtime = proto3;
(DockerImageBuildEvent as MutableMessageType<DockerImageBuildEvent>).typeName = "anyrun.v1.DockerImageBuildEvent";
(DockerImageBuildEvent as MutableMessageType<DockerImageBuildEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "creation_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 2, name: "queued", kind: "message", T: Empty, oneof: "payload" },
  { no: 3, name: "started", kind: "message", T: Empty, oneof: "payload" },
  { no: 4, name: "build_status_message", kind: "scalar", T: 9, oneof: "payload" },
  { no: 5, name: "build_step_started", kind: "message", T: BuildStepStarted, oneof: "payload" },
  { no: 6, name: "build_status_line", kind: "message", T: BuildStatusLine, oneof: "payload" },
  { no: 7, name: "internal_build_message", kind: "message", T: InternalBuildMessage, oneof: "payload" },
  { no: 8, name: "error", kind: "message", T: PodErrorEvent, oneof: "payload" },
  { no: 9, name: "completed", kind: "message", T: DockerBuildResult, oneof: "payload" },
  { no: 10, name: "build_exit_code", kind: "scalar", T: 5, oneof: "payload" }
]);
var EgressPolicy$Runtime = (() => class _EgressPolicy extends Message<_EgressPolicy> {
  declare scm: ScmConfig[];
  declare useScmEgressConfig: boolean;
  declare policy: { case: "allowAll"; value: Empty } | { case: "restricted"; value: EgressRestricted } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_EgressPolicy>) {
    super();
    this.policy = { case: void 0 };
    this.scm = [];
    this.useScmEgressConfig = false;
    proto3.util.initPartial(data, this as _EgressPolicy);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EgressPolicy {
    return new _EgressPolicy().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EgressPolicy {
    return new _EgressPolicy().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EgressPolicy {
    return new _EgressPolicy().fromJsonString(jsonString, options);
  }
  static equals(a: _EgressPolicy | PlainMessage<_EgressPolicy> | undefined | null, b2: _EgressPolicy | PlainMessage<_EgressPolicy> | undefined | null): boolean {
    return proto3.util.equals(_EgressPolicy as unknown as MessageType<_EgressPolicy>, a, b2);
  }
})();
export type EgressPolicy = InstanceType<typeof EgressPolicy$Runtime>;
var EgressPolicy: MessageType<EgressPolicy> = EgressPolicy$Runtime as unknown as MessageType<EgressPolicy>;
(EgressPolicy as MutableMessageType<EgressPolicy>).runtime = proto3;
(EgressPolicy as MutableMessageType<EgressPolicy>).typeName = "anyrun.v1.EgressPolicy";
(EgressPolicy as MutableMessageType<EgressPolicy>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "allow_all", kind: "message", T: Empty, oneof: "policy" },
  { no: 2, name: "restricted", kind: "message", T: EgressRestricted, oneof: "policy" },
  { no: 3, name: "scm", kind: "message", T: ScmConfig, repeated: true },
  {
    no: 4,
    name: "use_scm_egress_config",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var EgressRestricted$Runtime = (() => class _EgressRestricted extends Message<_EgressRestricted> {
  declare allowedDomains: AllowedDomain[];
  declare allowedTcpDestinations: AllowedTcpDestination[];
  constructor(data?: PartialMessage<_EgressRestricted>) {
    super();
    this.allowedDomains = [];
    this.allowedTcpDestinations = [];
    proto3.util.initPartial(data, this as _EgressRestricted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EgressRestricted {
    return new _EgressRestricted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EgressRestricted {
    return new _EgressRestricted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EgressRestricted {
    return new _EgressRestricted().fromJsonString(jsonString, options);
  }
  static equals(a: _EgressRestricted | PlainMessage<_EgressRestricted> | undefined | null, b2: _EgressRestricted | PlainMessage<_EgressRestricted> | undefined | null): boolean {
    return proto3.util.equals(_EgressRestricted as unknown as MessageType<_EgressRestricted>, a, b2);
  }
})();
export type EgressRestricted = InstanceType<typeof EgressRestricted$Runtime>;
var EgressRestricted: MessageType<EgressRestricted> = EgressRestricted$Runtime as unknown as MessageType<EgressRestricted>;
(EgressRestricted as MutableMessageType<EgressRestricted>).runtime = proto3;
(EgressRestricted as MutableMessageType<EgressRestricted>).typeName = "anyrun.v1.EgressRestricted";
(EgressRestricted as MutableMessageType<EgressRestricted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "allowed_domains", kind: "message", T: AllowedDomain, repeated: true },
  { no: 2, name: "allowed_tcp_destinations", kind: "message", T: AllowedTcpDestination, repeated: true }
]);
var AllowedDomain$Runtime = (() => class _AllowedDomain extends Message<_AllowedDomain> {
  declare domain: string;
  constructor(data?: PartialMessage<_AllowedDomain>) {
    super();
    this.domain = "";
    proto3.util.initPartial(data, this as _AllowedDomain);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AllowedDomain {
    return new _AllowedDomain().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AllowedDomain {
    return new _AllowedDomain().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AllowedDomain {
    return new _AllowedDomain().fromJsonString(jsonString, options);
  }
  static equals(a: _AllowedDomain | PlainMessage<_AllowedDomain> | undefined | null, b2: _AllowedDomain | PlainMessage<_AllowedDomain> | undefined | null): boolean {
    return proto3.util.equals(_AllowedDomain as unknown as MessageType<_AllowedDomain>, a, b2);
  }
})();
export type AllowedDomain = InstanceType<typeof AllowedDomain$Runtime>;
var AllowedDomain: MessageType<AllowedDomain> = AllowedDomain$Runtime as unknown as MessageType<AllowedDomain>;
(AllowedDomain as MutableMessageType<AllowedDomain>).runtime = proto3;
(AllowedDomain as MutableMessageType<AllowedDomain>).typeName = "anyrun.v1.AllowedDomain";
(AllowedDomain as MutableMessageType<AllowedDomain>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "domain",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AllowedTcpDestination$Runtime = (() => class _AllowedTcpDestination extends Message<_AllowedTcpDestination> {
  declare cidr: string;
  declare port: number;
  constructor(data?: PartialMessage<_AllowedTcpDestination>) {
    super();
    this.cidr = "";
    this.port = 0;
    proto3.util.initPartial(data, this as _AllowedTcpDestination);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AllowedTcpDestination {
    return new _AllowedTcpDestination().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AllowedTcpDestination {
    return new _AllowedTcpDestination().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AllowedTcpDestination {
    return new _AllowedTcpDestination().fromJsonString(jsonString, options);
  }
  static equals(a: _AllowedTcpDestination | PlainMessage<_AllowedTcpDestination> | undefined | null, b2: _AllowedTcpDestination | PlainMessage<_AllowedTcpDestination> | undefined | null): boolean {
    return proto3.util.equals(_AllowedTcpDestination as unknown as MessageType<_AllowedTcpDestination>, a, b2);
  }
})();
export type AllowedTcpDestination = InstanceType<typeof AllowedTcpDestination$Runtime>;
var AllowedTcpDestination: MessageType<AllowedTcpDestination> = AllowedTcpDestination$Runtime as unknown as MessageType<AllowedTcpDestination>;
(AllowedTcpDestination as MutableMessageType<AllowedTcpDestination>).runtime = proto3;
(AllowedTcpDestination as MutableMessageType<AllowedTcpDestination>).typeName = "anyrun.v1.AllowedTcpDestination";
(AllowedTcpDestination as MutableMessageType<AllowedTcpDestination>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cidr",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "port",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ScmConfig$Runtime = (() => class _ScmConfig extends Message<_ScmConfig> {
  declare domain: string;
  declare authValue: string;
  declare proxyUrl: string;
  declare authMethod: ScmConfig_AuthMethod;
  constructor(data?: PartialMessage<_ScmConfig>) {
    super();
    this.domain = "";
    this.authValue = "";
    this.proxyUrl = "";
    this.authMethod = ScmConfig_AuthMethod.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ScmConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScmConfig {
    return new _ScmConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScmConfig {
    return new _ScmConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScmConfig {
    return new _ScmConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _ScmConfig | PlainMessage<_ScmConfig> | undefined | null, b2: _ScmConfig | PlainMessage<_ScmConfig> | undefined | null): boolean {
    return proto3.util.equals(_ScmConfig as unknown as MessageType<_ScmConfig>, a, b2);
  }
})();
export type ScmConfig = InstanceType<typeof ScmConfig$Runtime>;
var ScmConfig: MessageType<ScmConfig> = ScmConfig$Runtime as unknown as MessageType<ScmConfig>;
(ScmConfig as MutableMessageType<ScmConfig>).runtime = proto3;
(ScmConfig as MutableMessageType<ScmConfig>).typeName = "anyrun.v1.ScmConfig";
(ScmConfig as MutableMessageType<ScmConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "domain",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "auth_value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "proxy_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "auth_method", kind: "enum", T: proto3.getEnumType(ScmConfig_AuthMethod) }
]);
(function(ScmConfig_AuthMethod2) {
  ScmConfig_AuthMethod2[ScmConfig_AuthMethod2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ScmConfig_AuthMethod2[ScmConfig_AuthMethod2["BASIC"] = 1] = "BASIC";
  ScmConfig_AuthMethod2[ScmConfig_AuthMethod2["BEARER"] = 2] = "BEARER";
})(ScmConfig_AuthMethod! || (ScmConfig_AuthMethod = {} as typeof ScmConfig_AuthMethod));
proto3.util.setEnumType(ScmConfig_AuthMethod, "anyrun.v1.ScmConfig.AuthMethod", [
  { no: 0, name: "AUTH_METHOD_UNSPECIFIED" },
  { no: 1, name: "AUTH_METHOD_BASIC" },
  { no: 2, name: "AUTH_METHOD_BEARER" }
]);
var RootArchivePayloadSummary$Runtime = (() => class _RootArchivePayloadSummary extends Message<_RootArchivePayloadSummary> {
  declare logicalPayloadLength: bigint;
  declare compressionAlgorithm: RootArchiveCompressionAlgorithm;
  declare compressionBlockSize: bigint;
  constructor(data?: PartialMessage<_RootArchivePayloadSummary>) {
    super();
    this.logicalPayloadLength = protoInt64.zero;
    this.compressionAlgorithm = RootArchiveCompressionAlgorithm.NONE;
    this.compressionBlockSize = protoInt64.zero;
    proto3.util.initPartial(data, this as _RootArchivePayloadSummary);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RootArchivePayloadSummary {
    return new _RootArchivePayloadSummary().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RootArchivePayloadSummary {
    return new _RootArchivePayloadSummary().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RootArchivePayloadSummary {
    return new _RootArchivePayloadSummary().fromJsonString(jsonString, options);
  }
  static equals(a: _RootArchivePayloadSummary | PlainMessage<_RootArchivePayloadSummary> | undefined | null, b2: _RootArchivePayloadSummary | PlainMessage<_RootArchivePayloadSummary> | undefined | null): boolean {
    return proto3.util.equals(_RootArchivePayloadSummary as unknown as MessageType<_RootArchivePayloadSummary>, a, b2);
  }
})();
export type RootArchivePayloadSummary = InstanceType<typeof RootArchivePayloadSummary$Runtime>;
var RootArchivePayloadSummary: MessageType<RootArchivePayloadSummary> = RootArchivePayloadSummary$Runtime as unknown as MessageType<RootArchivePayloadSummary>;
(RootArchivePayloadSummary as MutableMessageType<RootArchivePayloadSummary>).runtime = proto3;
(RootArchivePayloadSummary as MutableMessageType<RootArchivePayloadSummary>).typeName = "anyrun.v1.RootArchivePayloadSummary";
(RootArchivePayloadSummary as MutableMessageType<RootArchivePayloadSummary>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "logical_payload_length",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 2, name: "compression_algorithm", kind: "enum", T: proto3.getEnumType(RootArchiveCompressionAlgorithm) },
  {
    no: 3,
    name: "compression_block_size",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var V4RootArchiveOptions$Runtime = (() => class _V4RootArchiveOptions extends Message<_V4RootArchiveOptions> {
  declare format: RootArchiveFormat;
  declare payloadSummary?: RootArchivePayloadSummary;
  constructor(data?: PartialMessage<_V4RootArchiveOptions>) {
    super();
    this.format = RootArchiveFormat.UNSPECIFIED;
    proto3.util.initPartial(data, this as _V4RootArchiveOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _V4RootArchiveOptions {
    return new _V4RootArchiveOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _V4RootArchiveOptions {
    return new _V4RootArchiveOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _V4RootArchiveOptions {
    return new _V4RootArchiveOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _V4RootArchiveOptions | PlainMessage<_V4RootArchiveOptions> | undefined | null, b2: _V4RootArchiveOptions | PlainMessage<_V4RootArchiveOptions> | undefined | null): boolean {
    return proto3.util.equals(_V4RootArchiveOptions as unknown as MessageType<_V4RootArchiveOptions>, a, b2);
  }
})();
export type V4RootArchiveOptions = InstanceType<typeof V4RootArchiveOptions$Runtime>;
var V4RootArchiveOptions: MessageType<V4RootArchiveOptions> = V4RootArchiveOptions$Runtime as unknown as MessageType<V4RootArchiveOptions>;
(V4RootArchiveOptions as MutableMessageType<V4RootArchiveOptions>).runtime = proto3;
(V4RootArchiveOptions as MutableMessageType<V4RootArchiveOptions>).typeName = "anyrun.v1.V4RootArchiveOptions";
(V4RootArchiveOptions as MutableMessageType<V4RootArchiveOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "format", kind: "enum", T: proto3.getEnumType(RootArchiveFormat) },
  { no: 2, name: "payload_summary", kind: "message", T: RootArchivePayloadSummary, opt: true }
]);


export { DrainingReason, UploadPriority, WorkspaceGitSetupMode, WarmForkMode, EnvironmentBuildResolution, ContainerRuntime, FirecrackerVersion, BlobStorageFormat, RootArchiveFormat, RootArchiveCompressionAlgorithm, ImageMetadata, PortDefinition, DefaultPortConfig, DevContainerExecCommand, ResourceRequests, ResourceLimits, SnapshotUsageStats, DiskUsage, MemoryUsage, EnvironmentBuildBootInfo, GitRepoSourceReference, TarRepoSourceReference, LocalDirectoryReference, TarGzipUrlSourceReference, NoopSourceReference, MultiSourceEntry, MultiSourceReference, AnygressPodDenyRule, AnygressPodDenyRuleList, AnygressPerPodDenyRules, AnygressLocalPodDenyRules, DevContainerSpec, AntiAffinityTags, DevContainerEnv, ExternalSnapshot, DockerArchiveImage, DevContainerConfig, DevContainerConfig_RegistryReferenceAlias, Build, InlineBuild, DockerBuildSecretEntry, DockerBuildConfig, RegistryCredentials, DockerImageRef, DockerBuildResult, DockerImageBuildEvent, EgressPolicy, EgressRestricted, AllowedDomain, AllowedTcpDestination, ScmConfig, ScmConfig_AuthMethod, RootArchivePayloadSummary, V4RootArchiveOptions };
