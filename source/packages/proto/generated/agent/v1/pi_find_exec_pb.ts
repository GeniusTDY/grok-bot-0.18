/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64788-64916
 * Region SHA-256: be518eec0e64bd351b14a0c335ccf1797a63ce0ba87935041cda734697ce5957
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiFindExecArgs$Runtime = (() => class _PiFindExecArgs extends Message<_PiFindExecArgs> {
  declare pattern: string;
  declare path?: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiFindExecArgs>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _PiFindExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiFindExecArgs {
    return new _PiFindExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiFindExecArgs {
    return new _PiFindExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiFindExecArgs {
    return new _PiFindExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiFindExecArgs | PlainMessage<_PiFindExecArgs> | undefined | null, b2: _PiFindExecArgs | PlainMessage<_PiFindExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiFindExecArgs as unknown as MessageType<_PiFindExecArgs>, a, b2);
  }
})();
export type PiFindExecArgs = InstanceType<typeof PiFindExecArgs$Runtime>;
var PiFindExecArgs: MessageType<PiFindExecArgs> = PiFindExecArgs$Runtime as unknown as MessageType<PiFindExecArgs>;
(PiFindExecArgs as MutableMessageType<PiFindExecArgs>).runtime = proto3;
(PiFindExecArgs as MutableMessageType<PiFindExecArgs>).typeName = "agent.v1.PiFindExecArgs";
(PiFindExecArgs as MutableMessageType<PiFindExecArgs>).fields = proto3.util.newFieldList(() => [
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
var PiFindExecResult$Runtime = (() => class _PiFindExecResult extends Message<_PiFindExecResult> {
  declare result: { case: "success"; value: PiFindExecSuccess } | { case: "error"; value: PiFindExecError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiFindExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiFindExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiFindExecResult {
    return new _PiFindExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiFindExecResult {
    return new _PiFindExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiFindExecResult {
    return new _PiFindExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiFindExecResult | PlainMessage<_PiFindExecResult> | undefined | null, b2: _PiFindExecResult | PlainMessage<_PiFindExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiFindExecResult as unknown as MessageType<_PiFindExecResult>, a, b2);
  }
})();
export type PiFindExecResult = InstanceType<typeof PiFindExecResult$Runtime>;
var PiFindExecResult: MessageType<PiFindExecResult> = PiFindExecResult$Runtime as unknown as MessageType<PiFindExecResult>;
(PiFindExecResult as MutableMessageType<PiFindExecResult>).runtime = proto3;
(PiFindExecResult as MutableMessageType<PiFindExecResult>).typeName = "agent.v1.PiFindExecResult";
(PiFindExecResult as MutableMessageType<PiFindExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiFindExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiFindExecError, oneof: "result" }
]);
var PiFindExecSuccess$Runtime = (() => class _PiFindExecSuccess extends Message<_PiFindExecSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare resultLimitReached?: number;
  constructor(data?: PartialMessage<_PiFindExecSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiFindExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiFindExecSuccess {
    return new _PiFindExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiFindExecSuccess {
    return new _PiFindExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiFindExecSuccess {
    return new _PiFindExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiFindExecSuccess | PlainMessage<_PiFindExecSuccess> | undefined | null, b2: _PiFindExecSuccess | PlainMessage<_PiFindExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiFindExecSuccess as unknown as MessageType<_PiFindExecSuccess>, a, b2);
  }
})();
export type PiFindExecSuccess = InstanceType<typeof PiFindExecSuccess$Runtime>;
var PiFindExecSuccess: MessageType<PiFindExecSuccess> = PiFindExecSuccess$Runtime as unknown as MessageType<PiFindExecSuccess>;
(PiFindExecSuccess as MutableMessageType<PiFindExecSuccess>).runtime = proto3;
(PiFindExecSuccess as MutableMessageType<PiFindExecSuccess>).typeName = "agent.v1.PiFindExecSuccess";
(PiFindExecSuccess as MutableMessageType<PiFindExecSuccess>).fields = proto3.util.newFieldList(() => [
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
var PiFindExecError$Runtime = (() => class _PiFindExecError extends Message<_PiFindExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiFindExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiFindExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiFindExecError {
    return new _PiFindExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiFindExecError {
    return new _PiFindExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiFindExecError {
    return new _PiFindExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiFindExecError | PlainMessage<_PiFindExecError> | undefined | null, b2: _PiFindExecError | PlainMessage<_PiFindExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiFindExecError as unknown as MessageType<_PiFindExecError>, a, b2);
  }
})();
export type PiFindExecError = InstanceType<typeof PiFindExecError$Runtime>;
var PiFindExecError: MessageType<PiFindExecError> = PiFindExecError$Runtime as unknown as MessageType<PiFindExecError>;
(PiFindExecError as MutableMessageType<PiFindExecError>).runtime = proto3;
(PiFindExecError as MutableMessageType<PiFindExecError>).typeName = "agent.v1.PiFindExecError";
(PiFindExecError as MutableMessageType<PiFindExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiFindExecArgs, PiFindExecResult, PiFindExecSuccess, PiFindExecError };
