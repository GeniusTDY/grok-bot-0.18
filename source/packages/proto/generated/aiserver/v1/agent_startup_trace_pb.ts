/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:418652-418866
 * Region SHA-256: 7ed7393d58df149134fcfa1a6a6e95cf9b49ad892a09021e8f14b24a921e07f6
 * BackgroundComposer closure exports: 6 messages + 0 enums = 6
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AgentStartupTraceEvent$Runtime = (() => class _AgentStartupTraceEvent extends Message<_AgentStartupTraceEvent> {
  declare creationTimestampMs: bigint;
  declare payload: { case: "spanStarted"; value: AgentStartupTraceEvent_SpanStarted } | { case: "spanEnded"; value: AgentStartupTraceEvent_SpanEnded } | { case: "userAction"; value: AgentStartupTraceEvent_UserAction } | { case: "turnClose"; value: AgentStartupTraceEvent_TurnClose } | { case: "contextLink"; value: AgentStartupTraceEvent_ContextLink } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AgentStartupTraceEvent>) {
    super();
    this.creationTimestampMs = protoInt64.zero;
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent {
    return new _AgentStartupTraceEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent {
    return new _AgentStartupTraceEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent {
    return new _AgentStartupTraceEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent | PlainMessage<_AgentStartupTraceEvent> | undefined | null, b2: _AgentStartupTraceEvent | PlainMessage<_AgentStartupTraceEvent> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent as unknown as MessageType<_AgentStartupTraceEvent>, a, b2);
  }
})();
export type AgentStartupTraceEvent = InstanceType<typeof AgentStartupTraceEvent$Runtime>;
var AgentStartupTraceEvent: MessageType<AgentStartupTraceEvent> = AgentStartupTraceEvent$Runtime as unknown as MessageType<AgentStartupTraceEvent>;
(AgentStartupTraceEvent as MutableMessageType<AgentStartupTraceEvent>).runtime = proto3;
(AgentStartupTraceEvent as MutableMessageType<AgentStartupTraceEvent>).typeName = "aiserver.v1.AgentStartupTraceEvent";
(AgentStartupTraceEvent as MutableMessageType<AgentStartupTraceEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "creation_timestamp_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 2, name: "span_started", kind: "message", T: AgentStartupTraceEvent_SpanStarted, oneof: "payload" },
  { no: 3, name: "span_ended", kind: "message", T: AgentStartupTraceEvent_SpanEnded, oneof: "payload" },
  { no: 4, name: "user_action", kind: "message", T: AgentStartupTraceEvent_UserAction, oneof: "payload" },
  { no: 5, name: "turn_close", kind: "message", T: AgentStartupTraceEvent_TurnClose, oneof: "payload" },
  { no: 6, name: "context_link", kind: "message", T: AgentStartupTraceEvent_ContextLink, oneof: "payload" }
]);
var AgentStartupTraceEvent_ContextLink$Runtime = (() => class _AgentStartupTraceEvent_ContextLink extends Message<_AgentStartupTraceEvent_ContextLink> {
  declare name: string;
  declare href: string;
  constructor(data?: PartialMessage<_AgentStartupTraceEvent_ContextLink>) {
    super();
    this.name = "";
    this.href = "";
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent_ContextLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent_ContextLink {
    return new _AgentStartupTraceEvent_ContextLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_ContextLink {
    return new _AgentStartupTraceEvent_ContextLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_ContextLink {
    return new _AgentStartupTraceEvent_ContextLink().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent_ContextLink | PlainMessage<_AgentStartupTraceEvent_ContextLink> | undefined | null, b2: _AgentStartupTraceEvent_ContextLink | PlainMessage<_AgentStartupTraceEvent_ContextLink> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent_ContextLink as unknown as MessageType<_AgentStartupTraceEvent_ContextLink>, a, b2);
  }
})();
export type AgentStartupTraceEvent_ContextLink = InstanceType<typeof AgentStartupTraceEvent_ContextLink$Runtime>;
var AgentStartupTraceEvent_ContextLink: MessageType<AgentStartupTraceEvent_ContextLink> = AgentStartupTraceEvent_ContextLink$Runtime as unknown as MessageType<AgentStartupTraceEvent_ContextLink>;
(AgentStartupTraceEvent_ContextLink as MutableMessageType<AgentStartupTraceEvent_ContextLink>).runtime = proto3;
(AgentStartupTraceEvent_ContextLink as MutableMessageType<AgentStartupTraceEvent_ContextLink>).typeName = "aiserver.v1.AgentStartupTraceEvent.ContextLink";
(AgentStartupTraceEvent_ContextLink as MutableMessageType<AgentStartupTraceEvent_ContextLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "href",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AgentStartupTraceEvent_SpanStarted$Runtime = (() => class _AgentStartupTraceEvent_SpanStarted extends Message<_AgentStartupTraceEvent_SpanStarted> {
  declare spanId: string;
  declare name: string;
  declare parentSpanId?: string;
  declare href?: string;
  declare temporalRunId?: string;
  declare temporalActivityId?: string;
  constructor(data?: PartialMessage<_AgentStartupTraceEvent_SpanStarted>) {
    super();
    this.spanId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent_SpanStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent_SpanStarted {
    return new _AgentStartupTraceEvent_SpanStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_SpanStarted {
    return new _AgentStartupTraceEvent_SpanStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_SpanStarted {
    return new _AgentStartupTraceEvent_SpanStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent_SpanStarted | PlainMessage<_AgentStartupTraceEvent_SpanStarted> | undefined | null, b2: _AgentStartupTraceEvent_SpanStarted | PlainMessage<_AgentStartupTraceEvent_SpanStarted> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent_SpanStarted as unknown as MessageType<_AgentStartupTraceEvent_SpanStarted>, a, b2);
  }
})();
export type AgentStartupTraceEvent_SpanStarted = InstanceType<typeof AgentStartupTraceEvent_SpanStarted$Runtime>;
var AgentStartupTraceEvent_SpanStarted: MessageType<AgentStartupTraceEvent_SpanStarted> = AgentStartupTraceEvent_SpanStarted$Runtime as unknown as MessageType<AgentStartupTraceEvent_SpanStarted>;
(AgentStartupTraceEvent_SpanStarted as MutableMessageType<AgentStartupTraceEvent_SpanStarted>).runtime = proto3;
(AgentStartupTraceEvent_SpanStarted as MutableMessageType<AgentStartupTraceEvent_SpanStarted>).typeName = "aiserver.v1.AgentStartupTraceEvent.SpanStarted";
(AgentStartupTraceEvent_SpanStarted as MutableMessageType<AgentStartupTraceEvent_SpanStarted>).fields = proto3.util.newFieldList(() => [
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
  { no: 4, name: "href", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "temporal_run_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "temporal_activity_id", kind: "scalar", T: 9, opt: true }
]);
var AgentStartupTraceEvent_SpanEnded$Runtime = (() => class _AgentStartupTraceEvent_SpanEnded extends Message<_AgentStartupTraceEvent_SpanEnded> {
  declare spanId: string;
  constructor(data?: PartialMessage<_AgentStartupTraceEvent_SpanEnded>) {
    super();
    this.spanId = "";
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent_SpanEnded);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent_SpanEnded {
    return new _AgentStartupTraceEvent_SpanEnded().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_SpanEnded {
    return new _AgentStartupTraceEvent_SpanEnded().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_SpanEnded {
    return new _AgentStartupTraceEvent_SpanEnded().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent_SpanEnded | PlainMessage<_AgentStartupTraceEvent_SpanEnded> | undefined | null, b2: _AgentStartupTraceEvent_SpanEnded | PlainMessage<_AgentStartupTraceEvent_SpanEnded> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent_SpanEnded as unknown as MessageType<_AgentStartupTraceEvent_SpanEnded>, a, b2);
  }
})();
export type AgentStartupTraceEvent_SpanEnded = InstanceType<typeof AgentStartupTraceEvent_SpanEnded$Runtime>;
var AgentStartupTraceEvent_SpanEnded: MessageType<AgentStartupTraceEvent_SpanEnded> = AgentStartupTraceEvent_SpanEnded$Runtime as unknown as MessageType<AgentStartupTraceEvent_SpanEnded>;
(AgentStartupTraceEvent_SpanEnded as MutableMessageType<AgentStartupTraceEvent_SpanEnded>).runtime = proto3;
(AgentStartupTraceEvent_SpanEnded as MutableMessageType<AgentStartupTraceEvent_SpanEnded>).typeName = "aiserver.v1.AgentStartupTraceEvent.SpanEnded";
(AgentStartupTraceEvent_SpanEnded as MutableMessageType<AgentStartupTraceEvent_SpanEnded>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AgentStartupTraceEvent_UserAction$Runtime = (() => class _AgentStartupTraceEvent_UserAction extends Message<_AgentStartupTraceEvent_UserAction> {
  declare turnIndex: number;
  constructor(data?: PartialMessage<_AgentStartupTraceEvent_UserAction>) {
    super();
    this.turnIndex = 0;
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent_UserAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent_UserAction {
    return new _AgentStartupTraceEvent_UserAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_UserAction {
    return new _AgentStartupTraceEvent_UserAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_UserAction {
    return new _AgentStartupTraceEvent_UserAction().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent_UserAction | PlainMessage<_AgentStartupTraceEvent_UserAction> | undefined | null, b2: _AgentStartupTraceEvent_UserAction | PlainMessage<_AgentStartupTraceEvent_UserAction> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent_UserAction as unknown as MessageType<_AgentStartupTraceEvent_UserAction>, a, b2);
  }
})();
export type AgentStartupTraceEvent_UserAction = InstanceType<typeof AgentStartupTraceEvent_UserAction$Runtime>;
var AgentStartupTraceEvent_UserAction: MessageType<AgentStartupTraceEvent_UserAction> = AgentStartupTraceEvent_UserAction$Runtime as unknown as MessageType<AgentStartupTraceEvent_UserAction>;
(AgentStartupTraceEvent_UserAction as MutableMessageType<AgentStartupTraceEvent_UserAction>).runtime = proto3;
(AgentStartupTraceEvent_UserAction as MutableMessageType<AgentStartupTraceEvent_UserAction>).typeName = "aiserver.v1.AgentStartupTraceEvent.UserAction";
(AgentStartupTraceEvent_UserAction as MutableMessageType<AgentStartupTraceEvent_UserAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "turn_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var AgentStartupTraceEvent_TurnClose$Runtime = (() => class _AgentStartupTraceEvent_TurnClose extends Message<_AgentStartupTraceEvent_TurnClose> {
  declare turnIndex: number;
  constructor(data?: PartialMessage<_AgentStartupTraceEvent_TurnClose>) {
    super();
    this.turnIndex = 0;
    proto3.util.initPartial(data, this as _AgentStartupTraceEvent_TurnClose);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentStartupTraceEvent_TurnClose {
    return new _AgentStartupTraceEvent_TurnClose().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_TurnClose {
    return new _AgentStartupTraceEvent_TurnClose().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentStartupTraceEvent_TurnClose {
    return new _AgentStartupTraceEvent_TurnClose().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentStartupTraceEvent_TurnClose | PlainMessage<_AgentStartupTraceEvent_TurnClose> | undefined | null, b2: _AgentStartupTraceEvent_TurnClose | PlainMessage<_AgentStartupTraceEvent_TurnClose> | undefined | null): boolean {
    return proto3.util.equals(_AgentStartupTraceEvent_TurnClose as unknown as MessageType<_AgentStartupTraceEvent_TurnClose>, a, b2);
  }
})();
export type AgentStartupTraceEvent_TurnClose = InstanceType<typeof AgentStartupTraceEvent_TurnClose$Runtime>;
var AgentStartupTraceEvent_TurnClose: MessageType<AgentStartupTraceEvent_TurnClose> = AgentStartupTraceEvent_TurnClose$Runtime as unknown as MessageType<AgentStartupTraceEvent_TurnClose>;
(AgentStartupTraceEvent_TurnClose as MutableMessageType<AgentStartupTraceEvent_TurnClose>).runtime = proto3;
(AgentStartupTraceEvent_TurnClose as MutableMessageType<AgentStartupTraceEvent_TurnClose>).typeName = "aiserver.v1.AgentStartupTraceEvent.TurnClose";
(AgentStartupTraceEvent_TurnClose as MutableMessageType<AgentStartupTraceEvent_TurnClose>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "turn_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);


export { AgentStartupTraceEvent, AgentStartupTraceEvent_ContextLink, AgentStartupTraceEvent_SpanStarted, AgentStartupTraceEvent_SpanEnded, AgentStartupTraceEvent_UserAction, AgentStartupTraceEvent_TurnClose };
