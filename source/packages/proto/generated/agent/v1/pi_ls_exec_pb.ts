/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64917-65037
 * Region SHA-256: 88121bc8913e9c6a65313f70e9e36c39a0c45929728e85f75600b4cdfdefbfbe
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiLsExecArgs$Runtime = (() => class _PiLsExecArgs extends Message<_PiLsExecArgs> {
  declare path?: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiLsExecArgs>) {
    super();
    proto3.util.initPartial(data, this as _PiLsExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiLsExecArgs {
    return new _PiLsExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiLsExecArgs {
    return new _PiLsExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiLsExecArgs {
    return new _PiLsExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiLsExecArgs | PlainMessage<_PiLsExecArgs> | undefined | null, b2: _PiLsExecArgs | PlainMessage<_PiLsExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiLsExecArgs as unknown as MessageType<_PiLsExecArgs>, a, b2);
  }
})();
export type PiLsExecArgs = InstanceType<typeof PiLsExecArgs$Runtime>;
var PiLsExecArgs: MessageType<PiLsExecArgs> = PiLsExecArgs$Runtime as unknown as MessageType<PiLsExecArgs>;
(PiLsExecArgs as MutableMessageType<PiLsExecArgs>).runtime = proto3;
(PiLsExecArgs as MutableMessageType<PiLsExecArgs>).typeName = "agent.v1.PiLsExecArgs";
(PiLsExecArgs as MutableMessageType<PiLsExecArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var PiLsExecResult$Runtime = (() => class _PiLsExecResult extends Message<_PiLsExecResult> {
  declare result: { case: "success"; value: PiLsExecSuccess } | { case: "error"; value: PiLsExecError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiLsExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiLsExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiLsExecResult {
    return new _PiLsExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiLsExecResult {
    return new _PiLsExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiLsExecResult {
    return new _PiLsExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiLsExecResult | PlainMessage<_PiLsExecResult> | undefined | null, b2: _PiLsExecResult | PlainMessage<_PiLsExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiLsExecResult as unknown as MessageType<_PiLsExecResult>, a, b2);
  }
})();
export type PiLsExecResult = InstanceType<typeof PiLsExecResult$Runtime>;
var PiLsExecResult: MessageType<PiLsExecResult> = PiLsExecResult$Runtime as unknown as MessageType<PiLsExecResult>;
(PiLsExecResult as MutableMessageType<PiLsExecResult>).runtime = proto3;
(PiLsExecResult as MutableMessageType<PiLsExecResult>).typeName = "agent.v1.PiLsExecResult";
(PiLsExecResult as MutableMessageType<PiLsExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiLsExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiLsExecError, oneof: "result" }
]);
var PiLsExecSuccess$Runtime = (() => class _PiLsExecSuccess extends Message<_PiLsExecSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare entryLimitReached?: number;
  constructor(data?: PartialMessage<_PiLsExecSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiLsExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiLsExecSuccess {
    return new _PiLsExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiLsExecSuccess {
    return new _PiLsExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiLsExecSuccess {
    return new _PiLsExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiLsExecSuccess | PlainMessage<_PiLsExecSuccess> | undefined | null, b2: _PiLsExecSuccess | PlainMessage<_PiLsExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiLsExecSuccess as unknown as MessageType<_PiLsExecSuccess>, a, b2);
  }
})();
export type PiLsExecSuccess = InstanceType<typeof PiLsExecSuccess$Runtime>;
var PiLsExecSuccess: MessageType<PiLsExecSuccess> = PiLsExecSuccess$Runtime as unknown as MessageType<PiLsExecSuccess>;
(PiLsExecSuccess as MutableMessageType<PiLsExecSuccess>).runtime = proto3;
(PiLsExecSuccess as MutableMessageType<PiLsExecSuccess>).typeName = "agent.v1.PiLsExecSuccess";
(PiLsExecSuccess as MutableMessageType<PiLsExecSuccess>).fields = proto3.util.newFieldList(() => [
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
var PiLsExecError$Runtime = (() => class _PiLsExecError extends Message<_PiLsExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiLsExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiLsExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiLsExecError {
    return new _PiLsExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiLsExecError {
    return new _PiLsExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiLsExecError {
    return new _PiLsExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiLsExecError | PlainMessage<_PiLsExecError> | undefined | null, b2: _PiLsExecError | PlainMessage<_PiLsExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiLsExecError as unknown as MessageType<_PiLsExecError>, a, b2);
  }
})();
export type PiLsExecError = InstanceType<typeof PiLsExecError$Runtime>;
var PiLsExecError: MessageType<PiLsExecError> = PiLsExecError$Runtime as unknown as MessageType<PiLsExecError>;
(PiLsExecError as MutableMessageType<PiLsExecError>).runtime = proto3;
(PiLsExecError as MutableMessageType<PiLsExecError>).typeName = "agent.v1.PiLsExecError";
(PiLsExecError as MutableMessageType<PiLsExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiLsExecArgs, PiLsExecResult, PiLsExecSuccess, PiLsExecError };
