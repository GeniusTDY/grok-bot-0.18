/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64309-64483
 * Region SHA-256: 79bf5a7912ecceb83c34339200f299ed7d62e76b0687582efd4163437ae1d80a
 * B11 exports: 5 messages + 0 enums + 0 services = 5
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiEditReplacement } from "./pi_edit_tool_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiEditExecArgs$Runtime = (() => class _PiEditExecArgs extends Message<_PiEditExecArgs> {
  declare path: string;
  declare edits: PiEditReplacement[];
  constructor(data?: PartialMessage<_PiEditExecArgs>) {
    super();
    this.path = "";
    this.edits = [];
    proto3.util.initPartial(data, this as _PiEditExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiEditExecArgs {
    return new _PiEditExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiEditExecArgs {
    return new _PiEditExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiEditExecArgs {
    return new _PiEditExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiEditExecArgs | PlainMessage<_PiEditExecArgs> | undefined | null, b2: _PiEditExecArgs | PlainMessage<_PiEditExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiEditExecArgs as unknown as MessageType<_PiEditExecArgs>, a, b2);
  }
})();
export type PiEditExecArgs = InstanceType<typeof PiEditExecArgs$Runtime>;
var PiEditExecArgs: MessageType<PiEditExecArgs> = PiEditExecArgs$Runtime as unknown as MessageType<PiEditExecArgs>;
(PiEditExecArgs as MutableMessageType<PiEditExecArgs>).runtime = proto3;
(PiEditExecArgs as MutableMessageType<PiEditExecArgs>).typeName = "agent.v1.PiEditExecArgs";
(PiEditExecArgs as MutableMessageType<PiEditExecArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "edits", kind: "message", T: PiEditReplacement, repeated: true }
]);
var PiEditExecResult$Runtime = (() => class _PiEditExecResult extends Message<_PiEditExecResult> {
  declare result: { case: "success"; value: PiEditExecSuccess } | { case: "error"; value: PiEditExecError } | { case: "rejected"; value: PiEditExecRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiEditExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiEditExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiEditExecResult {
    return new _PiEditExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiEditExecResult {
    return new _PiEditExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiEditExecResult {
    return new _PiEditExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiEditExecResult | PlainMessage<_PiEditExecResult> | undefined | null, b2: _PiEditExecResult | PlainMessage<_PiEditExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiEditExecResult as unknown as MessageType<_PiEditExecResult>, a, b2);
  }
})();
export type PiEditExecResult = InstanceType<typeof PiEditExecResult$Runtime>;
var PiEditExecResult: MessageType<PiEditExecResult> = PiEditExecResult$Runtime as unknown as MessageType<PiEditExecResult>;
(PiEditExecResult as MutableMessageType<PiEditExecResult>).runtime = proto3;
(PiEditExecResult as MutableMessageType<PiEditExecResult>).typeName = "agent.v1.PiEditExecResult";
(PiEditExecResult as MutableMessageType<PiEditExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiEditExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiEditExecError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: PiEditExecRejected, oneof: "result" }
]);
var PiEditExecSuccess$Runtime = (() => class _PiEditExecSuccess extends Message<_PiEditExecSuccess> {
  declare output: string;
  declare diff: string;
  declare patch: string;
  declare firstChangedLine?: number;
  constructor(data?: PartialMessage<_PiEditExecSuccess>) {
    super();
    this.output = "";
    this.diff = "";
    this.patch = "";
    proto3.util.initPartial(data, this as _PiEditExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiEditExecSuccess {
    return new _PiEditExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiEditExecSuccess {
    return new _PiEditExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiEditExecSuccess {
    return new _PiEditExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiEditExecSuccess | PlainMessage<_PiEditExecSuccess> | undefined | null, b2: _PiEditExecSuccess | PlainMessage<_PiEditExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiEditExecSuccess as unknown as MessageType<_PiEditExecSuccess>, a, b2);
  }
})();
export type PiEditExecSuccess = InstanceType<typeof PiEditExecSuccess$Runtime>;
var PiEditExecSuccess: MessageType<PiEditExecSuccess> = PiEditExecSuccess$Runtime as unknown as MessageType<PiEditExecSuccess>;
(PiEditExecSuccess as MutableMessageType<PiEditExecSuccess>).runtime = proto3;
(PiEditExecSuccess as MutableMessageType<PiEditExecSuccess>).typeName = "agent.v1.PiEditExecSuccess";
(PiEditExecSuccess as MutableMessageType<PiEditExecSuccess>).fields = proto3.util.newFieldList(() => [
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
var PiEditExecError$Runtime = (() => class _PiEditExecError extends Message<_PiEditExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiEditExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiEditExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiEditExecError {
    return new _PiEditExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiEditExecError {
    return new _PiEditExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiEditExecError {
    return new _PiEditExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiEditExecError | PlainMessage<_PiEditExecError> | undefined | null, b2: _PiEditExecError | PlainMessage<_PiEditExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiEditExecError as unknown as MessageType<_PiEditExecError>, a, b2);
  }
})();
export type PiEditExecError = InstanceType<typeof PiEditExecError$Runtime>;
var PiEditExecError: MessageType<PiEditExecError> = PiEditExecError$Runtime as unknown as MessageType<PiEditExecError>;
(PiEditExecError as MutableMessageType<PiEditExecError>).runtime = proto3;
(PiEditExecError as MutableMessageType<PiEditExecError>).typeName = "agent.v1.PiEditExecError";
(PiEditExecError as MutableMessageType<PiEditExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiEditExecRejected$Runtime = (() => class _PiEditExecRejected extends Message<_PiEditExecRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_PiEditExecRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PiEditExecRejected);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiEditExecRejected {
    return new _PiEditExecRejected().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiEditExecRejected {
    return new _PiEditExecRejected().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiEditExecRejected {
    return new _PiEditExecRejected().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiEditExecRejected | PlainMessage<_PiEditExecRejected> | undefined | null, b2: _PiEditExecRejected | PlainMessage<_PiEditExecRejected> | undefined | null): boolean {
    return proto3.util.equals(_PiEditExecRejected as unknown as MessageType<_PiEditExecRejected>, a, b2);
  }
})();
export type PiEditExecRejected = InstanceType<typeof PiEditExecRejected$Runtime>;
var PiEditExecRejected: MessageType<PiEditExecRejected> = PiEditExecRejected$Runtime as unknown as MessageType<PiEditExecRejected>;
(PiEditExecRejected as MutableMessageType<PiEditExecRejected>).runtime = proto3;
(PiEditExecRejected as MutableMessageType<PiEditExecRejected>).typeName = "agent.v1.PiEditExecRejected";
(PiEditExecRejected as MutableMessageType<PiEditExecRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiEditExecArgs, PiEditExecResult, PiEditExecSuccess, PiEditExecError, PiEditExecRejected };
