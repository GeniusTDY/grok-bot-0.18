/**
 * Complete generated Grok Bot 0.18 B8 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:65807-66028
 * Region SHA-256: b7bf344547ee50f4fd3868f90341f25e1262965299b0b415f4ddaf9fa9cbdc47
 * B8 exports: 7 messages + 0 enums + 0 services = 7
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { SpanContext as SpanContext2 } from "./exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var Error$Runtime = (() => class _Error extends Message<_Error> {
  declare message: string;
  constructor(data?: PartialMessage<_Error>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _Error);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Error {
    return new _Error().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Error {
    return new _Error().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Error {
    return new _Error().fromJsonString(jsonString, options2);
  }
  static equals(a: _Error | PlainMessage<_Error> | undefined | null, b2: _Error | PlainMessage<_Error> | undefined | null): boolean {
    return proto3.util.equals(_Error as unknown as MessageType<_Error>, a, b2);
  }
})();
export type Error = InstanceType<typeof Error$Runtime>;
var Error: MessageType<Error> = Error$Runtime as unknown as MessageType<Error>;
(Error as MutableMessageType<Error>).runtime = proto3;
(Error as MutableMessageType<Error>).typeName = "agent.v1.Error";
(Error as MutableMessageType<Error>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetBlobArgs$Runtime = (() => class _GetBlobArgs extends Message<_GetBlobArgs> {
  declare blobId: Uint8Array;
  constructor(data?: PartialMessage<_GetBlobArgs>) {
    super();
    this.blobId = new Uint8Array(0);
    proto3.util.initPartial(data, this as _GetBlobArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetBlobArgs {
    return new _GetBlobArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetBlobArgs {
    return new _GetBlobArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetBlobArgs {
    return new _GetBlobArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetBlobArgs | PlainMessage<_GetBlobArgs> | undefined | null, b2: _GetBlobArgs | PlainMessage<_GetBlobArgs> | undefined | null): boolean {
    return proto3.util.equals(_GetBlobArgs as unknown as MessageType<_GetBlobArgs>, a, b2);
  }
})();
export type GetBlobArgs = InstanceType<typeof GetBlobArgs$Runtime>;
var GetBlobArgs: MessageType<GetBlobArgs> = GetBlobArgs$Runtime as unknown as MessageType<GetBlobArgs>;
(GetBlobArgs as MutableMessageType<GetBlobArgs>).runtime = proto3;
(GetBlobArgs as MutableMessageType<GetBlobArgs>).typeName = "agent.v1.GetBlobArgs";
(GetBlobArgs as MutableMessageType<GetBlobArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var GetBlobResult$Runtime = (() => class _GetBlobResult extends Message<_GetBlobResult> {
  declare blobData?: Uint8Array;
  declare error?: Error;
  constructor(data?: PartialMessage<_GetBlobResult>) {
    super();
    proto3.util.initPartial(data, this as _GetBlobResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetBlobResult {
    return new _GetBlobResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetBlobResult {
    return new _GetBlobResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetBlobResult {
    return new _GetBlobResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetBlobResult | PlainMessage<_GetBlobResult> | undefined | null, b2: _GetBlobResult | PlainMessage<_GetBlobResult> | undefined | null): boolean {
    return proto3.util.equals(_GetBlobResult as unknown as MessageType<_GetBlobResult>, a, b2);
  }
})();
export type GetBlobResult = InstanceType<typeof GetBlobResult$Runtime>;
var GetBlobResult: MessageType<GetBlobResult> = GetBlobResult$Runtime as unknown as MessageType<GetBlobResult>;
(GetBlobResult as MutableMessageType<GetBlobResult>).runtime = proto3;
(GetBlobResult as MutableMessageType<GetBlobResult>).typeName = "agent.v1.GetBlobResult";
(GetBlobResult as MutableMessageType<GetBlobResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_data", kind: "scalar", T: 12, opt: true },
  { no: 2, name: "error", kind: "message", T: Error, opt: true }
]);
var SetBlobArgs$Runtime = (() => class _SetBlobArgs extends Message<_SetBlobArgs> {
  declare blobId: Uint8Array;
  declare blobData: Uint8Array;
  constructor(data?: PartialMessage<_SetBlobArgs>) {
    super();
    this.blobId = new Uint8Array(0);
    this.blobData = new Uint8Array(0);
    proto3.util.initPartial(data, this as _SetBlobArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SetBlobArgs {
    return new _SetBlobArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SetBlobArgs {
    return new _SetBlobArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SetBlobArgs {
    return new _SetBlobArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _SetBlobArgs | PlainMessage<_SetBlobArgs> | undefined | null, b2: _SetBlobArgs | PlainMessage<_SetBlobArgs> | undefined | null): boolean {
    return proto3.util.equals(_SetBlobArgs as unknown as MessageType<_SetBlobArgs>, a, b2);
  }
})();
export type SetBlobArgs = InstanceType<typeof SetBlobArgs$Runtime>;
var SetBlobArgs: MessageType<SetBlobArgs> = SetBlobArgs$Runtime as unknown as MessageType<SetBlobArgs>;
(SetBlobArgs as MutableMessageType<SetBlobArgs>).runtime = proto3;
(SetBlobArgs as MutableMessageType<SetBlobArgs>).typeName = "agent.v1.SetBlobArgs";
(SetBlobArgs as MutableMessageType<SetBlobArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "blob_data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var SetBlobResult$Runtime = (() => class _SetBlobResult extends Message<_SetBlobResult> {
  declare error?: Error;
  constructor(data?: PartialMessage<_SetBlobResult>) {
    super();
    proto3.util.initPartial(data, this as _SetBlobResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SetBlobResult {
    return new _SetBlobResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SetBlobResult {
    return new _SetBlobResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SetBlobResult {
    return new _SetBlobResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _SetBlobResult | PlainMessage<_SetBlobResult> | undefined | null, b2: _SetBlobResult | PlainMessage<_SetBlobResult> | undefined | null): boolean {
    return proto3.util.equals(_SetBlobResult as unknown as MessageType<_SetBlobResult>, a, b2);
  }
})();
export type SetBlobResult = InstanceType<typeof SetBlobResult$Runtime>;
var SetBlobResult: MessageType<SetBlobResult> = SetBlobResult$Runtime as unknown as MessageType<SetBlobResult>;
(SetBlobResult as MutableMessageType<SetBlobResult>).runtime = proto3;
(SetBlobResult as MutableMessageType<SetBlobResult>).typeName = "agent.v1.SetBlobResult";
(SetBlobResult as MutableMessageType<SetBlobResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "message", T: Error, opt: true }
]);
var KvServerMessage$Runtime = (() => class _KvServerMessage extends Message<_KvServerMessage> {
  declare id: number;
  declare spanContext?: SpanContext2;
  declare message: { case: "getBlobArgs"; value: GetBlobArgs } | { case: "setBlobArgs"; value: SetBlobArgs } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_KvServerMessage>) {
    super();
    this.id = 0;
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _KvServerMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _KvServerMessage {
    return new _KvServerMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _KvServerMessage {
    return new _KvServerMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _KvServerMessage {
    return new _KvServerMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _KvServerMessage | PlainMessage<_KvServerMessage> | undefined | null, b2: _KvServerMessage | PlainMessage<_KvServerMessage> | undefined | null): boolean {
    return proto3.util.equals(_KvServerMessage as unknown as MessageType<_KvServerMessage>, a, b2);
  }
})();
export type KvServerMessage = InstanceType<typeof KvServerMessage$Runtime>;
var KvServerMessage: MessageType<KvServerMessage> = KvServerMessage$Runtime as unknown as MessageType<KvServerMessage>;
(KvServerMessage as MutableMessageType<KvServerMessage>).runtime = proto3;
(KvServerMessage as MutableMessageType<KvServerMessage>).typeName = "agent.v1.KvServerMessage";
(KvServerMessage as MutableMessageType<KvServerMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "get_blob_args", kind: "message", T: GetBlobArgs, oneof: "message" },
  { no: 3, name: "set_blob_args", kind: "message", T: SetBlobArgs, oneof: "message" },
  { no: 4, name: "span_context", kind: "message", T: SpanContext2, opt: true }
]);
var KvClientMessage$Runtime = (() => class _KvClientMessage extends Message<_KvClientMessage> {
  declare id: number;
  declare message: { case: "getBlobResult"; value: GetBlobResult } | { case: "setBlobResult"; value: SetBlobResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_KvClientMessage>) {
    super();
    this.id = 0;
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _KvClientMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _KvClientMessage {
    return new _KvClientMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _KvClientMessage {
    return new _KvClientMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _KvClientMessage {
    return new _KvClientMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _KvClientMessage | PlainMessage<_KvClientMessage> | undefined | null, b2: _KvClientMessage | PlainMessage<_KvClientMessage> | undefined | null): boolean {
    return proto3.util.equals(_KvClientMessage as unknown as MessageType<_KvClientMessage>, a, b2);
  }
})();
export type KvClientMessage = InstanceType<typeof KvClientMessage$Runtime>;
var KvClientMessage: MessageType<KvClientMessage> = KvClientMessage$Runtime as unknown as MessageType<KvClientMessage>;
(KvClientMessage as MutableMessageType<KvClientMessage>).runtime = proto3;
(KvClientMessage as MutableMessageType<KvClientMessage>).typeName = "agent.v1.KvClientMessage";
(KvClientMessage as MutableMessageType<KvClientMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "get_blob_result", kind: "message", T: GetBlobResult, oneof: "message" },
  { no: 3, name: "set_blob_result", kind: "message", T: SetBlobResult, oneof: "message" }
]);


export { Error, GetBlobArgs, GetBlobResult, SetBlobArgs, SetBlobResult, KvServerMessage, KvClientMessage };
