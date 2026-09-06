/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:62945-63475
 * Region SHA-256: dc6dc95218177d33376c24ff4f75c77a8c6171ff670fec158c839d06f27a14bc
 * B11 exports: 13 messages + 1 enums + 0 services = 14
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { SubagentExecutionEnvironment, SubagentBackgroundReason, ApiKeyCredentials, AzureCredentials, BedrockCredentials, RequestedModel_ModelParameterValue } from "./agent_pb.js";
import { SelectedContext } from "./selected_context_pb.js";
import { TaskMode } from "./subagents_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ForceBackgroundSubagentStatus = 0 | 1 | 2;
var ForceBackgroundSubagentStatus: {
  "UNSPECIFIED": 0;
  "ACCEPTED": 1;
  "NOT_FOUND": 2;
  0: "UNSPECIFIED";
  1: "ACCEPTED";
  2: "NOT_FOUND";
};
(function(ForceBackgroundSubagentStatus2) {
  ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["ACCEPTED"] = 1] = "ACCEPTED";
  ForceBackgroundSubagentStatus2[ForceBackgroundSubagentStatus2["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ForceBackgroundSubagentStatus! || (ForceBackgroundSubagentStatus = {} as typeof ForceBackgroundSubagentStatus));
proto3.util.setEnumType(ForceBackgroundSubagentStatus, "agent.v1.ForceBackgroundSubagentStatus", [
  { no: 0, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_UNSPECIFIED" },
  { no: 1, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_ACCEPTED" },
  { no: 2, name: "FORCE_BACKGROUND_SUBAGENT_STATUS_NOT_FOUND" }
]);
var SubagentArgs$Runtime = (() => class _SubagentArgs extends Message<_SubagentArgs> {
  declare toolCallId: string;
  declare subagentType: string;
  declare modelId: string;
  declare prompt: string;
  declare readonly: boolean;
  declare resumeAgentId?: string;
  declare runInBackground?: boolean;
  declare continuationConfig?: ClientContinuationConfig;
  declare parentConversationId?: string;
  declare interrupt?: boolean;
  declare mode: TaskMode;
  declare forkAgentId?: string;
  declare rootParentConversationId?: string;
  declare selectedContext?: SelectedContext;
  declare directMetaParentChildSubagent?: boolean;
  declare environment: SubagentExecutionEnvironment;
  declare cloudBaseBranch?: string;
  declare modelParameters: RequestedModel_ModelParameterValue[];
  declare credentials: { case: "apiKeyCredentials"; value: ApiKeyCredentials } | { case: "azureCredentials"; value: AzureCredentials } | { case: "bedrockCredentials"; value: BedrockCredentials } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentArgs>) {
    super();
    this.toolCallId = "";
    this.subagentType = "";
    this.modelId = "";
    this.prompt = "";
    this.readonly = false;
    this.credentials = { case: void 0 };
    this.mode = TaskMode.UNSPECIFIED;
    this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
    this.modelParameters = [];
    proto3.util.initPartial(data, this as _SubagentArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentArgs {
    return new _SubagentArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentArgs {
    return new _SubagentArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentArgs {
    return new _SubagentArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentArgs | PlainMessage<_SubagentArgs> | undefined | null, b2: _SubagentArgs | PlainMessage<_SubagentArgs> | undefined | null): boolean {
    return proto3.util.equals(_SubagentArgs as unknown as MessageType<_SubagentArgs>, a, b2);
  }
})();
export type SubagentArgs = InstanceType<typeof SubagentArgs$Runtime>;
var SubagentArgs: MessageType<SubagentArgs> = SubagentArgs$Runtime as unknown as MessageType<SubagentArgs>;
(SubagentArgs as MutableMessageType<SubagentArgs>).runtime = proto3;
(SubagentArgs as MutableMessageType<SubagentArgs>).typeName = "agent.v1.SubagentArgs";
(SubagentArgs as MutableMessageType<SubagentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "resume_agent_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "run_in_background", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "continuation_config", kind: "message", T: ClientContinuationConfig },
  { no: 9, name: "parent_conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "api_key_credentials", kind: "message", T: ApiKeyCredentials, oneof: "credentials" },
  { no: 11, name: "azure_credentials", kind: "message", T: AzureCredentials, oneof: "credentials" },
  { no: 12, name: "bedrock_credentials", kind: "message", T: BedrockCredentials, oneof: "credentials" },
  { no: 13, name: "interrupt", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "mode", kind: "enum", T: proto3.getEnumType(TaskMode) },
  { no: 15, name: "fork_agent_id", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "root_parent_conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "selected_context", kind: "message", T: SelectedContext, opt: true },
  { no: 18, name: "direct_meta_parent_child_subagent", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) },
  { no: 20, name: "cloud_base_branch", kind: "scalar", T: 9, opt: true },
  { no: 21, name: "model_parameters", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var ClientContinuationConfig$Runtime = (() => class _ClientContinuationConfig extends Message<_ClientContinuationConfig> {
  declare idleThreshold: number;
  declare maxLoops: number;
  declare nudgeMessage: string;
  declare escapeMessageTemplate: string;
  declare collectBackgroundChildren: boolean;
  declare childrenCompletedMessageTemplate: string;
  declare continuationRoundDelayMs: number;
  constructor(data?: PartialMessage<_ClientContinuationConfig>) {
    super();
    this.idleThreshold = 0;
    this.maxLoops = 0;
    this.nudgeMessage = "";
    this.escapeMessageTemplate = "";
    this.collectBackgroundChildren = false;
    this.childrenCompletedMessageTemplate = "";
    this.continuationRoundDelayMs = 0;
    proto3.util.initPartial(data, this as _ClientContinuationConfig);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ClientContinuationConfig {
    return new _ClientContinuationConfig().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ClientContinuationConfig {
    return new _ClientContinuationConfig().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ClientContinuationConfig {
    return new _ClientContinuationConfig().fromJsonString(jsonString, options2);
  }
  static equals(a: _ClientContinuationConfig | PlainMessage<_ClientContinuationConfig> | undefined | null, b2: _ClientContinuationConfig | PlainMessage<_ClientContinuationConfig> | undefined | null): boolean {
    return proto3.util.equals(_ClientContinuationConfig as unknown as MessageType<_ClientContinuationConfig>, a, b2);
  }
})();
export type ClientContinuationConfig = InstanceType<typeof ClientContinuationConfig$Runtime>;
var ClientContinuationConfig: MessageType<ClientContinuationConfig> = ClientContinuationConfig$Runtime as unknown as MessageType<ClientContinuationConfig>;
(ClientContinuationConfig as MutableMessageType<ClientContinuationConfig>).runtime = proto3;
(ClientContinuationConfig as MutableMessageType<ClientContinuationConfig>).typeName = "agent.v1.ClientContinuationConfig";
(ClientContinuationConfig as MutableMessageType<ClientContinuationConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "idle_threshold",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "max_loops",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "nudge_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "escape_message_template",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "collect_background_children",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "children_completed_message_template",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "continuation_round_delay_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SubagentResult$Runtime = (() => class _SubagentResult extends Message<_SubagentResult> {
  declare result: { case: "success"; value: SubagentSuccess } | { case: "error"; value: SubagentError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentResult {
    return new _SubagentResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentResult {
    return new _SubagentResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentResult {
    return new _SubagentResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentResult | PlainMessage<_SubagentResult> | undefined | null, b2: _SubagentResult | PlainMessage<_SubagentResult> | undefined | null): boolean {
    return proto3.util.equals(_SubagentResult as unknown as MessageType<_SubagentResult>, a, b2);
  }
})();
export type SubagentResult = InstanceType<typeof SubagentResult$Runtime>;
var SubagentResult: MessageType<SubagentResult> = SubagentResult$Runtime as unknown as MessageType<SubagentResult>;
(SubagentResult as MutableMessageType<SubagentResult>).runtime = proto3;
(SubagentResult as MutableMessageType<SubagentResult>).typeName = "agent.v1.SubagentResult";
(SubagentResult as MutableMessageType<SubagentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SubagentSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SubagentError, oneof: "result" }
]);
var SubagentAwaitArgs$Runtime = (() => class _SubagentAwaitArgs extends Message<_SubagentAwaitArgs> {
  declare agentId: string;
  declare timeoutMs: number;
  constructor(data?: PartialMessage<_SubagentAwaitArgs>) {
    super();
    this.agentId = "";
    this.timeoutMs = 0;
    proto3.util.initPartial(data, this as _SubagentAwaitArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitArgs {
    return new _SubagentAwaitArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitArgs {
    return new _SubagentAwaitArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitArgs {
    return new _SubagentAwaitArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitArgs | PlainMessage<_SubagentAwaitArgs> | undefined | null, b2: _SubagentAwaitArgs | PlainMessage<_SubagentAwaitArgs> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitArgs as unknown as MessageType<_SubagentAwaitArgs>, a, b2);
  }
})();
export type SubagentAwaitArgs = InstanceType<typeof SubagentAwaitArgs$Runtime>;
var SubagentAwaitArgs: MessageType<SubagentAwaitArgs> = SubagentAwaitArgs$Runtime as unknown as MessageType<SubagentAwaitArgs>;
(SubagentAwaitArgs as MutableMessageType<SubagentAwaitArgs>).runtime = proto3;
(SubagentAwaitArgs as MutableMessageType<SubagentAwaitArgs>).typeName = "agent.v1.SubagentAwaitArgs";
(SubagentAwaitArgs as MutableMessageType<SubagentAwaitArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "timeout_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var SubagentAwaitResult$Runtime = (() => class _SubagentAwaitResult extends Message<_SubagentAwaitResult> {
  declare result: { case: "complete"; value: SubagentAwaitComplete } | { case: "stillRunning"; value: SubagentAwaitStillRunning } | { case: "notFound"; value: SubagentAwaitNotFound } | { case: "error"; value: SubagentAwaitError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentAwaitResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentAwaitResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitResult {
    return new _SubagentAwaitResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitResult {
    return new _SubagentAwaitResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitResult {
    return new _SubagentAwaitResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitResult | PlainMessage<_SubagentAwaitResult> | undefined | null, b2: _SubagentAwaitResult | PlainMessage<_SubagentAwaitResult> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitResult as unknown as MessageType<_SubagentAwaitResult>, a, b2);
  }
})();
export type SubagentAwaitResult = InstanceType<typeof SubagentAwaitResult$Runtime>;
var SubagentAwaitResult: MessageType<SubagentAwaitResult> = SubagentAwaitResult$Runtime as unknown as MessageType<SubagentAwaitResult>;
(SubagentAwaitResult as MutableMessageType<SubagentAwaitResult>).runtime = proto3;
(SubagentAwaitResult as MutableMessageType<SubagentAwaitResult>).typeName = "agent.v1.SubagentAwaitResult";
(SubagentAwaitResult as MutableMessageType<SubagentAwaitResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "complete", kind: "message", T: SubagentAwaitComplete, oneof: "result" },
  { no: 2, name: "still_running", kind: "message", T: SubagentAwaitStillRunning, oneof: "result" },
  { no: 3, name: "not_found", kind: "message", T: SubagentAwaitNotFound, oneof: "result" },
  { no: 4, name: "error", kind: "message", T: SubagentAwaitError, oneof: "result" }
]);
var SubagentAwaitComplete$Runtime = (() => class _SubagentAwaitComplete extends Message<_SubagentAwaitComplete> {
  declare agentId: string;
  declare transcriptPath?: string;
  declare toolCallCount: number;
  declare finalMessage?: string;
  constructor(data?: PartialMessage<_SubagentAwaitComplete>) {
    super();
    this.agentId = "";
    this.toolCallCount = 0;
    proto3.util.initPartial(data, this as _SubagentAwaitComplete);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitComplete {
    return new _SubagentAwaitComplete().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitComplete {
    return new _SubagentAwaitComplete().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitComplete {
    return new _SubagentAwaitComplete().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitComplete | PlainMessage<_SubagentAwaitComplete> | undefined | null, b2: _SubagentAwaitComplete | PlainMessage<_SubagentAwaitComplete> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitComplete as unknown as MessageType<_SubagentAwaitComplete>, a, b2);
  }
})();
export type SubagentAwaitComplete = InstanceType<typeof SubagentAwaitComplete$Runtime>;
var SubagentAwaitComplete: MessageType<SubagentAwaitComplete> = SubagentAwaitComplete$Runtime as unknown as MessageType<SubagentAwaitComplete>;
(SubagentAwaitComplete as MutableMessageType<SubagentAwaitComplete>).runtime = proto3;
(SubagentAwaitComplete as MutableMessageType<SubagentAwaitComplete>).typeName = "agent.v1.SubagentAwaitComplete";
(SubagentAwaitComplete as MutableMessageType<SubagentAwaitComplete>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "tool_call_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "final_message", kind: "scalar", T: 9, opt: true }
]);
var SubagentAwaitStillRunning$Runtime = (() => class _SubagentAwaitStillRunning extends Message<_SubagentAwaitStillRunning> {
  declare agentId: string;
  declare transcriptPath?: string;
  constructor(data?: PartialMessage<_SubagentAwaitStillRunning>) {
    super();
    this.agentId = "";
    proto3.util.initPartial(data, this as _SubagentAwaitStillRunning);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitStillRunning {
    return new _SubagentAwaitStillRunning().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitStillRunning {
    return new _SubagentAwaitStillRunning().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitStillRunning {
    return new _SubagentAwaitStillRunning().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitStillRunning | PlainMessage<_SubagentAwaitStillRunning> | undefined | null, b2: _SubagentAwaitStillRunning | PlainMessage<_SubagentAwaitStillRunning> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitStillRunning as unknown as MessageType<_SubagentAwaitStillRunning>, a, b2);
  }
})();
export type SubagentAwaitStillRunning = InstanceType<typeof SubagentAwaitStillRunning$Runtime>;
var SubagentAwaitStillRunning: MessageType<SubagentAwaitStillRunning> = SubagentAwaitStillRunning$Runtime as unknown as MessageType<SubagentAwaitStillRunning>;
(SubagentAwaitStillRunning as MutableMessageType<SubagentAwaitStillRunning>).runtime = proto3;
(SubagentAwaitStillRunning as MutableMessageType<SubagentAwaitStillRunning>).typeName = "agent.v1.SubagentAwaitStillRunning";
(SubagentAwaitStillRunning as MutableMessageType<SubagentAwaitStillRunning>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true }
]);
var SubagentAwaitNotFound$Runtime = (() => class _SubagentAwaitNotFound extends Message<_SubagentAwaitNotFound> {
  declare agentId: string;
  constructor(data?: PartialMessage<_SubagentAwaitNotFound>) {
    super();
    this.agentId = "";
    proto3.util.initPartial(data, this as _SubagentAwaitNotFound);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitNotFound {
    return new _SubagentAwaitNotFound().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitNotFound {
    return new _SubagentAwaitNotFound().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitNotFound {
    return new _SubagentAwaitNotFound().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitNotFound | PlainMessage<_SubagentAwaitNotFound> | undefined | null, b2: _SubagentAwaitNotFound | PlainMessage<_SubagentAwaitNotFound> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitNotFound as unknown as MessageType<_SubagentAwaitNotFound>, a, b2);
  }
})();
export type SubagentAwaitNotFound = InstanceType<typeof SubagentAwaitNotFound$Runtime>;
var SubagentAwaitNotFound: MessageType<SubagentAwaitNotFound> = SubagentAwaitNotFound$Runtime as unknown as MessageType<SubagentAwaitNotFound>;
(SubagentAwaitNotFound as MutableMessageType<SubagentAwaitNotFound>).runtime = proto3;
(SubagentAwaitNotFound as MutableMessageType<SubagentAwaitNotFound>).typeName = "agent.v1.SubagentAwaitNotFound";
(SubagentAwaitNotFound as MutableMessageType<SubagentAwaitNotFound>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubagentAwaitError$Runtime = (() => class _SubagentAwaitError extends Message<_SubagentAwaitError> {
  declare agentId?: string;
  declare error: string;
  constructor(data?: PartialMessage<_SubagentAwaitError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SubagentAwaitError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentAwaitError {
    return new _SubagentAwaitError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentAwaitError {
    return new _SubagentAwaitError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentAwaitError {
    return new _SubagentAwaitError().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentAwaitError | PlainMessage<_SubagentAwaitError> | undefined | null, b2: _SubagentAwaitError | PlainMessage<_SubagentAwaitError> | undefined | null): boolean {
    return proto3.util.equals(_SubagentAwaitError as unknown as MessageType<_SubagentAwaitError>, a, b2);
  }
})();
export type SubagentAwaitError = InstanceType<typeof SubagentAwaitError$Runtime>;
var SubagentAwaitError: MessageType<SubagentAwaitError> = SubagentAwaitError$Runtime as unknown as MessageType<SubagentAwaitError>;
(SubagentAwaitError as MutableMessageType<SubagentAwaitError>).runtime = proto3;
(SubagentAwaitError as MutableMessageType<SubagentAwaitError>).typeName = "agent.v1.SubagentAwaitError";
(SubagentAwaitError as MutableMessageType<SubagentAwaitError>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubagentSuccess$Runtime = (() => class _SubagentSuccess extends Message<_SubagentSuccess> {
  declare agentId: string;
  declare finalMessage?: string;
  declare toolCallCount: number;
  declare backgroundReason: SubagentBackgroundReason;
  declare transcriptPath?: string;
  constructor(data?: PartialMessage<_SubagentSuccess>) {
    super();
    this.agentId = "";
    this.toolCallCount = 0;
    this.backgroundReason = SubagentBackgroundReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SubagentSuccess);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentSuccess {
    return new _SubagentSuccess().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentSuccess {
    return new _SubagentSuccess().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentSuccess {
    return new _SubagentSuccess().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentSuccess | PlainMessage<_SubagentSuccess> | undefined | null, b2: _SubagentSuccess | PlainMessage<_SubagentSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SubagentSuccess as unknown as MessageType<_SubagentSuccess>, a, b2);
  }
})();
export type SubagentSuccess = InstanceType<typeof SubagentSuccess$Runtime>;
var SubagentSuccess: MessageType<SubagentSuccess> = SubagentSuccess$Runtime as unknown as MessageType<SubagentSuccess>;
(SubagentSuccess as MutableMessageType<SubagentSuccess>).runtime = proto3;
(SubagentSuccess as MutableMessageType<SubagentSuccess>).typeName = "agent.v1.SubagentSuccess";
(SubagentSuccess as MutableMessageType<SubagentSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "final_message", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "tool_call_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "background_reason", kind: "enum", T: proto3.getEnumType(SubagentBackgroundReason) },
  { no: 5, name: "transcript_path", kind: "scalar", T: 9, opt: true }
]);
var SubagentError$Runtime = (() => class _SubagentError extends Message<_SubagentError> {
  declare agentId?: string;
  declare error: string;
  constructor(data?: PartialMessage<_SubagentError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SubagentError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SubagentError {
    return new _SubagentError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SubagentError {
    return new _SubagentError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SubagentError {
    return new _SubagentError().fromJsonString(jsonString, options2);
  }
  static equals(a: _SubagentError | PlainMessage<_SubagentError> | undefined | null, b2: _SubagentError | PlainMessage<_SubagentError> | undefined | null): boolean {
    return proto3.util.equals(_SubagentError as unknown as MessageType<_SubagentError>, a, b2);
  }
})();
export type SubagentError = InstanceType<typeof SubagentError$Runtime>;
var SubagentError: MessageType<SubagentError> = SubagentError$Runtime as unknown as MessageType<SubagentError>;
(SubagentError as MutableMessageType<SubagentError>).runtime = proto3;
(SubagentError as MutableMessageType<SubagentError>).typeName = "agent.v1.SubagentError";
(SubagentError as MutableMessageType<SubagentError>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ForceBackgroundSubagentArgs$Runtime = (() => class _ForceBackgroundSubagentArgs extends Message<_ForceBackgroundSubagentArgs> {
  declare toolCallId: string;
  constructor(data?: PartialMessage<_ForceBackgroundSubagentArgs>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ForceBackgroundSubagentArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ForceBackgroundSubagentArgs {
    return new _ForceBackgroundSubagentArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ForceBackgroundSubagentArgs {
    return new _ForceBackgroundSubagentArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ForceBackgroundSubagentArgs {
    return new _ForceBackgroundSubagentArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _ForceBackgroundSubagentArgs | PlainMessage<_ForceBackgroundSubagentArgs> | undefined | null, b2: _ForceBackgroundSubagentArgs | PlainMessage<_ForceBackgroundSubagentArgs> | undefined | null): boolean {
    return proto3.util.equals(_ForceBackgroundSubagentArgs as unknown as MessageType<_ForceBackgroundSubagentArgs>, a, b2);
  }
})();
export type ForceBackgroundSubagentArgs = InstanceType<typeof ForceBackgroundSubagentArgs$Runtime>;
var ForceBackgroundSubagentArgs: MessageType<ForceBackgroundSubagentArgs> = ForceBackgroundSubagentArgs$Runtime as unknown as MessageType<ForceBackgroundSubagentArgs>;
(ForceBackgroundSubagentArgs as MutableMessageType<ForceBackgroundSubagentArgs>).runtime = proto3;
(ForceBackgroundSubagentArgs as MutableMessageType<ForceBackgroundSubagentArgs>).typeName = "agent.v1.ForceBackgroundSubagentArgs";
(ForceBackgroundSubagentArgs as MutableMessageType<ForceBackgroundSubagentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ForceBackgroundSubagentResult$Runtime = (() => class _ForceBackgroundSubagentResult extends Message<_ForceBackgroundSubagentResult> {
  declare status: ForceBackgroundSubagentStatus;
  constructor(data?: PartialMessage<_ForceBackgroundSubagentResult>) {
    super();
    this.status = ForceBackgroundSubagentStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ForceBackgroundSubagentResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ForceBackgroundSubagentResult {
    return new _ForceBackgroundSubagentResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ForceBackgroundSubagentResult {
    return new _ForceBackgroundSubagentResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ForceBackgroundSubagentResult {
    return new _ForceBackgroundSubagentResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _ForceBackgroundSubagentResult | PlainMessage<_ForceBackgroundSubagentResult> | undefined | null, b2: _ForceBackgroundSubagentResult | PlainMessage<_ForceBackgroundSubagentResult> | undefined | null): boolean {
    return proto3.util.equals(_ForceBackgroundSubagentResult as unknown as MessageType<_ForceBackgroundSubagentResult>, a, b2);
  }
})();
export type ForceBackgroundSubagentResult = InstanceType<typeof ForceBackgroundSubagentResult$Runtime>;
var ForceBackgroundSubagentResult: MessageType<ForceBackgroundSubagentResult> = ForceBackgroundSubagentResult$Runtime as unknown as MessageType<ForceBackgroundSubagentResult>;
(ForceBackgroundSubagentResult as MutableMessageType<ForceBackgroundSubagentResult>).runtime = proto3;
(ForceBackgroundSubagentResult as MutableMessageType<ForceBackgroundSubagentResult>).typeName = "agent.v1.ForceBackgroundSubagentResult";
(ForceBackgroundSubagentResult as MutableMessageType<ForceBackgroundSubagentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(ForceBackgroundSubagentStatus) }
]);


export { ForceBackgroundSubagentStatus, SubagentArgs, ClientContinuationConfig, SubagentResult, SubagentAwaitArgs, SubagentAwaitResult, SubagentAwaitComplete, SubagentAwaitStillRunning, SubagentAwaitNotFound, SubagentAwaitError, SubagentSuccess, SubagentError, ForceBackgroundSubagentArgs, ForceBackgroundSubagentResult };
