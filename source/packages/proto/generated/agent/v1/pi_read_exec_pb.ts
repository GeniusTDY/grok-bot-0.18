/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64051-64178
 * Region SHA-256: f9ece07197344d951ed4325836fab570cf092276dd6fb062877e18a2aeaa0ccb
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiReadExecArgs$Runtime = (() => class _PiReadExecArgs extends Message<_PiReadExecArgs> {
  declare path: string;
  declare offset?: number;
  declare limit?: number;
  constructor(data?: PartialMessage<_PiReadExecArgs>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _PiReadExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiReadExecArgs {
    return new _PiReadExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiReadExecArgs {
    return new _PiReadExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiReadExecArgs {
    return new _PiReadExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiReadExecArgs | PlainMessage<_PiReadExecArgs> | undefined | null, b2: _PiReadExecArgs | PlainMessage<_PiReadExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiReadExecArgs as unknown as MessageType<_PiReadExecArgs>, a, b2);
  }
})();
export type PiReadExecArgs = InstanceType<typeof PiReadExecArgs$Runtime>;
var PiReadExecArgs: MessageType<PiReadExecArgs> = PiReadExecArgs$Runtime as unknown as MessageType<PiReadExecArgs>;
(PiReadExecArgs as MutableMessageType<PiReadExecArgs>).runtime = proto3;
(PiReadExecArgs as MutableMessageType<PiReadExecArgs>).typeName = "agent.v1.PiReadExecArgs";
(PiReadExecArgs as MutableMessageType<PiReadExecArgs>).fields = proto3.util.newFieldList(() => [
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
var PiReadExecResult$Runtime = (() => class _PiReadExecResult extends Message<_PiReadExecResult> {
  declare result: { case: "success"; value: PiReadExecSuccess } | { case: "error"; value: PiReadExecError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiReadExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiReadExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiReadExecResult {
    return new _PiReadExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiReadExecResult {
    return new _PiReadExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiReadExecResult {
    return new _PiReadExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiReadExecResult | PlainMessage<_PiReadExecResult> | undefined | null, b2: _PiReadExecResult | PlainMessage<_PiReadExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiReadExecResult as unknown as MessageType<_PiReadExecResult>, a, b2);
  }
})();
export type PiReadExecResult = InstanceType<typeof PiReadExecResult$Runtime>;
var PiReadExecResult: MessageType<PiReadExecResult> = PiReadExecResult$Runtime as unknown as MessageType<PiReadExecResult>;
(PiReadExecResult as MutableMessageType<PiReadExecResult>).runtime = proto3;
(PiReadExecResult as MutableMessageType<PiReadExecResult>).typeName = "agent.v1.PiReadExecResult";
(PiReadExecResult as MutableMessageType<PiReadExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiReadExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiReadExecError, oneof: "result" }
]);
var PiReadExecSuccess$Runtime = (() => class _PiReadExecSuccess extends Message<_PiReadExecSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  constructor(data?: PartialMessage<_PiReadExecSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiReadExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiReadExecSuccess {
    return new _PiReadExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiReadExecSuccess {
    return new _PiReadExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiReadExecSuccess {
    return new _PiReadExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiReadExecSuccess | PlainMessage<_PiReadExecSuccess> | undefined | null, b2: _PiReadExecSuccess | PlainMessage<_PiReadExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiReadExecSuccess as unknown as MessageType<_PiReadExecSuccess>, a, b2);
  }
})();
export type PiReadExecSuccess = InstanceType<typeof PiReadExecSuccess$Runtime>;
var PiReadExecSuccess: MessageType<PiReadExecSuccess> = PiReadExecSuccess$Runtime as unknown as MessageType<PiReadExecSuccess>;
(PiReadExecSuccess as MutableMessageType<PiReadExecSuccess>).runtime = proto3;
(PiReadExecSuccess as MutableMessageType<PiReadExecSuccess>).typeName = "agent.v1.PiReadExecSuccess";
(PiReadExecSuccess as MutableMessageType<PiReadExecSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "truncation", kind: "message", T: PiTruncation, opt: true }
]);
var PiReadExecError$Runtime = (() => class _PiReadExecError extends Message<_PiReadExecError> {
  declare error: string;
  constructor(data?: PartialMessage<_PiReadExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiReadExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiReadExecError {
    return new _PiReadExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiReadExecError {
    return new _PiReadExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiReadExecError {
    return new _PiReadExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiReadExecError | PlainMessage<_PiReadExecError> | undefined | null, b2: _PiReadExecError | PlainMessage<_PiReadExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiReadExecError as unknown as MessageType<_PiReadExecError>, a, b2);
  }
})();
export type PiReadExecError = InstanceType<typeof PiReadExecError$Runtime>;
var PiReadExecError: MessageType<PiReadExecError> = PiReadExecError$Runtime as unknown as MessageType<PiReadExecError>;
(PiReadExecError as MutableMessageType<PiReadExecError>).runtime = proto3;
(PiReadExecError as MutableMessageType<PiReadExecError>).typeName = "agent.v1.PiReadExecError";
(PiReadExecError as MutableMessageType<PiReadExecError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { PiReadExecArgs, PiReadExecResult, PiReadExecSuccess, PiReadExecError };
