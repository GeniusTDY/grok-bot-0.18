/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:52214-52416
 * Region SHA-256: 2c7c6cfc6249b5c9ebc95bff328c7571f50e77b539130d6851b215b0aef35c3a
 * Atomic B0 exports: 6 messages + 1 enums = 7
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type SmartModeClassifierDecision = 0 | 1 | 2;
var SmartModeClassifierDecision: {
  "UNSPECIFIED": 0;
  "ALLOW": 1;
  "BLOCK": 2;
  0: "UNSPECIFIED";
  1: "ALLOW";
  2: "BLOCK";
};
(function(SmartModeClassifierDecision2) {
  SmartModeClassifierDecision2[SmartModeClassifierDecision2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SmartModeClassifierDecision2[SmartModeClassifierDecision2["ALLOW"] = 1] = "ALLOW";
  SmartModeClassifierDecision2[SmartModeClassifierDecision2["BLOCK"] = 2] = "BLOCK";
})(SmartModeClassifierDecision! || (SmartModeClassifierDecision = {} as typeof SmartModeClassifierDecision));
proto3.util.setEnumType(SmartModeClassifierDecision, "agent.v1.SmartModeClassifierDecision", [
  { no: 0, name: "SMART_MODE_CLASSIFIER_DECISION_UNSPECIFIED" },
  { no: 1, name: "SMART_MODE_CLASSIFIER_DECISION_ALLOW" },
  { no: 2, name: "SMART_MODE_CLASSIFIER_DECISION_BLOCK" }
]);
var SmartModeClassifierConversationMessage$Runtime = (() => class _SmartModeClassifierConversationMessage extends Message<_SmartModeClassifierConversationMessage> {
  declare role: string;
  declare content: string;
  constructor(data?: PartialMessage<_SmartModeClassifierConversationMessage>) {
    super();
    this.role = "";
    this.content = "";
    proto3.util.initPartial(data, this as _SmartModeClassifierConversationMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeClassifierConversationMessage {
    return new _SmartModeClassifierConversationMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeClassifierConversationMessage {
    return new _SmartModeClassifierConversationMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeClassifierConversationMessage {
    return new _SmartModeClassifierConversationMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeClassifierConversationMessage | PlainMessage<_SmartModeClassifierConversationMessage> | undefined | null, b2: _SmartModeClassifierConversationMessage | PlainMessage<_SmartModeClassifierConversationMessage> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeClassifierConversationMessage as unknown as MessageType<_SmartModeClassifierConversationMessage>, a, b2);
  }
})();
export type SmartModeClassifierConversationMessage = InstanceType<typeof SmartModeClassifierConversationMessage$Runtime>;
var SmartModeClassifierConversationMessage: MessageType<SmartModeClassifierConversationMessage> = SmartModeClassifierConversationMessage$Runtime as unknown as MessageType<SmartModeClassifierConversationMessage>;
(SmartModeClassifierConversationMessage as MutableMessageType<SmartModeClassifierConversationMessage>).runtime = proto3;
(SmartModeClassifierConversationMessage as MutableMessageType<SmartModeClassifierConversationMessage>).typeName = "agent.v1.SmartModeClassifierConversationMessage";
(SmartModeClassifierConversationMessage as MutableMessageType<SmartModeClassifierConversationMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "role",
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
var SmartModeClassifierArgs$Runtime = (() => class _SmartModeClassifierArgs extends Message<_SmartModeClassifierArgs> {
  declare toolCallId: string;
  declare parentConversationId?: string;
  declare target?: SmartModeRiskTarget;
  declare conversationContext: SmartModeClassifierConversationMessage[];
  constructor(data?: PartialMessage<_SmartModeClassifierArgs>) {
    super();
    this.toolCallId = "";
    this.conversationContext = [];
    proto3.util.initPartial(data, this as _SmartModeClassifierArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeClassifierArgs {
    return new _SmartModeClassifierArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeClassifierArgs {
    return new _SmartModeClassifierArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeClassifierArgs {
    return new _SmartModeClassifierArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeClassifierArgs | PlainMessage<_SmartModeClassifierArgs> | undefined | null, b2: _SmartModeClassifierArgs | PlainMessage<_SmartModeClassifierArgs> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeClassifierArgs as unknown as MessageType<_SmartModeClassifierArgs>, a, b2);
  }
})();
export type SmartModeClassifierArgs = InstanceType<typeof SmartModeClassifierArgs$Runtime>;
var SmartModeClassifierArgs: MessageType<SmartModeClassifierArgs> = SmartModeClassifierArgs$Runtime as unknown as MessageType<SmartModeClassifierArgs>;
(SmartModeClassifierArgs as MutableMessageType<SmartModeClassifierArgs>).runtime = proto3;
(SmartModeClassifierArgs as MutableMessageType<SmartModeClassifierArgs>).typeName = "agent.v1.SmartModeClassifierArgs";
(SmartModeClassifierArgs as MutableMessageType<SmartModeClassifierArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "parent_conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "target", kind: "message", T: SmartModeRiskTarget },
  { no: 4, name: "conversation_context", kind: "message", T: SmartModeClassifierConversationMessage, repeated: true }
]);
var SmartModeRiskTarget$Runtime = (() => class _SmartModeRiskTarget extends Message<_SmartModeRiskTarget> {
  declare action: string;
  declare arguments?: Struct;
  constructor(data?: PartialMessage<_SmartModeRiskTarget>) {
    super();
    this.action = "";
    proto3.util.initPartial(data, this as _SmartModeRiskTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeRiskTarget {
    return new _SmartModeRiskTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeRiskTarget {
    return new _SmartModeRiskTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeRiskTarget {
    return new _SmartModeRiskTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeRiskTarget | PlainMessage<_SmartModeRiskTarget> | undefined | null, b2: _SmartModeRiskTarget | PlainMessage<_SmartModeRiskTarget> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeRiskTarget as unknown as MessageType<_SmartModeRiskTarget>, a, b2);
  }
})();
export type SmartModeRiskTarget = InstanceType<typeof SmartModeRiskTarget$Runtime>;
var SmartModeRiskTarget: MessageType<SmartModeRiskTarget> = SmartModeRiskTarget$Runtime as unknown as MessageType<SmartModeRiskTarget>;
(SmartModeRiskTarget as MutableMessageType<SmartModeRiskTarget>).runtime = proto3;
(SmartModeRiskTarget as MutableMessageType<SmartModeRiskTarget>).typeName = "agent.v1.SmartModeRiskTarget";
(SmartModeRiskTarget as MutableMessageType<SmartModeRiskTarget>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "arguments", kind: "message", T: Struct }
]);
var SmartModeClassifierResult$Runtime = (() => class _SmartModeClassifierResult extends Message<_SmartModeClassifierResult> {
  declare result: { case: "success"; value: SmartModeClassifierSuccess } | { case: "error"; value: SmartModeClassifierError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SmartModeClassifierResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SmartModeClassifierResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeClassifierResult {
    return new _SmartModeClassifierResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeClassifierResult {
    return new _SmartModeClassifierResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeClassifierResult {
    return new _SmartModeClassifierResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeClassifierResult | PlainMessage<_SmartModeClassifierResult> | undefined | null, b2: _SmartModeClassifierResult | PlainMessage<_SmartModeClassifierResult> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeClassifierResult as unknown as MessageType<_SmartModeClassifierResult>, a, b2);
  }
})();
export type SmartModeClassifierResult = InstanceType<typeof SmartModeClassifierResult$Runtime>;
var SmartModeClassifierResult: MessageType<SmartModeClassifierResult> = SmartModeClassifierResult$Runtime as unknown as MessageType<SmartModeClassifierResult>;
(SmartModeClassifierResult as MutableMessageType<SmartModeClassifierResult>).runtime = proto3;
(SmartModeClassifierResult as MutableMessageType<SmartModeClassifierResult>).typeName = "agent.v1.SmartModeClassifierResult";
(SmartModeClassifierResult as MutableMessageType<SmartModeClassifierResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SmartModeClassifierSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SmartModeClassifierError, oneof: "result" }
]);
var SmartModeClassifierSuccess$Runtime = (() => class _SmartModeClassifierSuccess extends Message<_SmartModeClassifierSuccess> {
  declare decision: SmartModeClassifierDecision;
  declare blockReason?: string;
  declare proposedAllowRule?: string;
  constructor(data?: PartialMessage<_SmartModeClassifierSuccess>) {
    super();
    this.decision = SmartModeClassifierDecision.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SmartModeClassifierSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeClassifierSuccess {
    return new _SmartModeClassifierSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeClassifierSuccess {
    return new _SmartModeClassifierSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeClassifierSuccess {
    return new _SmartModeClassifierSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeClassifierSuccess | PlainMessage<_SmartModeClassifierSuccess> | undefined | null, b2: _SmartModeClassifierSuccess | PlainMessage<_SmartModeClassifierSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeClassifierSuccess as unknown as MessageType<_SmartModeClassifierSuccess>, a, b2);
  }
})();
export type SmartModeClassifierSuccess = InstanceType<typeof SmartModeClassifierSuccess$Runtime>;
var SmartModeClassifierSuccess: MessageType<SmartModeClassifierSuccess> = SmartModeClassifierSuccess$Runtime as unknown as MessageType<SmartModeClassifierSuccess>;
(SmartModeClassifierSuccess as MutableMessageType<SmartModeClassifierSuccess>).runtime = proto3;
(SmartModeClassifierSuccess as MutableMessageType<SmartModeClassifierSuccess>).typeName = "agent.v1.SmartModeClassifierSuccess";
(SmartModeClassifierSuccess as MutableMessageType<SmartModeClassifierSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "decision", kind: "enum", T: proto3.getEnumType(SmartModeClassifierDecision) },
  { no: 2, name: "block_reason", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "proposed_allow_rule", kind: "scalar", T: 9, opt: true }
]);
var SmartModeClassifierError$Runtime = (() => class _SmartModeClassifierError extends Message<_SmartModeClassifierError> {
  declare error: string;
  constructor(data?: PartialMessage<_SmartModeClassifierError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SmartModeClassifierError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SmartModeClassifierError {
    return new _SmartModeClassifierError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SmartModeClassifierError {
    return new _SmartModeClassifierError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SmartModeClassifierError {
    return new _SmartModeClassifierError().fromJsonString(jsonString, options);
  }
  static equals(a: _SmartModeClassifierError | PlainMessage<_SmartModeClassifierError> | undefined | null, b2: _SmartModeClassifierError | PlainMessage<_SmartModeClassifierError> | undefined | null): boolean {
    return proto3.util.equals(_SmartModeClassifierError as unknown as MessageType<_SmartModeClassifierError>, a, b2);
  }
})();
export type SmartModeClassifierError = InstanceType<typeof SmartModeClassifierError$Runtime>;
var SmartModeClassifierError: MessageType<SmartModeClassifierError> = SmartModeClassifierError$Runtime as unknown as MessageType<SmartModeClassifierError>;
(SmartModeClassifierError as MutableMessageType<SmartModeClassifierError>).runtime = proto3;
(SmartModeClassifierError as MutableMessageType<SmartModeClassifierError>).typeName = "agent.v1.SmartModeClassifierError";
(SmartModeClassifierError as MutableMessageType<SmartModeClassifierError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { SmartModeClassifierDecision, SmartModeClassifierConversationMessage, SmartModeClassifierArgs, SmartModeRiskTarget, SmartModeClassifierResult, SmartModeClassifierSuccess, SmartModeClassifierError };
