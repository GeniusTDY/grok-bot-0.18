/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:410488-411443
 * Region SHA-256: 68e7731be62c18610036963b1f2f8c4d94cea1a37c486d11e97a9ec85e45b6a4
 * BackgroundComposer closure exports: 22 messages + 2 enums = 24
 */
import { Message, proto3, protoInt64, Empty, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { RestartReason } from "./pod_daemon_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type PrivateWorkerWaitReason = 0 | 1 | 2 | 3 | 4 | 5;
var PrivateWorkerWaitReason: {
  "UNSPECIFIED": 0;
  "NO_CONNECTED_WORKERS": 1;
  "LABEL_MISMATCH": 2;
  "OWNER_FILTERED": 3;
  "SHARED_ASSIGNMENT_FILTERED": 4;
  "ALL_BUSY": 5;
  0: "UNSPECIFIED";
  1: "NO_CONNECTED_WORKERS";
  2: "LABEL_MISMATCH";
  3: "OWNER_FILTERED";
  4: "SHARED_ASSIGNMENT_FILTERED";
  5: "ALL_BUSY";
};
export type ClonePurpose = 0 | 1 | 2;
var ClonePurpose: {
  "UNSPECIFIED": 0;
  "DOCKER_BUILD": 1;
  "WORKSPACE_SETUP": 2;
  0: "UNSPECIFIED";
  1: "DOCKER_BUILD";
  2: "WORKSPACE_SETUP";
};
(function(PrivateWorkerWaitReason2) {
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["NO_CONNECTED_WORKERS"] = 1] = "NO_CONNECTED_WORKERS";
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["LABEL_MISMATCH"] = 2] = "LABEL_MISMATCH";
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["OWNER_FILTERED"] = 3] = "OWNER_FILTERED";
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["SHARED_ASSIGNMENT_FILTERED"] = 4] = "SHARED_ASSIGNMENT_FILTERED";
  PrivateWorkerWaitReason2[PrivateWorkerWaitReason2["ALL_BUSY"] = 5] = "ALL_BUSY";
})(PrivateWorkerWaitReason! || (PrivateWorkerWaitReason = {} as typeof PrivateWorkerWaitReason));
proto3.util.setEnumType(PrivateWorkerWaitReason, "anyrun.v1.PrivateWorkerWaitReason", [
  { no: 0, name: "PRIVATE_WORKER_WAIT_REASON_UNSPECIFIED" },
  { no: 1, name: "PRIVATE_WORKER_WAIT_REASON_NO_CONNECTED_WORKERS" },
  { no: 2, name: "PRIVATE_WORKER_WAIT_REASON_LABEL_MISMATCH" },
  { no: 3, name: "PRIVATE_WORKER_WAIT_REASON_OWNER_FILTERED" },
  { no: 4, name: "PRIVATE_WORKER_WAIT_REASON_SHARED_ASSIGNMENT_FILTERED" },
  { no: 5, name: "PRIVATE_WORKER_WAIT_REASON_ALL_BUSY" }
]);
(function(ClonePurpose2) {
  ClonePurpose2[ClonePurpose2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ClonePurpose2[ClonePurpose2["DOCKER_BUILD"] = 1] = "DOCKER_BUILD";
  ClonePurpose2[ClonePurpose2["WORKSPACE_SETUP"] = 2] = "WORKSPACE_SETUP";
})(ClonePurpose! || (ClonePurpose = {} as typeof ClonePurpose));
proto3.util.setEnumType(ClonePurpose, "anyrun.v1.ClonePurpose", [
  { no: 0, name: "CLONE_PURPOSE_UNSPECIFIED" },
  { no: 1, name: "CLONE_PURPOSE_DOCKER_BUILD" },
  { no: 2, name: "CLONE_PURPOSE_WORKSPACE_SETUP" }
]);
var PodIdentity$Runtime = (() => class _PodIdentity extends Message<_PodIdentity> {
  declare tenantId: string;
  declare podId: string;
  constructor(data?: PartialMessage<_PodIdentity>) {
    super();
    this.tenantId = "";
    this.podId = "";
    proto3.util.initPartial(data, this as _PodIdentity);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodIdentity {
    return new _PodIdentity().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodIdentity {
    return new _PodIdentity().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodIdentity {
    return new _PodIdentity().fromJsonString(jsonString, options);
  }
  static equals(a: _PodIdentity | PlainMessage<_PodIdentity> | undefined | null, b2: _PodIdentity | PlainMessage<_PodIdentity> | undefined | null): boolean {
    return proto3.util.equals(_PodIdentity as unknown as MessageType<_PodIdentity>, a, b2);
  }
})();
export type PodIdentity = InstanceType<typeof PodIdentity$Runtime>;
var PodIdentity: MessageType<PodIdentity> = PodIdentity$Runtime as unknown as MessageType<PodIdentity>;
(PodIdentity as MutableMessageType<PodIdentity>).runtime = proto3;
(PodIdentity as MutableMessageType<PodIdentity>).typeName = "anyrun.v1.PodIdentity";
(PodIdentity as MutableMessageType<PodIdentity>).fields = proto3.util.newFieldList(() => [
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
  }
]);
var PodEvent$Runtime = (() => class _PodEvent extends Message<_PodEvent> {
  declare creationTimestamp: bigint;
  declare payload: { case: "error"; value: PodErrorEvent } | { case: "debugEvent"; value: string } | { case: "hydrationStarted"; value: Empty } | { case: "hydrationProgress"; value: HydrationProgress } | { case: "hydrationCompleted"; value: Empty } | { case: "cloneStarted"; value: Empty } | { case: "cloneCompleted"; value: Empty } | { case: "cloneStartedV2"; value: CloneStarted } | { case: "cloneCompletedV2"; value: CloneCompleted } | { case: "checkoutStarted"; value: Empty } | { case: "checkoutCompleted"; value: Empty } | { case: "buildStarted"; value: string } | { case: "buildStatusMessage"; value: string } | { case: "buildStepStarted"; value: BuildStepStarted } | { case: "buildStatusLine"; value: BuildStatusLine } | { case: "internalBuildMessage"; value: InternalBuildMessage } | { case: "buildExitCode"; value: number } | { case: "prepareStdout"; value: string } | { case: "prepareStderr"; value: string } | { case: "prepareExitCode"; value: bigint } | { case: "installCommand"; value: InstallCommand } | { case: "installStdout"; value: string } | { case: "installStderr"; value: string } | { case: "installExitCode"; value: bigint } | { case: "verifyStdout"; value: string } | { case: "verifyStderr"; value: string } | { case: "verifyExitCode"; value: bigint } | { case: "startStdout"; value: string } | { case: "startStderr"; value: string } | { case: "startExitCode"; value: bigint } | { case: "extensionInstallStdout"; value: FeatureOutput } | { case: "extensionInstallStderr"; value: FeatureOutput } | { case: "extensionInstallExitCode"; value: FeatureExitCode } | { case: "snapshotStarted"; value: Empty } | { case: "snapshotCompleted"; value: Empty } | { case: "creationCompleted"; value: Empty } | { case: "postStartStdout"; value: string } | { case: "postStartStderr"; value: string } | { case: "postStartExitCode"; value: bigint } | { case: "extensionStartStdout"; value: FeatureOutput } | { case: "extensionStartStderr"; value: FeatureOutput } | { case: "extensionStartExitCode"; value: FeatureExitCode } | { case: "startupCompleted"; value: Empty } | { case: "imagePullStarted"; value: ImagePullStarted } | { case: "imagePullLayerUpdate"; value: ImagePullLayerUpdate } | { case: "imagePullStatusUpdate"; value: ImagePullStatusUpdate } | { case: "imagePullCompleted"; value: ImagePullCompleted } | { case: "blockedRepoState"; value: PodIdentity } | { case: "acquiredRepoState"; value: Empty } | { case: "privateWorkerReady"; value: Empty } | { case: "waitingForWorker"; value: WaitingForWorkerStatus } | { case: "spanStarted"; value: SpanStarted } | { case: "spanEnded"; value: SpanEnded } | { case: "lifecycleProcessRestarted"; value: LifecycleProcessRestarted } | { case: "lifecycleProcessExited"; value: LifecycleProcessExited } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PodEvent>) {
    super();
    this.creationTimestamp = protoInt64.zero;
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _PodEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodEvent {
    return new _PodEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodEvent {
    return new _PodEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodEvent {
    return new _PodEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _PodEvent | PlainMessage<_PodEvent> | undefined | null, b2: _PodEvent | PlainMessage<_PodEvent> | undefined | null): boolean {
    return proto3.util.equals(_PodEvent as unknown as MessageType<_PodEvent>, a, b2);
  }
})();
export type PodEvent = InstanceType<typeof PodEvent$Runtime>;
var PodEvent: MessageType<PodEvent> = PodEvent$Runtime as unknown as MessageType<PodEvent>;
(PodEvent as MutableMessageType<PodEvent>).runtime = proto3;
(PodEvent as MutableMessageType<PodEvent>).typeName = "anyrun.v1.PodEvent";
(PodEvent as MutableMessageType<PodEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 49,
    name: "creation_timestamp",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 26, name: "error", kind: "message", T: PodErrorEvent, oneof: "payload" },
  { no: 1, name: "debug_event", kind: "scalar", T: 9, oneof: "payload" },
  { no: 43, name: "hydration_started", kind: "message", T: Empty, oneof: "payload" },
  { no: 44, name: "hydration_progress", kind: "message", T: HydrationProgress, oneof: "payload" },
  { no: 45, name: "hydration_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 31, name: "clone_started", kind: "message", T: Empty, oneof: "payload" },
  { no: 32, name: "clone_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 51, name: "clone_started_v2", kind: "message", T: CloneStarted, oneof: "payload" },
  { no: 52, name: "clone_completed_v2", kind: "message", T: CloneCompleted, oneof: "payload" },
  { no: 33, name: "checkout_started", kind: "message", T: Empty, oneof: "payload" },
  { no: 34, name: "checkout_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 2, name: "build_started", kind: "scalar", T: 9, oneof: "payload" },
  { no: 3, name: "build_status_message", kind: "scalar", T: 9, oneof: "payload" },
  { no: 27, name: "build_step_started", kind: "message", T: BuildStepStarted, oneof: "payload" },
  { no: 28, name: "build_status_line", kind: "message", T: BuildStatusLine, oneof: "payload" },
  { no: 29, name: "internal_build_message", kind: "message", T: InternalBuildMessage, oneof: "payload" },
  { no: 30, name: "build_exit_code", kind: "scalar", T: 5, oneof: "payload" },
  { no: 14, name: "prepare_stdout", kind: "scalar", T: 9, oneof: "payload" },
  { no: 15, name: "prepare_stderr", kind: "scalar", T: 9, oneof: "payload" },
  { no: 16, name: "prepare_exit_code", kind: "scalar", T: 3, oneof: "payload" },
  { no: 50, name: "install_command", kind: "message", T: InstallCommand, oneof: "payload" },
  { no: 17, name: "install_stdout", kind: "scalar", T: 9, oneof: "payload" },
  { no: 18, name: "install_stderr", kind: "scalar", T: 9, oneof: "payload" },
  { no: 19, name: "install_exit_code", kind: "scalar", T: 3, oneof: "payload" },
  { no: 46, name: "verify_stdout", kind: "scalar", T: 9, oneof: "payload" },
  { no: 47, name: "verify_stderr", kind: "scalar", T: 9, oneof: "payload" },
  { no: 48, name: "verify_exit_code", kind: "scalar", T: 3, oneof: "payload" },
  { no: 6, name: "start_stdout", kind: "scalar", T: 9, oneof: "payload" },
  { no: 7, name: "start_stderr", kind: "scalar", T: 9, oneof: "payload" },
  { no: 8, name: "start_exit_code", kind: "scalar", T: 3, oneof: "payload" },
  { no: 20, name: "extension_install_stdout", kind: "message", T: FeatureOutput, oneof: "payload" },
  { no: 21, name: "extension_install_stderr", kind: "message", T: FeatureOutput, oneof: "payload" },
  { no: 22, name: "extension_install_exit_code", kind: "message", T: FeatureExitCode, oneof: "payload" },
  { no: 35, name: "snapshot_started", kind: "message", T: Empty, oneof: "payload" },
  { no: 36, name: "snapshot_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 9, name: "creation_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 10, name: "post_start_stdout", kind: "scalar", T: 9, oneof: "payload" },
  { no: 11, name: "post_start_stderr", kind: "scalar", T: 9, oneof: "payload" },
  { no: 12, name: "post_start_exit_code", kind: "scalar", T: 3, oneof: "payload" },
  { no: 23, name: "extension_start_stdout", kind: "message", T: FeatureOutput, oneof: "payload" },
  { no: 24, name: "extension_start_stderr", kind: "message", T: FeatureOutput, oneof: "payload" },
  { no: 25, name: "extension_start_exit_code", kind: "message", T: FeatureExitCode, oneof: "payload" },
  { no: 13, name: "startup_completed", kind: "message", T: Empty, oneof: "payload" },
  { no: 37, name: "image_pull_started", kind: "message", T: ImagePullStarted, oneof: "payload" },
  { no: 38, name: "image_pull_layer_update", kind: "message", T: ImagePullLayerUpdate, oneof: "payload" },
  { no: 39, name: "image_pull_status_update", kind: "message", T: ImagePullStatusUpdate, oneof: "payload" },
  { no: 40, name: "image_pull_completed", kind: "message", T: ImagePullCompleted, oneof: "payload" },
  { no: 41, name: "blocked_repo_state", kind: "message", T: PodIdentity, oneof: "payload" },
  { no: 42, name: "acquired_repo_state", kind: "message", T: Empty, oneof: "payload" },
  { no: 53, name: "private_worker_ready", kind: "message", T: Empty, oneof: "payload" },
  { no: 54, name: "waiting_for_worker", kind: "message", T: WaitingForWorkerStatus, oneof: "payload" },
  { no: 55, name: "span_started", kind: "message", T: SpanStarted, oneof: "payload" },
  { no: 56, name: "span_ended", kind: "message", T: SpanEnded, oneof: "payload" },
  { no: 57, name: "lifecycle_process_restarted", kind: "message", T: LifecycleProcessRestarted, oneof: "payload" },
  { no: 58, name: "lifecycle_process_exited", kind: "message", T: LifecycleProcessExited, oneof: "payload" }
]);
var LifecycleProcessRestarted$Runtime = (() => class _LifecycleProcessRestarted extends Message<_LifecycleProcessRestarted> {
  declare attempt: number;
  declare previousExitCode: number;
  declare reason: RestartReason;
  declare commandName: string;
  constructor(data?: PartialMessage<_LifecycleProcessRestarted>) {
    super();
    this.attempt = 0;
    this.previousExitCode = 0;
    this.reason = RestartReason.UNSPECIFIED;
    this.commandName = "";
    proto3.util.initPartial(data, this as _LifecycleProcessRestarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LifecycleProcessRestarted {
    return new _LifecycleProcessRestarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LifecycleProcessRestarted {
    return new _LifecycleProcessRestarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LifecycleProcessRestarted {
    return new _LifecycleProcessRestarted().fromJsonString(jsonString, options);
  }
  static equals(a: _LifecycleProcessRestarted | PlainMessage<_LifecycleProcessRestarted> | undefined | null, b2: _LifecycleProcessRestarted | PlainMessage<_LifecycleProcessRestarted> | undefined | null): boolean {
    return proto3.util.equals(_LifecycleProcessRestarted as unknown as MessageType<_LifecycleProcessRestarted>, a, b2);
  }
})();
export type LifecycleProcessRestarted = InstanceType<typeof LifecycleProcessRestarted$Runtime>;
var LifecycleProcessRestarted: MessageType<LifecycleProcessRestarted> = LifecycleProcessRestarted$Runtime as unknown as MessageType<LifecycleProcessRestarted>;
(LifecycleProcessRestarted as MutableMessageType<LifecycleProcessRestarted>).runtime = proto3;
(LifecycleProcessRestarted as MutableMessageType<LifecycleProcessRestarted>).typeName = "anyrun.v1.LifecycleProcessRestarted";
(LifecycleProcessRestarted as MutableMessageType<LifecycleProcessRestarted>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "reason", kind: "enum", T: proto3.getEnumType(RestartReason) },
  {
    no: 4,
    name: "command_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LifecycleProcessExited$Runtime = (() => class _LifecycleProcessExited extends Message<_LifecycleProcessExited> {
  declare exitCode: number;
  declare commandName: string;
  constructor(data?: PartialMessage<_LifecycleProcessExited>) {
    super();
    this.exitCode = 0;
    this.commandName = "";
    proto3.util.initPartial(data, this as _LifecycleProcessExited);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LifecycleProcessExited {
    return new _LifecycleProcessExited().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LifecycleProcessExited {
    return new _LifecycleProcessExited().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LifecycleProcessExited {
    return new _LifecycleProcessExited().fromJsonString(jsonString, options);
  }
  static equals(a: _LifecycleProcessExited | PlainMessage<_LifecycleProcessExited> | undefined | null, b2: _LifecycleProcessExited | PlainMessage<_LifecycleProcessExited> | undefined | null): boolean {
    return proto3.util.equals(_LifecycleProcessExited as unknown as MessageType<_LifecycleProcessExited>, a, b2);
  }
})();
export type LifecycleProcessExited = InstanceType<typeof LifecycleProcessExited$Runtime>;
var LifecycleProcessExited: MessageType<LifecycleProcessExited> = LifecycleProcessExited$Runtime as unknown as MessageType<LifecycleProcessExited>;
(LifecycleProcessExited as MutableMessageType<LifecycleProcessExited>).runtime = proto3;
(LifecycleProcessExited as MutableMessageType<LifecycleProcessExited>).typeName = "anyrun.v1.LifecycleProcessExited";
(LifecycleProcessExited as MutableMessageType<LifecycleProcessExited>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "command_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SpanStarted$Runtime = (() => class _SpanStarted extends Message<_SpanStarted> {
  declare spanId: string;
  declare name: string;
  declare parentSpanId?: string;
  declare href?: string;
  constructor(data?: PartialMessage<_SpanStarted>) {
    super();
    this.spanId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _SpanStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanStarted {
    return new _SpanStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanStarted {
    return new _SpanStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanStarted {
    return new _SpanStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanStarted | PlainMessage<_SpanStarted> | undefined | null, b2: _SpanStarted | PlainMessage<_SpanStarted> | undefined | null): boolean {
    return proto3.util.equals(_SpanStarted as unknown as MessageType<_SpanStarted>, a, b2);
  }
})();
export type SpanStarted = InstanceType<typeof SpanStarted$Runtime>;
var SpanStarted: MessageType<SpanStarted> = SpanStarted$Runtime as unknown as MessageType<SpanStarted>;
(SpanStarted as MutableMessageType<SpanStarted>).runtime = proto3;
(SpanStarted as MutableMessageType<SpanStarted>).typeName = "anyrun.v1.SpanStarted";
(SpanStarted as MutableMessageType<SpanStarted>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
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
  { no: 3, name: "parent_span_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "href", kind: "scalar", T: 9, opt: true }
]);
var SpanEnded$Runtime = (() => class _SpanEnded extends Message<_SpanEnded> {
  declare spanId: string;
  constructor(data?: PartialMessage<_SpanEnded>) {
    super();
    this.spanId = "";
    proto3.util.initPartial(data, this as _SpanEnded);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanEnded {
    return new _SpanEnded().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanEnded {
    return new _SpanEnded().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanEnded {
    return new _SpanEnded().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanEnded | PlainMessage<_SpanEnded> | undefined | null, b2: _SpanEnded | PlainMessage<_SpanEnded> | undefined | null): boolean {
    return proto3.util.equals(_SpanEnded as unknown as MessageType<_SpanEnded>, a, b2);
  }
})();
export type SpanEnded = InstanceType<typeof SpanEnded$Runtime>;
var SpanEnded: MessageType<SpanEnded> = SpanEnded$Runtime as unknown as MessageType<SpanEnded>;
(SpanEnded as MutableMessageType<SpanEnded>).runtime = proto3;
(SpanEnded as MutableMessageType<SpanEnded>).typeName = "anyrun.v1.SpanEnded";
(SpanEnded as MutableMessageType<SpanEnded>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WaitingForWorkerStatus$Runtime = (() => class _WaitingForWorkerStatus extends Message<_WaitingForWorkerStatus> {
  declare retryCount: number;
  declare maxRetries: number;
  declare waitReason: PrivateWorkerWaitReason;
  constructor(data?: PartialMessage<_WaitingForWorkerStatus>) {
    super();
    this.retryCount = 0;
    this.maxRetries = 0;
    this.waitReason = PrivateWorkerWaitReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _WaitingForWorkerStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WaitingForWorkerStatus {
    return new _WaitingForWorkerStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WaitingForWorkerStatus {
    return new _WaitingForWorkerStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WaitingForWorkerStatus {
    return new _WaitingForWorkerStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _WaitingForWorkerStatus | PlainMessage<_WaitingForWorkerStatus> | undefined | null, b2: _WaitingForWorkerStatus | PlainMessage<_WaitingForWorkerStatus> | undefined | null): boolean {
    return proto3.util.equals(_WaitingForWorkerStatus as unknown as MessageType<_WaitingForWorkerStatus>, a, b2);
  }
})();
export type WaitingForWorkerStatus = InstanceType<typeof WaitingForWorkerStatus$Runtime>;
var WaitingForWorkerStatus: MessageType<WaitingForWorkerStatus> = WaitingForWorkerStatus$Runtime as unknown as MessageType<WaitingForWorkerStatus>;
(WaitingForWorkerStatus as MutableMessageType<WaitingForWorkerStatus>).runtime = proto3;
(WaitingForWorkerStatus as MutableMessageType<WaitingForWorkerStatus>).typeName = "anyrun.v1.WaitingForWorkerStatus";
(WaitingForWorkerStatus as MutableMessageType<WaitingForWorkerStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "retry_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "max_retries",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "wait_reason", kind: "enum", T: proto3.getEnumType(PrivateWorkerWaitReason) }
]);
var HydrationProgress$Runtime = (() => class _HydrationProgress extends Message<_HydrationProgress> {
  declare transferred: bigint;
  declare total: bigint;
  constructor(data?: PartialMessage<_HydrationProgress>) {
    super();
    this.transferred = protoInt64.zero;
    this.total = protoInt64.zero;
    proto3.util.initPartial(data, this as _HydrationProgress);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HydrationProgress {
    return new _HydrationProgress().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HydrationProgress {
    return new _HydrationProgress().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HydrationProgress {
    return new _HydrationProgress().fromJsonString(jsonString, options);
  }
  static equals(a: _HydrationProgress | PlainMessage<_HydrationProgress> | undefined | null, b2: _HydrationProgress | PlainMessage<_HydrationProgress> | undefined | null): boolean {
    return proto3.util.equals(_HydrationProgress as unknown as MessageType<_HydrationProgress>, a, b2);
  }
})();
export type HydrationProgress = InstanceType<typeof HydrationProgress$Runtime>;
var HydrationProgress: MessageType<HydrationProgress> = HydrationProgress$Runtime as unknown as MessageType<HydrationProgress>;
(HydrationProgress as MutableMessageType<HydrationProgress>).runtime = proto3;
(HydrationProgress as MutableMessageType<HydrationProgress>).typeName = "anyrun.v1.HydrationProgress";
(HydrationProgress as MutableMessageType<HydrationProgress>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "transferred",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var PodErrorEvent$Runtime = (() => class _PodErrorEvent extends Message<_PodErrorEvent> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_PodErrorEvent>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _PodErrorEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PodErrorEvent {
    return new _PodErrorEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PodErrorEvent {
    return new _PodErrorEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PodErrorEvent {
    return new _PodErrorEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _PodErrorEvent | PlainMessage<_PodErrorEvent> | undefined | null, b2: _PodErrorEvent | PlainMessage<_PodErrorEvent> | undefined | null): boolean {
    return proto3.util.equals(_PodErrorEvent as unknown as MessageType<_PodErrorEvent>, a, b2);
  }
})();
export type PodErrorEvent = InstanceType<typeof PodErrorEvent$Runtime>;
var PodErrorEvent: MessageType<PodErrorEvent> = PodErrorEvent$Runtime as unknown as MessageType<PodErrorEvent>;
(PodErrorEvent as MutableMessageType<PodErrorEvent>).runtime = proto3;
(PodErrorEvent as MutableMessageType<PodErrorEvent>).typeName = "anyrun.v1.PodErrorEvent";
(PodErrorEvent as MutableMessageType<PodErrorEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FeatureOutput$Runtime = (() => class _FeatureOutput extends Message<_FeatureOutput> {
  declare featureId: string;
  declare output: string;
  constructor(data?: PartialMessage<_FeatureOutput>) {
    super();
    this.featureId = "";
    this.output = "";
    proto3.util.initPartial(data, this as _FeatureOutput);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FeatureOutput {
    return new _FeatureOutput().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FeatureOutput {
    return new _FeatureOutput().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FeatureOutput {
    return new _FeatureOutput().fromJsonString(jsonString, options);
  }
  static equals(a: _FeatureOutput | PlainMessage<_FeatureOutput> | undefined | null, b2: _FeatureOutput | PlainMessage<_FeatureOutput> | undefined | null): boolean {
    return proto3.util.equals(_FeatureOutput as unknown as MessageType<_FeatureOutput>, a, b2);
  }
})();
export type FeatureOutput = InstanceType<typeof FeatureOutput$Runtime>;
var FeatureOutput: MessageType<FeatureOutput> = FeatureOutput$Runtime as unknown as MessageType<FeatureOutput>;
(FeatureOutput as MutableMessageType<FeatureOutput>).runtime = proto3;
(FeatureOutput as MutableMessageType<FeatureOutput>).typeName = "anyrun.v1.FeatureOutput";
(FeatureOutput as MutableMessageType<FeatureOutput>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "feature_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FeatureExitCode$Runtime = (() => class _FeatureExitCode extends Message<_FeatureExitCode> {
  declare featureId: string;
  declare exitCode: bigint;
  constructor(data?: PartialMessage<_FeatureExitCode>) {
    super();
    this.featureId = "";
    this.exitCode = protoInt64.zero;
    proto3.util.initPartial(data, this as _FeatureExitCode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FeatureExitCode {
    return new _FeatureExitCode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FeatureExitCode {
    return new _FeatureExitCode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FeatureExitCode {
    return new _FeatureExitCode().fromJsonString(jsonString, options);
  }
  static equals(a: _FeatureExitCode | PlainMessage<_FeatureExitCode> | undefined | null, b2: _FeatureExitCode | PlainMessage<_FeatureExitCode> | undefined | null): boolean {
    return proto3.util.equals(_FeatureExitCode as unknown as MessageType<_FeatureExitCode>, a, b2);
  }
})();
export type FeatureExitCode = InstanceType<typeof FeatureExitCode$Runtime>;
var FeatureExitCode: MessageType<FeatureExitCode> = FeatureExitCode$Runtime as unknown as MessageType<FeatureExitCode>;
(FeatureExitCode as MutableMessageType<FeatureExitCode>).runtime = proto3;
(FeatureExitCode as MutableMessageType<FeatureExitCode>).typeName = "anyrun.v1.FeatureExitCode";
(FeatureExitCode as MutableMessageType<FeatureExitCode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "feature_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "exit_code",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var BuildStepStarted$Runtime = (() => class _BuildStepStarted extends Message<_BuildStepStarted> {
  declare streamId: number;
  declare step: number;
  declare totalSteps: number;
  declare command: string;
  constructor(data?: PartialMessage<_BuildStepStarted>) {
    super();
    this.streamId = 0;
    this.step = 0;
    this.totalSteps = 0;
    this.command = "";
    proto3.util.initPartial(data, this as _BuildStepStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuildStepStarted {
    return new _BuildStepStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuildStepStarted {
    return new _BuildStepStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuildStepStarted {
    return new _BuildStepStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _BuildStepStarted | PlainMessage<_BuildStepStarted> | undefined | null, b2: _BuildStepStarted | PlainMessage<_BuildStepStarted> | undefined | null): boolean {
    return proto3.util.equals(_BuildStepStarted as unknown as MessageType<_BuildStepStarted>, a, b2);
  }
})();
export type BuildStepStarted = InstanceType<typeof BuildStepStarted$Runtime>;
var BuildStepStarted: MessageType<BuildStepStarted> = BuildStepStarted$Runtime as unknown as MessageType<BuildStepStarted>;
(BuildStepStarted as MutableMessageType<BuildStepStarted>).runtime = proto3;
(BuildStepStarted as MutableMessageType<BuildStepStarted>).typeName = "anyrun.v1.BuildStepStarted";
(BuildStepStarted as MutableMessageType<BuildStepStarted>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "step",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "total_steps",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BuildStatusLine$Runtime = (() => class _BuildStatusLine extends Message<_BuildStatusLine> {
  declare streamId: number;
  declare timestamp: string;
  declare content: string;
  constructor(data?: PartialMessage<_BuildStatusLine>) {
    super();
    this.streamId = 0;
    this.timestamp = "";
    this.content = "";
    proto3.util.initPartial(data, this as _BuildStatusLine);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuildStatusLine {
    return new _BuildStatusLine().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuildStatusLine {
    return new _BuildStatusLine().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuildStatusLine {
    return new _BuildStatusLine().fromJsonString(jsonString, options);
  }
  static equals(a: _BuildStatusLine | PlainMessage<_BuildStatusLine> | undefined | null, b2: _BuildStatusLine | PlainMessage<_BuildStatusLine> | undefined | null): boolean {
    return proto3.util.equals(_BuildStatusLine as unknown as MessageType<_BuildStatusLine>, a, b2);
  }
})();
export type BuildStatusLine = InstanceType<typeof BuildStatusLine$Runtime>;
var BuildStatusLine: MessageType<BuildStatusLine> = BuildStatusLine$Runtime as unknown as MessageType<BuildStatusLine>;
(BuildStatusLine as MutableMessageType<BuildStatusLine>).runtime = proto3;
(BuildStatusLine as MutableMessageType<BuildStatusLine>).typeName = "anyrun.v1.BuildStatusLine";
(BuildStatusLine as MutableMessageType<BuildStatusLine>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "timestamp",
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
  }
]);
var InternalBuildMessage$Runtime = (() => class _InternalBuildMessage extends Message<_InternalBuildMessage> {
  declare streamId: number;
  declare content: string;
  constructor(data?: PartialMessage<_InternalBuildMessage>) {
    super();
    this.streamId = 0;
    this.content = "";
    proto3.util.initPartial(data, this as _InternalBuildMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InternalBuildMessage {
    return new _InternalBuildMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InternalBuildMessage {
    return new _InternalBuildMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InternalBuildMessage {
    return new _InternalBuildMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _InternalBuildMessage | PlainMessage<_InternalBuildMessage> | undefined | null, b2: _InternalBuildMessage | PlainMessage<_InternalBuildMessage> | undefined | null): boolean {
    return proto3.util.equals(_InternalBuildMessage as unknown as MessageType<_InternalBuildMessage>, a, b2);
  }
})();
export type InternalBuildMessage = InstanceType<typeof InternalBuildMessage$Runtime>;
var InternalBuildMessage: MessageType<InternalBuildMessage> = InternalBuildMessage$Runtime as unknown as MessageType<InternalBuildMessage>;
(InternalBuildMessage as MutableMessageType<InternalBuildMessage>).runtime = proto3;
(InternalBuildMessage as MutableMessageType<InternalBuildMessage>).typeName = "anyrun.v1.InternalBuildMessage";
(InternalBuildMessage as MutableMessageType<InternalBuildMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stream_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImagePullStarted$Runtime = (() => class _ImagePullStarted extends Message<_ImagePullStarted> {
  declare imageName: string;
  declare pullId: string;
  constructor(data?: PartialMessage<_ImagePullStarted>) {
    super();
    this.imageName = "";
    this.pullId = "";
    proto3.util.initPartial(data, this as _ImagePullStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImagePullStarted {
    return new _ImagePullStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImagePullStarted {
    return new _ImagePullStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImagePullStarted {
    return new _ImagePullStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _ImagePullStarted | PlainMessage<_ImagePullStarted> | undefined | null, b2: _ImagePullStarted | PlainMessage<_ImagePullStarted> | undefined | null): boolean {
    return proto3.util.equals(_ImagePullStarted as unknown as MessageType<_ImagePullStarted>, a, b2);
  }
})();
export type ImagePullStarted = InstanceType<typeof ImagePullStarted$Runtime>;
var ImagePullStarted: MessageType<ImagePullStarted> = ImagePullStarted$Runtime as unknown as MessageType<ImagePullStarted>;
(ImagePullStarted as MutableMessageType<ImagePullStarted>).runtime = proto3;
(ImagePullStarted as MutableMessageType<ImagePullStarted>).typeName = "anyrun.v1.ImagePullStarted";
(ImagePullStarted as MutableMessageType<ImagePullStarted>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "image_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pull_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImagePullLayerUpdate$Runtime = (() => class _ImagePullLayerUpdate extends Message<_ImagePullLayerUpdate> {
  declare imageName: string;
  declare pullId: string;
  declare layerId: string;
  declare status: { case: "pullingFsLayer"; value: boolean } | { case: "waiting"; value: boolean } | { case: "verifyingChecksum"; value: boolean } | { case: "downloadComplete"; value: boolean } | { case: "pullComplete"; value: boolean } | { case: "downloading"; value: ProgressDetail } | { case: "extracting"; value: ProgressDetail } | { case: "other"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ImagePullLayerUpdate>) {
    super();
    this.imageName = "";
    this.pullId = "";
    this.layerId = "";
    this.status = { case: void 0 };
    proto3.util.initPartial(data, this as _ImagePullLayerUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImagePullLayerUpdate {
    return new _ImagePullLayerUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImagePullLayerUpdate {
    return new _ImagePullLayerUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImagePullLayerUpdate {
    return new _ImagePullLayerUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ImagePullLayerUpdate | PlainMessage<_ImagePullLayerUpdate> | undefined | null, b2: _ImagePullLayerUpdate | PlainMessage<_ImagePullLayerUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ImagePullLayerUpdate as unknown as MessageType<_ImagePullLayerUpdate>, a, b2);
  }
})();
export type ImagePullLayerUpdate = InstanceType<typeof ImagePullLayerUpdate$Runtime>;
var ImagePullLayerUpdate: MessageType<ImagePullLayerUpdate> = ImagePullLayerUpdate$Runtime as unknown as MessageType<ImagePullLayerUpdate>;
(ImagePullLayerUpdate as MutableMessageType<ImagePullLayerUpdate>).runtime = proto3;
(ImagePullLayerUpdate as MutableMessageType<ImagePullLayerUpdate>).typeName = "anyrun.v1.ImagePullLayerUpdate";
(ImagePullLayerUpdate as MutableMessageType<ImagePullLayerUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "image_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pull_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "layer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "pulling_fs_layer", kind: "scalar", T: 8, oneof: "status" },
  { no: 5, name: "waiting", kind: "scalar", T: 8, oneof: "status" },
  { no: 6, name: "verifying_checksum", kind: "scalar", T: 8, oneof: "status" },
  { no: 7, name: "download_complete", kind: "scalar", T: 8, oneof: "status" },
  { no: 8, name: "pull_complete", kind: "scalar", T: 8, oneof: "status" },
  { no: 9, name: "downloading", kind: "message", T: ProgressDetail, oneof: "status" },
  { no: 10, name: "extracting", kind: "message", T: ProgressDetail, oneof: "status" },
  { no: 11, name: "other", kind: "scalar", T: 9, oneof: "status" }
]);
var ProgressDetail$Runtime = (() => class _ProgressDetail extends Message<_ProgressDetail> {
  declare current: bigint;
  declare total: bigint;
  constructor(data?: PartialMessage<_ProgressDetail>) {
    super();
    this.current = protoInt64.zero;
    this.total = protoInt64.zero;
    proto3.util.initPartial(data, this as _ProgressDetail);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProgressDetail {
    return new _ProgressDetail().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProgressDetail {
    return new _ProgressDetail().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProgressDetail {
    return new _ProgressDetail().fromJsonString(jsonString, options);
  }
  static equals(a: _ProgressDetail | PlainMessage<_ProgressDetail> | undefined | null, b2: _ProgressDetail | PlainMessage<_ProgressDetail> | undefined | null): boolean {
    return proto3.util.equals(_ProgressDetail as unknown as MessageType<_ProgressDetail>, a, b2);
  }
})();
export type ProgressDetail = InstanceType<typeof ProgressDetail$Runtime>;
var ProgressDetail: MessageType<ProgressDetail> = ProgressDetail$Runtime as unknown as MessageType<ProgressDetail>;
(ProgressDetail as MutableMessageType<ProgressDetail>).runtime = proto3;
(ProgressDetail as MutableMessageType<ProgressDetail>).typeName = "anyrun.v1.ProgressDetail";
(ProgressDetail as MutableMessageType<ProgressDetail>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "current",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "total",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var ImagePullStatusUpdate$Runtime = (() => class _ImagePullStatusUpdate extends Message<_ImagePullStatusUpdate> {
  declare imageName: string;
  declare pullId: string;
  declare status: string;
  constructor(data?: PartialMessage<_ImagePullStatusUpdate>) {
    super();
    this.imageName = "";
    this.pullId = "";
    this.status = "";
    proto3.util.initPartial(data, this as _ImagePullStatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImagePullStatusUpdate {
    return new _ImagePullStatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImagePullStatusUpdate {
    return new _ImagePullStatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImagePullStatusUpdate {
    return new _ImagePullStatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ImagePullStatusUpdate | PlainMessage<_ImagePullStatusUpdate> | undefined | null, b2: _ImagePullStatusUpdate | PlainMessage<_ImagePullStatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ImagePullStatusUpdate as unknown as MessageType<_ImagePullStatusUpdate>, a, b2);
  }
})();
export type ImagePullStatusUpdate = InstanceType<typeof ImagePullStatusUpdate$Runtime>;
var ImagePullStatusUpdate: MessageType<ImagePullStatusUpdate> = ImagePullStatusUpdate$Runtime as unknown as MessageType<ImagePullStatusUpdate>;
(ImagePullStatusUpdate as MutableMessageType<ImagePullStatusUpdate>).runtime = proto3;
(ImagePullStatusUpdate as MutableMessageType<ImagePullStatusUpdate>).typeName = "anyrun.v1.ImagePullStatusUpdate";
(ImagePullStatusUpdate as MutableMessageType<ImagePullStatusUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "image_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pull_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImagePullCompleted$Runtime = (() => class _ImagePullCompleted extends Message<_ImagePullCompleted> {
  declare imageName: string;
  declare pullId: string;
  constructor(data?: PartialMessage<_ImagePullCompleted>) {
    super();
    this.imageName = "";
    this.pullId = "";
    proto3.util.initPartial(data, this as _ImagePullCompleted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImagePullCompleted {
    return new _ImagePullCompleted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImagePullCompleted {
    return new _ImagePullCompleted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImagePullCompleted {
    return new _ImagePullCompleted().fromJsonString(jsonString, options);
  }
  static equals(a: _ImagePullCompleted | PlainMessage<_ImagePullCompleted> | undefined | null, b2: _ImagePullCompleted | PlainMessage<_ImagePullCompleted> | undefined | null): boolean {
    return proto3.util.equals(_ImagePullCompleted as unknown as MessageType<_ImagePullCompleted>, a, b2);
  }
})();
export type ImagePullCompleted = InstanceType<typeof ImagePullCompleted$Runtime>;
var ImagePullCompleted: MessageType<ImagePullCompleted> = ImagePullCompleted$Runtime as unknown as MessageType<ImagePullCompleted>;
(ImagePullCompleted as MutableMessageType<ImagePullCompleted>).runtime = proto3;
(ImagePullCompleted as MutableMessageType<ImagePullCompleted>).typeName = "anyrun.v1.ImagePullCompleted";
(ImagePullCompleted as MutableMessageType<ImagePullCompleted>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "image_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pull_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InstallCommand$Runtime = (() => class _InstallCommand extends Message<_InstallCommand> {
  declare name: string;
  declare command: string;
  declare user?: string;
  declare isSystem: boolean;
  declare failureTolerant: boolean;
  constructor(data?: PartialMessage<_InstallCommand>) {
    super();
    this.name = "";
    this.command = "";
    this.isSystem = false;
    this.failureTolerant = false;
    proto3.util.initPartial(data, this as _InstallCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InstallCommand {
    return new _InstallCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InstallCommand {
    return new _InstallCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InstallCommand {
    return new _InstallCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _InstallCommand | PlainMessage<_InstallCommand> | undefined | null, b2: _InstallCommand | PlainMessage<_InstallCommand> | undefined | null): boolean {
    return proto3.util.equals(_InstallCommand as unknown as MessageType<_InstallCommand>, a, b2);
  }
})();
export type InstallCommand = InstanceType<typeof InstallCommand$Runtime>;
var InstallCommand: MessageType<InstallCommand> = InstallCommand$Runtime as unknown as MessageType<InstallCommand>;
(InstallCommand as MutableMessageType<InstallCommand>).runtime = proto3;
(InstallCommand as MutableMessageType<InstallCommand>).typeName = "anyrun.v1.InstallCommand";
(InstallCommand as MutableMessageType<InstallCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "user", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "is_system",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "failure_tolerant",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CloneStarted$Runtime = (() => class _CloneStarted extends Message<_CloneStarted> {
  declare purpose: ClonePurpose;
  constructor(data?: PartialMessage<_CloneStarted>) {
    super();
    this.purpose = ClonePurpose.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CloneStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloneStarted {
    return new _CloneStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloneStarted {
    return new _CloneStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloneStarted {
    return new _CloneStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _CloneStarted | PlainMessage<_CloneStarted> | undefined | null, b2: _CloneStarted | PlainMessage<_CloneStarted> | undefined | null): boolean {
    return proto3.util.equals(_CloneStarted as unknown as MessageType<_CloneStarted>, a, b2);
  }
})();
export type CloneStarted = InstanceType<typeof CloneStarted$Runtime>;
var CloneStarted: MessageType<CloneStarted> = CloneStarted$Runtime as unknown as MessageType<CloneStarted>;
(CloneStarted as MutableMessageType<CloneStarted>).runtime = proto3;
(CloneStarted as MutableMessageType<CloneStarted>).typeName = "anyrun.v1.CloneStarted";
(CloneStarted as MutableMessageType<CloneStarted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "purpose", kind: "enum", T: proto3.getEnumType(ClonePurpose) }
]);
var CloneCompleted$Runtime = (() => class _CloneCompleted extends Message<_CloneCompleted> {
  declare purpose: ClonePurpose;
  constructor(data?: PartialMessage<_CloneCompleted>) {
    super();
    this.purpose = ClonePurpose.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CloneCompleted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloneCompleted {
    return new _CloneCompleted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloneCompleted {
    return new _CloneCompleted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloneCompleted {
    return new _CloneCompleted().fromJsonString(jsonString, options);
  }
  static equals(a: _CloneCompleted | PlainMessage<_CloneCompleted> | undefined | null, b2: _CloneCompleted | PlainMessage<_CloneCompleted> | undefined | null): boolean {
    return proto3.util.equals(_CloneCompleted as unknown as MessageType<_CloneCompleted>, a, b2);
  }
})();
export type CloneCompleted = InstanceType<typeof CloneCompleted$Runtime>;
var CloneCompleted: MessageType<CloneCompleted> = CloneCompleted$Runtime as unknown as MessageType<CloneCompleted>;
(CloneCompleted as MutableMessageType<CloneCompleted>).runtime = proto3;
(CloneCompleted as MutableMessageType<CloneCompleted>).typeName = "anyrun.v1.CloneCompleted";
(CloneCompleted as MutableMessageType<CloneCompleted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "purpose", kind: "enum", T: proto3.getEnumType(ClonePurpose) }
]);


export { PrivateWorkerWaitReason, ClonePurpose, PodIdentity, PodEvent, LifecycleProcessRestarted, LifecycleProcessExited, SpanStarted, SpanEnded, WaitingForWorkerStatus, HydrationProgress, PodErrorEvent, FeatureOutput, FeatureExitCode, BuildStepStarted, BuildStatusLine, InternalBuildMessage, ImagePullStarted, ImagePullLayerUpdate, ProgressDetail, ImagePullStatusUpdate, ImagePullCompleted, InstallCommand, CloneStarted, CloneCompleted };
