/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39654-39805
 * Region SHA-256: ff9ec2efeb4203ff50cb6fe327a03b191242622febe3d1baf65aa686bf4a27ef
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiReadToolCall$Runtime = (() => class _PiReadToolCall extends Message<_PiReadToolCall> {
  declare args?: PiReadToolArgs;
  declare result?: PiReadToolResult;
  constructor(data?: PartialMessage<_PiReadToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiReadToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiReadToolCall {
    return new _PiReadToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiReadToolCall {
    return new _PiReadToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiReadToolCall {
    return new _PiReadToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiReadToolCall | PlainMessage<_PiReadToolCall> | undefined | null, b2: _PiReadToolCall | PlainMessage<_PiReadToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiReadToolCall as unknown as MessageType<_PiReadToolCall>, a, b2);
  }
})();
export type PiReadToolCall = InstanceType<typeof PiReadToolCall$Runtime>;
var PiReadToolCall: MessageType<PiReadToolCall> = PiReadToolCall$Runtime as unknown as MessageType<PiReadToolCall>;
(PiReadToolCall as MutableMessageType<PiReadToolCall>).runtime = proto3;
(PiReadToolCall as MutableMessageType<PiReadToolCall>).typeName = "agent.v1.PiReadToolCall";
(PiReadToolCall as MutableMessageType<PiReadToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiReadToolArgs },
  { no: 2, name: "result", kind: "message", T: PiReadToolResult }
]);
var PiReadToolArgs$Runtime = (() => class _PiReadToolArgs extends Message<_PiReadToolArgs> {
  declare path: string;
  declare offset?: number;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiReadToolArgs>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _PiReadToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiReadToolArgs {
    return new _PiReadToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiReadToolArgs {
    return new _PiReadToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiReadToolArgs {
    return new _PiReadToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiReadToolArgs | PlainMessage<_PiReadToolArgs> | undefined | null, b2: _PiReadToolArgs | PlainMessage<_PiReadToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiReadToolArgs as unknown as MessageType<_PiReadToolArgs>, a, b2);
  }
})();
export type PiReadToolArgs = InstanceType<typeof PiReadToolArgs$Runtime>;
var PiReadToolArgs: MessageType<PiReadToolArgs> = PiReadToolArgs$Runtime as unknown as MessageType<PiReadToolArgs>;
(PiReadToolArgs as MutableMessageType<PiReadToolArgs>).runtime = proto3;
(PiReadToolArgs as MutableMessageType<PiReadToolArgs>).typeName = "agent.v1.PiReadToolArgs";
(PiReadToolArgs as MutableMessageType<PiReadToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "offset", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var PiReadToolResult$Runtime = (() => class _PiReadToolResult extends Message<_PiReadToolResult> {
  declare result: { case: "success"; value: PiReadToolSuccess } | { case: "error"; value: PiReadToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiReadToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiReadToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiReadToolResult {
    return new _PiReadToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiReadToolResult {
    return new _PiReadToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiReadToolResult {
    return new _PiReadToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiReadToolResult | PlainMessage<_PiReadToolResult> | undefined | null, b2: _PiReadToolResult | PlainMessage<_PiReadToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiReadToolResult as unknown as MessageType<_PiReadToolResult>, a, b2);
  }
})();
export type PiReadToolResult = InstanceType<typeof PiReadToolResult$Runtime>;
var PiReadToolResult: MessageType<PiReadToolResult> = PiReadToolResult$Runtime as unknown as MessageType<PiReadToolResult>;
(PiReadToolResult as MutableMessageType<PiReadToolResult>).runtime = proto3;
(PiReadToolResult as MutableMessageType<PiReadToolResult>).typeName = "agent.v1.PiReadToolResult";
(PiReadToolResult as MutableMessageType<PiReadToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiReadToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiReadToolError, oneof: "result" }
]);
var PiReadToolSuccess$Runtime = (() => class _PiReadToolSuccess extends Message<_PiReadToolSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  constructor(data?: PartialMessage<_PiReadToolSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiReadToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiReadToolSuccess {
    return new _PiReadToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiReadToolSuccess {
    return new _PiReadToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiReadToolSuccess {
    return new _PiReadToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiReadToolSuccess | PlainMessage<_PiReadToolSuccess> | undefined | null, b2: _PiReadToolSuccess | PlainMessage<_PiReadToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiReadToolSuccess as unknown as MessageType<_PiReadToolSuccess>, a, b2);
  }
})();
export type PiReadToolSuccess = InstanceType<typeof PiReadToolSuccess$Runtime>;
var PiReadToolSuccess: MessageType<PiReadToolSuccess> = PiReadToolSuccess$Runtime as unknown as MessageType<PiReadToolSuccess>;
(PiReadToolSuccess as MutableMessageType<PiReadToolSuccess>).runtime = proto3;
(PiReadToolSuccess as MutableMessageType<PiReadToolSuccess>).typeName = "agent.v1.PiReadToolSuccess";
(PiReadToolSuccess as MutableMessageType<PiReadToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }
]);
var PiReadToolError$Runtime = (() => class _PiReadToolError extends Message<_PiReadToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiReadToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiReadToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiReadToolError {
    return new _PiReadToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiReadToolError {
    return new _PiReadToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiReadToolError {
    return new _PiReadToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiReadToolError | PlainMessage<_PiReadToolError> | undefined | null, b2: _PiReadToolError | PlainMessage<_PiReadToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiReadToolError as unknown as MessageType<_PiReadToolError>, a, b2);
  }
})();
export type PiReadToolError = InstanceType<typeof PiReadToolError$Runtime>;
var PiReadToolError: MessageType<PiReadToolError> = PiReadToolError$Runtime as unknown as MessageType<PiReadToolError>;
(PiReadToolError as MutableMessageType<PiReadToolError>).runtime = proto3;
(PiReadToolError as MutableMessageType<PiReadToolError>).typeName = "agent.v1.PiReadToolError";
(PiReadToolError as MutableMessageType<PiReadToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiReadToolCall, PiReadToolArgs, PiReadToolResult, PiReadToolSuccess, PiReadToolError };
