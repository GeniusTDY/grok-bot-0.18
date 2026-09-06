/**
 * Complete generated Grok Bot 0.18 B8 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:66029-67530
 * Region SHA-256: e377a4d91ce01a1481bb7b0012a9c9202a5b53b33815a2f4fa700227295da0a0
 * B8 exports: 42 messages + 1 enums + 0 services = 43
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ConversationAction, PromptContextUsageSnapshot, ConversationStateStructure, ClientLlmGatewayCredential, ModelDetails2, RequestedModel, SubagentModelOverride, PreFetchedBlob, AgentRunRequest, InteractionUpdate, InteractionQuery, InteractionResponse } from "./agent_pb.js";
import { McpTools, McpFileSystemOptions } from "./mcp_pb.js";
import { ExecClientControlMessage, ExecServerMessage, ExecClientMessage } from "./exec_pb.js";
import { KvServerMessage, KvClientMessage } from "./kv_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type LocalPromptQualityInvocationStatus = 0 | 1 | 2 | 3;
var LocalPromptQualityInvocationStatus: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "ERRORED": 2;
  "ABORTED": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "ERRORED";
  3: "ABORTED";
};
(function(LocalPromptQualityInvocationStatus2) {
  LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["SUCCESS"] = 1] = "SUCCESS";
  LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["ERRORED"] = 2] = "ERRORED";
  LocalPromptQualityInvocationStatus2[LocalPromptQualityInvocationStatus2["ABORTED"] = 3] = "ABORTED";
})(LocalPromptQualityInvocationStatus! || (LocalPromptQualityInvocationStatus = {} as typeof LocalPromptQualityInvocationStatus));
proto3.util.setEnumType(LocalPromptQualityInvocationStatus, "agent.v1.LocalPromptQualityInvocationStatus", [
  { no: 0, name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_UNSPECIFIED" },
  { no: 1, name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_SUCCESS" },
  { no: 2, name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ERRORED" },
  { no: 3, name: "LOCAL_PROMPT_QUALITY_INVOCATION_STATUS_ABORTED" }
]);
var ClientHeartbeat$Runtime = (() => class _ClientHeartbeat extends Message<_ClientHeartbeat> {
  constructor(data?: PartialMessage<_ClientHeartbeat>) {
    super();
    proto3.util.initPartial(data, this as _ClientHeartbeat);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ClientHeartbeat {
    return new _ClientHeartbeat().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ClientHeartbeat {
    return new _ClientHeartbeat().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ClientHeartbeat {
    return new _ClientHeartbeat().fromJsonString(jsonString, options2);
  }
  static equals(a: _ClientHeartbeat | PlainMessage<_ClientHeartbeat> | undefined | null, b2: _ClientHeartbeat | PlainMessage<_ClientHeartbeat> | undefined | null): boolean {
    return proto3.util.equals(_ClientHeartbeat as unknown as MessageType<_ClientHeartbeat>, a, b2);
  }
})();
export type ClientHeartbeat = InstanceType<typeof ClientHeartbeat$Runtime>;
var ClientHeartbeat: MessageType<ClientHeartbeat> = ClientHeartbeat$Runtime as unknown as MessageType<ClientHeartbeat>;
(ClientHeartbeat as MutableMessageType<ClientHeartbeat>).runtime = proto3;
(ClientHeartbeat as MutableMessageType<ClientHeartbeat>).typeName = "agent.v1.ClientHeartbeat";
(ClientHeartbeat as MutableMessageType<ClientHeartbeat>).fields = proto3.util.newFieldList(() => []);
var PrewarmRequest$Runtime = (() => class _PrewarmRequest extends Message<_PrewarmRequest> {
  declare modelDetails?: ModelDetails2;
  declare requestedModel?: RequestedModel;
  declare conversationId?: string;
  declare conversationState?: ConversationStateStructure;
  declare mcpTools?: McpTools;
  declare mcpFileSystemOptions?: McpFileSystemOptions;
  declare bestOfNGroupId?: string;
  declare tryUseBestOfNPromotion?: boolean;
  declare customSystemPrompt?: string;
  declare suggestNextPrompt?: boolean;
  declare subagentTypeName?: string;
  declare excludeWorkspaceContext?: boolean;
  declare harness?: string;
  declare selectedSubagentModels: RequestedModel[];
  declare selectedSubagentModelDetails: ModelDetails2[];
  declare conversationGroupId?: string;
  declare preFetchedBlobs: PreFetchedBlob[];
  declare clientSupportsInlineImages?: boolean;
  declare subagentModelOverrides: SubagentModelOverride[];
  declare canCreateCloudSubagents?: boolean;
  declare suppressSubagentProgressUpdateTool?: boolean;
  declare clientSupportsSendToUser?: boolean;
  declare computerUseCoordinateMode?: string;
  declare agentSessionId?: string;
  declare clientSupportsPromptContextUsageRpc?: boolean;
  declare clientSupportsRoutedModelUpdate?: boolean;
  declare clientLlmGatewayCredential?: ClientLlmGatewayCredential;
  constructor(data?: PartialMessage<_PrewarmRequest>) {
    super();
    this.selectedSubagentModels = [];
    this.selectedSubagentModelDetails = [];
    this.preFetchedBlobs = [];
    this.subagentModelOverrides = [];
    proto3.util.initPartial(data, this as _PrewarmRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PrewarmRequest {
    return new _PrewarmRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PrewarmRequest {
    return new _PrewarmRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PrewarmRequest {
    return new _PrewarmRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _PrewarmRequest | PlainMessage<_PrewarmRequest> | undefined | null, b2: _PrewarmRequest | PlainMessage<_PrewarmRequest> | undefined | null): boolean {
    return proto3.util.equals(_PrewarmRequest as unknown as MessageType<_PrewarmRequest>, a, b2);
  }
})();
export type PrewarmRequest = InstanceType<typeof PrewarmRequest$Runtime>;
var PrewarmRequest: MessageType<PrewarmRequest> = PrewarmRequest$Runtime as unknown as MessageType<PrewarmRequest>;
(PrewarmRequest as MutableMessageType<PrewarmRequest>).runtime = proto3;
(PrewarmRequest as MutableMessageType<PrewarmRequest>).typeName = "agent.v1.PrewarmRequest";
(PrewarmRequest as MutableMessageType<PrewarmRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model_details", kind: "message", T: ModelDetails2 },
  { no: 9, name: "requested_model", kind: "message", T: RequestedModel, opt: true },
  { no: 2, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "conversation_state", kind: "message", T: ConversationStateStructure },
  { no: 4, name: "mcp_tools", kind: "message", T: McpTools },
  { no: 5, name: "mcp_file_system_options", kind: "message", T: McpFileSystemOptions, opt: true },
  { no: 6, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "try_use_best_of_n_promotion", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "custom_system_prompt", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "suggest_next_prompt", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "subagent_type_name", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "exclude_workspace_context", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "harness", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "selected_subagent_models", kind: "message", T: RequestedModel, repeated: true },
  { no: 15, name: "selected_subagent_model_details", kind: "message", T: ModelDetails2, repeated: true },
  { no: 16, name: "conversation_group_id", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "pre_fetched_blobs", kind: "message", T: PreFetchedBlob, repeated: true },
  { no: 18, name: "client_supports_inline_images", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "subagent_model_overrides", kind: "message", T: SubagentModelOverride, repeated: true },
  { no: 20, name: "can_create_cloud_subagents", kind: "scalar", T: 8, opt: true },
  { no: 21, name: "suppress_subagent_progress_update_tool", kind: "scalar", T: 8, opt: true },
  { no: 22, name: "client_supports_send_to_user", kind: "scalar", T: 8, opt: true },
  { no: 23, name: "computer_use_coordinate_mode", kind: "scalar", T: 9, opt: true },
  { no: 24, name: "agent_session_id", kind: "scalar", T: 9, opt: true },
  { no: 25, name: "client_supports_prompt_context_usage_rpc", kind: "scalar", T: 8, opt: true },
  { no: 26, name: "client_supports_routed_model_update", kind: "scalar", T: 8, opt: true },
  { no: 27, name: "client_llm_gateway_credential", kind: "message", T: ClientLlmGatewayCredential, opt: true }
]);
var ExecServerAbort$Runtime = (() => class _ExecServerAbort extends Message<_ExecServerAbort> {
  declare id: number;
  constructor(data?: PartialMessage<_ExecServerAbort>) {
    super();
    this.id = 0;
    proto3.util.initPartial(data, this as _ExecServerAbort);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecServerAbort {
    return new _ExecServerAbort().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecServerAbort {
    return new _ExecServerAbort().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecServerAbort {
    return new _ExecServerAbort().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecServerAbort | PlainMessage<_ExecServerAbort> | undefined | null, b2: _ExecServerAbort | PlainMessage<_ExecServerAbort> | undefined | null): boolean {
    return proto3.util.equals(_ExecServerAbort as unknown as MessageType<_ExecServerAbort>, a, b2);
  }
})();
export type ExecServerAbort = InstanceType<typeof ExecServerAbort$Runtime>;
var ExecServerAbort: MessageType<ExecServerAbort> = ExecServerAbort$Runtime as unknown as MessageType<ExecServerAbort>;
(ExecServerAbort as MutableMessageType<ExecServerAbort>).runtime = proto3;
(ExecServerAbort as MutableMessageType<ExecServerAbort>).typeName = "agent.v1.ExecServerAbort";
(ExecServerAbort as MutableMessageType<ExecServerAbort>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ExecServerControlMessage$Runtime = (() => class _ExecServerControlMessage extends Message<_ExecServerControlMessage> {
  declare message: { case: "abort"; value: ExecServerAbort } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecServerControlMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecServerControlMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecServerControlMessage {
    return new _ExecServerControlMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecServerControlMessage {
    return new _ExecServerControlMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecServerControlMessage {
    return new _ExecServerControlMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecServerControlMessage | PlainMessage<_ExecServerControlMessage> | undefined | null, b2: _ExecServerControlMessage | PlainMessage<_ExecServerControlMessage> | undefined | null): boolean {
    return proto3.util.equals(_ExecServerControlMessage as unknown as MessageType<_ExecServerControlMessage>, a, b2);
  }
})();
export type ExecServerControlMessage = InstanceType<typeof ExecServerControlMessage$Runtime>;
var ExecServerControlMessage: MessageType<ExecServerControlMessage> = ExecServerControlMessage$Runtime as unknown as MessageType<ExecServerControlMessage>;
(ExecServerControlMessage as MutableMessageType<ExecServerControlMessage>).runtime = proto3;
(ExecServerControlMessage as MutableMessageType<ExecServerControlMessage>).typeName = "agent.v1.ExecServerControlMessage";
(ExecServerControlMessage as MutableMessageType<ExecServerControlMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "abort", kind: "message", T: ExecServerAbort, oneof: "message" }
]);
var AgentClientMessage$Runtime = (() => class _AgentClientMessage extends Message<_AgentClientMessage> {
  declare message: { case: "runRequest"; value: AgentRunRequest } | { case: "execClientMessage"; value: ExecClientMessage } | { case: "execClientControlMessage"; value: ExecClientControlMessage } | { case: "kvClientMessage"; value: KvClientMessage } | { case: "conversationAction"; value: ConversationAction } | { case: "interactionResponse"; value: InteractionResponse } | { case: "clientHeartbeat"; value: ClientHeartbeat } | { case: "prewarmRequest"; value: PrewarmRequest } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AgentClientMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _AgentClientMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentClientMessage {
    return new _AgentClientMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentClientMessage {
    return new _AgentClientMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentClientMessage {
    return new _AgentClientMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentClientMessage | PlainMessage<_AgentClientMessage> | undefined | null, b2: _AgentClientMessage | PlainMessage<_AgentClientMessage> | undefined | null): boolean {
    return proto3.util.equals(_AgentClientMessage as unknown as MessageType<_AgentClientMessage>, a, b2);
  }
})();
export type AgentClientMessage = InstanceType<typeof AgentClientMessage$Runtime>;
var AgentClientMessage: MessageType<AgentClientMessage> = AgentClientMessage$Runtime as unknown as MessageType<AgentClientMessage>;
(AgentClientMessage as MutableMessageType<AgentClientMessage>).runtime = proto3;
(AgentClientMessage as MutableMessageType<AgentClientMessage>).typeName = "agent.v1.AgentClientMessage";
(AgentClientMessage as MutableMessageType<AgentClientMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "run_request", kind: "message", T: AgentRunRequest, oneof: "message" },
  { no: 2, name: "exec_client_message", kind: "message", T: ExecClientMessage, oneof: "message" },
  { no: 5, name: "exec_client_control_message", kind: "message", T: ExecClientControlMessage, oneof: "message" },
  { no: 3, name: "kv_client_message", kind: "message", T: KvClientMessage, oneof: "message" },
  { no: 4, name: "conversation_action", kind: "message", T: ConversationAction, oneof: "message" },
  { no: 6, name: "interaction_response", kind: "message", T: InteractionResponse, oneof: "message" },
  { no: 7, name: "client_heartbeat", kind: "message", T: ClientHeartbeat, oneof: "message" },
  { no: 8, name: "prewarm_request", kind: "message", T: PrewarmRequest, oneof: "message" }
]);
var TtftBreakdown$Runtime = (() => class _TtftBreakdown extends Message<_TtftBreakdown> {
  declare serverFirstTokenMs: number;
  declare preStreamSetupMs: number;
  declare waitForFirstEventMs: number;
  declare providerTtftMs?: number;
  declare slowPoolWaitMs: number;
  constructor(data?: PartialMessage<_TtftBreakdown>) {
    super();
    this.serverFirstTokenMs = 0;
    this.preStreamSetupMs = 0;
    this.waitForFirstEventMs = 0;
    this.slowPoolWaitMs = 0;
    proto3.util.initPartial(data, this as _TtftBreakdown);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TtftBreakdown {
    return new _TtftBreakdown().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TtftBreakdown {
    return new _TtftBreakdown().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TtftBreakdown {
    return new _TtftBreakdown().fromJsonString(jsonString, options2);
  }
  static equals(a: _TtftBreakdown | PlainMessage<_TtftBreakdown> | undefined | null, b2: _TtftBreakdown | PlainMessage<_TtftBreakdown> | undefined | null): boolean {
    return proto3.util.equals(_TtftBreakdown as unknown as MessageType<_TtftBreakdown>, a, b2);
  }
})();
export type TtftBreakdown = InstanceType<typeof TtftBreakdown$Runtime>;
var TtftBreakdown: MessageType<TtftBreakdown> = TtftBreakdown$Runtime as unknown as MessageType<TtftBreakdown>;
(TtftBreakdown as MutableMessageType<TtftBreakdown>).runtime = proto3;
(TtftBreakdown as MutableMessageType<TtftBreakdown>).typeName = "agent.v1.TtftBreakdown";
(TtftBreakdown as MutableMessageType<TtftBreakdown>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_first_token_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 2,
    name: "pre_stream_setup_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "wait_for_first_event_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 4, name: "provider_ttft_ms", kind: "scalar", T: 1, opt: true },
  {
    no: 5,
    name: "slow_pool_wait_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var AgentServerMessage$Runtime = (() => class _AgentServerMessage extends Message<_AgentServerMessage> {
  declare ttftBreakdown?: TtftBreakdown;
  declare message: { case: "interactionUpdate"; value: InteractionUpdate } | { case: "execServerMessage"; value: ExecServerMessage } | { case: "execServerControlMessage"; value: ExecServerControlMessage } | { case: "conversationCheckpointUpdate"; value: ConversationStateStructure } | { case: "kvServerMessage"; value: KvServerMessage } | { case: "interactionQuery"; value: InteractionQuery } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AgentServerMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _AgentServerMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentServerMessage {
    return new _AgentServerMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentServerMessage {
    return new _AgentServerMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentServerMessage {
    return new _AgentServerMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentServerMessage | PlainMessage<_AgentServerMessage> | undefined | null, b2: _AgentServerMessage | PlainMessage<_AgentServerMessage> | undefined | null): boolean {
    return proto3.util.equals(_AgentServerMessage as unknown as MessageType<_AgentServerMessage>, a, b2);
  }
})();
export type AgentServerMessage = InstanceType<typeof AgentServerMessage$Runtime>;
var AgentServerMessage: MessageType<AgentServerMessage> = AgentServerMessage$Runtime as unknown as MessageType<AgentServerMessage>;
(AgentServerMessage as MutableMessageType<AgentServerMessage>).runtime = proto3;
(AgentServerMessage as MutableMessageType<AgentServerMessage>).typeName = "agent.v1.AgentServerMessage";
(AgentServerMessage as MutableMessageType<AgentServerMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "interaction_update", kind: "message", T: InteractionUpdate, oneof: "message" },
  { no: 2, name: "exec_server_message", kind: "message", T: ExecServerMessage, oneof: "message" },
  { no: 5, name: "exec_server_control_message", kind: "message", T: ExecServerControlMessage, oneof: "message" },
  { no: 3, name: "conversation_checkpoint_update", kind: "message", T: ConversationStateStructure, oneof: "message" },
  { no: 4, name: "kv_server_message", kind: "message", T: KvServerMessage, oneof: "message" },
  { no: 7, name: "interaction_query", kind: "message", T: InteractionQuery, oneof: "message" },
  { no: 8, name: "ttft_breakdown", kind: "message", T: TtftBreakdown }
]);
var NameAgentRequest$Runtime = (() => class _NameAgentRequest extends Message<_NameAgentRequest> {
  declare userMessage: string;
  constructor(data?: PartialMessage<_NameAgentRequest>) {
    super();
    this.userMessage = "";
    proto3.util.initPartial(data, this as _NameAgentRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NameAgentRequest {
    return new _NameAgentRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NameAgentRequest {
    return new _NameAgentRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NameAgentRequest {
    return new _NameAgentRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _NameAgentRequest | PlainMessage<_NameAgentRequest> | undefined | null, b2: _NameAgentRequest | PlainMessage<_NameAgentRequest> | undefined | null): boolean {
    return proto3.util.equals(_NameAgentRequest as unknown as MessageType<_NameAgentRequest>, a, b2);
  }
})();
export type NameAgentRequest = InstanceType<typeof NameAgentRequest$Runtime>;
var NameAgentRequest: MessageType<NameAgentRequest> = NameAgentRequest$Runtime as unknown as MessageType<NameAgentRequest>;
(NameAgentRequest as MutableMessageType<NameAgentRequest>).runtime = proto3;
(NameAgentRequest as MutableMessageType<NameAgentRequest>).typeName = "agent.v1.NameAgentRequest";
(NameAgentRequest as MutableMessageType<NameAgentRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NameAgentResponse$Runtime = (() => class _NameAgentResponse extends Message<_NameAgentResponse> {
  declare name: string;
  constructor(data?: PartialMessage<_NameAgentResponse>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _NameAgentResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NameAgentResponse {
    return new _NameAgentResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NameAgentResponse {
    return new _NameAgentResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NameAgentResponse {
    return new _NameAgentResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _NameAgentResponse | PlainMessage<_NameAgentResponse> | undefined | null, b2: _NameAgentResponse | PlainMessage<_NameAgentResponse> | undefined | null): boolean {
    return proto3.util.equals(_NameAgentResponse as unknown as MessageType<_NameAgentResponse>, a, b2);
  }
})();
export type NameAgentResponse = InstanceType<typeof NameAgentResponse$Runtime>;
var NameAgentResponse: MessageType<NameAgentResponse> = NameAgentResponse$Runtime as unknown as MessageType<NameAgentResponse>;
(NameAgentResponse as MutableMessageType<NameAgentResponse>).runtime = proto3;
(NameAgentResponse as MutableMessageType<NameAgentResponse>).typeName = "agent.v1.NameAgentResponse";
(NameAgentResponse as MutableMessageType<NameAgentResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateConversationMetadataRequest$Runtime = (() => class _UpdateConversationMetadataRequest extends Message<_UpdateConversationMetadataRequest> {
  declare conversationId: string;
  declare name?: string;
  declare onlySetNameIfEmpty?: boolean;
  declare workspacePaths: string[];
  constructor(data?: PartialMessage<_UpdateConversationMetadataRequest>) {
    super();
    this.conversationId = "";
    this.workspacePaths = [];
    proto3.util.initPartial(data, this as _UpdateConversationMetadataRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateConversationMetadataRequest {
    return new _UpdateConversationMetadataRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateConversationMetadataRequest {
    return new _UpdateConversationMetadataRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateConversationMetadataRequest {
    return new _UpdateConversationMetadataRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateConversationMetadataRequest | PlainMessage<_UpdateConversationMetadataRequest> | undefined | null, b2: _UpdateConversationMetadataRequest | PlainMessage<_UpdateConversationMetadataRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateConversationMetadataRequest as unknown as MessageType<_UpdateConversationMetadataRequest>, a, b2);
  }
})();
export type UpdateConversationMetadataRequest = InstanceType<typeof UpdateConversationMetadataRequest$Runtime>;
var UpdateConversationMetadataRequest: MessageType<UpdateConversationMetadataRequest> = UpdateConversationMetadataRequest$Runtime as unknown as MessageType<UpdateConversationMetadataRequest>;
(UpdateConversationMetadataRequest as MutableMessageType<UpdateConversationMetadataRequest>).runtime = proto3;
(UpdateConversationMetadataRequest as MutableMessageType<UpdateConversationMetadataRequest>).typeName = "agent.v1.UpdateConversationMetadataRequest";
(UpdateConversationMetadataRequest as MutableMessageType<UpdateConversationMetadataRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "only_set_name_if_empty", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "workspace_paths", kind: "scalar", T: 9, repeated: true }
]);
var UpdateConversationMetadataResponse$Runtime = (() => class _UpdateConversationMetadataResponse extends Message<_UpdateConversationMetadataResponse> {
  constructor(data?: PartialMessage<_UpdateConversationMetadataResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateConversationMetadataResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateConversationMetadataResponse {
    return new _UpdateConversationMetadataResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateConversationMetadataResponse {
    return new _UpdateConversationMetadataResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateConversationMetadataResponse {
    return new _UpdateConversationMetadataResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateConversationMetadataResponse | PlainMessage<_UpdateConversationMetadataResponse> | undefined | null, b2: _UpdateConversationMetadataResponse | PlainMessage<_UpdateConversationMetadataResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateConversationMetadataResponse as unknown as MessageType<_UpdateConversationMetadataResponse>, a, b2);
  }
})();
export type UpdateConversationMetadataResponse = InstanceType<typeof UpdateConversationMetadataResponse$Runtime>;
var UpdateConversationMetadataResponse: MessageType<UpdateConversationMetadataResponse> = UpdateConversationMetadataResponse$Runtime as unknown as MessageType<UpdateConversationMetadataResponse>;
(UpdateConversationMetadataResponse as MutableMessageType<UpdateConversationMetadataResponse>).runtime = proto3;
(UpdateConversationMetadataResponse as MutableMessageType<UpdateConversationMetadataResponse>).typeName = "agent.v1.UpdateConversationMetadataResponse";
(UpdateConversationMetadataResponse as MutableMessageType<UpdateConversationMetadataResponse>).fields = proto3.util.newFieldList(() => []);
var GetPromptContextUsageRequest$Runtime = (() => class _GetPromptContextUsageRequest extends Message<_GetPromptContextUsageRequest> {
  declare conversationId: string;
  declare snapshotBlobId: Uint8Array;
  constructor(data?: PartialMessage<_GetPromptContextUsageRequest>) {
    super();
    this.conversationId = "";
    this.snapshotBlobId = new Uint8Array(0);
    proto3.util.initPartial(data, this as _GetPromptContextUsageRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetPromptContextUsageRequest {
    return new _GetPromptContextUsageRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetPromptContextUsageRequest {
    return new _GetPromptContextUsageRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetPromptContextUsageRequest {
    return new _GetPromptContextUsageRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetPromptContextUsageRequest | PlainMessage<_GetPromptContextUsageRequest> | undefined | null, b2: _GetPromptContextUsageRequest | PlainMessage<_GetPromptContextUsageRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPromptContextUsageRequest as unknown as MessageType<_GetPromptContextUsageRequest>, a, b2);
  }
})();
export type GetPromptContextUsageRequest = InstanceType<typeof GetPromptContextUsageRequest$Runtime>;
var GetPromptContextUsageRequest: MessageType<GetPromptContextUsageRequest> = GetPromptContextUsageRequest$Runtime as unknown as MessageType<GetPromptContextUsageRequest>;
(GetPromptContextUsageRequest as MutableMessageType<GetPromptContextUsageRequest>).runtime = proto3;
(GetPromptContextUsageRequest as MutableMessageType<GetPromptContextUsageRequest>).typeName = "agent.v1.GetPromptContextUsageRequest";
(GetPromptContextUsageRequest as MutableMessageType<GetPromptContextUsageRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "snapshot_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var GetPromptContextUsageResponse$Runtime = (() => class _GetPromptContextUsageResponse extends Message<_GetPromptContextUsageResponse> {
  declare snapshot?: PromptContextUsageSnapshot;
  constructor(data?: PartialMessage<_GetPromptContextUsageResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetPromptContextUsageResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetPromptContextUsageResponse {
    return new _GetPromptContextUsageResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetPromptContextUsageResponse {
    return new _GetPromptContextUsageResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetPromptContextUsageResponse {
    return new _GetPromptContextUsageResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetPromptContextUsageResponse | PlainMessage<_GetPromptContextUsageResponse> | undefined | null, b2: _GetPromptContextUsageResponse | PlainMessage<_GetPromptContextUsageResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPromptContextUsageResponse as unknown as MessageType<_GetPromptContextUsageResponse>, a, b2);
  }
})();
export type GetPromptContextUsageResponse = InstanceType<typeof GetPromptContextUsageResponse$Runtime>;
var GetPromptContextUsageResponse: MessageType<GetPromptContextUsageResponse> = GetPromptContextUsageResponse$Runtime as unknown as MessageType<GetPromptContextUsageResponse>;
(GetPromptContextUsageResponse as MutableMessageType<GetPromptContextUsageResponse>).runtime = proto3;
(GetPromptContextUsageResponse as MutableMessageType<GetPromptContextUsageResponse>).typeName = "agent.v1.GetPromptContextUsageResponse";
(GetPromptContextUsageResponse as MutableMessageType<GetPromptContextUsageResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "snapshot", kind: "message", T: PromptContextUsageSnapshot }
]);
var CreateTranscriptOverviewRequest$Runtime = (() => class _CreateTranscriptOverviewRequest extends Message<_CreateTranscriptOverviewRequest> {
  declare formattedConversation: string;
  constructor(data?: PartialMessage<_CreateTranscriptOverviewRequest>) {
    super();
    this.formattedConversation = "";
    proto3.util.initPartial(data, this as _CreateTranscriptOverviewRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateTranscriptOverviewRequest {
    return new _CreateTranscriptOverviewRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateTranscriptOverviewRequest {
    return new _CreateTranscriptOverviewRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateTranscriptOverviewRequest {
    return new _CreateTranscriptOverviewRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateTranscriptOverviewRequest | PlainMessage<_CreateTranscriptOverviewRequest> | undefined | null, b2: _CreateTranscriptOverviewRequest | PlainMessage<_CreateTranscriptOverviewRequest> | undefined | null): boolean {
    return proto3.util.equals(_CreateTranscriptOverviewRequest as unknown as MessageType<_CreateTranscriptOverviewRequest>, a, b2);
  }
})();
export type CreateTranscriptOverviewRequest = InstanceType<typeof CreateTranscriptOverviewRequest$Runtime>;
var CreateTranscriptOverviewRequest: MessageType<CreateTranscriptOverviewRequest> = CreateTranscriptOverviewRequest$Runtime as unknown as MessageType<CreateTranscriptOverviewRequest>;
(CreateTranscriptOverviewRequest as MutableMessageType<CreateTranscriptOverviewRequest>).runtime = proto3;
(CreateTranscriptOverviewRequest as MutableMessageType<CreateTranscriptOverviewRequest>).typeName = "agent.v1.CreateTranscriptOverviewRequest";
(CreateTranscriptOverviewRequest as MutableMessageType<CreateTranscriptOverviewRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "formatted_conversation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateTranscriptOverviewResponse$Runtime = (() => class _CreateTranscriptOverviewResponse extends Message<_CreateTranscriptOverviewResponse> {
  declare overview: string;
  constructor(data?: PartialMessage<_CreateTranscriptOverviewResponse>) {
    super();
    this.overview = "";
    proto3.util.initPartial(data, this as _CreateTranscriptOverviewResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateTranscriptOverviewResponse {
    return new _CreateTranscriptOverviewResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateTranscriptOverviewResponse {
    return new _CreateTranscriptOverviewResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateTranscriptOverviewResponse {
    return new _CreateTranscriptOverviewResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateTranscriptOverviewResponse | PlainMessage<_CreateTranscriptOverviewResponse> | undefined | null, b2: _CreateTranscriptOverviewResponse | PlainMessage<_CreateTranscriptOverviewResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreateTranscriptOverviewResponse as unknown as MessageType<_CreateTranscriptOverviewResponse>, a, b2);
  }
})();
export type CreateTranscriptOverviewResponse = InstanceType<typeof CreateTranscriptOverviewResponse$Runtime>;
var CreateTranscriptOverviewResponse: MessageType<CreateTranscriptOverviewResponse> = CreateTranscriptOverviewResponse$Runtime as unknown as MessageType<CreateTranscriptOverviewResponse>;
(CreateTranscriptOverviewResponse as MutableMessageType<CreateTranscriptOverviewResponse>).runtime = proto3;
(CreateTranscriptOverviewResponse as MutableMessageType<CreateTranscriptOverviewResponse>).typeName = "agent.v1.CreateTranscriptOverviewResponse";
(CreateTranscriptOverviewResponse as MutableMessageType<CreateTranscriptOverviewResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "overview",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetUsableModelsRequest$Runtime = (() => class _GetUsableModelsRequest extends Message<_GetUsableModelsRequest> {
  declare customModelIds: string[];
  constructor(data?: PartialMessage<_GetUsableModelsRequest>) {
    super();
    this.customModelIds = [];
    proto3.util.initPartial(data, this as _GetUsableModelsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetUsableModelsRequest {
    return new _GetUsableModelsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetUsableModelsRequest {
    return new _GetUsableModelsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetUsableModelsRequest {
    return new _GetUsableModelsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetUsableModelsRequest | PlainMessage<_GetUsableModelsRequest> | undefined | null, b2: _GetUsableModelsRequest | PlainMessage<_GetUsableModelsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetUsableModelsRequest as unknown as MessageType<_GetUsableModelsRequest>, a, b2);
  }
})();
export type GetUsableModelsRequest = InstanceType<typeof GetUsableModelsRequest$Runtime>;
var GetUsableModelsRequest: MessageType<GetUsableModelsRequest> = GetUsableModelsRequest$Runtime as unknown as MessageType<GetUsableModelsRequest>;
(GetUsableModelsRequest as MutableMessageType<GetUsableModelsRequest>).runtime = proto3;
(GetUsableModelsRequest as MutableMessageType<GetUsableModelsRequest>).typeName = "agent.v1.GetUsableModelsRequest";
(GetUsableModelsRequest as MutableMessageType<GetUsableModelsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_model_ids", kind: "scalar", T: 9, repeated: true }
]);
var GetUsableModelsResponse$Runtime = (() => class _GetUsableModelsResponse extends Message<_GetUsableModelsResponse> {
  declare models: ModelDetails2[];
  constructor(data?: PartialMessage<_GetUsableModelsResponse>) {
    super();
    this.models = [];
    proto3.util.initPartial(data, this as _GetUsableModelsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetUsableModelsResponse {
    return new _GetUsableModelsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetUsableModelsResponse {
    return new _GetUsableModelsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetUsableModelsResponse {
    return new _GetUsableModelsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetUsableModelsResponse | PlainMessage<_GetUsableModelsResponse> | undefined | null, b2: _GetUsableModelsResponse | PlainMessage<_GetUsableModelsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetUsableModelsResponse as unknown as MessageType<_GetUsableModelsResponse>, a, b2);
  }
})();
export type GetUsableModelsResponse = InstanceType<typeof GetUsableModelsResponse$Runtime>;
var GetUsableModelsResponse: MessageType<GetUsableModelsResponse> = GetUsableModelsResponse$Runtime as unknown as MessageType<GetUsableModelsResponse>;
(GetUsableModelsResponse as MutableMessageType<GetUsableModelsResponse>).runtime = proto3;
(GetUsableModelsResponse as MutableMessageType<GetUsableModelsResponse>).typeName = "agent.v1.GetUsableModelsResponse";
(GetUsableModelsResponse as MutableMessageType<GetUsableModelsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "models", kind: "message", T: ModelDetails2, repeated: true }
]);
var GetDefaultModelForCliRequest$Runtime = (() => class _GetDefaultModelForCliRequest extends Message<_GetDefaultModelForCliRequest> {
  constructor(data?: PartialMessage<_GetDefaultModelForCliRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetDefaultModelForCliRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetDefaultModelForCliRequest {
    return new _GetDefaultModelForCliRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetDefaultModelForCliRequest {
    return new _GetDefaultModelForCliRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetDefaultModelForCliRequest {
    return new _GetDefaultModelForCliRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetDefaultModelForCliRequest | PlainMessage<_GetDefaultModelForCliRequest> | undefined | null, b2: _GetDefaultModelForCliRequest | PlainMessage<_GetDefaultModelForCliRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetDefaultModelForCliRequest as unknown as MessageType<_GetDefaultModelForCliRequest>, a, b2);
  }
})();
export type GetDefaultModelForCliRequest = InstanceType<typeof GetDefaultModelForCliRequest$Runtime>;
var GetDefaultModelForCliRequest: MessageType<GetDefaultModelForCliRequest> = GetDefaultModelForCliRequest$Runtime as unknown as MessageType<GetDefaultModelForCliRequest>;
(GetDefaultModelForCliRequest as MutableMessageType<GetDefaultModelForCliRequest>).runtime = proto3;
(GetDefaultModelForCliRequest as MutableMessageType<GetDefaultModelForCliRequest>).typeName = "agent.v1.GetDefaultModelForCliRequest";
(GetDefaultModelForCliRequest as MutableMessageType<GetDefaultModelForCliRequest>).fields = proto3.util.newFieldList(() => []);
var GetDefaultModelForCliResponse$Runtime = (() => class _GetDefaultModelForCliResponse extends Message<_GetDefaultModelForCliResponse> {
  declare model?: ModelDetails2;
  constructor(data?: PartialMessage<_GetDefaultModelForCliResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetDefaultModelForCliResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetDefaultModelForCliResponse {
    return new _GetDefaultModelForCliResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetDefaultModelForCliResponse {
    return new _GetDefaultModelForCliResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetDefaultModelForCliResponse {
    return new _GetDefaultModelForCliResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetDefaultModelForCliResponse | PlainMessage<_GetDefaultModelForCliResponse> | undefined | null, b2: _GetDefaultModelForCliResponse | PlainMessage<_GetDefaultModelForCliResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetDefaultModelForCliResponse as unknown as MessageType<_GetDefaultModelForCliResponse>, a, b2);
  }
})();
export type GetDefaultModelForCliResponse = InstanceType<typeof GetDefaultModelForCliResponse$Runtime>;
var GetDefaultModelForCliResponse: MessageType<GetDefaultModelForCliResponse> = GetDefaultModelForCliResponse$Runtime as unknown as MessageType<GetDefaultModelForCliResponse>;
(GetDefaultModelForCliResponse as MutableMessageType<GetDefaultModelForCliResponse>).runtime = proto3;
(GetDefaultModelForCliResponse as MutableMessageType<GetDefaultModelForCliResponse>).typeName = "agent.v1.GetDefaultModelForCliResponse";
(GetDefaultModelForCliResponse as MutableMessageType<GetDefaultModelForCliResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model", kind: "message", T: ModelDetails2 }
]);
var GetAllowedModelIntentsRequest$Runtime = (() => class _GetAllowedModelIntentsRequest extends Message<_GetAllowedModelIntentsRequest> {
  constructor(data?: PartialMessage<_GetAllowedModelIntentsRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetAllowedModelIntentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAllowedModelIntentsRequest {
    return new _GetAllowedModelIntentsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAllowedModelIntentsRequest {
    return new _GetAllowedModelIntentsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAllowedModelIntentsRequest {
    return new _GetAllowedModelIntentsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAllowedModelIntentsRequest | PlainMessage<_GetAllowedModelIntentsRequest> | undefined | null, b2: _GetAllowedModelIntentsRequest | PlainMessage<_GetAllowedModelIntentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetAllowedModelIntentsRequest as unknown as MessageType<_GetAllowedModelIntentsRequest>, a, b2);
  }
})();
export type GetAllowedModelIntentsRequest = InstanceType<typeof GetAllowedModelIntentsRequest$Runtime>;
var GetAllowedModelIntentsRequest: MessageType<GetAllowedModelIntentsRequest> = GetAllowedModelIntentsRequest$Runtime as unknown as MessageType<GetAllowedModelIntentsRequest>;
(GetAllowedModelIntentsRequest as MutableMessageType<GetAllowedModelIntentsRequest>).runtime = proto3;
(GetAllowedModelIntentsRequest as MutableMessageType<GetAllowedModelIntentsRequest>).typeName = "agent.v1.GetAllowedModelIntentsRequest";
(GetAllowedModelIntentsRequest as MutableMessageType<GetAllowedModelIntentsRequest>).fields = proto3.util.newFieldList(() => []);
var GetAllowedModelIntentsResponse$Runtime = (() => class _GetAllowedModelIntentsResponse extends Message<_GetAllowedModelIntentsResponse> {
  declare modelIntents: string[];
  constructor(data?: PartialMessage<_GetAllowedModelIntentsResponse>) {
    super();
    this.modelIntents = [];
    proto3.util.initPartial(data, this as _GetAllowedModelIntentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAllowedModelIntentsResponse {
    return new _GetAllowedModelIntentsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAllowedModelIntentsResponse {
    return new _GetAllowedModelIntentsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAllowedModelIntentsResponse {
    return new _GetAllowedModelIntentsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAllowedModelIntentsResponse | PlainMessage<_GetAllowedModelIntentsResponse> | undefined | null, b2: _GetAllowedModelIntentsResponse | PlainMessage<_GetAllowedModelIntentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetAllowedModelIntentsResponse as unknown as MessageType<_GetAllowedModelIntentsResponse>, a, b2);
  }
})();
export type GetAllowedModelIntentsResponse = InstanceType<typeof GetAllowedModelIntentsResponse$Runtime>;
var GetAllowedModelIntentsResponse: MessageType<GetAllowedModelIntentsResponse> = GetAllowedModelIntentsResponse$Runtime as unknown as MessageType<GetAllowedModelIntentsResponse>;
(GetAllowedModelIntentsResponse as MutableMessageType<GetAllowedModelIntentsResponse>).runtime = proto3;
(GetAllowedModelIntentsResponse as MutableMessageType<GetAllowedModelIntentsResponse>).typeName = "agent.v1.GetAllowedModelIntentsResponse";
(GetAllowedModelIntentsResponse as MutableMessageType<GetAllowedModelIntentsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model_intents", kind: "scalar", T: 9, repeated: true }
]);
var IdeEditorsStateFile$Runtime = (() => class _IdeEditorsStateFile extends Message<_IdeEditorsStateFile> {
  declare relativePath: string;
  declare absolutePath: string;
  declare isCurrentlyFocused?: boolean;
  declare currentLineNumber?: number;
  declare currentLineText?: string;
  declare lineCount?: number;
  constructor(data?: PartialMessage<_IdeEditorsStateFile>) {
    super();
    this.relativePath = "";
    this.absolutePath = "";
    proto3.util.initPartial(data, this as _IdeEditorsStateFile);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _IdeEditorsStateFile {
    return new _IdeEditorsStateFile().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _IdeEditorsStateFile {
    return new _IdeEditorsStateFile().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _IdeEditorsStateFile {
    return new _IdeEditorsStateFile().fromJsonString(jsonString, options2);
  }
  static equals(a: _IdeEditorsStateFile | PlainMessage<_IdeEditorsStateFile> | undefined | null, b2: _IdeEditorsStateFile | PlainMessage<_IdeEditorsStateFile> | undefined | null): boolean {
    return proto3.util.equals(_IdeEditorsStateFile as unknown as MessageType<_IdeEditorsStateFile>, a, b2);
  }
})();
export type IdeEditorsStateFile = InstanceType<typeof IdeEditorsStateFile$Runtime>;
var IdeEditorsStateFile: MessageType<IdeEditorsStateFile> = IdeEditorsStateFile$Runtime as unknown as MessageType<IdeEditorsStateFile>;
(IdeEditorsStateFile as MutableMessageType<IdeEditorsStateFile>).runtime = proto3;
(IdeEditorsStateFile as MutableMessageType<IdeEditorsStateFile>).typeName = "agent.v1.IdeEditorsStateFile";
(IdeEditorsStateFile as MutableMessageType<IdeEditorsStateFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "is_currently_focused", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "current_line_number", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "current_line_text", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "line_count", kind: "scalar", T: 5, opt: true }
]);
var IdeEditorsStateLite$Runtime = (() => class _IdeEditorsStateLite extends Message<_IdeEditorsStateLite> {
  declare recentlyViewedFiles: IdeEditorsStateFile[];
  constructor(data?: PartialMessage<_IdeEditorsStateLite>) {
    super();
    this.recentlyViewedFiles = [];
    proto3.util.initPartial(data, this as _IdeEditorsStateLite);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _IdeEditorsStateLite {
    return new _IdeEditorsStateLite().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _IdeEditorsStateLite {
    return new _IdeEditorsStateLite().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _IdeEditorsStateLite {
    return new _IdeEditorsStateLite().fromJsonString(jsonString, options2);
  }
  static equals(a: _IdeEditorsStateLite | PlainMessage<_IdeEditorsStateLite> | undefined | null, b2: _IdeEditorsStateLite | PlainMessage<_IdeEditorsStateLite> | undefined | null): boolean {
    return proto3.util.equals(_IdeEditorsStateLite as unknown as MessageType<_IdeEditorsStateLite>, a, b2);
  }
})();
export type IdeEditorsStateLite = InstanceType<typeof IdeEditorsStateLite$Runtime>;
var IdeEditorsStateLite: MessageType<IdeEditorsStateLite> = IdeEditorsStateLite$Runtime as unknown as MessageType<IdeEditorsStateLite>;
(IdeEditorsStateLite as MutableMessageType<IdeEditorsStateLite>).runtime = proto3;
(IdeEditorsStateLite as MutableMessageType<IdeEditorsStateLite>).typeName = "agent.v1.IdeEditorsStateLite";
(IdeEditorsStateLite as MutableMessageType<IdeEditorsStateLite>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "recently_viewed_files", kind: "message", T: IdeEditorsStateFile, repeated: true }
]);
var BlobEntry$Runtime = (() => class _BlobEntry extends Message<_BlobEntry> {
  declare id: Uint8Array;
  declare value: Uint8Array;
  constructor(data?: PartialMessage<_BlobEntry>) {
    super();
    this.id = new Uint8Array(0);
    this.value = new Uint8Array(0);
    proto3.util.initPartial(data, this as _BlobEntry);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BlobEntry {
    return new _BlobEntry().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BlobEntry {
    return new _BlobEntry().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BlobEntry {
    return new _BlobEntry().fromJsonString(jsonString, options2);
  }
  static equals(a: _BlobEntry | PlainMessage<_BlobEntry> | undefined | null, b2: _BlobEntry | PlainMessage<_BlobEntry> | undefined | null): boolean {
    return proto3.util.equals(_BlobEntry as unknown as MessageType<_BlobEntry>, a, b2);
  }
})();
export type BlobEntry = InstanceType<typeof BlobEntry$Runtime>;
var BlobEntry: MessageType<BlobEntry> = BlobEntry$Runtime as unknown as MessageType<BlobEntry>;
(BlobEntry as MutableMessageType<BlobEntry>).runtime = proto3;
(BlobEntry as MutableMessageType<BlobEntry>).typeName = "agent.v1.BlobEntry";
(BlobEntry as MutableMessageType<BlobEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var UploadConversationBlobsRequest$Runtime = (() => class _UploadConversationBlobsRequest extends Message<_UploadConversationBlobsRequest> {
  declare conversationId: string;
  declare blobs: BlobEntry[];
  declare chunkIndex: number;
  declare totalChunks: number;
  constructor(data?: PartialMessage<_UploadConversationBlobsRequest>) {
    super();
    this.conversationId = "";
    this.blobs = [];
    this.chunkIndex = 0;
    this.totalChunks = 0;
    proto3.util.initPartial(data, this as _UploadConversationBlobsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadConversationBlobsRequest {
    return new _UploadConversationBlobsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadConversationBlobsRequest {
    return new _UploadConversationBlobsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadConversationBlobsRequest {
    return new _UploadConversationBlobsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadConversationBlobsRequest | PlainMessage<_UploadConversationBlobsRequest> | undefined | null, b2: _UploadConversationBlobsRequest | PlainMessage<_UploadConversationBlobsRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadConversationBlobsRequest as unknown as MessageType<_UploadConversationBlobsRequest>, a, b2);
  }
})();
export type UploadConversationBlobsRequest = InstanceType<typeof UploadConversationBlobsRequest$Runtime>;
var UploadConversationBlobsRequest: MessageType<UploadConversationBlobsRequest> = UploadConversationBlobsRequest$Runtime as unknown as MessageType<UploadConversationBlobsRequest>;
(UploadConversationBlobsRequest as MutableMessageType<UploadConversationBlobsRequest>).runtime = proto3;
(UploadConversationBlobsRequest as MutableMessageType<UploadConversationBlobsRequest>).typeName = "agent.v1.UploadConversationBlobsRequest";
(UploadConversationBlobsRequest as MutableMessageType<UploadConversationBlobsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "blobs", kind: "message", T: BlobEntry, repeated: true },
  {
    no: 3,
    name: "chunk_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "total_chunks",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var UploadConversationBlobsResponse$Runtime = (() => class _UploadConversationBlobsResponse extends Message<_UploadConversationBlobsResponse> {
  constructor(data?: PartialMessage<_UploadConversationBlobsResponse>) {
    super();
    proto3.util.initPartial(data, this as _UploadConversationBlobsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadConversationBlobsResponse {
    return new _UploadConversationBlobsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadConversationBlobsResponse {
    return new _UploadConversationBlobsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadConversationBlobsResponse {
    return new _UploadConversationBlobsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadConversationBlobsResponse | PlainMessage<_UploadConversationBlobsResponse> | undefined | null, b2: _UploadConversationBlobsResponse | PlainMessage<_UploadConversationBlobsResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadConversationBlobsResponse as unknown as MessageType<_UploadConversationBlobsResponse>, a, b2);
  }
})();
export type UploadConversationBlobsResponse = InstanceType<typeof UploadConversationBlobsResponse$Runtime>;
var UploadConversationBlobsResponse: MessageType<UploadConversationBlobsResponse> = UploadConversationBlobsResponse$Runtime as unknown as MessageType<UploadConversationBlobsResponse>;
(UploadConversationBlobsResponse as MutableMessageType<UploadConversationBlobsResponse>).runtime = proto3;
(UploadConversationBlobsResponse as MutableMessageType<UploadConversationBlobsResponse>).typeName = "agent.v1.UploadConversationBlobsResponse";
(UploadConversationBlobsResponse as MutableMessageType<UploadConversationBlobsResponse>).fields = proto3.util.newFieldList(() => []);
var LocalPromptQualityInvocation$Runtime = (() => class _LocalPromptQualityInvocation extends Message<_LocalPromptQualityInvocation> {
  declare invocationId: string;
  declare attemptRequestId: string;
  declare attempt: number;
  declare startedAt: string;
  declare completedAt: string;
  declare modelId: string;
  declare providerName: string;
  declare status: LocalPromptQualityInvocationStatus;
  declare messages: Uint8Array[];
  declare responseMessages: Uint8Array[];
  declare toolsJson: string;
  declare promptTokens: bigint;
  declare completionTokens: bigint;
  declare totalTokens: bigint;
  declare tokenLimit?: bigint;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_LocalPromptQualityInvocation>) {
    super();
    this.invocationId = "";
    this.attemptRequestId = "";
    this.attempt = 0;
    this.startedAt = "";
    this.completedAt = "";
    this.modelId = "";
    this.providerName = "";
    this.status = LocalPromptQualityInvocationStatus.UNSPECIFIED;
    this.messages = [];
    this.responseMessages = [];
    this.toolsJson = "";
    this.promptTokens = protoInt64.zero;
    this.completionTokens = protoInt64.zero;
    this.totalTokens = protoInt64.zero;
    proto3.util.initPartial(data, this as _LocalPromptQualityInvocation);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LocalPromptQualityInvocation {
    return new _LocalPromptQualityInvocation().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LocalPromptQualityInvocation {
    return new _LocalPromptQualityInvocation().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LocalPromptQualityInvocation {
    return new _LocalPromptQualityInvocation().fromJsonString(jsonString, options2);
  }
  static equals(a: _LocalPromptQualityInvocation | PlainMessage<_LocalPromptQualityInvocation> | undefined | null, b2: _LocalPromptQualityInvocation | PlainMessage<_LocalPromptQualityInvocation> | undefined | null): boolean {
    return proto3.util.equals(_LocalPromptQualityInvocation as unknown as MessageType<_LocalPromptQualityInvocation>, a, b2);
  }
})();
export type LocalPromptQualityInvocation = InstanceType<typeof LocalPromptQualityInvocation$Runtime>;
var LocalPromptQualityInvocation: MessageType<LocalPromptQualityInvocation> = LocalPromptQualityInvocation$Runtime as unknown as MessageType<LocalPromptQualityInvocation>;
(LocalPromptQualityInvocation as MutableMessageType<LocalPromptQualityInvocation>).runtime = proto3;
(LocalPromptQualityInvocation as MutableMessageType<LocalPromptQualityInvocation>).typeName = "agent.v1.LocalPromptQualityInvocation";
(LocalPromptQualityInvocation as MutableMessageType<LocalPromptQualityInvocation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "invocation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "attempt_request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "attempt",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "started_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "completed_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "provider_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(LocalPromptQualityInvocationStatus) },
  { no: 9, name: "messages", kind: "scalar", T: 12, repeated: true },
  { no: 10, name: "response_messages", kind: "scalar", T: 12, repeated: true },
  {
    no: 11,
    name: "tools_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "prompt_tokens",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 13,
    name: "completion_tokens",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 14,
    name: "total_tokens",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 15, name: "token_limit", kind: "scalar", T: 3, opt: true },
  { no: 16, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var UploadLocalAgentRunToPromptQualityRequest$Runtime = (() => class _UploadLocalAgentRunToPromptQualityRequest extends Message<_UploadLocalAgentRunToPromptQualityRequest> {
  declare schemaVersion: number;
  declare generationUuid: string;
  declare conversationId: string;
  declare payloadDigest: string;
  declare invocations: LocalPromptQualityInvocation[];
  declare terminalStatus: LocalPromptQualityInvocationStatus;
  declare createdAt: string;
  constructor(data?: PartialMessage<_UploadLocalAgentRunToPromptQualityRequest>) {
    super();
    this.schemaVersion = 0;
    this.generationUuid = "";
    this.conversationId = "";
    this.payloadDigest = "";
    this.invocations = [];
    this.terminalStatus = LocalPromptQualityInvocationStatus.UNSPECIFIED;
    this.createdAt = "";
    proto3.util.initPartial(data, this as _UploadLocalAgentRunToPromptQualityRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadLocalAgentRunToPromptQualityRequest {
    return new _UploadLocalAgentRunToPromptQualityRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadLocalAgentRunToPromptQualityRequest {
    return new _UploadLocalAgentRunToPromptQualityRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadLocalAgentRunToPromptQualityRequest {
    return new _UploadLocalAgentRunToPromptQualityRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadLocalAgentRunToPromptQualityRequest | PlainMessage<_UploadLocalAgentRunToPromptQualityRequest> | undefined | null, b2: _UploadLocalAgentRunToPromptQualityRequest | PlainMessage<_UploadLocalAgentRunToPromptQualityRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadLocalAgentRunToPromptQualityRequest as unknown as MessageType<_UploadLocalAgentRunToPromptQualityRequest>, a, b2);
  }
})();
export type UploadLocalAgentRunToPromptQualityRequest = InstanceType<typeof UploadLocalAgentRunToPromptQualityRequest$Runtime>;
var UploadLocalAgentRunToPromptQualityRequest: MessageType<UploadLocalAgentRunToPromptQualityRequest> = UploadLocalAgentRunToPromptQualityRequest$Runtime as unknown as MessageType<UploadLocalAgentRunToPromptQualityRequest>;
(UploadLocalAgentRunToPromptQualityRequest as MutableMessageType<UploadLocalAgentRunToPromptQualityRequest>).runtime = proto3;
(UploadLocalAgentRunToPromptQualityRequest as MutableMessageType<UploadLocalAgentRunToPromptQualityRequest>).typeName = "agent.v1.UploadLocalAgentRunToPromptQualityRequest";
(UploadLocalAgentRunToPromptQualityRequest as MutableMessageType<UploadLocalAgentRunToPromptQualityRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "schema_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "generation_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "payload_digest",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "invocations", kind: "message", T: LocalPromptQualityInvocation, repeated: true },
  { no: 6, name: "terminal_status", kind: "enum", T: proto3.getEnumType(LocalPromptQualityInvocationStatus) },
  {
    no: 7,
    name: "created_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UploadLocalAgentRunToPromptQualityResponse$Runtime = (() => class _UploadLocalAgentRunToPromptQualityResponse extends Message<_UploadLocalAgentRunToPromptQualityResponse> {
  declare requestId: string;
  declare primaryInvocationId: string;
  constructor(data?: PartialMessage<_UploadLocalAgentRunToPromptQualityResponse>) {
    super();
    this.requestId = "";
    this.primaryInvocationId = "";
    proto3.util.initPartial(data, this as _UploadLocalAgentRunToPromptQualityResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UploadLocalAgentRunToPromptQualityResponse {
    return new _UploadLocalAgentRunToPromptQualityResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UploadLocalAgentRunToPromptQualityResponse {
    return new _UploadLocalAgentRunToPromptQualityResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UploadLocalAgentRunToPromptQualityResponse {
    return new _UploadLocalAgentRunToPromptQualityResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UploadLocalAgentRunToPromptQualityResponse | PlainMessage<_UploadLocalAgentRunToPromptQualityResponse> | undefined | null, b2: _UploadLocalAgentRunToPromptQualityResponse | PlainMessage<_UploadLocalAgentRunToPromptQualityResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadLocalAgentRunToPromptQualityResponse as unknown as MessageType<_UploadLocalAgentRunToPromptQualityResponse>, a, b2);
  }
})();
export type UploadLocalAgentRunToPromptQualityResponse = InstanceType<typeof UploadLocalAgentRunToPromptQualityResponse$Runtime>;
var UploadLocalAgentRunToPromptQualityResponse: MessageType<UploadLocalAgentRunToPromptQualityResponse> = UploadLocalAgentRunToPromptQualityResponse$Runtime as unknown as MessageType<UploadLocalAgentRunToPromptQualityResponse>;
(UploadLocalAgentRunToPromptQualityResponse as MutableMessageType<UploadLocalAgentRunToPromptQualityResponse>).runtime = proto3;
(UploadLocalAgentRunToPromptQualityResponse as MutableMessageType<UploadLocalAgentRunToPromptQualityResponse>).typeName = "agent.v1.UploadLocalAgentRunToPromptQualityResponse";
(UploadLocalAgentRunToPromptQualityResponse as MutableMessageType<UploadLocalAgentRunToPromptQualityResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "primary_invocation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetSignedUrlForAttachedMediaRequest$Runtime = (() => class _GetSignedUrlForAttachedMediaRequest extends Message<_GetSignedUrlForAttachedMediaRequest> {
  declare conversationId: string;
  declare key?: string;
  declare mimeType?: string;
  declare contentLengthBytes?: bigint;
  constructor(data?: PartialMessage<_GetSignedUrlForAttachedMediaRequest>) {
    super();
    this.conversationId = "";
    proto3.util.initPartial(data, this as _GetSignedUrlForAttachedMediaRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSignedUrlForAttachedMediaRequest {
    return new _GetSignedUrlForAttachedMediaRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSignedUrlForAttachedMediaRequest {
    return new _GetSignedUrlForAttachedMediaRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSignedUrlForAttachedMediaRequest {
    return new _GetSignedUrlForAttachedMediaRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSignedUrlForAttachedMediaRequest | PlainMessage<_GetSignedUrlForAttachedMediaRequest> | undefined | null, b2: _GetSignedUrlForAttachedMediaRequest | PlainMessage<_GetSignedUrlForAttachedMediaRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSignedUrlForAttachedMediaRequest as unknown as MessageType<_GetSignedUrlForAttachedMediaRequest>, a, b2);
  }
})();
export type GetSignedUrlForAttachedMediaRequest = InstanceType<typeof GetSignedUrlForAttachedMediaRequest$Runtime>;
var GetSignedUrlForAttachedMediaRequest: MessageType<GetSignedUrlForAttachedMediaRequest> = GetSignedUrlForAttachedMediaRequest$Runtime as unknown as MessageType<GetSignedUrlForAttachedMediaRequest>;
(GetSignedUrlForAttachedMediaRequest as MutableMessageType<GetSignedUrlForAttachedMediaRequest>).runtime = proto3;
(GetSignedUrlForAttachedMediaRequest as MutableMessageType<GetSignedUrlForAttachedMediaRequest>).typeName = "agent.v1.GetSignedUrlForAttachedMediaRequest";
(GetSignedUrlForAttachedMediaRequest as MutableMessageType<GetSignedUrlForAttachedMediaRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 3,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 1, name: "key", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "mime_type", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "content_length_bytes", kind: "scalar", T: 3, opt: true }
]);
var GetSignedUrlForAttachedMediaResponse$Runtime = (() => class _GetSignedUrlForAttachedMediaResponse extends Message<_GetSignedUrlForAttachedMediaResponse> {
  declare key: string;
  declare postUrl: string;
  declare getUrl: string;
  declare expiresAtUnixMs: bigint;
  declare refreshAfterUnixMs: bigint;
  declare postFields: { [key: string]: string };
  declare putUrl: string;
  constructor(data?: PartialMessage<_GetSignedUrlForAttachedMediaResponse>) {
    super();
    this.key = "";
    this.postUrl = "";
    this.getUrl = "";
    this.expiresAtUnixMs = protoInt64.zero;
    this.refreshAfterUnixMs = protoInt64.zero;
    this.postFields = {};
    this.putUrl = "";
    proto3.util.initPartial(data, this as _GetSignedUrlForAttachedMediaResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSignedUrlForAttachedMediaResponse {
    return new _GetSignedUrlForAttachedMediaResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSignedUrlForAttachedMediaResponse {
    return new _GetSignedUrlForAttachedMediaResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSignedUrlForAttachedMediaResponse {
    return new _GetSignedUrlForAttachedMediaResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSignedUrlForAttachedMediaResponse | PlainMessage<_GetSignedUrlForAttachedMediaResponse> | undefined | null, b2: _GetSignedUrlForAttachedMediaResponse | PlainMessage<_GetSignedUrlForAttachedMediaResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSignedUrlForAttachedMediaResponse as unknown as MessageType<_GetSignedUrlForAttachedMediaResponse>, a, b2);
  }
})();
export type GetSignedUrlForAttachedMediaResponse = InstanceType<typeof GetSignedUrlForAttachedMediaResponse$Runtime>;
var GetSignedUrlForAttachedMediaResponse: MessageType<GetSignedUrlForAttachedMediaResponse> = GetSignedUrlForAttachedMediaResponse$Runtime as unknown as MessageType<GetSignedUrlForAttachedMediaResponse>;
(GetSignedUrlForAttachedMediaResponse as MutableMessageType<GetSignedUrlForAttachedMediaResponse>).runtime = proto3;
(GetSignedUrlForAttachedMediaResponse as MutableMessageType<GetSignedUrlForAttachedMediaResponse>).typeName = "agent.v1.GetSignedUrlForAttachedMediaResponse";
(GetSignedUrlForAttachedMediaResponse as MutableMessageType<GetSignedUrlForAttachedMediaResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "post_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "get_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "expires_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "refresh_after_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 6, name: "post_fields", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 7,
    name: "put_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NotifyConversationCloneRequest$Runtime = (() => class _NotifyConversationCloneRequest extends Message<_NotifyConversationCloneRequest> {
  declare conversationId: string;
  declare sourceConversationId: string;
  declare sourceRequestId: string;
  constructor(data?: PartialMessage<_NotifyConversationCloneRequest>) {
    super();
    this.conversationId = "";
    this.sourceConversationId = "";
    this.sourceRequestId = "";
    proto3.util.initPartial(data, this as _NotifyConversationCloneRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NotifyConversationCloneRequest {
    return new _NotifyConversationCloneRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NotifyConversationCloneRequest {
    return new _NotifyConversationCloneRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NotifyConversationCloneRequest {
    return new _NotifyConversationCloneRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _NotifyConversationCloneRequest | PlainMessage<_NotifyConversationCloneRequest> | undefined | null, b2: _NotifyConversationCloneRequest | PlainMessage<_NotifyConversationCloneRequest> | undefined | null): boolean {
    return proto3.util.equals(_NotifyConversationCloneRequest as unknown as MessageType<_NotifyConversationCloneRequest>, a, b2);
  }
})();
export type NotifyConversationCloneRequest = InstanceType<typeof NotifyConversationCloneRequest$Runtime>;
var NotifyConversationCloneRequest: MessageType<NotifyConversationCloneRequest> = NotifyConversationCloneRequest$Runtime as unknown as MessageType<NotifyConversationCloneRequest>;
(NotifyConversationCloneRequest as MutableMessageType<NotifyConversationCloneRequest>).runtime = proto3;
(NotifyConversationCloneRequest as MutableMessageType<NotifyConversationCloneRequest>).typeName = "agent.v1.NotifyConversationCloneRequest";
(NotifyConversationCloneRequest as MutableMessageType<NotifyConversationCloneRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "source_conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "source_request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NotifyConversationCloneResponse$Runtime = (() => class _NotifyConversationCloneResponse extends Message<_NotifyConversationCloneResponse> {
  constructor(data?: PartialMessage<_NotifyConversationCloneResponse>) {
    super();
    proto3.util.initPartial(data, this as _NotifyConversationCloneResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NotifyConversationCloneResponse {
    return new _NotifyConversationCloneResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NotifyConversationCloneResponse {
    return new _NotifyConversationCloneResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NotifyConversationCloneResponse {
    return new _NotifyConversationCloneResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _NotifyConversationCloneResponse | PlainMessage<_NotifyConversationCloneResponse> | undefined | null, b2: _NotifyConversationCloneResponse | PlainMessage<_NotifyConversationCloneResponse> | undefined | null): boolean {
    return proto3.util.equals(_NotifyConversationCloneResponse as unknown as MessageType<_NotifyConversationCloneResponse>, a, b2);
  }
})();
export type NotifyConversationCloneResponse = InstanceType<typeof NotifyConversationCloneResponse$Runtime>;
var NotifyConversationCloneResponse: MessageType<NotifyConversationCloneResponse> = NotifyConversationCloneResponse$Runtime as unknown as MessageType<NotifyConversationCloneResponse>;
(NotifyConversationCloneResponse as MutableMessageType<NotifyConversationCloneResponse>).runtime = proto3;
(NotifyConversationCloneResponse as MutableMessageType<NotifyConversationCloneResponse>).typeName = "agent.v1.NotifyConversationCloneResponse";
(NotifyConversationCloneResponse as MutableMessageType<NotifyConversationCloneResponse>).fields = proto3.util.newFieldList(() => []);
var GetNewChatNudgeLegacyModelPickerRequest$Runtime = (() => class _GetNewChatNudgeLegacyModelPickerRequest extends Message<_GetNewChatNudgeLegacyModelPickerRequest> {
  declare currentModel: string;
  declare maxMode: boolean;
  constructor(data?: PartialMessage<_GetNewChatNudgeLegacyModelPickerRequest>) {
    super();
    this.currentModel = "";
    this.maxMode = false;
    proto3.util.initPartial(data, this as _GetNewChatNudgeLegacyModelPickerRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetNewChatNudgeLegacyModelPickerRequest {
    return new _GetNewChatNudgeLegacyModelPickerRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeLegacyModelPickerRequest {
    return new _GetNewChatNudgeLegacyModelPickerRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeLegacyModelPickerRequest {
    return new _GetNewChatNudgeLegacyModelPickerRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetNewChatNudgeLegacyModelPickerRequest | PlainMessage<_GetNewChatNudgeLegacyModelPickerRequest> | undefined | null, b2: _GetNewChatNudgeLegacyModelPickerRequest | PlainMessage<_GetNewChatNudgeLegacyModelPickerRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetNewChatNudgeLegacyModelPickerRequest as unknown as MessageType<_GetNewChatNudgeLegacyModelPickerRequest>, a, b2);
  }
})();
export type GetNewChatNudgeLegacyModelPickerRequest = InstanceType<typeof GetNewChatNudgeLegacyModelPickerRequest$Runtime>;
var GetNewChatNudgeLegacyModelPickerRequest: MessageType<GetNewChatNudgeLegacyModelPickerRequest> = GetNewChatNudgeLegacyModelPickerRequest$Runtime as unknown as MessageType<GetNewChatNudgeLegacyModelPickerRequest>;
(GetNewChatNudgeLegacyModelPickerRequest as MutableMessageType<GetNewChatNudgeLegacyModelPickerRequest>).runtime = proto3;
(GetNewChatNudgeLegacyModelPickerRequest as MutableMessageType<GetNewChatNudgeLegacyModelPickerRequest>).typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerRequest";
(GetNewChatNudgeLegacyModelPickerRequest as MutableMessageType<GetNewChatNudgeLegacyModelPickerRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "current_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "max_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetNewChatNudgeLegacyModelPickerResponse$Runtime = (() => class _GetNewChatNudgeLegacyModelPickerResponse extends Message<_GetNewChatNudgeLegacyModelPickerResponse> {
  declare nudge?: NewChatNudge;
  constructor(data?: PartialMessage<_GetNewChatNudgeLegacyModelPickerResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetNewChatNudgeLegacyModelPickerResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetNewChatNudgeLegacyModelPickerResponse {
    return new _GetNewChatNudgeLegacyModelPickerResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeLegacyModelPickerResponse {
    return new _GetNewChatNudgeLegacyModelPickerResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeLegacyModelPickerResponse {
    return new _GetNewChatNudgeLegacyModelPickerResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetNewChatNudgeLegacyModelPickerResponse | PlainMessage<_GetNewChatNudgeLegacyModelPickerResponse> | undefined | null, b2: _GetNewChatNudgeLegacyModelPickerResponse | PlainMessage<_GetNewChatNudgeLegacyModelPickerResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetNewChatNudgeLegacyModelPickerResponse as unknown as MessageType<_GetNewChatNudgeLegacyModelPickerResponse>, a, b2);
  }
})();
export type GetNewChatNudgeLegacyModelPickerResponse = InstanceType<typeof GetNewChatNudgeLegacyModelPickerResponse$Runtime>;
var GetNewChatNudgeLegacyModelPickerResponse: MessageType<GetNewChatNudgeLegacyModelPickerResponse> = GetNewChatNudgeLegacyModelPickerResponse$Runtime as unknown as MessageType<GetNewChatNudgeLegacyModelPickerResponse>;
(GetNewChatNudgeLegacyModelPickerResponse as MutableMessageType<GetNewChatNudgeLegacyModelPickerResponse>).runtime = proto3;
(GetNewChatNudgeLegacyModelPickerResponse as MutableMessageType<GetNewChatNudgeLegacyModelPickerResponse>).typeName = "agent.v1.GetNewChatNudgeLegacyModelPickerResponse";
(GetNewChatNudgeLegacyModelPickerResponse as MutableMessageType<GetNewChatNudgeLegacyModelPickerResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "nudge", kind: "message", T: NewChatNudge, opt: true }
]);
var NudgeBumpVariant$Runtime = (() => class _NudgeBumpVariant extends Message<_NudgeBumpVariant> {
  declare bannerMessage: string;
  constructor(data?: PartialMessage<_NudgeBumpVariant>) {
    super();
    this.bannerMessage = "";
    proto3.util.initPartial(data, this as _NudgeBumpVariant);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NudgeBumpVariant {
    return new _NudgeBumpVariant().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NudgeBumpVariant {
    return new _NudgeBumpVariant().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NudgeBumpVariant {
    return new _NudgeBumpVariant().fromJsonString(jsonString, options2);
  }
  static equals(a: _NudgeBumpVariant | PlainMessage<_NudgeBumpVariant> | undefined | null, b2: _NudgeBumpVariant | PlainMessage<_NudgeBumpVariant> | undefined | null): boolean {
    return proto3.util.equals(_NudgeBumpVariant as unknown as MessageType<_NudgeBumpVariant>, a, b2);
  }
})();
export type NudgeBumpVariant = InstanceType<typeof NudgeBumpVariant$Runtime>;
var NudgeBumpVariant: MessageType<NudgeBumpVariant> = NudgeBumpVariant$Runtime as unknown as MessageType<NudgeBumpVariant>;
(NudgeBumpVariant as MutableMessageType<NudgeBumpVariant>).runtime = proto3;
(NudgeBumpVariant as MutableMessageType<NudgeBumpVariant>).typeName = "agent.v1.NudgeBumpVariant";
(NudgeBumpVariant as MutableMessageType<NudgeBumpVariant>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "banner_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NudgeAskVariant$Runtime = (() => class _NudgeAskVariant extends Message<_NudgeAskVariant> {
  declare popupMessage: string;
  declare acceptLabel: string;
  constructor(data?: PartialMessage<_NudgeAskVariant>) {
    super();
    this.popupMessage = "";
    this.acceptLabel = "";
    proto3.util.initPartial(data, this as _NudgeAskVariant);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NudgeAskVariant {
    return new _NudgeAskVariant().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NudgeAskVariant {
    return new _NudgeAskVariant().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NudgeAskVariant {
    return new _NudgeAskVariant().fromJsonString(jsonString, options2);
  }
  static equals(a: _NudgeAskVariant | PlainMessage<_NudgeAskVariant> | undefined | null, b2: _NudgeAskVariant | PlainMessage<_NudgeAskVariant> | undefined | null): boolean {
    return proto3.util.equals(_NudgeAskVariant as unknown as MessageType<_NudgeAskVariant>, a, b2);
  }
})();
export type NudgeAskVariant = InstanceType<typeof NudgeAskVariant$Runtime>;
var NudgeAskVariant: MessageType<NudgeAskVariant> = NudgeAskVariant$Runtime as unknown as MessageType<NudgeAskVariant>;
(NudgeAskVariant as MutableMessageType<NudgeAskVariant>).runtime = proto3;
(NudgeAskVariant as MutableMessageType<NudgeAskVariant>).typeName = "agent.v1.NudgeAskVariant";
(NudgeAskVariant as MutableMessageType<NudgeAskVariant>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "popup_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "accept_label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NudgeSilentSwitchVariant$Runtime = (() => class _NudgeSilentSwitchVariant extends Message<_NudgeSilentSwitchVariant> {
  constructor(data?: PartialMessage<_NudgeSilentSwitchVariant>) {
    super();
    proto3.util.initPartial(data, this as _NudgeSilentSwitchVariant);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NudgeSilentSwitchVariant {
    return new _NudgeSilentSwitchVariant().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NudgeSilentSwitchVariant {
    return new _NudgeSilentSwitchVariant().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NudgeSilentSwitchVariant {
    return new _NudgeSilentSwitchVariant().fromJsonString(jsonString, options2);
  }
  static equals(a: _NudgeSilentSwitchVariant | PlainMessage<_NudgeSilentSwitchVariant> | undefined | null, b2: _NudgeSilentSwitchVariant | PlainMessage<_NudgeSilentSwitchVariant> | undefined | null): boolean {
    return proto3.util.equals(_NudgeSilentSwitchVariant as unknown as MessageType<_NudgeSilentSwitchVariant>, a, b2);
  }
})();
export type NudgeSilentSwitchVariant = InstanceType<typeof NudgeSilentSwitchVariant$Runtime>;
var NudgeSilentSwitchVariant: MessageType<NudgeSilentSwitchVariant> = NudgeSilentSwitchVariant$Runtime as unknown as MessageType<NudgeSilentSwitchVariant>;
(NudgeSilentSwitchVariant as MutableMessageType<NudgeSilentSwitchVariant>).runtime = proto3;
(NudgeSilentSwitchVariant as MutableMessageType<NudgeSilentSwitchVariant>).typeName = "agent.v1.NudgeSilentSwitchVariant";
(NudgeSilentSwitchVariant as MutableMessageType<NudgeSilentSwitchVariant>).fields = proto3.util.newFieldList(() => []);
var NewChatNudge$Runtime = (() => class _NewChatNudge extends Message<_NewChatNudge> {
  declare nudgeId: string;
  declare targetModel: string;
  declare experimentName: string;
  declare variant: { case: "bump"; value: NudgeBumpVariant } | { case: "ask"; value: NudgeAskVariant } | { case: "silentSwitch"; value: NudgeSilentSwitchVariant } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_NewChatNudge>) {
    super();
    this.nudgeId = "";
    this.targetModel = "";
    this.experimentName = "";
    this.variant = { case: void 0 };
    proto3.util.initPartial(data, this as _NewChatNudge);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NewChatNudge {
    return new _NewChatNudge().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NewChatNudge {
    return new _NewChatNudge().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NewChatNudge {
    return new _NewChatNudge().fromJsonString(jsonString, options2);
  }
  static equals(a: _NewChatNudge | PlainMessage<_NewChatNudge> | undefined | null, b2: _NewChatNudge | PlainMessage<_NewChatNudge> | undefined | null): boolean {
    return proto3.util.equals(_NewChatNudge as unknown as MessageType<_NewChatNudge>, a, b2);
  }
})();
export type NewChatNudge = InstanceType<typeof NewChatNudge$Runtime>;
var NewChatNudge: MessageType<NewChatNudge> = NewChatNudge$Runtime as unknown as MessageType<NewChatNudge>;
(NewChatNudge as MutableMessageType<NewChatNudge>).runtime = proto3;
(NewChatNudge as MutableMessageType<NewChatNudge>).typeName = "agent.v1.NewChatNudge";
(NewChatNudge as MutableMessageType<NewChatNudge>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "nudge_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "target_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "experiment_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "bump", kind: "message", T: NudgeBumpVariant, oneof: "variant" },
  { no: 5, name: "ask", kind: "message", T: NudgeAskVariant, oneof: "variant" },
  { no: 6, name: "silent_switch", kind: "message", T: NudgeSilentSwitchVariant, oneof: "variant" }
]);
var GetNewChatNudgeParameterizedModelPickerRequest$Runtime = (() => class _GetNewChatNudgeParameterizedModelPickerRequest extends Message<_GetNewChatNudgeParameterizedModelPickerRequest> {
  declare currentModel?: RequestedModel;
  constructor(data?: PartialMessage<_GetNewChatNudgeParameterizedModelPickerRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetNewChatNudgeParameterizedModelPickerRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetNewChatNudgeParameterizedModelPickerRequest {
    return new _GetNewChatNudgeParameterizedModelPickerRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeParameterizedModelPickerRequest {
    return new _GetNewChatNudgeParameterizedModelPickerRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeParameterizedModelPickerRequest {
    return new _GetNewChatNudgeParameterizedModelPickerRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetNewChatNudgeParameterizedModelPickerRequest | PlainMessage<_GetNewChatNudgeParameterizedModelPickerRequest> | undefined | null, b2: _GetNewChatNudgeParameterizedModelPickerRequest | PlainMessage<_GetNewChatNudgeParameterizedModelPickerRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetNewChatNudgeParameterizedModelPickerRequest as unknown as MessageType<_GetNewChatNudgeParameterizedModelPickerRequest>, a, b2);
  }
})();
export type GetNewChatNudgeParameterizedModelPickerRequest = InstanceType<typeof GetNewChatNudgeParameterizedModelPickerRequest$Runtime>;
var GetNewChatNudgeParameterizedModelPickerRequest: MessageType<GetNewChatNudgeParameterizedModelPickerRequest> = GetNewChatNudgeParameterizedModelPickerRequest$Runtime as unknown as MessageType<GetNewChatNudgeParameterizedModelPickerRequest>;
(GetNewChatNudgeParameterizedModelPickerRequest as MutableMessageType<GetNewChatNudgeParameterizedModelPickerRequest>).runtime = proto3;
(GetNewChatNudgeParameterizedModelPickerRequest as MutableMessageType<GetNewChatNudgeParameterizedModelPickerRequest>).typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerRequest";
(GetNewChatNudgeParameterizedModelPickerRequest as MutableMessageType<GetNewChatNudgeParameterizedModelPickerRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_model", kind: "message", T: RequestedModel }
]);
var GetNewChatNudgeParameterizedModelPickerResponse$Runtime = (() => class _GetNewChatNudgeParameterizedModelPickerResponse extends Message<_GetNewChatNudgeParameterizedModelPickerResponse> {
  declare nudge?: NewChatNudgeV2;
  constructor(data?: PartialMessage<_GetNewChatNudgeParameterizedModelPickerResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetNewChatNudgeParameterizedModelPickerResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetNewChatNudgeParameterizedModelPickerResponse {
    return new _GetNewChatNudgeParameterizedModelPickerResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeParameterizedModelPickerResponse {
    return new _GetNewChatNudgeParameterizedModelPickerResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetNewChatNudgeParameterizedModelPickerResponse {
    return new _GetNewChatNudgeParameterizedModelPickerResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetNewChatNudgeParameterizedModelPickerResponse | PlainMessage<_GetNewChatNudgeParameterizedModelPickerResponse> | undefined | null, b2: _GetNewChatNudgeParameterizedModelPickerResponse | PlainMessage<_GetNewChatNudgeParameterizedModelPickerResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetNewChatNudgeParameterizedModelPickerResponse as unknown as MessageType<_GetNewChatNudgeParameterizedModelPickerResponse>, a, b2);
  }
})();
export type GetNewChatNudgeParameterizedModelPickerResponse = InstanceType<typeof GetNewChatNudgeParameterizedModelPickerResponse$Runtime>;
var GetNewChatNudgeParameterizedModelPickerResponse: MessageType<GetNewChatNudgeParameterizedModelPickerResponse> = GetNewChatNudgeParameterizedModelPickerResponse$Runtime as unknown as MessageType<GetNewChatNudgeParameterizedModelPickerResponse>;
(GetNewChatNudgeParameterizedModelPickerResponse as MutableMessageType<GetNewChatNudgeParameterizedModelPickerResponse>).runtime = proto3;
(GetNewChatNudgeParameterizedModelPickerResponse as MutableMessageType<GetNewChatNudgeParameterizedModelPickerResponse>).typeName = "agent.v1.GetNewChatNudgeParameterizedModelPickerResponse";
(GetNewChatNudgeParameterizedModelPickerResponse as MutableMessageType<GetNewChatNudgeParameterizedModelPickerResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "nudge", kind: "message", T: NewChatNudgeV2, opt: true }
]);
var NewChatNudgeV2$Runtime = (() => class _NewChatNudgeV2 extends Message<_NewChatNudgeV2> {
  declare nudgeId: string;
  declare targetModel?: RequestedModel;
  declare experimentName: string;
  declare variant: { case: "bump"; value: NudgeBumpVariant } | { case: "ask"; value: NudgeAskVariant } | { case: "silentSwitch"; value: NudgeSilentSwitchVariant } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_NewChatNudgeV2>) {
    super();
    this.nudgeId = "";
    this.experimentName = "";
    this.variant = { case: void 0 };
    proto3.util.initPartial(data, this as _NewChatNudgeV2);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _NewChatNudgeV2 {
    return new _NewChatNudgeV2().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _NewChatNudgeV2 {
    return new _NewChatNudgeV2().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _NewChatNudgeV2 {
    return new _NewChatNudgeV2().fromJsonString(jsonString, options2);
  }
  static equals(a: _NewChatNudgeV2 | PlainMessage<_NewChatNudgeV2> | undefined | null, b2: _NewChatNudgeV2 | PlainMessage<_NewChatNudgeV2> | undefined | null): boolean {
    return proto3.util.equals(_NewChatNudgeV2 as unknown as MessageType<_NewChatNudgeV2>, a, b2);
  }
})();
export type NewChatNudgeV2 = InstanceType<typeof NewChatNudgeV2$Runtime>;
var NewChatNudgeV2: MessageType<NewChatNudgeV2> = NewChatNudgeV2$Runtime as unknown as MessageType<NewChatNudgeV2>;
(NewChatNudgeV2 as MutableMessageType<NewChatNudgeV2>).runtime = proto3;
(NewChatNudgeV2 as MutableMessageType<NewChatNudgeV2>).typeName = "agent.v1.NewChatNudgeV2";
(NewChatNudgeV2 as MutableMessageType<NewChatNudgeV2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "nudge_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "target_model", kind: "message", T: RequestedModel },
  {
    no: 3,
    name: "experiment_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "bump", kind: "message", T: NudgeBumpVariant, oneof: "variant" },
  { no: 5, name: "ask", kind: "message", T: NudgeAskVariant, oneof: "variant" },
  { no: 6, name: "silent_switch", kind: "message", T: NudgeSilentSwitchVariant, oneof: "variant" }
]);


export { LocalPromptQualityInvocationStatus, ClientHeartbeat, PrewarmRequest, ExecServerAbort, ExecServerControlMessage, AgentClientMessage, TtftBreakdown, AgentServerMessage, NameAgentRequest, NameAgentResponse, UpdateConversationMetadataRequest, UpdateConversationMetadataResponse, GetPromptContextUsageRequest, GetPromptContextUsageResponse, CreateTranscriptOverviewRequest, CreateTranscriptOverviewResponse, GetUsableModelsRequest, GetUsableModelsResponse, GetDefaultModelForCliRequest, GetDefaultModelForCliResponse, GetAllowedModelIntentsRequest, GetAllowedModelIntentsResponse, IdeEditorsStateFile, IdeEditorsStateLite, BlobEntry, UploadConversationBlobsRequest, UploadConversationBlobsResponse, LocalPromptQualityInvocation, UploadLocalAgentRunToPromptQualityRequest, UploadLocalAgentRunToPromptQualityResponse, GetSignedUrlForAttachedMediaRequest, GetSignedUrlForAttachedMediaResponse, NotifyConversationCloneRequest, NotifyConversationCloneResponse, GetNewChatNudgeLegacyModelPickerRequest, GetNewChatNudgeLegacyModelPickerResponse, NudgeBumpVariant, NudgeAskVariant, NudgeSilentSwitchVariant, NewChatNudge, GetNewChatNudgeParameterizedModelPickerRequest, GetNewChatNudgeParameterizedModelPickerResponse, NewChatNudgeV2 };
