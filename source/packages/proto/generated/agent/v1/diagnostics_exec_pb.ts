/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:16304-16626
 * Region SHA-256: 078612af464fdc5a37fd5f90a97a59bb0931f7bafbf3d90650b328595633885c
 * Atomic B1 exports: 8 messages + 1 enums = 9
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Range } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type DiagnosticSeverity = 0 | 1 | 2 | 3 | 4;
var DiagnosticSeverity: {
  "UNSPECIFIED": 0;
  "ERROR": 1;
  "WARNING": 2;
  "INFORMATION": 3;
  "HINT": 4;
  0: "UNSPECIFIED";
  1: "ERROR";
  2: "WARNING";
  3: "INFORMATION";
  4: "HINT";
};
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2[DiagnosticSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DiagnosticSeverity2[DiagnosticSeverity2["ERROR"] = 1] = "ERROR";
  DiagnosticSeverity2[DiagnosticSeverity2["WARNING"] = 2] = "WARNING";
  DiagnosticSeverity2[DiagnosticSeverity2["INFORMATION"] = 3] = "INFORMATION";
  DiagnosticSeverity2[DiagnosticSeverity2["HINT"] = 4] = "HINT";
})(DiagnosticSeverity! || (DiagnosticSeverity = {} as typeof DiagnosticSeverity));
proto3.util.setEnumType(DiagnosticSeverity, "agent.v1.DiagnosticSeverity", [
  { no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED" },
  { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR" },
  { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING" },
  { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION" },
  { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT" }
]);
var DiagnosticsArgs$Runtime = (() => class _DiagnosticsArgs extends Message<_DiagnosticsArgs> {
  declare path: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_DiagnosticsArgs>) {
    super();
    this.path = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _DiagnosticsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsArgs {
    return new _DiagnosticsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsArgs {
    return new _DiagnosticsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsArgs {
    return new _DiagnosticsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsArgs | PlainMessage<_DiagnosticsArgs> | undefined | null, b2: _DiagnosticsArgs | PlainMessage<_DiagnosticsArgs> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsArgs as unknown as MessageType<_DiagnosticsArgs>, a, b2);
  }
})();
export type DiagnosticsArgs = InstanceType<typeof DiagnosticsArgs$Runtime>;
var DiagnosticsArgs: MessageType<DiagnosticsArgs> = DiagnosticsArgs$Runtime as unknown as MessageType<DiagnosticsArgs>;
(DiagnosticsArgs as MutableMessageType<DiagnosticsArgs>).runtime = proto3;
(DiagnosticsArgs as MutableMessageType<DiagnosticsArgs>).typeName = "agent.v1.DiagnosticsArgs";
(DiagnosticsArgs as MutableMessageType<DiagnosticsArgs>).fields = proto3.util.newFieldList(() => [
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
var DiagnosticsResult$Runtime = (() => class _DiagnosticsResult extends Message<_DiagnosticsResult> {
  declare result: { case: "success"; value: DiagnosticsSuccess } | { case: "error"; value: DiagnosticsError } | { case: "rejected"; value: DiagnosticsRejected } | { case: "fileNotFound"; value: DiagnosticsFileNotFound } | { case: "permissionDenied"; value: DiagnosticsPermissionDenied } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DiagnosticsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _DiagnosticsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsResult {
    return new _DiagnosticsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsResult {
    return new _DiagnosticsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsResult {
    return new _DiagnosticsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsResult | PlainMessage<_DiagnosticsResult> | undefined | null, b2: _DiagnosticsResult | PlainMessage<_DiagnosticsResult> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsResult as unknown as MessageType<_DiagnosticsResult>, a, b2);
  }
})();
export type DiagnosticsResult = InstanceType<typeof DiagnosticsResult$Runtime>;
var DiagnosticsResult: MessageType<DiagnosticsResult> = DiagnosticsResult$Runtime as unknown as MessageType<DiagnosticsResult>;
(DiagnosticsResult as MutableMessageType<DiagnosticsResult>).runtime = proto3;
(DiagnosticsResult as MutableMessageType<DiagnosticsResult>).typeName = "agent.v1.DiagnosticsResult";
(DiagnosticsResult as MutableMessageType<DiagnosticsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: DiagnosticsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: DiagnosticsError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: DiagnosticsRejected, oneof: "result" },
  { no: 4, name: "file_not_found", kind: "message", T: DiagnosticsFileNotFound, oneof: "result" },
  { no: 5, name: "permission_denied", kind: "message", T: DiagnosticsPermissionDenied, oneof: "result" }
]);
var DiagnosticsSuccess$Runtime = (() => class _DiagnosticsSuccess extends Message<_DiagnosticsSuccess> {
  declare path: string;
  declare diagnostics: Diagnostic[];
  declare totalDiagnostics: number;
  constructor(data?: PartialMessage<_DiagnosticsSuccess>) {
    super();
    this.path = "";
    this.diagnostics = [];
    this.totalDiagnostics = 0;
    proto3.util.initPartial(data, this as _DiagnosticsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsSuccess {
    return new _DiagnosticsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsSuccess {
    return new _DiagnosticsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsSuccess {
    return new _DiagnosticsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsSuccess | PlainMessage<_DiagnosticsSuccess> | undefined | null, b2: _DiagnosticsSuccess | PlainMessage<_DiagnosticsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsSuccess as unknown as MessageType<_DiagnosticsSuccess>, a, b2);
  }
})();
export type DiagnosticsSuccess = InstanceType<typeof DiagnosticsSuccess$Runtime>;
var DiagnosticsSuccess: MessageType<DiagnosticsSuccess> = DiagnosticsSuccess$Runtime as unknown as MessageType<DiagnosticsSuccess>;
(DiagnosticsSuccess as MutableMessageType<DiagnosticsSuccess>).runtime = proto3;
(DiagnosticsSuccess as MutableMessageType<DiagnosticsSuccess>).typeName = "agent.v1.DiagnosticsSuccess";
(DiagnosticsSuccess as MutableMessageType<DiagnosticsSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diagnostics", kind: "message", T: Diagnostic, repeated: true },
  {
    no: 3,
    name: "total_diagnostics",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var Diagnostic$Runtime = (() => class _Diagnostic extends Message<_Diagnostic> {
  declare severity: DiagnosticSeverity;
  declare range?: Range;
  declare message: string;
  declare source: string;
  declare code: string;
  declare isStale: boolean;
  constructor(data?: PartialMessage<_Diagnostic>) {
    super();
    this.severity = DiagnosticSeverity.UNSPECIFIED;
    this.message = "";
    this.source = "";
    this.code = "";
    this.isStale = false;
    proto3.util.initPartial(data, this as _Diagnostic);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Diagnostic {
    return new _Diagnostic().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Diagnostic {
    return new _Diagnostic().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Diagnostic {
    return new _Diagnostic().fromJsonString(jsonString, options);
  }
  static equals(a: _Diagnostic | PlainMessage<_Diagnostic> | undefined | null, b2: _Diagnostic | PlainMessage<_Diagnostic> | undefined | null): boolean {
    return proto3.util.equals(_Diagnostic as unknown as MessageType<_Diagnostic>, a, b2);
  }
})();
export type Diagnostic = InstanceType<typeof Diagnostic$Runtime>;
var Diagnostic: MessageType<Diagnostic> = Diagnostic$Runtime as unknown as MessageType<Diagnostic>;
(Diagnostic as MutableMessageType<Diagnostic>).runtime = proto3;
(Diagnostic as MutableMessageType<Diagnostic>).typeName = "agent.v1.Diagnostic";
(Diagnostic as MutableMessageType<Diagnostic>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "severity", kind: "enum", T: proto3.getEnumType(DiagnosticSeverity) },
  { no: 2, name: "range", kind: "message", T: Range },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "source",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "is_stale",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DiagnosticsError$Runtime = (() => class _DiagnosticsError extends Message<_DiagnosticsError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_DiagnosticsError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _DiagnosticsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsError {
    return new _DiagnosticsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsError {
    return new _DiagnosticsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsError {
    return new _DiagnosticsError().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsError | PlainMessage<_DiagnosticsError> | undefined | null, b2: _DiagnosticsError | PlainMessage<_DiagnosticsError> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsError as unknown as MessageType<_DiagnosticsError>, a, b2);
  }
})();
export type DiagnosticsError = InstanceType<typeof DiagnosticsError$Runtime>;
var DiagnosticsError: MessageType<DiagnosticsError> = DiagnosticsError$Runtime as unknown as MessageType<DiagnosticsError>;
(DiagnosticsError as MutableMessageType<DiagnosticsError>).runtime = proto3;
(DiagnosticsError as MutableMessageType<DiagnosticsError>).typeName = "agent.v1.DiagnosticsError";
(DiagnosticsError as MutableMessageType<DiagnosticsError>).fields = proto3.util.newFieldList(() => [
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
var DiagnosticsRejected$Runtime = (() => class _DiagnosticsRejected extends Message<_DiagnosticsRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_DiagnosticsRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _DiagnosticsRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsRejected {
    return new _DiagnosticsRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsRejected {
    return new _DiagnosticsRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsRejected {
    return new _DiagnosticsRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsRejected | PlainMessage<_DiagnosticsRejected> | undefined | null, b2: _DiagnosticsRejected | PlainMessage<_DiagnosticsRejected> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsRejected as unknown as MessageType<_DiagnosticsRejected>, a, b2);
  }
})();
export type DiagnosticsRejected = InstanceType<typeof DiagnosticsRejected$Runtime>;
var DiagnosticsRejected: MessageType<DiagnosticsRejected> = DiagnosticsRejected$Runtime as unknown as MessageType<DiagnosticsRejected>;
(DiagnosticsRejected as MutableMessageType<DiagnosticsRejected>).runtime = proto3;
(DiagnosticsRejected as MutableMessageType<DiagnosticsRejected>).typeName = "agent.v1.DiagnosticsRejected";
(DiagnosticsRejected as MutableMessageType<DiagnosticsRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DiagnosticsFileNotFound$Runtime = (() => class _DiagnosticsFileNotFound extends Message<_DiagnosticsFileNotFound> {
  declare path: string;
  constructor(data?: PartialMessage<_DiagnosticsFileNotFound>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _DiagnosticsFileNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsFileNotFound {
    return new _DiagnosticsFileNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsFileNotFound {
    return new _DiagnosticsFileNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsFileNotFound {
    return new _DiagnosticsFileNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsFileNotFound | PlainMessage<_DiagnosticsFileNotFound> | undefined | null, b2: _DiagnosticsFileNotFound | PlainMessage<_DiagnosticsFileNotFound> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsFileNotFound as unknown as MessageType<_DiagnosticsFileNotFound>, a, b2);
  }
})();
export type DiagnosticsFileNotFound = InstanceType<typeof DiagnosticsFileNotFound$Runtime>;
var DiagnosticsFileNotFound: MessageType<DiagnosticsFileNotFound> = DiagnosticsFileNotFound$Runtime as unknown as MessageType<DiagnosticsFileNotFound>;
(DiagnosticsFileNotFound as MutableMessageType<DiagnosticsFileNotFound>).runtime = proto3;
(DiagnosticsFileNotFound as MutableMessageType<DiagnosticsFileNotFound>).typeName = "agent.v1.DiagnosticsFileNotFound";
(DiagnosticsFileNotFound as MutableMessageType<DiagnosticsFileNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DiagnosticsPermissionDenied$Runtime = (() => class _DiagnosticsPermissionDenied extends Message<_DiagnosticsPermissionDenied> {
  declare path: string;
  constructor(data?: PartialMessage<_DiagnosticsPermissionDenied>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _DiagnosticsPermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticsPermissionDenied {
    return new _DiagnosticsPermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticsPermissionDenied {
    return new _DiagnosticsPermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticsPermissionDenied {
    return new _DiagnosticsPermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticsPermissionDenied | PlainMessage<_DiagnosticsPermissionDenied> | undefined | null, b2: _DiagnosticsPermissionDenied | PlainMessage<_DiagnosticsPermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticsPermissionDenied as unknown as MessageType<_DiagnosticsPermissionDenied>, a, b2);
  }
})();
export type DiagnosticsPermissionDenied = InstanceType<typeof DiagnosticsPermissionDenied$Runtime>;
var DiagnosticsPermissionDenied: MessageType<DiagnosticsPermissionDenied> = DiagnosticsPermissionDenied$Runtime as unknown as MessageType<DiagnosticsPermissionDenied>;
(DiagnosticsPermissionDenied as MutableMessageType<DiagnosticsPermissionDenied>).runtime = proto3;
(DiagnosticsPermissionDenied as MutableMessageType<DiagnosticsPermissionDenied>).typeName = "agent.v1.DiagnosticsPermissionDenied";
(DiagnosticsPermissionDenied as MutableMessageType<DiagnosticsPermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { DiagnosticSeverity, DiagnosticsArgs, DiagnosticsResult, DiagnosticsSuccess, Diagnostic, DiagnosticsError, DiagnosticsRejected, DiagnosticsFileNotFound, DiagnosticsPermissionDenied };
