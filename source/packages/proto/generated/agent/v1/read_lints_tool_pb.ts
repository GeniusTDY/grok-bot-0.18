/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:22836-23110
 * Region SHA-256: 7e0b0f9015c67a0384182c2f43357b380a241ba1cf0584010fd1234b290beecf
 * Atomic B1 exports: 8 messages + 0 enums = 8
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { DiagnosticSeverity } from "./diagnostics_exec_pb.js";
import { Position } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ReadLintsToolCall$Runtime = (() => class _ReadLintsToolCall extends Message<_ReadLintsToolCall> {
  declare args?: ReadLintsToolArgs;
  declare result?: ReadLintsToolResult;
  constructor(data?: PartialMessage<_ReadLintsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReadLintsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsToolCall {
    return new _ReadLintsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsToolCall {
    return new _ReadLintsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsToolCall {
    return new _ReadLintsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsToolCall | PlainMessage<_ReadLintsToolCall> | undefined | null, b2: _ReadLintsToolCall | PlainMessage<_ReadLintsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsToolCall as unknown as MessageType<_ReadLintsToolCall>, a, b2);
  }
})();
export type ReadLintsToolCall = InstanceType<typeof ReadLintsToolCall$Runtime>;
var ReadLintsToolCall: MessageType<ReadLintsToolCall> = ReadLintsToolCall$Runtime as unknown as MessageType<ReadLintsToolCall>;
(ReadLintsToolCall as MutableMessageType<ReadLintsToolCall>).runtime = proto3;
(ReadLintsToolCall as MutableMessageType<ReadLintsToolCall>).typeName = "agent.v1.ReadLintsToolCall";
(ReadLintsToolCall as MutableMessageType<ReadLintsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReadLintsToolArgs },
  { no: 2, name: "result", kind: "message", T: ReadLintsToolResult }
]);
var ReadLintsToolArgs$Runtime = (() => class _ReadLintsToolArgs extends Message<_ReadLintsToolArgs> {
  declare paths: string[];
  constructor(data?: PartialMessage<_ReadLintsToolArgs>) {
    super();
    this.paths = [];
    proto3.util.initPartial(data, this as _ReadLintsToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsToolArgs {
    return new _ReadLintsToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsToolArgs {
    return new _ReadLintsToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsToolArgs {
    return new _ReadLintsToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsToolArgs | PlainMessage<_ReadLintsToolArgs> | undefined | null, b2: _ReadLintsToolArgs | PlainMessage<_ReadLintsToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsToolArgs as unknown as MessageType<_ReadLintsToolArgs>, a, b2);
  }
})();
export type ReadLintsToolArgs = InstanceType<typeof ReadLintsToolArgs$Runtime>;
var ReadLintsToolArgs: MessageType<ReadLintsToolArgs> = ReadLintsToolArgs$Runtime as unknown as MessageType<ReadLintsToolArgs>;
(ReadLintsToolArgs as MutableMessageType<ReadLintsToolArgs>).runtime = proto3;
(ReadLintsToolArgs as MutableMessageType<ReadLintsToolArgs>).typeName = "agent.v1.ReadLintsToolArgs";
(ReadLintsToolArgs as MutableMessageType<ReadLintsToolArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }
]);
var ReadLintsToolResult$Runtime = (() => class _ReadLintsToolResult extends Message<_ReadLintsToolResult> {
  declare result: { case: "success"; value: ReadLintsToolSuccess } | { case: "error"; value: ReadLintsToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadLintsToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadLintsToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsToolResult {
    return new _ReadLintsToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsToolResult {
    return new _ReadLintsToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsToolResult {
    return new _ReadLintsToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsToolResult | PlainMessage<_ReadLintsToolResult> | undefined | null, b2: _ReadLintsToolResult | PlainMessage<_ReadLintsToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsToolResult as unknown as MessageType<_ReadLintsToolResult>, a, b2);
  }
})();
export type ReadLintsToolResult = InstanceType<typeof ReadLintsToolResult$Runtime>;
var ReadLintsToolResult: MessageType<ReadLintsToolResult> = ReadLintsToolResult$Runtime as unknown as MessageType<ReadLintsToolResult>;
(ReadLintsToolResult as MutableMessageType<ReadLintsToolResult>).runtime = proto3;
(ReadLintsToolResult as MutableMessageType<ReadLintsToolResult>).typeName = "agent.v1.ReadLintsToolResult";
(ReadLintsToolResult as MutableMessageType<ReadLintsToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadLintsToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadLintsToolError, oneof: "result" }
]);
var ReadLintsToolSuccess$Runtime = (() => class _ReadLintsToolSuccess extends Message<_ReadLintsToolSuccess> {
  declare fileDiagnostics: FileDiagnostics[];
  declare totalFiles: number;
  declare totalDiagnostics: number;
  constructor(data?: PartialMessage<_ReadLintsToolSuccess>) {
    super();
    this.fileDiagnostics = [];
    this.totalFiles = 0;
    this.totalDiagnostics = 0;
    proto3.util.initPartial(data, this as _ReadLintsToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsToolSuccess {
    return new _ReadLintsToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsToolSuccess {
    return new _ReadLintsToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsToolSuccess {
    return new _ReadLintsToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsToolSuccess | PlainMessage<_ReadLintsToolSuccess> | undefined | null, b2: _ReadLintsToolSuccess | PlainMessage<_ReadLintsToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsToolSuccess as unknown as MessageType<_ReadLintsToolSuccess>, a, b2);
  }
})();
export type ReadLintsToolSuccess = InstanceType<typeof ReadLintsToolSuccess$Runtime>;
var ReadLintsToolSuccess: MessageType<ReadLintsToolSuccess> = ReadLintsToolSuccess$Runtime as unknown as MessageType<ReadLintsToolSuccess>;
(ReadLintsToolSuccess as MutableMessageType<ReadLintsToolSuccess>).runtime = proto3;
(ReadLintsToolSuccess as MutableMessageType<ReadLintsToolSuccess>).typeName = "agent.v1.ReadLintsToolSuccess";
(ReadLintsToolSuccess as MutableMessageType<ReadLintsToolSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_diagnostics", kind: "message", T: FileDiagnostics, repeated: true },
  {
    no: 2,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_diagnostics",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var FileDiagnostics$Runtime = (() => class _FileDiagnostics extends Message<_FileDiagnostics> {
  declare path: string;
  declare diagnostics: DiagnosticItem[];
  declare diagnosticsCount: number;
  constructor(data?: PartialMessage<_FileDiagnostics>) {
    super();
    this.path = "";
    this.diagnostics = [];
    this.diagnosticsCount = 0;
    proto3.util.initPartial(data, this as _FileDiagnostics);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileDiagnostics {
    return new _FileDiagnostics().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileDiagnostics {
    return new _FileDiagnostics().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileDiagnostics {
    return new _FileDiagnostics().fromJsonString(jsonString, options);
  }
  static equals(a: _FileDiagnostics | PlainMessage<_FileDiagnostics> | undefined | null, b2: _FileDiagnostics | PlainMessage<_FileDiagnostics> | undefined | null): boolean {
    return proto3.util.equals(_FileDiagnostics as unknown as MessageType<_FileDiagnostics>, a, b2);
  }
})();
export type FileDiagnostics = InstanceType<typeof FileDiagnostics$Runtime>;
var FileDiagnostics: MessageType<FileDiagnostics> = FileDiagnostics$Runtime as unknown as MessageType<FileDiagnostics>;
(FileDiagnostics as MutableMessageType<FileDiagnostics>).runtime = proto3;
(FileDiagnostics as MutableMessageType<FileDiagnostics>).typeName = "agent.v1.FileDiagnostics";
(FileDiagnostics as MutableMessageType<FileDiagnostics>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diagnostics", kind: "message", T: DiagnosticItem, repeated: true },
  {
    no: 3,
    name: "diagnostics_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var DiagnosticItem$Runtime = (() => class _DiagnosticItem extends Message<_DiagnosticItem> {
  declare severity: DiagnosticSeverity;
  declare range?: DiagnosticRange;
  declare message: string;
  declare source: string;
  declare code: string;
  declare isStale: boolean;
  constructor(data?: PartialMessage<_DiagnosticItem>) {
    super();
    this.severity = DiagnosticSeverity.UNSPECIFIED;
    this.message = "";
    this.source = "";
    this.code = "";
    this.isStale = false;
    proto3.util.initPartial(data, this as _DiagnosticItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticItem {
    return new _DiagnosticItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticItem {
    return new _DiagnosticItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticItem {
    return new _DiagnosticItem().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticItem | PlainMessage<_DiagnosticItem> | undefined | null, b2: _DiagnosticItem | PlainMessage<_DiagnosticItem> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticItem as unknown as MessageType<_DiagnosticItem>, a, b2);
  }
})();
export type DiagnosticItem = InstanceType<typeof DiagnosticItem$Runtime>;
var DiagnosticItem: MessageType<DiagnosticItem> = DiagnosticItem$Runtime as unknown as MessageType<DiagnosticItem>;
(DiagnosticItem as MutableMessageType<DiagnosticItem>).runtime = proto3;
(DiagnosticItem as MutableMessageType<DiagnosticItem>).typeName = "agent.v1.DiagnosticItem";
(DiagnosticItem as MutableMessageType<DiagnosticItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "severity", kind: "enum", T: proto3.getEnumType(DiagnosticSeverity) },
  { no: 2, name: "range", kind: "message", T: DiagnosticRange },
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
var DiagnosticRange$Runtime = (() => class _DiagnosticRange extends Message<_DiagnosticRange> {
  declare start?: Position;
  declare end?: Position;
  constructor(data?: PartialMessage<_DiagnosticRange>) {
    super();
    proto3.util.initPartial(data, this as _DiagnosticRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiagnosticRange {
    return new _DiagnosticRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiagnosticRange {
    return new _DiagnosticRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiagnosticRange {
    return new _DiagnosticRange().fromJsonString(jsonString, options);
  }
  static equals(a: _DiagnosticRange | PlainMessage<_DiagnosticRange> | undefined | null, b2: _DiagnosticRange | PlainMessage<_DiagnosticRange> | undefined | null): boolean {
    return proto3.util.equals(_DiagnosticRange as unknown as MessageType<_DiagnosticRange>, a, b2);
  }
})();
export type DiagnosticRange = InstanceType<typeof DiagnosticRange$Runtime>;
var DiagnosticRange: MessageType<DiagnosticRange> = DiagnosticRange$Runtime as unknown as MessageType<DiagnosticRange>;
(DiagnosticRange as MutableMessageType<DiagnosticRange>).runtime = proto3;
(DiagnosticRange as MutableMessageType<DiagnosticRange>).typeName = "agent.v1.DiagnosticRange";
(DiagnosticRange as MutableMessageType<DiagnosticRange>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "start", kind: "message", T: Position },
  { no: 2, name: "end", kind: "message", T: Position }
]);
var ReadLintsToolError$Runtime = (() => class _ReadLintsToolError extends Message<_ReadLintsToolError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_ReadLintsToolError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _ReadLintsToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsToolError {
    return new _ReadLintsToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsToolError {
    return new _ReadLintsToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsToolError {
    return new _ReadLintsToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsToolError | PlainMessage<_ReadLintsToolError> | undefined | null, b2: _ReadLintsToolError | PlainMessage<_ReadLintsToolError> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsToolError as unknown as MessageType<_ReadLintsToolError>, a, b2);
  }
})();
export type ReadLintsToolError = InstanceType<typeof ReadLintsToolError$Runtime>;
var ReadLintsToolError: MessageType<ReadLintsToolError> = ReadLintsToolError$Runtime as unknown as MessageType<ReadLintsToolError>;
(ReadLintsToolError as MutableMessageType<ReadLintsToolError>).runtime = proto3;
(ReadLintsToolError as MutableMessageType<ReadLintsToolError>).typeName = "agent.v1.ReadLintsToolError";
(ReadLintsToolError as MutableMessageType<ReadLintsToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ReadLintsToolCall, ReadLintsToolArgs, ReadLintsToolResult, ReadLintsToolSuccess, FileDiagnostics, DiagnosticItem, DiagnosticRange, ReadLintsToolError };
