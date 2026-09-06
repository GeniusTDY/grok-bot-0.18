/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:65038-65280
 * Region SHA-256: 000cb3e96a1e08189561126111b8c0b63b9b0231ff800e1fcf8093e7da12409b
 * B11 exports: 6 messages + 0 enums + 0 services = 6
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AgentStoreConflictCursor$Runtime = (() => class _AgentStoreConflictCursor extends Message<_AgentStoreConflictCursor> {
  declare journalEpoch: string;
  declare seq: bigint;
  declare lastEventId: string;
  constructor(data?: PartialMessage<_AgentStoreConflictCursor>) {
    super();
    this.journalEpoch = "";
    this.seq = protoInt64.zero;
    this.lastEventId = "";
    proto3.util.initPartial(data, this as _AgentStoreConflictCursor);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictCursor {
    return new _AgentStoreConflictCursor().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictCursor {
    return new _AgentStoreConflictCursor().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictCursor {
    return new _AgentStoreConflictCursor().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictCursor | PlainMessage<_AgentStoreConflictCursor> | undefined | null, b2: _AgentStoreConflictCursor | PlainMessage<_AgentStoreConflictCursor> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictCursor as unknown as MessageType<_AgentStoreConflictCursor>, a, b2);
  }
})();
export type AgentStoreConflictCursor = InstanceType<typeof AgentStoreConflictCursor$Runtime>;
var AgentStoreConflictCursor: MessageType<AgentStoreConflictCursor> = AgentStoreConflictCursor$Runtime as unknown as MessageType<AgentStoreConflictCursor>;
(AgentStoreConflictCursor as MutableMessageType<AgentStoreConflictCursor>).runtime = proto3;
(AgentStoreConflictCursor as MutableMessageType<AgentStoreConflictCursor>).typeName = "agent.v1.AgentStoreConflictCursor";
(AgentStoreConflictCursor as MutableMessageType<AgentStoreConflictCursor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "journal_epoch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "seq",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "last_event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AgentStoreConflictArgs$Runtime = (() => class _AgentStoreConflictArgs extends Message<_AgentStoreConflictArgs> {
  declare cursor?: AgentStoreConflictCursor;
  declare advance?: boolean;
  constructor(data?: PartialMessage<_AgentStoreConflictArgs>) {
    super();
    proto3.util.initPartial(data, this as _AgentStoreConflictArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictArgs {
    return new _AgentStoreConflictArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictArgs {
    return new _AgentStoreConflictArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictArgs {
    return new _AgentStoreConflictArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictArgs | PlainMessage<_AgentStoreConflictArgs> | undefined | null, b2: _AgentStoreConflictArgs | PlainMessage<_AgentStoreConflictArgs> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictArgs as unknown as MessageType<_AgentStoreConflictArgs>, a, b2);
  }
})();
export type AgentStoreConflictArgs = InstanceType<typeof AgentStoreConflictArgs$Runtime>;
var AgentStoreConflictArgs: MessageType<AgentStoreConflictArgs> = AgentStoreConflictArgs$Runtime as unknown as MessageType<AgentStoreConflictArgs>;
(AgentStoreConflictArgs as MutableMessageType<AgentStoreConflictArgs>).runtime = proto3;
(AgentStoreConflictArgs as MutableMessageType<AgentStoreConflictArgs>).typeName = "agent.v1.AgentStoreConflictArgs";
(AgentStoreConflictArgs as MutableMessageType<AgentStoreConflictArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: AgentStoreConflictCursor, opt: true },
  { no: 2, name: "advance", kind: "scalar", T: 8, opt: true }
]);
var AgentStoreConflictEvent$Runtime = (() => class _AgentStoreConflictEvent extends Message<_AgentStoreConflictEvent> {
  declare v: number;
  declare eventId: string;
  declare journalEpoch: string;
  declare seq: bigint;
  declare tsMs: bigint;
  declare kind: string;
  declare storeId?: string;
  declare originalRelPath?: string;
  declare conflictRelPath?: string;
  declare originalAbsPath?: string;
  declare conflictAbsPath?: string;
  declare preservedBytes?: bigint;
  constructor(data?: PartialMessage<_AgentStoreConflictEvent>) {
    super();
    this.v = 0;
    this.eventId = "";
    this.journalEpoch = "";
    this.seq = protoInt64.zero;
    this.tsMs = protoInt64.zero;
    this.kind = "";
    proto3.util.initPartial(data, this as _AgentStoreConflictEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictEvent {
    return new _AgentStoreConflictEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictEvent {
    return new _AgentStoreConflictEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictEvent {
    return new _AgentStoreConflictEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictEvent | PlainMessage<_AgentStoreConflictEvent> | undefined | null, b2: _AgentStoreConflictEvent | PlainMessage<_AgentStoreConflictEvent> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictEvent as unknown as MessageType<_AgentStoreConflictEvent>, a, b2);
  }
})();
export type AgentStoreConflictEvent = InstanceType<typeof AgentStoreConflictEvent$Runtime>;
var AgentStoreConflictEvent: MessageType<AgentStoreConflictEvent> = AgentStoreConflictEvent$Runtime as unknown as MessageType<AgentStoreConflictEvent>;
(AgentStoreConflictEvent as MutableMessageType<AgentStoreConflictEvent>).runtime = proto3;
(AgentStoreConflictEvent as MutableMessageType<AgentStoreConflictEvent>).typeName = "agent.v1.AgentStoreConflictEvent";
(AgentStoreConflictEvent as MutableMessageType<AgentStoreConflictEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "v",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "journal_epoch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "seq",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 5,
    name: "ts_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 6,
    name: "kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "store_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "original_rel_path", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "conflict_rel_path", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "original_abs_path", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "conflict_abs_path", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "preserved_bytes", kind: "scalar", T: 4, opt: true }
]);
var AgentStoreConflictResult$Runtime = (() => class _AgentStoreConflictResult extends Message<_AgentStoreConflictResult> {
  declare result: { case: "success"; value: AgentStoreConflictSuccess } | { case: "error"; value: AgentStoreConflictError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AgentStoreConflictResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _AgentStoreConflictResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictResult {
    return new _AgentStoreConflictResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictResult {
    return new _AgentStoreConflictResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictResult {
    return new _AgentStoreConflictResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictResult | PlainMessage<_AgentStoreConflictResult> | undefined | null, b2: _AgentStoreConflictResult | PlainMessage<_AgentStoreConflictResult> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictResult as unknown as MessageType<_AgentStoreConflictResult>, a, b2);
  }
})();
export type AgentStoreConflictResult = InstanceType<typeof AgentStoreConflictResult$Runtime>;
var AgentStoreConflictResult: MessageType<AgentStoreConflictResult> = AgentStoreConflictResult$Runtime as unknown as MessageType<AgentStoreConflictResult>;
(AgentStoreConflictResult as MutableMessageType<AgentStoreConflictResult>).runtime = proto3;
(AgentStoreConflictResult as MutableMessageType<AgentStoreConflictResult>).typeName = "agent.v1.AgentStoreConflictResult";
(AgentStoreConflictResult as MutableMessageType<AgentStoreConflictResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: AgentStoreConflictSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: AgentStoreConflictError, oneof: "result" }
]);
var AgentStoreConflictSuccess$Runtime = (() => class _AgentStoreConflictSuccess extends Message<_AgentStoreConflictSuccess> {
  declare events: AgentStoreConflictEvent[];
  declare nextCursor?: AgentStoreConflictCursor;
  declare gap: boolean;
  constructor(data?: PartialMessage<_AgentStoreConflictSuccess>) {
    super();
    this.events = [];
    this.gap = false;
    proto3.util.initPartial(data, this as _AgentStoreConflictSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictSuccess {
    return new _AgentStoreConflictSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictSuccess {
    return new _AgentStoreConflictSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictSuccess {
    return new _AgentStoreConflictSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictSuccess | PlainMessage<_AgentStoreConflictSuccess> | undefined | null, b2: _AgentStoreConflictSuccess | PlainMessage<_AgentStoreConflictSuccess> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictSuccess as unknown as MessageType<_AgentStoreConflictSuccess>, a, b2);
  }
})();
export type AgentStoreConflictSuccess = InstanceType<typeof AgentStoreConflictSuccess$Runtime>;
var AgentStoreConflictSuccess: MessageType<AgentStoreConflictSuccess> = AgentStoreConflictSuccess$Runtime as unknown as MessageType<AgentStoreConflictSuccess>;
(AgentStoreConflictSuccess as MutableMessageType<AgentStoreConflictSuccess>).runtime = proto3;
(AgentStoreConflictSuccess as MutableMessageType<AgentStoreConflictSuccess>).typeName = "agent.v1.AgentStoreConflictSuccess";
(AgentStoreConflictSuccess as MutableMessageType<AgentStoreConflictSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "events", kind: "message", T: AgentStoreConflictEvent, repeated: true },
  { no: 2, name: "next_cursor", kind: "message", T: AgentStoreConflictCursor },
  {
    no: 3,
    name: "gap",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AgentStoreConflictError$Runtime = (() => class _AgentStoreConflictError extends Message<_AgentStoreConflictError> {
  declare error: string;
  constructor(data?: PartialMessage<_AgentStoreConflictError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _AgentStoreConflictError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentStoreConflictError {
    return new _AgentStoreConflictError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentStoreConflictError {
    return new _AgentStoreConflictError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentStoreConflictError {
    return new _AgentStoreConflictError().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentStoreConflictError | PlainMessage<_AgentStoreConflictError> | undefined | null, b2: _AgentStoreConflictError | PlainMessage<_AgentStoreConflictError> | undefined | null): boolean {
    return proto3.util.equals(_AgentStoreConflictError as unknown as MessageType<_AgentStoreConflictError>, a, b2);
  }
})();
export type AgentStoreConflictError = InstanceType<typeof AgentStoreConflictError$Runtime>;
var AgentStoreConflictError: MessageType<AgentStoreConflictError> = AgentStoreConflictError$Runtime as unknown as MessageType<AgentStoreConflictError>;
(AgentStoreConflictError as MutableMessageType<AgentStoreConflictError>).runtime = proto3;
(AgentStoreConflictError as MutableMessageType<AgentStoreConflictError>).typeName = "agent.v1.AgentStoreConflictError";
(AgentStoreConflictError as MutableMessageType<AgentStoreConflictError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { AgentStoreConflictCursor, AgentStoreConflictArgs, AgentStoreConflictEvent, AgentStoreConflictResult, AgentStoreConflictSuccess, AgentStoreConflictError };
