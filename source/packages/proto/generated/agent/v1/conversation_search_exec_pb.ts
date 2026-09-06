/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:41210-41419
 * Region SHA-256: 06ad53130d1c0821ce54d3ae23ad0534d11c0f95b54da851ef1f305509c9103d
 * Atomic B1 exports: 5 messages + 1 enums = 6
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ConversationSearchSource = 0 | 1 | 2;
var ConversationSearchSource: {
  "UNSPECIFIED": 0;
  "LOCAL": 1;
  "CLOUD_CACHE": 2;
  0: "UNSPECIFIED";
  1: "LOCAL";
  2: "CLOUD_CACHE";
};
(function(ConversationSearchSource2) {
  ConversationSearchSource2[ConversationSearchSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ConversationSearchSource2[ConversationSearchSource2["LOCAL"] = 1] = "LOCAL";
  ConversationSearchSource2[ConversationSearchSource2["CLOUD_CACHE"] = 2] = "CLOUD_CACHE";
})(ConversationSearchSource! || (ConversationSearchSource = {} as typeof ConversationSearchSource));
proto3.util.setEnumType(ConversationSearchSource, "agent.v1.ConversationSearchSource", [
  { no: 0, name: "CONVERSATION_SEARCH_SOURCE_UNSPECIFIED" },
  { no: 1, name: "CONVERSATION_SEARCH_SOURCE_LOCAL" },
  { no: 2, name: "CONVERSATION_SEARCH_SOURCE_CLOUD_CACHE" }
]);
var ConversationSearchArgs$Runtime = (() => class _ConversationSearchArgs extends Message<_ConversationSearchArgs> {
  declare query: string;
  declare toolCallId: string;
  declare limit?: number;
  constructor(data?: PartialMessage<_ConversationSearchArgs>) {
    super();
    this.query = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ConversationSearchArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSearchArgs {
    return new _ConversationSearchArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSearchArgs {
    return new _ConversationSearchArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSearchArgs {
    return new _ConversationSearchArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSearchArgs | PlainMessage<_ConversationSearchArgs> | undefined | null, b2: _ConversationSearchArgs | PlainMessage<_ConversationSearchArgs> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSearchArgs as unknown as MessageType<_ConversationSearchArgs>, a, b2);
  }
})();
export type ConversationSearchArgs = InstanceType<typeof ConversationSearchArgs$Runtime>;
var ConversationSearchArgs: MessageType<ConversationSearchArgs> = ConversationSearchArgs$Runtime as unknown as MessageType<ConversationSearchArgs>;
(ConversationSearchArgs as MutableMessageType<ConversationSearchArgs>).runtime = proto3;
(ConversationSearchArgs as MutableMessageType<ConversationSearchArgs>).typeName = "agent.v1.ConversationSearchArgs";
(ConversationSearchArgs as MutableMessageType<ConversationSearchArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
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
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true }
]);
var ConversationSearchResult$Runtime = (() => class _ConversationSearchResult extends Message<_ConversationSearchResult> {
  declare result: { case: "success"; value: ConversationSearchSuccess } | { case: "error"; value: ConversationSearchError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationSearchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSearchResult {
    return new _ConversationSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSearchResult {
    return new _ConversationSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSearchResult {
    return new _ConversationSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSearchResult | PlainMessage<_ConversationSearchResult> | undefined | null, b2: _ConversationSearchResult | PlainMessage<_ConversationSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSearchResult as unknown as MessageType<_ConversationSearchResult>, a, b2);
  }
})();
export type ConversationSearchResult = InstanceType<typeof ConversationSearchResult$Runtime>;
var ConversationSearchResult: MessageType<ConversationSearchResult> = ConversationSearchResult$Runtime as unknown as MessageType<ConversationSearchResult>;
(ConversationSearchResult as MutableMessageType<ConversationSearchResult>).runtime = proto3;
(ConversationSearchResult as MutableMessageType<ConversationSearchResult>).typeName = "agent.v1.ConversationSearchResult";
(ConversationSearchResult as MutableMessageType<ConversationSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ConversationSearchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ConversationSearchError, oneof: "result" }
]);
var ConversationSearchSuccess$Runtime = (() => class _ConversationSearchSuccess extends Message<_ConversationSearchSuccess> {
  declare hits: ConversationSearchHit[];
  declare truncated: boolean;
  declare partial: boolean;
  declare rebuilding: boolean;
  constructor(data?: PartialMessage<_ConversationSearchSuccess>) {
    super();
    this.hits = [];
    this.truncated = false;
    this.partial = false;
    this.rebuilding = false;
    proto3.util.initPartial(data, this as _ConversationSearchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSearchSuccess {
    return new _ConversationSearchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSearchSuccess {
    return new _ConversationSearchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSearchSuccess {
    return new _ConversationSearchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSearchSuccess | PlainMessage<_ConversationSearchSuccess> | undefined | null, b2: _ConversationSearchSuccess | PlainMessage<_ConversationSearchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSearchSuccess as unknown as MessageType<_ConversationSearchSuccess>, a, b2);
  }
})();
export type ConversationSearchSuccess = InstanceType<typeof ConversationSearchSuccess$Runtime>;
var ConversationSearchSuccess: MessageType<ConversationSearchSuccess> = ConversationSearchSuccess$Runtime as unknown as MessageType<ConversationSearchSuccess>;
(ConversationSearchSuccess as MutableMessageType<ConversationSearchSuccess>).runtime = proto3;
(ConversationSearchSuccess as MutableMessageType<ConversationSearchSuccess>).typeName = "agent.v1.ConversationSearchSuccess";
(ConversationSearchSuccess as MutableMessageType<ConversationSearchSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "hits", kind: "message", T: ConversationSearchHit, repeated: true },
  {
    no: 2,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "partial",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "rebuilding",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ConversationSearchHit$Runtime = (() => class _ConversationSearchHit extends Message<_ConversationSearchHit> {
  declare conversationId: string;
  declare title: string;
  declare source: ConversationSearchSource;
  declare updatedAtMs: bigint;
  declare snippet?: string;
  constructor(data?: PartialMessage<_ConversationSearchHit>) {
    super();
    this.conversationId = "";
    this.title = "";
    this.source = ConversationSearchSource.UNSPECIFIED;
    this.updatedAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _ConversationSearchHit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSearchHit {
    return new _ConversationSearchHit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSearchHit {
    return new _ConversationSearchHit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSearchHit {
    return new _ConversationSearchHit().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSearchHit | PlainMessage<_ConversationSearchHit> | undefined | null, b2: _ConversationSearchHit | PlainMessage<_ConversationSearchHit> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSearchHit as unknown as MessageType<_ConversationSearchHit>, a, b2);
  }
})();
export type ConversationSearchHit = InstanceType<typeof ConversationSearchHit$Runtime>;
var ConversationSearchHit: MessageType<ConversationSearchHit> = ConversationSearchHit$Runtime as unknown as MessageType<ConversationSearchHit>;
(ConversationSearchHit as MutableMessageType<ConversationSearchHit>).runtime = proto3;
(ConversationSearchHit as MutableMessageType<ConversationSearchHit>).typeName = "agent.v1.ConversationSearchHit";
(ConversationSearchHit as MutableMessageType<ConversationSearchHit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "source", kind: "enum", T: proto3.getEnumType(ConversationSearchSource) },
  {
    no: 4,
    name: "updated_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 5, name: "snippet", kind: "scalar", T: 9, opt: true }
]);
var ConversationSearchError$Runtime = (() => class _ConversationSearchError extends Message<_ConversationSearchError> {
  declare error: string;
  constructor(data?: PartialMessage<_ConversationSearchError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ConversationSearchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSearchError {
    return new _ConversationSearchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSearchError {
    return new _ConversationSearchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSearchError {
    return new _ConversationSearchError().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSearchError | PlainMessage<_ConversationSearchError> | undefined | null, b2: _ConversationSearchError | PlainMessage<_ConversationSearchError> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSearchError as unknown as MessageType<_ConversationSearchError>, a, b2);
  }
})();
export type ConversationSearchError = InstanceType<typeof ConversationSearchError$Runtime>;
var ConversationSearchError: MessageType<ConversationSearchError> = ConversationSearchError$Runtime as unknown as MessageType<ConversationSearchError>;
(ConversationSearchError as MutableMessageType<ConversationSearchError>).runtime = proto3;
(ConversationSearchError as MutableMessageType<ConversationSearchError>).typeName = "agent.v1.ConversationSearchError";
(ConversationSearchError as MutableMessageType<ConversationSearchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ConversationSearchSource, ConversationSearchArgs, ConversationSearchResult, ConversationSearchSuccess, ConversationSearchHit, ConversationSearchError };
