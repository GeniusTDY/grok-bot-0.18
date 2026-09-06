/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:15956-16303
 * Region SHA-256: 71337cbcea5793a00fb53598934683dc941df62aaf8fb7a751889cf606e8ff34
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var LsArgs$Runtime = (() => class _LsArgs extends Message<_LsArgs> {
  declare path: string;
  declare ignore: string[];
  declare toolCallId: string;
  declare sandboxPolicy?: SandboxPolicy;
  declare timeoutMs?: number;
  constructor(data?: PartialMessage<_LsArgs>) {
    super();
    this.path = "";
    this.ignore = [];
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _LsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsArgs {
    return new _LsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsArgs {
    return new _LsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsArgs {
    return new _LsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _LsArgs | PlainMessage<_LsArgs> | undefined | null, b2: _LsArgs | PlainMessage<_LsArgs> | undefined | null): boolean {
    return proto3.util.equals(_LsArgs as unknown as MessageType<_LsArgs>, a, b2);
  }
})();
export type LsArgs = InstanceType<typeof LsArgs$Runtime>;
var LsArgs: MessageType<LsArgs> = LsArgs$Runtime as unknown as MessageType<LsArgs>;
(LsArgs as MutableMessageType<LsArgs>).runtime = proto3;
(LsArgs as MutableMessageType<LsArgs>).typeName = "agent.v1.LsArgs";
(LsArgs as MutableMessageType<LsArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "ignore", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 5, name: "timeout_ms", kind: "scalar", T: 13, opt: true }
]);
var LsResult$Runtime = (() => class _LsResult extends Message<_LsResult> {
  declare result: { case: "success"; value: LsSuccess } | { case: "error"; value: LsError } | { case: "rejected"; value: LsRejected } | { case: "timeout"; value: LsTimeout } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_LsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _LsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsResult {
    return new _LsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsResult {
    return new _LsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsResult {
    return new _LsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _LsResult | PlainMessage<_LsResult> | undefined | null, b2: _LsResult | PlainMessage<_LsResult> | undefined | null): boolean {
    return proto3.util.equals(_LsResult as unknown as MessageType<_LsResult>, a, b2);
  }
})();
export type LsResult = InstanceType<typeof LsResult$Runtime>;
var LsResult: MessageType<LsResult> = LsResult$Runtime as unknown as MessageType<LsResult>;
(LsResult as MutableMessageType<LsResult>).runtime = proto3;
(LsResult as MutableMessageType<LsResult>).typeName = "agent.v1.LsResult";
(LsResult as MutableMessageType<LsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: LsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: LsError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: LsRejected, oneof: "result" },
  { no: 4, name: "timeout", kind: "message", T: LsTimeout, oneof: "result" }
]);
var LsSuccess$Runtime = (() => class _LsSuccess extends Message<_LsSuccess> {
  declare directoryTreeRoot?: LsDirectoryTreeNode;
  constructor(data?: PartialMessage<_LsSuccess>) {
    super();
    proto3.util.initPartial(data, this as _LsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsSuccess {
    return new _LsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsSuccess {
    return new _LsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsSuccess {
    return new _LsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _LsSuccess | PlainMessage<_LsSuccess> | undefined | null, b2: _LsSuccess | PlainMessage<_LsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_LsSuccess as unknown as MessageType<_LsSuccess>, a, b2);
  }
})();
export type LsSuccess = InstanceType<typeof LsSuccess$Runtime>;
var LsSuccess: MessageType<LsSuccess> = LsSuccess$Runtime as unknown as MessageType<LsSuccess>;
(LsSuccess as MutableMessageType<LsSuccess>).runtime = proto3;
(LsSuccess as MutableMessageType<LsSuccess>).typeName = "agent.v1.LsSuccess";
(LsSuccess as MutableMessageType<LsSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directory_tree_root", kind: "message", T: LsDirectoryTreeNode }
]);
var LsDirectoryTreeNode$Runtime = (() => class _LsDirectoryTreeNode extends Message<_LsDirectoryTreeNode> {
  declare absPath: string;
  declare childrenDirs: _LsDirectoryTreeNode[];
  declare childrenFiles: LsDirectoryTreeNode_File[];
  declare childrenWereProcessed: boolean;
  declare fullSubtreeExtensionCounts: { [key: string]: number };
  declare numFiles: number;
  constructor(data?: PartialMessage<_LsDirectoryTreeNode>) {
    super();
    this.absPath = "";
    this.childrenDirs = [];
    this.childrenFiles = [];
    this.childrenWereProcessed = false;
    this.fullSubtreeExtensionCounts = {};
    this.numFiles = 0;
    proto3.util.initPartial(data, this as _LsDirectoryTreeNode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsDirectoryTreeNode {
    return new _LsDirectoryTreeNode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsDirectoryTreeNode {
    return new _LsDirectoryTreeNode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsDirectoryTreeNode {
    return new _LsDirectoryTreeNode().fromJsonString(jsonString, options);
  }
  static equals(a: _LsDirectoryTreeNode | PlainMessage<_LsDirectoryTreeNode> | undefined | null, b2: _LsDirectoryTreeNode | PlainMessage<_LsDirectoryTreeNode> | undefined | null): boolean {
    return proto3.util.equals(_LsDirectoryTreeNode as unknown as MessageType<_LsDirectoryTreeNode>, a, b2);
  }
})();
export type LsDirectoryTreeNode = InstanceType<typeof LsDirectoryTreeNode$Runtime>;
var LsDirectoryTreeNode: MessageType<LsDirectoryTreeNode> = LsDirectoryTreeNode$Runtime as unknown as MessageType<LsDirectoryTreeNode>;
(LsDirectoryTreeNode as MutableMessageType<LsDirectoryTreeNode>).runtime = proto3;
(LsDirectoryTreeNode as MutableMessageType<LsDirectoryTreeNode>).typeName = "agent.v1.LsDirectoryTreeNode";
(LsDirectoryTreeNode as MutableMessageType<LsDirectoryTreeNode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "abs_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "children_dirs", kind: "message", T: LsDirectoryTreeNode, repeated: true },
  { no: 3, name: "children_files", kind: "message", T: LsDirectoryTreeNode_File, repeated: true },
  {
    no: 4,
    name: "children_were_processed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  } },
  {
    no: 6,
    name: "num_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var LsDirectoryTreeNode_File$Runtime = (() => class _LsDirectoryTreeNode_File extends Message<_LsDirectoryTreeNode_File> {
  declare name: string;
  declare terminalMetadata?: TerminalMetadata;
  constructor(data?: PartialMessage<_LsDirectoryTreeNode_File>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _LsDirectoryTreeNode_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsDirectoryTreeNode_File {
    return new _LsDirectoryTreeNode_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsDirectoryTreeNode_File {
    return new _LsDirectoryTreeNode_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsDirectoryTreeNode_File {
    return new _LsDirectoryTreeNode_File().fromJsonString(jsonString, options);
  }
  static equals(a: _LsDirectoryTreeNode_File | PlainMessage<_LsDirectoryTreeNode_File> | undefined | null, b2: _LsDirectoryTreeNode_File | PlainMessage<_LsDirectoryTreeNode_File> | undefined | null): boolean {
    return proto3.util.equals(_LsDirectoryTreeNode_File as unknown as MessageType<_LsDirectoryTreeNode_File>, a, b2);
  }
})();
export type LsDirectoryTreeNode_File = InstanceType<typeof LsDirectoryTreeNode_File$Runtime>;
var LsDirectoryTreeNode_File: MessageType<LsDirectoryTreeNode_File> = LsDirectoryTreeNode_File$Runtime as unknown as MessageType<LsDirectoryTreeNode_File>;
(LsDirectoryTreeNode_File as MutableMessageType<LsDirectoryTreeNode_File>).runtime = proto3;
(LsDirectoryTreeNode_File as MutableMessageType<LsDirectoryTreeNode_File>).typeName = "agent.v1.LsDirectoryTreeNode.File";
(LsDirectoryTreeNode_File as MutableMessageType<LsDirectoryTreeNode_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "terminal_metadata", kind: "message", T: TerminalMetadata, opt: true }
]);
var LsError$Runtime = (() => class _LsError extends Message<_LsError> {
  declare path: string;
  declare error: string;
  constructor(data?: PartialMessage<_LsError>) {
    super();
    this.path = "";
    this.error = "";
    proto3.util.initPartial(data, this as _LsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsError {
    return new _LsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsError {
    return new _LsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsError {
    return new _LsError().fromJsonString(jsonString, options);
  }
  static equals(a: _LsError | PlainMessage<_LsError> | undefined | null, b2: _LsError | PlainMessage<_LsError> | undefined | null): boolean {
    return proto3.util.equals(_LsError as unknown as MessageType<_LsError>, a, b2);
  }
})();
export type LsError = InstanceType<typeof LsError$Runtime>;
var LsError: MessageType<LsError> = LsError$Runtime as unknown as MessageType<LsError>;
(LsError as MutableMessageType<LsError>).runtime = proto3;
(LsError as MutableMessageType<LsError>).typeName = "agent.v1.LsError";
(LsError as MutableMessageType<LsError>).fields = proto3.util.newFieldList(() => [
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
var LsRejected$Runtime = (() => class _LsRejected extends Message<_LsRejected> {
  declare path: string;
  declare reason: string;
  constructor(data?: PartialMessage<_LsRejected>) {
    super();
    this.path = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _LsRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsRejected {
    return new _LsRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsRejected {
    return new _LsRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsRejected {
    return new _LsRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _LsRejected | PlainMessage<_LsRejected> | undefined | null, b2: _LsRejected | PlainMessage<_LsRejected> | undefined | null): boolean {
    return proto3.util.equals(_LsRejected as unknown as MessageType<_LsRejected>, a, b2);
  }
})();
export type LsRejected = InstanceType<typeof LsRejected$Runtime>;
var LsRejected: MessageType<LsRejected> = LsRejected$Runtime as unknown as MessageType<LsRejected>;
(LsRejected as MutableMessageType<LsRejected>).runtime = proto3;
(LsRejected as MutableMessageType<LsRejected>).typeName = "agent.v1.LsRejected";
(LsRejected as MutableMessageType<LsRejected>).fields = proto3.util.newFieldList(() => [
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
var LsTimeout$Runtime = (() => class _LsTimeout extends Message<_LsTimeout> {
  declare directoryTreeRoot?: LsDirectoryTreeNode;
  constructor(data?: PartialMessage<_LsTimeout>) {
    super();
    proto3.util.initPartial(data, this as _LsTimeout);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsTimeout {
    return new _LsTimeout().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsTimeout {
    return new _LsTimeout().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsTimeout {
    return new _LsTimeout().fromJsonString(jsonString, options);
  }
  static equals(a: _LsTimeout | PlainMessage<_LsTimeout> | undefined | null, b2: _LsTimeout | PlainMessage<_LsTimeout> | undefined | null): boolean {
    return proto3.util.equals(_LsTimeout as unknown as MessageType<_LsTimeout>, a, b2);
  }
})();
export type LsTimeout = InstanceType<typeof LsTimeout$Runtime>;
var LsTimeout: MessageType<LsTimeout> = LsTimeout$Runtime as unknown as MessageType<LsTimeout>;
(LsTimeout as MutableMessageType<LsTimeout>).runtime = proto3;
(LsTimeout as MutableMessageType<LsTimeout>).typeName = "agent.v1.LsTimeout";
(LsTimeout as MutableMessageType<LsTimeout>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directory_tree_root", kind: "message", T: LsDirectoryTreeNode }
]);
var TerminalMetadata$Runtime = (() => class _TerminalMetadata extends Message<_TerminalMetadata> {
  declare cwd?: string;
  declare lastCommands: TerminalMetadata_Command[];
  declare lastModifiedMs?: bigint;
  declare currentCommand?: TerminalMetadata_Command;
  constructor(data?: PartialMessage<_TerminalMetadata>) {
    super();
    this.lastCommands = [];
    proto3.util.initPartial(data, this as _TerminalMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalMetadata {
    return new _TerminalMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalMetadata {
    return new _TerminalMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalMetadata {
    return new _TerminalMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalMetadata | PlainMessage<_TerminalMetadata> | undefined | null, b2: _TerminalMetadata | PlainMessage<_TerminalMetadata> | undefined | null): boolean {
    return proto3.util.equals(_TerminalMetadata as unknown as MessageType<_TerminalMetadata>, a, b2);
  }
})();
export type TerminalMetadata = InstanceType<typeof TerminalMetadata$Runtime>;
var TerminalMetadata: MessageType<TerminalMetadata> = TerminalMetadata$Runtime as unknown as MessageType<TerminalMetadata>;
(TerminalMetadata as MutableMessageType<TerminalMetadata>).runtime = proto3;
(TerminalMetadata as MutableMessageType<TerminalMetadata>).typeName = "agent.v1.TerminalMetadata";
(TerminalMetadata as MutableMessageType<TerminalMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cwd", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "last_commands", kind: "message", T: TerminalMetadata_Command, repeated: true },
  { no: 3, name: "last_modified_ms", kind: "scalar", T: 3, opt: true },
  { no: 4, name: "current_command", kind: "message", T: TerminalMetadata_Command, opt: true }
]);
var TerminalMetadata_Command$Runtime = (() => class _TerminalMetadata_Command extends Message<_TerminalMetadata_Command> {
  declare command: string;
  declare exitCode?: number;
  declare timestampMs?: bigint;
  declare durationMs?: bigint;
  constructor(data?: PartialMessage<_TerminalMetadata_Command>) {
    super();
    this.command = "";
    proto3.util.initPartial(data, this as _TerminalMetadata_Command);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalMetadata_Command {
    return new _TerminalMetadata_Command().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalMetadata_Command {
    return new _TerminalMetadata_Command().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalMetadata_Command {
    return new _TerminalMetadata_Command().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalMetadata_Command | PlainMessage<_TerminalMetadata_Command> | undefined | null, b2: _TerminalMetadata_Command | PlainMessage<_TerminalMetadata_Command> | undefined | null): boolean {
    return proto3.util.equals(_TerminalMetadata_Command as unknown as MessageType<_TerminalMetadata_Command>, a, b2);
  }
})();
export type TerminalMetadata_Command = InstanceType<typeof TerminalMetadata_Command$Runtime>;
var TerminalMetadata_Command: MessageType<TerminalMetadata_Command> = TerminalMetadata_Command$Runtime as unknown as MessageType<TerminalMetadata_Command>;
(TerminalMetadata_Command as MutableMessageType<TerminalMetadata_Command>).runtime = proto3;
(TerminalMetadata_Command as MutableMessageType<TerminalMetadata_Command>).typeName = "agent.v1.TerminalMetadata.Command";
(TerminalMetadata_Command as MutableMessageType<TerminalMetadata_Command>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "timestamp_ms", kind: "scalar", T: 3, opt: true },
  { no: 4, name: "duration_ms", kind: "scalar", T: 3, opt: true }
]);


export { LsArgs, LsResult, LsSuccess, LsDirectoryTreeNode, LsDirectoryTreeNode_File, LsError, LsRejected, LsTimeout, TerminalMetadata, TerminalMetadata_Command };
