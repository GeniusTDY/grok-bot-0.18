/**
 * Complete generated Grok Bot 0.18 Analytics module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:484661-485449
 * Region SHA-256: 377ad0f04c8ec8950dc4bd31393951ff5aab8f1cd2d1c4aaf4db6a7e81d8a037
 * B7 exports: 22 messages + 2 enums = 24
 */
import { Any, Empty, Message, Struct, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ClientOS = 0 | 1 | 2 | 3 | 4;
var ClientOS: {
  "CLIENT_OS_UNSPECIFIED": 0;
  "CLIENT_OS_WINDOWS": 1;
  "CLIENT_OS_MACOS": 2;
  "CLIENT_OS_LINUX": 3;
  "CLIENT_OS_IOS": 4;
  0: "CLIENT_OS_UNSPECIFIED";
  1: "CLIENT_OS_WINDOWS";
  2: "CLIENT_OS_MACOS";
  3: "CLIENT_OS_LINUX";
  4: "CLIENT_OS_IOS";
};
export type ClientLogLevel = 0 | 1 | 2 | 3 | 4;
var ClientLogLevel: {
  "UNSPECIFIED": 0;
  "INFO": 1;
  "DEBUG": 2;
  "WARN": 3;
  "ERROR": 4;
  0: "UNSPECIFIED";
  1: "INFO";
  2: "DEBUG";
  3: "WARN";
  4: "ERROR";
};

(function(ClientOS2) {
  ClientOS2[ClientOS2["CLIENT_OS_UNSPECIFIED"] = 0] = "CLIENT_OS_UNSPECIFIED";
  ClientOS2[ClientOS2["CLIENT_OS_WINDOWS"] = 1] = "CLIENT_OS_WINDOWS";
  ClientOS2[ClientOS2["CLIENT_OS_MACOS"] = 2] = "CLIENT_OS_MACOS";
  ClientOS2[ClientOS2["CLIENT_OS_LINUX"] = 3] = "CLIENT_OS_LINUX";
  ClientOS2[ClientOS2["CLIENT_OS_IOS"] = 4] = "CLIENT_OS_IOS";
})(ClientOS! || (ClientOS = {} as typeof ClientOS));
proto3.util.setEnumType(ClientOS, "aiserver.v1.ClientOS", [
  { no: 0, name: "CLIENT_OS_UNSPECIFIED" },
  { no: 1, name: "CLIENT_OS_WINDOWS" },
  { no: 2, name: "CLIENT_OS_MACOS" },
  { no: 3, name: "CLIENT_OS_LINUX" },
  { no: 4, name: "CLIENT_OS_IOS" }
]);
(function(ClientLogLevel2) {
  ClientLogLevel2[ClientLogLevel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ClientLogLevel2[ClientLogLevel2["INFO"] = 1] = "INFO";
  ClientLogLevel2[ClientLogLevel2["DEBUG"] = 2] = "DEBUG";
  ClientLogLevel2[ClientLogLevel2["WARN"] = 3] = "WARN";
  ClientLogLevel2[ClientLogLevel2["ERROR"] = 4] = "ERROR";
})(ClientLogLevel! || (ClientLogLevel = {} as typeof ClientLogLevel));
proto3.util.setEnumType(ClientLogLevel, "aiserver.v1.ClientLogLevel", [
  { no: 0, name: "CLIENT_LOG_LEVEL_UNSPECIFIED" },
  { no: 1, name: "CLIENT_LOG_LEVEL_INFO" },
  { no: 2, name: "CLIENT_LOG_LEVEL_DEBUG" },
  { no: 3, name: "CLIENT_LOG_LEVEL_WARN" },
  { no: 4, name: "CLIENT_LOG_LEVEL_ERROR" }
]);
var BootstrapStatsigRequest$Runtime = (() => class _BootstrapStatsigRequest extends Message<_BootstrapStatsigRequest> {
  declare ignoreDevStatus?: boolean;
  declare operatingSystem?: ClientOS;
  declare deviceModel?: string;
  declare osVersion?: string;
  declare formFactor?: string;
  declare stableId?: string;
  declare clientChannel?: string;
  declare bundleId?: string;
  constructor(data?: PartialMessage<_BootstrapStatsigRequest>) {
    super();
    proto3.util.initPartial(data, this as _BootstrapStatsigRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BootstrapStatsigRequest {
    return new _BootstrapStatsigRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BootstrapStatsigRequest {
    return new _BootstrapStatsigRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BootstrapStatsigRequest {
    return new _BootstrapStatsigRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BootstrapStatsigRequest | PlainMessage<_BootstrapStatsigRequest> | undefined | null, b2: _BootstrapStatsigRequest | PlainMessage<_BootstrapStatsigRequest> | undefined | null): boolean {
    return proto3.util.equals(_BootstrapStatsigRequest as unknown as MessageType<_BootstrapStatsigRequest>, a, b2);
  }
})();
export type BootstrapStatsigRequest = InstanceType<typeof BootstrapStatsigRequest$Runtime>;
var BootstrapStatsigRequest: MessageType<BootstrapStatsigRequest> = BootstrapStatsigRequest$Runtime as unknown as MessageType<BootstrapStatsigRequest>;
(BootstrapStatsigRequest as MutableMessageType<BootstrapStatsigRequest>).runtime = proto3;
(BootstrapStatsigRequest as MutableMessageType<BootstrapStatsigRequest>).typeName = "aiserver.v1.BootstrapStatsigRequest";
(BootstrapStatsigRequest as MutableMessageType<BootstrapStatsigRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ignore_dev_status", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "operating_system", kind: "enum", T: proto3.getEnumType(ClientOS), opt: true },
  { no: 3, name: "device_model", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "os_version", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "form_factor", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "stable_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "client_channel", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "bundle_id", kind: "scalar", T: 9, opt: true }
]);
var BootstrapStatsigResponse$Runtime = (() => class _BootstrapStatsigResponse extends Message<_BootstrapStatsigResponse> {
  declare config: string;
  declare generatedAtMs: bigint;
  constructor(data?: PartialMessage<_BootstrapStatsigResponse>) {
    super();
    this.config = "";
    this.generatedAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _BootstrapStatsigResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BootstrapStatsigResponse {
    return new _BootstrapStatsigResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BootstrapStatsigResponse {
    return new _BootstrapStatsigResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BootstrapStatsigResponse {
    return new _BootstrapStatsigResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BootstrapStatsigResponse | PlainMessage<_BootstrapStatsigResponse> | undefined | null, b2: _BootstrapStatsigResponse | PlainMessage<_BootstrapStatsigResponse> | undefined | null): boolean {
    return proto3.util.equals(_BootstrapStatsigResponse as unknown as MessageType<_BootstrapStatsigResponse>, a, b2);
  }
})();
export type BootstrapStatsigResponse = InstanceType<typeof BootstrapStatsigResponse$Runtime>;
var BootstrapStatsigResponse: MessageType<BootstrapStatsigResponse> = BootstrapStatsigResponse$Runtime as unknown as MessageType<BootstrapStatsigResponse>;
(BootstrapStatsigResponse as MutableMessageType<BootstrapStatsigResponse>).runtime = proto3;
(BootstrapStatsigResponse as MutableMessageType<BootstrapStatsigResponse>).typeName = "aiserver.v1.BootstrapStatsigResponse";
(BootstrapStatsigResponse as MutableMessageType<BootstrapStatsigResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "config",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "generated_at_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var GetFirstWindowStatsigDecisionRequest$Runtime = (() => class _GetFirstWindowStatsigDecisionRequest extends Message<_GetFirstWindowStatsigDecisionRequest> {
  declare operatingSystem?: ClientOS;
  constructor(data?: PartialMessage<_GetFirstWindowStatsigDecisionRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetFirstWindowStatsigDecisionRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetFirstWindowStatsigDecisionRequest {
    return new _GetFirstWindowStatsigDecisionRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetFirstWindowStatsigDecisionRequest {
    return new _GetFirstWindowStatsigDecisionRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetFirstWindowStatsigDecisionRequest {
    return new _GetFirstWindowStatsigDecisionRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetFirstWindowStatsigDecisionRequest | PlainMessage<_GetFirstWindowStatsigDecisionRequest> | undefined | null, b2: _GetFirstWindowStatsigDecisionRequest | PlainMessage<_GetFirstWindowStatsigDecisionRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetFirstWindowStatsigDecisionRequest as unknown as MessageType<_GetFirstWindowStatsigDecisionRequest>, a, b2);
  }
})();
export type GetFirstWindowStatsigDecisionRequest = InstanceType<typeof GetFirstWindowStatsigDecisionRequest$Runtime>;
var GetFirstWindowStatsigDecisionRequest: MessageType<GetFirstWindowStatsigDecisionRequest> = GetFirstWindowStatsigDecisionRequest$Runtime as unknown as MessageType<GetFirstWindowStatsigDecisionRequest>;
(GetFirstWindowStatsigDecisionRequest as MutableMessageType<GetFirstWindowStatsigDecisionRequest>).runtime = proto3;
(GetFirstWindowStatsigDecisionRequest as MutableMessageType<GetFirstWindowStatsigDecisionRequest>).typeName = "aiserver.v1.GetFirstWindowStatsigDecisionRequest";
(GetFirstWindowStatsigDecisionRequest as MutableMessageType<GetFirstWindowStatsigDecisionRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "operating_system", kind: "enum", T: proto3.getEnumType(ClientOS), opt: true }
]);
var GetFirstWindowStatsigDecisionResponse$Runtime = (() => class _GetFirstWindowStatsigDecisionResponse extends Message<_GetFirstWindowStatsigDecisionResponse> {
  declare variant: string;
  declare reason: string;
  constructor(data?: PartialMessage<_GetFirstWindowStatsigDecisionResponse>) {
    super();
    this.variant = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _GetFirstWindowStatsigDecisionResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetFirstWindowStatsigDecisionResponse {
    return new _GetFirstWindowStatsigDecisionResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetFirstWindowStatsigDecisionResponse {
    return new _GetFirstWindowStatsigDecisionResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetFirstWindowStatsigDecisionResponse {
    return new _GetFirstWindowStatsigDecisionResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetFirstWindowStatsigDecisionResponse | PlainMessage<_GetFirstWindowStatsigDecisionResponse> | undefined | null, b2: _GetFirstWindowStatsigDecisionResponse | PlainMessage<_GetFirstWindowStatsigDecisionResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetFirstWindowStatsigDecisionResponse as unknown as MessageType<_GetFirstWindowStatsigDecisionResponse>, a, b2);
  }
})();
export type GetFirstWindowStatsigDecisionResponse = InstanceType<typeof GetFirstWindowStatsigDecisionResponse$Runtime>;
var GetFirstWindowStatsigDecisionResponse: MessageType<GetFirstWindowStatsigDecisionResponse> = GetFirstWindowStatsigDecisionResponse$Runtime as unknown as MessageType<GetFirstWindowStatsigDecisionResponse>;
(GetFirstWindowStatsigDecisionResponse as MutableMessageType<GetFirstWindowStatsigDecisionResponse>).runtime = proto3;
(GetFirstWindowStatsigDecisionResponse as MutableMessageType<GetFirstWindowStatsigDecisionResponse>).typeName = "aiserver.v1.GetFirstWindowStatsigDecisionResponse";
(GetFirstWindowStatsigDecisionResponse as MutableMessageType<GetFirstWindowStatsigDecisionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "variant",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EventData$Runtime = (() => class _EventData extends Message<_EventData> {
  declare data: { case: "stringValue"; value: string } | { case: "intValue"; value: bigint } | { case: "boolValue"; value: boolean } | { case: "doubleValue"; value: number } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_EventData>) {
    super();
    this.data = { case: void 0 };
    proto3.util.initPartial(data, this as _EventData);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _EventData {
    return new _EventData().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _EventData {
    return new _EventData().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _EventData {
    return new _EventData().fromJsonString(jsonString, options2);
  }
  static equals(a: _EventData | PlainMessage<_EventData> | undefined | null, b2: _EventData | PlainMessage<_EventData> | undefined | null): boolean {
    return proto3.util.equals(_EventData as unknown as MessageType<_EventData>, a, b2);
  }
})();
export type EventData = InstanceType<typeof EventData$Runtime>;
var EventData: MessageType<EventData> = EventData$Runtime as unknown as MessageType<EventData>;
(EventData as MutableMessageType<EventData>).runtime = proto3;
(EventData as MutableMessageType<EventData>).typeName = "aiserver.v1.EventData";
(EventData as MutableMessageType<EventData>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "string_value", kind: "scalar", T: 9, oneof: "data" },
  { no: 2, name: "int_value", kind: "scalar", T: 3, oneof: "data" },
  { no: 3, name: "bool_value", kind: "scalar", T: 8, oneof: "data" },
  { no: 4, name: "double_value", kind: "scalar", T: 1, oneof: "data" }
]);
var AnalyticsEvent$Runtime = (() => class _AnalyticsEvent extends Message<_AnalyticsEvent> {
  declare eventName: string;
  declare eventData: { [key: string]: EventData };
  declare timestamp: bigint;
  constructor(data?: PartialMessage<_AnalyticsEvent>) {
    super();
    this.eventName = "";
    this.eventData = {};
    this.timestamp = protoInt64.zero;
    proto3.util.initPartial(data, this as _AnalyticsEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AnalyticsEvent {
    return new _AnalyticsEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AnalyticsEvent {
    return new _AnalyticsEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AnalyticsEvent {
    return new _AnalyticsEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _AnalyticsEvent | PlainMessage<_AnalyticsEvent> | undefined | null, b2: _AnalyticsEvent | PlainMessage<_AnalyticsEvent> | undefined | null): boolean {
    return proto3.util.equals(_AnalyticsEvent as unknown as MessageType<_AnalyticsEvent>, a, b2);
  }
})();
export type AnalyticsEvent = InstanceType<typeof AnalyticsEvent$Runtime>;
var AnalyticsEvent: MessageType<AnalyticsEvent> = AnalyticsEvent$Runtime as unknown as MessageType<AnalyticsEvent>;
(AnalyticsEvent as MutableMessageType<AnalyticsEvent>).runtime = proto3;
(AnalyticsEvent as MutableMessageType<AnalyticsEvent>).typeName = "aiserver.v1.AnalyticsEvent";
(AnalyticsEvent as MutableMessageType<AnalyticsEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "event_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "event_data", kind: "map", K: 9, V: { kind: "message", T: EventData } },
  {
    no: 3,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var TrackEventsRequest$Runtime = (() => class _TrackEventsRequest extends Message<_TrackEventsRequest> {
  declare events: AnalyticsEvent[];
  constructor(data?: PartialMessage<_TrackEventsRequest>) {
    super();
    this.events = [];
    proto3.util.initPartial(data, this as _TrackEventsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TrackEventsRequest {
    return new _TrackEventsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TrackEventsRequest {
    return new _TrackEventsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TrackEventsRequest {
    return new _TrackEventsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _TrackEventsRequest | PlainMessage<_TrackEventsRequest> | undefined | null, b2: _TrackEventsRequest | PlainMessage<_TrackEventsRequest> | undefined | null): boolean {
    return proto3.util.equals(_TrackEventsRequest as unknown as MessageType<_TrackEventsRequest>, a, b2);
  }
})();
export type TrackEventsRequest = InstanceType<typeof TrackEventsRequest$Runtime>;
var TrackEventsRequest: MessageType<TrackEventsRequest> = TrackEventsRequest$Runtime as unknown as MessageType<TrackEventsRequest>;
(TrackEventsRequest as MutableMessageType<TrackEventsRequest>).runtime = proto3;
(TrackEventsRequest as MutableMessageType<TrackEventsRequest>).typeName = "aiserver.v1.TrackEventsRequest";
(TrackEventsRequest as MutableMessageType<TrackEventsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "events", kind: "message", T: AnalyticsEvent, repeated: true }
]);
var TrackEventsResponse$Runtime = (() => class _TrackEventsResponse extends Message<_TrackEventsResponse> {
  constructor(data?: PartialMessage<_TrackEventsResponse>) {
    super();
    proto3.util.initPartial(data, this as _TrackEventsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TrackEventsResponse {
    return new _TrackEventsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TrackEventsResponse {
    return new _TrackEventsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TrackEventsResponse {
    return new _TrackEventsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _TrackEventsResponse | PlainMessage<_TrackEventsResponse> | undefined | null, b2: _TrackEventsResponse | PlainMessage<_TrackEventsResponse> | undefined | null): boolean {
    return proto3.util.equals(_TrackEventsResponse as unknown as MessageType<_TrackEventsResponse>, a, b2);
  }
})();
export type TrackEventsResponse = InstanceType<typeof TrackEventsResponse$Runtime>;
var TrackEventsResponse: MessageType<TrackEventsResponse> = TrackEventsResponse$Runtime as unknown as MessageType<TrackEventsResponse>;
(TrackEventsResponse as MutableMessageType<TrackEventsResponse>).runtime = proto3;
(TrackEventsResponse as MutableMessageType<TrackEventsResponse>).typeName = "aiserver.v1.TrackEventsResponse";
(TrackEventsResponse as MutableMessageType<TrackEventsResponse>).fields = proto3.util.newFieldList(() => []);
var BatchEvent$Runtime = (() => class _BatchEvent extends Message<_BatchEvent> {
  declare event: string;
  declare properties?: Struct;
  declare timestamp: bigint;
  declare userId?: string;
  declare anonymousId?: string;
  declare messageId?: string;
  declare context?: AnalyticsContext;
  constructor(data?: PartialMessage<_BatchEvent>) {
    super();
    this.event = "";
    this.timestamp = protoInt64.zero;
    proto3.util.initPartial(data, this as _BatchEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchEvent {
    return new _BatchEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchEvent {
    return new _BatchEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchEvent {
    return new _BatchEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchEvent | PlainMessage<_BatchEvent> | undefined | null, b2: _BatchEvent | PlainMessage<_BatchEvent> | undefined | null): boolean {
    return proto3.util.equals(_BatchEvent as unknown as MessageType<_BatchEvent>, a, b2);
  }
})();
export type BatchEvent = InstanceType<typeof BatchEvent$Runtime>;
var BatchEvent: MessageType<BatchEvent> = BatchEvent$Runtime as unknown as MessageType<BatchEvent>;
(BatchEvent as MutableMessageType<BatchEvent>).runtime = proto3;
(BatchEvent as MutableMessageType<BatchEvent>).typeName = "aiserver.v1.BatchEvent";
(BatchEvent as MutableMessageType<BatchEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "event",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "properties", kind: "message", T: Struct },
  {
    no: 3,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "user_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "anonymous_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "message_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "context", kind: "message", T: AnalyticsContext, opt: true }
]);
var AnalyticsContext$Runtime = (() => class _AnalyticsContext extends Message<_AnalyticsContext> {
  declare client?: ClientInfo;
  constructor(data?: PartialMessage<_AnalyticsContext>) {
    super();
    proto3.util.initPartial(data, this as _AnalyticsContext);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AnalyticsContext {
    return new _AnalyticsContext().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AnalyticsContext {
    return new _AnalyticsContext().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AnalyticsContext {
    return new _AnalyticsContext().fromJsonString(jsonString, options2);
  }
  static equals(a: _AnalyticsContext | PlainMessage<_AnalyticsContext> | undefined | null, b2: _AnalyticsContext | PlainMessage<_AnalyticsContext> | undefined | null): boolean {
    return proto3.util.equals(_AnalyticsContext as unknown as MessageType<_AnalyticsContext>, a, b2);
  }
})();
export type AnalyticsContext = InstanceType<typeof AnalyticsContext$Runtime>;
var AnalyticsContext: MessageType<AnalyticsContext> = AnalyticsContext$Runtime as unknown as MessageType<AnalyticsContext>;
(AnalyticsContext as MutableMessageType<AnalyticsContext>).runtime = proto3;
(AnalyticsContext as MutableMessageType<AnalyticsContext>).typeName = "aiserver.v1.AnalyticsContext";
(AnalyticsContext as MutableMessageType<AnalyticsContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "client", kind: "message", T: ClientInfo, opt: true }
]);
var ClientInfo$Runtime = (() => class _ClientInfo extends Message<_ClientInfo> {
  declare os?: string;
  declare arch?: string;
  declare osVersion?: string;
  declare version?: string;
  declare layout?: string;
  constructor(data?: PartialMessage<_ClientInfo>) {
    super();
    proto3.util.initPartial(data, this as _ClientInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ClientInfo {
    return new _ClientInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ClientInfo {
    return new _ClientInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ClientInfo {
    return new _ClientInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _ClientInfo | PlainMessage<_ClientInfo> | undefined | null, b2: _ClientInfo | PlainMessage<_ClientInfo> | undefined | null): boolean {
    return proto3.util.equals(_ClientInfo as unknown as MessageType<_ClientInfo>, a, b2);
  }
})();
export type ClientInfo = InstanceType<typeof ClientInfo$Runtime>;
var ClientInfo: MessageType<ClientInfo> = ClientInfo$Runtime as unknown as MessageType<ClientInfo>;
(ClientInfo as MutableMessageType<ClientInfo>).runtime = proto3;
(ClientInfo as MutableMessageType<ClientInfo>).typeName = "aiserver.v1.ClientInfo";
(ClientInfo as MutableMessageType<ClientInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "os", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "arch", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "os_version", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "version", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "layout", kind: "scalar", T: 9, opt: true }
]);
var BatchRequest$Runtime = (() => class _BatchRequest extends Message<_BatchRequest> {
  declare events: BatchEvent[];
  constructor(data?: PartialMessage<_BatchRequest>) {
    super();
    this.events = [];
    proto3.util.initPartial(data, this as _BatchRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchRequest {
    return new _BatchRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchRequest {
    return new _BatchRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchRequest {
    return new _BatchRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchRequest | PlainMessage<_BatchRequest> | undefined | null, b2: _BatchRequest | PlainMessage<_BatchRequest> | undefined | null): boolean {
    return proto3.util.equals(_BatchRequest as unknown as MessageType<_BatchRequest>, a, b2);
  }
})();
export type BatchRequest = InstanceType<typeof BatchRequest$Runtime>;
var BatchRequest: MessageType<BatchRequest> = BatchRequest$Runtime as unknown as MessageType<BatchRequest>;
(BatchRequest as MutableMessageType<BatchRequest>).runtime = proto3;
(BatchRequest as MutableMessageType<BatchRequest>).typeName = "aiserver.v1.BatchRequest";
(BatchRequest as MutableMessageType<BatchRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "events", kind: "message", T: BatchEvent, repeated: true }
]);
var BatchResponse$Runtime = (() => class _BatchResponse extends Message<_BatchResponse> {
  constructor(data?: PartialMessage<_BatchResponse>) {
    super();
    proto3.util.initPartial(data, this as _BatchResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BatchResponse {
    return new _BatchResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BatchResponse {
    return new _BatchResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BatchResponse {
    return new _BatchResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BatchResponse | PlainMessage<_BatchResponse> | undefined | null, b2: _BatchResponse | PlainMessage<_BatchResponse> | undefined | null): boolean {
    return proto3.util.equals(_BatchResponse as unknown as MessageType<_BatchResponse>, a, b2);
  }
})();
export type BatchResponse = InstanceType<typeof BatchResponse$Runtime>;
var BatchResponse: MessageType<BatchResponse> = BatchResponse$Runtime as unknown as MessageType<BatchResponse>;
(BatchResponse as MutableMessageType<BatchResponse>).runtime = proto3;
(BatchResponse as MutableMessageType<BatchResponse>).typeName = "aiserver.v1.BatchResponse";
(BatchResponse as MutableMessageType<BatchResponse>).fields = proto3.util.newFieldList(() => []);
var ClientLogEntry$Runtime = (() => class _ClientLogEntry extends Message<_ClientLogEntry> {
  declare level: ClientLogLevel;
  declare message: string;
  declare metadata: { [key: string]: string };
  declare timestamp: bigint;
  declare errorMessage?: string;
  declare errorStack?: string;
  declare key: string;
  constructor(data?: PartialMessage<_ClientLogEntry>) {
    super();
    this.level = ClientLogLevel.UNSPECIFIED;
    this.message = "";
    this.metadata = {};
    this.timestamp = protoInt64.zero;
    this.key = "";
    proto3.util.initPartial(data, this as _ClientLogEntry);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ClientLogEntry {
    return new _ClientLogEntry().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ClientLogEntry {
    return new _ClientLogEntry().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ClientLogEntry {
    return new _ClientLogEntry().fromJsonString(jsonString, options2);
  }
  static equals(a: _ClientLogEntry | PlainMessage<_ClientLogEntry> | undefined | null, b2: _ClientLogEntry | PlainMessage<_ClientLogEntry> | undefined | null): boolean {
    return proto3.util.equals(_ClientLogEntry as unknown as MessageType<_ClientLogEntry>, a, b2);
  }
})();
export type ClientLogEntry = InstanceType<typeof ClientLogEntry$Runtime>;
var ClientLogEntry: MessageType<ClientLogEntry> = ClientLogEntry$Runtime as unknown as MessageType<ClientLogEntry>;
(ClientLogEntry as MutableMessageType<ClientLogEntry>).runtime = proto3;
(ClientLogEntry as MutableMessageType<ClientLogEntry>).typeName = "aiserver.v1.ClientLogEntry";
(ClientLogEntry as MutableMessageType<ClientLogEntry>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "level", kind: "enum", T: proto3.getEnumType(ClientLogLevel) },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 4,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "error_stack", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubmitLogsRequest$Runtime = (() => class _SubmitLogsRequest extends Message<_SubmitLogsRequest> {
  declare logs: ClientLogEntry[];
  constructor(data?: PartialMessage<_SubmitLogsRequest>) {
    super();
    this.logs = [];
    proto3.util.initPartial(data, this as _SubmitLogsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubmitLogsRequest {
    return new _SubmitLogsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubmitLogsRequest {
    return new _SubmitLogsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubmitLogsRequest {
    return new _SubmitLogsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubmitLogsRequest | PlainMessage<_SubmitLogsRequest> | undefined | null, b2: _SubmitLogsRequest | PlainMessage<_SubmitLogsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitLogsRequest as unknown as MessageType<_SubmitLogsRequest>, a, b2);
  }
})();
export type SubmitLogsRequest = InstanceType<typeof SubmitLogsRequest$Runtime>;
var SubmitLogsRequest: MessageType<SubmitLogsRequest> = SubmitLogsRequest$Runtime as unknown as MessageType<SubmitLogsRequest>;
(SubmitLogsRequest as MutableMessageType<SubmitLogsRequest>).runtime = proto3;
(SubmitLogsRequest as MutableMessageType<SubmitLogsRequest>).typeName = "aiserver.v1.SubmitLogsRequest";
(SubmitLogsRequest as MutableMessageType<SubmitLogsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "logs", kind: "message", T: ClientLogEntry, repeated: true }
]);
var SubmitLogsResponse$Runtime = (() => class _SubmitLogsResponse extends Message<_SubmitLogsResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  declare logsProcessed: number;
  declare logsDropped: number;
  constructor(data?: PartialMessage<_SubmitLogsResponse>) {
    super();
    this.success = false;
    this.logsProcessed = 0;
    this.logsDropped = 0;
    proto3.util.initPartial(data, this as _SubmitLogsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubmitLogsResponse {
    return new _SubmitLogsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubmitLogsResponse {
    return new _SubmitLogsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubmitLogsResponse {
    return new _SubmitLogsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubmitLogsResponse | PlainMessage<_SubmitLogsResponse> | undefined | null, b2: _SubmitLogsResponse | PlainMessage<_SubmitLogsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitLogsResponse as unknown as MessageType<_SubmitLogsResponse>, a, b2);
  }
})();
export type SubmitLogsResponse = InstanceType<typeof SubmitLogsResponse$Runtime>;
var SubmitLogsResponse: MessageType<SubmitLogsResponse> = SubmitLogsResponse$Runtime as unknown as MessageType<SubmitLogsResponse>;
(SubmitLogsResponse as MutableMessageType<SubmitLogsResponse>).runtime = proto3;
(SubmitLogsResponse as MutableMessageType<SubmitLogsResponse>).typeName = "aiserver.v1.SubmitLogsResponse";
(SubmitLogsResponse as MutableMessageType<SubmitLogsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "error_message", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "logs_processed",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "logs_dropped",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var IngestConversationRequest$Runtime = (() => class _IngestConversationRequest extends Message<_IngestConversationRequest> {
  declare conversationId: string;
  declare transcript: string;
  declare transcriptJson?: string;
  declare mode?: string;
  declare model?: string;
  declare lastUpdatedAt: bigint;
  constructor(data?: PartialMessage<_IngestConversationRequest>) {
    super();
    this.conversationId = "";
    this.transcript = "";
    this.lastUpdatedAt = protoInt64.zero;
    proto3.util.initPartial(data, this as _IngestConversationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _IngestConversationRequest {
    return new _IngestConversationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _IngestConversationRequest {
    return new _IngestConversationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _IngestConversationRequest {
    return new _IngestConversationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _IngestConversationRequest | PlainMessage<_IngestConversationRequest> | undefined | null, b2: _IngestConversationRequest | PlainMessage<_IngestConversationRequest> | undefined | null): boolean {
    return proto3.util.equals(_IngestConversationRequest as unknown as MessageType<_IngestConversationRequest>, a, b2);
  }
})();
export type IngestConversationRequest = InstanceType<typeof IngestConversationRequest$Runtime>;
var IngestConversationRequest: MessageType<IngestConversationRequest> = IngestConversationRequest$Runtime as unknown as MessageType<IngestConversationRequest>;
(IngestConversationRequest as MutableMessageType<IngestConversationRequest>).runtime = proto3;
(IngestConversationRequest as MutableMessageType<IngestConversationRequest>).typeName = "aiserver.v1.IngestConversationRequest";
(IngestConversationRequest as MutableMessageType<IngestConversationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "transcript",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "transcript_json", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mode", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "last_updated_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var IngestConversationResponse$Runtime = (() => class _IngestConversationResponse extends Message<_IngestConversationResponse> {
  declare success: boolean;
  declare summary?: string;
  declare detailedSummary?: string;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_IngestConversationResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _IngestConversationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _IngestConversationResponse {
    return new _IngestConversationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _IngestConversationResponse {
    return new _IngestConversationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _IngestConversationResponse {
    return new _IngestConversationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _IngestConversationResponse | PlainMessage<_IngestConversationResponse> | undefined | null, b2: _IngestConversationResponse | PlainMessage<_IngestConversationResponse> | undefined | null): boolean {
    return proto3.util.equals(_IngestConversationResponse as unknown as MessageType<_IngestConversationResponse>, a, b2);
  }
})();
export type IngestConversationResponse = InstanceType<typeof IngestConversationResponse$Runtime>;
var IngestConversationResponse: MessageType<IngestConversationResponse> = IngestConversationResponse$Runtime as unknown as MessageType<IngestConversationResponse>;
(IngestConversationResponse as MutableMessageType<IngestConversationResponse>).runtime = proto3;
(IngestConversationResponse as MutableMessageType<IngestConversationResponse>).typeName = "aiserver.v1.IngestConversationResponse";
(IngestConversationResponse as MutableMessageType<IngestConversationResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "summary", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "detailed_summary", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var UploadIssueTraceRequest$Runtime = (() => class _UploadIssueTraceRequest extends Message<_UploadIssueTraceRequest> {
  declare token: string;
  declare payload: string;
  declare payloadHash: string;
  constructor(data?: PartialMessage<_UploadIssueTraceRequest>) {
    super();
    this.token = "";
    this.payload = "";
    this.payloadHash = "";
    proto3.util.initPartial(data, this as _UploadIssueTraceRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadIssueTraceRequest {
    return new _UploadIssueTraceRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadIssueTraceRequest {
    return new _UploadIssueTraceRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadIssueTraceRequest {
    return new _UploadIssueTraceRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadIssueTraceRequest | PlainMessage<_UploadIssueTraceRequest> | undefined | null, b2: _UploadIssueTraceRequest | PlainMessage<_UploadIssueTraceRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadIssueTraceRequest as unknown as MessageType<_UploadIssueTraceRequest>, a, b2);
  }
})();
export type UploadIssueTraceRequest = InstanceType<typeof UploadIssueTraceRequest$Runtime>;
var UploadIssueTraceRequest: MessageType<UploadIssueTraceRequest> = UploadIssueTraceRequest$Runtime as unknown as MessageType<UploadIssueTraceRequest>;
(UploadIssueTraceRequest as MutableMessageType<UploadIssueTraceRequest>).runtime = proto3;
(UploadIssueTraceRequest as MutableMessageType<UploadIssueTraceRequest>).typeName = "aiserver.v1.UploadIssueTraceRequest";
(UploadIssueTraceRequest as MutableMessageType<UploadIssueTraceRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "payload",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "payload_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UploadIssueTraceResponse$Runtime = (() => class _UploadIssueTraceResponse extends Message<_UploadIssueTraceResponse> {
  declare eventId: string;
  declare size: bigint;
  constructor(data?: PartialMessage<_UploadIssueTraceResponse>) {
    super();
    this.eventId = "";
    this.size = protoInt64.zero;
    proto3.util.initPartial(data, this as _UploadIssueTraceResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadIssueTraceResponse {
    return new _UploadIssueTraceResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadIssueTraceResponse {
    return new _UploadIssueTraceResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadIssueTraceResponse {
    return new _UploadIssueTraceResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadIssueTraceResponse | PlainMessage<_UploadIssueTraceResponse> | undefined | null, b2: _UploadIssueTraceResponse | PlainMessage<_UploadIssueTraceResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadIssueTraceResponse as unknown as MessageType<_UploadIssueTraceResponse>, a, b2);
  }
})();
export type UploadIssueTraceResponse = InstanceType<typeof UploadIssueTraceResponse$Runtime>;
var UploadIssueTraceResponse: MessageType<UploadIssueTraceResponse> = UploadIssueTraceResponse$Runtime as unknown as MessageType<UploadIssueTraceResponse>;
(UploadIssueTraceResponse as MutableMessageType<UploadIssueTraceResponse>).runtime = proto3;
(UploadIssueTraceResponse as MutableMessageType<UploadIssueTraceResponse>).typeName = "aiserver.v1.UploadIssueTraceResponse";
(UploadIssueTraceResponse as MutableMessageType<UploadIssueTraceResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "size",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var DownloadIssueTracesRequest$Runtime = (() => class _DownloadIssueTracesRequest extends Message<_DownloadIssueTracesRequest> {
  declare token: string;
  declare limit: number;
  constructor(data?: PartialMessage<_DownloadIssueTracesRequest>) {
    super();
    this.token = "";
    this.limit = 0;
    proto3.util.initPartial(data, this as _DownloadIssueTracesRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DownloadIssueTracesRequest {
    return new _DownloadIssueTracesRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DownloadIssueTracesRequest {
    return new _DownloadIssueTracesRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DownloadIssueTracesRequest {
    return new _DownloadIssueTracesRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DownloadIssueTracesRequest | PlainMessage<_DownloadIssueTracesRequest> | undefined | null, b2: _DownloadIssueTracesRequest | PlainMessage<_DownloadIssueTracesRequest> | undefined | null): boolean {
    return proto3.util.equals(_DownloadIssueTracesRequest as unknown as MessageType<_DownloadIssueTracesRequest>, a, b2);
  }
})();
export type DownloadIssueTracesRequest = InstanceType<typeof DownloadIssueTracesRequest$Runtime>;
var DownloadIssueTracesRequest: MessageType<DownloadIssueTracesRequest> = DownloadIssueTracesRequest$Runtime as unknown as MessageType<DownloadIssueTracesRequest>;
(DownloadIssueTracesRequest as MutableMessageType<DownloadIssueTracesRequest>).runtime = proto3;
(DownloadIssueTracesRequest as MutableMessageType<DownloadIssueTracesRequest>).typeName = "aiserver.v1.DownloadIssueTracesRequest";
(DownloadIssueTracesRequest as MutableMessageType<DownloadIssueTracesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "limit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var DownloadIssueTracesResponse$Runtime = (() => class _DownloadIssueTracesResponse extends Message<_DownloadIssueTracesResponse> {
  declare data: Uint8Array;
  declare totalTraces: number;
  declare totalBytes: bigint;
  constructor(data?: PartialMessage<_DownloadIssueTracesResponse>) {
    super();
    this.data = new Uint8Array(0);
    this.totalTraces = 0;
    this.totalBytes = protoInt64.zero;
    proto3.util.initPartial(data, this as _DownloadIssueTracesResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DownloadIssueTracesResponse {
    return new _DownloadIssueTracesResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DownloadIssueTracesResponse {
    return new _DownloadIssueTracesResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DownloadIssueTracesResponse {
    return new _DownloadIssueTracesResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DownloadIssueTracesResponse | PlainMessage<_DownloadIssueTracesResponse> | undefined | null, b2: _DownloadIssueTracesResponse | PlainMessage<_DownloadIssueTracesResponse> | undefined | null): boolean {
    return proto3.util.equals(_DownloadIssueTracesResponse as unknown as MessageType<_DownloadIssueTracesResponse>, a, b2);
  }
})();
export type DownloadIssueTracesResponse = InstanceType<typeof DownloadIssueTracesResponse$Runtime>;
var DownloadIssueTracesResponse: MessageType<DownloadIssueTracesResponse> = DownloadIssueTracesResponse$Runtime as unknown as MessageType<DownloadIssueTracesResponse>;
(DownloadIssueTracesResponse as MutableMessageType<DownloadIssueTracesResponse>).runtime = proto3;
(DownloadIssueTracesResponse as MutableMessageType<DownloadIssueTracesResponse>).typeName = "aiserver.v1.DownloadIssueTracesResponse";
(DownloadIssueTracesResponse as MutableMessageType<DownloadIssueTracesResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "total_traces",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);


export { ClientOS, ClientLogLevel, BootstrapStatsigRequest, BootstrapStatsigResponse, GetFirstWindowStatsigDecisionRequest, GetFirstWindowStatsigDecisionResponse, EventData, AnalyticsEvent, TrackEventsRequest, TrackEventsResponse, BatchEvent, AnalyticsContext, ClientInfo, BatchRequest, BatchResponse, ClientLogEntry, SubmitLogsRequest, SubmitLogsResponse, IngestConversationRequest, IngestConversationResponse, UploadIssueTraceRequest, UploadIssueTraceResponse, DownloadIssueTracesRequest, DownloadIssueTracesResponse };
