/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:40196-40382
 * Region SHA-256: 1acd15c2a27aad6aaf3aae195fe94ad2d0bd30e0212f16a79e3cfb32780867ec
 * Atomic B1 exports: 6 messages + 0 enums = 6
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiWriteToolCall$Runtime = (() => class _PiWriteToolCall extends Message<_PiWriteToolCall> {
  declare args?: PiWriteToolArgs;
  declare result?: PiWriteToolResult;
  constructor(data?: PartialMessage<_PiWriteToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiWriteToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolCall {
    return new _PiWriteToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolCall {
    return new _PiWriteToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolCall {
    return new _PiWriteToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolCall | PlainMessage<_PiWriteToolCall> | undefined | null, b2: _PiWriteToolCall | PlainMessage<_PiWriteToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolCall as unknown as MessageType<_PiWriteToolCall>, a, b2);
  }
})();
export type PiWriteToolCall = InstanceType<typeof PiWriteToolCall$Runtime>;
var PiWriteToolCall: MessageType<PiWriteToolCall> = PiWriteToolCall$Runtime as unknown as MessageType<PiWriteToolCall>;
(PiWriteToolCall as MutableMessageType<PiWriteToolCall>).runtime = proto3;
(PiWriteToolCall as MutableMessageType<PiWriteToolCall>).typeName = "agent.v1.PiWriteToolCall";
(PiWriteToolCall as MutableMessageType<PiWriteToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiWriteToolArgs },
  { no: 2, name: "result", kind: "message", T: PiWriteToolResult }
]);
var PiWriteToolArgs$Runtime = (() => class _PiWriteToolArgs extends Message<_PiWriteToolArgs> {
  declare path: string;
  declare content: string;
  constructor(data?: PartialMessage<_PiWriteToolArgs>) {
    super();
    this.path = "";
    this.content = "";
    proto3.util.initPartial(data, this as _PiWriteToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolArgs {
    return new _PiWriteToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolArgs {
    return new _PiWriteToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolArgs {
    return new _PiWriteToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolArgs | PlainMessage<_PiWriteToolArgs> | undefined | null, b2: _PiWriteToolArgs | PlainMessage<_PiWriteToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolArgs as unknown as MessageType<_PiWriteToolArgs>, a, b2);
  }
})();
export type PiWriteToolArgs = InstanceType<typeof PiWriteToolArgs$Runtime>;
var PiWriteToolArgs: MessageType<PiWriteToolArgs> = PiWriteToolArgs$Runtime as unknown as MessageType<PiWriteToolArgs>;
(PiWriteToolArgs as MutableMessageType<PiWriteToolArgs>).runtime = proto3;
(PiWriteToolArgs as MutableMessageType<PiWriteToolArgs>).typeName = "agent.v1.PiWriteToolArgs";
(PiWriteToolArgs as MutableMessageType<PiWriteToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiWriteToolResult$Runtime = (() => class _PiWriteToolResult extends Message<_PiWriteToolResult> {
  declare result: { case: "success"; value: PiWriteToolSuccess } | { case: "error"; value: PiWriteToolError } | { case: "rejected"; value: PiWriteToolRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiWriteToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiWriteToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolResult {
    return new _PiWriteToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolResult {
    return new _PiWriteToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolResult {
    return new _PiWriteToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolResult | PlainMessage<_PiWriteToolResult> | undefined | null, b2: _PiWriteToolResult | PlainMessage<_PiWriteToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolResult as unknown as MessageType<_PiWriteToolResult>, a, b2);
  }
})();
export type PiWriteToolResult = InstanceType<typeof PiWriteToolResult$Runtime>;
var PiWriteToolResult: MessageType<PiWriteToolResult> = PiWriteToolResult$Runtime as unknown as MessageType<PiWriteToolResult>;
(PiWriteToolResult as MutableMessageType<PiWriteToolResult>).runtime = proto3;
(PiWriteToolResult as MutableMessageType<PiWriteToolResult>).typeName = "agent.v1.PiWriteToolResult";
(PiWriteToolResult as MutableMessageType<PiWriteToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiWriteToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiWriteToolError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: PiWriteToolRejected, oneof: "result" }
]);
var PiWriteToolSuccess$Runtime = (() => class _PiWriteToolSuccess extends Message<_PiWriteToolSuccess> {
  declare output: string;
  constructor(data?: PartialMessage<_PiWriteToolSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiWriteToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolSuccess {
    return new _PiWriteToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolSuccess {
    return new _PiWriteToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolSuccess {
    return new _PiWriteToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolSuccess | PlainMessage<_PiWriteToolSuccess> | undefined | null, b2: _PiWriteToolSuccess | PlainMessage<_PiWriteToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolSuccess as unknown as MessageType<_PiWriteToolSuccess>, a, b2);
  }
})();
export type PiWriteToolSuccess = InstanceType<typeof PiWriteToolSuccess$Runtime>;
var PiWriteToolSuccess: MessageType<PiWriteToolSuccess> = PiWriteToolSuccess$Runtime as unknown as MessageType<PiWriteToolSuccess>;
(PiWriteToolSuccess as MutableMessageType<PiWriteToolSuccess>).runtime = proto3;
(PiWriteToolSuccess as MutableMessageType<PiWriteToolSuccess>).typeName = "agent.v1.PiWriteToolSuccess";
(PiWriteToolSuccess as MutableMessageType<PiWriteToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiWriteToolError$Runtime = (() => class _PiWriteToolError extends Message<_PiWriteToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiWriteToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiWriteToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolError {
    return new _PiWriteToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolError {
    return new _PiWriteToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolError {
    return new _PiWriteToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolError | PlainMessage<_PiWriteToolError> | undefined | null, b2: _PiWriteToolError | PlainMessage<_PiWriteToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolError as unknown as MessageType<_PiWriteToolError>, a, b2);
  }
})();
export type PiWriteToolError = InstanceType<typeof PiWriteToolError$Runtime>;
var PiWriteToolError: MessageType<PiWriteToolError> = PiWriteToolError$Runtime as unknown as MessageType<PiWriteToolError>;
(PiWriteToolError as MutableMessageType<PiWriteToolError>).runtime = proto3;
(PiWriteToolError as MutableMessageType<PiWriteToolError>).typeName = "agent.v1.PiWriteToolError";
(PiWriteToolError as MutableMessageType<PiWriteToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiWriteToolRejected$Runtime = (() => class _PiWriteToolRejected extends Message<_PiWriteToolRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_PiWriteToolRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PiWriteToolRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiWriteToolRejected {
    return new _PiWriteToolRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiWriteToolRejected {
    return new _PiWriteToolRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiWriteToolRejected {
    return new _PiWriteToolRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _PiWriteToolRejected | PlainMessage<_PiWriteToolRejected> | undefined | null, b2: _PiWriteToolRejected | PlainMessage<_PiWriteToolRejected> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteToolRejected as unknown as MessageType<_PiWriteToolRejected>, a, b2);
  }
})();
export type PiWriteToolRejected = InstanceType<typeof PiWriteToolRejected$Runtime>;
var PiWriteToolRejected: MessageType<PiWriteToolRejected> = PiWriteToolRejected$Runtime as unknown as MessageType<PiWriteToolRejected>;
(PiWriteToolRejected as MutableMessageType<PiWriteToolRejected>).runtime = proto3;
(PiWriteToolRejected as MutableMessageType<PiWriteToolRejected>).typeName = "agent.v1.PiWriteToolRejected";
(PiWriteToolRejected as MutableMessageType<PiWriteToolRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiWriteToolCall, PiWriteToolArgs, PiWriteToolResult, PiWriteToolSuccess, PiWriteToolError, PiWriteToolRejected };
