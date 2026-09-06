/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:62626-62944
 * Region SHA-256: 02569af827c77335892b43c8295700a6f03fc6dd3a920c329c157ae4e487a1f9
 * B11 exports: 8 messages + 0 enums + 0 services = 8
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ReadArgs$Runtime = (() => class _ReadArgs extends Message<_ReadArgs> {
  declare path: string;
  declare toolCallId: string;
  declare offset?: number;
  declare limit?: number;
  declare encodingHint?: string;
  constructor(data?: PartialMessage<_ReadArgs>) {
    super();
    this.path = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ReadArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadArgs {
    return new _ReadArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadArgs {
    return new _ReadArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadArgs {
    return new _ReadArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadArgs | PlainMessage<_ReadArgs> | undefined | null, b2: _ReadArgs | PlainMessage<_ReadArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadArgs as unknown as MessageType<_ReadArgs>, a, b2);
  }
})();
export type ReadArgs = InstanceType<typeof ReadArgs$Runtime>;
var ReadArgs: MessageType<ReadArgs> = ReadArgs$Runtime as unknown as MessageType<ReadArgs>;
(ReadArgs as MutableMessageType<ReadArgs>).runtime = proto3;
(ReadArgs as MutableMessageType<ReadArgs>).typeName = "agent.v1.ReadArgs";
(ReadArgs as MutableMessageType<ReadArgs>).fields = proto3.util.newFieldList(() => [
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
  },
  { no: 4, name: "offset", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "limit", kind: "scalar", T: 13, opt: true },
  { no: 6, name: "encoding_hint", kind: "scalar", T: 9, opt: true }
]);
var ReadResult$Runtime = (() => class _ReadResult extends Message<_ReadResult> {
  declare result: { case: "success"; value: ReadSuccess } | { case: "error"; value: ReadError } | { case: "rejected"; value: ReadRejected } | { case: "fileNotFound"; value: ReadFileNotFound } | { case: "permissionDenied"; value: ReadPermissionDenied } | { case: "invalidFile"; value: ReadInvalidFile } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadResult {
    return new _ReadResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadResult {
    return new _ReadResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadResult {
    return new _ReadResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadResult | PlainMessage<_ReadResult> | undefined | null, b2: _ReadResult | PlainMessage<_ReadResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadResult as unknown as MessageType<_ReadResult>, a, b2);
  }
})();
export type ReadResult = InstanceType<typeof ReadResult$Runtime>;
var ReadResult: MessageType<ReadResult> = ReadResult$Runtime as unknown as MessageType<ReadResult>;
(ReadResult as MutableMessageType<ReadResult>).runtime = proto3;
(ReadResult as MutableMessageType<ReadResult>).typeName = "agent.v1.ReadResult";
(ReadResult as MutableMessageType<ReadResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: ReadRejected, oneof: "result" },
  { no: 4, name: "file_not_found", kind: "message", T: ReadFileNotFound, oneof: "result" },
  { no: 5, name: "permission_denied", kind: "message", T: ReadPermissionDenied, oneof: "result" },
  { no: 6, name: "invalid_file", kind: "message", T: ReadInvalidFile, oneof: "result" }
]);
var ReadSuccess$Runtime = (() => class _ReadSuccess extends Message<_ReadSuccess> {
  declare path: string;
  declare totalLines: number;
  declare fileSize: bigint;
  declare truncated: boolean;
  declare outputBlobId?: Uint8Array;
  declare rangeApplied: boolean;
  declare output: { case: "content"; value: string } | { case: "data"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadSuccess>) {
    super();
    this.path = "";
    this.output = { case: void 0 };
    this.totalLines = 0;
    this.fileSize = protoInt64.zero;
    this.truncated = false;
    this.rangeApplied = false;
    proto3.util.initPartial(data, this as _ReadSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadSuccess {
    return new _ReadSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadSuccess {
    return new _ReadSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadSuccess {
    return new _ReadSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadSuccess | PlainMessage<_ReadSuccess> | undefined | null, b2: _ReadSuccess | PlainMessage<_ReadSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadSuccess as unknown as MessageType<_ReadSuccess>, a, b2);
  }
})();
export type ReadSuccess = InstanceType<typeof ReadSuccess$Runtime>;
var ReadSuccess: MessageType<ReadSuccess> = ReadSuccess$Runtime as unknown as MessageType<ReadSuccess>;
(ReadSuccess as MutableMessageType<ReadSuccess>).runtime = proto3;
(ReadSuccess as MutableMessageType<ReadSuccess>).typeName = "agent.v1.ReadSuccess";
(ReadSuccess as MutableMessageType<ReadSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "content", kind: "scalar", T: 9, oneof: "output" },
  { no: 5, name: "data", kind: "scalar", T: 12, oneof: "output" },
  {
    no: 3,
    name: "total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "file_size",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 6,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "output_blob_id", kind: "scalar", T: 12, opt: true },
  {
    no: 8,
    name: "range_applied",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ReadError$Runtime = (() => class _ReadError extends Message<_ReadError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_ReadError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _ReadError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadError {
    return new _ReadError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadError {
    return new _ReadError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadError {
    return new _ReadError().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadError | PlainMessage<_ReadError> | undefined | null, b2: _ReadError | PlainMessage<_ReadError> | undefined | null): boolean {
    return proto3.util.equals(_ReadError as unknown as MessageType<_ReadError>, a, b2);
  }
})();
export type ReadError = InstanceType<typeof ReadError$Runtime>;
var ReadError: MessageType<ReadError> = ReadError$Runtime as unknown as MessageType<ReadError>;
(ReadError as MutableMessageType<ReadError>).runtime = proto3;
(ReadError as MutableMessageType<ReadError>).typeName = "agent.v1.ReadError";
(ReadError as MutableMessageType<ReadError>).fields = proto3.util.newFieldList(() => [
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
var ReadRejected$Runtime = (() => class _ReadRejected extends Message<_ReadRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_ReadRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _ReadRejected);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadRejected {
    return new _ReadRejected().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadRejected {
    return new _ReadRejected().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadRejected {
    return new _ReadRejected().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadRejected | PlainMessage<_ReadRejected> | undefined | null, b2: _ReadRejected | PlainMessage<_ReadRejected> | undefined | null): boolean {
    return proto3.util.equals(_ReadRejected as unknown as MessageType<_ReadRejected>, a, b2);
  }
})();
export type ReadRejected = InstanceType<typeof ReadRejected$Runtime>;
var ReadRejected: MessageType<ReadRejected> = ReadRejected$Runtime as unknown as MessageType<ReadRejected>;
(ReadRejected as MutableMessageType<ReadRejected>).runtime = proto3;
(ReadRejected as MutableMessageType<ReadRejected>).typeName = "agent.v1.ReadRejected";
(ReadRejected as MutableMessageType<ReadRejected>).fields = proto3.util.newFieldList(() => [
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
var ReadFileNotFound$Runtime = (() => class _ReadFileNotFound extends Message<_ReadFileNotFound> {
  declare path: string;
  constructor(data?: PartialMessage<_ReadFileNotFound>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadFileNotFound);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadFileNotFound {
    return new _ReadFileNotFound().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadFileNotFound {
    return new _ReadFileNotFound().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadFileNotFound {
    return new _ReadFileNotFound().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadFileNotFound | PlainMessage<_ReadFileNotFound> | undefined | null, b2: _ReadFileNotFound | PlainMessage<_ReadFileNotFound> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileNotFound as unknown as MessageType<_ReadFileNotFound>, a, b2);
  }
})();
export type ReadFileNotFound = InstanceType<typeof ReadFileNotFound$Runtime>;
var ReadFileNotFound: MessageType<ReadFileNotFound> = ReadFileNotFound$Runtime as unknown as MessageType<ReadFileNotFound>;
(ReadFileNotFound as MutableMessageType<ReadFileNotFound>).runtime = proto3;
(ReadFileNotFound as MutableMessageType<ReadFileNotFound>).typeName = "agent.v1.ReadFileNotFound";
(ReadFileNotFound as MutableMessageType<ReadFileNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadPermissionDenied$Runtime = (() => class _ReadPermissionDenied extends Message<_ReadPermissionDenied> {
  declare path: string;
  constructor(data?: PartialMessage<_ReadPermissionDenied>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _ReadPermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadPermissionDenied {
    return new _ReadPermissionDenied().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadPermissionDenied {
    return new _ReadPermissionDenied().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadPermissionDenied {
    return new _ReadPermissionDenied().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadPermissionDenied | PlainMessage<_ReadPermissionDenied> | undefined | null, b2: _ReadPermissionDenied | PlainMessage<_ReadPermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_ReadPermissionDenied as unknown as MessageType<_ReadPermissionDenied>, a, b2);
  }
})();
export type ReadPermissionDenied = InstanceType<typeof ReadPermissionDenied$Runtime>;
var ReadPermissionDenied: MessageType<ReadPermissionDenied> = ReadPermissionDenied$Runtime as unknown as MessageType<ReadPermissionDenied>;
(ReadPermissionDenied as MutableMessageType<ReadPermissionDenied>).runtime = proto3;
(ReadPermissionDenied as MutableMessageType<ReadPermissionDenied>).typeName = "agent.v1.ReadPermissionDenied";
(ReadPermissionDenied as MutableMessageType<ReadPermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadInvalidFile$Runtime = (() => class _ReadInvalidFile extends Message<_ReadInvalidFile> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_ReadInvalidFile>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _ReadInvalidFile);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadInvalidFile {
    return new _ReadInvalidFile().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadInvalidFile {
    return new _ReadInvalidFile().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadInvalidFile {
    return new _ReadInvalidFile().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadInvalidFile | PlainMessage<_ReadInvalidFile> | undefined | null, b2: _ReadInvalidFile | PlainMessage<_ReadInvalidFile> | undefined | null): boolean {
    return proto3.util.equals(_ReadInvalidFile as unknown as MessageType<_ReadInvalidFile>, a, b2);
  }
})();
export type ReadInvalidFile = InstanceType<typeof ReadInvalidFile$Runtime>;
var ReadInvalidFile: MessageType<ReadInvalidFile> = ReadInvalidFile$Runtime as unknown as MessageType<ReadInvalidFile>;
(ReadInvalidFile as MutableMessageType<ReadInvalidFile>).runtime = proto3;
(ReadInvalidFile as MutableMessageType<ReadInvalidFile>).typeName = "agent.v1.ReadInvalidFile";
(ReadInvalidFile as MutableMessageType<ReadInvalidFile>).fields = proto3.util.newFieldList(() => [
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


export { ReadArgs, ReadResult, ReadSuccess, ReadError, ReadRejected, ReadFileNotFound, ReadPermissionDenied, ReadInvalidFile };
