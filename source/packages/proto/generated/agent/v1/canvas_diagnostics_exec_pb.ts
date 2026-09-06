/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:63679-63821
 * Region SHA-256: f1d769d645d4202cebc6cdd929a4fc34f829aab07e11707d820c0c24b190fa4e
 * B11 exports: 4 messages + 0 enums + 0 services = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { Diagnostic as Diagnostic2 } from "./diagnostics_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var CanvasDiagnosticsArgs$Runtime = (() => class _CanvasDiagnosticsArgs extends Message<_CanvasDiagnosticsArgs> {
  declare path: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_CanvasDiagnosticsArgs>) {
    super();
    this.path = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _CanvasDiagnosticsArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CanvasDiagnosticsArgs {
    return new _CanvasDiagnosticsArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsArgs {
    return new _CanvasDiagnosticsArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsArgs {
    return new _CanvasDiagnosticsArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _CanvasDiagnosticsArgs | PlainMessage<_CanvasDiagnosticsArgs> | undefined | null, b2: _CanvasDiagnosticsArgs | PlainMessage<_CanvasDiagnosticsArgs> | undefined | null): boolean {
    return proto3.util.equals(_CanvasDiagnosticsArgs as unknown as MessageType<_CanvasDiagnosticsArgs>, a, b2);
  }
})();
export type CanvasDiagnosticsArgs = InstanceType<typeof CanvasDiagnosticsArgs$Runtime>;
var CanvasDiagnosticsArgs: MessageType<CanvasDiagnosticsArgs> = CanvasDiagnosticsArgs$Runtime as unknown as MessageType<CanvasDiagnosticsArgs>;
(CanvasDiagnosticsArgs as MutableMessageType<CanvasDiagnosticsArgs>).runtime = proto3;
(CanvasDiagnosticsArgs as MutableMessageType<CanvasDiagnosticsArgs>).typeName = "agent.v1.CanvasDiagnosticsArgs";
(CanvasDiagnosticsArgs as MutableMessageType<CanvasDiagnosticsArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CanvasDiagnosticsResult$Runtime = (() => class _CanvasDiagnosticsResult extends Message<_CanvasDiagnosticsResult> {
  declare result: { case: "success"; value: CanvasDiagnosticsSuccess } | { case: "error"; value: CanvasDiagnosticsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CanvasDiagnosticsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _CanvasDiagnosticsResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CanvasDiagnosticsResult {
    return new _CanvasDiagnosticsResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsResult {
    return new _CanvasDiagnosticsResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsResult {
    return new _CanvasDiagnosticsResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _CanvasDiagnosticsResult | PlainMessage<_CanvasDiagnosticsResult> | undefined | null, b2: _CanvasDiagnosticsResult | PlainMessage<_CanvasDiagnosticsResult> | undefined | null): boolean {
    return proto3.util.equals(_CanvasDiagnosticsResult as unknown as MessageType<_CanvasDiagnosticsResult>, a, b2);
  }
})();
export type CanvasDiagnosticsResult = InstanceType<typeof CanvasDiagnosticsResult$Runtime>;
var CanvasDiagnosticsResult: MessageType<CanvasDiagnosticsResult> = CanvasDiagnosticsResult$Runtime as unknown as MessageType<CanvasDiagnosticsResult>;
(CanvasDiagnosticsResult as MutableMessageType<CanvasDiagnosticsResult>).runtime = proto3;
(CanvasDiagnosticsResult as MutableMessageType<CanvasDiagnosticsResult>).typeName = "agent.v1.CanvasDiagnosticsResult";
(CanvasDiagnosticsResult as MutableMessageType<CanvasDiagnosticsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: CanvasDiagnosticsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: CanvasDiagnosticsError, oneof: "result" }
]);
var CanvasDiagnosticsSuccess$Runtime = (() => class _CanvasDiagnosticsSuccess extends Message<_CanvasDiagnosticsSuccess> {
  declare path: string;
  declare diagnostics: Diagnostic2[];
  constructor(data?: PartialMessage<_CanvasDiagnosticsSuccess>) {
    super();
    this.path = "";
    this.diagnostics = [];
    proto3.util.initPartial(data, this as _CanvasDiagnosticsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CanvasDiagnosticsSuccess {
    return new _CanvasDiagnosticsSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsSuccess {
    return new _CanvasDiagnosticsSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsSuccess {
    return new _CanvasDiagnosticsSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _CanvasDiagnosticsSuccess | PlainMessage<_CanvasDiagnosticsSuccess> | undefined | null, b2: _CanvasDiagnosticsSuccess | PlainMessage<_CanvasDiagnosticsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_CanvasDiagnosticsSuccess as unknown as MessageType<_CanvasDiagnosticsSuccess>, a, b2);
  }
})();
export type CanvasDiagnosticsSuccess = InstanceType<typeof CanvasDiagnosticsSuccess$Runtime>;
var CanvasDiagnosticsSuccess: MessageType<CanvasDiagnosticsSuccess> = CanvasDiagnosticsSuccess$Runtime as unknown as MessageType<CanvasDiagnosticsSuccess>;
(CanvasDiagnosticsSuccess as MutableMessageType<CanvasDiagnosticsSuccess>).runtime = proto3;
(CanvasDiagnosticsSuccess as MutableMessageType<CanvasDiagnosticsSuccess>).typeName = "agent.v1.CanvasDiagnosticsSuccess";
(CanvasDiagnosticsSuccess as MutableMessageType<CanvasDiagnosticsSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diagnostics", kind: "message", T: Diagnostic2, repeated: true }
]);
var CanvasDiagnosticsError$Runtime = (() => class _CanvasDiagnosticsError extends Message<_CanvasDiagnosticsError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_CanvasDiagnosticsError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _CanvasDiagnosticsError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CanvasDiagnosticsError {
    return new _CanvasDiagnosticsError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsError {
    return new _CanvasDiagnosticsError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CanvasDiagnosticsError {
    return new _CanvasDiagnosticsError().fromJsonString(jsonString, options2);
  }
  static equals(a: _CanvasDiagnosticsError | PlainMessage<_CanvasDiagnosticsError> | undefined | null, b2: _CanvasDiagnosticsError | PlainMessage<_CanvasDiagnosticsError> | undefined | null): boolean {
    return proto3.util.equals(_CanvasDiagnosticsError as unknown as MessageType<_CanvasDiagnosticsError>, a, b2);
  }
})();
export type CanvasDiagnosticsError = InstanceType<typeof CanvasDiagnosticsError$Runtime>;
var CanvasDiagnosticsError: MessageType<CanvasDiagnosticsError> = CanvasDiagnosticsError$Runtime as unknown as MessageType<CanvasDiagnosticsError>;
(CanvasDiagnosticsError as MutableMessageType<CanvasDiagnosticsError>).runtime = proto3;
(CanvasDiagnosticsError as MutableMessageType<CanvasDiagnosticsError>).typeName = "agent.v1.CanvasDiagnosticsError";
(CanvasDiagnosticsError as MutableMessageType<CanvasDiagnosticsError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { CanvasDiagnosticsArgs, CanvasDiagnosticsResult, CanvasDiagnosticsSuccess, CanvasDiagnosticsError };
