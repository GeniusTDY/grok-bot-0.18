/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64484-64646
 * Region SHA-256: 30eaf1b7b9161a408a56b302732c0d497cf0a34856a29eb047f0dcdd5298f23c
 * B11 exports: 5 messages + 0 enums + 0 services = 5
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiWriteExecArgs$Runtime = (() => class _PiWriteExecArgs extends Message<_PiWriteExecArgs> {
  declare path: string;
  declare content: string;
  constructor(data?: PartialMessage<_PiWriteExecArgs>) {
    super();
    this.path = "";
    this.content = "";
    proto3.util.initPartial(data, this as _PiWriteExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiWriteExecArgs {
    return new _PiWriteExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiWriteExecArgs {
    return new _PiWriteExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiWriteExecArgs {
    return new _PiWriteExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiWriteExecArgs | PlainMessage<_PiWriteExecArgs> | undefined | null, b2: _PiWriteExecArgs | PlainMessage<_PiWriteExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteExecArgs as unknown as MessageType<_PiWriteExecArgs>, a, b2);
  }
})();
export type PiWriteExecArgs = InstanceType<typeof PiWriteExecArgs$Runtime>;
var PiWriteExecArgs: MessageType<PiWriteExecArgs> = PiWriteExecArgs$Runtime as unknown as MessageType<PiWriteExecArgs>;
(PiWriteExecArgs as MutableMessageType<PiWriteExecArgs>).runtime = proto3;
(PiWriteExecArgs as MutableMessageType<PiWriteExecArgs>).typeName = "agent.v1.PiWriteExecArgs";
(PiWriteExecArgs as MutableMessageType<PiWriteExecArgs>).fields = proto3.util.newFieldList(() => [
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
var PiWriteExecResult$Runtime = (() => class _PiWriteExecResult extends Message<_PiWriteExecResult> {
  declare result: { case: "success"; value: PiWriteExecSuccess } | { case: "error"; value: PiWriteExecError } | { case: "rejected"; value: PiWriteExecRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiWriteExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiWriteExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiWriteExecResult {
    return new _PiWriteExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiWriteExecResult {
    return new _PiWriteExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiWriteExecResult {
    return new _PiWriteExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiWriteExecResult | PlainMessage<_PiWriteExecResult> | undefined | null, b2: _PiWriteExecResult | PlainMessage<_PiWriteExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteExecResult as unknown as MessageType<_PiWriteExecResult>, a, b2);
  }
})();
export type PiWriteExecResult = InstanceType<typeof PiWriteExecResult$Runtime>;
var PiWriteExecResult: MessageType<PiWriteExecResult> = PiWriteExecResult$Runtime as unknown as MessageType<PiWriteExecResult>;
(PiWriteExecResult as MutableMessageType<PiWriteExecResult>).runtime = proto3;
(PiWriteExecResult as MutableMessageType<PiWriteExecResult>).typeName = "agent.v1.PiWriteExecResult";
(PiWriteExecResult as MutableMessageType<PiWriteExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiWriteExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiWriteExecError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: PiWriteExecRejected, oneof: "result" }
]);
var PiWriteExecSuccess$Runtime = (() => class _PiWriteExecSuccess extends Message<_PiWriteExecSuccess> {
  declare output: string;
  constructor(data?: PartialMessage<_PiWriteExecSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiWriteExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiWriteExecSuccess {
    return new _PiWriteExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiWriteExecSuccess {
    return new _PiWriteExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiWriteExecSuccess {
    return new _PiWriteExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiWriteExecSuccess | PlainMessage<_PiWriteExecSuccess> | undefined | null, b2: _PiWriteExecSuccess | PlainMessage<_PiWriteExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteExecSuccess as unknown as MessageType<_PiWriteExecSuccess>, a, b2);
  }
})();
export type PiWriteExecSuccess = InstanceType<typeof PiWriteExecSuccess$Runtime>;
var PiWriteExecSuccess: MessageType<PiWriteExecSuccess> = PiWriteExecSuccess$Runtime as unknown as MessageType<PiWriteExecSuccess>;
(PiWriteExecSuccess as MutableMessageType<PiWriteExecSuccess>).runtime = proto3;
(PiWriteExecSuccess as MutableMessageType<PiWriteExecSuccess>).typeName = "agent.v1.PiWriteExecSuccess";
(PiWriteExecSuccess as MutableMessageType<PiWriteExecSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiWriteExecError$Runtime = (() => class _PiWriteExecError extends Message<_PiWriteExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiWriteExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiWriteExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiWriteExecError {
    return new _PiWriteExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiWriteExecError {
    return new _PiWriteExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiWriteExecError {
    return new _PiWriteExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiWriteExecError | PlainMessage<_PiWriteExecError> | undefined | null, b2: _PiWriteExecError | PlainMessage<_PiWriteExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteExecError as unknown as MessageType<_PiWriteExecError>, a, b2);
  }
})();
export type PiWriteExecError = InstanceType<typeof PiWriteExecError$Runtime>;
var PiWriteExecError: MessageType<PiWriteExecError> = PiWriteExecError$Runtime as unknown as MessageType<PiWriteExecError>;
(PiWriteExecError as MutableMessageType<PiWriteExecError>).runtime = proto3;
(PiWriteExecError as MutableMessageType<PiWriteExecError>).typeName = "agent.v1.PiWriteExecError";
(PiWriteExecError as MutableMessageType<PiWriteExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PiWriteExecRejected$Runtime = (() => class _PiWriteExecRejected extends Message<_PiWriteExecRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_PiWriteExecRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PiWriteExecRejected);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiWriteExecRejected {
    return new _PiWriteExecRejected().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiWriteExecRejected {
    return new _PiWriteExecRejected().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiWriteExecRejected {
    return new _PiWriteExecRejected().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiWriteExecRejected | PlainMessage<_PiWriteExecRejected> | undefined | null, b2: _PiWriteExecRejected | PlainMessage<_PiWriteExecRejected> | undefined | null): boolean {
    return proto3.util.equals(_PiWriteExecRejected as unknown as MessageType<_PiWriteExecRejected>, a, b2);
  }
})();
export type PiWriteExecRejected = InstanceType<typeof PiWriteExecRejected$Runtime>;
var PiWriteExecRejected: MessageType<PiWriteExecRejected> = PiWriteExecRejected$Runtime as unknown as MessageType<PiWriteExecRejected>;
(PiWriteExecRejected as MutableMessageType<PiWriteExecRejected>).runtime = proto3;
(PiWriteExecRejected as MutableMessageType<PiWriteExecRejected>).typeName = "agent.v1.PiWriteExecRejected";
(PiWriteExecRejected as MutableMessageType<PiWriteExecRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiWriteExecArgs, PiWriteExecResult, PiWriteExecSuccess, PiWriteExecError, PiWriteExecRejected };
