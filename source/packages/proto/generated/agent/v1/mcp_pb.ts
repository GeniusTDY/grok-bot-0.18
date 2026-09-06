/**
 * Complete generated Grok Bot 0.18 shared MCP prerequisite recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:17051-17338
 * Region SHA-256: a5200b3b22b0432f1cfdbef16889d4e03d8dff8bcb6a79f2f955b93c04ab9f4b
 * Shared MCP exports: 7 messages
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpToolDefinition$Runtime = (() => class _McpToolDefinition extends Message<_McpToolDefinition> {
  declare name: string;
  declare providerIdentifier: string;
  declare toolName: string;
  declare description: string;
  declare inputSchema?: Value;
  declare inputSchemaJson?: string;
  constructor(data?: PartialMessage<_McpToolDefinition>) {
    super();
    this.name = "";
    this.providerIdentifier = "";
    this.toolName = "";
    this.description = "";
    proto3.util.initPartial(data, this as _McpToolDefinition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolDefinition {
    return new _McpToolDefinition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolDefinition {
    return new _McpToolDefinition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolDefinition {
    return new _McpToolDefinition().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolDefinition | PlainMessage<_McpToolDefinition> | undefined | null, b2: _McpToolDefinition | PlainMessage<_McpToolDefinition> | undefined | null): boolean {
    return proto3.util.equals(_McpToolDefinition as unknown as MessageType<_McpToolDefinition>, a, b2);
  }
})();
export type McpToolDefinition = InstanceType<typeof McpToolDefinition$Runtime>;
var McpToolDefinition: MessageType<McpToolDefinition> = McpToolDefinition$Runtime as unknown as MessageType<McpToolDefinition>;
(McpToolDefinition as MutableMessageType<McpToolDefinition>).runtime = proto3;
(McpToolDefinition as MutableMessageType<McpToolDefinition>).typeName = "agent.v1.McpToolDefinition";
(McpToolDefinition as MutableMessageType<McpToolDefinition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "provider_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "tool_name",
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
  { no: 3, name: "input_schema", kind: "message", T: Value },
  { no: 6, name: "input_schema_json", kind: "scalar", T: 9, opt: true }
]);
var McpTools$Runtime = (() => class _McpTools extends Message<_McpTools> {
  declare mcpTools: McpToolDefinition[];
  constructor(data?: PartialMessage<_McpTools>) {
    super();
    this.mcpTools = [];
    proto3.util.initPartial(data, this as _McpTools);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpTools {
    return new _McpTools().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpTools {
    return new _McpTools().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpTools {
    return new _McpTools().fromJsonString(jsonString, options);
  }
  static equals(a: _McpTools | PlainMessage<_McpTools> | undefined | null, b2: _McpTools | PlainMessage<_McpTools> | undefined | null): boolean {
    return proto3.util.equals(_McpTools as unknown as MessageType<_McpTools>, a, b2);
  }
})();
export type McpTools = InstanceType<typeof McpTools$Runtime>;
var McpTools: MessageType<McpTools> = McpTools$Runtime as unknown as MessageType<McpTools>;
(McpTools as MutableMessageType<McpTools>).runtime = proto3;
(McpTools as MutableMessageType<McpTools>).typeName = "agent.v1.McpTools";
(McpTools as MutableMessageType<McpTools>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "mcp_tools", kind: "message", T: McpToolDefinition, repeated: true }
]);
var McpInstructions$Runtime = (() => class _McpInstructions extends Message<_McpInstructions> {
  declare serverName: string;
  declare instructions: string;
  declare serverIdentifier: string;
  constructor(data?: PartialMessage<_McpInstructions>) {
    super();
    this.serverName = "";
    this.instructions = "";
    this.serverIdentifier = "";
    proto3.util.initPartial(data, this as _McpInstructions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpInstructions {
    return new _McpInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpInstructions {
    return new _McpInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpInstructions {
    return new _McpInstructions().fromJsonString(jsonString, options);
  }
  static equals(a: _McpInstructions | PlainMessage<_McpInstructions> | undefined | null, b2: _McpInstructions | PlainMessage<_McpInstructions> | undefined | null): boolean {
    return proto3.util.equals(_McpInstructions as unknown as MessageType<_McpInstructions>, a, b2);
  }
})();
export type McpInstructions = InstanceType<typeof McpInstructions$Runtime>;
var McpInstructions: MessageType<McpInstructions> = McpInstructions$Runtime as unknown as MessageType<McpInstructions>;
(McpInstructions as MutableMessageType<McpInstructions>).runtime = proto3;
(McpInstructions as MutableMessageType<McpInstructions>).typeName = "agent.v1.McpInstructions";
(McpInstructions as MutableMessageType<McpInstructions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpDescriptor$Runtime = (() => class _McpDescriptor extends Message<_McpDescriptor> {
  declare serverName: string;
  declare serverIdentifier: string;
  declare folderPath?: string;
  declare serverUseInstructions?: string;
  declare tools: McpToolDescriptor[];
  declare plugin?: string;
  declare marketplace?: string;
  declare pluginDbId?: string;
  declare marketplaceId?: string;
  constructor(data?: PartialMessage<_McpDescriptor>) {
    super();
    this.serverName = "";
    this.serverIdentifier = "";
    this.tools = [];
    proto3.util.initPartial(data, this as _McpDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpDescriptor {
    return new _McpDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpDescriptor {
    return new _McpDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpDescriptor {
    return new _McpDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _McpDescriptor | PlainMessage<_McpDescriptor> | undefined | null, b2: _McpDescriptor | PlainMessage<_McpDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_McpDescriptor as unknown as MessageType<_McpDescriptor>, a, b2);
  }
})();
export type McpDescriptor = InstanceType<typeof McpDescriptor$Runtime>;
var McpDescriptor: MessageType<McpDescriptor> = McpDescriptor$Runtime as unknown as MessageType<McpDescriptor>;
(McpDescriptor as MutableMessageType<McpDescriptor>).runtime = proto3;
(McpDescriptor as MutableMessageType<McpDescriptor>).typeName = "agent.v1.McpDescriptor";
(McpDescriptor as MutableMessageType<McpDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "folder_path", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "server_use_instructions", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "tools", kind: "message", T: McpToolDescriptor, repeated: true },
  { no: 7, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "plugin_db_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "marketplace_id", kind: "scalar", T: 9, opt: true }
]);
var McpToolDescriptor$Runtime = (() => class _McpToolDescriptor extends Message<_McpToolDescriptor> {
  declare toolName: string;
  declare definitionPath?: string;
  declare description?: string;
  declare inputSchema?: Value;
  declare inputSchemaJson?: string;
  declare annotationsJson?: string;
  constructor(data?: PartialMessage<_McpToolDescriptor>) {
    super();
    this.toolName = "";
    proto3.util.initPartial(data, this as _McpToolDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolDescriptor {
    return new _McpToolDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolDescriptor {
    return new _McpToolDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolDescriptor {
    return new _McpToolDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolDescriptor | PlainMessage<_McpToolDescriptor> | undefined | null, b2: _McpToolDescriptor | PlainMessage<_McpToolDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_McpToolDescriptor as unknown as MessageType<_McpToolDescriptor>, a, b2);
  }
})();
export type McpToolDescriptor = InstanceType<typeof McpToolDescriptor$Runtime>;
var McpToolDescriptor: MessageType<McpToolDescriptor> = McpToolDescriptor$Runtime as unknown as MessageType<McpToolDescriptor>;
(McpToolDescriptor as MutableMessageType<McpToolDescriptor>).runtime = proto3;
(McpToolDescriptor as MutableMessageType<McpToolDescriptor>).typeName = "agent.v1.McpToolDescriptor";
(McpToolDescriptor as MutableMessageType<McpToolDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "definition_path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "input_schema", kind: "message", T: Value, opt: true },
  { no: 5, name: "input_schema_json", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "annotations_json", kind: "scalar", T: 9, opt: true }
]);
var McpFileSystemOptions$Runtime = (() => class _McpFileSystemOptions extends Message<_McpFileSystemOptions> {
  declare enabled: boolean;
  declare workspaceProjectDir: string;
  declare mcpDescriptors: McpDescriptor[];
  constructor(data?: PartialMessage<_McpFileSystemOptions>) {
    super();
    this.enabled = false;
    this.workspaceProjectDir = "";
    this.mcpDescriptors = [];
    proto3.util.initPartial(data, this as _McpFileSystemOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpFileSystemOptions {
    return new _McpFileSystemOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpFileSystemOptions {
    return new _McpFileSystemOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpFileSystemOptions {
    return new _McpFileSystemOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _McpFileSystemOptions | PlainMessage<_McpFileSystemOptions> | undefined | null, b2: _McpFileSystemOptions | PlainMessage<_McpFileSystemOptions> | undefined | null): boolean {
    return proto3.util.equals(_McpFileSystemOptions as unknown as MessageType<_McpFileSystemOptions>, a, b2);
  }
})();
export type McpFileSystemOptions = InstanceType<typeof McpFileSystemOptions$Runtime>;
var McpFileSystemOptions: MessageType<McpFileSystemOptions> = McpFileSystemOptions$Runtime as unknown as MessageType<McpFileSystemOptions>;
(McpFileSystemOptions as MutableMessageType<McpFileSystemOptions>).runtime = proto3;
(McpFileSystemOptions as MutableMessageType<McpFileSystemOptions>).typeName = "agent.v1.McpFileSystemOptions";
(McpFileSystemOptions as MutableMessageType<McpFileSystemOptions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "workspace_project_dir",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "mcp_descriptors", kind: "message", T: McpDescriptor, repeated: true }
]);
var McpMetaToolOptions$Runtime = (() => class _McpMetaToolOptions extends Message<_McpMetaToolOptions> {
  declare enabled: boolean;
  declare mcpDescriptors: McpDescriptor[];
  constructor(data?: PartialMessage<_McpMetaToolOptions>) {
    super();
    this.enabled = false;
    this.mcpDescriptors = [];
    proto3.util.initPartial(data, this as _McpMetaToolOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpMetaToolOptions {
    return new _McpMetaToolOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpMetaToolOptions {
    return new _McpMetaToolOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpMetaToolOptions {
    return new _McpMetaToolOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _McpMetaToolOptions | PlainMessage<_McpMetaToolOptions> | undefined | null, b2: _McpMetaToolOptions | PlainMessage<_McpMetaToolOptions> | undefined | null): boolean {
    return proto3.util.equals(_McpMetaToolOptions as unknown as MessageType<_McpMetaToolOptions>, a, b2);
  }
})();
export type McpMetaToolOptions = InstanceType<typeof McpMetaToolOptions$Runtime>;
var McpMetaToolOptions: MessageType<McpMetaToolOptions> = McpMetaToolOptions$Runtime as unknown as MessageType<McpMetaToolOptions>;
(McpMetaToolOptions as MutableMessageType<McpMetaToolOptions>).runtime = proto3;
(McpMetaToolOptions as MutableMessageType<McpMetaToolOptions>).typeName = "agent.v1.McpMetaToolOptions";
(McpMetaToolOptions as MutableMessageType<McpMetaToolOptions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "mcp_descriptors", kind: "message", T: McpDescriptor, repeated: true }
]);


export { McpToolDefinition, McpTools, McpInstructions, McpDescriptor, McpToolDescriptor, McpFileSystemOptions, McpMetaToolOptions };
