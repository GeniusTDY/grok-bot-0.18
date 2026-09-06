/**
 * Complete generated Grok Bot 0.18 Analytics module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:485450-485545
 * Region SHA-256: ff5a445be2c11eab9be3c04f14c68c375650c1f69353fc0ccc0f3fbb82630f29
 * B7 service exports: 1; AnalyticsService methods: 8
 */
import { MethodKind } from "@bufbuild/protobuf";
import { TrackEventsRequest, TrackEventsResponse, BatchRequest, BatchResponse, BootstrapStatsigRequest, BootstrapStatsigResponse, GetFirstWindowStatsigDecisionRequest, GetFirstWindowStatsigDecisionResponse, SubmitLogsRequest, SubmitLogsResponse, IngestConversationRequest, IngestConversationResponse, UploadIssueTraceRequest, UploadIssueTraceResponse, DownloadIssueTracesRequest, DownloadIssueTracesResponse } from "./analytics_pb.js";

var AnalyticsService = {
  typeName: "aiserver.v1.AnalyticsService",
  methods: {
    /**
     * Tracks multiple user application events while respecting privacy mode
     *
     * @generated from rpc aiserver.v1.AnalyticsService.TrackEvents
     */
    trackEvents: {
      name: "TrackEvents",
      I: TrackEventsRequest,
      O: TrackEventsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Batch endpoint for tracking events with user and anonymous identifiers
     *
     * @generated from rpc aiserver.v1.AnalyticsService.Batch
     */
    batch: {
      name: "Batch",
      I: BatchRequest,
      O: BatchResponse,
      kind: MethodKind.Unary
    },
    /**
     * get statsig config for client
     *
     * @generated from rpc aiserver.v1.AnalyticsService.BootstrapStatsig
     */
    bootstrapStatsig: {
      name: "BootstrapStatsig",
      I: BootstrapStatsigRequest,
      O: BootstrapStatsigResponse,
      kind: MethodKind.Unary
    },
    /**
     * Evaluate the first startup window routing decision before the renderer exists.
     *
     * @generated from rpc aiserver.v1.AnalyticsService.GetFirstWindowStatsigDecision
     */
    getFirstWindowStatsigDecision: {
      name: "GetFirstWindowStatsigDecision",
      I: GetFirstWindowStatsigDecisionRequest,
      O: GetFirstWindowStatsigDecisionResponse,
      kind: MethodKind.Unary
    },
    /**
     * Submit structured logs from client
     *
     * @generated from rpc aiserver.v1.AnalyticsService.SubmitLogs
     */
    submitLogs: {
      name: "SubmitLogs",
      I: SubmitLogsRequest,
      O: SubmitLogsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Ingest conversation transcript for server-side summarization
     *
     * @generated from rpc aiserver.v1.AnalyticsService.IngestConversation
     */
    ingestConversation: {
      name: "IngestConversation",
      I: IngestConversationRequest,
      O: IngestConversationResponse,
      kind: MethodKind.Unary
    },
    /**
     * Upload diagnostic issue trace data keyed by a caller-chosen token
     *
     * @generated from rpc aiserver.v1.AnalyticsService.UploadIssueTrace
     */
    uploadIssueTrace: {
      name: "UploadIssueTrace",
      I: UploadIssueTraceRequest,
      O: UploadIssueTraceResponse,
      kind: MethodKind.Unary
    },
    /**
     * Download all issue trace payloads for a given token as a zip archive
     *
     * @generated from rpc aiserver.v1.AnalyticsService.DownloadIssueTraces
     */
    downloadIssueTraces: {
      name: "DownloadIssueTraces",
      I: DownloadIssueTracesRequest,
      O: DownloadIssueTracesResponse,
      kind: MethodKind.Unary
    }
  }
};


export { AnalyticsService };
