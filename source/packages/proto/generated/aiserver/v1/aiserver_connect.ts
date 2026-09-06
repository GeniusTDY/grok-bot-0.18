/**
 * Complete generated Grok Bot 0.18 AI Server service descriptor recovered
 * from byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:202808-204693
 * Region SHA-256: 53c23b26d9df20da6a86bc1020caaf66464d90a414338d36577d63fa6f2782ba
 * AiService methods: 192 total (132 unary, 55 server-streaming, 5 bidirectional); descriptor TSV SHA-256: 9194438b99c4fab073832e34c49f8e3460e15c2afd4199aaa0de910323320334
 */
import { MethodKind } from "@bufbuild/protobuf";
import { GetComposerAutocompleteRequest, GetComposerAutocompleteResponse, GetChatSuggestionsRequest, GetChatSuggestionsResponse, GetUserInstructionsRequest, GetUserInstructionsResponse, IsTerminalFinishedRequest, IsTerminalFinishedResponseV2, TestBidiRequest, TestBidiResponse, AutoContextRequest, AutoContextResponse, CheckBugBotPriceRequest, CheckBugBotPriceResponse, AcknowledgeGracePeriodDisclaimerRequest, AcknowledgeGracePeriodDisclaimerResponse, CheckBugBotTelemetryHealthyRequest, CheckBugBotTelemetryHealthyResponse, RecordIdeBugReactionRequest, RecordIdeBugReactionResponse, GetSuggestedBugBotIterationsRequest, GetSuggestedBugBotIterationsResponse, GetEditorBugbotAutoRunStatusRequest, GetEditorBugbotAutoRunStatusResponse, StreamBugBotResponse, StreamBugBotAgenticClientMessage, StreamBugBotAgenticServerMessage, StreamUiBestOfNJudgeClientMessage, StreamUiBestOfNJudgeServerMessage, ContextRerankingRequest, ContextRerankingResponse, NameTabRequest, NameTabResponse, TestModelStatusRequest, TestModelStatusResponse, EvaluatePromptHookRequest, EvaluatePromptHookResponse, TryParseTypeScriptTreeSitterRequest, TryParseTypeScriptTreeSitterResponse, DevOnlyGetPastRequestIdsRequest, DevOnlyGetPastRequestIdsResponse, GetCodebaseQuestionsResponse, GetAtSymbolSuggestionsRequest, GetAtSymbolSuggestionsResponse, GetTerminalCompletionRequest, GetTerminalCompletionResponse, CalculateAutoSelectionRequest, CalculateAutoSelectionResponse, BackgroundCmdKRequest, BackgroundCmdKResponse, BackgroundCmdKEvalRequest, BackgroundCmdKEvalResponse, GetThoughtAnnotationRequest, UpdateVscodeProfileRequest, UpdateVscodeProfileResponse, GetThoughtAnnotationResponse, BulkEmbedRequest, BulkEmbedResponse, TakeNotesOnCommitDiffRequest, TakeNotesOnCommitDiffResponse, IsCursorPredictionEnabledRequest, IsCursorPredictionEnabledResponse, StreamNextCursorPredictionRequest, StreamNextCursorPredictionResponse, StreamWebCmdKV1Request, StreamWebCmdKV1Response, ContextScoresRequest, ContextScoresResponse, ReportGenerationFeedbackRequest, ReportGenerationFeedbackResponse, ReportAgentFeedbackRequest, ReportAgentFeedbackResponse, ReportAgentMessageFeedbackRequest, ReportAgentMessageFeedbackResponse, ReportAutoRoutingResultFeedbackRequest, ReportAutoRoutingResultFeedbackResponse, ShowWelcomeScreenRequest, ShowWelcomeScreenResponse, AiProjectRequest, AiProjectResponse, ToCamelCaseRequest, ToCamelCaseResponse, StreamPriomptPromptRequest, StreamPriomptPromptResponse, CheckFeatureStatusRequest, CheckFeaturesStatusRequest, CheckFeaturesStatusResponse, GetEffectiveTokenLimitRequest, GetEffectiveTokenLimitResponse, CheckFeatureStatusResponse, CheckNumberConfigRequest, CheckNumberConfigResponse, CheckNumberConfigsRequest, CheckNumberConfigsResponse, IntentPredictionRequest, IntentPredictionResponse, StreamCursorTutorRequest, StreamCursorTutorResponse, ModelQueryRequest, ModelQueryResponse, ModelQueryResponseV2, RerankerRequest, RerankerResponse, GenerateTldrRequest, GenerateTldrResponse, TaskStreamChatContextRequest, TaskStreamChatContextResponseWrapped, StreamChatContextRequest, StreamChatContextResponse, StreamChatDeepContextRequest, StreamChatDeepContextResponse, AvailableDocsRequest, AvailableDocsResponse, RunWebSearchRequest, RunWebSearchResponse, RunWebFetchRequest, RunWebFetchResponse, RunGenerateImageRequest, RunGenerateImageResponse, ThrowErrorCheckRequest, ThrowErrorCheckResponse, AvailableModelsRequest, AvailableModelsResponse, ServerTimeRequest, ServerTimeResponse, HealthCheckRequest, HealthCheckResponse, PrivacyCheckRequest, PrivacyCheckResponse, TimeLeftHealthCheckResponse, StreamGenerateRequest, ReviewRequest, ReviewChatRequest, ReviewChatResponse, ReviewResponse, SlashEditRequest, SlashEditResponse, SlashEditFollowUpWithPreviousEditsRequest, StreamSlashEditFollowUpWithPreviousEditsResponse, StreamFastEditRequest, StreamFastEditResponse, StreamEditRequest, PreloadEditRequest, PreloadEditResponse, StreamAiLintBugRequest, StreamAiLintBugResponse, LogUserLintReplyRequest, LogUserLintReplyResponse, LogLinterExplicitUserFeedbackRequest, LogLinterExplicitUserFeedbackResponse, StreamNewRuleRequest, StreamAiCursorHelpRequest, StreamAiCursorHelpResponse, StreamTerminalAutocompleteRequest, StreamPseudocodeGeneratorRequest, StreamPseudocodeGeneratorResponse, StreamPseudocodeMapperRequest, StreamPseudocodeMapperResponse, StreamTerminalAutocompleteResponse, GetChatRequest, PotentialLocsInitialQueriesRequest, PotentialLocsInitialQueriesResponse, PotentialLocsUnderneathRequest, PotentialLocsUnderneathResponse, PotentialLocsRequest, PotentialLocsResponse, GetComposerChatRequest, CheckUsageBasedPriceRequest, CheckUsageBasedPriceResponse, CheckQueuePositionRequest, CheckQueuePositionResponse, IsolatedTreesitterRequest, IsolatedTreesitterResponse, GetSimplePromptRequest, GetSimplePromptResponse, SuggestQuickActionsRequest, SuggestQuickActionsResponse, GetPassthroughPromptRequest, GetPassthroughPromptResponse, CheckLongFilesFitResponse, GetEvaluationPromptRequest, GetEvaluationPromptResponse, GetChatTitleRequest, GetChatTitleResponse, StreamChatResponse, WarmComposerCacheResponse, WarmChatCacheRequest, WarmChatCacheResponse, GetCompletionRequest, GetCompletionResponse, GetUserInfoRequest, GetUserInfoResponse, DoThisForMeCheckRequest, DoThisForMeCheckResponse, DoThisForMeRequest, DoThisForMeResponseWrapped, StreamChatToolformerContinueRequest, StreamChatToolformerResponse, PushAiThoughtRequest, PushAiThoughtResponse, CheckDoableAsTaskRequest, CheckDoableAsTaskResponse, InterfaceAgentInitRequest, InterfaceAgentInitResponse, StreamInterfaceAgentStatusRequest, StreamInterfaceAgentStatusResponse, TaskGetInterfaceAgentStatusRequest, TaskGetInterfaceAgentStatusResponseWrapped, TaskInitRequest, TaskInitResponse, TaskStreamLogRequest, TaskInfoRequest, TaskPauseRequest, TaskPauseResponse, TaskInfoResponse, TaskStreamLogResponse, TaskProvideResultRequest, TaskProvideResultResponse, TaskSendMessageRequest, TaskSendMessageResponse, ReportFeedbackRequest, ReportFeedbackResponse, ReportBugRequest, ReportBugResponse, FixMarkersRequest, FixMarkersResponse, StreamLintRequest, ReportGroundTruthCandidateRequest, ReportGroundTruthCandidateResponse, ReportCmdKFateRequest, ReportCmdKFateResponse, GetFilesForComposerRequest, GetFilesForComposerResponse, ComposerEnhancerClientMessage, ComposerEnhancerServerMessage, FindBugsRequest, FindBugsResponse, WriteGitCommitMessageRequest, WriteGitCommitMessageResponse, WriteGitBranchNameRequest, WriteGitBranchNameResponse, KeepComposerCacheWarmRequest, KeepComposerCacheWarmResponse, GetDiffReviewRequest, StreamDiffReviewResponse, StreamDiffReviewByFileResponse, CountTokensRequest, CountTokensResponse, GetModelLabelsRequest, GetModelLabelsResponse, GetLastDefaultModelNudgeRequest, GetLastDefaultModelNudgeResponse, GetDefaultModelNudgeDataRequest, GetDefaultModelNudgeDataResponse, GetDefaultModelRequest, GetDefaultModelResponse, GetCloudSetupBlockersRequest, GetCloudSetupBlockersResponse, TestBedrockCredentialsRequest, TestBedrockCredentialsResponse, ReportCommitAiAnalyticsRequest, ReportCommitAiAnalyticsResponse, ReportAiCodeChangeMetricsRequest, ReportAiCodeChangeMetricsResponse, ReportProcessMetricsRequest, ReportProcessMetricsResponse, ReportProcessMetricsV2Request, ReportProcessMetricsV2Response, ReportSandProcessMetricsRequest, ReportSandProcessMetricsResponse, ReportClientNumericMetricsRequest, ReportClientNumericMetricsResponse, PotentiallyGenerateMemoryRequest, PotentiallyGenerateMemoryResponse, KnowledgeBaseAddRequest, KnowledgeBaseAddResponse, KnowledgeBaseRemoveRequest, KnowledgeBaseRemoveResponse, KnowledgeBaseUpdateRequest, KnowledgeBaseUpdateResponse, KnowledgeBaseListRequest, KnowledgeBaseListResponse, FetchRelevantKnowledgeForConversationRequest, FetchRelevantKnowledgeForConversationResponse, InferBackgroundComposerScriptsRequest, InferBackgroundComposerScriptsResponse, GetBackgroundComposerFeedbackLinkRequest, GetBackgroundComposerFeedbackLinkResponse, SttClientMessage, SttServerMessage, TranscribeAudioRequest, TranscribeAudioResponse } from "./aiserver_pb.js";
import { RerankDocumentsRequest, RerankDocumentsResponse } from "./chat_pb.js";
import { StreamInlineLongCompletionRequest } from "./inline_gpt4_pb.js";
import { StreamAiPreviewsRequest, StreamAiPreviewsResponse } from "./fastpreviews_pb.js";
import { ShouldTurnOnCppOnboardingRequest, ShouldTurnOnCppOnboardingResponse, StreamCppRequest, StreamCppResponse, CppConfigRequest, CppConfigResponse, GetCppEditClassificationRequest, GetCppEditClassificationResponse, RefreshTabContextRequest, RefreshTabContextResponse, CppAppendRequest, CppAppendResponse, EditHistoryAppendChangesRequest, EditHistoryAppendChangesResponse, CppEditHistoryStatusRequest, CppEditHistoryStatusResponse } from "./cpp_pb.js";
import { CreateExperimentalIndexRequest, CreateExperimentalIndexResponse, ListExperimentalIndexFilesRequest, ListExperimentalIndexFilesResponse, ListenExperimentalIndexRequest, ListenExperimentalIndexResponse, RegisterFileToIndexRequest, SetupIndexDependenciesRequest, SetupIndexDependenciesResponse, ComputeIndexTopoSortRequest, ComputeIndexTopoSortResponse, ChooseCodeReferencesRequest, RegisterCodeReferencesRequest, RegisterCodeReferencesResponse, SummarizeWithReferencesRequest, RequestReceivedResponse, ExtractPathsRequest, ExtractPathsResponse } from "./symbolic_context_pb.js";
import { DocumentationQueryRequest, DocumentationQueryResponse } from "./docs_pb.js";
import { ReportInlineActionRequest, ReportInlineActionResponse } from "./telemetry_pb.js";
import { StreamBugBotRequest } from "./bugbot_pb.js";
import { BidiRequestId, BidiPollRequest, BidiPollResponse } from "./bidi_pb.js";
import { NameAgentRequest, NameAgentResponse, GetUsableModelsRequest, GetUsableModelsResponse, GetDefaultModelForCliRequest, GetDefaultModelForCliResponse } from "../../agent/v1/agent_service_pb.js";

var AiService = {
  typeName: "aiserver.v1.AiService",
  methods: {
    /**
     * @generated from rpc aiserver.v1.AiService.ServerTime
     */
    serverTime: {
      name: "ServerTime",
      I: ServerTimeRequest,
      O: ServerTimeResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.HealthCheck
     */
    healthCheck: {
      name: "HealthCheck",
      I: HealthCheckRequest,
      O: HealthCheckResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.PrivacyCheck
     */
    privacyCheck: {
      name: "PrivacyCheck",
      I: PrivacyCheckRequest,
      O: PrivacyCheckResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TimeLeftHealthCheck
     */
    timeLeftHealthCheck: {
      name: "TimeLeftHealthCheck",
      I: HealthCheckRequest,
      O: TimeLeftHealthCheckResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ThrowErrorCheck
     */
    throwErrorCheck: {
      name: "ThrowErrorCheck",
      I: ThrowErrorCheckRequest,
      O: ThrowErrorCheckResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.AvailableModels
     */
    availableModels: {
      name: "AvailableModels",
      I: AvailableModelsRequest,
      O: AvailableModelsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamChatTryReallyHard
     * @deprecated
     */
    streamChatTryReallyHard: {
      name: "StreamChatTryReallyHard",
      I: GetChatRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RerankDocuments
     */
    rerankDocuments: {
      name: "RerankDocuments",
      I: RerankDocumentsRequest,
      O: RerankDocumentsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamComposer
     * @deprecated
     */
    streamComposer: {
      name: "StreamComposer",
      I: GetComposerChatRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamComposerContext
     * @deprecated
     */
    streamComposerContext: {
      name: "StreamComposerContext",
      I: StreamChatContextRequest,
      O: StreamChatContextResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.WarmComposerCache
     */
    warmComposerCache: {
      name: "WarmComposerCache",
      I: GetComposerChatRequest,
      O: WarmComposerCacheResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.KeepComposerCacheWarm
     */
    keepComposerCacheWarm: {
      name: "KeepComposerCacheWarm",
      I: KeepComposerCacheWarmRequest,
      O: KeepComposerCacheWarmResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CountTokens
     */
    countTokens: {
      name: "CountTokens",
      I: CountTokensRequest,
      O: CountTokensResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamPotentialLocs
     */
    streamPotentialLocs: {
      name: "StreamPotentialLocs",
      I: PotentialLocsRequest,
      O: PotentialLocsResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamPotentialLocsUnderneath
     */
    streamPotentialLocsUnderneath: {
      name: "StreamPotentialLocsUnderneath",
      I: PotentialLocsUnderneathRequest,
      O: PotentialLocsUnderneathResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamPotentialLocsInitialQueries
     */
    streamPotentialLocsInitialQueries: {
      name: "StreamPotentialLocsInitialQueries",
      I: PotentialLocsInitialQueriesRequest,
      O: PotentialLocsInitialQueriesResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetChatTitle
     */
    getChatTitle: {
      name: "GetChatTitle",
      I: GetChatTitleRequest,
      O: GetChatTitleResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetCompletion
     */
    getCompletion: {
      name: "GetCompletion",
      I: GetCompletionRequest,
      O: GetCompletionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.IsolatedTreesitter
     */
    isolatedTreesitter: {
      name: "IsolatedTreesitter",
      I: IsolatedTreesitterRequest,
      O: IsolatedTreesitterResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetSimplePrompt
     */
    getSimplePrompt: {
      name: "GetSimplePrompt",
      I: GetSimplePromptRequest,
      O: GetSimplePromptResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetPassthroughPrompt
     */
    getPassthroughPrompt: {
      name: "GetPassthroughPrompt",
      I: GetPassthroughPromptRequest,
      O: GetPassthroughPromptResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.SuggestQuickActions
     */
    suggestQuickActions: {
      name: "SuggestQuickActions",
      I: SuggestQuickActionsRequest,
      O: SuggestQuickActionsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckLongFilesFit
     */
    checkLongFilesFit: {
      name: "CheckLongFilesFit",
      I: GetChatRequest,
      O: CheckLongFilesFitResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetEvaluationPrompt
     */
    getEvaluationPrompt: {
      name: "GetEvaluationPrompt",
      I: GetEvaluationPromptRequest,
      O: GetEvaluationPromptResponse,
      kind: MethodKind.Unary
    },
    /**
     * user info may contain a number of different things
     *
     * @generated from rpc aiserver.v1.AiService.GetUserInfo
     */
    getUserInfo: {
      name: "GetUserInfo",
      I: GetUserInfoRequest,
      O: GetUserInfoResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamChat
     * @deprecated
     */
    streamChat: {
      name: "StreamChat",
      I: GetChatRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamChatWeb
     * @deprecated
     */
    streamChatWeb: {
      name: "StreamChatWeb",
      I: GetChatRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.WarmChatCache
     * @deprecated
     */
    warmChatCache: {
      name: "WarmChatCache",
      I: WarmChatCacheRequest,
      O: WarmChatCacheResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamEdit
     * @deprecated
     */
    streamEdit: {
      name: "StreamEdit",
      I: StreamEditRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.PreloadEdit
     */
    preloadEdit: {
      name: "PreloadEdit",
      I: PreloadEditRequest,
      O: PreloadEditResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamFastEdit
     */
    streamFastEdit: {
      name: "StreamFastEdit",
      I: StreamFastEditRequest,
      O: StreamFastEditResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamGenerate
     * @deprecated
     */
    streamGenerate: {
      name: "StreamGenerate",
      I: StreamGenerateRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamInlineLongCompletion
     */
    streamInlineLongCompletion: {
      name: "StreamInlineLongCompletion",
      I: StreamInlineLongCompletionRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.SlashEdit
     */
    slashEdit: {
      name: "SlashEdit",
      I: SlashEditRequest,
      O: SlashEditResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.SlashEditFollowUpWithPreviousEdits
     */
    slashEditFollowUpWithPreviousEdits: {
      name: "SlashEditFollowUpWithPreviousEdits",
      I: SlashEditFollowUpWithPreviousEditsRequest,
      O: StreamSlashEditFollowUpWithPreviousEditsResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamAiPreviews
     */
    streamAiPreviews: {
      name: "StreamAiPreviews",
      I: StreamAiPreviewsRequest,
      O: StreamAiPreviewsResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ShouldTurnOnCppOnboarding
     */
    shouldTurnOnCppOnboarding: {
      name: "ShouldTurnOnCppOnboarding",
      I: ShouldTurnOnCppOnboardingRequest,
      O: ShouldTurnOnCppOnboardingResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetComposerAutocomplete
     */
    getComposerAutocomplete: {
      name: "GetComposerAutocomplete",
      I: GetComposerAutocompleteRequest,
      O: GetComposerAutocompleteResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamReview
     */
    streamReview: {
      name: "StreamReview",
      I: ReviewRequest,
      O: ReviewResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamReviewChat
     */
    streamReviewChat: {
      name: "StreamReviewChat",
      I: ReviewChatRequest,
      O: ReviewChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Checking queue position
     *
     * @generated from rpc aiserver.v1.AiService.CheckQueuePosition
     */
    checkQueuePosition: {
      name: "CheckQueuePosition",
      I: CheckQueuePositionRequest,
      O: CheckQueuePositionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckUsageBasedPrice
     */
    checkUsageBasedPrice: {
      name: "CheckUsageBasedPrice",
      I: CheckUsageBasedPriceRequest,
      O: CheckUsageBasedPriceResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.DoThisForMeCheck
     */
    doThisForMeCheck: {
      name: "DoThisForMeCheck",
      I: DoThisForMeCheckRequest,
      O: DoThisForMeCheckResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamDoThisForMe
     */
    streamDoThisForMe: {
      name: "StreamDoThisForMe",
      I: DoThisForMeRequest,
      O: DoThisForMeResponseWrapped,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Toolformer!
     *
     * @generated from rpc aiserver.v1.AiService.StreamChatToolformer
     */
    streamChatToolformer: {
      name: "StreamChatToolformer",
      I: GetChatRequest,
      O: StreamChatToolformerResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * StreamChatToolformerContinue is used to continue the toolformer invokation
     * after running a local tool
     *
     * @generated from rpc aiserver.v1.AiService.StreamChatToolformerContinue
     */
    streamChatToolformerContinue: {
      name: "StreamChatToolformerContinue",
      I: StreamChatToolformerContinueRequest,
      O: StreamChatToolformerResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.PushAiThought
     */
    pushAiThought: {
      name: "PushAiThought",
      I: PushAiThoughtRequest,
      O: PushAiThoughtResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckDoableAsTask
     */
    checkDoableAsTask: {
      name: "CheckDoableAsTask",
      I: CheckDoableAsTaskRequest,
      O: CheckDoableAsTaskResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportGroundTruthCandidate
     */
    reportGroundTruthCandidate: {
      name: "ReportGroundTruthCandidate",
      I: ReportGroundTruthCandidateRequest,
      O: ReportGroundTruthCandidateResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportCmdKFate
     */
    reportCmdKFate: {
      name: "ReportCmdKFate",
      I: ReportCmdKFateRequest,
      O: ReportCmdKFateResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ShowWelcomeScreen
     */
    showWelcomeScreen: {
      name: "ShowWelcomeScreen",
      I: ShowWelcomeScreenRequest,
      O: ShowWelcomeScreenResponse,
      kind: MethodKind.Unary
    },
    /**
     * ----------------------------------
     * Interface agent (you implement a *.ai.ts, you can start the
     * interface agent to go do your work for you) // where do I call command K + define messa
     * ----------------------------------
     *
     * @generated from rpc aiserver.v1.AiService.InterfaceAgentInit
     */
    interfaceAgentInit: {
      name: "InterfaceAgentInit",
      I: InterfaceAgentInitRequest,
      O: InterfaceAgentInitResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamInterfaceAgentStatus
     */
    streamInterfaceAgentStatus: {
      name: "StreamInterfaceAgentStatus",
      I: StreamInterfaceAgentStatusRequest,
      O: StreamInterfaceAgentStatusResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * a "TaskGet" method has a special meaning.
     * it is implemented as a task, which means that the request can take actions
     * in the client while producing its response therefore, it is technically a
     * streaming RPC, with exactly two messages: (1) just the task uuid to connect
     * to, and (2) the actual response
     *
     * @generated from rpc aiserver.v1.AiService.TaskGetInterfaceAgentStatus
     */
    taskGetInterfaceAgentStatus: {
      name: "TaskGetInterfaceAgentStatus",
      I: TaskGetInterfaceAgentStatusRequest,
      O: TaskGetInterfaceAgentStatusResponseWrapped,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.UpdateVscodeProfile
     */
    updateVscodeProfile: {
      name: "UpdateVscodeProfile",
      I: UpdateVscodeProfileRequest,
      O: UpdateVscodeProfileResponse,
      kind: MethodKind.Unary
    },
    /**
     * task data model:
     *
     * on the server we store the task state, which the user never really sees.
     * this is everything that's needed to continue executing the task, and is
     * generally stored in memory but may also be persisted to disk on the server
     * we also store an append-only task log, which the client can listen to. this
     * append-only log is a chronological time-line of everything that happened.
     * the server is the source of truth here
     *
     * we init a task with a task instruction, and get back a task id
     * TODO: we want to support specific chains for a task too
     *
     * @generated from rpc aiserver.v1.AiService.TaskInit
     */
    taskInit: {
      name: "TaskInit",
      I: TaskInitRequest,
      O: TaskInitResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TaskPause
     */
    taskPause: {
      name: "TaskPause",
      I: TaskPauseRequest,
      O: TaskPauseResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TaskInfo
     */
    taskInfo: {
      name: "TaskInfo",
      I: TaskInfoRequest,
      O: TaskInfoResponse,
      kind: MethodKind.Unary
    },
    /**
     * we can listen to a specific task id (only the user who created the task
     * can) this listens to the task log, which (for now) is append-only (so
     * people can cache if they want to) this will return an error if the user
     * does not have permissions to listen to the given task this will first
     * return the *current* task state, and then stream the log the stream ends
     * when: (done || paused) && (last log item has been delivered)
     *
     * @generated from rpc aiserver.v1.AiService.TaskStreamLog
     */
    taskStreamLog: {
      name: "TaskStreamLog",
      I: TaskStreamLogRequest,
      O: TaskStreamLogResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * the user can interrupt the task with a message
     *
     * @generated from rpc aiserver.v1.AiService.TaskSendMessage
     */
    taskSendMessage: {
      name: "TaskSendMessage",
      I: TaskSendMessageRequest,
      O: TaskSendMessageResponse,
      kind: MethodKind.Unary
    },
    /**
     * we call taskprovideresult when providing a result from an action to the
     * task
     *
     * @generated from rpc aiserver.v1.AiService.TaskProvideResult
     */
    taskProvideResult: {
      name: "TaskProvideResult",
      I: TaskProvideResultRequest,
      O: TaskProvideResultResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CreateExperimentalIndex
     * @deprecated
     */
    createExperimentalIndex: {
      name: "CreateExperimentalIndex",
      I: CreateExperimentalIndexRequest,
      O: CreateExperimentalIndexResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ListExperimentalIndexFiles
     * @deprecated
     */
    listExperimentalIndexFiles: {
      name: "ListExperimentalIndexFiles",
      I: ListExperimentalIndexFilesRequest,
      O: ListExperimentalIndexFilesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ListenExperimentalIndex
     * @deprecated
     */
    listenExperimentalIndex: {
      name: "ListenExperimentalIndex",
      I: ListenExperimentalIndexRequest,
      O: ListenExperimentalIndexResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RegisterFileToIndex
     * @deprecated
     */
    registerFileToIndex: {
      name: "RegisterFileToIndex",
      I: RegisterFileToIndexRequest,
      O: RequestReceivedResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.SetupIndexDependencies
     * @deprecated
     */
    setupIndexDependencies: {
      name: "SetupIndexDependencies",
      I: SetupIndexDependenciesRequest,
      O: SetupIndexDependenciesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ComputeIndexTopoSort
     * @deprecated
     */
    computeIndexTopoSort: {
      name: "ComputeIndexTopoSort",
      I: ComputeIndexTopoSortRequest,
      O: ComputeIndexTopoSortResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamChatDeepContext
     */
    streamChatDeepContext: {
      name: "StreamChatDeepContext",
      I: StreamChatDeepContextRequest,
      O: StreamChatDeepContextResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ChooseCodeReferences
     * @deprecated
     */
    chooseCodeReferences: {
      name: "ChooseCodeReferences",
      I: ChooseCodeReferencesRequest,
      O: RequestReceivedResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RegisterCodeReferences
     * @deprecated
     */
    registerCodeReferences: {
      name: "RegisterCodeReferences",
      I: RegisterCodeReferencesRequest,
      O: RegisterCodeReferencesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ExtractPaths
     * @deprecated
     */
    extractPaths: {
      name: "ExtractPaths",
      I: ExtractPathsRequest,
      O: ExtractPathsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.SummarizeWithReferences
     * @deprecated
     */
    summarizeWithReferences: {
      name: "SummarizeWithReferences",
      I: SummarizeWithReferencesRequest,
      O: RequestReceivedResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.DocumentationQuery
     */
    documentationQuery: {
      name: "DocumentationQuery",
      I: DocumentationQueryRequest,
      O: DocumentationQueryResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.AvailableDocs
     */
    availableDocs: {
      name: "AvailableDocs",
      I: AvailableDocsRequest,
      O: AvailableDocsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RunWebSearch
     */
    runWebSearch: {
      name: "RunWebSearch",
      I: RunWebSearchRequest,
      O: RunWebSearchResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RunWebFetch
     */
    runWebFetch: {
      name: "RunWebFetch",
      I: RunWebFetchRequest,
      O: RunWebFetchResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RunGenerateImage
     */
    runGenerateImage: {
      name: "RunGenerateImage",
      I: RunGenerateImageRequest,
      O: RunGenerateImageResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportFeedback
     */
    reportFeedback: {
      name: "ReportFeedback",
      I: ReportFeedbackRequest,
      O: ReportFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportBug
     */
    reportBug: {
      name: "ReportBug",
      I: ReportBugRequest,
      O: ReportBugResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamChatContext
     * @deprecated
     */
    streamChatContext: {
      name: "StreamChatContext",
      I: StreamChatContextRequest,
      O: StreamChatContextResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GenerateTldr
     * @deprecated
     */
    generateTldr: {
      name: "GenerateTldr",
      I: GenerateTldrRequest,
      O: GenerateTldrResponse,
      kind: MethodKind.Unary
    },
    /**
     * the TaskStream has a special meaning
     * it creates a background task that allows this endpoint to take actions in
     * the editor this is potentially quite useful
     *
     * @generated from rpc aiserver.v1.AiService.TaskStreamChatContext
     * @deprecated
     */
    taskStreamChatContext: {
      name: "TaskStreamChatContext",
      I: TaskStreamChatContextRequest,
      O: TaskStreamChatContextResponseWrapped,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RerankResults
     */
    rerankResults: {
      name: "RerankResults",
      I: RerankerRequest,
      O: RerankerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ModelQuery
     */
    modelQuery: {
      name: "ModelQuery",
      I: ModelQueryRequest,
      O: ModelQueryResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ModelQueryV2
     */
    modelQueryV2: {
      name: "ModelQueryV2",
      I: ModelQueryRequest,
      O: ModelQueryResponseV2,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.IntentPrediction
     */
    intentPrediction: {
      name: "IntentPrediction",
      I: IntentPredictionRequest,
      O: IntentPredictionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetChatSuggestions
     * @deprecated
     */
    getChatSuggestions: {
      name: "GetChatSuggestions",
      I: GetChatSuggestionsRequest,
      O: GetChatSuggestionsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetUserInstructions
     */
    getUserInstructions: {
      name: "GetUserInstructions",
      I: GetUserInstructionsRequest,
      O: GetUserInstructionsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamCursorTutor
     * @deprecated
     */
    streamCursorTutor: {
      name: "StreamCursorTutor",
      I: StreamCursorTutorRequest,
      O: StreamCursorTutorResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckFeatureStatus
     */
    checkFeatureStatus: {
      name: "CheckFeatureStatus",
      I: CheckFeatureStatusRequest,
      O: CheckFeatureStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckFeaturesStatus
     */
    checkFeaturesStatus: {
      name: "CheckFeaturesStatus",
      I: CheckFeaturesStatusRequest,
      O: CheckFeaturesStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckFeatureStatusUnauthenticated
     */
    checkFeatureStatusUnauthenticated: {
      name: "CheckFeatureStatusUnauthenticated",
      I: CheckFeatureStatusRequest,
      O: CheckFeatureStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * for long-context mode - I prefer to filter on-client.
     *
     * @generated from rpc aiserver.v1.AiService.GetEffectiveTokenLimit
     */
    getEffectiveTokenLimit: {
      name: "GetEffectiveTokenLimit",
      I: GetEffectiveTokenLimitRequest,
      O: GetEffectiveTokenLimitResponse,
      kind: MethodKind.Unary
    },
    /**
     * ----------- cpp -----------------------------
     *
     * @generated from rpc aiserver.v1.AiService.GetContextScores
     */
    getContextScores: {
      name: "GetContextScores",
      I: ContextScoresRequest,
      O: ContextScoresResponse,
      kind: MethodKind.Unary
    },
    /**
     * main rpc call for getting cpp completions.
     *
     * @generated from rpc aiserver.v1.AiService.StreamCpp
     */
    streamCpp: {
      name: "StreamCpp",
      I: StreamCppRequest,
      O: StreamCppResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * the cpp config that the client uses from the server.
     * TODO (Aman): Deprecate this after enough client updates have propagated
     *
     * @generated from rpc aiserver.v1.AiService.CppConfig
     */
    cppConfig: {
      name: "CppConfig",
      I: CppConfigRequest,
      O: CppConfigResponse,
      kind: MethodKind.Unary
    },
    /**
     * check if cpp should even append history, just to control this from our server.
     *
     * @generated from rpc aiserver.v1.AiService.CppEditHistoryStatus
     */
    cppEditHistoryStatus: {
      name: "CppEditHistoryStatus",
      I: CppEditHistoryStatusRequest,
      O: CppEditHistoryStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * main telemetry call. high throughput.
     *
     * @generated from rpc aiserver.v1.AiService.CppAppend
     */
    cppAppend: {
      name: "CppAppend",
      I: CppAppendRequest,
      O: CppAppendResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RefreshTabContext
     */
    refreshTabContext: {
      name: "RefreshTabContext",
      I: RefreshTabContextRequest,
      O: RefreshTabContextResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckNumberConfig
     */
    checkNumberConfig: {
      name: "CheckNumberConfig",
      I: CheckNumberConfigRequest,
      O: CheckNumberConfigResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckNumberConfigUnauthenticated
     */
    checkNumberConfigUnauthenticated: {
      name: "CheckNumberConfigUnauthenticated",
      I: CheckNumberConfigRequest,
      O: CheckNumberConfigResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckNumberConfigs
     */
    checkNumberConfigs: {
      name: "CheckNumberConfigs",
      I: CheckNumberConfigsRequest,
      O: CheckNumberConfigsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamTerminalAutocomplete
     */
    streamTerminalAutocomplete: {
      name: "StreamTerminalAutocomplete",
      I: StreamTerminalAutocompleteRequest,
      O: StreamTerminalAutocompleteResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamPseudocodeGenerator
     */
    streamPseudocodeGenerator: {
      name: "StreamPseudocodeGenerator",
      I: StreamPseudocodeGeneratorRequest,
      O: StreamPseudocodeGeneratorResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamPseudocodeMapper
     */
    streamPseudocodeMapper: {
      name: "StreamPseudocodeMapper",
      I: StreamPseudocodeMapperRequest,
      O: StreamPseudocodeMapperResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.AcknowledgeGracePeriodDisclaimer
     */
    acknowledgeGracePeriodDisclaimer: {
      name: "AcknowledgeGracePeriodDisclaimer",
      I: AcknowledgeGracePeriodDisclaimerRequest,
      O: AcknowledgeGracePeriodDisclaimerResponse,
      kind: MethodKind.Unary
    },
    /**
     * lint!
     * we stream back a lint result
     * the linter may spawn background tasks that get executed
     * the reason we stream back is because some lints are very fast, and some may
     * take more time (e.g., they need an extra verification step with an agent)
     *
     * @generated from rpc aiserver.v1.AiService.StreamAiLintBug
     */
    streamAiLintBug: {
      name: "StreamAiLintBug",
      I: StreamAiLintBugRequest,
      O: StreamAiLintBugResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamAiCursorHelp
     */
    streamAiCursorHelp: {
      name: "StreamAiCursorHelp",
      I: StreamAiCursorHelpRequest,
      O: StreamAiCursorHelpResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.LogUserLintReply
     */
    logUserLintReply: {
      name: "LogUserLintReply",
      I: LogUserLintReplyRequest,
      O: LogUserLintReplyResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.LogLinterExplicitUserFeedback
     */
    logLinterExplicitUserFeedback: {
      name: "LogLinterExplicitUserFeedback",
      I: LogLinterExplicitUserFeedbackRequest,
      O: LogLinterExplicitUserFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamFixMarkers
     */
    streamFixMarkers: {
      name: "StreamFixMarkers",
      I: FixMarkersRequest,
      O: FixMarkersResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Telemtry!
     *
     * @generated from rpc aiserver.v1.AiService.ReportInlineAction
     */
    reportInlineAction: {
      name: "ReportInlineAction",
      I: ReportInlineActionRequest,
      O: ReportInlineActionResponse,
      kind: MethodKind.Unary
    },
    /**
     * ----------------------------------
     * New idea: call prompts directly from a client on the server!!
     * ----------------------------------
     *
     * @generated from rpc aiserver.v1.AiService.StreamPriomptPrompt
     */
    streamPriomptPrompt: {
      name: "StreamPriomptPrompt",
      I: StreamPriomptPromptRequest,
      O: StreamPriomptPromptResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamLint
     * @deprecated
     */
    streamLint: {
      name: "StreamLint",
      I: StreamLintRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamNewLintRule
     * @deprecated
     */
    streamNewLintRule: {
      name: "StreamNewLintRule",
      I: StreamNewRuleRequest,
      O: StreamChatResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.AiProject
     * @deprecated
     */
    aiProject: {
      name: "AiProject",
      I: AiProjectRequest,
      O: AiProjectResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ToCamelCase
     */
    toCamelCase: {
      name: "ToCamelCase",
      I: ToCamelCaseRequest,
      O: ToCamelCaseResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportGenerationFeedback
     */
    reportGenerationFeedback: {
      name: "ReportGenerationFeedback",
      I: ReportGenerationFeedbackRequest,
      O: ReportGenerationFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportAgentFeedback
     */
    reportAgentFeedback: {
      name: "ReportAgentFeedback",
      I: ReportAgentFeedbackRequest,
      O: ReportAgentFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportAgentMessageFeedback
     */
    reportAgentMessageFeedback: {
      name: "ReportAgentMessageFeedback",
      I: ReportAgentMessageFeedbackRequest,
      O: ReportAgentMessageFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportAutoRoutingResultFeedback
     */
    reportAutoRoutingResultFeedback: {
      name: "ReportAutoRoutingResultFeedback",
      I: ReportAutoRoutingResultFeedbackRequest,
      O: ReportAutoRoutingResultFeedbackResponse,
      kind: MethodKind.Unary
    },
    /**
     * Deprecated: GetThoughtAnnotation is no longer called by clients.
     *
     * @generated from rpc aiserver.v1.AiService.GetThoughtAnnotation
     * @deprecated
     */
    getThoughtAnnotation: {
      name: "GetThoughtAnnotation",
      I: GetThoughtAnnotationRequest,
      O: GetThoughtAnnotationResponse,
      kind: MethodKind.Unary
    },
    /**
     * this is super hacky and we should probably graduate this to a v2 if useful
     *
     * @generated from rpc aiserver.v1.AiService.StreamWebCmdKV1
     */
    streamWebCmdKV1: {
      name: "StreamWebCmdKV1",
      I: StreamWebCmdKV1Request,
      O: StreamWebCmdKV1Response,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamNextCursorPrediction
     */
    streamNextCursorPrediction: {
      name: "StreamNextCursorPrediction",
      I: StreamNextCursorPredictionRequest,
      O: StreamNextCursorPredictionResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.IsCursorPredictionEnabled
     */
    isCursorPredictionEnabled: {
      name: "IsCursorPredictionEnabled",
      I: IsCursorPredictionEnabledRequest,
      O: IsCursorPredictionEnabledResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetCppEditClassification
     */
    getCppEditClassification: {
      name: "GetCppEditClassification",
      I: GetCppEditClassificationRequest,
      O: GetCppEditClassificationResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetTerminalCompletion
     */
    getTerminalCompletion: {
      name: "GetTerminalCompletion",
      I: GetTerminalCompletionRequest,
      O: GetTerminalCompletionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TakeNotesOnCommitDiff
     */
    takeNotesOnCommitDiff: {
      name: "TakeNotesOnCommitDiff",
      I: TakeNotesOnCommitDiffRequest,
      O: TakeNotesOnCommitDiffResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.BulkEmbed
     */
    bulkEmbed: {
      name: "BulkEmbed",
      I: BulkEmbedRequest,
      O: BulkEmbedResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.BackgroundCmdKEval
     */
    backgroundCmdKEval: {
      name: "BackgroundCmdKEval",
      I: BackgroundCmdKEvalRequest,
      O: BackgroundCmdKEvalResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.BackgroundCmdK
     */
    backgroundCmdK: {
      name: "BackgroundCmdK",
      I: BackgroundCmdKRequest,
      O: BackgroundCmdKResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CalculateAutoSelection
     * @deprecated
     */
    calculateAutoSelection: {
      name: "CalculateAutoSelection",
      I: CalculateAutoSelectionRequest,
      O: CalculateAutoSelectionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetAtSymbolSuggestions
     */
    getAtSymbolSuggestions: {
      name: "GetAtSymbolSuggestions",
      I: GetAtSymbolSuggestionsRequest,
      O: GetAtSymbolSuggestionsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetCodebaseQuestions
     */
    getCodebaseQuestions: {
      name: "GetCodebaseQuestions",
      I: GetChatRequest,
      O: GetCodebaseQuestionsResponse,
      kind: MethodKind.Unary
    },
    /**
     * last used in december
     *
     * @generated from rpc aiserver.v1.AiService.CppEditHistoryAppend
     * @deprecated
     */
    cppEditHistoryAppend: {
      name: "CppEditHistoryAppend",
      I: EditHistoryAppendChangesRequest,
      O: EditHistoryAppendChangesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.DevOnlyGetPastRequestIds
     */
    devOnlyGetPastRequestIds: {
      name: "DevOnlyGetPastRequestIds",
      I: DevOnlyGetPastRequestIdsRequest,
      O: DevOnlyGetPastRequestIdsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetFilesForComposer
     */
    getFilesForComposer: {
      name: "GetFilesForComposer",
      I: GetFilesForComposerRequest,
      O: GetFilesForComposerResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TryParseTypeScriptTreeSitter
     * @deprecated
     */
    tryParseTypeScriptTreeSitter: {
      name: "TryParseTypeScriptTreeSitter",
      I: TryParseTypeScriptTreeSitterRequest,
      O: TryParseTypeScriptTreeSitterResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.NameTab
     */
    nameTab: {
      name: "NameTab",
      I: NameTabRequest,
      O: NameTabResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.IsTerminalFinishedV2
     */
    isTerminalFinishedV2: {
      name: "IsTerminalFinishedV2",
      I: IsTerminalFinishedRequest,
      O: IsTerminalFinishedResponseV2,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TestModelStatus
     */
    testModelStatus: {
      name: "TestModelStatus",
      I: TestModelStatusRequest,
      O: TestModelStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.FindBugs
     */
    findBugs: {
      name: "FindBugs",
      I: FindBugsRequest,
      O: FindBugsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ContextReranking
     */
    contextReranking: {
      name: "ContextReranking",
      I: ContextRerankingRequest,
      O: ContextRerankingResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.AutoContext
     * @deprecated
     */
    autoContext: {
      name: "AutoContext",
      I: AutoContextRequest,
      O: AutoContextResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.WriteGitCommitMessage
     */
    writeGitCommitMessage: {
      name: "WriteGitCommitMessage",
      I: WriteGitCommitMessageRequest,
      O: WriteGitCommitMessageResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.WriteGitBranchName
     */
    writeGitBranchName: {
      name: "WriteGitBranchName",
      I: WriteGitBranchNameRequest,
      O: WriteGitBranchNameResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamBugBot
     */
    streamBugBot: {
      name: "StreamBugBot",
      I: StreamBugBotRequest,
      O: StreamBugBotResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamBugBotAgentic
     */
    streamBugBotAgentic: {
      name: "StreamBugBotAgentic",
      I: StreamBugBotAgenticClientMessage,
      O: StreamBugBotAgenticServerMessage,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamBugBotAgenticSSE
     */
    streamBugBotAgenticSSE: {
      name: "StreamBugBotAgenticSSE",
      I: BidiRequestId,
      O: StreamBugBotAgenticServerMessage,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamBugBotAgenticPoll
     */
    streamBugBotAgenticPoll: {
      name: "StreamBugBotAgenticPoll",
      I: BidiPollRequest,
      O: BidiPollResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamUiBestOfNJudge
     */
    streamUiBestOfNJudge: {
      name: "StreamUiBestOfNJudge",
      I: StreamUiBestOfNJudgeClientMessage,
      O: StreamUiBestOfNJudgeServerMessage,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamUiBestOfNJudgeSSE
     */
    streamUiBestOfNJudgeSSE: {
      name: "StreamUiBestOfNJudgeSSE",
      I: BidiRequestId,
      O: StreamUiBestOfNJudgeServerMessage,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamUiBestOfNJudgePoll
     */
    streamUiBestOfNJudgePoll: {
      name: "StreamUiBestOfNJudgePoll",
      I: BidiPollRequest,
      O: BidiPollResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckBugBotPrice
     */
    checkBugBotPrice: {
      name: "CheckBugBotPrice",
      I: CheckBugBotPriceRequest,
      O: CheckBugBotPriceResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.CheckBugBotTelemetryHealthy
     */
    checkBugBotTelemetryHealthy: {
      name: "CheckBugBotTelemetryHealthy",
      I: CheckBugBotTelemetryHealthyRequest,
      O: CheckBugBotTelemetryHealthyResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.RecordIdeBugReaction
     */
    recordIdeBugReaction: {
      name: "RecordIdeBugReaction",
      I: RecordIdeBugReactionRequest,
      O: RecordIdeBugReactionResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetSuggestedBugBotIterations
     */
    getSuggestedBugBotIterations: {
      name: "GetSuggestedBugBotIterations",
      I: GetSuggestedBugBotIterationsRequest,
      O: GetSuggestedBugBotIterationsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetEditorBugbotAutoRunStatus
     */
    getEditorBugbotAutoRunStatus: {
      name: "GetEditorBugbotAutoRunStatus",
      I: GetEditorBugbotAutoRunStatusRequest,
      O: GetEditorBugbotAutoRunStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TestBidi
     */
    testBidi: {
      name: "TestBidi",
      I: TestBidiRequest,
      O: TestBidiResponse,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamDiffReview
     */
    streamDiffReview: {
      name: "StreamDiffReview",
      I: GetDiffReviewRequest,
      O: StreamDiffReviewResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamDiffReviewByFile
     */
    streamDiffReviewByFile: {
      name: "StreamDiffReviewByFile",
      I: GetDiffReviewRequest,
      O: StreamDiffReviewByFileResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetModelLabels
     * @deprecated
     */
    getModelLabels: {
      name: "GetModelLabels",
      I: GetModelLabelsRequest,
      O: GetModelLabelsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetLastDefaultModelNudge
     */
    getLastDefaultModelNudge: {
      name: "GetLastDefaultModelNudge",
      I: GetLastDefaultModelNudgeRequest,
      O: GetLastDefaultModelNudgeResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetDefaultModelNudgeData
     */
    getDefaultModelNudgeData: {
      name: "GetDefaultModelNudgeData",
      I: GetDefaultModelNudgeDataRequest,
      O: GetDefaultModelNudgeDataResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetDefaultModel
     */
    getDefaultModel: {
      name: "GetDefaultModel",
      I: GetDefaultModelRequest,
      O: GetDefaultModelResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportCommitAiAnalytics
     */
    reportCommitAiAnalytics: {
      name: "ReportCommitAiAnalytics",
      I: ReportCommitAiAnalyticsRequest,
      O: ReportCommitAiAnalyticsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.TestBedrockCredentials
     */
    testBedrockCredentials: {
      name: "TestBedrockCredentials",
      I: TestBedrockCredentialsRequest,
      O: TestBedrockCredentialsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportAiCodeChangeMetrics
     */
    reportAiCodeChangeMetrics: {
      name: "ReportAiCodeChangeMetrics",
      I: ReportAiCodeChangeMetricsRequest,
      O: ReportAiCodeChangeMetricsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportProcessMetrics
     */
    reportProcessMetrics: {
      name: "ReportProcessMetrics",
      I: ReportProcessMetricsRequest,
      O: ReportProcessMetricsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportProcessMetricsV2
     */
    reportProcessMetricsV2: {
      name: "ReportProcessMetricsV2",
      I: ReportProcessMetricsV2Request,
      O: ReportProcessMetricsV2Response,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportSandProcessMetrics
     */
    reportSandProcessMetrics: {
      name: "ReportSandProcessMetrics",
      I: ReportSandProcessMetricsRequest,
      O: ReportSandProcessMetricsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.ReportClientNumericMetrics
     */
    reportClientNumericMetrics: {
      name: "ReportClientNumericMetrics",
      I: ReportClientNumericMetricsRequest,
      O: ReportClientNumericMetricsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.PotentiallyGenerateMemory
     */
    potentiallyGenerateMemory: {
      name: "PotentiallyGenerateMemory",
      I: PotentiallyGenerateMemoryRequest,
      O: PotentiallyGenerateMemoryResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.KnowledgeBaseAdd
     */
    knowledgeBaseAdd: {
      name: "KnowledgeBaseAdd",
      I: KnowledgeBaseAddRequest,
      O: KnowledgeBaseAddResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.KnowledgeBaseList
     */
    knowledgeBaseList: {
      name: "KnowledgeBaseList",
      I: KnowledgeBaseListRequest,
      O: KnowledgeBaseListResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.KnowledgeBaseRemove
     */
    knowledgeBaseRemove: {
      name: "KnowledgeBaseRemove",
      I: KnowledgeBaseRemoveRequest,
      O: KnowledgeBaseRemoveResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.KnowledgeBaseUpdate
     */
    knowledgeBaseUpdate: {
      name: "KnowledgeBaseUpdate",
      I: KnowledgeBaseUpdateRequest,
      O: KnowledgeBaseUpdateResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.FetchRelevantKnowledgeForConversation
     */
    fetchRelevantKnowledgeForConversation: {
      name: "FetchRelevantKnowledgeForConversation",
      I: FetchRelevantKnowledgeForConversationRequest,
      O: FetchRelevantKnowledgeForConversationResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.InferBackgroundComposerScripts
     */
    inferBackgroundComposerScripts: {
      name: "InferBackgroundComposerScripts",
      I: InferBackgroundComposerScriptsRequest,
      O: InferBackgroundComposerScriptsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Returns a URL where users can provide feedback for Background Composer.
     *
     * @generated from rpc aiserver.v1.AiService.GetBackgroundComposerFeedbackLink
     */
    getBackgroundComposerFeedbackLink: {
      name: "GetBackgroundComposerFeedbackLink",
      I: GetBackgroundComposerFeedbackLinkRequest,
      O: GetBackgroundComposerFeedbackLinkResponse,
      kind: MethodKind.Unary
    },
    /**
     * Only used in CLI for now
     *
     * @generated from rpc aiserver.v1.AiService.GetUsableModels
     */
    getUsableModels: {
      name: "GetUsableModels",
      I: GetUsableModelsRequest,
      O: GetUsableModelsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.GetDefaultModelForCli
     */
    getDefaultModelForCli: {
      name: "GetDefaultModelForCli",
      I: GetDefaultModelForCliRequest,
      O: GetDefaultModelForCliResponse,
      kind: MethodKind.Unary
    },
    /**
     * DEPRECATED: Composer enhancer / "pimp my prompt" feature has been removed
     *
     * @generated from rpc aiserver.v1.AiService.StreamComposerEnhancer
     * @deprecated
     */
    streamComposerEnhancer: {
      name: "StreamComposerEnhancer",
      I: ComposerEnhancerClientMessage,
      O: ComposerEnhancerServerMessage,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamComposerEnhancerSSE
     * @deprecated
     */
    streamComposerEnhancerSSE: {
      name: "StreamComposerEnhancerSSE",
      I: BidiRequestId,
      O: ComposerEnhancerServerMessage,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamComposerEnhancerPoll
     * @deprecated
     */
    streamComposerEnhancerPoll: {
      name: "StreamComposerEnhancerPoll",
      I: BidiPollRequest,
      O: BidiPollResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Speech-to-Text (STT) streaming endpoints
     * Native bidirectional streaming for HTTP/2
     *
     * @generated from rpc aiserver.v1.AiService.StreamStt
     */
    streamStt: {
      name: "StreamStt",
      I: SttClientMessage,
      O: SttServerMessage,
      kind: MethodKind.BiDiStreaming
    },
    /**
     * HTTP/1.1-compatible shims for StreamStt when HTTP/2 BiDi is unavailable
     *
     * @generated from rpc aiserver.v1.AiService.StreamSttSSE
     */
    streamSttSSE: {
      name: "StreamSttSSE",
      I: BidiRequestId,
      O: SttServerMessage,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.AiService.StreamSttPoll
     */
    streamSttPoll: {
      name: "StreamSttPoll",
      I: BidiPollRequest,
      O: BidiPollResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Non-streaming audio transcription — accepts complete audio, returns full transcript
     *
     * @generated from rpc aiserver.v1.AiService.TranscribeAudio
     */
    transcribeAudio: {
      name: "TranscribeAudio",
      I: TranscribeAudioRequest,
      O: TranscribeAudioResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.AiService.NameAgent
     */
    nameAgent: {
      name: "NameAgent",
      I: NameAgentRequest,
      O: NameAgentResponse,
      kind: MethodKind.Unary
    },
    /**
     * Evaluate a prompt-based hook using an LLM to determine if an action should proceed
     *
     * @generated from rpc aiserver.v1.AiService.EvaluatePromptHook
     */
    evaluatePromptHook: {
      name: "EvaluatePromptHook",
      I: EvaluatePromptHookRequest,
      O: EvaluatePromptHookResponse,
      kind: MethodKind.Unary
    },
    /**
     * DEPRECATED: `cloud_setup_checklist` shipped control; kept for older Glass builds.
     * Always returns empty pending/completed lists (no setup checklist UI).
     *
     * @generated from rpc aiserver.v1.AiService.GetCloudSetupBlockers
     * @deprecated
     */
    getCloudSetupBlockers: {
      name: "GetCloudSetupBlockers",
      I: GetCloudSetupBlockersRequest,
      O: GetCloudSetupBlockersResponse,
      kind: MethodKind.Unary
    }
  }
} as const;

export { AiService };
