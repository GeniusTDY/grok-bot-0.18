/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:17924-19112
 * Region SHA-256: e2cf186358d14dcd41ccaabc07de12e4f0a781e307401b854a57dd0bf6ff2b35
 * Atomic B1 exports: 27 messages + 1 enums = 28
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { PackageType } from "./cursor_packages_pb.js";
import { CursorRule } from "./cursor_rules_pb.js";
import { RepositoryIndexingInfo } from "./repo_pb.js";
import { McpToolDefinition, McpInstructions, McpFileSystemOptions, McpMetaToolOptions } from "./mcp_pb.js";
import { LsDirectoryTreeNode } from "./ls_exec_pb.js";
import { CustomSubagent } from "./subagents_pb.js";
import { AgentSkill } from "./agent_skills_pb.js";
import { SystemPromptSpec } from "./system_prompt_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type MountedAgentStoreKind = 0 | 1 | 2 | 3 | 4;
var MountedAgentStoreKind: {
  "UNSPECIFIED": 0;
  "SELF": 1;
  "PEER": 2;
  "SHARE": 3;
  "PRINCIPAL": 4;
  0: "UNSPECIFIED";
  1: "SELF";
  2: "PEER";
  3: "SHARE";
  4: "PRINCIPAL";
};
(function(MountedAgentStoreKind2) {
  MountedAgentStoreKind2[MountedAgentStoreKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  MountedAgentStoreKind2[MountedAgentStoreKind2["SELF"] = 1] = "SELF";
  MountedAgentStoreKind2[MountedAgentStoreKind2["PEER"] = 2] = "PEER";
  MountedAgentStoreKind2[MountedAgentStoreKind2["SHARE"] = 3] = "SHARE";
  MountedAgentStoreKind2[MountedAgentStoreKind2["PRINCIPAL"] = 4] = "PRINCIPAL";
})(MountedAgentStoreKind! || (MountedAgentStoreKind = {} as typeof MountedAgentStoreKind));
proto3.util.setEnumType(MountedAgentStoreKind, "agent.v1.MountedAgentStoreKind", [
  { no: 0, name: "MOUNTED_AGENT_STORE_KIND_UNSPECIFIED" },
  { no: 1, name: "MOUNTED_AGENT_STORE_KIND_SELF" },
  { no: 2, name: "MOUNTED_AGENT_STORE_KIND_PEER" },
  { no: 3, name: "MOUNTED_AGENT_STORE_KIND_SHARE" },
  { no: 4, name: "MOUNTED_AGENT_STORE_KIND_PRINCIPAL" }
]);
var RequestContextArgs$Runtime = (() => class _RequestContextArgs extends Message<_RequestContextArgs> {
  declare notesSessionId?: string;
  declare workspaceId?: string;
  declare readOnlyPinnedTreeSha?: string;
  declare readOnlyPluginCacheRoot?: string;
  declare useCached?: boolean;
  constructor(data?: PartialMessage<_RequestContextArgs>) {
    super();
    proto3.util.initPartial(data, this as _RequestContextArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextArgs {
    return new _RequestContextArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextArgs {
    return new _RequestContextArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextArgs {
    return new _RequestContextArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextArgs | PlainMessage<_RequestContextArgs> | undefined | null, b2: _RequestContextArgs | PlainMessage<_RequestContextArgs> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextArgs as unknown as MessageType<_RequestContextArgs>, a, b2);
  }
})();
export type RequestContextArgs = InstanceType<typeof RequestContextArgs$Runtime>;
var RequestContextArgs: MessageType<RequestContextArgs> = RequestContextArgs$Runtime as unknown as MessageType<RequestContextArgs>;
(RequestContextArgs as MutableMessageType<RequestContextArgs>).runtime = proto3;
(RequestContextArgs as MutableMessageType<RequestContextArgs>).typeName = "agent.v1.RequestContextArgs";
(RequestContextArgs as MutableMessageType<RequestContextArgs>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "notes_session_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "workspace_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "read_only_pinned_tree_sha", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "read_only_plugin_cache_root", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "use_cached", kind: "scalar", T: 8, opt: true }
]);
var RequestContextResult$Runtime = (() => class _RequestContextResult extends Message<_RequestContextResult> {
  declare result: { case: "success"; value: RequestContextSuccess } | { case: "error"; value: RequestContextError } | { case: "rejected"; value: RequestContextRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RequestContextResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RequestContextResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextResult {
    return new _RequestContextResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextResult {
    return new _RequestContextResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextResult {
    return new _RequestContextResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextResult | PlainMessage<_RequestContextResult> | undefined | null, b2: _RequestContextResult | PlainMessage<_RequestContextResult> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextResult as unknown as MessageType<_RequestContextResult>, a, b2);
  }
})();
export type RequestContextResult = InstanceType<typeof RequestContextResult$Runtime>;
var RequestContextResult: MessageType<RequestContextResult> = RequestContextResult$Runtime as unknown as MessageType<RequestContextResult>;
(RequestContextResult as MutableMessageType<RequestContextResult>).runtime = proto3;
(RequestContextResult as MutableMessageType<RequestContextResult>).typeName = "agent.v1.RequestContextResult";
(RequestContextResult as MutableMessageType<RequestContextResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: RequestContextSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: RequestContextError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: RequestContextRejected, oneof: "result" }
]);
var RequestContextSuccess$Runtime = (() => class _RequestContextSuccess extends Message<_RequestContextSuccess> {
  declare requestContext?: RequestContext;
  declare servedFromDiskCache?: boolean;
  constructor(data?: PartialMessage<_RequestContextSuccess>) {
    super();
    proto3.util.initPartial(data, this as _RequestContextSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextSuccess {
    return new _RequestContextSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextSuccess {
    return new _RequestContextSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextSuccess {
    return new _RequestContextSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextSuccess | PlainMessage<_RequestContextSuccess> | undefined | null, b2: _RequestContextSuccess | PlainMessage<_RequestContextSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextSuccess as unknown as MessageType<_RequestContextSuccess>, a, b2);
  }
})();
export type RequestContextSuccess = InstanceType<typeof RequestContextSuccess$Runtime>;
var RequestContextSuccess: MessageType<RequestContextSuccess> = RequestContextSuccess$Runtime as unknown as MessageType<RequestContextSuccess>;
(RequestContextSuccess as MutableMessageType<RequestContextSuccess>).runtime = proto3;
(RequestContextSuccess as MutableMessageType<RequestContextSuccess>).typeName = "agent.v1.RequestContextSuccess";
(RequestContextSuccess as MutableMessageType<RequestContextSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request_context", kind: "message", T: RequestContext },
  { no: 2, name: "served_from_disk_cache", kind: "scalar", T: 8, opt: true }
]);
var RequestContextError$Runtime = (() => class _RequestContextError extends Message<_RequestContextError> {
  declare error: string;
  constructor(data?: PartialMessage<_RequestContextError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _RequestContextError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextError {
    return new _RequestContextError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextError {
    return new _RequestContextError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextError {
    return new _RequestContextError().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextError | PlainMessage<_RequestContextError> | undefined | null, b2: _RequestContextError | PlainMessage<_RequestContextError> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextError as unknown as MessageType<_RequestContextError>, a, b2);
  }
})();
export type RequestContextError = InstanceType<typeof RequestContextError$Runtime>;
var RequestContextError: MessageType<RequestContextError> = RequestContextError$Runtime as unknown as MessageType<RequestContextError>;
(RequestContextError as MutableMessageType<RequestContextError>).runtime = proto3;
(RequestContextError as MutableMessageType<RequestContextError>).typeName = "agent.v1.RequestContextError";
(RequestContextError as MutableMessageType<RequestContextError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RequestContextRejected$Runtime = (() => class _RequestContextRejected extends Message<_RequestContextRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_RequestContextRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _RequestContextRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextRejected {
    return new _RequestContextRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextRejected {
    return new _RequestContextRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextRejected {
    return new _RequestContextRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextRejected | PlainMessage<_RequestContextRejected> | undefined | null, b2: _RequestContextRejected | PlainMessage<_RequestContextRejected> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextRejected as unknown as MessageType<_RequestContextRejected>, a, b2);
  }
})();
export type RequestContextRejected = InstanceType<typeof RequestContextRejected$Runtime>;
var RequestContextRejected: MessageType<RequestContextRejected> = RequestContextRejected$Runtime as unknown as MessageType<RequestContextRejected>;
(RequestContextRejected as MutableMessageType<RequestContextRejected>).runtime = proto3;
(RequestContextRejected as MutableMessageType<RequestContextRejected>).typeName = "agent.v1.RequestContextRejected";
(RequestContextRejected as MutableMessageType<RequestContextRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImageProto$Runtime = (() => class _ImageProto extends Message<_ImageProto> {
  declare data: Uint8Array;
  declare uuid: string;
  declare path: string;
  declare dimension?: ImageProto_Dimension;
  declare taskSpecificDescription?: string;
  declare mimeType: string;
  constructor(data?: PartialMessage<_ImageProto>) {
    super();
    this.data = new Uint8Array(0);
    this.uuid = "";
    this.path = "";
    this.mimeType = "";
    proto3.util.initPartial(data, this as _ImageProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageProto {
    return new _ImageProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageProto {
    return new _ImageProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageProto {
    return new _ImageProto().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageProto | PlainMessage<_ImageProto> | undefined | null, b2: _ImageProto | PlainMessage<_ImageProto> | undefined | null): boolean {
    return proto3.util.equals(_ImageProto as unknown as MessageType<_ImageProto>, a, b2);
  }
})();
export type ImageProto = InstanceType<typeof ImageProto$Runtime>;
var ImageProto: MessageType<ImageProto> = ImageProto$Runtime as unknown as MessageType<ImageProto>;
(ImageProto as MutableMessageType<ImageProto>).runtime = proto3;
(ImageProto as MutableMessageType<ImageProto>).typeName = "agent.v1.ImageProto";
(ImageProto as MutableMessageType<ImageProto>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "dimension", kind: "message", T: ImageProto_Dimension },
  { no: 6, name: "task_specific_description", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImageProto_Dimension$Runtime = (() => class _ImageProto_Dimension extends Message<_ImageProto_Dimension> {
  declare width: number;
  declare height: number;
  constructor(data?: PartialMessage<_ImageProto_Dimension>) {
    super();
    this.width = 0;
    this.height = 0;
    proto3.util.initPartial(data, this as _ImageProto_Dimension);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageProto_Dimension | PlainMessage<_ImageProto_Dimension> | undefined | null, b2: _ImageProto_Dimension | PlainMessage<_ImageProto_Dimension> | undefined | null): boolean {
    return proto3.util.equals(_ImageProto_Dimension as unknown as MessageType<_ImageProto_Dimension>, a, b2);
  }
})();
export type ImageProto_Dimension = InstanceType<typeof ImageProto_Dimension$Runtime>;
var ImageProto_Dimension: MessageType<ImageProto_Dimension> = ImageProto_Dimension$Runtime as unknown as MessageType<ImageProto_Dimension>;
(ImageProto_Dimension as MutableMessageType<ImageProto_Dimension>).runtime = proto3;
(ImageProto_Dimension as MutableMessageType<ImageProto_Dimension>).typeName = "agent.v1.ImageProto.Dimension";
(ImageProto_Dimension as MutableMessageType<ImageProto_Dimension>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "width",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "height",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GitRepoInfo$Runtime = (() => class _GitRepoInfo extends Message<_GitRepoInfo> {
  declare path: string;
  declare status: string;
  declare branchName: string;
  declare remoteUrl?: string;
  declare previousBranchIsAncestor?: boolean;
  declare isOriginBacked?: boolean;
  constructor(data?: PartialMessage<_GitRepoInfo>) {
    super();
    this.path = "";
    this.status = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _GitRepoInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitRepoInfo {
    return new _GitRepoInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitRepoInfo {
    return new _GitRepoInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitRepoInfo {
    return new _GitRepoInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _GitRepoInfo | PlainMessage<_GitRepoInfo> | undefined | null, b2: _GitRepoInfo | PlainMessage<_GitRepoInfo> | undefined | null): boolean {
    return proto3.util.equals(_GitRepoInfo as unknown as MessageType<_GitRepoInfo>, a, b2);
  }
})();
export type GitRepoInfo = InstanceType<typeof GitRepoInfo$Runtime>;
var GitRepoInfo: MessageType<GitRepoInfo> = GitRepoInfo$Runtime as unknown as MessageType<GitRepoInfo>;
(GitRepoInfo as MutableMessageType<GitRepoInfo>).runtime = proto3;
(GitRepoInfo as MutableMessageType<GitRepoInfo>).typeName = "agent.v1.GitRepoInfo";
(GitRepoInfo as MutableMessageType<GitRepoInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "remote_url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "previous_branch_is_ancestor", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "is_origin_backed", kind: "scalar", T: 8, opt: true }
]);
var RequestContextEnv$Runtime = (() => class _RequestContextEnv extends Message<_RequestContextEnv> {
  declare osVersion: string;
  declare workspacePaths: string[];
  declare shell: string;
  declare sandboxEnabled: boolean;
  declare terminalsFolder: string;
  declare agentSharedNotesFolder: string;
  declare agentConversationNotesFolder: string;
  declare timeZone: string;
  declare projectFolder: string;
  declare agentTranscriptsFolder: string;
  declare artifactsFolder?: string;
  declare sandboxSupported?: boolean;
  declare sandboxNetworkHasDefaults?: boolean;
  declare sandboxNetworkExplicitAllowlist: string[];
  declare secretRedactionEnabled?: boolean;
  declare computerUseSupported?: boolean;
  declare isWorkingDirHomeDir?: boolean;
  declare processWorkingDirectory?: string;
  declare smartModeClassifierAutoModeEnabled?: boolean;
  declare devForceNextSmartModeClassifierBlockToken?: string;
  declare devDelayNextSmartModeClassifierToken?: string;
  declare mountedAgentStores: MountedAgentStore[];
  constructor(data?: PartialMessage<_RequestContextEnv>) {
    super();
    this.osVersion = "";
    this.workspacePaths = [];
    this.shell = "";
    this.sandboxEnabled = false;
    this.terminalsFolder = "";
    this.agentSharedNotesFolder = "";
    this.agentConversationNotesFolder = "";
    this.timeZone = "";
    this.projectFolder = "";
    this.agentTranscriptsFolder = "";
    this.sandboxNetworkExplicitAllowlist = [];
    this.mountedAgentStores = [];
    proto3.util.initPartial(data, this as _RequestContextEnv);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextEnv {
    return new _RequestContextEnv().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextEnv {
    return new _RequestContextEnv().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextEnv {
    return new _RequestContextEnv().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextEnv | PlainMessage<_RequestContextEnv> | undefined | null, b2: _RequestContextEnv | PlainMessage<_RequestContextEnv> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextEnv as unknown as MessageType<_RequestContextEnv>, a, b2);
  }
})();
export type RequestContextEnv = InstanceType<typeof RequestContextEnv$Runtime>;
var RequestContextEnv: MessageType<RequestContextEnv> = RequestContextEnv$Runtime as unknown as MessageType<RequestContextEnv>;
(RequestContextEnv as MutableMessageType<RequestContextEnv>).runtime = proto3;
(RequestContextEnv as MutableMessageType<RequestContextEnv>).typeName = "agent.v1.RequestContextEnv";
(RequestContextEnv as MutableMessageType<RequestContextEnv>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "os_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "workspace_paths", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "shell",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "sandbox_enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "terminals_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "agent_shared_notes_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "agent_conversation_notes_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "time_zone",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 11,
    name: "project_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "agent_transcripts_folder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 13, name: "artifacts_folder", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "sandbox_supported", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "sandbox_network_has_defaults", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "sandbox_network_explicit_allowlist", kind: "scalar", T: 9, repeated: true },
  { no: 18, name: "secret_redaction_enabled", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "computer_use_supported", kind: "scalar", T: 8, opt: true },
  { no: 20, name: "is_working_dir_home_dir", kind: "scalar", T: 8, opt: true },
  { no: 21, name: "process_working_directory", kind: "scalar", T: 9, opt: true },
  { no: 22, name: "smart_mode_classifier_auto_mode_enabled", kind: "scalar", T: 8, opt: true },
  { no: 23, name: "dev_force_next_smart_mode_classifier_block_token", kind: "scalar", T: 9, opt: true },
  { no: 24, name: "dev_delay_next_smart_mode_classifier_token", kind: "scalar", T: 9, opt: true },
  { no: 25, name: "mounted_agent_stores", kind: "message", T: MountedAgentStore, repeated: true }
]);
var MountedAgentStore$Runtime = (() => class _MountedAgentStore extends Message<_MountedAgentStore> {
  declare path: string;
  declare kind: MountedAgentStoreKind;
  declare alias?: string;
  declare readOnly: boolean;
  constructor(data?: PartialMessage<_MountedAgentStore>) {
    super();
    this.path = "";
    this.kind = MountedAgentStoreKind.UNSPECIFIED;
    this.readOnly = false;
    proto3.util.initPartial(data, this as _MountedAgentStore);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MountedAgentStore {
    return new _MountedAgentStore().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MountedAgentStore {
    return new _MountedAgentStore().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MountedAgentStore {
    return new _MountedAgentStore().fromJsonString(jsonString, options);
  }
  static equals(a: _MountedAgentStore | PlainMessage<_MountedAgentStore> | undefined | null, b2: _MountedAgentStore | PlainMessage<_MountedAgentStore> | undefined | null): boolean {
    return proto3.util.equals(_MountedAgentStore as unknown as MessageType<_MountedAgentStore>, a, b2);
  }
})();
export type MountedAgentStore = InstanceType<typeof MountedAgentStore$Runtime>;
var MountedAgentStore: MessageType<MountedAgentStore> = MountedAgentStore$Runtime as unknown as MessageType<MountedAgentStore>;
(MountedAgentStore as MutableMessageType<MountedAgentStore>).runtime = proto3;
(MountedAgentStore as MutableMessageType<MountedAgentStore>).typeName = "agent.v1.MountedAgentStore";
(MountedAgentStore as MutableMessageType<MountedAgentStore>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(MountedAgentStoreKind) },
  { no: 3, name: "alias", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "read_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UserGitContext$Runtime = (() => class _UserGitContext extends Message<_UserGitContext> {
  declare username?: string;
  declare email?: string;
  constructor(data?: PartialMessage<_UserGitContext>) {
    super();
    proto3.util.initPartial(data, this as _UserGitContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserGitContext {
    return new _UserGitContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserGitContext {
    return new _UserGitContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserGitContext {
    return new _UserGitContext().fromJsonString(jsonString, options);
  }
  static equals(a: _UserGitContext | PlainMessage<_UserGitContext> | undefined | null, b2: _UserGitContext | PlainMessage<_UserGitContext> | undefined | null): boolean {
    return proto3.util.equals(_UserGitContext as unknown as MessageType<_UserGitContext>, a, b2);
  }
})();
export type UserGitContext = InstanceType<typeof UserGitContext$Runtime>;
var UserGitContext: MessageType<UserGitContext> = UserGitContext$Runtime as unknown as MessageType<UserGitContext>;
(UserGitContext as MutableMessageType<UserGitContext>).runtime = proto3;
(UserGitContext as MutableMessageType<UserGitContext>).typeName = "agent.v1.UserGitContext";
(UserGitContext as MutableMessageType<UserGitContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "username", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "email", kind: "scalar", T: 9, opt: true }
]);
var DebugModeConfig$Runtime = (() => class _DebugModeConfig extends Message<_DebugModeConfig> {
  declare logPath: string;
  declare serverEndpoint: string;
  declare sessionId: string;
  constructor(data?: PartialMessage<_DebugModeConfig>) {
    super();
    this.logPath = "";
    this.serverEndpoint = "";
    this.sessionId = "";
    proto3.util.initPartial(data, this as _DebugModeConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DebugModeConfig {
    return new _DebugModeConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DebugModeConfig {
    return new _DebugModeConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DebugModeConfig {
    return new _DebugModeConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _DebugModeConfig | PlainMessage<_DebugModeConfig> | undefined | null, b2: _DebugModeConfig | PlainMessage<_DebugModeConfig> | undefined | null): boolean {
    return proto3.util.equals(_DebugModeConfig as unknown as MessageType<_DebugModeConfig>, a, b2);
  }
})();
export type DebugModeConfig = InstanceType<typeof DebugModeConfig$Runtime>;
var DebugModeConfig: MessageType<DebugModeConfig> = DebugModeConfig$Runtime as unknown as MessageType<DebugModeConfig>;
(DebugModeConfig as MutableMessageType<DebugModeConfig>).runtime = proto3;
(DebugModeConfig as MutableMessageType<DebugModeConfig>).typeName = "agent.v1.DebugModeConfig";
(DebugModeConfig as MutableMessageType<DebugModeConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "log_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "server_endpoint",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SkillDescriptor$Runtime = (() => class _SkillDescriptor extends Message<_SkillDescriptor> {
  declare name: string;
  declare description: string;
  declare folderPath: string;
  declare enabled: boolean;
  declare parseError?: string;
  declare readmeFilePath: string;
  declare packageType: PackageType;
  constructor(data?: PartialMessage<_SkillDescriptor>) {
    super();
    this.name = "";
    this.description = "";
    this.folderPath = "";
    this.enabled = false;
    this.readmeFilePath = "";
    this.packageType = PackageType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SkillDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SkillDescriptor {
    return new _SkillDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SkillDescriptor {
    return new _SkillDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SkillDescriptor {
    return new _SkillDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _SkillDescriptor | PlainMessage<_SkillDescriptor> | undefined | null, b2: _SkillDescriptor | PlainMessage<_SkillDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_SkillDescriptor as unknown as MessageType<_SkillDescriptor>, a, b2);
  }
})();
export type SkillDescriptor = InstanceType<typeof SkillDescriptor$Runtime>;
var SkillDescriptor: MessageType<SkillDescriptor> = SkillDescriptor$Runtime as unknown as MessageType<SkillDescriptor>;
(SkillDescriptor as MutableMessageType<SkillDescriptor>).runtime = proto3;
(SkillDescriptor as MutableMessageType<SkillDescriptor>).typeName = "agent.v1.SkillDescriptor";
(SkillDescriptor as MutableMessageType<SkillDescriptor>).fields = proto3.util.newFieldList(() => [
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
    name: "folder_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "parse_error", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "readme_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "package_type", kind: "enum", T: proto3.getEnumType(PackageType) }
]);
var SkillOptions$Runtime = (() => class _SkillOptions extends Message<_SkillOptions> {
  declare skillDescriptors: SkillDescriptor[];
  constructor(data?: PartialMessage<_SkillOptions>) {
    super();
    this.skillDescriptors = [];
    proto3.util.initPartial(data, this as _SkillOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SkillOptions {
    return new _SkillOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SkillOptions {
    return new _SkillOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SkillOptions {
    return new _SkillOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _SkillOptions | PlainMessage<_SkillOptions> | undefined | null, b2: _SkillOptions | PlainMessage<_SkillOptions> | undefined | null): boolean {
    return proto3.util.equals(_SkillOptions as unknown as MessageType<_SkillOptions>, a, b2);
  }
})();
export type SkillOptions = InstanceType<typeof SkillOptions$Runtime>;
var SkillOptions: MessageType<SkillOptions> = SkillOptions$Runtime as unknown as MessageType<SkillOptions>;
(SkillOptions as MutableMessageType<SkillOptions>).runtime = proto3;
(SkillOptions as MutableMessageType<SkillOptions>).typeName = "agent.v1.SkillOptions";
(SkillOptions as MutableMessageType<SkillOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "skill_descriptors", kind: "message", T: SkillDescriptor, repeated: true }
]);
var HooksConfigInfo$Runtime = (() => class _HooksConfigInfo extends Message<_HooksConfigInfo> {
  declare configuredSteps: string[];
  constructor(data?: PartialMessage<_HooksConfigInfo>) {
    super();
    this.configuredSteps = [];
    proto3.util.initPartial(data, this as _HooksConfigInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HooksConfigInfo {
    return new _HooksConfigInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HooksConfigInfo {
    return new _HooksConfigInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HooksConfigInfo {
    return new _HooksConfigInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _HooksConfigInfo | PlainMessage<_HooksConfigInfo> | undefined | null, b2: _HooksConfigInfo | PlainMessage<_HooksConfigInfo> | undefined | null): boolean {
    return proto3.util.equals(_HooksConfigInfo as unknown as MessageType<_HooksConfigInfo>, a, b2);
  }
})();
export type HooksConfigInfo = InstanceType<typeof HooksConfigInfo$Runtime>;
var HooksConfigInfo: MessageType<HooksConfigInfo> = HooksConfigInfo$Runtime as unknown as MessageType<HooksConfigInfo>;
(HooksConfigInfo as MutableMessageType<HooksConfigInfo>).runtime = proto3;
(HooksConfigInfo as MutableMessageType<HooksConfigInfo>).typeName = "agent.v1.HooksConfigInfo";
(HooksConfigInfo as MutableMessageType<HooksConfigInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "configured_steps", kind: "scalar", T: 9, repeated: true }
]);
var PermissionsAutoRunInstructions$Runtime = (() => class _PermissionsAutoRunInstructions extends Message<_PermissionsAutoRunInstructions> {
  declare allowInstructions: string[];
  declare blockInstructions: string[];
  constructor(data?: PartialMessage<_PermissionsAutoRunInstructions>) {
    super();
    this.allowInstructions = [];
    this.blockInstructions = [];
    proto3.util.initPartial(data, this as _PermissionsAutoRunInstructions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PermissionsAutoRunInstructions {
    return new _PermissionsAutoRunInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PermissionsAutoRunInstructions {
    return new _PermissionsAutoRunInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PermissionsAutoRunInstructions {
    return new _PermissionsAutoRunInstructions().fromJsonString(jsonString, options);
  }
  static equals(a: _PermissionsAutoRunInstructions | PlainMessage<_PermissionsAutoRunInstructions> | undefined | null, b2: _PermissionsAutoRunInstructions | PlainMessage<_PermissionsAutoRunInstructions> | undefined | null): boolean {
    return proto3.util.equals(_PermissionsAutoRunInstructions as unknown as MessageType<_PermissionsAutoRunInstructions>, a, b2);
  }
})();
export type PermissionsAutoRunInstructions = InstanceType<typeof PermissionsAutoRunInstructions$Runtime>;
var PermissionsAutoRunInstructions: MessageType<PermissionsAutoRunInstructions> = PermissionsAutoRunInstructions$Runtime as unknown as MessageType<PermissionsAutoRunInstructions>;
(PermissionsAutoRunInstructions as MutableMessageType<PermissionsAutoRunInstructions>).runtime = proto3;
(PermissionsAutoRunInstructions as MutableMessageType<PermissionsAutoRunInstructions>).typeName = "agent.v1.PermissionsAutoRunInstructions";
(PermissionsAutoRunInstructions as MutableMessageType<PermissionsAutoRunInstructions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "allow_instructions", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "block_instructions", kind: "scalar", T: 9, repeated: true }
]);
var PrecomputedHumanChangeRenderedDiff$Runtime = (() => class _PrecomputedHumanChangeRenderedDiff extends Message<_PrecomputedHumanChangeRenderedDiff> {
  declare startLineNumber: number;
  declare endLineNumberExclusive: number;
  declare beforeContextLines: string[];
  declare removedLines: string[];
  declare addedLines: string[];
  declare afterContextLines: string[];
  constructor(data?: PartialMessage<_PrecomputedHumanChangeRenderedDiff>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberExclusive = 0;
    this.beforeContextLines = [];
    this.removedLines = [];
    this.addedLines = [];
    this.afterContextLines = [];
    proto3.util.initPartial(data, this as _PrecomputedHumanChangeRenderedDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrecomputedHumanChangeRenderedDiff {
    return new _PrecomputedHumanChangeRenderedDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrecomputedHumanChangeRenderedDiff {
    return new _PrecomputedHumanChangeRenderedDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrecomputedHumanChangeRenderedDiff {
    return new _PrecomputedHumanChangeRenderedDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _PrecomputedHumanChangeRenderedDiff | PlainMessage<_PrecomputedHumanChangeRenderedDiff> | undefined | null, b2: _PrecomputedHumanChangeRenderedDiff | PlainMessage<_PrecomputedHumanChangeRenderedDiff> | undefined | null): boolean {
    return proto3.util.equals(_PrecomputedHumanChangeRenderedDiff as unknown as MessageType<_PrecomputedHumanChangeRenderedDiff>, a, b2);
  }
})();
export type PrecomputedHumanChangeRenderedDiff = InstanceType<typeof PrecomputedHumanChangeRenderedDiff$Runtime>;
var PrecomputedHumanChangeRenderedDiff: MessageType<PrecomputedHumanChangeRenderedDiff> = PrecomputedHumanChangeRenderedDiff$Runtime as unknown as MessageType<PrecomputedHumanChangeRenderedDiff>;
(PrecomputedHumanChangeRenderedDiff as MutableMessageType<PrecomputedHumanChangeRenderedDiff>).runtime = proto3;
(PrecomputedHumanChangeRenderedDiff as MutableMessageType<PrecomputedHumanChangeRenderedDiff>).typeName = "agent.v1.PrecomputedHumanChangeRenderedDiff";
(PrecomputedHumanChangeRenderedDiff as MutableMessageType<PrecomputedHumanChangeRenderedDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number_exclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "before_context_lines", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "removed_lines", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "added_lines", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "after_context_lines", kind: "scalar", T: 9, repeated: true }
]);
var PrecomputedHumanChange$Runtime = (() => class _PrecomputedHumanChange extends Message<_PrecomputedHumanChange> {
  declare path: string;
  declare renderedDiffs: PrecomputedHumanChangeRenderedDiff[];
  declare isNewFile: boolean;
  declare isDeletedFile: boolean;
  constructor(data?: PartialMessage<_PrecomputedHumanChange>) {
    super();
    this.path = "";
    this.renderedDiffs = [];
    this.isNewFile = false;
    this.isDeletedFile = false;
    proto3.util.initPartial(data, this as _PrecomputedHumanChange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrecomputedHumanChange {
    return new _PrecomputedHumanChange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrecomputedHumanChange {
    return new _PrecomputedHumanChange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrecomputedHumanChange {
    return new _PrecomputedHumanChange().fromJsonString(jsonString, options);
  }
  static equals(a: _PrecomputedHumanChange | PlainMessage<_PrecomputedHumanChange> | undefined | null, b2: _PrecomputedHumanChange | PlainMessage<_PrecomputedHumanChange> | undefined | null): boolean {
    return proto3.util.equals(_PrecomputedHumanChange as unknown as MessageType<_PrecomputedHumanChange>, a, b2);
  }
})();
export type PrecomputedHumanChange = InstanceType<typeof PrecomputedHumanChange$Runtime>;
var PrecomputedHumanChange: MessageType<PrecomputedHumanChange> = PrecomputedHumanChange$Runtime as unknown as MessageType<PrecomputedHumanChange>;
(PrecomputedHumanChange as MutableMessageType<PrecomputedHumanChange>).runtime = proto3;
(PrecomputedHumanChange as MutableMessageType<PrecomputedHumanChange>).typeName = "agent.v1.PrecomputedHumanChange";
(PrecomputedHumanChange as MutableMessageType<PrecomputedHumanChange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "rendered_diffs", kind: "message", T: PrecomputedHumanChangeRenderedDiff, repeated: true },
  {
    no: 3,
    name: "is_new_file",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "is_deleted_file",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RequestContext$Runtime = (() => class _RequestContext extends Message<_RequestContext> {
  declare rules: CursorRule[];
  declare env?: RequestContextEnv;
  declare repositoryInfo: RepositoryIndexingInfo[];
  declare tools: McpToolDefinition[];
  declare conversationNotesListing?: string;
  declare sharedNotesListing?: string;
  declare gitRepos: GitRepoInfo[];
  declare projectLayouts: LsDirectoryTreeNode[];
  declare mcpInstructions: McpInstructions[];
  declare debugModeConfig?: DebugModeConfig;
  declare cloudRule?: string;
  declare webSearchEnabled?: boolean;
  declare skillOptions?: SkillOptions;
  declare repositoryInfoShouldQueryProd?: boolean;
  declare fileContents: { [key: string]: string };
  declare userIntentSummary?: string;
  declare customSubagents: CustomSubagent[];
  declare mcpFileSystemOptions?: McpFileSystemOptions;
  declare webFetchEnabled?: boolean;
  declare hooksAdditionalContext?: string;
  declare commitAttributionMessage?: string;
  declare prAttributionMessage?: string;
  declare hooksConfig?: HooksConfigInfo;
  declare agentSkills: AgentSkill[];
  declare precomputedHumanChanges: PrecomputedHumanChange[];
  declare recentlyAddedPlugin?: RecentlyAddedPlugin;
  declare supportsMcpAuth?: boolean;
  declare gitRepoInfoComplete?: boolean;
  declare mcpMetaToolOptions?: McpMetaToolOptions;
  declare readLintsEnabled?: boolean;
  declare mcpInfoComplete?: boolean;
  declare nonFileRules: CursorRule[];
  declare matchedInstalledPlugin?: MatchedInstalledPlugin;
  declare rulesInfoComplete?: boolean;
  declare envInfoComplete?: boolean;
  declare repositoryInfoComplete?: boolean;
  declare customSubagentsInfoComplete?: boolean;
  declare agentSkillsInfoComplete?: boolean;
  declare mcpFileSystemInfoComplete?: boolean;
  declare gitStatusInfoComplete?: boolean;
  declare userPermissionsAutoRun?: PermissionsAutoRunInstructions;
  declare projectPermissionsAutoRun?: PermissionsAutoRunInstructions;
  declare adminPermissionsAutoRun?: PermissionsAutoRunInstructions;
  declare disabledTeamRules: string[];
  declare searchConversationsEnabled?: boolean;
  declare sendMessageEnabled?: boolean;
  declare adminCommandDenylist: string[];
  declare systemPromptOverride?: SystemPromptSpec;
  constructor(data?: PartialMessage<_RequestContext>) {
    super();
    this.rules = [];
    this.repositoryInfo = [];
    this.tools = [];
    this.gitRepos = [];
    this.projectLayouts = [];
    this.mcpInstructions = [];
    this.fileContents = {};
    this.customSubagents = [];
    this.agentSkills = [];
    this.precomputedHumanChanges = [];
    this.nonFileRules = [];
    this.disabledTeamRules = [];
    this.adminCommandDenylist = [];
    proto3.util.initPartial(data, this as _RequestContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContext {
    return new _RequestContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContext {
    return new _RequestContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContext {
    return new _RequestContext().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContext | PlainMessage<_RequestContext> | undefined | null, b2: _RequestContext | PlainMessage<_RequestContext> | undefined | null): boolean {
    return proto3.util.equals(_RequestContext as unknown as MessageType<_RequestContext>, a, b2);
  }
})();
export type RequestContext = InstanceType<typeof RequestContext$Runtime>;
var RequestContext: MessageType<RequestContext> = RequestContext$Runtime as unknown as MessageType<RequestContext>;
(RequestContext as MutableMessageType<RequestContext>).runtime = proto3;
(RequestContext as MutableMessageType<RequestContext>).typeName = "agent.v1.RequestContext";
(RequestContext as MutableMessageType<RequestContext>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "rules", kind: "message", T: CursorRule, repeated: true },
  { no: 4, name: "env", kind: "message", T: RequestContextEnv },
  { no: 6, name: "repository_info", kind: "message", T: RepositoryIndexingInfo, repeated: true },
  { no: 7, name: "tools", kind: "message", T: McpToolDefinition, repeated: true },
  { no: 8, name: "conversation_notes_listing", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "shared_notes_listing", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "git_repos", kind: "message", T: GitRepoInfo, repeated: true },
  { no: 13, name: "project_layouts", kind: "message", T: LsDirectoryTreeNode, repeated: true },
  { no: 14, name: "mcp_instructions", kind: "message", T: McpInstructions, repeated: true },
  { no: 15, name: "debug_mode_config", kind: "message", T: DebugModeConfig, opt: true },
  { no: 16, name: "cloud_rule", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "web_search_enabled", kind: "scalar", T: 8, opt: true },
  { no: 18, name: "skill_options", kind: "message", T: SkillOptions, opt: true },
  { no: 19, name: "repository_info_should_query_prod", kind: "scalar", T: 8, opt: true },
  { no: 20, name: "file_contents", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 21, name: "user_intent_summary", kind: "scalar", T: 9, opt: true },
  { no: 22, name: "custom_subagents", kind: "message", T: CustomSubagent, repeated: true },
  { no: 23, name: "mcp_file_system_options", kind: "message", T: McpFileSystemOptions, opt: true },
  { no: 24, name: "web_fetch_enabled", kind: "scalar", T: 8, opt: true },
  { no: 25, name: "hooks_additional_context", kind: "scalar", T: 9, opt: true },
  { no: 26, name: "commit_attribution_message", kind: "scalar", T: 9, opt: true },
  { no: 27, name: "pr_attribution_message", kind: "scalar", T: 9, opt: true },
  { no: 28, name: "hooks_config", kind: "message", T: HooksConfigInfo, opt: true },
  { no: 29, name: "agent_skills", kind: "message", T: AgentSkill, repeated: true },
  { no: 30, name: "precomputed_human_changes", kind: "message", T: PrecomputedHumanChange, repeated: true },
  { no: 31, name: "recently_added_plugin", kind: "message", T: RecentlyAddedPlugin, opt: true },
  { no: 32, name: "supports_mcp_auth", kind: "scalar", T: 8, opt: true },
  { no: 33, name: "git_repo_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 34, name: "mcp_meta_tool_options", kind: "message", T: McpMetaToolOptions, opt: true },
  { no: 35, name: "read_lints_enabled", kind: "scalar", T: 8, opt: true },
  { no: 36, name: "mcp_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 37, name: "non_file_rules", kind: "message", T: CursorRule, repeated: true },
  { no: 38, name: "matched_installed_plugin", kind: "message", T: MatchedInstalledPlugin, opt: true },
  { no: 39, name: "rules_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 40, name: "env_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 41, name: "repository_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 42, name: "custom_subagents_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 43, name: "agent_skills_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 44, name: "mcp_file_system_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 45, name: "git_status_info_complete", kind: "scalar", T: 8, opt: true },
  { no: 46, name: "user_permissions_auto_run", kind: "message", T: PermissionsAutoRunInstructions, opt: true },
  { no: 47, name: "project_permissions_auto_run", kind: "message", T: PermissionsAutoRunInstructions, opt: true },
  { no: 48, name: "admin_permissions_auto_run", kind: "message", T: PermissionsAutoRunInstructions, opt: true },
  { no: 49, name: "disabled_team_rules", kind: "scalar", T: 9, repeated: true },
  { no: 50, name: "search_conversations_enabled", kind: "scalar", T: 8, opt: true },
  { no: 51, name: "send_message_enabled", kind: "scalar", T: 8, opt: true },
  { no: 52, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true },
  { no: 53, name: "system_prompt_override", kind: "message", T: SystemPromptSpec, opt: true }
]);
var RequestContextRulesPart$Runtime = (() => class _RequestContextRulesPart extends Message<_RequestContextRulesPart> {
  declare rules: CursorRule[];
  declare nonFileRules: CursorRule[];
  declare cloudRule?: string;
  constructor(data?: PartialMessage<_RequestContextRulesPart>) {
    super();
    this.rules = [];
    this.nonFileRules = [];
    proto3.util.initPartial(data, this as _RequestContextRulesPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextRulesPart {
    return new _RequestContextRulesPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextRulesPart {
    return new _RequestContextRulesPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextRulesPart {
    return new _RequestContextRulesPart().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextRulesPart | PlainMessage<_RequestContextRulesPart> | undefined | null, b2: _RequestContextRulesPart | PlainMessage<_RequestContextRulesPart> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextRulesPart as unknown as MessageType<_RequestContextRulesPart>, a, b2);
  }
})();
export type RequestContextRulesPart = InstanceType<typeof RequestContextRulesPart$Runtime>;
var RequestContextRulesPart: MessageType<RequestContextRulesPart> = RequestContextRulesPart$Runtime as unknown as MessageType<RequestContextRulesPart>;
(RequestContextRulesPart as MutableMessageType<RequestContextRulesPart>).runtime = proto3;
(RequestContextRulesPart as MutableMessageType<RequestContextRulesPart>).typeName = "agent.v1.RequestContextRulesPart";
(RequestContextRulesPart as MutableMessageType<RequestContextRulesPart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rules", kind: "message", T: CursorRule, repeated: true },
  { no: 2, name: "non_file_rules", kind: "message", T: CursorRule, repeated: true },
  { no: 3, name: "cloud_rule", kind: "scalar", T: 9, opt: true }
]);
var RequestContextSkillsPart$Runtime = (() => class _RequestContextSkillsPart extends Message<_RequestContextSkillsPart> {
  declare agentSkills: AgentSkill[];
  declare skillOptions?: SkillOptions;
  constructor(data?: PartialMessage<_RequestContextSkillsPart>) {
    super();
    this.agentSkills = [];
    proto3.util.initPartial(data, this as _RequestContextSkillsPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextSkillsPart {
    return new _RequestContextSkillsPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextSkillsPart {
    return new _RequestContextSkillsPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextSkillsPart {
    return new _RequestContextSkillsPart().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextSkillsPart | PlainMessage<_RequestContextSkillsPart> | undefined | null, b2: _RequestContextSkillsPart | PlainMessage<_RequestContextSkillsPart> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextSkillsPart as unknown as MessageType<_RequestContextSkillsPart>, a, b2);
  }
})();
export type RequestContextSkillsPart = InstanceType<typeof RequestContextSkillsPart$Runtime>;
var RequestContextSkillsPart: MessageType<RequestContextSkillsPart> = RequestContextSkillsPart$Runtime as unknown as MessageType<RequestContextSkillsPart>;
(RequestContextSkillsPart as MutableMessageType<RequestContextSkillsPart>).runtime = proto3;
(RequestContextSkillsPart as MutableMessageType<RequestContextSkillsPart>).typeName = "agent.v1.RequestContextSkillsPart";
(RequestContextSkillsPart as MutableMessageType<RequestContextSkillsPart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_skills", kind: "message", T: AgentSkill, repeated: true },
  { no: 2, name: "skill_options", kind: "message", T: SkillOptions, opt: true }
]);
var RequestContextSubagentsPart$Runtime = (() => class _RequestContextSubagentsPart extends Message<_RequestContextSubagentsPart> {
  declare customSubagents: CustomSubagent[];
  constructor(data?: PartialMessage<_RequestContextSubagentsPart>) {
    super();
    this.customSubagents = [];
    proto3.util.initPartial(data, this as _RequestContextSubagentsPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextSubagentsPart {
    return new _RequestContextSubagentsPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextSubagentsPart {
    return new _RequestContextSubagentsPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextSubagentsPart {
    return new _RequestContextSubagentsPart().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextSubagentsPart | PlainMessage<_RequestContextSubagentsPart> | undefined | null, b2: _RequestContextSubagentsPart | PlainMessage<_RequestContextSubagentsPart> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextSubagentsPart as unknown as MessageType<_RequestContextSubagentsPart>, a, b2);
  }
})();
export type RequestContextSubagentsPart = InstanceType<typeof RequestContextSubagentsPart$Runtime>;
var RequestContextSubagentsPart: MessageType<RequestContextSubagentsPart> = RequestContextSubagentsPart$Runtime as unknown as MessageType<RequestContextSubagentsPart>;
(RequestContextSubagentsPart as MutableMessageType<RequestContextSubagentsPart>).runtime = proto3;
(RequestContextSubagentsPart as MutableMessageType<RequestContextSubagentsPart>).typeName = "agent.v1.RequestContextSubagentsPart";
(RequestContextSubagentsPart as MutableMessageType<RequestContextSubagentsPart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_subagents", kind: "message", T: CustomSubagent, repeated: true }
]);
var RequestContextMcpsPart$Runtime = (() => class _RequestContextMcpsPart extends Message<_RequestContextMcpsPart> {
  declare tools: McpToolDefinition[];
  declare mcpInstructions: McpInstructions[];
  declare mcpFileSystemOptions?: McpFileSystemOptions;
  declare mcpMetaToolOptions?: McpMetaToolOptions;
  constructor(data?: PartialMessage<_RequestContextMcpsPart>) {
    super();
    this.tools = [];
    this.mcpInstructions = [];
    proto3.util.initPartial(data, this as _RequestContextMcpsPart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextMcpsPart {
    return new _RequestContextMcpsPart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextMcpsPart {
    return new _RequestContextMcpsPart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextMcpsPart {
    return new _RequestContextMcpsPart().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextMcpsPart | PlainMessage<_RequestContextMcpsPart> | undefined | null, b2: _RequestContextMcpsPart | PlainMessage<_RequestContextMcpsPart> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextMcpsPart as unknown as MessageType<_RequestContextMcpsPart>, a, b2);
  }
})();
export type RequestContextMcpsPart = InstanceType<typeof RequestContextMcpsPart$Runtime>;
var RequestContextMcpsPart: MessageType<RequestContextMcpsPart> = RequestContextMcpsPart$Runtime as unknown as MessageType<RequestContextMcpsPart>;
(RequestContextMcpsPart as MutableMessageType<RequestContextMcpsPart>).runtime = proto3;
(RequestContextMcpsPart as MutableMessageType<RequestContextMcpsPart>).typeName = "agent.v1.RequestContextMcpsPart";
(RequestContextMcpsPart as MutableMessageType<RequestContextMcpsPart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tools", kind: "message", T: McpToolDefinition, repeated: true },
  { no: 2, name: "mcp_instructions", kind: "message", T: McpInstructions, repeated: true },
  { no: 3, name: "mcp_file_system_options", kind: "message", T: McpFileSystemOptions, opt: true },
  { no: 4, name: "mcp_meta_tool_options", kind: "message", T: McpMetaToolOptions, opt: true }
]);
var RequestContextPartReferences$Runtime = (() => class _RequestContextPartReferences extends Message<_RequestContextPartReferences> {
  declare rulesBlobId: Uint8Array;
  declare rulesByteLength: number;
  declare skillsBlobId: Uint8Array;
  declare skillsByteLength: number;
  declare subagentsBlobId: Uint8Array;
  declare subagentsByteLength: number;
  declare mcpsBlobId: Uint8Array;
  declare mcpsByteLength: number;
  declare dynamicContext?: RequestContext;
  constructor(data?: PartialMessage<_RequestContextPartReferences>) {
    super();
    this.rulesBlobId = new Uint8Array(0);
    this.rulesByteLength = 0;
    this.skillsBlobId = new Uint8Array(0);
    this.skillsByteLength = 0;
    this.subagentsBlobId = new Uint8Array(0);
    this.subagentsByteLength = 0;
    this.mcpsBlobId = new Uint8Array(0);
    this.mcpsByteLength = 0;
    proto3.util.initPartial(data, this as _RequestContextPartReferences);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestContextPartReferences {
    return new _RequestContextPartReferences().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestContextPartReferences {
    return new _RequestContextPartReferences().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestContextPartReferences {
    return new _RequestContextPartReferences().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestContextPartReferences | PlainMessage<_RequestContextPartReferences> | undefined | null, b2: _RequestContextPartReferences | PlainMessage<_RequestContextPartReferences> | undefined | null): boolean {
    return proto3.util.equals(_RequestContextPartReferences as unknown as MessageType<_RequestContextPartReferences>, a, b2);
  }
})();
export type RequestContextPartReferences = InstanceType<typeof RequestContextPartReferences$Runtime>;
var RequestContextPartReferences: MessageType<RequestContextPartReferences> = RequestContextPartReferences$Runtime as unknown as MessageType<RequestContextPartReferences>;
(RequestContextPartReferences as MutableMessageType<RequestContextPartReferences>).runtime = proto3;
(RequestContextPartReferences as MutableMessageType<RequestContextPartReferences>).typeName = "agent.v1.RequestContextPartReferences";
(RequestContextPartReferences as MutableMessageType<RequestContextPartReferences>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rules_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "rules_byte_length",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "skills_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 4,
    name: "skills_byte_length",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 5,
    name: "subagents_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 6,
    name: "subagents_byte_length",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 7,
    name: "mcps_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 8,
    name: "mcps_byte_length",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 9, name: "dynamic_context", kind: "message", T: RequestContext }
]);
var RecentlyAddedPlugin$Runtime = (() => class _RecentlyAddedPlugin extends Message<_RecentlyAddedPlugin> {
  declare displayName: string;
  declare description: string;
  declare skills: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare subagents: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare hooks: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare rules: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare commands: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare mcpServers: string[];
  constructor(data?: PartialMessage<_RecentlyAddedPlugin>) {
    super();
    this.displayName = "";
    this.description = "";
    this.skills = [];
    this.subagents = [];
    this.hooks = [];
    this.rules = [];
    this.commands = [];
    this.mcpServers = [];
    proto3.util.initPartial(data, this as _RecentlyAddedPlugin);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecentlyAddedPlugin {
    return new _RecentlyAddedPlugin().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecentlyAddedPlugin {
    return new _RecentlyAddedPlugin().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecentlyAddedPlugin {
    return new _RecentlyAddedPlugin().fromJsonString(jsonString, options);
  }
  static equals(a: _RecentlyAddedPlugin | PlainMessage<_RecentlyAddedPlugin> | undefined | null, b2: _RecentlyAddedPlugin | PlainMessage<_RecentlyAddedPlugin> | undefined | null): boolean {
    return proto3.util.equals(_RecentlyAddedPlugin as unknown as MessageType<_RecentlyAddedPlugin>, a, b2);
  }
})();
export type RecentlyAddedPlugin = InstanceType<typeof RecentlyAddedPlugin$Runtime>;
var RecentlyAddedPlugin: MessageType<RecentlyAddedPlugin> = RecentlyAddedPlugin$Runtime as unknown as MessageType<RecentlyAddedPlugin>;
(RecentlyAddedPlugin as MutableMessageType<RecentlyAddedPlugin>).runtime = proto3;
(RecentlyAddedPlugin as MutableMessageType<RecentlyAddedPlugin>).typeName = "agent.v1.RecentlyAddedPlugin";
(RecentlyAddedPlugin as MutableMessageType<RecentlyAddedPlugin>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "display_name",
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
  { no: 3, name: "skills", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 4, name: "subagents", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 5, name: "hooks", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 6, name: "rules", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 7, name: "commands", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 8, name: "mcp_servers", kind: "scalar", T: 9, repeated: true }
]);
var RecentlyAddedPlugin_CapabilityDescriptor$Runtime = (() => class _RecentlyAddedPlugin_CapabilityDescriptor extends Message<_RecentlyAddedPlugin_CapabilityDescriptor> {
  declare name: string;
  declare description: string;
  constructor(data?: PartialMessage<_RecentlyAddedPlugin_CapabilityDescriptor>) {
    super();
    this.name = "";
    this.description = "";
    proto3.util.initPartial(data, this as _RecentlyAddedPlugin_CapabilityDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecentlyAddedPlugin_CapabilityDescriptor {
    return new _RecentlyAddedPlugin_CapabilityDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecentlyAddedPlugin_CapabilityDescriptor {
    return new _RecentlyAddedPlugin_CapabilityDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecentlyAddedPlugin_CapabilityDescriptor {
    return new _RecentlyAddedPlugin_CapabilityDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _RecentlyAddedPlugin_CapabilityDescriptor | PlainMessage<_RecentlyAddedPlugin_CapabilityDescriptor> | undefined | null, b2: _RecentlyAddedPlugin_CapabilityDescriptor | PlainMessage<_RecentlyAddedPlugin_CapabilityDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_RecentlyAddedPlugin_CapabilityDescriptor as unknown as MessageType<_RecentlyAddedPlugin_CapabilityDescriptor>, a, b2);
  }
})();
export type RecentlyAddedPlugin_CapabilityDescriptor = InstanceType<typeof RecentlyAddedPlugin_CapabilityDescriptor$Runtime>;
var RecentlyAddedPlugin_CapabilityDescriptor: MessageType<RecentlyAddedPlugin_CapabilityDescriptor> = RecentlyAddedPlugin_CapabilityDescriptor$Runtime as unknown as MessageType<RecentlyAddedPlugin_CapabilityDescriptor>;
(RecentlyAddedPlugin_CapabilityDescriptor as MutableMessageType<RecentlyAddedPlugin_CapabilityDescriptor>).runtime = proto3;
(RecentlyAddedPlugin_CapabilityDescriptor as MutableMessageType<RecentlyAddedPlugin_CapabilityDescriptor>).typeName = "agent.v1.RecentlyAddedPlugin.CapabilityDescriptor";
(RecentlyAddedPlugin_CapabilityDescriptor as MutableMessageType<RecentlyAddedPlugin_CapabilityDescriptor>).fields = proto3.util.newFieldList(() => [
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
  }
]);
var MatchedInstalledPlugin$Runtime = (() => class _MatchedInstalledPlugin extends Message<_MatchedInstalledPlugin> {
  declare displayName: string;
  declare description: string;
  declare matchedKeyword: string;
  declare skills: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare subagents: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare hooks: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare rules: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare commands: RecentlyAddedPlugin_CapabilityDescriptor[];
  declare mcpServers: string[];
  constructor(data?: PartialMessage<_MatchedInstalledPlugin>) {
    super();
    this.displayName = "";
    this.description = "";
    this.matchedKeyword = "";
    this.skills = [];
    this.subagents = [];
    this.hooks = [];
    this.rules = [];
    this.commands = [];
    this.mcpServers = [];
    proto3.util.initPartial(data, this as _MatchedInstalledPlugin);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MatchedInstalledPlugin {
    return new _MatchedInstalledPlugin().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MatchedInstalledPlugin {
    return new _MatchedInstalledPlugin().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MatchedInstalledPlugin {
    return new _MatchedInstalledPlugin().fromJsonString(jsonString, options);
  }
  static equals(a: _MatchedInstalledPlugin | PlainMessage<_MatchedInstalledPlugin> | undefined | null, b2: _MatchedInstalledPlugin | PlainMessage<_MatchedInstalledPlugin> | undefined | null): boolean {
    return proto3.util.equals(_MatchedInstalledPlugin as unknown as MessageType<_MatchedInstalledPlugin>, a, b2);
  }
})();
export type MatchedInstalledPlugin = InstanceType<typeof MatchedInstalledPlugin$Runtime>;
var MatchedInstalledPlugin: MessageType<MatchedInstalledPlugin> = MatchedInstalledPlugin$Runtime as unknown as MessageType<MatchedInstalledPlugin>;
(MatchedInstalledPlugin as MutableMessageType<MatchedInstalledPlugin>).runtime = proto3;
(MatchedInstalledPlugin as MutableMessageType<MatchedInstalledPlugin>).typeName = "agent.v1.MatchedInstalledPlugin";
(MatchedInstalledPlugin as MutableMessageType<MatchedInstalledPlugin>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "display_name",
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
    name: "matched_keyword",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "skills", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 5, name: "subagents", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 6, name: "hooks", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 7, name: "rules", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 8, name: "commands", kind: "message", T: RecentlyAddedPlugin_CapabilityDescriptor, repeated: true },
  { no: 9, name: "mcp_servers", kind: "scalar", T: 9, repeated: true }
]);


export { MountedAgentStoreKind, RequestContextArgs, RequestContextResult, RequestContextSuccess, RequestContextError, RequestContextRejected, ImageProto, ImageProto_Dimension, GitRepoInfo, RequestContextEnv, MountedAgentStore, UserGitContext, DebugModeConfig, SkillDescriptor, SkillOptions, HooksConfigInfo, PermissionsAutoRunInstructions, PrecomputedHumanChangeRenderedDiff, PrecomputedHumanChange, RequestContext, RequestContextRulesPart, RequestContextSkillsPart, RequestContextSubagentsPart, RequestContextMcpsPart, RequestContextPartReferences, RecentlyAddedPlugin, RecentlyAddedPlugin_CapabilityDescriptor, MatchedInstalledPlugin };
