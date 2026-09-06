/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:64179-64308
 * Region SHA-256: ad9ad559c221a5f09de0a2accd88dc9ac966a4fc3934b992f423663a1b8a2f32
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PiTruncation } from "./pi_common_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var PiBashExecArgs$Runtime = (() => class _PiBashExecArgs extends Message<_PiBashExecArgs> {
  declare command: string;
  declare timeout?: number;
  constructor(data?: PartialMessage<_PiBashExecArgs>) {
    super();
    this.command = "";
    proto3.util.initPartial(data, this as _PiBashExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiBashExecArgs {
    return new _PiBashExecArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiBashExecArgs {
    return new _PiBashExecArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiBashExecArgs {
    return new _PiBashExecArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiBashExecArgs | PlainMessage<_PiBashExecArgs> | undefined | null, b2: _PiBashExecArgs | PlainMessage<_PiBashExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_PiBashExecArgs as unknown as MessageType<_PiBashExecArgs>, a, b2);
  }
})();
export type PiBashExecArgs = InstanceType<typeof PiBashExecArgs$Runtime>;
var PiBashExecArgs: MessageType<PiBashExecArgs> = PiBashExecArgs$Runtime as unknown as MessageType<PiBashExecArgs>;
(PiBashExecArgs as MutableMessageType<PiBashExecArgs>).runtime = proto3;
(PiBashExecArgs as MutableMessageType<PiBashExecArgs>).typeName = "agent.v1.PiBashExecArgs";
(PiBashExecArgs as MutableMessageType<PiBashExecArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "timeout", kind: "scalar", T: 1, opt: true }
]);
var PiBashExecResult$Runtime = (() => class _PiBashExecResult extends Message<_PiBashExecResult> {
  declare result: { case: "success"; value: PiBashExecSuccess } | { case: "error"; value: PiBashExecError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PiBashExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PiBashExecResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiBashExecResult {
    return new _PiBashExecResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiBashExecResult {
    return new _PiBashExecResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiBashExecResult {
    return new _PiBashExecResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiBashExecResult | PlainMessage<_PiBashExecResult> | undefined | null, b2: _PiBashExecResult | PlainMessage<_PiBashExecResult> | undefined | null): boolean {
    return proto3.util.equals(_PiBashExecResult as unknown as MessageType<_PiBashExecResult>, a, b2);
  }
})();
export type PiBashExecResult = InstanceType<typeof PiBashExecResult$Runtime>;
var PiBashExecResult: MessageType<PiBashExecResult> = PiBashExecResult$Runtime as unknown as MessageType<PiBashExecResult>;
(PiBashExecResult as MutableMessageType<PiBashExecResult>).runtime = proto3;
(PiBashExecResult as MutableMessageType<PiBashExecResult>).typeName = "agent.v1.PiBashExecResult";
(PiBashExecResult as MutableMessageType<PiBashExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PiBashExecSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PiBashExecError, oneof: "result" }
]);
var PiBashExecSuccess$Runtime = (() => class _PiBashExecSuccess extends Message<_PiBashExecSuccess> {
  declare output: string;
  declare truncation?: PiTruncation;
  declare fullOutputPath?: string;
  constructor(data?: PartialMessage<_PiBashExecSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _PiBashExecSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiBashExecSuccess {
    return new _PiBashExecSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiBashExecSuccess {
    return new _PiBashExecSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiBashExecSuccess {
    return new _PiBashExecSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiBashExecSuccess | PlainMessage<_PiBashExecSuccess> | undefined | null, b2: _PiBashExecSuccess | PlainMessage<_PiBashExecSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PiBashExecSuccess as unknown as MessageType<_PiBashExecSuccess>, a, b2);
  }
})();
export type PiBashExecSuccess = InstanceType<typeof PiBashExecSuccess$Runtime>;
var PiBashExecSuccess: MessageType<PiBashExecSuccess> = PiBashExecSuccess$Runtime as unknown as MessageType<PiBashExecSuccess>;
(PiBashExecSuccess as MutableMessageType<PiBashExecSuccess>).runtime = proto3;
(PiBashExecSuccess as MutableMessageType<PiBashExecSuccess>).typeName = "agent.v1.PiBashExecSuccess";
(PiBashExecSuccess as MutableMessageType<PiBashExecSuccess>).fields = proto3.util.newFieldList(() => [
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
var PiBashExecError$Runtime = (() => class _PiBashExecError extends Message<_PiBashExecError> {
  declare error: string;
  declare truncation?: PiTruncation;
  declare fullOutputPath?: string;
  constructor(data?: PartialMessage<_PiBashExecError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PiBashExecError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PiBashExecError {
    return new _PiBashExecError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PiBashExecError {
    return new _PiBashExecError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PiBashExecError {
    return new _PiBashExecError().fromJsonString(jsonString, options2);
  }
  static equals(a: _PiBashExecError | PlainMessage<_PiBashExecError> | undefined | null, b2: _PiBashExecError | PlainMessage<_PiBashExecError> | undefined | null): boolean {
    return proto3.util.equals(_PiBashExecError as unknown as MessageType<_PiBashExecError>, a, b2);
  }
})();
export type PiBashExecError = InstanceType<typeof PiBashExecError$Runtime>;
var PiBashExecError: MessageType<PiBashExecError> = PiBashExecError$Runtime as unknown as MessageType<PiBashExecError>;
(PiBashExecError as MutableMessageType<PiBashExecError>).runtime = proto3;
(PiBashExecError as MutableMessageType<PiBashExecError>).typeName = "agent.v1.PiBashExecError";
(PiBashExecError as MutableMessageType<PiBashExecError>).fields = proto3.util.newFieldList(() => [
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


export { PiBashExecArgs, PiBashExecResult, PiBashExecSuccess, PiBashExecError };
