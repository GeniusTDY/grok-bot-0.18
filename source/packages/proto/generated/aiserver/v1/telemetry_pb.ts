/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:201218-202637
 * Region SHA-256: 121288b376596edb4bd6ba30de7c5e3d70ac3af1a7aecd37b8104839d69848c3
 * AI Server closure exports: 30 messages + 5 enums = 35
 */
import { Message, proto3, Duration, Timestamp, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type PerformanceEventType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
var PerformanceEventType: {
  "UNSPECIFIED": 0;
  "CLICK": 1;
  "POINTER": 2;
  "TOUCH": 3;
  "KEYDOWN": 4;
  "KEYUP": 5;
  "SCROLL": 6;
  "LONG_ANIMATION_FRAME": 7;
  "MOUSEDOWN": 8;
  "MOUSEUP": 9;
  0: "UNSPECIFIED";
  1: "CLICK";
  2: "POINTER";
  3: "TOUCH";
  4: "KEYDOWN";
  5: "KEYUP";
  6: "SCROLL";
  7: "LONG_ANIMATION_FRAME";
  8: "MOUSEDOWN";
  9: "MOUSEUP";
};
export type ProfileKind = 0 | 1 | 2 | 3;
var ProfileKind: {
  "UNSPECIFIED": 0;
  "WALL": 1;
  "ALLOCATION": 2;
  "CPU": 3;
  0: "UNSPECIFIED";
  1: "WALL";
  2: "ALLOCATION";
  3: "CPU";
};
export type InteractionType = 0 | 1 | 2;
var InteractionType: {
  "UNSPECIFIED": 0;
  "CLICK": 1;
  "KEYPRESS": 2;
  0: "UNSPECIFIED";
  1: "CLICK";
  2: "KEYPRESS";
};
export type SpanKind = 0 | 1 | 2 | 3 | 4 | 5;
var SpanKind: {
  "UNSPECIFIED": 0;
  "INTERNAL": 1;
  "SERVER": 2;
  "CLIENT": 3;
  "PRODUCER": 4;
  "CONSUMER": 5;
  0: "UNSPECIFIED";
  1: "INTERNAL";
  2: "SERVER";
  3: "CLIENT";
  4: "PRODUCER";
  5: "CONSUMER";
};
export type Status_StatusCode = 0 | 1 | 2;
var Status_StatusCode: {
  "UNSPECIFIED": 0;
  "OK": 1;
  "ERROR": 2;
  0: "UNSPECIFIED";
  1: "OK";
  2: "ERROR";
};
(function(PerformanceEventType2) {
  PerformanceEventType2[PerformanceEventType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PerformanceEventType2[PerformanceEventType2["CLICK"] = 1] = "CLICK";
  PerformanceEventType2[PerformanceEventType2["POINTER"] = 2] = "POINTER";
  PerformanceEventType2[PerformanceEventType2["TOUCH"] = 3] = "TOUCH";
  PerformanceEventType2[PerformanceEventType2["KEYDOWN"] = 4] = "KEYDOWN";
  PerformanceEventType2[PerformanceEventType2["KEYUP"] = 5] = "KEYUP";
  PerformanceEventType2[PerformanceEventType2["SCROLL"] = 6] = "SCROLL";
  PerformanceEventType2[PerformanceEventType2["LONG_ANIMATION_FRAME"] = 7] = "LONG_ANIMATION_FRAME";
  PerformanceEventType2[PerformanceEventType2["MOUSEDOWN"] = 8] = "MOUSEDOWN";
  PerformanceEventType2[PerformanceEventType2["MOUSEUP"] = 9] = "MOUSEUP";
})(PerformanceEventType! || (PerformanceEventType = {} as typeof PerformanceEventType));
proto3.util.setEnumType(PerformanceEventType, "aiserver.v1.PerformanceEventType", [
  { no: 0, name: "PERFORMANCE_EVENT_TYPE_UNSPECIFIED" },
  { no: 1, name: "PERFORMANCE_EVENT_TYPE_CLICK" },
  { no: 2, name: "PERFORMANCE_EVENT_TYPE_POINTER" },
  { no: 3, name: "PERFORMANCE_EVENT_TYPE_TOUCH" },
  { no: 4, name: "PERFORMANCE_EVENT_TYPE_KEYDOWN" },
  { no: 5, name: "PERFORMANCE_EVENT_TYPE_KEYUP" },
  { no: 6, name: "PERFORMANCE_EVENT_TYPE_SCROLL" },
  { no: 7, name: "PERFORMANCE_EVENT_TYPE_LONG_ANIMATION_FRAME" },
  { no: 8, name: "PERFORMANCE_EVENT_TYPE_MOUSEDOWN" },
  { no: 9, name: "PERFORMANCE_EVENT_TYPE_MOUSEUP" }
]);
(function(ProfileKind2) {
  ProfileKind2[ProfileKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ProfileKind2[ProfileKind2["WALL"] = 1] = "WALL";
  ProfileKind2[ProfileKind2["ALLOCATION"] = 2] = "ALLOCATION";
  ProfileKind2[ProfileKind2["CPU"] = 3] = "CPU";
})(ProfileKind! || (ProfileKind = {} as typeof ProfileKind));
proto3.util.setEnumType(ProfileKind, "aiserver.v1.ProfileKind", [
  { no: 0, name: "PROFILE_KIND_UNSPECIFIED" },
  { no: 1, name: "PROFILE_KIND_WALL" },
  { no: 2, name: "PROFILE_KIND_ALLOCATION" },
  { no: 3, name: "PROFILE_KIND_CPU" }
]);
(function(InteractionType2) {
  InteractionType2[InteractionType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InteractionType2[InteractionType2["CLICK"] = 1] = "CLICK";
  InteractionType2[InteractionType2["KEYPRESS"] = 2] = "KEYPRESS";
})(InteractionType! || (InteractionType = {} as typeof InteractionType));
proto3.util.setEnumType(InteractionType, "aiserver.v1.InteractionType", [
  { no: 0, name: "INTERACTION_TYPE_UNSPECIFIED" },
  { no: 1, name: "INTERACTION_TYPE_CLICK" },
  { no: 2, name: "INTERACTION_TYPE_KEYPRESS" }
]);
(function(SpanKind3) {
  SpanKind3[SpanKind3["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SpanKind3[SpanKind3["INTERNAL"] = 1] = "INTERNAL";
  SpanKind3[SpanKind3["SERVER"] = 2] = "SERVER";
  SpanKind3[SpanKind3["CLIENT"] = 3] = "CLIENT";
  SpanKind3[SpanKind3["PRODUCER"] = 4] = "PRODUCER";
  SpanKind3[SpanKind3["CONSUMER"] = 5] = "CONSUMER";
})(SpanKind! || (SpanKind = {} as typeof SpanKind));
proto3.util.setEnumType(SpanKind, "aiserver.v1.SpanKind", [
  { no: 0, name: "SPAN_KIND_UNSPECIFIED" },
  { no: 1, name: "SPAN_KIND_INTERNAL" },
  { no: 2, name: "SPAN_KIND_SERVER" },
  { no: 3, name: "SPAN_KIND_CLIENT" },
  { no: 4, name: "SPAN_KIND_PRODUCER" },
  { no: 5, name: "SPAN_KIND_CONSUMER" }
]);
var ReportInlineActionRequest$Runtime = (() => class _ReportInlineActionRequest extends Message<_ReportInlineActionRequest> {
  declare action: string;
  declare generationUuid: string;
  constructor(data?: PartialMessage<_ReportInlineActionRequest>) {
    super();
    this.action = "";
    this.generationUuid = "";
    proto3.util.initPartial(data, this as _ReportInlineActionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportInlineActionRequest {
    return new _ReportInlineActionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportInlineActionRequest {
    return new _ReportInlineActionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportInlineActionRequest {
    return new _ReportInlineActionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportInlineActionRequest | PlainMessage<_ReportInlineActionRequest> | undefined | null, b2: _ReportInlineActionRequest | PlainMessage<_ReportInlineActionRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReportInlineActionRequest as unknown as MessageType<_ReportInlineActionRequest>, a, b2);
  }
})();
export type ReportInlineActionRequest = InstanceType<typeof ReportInlineActionRequest$Runtime>;
var ReportInlineActionRequest: MessageType<ReportInlineActionRequest> = ReportInlineActionRequest$Runtime as unknown as MessageType<ReportInlineActionRequest>;
(ReportInlineActionRequest as MutableMessageType<ReportInlineActionRequest>).runtime = proto3;
(ReportInlineActionRequest as MutableMessageType<ReportInlineActionRequest>).typeName = "aiserver.v1.ReportInlineActionRequest";
(ReportInlineActionRequest as MutableMessageType<ReportInlineActionRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "generation_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReportInlineActionResponse$Runtime = (() => class _ReportInlineActionResponse extends Message<_ReportInlineActionResponse> {
  constructor(data?: PartialMessage<_ReportInlineActionResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReportInlineActionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportInlineActionResponse {
    return new _ReportInlineActionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportInlineActionResponse {
    return new _ReportInlineActionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportInlineActionResponse {
    return new _ReportInlineActionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportInlineActionResponse | PlainMessage<_ReportInlineActionResponse> | undefined | null, b2: _ReportInlineActionResponse | PlainMessage<_ReportInlineActionResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReportInlineActionResponse as unknown as MessageType<_ReportInlineActionResponse>, a, b2);
  }
})();
export type ReportInlineActionResponse = InstanceType<typeof ReportInlineActionResponse$Runtime>;
var ReportInlineActionResponse: MessageType<ReportInlineActionResponse> = ReportInlineActionResponse$Runtime as unknown as MessageType<ReportInlineActionResponse>;
(ReportInlineActionResponse as MutableMessageType<ReportInlineActionResponse>).runtime = proto3;
(ReportInlineActionResponse as MutableMessageType<ReportInlineActionResponse>).typeName = "aiserver.v1.ReportInlineActionResponse";
(ReportInlineActionResponse as MutableMessageType<ReportInlineActionResponse>).fields = proto3.util.newFieldList(() => []);
var ReportMetricsRequest$Runtime = (() => class _ReportMetricsRequest extends Message<_ReportMetricsRequest> {
  declare metrics: { [key: string]: ReportMetricsRequest_Metric };
  declare metricsList: ReportMetricsRequest_NamedMetric[];
  constructor(data?: PartialMessage<_ReportMetricsRequest>) {
    super();
    this.metrics = {};
    this.metricsList = [];
    proto3.util.initPartial(data, this as _ReportMetricsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportMetricsRequest {
    return new _ReportMetricsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportMetricsRequest {
    return new _ReportMetricsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportMetricsRequest {
    return new _ReportMetricsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportMetricsRequest | PlainMessage<_ReportMetricsRequest> | undefined | null, b2: _ReportMetricsRequest | PlainMessage<_ReportMetricsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReportMetricsRequest as unknown as MessageType<_ReportMetricsRequest>, a, b2);
  }
})();
export type ReportMetricsRequest = InstanceType<typeof ReportMetricsRequest$Runtime>;
var ReportMetricsRequest: MessageType<ReportMetricsRequest> = ReportMetricsRequest$Runtime as unknown as MessageType<ReportMetricsRequest>;
(ReportMetricsRequest as MutableMessageType<ReportMetricsRequest>).runtime = proto3;
(ReportMetricsRequest as MutableMessageType<ReportMetricsRequest>).typeName = "aiserver.v1.ReportMetricsRequest";
(ReportMetricsRequest as MutableMessageType<ReportMetricsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "metrics", kind: "map", K: 9, V: { kind: "message", T: ReportMetricsRequest_Metric } },
  { no: 2, name: "metrics_list", kind: "message", T: ReportMetricsRequest_NamedMetric, repeated: true }
]);
var ReportMetricsRequest_Metric$Runtime = (() => class _ReportMetricsRequest_Metric extends Message<_ReportMetricsRequest_Metric> {
  declare value?: number;
  declare tags: { [key: string]: string };
  constructor(data?: PartialMessage<_ReportMetricsRequest_Metric>) {
    super();
    this.tags = {};
    proto3.util.initPartial(data, this as _ReportMetricsRequest_Metric);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportMetricsRequest_Metric {
    return new _ReportMetricsRequest_Metric().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportMetricsRequest_Metric {
    return new _ReportMetricsRequest_Metric().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportMetricsRequest_Metric {
    return new _ReportMetricsRequest_Metric().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportMetricsRequest_Metric | PlainMessage<_ReportMetricsRequest_Metric> | undefined | null, b2: _ReportMetricsRequest_Metric | PlainMessage<_ReportMetricsRequest_Metric> | undefined | null): boolean {
    return proto3.util.equals(_ReportMetricsRequest_Metric as unknown as MessageType<_ReportMetricsRequest_Metric>, a, b2);
  }
})();
export type ReportMetricsRequest_Metric = InstanceType<typeof ReportMetricsRequest_Metric$Runtime>;
var ReportMetricsRequest_Metric: MessageType<ReportMetricsRequest_Metric> = ReportMetricsRequest_Metric$Runtime as unknown as MessageType<ReportMetricsRequest_Metric>;
(ReportMetricsRequest_Metric as MutableMessageType<ReportMetricsRequest_Metric>).runtime = proto3;
(ReportMetricsRequest_Metric as MutableMessageType<ReportMetricsRequest_Metric>).typeName = "aiserver.v1.ReportMetricsRequest.Metric";
(ReportMetricsRequest_Metric as MutableMessageType<ReportMetricsRequest_Metric>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 1, opt: true },
  { no: 2, name: "tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ReportMetricsRequest_NamedMetric$Runtime = (() => class _ReportMetricsRequest_NamedMetric extends Message<_ReportMetricsRequest_NamedMetric> {
  declare name: string;
  declare value?: number;
  declare tags: { [key: string]: string };
  constructor(data?: PartialMessage<_ReportMetricsRequest_NamedMetric>) {
    super();
    this.name = "";
    this.tags = {};
    proto3.util.initPartial(data, this as _ReportMetricsRequest_NamedMetric);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportMetricsRequest_NamedMetric {
    return new _ReportMetricsRequest_NamedMetric().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportMetricsRequest_NamedMetric {
    return new _ReportMetricsRequest_NamedMetric().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportMetricsRequest_NamedMetric {
    return new _ReportMetricsRequest_NamedMetric().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportMetricsRequest_NamedMetric | PlainMessage<_ReportMetricsRequest_NamedMetric> | undefined | null, b2: _ReportMetricsRequest_NamedMetric | PlainMessage<_ReportMetricsRequest_NamedMetric> | undefined | null): boolean {
    return proto3.util.equals(_ReportMetricsRequest_NamedMetric as unknown as MessageType<_ReportMetricsRequest_NamedMetric>, a, b2);
  }
})();
export type ReportMetricsRequest_NamedMetric = InstanceType<typeof ReportMetricsRequest_NamedMetric$Runtime>;
var ReportMetricsRequest_NamedMetric: MessageType<ReportMetricsRequest_NamedMetric> = ReportMetricsRequest_NamedMetric$Runtime as unknown as MessageType<ReportMetricsRequest_NamedMetric>;
(ReportMetricsRequest_NamedMetric as MutableMessageType<ReportMetricsRequest_NamedMetric>).runtime = proto3;
(ReportMetricsRequest_NamedMetric as MutableMessageType<ReportMetricsRequest_NamedMetric>).typeName = "aiserver.v1.ReportMetricsRequest.NamedMetric";
(ReportMetricsRequest_NamedMetric as MutableMessageType<ReportMetricsRequest_NamedMetric>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "value", kind: "scalar", T: 1, opt: true },
  { no: 3, name: "tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ReportMetricsResponse$Runtime = (() => class _ReportMetricsResponse extends Message<_ReportMetricsResponse> {
  constructor(data?: PartialMessage<_ReportMetricsResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReportMetricsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportMetricsResponse {
    return new _ReportMetricsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportMetricsResponse {
    return new _ReportMetricsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportMetricsResponse {
    return new _ReportMetricsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportMetricsResponse | PlainMessage<_ReportMetricsResponse> | undefined | null, b2: _ReportMetricsResponse | PlainMessage<_ReportMetricsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReportMetricsResponse as unknown as MessageType<_ReportMetricsResponse>, a, b2);
  }
})();
export type ReportMetricsResponse = InstanceType<typeof ReportMetricsResponse$Runtime>;
var ReportMetricsResponse: MessageType<ReportMetricsResponse> = ReportMetricsResponse$Runtime as unknown as MessageType<ReportMetricsResponse>;
(ReportMetricsResponse as MutableMessageType<ReportMetricsResponse>).runtime = proto3;
(ReportMetricsResponse as MutableMessageType<ReportMetricsResponse>).typeName = "aiserver.v1.ReportMetricsResponse";
(ReportMetricsResponse as MutableMessageType<ReportMetricsResponse>).fields = proto3.util.newFieldList(() => []);
var ScriptTiming$Runtime = (() => class _ScriptTiming extends Message<_ScriptTiming> {
  declare name: string;
  declare startTime: number;
  declare duration: number;
  declare executionStart: number;
  declare forcedStyleAndLayoutDuration: number;
  declare pauseDuration: number;
  declare sourceUrl: string;
  declare sourceFunctionName: string;
  declare sourceCharPosition: number;
  declare invoker?: string;
  declare invokerType: string;
  declare windowAttribution: string;
  constructor(data?: PartialMessage<_ScriptTiming>) {
    super();
    this.name = "";
    this.startTime = 0;
    this.duration = 0;
    this.executionStart = 0;
    this.forcedStyleAndLayoutDuration = 0;
    this.pauseDuration = 0;
    this.sourceUrl = "";
    this.sourceFunctionName = "";
    this.sourceCharPosition = 0;
    this.invokerType = "";
    this.windowAttribution = "";
    proto3.util.initPartial(data, this as _ScriptTiming);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScriptTiming {
    return new _ScriptTiming().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScriptTiming {
    return new _ScriptTiming().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScriptTiming {
    return new _ScriptTiming().fromJsonString(jsonString, options);
  }
  static equals(a: _ScriptTiming | PlainMessage<_ScriptTiming> | undefined | null, b2: _ScriptTiming | PlainMessage<_ScriptTiming> | undefined | null): boolean {
    return proto3.util.equals(_ScriptTiming as unknown as MessageType<_ScriptTiming>, a, b2);
  }
})();
export type ScriptTiming = InstanceType<typeof ScriptTiming$Runtime>;
var ScriptTiming: MessageType<ScriptTiming> = ScriptTiming$Runtime as unknown as MessageType<ScriptTiming>;
(ScriptTiming as MutableMessageType<ScriptTiming>).runtime = proto3;
(ScriptTiming as MutableMessageType<ScriptTiming>).typeName = "aiserver.v1.ScriptTiming";
(ScriptTiming as MutableMessageType<ScriptTiming>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_time",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "duration",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 4,
    name: "execution_start",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 5,
    name: "forced_style_and_layout_duration",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 6,
    name: "pause_duration",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 7,
    name: "source_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "source_function_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "source_char_position",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 10, name: "invoker", kind: "scalar", T: 9, opt: true },
  {
    no: 11,
    name: "invoker_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "window_attribution",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PerformanceEvent$Runtime = (() => class _PerformanceEvent extends Message<_PerformanceEvent> {
  declare eventType: PerformanceEventType;
  declare timestamp?: Timestamp;
  declare performanceTimestamp: number;
  declare duration?: number;
  declare targetElement?: string;
  declare targetClass?: string;
  declare targetId?: string;
  declare targetAriaId?: string;
  declare clientX?: number;
  declare clientY?: number;
  declare key?: string;
  declare code?: string;
  declare ctrlKey?: boolean;
  declare altKey?: boolean;
  declare shiftKey?: boolean;
  declare metaKey?: boolean;
  declare scrollX?: number;
  declare scrollY?: number;
  declare scrollDeltaX?: number;
  declare scrollDeltaY?: number;
  declare renderStart?: number;
  declare styleAndLayoutStart?: number;
  declare firstUiEventTimestamp?: number;
  declare blockingDuration?: number;
  declare scripts: ScriptTiming[];
  declare metadata: { [key: string]: string };
  constructor(data?: PartialMessage<_PerformanceEvent>) {
    super();
    this.eventType = PerformanceEventType.UNSPECIFIED;
    this.performanceTimestamp = 0;
    this.scripts = [];
    this.metadata = {};
    proto3.util.initPartial(data, this as _PerformanceEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PerformanceEvent {
    return new _PerformanceEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PerformanceEvent {
    return new _PerformanceEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PerformanceEvent {
    return new _PerformanceEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _PerformanceEvent | PlainMessage<_PerformanceEvent> | undefined | null, b2: _PerformanceEvent | PlainMessage<_PerformanceEvent> | undefined | null): boolean {
    return proto3.util.equals(_PerformanceEvent as unknown as MessageType<_PerformanceEvent>, a, b2);
  }
})();
export type PerformanceEvent = InstanceType<typeof PerformanceEvent$Runtime>;
var PerformanceEvent: MessageType<PerformanceEvent> = PerformanceEvent$Runtime as unknown as MessageType<PerformanceEvent>;
(PerformanceEvent as MutableMessageType<PerformanceEvent>).runtime = proto3;
(PerformanceEvent as MutableMessageType<PerformanceEvent>).typeName = "aiserver.v1.PerformanceEvent";
(PerformanceEvent as MutableMessageType<PerformanceEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "event_type", kind: "enum", T: proto3.getEnumType(PerformanceEventType) },
  { no: 2, name: "timestamp", kind: "message", T: Timestamp },
  {
    no: 3,
    name: "performance_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 4, name: "duration", kind: "scalar", T: 1, opt: true },
  { no: 5, name: "target_element", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "target_class", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "target_id", kind: "scalar", T: 9, opt: true },
  { no: 26, name: "target_aria_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "client_x", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "client_y", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "key", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "code", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "ctrl_key", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "alt_key", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "shift_key", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "meta_key", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "scroll_x", kind: "scalar", T: 1, opt: true },
  { no: 17, name: "scroll_y", kind: "scalar", T: 1, opt: true },
  { no: 18, name: "scroll_delta_x", kind: "scalar", T: 1, opt: true },
  { no: 19, name: "scroll_delta_y", kind: "scalar", T: 1, opt: true },
  { no: 21, name: "render_start", kind: "scalar", T: 1, opt: true },
  { no: 22, name: "style_and_layout_start", kind: "scalar", T: 1, opt: true },
  { no: 23, name: "first_ui_event_timestamp", kind: "scalar", T: 1, opt: true },
  { no: 24, name: "blocking_duration", kind: "scalar", T: 1, opt: true },
  { no: 25, name: "scripts", kind: "message", T: ScriptTiming, repeated: true },
  { no: 20, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var SystemMetadata$Runtime = (() => class _SystemMetadata extends Message<_SystemMetadata> {
  declare timestamp?: Timestamp;
  declare memoryUsedMb?: number;
  declare memoryTotalMb?: number;
  declare cpuUsagePercent?: number;
  declare activeTabsCount?: number;
  declare openEditorsCount?: number;
  declare windowFocused?: boolean;
  declare windowSize?: string;
  declare additionalMetadata: { [key: string]: string };
  constructor(data?: PartialMessage<_SystemMetadata>) {
    super();
    this.additionalMetadata = {};
    proto3.util.initPartial(data, this as _SystemMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SystemMetadata {
    return new _SystemMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SystemMetadata {
    return new _SystemMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SystemMetadata {
    return new _SystemMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _SystemMetadata | PlainMessage<_SystemMetadata> | undefined | null, b2: _SystemMetadata | PlainMessage<_SystemMetadata> | undefined | null): boolean {
    return proto3.util.equals(_SystemMetadata as unknown as MessageType<_SystemMetadata>, a, b2);
  }
})();
export type SystemMetadata = InstanceType<typeof SystemMetadata$Runtime>;
var SystemMetadata: MessageType<SystemMetadata> = SystemMetadata$Runtime as unknown as MessageType<SystemMetadata>;
(SystemMetadata as MutableMessageType<SystemMetadata>).runtime = proto3;
(SystemMetadata as MutableMessageType<SystemMetadata>).typeName = "aiserver.v1.SystemMetadata";
(SystemMetadata as MutableMessageType<SystemMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  { no: 2, name: "memory_used_mb", kind: "scalar", T: 1, opt: true },
  { no: 3, name: "memory_total_mb", kind: "scalar", T: 1, opt: true },
  { no: 4, name: "cpu_usage_percent", kind: "scalar", T: 1, opt: true },
  { no: 5, name: "active_tabs_count", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "open_editors_count", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "window_focused", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "window_size", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "additional_metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var SubmitPerformanceEventsRequest$Runtime = (() => class _SubmitPerformanceEventsRequest extends Message<_SubmitPerformanceEventsRequest> {
  declare sessionId: string;
  declare events: PerformanceEvent[];
  declare systemMetadata?: SystemMetadata;
  declare clientVersion: string;
  declare clientCommit: string;
  declare platformTags: { [key: string]: string };
  declare windowType?: string;
  declare metrics: PerformanceMetric[];
  constructor(data?: PartialMessage<_SubmitPerformanceEventsRequest>) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    this.metrics = [];
    proto3.util.initPartial(data, this as _SubmitPerformanceEventsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitPerformanceEventsRequest {
    return new _SubmitPerformanceEventsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitPerformanceEventsRequest {
    return new _SubmitPerformanceEventsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitPerformanceEventsRequest {
    return new _SubmitPerformanceEventsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitPerformanceEventsRequest | PlainMessage<_SubmitPerformanceEventsRequest> | undefined | null, b2: _SubmitPerformanceEventsRequest | PlainMessage<_SubmitPerformanceEventsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitPerformanceEventsRequest as unknown as MessageType<_SubmitPerformanceEventsRequest>, a, b2);
  }
})();
export type SubmitPerformanceEventsRequest = InstanceType<typeof SubmitPerformanceEventsRequest$Runtime>;
var SubmitPerformanceEventsRequest: MessageType<SubmitPerformanceEventsRequest> = SubmitPerformanceEventsRequest$Runtime as unknown as MessageType<SubmitPerformanceEventsRequest>;
(SubmitPerformanceEventsRequest as MutableMessageType<SubmitPerformanceEventsRequest>).runtime = proto3;
(SubmitPerformanceEventsRequest as MutableMessageType<SubmitPerformanceEventsRequest>).typeName = "aiserver.v1.SubmitPerformanceEventsRequest";
(SubmitPerformanceEventsRequest as MutableMessageType<SubmitPerformanceEventsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "events", kind: "message", T: PerformanceEvent, repeated: true },
  { no: 3, name: "system_metadata", kind: "message", T: SystemMetadata, opt: true },
  {
    no: 4,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "client_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "platform_tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 7, name: "window_type", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "metrics", kind: "message", T: PerformanceMetric, repeated: true }
]);
var SubmitPerformanceEventsResponse$Runtime = (() => class _SubmitPerformanceEventsResponse extends Message<_SubmitPerformanceEventsResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  declare eventsProcessed: number;
  constructor(data?: PartialMessage<_SubmitPerformanceEventsResponse>) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    proto3.util.initPartial(data, this as _SubmitPerformanceEventsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitPerformanceEventsResponse {
    return new _SubmitPerformanceEventsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitPerformanceEventsResponse {
    return new _SubmitPerformanceEventsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitPerformanceEventsResponse {
    return new _SubmitPerformanceEventsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitPerformanceEventsResponse | PlainMessage<_SubmitPerformanceEventsResponse> | undefined | null, b2: _SubmitPerformanceEventsResponse | PlainMessage<_SubmitPerformanceEventsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitPerformanceEventsResponse as unknown as MessageType<_SubmitPerformanceEventsResponse>, a, b2);
  }
})();
export type SubmitPerformanceEventsResponse = InstanceType<typeof SubmitPerformanceEventsResponse$Runtime>;
var SubmitPerformanceEventsResponse: MessageType<SubmitPerformanceEventsResponse> = SubmitPerformanceEventsResponse$Runtime as unknown as MessageType<SubmitPerformanceEventsResponse>;
(SubmitPerformanceEventsResponse as MutableMessageType<SubmitPerformanceEventsResponse>).runtime = proto3;
(SubmitPerformanceEventsResponse as MutableMessageType<SubmitPerformanceEventsResponse>).typeName = "aiserver.v1.SubmitPerformanceEventsResponse";
(SubmitPerformanceEventsResponse as MutableMessageType<SubmitPerformanceEventsResponse>).fields = proto3.util.newFieldList(() => [
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
    name: "events_processed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CapturedProfile$Runtime = (() => class _CapturedProfile extends Message<_CapturedProfile> {
  declare timestamp?: Timestamp;
  declare duration?: Duration;
  declare profileData: Uint8Array;
  declare profileConfigId: string;
  declare profileKind: ProfileKind;
  declare tags: { [key: string]: string };
  constructor(data?: PartialMessage<_CapturedProfile>) {
    super();
    this.profileData = new Uint8Array(0);
    this.profileConfigId = "";
    this.profileKind = ProfileKind.UNSPECIFIED;
    this.tags = {};
    proto3.util.initPartial(data, this as _CapturedProfile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CapturedProfile {
    return new _CapturedProfile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CapturedProfile {
    return new _CapturedProfile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CapturedProfile {
    return new _CapturedProfile().fromJsonString(jsonString, options);
  }
  static equals(a: _CapturedProfile | PlainMessage<_CapturedProfile> | undefined | null, b2: _CapturedProfile | PlainMessage<_CapturedProfile> | undefined | null): boolean {
    return proto3.util.equals(_CapturedProfile as unknown as MessageType<_CapturedProfile>, a, b2);
  }
})();
export type CapturedProfile = InstanceType<typeof CapturedProfile$Runtime>;
var CapturedProfile: MessageType<CapturedProfile> = CapturedProfile$Runtime as unknown as MessageType<CapturedProfile>;
(CapturedProfile as MutableMessageType<CapturedProfile>).runtime = proto3;
(CapturedProfile as MutableMessageType<CapturedProfile>).typeName = "aiserver.v1.CapturedProfile";
(CapturedProfile as MutableMessageType<CapturedProfile>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  { no: 2, name: "duration", kind: "message", T: Duration },
  {
    no: 3,
    name: "profile_data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 4,
    name: "profile_config_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "profile_kind", kind: "enum", T: proto3.getEnumType(ProfileKind) },
  { no: 6, name: "tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var Interaction$Runtime = (() => class _Interaction extends Message<_Interaction> {
  declare id: string;
  declare type: InteractionType;
  declare performanceStartTimestamp: number;
  declare performanceEndTimestamp: number;
  constructor(data?: PartialMessage<_Interaction>) {
    super();
    this.id = "";
    this.type = InteractionType.UNSPECIFIED;
    this.performanceStartTimestamp = 0;
    this.performanceEndTimestamp = 0;
    proto3.util.initPartial(data, this as _Interaction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Interaction {
    return new _Interaction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Interaction {
    return new _Interaction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Interaction {
    return new _Interaction().fromJsonString(jsonString, options);
  }
  static equals(a: _Interaction | PlainMessage<_Interaction> | undefined | null, b2: _Interaction | PlainMessage<_Interaction> | undefined | null): boolean {
    return proto3.util.equals(_Interaction as unknown as MessageType<_Interaction>, a, b2);
  }
})();
export type Interaction = InstanceType<typeof Interaction$Runtime>;
var Interaction: MessageType<Interaction> = Interaction$Runtime as unknown as MessageType<Interaction>;
(Interaction as MutableMessageType<Interaction>).runtime = proto3;
(Interaction as MutableMessageType<Interaction>).typeName = "aiserver.v1.Interaction";
(Interaction as MutableMessageType<Interaction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(InteractionType) },
  {
    no: 3,
    name: "performance_start_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 4,
    name: "performance_end_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var CapturedWebProfile$Runtime = (() => class _CapturedWebProfile extends Message<_CapturedWebProfile> {
  declare timestamp?: Timestamp;
  declare traceData: Uint8Array;
  declare tags: { [key: string]: string };
  constructor(data?: PartialMessage<_CapturedWebProfile>) {
    super();
    this.traceData = new Uint8Array(0);
    this.tags = {};
    proto3.util.initPartial(data, this as _CapturedWebProfile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CapturedWebProfile {
    return new _CapturedWebProfile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CapturedWebProfile {
    return new _CapturedWebProfile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CapturedWebProfile {
    return new _CapturedWebProfile().fromJsonString(jsonString, options);
  }
  static equals(a: _CapturedWebProfile | PlainMessage<_CapturedWebProfile> | undefined | null, b2: _CapturedWebProfile | PlainMessage<_CapturedWebProfile> | undefined | null): boolean {
    return proto3.util.equals(_CapturedWebProfile as unknown as MessageType<_CapturedWebProfile>, a, b2);
  }
})();
export type CapturedWebProfile = InstanceType<typeof CapturedWebProfile$Runtime>;
var CapturedWebProfile: MessageType<CapturedWebProfile> = CapturedWebProfile$Runtime as unknown as MessageType<CapturedWebProfile>;
(CapturedWebProfile as MutableMessageType<CapturedWebProfile>).runtime = proto3;
(CapturedWebProfile as MutableMessageType<CapturedWebProfile>).typeName = "aiserver.v1.CapturedWebProfile";
(CapturedWebProfile as MutableMessageType<CapturedWebProfile>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  {
    no: 3,
    name: "trace_data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 4, name: "tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var SubmitProfileRequest$Runtime = (() => class _SubmitProfileRequest extends Message<_SubmitProfileRequest> {
  declare profiles: CapturedProfile[];
  constructor(data?: PartialMessage<_SubmitProfileRequest>) {
    super();
    this.profiles = [];
    proto3.util.initPartial(data, this as _SubmitProfileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitProfileRequest {
    return new _SubmitProfileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitProfileRequest {
    return new _SubmitProfileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitProfileRequest {
    return new _SubmitProfileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitProfileRequest | PlainMessage<_SubmitProfileRequest> | undefined | null, b2: _SubmitProfileRequest | PlainMessage<_SubmitProfileRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitProfileRequest as unknown as MessageType<_SubmitProfileRequest>, a, b2);
  }
})();
export type SubmitProfileRequest = InstanceType<typeof SubmitProfileRequest$Runtime>;
var SubmitProfileRequest: MessageType<SubmitProfileRequest> = SubmitProfileRequest$Runtime as unknown as MessageType<SubmitProfileRequest>;
(SubmitProfileRequest as MutableMessageType<SubmitProfileRequest>).runtime = proto3;
(SubmitProfileRequest as MutableMessageType<SubmitProfileRequest>).typeName = "aiserver.v1.SubmitProfileRequest";
(SubmitProfileRequest as MutableMessageType<SubmitProfileRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "profiles", kind: "message", T: CapturedProfile, repeated: true }
]);
var SubmitProfileResponse$Runtime = (() => class _SubmitProfileResponse extends Message<_SubmitProfileResponse> {
  declare profileIds: string[];
  constructor(data?: PartialMessage<_SubmitProfileResponse>) {
    super();
    this.profileIds = [];
    proto3.util.initPartial(data, this as _SubmitProfileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitProfileResponse {
    return new _SubmitProfileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitProfileResponse {
    return new _SubmitProfileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitProfileResponse {
    return new _SubmitProfileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitProfileResponse | PlainMessage<_SubmitProfileResponse> | undefined | null, b2: _SubmitProfileResponse | PlainMessage<_SubmitProfileResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitProfileResponse as unknown as MessageType<_SubmitProfileResponse>, a, b2);
  }
})();
export type SubmitProfileResponse = InstanceType<typeof SubmitProfileResponse$Runtime>;
var SubmitProfileResponse: MessageType<SubmitProfileResponse> = SubmitProfileResponse$Runtime as unknown as MessageType<SubmitProfileResponse>;
(SubmitProfileResponse as MutableMessageType<SubmitProfileResponse>).runtime = proto3;
(SubmitProfileResponse as MutableMessageType<SubmitProfileResponse>).typeName = "aiserver.v1.SubmitProfileResponse";
(SubmitProfileResponse as MutableMessageType<SubmitProfileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "profile_ids", kind: "scalar", T: 9, repeated: true }
]);
var SubmitInteractionWindowRequest$Runtime = (() => class _SubmitInteractionWindowRequest extends Message<_SubmitInteractionWindowRequest> {
  declare timeOrigin?: Timestamp;
  declare webProfile?: CapturedWebProfile;
  declare interactions: Interaction[];
  declare sessionId: string;
  constructor(data?: PartialMessage<_SubmitInteractionWindowRequest>) {
    super();
    this.interactions = [];
    this.sessionId = "";
    proto3.util.initPartial(data, this as _SubmitInteractionWindowRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitInteractionWindowRequest {
    return new _SubmitInteractionWindowRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitInteractionWindowRequest {
    return new _SubmitInteractionWindowRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitInteractionWindowRequest {
    return new _SubmitInteractionWindowRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitInteractionWindowRequest | PlainMessage<_SubmitInteractionWindowRequest> | undefined | null, b2: _SubmitInteractionWindowRequest | PlainMessage<_SubmitInteractionWindowRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitInteractionWindowRequest as unknown as MessageType<_SubmitInteractionWindowRequest>, a, b2);
  }
})();
export type SubmitInteractionWindowRequest = InstanceType<typeof SubmitInteractionWindowRequest$Runtime>;
var SubmitInteractionWindowRequest: MessageType<SubmitInteractionWindowRequest> = SubmitInteractionWindowRequest$Runtime as unknown as MessageType<SubmitInteractionWindowRequest>;
(SubmitInteractionWindowRequest as MutableMessageType<SubmitInteractionWindowRequest>).runtime = proto3;
(SubmitInteractionWindowRequest as MutableMessageType<SubmitInteractionWindowRequest>).typeName = "aiserver.v1.SubmitInteractionWindowRequest";
(SubmitInteractionWindowRequest as MutableMessageType<SubmitInteractionWindowRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "time_origin", kind: "message", T: Timestamp },
  { no: 2, name: "web_profile", kind: "message", T: CapturedWebProfile },
  { no: 3, name: "interactions", kind: "message", T: Interaction, repeated: true },
  {
    no: 4,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubmitInteractionWindowResponse$Runtime = (() => class _SubmitInteractionWindowResponse extends Message<_SubmitInteractionWindowResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_SubmitInteractionWindowResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _SubmitInteractionWindowResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitInteractionWindowResponse {
    return new _SubmitInteractionWindowResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitInteractionWindowResponse {
    return new _SubmitInteractionWindowResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitInteractionWindowResponse {
    return new _SubmitInteractionWindowResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitInteractionWindowResponse | PlainMessage<_SubmitInteractionWindowResponse> | undefined | null, b2: _SubmitInteractionWindowResponse | PlainMessage<_SubmitInteractionWindowResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitInteractionWindowResponse as unknown as MessageType<_SubmitInteractionWindowResponse>, a, b2);
  }
})();
export type SubmitInteractionWindowResponse = InstanceType<typeof SubmitInteractionWindowResponse$Runtime>;
var SubmitInteractionWindowResponse: MessageType<SubmitInteractionWindowResponse> = SubmitInteractionWindowResponse$Runtime as unknown as MessageType<SubmitInteractionWindowResponse>;
(SubmitInteractionWindowResponse as MutableMessageType<SubmitInteractionWindowResponse>).runtime = proto3;
(SubmitInteractionWindowResponse as MutableMessageType<SubmitInteractionWindowResponse>).typeName = "aiserver.v1.SubmitInteractionWindowResponse";
(SubmitInteractionWindowResponse as MutableMessageType<SubmitInteractionWindowResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var PerformanceMetric$Runtime = (() => class _PerformanceMetric extends Message<_PerformanceMetric> {
  declare timestamp?: Timestamp;
  declare name: string;
  declare value: number;
  declare unit?: string;
  declare metadata: { [key: string]: string };
  constructor(data?: PartialMessage<_PerformanceMetric>) {
    super();
    this.name = "";
    this.value = 0;
    this.metadata = {};
    proto3.util.initPartial(data, this as _PerformanceMetric);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PerformanceMetric {
    return new _PerformanceMetric().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PerformanceMetric {
    return new _PerformanceMetric().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PerformanceMetric {
    return new _PerformanceMetric().fromJsonString(jsonString, options);
  }
  static equals(a: _PerformanceMetric | PlainMessage<_PerformanceMetric> | undefined | null, b2: _PerformanceMetric | PlainMessage<_PerformanceMetric> | undefined | null): boolean {
    return proto3.util.equals(_PerformanceMetric as unknown as MessageType<_PerformanceMetric>, a, b2);
  }
})();
export type PerformanceMetric = InstanceType<typeof PerformanceMetric$Runtime>;
var PerformanceMetric: MessageType<PerformanceMetric> = PerformanceMetric$Runtime as unknown as MessageType<PerformanceMetric>;
(PerformanceMetric as MutableMessageType<PerformanceMetric>).runtime = proto3;
(PerformanceMetric as MutableMessageType<PerformanceMetric>).typeName = "aiserver.v1.PerformanceMetric";
(PerformanceMetric as MutableMessageType<PerformanceMetric>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Timestamp },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "value",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 4, name: "unit", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var TraceSpan$Runtime = (() => class _TraceSpan extends Message<_TraceSpan> {
  declare traceId: string;
  declare spanId: string;
  declare parentSpanId?: string;
  declare name: string;
  declare startTime?: Timestamp;
  declare endTime?: Timestamp;
  declare attributes: { [key: string]: string };
  declare error?: boolean;
  declare traceState?: string;
  declare flags?: number;
  declare kind?: SpanKind;
  declare status?: Status;
  declare links: TraceLink[];
  constructor(data?: PartialMessage<_TraceSpan>) {
    super();
    this.traceId = "";
    this.spanId = "";
    this.name = "";
    this.attributes = {};
    this.links = [];
    proto3.util.initPartial(data, this as _TraceSpan);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TraceSpan {
    return new _TraceSpan().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TraceSpan {
    return new _TraceSpan().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TraceSpan {
    return new _TraceSpan().fromJsonString(jsonString, options);
  }
  static equals(a: _TraceSpan | PlainMessage<_TraceSpan> | undefined | null, b2: _TraceSpan | PlainMessage<_TraceSpan> | undefined | null): boolean {
    return proto3.util.equals(_TraceSpan as unknown as MessageType<_TraceSpan>, a, b2);
  }
})();
export type TraceSpan = InstanceType<typeof TraceSpan$Runtime>;
var TraceSpan: MessageType<TraceSpan> = TraceSpan$Runtime as unknown as MessageType<TraceSpan>;
(TraceSpan as MutableMessageType<TraceSpan>).runtime = proto3;
(TraceSpan as MutableMessageType<TraceSpan>).typeName = "aiserver.v1.TraceSpan";
(TraceSpan as MutableMessageType<TraceSpan>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "trace_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "parent_span_id", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "start_time", kind: "message", T: Timestamp },
  { no: 6, name: "end_time", kind: "message", T: Timestamp },
  { no: 7, name: "attributes", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 8, name: "error", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "trace_state", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "flags", kind: "scalar", T: 13, opt: true },
  { no: 11, name: "kind", kind: "enum", T: proto3.getEnumType(SpanKind), opt: true },
  { no: 12, name: "status", kind: "message", T: Status, opt: true },
  { no: 13, name: "links", kind: "message", T: TraceLink, repeated: true }
]);
var Status$Runtime = (() => class _Status extends Message<_Status> {
  declare message: string;
  declare code: Status_StatusCode;
  constructor(data?: PartialMessage<_Status>) {
    super();
    this.message = "";
    this.code = Status_StatusCode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _Status);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Status {
    return new _Status().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Status {
    return new _Status().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Status {
    return new _Status().fromJsonString(jsonString, options);
  }
  static equals(a: _Status | PlainMessage<_Status> | undefined | null, b2: _Status | PlainMessage<_Status> | undefined | null): boolean {
    return proto3.util.equals(_Status as unknown as MessageType<_Status>, a, b2);
  }
})();
export type Status = InstanceType<typeof Status$Runtime>;
var Status: MessageType<Status> = Status$Runtime as unknown as MessageType<Status>;
(Status as MutableMessageType<Status>).runtime = proto3;
(Status as MutableMessageType<Status>).typeName = "aiserver.v1.Status";
(Status as MutableMessageType<Status>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "code", kind: "enum", T: proto3.getEnumType(Status_StatusCode) }
]);
(function(Status_StatusCode2) {
  Status_StatusCode2[Status_StatusCode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  Status_StatusCode2[Status_StatusCode2["OK"] = 1] = "OK";
  Status_StatusCode2[Status_StatusCode2["ERROR"] = 2] = "ERROR";
})(Status_StatusCode! || (Status_StatusCode = {} as typeof Status_StatusCode));
proto3.util.setEnumType(Status_StatusCode, "aiserver.v1.Status.StatusCode", [
  { no: 0, name: "STATUS_CODE_UNSPECIFIED" },
  { no: 1, name: "STATUS_CODE_OK" },
  { no: 2, name: "STATUS_CODE_ERROR" }
]);
var TraceLink$Runtime = (() => class _TraceLink extends Message<_TraceLink> {
  declare traceId: string;
  declare spanId: string;
  declare traceState?: string;
  declare attributes: { [key: string]: string };
  declare flags?: number;
  constructor(data?: PartialMessage<_TraceLink>) {
    super();
    this.traceId = "";
    this.spanId = "";
    this.attributes = {};
    proto3.util.initPartial(data, this as _TraceLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TraceLink {
    return new _TraceLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TraceLink {
    return new _TraceLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TraceLink {
    return new _TraceLink().fromJsonString(jsonString, options);
  }
  static equals(a: _TraceLink | PlainMessage<_TraceLink> | undefined | null, b2: _TraceLink | PlainMessage<_TraceLink> | undefined | null): boolean {
    return proto3.util.equals(_TraceLink as unknown as MessageType<_TraceLink>, a, b2);
  }
})();
export type TraceLink = InstanceType<typeof TraceLink$Runtime>;
var TraceLink: MessageType<TraceLink> = TraceLink$Runtime as unknown as MessageType<TraceLink>;
(TraceLink as MutableMessageType<TraceLink>).runtime = proto3;
(TraceLink as MutableMessageType<TraceLink>).typeName = "aiserver.v1.TraceLink";
(TraceLink as MutableMessageType<TraceLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "trace_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "trace_state", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "attributes", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 5, name: "flags", kind: "scalar", T: 13, opt: true }
]);
var SubmitSpansRequest$Runtime = (() => class _SubmitSpansRequest extends Message<_SubmitSpansRequest> {
  declare spans: TraceSpan[];
  declare clientVersion: string;
  declare clientCommit: string;
  constructor(data?: PartialMessage<_SubmitSpansRequest>) {
    super();
    this.spans = [];
    this.clientVersion = "";
    this.clientCommit = "";
    proto3.util.initPartial(data, this as _SubmitSpansRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitSpansRequest {
    return new _SubmitSpansRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitSpansRequest {
    return new _SubmitSpansRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitSpansRequest {
    return new _SubmitSpansRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitSpansRequest | PlainMessage<_SubmitSpansRequest> | undefined | null, b2: _SubmitSpansRequest | PlainMessage<_SubmitSpansRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitSpansRequest as unknown as MessageType<_SubmitSpansRequest>, a, b2);
  }
})();
export type SubmitSpansRequest = InstanceType<typeof SubmitSpansRequest$Runtime>;
var SubmitSpansRequest: MessageType<SubmitSpansRequest> = SubmitSpansRequest$Runtime as unknown as MessageType<SubmitSpansRequest>;
(SubmitSpansRequest as MutableMessageType<SubmitSpansRequest>).runtime = proto3;
(SubmitSpansRequest as MutableMessageType<SubmitSpansRequest>).typeName = "aiserver.v1.SubmitSpansRequest";
(SubmitSpansRequest as MutableMessageType<SubmitSpansRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "spans", kind: "message", T: TraceSpan, repeated: true },
  {
    no: 2,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "client_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubmitSpansResponse$Runtime = (() => class _SubmitSpansResponse extends Message<_SubmitSpansResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_SubmitSpansResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _SubmitSpansResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitSpansResponse {
    return new _SubmitSpansResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitSpansResponse {
    return new _SubmitSpansResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitSpansResponse {
    return new _SubmitSpansResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitSpansResponse | PlainMessage<_SubmitSpansResponse> | undefined | null, b2: _SubmitSpansResponse | PlainMessage<_SubmitSpansResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitSpansResponse as unknown as MessageType<_SubmitSpansResponse>, a, b2);
  }
})();
export type SubmitSpansResponse = InstanceType<typeof SubmitSpansResponse$Runtime>;
var SubmitSpansResponse: MessageType<SubmitSpansResponse> = SubmitSpansResponse$Runtime as unknown as MessageType<SubmitSpansResponse>;
(SubmitSpansResponse as MutableMessageType<SubmitSpansResponse>).runtime = proto3;
(SubmitSpansResponse as MutableMessageType<SubmitSpansResponse>).typeName = "aiserver.v1.SubmitSpansResponse";
(SubmitSpansResponse as MutableMessageType<SubmitSpansResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var SubmitToolCallEventsRequest$Runtime = (() => class _SubmitToolCallEventsRequest extends Message<_SubmitToolCallEventsRequest> {
  declare sessionId: string;
  declare events: ToolCallTelemetryEvent[];
  declare clientVersion: string;
  declare clientCommit: string;
  declare platformTags: { [key: string]: string };
  declare windowType?: string;
  constructor(data?: PartialMessage<_SubmitToolCallEventsRequest>) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    proto3.util.initPartial(data, this as _SubmitToolCallEventsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitToolCallEventsRequest {
    return new _SubmitToolCallEventsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitToolCallEventsRequest {
    return new _SubmitToolCallEventsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitToolCallEventsRequest {
    return new _SubmitToolCallEventsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitToolCallEventsRequest | PlainMessage<_SubmitToolCallEventsRequest> | undefined | null, b2: _SubmitToolCallEventsRequest | PlainMessage<_SubmitToolCallEventsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitToolCallEventsRequest as unknown as MessageType<_SubmitToolCallEventsRequest>, a, b2);
  }
})();
export type SubmitToolCallEventsRequest = InstanceType<typeof SubmitToolCallEventsRequest$Runtime>;
var SubmitToolCallEventsRequest: MessageType<SubmitToolCallEventsRequest> = SubmitToolCallEventsRequest$Runtime as unknown as MessageType<SubmitToolCallEventsRequest>;
(SubmitToolCallEventsRequest as MutableMessageType<SubmitToolCallEventsRequest>).runtime = proto3;
(SubmitToolCallEventsRequest as MutableMessageType<SubmitToolCallEventsRequest>).typeName = "aiserver.v1.SubmitToolCallEventsRequest";
(SubmitToolCallEventsRequest as MutableMessageType<SubmitToolCallEventsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "events", kind: "message", T: ToolCallTelemetryEvent, repeated: true },
  {
    no: 3,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "client_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "platform_tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 6, name: "window_type", kind: "scalar", T: 9, opt: true }
]);
var SubmitToolCallEventsResponse$Runtime = (() => class _SubmitToolCallEventsResponse extends Message<_SubmitToolCallEventsResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  declare eventsProcessed: number;
  constructor(data?: PartialMessage<_SubmitToolCallEventsResponse>) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    proto3.util.initPartial(data, this as _SubmitToolCallEventsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitToolCallEventsResponse {
    return new _SubmitToolCallEventsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitToolCallEventsResponse {
    return new _SubmitToolCallEventsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitToolCallEventsResponse {
    return new _SubmitToolCallEventsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitToolCallEventsResponse | PlainMessage<_SubmitToolCallEventsResponse> | undefined | null, b2: _SubmitToolCallEventsResponse | PlainMessage<_SubmitToolCallEventsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitToolCallEventsResponse as unknown as MessageType<_SubmitToolCallEventsResponse>, a, b2);
  }
})();
export type SubmitToolCallEventsResponse = InstanceType<typeof SubmitToolCallEventsResponse$Runtime>;
var SubmitToolCallEventsResponse: MessageType<SubmitToolCallEventsResponse> = SubmitToolCallEventsResponse$Runtime as unknown as MessageType<SubmitToolCallEventsResponse>;
(SubmitToolCallEventsResponse as MutableMessageType<SubmitToolCallEventsResponse>).runtime = proto3;
(SubmitToolCallEventsResponse as MutableMessageType<SubmitToolCallEventsResponse>).typeName = "aiserver.v1.SubmitToolCallEventsResponse";
(SubmitToolCallEventsResponse as MutableMessageType<SubmitToolCallEventsResponse>).fields = proto3.util.newFieldList(() => [
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
    name: "events_processed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ToolCallTelemetryEvent$Runtime = (() => class _ToolCallTelemetryEvent extends Message<_ToolCallTelemetryEvent> {
  declare toolCallId: string;
  declare toolType: string;
  declare chatRequestUuid: string;
  declare modelName: string;
  declare startTime?: Timestamp;
  declare endTime?: Timestamp;
  declare duration?: Duration;
  declare isParallel: boolean;
  declare parallelBatchSize?: number;
  declare success: boolean;
  declare errorMessage?: string;
  declare metadata: { [key: string]: string };
  declare approvalWaitDuration?: Duration;
  declare isStream: boolean;
  constructor(data?: PartialMessage<_ToolCallTelemetryEvent>) {
    super();
    this.toolCallId = "";
    this.toolType = "";
    this.chatRequestUuid = "";
    this.modelName = "";
    this.isParallel = false;
    this.success = false;
    this.metadata = {};
    this.isStream = false;
    proto3.util.initPartial(data, this as _ToolCallTelemetryEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallTelemetryEvent {
    return new _ToolCallTelemetryEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallTelemetryEvent {
    return new _ToolCallTelemetryEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallTelemetryEvent {
    return new _ToolCallTelemetryEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallTelemetryEvent | PlainMessage<_ToolCallTelemetryEvent> | undefined | null, b2: _ToolCallTelemetryEvent | PlainMessage<_ToolCallTelemetryEvent> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallTelemetryEvent as unknown as MessageType<_ToolCallTelemetryEvent>, a, b2);
  }
})();
export type ToolCallTelemetryEvent = InstanceType<typeof ToolCallTelemetryEvent$Runtime>;
var ToolCallTelemetryEvent: MessageType<ToolCallTelemetryEvent> = ToolCallTelemetryEvent$Runtime as unknown as MessageType<ToolCallTelemetryEvent>;
(ToolCallTelemetryEvent as MutableMessageType<ToolCallTelemetryEvent>).runtime = proto3;
(ToolCallTelemetryEvent as MutableMessageType<ToolCallTelemetryEvent>).typeName = "aiserver.v1.ToolCallTelemetryEvent";
(ToolCallTelemetryEvent as MutableMessageType<ToolCallTelemetryEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "chat_request_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "start_time", kind: "message", T: Timestamp },
  { no: 6, name: "end_time", kind: "message", T: Timestamp },
  { no: 7, name: "duration", kind: "message", T: Duration },
  {
    no: 8,
    name: "is_parallel",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 9, name: "parallel_batch_size", kind: "scalar", T: 5, opt: true },
  {
    no: 10,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 11, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 13, name: "approval_wait_duration", kind: "message", T: Duration, opt: true },
  {
    no: 14,
    name: "is_stream",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SubmitChatRequestEventsRequest$Runtime = (() => class _SubmitChatRequestEventsRequest extends Message<_SubmitChatRequestEventsRequest> {
  declare sessionId: string;
  declare events: ChatRequestTelemetryEvent[];
  declare clientVersion: string;
  declare clientCommit: string;
  declare platformTags: { [key: string]: string };
  declare windowType?: string;
  constructor(data?: PartialMessage<_SubmitChatRequestEventsRequest>) {
    super();
    this.sessionId = "";
    this.events = [];
    this.clientVersion = "";
    this.clientCommit = "";
    this.platformTags = {};
    proto3.util.initPartial(data, this as _SubmitChatRequestEventsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitChatRequestEventsRequest {
    return new _SubmitChatRequestEventsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitChatRequestEventsRequest {
    return new _SubmitChatRequestEventsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitChatRequestEventsRequest {
    return new _SubmitChatRequestEventsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitChatRequestEventsRequest | PlainMessage<_SubmitChatRequestEventsRequest> | undefined | null, b2: _SubmitChatRequestEventsRequest | PlainMessage<_SubmitChatRequestEventsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubmitChatRequestEventsRequest as unknown as MessageType<_SubmitChatRequestEventsRequest>, a, b2);
  }
})();
export type SubmitChatRequestEventsRequest = InstanceType<typeof SubmitChatRequestEventsRequest$Runtime>;
var SubmitChatRequestEventsRequest: MessageType<SubmitChatRequestEventsRequest> = SubmitChatRequestEventsRequest$Runtime as unknown as MessageType<SubmitChatRequestEventsRequest>;
(SubmitChatRequestEventsRequest as MutableMessageType<SubmitChatRequestEventsRequest>).runtime = proto3;
(SubmitChatRequestEventsRequest as MutableMessageType<SubmitChatRequestEventsRequest>).typeName = "aiserver.v1.SubmitChatRequestEventsRequest";
(SubmitChatRequestEventsRequest as MutableMessageType<SubmitChatRequestEventsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "events", kind: "message", T: ChatRequestTelemetryEvent, repeated: true },
  {
    no: 3,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "client_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "platform_tags", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 6, name: "window_type", kind: "scalar", T: 9, opt: true }
]);
var SubmitChatRequestEventsResponse$Runtime = (() => class _SubmitChatRequestEventsResponse extends Message<_SubmitChatRequestEventsResponse> {
  declare success: boolean;
  declare errorMessage?: string;
  declare eventsProcessed: number;
  constructor(data?: PartialMessage<_SubmitChatRequestEventsResponse>) {
    super();
    this.success = false;
    this.eventsProcessed = 0;
    proto3.util.initPartial(data, this as _SubmitChatRequestEventsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmitChatRequestEventsResponse {
    return new _SubmitChatRequestEventsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmitChatRequestEventsResponse {
    return new _SubmitChatRequestEventsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmitChatRequestEventsResponse {
    return new _SubmitChatRequestEventsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmitChatRequestEventsResponse | PlainMessage<_SubmitChatRequestEventsResponse> | undefined | null, b2: _SubmitChatRequestEventsResponse | PlainMessage<_SubmitChatRequestEventsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubmitChatRequestEventsResponse as unknown as MessageType<_SubmitChatRequestEventsResponse>, a, b2);
  }
})();
export type SubmitChatRequestEventsResponse = InstanceType<typeof SubmitChatRequestEventsResponse$Runtime>;
var SubmitChatRequestEventsResponse: MessageType<SubmitChatRequestEventsResponse> = SubmitChatRequestEventsResponse$Runtime as unknown as MessageType<SubmitChatRequestEventsResponse>;
(SubmitChatRequestEventsResponse as MutableMessageType<SubmitChatRequestEventsResponse>).runtime = proto3;
(SubmitChatRequestEventsResponse as MutableMessageType<SubmitChatRequestEventsResponse>).typeName = "aiserver.v1.SubmitChatRequestEventsResponse";
(SubmitChatRequestEventsResponse as MutableMessageType<SubmitChatRequestEventsResponse>).fields = proto3.util.newFieldList(() => [
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
    name: "events_processed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ChatRequestTelemetryEvent$Runtime = (() => class _ChatRequestTelemetryEvent extends Message<_ChatRequestTelemetryEvent> {
  declare chatRequestUuid: string;
  declare requestedModel: string;
  declare actualModel: string;
  declare startTime?: Timestamp;
  declare endTime?: Timestamp;
  declare duration?: Duration;
  declare success: boolean;
  declare errorMessage?: string;
  declare transport?: string;
  declare completionStatus: string;
  declare metadata: { [key: string]: string };
  declare totalTtftMs?: number;
  declare totalGenerateMs?: number;
  declare totalStreamMs?: number;
  declare totalRequestMs?: number;
  declare modelCallCount?: number;
  declare totalToolCallLatency?: number;
  declare toolCallCount?: number;
  constructor(data?: PartialMessage<_ChatRequestTelemetryEvent>) {
    super();
    this.chatRequestUuid = "";
    this.requestedModel = "";
    this.actualModel = "";
    this.success = false;
    this.completionStatus = "";
    this.metadata = {};
    proto3.util.initPartial(data, this as _ChatRequestTelemetryEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatRequestTelemetryEvent {
    return new _ChatRequestTelemetryEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatRequestTelemetryEvent {
    return new _ChatRequestTelemetryEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatRequestTelemetryEvent {
    return new _ChatRequestTelemetryEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatRequestTelemetryEvent | PlainMessage<_ChatRequestTelemetryEvent> | undefined | null, b2: _ChatRequestTelemetryEvent | PlainMessage<_ChatRequestTelemetryEvent> | undefined | null): boolean {
    return proto3.util.equals(_ChatRequestTelemetryEvent as unknown as MessageType<_ChatRequestTelemetryEvent>, a, b2);
  }
})();
export type ChatRequestTelemetryEvent = InstanceType<typeof ChatRequestTelemetryEvent$Runtime>;
var ChatRequestTelemetryEvent: MessageType<ChatRequestTelemetryEvent> = ChatRequestTelemetryEvent$Runtime as unknown as MessageType<ChatRequestTelemetryEvent>;
(ChatRequestTelemetryEvent as MutableMessageType<ChatRequestTelemetryEvent>).runtime = proto3;
(ChatRequestTelemetryEvent as MutableMessageType<ChatRequestTelemetryEvent>).typeName = "aiserver.v1.ChatRequestTelemetryEvent";
(ChatRequestTelemetryEvent as MutableMessageType<ChatRequestTelemetryEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "chat_request_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "requested_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "actual_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "start_time", kind: "message", T: Timestamp },
  { no: 5, name: "end_time", kind: "message", T: Timestamp },
  { no: 6, name: "duration", kind: "message", T: Duration },
  {
    no: 7,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "transport", kind: "scalar", T: 9, opt: true },
  {
    no: 10,
    name: "completion_status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 12, name: "total_ttft_ms", kind: "scalar", T: 1, opt: true },
  { no: 13, name: "total_generate_ms", kind: "scalar", T: 1, opt: true },
  { no: 14, name: "total_stream_ms", kind: "scalar", T: 1, opt: true },
  { no: 15, name: "total_request_ms", kind: "scalar", T: 1, opt: true },
  { no: 16, name: "model_call_count", kind: "scalar", T: 5, opt: true },
  { no: 17, name: "total_tool_call_latency", kind: "scalar", T: 1, opt: true },
  { no: 18, name: "tool_call_count", kind: "scalar", T: 5, opt: true }
]);


export { PerformanceEventType, ProfileKind, InteractionType, SpanKind, ReportInlineActionRequest, ReportInlineActionResponse, ReportMetricsRequest, ReportMetricsRequest_Metric, ReportMetricsRequest_NamedMetric, ReportMetricsResponse, ScriptTiming, PerformanceEvent, SystemMetadata, SubmitPerformanceEventsRequest, SubmitPerformanceEventsResponse, CapturedProfile, Interaction, CapturedWebProfile, SubmitProfileRequest, SubmitProfileResponse, SubmitInteractionWindowRequest, SubmitInteractionWindowResponse, PerformanceMetric, TraceSpan, Status, Status_StatusCode, TraceLink, SubmitSpansRequest, SubmitSpansResponse, SubmitToolCallEventsRequest, SubmitToolCallEventsResponse, ToolCallTelemetryEvent, SubmitChatRequestEventsRequest, SubmitChatRequestEventsResponse, ChatRequestTelemetryEvent };
