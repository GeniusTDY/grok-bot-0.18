/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:259592-259647
 * Region SHA-256: 2c092f0c43b505af290dcc844c01cc8632ff10ac9362edc85890bd3affdc202d
 */
import { MethodKind, Empty } from "@bufbuild/protobuf";
import { InferenceStreamRequest, InferenceStreamResponse, AgentFollowupCategorizationRequest, AgentPostTurnLabelingRequest } from "./inference_pb.js";

var InferenceService = {
  typeName: "aiserver.v1.InferenceService",
  methods: {
    /**
     * Stream executes a prompt with optional tools and returns a stream of results.
     * This mirrors the PromptExecutor.stream() method from @anysphere/chat-inference.
     *
     * @generated from rpc aiserver.v1.InferenceService.Stream
     */
    stream: {
      name: "Stream",
      I: InferenceStreamRequest,
      O: InferenceStreamResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * RecordAgentFollowupClassification categorizes the user's follow-up message in an agent conversation
     * and records the result for analytics/tracking purposes.
     * This is used to determine if the user is dissatisfied, asking for more, starting a new task, etc.
     * Clients that run the agent loop themselves (Claude Code, Sand) call this at turn start.
     * Domain (task metadata) and issue (implicit-feedback) labeling are chained from AFC results.
     *
     * @generated from rpc aiserver.v1.InferenceService.RecordAgentFollowupClassification
     */
    recordAgentFollowupClassification: {
      name: "RecordAgentFollowupClassification",
      I: AgentFollowupCategorizationRequest,
      O: Empty,
      kind: MethodKind.Unary
    },
    /**
     * RecordAgentPostTurnLabeling runs post-turn safety and defect classifiers for clients that
     * run the agent loop themselves (e.g. Sand) and therefore do not go through the agent-server
     * categorization middleware. Call after the assistant turn has completed so the labelers see
     * the finished response.
     *
     * @generated from rpc aiserver.v1.InferenceService.RecordAgentPostTurnLabeling
     */
    recordAgentPostTurnLabeling: {
      name: "RecordAgentPostTurnLabeling",
      I: AgentPostTurnLabelingRequest,
      O: Empty,
      kind: MethodKind.Unary
    }
  }
};


export { InferenceService };
