/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:14774-15124
 * Region SHA-256: d099de75ff5da06111a3f1855a376bde29664caa9a69d71c18f71b0b0612d352
 * Atomic B1 exports: 9 messages + 0 enums = 9
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var DeleteArgs$Runtime = (() => class _DeleteArgs extends Message<_DeleteArgs> {
  declare path: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_DeleteArgs>) {
    super();
    this.path = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _DeleteArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteArgs {
    return new _DeleteArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteArgs {
    return new _DeleteArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteArgs {
    return new _DeleteArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteArgs | PlainMessage<_DeleteArgs> | undefined | null, b2: _DeleteArgs | PlainMessage<_DeleteArgs> | undefined | null): boolean {
    return proto3.util.equals(_DeleteArgs as unknown as MessageType<_DeleteArgs>, a, b2);
  }
})();
export type DeleteArgs = InstanceType<typeof DeleteArgs$Runtime>;
var DeleteArgs: MessageType<DeleteArgs> = DeleteArgs$Runtime as unknown as MessageType<DeleteArgs>;
(DeleteArgs as MutableMessageType<DeleteArgs>).runtime = proto3;
(DeleteArgs as MutableMessageType<DeleteArgs>).typeName = "agent.v1.DeleteArgs";
(DeleteArgs as MutableMessageType<DeleteArgs>).fields = proto3.util.newFieldList(() => [
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
var DeleteResult$Runtime = (() => class _DeleteResult extends Message<_DeleteResult> {
  declare result: { case: "success"; value: DeleteSuccess } | { case: "fileNotFound"; value: DeleteFileNotFound } | { case: "notFile"; value: DeleteNotFile } | { case: "permissionDenied"; value: DeletePermissionDenied } | { case: "fileBusy"; value: DeleteFileBusy } | { case: "rejected"; value: DeleteRejected } | { case: "error"; value: DeleteError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DeleteResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _DeleteResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteResult {
    return new _DeleteResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteResult {
    return new _DeleteResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteResult {
    return new _DeleteResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteResult | PlainMessage<_DeleteResult> | undefined | null, b2: _DeleteResult | PlainMessage<_DeleteResult> | undefined | null): boolean {
    return proto3.util.equals(_DeleteResult as unknown as MessageType<_DeleteResult>, a, b2);
  }
})();
export type DeleteResult = InstanceType<typeof DeleteResult$Runtime>;
var DeleteResult: MessageType<DeleteResult> = DeleteResult$Runtime as unknown as MessageType<DeleteResult>;
(DeleteResult as MutableMessageType<DeleteResult>).runtime = proto3;
(DeleteResult as MutableMessageType<DeleteResult>).typeName = "agent.v1.DeleteResult";
(DeleteResult as MutableMessageType<DeleteResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: DeleteSuccess, oneof: "result" },
  { no: 2, name: "file_not_found", kind: "message", T: DeleteFileNotFound, oneof: "result" },
  { no: 3, name: "not_file", kind: "message", T: DeleteNotFile, oneof: "result" },
  { no: 4, name: "permission_denied", kind: "message", T: DeletePermissionDenied, oneof: "result" },
  { no: 5, name: "file_busy", kind: "message", T: DeleteFileBusy, oneof: "result" },
  { no: 6, name: "rejected", kind: "message", T: DeleteRejected, oneof: "result" },
  { no: 7, name: "error", kind: "message", T: DeleteError, oneof: "result" }
]);
var DeleteSuccess$Runtime = (() => class _DeleteSuccess extends Message<_DeleteSuccess> {
  declare path: string;
  declare deletedFile: string;
  declare fileSize: bigint;
  declare prevContent: string;
  constructor(data?: PartialMessage<_DeleteSuccess>) {
    super();
    this.path = "";
    this.deletedFile = "";
    this.fileSize = protoInt64.zero;
    this.prevContent = "";
    proto3.util.initPartial(data, this as _DeleteSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteSuccess {
    return new _DeleteSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteSuccess {
    return new _DeleteSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteSuccess {
    return new _DeleteSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteSuccess | PlainMessage<_DeleteSuccess> | undefined | null, b2: _DeleteSuccess | PlainMessage<_DeleteSuccess> | undefined | null): boolean {
    return proto3.util.equals(_DeleteSuccess as unknown as MessageType<_DeleteSuccess>, a, b2);
  }
})();
export type DeleteSuccess = InstanceType<typeof DeleteSuccess$Runtime>;
var DeleteSuccess: MessageType<DeleteSuccess> = DeleteSuccess$Runtime as unknown as MessageType<DeleteSuccess>;
(DeleteSuccess as MutableMessageType<DeleteSuccess>).runtime = proto3;
(DeleteSuccess as MutableMessageType<DeleteSuccess>).typeName = "agent.v1.DeleteSuccess";
(DeleteSuccess as MutableMessageType<DeleteSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "deleted_file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "file_size",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "prev_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteFileNotFound$Runtime = (() => class _DeleteFileNotFound extends Message<_DeleteFileNotFound> {
  declare path: string;
  constructor(data?: PartialMessage<_DeleteFileNotFound>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _DeleteFileNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFileNotFound {
    return new _DeleteFileNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFileNotFound {
    return new _DeleteFileNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFileNotFound {
    return new _DeleteFileNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFileNotFound | PlainMessage<_DeleteFileNotFound> | undefined | null, b2: _DeleteFileNotFound | PlainMessage<_DeleteFileNotFound> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFileNotFound as unknown as MessageType<_DeleteFileNotFound>, a, b2);
  }
})();
export type DeleteFileNotFound = InstanceType<typeof DeleteFileNotFound$Runtime>;
var DeleteFileNotFound: MessageType<DeleteFileNotFound> = DeleteFileNotFound$Runtime as unknown as MessageType<DeleteFileNotFound>;
(DeleteFileNotFound as MutableMessageType<DeleteFileNotFound>).runtime = proto3;
(DeleteFileNotFound as MutableMessageType<DeleteFileNotFound>).typeName = "agent.v1.DeleteFileNotFound";
(DeleteFileNotFound as MutableMessageType<DeleteFileNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteNotFile$Runtime = (() => class _DeleteNotFile extends Message<_DeleteNotFile> {
  declare path: string;
  declare actualType: string;
  constructor(data?: PartialMessage<_DeleteNotFile>) {
    super();
    this.path = "";
    this.actualType = "";
    proto3.util.initPartial(data, this as _DeleteNotFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteNotFile {
    return new _DeleteNotFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteNotFile {
    return new _DeleteNotFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteNotFile {
    return new _DeleteNotFile().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteNotFile | PlainMessage<_DeleteNotFile> | undefined | null, b2: _DeleteNotFile | PlainMessage<_DeleteNotFile> | undefined | null): boolean {
    return proto3.util.equals(_DeleteNotFile as unknown as MessageType<_DeleteNotFile>, a, b2);
  }
})();
export type DeleteNotFile = InstanceType<typeof DeleteNotFile$Runtime>;
var DeleteNotFile: MessageType<DeleteNotFile> = DeleteNotFile$Runtime as unknown as MessageType<DeleteNotFile>;
(DeleteNotFile as MutableMessageType<DeleteNotFile>).runtime = proto3;
(DeleteNotFile as MutableMessageType<DeleteNotFile>).typeName = "agent.v1.DeleteNotFile";
(DeleteNotFile as MutableMessageType<DeleteNotFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "actual_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeletePermissionDenied$Runtime = (() => class _DeletePermissionDenied extends Message<_DeletePermissionDenied> {
  declare path: string;
  declare clientVisibleError: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_DeletePermissionDenied>) {
    super();
    this.path = "";
    this.clientVisibleError = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _DeletePermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeletePermissionDenied {
    return new _DeletePermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeletePermissionDenied {
    return new _DeletePermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeletePermissionDenied {
    return new _DeletePermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _DeletePermissionDenied | PlainMessage<_DeletePermissionDenied> | undefined | null, b2: _DeletePermissionDenied | PlainMessage<_DeletePermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_DeletePermissionDenied as unknown as MessageType<_DeletePermissionDenied>, a, b2);
  }
})();
export type DeletePermissionDenied = InstanceType<typeof DeletePermissionDenied$Runtime>;
var DeletePermissionDenied: MessageType<DeletePermissionDenied> = DeletePermissionDenied$Runtime as unknown as MessageType<DeletePermissionDenied>;
(DeletePermissionDenied as MutableMessageType<DeletePermissionDenied>).runtime = proto3;
(DeletePermissionDenied as MutableMessageType<DeletePermissionDenied>).typeName = "agent.v1.DeletePermissionDenied";
(DeletePermissionDenied as MutableMessageType<DeletePermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "client_visible_error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DeleteFileBusy$Runtime = (() => class _DeleteFileBusy extends Message<_DeleteFileBusy> {
  declare path: string;
  constructor(data?: PartialMessage<_DeleteFileBusy>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _DeleteFileBusy);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFileBusy {
    return new _DeleteFileBusy().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFileBusy {
    return new _DeleteFileBusy().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFileBusy {
    return new _DeleteFileBusy().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFileBusy | PlainMessage<_DeleteFileBusy> | undefined | null, b2: _DeleteFileBusy | PlainMessage<_DeleteFileBusy> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFileBusy as unknown as MessageType<_DeleteFileBusy>, a, b2);
  }
})();
export type DeleteFileBusy = InstanceType<typeof DeleteFileBusy$Runtime>;
var DeleteFileBusy: MessageType<DeleteFileBusy> = DeleteFileBusy$Runtime as unknown as MessageType<DeleteFileBusy>;
(DeleteFileBusy as MutableMessageType<DeleteFileBusy>).runtime = proto3;
(DeleteFileBusy as MutableMessageType<DeleteFileBusy>).typeName = "agent.v1.DeleteFileBusy";
(DeleteFileBusy as MutableMessageType<DeleteFileBusy>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteRejected$Runtime = (() => class _DeleteRejected extends Message<_DeleteRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_DeleteRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _DeleteRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteRejected {
    return new _DeleteRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteRejected {
    return new _DeleteRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteRejected {
    return new _DeleteRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteRejected | PlainMessage<_DeleteRejected> | undefined | null, b2: _DeleteRejected | PlainMessage<_DeleteRejected> | undefined | null): boolean {
    return proto3.util.equals(_DeleteRejected as unknown as MessageType<_DeleteRejected>, a, b2);
  }
})();
export type DeleteRejected = InstanceType<typeof DeleteRejected$Runtime>;
var DeleteRejected: MessageType<DeleteRejected> = DeleteRejected$Runtime as unknown as MessageType<DeleteRejected>;
(DeleteRejected as MutableMessageType<DeleteRejected>).runtime = proto3;
(DeleteRejected as MutableMessageType<DeleteRejected>).typeName = "agent.v1.DeleteRejected";
(DeleteRejected as MutableMessageType<DeleteRejected>).fields = proto3.util.newFieldList(() => [
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
var DeleteError$Runtime = (() => class _DeleteError extends Message<_DeleteError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_DeleteError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _DeleteError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteError {
    return new _DeleteError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteError {
    return new _DeleteError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteError {
    return new _DeleteError().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteError | PlainMessage<_DeleteError> | undefined | null, b2: _DeleteError | PlainMessage<_DeleteError> | undefined | null): boolean {
    return proto3.util.equals(_DeleteError as unknown as MessageType<_DeleteError>, a, b2);
  }
})();
export type DeleteError = InstanceType<typeof DeleteError$Runtime>;
var DeleteError: MessageType<DeleteError> = DeleteError$Runtime as unknown as MessageType<DeleteError>;
(DeleteError as MutableMessageType<DeleteError>).runtime = proto3;
(DeleteError as MutableMessageType<DeleteError>).typeName = "agent.v1.DeleteError";
(DeleteError as MutableMessageType<DeleteError>).fields = proto3.util.newFieldList(() => [
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


export { DeleteArgs, DeleteResult, DeleteSuccess, DeleteFileNotFound, DeleteNotFile, DeletePermissionDenied, DeleteFileBusy, DeleteRejected, DeleteError };
