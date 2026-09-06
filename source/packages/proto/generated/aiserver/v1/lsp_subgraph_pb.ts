/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:170611-170801
 * Region SHA-256: 787ca2d1e2722924a7ac74131e1a36862dcb7660e210cbedb95b1e479ec36eb6
 * AI Server closure exports: 4 messages + 0 enums = 4
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var LspSubgraphPosition$Runtime = (() => class _LspSubgraphPosition extends Message<_LspSubgraphPosition> {
  declare line: number;
  declare character: number;
  constructor(data?: PartialMessage<_LspSubgraphPosition>) {
    super();
    this.line = 0;
    this.character = 0;
    proto3.util.initPartial(data, this as _LspSubgraphPosition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSubgraphPosition {
    return new _LspSubgraphPosition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSubgraphPosition {
    return new _LspSubgraphPosition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSubgraphPosition {
    return new _LspSubgraphPosition().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSubgraphPosition | PlainMessage<_LspSubgraphPosition> | undefined | null, b2: _LspSubgraphPosition | PlainMessage<_LspSubgraphPosition> | undefined | null): boolean {
    return proto3.util.equals(_LspSubgraphPosition as unknown as MessageType<_LspSubgraphPosition>, a, b2);
  }
})();
export type LspSubgraphPosition = InstanceType<typeof LspSubgraphPosition$Runtime>;
var LspSubgraphPosition: MessageType<LspSubgraphPosition> = LspSubgraphPosition$Runtime as unknown as MessageType<LspSubgraphPosition>;
(LspSubgraphPosition as MutableMessageType<LspSubgraphPosition>).runtime = proto3;
(LspSubgraphPosition as MutableMessageType<LspSubgraphPosition>).typeName = "aiserver.v1.LspSubgraphPosition";
(LspSubgraphPosition as MutableMessageType<LspSubgraphPosition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "character",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var LspSubgraphRange$Runtime = (() => class _LspSubgraphRange extends Message<_LspSubgraphRange> {
  declare startLine: number;
  declare startCharacter: number;
  declare endLine: number;
  declare endCharacter: number;
  constructor(data?: PartialMessage<_LspSubgraphRange>) {
    super();
    this.startLine = 0;
    this.startCharacter = 0;
    this.endLine = 0;
    this.endCharacter = 0;
    proto3.util.initPartial(data, this as _LspSubgraphRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSubgraphRange {
    return new _LspSubgraphRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSubgraphRange {
    return new _LspSubgraphRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSubgraphRange {
    return new _LspSubgraphRange().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSubgraphRange | PlainMessage<_LspSubgraphRange> | undefined | null, b2: _LspSubgraphRange | PlainMessage<_LspSubgraphRange> | undefined | null): boolean {
    return proto3.util.equals(_LspSubgraphRange as unknown as MessageType<_LspSubgraphRange>, a, b2);
  }
})();
export type LspSubgraphRange = InstanceType<typeof LspSubgraphRange$Runtime>;
var LspSubgraphRange: MessageType<LspSubgraphRange> = LspSubgraphRange$Runtime as unknown as MessageType<LspSubgraphRange>;
(LspSubgraphRange as MutableMessageType<LspSubgraphRange>).runtime = proto3;
(LspSubgraphRange as MutableMessageType<LspSubgraphRange>).typeName = "aiserver.v1.LspSubgraphRange";
(LspSubgraphRange as MutableMessageType<LspSubgraphRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_character",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_character",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var LspSubgraphContextItem$Runtime = (() => class _LspSubgraphContextItem extends Message<_LspSubgraphContextItem> {
  declare uri?: string;
  declare type: string;
  declare content: string;
  declare range?: LspSubgraphRange;
  constructor(data?: PartialMessage<_LspSubgraphContextItem>) {
    super();
    this.type = "";
    this.content = "";
    proto3.util.initPartial(data, this as _LspSubgraphContextItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSubgraphContextItem {
    return new _LspSubgraphContextItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSubgraphContextItem {
    return new _LspSubgraphContextItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSubgraphContextItem {
    return new _LspSubgraphContextItem().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSubgraphContextItem | PlainMessage<_LspSubgraphContextItem> | undefined | null, b2: _LspSubgraphContextItem | PlainMessage<_LspSubgraphContextItem> | undefined | null): boolean {
    return proto3.util.equals(_LspSubgraphContextItem as unknown as MessageType<_LspSubgraphContextItem>, a, b2);
  }
})();
export type LspSubgraphContextItem = InstanceType<typeof LspSubgraphContextItem$Runtime>;
var LspSubgraphContextItem: MessageType<LspSubgraphContextItem> = LspSubgraphContextItem$Runtime as unknown as MessageType<LspSubgraphContextItem>;
(LspSubgraphContextItem as MutableMessageType<LspSubgraphContextItem>).runtime = proto3;
(LspSubgraphContextItem as MutableMessageType<LspSubgraphContextItem>).typeName = "aiserver.v1.LspSubgraphContextItem";
(LspSubgraphContextItem as MutableMessageType<LspSubgraphContextItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uri", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "type",
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
  },
  { no: 4, name: "range", kind: "message", T: LspSubgraphRange, opt: true }
]);
var LspSubgraphFullContext$Runtime = (() => class _LspSubgraphFullContext extends Message<_LspSubgraphFullContext> {
  declare uri: string;
  declare symbolName: string;
  declare positions: LspSubgraphPosition[];
  declare contextItems: LspSubgraphContextItem[];
  declare score: number;
  constructor(data?: PartialMessage<_LspSubgraphFullContext>) {
    super();
    this.uri = "";
    this.symbolName = "";
    this.positions = [];
    this.contextItems = [];
    this.score = 0;
    proto3.util.initPartial(data, this as _LspSubgraphFullContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSubgraphFullContext {
    return new _LspSubgraphFullContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSubgraphFullContext {
    return new _LspSubgraphFullContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSubgraphFullContext {
    return new _LspSubgraphFullContext().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSubgraphFullContext | PlainMessage<_LspSubgraphFullContext> | undefined | null, b2: _LspSubgraphFullContext | PlainMessage<_LspSubgraphFullContext> | undefined | null): boolean {
    return proto3.util.equals(_LspSubgraphFullContext as unknown as MessageType<_LspSubgraphFullContext>, a, b2);
  }
})();
export type LspSubgraphFullContext = InstanceType<typeof LspSubgraphFullContext$Runtime>;
var LspSubgraphFullContext: MessageType<LspSubgraphFullContext> = LspSubgraphFullContext$Runtime as unknown as MessageType<LspSubgraphFullContext>;
(LspSubgraphFullContext as MutableMessageType<LspSubgraphFullContext>).runtime = proto3;
(LspSubgraphFullContext as MutableMessageType<LspSubgraphFullContext>).typeName = "aiserver.v1.LspSubgraphFullContext";
(LspSubgraphFullContext as MutableMessageType<LspSubgraphFullContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "symbol_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "positions", kind: "message", T: LspSubgraphPosition, repeated: true },
  { no: 4, name: "context_items", kind: "message", T: LspSubgraphContextItem, repeated: true },
  {
    no: 5,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);


export { LspSubgraphPosition, LspSubgraphRange, LspSubgraphContextItem, LspSubgraphFullContext };
