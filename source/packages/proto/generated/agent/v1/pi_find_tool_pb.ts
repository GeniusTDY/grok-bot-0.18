/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:40548-40700
 * Region SHA-256: 2751692f0e6caf8ddb632eb1792faa8694f1547effd7f1e6392cd6ac1dd156d3
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiFindToolCall$Runtime = (() => class _PiFindToolCall extends Message<_PiFindToolCall> {
  declare args?: PiFindToolArgs;
  declare result?: PiFindToolResult;
  constructor(data?: PartialMessage<_PiFindToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiFindToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiFindToolCall {
    return new _PiFindToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiFindToolCall {
    return new _PiFindToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiFindToolCall {
    return new _PiFindToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiFindToolCall | PlainMessage<_PiFindToolCall> | undefined | null, b2: _PiFindToolCall | PlainMessage<_PiFindToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiFindToolCall as unknown as MessageType<_PiFindToolCall>, a, b2);
  }
})();
export type PiFindToolCall = InstanceType<typeof PiFindToolCall$Runtime>;
var PiFindToolCall: MessageType<PiFindToolCall> = PiFindToolCall$Runtime as unknown as MessageType<PiFindToolCall>;
(PiFindToolCall as MutableMessageType<PiFindToolCall>).runtime = proto3;
(PiFindToolCall as MutableMessageType<PiFindToolCall>).typeName = "agent.v1.PiFindToolCall";
(PiFindToolCall as MutableMessageType<PiFindToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiFindToolArgs },
  { no: 2, name: "result", kind: "message", T: PiFindToolResult }
]);
var PiFindToolArgs$Runtime = (() => class _PiFindToolArgs extends Message<_PiFindToolArgs> {
  declare pattern: string;
  declare path?: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiFindToolArgs>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _PiFindToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiFindToolArgs {
    return new _PiFindToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiFindToolArgs {
    return new _PiFindToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiFindToolArgs {
    return new _PiFindToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiFindToolArgs | PlainMessage<_PiFindToolArgs> | undefined | null, b2: _PiFindToolArgs | PlainMessage<_PiFindToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiFindToolArgs as unknown as MessageType<_PiFindToolArgs>, a, b2);
  }
})();
export type PiFindToolArgs = InstanceType<typeof PiFindToolArgs$Runtime>;
var PiFindToolArgs: MessageType<PiFindToolArgs> = PiFindToolArgs$Runtime as unknown as MessageType<PiFindToolArgs>;
(PiFindToolArgs as MutableMessageType<PiFindToolArgs>).runtime = proto3;
(PiFindToolArgs as MutableMessageType<PiFindToolArgs>).typeName = "agent.v1.PiFindToolArgs";
(PiFindToolArgs as MutableMessageType<PiFindToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var PiFindToolResult$Runtime = (() => class _PiFindToolResult extends Message<_PiFindToolResult> {
  declare result: { case: "success"; value: PiFindToolSuccess } | { case: "error"; value: PiFindToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiFindToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiFindToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiFindToolResult {
    return new _PiFindToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiFindToolResult {
    return new _PiFindToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiFindToolResult {
    return new _PiFindToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiFindToolResult | PlainMessage<_PiFindToolResult> | undefined | null, b2: _PiFindToolResult | PlainMessage<_PiFindToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiFindToolResult as unknown as MessageType<_PiFindToolResult>, a, b2);
  }
})();
export type PiFindToolResult = InstanceType<typeof PiFindToolResult$Runtime>;
var PiFindToolResult: MessageType<PiFindToolResult> = PiFindToolResult$Runtime as unknown as MessageType<PiFindToolResult>;
(PiFindToolResult as MutableMessageType<PiFindToolResult>).runtime = proto3;
(PiFindToolResult as MutableMessageType<PiFindToolResult>).typeName = "agent.v1.PiFindToolResult";
(PiFindToolResult as MutableMessageType<PiFindToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiFindToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiFindToolError, oneof: "result" }
]);
var PiFindToolSuccess$Runtime = (() => class _PiFindToolSuccess extends Message<_PiFindToolSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare resultLimitReached?: number;
  constructor(data?: PartialMessage<_PiFindToolSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiFindToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiFindToolSuccess {
    return new _PiFindToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiFindToolSuccess {
    return new _PiFindToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiFindToolSuccess {
    return new _PiFindToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiFindToolSuccess | PlainMessage<_PiFindToolSuccess> | undefined | null, b2: _PiFindToolSuccess | PlainMessage<_PiFindToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiFindToolSuccess as unknown as MessageType<_PiFindToolSuccess>, a, b2);
  }
})();
export type PiFindToolSuccess = InstanceType<typeof PiFindToolSuccess$Runtime>;
var PiFindToolSuccess: MessageType<PiFindToolSuccess> = PiFindToolSuccess$Runtime as unknown as MessageType<PiFindToolSuccess>;
(PiFindToolSuccess as MutableMessageType<PiFindToolSuccess>).runtime = proto3;
(PiFindToolSuccess as MutableMessageType<PiFindToolSuccess>).typeName = "agent.v1.PiFindToolSuccess";
(PiFindToolSuccess as MutableMessageType<PiFindToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true },
  { no: 3, name: "result_limit_reached", kind: "scalar", T: 13, opt: true }
]);
var PiFindToolError$Runtime = (() => class _PiFindToolError extends Message<_PiFindToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiFindToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiFindToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiFindToolError {
    return new _PiFindToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiFindToolError {
    return new _PiFindToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiFindToolError {
    return new _PiFindToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiFindToolError | PlainMessage<_PiFindToolError> | undefined | null, b2: _PiFindToolError | PlainMessage<_PiFindToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiFindToolError as unknown as MessageType<_PiFindToolError>, a, b2);
  }
})();
export type PiFindToolError = InstanceType<typeof PiFindToolError$Runtime>;
var PiFindToolError: MessageType<PiFindToolError> = PiFindToolError$Runtime as unknown as MessageType<PiFindToolError>;
(PiFindToolError as MutableMessageType<PiFindToolError>).runtime = proto3;
(PiFindToolError as MutableMessageType<PiFindToolError>).typeName = "agent.v1.PiFindToolError";
(PiFindToolError as MutableMessageType<PiFindToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiFindToolCall, PiFindToolArgs, PiFindToolResult, PiFindToolSuccess, PiFindToolError };
