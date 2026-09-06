/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:415559-416018
 * Region SHA-256: 1442faa15725756caff01e685d849b856185a5e7b6cbfe9202adbf146ad8aeee
 * BackgroundComposer closure exports: 12 messages + 4 enums = 16
 */
import { Message, proto3, Timestamp, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type WaterfallLogLevel = 0 | 1 | 2 | 3 | 4;
var WaterfallLogLevel: {
  "UNSPECIFIED": 0;
  "DEBUG": 1;
  "INFO": 2;
  "WARN": 3;
  "ERROR": 4;
  0: "UNSPECIFIED";
  1: "DEBUG";
  2: "INFO";
  3: "WARN";
  4: "ERROR";
};
export type WaterfallSpanStatusType = 0 | 1 | 2 | 3;
var WaterfallSpanStatusType: {
  "UNSPECIFIED": 0;
  "MESSAGE": 1;
  "WARN": 2;
  "ERROR": 3;
  0: "UNSPECIFIED";
  1: "MESSAGE";
  2: "WARN";
  3: "ERROR";
};
export type WaterfallSpanEndStatus = 0 | 1 | 2 | 3;
var WaterfallSpanEndStatus: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "SKIPPED": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "SKIPPED";
};
export type WaterfallPhaseType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
var WaterfallPhaseType: {
  "UNSPECIFIED": 0;
  "ENVIRONMENT": 1;
  "CREATE_CLOUD_WORKSPACE": 2;
  "PROVISION_SANDBOX": 3;
  "RESTORE_WORKSPACE_FILES": 4;
  "DOCKER_BUILD": 5;
  "SETUP_REPOSITORY": 6;
  "INSTALL_DEPENDENCIES": 7;
  "RUN_WORKSPACE_SETUP": 8;
  "START_AGENT_SERVICES": 9;
  "INSTALL_EXTENSIONS": 10;
  "COMPLETE": 11;
  "ACQUIRE_POD": 12;
  "HYDRATE": 13;
  0: "UNSPECIFIED";
  1: "ENVIRONMENT";
  2: "CREATE_CLOUD_WORKSPACE";
  3: "PROVISION_SANDBOX";
  4: "RESTORE_WORKSPACE_FILES";
  5: "DOCKER_BUILD";
  6: "SETUP_REPOSITORY";
  7: "INSTALL_DEPENDENCIES";
  8: "RUN_WORKSPACE_SETUP";
  9: "START_AGENT_SERVICES";
  10: "INSTALL_EXTENSIONS";
  11: "COMPLETE";
  12: "ACQUIRE_POD";
  13: "HYDRATE";
};
(function(WaterfallLogLevel2) {
  WaterfallLogLevel2[WaterfallLogLevel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WaterfallLogLevel2[WaterfallLogLevel2["DEBUG"] = 1] = "DEBUG";
  WaterfallLogLevel2[WaterfallLogLevel2["INFO"] = 2] = "INFO";
  WaterfallLogLevel2[WaterfallLogLevel2["WARN"] = 3] = "WARN";
  WaterfallLogLevel2[WaterfallLogLevel2["ERROR"] = 4] = "ERROR";
})(WaterfallLogLevel! || (WaterfallLogLevel = {} as typeof WaterfallLogLevel));
proto3.util.setEnumType(WaterfallLogLevel, "aiserver.v1.WaterfallLogLevel", [
  { no: 0, name: "WATERFALL_LOG_LEVEL_UNSPECIFIED" },
  { no: 1, name: "WATERFALL_LOG_LEVEL_DEBUG" },
  { no: 2, name: "WATERFALL_LOG_LEVEL_INFO" },
  { no: 3, name: "WATERFALL_LOG_LEVEL_WARN" },
  { no: 4, name: "WATERFALL_LOG_LEVEL_ERROR" }
]);
(function(WaterfallSpanStatusType2) {
  WaterfallSpanStatusType2[WaterfallSpanStatusType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WaterfallSpanStatusType2[WaterfallSpanStatusType2["MESSAGE"] = 1] = "MESSAGE";
  WaterfallSpanStatusType2[WaterfallSpanStatusType2["WARN"] = 2] = "WARN";
  WaterfallSpanStatusType2[WaterfallSpanStatusType2["ERROR"] = 3] = "ERROR";
})(WaterfallSpanStatusType! || (WaterfallSpanStatusType = {} as typeof WaterfallSpanStatusType));
proto3.util.setEnumType(WaterfallSpanStatusType, "aiserver.v1.WaterfallSpanStatusType", [
  { no: 0, name: "WATERFALL_SPAN_STATUS_TYPE_UNSPECIFIED" },
  { no: 1, name: "WATERFALL_SPAN_STATUS_TYPE_MESSAGE" },
  { no: 2, name: "WATERFALL_SPAN_STATUS_TYPE_WARN" },
  { no: 3, name: "WATERFALL_SPAN_STATUS_TYPE_ERROR" }
]);
(function(WaterfallSpanEndStatus2) {
  WaterfallSpanEndStatus2[WaterfallSpanEndStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WaterfallSpanEndStatus2[WaterfallSpanEndStatus2["SUCCESS"] = 1] = "SUCCESS";
  WaterfallSpanEndStatus2[WaterfallSpanEndStatus2["FAILURE"] = 2] = "FAILURE";
  WaterfallSpanEndStatus2[WaterfallSpanEndStatus2["SKIPPED"] = 3] = "SKIPPED";
})(WaterfallSpanEndStatus! || (WaterfallSpanEndStatus = {} as typeof WaterfallSpanEndStatus));
proto3.util.setEnumType(WaterfallSpanEndStatus, "aiserver.v1.WaterfallSpanEndStatus", [
  { no: 0, name: "WATERFALL_SPAN_END_STATUS_UNSPECIFIED" },
  { no: 1, name: "WATERFALL_SPAN_END_STATUS_SUCCESS" },
  { no: 2, name: "WATERFALL_SPAN_END_STATUS_FAILURE" },
  { no: 3, name: "WATERFALL_SPAN_END_STATUS_SKIPPED" }
]);
(function(WaterfallPhaseType2) {
  WaterfallPhaseType2[WaterfallPhaseType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WaterfallPhaseType2[WaterfallPhaseType2["ENVIRONMENT"] = 1] = "ENVIRONMENT";
  WaterfallPhaseType2[WaterfallPhaseType2["CREATE_CLOUD_WORKSPACE"] = 2] = "CREATE_CLOUD_WORKSPACE";
  WaterfallPhaseType2[WaterfallPhaseType2["PROVISION_SANDBOX"] = 3] = "PROVISION_SANDBOX";
  WaterfallPhaseType2[WaterfallPhaseType2["RESTORE_WORKSPACE_FILES"] = 4] = "RESTORE_WORKSPACE_FILES";
  WaterfallPhaseType2[WaterfallPhaseType2["DOCKER_BUILD"] = 5] = "DOCKER_BUILD";
  WaterfallPhaseType2[WaterfallPhaseType2["SETUP_REPOSITORY"] = 6] = "SETUP_REPOSITORY";
  WaterfallPhaseType2[WaterfallPhaseType2["INSTALL_DEPENDENCIES"] = 7] = "INSTALL_DEPENDENCIES";
  WaterfallPhaseType2[WaterfallPhaseType2["RUN_WORKSPACE_SETUP"] = 8] = "RUN_WORKSPACE_SETUP";
  WaterfallPhaseType2[WaterfallPhaseType2["START_AGENT_SERVICES"] = 9] = "START_AGENT_SERVICES";
  WaterfallPhaseType2[WaterfallPhaseType2["INSTALL_EXTENSIONS"] = 10] = "INSTALL_EXTENSIONS";
  WaterfallPhaseType2[WaterfallPhaseType2["COMPLETE"] = 11] = "COMPLETE";
  WaterfallPhaseType2[WaterfallPhaseType2["ACQUIRE_POD"] = 12] = "ACQUIRE_POD";
  WaterfallPhaseType2[WaterfallPhaseType2["HYDRATE"] = 13] = "HYDRATE";
})(WaterfallPhaseType! || (WaterfallPhaseType = {} as typeof WaterfallPhaseType));
proto3.util.setEnumType(WaterfallPhaseType, "aiserver.v1.WaterfallPhaseType", [
  { no: 0, name: "WATERFALL_PHASE_TYPE_UNSPECIFIED" },
  { no: 1, name: "WATERFALL_PHASE_TYPE_ENVIRONMENT" },
  { no: 2, name: "WATERFALL_PHASE_TYPE_CREATE_CLOUD_WORKSPACE" },
  { no: 3, name: "WATERFALL_PHASE_TYPE_PROVISION_SANDBOX" },
  { no: 4, name: "WATERFALL_PHASE_TYPE_RESTORE_WORKSPACE_FILES" },
  { no: 5, name: "WATERFALL_PHASE_TYPE_DOCKER_BUILD" },
  { no: 6, name: "WATERFALL_PHASE_TYPE_SETUP_REPOSITORY" },
  { no: 7, name: "WATERFALL_PHASE_TYPE_INSTALL_DEPENDENCIES" },
  { no: 8, name: "WATERFALL_PHASE_TYPE_RUN_WORKSPACE_SETUP" },
  { no: 9, name: "WATERFALL_PHASE_TYPE_START_AGENT_SERVICES" },
  { no: 10, name: "WATERFALL_PHASE_TYPE_INSTALL_EXTENSIONS" },
  { no: 11, name: "WATERFALL_PHASE_TYPE_COMPLETE" },
  { no: 12, name: "WATERFALL_PHASE_TYPE_ACQUIRE_POD" },
  { no: 13, name: "WATERFALL_PHASE_TYPE_HYDRATE" }
]);
var WaterfallUpdate$Runtime = (() => class _WaterfallUpdate extends Message<_WaterfallUpdate> {
  declare timestamp?: Timestamp;
  declare update: { case: "spanStart"; value: SpanStart } | { case: "spanEnd"; value: SpanEnd } | { case: "spanLog"; value: SpanLog } | { case: "spanStatusUpdate"; value: SpanStatusUpdate } | { case: "spanUpdate"; value: SpanUpdate } | { case: "sentinel"; value: SetupWaterfallSentinel } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WaterfallUpdate>) {
    super();
    this.update = { case: void 0 };
    proto3.util.initPartial(data, this as _WaterfallUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WaterfallUpdate {
    return new _WaterfallUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WaterfallUpdate {
    return new _WaterfallUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WaterfallUpdate {
    return new _WaterfallUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _WaterfallUpdate | PlainMessage<_WaterfallUpdate> | undefined | null, b2: _WaterfallUpdate | PlainMessage<_WaterfallUpdate> | undefined | null): boolean {
    return proto3.util.equals(_WaterfallUpdate as unknown as MessageType<_WaterfallUpdate>, a, b2);
  }
})();
export type WaterfallUpdate = InstanceType<typeof WaterfallUpdate$Runtime>;
var WaterfallUpdate: MessageType<WaterfallUpdate> = WaterfallUpdate$Runtime as unknown as MessageType<WaterfallUpdate>;
(WaterfallUpdate as MutableMessageType<WaterfallUpdate>).runtime = proto3;
(WaterfallUpdate as MutableMessageType<WaterfallUpdate>).typeName = "aiserver.v1.WaterfallUpdate";
(WaterfallUpdate as MutableMessageType<WaterfallUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  { no: 2, name: "span_start", kind: "message", T: SpanStart, oneof: "update" },
  { no: 3, name: "span_end", kind: "message", T: SpanEnd, oneof: "update" },
  { no: 4, name: "span_log", kind: "message", T: SpanLog, oneof: "update" },
  { no: 5, name: "span_status_update", kind: "message", T: SpanStatusUpdate, oneof: "update" },
  { no: 6, name: "span_update", kind: "message", T: SpanUpdate, oneof: "update" },
  { no: 8, name: "sentinel", kind: "message", T: SetupWaterfallSentinel, oneof: "update" }
]);
var SetupWaterfallSentinel$Runtime = (() => class _SetupWaterfallSentinel extends Message<_SetupWaterfallSentinel> {
  constructor(data?: PartialMessage<_SetupWaterfallSentinel>) {
    super();
    proto3.util.initPartial(data, this as _SetupWaterfallSentinel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupWaterfallSentinel {
    return new _SetupWaterfallSentinel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupWaterfallSentinel {
    return new _SetupWaterfallSentinel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupWaterfallSentinel {
    return new _SetupWaterfallSentinel().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupWaterfallSentinel | PlainMessage<_SetupWaterfallSentinel> | undefined | null, b2: _SetupWaterfallSentinel | PlainMessage<_SetupWaterfallSentinel> | undefined | null): boolean {
    return proto3.util.equals(_SetupWaterfallSentinel as unknown as MessageType<_SetupWaterfallSentinel>, a, b2);
  }
})();
export type SetupWaterfallSentinel = InstanceType<typeof SetupWaterfallSentinel$Runtime>;
var SetupWaterfallSentinel: MessageType<SetupWaterfallSentinel> = SetupWaterfallSentinel$Runtime as unknown as MessageType<SetupWaterfallSentinel>;
(SetupWaterfallSentinel as MutableMessageType<SetupWaterfallSentinel>).runtime = proto3;
(SetupWaterfallSentinel as MutableMessageType<SetupWaterfallSentinel>).typeName = "aiserver.v1.SetupWaterfallSentinel";
(SetupWaterfallSentinel as MutableMessageType<SetupWaterfallSentinel>).fields = proto3.util.newFieldList(() => []);
var SpanStart$Runtime = (() => class _SpanStart extends Message<_SpanStart> {
  declare spanId: string;
  declare parentSpanId?: string;
  declare phaseType: WaterfallPhaseType;
  declare fallbackPhaseLabel?: string;
  declare spanDetails: { case: "gitReposSetup"; value: GitReposSetupSpanDetails } | { case: "gitRepoSetup"; value: GitRepoSetupSpanDetails } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SpanStart>) {
    super();
    this.spanId = "";
    this.phaseType = WaterfallPhaseType.UNSPECIFIED;
    this.spanDetails = { case: void 0 };
    proto3.util.initPartial(data, this as _SpanStart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanStart {
    return new _SpanStart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanStart {
    return new _SpanStart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanStart {
    return new _SpanStart().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanStart | PlainMessage<_SpanStart> | undefined | null, b2: _SpanStart | PlainMessage<_SpanStart> | undefined | null): boolean {
    return proto3.util.equals(_SpanStart as unknown as MessageType<_SpanStart>, a, b2);
  }
})();
export type SpanStart = InstanceType<typeof SpanStart$Runtime>;
var SpanStart: MessageType<SpanStart> = SpanStart$Runtime as unknown as MessageType<SpanStart>;
(SpanStart as MutableMessageType<SpanStart>).runtime = proto3;
(SpanStart as MutableMessageType<SpanStart>).typeName = "aiserver.v1.SpanStart";
(SpanStart as MutableMessageType<SpanStart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "parent_span_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "phase_type", kind: "enum", T: proto3.getEnumType(WaterfallPhaseType) },
  { no: 6, name: "fallback_phase_label", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "git_repos_setup", kind: "message", T: GitReposSetupSpanDetails, oneof: "span_details" },
  { no: 4, name: "git_repo_setup", kind: "message", T: GitRepoSetupSpanDetails, oneof: "span_details" }
]);
var SpanUpdate$Runtime = (() => class _SpanUpdate extends Message<_SpanUpdate> {
  declare spanId: string;
  declare spanUpdate: { case: "genericLog"; value: GenericLogSpanUpdate } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SpanUpdate>) {
    super();
    this.spanId = "";
    this.spanUpdate = { case: void 0 };
    proto3.util.initPartial(data, this as _SpanUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanUpdate {
    return new _SpanUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanUpdate {
    return new _SpanUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanUpdate {
    return new _SpanUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanUpdate | PlainMessage<_SpanUpdate> | undefined | null, b2: _SpanUpdate | PlainMessage<_SpanUpdate> | undefined | null): boolean {
    return proto3.util.equals(_SpanUpdate as unknown as MessageType<_SpanUpdate>, a, b2);
  }
})();
export type SpanUpdate = InstanceType<typeof SpanUpdate$Runtime>;
var SpanUpdate: MessageType<SpanUpdate> = SpanUpdate$Runtime as unknown as MessageType<SpanUpdate>;
(SpanUpdate as MutableMessageType<SpanUpdate>).runtime = proto3;
(SpanUpdate as MutableMessageType<SpanUpdate>).typeName = "aiserver.v1.SpanUpdate";
(SpanUpdate as MutableMessageType<SpanUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "generic_log", kind: "message", T: GenericLogSpanUpdate, oneof: "span_update" }
]);
var SpanEnd$Runtime = (() => class _SpanEnd extends Message<_SpanEnd> {
  declare spanId: string;
  declare endStatus: WaterfallSpanEndStatus;
  constructor(data?: PartialMessage<_SpanEnd>) {
    super();
    this.spanId = "";
    this.endStatus = WaterfallSpanEndStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SpanEnd);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanEnd {
    return new _SpanEnd().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanEnd {
    return new _SpanEnd().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanEnd {
    return new _SpanEnd().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanEnd | PlainMessage<_SpanEnd> | undefined | null, b2: _SpanEnd | PlainMessage<_SpanEnd> | undefined | null): boolean {
    return proto3.util.equals(_SpanEnd as unknown as MessageType<_SpanEnd>, a, b2);
  }
})();
export type SpanEnd = InstanceType<typeof SpanEnd$Runtime>;
var SpanEnd: MessageType<SpanEnd> = SpanEnd$Runtime as unknown as MessageType<SpanEnd>;
(SpanEnd as MutableMessageType<SpanEnd>).runtime = proto3;
(SpanEnd as MutableMessageType<SpanEnd>).typeName = "aiserver.v1.SpanEnd";
(SpanEnd as MutableMessageType<SpanEnd>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "end_status", kind: "enum", T: proto3.getEnumType(WaterfallSpanEndStatus) }
]);
var SpanLog$Runtime = (() => class _SpanLog extends Message<_SpanLog> {
  declare spanId: string;
  declare timestamp?: Timestamp;
  declare message: string;
  declare level: WaterfallLogLevel;
  constructor(data?: PartialMessage<_SpanLog>) {
    super();
    this.spanId = "";
    this.message = "";
    this.level = WaterfallLogLevel.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SpanLog);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanLog {
    return new _SpanLog().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanLog {
    return new _SpanLog().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanLog {
    return new _SpanLog().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanLog | PlainMessage<_SpanLog> | undefined | null, b2: _SpanLog | PlainMessage<_SpanLog> | undefined | null): boolean {
    return proto3.util.equals(_SpanLog as unknown as MessageType<_SpanLog>, a, b2);
  }
})();
export type SpanLog = InstanceType<typeof SpanLog$Runtime>;
var SpanLog: MessageType<SpanLog> = SpanLog$Runtime as unknown as MessageType<SpanLog>;
(SpanLog as MutableMessageType<SpanLog>).runtime = proto3;
(SpanLog as MutableMessageType<SpanLog>).typeName = "aiserver.v1.SpanLog";
(SpanLog as MutableMessageType<SpanLog>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "timestamp", kind: "message", T: Timestamp },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "level", kind: "enum", T: proto3.getEnumType(WaterfallLogLevel) }
]);
var SpanStatusUpdate$Runtime = (() => class _SpanStatusUpdate extends Message<_SpanStatusUpdate> {
  declare spanId: string;
  declare timestamp?: Timestamp;
  declare statusType: WaterfallSpanStatusType;
  declare message: string;
  declare callToAction?: CallToAction;
  constructor(data?: PartialMessage<_SpanStatusUpdate>) {
    super();
    this.spanId = "";
    this.statusType = WaterfallSpanStatusType.UNSPECIFIED;
    this.message = "";
    proto3.util.initPartial(data, this as _SpanStatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanStatusUpdate {
    return new _SpanStatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanStatusUpdate {
    return new _SpanStatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanStatusUpdate {
    return new _SpanStatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanStatusUpdate | PlainMessage<_SpanStatusUpdate> | undefined | null, b2: _SpanStatusUpdate | PlainMessage<_SpanStatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_SpanStatusUpdate as unknown as MessageType<_SpanStatusUpdate>, a, b2);
  }
})();
export type SpanStatusUpdate = InstanceType<typeof SpanStatusUpdate$Runtime>;
var SpanStatusUpdate: MessageType<SpanStatusUpdate> = SpanStatusUpdate$Runtime as unknown as MessageType<SpanStatusUpdate>;
(SpanStatusUpdate as MutableMessageType<SpanStatusUpdate>).runtime = proto3;
(SpanStatusUpdate as MutableMessageType<SpanStatusUpdate>).typeName = "aiserver.v1.SpanStatusUpdate";
(SpanStatusUpdate as MutableMessageType<SpanStatusUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "timestamp", kind: "message", T: Timestamp },
  { no: 3, name: "status_type", kind: "enum", T: proto3.getEnumType(WaterfallSpanStatusType) },
  {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "call_to_action", kind: "message", T: CallToAction, opt: true }
]);
var CallToAction$Runtime = (() => class _CallToAction extends Message<_CallToAction> {
  declare callToAction: { case: "openUrl"; value: OpenUrlCallToAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CallToAction>) {
    super();
    this.callToAction = { case: void 0 };
    proto3.util.initPartial(data, this as _CallToAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CallToAction {
    return new _CallToAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CallToAction {
    return new _CallToAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CallToAction {
    return new _CallToAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CallToAction | PlainMessage<_CallToAction> | undefined | null, b2: _CallToAction | PlainMessage<_CallToAction> | undefined | null): boolean {
    return proto3.util.equals(_CallToAction as unknown as MessageType<_CallToAction>, a, b2);
  }
})();
export type CallToAction = InstanceType<typeof CallToAction$Runtime>;
var CallToAction: MessageType<CallToAction> = CallToAction$Runtime as unknown as MessageType<CallToAction>;
(CallToAction as MutableMessageType<CallToAction>).runtime = proto3;
(CallToAction as MutableMessageType<CallToAction>).typeName = "aiserver.v1.CallToAction";
(CallToAction as MutableMessageType<CallToAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "open_url", kind: "message", T: OpenUrlCallToAction, oneof: "call_to_action" }
]);
var OpenUrlCallToAction$Runtime = (() => class _OpenUrlCallToAction extends Message<_OpenUrlCallToAction> {
  declare url: string;
  declare buttonText: string;
  constructor(data?: PartialMessage<_OpenUrlCallToAction>) {
    super();
    this.url = "";
    this.buttonText = "";
    proto3.util.initPartial(data, this as _OpenUrlCallToAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _OpenUrlCallToAction {
    return new _OpenUrlCallToAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _OpenUrlCallToAction {
    return new _OpenUrlCallToAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _OpenUrlCallToAction {
    return new _OpenUrlCallToAction().fromJsonString(jsonString, options);
  }
  static equals(a: _OpenUrlCallToAction | PlainMessage<_OpenUrlCallToAction> | undefined | null, b2: _OpenUrlCallToAction | PlainMessage<_OpenUrlCallToAction> | undefined | null): boolean {
    return proto3.util.equals(_OpenUrlCallToAction as unknown as MessageType<_OpenUrlCallToAction>, a, b2);
  }
})();
export type OpenUrlCallToAction = InstanceType<typeof OpenUrlCallToAction$Runtime>;
var OpenUrlCallToAction: MessageType<OpenUrlCallToAction> = OpenUrlCallToAction$Runtime as unknown as MessageType<OpenUrlCallToAction>;
(OpenUrlCallToAction as MutableMessageType<OpenUrlCallToAction>).runtime = proto3;
(OpenUrlCallToAction as MutableMessageType<OpenUrlCallToAction>).typeName = "aiserver.v1.OpenUrlCallToAction";
(OpenUrlCallToAction as MutableMessageType<OpenUrlCallToAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "button_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GitReposSetupSpanDetails$Runtime = (() => class _GitReposSetupSpanDetails extends Message<_GitReposSetupSpanDetails> {
  constructor(data?: PartialMessage<_GitReposSetupSpanDetails>) {
    super();
    proto3.util.initPartial(data, this as _GitReposSetupSpanDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitReposSetupSpanDetails {
    return new _GitReposSetupSpanDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitReposSetupSpanDetails {
    return new _GitReposSetupSpanDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitReposSetupSpanDetails {
    return new _GitReposSetupSpanDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _GitReposSetupSpanDetails | PlainMessage<_GitReposSetupSpanDetails> | undefined | null, b2: _GitReposSetupSpanDetails | PlainMessage<_GitReposSetupSpanDetails> | undefined | null): boolean {
    return proto3.util.equals(_GitReposSetupSpanDetails as unknown as MessageType<_GitReposSetupSpanDetails>, a, b2);
  }
})();
export type GitReposSetupSpanDetails = InstanceType<typeof GitReposSetupSpanDetails$Runtime>;
var GitReposSetupSpanDetails: MessageType<GitReposSetupSpanDetails> = GitReposSetupSpanDetails$Runtime as unknown as MessageType<GitReposSetupSpanDetails>;
(GitReposSetupSpanDetails as MutableMessageType<GitReposSetupSpanDetails>).runtime = proto3;
(GitReposSetupSpanDetails as MutableMessageType<GitReposSetupSpanDetails>).typeName = "aiserver.v1.GitReposSetupSpanDetails";
(GitReposSetupSpanDetails as MutableMessageType<GitReposSetupSpanDetails>).fields = proto3.util.newFieldList(() => []);
var GitRepoSetupSpanDetails$Runtime = (() => class _GitRepoSetupSpanDetails extends Message<_GitRepoSetupSpanDetails> {
  declare repoDisplayName: string;
  constructor(data?: PartialMessage<_GitRepoSetupSpanDetails>) {
    super();
    this.repoDisplayName = "";
    proto3.util.initPartial(data, this as _GitRepoSetupSpanDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitRepoSetupSpanDetails {
    return new _GitRepoSetupSpanDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitRepoSetupSpanDetails {
    return new _GitRepoSetupSpanDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitRepoSetupSpanDetails {
    return new _GitRepoSetupSpanDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _GitRepoSetupSpanDetails | PlainMessage<_GitRepoSetupSpanDetails> | undefined | null, b2: _GitRepoSetupSpanDetails | PlainMessage<_GitRepoSetupSpanDetails> | undefined | null): boolean {
    return proto3.util.equals(_GitRepoSetupSpanDetails as unknown as MessageType<_GitRepoSetupSpanDetails>, a, b2);
  }
})();
export type GitRepoSetupSpanDetails = InstanceType<typeof GitRepoSetupSpanDetails$Runtime>;
var GitRepoSetupSpanDetails: MessageType<GitRepoSetupSpanDetails> = GitRepoSetupSpanDetails$Runtime as unknown as MessageType<GitRepoSetupSpanDetails>;
(GitRepoSetupSpanDetails as MutableMessageType<GitRepoSetupSpanDetails>).runtime = proto3;
(GitRepoSetupSpanDetails as MutableMessageType<GitRepoSetupSpanDetails>).typeName = "aiserver.v1.GitRepoSetupSpanDetails";
(GitRepoSetupSpanDetails as MutableMessageType<GitRepoSetupSpanDetails>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_display_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GenericLogSpanUpdate$Runtime = (() => class _GenericLogSpanUpdate extends Message<_GenericLogSpanUpdate> {
  declare timestamp?: Timestamp;
  declare message: string;
  declare level: WaterfallLogLevel;
  constructor(data?: PartialMessage<_GenericLogSpanUpdate>) {
    super();
    this.message = "";
    this.level = WaterfallLogLevel.UNSPECIFIED;
    proto3.util.initPartial(data, this as _GenericLogSpanUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GenericLogSpanUpdate {
    return new _GenericLogSpanUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GenericLogSpanUpdate {
    return new _GenericLogSpanUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GenericLogSpanUpdate {
    return new _GenericLogSpanUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _GenericLogSpanUpdate | PlainMessage<_GenericLogSpanUpdate> | undefined | null, b2: _GenericLogSpanUpdate | PlainMessage<_GenericLogSpanUpdate> | undefined | null): boolean {
    return proto3.util.equals(_GenericLogSpanUpdate as unknown as MessageType<_GenericLogSpanUpdate>, a, b2);
  }
})();
export type GenericLogSpanUpdate = InstanceType<typeof GenericLogSpanUpdate$Runtime>;
var GenericLogSpanUpdate: MessageType<GenericLogSpanUpdate> = GenericLogSpanUpdate$Runtime as unknown as MessageType<GenericLogSpanUpdate>;
(GenericLogSpanUpdate as MutableMessageType<GenericLogSpanUpdate>).runtime = proto3;
(GenericLogSpanUpdate as MutableMessageType<GenericLogSpanUpdate>).typeName = "aiserver.v1.GenericLogSpanUpdate";
(GenericLogSpanUpdate as MutableMessageType<GenericLogSpanUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "level", kind: "enum", T: proto3.getEnumType(WaterfallLogLevel) }
]);


export { WaterfallLogLevel, WaterfallSpanStatusType, WaterfallSpanEndStatus, WaterfallPhaseType, WaterfallUpdate, SetupWaterfallSentinel, SpanStart, SpanUpdate, SpanEnd, SpanLog, SpanStatusUpdate, CallToAction, OpenUrlCallToAction, GitReposSetupSpanDetails, GitRepoSetupSpanDetails, GenericLogSpanUpdate };
