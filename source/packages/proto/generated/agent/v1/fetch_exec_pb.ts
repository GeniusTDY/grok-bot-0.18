/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:20515-20678
 * Region SHA-256: 007619e28feba3dd4b264bd132bc08a6ef7037f1253bec5d4de0383ba367c770
 * Atomic B1 exports: 4 messages + 0 enums = 4
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var FetchArgs$Runtime = (() => class _FetchArgs extends Message<_FetchArgs> {
  declare url: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_FetchArgs>) {
    super();
    this.url = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _FetchArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchArgs {
    return new _FetchArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchArgs {
    return new _FetchArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchArgs {
    return new _FetchArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchArgs | PlainMessage<_FetchArgs> | undefined | null, b2: _FetchArgs | PlainMessage<_FetchArgs> | undefined | null): boolean {
    return proto3.util.equals(_FetchArgs as unknown as MessageType<_FetchArgs>, a, b2);
  }
})();
export type FetchArgs = InstanceType<typeof FetchArgs$Runtime>;
var FetchArgs: MessageType<FetchArgs> = FetchArgs$Runtime as unknown as MessageType<FetchArgs>;
(FetchArgs as MutableMessageType<FetchArgs>).runtime = proto3;
(FetchArgs as MutableMessageType<FetchArgs>).typeName = "agent.v1.FetchArgs";
(FetchArgs as MutableMessageType<FetchArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
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
var FetchResult$Runtime = (() => class _FetchResult extends Message<_FetchResult> {
  declare result: { case: "success"; value: FetchSuccess } | { case: "error"; value: FetchError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_FetchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _FetchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchResult {
    return new _FetchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchResult {
    return new _FetchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchResult {
    return new _FetchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchResult | PlainMessage<_FetchResult> | undefined | null, b2: _FetchResult | PlainMessage<_FetchResult> | undefined | null): boolean {
    return proto3.util.equals(_FetchResult as unknown as MessageType<_FetchResult>, a, b2);
  }
})();
export type FetchResult = InstanceType<typeof FetchResult$Runtime>;
var FetchResult: MessageType<FetchResult> = FetchResult$Runtime as unknown as MessageType<FetchResult>;
(FetchResult as MutableMessageType<FetchResult>).runtime = proto3;
(FetchResult as MutableMessageType<FetchResult>).typeName = "agent.v1.FetchResult";
(FetchResult as MutableMessageType<FetchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: FetchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: FetchError, oneof: "result" }
]);
var FetchSuccess$Runtime = (() => class _FetchSuccess extends Message<_FetchSuccess> {
  declare url: string;
  declare content: string;
  declare statusCode: number;
  declare contentType: string;
  constructor(data?: PartialMessage<_FetchSuccess>) {
    super();
    this.url = "";
    this.content = "";
    this.statusCode = 0;
    this.contentType = "";
    proto3.util.initPartial(data, this as _FetchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchSuccess {
    return new _FetchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchSuccess {
    return new _FetchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchSuccess {
    return new _FetchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchSuccess | PlainMessage<_FetchSuccess> | undefined | null, b2: _FetchSuccess | PlainMessage<_FetchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_FetchSuccess as unknown as MessageType<_FetchSuccess>, a, b2);
  }
})();
export type FetchSuccess = InstanceType<typeof FetchSuccess$Runtime>;
var FetchSuccess: MessageType<FetchSuccess> = FetchSuccess$Runtime as unknown as MessageType<FetchSuccess>;
(FetchSuccess as MutableMessageType<FetchSuccess>).runtime = proto3;
(FetchSuccess as MutableMessageType<FetchSuccess>).typeName = "agent.v1.FetchSuccess";
(FetchSuccess as MutableMessageType<FetchSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
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
    name: "status_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "content_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FetchError$Runtime = (() => class _FetchError extends Message<_FetchError> {
  declare url: string;
  declare error: string;
  constructor(data?: PartialMessage<_FetchError>) {
    super();
    this.url = "";
    this.error = "";
    proto3.util.initPartial(data, this as _FetchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchError {
    return new _FetchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchError {
    return new _FetchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchError {
    return new _FetchError().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchError | PlainMessage<_FetchError> | undefined | null, b2: _FetchError | PlainMessage<_FetchError> | undefined | null): boolean {
    return proto3.util.equals(_FetchError as unknown as MessageType<_FetchError>, a, b2);
  }
})();
export type FetchError = InstanceType<typeof FetchError$Runtime>;
var FetchError: MessageType<FetchError> = FetchError$Runtime as unknown as MessageType<FetchError>;
(FetchError as MutableMessageType<FetchError>).runtime = proto3;
(FetchError as MutableMessageType<FetchError>).typeName = "agent.v1.FetchError";
(FetchError as MutableMessageType<FetchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
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


export { FetchArgs, FetchResult, FetchSuccess, FetchError };
