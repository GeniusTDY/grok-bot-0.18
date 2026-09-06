/**
 * Complete generated Grok Bot 0.18 Dashboard closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:161194-161943
 * Region SHA-256: f76a0f883bdced39c5b3583576d07ace1932cfe50706a551b50feb6f05a40047
 * Dashboard closure exports: 22 messages + 2 enums = 24
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { LineRange, LinterErrors, CodeChunk } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ComposerCapabilityRequest_ComposerCapabilityType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35;
var ComposerCapabilityRequest_ComposerCapabilityType: {
  "UNSPECIFIED": 0;
  "LOOP_ON_LINTS": 1;
  "LOOP_ON_TESTS": 2;
  "MEGA_PLANNER": 3;
  "LOOP_ON_COMMAND": 4;
  "TOOL_CALL": 5;
  "DIFF_REVIEW": 6;
  "CONTEXT_PICKING": 7;
  "EDIT_TRAIL": 8;
  "AUTO_CONTEXT": 9;
  "CONTEXT_PLANNER": 10;
  "DIFF_HISTORY": 11;
  "REMEMBER_THIS": 12;
  "DECOMPOSER": 13;
  "USES_CODEBASE": 14;
  "TOOL_FORMER": 15;
  "CURSOR_RULES": 16;
  "TOKEN_COUNTER": 17;
  "USAGE_DATA": 18;
  "CHIMES": 19;
  "CODE_DECAY_TRACKER": 20;
  "BACKGROUND_COMPOSER": 21;
  "SUMMARIZATION": 22;
  "AI_CODE_TRACKING": 23;
  "QUEUING": 24;
  "MEMORIES": 25;
  "RCP_LOGS": 26;
  "KNOWLEDGE_FETCH": 27;
  "SLACK_INTEGRATION": 28;
  "SUB_COMPOSER": 29;
  "THINKING": 30;
  "CONTEXT_WINDOW": 31;
  "ONLINE_METRICS": 32;
  "NOTIFICATIONS": 33;
  "SPEC": 34;
  "BROWSER_AGENT": 35;
  0: "UNSPECIFIED";
  1: "LOOP_ON_LINTS";
  2: "LOOP_ON_TESTS";
  3: "MEGA_PLANNER";
  4: "LOOP_ON_COMMAND";
  5: "TOOL_CALL";
  6: "DIFF_REVIEW";
  7: "CONTEXT_PICKING";
  8: "EDIT_TRAIL";
  9: "AUTO_CONTEXT";
  10: "CONTEXT_PLANNER";
  11: "DIFF_HISTORY";
  12: "REMEMBER_THIS";
  13: "DECOMPOSER";
  14: "USES_CODEBASE";
  15: "TOOL_FORMER";
  16: "CURSOR_RULES";
  17: "TOKEN_COUNTER";
  18: "USAGE_DATA";
  19: "CHIMES";
  20: "CODE_DECAY_TRACKER";
  21: "BACKGROUND_COMPOSER";
  22: "SUMMARIZATION";
  23: "AI_CODE_TRACKING";
  24: "QUEUING";
  25: "MEMORIES";
  26: "RCP_LOGS";
  27: "KNOWLEDGE_FETCH";
  28: "SLACK_INTEGRATION";
  29: "SUB_COMPOSER";
  30: "THINKING";
  31: "CONTEXT_WINDOW";
  32: "ONLINE_METRICS";
  33: "NOTIFICATIONS";
  34: "SPEC";
  35: "BROWSER_AGENT";
};
export type ComposerCapabilityRequest_ToolType = 0 | 1 | 3 | 4 | 5;
var ComposerCapabilityRequest_ToolType: {
  "UNSPECIFIED": 0;
  "ADD_FILE_TO_CONTEXT": 1;
  "ITERATE": 3;
  "REMOVE_FILE_FROM_CONTEXT": 4;
  "SEMANTIC_SEARCH_CODEBASE": 5;
  0: "UNSPECIFIED";
  1: "ADD_FILE_TO_CONTEXT";
  3: "ITERATE";
  4: "REMOVE_FILE_FROM_CONTEXT";
  5: "SEMANTIC_SEARCH_CODEBASE";
};
var ComposerCapabilityRequest$Runtime = (() => class _ComposerCapabilityRequest extends Message<_ComposerCapabilityRequest> {
  declare type: ComposerCapabilityRequest_ComposerCapabilityType;
  declare data: { case: "loopOnLints"; value: ComposerCapabilityRequest_LoopOnLintsCapability } | { case: "loopOnTests"; value: ComposerCapabilityRequest_LoopOnTestsCapability } | { case: "megaPlanner"; value: ComposerCapabilityRequest_MegaPlannerCapability } | { case: "loopOnCommand"; value: ComposerCapabilityRequest_LoopOnCommandCapability } | { case: "toolCall"; value: ComposerCapabilityRequest_ToolCallCapability } | { case: "diffReview"; value: ComposerCapabilityRequest_DiffReviewCapability } | { case: "contextPicking"; value: ComposerCapabilityRequest_ContextPickingCapability } | { case: "editTrail"; value: ComposerCapabilityRequest_EditTrailCapability } | { case: "autoContext"; value: ComposerCapabilityRequest_AutoContextCapability } | { case: "contextPlanner"; value: ComposerCapabilityRequest_ContextPlannerCapability } | { case: "rememberThis"; value: ComposerCapabilityRequest_RememberThisCapability } | { case: "decomposer"; value: ComposerCapabilityRequest_DecomposerCapability } | { case: "cursorRules"; value: ComposerCapabilityRequest_CursorRulesCapability } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ComposerCapabilityRequest>) {
    super();
    this.type = ComposerCapabilityRequest_ComposerCapabilityType.UNSPECIFIED;
    this.data = { case: void 0 };
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest {
    return new _ComposerCapabilityRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest {
    return new _ComposerCapabilityRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest {
    return new _ComposerCapabilityRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest | PlainMessage<_ComposerCapabilityRequest> | undefined | null, b2: _ComposerCapabilityRequest | PlainMessage<_ComposerCapabilityRequest> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest as unknown as MessageType<_ComposerCapabilityRequest>, a, b2);
  }
})();
export type ComposerCapabilityRequest = InstanceType<typeof ComposerCapabilityRequest$Runtime>;
var ComposerCapabilityRequest: MessageType<ComposerCapabilityRequest> = ComposerCapabilityRequest$Runtime as unknown as MessageType<ComposerCapabilityRequest>;
(ComposerCapabilityRequest as MutableMessageType<ComposerCapabilityRequest>).runtime = proto3;
(ComposerCapabilityRequest as MutableMessageType<ComposerCapabilityRequest>).typeName = "aiserver.v1.ComposerCapabilityRequest";
(ComposerCapabilityRequest as MutableMessageType<ComposerCapabilityRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ComposerCapabilityRequest_ComposerCapabilityType) },
  { no: 2, name: "loop_on_lints", kind: "message", T: ComposerCapabilityRequest_LoopOnLintsCapability, oneof: "data" },
  { no: 3, name: "loop_on_tests", kind: "message", T: ComposerCapabilityRequest_LoopOnTestsCapability, oneof: "data" },
  { no: 4, name: "mega_planner", kind: "message", T: ComposerCapabilityRequest_MegaPlannerCapability, oneof: "data" },
  { no: 5, name: "loop_on_command", kind: "message", T: ComposerCapabilityRequest_LoopOnCommandCapability, oneof: "data" },
  { no: 6, name: "tool_call", kind: "message", T: ComposerCapabilityRequest_ToolCallCapability, oneof: "data" },
  { no: 7, name: "diff_review", kind: "message", T: ComposerCapabilityRequest_DiffReviewCapability, oneof: "data" },
  { no: 8, name: "context_picking", kind: "message", T: ComposerCapabilityRequest_ContextPickingCapability, oneof: "data" },
  { no: 9, name: "edit_trail", kind: "message", T: ComposerCapabilityRequest_EditTrailCapability, oneof: "data" },
  { no: 10, name: "auto_context", kind: "message", T: ComposerCapabilityRequest_AutoContextCapability, oneof: "data" },
  { no: 11, name: "context_planner", kind: "message", T: ComposerCapabilityRequest_ContextPlannerCapability, oneof: "data" },
  { no: 12, name: "remember_this", kind: "message", T: ComposerCapabilityRequest_RememberThisCapability, oneof: "data" },
  { no: 13, name: "decomposer", kind: "message", T: ComposerCapabilityRequest_DecomposerCapability, oneof: "data" },
  { no: 14, name: "cursor_rules", kind: "message", T: ComposerCapabilityRequest_CursorRulesCapability, oneof: "data" }
]);
(function(ComposerCapabilityRequest_ComposerCapabilityType2) {
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["LOOP_ON_LINTS"] = 1] = "LOOP_ON_LINTS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["LOOP_ON_TESTS"] = 2] = "LOOP_ON_TESTS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["MEGA_PLANNER"] = 3] = "MEGA_PLANNER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["LOOP_ON_COMMAND"] = 4] = "LOOP_ON_COMMAND";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["TOOL_CALL"] = 5] = "TOOL_CALL";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["DIFF_REVIEW"] = 6] = "DIFF_REVIEW";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CONTEXT_PICKING"] = 7] = "CONTEXT_PICKING";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["EDIT_TRAIL"] = 8] = "EDIT_TRAIL";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["AUTO_CONTEXT"] = 9] = "AUTO_CONTEXT";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CONTEXT_PLANNER"] = 10] = "CONTEXT_PLANNER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["DIFF_HISTORY"] = 11] = "DIFF_HISTORY";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["REMEMBER_THIS"] = 12] = "REMEMBER_THIS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["DECOMPOSER"] = 13] = "DECOMPOSER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["USES_CODEBASE"] = 14] = "USES_CODEBASE";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["TOOL_FORMER"] = 15] = "TOOL_FORMER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CURSOR_RULES"] = 16] = "CURSOR_RULES";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["TOKEN_COUNTER"] = 17] = "TOKEN_COUNTER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["USAGE_DATA"] = 18] = "USAGE_DATA";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CHIMES"] = 19] = "CHIMES";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CODE_DECAY_TRACKER"] = 20] = "CODE_DECAY_TRACKER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["BACKGROUND_COMPOSER"] = 21] = "BACKGROUND_COMPOSER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["SUMMARIZATION"] = 22] = "SUMMARIZATION";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["AI_CODE_TRACKING"] = 23] = "AI_CODE_TRACKING";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["QUEUING"] = 24] = "QUEUING";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["MEMORIES"] = 25] = "MEMORIES";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["RCP_LOGS"] = 26] = "RCP_LOGS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["KNOWLEDGE_FETCH"] = 27] = "KNOWLEDGE_FETCH";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["SLACK_INTEGRATION"] = 28] = "SLACK_INTEGRATION";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["SUB_COMPOSER"] = 29] = "SUB_COMPOSER";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["THINKING"] = 30] = "THINKING";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["CONTEXT_WINDOW"] = 31] = "CONTEXT_WINDOW";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["ONLINE_METRICS"] = 32] = "ONLINE_METRICS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["NOTIFICATIONS"] = 33] = "NOTIFICATIONS";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["SPEC"] = 34] = "SPEC";
  ComposerCapabilityRequest_ComposerCapabilityType2[ComposerCapabilityRequest_ComposerCapabilityType2["BROWSER_AGENT"] = 35] = "BROWSER_AGENT";
})(ComposerCapabilityRequest_ComposerCapabilityType! || (ComposerCapabilityRequest_ComposerCapabilityType = {} as typeof ComposerCapabilityRequest_ComposerCapabilityType));
proto3.util.setEnumType(ComposerCapabilityRequest_ComposerCapabilityType, "aiserver.v1.ComposerCapabilityRequest.ComposerCapabilityType", [
  { no: 0, name: "COMPOSER_CAPABILITY_TYPE_UNSPECIFIED" },
  { no: 1, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_LINTS" },
  { no: 2, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_TESTS" },
  { no: 3, name: "COMPOSER_CAPABILITY_TYPE_MEGA_PLANNER" },
  { no: 4, name: "COMPOSER_CAPABILITY_TYPE_LOOP_ON_COMMAND" },
  { no: 5, name: "COMPOSER_CAPABILITY_TYPE_TOOL_CALL" },
  { no: 6, name: "COMPOSER_CAPABILITY_TYPE_DIFF_REVIEW" },
  { no: 7, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PICKING" },
  { no: 8, name: "COMPOSER_CAPABILITY_TYPE_EDIT_TRAIL" },
  { no: 9, name: "COMPOSER_CAPABILITY_TYPE_AUTO_CONTEXT" },
  { no: 10, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_PLANNER" },
  { no: 11, name: "COMPOSER_CAPABILITY_TYPE_DIFF_HISTORY" },
  { no: 12, name: "COMPOSER_CAPABILITY_TYPE_REMEMBER_THIS" },
  { no: 13, name: "COMPOSER_CAPABILITY_TYPE_DECOMPOSER" },
  { no: 14, name: "COMPOSER_CAPABILITY_TYPE_USES_CODEBASE" },
  { no: 15, name: "COMPOSER_CAPABILITY_TYPE_TOOL_FORMER" },
  { no: 16, name: "COMPOSER_CAPABILITY_TYPE_CURSOR_RULES" },
  { no: 17, name: "COMPOSER_CAPABILITY_TYPE_TOKEN_COUNTER" },
  { no: 18, name: "COMPOSER_CAPABILITY_TYPE_USAGE_DATA" },
  { no: 19, name: "COMPOSER_CAPABILITY_TYPE_CHIMES" },
  { no: 20, name: "COMPOSER_CAPABILITY_TYPE_CODE_DECAY_TRACKER" },
  { no: 21, name: "COMPOSER_CAPABILITY_TYPE_BACKGROUND_COMPOSER" },
  { no: 22, name: "COMPOSER_CAPABILITY_TYPE_SUMMARIZATION" },
  { no: 23, name: "COMPOSER_CAPABILITY_TYPE_AI_CODE_TRACKING" },
  { no: 24, name: "COMPOSER_CAPABILITY_TYPE_QUEUING" },
  { no: 25, name: "COMPOSER_CAPABILITY_TYPE_MEMORIES" },
  { no: 26, name: "COMPOSER_CAPABILITY_TYPE_RCP_LOGS" },
  { no: 27, name: "COMPOSER_CAPABILITY_TYPE_KNOWLEDGE_FETCH" },
  { no: 28, name: "COMPOSER_CAPABILITY_TYPE_SLACK_INTEGRATION" },
  { no: 29, name: "COMPOSER_CAPABILITY_TYPE_SUB_COMPOSER" },
  { no: 30, name: "COMPOSER_CAPABILITY_TYPE_THINKING" },
  { no: 31, name: "COMPOSER_CAPABILITY_TYPE_CONTEXT_WINDOW" },
  { no: 32, name: "COMPOSER_CAPABILITY_TYPE_ONLINE_METRICS" },
  { no: 33, name: "COMPOSER_CAPABILITY_TYPE_NOTIFICATIONS" },
  { no: 34, name: "COMPOSER_CAPABILITY_TYPE_SPEC" },
  { no: 35, name: "COMPOSER_CAPABILITY_TYPE_BROWSER_AGENT" }
]);
(function(ComposerCapabilityRequest_ToolType2) {
  ComposerCapabilityRequest_ToolType2[ComposerCapabilityRequest_ToolType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ComposerCapabilityRequest_ToolType2[ComposerCapabilityRequest_ToolType2["ADD_FILE_TO_CONTEXT"] = 1] = "ADD_FILE_TO_CONTEXT";
  ComposerCapabilityRequest_ToolType2[ComposerCapabilityRequest_ToolType2["ITERATE"] = 3] = "ITERATE";
  ComposerCapabilityRequest_ToolType2[ComposerCapabilityRequest_ToolType2["REMOVE_FILE_FROM_CONTEXT"] = 4] = "REMOVE_FILE_FROM_CONTEXT";
  ComposerCapabilityRequest_ToolType2[ComposerCapabilityRequest_ToolType2["SEMANTIC_SEARCH_CODEBASE"] = 5] = "SEMANTIC_SEARCH_CODEBASE";
})(ComposerCapabilityRequest_ToolType! || (ComposerCapabilityRequest_ToolType = {} as typeof ComposerCapabilityRequest_ToolType));
proto3.util.setEnumType(ComposerCapabilityRequest_ToolType, "aiserver.v1.ComposerCapabilityRequest.ToolType", [
  { no: 0, name: "TOOL_TYPE_UNSPECIFIED" },
  { no: 1, name: "TOOL_TYPE_ADD_FILE_TO_CONTEXT" },
  { no: 3, name: "TOOL_TYPE_ITERATE" },
  { no: 4, name: "TOOL_TYPE_REMOVE_FILE_FROM_CONTEXT" },
  { no: 5, name: "TOOL_TYPE_SEMANTIC_SEARCH_CODEBASE" }
]);
var ComposerCapabilityRequest_ToolSchema$Runtime = (() => class _ComposerCapabilityRequest_ToolSchema extends Message<_ComposerCapabilityRequest_ToolSchema> {
  declare type: ComposerCapabilityRequest_ToolType;
  declare name: string;
  declare properties: { [key: string]: ComposerCapabilityRequest_SchemaProperty };
  declare required: string[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_ToolSchema>) {
    super();
    this.type = ComposerCapabilityRequest_ToolType.UNSPECIFIED;
    this.name = "";
    this.properties = {};
    this.required = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_ToolSchema);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_ToolSchema {
    return new _ComposerCapabilityRequest_ToolSchema().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ToolSchema {
    return new _ComposerCapabilityRequest_ToolSchema().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ToolSchema {
    return new _ComposerCapabilityRequest_ToolSchema().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_ToolSchema | PlainMessage<_ComposerCapabilityRequest_ToolSchema> | undefined | null, b2: _ComposerCapabilityRequest_ToolSchema | PlainMessage<_ComposerCapabilityRequest_ToolSchema> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_ToolSchema as unknown as MessageType<_ComposerCapabilityRequest_ToolSchema>, a, b2);
  }
})();
export type ComposerCapabilityRequest_ToolSchema = InstanceType<typeof ComposerCapabilityRequest_ToolSchema$Runtime>;
var ComposerCapabilityRequest_ToolSchema: MessageType<ComposerCapabilityRequest_ToolSchema> = ComposerCapabilityRequest_ToolSchema$Runtime as unknown as MessageType<ComposerCapabilityRequest_ToolSchema>;
(ComposerCapabilityRequest_ToolSchema as MutableMessageType<ComposerCapabilityRequest_ToolSchema>).runtime = proto3;
(ComposerCapabilityRequest_ToolSchema as MutableMessageType<ComposerCapabilityRequest_ToolSchema>).typeName = "aiserver.v1.ComposerCapabilityRequest.ToolSchema";
(ComposerCapabilityRequest_ToolSchema as MutableMessageType<ComposerCapabilityRequest_ToolSchema>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ComposerCapabilityRequest_ToolType) },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "properties", kind: "map", K: 9, V: { kind: "message", T: ComposerCapabilityRequest_SchemaProperty } },
  { no: 4, name: "required", kind: "scalar", T: 9, repeated: true }
]);
var ComposerCapabilityRequest_SchemaProperty$Runtime = (() => class _ComposerCapabilityRequest_SchemaProperty extends Message<_ComposerCapabilityRequest_SchemaProperty> {
  declare type: string;
  declare description?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_SchemaProperty>) {
    super();
    this.type = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_SchemaProperty);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_SchemaProperty {
    return new _ComposerCapabilityRequest_SchemaProperty().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_SchemaProperty {
    return new _ComposerCapabilityRequest_SchemaProperty().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_SchemaProperty {
    return new _ComposerCapabilityRequest_SchemaProperty().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_SchemaProperty | PlainMessage<_ComposerCapabilityRequest_SchemaProperty> | undefined | null, b2: _ComposerCapabilityRequest_SchemaProperty | PlainMessage<_ComposerCapabilityRequest_SchemaProperty> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_SchemaProperty as unknown as MessageType<_ComposerCapabilityRequest_SchemaProperty>, a, b2);
  }
})();
export type ComposerCapabilityRequest_SchemaProperty = InstanceType<typeof ComposerCapabilityRequest_SchemaProperty$Runtime>;
var ComposerCapabilityRequest_SchemaProperty: MessageType<ComposerCapabilityRequest_SchemaProperty> = ComposerCapabilityRequest_SchemaProperty$Runtime as unknown as MessageType<ComposerCapabilityRequest_SchemaProperty>;
(ComposerCapabilityRequest_SchemaProperty as MutableMessageType<ComposerCapabilityRequest_SchemaProperty>).runtime = proto3;
(ComposerCapabilityRequest_SchemaProperty as MutableMessageType<ComposerCapabilityRequest_SchemaProperty>).typeName = "aiserver.v1.ComposerCapabilityRequest.SchemaProperty";
(ComposerCapabilityRequest_SchemaProperty as MutableMessageType<ComposerCapabilityRequest_SchemaProperty>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "description", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_LoopOnLintsCapability$Runtime = (() => class _ComposerCapabilityRequest_LoopOnLintsCapability extends Message<_ComposerCapabilityRequest_LoopOnLintsCapability> {
  declare linterErrors: LinterErrors[];
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_LoopOnLintsCapability>) {
    super();
    this.linterErrors = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_LoopOnLintsCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_LoopOnLintsCapability {
    return new _ComposerCapabilityRequest_LoopOnLintsCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnLintsCapability {
    return new _ComposerCapabilityRequest_LoopOnLintsCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnLintsCapability {
    return new _ComposerCapabilityRequest_LoopOnLintsCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_LoopOnLintsCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnLintsCapability> | undefined | null, b2: _ComposerCapabilityRequest_LoopOnLintsCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnLintsCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_LoopOnLintsCapability as unknown as MessageType<_ComposerCapabilityRequest_LoopOnLintsCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_LoopOnLintsCapability = InstanceType<typeof ComposerCapabilityRequest_LoopOnLintsCapability$Runtime>;
var ComposerCapabilityRequest_LoopOnLintsCapability: MessageType<ComposerCapabilityRequest_LoopOnLintsCapability> = ComposerCapabilityRequest_LoopOnLintsCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_LoopOnLintsCapability>;
(ComposerCapabilityRequest_LoopOnLintsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnLintsCapability>).runtime = proto3;
(ComposerCapabilityRequest_LoopOnLintsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnLintsCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.LoopOnLintsCapability";
(ComposerCapabilityRequest_LoopOnLintsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnLintsCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "linter_errors", kind: "message", T: LinterErrors, repeated: true },
  { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_LoopOnTestsCapability$Runtime = (() => class _ComposerCapabilityRequest_LoopOnTestsCapability extends Message<_ComposerCapabilityRequest_LoopOnTestsCapability> {
  declare testNames: string[];
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_LoopOnTestsCapability>) {
    super();
    this.testNames = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_LoopOnTestsCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_LoopOnTestsCapability {
    return new _ComposerCapabilityRequest_LoopOnTestsCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnTestsCapability {
    return new _ComposerCapabilityRequest_LoopOnTestsCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnTestsCapability {
    return new _ComposerCapabilityRequest_LoopOnTestsCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_LoopOnTestsCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnTestsCapability> | undefined | null, b2: _ComposerCapabilityRequest_LoopOnTestsCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnTestsCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_LoopOnTestsCapability as unknown as MessageType<_ComposerCapabilityRequest_LoopOnTestsCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_LoopOnTestsCapability = InstanceType<typeof ComposerCapabilityRequest_LoopOnTestsCapability$Runtime>;
var ComposerCapabilityRequest_LoopOnTestsCapability: MessageType<ComposerCapabilityRequest_LoopOnTestsCapability> = ComposerCapabilityRequest_LoopOnTestsCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_LoopOnTestsCapability>;
(ComposerCapabilityRequest_LoopOnTestsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnTestsCapability>).runtime = proto3;
(ComposerCapabilityRequest_LoopOnTestsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnTestsCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.LoopOnTestsCapability";
(ComposerCapabilityRequest_LoopOnTestsCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnTestsCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "test_names", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_MegaPlannerCapability$Runtime = (() => class _ComposerCapabilityRequest_MegaPlannerCapability extends Message<_ComposerCapabilityRequest_MegaPlannerCapability> {
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_MegaPlannerCapability>) {
    super();
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_MegaPlannerCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_MegaPlannerCapability {
    return new _ComposerCapabilityRequest_MegaPlannerCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_MegaPlannerCapability {
    return new _ComposerCapabilityRequest_MegaPlannerCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_MegaPlannerCapability {
    return new _ComposerCapabilityRequest_MegaPlannerCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_MegaPlannerCapability | PlainMessage<_ComposerCapabilityRequest_MegaPlannerCapability> | undefined | null, b2: _ComposerCapabilityRequest_MegaPlannerCapability | PlainMessage<_ComposerCapabilityRequest_MegaPlannerCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_MegaPlannerCapability as unknown as MessageType<_ComposerCapabilityRequest_MegaPlannerCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_MegaPlannerCapability = InstanceType<typeof ComposerCapabilityRequest_MegaPlannerCapability$Runtime>;
var ComposerCapabilityRequest_MegaPlannerCapability: MessageType<ComposerCapabilityRequest_MegaPlannerCapability> = ComposerCapabilityRequest_MegaPlannerCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_MegaPlannerCapability>;
(ComposerCapabilityRequest_MegaPlannerCapability as MutableMessageType<ComposerCapabilityRequest_MegaPlannerCapability>).runtime = proto3;
(ComposerCapabilityRequest_MegaPlannerCapability as MutableMessageType<ComposerCapabilityRequest_MegaPlannerCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.MegaPlannerCapability";
(ComposerCapabilityRequest_MegaPlannerCapability as MutableMessageType<ComposerCapabilityRequest_MegaPlannerCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_LoopOnCommandCapability$Runtime = (() => class _ComposerCapabilityRequest_LoopOnCommandCapability extends Message<_ComposerCapabilityRequest_LoopOnCommandCapability> {
  declare command: string;
  declare customInstructions?: string;
  declare output?: string;
  declare exitCode?: number;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_LoopOnCommandCapability>) {
    super();
    this.command = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_LoopOnCommandCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_LoopOnCommandCapability {
    return new _ComposerCapabilityRequest_LoopOnCommandCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnCommandCapability {
    return new _ComposerCapabilityRequest_LoopOnCommandCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_LoopOnCommandCapability {
    return new _ComposerCapabilityRequest_LoopOnCommandCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_LoopOnCommandCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnCommandCapability> | undefined | null, b2: _ComposerCapabilityRequest_LoopOnCommandCapability | PlainMessage<_ComposerCapabilityRequest_LoopOnCommandCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_LoopOnCommandCapability as unknown as MessageType<_ComposerCapabilityRequest_LoopOnCommandCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_LoopOnCommandCapability = InstanceType<typeof ComposerCapabilityRequest_LoopOnCommandCapability$Runtime>;
var ComposerCapabilityRequest_LoopOnCommandCapability: MessageType<ComposerCapabilityRequest_LoopOnCommandCapability> = ComposerCapabilityRequest_LoopOnCommandCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_LoopOnCommandCapability>;
(ComposerCapabilityRequest_LoopOnCommandCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnCommandCapability>).runtime = proto3;
(ComposerCapabilityRequest_LoopOnCommandCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnCommandCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.LoopOnCommandCapability";
(ComposerCapabilityRequest_LoopOnCommandCapability as MutableMessageType<ComposerCapabilityRequest_LoopOnCommandCapability>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "output", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "exit_code", kind: "scalar", T: 5, opt: true }
]);
var ComposerCapabilityRequest_ToolCallCapability$Runtime = (() => class _ComposerCapabilityRequest_ToolCallCapability extends Message<_ComposerCapabilityRequest_ToolCallCapability> {
  declare customInstructions?: string;
  declare toolSchemas: ComposerCapabilityRequest_ToolSchema[];
  declare relevantFiles: string[];
  declare filesInContext: string[];
  declare semanticSearchFiles: string[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_ToolCallCapability>) {
    super();
    this.toolSchemas = [];
    this.relevantFiles = [];
    this.filesInContext = [];
    this.semanticSearchFiles = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_ToolCallCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_ToolCallCapability {
    return new _ComposerCapabilityRequest_ToolCallCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ToolCallCapability {
    return new _ComposerCapabilityRequest_ToolCallCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ToolCallCapability {
    return new _ComposerCapabilityRequest_ToolCallCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_ToolCallCapability | PlainMessage<_ComposerCapabilityRequest_ToolCallCapability> | undefined | null, b2: _ComposerCapabilityRequest_ToolCallCapability | PlainMessage<_ComposerCapabilityRequest_ToolCallCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_ToolCallCapability as unknown as MessageType<_ComposerCapabilityRequest_ToolCallCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_ToolCallCapability = InstanceType<typeof ComposerCapabilityRequest_ToolCallCapability$Runtime>;
var ComposerCapabilityRequest_ToolCallCapability: MessageType<ComposerCapabilityRequest_ToolCallCapability> = ComposerCapabilityRequest_ToolCallCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_ToolCallCapability>;
(ComposerCapabilityRequest_ToolCallCapability as MutableMessageType<ComposerCapabilityRequest_ToolCallCapability>).runtime = proto3;
(ComposerCapabilityRequest_ToolCallCapability as MutableMessageType<ComposerCapabilityRequest_ToolCallCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.ToolCallCapability";
(ComposerCapabilityRequest_ToolCallCapability as MutableMessageType<ComposerCapabilityRequest_ToolCallCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "tool_schemas", kind: "message", T: ComposerCapabilityRequest_ToolSchema, repeated: true },
  { no: 3, name: "relevant_files", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "files_in_context", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "semantic_search_files", kind: "scalar", T: 9, repeated: true }
]);
var ComposerCapabilityRequest_DiffReviewCapability$Runtime = (() => class _ComposerCapabilityRequest_DiffReviewCapability extends Message<_ComposerCapabilityRequest_DiffReviewCapability> {
  declare customInstructions?: string;
  declare diffs: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_DiffReviewCapability>) {
    super();
    this.diffs = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_DiffReviewCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability {
    return new _ComposerCapabilityRequest_DiffReviewCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability {
    return new _ComposerCapabilityRequest_DiffReviewCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability {
    return new _ComposerCapabilityRequest_DiffReviewCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_DiffReviewCapability | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability> | undefined | null, b2: _ComposerCapabilityRequest_DiffReviewCapability | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_DiffReviewCapability as unknown as MessageType<_ComposerCapabilityRequest_DiffReviewCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_DiffReviewCapability = InstanceType<typeof ComposerCapabilityRequest_DiffReviewCapability$Runtime>;
var ComposerCapabilityRequest_DiffReviewCapability: MessageType<ComposerCapabilityRequest_DiffReviewCapability> = ComposerCapabilityRequest_DiffReviewCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_DiffReviewCapability>;
(ComposerCapabilityRequest_DiffReviewCapability as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability>).runtime = proto3;
(ComposerCapabilityRequest_DiffReviewCapability as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability";
(ComposerCapabilityRequest_DiffReviewCapability as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "diffs", kind: "message", T: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff, repeated: true }
]);
var ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff$Runtime = (() => class _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff extends Message<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff> {
  declare relativeWorkspacePath: string;
  declare chunks: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>) {
    super();
    this.relativeWorkspacePath = "";
    this.chunks = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff> | undefined | null, b2: _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff as unknown as MessageType<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>, a, b2);
  }
})();
export type ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff = InstanceType<typeof ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff$Runtime>;
var ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff: MessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff> = ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff$Runtime as unknown as MessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>;
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>).runtime = proto3;
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>).typeName = "aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff";
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "chunks", kind: "message", T: ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk, repeated: true }
]);
var ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk$Runtime = (() => class _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk extends Message<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk> {
  declare oldLines: string[];
  declare newLines: string[];
  declare oldRange?: LineRange;
  declare newRange?: LineRange;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>) {
    super();
    this.oldLines = [];
    this.newLines = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk {
    return new _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk> | undefined | null, b2: _ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk | PlainMessage<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk as unknown as MessageType<_ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>, a, b2);
  }
})();
export type ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk = InstanceType<typeof ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk$Runtime>;
var ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk: MessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk> = ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk$Runtime as unknown as MessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>;
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>).runtime = proto3;
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>).typeName = "aiserver.v1.ComposerCapabilityRequest.DiffReviewCapability.SimpleFileDiff.Chunk";
(ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk as MutableMessageType<ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "old_lines", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "old_range", kind: "message", T: LineRange },
  { no: 4, name: "new_range", kind: "message", T: LineRange }
]);
var ComposerCapabilityRequest_DecomposerCapability$Runtime = (() => class _ComposerCapabilityRequest_DecomposerCapability extends Message<_ComposerCapabilityRequest_DecomposerCapability> {
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_DecomposerCapability>) {
    super();
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_DecomposerCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_DecomposerCapability {
    return new _ComposerCapabilityRequest_DecomposerCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DecomposerCapability {
    return new _ComposerCapabilityRequest_DecomposerCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_DecomposerCapability {
    return new _ComposerCapabilityRequest_DecomposerCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_DecomposerCapability | PlainMessage<_ComposerCapabilityRequest_DecomposerCapability> | undefined | null, b2: _ComposerCapabilityRequest_DecomposerCapability | PlainMessage<_ComposerCapabilityRequest_DecomposerCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_DecomposerCapability as unknown as MessageType<_ComposerCapabilityRequest_DecomposerCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_DecomposerCapability = InstanceType<typeof ComposerCapabilityRequest_DecomposerCapability$Runtime>;
var ComposerCapabilityRequest_DecomposerCapability: MessageType<ComposerCapabilityRequest_DecomposerCapability> = ComposerCapabilityRequest_DecomposerCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_DecomposerCapability>;
(ComposerCapabilityRequest_DecomposerCapability as MutableMessageType<ComposerCapabilityRequest_DecomposerCapability>).runtime = proto3;
(ComposerCapabilityRequest_DecomposerCapability as MutableMessageType<ComposerCapabilityRequest_DecomposerCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.DecomposerCapability";
(ComposerCapabilityRequest_DecomposerCapability as MutableMessageType<ComposerCapabilityRequest_DecomposerCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_ContextPickingCapability$Runtime = (() => class _ComposerCapabilityRequest_ContextPickingCapability extends Message<_ComposerCapabilityRequest_ContextPickingCapability> {
  declare customInstructions?: string;
  declare potentialContextFiles: string[];
  declare potentialContextCodeChunks: CodeChunk[];
  declare filesInContext: string[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_ContextPickingCapability>) {
    super();
    this.potentialContextFiles = [];
    this.potentialContextCodeChunks = [];
    this.filesInContext = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_ContextPickingCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_ContextPickingCapability {
    return new _ComposerCapabilityRequest_ContextPickingCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ContextPickingCapability {
    return new _ComposerCapabilityRequest_ContextPickingCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ContextPickingCapability {
    return new _ComposerCapabilityRequest_ContextPickingCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_ContextPickingCapability | PlainMessage<_ComposerCapabilityRequest_ContextPickingCapability> | undefined | null, b2: _ComposerCapabilityRequest_ContextPickingCapability | PlainMessage<_ComposerCapabilityRequest_ContextPickingCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_ContextPickingCapability as unknown as MessageType<_ComposerCapabilityRequest_ContextPickingCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_ContextPickingCapability = InstanceType<typeof ComposerCapabilityRequest_ContextPickingCapability$Runtime>;
var ComposerCapabilityRequest_ContextPickingCapability: MessageType<ComposerCapabilityRequest_ContextPickingCapability> = ComposerCapabilityRequest_ContextPickingCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_ContextPickingCapability>;
(ComposerCapabilityRequest_ContextPickingCapability as MutableMessageType<ComposerCapabilityRequest_ContextPickingCapability>).runtime = proto3;
(ComposerCapabilityRequest_ContextPickingCapability as MutableMessageType<ComposerCapabilityRequest_ContextPickingCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.ContextPickingCapability";
(ComposerCapabilityRequest_ContextPickingCapability as MutableMessageType<ComposerCapabilityRequest_ContextPickingCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "potential_context_files", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "potential_context_code_chunks", kind: "message", T: CodeChunk, repeated: true },
  { no: 4, name: "files_in_context", kind: "scalar", T: 9, repeated: true }
]);
var ComposerCapabilityRequest_EditTrailCapability$Runtime = (() => class _ComposerCapabilityRequest_EditTrailCapability extends Message<_ComposerCapabilityRequest_EditTrailCapability> {
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_EditTrailCapability>) {
    super();
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_EditTrailCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_EditTrailCapability {
    return new _ComposerCapabilityRequest_EditTrailCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_EditTrailCapability {
    return new _ComposerCapabilityRequest_EditTrailCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_EditTrailCapability {
    return new _ComposerCapabilityRequest_EditTrailCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_EditTrailCapability | PlainMessage<_ComposerCapabilityRequest_EditTrailCapability> | undefined | null, b2: _ComposerCapabilityRequest_EditTrailCapability | PlainMessage<_ComposerCapabilityRequest_EditTrailCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_EditTrailCapability as unknown as MessageType<_ComposerCapabilityRequest_EditTrailCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_EditTrailCapability = InstanceType<typeof ComposerCapabilityRequest_EditTrailCapability$Runtime>;
var ComposerCapabilityRequest_EditTrailCapability: MessageType<ComposerCapabilityRequest_EditTrailCapability> = ComposerCapabilityRequest_EditTrailCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_EditTrailCapability>;
(ComposerCapabilityRequest_EditTrailCapability as MutableMessageType<ComposerCapabilityRequest_EditTrailCapability>).runtime = proto3;
(ComposerCapabilityRequest_EditTrailCapability as MutableMessageType<ComposerCapabilityRequest_EditTrailCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.EditTrailCapability";
(ComposerCapabilityRequest_EditTrailCapability as MutableMessageType<ComposerCapabilityRequest_EditTrailCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityRequest_AutoContextCapability$Runtime = (() => class _ComposerCapabilityRequest_AutoContextCapability extends Message<_ComposerCapabilityRequest_AutoContextCapability> {
  declare customInstructions?: string;
  declare additionalFiles: string[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_AutoContextCapability>) {
    super();
    this.additionalFiles = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_AutoContextCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_AutoContextCapability {
    return new _ComposerCapabilityRequest_AutoContextCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_AutoContextCapability {
    return new _ComposerCapabilityRequest_AutoContextCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_AutoContextCapability {
    return new _ComposerCapabilityRequest_AutoContextCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_AutoContextCapability | PlainMessage<_ComposerCapabilityRequest_AutoContextCapability> | undefined | null, b2: _ComposerCapabilityRequest_AutoContextCapability | PlainMessage<_ComposerCapabilityRequest_AutoContextCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_AutoContextCapability as unknown as MessageType<_ComposerCapabilityRequest_AutoContextCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_AutoContextCapability = InstanceType<typeof ComposerCapabilityRequest_AutoContextCapability$Runtime>;
var ComposerCapabilityRequest_AutoContextCapability: MessageType<ComposerCapabilityRequest_AutoContextCapability> = ComposerCapabilityRequest_AutoContextCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_AutoContextCapability>;
(ComposerCapabilityRequest_AutoContextCapability as MutableMessageType<ComposerCapabilityRequest_AutoContextCapability>).runtime = proto3;
(ComposerCapabilityRequest_AutoContextCapability as MutableMessageType<ComposerCapabilityRequest_AutoContextCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.AutoContextCapability";
(ComposerCapabilityRequest_AutoContextCapability as MutableMessageType<ComposerCapabilityRequest_AutoContextCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "additional_files", kind: "scalar", T: 9, repeated: true }
]);
var ComposerCapabilityRequest_ContextPlannerCapability$Runtime = (() => class _ComposerCapabilityRequest_ContextPlannerCapability extends Message<_ComposerCapabilityRequest_ContextPlannerCapability> {
  declare customInstructions?: string;
  declare attachedCodeChunks: CodeChunk[];
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_ContextPlannerCapability>) {
    super();
    this.attachedCodeChunks = [];
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_ContextPlannerCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_ContextPlannerCapability {
    return new _ComposerCapabilityRequest_ContextPlannerCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ContextPlannerCapability {
    return new _ComposerCapabilityRequest_ContextPlannerCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_ContextPlannerCapability {
    return new _ComposerCapabilityRequest_ContextPlannerCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_ContextPlannerCapability | PlainMessage<_ComposerCapabilityRequest_ContextPlannerCapability> | undefined | null, b2: _ComposerCapabilityRequest_ContextPlannerCapability | PlainMessage<_ComposerCapabilityRequest_ContextPlannerCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_ContextPlannerCapability as unknown as MessageType<_ComposerCapabilityRequest_ContextPlannerCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_ContextPlannerCapability = InstanceType<typeof ComposerCapabilityRequest_ContextPlannerCapability$Runtime>;
var ComposerCapabilityRequest_ContextPlannerCapability: MessageType<ComposerCapabilityRequest_ContextPlannerCapability> = ComposerCapabilityRequest_ContextPlannerCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_ContextPlannerCapability>;
(ComposerCapabilityRequest_ContextPlannerCapability as MutableMessageType<ComposerCapabilityRequest_ContextPlannerCapability>).runtime = proto3;
(ComposerCapabilityRequest_ContextPlannerCapability as MutableMessageType<ComposerCapabilityRequest_ContextPlannerCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.ContextPlannerCapability";
(ComposerCapabilityRequest_ContextPlannerCapability as MutableMessageType<ComposerCapabilityRequest_ContextPlannerCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "attached_code_chunks", kind: "message", T: CodeChunk, repeated: true }
]);
var ComposerCapabilityRequest_RememberThisCapability$Runtime = (() => class _ComposerCapabilityRequest_RememberThisCapability extends Message<_ComposerCapabilityRequest_RememberThisCapability> {
  declare customInstructions?: string;
  declare memory: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_RememberThisCapability>) {
    super();
    this.memory = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_RememberThisCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_RememberThisCapability {
    return new _ComposerCapabilityRequest_RememberThisCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_RememberThisCapability {
    return new _ComposerCapabilityRequest_RememberThisCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_RememberThisCapability {
    return new _ComposerCapabilityRequest_RememberThisCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_RememberThisCapability | PlainMessage<_ComposerCapabilityRequest_RememberThisCapability> | undefined | null, b2: _ComposerCapabilityRequest_RememberThisCapability | PlainMessage<_ComposerCapabilityRequest_RememberThisCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_RememberThisCapability as unknown as MessageType<_ComposerCapabilityRequest_RememberThisCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_RememberThisCapability = InstanceType<typeof ComposerCapabilityRequest_RememberThisCapability$Runtime>;
var ComposerCapabilityRequest_RememberThisCapability: MessageType<ComposerCapabilityRequest_RememberThisCapability> = ComposerCapabilityRequest_RememberThisCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_RememberThisCapability>;
(ComposerCapabilityRequest_RememberThisCapability as MutableMessageType<ComposerCapabilityRequest_RememberThisCapability>).runtime = proto3;
(ComposerCapabilityRequest_RememberThisCapability as MutableMessageType<ComposerCapabilityRequest_RememberThisCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.RememberThisCapability";
(ComposerCapabilityRequest_RememberThisCapability as MutableMessageType<ComposerCapabilityRequest_RememberThisCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "memory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ComposerCapabilityRequest_CursorRulesCapability$Runtime = (() => class _ComposerCapabilityRequest_CursorRulesCapability extends Message<_ComposerCapabilityRequest_CursorRulesCapability> {
  declare customInstructions?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityRequest_CursorRulesCapability>) {
    super();
    proto3.util.initPartial(data, this as _ComposerCapabilityRequest_CursorRulesCapability);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityRequest_CursorRulesCapability {
    return new _ComposerCapabilityRequest_CursorRulesCapability().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_CursorRulesCapability {
    return new _ComposerCapabilityRequest_CursorRulesCapability().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityRequest_CursorRulesCapability {
    return new _ComposerCapabilityRequest_CursorRulesCapability().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityRequest_CursorRulesCapability | PlainMessage<_ComposerCapabilityRequest_CursorRulesCapability> | undefined | null, b2: _ComposerCapabilityRequest_CursorRulesCapability | PlainMessage<_ComposerCapabilityRequest_CursorRulesCapability> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityRequest_CursorRulesCapability as unknown as MessageType<_ComposerCapabilityRequest_CursorRulesCapability>, a, b2);
  }
})();
export type ComposerCapabilityRequest_CursorRulesCapability = InstanceType<typeof ComposerCapabilityRequest_CursorRulesCapability$Runtime>;
var ComposerCapabilityRequest_CursorRulesCapability: MessageType<ComposerCapabilityRequest_CursorRulesCapability> = ComposerCapabilityRequest_CursorRulesCapability$Runtime as unknown as MessageType<ComposerCapabilityRequest_CursorRulesCapability>;
(ComposerCapabilityRequest_CursorRulesCapability as MutableMessageType<ComposerCapabilityRequest_CursorRulesCapability>).runtime = proto3;
(ComposerCapabilityRequest_CursorRulesCapability as MutableMessageType<ComposerCapabilityRequest_CursorRulesCapability>).typeName = "aiserver.v1.ComposerCapabilityRequest.CursorRulesCapability";
(ComposerCapabilityRequest_CursorRulesCapability as MutableMessageType<ComposerCapabilityRequest_CursorRulesCapability>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "custom_instructions", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityContext$Runtime = (() => class _ComposerCapabilityContext extends Message<_ComposerCapabilityContext> {
  declare data: { case: "slackIntegration"; value: ComposerCapabilityContext_SlackIntegrationContext } | { case: "githubPr"; value: ComposerCapabilityContext_GithubPRContext } | { case: "microsoftTeamsIntegration"; value: ComposerCapabilityContext_MicrosoftTeamsIntegrationContext } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ComposerCapabilityContext>) {
    super();
    this.data = { case: void 0 };
    proto3.util.initPartial(data, this as _ComposerCapabilityContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityContext {
    return new _ComposerCapabilityContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext {
    return new _ComposerCapabilityContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext {
    return new _ComposerCapabilityContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityContext | PlainMessage<_ComposerCapabilityContext> | undefined | null, b2: _ComposerCapabilityContext | PlainMessage<_ComposerCapabilityContext> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityContext as unknown as MessageType<_ComposerCapabilityContext>, a, b2);
  }
})();
export type ComposerCapabilityContext = InstanceType<typeof ComposerCapabilityContext$Runtime>;
var ComposerCapabilityContext: MessageType<ComposerCapabilityContext> = ComposerCapabilityContext$Runtime as unknown as MessageType<ComposerCapabilityContext>;
(ComposerCapabilityContext as MutableMessageType<ComposerCapabilityContext>).runtime = proto3;
(ComposerCapabilityContext as MutableMessageType<ComposerCapabilityContext>).typeName = "aiserver.v1.ComposerCapabilityContext";
(ComposerCapabilityContext as MutableMessageType<ComposerCapabilityContext>).fields = proto3.util.newFieldList(() => [
  { no: 27, name: "slack_integration", kind: "message", T: ComposerCapabilityContext_SlackIntegrationContext, oneof: "data" },
  { no: 28, name: "github_pr", kind: "message", T: ComposerCapabilityContext_GithubPRContext, oneof: "data" },
  { no: 29, name: "microsoft_teams_integration", kind: "message", T: ComposerCapabilityContext_MicrosoftTeamsIntegrationContext, oneof: "data" }
]);
var ComposerCapabilityContext_SlackIntegrationContext$Runtime = (() => class _ComposerCapabilityContext_SlackIntegrationContext extends Message<_ComposerCapabilityContext_SlackIntegrationContext> {
  declare thread: string;
  declare channelName?: string;
  declare channelPurpose?: string;
  declare channelTopic?: string;
  declare senderName?: string;
  declare senderId?: string;
  declare senderType?: string;
  declare isDirectlyAddressed?: boolean;
  constructor(data?: PartialMessage<_ComposerCapabilityContext_SlackIntegrationContext>) {
    super();
    this.thread = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityContext_SlackIntegrationContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityContext_SlackIntegrationContext {
    return new _ComposerCapabilityContext_SlackIntegrationContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_SlackIntegrationContext {
    return new _ComposerCapabilityContext_SlackIntegrationContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_SlackIntegrationContext {
    return new _ComposerCapabilityContext_SlackIntegrationContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityContext_SlackIntegrationContext | PlainMessage<_ComposerCapabilityContext_SlackIntegrationContext> | undefined | null, b2: _ComposerCapabilityContext_SlackIntegrationContext | PlainMessage<_ComposerCapabilityContext_SlackIntegrationContext> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityContext_SlackIntegrationContext as unknown as MessageType<_ComposerCapabilityContext_SlackIntegrationContext>, a, b2);
  }
})();
export type ComposerCapabilityContext_SlackIntegrationContext = InstanceType<typeof ComposerCapabilityContext_SlackIntegrationContext$Runtime>;
var ComposerCapabilityContext_SlackIntegrationContext: MessageType<ComposerCapabilityContext_SlackIntegrationContext> = ComposerCapabilityContext_SlackIntegrationContext$Runtime as unknown as MessageType<ComposerCapabilityContext_SlackIntegrationContext>;
(ComposerCapabilityContext_SlackIntegrationContext as MutableMessageType<ComposerCapabilityContext_SlackIntegrationContext>).runtime = proto3;
(ComposerCapabilityContext_SlackIntegrationContext as MutableMessageType<ComposerCapabilityContext_SlackIntegrationContext>).typeName = "aiserver.v1.ComposerCapabilityContext.SlackIntegrationContext";
(ComposerCapabilityContext_SlackIntegrationContext as MutableMessageType<ComposerCapabilityContext_SlackIntegrationContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "thread",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "channel_purpose", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "channel_topic", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "sender_name", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "sender_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "sender_type", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_directly_addressed", kind: "scalar", T: 8, opt: true }
]);
var ComposerCapabilityContext_MicrosoftTeamsIntegrationContext$Runtime = (() => class _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext extends Message<_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext> {
  declare thread: string;
  declare channelName?: string;
  declare teamName?: string;
  declare channelDescription?: string;
  declare teamDescription?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>) {
    super();
    this.thread = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext {
    return new _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext {
    return new _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext {
    return new _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext | PlainMessage<_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext> | undefined | null, b2: _ComposerCapabilityContext_MicrosoftTeamsIntegrationContext | PlainMessage<_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext as unknown as MessageType<_ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>, a, b2);
  }
})();
export type ComposerCapabilityContext_MicrosoftTeamsIntegrationContext = InstanceType<typeof ComposerCapabilityContext_MicrosoftTeamsIntegrationContext$Runtime>;
var ComposerCapabilityContext_MicrosoftTeamsIntegrationContext: MessageType<ComposerCapabilityContext_MicrosoftTeamsIntegrationContext> = ComposerCapabilityContext_MicrosoftTeamsIntegrationContext$Runtime as unknown as MessageType<ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>;
(ComposerCapabilityContext_MicrosoftTeamsIntegrationContext as MutableMessageType<ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>).runtime = proto3;
(ComposerCapabilityContext_MicrosoftTeamsIntegrationContext as MutableMessageType<ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>).typeName = "aiserver.v1.ComposerCapabilityContext.MicrosoftTeamsIntegrationContext";
(ComposerCapabilityContext_MicrosoftTeamsIntegrationContext as MutableMessageType<ComposerCapabilityContext_MicrosoftTeamsIntegrationContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "thread",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "team_name", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "channel_description", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "team_description", kind: "scalar", T: 9, opt: true }
]);
var ComposerCapabilityContext_GithubPRContext$Runtime = (() => class _ComposerCapabilityContext_GithubPRContext extends Message<_ComposerCapabilityContext_GithubPRContext> {
  declare title: string;
  declare description: string;
  declare comments: string;
  declare ciFailures?: string;
  constructor(data?: PartialMessage<_ComposerCapabilityContext_GithubPRContext>) {
    super();
    this.title = "";
    this.description = "";
    this.comments = "";
    proto3.util.initPartial(data, this as _ComposerCapabilityContext_GithubPRContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerCapabilityContext_GithubPRContext {
    return new _ComposerCapabilityContext_GithubPRContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_GithubPRContext {
    return new _ComposerCapabilityContext_GithubPRContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerCapabilityContext_GithubPRContext {
    return new _ComposerCapabilityContext_GithubPRContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerCapabilityContext_GithubPRContext | PlainMessage<_ComposerCapabilityContext_GithubPRContext> | undefined | null, b2: _ComposerCapabilityContext_GithubPRContext | PlainMessage<_ComposerCapabilityContext_GithubPRContext> | undefined | null): boolean {
    return proto3.util.equals(_ComposerCapabilityContext_GithubPRContext as unknown as MessageType<_ComposerCapabilityContext_GithubPRContext>, a, b2);
  }
})();
export type ComposerCapabilityContext_GithubPRContext = InstanceType<typeof ComposerCapabilityContext_GithubPRContext$Runtime>;
var ComposerCapabilityContext_GithubPRContext: MessageType<ComposerCapabilityContext_GithubPRContext> = ComposerCapabilityContext_GithubPRContext$Runtime as unknown as MessageType<ComposerCapabilityContext_GithubPRContext>;
(ComposerCapabilityContext_GithubPRContext as MutableMessageType<ComposerCapabilityContext_GithubPRContext>).runtime = proto3;
(ComposerCapabilityContext_GithubPRContext as MutableMessageType<ComposerCapabilityContext_GithubPRContext>).typeName = "aiserver.v1.ComposerCapabilityContext.GithubPRContext";
(ComposerCapabilityContext_GithubPRContext as MutableMessageType<ComposerCapabilityContext_GithubPRContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
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
    name: "comments",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "ci_failures", kind: "scalar", T: 9, opt: true }
]);


export { ComposerCapabilityRequest, ComposerCapabilityRequest_ComposerCapabilityType, ComposerCapabilityRequest_ToolType, ComposerCapabilityRequest_ToolSchema, ComposerCapabilityRequest_SchemaProperty, ComposerCapabilityRequest_LoopOnLintsCapability, ComposerCapabilityRequest_LoopOnTestsCapability, ComposerCapabilityRequest_MegaPlannerCapability, ComposerCapabilityRequest_LoopOnCommandCapability, ComposerCapabilityRequest_ToolCallCapability, ComposerCapabilityRequest_DiffReviewCapability, ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff, ComposerCapabilityRequest_DiffReviewCapability_SimpleFileDiff_Chunk, ComposerCapabilityRequest_DecomposerCapability, ComposerCapabilityRequest_ContextPickingCapability, ComposerCapabilityRequest_EditTrailCapability, ComposerCapabilityRequest_AutoContextCapability, ComposerCapabilityRequest_ContextPlannerCapability, ComposerCapabilityRequest_RememberThisCapability, ComposerCapabilityRequest_CursorRulesCapability, ComposerCapabilityContext, ComposerCapabilityContext_SlackIntegrationContext, ComposerCapabilityContext_MicrosoftTeamsIntegrationContext, ComposerCapabilityContext_GithubPRContext };
