/**
 * Complete generated Grok Bot 0.18 shared MCP prerequisite recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:19113-20178
 * Region SHA-256: c85fc2f433521018aa48bb9b45fbdea7fb8f2325c7540907b558a3e7057208f8
 * Shared MCP exports: 30 messages
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";
import { McpInstructions, McpToolDefinition } from "./mcp_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpArgs$Runtime = (() => class _McpArgs extends Message<_McpArgs> {
  declare name: string;
  declare args: { [key: string]: Value };
  declare toolCallId: string;
  declare providerIdentifier: string;
  declare toolName: string;
  declare smartModeApproval?: SmartModeApproval;
  declare smartModeApprovalOnly: boolean;
  declare skipApproval: boolean;
  declare serverIdentifier: string;
  constructor(data?: PartialMessage<_McpArgs>) {
    super();
    this.name = "";
    this.args = {};
    this.toolCallId = "";
    this.providerIdentifier = "";
    this.toolName = "";
    this.smartModeApprovalOnly = false;
    this.skipApproval = false;
    this.serverIdentifier = "";
    proto3.util.initPartial(data, this as _McpArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpArgs {
    return new _McpArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpArgs {
    return new _McpArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpArgs {
    return new _McpArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _McpArgs | PlainMessage<_McpArgs> | undefined | null, b2: _McpArgs | PlainMessage<_McpArgs> | undefined | null): boolean {
    return proto3.util.equals(_McpArgs as unknown as MessageType<_McpArgs>, a, b2);
  }
})();
export type McpArgs = InstanceType<typeof McpArgs$Runtime>;
var McpArgs: MessageType<McpArgs> = McpArgs$Runtime as unknown as MessageType<McpArgs>;
(McpArgs as MutableMessageType<McpArgs>).runtime = proto3;
(McpArgs as MutableMessageType<McpArgs>).typeName = "agent.v1.McpArgs";
(McpArgs as MutableMessageType<McpArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "map", K: 9, V: { kind: "message", T: Value } },
  {
    no: 3,
    name: "tool_call_id",
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
  { no: 6, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true },
  {
    no: 7,
    name: "smart_mode_approval_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "skip_approval",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 9,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpResult$Runtime = (() => class _McpResult extends Message<_McpResult> {
  declare result: { case: "success"; value: McpSuccess } | { case: "error"; value: McpError } | { case: "rejected"; value: McpRejected } | { case: "permissionDenied"; value: McpPermissionDenied } | { case: "toolNotFound"; value: McpToolNotFound } | { case: "serverNotFound"; value: McpServerNotFound } | { case: "approved"; value: McpApproved } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _McpResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpResult {
    return new _McpResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpResult {
    return new _McpResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpResult {
    return new _McpResult().fromJsonString(jsonString, options);
  }
  static equals(a: _McpResult | PlainMessage<_McpResult> | undefined | null, b2: _McpResult | PlainMessage<_McpResult> | undefined | null): boolean {
    return proto3.util.equals(_McpResult as unknown as MessageType<_McpResult>, a, b2);
  }
})();
export type McpResult = InstanceType<typeof McpResult$Runtime>;
var McpResult: MessageType<McpResult> = McpResult$Runtime as unknown as MessageType<McpResult>;
(McpResult as MutableMessageType<McpResult>).runtime = proto3;
(McpResult as MutableMessageType<McpResult>).typeName = "agent.v1.McpResult";
(McpResult as MutableMessageType<McpResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: McpSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: McpError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: McpRejected, oneof: "result" },
  { no: 4, name: "permission_denied", kind: "message", T: McpPermissionDenied, oneof: "result" },
  { no: 5, name: "tool_not_found", kind: "message", T: McpToolNotFound, oneof: "result" },
  { no: 6, name: "server_not_found", kind: "message", T: McpServerNotFound, oneof: "result" },
  { no: 7, name: "approved", kind: "message", T: McpApproved, oneof: "result" }
]);
var McpApproved$Runtime = (() => class _McpApproved extends Message<_McpApproved> {
  constructor(data?: PartialMessage<_McpApproved>) {
    super();
    proto3.util.initPartial(data, this as _McpApproved);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpApproved {
    return new _McpApproved().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpApproved {
    return new _McpApproved().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpApproved {
    return new _McpApproved().fromJsonString(jsonString, options);
  }
  static equals(a: _McpApproved | PlainMessage<_McpApproved> | undefined | null, b2: _McpApproved | PlainMessage<_McpApproved> | undefined | null): boolean {
    return proto3.util.equals(_McpApproved as unknown as MessageType<_McpApproved>, a, b2);
  }
})();
export type McpApproved = InstanceType<typeof McpApproved$Runtime>;
var McpApproved: MessageType<McpApproved> = McpApproved$Runtime as unknown as MessageType<McpApproved>;
(McpApproved as MutableMessageType<McpApproved>).runtime = proto3;
(McpApproved as MutableMessageType<McpApproved>).typeName = "agent.v1.McpApproved";
(McpApproved as MutableMessageType<McpApproved>).fields = proto3.util.newFieldList(() => []);
var McpToolNotFound$Runtime = (() => class _McpToolNotFound extends Message<_McpToolNotFound> {
  declare name: string;
  declare availableTools: string[];
  constructor(data?: PartialMessage<_McpToolNotFound>) {
    super();
    this.name = "";
    this.availableTools = [];
    proto3.util.initPartial(data, this as _McpToolNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolNotFound {
    return new _McpToolNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolNotFound {
    return new _McpToolNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolNotFound {
    return new _McpToolNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolNotFound | PlainMessage<_McpToolNotFound> | undefined | null, b2: _McpToolNotFound | PlainMessage<_McpToolNotFound> | undefined | null): boolean {
    return proto3.util.equals(_McpToolNotFound as unknown as MessageType<_McpToolNotFound>, a, b2);
  }
})();
export type McpToolNotFound = InstanceType<typeof McpToolNotFound$Runtime>;
var McpToolNotFound: MessageType<McpToolNotFound> = McpToolNotFound$Runtime as unknown as MessageType<McpToolNotFound>;
(McpToolNotFound as MutableMessageType<McpToolNotFound>).runtime = proto3;
(McpToolNotFound as MutableMessageType<McpToolNotFound>).typeName = "agent.v1.McpToolNotFound";
(McpToolNotFound as MutableMessageType<McpToolNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "available_tools", kind: "scalar", T: 9, repeated: true }
]);
var McpServerNotFound$Runtime = (() => class _McpServerNotFound extends Message<_McpServerNotFound> {
  declare name: string;
  declare availableServers: string[];
  constructor(data?: PartialMessage<_McpServerNotFound>) {
    super();
    this.name = "";
    this.availableServers = [];
    proto3.util.initPartial(data, this as _McpServerNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpServerNotFound {
    return new _McpServerNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpServerNotFound {
    return new _McpServerNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpServerNotFound {
    return new _McpServerNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _McpServerNotFound | PlainMessage<_McpServerNotFound> | undefined | null, b2: _McpServerNotFound | PlainMessage<_McpServerNotFound> | undefined | null): boolean {
    return proto3.util.equals(_McpServerNotFound as unknown as MessageType<_McpServerNotFound>, a, b2);
  }
})();
export type McpServerNotFound = InstanceType<typeof McpServerNotFound$Runtime>;
var McpServerNotFound: MessageType<McpServerNotFound> = McpServerNotFound$Runtime as unknown as MessageType<McpServerNotFound>;
(McpServerNotFound as MutableMessageType<McpServerNotFound>).runtime = proto3;
(McpServerNotFound as MutableMessageType<McpServerNotFound>).typeName = "agent.v1.McpServerNotFound";
(McpServerNotFound as MutableMessageType<McpServerNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "available_servers", kind: "scalar", T: 9, repeated: true }
]);
var McpTextContent$Runtime = (() => class _McpTextContent extends Message<_McpTextContent> {
  declare text: string;
  declare outputLocation?: OutputLocation;
  constructor(data?: PartialMessage<_McpTextContent>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _McpTextContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpTextContent {
    return new _McpTextContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpTextContent {
    return new _McpTextContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpTextContent {
    return new _McpTextContent().fromJsonString(jsonString, options);
  }
  static equals(a: _McpTextContent | PlainMessage<_McpTextContent> | undefined | null, b2: _McpTextContent | PlainMessage<_McpTextContent> | undefined | null): boolean {
    return proto3.util.equals(_McpTextContent as unknown as MessageType<_McpTextContent>, a, b2);
  }
})();
export type McpTextContent = InstanceType<typeof McpTextContent$Runtime>;
var McpTextContent: MessageType<McpTextContent> = McpTextContent$Runtime as unknown as MessageType<McpTextContent>;
(McpTextContent as MutableMessageType<McpTextContent>).runtime = proto3;
(McpTextContent as MutableMessageType<McpTextContent>).typeName = "agent.v1.McpTextContent";
(McpTextContent as MutableMessageType<McpTextContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "output_location", kind: "message", T: OutputLocation, opt: true }
]);
var McpImageContent$Runtime = (() => class _McpImageContent extends Message<_McpImageContent> {
  declare data: Uint8Array;
  declare mimeType: string;
  constructor(data?: PartialMessage<_McpImageContent>) {
    super();
    this.data = new Uint8Array(0);
    this.mimeType = "";
    proto3.util.initPartial(data, this as _McpImageContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpImageContent {
    return new _McpImageContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpImageContent {
    return new _McpImageContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpImageContent {
    return new _McpImageContent().fromJsonString(jsonString, options);
  }
  static equals(a: _McpImageContent | PlainMessage<_McpImageContent> | undefined | null, b2: _McpImageContent | PlainMessage<_McpImageContent> | undefined | null): boolean {
    return proto3.util.equals(_McpImageContent as unknown as MessageType<_McpImageContent>, a, b2);
  }
})();
export type McpImageContent = InstanceType<typeof McpImageContent$Runtime>;
var McpImageContent: MessageType<McpImageContent> = McpImageContent$Runtime as unknown as MessageType<McpImageContent>;
(McpImageContent as MutableMessageType<McpImageContent>).runtime = proto3;
(McpImageContent as MutableMessageType<McpImageContent>).typeName = "agent.v1.McpImageContent";
(McpImageContent as MutableMessageType<McpImageContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpToolResultContentItem$Runtime = (() => class _McpToolResultContentItem extends Message<_McpToolResultContentItem> {
  declare content: { case: "text"; value: McpTextContent } | { case: "image"; value: McpImageContent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpToolResultContentItem>) {
    super();
    this.content = { case: void 0 };
    proto3.util.initPartial(data, this as _McpToolResultContentItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolResultContentItem {
    return new _McpToolResultContentItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolResultContentItem {
    return new _McpToolResultContentItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolResultContentItem {
    return new _McpToolResultContentItem().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolResultContentItem | PlainMessage<_McpToolResultContentItem> | undefined | null, b2: _McpToolResultContentItem | PlainMessage<_McpToolResultContentItem> | undefined | null): boolean {
    return proto3.util.equals(_McpToolResultContentItem as unknown as MessageType<_McpToolResultContentItem>, a, b2);
  }
})();
export type McpToolResultContentItem = InstanceType<typeof McpToolResultContentItem$Runtime>;
var McpToolResultContentItem: MessageType<McpToolResultContentItem> = McpToolResultContentItem$Runtime as unknown as MessageType<McpToolResultContentItem>;
(McpToolResultContentItem as MutableMessageType<McpToolResultContentItem>).runtime = proto3;
(McpToolResultContentItem as MutableMessageType<McpToolResultContentItem>).typeName = "agent.v1.McpToolResultContentItem";
(McpToolResultContentItem as MutableMessageType<McpToolResultContentItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: McpTextContent, oneof: "content" },
  { no: 2, name: "image", kind: "message", T: McpImageContent, oneof: "content" }
]);
var McpSuccess$Runtime = (() => class _McpSuccess extends Message<_McpSuccess> {
  declare content: McpToolResultContentItem[];
  declare isError: boolean;
  declare structuredContent?: Struct;
  constructor(data?: PartialMessage<_McpSuccess>) {
    super();
    this.content = [];
    this.isError = false;
    proto3.util.initPartial(data, this as _McpSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpSuccess {
    return new _McpSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpSuccess {
    return new _McpSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpSuccess {
    return new _McpSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _McpSuccess | PlainMessage<_McpSuccess> | undefined | null, b2: _McpSuccess | PlainMessage<_McpSuccess> | undefined | null): boolean {
    return proto3.util.equals(_McpSuccess as unknown as MessageType<_McpSuccess>, a, b2);
  }
})();
export type McpSuccess = InstanceType<typeof McpSuccess$Runtime>;
var McpSuccess: MessageType<McpSuccess> = McpSuccess$Runtime as unknown as MessageType<McpSuccess>;
(McpSuccess as MutableMessageType<McpSuccess>).runtime = proto3;
(McpSuccess as MutableMessageType<McpSuccess>).typeName = "agent.v1.McpSuccess";
(McpSuccess as MutableMessageType<McpSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "message", T: McpToolResultContentItem, repeated: true },
  {
    no: 2,
    name: "is_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "structured_content", kind: "message", T: Struct }
]);
var McpError$Runtime = (() => class _McpError extends Message<_McpError> {
  declare error: string;
  constructor(data?: PartialMessage<_McpError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _McpError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpError {
    return new _McpError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpError {
    return new _McpError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpError {
    return new _McpError().fromJsonString(jsonString, options);
  }
  static equals(a: _McpError | PlainMessage<_McpError> | undefined | null, b2: _McpError | PlainMessage<_McpError> | undefined | null): boolean {
    return proto3.util.equals(_McpError as unknown as MessageType<_McpError>, a, b2);
  }
})();
export type McpError = InstanceType<typeof McpError$Runtime>;
var McpError: MessageType<McpError> = McpError$Runtime as unknown as MessageType<McpError>;
(McpError as MutableMessageType<McpError>).runtime = proto3;
(McpError as MutableMessageType<McpError>).typeName = "agent.v1.McpError";
(McpError as MutableMessageType<McpError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpRejected$Runtime = (() => class _McpRejected extends Message<_McpRejected> {
  declare reason: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_McpRejected>) {
    super();
    this.reason = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _McpRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpRejected {
    return new _McpRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpRejected {
    return new _McpRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpRejected {
    return new _McpRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _McpRejected | PlainMessage<_McpRejected> | undefined | null, b2: _McpRejected | PlainMessage<_McpRejected> | undefined | null): boolean {
    return proto3.util.equals(_McpRejected as unknown as MessageType<_McpRejected>, a, b2);
  }
})();
export type McpRejected = InstanceType<typeof McpRejected$Runtime>;
var McpRejected: MessageType<McpRejected> = McpRejected$Runtime as unknown as MessageType<McpRejected>;
(McpRejected as MutableMessageType<McpRejected>).runtime = proto3;
(McpRejected as MutableMessageType<McpRejected>).typeName = "agent.v1.McpRejected";
(McpRejected as MutableMessageType<McpRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var McpPermissionDenied$Runtime = (() => class _McpPermissionDenied extends Message<_McpPermissionDenied> {
  declare error: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_McpPermissionDenied>) {
    super();
    this.error = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _McpPermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpPermissionDenied {
    return new _McpPermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpPermissionDenied {
    return new _McpPermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpPermissionDenied {
    return new _McpPermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _McpPermissionDenied | PlainMessage<_McpPermissionDenied> | undefined | null, b2: _McpPermissionDenied | PlainMessage<_McpPermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_McpPermissionDenied as unknown as MessageType<_McpPermissionDenied>, a, b2);
  }
})();
export type McpPermissionDenied = InstanceType<typeof McpPermissionDenied$Runtime>;
var McpPermissionDenied: MessageType<McpPermissionDenied> = McpPermissionDenied$Runtime as unknown as MessageType<McpPermissionDenied>;
(McpPermissionDenied as MutableMessageType<McpPermissionDenied>).runtime = proto3;
(McpPermissionDenied as MutableMessageType<McpPermissionDenied>).typeName = "agent.v1.McpPermissionDenied";
(McpPermissionDenied as MutableMessageType<McpPermissionDenied>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var McpStateExecArgs$Runtime = (() => class _McpStateExecArgs extends Message<_McpStateExecArgs> {
  declare serverIdentifiers: string[];
  declare kickOnly: boolean;
  constructor(data?: PartialMessage<_McpStateExecArgs>) {
    super();
    this.serverIdentifiers = [];
    this.kickOnly = false;
    proto3.util.initPartial(data, this as _McpStateExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateExecArgs {
    return new _McpStateExecArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateExecArgs {
    return new _McpStateExecArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateExecArgs {
    return new _McpStateExecArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateExecArgs | PlainMessage<_McpStateExecArgs> | undefined | null, b2: _McpStateExecArgs | PlainMessage<_McpStateExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_McpStateExecArgs as unknown as MessageType<_McpStateExecArgs>, a, b2);
  }
})();
export type McpStateExecArgs = InstanceType<typeof McpStateExecArgs$Runtime>;
var McpStateExecArgs: MessageType<McpStateExecArgs> = McpStateExecArgs$Runtime as unknown as MessageType<McpStateExecArgs>;
(McpStateExecArgs as MutableMessageType<McpStateExecArgs>).runtime = proto3;
(McpStateExecArgs as MutableMessageType<McpStateExecArgs>).typeName = "agent.v1.McpStateExecArgs";
(McpStateExecArgs as MutableMessageType<McpStateExecArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server_identifiers", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "kick_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var McpStateExecResult$Runtime = (() => class _McpStateExecResult extends Message<_McpStateExecResult> {
  declare result: { case: "success"; value: McpStateSuccess } | { case: "error"; value: McpStateError } | { case: "rejected"; value: McpStateRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpStateExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _McpStateExecResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateExecResult {
    return new _McpStateExecResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateExecResult {
    return new _McpStateExecResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateExecResult {
    return new _McpStateExecResult().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateExecResult | PlainMessage<_McpStateExecResult> | undefined | null, b2: _McpStateExecResult | PlainMessage<_McpStateExecResult> | undefined | null): boolean {
    return proto3.util.equals(_McpStateExecResult as unknown as MessageType<_McpStateExecResult>, a, b2);
  }
})();
export type McpStateExecResult = InstanceType<typeof McpStateExecResult$Runtime>;
var McpStateExecResult: MessageType<McpStateExecResult> = McpStateExecResult$Runtime as unknown as MessageType<McpStateExecResult>;
(McpStateExecResult as MutableMessageType<McpStateExecResult>).runtime = proto3;
(McpStateExecResult as MutableMessageType<McpStateExecResult>).typeName = "agent.v1.McpStateExecResult";
(McpStateExecResult as MutableMessageType<McpStateExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: McpStateSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: McpStateError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: McpStateRejected, oneof: "result" }
]);
var McpStateServer$Runtime = (() => class _McpStateServer extends Message<_McpStateServer> {
  declare serverName: string;
  declare serverIdentifier: string;
  declare plugin?: string;
  declare marketplace?: string;
  declare tools: McpToolDefinition[];
  declare instructions: McpInstructions[];
  declare status?: string;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_McpStateServer>) {
    super();
    this.serverName = "";
    this.serverIdentifier = "";
    this.tools = [];
    this.instructions = [];
    proto3.util.initPartial(data, this as _McpStateServer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateServer {
    return new _McpStateServer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateServer {
    return new _McpStateServer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateServer {
    return new _McpStateServer().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateServer | PlainMessage<_McpStateServer> | undefined | null, b2: _McpStateServer | PlainMessage<_McpStateServer> | undefined | null): boolean {
    return proto3.util.equals(_McpStateServer as unknown as MessageType<_McpStateServer>, a, b2);
  }
})();
export type McpStateServer = InstanceType<typeof McpStateServer$Runtime>;
var McpStateServer: MessageType<McpStateServer> = McpStateServer$Runtime as unknown as MessageType<McpStateServer>;
(McpStateServer as MutableMessageType<McpStateServer>).runtime = proto3;
(McpStateServer as MutableMessageType<McpStateServer>).typeName = "agent.v1.McpStateServer";
(McpStateServer as MutableMessageType<McpStateServer>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "tools", kind: "message", T: McpToolDefinition, repeated: true },
  { no: 6, name: "instructions", kind: "message", T: McpInstructions, repeated: true },
  { no: 7, name: "status", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var McpStateSuccess$Runtime = (() => class _McpStateSuccess extends Message<_McpStateSuccess> {
  declare servers: McpStateServer[];
  constructor(data?: PartialMessage<_McpStateSuccess>) {
    super();
    this.servers = [];
    proto3.util.initPartial(data, this as _McpStateSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateSuccess {
    return new _McpStateSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateSuccess {
    return new _McpStateSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateSuccess {
    return new _McpStateSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateSuccess | PlainMessage<_McpStateSuccess> | undefined | null, b2: _McpStateSuccess | PlainMessage<_McpStateSuccess> | undefined | null): boolean {
    return proto3.util.equals(_McpStateSuccess as unknown as MessageType<_McpStateSuccess>, a, b2);
  }
})();
export type McpStateSuccess = InstanceType<typeof McpStateSuccess$Runtime>;
var McpStateSuccess: MessageType<McpStateSuccess> = McpStateSuccess$Runtime as unknown as MessageType<McpStateSuccess>;
(McpStateSuccess as MutableMessageType<McpStateSuccess>).runtime = proto3;
(McpStateSuccess as MutableMessageType<McpStateSuccess>).typeName = "agent.v1.McpStateSuccess";
(McpStateSuccess as MutableMessageType<McpStateSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "servers", kind: "message", T: McpStateServer, repeated: true }
]);
var McpStateError$Runtime = (() => class _McpStateError extends Message<_McpStateError> {
  declare error: string;
  constructor(data?: PartialMessage<_McpStateError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _McpStateError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateError {
    return new _McpStateError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateError {
    return new _McpStateError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateError {
    return new _McpStateError().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateError | PlainMessage<_McpStateError> | undefined | null, b2: _McpStateError | PlainMessage<_McpStateError> | undefined | null): boolean {
    return proto3.util.equals(_McpStateError as unknown as MessageType<_McpStateError>, a, b2);
  }
})();
export type McpStateError = InstanceType<typeof McpStateError$Runtime>;
var McpStateError: MessageType<McpStateError> = McpStateError$Runtime as unknown as MessageType<McpStateError>;
(McpStateError as MutableMessageType<McpStateError>).runtime = proto3;
(McpStateError as MutableMessageType<McpStateError>).typeName = "agent.v1.McpStateError";
(McpStateError as MutableMessageType<McpStateError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpStateRejected$Runtime = (() => class _McpStateRejected extends Message<_McpStateRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_McpStateRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _McpStateRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpStateRejected {
    return new _McpStateRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpStateRejected {
    return new _McpStateRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpStateRejected {
    return new _McpStateRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _McpStateRejected | PlainMessage<_McpStateRejected> | undefined | null, b2: _McpStateRejected | PlainMessage<_McpStateRejected> | undefined | null): boolean {
    return proto3.util.equals(_McpStateRejected as unknown as MessageType<_McpStateRejected>, a, b2);
  }
})();
export type McpStateRejected = InstanceType<typeof McpStateRejected$Runtime>;
var McpStateRejected: MessageType<McpStateRejected> = McpStateRejected$Runtime as unknown as MessageType<McpStateRejected>;
(McpStateRejected as MutableMessageType<McpStateRejected>).runtime = proto3;
(McpStateRejected as MutableMessageType<McpStateRejected>).typeName = "agent.v1.McpStateRejected";
(McpStateRejected as MutableMessageType<McpStateRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListMcpResourcesExecArgs$Runtime = (() => class _ListMcpResourcesExecArgs extends Message<_ListMcpResourcesExecArgs> {
  declare server?: string;
  constructor(data?: PartialMessage<_ListMcpResourcesExecArgs>) {
    super();
    proto3.util.initPartial(data, this as _ListMcpResourcesExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesExecArgs {
    return new _ListMcpResourcesExecArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecArgs {
    return new _ListMcpResourcesExecArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecArgs {
    return new _ListMcpResourcesExecArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesExecArgs | PlainMessage<_ListMcpResourcesExecArgs> | undefined | null, b2: _ListMcpResourcesExecArgs | PlainMessage<_ListMcpResourcesExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesExecArgs as unknown as MessageType<_ListMcpResourcesExecArgs>, a, b2);
  }
})();
export type ListMcpResourcesExecArgs = InstanceType<typeof ListMcpResourcesExecArgs$Runtime>;
var ListMcpResourcesExecArgs: MessageType<ListMcpResourcesExecArgs> = ListMcpResourcesExecArgs$Runtime as unknown as MessageType<ListMcpResourcesExecArgs>;
(ListMcpResourcesExecArgs as MutableMessageType<ListMcpResourcesExecArgs>).runtime = proto3;
(ListMcpResourcesExecArgs as MutableMessageType<ListMcpResourcesExecArgs>).typeName = "agent.v1.ListMcpResourcesExecArgs";
(ListMcpResourcesExecArgs as MutableMessageType<ListMcpResourcesExecArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server", kind: "scalar", T: 9, opt: true }
]);
var ListMcpResourcesExecResult$Runtime = (() => class _ListMcpResourcesExecResult extends Message<_ListMcpResourcesExecResult> {
  declare result: { case: "success"; value: ListMcpResourcesSuccess } | { case: "error"; value: ListMcpResourcesError } | { case: "rejected"; value: ListMcpResourcesRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ListMcpResourcesExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ListMcpResourcesExecResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesExecResult {
    return new _ListMcpResourcesExecResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecResult {
    return new _ListMcpResourcesExecResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecResult {
    return new _ListMcpResourcesExecResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesExecResult | PlainMessage<_ListMcpResourcesExecResult> | undefined | null, b2: _ListMcpResourcesExecResult | PlainMessage<_ListMcpResourcesExecResult> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesExecResult as unknown as MessageType<_ListMcpResourcesExecResult>, a, b2);
  }
})();
export type ListMcpResourcesExecResult = InstanceType<typeof ListMcpResourcesExecResult$Runtime>;
var ListMcpResourcesExecResult: MessageType<ListMcpResourcesExecResult> = ListMcpResourcesExecResult$Runtime as unknown as MessageType<ListMcpResourcesExecResult>;
(ListMcpResourcesExecResult as MutableMessageType<ListMcpResourcesExecResult>).runtime = proto3;
(ListMcpResourcesExecResult as MutableMessageType<ListMcpResourcesExecResult>).typeName = "agent.v1.ListMcpResourcesExecResult";
(ListMcpResourcesExecResult as MutableMessageType<ListMcpResourcesExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ListMcpResourcesSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ListMcpResourcesError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: ListMcpResourcesRejected, oneof: "result" }
]);
var ListMcpResourcesExecResult_McpResource$Runtime = (() => class _ListMcpResourcesExecResult_McpResource extends Message<_ListMcpResourcesExecResult_McpResource> {
  declare uri: string;
  declare name?: string;
  declare description?: string;
  declare mimeType?: string;
  declare server: string;
  declare annotations: { [key: string]: string };
  constructor(data?: PartialMessage<_ListMcpResourcesExecResult_McpResource>) {
    super();
    this.uri = "";
    this.server = "";
    this.annotations = {};
    proto3.util.initPartial(data, this as _ListMcpResourcesExecResult_McpResource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesExecResult_McpResource {
    return new _ListMcpResourcesExecResult_McpResource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecResult_McpResource {
    return new _ListMcpResourcesExecResult_McpResource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesExecResult_McpResource {
    return new _ListMcpResourcesExecResult_McpResource().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesExecResult_McpResource | PlainMessage<_ListMcpResourcesExecResult_McpResource> | undefined | null, b2: _ListMcpResourcesExecResult_McpResource | PlainMessage<_ListMcpResourcesExecResult_McpResource> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesExecResult_McpResource as unknown as MessageType<_ListMcpResourcesExecResult_McpResource>, a, b2);
  }
})();
export type ListMcpResourcesExecResult_McpResource = InstanceType<typeof ListMcpResourcesExecResult_McpResource$Runtime>;
var ListMcpResourcesExecResult_McpResource: MessageType<ListMcpResourcesExecResult_McpResource> = ListMcpResourcesExecResult_McpResource$Runtime as unknown as MessageType<ListMcpResourcesExecResult_McpResource>;
(ListMcpResourcesExecResult_McpResource as MutableMessageType<ListMcpResourcesExecResult_McpResource>).runtime = proto3;
(ListMcpResourcesExecResult_McpResource as MutableMessageType<ListMcpResourcesExecResult_McpResource>).typeName = "agent.v1.ListMcpResourcesExecResult.McpResource";
(ListMcpResourcesExecResult_McpResource as MutableMessageType<ListMcpResourcesExecResult_McpResource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "annotations", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ListMcpResourcesSuccess$Runtime = (() => class _ListMcpResourcesSuccess extends Message<_ListMcpResourcesSuccess> {
  declare resources: ListMcpResourcesExecResult_McpResource[];
  constructor(data?: PartialMessage<_ListMcpResourcesSuccess>) {
    super();
    this.resources = [];
    proto3.util.initPartial(data, this as _ListMcpResourcesSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesSuccess {
    return new _ListMcpResourcesSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesSuccess {
    return new _ListMcpResourcesSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesSuccess {
    return new _ListMcpResourcesSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesSuccess | PlainMessage<_ListMcpResourcesSuccess> | undefined | null, b2: _ListMcpResourcesSuccess | PlainMessage<_ListMcpResourcesSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesSuccess as unknown as MessageType<_ListMcpResourcesSuccess>, a, b2);
  }
})();
export type ListMcpResourcesSuccess = InstanceType<typeof ListMcpResourcesSuccess$Runtime>;
var ListMcpResourcesSuccess: MessageType<ListMcpResourcesSuccess> = ListMcpResourcesSuccess$Runtime as unknown as MessageType<ListMcpResourcesSuccess>;
(ListMcpResourcesSuccess as MutableMessageType<ListMcpResourcesSuccess>).runtime = proto3;
(ListMcpResourcesSuccess as MutableMessageType<ListMcpResourcesSuccess>).typeName = "agent.v1.ListMcpResourcesSuccess";
(ListMcpResourcesSuccess as MutableMessageType<ListMcpResourcesSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "resources", kind: "message", T: ListMcpResourcesExecResult_McpResource, repeated: true }
]);
var ListMcpResourcesError$Runtime = (() => class _ListMcpResourcesError extends Message<_ListMcpResourcesError> {
  declare error: string;
  constructor(data?: PartialMessage<_ListMcpResourcesError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ListMcpResourcesError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesError {
    return new _ListMcpResourcesError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesError {
    return new _ListMcpResourcesError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesError {
    return new _ListMcpResourcesError().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesError | PlainMessage<_ListMcpResourcesError> | undefined | null, b2: _ListMcpResourcesError | PlainMessage<_ListMcpResourcesError> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesError as unknown as MessageType<_ListMcpResourcesError>, a, b2);
  }
})();
export type ListMcpResourcesError = InstanceType<typeof ListMcpResourcesError$Runtime>;
var ListMcpResourcesError: MessageType<ListMcpResourcesError> = ListMcpResourcesError$Runtime as unknown as MessageType<ListMcpResourcesError>;
(ListMcpResourcesError as MutableMessageType<ListMcpResourcesError>).runtime = proto3;
(ListMcpResourcesError as MutableMessageType<ListMcpResourcesError>).typeName = "agent.v1.ListMcpResourcesError";
(ListMcpResourcesError as MutableMessageType<ListMcpResourcesError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListMcpResourcesRejected$Runtime = (() => class _ListMcpResourcesRejected extends Message<_ListMcpResourcesRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_ListMcpResourcesRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _ListMcpResourcesRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesRejected {
    return new _ListMcpResourcesRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesRejected {
    return new _ListMcpResourcesRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesRejected {
    return new _ListMcpResourcesRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesRejected | PlainMessage<_ListMcpResourcesRejected> | undefined | null, b2: _ListMcpResourcesRejected | PlainMessage<_ListMcpResourcesRejected> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesRejected as unknown as MessageType<_ListMcpResourcesRejected>, a, b2);
  }
})();
export type ListMcpResourcesRejected = InstanceType<typeof ListMcpResourcesRejected$Runtime>;
var ListMcpResourcesRejected: MessageType<ListMcpResourcesRejected> = ListMcpResourcesRejected$Runtime as unknown as MessageType<ListMcpResourcesRejected>;
(ListMcpResourcesRejected as MutableMessageType<ListMcpResourcesRejected>).runtime = proto3;
(ListMcpResourcesRejected as MutableMessageType<ListMcpResourcesRejected>).typeName = "agent.v1.ListMcpResourcesRejected";
(ListMcpResourcesRejected as MutableMessageType<ListMcpResourcesRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadMcpResourceExecArgs$Runtime = (() => class _ReadMcpResourceExecArgs extends Message<_ReadMcpResourceExecArgs> {
  declare server: string;
  declare uri: string;
  declare downloadPath?: string;
  declare toolCallId: string;
  declare smartModeApproval?: SmartModeApproval;
  constructor(data?: PartialMessage<_ReadMcpResourceExecArgs>) {
    super();
    this.server = "";
    this.uri = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ReadMcpResourceExecArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceExecArgs {
    return new _ReadMcpResourceExecArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceExecArgs {
    return new _ReadMcpResourceExecArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceExecArgs {
    return new _ReadMcpResourceExecArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceExecArgs | PlainMessage<_ReadMcpResourceExecArgs> | undefined | null, b2: _ReadMcpResourceExecArgs | PlainMessage<_ReadMcpResourceExecArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceExecArgs as unknown as MessageType<_ReadMcpResourceExecArgs>, a, b2);
  }
})();
export type ReadMcpResourceExecArgs = InstanceType<typeof ReadMcpResourceExecArgs$Runtime>;
var ReadMcpResourceExecArgs: MessageType<ReadMcpResourceExecArgs> = ReadMcpResourceExecArgs$Runtime as unknown as MessageType<ReadMcpResourceExecArgs>;
(ReadMcpResourceExecArgs as MutableMessageType<ReadMcpResourceExecArgs>).runtime = proto3;
(ReadMcpResourceExecArgs as MutableMessageType<ReadMcpResourceExecArgs>).typeName = "agent.v1.ReadMcpResourceExecArgs";
(ReadMcpResourceExecArgs as MutableMessageType<ReadMcpResourceExecArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true }
]);
var ReadMcpResourceExecResult$Runtime = (() => class _ReadMcpResourceExecResult extends Message<_ReadMcpResourceExecResult> {
  declare result: { case: "success"; value: ReadMcpResourceSuccess } | { case: "error"; value: ReadMcpResourceError } | { case: "rejected"; value: ReadMcpResourceRejected } | { case: "notFound"; value: ReadMcpResourceNotFound } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadMcpResourceExecResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadMcpResourceExecResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceExecResult {
    return new _ReadMcpResourceExecResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceExecResult {
    return new _ReadMcpResourceExecResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceExecResult {
    return new _ReadMcpResourceExecResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceExecResult | PlainMessage<_ReadMcpResourceExecResult> | undefined | null, b2: _ReadMcpResourceExecResult | PlainMessage<_ReadMcpResourceExecResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceExecResult as unknown as MessageType<_ReadMcpResourceExecResult>, a, b2);
  }
})();
export type ReadMcpResourceExecResult = InstanceType<typeof ReadMcpResourceExecResult$Runtime>;
var ReadMcpResourceExecResult: MessageType<ReadMcpResourceExecResult> = ReadMcpResourceExecResult$Runtime as unknown as MessageType<ReadMcpResourceExecResult>;
(ReadMcpResourceExecResult as MutableMessageType<ReadMcpResourceExecResult>).runtime = proto3;
(ReadMcpResourceExecResult as MutableMessageType<ReadMcpResourceExecResult>).typeName = "agent.v1.ReadMcpResourceExecResult";
(ReadMcpResourceExecResult as MutableMessageType<ReadMcpResourceExecResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadMcpResourceSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadMcpResourceError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: ReadMcpResourceRejected, oneof: "result" },
  { no: 4, name: "not_found", kind: "message", T: ReadMcpResourceNotFound, oneof: "result" }
]);
var ReadMcpResourceSuccess$Runtime = (() => class _ReadMcpResourceSuccess extends Message<_ReadMcpResourceSuccess> {
  declare uri: string;
  declare name?: string;
  declare description?: string;
  declare mimeType?: string;
  declare annotations: { [key: string]: string };
  declare downloadPath?: string;
  declare outputLocation?: OutputLocation;
  declare content: { case: "text"; value: string } | { case: "blob"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadMcpResourceSuccess>) {
    super();
    this.uri = "";
    this.content = { case: void 0 };
    this.annotations = {};
    proto3.util.initPartial(data, this as _ReadMcpResourceSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceSuccess {
    return new _ReadMcpResourceSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceSuccess {
    return new _ReadMcpResourceSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceSuccess {
    return new _ReadMcpResourceSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceSuccess | PlainMessage<_ReadMcpResourceSuccess> | undefined | null, b2: _ReadMcpResourceSuccess | PlainMessage<_ReadMcpResourceSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceSuccess as unknown as MessageType<_ReadMcpResourceSuccess>, a, b2);
  }
})();
export type ReadMcpResourceSuccess = InstanceType<typeof ReadMcpResourceSuccess$Runtime>;
var ReadMcpResourceSuccess: MessageType<ReadMcpResourceSuccess> = ReadMcpResourceSuccess$Runtime as unknown as MessageType<ReadMcpResourceSuccess>;
(ReadMcpResourceSuccess as MutableMessageType<ReadMcpResourceSuccess>).runtime = proto3;
(ReadMcpResourceSuccess as MutableMessageType<ReadMcpResourceSuccess>).typeName = "agent.v1.ReadMcpResourceSuccess";
(ReadMcpResourceSuccess as MutableMessageType<ReadMcpResourceSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" },
  { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" },
  { no: 7, name: "annotations", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 8, name: "download_path", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "output_location", kind: "message", T: OutputLocation, opt: true }
]);
var ReadMcpResourceError$Runtime = (() => class _ReadMcpResourceError extends Message<_ReadMcpResourceError> {
  declare uri: string;
  declare error: string;
  constructor(data?: PartialMessage<_ReadMcpResourceError>) {
    super();
    this.uri = "";
    this.error = "";
    proto3.util.initPartial(data, this as _ReadMcpResourceError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceError {
    return new _ReadMcpResourceError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceError {
    return new _ReadMcpResourceError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceError {
    return new _ReadMcpResourceError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceError | PlainMessage<_ReadMcpResourceError> | undefined | null, b2: _ReadMcpResourceError | PlainMessage<_ReadMcpResourceError> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceError as unknown as MessageType<_ReadMcpResourceError>, a, b2);
  }
})();
export type ReadMcpResourceError = InstanceType<typeof ReadMcpResourceError$Runtime>;
var ReadMcpResourceError: MessageType<ReadMcpResourceError> = ReadMcpResourceError$Runtime as unknown as MessageType<ReadMcpResourceError>;
(ReadMcpResourceError as MutableMessageType<ReadMcpResourceError>).runtime = proto3;
(ReadMcpResourceError as MutableMessageType<ReadMcpResourceError>).typeName = "agent.v1.ReadMcpResourceError";
(ReadMcpResourceError as MutableMessageType<ReadMcpResourceError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
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
var ReadMcpResourceRejected$Runtime = (() => class _ReadMcpResourceRejected extends Message<_ReadMcpResourceRejected> {
  declare uri: string;
  declare reason: string;
  constructor(data?: PartialMessage<_ReadMcpResourceRejected>) {
    super();
    this.uri = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _ReadMcpResourceRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceRejected {
    return new _ReadMcpResourceRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceRejected {
    return new _ReadMcpResourceRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceRejected {
    return new _ReadMcpResourceRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceRejected | PlainMessage<_ReadMcpResourceRejected> | undefined | null, b2: _ReadMcpResourceRejected | PlainMessage<_ReadMcpResourceRejected> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceRejected as unknown as MessageType<_ReadMcpResourceRejected>, a, b2);
  }
})();
export type ReadMcpResourceRejected = InstanceType<typeof ReadMcpResourceRejected$Runtime>;
var ReadMcpResourceRejected: MessageType<ReadMcpResourceRejected> = ReadMcpResourceRejected$Runtime as unknown as MessageType<ReadMcpResourceRejected>;
(ReadMcpResourceRejected as MutableMessageType<ReadMcpResourceRejected>).runtime = proto3;
(ReadMcpResourceRejected as MutableMessageType<ReadMcpResourceRejected>).typeName = "agent.v1.ReadMcpResourceRejected";
(ReadMcpResourceRejected as MutableMessageType<ReadMcpResourceRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
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
var ReadMcpResourceNotFound$Runtime = (() => class _ReadMcpResourceNotFound extends Message<_ReadMcpResourceNotFound> {
  declare uri: string;
  constructor(data?: PartialMessage<_ReadMcpResourceNotFound>) {
    super();
    this.uri = "";
    proto3.util.initPartial(data, this as _ReadMcpResourceNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceNotFound {
    return new _ReadMcpResourceNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceNotFound {
    return new _ReadMcpResourceNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceNotFound {
    return new _ReadMcpResourceNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceNotFound | PlainMessage<_ReadMcpResourceNotFound> | undefined | null, b2: _ReadMcpResourceNotFound | PlainMessage<_ReadMcpResourceNotFound> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceNotFound as unknown as MessageType<_ReadMcpResourceNotFound>, a, b2);
  }
})();
export type ReadMcpResourceNotFound = InstanceType<typeof ReadMcpResourceNotFound$Runtime>;
var ReadMcpResourceNotFound: MessageType<ReadMcpResourceNotFound> = ReadMcpResourceNotFound$Runtime as unknown as MessageType<ReadMcpResourceNotFound>;
(ReadMcpResourceNotFound as MutableMessageType<ReadMcpResourceNotFound>).runtime = proto3;
(ReadMcpResourceNotFound as MutableMessageType<ReadMcpResourceNotFound>).typeName = "agent.v1.ReadMcpResourceNotFound";
(ReadMcpResourceNotFound as MutableMessageType<ReadMcpResourceNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { McpArgs, McpResult, McpApproved, McpToolNotFound, McpServerNotFound, McpTextContent, McpImageContent, McpToolResultContentItem, McpSuccess, McpError, McpRejected, McpPermissionDenied, McpStateExecArgs, McpStateExecResult, McpStateServer, McpStateSuccess, McpStateError, McpStateRejected, ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ListMcpResourcesExecResult_McpResource, ListMcpResourcesSuccess, ListMcpResourcesError, ListMcpResourcesRejected, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, ReadMcpResourceSuccess, ReadMcpResourceError, ReadMcpResourceRejected, ReadMcpResourceNotFound };
