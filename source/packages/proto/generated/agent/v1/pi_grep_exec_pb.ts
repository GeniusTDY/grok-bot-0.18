/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64647-64787
 * Region SHA-256: 8b09d581a96afc2290d2bf7bdcfddae41237c32e88d5c682b1751fbce24fdc87
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiGrepExecArgs$Runtime = (() => class _PiGrepExecArgs extends Message<_PiGrepExecArgs> {
  declare pattern: string;
  declare path?: string;
  declare glob?: string;
  declare ignoreCase?: boolean;
  declare literal?: boolean;
  declare context?: number;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiGrepExecArgs>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _PiGrepExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiGrepExecArgs {
    return new _PiGrepExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiGrepExecArgs {
    return new _PiGrepExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiGrepExecArgs {
    return new _PiGrepExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiGrepExecArgs | PlainMessage<_PiGrepExecArgs> | undefined | null, b2: _PiGrepExecArgs | PlainMessage<_PiGrepExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepExecArgs as unknown as MessageType<_PiGrepExecArgs>, a, b2);
  }
})();
export type PiGrepExecArgs = InstanceType<typeof PiGrepExecArgs$Runtime>;
var PiGrepExecArgs: MessageType<PiGrepExecArgs> = PiGrepExecArgs$Runtime as unknown as MessageType<PiGrepExecArgs>;
(PiGrepExecArgs as MutableMessageType<PiGrepExecArgs>).runtime = proto3;
(PiGrepExecArgs as MutableMessageType<PiGrepExecArgs>).typeName = "agent.v1.PiGrepExecArgs";
(PiGrepExecArgs as MutableMessageType<PiGrepExecArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "glob", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "ignore_case", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "literal", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "context", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var PiGrepExecResult$Runtime = (() => class _PiGrepExecResult extends Message<_PiGrepExecResult> {
  declare result: { case: "success"; value: PiGrepExecSuccess } | { case: "error"; value: PiGrepExecError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiGrepExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiGrepExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiGrepExecResult {
    return new _PiGrepExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiGrepExecResult {
    return new _PiGrepExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiGrepExecResult {
    return new _PiGrepExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiGrepExecResult | PlainMessage<_PiGrepExecResult> | undefined | null, b2: _PiGrepExecResult | PlainMessage<_PiGrepExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepExecResult as unknown as MessageType<_PiGrepExecResult>, a, b2);
  }
})();
export type PiGrepExecResult = InstanceType<typeof PiGrepExecResult$Runtime>;
var PiGrepExecResult: MessageType<PiGrepExecResult> = PiGrepExecResult$Runtime as unknown as MessageType<PiGrepExecResult>;
(PiGrepExecResult as MutableMessageType<PiGrepExecResult>).runtime = proto3;
(PiGrepExecResult as MutableMessageType<PiGrepExecResult>).typeName = "agent.v1.PiGrepExecResult";
(PiGrepExecResult as MutableMessageType<PiGrepExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiGrepExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiGrepExecError, oneof: "result" }
]);
var PiGrepExecSuccess$Runtime = (() => class _PiGrepExecSuccess extends Message<_PiGrepExecSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare matchLimitReached?: number;
  declare linesTruncated: boolean;
  constructor(data?: PartialMessage<_PiGrepExecSuccess>) {
    super();
    this.output = "";
    this.linesTruncated = false;
    proto3.util.initPartial(data, this as _PiGrepExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiGrepExecSuccess {
    return new _PiGrepExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiGrepExecSuccess {
    return new _PiGrepExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiGrepExecSuccess {
    return new _PiGrepExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiGrepExecSuccess | PlainMessage<_PiGrepExecSuccess> | undefined | null, b2: _PiGrepExecSuccess | PlainMessage<_PiGrepExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepExecSuccess as unknown as MessageType<_PiGrepExecSuccess>, a, b2);
  }
})();
export type PiGrepExecSuccess = InstanceType<typeof PiGrepExecSuccess$Runtime>;
var PiGrepExecSuccess: MessageType<PiGrepExecSuccess> = PiGrepExecSuccess$Runtime as unknown as MessageType<PiGrepExecSuccess>;
(PiGrepExecSuccess as MutableMessageType<PiGrepExecSuccess>).runtime = proto3;
(PiGrepExecSuccess as MutableMessageType<PiGrepExecSuccess>).typeName = "agent.v1.PiGrepExecSuccess";
(PiGrepExecSuccess as MutableMessageType<PiGrepExecSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true },
  { no: 3, name: "match_limit_reached", kind: "scalar", T: 13, opt: true },
  {
    no: 4,
    name: "lines_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var PiGrepExecError$Runtime = (() => class _PiGrepExecError extends Message<_PiGrepExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiGrepExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiGrepExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiGrepExecError {
    return new _PiGrepExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiGrepExecError {
    return new _PiGrepExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiGrepExecError {
    return new _PiGrepExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiGrepExecError | PlainMessage<_PiGrepExecError> | undefined | null, b2: _PiGrepExecError | PlainMessage<_PiGrepExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepExecError as unknown as MessageType<_PiGrepExecError>, a, b2);
  }
})();
export type PiGrepExecError = InstanceType<typeof PiGrepExecError$Runtime>;
var PiGrepExecError: MessageType<PiGrepExecError> = PiGrepExecError$Runtime as unknown as MessageType<PiGrepExecError>;
(PiGrepExecError as MutableMessageType<PiGrepExecError>).runtime = proto3;
(PiGrepExecError as MutableMessageType<PiGrepExecError>).typeName = "agent.v1.PiGrepExecError";
(PiGrepExecError as MutableMessageType<PiGrepExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiGrepExecArgs, PiGrepExecResult, PiGrepExecSuccess, PiGrepExecError };
