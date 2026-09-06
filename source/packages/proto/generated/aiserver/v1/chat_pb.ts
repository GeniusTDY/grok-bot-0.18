/**
 * Complete generated Grok Bot 0.18 Dashboard closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:162943-168165
 * Region SHA-256: 2421f26c3b30a578597f27d4f30e7703fcfb5815ad3c6373e40748ec220c55cf
 * Dashboard closure exports: 123 messages + 14 enums = 137
 */
import { Message, proto3, protoInt64, Empty, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ClientSideToolV2, ToolResultError, ClientSideToolV2Call, ClientSideToolV2Result, StreamedBackPartialToolCall, StreamedBackToolCall, StreamedBackToolCallV2, EditFileResult_FileDiff, ListDirResult, ToolResult, MCPParams_Tool, TodoItem2, ListDirV2Result } from "./tools_pb.js";
import { EnvironmentInfo, SimplestRange, GitDiff, FileDiff, LineRange, CodeBlock, File2, CurrentFileInfo, ModelDetails, ModelInfo, LinterErrors, LinterErrorsWithoutFileContents, CursorRule2, ExplicitContext, ImageProto2, ChatQuote, ComposerExternalLink, CodeChunk, RCPLogEntry, RCPUIElementPicked } from "./utils_pb.js";
import { DocumentationChunk } from "./docs_pb.js";
import { QueryOnlyRepoAccess, CodeResult, RepositoryInfo } from "./repository_pb.js";
import { ComposerCapabilityRequest, ComposerCapabilityContext } from "./composer_pb.js";
import { AgentMode, SimulatedMsgReason, SubscriptionSource, ThinkingStyle, TriggeringUserInfo, SubscriptionEventDisplay, ConversationSummary, FileState, ConversationStateStructure } from "../../agent/v1/agent_pb.js";
import { DebugModeConfig } from "../../agent/v1/request_context_exec_pb.js";
import { SelectedCursorCommand, SelectedPastChat } from "../../agent/v1/selected_context_pb.js";
import { GetLintsForChangeResponse } from "./shadow_workspace_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ChunkType = 0 | 1 | 2 | 3;
var ChunkType: {
  "UNSPECIFIED": 0;
  "CODEBASE": 1;
  "LONG_FILE": 2;
  "DOCS": 3;
  0: "UNSPECIFIED";
  1: "CODEBASE";
  2: "LONG_FILE";
  3: "DOCS";
};
export type SubagentType2 = 0 | 1 | 2 | 3 | 4;
var SubagentType2: {
  "UNSPECIFIED": 0;
  "DEEP_SEARCH": 1;
  "FIX_LINTS": 2;
  "TASK": 3;
  "SPEC": 4;
  0: "UNSPECIFIED";
  1: "DEEP_SEARCH";
  2: "FIX_LINTS";
  3: "TASK";
  4: "SPEC";
};
export type StreamUnifiedChatRequest_UnifiedMode = 0 | 1 | 2 | 3 | 4 | 5 | 6;
var StreamUnifiedChatRequest_UnifiedMode: {
  "UNSPECIFIED": 0;
  "CHAT": 1;
  "AGENT": 2;
  "EDIT": 3;
  "CUSTOM": 4;
  "PLAN": 5;
  "DEBUG": 6;
  0: "UNSPECIFIED";
  1: "CHAT";
  2: "AGENT";
  3: "EDIT";
  4: "CUSTOM";
  5: "PLAN";
  6: "DEBUG";
};
export type StreamUnifiedChatRequest_ThinkingLevel = 0 | 1 | 2;
var StreamUnifiedChatRequest_ThinkingLevel: {
  "UNSPECIFIED": 0;
  "MEDIUM": 1;
  "HIGH": 2;
  0: "UNSPECIFIED";
  1: "MEDIUM";
  2: "HIGH";
};
export type ConversationMessage_MessageType = 0 | 1 | 2;
var ConversationMessage_MessageType: {
  "UNSPECIFIED": 0;
  "HUMAN": 1;
  "AI": 2;
  0: "UNSPECIFIED";
  1: "HUMAN";
  2: "AI";
};
export type ConversationMessage_ThinkingStyle = 0 | 1 | 2 | 3;
var ConversationMessage_ThinkingStyle: {
  "UNSPECIFIED": 0;
  "DEFAULT": 1;
  "CODEX": 2;
  "GPT5": 3;
  0: "UNSPECIFIED";
  1: "DEFAULT";
  2: "CODEX";
  3: "GPT5";
};
export type ConversationMessage_CodeChunk_Intent = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
var ConversationMessage_CodeChunk_Intent: {
  "UNSPECIFIED": 0;
  "COMPOSER_FILE": 1;
  "COMPRESSED_COMPOSER_FILE": 2;
  "RECENTLY_VIEWED_FILE": 3;
  "OUTLINE": 4;
  "MENTIONED_FILE": 5;
  "CODE_SELECTION": 6;
  "AI_EDITED_FILE": 7;
  "VISIBLE_FILE": 8;
  "TERMINAL_SELECTION": 9;
  0: "UNSPECIFIED";
  1: "COMPOSER_FILE";
  2: "COMPRESSED_COMPOSER_FILE";
  3: "RECENTLY_VIEWED_FILE";
  4: "OUTLINE";
  5: "MENTIONED_FILE";
  6: "CODE_SELECTION";
  7: "AI_EDITED_FILE";
  8: "VISIBLE_FILE";
  9: "TERMINAL_SELECTION";
};
export type ConversationMessage_CodeChunk_SummarizationStrategy = 0 | 1 | 2;
var ConversationMessage_CodeChunk_SummarizationStrategy: {
  "NONE_UNSPECIFIED": 0;
  "SUMMARIZED": 1;
  "EMBEDDED": 2;
  0: "NONE_UNSPECIFIED";
  1: "SUMMARIZED";
  2: "EMBEDDED";
};
export type UserResponseToSuggestedCodeBlock_UserResponseType = 0 | 1 | 2 | 3;
var UserResponseToSuggestedCodeBlock_UserResponseType: {
  "UNSPECIFIED": 0;
  "ACCEPT": 1;
  "REJECT": 2;
  "MODIFY": 3;
  0: "UNSPECIFIED";
  1: "ACCEPT";
  2: "REJECT";
  3: "MODIFY";
};
export type ComposerFileDiff_Editor = 0 | 1 | 2;
var ComposerFileDiff_Editor: {
  "UNSPECIFIED": 0;
  "AI": 1;
  "HUMAN": 2;
  0: "UNSPECIFIED";
  1: "AI";
  2: "HUMAN";
};
export type CodeChunkContextInclusionInfoV2_Intent = 0 | 1 | 2;
var CodeChunkContextInclusionInfoV2_Intent: {
  "UNSPECIFIED": 0;
  "FILE": 1;
  "SELECTION": 2;
  0: "UNSPECIFIED";
  1: "FILE";
  2: "SELECTION";
};
export type CodeChunkContextInclusionInfoV2_InclusionType = 0 | 1 | 2 | 3;
var CodeChunkContextInclusionInfoV2_InclusionType: {
  "UNSPECIFIED": 0;
  "FULL": 1;
  "OUTLINE": 2;
  "FILENAME": 3;
  0: "UNSPECIFIED";
  1: "FULL";
  2: "OUTLINE";
  3: "FILENAME";
};
export type CodeChunkContextInclusionInfo_InclusionType = 0 | 1 | 2 | 3;
var CodeChunkContextInclusionInfo_InclusionType: {
  "UNSPECIFIED": 0;
  "FULL": 1;
  "OUTLINE": 2;
  "FILENAME": 3;
  0: "UNSPECIFIED";
  1: "FULL";
  2: "OUTLINE";
  3: "FILENAME";
};
export type CodeChunkContextInclusionInfo_Intent = 0 | 1 | 2;
var CodeChunkContextInclusionInfo_Intent: {
  "UNSPECIFIED": 0;
  "FILE": 1;
  "SELECTION": 2;
  0: "UNSPECIFIED";
  1: "FILE";
  2: "SELECTION";
};
(function(ChunkType2) {
  ChunkType2[ChunkType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ChunkType2[ChunkType2["CODEBASE"] = 1] = "CODEBASE";
  ChunkType2[ChunkType2["LONG_FILE"] = 2] = "LONG_FILE";
  ChunkType2[ChunkType2["DOCS"] = 3] = "DOCS";
})(ChunkType! || (ChunkType = {} as typeof ChunkType));
proto3.util.setEnumType(ChunkType, "aiserver.v1.ChunkType", [
  { no: 0, name: "CHUNK_TYPE_UNSPECIFIED" },
  { no: 1, name: "CHUNK_TYPE_CODEBASE" },
  { no: 2, name: "CHUNK_TYPE_LONG_FILE" },
  { no: 3, name: "CHUNK_TYPE_DOCS" }
]);
(function(SubagentType3) {
  SubagentType3[SubagentType3["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubagentType3[SubagentType3["DEEP_SEARCH"] = 1] = "DEEP_SEARCH";
  SubagentType3[SubagentType3["FIX_LINTS"] = 2] = "FIX_LINTS";
  SubagentType3[SubagentType3["TASK"] = 3] = "TASK";
  SubagentType3[SubagentType3["SPEC"] = 4] = "SPEC";
})(SubagentType2! || (SubagentType2 = {} as typeof SubagentType2));
proto3.util.setEnumType(SubagentType2, "aiserver.v1.SubagentType", [
  { no: 0, name: "SUBAGENT_TYPE_UNSPECIFIED" },
  { no: 1, name: "SUBAGENT_TYPE_DEEP_SEARCH" },
  { no: 2, name: "SUBAGENT_TYPE_FIX_LINTS" },
  { no: 3, name: "SUBAGENT_TYPE_TASK" },
  { no: 4, name: "SUBAGENT_TYPE_SPEC" }
]);
var StreamReplayChatRequest$Runtime = (() => class _StreamReplayChatRequest extends Message<_StreamReplayChatRequest> {
  declare requestId: string;
  declare tokensPerSecond?: number;
  constructor(data?: PartialMessage<_StreamReplayChatRequest>) {
    super();
    this.requestId = "";
    proto3.util.initPartial(data, this as _StreamReplayChatRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamReplayChatRequest {
    return new _StreamReplayChatRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamReplayChatRequest {
    return new _StreamReplayChatRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamReplayChatRequest {
    return new _StreamReplayChatRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamReplayChatRequest | PlainMessage<_StreamReplayChatRequest> | undefined | null, b2: _StreamReplayChatRequest | PlainMessage<_StreamReplayChatRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamReplayChatRequest as unknown as MessageType<_StreamReplayChatRequest>, a, b2);
  }
})();
export type StreamReplayChatRequest = InstanceType<typeof StreamReplayChatRequest$Runtime>;
var StreamReplayChatRequest: MessageType<StreamReplayChatRequest> = StreamReplayChatRequest$Runtime as unknown as MessageType<StreamReplayChatRequest>;
(StreamReplayChatRequest as MutableMessageType<StreamReplayChatRequest>).runtime = proto3;
(StreamReplayChatRequest as MutableMessageType<StreamReplayChatRequest>).typeName = "aiserver.v1.StreamReplayChatRequest";
(StreamReplayChatRequest as MutableMessageType<StreamReplayChatRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "tokens_per_second", kind: "scalar", T: 1, opt: true }
]);
var StreamUnifiedChatRequestWithTools$Runtime = (() => class _StreamUnifiedChatRequestWithTools extends Message<_StreamUnifiedChatRequestWithTools> {
  declare request: { case: "streamUnifiedChatRequest"; value: StreamUnifiedChatRequest } | { case: "clientSideToolV2Result"; value: ClientSideToolV2Result } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamUnifiedChatRequestWithTools>) {
    super();
    this.request = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequestWithTools);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequestWithTools {
    return new _StreamUnifiedChatRequestWithTools().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequestWithTools {
    return new _StreamUnifiedChatRequestWithTools().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequestWithTools {
    return new _StreamUnifiedChatRequestWithTools().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequestWithTools | PlainMessage<_StreamUnifiedChatRequestWithTools> | undefined | null, b2: _StreamUnifiedChatRequestWithTools | PlainMessage<_StreamUnifiedChatRequestWithTools> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequestWithTools as unknown as MessageType<_StreamUnifiedChatRequestWithTools>, a, b2);
  }
})();
export type StreamUnifiedChatRequestWithTools = InstanceType<typeof StreamUnifiedChatRequestWithTools$Runtime>;
var StreamUnifiedChatRequestWithTools: MessageType<StreamUnifiedChatRequestWithTools> = StreamUnifiedChatRequestWithTools$Runtime as unknown as MessageType<StreamUnifiedChatRequestWithTools>;
(StreamUnifiedChatRequestWithTools as MutableMessageType<StreamUnifiedChatRequestWithTools>).runtime = proto3;
(StreamUnifiedChatRequestWithTools as MutableMessageType<StreamUnifiedChatRequestWithTools>).typeName = "aiserver.v1.StreamUnifiedChatRequestWithTools";
(StreamUnifiedChatRequestWithTools as MutableMessageType<StreamUnifiedChatRequestWithTools>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stream_unified_chat_request", kind: "message", T: StreamUnifiedChatRequest, oneof: "request" },
  { no: 2, name: "client_side_tool_v2_result", kind: "message", T: ClientSideToolV2Result, oneof: "request" }
]);
var UserRules$Runtime = (() => class _UserRules extends Message<_UserRules> {
  declare rules: ConversationMessage_KnowledgeItem[];
  constructor(data?: PartialMessage<_UserRules>) {
    super();
    this.rules = [];
    proto3.util.initPartial(data, this as _UserRules);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserRules {
    return new _UserRules().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserRules {
    return new _UserRules().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserRules {
    return new _UserRules().fromJsonString(jsonString, options);
  }
  static equals(a: _UserRules | PlainMessage<_UserRules> | undefined | null, b2: _UserRules | PlainMessage<_UserRules> | undefined | null): boolean {
    return proto3.util.equals(_UserRules as unknown as MessageType<_UserRules>, a, b2);
  }
})();
export type UserRules = InstanceType<typeof UserRules$Runtime>;
var UserRules: MessageType<UserRules> = UserRules$Runtime as unknown as MessageType<UserRules>;
(UserRules as MutableMessageType<UserRules>).runtime = proto3;
(UserRules as MutableMessageType<UserRules>).typeName = "aiserver.v1.UserRules";
(UserRules as MutableMessageType<UserRules>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rules", kind: "message", T: ConversationMessage_KnowledgeItem, repeated: true }
]);
var StreamStart$Runtime = (() => class _StreamStart extends Message<_StreamStart> {
  declare padding: string;
  constructor(data?: PartialMessage<_StreamStart>) {
    super();
    this.padding = "";
    proto3.util.initPartial(data, this as _StreamStart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamStart {
    return new _StreamStart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamStart {
    return new _StreamStart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamStart {
    return new _StreamStart().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamStart | PlainMessage<_StreamStart> | undefined | null, b2: _StreamStart | PlainMessage<_StreamStart> | undefined | null): boolean {
    return proto3.util.equals(_StreamStart as unknown as MessageType<_StreamStart>, a, b2);
  }
})();
export type StreamStart = InstanceType<typeof StreamStart$Runtime>;
var StreamStart: MessageType<StreamStart> = StreamStart$Runtime as unknown as MessageType<StreamStart>;
(StreamStart as MutableMessageType<StreamStart>).runtime = proto3;
(StreamStart as MutableMessageType<StreamStart>).typeName = "aiserver.v1.StreamStart";
(StreamStart as MutableMessageType<StreamStart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "padding",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SpanContext$Runtime = (() => class _SpanContext extends Message<_SpanContext> {
  declare traceId: string;
  declare spanId: string;
  declare traceFlags?: number;
  declare traceState?: string;
  constructor(data?: PartialMessage<_SpanContext>) {
    super();
    this.traceId = "";
    this.spanId = "";
    proto3.util.initPartial(data, this as _SpanContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpanContext {
    return new _SpanContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpanContext {
    return new _SpanContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpanContext {
    return new _SpanContext().fromJsonString(jsonString, options);
  }
  static equals(a: _SpanContext | PlainMessage<_SpanContext> | undefined | null, b2: _SpanContext | PlainMessage<_SpanContext> | undefined | null): boolean {
    return proto3.util.equals(_SpanContext as unknown as MessageType<_SpanContext>, a, b2);
  }
})();
export type SpanContext = InstanceType<typeof SpanContext$Runtime>;
var SpanContext: MessageType<SpanContext> = SpanContext$Runtime as unknown as MessageType<SpanContext>;
(SpanContext as MutableMessageType<SpanContext>).runtime = proto3;
(SpanContext as MutableMessageType<SpanContext>).typeName = "aiserver.v1.SpanContext";
(SpanContext as MutableMessageType<SpanContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "trace_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "span_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "trace_flags", kind: "scalar", T: 13, opt: true },
  { no: 4, name: "trace_state", kind: "scalar", T: 9, opt: true }
]);
var StreamUnifiedChatResponseWithTools$Runtime = (() => class _StreamUnifiedChatResponseWithTools extends Message<_StreamUnifiedChatResponseWithTools> {
  declare tracingContext?: SpanContext;
  declare eventId: string;
  declare response: { case: "clientSideToolV2Call"; value: ClientSideToolV2Call } | { case: "streamUnifiedChatResponse"; value: StreamUnifiedChatResponse } | { case: "conversationSummary"; value: ConversationSummary2 } | { case: "userRules"; value: UserRules } | { case: "streamStart"; value: StreamStart } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamUnifiedChatResponseWithTools>) {
    super();
    this.response = { case: void 0 };
    this.eventId = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponseWithTools);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponseWithTools {
    return new _StreamUnifiedChatResponseWithTools().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponseWithTools {
    return new _StreamUnifiedChatResponseWithTools().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponseWithTools {
    return new _StreamUnifiedChatResponseWithTools().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponseWithTools | PlainMessage<_StreamUnifiedChatResponseWithTools> | undefined | null, b2: _StreamUnifiedChatResponseWithTools | PlainMessage<_StreamUnifiedChatResponseWithTools> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponseWithTools as unknown as MessageType<_StreamUnifiedChatResponseWithTools>, a, b2);
  }
})();
export type StreamUnifiedChatResponseWithTools = InstanceType<typeof StreamUnifiedChatResponseWithTools$Runtime>;
var StreamUnifiedChatResponseWithTools: MessageType<StreamUnifiedChatResponseWithTools> = StreamUnifiedChatResponseWithTools$Runtime as unknown as MessageType<StreamUnifiedChatResponseWithTools>;
(StreamUnifiedChatResponseWithTools as MutableMessageType<StreamUnifiedChatResponseWithTools>).runtime = proto3;
(StreamUnifiedChatResponseWithTools as MutableMessageType<StreamUnifiedChatResponseWithTools>).typeName = "aiserver.v1.StreamUnifiedChatResponseWithTools";
(StreamUnifiedChatResponseWithTools as MutableMessageType<StreamUnifiedChatResponseWithTools>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "client_side_tool_v2_call", kind: "message", T: ClientSideToolV2Call, oneof: "response" },
  { no: 2, name: "stream_unified_chat_response", kind: "message", T: StreamUnifiedChatResponse, oneof: "response" },
  { no: 3, name: "conversation_summary", kind: "message", T: ConversationSummary2, oneof: "response" },
  { no: 4, name: "user_rules", kind: "message", T: UserRules, oneof: "response" },
  { no: 5, name: "stream_start", kind: "message", T: StreamStart, oneof: "response" },
  { no: 6, name: "tracing_context", kind: "message", T: SpanContext, opt: true },
  {
    no: 7,
    name: "event_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamUnifiedChatRequestWithToolsIdempotent$Runtime = (() => class _StreamUnifiedChatRequestWithToolsIdempotent extends Message<_StreamUnifiedChatRequestWithToolsIdempotent> {
  declare idempotencyKey?: string;
  declare seqno?: number;
  declare request: { case: "clientChunk"; value: StreamUnifiedChatRequestWithTools } | { case: "abort"; value: Empty } | { case: "close"; value: Empty } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamUnifiedChatRequestWithToolsIdempotent>) {
    super();
    this.request = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequestWithToolsIdempotent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequestWithToolsIdempotent {
    return new _StreamUnifiedChatRequestWithToolsIdempotent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequestWithToolsIdempotent {
    return new _StreamUnifiedChatRequestWithToolsIdempotent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequestWithToolsIdempotent {
    return new _StreamUnifiedChatRequestWithToolsIdempotent().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequestWithToolsIdempotent | PlainMessage<_StreamUnifiedChatRequestWithToolsIdempotent> | undefined | null, b2: _StreamUnifiedChatRequestWithToolsIdempotent | PlainMessage<_StreamUnifiedChatRequestWithToolsIdempotent> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequestWithToolsIdempotent as unknown as MessageType<_StreamUnifiedChatRequestWithToolsIdempotent>, a, b2);
  }
})();
export type StreamUnifiedChatRequestWithToolsIdempotent = InstanceType<typeof StreamUnifiedChatRequestWithToolsIdempotent$Runtime>;
var StreamUnifiedChatRequestWithToolsIdempotent: MessageType<StreamUnifiedChatRequestWithToolsIdempotent> = StreamUnifiedChatRequestWithToolsIdempotent$Runtime as unknown as MessageType<StreamUnifiedChatRequestWithToolsIdempotent>;
(StreamUnifiedChatRequestWithToolsIdempotent as MutableMessageType<StreamUnifiedChatRequestWithToolsIdempotent>).runtime = proto3;
(StreamUnifiedChatRequestWithToolsIdempotent as MutableMessageType<StreamUnifiedChatRequestWithToolsIdempotent>).typeName = "aiserver.v1.StreamUnifiedChatRequestWithToolsIdempotent";
(StreamUnifiedChatRequestWithToolsIdempotent as MutableMessageType<StreamUnifiedChatRequestWithToolsIdempotent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "client_chunk", kind: "message", T: StreamUnifiedChatRequestWithTools, oneof: "request" },
  { no: 2, name: "abort", kind: "message", T: Empty, oneof: "request" },
  { no: 3, name: "close", kind: "message", T: Empty, oneof: "request" },
  { no: 4, name: "idempotency_key", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "seqno", kind: "scalar", T: 13, opt: true }
]);
var WelcomeMessage$Runtime = (() => class _WelcomeMessage extends Message<_WelcomeMessage> {
  declare message: string;
  declare isDegradedMode: boolean;
  constructor(data?: PartialMessage<_WelcomeMessage>) {
    super();
    this.message = "";
    this.isDegradedMode = false;
    proto3.util.initPartial(data, this as _WelcomeMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WelcomeMessage {
    return new _WelcomeMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WelcomeMessage {
    return new _WelcomeMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WelcomeMessage {
    return new _WelcomeMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _WelcomeMessage | PlainMessage<_WelcomeMessage> | undefined | null, b2: _WelcomeMessage | PlainMessage<_WelcomeMessage> | undefined | null): boolean {
    return proto3.util.equals(_WelcomeMessage as unknown as MessageType<_WelcomeMessage>, a, b2);
  }
})();
export type WelcomeMessage = InstanceType<typeof WelcomeMessage$Runtime>;
var WelcomeMessage: MessageType<WelcomeMessage> = WelcomeMessage$Runtime as unknown as MessageType<WelcomeMessage>;
(WelcomeMessage as MutableMessageType<WelcomeMessage>).runtime = proto3;
(WelcomeMessage as MutableMessageType<WelcomeMessage>).typeName = "aiserver.v1.WelcomeMessage";
(WelcomeMessage as MutableMessageType<WelcomeMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_degraded_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var StreamUnifiedChatResponseWithToolsIdempotent$Runtime = (() => class _StreamUnifiedChatResponseWithToolsIdempotent extends Message<_StreamUnifiedChatResponseWithToolsIdempotent> {
  declare response: { case: "serverChunk"; value: StreamUnifiedChatResponseWithTools } | { case: "welcomeMessage"; value: WelcomeMessage } | { case: "seqnoAck"; value: number } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamUnifiedChatResponseWithToolsIdempotent>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponseWithToolsIdempotent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponseWithToolsIdempotent {
    return new _StreamUnifiedChatResponseWithToolsIdempotent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponseWithToolsIdempotent {
    return new _StreamUnifiedChatResponseWithToolsIdempotent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponseWithToolsIdempotent {
    return new _StreamUnifiedChatResponseWithToolsIdempotent().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponseWithToolsIdempotent | PlainMessage<_StreamUnifiedChatResponseWithToolsIdempotent> | undefined | null, b2: _StreamUnifiedChatResponseWithToolsIdempotent | PlainMessage<_StreamUnifiedChatResponseWithToolsIdempotent> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponseWithToolsIdempotent as unknown as MessageType<_StreamUnifiedChatResponseWithToolsIdempotent>, a, b2);
  }
})();
export type StreamUnifiedChatResponseWithToolsIdempotent = InstanceType<typeof StreamUnifiedChatResponseWithToolsIdempotent$Runtime>;
var StreamUnifiedChatResponseWithToolsIdempotent: MessageType<StreamUnifiedChatResponseWithToolsIdempotent> = StreamUnifiedChatResponseWithToolsIdempotent$Runtime as unknown as MessageType<StreamUnifiedChatResponseWithToolsIdempotent>;
(StreamUnifiedChatResponseWithToolsIdempotent as MutableMessageType<StreamUnifiedChatResponseWithToolsIdempotent>).runtime = proto3;
(StreamUnifiedChatResponseWithToolsIdempotent as MutableMessageType<StreamUnifiedChatResponseWithToolsIdempotent>).typeName = "aiserver.v1.StreamUnifiedChatResponseWithToolsIdempotent";
(StreamUnifiedChatResponseWithToolsIdempotent as MutableMessageType<StreamUnifiedChatResponseWithToolsIdempotent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server_chunk", kind: "message", T: StreamUnifiedChatResponseWithTools, oneof: "response" },
  { no: 3, name: "welcome_message", kind: "message", T: WelcomeMessage, oneof: "response" },
  { no: 4, name: "seqno_ack", kind: "scalar", T: 13, oneof: "response" }
]);
var ConversationSummaryStrategy$Runtime = (() => class _ConversationSummaryStrategy extends Message<_ConversationSummaryStrategy> {
  declare strategy: { case: "plainTextSummary"; value: string } | { case: "arbitrarySummaryPlusToolResultTruncation"; value: ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationSummaryStrategy>) {
    super();
    this.strategy = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationSummaryStrategy);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummaryStrategy {
    return new _ConversationSummaryStrategy().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummaryStrategy {
    return new _ConversationSummaryStrategy().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummaryStrategy {
    return new _ConversationSummaryStrategy().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummaryStrategy | PlainMessage<_ConversationSummaryStrategy> | undefined | null, b2: _ConversationSummaryStrategy | PlainMessage<_ConversationSummaryStrategy> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummaryStrategy as unknown as MessageType<_ConversationSummaryStrategy>, a, b2);
  }
})();
export type ConversationSummaryStrategy = InstanceType<typeof ConversationSummaryStrategy$Runtime>;
var ConversationSummaryStrategy: MessageType<ConversationSummaryStrategy> = ConversationSummaryStrategy$Runtime as unknown as MessageType<ConversationSummaryStrategy>;
(ConversationSummaryStrategy as MutableMessageType<ConversationSummaryStrategy>).runtime = proto3;
(ConversationSummaryStrategy as MutableMessageType<ConversationSummaryStrategy>).typeName = "aiserver.v1.ConversationSummaryStrategy";
(ConversationSummaryStrategy as MutableMessageType<ConversationSummaryStrategy>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "plain_text_summary", kind: "scalar", T: 9, oneof: "strategy" },
  { no: 2, name: "arbitrary_summary_plus_tool_result_truncation", kind: "message", T: ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation, oneof: "strategy" }
]);
var ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation$Runtime = (() => class _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation extends Message<_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation> {
  declare arbitrarySummary?: ConversationSummary2;
  declare toolResultTruncationLength: number;
  constructor(data?: PartialMessage<_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>) {
    super();
    this.toolResultTruncationLength = 0;
    proto3.util.initPartial(data, this as _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation {
    return new _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation {
    return new _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation {
    return new _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation | PlainMessage<_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation> | undefined | null, b2: _ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation | PlainMessage<_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation as unknown as MessageType<_ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>, a, b2);
  }
})();
export type ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation = InstanceType<typeof ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation$Runtime>;
var ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation: MessageType<ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation> = ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation$Runtime as unknown as MessageType<ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>;
(ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation as MutableMessageType<ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>).runtime = proto3;
(ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation as MutableMessageType<ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>).typeName = "aiserver.v1.ConversationSummaryStrategy.ArbitrarySummaryPlusToolResultTruncation";
(ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation as MutableMessageType<ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "arbitrary_summary", kind: "message", T: ConversationSummary2 },
  {
    no: 2,
    name: "tool_result_truncation_length",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ConversationSummary2$Runtime = (() => class _ConversationSummary extends Message<_ConversationSummary> {
  declare summary: string;
  declare truncationLastBubbleIdInclusive: string;
  declare clientShouldStartSendingFromInclusiveBubbleId: string;
  declare previousConversationSummaryBubbleId: string;
  declare includesToolResults: boolean;
  declare strategy: string;
  constructor(data?: PartialMessage<_ConversationSummary>) {
    super();
    this.summary = "";
    this.truncationLastBubbleIdInclusive = "";
    this.clientShouldStartSendingFromInclusiveBubbleId = "";
    this.previousConversationSummaryBubbleId = "";
    this.includesToolResults = false;
    this.strategy = "";
    proto3.util.initPartial(data, this as _ConversationSummary);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummary | PlainMessage<_ConversationSummary> | undefined | null, b2: _ConversationSummary | PlainMessage<_ConversationSummary> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummary as unknown as MessageType<_ConversationSummary>, a, b2);
  }
})();
export type ConversationSummary2 = InstanceType<typeof ConversationSummary2$Runtime>;
var ConversationSummary2: MessageType<ConversationSummary2> = ConversationSummary2$Runtime as unknown as MessageType<ConversationSummary2>;
(ConversationSummary2 as MutableMessageType<ConversationSummary2>).runtime = proto3;
(ConversationSummary2 as MutableMessageType<ConversationSummary2>).typeName = "aiserver.v1.ConversationSummary";
(ConversationSummary2 as MutableMessageType<ConversationSummary2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "truncation_last_bubble_id_inclusive",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "client_should_start_sending_from_inclusive_bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "previous_conversation_summary_bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "includes_tool_results",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "strategy",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextToRank$Runtime = (() => class _ContextToRank extends Message<_ContextToRank> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare lineRange?: LineRange;
  declare codeBlock?: CodeBlock;
  constructor(data?: PartialMessage<_ContextToRank>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    proto3.util.initPartial(data, this as _ContextToRank);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextToRank {
    return new _ContextToRank().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextToRank {
    return new _ContextToRank().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextToRank {
    return new _ContextToRank().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextToRank | PlainMessage<_ContextToRank> | undefined | null, b2: _ContextToRank | PlainMessage<_ContextToRank> | undefined | null): boolean {
    return proto3.util.equals(_ContextToRank as unknown as MessageType<_ContextToRank>, a, b2);
  }
})();
export type ContextToRank = InstanceType<typeof ContextToRank$Runtime>;
var ContextToRank: MessageType<ContextToRank> = ContextToRank$Runtime as unknown as MessageType<ContextToRank>;
(ContextToRank as MutableMessageType<ContextToRank>).runtime = proto3;
(ContextToRank as MutableMessageType<ContextToRank>).typeName = "aiserver.v1.ContextToRank";
(ContextToRank as MutableMessageType<ContextToRank>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "line_range", kind: "message", T: LineRange, opt: true },
  { no: 4, name: "code_block", kind: "message", T: CodeBlock, opt: true }
]);
var RankedContext$Runtime = (() => class _RankedContext extends Message<_RankedContext> {
  declare context?: ContextToRank;
  declare score: number;
  constructor(data?: PartialMessage<_RankedContext>) {
    super();
    this.score = 0;
    proto3.util.initPartial(data, this as _RankedContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RankedContext {
    return new _RankedContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RankedContext {
    return new _RankedContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RankedContext {
    return new _RankedContext().fromJsonString(jsonString, options);
  }
  static equals(a: _RankedContext | PlainMessage<_RankedContext> | undefined | null, b2: _RankedContext | PlainMessage<_RankedContext> | undefined | null): boolean {
    return proto3.util.equals(_RankedContext as unknown as MessageType<_RankedContext>, a, b2);
  }
})();
export type RankedContext = InstanceType<typeof RankedContext$Runtime>;
var RankedContext: MessageType<RankedContext> = RankedContext$Runtime as unknown as MessageType<RankedContext>;
(RankedContext as MutableMessageType<RankedContext>).runtime = proto3;
(RankedContext as MutableMessageType<RankedContext>).typeName = "aiserver.v1.RankedContext";
(RankedContext as MutableMessageType<RankedContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context", kind: "message", T: ContextToRank },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var DocumentationCitation$Runtime = (() => class _DocumentationCitation extends Message<_DocumentationCitation> {
  declare chunks: DocumentationChunk[];
  constructor(data?: PartialMessage<_DocumentationCitation>) {
    super();
    this.chunks = [];
    proto3.util.initPartial(data, this as _DocumentationCitation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentationCitation {
    return new _DocumentationCitation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentationCitation {
    return new _DocumentationCitation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentationCitation {
    return new _DocumentationCitation().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentationCitation | PlainMessage<_DocumentationCitation> | undefined | null, b2: _DocumentationCitation | PlainMessage<_DocumentationCitation> | undefined | null): boolean {
    return proto3.util.equals(_DocumentationCitation as unknown as MessageType<_DocumentationCitation>, a, b2);
  }
})();
export type DocumentationCitation = InstanceType<typeof DocumentationCitation$Runtime>;
var DocumentationCitation: MessageType<DocumentationCitation> = DocumentationCitation$Runtime as unknown as MessageType<DocumentationCitation>;
(DocumentationCitation as MutableMessageType<DocumentationCitation>).runtime = proto3;
(DocumentationCitation as MutableMessageType<DocumentationCitation>).typeName = "aiserver.v1.DocumentationCitation";
(DocumentationCitation as MutableMessageType<DocumentationCitation>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chunks", kind: "message", T: DocumentationChunk, repeated: true }
]);
var WebCitation$Runtime = (() => class _WebCitation extends Message<_WebCitation> {
  declare references: WebReference[];
  constructor(data?: PartialMessage<_WebCitation>) {
    super();
    this.references = [];
    proto3.util.initPartial(data, this as _WebCitation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebCitation {
    return new _WebCitation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebCitation {
    return new _WebCitation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebCitation {
    return new _WebCitation().fromJsonString(jsonString, options);
  }
  static equals(a: _WebCitation | PlainMessage<_WebCitation> | undefined | null, b2: _WebCitation | PlainMessage<_WebCitation> | undefined | null): boolean {
    return proto3.util.equals(_WebCitation as unknown as MessageType<_WebCitation>, a, b2);
  }
})();
export type WebCitation = InstanceType<typeof WebCitation$Runtime>;
var WebCitation: MessageType<WebCitation> = WebCitation$Runtime as unknown as MessageType<WebCitation>;
(WebCitation as MutableMessageType<WebCitation>).runtime = proto3;
(WebCitation as MutableMessageType<WebCitation>).typeName = "aiserver.v1.WebCitation";
(WebCitation as MutableMessageType<WebCitation>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "references", kind: "message", T: WebReference, repeated: true }
]);
var WebReference$Runtime = (() => class _WebReference extends Message<_WebReference> {
  declare title: string;
  declare url: string;
  declare chunk: string;
  constructor(data?: PartialMessage<_WebReference>) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    proto3.util.initPartial(data, this as _WebReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebReference {
    return new _WebReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebReference {
    return new _WebReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebReference {
    return new _WebReference().fromJsonString(jsonString, options);
  }
  static equals(a: _WebReference | PlainMessage<_WebReference> | undefined | null, b2: _WebReference | PlainMessage<_WebReference> | undefined | null): boolean {
    return proto3.util.equals(_WebReference as unknown as MessageType<_WebReference>, a, b2);
  }
})();
export type WebReference = InstanceType<typeof WebReference$Runtime>;
var WebReference: MessageType<WebReference> = WebReference$Runtime as unknown as MessageType<WebReference>;
(WebReference as MutableMessageType<WebReference>).runtime = proto3;
(WebReference as MutableMessageType<WebReference>).typeName = "aiserver.v1.WebReference";
(WebReference as MutableMessageType<WebReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DocsReference$Runtime = (() => class _DocsReference extends Message<_DocsReference> {
  declare title: string;
  declare url: string;
  declare chunk: string;
  declare name: string;
  constructor(data?: PartialMessage<_DocsReference>) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    this.name = "";
    proto3.util.initPartial(data, this as _DocsReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocsReference {
    return new _DocsReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocsReference {
    return new _DocsReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocsReference {
    return new _DocsReference().fromJsonString(jsonString, options);
  }
  static equals(a: _DocsReference | PlainMessage<_DocsReference> | undefined | null, b2: _DocsReference | PlainMessage<_DocsReference> | undefined | null): boolean {
    return proto3.util.equals(_DocsReference as unknown as MessageType<_DocsReference>, a, b2);
  }
})();
export type DocsReference = InstanceType<typeof DocsReference$Runtime>;
var DocsReference: MessageType<DocsReference> = DocsReference$Runtime as unknown as MessageType<DocsReference>;
(DocsReference as MutableMessageType<DocsReference>).runtime = proto3;
(DocsReference as MutableMessageType<DocsReference>).typeName = "aiserver.v1.DocsReference";
(DocsReference as MutableMessageType<DocsReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiWebSearchResult$Runtime = (() => class _AiWebSearchResult extends Message<_AiWebSearchResult> {
  declare content: string;
  declare title: string;
  constructor(data?: PartialMessage<_AiWebSearchResult>) {
    super();
    this.content = "";
    this.title = "";
    proto3.util.initPartial(data, this as _AiWebSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiWebSearchResult {
    return new _AiWebSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiWebSearchResult {
    return new _AiWebSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiWebSearchResult {
    return new _AiWebSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AiWebSearchResult | PlainMessage<_AiWebSearchResult> | undefined | null, b2: _AiWebSearchResult | PlainMessage<_AiWebSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_AiWebSearchResult as unknown as MessageType<_AiWebSearchResult>, a, b2);
  }
})();
export type AiWebSearchResult = InstanceType<typeof AiWebSearchResult$Runtime>;
var AiWebSearchResult: MessageType<AiWebSearchResult> = AiWebSearchResult$Runtime as unknown as MessageType<AiWebSearchResult>;
(AiWebSearchResult as MutableMessageType<AiWebSearchResult>).runtime = proto3;
(AiWebSearchResult as MutableMessageType<AiWebSearchResult>).typeName = "aiserver.v1.AiWebSearchResult";
(AiWebSearchResult as MutableMessageType<AiWebSearchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiWebSearchResults$Runtime = (() => class _AiWebSearchResults extends Message<_AiWebSearchResults> {
  declare results: AiWebSearchResult[];
  constructor(data?: PartialMessage<_AiWebSearchResults>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _AiWebSearchResults);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiWebSearchResults {
    return new _AiWebSearchResults().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiWebSearchResults {
    return new _AiWebSearchResults().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiWebSearchResults {
    return new _AiWebSearchResults().fromJsonString(jsonString, options);
  }
  static equals(a: _AiWebSearchResults | PlainMessage<_AiWebSearchResults> | undefined | null, b2: _AiWebSearchResults | PlainMessage<_AiWebSearchResults> | undefined | null): boolean {
    return proto3.util.equals(_AiWebSearchResults as unknown as MessageType<_AiWebSearchResults>, a, b2);
  }
})();
export type AiWebSearchResults = InstanceType<typeof AiWebSearchResults$Runtime>;
var AiWebSearchResults: MessageType<AiWebSearchResults> = AiWebSearchResults$Runtime as unknown as MessageType<AiWebSearchResults>;
(AiWebSearchResults as MutableMessageType<AiWebSearchResults>).runtime = proto3;
(AiWebSearchResults as MutableMessageType<AiWebSearchResults>).typeName = "aiserver.v1.AiWebSearchResults";
(AiWebSearchResults as MutableMessageType<AiWebSearchResults>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: AiWebSearchResult, repeated: true }
]);
var StatusUpdate$Runtime = (() => class _StatusUpdate extends Message<_StatusUpdate> {
  declare message: string;
  declare metadata?: string;
  constructor(data?: PartialMessage<_StatusUpdate>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _StatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StatusUpdate {
    return new _StatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StatusUpdate {
    return new _StatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StatusUpdate {
    return new _StatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _StatusUpdate | PlainMessage<_StatusUpdate> | undefined | null, b2: _StatusUpdate | PlainMessage<_StatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_StatusUpdate as unknown as MessageType<_StatusUpdate>, a, b2);
  }
})();
export type StatusUpdate = InstanceType<typeof StatusUpdate$Runtime>;
var StatusUpdate: MessageType<StatusUpdate> = StatusUpdate$Runtime as unknown as MessageType<StatusUpdate>;
(StatusUpdate as MutableMessageType<StatusUpdate>).runtime = proto3;
(StatusUpdate as MutableMessageType<StatusUpdate>).typeName = "aiserver.v1.StatusUpdate";
(StatusUpdate as MutableMessageType<StatusUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "metadata", kind: "scalar", T: 9, opt: true }
]);
var StatusUpdates$Runtime = (() => class _StatusUpdates extends Message<_StatusUpdates> {
  declare updates: StatusUpdate[];
  constructor(data?: PartialMessage<_StatusUpdates>) {
    super();
    this.updates = [];
    proto3.util.initPartial(data, this as _StatusUpdates);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StatusUpdates {
    return new _StatusUpdates().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StatusUpdates {
    return new _StatusUpdates().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StatusUpdates {
    return new _StatusUpdates().fromJsonString(jsonString, options);
  }
  static equals(a: _StatusUpdates | PlainMessage<_StatusUpdates> | undefined | null, b2: _StatusUpdates | PlainMessage<_StatusUpdates> | undefined | null): boolean {
    return proto3.util.equals(_StatusUpdates as unknown as MessageType<_StatusUpdates>, a, b2);
  }
})();
export type StatusUpdates = InstanceType<typeof StatusUpdates$Runtime>;
var StatusUpdates: MessageType<StatusUpdates> = StatusUpdates$Runtime as unknown as MessageType<StatusUpdates>;
(StatusUpdates as MutableMessageType<StatusUpdates>).runtime = proto3;
(StatusUpdates as MutableMessageType<StatusUpdates>).typeName = "aiserver.v1.StatusUpdates";
(StatusUpdates as MutableMessageType<StatusUpdates>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "updates", kind: "message", T: StatusUpdate, repeated: true }
]);
var RerankDocumentsRequest$Runtime = (() => class _RerankDocumentsRequest extends Message<_RerankDocumentsRequest> {
  declare query: string;
  declare documents: Document[];
  constructor(data?: PartialMessage<_RerankDocumentsRequest>) {
    super();
    this.query = "";
    this.documents = [];
    proto3.util.initPartial(data, this as _RerankDocumentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankDocumentsRequest {
    return new _RerankDocumentsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankDocumentsRequest {
    return new _RerankDocumentsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankDocumentsRequest {
    return new _RerankDocumentsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankDocumentsRequest | PlainMessage<_RerankDocumentsRequest> | undefined | null, b2: _RerankDocumentsRequest | PlainMessage<_RerankDocumentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_RerankDocumentsRequest as unknown as MessageType<_RerankDocumentsRequest>, a, b2);
  }
})();
export type RerankDocumentsRequest = InstanceType<typeof RerankDocumentsRequest$Runtime>;
var RerankDocumentsRequest: MessageType<RerankDocumentsRequest> = RerankDocumentsRequest$Runtime as unknown as MessageType<RerankDocumentsRequest>;
(RerankDocumentsRequest as MutableMessageType<RerankDocumentsRequest>).runtime = proto3;
(RerankDocumentsRequest as MutableMessageType<RerankDocumentsRequest>).typeName = "aiserver.v1.RerankDocumentsRequest";
(RerankDocumentsRequest as MutableMessageType<RerankDocumentsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "documents", kind: "message", T: Document, repeated: true }
]);
var RerankDocumentsResponse$Runtime = (() => class _RerankDocumentsResponse extends Message<_RerankDocumentsResponse> {
  declare documents: DocumentIdsWithScores[];
  constructor(data?: PartialMessage<_RerankDocumentsResponse>) {
    super();
    this.documents = [];
    proto3.util.initPartial(data, this as _RerankDocumentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankDocumentsResponse {
    return new _RerankDocumentsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankDocumentsResponse {
    return new _RerankDocumentsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankDocumentsResponse {
    return new _RerankDocumentsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankDocumentsResponse | PlainMessage<_RerankDocumentsResponse> | undefined | null, b2: _RerankDocumentsResponse | PlainMessage<_RerankDocumentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_RerankDocumentsResponse as unknown as MessageType<_RerankDocumentsResponse>, a, b2);
  }
})();
export type RerankDocumentsResponse = InstanceType<typeof RerankDocumentsResponse$Runtime>;
var RerankDocumentsResponse: MessageType<RerankDocumentsResponse> = RerankDocumentsResponse$Runtime as unknown as MessageType<RerankDocumentsResponse>;
(RerankDocumentsResponse as MutableMessageType<RerankDocumentsResponse>).runtime = proto3;
(RerankDocumentsResponse as MutableMessageType<RerankDocumentsResponse>).typeName = "aiserver.v1.RerankDocumentsResponse";
(RerankDocumentsResponse as MutableMessageType<RerankDocumentsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "documents", kind: "message", T: DocumentIdsWithScores, repeated: true }
]);
var Document$Runtime = (() => class _Document extends Message<_Document> {
  declare content: string;
  declare id: string;
  constructor(data?: PartialMessage<_Document>) {
    super();
    this.content = "";
    this.id = "";
    proto3.util.initPartial(data, this as _Document);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Document {
    return new _Document().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Document {
    return new _Document().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Document {
    return new _Document().fromJsonString(jsonString, options);
  }
  static equals(a: _Document | PlainMessage<_Document> | undefined | null, b2: _Document | PlainMessage<_Document> | undefined | null): boolean {
    return proto3.util.equals(_Document as unknown as MessageType<_Document>, a, b2);
  }
})();
export type Document = InstanceType<typeof Document$Runtime>;
var Document: MessageType<Document> = Document$Runtime as unknown as MessageType<Document>;
(Document as MutableMessageType<Document>).runtime = proto3;
(Document as MutableMessageType<Document>).typeName = "aiserver.v1.Document";
(Document as MutableMessageType<Document>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DocumentIdsWithScores$Runtime = (() => class _DocumentIdsWithScores extends Message<_DocumentIdsWithScores> {
  declare documentId: string;
  declare score: number;
  constructor(data?: PartialMessage<_DocumentIdsWithScores>) {
    super();
    this.documentId = "";
    this.score = 0;
    proto3.util.initPartial(data, this as _DocumentIdsWithScores);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentIdsWithScores {
    return new _DocumentIdsWithScores().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentIdsWithScores {
    return new _DocumentIdsWithScores().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentIdsWithScores {
    return new _DocumentIdsWithScores().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentIdsWithScores | PlainMessage<_DocumentIdsWithScores> | undefined | null, b2: _DocumentIdsWithScores | PlainMessage<_DocumentIdsWithScores> | undefined | null): boolean {
    return proto3.util.equals(_DocumentIdsWithScores as unknown as MessageType<_DocumentIdsWithScores>, a, b2);
  }
})();
export type DocumentIdsWithScores = InstanceType<typeof DocumentIdsWithScores$Runtime>;
var DocumentIdsWithScores: MessageType<DocumentIdsWithScores> = DocumentIdsWithScores$Runtime as unknown as MessageType<DocumentIdsWithScores>;
(DocumentIdsWithScores as MutableMessageType<DocumentIdsWithScores>).runtime = proto3;
(DocumentIdsWithScores as MutableMessageType<DocumentIdsWithScores>).typeName = "aiserver.v1.DocumentIdsWithScores";
(DocumentIdsWithScores as MutableMessageType<DocumentIdsWithScores>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "document_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var ComposerFileDiffHistory$Runtime = (() => class _ComposerFileDiffHistory extends Message<_ComposerFileDiffHistory> {
  declare fileName: string;
  declare diffHistory: string[];
  declare diffHistoryTimestamps: number[];
  constructor(data?: PartialMessage<_ComposerFileDiffHistory>) {
    super();
    this.fileName = "";
    this.diffHistory = [];
    this.diffHistoryTimestamps = [];
    proto3.util.initPartial(data, this as _ComposerFileDiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerFileDiffHistory {
    return new _ComposerFileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerFileDiffHistory {
    return new _ComposerFileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerFileDiffHistory {
    return new _ComposerFileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerFileDiffHistory | PlainMessage<_ComposerFileDiffHistory> | undefined | null, b2: _ComposerFileDiffHistory | PlainMessage<_ComposerFileDiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_ComposerFileDiffHistory as unknown as MessageType<_ComposerFileDiffHistory>, a, b2);
  }
})();
export type ComposerFileDiffHistory = InstanceType<typeof ComposerFileDiffHistory$Runtime>;
var ComposerFileDiffHistory: MessageType<ComposerFileDiffHistory> = ComposerFileDiffHistory$Runtime as unknown as MessageType<ComposerFileDiffHistory>;
(ComposerFileDiffHistory as MutableMessageType<ComposerFileDiffHistory>).runtime = proto3;
(ComposerFileDiffHistory as MutableMessageType<ComposerFileDiffHistory>).typeName = "aiserver.v1.ComposerFileDiffHistory";
(ComposerFileDiffHistory as MutableMessageType<ComposerFileDiffHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "diff_history_timestamps", kind: "scalar", T: 1, repeated: true }
]);
var WorkspaceFolder$Runtime = (() => class _WorkspaceFolder extends Message<_WorkspaceFolder> {
  declare uri: string;
  declare name: string;
  constructor(data?: PartialMessage<_WorkspaceFolder>) {
    super();
    this.uri = "";
    this.name = "";
    proto3.util.initPartial(data, this as _WorkspaceFolder);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WorkspaceFolder {
    return new _WorkspaceFolder().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WorkspaceFolder {
    return new _WorkspaceFolder().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WorkspaceFolder {
    return new _WorkspaceFolder().fromJsonString(jsonString, options);
  }
  static equals(a: _WorkspaceFolder | PlainMessage<_WorkspaceFolder> | undefined | null, b2: _WorkspaceFolder | PlainMessage<_WorkspaceFolder> | undefined | null): boolean {
    return proto3.util.equals(_WorkspaceFolder as unknown as MessageType<_WorkspaceFolder>, a, b2);
  }
})();
export type WorkspaceFolder = InstanceType<typeof WorkspaceFolder$Runtime>;
var WorkspaceFolder: MessageType<WorkspaceFolder> = WorkspaceFolder$Runtime as unknown as MessageType<WorkspaceFolder>;
(WorkspaceFolder as MutableMessageType<WorkspaceFolder>).runtime = proto3;
(WorkspaceFolder as MutableMessageType<WorkspaceFolder>).typeName = "aiserver.v1.WorkspaceFolder";
(WorkspaceFolder as MutableMessageType<WorkspaceFolder>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamUnifiedChatRequest$Runtime = (() => class _StreamUnifiedChatRequest extends Message<_StreamUnifiedChatRequest> {
  declare conversation: ConversationMessage[];
  declare fullConversationHeadersOnly: ConversationMessageHeader[];
  declare allowLongFileScan?: boolean;
  declare explicitContext?: ExplicitContext;
  declare canHandleFilenamesAfterLanguageIds?: boolean;
  declare modelDetails?: ModelDetails;
  declare linterErrors?: LinterErrors;
  declare documentationIdentifiers: string[];
  declare useWeb?: string;
  declare externalLinks: ComposerExternalLink[];
  declare projectContext?: ConversationMessage;
  declare diffsForCompressingFiles: StreamUnifiedChatRequest_RedDiff[];
  declare compressEdits?: boolean;
  declare shouldCache?: boolean;
  declare multiFileLinterErrors: LinterErrors[];
  declare currentFile?: CurrentFileInfo;
  declare recentEdits?: StreamUnifiedChatRequest_RecentEdits;
  declare useReferenceComposerDiffPrompt?: boolean;
  declare fileDiffHistories: ComposerFileDiffHistory[];
  declare useNewCompressionScheme?: boolean;
  declare quotes: ChatQuote[];
  declare additionalRankedContext: RankedContext[];
  declare isChat: boolean;
  declare conversationId: string;
  declare replyingToRequestId: string;
  declare repositoryInfo?: RepositoryInfo;
  declare repositoryInfoShouldQueryStaging: boolean;
  declare repositoryInfoShouldQueryProd: boolean;
  declare queryOnlyRepoAccess?: QueryOnlyRepoAccess;
  declare repoQueryAuthToken: string;
  declare environmentInfo?: EnvironmentInfo;
  declare isAgentic: boolean;
  declare conversationSummary?: ConversationSummary2;
  declare supportedTools: ClientSideToolV2[];
  declare enableYoloMode: boolean;
  declare yoloPrompt: string;
  declare useUnifiedChatPrompt: boolean;
  declare mcpTools: MCPParams_Tool[];
  declare useFullInputsContext?: boolean;
  declare isResume?: boolean;
  declare allowModelFallbacks?: boolean;
  declare numberOfTimesShownFallbackModelWarning?: number;
  declare contextBankSessionId?: string;
  declare contextBankVersion?: number;
  declare contextBankEncryptionKey?: Uint8Array;
  declare isHeadless: boolean;
  declare isBackgroundComposer: boolean;
  declare usesCodebaseResults?: StreamUnifiedChatRequest_CodeSearchResult;
  declare unifiedMode?: StreamUnifiedChatRequest_UnifiedMode;
  declare toolsRequiringAcceptedReturn: ClientSideToolV2[];
  declare shouldDisableTools?: boolean;
  declare thinkingLevel?: StreamUnifiedChatRequest_ThinkingLevel;
  declare shouldUseChatPrompt?: boolean;
  declare backgroundComposerId?: string;
  declare usesRules?: boolean;
  declare modeUsesAutoApply?: boolean;
  declare unifiedModeName?: string;
  declare useGenerateRulesPrompt?: boolean;
  declare editToolSupportsSearchAndReplace?: boolean;
  declare projectLayouts: ProjectLayout[];
  declare repositoryNameIfUnindexed?: string;
  declare indexingProgress?: number;
  declare fullFileCmdKOptions?: StreamUnifiedChatRequest_FullFileCmdKOptions;
  declare indexingPhaseIfUnindexed?: string;
  declare useKnowledgeBasePrompt?: boolean;
  declare indexingNumFilesIfUnindexed?: number;
  declare subagentInfo?: SubagentInfo;
  declare supportsGitIndex: boolean;
  declare forceIsNotDev: boolean;
  declare disableEditFileTimeout?: boolean;
  declare shouldAttachLinterErrors?: boolean;
  declare shouldSpeculativelyRouteGpt5?: boolean;
  declare forceTerminalHangingDetection?: boolean;
  declare forceSummarization?: boolean;
  declare isQuickSearchQuery?: boolean;
  declare isSpecMode?: boolean;
  declare allowServerSideSemanticSearch: boolean;
  declare speculativeSummarizationEncryptionKey?: Uint8Array;
  declare workspaceFolders: WorkspaceFolder[];
  declare doesReadfileSupportImages?: boolean;
  declare sandboxingSupportEnabled?: boolean;
  declare customPlanningInstructions?: string;
  declare enableTerminalFilePersistence?: boolean;
  declare terminalsFolder?: string;
  declare agentTranscriptsFolder?: string;
  declare agentNotesFolder?: string;
  declare agentToolsFolder?: string;
  declare currentPlan?: StreamUnifiedChatRequest_CurrentPlan;
  declare hasMcpDescriptors?: boolean;
  declare bestOfNGroupId?: string;
  declare tryUseBestOfNPromotion?: boolean;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest>) {
    super();
    this.conversation = [];
    this.fullConversationHeadersOnly = [];
    this.documentationIdentifiers = [];
    this.externalLinks = [];
    this.diffsForCompressingFiles = [];
    this.multiFileLinterErrors = [];
    this.fileDiffHistories = [];
    this.quotes = [];
    this.additionalRankedContext = [];
    this.isChat = false;
    this.conversationId = "";
    this.replyingToRequestId = "";
    this.repositoryInfoShouldQueryStaging = false;
    this.repositoryInfoShouldQueryProd = false;
    this.repoQueryAuthToken = "";
    this.isAgentic = false;
    this.supportedTools = [];
    this.enableYoloMode = false;
    this.yoloPrompt = "";
    this.useUnifiedChatPrompt = false;
    this.mcpTools = [];
    this.isHeadless = false;
    this.isBackgroundComposer = false;
    this.toolsRequiringAcceptedReturn = [];
    this.projectLayouts = [];
    this.supportsGitIndex = false;
    this.forceIsNotDev = false;
    this.allowServerSideSemanticSearch = false;
    this.workspaceFolders = [];
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest {
    return new _StreamUnifiedChatRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest {
    return new _StreamUnifiedChatRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest {
    return new _StreamUnifiedChatRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest | PlainMessage<_StreamUnifiedChatRequest> | undefined | null, b2: _StreamUnifiedChatRequest | PlainMessage<_StreamUnifiedChatRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest as unknown as MessageType<_StreamUnifiedChatRequest>, a, b2);
  }
})();
export type StreamUnifiedChatRequest = InstanceType<typeof StreamUnifiedChatRequest$Runtime>;
var StreamUnifiedChatRequest: MessageType<StreamUnifiedChatRequest> = StreamUnifiedChatRequest$Runtime as unknown as MessageType<StreamUnifiedChatRequest>;
(StreamUnifiedChatRequest as MutableMessageType<StreamUnifiedChatRequest>).runtime = proto3;
(StreamUnifiedChatRequest as MutableMessageType<StreamUnifiedChatRequest>).typeName = "aiserver.v1.StreamUnifiedChatRequest";
(StreamUnifiedChatRequest as MutableMessageType<StreamUnifiedChatRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "conversation", kind: "message", T: ConversationMessage, repeated: true },
  { no: 30, name: "full_conversation_headers_only", kind: "message", T: ConversationMessageHeader, repeated: true },
  { no: 2, name: "allow_long_file_scan", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "explicit_context", kind: "message", T: ExplicitContext },
  { no: 4, name: "can_handle_filenames_after_language_ids", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "model_details", kind: "message", T: ModelDetails },
  { no: 6, name: "linter_errors", kind: "message", T: LinterErrors },
  { no: 7, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "use_web", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "external_links", kind: "message", T: ComposerExternalLink, repeated: true },
  { no: 10, name: "project_context", kind: "message", T: ConversationMessage, opt: true },
  { no: 11, name: "diffs_for_compressing_files", kind: "message", T: StreamUnifiedChatRequest_RedDiff, repeated: true },
  { no: 12, name: "compress_edits", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "should_cache", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "multi_file_linter_errors", kind: "message", T: LinterErrors, repeated: true },
  { no: 15, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 16, name: "recent_edits", kind: "message", T: StreamUnifiedChatRequest_RecentEdits, opt: true },
  { no: 17, name: "use_reference_composer_diff_prompt", kind: "scalar", T: 8, opt: true },
  { no: 18, name: "file_diff_histories", kind: "message", T: ComposerFileDiffHistory, repeated: true },
  { no: 19, name: "use_new_compression_scheme", kind: "scalar", T: 8, opt: true },
  { no: 21, name: "quotes", kind: "message", T: ChatQuote, repeated: true },
  { no: 20, name: "additional_ranked_context", kind: "message", T: RankedContext, repeated: true },
  {
    no: 22,
    name: "is_chat",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 23,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 72,
    name: "replying_to_request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 24, name: "repository_info", kind: "message", T: RepositoryInfo },
  {
    no: 25,
    name: "repository_info_should_query_staging",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 39,
    name: "repository_info_should_query_prod",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 52, name: "query_only_repo_access", kind: "message", T: QueryOnlyRepoAccess },
  {
    no: 44,
    name: "repo_query_auth_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 26, name: "environment_info", kind: "message", T: EnvironmentInfo },
  {
    no: 27,
    name: "is_agentic",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 28, name: "conversation_summary", kind: "message", T: ConversationSummary2, opt: true },
  { no: 29, name: "supported_tools", kind: "enum", T: proto3.getEnumType(ClientSideToolV2), repeated: true },
  {
    no: 31,
    name: "enable_yolo_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 32,
    name: "yolo_prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 33,
    name: "use_unified_chat_prompt",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 34, name: "mcp_tools", kind: "message", T: MCPParams_Tool, repeated: true },
  { no: 35, name: "use_full_inputs_context", kind: "scalar", T: 8, opt: true },
  { no: 36, name: "is_resume", kind: "scalar", T: 8, opt: true },
  { no: 37, name: "allow_model_fallbacks", kind: "scalar", T: 8, opt: true },
  { no: 38, name: "number_of_times_shown_fallback_model_warning", kind: "scalar", T: 5, opt: true },
  { no: 40, name: "context_bank_session_id", kind: "scalar", T: 9, opt: true },
  { no: 41, name: "context_bank_version", kind: "scalar", T: 5, opt: true },
  { no: 43, name: "context_bank_encryption_key", kind: "scalar", T: 12, opt: true },
  {
    no: 45,
    name: "is_headless",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 68,
    name: "is_background_composer",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 42, name: "uses_codebase_results", kind: "message", T: StreamUnifiedChatRequest_CodeSearchResult, opt: true },
  { no: 46, name: "unified_mode", kind: "enum", T: proto3.getEnumType(StreamUnifiedChatRequest_UnifiedMode), opt: true },
  { no: 47, name: "tools_requiring_accepted_return", kind: "enum", T: proto3.getEnumType(ClientSideToolV2), repeated: true },
  { no: 48, name: "should_disable_tools", kind: "scalar", T: 8, opt: true },
  { no: 49, name: "thinking_level", kind: "enum", T: proto3.getEnumType(StreamUnifiedChatRequest_ThinkingLevel), opt: true },
  { no: 50, name: "should_use_chat_prompt", kind: "scalar", T: 8, opt: true },
  { no: 55, name: "background_composer_id", kind: "scalar", T: 9, opt: true },
  { no: 51, name: "uses_rules", kind: "scalar", T: 8, opt: true },
  { no: 53, name: "mode_uses_auto_apply", kind: "scalar", T: 8, opt: true },
  { no: 54, name: "unified_mode_name", kind: "scalar", T: 9, opt: true },
  { no: 56, name: "use_generate_rules_prompt", kind: "scalar", T: 8, opt: true },
  { no: 57, name: "edit_tool_supports_search_and_replace", kind: "scalar", T: 8, opt: true },
  { no: 58, name: "project_layouts", kind: "message", T: ProjectLayout, repeated: true },
  { no: 59, name: "repository_name_if_unindexed", kind: "scalar", T: 9, opt: true },
  { no: 60, name: "indexing_progress", kind: "scalar", T: 1, opt: true },
  { no: 61, name: "full_file_cmd_k_options", kind: "message", T: StreamUnifiedChatRequest_FullFileCmdKOptions, opt: true },
  { no: 62, name: "indexing_phase_if_unindexed", kind: "scalar", T: 9, opt: true },
  { no: 63, name: "use_knowledge_base_prompt", kind: "scalar", T: 8, opt: true },
  { no: 64, name: "indexing_num_files_if_unindexed", kind: "scalar", T: 5, opt: true },
  { no: 66, name: "subagent_info", kind: "message", T: SubagentInfo, opt: true },
  {
    no: 67,
    name: "supports_git_index",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 69,
    name: "force_is_not_dev",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 70, name: "disable_edit_file_timeout", kind: "scalar", T: 8, opt: true },
  { no: 71, name: "should_attach_linter_errors", kind: "scalar", T: 8, opt: true },
  { no: 73, name: "should_speculatively_route_gpt5", kind: "scalar", T: 8, opt: true },
  { no: 74, name: "force_terminal_hanging_detection", kind: "scalar", T: 8, opt: true },
  { no: 75, name: "force_summarization", kind: "scalar", T: 8, opt: true },
  { no: 76, name: "is_quick_search_query", kind: "scalar", T: 8, opt: true },
  { no: 77, name: "is_spec_mode", kind: "scalar", T: 8, opt: true },
  {
    no: 78,
    name: "allow_server_side_semantic_search",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 79, name: "speculative_summarization_encryption_key", kind: "scalar", T: 12, opt: true },
  { no: 81, name: "workspace_folders", kind: "message", T: WorkspaceFolder, repeated: true },
  { no: 82, name: "does_readfile_support_images", kind: "scalar", T: 8, opt: true },
  { no: 83, name: "sandboxing_support_enabled", kind: "scalar", T: 8, opt: true },
  { no: 84, name: "custom_planning_instructions", kind: "scalar", T: 9, opt: true },
  { no: 85, name: "enable_terminal_file_persistence", kind: "scalar", T: 8, opt: true },
  { no: 86, name: "terminals_folder", kind: "scalar", T: 9, opt: true },
  { no: 93, name: "agent_transcripts_folder", kind: "scalar", T: 9, opt: true },
  { no: 87, name: "agent_notes_folder", kind: "scalar", T: 9, opt: true },
  { no: 88, name: "agent_tools_folder", kind: "scalar", T: 9, opt: true },
  { no: 89, name: "current_plan", kind: "message", T: StreamUnifiedChatRequest_CurrentPlan, opt: true },
  { no: 90, name: "has_mcp_descriptors", kind: "scalar", T: 8, opt: true },
  { no: 91, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true },
  { no: 92, name: "try_use_best_of_n_promotion", kind: "scalar", T: 8, opt: true }
]);
(function(StreamUnifiedChatRequest_UnifiedMode2) {
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["CHAT"] = 1] = "CHAT";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["AGENT"] = 2] = "AGENT";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["EDIT"] = 3] = "EDIT";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["CUSTOM"] = 4] = "CUSTOM";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["PLAN"] = 5] = "PLAN";
  StreamUnifiedChatRequest_UnifiedMode2[StreamUnifiedChatRequest_UnifiedMode2["DEBUG"] = 6] = "DEBUG";
})(StreamUnifiedChatRequest_UnifiedMode! || (StreamUnifiedChatRequest_UnifiedMode = {} as typeof StreamUnifiedChatRequest_UnifiedMode));
proto3.util.setEnumType(StreamUnifiedChatRequest_UnifiedMode, "aiserver.v1.StreamUnifiedChatRequest.UnifiedMode", [
  { no: 0, name: "UNIFIED_MODE_UNSPECIFIED" },
  { no: 1, name: "UNIFIED_MODE_CHAT" },
  { no: 2, name: "UNIFIED_MODE_AGENT" },
  { no: 3, name: "UNIFIED_MODE_EDIT" },
  { no: 4, name: "UNIFIED_MODE_CUSTOM" },
  { no: 5, name: "UNIFIED_MODE_PLAN" },
  { no: 6, name: "UNIFIED_MODE_DEBUG" }
]);
(function(StreamUnifiedChatRequest_ThinkingLevel2) {
  StreamUnifiedChatRequest_ThinkingLevel2[StreamUnifiedChatRequest_ThinkingLevel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StreamUnifiedChatRequest_ThinkingLevel2[StreamUnifiedChatRequest_ThinkingLevel2["MEDIUM"] = 1] = "MEDIUM";
  StreamUnifiedChatRequest_ThinkingLevel2[StreamUnifiedChatRequest_ThinkingLevel2["HIGH"] = 2] = "HIGH";
})(StreamUnifiedChatRequest_ThinkingLevel! || (StreamUnifiedChatRequest_ThinkingLevel = {} as typeof StreamUnifiedChatRequest_ThinkingLevel));
proto3.util.setEnumType(StreamUnifiedChatRequest_ThinkingLevel, "aiserver.v1.StreamUnifiedChatRequest.ThinkingLevel", [
  { no: 0, name: "THINKING_LEVEL_UNSPECIFIED" },
  { no: 1, name: "THINKING_LEVEL_MEDIUM" },
  { no: 2, name: "THINKING_LEVEL_HIGH" }
]);
var StreamUnifiedChatRequest_RedDiff$Runtime = (() => class _StreamUnifiedChatRequest_RedDiff extends Message<_StreamUnifiedChatRequest_RedDiff> {
  declare relativeWorkspacePath: string;
  declare redRanges: SimplestRange[];
  declare redRangesReversed: SimplestRange[];
  declare startHash: string;
  declare endHash: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_RedDiff>) {
    super();
    this.relativeWorkspacePath = "";
    this.redRanges = [];
    this.redRangesReversed = [];
    this.startHash = "";
    this.endHash = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_RedDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_RedDiff {
    return new _StreamUnifiedChatRequest_RedDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RedDiff {
    return new _StreamUnifiedChatRequest_RedDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RedDiff {
    return new _StreamUnifiedChatRequest_RedDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_RedDiff | PlainMessage<_StreamUnifiedChatRequest_RedDiff> | undefined | null, b2: _StreamUnifiedChatRequest_RedDiff | PlainMessage<_StreamUnifiedChatRequest_RedDiff> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_RedDiff as unknown as MessageType<_StreamUnifiedChatRequest_RedDiff>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_RedDiff = InstanceType<typeof StreamUnifiedChatRequest_RedDiff$Runtime>;
var StreamUnifiedChatRequest_RedDiff: MessageType<StreamUnifiedChatRequest_RedDiff> = StreamUnifiedChatRequest_RedDiff$Runtime as unknown as MessageType<StreamUnifiedChatRequest_RedDiff>;
(StreamUnifiedChatRequest_RedDiff as MutableMessageType<StreamUnifiedChatRequest_RedDiff>).runtime = proto3;
(StreamUnifiedChatRequest_RedDiff as MutableMessageType<StreamUnifiedChatRequest_RedDiff>).typeName = "aiserver.v1.StreamUnifiedChatRequest.RedDiff";
(StreamUnifiedChatRequest_RedDiff as MutableMessageType<StreamUnifiedChatRequest_RedDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "red_ranges", kind: "message", T: SimplestRange, repeated: true },
  { no: 3, name: "red_ranges_reversed", kind: "message", T: SimplestRange, repeated: true },
  {
    no: 4,
    name: "start_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "end_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamUnifiedChatRequest_RecentEdits$Runtime = (() => class _StreamUnifiedChatRequest_RecentEdits extends Message<_StreamUnifiedChatRequest_RecentEdits> {
  declare codeBlockInfo: StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo[];
  declare finalFileValues: StreamUnifiedChatRequest_RecentEdits_FileInfo[];
  declare editsBelongToComposerGenerationUuid?: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_RecentEdits>) {
    super();
    this.codeBlockInfo = [];
    this.finalFileValues = [];
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_RecentEdits);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_RecentEdits {
    return new _StreamUnifiedChatRequest_RecentEdits().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits {
    return new _StreamUnifiedChatRequest_RecentEdits().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits {
    return new _StreamUnifiedChatRequest_RecentEdits().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_RecentEdits | PlainMessage<_StreamUnifiedChatRequest_RecentEdits> | undefined | null, b2: _StreamUnifiedChatRequest_RecentEdits | PlainMessage<_StreamUnifiedChatRequest_RecentEdits> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits as unknown as MessageType<_StreamUnifiedChatRequest_RecentEdits>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_RecentEdits = InstanceType<typeof StreamUnifiedChatRequest_RecentEdits$Runtime>;
var StreamUnifiedChatRequest_RecentEdits: MessageType<StreamUnifiedChatRequest_RecentEdits> = StreamUnifiedChatRequest_RecentEdits$Runtime as unknown as MessageType<StreamUnifiedChatRequest_RecentEdits>;
(StreamUnifiedChatRequest_RecentEdits as MutableMessageType<StreamUnifiedChatRequest_RecentEdits>).runtime = proto3;
(StreamUnifiedChatRequest_RecentEdits as MutableMessageType<StreamUnifiedChatRequest_RecentEdits>).typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits";
(StreamUnifiedChatRequest_RecentEdits as MutableMessageType<StreamUnifiedChatRequest_RecentEdits>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_block_info", kind: "message", T: StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo, repeated: true },
  { no: 2, name: "final_file_values", kind: "message", T: StreamUnifiedChatRequest_RecentEdits_FileInfo, repeated: true },
  { no: 3, name: "edits_belong_to_composer_generation_uuid", kind: "scalar", T: 9, opt: true }
]);
var StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo$Runtime = (() => class _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo extends Message<_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo> {
  declare relativeWorkspacePath: string;
  declare contentBefore?: string;
  declare contentAfter?: string;
  declare generationUuid?: string;
  declare version?: number;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo | PlainMessage<_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo> | undefined | null, b2: _StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo | PlainMessage<_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo as unknown as MessageType<_StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo = InstanceType<typeof StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo$Runtime>;
var StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo: MessageType<StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo> = StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo$Runtime as unknown as MessageType<StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>;
(StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>).runtime = proto3;
(StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>).typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits.CodeBlockInfo";
(StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "content_before", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "content_after", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "generation_uuid", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "version", kind: "scalar", T: 5, opt: true }
]);
var StreamUnifiedChatRequest_RecentEdits_FileInfo$Runtime = (() => class _StreamUnifiedChatRequest_RecentEdits_FileInfo extends Message<_StreamUnifiedChatRequest_RecentEdits_FileInfo> {
  declare relativeWorkspacePath: string;
  declare content: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_RecentEdits_FileInfo>) {
    super();
    this.relativeWorkspacePath = "";
    this.content = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_RecentEdits_FileInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_RecentEdits_FileInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits_FileInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_RecentEdits_FileInfo {
    return new _StreamUnifiedChatRequest_RecentEdits_FileInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_RecentEdits_FileInfo | PlainMessage<_StreamUnifiedChatRequest_RecentEdits_FileInfo> | undefined | null, b2: _StreamUnifiedChatRequest_RecentEdits_FileInfo | PlainMessage<_StreamUnifiedChatRequest_RecentEdits_FileInfo> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_RecentEdits_FileInfo as unknown as MessageType<_StreamUnifiedChatRequest_RecentEdits_FileInfo>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_RecentEdits_FileInfo = InstanceType<typeof StreamUnifiedChatRequest_RecentEdits_FileInfo$Runtime>;
var StreamUnifiedChatRequest_RecentEdits_FileInfo: MessageType<StreamUnifiedChatRequest_RecentEdits_FileInfo> = StreamUnifiedChatRequest_RecentEdits_FileInfo$Runtime as unknown as MessageType<StreamUnifiedChatRequest_RecentEdits_FileInfo>;
(StreamUnifiedChatRequest_RecentEdits_FileInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_FileInfo>).runtime = proto3;
(StreamUnifiedChatRequest_RecentEdits_FileInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_FileInfo>).typeName = "aiserver.v1.StreamUnifiedChatRequest.RecentEdits.FileInfo";
(StreamUnifiedChatRequest_RecentEdits_FileInfo as MutableMessageType<StreamUnifiedChatRequest_RecentEdits_FileInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamUnifiedChatRequest_CodeSearchResult$Runtime = (() => class _StreamUnifiedChatRequest_CodeSearchResult extends Message<_StreamUnifiedChatRequest_CodeSearchResult> {
  declare results: CodeResult[];
  declare allFiles: File2[];
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_CodeSearchResult>) {
    super();
    this.results = [];
    this.allFiles = [];
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_CodeSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_CodeSearchResult {
    return new _StreamUnifiedChatRequest_CodeSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_CodeSearchResult {
    return new _StreamUnifiedChatRequest_CodeSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_CodeSearchResult {
    return new _StreamUnifiedChatRequest_CodeSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_CodeSearchResult | PlainMessage<_StreamUnifiedChatRequest_CodeSearchResult> | undefined | null, b2: _StreamUnifiedChatRequest_CodeSearchResult | PlainMessage<_StreamUnifiedChatRequest_CodeSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_CodeSearchResult as unknown as MessageType<_StreamUnifiedChatRequest_CodeSearchResult>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_CodeSearchResult = InstanceType<typeof StreamUnifiedChatRequest_CodeSearchResult$Runtime>;
var StreamUnifiedChatRequest_CodeSearchResult: MessageType<StreamUnifiedChatRequest_CodeSearchResult> = StreamUnifiedChatRequest_CodeSearchResult$Runtime as unknown as MessageType<StreamUnifiedChatRequest_CodeSearchResult>;
(StreamUnifiedChatRequest_CodeSearchResult as MutableMessageType<StreamUnifiedChatRequest_CodeSearchResult>).runtime = proto3;
(StreamUnifiedChatRequest_CodeSearchResult as MutableMessageType<StreamUnifiedChatRequest_CodeSearchResult>).typeName = "aiserver.v1.StreamUnifiedChatRequest.CodeSearchResult";
(StreamUnifiedChatRequest_CodeSearchResult as MutableMessageType<StreamUnifiedChatRequest_CodeSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: CodeResult, repeated: true },
  { no: 2, name: "all_files", kind: "message", T: File2, repeated: true }
]);
var StreamUnifiedChatRequest_FullFileCmdKOptions$Runtime = (() => class _StreamUnifiedChatRequest_FullFileCmdKOptions extends Message<_StreamUnifiedChatRequest_FullFileCmdKOptions> {
  declare filePath: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_FullFileCmdKOptions>) {
    super();
    this.filePath = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_FullFileCmdKOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_FullFileCmdKOptions {
    return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_FullFileCmdKOptions {
    return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_FullFileCmdKOptions {
    return new _StreamUnifiedChatRequest_FullFileCmdKOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_FullFileCmdKOptions | PlainMessage<_StreamUnifiedChatRequest_FullFileCmdKOptions> | undefined | null, b2: _StreamUnifiedChatRequest_FullFileCmdKOptions | PlainMessage<_StreamUnifiedChatRequest_FullFileCmdKOptions> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_FullFileCmdKOptions as unknown as MessageType<_StreamUnifiedChatRequest_FullFileCmdKOptions>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_FullFileCmdKOptions = InstanceType<typeof StreamUnifiedChatRequest_FullFileCmdKOptions$Runtime>;
var StreamUnifiedChatRequest_FullFileCmdKOptions: MessageType<StreamUnifiedChatRequest_FullFileCmdKOptions> = StreamUnifiedChatRequest_FullFileCmdKOptions$Runtime as unknown as MessageType<StreamUnifiedChatRequest_FullFileCmdKOptions>;
(StreamUnifiedChatRequest_FullFileCmdKOptions as MutableMessageType<StreamUnifiedChatRequest_FullFileCmdKOptions>).runtime = proto3;
(StreamUnifiedChatRequest_FullFileCmdKOptions as MutableMessageType<StreamUnifiedChatRequest_FullFileCmdKOptions>).typeName = "aiserver.v1.StreamUnifiedChatRequest.FullFileCmdKOptions";
(StreamUnifiedChatRequest_FullFileCmdKOptions as MutableMessageType<StreamUnifiedChatRequest_FullFileCmdKOptions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamUnifiedChatRequest_CurrentPlan$Runtime = (() => class _StreamUnifiedChatRequest_CurrentPlan extends Message<_StreamUnifiedChatRequest_CurrentPlan> {
  declare content: string;
  declare name: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatRequest_CurrentPlan>) {
    super();
    this.content = "";
    this.name = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatRequest_CurrentPlan);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatRequest_CurrentPlan {
    return new _StreamUnifiedChatRequest_CurrentPlan().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_CurrentPlan {
    return new _StreamUnifiedChatRequest_CurrentPlan().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatRequest_CurrentPlan {
    return new _StreamUnifiedChatRequest_CurrentPlan().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatRequest_CurrentPlan | PlainMessage<_StreamUnifiedChatRequest_CurrentPlan> | undefined | null, b2: _StreamUnifiedChatRequest_CurrentPlan | PlainMessage<_StreamUnifiedChatRequest_CurrentPlan> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatRequest_CurrentPlan as unknown as MessageType<_StreamUnifiedChatRequest_CurrentPlan>, a, b2);
  }
})();
export type StreamUnifiedChatRequest_CurrentPlan = InstanceType<typeof StreamUnifiedChatRequest_CurrentPlan$Runtime>;
var StreamUnifiedChatRequest_CurrentPlan: MessageType<StreamUnifiedChatRequest_CurrentPlan> = StreamUnifiedChatRequest_CurrentPlan$Runtime as unknown as MessageType<StreamUnifiedChatRequest_CurrentPlan>;
(StreamUnifiedChatRequest_CurrentPlan as MutableMessageType<StreamUnifiedChatRequest_CurrentPlan>).runtime = proto3;
(StreamUnifiedChatRequest_CurrentPlan as MutableMessageType<StreamUnifiedChatRequest_CurrentPlan>).typeName = "aiserver.v1.StreamUnifiedChatRequest.CurrentPlan";
(StreamUnifiedChatRequest_CurrentPlan as MutableMessageType<StreamUnifiedChatRequest_CurrentPlan>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextPiece$Runtime = (() => class _ContextPiece extends Message<_ContextPiece> {
  declare relativeWorkspacePath: string;
  declare content: string;
  declare score: number;
  constructor(data?: PartialMessage<_ContextPiece>) {
    super();
    this.relativeWorkspacePath = "";
    this.content = "";
    this.score = 0;
    proto3.util.initPartial(data, this as _ContextPiece);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextPiece {
    return new _ContextPiece().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextPiece {
    return new _ContextPiece().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextPiece {
    return new _ContextPiece().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextPiece | PlainMessage<_ContextPiece> | undefined | null, b2: _ContextPiece | PlainMessage<_ContextPiece> | undefined | null): boolean {
    return proto3.util.equals(_ContextPiece as unknown as MessageType<_ContextPiece>, a, b2);
  }
})();
export type ContextPiece = InstanceType<typeof ContextPiece$Runtime>;
var ContextPiece: MessageType<ContextPiece> = ContextPiece$Runtime as unknown as MessageType<ContextPiece>;
(ContextPiece as MutableMessageType<ContextPiece>).runtime = proto3;
(ContextPiece as MutableMessageType<ContextPiece>).typeName = "aiserver.v1.ContextPiece";
(ContextPiece as MutableMessageType<ContextPiece>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var ContextPieceUpdate$Runtime = (() => class _ContextPieceUpdate extends Message<_ContextPieceUpdate> {
  declare pieces: ContextPiece[];
  constructor(data?: PartialMessage<_ContextPieceUpdate>) {
    super();
    this.pieces = [];
    proto3.util.initPartial(data, this as _ContextPieceUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextPieceUpdate {
    return new _ContextPieceUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextPieceUpdate {
    return new _ContextPieceUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextPieceUpdate {
    return new _ContextPieceUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextPieceUpdate | PlainMessage<_ContextPieceUpdate> | undefined | null, b2: _ContextPieceUpdate | PlainMessage<_ContextPieceUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ContextPieceUpdate as unknown as MessageType<_ContextPieceUpdate>, a, b2);
  }
})();
export type ContextPieceUpdate = InstanceType<typeof ContextPieceUpdate$Runtime>;
var ContextPieceUpdate: MessageType<ContextPieceUpdate> = ContextPieceUpdate$Runtime as unknown as MessageType<ContextPieceUpdate>;
(ContextPieceUpdate as MutableMessageType<ContextPieceUpdate>).runtime = proto3;
(ContextPieceUpdate as MutableMessageType<ContextPieceUpdate>).typeName = "aiserver.v1.ContextPieceUpdate";
(ContextPieceUpdate as MutableMessageType<ContextPieceUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pieces", kind: "message", T: ContextPiece, repeated: true }
]);
var StreamUnifiedChatResponse$Runtime = (() => class _StreamUnifiedChatResponse extends Message<_StreamUnifiedChatResponse> {
  declare text: string;
  declare serverBubbleId?: string;
  declare debuggingOnlyChatPrompt?: string;
  declare debuggingOnlyTokenCount?: number;
  declare documentCitation?: DocumentationCitation;
  declare filledPrompt?: string;
  declare isBigFile?: boolean;
  declare intermediateText?: string;
  declare isUsingSlowRequest?: boolean;
  declare chunkIdentity?: StreamUnifiedChatResponse_ChunkIdentity;
  declare docsReference?: DocsReference;
  declare webCitation?: WebCitation;
  declare aiWebSearchResults?: AiWebSearchResults;
  declare statusUpdates?: StatusUpdates;
  declare toolCall?: StreamedBackToolCall;
  declare toolCallV2?: StreamedBackToolCallV2;
  declare shouldBreakAiMessage?: boolean;
  declare partialToolCall?: StreamedBackPartialToolCall;
  declare finalToolResult?: StreamUnifiedChatResponse_FinalToolResult;
  declare symbolLink?: SymbolLink;
  declare fileLink?: FileLink;
  declare conversationSummary?: ConversationSummary2;
  declare serviceStatusUpdate?: ServiceStatusUpdate;
  declare viewableGitContext?: ViewableGitContext;
  declare contextPieceUpdate?: ContextPieceUpdate;
  declare usedCode?: StreamUnifiedChatResponse_UsedCode;
  declare thinking?: ConversationMessage_Thinking;
  declare thinkingStyle?: ConversationMessage_ThinkingStyle;
  declare stopUsingDsv3AgenticModel?: boolean;
  declare usageUuid?: string;
  declare conversationSummaryStarter?: ConversationSummaryStarter;
  declare subagentReturn?: SubagentReturnCall;
  declare contextWindowStatus?: ContextWindowStatus;
  declare imageDescription?: StreamUnifiedChatResponse_ImageDescription;
  declare parallelToolCallsComplete?: boolean;
  declare starsFeedbackRequest?: StarsFeedbackRequest;
  declare modelProviderRequestJson?: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatResponse>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponse {
    return new _StreamUnifiedChatResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse {
    return new _StreamUnifiedChatResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse {
    return new _StreamUnifiedChatResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponse | PlainMessage<_StreamUnifiedChatResponse> | undefined | null, b2: _StreamUnifiedChatResponse | PlainMessage<_StreamUnifiedChatResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponse as unknown as MessageType<_StreamUnifiedChatResponse>, a, b2);
  }
})();
export type StreamUnifiedChatResponse = InstanceType<typeof StreamUnifiedChatResponse$Runtime>;
var StreamUnifiedChatResponse: MessageType<StreamUnifiedChatResponse> = StreamUnifiedChatResponse$Runtime as unknown as MessageType<StreamUnifiedChatResponse>;
(StreamUnifiedChatResponse as MutableMessageType<StreamUnifiedChatResponse>).runtime = proto3;
(StreamUnifiedChatResponse as MutableMessageType<StreamUnifiedChatResponse>).typeName = "aiserver.v1.StreamUnifiedChatResponse";
(StreamUnifiedChatResponse as MutableMessageType<StreamUnifiedChatResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 22, name: "server_bubble_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "debugging_only_chat_prompt", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "debugging_only_token_count", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "document_citation", kind: "message", T: DocumentationCitation },
  { no: 5, name: "filled_prompt", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "is_big_file", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "intermediate_text", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "is_using_slow_request", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "chunk_identity", kind: "message", T: StreamUnifiedChatResponse_ChunkIdentity, opt: true },
  { no: 9, name: "docs_reference", kind: "message", T: DocsReference, opt: true },
  { no: 11, name: "web_citation", kind: "message", T: WebCitation, opt: true },
  { no: 33, name: "ai_web_search_results", kind: "message", T: AiWebSearchResults, opt: true },
  { no: 12, name: "status_updates", kind: "message", T: StatusUpdates, opt: true },
  { no: 13, name: "tool_call", kind: "message", T: StreamedBackToolCall, opt: true },
  { no: 36, name: "tool_call_v2", kind: "message", T: StreamedBackToolCallV2, opt: true },
  { no: 14, name: "should_break_ai_message", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "partial_tool_call", kind: "message", T: StreamedBackPartialToolCall, opt: true },
  { no: 16, name: "final_tool_result", kind: "message", T: StreamUnifiedChatResponse_FinalToolResult, opt: true },
  { no: 17, name: "symbol_link", kind: "message", T: SymbolLink, opt: true },
  { no: 19, name: "file_link", kind: "message", T: FileLink, opt: true },
  { no: 18, name: "conversation_summary", kind: "message", T: ConversationSummary2, opt: true },
  { no: 20, name: "service_status_update", kind: "message", T: ServiceStatusUpdate, opt: true },
  { no: 21, name: "viewable_git_context", kind: "message", T: ViewableGitContext, opt: true },
  { no: 23, name: "context_piece_update", kind: "message", T: ContextPieceUpdate, opt: true },
  { no: 24, name: "used_code", kind: "message", T: StreamUnifiedChatResponse_UsedCode, opt: true },
  { no: 25, name: "thinking", kind: "message", T: ConversationMessage_Thinking, opt: true },
  { no: 37, name: "thinking_style", kind: "enum", T: proto3.getEnumType(ConversationMessage_ThinkingStyle), opt: true },
  { no: 26, name: "stop_using_dsv3_agentic_model", kind: "scalar", T: 8, opt: true },
  { no: 27, name: "usage_uuid", kind: "scalar", T: 9, opt: true },
  { no: 28, name: "conversation_summary_starter", kind: "message", T: ConversationSummaryStarter, opt: true },
  { no: 29, name: "subagent_return", kind: "message", T: SubagentReturnCall, opt: true },
  { no: 30, name: "context_window_status", kind: "message", T: ContextWindowStatus, opt: true },
  { no: 31, name: "image_description", kind: "message", T: StreamUnifiedChatResponse_ImageDescription, opt: true },
  { no: 32, name: "parallel_tool_calls_complete", kind: "scalar", T: 8, opt: true },
  { no: 34, name: "stars_feedback_request", kind: "message", T: StarsFeedbackRequest, opt: true },
  { no: 35, name: "model_provider_request_json", kind: "scalar", T: 9, opt: true }
]);
var StreamUnifiedChatResponse_UsedCode$Runtime = (() => class _StreamUnifiedChatResponse_UsedCode extends Message<_StreamUnifiedChatResponse_UsedCode> {
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_StreamUnifiedChatResponse_UsedCode>) {
    super();
    this.codeResults = [];
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponse_UsedCode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponse_UsedCode {
    return new _StreamUnifiedChatResponse_UsedCode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_UsedCode {
    return new _StreamUnifiedChatResponse_UsedCode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_UsedCode {
    return new _StreamUnifiedChatResponse_UsedCode().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponse_UsedCode | PlainMessage<_StreamUnifiedChatResponse_UsedCode> | undefined | null, b2: _StreamUnifiedChatResponse_UsedCode | PlainMessage<_StreamUnifiedChatResponse_UsedCode> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponse_UsedCode as unknown as MessageType<_StreamUnifiedChatResponse_UsedCode>, a, b2);
  }
})();
export type StreamUnifiedChatResponse_UsedCode = InstanceType<typeof StreamUnifiedChatResponse_UsedCode$Runtime>;
var StreamUnifiedChatResponse_UsedCode: MessageType<StreamUnifiedChatResponse_UsedCode> = StreamUnifiedChatResponse_UsedCode$Runtime as unknown as MessageType<StreamUnifiedChatResponse_UsedCode>;
(StreamUnifiedChatResponse_UsedCode as MutableMessageType<StreamUnifiedChatResponse_UsedCode>).runtime = proto3;
(StreamUnifiedChatResponse_UsedCode as MutableMessageType<StreamUnifiedChatResponse_UsedCode>).typeName = "aiserver.v1.StreamUnifiedChatResponse.UsedCode";
(StreamUnifiedChatResponse_UsedCode as MutableMessageType<StreamUnifiedChatResponse_UsedCode>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var StreamUnifiedChatResponse_ChunkIdentity$Runtime = (() => class _StreamUnifiedChatResponse_ChunkIdentity extends Message<_StreamUnifiedChatResponse_ChunkIdentity> {
  declare fileName: string;
  declare startLine: number;
  declare endLine: number;
  declare text: string;
  declare chunkType: ChunkType;
  constructor(data?: PartialMessage<_StreamUnifiedChatResponse_ChunkIdentity>) {
    super();
    this.fileName = "";
    this.startLine = 0;
    this.endLine = 0;
    this.text = "";
    this.chunkType = ChunkType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponse_ChunkIdentity);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponse_ChunkIdentity {
    return new _StreamUnifiedChatResponse_ChunkIdentity().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_ChunkIdentity {
    return new _StreamUnifiedChatResponse_ChunkIdentity().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_ChunkIdentity {
    return new _StreamUnifiedChatResponse_ChunkIdentity().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponse_ChunkIdentity | PlainMessage<_StreamUnifiedChatResponse_ChunkIdentity> | undefined | null, b2: _StreamUnifiedChatResponse_ChunkIdentity | PlainMessage<_StreamUnifiedChatResponse_ChunkIdentity> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponse_ChunkIdentity as unknown as MessageType<_StreamUnifiedChatResponse_ChunkIdentity>, a, b2);
  }
})();
export type StreamUnifiedChatResponse_ChunkIdentity = InstanceType<typeof StreamUnifiedChatResponse_ChunkIdentity$Runtime>;
var StreamUnifiedChatResponse_ChunkIdentity: MessageType<StreamUnifiedChatResponse_ChunkIdentity> = StreamUnifiedChatResponse_ChunkIdentity$Runtime as unknown as MessageType<StreamUnifiedChatResponse_ChunkIdentity>;
(StreamUnifiedChatResponse_ChunkIdentity as MutableMessageType<StreamUnifiedChatResponse_ChunkIdentity>).runtime = proto3;
(StreamUnifiedChatResponse_ChunkIdentity as MutableMessageType<StreamUnifiedChatResponse_ChunkIdentity>).typeName = "aiserver.v1.StreamUnifiedChatResponse.ChunkIdentity";
(StreamUnifiedChatResponse_ChunkIdentity as MutableMessageType<StreamUnifiedChatResponse_ChunkIdentity>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "chunk_type", kind: "enum", T: proto3.getEnumType(ChunkType) }
]);
var StreamUnifiedChatResponse_FinalToolResult$Runtime = (() => class _StreamUnifiedChatResponse_FinalToolResult extends Message<_StreamUnifiedChatResponse_FinalToolResult> {
  declare toolCallId: string;
  declare result?: ClientSideToolV2Result;
  constructor(data?: PartialMessage<_StreamUnifiedChatResponse_FinalToolResult>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponse_FinalToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponse_FinalToolResult {
    return new _StreamUnifiedChatResponse_FinalToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_FinalToolResult {
    return new _StreamUnifiedChatResponse_FinalToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_FinalToolResult {
    return new _StreamUnifiedChatResponse_FinalToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponse_FinalToolResult | PlainMessage<_StreamUnifiedChatResponse_FinalToolResult> | undefined | null, b2: _StreamUnifiedChatResponse_FinalToolResult | PlainMessage<_StreamUnifiedChatResponse_FinalToolResult> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponse_FinalToolResult as unknown as MessageType<_StreamUnifiedChatResponse_FinalToolResult>, a, b2);
  }
})();
export type StreamUnifiedChatResponse_FinalToolResult = InstanceType<typeof StreamUnifiedChatResponse_FinalToolResult$Runtime>;
var StreamUnifiedChatResponse_FinalToolResult: MessageType<StreamUnifiedChatResponse_FinalToolResult> = StreamUnifiedChatResponse_FinalToolResult$Runtime as unknown as MessageType<StreamUnifiedChatResponse_FinalToolResult>;
(StreamUnifiedChatResponse_FinalToolResult as MutableMessageType<StreamUnifiedChatResponse_FinalToolResult>).runtime = proto3;
(StreamUnifiedChatResponse_FinalToolResult as MutableMessageType<StreamUnifiedChatResponse_FinalToolResult>).typeName = "aiserver.v1.StreamUnifiedChatResponse.FinalToolResult";
(StreamUnifiedChatResponse_FinalToolResult as MutableMessageType<StreamUnifiedChatResponse_FinalToolResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "result", kind: "message", T: ClientSideToolV2Result }
]);
var StreamUnifiedChatResponse_ImageDescription$Runtime = (() => class _StreamUnifiedChatResponse_ImageDescription extends Message<_StreamUnifiedChatResponse_ImageDescription> {
  declare description: string;
  declare imageUuid: string;
  constructor(data?: PartialMessage<_StreamUnifiedChatResponse_ImageDescription>) {
    super();
    this.description = "";
    this.imageUuid = "";
    proto3.util.initPartial(data, this as _StreamUnifiedChatResponse_ImageDescription);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamUnifiedChatResponse_ImageDescription {
    return new _StreamUnifiedChatResponse_ImageDescription().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_ImageDescription {
    return new _StreamUnifiedChatResponse_ImageDescription().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamUnifiedChatResponse_ImageDescription {
    return new _StreamUnifiedChatResponse_ImageDescription().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamUnifiedChatResponse_ImageDescription | PlainMessage<_StreamUnifiedChatResponse_ImageDescription> | undefined | null, b2: _StreamUnifiedChatResponse_ImageDescription | PlainMessage<_StreamUnifiedChatResponse_ImageDescription> | undefined | null): boolean {
    return proto3.util.equals(_StreamUnifiedChatResponse_ImageDescription as unknown as MessageType<_StreamUnifiedChatResponse_ImageDescription>, a, b2);
  }
})();
export type StreamUnifiedChatResponse_ImageDescription = InstanceType<typeof StreamUnifiedChatResponse_ImageDescription$Runtime>;
var StreamUnifiedChatResponse_ImageDescription: MessageType<StreamUnifiedChatResponse_ImageDescription> = StreamUnifiedChatResponse_ImageDescription$Runtime as unknown as MessageType<StreamUnifiedChatResponse_ImageDescription>;
(StreamUnifiedChatResponse_ImageDescription as MutableMessageType<StreamUnifiedChatResponse_ImageDescription>).runtime = proto3;
(StreamUnifiedChatResponse_ImageDescription as MutableMessageType<StreamUnifiedChatResponse_ImageDescription>).typeName = "aiserver.v1.StreamUnifiedChatResponse.ImageDescription";
(StreamUnifiedChatResponse_ImageDescription as MutableMessageType<StreamUnifiedChatResponse_ImageDescription>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "image_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextWindowStatus$Runtime = (() => class _ContextWindowStatus extends Message<_ContextWindowStatus> {
  declare percentageRemaining: number;
  declare tokensUsed?: number;
  declare tokenLimit?: number;
  declare percentageRemainingFloat?: number;
  constructor(data?: PartialMessage<_ContextWindowStatus>) {
    super();
    this.percentageRemaining = 0;
    proto3.util.initPartial(data, this as _ContextWindowStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextWindowStatus {
    return new _ContextWindowStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextWindowStatus {
    return new _ContextWindowStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextWindowStatus {
    return new _ContextWindowStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextWindowStatus | PlainMessage<_ContextWindowStatus> | undefined | null, b2: _ContextWindowStatus | PlainMessage<_ContextWindowStatus> | undefined | null): boolean {
    return proto3.util.equals(_ContextWindowStatus as unknown as MessageType<_ContextWindowStatus>, a, b2);
  }
})();
export type ContextWindowStatus = InstanceType<typeof ContextWindowStatus$Runtime>;
var ContextWindowStatus: MessageType<ContextWindowStatus> = ContextWindowStatus$Runtime as unknown as MessageType<ContextWindowStatus>;
(ContextWindowStatus as MutableMessageType<ContextWindowStatus>).runtime = proto3;
(ContextWindowStatus as MutableMessageType<ContextWindowStatus>).typeName = "aiserver.v1.ContextWindowStatus";
(ContextWindowStatus as MutableMessageType<ContextWindowStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "percentage_remaining",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 2, name: "tokens_used", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "token_limit", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "percentage_remaining_float", kind: "scalar", T: 2, opt: true }
]);
var StarsFeedbackRequest$Runtime = (() => class _StarsFeedbackRequest extends Message<_StarsFeedbackRequest> {
  declare bubbleId: string;
  declare message: string;
  constructor(data?: PartialMessage<_StarsFeedbackRequest>) {
    super();
    this.bubbleId = "";
    this.message = "";
    proto3.util.initPartial(data, this as _StarsFeedbackRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StarsFeedbackRequest {
    return new _StarsFeedbackRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StarsFeedbackRequest {
    return new _StarsFeedbackRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StarsFeedbackRequest {
    return new _StarsFeedbackRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StarsFeedbackRequest | PlainMessage<_StarsFeedbackRequest> | undefined | null, b2: _StarsFeedbackRequest | PlainMessage<_StarsFeedbackRequest> | undefined | null): boolean {
    return proto3.util.equals(_StarsFeedbackRequest as unknown as MessageType<_StarsFeedbackRequest>, a, b2);
  }
})();
export type StarsFeedbackRequest = InstanceType<typeof StarsFeedbackRequest$Runtime>;
var StarsFeedbackRequest: MessageType<StarsFeedbackRequest> = StarsFeedbackRequest$Runtime as unknown as MessageType<StarsFeedbackRequest>;
(StarsFeedbackRequest as MutableMessageType<StarsFeedbackRequest>).runtime = proto3;
(StarsFeedbackRequest as MutableMessageType<StarsFeedbackRequest>).typeName = "aiserver.v1.StarsFeedbackRequest";
(StarsFeedbackRequest as MutableMessageType<StarsFeedbackRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationSummaryStarter$Runtime = (() => class _ConversationSummaryStarter extends Message<_ConversationSummaryStarter> {
  declare message: string;
  constructor(data?: PartialMessage<_ConversationSummaryStarter>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _ConversationSummaryStarter);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummaryStarter {
    return new _ConversationSummaryStarter().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummaryStarter {
    return new _ConversationSummaryStarter().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummaryStarter {
    return new _ConversationSummaryStarter().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummaryStarter | PlainMessage<_ConversationSummaryStarter> | undefined | null, b2: _ConversationSummaryStarter | PlainMessage<_ConversationSummaryStarter> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummaryStarter as unknown as MessageType<_ConversationSummaryStarter>, a, b2);
  }
})();
export type ConversationSummaryStarter = InstanceType<typeof ConversationSummaryStarter$Runtime>;
var ConversationSummaryStarter: MessageType<ConversationSummaryStarter> = ConversationSummaryStarter$Runtime as unknown as MessageType<ConversationSummaryStarter>;
(ConversationSummaryStarter as MutableMessageType<ConversationSummaryStarter>).runtime = proto3;
(ConversationSummaryStarter as MutableMessageType<ConversationSummaryStarter>).typeName = "aiserver.v1.ConversationSummaryStarter";
(ConversationSummaryStarter as MutableMessageType<ConversationSummaryStarter>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ServiceStatusUpdate$Runtime = (() => class _ServiceStatusUpdate extends Message<_ServiceStatusUpdate> {
  declare message: string;
  declare codicon: string;
  declare allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown?: boolean;
  declare actionToRunOnStatusUpdate?: string;
  constructor(data?: PartialMessage<_ServiceStatusUpdate>) {
    super();
    this.message = "";
    this.codicon = "";
    proto3.util.initPartial(data, this as _ServiceStatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ServiceStatusUpdate {
    return new _ServiceStatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ServiceStatusUpdate {
    return new _ServiceStatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ServiceStatusUpdate {
    return new _ServiceStatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ServiceStatusUpdate | PlainMessage<_ServiceStatusUpdate> | undefined | null, b2: _ServiceStatusUpdate | PlainMessage<_ServiceStatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ServiceStatusUpdate as unknown as MessageType<_ServiceStatusUpdate>, a, b2);
  }
})();
export type ServiceStatusUpdate = InstanceType<typeof ServiceStatusUpdate$Runtime>;
var ServiceStatusUpdate: MessageType<ServiceStatusUpdate> = ServiceStatusUpdate$Runtime as unknown as MessageType<ServiceStatusUpdate>;
(ServiceStatusUpdate as MutableMessageType<ServiceStatusUpdate>).runtime = proto3;
(ServiceStatusUpdate as MutableMessageType<ServiceStatusUpdate>).typeName = "aiserver.v1.ServiceStatusUpdate";
(ServiceStatusUpdate as MutableMessageType<ServiceStatusUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "codicon",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "action_to_run_on_status_update", kind: "scalar", T: 9, opt: true }
]);
var SymbolLink$Runtime = (() => class _SymbolLink extends Message<_SymbolLink> {
  declare symbolName: string;
  declare symbolSearchString: string;
  declare relativeWorkspacePath: string;
  declare roughLineNumber: number;
  constructor(data?: PartialMessage<_SymbolLink>) {
    super();
    this.symbolName = "";
    this.symbolSearchString = "";
    this.relativeWorkspacePath = "";
    this.roughLineNumber = 0;
    proto3.util.initPartial(data, this as _SymbolLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SymbolLink {
    return new _SymbolLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SymbolLink {
    return new _SymbolLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SymbolLink {
    return new _SymbolLink().fromJsonString(jsonString, options);
  }
  static equals(a: _SymbolLink | PlainMessage<_SymbolLink> | undefined | null, b2: _SymbolLink | PlainMessage<_SymbolLink> | undefined | null): boolean {
    return proto3.util.equals(_SymbolLink as unknown as MessageType<_SymbolLink>, a, b2);
  }
})();
export type SymbolLink = InstanceType<typeof SymbolLink$Runtime>;
var SymbolLink: MessageType<SymbolLink> = SymbolLink$Runtime as unknown as MessageType<SymbolLink>;
(SymbolLink as MutableMessageType<SymbolLink>).runtime = proto3;
(SymbolLink as MutableMessageType<SymbolLink>).typeName = "aiserver.v1.SymbolLink";
(SymbolLink as MutableMessageType<SymbolLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "symbol_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "symbol_search_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "rough_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var FileLink$Runtime = (() => class _FileLink extends Message<_FileLink> {
  declare displayName: string;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_FileLink>) {
    super();
    this.displayName = "";
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _FileLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileLink {
    return new _FileLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileLink {
    return new _FileLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileLink {
    return new _FileLink().fromJsonString(jsonString, options);
  }
  static equals(a: _FileLink | PlainMessage<_FileLink> | undefined | null, b2: _FileLink | PlainMessage<_FileLink> | undefined | null): boolean {
    return proto3.util.equals(_FileLink as unknown as MessageType<_FileLink>, a, b2);
  }
})();
export type FileLink = InstanceType<typeof FileLink$Runtime>;
var FileLink: MessageType<FileLink> = FileLink$Runtime as unknown as MessageType<FileLink>;
(FileLink as MutableMessageType<FileLink>).runtime = proto3;
(FileLink as MutableMessageType<FileLink>).typeName = "aiserver.v1.FileLink";
(FileLink as MutableMessageType<FileLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "display_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RedDiff$Runtime = (() => class _RedDiff extends Message<_RedDiff> {
  declare relativeWorkspacePath: string;
  declare redRanges: SimplestRange[];
  declare redRangesReversed: SimplestRange[];
  declare startHash: string;
  declare endHash: string;
  constructor(data?: PartialMessage<_RedDiff>) {
    super();
    this.relativeWorkspacePath = "";
    this.redRanges = [];
    this.redRangesReversed = [];
    this.startHash = "";
    this.endHash = "";
    proto3.util.initPartial(data, this as _RedDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RedDiff {
    return new _RedDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RedDiff {
    return new _RedDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RedDiff {
    return new _RedDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _RedDiff | PlainMessage<_RedDiff> | undefined | null, b2: _RedDiff | PlainMessage<_RedDiff> | undefined | null): boolean {
    return proto3.util.equals(_RedDiff as unknown as MessageType<_RedDiff>, a, b2);
  }
})();
export type RedDiff = InstanceType<typeof RedDiff$Runtime>;
var RedDiff: MessageType<RedDiff> = RedDiff$Runtime as unknown as MessageType<RedDiff>;
(RedDiff as MutableMessageType<RedDiff>).runtime = proto3;
(RedDiff as MutableMessageType<RedDiff>).typeName = "aiserver.v1.RedDiff";
(RedDiff as MutableMessageType<RedDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "red_ranges", kind: "message", T: SimplestRange, repeated: true },
  { no: 3, name: "red_ranges_reversed", kind: "message", T: SimplestRange, repeated: true },
  {
    no: 4,
    name: "start_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "end_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessageHeader$Runtime = (() => class _ConversationMessageHeader extends Message<_ConversationMessageHeader> {
  declare bubbleId: string;
  declare serverBubbleId?: string;
  declare type: ConversationMessage_MessageType;
  constructor(data?: PartialMessage<_ConversationMessageHeader>) {
    super();
    this.bubbleId = "";
    this.type = ConversationMessage_MessageType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ConversationMessageHeader);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessageHeader {
    return new _ConversationMessageHeader().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessageHeader {
    return new _ConversationMessageHeader().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessageHeader {
    return new _ConversationMessageHeader().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessageHeader | PlainMessage<_ConversationMessageHeader> | undefined | null, b2: _ConversationMessageHeader | PlainMessage<_ConversationMessageHeader> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessageHeader as unknown as MessageType<_ConversationMessageHeader>, a, b2);
  }
})();
export type ConversationMessageHeader = InstanceType<typeof ConversationMessageHeader$Runtime>;
var ConversationMessageHeader: MessageType<ConversationMessageHeader> = ConversationMessageHeader$Runtime as unknown as MessageType<ConversationMessageHeader>;
(ConversationMessageHeader as MutableMessageType<ConversationMessageHeader>).runtime = proto3;
(ConversationMessageHeader as MutableMessageType<ConversationMessageHeader>).typeName = "aiserver.v1.ConversationMessageHeader";
(ConversationMessageHeader as MutableMessageType<ConversationMessageHeader>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "server_bubble_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(ConversationMessage_MessageType) }
]);
var DiffFile$Runtime = (() => class _DiffFile extends Message<_DiffFile> {
  declare fileDetails: string;
  declare fileName: string;
  constructor(data?: PartialMessage<_DiffFile>) {
    super();
    this.fileDetails = "";
    this.fileName = "";
    proto3.util.initPartial(data, this as _DiffFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiffFile {
    return new _DiffFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiffFile {
    return new _DiffFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiffFile {
    return new _DiffFile().fromJsonString(jsonString, options);
  }
  static equals(a: _DiffFile | PlainMessage<_DiffFile> | undefined | null, b2: _DiffFile | PlainMessage<_DiffFile> | undefined | null): boolean {
    return proto3.util.equals(_DiffFile as unknown as MessageType<_DiffFile>, a, b2);
  }
})();
export type DiffFile = InstanceType<typeof DiffFile$Runtime>;
var DiffFile: MessageType<DiffFile> = DiffFile$Runtime as unknown as MessageType<DiffFile>;
(DiffFile as MutableMessageType<DiffFile>).runtime = proto3;
(DiffFile as MutableMessageType<DiffFile>).typeName = "aiserver.v1.DiffFile";
(DiffFile as MutableMessageType<DiffFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_details",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ViewableCommitProps$Runtime = (() => class _ViewableCommitProps extends Message<_ViewableCommitProps> {
  declare description: string;
  declare message: string;
  declare files: DiffFile[];
  constructor(data?: PartialMessage<_ViewableCommitProps>) {
    super();
    this.description = "";
    this.message = "";
    this.files = [];
    proto3.util.initPartial(data, this as _ViewableCommitProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ViewableCommitProps {
    return new _ViewableCommitProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ViewableCommitProps {
    return new _ViewableCommitProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ViewableCommitProps {
    return new _ViewableCommitProps().fromJsonString(jsonString, options);
  }
  static equals(a: _ViewableCommitProps | PlainMessage<_ViewableCommitProps> | undefined | null, b2: _ViewableCommitProps | PlainMessage<_ViewableCommitProps> | undefined | null): boolean {
    return proto3.util.equals(_ViewableCommitProps as unknown as MessageType<_ViewableCommitProps>, a, b2);
  }
})();
export type ViewableCommitProps = InstanceType<typeof ViewableCommitProps$Runtime>;
var ViewableCommitProps: MessageType<ViewableCommitProps> = ViewableCommitProps$Runtime as unknown as MessageType<ViewableCommitProps>;
(ViewableCommitProps as MutableMessageType<ViewableCommitProps>).runtime = proto3;
(ViewableCommitProps as MutableMessageType<ViewableCommitProps>).typeName = "aiserver.v1.ViewableCommitProps";
(ViewableCommitProps as MutableMessageType<ViewableCommitProps>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "files", kind: "message", T: DiffFile, repeated: true }
]);
var ViewablePRProps$Runtime = (() => class _ViewablePRProps extends Message<_ViewablePRProps> {
  declare title: string;
  declare body: string;
  declare files: DiffFile[];
  constructor(data?: PartialMessage<_ViewablePRProps>) {
    super();
    this.title = "";
    this.body = "";
    this.files = [];
    proto3.util.initPartial(data, this as _ViewablePRProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ViewablePRProps {
    return new _ViewablePRProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ViewablePRProps {
    return new _ViewablePRProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ViewablePRProps {
    return new _ViewablePRProps().fromJsonString(jsonString, options);
  }
  static equals(a: _ViewablePRProps | PlainMessage<_ViewablePRProps> | undefined | null, b2: _ViewablePRProps | PlainMessage<_ViewablePRProps> | undefined | null): boolean {
    return proto3.util.equals(_ViewablePRProps as unknown as MessageType<_ViewablePRProps>, a, b2);
  }
})();
export type ViewablePRProps = InstanceType<typeof ViewablePRProps$Runtime>;
var ViewablePRProps: MessageType<ViewablePRProps> = ViewablePRProps$Runtime as unknown as MessageType<ViewablePRProps>;
(ViewablePRProps as MutableMessageType<ViewablePRProps>).runtime = proto3;
(ViewablePRProps as MutableMessageType<ViewablePRProps>).typeName = "aiserver.v1.ViewablePRProps";
(ViewablePRProps as MutableMessageType<ViewablePRProps>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "files", kind: "message", T: DiffFile, repeated: true }
]);
var ViewableDiffProps$Runtime = (() => class _ViewableDiffProps extends Message<_ViewableDiffProps> {
  declare files: DiffFile[];
  declare diffPreface: string;
  constructor(data?: PartialMessage<_ViewableDiffProps>) {
    super();
    this.files = [];
    this.diffPreface = "";
    proto3.util.initPartial(data, this as _ViewableDiffProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ViewableDiffProps {
    return new _ViewableDiffProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ViewableDiffProps {
    return new _ViewableDiffProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ViewableDiffProps {
    return new _ViewableDiffProps().fromJsonString(jsonString, options);
  }
  static equals(a: _ViewableDiffProps | PlainMessage<_ViewableDiffProps> | undefined | null, b2: _ViewableDiffProps | PlainMessage<_ViewableDiffProps> | undefined | null): boolean {
    return proto3.util.equals(_ViewableDiffProps as unknown as MessageType<_ViewableDiffProps>, a, b2);
  }
})();
export type ViewableDiffProps = InstanceType<typeof ViewableDiffProps$Runtime>;
var ViewableDiffProps: MessageType<ViewableDiffProps> = ViewableDiffProps$Runtime as unknown as MessageType<ViewableDiffProps>;
(ViewableDiffProps as MutableMessageType<ViewableDiffProps>).runtime = proto3;
(ViewableDiffProps as MutableMessageType<ViewableDiffProps>).typeName = "aiserver.v1.ViewableDiffProps";
(ViewableDiffProps as MutableMessageType<ViewableDiffProps>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: DiffFile, repeated: true },
  {
    no: 2,
    name: "diff_preface",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ViewableGitContext$Runtime = (() => class _ViewableGitContext extends Message<_ViewableGitContext> {
  declare commitData?: ViewableCommitProps;
  declare pullRequestData?: ViewablePRProps;
  declare diffData: ViewableDiffProps[];
  constructor(data?: PartialMessage<_ViewableGitContext>) {
    super();
    this.diffData = [];
    proto3.util.initPartial(data, this as _ViewableGitContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ViewableGitContext {
    return new _ViewableGitContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ViewableGitContext {
    return new _ViewableGitContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ViewableGitContext {
    return new _ViewableGitContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ViewableGitContext | PlainMessage<_ViewableGitContext> | undefined | null, b2: _ViewableGitContext | PlainMessage<_ViewableGitContext> | undefined | null): boolean {
    return proto3.util.equals(_ViewableGitContext as unknown as MessageType<_ViewableGitContext>, a, b2);
  }
})();
export type ViewableGitContext = InstanceType<typeof ViewableGitContext$Runtime>;
var ViewableGitContext: MessageType<ViewableGitContext> = ViewableGitContext$Runtime as unknown as MessageType<ViewableGitContext>;
(ViewableGitContext as MutableMessageType<ViewableGitContext>).runtime = proto3;
(ViewableGitContext as MutableMessageType<ViewableGitContext>).typeName = "aiserver.v1.ViewableGitContext";
(ViewableGitContext as MutableMessageType<ViewableGitContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "commit_data", kind: "message", T: ViewableCommitProps, opt: true },
  { no: 2, name: "pull_request_data", kind: "message", T: ViewablePRProps, opt: true },
  { no: 3, name: "diff_data", kind: "message", T: ViewableDiffProps, repeated: true }
]);
var ConversationMessage$Runtime = (() => class _ConversationMessage extends Message<_ConversationMessage> {
  declare text: string;
  declare type: ConversationMessage_MessageType;
  declare attachedCodeChunks: ConversationMessage_CodeChunk[];
  declare codebaseContextChunks: CodeBlock[];
  declare commits: Commit[];
  declare pullRequests: PullRequest[];
  declare gitDiffs: GitDiff[];
  declare assistantSuggestedDiffs: SimpleFileDiff[];
  declare interpreterResults: InterpreterResult[];
  declare images: ImageProto2[];
  declare attachedFolders: string[];
  declare approximateLintErrors: ConversationMessage_ApproximateLintError[];
  declare bubbleId: string;
  declare serverBubbleId?: string;
  declare attachedFoldersNew: FolderInfo[];
  declare lints: ConversationMessage_Lints[];
  declare userResponsesToSuggestedCodeBlocks: UserResponseToSuggestedCodeBlock[];
  declare relevantFiles: string[];
  declare toolResults: ConversationMessage_ToolResult[];
  declare notepads: ConversationMessage_NotepadContext[];
  declare isCapabilityIteration?: boolean;
  declare capabilities: ComposerCapabilityRequest[];
  declare editTrailContexts: ConversationMessage_EditTrailContext[];
  declare suggestedCodeBlocks: SuggestedCodeBlock[];
  declare diffsForCompressingFiles: RedDiff[];
  declare multiFileLinterErrors: LinterErrorsWithoutFileContents[];
  declare diffHistories: DiffHistoryData[];
  declare recentlyViewedFiles: ConversationMessage_CodeChunk[];
  declare recentLocationsHistory: ConversationMessage_RecentLocation[];
  declare isAgentic: boolean;
  declare fileDiffTrajectories: ComposerFileDiffHistory[];
  declare conversationSummary?: ConversationSummary2;
  declare existedSubsequentTerminalCommand: boolean;
  declare existedPreviousTerminalCommand: boolean;
  declare docsReferences: DocsReference[];
  declare webReferences: WebReference[];
  declare aiWebSearchResults: AiWebSearchResult[];
  declare gitContext?: ViewableGitContext;
  declare attachedFoldersListDirResults: ListDirResult[];
  declare cachedConversationSummary?: ConversationSummary2;
  declare humanChanges: ConversationMessage_HumanChange[];
  declare attachedHumanChanges: boolean;
  declare summarizedComposers: ConversationMessage_ComposerContext[];
  declare cursorRules: CursorRule2[];
  declare contextPieces: ContextPiece[];
  declare thinking?: ConversationMessage_Thinking;
  declare allThinkingBlocks: ConversationMessage_Thinking[];
  declare thinkingStyle?: ConversationMessage_ThinkingStyle;
  declare unifiedMode?: StreamUnifiedChatRequest_UnifiedMode;
  declare agentMode?: AgentMode;
  declare diffsSinceLastApply: ConversationMessage_DiffSinceLastApply[];
  declare deletedFiles: ConversationMessage_DeletedFile[];
  declare usageUuid?: string;
  declare supportedTools: ClientSideToolV2[];
  declare currentFileLocationData?: CurrentFileLocationData;
  declare editToolSupportsSearchAndReplace?: boolean;
  declare lastTerminalCwd?: string;
  declare userExplicitlyAskedToGenerateCursorRules?: boolean;
  declare consoleLogs: RCPLogEntry[];
  declare richText?: string;
  declare knowledgeItems: ConversationMessage_KnowledgeItem[];
  declare uiElementPicked: RCPUIElementPicked[];
  declare userExplicitlyAskedToAddToKnowledgeBase?: boolean;
  declare documentationSelections: ConversationMessage_DocumentationSelection[];
  declare externalLinks: ComposerExternalLink[];
  declare useWeb?: boolean;
  declare projectLayouts: ProjectLayout[];
  declare thinkingDurationMs?: number;
  declare stepDurationMs?: number;
  declare subagentReturn?: SubagentReturnCall;
  declare isSimpleLoopingMessage?: boolean;
  declare capabilityContexts: ComposerCapabilityContext[];
  declare checkpointCommitHash?: string;
  declare gitStatusRaw?: string;
  declare todos: TodoItem2[];
  declare isReviewEditsFollowup?: boolean;
  declare requestId: string;
  declare ideEditorsState?: ConversationMessage_IdeEditorsState;
  declare contextWindowStatus?: ContextWindowStatus;
  declare isPlanExecution?: boolean;
  declare createdAt: string;
  declare modelInfo?: ModelInfo;
  declare isQuickSearchQuery?: boolean;
  declare planUpdate?: ConversationMessage_PlanUpdate;
  declare isSimulatedMsg?: boolean;
  declare simulatedMsgReason?: SimulatedMsgReason;
  declare simulatedMessageMetadata?: ConversationMessage_SimulatedMessageMetadata;
  declare mcpDescriptors: ConversationMessage_McpDescriptor[];
  declare workspaceProjectDir?: string;
  declare workspaceUris: string[];
  declare debugModeConfig?: DebugModeConfig;
  declare textBlobId?: Uint8Array;
  declare richTextBlobId?: Uint8Array;
  declare cursorCommands: SelectedCursorCommand[];
  declare cursorCommandsExplicitlySet: boolean;
  declare pastChats: SelectedPastChat[];
  declare pastChatsExplicitlySet: boolean;
  declare triggeringUserInfo?: TriggeringUserInfo;
  constructor(data?: PartialMessage<_ConversationMessage>) {
    super();
    this.text = "";
    this.type = ConversationMessage_MessageType.UNSPECIFIED;
    this.attachedCodeChunks = [];
    this.codebaseContextChunks = [];
    this.commits = [];
    this.pullRequests = [];
    this.gitDiffs = [];
    this.assistantSuggestedDiffs = [];
    this.interpreterResults = [];
    this.images = [];
    this.attachedFolders = [];
    this.approximateLintErrors = [];
    this.bubbleId = "";
    this.attachedFoldersNew = [];
    this.lints = [];
    this.userResponsesToSuggestedCodeBlocks = [];
    this.relevantFiles = [];
    this.toolResults = [];
    this.notepads = [];
    this.capabilities = [];
    this.editTrailContexts = [];
    this.suggestedCodeBlocks = [];
    this.diffsForCompressingFiles = [];
    this.multiFileLinterErrors = [];
    this.diffHistories = [];
    this.recentlyViewedFiles = [];
    this.recentLocationsHistory = [];
    this.isAgentic = false;
    this.fileDiffTrajectories = [];
    this.existedSubsequentTerminalCommand = false;
    this.existedPreviousTerminalCommand = false;
    this.docsReferences = [];
    this.webReferences = [];
    this.aiWebSearchResults = [];
    this.attachedFoldersListDirResults = [];
    this.humanChanges = [];
    this.attachedHumanChanges = false;
    this.summarizedComposers = [];
    this.cursorRules = [];
    this.contextPieces = [];
    this.allThinkingBlocks = [];
    this.diffsSinceLastApply = [];
    this.deletedFiles = [];
    this.supportedTools = [];
    this.consoleLogs = [];
    this.knowledgeItems = [];
    this.uiElementPicked = [];
    this.documentationSelections = [];
    this.externalLinks = [];
    this.projectLayouts = [];
    this.capabilityContexts = [];
    this.todos = [];
    this.requestId = "";
    this.createdAt = "";
    this.mcpDescriptors = [];
    this.workspaceUris = [];
    this.cursorCommands = [];
    this.cursorCommandsExplicitlySet = false;
    this.pastChats = [];
    this.pastChatsExplicitlySet = false;
    proto3.util.initPartial(data, this as _ConversationMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage {
    return new _ConversationMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage {
    return new _ConversationMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage {
    return new _ConversationMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage | PlainMessage<_ConversationMessage> | undefined | null, b2: _ConversationMessage | PlainMessage<_ConversationMessage> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage as unknown as MessageType<_ConversationMessage>, a, b2);
  }
})();
export type ConversationMessage = InstanceType<typeof ConversationMessage$Runtime>;
var ConversationMessage: MessageType<ConversationMessage> = ConversationMessage$Runtime as unknown as MessageType<ConversationMessage>;
(ConversationMessage as MutableMessageType<ConversationMessage>).runtime = proto3;
(ConversationMessage as MutableMessageType<ConversationMessage>).typeName = "aiserver.v1.ConversationMessage";
(ConversationMessage as MutableMessageType<ConversationMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ConversationMessage_MessageType) },
  { no: 3, name: "attached_code_chunks", kind: "message", T: ConversationMessage_CodeChunk, repeated: true },
  { no: 4, name: "codebase_context_chunks", kind: "message", T: CodeBlock, repeated: true },
  { no: 5, name: "commits", kind: "message", T: Commit, repeated: true },
  { no: 6, name: "pull_requests", kind: "message", T: PullRequest, repeated: true },
  { no: 7, name: "git_diffs", kind: "message", T: GitDiff, repeated: true },
  { no: 8, name: "assistant_suggested_diffs", kind: "message", T: SimpleFileDiff, repeated: true },
  { no: 9, name: "interpreter_results", kind: "message", T: InterpreterResult, repeated: true },
  { no: 10, name: "images", kind: "message", T: ImageProto2, repeated: true },
  { no: 11, name: "attached_folders", kind: "scalar", T: 9, repeated: true },
  { no: 12, name: "approximate_lint_errors", kind: "message", T: ConversationMessage_ApproximateLintError, repeated: true },
  {
    no: 13,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 32, name: "server_bubble_id", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "attached_folders_new", kind: "message", T: FolderInfo, repeated: true },
  { no: 15, name: "lints", kind: "message", T: ConversationMessage_Lints, repeated: true },
  { no: 16, name: "user_responses_to_suggested_code_blocks", kind: "message", T: UserResponseToSuggestedCodeBlock, repeated: true },
  { no: 17, name: "relevant_files", kind: "scalar", T: 9, repeated: true },
  { no: 18, name: "tool_results", kind: "message", T: ConversationMessage_ToolResult, repeated: true },
  { no: 19, name: "notepads", kind: "message", T: ConversationMessage_NotepadContext, repeated: true },
  { no: 20, name: "is_capability_iteration", kind: "scalar", T: 8, opt: true },
  { no: 21, name: "capabilities", kind: "message", T: ComposerCapabilityRequest, repeated: true },
  { no: 22, name: "edit_trail_contexts", kind: "message", T: ConversationMessage_EditTrailContext, repeated: true },
  { no: 23, name: "suggested_code_blocks", kind: "message", T: SuggestedCodeBlock, repeated: true },
  { no: 24, name: "diffs_for_compressing_files", kind: "message", T: RedDiff, repeated: true },
  { no: 25, name: "multi_file_linter_errors", kind: "message", T: LinterErrorsWithoutFileContents, repeated: true },
  { no: 26, name: "diff_histories", kind: "message", T: DiffHistoryData, repeated: true },
  { no: 27, name: "recently_viewed_files", kind: "message", T: ConversationMessage_CodeChunk, repeated: true },
  { no: 28, name: "recent_locations_history", kind: "message", T: ConversationMessage_RecentLocation, repeated: true },
  {
    no: 29,
    name: "is_agentic",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 30, name: "file_diff_trajectories", kind: "message", T: ComposerFileDiffHistory, repeated: true },
  { no: 31, name: "conversation_summary", kind: "message", T: ConversationSummary2, opt: true },
  {
    no: 33,
    name: "existed_subsequent_terminal_command",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 34,
    name: "existed_previous_terminal_command",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 35, name: "docs_references", kind: "message", T: DocsReference, repeated: true },
  { no: 36, name: "web_references", kind: "message", T: WebReference, repeated: true },
  { no: 75, name: "ai_web_search_results", kind: "message", T: AiWebSearchResult, repeated: true },
  { no: 37, name: "git_context", kind: "message", T: ViewableGitContext, opt: true },
  { no: 38, name: "attached_folders_list_dir_results", kind: "message", T: ListDirResult, repeated: true },
  { no: 39, name: "cached_conversation_summary", kind: "message", T: ConversationSummary2, opt: true },
  { no: 40, name: "human_changes", kind: "message", T: ConversationMessage_HumanChange, repeated: true },
  {
    no: 41,
    name: "attached_human_changes",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 42, name: "summarized_composers", kind: "message", T: ConversationMessage_ComposerContext, repeated: true },
  { no: 43, name: "cursor_rules", kind: "message", T: CursorRule2, repeated: true },
  { no: 44, name: "context_pieces", kind: "message", T: ContextPiece, repeated: true },
  { no: 45, name: "thinking", kind: "message", T: ConversationMessage_Thinking, opt: true },
  { no: 46, name: "all_thinking_blocks", kind: "message", T: ConversationMessage_Thinking, repeated: true },
  { no: 85, name: "thinking_style", kind: "enum", T: proto3.getEnumType(ConversationMessage_ThinkingStyle), opt: true },
  { no: 47, name: "unified_mode", kind: "enum", T: proto3.getEnumType(StreamUnifiedChatRequest_UnifiedMode), opt: true },
  { no: 98, name: "agent_mode", kind: "enum", T: proto3.getEnumType(AgentMode), opt: true },
  { no: 48, name: "diffs_since_last_apply", kind: "message", T: ConversationMessage_DiffSinceLastApply, repeated: true },
  { no: 49, name: "deleted_files", kind: "message", T: ConversationMessage_DeletedFile, repeated: true },
  { no: 50, name: "usage_uuid", kind: "scalar", T: 9, opt: true },
  { no: 51, name: "supported_tools", kind: "enum", T: proto3.getEnumType(ClientSideToolV2), repeated: true },
  { no: 52, name: "current_file_location_data", kind: "message", T: CurrentFileLocationData, opt: true },
  { no: 53, name: "edit_tool_supports_search_and_replace", kind: "scalar", T: 8, opt: true },
  { no: 54, name: "last_terminal_cwd", kind: "scalar", T: 9, opt: true },
  { no: 55, name: "user_explicitly_asked_to_generate_cursor_rules", kind: "scalar", T: 8, opt: true },
  { no: 56, name: "console_logs", kind: "message", T: RCPLogEntry, repeated: true },
  { no: 57, name: "rich_text", kind: "scalar", T: 9, opt: true },
  { no: 58, name: "knowledge_items", kind: "message", T: ConversationMessage_KnowledgeItem, repeated: true },
  { no: 59, name: "ui_element_picked", kind: "message", T: RCPUIElementPicked, repeated: true },
  { no: 60, name: "user_explicitly_asked_to_add_to_knowledge_base", kind: "scalar", T: 8, opt: true },
  { no: 61, name: "documentation_selections", kind: "message", T: ConversationMessage_DocumentationSelection, repeated: true },
  { no: 62, name: "external_links", kind: "message", T: ComposerExternalLink, repeated: true },
  { no: 63, name: "use_web", kind: "scalar", T: 8, opt: true },
  { no: 64, name: "project_layouts", kind: "message", T: ProjectLayout, repeated: true },
  { no: 65, name: "thinking_duration_ms", kind: "scalar", T: 5, opt: true },
  { no: 88, name: "step_duration_ms", kind: "scalar", T: 5, opt: true },
  { no: 66, name: "subagent_return", kind: "message", T: SubagentReturnCall, opt: true },
  { no: 67, name: "is_simple_looping_message", kind: "scalar", T: 8, opt: true },
  { no: 68, name: "capability_contexts", kind: "message", T: ComposerCapabilityContext, repeated: true },
  { no: 69, name: "checkpoint_commit_hash", kind: "scalar", T: 9, opt: true },
  { no: 70, name: "git_status_raw", kind: "scalar", T: 9, opt: true },
  { no: 71, name: "todos", kind: "message", T: TodoItem2, repeated: true },
  { no: 72, name: "is_review_edits_followup", kind: "scalar", T: 8, opt: true },
  {
    no: 74,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 73, name: "ide_editors_state", kind: "message", T: ConversationMessage_IdeEditorsState, opt: true },
  { no: 76, name: "context_window_status", kind: "message", T: ContextWindowStatus, opt: true },
  { no: 77, name: "is_plan_execution", kind: "scalar", T: 8, opt: true },
  {
    no: 78,
    name: "created_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 79, name: "model_info", kind: "message", T: ModelInfo },
  { no: 80, name: "is_quick_search_query", kind: "scalar", T: 8, opt: true },
  { no: 81, name: "plan_update", kind: "message", T: ConversationMessage_PlanUpdate, opt: true },
  { no: 82, name: "is_simulated_msg", kind: "scalar", T: 8, opt: true },
  { no: 95, name: "simulated_msg_reason", kind: "enum", T: proto3.getEnumType(SimulatedMsgReason), opt: true },
  { no: 97, name: "simulated_message_metadata", kind: "message", T: ConversationMessage_SimulatedMessageMetadata, opt: true },
  { no: 83, name: "mcp_descriptors", kind: "message", T: ConversationMessage_McpDescriptor, repeated: true },
  { no: 84, name: "workspace_project_dir", kind: "scalar", T: 9, opt: true },
  { no: 87, name: "workspace_uris", kind: "scalar", T: 9, repeated: true },
  { no: 86, name: "debug_mode_config", kind: "message", T: DebugModeConfig, opt: true },
  { no: 89, name: "text_blob_id", kind: "scalar", T: 12, opt: true },
  { no: 90, name: "rich_text_blob_id", kind: "scalar", T: 12, opt: true },
  { no: 91, name: "cursor_commands", kind: "message", T: SelectedCursorCommand, repeated: true },
  {
    no: 92,
    name: "cursor_commands_explicitly_set",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 93, name: "past_chats", kind: "message", T: SelectedPastChat, repeated: true },
  {
    no: 94,
    name: "past_chats_explicitly_set",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 96, name: "triggering_user_info", kind: "message", T: TriggeringUserInfo, opt: true }
]);
(function(ConversationMessage_MessageType2) {
  ConversationMessage_MessageType2[ConversationMessage_MessageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ConversationMessage_MessageType2[ConversationMessage_MessageType2["HUMAN"] = 1] = "HUMAN";
  ConversationMessage_MessageType2[ConversationMessage_MessageType2["AI"] = 2] = "AI";
})(ConversationMessage_MessageType! || (ConversationMessage_MessageType = {} as typeof ConversationMessage_MessageType));
proto3.util.setEnumType(ConversationMessage_MessageType, "aiserver.v1.ConversationMessage.MessageType", [
  { no: 0, name: "MESSAGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "MESSAGE_TYPE_HUMAN" },
  { no: 2, name: "MESSAGE_TYPE_AI" }
]);
(function(ConversationMessage_ThinkingStyle2) {
  ConversationMessage_ThinkingStyle2[ConversationMessage_ThinkingStyle2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ConversationMessage_ThinkingStyle2[ConversationMessage_ThinkingStyle2["DEFAULT"] = 1] = "DEFAULT";
  ConversationMessage_ThinkingStyle2[ConversationMessage_ThinkingStyle2["CODEX"] = 2] = "CODEX";
  ConversationMessage_ThinkingStyle2[ConversationMessage_ThinkingStyle2["GPT5"] = 3] = "GPT5";
})(ConversationMessage_ThinkingStyle! || (ConversationMessage_ThinkingStyle = {} as typeof ConversationMessage_ThinkingStyle));
proto3.util.setEnumType(ConversationMessage_ThinkingStyle, "aiserver.v1.ConversationMessage.ThinkingStyle", [
  { no: 0, name: "THINKING_STYLE_UNSPECIFIED" },
  { no: 1, name: "THINKING_STYLE_DEFAULT" },
  { no: 2, name: "THINKING_STYLE_CODEX" },
  { no: 3, name: "THINKING_STYLE_GPT5" }
]);
var ConversationMessage_CodeChunk$Runtime = (() => class _ConversationMessage_CodeChunk extends Message<_ConversationMessage_CodeChunk> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare lines: string[];
  declare summarizationStrategy?: ConversationMessage_CodeChunk_SummarizationStrategy;
  declare languageIdentifier: string;
  declare intent?: ConversationMessage_CodeChunk_Intent;
  declare isFinalVersion?: boolean;
  declare isFirstVersion?: boolean;
  declare contentsAreMissing?: boolean;
  declare isOnlyIncludedFromFolder?: boolean;
  declare codeChunkGitContext?: ConversationMessage_CodeChunk_CodeChunkGitContext;
  constructor(data?: PartialMessage<_ConversationMessage_CodeChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.lines = [];
    this.languageIdentifier = "";
    proto3.util.initPartial(data, this as _ConversationMessage_CodeChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_CodeChunk {
    return new _ConversationMessage_CodeChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk {
    return new _ConversationMessage_CodeChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk {
    return new _ConversationMessage_CodeChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_CodeChunk | PlainMessage<_ConversationMessage_CodeChunk> | undefined | null, b2: _ConversationMessage_CodeChunk | PlainMessage<_ConversationMessage_CodeChunk> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_CodeChunk as unknown as MessageType<_ConversationMessage_CodeChunk>, a, b2);
  }
})();
export type ConversationMessage_CodeChunk = InstanceType<typeof ConversationMessage_CodeChunk$Runtime>;
var ConversationMessage_CodeChunk: MessageType<ConversationMessage_CodeChunk> = ConversationMessage_CodeChunk$Runtime as unknown as MessageType<ConversationMessage_CodeChunk>;
(ConversationMessage_CodeChunk as MutableMessageType<ConversationMessage_CodeChunk>).runtime = proto3;
(ConversationMessage_CodeChunk as MutableMessageType<ConversationMessage_CodeChunk>).typeName = "aiserver.v1.ConversationMessage.CodeChunk";
(ConversationMessage_CodeChunk as MutableMessageType<ConversationMessage_CodeChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "summarization_strategy", kind: "enum", T: proto3.getEnumType(ConversationMessage_CodeChunk_SummarizationStrategy), opt: true },
  {
    no: 5,
    name: "language_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "intent", kind: "enum", T: proto3.getEnumType(ConversationMessage_CodeChunk_Intent), opt: true },
  { no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "contents_are_missing", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "is_only_included_from_folder", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "code_chunk_git_context", kind: "message", T: ConversationMessage_CodeChunk_CodeChunkGitContext, opt: true }
]);
(function(ConversationMessage_CodeChunk_Intent2) {
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["COMPOSER_FILE"] = 1] = "COMPOSER_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["COMPRESSED_COMPOSER_FILE"] = 2] = "COMPRESSED_COMPOSER_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["RECENTLY_VIEWED_FILE"] = 3] = "RECENTLY_VIEWED_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["OUTLINE"] = 4] = "OUTLINE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["MENTIONED_FILE"] = 5] = "MENTIONED_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["CODE_SELECTION"] = 6] = "CODE_SELECTION";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["AI_EDITED_FILE"] = 7] = "AI_EDITED_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["VISIBLE_FILE"] = 8] = "VISIBLE_FILE";
  ConversationMessage_CodeChunk_Intent2[ConversationMessage_CodeChunk_Intent2["TERMINAL_SELECTION"] = 9] = "TERMINAL_SELECTION";
})(ConversationMessage_CodeChunk_Intent! || (ConversationMessage_CodeChunk_Intent = {} as typeof ConversationMessage_CodeChunk_Intent));
proto3.util.setEnumType(ConversationMessage_CodeChunk_Intent, "aiserver.v1.ConversationMessage.CodeChunk.Intent", [
  { no: 0, name: "INTENT_UNSPECIFIED" },
  { no: 1, name: "INTENT_COMPOSER_FILE" },
  { no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE" },
  { no: 3, name: "INTENT_RECENTLY_VIEWED_FILE" },
  { no: 4, name: "INTENT_OUTLINE" },
  { no: 5, name: "INTENT_MENTIONED_FILE" },
  { no: 6, name: "INTENT_CODE_SELECTION" },
  { no: 7, name: "INTENT_AI_EDITED_FILE" },
  { no: 8, name: "INTENT_VISIBLE_FILE" },
  { no: 9, name: "INTENT_TERMINAL_SELECTION" }
]);
(function(ConversationMessage_CodeChunk_SummarizationStrategy2) {
  ConversationMessage_CodeChunk_SummarizationStrategy2[ConversationMessage_CodeChunk_SummarizationStrategy2["NONE_UNSPECIFIED"] = 0] = "NONE_UNSPECIFIED";
  ConversationMessage_CodeChunk_SummarizationStrategy2[ConversationMessage_CodeChunk_SummarizationStrategy2["SUMMARIZED"] = 1] = "SUMMARIZED";
  ConversationMessage_CodeChunk_SummarizationStrategy2[ConversationMessage_CodeChunk_SummarizationStrategy2["EMBEDDED"] = 2] = "EMBEDDED";
})(ConversationMessage_CodeChunk_SummarizationStrategy! || (ConversationMessage_CodeChunk_SummarizationStrategy = {} as typeof ConversationMessage_CodeChunk_SummarizationStrategy));
proto3.util.setEnumType(ConversationMessage_CodeChunk_SummarizationStrategy, "aiserver.v1.ConversationMessage.CodeChunk.SummarizationStrategy", [
  { no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED" },
  { no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED" },
  { no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED" }
]);
var ConversationMessage_CodeChunk_CodeChunkGitContext$Runtime = (() => class _ConversationMessage_CodeChunk_CodeChunkGitContext extends Message<_ConversationMessage_CodeChunk_CodeChunkGitContext> {
  declare gitInfo: ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo[];
  constructor(data?: PartialMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext>) {
    super();
    this.gitInfo = [];
    proto3.util.initPartial(data, this as _ConversationMessage_CodeChunk_CodeChunkGitContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_CodeChunk_CodeChunkGitContext | PlainMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext> | undefined | null, b2: _ConversationMessage_CodeChunk_CodeChunkGitContext | PlainMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_CodeChunk_CodeChunkGitContext as unknown as MessageType<_ConversationMessage_CodeChunk_CodeChunkGitContext>, a, b2);
  }
})();
export type ConversationMessage_CodeChunk_CodeChunkGitContext = InstanceType<typeof ConversationMessage_CodeChunk_CodeChunkGitContext$Runtime>;
var ConversationMessage_CodeChunk_CodeChunkGitContext: MessageType<ConversationMessage_CodeChunk_CodeChunkGitContext> = ConversationMessage_CodeChunk_CodeChunkGitContext$Runtime as unknown as MessageType<ConversationMessage_CodeChunk_CodeChunkGitContext>;
(ConversationMessage_CodeChunk_CodeChunkGitContext as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext>).runtime = proto3;
(ConversationMessage_CodeChunk_CodeChunkGitContext as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext>).typeName = "aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext";
(ConversationMessage_CodeChunk_CodeChunkGitContext as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "git_info", kind: "message", T: ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo, repeated: true }
]);
var ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo$Runtime = (() => class _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo extends Message<_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo> {
  declare commit: string;
  declare author: string;
  declare date: string;
  declare message: string;
  constructor(data?: PartialMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>) {
    super();
    this.commit = "";
    this.author = "";
    this.date = "";
    this.message = "";
    proto3.util.initPartial(data, this as _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo {
    return new _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo | PlainMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo> | undefined | null, b2: _ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo | PlainMessage<_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo as unknown as MessageType<_ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>, a, b2);
  }
})();
export type ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo = InstanceType<typeof ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo$Runtime>;
var ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo: MessageType<ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo> = ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo$Runtime as unknown as MessageType<ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>;
(ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>).runtime = proto3;
(ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>).typeName = "aiserver.v1.ConversationMessage.CodeChunk.CodeChunkGitContext.CodeChunkGitInfo";
(ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo as MutableMessageType<ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "author",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessage_ToolResult$Runtime = (() => class _ConversationMessage_ToolResult extends Message<_ConversationMessage_ToolResult> {
  declare toolCallId: string;
  declare toolName: string;
  declare toolIndex: number;
  declare modelCallId?: string;
  declare args: string;
  declare rawArgs: string;
  declare attachedCodeChunks: ConversationMessage_CodeChunk[];
  declare content?: string;
  declare result?: ClientSideToolV2Result;
  declare error?: ToolResultError;
  declare images: ImageProto2[];
  declare toolCall?: ClientSideToolV2Call;
  declare startedAtMs?: bigint;
  declare completedAtMs?: bigint;
  constructor(data?: PartialMessage<_ConversationMessage_ToolResult>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.toolIndex = 0;
    this.args = "";
    this.rawArgs = "";
    this.attachedCodeChunks = [];
    this.images = [];
    proto3.util.initPartial(data, this as _ConversationMessage_ToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_ToolResult {
    return new _ConversationMessage_ToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_ToolResult {
    return new _ConversationMessage_ToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_ToolResult {
    return new _ConversationMessage_ToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_ToolResult | PlainMessage<_ConversationMessage_ToolResult> | undefined | null, b2: _ConversationMessage_ToolResult | PlainMessage<_ConversationMessage_ToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_ToolResult as unknown as MessageType<_ConversationMessage_ToolResult>, a, b2);
  }
})();
export type ConversationMessage_ToolResult = InstanceType<typeof ConversationMessage_ToolResult$Runtime>;
var ConversationMessage_ToolResult: MessageType<ConversationMessage_ToolResult> = ConversationMessage_ToolResult$Runtime as unknown as MessageType<ConversationMessage_ToolResult>;
(ConversationMessage_ToolResult as MutableMessageType<ConversationMessage_ToolResult>).runtime = proto3;
(ConversationMessage_ToolResult as MutableMessageType<ConversationMessage_ToolResult>).typeName = "aiserver.v1.ConversationMessage.ToolResult";
(ConversationMessage_ToolResult as MutableMessageType<ConversationMessage_ToolResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "tool_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 12, name: "model_call_id", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "raw_args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "attached_code_chunks", kind: "message", T: ConversationMessage_CodeChunk, repeated: true },
  { no: 7, name: "content", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "result", kind: "message", T: ClientSideToolV2Result },
  { no: 9, name: "error", kind: "message", T: ToolResultError, opt: true },
  { no: 10, name: "images", kind: "message", T: ImageProto2, repeated: true },
  { no: 11, name: "tool_call", kind: "message", T: ClientSideToolV2Call, opt: true },
  { no: 13, name: "started_at_ms", kind: "scalar", T: 4, opt: true },
  { no: 14, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }
]);
var ConversationMessage_MultiRangeCodeChunk$Runtime = (() => class _ConversationMessage_MultiRangeCodeChunk extends Message<_ConversationMessage_MultiRangeCodeChunk> {
  declare ranges: ConversationMessage_MultiRangeCodeChunk_RangeWithPriority[];
  declare content: string;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ConversationMessage_MultiRangeCodeChunk>) {
    super();
    this.ranges = [];
    this.content = "";
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ConversationMessage_MultiRangeCodeChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_MultiRangeCodeChunk {
    return new _ConversationMessage_MultiRangeCodeChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_MultiRangeCodeChunk {
    return new _ConversationMessage_MultiRangeCodeChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_MultiRangeCodeChunk {
    return new _ConversationMessage_MultiRangeCodeChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_MultiRangeCodeChunk | PlainMessage<_ConversationMessage_MultiRangeCodeChunk> | undefined | null, b2: _ConversationMessage_MultiRangeCodeChunk | PlainMessage<_ConversationMessage_MultiRangeCodeChunk> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_MultiRangeCodeChunk as unknown as MessageType<_ConversationMessage_MultiRangeCodeChunk>, a, b2);
  }
})();
export type ConversationMessage_MultiRangeCodeChunk = InstanceType<typeof ConversationMessage_MultiRangeCodeChunk$Runtime>;
var ConversationMessage_MultiRangeCodeChunk: MessageType<ConversationMessage_MultiRangeCodeChunk> = ConversationMessage_MultiRangeCodeChunk$Runtime as unknown as MessageType<ConversationMessage_MultiRangeCodeChunk>;
(ConversationMessage_MultiRangeCodeChunk as MutableMessageType<ConversationMessage_MultiRangeCodeChunk>).runtime = proto3;
(ConversationMessage_MultiRangeCodeChunk as MutableMessageType<ConversationMessage_MultiRangeCodeChunk>).typeName = "aiserver.v1.ConversationMessage.MultiRangeCodeChunk";
(ConversationMessage_MultiRangeCodeChunk as MutableMessageType<ConversationMessage_MultiRangeCodeChunk>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ranges", kind: "message", T: ConversationMessage_MultiRangeCodeChunk_RangeWithPriority, repeated: true },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessage_MultiRangeCodeChunk_RangeWithPriority$Runtime = (() => class _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority extends Message<_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority> {
  declare range?: SimplestRange;
  declare priority: number;
  constructor(data?: PartialMessage<_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>) {
    super();
    this.priority = 0;
    proto3.util.initPartial(data, this as _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority {
    return new _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority {
    return new _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority {
    return new _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority | PlainMessage<_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority> | undefined | null, b2: _ConversationMessage_MultiRangeCodeChunk_RangeWithPriority | PlainMessage<_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority as unknown as MessageType<_ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>, a, b2);
  }
})();
export type ConversationMessage_MultiRangeCodeChunk_RangeWithPriority = InstanceType<typeof ConversationMessage_MultiRangeCodeChunk_RangeWithPriority$Runtime>;
var ConversationMessage_MultiRangeCodeChunk_RangeWithPriority: MessageType<ConversationMessage_MultiRangeCodeChunk_RangeWithPriority> = ConversationMessage_MultiRangeCodeChunk_RangeWithPriority$Runtime as unknown as MessageType<ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>;
(ConversationMessage_MultiRangeCodeChunk_RangeWithPriority as MutableMessageType<ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>).runtime = proto3;
(ConversationMessage_MultiRangeCodeChunk_RangeWithPriority as MutableMessageType<ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>).typeName = "aiserver.v1.ConversationMessage.MultiRangeCodeChunk.RangeWithPriority";
(ConversationMessage_MultiRangeCodeChunk_RangeWithPriority as MutableMessageType<ConversationMessage_MultiRangeCodeChunk_RangeWithPriority>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "range", kind: "message", T: SimplestRange },
  {
    no: 2,
    name: "priority",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var ConversationMessage_NotepadContext$Runtime = (() => class _ConversationMessage_NotepadContext extends Message<_ConversationMessage_NotepadContext> {
  declare name: string;
  declare text: string;
  declare attachedCodeChunks: ConversationMessage_CodeChunk[];
  declare attachedFolders: string[];
  declare commits: Commit[];
  declare pullRequests: PullRequest[];
  declare gitDiffs: GitDiff[];
  declare images: ImageProto2[];
  constructor(data?: PartialMessage<_ConversationMessage_NotepadContext>) {
    super();
    this.name = "";
    this.text = "";
    this.attachedCodeChunks = [];
    this.attachedFolders = [];
    this.commits = [];
    this.pullRequests = [];
    this.gitDiffs = [];
    this.images = [];
    proto3.util.initPartial(data, this as _ConversationMessage_NotepadContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_NotepadContext {
    return new _ConversationMessage_NotepadContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_NotepadContext {
    return new _ConversationMessage_NotepadContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_NotepadContext {
    return new _ConversationMessage_NotepadContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_NotepadContext | PlainMessage<_ConversationMessage_NotepadContext> | undefined | null, b2: _ConversationMessage_NotepadContext | PlainMessage<_ConversationMessage_NotepadContext> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_NotepadContext as unknown as MessageType<_ConversationMessage_NotepadContext>, a, b2);
  }
})();
export type ConversationMessage_NotepadContext = InstanceType<typeof ConversationMessage_NotepadContext$Runtime>;
var ConversationMessage_NotepadContext: MessageType<ConversationMessage_NotepadContext> = ConversationMessage_NotepadContext$Runtime as unknown as MessageType<ConversationMessage_NotepadContext>;
(ConversationMessage_NotepadContext as MutableMessageType<ConversationMessage_NotepadContext>).runtime = proto3;
(ConversationMessage_NotepadContext as MutableMessageType<ConversationMessage_NotepadContext>).typeName = "aiserver.v1.ConversationMessage.NotepadContext";
(ConversationMessage_NotepadContext as MutableMessageType<ConversationMessage_NotepadContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "attached_code_chunks", kind: "message", T: ConversationMessage_CodeChunk, repeated: true },
  { no: 4, name: "attached_folders", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "commits", kind: "message", T: Commit, repeated: true },
  { no: 6, name: "pull_requests", kind: "message", T: PullRequest, repeated: true },
  { no: 7, name: "git_diffs", kind: "message", T: GitDiff, repeated: true },
  { no: 8, name: "images", kind: "message", T: ImageProto2, repeated: true }
]);
var ConversationMessage_ComposerContext$Runtime = (() => class _ConversationMessage_ComposerContext extends Message<_ConversationMessage_ComposerContext> {
  declare name: string;
  declare conversationSummary?: ConversationSummary2;
  constructor(data?: PartialMessage<_ConversationMessage_ComposerContext>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _ConversationMessage_ComposerContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_ComposerContext {
    return new _ConversationMessage_ComposerContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_ComposerContext {
    return new _ConversationMessage_ComposerContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_ComposerContext {
    return new _ConversationMessage_ComposerContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_ComposerContext | PlainMessage<_ConversationMessage_ComposerContext> | undefined | null, b2: _ConversationMessage_ComposerContext | PlainMessage<_ConversationMessage_ComposerContext> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_ComposerContext as unknown as MessageType<_ConversationMessage_ComposerContext>, a, b2);
  }
})();
export type ConversationMessage_ComposerContext = InstanceType<typeof ConversationMessage_ComposerContext$Runtime>;
var ConversationMessage_ComposerContext: MessageType<ConversationMessage_ComposerContext> = ConversationMessage_ComposerContext$Runtime as unknown as MessageType<ConversationMessage_ComposerContext>;
(ConversationMessage_ComposerContext as MutableMessageType<ConversationMessage_ComposerContext>).runtime = proto3;
(ConversationMessage_ComposerContext as MutableMessageType<ConversationMessage_ComposerContext>).typeName = "aiserver.v1.ConversationMessage.ComposerContext";
(ConversationMessage_ComposerContext as MutableMessageType<ConversationMessage_ComposerContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "conversation_summary", kind: "message", T: ConversationSummary2 }
]);
var ConversationMessage_EditLocation$Runtime = (() => class _ConversationMessage_EditLocation extends Message<_ConversationMessage_EditLocation> {
  declare relativeWorkspacePath: string;
  declare range?: SimplestRange;
  declare initialRange?: SimplestRange;
  declare contextLines: string;
  declare text: string;
  declare textRange?: SimplestRange;
  constructor(data?: PartialMessage<_ConversationMessage_EditLocation>) {
    super();
    this.relativeWorkspacePath = "";
    this.contextLines = "";
    this.text = "";
    proto3.util.initPartial(data, this as _ConversationMessage_EditLocation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_EditLocation {
    return new _ConversationMessage_EditLocation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_EditLocation {
    return new _ConversationMessage_EditLocation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_EditLocation {
    return new _ConversationMessage_EditLocation().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_EditLocation | PlainMessage<_ConversationMessage_EditLocation> | undefined | null, b2: _ConversationMessage_EditLocation | PlainMessage<_ConversationMessage_EditLocation> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_EditLocation as unknown as MessageType<_ConversationMessage_EditLocation>, a, b2);
  }
})();
export type ConversationMessage_EditLocation = InstanceType<typeof ConversationMessage_EditLocation$Runtime>;
var ConversationMessage_EditLocation: MessageType<ConversationMessage_EditLocation> = ConversationMessage_EditLocation$Runtime as unknown as MessageType<ConversationMessage_EditLocation>;
(ConversationMessage_EditLocation as MutableMessageType<ConversationMessage_EditLocation>).runtime = proto3;
(ConversationMessage_EditLocation as MutableMessageType<ConversationMessage_EditLocation>).typeName = "aiserver.v1.ConversationMessage.EditLocation";
(ConversationMessage_EditLocation as MutableMessageType<ConversationMessage_EditLocation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "range", kind: "message", T: SimplestRange },
  { no: 4, name: "initial_range", kind: "message", T: SimplestRange },
  {
    no: 5,
    name: "context_lines",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "text_range", kind: "message", T: SimplestRange }
]);
var ConversationMessage_EditTrailContext$Runtime = (() => class _ConversationMessage_EditTrailContext extends Message<_ConversationMessage_EditTrailContext> {
  declare uniqueId: string;
  declare editTrailSorted: ConversationMessage_EditLocation[];
  constructor(data?: PartialMessage<_ConversationMessage_EditTrailContext>) {
    super();
    this.uniqueId = "";
    this.editTrailSorted = [];
    proto3.util.initPartial(data, this as _ConversationMessage_EditTrailContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_EditTrailContext {
    return new _ConversationMessage_EditTrailContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_EditTrailContext {
    return new _ConversationMessage_EditTrailContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_EditTrailContext {
    return new _ConversationMessage_EditTrailContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_EditTrailContext | PlainMessage<_ConversationMessage_EditTrailContext> | undefined | null, b2: _ConversationMessage_EditTrailContext | PlainMessage<_ConversationMessage_EditTrailContext> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_EditTrailContext as unknown as MessageType<_ConversationMessage_EditTrailContext>, a, b2);
  }
})();
export type ConversationMessage_EditTrailContext = InstanceType<typeof ConversationMessage_EditTrailContext$Runtime>;
var ConversationMessage_EditTrailContext: MessageType<ConversationMessage_EditTrailContext> = ConversationMessage_EditTrailContext$Runtime as unknown as MessageType<ConversationMessage_EditTrailContext>;
(ConversationMessage_EditTrailContext as MutableMessageType<ConversationMessage_EditTrailContext>).runtime = proto3;
(ConversationMessage_EditTrailContext as MutableMessageType<ConversationMessage_EditTrailContext>).typeName = "aiserver.v1.ConversationMessage.EditTrailContext";
(ConversationMessage_EditTrailContext as MutableMessageType<ConversationMessage_EditTrailContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "unique_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "edit_trail_sorted", kind: "message", T: ConversationMessage_EditLocation, repeated: true }
]);
var ConversationMessage_ApproximateLintError$Runtime = (() => class _ConversationMessage_ApproximateLintError extends Message<_ConversationMessage_ApproximateLintError> {
  declare message: string;
  declare value: string;
  declare startLine: number;
  declare endLine: number;
  declare startColumn: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_ConversationMessage_ApproximateLintError>) {
    super();
    this.message = "";
    this.value = "";
    this.startLine = 0;
    this.endLine = 0;
    this.startColumn = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _ConversationMessage_ApproximateLintError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_ApproximateLintError {
    return new _ConversationMessage_ApproximateLintError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_ApproximateLintError {
    return new _ConversationMessage_ApproximateLintError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_ApproximateLintError {
    return new _ConversationMessage_ApproximateLintError().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_ApproximateLintError | PlainMessage<_ConversationMessage_ApproximateLintError> | undefined | null, b2: _ConversationMessage_ApproximateLintError | PlainMessage<_ConversationMessage_ApproximateLintError> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_ApproximateLintError as unknown as MessageType<_ConversationMessage_ApproximateLintError>, a, b2);
  }
})();
export type ConversationMessage_ApproximateLintError = InstanceType<typeof ConversationMessage_ApproximateLintError$Runtime>;
var ConversationMessage_ApproximateLintError: MessageType<ConversationMessage_ApproximateLintError> = ConversationMessage_ApproximateLintError$Runtime as unknown as MessageType<ConversationMessage_ApproximateLintError>;
(ConversationMessage_ApproximateLintError as MutableMessageType<ConversationMessage_ApproximateLintError>).runtime = proto3;
(ConversationMessage_ApproximateLintError as MutableMessageType<ConversationMessage_ApproximateLintError>).typeName = "aiserver.v1.ConversationMessage.ApproximateLintError";
(ConversationMessage_ApproximateLintError as MutableMessageType<ConversationMessage_ApproximateLintError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ConversationMessage_Lints$Runtime = (() => class _ConversationMessage_Lints extends Message<_ConversationMessage_Lints> {
  declare lints?: GetLintsForChangeResponse;
  declare chatCodeblockModelValue: string;
  constructor(data?: PartialMessage<_ConversationMessage_Lints>) {
    super();
    this.chatCodeblockModelValue = "";
    proto3.util.initPartial(data, this as _ConversationMessage_Lints);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_Lints {
    return new _ConversationMessage_Lints().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_Lints {
    return new _ConversationMessage_Lints().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_Lints {
    return new _ConversationMessage_Lints().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_Lints | PlainMessage<_ConversationMessage_Lints> | undefined | null, b2: _ConversationMessage_Lints | PlainMessage<_ConversationMessage_Lints> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_Lints as unknown as MessageType<_ConversationMessage_Lints>, a, b2);
  }
})();
export type ConversationMessage_Lints = InstanceType<typeof ConversationMessage_Lints$Runtime>;
var ConversationMessage_Lints: MessageType<ConversationMessage_Lints> = ConversationMessage_Lints$Runtime as unknown as MessageType<ConversationMessage_Lints>;
(ConversationMessage_Lints as MutableMessageType<ConversationMessage_Lints>).runtime = proto3;
(ConversationMessage_Lints as MutableMessageType<ConversationMessage_Lints>).typeName = "aiserver.v1.ConversationMessage.Lints";
(ConversationMessage_Lints as MutableMessageType<ConversationMessage_Lints>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "lints", kind: "message", T: GetLintsForChangeResponse },
  {
    no: 2,
    name: "chat_codeblock_model_value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessage_RecentLocation$Runtime = (() => class _ConversationMessage_RecentLocation extends Message<_ConversationMessage_RecentLocation> {
  declare relativeWorkspacePath: string;
  declare lineNumber: number;
  constructor(data?: PartialMessage<_ConversationMessage_RecentLocation>) {
    super();
    this.relativeWorkspacePath = "";
    this.lineNumber = 0;
    proto3.util.initPartial(data, this as _ConversationMessage_RecentLocation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_RecentLocation {
    return new _ConversationMessage_RecentLocation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_RecentLocation {
    return new _ConversationMessage_RecentLocation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_RecentLocation {
    return new _ConversationMessage_RecentLocation().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_RecentLocation | PlainMessage<_ConversationMessage_RecentLocation> | undefined | null, b2: _ConversationMessage_RecentLocation | PlainMessage<_ConversationMessage_RecentLocation> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_RecentLocation as unknown as MessageType<_ConversationMessage_RecentLocation>, a, b2);
  }
})();
export type ConversationMessage_RecentLocation = InstanceType<typeof ConversationMessage_RecentLocation$Runtime>;
var ConversationMessage_RecentLocation: MessageType<ConversationMessage_RecentLocation> = ConversationMessage_RecentLocation$Runtime as unknown as MessageType<ConversationMessage_RecentLocation>;
(ConversationMessage_RecentLocation as MutableMessageType<ConversationMessage_RecentLocation>).runtime = proto3;
(ConversationMessage_RecentLocation as MutableMessageType<ConversationMessage_RecentLocation>).typeName = "aiserver.v1.ConversationMessage.RecentLocation";
(ConversationMessage_RecentLocation as MutableMessageType<ConversationMessage_RecentLocation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ConversationMessage_RenderedDiff$Runtime = (() => class _ConversationMessage_RenderedDiff extends Message<_ConversationMessage_RenderedDiff> {
  declare startLineNumber: number;
  declare endLineNumberExclusive: number;
  declare beforeContextLines: string[];
  declare removedLines: string[];
  declare addedLines: string[];
  declare afterContextLines: string[];
  constructor(data?: PartialMessage<_ConversationMessage_RenderedDiff>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberExclusive = 0;
    this.beforeContextLines = [];
    this.removedLines = [];
    this.addedLines = [];
    this.afterContextLines = [];
    proto3.util.initPartial(data, this as _ConversationMessage_RenderedDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_RenderedDiff {
    return new _ConversationMessage_RenderedDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_RenderedDiff {
    return new _ConversationMessage_RenderedDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_RenderedDiff {
    return new _ConversationMessage_RenderedDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_RenderedDiff | PlainMessage<_ConversationMessage_RenderedDiff> | undefined | null, b2: _ConversationMessage_RenderedDiff | PlainMessage<_ConversationMessage_RenderedDiff> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_RenderedDiff as unknown as MessageType<_ConversationMessage_RenderedDiff>, a, b2);
  }
})();
export type ConversationMessage_RenderedDiff = InstanceType<typeof ConversationMessage_RenderedDiff$Runtime>;
var ConversationMessage_RenderedDiff: MessageType<ConversationMessage_RenderedDiff> = ConversationMessage_RenderedDiff$Runtime as unknown as MessageType<ConversationMessage_RenderedDiff>;
(ConversationMessage_RenderedDiff as MutableMessageType<ConversationMessage_RenderedDiff>).runtime = proto3;
(ConversationMessage_RenderedDiff as MutableMessageType<ConversationMessage_RenderedDiff>).typeName = "aiserver.v1.ConversationMessage.RenderedDiff";
(ConversationMessage_RenderedDiff as MutableMessageType<ConversationMessage_RenderedDiff>).fields = proto3.util.newFieldList(() => [
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
var ConversationMessage_HumanChange$Runtime = (() => class _ConversationMessage_HumanChange extends Message<_ConversationMessage_HumanChange> {
  declare relativeWorkspacePath: string;
  declare renderedDiffs: ConversationMessage_RenderedDiff[];
  constructor(data?: PartialMessage<_ConversationMessage_HumanChange>) {
    super();
    this.relativeWorkspacePath = "";
    this.renderedDiffs = [];
    proto3.util.initPartial(data, this as _ConversationMessage_HumanChange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_HumanChange {
    return new _ConversationMessage_HumanChange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_HumanChange {
    return new _ConversationMessage_HumanChange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_HumanChange {
    return new _ConversationMessage_HumanChange().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_HumanChange | PlainMessage<_ConversationMessage_HumanChange> | undefined | null, b2: _ConversationMessage_HumanChange | PlainMessage<_ConversationMessage_HumanChange> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_HumanChange as unknown as MessageType<_ConversationMessage_HumanChange>, a, b2);
  }
})();
export type ConversationMessage_HumanChange = InstanceType<typeof ConversationMessage_HumanChange$Runtime>;
var ConversationMessage_HumanChange: MessageType<ConversationMessage_HumanChange> = ConversationMessage_HumanChange$Runtime as unknown as MessageType<ConversationMessage_HumanChange>;
(ConversationMessage_HumanChange as MutableMessageType<ConversationMessage_HumanChange>).runtime = proto3;
(ConversationMessage_HumanChange as MutableMessageType<ConversationMessage_HumanChange>).typeName = "aiserver.v1.ConversationMessage.HumanChange";
(ConversationMessage_HumanChange as MutableMessageType<ConversationMessage_HumanChange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "rendered_diffs", kind: "message", T: ConversationMessage_RenderedDiff, repeated: true }
]);
var ConversationMessage_Thinking$Runtime = (() => class _ConversationMessage_Thinking extends Message<_ConversationMessage_Thinking> {
  declare text: string;
  declare signature: string;
  declare redactedThinking: string;
  declare isLastThinkingChunk: boolean;
  constructor(data?: PartialMessage<_ConversationMessage_Thinking>) {
    super();
    this.text = "";
    this.signature = "";
    this.redactedThinking = "";
    this.isLastThinkingChunk = false;
    proto3.util.initPartial(data, this as _ConversationMessage_Thinking);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_Thinking {
    return new _ConversationMessage_Thinking().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_Thinking {
    return new _ConversationMessage_Thinking().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_Thinking {
    return new _ConversationMessage_Thinking().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_Thinking | PlainMessage<_ConversationMessage_Thinking> | undefined | null, b2: _ConversationMessage_Thinking | PlainMessage<_ConversationMessage_Thinking> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_Thinking as unknown as MessageType<_ConversationMessage_Thinking>, a, b2);
  }
})();
export type ConversationMessage_Thinking = InstanceType<typeof ConversationMessage_Thinking$Runtime>;
var ConversationMessage_Thinking: MessageType<ConversationMessage_Thinking> = ConversationMessage_Thinking$Runtime as unknown as MessageType<ConversationMessage_Thinking>;
(ConversationMessage_Thinking as MutableMessageType<ConversationMessage_Thinking>).runtime = proto3;
(ConversationMessage_Thinking as MutableMessageType<ConversationMessage_Thinking>).typeName = "aiserver.v1.ConversationMessage.Thinking";
(ConversationMessage_Thinking as MutableMessageType<ConversationMessage_Thinking>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "signature",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "redacted_thinking",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_last_thinking_chunk",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ConversationMessage_DiffSinceLastApply$Runtime = (() => class _ConversationMessage_DiffSinceLastApply extends Message<_ConversationMessage_DiffSinceLastApply> {
  declare relativeWorkspacePath: string;
  declare diff?: EditFileResult_FileDiff;
  declare isAccepted?: boolean;
  declare isRejected?: boolean;
  declare lastApplyChainedFromNHumanMessagesAgo?: number;
  constructor(data?: PartialMessage<_ConversationMessage_DiffSinceLastApply>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ConversationMessage_DiffSinceLastApply);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_DiffSinceLastApply {
    return new _ConversationMessage_DiffSinceLastApply().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_DiffSinceLastApply {
    return new _ConversationMessage_DiffSinceLastApply().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_DiffSinceLastApply {
    return new _ConversationMessage_DiffSinceLastApply().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_DiffSinceLastApply | PlainMessage<_ConversationMessage_DiffSinceLastApply> | undefined | null, b2: _ConversationMessage_DiffSinceLastApply | PlainMessage<_ConversationMessage_DiffSinceLastApply> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_DiffSinceLastApply as unknown as MessageType<_ConversationMessage_DiffSinceLastApply>, a, b2);
  }
})();
export type ConversationMessage_DiffSinceLastApply = InstanceType<typeof ConversationMessage_DiffSinceLastApply$Runtime>;
var ConversationMessage_DiffSinceLastApply: MessageType<ConversationMessage_DiffSinceLastApply> = ConversationMessage_DiffSinceLastApply$Runtime as unknown as MessageType<ConversationMessage_DiffSinceLastApply>;
(ConversationMessage_DiffSinceLastApply as MutableMessageType<ConversationMessage_DiffSinceLastApply>).runtime = proto3;
(ConversationMessage_DiffSinceLastApply as MutableMessageType<ConversationMessage_DiffSinceLastApply>).typeName = "aiserver.v1.ConversationMessage.DiffSinceLastApply";
(ConversationMessage_DiffSinceLastApply as MutableMessageType<ConversationMessage_DiffSinceLastApply>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff", kind: "message", T: EditFileResult_FileDiff, opt: true },
  { no: 4, name: "is_accepted", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "is_rejected", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "last_apply_chained_from_n_human_messages_ago", kind: "scalar", T: 5, opt: true }
]);
var ConversationMessage_DeletedFile$Runtime = (() => class _ConversationMessage_DeletedFile extends Message<_ConversationMessage_DeletedFile> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ConversationMessage_DeletedFile>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ConversationMessage_DeletedFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_DeletedFile {
    return new _ConversationMessage_DeletedFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_DeletedFile {
    return new _ConversationMessage_DeletedFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_DeletedFile {
    return new _ConversationMessage_DeletedFile().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_DeletedFile | PlainMessage<_ConversationMessage_DeletedFile> | undefined | null, b2: _ConversationMessage_DeletedFile | PlainMessage<_ConversationMessage_DeletedFile> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_DeletedFile as unknown as MessageType<_ConversationMessage_DeletedFile>, a, b2);
  }
})();
export type ConversationMessage_DeletedFile = InstanceType<typeof ConversationMessage_DeletedFile$Runtime>;
var ConversationMessage_DeletedFile: MessageType<ConversationMessage_DeletedFile> = ConversationMessage_DeletedFile$Runtime as unknown as MessageType<ConversationMessage_DeletedFile>;
(ConversationMessage_DeletedFile as MutableMessageType<ConversationMessage_DeletedFile>).runtime = proto3;
(ConversationMessage_DeletedFile as MutableMessageType<ConversationMessage_DeletedFile>).typeName = "aiserver.v1.ConversationMessage.DeletedFile";
(ConversationMessage_DeletedFile as MutableMessageType<ConversationMessage_DeletedFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessage_KnowledgeItem$Runtime = (() => class _ConversationMessage_KnowledgeItem extends Message<_ConversationMessage_KnowledgeItem> {
  declare title: string;
  declare knowledge: string;
  declare knowledgeId: string;
  declare isGenerated: boolean;
  constructor(data?: PartialMessage<_ConversationMessage_KnowledgeItem>) {
    super();
    this.title = "";
    this.knowledge = "";
    this.knowledgeId = "";
    this.isGenerated = false;
    proto3.util.initPartial(data, this as _ConversationMessage_KnowledgeItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_KnowledgeItem {
    return new _ConversationMessage_KnowledgeItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_KnowledgeItem {
    return new _ConversationMessage_KnowledgeItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_KnowledgeItem {
    return new _ConversationMessage_KnowledgeItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_KnowledgeItem | PlainMessage<_ConversationMessage_KnowledgeItem> | undefined | null, b2: _ConversationMessage_KnowledgeItem | PlainMessage<_ConversationMessage_KnowledgeItem> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_KnowledgeItem as unknown as MessageType<_ConversationMessage_KnowledgeItem>, a, b2);
  }
})();
export type ConversationMessage_KnowledgeItem = InstanceType<typeof ConversationMessage_KnowledgeItem$Runtime>;
var ConversationMessage_KnowledgeItem: MessageType<ConversationMessage_KnowledgeItem> = ConversationMessage_KnowledgeItem$Runtime as unknown as MessageType<ConversationMessage_KnowledgeItem>;
(ConversationMessage_KnowledgeItem as MutableMessageType<ConversationMessage_KnowledgeItem>).runtime = proto3;
(ConversationMessage_KnowledgeItem as MutableMessageType<ConversationMessage_KnowledgeItem>).typeName = "aiserver.v1.ConversationMessage.KnowledgeItem";
(ConversationMessage_KnowledgeItem as MutableMessageType<ConversationMessage_KnowledgeItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "knowledge",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "knowledge_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_generated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ConversationMessage_DocumentationSelection$Runtime = (() => class _ConversationMessage_DocumentationSelection extends Message<_ConversationMessage_DocumentationSelection> {
  declare docId: string;
  declare name: string;
  constructor(data?: PartialMessage<_ConversationMessage_DocumentationSelection>) {
    super();
    this.docId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _ConversationMessage_DocumentationSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_DocumentationSelection {
    return new _ConversationMessage_DocumentationSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_DocumentationSelection {
    return new _ConversationMessage_DocumentationSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_DocumentationSelection {
    return new _ConversationMessage_DocumentationSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_DocumentationSelection | PlainMessage<_ConversationMessage_DocumentationSelection> | undefined | null, b2: _ConversationMessage_DocumentationSelection | PlainMessage<_ConversationMessage_DocumentationSelection> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_DocumentationSelection as unknown as MessageType<_ConversationMessage_DocumentationSelection>, a, b2);
  }
})();
export type ConversationMessage_DocumentationSelection = InstanceType<typeof ConversationMessage_DocumentationSelection$Runtime>;
var ConversationMessage_DocumentationSelection: MessageType<ConversationMessage_DocumentationSelection> = ConversationMessage_DocumentationSelection$Runtime as unknown as MessageType<ConversationMessage_DocumentationSelection>;
(ConversationMessage_DocumentationSelection as MutableMessageType<ConversationMessage_DocumentationSelection>).runtime = proto3;
(ConversationMessage_DocumentationSelection as MutableMessageType<ConversationMessage_DocumentationSelection>).typeName = "aiserver.v1.ConversationMessage.DocumentationSelection";
(ConversationMessage_DocumentationSelection as MutableMessageType<ConversationMessage_DocumentationSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationMessage_IdeEditorsState$Runtime = (() => class _ConversationMessage_IdeEditorsState extends Message<_ConversationMessage_IdeEditorsState> {
  declare isPillDisplayed: boolean;
  declare visibleFilePaths: string[];
  declare recentlyViewedFilePaths: string[];
  declare visibleFiles: ConversationMessage_IdeEditorsState_File[];
  declare recentlyViewedFiles: ConversationMessage_IdeEditorsState_File[];
  constructor(data?: PartialMessage<_ConversationMessage_IdeEditorsState>) {
    super();
    this.isPillDisplayed = false;
    this.visibleFilePaths = [];
    this.recentlyViewedFilePaths = [];
    this.visibleFiles = [];
    this.recentlyViewedFiles = [];
    proto3.util.initPartial(data, this as _ConversationMessage_IdeEditorsState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_IdeEditorsState {
    return new _ConversationMessage_IdeEditorsState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_IdeEditorsState {
    return new _ConversationMessage_IdeEditorsState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_IdeEditorsState {
    return new _ConversationMessage_IdeEditorsState().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_IdeEditorsState | PlainMessage<_ConversationMessage_IdeEditorsState> | undefined | null, b2: _ConversationMessage_IdeEditorsState | PlainMessage<_ConversationMessage_IdeEditorsState> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_IdeEditorsState as unknown as MessageType<_ConversationMessage_IdeEditorsState>, a, b2);
  }
})();
export type ConversationMessage_IdeEditorsState = InstanceType<typeof ConversationMessage_IdeEditorsState$Runtime>;
var ConversationMessage_IdeEditorsState: MessageType<ConversationMessage_IdeEditorsState> = ConversationMessage_IdeEditorsState$Runtime as unknown as MessageType<ConversationMessage_IdeEditorsState>;
(ConversationMessage_IdeEditorsState as MutableMessageType<ConversationMessage_IdeEditorsState>).runtime = proto3;
(ConversationMessage_IdeEditorsState as MutableMessageType<ConversationMessage_IdeEditorsState>).typeName = "aiserver.v1.ConversationMessage.IdeEditorsState";
(ConversationMessage_IdeEditorsState as MutableMessageType<ConversationMessage_IdeEditorsState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_pill_displayed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "visible_file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "recently_viewed_file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "visible_files", kind: "message", T: ConversationMessage_IdeEditorsState_File, repeated: true },
  { no: 5, name: "recently_viewed_files", kind: "message", T: ConversationMessage_IdeEditorsState_File, repeated: true }
]);
var ConversationMessage_IdeEditorsState_File$Runtime = (() => class _ConversationMessage_IdeEditorsState_File extends Message<_ConversationMessage_IdeEditorsState_File> {
  declare relativePath: string;
  declare isCurrentlyFocused?: boolean;
  declare currentLineNumber?: number;
  declare currentLineText?: string;
  declare lineCount?: number;
  declare absolutePath?: string;
  constructor(data?: PartialMessage<_ConversationMessage_IdeEditorsState_File>) {
    super();
    this.relativePath = "";
    proto3.util.initPartial(data, this as _ConversationMessage_IdeEditorsState_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_IdeEditorsState_File {
    return new _ConversationMessage_IdeEditorsState_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_IdeEditorsState_File {
    return new _ConversationMessage_IdeEditorsState_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_IdeEditorsState_File {
    return new _ConversationMessage_IdeEditorsState_File().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_IdeEditorsState_File | PlainMessage<_ConversationMessage_IdeEditorsState_File> | undefined | null, b2: _ConversationMessage_IdeEditorsState_File | PlainMessage<_ConversationMessage_IdeEditorsState_File> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_IdeEditorsState_File as unknown as MessageType<_ConversationMessage_IdeEditorsState_File>, a, b2);
  }
})();
export type ConversationMessage_IdeEditorsState_File = InstanceType<typeof ConversationMessage_IdeEditorsState_File$Runtime>;
var ConversationMessage_IdeEditorsState_File: MessageType<ConversationMessage_IdeEditorsState_File> = ConversationMessage_IdeEditorsState_File$Runtime as unknown as MessageType<ConversationMessage_IdeEditorsState_File>;
(ConversationMessage_IdeEditorsState_File as MutableMessageType<ConversationMessage_IdeEditorsState_File>).runtime = proto3;
(ConversationMessage_IdeEditorsState_File as MutableMessageType<ConversationMessage_IdeEditorsState_File>).typeName = "aiserver.v1.ConversationMessage.IdeEditorsState.File";
(ConversationMessage_IdeEditorsState_File as MutableMessageType<ConversationMessage_IdeEditorsState_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "is_currently_focused", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "current_line_number", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "current_line_text", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "line_count", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "absolute_path", kind: "scalar", T: 9, opt: true }
]);
var ConversationMessage_PlanUpdate$Runtime = (() => class _ConversationMessage_PlanUpdate extends Message<_ConversationMessage_PlanUpdate> {
  declare currentPlan: string;
  declare isFirstTimeSeen: boolean;
  constructor(data?: PartialMessage<_ConversationMessage_PlanUpdate>) {
    super();
    this.currentPlan = "";
    this.isFirstTimeSeen = false;
    proto3.util.initPartial(data, this as _ConversationMessage_PlanUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_PlanUpdate {
    return new _ConversationMessage_PlanUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_PlanUpdate {
    return new _ConversationMessage_PlanUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_PlanUpdate {
    return new _ConversationMessage_PlanUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_PlanUpdate | PlainMessage<_ConversationMessage_PlanUpdate> | undefined | null, b2: _ConversationMessage_PlanUpdate | PlainMessage<_ConversationMessage_PlanUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_PlanUpdate as unknown as MessageType<_ConversationMessage_PlanUpdate>, a, b2);
  }
})();
export type ConversationMessage_PlanUpdate = InstanceType<typeof ConversationMessage_PlanUpdate$Runtime>;
var ConversationMessage_PlanUpdate: MessageType<ConversationMessage_PlanUpdate> = ConversationMessage_PlanUpdate$Runtime as unknown as MessageType<ConversationMessage_PlanUpdate>;
(ConversationMessage_PlanUpdate as MutableMessageType<ConversationMessage_PlanUpdate>).runtime = proto3;
(ConversationMessage_PlanUpdate as MutableMessageType<ConversationMessage_PlanUpdate>).typeName = "aiserver.v1.ConversationMessage.PlanUpdate";
(ConversationMessage_PlanUpdate as MutableMessageType<ConversationMessage_PlanUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "current_plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_first_time_seen",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ConversationMessage_SimulatedMessageMetadata$Runtime = (() => class _ConversationMessage_SimulatedMessageMetadata extends Message<_ConversationMessage_SimulatedMessageMetadata> {
  declare title?: string;
  declare taskId?: string;
  declare fsdFindingAction?: string;
  declare url?: string;
  declare subscriptionSource?: SubscriptionSource;
  declare subscriptionEventDisplay?: SubscriptionEventDisplay;
  constructor(data?: PartialMessage<_ConversationMessage_SimulatedMessageMetadata>) {
    super();
    proto3.util.initPartial(data, this as _ConversationMessage_SimulatedMessageMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_SimulatedMessageMetadata {
    return new _ConversationMessage_SimulatedMessageMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_SimulatedMessageMetadata {
    return new _ConversationMessage_SimulatedMessageMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_SimulatedMessageMetadata {
    return new _ConversationMessage_SimulatedMessageMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_SimulatedMessageMetadata | PlainMessage<_ConversationMessage_SimulatedMessageMetadata> | undefined | null, b2: _ConversationMessage_SimulatedMessageMetadata | PlainMessage<_ConversationMessage_SimulatedMessageMetadata> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_SimulatedMessageMetadata as unknown as MessageType<_ConversationMessage_SimulatedMessageMetadata>, a, b2);
  }
})();
export type ConversationMessage_SimulatedMessageMetadata = InstanceType<typeof ConversationMessage_SimulatedMessageMetadata$Runtime>;
var ConversationMessage_SimulatedMessageMetadata: MessageType<ConversationMessage_SimulatedMessageMetadata> = ConversationMessage_SimulatedMessageMetadata$Runtime as unknown as MessageType<ConversationMessage_SimulatedMessageMetadata>;
(ConversationMessage_SimulatedMessageMetadata as MutableMessageType<ConversationMessage_SimulatedMessageMetadata>).runtime = proto3;
(ConversationMessage_SimulatedMessageMetadata as MutableMessageType<ConversationMessage_SimulatedMessageMetadata>).typeName = "aiserver.v1.ConversationMessage.SimulatedMessageMetadata";
(ConversationMessage_SimulatedMessageMetadata as MutableMessageType<ConversationMessage_SimulatedMessageMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "task_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "fsd_finding_action", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "subscription_source", kind: "enum", T: proto3.getEnumType(SubscriptionSource), opt: true },
  { no: 6, name: "subscription_event_display", kind: "message", T: SubscriptionEventDisplay, opt: true }
]);
var ConversationMessage_McpDescriptor$Runtime = (() => class _ConversationMessage_McpDescriptor extends Message<_ConversationMessage_McpDescriptor> {
  declare folderPath: string;
  declare serverName?: string;
  declare tools: ConversationMessage_McpDescriptor_Tool[];
  declare serverUseInstructions?: string;
  constructor(data?: PartialMessage<_ConversationMessage_McpDescriptor>) {
    super();
    this.folderPath = "";
    this.tools = [];
    proto3.util.initPartial(data, this as _ConversationMessage_McpDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_McpDescriptor {
    return new _ConversationMessage_McpDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_McpDescriptor {
    return new _ConversationMessage_McpDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_McpDescriptor {
    return new _ConversationMessage_McpDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_McpDescriptor | PlainMessage<_ConversationMessage_McpDescriptor> | undefined | null, b2: _ConversationMessage_McpDescriptor | PlainMessage<_ConversationMessage_McpDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_McpDescriptor as unknown as MessageType<_ConversationMessage_McpDescriptor>, a, b2);
  }
})();
export type ConversationMessage_McpDescriptor = InstanceType<typeof ConversationMessage_McpDescriptor$Runtime>;
var ConversationMessage_McpDescriptor: MessageType<ConversationMessage_McpDescriptor> = ConversationMessage_McpDescriptor$Runtime as unknown as MessageType<ConversationMessage_McpDescriptor>;
(ConversationMessage_McpDescriptor as MutableMessageType<ConversationMessage_McpDescriptor>).runtime = proto3;
(ConversationMessage_McpDescriptor as MutableMessageType<ConversationMessage_McpDescriptor>).typeName = "aiserver.v1.ConversationMessage.McpDescriptor";
(ConversationMessage_McpDescriptor as MutableMessageType<ConversationMessage_McpDescriptor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "folder_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "server_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "tools", kind: "message", T: ConversationMessage_McpDescriptor_Tool, repeated: true },
  { no: 4, name: "server_use_instructions", kind: "scalar", T: 9, opt: true }
]);
var ConversationMessage_McpDescriptor_Tool$Runtime = (() => class _ConversationMessage_McpDescriptor_Tool extends Message<_ConversationMessage_McpDescriptor_Tool> {
  declare toolName: string;
  declare description?: string;
  constructor(data?: PartialMessage<_ConversationMessage_McpDescriptor_Tool>) {
    super();
    this.toolName = "";
    proto3.util.initPartial(data, this as _ConversationMessage_McpDescriptor_Tool);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationMessage_McpDescriptor_Tool {
    return new _ConversationMessage_McpDescriptor_Tool().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationMessage_McpDescriptor_Tool {
    return new _ConversationMessage_McpDescriptor_Tool().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationMessage_McpDescriptor_Tool {
    return new _ConversationMessage_McpDescriptor_Tool().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationMessage_McpDescriptor_Tool | PlainMessage<_ConversationMessage_McpDescriptor_Tool> | undefined | null, b2: _ConversationMessage_McpDescriptor_Tool | PlainMessage<_ConversationMessage_McpDescriptor_Tool> | undefined | null): boolean {
    return proto3.util.equals(_ConversationMessage_McpDescriptor_Tool as unknown as MessageType<_ConversationMessage_McpDescriptor_Tool>, a, b2);
  }
})();
export type ConversationMessage_McpDescriptor_Tool = InstanceType<typeof ConversationMessage_McpDescriptor_Tool$Runtime>;
var ConversationMessage_McpDescriptor_Tool: MessageType<ConversationMessage_McpDescriptor_Tool> = ConversationMessage_McpDescriptor_Tool$Runtime as unknown as MessageType<ConversationMessage_McpDescriptor_Tool>;
(ConversationMessage_McpDescriptor_Tool as MutableMessageType<ConversationMessage_McpDescriptor_Tool>).runtime = proto3;
(ConversationMessage_McpDescriptor_Tool as MutableMessageType<ConversationMessage_McpDescriptor_Tool>).typeName = "aiserver.v1.ConversationMessage.McpDescriptor.Tool";
(ConversationMessage_McpDescriptor_Tool as MutableMessageType<ConversationMessage_McpDescriptor_Tool>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "description", kind: "scalar", T: 9, opt: true }
]);
var CurrentFileLocationData$Runtime = (() => class _CurrentFileLocationData extends Message<_CurrentFileLocationData> {
  declare relativeWorkspacePath: string;
  declare lineNumber: number;
  declare text: string;
  constructor(data?: PartialMessage<_CurrentFileLocationData>) {
    super();
    this.relativeWorkspacePath = "";
    this.lineNumber = 0;
    this.text = "";
    proto3.util.initPartial(data, this as _CurrentFileLocationData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CurrentFileLocationData {
    return new _CurrentFileLocationData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CurrentFileLocationData {
    return new _CurrentFileLocationData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CurrentFileLocationData {
    return new _CurrentFileLocationData().fromJsonString(jsonString, options);
  }
  static equals(a: _CurrentFileLocationData | PlainMessage<_CurrentFileLocationData> | undefined | null, b2: _CurrentFileLocationData | PlainMessage<_CurrentFileLocationData> | undefined | null): boolean {
    return proto3.util.equals(_CurrentFileLocationData as unknown as MessageType<_CurrentFileLocationData>, a, b2);
  }
})();
export type CurrentFileLocationData = InstanceType<typeof CurrentFileLocationData$Runtime>;
var CurrentFileLocationData: MessageType<CurrentFileLocationData> = CurrentFileLocationData$Runtime as unknown as MessageType<CurrentFileLocationData>;
(CurrentFileLocationData as MutableMessageType<CurrentFileLocationData>).runtime = proto3;
(CurrentFileLocationData as MutableMessageType<CurrentFileLocationData>).typeName = "aiserver.v1.CurrentFileLocationData";
(CurrentFileLocationData as MutableMessageType<CurrentFileLocationData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SearchInfo$Runtime = (() => class _SearchInfo extends Message<_SearchInfo> {
  declare query: string;
  declare files: SearchFileInfo[];
  constructor(data?: PartialMessage<_SearchInfo>) {
    super();
    this.query = "";
    this.files = [];
    proto3.util.initPartial(data, this as _SearchInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchInfo {
    return new _SearchInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchInfo {
    return new _SearchInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchInfo {
    return new _SearchInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchInfo | PlainMessage<_SearchInfo> | undefined | null, b2: _SearchInfo | PlainMessage<_SearchInfo> | undefined | null): boolean {
    return proto3.util.equals(_SearchInfo as unknown as MessageType<_SearchInfo>, a, b2);
  }
})();
export type SearchInfo = InstanceType<typeof SearchInfo$Runtime>;
var SearchInfo: MessageType<SearchInfo> = SearchInfo$Runtime as unknown as MessageType<SearchInfo>;
(SearchInfo as MutableMessageType<SearchInfo>).runtime = proto3;
(SearchInfo as MutableMessageType<SearchInfo>).typeName = "aiserver.v1.SearchInfo";
(SearchInfo as MutableMessageType<SearchInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "files", kind: "message", T: SearchFileInfo, repeated: true }
]);
var SearchFileInfo$Runtime = (() => class _SearchFileInfo extends Message<_SearchFileInfo> {
  declare relativePath: string;
  declare content: string;
  constructor(data?: PartialMessage<_SearchFileInfo>) {
    super();
    this.relativePath = "";
    this.content = "";
    proto3.util.initPartial(data, this as _SearchFileInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchFileInfo {
    return new _SearchFileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchFileInfo {
    return new _SearchFileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchFileInfo {
    return new _SearchFileInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchFileInfo | PlainMessage<_SearchFileInfo> | undefined | null, b2: _SearchFileInfo | PlainMessage<_SearchFileInfo> | undefined | null): boolean {
    return proto3.util.equals(_SearchFileInfo as unknown as MessageType<_SearchFileInfo>, a, b2);
  }
})();
export type SearchFileInfo = InstanceType<typeof SearchFileInfo$Runtime>;
var SearchFileInfo: MessageType<SearchFileInfo> = SearchFileInfo$Runtime as unknown as MessageType<SearchFileInfo>;
(SearchFileInfo as MutableMessageType<SearchFileInfo>).runtime = proto3;
(SearchFileInfo as MutableMessageType<SearchFileInfo>).typeName = "aiserver.v1.SearchFileInfo";
(SearchFileInfo as MutableMessageType<SearchFileInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FolderInfo$Runtime = (() => class _FolderInfo extends Message<_FolderInfo> {
  declare relativePath: string;
  declare files: FolderFileInfo[];
  constructor(data?: PartialMessage<_FolderInfo>) {
    super();
    this.relativePath = "";
    this.files = [];
    proto3.util.initPartial(data, this as _FolderInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FolderInfo {
    return new _FolderInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FolderInfo {
    return new _FolderInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FolderInfo {
    return new _FolderInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _FolderInfo | PlainMessage<_FolderInfo> | undefined | null, b2: _FolderInfo | PlainMessage<_FolderInfo> | undefined | null): boolean {
    return proto3.util.equals(_FolderInfo as unknown as MessageType<_FolderInfo>, a, b2);
  }
})();
export type FolderInfo = InstanceType<typeof FolderInfo$Runtime>;
var FolderInfo: MessageType<FolderInfo> = FolderInfo$Runtime as unknown as MessageType<FolderInfo>;
(FolderInfo as MutableMessageType<FolderInfo>).runtime = proto3;
(FolderInfo as MutableMessageType<FolderInfo>).typeName = "aiserver.v1.FolderInfo";
(FolderInfo as MutableMessageType<FolderInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "files", kind: "message", T: FolderFileInfo, repeated: true }
]);
var FolderFileInfo$Runtime = (() => class _FolderFileInfo extends Message<_FolderFileInfo> {
  declare relativePath: string;
  declare content: string;
  declare truncated: boolean;
  declare score: number;
  constructor(data?: PartialMessage<_FolderFileInfo>) {
    super();
    this.relativePath = "";
    this.content = "";
    this.truncated = false;
    this.score = 0;
    proto3.util.initPartial(data, this as _FolderFileInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FolderFileInfo {
    return new _FolderFileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FolderFileInfo {
    return new _FolderFileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FolderFileInfo {
    return new _FolderFileInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _FolderFileInfo | PlainMessage<_FolderFileInfo> | undefined | null, b2: _FolderFileInfo | PlainMessage<_FolderFileInfo> | undefined | null): boolean {
    return proto3.util.equals(_FolderFileInfo as unknown as MessageType<_FolderFileInfo>, a, b2);
  }
})();
export type FolderFileInfo = InstanceType<typeof FolderFileInfo$Runtime>;
var FolderFileInfo: MessageType<FolderFileInfo> = FolderFileInfo$Runtime as unknown as MessageType<FolderFileInfo>;
(FolderFileInfo as MutableMessageType<FolderFileInfo>).runtime = proto3;
(FolderFileInfo as MutableMessageType<FolderFileInfo>).typeName = "aiserver.v1.FolderFileInfo";
(FolderFileInfo as MutableMessageType<FolderFileInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var InterpreterResult$Runtime = (() => class _InterpreterResult extends Message<_InterpreterResult> {
  declare output: string;
  declare success: boolean;
  constructor(data?: PartialMessage<_InterpreterResult>) {
    super();
    this.output = "";
    this.success = false;
    proto3.util.initPartial(data, this as _InterpreterResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InterpreterResult {
    return new _InterpreterResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InterpreterResult {
    return new _InterpreterResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InterpreterResult {
    return new _InterpreterResult().fromJsonString(jsonString, options);
  }
  static equals(a: _InterpreterResult | PlainMessage<_InterpreterResult> | undefined | null, b2: _InterpreterResult | PlainMessage<_InterpreterResult> | undefined | null): boolean {
    return proto3.util.equals(_InterpreterResult as unknown as MessageType<_InterpreterResult>, a, b2);
  }
})();
export type InterpreterResult = InstanceType<typeof InterpreterResult$Runtime>;
var InterpreterResult: MessageType<InterpreterResult> = InterpreterResult$Runtime as unknown as MessageType<InterpreterResult>;
(InterpreterResult as MutableMessageType<InterpreterResult>).runtime = proto3;
(InterpreterResult as MutableMessageType<InterpreterResult>).typeName = "aiserver.v1.InterpreterResult";
(InterpreterResult as MutableMessageType<InterpreterResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SimpleFileDiff$Runtime = (() => class _SimpleFileDiff extends Message<_SimpleFileDiff> {
  declare relativeWorkspacePath: string;
  declare chunks: SimpleFileDiff_Chunk[];
  constructor(data?: PartialMessage<_SimpleFileDiff>) {
    super();
    this.relativeWorkspacePath = "";
    this.chunks = [];
    proto3.util.initPartial(data, this as _SimpleFileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimpleFileDiff {
    return new _SimpleFileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimpleFileDiff {
    return new _SimpleFileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimpleFileDiff {
    return new _SimpleFileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _SimpleFileDiff | PlainMessage<_SimpleFileDiff> | undefined | null, b2: _SimpleFileDiff | PlainMessage<_SimpleFileDiff> | undefined | null): boolean {
    return proto3.util.equals(_SimpleFileDiff as unknown as MessageType<_SimpleFileDiff>, a, b2);
  }
})();
export type SimpleFileDiff = InstanceType<typeof SimpleFileDiff$Runtime>;
var SimpleFileDiff: MessageType<SimpleFileDiff> = SimpleFileDiff$Runtime as unknown as MessageType<SimpleFileDiff>;
(SimpleFileDiff as MutableMessageType<SimpleFileDiff>).runtime = proto3;
(SimpleFileDiff as MutableMessageType<SimpleFileDiff>).typeName = "aiserver.v1.SimpleFileDiff";
(SimpleFileDiff as MutableMessageType<SimpleFileDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "chunks", kind: "message", T: SimpleFileDiff_Chunk, repeated: true }
]);
var SimpleFileDiff_Chunk$Runtime = (() => class _SimpleFileDiff_Chunk extends Message<_SimpleFileDiff_Chunk> {
  declare oldLines: string[];
  declare newLines: string[];
  declare oldRange?: LineRange;
  declare newRange?: LineRange;
  constructor(data?: PartialMessage<_SimpleFileDiff_Chunk>) {
    super();
    this.oldLines = [];
    this.newLines = [];
    proto3.util.initPartial(data, this as _SimpleFileDiff_Chunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimpleFileDiff_Chunk {
    return new _SimpleFileDiff_Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimpleFileDiff_Chunk {
    return new _SimpleFileDiff_Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimpleFileDiff_Chunk {
    return new _SimpleFileDiff_Chunk().fromJsonString(jsonString, options);
  }
  static equals(a: _SimpleFileDiff_Chunk | PlainMessage<_SimpleFileDiff_Chunk> | undefined | null, b2: _SimpleFileDiff_Chunk | PlainMessage<_SimpleFileDiff_Chunk> | undefined | null): boolean {
    return proto3.util.equals(_SimpleFileDiff_Chunk as unknown as MessageType<_SimpleFileDiff_Chunk>, a, b2);
  }
})();
export type SimpleFileDiff_Chunk = InstanceType<typeof SimpleFileDiff_Chunk$Runtime>;
var SimpleFileDiff_Chunk: MessageType<SimpleFileDiff_Chunk> = SimpleFileDiff_Chunk$Runtime as unknown as MessageType<SimpleFileDiff_Chunk>;
(SimpleFileDiff_Chunk as MutableMessageType<SimpleFileDiff_Chunk>).runtime = proto3;
(SimpleFileDiff_Chunk as MutableMessageType<SimpleFileDiff_Chunk>).typeName = "aiserver.v1.SimpleFileDiff.Chunk";
(SimpleFileDiff_Chunk as MutableMessageType<SimpleFileDiff_Chunk>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "old_range", kind: "message", T: LineRange },
  { no: 4, name: "new_range", kind: "message", T: LineRange }
]);
var Commit$Runtime = (() => class _Commit extends Message<_Commit> {
  declare sha: string;
  declare message: string;
  declare description: string;
  declare diff: FileDiff[];
  declare author: string;
  declare date: string;
  constructor(data?: PartialMessage<_Commit>) {
    super();
    this.sha = "";
    this.message = "";
    this.description = "";
    this.diff = [];
    this.author = "";
    this.date = "";
    proto3.util.initPartial(data, this as _Commit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Commit {
    return new _Commit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Commit {
    return new _Commit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Commit {
    return new _Commit().fromJsonString(jsonString, options);
  }
  static equals(a: _Commit | PlainMessage<_Commit> | undefined | null, b2: _Commit | PlainMessage<_Commit> | undefined | null): boolean {
    return proto3.util.equals(_Commit as unknown as MessageType<_Commit>, a, b2);
  }
})();
export type Commit = InstanceType<typeof Commit$Runtime>;
var Commit: MessageType<Commit> = Commit$Runtime as unknown as MessageType<Commit>;
(Commit as MutableMessageType<Commit>).runtime = proto3;
(Commit as MutableMessageType<Commit>).typeName = "aiserver.v1.Commit";
(Commit as MutableMessageType<Commit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "diff", kind: "message", T: FileDiff, repeated: true },
  {
    no: 5,
    name: "author",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PullRequest$Runtime = (() => class _PullRequest extends Message<_PullRequest> {
  declare title: string;
  declare body: string;
  declare diff: FileDiff[];
  declare id: bigint;
  declare number: bigint;
  constructor(data?: PartialMessage<_PullRequest>) {
    super();
    this.title = "";
    this.body = "";
    this.diff = [];
    this.id = protoInt64.zero;
    this.number = protoInt64.zero;
    proto3.util.initPartial(data, this as _PullRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequest {
    return new _PullRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequest {
    return new _PullRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequest {
    return new _PullRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequest | PlainMessage<_PullRequest> | undefined | null, b2: _PullRequest | PlainMessage<_PullRequest> | undefined | null): boolean {
    return proto3.util.equals(_PullRequest as unknown as MessageType<_PullRequest>, a, b2);
  }
})();
export type PullRequest = InstanceType<typeof PullRequest$Runtime>;
var PullRequest: MessageType<PullRequest> = PullRequest$Runtime as unknown as MessageType<PullRequest>;
(PullRequest as MutableMessageType<PullRequest>).runtime = proto3;
(PullRequest as MutableMessageType<PullRequest>).typeName = "aiserver.v1.PullRequest";
(PullRequest as MutableMessageType<PullRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "diff", kind: "message", T: FileDiff, repeated: true },
  {
    no: 4,
    name: "id",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "number",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var SuggestedCodeBlock$Runtime = (() => class _SuggestedCodeBlock extends Message<_SuggestedCodeBlock> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_SuggestedCodeBlock>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _SuggestedCodeBlock);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SuggestedCodeBlock {
    return new _SuggestedCodeBlock().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SuggestedCodeBlock {
    return new _SuggestedCodeBlock().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SuggestedCodeBlock {
    return new _SuggestedCodeBlock().fromJsonString(jsonString, options);
  }
  static equals(a: _SuggestedCodeBlock | PlainMessage<_SuggestedCodeBlock> | undefined | null, b2: _SuggestedCodeBlock | PlainMessage<_SuggestedCodeBlock> | undefined | null): boolean {
    return proto3.util.equals(_SuggestedCodeBlock as unknown as MessageType<_SuggestedCodeBlock>, a, b2);
  }
})();
export type SuggestedCodeBlock = InstanceType<typeof SuggestedCodeBlock$Runtime>;
var SuggestedCodeBlock: MessageType<SuggestedCodeBlock> = SuggestedCodeBlock$Runtime as unknown as MessageType<SuggestedCodeBlock>;
(SuggestedCodeBlock as MutableMessageType<SuggestedCodeBlock>).runtime = proto3;
(SuggestedCodeBlock as MutableMessageType<SuggestedCodeBlock>).typeName = "aiserver.v1.SuggestedCodeBlock";
(SuggestedCodeBlock as MutableMessageType<SuggestedCodeBlock>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UserResponseToSuggestedCodeBlock$Runtime = (() => class _UserResponseToSuggestedCodeBlock extends Message<_UserResponseToSuggestedCodeBlock> {
  declare userResponseType: UserResponseToSuggestedCodeBlock_UserResponseType;
  declare filePath: string;
  declare userModificationsToSuggestedCodeBlocks?: FileDiff;
  constructor(data?: PartialMessage<_UserResponseToSuggestedCodeBlock>) {
    super();
    this.userResponseType = UserResponseToSuggestedCodeBlock_UserResponseType.UNSPECIFIED;
    this.filePath = "";
    proto3.util.initPartial(data, this as _UserResponseToSuggestedCodeBlock);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserResponseToSuggestedCodeBlock {
    return new _UserResponseToSuggestedCodeBlock().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserResponseToSuggestedCodeBlock {
    return new _UserResponseToSuggestedCodeBlock().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserResponseToSuggestedCodeBlock {
    return new _UserResponseToSuggestedCodeBlock().fromJsonString(jsonString, options);
  }
  static equals(a: _UserResponseToSuggestedCodeBlock | PlainMessage<_UserResponseToSuggestedCodeBlock> | undefined | null, b2: _UserResponseToSuggestedCodeBlock | PlainMessage<_UserResponseToSuggestedCodeBlock> | undefined | null): boolean {
    return proto3.util.equals(_UserResponseToSuggestedCodeBlock as unknown as MessageType<_UserResponseToSuggestedCodeBlock>, a, b2);
  }
})();
export type UserResponseToSuggestedCodeBlock = InstanceType<typeof UserResponseToSuggestedCodeBlock$Runtime>;
var UserResponseToSuggestedCodeBlock: MessageType<UserResponseToSuggestedCodeBlock> = UserResponseToSuggestedCodeBlock$Runtime as unknown as MessageType<UserResponseToSuggestedCodeBlock>;
(UserResponseToSuggestedCodeBlock as MutableMessageType<UserResponseToSuggestedCodeBlock>).runtime = proto3;
(UserResponseToSuggestedCodeBlock as MutableMessageType<UserResponseToSuggestedCodeBlock>).typeName = "aiserver.v1.UserResponseToSuggestedCodeBlock";
(UserResponseToSuggestedCodeBlock as MutableMessageType<UserResponseToSuggestedCodeBlock>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_response_type", kind: "enum", T: proto3.getEnumType(UserResponseToSuggestedCodeBlock_UserResponseType) },
  {
    no: 2,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "user_modifications_to_suggested_code_blocks", kind: "message", T: FileDiff, opt: true }
]);
(function(UserResponseToSuggestedCodeBlock_UserResponseType2) {
  UserResponseToSuggestedCodeBlock_UserResponseType2[UserResponseToSuggestedCodeBlock_UserResponseType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UserResponseToSuggestedCodeBlock_UserResponseType2[UserResponseToSuggestedCodeBlock_UserResponseType2["ACCEPT"] = 1] = "ACCEPT";
  UserResponseToSuggestedCodeBlock_UserResponseType2[UserResponseToSuggestedCodeBlock_UserResponseType2["REJECT"] = 2] = "REJECT";
  UserResponseToSuggestedCodeBlock_UserResponseType2[UserResponseToSuggestedCodeBlock_UserResponseType2["MODIFY"] = 3] = "MODIFY";
})(UserResponseToSuggestedCodeBlock_UserResponseType! || (UserResponseToSuggestedCodeBlock_UserResponseType = {} as typeof UserResponseToSuggestedCodeBlock_UserResponseType));
proto3.util.setEnumType(UserResponseToSuggestedCodeBlock_UserResponseType, "aiserver.v1.UserResponseToSuggestedCodeBlock.UserResponseType", [
  { no: 0, name: "USER_RESPONSE_TYPE_UNSPECIFIED" },
  { no: 1, name: "USER_RESPONSE_TYPE_ACCEPT" },
  { no: 2, name: "USER_RESPONSE_TYPE_REJECT" },
  { no: 3, name: "USER_RESPONSE_TYPE_MODIFY" }
]);
var ContextRerankingCandidateFile$Runtime = (() => class _ContextRerankingCandidateFile extends Message<_ContextRerankingCandidateFile> {
  declare fileName: string;
  declare fileContent: string;
  constructor(data?: PartialMessage<_ContextRerankingCandidateFile>) {
    super();
    this.fileName = "";
    this.fileContent = "";
    proto3.util.initPartial(data, this as _ContextRerankingCandidateFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextRerankingCandidateFile {
    return new _ContextRerankingCandidateFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextRerankingCandidateFile {
    return new _ContextRerankingCandidateFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextRerankingCandidateFile {
    return new _ContextRerankingCandidateFile().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextRerankingCandidateFile | PlainMessage<_ContextRerankingCandidateFile> | undefined | null, b2: _ContextRerankingCandidateFile | PlainMessage<_ContextRerankingCandidateFile> | undefined | null): boolean {
    return proto3.util.equals(_ContextRerankingCandidateFile as unknown as MessageType<_ContextRerankingCandidateFile>, a, b2);
  }
})();
export type ContextRerankingCandidateFile = InstanceType<typeof ContextRerankingCandidateFile$Runtime>;
var ContextRerankingCandidateFile: MessageType<ContextRerankingCandidateFile> = ContextRerankingCandidateFile$Runtime as unknown as MessageType<ContextRerankingCandidateFile>;
(ContextRerankingCandidateFile as MutableMessageType<ContextRerankingCandidateFile>).runtime = proto3;
(ContextRerankingCandidateFile as MutableMessageType<ContextRerankingCandidateFile>).typeName = "aiserver.v1.ContextRerankingCandidateFile";
(ContextRerankingCandidateFile as MutableMessageType<ContextRerankingCandidateFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ComposerFileDiff$Runtime = (() => class _ComposerFileDiff extends Message<_ComposerFileDiff> {
  declare chunks: ComposerFileDiff_ChunkDiff[];
  declare editor: ComposerFileDiff_Editor;
  declare hitTimeout: boolean;
  constructor(data?: PartialMessage<_ComposerFileDiff>) {
    super();
    this.chunks = [];
    this.editor = ComposerFileDiff_Editor.UNSPECIFIED;
    this.hitTimeout = false;
    proto3.util.initPartial(data, this as _ComposerFileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerFileDiff {
    return new _ComposerFileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerFileDiff {
    return new _ComposerFileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerFileDiff {
    return new _ComposerFileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerFileDiff | PlainMessage<_ComposerFileDiff> | undefined | null, b2: _ComposerFileDiff | PlainMessage<_ComposerFileDiff> | undefined | null): boolean {
    return proto3.util.equals(_ComposerFileDiff as unknown as MessageType<_ComposerFileDiff>, a, b2);
  }
})();
export type ComposerFileDiff = InstanceType<typeof ComposerFileDiff$Runtime>;
var ComposerFileDiff: MessageType<ComposerFileDiff> = ComposerFileDiff$Runtime as unknown as MessageType<ComposerFileDiff>;
(ComposerFileDiff as MutableMessageType<ComposerFileDiff>).runtime = proto3;
(ComposerFileDiff as MutableMessageType<ComposerFileDiff>).typeName = "aiserver.v1.ComposerFileDiff";
(ComposerFileDiff as MutableMessageType<ComposerFileDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chunks", kind: "message", T: ComposerFileDiff_ChunkDiff, repeated: true },
  { no: 2, name: "editor", kind: "enum", T: proto3.getEnumType(ComposerFileDiff_Editor) },
  {
    no: 3,
    name: "hit_timeout",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
(function(ComposerFileDiff_Editor2) {
  ComposerFileDiff_Editor2[ComposerFileDiff_Editor2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ComposerFileDiff_Editor2[ComposerFileDiff_Editor2["AI"] = 1] = "AI";
  ComposerFileDiff_Editor2[ComposerFileDiff_Editor2["HUMAN"] = 2] = "HUMAN";
})(ComposerFileDiff_Editor! || (ComposerFileDiff_Editor = {} as typeof ComposerFileDiff_Editor));
proto3.util.setEnumType(ComposerFileDiff_Editor, "aiserver.v1.ComposerFileDiff.Editor", [
  { no: 0, name: "EDITOR_UNSPECIFIED" },
  { no: 1, name: "EDITOR_AI" },
  { no: 2, name: "EDITOR_HUMAN" }
]);
var ComposerFileDiff_ChunkDiff$Runtime = (() => class _ComposerFileDiff_ChunkDiff extends Message<_ComposerFileDiff_ChunkDiff> {
  declare diffString: string;
  declare oldStart: number;
  declare newStart: number;
  declare oldLines: number;
  declare newLines: number;
  declare linesRemoved: number;
  declare linesAdded: number;
  constructor(data?: PartialMessage<_ComposerFileDiff_ChunkDiff>) {
    super();
    this.diffString = "";
    this.oldStart = 0;
    this.newStart = 0;
    this.oldLines = 0;
    this.newLines = 0;
    this.linesRemoved = 0;
    this.linesAdded = 0;
    proto3.util.initPartial(data, this as _ComposerFileDiff_ChunkDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerFileDiff_ChunkDiff {
    return new _ComposerFileDiff_ChunkDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerFileDiff_ChunkDiff {
    return new _ComposerFileDiff_ChunkDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerFileDiff_ChunkDiff {
    return new _ComposerFileDiff_ChunkDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerFileDiff_ChunkDiff | PlainMessage<_ComposerFileDiff_ChunkDiff> | undefined | null, b2: _ComposerFileDiff_ChunkDiff | PlainMessage<_ComposerFileDiff_ChunkDiff> | undefined | null): boolean {
    return proto3.util.equals(_ComposerFileDiff_ChunkDiff as unknown as MessageType<_ComposerFileDiff_ChunkDiff>, a, b2);
  }
})();
export type ComposerFileDiff_ChunkDiff = InstanceType<typeof ComposerFileDiff_ChunkDiff$Runtime>;
var ComposerFileDiff_ChunkDiff: MessageType<ComposerFileDiff_ChunkDiff> = ComposerFileDiff_ChunkDiff$Runtime as unknown as MessageType<ComposerFileDiff_ChunkDiff>;
(ComposerFileDiff_ChunkDiff as MutableMessageType<ComposerFileDiff_ChunkDiff>).runtime = proto3;
(ComposerFileDiff_ChunkDiff as MutableMessageType<ComposerFileDiff_ChunkDiff>).typeName = "aiserver.v1.ComposerFileDiff.ChunkDiff";
(ComposerFileDiff_ChunkDiff as MutableMessageType<ComposerFileDiff_ChunkDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "diff_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "old_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "new_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "old_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "new_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "lines_removed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 7,
    name: "lines_added",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var DiffHistoryData$Runtime = (() => class _DiffHistoryData extends Message<_DiffHistoryData> {
  declare relativeWorkspacePath: string;
  declare diffs: ComposerFileDiff[];
  declare timestamp: number;
  declare uniqueId: string;
  declare startToEndDiff?: ComposerFileDiff;
  constructor(data?: PartialMessage<_DiffHistoryData>) {
    super();
    this.relativeWorkspacePath = "";
    this.diffs = [];
    this.timestamp = 0;
    this.uniqueId = "";
    proto3.util.initPartial(data, this as _DiffHistoryData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DiffHistoryData {
    return new _DiffHistoryData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DiffHistoryData {
    return new _DiffHistoryData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DiffHistoryData {
    return new _DiffHistoryData().fromJsonString(jsonString, options);
  }
  static equals(a: _DiffHistoryData | PlainMessage<_DiffHistoryData> | undefined | null, b2: _DiffHistoryData | PlainMessage<_DiffHistoryData> | undefined | null): boolean {
    return proto3.util.equals(_DiffHistoryData as unknown as MessageType<_DiffHistoryData>, a, b2);
  }
})();
export type DiffHistoryData = InstanceType<typeof DiffHistoryData$Runtime>;
var DiffHistoryData: MessageType<DiffHistoryData> = DiffHistoryData$Runtime as unknown as MessageType<DiffHistoryData>;
(DiffHistoryData as MutableMessageType<DiffHistoryData>).runtime = proto3;
(DiffHistoryData as MutableMessageType<DiffHistoryData>).typeName = "aiserver.v1.DiffHistoryData";
(DiffHistoryData as MutableMessageType<DiffHistoryData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diffs", kind: "message", T: ComposerFileDiff, repeated: true },
  {
    no: 3,
    name: "timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 4,
    name: "unique_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "start_to_end_diff", kind: "message", T: ComposerFileDiff }
]);
var WarmStreamUnifiedChatWithToolsResponse$Runtime = (() => class _WarmStreamUnifiedChatWithToolsResponse extends Message<_WarmStreamUnifiedChatWithToolsResponse> {
  constructor(data?: PartialMessage<_WarmStreamUnifiedChatWithToolsResponse>) {
    super();
    proto3.util.initPartial(data, this as _WarmStreamUnifiedChatWithToolsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WarmStreamUnifiedChatWithToolsResponse {
    return new _WarmStreamUnifiedChatWithToolsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WarmStreamUnifiedChatWithToolsResponse {
    return new _WarmStreamUnifiedChatWithToolsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WarmStreamUnifiedChatWithToolsResponse {
    return new _WarmStreamUnifiedChatWithToolsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WarmStreamUnifiedChatWithToolsResponse | PlainMessage<_WarmStreamUnifiedChatWithToolsResponse> | undefined | null, b2: _WarmStreamUnifiedChatWithToolsResponse | PlainMessage<_WarmStreamUnifiedChatWithToolsResponse> | undefined | null): boolean {
    return proto3.util.equals(_WarmStreamUnifiedChatWithToolsResponse as unknown as MessageType<_WarmStreamUnifiedChatWithToolsResponse>, a, b2);
  }
})();
export type WarmStreamUnifiedChatWithToolsResponse = InstanceType<typeof WarmStreamUnifiedChatWithToolsResponse$Runtime>;
var WarmStreamUnifiedChatWithToolsResponse: MessageType<WarmStreamUnifiedChatWithToolsResponse> = WarmStreamUnifiedChatWithToolsResponse$Runtime as unknown as MessageType<WarmStreamUnifiedChatWithToolsResponse>;
(WarmStreamUnifiedChatWithToolsResponse as MutableMessageType<WarmStreamUnifiedChatWithToolsResponse>).runtime = proto3;
(WarmStreamUnifiedChatWithToolsResponse as MutableMessageType<WarmStreamUnifiedChatWithToolsResponse>).typeName = "aiserver.v1.WarmStreamUnifiedChatWithToolsResponse";
(WarmStreamUnifiedChatWithToolsResponse as MutableMessageType<WarmStreamUnifiedChatWithToolsResponse>).fields = proto3.util.newFieldList(() => []);
var CodeChunkContextInclusionInfoV2$Runtime = (() => class _CodeChunkContextInclusionInfoV2 extends Message<_CodeChunkContextInclusionInfoV2> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare endLineNumberInclusive: number;
  declare intent: CodeChunkContextInclusionInfoV2_Intent;
  declare inclusionType: CodeChunkContextInclusionInfoV2_InclusionType;
  declare tooltipText?: string;
  declare pillIsDashed?: boolean;
  declare pillSubCodiconName?: string;
  declare detailText?: string;
  declare codiconName?: string;
  constructor(data?: PartialMessage<_CodeChunkContextInclusionInfoV2>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    this.intent = CodeChunkContextInclusionInfoV2_Intent.UNSPECIFIED;
    this.inclusionType = CodeChunkContextInclusionInfoV2_InclusionType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CodeChunkContextInclusionInfoV2);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeChunkContextInclusionInfoV2 {
    return new _CodeChunkContextInclusionInfoV2().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfoV2 {
    return new _CodeChunkContextInclusionInfoV2().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfoV2 {
    return new _CodeChunkContextInclusionInfoV2().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeChunkContextInclusionInfoV2 | PlainMessage<_CodeChunkContextInclusionInfoV2> | undefined | null, b2: _CodeChunkContextInclusionInfoV2 | PlainMessage<_CodeChunkContextInclusionInfoV2> | undefined | null): boolean {
    return proto3.util.equals(_CodeChunkContextInclusionInfoV2 as unknown as MessageType<_CodeChunkContextInclusionInfoV2>, a, b2);
  }
})();
export type CodeChunkContextInclusionInfoV2 = InstanceType<typeof CodeChunkContextInclusionInfoV2$Runtime>;
var CodeChunkContextInclusionInfoV2: MessageType<CodeChunkContextInclusionInfoV2> = CodeChunkContextInclusionInfoV2$Runtime as unknown as MessageType<CodeChunkContextInclusionInfoV2>;
(CodeChunkContextInclusionInfoV2 as MutableMessageType<CodeChunkContextInclusionInfoV2>).runtime = proto3;
(CodeChunkContextInclusionInfoV2 as MutableMessageType<CodeChunkContextInclusionInfoV2>).typeName = "aiserver.v1.CodeChunkContextInclusionInfoV2";
(CodeChunkContextInclusionInfoV2 as MutableMessageType<CodeChunkContextInclusionInfoV2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "intent", kind: "enum", T: proto3.getEnumType(CodeChunkContextInclusionInfoV2_Intent) },
  { no: 10, name: "inclusion_type", kind: "enum", T: proto3.getEnumType(CodeChunkContextInclusionInfoV2_InclusionType) },
  { no: 6, name: "tooltip_text", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "pill_is_dashed", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "pill_sub_codicon_name", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "detail_text", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "codicon_name", kind: "scalar", T: 9, opt: true }
]);
(function(CodeChunkContextInclusionInfoV2_Intent2) {
  CodeChunkContextInclusionInfoV2_Intent2[CodeChunkContextInclusionInfoV2_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunkContextInclusionInfoV2_Intent2[CodeChunkContextInclusionInfoV2_Intent2["FILE"] = 1] = "FILE";
  CodeChunkContextInclusionInfoV2_Intent2[CodeChunkContextInclusionInfoV2_Intent2["SELECTION"] = 2] = "SELECTION";
})(CodeChunkContextInclusionInfoV2_Intent! || (CodeChunkContextInclusionInfoV2_Intent = {} as typeof CodeChunkContextInclusionInfoV2_Intent));
proto3.util.setEnumType(CodeChunkContextInclusionInfoV2_Intent, "aiserver.v1.CodeChunkContextInclusionInfoV2.Intent", [
  { no: 0, name: "INTENT_UNSPECIFIED" },
  { no: 1, name: "INTENT_FILE" },
  { no: 2, name: "INTENT_SELECTION" }
]);
(function(CodeChunkContextInclusionInfoV2_InclusionType2) {
  CodeChunkContextInclusionInfoV2_InclusionType2[CodeChunkContextInclusionInfoV2_InclusionType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunkContextInclusionInfoV2_InclusionType2[CodeChunkContextInclusionInfoV2_InclusionType2["FULL"] = 1] = "FULL";
  CodeChunkContextInclusionInfoV2_InclusionType2[CodeChunkContextInclusionInfoV2_InclusionType2["OUTLINE"] = 2] = "OUTLINE";
  CodeChunkContextInclusionInfoV2_InclusionType2[CodeChunkContextInclusionInfoV2_InclusionType2["FILENAME"] = 3] = "FILENAME";
})(CodeChunkContextInclusionInfoV2_InclusionType! || (CodeChunkContextInclusionInfoV2_InclusionType = {} as typeof CodeChunkContextInclusionInfoV2_InclusionType));
proto3.util.setEnumType(CodeChunkContextInclusionInfoV2_InclusionType, "aiserver.v1.CodeChunkContextInclusionInfoV2.InclusionType", [
  { no: 0, name: "INCLUSION_TYPE_UNSPECIFIED" },
  { no: 1, name: "INCLUSION_TYPE_FULL" },
  { no: 2, name: "INCLUSION_TYPE_OUTLINE" },
  { no: 3, name: "INCLUSION_TYPE_FILENAME" }
]);
var GetPromptDryRunResponse$Runtime = (() => class _GetPromptDryRunResponse extends Message<_GetPromptDryRunResponse> {
  declare codeChunks: CodeChunkContextInclusionInfo[];
  declare userMessageTokenLimit: number;
  declare userMessageTokenCount?: GetPromptDryRunResponse_TokenCount;
  declare fullConversationTokenCount?: GetPromptDryRunResponse_TokenCount;
  declare codeChunksV2: CodeChunkContextInclusionInfoV2[];
  declare folderExclusionTooltip: string;
  declare barFraction: number;
  declare didBarOverflow: boolean;
  declare shouldShowNewChatHint: boolean;
  constructor(data?: PartialMessage<_GetPromptDryRunResponse>) {
    super();
    this.codeChunks = [];
    this.userMessageTokenLimit = 0;
    this.codeChunksV2 = [];
    this.folderExclusionTooltip = "";
    this.barFraction = 0;
    this.didBarOverflow = false;
    this.shouldShowNewChatHint = false;
    proto3.util.initPartial(data, this as _GetPromptDryRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPromptDryRunResponse {
    return new _GetPromptDryRunResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPromptDryRunResponse {
    return new _GetPromptDryRunResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPromptDryRunResponse {
    return new _GetPromptDryRunResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPromptDryRunResponse | PlainMessage<_GetPromptDryRunResponse> | undefined | null, b2: _GetPromptDryRunResponse | PlainMessage<_GetPromptDryRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPromptDryRunResponse as unknown as MessageType<_GetPromptDryRunResponse>, a, b2);
  }
})();
export type GetPromptDryRunResponse = InstanceType<typeof GetPromptDryRunResponse$Runtime>;
var GetPromptDryRunResponse: MessageType<GetPromptDryRunResponse> = GetPromptDryRunResponse$Runtime as unknown as MessageType<GetPromptDryRunResponse>;
(GetPromptDryRunResponse as MutableMessageType<GetPromptDryRunResponse>).runtime = proto3;
(GetPromptDryRunResponse as MutableMessageType<GetPromptDryRunResponse>).typeName = "aiserver.v1.GetPromptDryRunResponse";
(GetPromptDryRunResponse as MutableMessageType<GetPromptDryRunResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_chunks", kind: "message", T: CodeChunkContextInclusionInfo, repeated: true },
  {
    no: 3,
    name: "user_message_token_limit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "user_message_token_count", kind: "message", T: GetPromptDryRunResponse_TokenCount },
  { no: 5, name: "full_conversation_token_count", kind: "message", T: GetPromptDryRunResponse_TokenCount },
  { no: 6, name: "code_chunks_v2", kind: "message", T: CodeChunkContextInclusionInfoV2, repeated: true },
  {
    no: 2,
    name: "folder_exclusion_tooltip",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "bar_fraction",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 8,
    name: "did_bar_overflow",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 9,
    name: "should_show_new_chat_hint",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetPromptDryRunResponse_TokenCount$Runtime = (() => class _GetPromptDryRunResponse_TokenCount extends Message<_GetPromptDryRunResponse_TokenCount> {
  declare isOverTokenLimit: boolean;
  declare numTokens?: number;
  constructor(data?: PartialMessage<_GetPromptDryRunResponse_TokenCount>) {
    super();
    this.isOverTokenLimit = false;
    proto3.util.initPartial(data, this as _GetPromptDryRunResponse_TokenCount);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPromptDryRunResponse_TokenCount {
    return new _GetPromptDryRunResponse_TokenCount().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPromptDryRunResponse_TokenCount {
    return new _GetPromptDryRunResponse_TokenCount().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPromptDryRunResponse_TokenCount {
    return new _GetPromptDryRunResponse_TokenCount().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPromptDryRunResponse_TokenCount | PlainMessage<_GetPromptDryRunResponse_TokenCount> | undefined | null, b2: _GetPromptDryRunResponse_TokenCount | PlainMessage<_GetPromptDryRunResponse_TokenCount> | undefined | null): boolean {
    return proto3.util.equals(_GetPromptDryRunResponse_TokenCount as unknown as MessageType<_GetPromptDryRunResponse_TokenCount>, a, b2);
  }
})();
export type GetPromptDryRunResponse_TokenCount = InstanceType<typeof GetPromptDryRunResponse_TokenCount$Runtime>;
var GetPromptDryRunResponse_TokenCount: MessageType<GetPromptDryRunResponse_TokenCount> = GetPromptDryRunResponse_TokenCount$Runtime as unknown as MessageType<GetPromptDryRunResponse_TokenCount>;
(GetPromptDryRunResponse_TokenCount as MutableMessageType<GetPromptDryRunResponse_TokenCount>).runtime = proto3;
(GetPromptDryRunResponse_TokenCount as MutableMessageType<GetPromptDryRunResponse_TokenCount>).typeName = "aiserver.v1.GetPromptDryRunResponse.TokenCount";
(GetPromptDryRunResponse_TokenCount as MutableMessageType<GetPromptDryRunResponse_TokenCount>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_over_token_limit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "num_tokens", kind: "scalar", T: 5, opt: true }
]);
var CodeChunkContextInclusionInfo$Runtime = (() => class _CodeChunkContextInclusionInfo extends Message<_CodeChunkContextInclusionInfo> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare endLineNumberInclusive: number;
  declare inclusionType: CodeChunkContextInclusionInfo_InclusionType;
  declare fullFileTokenCount: number;
  declare promptTokenCount: number;
  declare fullFileTokensCount?: CodeChunkContextInclusionInfo_TokenCount;
  declare exclusionTooltip?: string;
  declare intent: CodeChunkContextInclusionInfo_Intent;
  declare chunkIsFromLastUserMessage: boolean;
  declare isCompressed: boolean;
  constructor(data?: PartialMessage<_CodeChunkContextInclusionInfo>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    this.inclusionType = CodeChunkContextInclusionInfo_InclusionType.UNSPECIFIED;
    this.fullFileTokenCount = 0;
    this.promptTokenCount = 0;
    this.intent = CodeChunkContextInclusionInfo_Intent.UNSPECIFIED;
    this.chunkIsFromLastUserMessage = false;
    this.isCompressed = false;
    proto3.util.initPartial(data, this as _CodeChunkContextInclusionInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeChunkContextInclusionInfo {
    return new _CodeChunkContextInclusionInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfo {
    return new _CodeChunkContextInclusionInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfo {
    return new _CodeChunkContextInclusionInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeChunkContextInclusionInfo | PlainMessage<_CodeChunkContextInclusionInfo> | undefined | null, b2: _CodeChunkContextInclusionInfo | PlainMessage<_CodeChunkContextInclusionInfo> | undefined | null): boolean {
    return proto3.util.equals(_CodeChunkContextInclusionInfo as unknown as MessageType<_CodeChunkContextInclusionInfo>, a, b2);
  }
})();
export type CodeChunkContextInclusionInfo = InstanceType<typeof CodeChunkContextInclusionInfo$Runtime>;
var CodeChunkContextInclusionInfo: MessageType<CodeChunkContextInclusionInfo> = CodeChunkContextInclusionInfo$Runtime as unknown as MessageType<CodeChunkContextInclusionInfo>;
(CodeChunkContextInclusionInfo as MutableMessageType<CodeChunkContextInclusionInfo>).runtime = proto3;
(CodeChunkContextInclusionInfo as MutableMessageType<CodeChunkContextInclusionInfo>).typeName = "aiserver.v1.CodeChunkContextInclusionInfo";
(CodeChunkContextInclusionInfo as MutableMessageType<CodeChunkContextInclusionInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "inclusion_type", kind: "enum", T: proto3.getEnumType(CodeChunkContextInclusionInfo_InclusionType) },
  {
    no: 5,
    name: "full_file_token_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "prompt_token_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 11, name: "full_file_tokens_count", kind: "message", T: CodeChunkContextInclusionInfo_TokenCount },
  { no: 7, name: "exclusion_tooltip", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "intent", kind: "enum", T: proto3.getEnumType(CodeChunkContextInclusionInfo_Intent) },
  {
    no: 9,
    name: "chunk_is_from_last_user_message",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 10,
    name: "is_compressed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
(function(CodeChunkContextInclusionInfo_InclusionType2) {
  CodeChunkContextInclusionInfo_InclusionType2[CodeChunkContextInclusionInfo_InclusionType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunkContextInclusionInfo_InclusionType2[CodeChunkContextInclusionInfo_InclusionType2["FULL"] = 1] = "FULL";
  CodeChunkContextInclusionInfo_InclusionType2[CodeChunkContextInclusionInfo_InclusionType2["OUTLINE"] = 2] = "OUTLINE";
  CodeChunkContextInclusionInfo_InclusionType2[CodeChunkContextInclusionInfo_InclusionType2["FILENAME"] = 3] = "FILENAME";
})(CodeChunkContextInclusionInfo_InclusionType! || (CodeChunkContextInclusionInfo_InclusionType = {} as typeof CodeChunkContextInclusionInfo_InclusionType));
proto3.util.setEnumType(CodeChunkContextInclusionInfo_InclusionType, "aiserver.v1.CodeChunkContextInclusionInfo.InclusionType", [
  { no: 0, name: "INCLUSION_TYPE_UNSPECIFIED" },
  { no: 1, name: "INCLUSION_TYPE_FULL" },
  { no: 2, name: "INCLUSION_TYPE_OUTLINE" },
  { no: 3, name: "INCLUSION_TYPE_FILENAME" }
]);
(function(CodeChunkContextInclusionInfo_Intent2) {
  CodeChunkContextInclusionInfo_Intent2[CodeChunkContextInclusionInfo_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunkContextInclusionInfo_Intent2[CodeChunkContextInclusionInfo_Intent2["FILE"] = 1] = "FILE";
  CodeChunkContextInclusionInfo_Intent2[CodeChunkContextInclusionInfo_Intent2["SELECTION"] = 2] = "SELECTION";
})(CodeChunkContextInclusionInfo_Intent! || (CodeChunkContextInclusionInfo_Intent = {} as typeof CodeChunkContextInclusionInfo_Intent));
proto3.util.setEnumType(CodeChunkContextInclusionInfo_Intent, "aiserver.v1.CodeChunkContextInclusionInfo.Intent", [
  { no: 0, name: "INTENT_UNSPECIFIED" },
  { no: 1, name: "INTENT_FILE" },
  { no: 2, name: "INTENT_SELECTION" }
]);
var CodeChunkContextInclusionInfo_TokenCount$Runtime = (() => class _CodeChunkContextInclusionInfo_TokenCount extends Message<_CodeChunkContextInclusionInfo_TokenCount> {
  declare isTooLargeToCount: boolean;
  declare numTokens: number;
  constructor(data?: PartialMessage<_CodeChunkContextInclusionInfo_TokenCount>) {
    super();
    this.isTooLargeToCount = false;
    this.numTokens = 0;
    proto3.util.initPartial(data, this as _CodeChunkContextInclusionInfo_TokenCount);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeChunkContextInclusionInfo_TokenCount {
    return new _CodeChunkContextInclusionInfo_TokenCount().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfo_TokenCount {
    return new _CodeChunkContextInclusionInfo_TokenCount().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeChunkContextInclusionInfo_TokenCount {
    return new _CodeChunkContextInclusionInfo_TokenCount().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeChunkContextInclusionInfo_TokenCount | PlainMessage<_CodeChunkContextInclusionInfo_TokenCount> | undefined | null, b2: _CodeChunkContextInclusionInfo_TokenCount | PlainMessage<_CodeChunkContextInclusionInfo_TokenCount> | undefined | null): boolean {
    return proto3.util.equals(_CodeChunkContextInclusionInfo_TokenCount as unknown as MessageType<_CodeChunkContextInclusionInfo_TokenCount>, a, b2);
  }
})();
export type CodeChunkContextInclusionInfo_TokenCount = InstanceType<typeof CodeChunkContextInclusionInfo_TokenCount$Runtime>;
var CodeChunkContextInclusionInfo_TokenCount: MessageType<CodeChunkContextInclusionInfo_TokenCount> = CodeChunkContextInclusionInfo_TokenCount$Runtime as unknown as MessageType<CodeChunkContextInclusionInfo_TokenCount>;
(CodeChunkContextInclusionInfo_TokenCount as MutableMessageType<CodeChunkContextInclusionInfo_TokenCount>).runtime = proto3;
(CodeChunkContextInclusionInfo_TokenCount as MutableMessageType<CodeChunkContextInclusionInfo_TokenCount>).typeName = "aiserver.v1.CodeChunkContextInclusionInfo.TokenCount";
(CodeChunkContextInclusionInfo_TokenCount as MutableMessageType<CodeChunkContextInclusionInfo_TokenCount>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_too_large_to_count",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "num_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SubagentReturnCall$Runtime = (() => class _SubagentReturnCall extends Message<_SubagentReturnCall> {
  declare subagentType: SubagentType2;
  declare returnValue: { case: "deepSearchReturnValue"; value: DeepSearchSubagentReturnValue } | { case: "fixLintsReturnValue"; value: FixLintsSubagentReturnValue } | { case: "taskReturnValue"; value: TaskSubagentReturnValue } | { case: "specReturnValue"; value: SpecSubagentReturnValue } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentReturnCall>) {
    super();
    this.subagentType = SubagentType2.UNSPECIFIED;
    this.returnValue = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentReturnCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentReturnCall {
    return new _SubagentReturnCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentReturnCall {
    return new _SubagentReturnCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentReturnCall {
    return new _SubagentReturnCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentReturnCall | PlainMessage<_SubagentReturnCall> | undefined | null, b2: _SubagentReturnCall | PlainMessage<_SubagentReturnCall> | undefined | null): boolean {
    return proto3.util.equals(_SubagentReturnCall as unknown as MessageType<_SubagentReturnCall>, a, b2);
  }
})();
export type SubagentReturnCall = InstanceType<typeof SubagentReturnCall$Runtime>;
var SubagentReturnCall: MessageType<SubagentReturnCall> = SubagentReturnCall$Runtime as unknown as MessageType<SubagentReturnCall>;
(SubagentReturnCall as MutableMessageType<SubagentReturnCall>).runtime = proto3;
(SubagentReturnCall as MutableMessageType<SubagentReturnCall>).typeName = "aiserver.v1.SubagentReturnCall";
(SubagentReturnCall as MutableMessageType<SubagentReturnCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "subagent_type", kind: "enum", T: proto3.getEnumType(SubagentType2) },
  { no: 2, name: "deep_search_return_value", kind: "message", T: DeepSearchSubagentReturnValue, oneof: "return_value" },
  { no: 3, name: "fix_lints_return_value", kind: "message", T: FixLintsSubagentReturnValue, oneof: "return_value" },
  { no: 4, name: "task_return_value", kind: "message", T: TaskSubagentReturnValue, oneof: "return_value" },
  { no: 5, name: "spec_return_value", kind: "message", T: SpecSubagentReturnValue, oneof: "return_value" }
]);
var SubagentInfo$Runtime = (() => class _SubagentInfo extends Message<_SubagentInfo> {
  declare subagentType: SubagentType2;
  declare subagentId: string;
  declare parentRequestId?: string;
  declare params: { case: "deepSearchParams"; value: DeepSearchSubagentParams } | { case: "fixLintsParams"; value: FixLintsSubagentParams } | { case: "taskParams"; value: TaskSubagentParams } | { case: "specParams"; value: SpecSubagentParams } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentInfo>) {
    super();
    this.subagentType = SubagentType2.UNSPECIFIED;
    this.subagentId = "";
    this.params = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentInfo {
    return new _SubagentInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentInfo {
    return new _SubagentInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentInfo {
    return new _SubagentInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentInfo | PlainMessage<_SubagentInfo> | undefined | null, b2: _SubagentInfo | PlainMessage<_SubagentInfo> | undefined | null): boolean {
    return proto3.util.equals(_SubagentInfo as unknown as MessageType<_SubagentInfo>, a, b2);
  }
})();
export type SubagentInfo = InstanceType<typeof SubagentInfo$Runtime>;
var SubagentInfo: MessageType<SubagentInfo> = SubagentInfo$Runtime as unknown as MessageType<SubagentInfo>;
(SubagentInfo as MutableMessageType<SubagentInfo>).runtime = proto3;
(SubagentInfo as MutableMessageType<SubagentInfo>).typeName = "aiserver.v1.SubagentInfo";
(SubagentInfo as MutableMessageType<SubagentInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "subagent_type", kind: "enum", T: proto3.getEnumType(SubagentType2) },
  {
    no: 2,
    name: "subagent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "deep_search_params", kind: "message", T: DeepSearchSubagentParams, oneof: "params" },
  { no: 4, name: "fix_lints_params", kind: "message", T: FixLintsSubagentParams, oneof: "params" },
  { no: 6, name: "task_params", kind: "message", T: TaskSubagentParams, oneof: "params" },
  { no: 7, name: "spec_params", kind: "message", T: SpecSubagentParams, oneof: "params" },
  { no: 5, name: "parent_request_id", kind: "scalar", T: 9, opt: true }
]);
var DeepSearchSubagentParams$Runtime = (() => class _DeepSearchSubagentParams extends Message<_DeepSearchSubagentParams> {
  declare query: string;
  constructor(data?: PartialMessage<_DeepSearchSubagentParams>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _DeepSearchSubagentParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchSubagentParams {
    return new _DeepSearchSubagentParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchSubagentParams {
    return new _DeepSearchSubagentParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchSubagentParams {
    return new _DeepSearchSubagentParams().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchSubagentParams | PlainMessage<_DeepSearchSubagentParams> | undefined | null, b2: _DeepSearchSubagentParams | PlainMessage<_DeepSearchSubagentParams> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchSubagentParams as unknown as MessageType<_DeepSearchSubagentParams>, a, b2);
  }
})();
export type DeepSearchSubagentParams = InstanceType<typeof DeepSearchSubagentParams$Runtime>;
var DeepSearchSubagentParams: MessageType<DeepSearchSubagentParams> = DeepSearchSubagentParams$Runtime as unknown as MessageType<DeepSearchSubagentParams>;
(DeepSearchSubagentParams as MutableMessageType<DeepSearchSubagentParams>).runtime = proto3;
(DeepSearchSubagentParams as MutableMessageType<DeepSearchSubagentParams>).typeName = "aiserver.v1.DeepSearchSubagentParams";
(DeepSearchSubagentParams as MutableMessageType<DeepSearchSubagentParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeepSearchSubagentReturnValue$Runtime = (() => class _DeepSearchSubagentReturnValue extends Message<_DeepSearchSubagentReturnValue> {
  declare contextItems: DeepSearchSubagentReturnValue_ContextItem[];
  constructor(data?: PartialMessage<_DeepSearchSubagentReturnValue>) {
    super();
    this.contextItems = [];
    proto3.util.initPartial(data, this as _DeepSearchSubagentReturnValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchSubagentReturnValue {
    return new _DeepSearchSubagentReturnValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchSubagentReturnValue {
    return new _DeepSearchSubagentReturnValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchSubagentReturnValue {
    return new _DeepSearchSubagentReturnValue().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchSubagentReturnValue | PlainMessage<_DeepSearchSubagentReturnValue> | undefined | null, b2: _DeepSearchSubagentReturnValue | PlainMessage<_DeepSearchSubagentReturnValue> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchSubagentReturnValue as unknown as MessageType<_DeepSearchSubagentReturnValue>, a, b2);
  }
})();
export type DeepSearchSubagentReturnValue = InstanceType<typeof DeepSearchSubagentReturnValue$Runtime>;
var DeepSearchSubagentReturnValue: MessageType<DeepSearchSubagentReturnValue> = DeepSearchSubagentReturnValue$Runtime as unknown as MessageType<DeepSearchSubagentReturnValue>;
(DeepSearchSubagentReturnValue as MutableMessageType<DeepSearchSubagentReturnValue>).runtime = proto3;
(DeepSearchSubagentReturnValue as MutableMessageType<DeepSearchSubagentReturnValue>).typeName = "aiserver.v1.DeepSearchSubagentReturnValue";
(DeepSearchSubagentReturnValue as MutableMessageType<DeepSearchSubagentReturnValue>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: DeepSearchSubagentReturnValue_ContextItem, repeated: true }
]);
var DeepSearchSubagentReturnValue_ContextItem$Runtime = (() => class _DeepSearchSubagentReturnValue_ContextItem extends Message<_DeepSearchSubagentReturnValue_ContextItem> {
  declare file: string;
  declare lineRange?: LineRange;
  declare explanation: string;
  constructor(data?: PartialMessage<_DeepSearchSubagentReturnValue_ContextItem>) {
    super();
    this.file = "";
    this.explanation = "";
    proto3.util.initPartial(data, this as _DeepSearchSubagentReturnValue_ContextItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchSubagentReturnValue_ContextItem {
    return new _DeepSearchSubagentReturnValue_ContextItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchSubagentReturnValue_ContextItem {
    return new _DeepSearchSubagentReturnValue_ContextItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchSubagentReturnValue_ContextItem {
    return new _DeepSearchSubagentReturnValue_ContextItem().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchSubagentReturnValue_ContextItem | PlainMessage<_DeepSearchSubagentReturnValue_ContextItem> | undefined | null, b2: _DeepSearchSubagentReturnValue_ContextItem | PlainMessage<_DeepSearchSubagentReturnValue_ContextItem> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchSubagentReturnValue_ContextItem as unknown as MessageType<_DeepSearchSubagentReturnValue_ContextItem>, a, b2);
  }
})();
export type DeepSearchSubagentReturnValue_ContextItem = InstanceType<typeof DeepSearchSubagentReturnValue_ContextItem$Runtime>;
var DeepSearchSubagentReturnValue_ContextItem: MessageType<DeepSearchSubagentReturnValue_ContextItem> = DeepSearchSubagentReturnValue_ContextItem$Runtime as unknown as MessageType<DeepSearchSubagentReturnValue_ContextItem>;
(DeepSearchSubagentReturnValue_ContextItem as MutableMessageType<DeepSearchSubagentReturnValue_ContextItem>).runtime = proto3;
(DeepSearchSubagentReturnValue_ContextItem as MutableMessageType<DeepSearchSubagentReturnValue_ContextItem>).typeName = "aiserver.v1.DeepSearchSubagentReturnValue.ContextItem";
(DeepSearchSubagentReturnValue_ContextItem as MutableMessageType<DeepSearchSubagentReturnValue_ContextItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "line_range", kind: "message", T: LineRange, opt: true },
  {
    no: 3,
    name: "explanation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FixLintsSubagentParams$Runtime = (() => class _FixLintsSubagentParams extends Message<_FixLintsSubagentParams> {
  constructor(data?: PartialMessage<_FixLintsSubagentParams>) {
    super();
    proto3.util.initPartial(data, this as _FixLintsSubagentParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsSubagentParams {
    return new _FixLintsSubagentParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsSubagentParams {
    return new _FixLintsSubagentParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsSubagentParams {
    return new _FixLintsSubagentParams().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsSubagentParams | PlainMessage<_FixLintsSubagentParams> | undefined | null, b2: _FixLintsSubagentParams | PlainMessage<_FixLintsSubagentParams> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsSubagentParams as unknown as MessageType<_FixLintsSubagentParams>, a, b2);
  }
})();
export type FixLintsSubagentParams = InstanceType<typeof FixLintsSubagentParams$Runtime>;
var FixLintsSubagentParams: MessageType<FixLintsSubagentParams> = FixLintsSubagentParams$Runtime as unknown as MessageType<FixLintsSubagentParams>;
(FixLintsSubagentParams as MutableMessageType<FixLintsSubagentParams>).runtime = proto3;
(FixLintsSubagentParams as MutableMessageType<FixLintsSubagentParams>).typeName = "aiserver.v1.FixLintsSubagentParams";
(FixLintsSubagentParams as MutableMessageType<FixLintsSubagentParams>).fields = proto3.util.newFieldList(() => []);
var FixLintsSubagentReturnValue$Runtime = (() => class _FixLintsSubagentReturnValue extends Message<_FixLintsSubagentReturnValue> {
  constructor(data?: PartialMessage<_FixLintsSubagentReturnValue>) {
    super();
    proto3.util.initPartial(data, this as _FixLintsSubagentReturnValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsSubagentReturnValue {
    return new _FixLintsSubagentReturnValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsSubagentReturnValue {
    return new _FixLintsSubagentReturnValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsSubagentReturnValue {
    return new _FixLintsSubagentReturnValue().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsSubagentReturnValue | PlainMessage<_FixLintsSubagentReturnValue> | undefined | null, b2: _FixLintsSubagentReturnValue | PlainMessage<_FixLintsSubagentReturnValue> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsSubagentReturnValue as unknown as MessageType<_FixLintsSubagentReturnValue>, a, b2);
  }
})();
export type FixLintsSubagentReturnValue = InstanceType<typeof FixLintsSubagentReturnValue$Runtime>;
var FixLintsSubagentReturnValue: MessageType<FixLintsSubagentReturnValue> = FixLintsSubagentReturnValue$Runtime as unknown as MessageType<FixLintsSubagentReturnValue>;
(FixLintsSubagentReturnValue as MutableMessageType<FixLintsSubagentReturnValue>).runtime = proto3;
(FixLintsSubagentReturnValue as MutableMessageType<FixLintsSubagentReturnValue>).typeName = "aiserver.v1.FixLintsSubagentReturnValue";
(FixLintsSubagentReturnValue as MutableMessageType<FixLintsSubagentReturnValue>).fields = proto3.util.newFieldList(() => []);
var TaskSubagentParams$Runtime = (() => class _TaskSubagentParams extends Message<_TaskSubagentParams> {
  declare taskDescription: string;
  declare allowedWriteDirectories: string[];
  constructor(data?: PartialMessage<_TaskSubagentParams>) {
    super();
    this.taskDescription = "";
    this.allowedWriteDirectories = [];
    proto3.util.initPartial(data, this as _TaskSubagentParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskSubagentParams {
    return new _TaskSubagentParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskSubagentParams {
    return new _TaskSubagentParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskSubagentParams {
    return new _TaskSubagentParams().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskSubagentParams | PlainMessage<_TaskSubagentParams> | undefined | null, b2: _TaskSubagentParams | PlainMessage<_TaskSubagentParams> | undefined | null): boolean {
    return proto3.util.equals(_TaskSubagentParams as unknown as MessageType<_TaskSubagentParams>, a, b2);
  }
})();
export type TaskSubagentParams = InstanceType<typeof TaskSubagentParams$Runtime>;
var TaskSubagentParams: MessageType<TaskSubagentParams> = TaskSubagentParams$Runtime as unknown as MessageType<TaskSubagentParams>;
(TaskSubagentParams as MutableMessageType<TaskSubagentParams>).runtime = proto3;
(TaskSubagentParams as MutableMessageType<TaskSubagentParams>).typeName = "aiserver.v1.TaskSubagentParams";
(TaskSubagentParams as MutableMessageType<TaskSubagentParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "allowed_write_directories", kind: "scalar", T: 9, repeated: true }
]);
var TaskSubagentReturnValue$Runtime = (() => class _TaskSubagentReturnValue extends Message<_TaskSubagentReturnValue> {
  declare summary: string;
  constructor(data?: PartialMessage<_TaskSubagentReturnValue>) {
    super();
    this.summary = "";
    proto3.util.initPartial(data, this as _TaskSubagentReturnValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskSubagentReturnValue {
    return new _TaskSubagentReturnValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskSubagentReturnValue {
    return new _TaskSubagentReturnValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskSubagentReturnValue {
    return new _TaskSubagentReturnValue().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskSubagentReturnValue | PlainMessage<_TaskSubagentReturnValue> | undefined | null, b2: _TaskSubagentReturnValue | PlainMessage<_TaskSubagentReturnValue> | undefined | null): boolean {
    return proto3.util.equals(_TaskSubagentReturnValue as unknown as MessageType<_TaskSubagentReturnValue>, a, b2);
  }
})();
export type TaskSubagentReturnValue = InstanceType<typeof TaskSubagentReturnValue$Runtime>;
var TaskSubagentReturnValue: MessageType<TaskSubagentReturnValue> = TaskSubagentReturnValue$Runtime as unknown as MessageType<TaskSubagentReturnValue>;
(TaskSubagentReturnValue as MutableMessageType<TaskSubagentReturnValue>).runtime = proto3;
(TaskSubagentReturnValue as MutableMessageType<TaskSubagentReturnValue>).typeName = "aiserver.v1.TaskSubagentReturnValue";
(TaskSubagentReturnValue as MutableMessageType<TaskSubagentReturnValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SpecSubagentParams$Runtime = (() => class _SpecSubagentParams extends Message<_SpecSubagentParams> {
  declare plan: string;
  constructor(data?: PartialMessage<_SpecSubagentParams>) {
    super();
    this.plan = "";
    proto3.util.initPartial(data, this as _SpecSubagentParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpecSubagentParams {
    return new _SpecSubagentParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpecSubagentParams {
    return new _SpecSubagentParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpecSubagentParams {
    return new _SpecSubagentParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SpecSubagentParams | PlainMessage<_SpecSubagentParams> | undefined | null, b2: _SpecSubagentParams | PlainMessage<_SpecSubagentParams> | undefined | null): boolean {
    return proto3.util.equals(_SpecSubagentParams as unknown as MessageType<_SpecSubagentParams>, a, b2);
  }
})();
export type SpecSubagentParams = InstanceType<typeof SpecSubagentParams$Runtime>;
var SpecSubagentParams: MessageType<SpecSubagentParams> = SpecSubagentParams$Runtime as unknown as MessageType<SpecSubagentParams>;
(SpecSubagentParams as MutableMessageType<SpecSubagentParams>).runtime = proto3;
(SpecSubagentParams as MutableMessageType<SpecSubagentParams>).typeName = "aiserver.v1.SpecSubagentParams";
(SpecSubagentParams as MutableMessageType<SpecSubagentParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SpecSubagentReturnValue$Runtime = (() => class _SpecSubagentReturnValue extends Message<_SpecSubagentReturnValue> {
  declare summary: string;
  declare stringReplacements: StringReplacement[];
  constructor(data?: PartialMessage<_SpecSubagentReturnValue>) {
    super();
    this.summary = "";
    this.stringReplacements = [];
    proto3.util.initPartial(data, this as _SpecSubagentReturnValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SpecSubagentReturnValue {
    return new _SpecSubagentReturnValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SpecSubagentReturnValue {
    return new _SpecSubagentReturnValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SpecSubagentReturnValue {
    return new _SpecSubagentReturnValue().fromJsonString(jsonString, options);
  }
  static equals(a: _SpecSubagentReturnValue | PlainMessage<_SpecSubagentReturnValue> | undefined | null, b2: _SpecSubagentReturnValue | PlainMessage<_SpecSubagentReturnValue> | undefined | null): boolean {
    return proto3.util.equals(_SpecSubagentReturnValue as unknown as MessageType<_SpecSubagentReturnValue>, a, b2);
  }
})();
export type SpecSubagentReturnValue = InstanceType<typeof SpecSubagentReturnValue$Runtime>;
var SpecSubagentReturnValue: MessageType<SpecSubagentReturnValue> = SpecSubagentReturnValue$Runtime as unknown as MessageType<SpecSubagentReturnValue>;
(SpecSubagentReturnValue as MutableMessageType<SpecSubagentReturnValue>).runtime = proto3;
(SpecSubagentReturnValue as MutableMessageType<SpecSubagentReturnValue>).typeName = "aiserver.v1.SpecSubagentReturnValue";
(SpecSubagentReturnValue as MutableMessageType<SpecSubagentReturnValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "string_replacements", kind: "message", T: StringReplacement, repeated: true }
]);
var StringReplacement$Runtime = (() => class _StringReplacement extends Message<_StringReplacement> {
  declare oldString: string;
  declare newString: string;
  constructor(data?: PartialMessage<_StringReplacement>) {
    super();
    this.oldString = "";
    this.newString = "";
    proto3.util.initPartial(data, this as _StringReplacement);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StringReplacement {
    return new _StringReplacement().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StringReplacement {
    return new _StringReplacement().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StringReplacement {
    return new _StringReplacement().fromJsonString(jsonString, options);
  }
  static equals(a: _StringReplacement | PlainMessage<_StringReplacement> | undefined | null, b2: _StringReplacement | PlainMessage<_StringReplacement> | undefined | null): boolean {
    return proto3.util.equals(_StringReplacement as unknown as MessageType<_StringReplacement>, a, b2);
  }
})();
export type StringReplacement = InstanceType<typeof StringReplacement$Runtime>;
var StringReplacement: MessageType<StringReplacement> = StringReplacement$Runtime as unknown as MessageType<StringReplacement>;
(StringReplacement as MutableMessageType<StringReplacement>).runtime = proto3;
(StringReplacement as MutableMessageType<StringReplacement>).typeName = "aiserver.v1.StringReplacement";
(StringReplacement as MutableMessageType<StringReplacement>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "old_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ProjectLayout$Runtime = (() => class _ProjectLayout extends Message<_ProjectLayout> {
  declare rootPath: string;
  declare content?: ProjectLayoutDirectoryContent;
  declare listDirV2Result?: ListDirV2Result;
  constructor(data?: PartialMessage<_ProjectLayout>) {
    super();
    this.rootPath = "";
    proto3.util.initPartial(data, this as _ProjectLayout);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectLayout {
    return new _ProjectLayout().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectLayout {
    return new _ProjectLayout().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectLayout {
    return new _ProjectLayout().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectLayout | PlainMessage<_ProjectLayout> | undefined | null, b2: _ProjectLayout | PlainMessage<_ProjectLayout> | undefined | null): boolean {
    return proto3.util.equals(_ProjectLayout as unknown as MessageType<_ProjectLayout>, a, b2);
  }
})();
export type ProjectLayout = InstanceType<typeof ProjectLayout$Runtime>;
var ProjectLayout: MessageType<ProjectLayout> = ProjectLayout$Runtime as unknown as MessageType<ProjectLayout>;
(ProjectLayout as MutableMessageType<ProjectLayout>).runtime = proto3;
(ProjectLayout as MutableMessageType<ProjectLayout>).typeName = "aiserver.v1.ProjectLayout";
(ProjectLayout as MutableMessageType<ProjectLayout>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "content", kind: "message", T: ProjectLayoutDirectoryContent },
  { no: 3, name: "list_dir_v2_result", kind: "message", T: ListDirV2Result, opt: true }
]);
var ProjectLayoutDirectoryContent$Runtime = (() => class _ProjectLayoutDirectoryContent extends Message<_ProjectLayoutDirectoryContent> {
  declare directories: ProjectLayoutDirectory[];
  declare files: ProjectLayoutFile[];
  declare totalFiles?: number;
  declare totalSubfolders?: number;
  declare hiddenFiles: ProjectLayoutFile[];
  constructor(data?: PartialMessage<_ProjectLayoutDirectoryContent>) {
    super();
    this.directories = [];
    this.files = [];
    this.hiddenFiles = [];
    proto3.util.initPartial(data, this as _ProjectLayoutDirectoryContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectLayoutDirectoryContent {
    return new _ProjectLayoutDirectoryContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectLayoutDirectoryContent {
    return new _ProjectLayoutDirectoryContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectLayoutDirectoryContent {
    return new _ProjectLayoutDirectoryContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectLayoutDirectoryContent | PlainMessage<_ProjectLayoutDirectoryContent> | undefined | null, b2: _ProjectLayoutDirectoryContent | PlainMessage<_ProjectLayoutDirectoryContent> | undefined | null): boolean {
    return proto3.util.equals(_ProjectLayoutDirectoryContent as unknown as MessageType<_ProjectLayoutDirectoryContent>, a, b2);
  }
})();
export interface ProjectLayoutDirectoryContent extends Message<ProjectLayoutDirectoryContent> {
  directories: ProjectLayoutDirectory[];
  files: ProjectLayoutFile[];
  totalFiles?: number;
  totalSubfolders?: number;
  hiddenFiles: ProjectLayoutFile[];
}
var ProjectLayoutDirectoryContent: MessageType<ProjectLayoutDirectoryContent> = ProjectLayoutDirectoryContent$Runtime as unknown as MessageType<ProjectLayoutDirectoryContent>;
(ProjectLayoutDirectoryContent as MutableMessageType<ProjectLayoutDirectoryContent>).runtime = proto3;
(ProjectLayoutDirectoryContent as MutableMessageType<ProjectLayoutDirectoryContent>).typeName = "aiserver.v1.ProjectLayoutDirectoryContent";
(ProjectLayoutDirectoryContent as MutableMessageType<ProjectLayoutDirectoryContent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directories", kind: "message", T: ProjectLayoutDirectory, repeated: true },
  { no: 2, name: "files", kind: "message", T: ProjectLayoutFile, repeated: true },
  { no: 3, name: "total_files", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "total_subfolders", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "hidden_files", kind: "message", T: ProjectLayoutFile, repeated: true }
]);
var ProjectLayoutDirectory$Runtime = (() => class _ProjectLayoutDirectory extends Message<_ProjectLayoutDirectory> {
  declare name: string;
  declare content?: ProjectLayoutDirectoryContent;
  constructor(data?: PartialMessage<_ProjectLayoutDirectory>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _ProjectLayoutDirectory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectLayoutDirectory {
    return new _ProjectLayoutDirectory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectLayoutDirectory {
    return new _ProjectLayoutDirectory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectLayoutDirectory {
    return new _ProjectLayoutDirectory().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectLayoutDirectory | PlainMessage<_ProjectLayoutDirectory> | undefined | null, b2: _ProjectLayoutDirectory | PlainMessage<_ProjectLayoutDirectory> | undefined | null): boolean {
    return proto3.util.equals(_ProjectLayoutDirectory as unknown as MessageType<_ProjectLayoutDirectory>, a, b2);
  }
})();
export interface ProjectLayoutDirectory extends Message<ProjectLayoutDirectory> {
  name: string;
  content?: ProjectLayoutDirectoryContent;
}
var ProjectLayoutDirectory: MessageType<ProjectLayoutDirectory> = ProjectLayoutDirectory$Runtime as unknown as MessageType<ProjectLayoutDirectory>;
(ProjectLayoutDirectory as MutableMessageType<ProjectLayoutDirectory>).runtime = proto3;
(ProjectLayoutDirectory as MutableMessageType<ProjectLayoutDirectory>).typeName = "aiserver.v1.ProjectLayoutDirectory";
(ProjectLayoutDirectory as MutableMessageType<ProjectLayoutDirectory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "content", kind: "message", T: ProjectLayoutDirectoryContent }
]);
var ProjectLayoutFile$Runtime = (() => class _ProjectLayoutFile extends Message<_ProjectLayoutFile> {
  declare name: string;
  constructor(data?: PartialMessage<_ProjectLayoutFile>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _ProjectLayoutFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectLayoutFile {
    return new _ProjectLayoutFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectLayoutFile {
    return new _ProjectLayoutFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectLayoutFile {
    return new _ProjectLayoutFile().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectLayoutFile | PlainMessage<_ProjectLayoutFile> | undefined | null, b2: _ProjectLayoutFile | PlainMessage<_ProjectLayoutFile> | undefined | null): boolean {
    return proto3.util.equals(_ProjectLayoutFile as unknown as MessageType<_ProjectLayoutFile>, a, b2);
  }
})();
export type ProjectLayoutFile = InstanceType<typeof ProjectLayoutFile$Runtime>;
var ProjectLayoutFile: MessageType<ProjectLayoutFile> = ProjectLayoutFile$Runtime as unknown as MessageType<ProjectLayoutFile>;
(ProjectLayoutFile as MutableMessageType<ProjectLayoutFile>).runtime = proto3;
(ProjectLayoutFile as MutableMessageType<ProjectLayoutFile>).typeName = "aiserver.v1.ProjectLayoutFile";
(ProjectLayoutFile as MutableMessageType<ProjectLayoutFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConvertOALToNALRequest$Runtime = (() => class _ConvertOALToNALRequest extends Message<_ConvertOALToNALRequest> {
  declare request?: StreamUnifiedChatRequest;
  declare fileStates: { [key: string]: FileState };
  constructor(data?: PartialMessage<_ConvertOALToNALRequest>) {
    super();
    this.fileStates = {};
    proto3.util.initPartial(data, this as _ConvertOALToNALRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConvertOALToNALRequest {
    return new _ConvertOALToNALRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConvertOALToNALRequest {
    return new _ConvertOALToNALRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConvertOALToNALRequest {
    return new _ConvertOALToNALRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ConvertOALToNALRequest | PlainMessage<_ConvertOALToNALRequest> | undefined | null, b2: _ConvertOALToNALRequest | PlainMessage<_ConvertOALToNALRequest> | undefined | null): boolean {
    return proto3.util.equals(_ConvertOALToNALRequest as unknown as MessageType<_ConvertOALToNALRequest>, a, b2);
  }
})();
export type ConvertOALToNALRequest = InstanceType<typeof ConvertOALToNALRequest$Runtime>;
var ConvertOALToNALRequest: MessageType<ConvertOALToNALRequest> = ConvertOALToNALRequest$Runtime as unknown as MessageType<ConvertOALToNALRequest>;
(ConvertOALToNALRequest as MutableMessageType<ConvertOALToNALRequest>).runtime = proto3;
(ConvertOALToNALRequest as MutableMessageType<ConvertOALToNALRequest>).typeName = "aiserver.v1.ConvertOALToNALRequest";
(ConvertOALToNALRequest as MutableMessageType<ConvertOALToNALRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: StreamUnifiedChatRequest },
  { no: 2, name: "file_states", kind: "map", K: 9, V: { kind: "message", T: FileState } }
]);
var ConvertOALToNALResponse$Runtime = (() => class _ConvertOALToNALResponse extends Message<_ConvertOALToNALResponse> {
  declare conversationState?: ConversationStateStructure;
  declare blobs: { [key: string]: Uint8Array };
  declare bubbleCheckpoints: { [key: string]: ConversationStateStructure };
  constructor(data?: PartialMessage<_ConvertOALToNALResponse>) {
    super();
    this.blobs = {};
    this.bubbleCheckpoints = {};
    proto3.util.initPartial(data, this as _ConvertOALToNALResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConvertOALToNALResponse {
    return new _ConvertOALToNALResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConvertOALToNALResponse {
    return new _ConvertOALToNALResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConvertOALToNALResponse {
    return new _ConvertOALToNALResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ConvertOALToNALResponse | PlainMessage<_ConvertOALToNALResponse> | undefined | null, b2: _ConvertOALToNALResponse | PlainMessage<_ConvertOALToNALResponse> | undefined | null): boolean {
    return proto3.util.equals(_ConvertOALToNALResponse as unknown as MessageType<_ConvertOALToNALResponse>, a, b2);
  }
})();
export type ConvertOALToNALResponse = InstanceType<typeof ConvertOALToNALResponse$Runtime>;
var ConvertOALToNALResponse: MessageType<ConvertOALToNALResponse> = ConvertOALToNALResponse$Runtime as unknown as MessageType<ConvertOALToNALResponse>;
(ConvertOALToNALResponse as MutableMessageType<ConvertOALToNALResponse>).runtime = proto3;
(ConvertOALToNALResponse as MutableMessageType<ConvertOALToNALResponse>).typeName = "aiserver.v1.ConvertOALToNALResponse";
(ConvertOALToNALResponse as MutableMessageType<ConvertOALToNALResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "conversation_state", kind: "message", T: ConversationStateStructure },
  { no: 2, name: "blobs", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  } },
  { no: 3, name: "bubble_checkpoints", kind: "map", K: 9, V: { kind: "message", T: ConversationStateStructure } }
]);


export { ChunkType, SubagentType2, StreamReplayChatRequest, StreamUnifiedChatRequestWithTools, UserRules, StreamStart, SpanContext, StreamUnifiedChatResponseWithTools, StreamUnifiedChatRequestWithToolsIdempotent, WelcomeMessage, StreamUnifiedChatResponseWithToolsIdempotent, ConversationSummaryStrategy, ConversationSummaryStrategy_ArbitrarySummaryPlusToolResultTruncation, ConversationSummary2, ContextToRank, RankedContext, DocumentationCitation, WebCitation, WebReference, DocsReference, AiWebSearchResult, AiWebSearchResults, StatusUpdate, StatusUpdates, RerankDocumentsRequest, RerankDocumentsResponse, Document, DocumentIdsWithScores, ComposerFileDiffHistory, WorkspaceFolder, StreamUnifiedChatRequest, StreamUnifiedChatRequest_UnifiedMode, StreamUnifiedChatRequest_ThinkingLevel, StreamUnifiedChatRequest_RedDiff, StreamUnifiedChatRequest_RecentEdits, StreamUnifiedChatRequest_RecentEdits_CodeBlockInfo, StreamUnifiedChatRequest_RecentEdits_FileInfo, StreamUnifiedChatRequest_CodeSearchResult, StreamUnifiedChatRequest_FullFileCmdKOptions, StreamUnifiedChatRequest_CurrentPlan, ContextPiece, ContextPieceUpdate, StreamUnifiedChatResponse, StreamUnifiedChatResponse_UsedCode, StreamUnifiedChatResponse_ChunkIdentity, StreamUnifiedChatResponse_FinalToolResult, StreamUnifiedChatResponse_ImageDescription, ContextWindowStatus, StarsFeedbackRequest, ConversationSummaryStarter, ServiceStatusUpdate, SymbolLink, FileLink, RedDiff, ConversationMessageHeader, DiffFile, ViewableCommitProps, ViewablePRProps, ViewableDiffProps, ViewableGitContext, ConversationMessage, ConversationMessage_MessageType, ConversationMessage_ThinkingStyle, ConversationMessage_CodeChunk, ConversationMessage_CodeChunk_Intent, ConversationMessage_CodeChunk_SummarizationStrategy, ConversationMessage_CodeChunk_CodeChunkGitContext, ConversationMessage_CodeChunk_CodeChunkGitContext_CodeChunkGitInfo, ConversationMessage_ToolResult, ConversationMessage_MultiRangeCodeChunk, ConversationMessage_MultiRangeCodeChunk_RangeWithPriority, ConversationMessage_NotepadContext, ConversationMessage_ComposerContext, ConversationMessage_EditLocation, ConversationMessage_EditTrailContext, ConversationMessage_ApproximateLintError, ConversationMessage_Lints, ConversationMessage_RecentLocation, ConversationMessage_RenderedDiff, ConversationMessage_HumanChange, ConversationMessage_Thinking, ConversationMessage_DiffSinceLastApply, ConversationMessage_DeletedFile, ConversationMessage_KnowledgeItem, ConversationMessage_DocumentationSelection, ConversationMessage_IdeEditorsState, ConversationMessage_IdeEditorsState_File, ConversationMessage_PlanUpdate, ConversationMessage_SimulatedMessageMetadata, ConversationMessage_McpDescriptor, ConversationMessage_McpDescriptor_Tool, CurrentFileLocationData, SearchInfo, SearchFileInfo, FolderInfo, FolderFileInfo, InterpreterResult, SimpleFileDiff, SimpleFileDiff_Chunk, Commit, PullRequest, SuggestedCodeBlock, UserResponseToSuggestedCodeBlock, UserResponseToSuggestedCodeBlock_UserResponseType, ContextRerankingCandidateFile, ComposerFileDiff, ComposerFileDiff_Editor, ComposerFileDiff_ChunkDiff, DiffHistoryData, WarmStreamUnifiedChatWithToolsResponse, CodeChunkContextInclusionInfoV2, CodeChunkContextInclusionInfoV2_Intent, CodeChunkContextInclusionInfoV2_InclusionType, GetPromptDryRunResponse, GetPromptDryRunResponse_TokenCount, CodeChunkContextInclusionInfo, CodeChunkContextInclusionInfo_InclusionType, CodeChunkContextInclusionInfo_Intent, CodeChunkContextInclusionInfo_TokenCount, SubagentReturnCall, SubagentInfo, DeepSearchSubagentParams, DeepSearchSubagentReturnValue, DeepSearchSubagentReturnValue_ContextItem, FixLintsSubagentParams, FixLintsSubagentReturnValue, TaskSubagentParams, TaskSubagentReturnValue, SpecSubagentParams, SpecSubagentReturnValue, StringReplacement, ProjectLayout, ProjectLayoutDirectoryContent, ProjectLayoutDirectory, ProjectLayoutFile, ConvertOALToNALRequest, ConvertOALToNALResponse };
