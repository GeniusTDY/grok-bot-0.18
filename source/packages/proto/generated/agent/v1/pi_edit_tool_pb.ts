/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39960-40195
 * Region SHA-256: bf75acf349987795ff0c974928709a4e87f73e06cc480793bfd1bae66350a022
 * Atomic B1 exports: 7 messages + 0 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiEditReplacement$Runtime = (() => class _PiEditReplacement extends Message<_PiEditReplacement> {
  declare oldText: string;
  declare newText: string;
  constructor(data?: PartialMessage<_PiEditReplacement>) {
    super();
    this.oldText = "";
    this.newText = "";
    proto3.util.initPartial(data, this as _PiEditReplacement);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditReplacement {
    return new _PiEditReplacement().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditReplacement {
    return new _PiEditReplacement().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditReplacement {
    return new _PiEditReplacement().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditReplacement | PlainMessage<_PiEditReplacement> | undefined | null, b2: _PiEditReplacement | PlainMessage<_PiEditReplacement> | undefined | null): boolean {
    return proto3.util.equals(_PiEditReplacement as unknown as MessageType<_PiEditReplacement>, a, b2);
  }
})();
export type PiEditReplacement = InstanceType<typeof PiEditReplacement$Runtime>;
var PiEditReplacement: MessageType<PiEditReplacement> = PiEditReplacement$Runtime as unknown as MessageType<PiEditReplacement>;
(PiEditReplacement as MutableMessageType<PiEditReplacement>).runtime = proto3;
(PiEditReplacement as MutableMessageType<PiEditReplacement>).typeName = "agent.v1.PiEditReplacement";
(PiEditReplacement as MutableMessageType<PiEditReplacement>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "old_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiEditToolCall$Runtime = (() => class _PiEditToolCall extends Message<_PiEditToolCall> {
  declare args?: PiEditToolArgs;
  declare result?: PiEditToolResult;
  constructor(data?: PartialMessage<_PiEditToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PiEditToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolCall {
    return new _PiEditToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolCall {
    return new _PiEditToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolCall {
    return new _PiEditToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolCall | PlainMessage<_PiEditToolCall> | undefined | null, b2: _PiEditToolCall | PlainMessage<_PiEditToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolCall as unknown as MessageType<_PiEditToolCall>, a, b2);
  }
})();
export type PiEditToolCall = InstanceType<typeof PiEditToolCall$Runtime>;
var PiEditToolCall: MessageType<PiEditToolCall> = PiEditToolCall$Runtime as unknown as MessageType<PiEditToolCall>;
(PiEditToolCall as MutableMessageType<PiEditToolCall>).runtime = proto3;
(PiEditToolCall as MutableMessageType<PiEditToolCall>).typeName = "agent.v1.PiEditToolCall";
(PiEditToolCall as MutableMessageType<PiEditToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PiEditToolArgs },
  { no: 2, name: "result", kind: "message", T: PiEditToolResult }
]);
var PiEditToolArgs$Runtime = (() => class _PiEditToolArgs extends Message<_PiEditToolArgs> {
  declare path: string;
  declare edits: PiEditReplacement[];
  constructor(data?: PartialMessage<_PiEditToolArgs>) {
    super();
    this.path = "";
    this.edits = [];
    proto3.util.initPartial(data, this as _PiEditToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolArgs {
    return new _PiEditToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolArgs {
    return new _PiEditToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolArgs {
    return new _PiEditToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolArgs | PlainMessage<_PiEditToolArgs> | undefined | null, b2: _PiEditToolArgs | PlainMessage<_PiEditToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolArgs as unknown as MessageType<_PiEditToolArgs>, a, b2);
  }
})();
export type PiEditToolArgs = InstanceType<typeof PiEditToolArgs$Runtime>;
var PiEditToolArgs: MessageType<PiEditToolArgs> = PiEditToolArgs$Runtime as unknown as MessageType<PiEditToolArgs>;
(PiEditToolArgs as MutableMessageType<PiEditToolArgs>).runtime = proto3;
(PiEditToolArgs as MutableMessageType<PiEditToolArgs>).typeName = "agent.v1.PiEditToolArgs";
(PiEditToolArgs as MutableMessageType<PiEditToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "edits", kind: "message", T: PiEditReplacement, repeated: true }
]);
var PiEditToolResult$Runtime = (() => class _PiEditToolResult extends Message<_PiEditToolResult> {
  declare result: { case: "success"; value: PiEditToolSuccess } | { case: "error"; value: PiEditToolError } | { case: "rejected"; value: PiEditToolRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiEditToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiEditToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolResult {
    return new _PiEditToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolResult {
    return new _PiEditToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolResult {
    return new _PiEditToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolResult | PlainMessage<_PiEditToolResult> | undefined | null, b2: _PiEditToolResult | PlainMessage<_PiEditToolResult> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolResult as unknown as MessageType<_PiEditToolResult>, a, b2);
  }
})();
export type PiEditToolResult = InstanceType<typeof PiEditToolResult$Runtime>;
var PiEditToolResult: MessageType<PiEditToolResult> = PiEditToolResult$Runtime as unknown as MessageType<PiEditToolResult>;
(PiEditToolResult as MutableMessageType<PiEditToolResult>).runtime = proto3;
(PiEditToolResult as MutableMessageType<PiEditToolResult>).typeName = "agent.v1.PiEditToolResult";
(PiEditToolResult as MutableMessageType<PiEditToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiEditToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiEditToolError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: PiEditToolRejected, oneof: "result" }
]);
var PiEditToolSuccess$Runtime = (() => class _PiEditToolSuccess extends Message<_PiEditToolSuccess> {
  declare output: string;
  declare diff: string;
  declare patch: string;
  declare firstChangedLine?: number;
  constructor(data?: PartialMessage<_PiEditToolSuccess>) {
    super();
    this.output = "";
    this.diff = "";
    this.patch = "";
    proto3.util.initPartial(data, this as _PiEditToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolSuccess {
    return new _PiEditToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolSuccess {
    return new _PiEditToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolSuccess {
    return new _PiEditToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolSuccess | PlainMessage<_PiEditToolSuccess> | undefined | null, b2: _PiEditToolSuccess | PlainMessage<_PiEditToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolSuccess as unknown as MessageType<_PiEditToolSuccess>, a, b2);
  }
})();
export type PiEditToolSuccess = InstanceType<typeof PiEditToolSuccess$Runtime>;
var PiEditToolSuccess: MessageType<PiEditToolSuccess> = PiEditToolSuccess$Runtime as unknown as MessageType<PiEditToolSuccess>;
(PiEditToolSuccess as MutableMessageType<PiEditToolSuccess>).runtime = proto3;
(PiEditToolSuccess as MutableMessageType<PiEditToolSuccess>).typeName = "agent.v1.PiEditToolSuccess";
(PiEditToolSuccess as MutableMessageType<PiEditToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "patch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "first_changed_line", kind: "scalar", T: 13, opt: true }
]);
var PiEditToolError$Runtime = (() => class _PiEditToolError extends Message<_PiEditToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiEditToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiEditToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolError {
    return new _PiEditToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolError {
    return new _PiEditToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolError {
    return new _PiEditToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolError | PlainMessage<_PiEditToolError> | undefined | null, b2: _PiEditToolError | PlainMessage<_PiEditToolError> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolError as unknown as MessageType<_PiEditToolError>, a, b2);
  }
})();
export type PiEditToolError = InstanceType<typeof PiEditToolError$Runtime>;
var PiEditToolError: MessageType<PiEditToolError> = PiEditToolError$Runtime as unknown as MessageType<PiEditToolError>;
(PiEditToolError as MutableMessageType<PiEditToolError>).runtime = proto3;
(PiEditToolError as MutableMessageType<PiEditToolError>).typeName = "agent.v1.PiEditToolError";
(PiEditToolError as MutableMessageType<PiEditToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiEditToolRejected$Runtime = (() => class _PiEditToolRejected extends Message<_PiEditToolRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_PiEditToolRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PiEditToolRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PiEditToolRejected {
    return new _PiEditToolRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PiEditToolRejected {
    return new _PiEditToolRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PiEditToolRejected {
    return new _PiEditToolRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _PiEditToolRejected | PlainMessage<_PiEditToolRejected> | undefined | null, b2: _PiEditToolRejected | PlainMessage<_PiEditToolRejected> | undefined | null): boolean {
    return proto3.util.equals(_PiEditToolRejected as unknown as MessageType<_PiEditToolRejected>, a, b2);
  }
})();
export type PiEditToolRejected = InstanceType<typeof PiEditToolRejected$Runtime>;
var PiEditToolRejected: MessageType<PiEditToolRejected> = PiEditToolRejected$Runtime as unknown as MessageType<PiEditToolRejected>;
(PiEditToolRejected as MutableMessageType<PiEditToolRejected>).runtime = proto3;
(PiEditToolRejected as MutableMessageType<PiEditToolRejected>).typeName = "agent.v1.PiEditToolRejected";
(PiEditToolRejected as MutableMessageType<PiEditToolRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiEditReplacement, PiEditToolCall, PiEditToolArgs, PiEditToolResult, PiEditToolSuccess, PiEditToolError, PiEditToolRejected };
