/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:40701-40845
 * Region SHA-256: 132f92cd207e6ac07d52a00ac36fce46c616ea05943cfa1d949c781ceebe0aab
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiLsToolCall$Runtime = (() => class _PiLsToolCall extends Message<_PiLsToolCall> {
  declare args?: PiLsToolArgs;
  declare result?: PiLsToolResult;
  constructor(data?: PartialMessage<_PiLsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiLsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiLsToolCall {
    return new _PiLsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiLsToolCall {
    return new _PiLsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiLsToolCall {
    return new _PiLsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiLsToolCall | PlainMessage<_PiLsToolCall> | undefined | null, b2: _PiLsToolCall | PlainMessage<_PiLsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiLsToolCall as unknown as MessageType<_PiLsToolCall>, a, b2);
  }
})();
export type PiLsToolCall = InstanceType<typeof PiLsToolCall$Runtime>;
var PiLsToolCall: MessageType<PiLsToolCall> = PiLsToolCall$Runtime as unknown as MessageType<PiLsToolCall>;
(PiLsToolCall as MutableMessageType<PiLsToolCall>).runtime = proto3;
(PiLsToolCall as MutableMessageType<PiLsToolCall>).typeName = "agent.v1.PiLsToolCall";
(PiLsToolCall as MutableMessageType<PiLsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiLsToolArgs },
  { no: 2, name: "result", kind: "message", T: PiLsToolResult }
]);
var PiLsToolArgs$Runtime = (() => class _PiLsToolArgs extends Message<_PiLsToolArgs> {
  declare path?: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiLsToolArgs>) {
    super();
    proto3.util.initPartial(data, this as _PiLsToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiLsToolArgs {
    return new _PiLsToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiLsToolArgs {
    return new _PiLsToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiLsToolArgs {
    return new _PiLsToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiLsToolArgs | PlainMessage<_PiLsToolArgs> | undefined | null, b2: _PiLsToolArgs | PlainMessage<_PiLsToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiLsToolArgs as unknown as MessageType<_PiLsToolArgs>, a, b2);
  }
})();
export type PiLsToolArgs = InstanceType<typeof PiLsToolArgs$Runtime>;
var PiLsToolArgs: MessageType<PiLsToolArgs> = PiLsToolArgs$Runtime as unknown as MessageType<PiLsToolArgs>;
(PiLsToolArgs as MutableMessageType<PiLsToolArgs>).runtime = proto3;
(PiLsToolArgs as MutableMessageType<PiLsToolArgs>).typeName = "agent.v1.PiLsToolArgs";
(PiLsToolArgs as MutableMessageType<PiLsToolArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var PiLsToolResult$Runtime = (() => class _PiLsToolResult extends Message<_PiLsToolResult> {
  declare result: { case: "success"; value: PiLsToolSuccess } | { case: "error"; value: PiLsToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiLsToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiLsToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiLsToolResult {
    return new _PiLsToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiLsToolResult {
    return new _PiLsToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiLsToolResult {
    return new _PiLsToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiLsToolResult | PlainMessage<_PiLsToolResult> | undefined | null, b2: _PiLsToolResult | PlainMessage<_PiLsToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiLsToolResult as unknown as MessageType<_PiLsToolResult>, a, b2);
  }
})();
export type PiLsToolResult = InstanceType<typeof PiLsToolResult$Runtime>;
var PiLsToolResult: MessageType<PiLsToolResult> = PiLsToolResult$Runtime as unknown as MessageType<PiLsToolResult>;
(PiLsToolResult as MutableMessageType<PiLsToolResult>).runtime = proto3;
(PiLsToolResult as MutableMessageType<PiLsToolResult>).typeName = "agent.v1.PiLsToolResult";
(PiLsToolResult as MutableMessageType<PiLsToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiLsToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiLsToolError, oneof: "result" }
]);
var PiLsToolSuccess$Runtime = (() => class _PiLsToolSuccess extends Message<_PiLsToolSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare entryLimitReached?: number;
  constructor(data?: PartialMessage<_PiLsToolSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiLsToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiLsToolSuccess {
    return new _PiLsToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiLsToolSuccess {
    return new _PiLsToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiLsToolSuccess {
    return new _PiLsToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiLsToolSuccess | PlainMessage<_PiLsToolSuccess> | undefined | null, b2: _PiLsToolSuccess | PlainMessage<_PiLsToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiLsToolSuccess as unknown as MessageType<_PiLsToolSuccess>, a, b2);
  }
})();
export type PiLsToolSuccess = InstanceType<typeof PiLsToolSuccess$Runtime>;
var PiLsToolSuccess: MessageType<PiLsToolSuccess> = PiLsToolSuccess$Runtime as unknown as MessageType<PiLsToolSuccess>;
(PiLsToolSuccess as MutableMessageType<PiLsToolSuccess>).runtime = proto3;
(PiLsToolSuccess as MutableMessageType<PiLsToolSuccess>).typeName = "agent.v1.PiLsToolSuccess";
(PiLsToolSuccess as MutableMessageType<PiLsToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true },
  { no: 3, name: "entry_limit_reached", kind: "scalar", T: 13, opt: true }
]);
var PiLsToolError$Runtime = (() => class _PiLsToolError extends Message<_PiLsToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiLsToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiLsToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiLsToolError {
    return new _PiLsToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiLsToolError {
    return new _PiLsToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiLsToolError {
    return new _PiLsToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiLsToolError | PlainMessage<_PiLsToolError> | undefined | null, b2: _PiLsToolError | PlainMessage<_PiLsToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiLsToolError as unknown as MessageType<_PiLsToolError>, a, b2);
  }
})();
export type PiLsToolError = InstanceType<typeof PiLsToolError$Runtime>;
var PiLsToolError: MessageType<PiLsToolError> = PiLsToolError$Runtime as unknown as MessageType<PiLsToolError>;
(PiLsToolError as MutableMessageType<PiLsToolError>).runtime = proto3;
(PiLsToolError as MutableMessageType<PiLsToolError>).typeName = "agent.v1.PiLsToolError";
(PiLsToolError as MutableMessageType<PiLsToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiLsToolCall, PiLsToolArgs, PiLsToolResult, PiLsToolSuccess, PiLsToolError };
