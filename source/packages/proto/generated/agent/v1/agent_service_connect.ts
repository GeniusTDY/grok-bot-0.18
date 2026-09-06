/**
 * Complete generated Grok Bot 0.18 B8 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:366258-366443
 * Region SHA-256: 9d7cb5feb0ea8e039d4550922b9a50420cef5a902034b25415baa7d6275cb819
 * B8 exports: 0 messages + 0 enums + 1 services = 1
 */
import { MethodKind } from "@bufbuild/protobuf";
import { AgentClientMessage, AgentServerMessage, NameAgentRequest, NameAgentResponse, UpdateConversationMetadataRequest, UpdateConversationMetadataResponse, GetPromptContextUsageRequest, GetPromptContextUsageResponse, CreateTranscriptOverviewRequest, CreateTranscriptOverviewResponse, GetUsableModelsRequest, GetUsableModelsResponse, GetDefaultModelForCliRequest, GetDefaultModelForCliResponse, GetAllowedModelIntentsRequest, GetAllowedModelIntentsResponse, UploadConversationBlobsRequest, UploadConversationBlobsResponse, UploadLocalAgentRunToPromptQualityRequest, UploadLocalAgentRunToPromptQualityResponse, GetSignedUrlForAttachedMediaRequest, GetSignedUrlForAttachedMediaResponse, NotifyConversationCloneRequest, NotifyConversationCloneResponse, GetNewChatNudgeLegacyModelPickerRequest, GetNewChatNudgeLegacyModelPickerResponse, GetNewChatNudgeParameterizedModelPickerRequest, GetNewChatNudgeParameterizedModelPickerResponse } from "./agent_service_pb.js";
import { BidiRequestId, BidiPollRequest, BidiPollResponse } from "../../aiserver/v1/bidi_pb.js";

var AgentService = {
  typeName: "agent.v1.AgentService",
  methods: {
    /**
     * @generated from rpc agent.v1.AgentService.Run
     */
    run: {
      name: "Run",
      I: AgentClientMessage,
      O: AgentServerMessage,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * @generated from rpc agent.v1.AgentService.RunSSE
     */
    runSSE: {
      name: "RunSSE",
      I: BidiRequestId,
      O: AgentServerMessage,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc agent.v1.AgentService.RunPoll
     */
    runPoll: {
      name: "RunPoll",
      I: BidiPollRequest,
      O: BidiPollResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Generate a very short, succinct agent name from the provided user message.
     *
     * @generated from rpc agent.v1.AgentService.NameAgent
     */
    nameAgent: {
      name: "NameAgent",
      I: NameAgentRequest,
      O: NameAgentResponse,
      kind: MethodKind.Unary
    },
    /**
     * Update persisted metadata for a conversation.
     *
     * @generated from rpc agent.v1.AgentService.UpdateConversationMetadata
     */
    updateConversationMetadata: {
      name: "UpdateConversationMetadata",
      I: UpdateConversationMetadataRequest,
      O: UpdateConversationMetadataResponse,
      kind: MethodKind.Unary
    },
    /**
     * Generate a short overview for a formatted transcript conversation.
     *
     * @generated from rpc agent.v1.AgentService.CreateTranscriptOverview
     */
    createTranscriptOverview: {
      name: "CreateTranscriptOverview",
      I: CreateTranscriptOverviewRequest,
      O: CreateTranscriptOverviewResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.AgentService.GetUsableModels
     */
    getUsableModels: {
      name: "GetUsableModels",
      I: GetUsableModelsRequest,
      O: GetUsableModelsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.AgentService.GetDefaultModelForCli
     */
    getDefaultModelForCli: {
      name: "GetDefaultModelForCli",
      I: GetDefaultModelForCliRequest,
      O: GetDefaultModelForCliResponse,
      kind: MethodKind.Unary
    },
    /**
     * Internal endpoint: returns all allowed model intents for devs
     *
     * @generated from rpc agent.v1.AgentService.GetAllowedModelIntents
     */
    getAllowedModelIntents: {
      name: "GetAllowedModelIntents",
      I: GetAllowedModelIntentsRequest,
      O: GetAllowedModelIntentsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Upload blobs created during conversation cloning so they reach the
     * Kafka telemetry pipeline.
     *
     * @generated from rpc agent.v1.AgentService.UploadConversationBlobs
     */
    uploadConversationBlobs: {
      name: "UploadConversationBlobs",
      I: UploadConversationBlobsRequest,
      O: UploadConversationBlobsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Explicitly publish a completed same-host local-agent run to internal
     * Prompt Quality. The server derives user identity and the destination.
     *
     * @generated from rpc agent.v1.AgentService.UploadLocalAgentRunToPromptQuality
     */
    uploadLocalAgentRunToPromptQuality: {
      name: "UploadLocalAgentRunToPromptQuality",
      I: UploadLocalAgentRunToPromptQualityRequest,
      O: UploadLocalAgentRunToPromptQualityResponse,
      kind: MethodKind.Unary
    },
    /**
     * Create or renew short-lived URLs for user-attached agent media.
     *
     * @generated from rpc agent.v1.AgentService.GetSignedUrlForAttachedMedia
     */
    getSignedUrlForAttachedMedia: {
      name: "GetSignedUrlForAttachedMedia",
      I: GetSignedUrlForAttachedMediaRequest,
      O: GetSignedUrlForAttachedMediaResponse,
      kind: MethodKind.Unary
    },
    /**
     * Record that a conversation was cloned. Called once per clone, separately
     * from blob uploads which may be chunked into multiple RPCs.
     *
     * @generated from rpc agent.v1.AgentService.NotifyConversationClone
     */
    notifyConversationClone: {
      name: "NotifyConversationClone",
      I: NotifyConversationCloneRequest,
      O: NotifyConversationCloneResponse,
      kind: MethodKind.Unary
    },
    /**
     * Called by the client on every new chat creation. The backend evaluates
     * server-side experiments and returns an optional model switch directive
     * with UI variant and copy, so nudge logic lives entirely server-side.
     *
     * @generated from rpc agent.v1.AgentService.GetNewChatNudgeLegacyModelPicker
     */
    getNewChatNudgeLegacyModelPicker: {
      name: "GetNewChatNudgeLegacyModelPicker",
      I: GetNewChatNudgeLegacyModelPickerRequest,
      O: GetNewChatNudgeLegacyModelPickerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.AgentService.GetNewChatNudgeParameterizedModelPicker
     */
    getNewChatNudgeParameterizedModelPicker: {
      name: "GetNewChatNudgeParameterizedModelPicker",
      I: GetNewChatNudgeParameterizedModelPickerRequest,
      O: GetNewChatNudgeParameterizedModelPickerResponse,
      kind: MethodKind.Unary
    },
    /**
     * Fetch the immutable context-usage snapshot selected by a conversation
     * checkpoint. Called only when the user opens the context usage report.
     *
     * @generated from rpc agent.v1.AgentService.GetPromptContextUsage
     */
    getPromptContextUsage: {
      name: "GetPromptContextUsage",
      I: GetPromptContextUsageRequest,
      O: GetPromptContextUsageResponse,
      kind: MethodKind.Unary
    }
  }
};


export { AgentService };
