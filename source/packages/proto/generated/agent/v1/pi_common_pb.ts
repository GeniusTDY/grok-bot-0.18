/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39565-39653
 * Region SHA-256: 8d1161ec8c40498522614fb2df96bec6c5c9e9b727cd7f18b4a557942ab9fb02
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiTruncation$Runtime = (() => class _PiTruncation extends Message<_PiTruncation> {
  declare truncated: boolean;
  declare truncatedBy: string;
  declare totalLines: number;
  declare outputLines: number;
  declare outputBytes: number;
  declare maxLines?: number;
  declare maxBytes?: number;
  declare firstLineExceedsLimit: boolean;
  declare lastLinePartial: boolean;
  constructor(data?: PartialMessage<_PiTruncation>) {
    super();
    this.truncated = false;
    this.truncatedBy = "";
    this.totalLines = 0;
    this.outputLines = 0;
    this.outputBytes = 0;
    this.firstLineExceedsLimit = false;
    this.lastLinePartial = false;
    proto3.util.initPartial(data, this as _PiTruncation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiTruncation {
    return new _PiTruncation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiTruncation {
    return new _PiTruncation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiTruncation {
    return new _PiTruncation().fromJsonString(jsonString, options);
  }
  static equals(a: _PiTruncation | PlainMessage<_PiTruncation> | undefined | null, b2: _PiTruncation | PlainMessage<_PiTruncation> | undefined | null): boolean {
    return proto3.util.equals(_PiTruncation as unknown as MessageType<_PiTruncation>, a, b2);
  }
})();
export type PiTruncation = InstanceType<typeof PiTruncation$Runtime>;
var PiTruncation: MessageType<PiTruncation> = PiTruncation$Runtime as unknown as MessageType<PiTruncation>;
(PiTruncation as MutableMessageType<PiTruncation>).runtime = proto3;
(PiTruncation as MutableMessageType<PiTruncation>).typeName = "agent.v1.PiTruncation";
(PiTruncation as MutableMessageType<PiTruncation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "truncated_by",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "total_lines",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "output_lines",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 5,
    name: "output_bytes",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 6, name: "max_lines", kind: "scalar", T: 13, opt: true },
  { no: 7, name: "max_bytes", kind: "scalar", T: 13, opt: true },
  {
    no: 8,
    name: "first_line_exceeds_limit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 9,
    name: "last_line_partial",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { PiTruncation };
