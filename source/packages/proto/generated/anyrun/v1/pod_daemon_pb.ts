/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:409074-410487
 * Region SHA-256: 3d8a228d9efa22d30a3e7d3b44451195393fd82b50067659ec043ab584da9569
 * BackgroundComposer closure exports: 34 messages + 3 enums = 37
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type RestartPolicy = 0 | 1 | 2 | 3;
var RestartPolicy: {
  "UNSPECIFIED": 0;
  "NEVER": 1;
  "ON_FAILURE": 2;
  "ALWAYS": 3;
  0: "UNSPECIFIED";
  1: "NEVER";
  2: "ON_FAILURE";
  3: "ALWAYS";
};
export type RestartReason = 0 | 1 | 2;
var RestartReason: {
  "UNSPECIFIED": 0;
  "PROCESS_EXITED": 1;
  "HEALTH_CHECK_FAILED": 2;
  0: "UNSPECIFIED";
  1: "PROCESS_EXITED";
  2: "HEALTH_CHECK_FAILED";
};
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
(function(RestartPolicy2) {
  RestartPolicy2[RestartPolicy2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RestartPolicy2[RestartPolicy2["NEVER"] = 1] = "NEVER";
  RestartPolicy2[RestartPolicy2["ON_FAILURE"] = 2] = "ON_FAILURE";
  RestartPolicy2[RestartPolicy2["ALWAYS"] = 3] = "ALWAYS";
})(RestartPolicy! || (RestartPolicy = {} as typeof RestartPolicy));
proto3.util.setEnumType(RestartPolicy, "anyrun.v1.RestartPolicy", [
  { no: 0, name: "RESTART_POLICY_UNSPECIFIED" },
  { no: 1, name: "RESTART_POLICY_NEVER" },
  { no: 2, name: "RESTART_POLICY_ON_FAILURE" },
  { no: 3, name: "RESTART_POLICY_ALWAYS" }
]);
(function(RestartReason2) {
  RestartReason2[RestartReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RestartReason2[RestartReason2["PROCESS_EXITED"] = 1] = "PROCESS_EXITED";
  RestartReason2[RestartReason2["HEALTH_CHECK_FAILED"] = 2] = "HEALTH_CHECK_FAILED";
})(RestartReason! || (RestartReason = {} as typeof RestartReason));
proto3.util.setEnumType(RestartReason, "anyrun.v1.RestartReason", [
  { no: 0, name: "RESTART_REASON_UNSPECIFIED" },
  { no: 1, name: "RESTART_REASON_PROCESS_EXITED" },
  { no: 2, name: "RESTART_REASON_HEALTH_CHECK_FAILED" }
]);
(function(EntryType2) {
  EntryType2[EntryType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EntryType2[EntryType2["FILE"] = 1] = "FILE";
  EntryType2[EntryType2["DIRECTORY"] = 2] = "DIRECTORY";
  EntryType2[EntryType2["SYMLINK"] = 3] = "SYMLINK";
})(EntryType! || (EntryType = {} as typeof EntryType));
proto3.util.setEnumType(EntryType, "anyrun.v1.EntryType", [
  { no: 0, name: "ENTRY_TYPE_UNSPECIFIED" },
  { no: 1, name: "ENTRY_TYPE_FILE" },
  { no: 2, name: "ENTRY_TYPE_DIRECTORY" },
  { no: 3, name: "ENTRY_TYPE_SYMLINK" }
]);
var CreateProcessRequest$Runtime = (() => class _CreateProcessRequest extends Message<_CreateProcessRequest> {
  declare command: string[];
  declare user: string;
  declare workingDirectory: string;
  declare env: { [key: string]: string };
  declare idempotencyKey?: string;
  declare supervision?: ProcessSupervision;
  constructor(data?: PartialMessage<_CreateProcessRequest>) {
    super();
    this.command = [];
    this.user = "";
    this.workingDirectory = "";
    this.env = {};
    proto3.util.initPartial(data, this as _CreateProcessRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateProcessRequest {
    return new _CreateProcessRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateProcessRequest {
    return new _CreateProcessRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateProcessRequest {
    return new _CreateProcessRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateProcessRequest | PlainMessage<_CreateProcessRequest> | undefined | null, b2: _CreateProcessRequest | PlainMessage<_CreateProcessRequest> | undefined | null): boolean {
    return proto3.util.equals(_CreateProcessRequest as unknown as MessageType<_CreateProcessRequest>, a, b2);
  }
})();
export type CreateProcessRequest = InstanceType<typeof CreateProcessRequest$Runtime>;
var CreateProcessRequest: MessageType<CreateProcessRequest> = CreateProcessRequest$Runtime as unknown as MessageType<CreateProcessRequest>;
(CreateProcessRequest as MutableMessageType<CreateProcessRequest>).runtime = proto3;
(CreateProcessRequest as MutableMessageType<CreateProcessRequest>).typeName = "anyrun.v1.CreateProcessRequest";
(CreateProcessRequest as MutableMessageType<CreateProcessRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "command", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "user",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "env", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 5, name: "idempotency_key", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "supervision", kind: "message", T: ProcessSupervision, opt: true }
]);
var CreateProcessResponse$Runtime = (() => class _CreateProcessResponse extends Message<_CreateProcessResponse> {
  declare pid: bigint;
  declare reusedExistingPid: boolean;
  declare processPid?: bigint;
  constructor(data?: PartialMessage<_CreateProcessResponse>) {
    super();
    this.pid = protoInt64.zero;
    this.reusedExistingPid = false;
    proto3.util.initPartial(data, this as _CreateProcessResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateProcessResponse {
    return new _CreateProcessResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateProcessResponse {
    return new _CreateProcessResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateProcessResponse {
    return new _CreateProcessResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateProcessResponse | PlainMessage<_CreateProcessResponse> | undefined | null, b2: _CreateProcessResponse | PlainMessage<_CreateProcessResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreateProcessResponse as unknown as MessageType<_CreateProcessResponse>, a, b2);
  }
})();
export type CreateProcessResponse = InstanceType<typeof CreateProcessResponse$Runtime>;
var CreateProcessResponse: MessageType<CreateProcessResponse> = CreateProcessResponse$Runtime as unknown as MessageType<CreateProcessResponse>;
(CreateProcessResponse as MutableMessageType<CreateProcessResponse>).runtime = proto3;
(CreateProcessResponse as MutableMessageType<CreateProcessResponse>).typeName = "anyrun.v1.CreateProcessResponse";
(CreateProcessResponse as MutableMessageType<CreateProcessResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "reused_existing_pid",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "process_pid", kind: "scalar", T: 3, opt: true }
]);
var AttachProcessRequest$Runtime = (() => class _AttachProcessRequest extends Message<_AttachProcessRequest> {
  declare pid: bigint;
  declare lastEventId?: string;
  constructor(data?: PartialMessage<_AttachProcessRequest>) {
    super();
    this.pid = protoInt64.zero;
    proto3.util.initPartial(data, this as _AttachProcessRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AttachProcessRequest {
    return new _AttachProcessRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AttachProcessRequest {
    return new _AttachProcessRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AttachProcessRequest {
    return new _AttachProcessRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AttachProcessRequest | PlainMessage<_AttachProcessRequest> | undefined | null, b2: _AttachProcessRequest | PlainMessage<_AttachProcessRequest> | undefined | null): boolean {
    return proto3.util.equals(_AttachProcessRequest as unknown as MessageType<_AttachProcessRequest>, a, b2);
  }
})();
export type AttachProcessRequest = InstanceType<typeof AttachProcessRequest$Runtime>;
var AttachProcessRequest: MessageType<AttachProcessRequest> = AttachProcessRequest$Runtime as unknown as MessageType<AttachProcessRequest>;
(AttachProcessRequest as MutableMessageType<AttachProcessRequest>).runtime = proto3;
(AttachProcessRequest as MutableMessageType<AttachProcessRequest>).typeName = "anyrun.v1.AttachProcessRequest";
(AttachProcessRequest as MutableMessageType<AttachProcessRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "last_event_id", kind: "scalar", T: 9, opt: true }
]);
var StreamMetricsRequest$Runtime = (() => class _StreamMetricsRequest extends Message<_StreamMetricsRequest> {
  constructor(data?: PartialMessage<_StreamMetricsRequest>) {
    super();
    proto3.util.initPartial(data, this as _StreamMetricsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamMetricsRequest {
    return new _StreamMetricsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamMetricsRequest {
    return new _StreamMetricsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamMetricsRequest {
    return new _StreamMetricsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamMetricsRequest | PlainMessage<_StreamMetricsRequest> | undefined | null, b2: _StreamMetricsRequest | PlainMessage<_StreamMetricsRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamMetricsRequest as unknown as MessageType<_StreamMetricsRequest>, a, b2);
  }
})();
export type StreamMetricsRequest = InstanceType<typeof StreamMetricsRequest$Runtime>;
var StreamMetricsRequest: MessageType<StreamMetricsRequest> = StreamMetricsRequest$Runtime as unknown as MessageType<StreamMetricsRequest>;
(StreamMetricsRequest as MutableMessageType<StreamMetricsRequest>).runtime = proto3;
(StreamMetricsRequest as MutableMessageType<StreamMetricsRequest>).typeName = "anyrun.v1.StreamMetricsRequest";
(StreamMetricsRequest as MutableMessageType<StreamMetricsRequest>).fields = proto3.util.newFieldList(() => []);
var PodMetricsSample$Runtime = (() => class _PodMetricsSample extends Message<_PodMetricsSample> {
  declare cpuUsageMcores: bigint;
  declare cpuLimitMcores: bigint;
  declare memoryUsageBytes: bigint;
  declare memoryLimitBytes: bigint;
  declare cgroupMemoryCurrentBytes: bigint;
  declare cgroupMemoryMaxBytes: bigint;
  declare oomKillCount: bigint;
  declare pidsCurrent: bigint;
  declare pidsMax: bigint;
  declare processCount: bigint;
  declare newProcsThisInterval: bigint;
  declare procsSeenTotal: bigint;
  declare processStateCounts: { [key: string]: bigint };
  declare topProcsByName: { [key: string]: bigint };
  declare topProcs: TopProcess[];
  declare memoryPsiFullAvg10: number;
  declare oomVictimPid: bigint;
  declare oomVictimComm: string;
  declare oomVictimRssKb: bigint;
  declare diskUsageByDevice: PodDiskUsage[];
  declare eventStreamSubscribersFellBehindTotal: bigint;
  declare cpuPsiSomeAvg10: number;
  declare memoryBreakdown?: PodMemoryBreakdown;
  constructor(data?: PartialMessage<_PodMetricsSample>) {
    super();
    this.cpuUsageMcores = protoInt64.zero;
    this.cpuLimitMcores = protoInt64.zero;
    this.memoryUsageBytes = protoInt64.zero;
    this.memoryLimitBytes = protoInt64.zero;
    this.cgroupMemoryCurrentBytes = protoInt64.zero;
    this.cgroupMemoryMaxBytes = protoInt64.zero;
    this.oomKillCount = protoInt64.zero;
    this.pidsCurrent = protoInt64.zero;
    this.pidsMax = protoInt64.zero;
    this.processCount = protoInt64.zero;
    this.newProcsThisInterval = protoInt64.zero;
    this.procsSeenTotal = protoInt64.zero;
    this.processStateCounts = {};
    this.topProcsByName = {};
    this.topProcs = [];
    this.memoryPsiFullAvg10 = 0;
    this.oomVictimPid = protoInt64.zero;
    this.oomVictimComm = "";
    this.oomVictimRssKb = protoInt64.zero;
    this.diskUsageByDevice = [];
    this.eventStreamSubscribersFellBehindTotal = protoInt64.zero;
    this.cpuPsiSomeAvg10 = 0;
    proto3.util.initPartial(data, this as _PodMetricsSample);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodMetricsSample {
    return new _PodMetricsSample().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodMetricsSample {
    return new _PodMetricsSample().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodMetricsSample {
    return new _PodMetricsSample().fromJsonString(jsonString, options);
  }
  static equals(a: _PodMetricsSample | PlainMessage<_PodMetricsSample> | undefined | null, b2: _PodMetricsSample | PlainMessage<_PodMetricsSample> | undefined | null): boolean {
    return proto3.util.equals(_PodMetricsSample as unknown as MessageType<_PodMetricsSample>, a, b2);
  }
})();
export type PodMetricsSample = InstanceType<typeof PodMetricsSample$Runtime>;
var PodMetricsSample: MessageType<PodMetricsSample> = PodMetricsSample$Runtime as unknown as MessageType<PodMetricsSample>;
(PodMetricsSample as MutableMessageType<PodMetricsSample>).runtime = proto3;
(PodMetricsSample as MutableMessageType<PodMetricsSample>).typeName = "anyrun.v1.PodMetricsSample";
(PodMetricsSample as MutableMessageType<PodMetricsSample>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cpu_usage_mcores",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "cpu_limit_mcores",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "memory_usage_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 4,
    name: "memory_limit_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "cgroup_memory_current_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 6,
    name: "cgroup_memory_max_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 7,
    name: "oom_kill_count",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 8,
    name: "pids_current",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 9,
    name: "pids_max",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 10,
    name: "process_count",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 12,
    name: "new_procs_this_interval",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 13,
    name: "procs_seen_total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 14, name: "process_state_counts", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  } },
  { no: 15, name: "top_procs_by_name", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  } },
  { no: 16, name: "top_procs", kind: "message", T: TopProcess, repeated: true },
  {
    no: 17,
    name: "memory_psi_full_avg10",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 18,
    name: "oom_victim_pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 19,
    name: "oom_victim_comm",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 20,
    name: "oom_victim_rss_kb",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 21, name: "disk_usage_by_device", kind: "message", T: PodDiskUsage, repeated: true },
  {
    no: 22,
    name: "event_stream_subscribers_fell_behind_total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 23,
    name: "cpu_psi_some_avg10",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 24, name: "memory_breakdown", kind: "message", T: PodMemoryBreakdown }
]);
var PodMemoryBreakdown$Runtime = (() => class _PodMemoryBreakdown extends Message<_PodMemoryBreakdown> {
  declare allProcessRssBytes: bigint;
  declare processRssCount: bigint;
  declare cgroupAnonBytes?: bigint;
  declare cgroupFileBytes?: bigint;
  declare cgroupKernelBytes?: bigint;
  constructor(data?: PartialMessage<_PodMemoryBreakdown>) {
    super();
    this.allProcessRssBytes = protoInt64.zero;
    this.processRssCount = protoInt64.zero;
    proto3.util.initPartial(data, this as _PodMemoryBreakdown);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodMemoryBreakdown {
    return new _PodMemoryBreakdown().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodMemoryBreakdown {
    return new _PodMemoryBreakdown().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodMemoryBreakdown {
    return new _PodMemoryBreakdown().fromJsonString(jsonString, options);
  }
  static equals(a: _PodMemoryBreakdown | PlainMessage<_PodMemoryBreakdown> | undefined | null, b2: _PodMemoryBreakdown | PlainMessage<_PodMemoryBreakdown> | undefined | null): boolean {
    return proto3.util.equals(_PodMemoryBreakdown as unknown as MessageType<_PodMemoryBreakdown>, a, b2);
  }
})();
export type PodMemoryBreakdown = InstanceType<typeof PodMemoryBreakdown$Runtime>;
var PodMemoryBreakdown: MessageType<PodMemoryBreakdown> = PodMemoryBreakdown$Runtime as unknown as MessageType<PodMemoryBreakdown>;
(PodMemoryBreakdown as MutableMessageType<PodMemoryBreakdown>).runtime = proto3;
(PodMemoryBreakdown as MutableMessageType<PodMemoryBreakdown>).typeName = "anyrun.v1.PodMemoryBreakdown";
(PodMemoryBreakdown as MutableMessageType<PodMemoryBreakdown>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "all_process_rss_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "process_rss_count",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 3, name: "cgroup_anon_bytes", kind: "scalar", T: 4, opt: true },
  { no: 4, name: "cgroup_file_bytes", kind: "scalar", T: 4, opt: true },
  { no: 5, name: "cgroup_kernel_bytes", kind: "scalar", T: 4, opt: true }
]);
var PodDiskUsage$Runtime = (() => class _PodDiskUsage extends Message<_PodDiskUsage> {
  declare device: string;
  declare usageBytes: bigint;
  declare limitBytes: bigint;
  declare path: string;
  constructor(data?: PartialMessage<_PodDiskUsage>) {
    super();
    this.device = "";
    this.usageBytes = protoInt64.zero;
    this.limitBytes = protoInt64.zero;
    this.path = "";
    proto3.util.initPartial(data, this as _PodDiskUsage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodDiskUsage {
    return new _PodDiskUsage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodDiskUsage {
    return new _PodDiskUsage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodDiskUsage {
    return new _PodDiskUsage().fromJsonString(jsonString, options);
  }
  static equals(a: _PodDiskUsage | PlainMessage<_PodDiskUsage> | undefined | null, b2: _PodDiskUsage | PlainMessage<_PodDiskUsage> | undefined | null): boolean {
    return proto3.util.equals(_PodDiskUsage as unknown as MessageType<_PodDiskUsage>, a, b2);
  }
})();
export type PodDiskUsage = InstanceType<typeof PodDiskUsage$Runtime>;
var PodDiskUsage: MessageType<PodDiskUsage> = PodDiskUsage$Runtime as unknown as MessageType<PodDiskUsage>;
(PodDiskUsage as MutableMessageType<PodDiskUsage>).runtime = proto3;
(PodDiskUsage as MutableMessageType<PodDiskUsage>).typeName = "anyrun.v1.PodDiskUsage";
(PodDiskUsage as MutableMessageType<PodDiskUsage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "device",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "usage_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "limit_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 4,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TopProcess$Runtime = (() => class _TopProcess extends Message<_TopProcess> {
  declare pid: bigint;
  declare ppid: bigint;
  declare comm: string;
  declare state: string;
  declare rssKb: bigint;
  declare threads: bigint;
  declare numFds: bigint;
  declare cpuTicksDelta: bigint;
  constructor(data?: PartialMessage<_TopProcess>) {
    super();
    this.pid = protoInt64.zero;
    this.ppid = protoInt64.zero;
    this.comm = "";
    this.state = "";
    this.rssKb = protoInt64.zero;
    this.threads = protoInt64.zero;
    this.numFds = protoInt64.zero;
    this.cpuTicksDelta = protoInt64.zero;
    proto3.util.initPartial(data, this as _TopProcess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TopProcess {
    return new _TopProcess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TopProcess {
    return new _TopProcess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TopProcess {
    return new _TopProcess().fromJsonString(jsonString, options);
  }
  static equals(a: _TopProcess | PlainMessage<_TopProcess> | undefined | null, b2: _TopProcess | PlainMessage<_TopProcess> | undefined | null): boolean {
    return proto3.util.equals(_TopProcess as unknown as MessageType<_TopProcess>, a, b2);
  }
})();
export type TopProcess = InstanceType<typeof TopProcess$Runtime>;
var TopProcess: MessageType<TopProcess> = TopProcess$Runtime as unknown as MessageType<TopProcess>;
(TopProcess as MutableMessageType<TopProcess>).runtime = proto3;
(TopProcess as MutableMessageType<TopProcess>).typeName = "anyrun.v1.TopProcess";
(TopProcess as MutableMessageType<TopProcess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "ppid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "comm",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "state",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "rss_kb",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 6,
    name: "threads",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 7,
    name: "num_fds",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 8,
    name: "cpu_ticks_delta",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var GetProcessStatusRequest$Runtime = (() => class _GetProcessStatusRequest extends Message<_GetProcessStatusRequest> {
  declare pid: bigint;
  constructor(data?: PartialMessage<_GetProcessStatusRequest>) {
    super();
    this.pid = protoInt64.zero;
    proto3.util.initPartial(data, this as _GetProcessStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProcessStatusRequest {
    return new _GetProcessStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProcessStatusRequest {
    return new _GetProcessStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProcessStatusRequest {
    return new _GetProcessStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProcessStatusRequest | PlainMessage<_GetProcessStatusRequest> | undefined | null, b2: _GetProcessStatusRequest | PlainMessage<_GetProcessStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetProcessStatusRequest as unknown as MessageType<_GetProcessStatusRequest>, a, b2);
  }
})();
export type GetProcessStatusRequest = InstanceType<typeof GetProcessStatusRequest$Runtime>;
var GetProcessStatusRequest: MessageType<GetProcessStatusRequest> = GetProcessStatusRequest$Runtime as unknown as MessageType<GetProcessStatusRequest>;
(GetProcessStatusRequest as MutableMessageType<GetProcessStatusRequest>).runtime = proto3;
(GetProcessStatusRequest as MutableMessageType<GetProcessStatusRequest>).typeName = "anyrun.v1.GetProcessStatusRequest";
(GetProcessStatusRequest as MutableMessageType<GetProcessStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var GetProcessStatusResponse$Runtime = (() => class _GetProcessStatusResponse extends Message<_GetProcessStatusResponse> {
  declare status: { case: "running"; value: GetProcessStatusResponse_Running } | { case: "completed"; value: GetProcessStatusResponse_Completed } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GetProcessStatusResponse>) {
    super();
    this.status = { case: void 0 };
    proto3.util.initPartial(data, this as _GetProcessStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProcessStatusResponse {
    return new _GetProcessStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse {
    return new _GetProcessStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse {
    return new _GetProcessStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProcessStatusResponse | PlainMessage<_GetProcessStatusResponse> | undefined | null, b2: _GetProcessStatusResponse | PlainMessage<_GetProcessStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetProcessStatusResponse as unknown as MessageType<_GetProcessStatusResponse>, a, b2);
  }
})();
export type GetProcessStatusResponse = InstanceType<typeof GetProcessStatusResponse$Runtime>;
var GetProcessStatusResponse: MessageType<GetProcessStatusResponse> = GetProcessStatusResponse$Runtime as unknown as MessageType<GetProcessStatusResponse>;
(GetProcessStatusResponse as MutableMessageType<GetProcessStatusResponse>).runtime = proto3;
(GetProcessStatusResponse as MutableMessageType<GetProcessStatusResponse>).typeName = "anyrun.v1.GetProcessStatusResponse";
(GetProcessStatusResponse as MutableMessageType<GetProcessStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "running", kind: "message", T: GetProcessStatusResponse_Running, oneof: "status" },
  { no: 2, name: "completed", kind: "message", T: GetProcessStatusResponse_Completed, oneof: "status" }
]);
var GetProcessStatusResponse_Running$Runtime = (() => class _GetProcessStatusResponse_Running extends Message<_GetProcessStatusResponse_Running> {
  constructor(data?: PartialMessage<_GetProcessStatusResponse_Running>) {
    super();
    proto3.util.initPartial(data, this as _GetProcessStatusResponse_Running);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProcessStatusResponse_Running {
    return new _GetProcessStatusResponse_Running().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse_Running {
    return new _GetProcessStatusResponse_Running().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse_Running {
    return new _GetProcessStatusResponse_Running().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProcessStatusResponse_Running | PlainMessage<_GetProcessStatusResponse_Running> | undefined | null, b2: _GetProcessStatusResponse_Running | PlainMessage<_GetProcessStatusResponse_Running> | undefined | null): boolean {
    return proto3.util.equals(_GetProcessStatusResponse_Running as unknown as MessageType<_GetProcessStatusResponse_Running>, a, b2);
  }
})();
export type GetProcessStatusResponse_Running = InstanceType<typeof GetProcessStatusResponse_Running$Runtime>;
var GetProcessStatusResponse_Running: MessageType<GetProcessStatusResponse_Running> = GetProcessStatusResponse_Running$Runtime as unknown as MessageType<GetProcessStatusResponse_Running>;
(GetProcessStatusResponse_Running as MutableMessageType<GetProcessStatusResponse_Running>).runtime = proto3;
(GetProcessStatusResponse_Running as MutableMessageType<GetProcessStatusResponse_Running>).typeName = "anyrun.v1.GetProcessStatusResponse.Running";
(GetProcessStatusResponse_Running as MutableMessageType<GetProcessStatusResponse_Running>).fields = proto3.util.newFieldList(() => []);
var GetProcessStatusResponse_Completed$Runtime = (() => class _GetProcessStatusResponse_Completed extends Message<_GetProcessStatusResponse_Completed> {
  declare exitCode: number;
  constructor(data?: PartialMessage<_GetProcessStatusResponse_Completed>) {
    super();
    this.exitCode = 0;
    proto3.util.initPartial(data, this as _GetProcessStatusResponse_Completed);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProcessStatusResponse_Completed {
    return new _GetProcessStatusResponse_Completed().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse_Completed {
    return new _GetProcessStatusResponse_Completed().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProcessStatusResponse_Completed {
    return new _GetProcessStatusResponse_Completed().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProcessStatusResponse_Completed | PlainMessage<_GetProcessStatusResponse_Completed> | undefined | null, b2: _GetProcessStatusResponse_Completed | PlainMessage<_GetProcessStatusResponse_Completed> | undefined | null): boolean {
    return proto3.util.equals(_GetProcessStatusResponse_Completed as unknown as MessageType<_GetProcessStatusResponse_Completed>, a, b2);
  }
})();
export type GetProcessStatusResponse_Completed = InstanceType<typeof GetProcessStatusResponse_Completed$Runtime>;
var GetProcessStatusResponse_Completed: MessageType<GetProcessStatusResponse_Completed> = GetProcessStatusResponse_Completed$Runtime as unknown as MessageType<GetProcessStatusResponse_Completed>;
(GetProcessStatusResponse_Completed as MutableMessageType<GetProcessStatusResponse_Completed>).runtime = proto3;
(GetProcessStatusResponse_Completed as MutableMessageType<GetProcessStatusResponse_Completed>).typeName = "anyrun.v1.GetProcessStatusResponse.Completed";
(GetProcessStatusResponse_Completed as MutableMessageType<GetProcessStatusResponse_Completed>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ListProcessesRequest$Runtime = (() => class _ListProcessesRequest extends Message<_ListProcessesRequest> {
  constructor(data?: PartialMessage<_ListProcessesRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListProcessesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListProcessesRequest {
    return new _ListProcessesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListProcessesRequest {
    return new _ListProcessesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListProcessesRequest {
    return new _ListProcessesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListProcessesRequest | PlainMessage<_ListProcessesRequest> | undefined | null, b2: _ListProcessesRequest | PlainMessage<_ListProcessesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListProcessesRequest as unknown as MessageType<_ListProcessesRequest>, a, b2);
  }
})();
export type ListProcessesRequest = InstanceType<typeof ListProcessesRequest$Runtime>;
var ListProcessesRequest: MessageType<ListProcessesRequest> = ListProcessesRequest$Runtime as unknown as MessageType<ListProcessesRequest>;
(ListProcessesRequest as MutableMessageType<ListProcessesRequest>).runtime = proto3;
(ListProcessesRequest as MutableMessageType<ListProcessesRequest>).typeName = "anyrun.v1.ListProcessesRequest";
(ListProcessesRequest as MutableMessageType<ListProcessesRequest>).fields = proto3.util.newFieldList(() => []);
var ListedProcess$Runtime = (() => class _ListedProcess extends Message<_ListedProcess> {
  declare pid: bigint;
  declare status?: GetProcessStatusResponse;
  constructor(data?: PartialMessage<_ListedProcess>) {
    super();
    this.pid = protoInt64.zero;
    proto3.util.initPartial(data, this as _ListedProcess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListedProcess {
    return new _ListedProcess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListedProcess {
    return new _ListedProcess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListedProcess {
    return new _ListedProcess().fromJsonString(jsonString, options);
  }
  static equals(a: _ListedProcess | PlainMessage<_ListedProcess> | undefined | null, b2: _ListedProcess | PlainMessage<_ListedProcess> | undefined | null): boolean {
    return proto3.util.equals(_ListedProcess as unknown as MessageType<_ListedProcess>, a, b2);
  }
})();
export type ListedProcess = InstanceType<typeof ListedProcess$Runtime>;
var ListedProcess: MessageType<ListedProcess> = ListedProcess$Runtime as unknown as MessageType<ListedProcess>;
(ListedProcess as MutableMessageType<ListedProcess>).runtime = proto3;
(ListedProcess as MutableMessageType<ListedProcess>).typeName = "anyrun.v1.ListedProcess";
(ListedProcess as MutableMessageType<ListedProcess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pid",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "status", kind: "message", T: GetProcessStatusResponse }
]);
var ListProcessesResponse$Runtime = (() => class _ListProcessesResponse extends Message<_ListProcessesResponse> {
  declare processes: ListedProcess[];
  constructor(data?: PartialMessage<_ListProcessesResponse>) {
    super();
    this.processes = [];
    proto3.util.initPartial(data, this as _ListProcessesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListProcessesResponse {
    return new _ListProcessesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListProcessesResponse {
    return new _ListProcessesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListProcessesResponse {
    return new _ListProcessesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListProcessesResponse | PlainMessage<_ListProcessesResponse> | undefined | null, b2: _ListProcessesResponse | PlainMessage<_ListProcessesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListProcessesResponse as unknown as MessageType<_ListProcessesResponse>, a, b2);
  }
})();
export type ListProcessesResponse = InstanceType<typeof ListProcessesResponse$Runtime>;
var ListProcessesResponse: MessageType<ListProcessesResponse> = ListProcessesResponse$Runtime as unknown as MessageType<ListProcessesResponse>;
(ListProcessesResponse as MutableMessageType<ListProcessesResponse>).runtime = proto3;
(ListProcessesResponse as MutableMessageType<ListProcessesResponse>).typeName = "anyrun.v1.ListProcessesResponse";
(ListProcessesResponse as MutableMessageType<ListProcessesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "processes", kind: "message", T: ListedProcess, repeated: true }
]);
var ProcessEvent$Runtime = (() => class _ProcessEvent extends Message<_ProcessEvent> {
  declare eventId: string;
  declare data: { case: "stdout"; value: StdoutData } | { case: "stderr"; value: StderrData } | { case: "exited"; value: ProcessExited } | { case: "restarted"; value: ProcessRestarted } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ProcessEvent>) {
    super();
    this.eventId = "";
    this.data = { case: void 0 };
    proto3.util.initPartial(data, this as _ProcessEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProcessEvent {
    return new _ProcessEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProcessEvent {
    return new _ProcessEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProcessEvent {
    return new _ProcessEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ProcessEvent | PlainMessage<_ProcessEvent> | undefined | null, b2: _ProcessEvent | PlainMessage<_ProcessEvent> | undefined | null): boolean {
    return proto3.util.equals(_ProcessEvent as unknown as MessageType<_ProcessEvent>, a, b2);
  }
})();
export type ProcessEvent = InstanceType<typeof ProcessEvent$Runtime>;
var ProcessEvent: MessageType<ProcessEvent> = ProcessEvent$Runtime as unknown as MessageType<ProcessEvent>;
(ProcessEvent as MutableMessageType<ProcessEvent>).runtime = proto3;
(ProcessEvent as MutableMessageType<ProcessEvent>).typeName = "anyrun.v1.ProcessEvent";
(ProcessEvent as MutableMessageType<ProcessEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "stdout", kind: "message", T: StdoutData, oneof: "data" },
  { no: 3, name: "stderr", kind: "message", T: StderrData, oneof: "data" },
  { no: 4, name: "exited", kind: "message", T: ProcessExited, oneof: "data" },
  { no: 5, name: "restarted", kind: "message", T: ProcessRestarted, oneof: "data" }
]);
var ProcessSupervision$Runtime = (() => class _ProcessSupervision extends Message<_ProcessSupervision> {
  declare restartPolicy: RestartPolicy;
  declare backoff?: RestartBackoff;
  declare healthCheck?: HttpHealthCheck;
  declare exclusiveGroup?: string;
  constructor(data?: PartialMessage<_ProcessSupervision>) {
    super();
    this.restartPolicy = RestartPolicy.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ProcessSupervision);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProcessSupervision {
    return new _ProcessSupervision().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProcessSupervision {
    return new _ProcessSupervision().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProcessSupervision {
    return new _ProcessSupervision().fromJsonString(jsonString, options);
  }
  static equals(a: _ProcessSupervision | PlainMessage<_ProcessSupervision> | undefined | null, b2: _ProcessSupervision | PlainMessage<_ProcessSupervision> | undefined | null): boolean {
    return proto3.util.equals(_ProcessSupervision as unknown as MessageType<_ProcessSupervision>, a, b2);
  }
})();
export type ProcessSupervision = InstanceType<typeof ProcessSupervision$Runtime>;
var ProcessSupervision: MessageType<ProcessSupervision> = ProcessSupervision$Runtime as unknown as MessageType<ProcessSupervision>;
(ProcessSupervision as MutableMessageType<ProcessSupervision>).runtime = proto3;
(ProcessSupervision as MutableMessageType<ProcessSupervision>).typeName = "anyrun.v1.ProcessSupervision";
(ProcessSupervision as MutableMessageType<ProcessSupervision>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "restart_policy", kind: "enum", T: proto3.getEnumType(RestartPolicy) },
  { no: 2, name: "backoff", kind: "message", T: RestartBackoff, opt: true },
  { no: 3, name: "health_check", kind: "message", T: HttpHealthCheck, opt: true },
  { no: 4, name: "exclusive_group", kind: "scalar", T: 9, opt: true }
]);
var RestartBackoff$Runtime = (() => class _RestartBackoff extends Message<_RestartBackoff> {
  declare initialMs: number;
  declare maxMs: number;
  declare multiplier: number;
  declare resetAfterHealthyMs: number;
  constructor(data?: PartialMessage<_RestartBackoff>) {
    super();
    this.initialMs = 0;
    this.maxMs = 0;
    this.multiplier = 0;
    this.resetAfterHealthyMs = 0;
    proto3.util.initPartial(data, this as _RestartBackoff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RestartBackoff {
    return new _RestartBackoff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RestartBackoff {
    return new _RestartBackoff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RestartBackoff {
    return new _RestartBackoff().fromJsonString(jsonString, options);
  }
  static equals(a: _RestartBackoff | PlainMessage<_RestartBackoff> | undefined | null, b2: _RestartBackoff | PlainMessage<_RestartBackoff> | undefined | null): boolean {
    return proto3.util.equals(_RestartBackoff as unknown as MessageType<_RestartBackoff>, a, b2);
  }
})();
export type RestartBackoff = InstanceType<typeof RestartBackoff$Runtime>;
var RestartBackoff: MessageType<RestartBackoff> = RestartBackoff$Runtime as unknown as MessageType<RestartBackoff>;
(RestartBackoff as MutableMessageType<RestartBackoff>).runtime = proto3;
(RestartBackoff as MutableMessageType<RestartBackoff>).typeName = "anyrun.v1.RestartBackoff";
(RestartBackoff as MutableMessageType<RestartBackoff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "initial_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "max_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "multiplier",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 4,
    name: "reset_after_healthy_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var HttpHealthCheck$Runtime = (() => class _HttpHealthCheck extends Message<_HttpHealthCheck> {
  declare url: string;
  declare method: string;
  declare headers: { [key: string]: string };
  declare body: Uint8Array;
  declare intervalMs: number;
  declare timeoutMs: number;
  declare startPeriodMs: number;
  declare unhealthyThreshold: number;
  constructor(data?: PartialMessage<_HttpHealthCheck>) {
    super();
    this.url = "";
    this.method = "";
    this.headers = {};
    this.body = new Uint8Array(0);
    this.intervalMs = 0;
    this.timeoutMs = 0;
    this.startPeriodMs = 0;
    this.unhealthyThreshold = 0;
    proto3.util.initPartial(data, this as _HttpHealthCheck);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HttpHealthCheck {
    return new _HttpHealthCheck().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HttpHealthCheck {
    return new _HttpHealthCheck().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HttpHealthCheck {
    return new _HttpHealthCheck().fromJsonString(jsonString, options);
  }
  static equals(a: _HttpHealthCheck | PlainMessage<_HttpHealthCheck> | undefined | null, b2: _HttpHealthCheck | PlainMessage<_HttpHealthCheck> | undefined | null): boolean {
    return proto3.util.equals(_HttpHealthCheck as unknown as MessageType<_HttpHealthCheck>, a, b2);
  }
})();
export type HttpHealthCheck = InstanceType<typeof HttpHealthCheck$Runtime>;
var HttpHealthCheck: MessageType<HttpHealthCheck> = HttpHealthCheck$Runtime as unknown as MessageType<HttpHealthCheck>;
(HttpHealthCheck as MutableMessageType<HttpHealthCheck>).runtime = proto3;
(HttpHealthCheck as MutableMessageType<HttpHealthCheck>).typeName = "anyrun.v1.HttpHealthCheck";
(HttpHealthCheck as MutableMessageType<HttpHealthCheck>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "method",
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
    name: "body",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 5,
    name: "interval_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 6,
    name: "timeout_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 7,
    name: "start_period_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 8,
    name: "unhealthy_threshold",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var StdoutData$Runtime = (() => class _StdoutData extends Message<_StdoutData> {
  declare data: Uint8Array;
  constructor(data?: PartialMessage<_StdoutData>) {
    super();
    this.data = new Uint8Array(0);
    proto3.util.initPartial(data, this as _StdoutData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StdoutData {
    return new _StdoutData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StdoutData {
    return new _StdoutData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StdoutData {
    return new _StdoutData().fromJsonString(jsonString, options);
  }
  static equals(a: _StdoutData | PlainMessage<_StdoutData> | undefined | null, b2: _StdoutData | PlainMessage<_StdoutData> | undefined | null): boolean {
    return proto3.util.equals(_StdoutData as unknown as MessageType<_StdoutData>, a, b2);
  }
})();
export type StdoutData = InstanceType<typeof StdoutData$Runtime>;
var StdoutData: MessageType<StdoutData> = StdoutData$Runtime as unknown as MessageType<StdoutData>;
(StdoutData as MutableMessageType<StdoutData>).runtime = proto3;
(StdoutData as MutableMessageType<StdoutData>).typeName = "anyrun.v1.StdoutData";
(StdoutData as MutableMessageType<StdoutData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var StderrData$Runtime = (() => class _StderrData extends Message<_StderrData> {
  declare data: Uint8Array;
  constructor(data?: PartialMessage<_StderrData>) {
    super();
    this.data = new Uint8Array(0);
    proto3.util.initPartial(data, this as _StderrData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StderrData {
    return new _StderrData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StderrData {
    return new _StderrData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StderrData {
    return new _StderrData().fromJsonString(jsonString, options);
  }
  static equals(a: _StderrData | PlainMessage<_StderrData> | undefined | null, b2: _StderrData | PlainMessage<_StderrData> | undefined | null): boolean {
    return proto3.util.equals(_StderrData as unknown as MessageType<_StderrData>, a, b2);
  }
})();
export type StderrData = InstanceType<typeof StderrData$Runtime>;
var StderrData: MessageType<StderrData> = StderrData$Runtime as unknown as MessageType<StderrData>;
(StderrData as MutableMessageType<StderrData>).runtime = proto3;
(StderrData as MutableMessageType<StderrData>).typeName = "anyrun.v1.StderrData";
(StderrData as MutableMessageType<StderrData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var ProcessExited$Runtime = (() => class _ProcessExited extends Message<_ProcessExited> {
  declare exitCode: number;
  constructor(data?: PartialMessage<_ProcessExited>) {
    super();
    this.exitCode = 0;
    proto3.util.initPartial(data, this as _ProcessExited);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProcessExited {
    return new _ProcessExited().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProcessExited {
    return new _ProcessExited().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProcessExited {
    return new _ProcessExited().fromJsonString(jsonString, options);
  }
  static equals(a: _ProcessExited | PlainMessage<_ProcessExited> | undefined | null, b2: _ProcessExited | PlainMessage<_ProcessExited> | undefined | null): boolean {
    return proto3.util.equals(_ProcessExited as unknown as MessageType<_ProcessExited>, a, b2);
  }
})();
export type ProcessExited = InstanceType<typeof ProcessExited$Runtime>;
var ProcessExited: MessageType<ProcessExited> = ProcessExited$Runtime as unknown as MessageType<ProcessExited>;
(ProcessExited as MutableMessageType<ProcessExited>).runtime = proto3;
(ProcessExited as MutableMessageType<ProcessExited>).typeName = "anyrun.v1.ProcessExited";
(ProcessExited as MutableMessageType<ProcessExited>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ProcessRestarted$Runtime = (() => class _ProcessRestarted extends Message<_ProcessRestarted> {
  declare attempt: number;
  declare previousExitCode: number;
  declare reason: RestartReason;
  constructor(data?: PartialMessage<_ProcessRestarted>) {
    super();
    this.attempt = 0;
    this.previousExitCode = 0;
    this.reason = RestartReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ProcessRestarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProcessRestarted {
    return new _ProcessRestarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProcessRestarted {
    return new _ProcessRestarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProcessRestarted {
    return new _ProcessRestarted().fromJsonString(jsonString, options);
  }
  static equals(a: _ProcessRestarted | PlainMessage<_ProcessRestarted> | undefined | null, b2: _ProcessRestarted | PlainMessage<_ProcessRestarted> | undefined | null): boolean {
    return proto3.util.equals(_ProcessRestarted as unknown as MessageType<_ProcessRestarted>, a, b2);
  }
})();
export type ProcessRestarted = InstanceType<typeof ProcessRestarted$Runtime>;
var ProcessRestarted: MessageType<ProcessRestarted> = ProcessRestarted$Runtime as unknown as MessageType<ProcessRestarted>;
(ProcessRestarted as MutableMessageType<ProcessRestarted>).runtime = proto3;
(ProcessRestarted as MutableMessageType<ProcessRestarted>).typeName = "anyrun.v1.ProcessRestarted";
(ProcessRestarted as MutableMessageType<ProcessRestarted>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "attempt",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "previous_exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "reason", kind: "enum", T: proto3.getEnumType(RestartReason) }
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirectoryRequest {
    return new _ListDirectoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirectoryRequest | PlainMessage<_ListDirectoryRequest> | undefined | null, b2: _ListDirectoryRequest | PlainMessage<_ListDirectoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListDirectoryRequest as unknown as MessageType<_ListDirectoryRequest>, a, b2);
  }
})();
export type ListDirectoryRequest = InstanceType<typeof ListDirectoryRequest$Runtime>;
var ListDirectoryRequest: MessageType<ListDirectoryRequest> = ListDirectoryRequest$Runtime as unknown as MessageType<ListDirectoryRequest>;
(ListDirectoryRequest as MutableMessageType<ListDirectoryRequest>).runtime = proto3;
(ListDirectoryRequest as MutableMessageType<ListDirectoryRequest>).typeName = "anyrun.v1.ListDirectoryRequest";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirectoryResponse {
    return new _ListDirectoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirectoryResponse | PlainMessage<_ListDirectoryResponse> | undefined | null, b2: _ListDirectoryResponse | PlainMessage<_ListDirectoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListDirectoryResponse as unknown as MessageType<_ListDirectoryResponse>, a, b2);
  }
})();
export type ListDirectoryResponse = InstanceType<typeof ListDirectoryResponse$Runtime>;
var ListDirectoryResponse: MessageType<ListDirectoryResponse> = ListDirectoryResponse$Runtime as unknown as MessageType<ListDirectoryResponse>;
(ListDirectoryResponse as MutableMessageType<ListDirectoryResponse>).runtime = proto3;
(ListDirectoryResponse as MutableMessageType<ListDirectoryResponse>).typeName = "anyrun.v1.ListDirectoryResponse";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DirectoryEntry {
    return new _DirectoryEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _DirectoryEntry | PlainMessage<_DirectoryEntry> | undefined | null, b2: _DirectoryEntry | PlainMessage<_DirectoryEntry> | undefined | null): boolean {
    return proto3.util.equals(_DirectoryEntry as unknown as MessageType<_DirectoryEntry>, a, b2);
  }
})();
export type DirectoryEntry = InstanceType<typeof DirectoryEntry$Runtime>;
var DirectoryEntry: MessageType<DirectoryEntry> = DirectoryEntry$Runtime as unknown as MessageType<DirectoryEntry>;
(DirectoryEntry as MutableMessageType<DirectoryEntry>).runtime = proto3;
(DirectoryEntry as MutableMessageType<DirectoryEntry>).typeName = "anyrun.v1.DirectoryEntry";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTextFileRequest {
    return new _ReadTextFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTextFileRequest | PlainMessage<_ReadTextFileRequest> | undefined | null, b2: _ReadTextFileRequest | PlainMessage<_ReadTextFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReadTextFileRequest as unknown as MessageType<_ReadTextFileRequest>, a, b2);
  }
})();
export type ReadTextFileRequest = InstanceType<typeof ReadTextFileRequest$Runtime>;
var ReadTextFileRequest: MessageType<ReadTextFileRequest> = ReadTextFileRequest$Runtime as unknown as MessageType<ReadTextFileRequest>;
(ReadTextFileRequest as MutableMessageType<ReadTextFileRequest>).runtime = proto3;
(ReadTextFileRequest as MutableMessageType<ReadTextFileRequest>).typeName = "anyrun.v1.ReadTextFileRequest";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTextFileResponse {
    return new _ReadTextFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTextFileResponse | PlainMessage<_ReadTextFileResponse> | undefined | null, b2: _ReadTextFileResponse | PlainMessage<_ReadTextFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReadTextFileResponse as unknown as MessageType<_ReadTextFileResponse>, a, b2);
  }
})();
export type ReadTextFileResponse = InstanceType<typeof ReadTextFileResponse$Runtime>;
var ReadTextFileResponse: MessageType<ReadTextFileResponse> = ReadTextFileResponse$Runtime as unknown as MessageType<ReadTextFileResponse>;
(ReadTextFileResponse as MutableMessageType<ReadTextFileResponse>).runtime = proto3;
(ReadTextFileResponse as MutableMessageType<ReadTextFileResponse>).typeName = "anyrun.v1.ReadTextFileResponse";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteTextFileRequest {
    return new _WriteTextFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteTextFileRequest | PlainMessage<_WriteTextFileRequest> | undefined | null, b2: _WriteTextFileRequest | PlainMessage<_WriteTextFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_WriteTextFileRequest as unknown as MessageType<_WriteTextFileRequest>, a, b2);
  }
})();
export type WriteTextFileRequest = InstanceType<typeof WriteTextFileRequest$Runtime>;
var WriteTextFileRequest: MessageType<WriteTextFileRequest> = WriteTextFileRequest$Runtime as unknown as MessageType<WriteTextFileRequest>;
(WriteTextFileRequest as MutableMessageType<WriteTextFileRequest>).runtime = proto3;
(WriteTextFileRequest as MutableMessageType<WriteTextFileRequest>).typeName = "anyrun.v1.WriteTextFileRequest";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteTextFileResponse {
    return new _WriteTextFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteTextFileResponse | PlainMessage<_WriteTextFileResponse> | undefined | null, b2: _WriteTextFileResponse | PlainMessage<_WriteTextFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_WriteTextFileResponse as unknown as MessageType<_WriteTextFileResponse>, a, b2);
  }
})();
export type WriteTextFileResponse = InstanceType<typeof WriteTextFileResponse$Runtime>;
var WriteTextFileResponse: MessageType<WriteTextFileResponse> = WriteTextFileResponse$Runtime as unknown as MessageType<WriteTextFileResponse>;
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).runtime = proto3;
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).typeName = "anyrun.v1.WriteTextFileResponse";
(WriteTextFileResponse as MutableMessageType<WriteTextFileResponse>).fields = proto3.util.newFieldList(() => []);
var ReadBinaryFileRequest$Runtime = (() => class _ReadBinaryFileRequest extends Message<_ReadBinaryFileRequest> {
  declare path: string;
  constructor(data?: PartialMessage<_ReadBinaryFileRequest>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadBinaryFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadBinaryFileRequest {
    return new _ReadBinaryFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadBinaryFileRequest | PlainMessage<_ReadBinaryFileRequest> | undefined | null, b2: _ReadBinaryFileRequest | PlainMessage<_ReadBinaryFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReadBinaryFileRequest as unknown as MessageType<_ReadBinaryFileRequest>, a, b2);
  }
})();
export type ReadBinaryFileRequest = InstanceType<typeof ReadBinaryFileRequest$Runtime>;
var ReadBinaryFileRequest: MessageType<ReadBinaryFileRequest> = ReadBinaryFileRequest$Runtime as unknown as MessageType<ReadBinaryFileRequest>;
(ReadBinaryFileRequest as MutableMessageType<ReadBinaryFileRequest>).runtime = proto3;
(ReadBinaryFileRequest as MutableMessageType<ReadBinaryFileRequest>).typeName = "anyrun.v1.ReadBinaryFileRequest";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadBinaryFileResponse {
    return new _ReadBinaryFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadBinaryFileResponse | PlainMessage<_ReadBinaryFileResponse> | undefined | null, b2: _ReadBinaryFileResponse | PlainMessage<_ReadBinaryFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReadBinaryFileResponse as unknown as MessageType<_ReadBinaryFileResponse>, a, b2);
  }
})();
export type ReadBinaryFileResponse = InstanceType<typeof ReadBinaryFileResponse$Runtime>;
var ReadBinaryFileResponse: MessageType<ReadBinaryFileResponse> = ReadBinaryFileResponse$Runtime as unknown as MessageType<ReadBinaryFileResponse>;
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).runtime = proto3;
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).typeName = "anyrun.v1.ReadBinaryFileResponse";
(ReadBinaryFileResponse as MutableMessageType<ReadBinaryFileResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteBinaryFileRequest {
    return new _WriteBinaryFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteBinaryFileRequest | PlainMessage<_WriteBinaryFileRequest> | undefined | null, b2: _WriteBinaryFileRequest | PlainMessage<_WriteBinaryFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_WriteBinaryFileRequest as unknown as MessageType<_WriteBinaryFileRequest>, a, b2);
  }
})();
export type WriteBinaryFileRequest = InstanceType<typeof WriteBinaryFileRequest$Runtime>;
var WriteBinaryFileRequest: MessageType<WriteBinaryFileRequest> = WriteBinaryFileRequest$Runtime as unknown as MessageType<WriteBinaryFileRequest>;
(WriteBinaryFileRequest as MutableMessageType<WriteBinaryFileRequest>).runtime = proto3;
(WriteBinaryFileRequest as MutableMessageType<WriteBinaryFileRequest>).typeName = "anyrun.v1.WriteBinaryFileRequest";
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
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteBinaryFileResponse {
    return new _WriteBinaryFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteBinaryFileResponse | PlainMessage<_WriteBinaryFileResponse> | undefined | null, b2: _WriteBinaryFileResponse | PlainMessage<_WriteBinaryFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_WriteBinaryFileResponse as unknown as MessageType<_WriteBinaryFileResponse>, a, b2);
  }
})();
export type WriteBinaryFileResponse = InstanceType<typeof WriteBinaryFileResponse$Runtime>;
var WriteBinaryFileResponse: MessageType<WriteBinaryFileResponse> = WriteBinaryFileResponse$Runtime as unknown as MessageType<WriteBinaryFileResponse>;
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).runtime = proto3;
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).typeName = "anyrun.v1.WriteBinaryFileResponse";
(WriteBinaryFileResponse as MutableMessageType<WriteBinaryFileResponse>).fields = proto3.util.newFieldList(() => []);


export { RestartPolicy, RestartReason, EntryType, CreateProcessRequest, CreateProcessResponse, AttachProcessRequest, StreamMetricsRequest, PodMetricsSample, PodMemoryBreakdown, PodDiskUsage, TopProcess, GetProcessStatusRequest, GetProcessStatusResponse, GetProcessStatusResponse_Running, GetProcessStatusResponse_Completed, ListProcessesRequest, ListedProcess, ListProcessesResponse, ProcessEvent, ProcessSupervision, RestartBackoff, HttpHealthCheck, StdoutData, StderrData, ProcessExited, ProcessRestarted, ListDirectoryRequest, ListDirectoryResponse, DirectoryEntry, ReadTextFileRequest, ReadTextFileResponse, WriteTextFileRequest, WriteTextFileResponse, ReadBinaryFileRequest, ReadBinaryFileResponse, WriteBinaryFileRequest, WriteBinaryFileResponse };
