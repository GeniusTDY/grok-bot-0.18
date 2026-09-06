/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:181342-182186
 * Region SHA-256: ba3d73c5795285a6e52293019d0972e758a2c6d0c150542d8905fc4669c3e071
 * Atomic B0 exports: 20 messages + 1 enums = 21
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type UsageEventKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
var UsageEventKind: {
  "UNSPECIFIED": 0;
  "USAGE_BASED": 1;
  "USER_API_KEY": 2;
  "INCLUDED_IN_PRO": 3;
  "INCLUDED_IN_BUSINESS": 4;
  "ERRORED_NOT_CHARGED": 5;
  "ABORTED_NOT_CHARGED": 6;
  "CUSTOM_SUBSCRIPTION": 7;
  "INCLUDED_IN_PRO_PLUS": 8;
  "INCLUDED_IN_ULTRA": 9;
  "FREE_CREDIT": 10;
  0: "UNSPECIFIED";
  1: "USAGE_BASED";
  2: "USER_API_KEY";
  3: "INCLUDED_IN_PRO";
  4: "INCLUDED_IN_BUSINESS";
  5: "ERRORED_NOT_CHARGED";
  6: "ABORTED_NOT_CHARGED";
  7: "CUSTOM_SUBSCRIPTION";
  8: "INCLUDED_IN_PRO_PLUS";
  9: "INCLUDED_IN_ULTRA";
  10: "FREE_CREDIT";
};
(function(UsageEventKind2) {
  UsageEventKind2[UsageEventKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UsageEventKind2[UsageEventKind2["USAGE_BASED"] = 1] = "USAGE_BASED";
  UsageEventKind2[UsageEventKind2["USER_API_KEY"] = 2] = "USER_API_KEY";
  UsageEventKind2[UsageEventKind2["INCLUDED_IN_PRO"] = 3] = "INCLUDED_IN_PRO";
  UsageEventKind2[UsageEventKind2["INCLUDED_IN_BUSINESS"] = 4] = "INCLUDED_IN_BUSINESS";
  UsageEventKind2[UsageEventKind2["ERRORED_NOT_CHARGED"] = 5] = "ERRORED_NOT_CHARGED";
  UsageEventKind2[UsageEventKind2["ABORTED_NOT_CHARGED"] = 6] = "ABORTED_NOT_CHARGED";
  UsageEventKind2[UsageEventKind2["CUSTOM_SUBSCRIPTION"] = 7] = "CUSTOM_SUBSCRIPTION";
  UsageEventKind2[UsageEventKind2["INCLUDED_IN_PRO_PLUS"] = 8] = "INCLUDED_IN_PRO_PLUS";
  UsageEventKind2[UsageEventKind2["INCLUDED_IN_ULTRA"] = 9] = "INCLUDED_IN_ULTRA";
  UsageEventKind2[UsageEventKind2["FREE_CREDIT"] = 10] = "FREE_CREDIT";
})(UsageEventKind! || (UsageEventKind = {} as typeof UsageEventKind));
proto3.util.setEnumType(UsageEventKind, "aiserver.v1.UsageEventKind", [
  { no: 0, name: "USAGE_EVENT_KIND_UNSPECIFIED" },
  { no: 1, name: "USAGE_EVENT_KIND_USAGE_BASED" },
  { no: 2, name: "USAGE_EVENT_KIND_USER_API_KEY" },
  { no: 3, name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO" },
  { no: 4, name: "USAGE_EVENT_KIND_INCLUDED_IN_BUSINESS" },
  { no: 5, name: "USAGE_EVENT_KIND_ERRORED_NOT_CHARGED" },
  { no: 6, name: "USAGE_EVENT_KIND_ABORTED_NOT_CHARGED" },
  { no: 7, name: "USAGE_EVENT_KIND_CUSTOM_SUBSCRIPTION" },
  { no: 8, name: "USAGE_EVENT_KIND_INCLUDED_IN_PRO_PLUS" },
  { no: 9, name: "USAGE_EVENT_KIND_INCLUDED_IN_ULTRA" },
  { no: 10, name: "USAGE_EVENT_KIND_FREE_CREDIT" }
]);
var ModelSelectionSnapshot$Runtime = (() => class _ModelSelectionSnapshot extends Message<_ModelSelectionSnapshot> {
  declare modelId: string;
  declare maxMode: boolean;
  declare parameters: ModelSelectionSnapshot_ModelParameterValue[];
  constructor(data?: PartialMessage<_ModelSelectionSnapshot>) {
    super();
    this.modelId = "";
    this.maxMode = false;
    this.parameters = [];
    proto3.util.initPartial(data, this as _ModelSelectionSnapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelSelectionSnapshot {
    return new _ModelSelectionSnapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelSelectionSnapshot {
    return new _ModelSelectionSnapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelSelectionSnapshot {
    return new _ModelSelectionSnapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelSelectionSnapshot | PlainMessage<_ModelSelectionSnapshot> | undefined | null, b2: _ModelSelectionSnapshot | PlainMessage<_ModelSelectionSnapshot> | undefined | null): boolean {
    return proto3.util.equals(_ModelSelectionSnapshot as unknown as MessageType<_ModelSelectionSnapshot>, a, b2);
  }
})();
export type ModelSelectionSnapshot = InstanceType<typeof ModelSelectionSnapshot$Runtime>;
var ModelSelectionSnapshot: MessageType<ModelSelectionSnapshot> = ModelSelectionSnapshot$Runtime as unknown as MessageType<ModelSelectionSnapshot>;
(ModelSelectionSnapshot as MutableMessageType<ModelSelectionSnapshot>).runtime = proto3;
(ModelSelectionSnapshot as MutableMessageType<ModelSelectionSnapshot>).typeName = "aiserver.v1.ModelSelectionSnapshot";
(ModelSelectionSnapshot as MutableMessageType<ModelSelectionSnapshot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_id",
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
  },
  { no: 3, name: "parameters", kind: "message", T: ModelSelectionSnapshot_ModelParameterValue, repeated: true }
]);
var ModelSelectionSnapshot_ModelParameterValue$Runtime = (() => class _ModelSelectionSnapshot_ModelParameterValue extends Message<_ModelSelectionSnapshot_ModelParameterValue> {
  declare id: string;
  declare value: string;
  constructor(data?: PartialMessage<_ModelSelectionSnapshot_ModelParameterValue>) {
    super();
    this.id = "";
    this.value = "";
    proto3.util.initPartial(data, this as _ModelSelectionSnapshot_ModelParameterValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelSelectionSnapshot_ModelParameterValue {
    return new _ModelSelectionSnapshot_ModelParameterValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelSelectionSnapshot_ModelParameterValue {
    return new _ModelSelectionSnapshot_ModelParameterValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelSelectionSnapshot_ModelParameterValue {
    return new _ModelSelectionSnapshot_ModelParameterValue().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelSelectionSnapshot_ModelParameterValue | PlainMessage<_ModelSelectionSnapshot_ModelParameterValue> | undefined | null, b2: _ModelSelectionSnapshot_ModelParameterValue | PlainMessage<_ModelSelectionSnapshot_ModelParameterValue> | undefined | null): boolean {
    return proto3.util.equals(_ModelSelectionSnapshot_ModelParameterValue as unknown as MessageType<_ModelSelectionSnapshot_ModelParameterValue>, a, b2);
  }
})();
export type ModelSelectionSnapshot_ModelParameterValue = InstanceType<typeof ModelSelectionSnapshot_ModelParameterValue$Runtime>;
var ModelSelectionSnapshot_ModelParameterValue: MessageType<ModelSelectionSnapshot_ModelParameterValue> = ModelSelectionSnapshot_ModelParameterValue$Runtime as unknown as MessageType<ModelSelectionSnapshot_ModelParameterValue>;
(ModelSelectionSnapshot_ModelParameterValue as MutableMessageType<ModelSelectionSnapshot_ModelParameterValue>).runtime = proto3;
(ModelSelectionSnapshot_ModelParameterValue as MutableMessageType<ModelSelectionSnapshot_ModelParameterValue>).typeName = "aiserver.v1.ModelSelectionSnapshot.ModelParameterValue";
(ModelSelectionSnapshot_ModelParameterValue as MutableMessageType<ModelSelectionSnapshot_ModelParameterValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
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
  }
]);
var UsageEventDetails$Runtime = (() => class _UsageEventDetails extends Message<_UsageEventDetails> {
  declare overrideNumRequestsCounted?: number;
  declare overrideNumRequestsCountedMillis?: number;
  declare routedModel?: string;
  declare requestedModelSelection?: ModelSelectionSnapshot;
  declare effectiveModelSelection?: ModelSelectionSnapshot;
  declare feature: { case: "chat"; value: UsageEventDetails_Chat } | { case: "contextChat"; value: UsageEventDetails_ContextChat } | { case: "cmdK"; value: UsageEventDetails_CmdK } | { case: "terminalCmdK"; value: UsageEventDetails_TerminalCmdK } | { case: "aiReviewAcceptedComment"; value: UsageEventDetails_AiReviewAcceptedComment } | { case: "interpreterChat"; value: UsageEventDetails_InterpreterChat } | { case: "slashEdit"; value: UsageEventDetails_SlashEdit } | { case: "composer"; value: UsageEventDetails_Composer } | { case: "fastApply"; value: UsageEventDetails_FastApply } | { case: "warmComposer"; value: UsageEventDetails_WarmComposer } | { case: "bugFinderTriggerV1"; value: UsageEventDetails_BugFinderTriggerV1 } | { case: "toolCallComposer"; value: UsageEventDetails_ToolCallComposer } | { case: "bugBot"; value: UsageEventDetails_BugBot } | { case: "promptHook"; value: UsageEventDetails_PromptHook } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UsageEventDetails>) {
    super();
    this.feature = { case: void 0 };
    proto3.util.initPartial(data, this as _UsageEventDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails {
    return new _UsageEventDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails {
    return new _UsageEventDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails {
    return new _UsageEventDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails | PlainMessage<_UsageEventDetails> | undefined | null, b2: _UsageEventDetails | PlainMessage<_UsageEventDetails> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails as unknown as MessageType<_UsageEventDetails>, a, b2);
  }
})();
export type UsageEventDetails = InstanceType<typeof UsageEventDetails$Runtime>;
var UsageEventDetails: MessageType<UsageEventDetails> = UsageEventDetails$Runtime as unknown as MessageType<UsageEventDetails>;
(UsageEventDetails as MutableMessageType<UsageEventDetails>).runtime = proto3;
(UsageEventDetails as MutableMessageType<UsageEventDetails>).typeName = "aiserver.v1.UsageEventDetails";
(UsageEventDetails as MutableMessageType<UsageEventDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chat", kind: "message", T: UsageEventDetails_Chat, oneof: "feature" },
  { no: 2, name: "context_chat", kind: "message", T: UsageEventDetails_ContextChat, oneof: "feature" },
  { no: 3, name: "cmd_k", kind: "message", T: UsageEventDetails_CmdK, oneof: "feature" },
  { no: 4, name: "terminal_cmd_k", kind: "message", T: UsageEventDetails_TerminalCmdK, oneof: "feature" },
  { no: 5, name: "ai_review_accepted_comment", kind: "message", T: UsageEventDetails_AiReviewAcceptedComment, oneof: "feature" },
  { no: 6, name: "interpreter_chat", kind: "message", T: UsageEventDetails_InterpreterChat, oneof: "feature" },
  { no: 7, name: "slash_edit", kind: "message", T: UsageEventDetails_SlashEdit, oneof: "feature" },
  { no: 8, name: "composer", kind: "message", T: UsageEventDetails_Composer, oneof: "feature" },
  { no: 9, name: "fast_apply", kind: "message", T: UsageEventDetails_FastApply, oneof: "feature" },
  { no: 10, name: "warm_composer", kind: "message", T: UsageEventDetails_WarmComposer, oneof: "feature" },
  { no: 11, name: "bug_finder_trigger_v1", kind: "message", T: UsageEventDetails_BugFinderTriggerV1, oneof: "feature" },
  { no: 12, name: "tool_call_composer", kind: "message", T: UsageEventDetails_ToolCallComposer, oneof: "feature" },
  { no: 14, name: "bug_bot", kind: "message", T: UsageEventDetails_BugBot, oneof: "feature" },
  { no: 15, name: "prompt_hook", kind: "message", T: UsageEventDetails_PromptHook, oneof: "feature" },
  { no: 13, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 16, name: "override_num_requests_counted_millis", kind: "scalar", T: 5, opt: true },
  { no: 17, name: "routed_model", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "requested_model_selection", kind: "message", T: ModelSelectionSnapshot, opt: true },
  { no: 19, name: "effective_model_selection", kind: "message", T: ModelSelectionSnapshot, opt: true }
]);
var UsageEventDetails_PromptHook$Runtime = (() => class _UsageEventDetails_PromptHook extends Message<_UsageEventDetails_PromptHook> {
  declare modelIntent: string;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  declare isTokenBasedCall?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_PromptHook>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_PromptHook);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_PromptHook {
    return new _UsageEventDetails_PromptHook().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_PromptHook {
    return new _UsageEventDetails_PromptHook().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_PromptHook {
    return new _UsageEventDetails_PromptHook().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_PromptHook | PlainMessage<_UsageEventDetails_PromptHook> | undefined | null, b2: _UsageEventDetails_PromptHook | PlainMessage<_UsageEventDetails_PromptHook> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_PromptHook as unknown as MessageType<_UsageEventDetails_PromptHook>, a, b2);
  }
})();
export type UsageEventDetails_PromptHook = InstanceType<typeof UsageEventDetails_PromptHook$Runtime>;
var UsageEventDetails_PromptHook: MessageType<UsageEventDetails_PromptHook> = UsageEventDetails_PromptHook$Runtime as unknown as MessageType<UsageEventDetails_PromptHook>;
(UsageEventDetails_PromptHook as MutableMessageType<UsageEventDetails_PromptHook>).runtime = proto3;
(UsageEventDetails_PromptHook as MutableMessageType<UsageEventDetails_PromptHook>).typeName = "aiserver.v1.UsageEventDetails.PromptHook";
(UsageEventDetails_PromptHook as MutableMessageType<UsageEventDetails_PromptHook>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_BugFinderTriggerV1$Runtime = (() => class _UsageEventDetails_BugFinderTriggerV1 extends Message<_UsageEventDetails_BugFinderTriggerV1> {
  declare inBackgroundSubsidized: boolean;
  declare costCents: number;
  declare isFast: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_BugFinderTriggerV1>) {
    super();
    this.inBackgroundSubsidized = false;
    this.costCents = 0;
    this.isFast = false;
    proto3.util.initPartial(data, this as _UsageEventDetails_BugFinderTriggerV1);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_BugFinderTriggerV1 {
    return new _UsageEventDetails_BugFinderTriggerV1().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_BugFinderTriggerV1 {
    return new _UsageEventDetails_BugFinderTriggerV1().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_BugFinderTriggerV1 {
    return new _UsageEventDetails_BugFinderTriggerV1().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_BugFinderTriggerV1 | PlainMessage<_UsageEventDetails_BugFinderTriggerV1> | undefined | null, b2: _UsageEventDetails_BugFinderTriggerV1 | PlainMessage<_UsageEventDetails_BugFinderTriggerV1> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_BugFinderTriggerV1 as unknown as MessageType<_UsageEventDetails_BugFinderTriggerV1>, a, b2);
  }
})();
export type UsageEventDetails_BugFinderTriggerV1 = InstanceType<typeof UsageEventDetails_BugFinderTriggerV1$Runtime>;
var UsageEventDetails_BugFinderTriggerV1: MessageType<UsageEventDetails_BugFinderTriggerV1> = UsageEventDetails_BugFinderTriggerV1$Runtime as unknown as MessageType<UsageEventDetails_BugFinderTriggerV1>;
(UsageEventDetails_BugFinderTriggerV1 as MutableMessageType<UsageEventDetails_BugFinderTriggerV1>).runtime = proto3;
(UsageEventDetails_BugFinderTriggerV1 as MutableMessageType<UsageEventDetails_BugFinderTriggerV1>).typeName = "aiserver.v1.UsageEventDetails.BugFinderTriggerV1";
(UsageEventDetails_BugFinderTriggerV1 as MutableMessageType<UsageEventDetails_BugFinderTriggerV1>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "in_background_subsidized",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "cost_cents",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "is_fast",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UsageEventDetails_BugBot$Runtime = (() => class _UsageEventDetails_BugBot extends Message<_UsageEventDetails_BugBot> {
  declare modelIntent: string;
  declare tokenUsage?: TokenUsage;
  declare isTokenBasedCall: boolean;
  declare maxMode: boolean;
  declare billingMode: string;
  declare discount: { case: "noDiscount"; value: Empty } | { case: "free"; value: Empty } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UsageEventDetails_BugBot>) {
    super();
    this.modelIntent = "";
    this.isTokenBasedCall = false;
    this.maxMode = false;
    this.discount = { case: void 0 };
    this.billingMode = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_BugBot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_BugBot {
    return new _UsageEventDetails_BugBot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_BugBot {
    return new _UsageEventDetails_BugBot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_BugBot {
    return new _UsageEventDetails_BugBot().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_BugBot | PlainMessage<_UsageEventDetails_BugBot> | undefined | null, b2: _UsageEventDetails_BugBot | PlainMessage<_UsageEventDetails_BugBot> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_BugBot as unknown as MessageType<_UsageEventDetails_BugBot>, a, b2);
  }
})();
export type UsageEventDetails_BugBot = InstanceType<typeof UsageEventDetails_BugBot$Runtime>;
var UsageEventDetails_BugBot: MessageType<UsageEventDetails_BugBot> = UsageEventDetails_BugBot$Runtime as unknown as MessageType<UsageEventDetails_BugBot>;
(UsageEventDetails_BugBot as MutableMessageType<UsageEventDetails_BugBot>).runtime = proto3;
(UsageEventDetails_BugBot as MutableMessageType<UsageEventDetails_BugBot>).typeName = "aiserver.v1.UsageEventDetails.BugBot";
(UsageEventDetails_BugBot as MutableMessageType<UsageEventDetails_BugBot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "token_usage", kind: "message", T: TokenUsage },
  {
    no: 3,
    name: "is_token_based_call",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "max_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "no_discount", kind: "message", T: Empty, oneof: "discount" },
  { no: 6, name: "free", kind: "message", T: Empty, oneof: "discount" },
  {
    no: 7,
    name: "billing_mode",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UsageEventDetails_Chat$Runtime = (() => class _UsageEventDetails_Chat extends Message<_UsageEventDetails_Chat> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_Chat>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_Chat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_Chat {
    return new _UsageEventDetails_Chat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_Chat {
    return new _UsageEventDetails_Chat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_Chat {
    return new _UsageEventDetails_Chat().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_Chat | PlainMessage<_UsageEventDetails_Chat> | undefined | null, b2: _UsageEventDetails_Chat | PlainMessage<_UsageEventDetails_Chat> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_Chat as unknown as MessageType<_UsageEventDetails_Chat>, a, b2);
  }
})();
export type UsageEventDetails_Chat = InstanceType<typeof UsageEventDetails_Chat$Runtime>;
var UsageEventDetails_Chat: MessageType<UsageEventDetails_Chat> = UsageEventDetails_Chat$Runtime as unknown as MessageType<UsageEventDetails_Chat>;
(UsageEventDetails_Chat as MutableMessageType<UsageEventDetails_Chat>).runtime = proto3;
(UsageEventDetails_Chat as MutableMessageType<UsageEventDetails_Chat>).typeName = "aiserver.v1.UsageEventDetails.Chat";
(UsageEventDetails_Chat as MutableMessageType<UsageEventDetails_Chat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_FastApply$Runtime = (() => class _UsageEventDetails_FastApply extends Message<_UsageEventDetails_FastApply> {
  declare isOptimistic: boolean;
  declare willingToPayExtraForSpeed: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_FastApply>) {
    super();
    this.isOptimistic = false;
    this.willingToPayExtraForSpeed = false;
    proto3.util.initPartial(data, this as _UsageEventDetails_FastApply);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_FastApply {
    return new _UsageEventDetails_FastApply().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_FastApply {
    return new _UsageEventDetails_FastApply().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_FastApply {
    return new _UsageEventDetails_FastApply().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_FastApply | PlainMessage<_UsageEventDetails_FastApply> | undefined | null, b2: _UsageEventDetails_FastApply | PlainMessage<_UsageEventDetails_FastApply> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_FastApply as unknown as MessageType<_UsageEventDetails_FastApply>, a, b2);
  }
})();
export type UsageEventDetails_FastApply = InstanceType<typeof UsageEventDetails_FastApply$Runtime>;
var UsageEventDetails_FastApply: MessageType<UsageEventDetails_FastApply> = UsageEventDetails_FastApply$Runtime as unknown as MessageType<UsageEventDetails_FastApply>;
(UsageEventDetails_FastApply as MutableMessageType<UsageEventDetails_FastApply>).runtime = proto3;
(UsageEventDetails_FastApply as MutableMessageType<UsageEventDetails_FastApply>).typeName = "aiserver.v1.UsageEventDetails.FastApply";
(UsageEventDetails_FastApply as MutableMessageType<UsageEventDetails_FastApply>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_optimistic",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "willing_to_pay_extra_for_speed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UsageEventDetails_Composer$Runtime = (() => class _UsageEventDetails_Composer extends Message<_UsageEventDetails_Composer> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isHeadless?: boolean;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_Composer>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_Composer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_Composer {
    return new _UsageEventDetails_Composer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_Composer {
    return new _UsageEventDetails_Composer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_Composer {
    return new _UsageEventDetails_Composer().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_Composer | PlainMessage<_UsageEventDetails_Composer> | undefined | null, b2: _UsageEventDetails_Composer | PlainMessage<_UsageEventDetails_Composer> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_Composer as unknown as MessageType<_UsageEventDetails_Composer>, a, b2);
  }
})();
export type UsageEventDetails_Composer = InstanceType<typeof UsageEventDetails_Composer$Runtime>;
var UsageEventDetails_Composer: MessageType<UsageEventDetails_Composer> = UsageEventDetails_Composer$Runtime as unknown as MessageType<UsageEventDetails_Composer>;
(UsageEventDetails_Composer as MutableMessageType<UsageEventDetails_Composer>).runtime = proto3;
(UsageEventDetails_Composer as MutableMessageType<UsageEventDetails_Composer>).typeName = "aiserver.v1.UsageEventDetails.Composer";
(UsageEventDetails_Composer as MutableMessageType<UsageEventDetails_Composer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_headless", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 6, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_ToolCallComposer$Runtime = (() => class _UsageEventDetails_ToolCallComposer extends Message<_UsageEventDetails_ToolCallComposer> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isHeadless?: boolean;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_ToolCallComposer>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_ToolCallComposer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_ToolCallComposer {
    return new _UsageEventDetails_ToolCallComposer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_ToolCallComposer {
    return new _UsageEventDetails_ToolCallComposer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_ToolCallComposer {
    return new _UsageEventDetails_ToolCallComposer().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_ToolCallComposer | PlainMessage<_UsageEventDetails_ToolCallComposer> | undefined | null, b2: _UsageEventDetails_ToolCallComposer | PlainMessage<_UsageEventDetails_ToolCallComposer> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_ToolCallComposer as unknown as MessageType<_UsageEventDetails_ToolCallComposer>, a, b2);
  }
})();
export type UsageEventDetails_ToolCallComposer = InstanceType<typeof UsageEventDetails_ToolCallComposer$Runtime>;
var UsageEventDetails_ToolCallComposer: MessageType<UsageEventDetails_ToolCallComposer> = UsageEventDetails_ToolCallComposer$Runtime as unknown as MessageType<UsageEventDetails_ToolCallComposer>;
(UsageEventDetails_ToolCallComposer as MutableMessageType<UsageEventDetails_ToolCallComposer>).runtime = proto3;
(UsageEventDetails_ToolCallComposer as MutableMessageType<UsageEventDetails_ToolCallComposer>).typeName = "aiserver.v1.UsageEventDetails.ToolCallComposer";
(UsageEventDetails_ToolCallComposer as MutableMessageType<UsageEventDetails_ToolCallComposer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_headless", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 6, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_WarmComposer$Runtime = (() => class _UsageEventDetails_WarmComposer extends Message<_UsageEventDetails_WarmComposer> {
  declare modelIntent: string;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_WarmComposer>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_WarmComposer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_WarmComposer {
    return new _UsageEventDetails_WarmComposer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_WarmComposer {
    return new _UsageEventDetails_WarmComposer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_WarmComposer {
    return new _UsageEventDetails_WarmComposer().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_WarmComposer | PlainMessage<_UsageEventDetails_WarmComposer> | undefined | null, b2: _UsageEventDetails_WarmComposer | PlainMessage<_UsageEventDetails_WarmComposer> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_WarmComposer as unknown as MessageType<_UsageEventDetails_WarmComposer>, a, b2);
  }
})();
export type UsageEventDetails_WarmComposer = InstanceType<typeof UsageEventDetails_WarmComposer$Runtime>;
var UsageEventDetails_WarmComposer: MessageType<UsageEventDetails_WarmComposer> = UsageEventDetails_WarmComposer$Runtime as unknown as MessageType<UsageEventDetails_WarmComposer>;
(UsageEventDetails_WarmComposer as MutableMessageType<UsageEventDetails_WarmComposer>).runtime = proto3;
(UsageEventDetails_WarmComposer as MutableMessageType<UsageEventDetails_WarmComposer>).typeName = "aiserver.v1.UsageEventDetails.WarmComposer";
(UsageEventDetails_WarmComposer as MutableMessageType<UsageEventDetails_WarmComposer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_ContextChat$Runtime = (() => class _UsageEventDetails_ContextChat extends Message<_UsageEventDetails_ContextChat> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_ContextChat>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_ContextChat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_ContextChat {
    return new _UsageEventDetails_ContextChat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_ContextChat {
    return new _UsageEventDetails_ContextChat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_ContextChat {
    return new _UsageEventDetails_ContextChat().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_ContextChat | PlainMessage<_UsageEventDetails_ContextChat> | undefined | null, b2: _UsageEventDetails_ContextChat | PlainMessage<_UsageEventDetails_ContextChat> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_ContextChat as unknown as MessageType<_UsageEventDetails_ContextChat>, a, b2);
  }
})();
export type UsageEventDetails_ContextChat = InstanceType<typeof UsageEventDetails_ContextChat$Runtime>;
var UsageEventDetails_ContextChat: MessageType<UsageEventDetails_ContextChat> = UsageEventDetails_ContextChat$Runtime as unknown as MessageType<UsageEventDetails_ContextChat>;
(UsageEventDetails_ContextChat as MutableMessageType<UsageEventDetails_ContextChat>).runtime = proto3;
(UsageEventDetails_ContextChat as MutableMessageType<UsageEventDetails_ContextChat>).typeName = "aiserver.v1.UsageEventDetails.ContextChat";
(UsageEventDetails_ContextChat as MutableMessageType<UsageEventDetails_ContextChat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_CmdK$Runtime = (() => class _UsageEventDetails_CmdK extends Message<_UsageEventDetails_CmdK> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_CmdK>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_CmdK);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_CmdK {
    return new _UsageEventDetails_CmdK().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_CmdK {
    return new _UsageEventDetails_CmdK().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_CmdK {
    return new _UsageEventDetails_CmdK().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_CmdK | PlainMessage<_UsageEventDetails_CmdK> | undefined | null, b2: _UsageEventDetails_CmdK | PlainMessage<_UsageEventDetails_CmdK> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_CmdK as unknown as MessageType<_UsageEventDetails_CmdK>, a, b2);
  }
})();
export type UsageEventDetails_CmdK = InstanceType<typeof UsageEventDetails_CmdK$Runtime>;
var UsageEventDetails_CmdK: MessageType<UsageEventDetails_CmdK> = UsageEventDetails_CmdK$Runtime as unknown as MessageType<UsageEventDetails_CmdK>;
(UsageEventDetails_CmdK as MutableMessageType<UsageEventDetails_CmdK>).runtime = proto3;
(UsageEventDetails_CmdK as MutableMessageType<UsageEventDetails_CmdK>).typeName = "aiserver.v1.UsageEventDetails.CmdK";
(UsageEventDetails_CmdK as MutableMessageType<UsageEventDetails_CmdK>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_TerminalCmdK$Runtime = (() => class _UsageEventDetails_TerminalCmdK extends Message<_UsageEventDetails_TerminalCmdK> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_TerminalCmdK>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_TerminalCmdK);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_TerminalCmdK {
    return new _UsageEventDetails_TerminalCmdK().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_TerminalCmdK {
    return new _UsageEventDetails_TerminalCmdK().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_TerminalCmdK {
    return new _UsageEventDetails_TerminalCmdK().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_TerminalCmdK | PlainMessage<_UsageEventDetails_TerminalCmdK> | undefined | null, b2: _UsageEventDetails_TerminalCmdK | PlainMessage<_UsageEventDetails_TerminalCmdK> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_TerminalCmdK as unknown as MessageType<_UsageEventDetails_TerminalCmdK>, a, b2);
  }
})();
export type UsageEventDetails_TerminalCmdK = InstanceType<typeof UsageEventDetails_TerminalCmdK$Runtime>;
var UsageEventDetails_TerminalCmdK: MessageType<UsageEventDetails_TerminalCmdK> = UsageEventDetails_TerminalCmdK$Runtime as unknown as MessageType<UsageEventDetails_TerminalCmdK>;
(UsageEventDetails_TerminalCmdK as MutableMessageType<UsageEventDetails_TerminalCmdK>).runtime = proto3;
(UsageEventDetails_TerminalCmdK as MutableMessageType<UsageEventDetails_TerminalCmdK>).typeName = "aiserver.v1.UsageEventDetails.TerminalCmdK";
(UsageEventDetails_TerminalCmdK as MutableMessageType<UsageEventDetails_TerminalCmdK>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_AiReviewAcceptedComment$Runtime = (() => class _UsageEventDetails_AiReviewAcceptedComment extends Message<_UsageEventDetails_AiReviewAcceptedComment> {
  constructor(data?: PartialMessage<_UsageEventDetails_AiReviewAcceptedComment>) {
    super();
    proto3.util.initPartial(data, this as _UsageEventDetails_AiReviewAcceptedComment);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_AiReviewAcceptedComment {
    return new _UsageEventDetails_AiReviewAcceptedComment().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_AiReviewAcceptedComment {
    return new _UsageEventDetails_AiReviewAcceptedComment().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_AiReviewAcceptedComment {
    return new _UsageEventDetails_AiReviewAcceptedComment().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_AiReviewAcceptedComment | PlainMessage<_UsageEventDetails_AiReviewAcceptedComment> | undefined | null, b2: _UsageEventDetails_AiReviewAcceptedComment | PlainMessage<_UsageEventDetails_AiReviewAcceptedComment> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_AiReviewAcceptedComment as unknown as MessageType<_UsageEventDetails_AiReviewAcceptedComment>, a, b2);
  }
})();
export type UsageEventDetails_AiReviewAcceptedComment = InstanceType<typeof UsageEventDetails_AiReviewAcceptedComment$Runtime>;
var UsageEventDetails_AiReviewAcceptedComment: MessageType<UsageEventDetails_AiReviewAcceptedComment> = UsageEventDetails_AiReviewAcceptedComment$Runtime as unknown as MessageType<UsageEventDetails_AiReviewAcceptedComment>;
(UsageEventDetails_AiReviewAcceptedComment as MutableMessageType<UsageEventDetails_AiReviewAcceptedComment>).runtime = proto3;
(UsageEventDetails_AiReviewAcceptedComment as MutableMessageType<UsageEventDetails_AiReviewAcceptedComment>).typeName = "aiserver.v1.UsageEventDetails.AiReviewAcceptedComment";
(UsageEventDetails_AiReviewAcceptedComment as MutableMessageType<UsageEventDetails_AiReviewAcceptedComment>).fields = proto3.util.newFieldList(() => []);
var UsageEventDetails_InterpreterChat$Runtime = (() => class _UsageEventDetails_InterpreterChat extends Message<_UsageEventDetails_InterpreterChat> {
  declare modelIntent: string;
  declare overrideNumRequestsCounted?: number;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_InterpreterChat>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_InterpreterChat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_InterpreterChat {
    return new _UsageEventDetails_InterpreterChat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_InterpreterChat {
    return new _UsageEventDetails_InterpreterChat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_InterpreterChat {
    return new _UsageEventDetails_InterpreterChat().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_InterpreterChat | PlainMessage<_UsageEventDetails_InterpreterChat> | undefined | null, b2: _UsageEventDetails_InterpreterChat | PlainMessage<_UsageEventDetails_InterpreterChat> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_InterpreterChat as unknown as MessageType<_UsageEventDetails_InterpreterChat>, a, b2);
  }
})();
export type UsageEventDetails_InterpreterChat = InstanceType<typeof UsageEventDetails_InterpreterChat$Runtime>;
var UsageEventDetails_InterpreterChat: MessageType<UsageEventDetails_InterpreterChat> = UsageEventDetails_InterpreterChat$Runtime as unknown as MessageType<UsageEventDetails_InterpreterChat>;
(UsageEventDetails_InterpreterChat as MutableMessageType<UsageEventDetails_InterpreterChat>).runtime = proto3;
(UsageEventDetails_InterpreterChat as MutableMessageType<UsageEventDetails_InterpreterChat>).typeName = "aiserver.v1.UsageEventDetails.InterpreterChat";
(UsageEventDetails_InterpreterChat as MutableMessageType<UsageEventDetails_InterpreterChat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "override_num_requests_counted", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 5, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEventDetails_SlashEdit$Runtime = (() => class _UsageEventDetails_SlashEdit extends Message<_UsageEventDetails_SlashEdit> {
  declare modelIntent: string;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_UsageEventDetails_SlashEdit>) {
    super();
    this.modelIntent = "";
    proto3.util.initPartial(data, this as _UsageEventDetails_SlashEdit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDetails_SlashEdit {
    return new _UsageEventDetails_SlashEdit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDetails_SlashEdit {
    return new _UsageEventDetails_SlashEdit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDetails_SlashEdit {
    return new _UsageEventDetails_SlashEdit().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDetails_SlashEdit | PlainMessage<_UsageEventDetails_SlashEdit> | undefined | null, b2: _UsageEventDetails_SlashEdit | PlainMessage<_UsageEventDetails_SlashEdit> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDetails_SlashEdit as unknown as MessageType<_UsageEventDetails_SlashEdit>, a, b2);
  }
})();
export type UsageEventDetails_SlashEdit = InstanceType<typeof UsageEventDetails_SlashEdit$Runtime>;
var UsageEventDetails_SlashEdit: MessageType<UsageEventDetails_SlashEdit> = UsageEventDetails_SlashEdit$Runtime as unknown as MessageType<UsageEventDetails_SlashEdit>;
(UsageEventDetails_SlashEdit as MutableMessageType<UsageEventDetails_SlashEdit>).runtime = proto3;
(UsageEventDetails_SlashEdit as MutableMessageType<UsageEventDetails_SlashEdit>).typeName = "aiserver.v1.UsageEventDetails.SlashEdit";
(UsageEventDetails_SlashEdit as MutableMessageType<UsageEventDetails_SlashEdit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_intent",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var UsageEvent$Runtime = (() => class _UsageEvent extends Message<_UsageEvent> {
  declare timestamp: bigint;
  declare details?: UsageEventDetails;
  declare subscriptionProductId?: string;
  declare usagePriceId?: string;
  declare isSlow: boolean;
  declare status: string;
  declare owningUser?: string;
  declare owningTeam?: string;
  declare priceCents?: number;
  declare teamMembershipType?: string;
  constructor(data?: PartialMessage<_UsageEvent>) {
    super();
    this.timestamp = protoInt64.zero;
    this.isSlow = false;
    this.status = "";
    proto3.util.initPartial(data, this as _UsageEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEvent {
    return new _UsageEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEvent {
    return new _UsageEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEvent {
    return new _UsageEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEvent | PlainMessage<_UsageEvent> | undefined | null, b2: _UsageEvent | PlainMessage<_UsageEvent> | undefined | null): boolean {
    return proto3.util.equals(_UsageEvent as unknown as MessageType<_UsageEvent>, a, b2);
  }
})();
export type UsageEvent = InstanceType<typeof UsageEvent$Runtime>;
var UsageEvent: MessageType<UsageEvent> = UsageEvent$Runtime as unknown as MessageType<UsageEvent>;
(UsageEvent as MutableMessageType<UsageEvent>).runtime = proto3;
(UsageEvent as MutableMessageType<UsageEvent>).typeName = "aiserver.v1.UsageEvent";
(UsageEvent as MutableMessageType<UsageEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "details", kind: "message", T: UsageEventDetails },
  { no: 3, name: "subscription_product_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "usage_price_id", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "is_slow",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "owning_user", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "owning_team", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "price_cents", kind: "scalar", T: 2, opt: true },
  { no: 10, name: "team_membership_type", kind: "scalar", T: 9, opt: true }
]);
var UsageEventDisplay$Runtime = (() => class _UsageEventDisplay extends Message<_UsageEventDisplay> {
  declare timestamp: bigint;
  declare model: string;
  declare kind: UsageEventKind;
  declare customSubscriptionName?: string;
  declare maxMode: boolean;
  declare requestsCosts: number;
  declare usageBasedCosts?: string;
  declare isTokenBasedCall?: boolean;
  declare tokenUsage?: TokenUsage;
  declare owningUser?: string;
  declare owningTeam?: string;
  declare userEmail?: string;
  declare cursorTokenFee?: number;
  declare isChargeable?: boolean;
  declare serviceAccountName?: string;
  declare serviceAccountId?: string;
  declare isHeadless?: boolean;
  declare chargedCents?: number;
  declare cloudAgentId?: string;
  declare automationId?: string;
  declare automationManagedType?: string;
  declare clientType?: string;
  declare conversationId?: string;
  declare subscriptionProductId?: string;
  constructor(data?: PartialMessage<_UsageEventDisplay>) {
    super();
    this.timestamp = protoInt64.zero;
    this.model = "";
    this.kind = UsageEventKind.UNSPECIFIED;
    this.maxMode = false;
    this.requestsCosts = 0;
    proto3.util.initPartial(data, this as _UsageEventDisplay);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UsageEventDisplay {
    return new _UsageEventDisplay().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UsageEventDisplay {
    return new _UsageEventDisplay().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UsageEventDisplay {
    return new _UsageEventDisplay().fromJsonString(jsonString, options);
  }
  static equals(a: _UsageEventDisplay | PlainMessage<_UsageEventDisplay> | undefined | null, b2: _UsageEventDisplay | PlainMessage<_UsageEventDisplay> | undefined | null): boolean {
    return proto3.util.equals(_UsageEventDisplay as unknown as MessageType<_UsageEventDisplay>, a, b2);
  }
})();
export type UsageEventDisplay = InstanceType<typeof UsageEventDisplay$Runtime>;
var UsageEventDisplay: MessageType<UsageEventDisplay> = UsageEventDisplay$Runtime as unknown as MessageType<UsageEventDisplay>;
(UsageEventDisplay as MutableMessageType<UsageEventDisplay>).runtime = proto3;
(UsageEventDisplay as MutableMessageType<UsageEventDisplay>).typeName = "aiserver.v1.UsageEventDisplay";
(UsageEventDisplay as MutableMessageType<UsageEventDisplay>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "kind", kind: "enum", T: proto3.getEnumType(UsageEventKind) },
  { no: 4, name: "custom_subscription_name", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "max_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "requests_costs",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 7, name: "usage_based_costs", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_token_based_call", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "token_usage", kind: "message", T: TokenUsage, opt: true },
  { no: 10, name: "owning_user", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "owning_team", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "user_email", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "cursor_token_fee", kind: "scalar", T: 2, opt: true },
  { no: 14, name: "is_chargeable", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "service_account_name", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "service_account_id", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "is_headless", kind: "scalar", T: 8, opt: true },
  { no: 18, name: "charged_cents", kind: "scalar", T: 2, opt: true },
  { no: 19, name: "cloud_agent_id", kind: "scalar", T: 9, opt: true },
  { no: 20, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 21, name: "automation_managed_type", kind: "scalar", T: 9, opt: true },
  { no: 22, name: "client_type", kind: "scalar", T: 9, opt: true },
  { no: 23, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 24, name: "subscription_product_id", kind: "scalar", T: 9, opt: true }
]);
var TokenUsage$Runtime = (() => class _TokenUsage extends Message<_TokenUsage> {
  declare inputTokens: number;
  declare outputTokens: number;
  declare cacheWriteTokens: number;
  declare cacheReadTokens: number;
  declare totalCents: number;
  declare discountPercentOff?: number;
  declare enterpriseUsageDiscountPercent?: number;
  constructor(data?: PartialMessage<_TokenUsage>) {
    super();
    this.inputTokens = 0;
    this.outputTokens = 0;
    this.cacheWriteTokens = 0;
    this.cacheReadTokens = 0;
    this.totalCents = 0;
    proto3.util.initPartial(data, this as _TokenUsage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TokenUsage {
    return new _TokenUsage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TokenUsage {
    return new _TokenUsage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TokenUsage {
    return new _TokenUsage().fromJsonString(jsonString, options);
  }
  static equals(a: _TokenUsage | PlainMessage<_TokenUsage> | undefined | null, b2: _TokenUsage | PlainMessage<_TokenUsage> | undefined | null): boolean {
    return proto3.util.equals(_TokenUsage as unknown as MessageType<_TokenUsage>, a, b2);
  }
})();
export type TokenUsage = InstanceType<typeof TokenUsage$Runtime>;
var TokenUsage: MessageType<TokenUsage> = TokenUsage$Runtime as unknown as MessageType<TokenUsage>;
(TokenUsage as MutableMessageType<TokenUsage>).runtime = proto3;
(TokenUsage as MutableMessageType<TokenUsage>).typeName = "aiserver.v1.TokenUsage";
(TokenUsage as MutableMessageType<TokenUsage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "input_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "output_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "cache_write_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "cache_read_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "total_cents",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 6, name: "discount_percent_off", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "enterprise_usage_discount_percent", kind: "scalar", T: 2, opt: true }
]);


export { UsageEventKind, ModelSelectionSnapshot, ModelSelectionSnapshot_ModelParameterValue, UsageEventDetails, UsageEventDetails_PromptHook, UsageEventDetails_BugFinderTriggerV1, UsageEventDetails_BugBot, UsageEventDetails_Chat, UsageEventDetails_FastApply, UsageEventDetails_Composer, UsageEventDetails_ToolCallComposer, UsageEventDetails_WarmComposer, UsageEventDetails_ContextChat, UsageEventDetails_CmdK, UsageEventDetails_TerminalCmdK, UsageEventDetails_AiReviewAcceptedComment, UsageEventDetails_InterpreterChat, UsageEventDetails_SlashEdit, UsageEvent, UsageEventDisplay, TokenUsage };
