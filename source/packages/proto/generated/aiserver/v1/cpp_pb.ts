/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:171518-177366
 * Region SHA-256: 1848efb0dc3975aaa583fb12f8a25e5dfd154b7e33a7a346f75a42f48c5d305d
 * AI Server closure exports: 156 messages + 17 enums = 173
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { CursorPosition, SelectionWithOrientation, SimpleRange, LineRange, CurrentFileInfo, ModelDetails, ModelInfo, LinterError, LinterErrors } from "./utils_pb.js";
import { LspSubgraphFullContext } from "./lsp_subgraph_pb.js";
import { FilesyncUpdateWithModelVersion } from "./filesyncserver_pb.js";
import { CodeResult, RepositoryInfo } from "./repository_pb.js";
import { BugLocation, BugReport, BugReports } from "./bugbot_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type CppFate = 0 | 1 | 2 | 3;
var CppFate: {
  "UNSPECIFIED": 0;
  "ACCEPT": 1;
  "REJECT": 2;
  "PARTIAL_ACCEPT": 3;
  0: "UNSPECIFIED";
  1: "ACCEPT";
  2: "REJECT";
  3: "PARTIAL_ACCEPT";
};
export type CppSource = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
var CppSource: {
  "UNSPECIFIED": 0;
  "LINE_CHANGE": 1;
  "TYPING": 2;
  "OPTION_HOLD": 3;
  "LINTER_ERRORS": 4;
  "PARAMETER_HINTS": 5;
  "CURSOR_PREDICTION": 6;
  "MANUAL_TRIGGER": 7;
  "EDITOR_CHANGE": 8;
  "LSP_SUGGESTIONS": 9;
  0: "UNSPECIFIED";
  1: "LINE_CHANGE";
  2: "TYPING";
  3: "OPTION_HOLD";
  4: "LINTER_ERRORS";
  5: "PARAMETER_HINTS";
  6: "CURSOR_PREDICTION";
  7: "MANUAL_TRIGGER";
  8: "EDITOR_CHANGE";
  9: "LSP_SUGGESTIONS";
};
export type StreamCppRequest_ControlToken = 0 | 1 | 2 | 3;
var StreamCppRequest_ControlToken: {
  "UNSPECIFIED": 0;
  "QUIET": 1;
  "LOUD": 2;
  "OP": 3;
  0: "UNSPECIFIED";
  1: "QUIET";
  2: "LOUD";
  3: "OP";
};
export type CppConfigResponse_Heuristic = 0 | 1 | 2 | 3 | 4 | 5 | 6;
var CppConfigResponse_Heuristic: {
  "UNSPECIFIED": 0;
  "LOTS_OF_ADDED_TEXT": 1;
  "DUPLICATING_LINE_AFTER_SUGGESTION": 2;
  "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION": 3;
  "REVERTING_USER_CHANGE": 4;
  "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED": 5;
  "SUGGESTING_RECENTLY_REJECTED_EDIT": 6;
  0: "UNSPECIFIED";
  1: "LOTS_OF_ADDED_TEXT";
  2: "DUPLICATING_LINE_AFTER_SUGGESTION";
  3: "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION";
  4: "REVERTING_USER_CHANGE";
  5: "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED";
  6: "SUGGESTING_RECENTLY_REJECTED_EDIT";
};
export type MarkCppRequest_CppResponseTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
var MarkCppRequest_CppResponseTypes: {
  "UNSPECIFIED": 0;
  "GOOD": 1;
  "BAD": 2;
  "BAD_CONTEXT": 3;
  "BAD_REASONING": 4;
  "BAD_STUPID_MISTAKE": 5;
  "BAD_FORMATTING": 6;
  "BAD_RANGE": 7;
  "GOOD_PREDICTION": 8;
  "BAD_FALSE_POSITIVE_TRIGGER": 9;
  "BAD_FALSE_NEGATIVE_TRIGGER": 10;
  0: "UNSPECIFIED";
  1: "GOOD";
  2: "BAD";
  3: "BAD_CONTEXT";
  4: "BAD_REASONING";
  5: "BAD_STUPID_MISTAKE";
  6: "BAD_FORMATTING";
  7: "BAD_RANGE";
  8: "GOOD_PREDICTION";
  9: "BAD_FALSE_POSITIVE_TRIGGER";
  10: "BAD_FALSE_NEGATIVE_TRIGGER";
};
export type CursorPrediction_CursorPredictionSource = 0 | 1 | 2 | 3 | 4;
var CursorPrediction_CursorPredictionSource: {
  "UNSPECIFIED": 0;
  "ALWAYS_ON": 1;
  "ACCEPT": 2;
  "UNDO": 3;
  "EDITOR_CHANGE": 4;
  0: "UNSPECIFIED";
  1: "ALWAYS_ON";
  2: "ACCEPT";
  3: "UNDO";
  4: "EDITOR_CHANGE";
};
export type CppStoppedTrackingModelEvent_StoppedTrackingModelReason = 0 | 1 | 2 | 3;
var CppStoppedTrackingModelEvent_StoppedTrackingModelReason: {
  "UNSPECIFIED": 0;
  "FILE_TOO_BIG": 1;
  "FILE_DISPOSED": 2;
  "CHANGE_TOO_BIG": 3;
  0: "UNSPECIFIED";
  1: "FILE_TOO_BIG";
  2: "FILE_DISPOSED";
  3: "CHANGE_TOO_BIG";
};
export type BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic = 0 | 1 | 2;
var BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic: {
  "UNSPECIFIED": 0;
  "LINT_OVERLAP": 1;
  "LINES_MISMATCH": 2;
  0: "UNSPECIFIED";
  1: "LINT_OVERLAP";
  2: "LINES_MISMATCH";
};
export type BugBotEvent_BackgroundIntervalInterruptedReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
var BugBotEvent_BackgroundIntervalInterruptedReason: {
  "UNSPECIFIED": 0;
  "DISABLED": 1;
  "TOO_RECENT": 2;
  "UNVIEWED_BUG_REPORTS": 3;
  "NOT_IN_GIT_REPO": 4;
  "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH": 5;
  "NO_GIT_USER": 6;
  "NO_LAST_COMMIT": 7;
  "LAST_COMMIT_NOT_MADE_BY_USER": 8;
  "LAST_COMMIT_TOO_OLD": 9;
  "DIFF_TOO_LONG": 10;
  "DIFF_TOO_SHORT": 11;
  "TELEMETRY_UNHEALTHY": 12;
  0: "UNSPECIFIED";
  1: "DISABLED";
  2: "TOO_RECENT";
  3: "UNVIEWED_BUG_REPORTS";
  4: "NOT_IN_GIT_REPO";
  5: "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH";
  6: "NO_GIT_USER";
  7: "NO_LAST_COMMIT";
  8: "LAST_COMMIT_NOT_MADE_BY_USER";
  9: "LAST_COMMIT_TOO_OLD";
  10: "DIFF_TOO_LONG";
  11: "DIFF_TOO_SHORT";
  12: "TELEMETRY_UNHEALTHY";
};
export type AiRequestEvent_RequestType = 0 | 1 | 2;
var AiRequestEvent_RequestType: {
  "UNSPECIFIED": 0;
  "START": 1;
  "END": 2;
  0: "UNSPECIFIED";
  1: "START";
  2: "END";
};
export type AiRequestEvent_Source = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
var AiRequestEvent_Source: {
  "UNSPECIFIED": 0;
  "CHAT": 1;
  "CMDK": 2;
  "APPLY": 3;
  "COMPOSER": 4;
  "TASK": 5;
  "CODE_INTERPRETER": 6;
  "INTERPRETER_EXECUTION": 7;
  "BUGBOT": 8;
  0: "UNSPECIFIED";
  1: "CHAT";
  2: "CMDK";
  3: "APPLY";
  4: "COMPOSER";
  5: "TASK";
  6: "CODE_INTERPRETER";
  7: "INTERPRETER_EXECUTION";
  8: "BUGBOT";
};
export type EditHistoryAppendChangesRequest_PrivacyModeStatus = 0 | 1 | 2 | 3;
var EditHistoryAppendChangesRequest_PrivacyModeStatus: {
  "UNSPECIFIED": 0;
  "PRIVACY_ENABLED": 1;
  "IMPLICIT_NO_PRIVACY": 2;
  "EXPLICIT_NO_PRIVACY": 3;
  0: "UNSPECIFIED";
  1: "PRIVACY_ENABLED";
  2: "IMPLICIT_NO_PRIVACY";
  3: "EXPLICIT_NO_PRIVACY";
};
export type CppTimelineEvent_Change_Status = 0 | 1 | 2 | 3;
var CppTimelineEvent_Change_Status: {
  "UNSPECIFIED": 0;
  "CORRECT": 1;
  "UNVALIDATED": 2;
  "INCORRECT": 3;
  0: "UNSPECIFIED";
  1: "CORRECT";
  2: "UNVALIDATED";
  3: "INCORRECT";
};
export type BrowserEvent_ToolAction_Source = 0 | 1 | 2;
var BrowserEvent_ToolAction_Source: {
  "UNSPECIFIED": 0;
  "MCP_TOOL": 1;
  "MANUAL_USER": 2;
  0: "UNSPECIFIED";
  1: "MCP_TOOL";
  2: "MANUAL_USER";
};
export type RepoEvent_Type = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
var RepoEvent_Type: {
  "UNSPECIFIED": 0;
  "SYNCED": 1;
  "LOADING": 2;
  "INDEXING_SETUP": 3;
  "INDEXING_INIT_FROM_SIMILAR_CODEBASE": 4;
  "PAUSED": 5;
  "INDEXING": 6;
  "ERROR": 7;
  "NOT_AUTO_INDEXING": 8;
  "NOT_INDEXED": 9;
  0: "UNSPECIFIED";
  1: "SYNCED";
  2: "LOADING";
  3: "INDEXING_SETUP";
  4: "INDEXING_INIT_FROM_SIMILAR_CODEBASE";
  5: "PAUSED";
  6: "INDEXING";
  7: "ERROR";
  8: "NOT_AUTO_INDEXING";
  9: "NOT_INDEXED";
};
export type GitEvent_OperationType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
var GitEvent_OperationType: {
  "UNSPECIFIED": 0;
  "COMMIT": 1;
  "CHECKOUT": 2;
  "PULL": 3;
  "FETCH": 4;
  "MERGE": 5;
  "REBASE": 6;
  "STASH": 7;
  "BRANCH": 8;
  "TAG": 9;
  0: "UNSPECIFIED";
  1: "COMMIT";
  2: "CHECKOUT";
  3: "PULL";
  4: "FETCH";
  5: "MERGE";
  6: "REBASE";
  7: "STASH";
  8: "BRANCH";
  9: "TAG";
};
export type WorktreeEvent_EventType = 0 | 1 | 2 | 3;
var WorktreeEvent_EventType: {
  "UNSPECIFIED": 0;
  "APPLY_TO_MAIN": 1;
  "UNDO_APPLY": 2;
  "VIEW_SUBCOMPOSER": 3;
  0: "UNSPECIFIED";
  1: "APPLY_TO_MAIN";
  2: "UNDO_APPLY";
  3: "VIEW_SUBCOMPOSER";
};
(function(CppFate2) {
  CppFate2[CppFate2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CppFate2[CppFate2["ACCEPT"] = 1] = "ACCEPT";
  CppFate2[CppFate2["REJECT"] = 2] = "REJECT";
  CppFate2[CppFate2["PARTIAL_ACCEPT"] = 3] = "PARTIAL_ACCEPT";
})(CppFate! || (CppFate = {} as typeof CppFate));
proto3.util.setEnumType(CppFate, "aiserver.v1.CppFate", [
  { no: 0, name: "CPP_FATE_UNSPECIFIED" },
  { no: 1, name: "CPP_FATE_ACCEPT" },
  { no: 2, name: "CPP_FATE_REJECT" },
  { no: 3, name: "CPP_FATE_PARTIAL_ACCEPT" }
]);
(function(CppSource2) {
  CppSource2[CppSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CppSource2[CppSource2["LINE_CHANGE"] = 1] = "LINE_CHANGE";
  CppSource2[CppSource2["TYPING"] = 2] = "TYPING";
  CppSource2[CppSource2["OPTION_HOLD"] = 3] = "OPTION_HOLD";
  CppSource2[CppSource2["LINTER_ERRORS"] = 4] = "LINTER_ERRORS";
  CppSource2[CppSource2["PARAMETER_HINTS"] = 5] = "PARAMETER_HINTS";
  CppSource2[CppSource2["CURSOR_PREDICTION"] = 6] = "CURSOR_PREDICTION";
  CppSource2[CppSource2["MANUAL_TRIGGER"] = 7] = "MANUAL_TRIGGER";
  CppSource2[CppSource2["EDITOR_CHANGE"] = 8] = "EDITOR_CHANGE";
  CppSource2[CppSource2["LSP_SUGGESTIONS"] = 9] = "LSP_SUGGESTIONS";
})(CppSource! || (CppSource = {} as typeof CppSource));
proto3.util.setEnumType(CppSource, "aiserver.v1.CppSource", [
  { no: 0, name: "CPP_SOURCE_UNSPECIFIED" },
  { no: 1, name: "CPP_SOURCE_LINE_CHANGE" },
  { no: 2, name: "CPP_SOURCE_TYPING" },
  { no: 3, name: "CPP_SOURCE_OPTION_HOLD" },
  { no: 4, name: "CPP_SOURCE_LINTER_ERRORS" },
  { no: 5, name: "CPP_SOURCE_PARAMETER_HINTS" },
  { no: 6, name: "CPP_SOURCE_CURSOR_PREDICTION" },
  { no: 7, name: "CPP_SOURCE_MANUAL_TRIGGER" },
  { no: 8, name: "CPP_SOURCE_EDITOR_CHANGE" },
  { no: 9, name: "CPP_SOURCE_LSP_SUGGESTIONS" }
]);
var CppIntentInfo$Runtime = (() => class _CppIntentInfo extends Message<_CppIntentInfo> {
  declare source: string;
  constructor(data?: PartialMessage<_CppIntentInfo>) {
    super();
    this.source = "";
    proto3.util.initPartial(data, this as _CppIntentInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppIntentInfo {
    return new _CppIntentInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppIntentInfo {
    return new _CppIntentInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppIntentInfo {
    return new _CppIntentInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _CppIntentInfo | PlainMessage<_CppIntentInfo> | undefined | null, b2: _CppIntentInfo | PlainMessage<_CppIntentInfo> | undefined | null): boolean {
    return proto3.util.equals(_CppIntentInfo as unknown as MessageType<_CppIntentInfo>, a, b2);
  }
})();
export type CppIntentInfo = InstanceType<typeof CppIntentInfo$Runtime>;
var CppIntentInfo: MessageType<CppIntentInfo> = CppIntentInfo$Runtime as unknown as MessageType<CppIntentInfo>;
(CppIntentInfo as MutableMessageType<CppIntentInfo>).runtime = proto3;
(CppIntentInfo as MutableMessageType<CppIntentInfo>).typeName = "aiserver.v1.CppIntentInfo";
(CppIntentInfo as MutableMessageType<CppIntentInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "source",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LspSuggestion$Runtime = (() => class _LspSuggestion extends Message<_LspSuggestion> {
  declare label: string;
  constructor(data?: PartialMessage<_LspSuggestion>) {
    super();
    this.label = "";
    proto3.util.initPartial(data, this as _LspSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSuggestion {
    return new _LspSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSuggestion {
    return new _LspSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSuggestion {
    return new _LspSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSuggestion | PlainMessage<_LspSuggestion> | undefined | null, b2: _LspSuggestion | PlainMessage<_LspSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_LspSuggestion as unknown as MessageType<_LspSuggestion>, a, b2);
  }
})();
export type LspSuggestion = InstanceType<typeof LspSuggestion$Runtime>;
var LspSuggestion: MessageType<LspSuggestion> = LspSuggestion$Runtime as unknown as MessageType<LspSuggestion>;
(LspSuggestion as MutableMessageType<LspSuggestion>).runtime = proto3;
(LspSuggestion as MutableMessageType<LspSuggestion>).typeName = "aiserver.v1.LspSuggestion";
(LspSuggestion as MutableMessageType<LspSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LspSuggestedItems$Runtime = (() => class _LspSuggestedItems extends Message<_LspSuggestedItems> {
  declare suggestions: LspSuggestion[];
  constructor(data?: PartialMessage<_LspSuggestedItems>) {
    super();
    this.suggestions = [];
    proto3.util.initPartial(data, this as _LspSuggestedItems);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSuggestedItems {
    return new _LspSuggestedItems().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSuggestedItems {
    return new _LspSuggestedItems().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSuggestedItems {
    return new _LspSuggestedItems().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSuggestedItems | PlainMessage<_LspSuggestedItems> | undefined | null, b2: _LspSuggestedItems | PlainMessage<_LspSuggestedItems> | undefined | null): boolean {
    return proto3.util.equals(_LspSuggestedItems as unknown as MessageType<_LspSuggestedItems>, a, b2);
  }
})();
export type LspSuggestedItems = InstanceType<typeof LspSuggestedItems$Runtime>;
var LspSuggestedItems: MessageType<LspSuggestedItems> = LspSuggestedItems$Runtime as unknown as MessageType<LspSuggestedItems>;
(LspSuggestedItems as MutableMessageType<LspSuggestedItems>).runtime = proto3;
(LspSuggestedItems as MutableMessageType<LspSuggestedItems>).typeName = "aiserver.v1.LspSuggestedItems";
(LspSuggestedItems as MutableMessageType<LspSuggestedItems>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestions", kind: "message", T: LspSuggestion, repeated: true }
]);
var ShouldTurnOnCppOnboardingRequest$Runtime = (() => class _ShouldTurnOnCppOnboardingRequest extends Message<_ShouldTurnOnCppOnboardingRequest> {
  constructor(data?: PartialMessage<_ShouldTurnOnCppOnboardingRequest>) {
    super();
    proto3.util.initPartial(data, this as _ShouldTurnOnCppOnboardingRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShouldTurnOnCppOnboardingRequest {
    return new _ShouldTurnOnCppOnboardingRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShouldTurnOnCppOnboardingRequest {
    return new _ShouldTurnOnCppOnboardingRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShouldTurnOnCppOnboardingRequest {
    return new _ShouldTurnOnCppOnboardingRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ShouldTurnOnCppOnboardingRequest | PlainMessage<_ShouldTurnOnCppOnboardingRequest> | undefined | null, b2: _ShouldTurnOnCppOnboardingRequest | PlainMessage<_ShouldTurnOnCppOnboardingRequest> | undefined | null): boolean {
    return proto3.util.equals(_ShouldTurnOnCppOnboardingRequest as unknown as MessageType<_ShouldTurnOnCppOnboardingRequest>, a, b2);
  }
})();
export type ShouldTurnOnCppOnboardingRequest = InstanceType<typeof ShouldTurnOnCppOnboardingRequest$Runtime>;
var ShouldTurnOnCppOnboardingRequest: MessageType<ShouldTurnOnCppOnboardingRequest> = ShouldTurnOnCppOnboardingRequest$Runtime as unknown as MessageType<ShouldTurnOnCppOnboardingRequest>;
(ShouldTurnOnCppOnboardingRequest as MutableMessageType<ShouldTurnOnCppOnboardingRequest>).runtime = proto3;
(ShouldTurnOnCppOnboardingRequest as MutableMessageType<ShouldTurnOnCppOnboardingRequest>).typeName = "aiserver.v1.ShouldTurnOnCppOnboardingRequest";
(ShouldTurnOnCppOnboardingRequest as MutableMessageType<ShouldTurnOnCppOnboardingRequest>).fields = proto3.util.newFieldList(() => []);
var ShouldTurnOnCppOnboardingResponse$Runtime = (() => class _ShouldTurnOnCppOnboardingResponse extends Message<_ShouldTurnOnCppOnboardingResponse> {
  declare shouldTurnOnCppOnboarding: boolean;
  constructor(data?: PartialMessage<_ShouldTurnOnCppOnboardingResponse>) {
    super();
    this.shouldTurnOnCppOnboarding = false;
    proto3.util.initPartial(data, this as _ShouldTurnOnCppOnboardingResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShouldTurnOnCppOnboardingResponse {
    return new _ShouldTurnOnCppOnboardingResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShouldTurnOnCppOnboardingResponse {
    return new _ShouldTurnOnCppOnboardingResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShouldTurnOnCppOnboardingResponse {
    return new _ShouldTurnOnCppOnboardingResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ShouldTurnOnCppOnboardingResponse | PlainMessage<_ShouldTurnOnCppOnboardingResponse> | undefined | null, b2: _ShouldTurnOnCppOnboardingResponse | PlainMessage<_ShouldTurnOnCppOnboardingResponse> | undefined | null): boolean {
    return proto3.util.equals(_ShouldTurnOnCppOnboardingResponse as unknown as MessageType<_ShouldTurnOnCppOnboardingResponse>, a, b2);
  }
})();
export type ShouldTurnOnCppOnboardingResponse = InstanceType<typeof ShouldTurnOnCppOnboardingResponse$Runtime>;
var ShouldTurnOnCppOnboardingResponse: MessageType<ShouldTurnOnCppOnboardingResponse> = ShouldTurnOnCppOnboardingResponse$Runtime as unknown as MessageType<ShouldTurnOnCppOnboardingResponse>;
(ShouldTurnOnCppOnboardingResponse as MutableMessageType<ShouldTurnOnCppOnboardingResponse>).runtime = proto3;
(ShouldTurnOnCppOnboardingResponse as MutableMessageType<ShouldTurnOnCppOnboardingResponse>).typeName = "aiserver.v1.ShouldTurnOnCppOnboardingResponse";
(ShouldTurnOnCppOnboardingResponse as MutableMessageType<ShouldTurnOnCppOnboardingResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "should_turn_on_cpp_onboarding",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var StreamCppRequest$Runtime = (() => class _StreamCppRequest extends Message<_StreamCppRequest> {
  declare currentFile?: CurrentFileInfo;
  declare diffHistory: string[];
  declare modelName?: string;
  declare linterErrors?: LinterErrors;
  declare contextItems: CppContextItem[];
  declare diffHistoryKeys: string[];
  declare giveDebugOutput?: boolean;
  declare fileDiffHistories: CppFileDiffHistory[];
  declare mergedDiffHistories: CppFileDiffHistory[];
  declare blockDiffPatches: BlockDiffPatch[];
  declare isNightly?: boolean;
  declare isDebug?: boolean;
  declare immediatelyAck?: boolean;
  declare enableMoreContext?: boolean;
  declare parameterHints: CppParameterHint[];
  declare lspContexts: LspSubgraphFullContext[];
  declare cppIntentInfo?: CppIntentInfo;
  declare workspaceId?: string;
  declare additionalFiles: AdditionalFile[];
  declare controlToken?: StreamCppRequest_ControlToken;
  declare clientTime?: number;
  declare filesyncUpdates: FilesyncUpdateWithModelVersion[];
  declare timeSinceRequestStart: number;
  declare timeAtRequestSend: number;
  declare clientTimezoneOffset?: number;
  declare lspSuggestedItems?: LspSuggestedItems;
  declare supportsCpt?: boolean;
  declare supportsCrlfCpt?: boolean;
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_StreamCppRequest>) {
    super();
    this.diffHistory = [];
    this.contextItems = [];
    this.diffHistoryKeys = [];
    this.fileDiffHistories = [];
    this.mergedDiffHistories = [];
    this.blockDiffPatches = [];
    this.parameterHints = [];
    this.lspContexts = [];
    this.additionalFiles = [];
    this.filesyncUpdates = [];
    this.timeSinceRequestStart = 0;
    this.timeAtRequestSend = 0;
    this.codeResults = [];
    proto3.util.initPartial(data, this as _StreamCppRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCppRequest {
    return new _StreamCppRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCppRequest {
    return new _StreamCppRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCppRequest {
    return new _StreamCppRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCppRequest | PlainMessage<_StreamCppRequest> | undefined | null, b2: _StreamCppRequest | PlainMessage<_StreamCppRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamCppRequest as unknown as MessageType<_StreamCppRequest>, a, b2);
  }
})();
export type StreamCppRequest = InstanceType<typeof StreamCppRequest$Runtime>;
var StreamCppRequest: MessageType<StreamCppRequest> = StreamCppRequest$Runtime as unknown as MessageType<StreamCppRequest>;
(StreamCppRequest as MutableMessageType<StreamCppRequest>).runtime = proto3;
(StreamCppRequest as MutableMessageType<StreamCppRequest>).typeName = "aiserver.v1.StreamCppRequest";
(StreamCppRequest as MutableMessageType<StreamCppRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "model_name", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "linter_errors", kind: "message", T: LinterErrors, opt: true },
  { no: 13, name: "context_items", kind: "message", T: CppContextItem, repeated: true },
  { no: 5, name: "diff_history_keys", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "give_debug_output", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "file_diff_histories", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 8, name: "merged_diff_histories", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 9, name: "block_diff_patches", kind: "message", T: BlockDiffPatch, repeated: true },
  { no: 10, name: "is_nightly", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "is_debug", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "immediately_ack", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "enable_more_context", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "parameter_hints", kind: "message", T: CppParameterHint, repeated: true },
  { no: 15, name: "lsp_contexts", kind: "message", T: LspSubgraphFullContext, repeated: true },
  { no: 16, name: "cpp_intent_info", kind: "message", T: CppIntentInfo, opt: true },
  { no: 18, name: "workspace_id", kind: "scalar", T: 9, opt: true },
  { no: 19, name: "additional_files", kind: "message", T: AdditionalFile, repeated: true },
  { no: 20, name: "control_token", kind: "enum", T: proto3.getEnumType(StreamCppRequest_ControlToken), opt: true },
  { no: 21, name: "client_time", kind: "scalar", T: 1, opt: true },
  { no: 22, name: "filesync_updates", kind: "message", T: FilesyncUpdateWithModelVersion, repeated: true },
  {
    no: 23,
    name: "time_since_request_start",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 24,
    name: "time_at_request_send",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 25, name: "client_timezone_offset", kind: "scalar", T: 1, opt: true },
  { no: 26, name: "lsp_suggested_items", kind: "message", T: LspSuggestedItems, opt: true },
  { no: 27, name: "supports_cpt", kind: "scalar", T: 8, opt: true },
  { no: 28, name: "supports_crlf_cpt", kind: "scalar", T: 8, opt: true },
  { no: 29, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
(function(StreamCppRequest_ControlToken2) {
  StreamCppRequest_ControlToken2[StreamCppRequest_ControlToken2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StreamCppRequest_ControlToken2[StreamCppRequest_ControlToken2["QUIET"] = 1] = "QUIET";
  StreamCppRequest_ControlToken2[StreamCppRequest_ControlToken2["LOUD"] = 2] = "LOUD";
  StreamCppRequest_ControlToken2[StreamCppRequest_ControlToken2["OP"] = 3] = "OP";
})(StreamCppRequest_ControlToken! || (StreamCppRequest_ControlToken = {} as typeof StreamCppRequest_ControlToken));
proto3.util.setEnumType(StreamCppRequest_ControlToken, "aiserver.v1.StreamCppRequest.ControlToken", [
  { no: 0, name: "CONTROL_TOKEN_UNSPECIFIED" },
  { no: 1, name: "CONTROL_TOKEN_QUIET" },
  { no: 2, name: "CONTROL_TOKEN_LOUD" },
  { no: 3, name: "CONTROL_TOKEN_OP" }
]);
var StreamCppResponse$Runtime = (() => class _StreamCppResponse extends Message<_StreamCppResponse> {
  declare text: string;
  declare suggestionStartLine?: number;
  declare suggestionConfidence?: number;
  declare doneStream?: boolean;
  declare debugModelOutput?: string;
  declare debugModelInput?: string;
  declare debugStreamTime?: string;
  declare debugTotalTime?: string;
  declare debugTtftTime?: string;
  declare debugServerTiming?: string;
  declare rangeToReplace?: LineRange;
  declare cursorPredictionTarget?: StreamCppResponse_CursorPredictionTarget;
  declare doneEdit?: boolean;
  declare modelInfo?: StreamCppResponse_ModelInfo;
  declare beginEdit?: boolean;
  declare shouldRemoveLeadingEol?: boolean;
  declare bindingId?: string;
  constructor(data?: PartialMessage<_StreamCppResponse>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamCppResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCppResponse {
    return new _StreamCppResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCppResponse {
    return new _StreamCppResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCppResponse {
    return new _StreamCppResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCppResponse | PlainMessage<_StreamCppResponse> | undefined | null, b2: _StreamCppResponse | PlainMessage<_StreamCppResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamCppResponse as unknown as MessageType<_StreamCppResponse>, a, b2);
  }
})();
export type StreamCppResponse = InstanceType<typeof StreamCppResponse$Runtime>;
var StreamCppResponse: MessageType<StreamCppResponse> = StreamCppResponse$Runtime as unknown as MessageType<StreamCppResponse>;
(StreamCppResponse as MutableMessageType<StreamCppResponse>).runtime = proto3;
(StreamCppResponse as MutableMessageType<StreamCppResponse>).typeName = "aiserver.v1.StreamCppResponse";
(StreamCppResponse as MutableMessageType<StreamCppResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "suggestion_start_line", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "suggestion_confidence", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "done_stream", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "debug_model_output", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "debug_model_input", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "debug_stream_time", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "debug_total_time", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "debug_ttft_time", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "debug_server_timing", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "range_to_replace", kind: "message", T: LineRange, opt: true },
  { no: 12, name: "cursor_prediction_target", kind: "message", T: StreamCppResponse_CursorPredictionTarget, opt: true },
  { no: 13, name: "done_edit", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "model_info", kind: "message", T: StreamCppResponse_ModelInfo, opt: true },
  { no: 15, name: "begin_edit", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "should_remove_leading_eol", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "binding_id", kind: "scalar", T: 9, opt: true }
]);
var StreamCppResponse_CursorPredictionTarget$Runtime = (() => class _StreamCppResponse_CursorPredictionTarget extends Message<_StreamCppResponse_CursorPredictionTarget> {
  declare relativePath: string;
  declare lineNumberOneIndexed: number;
  declare expectedContent: string;
  declare shouldRetriggerCpp: boolean;
  constructor(data?: PartialMessage<_StreamCppResponse_CursorPredictionTarget>) {
    super();
    this.relativePath = "";
    this.lineNumberOneIndexed = 0;
    this.expectedContent = "";
    this.shouldRetriggerCpp = false;
    proto3.util.initPartial(data, this as _StreamCppResponse_CursorPredictionTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCppResponse_CursorPredictionTarget {
    return new _StreamCppResponse_CursorPredictionTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCppResponse_CursorPredictionTarget {
    return new _StreamCppResponse_CursorPredictionTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCppResponse_CursorPredictionTarget {
    return new _StreamCppResponse_CursorPredictionTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCppResponse_CursorPredictionTarget | PlainMessage<_StreamCppResponse_CursorPredictionTarget> | undefined | null, b2: _StreamCppResponse_CursorPredictionTarget | PlainMessage<_StreamCppResponse_CursorPredictionTarget> | undefined | null): boolean {
    return proto3.util.equals(_StreamCppResponse_CursorPredictionTarget as unknown as MessageType<_StreamCppResponse_CursorPredictionTarget>, a, b2);
  }
})();
export type StreamCppResponse_CursorPredictionTarget = InstanceType<typeof StreamCppResponse_CursorPredictionTarget$Runtime>;
var StreamCppResponse_CursorPredictionTarget: MessageType<StreamCppResponse_CursorPredictionTarget> = StreamCppResponse_CursorPredictionTarget$Runtime as unknown as MessageType<StreamCppResponse_CursorPredictionTarget>;
(StreamCppResponse_CursorPredictionTarget as MutableMessageType<StreamCppResponse_CursorPredictionTarget>).runtime = proto3;
(StreamCppResponse_CursorPredictionTarget as MutableMessageType<StreamCppResponse_CursorPredictionTarget>).typeName = "aiserver.v1.StreamCppResponse.CursorPredictionTarget";
(StreamCppResponse_CursorPredictionTarget as MutableMessageType<StreamCppResponse_CursorPredictionTarget>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "expected_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "should_retrigger_cpp",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var StreamCppResponse_ModelInfo$Runtime = (() => class _StreamCppResponse_ModelInfo extends Message<_StreamCppResponse_ModelInfo> {
  declare isFusedCursorPredictionModel: boolean;
  declare isMultidiffModel: boolean;
  constructor(data?: PartialMessage<_StreamCppResponse_ModelInfo>) {
    super();
    this.isFusedCursorPredictionModel = false;
    this.isMultidiffModel = false;
    proto3.util.initPartial(data, this as _StreamCppResponse_ModelInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCppResponse_ModelInfo {
    return new _StreamCppResponse_ModelInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCppResponse_ModelInfo {
    return new _StreamCppResponse_ModelInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCppResponse_ModelInfo {
    return new _StreamCppResponse_ModelInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCppResponse_ModelInfo | PlainMessage<_StreamCppResponse_ModelInfo> | undefined | null, b2: _StreamCppResponse_ModelInfo | PlainMessage<_StreamCppResponse_ModelInfo> | undefined | null): boolean {
    return proto3.util.equals(_StreamCppResponse_ModelInfo as unknown as MessageType<_StreamCppResponse_ModelInfo>, a, b2);
  }
})();
export type StreamCppResponse_ModelInfo = InstanceType<typeof StreamCppResponse_ModelInfo$Runtime>;
var StreamCppResponse_ModelInfo: MessageType<StreamCppResponse_ModelInfo> = StreamCppResponse_ModelInfo$Runtime as unknown as MessageType<StreamCppResponse_ModelInfo>;
(StreamCppResponse_ModelInfo as MutableMessageType<StreamCppResponse_ModelInfo>).runtime = proto3;
(StreamCppResponse_ModelInfo as MutableMessageType<StreamCppResponse_ModelInfo>).typeName = "aiserver.v1.StreamCppResponse.ModelInfo";
(StreamCppResponse_ModelInfo as MutableMessageType<StreamCppResponse_ModelInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_fused_cursor_prediction_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "is_multidiff_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CppConfigRequest$Runtime = (() => class _CppConfigRequest extends Message<_CppConfigRequest> {
  declare isNightly?: boolean;
  declare model: string;
  declare supportsCpt?: boolean;
  constructor(data?: PartialMessage<_CppConfigRequest>) {
    super();
    this.model = "";
    proto3.util.initPartial(data, this as _CppConfigRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigRequest {
    return new _CppConfigRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigRequest {
    return new _CppConfigRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigRequest {
    return new _CppConfigRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigRequest | PlainMessage<_CppConfigRequest> | undefined | null, b2: _CppConfigRequest | PlainMessage<_CppConfigRequest> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigRequest as unknown as MessageType<_CppConfigRequest>, a, b2);
  }
})();
export type CppConfigRequest = InstanceType<typeof CppConfigRequest$Runtime>;
var CppConfigRequest: MessageType<CppConfigRequest> = CppConfigRequest$Runtime as unknown as MessageType<CppConfigRequest>;
(CppConfigRequest as MutableMessageType<CppConfigRequest>).runtime = proto3;
(CppConfigRequest as MutableMessageType<CppConfigRequest>).typeName = "aiserver.v1.CppConfigRequest";
(CppConfigRequest as MutableMessageType<CppConfigRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "is_nightly", kind: "scalar", T: 8, opt: true },
  {
    no: 2,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "supports_cpt", kind: "scalar", T: 8, opt: true }
]);
var CppConfigResponse$Runtime = (() => class _CppConfigResponse extends Message<_CppConfigResponse> {
  declare aboveRadius?: number;
  declare belowRadius?: number;
  declare mergeBehavior?: CppConfigResponse_MergeBehavior;
  declare isOn?: boolean;
  declare isGhostText?: boolean;
  declare shouldLetUserEnableCppEvenIfNotPro?: boolean;
  declare heuristics: CppConfigResponse_Heuristic[];
  declare excludeRecentlyViewedFilesPatterns: string[];
  declare enableRvfTracking: boolean;
  declare globalDebounceDurationMillis: number;
  declare clientDebounceDurationMillis: number;
  declare cppUrl: string;
  declare useWhitespaceDiffHistory: boolean;
  declare importPredictionConfig?: CppConfigResponse_ImportPredictionConfig;
  declare enableFilesyncDebounceSkipping: boolean;
  declare checkFilesyncHashPercent: number;
  declare geoCppBackendUrl: string;
  declare recentlyRejectedEditThresholds?: CppConfigResponse_RecentlyRejectedEditThresholds;
  declare isFusedCursorPredictionModel: boolean;
  declare includeUnchangedLines: boolean;
  declare shouldFetchRvfText: boolean;
  declare maxNumberOfClearedSuggestionsSinceLastAccept?: number;
  declare suggestionHintConfig?: CppConfigResponse_SuggestionHintConfig;
  declare allowsTabChunks: boolean;
  declare tabContextRefreshDebounceMs?: number;
  declare tabContextRefreshEditorChangeDebounceMs?: number;
  constructor(data?: PartialMessage<_CppConfigResponse>) {
    super();
    this.heuristics = [];
    this.excludeRecentlyViewedFilesPatterns = [];
    this.enableRvfTracking = false;
    this.globalDebounceDurationMillis = 0;
    this.clientDebounceDurationMillis = 0;
    this.cppUrl = "";
    this.useWhitespaceDiffHistory = false;
    this.enableFilesyncDebounceSkipping = false;
    this.checkFilesyncHashPercent = 0;
    this.geoCppBackendUrl = "";
    this.isFusedCursorPredictionModel = false;
    this.includeUnchangedLines = false;
    this.shouldFetchRvfText = false;
    this.allowsTabChunks = false;
    proto3.util.initPartial(data, this as _CppConfigResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigResponse {
    return new _CppConfigResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigResponse {
    return new _CppConfigResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigResponse {
    return new _CppConfigResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigResponse | PlainMessage<_CppConfigResponse> | undefined | null, b2: _CppConfigResponse | PlainMessage<_CppConfigResponse> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigResponse as unknown as MessageType<_CppConfigResponse>, a, b2);
  }
})();
export type CppConfigResponse = InstanceType<typeof CppConfigResponse$Runtime>;
var CppConfigResponse: MessageType<CppConfigResponse> = CppConfigResponse$Runtime as unknown as MessageType<CppConfigResponse>;
(CppConfigResponse as MutableMessageType<CppConfigResponse>).runtime = proto3;
(CppConfigResponse as MutableMessageType<CppConfigResponse>).typeName = "aiserver.v1.CppConfigResponse";
(CppConfigResponse as MutableMessageType<CppConfigResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "above_radius", kind: "scalar", T: 5, opt: true },
  { no: 2, name: "below_radius", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "merge_behavior", kind: "message", T: CppConfigResponse_MergeBehavior, opt: true },
  { no: 5, name: "is_on", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "is_ghost_text", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "should_let_user_enable_cpp_even_if_not_pro", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "heuristics", kind: "enum", T: proto3.getEnumType(CppConfigResponse_Heuristic), repeated: true },
  { no: 9, name: "exclude_recently_viewed_files_patterns", kind: "scalar", T: 9, repeated: true },
  {
    no: 10,
    name: "enable_rvf_tracking",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 11,
    name: "global_debounce_duration_millis",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 12,
    name: "client_debounce_duration_millis",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 13,
    name: "cpp_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "use_whitespace_diff_history",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 15, name: "import_prediction_config", kind: "message", T: CppConfigResponse_ImportPredictionConfig },
  {
    no: 16,
    name: "enable_filesync_debounce_skipping",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 17,
    name: "check_filesync_hash_percent",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 18,
    name: "geo_cpp_backend_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 19, name: "recently_rejected_edit_thresholds", kind: "message", T: CppConfigResponse_RecentlyRejectedEditThresholds, opt: true },
  {
    no: 20,
    name: "is_fused_cursor_prediction_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 21,
    name: "include_unchanged_lines",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 22,
    name: "should_fetch_rvf_text",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 23, name: "max_number_of_cleared_suggestions_since_last_accept", kind: "scalar", T: 5, opt: true },
  { no: 24, name: "suggestion_hint_config", kind: "message", T: CppConfigResponse_SuggestionHintConfig, opt: true },
  {
    no: 25,
    name: "allows_tab_chunks",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 26, name: "tab_context_refresh_debounce_ms", kind: "scalar", T: 5, opt: true },
  { no: 27, name: "tab_context_refresh_editor_change_debounce_ms", kind: "scalar", T: 5, opt: true }
]);
(function(CppConfigResponse_Heuristic2) {
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["LOTS_OF_ADDED_TEXT"] = 1] = "LOTS_OF_ADDED_TEXT";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["DUPLICATING_LINE_AFTER_SUGGESTION"] = 2] = "DUPLICATING_LINE_AFTER_SUGGESTION";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION"] = 3] = "DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["REVERTING_USER_CHANGE"] = 4] = "REVERTING_USER_CHANGE";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED"] = 5] = "OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED";
  CppConfigResponse_Heuristic2[CppConfigResponse_Heuristic2["SUGGESTING_RECENTLY_REJECTED_EDIT"] = 6] = "SUGGESTING_RECENTLY_REJECTED_EDIT";
})(CppConfigResponse_Heuristic! || (CppConfigResponse_Heuristic = {} as typeof CppConfigResponse_Heuristic));
proto3.util.setEnumType(CppConfigResponse_Heuristic, "aiserver.v1.CppConfigResponse.Heuristic", [
  { no: 0, name: "HEURISTIC_UNSPECIFIED" },
  { no: 1, name: "HEURISTIC_LOTS_OF_ADDED_TEXT" },
  { no: 2, name: "HEURISTIC_DUPLICATING_LINE_AFTER_SUGGESTION" },
  { no: 3, name: "HEURISTIC_DUPLICATING_MULTIPLE_LINES_AFTER_SUGGESTION" },
  { no: 4, name: "HEURISTIC_REVERTING_USER_CHANGE" },
  { no: 5, name: "HEURISTIC_OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED" },
  { no: 6, name: "HEURISTIC_SUGGESTING_RECENTLY_REJECTED_EDIT" }
]);
var CppConfigResponse_ImportPredictionConfig$Runtime = (() => class _CppConfigResponse_ImportPredictionConfig extends Message<_CppConfigResponse_ImportPredictionConfig> {
  declare isDisabledByBackend: boolean;
  declare shouldTurnOnAutomatically: boolean;
  declare pythonEnabled: boolean;
  constructor(data?: PartialMessage<_CppConfigResponse_ImportPredictionConfig>) {
    super();
    this.isDisabledByBackend = false;
    this.shouldTurnOnAutomatically = false;
    this.pythonEnabled = false;
    proto3.util.initPartial(data, this as _CppConfigResponse_ImportPredictionConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigResponse_ImportPredictionConfig {
    return new _CppConfigResponse_ImportPredictionConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigResponse_ImportPredictionConfig {
    return new _CppConfigResponse_ImportPredictionConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigResponse_ImportPredictionConfig {
    return new _CppConfigResponse_ImportPredictionConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigResponse_ImportPredictionConfig | PlainMessage<_CppConfigResponse_ImportPredictionConfig> | undefined | null, b2: _CppConfigResponse_ImportPredictionConfig | PlainMessage<_CppConfigResponse_ImportPredictionConfig> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigResponse_ImportPredictionConfig as unknown as MessageType<_CppConfigResponse_ImportPredictionConfig>, a, b2);
  }
})();
export type CppConfigResponse_ImportPredictionConfig = InstanceType<typeof CppConfigResponse_ImportPredictionConfig$Runtime>;
var CppConfigResponse_ImportPredictionConfig: MessageType<CppConfigResponse_ImportPredictionConfig> = CppConfigResponse_ImportPredictionConfig$Runtime as unknown as MessageType<CppConfigResponse_ImportPredictionConfig>;
(CppConfigResponse_ImportPredictionConfig as MutableMessageType<CppConfigResponse_ImportPredictionConfig>).runtime = proto3;
(CppConfigResponse_ImportPredictionConfig as MutableMessageType<CppConfigResponse_ImportPredictionConfig>).typeName = "aiserver.v1.CppConfigResponse.ImportPredictionConfig";
(CppConfigResponse_ImportPredictionConfig as MutableMessageType<CppConfigResponse_ImportPredictionConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_disabled_by_backend",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "should_turn_on_automatically",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "python_enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CppConfigResponse_MergeBehavior$Runtime = (() => class _CppConfigResponse_MergeBehavior extends Message<_CppConfigResponse_MergeBehavior> {
  declare type: string;
  declare limit?: number;
  declare radius?: number;
  constructor(data?: PartialMessage<_CppConfigResponse_MergeBehavior>) {
    super();
    this.type = "";
    proto3.util.initPartial(data, this as _CppConfigResponse_MergeBehavior);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigResponse_MergeBehavior {
    return new _CppConfigResponse_MergeBehavior().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigResponse_MergeBehavior {
    return new _CppConfigResponse_MergeBehavior().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigResponse_MergeBehavior {
    return new _CppConfigResponse_MergeBehavior().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigResponse_MergeBehavior | PlainMessage<_CppConfigResponse_MergeBehavior> | undefined | null, b2: _CppConfigResponse_MergeBehavior | PlainMessage<_CppConfigResponse_MergeBehavior> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigResponse_MergeBehavior as unknown as MessageType<_CppConfigResponse_MergeBehavior>, a, b2);
  }
})();
export type CppConfigResponse_MergeBehavior = InstanceType<typeof CppConfigResponse_MergeBehavior$Runtime>;
var CppConfigResponse_MergeBehavior: MessageType<CppConfigResponse_MergeBehavior> = CppConfigResponse_MergeBehavior$Runtime as unknown as MessageType<CppConfigResponse_MergeBehavior>;
(CppConfigResponse_MergeBehavior as MutableMessageType<CppConfigResponse_MergeBehavior>).runtime = proto3;
(CppConfigResponse_MergeBehavior as MutableMessageType<CppConfigResponse_MergeBehavior>).typeName = "aiserver.v1.CppConfigResponse.MergeBehavior";
(CppConfigResponse_MergeBehavior as MutableMessageType<CppConfigResponse_MergeBehavior>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "radius", kind: "scalar", T: 5, opt: true }
]);
var CppConfigResponse_RecentlyRejectedEditThresholds$Runtime = (() => class _CppConfigResponse_RecentlyRejectedEditThresholds extends Message<_CppConfigResponse_RecentlyRejectedEditThresholds> {
  declare hardRejectThreshold: number;
  declare softRejectThreshold: number;
  constructor(data?: PartialMessage<_CppConfigResponse_RecentlyRejectedEditThresholds>) {
    super();
    this.hardRejectThreshold = 0;
    this.softRejectThreshold = 0;
    proto3.util.initPartial(data, this as _CppConfigResponse_RecentlyRejectedEditThresholds);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigResponse_RecentlyRejectedEditThresholds {
    return new _CppConfigResponse_RecentlyRejectedEditThresholds().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigResponse_RecentlyRejectedEditThresholds {
    return new _CppConfigResponse_RecentlyRejectedEditThresholds().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigResponse_RecentlyRejectedEditThresholds {
    return new _CppConfigResponse_RecentlyRejectedEditThresholds().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigResponse_RecentlyRejectedEditThresholds | PlainMessage<_CppConfigResponse_RecentlyRejectedEditThresholds> | undefined | null, b2: _CppConfigResponse_RecentlyRejectedEditThresholds | PlainMessage<_CppConfigResponse_RecentlyRejectedEditThresholds> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigResponse_RecentlyRejectedEditThresholds as unknown as MessageType<_CppConfigResponse_RecentlyRejectedEditThresholds>, a, b2);
  }
})();
export type CppConfigResponse_RecentlyRejectedEditThresholds = InstanceType<typeof CppConfigResponse_RecentlyRejectedEditThresholds$Runtime>;
var CppConfigResponse_RecentlyRejectedEditThresholds: MessageType<CppConfigResponse_RecentlyRejectedEditThresholds> = CppConfigResponse_RecentlyRejectedEditThresholds$Runtime as unknown as MessageType<CppConfigResponse_RecentlyRejectedEditThresholds>;
(CppConfigResponse_RecentlyRejectedEditThresholds as MutableMessageType<CppConfigResponse_RecentlyRejectedEditThresholds>).runtime = proto3;
(CppConfigResponse_RecentlyRejectedEditThresholds as MutableMessageType<CppConfigResponse_RecentlyRejectedEditThresholds>).typeName = "aiserver.v1.CppConfigResponse.RecentlyRejectedEditThresholds";
(CppConfigResponse_RecentlyRejectedEditThresholds as MutableMessageType<CppConfigResponse_RecentlyRejectedEditThresholds>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "hard_reject_threshold",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "soft_reject_threshold",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CppConfigResponse_SuggestionHintConfig$Runtime = (() => class _CppConfigResponse_SuggestionHintConfig extends Message<_CppConfigResponse_SuggestionHintConfig> {
  declare importantLspExtensions: string[];
  declare enabledForPathExtensions: string[];
  constructor(data?: PartialMessage<_CppConfigResponse_SuggestionHintConfig>) {
    super();
    this.importantLspExtensions = [];
    this.enabledForPathExtensions = [];
    proto3.util.initPartial(data, this as _CppConfigResponse_SuggestionHintConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppConfigResponse_SuggestionHintConfig {
    return new _CppConfigResponse_SuggestionHintConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppConfigResponse_SuggestionHintConfig {
    return new _CppConfigResponse_SuggestionHintConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppConfigResponse_SuggestionHintConfig {
    return new _CppConfigResponse_SuggestionHintConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _CppConfigResponse_SuggestionHintConfig | PlainMessage<_CppConfigResponse_SuggestionHintConfig> | undefined | null, b2: _CppConfigResponse_SuggestionHintConfig | PlainMessage<_CppConfigResponse_SuggestionHintConfig> | undefined | null): boolean {
    return proto3.util.equals(_CppConfigResponse_SuggestionHintConfig as unknown as MessageType<_CppConfigResponse_SuggestionHintConfig>, a, b2);
  }
})();
export type CppConfigResponse_SuggestionHintConfig = InstanceType<typeof CppConfigResponse_SuggestionHintConfig$Runtime>;
var CppConfigResponse_SuggestionHintConfig: MessageType<CppConfigResponse_SuggestionHintConfig> = CppConfigResponse_SuggestionHintConfig$Runtime as unknown as MessageType<CppConfigResponse_SuggestionHintConfig>;
(CppConfigResponse_SuggestionHintConfig as MutableMessageType<CppConfigResponse_SuggestionHintConfig>).runtime = proto3;
(CppConfigResponse_SuggestionHintConfig as MutableMessageType<CppConfigResponse_SuggestionHintConfig>).typeName = "aiserver.v1.CppConfigResponse.SuggestionHintConfig";
(CppConfigResponse_SuggestionHintConfig as MutableMessageType<CppConfigResponse_SuggestionHintConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "important_lsp_extensions", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "enabled_for_path_extensions", kind: "scalar", T: 9, repeated: true }
]);
var SuggestedEdit$Runtime = (() => class _SuggestedEdit extends Message<_SuggestedEdit> {
  declare editRange?: SimpleRange;
  declare text: string;
  constructor(data?: PartialMessage<_SuggestedEdit>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _SuggestedEdit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SuggestedEdit {
    return new _SuggestedEdit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SuggestedEdit {
    return new _SuggestedEdit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SuggestedEdit {
    return new _SuggestedEdit().fromJsonString(jsonString, options);
  }
  static equals(a: _SuggestedEdit | PlainMessage<_SuggestedEdit> | undefined | null, b2: _SuggestedEdit | PlainMessage<_SuggestedEdit> | undefined | null): boolean {
    return proto3.util.equals(_SuggestedEdit as unknown as MessageType<_SuggestedEdit>, a, b2);
  }
})();
export type SuggestedEdit = InstanceType<typeof SuggestedEdit$Runtime>;
var SuggestedEdit: MessageType<SuggestedEdit> = SuggestedEdit$Runtime as unknown as MessageType<SuggestedEdit>;
(SuggestedEdit as MutableMessageType<SuggestedEdit>).runtime = proto3;
(SuggestedEdit as MutableMessageType<SuggestedEdit>).typeName = "aiserver.v1.SuggestedEdit";
(SuggestedEdit as MutableMessageType<SuggestedEdit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "edit_range", kind: "message", T: SimpleRange },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetCppEditClassificationRequest$Runtime = (() => class _GetCppEditClassificationRequest extends Message<_GetCppEditClassificationRequest> {
  declare cppRequest?: StreamCppRequest;
  declare suggestedEdits: SuggestedEdit[];
  declare markerTouchesGreen: boolean;
  declare currentFileContentsForLinterErrors: string;
  constructor(data?: PartialMessage<_GetCppEditClassificationRequest>) {
    super();
    this.suggestedEdits = [];
    this.markerTouchesGreen = false;
    this.currentFileContentsForLinterErrors = "";
    proto3.util.initPartial(data, this as _GetCppEditClassificationRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCppEditClassificationRequest {
    return new _GetCppEditClassificationRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCppEditClassificationRequest {
    return new _GetCppEditClassificationRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCppEditClassificationRequest {
    return new _GetCppEditClassificationRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCppEditClassificationRequest | PlainMessage<_GetCppEditClassificationRequest> | undefined | null, b2: _GetCppEditClassificationRequest | PlainMessage<_GetCppEditClassificationRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetCppEditClassificationRequest as unknown as MessageType<_GetCppEditClassificationRequest>, a, b2);
  }
})();
export type GetCppEditClassificationRequest = InstanceType<typeof GetCppEditClassificationRequest$Runtime>;
var GetCppEditClassificationRequest: MessageType<GetCppEditClassificationRequest> = GetCppEditClassificationRequest$Runtime as unknown as MessageType<GetCppEditClassificationRequest>;
(GetCppEditClassificationRequest as MutableMessageType<GetCppEditClassificationRequest>).runtime = proto3;
(GetCppEditClassificationRequest as MutableMessageType<GetCppEditClassificationRequest>).typeName = "aiserver.v1.GetCppEditClassificationRequest";
(GetCppEditClassificationRequest as MutableMessageType<GetCppEditClassificationRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_request", kind: "message", T: StreamCppRequest },
  { no: 25, name: "suggested_edits", kind: "message", T: SuggestedEdit, repeated: true },
  {
    no: 26,
    name: "marker_touches_green",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 27,
    name: "current_file_contents_for_linter_errors",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetCppEditClassificationResponse$Runtime = (() => class _GetCppEditClassificationResponse extends Message<_GetCppEditClassificationResponse> {
  declare scoredEdits: GetCppEditClassificationResponse_ScoredEdit[];
  declare noopEdit?: GetCppEditClassificationResponse_ScoredEdit;
  declare shouldNoop?: boolean;
  declare generationEdit?: GetCppEditClassificationResponse_ScoredEdit;
  constructor(data?: PartialMessage<_GetCppEditClassificationResponse>) {
    super();
    this.scoredEdits = [];
    proto3.util.initPartial(data, this as _GetCppEditClassificationResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCppEditClassificationResponse {
    return new _GetCppEditClassificationResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse {
    return new _GetCppEditClassificationResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse {
    return new _GetCppEditClassificationResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCppEditClassificationResponse | PlainMessage<_GetCppEditClassificationResponse> | undefined | null, b2: _GetCppEditClassificationResponse | PlainMessage<_GetCppEditClassificationResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetCppEditClassificationResponse as unknown as MessageType<_GetCppEditClassificationResponse>, a, b2);
  }
})();
export type GetCppEditClassificationResponse = InstanceType<typeof GetCppEditClassificationResponse$Runtime>;
var GetCppEditClassificationResponse: MessageType<GetCppEditClassificationResponse> = GetCppEditClassificationResponse$Runtime as unknown as MessageType<GetCppEditClassificationResponse>;
(GetCppEditClassificationResponse as MutableMessageType<GetCppEditClassificationResponse>).runtime = proto3;
(GetCppEditClassificationResponse as MutableMessageType<GetCppEditClassificationResponse>).typeName = "aiserver.v1.GetCppEditClassificationResponse";
(GetCppEditClassificationResponse as MutableMessageType<GetCppEditClassificationResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "scored_edits", kind: "message", T: GetCppEditClassificationResponse_ScoredEdit, repeated: true },
  { no: 2, name: "noop_edit", kind: "message", T: GetCppEditClassificationResponse_ScoredEdit },
  { no: 3, name: "should_noop", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "generation_edit", kind: "message", T: GetCppEditClassificationResponse_ScoredEdit }
]);
var GetCppEditClassificationResponse_LogProbs$Runtime = (() => class _GetCppEditClassificationResponse_LogProbs extends Message<_GetCppEditClassificationResponse_LogProbs> {
  declare tokens: string[];
  declare tokenLogprobs: number[];
  constructor(data?: PartialMessage<_GetCppEditClassificationResponse_LogProbs>) {
    super();
    this.tokens = [];
    this.tokenLogprobs = [];
    proto3.util.initPartial(data, this as _GetCppEditClassificationResponse_LogProbs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCppEditClassificationResponse_LogProbs {
    return new _GetCppEditClassificationResponse_LogProbs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse_LogProbs {
    return new _GetCppEditClassificationResponse_LogProbs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse_LogProbs {
    return new _GetCppEditClassificationResponse_LogProbs().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCppEditClassificationResponse_LogProbs | PlainMessage<_GetCppEditClassificationResponse_LogProbs> | undefined | null, b2: _GetCppEditClassificationResponse_LogProbs | PlainMessage<_GetCppEditClassificationResponse_LogProbs> | undefined | null): boolean {
    return proto3.util.equals(_GetCppEditClassificationResponse_LogProbs as unknown as MessageType<_GetCppEditClassificationResponse_LogProbs>, a, b2);
  }
})();
export type GetCppEditClassificationResponse_LogProbs = InstanceType<typeof GetCppEditClassificationResponse_LogProbs$Runtime>;
var GetCppEditClassificationResponse_LogProbs: MessageType<GetCppEditClassificationResponse_LogProbs> = GetCppEditClassificationResponse_LogProbs$Runtime as unknown as MessageType<GetCppEditClassificationResponse_LogProbs>;
(GetCppEditClassificationResponse_LogProbs as MutableMessageType<GetCppEditClassificationResponse_LogProbs>).runtime = proto3;
(GetCppEditClassificationResponse_LogProbs as MutableMessageType<GetCppEditClassificationResponse_LogProbs>).typeName = "aiserver.v1.GetCppEditClassificationResponse.LogProbs";
(GetCppEditClassificationResponse_LogProbs as MutableMessageType<GetCppEditClassificationResponse_LogProbs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tokens", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "token_logprobs", kind: "scalar", T: 1, repeated: true }
]);
var GetCppEditClassificationResponse_ScoredEdit$Runtime = (() => class _GetCppEditClassificationResponse_ScoredEdit extends Message<_GetCppEditClassificationResponse_ScoredEdit> {
  declare edit?: SuggestedEdit;
  declare logProbs?: GetCppEditClassificationResponse_LogProbs;
  constructor(data?: PartialMessage<_GetCppEditClassificationResponse_ScoredEdit>) {
    super();
    proto3.util.initPartial(data, this as _GetCppEditClassificationResponse_ScoredEdit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCppEditClassificationResponse_ScoredEdit {
    return new _GetCppEditClassificationResponse_ScoredEdit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse_ScoredEdit {
    return new _GetCppEditClassificationResponse_ScoredEdit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCppEditClassificationResponse_ScoredEdit {
    return new _GetCppEditClassificationResponse_ScoredEdit().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCppEditClassificationResponse_ScoredEdit | PlainMessage<_GetCppEditClassificationResponse_ScoredEdit> | undefined | null, b2: _GetCppEditClassificationResponse_ScoredEdit | PlainMessage<_GetCppEditClassificationResponse_ScoredEdit> | undefined | null): boolean {
    return proto3.util.equals(_GetCppEditClassificationResponse_ScoredEdit as unknown as MessageType<_GetCppEditClassificationResponse_ScoredEdit>, a, b2);
  }
})();
export type GetCppEditClassificationResponse_ScoredEdit = InstanceType<typeof GetCppEditClassificationResponse_ScoredEdit$Runtime>;
var GetCppEditClassificationResponse_ScoredEdit: MessageType<GetCppEditClassificationResponse_ScoredEdit> = GetCppEditClassificationResponse_ScoredEdit$Runtime as unknown as MessageType<GetCppEditClassificationResponse_ScoredEdit>;
(GetCppEditClassificationResponse_ScoredEdit as MutableMessageType<GetCppEditClassificationResponse_ScoredEdit>).runtime = proto3;
(GetCppEditClassificationResponse_ScoredEdit as MutableMessageType<GetCppEditClassificationResponse_ScoredEdit>).typeName = "aiserver.v1.GetCppEditClassificationResponse.ScoredEdit";
(GetCppEditClassificationResponse_ScoredEdit as MutableMessageType<GetCppEditClassificationResponse_ScoredEdit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "edit", kind: "message", T: SuggestedEdit },
  { no: 2, name: "log_probs", kind: "message", T: GetCppEditClassificationResponse_LogProbs }
]);
var AdditionalFile$Runtime = (() => class _AdditionalFile extends Message<_AdditionalFile> {
  declare relativeWorkspacePath: string;
  declare isOpen: boolean;
  declare visibleRangeContent: string[];
  declare lastViewedAt?: number;
  declare startLineNumberOneIndexed: number[];
  declare visibleRanges: LineRange[];
  constructor(data?: PartialMessage<_AdditionalFile>) {
    super();
    this.relativeWorkspacePath = "";
    this.isOpen = false;
    this.visibleRangeContent = [];
    this.startLineNumberOneIndexed = [];
    this.visibleRanges = [];
    proto3.util.initPartial(data, this as _AdditionalFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdditionalFile {
    return new _AdditionalFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdditionalFile {
    return new _AdditionalFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdditionalFile {
    return new _AdditionalFile().fromJsonString(jsonString, options);
  }
  static equals(a: _AdditionalFile | PlainMessage<_AdditionalFile> | undefined | null, b2: _AdditionalFile | PlainMessage<_AdditionalFile> | undefined | null): boolean {
    return proto3.util.equals(_AdditionalFile as unknown as MessageType<_AdditionalFile>, a, b2);
  }
})();
export type AdditionalFile = InstanceType<typeof AdditionalFile$Runtime>;
var AdditionalFile: MessageType<AdditionalFile> = AdditionalFile$Runtime as unknown as MessageType<AdditionalFile>;
(AdditionalFile as MutableMessageType<AdditionalFile>).runtime = proto3;
(AdditionalFile as MutableMessageType<AdditionalFile>).typeName = "aiserver.v1.AdditionalFile";
(AdditionalFile as MutableMessageType<AdditionalFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_open",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "visible_range_content", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "last_viewed_at", kind: "scalar", T: 1, opt: true },
  { no: 5, name: "start_line_number_one_indexed", kind: "scalar", T: 5, repeated: true },
  { no: 6, name: "visible_ranges", kind: "message", T: LineRange, repeated: true }
]);
var RecordCppFateRequest$Runtime = (() => class _RecordCppFateRequest extends Message<_RecordCppFateRequest> {
  declare requestId: string;
  declare performanceNowTime: number;
  declare fate: CppFate;
  declare extension: string;
  constructor(data?: PartialMessage<_RecordCppFateRequest>) {
    super();
    this.requestId = "";
    this.performanceNowTime = 0;
    this.fate = CppFate.UNSPECIFIED;
    this.extension = "";
    proto3.util.initPartial(data, this as _RecordCppFateRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCppFateRequest {
    return new _RecordCppFateRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCppFateRequest {
    return new _RecordCppFateRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCppFateRequest {
    return new _RecordCppFateRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCppFateRequest | PlainMessage<_RecordCppFateRequest> | undefined | null, b2: _RecordCppFateRequest | PlainMessage<_RecordCppFateRequest> | undefined | null): boolean {
    return proto3.util.equals(_RecordCppFateRequest as unknown as MessageType<_RecordCppFateRequest>, a, b2);
  }
})();
export type RecordCppFateRequest = InstanceType<typeof RecordCppFateRequest$Runtime>;
var RecordCppFateRequest: MessageType<RecordCppFateRequest> = RecordCppFateRequest$Runtime as unknown as MessageType<RecordCppFateRequest>;
(RecordCppFateRequest as MutableMessageType<RecordCppFateRequest>).runtime = proto3;
(RecordCppFateRequest as MutableMessageType<RecordCppFateRequest>).typeName = "aiserver.v1.RecordCppFateRequest";
(RecordCppFateRequest as MutableMessageType<RecordCppFateRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "performance_now_time",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 3, name: "fate", kind: "enum", T: proto3.getEnumType(CppFate) },
  {
    no: 4,
    name: "extension",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecordCppFateResponse$Runtime = (() => class _RecordCppFateResponse extends Message<_RecordCppFateResponse> {
  constructor(data?: PartialMessage<_RecordCppFateResponse>) {
    super();
    proto3.util.initPartial(data, this as _RecordCppFateResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCppFateResponse {
    return new _RecordCppFateResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCppFateResponse {
    return new _RecordCppFateResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCppFateResponse {
    return new _RecordCppFateResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCppFateResponse | PlainMessage<_RecordCppFateResponse> | undefined | null, b2: _RecordCppFateResponse | PlainMessage<_RecordCppFateResponse> | undefined | null): boolean {
    return proto3.util.equals(_RecordCppFateResponse as unknown as MessageType<_RecordCppFateResponse>, a, b2);
  }
})();
export type RecordCppFateResponse = InstanceType<typeof RecordCppFateResponse$Runtime>;
var RecordCppFateResponse: MessageType<RecordCppFateResponse> = RecordCppFateResponse$Runtime as unknown as MessageType<RecordCppFateResponse>;
(RecordCppFateResponse as MutableMessageType<RecordCppFateResponse>).runtime = proto3;
(RecordCppFateResponse as MutableMessageType<RecordCppFateResponse>).typeName = "aiserver.v1.RecordCppFateResponse";
(RecordCppFateResponse as MutableMessageType<RecordCppFateResponse>).fields = proto3.util.newFieldList(() => []);
var AvailableCppModelsRequest$Runtime = (() => class _AvailableCppModelsRequest extends Message<_AvailableCppModelsRequest> {
  constructor(data?: PartialMessage<_AvailableCppModelsRequest>) {
    super();
    proto3.util.initPartial(data, this as _AvailableCppModelsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AvailableCppModelsRequest {
    return new _AvailableCppModelsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AvailableCppModelsRequest {
    return new _AvailableCppModelsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AvailableCppModelsRequest {
    return new _AvailableCppModelsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AvailableCppModelsRequest | PlainMessage<_AvailableCppModelsRequest> | undefined | null, b2: _AvailableCppModelsRequest | PlainMessage<_AvailableCppModelsRequest> | undefined | null): boolean {
    return proto3.util.equals(_AvailableCppModelsRequest as unknown as MessageType<_AvailableCppModelsRequest>, a, b2);
  }
})();
export type AvailableCppModelsRequest = InstanceType<typeof AvailableCppModelsRequest$Runtime>;
var AvailableCppModelsRequest: MessageType<AvailableCppModelsRequest> = AvailableCppModelsRequest$Runtime as unknown as MessageType<AvailableCppModelsRequest>;
(AvailableCppModelsRequest as MutableMessageType<AvailableCppModelsRequest>).runtime = proto3;
(AvailableCppModelsRequest as MutableMessageType<AvailableCppModelsRequest>).typeName = "aiserver.v1.AvailableCppModelsRequest";
(AvailableCppModelsRequest as MutableMessageType<AvailableCppModelsRequest>).fields = proto3.util.newFieldList(() => []);
var AvailableCppModelsResponse$Runtime = (() => class _AvailableCppModelsResponse extends Message<_AvailableCppModelsResponse> {
  declare models: string[];
  declare defaultModel?: string;
  constructor(data?: PartialMessage<_AvailableCppModelsResponse>) {
    super();
    this.models = [];
    proto3.util.initPartial(data, this as _AvailableCppModelsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AvailableCppModelsResponse {
    return new _AvailableCppModelsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AvailableCppModelsResponse {
    return new _AvailableCppModelsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AvailableCppModelsResponse {
    return new _AvailableCppModelsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AvailableCppModelsResponse | PlainMessage<_AvailableCppModelsResponse> | undefined | null, b2: _AvailableCppModelsResponse | PlainMessage<_AvailableCppModelsResponse> | undefined | null): boolean {
    return proto3.util.equals(_AvailableCppModelsResponse as unknown as MessageType<_AvailableCppModelsResponse>, a, b2);
  }
})();
export type AvailableCppModelsResponse = InstanceType<typeof AvailableCppModelsResponse$Runtime>;
var AvailableCppModelsResponse: MessageType<AvailableCppModelsResponse> = AvailableCppModelsResponse$Runtime as unknown as MessageType<AvailableCppModelsResponse>;
(AvailableCppModelsResponse as MutableMessageType<AvailableCppModelsResponse>).runtime = proto3;
(AvailableCppModelsResponse as MutableMessageType<AvailableCppModelsResponse>).typeName = "aiserver.v1.AvailableCppModelsResponse";
(AvailableCppModelsResponse as MutableMessageType<AvailableCppModelsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "models", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "default_model", kind: "scalar", T: 9, opt: true }
]);
var StreamHoldCppRequest$Runtime = (() => class _StreamHoldCppRequest extends Message<_StreamHoldCppRequest> {
  declare currentFile?: CurrentFileInfo;
  declare linterErrors?: LinterErrors;
  declare contextItems: CppContextItem[];
  declare fileDiffHistories: CppFileDiffHistory[];
  declare mergedDiffHistories: CppFileDiffHistory[];
  declare blockDiffPatches: BlockDiffPatch[];
  declare modelDetails?: ModelDetails;
  constructor(data?: PartialMessage<_StreamHoldCppRequest>) {
    super();
    this.contextItems = [];
    this.fileDiffHistories = [];
    this.mergedDiffHistories = [];
    this.blockDiffPatches = [];
    proto3.util.initPartial(data, this as _StreamHoldCppRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamHoldCppRequest {
    return new _StreamHoldCppRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamHoldCppRequest {
    return new _StreamHoldCppRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamHoldCppRequest {
    return new _StreamHoldCppRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamHoldCppRequest | PlainMessage<_StreamHoldCppRequest> | undefined | null, b2: _StreamHoldCppRequest | PlainMessage<_StreamHoldCppRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamHoldCppRequest as unknown as MessageType<_StreamHoldCppRequest>, a, b2);
  }
})();
export type StreamHoldCppRequest = InstanceType<typeof StreamHoldCppRequest$Runtime>;
var StreamHoldCppRequest: MessageType<StreamHoldCppRequest> = StreamHoldCppRequest$Runtime as unknown as MessageType<StreamHoldCppRequest>;
(StreamHoldCppRequest as MutableMessageType<StreamHoldCppRequest>).runtime = proto3;
(StreamHoldCppRequest as MutableMessageType<StreamHoldCppRequest>).typeName = "aiserver.v1.StreamHoldCppRequest";
(StreamHoldCppRequest as MutableMessageType<StreamHoldCppRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 4, name: "linter_errors", kind: "message", T: LinterErrors, opt: true },
  { no: 13, name: "context_items", kind: "message", T: CppContextItem, repeated: true },
  { no: 7, name: "file_diff_histories", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 8, name: "merged_diff_histories", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 9, name: "block_diff_patches", kind: "message", T: BlockDiffPatch, repeated: true },
  { no: 10, name: "model_details", kind: "message", T: ModelDetails }
]);
var StreamHoldCppResponse$Runtime = (() => class _StreamHoldCppResponse extends Message<_StreamHoldCppResponse> {
  declare text: string;
  constructor(data?: PartialMessage<_StreamHoldCppResponse>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamHoldCppResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamHoldCppResponse {
    return new _StreamHoldCppResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamHoldCppResponse {
    return new _StreamHoldCppResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamHoldCppResponse {
    return new _StreamHoldCppResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamHoldCppResponse | PlainMessage<_StreamHoldCppResponse> | undefined | null, b2: _StreamHoldCppResponse | PlainMessage<_StreamHoldCppResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamHoldCppResponse as unknown as MessageType<_StreamHoldCppResponse>, a, b2);
  }
})();
export type StreamHoldCppResponse = InstanceType<typeof StreamHoldCppResponse$Runtime>;
var StreamHoldCppResponse: MessageType<StreamHoldCppResponse> = StreamHoldCppResponse$Runtime as unknown as MessageType<StreamHoldCppResponse>;
(StreamHoldCppResponse as MutableMessageType<StreamHoldCppResponse>).runtime = proto3;
(StreamHoldCppResponse as MutableMessageType<StreamHoldCppResponse>).typeName = "aiserver.v1.StreamHoldCppResponse";
(StreamHoldCppResponse as MutableMessageType<StreamHoldCppResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CppFileDiffHistory$Runtime = (() => class _CppFileDiffHistory extends Message<_CppFileDiffHistory> {
  declare fileName: string;
  declare diffHistory: string[];
  declare diffHistoryTimestamps: number[];
  constructor(data?: PartialMessage<_CppFileDiffHistory>) {
    super();
    this.fileName = "";
    this.diffHistory = [];
    this.diffHistoryTimestamps = [];
    proto3.util.initPartial(data, this as _CppFileDiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppFileDiffHistory {
    return new _CppFileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppFileDiffHistory {
    return new _CppFileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppFileDiffHistory {
    return new _CppFileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _CppFileDiffHistory | PlainMessage<_CppFileDiffHistory> | undefined | null, b2: _CppFileDiffHistory | PlainMessage<_CppFileDiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_CppFileDiffHistory as unknown as MessageType<_CppFileDiffHistory>, a, b2);
  }
})();
export type CppFileDiffHistory = InstanceType<typeof CppFileDiffHistory$Runtime>;
var CppFileDiffHistory: MessageType<CppFileDiffHistory> = CppFileDiffHistory$Runtime as unknown as MessageType<CppFileDiffHistory>;
(CppFileDiffHistory as MutableMessageType<CppFileDiffHistory>).runtime = proto3;
(CppFileDiffHistory as MutableMessageType<CppFileDiffHistory>).typeName = "aiserver.v1.CppFileDiffHistory";
(CppFileDiffHistory as MutableMessageType<CppFileDiffHistory>).fields = proto3.util.newFieldList(() => [
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
var RefreshTabContextRequest$Runtime = (() => class _RefreshTabContextRequest extends Message<_RefreshTabContextRequest> {
  declare currentFile?: CurrentFileInfo;
  declare modelName?: string;
  declare linterErrors?: LinterErrors;
  declare fileDiffHistories: CppFileDiffHistory[];
  declare additionalFiles: AdditionalFile[];
  declare clientTime?: number;
  declare timeSinceRequestStart: number;
  declare timeAtRequestSend: number;
  declare isDebug?: boolean;
  declare workspaceId?: string;
  declare supportsCpt?: boolean;
  declare supportsCrlfCpt?: boolean;
  declare repositoryInfo?: RepositoryInfo;
  constructor(data?: PartialMessage<_RefreshTabContextRequest>) {
    super();
    this.fileDiffHistories = [];
    this.additionalFiles = [];
    this.timeSinceRequestStart = 0;
    this.timeAtRequestSend = 0;
    proto3.util.initPartial(data, this as _RefreshTabContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RefreshTabContextRequest {
    return new _RefreshTabContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RefreshTabContextRequest {
    return new _RefreshTabContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RefreshTabContextRequest {
    return new _RefreshTabContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RefreshTabContextRequest | PlainMessage<_RefreshTabContextRequest> | undefined | null, b2: _RefreshTabContextRequest | PlainMessage<_RefreshTabContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_RefreshTabContextRequest as unknown as MessageType<_RefreshTabContextRequest>, a, b2);
  }
})();
export type RefreshTabContextRequest = InstanceType<typeof RefreshTabContextRequest$Runtime>;
var RefreshTabContextRequest: MessageType<RefreshTabContextRequest> = RefreshTabContextRequest$Runtime as unknown as MessageType<RefreshTabContextRequest>;
(RefreshTabContextRequest as MutableMessageType<RefreshTabContextRequest>).runtime = proto3;
(RefreshTabContextRequest as MutableMessageType<RefreshTabContextRequest>).typeName = "aiserver.v1.RefreshTabContextRequest";
(RefreshTabContextRequest as MutableMessageType<RefreshTabContextRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 2, name: "model_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "linter_errors", kind: "message", T: LinterErrors, opt: true },
  { no: 4, name: "file_diff_histories", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 5, name: "additional_files", kind: "message", T: AdditionalFile, repeated: true },
  { no: 6, name: "client_time", kind: "scalar", T: 1, opt: true },
  {
    no: 7,
    name: "time_since_request_start",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 8,
    name: "time_at_request_send",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 9, name: "is_debug", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "workspace_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "supports_cpt", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "supports_crlf_cpt", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "repository_info", kind: "message", T: RepositoryInfo }
]);
var RefreshTabContextResponse$Runtime = (() => class _RefreshTabContextResponse extends Message<_RefreshTabContextResponse> {
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_RefreshTabContextResponse>) {
    super();
    this.codeResults = [];
    proto3.util.initPartial(data, this as _RefreshTabContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RefreshTabContextResponse {
    return new _RefreshTabContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RefreshTabContextResponse {
    return new _RefreshTabContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RefreshTabContextResponse {
    return new _RefreshTabContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RefreshTabContextResponse | PlainMessage<_RefreshTabContextResponse> | undefined | null, b2: _RefreshTabContextResponse | PlainMessage<_RefreshTabContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_RefreshTabContextResponse as unknown as MessageType<_RefreshTabContextResponse>, a, b2);
  }
})();
export type RefreshTabContextResponse = InstanceType<typeof RefreshTabContextResponse$Runtime>;
var RefreshTabContextResponse: MessageType<RefreshTabContextResponse> = RefreshTabContextResponse$Runtime as unknown as MessageType<RefreshTabContextResponse>;
(RefreshTabContextResponse as MutableMessageType<RefreshTabContextResponse>).runtime = proto3;
(RefreshTabContextResponse as MutableMessageType<RefreshTabContextResponse>).typeName = "aiserver.v1.RefreshTabContextResponse";
(RefreshTabContextResponse as MutableMessageType<RefreshTabContextResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var EditPatch$Runtime = (() => class _EditPatch extends Message<_EditPatch> {
  declare relativePath: string;
  declare lineNumber: number;
  declare deletedLines: string[];
  declare insertedLines: string[];
  constructor(data?: PartialMessage<_EditPatch>) {
    super();
    this.relativePath = "";
    this.lineNumber = 0;
    this.deletedLines = [];
    this.insertedLines = [];
    proto3.util.initPartial(data, this as _EditPatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPatch {
    return new _EditPatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPatch {
    return new _EditPatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPatch {
    return new _EditPatch().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPatch | PlainMessage<_EditPatch> | undefined | null, b2: _EditPatch | PlainMessage<_EditPatch> | undefined | null): boolean {
    return proto3.util.equals(_EditPatch as unknown as MessageType<_EditPatch>, a, b2);
  }
})();
export type EditPatch = InstanceType<typeof EditPatch$Runtime>;
var EditPatch: MessageType<EditPatch> = EditPatch$Runtime as unknown as MessageType<EditPatch>;
(EditPatch as MutableMessageType<EditPatch>).runtime = proto3;
(EditPatch as MutableMessageType<EditPatch>).typeName = "aiserver.v1.EditPatch";
(EditPatch as MutableMessageType<EditPatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 3, name: "deleted_lines", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "inserted_lines", kind: "scalar", T: 9, repeated: true }
]);
var CptFileDiffHistory$Runtime = (() => class _CptFileDiffHistory extends Message<_CptFileDiffHistory> {
  declare fileName: string;
  declare editPatches: EditPatch[];
  constructor(data?: PartialMessage<_CptFileDiffHistory>) {
    super();
    this.fileName = "";
    this.editPatches = [];
    proto3.util.initPartial(data, this as _CptFileDiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CptFileDiffHistory {
    return new _CptFileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CptFileDiffHistory {
    return new _CptFileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CptFileDiffHistory {
    return new _CptFileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _CptFileDiffHistory | PlainMessage<_CptFileDiffHistory> | undefined | null, b2: _CptFileDiffHistory | PlainMessage<_CptFileDiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_CptFileDiffHistory as unknown as MessageType<_CptFileDiffHistory>, a, b2);
  }
})();
export type CptFileDiffHistory = InstanceType<typeof CptFileDiffHistory$Runtime>;
var CptFileDiffHistory: MessageType<CptFileDiffHistory> = CptFileDiffHistory$Runtime as unknown as MessageType<CptFileDiffHistory>;
(CptFileDiffHistory as MutableMessageType<CptFileDiffHistory>).runtime = proto3;
(CptFileDiffHistory as MutableMessageType<CptFileDiffHistory>).typeName = "aiserver.v1.CptFileDiffHistory";
(CptFileDiffHistory as MutableMessageType<CptFileDiffHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "edit_patches", kind: "message", T: EditPatch, repeated: true }
]);
var CppContextItem$Runtime = (() => class _CppContextItem extends Message<_CppContextItem> {
  declare contents: string;
  declare symbol?: string;
  declare relativeWorkspacePath: string;
  declare score: number;
  constructor(data?: PartialMessage<_CppContextItem>) {
    super();
    this.contents = "";
    this.relativeWorkspacePath = "";
    this.score = 0;
    proto3.util.initPartial(data, this as _CppContextItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppContextItem {
    return new _CppContextItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppContextItem {
    return new _CppContextItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppContextItem {
    return new _CppContextItem().fromJsonString(jsonString, options);
  }
  static equals(a: _CppContextItem | PlainMessage<_CppContextItem> | undefined | null, b2: _CppContextItem | PlainMessage<_CppContextItem> | undefined | null): boolean {
    return proto3.util.equals(_CppContextItem as unknown as MessageType<_CppContextItem>, a, b2);
  }
})();
export type CppContextItem = InstanceType<typeof CppContextItem$Runtime>;
var CppContextItem: MessageType<CppContextItem> = CppContextItem$Runtime as unknown as MessageType<CppContextItem>;
(CppContextItem as MutableMessageType<CppContextItem>).runtime = proto3;
(CppContextItem as MutableMessageType<CppContextItem>).typeName = "aiserver.v1.CppContextItem";
(CppContextItem as MutableMessageType<CppContextItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "symbol", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var AddTabRequestToEvalRequest$Runtime = (() => class _AddTabRequestToEvalRequest extends Message<_AddTabRequestToEvalRequest> {
  declare requestId: string;
  declare expectedBehavior: string;
  constructor(data?: PartialMessage<_AddTabRequestToEvalRequest>) {
    super();
    this.requestId = "";
    this.expectedBehavior = "";
    proto3.util.initPartial(data, this as _AddTabRequestToEvalRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTabRequestToEvalRequest {
    return new _AddTabRequestToEvalRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTabRequestToEvalRequest {
    return new _AddTabRequestToEvalRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTabRequestToEvalRequest {
    return new _AddTabRequestToEvalRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTabRequestToEvalRequest | PlainMessage<_AddTabRequestToEvalRequest> | undefined | null, b2: _AddTabRequestToEvalRequest | PlainMessage<_AddTabRequestToEvalRequest> | undefined | null): boolean {
    return proto3.util.equals(_AddTabRequestToEvalRequest as unknown as MessageType<_AddTabRequestToEvalRequest>, a, b2);
  }
})();
export type AddTabRequestToEvalRequest = InstanceType<typeof AddTabRequestToEvalRequest$Runtime>;
var AddTabRequestToEvalRequest: MessageType<AddTabRequestToEvalRequest> = AddTabRequestToEvalRequest$Runtime as unknown as MessageType<AddTabRequestToEvalRequest>;
(AddTabRequestToEvalRequest as MutableMessageType<AddTabRequestToEvalRequest>).runtime = proto3;
(AddTabRequestToEvalRequest as MutableMessageType<AddTabRequestToEvalRequest>).typeName = "aiserver.v1.AddTabRequestToEvalRequest";
(AddTabRequestToEvalRequest as MutableMessageType<AddTabRequestToEvalRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "expected_behavior",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AddTabRequestToEvalResponse$Runtime = (() => class _AddTabRequestToEvalResponse extends Message<_AddTabRequestToEvalResponse> {
  constructor(data?: PartialMessage<_AddTabRequestToEvalResponse>) {
    super();
    proto3.util.initPartial(data, this as _AddTabRequestToEvalResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTabRequestToEvalResponse {
    return new _AddTabRequestToEvalResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTabRequestToEvalResponse {
    return new _AddTabRequestToEvalResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTabRequestToEvalResponse {
    return new _AddTabRequestToEvalResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTabRequestToEvalResponse | PlainMessage<_AddTabRequestToEvalResponse> | undefined | null, b2: _AddTabRequestToEvalResponse | PlainMessage<_AddTabRequestToEvalResponse> | undefined | null): boolean {
    return proto3.util.equals(_AddTabRequestToEvalResponse as unknown as MessageType<_AddTabRequestToEvalResponse>, a, b2);
  }
})();
export type AddTabRequestToEvalResponse = InstanceType<typeof AddTabRequestToEvalResponse$Runtime>;
var AddTabRequestToEvalResponse: MessageType<AddTabRequestToEvalResponse> = AddTabRequestToEvalResponse$Runtime as unknown as MessageType<AddTabRequestToEvalResponse>;
(AddTabRequestToEvalResponse as MutableMessageType<AddTabRequestToEvalResponse>).runtime = proto3;
(AddTabRequestToEvalResponse as MutableMessageType<AddTabRequestToEvalResponse>).typeName = "aiserver.v1.AddTabRequestToEvalResponse";
(AddTabRequestToEvalResponse as MutableMessageType<AddTabRequestToEvalResponse>).fields = proto3.util.newFieldList(() => []);
var MarkCppRequest$Runtime = (() => class _MarkCppRequest extends Message<_MarkCppRequest> {
  declare requestId: string;
  declare sessionId: string;
  declare responseType: MarkCppRequest_CppResponseTypes;
  declare desiredCompletion?: string;
  declare rangeTransformation?: MarkCppRequest_RangeTransformation;
  declare modelCodeName: string;
  declare modelOpenaiName: string;
  declare currentPerformanceNowTime: number;
  declare sessionPerformanceOriginTime: number;
  constructor(data?: PartialMessage<_MarkCppRequest>) {
    super();
    this.requestId = "";
    this.sessionId = "";
    this.responseType = MarkCppRequest_CppResponseTypes.UNSPECIFIED;
    this.modelCodeName = "";
    this.modelOpenaiName = "";
    this.currentPerformanceNowTime = 0;
    this.sessionPerformanceOriginTime = 0;
    proto3.util.initPartial(data, this as _MarkCppRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MarkCppRequest {
    return new _MarkCppRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MarkCppRequest {
    return new _MarkCppRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MarkCppRequest {
    return new _MarkCppRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _MarkCppRequest | PlainMessage<_MarkCppRequest> | undefined | null, b2: _MarkCppRequest | PlainMessage<_MarkCppRequest> | undefined | null): boolean {
    return proto3.util.equals(_MarkCppRequest as unknown as MessageType<_MarkCppRequest>, a, b2);
  }
})();
export type MarkCppRequest = InstanceType<typeof MarkCppRequest$Runtime>;
var MarkCppRequest: MessageType<MarkCppRequest> = MarkCppRequest$Runtime as unknown as MessageType<MarkCppRequest>;
(MarkCppRequest as MutableMessageType<MarkCppRequest>).runtime = proto3;
(MarkCppRequest as MutableMessageType<MarkCppRequest>).typeName = "aiserver.v1.MarkCppRequest";
(MarkCppRequest as MutableMessageType<MarkCppRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "response_type", kind: "enum", T: proto3.getEnumType(MarkCppRequest_CppResponseTypes) },
  { no: 4, name: "desired_completion", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "range_transformation", kind: "message", T: MarkCppRequest_RangeTransformation },
  {
    no: 10,
    name: "model_code_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 11,
    name: "model_openai_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "current_performance_now_time",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 13,
    name: "session_performance_origin_time",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
(function(MarkCppRequest_CppResponseTypes2) {
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["GOOD"] = 1] = "GOOD";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD"] = 2] = "BAD";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_CONTEXT"] = 3] = "BAD_CONTEXT";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_REASONING"] = 4] = "BAD_REASONING";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_STUPID_MISTAKE"] = 5] = "BAD_STUPID_MISTAKE";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_FORMATTING"] = 6] = "BAD_FORMATTING";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_RANGE"] = 7] = "BAD_RANGE";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["GOOD_PREDICTION"] = 8] = "GOOD_PREDICTION";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_FALSE_POSITIVE_TRIGGER"] = 9] = "BAD_FALSE_POSITIVE_TRIGGER";
  MarkCppRequest_CppResponseTypes2[MarkCppRequest_CppResponseTypes2["BAD_FALSE_NEGATIVE_TRIGGER"] = 10] = "BAD_FALSE_NEGATIVE_TRIGGER";
})(MarkCppRequest_CppResponseTypes! || (MarkCppRequest_CppResponseTypes = {} as typeof MarkCppRequest_CppResponseTypes));
proto3.util.setEnumType(MarkCppRequest_CppResponseTypes, "aiserver.v1.MarkCppRequest.CppResponseTypes", [
  { no: 0, name: "CPP_RESPONSE_TYPES_UNSPECIFIED" },
  { no: 1, name: "CPP_RESPONSE_TYPES_GOOD" },
  { no: 2, name: "CPP_RESPONSE_TYPES_BAD" },
  { no: 3, name: "CPP_RESPONSE_TYPES_BAD_CONTEXT" },
  { no: 4, name: "CPP_RESPONSE_TYPES_BAD_REASONING" },
  { no: 5, name: "CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE" },
  { no: 6, name: "CPP_RESPONSE_TYPES_BAD_FORMATTING" },
  { no: 7, name: "CPP_RESPONSE_TYPES_BAD_RANGE" },
  { no: 8, name: "CPP_RESPONSE_TYPES_GOOD_PREDICTION" },
  { no: 9, name: "CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER" },
  { no: 10, name: "CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER" }
]);
var MarkCppRequest_RangeTransformation$Runtime = (() => class _MarkCppRequest_RangeTransformation extends Message<_MarkCppRequest_RangeTransformation> {
  declare startLineNumber: number;
  declare endLineNumber: number;
  constructor(data?: PartialMessage<_MarkCppRequest_RangeTransformation>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    proto3.util.initPartial(data, this as _MarkCppRequest_RangeTransformation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MarkCppRequest_RangeTransformation {
    return new _MarkCppRequest_RangeTransformation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MarkCppRequest_RangeTransformation {
    return new _MarkCppRequest_RangeTransformation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MarkCppRequest_RangeTransformation {
    return new _MarkCppRequest_RangeTransformation().fromJsonString(jsonString, options);
  }
  static equals(a: _MarkCppRequest_RangeTransformation | PlainMessage<_MarkCppRequest_RangeTransformation> | undefined | null, b2: _MarkCppRequest_RangeTransformation | PlainMessage<_MarkCppRequest_RangeTransformation> | undefined | null): boolean {
    return proto3.util.equals(_MarkCppRequest_RangeTransformation as unknown as MessageType<_MarkCppRequest_RangeTransformation>, a, b2);
  }
})();
export type MarkCppRequest_RangeTransformation = InstanceType<typeof MarkCppRequest_RangeTransformation$Runtime>;
var MarkCppRequest_RangeTransformation: MessageType<MarkCppRequest_RangeTransformation> = MarkCppRequest_RangeTransformation$Runtime as unknown as MessageType<MarkCppRequest_RangeTransformation>;
(MarkCppRequest_RangeTransformation as MutableMessageType<MarkCppRequest_RangeTransformation>).runtime = proto3;
(MarkCppRequest_RangeTransformation as MutableMessageType<MarkCppRequest_RangeTransformation>).typeName = "aiserver.v1.MarkCppRequest.RangeTransformation";
(MarkCppRequest_RangeTransformation as MutableMessageType<MarkCppRequest_RangeTransformation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CppParameterHint$Runtime = (() => class _CppParameterHint extends Message<_CppParameterHint> {
  declare label: string;
  declare documentation?: string;
  constructor(data?: PartialMessage<_CppParameterHint>) {
    super();
    this.label = "";
    proto3.util.initPartial(data, this as _CppParameterHint);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppParameterHint {
    return new _CppParameterHint().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppParameterHint {
    return new _CppParameterHint().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppParameterHint {
    return new _CppParameterHint().fromJsonString(jsonString, options);
  }
  static equals(a: _CppParameterHint | PlainMessage<_CppParameterHint> | undefined | null, b2: _CppParameterHint | PlainMessage<_CppParameterHint> | undefined | null): boolean {
    return proto3.util.equals(_CppParameterHint as unknown as MessageType<_CppParameterHint>, a, b2);
  }
})();
export type CppParameterHint = InstanceType<typeof CppParameterHint$Runtime>;
var CppParameterHint: MessageType<CppParameterHint> = CppParameterHint$Runtime as unknown as MessageType<CppParameterHint>;
(CppParameterHint as MutableMessageType<CppParameterHint>).runtime = proto3;
(CppParameterHint as MutableMessageType<CppParameterHint>).typeName = "aiserver.v1.CppParameterHint";
(CppParameterHint as MutableMessageType<CppParameterHint>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "documentation", kind: "scalar", T: 9, opt: true }
]);
var MarkCppResponse$Runtime = (() => class _MarkCppResponse extends Message<_MarkCppResponse> {
  constructor(data?: PartialMessage<_MarkCppResponse>) {
    super();
    proto3.util.initPartial(data, this as _MarkCppResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MarkCppResponse {
    return new _MarkCppResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MarkCppResponse {
    return new _MarkCppResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MarkCppResponse {
    return new _MarkCppResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _MarkCppResponse | PlainMessage<_MarkCppResponse> | undefined | null, b2: _MarkCppResponse | PlainMessage<_MarkCppResponse> | undefined | null): boolean {
    return proto3.util.equals(_MarkCppResponse as unknown as MessageType<_MarkCppResponse>, a, b2);
  }
})();
export type MarkCppResponse = InstanceType<typeof MarkCppResponse$Runtime>;
var MarkCppResponse: MessageType<MarkCppResponse> = MarkCppResponse$Runtime as unknown as MessageType<MarkCppResponse>;
(MarkCppResponse as MutableMessageType<MarkCppResponse>).runtime = proto3;
(MarkCppResponse as MutableMessageType<MarkCppResponse>).typeName = "aiserver.v1.MarkCppResponse";
(MarkCppResponse as MutableMessageType<MarkCppResponse>).fields = proto3.util.newFieldList(() => []);
var IRange$Runtime = (() => class _IRange extends Message<_IRange> {
  declare startLineNumber: number;
  declare startColumn: number;
  declare endLineNumber: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_IRange>) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumber = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _IRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IRange {
    return new _IRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IRange {
    return new _IRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IRange {
    return new _IRange().fromJsonString(jsonString, options);
  }
  static equals(a: _IRange | PlainMessage<_IRange> | undefined | null, b2: _IRange | PlainMessage<_IRange> | undefined | null): boolean {
    return proto3.util.equals(_IRange as unknown as MessageType<_IRange>, a, b2);
  }
})();
export type IRange = InstanceType<typeof IRange$Runtime>;
var IRange: MessageType<IRange> = IRange$Runtime as unknown as MessageType<IRange>;
(IRange as MutableMessageType<IRange>).runtime = proto3;
(IRange as MutableMessageType<IRange>).typeName = "aiserver.v1.IRange";
(IRange as MutableMessageType<IRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var OneIndexedPosition$Runtime = (() => class _OneIndexedPosition extends Message<_OneIndexedPosition> {
  declare lineNumberOneIndexed: number;
  declare columnOneIndexed: number;
  constructor(data?: PartialMessage<_OneIndexedPosition>) {
    super();
    this.lineNumberOneIndexed = 0;
    this.columnOneIndexed = 0;
    proto3.util.initPartial(data, this as _OneIndexedPosition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _OneIndexedPosition {
    return new _OneIndexedPosition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _OneIndexedPosition {
    return new _OneIndexedPosition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _OneIndexedPosition {
    return new _OneIndexedPosition().fromJsonString(jsonString, options);
  }
  static equals(a: _OneIndexedPosition | PlainMessage<_OneIndexedPosition> | undefined | null, b2: _OneIndexedPosition | PlainMessage<_OneIndexedPosition> | undefined | null): boolean {
    return proto3.util.equals(_OneIndexedPosition as unknown as MessageType<_OneIndexedPosition>, a, b2);
  }
})();
export type OneIndexedPosition = InstanceType<typeof OneIndexedPosition$Runtime>;
var OneIndexedPosition: MessageType<OneIndexedPosition> = OneIndexedPosition$Runtime as unknown as MessageType<OneIndexedPosition>;
(OneIndexedPosition as MutableMessageType<OneIndexedPosition>).runtime = proto3;
(OneIndexedPosition as MutableMessageType<OneIndexedPosition>).typeName = "aiserver.v1.OneIndexedPosition";
(OneIndexedPosition as MutableMessageType<OneIndexedPosition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "column_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CursorSelection$Runtime = (() => class _CursorSelection extends Message<_CursorSelection> {
  declare selectionStartLineNumber: number;
  declare selectionStartColumn: number;
  declare positionLineNumber: number;
  declare positionColumn: number;
  constructor(data?: PartialMessage<_CursorSelection>) {
    super();
    this.selectionStartLineNumber = 0;
    this.selectionStartColumn = 0;
    this.positionLineNumber = 0;
    this.positionColumn = 0;
    proto3.util.initPartial(data, this as _CursorSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorSelection {
    return new _CursorSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorSelection {
    return new _CursorSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorSelection {
    return new _CursorSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorSelection | PlainMessage<_CursorSelection> | undefined | null, b2: _CursorSelection | PlainMessage<_CursorSelection> | undefined | null): boolean {
    return proto3.util.equals(_CursorSelection as unknown as MessageType<_CursorSelection>, a, b2);
  }
})();
export type CursorSelection = InstanceType<typeof CursorSelection$Runtime>;
var CursorSelection: MessageType<CursorSelection> = CursorSelection$Runtime as unknown as MessageType<CursorSelection>;
(CursorSelection as MutableMessageType<CursorSelection>).runtime = proto3;
(CursorSelection as MutableMessageType<CursorSelection>).typeName = "aiserver.v1.CursorSelection";
(CursorSelection as MutableMessageType<CursorSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selection_start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "selection_start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "position_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "position_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ModelChange$Runtime = (() => class _ModelChange extends Message<_ModelChange> {
  declare text: string;
  declare range?: IRange;
  declare finalModelHash?: string;
  declare modelVersionImmediatelyAfterThisChange?: number;
  declare performanceNowTimestamp?: number;
  declare isUndoing?: boolean;
  declare isRedoing?: boolean;
  declare modelIsAttachedToEditor: boolean;
  declare modelIsAttachedToTheActiveEditor: boolean;
  declare cursorSelections: CursorSelection[];
  declare modelVersionAtMetadataRetrievalTime: number;
  declare globalIndex?: bigint;
  declare performanceNowFlushTime?: number;
  declare changeIndex?: number;
  declare flushIndex?: number;
  declare globalIndexV2?: number;
  constructor(data?: PartialMessage<_ModelChange>) {
    super();
    this.text = "";
    this.modelIsAttachedToEditor = false;
    this.modelIsAttachedToTheActiveEditor = false;
    this.cursorSelections = [];
    this.modelVersionAtMetadataRetrievalTime = 0;
    proto3.util.initPartial(data, this as _ModelChange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelChange {
    return new _ModelChange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelChange {
    return new _ModelChange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelChange {
    return new _ModelChange().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelChange | PlainMessage<_ModelChange> | undefined | null, b2: _ModelChange | PlainMessage<_ModelChange> | undefined | null): boolean {
    return proto3.util.equals(_ModelChange as unknown as MessageType<_ModelChange>, a, b2);
  }
})();
export type ModelChange = InstanceType<typeof ModelChange$Runtime>;
var ModelChange: MessageType<ModelChange> = ModelChange$Runtime as unknown as MessageType<ModelChange>;
(ModelChange as MutableMessageType<ModelChange>).runtime = proto3;
(ModelChange as MutableMessageType<ModelChange>).typeName = "aiserver.v1.ModelChange";
(ModelChange as MutableMessageType<ModelChange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: IRange },
  { no: 3, name: "final_model_hash", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "model_version_immediately_after_this_change", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1, opt: true },
  { no: 7, name: "is_undoing", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "is_redoing", kind: "scalar", T: 8, opt: true },
  {
    no: 9,
    name: "model_is_attached_to_editor",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 10,
    name: "model_is_attached_to_the_active_editor",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 11, name: "cursor_selections", kind: "message", T: CursorSelection, repeated: true },
  {
    no: 12,
    name: "model_version_at_metadata_retrieval_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 13, name: "global_index", kind: "scalar", T: 3, opt: true },
  { no: 14, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true },
  { no: 15, name: "change_index", kind: "scalar", T: 5, opt: true },
  { no: 16, name: "flush_index", kind: "scalar", T: 5, opt: true },
  { no: 17, name: "global_index_v2", kind: "scalar", T: 5, opt: true }
]);
var CurrentlyShownCppSuggestion$Runtime = (() => class _CurrentlyShownCppSuggestion extends Message<_CurrentlyShownCppSuggestion> {
  declare suggestionId: number;
  declare suggestionText: string;
  declare modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel: number;
  declare rangeOfSuggestionInCurrentModel?: IRange;
  declare originalText: string;
  declare bindingId?: string;
  constructor(data?: PartialMessage<_CurrentlyShownCppSuggestion>) {
    super();
    this.suggestionId = 0;
    this.suggestionText = "";
    this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0;
    this.originalText = "";
    proto3.util.initPartial(data, this as _CurrentlyShownCppSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CurrentlyShownCppSuggestion {
    return new _CurrentlyShownCppSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CurrentlyShownCppSuggestion {
    return new _CurrentlyShownCppSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CurrentlyShownCppSuggestion {
    return new _CurrentlyShownCppSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _CurrentlyShownCppSuggestion | PlainMessage<_CurrentlyShownCppSuggestion> | undefined | null, b2: _CurrentlyShownCppSuggestion | PlainMessage<_CurrentlyShownCppSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_CurrentlyShownCppSuggestion as unknown as MessageType<_CurrentlyShownCppSuggestion>, a, b2);
  }
})();
export type CurrentlyShownCppSuggestion = InstanceType<typeof CurrentlyShownCppSuggestion$Runtime>;
var CurrentlyShownCppSuggestion: MessageType<CurrentlyShownCppSuggestion> = CurrentlyShownCppSuggestion$Runtime as unknown as MessageType<CurrentlyShownCppSuggestion>;
(CurrentlyShownCppSuggestion as MutableMessageType<CurrentlyShownCppSuggestion>).runtime = proto3;
(CurrentlyShownCppSuggestion as MutableMessageType<CurrentlyShownCppSuggestion>).typeName = "aiserver.v1.CurrentlyShownCppSuggestion";
(CurrentlyShownCppSuggestion as MutableMessageType<CurrentlyShownCppSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "suggestion_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "suggestion_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "range_of_suggestion_in_current_model", kind: "message", T: IRange, opt: true },
  {
    no: 5,
    name: "original_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "binding_id", kind: "scalar", T: 9, opt: true }
]);
var CppAcceptEventNew$Runtime = (() => class _CppAcceptEventNew extends Message<_CppAcceptEventNew> {
  declare cppSuggestion?: CurrentlyShownCppSuggestion;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_CppAcceptEventNew>) {
    super();
    proto3.util.initPartial(data, this as _CppAcceptEventNew);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppAcceptEventNew {
    return new _CppAcceptEventNew().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppAcceptEventNew {
    return new _CppAcceptEventNew().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppAcceptEventNew {
    return new _CppAcceptEventNew().fromJsonString(jsonString, options);
  }
  static equals(a: _CppAcceptEventNew | PlainMessage<_CppAcceptEventNew> | undefined | null, b2: _CppAcceptEventNew | PlainMessage<_CppAcceptEventNew> | undefined | null): boolean {
    return proto3.util.equals(_CppAcceptEventNew as unknown as MessageType<_CppAcceptEventNew>, a, b2);
  }
})();
export type CppAcceptEventNew = InstanceType<typeof CppAcceptEventNew$Runtime>;
var CppAcceptEventNew: MessageType<CppAcceptEventNew> = CppAcceptEventNew$Runtime as unknown as MessageType<CppAcceptEventNew>;
(CppAcceptEventNew as MutableMessageType<CppAcceptEventNew>).runtime = proto3;
(CppAcceptEventNew as MutableMessageType<CppAcceptEventNew>).typeName = "aiserver.v1.CppAcceptEventNew";
(CppAcceptEventNew as MutableMessageType<CppAcceptEventNew>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CurrentlyShownCppSuggestion },
  { no: 7, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var RecoverableCppData$Runtime = (() => class _RecoverableCppData extends Message<_RecoverableCppData> {
  declare requestId: string;
  declare suggestionText: string;
  declare suggestionRange?: IRange;
  declare position?: OneIndexedPosition;
  constructor(data?: PartialMessage<_RecoverableCppData>) {
    super();
    this.requestId = "";
    this.suggestionText = "";
    proto3.util.initPartial(data, this as _RecoverableCppData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecoverableCppData {
    return new _RecoverableCppData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecoverableCppData {
    return new _RecoverableCppData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecoverableCppData {
    return new _RecoverableCppData().fromJsonString(jsonString, options);
  }
  static equals(a: _RecoverableCppData | PlainMessage<_RecoverableCppData> | undefined | null, b2: _RecoverableCppData | PlainMessage<_RecoverableCppData> | undefined | null): boolean {
    return proto3.util.equals(_RecoverableCppData as unknown as MessageType<_RecoverableCppData>, a, b2);
  }
})();
export type RecoverableCppData = InstanceType<typeof RecoverableCppData$Runtime>;
var RecoverableCppData: MessageType<RecoverableCppData> = RecoverableCppData$Runtime as unknown as MessageType<RecoverableCppData>;
(RecoverableCppData as MutableMessageType<RecoverableCppData>).runtime = proto3;
(RecoverableCppData as MutableMessageType<RecoverableCppData>).typeName = "aiserver.v1.RecoverableCppData";
(RecoverableCppData as MutableMessageType<RecoverableCppData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "suggestion_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "suggestion_range", kind: "message", T: IRange },
  { no: 4, name: "position", kind: "message", T: OneIndexedPosition }
]);
var CppSuggestEvent$Runtime = (() => class _CppSuggestEvent extends Message<_CppSuggestEvent> {
  declare cppSuggestion?: CurrentlyShownCppSuggestion;
  declare pointInTimeModel?: PointInTimeModel;
  declare recoverableCppData?: RecoverableCppData;
  constructor(data?: PartialMessage<_CppSuggestEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppSuggestEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppSuggestEvent {
    return new _CppSuggestEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppSuggestEvent {
    return new _CppSuggestEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppSuggestEvent {
    return new _CppSuggestEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppSuggestEvent | PlainMessage<_CppSuggestEvent> | undefined | null, b2: _CppSuggestEvent | PlainMessage<_CppSuggestEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppSuggestEvent as unknown as MessageType<_CppSuggestEvent>, a, b2);
  }
})();
export type CppSuggestEvent = InstanceType<typeof CppSuggestEvent$Runtime>;
var CppSuggestEvent: MessageType<CppSuggestEvent> = CppSuggestEvent$Runtime as unknown as MessageType<CppSuggestEvent>;
(CppSuggestEvent as MutableMessageType<CppSuggestEvent>).runtime = proto3;
(CppSuggestEvent as MutableMessageType<CppSuggestEvent>).typeName = "aiserver.v1.CppSuggestEvent";
(CppSuggestEvent as MutableMessageType<CppSuggestEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CurrentlyShownCppSuggestion },
  { no: 2, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 3, name: "recoverable_cpp_data", kind: "message", T: RecoverableCppData }
]);
var CppTriggerEvent$Runtime = (() => class _CppTriggerEvent extends Message<_CppTriggerEvent> {
  declare generationUuid: string;
  declare modelVersion: number;
  declare cursorPosition?: OneIndexedPosition;
  declare pointInTimeModel?: PointInTimeModel;
  declare source: CppSource;
  constructor(data?: PartialMessage<_CppTriggerEvent>) {
    super();
    this.generationUuid = "";
    this.modelVersion = 0;
    this.source = CppSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CppTriggerEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppTriggerEvent {
    return new _CppTriggerEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppTriggerEvent {
    return new _CppTriggerEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppTriggerEvent {
    return new _CppTriggerEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppTriggerEvent | PlainMessage<_CppTriggerEvent> | undefined | null, b2: _CppTriggerEvent | PlainMessage<_CppTriggerEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppTriggerEvent as unknown as MessageType<_CppTriggerEvent>, a, b2);
  }
})();
export type CppTriggerEvent = InstanceType<typeof CppTriggerEvent$Runtime>;
var CppTriggerEvent: MessageType<CppTriggerEvent> = CppTriggerEvent$Runtime as unknown as MessageType<CppTriggerEvent>;
(CppTriggerEvent as MutableMessageType<CppTriggerEvent>).runtime = proto3;
(CppTriggerEvent as MutableMessageType<CppTriggerEvent>).typeName = "aiserver.v1.CppTriggerEvent";
(CppTriggerEvent as MutableMessageType<CppTriggerEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "generation_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "cursor_position", kind: "message", T: OneIndexedPosition },
  { no: 4, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 5, name: "source", kind: "enum", T: proto3.getEnumType(CppSource) }
]);
var FinishedCppGenerationEvent$Runtime = (() => class _FinishedCppGenerationEvent extends Message<_FinishedCppGenerationEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare recoverableCppData?: RecoverableCppData;
  constructor(data?: PartialMessage<_FinishedCppGenerationEvent>) {
    super();
    proto3.util.initPartial(data, this as _FinishedCppGenerationEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FinishedCppGenerationEvent {
    return new _FinishedCppGenerationEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FinishedCppGenerationEvent {
    return new _FinishedCppGenerationEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FinishedCppGenerationEvent {
    return new _FinishedCppGenerationEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _FinishedCppGenerationEvent | PlainMessage<_FinishedCppGenerationEvent> | undefined | null, b2: _FinishedCppGenerationEvent | PlainMessage<_FinishedCppGenerationEvent> | undefined | null): boolean {
    return proto3.util.equals(_FinishedCppGenerationEvent as unknown as MessageType<_FinishedCppGenerationEvent>, a, b2);
  }
})();
export type FinishedCppGenerationEvent = InstanceType<typeof FinishedCppGenerationEvent$Runtime>;
var FinishedCppGenerationEvent: MessageType<FinishedCppGenerationEvent> = FinishedCppGenerationEvent$Runtime as unknown as MessageType<FinishedCppGenerationEvent>;
(FinishedCppGenerationEvent as MutableMessageType<FinishedCppGenerationEvent>).runtime = proto3;
(FinishedCppGenerationEvent as MutableMessageType<FinishedCppGenerationEvent>).typeName = "aiserver.v1.FinishedCppGenerationEvent";
(FinishedCppGenerationEvent as MutableMessageType<FinishedCppGenerationEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "recoverable_cpp_data", kind: "message", T: RecoverableCppData }
]);
var CppRejectEventNew$Runtime = (() => class _CppRejectEventNew extends Message<_CppRejectEventNew> {
  declare cppSuggestion?: CurrentlyShownCppSuggestion;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_CppRejectEventNew>) {
    super();
    proto3.util.initPartial(data, this as _CppRejectEventNew);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppRejectEventNew {
    return new _CppRejectEventNew().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppRejectEventNew {
    return new _CppRejectEventNew().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppRejectEventNew {
    return new _CppRejectEventNew().fromJsonString(jsonString, options);
  }
  static equals(a: _CppRejectEventNew | PlainMessage<_CppRejectEventNew> | undefined | null, b2: _CppRejectEventNew | PlainMessage<_CppRejectEventNew> | undefined | null): boolean {
    return proto3.util.equals(_CppRejectEventNew as unknown as MessageType<_CppRejectEventNew>, a, b2);
  }
})();
export type CppRejectEventNew = InstanceType<typeof CppRejectEventNew$Runtime>;
var CppRejectEventNew: MessageType<CppRejectEventNew> = CppRejectEventNew$Runtime as unknown as MessageType<CppRejectEventNew>;
(CppRejectEventNew as MutableMessageType<CppRejectEventNew>).runtime = proto3;
(CppRejectEventNew as MutableMessageType<CppRejectEventNew>).typeName = "aiserver.v1.CppRejectEventNew";
(CppRejectEventNew as MutableMessageType<CppRejectEventNew>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CurrentlyShownCppSuggestion },
  { no: 7, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var Edit$Runtime = (() => class _Edit extends Message<_Edit> {
  declare text: string;
  declare range?: IRange;
  constructor(data?: PartialMessage<_Edit>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _Edit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Edit {
    return new _Edit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Edit {
    return new _Edit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Edit {
    return new _Edit().fromJsonString(jsonString, options);
  }
  static equals(a: _Edit | PlainMessage<_Edit> | undefined | null, b2: _Edit | PlainMessage<_Edit> | undefined | null): boolean {
    return proto3.util.equals(_Edit as unknown as MessageType<_Edit>, a, b2);
  }
})();
export type Edit = InstanceType<typeof Edit$Runtime>;
var Edit: MessageType<Edit> = Edit$Runtime as unknown as MessageType<Edit>;
(Edit as MutableMessageType<Edit>).runtime = proto3;
(Edit as MutableMessageType<Edit>).typeName = "aiserver.v1.Edit";
(Edit as MutableMessageType<Edit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: IRange }
]);
var CppPartialAcceptEvent$Runtime = (() => class _CppPartialAcceptEvent extends Message<_CppPartialAcceptEvent> {
  declare cppSuggestion?: CurrentlyShownCppSuggestion;
  declare edit?: Edit;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_CppPartialAcceptEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppPartialAcceptEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppPartialAcceptEvent {
    return new _CppPartialAcceptEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppPartialAcceptEvent {
    return new _CppPartialAcceptEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppPartialAcceptEvent {
    return new _CppPartialAcceptEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppPartialAcceptEvent | PlainMessage<_CppPartialAcceptEvent> | undefined | null, b2: _CppPartialAcceptEvent | PlainMessage<_CppPartialAcceptEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppPartialAcceptEvent as unknown as MessageType<_CppPartialAcceptEvent>, a, b2);
  }
})();
export type CppPartialAcceptEvent = InstanceType<typeof CppPartialAcceptEvent$Runtime>;
var CppPartialAcceptEvent: MessageType<CppPartialAcceptEvent> = CppPartialAcceptEvent$Runtime as unknown as MessageType<CppPartialAcceptEvent>;
(CppPartialAcceptEvent as MutableMessageType<CppPartialAcceptEvent>).runtime = proto3;
(CppPartialAcceptEvent as MutableMessageType<CppPartialAcceptEvent>).typeName = "aiserver.v1.CppPartialAcceptEvent";
(CppPartialAcceptEvent as MutableMessageType<CppPartialAcceptEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CurrentlyShownCppSuggestion },
  { no: 2, name: "edit", kind: "message", T: Edit },
  { no: 3, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var CursorPrediction$Runtime = (() => class _CursorPrediction extends Message<_CursorPrediction> {
  declare requestId: string;
  declare predictionId: number;
  declare lineNumber: number;
  declare source: CursorPrediction_CursorPredictionSource;
  declare bindingId?: string;
  constructor(data?: PartialMessage<_CursorPrediction>) {
    super();
    this.requestId = "";
    this.predictionId = 0;
    this.lineNumber = 0;
    this.source = CursorPrediction_CursorPredictionSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CursorPrediction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorPrediction {
    return new _CursorPrediction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorPrediction {
    return new _CursorPrediction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorPrediction {
    return new _CursorPrediction().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorPrediction | PlainMessage<_CursorPrediction> | undefined | null, b2: _CursorPrediction | PlainMessage<_CursorPrediction> | undefined | null): boolean {
    return proto3.util.equals(_CursorPrediction as unknown as MessageType<_CursorPrediction>, a, b2);
  }
})();
export type CursorPrediction = InstanceType<typeof CursorPrediction$Runtime>;
var CursorPrediction: MessageType<CursorPrediction> = CursorPrediction$Runtime as unknown as MessageType<CursorPrediction>;
(CursorPrediction as MutableMessageType<CursorPrediction>).runtime = proto3;
(CursorPrediction as MutableMessageType<CursorPrediction>).typeName = "aiserver.v1.CursorPrediction";
(CursorPrediction as MutableMessageType<CursorPrediction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "prediction_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "source", kind: "enum", T: proto3.getEnumType(CursorPrediction_CursorPredictionSource) },
  { no: 5, name: "binding_id", kind: "scalar", T: 9, opt: true }
]);
(function(CursorPrediction_CursorPredictionSource2) {
  CursorPrediction_CursorPredictionSource2[CursorPrediction_CursorPredictionSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CursorPrediction_CursorPredictionSource2[CursorPrediction_CursorPredictionSource2["ALWAYS_ON"] = 1] = "ALWAYS_ON";
  CursorPrediction_CursorPredictionSource2[CursorPrediction_CursorPredictionSource2["ACCEPT"] = 2] = "ACCEPT";
  CursorPrediction_CursorPredictionSource2[CursorPrediction_CursorPredictionSource2["UNDO"] = 3] = "UNDO";
  CursorPrediction_CursorPredictionSource2[CursorPrediction_CursorPredictionSource2["EDITOR_CHANGE"] = 4] = "EDITOR_CHANGE";
})(CursorPrediction_CursorPredictionSource! || (CursorPrediction_CursorPredictionSource = {} as typeof CursorPrediction_CursorPredictionSource));
proto3.util.setEnumType(CursorPrediction_CursorPredictionSource, "aiserver.v1.CursorPrediction.CursorPredictionSource", [
  { no: 0, name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED" },
  { no: 1, name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON" },
  { no: 2, name: "CURSOR_PREDICTION_SOURCE_ACCEPT" },
  { no: 3, name: "CURSOR_PREDICTION_SOURCE_UNDO" },
  { no: 4, name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE" }
]);
var SuggestCursorPredictionEvent$Runtime = (() => class _SuggestCursorPredictionEvent extends Message<_SuggestCursorPredictionEvent> {
  declare cursorPrediction?: CursorPrediction;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_SuggestCursorPredictionEvent>) {
    super();
    proto3.util.initPartial(data, this as _SuggestCursorPredictionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SuggestCursorPredictionEvent {
    return new _SuggestCursorPredictionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SuggestCursorPredictionEvent {
    return new _SuggestCursorPredictionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SuggestCursorPredictionEvent {
    return new _SuggestCursorPredictionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _SuggestCursorPredictionEvent | PlainMessage<_SuggestCursorPredictionEvent> | undefined | null, b2: _SuggestCursorPredictionEvent | PlainMessage<_SuggestCursorPredictionEvent> | undefined | null): boolean {
    return proto3.util.equals(_SuggestCursorPredictionEvent as unknown as MessageType<_SuggestCursorPredictionEvent>, a, b2);
  }
})();
export type SuggestCursorPredictionEvent = InstanceType<typeof SuggestCursorPredictionEvent$Runtime>;
var SuggestCursorPredictionEvent: MessageType<SuggestCursorPredictionEvent> = SuggestCursorPredictionEvent$Runtime as unknown as MessageType<SuggestCursorPredictionEvent>;
(SuggestCursorPredictionEvent as MutableMessageType<SuggestCursorPredictionEvent>).runtime = proto3;
(SuggestCursorPredictionEvent as MutableMessageType<SuggestCursorPredictionEvent>).typeName = "aiserver.v1.SuggestCursorPredictionEvent";
(SuggestCursorPredictionEvent as MutableMessageType<SuggestCursorPredictionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cursor_prediction", kind: "message", T: CursorPrediction },
  { no: 2, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var AcceptCursorPredictionEvent$Runtime = (() => class _AcceptCursorPredictionEvent extends Message<_AcceptCursorPredictionEvent> {
  declare cursorPrediction?: CursorPrediction;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_AcceptCursorPredictionEvent>) {
    super();
    proto3.util.initPartial(data, this as _AcceptCursorPredictionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AcceptCursorPredictionEvent {
    return new _AcceptCursorPredictionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AcceptCursorPredictionEvent {
    return new _AcceptCursorPredictionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AcceptCursorPredictionEvent {
    return new _AcceptCursorPredictionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _AcceptCursorPredictionEvent | PlainMessage<_AcceptCursorPredictionEvent> | undefined | null, b2: _AcceptCursorPredictionEvent | PlainMessage<_AcceptCursorPredictionEvent> | undefined | null): boolean {
    return proto3.util.equals(_AcceptCursorPredictionEvent as unknown as MessageType<_AcceptCursorPredictionEvent>, a, b2);
  }
})();
export type AcceptCursorPredictionEvent = InstanceType<typeof AcceptCursorPredictionEvent$Runtime>;
var AcceptCursorPredictionEvent: MessageType<AcceptCursorPredictionEvent> = AcceptCursorPredictionEvent$Runtime as unknown as MessageType<AcceptCursorPredictionEvent>;
(AcceptCursorPredictionEvent as MutableMessageType<AcceptCursorPredictionEvent>).runtime = proto3;
(AcceptCursorPredictionEvent as MutableMessageType<AcceptCursorPredictionEvent>).typeName = "aiserver.v1.AcceptCursorPredictionEvent";
(AcceptCursorPredictionEvent as MutableMessageType<AcceptCursorPredictionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cursor_prediction", kind: "message", T: CursorPrediction },
  { no: 2, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var RejectCursorPredictionEvent$Runtime = (() => class _RejectCursorPredictionEvent extends Message<_RejectCursorPredictionEvent> {
  declare cursorPrediction?: CursorPrediction;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_RejectCursorPredictionEvent>) {
    super();
    proto3.util.initPartial(data, this as _RejectCursorPredictionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RejectCursorPredictionEvent {
    return new _RejectCursorPredictionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RejectCursorPredictionEvent {
    return new _RejectCursorPredictionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RejectCursorPredictionEvent {
    return new _RejectCursorPredictionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _RejectCursorPredictionEvent | PlainMessage<_RejectCursorPredictionEvent> | undefined | null, b2: _RejectCursorPredictionEvent | PlainMessage<_RejectCursorPredictionEvent> | undefined | null): boolean {
    return proto3.util.equals(_RejectCursorPredictionEvent as unknown as MessageType<_RejectCursorPredictionEvent>, a, b2);
  }
})();
export type RejectCursorPredictionEvent = InstanceType<typeof RejectCursorPredictionEvent$Runtime>;
var RejectCursorPredictionEvent: MessageType<RejectCursorPredictionEvent> = RejectCursorPredictionEvent$Runtime as unknown as MessageType<RejectCursorPredictionEvent>;
(RejectCursorPredictionEvent as MutableMessageType<RejectCursorPredictionEvent>).runtime = proto3;
(RejectCursorPredictionEvent as MutableMessageType<RejectCursorPredictionEvent>).typeName = "aiserver.v1.RejectCursorPredictionEvent";
(RejectCursorPredictionEvent as MutableMessageType<RejectCursorPredictionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cursor_prediction", kind: "message", T: CursorPrediction },
  { no: 2, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var MaybeDefinedPointInTimeModel$Runtime = (() => class _MaybeDefinedPointInTimeModel extends Message<_MaybeDefinedPointInTimeModel> {
  declare modelUuid?: string;
  declare modelVersion: number;
  declare relativePath: string;
  declare modelId: string;
  constructor(data?: PartialMessage<_MaybeDefinedPointInTimeModel>) {
    super();
    this.modelVersion = 0;
    this.relativePath = "";
    this.modelId = "";
    proto3.util.initPartial(data, this as _MaybeDefinedPointInTimeModel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MaybeDefinedPointInTimeModel {
    return new _MaybeDefinedPointInTimeModel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MaybeDefinedPointInTimeModel {
    return new _MaybeDefinedPointInTimeModel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MaybeDefinedPointInTimeModel {
    return new _MaybeDefinedPointInTimeModel().fromJsonString(jsonString, options);
  }
  static equals(a: _MaybeDefinedPointInTimeModel | PlainMessage<_MaybeDefinedPointInTimeModel> | undefined | null, b2: _MaybeDefinedPointInTimeModel | PlainMessage<_MaybeDefinedPointInTimeModel> | undefined | null): boolean {
    return proto3.util.equals(_MaybeDefinedPointInTimeModel as unknown as MessageType<_MaybeDefinedPointInTimeModel>, a, b2);
  }
})();
export type MaybeDefinedPointInTimeModel = InstanceType<typeof MaybeDefinedPointInTimeModel$Runtime>;
var MaybeDefinedPointInTimeModel: MessageType<MaybeDefinedPointInTimeModel> = MaybeDefinedPointInTimeModel$Runtime as unknown as MessageType<MaybeDefinedPointInTimeModel>;
(MaybeDefinedPointInTimeModel as MutableMessageType<MaybeDefinedPointInTimeModel>).runtime = proto3;
(MaybeDefinedPointInTimeModel as MutableMessageType<MaybeDefinedPointInTimeModel>).typeName = "aiserver.v1.MaybeDefinedPointInTimeModel";
(MaybeDefinedPointInTimeModel as MutableMessageType<MaybeDefinedPointInTimeModel>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model_uuid", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PointInTimeModel$Runtime = (() => class _PointInTimeModel extends Message<_PointInTimeModel> {
  declare modelUuid: string;
  declare modelVersion: number;
  declare relativePath: string;
  declare modelId: string;
  constructor(data?: PartialMessage<_PointInTimeModel>) {
    super();
    this.modelUuid = "";
    this.modelVersion = 0;
    this.relativePath = "";
    this.modelId = "";
    proto3.util.initPartial(data, this as _PointInTimeModel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PointInTimeModel {
    return new _PointInTimeModel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PointInTimeModel {
    return new _PointInTimeModel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PointInTimeModel {
    return new _PointInTimeModel().fromJsonString(jsonString, options);
  }
  static equals(a: _PointInTimeModel | PlainMessage<_PointInTimeModel> | undefined | null, b2: _PointInTimeModel | PlainMessage<_PointInTimeModel> | undefined | null): boolean {
    return proto3.util.equals(_PointInTimeModel as unknown as MessageType<_PointInTimeModel>, a, b2);
  }
})();
export type PointInTimeModel = InstanceType<typeof PointInTimeModel$Runtime>;
var PointInTimeModel: MessageType<PointInTimeModel> = PointInTimeModel$Runtime as unknown as MessageType<PointInTimeModel>;
(PointInTimeModel as MutableMessageType<PointInTimeModel>).runtime = proto3;
(PointInTimeModel as MutableMessageType<PointInTimeModel>).typeName = "aiserver.v1.PointInTimeModel";
(PointInTimeModel as MutableMessageType<PointInTimeModel>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "model_version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CppManualTriggerEventNew$Runtime = (() => class _CppManualTriggerEventNew extends Message<_CppManualTriggerEventNew> {
  declare lineNumberOneIndexed: number;
  declare columnNumberOneIndexed: number;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_CppManualTriggerEventNew>) {
    super();
    this.lineNumberOneIndexed = 0;
    this.columnNumberOneIndexed = 0;
    proto3.util.initPartial(data, this as _CppManualTriggerEventNew);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppManualTriggerEventNew {
    return new _CppManualTriggerEventNew().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppManualTriggerEventNew {
    return new _CppManualTriggerEventNew().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppManualTriggerEventNew {
    return new _CppManualTriggerEventNew().fromJsonString(jsonString, options);
  }
  static equals(a: _CppManualTriggerEventNew | PlainMessage<_CppManualTriggerEventNew> | undefined | null, b2: _CppManualTriggerEventNew | PlainMessage<_CppManualTriggerEventNew> | undefined | null): boolean {
    return proto3.util.equals(_CppManualTriggerEventNew as unknown as MessageType<_CppManualTriggerEventNew>, a, b2);
  }
})();
export type CppManualTriggerEventNew = InstanceType<typeof CppManualTriggerEventNew$Runtime>;
var CppManualTriggerEventNew: MessageType<CppManualTriggerEventNew> = CppManualTriggerEventNew$Runtime as unknown as MessageType<CppManualTriggerEventNew>;
(CppManualTriggerEventNew as MutableMessageType<CppManualTriggerEventNew>).runtime = proto3;
(CppManualTriggerEventNew as MutableMessageType<CppManualTriggerEventNew>).typeName = "aiserver.v1.CppManualTriggerEventNew";
(CppManualTriggerEventNew as MutableMessageType<CppManualTriggerEventNew>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "column_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 7, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var CppStoppedTrackingModelEvent$Runtime = (() => class _CppStoppedTrackingModelEvent extends Message<_CppStoppedTrackingModelEvent> {
  declare modelUuid: string;
  declare relativePath: string;
  declare reason: CppStoppedTrackingModelEvent_StoppedTrackingModelReason;
  constructor(data?: PartialMessage<_CppStoppedTrackingModelEvent>) {
    super();
    this.modelUuid = "";
    this.relativePath = "";
    this.reason = CppStoppedTrackingModelEvent_StoppedTrackingModelReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CppStoppedTrackingModelEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppStoppedTrackingModelEvent {
    return new _CppStoppedTrackingModelEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppStoppedTrackingModelEvent {
    return new _CppStoppedTrackingModelEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppStoppedTrackingModelEvent {
    return new _CppStoppedTrackingModelEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppStoppedTrackingModelEvent | PlainMessage<_CppStoppedTrackingModelEvent> | undefined | null, b2: _CppStoppedTrackingModelEvent | PlainMessage<_CppStoppedTrackingModelEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppStoppedTrackingModelEvent as unknown as MessageType<_CppStoppedTrackingModelEvent>, a, b2);
  }
})();
export type CppStoppedTrackingModelEvent = InstanceType<typeof CppStoppedTrackingModelEvent$Runtime>;
var CppStoppedTrackingModelEvent: MessageType<CppStoppedTrackingModelEvent> = CppStoppedTrackingModelEvent$Runtime as unknown as MessageType<CppStoppedTrackingModelEvent>;
(CppStoppedTrackingModelEvent as MutableMessageType<CppStoppedTrackingModelEvent>).runtime = proto3;
(CppStoppedTrackingModelEvent as MutableMessageType<CppStoppedTrackingModelEvent>).typeName = "aiserver.v1.CppStoppedTrackingModelEvent";
(CppStoppedTrackingModelEvent as MutableMessageType<CppStoppedTrackingModelEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "reason", kind: "enum", T: proto3.getEnumType(CppStoppedTrackingModelEvent_StoppedTrackingModelReason) }
]);
(function(CppStoppedTrackingModelEvent_StoppedTrackingModelReason2) {
  CppStoppedTrackingModelEvent_StoppedTrackingModelReason2[CppStoppedTrackingModelEvent_StoppedTrackingModelReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CppStoppedTrackingModelEvent_StoppedTrackingModelReason2[CppStoppedTrackingModelEvent_StoppedTrackingModelReason2["FILE_TOO_BIG"] = 1] = "FILE_TOO_BIG";
  CppStoppedTrackingModelEvent_StoppedTrackingModelReason2[CppStoppedTrackingModelEvent_StoppedTrackingModelReason2["FILE_DISPOSED"] = 2] = "FILE_DISPOSED";
  CppStoppedTrackingModelEvent_StoppedTrackingModelReason2[CppStoppedTrackingModelEvent_StoppedTrackingModelReason2["CHANGE_TOO_BIG"] = 3] = "CHANGE_TOO_BIG";
})(CppStoppedTrackingModelEvent_StoppedTrackingModelReason! || (CppStoppedTrackingModelEvent_StoppedTrackingModelReason = {} as typeof CppStoppedTrackingModelEvent_StoppedTrackingModelReason));
proto3.util.setEnumType(CppStoppedTrackingModelEvent_StoppedTrackingModelReason, "aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason", [
  { no: 0, name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED" },
  { no: 1, name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG" },
  { no: 2, name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED" },
  { no: 3, name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG" }
]);
var CppLinterErrorEvent$Runtime = (() => class _CppLinterErrorEvent extends Message<_CppLinterErrorEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare addedErrors: LinterError[];
  declare removedErrors: LinterError[];
  declare errors: LinterError[];
  constructor(data?: PartialMessage<_CppLinterErrorEvent>) {
    super();
    this.addedErrors = [];
    this.removedErrors = [];
    this.errors = [];
    proto3.util.initPartial(data, this as _CppLinterErrorEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppLinterErrorEvent {
    return new _CppLinterErrorEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppLinterErrorEvent {
    return new _CppLinterErrorEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppLinterErrorEvent {
    return new _CppLinterErrorEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppLinterErrorEvent | PlainMessage<_CppLinterErrorEvent> | undefined | null, b2: _CppLinterErrorEvent | PlainMessage<_CppLinterErrorEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppLinterErrorEvent as unknown as MessageType<_CppLinterErrorEvent>, a, b2);
  }
})();
export type CppLinterErrorEvent = InstanceType<typeof CppLinterErrorEvent$Runtime>;
var CppLinterErrorEvent: MessageType<CppLinterErrorEvent> = CppLinterErrorEvent$Runtime as unknown as MessageType<CppLinterErrorEvent>;
(CppLinterErrorEvent as MutableMessageType<CppLinterErrorEvent>).runtime = proto3;
(CppLinterErrorEvent as MutableMessageType<CppLinterErrorEvent>).typeName = "aiserver.v1.CppLinterErrorEvent";
(CppLinterErrorEvent as MutableMessageType<CppLinterErrorEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "added_errors", kind: "message", T: LinterError, repeated: true },
  { no: 3, name: "removed_errors", kind: "message", T: LinterError, repeated: true },
  { no: 4, name: "errors", kind: "message", T: LinterError, repeated: true }
]);
var CppDebouncedCursorMovementEvent$Runtime = (() => class _CppDebouncedCursorMovementEvent extends Message<_CppDebouncedCursorMovementEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare cursorPosition?: OneIndexedPosition;
  constructor(data?: PartialMessage<_CppDebouncedCursorMovementEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppDebouncedCursorMovementEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppDebouncedCursorMovementEvent {
    return new _CppDebouncedCursorMovementEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppDebouncedCursorMovementEvent {
    return new _CppDebouncedCursorMovementEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppDebouncedCursorMovementEvent {
    return new _CppDebouncedCursorMovementEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppDebouncedCursorMovementEvent | PlainMessage<_CppDebouncedCursorMovementEvent> | undefined | null, b2: _CppDebouncedCursorMovementEvent | PlainMessage<_CppDebouncedCursorMovementEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppDebouncedCursorMovementEvent as unknown as MessageType<_CppDebouncedCursorMovementEvent>, a, b2);
  }
})();
export type CppDebouncedCursorMovementEvent = InstanceType<typeof CppDebouncedCursorMovementEvent$Runtime>;
var CppDebouncedCursorMovementEvent: MessageType<CppDebouncedCursorMovementEvent> = CppDebouncedCursorMovementEvent$Runtime as unknown as MessageType<CppDebouncedCursorMovementEvent>;
(CppDebouncedCursorMovementEvent as MutableMessageType<CppDebouncedCursorMovementEvent>).runtime = proto3;
(CppDebouncedCursorMovementEvent as MutableMessageType<CppDebouncedCursorMovementEvent>).typeName = "aiserver.v1.CppDebouncedCursorMovementEvent";
(CppDebouncedCursorMovementEvent as MutableMessageType<CppDebouncedCursorMovementEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "cursor_position", kind: "message", T: OneIndexedPosition }
]);
var CppEditorChangedEvent$Runtime = (() => class _CppEditorChangedEvent extends Message<_CppEditorChangedEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare cursorPosition?: OneIndexedPosition;
  declare visibleRanges: IRange[];
  declare editorId: string;
  constructor(data?: PartialMessage<_CppEditorChangedEvent>) {
    super();
    this.visibleRanges = [];
    this.editorId = "";
    proto3.util.initPartial(data, this as _CppEditorChangedEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppEditorChangedEvent {
    return new _CppEditorChangedEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppEditorChangedEvent {
    return new _CppEditorChangedEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppEditorChangedEvent {
    return new _CppEditorChangedEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppEditorChangedEvent | PlainMessage<_CppEditorChangedEvent> | undefined | null, b2: _CppEditorChangedEvent | PlainMessage<_CppEditorChangedEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppEditorChangedEvent as unknown as MessageType<_CppEditorChangedEvent>, a, b2);
  }
})();
export type CppEditorChangedEvent = InstanceType<typeof CppEditorChangedEvent$Runtime>;
var CppEditorChangedEvent: MessageType<CppEditorChangedEvent> = CppEditorChangedEvent$Runtime as unknown as MessageType<CppEditorChangedEvent>;
(CppEditorChangedEvent as MutableMessageType<CppEditorChangedEvent>).runtime = proto3;
(CppEditorChangedEvent as MutableMessageType<CppEditorChangedEvent>).typeName = "aiserver.v1.CppEditorChangedEvent";
(CppEditorChangedEvent as MutableMessageType<CppEditorChangedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "cursor_position", kind: "message", T: OneIndexedPosition },
  { no: 3, name: "visible_ranges", kind: "message", T: IRange, repeated: true },
  {
    no: 4,
    name: "editor_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CppCopyEvent$Runtime = (() => class _CppCopyEvent extends Message<_CppCopyEvent> {
  declare clipboardContents: string;
  constructor(data?: PartialMessage<_CppCopyEvent>) {
    super();
    this.clipboardContents = "";
    proto3.util.initPartial(data, this as _CppCopyEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppCopyEvent {
    return new _CppCopyEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppCopyEvent {
    return new _CppCopyEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppCopyEvent {
    return new _CppCopyEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppCopyEvent | PlainMessage<_CppCopyEvent> | undefined | null, b2: _CppCopyEvent | PlainMessage<_CppCopyEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppCopyEvent as unknown as MessageType<_CppCopyEvent>, a, b2);
  }
})();
export type CppCopyEvent = InstanceType<typeof CppCopyEvent$Runtime>;
var CppCopyEvent: MessageType<CppCopyEvent> = CppCopyEvent$Runtime as unknown as MessageType<CppCopyEvent>;
(CppCopyEvent as MutableMessageType<CppCopyEvent>).runtime = proto3;
(CppCopyEvent as MutableMessageType<CppCopyEvent>).typeName = "aiserver.v1.CppCopyEvent";
(CppCopyEvent as MutableMessageType<CppCopyEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "clipboard_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CppQuickActionCommand$Runtime = (() => class _CppQuickActionCommand extends Message<_CppQuickActionCommand> {
  declare title: string;
  declare id: string;
  declare arguments: string[];
  constructor(data?: PartialMessage<_CppQuickActionCommand>) {
    super();
    this.title = "";
    this.id = "";
    this.arguments = [];
    proto3.util.initPartial(data, this as _CppQuickActionCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppQuickActionCommand {
    return new _CppQuickActionCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppQuickActionCommand {
    return new _CppQuickActionCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppQuickActionCommand {
    return new _CppQuickActionCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _CppQuickActionCommand | PlainMessage<_CppQuickActionCommand> | undefined | null, b2: _CppQuickActionCommand | PlainMessage<_CppQuickActionCommand> | undefined | null): boolean {
    return proto3.util.equals(_CppQuickActionCommand as unknown as MessageType<_CppQuickActionCommand>, a, b2);
  }
})();
export type CppQuickActionCommand = InstanceType<typeof CppQuickActionCommand$Runtime>;
var CppQuickActionCommand: MessageType<CppQuickActionCommand> = CppQuickActionCommand$Runtime as unknown as MessageType<CppQuickActionCommand>;
(CppQuickActionCommand as MutableMessageType<CppQuickActionCommand>).runtime = proto3;
(CppQuickActionCommand as MutableMessageType<CppQuickActionCommand>).typeName = "aiserver.v1.CppQuickActionCommand";
(CppQuickActionCommand as MutableMessageType<CppQuickActionCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
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
  },
  { no: 3, name: "arguments", kind: "scalar", T: 9, repeated: true }
]);
var CppQuickAction$Runtime = (() => class _CppQuickAction extends Message<_CppQuickAction> {
  declare title: string;
  declare edits: CppQuickAction_Edit[];
  declare isPreferred?: boolean;
  declare command?: CppQuickActionCommand;
  constructor(data?: PartialMessage<_CppQuickAction>) {
    super();
    this.title = "";
    this.edits = [];
    proto3.util.initPartial(data, this as _CppQuickAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppQuickAction {
    return new _CppQuickAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppQuickAction {
    return new _CppQuickAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppQuickAction {
    return new _CppQuickAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CppQuickAction | PlainMessage<_CppQuickAction> | undefined | null, b2: _CppQuickAction | PlainMessage<_CppQuickAction> | undefined | null): boolean {
    return proto3.util.equals(_CppQuickAction as unknown as MessageType<_CppQuickAction>, a, b2);
  }
})();
export type CppQuickAction = InstanceType<typeof CppQuickAction$Runtime>;
var CppQuickAction: MessageType<CppQuickAction> = CppQuickAction$Runtime as unknown as MessageType<CppQuickAction>;
(CppQuickAction as MutableMessageType<CppQuickAction>).runtime = proto3;
(CppQuickAction as MutableMessageType<CppQuickAction>).typeName = "aiserver.v1.CppQuickAction";
(CppQuickAction as MutableMessageType<CppQuickAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "edits", kind: "message", T: CppQuickAction_Edit, repeated: true },
  { no: 3, name: "is_preferred", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "command", kind: "message", T: CppQuickActionCommand }
]);
var CppQuickAction_Edit$Runtime = (() => class _CppQuickAction_Edit extends Message<_CppQuickAction_Edit> {
  declare text: string;
  declare range?: IRange;
  constructor(data?: PartialMessage<_CppQuickAction_Edit>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _CppQuickAction_Edit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppQuickAction_Edit {
    return new _CppQuickAction_Edit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppQuickAction_Edit {
    return new _CppQuickAction_Edit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppQuickAction_Edit {
    return new _CppQuickAction_Edit().fromJsonString(jsonString, options);
  }
  static equals(a: _CppQuickAction_Edit | PlainMessage<_CppQuickAction_Edit> | undefined | null, b2: _CppQuickAction_Edit | PlainMessage<_CppQuickAction_Edit> | undefined | null): boolean {
    return proto3.util.equals(_CppQuickAction_Edit as unknown as MessageType<_CppQuickAction_Edit>, a, b2);
  }
})();
export type CppQuickAction_Edit = InstanceType<typeof CppQuickAction_Edit$Runtime>;
var CppQuickAction_Edit: MessageType<CppQuickAction_Edit> = CppQuickAction_Edit$Runtime as unknown as MessageType<CppQuickAction_Edit>;
(CppQuickAction_Edit as MutableMessageType<CppQuickAction_Edit>).runtime = proto3;
(CppQuickAction_Edit as MutableMessageType<CppQuickAction_Edit>).typeName = "aiserver.v1.CppQuickAction.Edit";
(CppQuickAction_Edit as MutableMessageType<CppQuickAction_Edit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: IRange }
]);
var CppChangeQuickActionEvent$Runtime = (() => class _CppChangeQuickActionEvent extends Message<_CppChangeQuickActionEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare added: CppQuickAction[];
  declare removed: CppQuickAction[];
  declare actions: CppQuickAction[];
  constructor(data?: PartialMessage<_CppChangeQuickActionEvent>) {
    super();
    this.added = [];
    this.removed = [];
    this.actions = [];
    proto3.util.initPartial(data, this as _CppChangeQuickActionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppChangeQuickActionEvent {
    return new _CppChangeQuickActionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppChangeQuickActionEvent {
    return new _CppChangeQuickActionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppChangeQuickActionEvent {
    return new _CppChangeQuickActionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppChangeQuickActionEvent | PlainMessage<_CppChangeQuickActionEvent> | undefined | null, b2: _CppChangeQuickActionEvent | PlainMessage<_CppChangeQuickActionEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppChangeQuickActionEvent as unknown as MessageType<_CppChangeQuickActionEvent>, a, b2);
  }
})();
export type CppChangeQuickActionEvent = InstanceType<typeof CppChangeQuickActionEvent$Runtime>;
var CppChangeQuickActionEvent: MessageType<CppChangeQuickActionEvent> = CppChangeQuickActionEvent$Runtime as unknown as MessageType<CppChangeQuickActionEvent>;
(CppChangeQuickActionEvent as MutableMessageType<CppChangeQuickActionEvent>).runtime = proto3;
(CppChangeQuickActionEvent as MutableMessageType<CppChangeQuickActionEvent>).typeName = "aiserver.v1.CppChangeQuickActionEvent";
(CppChangeQuickActionEvent as MutableMessageType<CppChangeQuickActionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "added", kind: "message", T: CppQuickAction, repeated: true },
  { no: 3, name: "removed", kind: "message", T: CppQuickAction, repeated: true },
  { no: 4, name: "actions", kind: "message", T: CppQuickAction, repeated: true }
]);
var CppQuickActionFireEvent$Runtime = (() => class _CppQuickActionFireEvent extends Message<_CppQuickActionFireEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare actionIdentifier: { case: "quickActionCommand"; value: CppQuickActionCommand } | { case: "quickActionEvent"; value: CppQuickAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CppQuickActionFireEvent>) {
    super();
    this.actionIdentifier = { case: void 0 };
    proto3.util.initPartial(data, this as _CppQuickActionFireEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppQuickActionFireEvent {
    return new _CppQuickActionFireEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppQuickActionFireEvent {
    return new _CppQuickActionFireEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppQuickActionFireEvent {
    return new _CppQuickActionFireEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppQuickActionFireEvent | PlainMessage<_CppQuickActionFireEvent> | undefined | null, b2: _CppQuickActionFireEvent | PlainMessage<_CppQuickActionFireEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppQuickActionFireEvent as unknown as MessageType<_CppQuickActionFireEvent>, a, b2);
  }
})();
export type CppQuickActionFireEvent = InstanceType<typeof CppQuickActionFireEvent$Runtime>;
var CppQuickActionFireEvent: MessageType<CppQuickActionFireEvent> = CppQuickActionFireEvent$Runtime as unknown as MessageType<CppQuickActionFireEvent>;
(CppQuickActionFireEvent as MutableMessageType<CppQuickActionFireEvent>).runtime = proto3;
(CppQuickActionFireEvent as MutableMessageType<CppQuickActionFireEvent>).typeName = "aiserver.v1.CppQuickActionFireEvent";
(CppQuickActionFireEvent as MutableMessageType<CppQuickActionFireEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "quick_action_command", kind: "message", T: CppQuickActionCommand, oneof: "action_identifier" },
  { no: 3, name: "quick_action_event", kind: "message", T: CppQuickAction, oneof: "action_identifier" }
]);
var CmdKEvent$Runtime = (() => class _CmdKEvent extends Message<_CmdKEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare requestId: string;
  declare promptBarId?: string;
  declare eventType: { case: "submitPrompt"; value: CmdKEvent_SubmitPrompt } | { case: "endOfGeneration"; value: CmdKEvent_EndOfGeneration } | { case: "interruptGeneration"; value: CmdKEvent_InterruptGeneration } | { case: "acceptAll"; value: CmdKEvent_AcceptDiffs } | { case: "rejectAll"; value: CmdKEvent_RejectDiffs } | { case: "rejectPartialDiff"; value: CmdKEvent_RejectPartialDiff } | { case: "acceptPartialDiff"; value: CmdKEvent_AcceptPartialDiff } | { case: "afterReject"; value: CmdKEvent_AfterReject } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CmdKEvent>) {
    super();
    this.requestId = "";
    this.eventType = { case: void 0 };
    proto3.util.initPartial(data, this as _CmdKEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent {
    return new _CmdKEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent {
    return new _CmdKEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent {
    return new _CmdKEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent | PlainMessage<_CmdKEvent> | undefined | null, b2: _CmdKEvent | PlainMessage<_CmdKEvent> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent as unknown as MessageType<_CmdKEvent>, a, b2);
  }
})();
export type CmdKEvent = InstanceType<typeof CmdKEvent$Runtime>;
var CmdKEvent: MessageType<CmdKEvent> = CmdKEvent$Runtime as unknown as MessageType<CmdKEvent>;
(CmdKEvent as MutableMessageType<CmdKEvent>).runtime = proto3;
(CmdKEvent as MutableMessageType<CmdKEvent>).typeName = "aiserver.v1.CmdKEvent";
(CmdKEvent as MutableMessageType<CmdKEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  {
    no: 2,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 20, name: "prompt_bar_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "submit_prompt", kind: "message", T: CmdKEvent_SubmitPrompt, oneof: "event_type" },
  { no: 4, name: "end_of_generation", kind: "message", T: CmdKEvent_EndOfGeneration, oneof: "event_type" },
  { no: 5, name: "interrupt_generation", kind: "message", T: CmdKEvent_InterruptGeneration, oneof: "event_type" },
  { no: 6, name: "accept_all", kind: "message", T: CmdKEvent_AcceptDiffs, oneof: "event_type" },
  { no: 7, name: "reject_all", kind: "message", T: CmdKEvent_RejectDiffs, oneof: "event_type" },
  { no: 8, name: "reject_partial_diff", kind: "message", T: CmdKEvent_RejectPartialDiff, oneof: "event_type" },
  { no: 9, name: "accept_partial_diff", kind: "message", T: CmdKEvent_AcceptPartialDiff, oneof: "event_type" },
  { no: 10, name: "after_reject", kind: "message", T: CmdKEvent_AfterReject, oneof: "event_type" }
]);
var CmdKEvent_SubmitPrompt$Runtime = (() => class _CmdKEvent_SubmitPrompt extends Message<_CmdKEvent_SubmitPrompt> {
  declare originalRange?: IRange;
  declare originalText: string;
  declare prompt: string;
  constructor(data?: PartialMessage<_CmdKEvent_SubmitPrompt>) {
    super();
    this.originalText = "";
    this.prompt = "";
    proto3.util.initPartial(data, this as _CmdKEvent_SubmitPrompt);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_SubmitPrompt {
    return new _CmdKEvent_SubmitPrompt().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_SubmitPrompt {
    return new _CmdKEvent_SubmitPrompt().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_SubmitPrompt {
    return new _CmdKEvent_SubmitPrompt().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_SubmitPrompt | PlainMessage<_CmdKEvent_SubmitPrompt> | undefined | null, b2: _CmdKEvent_SubmitPrompt | PlainMessage<_CmdKEvent_SubmitPrompt> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_SubmitPrompt as unknown as MessageType<_CmdKEvent_SubmitPrompt>, a, b2);
  }
})();
export type CmdKEvent_SubmitPrompt = InstanceType<typeof CmdKEvent_SubmitPrompt$Runtime>;
var CmdKEvent_SubmitPrompt: MessageType<CmdKEvent_SubmitPrompt> = CmdKEvent_SubmitPrompt$Runtime as unknown as MessageType<CmdKEvent_SubmitPrompt>;
(CmdKEvent_SubmitPrompt as MutableMessageType<CmdKEvent_SubmitPrompt>).runtime = proto3;
(CmdKEvent_SubmitPrompt as MutableMessageType<CmdKEvent_SubmitPrompt>).typeName = "aiserver.v1.CmdKEvent.SubmitPrompt";
(CmdKEvent_SubmitPrompt as MutableMessageType<CmdKEvent_SubmitPrompt>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "original_range", kind: "message", T: IRange },
  {
    no: 2,
    name: "original_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CmdKEvent_EndOfGeneration$Runtime = (() => class _CmdKEvent_EndOfGeneration extends Message<_CmdKEvent_EndOfGeneration> {
  constructor(data?: PartialMessage<_CmdKEvent_EndOfGeneration>) {
    super();
    proto3.util.initPartial(data, this as _CmdKEvent_EndOfGeneration);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_EndOfGeneration {
    return new _CmdKEvent_EndOfGeneration().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_EndOfGeneration {
    return new _CmdKEvent_EndOfGeneration().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_EndOfGeneration {
    return new _CmdKEvent_EndOfGeneration().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_EndOfGeneration | PlainMessage<_CmdKEvent_EndOfGeneration> | undefined | null, b2: _CmdKEvent_EndOfGeneration | PlainMessage<_CmdKEvent_EndOfGeneration> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_EndOfGeneration as unknown as MessageType<_CmdKEvent_EndOfGeneration>, a, b2);
  }
})();
export type CmdKEvent_EndOfGeneration = InstanceType<typeof CmdKEvent_EndOfGeneration$Runtime>;
var CmdKEvent_EndOfGeneration: MessageType<CmdKEvent_EndOfGeneration> = CmdKEvent_EndOfGeneration$Runtime as unknown as MessageType<CmdKEvent_EndOfGeneration>;
(CmdKEvent_EndOfGeneration as MutableMessageType<CmdKEvent_EndOfGeneration>).runtime = proto3;
(CmdKEvent_EndOfGeneration as MutableMessageType<CmdKEvent_EndOfGeneration>).typeName = "aiserver.v1.CmdKEvent.EndOfGeneration";
(CmdKEvent_EndOfGeneration as MutableMessageType<CmdKEvent_EndOfGeneration>).fields = proto3.util.newFieldList(() => []);
var CmdKEvent_InterruptGeneration$Runtime = (() => class _CmdKEvent_InterruptGeneration extends Message<_CmdKEvent_InterruptGeneration> {
  constructor(data?: PartialMessage<_CmdKEvent_InterruptGeneration>) {
    super();
    proto3.util.initPartial(data, this as _CmdKEvent_InterruptGeneration);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_InterruptGeneration {
    return new _CmdKEvent_InterruptGeneration().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_InterruptGeneration {
    return new _CmdKEvent_InterruptGeneration().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_InterruptGeneration {
    return new _CmdKEvent_InterruptGeneration().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_InterruptGeneration | PlainMessage<_CmdKEvent_InterruptGeneration> | undefined | null, b2: _CmdKEvent_InterruptGeneration | PlainMessage<_CmdKEvent_InterruptGeneration> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_InterruptGeneration as unknown as MessageType<_CmdKEvent_InterruptGeneration>, a, b2);
  }
})();
export type CmdKEvent_InterruptGeneration = InstanceType<typeof CmdKEvent_InterruptGeneration$Runtime>;
var CmdKEvent_InterruptGeneration: MessageType<CmdKEvent_InterruptGeneration> = CmdKEvent_InterruptGeneration$Runtime as unknown as MessageType<CmdKEvent_InterruptGeneration>;
(CmdKEvent_InterruptGeneration as MutableMessageType<CmdKEvent_InterruptGeneration>).runtime = proto3;
(CmdKEvent_InterruptGeneration as MutableMessageType<CmdKEvent_InterruptGeneration>).typeName = "aiserver.v1.CmdKEvent.InterruptGeneration";
(CmdKEvent_InterruptGeneration as MutableMessageType<CmdKEvent_InterruptGeneration>).fields = proto3.util.newFieldList(() => []);
var CmdKEvent_AcceptDiffs$Runtime = (() => class _CmdKEvent_AcceptDiffs extends Message<_CmdKEvent_AcceptDiffs> {
  constructor(data?: PartialMessage<_CmdKEvent_AcceptDiffs>) {
    super();
    proto3.util.initPartial(data, this as _CmdKEvent_AcceptDiffs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_AcceptDiffs {
    return new _CmdKEvent_AcceptDiffs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_AcceptDiffs {
    return new _CmdKEvent_AcceptDiffs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_AcceptDiffs {
    return new _CmdKEvent_AcceptDiffs().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_AcceptDiffs | PlainMessage<_CmdKEvent_AcceptDiffs> | undefined | null, b2: _CmdKEvent_AcceptDiffs | PlainMessage<_CmdKEvent_AcceptDiffs> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_AcceptDiffs as unknown as MessageType<_CmdKEvent_AcceptDiffs>, a, b2);
  }
})();
export type CmdKEvent_AcceptDiffs = InstanceType<typeof CmdKEvent_AcceptDiffs$Runtime>;
var CmdKEvent_AcceptDiffs: MessageType<CmdKEvent_AcceptDiffs> = CmdKEvent_AcceptDiffs$Runtime as unknown as MessageType<CmdKEvent_AcceptDiffs>;
(CmdKEvent_AcceptDiffs as MutableMessageType<CmdKEvent_AcceptDiffs>).runtime = proto3;
(CmdKEvent_AcceptDiffs as MutableMessageType<CmdKEvent_AcceptDiffs>).typeName = "aiserver.v1.CmdKEvent.AcceptDiffs";
(CmdKEvent_AcceptDiffs as MutableMessageType<CmdKEvent_AcceptDiffs>).fields = proto3.util.newFieldList(() => []);
var CmdKEvent_RejectDiffs$Runtime = (() => class _CmdKEvent_RejectDiffs extends Message<_CmdKEvent_RejectDiffs> {
  declare actorRequestId?: string;
  declare silent?: boolean;
  constructor(data?: PartialMessage<_CmdKEvent_RejectDiffs>) {
    super();
    proto3.util.initPartial(data, this as _CmdKEvent_RejectDiffs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_RejectDiffs {
    return new _CmdKEvent_RejectDiffs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_RejectDiffs {
    return new _CmdKEvent_RejectDiffs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_RejectDiffs {
    return new _CmdKEvent_RejectDiffs().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_RejectDiffs | PlainMessage<_CmdKEvent_RejectDiffs> | undefined | null, b2: _CmdKEvent_RejectDiffs | PlainMessage<_CmdKEvent_RejectDiffs> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_RejectDiffs as unknown as MessageType<_CmdKEvent_RejectDiffs>, a, b2);
  }
})();
export type CmdKEvent_RejectDiffs = InstanceType<typeof CmdKEvent_RejectDiffs$Runtime>;
var CmdKEvent_RejectDiffs: MessageType<CmdKEvent_RejectDiffs> = CmdKEvent_RejectDiffs$Runtime as unknown as MessageType<CmdKEvent_RejectDiffs>;
(CmdKEvent_RejectDiffs as MutableMessageType<CmdKEvent_RejectDiffs>).runtime = proto3;
(CmdKEvent_RejectDiffs as MutableMessageType<CmdKEvent_RejectDiffs>).typeName = "aiserver.v1.CmdKEvent.RejectDiffs";
(CmdKEvent_RejectDiffs as MutableMessageType<CmdKEvent_RejectDiffs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "actor_request_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "silent", kind: "scalar", T: 8, opt: true }
]);
var CmdKEvent_AcceptPartialDiff$Runtime = (() => class _CmdKEvent_AcceptPartialDiff extends Message<_CmdKEvent_AcceptPartialDiff> {
  declare greenRange?: IRange;
  declare greenLines: string[];
  declare redLines: string[];
  constructor(data?: PartialMessage<_CmdKEvent_AcceptPartialDiff>) {
    super();
    this.greenLines = [];
    this.redLines = [];
    proto3.util.initPartial(data, this as _CmdKEvent_AcceptPartialDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_AcceptPartialDiff {
    return new _CmdKEvent_AcceptPartialDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_AcceptPartialDiff {
    return new _CmdKEvent_AcceptPartialDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_AcceptPartialDiff {
    return new _CmdKEvent_AcceptPartialDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_AcceptPartialDiff | PlainMessage<_CmdKEvent_AcceptPartialDiff> | undefined | null, b2: _CmdKEvent_AcceptPartialDiff | PlainMessage<_CmdKEvent_AcceptPartialDiff> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_AcceptPartialDiff as unknown as MessageType<_CmdKEvent_AcceptPartialDiff>, a, b2);
  }
})();
export type CmdKEvent_AcceptPartialDiff = InstanceType<typeof CmdKEvent_AcceptPartialDiff$Runtime>;
var CmdKEvent_AcceptPartialDiff: MessageType<CmdKEvent_AcceptPartialDiff> = CmdKEvent_AcceptPartialDiff$Runtime as unknown as MessageType<CmdKEvent_AcceptPartialDiff>;
(CmdKEvent_AcceptPartialDiff as MutableMessageType<CmdKEvent_AcceptPartialDiff>).runtime = proto3;
(CmdKEvent_AcceptPartialDiff as MutableMessageType<CmdKEvent_AcceptPartialDiff>).typeName = "aiserver.v1.CmdKEvent.AcceptPartialDiff";
(CmdKEvent_AcceptPartialDiff as MutableMessageType<CmdKEvent_AcceptPartialDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "green_range", kind: "message", T: IRange },
  { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }
]);
var CmdKEvent_RejectPartialDiff$Runtime = (() => class _CmdKEvent_RejectPartialDiff extends Message<_CmdKEvent_RejectPartialDiff> {
  declare greenRange?: IRange;
  declare greenLines: string[];
  declare redLines: string[];
  constructor(data?: PartialMessage<_CmdKEvent_RejectPartialDiff>) {
    super();
    this.greenLines = [];
    this.redLines = [];
    proto3.util.initPartial(data, this as _CmdKEvent_RejectPartialDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_RejectPartialDiff {
    return new _CmdKEvent_RejectPartialDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_RejectPartialDiff {
    return new _CmdKEvent_RejectPartialDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_RejectPartialDiff {
    return new _CmdKEvent_RejectPartialDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_RejectPartialDiff | PlainMessage<_CmdKEvent_RejectPartialDiff> | undefined | null, b2: _CmdKEvent_RejectPartialDiff | PlainMessage<_CmdKEvent_RejectPartialDiff> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_RejectPartialDiff as unknown as MessageType<_CmdKEvent_RejectPartialDiff>, a, b2);
  }
})();
export type CmdKEvent_RejectPartialDiff = InstanceType<typeof CmdKEvent_RejectPartialDiff$Runtime>;
var CmdKEvent_RejectPartialDiff: MessageType<CmdKEvent_RejectPartialDiff> = CmdKEvent_RejectPartialDiff$Runtime as unknown as MessageType<CmdKEvent_RejectPartialDiff>;
(CmdKEvent_RejectPartialDiff as MutableMessageType<CmdKEvent_RejectPartialDiff>).runtime = proto3;
(CmdKEvent_RejectPartialDiff as MutableMessageType<CmdKEvent_RejectPartialDiff>).typeName = "aiserver.v1.CmdKEvent.RejectPartialDiff";
(CmdKEvent_RejectPartialDiff as MutableMessageType<CmdKEvent_RejectPartialDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "green_range", kind: "message", T: IRange },
  { no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: true }
]);
var CmdKEvent_AfterReject$Runtime = (() => class _CmdKEvent_AfterReject extends Message<_CmdKEvent_AfterReject> {
  constructor(data?: PartialMessage<_CmdKEvent_AfterReject>) {
    super();
    proto3.util.initPartial(data, this as _CmdKEvent_AfterReject);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKEvent_AfterReject {
    return new _CmdKEvent_AfterReject().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKEvent_AfterReject {
    return new _CmdKEvent_AfterReject().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKEvent_AfterReject {
    return new _CmdKEvent_AfterReject().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKEvent_AfterReject | PlainMessage<_CmdKEvent_AfterReject> | undefined | null, b2: _CmdKEvent_AfterReject | PlainMessage<_CmdKEvent_AfterReject> | undefined | null): boolean {
    return proto3.util.equals(_CmdKEvent_AfterReject as unknown as MessageType<_CmdKEvent_AfterReject>, a, b2);
  }
})();
export type CmdKEvent_AfterReject = InstanceType<typeof CmdKEvent_AfterReject$Runtime>;
var CmdKEvent_AfterReject: MessageType<CmdKEvent_AfterReject> = CmdKEvent_AfterReject$Runtime as unknown as MessageType<CmdKEvent_AfterReject>;
(CmdKEvent_AfterReject as MutableMessageType<CmdKEvent_AfterReject>).runtime = proto3;
(CmdKEvent_AfterReject as MutableMessageType<CmdKEvent_AfterReject>).typeName = "aiserver.v1.CmdKEvent.AfterReject";
(CmdKEvent_AfterReject as MutableMessageType<CmdKEvent_AfterReject>).fields = proto3.util.newFieldList(() => []);
var ChatEvent$Runtime = (() => class _ChatEvent extends Message<_ChatEvent> {
  declare requestId: string;
  declare eventType: { case: "submitPrompt"; value: ChatEvent_SubmitPrompt } | { case: "endOfAnyGeneration"; value: ChatEvent_EndOfAnyGeneration } | { case: "endOfUninterruptedGeneration"; value: ChatEvent_EndOfUninterruptedGeneration } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ChatEvent>) {
    super();
    this.requestId = "";
    this.eventType = { case: void 0 };
    proto3.util.initPartial(data, this as _ChatEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatEvent {
    return new _ChatEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatEvent {
    return new _ChatEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatEvent {
    return new _ChatEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatEvent | PlainMessage<_ChatEvent> | undefined | null, b2: _ChatEvent | PlainMessage<_ChatEvent> | undefined | null): boolean {
    return proto3.util.equals(_ChatEvent as unknown as MessageType<_ChatEvent>, a, b2);
  }
})();
export type ChatEvent = InstanceType<typeof ChatEvent$Runtime>;
var ChatEvent: MessageType<ChatEvent> = ChatEvent$Runtime as unknown as MessageType<ChatEvent>;
(ChatEvent as MutableMessageType<ChatEvent>).runtime = proto3;
(ChatEvent as MutableMessageType<ChatEvent>).typeName = "aiserver.v1.ChatEvent";
(ChatEvent as MutableMessageType<ChatEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "submit_prompt", kind: "message", T: ChatEvent_SubmitPrompt, oneof: "event_type" },
  { no: 3, name: "end_of_any_generation", kind: "message", T: ChatEvent_EndOfAnyGeneration, oneof: "event_type" },
  { no: 4, name: "end_of_uninterrupted_generation", kind: "message", T: ChatEvent_EndOfUninterruptedGeneration, oneof: "event_type" }
]);
var ChatEvent_SubmitPrompt$Runtime = (() => class _ChatEvent_SubmitPrompt extends Message<_ChatEvent_SubmitPrompt> {
  declare prompt: string;
  constructor(data?: PartialMessage<_ChatEvent_SubmitPrompt>) {
    super();
    this.prompt = "";
    proto3.util.initPartial(data, this as _ChatEvent_SubmitPrompt);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatEvent_SubmitPrompt {
    return new _ChatEvent_SubmitPrompt().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatEvent_SubmitPrompt {
    return new _ChatEvent_SubmitPrompt().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatEvent_SubmitPrompt {
    return new _ChatEvent_SubmitPrompt().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatEvent_SubmitPrompt | PlainMessage<_ChatEvent_SubmitPrompt> | undefined | null, b2: _ChatEvent_SubmitPrompt | PlainMessage<_ChatEvent_SubmitPrompt> | undefined | null): boolean {
    return proto3.util.equals(_ChatEvent_SubmitPrompt as unknown as MessageType<_ChatEvent_SubmitPrompt>, a, b2);
  }
})();
export type ChatEvent_SubmitPrompt = InstanceType<typeof ChatEvent_SubmitPrompt$Runtime>;
var ChatEvent_SubmitPrompt: MessageType<ChatEvent_SubmitPrompt> = ChatEvent_SubmitPrompt$Runtime as unknown as MessageType<ChatEvent_SubmitPrompt>;
(ChatEvent_SubmitPrompt as MutableMessageType<ChatEvent_SubmitPrompt>).runtime = proto3;
(ChatEvent_SubmitPrompt as MutableMessageType<ChatEvent_SubmitPrompt>).typeName = "aiserver.v1.ChatEvent.SubmitPrompt";
(ChatEvent_SubmitPrompt as MutableMessageType<ChatEvent_SubmitPrompt>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ChatEvent_EndOfAnyGeneration$Runtime = (() => class _ChatEvent_EndOfAnyGeneration extends Message<_ChatEvent_EndOfAnyGeneration> {
  constructor(data?: PartialMessage<_ChatEvent_EndOfAnyGeneration>) {
    super();
    proto3.util.initPartial(data, this as _ChatEvent_EndOfAnyGeneration);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatEvent_EndOfAnyGeneration {
    return new _ChatEvent_EndOfAnyGeneration().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatEvent_EndOfAnyGeneration {
    return new _ChatEvent_EndOfAnyGeneration().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatEvent_EndOfAnyGeneration {
    return new _ChatEvent_EndOfAnyGeneration().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatEvent_EndOfAnyGeneration | PlainMessage<_ChatEvent_EndOfAnyGeneration> | undefined | null, b2: _ChatEvent_EndOfAnyGeneration | PlainMessage<_ChatEvent_EndOfAnyGeneration> | undefined | null): boolean {
    return proto3.util.equals(_ChatEvent_EndOfAnyGeneration as unknown as MessageType<_ChatEvent_EndOfAnyGeneration>, a, b2);
  }
})();
export type ChatEvent_EndOfAnyGeneration = InstanceType<typeof ChatEvent_EndOfAnyGeneration$Runtime>;
var ChatEvent_EndOfAnyGeneration: MessageType<ChatEvent_EndOfAnyGeneration> = ChatEvent_EndOfAnyGeneration$Runtime as unknown as MessageType<ChatEvent_EndOfAnyGeneration>;
(ChatEvent_EndOfAnyGeneration as MutableMessageType<ChatEvent_EndOfAnyGeneration>).runtime = proto3;
(ChatEvent_EndOfAnyGeneration as MutableMessageType<ChatEvent_EndOfAnyGeneration>).typeName = "aiserver.v1.ChatEvent.EndOfAnyGeneration";
(ChatEvent_EndOfAnyGeneration as MutableMessageType<ChatEvent_EndOfAnyGeneration>).fields = proto3.util.newFieldList(() => []);
var ChatEvent_EndOfUninterruptedGeneration$Runtime = (() => class _ChatEvent_EndOfUninterruptedGeneration extends Message<_ChatEvent_EndOfUninterruptedGeneration> {
  constructor(data?: PartialMessage<_ChatEvent_EndOfUninterruptedGeneration>) {
    super();
    proto3.util.initPartial(data, this as _ChatEvent_EndOfUninterruptedGeneration);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatEvent_EndOfUninterruptedGeneration {
    return new _ChatEvent_EndOfUninterruptedGeneration().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatEvent_EndOfUninterruptedGeneration {
    return new _ChatEvent_EndOfUninterruptedGeneration().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatEvent_EndOfUninterruptedGeneration {
    return new _ChatEvent_EndOfUninterruptedGeneration().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatEvent_EndOfUninterruptedGeneration | PlainMessage<_ChatEvent_EndOfUninterruptedGeneration> | undefined | null, b2: _ChatEvent_EndOfUninterruptedGeneration | PlainMessage<_ChatEvent_EndOfUninterruptedGeneration> | undefined | null): boolean {
    return proto3.util.equals(_ChatEvent_EndOfUninterruptedGeneration as unknown as MessageType<_ChatEvent_EndOfUninterruptedGeneration>, a, b2);
  }
})();
export type ChatEvent_EndOfUninterruptedGeneration = InstanceType<typeof ChatEvent_EndOfUninterruptedGeneration$Runtime>;
var ChatEvent_EndOfUninterruptedGeneration: MessageType<ChatEvent_EndOfUninterruptedGeneration> = ChatEvent_EndOfUninterruptedGeneration$Runtime as unknown as MessageType<ChatEvent_EndOfUninterruptedGeneration>;
(ChatEvent_EndOfUninterruptedGeneration as MutableMessageType<ChatEvent_EndOfUninterruptedGeneration>).runtime = proto3;
(ChatEvent_EndOfUninterruptedGeneration as MutableMessageType<ChatEvent_EndOfUninterruptedGeneration>).typeName = "aiserver.v1.ChatEvent.EndOfUninterruptedGeneration";
(ChatEvent_EndOfUninterruptedGeneration as MutableMessageType<ChatEvent_EndOfUninterruptedGeneration>).fields = proto3.util.newFieldList(() => []);
var BugBotLinterEvent$Runtime = (() => class _BugBotLinterEvent extends Message<_BugBotLinterEvent> {
  declare requestId: string;
  declare pointInTimeModel?: PointInTimeModel;
  declare eventType: { case: "lintGenerated"; value: BugBotLinterEvent_LintGenerated } | { case: "lintDismissed"; value: BugBotLinterEvent_LintDismissed } | { case: "userFeedback"; value: BugBotLinterEvent_UserFeedback } | { case: "viewedReport"; value: BugBotLinterEvent_ViewedReport } | { case: "unviewedReport"; value: BugBotLinterEvent_UnviewedReport } | { case: "started"; value: BugBotLinterEvent_Started } | { case: "notShownBecauseHeuristic"; value: BugBotLinterEvent_NotShownBecauseHeuristic } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BugBotLinterEvent>) {
    super();
    this.requestId = "";
    this.eventType = { case: void 0 };
    proto3.util.initPartial(data, this as _BugBotLinterEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent {
    return new _BugBotLinterEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent {
    return new _BugBotLinterEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent {
    return new _BugBotLinterEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent | PlainMessage<_BugBotLinterEvent> | undefined | null, b2: _BugBotLinterEvent | PlainMessage<_BugBotLinterEvent> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent as unknown as MessageType<_BugBotLinterEvent>, a, b2);
  }
})();
export type BugBotLinterEvent = InstanceType<typeof BugBotLinterEvent$Runtime>;
var BugBotLinterEvent: MessageType<BugBotLinterEvent> = BugBotLinterEvent$Runtime as unknown as MessageType<BugBotLinterEvent>;
(BugBotLinterEvent as MutableMessageType<BugBotLinterEvent>).runtime = proto3;
(BugBotLinterEvent as MutableMessageType<BugBotLinterEvent>).typeName = "aiserver.v1.BugBotLinterEvent";
(BugBotLinterEvent as MutableMessageType<BugBotLinterEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 3, name: "lint_generated", kind: "message", T: BugBotLinterEvent_LintGenerated, oneof: "event_type" },
  { no: 4, name: "lint_dismissed", kind: "message", T: BugBotLinterEvent_LintDismissed, oneof: "event_type" },
  { no: 5, name: "user_feedback", kind: "message", T: BugBotLinterEvent_UserFeedback, oneof: "event_type" },
  { no: 6, name: "viewed_report", kind: "message", T: BugBotLinterEvent_ViewedReport, oneof: "event_type" },
  { no: 7, name: "unviewed_report", kind: "message", T: BugBotLinterEvent_UnviewedReport, oneof: "event_type" },
  { no: 8, name: "started", kind: "message", T: BugBotLinterEvent_Started, oneof: "event_type" },
  { no: 9, name: "not_shown_because_heuristic", kind: "message", T: BugBotLinterEvent_NotShownBecauseHeuristic, oneof: "event_type" }
]);
var BugBotLinterEvent_Started$Runtime = (() => class _BugBotLinterEvent_Started extends Message<_BugBotLinterEvent_Started> {
  constructor(data?: PartialMessage<_BugBotLinterEvent_Started>) {
    super();
    proto3.util.initPartial(data, this as _BugBotLinterEvent_Started);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_Started {
    return new _BugBotLinterEvent_Started().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_Started {
    return new _BugBotLinterEvent_Started().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_Started {
    return new _BugBotLinterEvent_Started().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_Started | PlainMessage<_BugBotLinterEvent_Started> | undefined | null, b2: _BugBotLinterEvent_Started | PlainMessage<_BugBotLinterEvent_Started> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_Started as unknown as MessageType<_BugBotLinterEvent_Started>, a, b2);
  }
})();
export type BugBotLinterEvent_Started = InstanceType<typeof BugBotLinterEvent_Started$Runtime>;
var BugBotLinterEvent_Started: MessageType<BugBotLinterEvent_Started> = BugBotLinterEvent_Started$Runtime as unknown as MessageType<BugBotLinterEvent_Started>;
(BugBotLinterEvent_Started as MutableMessageType<BugBotLinterEvent_Started>).runtime = proto3;
(BugBotLinterEvent_Started as MutableMessageType<BugBotLinterEvent_Started>).typeName = "aiserver.v1.BugBotLinterEvent.Started";
(BugBotLinterEvent_Started as MutableMessageType<BugBotLinterEvent_Started>).fields = proto3.util.newFieldList(() => []);
var BugBotLinterEvent_LintGenerated$Runtime = (() => class _BugBotLinterEvent_LintGenerated extends Message<_BugBotLinterEvent_LintGenerated> {
  declare bugReport?: BugReport;
  constructor(data?: PartialMessage<_BugBotLinterEvent_LintGenerated>) {
    super();
    proto3.util.initPartial(data, this as _BugBotLinterEvent_LintGenerated);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_LintGenerated {
    return new _BugBotLinterEvent_LintGenerated().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_LintGenerated {
    return new _BugBotLinterEvent_LintGenerated().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_LintGenerated {
    return new _BugBotLinterEvent_LintGenerated().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_LintGenerated | PlainMessage<_BugBotLinterEvent_LintGenerated> | undefined | null, b2: _BugBotLinterEvent_LintGenerated | PlainMessage<_BugBotLinterEvent_LintGenerated> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_LintGenerated as unknown as MessageType<_BugBotLinterEvent_LintGenerated>, a, b2);
  }
})();
export type BugBotLinterEvent_LintGenerated = InstanceType<typeof BugBotLinterEvent_LintGenerated$Runtime>;
var BugBotLinterEvent_LintGenerated: MessageType<BugBotLinterEvent_LintGenerated> = BugBotLinterEvent_LintGenerated$Runtime as unknown as MessageType<BugBotLinterEvent_LintGenerated>;
(BugBotLinterEvent_LintGenerated as MutableMessageType<BugBotLinterEvent_LintGenerated>).runtime = proto3;
(BugBotLinterEvent_LintGenerated as MutableMessageType<BugBotLinterEvent_LintGenerated>).typeName = "aiserver.v1.BugBotLinterEvent.LintGenerated";
(BugBotLinterEvent_LintGenerated as MutableMessageType<BugBotLinterEvent_LintGenerated>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_report", kind: "message", T: BugReport }
]);
var BugBotLinterEvent_LintDismissed$Runtime = (() => class _BugBotLinterEvent_LintDismissed extends Message<_BugBotLinterEvent_LintDismissed> {
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotLinterEvent_LintDismissed>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotLinterEvent_LintDismissed);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_LintDismissed {
    return new _BugBotLinterEvent_LintDismissed().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_LintDismissed {
    return new _BugBotLinterEvent_LintDismissed().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_LintDismissed {
    return new _BugBotLinterEvent_LintDismissed().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_LintDismissed | PlainMessage<_BugBotLinterEvent_LintDismissed> | undefined | null, b2: _BugBotLinterEvent_LintDismissed | PlainMessage<_BugBotLinterEvent_LintDismissed> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_LintDismissed as unknown as MessageType<_BugBotLinterEvent_LintDismissed>, a, b2);
  }
})();
export type BugBotLinterEvent_LintDismissed = InstanceType<typeof BugBotLinterEvent_LintDismissed$Runtime>;
var BugBotLinterEvent_LintDismissed: MessageType<BugBotLinterEvent_LintDismissed> = BugBotLinterEvent_LintDismissed$Runtime as unknown as MessageType<BugBotLinterEvent_LintDismissed>;
(BugBotLinterEvent_LintDismissed as MutableMessageType<BugBotLinterEvent_LintDismissed>).runtime = proto3;
(BugBotLinterEvent_LintDismissed as MutableMessageType<BugBotLinterEvent_LintDismissed>).typeName = "aiserver.v1.BugBotLinterEvent.LintDismissed";
(BugBotLinterEvent_LintDismissed as MutableMessageType<BugBotLinterEvent_LintDismissed>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotLinterEvent_UserFeedback$Runtime = (() => class _BugBotLinterEvent_UserFeedback extends Message<_BugBotLinterEvent_UserFeedback> {
  declare bugReportId: string;
  declare feedback: string;
  constructor(data?: PartialMessage<_BugBotLinterEvent_UserFeedback>) {
    super();
    this.bugReportId = "";
    this.feedback = "";
    proto3.util.initPartial(data, this as _BugBotLinterEvent_UserFeedback);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_UserFeedback {
    return new _BugBotLinterEvent_UserFeedback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_UserFeedback {
    return new _BugBotLinterEvent_UserFeedback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_UserFeedback {
    return new _BugBotLinterEvent_UserFeedback().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_UserFeedback | PlainMessage<_BugBotLinterEvent_UserFeedback> | undefined | null, b2: _BugBotLinterEvent_UserFeedback | PlainMessage<_BugBotLinterEvent_UserFeedback> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_UserFeedback as unknown as MessageType<_BugBotLinterEvent_UserFeedback>, a, b2);
  }
})();
export type BugBotLinterEvent_UserFeedback = InstanceType<typeof BugBotLinterEvent_UserFeedback$Runtime>;
var BugBotLinterEvent_UserFeedback: MessageType<BugBotLinterEvent_UserFeedback> = BugBotLinterEvent_UserFeedback$Runtime as unknown as MessageType<BugBotLinterEvent_UserFeedback>;
(BugBotLinterEvent_UserFeedback as MutableMessageType<BugBotLinterEvent_UserFeedback>).runtime = proto3;
(BugBotLinterEvent_UserFeedback as MutableMessageType<BugBotLinterEvent_UserFeedback>).typeName = "aiserver.v1.BugBotLinterEvent.UserFeedback";
(BugBotLinterEvent_UserFeedback as MutableMessageType<BugBotLinterEvent_UserFeedback>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "feedback",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotLinterEvent_ViewedReport$Runtime = (() => class _BugBotLinterEvent_ViewedReport extends Message<_BugBotLinterEvent_ViewedReport> {
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotLinterEvent_ViewedReport>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotLinterEvent_ViewedReport);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_ViewedReport {
    return new _BugBotLinterEvent_ViewedReport().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_ViewedReport {
    return new _BugBotLinterEvent_ViewedReport().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_ViewedReport {
    return new _BugBotLinterEvent_ViewedReport().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_ViewedReport | PlainMessage<_BugBotLinterEvent_ViewedReport> | undefined | null, b2: _BugBotLinterEvent_ViewedReport | PlainMessage<_BugBotLinterEvent_ViewedReport> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_ViewedReport as unknown as MessageType<_BugBotLinterEvent_ViewedReport>, a, b2);
  }
})();
export type BugBotLinterEvent_ViewedReport = InstanceType<typeof BugBotLinterEvent_ViewedReport$Runtime>;
var BugBotLinterEvent_ViewedReport: MessageType<BugBotLinterEvent_ViewedReport> = BugBotLinterEvent_ViewedReport$Runtime as unknown as MessageType<BugBotLinterEvent_ViewedReport>;
(BugBotLinterEvent_ViewedReport as MutableMessageType<BugBotLinterEvent_ViewedReport>).runtime = proto3;
(BugBotLinterEvent_ViewedReport as MutableMessageType<BugBotLinterEvent_ViewedReport>).typeName = "aiserver.v1.BugBotLinterEvent.ViewedReport";
(BugBotLinterEvent_ViewedReport as MutableMessageType<BugBotLinterEvent_ViewedReport>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotLinterEvent_UnviewedReport$Runtime = (() => class _BugBotLinterEvent_UnviewedReport extends Message<_BugBotLinterEvent_UnviewedReport> {
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotLinterEvent_UnviewedReport>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotLinterEvent_UnviewedReport);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_UnviewedReport {
    return new _BugBotLinterEvent_UnviewedReport().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_UnviewedReport {
    return new _BugBotLinterEvent_UnviewedReport().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_UnviewedReport {
    return new _BugBotLinterEvent_UnviewedReport().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_UnviewedReport | PlainMessage<_BugBotLinterEvent_UnviewedReport> | undefined | null, b2: _BugBotLinterEvent_UnviewedReport | PlainMessage<_BugBotLinterEvent_UnviewedReport> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_UnviewedReport as unknown as MessageType<_BugBotLinterEvent_UnviewedReport>, a, b2);
  }
})();
export type BugBotLinterEvent_UnviewedReport = InstanceType<typeof BugBotLinterEvent_UnviewedReport$Runtime>;
var BugBotLinterEvent_UnviewedReport: MessageType<BugBotLinterEvent_UnviewedReport> = BugBotLinterEvent_UnviewedReport$Runtime as unknown as MessageType<BugBotLinterEvent_UnviewedReport>;
(BugBotLinterEvent_UnviewedReport as MutableMessageType<BugBotLinterEvent_UnviewedReport>).runtime = proto3;
(BugBotLinterEvent_UnviewedReport as MutableMessageType<BugBotLinterEvent_UnviewedReport>).typeName = "aiserver.v1.BugBotLinterEvent.UnviewedReport";
(BugBotLinterEvent_UnviewedReport as MutableMessageType<BugBotLinterEvent_UnviewedReport>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotLinterEvent_NotShownBecauseHeuristic$Runtime = (() => class _BugBotLinterEvent_NotShownBecauseHeuristic extends Message<_BugBotLinterEvent_NotShownBecauseHeuristic> {
  declare heuristic: BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic;
  constructor(data?: PartialMessage<_BugBotLinterEvent_NotShownBecauseHeuristic>) {
    super();
    this.heuristic = BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic.UNSPECIFIED;
    proto3.util.initPartial(data, this as _BugBotLinterEvent_NotShownBecauseHeuristic);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotLinterEvent_NotShownBecauseHeuristic {
    return new _BugBotLinterEvent_NotShownBecauseHeuristic().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_NotShownBecauseHeuristic {
    return new _BugBotLinterEvent_NotShownBecauseHeuristic().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotLinterEvent_NotShownBecauseHeuristic {
    return new _BugBotLinterEvent_NotShownBecauseHeuristic().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotLinterEvent_NotShownBecauseHeuristic | PlainMessage<_BugBotLinterEvent_NotShownBecauseHeuristic> | undefined | null, b2: _BugBotLinterEvent_NotShownBecauseHeuristic | PlainMessage<_BugBotLinterEvent_NotShownBecauseHeuristic> | undefined | null): boolean {
    return proto3.util.equals(_BugBotLinterEvent_NotShownBecauseHeuristic as unknown as MessageType<_BugBotLinterEvent_NotShownBecauseHeuristic>, a, b2);
  }
})();
export type BugBotLinterEvent_NotShownBecauseHeuristic = InstanceType<typeof BugBotLinterEvent_NotShownBecauseHeuristic$Runtime>;
var BugBotLinterEvent_NotShownBecauseHeuristic: MessageType<BugBotLinterEvent_NotShownBecauseHeuristic> = BugBotLinterEvent_NotShownBecauseHeuristic$Runtime as unknown as MessageType<BugBotLinterEvent_NotShownBecauseHeuristic>;
(BugBotLinterEvent_NotShownBecauseHeuristic as MutableMessageType<BugBotLinterEvent_NotShownBecauseHeuristic>).runtime = proto3;
(BugBotLinterEvent_NotShownBecauseHeuristic as MutableMessageType<BugBotLinterEvent_NotShownBecauseHeuristic>).typeName = "aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic";
(BugBotLinterEvent_NotShownBecauseHeuristic as MutableMessageType<BugBotLinterEvent_NotShownBecauseHeuristic>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "heuristic", kind: "enum", T: proto3.getEnumType(BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic) }
]);
(function(BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2) {
  BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2[BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2[BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2["LINT_OVERLAP"] = 1] = "LINT_OVERLAP";
  BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2[BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic2["LINES_MISMATCH"] = 2] = "LINES_MISMATCH";
})(BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic! || (BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic = {} as typeof BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic));
proto3.util.setEnumType(BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic, "aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic", [
  { no: 0, name: "HEURISTIC_UNSPECIFIED" },
  { no: 1, name: "HEURISTIC_LINT_OVERLAP" },
  { no: 2, name: "HEURISTIC_LINES_MISMATCH" }
]);
var BugBotEvent$Runtime = (() => class _BugBotEvent extends Message<_BugBotEvent> {
  declare requestId: string;
  declare eventType: { case: "started"; value: BugBotEvent_Started } | { case: "reportsGenerated"; value: BugBotEvent_ReportsGenerated } | { case: "pressedFixInComposer"; value: BugBotEvent_PressedFixInComposer } | { case: "pressedOpenInEditor"; value: BugBotEvent_PressedOpenInEditor } | { case: "viewedReport"; value: BugBotEvent_ViewedReport } | { case: "userFeedback"; value: BugBotEvent_UserFeedback } | { case: "pressedAddToChat"; value: BugBotEvent_PressedAddToChat } | { case: "backgroundIntervalStarted"; value: BugBotEvent_BackgroundIntervalStarted } | { case: "backgroundIntervalEnded"; value: BugBotEvent_BackgroundIntervalEnded } | { case: "backgroundIntervalInterrupted"; value: BugBotEvent_BackgroundIntervalInterrupted } | { case: "backgroundIntervalErrored"; value: BugBotEvent_BackgroundIntervalErrored } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BugBotEvent>) {
    super();
    this.requestId = "";
    this.eventType = { case: void 0 };
    proto3.util.initPartial(data, this as _BugBotEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent {
    return new _BugBotEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent {
    return new _BugBotEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent {
    return new _BugBotEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent | PlainMessage<_BugBotEvent> | undefined | null, b2: _BugBotEvent | PlainMessage<_BugBotEvent> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent as unknown as MessageType<_BugBotEvent>, a, b2);
  }
})();
export type BugBotEvent = InstanceType<typeof BugBotEvent$Runtime>;
var BugBotEvent: MessageType<BugBotEvent> = BugBotEvent$Runtime as unknown as MessageType<BugBotEvent>;
(BugBotEvent as MutableMessageType<BugBotEvent>).runtime = proto3;
(BugBotEvent as MutableMessageType<BugBotEvent>).typeName = "aiserver.v1.BugBotEvent";
(BugBotEvent as MutableMessageType<BugBotEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "started", kind: "message", T: BugBotEvent_Started, oneof: "event_type" },
  { no: 3, name: "reports_generated", kind: "message", T: BugBotEvent_ReportsGenerated, oneof: "event_type" },
  { no: 4, name: "pressed_fix_in_composer", kind: "message", T: BugBotEvent_PressedFixInComposer, oneof: "event_type" },
  { no: 5, name: "pressed_open_in_editor", kind: "message", T: BugBotEvent_PressedOpenInEditor, oneof: "event_type" },
  { no: 6, name: "viewed_report", kind: "message", T: BugBotEvent_ViewedReport, oneof: "event_type" },
  { no: 7, name: "user_feedback", kind: "message", T: BugBotEvent_UserFeedback, oneof: "event_type" },
  { no: 8, name: "pressed_add_to_chat", kind: "message", T: BugBotEvent_PressedAddToChat, oneof: "event_type" },
  { no: 9, name: "background_interval_started", kind: "message", T: BugBotEvent_BackgroundIntervalStarted, oneof: "event_type" },
  { no: 10, name: "background_interval_ended", kind: "message", T: BugBotEvent_BackgroundIntervalEnded, oneof: "event_type" },
  { no: 11, name: "background_interval_interrupted", kind: "message", T: BugBotEvent_BackgroundIntervalInterrupted, oneof: "event_type" },
  { no: 12, name: "background_interval_errored", kind: "message", T: BugBotEvent_BackgroundIntervalErrored, oneof: "event_type" }
]);
(function(BugBotEvent_BackgroundIntervalInterruptedReason2) {
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["DISABLED"] = 1] = "DISABLED";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["TOO_RECENT"] = 2] = "TOO_RECENT";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["UNVIEWED_BUG_REPORTS"] = 3] = "UNVIEWED_BUG_REPORTS";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["NOT_IN_GIT_REPO"] = 4] = "NOT_IN_GIT_REPO";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"] = 5] = "DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["NO_GIT_USER"] = 6] = "NO_GIT_USER";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["NO_LAST_COMMIT"] = 7] = "NO_LAST_COMMIT";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["LAST_COMMIT_NOT_MADE_BY_USER"] = 8] = "LAST_COMMIT_NOT_MADE_BY_USER";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["LAST_COMMIT_TOO_OLD"] = 9] = "LAST_COMMIT_TOO_OLD";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["DIFF_TOO_LONG"] = 10] = "DIFF_TOO_LONG";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["DIFF_TOO_SHORT"] = 11] = "DIFF_TOO_SHORT";
  BugBotEvent_BackgroundIntervalInterruptedReason2[BugBotEvent_BackgroundIntervalInterruptedReason2["TELEMETRY_UNHEALTHY"] = 12] = "TELEMETRY_UNHEALTHY";
})(BugBotEvent_BackgroundIntervalInterruptedReason! || (BugBotEvent_BackgroundIntervalInterruptedReason = {} as typeof BugBotEvent_BackgroundIntervalInterruptedReason));
proto3.util.setEnumType(BugBotEvent_BackgroundIntervalInterruptedReason, "aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason", [
  { no: 0, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED" },
  { no: 1, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED" },
  { no: 2, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT" },
  { no: 3, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS" },
  { no: 4, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO" },
  { no: 5, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH" },
  { no: 6, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER" },
  { no: 7, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT" },
  { no: 8, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER" },
  { no: 9, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD" },
  { no: 10, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG" },
  { no: 11, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT" },
  { no: 12, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY" }
]);
var BugBotEvent_Started$Runtime = (() => class _BugBotEvent_Started extends Message<_BugBotEvent_Started> {
  constructor(data?: PartialMessage<_BugBotEvent_Started>) {
    super();
    proto3.util.initPartial(data, this as _BugBotEvent_Started);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_Started {
    return new _BugBotEvent_Started().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_Started {
    return new _BugBotEvent_Started().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_Started {
    return new _BugBotEvent_Started().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_Started | PlainMessage<_BugBotEvent_Started> | undefined | null, b2: _BugBotEvent_Started | PlainMessage<_BugBotEvent_Started> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_Started as unknown as MessageType<_BugBotEvent_Started>, a, b2);
  }
})();
export type BugBotEvent_Started = InstanceType<typeof BugBotEvent_Started$Runtime>;
var BugBotEvent_Started: MessageType<BugBotEvent_Started> = BugBotEvent_Started$Runtime as unknown as MessageType<BugBotEvent_Started>;
(BugBotEvent_Started as MutableMessageType<BugBotEvent_Started>).runtime = proto3;
(BugBotEvent_Started as MutableMessageType<BugBotEvent_Started>).typeName = "aiserver.v1.BugBotEvent.Started";
(BugBotEvent_Started as MutableMessageType<BugBotEvent_Started>).fields = proto3.util.newFieldList(() => []);
var BugBotEvent_ReportsGenerated$Runtime = (() => class _BugBotEvent_ReportsGenerated extends Message<_BugBotEvent_ReportsGenerated> {
  declare bugReports?: BugReports;
  constructor(data?: PartialMessage<_BugBotEvent_ReportsGenerated>) {
    super();
    proto3.util.initPartial(data, this as _BugBotEvent_ReportsGenerated);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_ReportsGenerated {
    return new _BugBotEvent_ReportsGenerated().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_ReportsGenerated {
    return new _BugBotEvent_ReportsGenerated().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_ReportsGenerated {
    return new _BugBotEvent_ReportsGenerated().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_ReportsGenerated | PlainMessage<_BugBotEvent_ReportsGenerated> | undefined | null, b2: _BugBotEvent_ReportsGenerated | PlainMessage<_BugBotEvent_ReportsGenerated> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_ReportsGenerated as unknown as MessageType<_BugBotEvent_ReportsGenerated>, a, b2);
  }
})();
export type BugBotEvent_ReportsGenerated = InstanceType<typeof BugBotEvent_ReportsGenerated$Runtime>;
var BugBotEvent_ReportsGenerated: MessageType<BugBotEvent_ReportsGenerated> = BugBotEvent_ReportsGenerated$Runtime as unknown as MessageType<BugBotEvent_ReportsGenerated>;
(BugBotEvent_ReportsGenerated as MutableMessageType<BugBotEvent_ReportsGenerated>).runtime = proto3;
(BugBotEvent_ReportsGenerated as MutableMessageType<BugBotEvent_ReportsGenerated>).typeName = "aiserver.v1.BugBotEvent.ReportsGenerated";
(BugBotEvent_ReportsGenerated as MutableMessageType<BugBotEvent_ReportsGenerated>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_reports", kind: "message", T: BugReports }
]);
var BugBotEvent_PressedFixInComposer$Runtime = (() => class _BugBotEvent_PressedFixInComposer extends Message<_BugBotEvent_PressedFixInComposer> {
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotEvent_PressedFixInComposer>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotEvent_PressedFixInComposer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_PressedFixInComposer {
    return new _BugBotEvent_PressedFixInComposer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedFixInComposer {
    return new _BugBotEvent_PressedFixInComposer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedFixInComposer {
    return new _BugBotEvent_PressedFixInComposer().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_PressedFixInComposer | PlainMessage<_BugBotEvent_PressedFixInComposer> | undefined | null, b2: _BugBotEvent_PressedFixInComposer | PlainMessage<_BugBotEvent_PressedFixInComposer> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_PressedFixInComposer as unknown as MessageType<_BugBotEvent_PressedFixInComposer>, a, b2);
  }
})();
export type BugBotEvent_PressedFixInComposer = InstanceType<typeof BugBotEvent_PressedFixInComposer$Runtime>;
var BugBotEvent_PressedFixInComposer: MessageType<BugBotEvent_PressedFixInComposer> = BugBotEvent_PressedFixInComposer$Runtime as unknown as MessageType<BugBotEvent_PressedFixInComposer>;
(BugBotEvent_PressedFixInComposer as MutableMessageType<BugBotEvent_PressedFixInComposer>).runtime = proto3;
(BugBotEvent_PressedFixInComposer as MutableMessageType<BugBotEvent_PressedFixInComposer>).typeName = "aiserver.v1.BugBotEvent.PressedFixInComposer";
(BugBotEvent_PressedFixInComposer as MutableMessageType<BugBotEvent_PressedFixInComposer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotEvent_PressedAddToChat$Runtime = (() => class _BugBotEvent_PressedAddToChat extends Message<_BugBotEvent_PressedAddToChat> {
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotEvent_PressedAddToChat>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotEvent_PressedAddToChat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_PressedAddToChat {
    return new _BugBotEvent_PressedAddToChat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedAddToChat {
    return new _BugBotEvent_PressedAddToChat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedAddToChat {
    return new _BugBotEvent_PressedAddToChat().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_PressedAddToChat | PlainMessage<_BugBotEvent_PressedAddToChat> | undefined | null, b2: _BugBotEvent_PressedAddToChat | PlainMessage<_BugBotEvent_PressedAddToChat> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_PressedAddToChat as unknown as MessageType<_BugBotEvent_PressedAddToChat>, a, b2);
  }
})();
export type BugBotEvent_PressedAddToChat = InstanceType<typeof BugBotEvent_PressedAddToChat$Runtime>;
var BugBotEvent_PressedAddToChat: MessageType<BugBotEvent_PressedAddToChat> = BugBotEvent_PressedAddToChat$Runtime as unknown as MessageType<BugBotEvent_PressedAddToChat>;
(BugBotEvent_PressedAddToChat as MutableMessageType<BugBotEvent_PressedAddToChat>).runtime = proto3;
(BugBotEvent_PressedAddToChat as MutableMessageType<BugBotEvent_PressedAddToChat>).typeName = "aiserver.v1.BugBotEvent.PressedAddToChat";
(BugBotEvent_PressedAddToChat as MutableMessageType<BugBotEvent_PressedAddToChat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotEvent_PressedOpenInEditor$Runtime = (() => class _BugBotEvent_PressedOpenInEditor extends Message<_BugBotEvent_PressedOpenInEditor> {
  declare bugLocation?: BugLocation;
  declare bugReportId: string;
  constructor(data?: PartialMessage<_BugBotEvent_PressedOpenInEditor>) {
    super();
    this.bugReportId = "";
    proto3.util.initPartial(data, this as _BugBotEvent_PressedOpenInEditor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_PressedOpenInEditor {
    return new _BugBotEvent_PressedOpenInEditor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedOpenInEditor {
    return new _BugBotEvent_PressedOpenInEditor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_PressedOpenInEditor {
    return new _BugBotEvent_PressedOpenInEditor().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_PressedOpenInEditor | PlainMessage<_BugBotEvent_PressedOpenInEditor> | undefined | null, b2: _BugBotEvent_PressedOpenInEditor | PlainMessage<_BugBotEvent_PressedOpenInEditor> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_PressedOpenInEditor as unknown as MessageType<_BugBotEvent_PressedOpenInEditor>, a, b2);
  }
})();
export type BugBotEvent_PressedOpenInEditor = InstanceType<typeof BugBotEvent_PressedOpenInEditor$Runtime>;
var BugBotEvent_PressedOpenInEditor: MessageType<BugBotEvent_PressedOpenInEditor> = BugBotEvent_PressedOpenInEditor$Runtime as unknown as MessageType<BugBotEvent_PressedOpenInEditor>;
(BugBotEvent_PressedOpenInEditor as MutableMessageType<BugBotEvent_PressedOpenInEditor>).runtime = proto3;
(BugBotEvent_PressedOpenInEditor as MutableMessageType<BugBotEvent_PressedOpenInEditor>).typeName = "aiserver.v1.BugBotEvent.PressedOpenInEditor";
(BugBotEvent_PressedOpenInEditor as MutableMessageType<BugBotEvent_PressedOpenInEditor>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_location", kind: "message", T: BugLocation },
  {
    no: 2,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotEvent_ViewedReport$Runtime = (() => class _BugBotEvent_ViewedReport extends Message<_BugBotEvent_ViewedReport> {
  declare secondsViewed: number;
  declare reportViews: BugBotEvent_ViewedReport_ReportView[];
  constructor(data?: PartialMessage<_BugBotEvent_ViewedReport>) {
    super();
    this.secondsViewed = 0;
    this.reportViews = [];
    proto3.util.initPartial(data, this as _BugBotEvent_ViewedReport);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_ViewedReport {
    return new _BugBotEvent_ViewedReport().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_ViewedReport {
    return new _BugBotEvent_ViewedReport().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_ViewedReport {
    return new _BugBotEvent_ViewedReport().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_ViewedReport | PlainMessage<_BugBotEvent_ViewedReport> | undefined | null, b2: _BugBotEvent_ViewedReport | PlainMessage<_BugBotEvent_ViewedReport> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_ViewedReport as unknown as MessageType<_BugBotEvent_ViewedReport>, a, b2);
  }
})();
export type BugBotEvent_ViewedReport = InstanceType<typeof BugBotEvent_ViewedReport$Runtime>;
var BugBotEvent_ViewedReport: MessageType<BugBotEvent_ViewedReport> = BugBotEvent_ViewedReport$Runtime as unknown as MessageType<BugBotEvent_ViewedReport>;
(BugBotEvent_ViewedReport as MutableMessageType<BugBotEvent_ViewedReport>).runtime = proto3;
(BugBotEvent_ViewedReport as MutableMessageType<BugBotEvent_ViewedReport>).typeName = "aiserver.v1.BugBotEvent.ViewedReport";
(BugBotEvent_ViewedReport as MutableMessageType<BugBotEvent_ViewedReport>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds_viewed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 2, name: "report_views", kind: "message", T: BugBotEvent_ViewedReport_ReportView, repeated: true }
]);
var BugBotEvent_ViewedReport_ReportView$Runtime = (() => class _BugBotEvent_ViewedReport_ReportView extends Message<_BugBotEvent_ViewedReport_ReportView> {
  declare bugReportId: string;
  declare viewPercentage: number;
  declare textPercentage: number;
  constructor(data?: PartialMessage<_BugBotEvent_ViewedReport_ReportView>) {
    super();
    this.bugReportId = "";
    this.viewPercentage = 0;
    this.textPercentage = 0;
    proto3.util.initPartial(data, this as _BugBotEvent_ViewedReport_ReportView);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_ViewedReport_ReportView {
    return new _BugBotEvent_ViewedReport_ReportView().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_ViewedReport_ReportView {
    return new _BugBotEvent_ViewedReport_ReportView().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_ViewedReport_ReportView {
    return new _BugBotEvent_ViewedReport_ReportView().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_ViewedReport_ReportView | PlainMessage<_BugBotEvent_ViewedReport_ReportView> | undefined | null, b2: _BugBotEvent_ViewedReport_ReportView | PlainMessage<_BugBotEvent_ViewedReport_ReportView> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_ViewedReport_ReportView as unknown as MessageType<_BugBotEvent_ViewedReport_ReportView>, a, b2);
  }
})();
export type BugBotEvent_ViewedReport_ReportView = InstanceType<typeof BugBotEvent_ViewedReport_ReportView$Runtime>;
var BugBotEvent_ViewedReport_ReportView: MessageType<BugBotEvent_ViewedReport_ReportView> = BugBotEvent_ViewedReport_ReportView$Runtime as unknown as MessageType<BugBotEvent_ViewedReport_ReportView>;
(BugBotEvent_ViewedReport_ReportView as MutableMessageType<BugBotEvent_ViewedReport_ReportView>).runtime = proto3;
(BugBotEvent_ViewedReport_ReportView as MutableMessageType<BugBotEvent_ViewedReport_ReportView>).typeName = "aiserver.v1.BugBotEvent.ViewedReport.ReportView";
(BugBotEvent_ViewedReport_ReportView as MutableMessageType<BugBotEvent_ViewedReport_ReportView>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "view_percentage",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "text_percentage",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var BugBotEvent_UserFeedback$Runtime = (() => class _BugBotEvent_UserFeedback extends Message<_BugBotEvent_UserFeedback> {
  declare bugReportId: string;
  declare feedback: string;
  constructor(data?: PartialMessage<_BugBotEvent_UserFeedback>) {
    super();
    this.bugReportId = "";
    this.feedback = "";
    proto3.util.initPartial(data, this as _BugBotEvent_UserFeedback);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_UserFeedback {
    return new _BugBotEvent_UserFeedback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_UserFeedback {
    return new _BugBotEvent_UserFeedback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_UserFeedback {
    return new _BugBotEvent_UserFeedback().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_UserFeedback | PlainMessage<_BugBotEvent_UserFeedback> | undefined | null, b2: _BugBotEvent_UserFeedback | PlainMessage<_BugBotEvent_UserFeedback> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_UserFeedback as unknown as MessageType<_BugBotEvent_UserFeedback>, a, b2);
  }
})();
export type BugBotEvent_UserFeedback = InstanceType<typeof BugBotEvent_UserFeedback$Runtime>;
var BugBotEvent_UserFeedback: MessageType<BugBotEvent_UserFeedback> = BugBotEvent_UserFeedback$Runtime as unknown as MessageType<BugBotEvent_UserFeedback>;
(BugBotEvent_UserFeedback as MutableMessageType<BugBotEvent_UserFeedback>).runtime = proto3;
(BugBotEvent_UserFeedback as MutableMessageType<BugBotEvent_UserFeedback>).typeName = "aiserver.v1.BugBotEvent.UserFeedback";
(BugBotEvent_UserFeedback as MutableMessageType<BugBotEvent_UserFeedback>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_report_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "feedback",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotEvent_BackgroundIntervalStarted$Runtime = (() => class _BugBotEvent_BackgroundIntervalStarted extends Message<_BugBotEvent_BackgroundIntervalStarted> {
  constructor(data?: PartialMessage<_BugBotEvent_BackgroundIntervalStarted>) {
    super();
    proto3.util.initPartial(data, this as _BugBotEvent_BackgroundIntervalStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_BackgroundIntervalStarted {
    return new _BugBotEvent_BackgroundIntervalStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalStarted {
    return new _BugBotEvent_BackgroundIntervalStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalStarted {
    return new _BugBotEvent_BackgroundIntervalStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_BackgroundIntervalStarted | PlainMessage<_BugBotEvent_BackgroundIntervalStarted> | undefined | null, b2: _BugBotEvent_BackgroundIntervalStarted | PlainMessage<_BugBotEvent_BackgroundIntervalStarted> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_BackgroundIntervalStarted as unknown as MessageType<_BugBotEvent_BackgroundIntervalStarted>, a, b2);
  }
})();
export type BugBotEvent_BackgroundIntervalStarted = InstanceType<typeof BugBotEvent_BackgroundIntervalStarted$Runtime>;
var BugBotEvent_BackgroundIntervalStarted: MessageType<BugBotEvent_BackgroundIntervalStarted> = BugBotEvent_BackgroundIntervalStarted$Runtime as unknown as MessageType<BugBotEvent_BackgroundIntervalStarted>;
(BugBotEvent_BackgroundIntervalStarted as MutableMessageType<BugBotEvent_BackgroundIntervalStarted>).runtime = proto3;
(BugBotEvent_BackgroundIntervalStarted as MutableMessageType<BugBotEvent_BackgroundIntervalStarted>).typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalStarted";
(BugBotEvent_BackgroundIntervalStarted as MutableMessageType<BugBotEvent_BackgroundIntervalStarted>).fields = proto3.util.newFieldList(() => []);
var BugBotEvent_BackgroundIntervalEnded$Runtime = (() => class _BugBotEvent_BackgroundIntervalEnded extends Message<_BugBotEvent_BackgroundIntervalEnded> {
  declare success: boolean;
  constructor(data?: PartialMessage<_BugBotEvent_BackgroundIntervalEnded>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _BugBotEvent_BackgroundIntervalEnded);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_BackgroundIntervalEnded {
    return new _BugBotEvent_BackgroundIntervalEnded().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalEnded {
    return new _BugBotEvent_BackgroundIntervalEnded().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalEnded {
    return new _BugBotEvent_BackgroundIntervalEnded().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_BackgroundIntervalEnded | PlainMessage<_BugBotEvent_BackgroundIntervalEnded> | undefined | null, b2: _BugBotEvent_BackgroundIntervalEnded | PlainMessage<_BugBotEvent_BackgroundIntervalEnded> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_BackgroundIntervalEnded as unknown as MessageType<_BugBotEvent_BackgroundIntervalEnded>, a, b2);
  }
})();
export type BugBotEvent_BackgroundIntervalEnded = InstanceType<typeof BugBotEvent_BackgroundIntervalEnded$Runtime>;
var BugBotEvent_BackgroundIntervalEnded: MessageType<BugBotEvent_BackgroundIntervalEnded> = BugBotEvent_BackgroundIntervalEnded$Runtime as unknown as MessageType<BugBotEvent_BackgroundIntervalEnded>;
(BugBotEvent_BackgroundIntervalEnded as MutableMessageType<BugBotEvent_BackgroundIntervalEnded>).runtime = proto3;
(BugBotEvent_BackgroundIntervalEnded as MutableMessageType<BugBotEvent_BackgroundIntervalEnded>).typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalEnded";
(BugBotEvent_BackgroundIntervalEnded as MutableMessageType<BugBotEvent_BackgroundIntervalEnded>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BugBotEvent_BackgroundIntervalInterrupted$Runtime = (() => class _BugBotEvent_BackgroundIntervalInterrupted extends Message<_BugBotEvent_BackgroundIntervalInterrupted> {
  declare reason: BugBotEvent_BackgroundIntervalInterruptedReason;
  constructor(data?: PartialMessage<_BugBotEvent_BackgroundIntervalInterrupted>) {
    super();
    this.reason = BugBotEvent_BackgroundIntervalInterruptedReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _BugBotEvent_BackgroundIntervalInterrupted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_BackgroundIntervalInterrupted {
    return new _BugBotEvent_BackgroundIntervalInterrupted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalInterrupted {
    return new _BugBotEvent_BackgroundIntervalInterrupted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalInterrupted {
    return new _BugBotEvent_BackgroundIntervalInterrupted().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_BackgroundIntervalInterrupted | PlainMessage<_BugBotEvent_BackgroundIntervalInterrupted> | undefined | null, b2: _BugBotEvent_BackgroundIntervalInterrupted | PlainMessage<_BugBotEvent_BackgroundIntervalInterrupted> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_BackgroundIntervalInterrupted as unknown as MessageType<_BugBotEvent_BackgroundIntervalInterrupted>, a, b2);
  }
})();
export type BugBotEvent_BackgroundIntervalInterrupted = InstanceType<typeof BugBotEvent_BackgroundIntervalInterrupted$Runtime>;
var BugBotEvent_BackgroundIntervalInterrupted: MessageType<BugBotEvent_BackgroundIntervalInterrupted> = BugBotEvent_BackgroundIntervalInterrupted$Runtime as unknown as MessageType<BugBotEvent_BackgroundIntervalInterrupted>;
(BugBotEvent_BackgroundIntervalInterrupted as MutableMessageType<BugBotEvent_BackgroundIntervalInterrupted>).runtime = proto3;
(BugBotEvent_BackgroundIntervalInterrupted as MutableMessageType<BugBotEvent_BackgroundIntervalInterrupted>).typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted";
(BugBotEvent_BackgroundIntervalInterrupted as MutableMessageType<BugBotEvent_BackgroundIntervalInterrupted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "enum", T: proto3.getEnumType(BugBotEvent_BackgroundIntervalInterruptedReason) }
]);
var BugBotEvent_BackgroundIntervalErrored$Runtime = (() => class _BugBotEvent_BackgroundIntervalErrored extends Message<_BugBotEvent_BackgroundIntervalErrored> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_BugBotEvent_BackgroundIntervalErrored>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _BugBotEvent_BackgroundIntervalErrored);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotEvent_BackgroundIntervalErrored {
    return new _BugBotEvent_BackgroundIntervalErrored().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalErrored {
    return new _BugBotEvent_BackgroundIntervalErrored().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotEvent_BackgroundIntervalErrored {
    return new _BugBotEvent_BackgroundIntervalErrored().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotEvent_BackgroundIntervalErrored | PlainMessage<_BugBotEvent_BackgroundIntervalErrored> | undefined | null, b2: _BugBotEvent_BackgroundIntervalErrored | PlainMessage<_BugBotEvent_BackgroundIntervalErrored> | undefined | null): boolean {
    return proto3.util.equals(_BugBotEvent_BackgroundIntervalErrored as unknown as MessageType<_BugBotEvent_BackgroundIntervalErrored>, a, b2);
  }
})();
export type BugBotEvent_BackgroundIntervalErrored = InstanceType<typeof BugBotEvent_BackgroundIntervalErrored$Runtime>;
var BugBotEvent_BackgroundIntervalErrored: MessageType<BugBotEvent_BackgroundIntervalErrored> = BugBotEvent_BackgroundIntervalErrored$Runtime as unknown as MessageType<BugBotEvent_BackgroundIntervalErrored>;
(BugBotEvent_BackgroundIntervalErrored as MutableMessageType<BugBotEvent_BackgroundIntervalErrored>).runtime = proto3;
(BugBotEvent_BackgroundIntervalErrored as MutableMessageType<BugBotEvent_BackgroundIntervalErrored>).typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalErrored";
(BugBotEvent_BackgroundIntervalErrored as MutableMessageType<BugBotEvent_BackgroundIntervalErrored>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiRequestEvent$Runtime = (() => class _AiRequestEvent extends Message<_AiRequestEvent> {
  declare requestType: AiRequestEvent_RequestType;
  declare requestId: string;
  declare source: AiRequestEvent_Source;
  constructor(data?: PartialMessage<_AiRequestEvent>) {
    super();
    this.requestType = AiRequestEvent_RequestType.UNSPECIFIED;
    this.requestId = "";
    this.source = AiRequestEvent_Source.UNSPECIFIED;
    proto3.util.initPartial(data, this as _AiRequestEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiRequestEvent {
    return new _AiRequestEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiRequestEvent {
    return new _AiRequestEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiRequestEvent {
    return new _AiRequestEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _AiRequestEvent | PlainMessage<_AiRequestEvent> | undefined | null, b2: _AiRequestEvent | PlainMessage<_AiRequestEvent> | undefined | null): boolean {
    return proto3.util.equals(_AiRequestEvent as unknown as MessageType<_AiRequestEvent>, a, b2);
  }
})();
export type AiRequestEvent = InstanceType<typeof AiRequestEvent$Runtime>;
var AiRequestEvent: MessageType<AiRequestEvent> = AiRequestEvent$Runtime as unknown as MessageType<AiRequestEvent>;
(AiRequestEvent as MutableMessageType<AiRequestEvent>).runtime = proto3;
(AiRequestEvent as MutableMessageType<AiRequestEvent>).typeName = "aiserver.v1.AiRequestEvent";
(AiRequestEvent as MutableMessageType<AiRequestEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request_type", kind: "enum", T: proto3.getEnumType(AiRequestEvent_RequestType) },
  {
    no: 2,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "source", kind: "enum", T: proto3.getEnumType(AiRequestEvent_Source) }
]);
(function(AiRequestEvent_RequestType2) {
  AiRequestEvent_RequestType2[AiRequestEvent_RequestType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AiRequestEvent_RequestType2[AiRequestEvent_RequestType2["START"] = 1] = "START";
  AiRequestEvent_RequestType2[AiRequestEvent_RequestType2["END"] = 2] = "END";
})(AiRequestEvent_RequestType! || (AiRequestEvent_RequestType = {} as typeof AiRequestEvent_RequestType));
proto3.util.setEnumType(AiRequestEvent_RequestType, "aiserver.v1.AiRequestEvent.RequestType", [
  { no: 0, name: "REQUEST_TYPE_UNSPECIFIED" },
  { no: 1, name: "REQUEST_TYPE_START" },
  { no: 2, name: "REQUEST_TYPE_END" }
]);
(function(AiRequestEvent_Source2) {
  AiRequestEvent_Source2[AiRequestEvent_Source2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AiRequestEvent_Source2[AiRequestEvent_Source2["CHAT"] = 1] = "CHAT";
  AiRequestEvent_Source2[AiRequestEvent_Source2["CMDK"] = 2] = "CMDK";
  AiRequestEvent_Source2[AiRequestEvent_Source2["APPLY"] = 3] = "APPLY";
  AiRequestEvent_Source2[AiRequestEvent_Source2["COMPOSER"] = 4] = "COMPOSER";
  AiRequestEvent_Source2[AiRequestEvent_Source2["TASK"] = 5] = "TASK";
  AiRequestEvent_Source2[AiRequestEvent_Source2["CODE_INTERPRETER"] = 6] = "CODE_INTERPRETER";
  AiRequestEvent_Source2[AiRequestEvent_Source2["INTERPRETER_EXECUTION"] = 7] = "INTERPRETER_EXECUTION";
  AiRequestEvent_Source2[AiRequestEvent_Source2["BUGBOT"] = 8] = "BUGBOT";
})(AiRequestEvent_Source! || (AiRequestEvent_Source = {} as typeof AiRequestEvent_Source));
proto3.util.setEnumType(AiRequestEvent_Source, "aiserver.v1.AiRequestEvent.Source", [
  { no: 0, name: "SOURCE_UNSPECIFIED" },
  { no: 1, name: "SOURCE_CHAT" },
  { no: 2, name: "SOURCE_CMDK" },
  { no: 3, name: "SOURCE_APPLY" },
  { no: 4, name: "SOURCE_COMPOSER" },
  { no: 5, name: "SOURCE_TASK" },
  { no: 6, name: "SOURCE_CODE_INTERPRETER" },
  { no: 7, name: "SOURCE_INTERPRETER_EXECUTION" },
  { no: 8, name: "SOURCE_BUGBOT" }
]);
var ModelOpenedEvent$Runtime = (() => class _ModelOpenedEvent extends Message<_ModelOpenedEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare maybeDefinedPointInTimeModel?: MaybeDefinedPointInTimeModel;
  constructor(data?: PartialMessage<_ModelOpenedEvent>) {
    super();
    proto3.util.initPartial(data, this as _ModelOpenedEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelOpenedEvent {
    return new _ModelOpenedEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelOpenedEvent {
    return new _ModelOpenedEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelOpenedEvent {
    return new _ModelOpenedEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelOpenedEvent | PlainMessage<_ModelOpenedEvent> | undefined | null, b2: _ModelOpenedEvent | PlainMessage<_ModelOpenedEvent> | undefined | null): boolean {
    return proto3.util.equals(_ModelOpenedEvent as unknown as MessageType<_ModelOpenedEvent>, a, b2);
  }
})();
export type ModelOpenedEvent = InstanceType<typeof ModelOpenedEvent$Runtime>;
var ModelOpenedEvent: MessageType<ModelOpenedEvent> = ModelOpenedEvent$Runtime as unknown as MessageType<ModelOpenedEvent>;
(ModelOpenedEvent as MutableMessageType<ModelOpenedEvent>).runtime = proto3;
(ModelOpenedEvent as MutableMessageType<ModelOpenedEvent>).typeName = "aiserver.v1.ModelOpenedEvent";
(ModelOpenedEvent as MutableMessageType<ModelOpenedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "maybe_defined_point_in_time_model", kind: "message", T: MaybeDefinedPointInTimeModel }
]);
var BackgroundFilesEvent$Runtime = (() => class _BackgroundFilesEvent extends Message<_BackgroundFilesEvent> {
  declare files: BackgroundFilesEvent_BackgroundFile[];
  constructor(data?: PartialMessage<_BackgroundFilesEvent>) {
    super();
    this.files = [];
    proto3.util.initPartial(data, this as _BackgroundFilesEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundFilesEvent {
    return new _BackgroundFilesEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundFilesEvent {
    return new _BackgroundFilesEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundFilesEvent {
    return new _BackgroundFilesEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundFilesEvent | PlainMessage<_BackgroundFilesEvent> | undefined | null, b2: _BackgroundFilesEvent | PlainMessage<_BackgroundFilesEvent> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundFilesEvent as unknown as MessageType<_BackgroundFilesEvent>, a, b2);
  }
})();
export type BackgroundFilesEvent = InstanceType<typeof BackgroundFilesEvent$Runtime>;
var BackgroundFilesEvent: MessageType<BackgroundFilesEvent> = BackgroundFilesEvent$Runtime as unknown as MessageType<BackgroundFilesEvent>;
(BackgroundFilesEvent as MutableMessageType<BackgroundFilesEvent>).runtime = proto3;
(BackgroundFilesEvent as MutableMessageType<BackgroundFilesEvent>).typeName = "aiserver.v1.BackgroundFilesEvent";
(BackgroundFilesEvent as MutableMessageType<BackgroundFilesEvent>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "files", kind: "message", T: BackgroundFilesEvent_BackgroundFile, repeated: true }
]);
var BackgroundFilesEvent_BackgroundFile$Runtime = (() => class _BackgroundFilesEvent_BackgroundFile extends Message<_BackgroundFilesEvent_BackgroundFile> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare hash: string;
  declare fullPath: string;
  constructor(data?: PartialMessage<_BackgroundFilesEvent_BackgroundFile>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    this.hash = "";
    this.fullPath = "";
    proto3.util.initPartial(data, this as _BackgroundFilesEvent_BackgroundFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundFilesEvent_BackgroundFile {
    return new _BackgroundFilesEvent_BackgroundFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundFilesEvent_BackgroundFile {
    return new _BackgroundFilesEvent_BackgroundFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundFilesEvent_BackgroundFile {
    return new _BackgroundFilesEvent_BackgroundFile().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundFilesEvent_BackgroundFile | PlainMessage<_BackgroundFilesEvent_BackgroundFile> | undefined | null, b2: _BackgroundFilesEvent_BackgroundFile | PlainMessage<_BackgroundFilesEvent_BackgroundFile> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundFilesEvent_BackgroundFile as unknown as MessageType<_BackgroundFilesEvent_BackgroundFile>, a, b2);
  }
})();
export type BackgroundFilesEvent_BackgroundFile = InstanceType<typeof BackgroundFilesEvent_BackgroundFile$Runtime>;
var BackgroundFilesEvent_BackgroundFile: MessageType<BackgroundFilesEvent_BackgroundFile> = BackgroundFilesEvent_BackgroundFile$Runtime as unknown as MessageType<BackgroundFilesEvent_BackgroundFile>;
(BackgroundFilesEvent_BackgroundFile as MutableMessageType<BackgroundFilesEvent_BackgroundFile>).runtime = proto3;
(BackgroundFilesEvent_BackgroundFile as MutableMessageType<BackgroundFilesEvent_BackgroundFile>).typeName = "aiserver.v1.BackgroundFilesEvent.BackgroundFile";
(BackgroundFilesEvent_BackgroundFile as MutableMessageType<BackgroundFilesEvent_BackgroundFile>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "full_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ScrollEvent$Runtime = (() => class _ScrollEvent extends Message<_ScrollEvent> {
  declare pointInTimeModel?: PointInTimeModel;
  declare visibleRanges: IRange[];
  declare editorId: string;
  constructor(data?: PartialMessage<_ScrollEvent>) {
    super();
    this.visibleRanges = [];
    this.editorId = "";
    proto3.util.initPartial(data, this as _ScrollEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScrollEvent {
    return new _ScrollEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScrollEvent {
    return new _ScrollEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScrollEvent {
    return new _ScrollEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ScrollEvent | PlainMessage<_ScrollEvent> | undefined | null, b2: _ScrollEvent | PlainMessage<_ScrollEvent> | undefined | null): boolean {
    return proto3.util.equals(_ScrollEvent as unknown as MessageType<_ScrollEvent>, a, b2);
  }
})();
export type ScrollEvent = InstanceType<typeof ScrollEvent$Runtime>;
var ScrollEvent: MessageType<ScrollEvent> = ScrollEvent$Runtime as unknown as MessageType<ScrollEvent>;
(ScrollEvent as MutableMessageType<ScrollEvent>).runtime = proto3;
(ScrollEvent as MutableMessageType<ScrollEvent>).typeName = "aiserver.v1.ScrollEvent";
(ScrollEvent as MutableMessageType<ScrollEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "visible_ranges", kind: "message", T: IRange, repeated: true },
  {
    no: 3,
    name: "editor_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditorCloseEvent$Runtime = (() => class _EditorCloseEvent extends Message<_EditorCloseEvent> {
  declare editorId: string;
  constructor(data?: PartialMessage<_EditorCloseEvent>) {
    super();
    this.editorId = "";
    proto3.util.initPartial(data, this as _EditorCloseEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditorCloseEvent {
    return new _EditorCloseEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditorCloseEvent {
    return new _EditorCloseEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditorCloseEvent {
    return new _EditorCloseEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _EditorCloseEvent | PlainMessage<_EditorCloseEvent> | undefined | null, b2: _EditorCloseEvent | PlainMessage<_EditorCloseEvent> | undefined | null): boolean {
    return proto3.util.equals(_EditorCloseEvent as unknown as MessageType<_EditorCloseEvent>, a, b2);
  }
})();
export type EditorCloseEvent = InstanceType<typeof EditorCloseEvent$Runtime>;
var EditorCloseEvent: MessageType<EditorCloseEvent> = EditorCloseEvent$Runtime as unknown as MessageType<EditorCloseEvent>;
(EditorCloseEvent as MutableMessageType<EditorCloseEvent>).runtime = proto3;
(EditorCloseEvent as MutableMessageType<EditorCloseEvent>).typeName = "aiserver.v1.EditorCloseEvent";
(EditorCloseEvent as MutableMessageType<EditorCloseEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "editor_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TabCloseEvent$Runtime = (() => class _TabCloseEvent extends Message<_TabCloseEvent> {
  declare pointInTimeModel?: MaybeDefinedPointInTimeModel;
  constructor(data?: PartialMessage<_TabCloseEvent>) {
    super();
    proto3.util.initPartial(data, this as _TabCloseEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TabCloseEvent {
    return new _TabCloseEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TabCloseEvent {
    return new _TabCloseEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TabCloseEvent {
    return new _TabCloseEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _TabCloseEvent | PlainMessage<_TabCloseEvent> | undefined | null, b2: _TabCloseEvent | PlainMessage<_TabCloseEvent> | undefined | null): boolean {
    return proto3.util.equals(_TabCloseEvent as unknown as MessageType<_TabCloseEvent>, a, b2);
  }
})();
export type TabCloseEvent = InstanceType<typeof TabCloseEvent$Runtime>;
var TabCloseEvent: MessageType<TabCloseEvent> = TabCloseEvent$Runtime as unknown as MessageType<TabCloseEvent>;
(TabCloseEvent as MutableMessageType<TabCloseEvent>).runtime = proto3;
(TabCloseEvent as MutableMessageType<TabCloseEvent>).typeName = "aiserver.v1.TabCloseEvent";
(TabCloseEvent as MutableMessageType<TabCloseEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: MaybeDefinedPointInTimeModel }
]);
var ModelAddedEvent$Runtime = (() => class _ModelAddedEvent extends Message<_ModelAddedEvent> {
  declare pointInTimeModel?: MaybeDefinedPointInTimeModel;
  declare fullUri: string;
  declare modelId: string;
  declare uriScheme: string;
  declare isTooLargeForSyncing: boolean;
  declare isTooLargeForTokenization: boolean;
  declare isTooLargeForHeapOperation: boolean;
  constructor(data?: PartialMessage<_ModelAddedEvent>) {
    super();
    this.fullUri = "";
    this.modelId = "";
    this.uriScheme = "";
    this.isTooLargeForSyncing = false;
    this.isTooLargeForTokenization = false;
    this.isTooLargeForHeapOperation = false;
    proto3.util.initPartial(data, this as _ModelAddedEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelAddedEvent {
    return new _ModelAddedEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelAddedEvent {
    return new _ModelAddedEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelAddedEvent {
    return new _ModelAddedEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelAddedEvent | PlainMessage<_ModelAddedEvent> | undefined | null, b2: _ModelAddedEvent | PlainMessage<_ModelAddedEvent> | undefined | null): boolean {
    return proto3.util.equals(_ModelAddedEvent as unknown as MessageType<_ModelAddedEvent>, a, b2);
  }
})();
export type ModelAddedEvent = InstanceType<typeof ModelAddedEvent$Runtime>;
var ModelAddedEvent: MessageType<ModelAddedEvent> = ModelAddedEvent$Runtime as unknown as MessageType<ModelAddedEvent>;
(ModelAddedEvent as MutableMessageType<ModelAddedEvent>).runtime = proto3;
(ModelAddedEvent as MutableMessageType<ModelAddedEvent>).typeName = "aiserver.v1.ModelAddedEvent";
(ModelAddedEvent as MutableMessageType<ModelAddedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: MaybeDefinedPointInTimeModel },
  {
    no: 2,
    name: "full_uri",
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
    name: "uri_scheme",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "is_too_large_for_syncing",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "is_too_large_for_tokenization",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "is_too_large_for_heap_operation",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AnythingQuickAccessItem$Runtime = (() => class _AnythingQuickAccessItem extends Message<_AnythingQuickAccessItem> {
  declare item: { case: "resource"; value: AnythingQuickAccessItem_Resource } | { case: "separator"; value: string } | { case: "section"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AnythingQuickAccessItem>) {
    super();
    this.item = { case: void 0 };
    proto3.util.initPartial(data, this as _AnythingQuickAccessItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnythingQuickAccessItem {
    return new _AnythingQuickAccessItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnythingQuickAccessItem {
    return new _AnythingQuickAccessItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnythingQuickAccessItem {
    return new _AnythingQuickAccessItem().fromJsonString(jsonString, options);
  }
  static equals(a: _AnythingQuickAccessItem | PlainMessage<_AnythingQuickAccessItem> | undefined | null, b2: _AnythingQuickAccessItem | PlainMessage<_AnythingQuickAccessItem> | undefined | null): boolean {
    return proto3.util.equals(_AnythingQuickAccessItem as unknown as MessageType<_AnythingQuickAccessItem>, a, b2);
  }
})();
export type AnythingQuickAccessItem = InstanceType<typeof AnythingQuickAccessItem$Runtime>;
var AnythingQuickAccessItem: MessageType<AnythingQuickAccessItem> = AnythingQuickAccessItem$Runtime as unknown as MessageType<AnythingQuickAccessItem>;
(AnythingQuickAccessItem as MutableMessageType<AnythingQuickAccessItem>).runtime = proto3;
(AnythingQuickAccessItem as MutableMessageType<AnythingQuickAccessItem>).typeName = "aiserver.v1.AnythingQuickAccessItem";
(AnythingQuickAccessItem as MutableMessageType<AnythingQuickAccessItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "resource", kind: "message", T: AnythingQuickAccessItem_Resource, oneof: "item" },
  { no: 2, name: "separator", kind: "scalar", T: 9, oneof: "item" },
  { no: 3, name: "section", kind: "scalar", T: 9, oneof: "item" }
]);
var AnythingQuickAccessItem_Resource$Runtime = (() => class _AnythingQuickAccessItem_Resource extends Message<_AnythingQuickAccessItem_Resource> {
  declare model?: PointInTimeModel;
  declare range?: IRange;
  declare uri?: string;
  constructor(data?: PartialMessage<_AnythingQuickAccessItem_Resource>) {
    super();
    proto3.util.initPartial(data, this as _AnythingQuickAccessItem_Resource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnythingQuickAccessItem_Resource {
    return new _AnythingQuickAccessItem_Resource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnythingQuickAccessItem_Resource {
    return new _AnythingQuickAccessItem_Resource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnythingQuickAccessItem_Resource {
    return new _AnythingQuickAccessItem_Resource().fromJsonString(jsonString, options);
  }
  static equals(a: _AnythingQuickAccessItem_Resource | PlainMessage<_AnythingQuickAccessItem_Resource> | undefined | null, b2: _AnythingQuickAccessItem_Resource | PlainMessage<_AnythingQuickAccessItem_Resource> | undefined | null): boolean {
    return proto3.util.equals(_AnythingQuickAccessItem_Resource as unknown as MessageType<_AnythingQuickAccessItem_Resource>, a, b2);
  }
})();
export type AnythingQuickAccessItem_Resource = InstanceType<typeof AnythingQuickAccessItem_Resource$Runtime>;
var AnythingQuickAccessItem_Resource: MessageType<AnythingQuickAccessItem_Resource> = AnythingQuickAccessItem_Resource$Runtime as unknown as MessageType<AnythingQuickAccessItem_Resource>;
(AnythingQuickAccessItem_Resource as MutableMessageType<AnythingQuickAccessItem_Resource>).runtime = proto3;
(AnythingQuickAccessItem_Resource as MutableMessageType<AnythingQuickAccessItem_Resource>).typeName = "aiserver.v1.AnythingQuickAccessItem.Resource";
(AnythingQuickAccessItem_Resource as MutableMessageType<AnythingQuickAccessItem_Resource>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model", kind: "message", T: PointInTimeModel, opt: true },
  { no: 2, name: "range", kind: "message", T: IRange, opt: true },
  { no: 3, name: "uri", kind: "scalar", T: 9, opt: true }
]);
var AnythingQuickAccessSelectionEvent$Runtime = (() => class _AnythingQuickAccessSelectionEvent extends Message<_AnythingQuickAccessSelectionEvent> {
  declare query: string;
  declare items: AnythingQuickAccessItem[];
  declare selectedIndices: number[];
  constructor(data?: PartialMessage<_AnythingQuickAccessSelectionEvent>) {
    super();
    this.query = "";
    this.items = [];
    this.selectedIndices = [];
    proto3.util.initPartial(data, this as _AnythingQuickAccessSelectionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AnythingQuickAccessSelectionEvent {
    return new _AnythingQuickAccessSelectionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AnythingQuickAccessSelectionEvent {
    return new _AnythingQuickAccessSelectionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AnythingQuickAccessSelectionEvent {
    return new _AnythingQuickAccessSelectionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _AnythingQuickAccessSelectionEvent | PlainMessage<_AnythingQuickAccessSelectionEvent> | undefined | null, b2: _AnythingQuickAccessSelectionEvent | PlainMessage<_AnythingQuickAccessSelectionEvent> | undefined | null): boolean {
    return proto3.util.equals(_AnythingQuickAccessSelectionEvent as unknown as MessageType<_AnythingQuickAccessSelectionEvent>, a, b2);
  }
})();
export type AnythingQuickAccessSelectionEvent = InstanceType<typeof AnythingQuickAccessSelectionEvent$Runtime>;
var AnythingQuickAccessSelectionEvent: MessageType<AnythingQuickAccessSelectionEvent> = AnythingQuickAccessSelectionEvent$Runtime as unknown as MessageType<AnythingQuickAccessSelectionEvent>;
(AnythingQuickAccessSelectionEvent as MutableMessageType<AnythingQuickAccessSelectionEvent>).runtime = proto3;
(AnythingQuickAccessSelectionEvent as MutableMessageType<AnythingQuickAccessSelectionEvent>).typeName = "aiserver.v1.AnythingQuickAccessSelectionEvent";
(AnythingQuickAccessSelectionEvent as MutableMessageType<AnythingQuickAccessSelectionEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "items", kind: "message", T: AnythingQuickAccessItem, repeated: true },
  { no: 3, name: "selected_indices", kind: "scalar", T: 5, repeated: true }
]);
var LspSuggestionEvent$Runtime = (() => class _LspSuggestionEvent extends Message<_LspSuggestionEvent> {
  declare suggestions: string[];
  declare requestId?: string;
  declare editorId?: string;
  declare pointInTimeModel?: PointInTimeModel;
  constructor(data?: PartialMessage<_LspSuggestionEvent>) {
    super();
    this.suggestions = [];
    proto3.util.initPartial(data, this as _LspSuggestionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LspSuggestionEvent {
    return new _LspSuggestionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LspSuggestionEvent {
    return new _LspSuggestionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LspSuggestionEvent {
    return new _LspSuggestionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _LspSuggestionEvent | PlainMessage<_LspSuggestionEvent> | undefined | null, b2: _LspSuggestionEvent | PlainMessage<_LspSuggestionEvent> | undefined | null): boolean {
    return proto3.util.equals(_LspSuggestionEvent as unknown as MessageType<_LspSuggestionEvent>, a, b2);
  }
})();
export type LspSuggestionEvent = InstanceType<typeof LspSuggestionEvent$Runtime>;
var LspSuggestionEvent: MessageType<LspSuggestionEvent> = LspSuggestionEvent$Runtime as unknown as MessageType<LspSuggestionEvent>;
(LspSuggestionEvent as MutableMessageType<LspSuggestionEvent>).runtime = proto3;
(LspSuggestionEvent as MutableMessageType<LspSuggestionEvent>).typeName = "aiserver.v1.LspSuggestionEvent";
(LspSuggestionEvent as MutableMessageType<LspSuggestionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestions", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "request_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "editor_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "point_in_time_model", kind: "message", T: PointInTimeModel }
]);
var CppSessionEvent$Runtime = (() => class _CppSessionEvent extends Message<_CppSessionEvent> {
  declare performanceNowTimestamp: number;
  declare performanceTimeOrigin?: number;
  declare globalIndex?: bigint;
  declare performanceNowFlushTime?: number;
  declare eventIndex?: number;
  declare flushIndex?: number;
  declare globalIndexV2?: number;
  declare event: { case: "acceptEvent"; value: CppAcceptEventNew } | { case: "rejectEvent"; value: CppRejectEventNew } | { case: "manualTriggerEvent"; value: CppManualTriggerEventNew } | { case: "stoppedTrackingModelEvent"; value: CppStoppedTrackingModelEvent } | { case: "suggestEvent"; value: CppSuggestEvent } | { case: "linterErrorEvent"; value: CppLinterErrorEvent } | { case: "debouncedCursorMovementEvent"; value: CppDebouncedCursorMovementEvent } | { case: "editorChangedEvent"; value: CppEditorChangedEvent } | { case: "copyEvent"; value: CppCopyEvent } | { case: "quickActionEvent"; value: CppChangeQuickActionEvent } | { case: "quickActionFireEvent"; value: CppQuickActionFireEvent } | { case: "modelOpenedEvent"; value: ModelOpenedEvent } | { case: "cmdKEvent"; value: CmdKEvent } | { case: "chatEvent"; value: ChatEvent } | { case: "aiEvent"; value: AiRequestEvent } | { case: "scrollEvent"; value: ScrollEvent } | { case: "editorCloseEvent"; value: EditorCloseEvent } | { case: "tabCloseEvent"; value: TabCloseEvent } | { case: "modelAddedEvent"; value: ModelAddedEvent } | { case: "partialAcceptEvent"; value: CppPartialAcceptEvent } | { case: "acceptCursorPredictionEvent"; value: AcceptCursorPredictionEvent } | { case: "rejectCursorPredictionEvent"; value: RejectCursorPredictionEvent } | { case: "suggestCursorPredictionEvent"; value: SuggestCursorPredictionEvent } | { case: "cppTriggerEvent"; value: CppTriggerEvent } | { case: "finishedCppGenerationEvent"; value: FinishedCppGenerationEvent } | { case: "bugBotEvent"; value: BugBotEvent } | { case: "bugBotLinterEvent"; value: BugBotLinterEvent } | { case: "anythingQuickAccessSelectionEvent"; value: AnythingQuickAccessSelectionEvent } | { case: "lspSuggestionEvent"; value: LspSuggestionEvent } | { case: "ntpEvent"; value: NtpEvent } | { case: "repoEvent"; value: RepoEvent } | { case: "gitEvent"; value: GitEvent } | { case: "toolCallEvent"; value: ToolCallEvent } | { case: "beforeAiEditEvent"; value: BeforeAiEditEvent } | { case: "searchEvent"; value: SearchEvent } | { case: "terminalEvent"; value: TerminalEvent } | { case: "worktreeEvent"; value: WorktreeEvent } | { case: "reviewChangesOpenedEvent"; value: ReviewChangesOpenedEvent } | { case: "browserEvent"; value: BrowserEvent } | { case: "backgroundFilesEvent"; value: BackgroundFilesEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CppSessionEvent>) {
    super();
    this.event = { case: void 0 };
    this.performanceNowTimestamp = 0;
    proto3.util.initPartial(data, this as _CppSessionEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppSessionEvent {
    return new _CppSessionEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppSessionEvent {
    return new _CppSessionEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppSessionEvent {
    return new _CppSessionEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppSessionEvent | PlainMessage<_CppSessionEvent> | undefined | null, b2: _CppSessionEvent | PlainMessage<_CppSessionEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppSessionEvent as unknown as MessageType<_CppSessionEvent>, a, b2);
  }
})();
export type CppSessionEvent = InstanceType<typeof CppSessionEvent$Runtime>;
var CppSessionEvent: MessageType<CppSessionEvent> = CppSessionEvent$Runtime as unknown as MessageType<CppSessionEvent>;
(CppSessionEvent as MutableMessageType<CppSessionEvent>).runtime = proto3;
(CppSessionEvent as MutableMessageType<CppSessionEvent>).typeName = "aiserver.v1.CppSessionEvent";
(CppSessionEvent as MutableMessageType<CppSessionEvent>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "accept_event", kind: "message", T: CppAcceptEventNew, oneof: "event" },
  { no: 3, name: "reject_event", kind: "message", T: CppRejectEventNew, oneof: "event" },
  { no: 4, name: "manual_trigger_event", kind: "message", T: CppManualTriggerEventNew, oneof: "event" },
  { no: 6, name: "stopped_tracking_model_event", kind: "message", T: CppStoppedTrackingModelEvent, oneof: "event" },
  { no: 7, name: "suggest_event", kind: "message", T: CppSuggestEvent, oneof: "event" },
  { no: 8, name: "linter_error_event", kind: "message", T: CppLinterErrorEvent, oneof: "event" },
  { no: 9, name: "debounced_cursor_movement_event", kind: "message", T: CppDebouncedCursorMovementEvent, oneof: "event" },
  { no: 10, name: "editor_changed_event", kind: "message", T: CppEditorChangedEvent, oneof: "event" },
  { no: 11, name: "copy_event", kind: "message", T: CppCopyEvent, oneof: "event" },
  { no: 13, name: "quick_action_event", kind: "message", T: CppChangeQuickActionEvent, oneof: "event" },
  { no: 14, name: "quick_action_fire_event", kind: "message", T: CppQuickActionFireEvent, oneof: "event" },
  { no: 15, name: "model_opened_event", kind: "message", T: ModelOpenedEvent, oneof: "event" },
  { no: 17, name: "cmd_k_event", kind: "message", T: CmdKEvent, oneof: "event" },
  { no: 18, name: "chat_event", kind: "message", T: ChatEvent, oneof: "event" },
  { no: 19, name: "ai_event", kind: "message", T: AiRequestEvent, oneof: "event" },
  { no: 21, name: "scroll_event", kind: "message", T: ScrollEvent, oneof: "event" },
  { no: 22, name: "editor_close_event", kind: "message", T: EditorCloseEvent, oneof: "event" },
  { no: 23, name: "tab_close_event", kind: "message", T: TabCloseEvent, oneof: "event" },
  { no: 33, name: "model_added_event", kind: "message", T: ModelAddedEvent, oneof: "event" },
  { no: 26, name: "partial_accept_event", kind: "message", T: CppPartialAcceptEvent, oneof: "event" },
  { no: 27, name: "accept_cursor_prediction_event", kind: "message", T: AcceptCursorPredictionEvent, oneof: "event" },
  { no: 28, name: "reject_cursor_prediction_event", kind: "message", T: RejectCursorPredictionEvent, oneof: "event" },
  { no: 29, name: "suggest_cursor_prediction_event", kind: "message", T: SuggestCursorPredictionEvent, oneof: "event" },
  { no: 30, name: "cpp_trigger_event", kind: "message", T: CppTriggerEvent, oneof: "event" },
  { no: 31, name: "finished_cpp_generation_event", kind: "message", T: FinishedCppGenerationEvent, oneof: "event" },
  { no: 32, name: "bug_bot_event", kind: "message", T: BugBotEvent, oneof: "event" },
  { no: 34, name: "bug_bot_linter_event", kind: "message", T: BugBotLinterEvent, oneof: "event" },
  { no: 35, name: "anything_quick_access_selection_event", kind: "message", T: AnythingQuickAccessSelectionEvent, oneof: "event" },
  { no: 36, name: "lsp_suggestion_event", kind: "message", T: LspSuggestionEvent, oneof: "event" },
  { no: 37, name: "ntp_event", kind: "message", T: NtpEvent, oneof: "event" },
  { no: 38, name: "repo_event", kind: "message", T: RepoEvent, oneof: "event" },
  { no: 39, name: "git_event", kind: "message", T: GitEvent, oneof: "event" },
  { no: 40, name: "tool_call_event", kind: "message", T: ToolCallEvent, oneof: "event" },
  { no: 46, name: "before_ai_edit_event", kind: "message", T: BeforeAiEditEvent, oneof: "event" },
  { no: 47, name: "search_event", kind: "message", T: SearchEvent, oneof: "event" },
  { no: 48, name: "terminal_event", kind: "message", T: TerminalEvent, oneof: "event" },
  { no: 49, name: "worktree_event", kind: "message", T: WorktreeEvent, oneof: "event" },
  { no: 50, name: "review_changes_opened_event", kind: "message", T: ReviewChangesOpenedEvent, oneof: "event" },
  { no: 51, name: "browser_event", kind: "message", T: BrowserEvent, oneof: "event" },
  { no: 16, name: "background_files_event", kind: "message", T: BackgroundFilesEvent, oneof: "event" },
  {
    no: 5,
    name: "performance_now_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 25, name: "performance_time_origin", kind: "scalar", T: 1, opt: true },
  { no: 41, name: "global_index", kind: "scalar", T: 3, opt: true },
  { no: 42, name: "performance_now_flush_time", kind: "scalar", T: 1, opt: true },
  { no: 43, name: "event_index", kind: "scalar", T: 5, opt: true },
  { no: 44, name: "flush_index", kind: "scalar", T: 5, opt: true },
  { no: 45, name: "global_index_v2", kind: "scalar", T: 5, opt: true }
]);
var BeforeAiEditEvent$Runtime = (() => class _BeforeAiEditEvent extends Message<_BeforeAiEditEvent> {
  declare toolCallId: string;
  declare requestId?: string;
  declare toolName?: string;
  declare model: { case: "pointInTimeModel"; value: PointInTimeModel } | { case: "relativeWorkspacePath"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BeforeAiEditEvent>) {
    super();
    this.model = { case: void 0 };
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _BeforeAiEditEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BeforeAiEditEvent {
    return new _BeforeAiEditEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BeforeAiEditEvent {
    return new _BeforeAiEditEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BeforeAiEditEvent {
    return new _BeforeAiEditEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _BeforeAiEditEvent | PlainMessage<_BeforeAiEditEvent> | undefined | null, b2: _BeforeAiEditEvent | PlainMessage<_BeforeAiEditEvent> | undefined | null): boolean {
    return proto3.util.equals(_BeforeAiEditEvent as unknown as MessageType<_BeforeAiEditEvent>, a, b2);
  }
})();
export type BeforeAiEditEvent = InstanceType<typeof BeforeAiEditEvent$Runtime>;
var BeforeAiEditEvent: MessageType<BeforeAiEditEvent> = BeforeAiEditEvent$Runtime as unknown as MessageType<BeforeAiEditEvent>;
(BeforeAiEditEvent as MutableMessageType<BeforeAiEditEvent>).runtime = proto3;
(BeforeAiEditEvent as MutableMessageType<BeforeAiEditEvent>).typeName = "aiserver.v1.BeforeAiEditEvent";
(BeforeAiEditEvent as MutableMessageType<BeforeAiEditEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel, oneof: "model" },
  { no: 5, name: "relative_workspace_path", kind: "scalar", T: 9, oneof: "model" },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "tool_name", kind: "scalar", T: 9, opt: true }
]);
var CppAppendRequest$Runtime = (() => class _CppAppendRequest extends Message<_CppAppendRequest> {
  declare changes: Uint8Array;
  constructor(data?: PartialMessage<_CppAppendRequest>) {
    super();
    this.changes = new Uint8Array(0);
    proto3.util.initPartial(data, this as _CppAppendRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppAppendRequest {
    return new _CppAppendRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppAppendRequest {
    return new _CppAppendRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppAppendRequest {
    return new _CppAppendRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CppAppendRequest | PlainMessage<_CppAppendRequest> | undefined | null, b2: _CppAppendRequest | PlainMessage<_CppAppendRequest> | undefined | null): boolean {
    return proto3.util.equals(_CppAppendRequest as unknown as MessageType<_CppAppendRequest>, a, b2);
  }
})();
export type CppAppendRequest = InstanceType<typeof CppAppendRequest$Runtime>;
var CppAppendRequest: MessageType<CppAppendRequest> = CppAppendRequest$Runtime as unknown as MessageType<CppAppendRequest>;
(CppAppendRequest as MutableMessageType<CppAppendRequest>).runtime = proto3;
(CppAppendRequest as MutableMessageType<CppAppendRequest>).typeName = "aiserver.v1.CppAppendRequest";
(CppAppendRequest as MutableMessageType<CppAppendRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "changes",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var CppAppendResponse$Runtime = (() => class _CppAppendResponse extends Message<_CppAppendResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_CppAppendResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _CppAppendResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppAppendResponse {
    return new _CppAppendResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppAppendResponse {
    return new _CppAppendResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppAppendResponse {
    return new _CppAppendResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CppAppendResponse | PlainMessage<_CppAppendResponse> | undefined | null, b2: _CppAppendResponse | PlainMessage<_CppAppendResponse> | undefined | null): boolean {
    return proto3.util.equals(_CppAppendResponse as unknown as MessageType<_CppAppendResponse>, a, b2);
  }
})();
export type CppAppendResponse = InstanceType<typeof CppAppendResponse$Runtime>;
var CppAppendResponse: MessageType<CppAppendResponse> = CppAppendResponse$Runtime as unknown as MessageType<CppAppendResponse>;
(CppAppendResponse as MutableMessageType<CppAppendResponse>).runtime = proto3;
(CppAppendResponse as MutableMessageType<CppAppendResponse>).typeName = "aiserver.v1.CppAppendResponse";
(CppAppendResponse as MutableMessageType<CppAppendResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var EditHistoryAppendChangesRequest$Runtime = (() => class _EditHistoryAppendChangesRequest extends Message<_EditHistoryAppendChangesRequest> {
  declare sessionId: string;
  declare modelUuid: string;
  declare startingModelValue?: string;
  declare startingModelVersion?: number;
  declare relativePath: string;
  declare uri: string;
  declare clientVersion: string;
  declare clientCommit?: string;
  declare changes: ModelChange[];
  declare sessionEvents: CppSessionEvent[];
  declare modelChangesMayBeOutOfOrder: boolean;
  declare privacyModeStatus: EditHistoryAppendChangesRequest_PrivacyModeStatus;
  declare events: CppHistoryAppendEvent[];
  declare timeOrigin: number;
  constructor(data?: PartialMessage<_EditHistoryAppendChangesRequest>) {
    super();
    this.sessionId = "";
    this.modelUuid = "";
    this.relativePath = "";
    this.uri = "";
    this.clientVersion = "";
    this.changes = [];
    this.sessionEvents = [];
    this.modelChangesMayBeOutOfOrder = false;
    this.privacyModeStatus = EditHistoryAppendChangesRequest_PrivacyModeStatus.UNSPECIFIED;
    this.events = [];
    this.timeOrigin = 0;
    proto3.util.initPartial(data, this as _EditHistoryAppendChangesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditHistoryAppendChangesRequest {
    return new _EditHistoryAppendChangesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditHistoryAppendChangesRequest {
    return new _EditHistoryAppendChangesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditHistoryAppendChangesRequest {
    return new _EditHistoryAppendChangesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _EditHistoryAppendChangesRequest | PlainMessage<_EditHistoryAppendChangesRequest> | undefined | null, b2: _EditHistoryAppendChangesRequest | PlainMessage<_EditHistoryAppendChangesRequest> | undefined | null): boolean {
    return proto3.util.equals(_EditHistoryAppendChangesRequest as unknown as MessageType<_EditHistoryAppendChangesRequest>, a, b2);
  }
})();
export type EditHistoryAppendChangesRequest = InstanceType<typeof EditHistoryAppendChangesRequest$Runtime>;
var EditHistoryAppendChangesRequest: MessageType<EditHistoryAppendChangesRequest> = EditHistoryAppendChangesRequest$Runtime as unknown as MessageType<EditHistoryAppendChangesRequest>;
(EditHistoryAppendChangesRequest as MutableMessageType<EditHistoryAppendChangesRequest>).runtime = proto3;
(EditHistoryAppendChangesRequest as MutableMessageType<EditHistoryAppendChangesRequest>).typeName = "aiserver.v1.EditHistoryAppendChangesRequest";
(EditHistoryAppendChangesRequest as MutableMessageType<EditHistoryAppendChangesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "starting_model_value", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "starting_model_version", kind: "scalar", T: 5, opt: true },
  {
    no: 5,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "client_commit", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "changes", kind: "message", T: ModelChange, repeated: true },
  { no: 9, name: "session_events", kind: "message", T: CppSessionEvent, repeated: true },
  {
    no: 11,
    name: "model_changes_may_be_out_of_order",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 12, name: "privacy_mode_status", kind: "enum", T: proto3.getEnumType(EditHistoryAppendChangesRequest_PrivacyModeStatus) },
  { no: 7, name: "events", kind: "message", T: CppHistoryAppendEvent, repeated: true },
  {
    no: 13,
    name: "time_origin",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
(function(EditHistoryAppendChangesRequest_PrivacyModeStatus2) {
  EditHistoryAppendChangesRequest_PrivacyModeStatus2[EditHistoryAppendChangesRequest_PrivacyModeStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EditHistoryAppendChangesRequest_PrivacyModeStatus2[EditHistoryAppendChangesRequest_PrivacyModeStatus2["PRIVACY_ENABLED"] = 1] = "PRIVACY_ENABLED";
  EditHistoryAppendChangesRequest_PrivacyModeStatus2[EditHistoryAppendChangesRequest_PrivacyModeStatus2["IMPLICIT_NO_PRIVACY"] = 2] = "IMPLICIT_NO_PRIVACY";
  EditHistoryAppendChangesRequest_PrivacyModeStatus2[EditHistoryAppendChangesRequest_PrivacyModeStatus2["EXPLICIT_NO_PRIVACY"] = 3] = "EXPLICIT_NO_PRIVACY";
})(EditHistoryAppendChangesRequest_PrivacyModeStatus! || (EditHistoryAppendChangesRequest_PrivacyModeStatus = {} as typeof EditHistoryAppendChangesRequest_PrivacyModeStatus));
proto3.util.setEnumType(EditHistoryAppendChangesRequest_PrivacyModeStatus, "aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus", [
  { no: 0, name: "PRIVACY_MODE_STATUS_UNSPECIFIED" },
  { no: 1, name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED" },
  { no: 2, name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY" },
  { no: 3, name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY" }
]);
var EditHistoryAppendChangesResponse$Runtime = (() => class _EditHistoryAppendChangesResponse extends Message<_EditHistoryAppendChangesResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_EditHistoryAppendChangesResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _EditHistoryAppendChangesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditHistoryAppendChangesResponse {
    return new _EditHistoryAppendChangesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditHistoryAppendChangesResponse {
    return new _EditHistoryAppendChangesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditHistoryAppendChangesResponse {
    return new _EditHistoryAppendChangesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _EditHistoryAppendChangesResponse | PlainMessage<_EditHistoryAppendChangesResponse> | undefined | null, b2: _EditHistoryAppendChangesResponse | PlainMessage<_EditHistoryAppendChangesResponse> | undefined | null): boolean {
    return proto3.util.equals(_EditHistoryAppendChangesResponse as unknown as MessageType<_EditHistoryAppendChangesResponse>, a, b2);
  }
})();
export type EditHistoryAppendChangesResponse = InstanceType<typeof EditHistoryAppendChangesResponse$Runtime>;
var EditHistoryAppendChangesResponse: MessageType<EditHistoryAppendChangesResponse> = EditHistoryAppendChangesResponse$Runtime as unknown as MessageType<EditHistoryAppendChangesResponse>;
(EditHistoryAppendChangesResponse as MutableMessageType<EditHistoryAppendChangesResponse>).runtime = proto3;
(EditHistoryAppendChangesResponse as MutableMessageType<EditHistoryAppendChangesResponse>).typeName = "aiserver.v1.EditHistoryAppendChangesResponse";
(EditHistoryAppendChangesResponse as MutableMessageType<EditHistoryAppendChangesResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CppEditHistoryStatusRequest$Runtime = (() => class _CppEditHistoryStatusRequest extends Message<_CppEditHistoryStatusRequest> {
  constructor(data?: PartialMessage<_CppEditHistoryStatusRequest>) {
    super();
    proto3.util.initPartial(data, this as _CppEditHistoryStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppEditHistoryStatusRequest {
    return new _CppEditHistoryStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppEditHistoryStatusRequest {
    return new _CppEditHistoryStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppEditHistoryStatusRequest {
    return new _CppEditHistoryStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _CppEditHistoryStatusRequest | PlainMessage<_CppEditHistoryStatusRequest> | undefined | null, b2: _CppEditHistoryStatusRequest | PlainMessage<_CppEditHistoryStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_CppEditHistoryStatusRequest as unknown as MessageType<_CppEditHistoryStatusRequest>, a, b2);
  }
})();
export type CppEditHistoryStatusRequest = InstanceType<typeof CppEditHistoryStatusRequest$Runtime>;
var CppEditHistoryStatusRequest: MessageType<CppEditHistoryStatusRequest> = CppEditHistoryStatusRequest$Runtime as unknown as MessageType<CppEditHistoryStatusRequest>;
(CppEditHistoryStatusRequest as MutableMessageType<CppEditHistoryStatusRequest>).runtime = proto3;
(CppEditHistoryStatusRequest as MutableMessageType<CppEditHistoryStatusRequest>).typeName = "aiserver.v1.CppEditHistoryStatusRequest";
(CppEditHistoryStatusRequest as MutableMessageType<CppEditHistoryStatusRequest>).fields = proto3.util.newFieldList(() => []);
var CppEditHistoryStatusResponse$Runtime = (() => class _CppEditHistoryStatusResponse extends Message<_CppEditHistoryStatusResponse> {
  declare on: boolean;
  declare onlyIfExplicit: boolean;
  constructor(data?: PartialMessage<_CppEditHistoryStatusResponse>) {
    super();
    this.on = false;
    this.onlyIfExplicit = false;
    proto3.util.initPartial(data, this as _CppEditHistoryStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppEditHistoryStatusResponse {
    return new _CppEditHistoryStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppEditHistoryStatusResponse {
    return new _CppEditHistoryStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppEditHistoryStatusResponse {
    return new _CppEditHistoryStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CppEditHistoryStatusResponse | PlainMessage<_CppEditHistoryStatusResponse> | undefined | null, b2: _CppEditHistoryStatusResponse | PlainMessage<_CppEditHistoryStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_CppEditHistoryStatusResponse as unknown as MessageType<_CppEditHistoryStatusResponse>, a, b2);
  }
})();
export type CppEditHistoryStatusResponse = InstanceType<typeof CppEditHistoryStatusResponse$Runtime>;
var CppEditHistoryStatusResponse: MessageType<CppEditHistoryStatusResponse> = CppEditHistoryStatusResponse$Runtime as unknown as MessageType<CppEditHistoryStatusResponse>;
(CppEditHistoryStatusResponse as MutableMessageType<CppEditHistoryStatusResponse>).runtime = proto3;
(CppEditHistoryStatusResponse as MutableMessageType<CppEditHistoryStatusResponse>).typeName = "aiserver.v1.CppEditHistoryStatusResponse";
(CppEditHistoryStatusResponse as MutableMessageType<CppEditHistoryStatusResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "on",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "only_if_explicit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var StartingModel$Runtime = (() => class _StartingModel extends Message<_StartingModel> {
  declare relativePath: string;
  declare startingContents: string;
  declare startingModelVersion?: number;
  declare beforeStartModelChanges: ModelChange[];
  declare clientVersion: string;
  declare clientCommit?: string;
  declare modelUuid: string;
  declare sessionId: string;
  declare uri: string;
  constructor(data?: PartialMessage<_StartingModel>) {
    super();
    this.relativePath = "";
    this.startingContents = "";
    this.beforeStartModelChanges = [];
    this.clientVersion = "";
    this.modelUuid = "";
    this.sessionId = "";
    this.uri = "";
    proto3.util.initPartial(data, this as _StartingModel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartingModel {
    return new _StartingModel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartingModel {
    return new _StartingModel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartingModel {
    return new _StartingModel().fromJsonString(jsonString, options);
  }
  static equals(a: _StartingModel | PlainMessage<_StartingModel> | undefined | null, b2: _StartingModel | PlainMessage<_StartingModel> | undefined | null): boolean {
    return proto3.util.equals(_StartingModel as unknown as MessageType<_StartingModel>, a, b2);
  }
})();
export type StartingModel = InstanceType<typeof StartingModel$Runtime>;
var StartingModel: MessageType<StartingModel> = StartingModel$Runtime as unknown as MessageType<StartingModel>;
(StartingModel as MutableMessageType<StartingModel>).runtime = proto3;
(StartingModel as MutableMessageType<StartingModel>).typeName = "aiserver.v1.StartingModel";
(StartingModel as MutableMessageType<StartingModel>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "starting_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "starting_model_version", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "before_start_model_changes", kind: "message", T: ModelChange, repeated: true },
  {
    no: 5,
    name: "client_version",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "client_commit", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BlockDiffPatch$Runtime = (() => class _BlockDiffPatch extends Message<_BlockDiffPatch> {
  declare startModelWindow?: BlockDiffPatch_ModelWindow;
  declare changes: BlockDiffPatch_Change[];
  declare relativePath: string;
  declare modelUuid: string;
  declare startFromChangeIndex: number;
  constructor(data?: PartialMessage<_BlockDiffPatch>) {
    super();
    this.changes = [];
    this.relativePath = "";
    this.modelUuid = "";
    this.startFromChangeIndex = 0;
    proto3.util.initPartial(data, this as _BlockDiffPatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlockDiffPatch {
    return new _BlockDiffPatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlockDiffPatch {
    return new _BlockDiffPatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlockDiffPatch {
    return new _BlockDiffPatch().fromJsonString(jsonString, options);
  }
  static equals(a: _BlockDiffPatch | PlainMessage<_BlockDiffPatch> | undefined | null, b2: _BlockDiffPatch | PlainMessage<_BlockDiffPatch> | undefined | null): boolean {
    return proto3.util.equals(_BlockDiffPatch as unknown as MessageType<_BlockDiffPatch>, a, b2);
  }
})();
export type BlockDiffPatch = InstanceType<typeof BlockDiffPatch$Runtime>;
var BlockDiffPatch: MessageType<BlockDiffPatch> = BlockDiffPatch$Runtime as unknown as MessageType<BlockDiffPatch>;
(BlockDiffPatch as MutableMessageType<BlockDiffPatch>).runtime = proto3;
(BlockDiffPatch as MutableMessageType<BlockDiffPatch>).typeName = "aiserver.v1.BlockDiffPatch";
(BlockDiffPatch as MutableMessageType<BlockDiffPatch>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "start_model_window", kind: "message", T: BlockDiffPatch_ModelWindow },
  { no: 3, name: "changes", kind: "message", T: BlockDiffPatch_Change, repeated: true },
  {
    no: 4,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "start_from_change_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var BlockDiffPatch_Change$Runtime = (() => class _BlockDiffPatch_Change extends Message<_BlockDiffPatch_Change> {
  declare text: string;
  declare range?: IRange;
  constructor(data?: PartialMessage<_BlockDiffPatch_Change>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _BlockDiffPatch_Change);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlockDiffPatch_Change {
    return new _BlockDiffPatch_Change().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlockDiffPatch_Change {
    return new _BlockDiffPatch_Change().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlockDiffPatch_Change {
    return new _BlockDiffPatch_Change().fromJsonString(jsonString, options);
  }
  static equals(a: _BlockDiffPatch_Change | PlainMessage<_BlockDiffPatch_Change> | undefined | null, b2: _BlockDiffPatch_Change | PlainMessage<_BlockDiffPatch_Change> | undefined | null): boolean {
    return proto3.util.equals(_BlockDiffPatch_Change as unknown as MessageType<_BlockDiffPatch_Change>, a, b2);
  }
})();
export type BlockDiffPatch_Change = InstanceType<typeof BlockDiffPatch_Change$Runtime>;
var BlockDiffPatch_Change: MessageType<BlockDiffPatch_Change> = BlockDiffPatch_Change$Runtime as unknown as MessageType<BlockDiffPatch_Change>;
(BlockDiffPatch_Change as MutableMessageType<BlockDiffPatch_Change>).runtime = proto3;
(BlockDiffPatch_Change as MutableMessageType<BlockDiffPatch_Change>).typeName = "aiserver.v1.BlockDiffPatch.Change";
(BlockDiffPatch_Change as MutableMessageType<BlockDiffPatch_Change>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: IRange }
]);
var BlockDiffPatch_ModelWindow$Runtime = (() => class _BlockDiffPatch_ModelWindow extends Message<_BlockDiffPatch_ModelWindow> {
  declare lines: string[];
  declare startLineNumber: number;
  declare endLineNumber: number;
  constructor(data?: PartialMessage<_BlockDiffPatch_ModelWindow>) {
    super();
    this.lines = [];
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    proto3.util.initPartial(data, this as _BlockDiffPatch_ModelWindow);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlockDiffPatch_ModelWindow {
    return new _BlockDiffPatch_ModelWindow().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlockDiffPatch_ModelWindow {
    return new _BlockDiffPatch_ModelWindow().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlockDiffPatch_ModelWindow {
    return new _BlockDiffPatch_ModelWindow().fromJsonString(jsonString, options);
  }
  static equals(a: _BlockDiffPatch_ModelWindow | PlainMessage<_BlockDiffPatch_ModelWindow> | undefined | null, b2: _BlockDiffPatch_ModelWindow | PlainMessage<_BlockDiffPatch_ModelWindow> | undefined | null): boolean {
    return proto3.util.equals(_BlockDiffPatch_ModelWindow as unknown as MessageType<_BlockDiffPatch_ModelWindow>, a, b2);
  }
})();
export type BlockDiffPatch_ModelWindow = InstanceType<typeof BlockDiffPatch_ModelWindow$Runtime>;
var BlockDiffPatch_ModelWindow: MessageType<BlockDiffPatch_ModelWindow> = BlockDiffPatch_ModelWindow$Runtime as unknown as MessageType<BlockDiffPatch_ModelWindow>;
(BlockDiffPatch_ModelWindow as MutableMessageType<BlockDiffPatch_ModelWindow>).runtime = proto3;
(BlockDiffPatch_ModelWindow as MutableMessageType<BlockDiffPatch_ModelWindow>).typeName = "aiserver.v1.BlockDiffPatch.ModelWindow";
(BlockDiffPatch_ModelWindow as MutableMessageType<BlockDiffPatch_ModelWindow>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CppHistoryAppendEvent$Runtime = (() => class _CppHistoryAppendEvent extends Message<_CppHistoryAppendEvent> {
  declare finalModelHash?: string;
  declare event: { case: "modelChange"; value: ModelChange } | { case: "acceptEvent"; value: CppAcceptEvent } | { case: "rejectEvent"; value: CppRejectEvent } | { case: "manualTriggerEvent"; value: CppManualTriggerEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CppHistoryAppendEvent>) {
    super();
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _CppHistoryAppendEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppHistoryAppendEvent {
    return new _CppHistoryAppendEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppHistoryAppendEvent {
    return new _CppHistoryAppendEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppHistoryAppendEvent {
    return new _CppHistoryAppendEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppHistoryAppendEvent | PlainMessage<_CppHistoryAppendEvent> | undefined | null, b2: _CppHistoryAppendEvent | PlainMessage<_CppHistoryAppendEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppHistoryAppendEvent as unknown as MessageType<_CppHistoryAppendEvent>, a, b2);
  }
})();
export type CppHistoryAppendEvent = InstanceType<typeof CppHistoryAppendEvent$Runtime>;
var CppHistoryAppendEvent: MessageType<CppHistoryAppendEvent> = CppHistoryAppendEvent$Runtime as unknown as MessageType<CppHistoryAppendEvent>;
(CppHistoryAppendEvent as MutableMessageType<CppHistoryAppendEvent>).runtime = proto3;
(CppHistoryAppendEvent as MutableMessageType<CppHistoryAppendEvent>).typeName = "aiserver.v1.CppHistoryAppendEvent";
(CppHistoryAppendEvent as MutableMessageType<CppHistoryAppendEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model_change", kind: "message", T: ModelChange, oneof: "event" },
  { no: 2, name: "accept_event", kind: "message", T: CppAcceptEvent, oneof: "event" },
  { no: 3, name: "reject_event", kind: "message", T: CppRejectEvent, oneof: "event" },
  { no: 4, name: "manual_trigger_event", kind: "message", T: CppManualTriggerEvent, oneof: "event" },
  { no: 10, name: "final_model_hash", kind: "scalar", T: 9, opt: true }
]);
var CppManualTriggerEvent$Runtime = (() => class _CppManualTriggerEvent extends Message<_CppManualTriggerEvent> {
  declare position?: CursorPosition;
  constructor(data?: PartialMessage<_CppManualTriggerEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppManualTriggerEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppManualTriggerEvent {
    return new _CppManualTriggerEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppManualTriggerEvent {
    return new _CppManualTriggerEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppManualTriggerEvent {
    return new _CppManualTriggerEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppManualTriggerEvent | PlainMessage<_CppManualTriggerEvent> | undefined | null, b2: _CppManualTriggerEvent | PlainMessage<_CppManualTriggerEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppManualTriggerEvent as unknown as MessageType<_CppManualTriggerEvent>, a, b2);
  }
})();
export type CppManualTriggerEvent = InstanceType<typeof CppManualTriggerEvent$Runtime>;
var CppManualTriggerEvent: MessageType<CppManualTriggerEvent> = CppManualTriggerEvent$Runtime as unknown as MessageType<CppManualTriggerEvent>;
(CppManualTriggerEvent as MutableMessageType<CppManualTriggerEvent>).runtime = proto3;
(CppManualTriggerEvent as MutableMessageType<CppManualTriggerEvent>).typeName = "aiserver.v1.CppManualTriggerEvent";
(CppManualTriggerEvent as MutableMessageType<CppManualTriggerEvent>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "position", kind: "message", T: CursorPosition }
]);
var CppAcceptEvent$Runtime = (() => class _CppAcceptEvent extends Message<_CppAcceptEvent> {
  declare cppSuggestion?: CppSuggestion;
  constructor(data?: PartialMessage<_CppAcceptEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppAcceptEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppAcceptEvent {
    return new _CppAcceptEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppAcceptEvent {
    return new _CppAcceptEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppAcceptEvent {
    return new _CppAcceptEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppAcceptEvent | PlainMessage<_CppAcceptEvent> | undefined | null, b2: _CppAcceptEvent | PlainMessage<_CppAcceptEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppAcceptEvent as unknown as MessageType<_CppAcceptEvent>, a, b2);
  }
})();
export type CppAcceptEvent = InstanceType<typeof CppAcceptEvent$Runtime>;
var CppAcceptEvent: MessageType<CppAcceptEvent> = CppAcceptEvent$Runtime as unknown as MessageType<CppAcceptEvent>;
(CppAcceptEvent as MutableMessageType<CppAcceptEvent>).runtime = proto3;
(CppAcceptEvent as MutableMessageType<CppAcceptEvent>).typeName = "aiserver.v1.CppAcceptEvent";
(CppAcceptEvent as MutableMessageType<CppAcceptEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CppSuggestion }
]);
var CppRejectEvent$Runtime = (() => class _CppRejectEvent extends Message<_CppRejectEvent> {
  declare cppSuggestion?: CppSuggestion;
  constructor(data?: PartialMessage<_CppRejectEvent>) {
    super();
    proto3.util.initPartial(data, this as _CppRejectEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppRejectEvent {
    return new _CppRejectEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppRejectEvent {
    return new _CppRejectEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppRejectEvent {
    return new _CppRejectEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppRejectEvent | PlainMessage<_CppRejectEvent> | undefined | null, b2: _CppRejectEvent | PlainMessage<_CppRejectEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppRejectEvent as unknown as MessageType<_CppRejectEvent>, a, b2);
  }
})();
export type CppRejectEvent = InstanceType<typeof CppRejectEvent$Runtime>;
var CppRejectEvent: MessageType<CppRejectEvent> = CppRejectEvent$Runtime as unknown as MessageType<CppRejectEvent>;
(CppRejectEvent as MutableMessageType<CppRejectEvent>).runtime = proto3;
(CppRejectEvent as MutableMessageType<CppRejectEvent>).typeName = "aiserver.v1.CppRejectEvent";
(CppRejectEvent as MutableMessageType<CppRejectEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_suggestion", kind: "message", T: CppSuggestion }
]);
var CppSuggestion$Runtime = (() => class _CppSuggestion extends Message<_CppSuggestion> {
  declare suggestionText: string;
  declare range?: IRange;
  declare seen: boolean;
  declare editorSelectionBeforePeek?: SelectionWithOrientation;
  declare bindingId?: string;
  constructor(data?: PartialMessage<_CppSuggestion>) {
    super();
    this.suggestionText = "";
    this.seen = false;
    proto3.util.initPartial(data, this as _CppSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppSuggestion {
    return new _CppSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppSuggestion {
    return new _CppSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppSuggestion {
    return new _CppSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _CppSuggestion | PlainMessage<_CppSuggestion> | undefined | null, b2: _CppSuggestion | PlainMessage<_CppSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_CppSuggestion as unknown as MessageType<_CppSuggestion>, a, b2);
  }
})();
export type CppSuggestion = InstanceType<typeof CppSuggestion$Runtime>;
var CppSuggestion: MessageType<CppSuggestion> = CppSuggestion$Runtime as unknown as MessageType<CppSuggestion>;
(CppSuggestion as MutableMessageType<CppSuggestion>).runtime = proto3;
(CppSuggestion as MutableMessageType<CppSuggestion>).typeName = "aiserver.v1.CppSuggestion";
(CppSuggestion as MutableMessageType<CppSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "suggestion_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: IRange },
  {
    no: 5,
    name: "seen",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "editor_selection_before_peek", kind: "message", T: SelectionWithOrientation },
  { no: 7, name: "binding_id", kind: "scalar", T: 9, opt: true }
]);
var ModelWithHistory$Runtime = (() => class _ModelWithHistory extends Message<_ModelWithHistory> {
  declare changes: ModelChange[];
  declare modelUuid: string;
  declare startingModel?: StartingModel;
  declare numCorrectChanges: number;
  declare numUnvalidatedChanges: number;
  declare numIncorrectChanges: number;
  declare beforeStartModelChanges: ModelChange[];
  declare startingPerformanceNowTimestamp?: number;
  constructor(data?: PartialMessage<_ModelWithHistory>) {
    super();
    this.changes = [];
    this.modelUuid = "";
    this.numCorrectChanges = 0;
    this.numUnvalidatedChanges = 0;
    this.numIncorrectChanges = 0;
    this.beforeStartModelChanges = [];
    proto3.util.initPartial(data, this as _ModelWithHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelWithHistory {
    return new _ModelWithHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelWithHistory {
    return new _ModelWithHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelWithHistory {
    return new _ModelWithHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelWithHistory | PlainMessage<_ModelWithHistory> | undefined | null, b2: _ModelWithHistory | PlainMessage<_ModelWithHistory> | undefined | null): boolean {
    return proto3.util.equals(_ModelWithHistory as unknown as MessageType<_ModelWithHistory>, a, b2);
  }
})();
export type ModelWithHistory = InstanceType<typeof ModelWithHistory$Runtime>;
var ModelWithHistory: MessageType<ModelWithHistory> = ModelWithHistory$Runtime as unknown as MessageType<ModelWithHistory>;
(ModelWithHistory as MutableMessageType<ModelWithHistory>).runtime = proto3;
(ModelWithHistory as MutableMessageType<ModelWithHistory>).typeName = "aiserver.v1.ModelWithHistory";
(ModelWithHistory as MutableMessageType<ModelWithHistory>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "changes", kind: "message", T: ModelChange, repeated: true },
  {
    no: 2,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "starting_model", kind: "message", T: StartingModel },
  {
    no: 4,
    name: "num_correct_changes",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "num_unvalidated_changes",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "num_incorrect_changes",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 7, name: "before_start_model_changes", kind: "message", T: ModelChange, repeated: true },
  { no: 8, name: "starting_performance_now_timestamp", kind: "scalar", T: 1, opt: true }
]);
var CppTimelineEvent$Runtime = (() => class _CppTimelineEvent extends Message<_CppTimelineEvent> {
  declare timestamp: number;
  declare v: { case: "event"; value: CppSessionEvent } | { case: "change"; value: CppTimelineEvent_Change } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CppTimelineEvent>) {
    super();
    this.timestamp = 0;
    this.v = { case: void 0 };
    proto3.util.initPartial(data, this as _CppTimelineEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppTimelineEvent {
    return new _CppTimelineEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppTimelineEvent {
    return new _CppTimelineEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppTimelineEvent {
    return new _CppTimelineEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _CppTimelineEvent | PlainMessage<_CppTimelineEvent> | undefined | null, b2: _CppTimelineEvent | PlainMessage<_CppTimelineEvent> | undefined | null): boolean {
    return proto3.util.equals(_CppTimelineEvent as unknown as MessageType<_CppTimelineEvent>, a, b2);
  }
})();
export type CppTimelineEvent = InstanceType<typeof CppTimelineEvent$Runtime>;
var CppTimelineEvent: MessageType<CppTimelineEvent> = CppTimelineEvent$Runtime as unknown as MessageType<CppTimelineEvent>;
(CppTimelineEvent as MutableMessageType<CppTimelineEvent>).runtime = proto3;
(CppTimelineEvent as MutableMessageType<CppTimelineEvent>).typeName = "aiserver.v1.CppTimelineEvent";
(CppTimelineEvent as MutableMessageType<CppTimelineEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 2, name: "event", kind: "message", T: CppSessionEvent, oneof: "v" },
  { no: 3, name: "change", kind: "message", T: CppTimelineEvent_Change, oneof: "v" }
]);
var CppTimelineEvent_Change$Runtime = (() => class _CppTimelineEvent_Change extends Message<_CppTimelineEvent_Change> {
  declare modelUuid: string;
  declare changeIndex: number;
  declare change?: ModelChange;
  declare status: CppTimelineEvent_Change_Status;
  constructor(data?: PartialMessage<_CppTimelineEvent_Change>) {
    super();
    this.modelUuid = "";
    this.changeIndex = 0;
    this.status = CppTimelineEvent_Change_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CppTimelineEvent_Change);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CppTimelineEvent_Change {
    return new _CppTimelineEvent_Change().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CppTimelineEvent_Change {
    return new _CppTimelineEvent_Change().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CppTimelineEvent_Change {
    return new _CppTimelineEvent_Change().fromJsonString(jsonString, options);
  }
  static equals(a: _CppTimelineEvent_Change | PlainMessage<_CppTimelineEvent_Change> | undefined | null, b2: _CppTimelineEvent_Change | PlainMessage<_CppTimelineEvent_Change> | undefined | null): boolean {
    return proto3.util.equals(_CppTimelineEvent_Change as unknown as MessageType<_CppTimelineEvent_Change>, a, b2);
  }
})();
export type CppTimelineEvent_Change = InstanceType<typeof CppTimelineEvent_Change$Runtime>;
var CppTimelineEvent_Change: MessageType<CppTimelineEvent_Change> = CppTimelineEvent_Change$Runtime as unknown as MessageType<CppTimelineEvent_Change>;
(CppTimelineEvent_Change as MutableMessageType<CppTimelineEvent_Change>).runtime = proto3;
(CppTimelineEvent_Change as MutableMessageType<CppTimelineEvent_Change>).typeName = "aiserver.v1.CppTimelineEvent.Change";
(CppTimelineEvent_Change as MutableMessageType<CppTimelineEvent_Change>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "change_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "change", kind: "message", T: ModelChange },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(CppTimelineEvent_Change_Status) }
]);
(function(CppTimelineEvent_Change_Status2) {
  CppTimelineEvent_Change_Status2[CppTimelineEvent_Change_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CppTimelineEvent_Change_Status2[CppTimelineEvent_Change_Status2["CORRECT"] = 1] = "CORRECT";
  CppTimelineEvent_Change_Status2[CppTimelineEvent_Change_Status2["UNVALIDATED"] = 2] = "UNVALIDATED";
  CppTimelineEvent_Change_Status2[CppTimelineEvent_Change_Status2["INCORRECT"] = 3] = "INCORRECT";
})(CppTimelineEvent_Change_Status! || (CppTimelineEvent_Change_Status = {} as typeof CppTimelineEvent_Change_Status));
proto3.util.setEnumType(CppTimelineEvent_Change_Status, "aiserver.v1.CppTimelineEvent.Change.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_CORRECT" },
  { no: 2, name: "STATUS_UNVALIDATED" },
  { no: 3, name: "STATUS_INCORRECT" }
]);
var TerminalEvent$Runtime = (() => class _TerminalEvent extends Message<_TerminalEvent> {
  declare uri: string;
  declare event: { case: "create"; value: TerminalEvent_Create } | { case: "exit"; value: TerminalEvent_Exit } | { case: "commandStart"; value: TerminalEvent_CommandStart } | { case: "commandFinish"; value: TerminalEvent_CommandFinish } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TerminalEvent>) {
    super();
    this.uri = "";
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _TerminalEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalEvent {
    return new _TerminalEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalEvent {
    return new _TerminalEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalEvent {
    return new _TerminalEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalEvent | PlainMessage<_TerminalEvent> | undefined | null, b2: _TerminalEvent | PlainMessage<_TerminalEvent> | undefined | null): boolean {
    return proto3.util.equals(_TerminalEvent as unknown as MessageType<_TerminalEvent>, a, b2);
  }
})();
export type TerminalEvent = InstanceType<typeof TerminalEvent$Runtime>;
var TerminalEvent: MessageType<TerminalEvent> = TerminalEvent$Runtime as unknown as MessageType<TerminalEvent>;
(TerminalEvent as MutableMessageType<TerminalEvent>).runtime = proto3;
(TerminalEvent as MutableMessageType<TerminalEvent>).typeName = "aiserver.v1.TerminalEvent";
(TerminalEvent as MutableMessageType<TerminalEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "create", kind: "message", T: TerminalEvent_Create, oneof: "event" },
  { no: 3, name: "exit", kind: "message", T: TerminalEvent_Exit, oneof: "event" },
  { no: 4, name: "command_start", kind: "message", T: TerminalEvent_CommandStart, oneof: "event" },
  { no: 5, name: "command_finish", kind: "message", T: TerminalEvent_CommandFinish, oneof: "event" }
]);
var TerminalEvent_Create$Runtime = (() => class _TerminalEvent_Create extends Message<_TerminalEvent_Create> {
  declare isRemote: boolean;
  constructor(data?: PartialMessage<_TerminalEvent_Create>) {
    super();
    this.isRemote = false;
    proto3.util.initPartial(data, this as _TerminalEvent_Create);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalEvent_Create {
    return new _TerminalEvent_Create().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalEvent_Create {
    return new _TerminalEvent_Create().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalEvent_Create {
    return new _TerminalEvent_Create().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalEvent_Create | PlainMessage<_TerminalEvent_Create> | undefined | null, b2: _TerminalEvent_Create | PlainMessage<_TerminalEvent_Create> | undefined | null): boolean {
    return proto3.util.equals(_TerminalEvent_Create as unknown as MessageType<_TerminalEvent_Create>, a, b2);
  }
})();
export type TerminalEvent_Create = InstanceType<typeof TerminalEvent_Create$Runtime>;
var TerminalEvent_Create: MessageType<TerminalEvent_Create> = TerminalEvent_Create$Runtime as unknown as MessageType<TerminalEvent_Create>;
(TerminalEvent_Create as MutableMessageType<TerminalEvent_Create>).runtime = proto3;
(TerminalEvent_Create as MutableMessageType<TerminalEvent_Create>).typeName = "aiserver.v1.TerminalEvent.Create";
(TerminalEvent_Create as MutableMessageType<TerminalEvent_Create>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_remote",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TerminalEvent_Exit$Runtime = (() => class _TerminalEvent_Exit extends Message<_TerminalEvent_Exit> {
  declare exitCode?: number;
  constructor(data?: PartialMessage<_TerminalEvent_Exit>) {
    super();
    proto3.util.initPartial(data, this as _TerminalEvent_Exit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalEvent_Exit {
    return new _TerminalEvent_Exit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalEvent_Exit {
    return new _TerminalEvent_Exit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalEvent_Exit {
    return new _TerminalEvent_Exit().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalEvent_Exit | PlainMessage<_TerminalEvent_Exit> | undefined | null, b2: _TerminalEvent_Exit | PlainMessage<_TerminalEvent_Exit> | undefined | null): boolean {
    return proto3.util.equals(_TerminalEvent_Exit as unknown as MessageType<_TerminalEvent_Exit>, a, b2);
  }
})();
export type TerminalEvent_Exit = InstanceType<typeof TerminalEvent_Exit$Runtime>;
var TerminalEvent_Exit: MessageType<TerminalEvent_Exit> = TerminalEvent_Exit$Runtime as unknown as MessageType<TerminalEvent_Exit>;
(TerminalEvent_Exit as MutableMessageType<TerminalEvent_Exit>).runtime = proto3;
(TerminalEvent_Exit as MutableMessageType<TerminalEvent_Exit>).typeName = "aiserver.v1.TerminalEvent.Exit";
(TerminalEvent_Exit as MutableMessageType<TerminalEvent_Exit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "exit_code", kind: "scalar", T: 5, opt: true }
]);
var TerminalEvent_CommandStart$Runtime = (() => class _TerminalEvent_CommandStart extends Message<_TerminalEvent_CommandStart> {
  declare pointInTimeModel?: PointInTimeModel;
  declare cwd?: string;
  constructor(data?: PartialMessage<_TerminalEvent_CommandStart>) {
    super();
    proto3.util.initPartial(data, this as _TerminalEvent_CommandStart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalEvent_CommandStart {
    return new _TerminalEvent_CommandStart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalEvent_CommandStart {
    return new _TerminalEvent_CommandStart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalEvent_CommandStart {
    return new _TerminalEvent_CommandStart().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalEvent_CommandStart | PlainMessage<_TerminalEvent_CommandStart> | undefined | null, b2: _TerminalEvent_CommandStart | PlainMessage<_TerminalEvent_CommandStart> | undefined | null): boolean {
    return proto3.util.equals(_TerminalEvent_CommandStart as unknown as MessageType<_TerminalEvent_CommandStart>, a, b2);
  }
})();
export type TerminalEvent_CommandStart = InstanceType<typeof TerminalEvent_CommandStart$Runtime>;
var TerminalEvent_CommandStart: MessageType<TerminalEvent_CommandStart> = TerminalEvent_CommandStart$Runtime as unknown as MessageType<TerminalEvent_CommandStart>;
(TerminalEvent_CommandStart as MutableMessageType<TerminalEvent_CommandStart>).runtime = proto3;
(TerminalEvent_CommandStart as MutableMessageType<TerminalEvent_CommandStart>).typeName = "aiserver.v1.TerminalEvent.CommandStart";
(TerminalEvent_CommandStart as MutableMessageType<TerminalEvent_CommandStart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true }
]);
var TerminalEvent_CommandFinish$Runtime = (() => class _TerminalEvent_CommandFinish extends Message<_TerminalEvent_CommandFinish> {
  declare pointInTimeModel?: PointInTimeModel;
  declare exitCode?: number;
  constructor(data?: PartialMessage<_TerminalEvent_CommandFinish>) {
    super();
    proto3.util.initPartial(data, this as _TerminalEvent_CommandFinish);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalEvent_CommandFinish {
    return new _TerminalEvent_CommandFinish().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalEvent_CommandFinish {
    return new _TerminalEvent_CommandFinish().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalEvent_CommandFinish {
    return new _TerminalEvent_CommandFinish().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalEvent_CommandFinish | PlainMessage<_TerminalEvent_CommandFinish> | undefined | null, b2: _TerminalEvent_CommandFinish | PlainMessage<_TerminalEvent_CommandFinish> | undefined | null): boolean {
    return proto3.util.equals(_TerminalEvent_CommandFinish as unknown as MessageType<_TerminalEvent_CommandFinish>, a, b2);
  }
})();
export type TerminalEvent_CommandFinish = InstanceType<typeof TerminalEvent_CommandFinish$Runtime>;
var TerminalEvent_CommandFinish: MessageType<TerminalEvent_CommandFinish> = TerminalEvent_CommandFinish$Runtime as unknown as MessageType<TerminalEvent_CommandFinish>;
(TerminalEvent_CommandFinish as MutableMessageType<TerminalEvent_CommandFinish>).runtime = proto3;
(TerminalEvent_CommandFinish as MutableMessageType<TerminalEvent_CommandFinish>).typeName = "aiserver.v1.TerminalEvent.CommandFinish";
(TerminalEvent_CommandFinish as MutableMessageType<TerminalEvent_CommandFinish>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "point_in_time_model", kind: "message", T: PointInTimeModel },
  { no: 2, name: "exit_code", kind: "scalar", T: 5, opt: true }
]);
var BrowserEvent$Runtime = (() => class _BrowserEvent extends Message<_BrowserEvent> {
  declare viewId: string;
  declare event: { case: "tabCreated"; value: BrowserEvent_TabCreated } | { case: "tabClosed"; value: BrowserEvent_TabClosed } | { case: "navigation"; value: BrowserEvent_Navigation } | { case: "toolAction"; value: BrowserEvent_ToolAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BrowserEvent>) {
    super();
    this.viewId = "";
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _BrowserEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BrowserEvent {
    return new _BrowserEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BrowserEvent {
    return new _BrowserEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BrowserEvent {
    return new _BrowserEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _BrowserEvent | PlainMessage<_BrowserEvent> | undefined | null, b2: _BrowserEvent | PlainMessage<_BrowserEvent> | undefined | null): boolean {
    return proto3.util.equals(_BrowserEvent as unknown as MessageType<_BrowserEvent>, a, b2);
  }
})();
export type BrowserEvent = InstanceType<typeof BrowserEvent$Runtime>;
var BrowserEvent: MessageType<BrowserEvent> = BrowserEvent$Runtime as unknown as MessageType<BrowserEvent>;
(BrowserEvent as MutableMessageType<BrowserEvent>).runtime = proto3;
(BrowserEvent as MutableMessageType<BrowserEvent>).typeName = "aiserver.v1.BrowserEvent";
(BrowserEvent as MutableMessageType<BrowserEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "view_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tab_created", kind: "message", T: BrowserEvent_TabCreated, oneof: "event" },
  { no: 3, name: "tab_closed", kind: "message", T: BrowserEvent_TabClosed, oneof: "event" },
  { no: 4, name: "navigation", kind: "message", T: BrowserEvent_Navigation, oneof: "event" },
  { no: 5, name: "tool_action", kind: "message", T: BrowserEvent_ToolAction, oneof: "event" }
]);
var BrowserEvent_TabCreated$Runtime = (() => class _BrowserEvent_TabCreated extends Message<_BrowserEvent_TabCreated> {
  constructor(data?: PartialMessage<_BrowserEvent_TabCreated>) {
    super();
    proto3.util.initPartial(data, this as _BrowserEvent_TabCreated);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BrowserEvent_TabCreated {
    return new _BrowserEvent_TabCreated().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BrowserEvent_TabCreated {
    return new _BrowserEvent_TabCreated().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BrowserEvent_TabCreated {
    return new _BrowserEvent_TabCreated().fromJsonString(jsonString, options);
  }
  static equals(a: _BrowserEvent_TabCreated | PlainMessage<_BrowserEvent_TabCreated> | undefined | null, b2: _BrowserEvent_TabCreated | PlainMessage<_BrowserEvent_TabCreated> | undefined | null): boolean {
    return proto3.util.equals(_BrowserEvent_TabCreated as unknown as MessageType<_BrowserEvent_TabCreated>, a, b2);
  }
})();
export type BrowserEvent_TabCreated = InstanceType<typeof BrowserEvent_TabCreated$Runtime>;
var BrowserEvent_TabCreated: MessageType<BrowserEvent_TabCreated> = BrowserEvent_TabCreated$Runtime as unknown as MessageType<BrowserEvent_TabCreated>;
(BrowserEvent_TabCreated as MutableMessageType<BrowserEvent_TabCreated>).runtime = proto3;
(BrowserEvent_TabCreated as MutableMessageType<BrowserEvent_TabCreated>).typeName = "aiserver.v1.BrowserEvent.TabCreated";
(BrowserEvent_TabCreated as MutableMessageType<BrowserEvent_TabCreated>).fields = proto3.util.newFieldList(() => []);
var BrowserEvent_TabClosed$Runtime = (() => class _BrowserEvent_TabClosed extends Message<_BrowserEvent_TabClosed> {
  constructor(data?: PartialMessage<_BrowserEvent_TabClosed>) {
    super();
    proto3.util.initPartial(data, this as _BrowserEvent_TabClosed);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BrowserEvent_TabClosed {
    return new _BrowserEvent_TabClosed().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BrowserEvent_TabClosed {
    return new _BrowserEvent_TabClosed().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BrowserEvent_TabClosed {
    return new _BrowserEvent_TabClosed().fromJsonString(jsonString, options);
  }
  static equals(a: _BrowserEvent_TabClosed | PlainMessage<_BrowserEvent_TabClosed> | undefined | null, b2: _BrowserEvent_TabClosed | PlainMessage<_BrowserEvent_TabClosed> | undefined | null): boolean {
    return proto3.util.equals(_BrowserEvent_TabClosed as unknown as MessageType<_BrowserEvent_TabClosed>, a, b2);
  }
})();
export type BrowserEvent_TabClosed = InstanceType<typeof BrowserEvent_TabClosed$Runtime>;
var BrowserEvent_TabClosed: MessageType<BrowserEvent_TabClosed> = BrowserEvent_TabClosed$Runtime as unknown as MessageType<BrowserEvent_TabClosed>;
(BrowserEvent_TabClosed as MutableMessageType<BrowserEvent_TabClosed>).runtime = proto3;
(BrowserEvent_TabClosed as MutableMessageType<BrowserEvent_TabClosed>).typeName = "aiserver.v1.BrowserEvent.TabClosed";
(BrowserEvent_TabClosed as MutableMessageType<BrowserEvent_TabClosed>).fields = proto3.util.newFieldList(() => []);
var BrowserEvent_Navigation$Runtime = (() => class _BrowserEvent_Navigation extends Message<_BrowserEvent_Navigation> {
  declare url: string;
  declare title?: string;
  constructor(data?: PartialMessage<_BrowserEvent_Navigation>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _BrowserEvent_Navigation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BrowserEvent_Navigation {
    return new _BrowserEvent_Navigation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BrowserEvent_Navigation {
    return new _BrowserEvent_Navigation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BrowserEvent_Navigation {
    return new _BrowserEvent_Navigation().fromJsonString(jsonString, options);
  }
  static equals(a: _BrowserEvent_Navigation | PlainMessage<_BrowserEvent_Navigation> | undefined | null, b2: _BrowserEvent_Navigation | PlainMessage<_BrowserEvent_Navigation> | undefined | null): boolean {
    return proto3.util.equals(_BrowserEvent_Navigation as unknown as MessageType<_BrowserEvent_Navigation>, a, b2);
  }
})();
export type BrowserEvent_Navigation = InstanceType<typeof BrowserEvent_Navigation$Runtime>;
var BrowserEvent_Navigation: MessageType<BrowserEvent_Navigation> = BrowserEvent_Navigation$Runtime as unknown as MessageType<BrowserEvent_Navigation>;
(BrowserEvent_Navigation as MutableMessageType<BrowserEvent_Navigation>).runtime = proto3;
(BrowserEvent_Navigation as MutableMessageType<BrowserEvent_Navigation>).typeName = "aiserver.v1.BrowserEvent.Navigation";
(BrowserEvent_Navigation as MutableMessageType<BrowserEvent_Navigation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "title", kind: "scalar", T: 9, opt: true }
]);
var BrowserEvent_ToolAction$Runtime = (() => class _BrowserEvent_ToolAction extends Message<_BrowserEvent_ToolAction> {
  declare toolName: string;
  declare argsJson: string;
  declare success?: boolean;
  declare postSnapshotYaml?: string;
  declare postUrl?: string;
  declare postTitle?: string;
  declare source: BrowserEvent_ToolAction_Source;
  constructor(data?: PartialMessage<_BrowserEvent_ToolAction>) {
    super();
    this.toolName = "";
    this.argsJson = "";
    this.source = BrowserEvent_ToolAction_Source.UNSPECIFIED;
    proto3.util.initPartial(data, this as _BrowserEvent_ToolAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BrowserEvent_ToolAction {
    return new _BrowserEvent_ToolAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BrowserEvent_ToolAction {
    return new _BrowserEvent_ToolAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BrowserEvent_ToolAction {
    return new _BrowserEvent_ToolAction().fromJsonString(jsonString, options);
  }
  static equals(a: _BrowserEvent_ToolAction | PlainMessage<_BrowserEvent_ToolAction> | undefined | null, b2: _BrowserEvent_ToolAction | PlainMessage<_BrowserEvent_ToolAction> | undefined | null): boolean {
    return proto3.util.equals(_BrowserEvent_ToolAction as unknown as MessageType<_BrowserEvent_ToolAction>, a, b2);
  }
})();
export type BrowserEvent_ToolAction = InstanceType<typeof BrowserEvent_ToolAction$Runtime>;
var BrowserEvent_ToolAction: MessageType<BrowserEvent_ToolAction> = BrowserEvent_ToolAction$Runtime as unknown as MessageType<BrowserEvent_ToolAction>;
(BrowserEvent_ToolAction as MutableMessageType<BrowserEvent_ToolAction>).runtime = proto3;
(BrowserEvent_ToolAction as MutableMessageType<BrowserEvent_ToolAction>).typeName = "aiserver.v1.BrowserEvent.ToolAction";
(BrowserEvent_ToolAction as MutableMessageType<BrowserEvent_ToolAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "args_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "success", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "post_snapshot_yaml", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "post_url", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "post_title", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "source", kind: "enum", T: proto3.getEnumType(BrowserEvent_ToolAction_Source) }
]);
(function(BrowserEvent_ToolAction_Source2) {
  BrowserEvent_ToolAction_Source2[BrowserEvent_ToolAction_Source2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BrowserEvent_ToolAction_Source2[BrowserEvent_ToolAction_Source2["MCP_TOOL"] = 1] = "MCP_TOOL";
  BrowserEvent_ToolAction_Source2[BrowserEvent_ToolAction_Source2["MANUAL_USER"] = 2] = "MANUAL_USER";
})(BrowserEvent_ToolAction_Source! || (BrowserEvent_ToolAction_Source = {} as typeof BrowserEvent_ToolAction_Source));
proto3.util.setEnumType(BrowserEvent_ToolAction_Source, "aiserver.v1.BrowserEvent.ToolAction.Source", [
  { no: 0, name: "SOURCE_UNSPECIFIED" },
  { no: 1, name: "SOURCE_MCP_TOOL" },
  { no: 2, name: "SOURCE_MANUAL_USER" }
]);
var NtpEvent$Runtime = (() => class _NtpEvent extends Message<_NtpEvent> {
  declare originateTimestamp: number;
  declare receiveTimestamp: number;
  declare transmitTimestamp: number;
  declare destinationTimestamp: number;
  constructor(data?: PartialMessage<_NtpEvent>) {
    super();
    this.originateTimestamp = 0;
    this.receiveTimestamp = 0;
    this.transmitTimestamp = 0;
    this.destinationTimestamp = 0;
    proto3.util.initPartial(data, this as _NtpEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NtpEvent {
    return new _NtpEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NtpEvent {
    return new _NtpEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NtpEvent {
    return new _NtpEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _NtpEvent | PlainMessage<_NtpEvent> | undefined | null, b2: _NtpEvent | PlainMessage<_NtpEvent> | undefined | null): boolean {
    return proto3.util.equals(_NtpEvent as unknown as MessageType<_NtpEvent>, a, b2);
  }
})();
export type NtpEvent = InstanceType<typeof NtpEvent$Runtime>;
var NtpEvent: MessageType<NtpEvent> = NtpEvent$Runtime as unknown as MessageType<NtpEvent>;
(NtpEvent as MutableMessageType<NtpEvent>).runtime = proto3;
(NtpEvent as MutableMessageType<NtpEvent>).typeName = "aiserver.v1.NtpEvent";
(NtpEvent as MutableMessageType<NtpEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "originate_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 2,
    name: "receive_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "transmit_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 4,
    name: "destination_timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var RepoEvent$Runtime = (() => class _RepoEvent extends Message<_RepoEvent> {
  declare repoOwner: string;
  declare repoName: string;
  declare eventType: RepoEvent_Type;
  constructor(data?: PartialMessage<_RepoEvent>) {
    super();
    this.repoOwner = "";
    this.repoName = "";
    this.eventType = RepoEvent_Type.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RepoEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoEvent {
    return new _RepoEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoEvent {
    return new _RepoEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoEvent {
    return new _RepoEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoEvent | PlainMessage<_RepoEvent> | undefined | null, b2: _RepoEvent | PlainMessage<_RepoEvent> | undefined | null): boolean {
    return proto3.util.equals(_RepoEvent as unknown as MessageType<_RepoEvent>, a, b2);
  }
})();
export type RepoEvent = InstanceType<typeof RepoEvent$Runtime>;
var RepoEvent: MessageType<RepoEvent> = RepoEvent$Runtime as unknown as MessageType<RepoEvent>;
(RepoEvent as MutableMessageType<RepoEvent>).runtime = proto3;
(RepoEvent as MutableMessageType<RepoEvent>).typeName = "aiserver.v1.RepoEvent";
(RepoEvent as MutableMessageType<RepoEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "event_type", kind: "enum", T: proto3.getEnumType(RepoEvent_Type) }
]);
(function(RepoEvent_Type2) {
  RepoEvent_Type2[RepoEvent_Type2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepoEvent_Type2[RepoEvent_Type2["SYNCED"] = 1] = "SYNCED";
  RepoEvent_Type2[RepoEvent_Type2["LOADING"] = 2] = "LOADING";
  RepoEvent_Type2[RepoEvent_Type2["INDEXING_SETUP"] = 3] = "INDEXING_SETUP";
  RepoEvent_Type2[RepoEvent_Type2["INDEXING_INIT_FROM_SIMILAR_CODEBASE"] = 4] = "INDEXING_INIT_FROM_SIMILAR_CODEBASE";
  RepoEvent_Type2[RepoEvent_Type2["PAUSED"] = 5] = "PAUSED";
  RepoEvent_Type2[RepoEvent_Type2["INDEXING"] = 6] = "INDEXING";
  RepoEvent_Type2[RepoEvent_Type2["ERROR"] = 7] = "ERROR";
  RepoEvent_Type2[RepoEvent_Type2["NOT_AUTO_INDEXING"] = 8] = "NOT_AUTO_INDEXING";
  RepoEvent_Type2[RepoEvent_Type2["NOT_INDEXED"] = 9] = "NOT_INDEXED";
})(RepoEvent_Type! || (RepoEvent_Type = {} as typeof RepoEvent_Type));
proto3.util.setEnumType(RepoEvent_Type, "aiserver.v1.RepoEvent.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_SYNCED" },
  { no: 2, name: "TYPE_LOADING" },
  { no: 3, name: "TYPE_INDEXING_SETUP" },
  { no: 4, name: "TYPE_INDEXING_INIT_FROM_SIMILAR_CODEBASE" },
  { no: 5, name: "TYPE_PAUSED" },
  { no: 6, name: "TYPE_INDEXING" },
  { no: 7, name: "TYPE_ERROR" },
  { no: 8, name: "TYPE_NOT_AUTO_INDEXING" },
  { no: 9, name: "TYPE_NOT_INDEXED" }
]);
var GitEvent$Runtime = (() => class _GitEvent extends Message<_GitEvent> {
  declare operationType: GitEvent_OperationType;
  declare repositoryPath: string;
  declare operationSuccess: boolean;
  declare branchName?: string;
  declare errorMessage?: string;
  declare isDefaultBranch?: boolean;
  declare defaultBranchName?: string;
  declare commitHash?: string;
  declare previousCommitHash?: string;
  declare remoteUrl?: string;
  constructor(data?: PartialMessage<_GitEvent>) {
    super();
    this.operationType = GitEvent_OperationType.UNSPECIFIED;
    this.repositoryPath = "";
    this.operationSuccess = false;
    proto3.util.initPartial(data, this as _GitEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitEvent {
    return new _GitEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitEvent {
    return new _GitEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitEvent {
    return new _GitEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _GitEvent | PlainMessage<_GitEvent> | undefined | null, b2: _GitEvent | PlainMessage<_GitEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitEvent as unknown as MessageType<_GitEvent>, a, b2);
  }
})();
export type GitEvent = InstanceType<typeof GitEvent$Runtime>;
var GitEvent: MessageType<GitEvent> = GitEvent$Runtime as unknown as MessageType<GitEvent>;
(GitEvent as MutableMessageType<GitEvent>).runtime = proto3;
(GitEvent as MutableMessageType<GitEvent>).typeName = "aiserver.v1.GitEvent";
(GitEvent as MutableMessageType<GitEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "operation_type", kind: "enum", T: proto3.getEnumType(GitEvent_OperationType) },
  {
    no: 2,
    name: "repository_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "operation_success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "branch_name", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "is_default_branch", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "default_branch_name", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "commit_hash", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "previous_commit_hash", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "remote_url", kind: "scalar", T: 9, opt: true }
]);
(function(GitEvent_OperationType2) {
  GitEvent_OperationType2[GitEvent_OperationType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitEvent_OperationType2[GitEvent_OperationType2["COMMIT"] = 1] = "COMMIT";
  GitEvent_OperationType2[GitEvent_OperationType2["CHECKOUT"] = 2] = "CHECKOUT";
  GitEvent_OperationType2[GitEvent_OperationType2["PULL"] = 3] = "PULL";
  GitEvent_OperationType2[GitEvent_OperationType2["FETCH"] = 4] = "FETCH";
  GitEvent_OperationType2[GitEvent_OperationType2["MERGE"] = 5] = "MERGE";
  GitEvent_OperationType2[GitEvent_OperationType2["REBASE"] = 6] = "REBASE";
  GitEvent_OperationType2[GitEvent_OperationType2["STASH"] = 7] = "STASH";
  GitEvent_OperationType2[GitEvent_OperationType2["BRANCH"] = 8] = "BRANCH";
  GitEvent_OperationType2[GitEvent_OperationType2["TAG"] = 9] = "TAG";
})(GitEvent_OperationType! || (GitEvent_OperationType = {} as typeof GitEvent_OperationType));
proto3.util.setEnumType(GitEvent_OperationType, "aiserver.v1.GitEvent.OperationType", [
  { no: 0, name: "OPERATION_TYPE_UNSPECIFIED" },
  { no: 1, name: "OPERATION_TYPE_COMMIT" },
  { no: 2, name: "OPERATION_TYPE_CHECKOUT" },
  { no: 3, name: "OPERATION_TYPE_PULL" },
  { no: 4, name: "OPERATION_TYPE_FETCH" },
  { no: 5, name: "OPERATION_TYPE_MERGE" },
  { no: 6, name: "OPERATION_TYPE_REBASE" },
  { no: 7, name: "OPERATION_TYPE_STASH" },
  { no: 8, name: "OPERATION_TYPE_BRANCH" },
  { no: 9, name: "OPERATION_TYPE_TAG" }
]);
var WorktreeEvent$Runtime = (() => class _WorktreeEvent extends Message<_WorktreeEvent> {
  declare eventType: WorktreeEvent_EventType;
  declare modelName?: string;
  declare bestOfNGroupId?: string;
  declare allWorktreePaths: string[];
  declare appliedWorktreePath?: string;
  declare worktreeComposerMappings: WorktreeEvent_WorktreeComposerMapping[];
  declare backgroundAgentComposerMappings: WorktreeEvent_BackgroundAgentComposerMapping[];
  declare appliedComposerId?: string;
  declare viewedComposerId?: string;
  constructor(data?: PartialMessage<_WorktreeEvent>) {
    super();
    this.eventType = WorktreeEvent_EventType.UNSPECIFIED;
    this.allWorktreePaths = [];
    this.worktreeComposerMappings = [];
    this.backgroundAgentComposerMappings = [];
    proto3.util.initPartial(data, this as _WorktreeEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WorktreeEvent {
    return new _WorktreeEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WorktreeEvent {
    return new _WorktreeEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WorktreeEvent {
    return new _WorktreeEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _WorktreeEvent | PlainMessage<_WorktreeEvent> | undefined | null, b2: _WorktreeEvent | PlainMessage<_WorktreeEvent> | undefined | null): boolean {
    return proto3.util.equals(_WorktreeEvent as unknown as MessageType<_WorktreeEvent>, a, b2);
  }
})();
export type WorktreeEvent = InstanceType<typeof WorktreeEvent$Runtime>;
var WorktreeEvent: MessageType<WorktreeEvent> = WorktreeEvent$Runtime as unknown as MessageType<WorktreeEvent>;
(WorktreeEvent as MutableMessageType<WorktreeEvent>).runtime = proto3;
(WorktreeEvent as MutableMessageType<WorktreeEvent>).typeName = "aiserver.v1.WorktreeEvent";
(WorktreeEvent as MutableMessageType<WorktreeEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "event_type", kind: "enum", T: proto3.getEnumType(WorktreeEvent_EventType) },
  { no: 2, name: "model_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "all_worktree_paths", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "applied_worktree_path", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "worktree_composer_mappings", kind: "message", T: WorktreeEvent_WorktreeComposerMapping, repeated: true },
  { no: 7, name: "background_agent_composer_mappings", kind: "message", T: WorktreeEvent_BackgroundAgentComposerMapping, repeated: true },
  { no: 8, name: "applied_composer_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "viewed_composer_id", kind: "scalar", T: 9, opt: true }
]);
(function(WorktreeEvent_EventType2) {
  WorktreeEvent_EventType2[WorktreeEvent_EventType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  WorktreeEvent_EventType2[WorktreeEvent_EventType2["APPLY_TO_MAIN"] = 1] = "APPLY_TO_MAIN";
  WorktreeEvent_EventType2[WorktreeEvent_EventType2["UNDO_APPLY"] = 2] = "UNDO_APPLY";
  WorktreeEvent_EventType2[WorktreeEvent_EventType2["VIEW_SUBCOMPOSER"] = 3] = "VIEW_SUBCOMPOSER";
})(WorktreeEvent_EventType! || (WorktreeEvent_EventType = {} as typeof WorktreeEvent_EventType));
proto3.util.setEnumType(WorktreeEvent_EventType, "aiserver.v1.WorktreeEvent.EventType", [
  { no: 0, name: "EVENT_TYPE_UNSPECIFIED" },
  { no: 1, name: "EVENT_TYPE_APPLY_TO_MAIN" },
  { no: 2, name: "EVENT_TYPE_UNDO_APPLY" },
  { no: 3, name: "EVENT_TYPE_VIEW_SUBCOMPOSER" }
]);
var WorktreeEvent_WorktreeComposerMapping$Runtime = (() => class _WorktreeEvent_WorktreeComposerMapping extends Message<_WorktreeEvent_WorktreeComposerMapping> {
  declare worktreePath: string;
  declare composerId: string;
  constructor(data?: PartialMessage<_WorktreeEvent_WorktreeComposerMapping>) {
    super();
    this.worktreePath = "";
    this.composerId = "";
    proto3.util.initPartial(data, this as _WorktreeEvent_WorktreeComposerMapping);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WorktreeEvent_WorktreeComposerMapping {
    return new _WorktreeEvent_WorktreeComposerMapping().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WorktreeEvent_WorktreeComposerMapping {
    return new _WorktreeEvent_WorktreeComposerMapping().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WorktreeEvent_WorktreeComposerMapping {
    return new _WorktreeEvent_WorktreeComposerMapping().fromJsonString(jsonString, options);
  }
  static equals(a: _WorktreeEvent_WorktreeComposerMapping | PlainMessage<_WorktreeEvent_WorktreeComposerMapping> | undefined | null, b2: _WorktreeEvent_WorktreeComposerMapping | PlainMessage<_WorktreeEvent_WorktreeComposerMapping> | undefined | null): boolean {
    return proto3.util.equals(_WorktreeEvent_WorktreeComposerMapping as unknown as MessageType<_WorktreeEvent_WorktreeComposerMapping>, a, b2);
  }
})();
export type WorktreeEvent_WorktreeComposerMapping = InstanceType<typeof WorktreeEvent_WorktreeComposerMapping$Runtime>;
var WorktreeEvent_WorktreeComposerMapping: MessageType<WorktreeEvent_WorktreeComposerMapping> = WorktreeEvent_WorktreeComposerMapping$Runtime as unknown as MessageType<WorktreeEvent_WorktreeComposerMapping>;
(WorktreeEvent_WorktreeComposerMapping as MutableMessageType<WorktreeEvent_WorktreeComposerMapping>).runtime = proto3;
(WorktreeEvent_WorktreeComposerMapping as MutableMessageType<WorktreeEvent_WorktreeComposerMapping>).typeName = "aiserver.v1.WorktreeEvent.WorktreeComposerMapping";
(WorktreeEvent_WorktreeComposerMapping as MutableMessageType<WorktreeEvent_WorktreeComposerMapping>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "worktree_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WorktreeEvent_BackgroundAgentComposerMapping$Runtime = (() => class _WorktreeEvent_BackgroundAgentComposerMapping extends Message<_WorktreeEvent_BackgroundAgentComposerMapping> {
  declare bcId: string;
  declare composerId: string;
  constructor(data?: PartialMessage<_WorktreeEvent_BackgroundAgentComposerMapping>) {
    super();
    this.bcId = "";
    this.composerId = "";
    proto3.util.initPartial(data, this as _WorktreeEvent_BackgroundAgentComposerMapping);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WorktreeEvent_BackgroundAgentComposerMapping {
    return new _WorktreeEvent_BackgroundAgentComposerMapping().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WorktreeEvent_BackgroundAgentComposerMapping {
    return new _WorktreeEvent_BackgroundAgentComposerMapping().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WorktreeEvent_BackgroundAgentComposerMapping {
    return new _WorktreeEvent_BackgroundAgentComposerMapping().fromJsonString(jsonString, options);
  }
  static equals(a: _WorktreeEvent_BackgroundAgentComposerMapping | PlainMessage<_WorktreeEvent_BackgroundAgentComposerMapping> | undefined | null, b2: _WorktreeEvent_BackgroundAgentComposerMapping | PlainMessage<_WorktreeEvent_BackgroundAgentComposerMapping> | undefined | null): boolean {
    return proto3.util.equals(_WorktreeEvent_BackgroundAgentComposerMapping as unknown as MessageType<_WorktreeEvent_BackgroundAgentComposerMapping>, a, b2);
  }
})();
export type WorktreeEvent_BackgroundAgentComposerMapping = InstanceType<typeof WorktreeEvent_BackgroundAgentComposerMapping$Runtime>;
var WorktreeEvent_BackgroundAgentComposerMapping: MessageType<WorktreeEvent_BackgroundAgentComposerMapping> = WorktreeEvent_BackgroundAgentComposerMapping$Runtime as unknown as MessageType<WorktreeEvent_BackgroundAgentComposerMapping>;
(WorktreeEvent_BackgroundAgentComposerMapping as MutableMessageType<WorktreeEvent_BackgroundAgentComposerMapping>).runtime = proto3;
(WorktreeEvent_BackgroundAgentComposerMapping as MutableMessageType<WorktreeEvent_BackgroundAgentComposerMapping>).typeName = "aiserver.v1.WorktreeEvent.BackgroundAgentComposerMapping";
(WorktreeEvent_BackgroundAgentComposerMapping as MutableMessageType<WorktreeEvent_BackgroundAgentComposerMapping>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReviewChangesOpenedEvent$Runtime = (() => class _ReviewChangesOpenedEvent extends Message<_ReviewChangesOpenedEvent> {
  declare composerId: string;
  declare bestOfNGroupId?: string;
  constructor(data?: PartialMessage<_ReviewChangesOpenedEvent>) {
    super();
    this.composerId = "";
    proto3.util.initPartial(data, this as _ReviewChangesOpenedEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReviewChangesOpenedEvent {
    return new _ReviewChangesOpenedEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReviewChangesOpenedEvent {
    return new _ReviewChangesOpenedEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReviewChangesOpenedEvent {
    return new _ReviewChangesOpenedEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ReviewChangesOpenedEvent | PlainMessage<_ReviewChangesOpenedEvent> | undefined | null, b2: _ReviewChangesOpenedEvent | PlainMessage<_ReviewChangesOpenedEvent> | undefined | null): boolean {
    return proto3.util.equals(_ReviewChangesOpenedEvent as unknown as MessageType<_ReviewChangesOpenedEvent>, a, b2);
  }
})();
export type ReviewChangesOpenedEvent = InstanceType<typeof ReviewChangesOpenedEvent$Runtime>;
var ReviewChangesOpenedEvent: MessageType<ReviewChangesOpenedEvent> = ReviewChangesOpenedEvent$Runtime as unknown as MessageType<ReviewChangesOpenedEvent>;
(ReviewChangesOpenedEvent as MutableMessageType<ReviewChangesOpenedEvent>).runtime = proto3;
(ReviewChangesOpenedEvent as MutableMessageType<ReviewChangesOpenedEvent>).typeName = "aiserver.v1.ReviewChangesOpenedEvent";
(ReviewChangesOpenedEvent as MutableMessageType<ReviewChangesOpenedEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true }
]);
var ToolCallEvent$Runtime = (() => class _ToolCallEvent extends Message<_ToolCallEvent> {
  declare toolCallId: string;
  declare requestId: string;
  declare toolName: string;
  constructor(data?: PartialMessage<_ToolCallEvent>) {
    super();
    this.toolCallId = "";
    this.requestId = "";
    this.toolName = "";
    proto3.util.initPartial(data, this as _ToolCallEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallEvent {
    return new _ToolCallEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallEvent {
    return new _ToolCallEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallEvent {
    return new _ToolCallEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallEvent | PlainMessage<_ToolCallEvent> | undefined | null, b2: _ToolCallEvent | PlainMessage<_ToolCallEvent> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallEvent as unknown as MessageType<_ToolCallEvent>, a, b2);
  }
})();
export type ToolCallEvent = InstanceType<typeof ToolCallEvent$Runtime>;
var ToolCallEvent: MessageType<ToolCallEvent> = ToolCallEvent$Runtime as unknown as MessageType<ToolCallEvent>;
(ToolCallEvent as MutableMessageType<ToolCallEvent>).runtime = proto3;
(ToolCallEvent as MutableMessageType<ToolCallEvent>).typeName = "aiserver.v1.ToolCallEvent";
(ToolCallEvent as MutableMessageType<ToolCallEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SearchMatch$Runtime = (() => class _SearchMatch extends Message<_SearchMatch> {
  declare lineNumber: number;
  declare column: number;
  declare matchText: string;
  constructor(data?: PartialMessage<_SearchMatch>) {
    super();
    this.lineNumber = 0;
    this.column = 0;
    this.matchText = "";
    proto3.util.initPartial(data, this as _SearchMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchMatch {
    return new _SearchMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchMatch {
    return new _SearchMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchMatch {
    return new _SearchMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchMatch | PlainMessage<_SearchMatch> | undefined | null, b2: _SearchMatch | PlainMessage<_SearchMatch> | undefined | null): boolean {
    return proto3.util.equals(_SearchMatch as unknown as MessageType<_SearchMatch>, a, b2);
  }
})();
export type SearchMatch = InstanceType<typeof SearchMatch$Runtime>;
var SearchMatch: MessageType<SearchMatch> = SearchMatch$Runtime as unknown as MessageType<SearchMatch>;
(SearchMatch as MutableMessageType<SearchMatch>).runtime = proto3;
(SearchMatch as MutableMessageType<SearchMatch>).typeName = "aiserver.v1.SearchMatch";
(SearchMatch as MutableMessageType<SearchMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "match_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SearchResultFile$Runtime = (() => class _SearchResultFile extends Message<_SearchResultFile> {
  declare filePath: string;
  declare matchCount: number;
  declare matches: SearchMatch[];
  constructor(data?: PartialMessage<_SearchResultFile>) {
    super();
    this.filePath = "";
    this.matchCount = 0;
    this.matches = [];
    proto3.util.initPartial(data, this as _SearchResultFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchResultFile {
    return new _SearchResultFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchResultFile {
    return new _SearchResultFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchResultFile {
    return new _SearchResultFile().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchResultFile | PlainMessage<_SearchResultFile> | undefined | null, b2: _SearchResultFile | PlainMessage<_SearchResultFile> | undefined | null): boolean {
    return proto3.util.equals(_SearchResultFile as unknown as MessageType<_SearchResultFile>, a, b2);
  }
})();
export type SearchResultFile = InstanceType<typeof SearchResultFile$Runtime>;
var SearchResultFile: MessageType<SearchResultFile> = SearchResultFile$Runtime as unknown as MessageType<SearchResultFile>;
(SearchResultFile as MutableMessageType<SearchResultFile>).runtime = proto3;
(SearchResultFile as MutableMessageType<SearchResultFile>).typeName = "aiserver.v1.SearchResultFile";
(SearchResultFile as MutableMessageType<SearchResultFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "match_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "matches", kind: "message", T: SearchMatch, repeated: true }
]);
var SearchEvent$Runtime = (() => class _SearchEvent extends Message<_SearchEvent> {
  declare query: string;
  declare resultCount: number;
  declare fileCount: number;
  declare isRegex: boolean;
  declare isCaseSensitive: boolean;
  declare isWholeWord: boolean;
  declare filesToInclude?: string;
  declare filesToExclude?: string;
  declare durationMs: number;
  declare results: SearchResultFile[];
  constructor(data?: PartialMessage<_SearchEvent>) {
    super();
    this.query = "";
    this.resultCount = 0;
    this.fileCount = 0;
    this.isRegex = false;
    this.isCaseSensitive = false;
    this.isWholeWord = false;
    this.durationMs = 0;
    this.results = [];
    proto3.util.initPartial(data, this as _SearchEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchEvent {
    return new _SearchEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchEvent {
    return new _SearchEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchEvent {
    return new _SearchEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchEvent | PlainMessage<_SearchEvent> | undefined | null, b2: _SearchEvent | PlainMessage<_SearchEvent> | undefined | null): boolean {
    return proto3.util.equals(_SearchEvent as unknown as MessageType<_SearchEvent>, a, b2);
  }
})();
export type SearchEvent = InstanceType<typeof SearchEvent$Runtime>;
var SearchEvent: MessageType<SearchEvent> = SearchEvent$Runtime as unknown as MessageType<SearchEvent>;
(SearchEvent as MutableMessageType<SearchEvent>).runtime = proto3;
(SearchEvent as MutableMessageType<SearchEvent>).typeName = "aiserver.v1.SearchEvent";
(SearchEvent as MutableMessageType<SearchEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "result_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "file_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "is_case_sensitive",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "is_whole_word",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "files_to_include", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "files_to_exclude", kind: "scalar", T: 9, opt: true },
  {
    no: 9,
    name: "duration_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 10, name: "results", kind: "message", T: SearchResultFile, repeated: true }
]);


export { CppFate, CppSource, CppIntentInfo, LspSuggestion, LspSuggestedItems, ShouldTurnOnCppOnboardingRequest, ShouldTurnOnCppOnboardingResponse, StreamCppRequest, StreamCppRequest_ControlToken, StreamCppResponse, StreamCppResponse_CursorPredictionTarget, StreamCppResponse_ModelInfo, CppConfigRequest, CppConfigResponse, CppConfigResponse_Heuristic, CppConfigResponse_ImportPredictionConfig, CppConfigResponse_MergeBehavior, CppConfigResponse_RecentlyRejectedEditThresholds, CppConfigResponse_SuggestionHintConfig, SuggestedEdit, GetCppEditClassificationRequest, GetCppEditClassificationResponse, GetCppEditClassificationResponse_LogProbs, GetCppEditClassificationResponse_ScoredEdit, AdditionalFile, RecordCppFateRequest, RecordCppFateResponse, AvailableCppModelsRequest, AvailableCppModelsResponse, StreamHoldCppRequest, StreamHoldCppResponse, CppFileDiffHistory, RefreshTabContextRequest, RefreshTabContextResponse, EditPatch, CptFileDiffHistory, CppContextItem, AddTabRequestToEvalRequest, AddTabRequestToEvalResponse, MarkCppRequest, MarkCppRequest_CppResponseTypes, MarkCppRequest_RangeTransformation, CppParameterHint, MarkCppResponse, IRange, OneIndexedPosition, CursorSelection, ModelChange, CurrentlyShownCppSuggestion, CppAcceptEventNew, RecoverableCppData, CppSuggestEvent, CppTriggerEvent, FinishedCppGenerationEvent, CppRejectEventNew, Edit, CppPartialAcceptEvent, CursorPrediction, CursorPrediction_CursorPredictionSource, SuggestCursorPredictionEvent, AcceptCursorPredictionEvent, RejectCursorPredictionEvent, MaybeDefinedPointInTimeModel, PointInTimeModel, CppManualTriggerEventNew, CppStoppedTrackingModelEvent, CppStoppedTrackingModelEvent_StoppedTrackingModelReason, CppLinterErrorEvent, CppDebouncedCursorMovementEvent, CppEditorChangedEvent, CppCopyEvent, CppQuickActionCommand, CppQuickAction, CppQuickAction_Edit, CppChangeQuickActionEvent, CppQuickActionFireEvent, CmdKEvent, CmdKEvent_SubmitPrompt, CmdKEvent_EndOfGeneration, CmdKEvent_InterruptGeneration, CmdKEvent_AcceptDiffs, CmdKEvent_RejectDiffs, CmdKEvent_AcceptPartialDiff, CmdKEvent_RejectPartialDiff, CmdKEvent_AfterReject, ChatEvent, ChatEvent_SubmitPrompt, ChatEvent_EndOfAnyGeneration, ChatEvent_EndOfUninterruptedGeneration, BugBotLinterEvent, BugBotLinterEvent_Started, BugBotLinterEvent_LintGenerated, BugBotLinterEvent_LintDismissed, BugBotLinterEvent_UserFeedback, BugBotLinterEvent_ViewedReport, BugBotLinterEvent_UnviewedReport, BugBotLinterEvent_NotShownBecauseHeuristic, BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic, BugBotEvent, BugBotEvent_BackgroundIntervalInterruptedReason, BugBotEvent_Started, BugBotEvent_ReportsGenerated, BugBotEvent_PressedFixInComposer, BugBotEvent_PressedAddToChat, BugBotEvent_PressedOpenInEditor, BugBotEvent_ViewedReport, BugBotEvent_ViewedReport_ReportView, BugBotEvent_UserFeedback, BugBotEvent_BackgroundIntervalStarted, BugBotEvent_BackgroundIntervalEnded, BugBotEvent_BackgroundIntervalInterrupted, BugBotEvent_BackgroundIntervalErrored, AiRequestEvent, AiRequestEvent_RequestType, AiRequestEvent_Source, ModelOpenedEvent, BackgroundFilesEvent, BackgroundFilesEvent_BackgroundFile, ScrollEvent, EditorCloseEvent, TabCloseEvent, ModelAddedEvent, AnythingQuickAccessItem, AnythingQuickAccessItem_Resource, AnythingQuickAccessSelectionEvent, LspSuggestionEvent, CppSessionEvent, BeforeAiEditEvent, CppAppendRequest, CppAppendResponse, EditHistoryAppendChangesRequest, EditHistoryAppendChangesRequest_PrivacyModeStatus, EditHistoryAppendChangesResponse, CppEditHistoryStatusRequest, CppEditHistoryStatusResponse, StartingModel, BlockDiffPatch, BlockDiffPatch_Change, BlockDiffPatch_ModelWindow, CppHistoryAppendEvent, CppManualTriggerEvent, CppAcceptEvent, CppRejectEvent, CppSuggestion, ModelWithHistory, CppTimelineEvent, CppTimelineEvent_Change, CppTimelineEvent_Change_Status, TerminalEvent, TerminalEvent_Create, TerminalEvent_Exit, TerminalEvent_CommandStart, TerminalEvent_CommandFinish, BrowserEvent, BrowserEvent_TabCreated, BrowserEvent_TabClosed, BrowserEvent_Navigation, BrowserEvent_ToolAction, BrowserEvent_ToolAction_Source, NtpEvent, RepoEvent, RepoEvent_Type, GitEvent, GitEvent_OperationType, WorktreeEvent, WorktreeEvent_EventType, WorktreeEvent_WorktreeComposerMapping, WorktreeEvent_BackgroundAgentComposerMapping, ReviewChangesOpenedEvent, ToolCallEvent, SearchMatch, SearchResultFile, SearchEvent };
