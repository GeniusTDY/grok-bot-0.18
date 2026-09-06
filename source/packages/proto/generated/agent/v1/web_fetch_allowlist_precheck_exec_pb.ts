/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:63981-64050
 * Region SHA-256: 685ba63dd792465f9e77555b48e08c29d44305e3384ea81b945b21877e29bde0
 * B11 exports: 2 messages + 0 enums + 0 services = 2
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var WebFetchAllowlistPrecheckArgs$Runtime = (() => class _WebFetchAllowlistPrecheckArgs extends Message<_WebFetchAllowlistPrecheckArgs> {
  declare url: string;
  declare toolCallId?: string;
  constructor(data?: PartialMessage<_WebFetchAllowlistPrecheckArgs>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _WebFetchAllowlistPrecheckArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WebFetchAllowlistPrecheckArgs {
    return new _WebFetchAllowlistPrecheckArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WebFetchAllowlistPrecheckArgs {
    return new _WebFetchAllowlistPrecheckArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WebFetchAllowlistPrecheckArgs {
    return new _WebFetchAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _WebFetchAllowlistPrecheckArgs | PlainMessage<_WebFetchAllowlistPrecheckArgs> | undefined | null, b2: _WebFetchAllowlistPrecheckArgs | PlainMessage<_WebFetchAllowlistPrecheckArgs> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchAllowlistPrecheckArgs as unknown as MessageType<_WebFetchAllowlistPrecheckArgs>, a, b2);
  }
})();
export type WebFetchAllowlistPrecheckArgs = InstanceType<typeof WebFetchAllowlistPrecheckArgs$Runtime>;
var WebFetchAllowlistPrecheckArgs: MessageType<WebFetchAllowlistPrecheckArgs> = WebFetchAllowlistPrecheckArgs$Runtime as unknown as MessageType<WebFetchAllowlistPrecheckArgs>;
(WebFetchAllowlistPrecheckArgs as MutableMessageType<WebFetchAllowlistPrecheckArgs>).runtime = proto3;
(WebFetchAllowlistPrecheckArgs as MutableMessageType<WebFetchAllowlistPrecheckArgs>).typeName = "agent.v1.WebFetchAllowlistPrecheckArgs";
(WebFetchAllowlistPrecheckArgs as MutableMessageType<WebFetchAllowlistPrecheckArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_call_id", kind: "scalar", T: 9, opt: true }
]);
var WebFetchAllowlistPrecheckResult$Runtime = (() => class _WebFetchAllowlistPrecheckResult extends Message<_WebFetchAllowlistPrecheckResult> {
  declare allowlisted: boolean;
  constructor(data?: PartialMessage<_WebFetchAllowlistPrecheckResult>) {
    super();
    this.allowlisted = false;
    proto3.util.initPartial(data, this as _WebFetchAllowlistPrecheckResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WebFetchAllowlistPrecheckResult {
    return new _WebFetchAllowlistPrecheckResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WebFetchAllowlistPrecheckResult {
    return new _WebFetchAllowlistPrecheckResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WebFetchAllowlistPrecheckResult {
    return new _WebFetchAllowlistPrecheckResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _WebFetchAllowlistPrecheckResult | PlainMessage<_WebFetchAllowlistPrecheckResult> | undefined | null, b2: _WebFetchAllowlistPrecheckResult | PlainMessage<_WebFetchAllowlistPrecheckResult> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchAllowlistPrecheckResult as unknown as MessageType<_WebFetchAllowlistPrecheckResult>, a, b2);
  }
})();
export type WebFetchAllowlistPrecheckResult = InstanceType<typeof WebFetchAllowlistPrecheckResult$Runtime>;
var WebFetchAllowlistPrecheckResult: MessageType<WebFetchAllowlistPrecheckResult> = WebFetchAllowlistPrecheckResult$Runtime as unknown as MessageType<WebFetchAllowlistPrecheckResult>;
(WebFetchAllowlistPrecheckResult as MutableMessageType<WebFetchAllowlistPrecheckResult>).runtime = proto3;
(WebFetchAllowlistPrecheckResult as MutableMessageType<WebFetchAllowlistPrecheckResult>).typeName = "agent.v1.WebFetchAllowlistPrecheckResult";
(WebFetchAllowlistPrecheckResult as MutableMessageType<WebFetchAllowlistPrecheckResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "allowlisted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { WebFetchAllowlistPrecheckArgs, WebFetchAllowlistPrecheckResult };
