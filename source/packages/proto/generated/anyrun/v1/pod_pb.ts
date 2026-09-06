/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:414253-415042
 * Region SHA-256: f49d1de3a6b80bb68cb2857cca74507e16257478f0f5da0ab2f31b2935f8531e
 * BackgroundComposer closure exports: 20 messages + 4 enums = 24
 */
import { Message, proto3, protoInt64, Empty, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PortDefinition, DefaultPortConfig, ResourceRequests, ResourceLimits, AntiAffinityTags } from "./common_pb.js";
import { PersistedDevContainerConfig } from "./persisted_dev_container_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type PodStartCacheSource = 0 | 1 | 2;
var PodStartCacheSource: {
  "UNSPECIFIED": 0;
  "NODE_LOCAL_FIRECRACKER_SNAPSHOT": 1;
  "REMOTE_ROOTAR_CHECKPOINT": 2;
  0: "UNSPECIFIED";
  1: "NODE_LOCAL_FIRECRACKER_SNAPSHOT";
  2: "REMOTE_ROOTAR_CHECKPOINT";
};
export type PodCreatingPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6;
var PodCreatingPhase: {
  "UNSPECIFIED": 0;
  "CLONE": 1;
  "BUILD": 2;
  "POST_CREATE": 3;
  "UPDATE_CONTENT": 4;
  "POST_START": 5;
  "QUEUED": 6;
  0: "UNSPECIFIED";
  1: "CLONE";
  2: "BUILD";
  3: "POST_CREATE";
  4: "UPDATE_CONTENT";
  5: "POST_START";
  6: "QUEUED";
};
export type GitCloneFailureCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
var GitCloneFailureCategory: {
  "UNSPECIFIED": 0;
  "IP_ALLOW_LIST": 1;
  "INVALID_CREDENTIALS": 2;
  "SSO_REDIRECT": 3;
  "PROXY_CONNECT": 4;
  "CONNECTION_RESET": 5;
  "TRANSPORT_INTERRUPTED": 6;
  "REMOTE_FORBIDDEN": 7;
  "UPSTREAM_BAD_GATEWAY": 8;
  0: "UNSPECIFIED";
  1: "IP_ALLOW_LIST";
  2: "INVALID_CREDENTIALS";
  3: "SSO_REDIRECT";
  4: "PROXY_CONNECT";
  5: "CONNECTION_RESET";
  6: "TRANSPORT_INTERRUPTED";
  7: "REMOTE_FORBIDDEN";
  8: "UPSTREAM_BAD_GATEWAY";
};
export type ImagePullFailureCategory = 0 | 1 | 2 | 3 | 4 | 5;
var ImagePullFailureCategory: {
  "UNSPECIFIED": 0;
  "DENIED": 1;
  "UNAUTHORIZED": 2;
  "NOT_FOUND": 3;
  "RATE_LIMITED": 4;
  "UPSTREAM": 5;
  0: "UNSPECIFIED";
  1: "DENIED";
  2: "UNAUTHORIZED";
  3: "NOT_FOUND";
  4: "RATE_LIMITED";
  5: "UPSTREAM";
};
(function(PodStartCacheSource2) {
  PodStartCacheSource2[PodStartCacheSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PodStartCacheSource2[PodStartCacheSource2["NODE_LOCAL_FIRECRACKER_SNAPSHOT"] = 1] = "NODE_LOCAL_FIRECRACKER_SNAPSHOT";
  PodStartCacheSource2[PodStartCacheSource2["REMOTE_ROOTAR_CHECKPOINT"] = 2] = "REMOTE_ROOTAR_CHECKPOINT";
})(PodStartCacheSource! || (PodStartCacheSource = {} as typeof PodStartCacheSource));
proto3.util.setEnumType(PodStartCacheSource, "anyrun.v1.PodStartCacheSource", [
  { no: 0, name: "POD_START_CACHE_SOURCE_UNSPECIFIED" },
  { no: 1, name: "POD_START_CACHE_SOURCE_NODE_LOCAL_FIRECRACKER_SNAPSHOT" },
  { no: 2, name: "POD_START_CACHE_SOURCE_REMOTE_ROOTAR_CHECKPOINT" }
]);
(function(PodCreatingPhase2) {
  PodCreatingPhase2[PodCreatingPhase2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PodCreatingPhase2[PodCreatingPhase2["CLONE"] = 1] = "CLONE";
  PodCreatingPhase2[PodCreatingPhase2["BUILD"] = 2] = "BUILD";
  PodCreatingPhase2[PodCreatingPhase2["POST_CREATE"] = 3] = "POST_CREATE";
  PodCreatingPhase2[PodCreatingPhase2["UPDATE_CONTENT"] = 4] = "UPDATE_CONTENT";
  PodCreatingPhase2[PodCreatingPhase2["POST_START"] = 5] = "POST_START";
  PodCreatingPhase2[PodCreatingPhase2["QUEUED"] = 6] = "QUEUED";
})(PodCreatingPhase! || (PodCreatingPhase = {} as typeof PodCreatingPhase));
proto3.util.setEnumType(PodCreatingPhase, "anyrun.v1.PodCreatingPhase", [
  { no: 0, name: "POD_CREATING_PHASE_UNSPECIFIED" },
  { no: 1, name: "POD_CREATING_PHASE_CLONE" },
  { no: 2, name: "POD_CREATING_PHASE_BUILD" },
  { no: 3, name: "POD_CREATING_PHASE_POST_CREATE" },
  { no: 4, name: "POD_CREATING_PHASE_UPDATE_CONTENT" },
  { no: 5, name: "POD_CREATING_PHASE_POST_START" },
  { no: 6, name: "POD_CREATING_PHASE_QUEUED" }
]);
(function(GitCloneFailureCategory2) {
  GitCloneFailureCategory2[GitCloneFailureCategory2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitCloneFailureCategory2[GitCloneFailureCategory2["IP_ALLOW_LIST"] = 1] = "IP_ALLOW_LIST";
  GitCloneFailureCategory2[GitCloneFailureCategory2["INVALID_CREDENTIALS"] = 2] = "INVALID_CREDENTIALS";
  GitCloneFailureCategory2[GitCloneFailureCategory2["SSO_REDIRECT"] = 3] = "SSO_REDIRECT";
  GitCloneFailureCategory2[GitCloneFailureCategory2["PROXY_CONNECT"] = 4] = "PROXY_CONNECT";
  GitCloneFailureCategory2[GitCloneFailureCategory2["CONNECTION_RESET"] = 5] = "CONNECTION_RESET";
  GitCloneFailureCategory2[GitCloneFailureCategory2["TRANSPORT_INTERRUPTED"] = 6] = "TRANSPORT_INTERRUPTED";
  GitCloneFailureCategory2[GitCloneFailureCategory2["REMOTE_FORBIDDEN"] = 7] = "REMOTE_FORBIDDEN";
  GitCloneFailureCategory2[GitCloneFailureCategory2["UPSTREAM_BAD_GATEWAY"] = 8] = "UPSTREAM_BAD_GATEWAY";
})(GitCloneFailureCategory! || (GitCloneFailureCategory = {} as typeof GitCloneFailureCategory));
proto3.util.setEnumType(GitCloneFailureCategory, "anyrun.v1.GitCloneFailureCategory", [
  { no: 0, name: "GIT_CLONE_FAILURE_CATEGORY_UNSPECIFIED" },
  { no: 1, name: "GIT_CLONE_FAILURE_CATEGORY_IP_ALLOW_LIST" },
  { no: 2, name: "GIT_CLONE_FAILURE_CATEGORY_INVALID_CREDENTIALS" },
  { no: 3, name: "GIT_CLONE_FAILURE_CATEGORY_SSO_REDIRECT" },
  { no: 4, name: "GIT_CLONE_FAILURE_CATEGORY_PROXY_CONNECT" },
  { no: 5, name: "GIT_CLONE_FAILURE_CATEGORY_CONNECTION_RESET" },
  { no: 6, name: "GIT_CLONE_FAILURE_CATEGORY_TRANSPORT_INTERRUPTED" },
  { no: 7, name: "GIT_CLONE_FAILURE_CATEGORY_REMOTE_FORBIDDEN" },
  { no: 8, name: "GIT_CLONE_FAILURE_CATEGORY_UPSTREAM_BAD_GATEWAY" }
]);
(function(ImagePullFailureCategory2) {
  ImagePullFailureCategory2[ImagePullFailureCategory2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ImagePullFailureCategory2[ImagePullFailureCategory2["DENIED"] = 1] = "DENIED";
  ImagePullFailureCategory2[ImagePullFailureCategory2["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
  ImagePullFailureCategory2[ImagePullFailureCategory2["NOT_FOUND"] = 3] = "NOT_FOUND";
  ImagePullFailureCategory2[ImagePullFailureCategory2["RATE_LIMITED"] = 4] = "RATE_LIMITED";
  ImagePullFailureCategory2[ImagePullFailureCategory2["UPSTREAM"] = 5] = "UPSTREAM";
})(ImagePullFailureCategory! || (ImagePullFailureCategory = {} as typeof ImagePullFailureCategory));
proto3.util.setEnumType(ImagePullFailureCategory, "anyrun.v1.ImagePullFailureCategory", [
  { no: 0, name: "IMAGE_PULL_FAILURE_CATEGORY_UNSPECIFIED" },
  { no: 1, name: "IMAGE_PULL_FAILURE_CATEGORY_DENIED" },
  { no: 2, name: "IMAGE_PULL_FAILURE_CATEGORY_UNAUTHORIZED" },
  { no: 3, name: "IMAGE_PULL_FAILURE_CATEGORY_NOT_FOUND" },
  { no: 4, name: "IMAGE_PULL_FAILURE_CATEGORY_RATE_LIMITED" },
  { no: 5, name: "IMAGE_PULL_FAILURE_CATEGORY_UPSTREAM" }
]);
var PodPorts$Runtime = (() => class _PodPorts extends Message<_PodPorts> {
  declare ports: PortDefinition[];
  declare defaultPortConfig?: DefaultPortConfig;
  constructor(data?: PartialMessage<_PodPorts>) {
    super();
    this.ports = [];
    proto3.util.initPartial(data, this as _PodPorts);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodPorts {
    return new _PodPorts().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodPorts {
    return new _PodPorts().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodPorts {
    return new _PodPorts().fromJsonString(jsonString, options);
  }
  static equals(a: _PodPorts | PlainMessage<_PodPorts> | undefined | null, b2: _PodPorts | PlainMessage<_PodPorts> | undefined | null): boolean {
    return proto3.util.equals(_PodPorts as unknown as MessageType<_PodPorts>, a, b2);
  }
})();
export type PodPorts = InstanceType<typeof PodPorts$Runtime>;
var PodPorts: MessageType<PodPorts> = PodPorts$Runtime as unknown as MessageType<PodPorts>;
(PodPorts as MutableMessageType<PodPorts>).runtime = proto3;
(PodPorts as MutableMessageType<PodPorts>).typeName = "anyrun.v1.PodPorts";
(PodPorts as MutableMessageType<PodPorts>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ports", kind: "message", T: PortDefinition, repeated: true },
  { no: 2, name: "default_port_config", kind: "message", T: DefaultPortConfig, opt: true }
]);
var PortState$Runtime = (() => class _PortState extends Message<_PortState> {
  declare portName: string;
  declare containerPort: number;
  declare hostPort: number;
  declare visibility: { case: "public"; value: Empty } | { case: "private"; value: Empty } | { case: undefined; value?: undefined };
  declare authentication: { case: "open"; value: Empty } | { case: "token"; value: Empty } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PortState>) {
    super();
    this.portName = "";
    this.containerPort = 0;
    this.hostPort = 0;
    this.visibility = { case: void 0 };
    this.authentication = { case: void 0 };
    proto3.util.initPartial(data, this as _PortState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PortState {
    return new _PortState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PortState {
    return new _PortState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PortState {
    return new _PortState().fromJsonString(jsonString, options);
  }
  static equals(a: _PortState | PlainMessage<_PortState> | undefined | null, b2: _PortState | PlainMessage<_PortState> | undefined | null): boolean {
    return proto3.util.equals(_PortState as unknown as MessageType<_PortState>, a, b2);
  }
})();
export type PortState = InstanceType<typeof PortState$Runtime>;
var PortState: MessageType<PortState> = PortState$Runtime as unknown as MessageType<PortState>;
(PortState as MutableMessageType<PortState>).runtime = proto3;
(PortState as MutableMessageType<PortState>).typeName = "anyrun.v1.PortState";
(PortState as MutableMessageType<PortState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "port_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "container_port",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "host_port",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 4, name: "public", kind: "message", T: Empty, oneof: "visibility" },
  { no: 5, name: "private", kind: "message", T: Empty, oneof: "visibility" },
  { no: 6, name: "open", kind: "message", T: Empty, oneof: "authentication" },
  { no: 7, name: "token", kind: "message", T: Empty, oneof: "authentication" }
]);
var PodStatus$Runtime = (() => class _PodStatus extends Message<_PodStatus> {
  declare status: { case: "creating"; value: PodCreatingStatus } | { case: "running"; value: PodRunningStatus } | { case: "failed"; value: PodFailedStatus } | { case: "terminated"; value: PodTerminatedStatus } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PodStatus>) {
    super();
    this.status = { case: void 0 };
    proto3.util.initPartial(data, this as _PodStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodStatus {
    return new _PodStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodStatus {
    return new _PodStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodStatus {
    return new _PodStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PodStatus | PlainMessage<_PodStatus> | undefined | null, b2: _PodStatus | PlainMessage<_PodStatus> | undefined | null): boolean {
    return proto3.util.equals(_PodStatus as unknown as MessageType<_PodStatus>, a, b2);
  }
})();
export type PodStatus = InstanceType<typeof PodStatus$Runtime>;
var PodStatus: MessageType<PodStatus> = PodStatus$Runtime as unknown as MessageType<PodStatus>;
(PodStatus as MutableMessageType<PodStatus>).runtime = proto3;
(PodStatus as MutableMessageType<PodStatus>).typeName = "anyrun.v1.PodStatus";
(PodStatus as MutableMessageType<PodStatus>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "creating", kind: "message", T: PodCreatingStatus, oneof: "status" },
  { no: 2, name: "running", kind: "message", T: PodRunningStatus, oneof: "status" },
  { no: 3, name: "failed", kind: "message", T: PodFailedStatus, oneof: "status" },
  { no: 4, name: "terminated", kind: "message", T: PodTerminatedStatus, oneof: "status" }
]);
var PodMeshLink$Runtime = (() => class _PodMeshLink extends Message<_PodMeshLink> {
  declare targetPodId: string;
  declare virtualIp: string;
  constructor(data?: PartialMessage<_PodMeshLink>) {
    super();
    this.targetPodId = "";
    this.virtualIp = "";
    proto3.util.initPartial(data, this as _PodMeshLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodMeshLink {
    return new _PodMeshLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodMeshLink {
    return new _PodMeshLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodMeshLink {
    return new _PodMeshLink().fromJsonString(jsonString, options);
  }
  static equals(a: _PodMeshLink | PlainMessage<_PodMeshLink> | undefined | null, b2: _PodMeshLink | PlainMessage<_PodMeshLink> | undefined | null): boolean {
    return proto3.util.equals(_PodMeshLink as unknown as MessageType<_PodMeshLink>, a, b2);
  }
})();
export type PodMeshLink = InstanceType<typeof PodMeshLink$Runtime>;
var PodMeshLink: MessageType<PodMeshLink> = PodMeshLink$Runtime as unknown as MessageType<PodMeshLink>;
(PodMeshLink as MutableMessageType<PodMeshLink>).runtime = proto3;
(PodMeshLink as MutableMessageType<PodMeshLink>).typeName = "anyrun.v1.PodMeshLink";
(PodMeshLink as MutableMessageType<PodMeshLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "target_pod_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "virtual_ip",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var Pod$Runtime = (() => class _Pod extends Message<_Pod> {
  declare tenantId: string;
  declare podId: string;
  declare resourceVersion: number;
  declare name: string;
  declare labels: { [key: string]: string };
  declare creationTimestamp: bigint;
  declare deletionTimestamp?: bigint;
  declare hibernationTimestamp?: bigint;
  declare resourceRequests?: ResourceRequests;
  declare hibernatedResourceRequests?: ResourceRequests;
  declare resourceLimits?: ResourceLimits;
  declare cache?: boolean;
  declare cacheTag?: string;
  declare workload: string;
  declare nodeId: string;
  declare hibernated?: boolean;
  declare networkToken: string;
  declare status?: PodStatus;
  declare ports?: PodPorts;
  declare internalProxyPort?: number;
  declare config?: PersistedDevContainerConfig;
  declare modifiedTimestamp?: bigint;
  declare podAwakeSince?: bigint;
  declare lowCardinalityLabels: string[];
  declare checkpointGroupIds: string[];
  declare startedFromCheckpointGroupId?: string;
  declare startedFromCheckpointId?: string;
  declare startedFromCacheSource?: PodStartCacheSource;
  declare startedFromCheckpointCreationTimestamp?: bigint;
  declare antiAffinityTags?: AntiAffinityTags;
  declare collectMetrics?: boolean;
  declare meshLinks: PodMeshLink[];
  constructor(data?: PartialMessage<_Pod>) {
    super();
    this.tenantId = "";
    this.podId = "";
    this.resourceVersion = 0;
    this.name = "";
    this.labels = {};
    this.creationTimestamp = protoInt64.zero;
    this.workload = "";
    this.nodeId = "";
    this.networkToken = "";
    this.lowCardinalityLabels = [];
    this.checkpointGroupIds = [];
    this.meshLinks = [];
    proto3.util.initPartial(data, this as _Pod);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Pod {
    return new _Pod().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Pod {
    return new _Pod().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Pod {
    return new _Pod().fromJsonString(jsonString, options);
  }
  static equals(a: _Pod | PlainMessage<_Pod> | undefined | null, b2: _Pod | PlainMessage<_Pod> | undefined | null): boolean {
    return proto3.util.equals(_Pod as unknown as MessageType<_Pod>, a, b2);
  }
})();
export type Pod = InstanceType<typeof Pod$Runtime>;
var Pod: MessageType<Pod> = Pod$Runtime as unknown as MessageType<Pod>;
(Pod as MutableMessageType<Pod>).runtime = proto3;
(Pod as MutableMessageType<Pod>).typeName = "anyrun.v1.Pod";
(Pod as MutableMessageType<Pod>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
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
    no: 9,
    name: "resource_version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 10,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 12,
    name: "creation_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 13, name: "deletion_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 14, name: "hibernation_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 4, name: "resource_requests", kind: "message", T: ResourceRequests },
  { no: 20, name: "hibernated_resource_requests", kind: "message", T: ResourceRequests },
  { no: 17, name: "resource_limits", kind: "message", T: ResourceLimits, opt: true },
  { no: 18, name: "cache", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "cache_tag", kind: "scalar", T: 9, opt: true },
  {
    no: 21,
    name: "workload",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "node_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 15, name: "hibernated", kind: "scalar", T: 8, opt: true },
  {
    no: 7,
    name: "network_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "status", kind: "message", T: PodStatus },
  { no: 6, name: "ports", kind: "message", T: PodPorts },
  { no: 22, name: "internal_proxy_port", kind: "scalar", T: 13, opt: true },
  { no: 16, name: "config", kind: "message", T: PersistedDevContainerConfig, opt: true },
  { no: 23, name: "modified_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 24, name: "pod_awake_since", kind: "scalar", T: 4, opt: true },
  { no: 25, name: "low_cardinality_labels", kind: "scalar", T: 9, repeated: true },
  { no: 26, name: "checkpoint_group_ids", kind: "scalar", T: 9, repeated: true },
  { no: 27, name: "started_from_checkpoint_group_id", kind: "scalar", T: 9, opt: true },
  { no: 30, name: "started_from_checkpoint_id", kind: "scalar", T: 9, opt: true },
  { no: 28, name: "started_from_cache_source", kind: "enum", T: proto3.getEnumType(PodStartCacheSource), opt: true },
  { no: 29, name: "started_from_checkpoint_creation_timestamp", kind: "scalar", T: 4, opt: true },
  { no: 31, name: "anti_affinity_tags", kind: "message", T: AntiAffinityTags, opt: true },
  { no: 32, name: "collect_metrics", kind: "scalar", T: 8, opt: true },
  { no: 34, name: "mesh_links", kind: "message", T: PodMeshLink, repeated: true }
]);
var PodCollection$Runtime = (() => class _PodCollection extends Message<_PodCollection> {
  declare items: Pod[];
  declare nextCursor?: string;
  constructor(data?: PartialMessage<_PodCollection>) {
    super();
    this.items = [];
    proto3.util.initPartial(data, this as _PodCollection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodCollection {
    return new _PodCollection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodCollection {
    return new _PodCollection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodCollection {
    return new _PodCollection().fromJsonString(jsonString, options);
  }
  static equals(a: _PodCollection | PlainMessage<_PodCollection> | undefined | null, b2: _PodCollection | PlainMessage<_PodCollection> | undefined | null): boolean {
    return proto3.util.equals(_PodCollection as unknown as MessageType<_PodCollection>, a, b2);
  }
})();
export type PodCollection = InstanceType<typeof PodCollection$Runtime>;
var PodCollection: MessageType<PodCollection> = PodCollection$Runtime as unknown as MessageType<PodCollection>;
(PodCollection as MutableMessageType<PodCollection>).runtime = proto3;
(PodCollection as MutableMessageType<PodCollection>).typeName = "anyrun.v1.PodCollection";
(PodCollection as MutableMessageType<PodCollection>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "items", kind: "message", T: Pod, repeated: true },
  { no: 2, name: "next_cursor", kind: "scalar", T: 9, opt: true }
]);
var PodUpdate$Runtime = (() => class _PodUpdate extends Message<_PodUpdate> {
  declare eventId?: string;
  declare update: { case: "initial"; value: PodCollection } | { case: "added"; value: Pod } | { case: "updated"; value: Pod } | { case: "removed"; value: Pod } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PodUpdate>) {
    super();
    this.update = { case: void 0 };
    proto3.util.initPartial(data, this as _PodUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodUpdate {
    return new _PodUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodUpdate {
    return new _PodUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodUpdate {
    return new _PodUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _PodUpdate | PlainMessage<_PodUpdate> | undefined | null, b2: _PodUpdate | PlainMessage<_PodUpdate> | undefined | null): boolean {
    return proto3.util.equals(_PodUpdate as unknown as MessageType<_PodUpdate>, a, b2);
  }
})();
export type PodUpdate = InstanceType<typeof PodUpdate$Runtime>;
var PodUpdate: MessageType<PodUpdate> = PodUpdate$Runtime as unknown as MessageType<PodUpdate>;
(PodUpdate as MutableMessageType<PodUpdate>).runtime = proto3;
(PodUpdate as MutableMessageType<PodUpdate>).typeName = "anyrun.v1.PodUpdate";
(PodUpdate as MutableMessageType<PodUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "event_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "initial", kind: "message", T: PodCollection, oneof: "update" },
  { no: 3, name: "added", kind: "message", T: Pod, oneof: "update" },
  { no: 4, name: "updated", kind: "message", T: Pod, oneof: "update" },
  { no: 5, name: "removed", kind: "message", T: Pod, oneof: "update" }
]);
var PodFilter$Runtime = (() => class _PodFilter extends Message<_PodFilter> {
  declare podId?: string;
  declare labels: { [key: string]: string };
  constructor(data?: PartialMessage<_PodFilter>) {
    super();
    this.labels = {};
    proto3.util.initPartial(data, this as _PodFilter);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodFilter {
    return new _PodFilter().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodFilter {
    return new _PodFilter().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodFilter {
    return new _PodFilter().fromJsonString(jsonString, options);
  }
  static equals(a: _PodFilter | PlainMessage<_PodFilter> | undefined | null, b2: _PodFilter | PlainMessage<_PodFilter> | undefined | null): boolean {
    return proto3.util.equals(_PodFilter as unknown as MessageType<_PodFilter>, a, b2);
  }
})();
export type PodFilter = InstanceType<typeof PodFilter$Runtime>;
var PodFilter: MessageType<PodFilter> = PodFilter$Runtime as unknown as MessageType<PodFilter>;
(PodFilter as MutableMessageType<PodFilter>).runtime = proto3;
(PodFilter as MutableMessageType<PodFilter>).typeName = "anyrun.v1.PodFilter";
(PodFilter as MutableMessageType<PodFilter>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pod_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var PodCreatingStatus$Runtime = (() => class _PodCreatingStatus extends Message<_PodCreatingStatus> {
  declare phase: PodCreatingPhase;
  constructor(data?: PartialMessage<_PodCreatingStatus>) {
    super();
    this.phase = PodCreatingPhase.UNSPECIFIED;
    proto3.util.initPartial(data, this as _PodCreatingStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodCreatingStatus {
    return new _PodCreatingStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodCreatingStatus {
    return new _PodCreatingStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodCreatingStatus {
    return new _PodCreatingStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PodCreatingStatus | PlainMessage<_PodCreatingStatus> | undefined | null, b2: _PodCreatingStatus | PlainMessage<_PodCreatingStatus> | undefined | null): boolean {
    return proto3.util.equals(_PodCreatingStatus as unknown as MessageType<_PodCreatingStatus>, a, b2);
  }
})();
export type PodCreatingStatus = InstanceType<typeof PodCreatingStatus$Runtime>;
var PodCreatingStatus: MessageType<PodCreatingStatus> = PodCreatingStatus$Runtime as unknown as MessageType<PodCreatingStatus>;
(PodCreatingStatus as MutableMessageType<PodCreatingStatus>).runtime = proto3;
(PodCreatingStatus as MutableMessageType<PodCreatingStatus>).typeName = "anyrun.v1.PodCreatingStatus";
(PodCreatingStatus as MutableMessageType<PodCreatingStatus>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "phase", kind: "enum", T: proto3.getEnumType(PodCreatingPhase) }
]);
var PodRunningStatus$Runtime = (() => class _PodRunningStatus extends Message<_PodRunningStatus> {
  declare missedHeartbeatDeadline?: bigint;
  constructor(data?: PartialMessage<_PodRunningStatus>) {
    super();
    proto3.util.initPartial(data, this as _PodRunningStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodRunningStatus {
    return new _PodRunningStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodRunningStatus {
    return new _PodRunningStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodRunningStatus {
    return new _PodRunningStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PodRunningStatus | PlainMessage<_PodRunningStatus> | undefined | null, b2: _PodRunningStatus | PlainMessage<_PodRunningStatus> | undefined | null): boolean {
    return proto3.util.equals(_PodRunningStatus as unknown as MessageType<_PodRunningStatus>, a, b2);
  }
})();
export type PodRunningStatus = InstanceType<typeof PodRunningStatus$Runtime>;
var PodRunningStatus: MessageType<PodRunningStatus> = PodRunningStatus$Runtime as unknown as MessageType<PodRunningStatus>;
(PodRunningStatus as MutableMessageType<PodRunningStatus>).runtime = proto3;
(PodRunningStatus as MutableMessageType<PodRunningStatus>).typeName = "anyrun.v1.PodRunningStatus";
(PodRunningStatus as MutableMessageType<PodRunningStatus>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "missed_heartbeat_deadline", kind: "scalar", T: 4, opt: true }
]);
var PodFailedStatus$Runtime = (() => class _PodFailedStatus extends Message<_PodFailedStatus> {
  declare reason: string;
  declare failureDetails?: PodFailureDetails;
  constructor(data?: PartialMessage<_PodFailedStatus>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PodFailedStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodFailedStatus {
    return new _PodFailedStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodFailedStatus {
    return new _PodFailedStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodFailedStatus {
    return new _PodFailedStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PodFailedStatus | PlainMessage<_PodFailedStatus> | undefined | null, b2: _PodFailedStatus | PlainMessage<_PodFailedStatus> | undefined | null): boolean {
    return proto3.util.equals(_PodFailedStatus as unknown as MessageType<_PodFailedStatus>, a, b2);
  }
})();
export type PodFailedStatus = InstanceType<typeof PodFailedStatus$Runtime>;
var PodFailedStatus: MessageType<PodFailedStatus> = PodFailedStatus$Runtime as unknown as MessageType<PodFailedStatus>;
(PodFailedStatus as MutableMessageType<PodFailedStatus>).runtime = proto3;
(PodFailedStatus as MutableMessageType<PodFailedStatus>).typeName = "anyrun.v1.PodFailedStatus";
(PodFailedStatus as MutableMessageType<PodFailedStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "failure_details", kind: "message", T: PodFailureDetails, opt: true }
]);
var PodTerminatedStatus$Runtime = (() => class _PodTerminatedStatus extends Message<_PodTerminatedStatus> {
  declare reason: string;
  declare exitCode?: number;
  constructor(data?: PartialMessage<_PodTerminatedStatus>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PodTerminatedStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodTerminatedStatus {
    return new _PodTerminatedStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodTerminatedStatus {
    return new _PodTerminatedStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodTerminatedStatus {
    return new _PodTerminatedStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PodTerminatedStatus | PlainMessage<_PodTerminatedStatus> | undefined | null, b2: _PodTerminatedStatus | PlainMessage<_PodTerminatedStatus> | undefined | null): boolean {
    return proto3.util.equals(_PodTerminatedStatus as unknown as MessageType<_PodTerminatedStatus>, a, b2);
  }
})();
export type PodTerminatedStatus = InstanceType<typeof PodTerminatedStatus$Runtime>;
var PodTerminatedStatus: MessageType<PodTerminatedStatus> = PodTerminatedStatus$Runtime as unknown as MessageType<PodTerminatedStatus>;
(PodTerminatedStatus as MutableMessageType<PodTerminatedStatus>).runtime = proto3;
(PodTerminatedStatus as MutableMessageType<PodTerminatedStatus>).typeName = "anyrun.v1.PodTerminatedStatus";
(PodTerminatedStatus as MutableMessageType<PodTerminatedStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "exit_code", kind: "scalar", T: 13, opt: true }
]);
var PodFailureDetails$Runtime = (() => class _PodFailureDetails extends Message<_PodFailureDetails> {
  declare details: { case: "installCommandFailure"; value: InstallCommandFailure } | { case: "dockerBuildFailure"; value: DockerBuildFailure } | { case: "gitCloneFailure"; value: GitCloneFailure } | { case: "gitCheckoutFailure"; value: GitCheckoutFailure } | { case: "containerWaitFailure"; value: ContainerWaitFailure } | { case: "imagePullFailure"; value: ImagePullFailure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PodFailureDetails>) {
    super();
    this.details = { case: void 0 };
    proto3.util.initPartial(data, this as _PodFailureDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodFailureDetails {
    return new _PodFailureDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodFailureDetails {
    return new _PodFailureDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodFailureDetails {
    return new _PodFailureDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _PodFailureDetails | PlainMessage<_PodFailureDetails> | undefined | null, b2: _PodFailureDetails | PlainMessage<_PodFailureDetails> | undefined | null): boolean {
    return proto3.util.equals(_PodFailureDetails as unknown as MessageType<_PodFailureDetails>, a, b2);
  }
})();
export type PodFailureDetails = InstanceType<typeof PodFailureDetails$Runtime>;
var PodFailureDetails: MessageType<PodFailureDetails> = PodFailureDetails$Runtime as unknown as MessageType<PodFailureDetails>;
(PodFailureDetails as MutableMessageType<PodFailureDetails>).runtime = proto3;
(PodFailureDetails as MutableMessageType<PodFailureDetails>).typeName = "anyrun.v1.PodFailureDetails";
(PodFailureDetails as MutableMessageType<PodFailureDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "install_command_failure", kind: "message", T: InstallCommandFailure, oneof: "details" },
  { no: 2, name: "docker_build_failure", kind: "message", T: DockerBuildFailure, oneof: "details" },
  { no: 3, name: "git_clone_failure", kind: "message", T: GitCloneFailure, oneof: "details" },
  { no: 4, name: "git_checkout_failure", kind: "message", T: GitCheckoutFailure, oneof: "details" },
  { no: 5, name: "container_wait_failure", kind: "message", T: ContainerWaitFailure, oneof: "details" },
  { no: 6, name: "image_pull_failure", kind: "message", T: ImagePullFailure, oneof: "details" }
]);
var ContainerWaitFailure$Runtime = (() => class _ContainerWaitFailure extends Message<_ContainerWaitFailure> {
  declare exitCode: bigint;
  declare message: string;
  constructor(data?: PartialMessage<_ContainerWaitFailure>) {
    super();
    this.exitCode = protoInt64.zero;
    this.message = "";
    proto3.util.initPartial(data, this as _ContainerWaitFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerWaitFailure {
    return new _ContainerWaitFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerWaitFailure {
    return new _ContainerWaitFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerWaitFailure {
    return new _ContainerWaitFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerWaitFailure | PlainMessage<_ContainerWaitFailure> | undefined | null, b2: _ContainerWaitFailure | PlainMessage<_ContainerWaitFailure> | undefined | null): boolean {
    return proto3.util.equals(_ContainerWaitFailure as unknown as MessageType<_ContainerWaitFailure>, a, b2);
  }
})();
export type ContainerWaitFailure = InstanceType<typeof ContainerWaitFailure$Runtime>;
var ContainerWaitFailure: MessageType<ContainerWaitFailure> = ContainerWaitFailure$Runtime as unknown as MessageType<ContainerWaitFailure>;
(ContainerWaitFailure as MutableMessageType<ContainerWaitFailure>).runtime = proto3;
(ContainerWaitFailure as MutableMessageType<ContainerWaitFailure>).typeName = "anyrun.v1.ContainerWaitFailure";
(ContainerWaitFailure as MutableMessageType<ContainerWaitFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InstallCommandFailure$Runtime = (() => class _InstallCommandFailure extends Message<_InstallCommandFailure> {
  declare isSystem: boolean;
  constructor(data?: PartialMessage<_InstallCommandFailure>) {
    super();
    this.isSystem = false;
    proto3.util.initPartial(data, this as _InstallCommandFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InstallCommandFailure {
    return new _InstallCommandFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InstallCommandFailure {
    return new _InstallCommandFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InstallCommandFailure {
    return new _InstallCommandFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _InstallCommandFailure | PlainMessage<_InstallCommandFailure> | undefined | null, b2: _InstallCommandFailure | PlainMessage<_InstallCommandFailure> | undefined | null): boolean {
    return proto3.util.equals(_InstallCommandFailure as unknown as MessageType<_InstallCommandFailure>, a, b2);
  }
})();
export type InstallCommandFailure = InstanceType<typeof InstallCommandFailure$Runtime>;
var InstallCommandFailure: MessageType<InstallCommandFailure> = InstallCommandFailure$Runtime as unknown as MessageType<InstallCommandFailure>;
(InstallCommandFailure as MutableMessageType<InstallCommandFailure>).runtime = proto3;
(InstallCommandFailure as MutableMessageType<InstallCommandFailure>).typeName = "anyrun.v1.InstallCommandFailure";
(InstallCommandFailure as MutableMessageType<InstallCommandFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_system",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DockerBuildFailure$Runtime = (() => class _DockerBuildFailure extends Message<_DockerBuildFailure> {
  declare exitCode: bigint;
  constructor(data?: PartialMessage<_DockerBuildFailure>) {
    super();
    this.exitCode = protoInt64.zero;
    proto3.util.initPartial(data, this as _DockerBuildFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DockerBuildFailure {
    return new _DockerBuildFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DockerBuildFailure {
    return new _DockerBuildFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DockerBuildFailure {
    return new _DockerBuildFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _DockerBuildFailure | PlainMessage<_DockerBuildFailure> | undefined | null, b2: _DockerBuildFailure | PlainMessage<_DockerBuildFailure> | undefined | null): boolean {
    return proto3.util.equals(_DockerBuildFailure as unknown as MessageType<_DockerBuildFailure>, a, b2);
  }
})();
export type DockerBuildFailure = InstanceType<typeof DockerBuildFailure$Runtime>;
var DockerBuildFailure: MessageType<DockerBuildFailure> = DockerBuildFailure$Runtime as unknown as MessageType<DockerBuildFailure>;
(DockerBuildFailure as MutableMessageType<DockerBuildFailure>).runtime = proto3;
(DockerBuildFailure as MutableMessageType<DockerBuildFailure>).typeName = "anyrun.v1.DockerBuildFailure";
(DockerBuildFailure as MutableMessageType<DockerBuildFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var GitCloneFailure$Runtime = (() => class _GitCloneFailure extends Message<_GitCloneFailure> {
  declare exitCode: bigint;
  declare category: GitCloneFailureCategory;
  declare retryable: boolean;
  declare remoteHost?: string;
  declare httpStatus?: number;
  constructor(data?: PartialMessage<_GitCloneFailure>) {
    super();
    this.exitCode = protoInt64.zero;
    this.category = GitCloneFailureCategory.UNSPECIFIED;
    this.retryable = false;
    proto3.util.initPartial(data, this as _GitCloneFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitCloneFailure {
    return new _GitCloneFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitCloneFailure {
    return new _GitCloneFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitCloneFailure {
    return new _GitCloneFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _GitCloneFailure | PlainMessage<_GitCloneFailure> | undefined | null, b2: _GitCloneFailure | PlainMessage<_GitCloneFailure> | undefined | null): boolean {
    return proto3.util.equals(_GitCloneFailure as unknown as MessageType<_GitCloneFailure>, a, b2);
  }
})();
export type GitCloneFailure = InstanceType<typeof GitCloneFailure$Runtime>;
var GitCloneFailure: MessageType<GitCloneFailure> = GitCloneFailure$Runtime as unknown as MessageType<GitCloneFailure>;
(GitCloneFailure as MutableMessageType<GitCloneFailure>).runtime = proto3;
(GitCloneFailure as MutableMessageType<GitCloneFailure>).typeName = "anyrun.v1.GitCloneFailure";
(GitCloneFailure as MutableMessageType<GitCloneFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "category", kind: "enum", T: proto3.getEnumType(GitCloneFailureCategory) },
  {
    no: 3,
    name: "retryable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "remote_host", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "http_status", kind: "scalar", T: 5, opt: true }
]);
var GitCheckoutFailure$Runtime = (() => class _GitCheckoutFailure extends Message<_GitCheckoutFailure> {
  declare exitCode: bigint;
  constructor(data?: PartialMessage<_GitCheckoutFailure>) {
    super();
    this.exitCode = protoInt64.zero;
    proto3.util.initPartial(data, this as _GitCheckoutFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitCheckoutFailure {
    return new _GitCheckoutFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitCheckoutFailure {
    return new _GitCheckoutFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitCheckoutFailure {
    return new _GitCheckoutFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _GitCheckoutFailure | PlainMessage<_GitCheckoutFailure> | undefined | null, b2: _GitCheckoutFailure | PlainMessage<_GitCheckoutFailure> | undefined | null): boolean {
    return proto3.util.equals(_GitCheckoutFailure as unknown as MessageType<_GitCheckoutFailure>, a, b2);
  }
})();
export type GitCheckoutFailure = InstanceType<typeof GitCheckoutFailure$Runtime>;
var GitCheckoutFailure: MessageType<GitCheckoutFailure> = GitCheckoutFailure$Runtime as unknown as MessageType<GitCheckoutFailure>;
(GitCheckoutFailure as MutableMessageType<GitCheckoutFailure>).runtime = proto3;
(GitCheckoutFailure as MutableMessageType<GitCheckoutFailure>).typeName = "anyrun.v1.GitCheckoutFailure";
(GitCheckoutFailure as MutableMessageType<GitCheckoutFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var ImagePullFailure$Runtime = (() => class _ImagePullFailure extends Message<_ImagePullFailure> {
  declare category: ImagePullFailureCategory;
  declare retryable: boolean;
  declare httpStatus?: number;
  declare repository?: string;
  constructor(data?: PartialMessage<_ImagePullFailure>) {
    super();
    this.category = ImagePullFailureCategory.UNSPECIFIED;
    this.retryable = false;
    proto3.util.initPartial(data, this as _ImagePullFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImagePullFailure {
    return new _ImagePullFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImagePullFailure {
    return new _ImagePullFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImagePullFailure {
    return new _ImagePullFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _ImagePullFailure | PlainMessage<_ImagePullFailure> | undefined | null, b2: _ImagePullFailure | PlainMessage<_ImagePullFailure> | undefined | null): boolean {
    return proto3.util.equals(_ImagePullFailure as unknown as MessageType<_ImagePullFailure>, a, b2);
  }
})();
export type ImagePullFailure = InstanceType<typeof ImagePullFailure$Runtime>;
var ImagePullFailure: MessageType<ImagePullFailure> = ImagePullFailure$Runtime as unknown as MessageType<ImagePullFailure>;
(ImagePullFailure as MutableMessageType<ImagePullFailure>).runtime = proto3;
(ImagePullFailure as MutableMessageType<ImagePullFailure>).typeName = "anyrun.v1.ImagePullFailure";
(ImagePullFailure as MutableMessageType<ImagePullFailure>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "category", kind: "enum", T: proto3.getEnumType(ImagePullFailureCategory) },
  {
    no: 2,
    name: "retryable",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "http_status", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "repository", kind: "scalar", T: 9, opt: true }
]);
var DaemonPod$Runtime = (() => class _DaemonPod extends Message<_DaemonPod> {
  declare status?: PodStatus;
  declare internalProxyPort?: number;
  declare defaultPortConfig?: DefaultPortConfig;
  declare startedFromCheckpointGroupId?: string;
  declare startedFromCheckpointId?: string;
  declare startedFromCacheSource?: PodStartCacheSource;
  declare startedFromCheckpointCreationTimestamp?: bigint;
  constructor(data?: PartialMessage<_DaemonPod>) {
    super();
    proto3.util.initPartial(data, this as _DaemonPod);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DaemonPod {
    return new _DaemonPod().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DaemonPod {
    return new _DaemonPod().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DaemonPod {
    return new _DaemonPod().fromJsonString(jsonString, options);
  }
  static equals(a: _DaemonPod | PlainMessage<_DaemonPod> | undefined | null, b2: _DaemonPod | PlainMessage<_DaemonPod> | undefined | null): boolean {
    return proto3.util.equals(_DaemonPod as unknown as MessageType<_DaemonPod>, a, b2);
  }
})();
export type DaemonPod = InstanceType<typeof DaemonPod$Runtime>;
var DaemonPod: MessageType<DaemonPod> = DaemonPod$Runtime as unknown as MessageType<DaemonPod>;
(DaemonPod as MutableMessageType<DaemonPod>).runtime = proto3;
(DaemonPod as MutableMessageType<DaemonPod>).typeName = "anyrun.v1.DaemonPod";
(DaemonPod as MutableMessageType<DaemonPod>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "status", kind: "message", T: PodStatus },
  { no: 3, name: "internal_proxy_port", kind: "scalar", T: 13, opt: true },
  { no: 4, name: "default_port_config", kind: "message", T: DefaultPortConfig, opt: true },
  { no: 5, name: "started_from_checkpoint_group_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "started_from_checkpoint_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "started_from_cache_source", kind: "enum", T: proto3.getEnumType(PodStartCacheSource), opt: true },
  { no: 7, name: "started_from_checkpoint_creation_timestamp", kind: "scalar", T: 4, opt: true }
]);


export { PodStartCacheSource, PodCreatingPhase, GitCloneFailureCategory, ImagePullFailureCategory, PodPorts, PortState, PodStatus, PodMeshLink, Pod, PodCollection, PodUpdate, PodFilter, PodCreatingStatus, PodRunningStatus, PodFailedStatus, PodTerminatedStatus, PodFailureDetails, ContainerWaitFailure, InstallCommandFailure, DockerBuildFailure, GitCloneFailure, GitCheckoutFailure, ImagePullFailure, DaemonPod };
