/**
 * Complete generated Grok Bot 0.18 shared MCP prerequisite recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:12965-13119
 * Region SHA-256: a29518cc58cb3a59d6e698161c8f14d59569884fc35cc82d1aaa96e825caf63f
 * Shared MCP exports: 4 messages
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var Range$Runtime = (() => class _Range extends Message<_Range> {
  declare start?: Position;
  declare end?: Position;
  constructor(data?: PartialMessage<_Range>) {
    super();
    proto3.util.initPartial(data, this as _Range);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Range {
    return new _Range().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Range {
    return new _Range().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Range {
    return new _Range().fromJsonString(jsonString, options);
  }
  static equals(a: _Range | PlainMessage<_Range> | undefined | null, b2: _Range | PlainMessage<_Range> | undefined | null): boolean {
    return proto3.util.equals(_Range as unknown as MessageType<_Range>, a, b2);
  }
})();
export type Range = InstanceType<typeof Range$Runtime>;
var Range: MessageType<Range> = Range$Runtime as unknown as MessageType<Range>;
(Range as MutableMessageType<Range>).runtime = proto3;
(Range as MutableMessageType<Range>).typeName = "agent.v1.Range";
(Range as MutableMessageType<Range>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "start", kind: "message", T: Position },
  { no: 2, name: "end", kind: "message", T: Position }
]);
var Position$Runtime = (() => class _Position extends Message<_Position> {
  declare line: number;
  declare column: number;
  constructor(data?: PartialMessage<_Position>) {
    super();
    this.line = 0;
    this.column = 0;
    proto3.util.initPartial(data, this as _Position);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Position {
    return new _Position().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Position {
    return new _Position().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Position {
    return new _Position().fromJsonString(jsonString, options);
  }
  static equals(a: _Position | PlainMessage<_Position> | undefined | null, b2: _Position | PlainMessage<_Position> | undefined | null): boolean {
    return proto3.util.equals(_Position as unknown as MessageType<_Position>, a, b2);
  }
})();
export type Position = InstanceType<typeof Position$Runtime>;
var Position: MessageType<Position> = Position$Runtime as unknown as MessageType<Position>;
(Position as MutableMessageType<Position>).runtime = proto3;
(Position as MutableMessageType<Position>).typeName = "agent.v1.Position";
(Position as MutableMessageType<Position>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "column",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var OutputLocation$Runtime = (() => class _OutputLocation extends Message<_OutputLocation> {
  declare filePath: string;
  declare sizeBytes: bigint;
  declare lineCount: bigint;
  constructor(data?: PartialMessage<_OutputLocation>) {
    super();
    this.filePath = "";
    this.sizeBytes = protoInt64.zero;
    this.lineCount = protoInt64.zero;
    proto3.util.initPartial(data, this as _OutputLocation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _OutputLocation {
    return new _OutputLocation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _OutputLocation {
    return new _OutputLocation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _OutputLocation {
    return new _OutputLocation().fromJsonString(jsonString, options);
  }
  static equals(a: _OutputLocation | PlainMessage<_OutputLocation> | undefined | null, b2: _OutputLocation | PlainMessage<_OutputLocation> | undefined | null): boolean {
    return proto3.util.equals(_OutputLocation as unknown as MessageType<_OutputLocation>, a, b2);
  }
})();
export type OutputLocation = InstanceType<typeof OutputLocation$Runtime>;
var OutputLocation: MessageType<OutputLocation> = OutputLocation$Runtime as unknown as MessageType<OutputLocation>;
(OutputLocation as MutableMessageType<OutputLocation>).runtime = proto3;
(OutputLocation as MutableMessageType<OutputLocation>).typeName = "agent.v1.OutputLocation";
(OutputLocation as MutableMessageType<OutputLocation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "line_count",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var SmartModeApproval$Runtime = (() => class _SmartModeApproval extends Message<_SmartModeApproval> {
  declare requestId: string;
  declare reason: string;
  constructor(data?: PartialMessage<_SmartModeApproval>) {
    super();
    this.requestId = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _SmartModeApproval);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeApproval {
    return new _SmartModeApproval().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeApproval {
    return new _SmartModeApproval().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeApproval {
    return new _SmartModeApproval().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeApproval | PlainMessage<_SmartModeApproval> | undefined | null, b2: _SmartModeApproval | PlainMessage<_SmartModeApproval> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeApproval as unknown as MessageType<_SmartModeApproval>, a, b2);
  }
})();
export type SmartModeApproval = InstanceType<typeof SmartModeApproval$Runtime>;
var SmartModeApproval: MessageType<SmartModeApproval> = SmartModeApproval$Runtime as unknown as MessageType<SmartModeApproval>;
(SmartModeApproval as MutableMessageType<SmartModeApproval>).runtime = proto3;
(SmartModeApproval as MutableMessageType<SmartModeApproval>).typeName = "agent.v1.SmartModeApproval";
(SmartModeApproval as MutableMessageType<SmartModeApproval>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
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


export { Range, Position, OutputLocation, SmartModeApproval };
