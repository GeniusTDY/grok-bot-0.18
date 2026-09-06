/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:63903-63980
 * Region SHA-256: fbd8dac0a4c44f5cb5c842df14cfcdbb2b7f0d07702aa9f93b9d24058058640d
 * B11 exports: 2 messages + 0 enums + 0 services = 2
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";


type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpAllowlistPrecheckArgs$Runtime = (() => class _McpAllowlistPrecheckArgs extends Message<_McpAllowlistPrecheckArgs> {
  declare providerIdentifier: string;
  declare toolName: string;
  declare toolCallId?: string;
  constructor(data?: PartialMessage<_McpAllowlistPrecheckArgs>) {
    super();
    this.providerIdentifier = "";
    this.toolName = "";
    proto3.util.initPartial(data, this as _McpAllowlistPrecheckArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _McpAllowlistPrecheckArgs {
    return new _McpAllowlistPrecheckArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _McpAllowlistPrecheckArgs {
    return new _McpAllowlistPrecheckArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _McpAllowlistPrecheckArgs {
    return new _McpAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _McpAllowlistPrecheckArgs | PlainMessage<_McpAllowlistPrecheckArgs> | undefined | null, b2: _McpAllowlistPrecheckArgs | PlainMessage<_McpAllowlistPrecheckArgs> | undefined | null): boolean {
    return proto3.util.equals(_McpAllowlistPrecheckArgs as unknown as MessageType<_McpAllowlistPrecheckArgs>, a, b2);
  }
})();
export type McpAllowlistPrecheckArgs = InstanceType<typeof McpAllowlistPrecheckArgs$Runtime>;
var McpAllowlistPrecheckArgs: MessageType<McpAllowlistPrecheckArgs> = McpAllowlistPrecheckArgs$Runtime as unknown as MessageType<McpAllowlistPrecheckArgs>;
(McpAllowlistPrecheckArgs as MutableMessageType<McpAllowlistPrecheckArgs>).runtime = proto3;
(McpAllowlistPrecheckArgs as MutableMessageType<McpAllowlistPrecheckArgs>).typeName = "agent.v1.McpAllowlistPrecheckArgs";
(McpAllowlistPrecheckArgs as MutableMessageType<McpAllowlistPrecheckArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "provider_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "tool_call_id", kind: "scalar", T: 9, opt: true }
]);
var McpAllowlistPrecheckResult$Runtime = (() => class _McpAllowlistPrecheckResult extends Message<_McpAllowlistPrecheckResult> {
  declare allowlisted: boolean;
  constructor(data?: PartialMessage<_McpAllowlistPrecheckResult>) {
    super();
    this.allowlisted = false;
    proto3.util.initPartial(data, this as _McpAllowlistPrecheckResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _McpAllowlistPrecheckResult {
    return new _McpAllowlistPrecheckResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _McpAllowlistPrecheckResult {
    return new _McpAllowlistPrecheckResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _McpAllowlistPrecheckResult {
    return new _McpAllowlistPrecheckResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _McpAllowlistPrecheckResult | PlainMessage<_McpAllowlistPrecheckResult> | undefined | null, b2: _McpAllowlistPrecheckResult | PlainMessage<_McpAllowlistPrecheckResult> | undefined | null): boolean {
    return proto3.util.equals(_McpAllowlistPrecheckResult as unknown as MessageType<_McpAllowlistPrecheckResult>, a, b2);
  }
})();
export type McpAllowlistPrecheckResult = InstanceType<typeof McpAllowlistPrecheckResult$Runtime>;
var McpAllowlistPrecheckResult: MessageType<McpAllowlistPrecheckResult> = McpAllowlistPrecheckResult$Runtime as unknown as MessageType<McpAllowlistPrecheckResult>;
(McpAllowlistPrecheckResult as MutableMessageType<McpAllowlistPrecheckResult>).runtime = proto3;
(McpAllowlistPrecheckResult as MutableMessageType<McpAllowlistPrecheckResult>).typeName = "agent.v1.McpAllowlistPrecheckResult";
(McpAllowlistPrecheckResult as MutableMessageType<McpAllowlistPrecheckResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "allowlisted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { McpAllowlistPrecheckArgs, McpAllowlistPrecheckResult };
