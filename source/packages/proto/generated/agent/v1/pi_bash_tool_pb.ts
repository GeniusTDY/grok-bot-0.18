/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39806-39959
 * Region SHA-256: 2296ef0184665ef590ea1b7fd4e2fc714c1ca192dd35e75948d57ef6344986c0
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiBashToolCall$Runtime = (() => class _PiBashToolCall extends Message<_PiBashToolCall> {
  declare args?: PiBashToolArgs;
  declare result?: PiBashToolResult;
  constructor(data?: PartialMessage<_PiBashToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiBashToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiBashToolCall {
    return new _PiBashToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiBashToolCall {
    return new _PiBashToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiBashToolCall {
    return new _PiBashToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiBashToolCall | PlainMessage<_PiBashToolCall> | undefined | null, b2: _PiBashToolCall | PlainMessage<_PiBashToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiBashToolCall as unknown as MessageType<_PiBashToolCall>, a, b2);
  }
})();
export type PiBashToolCall = InstanceType<typeof PiBashToolCall$Runtime>;
var PiBashToolCall: MessageType<PiBashToolCall> = PiBashToolCall$Runtime as unknown as MessageType<PiBashToolCall>;
(PiBashToolCall as MutableMessageType<PiBashToolCall>).runtime = proto3;
(PiBashToolCall as MutableMessageType<PiBashToolCall>).typeName = "agent.v1.PiBashToolCall";
(PiBashToolCall as MutableMessageType<PiBashToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiBashToolArgs },
  { no: 2, name: "result", kind: "message", T: PiBashToolResult }
]);
var PiBashToolArgs$Runtime = (() => class _PiBashToolArgs extends Message<_PiBashToolArgs> {
  declare command: string;
  declare timeout?: number;
  constructor(data?: PartialMessage<_PiBashToolArgs>) {
    super();
    this.command = "";
    proto3.util.initPartial(data, this as _PiBashToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiBashToolArgs {
    return new _PiBashToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiBashToolArgs {
    return new _PiBashToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiBashToolArgs {
    return new _PiBashToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiBashToolArgs | PlainMessage<_PiBashToolArgs> | undefined | null, b2: _PiBashToolArgs | PlainMessage<_PiBashToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiBashToolArgs as unknown as MessageType<_PiBashToolArgs>, a, b2);
  }
})();
export type PiBashToolArgs = InstanceType<typeof PiBashToolArgs$Runtime>;
var PiBashToolArgs: MessageType<PiBashToolArgs> = PiBashToolArgs$Runtime as unknown as MessageType<PiBashToolArgs>;
(PiBashToolArgs as MutableMessageType<PiBashToolArgs>).runtime = proto3;
(PiBashToolArgs as MutableMessageType<PiBashToolArgs>).typeName = "agent.v1.PiBashToolArgs";
(PiBashToolArgs as MutableMessageType<PiBashToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "timeout", kind: "scalar", T: 1, opt: true }
]);
var PiBashToolResult$Runtime = (() => class _PiBashToolResult extends Message<_PiBashToolResult> {
  declare result: { case: "success"; value: PiBashToolSuccess } | { case: "error"; value: PiBashToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiBashToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiBashToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiBashToolResult {
    return new _PiBashToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiBashToolResult {
    return new _PiBashToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiBashToolResult {
    return new _PiBashToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiBashToolResult | PlainMessage<_PiBashToolResult> | undefined | null, b2: _PiBashToolResult | PlainMessage<_PiBashToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiBashToolResult as unknown as MessageType<_PiBashToolResult>, a, b2);
  }
})();
export type PiBashToolResult = InstanceType<typeof PiBashToolResult$Runtime>;
var PiBashToolResult: MessageType<PiBashToolResult> = PiBashToolResult$Runtime as unknown as MessageType<PiBashToolResult>;
(PiBashToolResult as MutableMessageType<PiBashToolResult>).runtime = proto3;
(PiBashToolResult as MutableMessageType<PiBashToolResult>).typeName = "agent.v1.PiBashToolResult";
(PiBashToolResult as MutableMessageType<PiBashToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiBashToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiBashToolError, oneof: "result" }
]);
var PiBashToolSuccess$Runtime = (() => class _PiBashToolSuccess extends Message<_PiBashToolSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare fullOutputPath?: string;
  constructor(data?: PartialMessage<_PiBashToolSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiBashToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiBashToolSuccess {
    return new _PiBashToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiBashToolSuccess {
    return new _PiBashToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiBashToolSuccess {
    return new _PiBashToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiBashToolSuccess | PlainMessage<_PiBashToolSuccess> | undefined | null, b2: _PiBashToolSuccess | PlainMessage<_PiBashToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiBashToolSuccess as unknown as MessageType<_PiBashToolSuccess>, a, b2);
  }
})();
export type PiBashToolSuccess = InstanceType<typeof PiBashToolSuccess$Runtime>;
var PiBashToolSuccess: MessageType<PiBashToolSuccess> = PiBashToolSuccess$Runtime as unknown as MessageType<PiBashToolSuccess>;
(PiBashToolSuccess as MutableMessageType<PiBashToolSuccess>).runtime = proto3;
(PiBashToolSuccess as MutableMessageType<PiBashToolSuccess>).typeName = "agent.v1.PiBashToolSuccess";
(PiBashToolSuccess as MutableMessageType<PiBashToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true },
  { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }
]);
var PiBashToolError$Runtime = (() => class _PiBashToolError extends Message<_PiBashToolError> {
  declare error: string;
  declare truncation?: PiTruncation;
  declare fullOutputPath?: string;
  constructor(data?: PartialMessage<_PiBashToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiBashToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiBashToolError {
    return new _PiBashToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiBashToolError {
    return new _PiBashToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiBashToolError {
    return new _PiBashToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiBashToolError | PlainMessage<_PiBashToolError> | undefined | null, b2: _PiBashToolError | PlainMessage<_PiBashToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiBashToolError as unknown as MessageType<_PiBashToolError>, a, b2);
  }
})();
export type PiBashToolError = InstanceType<typeof PiBashToolError$Runtime>;
var PiBashToolError: MessageType<PiBashToolError> = PiBashToolError$Runtime as unknown as MessageType<PiBashToolError>;
(PiBashToolError as MutableMessageType<PiBashToolError>).runtime = proto3;
(PiBashToolError as MutableMessageType<PiBashToolError>).typeName = "agent.v1.PiBashToolError";
(PiBashToolError as MutableMessageType<PiBashToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true },
  { no: 3, name: "full_output_path", kind: "scalar", T: 9, opt: true }
]);


export { PiBashToolCall, PiBashToolArgs, PiBashToolResult, PiBashToolSuccess, PiBashToolError };
