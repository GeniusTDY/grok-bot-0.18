/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:248856-251183
 * Region SHA-256: 757722e667094387b48600a2d8b1ccedf30cd6c0c7cb597456378c5af5fef0c5
 * Atomic B0 exports: 54 messages + 3 enums = 57
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { AgentSkill } from "../../agent/v1/agent_skills_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type FullSelfDrivingMode = 0 | 1 | 2;
var FullSelfDrivingMode: {
  "UNSPECIFIED": 0;
  "SUGGEST": 1;
  "APPLY": 2;
  0: "UNSPECIFIED";
  1: "SUGGEST";
  2: "APPLY";
};
export type FullSelfDrivingRunSuggestionState = 0 | 1 | 2 | 3 | 4;
var FullSelfDrivingRunSuggestionState: {
  "UNSPECIFIED": 0;
  "RUNNING": 1;
  "NO_CHANGES": 2;
  "READY": 3;
  "NOT_SUGGEST_MODE": 4;
  0: "UNSPECIFIED";
  1: "RUNNING";
  2: "NO_CHANGES";
  3: "READY";
  4: "NOT_SUGGEST_MODE";
};
export type FullSelfDrivingCloudCommandAction = 0 | 1 | 2;
var FullSelfDrivingCloudCommandAction: {
  "UNSPECIFIED": 0;
  "SPAWNED": 1;
  "FOLLOWED_UP": 2;
  0: "UNSPECIFIED";
  1: "SPAWNED";
  2: "FOLLOWED_UP";
};
(function(FullSelfDrivingMode2) {
  FullSelfDrivingMode2[FullSelfDrivingMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FullSelfDrivingMode2[FullSelfDrivingMode2["SUGGEST"] = 1] = "SUGGEST";
  FullSelfDrivingMode2[FullSelfDrivingMode2["APPLY"] = 2] = "APPLY";
})(FullSelfDrivingMode! || (FullSelfDrivingMode = {} as typeof FullSelfDrivingMode));
proto3.util.setEnumType(FullSelfDrivingMode, "aiserver.v1.FullSelfDrivingMode", [
  { no: 0, name: "FULL_SELF_DRIVING_MODE_UNSPECIFIED" },
  { no: 1, name: "FULL_SELF_DRIVING_MODE_SUGGEST" },
  { no: 2, name: "FULL_SELF_DRIVING_MODE_APPLY" }
]);
(function(FullSelfDrivingRunSuggestionState2) {
  FullSelfDrivingRunSuggestionState2[FullSelfDrivingRunSuggestionState2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FullSelfDrivingRunSuggestionState2[FullSelfDrivingRunSuggestionState2["RUNNING"] = 1] = "RUNNING";
  FullSelfDrivingRunSuggestionState2[FullSelfDrivingRunSuggestionState2["NO_CHANGES"] = 2] = "NO_CHANGES";
  FullSelfDrivingRunSuggestionState2[FullSelfDrivingRunSuggestionState2["READY"] = 3] = "READY";
  FullSelfDrivingRunSuggestionState2[FullSelfDrivingRunSuggestionState2["NOT_SUGGEST_MODE"] = 4] = "NOT_SUGGEST_MODE";
})(FullSelfDrivingRunSuggestionState! || (FullSelfDrivingRunSuggestionState = {} as typeof FullSelfDrivingRunSuggestionState));
proto3.util.setEnumType(FullSelfDrivingRunSuggestionState, "aiserver.v1.FullSelfDrivingRunSuggestionState", [
  { no: 0, name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_UNSPECIFIED" },
  { no: 1, name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_RUNNING" },
  { no: 2, name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NO_CHANGES" },
  { no: 3, name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_READY" },
  { no: 4, name: "FULL_SELF_DRIVING_RUN_SUGGESTION_STATE_NOT_SUGGEST_MODE" }
]);
(function(FullSelfDrivingCloudCommandAction2) {
  FullSelfDrivingCloudCommandAction2[FullSelfDrivingCloudCommandAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FullSelfDrivingCloudCommandAction2[FullSelfDrivingCloudCommandAction2["SPAWNED"] = 1] = "SPAWNED";
  FullSelfDrivingCloudCommandAction2[FullSelfDrivingCloudCommandAction2["FOLLOWED_UP"] = 2] = "FOLLOWED_UP";
})(FullSelfDrivingCloudCommandAction! || (FullSelfDrivingCloudCommandAction = {} as typeof FullSelfDrivingCloudCommandAction));
proto3.util.setEnumType(FullSelfDrivingCloudCommandAction, "aiserver.v1.FullSelfDrivingCloudCommandAction", [
  { no: 0, name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_UNSPECIFIED" },
  { no: 1, name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_SPAWNED" },
  { no: 2, name: "FULL_SELF_DRIVING_CLOUD_COMMAND_ACTION_FOLLOWED_UP" }
]);
var SetFullSelfDrivingConfigRequest$Runtime = (() => class _SetFullSelfDrivingConfigRequest extends Message<_SetFullSelfDrivingConfigRequest> {
  declare prUrl: string;
  declare enabled: boolean;
  declare mode: FullSelfDrivingMode;
  constructor(data?: PartialMessage<_SetFullSelfDrivingConfigRequest>) {
    super();
    this.prUrl = "";
    this.enabled = false;
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SetFullSelfDrivingConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetFullSelfDrivingConfigRequest {
    return new _SetFullSelfDrivingConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetFullSelfDrivingConfigRequest {
    return new _SetFullSelfDrivingConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetFullSelfDrivingConfigRequest {
    return new _SetFullSelfDrivingConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SetFullSelfDrivingConfigRequest | PlainMessage<_SetFullSelfDrivingConfigRequest> | undefined | null, b2: _SetFullSelfDrivingConfigRequest | PlainMessage<_SetFullSelfDrivingConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_SetFullSelfDrivingConfigRequest as unknown as MessageType<_SetFullSelfDrivingConfigRequest>, a, b2);
  }
})();
export type SetFullSelfDrivingConfigRequest = InstanceType<typeof SetFullSelfDrivingConfigRequest$Runtime>;
var SetFullSelfDrivingConfigRequest: MessageType<SetFullSelfDrivingConfigRequest> = SetFullSelfDrivingConfigRequest$Runtime as unknown as MessageType<SetFullSelfDrivingConfigRequest>;
(SetFullSelfDrivingConfigRequest as MutableMessageType<SetFullSelfDrivingConfigRequest>).runtime = proto3;
(SetFullSelfDrivingConfigRequest as MutableMessageType<SetFullSelfDrivingConfigRequest>).typeName = "aiserver.v1.SetFullSelfDrivingConfigRequest";
(SetFullSelfDrivingConfigRequest as MutableMessageType<SetFullSelfDrivingConfigRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) }
]);
var SetFullSelfDrivingConfigResponse$Runtime = (() => class _SetFullSelfDrivingConfigResponse extends Message<_SetFullSelfDrivingConfigResponse> {
  declare enabled: boolean;
  declare mode: FullSelfDrivingMode;
  declare spawnedBcId: string;
  declare autoStarted: boolean;
  constructor(data?: PartialMessage<_SetFullSelfDrivingConfigResponse>) {
    super();
    this.enabled = false;
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    this.spawnedBcId = "";
    this.autoStarted = false;
    proto3.util.initPartial(data, this as _SetFullSelfDrivingConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetFullSelfDrivingConfigResponse {
    return new _SetFullSelfDrivingConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetFullSelfDrivingConfigResponse {
    return new _SetFullSelfDrivingConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetFullSelfDrivingConfigResponse {
    return new _SetFullSelfDrivingConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SetFullSelfDrivingConfigResponse | PlainMessage<_SetFullSelfDrivingConfigResponse> | undefined | null, b2: _SetFullSelfDrivingConfigResponse | PlainMessage<_SetFullSelfDrivingConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_SetFullSelfDrivingConfigResponse as unknown as MessageType<_SetFullSelfDrivingConfigResponse>, a, b2);
  }
})();
export type SetFullSelfDrivingConfigResponse = InstanceType<typeof SetFullSelfDrivingConfigResponse$Runtime>;
var SetFullSelfDrivingConfigResponse: MessageType<SetFullSelfDrivingConfigResponse> = SetFullSelfDrivingConfigResponse$Runtime as unknown as MessageType<SetFullSelfDrivingConfigResponse>;
(SetFullSelfDrivingConfigResponse as MutableMessageType<SetFullSelfDrivingConfigResponse>).runtime = proto3;
(SetFullSelfDrivingConfigResponse as MutableMessageType<SetFullSelfDrivingConfigResponse>).typeName = "aiserver.v1.SetFullSelfDrivingConfigResponse";
(SetFullSelfDrivingConfigResponse as MutableMessageType<SetFullSelfDrivingConfigResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  {
    no: 3,
    name: "spawned_bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "auto_started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetFullSelfDrivingConfigRequest$Runtime = (() => class _GetFullSelfDrivingConfigRequest extends Message<_GetFullSelfDrivingConfigRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_GetFullSelfDrivingConfigRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _GetFullSelfDrivingConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetFullSelfDrivingConfigRequest {
    return new _GetFullSelfDrivingConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingConfigRequest {
    return new _GetFullSelfDrivingConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingConfigRequest {
    return new _GetFullSelfDrivingConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetFullSelfDrivingConfigRequest | PlainMessage<_GetFullSelfDrivingConfigRequest> | undefined | null, b2: _GetFullSelfDrivingConfigRequest | PlainMessage<_GetFullSelfDrivingConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetFullSelfDrivingConfigRequest as unknown as MessageType<_GetFullSelfDrivingConfigRequest>, a, b2);
  }
})();
export type GetFullSelfDrivingConfigRequest = InstanceType<typeof GetFullSelfDrivingConfigRequest$Runtime>;
var GetFullSelfDrivingConfigRequest: MessageType<GetFullSelfDrivingConfigRequest> = GetFullSelfDrivingConfigRequest$Runtime as unknown as MessageType<GetFullSelfDrivingConfigRequest>;
(GetFullSelfDrivingConfigRequest as MutableMessageType<GetFullSelfDrivingConfigRequest>).runtime = proto3;
(GetFullSelfDrivingConfigRequest as MutableMessageType<GetFullSelfDrivingConfigRequest>).typeName = "aiserver.v1.GetFullSelfDrivingConfigRequest";
(GetFullSelfDrivingConfigRequest as MutableMessageType<GetFullSelfDrivingConfigRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetFullSelfDrivingConfigResponse$Runtime = (() => class _GetFullSelfDrivingConfigResponse extends Message<_GetFullSelfDrivingConfigResponse> {
  declare hasConfig: boolean;
  declare enabled: boolean;
  declare mode: FullSelfDrivingMode;
  declare autoStarted: boolean;
  constructor(data?: PartialMessage<_GetFullSelfDrivingConfigResponse>) {
    super();
    this.hasConfig = false;
    this.enabled = false;
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    this.autoStarted = false;
    proto3.util.initPartial(data, this as _GetFullSelfDrivingConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetFullSelfDrivingConfigResponse {
    return new _GetFullSelfDrivingConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingConfigResponse {
    return new _GetFullSelfDrivingConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingConfigResponse {
    return new _GetFullSelfDrivingConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetFullSelfDrivingConfigResponse | PlainMessage<_GetFullSelfDrivingConfigResponse> | undefined | null, b2: _GetFullSelfDrivingConfigResponse | PlainMessage<_GetFullSelfDrivingConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetFullSelfDrivingConfigResponse as unknown as MessageType<_GetFullSelfDrivingConfigResponse>, a, b2);
  }
})();
export type GetFullSelfDrivingConfigResponse = InstanceType<typeof GetFullSelfDrivingConfigResponse$Runtime>;
var GetFullSelfDrivingConfigResponse: MessageType<GetFullSelfDrivingConfigResponse> = GetFullSelfDrivingConfigResponse$Runtime as unknown as MessageType<GetFullSelfDrivingConfigResponse>;
(GetFullSelfDrivingConfigResponse as MutableMessageType<GetFullSelfDrivingConfigResponse>).runtime = proto3;
(GetFullSelfDrivingConfigResponse as MutableMessageType<GetFullSelfDrivingConfigResponse>).typeName = "aiserver.v1.GetFullSelfDrivingConfigResponse";
(GetFullSelfDrivingConfigResponse as MutableMessageType<GetFullSelfDrivingConfigResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "has_config",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  {
    no: 4,
    name: "auto_started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ListFullSelfDrivingRunsRequest$Runtime = (() => class _ListFullSelfDrivingRunsRequest extends Message<_ListFullSelfDrivingRunsRequest> {
  declare prUrl: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_ListFullSelfDrivingRunsRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _ListFullSelfDrivingRunsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingRunsRequest {
    return new _ListFullSelfDrivingRunsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingRunsRequest {
    return new _ListFullSelfDrivingRunsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingRunsRequest {
    return new _ListFullSelfDrivingRunsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingRunsRequest | PlainMessage<_ListFullSelfDrivingRunsRequest> | undefined | null, b2: _ListFullSelfDrivingRunsRequest | PlainMessage<_ListFullSelfDrivingRunsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingRunsRequest as unknown as MessageType<_ListFullSelfDrivingRunsRequest>, a, b2);
  }
})();
export type ListFullSelfDrivingRunsRequest = InstanceType<typeof ListFullSelfDrivingRunsRequest$Runtime>;
var ListFullSelfDrivingRunsRequest: MessageType<ListFullSelfDrivingRunsRequest> = ListFullSelfDrivingRunsRequest$Runtime as unknown as MessageType<ListFullSelfDrivingRunsRequest>;
(ListFullSelfDrivingRunsRequest as MutableMessageType<ListFullSelfDrivingRunsRequest>).runtime = proto3;
(ListFullSelfDrivingRunsRequest as MutableMessageType<ListFullSelfDrivingRunsRequest>).typeName = "aiserver.v1.ListFullSelfDrivingRunsRequest";
(ListFullSelfDrivingRunsRequest as MutableMessageType<ListFullSelfDrivingRunsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var FullSelfDrivingRunLiveStatus$Runtime = (() => class _FullSelfDrivingRunLiveStatus extends Message<_FullSelfDrivingRunLiveStatus> {
  declare state: string;
  declare status: string;
  declare loadingMessages: string[];
  declare updatedAt?: Timestamp;
  constructor(data?: PartialMessage<_FullSelfDrivingRunLiveStatus>) {
    super();
    this.state = "";
    this.status = "";
    this.loadingMessages = [];
    proto3.util.initPartial(data, this as _FullSelfDrivingRunLiveStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingRunLiveStatus {
    return new _FullSelfDrivingRunLiveStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingRunLiveStatus {
    return new _FullSelfDrivingRunLiveStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingRunLiveStatus {
    return new _FullSelfDrivingRunLiveStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingRunLiveStatus | PlainMessage<_FullSelfDrivingRunLiveStatus> | undefined | null, b2: _FullSelfDrivingRunLiveStatus | PlainMessage<_FullSelfDrivingRunLiveStatus> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingRunLiveStatus as unknown as MessageType<_FullSelfDrivingRunLiveStatus>, a, b2);
  }
})();
export type FullSelfDrivingRunLiveStatus = InstanceType<typeof FullSelfDrivingRunLiveStatus$Runtime>;
var FullSelfDrivingRunLiveStatus: MessageType<FullSelfDrivingRunLiveStatus> = FullSelfDrivingRunLiveStatus$Runtime as unknown as MessageType<FullSelfDrivingRunLiveStatus>;
(FullSelfDrivingRunLiveStatus as MutableMessageType<FullSelfDrivingRunLiveStatus>).runtime = proto3;
(FullSelfDrivingRunLiveStatus as MutableMessageType<FullSelfDrivingRunLiveStatus>).typeName = "aiserver.v1.FullSelfDrivingRunLiveStatus";
(FullSelfDrivingRunLiveStatus as MutableMessageType<FullSelfDrivingRunLiveStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "state",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "loading_messages", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "updated_at", kind: "message", T: Timestamp }
]);
var FullSelfDrivingRun$Runtime = (() => class _FullSelfDrivingRun extends Message<_FullSelfDrivingRun> {
  declare bcId: string;
  declare status: string;
  declare createdAt?: Timestamp;
  declare firstFinishedAt?: Timestamp;
  declare branchName: string;
  declare autoBranch: boolean;
  declare filesChanged: number;
  declare source: string;
  declare activeRunId: string;
  declare latestStatusUpdate?: FullSelfDrivingRunLiveStatus;
  constructor(data?: PartialMessage<_FullSelfDrivingRun>) {
    super();
    this.bcId = "";
    this.status = "";
    this.branchName = "";
    this.autoBranch = false;
    this.filesChanged = 0;
    this.source = "";
    this.activeRunId = "";
    proto3.util.initPartial(data, this as _FullSelfDrivingRun);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingRun {
    return new _FullSelfDrivingRun().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingRun {
    return new _FullSelfDrivingRun().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingRun {
    return new _FullSelfDrivingRun().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingRun | PlainMessage<_FullSelfDrivingRun> | undefined | null, b2: _FullSelfDrivingRun | PlainMessage<_FullSelfDrivingRun> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingRun as unknown as MessageType<_FullSelfDrivingRun>, a, b2);
  }
})();
export type FullSelfDrivingRun = InstanceType<typeof FullSelfDrivingRun$Runtime>;
var FullSelfDrivingRun: MessageType<FullSelfDrivingRun> = FullSelfDrivingRun$Runtime as unknown as MessageType<FullSelfDrivingRun>;
(FullSelfDrivingRun as MutableMessageType<FullSelfDrivingRun>).runtime = proto3;
(FullSelfDrivingRun as MutableMessageType<FullSelfDrivingRun>).typeName = "aiserver.v1.FullSelfDrivingRun";
(FullSelfDrivingRun as MutableMessageType<FullSelfDrivingRun>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "created_at", kind: "message", T: Timestamp },
  { no: 4, name: "first_finished_at", kind: "message", T: Timestamp },
  {
    no: 5,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "auto_branch",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "files_changed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 8,
    name: "source",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "active_run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 10, name: "latest_status_update", kind: "message", T: FullSelfDrivingRunLiveStatus, opt: true }
]);
var ListFullSelfDrivingRunsResponse$Runtime = (() => class _ListFullSelfDrivingRunsResponse extends Message<_ListFullSelfDrivingRunsResponse> {
  declare runs: FullSelfDrivingRun[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingRunsResponse>) {
    super();
    this.runs = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingRunsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingRunsResponse {
    return new _ListFullSelfDrivingRunsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingRunsResponse {
    return new _ListFullSelfDrivingRunsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingRunsResponse {
    return new _ListFullSelfDrivingRunsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingRunsResponse | PlainMessage<_ListFullSelfDrivingRunsResponse> | undefined | null, b2: _ListFullSelfDrivingRunsResponse | PlainMessage<_ListFullSelfDrivingRunsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingRunsResponse as unknown as MessageType<_ListFullSelfDrivingRunsResponse>, a, b2);
  }
})();
export type ListFullSelfDrivingRunsResponse = InstanceType<typeof ListFullSelfDrivingRunsResponse$Runtime>;
var ListFullSelfDrivingRunsResponse: MessageType<ListFullSelfDrivingRunsResponse> = ListFullSelfDrivingRunsResponse$Runtime as unknown as MessageType<ListFullSelfDrivingRunsResponse>;
(ListFullSelfDrivingRunsResponse as MutableMessageType<ListFullSelfDrivingRunsResponse>).runtime = proto3;
(ListFullSelfDrivingRunsResponse as MutableMessageType<ListFullSelfDrivingRunsResponse>).typeName = "aiserver.v1.ListFullSelfDrivingRunsResponse";
(ListFullSelfDrivingRunsResponse as MutableMessageType<ListFullSelfDrivingRunsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "runs", kind: "message", T: FullSelfDrivingRun, repeated: true }
]);
var ListFullSelfDrivingFindingsRequest$Runtime = (() => class _ListFullSelfDrivingFindingsRequest extends Message<_ListFullSelfDrivingFindingsRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare limit?: number;
  declare includeSuperseded: boolean;
  declare kinds: string[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingFindingsRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.includeSuperseded = false;
    this.kinds = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingFindingsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingFindingsRequest {
    return new _ListFullSelfDrivingFindingsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingFindingsRequest {
    return new _ListFullSelfDrivingFindingsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingFindingsRequest {
    return new _ListFullSelfDrivingFindingsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingFindingsRequest | PlainMessage<_ListFullSelfDrivingFindingsRequest> | undefined | null, b2: _ListFullSelfDrivingFindingsRequest | PlainMessage<_ListFullSelfDrivingFindingsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingFindingsRequest as unknown as MessageType<_ListFullSelfDrivingFindingsRequest>, a, b2);
  }
})();
export type ListFullSelfDrivingFindingsRequest = InstanceType<typeof ListFullSelfDrivingFindingsRequest$Runtime>;
var ListFullSelfDrivingFindingsRequest: MessageType<ListFullSelfDrivingFindingsRequest> = ListFullSelfDrivingFindingsRequest$Runtime as unknown as MessageType<ListFullSelfDrivingFindingsRequest>;
(ListFullSelfDrivingFindingsRequest as MutableMessageType<ListFullSelfDrivingFindingsRequest>).runtime = proto3;
(ListFullSelfDrivingFindingsRequest as MutableMessageType<ListFullSelfDrivingFindingsRequest>).typeName = "aiserver.v1.ListFullSelfDrivingFindingsRequest";
(ListFullSelfDrivingFindingsRequest as MutableMessageType<ListFullSelfDrivingFindingsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true },
  {
    no: 4,
    name: "include_superseded",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "kinds", kind: "scalar", T: 9, repeated: true }
]);
var FullSelfDrivingFinding$Runtime = (() => class _FullSelfDrivingFinding extends Message<_FullSelfDrivingFinding> {
  declare eventId: string;
  declare lastUpdatedAt?: Timestamp;
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare status: string;
  declare title: string;
  declare body: string;
  declare severity: string;
  declare payload?: Struct;
  declare supersededByStableKey: string;
  declare supersededReason: string;
  declare dismissedReason: string;
  declare kind: string;
  declare action: string;
  declare dedupeKey: string;
  constructor(data?: PartialMessage<_FullSelfDrivingFinding>) {
    super();
    this.eventId = "";
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    this.status = "";
    this.title = "";
    this.body = "";
    this.severity = "";
    this.supersededByStableKey = "";
    this.supersededReason = "";
    this.dismissedReason = "";
    this.kind = "";
    this.action = "";
    this.dedupeKey = "";
    proto3.util.initPartial(data, this as _FullSelfDrivingFinding);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingFinding {
    return new _FullSelfDrivingFinding().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingFinding {
    return new _FullSelfDrivingFinding().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingFinding {
    return new _FullSelfDrivingFinding().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingFinding | PlainMessage<_FullSelfDrivingFinding> | undefined | null, b2: _FullSelfDrivingFinding | PlainMessage<_FullSelfDrivingFinding> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingFinding as unknown as MessageType<_FullSelfDrivingFinding>, a, b2);
  }
})();
export type FullSelfDrivingFinding = InstanceType<typeof FullSelfDrivingFinding$Runtime>;
var FullSelfDrivingFinding: MessageType<FullSelfDrivingFinding> = FullSelfDrivingFinding$Runtime as unknown as MessageType<FullSelfDrivingFinding>;
(FullSelfDrivingFinding as MutableMessageType<FullSelfDrivingFinding>).runtime = proto3;
(FullSelfDrivingFinding as MutableMessageType<FullSelfDrivingFinding>).typeName = "aiserver.v1.FullSelfDrivingFinding";
(FullSelfDrivingFinding as MutableMessageType<FullSelfDrivingFinding>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "last_updated_at", kind: "message", T: Timestamp },
  {
    no: 3,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 10, name: "payload", kind: "message", T: Struct },
  {
    no: 11,
    name: "superseded_by_stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "superseded_reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 13,
    name: "dismissed_reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 15,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 16,
    name: "dedupe_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListFullSelfDrivingFindingsResponse$Runtime = (() => class _ListFullSelfDrivingFindingsResponse extends Message<_ListFullSelfDrivingFindingsResponse> {
  declare findings: FullSelfDrivingFinding[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingFindingsResponse>) {
    super();
    this.findings = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingFindingsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingFindingsResponse {
    return new _ListFullSelfDrivingFindingsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingFindingsResponse {
    return new _ListFullSelfDrivingFindingsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingFindingsResponse {
    return new _ListFullSelfDrivingFindingsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingFindingsResponse | PlainMessage<_ListFullSelfDrivingFindingsResponse> | undefined | null, b2: _ListFullSelfDrivingFindingsResponse | PlainMessage<_ListFullSelfDrivingFindingsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingFindingsResponse as unknown as MessageType<_ListFullSelfDrivingFindingsResponse>, a, b2);
  }
})();
export type ListFullSelfDrivingFindingsResponse = InstanceType<typeof ListFullSelfDrivingFindingsResponse$Runtime>;
var ListFullSelfDrivingFindingsResponse: MessageType<ListFullSelfDrivingFindingsResponse> = ListFullSelfDrivingFindingsResponse$Runtime as unknown as MessageType<ListFullSelfDrivingFindingsResponse>;
(ListFullSelfDrivingFindingsResponse as MutableMessageType<ListFullSelfDrivingFindingsResponse>).runtime = proto3;
(ListFullSelfDrivingFindingsResponse as MutableMessageType<ListFullSelfDrivingFindingsResponse>).typeName = "aiserver.v1.ListFullSelfDrivingFindingsResponse";
(ListFullSelfDrivingFindingsResponse as MutableMessageType<ListFullSelfDrivingFindingsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "findings", kind: "message", T: FullSelfDrivingFinding, repeated: true }
]);
var FullSelfDrivingOutputInput$Runtime = (() => class _FullSelfDrivingOutputInput extends Message<_FullSelfDrivingOutputInput> {
  declare stableKey: string;
  declare kind: string;
  declare status: string;
  declare title: string;
  declare body: string;
  declare severity: string;
  declare action: string;
  declare payload?: Struct;
  constructor(data?: PartialMessage<_FullSelfDrivingOutputInput>) {
    super();
    this.stableKey = "";
    this.kind = "";
    this.status = "";
    this.title = "";
    this.body = "";
    this.severity = "";
    this.action = "";
    proto3.util.initPartial(data, this as _FullSelfDrivingOutputInput);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingOutputInput {
    return new _FullSelfDrivingOutputInput().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingOutputInput {
    return new _FullSelfDrivingOutputInput().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingOutputInput {
    return new _FullSelfDrivingOutputInput().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingOutputInput | PlainMessage<_FullSelfDrivingOutputInput> | undefined | null, b2: _FullSelfDrivingOutputInput | PlainMessage<_FullSelfDrivingOutputInput> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingOutputInput as unknown as MessageType<_FullSelfDrivingOutputInput>, a, b2);
  }
})();
export type FullSelfDrivingOutputInput = InstanceType<typeof FullSelfDrivingOutputInput$Runtime>;
var FullSelfDrivingOutputInput: MessageType<FullSelfDrivingOutputInput> = FullSelfDrivingOutputInput$Runtime as unknown as MessageType<FullSelfDrivingOutputInput>;
(FullSelfDrivingOutputInput as MutableMessageType<FullSelfDrivingOutputInput>).runtime = proto3;
(FullSelfDrivingOutputInput as MutableMessageType<FullSelfDrivingOutputInput>).typeName = "aiserver.v1.FullSelfDrivingOutputInput";
(FullSelfDrivingOutputInput as MutableMessageType<FullSelfDrivingOutputInput>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "kind",
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
  },
  {
    no: 4,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "payload", kind: "message", T: Struct }
]);
var RecordFullSelfDrivingOutputsRequest$Runtime = (() => class _RecordFullSelfDrivingOutputsRequest extends Message<_RecordFullSelfDrivingOutputsRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare outputs: FullSelfDrivingOutputInput[];
  constructor(data?: PartialMessage<_RecordFullSelfDrivingOutputsRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.outputs = [];
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingOutputsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingOutputsRequest {
    return new _RecordFullSelfDrivingOutputsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingOutputsRequest {
    return new _RecordFullSelfDrivingOutputsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingOutputsRequest {
    return new _RecordFullSelfDrivingOutputsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingOutputsRequest | PlainMessage<_RecordFullSelfDrivingOutputsRequest> | undefined | null, b2: _RecordFullSelfDrivingOutputsRequest | PlainMessage<_RecordFullSelfDrivingOutputsRequest> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingOutputsRequest as unknown as MessageType<_RecordFullSelfDrivingOutputsRequest>, a, b2);
  }
})();
export type RecordFullSelfDrivingOutputsRequest = InstanceType<typeof RecordFullSelfDrivingOutputsRequest$Runtime>;
var RecordFullSelfDrivingOutputsRequest: MessageType<RecordFullSelfDrivingOutputsRequest> = RecordFullSelfDrivingOutputsRequest$Runtime as unknown as MessageType<RecordFullSelfDrivingOutputsRequest>;
(RecordFullSelfDrivingOutputsRequest as MutableMessageType<RecordFullSelfDrivingOutputsRequest>).runtime = proto3;
(RecordFullSelfDrivingOutputsRequest as MutableMessageType<RecordFullSelfDrivingOutputsRequest>).typeName = "aiserver.v1.RecordFullSelfDrivingOutputsRequest";
(RecordFullSelfDrivingOutputsRequest as MutableMessageType<RecordFullSelfDrivingOutputsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "outputs", kind: "message", T: FullSelfDrivingOutputInput, repeated: true }
]);
var RecordFullSelfDrivingOutputsResponse$Runtime = (() => class _RecordFullSelfDrivingOutputsResponse extends Message<_RecordFullSelfDrivingOutputsResponse> {
  declare findings: FullSelfDrivingFinding[];
  constructor(data?: PartialMessage<_RecordFullSelfDrivingOutputsResponse>) {
    super();
    this.findings = [];
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingOutputsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingOutputsResponse {
    return new _RecordFullSelfDrivingOutputsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingOutputsResponse {
    return new _RecordFullSelfDrivingOutputsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingOutputsResponse {
    return new _RecordFullSelfDrivingOutputsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingOutputsResponse | PlainMessage<_RecordFullSelfDrivingOutputsResponse> | undefined | null, b2: _RecordFullSelfDrivingOutputsResponse | PlainMessage<_RecordFullSelfDrivingOutputsResponse> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingOutputsResponse as unknown as MessageType<_RecordFullSelfDrivingOutputsResponse>, a, b2);
  }
})();
export type RecordFullSelfDrivingOutputsResponse = InstanceType<typeof RecordFullSelfDrivingOutputsResponse$Runtime>;
var RecordFullSelfDrivingOutputsResponse: MessageType<RecordFullSelfDrivingOutputsResponse> = RecordFullSelfDrivingOutputsResponse$Runtime as unknown as MessageType<RecordFullSelfDrivingOutputsResponse>;
(RecordFullSelfDrivingOutputsResponse as MutableMessageType<RecordFullSelfDrivingOutputsResponse>).runtime = proto3;
(RecordFullSelfDrivingOutputsResponse as MutableMessageType<RecordFullSelfDrivingOutputsResponse>).typeName = "aiserver.v1.RecordFullSelfDrivingOutputsResponse";
(RecordFullSelfDrivingOutputsResponse as MutableMessageType<RecordFullSelfDrivingOutputsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "findings", kind: "message", T: FullSelfDrivingFinding, repeated: true }
]);
var UpdateFullSelfDrivingOutputRequest$Runtime = (() => class _UpdateFullSelfDrivingOutputRequest extends Message<_UpdateFullSelfDrivingOutputRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare title?: string;
  declare body?: string;
  declare status?: string;
  declare severity?: string;
  declare clearSeverity?: boolean;
  declare action?: string;
  declare clearAction?: boolean;
  declare payload?: Struct;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingOutputRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingOutputRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingOutputRequest {
    return new _UpdateFullSelfDrivingOutputRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingOutputRequest {
    return new _UpdateFullSelfDrivingOutputRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingOutputRequest {
    return new _UpdateFullSelfDrivingOutputRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingOutputRequest | PlainMessage<_UpdateFullSelfDrivingOutputRequest> | undefined | null, b2: _UpdateFullSelfDrivingOutputRequest | PlainMessage<_UpdateFullSelfDrivingOutputRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingOutputRequest as unknown as MessageType<_UpdateFullSelfDrivingOutputRequest>, a, b2);
  }
})();
export type UpdateFullSelfDrivingOutputRequest = InstanceType<typeof UpdateFullSelfDrivingOutputRequest$Runtime>;
var UpdateFullSelfDrivingOutputRequest: MessageType<UpdateFullSelfDrivingOutputRequest> = UpdateFullSelfDrivingOutputRequest$Runtime as unknown as MessageType<UpdateFullSelfDrivingOutputRequest>;
(UpdateFullSelfDrivingOutputRequest as MutableMessageType<UpdateFullSelfDrivingOutputRequest>).runtime = proto3;
(UpdateFullSelfDrivingOutputRequest as MutableMessageType<UpdateFullSelfDrivingOutputRequest>).typeName = "aiserver.v1.UpdateFullSelfDrivingOutputRequest";
(UpdateFullSelfDrivingOutputRequest as MutableMessageType<UpdateFullSelfDrivingOutputRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "body", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "status", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "severity", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "clear_severity", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "action", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "clear_action", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "payload", kind: "message", T: Struct }
]);
var UpdateFullSelfDrivingOutputResponse$Runtime = (() => class _UpdateFullSelfDrivingOutputResponse extends Message<_UpdateFullSelfDrivingOutputResponse> {
  declare finding?: FullSelfDrivingFinding;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingOutputResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingOutputResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingOutputResponse {
    return new _UpdateFullSelfDrivingOutputResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingOutputResponse {
    return new _UpdateFullSelfDrivingOutputResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingOutputResponse {
    return new _UpdateFullSelfDrivingOutputResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingOutputResponse | PlainMessage<_UpdateFullSelfDrivingOutputResponse> | undefined | null, b2: _UpdateFullSelfDrivingOutputResponse | PlainMessage<_UpdateFullSelfDrivingOutputResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingOutputResponse as unknown as MessageType<_UpdateFullSelfDrivingOutputResponse>, a, b2);
  }
})();
export type UpdateFullSelfDrivingOutputResponse = InstanceType<typeof UpdateFullSelfDrivingOutputResponse$Runtime>;
var UpdateFullSelfDrivingOutputResponse: MessageType<UpdateFullSelfDrivingOutputResponse> = UpdateFullSelfDrivingOutputResponse$Runtime as unknown as MessageType<UpdateFullSelfDrivingOutputResponse>;
(UpdateFullSelfDrivingOutputResponse as MutableMessageType<UpdateFullSelfDrivingOutputResponse>).runtime = proto3;
(UpdateFullSelfDrivingOutputResponse as MutableMessageType<UpdateFullSelfDrivingOutputResponse>).typeName = "aiserver.v1.UpdateFullSelfDrivingOutputResponse";
(UpdateFullSelfDrivingOutputResponse as MutableMessageType<UpdateFullSelfDrivingOutputResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding }
]);
var SupersedeFullSelfDrivingOutputRequest$Runtime = (() => class _SupersedeFullSelfDrivingOutputRequest extends Message<_SupersedeFullSelfDrivingOutputRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare replacementStableKey?: string;
  declare reason?: string;
  constructor(data?: PartialMessage<_SupersedeFullSelfDrivingOutputRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    proto3.util.initPartial(data, this as _SupersedeFullSelfDrivingOutputRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SupersedeFullSelfDrivingOutputRequest {
    return new _SupersedeFullSelfDrivingOutputRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SupersedeFullSelfDrivingOutputRequest {
    return new _SupersedeFullSelfDrivingOutputRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SupersedeFullSelfDrivingOutputRequest {
    return new _SupersedeFullSelfDrivingOutputRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SupersedeFullSelfDrivingOutputRequest | PlainMessage<_SupersedeFullSelfDrivingOutputRequest> | undefined | null, b2: _SupersedeFullSelfDrivingOutputRequest | PlainMessage<_SupersedeFullSelfDrivingOutputRequest> | undefined | null): boolean {
    return proto3.util.equals(_SupersedeFullSelfDrivingOutputRequest as unknown as MessageType<_SupersedeFullSelfDrivingOutputRequest>, a, b2);
  }
})();
export type SupersedeFullSelfDrivingOutputRequest = InstanceType<typeof SupersedeFullSelfDrivingOutputRequest$Runtime>;
var SupersedeFullSelfDrivingOutputRequest: MessageType<SupersedeFullSelfDrivingOutputRequest> = SupersedeFullSelfDrivingOutputRequest$Runtime as unknown as MessageType<SupersedeFullSelfDrivingOutputRequest>;
(SupersedeFullSelfDrivingOutputRequest as MutableMessageType<SupersedeFullSelfDrivingOutputRequest>).runtime = proto3;
(SupersedeFullSelfDrivingOutputRequest as MutableMessageType<SupersedeFullSelfDrivingOutputRequest>).typeName = "aiserver.v1.SupersedeFullSelfDrivingOutputRequest";
(SupersedeFullSelfDrivingOutputRequest as MutableMessageType<SupersedeFullSelfDrivingOutputRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "replacement_stable_key", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "reason", kind: "scalar", T: 9, opt: true }
]);
var SupersedeFullSelfDrivingOutputResponse$Runtime = (() => class _SupersedeFullSelfDrivingOutputResponse extends Message<_SupersedeFullSelfDrivingOutputResponse> {
  declare finding?: FullSelfDrivingFinding;
  constructor(data?: PartialMessage<_SupersedeFullSelfDrivingOutputResponse>) {
    super();
    proto3.util.initPartial(data, this as _SupersedeFullSelfDrivingOutputResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SupersedeFullSelfDrivingOutputResponse {
    return new _SupersedeFullSelfDrivingOutputResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SupersedeFullSelfDrivingOutputResponse {
    return new _SupersedeFullSelfDrivingOutputResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SupersedeFullSelfDrivingOutputResponse {
    return new _SupersedeFullSelfDrivingOutputResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SupersedeFullSelfDrivingOutputResponse | PlainMessage<_SupersedeFullSelfDrivingOutputResponse> | undefined | null, b2: _SupersedeFullSelfDrivingOutputResponse | PlainMessage<_SupersedeFullSelfDrivingOutputResponse> | undefined | null): boolean {
    return proto3.util.equals(_SupersedeFullSelfDrivingOutputResponse as unknown as MessageType<_SupersedeFullSelfDrivingOutputResponse>, a, b2);
  }
})();
export type SupersedeFullSelfDrivingOutputResponse = InstanceType<typeof SupersedeFullSelfDrivingOutputResponse$Runtime>;
var SupersedeFullSelfDrivingOutputResponse: MessageType<SupersedeFullSelfDrivingOutputResponse> = SupersedeFullSelfDrivingOutputResponse$Runtime as unknown as MessageType<SupersedeFullSelfDrivingOutputResponse>;
(SupersedeFullSelfDrivingOutputResponse as MutableMessageType<SupersedeFullSelfDrivingOutputResponse>).runtime = proto3;
(SupersedeFullSelfDrivingOutputResponse as MutableMessageType<SupersedeFullSelfDrivingOutputResponse>).typeName = "aiserver.v1.SupersedeFullSelfDrivingOutputResponse";
(SupersedeFullSelfDrivingOutputResponse as MutableMessageType<SupersedeFullSelfDrivingOutputResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding }
]);
var DismissFullSelfDrivingOutputRequest$Runtime = (() => class _DismissFullSelfDrivingOutputRequest extends Message<_DismissFullSelfDrivingOutputRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare reason?: string;
  constructor(data?: PartialMessage<_DismissFullSelfDrivingOutputRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    proto3.util.initPartial(data, this as _DismissFullSelfDrivingOutputRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DismissFullSelfDrivingOutputRequest {
    return new _DismissFullSelfDrivingOutputRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DismissFullSelfDrivingOutputRequest {
    return new _DismissFullSelfDrivingOutputRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DismissFullSelfDrivingOutputRequest {
    return new _DismissFullSelfDrivingOutputRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _DismissFullSelfDrivingOutputRequest | PlainMessage<_DismissFullSelfDrivingOutputRequest> | undefined | null, b2: _DismissFullSelfDrivingOutputRequest | PlainMessage<_DismissFullSelfDrivingOutputRequest> | undefined | null): boolean {
    return proto3.util.equals(_DismissFullSelfDrivingOutputRequest as unknown as MessageType<_DismissFullSelfDrivingOutputRequest>, a, b2);
  }
})();
export type DismissFullSelfDrivingOutputRequest = InstanceType<typeof DismissFullSelfDrivingOutputRequest$Runtime>;
var DismissFullSelfDrivingOutputRequest: MessageType<DismissFullSelfDrivingOutputRequest> = DismissFullSelfDrivingOutputRequest$Runtime as unknown as MessageType<DismissFullSelfDrivingOutputRequest>;
(DismissFullSelfDrivingOutputRequest as MutableMessageType<DismissFullSelfDrivingOutputRequest>).runtime = proto3;
(DismissFullSelfDrivingOutputRequest as MutableMessageType<DismissFullSelfDrivingOutputRequest>).typeName = "aiserver.v1.DismissFullSelfDrivingOutputRequest";
(DismissFullSelfDrivingOutputRequest as MutableMessageType<DismissFullSelfDrivingOutputRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "reason", kind: "scalar", T: 9, opt: true }
]);
var DismissFullSelfDrivingOutputResponse$Runtime = (() => class _DismissFullSelfDrivingOutputResponse extends Message<_DismissFullSelfDrivingOutputResponse> {
  declare finding?: FullSelfDrivingFinding;
  constructor(data?: PartialMessage<_DismissFullSelfDrivingOutputResponse>) {
    super();
    proto3.util.initPartial(data, this as _DismissFullSelfDrivingOutputResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DismissFullSelfDrivingOutputResponse {
    return new _DismissFullSelfDrivingOutputResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DismissFullSelfDrivingOutputResponse {
    return new _DismissFullSelfDrivingOutputResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DismissFullSelfDrivingOutputResponse {
    return new _DismissFullSelfDrivingOutputResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _DismissFullSelfDrivingOutputResponse | PlainMessage<_DismissFullSelfDrivingOutputResponse> | undefined | null, b2: _DismissFullSelfDrivingOutputResponse | PlainMessage<_DismissFullSelfDrivingOutputResponse> | undefined | null): boolean {
    return proto3.util.equals(_DismissFullSelfDrivingOutputResponse as unknown as MessageType<_DismissFullSelfDrivingOutputResponse>, a, b2);
  }
})();
export type DismissFullSelfDrivingOutputResponse = InstanceType<typeof DismissFullSelfDrivingOutputResponse$Runtime>;
var DismissFullSelfDrivingOutputResponse: MessageType<DismissFullSelfDrivingOutputResponse> = DismissFullSelfDrivingOutputResponse$Runtime as unknown as MessageType<DismissFullSelfDrivingOutputResponse>;
(DismissFullSelfDrivingOutputResponse as MutableMessageType<DismissFullSelfDrivingOutputResponse>).runtime = proto3;
(DismissFullSelfDrivingOutputResponse as MutableMessageType<DismissFullSelfDrivingOutputResponse>).typeName = "aiserver.v1.DismissFullSelfDrivingOutputResponse";
(DismissFullSelfDrivingOutputResponse as MutableMessageType<DismissFullSelfDrivingOutputResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding }
]);
var UndoFullSelfDrivingOutputRequest$Runtime = (() => class _UndoFullSelfDrivingOutputRequest extends Message<_UndoFullSelfDrivingOutputRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  constructor(data?: PartialMessage<_UndoFullSelfDrivingOutputRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    proto3.util.initPartial(data, this as _UndoFullSelfDrivingOutputRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UndoFullSelfDrivingOutputRequest {
    return new _UndoFullSelfDrivingOutputRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UndoFullSelfDrivingOutputRequest {
    return new _UndoFullSelfDrivingOutputRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UndoFullSelfDrivingOutputRequest {
    return new _UndoFullSelfDrivingOutputRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UndoFullSelfDrivingOutputRequest | PlainMessage<_UndoFullSelfDrivingOutputRequest> | undefined | null, b2: _UndoFullSelfDrivingOutputRequest | PlainMessage<_UndoFullSelfDrivingOutputRequest> | undefined | null): boolean {
    return proto3.util.equals(_UndoFullSelfDrivingOutputRequest as unknown as MessageType<_UndoFullSelfDrivingOutputRequest>, a, b2);
  }
})();
export type UndoFullSelfDrivingOutputRequest = InstanceType<typeof UndoFullSelfDrivingOutputRequest$Runtime>;
var UndoFullSelfDrivingOutputRequest: MessageType<UndoFullSelfDrivingOutputRequest> = UndoFullSelfDrivingOutputRequest$Runtime as unknown as MessageType<UndoFullSelfDrivingOutputRequest>;
(UndoFullSelfDrivingOutputRequest as MutableMessageType<UndoFullSelfDrivingOutputRequest>).runtime = proto3;
(UndoFullSelfDrivingOutputRequest as MutableMessageType<UndoFullSelfDrivingOutputRequest>).typeName = "aiserver.v1.UndoFullSelfDrivingOutputRequest";
(UndoFullSelfDrivingOutputRequest as MutableMessageType<UndoFullSelfDrivingOutputRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UndoFullSelfDrivingOutputResponse$Runtime = (() => class _UndoFullSelfDrivingOutputResponse extends Message<_UndoFullSelfDrivingOutputResponse> {
  declare finding?: FullSelfDrivingFinding;
  constructor(data?: PartialMessage<_UndoFullSelfDrivingOutputResponse>) {
    super();
    proto3.util.initPartial(data, this as _UndoFullSelfDrivingOutputResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UndoFullSelfDrivingOutputResponse {
    return new _UndoFullSelfDrivingOutputResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UndoFullSelfDrivingOutputResponse {
    return new _UndoFullSelfDrivingOutputResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UndoFullSelfDrivingOutputResponse {
    return new _UndoFullSelfDrivingOutputResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UndoFullSelfDrivingOutputResponse | PlainMessage<_UndoFullSelfDrivingOutputResponse> | undefined | null, b2: _UndoFullSelfDrivingOutputResponse | PlainMessage<_UndoFullSelfDrivingOutputResponse> | undefined | null): boolean {
    return proto3.util.equals(_UndoFullSelfDrivingOutputResponse as unknown as MessageType<_UndoFullSelfDrivingOutputResponse>, a, b2);
  }
})();
export type UndoFullSelfDrivingOutputResponse = InstanceType<typeof UndoFullSelfDrivingOutputResponse$Runtime>;
var UndoFullSelfDrivingOutputResponse: MessageType<UndoFullSelfDrivingOutputResponse> = UndoFullSelfDrivingOutputResponse$Runtime as unknown as MessageType<UndoFullSelfDrivingOutputResponse>;
(UndoFullSelfDrivingOutputResponse as MutableMessageType<UndoFullSelfDrivingOutputResponse>).runtime = proto3;
(UndoFullSelfDrivingOutputResponse as MutableMessageType<UndoFullSelfDrivingOutputResponse>).typeName = "aiserver.v1.UndoFullSelfDrivingOutputResponse";
(UndoFullSelfDrivingOutputResponse as MutableMessageType<UndoFullSelfDrivingOutputResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding }
]);
var GetFullSelfDrivingRunSuggestionRequest$Runtime = (() => class _GetFullSelfDrivingRunSuggestionRequest extends Message<_GetFullSelfDrivingRunSuggestionRequest> {
  declare prUrl: string;
  declare bcId: string;
  constructor(data?: PartialMessage<_GetFullSelfDrivingRunSuggestionRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    proto3.util.initPartial(data, this as _GetFullSelfDrivingRunSuggestionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetFullSelfDrivingRunSuggestionRequest {
    return new _GetFullSelfDrivingRunSuggestionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingRunSuggestionRequest {
    return new _GetFullSelfDrivingRunSuggestionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingRunSuggestionRequest {
    return new _GetFullSelfDrivingRunSuggestionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetFullSelfDrivingRunSuggestionRequest | PlainMessage<_GetFullSelfDrivingRunSuggestionRequest> | undefined | null, b2: _GetFullSelfDrivingRunSuggestionRequest | PlainMessage<_GetFullSelfDrivingRunSuggestionRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetFullSelfDrivingRunSuggestionRequest as unknown as MessageType<_GetFullSelfDrivingRunSuggestionRequest>, a, b2);
  }
})();
export type GetFullSelfDrivingRunSuggestionRequest = InstanceType<typeof GetFullSelfDrivingRunSuggestionRequest$Runtime>;
var GetFullSelfDrivingRunSuggestionRequest: MessageType<GetFullSelfDrivingRunSuggestionRequest> = GetFullSelfDrivingRunSuggestionRequest$Runtime as unknown as MessageType<GetFullSelfDrivingRunSuggestionRequest>;
(GetFullSelfDrivingRunSuggestionRequest as MutableMessageType<GetFullSelfDrivingRunSuggestionRequest>).runtime = proto3;
(GetFullSelfDrivingRunSuggestionRequest as MutableMessageType<GetFullSelfDrivingRunSuggestionRequest>).typeName = "aiserver.v1.GetFullSelfDrivingRunSuggestionRequest";
(GetFullSelfDrivingRunSuggestionRequest as MutableMessageType<GetFullSelfDrivingRunSuggestionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetFullSelfDrivingRunSuggestionResponse$Runtime = (() => class _GetFullSelfDrivingRunSuggestionResponse extends Message<_GetFullSelfDrivingRunSuggestionResponse> {
  declare state: FullSelfDrivingRunSuggestionState;
  declare sideBranchName: string;
  declare headCommitSha: string;
  declare baseCommitSha: string;
  declare createPrUrl: string;
  declare alreadyApplied: boolean;
  constructor(data?: PartialMessage<_GetFullSelfDrivingRunSuggestionResponse>) {
    super();
    this.state = FullSelfDrivingRunSuggestionState.UNSPECIFIED;
    this.sideBranchName = "";
    this.headCommitSha = "";
    this.baseCommitSha = "";
    this.createPrUrl = "";
    this.alreadyApplied = false;
    proto3.util.initPartial(data, this as _GetFullSelfDrivingRunSuggestionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetFullSelfDrivingRunSuggestionResponse {
    return new _GetFullSelfDrivingRunSuggestionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingRunSuggestionResponse {
    return new _GetFullSelfDrivingRunSuggestionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetFullSelfDrivingRunSuggestionResponse {
    return new _GetFullSelfDrivingRunSuggestionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetFullSelfDrivingRunSuggestionResponse | PlainMessage<_GetFullSelfDrivingRunSuggestionResponse> | undefined | null, b2: _GetFullSelfDrivingRunSuggestionResponse | PlainMessage<_GetFullSelfDrivingRunSuggestionResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetFullSelfDrivingRunSuggestionResponse as unknown as MessageType<_GetFullSelfDrivingRunSuggestionResponse>, a, b2);
  }
})();
export type GetFullSelfDrivingRunSuggestionResponse = InstanceType<typeof GetFullSelfDrivingRunSuggestionResponse$Runtime>;
var GetFullSelfDrivingRunSuggestionResponse: MessageType<GetFullSelfDrivingRunSuggestionResponse> = GetFullSelfDrivingRunSuggestionResponse$Runtime as unknown as MessageType<GetFullSelfDrivingRunSuggestionResponse>;
(GetFullSelfDrivingRunSuggestionResponse as MutableMessageType<GetFullSelfDrivingRunSuggestionResponse>).runtime = proto3;
(GetFullSelfDrivingRunSuggestionResponse as MutableMessageType<GetFullSelfDrivingRunSuggestionResponse>).typeName = "aiserver.v1.GetFullSelfDrivingRunSuggestionResponse";
(GetFullSelfDrivingRunSuggestionResponse as MutableMessageType<GetFullSelfDrivingRunSuggestionResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(FullSelfDrivingRunSuggestionState) },
  {
    no: 2,
    name: "side_branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "head_commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "base_commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "create_pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "already_applied",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ApplyFullSelfDrivingSuggestionRequest$Runtime = (() => class _ApplyFullSelfDrivingSuggestionRequest extends Message<_ApplyFullSelfDrivingSuggestionRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare headCommitSha: string;
  declare stableKey: string;
  constructor(data?: PartialMessage<_ApplyFullSelfDrivingSuggestionRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.headCommitSha = "";
    this.stableKey = "";
    proto3.util.initPartial(data, this as _ApplyFullSelfDrivingSuggestionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyFullSelfDrivingSuggestionRequest {
    return new _ApplyFullSelfDrivingSuggestionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingSuggestionRequest {
    return new _ApplyFullSelfDrivingSuggestionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingSuggestionRequest {
    return new _ApplyFullSelfDrivingSuggestionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyFullSelfDrivingSuggestionRequest | PlainMessage<_ApplyFullSelfDrivingSuggestionRequest> | undefined | null, b2: _ApplyFullSelfDrivingSuggestionRequest | PlainMessage<_ApplyFullSelfDrivingSuggestionRequest> | undefined | null): boolean {
    return proto3.util.equals(_ApplyFullSelfDrivingSuggestionRequest as unknown as MessageType<_ApplyFullSelfDrivingSuggestionRequest>, a, b2);
  }
})();
export type ApplyFullSelfDrivingSuggestionRequest = InstanceType<typeof ApplyFullSelfDrivingSuggestionRequest$Runtime>;
var ApplyFullSelfDrivingSuggestionRequest: MessageType<ApplyFullSelfDrivingSuggestionRequest> = ApplyFullSelfDrivingSuggestionRequest$Runtime as unknown as MessageType<ApplyFullSelfDrivingSuggestionRequest>;
(ApplyFullSelfDrivingSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingSuggestionRequest>).runtime = proto3;
(ApplyFullSelfDrivingSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingSuggestionRequest>).typeName = "aiserver.v1.ApplyFullSelfDrivingSuggestionRequest";
(ApplyFullSelfDrivingSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingSuggestionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "head_commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ApplyFullSelfDrivingSuggestionResponse$Runtime = (() => class _ApplyFullSelfDrivingSuggestionResponse extends Message<_ApplyFullSelfDrivingSuggestionResponse> {
  declare newPrHeadSha: string;
  constructor(data?: PartialMessage<_ApplyFullSelfDrivingSuggestionResponse>) {
    super();
    this.newPrHeadSha = "";
    proto3.util.initPartial(data, this as _ApplyFullSelfDrivingSuggestionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyFullSelfDrivingSuggestionResponse {
    return new _ApplyFullSelfDrivingSuggestionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingSuggestionResponse {
    return new _ApplyFullSelfDrivingSuggestionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingSuggestionResponse {
    return new _ApplyFullSelfDrivingSuggestionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyFullSelfDrivingSuggestionResponse | PlainMessage<_ApplyFullSelfDrivingSuggestionResponse> | undefined | null, b2: _ApplyFullSelfDrivingSuggestionResponse | PlainMessage<_ApplyFullSelfDrivingSuggestionResponse> | undefined | null): boolean {
    return proto3.util.equals(_ApplyFullSelfDrivingSuggestionResponse as unknown as MessageType<_ApplyFullSelfDrivingSuggestionResponse>, a, b2);
  }
})();
export type ApplyFullSelfDrivingSuggestionResponse = InstanceType<typeof ApplyFullSelfDrivingSuggestionResponse$Runtime>;
var ApplyFullSelfDrivingSuggestionResponse: MessageType<ApplyFullSelfDrivingSuggestionResponse> = ApplyFullSelfDrivingSuggestionResponse$Runtime as unknown as MessageType<ApplyFullSelfDrivingSuggestionResponse>;
(ApplyFullSelfDrivingSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingSuggestionResponse>).runtime = proto3;
(ApplyFullSelfDrivingSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingSuggestionResponse>).typeName = "aiserver.v1.ApplyFullSelfDrivingSuggestionResponse";
(ApplyFullSelfDrivingSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingSuggestionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "new_pr_head_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateFullSelfDrivingFindingStatusRequest$Runtime = (() => class _UpdateFullSelfDrivingFindingStatusRequest extends Message<_UpdateFullSelfDrivingFindingStatusRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare status: string;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingFindingStatusRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    this.status = "";
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingFindingStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingFindingStatusRequest {
    return new _UpdateFullSelfDrivingFindingStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingFindingStatusRequest {
    return new _UpdateFullSelfDrivingFindingStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingFindingStatusRequest {
    return new _UpdateFullSelfDrivingFindingStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingFindingStatusRequest | PlainMessage<_UpdateFullSelfDrivingFindingStatusRequest> | undefined | null, b2: _UpdateFullSelfDrivingFindingStatusRequest | PlainMessage<_UpdateFullSelfDrivingFindingStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingFindingStatusRequest as unknown as MessageType<_UpdateFullSelfDrivingFindingStatusRequest>, a, b2);
  }
})();
export type UpdateFullSelfDrivingFindingStatusRequest = InstanceType<typeof UpdateFullSelfDrivingFindingStatusRequest$Runtime>;
var UpdateFullSelfDrivingFindingStatusRequest: MessageType<UpdateFullSelfDrivingFindingStatusRequest> = UpdateFullSelfDrivingFindingStatusRequest$Runtime as unknown as MessageType<UpdateFullSelfDrivingFindingStatusRequest>;
(UpdateFullSelfDrivingFindingStatusRequest as MutableMessageType<UpdateFullSelfDrivingFindingStatusRequest>).runtime = proto3;
(UpdateFullSelfDrivingFindingStatusRequest as MutableMessageType<UpdateFullSelfDrivingFindingStatusRequest>).typeName = "aiserver.v1.UpdateFullSelfDrivingFindingStatusRequest";
(UpdateFullSelfDrivingFindingStatusRequest as MutableMessageType<UpdateFullSelfDrivingFindingStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateFullSelfDrivingFindingStatusResponse$Runtime = (() => class _UpdateFullSelfDrivingFindingStatusResponse extends Message<_UpdateFullSelfDrivingFindingStatusResponse> {
  declare finding?: FullSelfDrivingFinding;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingFindingStatusResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingFindingStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingFindingStatusResponse {
    return new _UpdateFullSelfDrivingFindingStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingFindingStatusResponse {
    return new _UpdateFullSelfDrivingFindingStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingFindingStatusResponse {
    return new _UpdateFullSelfDrivingFindingStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingFindingStatusResponse | PlainMessage<_UpdateFullSelfDrivingFindingStatusResponse> | undefined | null, b2: _UpdateFullSelfDrivingFindingStatusResponse | PlainMessage<_UpdateFullSelfDrivingFindingStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingFindingStatusResponse as unknown as MessageType<_UpdateFullSelfDrivingFindingStatusResponse>, a, b2);
  }
})();
export type UpdateFullSelfDrivingFindingStatusResponse = InstanceType<typeof UpdateFullSelfDrivingFindingStatusResponse$Runtime>;
var UpdateFullSelfDrivingFindingStatusResponse: MessageType<UpdateFullSelfDrivingFindingStatusResponse> = UpdateFullSelfDrivingFindingStatusResponse$Runtime as unknown as MessageType<UpdateFullSelfDrivingFindingStatusResponse>;
(UpdateFullSelfDrivingFindingStatusResponse as MutableMessageType<UpdateFullSelfDrivingFindingStatusResponse>).runtime = proto3;
(UpdateFullSelfDrivingFindingStatusResponse as MutableMessageType<UpdateFullSelfDrivingFindingStatusResponse>).typeName = "aiserver.v1.UpdateFullSelfDrivingFindingStatusResponse";
(UpdateFullSelfDrivingFindingStatusResponse as MutableMessageType<UpdateFullSelfDrivingFindingStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding }
]);
var RunFullSelfDrivingWorkflowSuggestionRequest$Runtime = (() => class _RunFullSelfDrivingWorkflowSuggestionRequest extends Message<_RunFullSelfDrivingWorkflowSuggestionRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare stableKey: string;
  declare eventId: string;
  constructor(data?: PartialMessage<_RunFullSelfDrivingWorkflowSuggestionRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.stableKey = "";
    this.eventId = "";
    proto3.util.initPartial(data, this as _RunFullSelfDrivingWorkflowSuggestionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunFullSelfDrivingWorkflowSuggestionRequest {
    return new _RunFullSelfDrivingWorkflowSuggestionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingWorkflowSuggestionRequest {
    return new _RunFullSelfDrivingWorkflowSuggestionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingWorkflowSuggestionRequest {
    return new _RunFullSelfDrivingWorkflowSuggestionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RunFullSelfDrivingWorkflowSuggestionRequest | PlainMessage<_RunFullSelfDrivingWorkflowSuggestionRequest> | undefined | null, b2: _RunFullSelfDrivingWorkflowSuggestionRequest | PlainMessage<_RunFullSelfDrivingWorkflowSuggestionRequest> | undefined | null): boolean {
    return proto3.util.equals(_RunFullSelfDrivingWorkflowSuggestionRequest as unknown as MessageType<_RunFullSelfDrivingWorkflowSuggestionRequest>, a, b2);
  }
})();
export type RunFullSelfDrivingWorkflowSuggestionRequest = InstanceType<typeof RunFullSelfDrivingWorkflowSuggestionRequest$Runtime>;
var RunFullSelfDrivingWorkflowSuggestionRequest: MessageType<RunFullSelfDrivingWorkflowSuggestionRequest> = RunFullSelfDrivingWorkflowSuggestionRequest$Runtime as unknown as MessageType<RunFullSelfDrivingWorkflowSuggestionRequest>;
(RunFullSelfDrivingWorkflowSuggestionRequest as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionRequest>).runtime = proto3;
(RunFullSelfDrivingWorkflowSuggestionRequest as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionRequest>).typeName = "aiserver.v1.RunFullSelfDrivingWorkflowSuggestionRequest";
(RunFullSelfDrivingWorkflowSuggestionRequest as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RunFullSelfDrivingWorkflowSuggestionResponse$Runtime = (() => class _RunFullSelfDrivingWorkflowSuggestionResponse extends Message<_RunFullSelfDrivingWorkflowSuggestionResponse> {
  declare bcId: string;
  declare spawnedNewRun: boolean;
  constructor(data?: PartialMessage<_RunFullSelfDrivingWorkflowSuggestionResponse>) {
    super();
    this.bcId = "";
    this.spawnedNewRun = false;
    proto3.util.initPartial(data, this as _RunFullSelfDrivingWorkflowSuggestionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunFullSelfDrivingWorkflowSuggestionResponse {
    return new _RunFullSelfDrivingWorkflowSuggestionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingWorkflowSuggestionResponse {
    return new _RunFullSelfDrivingWorkflowSuggestionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingWorkflowSuggestionResponse {
    return new _RunFullSelfDrivingWorkflowSuggestionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RunFullSelfDrivingWorkflowSuggestionResponse | PlainMessage<_RunFullSelfDrivingWorkflowSuggestionResponse> | undefined | null, b2: _RunFullSelfDrivingWorkflowSuggestionResponse | PlainMessage<_RunFullSelfDrivingWorkflowSuggestionResponse> | undefined | null): boolean {
    return proto3.util.equals(_RunFullSelfDrivingWorkflowSuggestionResponse as unknown as MessageType<_RunFullSelfDrivingWorkflowSuggestionResponse>, a, b2);
  }
})();
export type RunFullSelfDrivingWorkflowSuggestionResponse = InstanceType<typeof RunFullSelfDrivingWorkflowSuggestionResponse$Runtime>;
var RunFullSelfDrivingWorkflowSuggestionResponse: MessageType<RunFullSelfDrivingWorkflowSuggestionResponse> = RunFullSelfDrivingWorkflowSuggestionResponse$Runtime as unknown as MessageType<RunFullSelfDrivingWorkflowSuggestionResponse>;
(RunFullSelfDrivingWorkflowSuggestionResponse as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionResponse>).runtime = proto3;
(RunFullSelfDrivingWorkflowSuggestionResponse as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionResponse>).typeName = "aiserver.v1.RunFullSelfDrivingWorkflowSuggestionResponse";
(RunFullSelfDrivingWorkflowSuggestionResponse as MutableMessageType<RunFullSelfDrivingWorkflowSuggestionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "spawned_new_run",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BuildFullSelfDrivingTriageContextRequest$Runtime = (() => class _BuildFullSelfDrivingTriageContextRequest extends Message<_BuildFullSelfDrivingTriageContextRequest> {
  declare prUrl: string;
  declare triggerDescription: string;
  declare eventName?: string;
  declare mode: FullSelfDrivingMode;
  declare bcId?: string;
  declare fetchCiLogExcerpts: boolean;
  constructor(data?: PartialMessage<_BuildFullSelfDrivingTriageContextRequest>) {
    super();
    this.prUrl = "";
    this.triggerDescription = "";
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    this.fetchCiLogExcerpts = false;
    proto3.util.initPartial(data, this as _BuildFullSelfDrivingTriageContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuildFullSelfDrivingTriageContextRequest {
    return new _BuildFullSelfDrivingTriageContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuildFullSelfDrivingTriageContextRequest {
    return new _BuildFullSelfDrivingTriageContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuildFullSelfDrivingTriageContextRequest {
    return new _BuildFullSelfDrivingTriageContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _BuildFullSelfDrivingTriageContextRequest | PlainMessage<_BuildFullSelfDrivingTriageContextRequest> | undefined | null, b2: _BuildFullSelfDrivingTriageContextRequest | PlainMessage<_BuildFullSelfDrivingTriageContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_BuildFullSelfDrivingTriageContextRequest as unknown as MessageType<_BuildFullSelfDrivingTriageContextRequest>, a, b2);
  }
})();
export type BuildFullSelfDrivingTriageContextRequest = InstanceType<typeof BuildFullSelfDrivingTriageContextRequest$Runtime>;
var BuildFullSelfDrivingTriageContextRequest: MessageType<BuildFullSelfDrivingTriageContextRequest> = BuildFullSelfDrivingTriageContextRequest$Runtime as unknown as MessageType<BuildFullSelfDrivingTriageContextRequest>;
(BuildFullSelfDrivingTriageContextRequest as MutableMessageType<BuildFullSelfDrivingTriageContextRequest>).runtime = proto3;
(BuildFullSelfDrivingTriageContextRequest as MutableMessageType<BuildFullSelfDrivingTriageContextRequest>).typeName = "aiserver.v1.BuildFullSelfDrivingTriageContextRequest";
(BuildFullSelfDrivingTriageContextRequest as MutableMessageType<BuildFullSelfDrivingTriageContextRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "trigger_description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "event_name", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  { no: 5, name: "bc_id", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "fetch_ci_log_excerpts",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BuildFullSelfDrivingTriageContextResponse$Runtime = (() => class _BuildFullSelfDrivingTriageContextResponse extends Message<_BuildFullSelfDrivingTriageContextResponse> {
  declare triageJson: string;
  constructor(data?: PartialMessage<_BuildFullSelfDrivingTriageContextResponse>) {
    super();
    this.triageJson = "";
    proto3.util.initPartial(data, this as _BuildFullSelfDrivingTriageContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuildFullSelfDrivingTriageContextResponse {
    return new _BuildFullSelfDrivingTriageContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuildFullSelfDrivingTriageContextResponse {
    return new _BuildFullSelfDrivingTriageContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuildFullSelfDrivingTriageContextResponse {
    return new _BuildFullSelfDrivingTriageContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _BuildFullSelfDrivingTriageContextResponse | PlainMessage<_BuildFullSelfDrivingTriageContextResponse> | undefined | null, b2: _BuildFullSelfDrivingTriageContextResponse | PlainMessage<_BuildFullSelfDrivingTriageContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_BuildFullSelfDrivingTriageContextResponse as unknown as MessageType<_BuildFullSelfDrivingTriageContextResponse>, a, b2);
  }
})();
export type BuildFullSelfDrivingTriageContextResponse = InstanceType<typeof BuildFullSelfDrivingTriageContextResponse$Runtime>;
var BuildFullSelfDrivingTriageContextResponse: MessageType<BuildFullSelfDrivingTriageContextResponse> = BuildFullSelfDrivingTriageContextResponse$Runtime as unknown as MessageType<BuildFullSelfDrivingTriageContextResponse>;
(BuildFullSelfDrivingTriageContextResponse as MutableMessageType<BuildFullSelfDrivingTriageContextResponse>).runtime = proto3;
(BuildFullSelfDrivingTriageContextResponse as MutableMessageType<BuildFullSelfDrivingTriageContextResponse>).typeName = "aiserver.v1.BuildFullSelfDrivingTriageContextResponse";
(BuildFullSelfDrivingTriageContextResponse as MutableMessageType<BuildFullSelfDrivingTriageContextResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "triage_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrepareLocalFullSelfDrivingRunRequest$Runtime = (() => class _PrepareLocalFullSelfDrivingRunRequest extends Message<_PrepareLocalFullSelfDrivingRunRequest> {
  declare prUrl: string;
  declare mode: FullSelfDrivingMode;
  declare triggerDescription?: string;
  declare modelId?: string;
  constructor(data?: PartialMessage<_PrepareLocalFullSelfDrivingRunRequest>) {
    super();
    this.prUrl = "";
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _PrepareLocalFullSelfDrivingRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrepareLocalFullSelfDrivingRunRequest {
    return new _PrepareLocalFullSelfDrivingRunRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrepareLocalFullSelfDrivingRunRequest {
    return new _PrepareLocalFullSelfDrivingRunRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrepareLocalFullSelfDrivingRunRequest {
    return new _PrepareLocalFullSelfDrivingRunRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _PrepareLocalFullSelfDrivingRunRequest | PlainMessage<_PrepareLocalFullSelfDrivingRunRequest> | undefined | null, b2: _PrepareLocalFullSelfDrivingRunRequest | PlainMessage<_PrepareLocalFullSelfDrivingRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_PrepareLocalFullSelfDrivingRunRequest as unknown as MessageType<_PrepareLocalFullSelfDrivingRunRequest>, a, b2);
  }
})();
export type PrepareLocalFullSelfDrivingRunRequest = InstanceType<typeof PrepareLocalFullSelfDrivingRunRequest$Runtime>;
var PrepareLocalFullSelfDrivingRunRequest: MessageType<PrepareLocalFullSelfDrivingRunRequest> = PrepareLocalFullSelfDrivingRunRequest$Runtime as unknown as MessageType<PrepareLocalFullSelfDrivingRunRequest>;
(PrepareLocalFullSelfDrivingRunRequest as MutableMessageType<PrepareLocalFullSelfDrivingRunRequest>).runtime = proto3;
(PrepareLocalFullSelfDrivingRunRequest as MutableMessageType<PrepareLocalFullSelfDrivingRunRequest>).typeName = "aiserver.v1.PrepareLocalFullSelfDrivingRunRequest";
(PrepareLocalFullSelfDrivingRunRequest as MutableMessageType<PrepareLocalFullSelfDrivingRunRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  { no: 3, name: "trigger_description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "model_id", kind: "scalar", T: 9, opt: true }
]);
var PrepareLocalFullSelfDrivingRunResponse$Runtime = (() => class _PrepareLocalFullSelfDrivingRunResponse extends Message<_PrepareLocalFullSelfDrivingRunResponse> {
  declare localRunId: string;
  declare prompt: string;
  declare triageContextJson: string;
  declare mode: FullSelfDrivingMode;
  declare modelId: string;
  declare skillIds: string[];
  declare skills: AgentSkill[];
  constructor(data?: PartialMessage<_PrepareLocalFullSelfDrivingRunResponse>) {
    super();
    this.localRunId = "";
    this.prompt = "";
    this.triageContextJson = "";
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    this.modelId = "";
    this.skillIds = [];
    this.skills = [];
    proto3.util.initPartial(data, this as _PrepareLocalFullSelfDrivingRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrepareLocalFullSelfDrivingRunResponse {
    return new _PrepareLocalFullSelfDrivingRunResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrepareLocalFullSelfDrivingRunResponse {
    return new _PrepareLocalFullSelfDrivingRunResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrepareLocalFullSelfDrivingRunResponse {
    return new _PrepareLocalFullSelfDrivingRunResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PrepareLocalFullSelfDrivingRunResponse | PlainMessage<_PrepareLocalFullSelfDrivingRunResponse> | undefined | null, b2: _PrepareLocalFullSelfDrivingRunResponse | PlainMessage<_PrepareLocalFullSelfDrivingRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_PrepareLocalFullSelfDrivingRunResponse as unknown as MessageType<_PrepareLocalFullSelfDrivingRunResponse>, a, b2);
  }
})();
export type PrepareLocalFullSelfDrivingRunResponse = InstanceType<typeof PrepareLocalFullSelfDrivingRunResponse$Runtime>;
var PrepareLocalFullSelfDrivingRunResponse: MessageType<PrepareLocalFullSelfDrivingRunResponse> = PrepareLocalFullSelfDrivingRunResponse$Runtime as unknown as MessageType<PrepareLocalFullSelfDrivingRunResponse>;
(PrepareLocalFullSelfDrivingRunResponse as MutableMessageType<PrepareLocalFullSelfDrivingRunResponse>).runtime = proto3;
(PrepareLocalFullSelfDrivingRunResponse as MutableMessageType<PrepareLocalFullSelfDrivingRunResponse>).typeName = "aiserver.v1.PrepareLocalFullSelfDrivingRunResponse";
(PrepareLocalFullSelfDrivingRunResponse as MutableMessageType<PrepareLocalFullSelfDrivingRunResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "local_run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "triage_context_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  {
    no: 5,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "skill_ids", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "skills", kind: "message", T: AgentSkill, repeated: true }
]);
var RunFullSelfDrivingCloudCommandRequest$Runtime = (() => class _RunFullSelfDrivingCloudCommandRequest extends Message<_RunFullSelfDrivingCloudCommandRequest> {
  declare prUrl: string;
  declare mode: FullSelfDrivingMode;
  declare userInstructions?: string;
  declare triggerDescription?: string;
  declare modelId?: string;
  constructor(data?: PartialMessage<_RunFullSelfDrivingCloudCommandRequest>) {
    super();
    this.prUrl = "";
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RunFullSelfDrivingCloudCommandRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunFullSelfDrivingCloudCommandRequest {
    return new _RunFullSelfDrivingCloudCommandRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingCloudCommandRequest {
    return new _RunFullSelfDrivingCloudCommandRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingCloudCommandRequest {
    return new _RunFullSelfDrivingCloudCommandRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RunFullSelfDrivingCloudCommandRequest | PlainMessage<_RunFullSelfDrivingCloudCommandRequest> | undefined | null, b2: _RunFullSelfDrivingCloudCommandRequest | PlainMessage<_RunFullSelfDrivingCloudCommandRequest> | undefined | null): boolean {
    return proto3.util.equals(_RunFullSelfDrivingCloudCommandRequest as unknown as MessageType<_RunFullSelfDrivingCloudCommandRequest>, a, b2);
  }
})();
export type RunFullSelfDrivingCloudCommandRequest = InstanceType<typeof RunFullSelfDrivingCloudCommandRequest$Runtime>;
var RunFullSelfDrivingCloudCommandRequest: MessageType<RunFullSelfDrivingCloudCommandRequest> = RunFullSelfDrivingCloudCommandRequest$Runtime as unknown as MessageType<RunFullSelfDrivingCloudCommandRequest>;
(RunFullSelfDrivingCloudCommandRequest as MutableMessageType<RunFullSelfDrivingCloudCommandRequest>).runtime = proto3;
(RunFullSelfDrivingCloudCommandRequest as MutableMessageType<RunFullSelfDrivingCloudCommandRequest>).typeName = "aiserver.v1.RunFullSelfDrivingCloudCommandRequest";
(RunFullSelfDrivingCloudCommandRequest as MutableMessageType<RunFullSelfDrivingCloudCommandRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  { no: 3, name: "user_instructions", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "trigger_description", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true }
]);
var RunFullSelfDrivingCloudCommandResponse$Runtime = (() => class _RunFullSelfDrivingCloudCommandResponse extends Message<_RunFullSelfDrivingCloudCommandResponse> {
  declare bcId: string;
  declare action: FullSelfDrivingCloudCommandAction;
  declare mode: FullSelfDrivingMode;
  constructor(data?: PartialMessage<_RunFullSelfDrivingCloudCommandResponse>) {
    super();
    this.bcId = "";
    this.action = FullSelfDrivingCloudCommandAction.UNSPECIFIED;
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RunFullSelfDrivingCloudCommandResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunFullSelfDrivingCloudCommandResponse {
    return new _RunFullSelfDrivingCloudCommandResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingCloudCommandResponse {
    return new _RunFullSelfDrivingCloudCommandResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunFullSelfDrivingCloudCommandResponse {
    return new _RunFullSelfDrivingCloudCommandResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RunFullSelfDrivingCloudCommandResponse | PlainMessage<_RunFullSelfDrivingCloudCommandResponse> | undefined | null, b2: _RunFullSelfDrivingCloudCommandResponse | PlainMessage<_RunFullSelfDrivingCloudCommandResponse> | undefined | null): boolean {
    return proto3.util.equals(_RunFullSelfDrivingCloudCommandResponse as unknown as MessageType<_RunFullSelfDrivingCloudCommandResponse>, a, b2);
  }
})();
export type RunFullSelfDrivingCloudCommandResponse = InstanceType<typeof RunFullSelfDrivingCloudCommandResponse$Runtime>;
var RunFullSelfDrivingCloudCommandResponse: MessageType<RunFullSelfDrivingCloudCommandResponse> = RunFullSelfDrivingCloudCommandResponse$Runtime as unknown as MessageType<RunFullSelfDrivingCloudCommandResponse>;
(RunFullSelfDrivingCloudCommandResponse as MutableMessageType<RunFullSelfDrivingCloudCommandResponse>).runtime = proto3;
(RunFullSelfDrivingCloudCommandResponse as MutableMessageType<RunFullSelfDrivingCloudCommandResponse>).typeName = "aiserver.v1.RunFullSelfDrivingCloudCommandResponse";
(RunFullSelfDrivingCloudCommandResponse as MutableMessageType<RunFullSelfDrivingCloudCommandResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "action", kind: "enum", T: proto3.getEnumType(FullSelfDrivingCloudCommandAction) },
  { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) }
]);
var EnrollExternalFullSelfDrivingRunRequest$Runtime = (() => class _EnrollExternalFullSelfDrivingRunRequest extends Message<_EnrollExternalFullSelfDrivingRunRequest> {
  declare prUrl: string;
  declare bcId: string;
  declare mode: FullSelfDrivingMode;
  declare enableConfig: boolean;
  constructor(data?: PartialMessage<_EnrollExternalFullSelfDrivingRunRequest>) {
    super();
    this.prUrl = "";
    this.bcId = "";
    this.mode = FullSelfDrivingMode.UNSPECIFIED;
    this.enableConfig = false;
    proto3.util.initPartial(data, this as _EnrollExternalFullSelfDrivingRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnrollExternalFullSelfDrivingRunRequest {
    return new _EnrollExternalFullSelfDrivingRunRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnrollExternalFullSelfDrivingRunRequest {
    return new _EnrollExternalFullSelfDrivingRunRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnrollExternalFullSelfDrivingRunRequest {
    return new _EnrollExternalFullSelfDrivingRunRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _EnrollExternalFullSelfDrivingRunRequest | PlainMessage<_EnrollExternalFullSelfDrivingRunRequest> | undefined | null, b2: _EnrollExternalFullSelfDrivingRunRequest | PlainMessage<_EnrollExternalFullSelfDrivingRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_EnrollExternalFullSelfDrivingRunRequest as unknown as MessageType<_EnrollExternalFullSelfDrivingRunRequest>, a, b2);
  }
})();
export type EnrollExternalFullSelfDrivingRunRequest = InstanceType<typeof EnrollExternalFullSelfDrivingRunRequest$Runtime>;
var EnrollExternalFullSelfDrivingRunRequest: MessageType<EnrollExternalFullSelfDrivingRunRequest> = EnrollExternalFullSelfDrivingRunRequest$Runtime as unknown as MessageType<EnrollExternalFullSelfDrivingRunRequest>;
(EnrollExternalFullSelfDrivingRunRequest as MutableMessageType<EnrollExternalFullSelfDrivingRunRequest>).runtime = proto3;
(EnrollExternalFullSelfDrivingRunRequest as MutableMessageType<EnrollExternalFullSelfDrivingRunRequest>).typeName = "aiserver.v1.EnrollExternalFullSelfDrivingRunRequest";
(EnrollExternalFullSelfDrivingRunRequest as MutableMessageType<EnrollExternalFullSelfDrivingRunRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "mode", kind: "enum", T: proto3.getEnumType(FullSelfDrivingMode) },
  {
    no: 4,
    name: "enable_config",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var EnrollExternalFullSelfDrivingRunResponse$Runtime = (() => class _EnrollExternalFullSelfDrivingRunResponse extends Message<_EnrollExternalFullSelfDrivingRunResponse> {
  declare enrolled: boolean;
  constructor(data?: PartialMessage<_EnrollExternalFullSelfDrivingRunResponse>) {
    super();
    this.enrolled = false;
    proto3.util.initPartial(data, this as _EnrollExternalFullSelfDrivingRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnrollExternalFullSelfDrivingRunResponse {
    return new _EnrollExternalFullSelfDrivingRunResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnrollExternalFullSelfDrivingRunResponse {
    return new _EnrollExternalFullSelfDrivingRunResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnrollExternalFullSelfDrivingRunResponse {
    return new _EnrollExternalFullSelfDrivingRunResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _EnrollExternalFullSelfDrivingRunResponse | PlainMessage<_EnrollExternalFullSelfDrivingRunResponse> | undefined | null, b2: _EnrollExternalFullSelfDrivingRunResponse | PlainMessage<_EnrollExternalFullSelfDrivingRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_EnrollExternalFullSelfDrivingRunResponse as unknown as MessageType<_EnrollExternalFullSelfDrivingRunResponse>, a, b2);
  }
})();
export type EnrollExternalFullSelfDrivingRunResponse = InstanceType<typeof EnrollExternalFullSelfDrivingRunResponse$Runtime>;
var EnrollExternalFullSelfDrivingRunResponse: MessageType<EnrollExternalFullSelfDrivingRunResponse> = EnrollExternalFullSelfDrivingRunResponse$Runtime as unknown as MessageType<EnrollExternalFullSelfDrivingRunResponse>;
(EnrollExternalFullSelfDrivingRunResponse as MutableMessageType<EnrollExternalFullSelfDrivingRunResponse>).runtime = proto3;
(EnrollExternalFullSelfDrivingRunResponse as MutableMessageType<EnrollExternalFullSelfDrivingRunResponse>).typeName = "aiserver.v1.EnrollExternalFullSelfDrivingRunResponse";
(EnrollExternalFullSelfDrivingRunResponse as MutableMessageType<EnrollExternalFullSelfDrivingRunResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "enrolled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var FullSelfDrivingPrScopedSuggestion$Runtime = (() => class _FullSelfDrivingPrScopedSuggestion extends Message<_FullSelfDrivingPrScopedSuggestion> {
  declare finding?: FullSelfDrivingFinding;
  declare producer: string;
  declare producerRunId: string;
  declare createdByUserId: bigint;
  declare createdByTeamId?: bigint;
  constructor(data?: PartialMessage<_FullSelfDrivingPrScopedSuggestion>) {
    super();
    this.producer = "";
    this.producerRunId = "";
    this.createdByUserId = protoInt64.zero;
    proto3.util.initPartial(data, this as _FullSelfDrivingPrScopedSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingPrScopedSuggestion {
    return new _FullSelfDrivingPrScopedSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingPrScopedSuggestion {
    return new _FullSelfDrivingPrScopedSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingPrScopedSuggestion {
    return new _FullSelfDrivingPrScopedSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingPrScopedSuggestion | PlainMessage<_FullSelfDrivingPrScopedSuggestion> | undefined | null, b2: _FullSelfDrivingPrScopedSuggestion | PlainMessage<_FullSelfDrivingPrScopedSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingPrScopedSuggestion as unknown as MessageType<_FullSelfDrivingPrScopedSuggestion>, a, b2);
  }
})();
export type FullSelfDrivingPrScopedSuggestion = InstanceType<typeof FullSelfDrivingPrScopedSuggestion$Runtime>;
var FullSelfDrivingPrScopedSuggestion: MessageType<FullSelfDrivingPrScopedSuggestion> = FullSelfDrivingPrScopedSuggestion$Runtime as unknown as MessageType<FullSelfDrivingPrScopedSuggestion>;
(FullSelfDrivingPrScopedSuggestion as MutableMessageType<FullSelfDrivingPrScopedSuggestion>).runtime = proto3;
(FullSelfDrivingPrScopedSuggestion as MutableMessageType<FullSelfDrivingPrScopedSuggestion>).typeName = "aiserver.v1.FullSelfDrivingPrScopedSuggestion";
(FullSelfDrivingPrScopedSuggestion as MutableMessageType<FullSelfDrivingPrScopedSuggestion>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "finding", kind: "message", T: FullSelfDrivingFinding },
  {
    no: 2,
    name: "producer",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "producer_run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "created_by_user_id",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 5, name: "created_by_team_id", kind: "scalar", T: 3, opt: true }
]);
var RecordFullSelfDrivingPrScopedSuggestionRequest$Runtime = (() => class _RecordFullSelfDrivingPrScopedSuggestionRequest extends Message<_RecordFullSelfDrivingPrScopedSuggestionRequest> {
  declare prUrl: string;
  declare producer: string;
  declare producerRunId: string;
  declare output?: FullSelfDrivingOutputInput;
  constructor(data?: PartialMessage<_RecordFullSelfDrivingPrScopedSuggestionRequest>) {
    super();
    this.prUrl = "";
    this.producer = "";
    this.producerRunId = "";
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingPrScopedSuggestionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionRequest {
    return new _RecordFullSelfDrivingPrScopedSuggestionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionRequest {
    return new _RecordFullSelfDrivingPrScopedSuggestionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionRequest {
    return new _RecordFullSelfDrivingPrScopedSuggestionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingPrScopedSuggestionRequest | PlainMessage<_RecordFullSelfDrivingPrScopedSuggestionRequest> | undefined | null, b2: _RecordFullSelfDrivingPrScopedSuggestionRequest | PlainMessage<_RecordFullSelfDrivingPrScopedSuggestionRequest> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingPrScopedSuggestionRequest as unknown as MessageType<_RecordFullSelfDrivingPrScopedSuggestionRequest>, a, b2);
  }
})();
export type RecordFullSelfDrivingPrScopedSuggestionRequest = InstanceType<typeof RecordFullSelfDrivingPrScopedSuggestionRequest$Runtime>;
var RecordFullSelfDrivingPrScopedSuggestionRequest: MessageType<RecordFullSelfDrivingPrScopedSuggestionRequest> = RecordFullSelfDrivingPrScopedSuggestionRequest$Runtime as unknown as MessageType<RecordFullSelfDrivingPrScopedSuggestionRequest>;
(RecordFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionRequest>).runtime = proto3;
(RecordFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionRequest>).typeName = "aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionRequest";
(RecordFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "producer",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "producer_run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "output", kind: "message", T: FullSelfDrivingOutputInput }
]);
var RecordFullSelfDrivingPrScopedSuggestionResponse$Runtime = (() => class _RecordFullSelfDrivingPrScopedSuggestionResponse extends Message<_RecordFullSelfDrivingPrScopedSuggestionResponse> {
  declare suggestion?: FullSelfDrivingPrScopedSuggestion;
  constructor(data?: PartialMessage<_RecordFullSelfDrivingPrScopedSuggestionResponse>) {
    super();
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingPrScopedSuggestionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionResponse {
    return new _RecordFullSelfDrivingPrScopedSuggestionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionResponse {
    return new _RecordFullSelfDrivingPrScopedSuggestionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingPrScopedSuggestionResponse {
    return new _RecordFullSelfDrivingPrScopedSuggestionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingPrScopedSuggestionResponse | PlainMessage<_RecordFullSelfDrivingPrScopedSuggestionResponse> | undefined | null, b2: _RecordFullSelfDrivingPrScopedSuggestionResponse | PlainMessage<_RecordFullSelfDrivingPrScopedSuggestionResponse> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingPrScopedSuggestionResponse as unknown as MessageType<_RecordFullSelfDrivingPrScopedSuggestionResponse>, a, b2);
  }
})();
export type RecordFullSelfDrivingPrScopedSuggestionResponse = InstanceType<typeof RecordFullSelfDrivingPrScopedSuggestionResponse$Runtime>;
var RecordFullSelfDrivingPrScopedSuggestionResponse: MessageType<RecordFullSelfDrivingPrScopedSuggestionResponse> = RecordFullSelfDrivingPrScopedSuggestionResponse$Runtime as unknown as MessageType<RecordFullSelfDrivingPrScopedSuggestionResponse>;
(RecordFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionResponse>).runtime = proto3;
(RecordFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionResponse>).typeName = "aiserver.v1.RecordFullSelfDrivingPrScopedSuggestionResponse";
(RecordFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<RecordFullSelfDrivingPrScopedSuggestionResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestion", kind: "message", T: FullSelfDrivingPrScopedSuggestion }
]);
var ListFullSelfDrivingPrScopedSuggestionsRequest$Runtime = (() => class _ListFullSelfDrivingPrScopedSuggestionsRequest extends Message<_ListFullSelfDrivingPrScopedSuggestionsRequest> {
  declare prUrl: string;
  declare limit?: number;
  declare includeSuperseded: boolean;
  declare kinds: string[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingPrScopedSuggestionsRequest>) {
    super();
    this.prUrl = "";
    this.includeSuperseded = false;
    this.kinds = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingPrScopedSuggestionsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsRequest {
    return new _ListFullSelfDrivingPrScopedSuggestionsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsRequest {
    return new _ListFullSelfDrivingPrScopedSuggestionsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsRequest {
    return new _ListFullSelfDrivingPrScopedSuggestionsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingPrScopedSuggestionsRequest | PlainMessage<_ListFullSelfDrivingPrScopedSuggestionsRequest> | undefined | null, b2: _ListFullSelfDrivingPrScopedSuggestionsRequest | PlainMessage<_ListFullSelfDrivingPrScopedSuggestionsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingPrScopedSuggestionsRequest as unknown as MessageType<_ListFullSelfDrivingPrScopedSuggestionsRequest>, a, b2);
  }
})();
export type ListFullSelfDrivingPrScopedSuggestionsRequest = InstanceType<typeof ListFullSelfDrivingPrScopedSuggestionsRequest$Runtime>;
var ListFullSelfDrivingPrScopedSuggestionsRequest: MessageType<ListFullSelfDrivingPrScopedSuggestionsRequest> = ListFullSelfDrivingPrScopedSuggestionsRequest$Runtime as unknown as MessageType<ListFullSelfDrivingPrScopedSuggestionsRequest>;
(ListFullSelfDrivingPrScopedSuggestionsRequest as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsRequest>).runtime = proto3;
(ListFullSelfDrivingPrScopedSuggestionsRequest as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsRequest>).typeName = "aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsRequest";
(ListFullSelfDrivingPrScopedSuggestionsRequest as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true },
  {
    no: 3,
    name: "include_superseded",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "kinds", kind: "scalar", T: 9, repeated: true }
]);
var ListFullSelfDrivingPrScopedSuggestionsResponse$Runtime = (() => class _ListFullSelfDrivingPrScopedSuggestionsResponse extends Message<_ListFullSelfDrivingPrScopedSuggestionsResponse> {
  declare suggestions: FullSelfDrivingPrScopedSuggestion[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingPrScopedSuggestionsResponse>) {
    super();
    this.suggestions = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingPrScopedSuggestionsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsResponse {
    return new _ListFullSelfDrivingPrScopedSuggestionsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsResponse {
    return new _ListFullSelfDrivingPrScopedSuggestionsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingPrScopedSuggestionsResponse {
    return new _ListFullSelfDrivingPrScopedSuggestionsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingPrScopedSuggestionsResponse | PlainMessage<_ListFullSelfDrivingPrScopedSuggestionsResponse> | undefined | null, b2: _ListFullSelfDrivingPrScopedSuggestionsResponse | PlainMessage<_ListFullSelfDrivingPrScopedSuggestionsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingPrScopedSuggestionsResponse as unknown as MessageType<_ListFullSelfDrivingPrScopedSuggestionsResponse>, a, b2);
  }
})();
export type ListFullSelfDrivingPrScopedSuggestionsResponse = InstanceType<typeof ListFullSelfDrivingPrScopedSuggestionsResponse$Runtime>;
var ListFullSelfDrivingPrScopedSuggestionsResponse: MessageType<ListFullSelfDrivingPrScopedSuggestionsResponse> = ListFullSelfDrivingPrScopedSuggestionsResponse$Runtime as unknown as MessageType<ListFullSelfDrivingPrScopedSuggestionsResponse>;
(ListFullSelfDrivingPrScopedSuggestionsResponse as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsResponse>).runtime = proto3;
(ListFullSelfDrivingPrScopedSuggestionsResponse as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsResponse>).typeName = "aiserver.v1.ListFullSelfDrivingPrScopedSuggestionsResponse";
(ListFullSelfDrivingPrScopedSuggestionsResponse as MutableMessageType<ListFullSelfDrivingPrScopedSuggestionsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestions", kind: "message", T: FullSelfDrivingPrScopedSuggestion, repeated: true }
]);
var UpdateFullSelfDrivingPrScopedSuggestionStatusRequest$Runtime = (() => class _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest extends Message<_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest> {
  declare prUrl: string;
  declare stableKey: string;
  declare status: string;
  declare reason?: string;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>) {
    super();
    this.prUrl = "";
    this.stableKey = "";
    this.status = "";
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest | PlainMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest> | undefined | null, b2: _UpdateFullSelfDrivingPrScopedSuggestionStatusRequest | PlainMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest as unknown as MessageType<_UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>, a, b2);
  }
})();
export type UpdateFullSelfDrivingPrScopedSuggestionStatusRequest = InstanceType<typeof UpdateFullSelfDrivingPrScopedSuggestionStatusRequest$Runtime>;
var UpdateFullSelfDrivingPrScopedSuggestionStatusRequest: MessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusRequest> = UpdateFullSelfDrivingPrScopedSuggestionStatusRequest$Runtime as unknown as MessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>;
(UpdateFullSelfDrivingPrScopedSuggestionStatusRequest as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>).runtime = proto3;
(UpdateFullSelfDrivingPrScopedSuggestionStatusRequest as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>).typeName = "aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusRequest";
(UpdateFullSelfDrivingPrScopedSuggestionStatusRequest as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "stable_key",
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
  },
  { no: 4, name: "reason", kind: "scalar", T: 9, opt: true }
]);
var UpdateFullSelfDrivingPrScopedSuggestionStatusResponse$Runtime = (() => class _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse extends Message<_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse> {
  declare suggestion?: FullSelfDrivingPrScopedSuggestion;
  constructor(data?: PartialMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse {
    return new _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse | PlainMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse> | undefined | null, b2: _UpdateFullSelfDrivingPrScopedSuggestionStatusResponse | PlainMessage<_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse as unknown as MessageType<_UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>, a, b2);
  }
})();
export type UpdateFullSelfDrivingPrScopedSuggestionStatusResponse = InstanceType<typeof UpdateFullSelfDrivingPrScopedSuggestionStatusResponse$Runtime>;
var UpdateFullSelfDrivingPrScopedSuggestionStatusResponse: MessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusResponse> = UpdateFullSelfDrivingPrScopedSuggestionStatusResponse$Runtime as unknown as MessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>;
(UpdateFullSelfDrivingPrScopedSuggestionStatusResponse as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>).runtime = proto3;
(UpdateFullSelfDrivingPrScopedSuggestionStatusResponse as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>).typeName = "aiserver.v1.UpdateFullSelfDrivingPrScopedSuggestionStatusResponse";
(UpdateFullSelfDrivingPrScopedSuggestionStatusResponse as MutableMessageType<UpdateFullSelfDrivingPrScopedSuggestionStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestion", kind: "message", T: FullSelfDrivingPrScopedSuggestion }
]);
var ApplyFullSelfDrivingPrScopedSuggestionRequest$Runtime = (() => class _ApplyFullSelfDrivingPrScopedSuggestionRequest extends Message<_ApplyFullSelfDrivingPrScopedSuggestionRequest> {
  declare prUrl: string;
  declare stableKey: string;
  declare headCommitSha: string;
  declare eventId: string;
  constructor(data?: PartialMessage<_ApplyFullSelfDrivingPrScopedSuggestionRequest>) {
    super();
    this.prUrl = "";
    this.stableKey = "";
    this.headCommitSha = "";
    this.eventId = "";
    proto3.util.initPartial(data, this as _ApplyFullSelfDrivingPrScopedSuggestionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionRequest {
    return new _ApplyFullSelfDrivingPrScopedSuggestionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionRequest {
    return new _ApplyFullSelfDrivingPrScopedSuggestionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionRequest {
    return new _ApplyFullSelfDrivingPrScopedSuggestionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyFullSelfDrivingPrScopedSuggestionRequest | PlainMessage<_ApplyFullSelfDrivingPrScopedSuggestionRequest> | undefined | null, b2: _ApplyFullSelfDrivingPrScopedSuggestionRequest | PlainMessage<_ApplyFullSelfDrivingPrScopedSuggestionRequest> | undefined | null): boolean {
    return proto3.util.equals(_ApplyFullSelfDrivingPrScopedSuggestionRequest as unknown as MessageType<_ApplyFullSelfDrivingPrScopedSuggestionRequest>, a, b2);
  }
})();
export type ApplyFullSelfDrivingPrScopedSuggestionRequest = InstanceType<typeof ApplyFullSelfDrivingPrScopedSuggestionRequest$Runtime>;
var ApplyFullSelfDrivingPrScopedSuggestionRequest: MessageType<ApplyFullSelfDrivingPrScopedSuggestionRequest> = ApplyFullSelfDrivingPrScopedSuggestionRequest$Runtime as unknown as MessageType<ApplyFullSelfDrivingPrScopedSuggestionRequest>;
(ApplyFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionRequest>).runtime = proto3;
(ApplyFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionRequest>).typeName = "aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionRequest";
(ApplyFullSelfDrivingPrScopedSuggestionRequest as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "stable_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "head_commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ApplyFullSelfDrivingPrScopedSuggestionResponse$Runtime = (() => class _ApplyFullSelfDrivingPrScopedSuggestionResponse extends Message<_ApplyFullSelfDrivingPrScopedSuggestionResponse> {
  declare newPrHeadSha: string;
  declare suggestion?: FullSelfDrivingPrScopedSuggestion;
  constructor(data?: PartialMessage<_ApplyFullSelfDrivingPrScopedSuggestionResponse>) {
    super();
    this.newPrHeadSha = "";
    proto3.util.initPartial(data, this as _ApplyFullSelfDrivingPrScopedSuggestionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionResponse {
    return new _ApplyFullSelfDrivingPrScopedSuggestionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionResponse {
    return new _ApplyFullSelfDrivingPrScopedSuggestionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyFullSelfDrivingPrScopedSuggestionResponse {
    return new _ApplyFullSelfDrivingPrScopedSuggestionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyFullSelfDrivingPrScopedSuggestionResponse | PlainMessage<_ApplyFullSelfDrivingPrScopedSuggestionResponse> | undefined | null, b2: _ApplyFullSelfDrivingPrScopedSuggestionResponse | PlainMessage<_ApplyFullSelfDrivingPrScopedSuggestionResponse> | undefined | null): boolean {
    return proto3.util.equals(_ApplyFullSelfDrivingPrScopedSuggestionResponse as unknown as MessageType<_ApplyFullSelfDrivingPrScopedSuggestionResponse>, a, b2);
  }
})();
export type ApplyFullSelfDrivingPrScopedSuggestionResponse = InstanceType<typeof ApplyFullSelfDrivingPrScopedSuggestionResponse$Runtime>;
var ApplyFullSelfDrivingPrScopedSuggestionResponse: MessageType<ApplyFullSelfDrivingPrScopedSuggestionResponse> = ApplyFullSelfDrivingPrScopedSuggestionResponse$Runtime as unknown as MessageType<ApplyFullSelfDrivingPrScopedSuggestionResponse>;
(ApplyFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionResponse>).runtime = proto3;
(ApplyFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionResponse>).typeName = "aiserver.v1.ApplyFullSelfDrivingPrScopedSuggestionResponse";
(ApplyFullSelfDrivingPrScopedSuggestionResponse as MutableMessageType<ApplyFullSelfDrivingPrScopedSuggestionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "new_pr_head_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "suggestion", kind: "message", T: FullSelfDrivingPrScopedSuggestion }
]);
var FullSelfDrivingAutoApplyConfig$Runtime = (() => class _FullSelfDrivingAutoApplyConfig extends Message<_FullSelfDrivingAutoApplyConfig> {
  declare matchKind: string;
  declare matchKey: string;
  declare scope: string;
  declare repoOwner: string;
  declare repoName: string;
  declare createdAt?: Timestamp;
  constructor(data?: PartialMessage<_FullSelfDrivingAutoApplyConfig>) {
    super();
    this.matchKind = "";
    this.matchKey = "";
    this.scope = "";
    this.repoOwner = "";
    this.repoName = "";
    proto3.util.initPartial(data, this as _FullSelfDrivingAutoApplyConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullSelfDrivingAutoApplyConfig {
    return new _FullSelfDrivingAutoApplyConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullSelfDrivingAutoApplyConfig {
    return new _FullSelfDrivingAutoApplyConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullSelfDrivingAutoApplyConfig {
    return new _FullSelfDrivingAutoApplyConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _FullSelfDrivingAutoApplyConfig | PlainMessage<_FullSelfDrivingAutoApplyConfig> | undefined | null, b2: _FullSelfDrivingAutoApplyConfig | PlainMessage<_FullSelfDrivingAutoApplyConfig> | undefined | null): boolean {
    return proto3.util.equals(_FullSelfDrivingAutoApplyConfig as unknown as MessageType<_FullSelfDrivingAutoApplyConfig>, a, b2);
  }
})();
export type FullSelfDrivingAutoApplyConfig = InstanceType<typeof FullSelfDrivingAutoApplyConfig$Runtime>;
var FullSelfDrivingAutoApplyConfig: MessageType<FullSelfDrivingAutoApplyConfig> = FullSelfDrivingAutoApplyConfig$Runtime as unknown as MessageType<FullSelfDrivingAutoApplyConfig>;
(FullSelfDrivingAutoApplyConfig as MutableMessageType<FullSelfDrivingAutoApplyConfig>).runtime = proto3;
(FullSelfDrivingAutoApplyConfig as MutableMessageType<FullSelfDrivingAutoApplyConfig>).typeName = "aiserver.v1.FullSelfDrivingAutoApplyConfig";
(FullSelfDrivingAutoApplyConfig as MutableMessageType<FullSelfDrivingAutoApplyConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "match_kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "match_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "scope",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "created_at", kind: "message", T: Timestamp }
]);
var RecordFullSelfDrivingAutoApplyConfigRequest$Runtime = (() => class _RecordFullSelfDrivingAutoApplyConfigRequest extends Message<_RecordFullSelfDrivingAutoApplyConfigRequest> {
  declare matchKind: string;
  declare matchKey: string;
  declare scope: string;
  declare repoOwner: string;
  declare repoName: string;
  constructor(data?: PartialMessage<_RecordFullSelfDrivingAutoApplyConfigRequest>) {
    super();
    this.matchKind = "";
    this.matchKey = "";
    this.scope = "";
    this.repoOwner = "";
    this.repoName = "";
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingAutoApplyConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingAutoApplyConfigRequest {
    return new _RecordFullSelfDrivingAutoApplyConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingAutoApplyConfigRequest {
    return new _RecordFullSelfDrivingAutoApplyConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingAutoApplyConfigRequest {
    return new _RecordFullSelfDrivingAutoApplyConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingAutoApplyConfigRequest | PlainMessage<_RecordFullSelfDrivingAutoApplyConfigRequest> | undefined | null, b2: _RecordFullSelfDrivingAutoApplyConfigRequest | PlainMessage<_RecordFullSelfDrivingAutoApplyConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingAutoApplyConfigRequest as unknown as MessageType<_RecordFullSelfDrivingAutoApplyConfigRequest>, a, b2);
  }
})();
export type RecordFullSelfDrivingAutoApplyConfigRequest = InstanceType<typeof RecordFullSelfDrivingAutoApplyConfigRequest$Runtime>;
var RecordFullSelfDrivingAutoApplyConfigRequest: MessageType<RecordFullSelfDrivingAutoApplyConfigRequest> = RecordFullSelfDrivingAutoApplyConfigRequest$Runtime as unknown as MessageType<RecordFullSelfDrivingAutoApplyConfigRequest>;
(RecordFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigRequest>).runtime = proto3;
(RecordFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigRequest>).typeName = "aiserver.v1.RecordFullSelfDrivingAutoApplyConfigRequest";
(RecordFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "match_kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "match_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "scope",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecordFullSelfDrivingAutoApplyConfigResponse$Runtime = (() => class _RecordFullSelfDrivingAutoApplyConfigResponse extends Message<_RecordFullSelfDrivingAutoApplyConfigResponse> {
  declare config?: FullSelfDrivingAutoApplyConfig;
  constructor(data?: PartialMessage<_RecordFullSelfDrivingAutoApplyConfigResponse>) {
    super();
    proto3.util.initPartial(data, this as _RecordFullSelfDrivingAutoApplyConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordFullSelfDrivingAutoApplyConfigResponse {
    return new _RecordFullSelfDrivingAutoApplyConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingAutoApplyConfigResponse {
    return new _RecordFullSelfDrivingAutoApplyConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordFullSelfDrivingAutoApplyConfigResponse {
    return new _RecordFullSelfDrivingAutoApplyConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordFullSelfDrivingAutoApplyConfigResponse | PlainMessage<_RecordFullSelfDrivingAutoApplyConfigResponse> | undefined | null, b2: _RecordFullSelfDrivingAutoApplyConfigResponse | PlainMessage<_RecordFullSelfDrivingAutoApplyConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_RecordFullSelfDrivingAutoApplyConfigResponse as unknown as MessageType<_RecordFullSelfDrivingAutoApplyConfigResponse>, a, b2);
  }
})();
export type RecordFullSelfDrivingAutoApplyConfigResponse = InstanceType<typeof RecordFullSelfDrivingAutoApplyConfigResponse$Runtime>;
var RecordFullSelfDrivingAutoApplyConfigResponse: MessageType<RecordFullSelfDrivingAutoApplyConfigResponse> = RecordFullSelfDrivingAutoApplyConfigResponse$Runtime as unknown as MessageType<RecordFullSelfDrivingAutoApplyConfigResponse>;
(RecordFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigResponse>).runtime = proto3;
(RecordFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigResponse>).typeName = "aiserver.v1.RecordFullSelfDrivingAutoApplyConfigResponse";
(RecordFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<RecordFullSelfDrivingAutoApplyConfigResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "config", kind: "message", T: FullSelfDrivingAutoApplyConfig }
]);
var DeleteFullSelfDrivingAutoApplyConfigRequest$Runtime = (() => class _DeleteFullSelfDrivingAutoApplyConfigRequest extends Message<_DeleteFullSelfDrivingAutoApplyConfigRequest> {
  declare matchKind: string;
  declare matchKey: string;
  declare scope: string;
  declare repoOwner: string;
  declare repoName: string;
  constructor(data?: PartialMessage<_DeleteFullSelfDrivingAutoApplyConfigRequest>) {
    super();
    this.matchKind = "";
    this.matchKey = "";
    this.scope = "";
    this.repoOwner = "";
    this.repoName = "";
    proto3.util.initPartial(data, this as _DeleteFullSelfDrivingAutoApplyConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigRequest {
    return new _DeleteFullSelfDrivingAutoApplyConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigRequest {
    return new _DeleteFullSelfDrivingAutoApplyConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigRequest {
    return new _DeleteFullSelfDrivingAutoApplyConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFullSelfDrivingAutoApplyConfigRequest | PlainMessage<_DeleteFullSelfDrivingAutoApplyConfigRequest> | undefined | null, b2: _DeleteFullSelfDrivingAutoApplyConfigRequest | PlainMessage<_DeleteFullSelfDrivingAutoApplyConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFullSelfDrivingAutoApplyConfigRequest as unknown as MessageType<_DeleteFullSelfDrivingAutoApplyConfigRequest>, a, b2);
  }
})();
export type DeleteFullSelfDrivingAutoApplyConfigRequest = InstanceType<typeof DeleteFullSelfDrivingAutoApplyConfigRequest$Runtime>;
var DeleteFullSelfDrivingAutoApplyConfigRequest: MessageType<DeleteFullSelfDrivingAutoApplyConfigRequest> = DeleteFullSelfDrivingAutoApplyConfigRequest$Runtime as unknown as MessageType<DeleteFullSelfDrivingAutoApplyConfigRequest>;
(DeleteFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigRequest>).runtime = proto3;
(DeleteFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigRequest>).typeName = "aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigRequest";
(DeleteFullSelfDrivingAutoApplyConfigRequest as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "match_kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "match_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "scope",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteFullSelfDrivingAutoApplyConfigResponse$Runtime = (() => class _DeleteFullSelfDrivingAutoApplyConfigResponse extends Message<_DeleteFullSelfDrivingAutoApplyConfigResponse> {
  declare deleted: boolean;
  constructor(data?: PartialMessage<_DeleteFullSelfDrivingAutoApplyConfigResponse>) {
    super();
    this.deleted = false;
    proto3.util.initPartial(data, this as _DeleteFullSelfDrivingAutoApplyConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigResponse {
    return new _DeleteFullSelfDrivingAutoApplyConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigResponse {
    return new _DeleteFullSelfDrivingAutoApplyConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFullSelfDrivingAutoApplyConfigResponse {
    return new _DeleteFullSelfDrivingAutoApplyConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFullSelfDrivingAutoApplyConfigResponse | PlainMessage<_DeleteFullSelfDrivingAutoApplyConfigResponse> | undefined | null, b2: _DeleteFullSelfDrivingAutoApplyConfigResponse | PlainMessage<_DeleteFullSelfDrivingAutoApplyConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFullSelfDrivingAutoApplyConfigResponse as unknown as MessageType<_DeleteFullSelfDrivingAutoApplyConfigResponse>, a, b2);
  }
})();
export type DeleteFullSelfDrivingAutoApplyConfigResponse = InstanceType<typeof DeleteFullSelfDrivingAutoApplyConfigResponse$Runtime>;
var DeleteFullSelfDrivingAutoApplyConfigResponse: MessageType<DeleteFullSelfDrivingAutoApplyConfigResponse> = DeleteFullSelfDrivingAutoApplyConfigResponse$Runtime as unknown as MessageType<DeleteFullSelfDrivingAutoApplyConfigResponse>;
(DeleteFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigResponse>).runtime = proto3;
(DeleteFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigResponse>).typeName = "aiserver.v1.DeleteFullSelfDrivingAutoApplyConfigResponse";
(DeleteFullSelfDrivingAutoApplyConfigResponse as MutableMessageType<DeleteFullSelfDrivingAutoApplyConfigResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "deleted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ListFullSelfDrivingAutoApplyConfigsRequest$Runtime = (() => class _ListFullSelfDrivingAutoApplyConfigsRequest extends Message<_ListFullSelfDrivingAutoApplyConfigsRequest> {
  declare repoOwner?: string;
  declare repoName?: string;
  constructor(data?: PartialMessage<_ListFullSelfDrivingAutoApplyConfigsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListFullSelfDrivingAutoApplyConfigsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingAutoApplyConfigsRequest {
    return new _ListFullSelfDrivingAutoApplyConfigsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingAutoApplyConfigsRequest {
    return new _ListFullSelfDrivingAutoApplyConfigsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingAutoApplyConfigsRequest {
    return new _ListFullSelfDrivingAutoApplyConfigsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingAutoApplyConfigsRequest | PlainMessage<_ListFullSelfDrivingAutoApplyConfigsRequest> | undefined | null, b2: _ListFullSelfDrivingAutoApplyConfigsRequest | PlainMessage<_ListFullSelfDrivingAutoApplyConfigsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingAutoApplyConfigsRequest as unknown as MessageType<_ListFullSelfDrivingAutoApplyConfigsRequest>, a, b2);
  }
})();
export type ListFullSelfDrivingAutoApplyConfigsRequest = InstanceType<typeof ListFullSelfDrivingAutoApplyConfigsRequest$Runtime>;
var ListFullSelfDrivingAutoApplyConfigsRequest: MessageType<ListFullSelfDrivingAutoApplyConfigsRequest> = ListFullSelfDrivingAutoApplyConfigsRequest$Runtime as unknown as MessageType<ListFullSelfDrivingAutoApplyConfigsRequest>;
(ListFullSelfDrivingAutoApplyConfigsRequest as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsRequest>).runtime = proto3;
(ListFullSelfDrivingAutoApplyConfigsRequest as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsRequest>).typeName = "aiserver.v1.ListFullSelfDrivingAutoApplyConfigsRequest";
(ListFullSelfDrivingAutoApplyConfigsRequest as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repo_owner", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "repo_name", kind: "scalar", T: 9, opt: true }
]);
var ListFullSelfDrivingAutoApplyConfigsResponse$Runtime = (() => class _ListFullSelfDrivingAutoApplyConfigsResponse extends Message<_ListFullSelfDrivingAutoApplyConfigsResponse> {
  declare configs: FullSelfDrivingAutoApplyConfig[];
  constructor(data?: PartialMessage<_ListFullSelfDrivingAutoApplyConfigsResponse>) {
    super();
    this.configs = [];
    proto3.util.initPartial(data, this as _ListFullSelfDrivingAutoApplyConfigsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListFullSelfDrivingAutoApplyConfigsResponse {
    return new _ListFullSelfDrivingAutoApplyConfigsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingAutoApplyConfigsResponse {
    return new _ListFullSelfDrivingAutoApplyConfigsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListFullSelfDrivingAutoApplyConfigsResponse {
    return new _ListFullSelfDrivingAutoApplyConfigsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ListFullSelfDrivingAutoApplyConfigsResponse | PlainMessage<_ListFullSelfDrivingAutoApplyConfigsResponse> | undefined | null, b2: _ListFullSelfDrivingAutoApplyConfigsResponse | PlainMessage<_ListFullSelfDrivingAutoApplyConfigsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListFullSelfDrivingAutoApplyConfigsResponse as unknown as MessageType<_ListFullSelfDrivingAutoApplyConfigsResponse>, a, b2);
  }
})();
export type ListFullSelfDrivingAutoApplyConfigsResponse = InstanceType<typeof ListFullSelfDrivingAutoApplyConfigsResponse$Runtime>;
var ListFullSelfDrivingAutoApplyConfigsResponse: MessageType<ListFullSelfDrivingAutoApplyConfigsResponse> = ListFullSelfDrivingAutoApplyConfigsResponse$Runtime as unknown as MessageType<ListFullSelfDrivingAutoApplyConfigsResponse>;
(ListFullSelfDrivingAutoApplyConfigsResponse as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsResponse>).runtime = proto3;
(ListFullSelfDrivingAutoApplyConfigsResponse as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsResponse>).typeName = "aiserver.v1.ListFullSelfDrivingAutoApplyConfigsResponse";
(ListFullSelfDrivingAutoApplyConfigsResponse as MutableMessageType<ListFullSelfDrivingAutoApplyConfigsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "configs", kind: "message", T: FullSelfDrivingAutoApplyConfig, repeated: true }
]);


export { FullSelfDrivingMode, FullSelfDrivingRunSuggestionState, FullSelfDrivingCloudCommandAction, SetFullSelfDrivingConfigRequest, SetFullSelfDrivingConfigResponse, GetFullSelfDrivingConfigRequest, GetFullSelfDrivingConfigResponse, ListFullSelfDrivingRunsRequest, FullSelfDrivingRunLiveStatus, FullSelfDrivingRun, ListFullSelfDrivingRunsResponse, ListFullSelfDrivingFindingsRequest, FullSelfDrivingFinding, ListFullSelfDrivingFindingsResponse, FullSelfDrivingOutputInput, RecordFullSelfDrivingOutputsRequest, RecordFullSelfDrivingOutputsResponse, UpdateFullSelfDrivingOutputRequest, UpdateFullSelfDrivingOutputResponse, SupersedeFullSelfDrivingOutputRequest, SupersedeFullSelfDrivingOutputResponse, DismissFullSelfDrivingOutputRequest, DismissFullSelfDrivingOutputResponse, UndoFullSelfDrivingOutputRequest, UndoFullSelfDrivingOutputResponse, GetFullSelfDrivingRunSuggestionRequest, GetFullSelfDrivingRunSuggestionResponse, ApplyFullSelfDrivingSuggestionRequest, ApplyFullSelfDrivingSuggestionResponse, UpdateFullSelfDrivingFindingStatusRequest, UpdateFullSelfDrivingFindingStatusResponse, RunFullSelfDrivingWorkflowSuggestionRequest, RunFullSelfDrivingWorkflowSuggestionResponse, BuildFullSelfDrivingTriageContextRequest, BuildFullSelfDrivingTriageContextResponse, PrepareLocalFullSelfDrivingRunRequest, PrepareLocalFullSelfDrivingRunResponse, RunFullSelfDrivingCloudCommandRequest, RunFullSelfDrivingCloudCommandResponse, EnrollExternalFullSelfDrivingRunRequest, EnrollExternalFullSelfDrivingRunResponse, FullSelfDrivingPrScopedSuggestion, RecordFullSelfDrivingPrScopedSuggestionRequest, RecordFullSelfDrivingPrScopedSuggestionResponse, ListFullSelfDrivingPrScopedSuggestionsRequest, ListFullSelfDrivingPrScopedSuggestionsResponse, UpdateFullSelfDrivingPrScopedSuggestionStatusRequest, UpdateFullSelfDrivingPrScopedSuggestionStatusResponse, ApplyFullSelfDrivingPrScopedSuggestionRequest, ApplyFullSelfDrivingPrScopedSuggestionResponse, FullSelfDrivingAutoApplyConfig, RecordFullSelfDrivingAutoApplyConfigRequest, RecordFullSelfDrivingAutoApplyConfigResponse, DeleteFullSelfDrivingAutoApplyConfigRequest, DeleteFullSelfDrivingAutoApplyConfigResponse, ListFullSelfDrivingAutoApplyConfigsRequest, ListFullSelfDrivingAutoApplyConfigsResponse };
