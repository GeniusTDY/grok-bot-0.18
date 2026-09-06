/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:15125-15636
 * Region SHA-256: 46d21922cf92a2781564769988cf6112f96a2bcba067001547a6fb7d46dcc5c1
 * Atomic B1 exports: 12 messages + 0 enums = 12
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GrepArgs$Runtime = (() => class _GrepArgs extends Message<_GrepArgs> {
  declare pattern: string;
  declare path?: string;
  declare glob?: string;
  declare outputMode?: string;
  declare contextBefore?: number;
  declare contextAfter?: number;
  declare context?: number;
  declare caseInsensitive?: boolean;
  declare type?: string;
  declare headLimit?: number;
  declare multiline?: boolean;
  declare sort?: string;
  declare sortAscending?: boolean;
  declare toolCallId: string;
  declare sandboxPolicy?: SandboxPolicy;
  declare offset?: number;
  constructor(data?: PartialMessage<_GrepArgs>) {
    super();
    this.pattern = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _GrepArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepArgs {
    return new _GrepArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepArgs {
    return new _GrepArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepArgs {
    return new _GrepArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepArgs | PlainMessage<_GrepArgs> | undefined | null, b2: _GrepArgs | PlainMessage<_GrepArgs> | undefined | null): boolean {
    return proto3.util.equals(_GrepArgs as unknown as MessageType<_GrepArgs>, a, b2);
  }
})();
export type GrepArgs = InstanceType<typeof GrepArgs$Runtime>;
var GrepArgs: MessageType<GrepArgs> = GrepArgs$Runtime as unknown as MessageType<GrepArgs>;
(GrepArgs as MutableMessageType<GrepArgs>).runtime = proto3;
(GrepArgs as MutableMessageType<GrepArgs>).typeName = "agent.v1.GrepArgs";
(GrepArgs as MutableMessageType<GrepArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "glob", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "context", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "type", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true },
  { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "sort", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true },
  {
    no: 14,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 15, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 16, name: "offset", kind: "scalar", T: 5, opt: true }
]);
var GrepResult$Runtime = (() => class _GrepResult extends Message<_GrepResult> {
  declare result: { case: "success"; value: GrepSuccess } | { case: "error"; value: GrepError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GrepResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GrepResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepResult {
    return new _GrepResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepResult {
    return new _GrepResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepResult {
    return new _GrepResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepResult | PlainMessage<_GrepResult> | undefined | null, b2: _GrepResult | PlainMessage<_GrepResult> | undefined | null): boolean {
    return proto3.util.equals(_GrepResult as unknown as MessageType<_GrepResult>, a, b2);
  }
})();
export type GrepResult = InstanceType<typeof GrepResult$Runtime>;
var GrepResult: MessageType<GrepResult> = GrepResult$Runtime as unknown as MessageType<GrepResult>;
(GrepResult as MutableMessageType<GrepResult>).runtime = proto3;
(GrepResult as MutableMessageType<GrepResult>).typeName = "agent.v1.GrepResult";
(GrepResult as MutableMessageType<GrepResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: GrepSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GrepError, oneof: "result" }
]);
var GrepError$Runtime = (() => class _GrepError extends Message<_GrepError> {
  declare error: string;
  constructor(data?: PartialMessage<_GrepError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GrepError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepError {
    return new _GrepError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepError {
    return new _GrepError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepError {
    return new _GrepError().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepError | PlainMessage<_GrepError> | undefined | null, b2: _GrepError | PlainMessage<_GrepError> | undefined | null): boolean {
    return proto3.util.equals(_GrepError as unknown as MessageType<_GrepError>, a, b2);
  }
})();
export type GrepError = InstanceType<typeof GrepError$Runtime>;
var GrepError: MessageType<GrepError> = GrepError$Runtime as unknown as MessageType<GrepError>;
(GrepError as MutableMessageType<GrepError>).runtime = proto3;
(GrepError as MutableMessageType<GrepError>).typeName = "agent.v1.GrepError";
(GrepError as MutableMessageType<GrepError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GrepSuccess$Runtime = (() => class _GrepSuccess extends Message<_GrepSuccess> {
  declare pattern: string;
  declare path: string;
  declare outputMode: string;
  declare workspaceResults: { [key: string]: GrepUnionResult };
  declare activeEditorResult?: GrepUnionResult;
  constructor(data?: PartialMessage<_GrepSuccess>) {
    super();
    this.pattern = "";
    this.path = "";
    this.outputMode = "";
    this.workspaceResults = {};
    proto3.util.initPartial(data, this as _GrepSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepSuccess {
    return new _GrepSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepSuccess {
    return new _GrepSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepSuccess {
    return new _GrepSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepSuccess | PlainMessage<_GrepSuccess> | undefined | null, b2: _GrepSuccess | PlainMessage<_GrepSuccess> | undefined | null): boolean {
    return proto3.util.equals(_GrepSuccess as unknown as MessageType<_GrepSuccess>, a, b2);
  }
})();
export type GrepSuccess = InstanceType<typeof GrepSuccess$Runtime>;
var GrepSuccess: MessageType<GrepSuccess> = GrepSuccess$Runtime as unknown as MessageType<GrepSuccess>;
(GrepSuccess as MutableMessageType<GrepSuccess>).runtime = proto3;
(GrepSuccess as MutableMessageType<GrepSuccess>).typeName = "agent.v1.GrepSuccess";
(GrepSuccess as MutableMessageType<GrepSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "output_mode",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: GrepUnionResult } },
  { no: 5, name: "active_editor_result", kind: "message", T: GrepUnionResult, opt: true }
]);
var GrepUnionResult$Runtime = (() => class _GrepUnionResult extends Message<_GrepUnionResult> {
  declare result: { case: "count"; value: GrepCountResult } | { case: "files"; value: GrepFilesResult } | { case: "content"; value: GrepContentResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GrepUnionResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GrepUnionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepUnionResult {
    return new _GrepUnionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepUnionResult {
    return new _GrepUnionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepUnionResult {
    return new _GrepUnionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepUnionResult | PlainMessage<_GrepUnionResult> | undefined | null, b2: _GrepUnionResult | PlainMessage<_GrepUnionResult> | undefined | null): boolean {
    return proto3.util.equals(_GrepUnionResult as unknown as MessageType<_GrepUnionResult>, a, b2);
  }
})();
export type GrepUnionResult = InstanceType<typeof GrepUnionResult$Runtime>;
var GrepUnionResult: MessageType<GrepUnionResult> = GrepUnionResult$Runtime as unknown as MessageType<GrepUnionResult>;
(GrepUnionResult as MutableMessageType<GrepUnionResult>).runtime = proto3;
(GrepUnionResult as MutableMessageType<GrepUnionResult>).typeName = "agent.v1.GrepUnionResult";
(GrepUnionResult as MutableMessageType<GrepUnionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "count", kind: "message", T: GrepCountResult, oneof: "result" },
  { no: 2, name: "files", kind: "message", T: GrepFilesResult, oneof: "result" },
  { no: 3, name: "content", kind: "message", T: GrepContentResult, oneof: "result" }
]);
var GrepCountResult$Runtime = (() => class _GrepCountResult extends Message<_GrepCountResult> {
  declare counts: GrepFileCount[];
  declare totalFiles: number;
  declare totalMatches: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  constructor(data?: PartialMessage<_GrepCountResult>) {
    super();
    this.counts = [];
    this.totalFiles = 0;
    this.totalMatches = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _GrepCountResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepCountResult {
    return new _GrepCountResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepCountResult {
    return new _GrepCountResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepCountResult {
    return new _GrepCountResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepCountResult | PlainMessage<_GrepCountResult> | undefined | null, b2: _GrepCountResult | PlainMessage<_GrepCountResult> | undefined | null): boolean {
    return proto3.util.equals(_GrepCountResult as unknown as MessageType<_GrepCountResult>, a, b2);
  }
})();
export type GrepCountResult = InstanceType<typeof GrepCountResult$Runtime>;
var GrepCountResult: MessageType<GrepCountResult> = GrepCountResult$Runtime as unknown as MessageType<GrepCountResult>;
(GrepCountResult as MutableMessageType<GrepCountResult>).runtime = proto3;
(GrepCountResult as MutableMessageType<GrepCountResult>).typeName = "agent.v1.GrepCountResult";
(GrepCountResult as MutableMessageType<GrepCountResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "counts", kind: "message", T: GrepFileCount, repeated: true },
  {
    no: 2,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_matches",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }
]);
var GrepFileCount$Runtime = (() => class _GrepFileCount extends Message<_GrepFileCount> {
  declare file: string;
  declare count: number;
  constructor(data?: PartialMessage<_GrepFileCount>) {
    super();
    this.file = "";
    this.count = 0;
    proto3.util.initPartial(data, this as _GrepFileCount);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepFileCount {
    return new _GrepFileCount().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepFileCount {
    return new _GrepFileCount().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepFileCount {
    return new _GrepFileCount().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepFileCount | PlainMessage<_GrepFileCount> | undefined | null, b2: _GrepFileCount | PlainMessage<_GrepFileCount> | undefined | null): boolean {
    return proto3.util.equals(_GrepFileCount as unknown as MessageType<_GrepFileCount>, a, b2);
  }
})();
export type GrepFileCount = InstanceType<typeof GrepFileCount$Runtime>;
var GrepFileCount: MessageType<GrepFileCount> = GrepFileCount$Runtime as unknown as MessageType<GrepFileCount>;
(GrepFileCount as MutableMessageType<GrepFileCount>).runtime = proto3;
(GrepFileCount as MutableMessageType<GrepFileCount>).typeName = "agent.v1.GrepFileCount";
(GrepFileCount as MutableMessageType<GrepFileCount>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GrepFilesResult$Runtime = (() => class _GrepFilesResult extends Message<_GrepFilesResult> {
  declare files: string[];
  declare totalFiles: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  constructor(data?: PartialMessage<_GrepFilesResult>) {
    super();
    this.files = [];
    this.totalFiles = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _GrepFilesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepFilesResult {
    return new _GrepFilesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepFilesResult {
    return new _GrepFilesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepFilesResult {
    return new _GrepFilesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepFilesResult | PlainMessage<_GrepFilesResult> | undefined | null, b2: _GrepFilesResult | PlainMessage<_GrepFilesResult> | undefined | null): boolean {
    return proto3.util.equals(_GrepFilesResult as unknown as MessageType<_GrepFilesResult>, a, b2);
  }
})();
export type GrepFilesResult = InstanceType<typeof GrepFilesResult$Runtime>;
var GrepFilesResult: MessageType<GrepFilesResult> = GrepFilesResult$Runtime as unknown as MessageType<GrepFilesResult>;
(GrepFilesResult as MutableMessageType<GrepFilesResult>).runtime = proto3;
(GrepFilesResult as MutableMessageType<GrepFilesResult>).typeName = "agent.v1.GrepFilesResult";
(GrepFilesResult as MutableMessageType<GrepFilesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "offset_applied", kind: "scalar", T: 5, opt: true }
]);
var GrepContentResult$Runtime = (() => class _GrepContentResult extends Message<_GrepContentResult> {
  declare matches: GrepFileMatch[];
  declare totalLines: number;
  declare totalMatchedLines: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  constructor(data?: PartialMessage<_GrepContentResult>) {
    super();
    this.matches = [];
    this.totalLines = 0;
    this.totalMatchedLines = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _GrepContentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepContentResult {
    return new _GrepContentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepContentResult {
    return new _GrepContentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepContentResult {
    return new _GrepContentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepContentResult | PlainMessage<_GrepContentResult> | undefined | null, b2: _GrepContentResult | PlainMessage<_GrepContentResult> | undefined | null): boolean {
    return proto3.util.equals(_GrepContentResult as unknown as MessageType<_GrepContentResult>, a, b2);
  }
})();
export type GrepContentResult = InstanceType<typeof GrepContentResult$Runtime>;
var GrepContentResult: MessageType<GrepContentResult> = GrepContentResult$Runtime as unknown as MessageType<GrepContentResult>;
(GrepContentResult as MutableMessageType<GrepContentResult>).runtime = proto3;
(GrepContentResult as MutableMessageType<GrepContentResult>).typeName = "agent.v1.GrepContentResult";
(GrepContentResult as MutableMessageType<GrepContentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "matches", kind: "message", T: GrepFileMatch, repeated: true },
  {
    no: 2,
    name: "total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_matched_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }
]);
var GrepFileMatch$Runtime = (() => class _GrepFileMatch extends Message<_GrepFileMatch> {
  declare file: string;
  declare matches: GrepContentMatch[];
  constructor(data?: PartialMessage<_GrepFileMatch>) {
    super();
    this.file = "";
    this.matches = [];
    proto3.util.initPartial(data, this as _GrepFileMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepFileMatch {
    return new _GrepFileMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepFileMatch {
    return new _GrepFileMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepFileMatch {
    return new _GrepFileMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepFileMatch | PlainMessage<_GrepFileMatch> | undefined | null, b2: _GrepFileMatch | PlainMessage<_GrepFileMatch> | undefined | null): boolean {
    return proto3.util.equals(_GrepFileMatch as unknown as MessageType<_GrepFileMatch>, a, b2);
  }
})();
export type GrepFileMatch = InstanceType<typeof GrepFileMatch$Runtime>;
var GrepFileMatch: MessageType<GrepFileMatch> = GrepFileMatch$Runtime as unknown as MessageType<GrepFileMatch>;
(GrepFileMatch as MutableMessageType<GrepFileMatch>).runtime = proto3;
(GrepFileMatch as MutableMessageType<GrepFileMatch>).typeName = "agent.v1.GrepFileMatch";
(GrepFileMatch as MutableMessageType<GrepFileMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "matches", kind: "message", T: GrepContentMatch, repeated: true }
]);
var GrepContentMatch$Runtime = (() => class _GrepContentMatch extends Message<_GrepContentMatch> {
  declare lineNumber: number;
  declare content: string;
  declare contentTruncated: boolean;
  declare isContextLine: boolean;
  constructor(data?: PartialMessage<_GrepContentMatch>) {
    super();
    this.lineNumber = 0;
    this.content = "";
    this.contentTruncated = false;
    this.isContextLine = false;
    proto3.util.initPartial(data, this as _GrepContentMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepContentMatch {
    return new _GrepContentMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepContentMatch {
    return new _GrepContentMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepContentMatch {
    return new _GrepContentMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepContentMatch | PlainMessage<_GrepContentMatch> | undefined | null, b2: _GrepContentMatch | PlainMessage<_GrepContentMatch> | undefined | null): boolean {
    return proto3.util.equals(_GrepContentMatch as unknown as MessageType<_GrepContentMatch>, a, b2);
  }
})();
export type GrepContentMatch = InstanceType<typeof GrepContentMatch$Runtime>;
var GrepContentMatch: MessageType<GrepContentMatch> = GrepContentMatch$Runtime as unknown as MessageType<GrepContentMatch>;
(GrepContentMatch as MutableMessageType<GrepContentMatch>).runtime = proto3;
(GrepContentMatch as MutableMessageType<GrepContentMatch>).typeName = "agent.v1.GrepContentMatch";
(GrepContentMatch as MutableMessageType<GrepContentMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "content_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "is_context_line",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GrepStream$Runtime = (() => class _GrepStream extends Message<_GrepStream> {
  declare pattern: string;
  constructor(data?: PartialMessage<_GrepStream>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _GrepStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepStream {
    return new _GrepStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepStream {
    return new _GrepStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepStream {
    return new _GrepStream().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepStream | PlainMessage<_GrepStream> | undefined | null, b2: _GrepStream | PlainMessage<_GrepStream> | undefined | null): boolean {
    return proto3.util.equals(_GrepStream as unknown as MessageType<_GrepStream>, a, b2);
  }
})();
export type GrepStream = InstanceType<typeof GrepStream$Runtime>;
var GrepStream: MessageType<GrepStream> = GrepStream$Runtime as unknown as MessageType<GrepStream>;
(GrepStream as MutableMessageType<GrepStream>).runtime = proto3;
(GrepStream as MutableMessageType<GrepStream>).typeName = "agent.v1.GrepStream";
(GrepStream as MutableMessageType<GrepStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { GrepArgs, GrepResult, GrepError, GrepSuccess, GrepUnionResult, GrepCountResult, GrepFileCount, GrepFilesResult, GrepContentResult, GrepFileMatch, GrepContentMatch, GrepStream };
