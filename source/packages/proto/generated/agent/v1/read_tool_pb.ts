/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:21851-22083
 * Region SHA-256: f496cd293add80dd701ecb5d87dad552cc2cdeaefd1e8fe8ca18e1785a31c4be
 * Atomic B1 exports: 6 messages + 0 enums = 6
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { CursorRule } from "./cursor_rules_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ReadToolCall$Runtime = (() => class _ReadToolCall extends Message<_ReadToolCall> {
  declare args?: ReadToolArgs;
  declare result?: ReadToolResult;
  constructor(data?: PartialMessage<_ReadToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReadToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadToolCall {
    return new _ReadToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadToolCall {
    return new _ReadToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadToolCall {
    return new _ReadToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadToolCall | PlainMessage<_ReadToolCall> | undefined | null, b2: _ReadToolCall | PlainMessage<_ReadToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReadToolCall as unknown as MessageType<_ReadToolCall>, a, b2);
  }
})();
export type ReadToolCall = InstanceType<typeof ReadToolCall$Runtime>;
var ReadToolCall: MessageType<ReadToolCall> = ReadToolCall$Runtime as unknown as MessageType<ReadToolCall>;
(ReadToolCall as MutableMessageType<ReadToolCall>).runtime = proto3;
(ReadToolCall as MutableMessageType<ReadToolCall>).typeName = "agent.v1.ReadToolCall";
(ReadToolCall as MutableMessageType<ReadToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReadToolArgs },
  { no: 2, name: "result", kind: "message", T: ReadToolResult }
]);
var ReadToolArgs$Runtime = (() => class _ReadToolArgs extends Message<_ReadToolArgs> {
  declare path: string;
  declare offset?: number;
  declare limit?: number;
  declare includeLineNumbers?: boolean;
  constructor(data?: PartialMessage<_ReadToolArgs>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadToolArgs {
    return new _ReadToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadToolArgs {
    return new _ReadToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadToolArgs {
    return new _ReadToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadToolArgs | PlainMessage<_ReadToolArgs> | undefined | null, b2: _ReadToolArgs | PlainMessage<_ReadToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadToolArgs as unknown as MessageType<_ReadToolArgs>, a, b2);
  }
})();
export type ReadToolArgs = InstanceType<typeof ReadToolArgs$Runtime>;
var ReadToolArgs: MessageType<ReadToolArgs> = ReadToolArgs$Runtime as unknown as MessageType<ReadToolArgs>;
(ReadToolArgs as MutableMessageType<ReadToolArgs>).runtime = proto3;
(ReadToolArgs as MutableMessageType<ReadToolArgs>).typeName = "agent.v1.ReadToolArgs";
(ReadToolArgs as MutableMessageType<ReadToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "offset", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "include_line_numbers", kind: "scalar", T: 8, opt: true }
]);
var ReadToolResult$Runtime = (() => class _ReadToolResult extends Message<_ReadToolResult> {
  declare result: { case: "success"; value: ReadToolSuccess } | { case: "error"; value: ReadToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadToolResult {
    return new _ReadToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadToolResult {
    return new _ReadToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadToolResult {
    return new _ReadToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadToolResult | PlainMessage<_ReadToolResult> | undefined | null, b2: _ReadToolResult | PlainMessage<_ReadToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadToolResult as unknown as MessageType<_ReadToolResult>, a, b2);
  }
})();
export type ReadToolResult = InstanceType<typeof ReadToolResult$Runtime>;
var ReadToolResult: MessageType<ReadToolResult> = ReadToolResult$Runtime as unknown as MessageType<ReadToolResult>;
(ReadToolResult as MutableMessageType<ReadToolResult>).runtime = proto3;
(ReadToolResult as MutableMessageType<ReadToolResult>).typeName = "agent.v1.ReadToolResult";
(ReadToolResult as MutableMessageType<ReadToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadToolError, oneof: "result" }
]);
var ReadRange$Runtime = (() => class _ReadRange extends Message<_ReadRange> {
  declare startLine: number;
  declare endLine: number;
  constructor(data?: PartialMessage<_ReadRange>) {
    super();
    this.startLine = 0;
    this.endLine = 0;
    proto3.util.initPartial(data, this as _ReadRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadRange {
    return new _ReadRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadRange {
    return new _ReadRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadRange {
    return new _ReadRange().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadRange | PlainMessage<_ReadRange> | undefined | null, b2: _ReadRange | PlainMessage<_ReadRange> | undefined | null): boolean {
    return proto3.util.equals(_ReadRange as unknown as MessageType<_ReadRange>, a, b2);
  }
})();
export type ReadRange = InstanceType<typeof ReadRange$Runtime>;
var ReadRange: MessageType<ReadRange> = ReadRange$Runtime as unknown as MessageType<ReadRange>;
(ReadRange as MutableMessageType<ReadRange>).runtime = proto3;
(ReadRange as MutableMessageType<ReadRange>).typeName = "agent.v1.ReadRange";
(ReadRange as MutableMessageType<ReadRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "end_line",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ReadToolSuccess$Runtime = (() => class _ReadToolSuccess extends Message<_ReadToolSuccess> {
  declare isEmpty: boolean;
  declare exceededLimit: boolean;
  declare totalLines: number;
  declare fileSize: number;
  declare path: string;
  declare readRange?: ReadRange;
  declare includeLineNumbers?: boolean;
  declare relatedCursorRulePaths: string[];
  declare relatedCursorRules: CursorRule[];
  declare output: { case: "content"; value: string } | { case: "data"; value: Uint8Array } | { case: "dataBlobId"; value: Uint8Array } | { case: "contentBlobId"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadToolSuccess>) {
    super();
    this.output = { case: void 0 };
    this.isEmpty = false;
    this.exceededLimit = false;
    this.totalLines = 0;
    this.fileSize = 0;
    this.path = "";
    this.relatedCursorRulePaths = [];
    this.relatedCursorRules = [];
    proto3.util.initPartial(data, this as _ReadToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadToolSuccess {
    return new _ReadToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadToolSuccess {
    return new _ReadToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadToolSuccess {
    return new _ReadToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadToolSuccess | PlainMessage<_ReadToolSuccess> | undefined | null, b2: _ReadToolSuccess | PlainMessage<_ReadToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadToolSuccess as unknown as MessageType<_ReadToolSuccess>, a, b2);
  }
})();
export type ReadToolSuccess = InstanceType<typeof ReadToolSuccess$Runtime>;
var ReadToolSuccess: MessageType<ReadToolSuccess> = ReadToolSuccess$Runtime as unknown as MessageType<ReadToolSuccess>;
(ReadToolSuccess as MutableMessageType<ReadToolSuccess>).runtime = proto3;
(ReadToolSuccess as MutableMessageType<ReadToolSuccess>).typeName = "agent.v1.ReadToolSuccess";
(ReadToolSuccess as MutableMessageType<ReadToolSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "scalar", T: 9, oneof: "output" },
  { no: 6, name: "data", kind: "scalar", T: 12, oneof: "output" },
  { no: 9, name: "data_blob_id", kind: "scalar", T: 12, oneof: "output" },
  { no: 10, name: "content_blob_id", kind: "scalar", T: 12, oneof: "output" },
  {
    no: 2,
    name: "is_empty",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "exceeded_limit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "total_lines",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 5,
    name: "file_size",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 7,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "read_range", kind: "message", T: ReadRange, opt: true },
  { no: 11, name: "include_line_numbers", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "related_cursor_rule_paths", kind: "scalar", T: 9, repeated: true },
  { no: 13, name: "related_cursor_rules", kind: "message", T: CursorRule, repeated: true }
]);
var ReadToolError$Runtime = (() => class _ReadToolError extends Message<_ReadToolError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_ReadToolError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _ReadToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadToolError {
    return new _ReadToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadToolError {
    return new _ReadToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadToolError {
    return new _ReadToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadToolError | PlainMessage<_ReadToolError> | undefined | null, b2: _ReadToolError | PlainMessage<_ReadToolError> | undefined | null): boolean {
    return proto3.util.equals(_ReadToolError as unknown as MessageType<_ReadToolError>, a, b2);
  }
})();
export type ReadToolError = InstanceType<typeof ReadToolError$Runtime>;
var ReadToolError: MessageType<ReadToolError> = ReadToolError$Runtime as unknown as MessageType<ReadToolError>;
(ReadToolError as MutableMessageType<ReadToolError>).runtime = proto3;
(ReadToolError as MutableMessageType<ReadToolError>).typeName = "agent.v1.ReadToolError";
(ReadToolError as MutableMessageType<ReadToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ReadToolCall, ReadToolArgs, ReadToolResult, ReadRange, ReadToolSuccess, ReadToolError };
