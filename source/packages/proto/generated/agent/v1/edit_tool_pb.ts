/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:22453-22801
 * Region SHA-256: 2f374b9436ff35aef194dbf11205afb1cf3f0d8168c6b817616d4c4add234271
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var EditArgs$Runtime = (() => class _EditArgs extends Message<_EditArgs> {
  declare path: string;
  declare streamContent?: string;
  constructor(data?: PartialMessage<_EditArgs>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _EditArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditArgs {
    return new _EditArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditArgs {
    return new _EditArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditArgs {
    return new _EditArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _EditArgs | PlainMessage<_EditArgs> | undefined | null, b2: _EditArgs | PlainMessage<_EditArgs> | undefined | null): boolean {
    return proto3.util.equals(_EditArgs as unknown as MessageType<_EditArgs>, a, b2);
  }
})();
export type EditArgs = InstanceType<typeof EditArgs$Runtime>;
var EditArgs: MessageType<EditArgs> = EditArgs$Runtime as unknown as MessageType<EditArgs>;
(EditArgs as MutableMessageType<EditArgs>).runtime = proto3;
(EditArgs as MutableMessageType<EditArgs>).typeName = "agent.v1.EditArgs";
(EditArgs as MutableMessageType<EditArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "stream_content", kind: "scalar", T: 9, opt: true }
]);
var EditResult$Runtime = (() => class _EditResult extends Message<_EditResult> {
  declare result: { case: "success"; value: EditSuccess } | { case: "fileNotFound"; value: EditFileNotFound } | { case: "readPermissionDenied"; value: EditReadPermissionDenied } | { case: "writePermissionDenied"; value: EditWritePermissionDenied } | { case: "rejected"; value: EditRejected } | { case: "error"; value: EditError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_EditResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _EditResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditResult {
    return new _EditResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditResult {
    return new _EditResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditResult {
    return new _EditResult().fromJsonString(jsonString, options);
  }
  static equals(a: _EditResult | PlainMessage<_EditResult> | undefined | null, b2: _EditResult | PlainMessage<_EditResult> | undefined | null): boolean {
    return proto3.util.equals(_EditResult as unknown as MessageType<_EditResult>, a, b2);
  }
})();
export type EditResult = InstanceType<typeof EditResult$Runtime>;
var EditResult: MessageType<EditResult> = EditResult$Runtime as unknown as MessageType<EditResult>;
(EditResult as MutableMessageType<EditResult>).runtime = proto3;
(EditResult as MutableMessageType<EditResult>).typeName = "agent.v1.EditResult";
(EditResult as MutableMessageType<EditResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: EditSuccess, oneof: "result" },
  { no: 2, name: "file_not_found", kind: "message", T: EditFileNotFound, oneof: "result" },
  { no: 3, name: "read_permission_denied", kind: "message", T: EditReadPermissionDenied, oneof: "result" },
  { no: 4, name: "write_permission_denied", kind: "message", T: EditWritePermissionDenied, oneof: "result" },
  { no: 6, name: "rejected", kind: "message", T: EditRejected, oneof: "result" },
  { no: 7, name: "error", kind: "message", T: EditError, oneof: "result" }
]);
var EditSuccess$Runtime = (() => class _EditSuccess extends Message<_EditSuccess> {
  declare path: string;
  declare linesAdded?: number;
  declare linesRemoved?: number;
  declare diffString?: string;
  declare beforeFullFileContent?: string;
  declare afterFullFileContent: string;
  declare message?: string;
  constructor(data?: PartialMessage<_EditSuccess>) {
    super();
    this.path = "";
    this.afterFullFileContent = "";
    proto3.util.initPartial(data, this as _EditSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditSuccess {
    return new _EditSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditSuccess {
    return new _EditSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditSuccess {
    return new _EditSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _EditSuccess | PlainMessage<_EditSuccess> | undefined | null, b2: _EditSuccess | PlainMessage<_EditSuccess> | undefined | null): boolean {
    return proto3.util.equals(_EditSuccess as unknown as MessageType<_EditSuccess>, a, b2);
  }
})();
export type EditSuccess = InstanceType<typeof EditSuccess$Runtime>;
var EditSuccess: MessageType<EditSuccess> = EditSuccess$Runtime as unknown as MessageType<EditSuccess>;
(EditSuccess as MutableMessageType<EditSuccess>).runtime = proto3;
(EditSuccess as MutableMessageType<EditSuccess>).typeName = "agent.v1.EditSuccess";
(EditSuccess as MutableMessageType<EditSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "lines_added", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "lines_removed", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "diff_string", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "before_full_file_content", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "after_full_file_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "message", kind: "scalar", T: 9, opt: true }
]);
var EditFileNotFound$Runtime = (() => class _EditFileNotFound extends Message<_EditFileNotFound> {
  declare path: string;
  constructor(data?: PartialMessage<_EditFileNotFound>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _EditFileNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileNotFound {
    return new _EditFileNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileNotFound {
    return new _EditFileNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileNotFound {
    return new _EditFileNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileNotFound | PlainMessage<_EditFileNotFound> | undefined | null, b2: _EditFileNotFound | PlainMessage<_EditFileNotFound> | undefined | null): boolean {
    return proto3.util.equals(_EditFileNotFound as unknown as MessageType<_EditFileNotFound>, a, b2);
  }
})();
export type EditFileNotFound = InstanceType<typeof EditFileNotFound$Runtime>;
var EditFileNotFound: MessageType<EditFileNotFound> = EditFileNotFound$Runtime as unknown as MessageType<EditFileNotFound>;
(EditFileNotFound as MutableMessageType<EditFileNotFound>).runtime = proto3;
(EditFileNotFound as MutableMessageType<EditFileNotFound>).typeName = "agent.v1.EditFileNotFound";
(EditFileNotFound as MutableMessageType<EditFileNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditReadPermissionDenied$Runtime = (() => class _EditReadPermissionDenied extends Message<_EditReadPermissionDenied> {
  declare path: string;
  constructor(data?: PartialMessage<_EditReadPermissionDenied>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _EditReadPermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditReadPermissionDenied {
    return new _EditReadPermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditReadPermissionDenied {
    return new _EditReadPermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditReadPermissionDenied {
    return new _EditReadPermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _EditReadPermissionDenied | PlainMessage<_EditReadPermissionDenied> | undefined | null, b2: _EditReadPermissionDenied | PlainMessage<_EditReadPermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_EditReadPermissionDenied as unknown as MessageType<_EditReadPermissionDenied>, a, b2);
  }
})();
export type EditReadPermissionDenied = InstanceType<typeof EditReadPermissionDenied$Runtime>;
var EditReadPermissionDenied: MessageType<EditReadPermissionDenied> = EditReadPermissionDenied$Runtime as unknown as MessageType<EditReadPermissionDenied>;
(EditReadPermissionDenied as MutableMessageType<EditReadPermissionDenied>).runtime = proto3;
(EditReadPermissionDenied as MutableMessageType<EditReadPermissionDenied>).typeName = "agent.v1.EditReadPermissionDenied";
(EditReadPermissionDenied as MutableMessageType<EditReadPermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditWritePermissionDenied$Runtime = (() => class _EditWritePermissionDenied extends Message<_EditWritePermissionDenied> {
  declare path: string;
  declare error: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_EditWritePermissionDenied>) {
    super();
    this.path = "";
    this.error = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _EditWritePermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditWritePermissionDenied {
    return new _EditWritePermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditWritePermissionDenied {
    return new _EditWritePermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditWritePermissionDenied {
    return new _EditWritePermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _EditWritePermissionDenied | PlainMessage<_EditWritePermissionDenied> | undefined | null, b2: _EditWritePermissionDenied | PlainMessage<_EditWritePermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_EditWritePermissionDenied as unknown as MessageType<_EditWritePermissionDenied>, a, b2);
  }
})();
export type EditWritePermissionDenied = InstanceType<typeof EditWritePermissionDenied$Runtime>;
var EditWritePermissionDenied: MessageType<EditWritePermissionDenied> = EditWritePermissionDenied$Runtime as unknown as MessageType<EditWritePermissionDenied>;
(EditWritePermissionDenied as MutableMessageType<EditWritePermissionDenied>).runtime = proto3;
(EditWritePermissionDenied as MutableMessageType<EditWritePermissionDenied>).typeName = "agent.v1.EditWritePermissionDenied";
(EditWritePermissionDenied as MutableMessageType<EditWritePermissionDenied>).fields = proto3.util.newFieldList(() => [
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
  },
  {
    no: 3,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var EditRejected$Runtime = (() => class _EditRejected extends Message<_EditRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_EditRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _EditRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditRejected {
    return new _EditRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditRejected {
    return new _EditRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditRejected {
    return new _EditRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _EditRejected | PlainMessage<_EditRejected> | undefined | null, b2: _EditRejected | PlainMessage<_EditRejected> | undefined | null): boolean {
    return proto3.util.equals(_EditRejected as unknown as MessageType<_EditRejected>, a, b2);
  }
})();
export type EditRejected = InstanceType<typeof EditRejected$Runtime>;
var EditRejected: MessageType<EditRejected> = EditRejected$Runtime as unknown as MessageType<EditRejected>;
(EditRejected as MutableMessageType<EditRejected>).runtime = proto3;
(EditRejected as MutableMessageType<EditRejected>).typeName = "agent.v1.EditRejected";
(EditRejected as MutableMessageType<EditRejected>).fields = proto3.util.newFieldList(() => [
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
var EditError$Runtime = (() => class _EditError extends Message<_EditError> {
  declare path: string;
  declare error: string;
  declare modelVisibleError?: string;
  constructor(data?: PartialMessage<_EditError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _EditError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditError {
    return new _EditError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditError {
    return new _EditError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditError {
    return new _EditError().fromJsonString(jsonString, options);
  }
  static equals(a: _EditError | PlainMessage<_EditError> | undefined | null, b2: _EditError | PlainMessage<_EditError> | undefined | null): boolean {
    return proto3.util.equals(_EditError as unknown as MessageType<_EditError>, a, b2);
  }
})();
export type EditError = InstanceType<typeof EditError$Runtime>;
var EditError: MessageType<EditError> = EditError$Runtime as unknown as MessageType<EditError>;
(EditError as MutableMessageType<EditError>).runtime = proto3;
(EditError as MutableMessageType<EditError>).typeName = "agent.v1.EditError";
(EditError as MutableMessageType<EditError>).fields = proto3.util.newFieldList(() => [
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
  },
  { no: 5, name: "model_visible_error", kind: "scalar", T: 9, opt: true }
]);
var EditToolCall$Runtime = (() => class _EditToolCall extends Message<_EditToolCall> {
  declare args?: EditArgs;
  declare result?: EditResult;
  constructor(data?: PartialMessage<_EditToolCall>) {
    super();
    proto3.util.initPartial(data, this as _EditToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditToolCall {
    return new _EditToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditToolCall {
    return new _EditToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditToolCall {
    return new _EditToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _EditToolCall | PlainMessage<_EditToolCall> | undefined | null, b2: _EditToolCall | PlainMessage<_EditToolCall> | undefined | null): boolean {
    return proto3.util.equals(_EditToolCall as unknown as MessageType<_EditToolCall>, a, b2);
  }
})();
export type EditToolCall = InstanceType<typeof EditToolCall$Runtime>;
var EditToolCall: MessageType<EditToolCall> = EditToolCall$Runtime as unknown as MessageType<EditToolCall>;
(EditToolCall as MutableMessageType<EditToolCall>).runtime = proto3;
(EditToolCall as MutableMessageType<EditToolCall>).typeName = "agent.v1.EditToolCall";
(EditToolCall as MutableMessageType<EditToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: EditArgs },
  { no: 2, name: "result", kind: "message", T: EditResult }
]);
var EditToolCallDelta$Runtime = (() => class _EditToolCallDelta extends Message<_EditToolCallDelta> {
  declare streamContentDelta: string;
  constructor(data?: PartialMessage<_EditToolCallDelta>) {
    super();
    this.streamContentDelta = "";
    proto3.util.initPartial(data, this as _EditToolCallDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditToolCallDelta {
    return new _EditToolCallDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditToolCallDelta {
    return new _EditToolCallDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditToolCallDelta {
    return new _EditToolCallDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _EditToolCallDelta | PlainMessage<_EditToolCallDelta> | undefined | null, b2: _EditToolCallDelta | PlainMessage<_EditToolCallDelta> | undefined | null): boolean {
    return proto3.util.equals(_EditToolCallDelta as unknown as MessageType<_EditToolCallDelta>, a, b2);
  }
})();
export type EditToolCallDelta = InstanceType<typeof EditToolCallDelta$Runtime>;
var EditToolCallDelta: MessageType<EditToolCallDelta> = EditToolCallDelta$Runtime as unknown as MessageType<EditToolCallDelta>;
(EditToolCallDelta as MutableMessageType<EditToolCallDelta>).runtime = proto3;
(EditToolCallDelta as MutableMessageType<EditToolCallDelta>).typeName = "agent.v1.EditToolCallDelta";
(EditToolCallDelta as MutableMessageType<EditToolCallDelta>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stream_content_delta",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { EditArgs, EditResult, EditSuccess, EditFileNotFound, EditReadPermissionDenied, EditWritePermissionDenied, EditRejected, EditError, EditToolCall, EditToolCallDelta };
