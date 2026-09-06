/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:40383-40547
 * Region SHA-256: 882ecd4adfd7e3fb7dcd05c507a4835e2721dfdcb01a8e8797e175e8612bac70
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiGrepToolCall$Runtime = (() => class _PiGrepToolCall extends Message<_PiGrepToolCall> {
  declare args?: PiGrepToolArgs;
  declare result?: PiGrepToolResult;
  constructor(data?: PartialMessage<_PiGrepToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiGrepToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiGrepToolCall {
    return new _PiGrepToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiGrepToolCall {
    return new _PiGrepToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiGrepToolCall {
    return new _PiGrepToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiGrepToolCall | PlainMessage<_PiGrepToolCall> | undefined | null, b2: _PiGrepToolCall | PlainMessage<_PiGrepToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepToolCall as unknown as MessageType<_PiGrepToolCall>, a, b2);
  }
})();
export type PiGrepToolCall = InstanceType<typeof PiGrepToolCall$Runtime>;
var PiGrepToolCall: MessageType<PiGrepToolCall> = PiGrepToolCall$Runtime as unknown as MessageType<PiGrepToolCall>;
(PiGrepToolCall as MutableMessageType<PiGrepToolCall>).runtime = proto3;
(PiGrepToolCall as MutableMessageType<PiGrepToolCall>).typeName = "agent.v1.PiGrepToolCall";
(PiGrepToolCall as MutableMessageType<PiGrepToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiGrepToolArgs },
  { no: 2, name: "result", kind: "message", T: PiGrepToolResult }
]);
var PiGrepToolArgs$Runtime = (() => class _PiGrepToolArgs extends Message<_PiGrepToolArgs> {
  declare pattern: string;
  declare path?: string;
  declare glob?: string;
  declare ignoreCase?: boolean;
  declare literal?: boolean;
  declare context?: number;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiGrepToolArgs>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _PiGrepToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiGrepToolArgs {
    return new _PiGrepToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiGrepToolArgs {
    return new _PiGrepToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiGrepToolArgs {
    return new _PiGrepToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiGrepToolArgs | PlainMessage<_PiGrepToolArgs> | undefined | null, b2: _PiGrepToolArgs | PlainMessage<_PiGrepToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepToolArgs as unknown as MessageType<_PiGrepToolArgs>, a, b2);
  }
})();
export type PiGrepToolArgs = InstanceType<typeof PiGrepToolArgs$Runtime>;
var PiGrepToolArgs: MessageType<PiGrepToolArgs> = PiGrepToolArgs$Runtime as unknown as MessageType<PiGrepToolArgs>;
(PiGrepToolArgs as MutableMessageType<PiGrepToolArgs>).runtime = proto3;
(PiGrepToolArgs as MutableMessageType<PiGrepToolArgs>).typeName = "agent.v1.PiGrepToolArgs";
(PiGrepToolArgs as MutableMessageType<PiGrepToolArgs>).fields = proto3.util.newFieldList(() => [
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
var PiGrepToolResult$Runtime = (() => class _PiGrepToolResult extends Message<_PiGrepToolResult> {
  declare result: { case: "success"; value: PiGrepToolSuccess } | { case: "error"; value: PiGrepToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiGrepToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiGrepToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiGrepToolResult {
    return new _PiGrepToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiGrepToolResult {
    return new _PiGrepToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiGrepToolResult {
    return new _PiGrepToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiGrepToolResult | PlainMessage<_PiGrepToolResult> | undefined | null, b2: _PiGrepToolResult | PlainMessage<_PiGrepToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepToolResult as unknown as MessageType<_PiGrepToolResult>, a, b2);
  }
})();
export type PiGrepToolResult = InstanceType<typeof PiGrepToolResult$Runtime>;
var PiGrepToolResult: MessageType<PiGrepToolResult> = PiGrepToolResult$Runtime as unknown as MessageType<PiGrepToolResult>;
(PiGrepToolResult as MutableMessageType<PiGrepToolResult>).runtime = proto3;
(PiGrepToolResult as MutableMessageType<PiGrepToolResult>).typeName = "agent.v1.PiGrepToolResult";
(PiGrepToolResult as MutableMessageType<PiGrepToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiGrepToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiGrepToolError, oneof: "result" }
]);
var PiGrepToolSuccess$Runtime = (() => class _PiGrepToolSuccess extends Message<_PiGrepToolSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare matchLimitReached?: number;
  declare linesTruncated: boolean;
  constructor(data?: PartialMessage<_PiGrepToolSuccess>) {
    super();
    this.output = "";
    this.linesTruncated = false;
    proto3.util.initPartial(data, this as _PiGrepToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiGrepToolSuccess {
    return new _PiGrepToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiGrepToolSuccess {
    return new _PiGrepToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiGrepToolSuccess {
    return new _PiGrepToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiGrepToolSuccess | PlainMessage<_PiGrepToolSuccess> | undefined | null, b2: _PiGrepToolSuccess | PlainMessage<_PiGrepToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepToolSuccess as unknown as MessageType<_PiGrepToolSuccess>, a, b2);
  }
})();
export type PiGrepToolSuccess = InstanceType<typeof PiGrepToolSuccess$Runtime>;
var PiGrepToolSuccess: MessageType<PiGrepToolSuccess> = PiGrepToolSuccess$Runtime as unknown as MessageType<PiGrepToolSuccess>;
(PiGrepToolSuccess as MutableMessageType<PiGrepToolSuccess>).runtime = proto3;
(PiGrepToolSuccess as MutableMessageType<PiGrepToolSuccess>).typeName = "agent.v1.PiGrepToolSuccess";
(PiGrepToolSuccess as MutableMessageType<PiGrepToolSuccess>).fields = proto3.util.newFieldList(() => [
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
var PiGrepToolError$Runtime = (() => class _PiGrepToolError extends Message<_PiGrepToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiGrepToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiGrepToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiGrepToolError {
    return new _PiGrepToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiGrepToolError {
    return new _PiGrepToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiGrepToolError {
    return new _PiGrepToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiGrepToolError | PlainMessage<_PiGrepToolError> | undefined | null, b2: _PiGrepToolError | PlainMessage<_PiGrepToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiGrepToolError as unknown as MessageType<_PiGrepToolError>, a, b2);
  }
})();
export type PiGrepToolError = InstanceType<typeof PiGrepToolError$Runtime>;
var PiGrepToolError: MessageType<PiGrepToolError> = PiGrepToolError$Runtime as unknown as MessageType<PiGrepToolError>;
(PiGrepToolError as MutableMessageType<PiGrepToolError>).runtime = proto3;
(PiGrepToolError as MutableMessageType<PiGrepToolError>).typeName = "agent.v1.PiGrepToolError";
(PiGrepToolError as MutableMessageType<PiGrepToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiGrepToolCall, PiGrepToolArgs, PiGrepToolResult, PiGrepToolSuccess, PiGrepToolError };
