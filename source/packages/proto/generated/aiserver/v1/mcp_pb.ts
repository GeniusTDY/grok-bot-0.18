/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:248647-248855
 * Region SHA-256: 071145d891d0e219ab24ccf0dcec3830e20f57f00443521a6329c0ad058aeb9c
 * Atomic B0 exports: 6 messages + 0 enums = 6
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpOAuthStoredData$Runtime = (() => class _McpOAuthStoredData extends Message<_McpOAuthStoredData> {
  declare refreshToken?: string;
  declare clientId: string;
  declare clientSecret?: string;
  declare redirectUris: string[];
  declare accessToken?: string;
  constructor(data?: PartialMessage<_McpOAuthStoredData>) {
    super();
    this.clientId = "";
    this.redirectUris = [];
    proto3.util.initPartial(data, this as _McpOAuthStoredData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpOAuthStoredData {
    return new _McpOAuthStoredData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpOAuthStoredData {
    return new _McpOAuthStoredData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpOAuthStoredData {
    return new _McpOAuthStoredData().fromJsonString(jsonString, options);
  }
  static equals(a: _McpOAuthStoredData | PlainMessage<_McpOAuthStoredData> | undefined | null, b2: _McpOAuthStoredData | PlainMessage<_McpOAuthStoredData> | undefined | null): boolean {
    return proto3.util.equals(_McpOAuthStoredData as unknown as MessageType<_McpOAuthStoredData>, a, b2);
  }
})();
export type McpOAuthStoredData = InstanceType<typeof McpOAuthStoredData$Runtime>;
var McpOAuthStoredData: MessageType<McpOAuthStoredData> = McpOAuthStoredData$Runtime as unknown as MessageType<McpOAuthStoredData>;
(McpOAuthStoredData as MutableMessageType<McpOAuthStoredData>).runtime = proto3;
(McpOAuthStoredData as MutableMessageType<McpOAuthStoredData>).typeName = "aiserver.v1.McpOAuthStoredData";
(McpOAuthStoredData as MutableMessageType<McpOAuthStoredData>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "refresh_token", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "client_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "client_secret", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "redirect_uris", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "access_token", kind: "scalar", T: 9, opt: true }
]);
var McpOAuthStoredClientInfo$Runtime = (() => class _McpOAuthStoredClientInfo extends Message<_McpOAuthStoredClientInfo> {
  declare clientId: string;
  declare clientSecret?: string;
  declare redirectUris: string[];
  constructor(data?: PartialMessage<_McpOAuthStoredClientInfo>) {
    super();
    this.clientId = "";
    this.redirectUris = [];
    proto3.util.initPartial(data, this as _McpOAuthStoredClientInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpOAuthStoredClientInfo {
    return new _McpOAuthStoredClientInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpOAuthStoredClientInfo {
    return new _McpOAuthStoredClientInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpOAuthStoredClientInfo {
    return new _McpOAuthStoredClientInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _McpOAuthStoredClientInfo | PlainMessage<_McpOAuthStoredClientInfo> | undefined | null, b2: _McpOAuthStoredClientInfo | PlainMessage<_McpOAuthStoredClientInfo> | undefined | null): boolean {
    return proto3.util.equals(_McpOAuthStoredClientInfo as unknown as MessageType<_McpOAuthStoredClientInfo>, a, b2);
  }
})();
export type McpOAuthStoredClientInfo = InstanceType<typeof McpOAuthStoredClientInfo$Runtime>;
var McpOAuthStoredClientInfo: MessageType<McpOAuthStoredClientInfo> = McpOAuthStoredClientInfo$Runtime as unknown as MessageType<McpOAuthStoredClientInfo>;
(McpOAuthStoredClientInfo as MutableMessageType<McpOAuthStoredClientInfo>).runtime = proto3;
(McpOAuthStoredClientInfo as MutableMessageType<McpOAuthStoredClientInfo>).typeName = "aiserver.v1.McpOAuthStoredClientInfo";
(McpOAuthStoredClientInfo as MutableMessageType<McpOAuthStoredClientInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "client_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "client_secret", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "redirect_uris", kind: "scalar", T: 9, repeated: true }
]);
var MCPKnownServerInfo$Runtime = (() => class _MCPKnownServerInfo extends Message<_MCPKnownServerInfo> {
  declare name: string;
  declare description: string;
  declare icon: string;
  declare endpoint: string;
  declare isFeatured: boolean;
  constructor(data?: PartialMessage<_MCPKnownServerInfo>) {
    super();
    this.name = "";
    this.description = "";
    this.icon = "";
    this.endpoint = "";
    this.isFeatured = false;
    proto3.util.initPartial(data, this as _MCPKnownServerInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPKnownServerInfo {
    return new _MCPKnownServerInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPKnownServerInfo {
    return new _MCPKnownServerInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPKnownServerInfo {
    return new _MCPKnownServerInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPKnownServerInfo | PlainMessage<_MCPKnownServerInfo> | undefined | null, b2: _MCPKnownServerInfo | PlainMessage<_MCPKnownServerInfo> | undefined | null): boolean {
    return proto3.util.equals(_MCPKnownServerInfo as unknown as MessageType<_MCPKnownServerInfo>, a, b2);
  }
})();
export type MCPKnownServerInfo = InstanceType<typeof MCPKnownServerInfo$Runtime>;
var MCPKnownServerInfo: MessageType<MCPKnownServerInfo> = MCPKnownServerInfo$Runtime as unknown as MessageType<MCPKnownServerInfo>;
(MCPKnownServerInfo as MutableMessageType<MCPKnownServerInfo>).runtime = proto3;
(MCPKnownServerInfo as MutableMessageType<MCPKnownServerInfo>).typeName = "aiserver.v1.MCPKnownServerInfo";
(MCPKnownServerInfo as MutableMessageType<MCPKnownServerInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "icon",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "endpoint",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "is_featured",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var MCPServerRegistration$Runtime = (() => class _MCPServerRegistration extends Message<_MCPServerRegistration> {
  declare domains: string[];
  declare info?: MCPKnownServerInfo;
  constructor(data?: PartialMessage<_MCPServerRegistration>) {
    super();
    this.domains = [];
    proto3.util.initPartial(data, this as _MCPServerRegistration);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPServerRegistration {
    return new _MCPServerRegistration().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPServerRegistration {
    return new _MCPServerRegistration().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPServerRegistration {
    return new _MCPServerRegistration().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPServerRegistration | PlainMessage<_MCPServerRegistration> | undefined | null, b2: _MCPServerRegistration | PlainMessage<_MCPServerRegistration> | undefined | null): boolean {
    return proto3.util.equals(_MCPServerRegistration as unknown as MessageType<_MCPServerRegistration>, a, b2);
  }
})();
export type MCPServerRegistration = InstanceType<typeof MCPServerRegistration$Runtime>;
var MCPServerRegistration: MessageType<MCPServerRegistration> = MCPServerRegistration$Runtime as unknown as MessageType<MCPServerRegistration>;
(MCPServerRegistration as MutableMessageType<MCPServerRegistration>).runtime = proto3;
(MCPServerRegistration as MutableMessageType<MCPServerRegistration>).typeName = "aiserver.v1.MCPServerRegistration";
(MCPServerRegistration as MutableMessageType<MCPServerRegistration>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "domains", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "info", kind: "message", T: MCPKnownServerInfo }
]);
var GetKnownServersRequest$Runtime = (() => class _GetKnownServersRequest extends Message<_GetKnownServersRequest> {
  constructor(data?: PartialMessage<_GetKnownServersRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetKnownServersRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetKnownServersRequest {
    return new _GetKnownServersRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetKnownServersRequest {
    return new _GetKnownServersRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetKnownServersRequest {
    return new _GetKnownServersRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetKnownServersRequest | PlainMessage<_GetKnownServersRequest> | undefined | null, b2: _GetKnownServersRequest | PlainMessage<_GetKnownServersRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetKnownServersRequest as unknown as MessageType<_GetKnownServersRequest>, a, b2);
  }
})();
export type GetKnownServersRequest = InstanceType<typeof GetKnownServersRequest$Runtime>;
var GetKnownServersRequest: MessageType<GetKnownServersRequest> = GetKnownServersRequest$Runtime as unknown as MessageType<GetKnownServersRequest>;
(GetKnownServersRequest as MutableMessageType<GetKnownServersRequest>).runtime = proto3;
(GetKnownServersRequest as MutableMessageType<GetKnownServersRequest>).typeName = "aiserver.v1.GetKnownServersRequest";
(GetKnownServersRequest as MutableMessageType<GetKnownServersRequest>).fields = proto3.util.newFieldList(() => []);
var GetKnownServersResponse$Runtime = (() => class _GetKnownServersResponse extends Message<_GetKnownServersResponse> {
  declare servers: MCPServerRegistration[];
  constructor(data?: PartialMessage<_GetKnownServersResponse>) {
    super();
    this.servers = [];
    proto3.util.initPartial(data, this as _GetKnownServersResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetKnownServersResponse {
    return new _GetKnownServersResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetKnownServersResponse {
    return new _GetKnownServersResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetKnownServersResponse {
    return new _GetKnownServersResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetKnownServersResponse | PlainMessage<_GetKnownServersResponse> | undefined | null, b2: _GetKnownServersResponse | PlainMessage<_GetKnownServersResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetKnownServersResponse as unknown as MessageType<_GetKnownServersResponse>, a, b2);
  }
})();
export type GetKnownServersResponse = InstanceType<typeof GetKnownServersResponse$Runtime>;
var GetKnownServersResponse: MessageType<GetKnownServersResponse> = GetKnownServersResponse$Runtime as unknown as MessageType<GetKnownServersResponse>;
(GetKnownServersResponse as MutableMessageType<GetKnownServersResponse>).runtime = proto3;
(GetKnownServersResponse as MutableMessageType<GetKnownServersResponse>).typeName = "aiserver.v1.GetKnownServersResponse";
(GetKnownServersResponse as MutableMessageType<GetKnownServersResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "servers", kind: "message", T: MCPServerRegistration, repeated: true }
]);


export { McpOAuthStoredData, McpOAuthStoredClientInfo, MCPKnownServerInfo, MCPServerRegistration, GetKnownServersRequest, GetKnownServersResponse };
