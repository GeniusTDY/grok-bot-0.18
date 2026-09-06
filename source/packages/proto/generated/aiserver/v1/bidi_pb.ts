/**
 * Complete generated Grok Bot 0.18 B8 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:366088-366257
 * Region SHA-256: 66cc785f5856f439dd42ffb776c611d4f0f41f868b9fa77e6b28866a170b253e
 * B8 exports: 5 messages + 0 enums + 0 services = 5
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var BidiRequestId$Runtime = (() => class _BidiRequestId extends Message<_BidiRequestId> {
  declare requestId: string;
  constructor(data?: PartialMessage<_BidiRequestId>) {
    super();
    this.requestId = "";
    proto3.util.initPartial(data, this as _BidiRequestId);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BidiRequestId {
    return new _BidiRequestId().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BidiRequestId {
    return new _BidiRequestId().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BidiRequestId {
    return new _BidiRequestId().fromJsonString(jsonString, options2);
  }
  static equals(a: _BidiRequestId | PlainMessage<_BidiRequestId> | undefined | null, b2: _BidiRequestId | PlainMessage<_BidiRequestId> | undefined | null): boolean {
    return proto3.util.equals(_BidiRequestId as unknown as MessageType<_BidiRequestId>, a, b2);
  }
})();
export type BidiRequestId = InstanceType<typeof BidiRequestId$Runtime>;
var BidiRequestId: MessageType<BidiRequestId> = BidiRequestId$Runtime as unknown as MessageType<BidiRequestId>;
(BidiRequestId as MutableMessageType<BidiRequestId>).runtime = proto3;
(BidiRequestId as MutableMessageType<BidiRequestId>).typeName = "aiserver.v1.BidiRequestId";
(BidiRequestId as MutableMessageType<BidiRequestId>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BidiAppendRequest$Runtime = (() => class _BidiAppendRequest extends Message<_BidiAppendRequest> {
  declare data: string;
  declare requestId?: BidiRequestId;
  declare appendSeqno: bigint;
  declare dataBinary: Uint8Array;
  constructor(data?: PartialMessage<_BidiAppendRequest>) {
    super();
    this.data = "";
    this.appendSeqno = protoInt64.zero;
    this.dataBinary = new Uint8Array(0);
    proto3.util.initPartial(data, this as _BidiAppendRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BidiAppendRequest {
    return new _BidiAppendRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BidiAppendRequest {
    return new _BidiAppendRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BidiAppendRequest {
    return new _BidiAppendRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BidiAppendRequest | PlainMessage<_BidiAppendRequest> | undefined | null, b2: _BidiAppendRequest | PlainMessage<_BidiAppendRequest> | undefined | null): boolean {
    return proto3.util.equals(_BidiAppendRequest as unknown as MessageType<_BidiAppendRequest>, a, b2);
  }
})();
export type BidiAppendRequest = InstanceType<typeof BidiAppendRequest$Runtime>;
var BidiAppendRequest: MessageType<BidiAppendRequest> = BidiAppendRequest$Runtime as unknown as MessageType<BidiAppendRequest>;
(BidiAppendRequest as MutableMessageType<BidiAppendRequest>).runtime = proto3;
(BidiAppendRequest as MutableMessageType<BidiAppendRequest>).typeName = "aiserver.v1.BidiAppendRequest";
(BidiAppendRequest as MutableMessageType<BidiAppendRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "request_id", kind: "message", T: BidiRequestId },
  {
    no: 3,
    name: "append_seqno",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "data_binary",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var BidiAppendResponse$Runtime = (() => class _BidiAppendResponse extends Message<_BidiAppendResponse> {
  constructor(data?: PartialMessage<_BidiAppendResponse>) {
    super();
    proto3.util.initPartial(data, this as _BidiAppendResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BidiAppendResponse {
    return new _BidiAppendResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BidiAppendResponse {
    return new _BidiAppendResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BidiAppendResponse {
    return new _BidiAppendResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BidiAppendResponse | PlainMessage<_BidiAppendResponse> | undefined | null, b2: _BidiAppendResponse | PlainMessage<_BidiAppendResponse> | undefined | null): boolean {
    return proto3.util.equals(_BidiAppendResponse as unknown as MessageType<_BidiAppendResponse>, a, b2);
  }
})();
export type BidiAppendResponse = InstanceType<typeof BidiAppendResponse$Runtime>;
var BidiAppendResponse: MessageType<BidiAppendResponse> = BidiAppendResponse$Runtime as unknown as MessageType<BidiAppendResponse>;
(BidiAppendResponse as MutableMessageType<BidiAppendResponse>).runtime = proto3;
(BidiAppendResponse as MutableMessageType<BidiAppendResponse>).typeName = "aiserver.v1.BidiAppendResponse";
(BidiAppendResponse as MutableMessageType<BidiAppendResponse>).fields = proto3.util.newFieldList(() => []);
var BidiPollRequest$Runtime = (() => class _BidiPollRequest extends Message<_BidiPollRequest> {
  declare requestId?: BidiRequestId;
  declare startRequest?: boolean;
  constructor(data?: PartialMessage<_BidiPollRequest>) {
    super();
    proto3.util.initPartial(data, this as _BidiPollRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BidiPollRequest {
    return new _BidiPollRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BidiPollRequest {
    return new _BidiPollRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BidiPollRequest {
    return new _BidiPollRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BidiPollRequest | PlainMessage<_BidiPollRequest> | undefined | null, b2: _BidiPollRequest | PlainMessage<_BidiPollRequest> | undefined | null): boolean {
    return proto3.util.equals(_BidiPollRequest as unknown as MessageType<_BidiPollRequest>, a, b2);
  }
})();
export type BidiPollRequest = InstanceType<typeof BidiPollRequest$Runtime>;
var BidiPollRequest: MessageType<BidiPollRequest> = BidiPollRequest$Runtime as unknown as MessageType<BidiPollRequest>;
(BidiPollRequest as MutableMessageType<BidiPollRequest>).runtime = proto3;
(BidiPollRequest as MutableMessageType<BidiPollRequest>).typeName = "aiserver.v1.BidiPollRequest";
(BidiPollRequest as MutableMessageType<BidiPollRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request_id", kind: "message", T: BidiRequestId },
  { no: 2, name: "start_request", kind: "scalar", T: 8, opt: true }
]);
var BidiPollResponse$Runtime = (() => class _BidiPollResponse extends Message<_BidiPollResponse> {
  declare seqno: bigint;
  declare data: string;
  declare eof?: boolean;
  constructor(data?: PartialMessage<_BidiPollResponse>) {
    super();
    this.seqno = protoInt64.zero;
    this.data = "";
    proto3.util.initPartial(data, this as _BidiPollResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BidiPollResponse {
    return new _BidiPollResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BidiPollResponse {
    return new _BidiPollResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BidiPollResponse {
    return new _BidiPollResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BidiPollResponse | PlainMessage<_BidiPollResponse> | undefined | null, b2: _BidiPollResponse | PlainMessage<_BidiPollResponse> | undefined | null): boolean {
    return proto3.util.equals(_BidiPollResponse as unknown as MessageType<_BidiPollResponse>, a, b2);
  }
})();
export type BidiPollResponse = InstanceType<typeof BidiPollResponse$Runtime>;
var BidiPollResponse: MessageType<BidiPollResponse> = BidiPollResponse$Runtime as unknown as MessageType<BidiPollResponse>;
(BidiPollResponse as MutableMessageType<BidiPollResponse>).runtime = proto3;
(BidiPollResponse as MutableMessageType<BidiPollResponse>).typeName = "aiserver.v1.BidiPollResponse";
(BidiPollResponse as MutableMessageType<BidiPollResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "seqno",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "eof", kind: "scalar", T: 8, opt: true }
]);


export { BidiRequestId, BidiAppendRequest, BidiAppendResponse, BidiPollRequest, BidiPollResponse };
