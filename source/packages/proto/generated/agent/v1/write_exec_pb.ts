/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:62311-62625
 * Region SHA-256: 38b35b0caa540312cc5c9b2349419ebe0ff745e24c0dd17036b3003cc823995f
 * B11 exports: 7 messages + 0 enums + 0 services = 7
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var WriteArgs$Runtime = (() => class _WriteArgs extends Message<_WriteArgs> {
  declare path: string;
  declare fileText: string;
  declare toolCallId: string;
  declare returnFileContentAfterWrite: boolean;
  declare fileBytes: Uint8Array;
  declare encodingHint?: string;
  constructor(data?: PartialMessage<_WriteArgs>) {
    super();
    this.path = "";
    this.fileText = "";
    this.toolCallId = "";
    this.returnFileContentAfterWrite = false;
    this.fileBytes = new Uint8Array(0);
    proto3.util.initPartial(data, this as _WriteArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteArgs {
    return new _WriteArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteArgs {
    return new _WriteArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteArgs {
    return new _WriteArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteArgs | PlainMessage<_WriteArgs> | undefined | null, b2: _WriteArgs | PlainMessage<_WriteArgs> | undefined | null): boolean {
    return proto3.util.equals(_WriteArgs as unknown as MessageType<_WriteArgs>, a, b2);
  }
})();
export type WriteArgs = InstanceType<typeof WriteArgs$Runtime>;
var WriteArgs: MessageType<WriteArgs> = WriteArgs$Runtime as unknown as MessageType<WriteArgs>;
(WriteArgs as MutableMessageType<WriteArgs>).runtime = proto3;
(WriteArgs as MutableMessageType<WriteArgs>).typeName = "agent.v1.WriteArgs";
(WriteArgs as MutableMessageType<WriteArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "return_file_content_after_write",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "file_bytes",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 6, name: "encoding_hint", kind: "scalar", T: 9, opt: true }
]);
var WriteResult$Runtime = (() => class _WriteResult extends Message<_WriteResult> {
  declare result: { case: "success"; value: WriteSuccess } | { case: "permissionDenied"; value: WritePermissionDenied } | { case: "noSpace"; value: WriteNoSpace } | { case: "error"; value: WriteError } | { case: "rejected"; value: WriteRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_WriteResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _WriteResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteResult {
    return new _WriteResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteResult {
    return new _WriteResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteResult {
    return new _WriteResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteResult | PlainMessage<_WriteResult> | undefined | null, b2: _WriteResult | PlainMessage<_WriteResult> | undefined | null): boolean {
    return proto3.util.equals(_WriteResult as unknown as MessageType<_WriteResult>, a, b2);
  }
})();
export type WriteResult = InstanceType<typeof WriteResult$Runtime>;
var WriteResult: MessageType<WriteResult> = WriteResult$Runtime as unknown as MessageType<WriteResult>;
(WriteResult as MutableMessageType<WriteResult>).runtime = proto3;
(WriteResult as MutableMessageType<WriteResult>).typeName = "agent.v1.WriteResult";
(WriteResult as MutableMessageType<WriteResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: WriteSuccess, oneof: "result" },
  { no: 3, name: "permission_denied", kind: "message", T: WritePermissionDenied, oneof: "result" },
  { no: 4, name: "no_space", kind: "message", T: WriteNoSpace, oneof: "result" },
  { no: 5, name: "error", kind: "message", T: WriteError, oneof: "result" },
  { no: 6, name: "rejected", kind: "message", T: WriteRejected, oneof: "result" }
]);
var WriteSuccess$Runtime = (() => class _WriteSuccess extends Message<_WriteSuccess> {
  declare path: string;
  declare linesCreated: number;
  declare fileSize: number;
  declare fileContentAfterWrite?: string;
  constructor(data?: PartialMessage<_WriteSuccess>) {
    super();
    this.path = "";
    this.linesCreated = 0;
    this.fileSize = 0;
    proto3.util.initPartial(data, this as _WriteSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteSuccess {
    return new _WriteSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteSuccess {
    return new _WriteSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteSuccess {
    return new _WriteSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteSuccess | PlainMessage<_WriteSuccess> | undefined | null, b2: _WriteSuccess | PlainMessage<_WriteSuccess> | undefined | null): boolean {
    return proto3.util.equals(_WriteSuccess as unknown as MessageType<_WriteSuccess>, a, b2);
  }
})();
export type WriteSuccess = InstanceType<typeof WriteSuccess$Runtime>;
var WriteSuccess: MessageType<WriteSuccess> = WriteSuccess$Runtime as unknown as MessageType<WriteSuccess>;
(WriteSuccess as MutableMessageType<WriteSuccess>).runtime = proto3;
(WriteSuccess as MutableMessageType<WriteSuccess>).typeName = "agent.v1.WriteSuccess";
(WriteSuccess as MutableMessageType<WriteSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "lines_created",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "file_size",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "file_content_after_write", kind: "scalar", T: 9, opt: true }
]);
var WritePermissionDenied$Runtime = (() => class _WritePermissionDenied extends Message<_WritePermissionDenied> {
  declare path: string;
  declare directory: string;
  declare operation: string;
  declare error: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_WritePermissionDenied>) {
    super();
    this.path = "";
    this.directory = "";
    this.operation = "";
    this.error = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _WritePermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WritePermissionDenied {
    return new _WritePermissionDenied().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WritePermissionDenied {
    return new _WritePermissionDenied().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WritePermissionDenied {
    return new _WritePermissionDenied().fromJsonString(jsonString, options2);
  }
  static equals(a: _WritePermissionDenied | PlainMessage<_WritePermissionDenied> | undefined | null, b2: _WritePermissionDenied | PlainMessage<_WritePermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_WritePermissionDenied as unknown as MessageType<_WritePermissionDenied>, a, b2);
  }
})();
export type WritePermissionDenied = InstanceType<typeof WritePermissionDenied$Runtime>;
var WritePermissionDenied: MessageType<WritePermissionDenied> = WritePermissionDenied$Runtime as unknown as MessageType<WritePermissionDenied>;
(WritePermissionDenied as MutableMessageType<WritePermissionDenied>).runtime = proto3;
(WritePermissionDenied as MutableMessageType<WritePermissionDenied>).typeName = "agent.v1.WritePermissionDenied";
(WritePermissionDenied as MutableMessageType<WritePermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "operation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var WriteNoSpace$Runtime = (() => class _WriteNoSpace extends Message<_WriteNoSpace> {
  declare path: string;
  constructor(data?: PartialMessage<_WriteNoSpace>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _WriteNoSpace);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteNoSpace {
    return new _WriteNoSpace().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteNoSpace {
    return new _WriteNoSpace().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteNoSpace {
    return new _WriteNoSpace().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteNoSpace | PlainMessage<_WriteNoSpace> | undefined | null, b2: _WriteNoSpace | PlainMessage<_WriteNoSpace> | undefined | null): boolean {
    return proto3.util.equals(_WriteNoSpace as unknown as MessageType<_WriteNoSpace>, a, b2);
  }
})();
export type WriteNoSpace = InstanceType<typeof WriteNoSpace$Runtime>;
var WriteNoSpace: MessageType<WriteNoSpace> = WriteNoSpace$Runtime as unknown as MessageType<WriteNoSpace>;
(WriteNoSpace as MutableMessageType<WriteNoSpace>).runtime = proto3;
(WriteNoSpace as MutableMessageType<WriteNoSpace>).typeName = "agent.v1.WriteNoSpace";
(WriteNoSpace as MutableMessageType<WriteNoSpace>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WriteError$Runtime = (() => class _WriteError extends Message<_WriteError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_WriteError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _WriteError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteError {
    return new _WriteError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteError {
    return new _WriteError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteError {
    return new _WriteError().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteError | PlainMessage<_WriteError> | undefined | null, b2: _WriteError | PlainMessage<_WriteError> | undefined | null): boolean {
    return proto3.util.equals(_WriteError as unknown as MessageType<_WriteError>, a, b2);
  }
})();
export type WriteError = InstanceType<typeof WriteError$Runtime>;
var WriteError: MessageType<WriteError> = WriteError$Runtime as unknown as MessageType<WriteError>;
(WriteError as MutableMessageType<WriteError>).runtime = proto3;
(WriteError as MutableMessageType<WriteError>).typeName = "agent.v1.WriteError";
(WriteError as MutableMessageType<WriteError>).fields = proto3.util.newFieldList(() => [
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
var WriteRejected$Runtime = (() => class _WriteRejected extends Message<_WriteRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_WriteRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _WriteRejected);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WriteRejected {
    return new _WriteRejected().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WriteRejected {
    return new _WriteRejected().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WriteRejected {
    return new _WriteRejected().fromJsonString(jsonString, options2);
  }
  static equals(a: _WriteRejected | PlainMessage<_WriteRejected> | undefined | null, b2: _WriteRejected | PlainMessage<_WriteRejected> | undefined | null): boolean {
    return proto3.util.equals(_WriteRejected as unknown as MessageType<_WriteRejected>, a, b2);
  }
})();
export type WriteRejected = InstanceType<typeof WriteRejected$Runtime>;
var WriteRejected: MessageType<WriteRejected> = WriteRejected$Runtime as unknown as MessageType<WriteRejected>;
(WriteRejected as MutableMessageType<WriteRejected>).runtime = proto3;
(WriteRejected as MutableMessageType<WriteRejected>).typeName = "agent.v1.WriteRejected";
(WriteRejected as MutableMessageType<WriteRejected>).fields = proto3.util.newFieldList(() => [
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


export { WriteArgs, WriteResult, WriteSuccess, WritePermissionDenied, WriteNoSpace, WriteError, WriteRejected };
