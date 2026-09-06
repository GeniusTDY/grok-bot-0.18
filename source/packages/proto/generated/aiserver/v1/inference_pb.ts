/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:258081-259591
 * Region SHA-256: 9952f29fd5f37c3eb1a108df1c46c73056ccb9fb0d3415c81035113521433eee
 */
import { Any, Empty, Message, Struct, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type InferenceReason = 0 | 1;
var InferenceReason: {
  "UNSPECIFIED": 0;
  "GEMINI_VIDEO_SUBAGENT": 1;
  0: "UNSPECIFIED";
  1: "GEMINI_VIDEO_SUBAGENT";
};
export type InferenceMessageRole = 0 | 1 | 2 | 3 | 4;
var InferenceMessageRole: {
  "UNSPECIFIED": 0;
  "USER": 1;
  "ASSISTANT": 2;
  "TOOL": 3;
  "SYSTEM": 4;
  0: "UNSPECIFIED";
  1: "USER";
  2: "ASSISTANT";
  3: "TOOL";
  4: "SYSTEM";
};
export type InferenceStreamErrorType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
var InferenceStreamErrorType: {
  "UNSPECIFIED": 0;
  "UNKNOWN": 1;
  "INPUT_TOKEN_LIMIT": 2;
  "OUTPUT_TOKEN_LIMIT": 3;
  "RATE_LIMIT": 4;
  "AUTHENTICATION": 5;
  "PERMISSION": 6;
  "OVERLOADED": 7;
  "CONTENT_FILTER": 8;
  0: "UNSPECIFIED";
  1: "UNKNOWN";
  2: "INPUT_TOKEN_LIMIT";
  3: "OUTPUT_TOKEN_LIMIT";
  4: "RATE_LIMIT";
  5: "AUTHENTICATION";
  6: "PERMISSION";
  7: "OVERLOADED";
  8: "CONTENT_FILTER";
};
(function(InferenceReason2) {
  InferenceReason2[InferenceReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InferenceReason2[InferenceReason2["GEMINI_VIDEO_SUBAGENT"] = 1] = "GEMINI_VIDEO_SUBAGENT";
})(InferenceReason! || (InferenceReason = {} as typeof InferenceReason));
proto3.util.setEnumType(InferenceReason, "aiserver.v1.InferenceReason", [
  { no: 0, name: "INFERENCE_REASON_UNSPECIFIED" },
  { no: 1, name: "INFERENCE_REASON_GEMINI_VIDEO_SUBAGENT" }
]);
(function(InferenceMessageRole2) {
  InferenceMessageRole2[InferenceMessageRole2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InferenceMessageRole2[InferenceMessageRole2["USER"] = 1] = "USER";
  InferenceMessageRole2[InferenceMessageRole2["ASSISTANT"] = 2] = "ASSISTANT";
  InferenceMessageRole2[InferenceMessageRole2["TOOL"] = 3] = "TOOL";
  InferenceMessageRole2[InferenceMessageRole2["SYSTEM"] = 4] = "SYSTEM";
})(InferenceMessageRole! || (InferenceMessageRole = {} as typeof InferenceMessageRole));
proto3.util.setEnumType(InferenceMessageRole, "aiserver.v1.InferenceMessageRole", [
  { no: 0, name: "INFERENCE_MESSAGE_ROLE_UNSPECIFIED" },
  { no: 1, name: "INFERENCE_MESSAGE_ROLE_USER" },
  { no: 2, name: "INFERENCE_MESSAGE_ROLE_ASSISTANT" },
  { no: 3, name: "INFERENCE_MESSAGE_ROLE_TOOL" },
  { no: 4, name: "INFERENCE_MESSAGE_ROLE_SYSTEM" }
]);
(function(InferenceStreamErrorType2) {
  InferenceStreamErrorType2[InferenceStreamErrorType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InferenceStreamErrorType2[InferenceStreamErrorType2["UNKNOWN"] = 1] = "UNKNOWN";
  InferenceStreamErrorType2[InferenceStreamErrorType2["INPUT_TOKEN_LIMIT"] = 2] = "INPUT_TOKEN_LIMIT";
  InferenceStreamErrorType2[InferenceStreamErrorType2["OUTPUT_TOKEN_LIMIT"] = 3] = "OUTPUT_TOKEN_LIMIT";
  InferenceStreamErrorType2[InferenceStreamErrorType2["RATE_LIMIT"] = 4] = "RATE_LIMIT";
  InferenceStreamErrorType2[InferenceStreamErrorType2["AUTHENTICATION"] = 5] = "AUTHENTICATION";
  InferenceStreamErrorType2[InferenceStreamErrorType2["PERMISSION"] = 6] = "PERMISSION";
  InferenceStreamErrorType2[InferenceStreamErrorType2["OVERLOADED"] = 7] = "OVERLOADED";
  InferenceStreamErrorType2[InferenceStreamErrorType2["CONTENT_FILTER"] = 8] = "CONTENT_FILTER";
})(InferenceStreamErrorType! || (InferenceStreamErrorType = {} as typeof InferenceStreamErrorType));
proto3.util.setEnumType(InferenceStreamErrorType, "aiserver.v1.InferenceStreamErrorType", [
  { no: 0, name: "INFERENCE_STREAM_ERROR_TYPE_UNSPECIFIED" },
  { no: 1, name: "INFERENCE_STREAM_ERROR_TYPE_UNKNOWN" },
  { no: 2, name: "INFERENCE_STREAM_ERROR_TYPE_INPUT_TOKEN_LIMIT" },
  { no: 3, name: "INFERENCE_STREAM_ERROR_TYPE_OUTPUT_TOKEN_LIMIT" },
  { no: 4, name: "INFERENCE_STREAM_ERROR_TYPE_RATE_LIMIT" },
  { no: 5, name: "INFERENCE_STREAM_ERROR_TYPE_AUTHENTICATION" },
  { no: 6, name: "INFERENCE_STREAM_ERROR_TYPE_PERMISSION" },
  { no: 7, name: "INFERENCE_STREAM_ERROR_TYPE_OVERLOADED" },
  { no: 8, name: "INFERENCE_STREAM_ERROR_TYPE_CONTENT_FILTER" }
]);
var InferenceStreamRequest$Runtime = (() => class _InferenceStreamRequest extends Message<_InferenceStreamRequest> {
  declare messages: InferenceCoreMessage[];
  declare tools: InferenceAgentTool[];
  declare providerDefinedTools: InferenceNamedProviderDefinedTool[];
  declare modelConfig?: InferenceModelConfig;
  declare modelId?: string;
  declare invocationId?: string;
  declare requestedModel?: InferenceRequestedModel;
  declare conversationId?: string;
  declare acceptedUnadvertisedToolNames: string[];
  declare automationId?: string;
  declare inferenceReason?: InferenceReason;
  constructor(data?: PartialMessage<_InferenceStreamRequest>) {
    super();
    this.messages = [];
    this.tools = [];
    this.providerDefinedTools = [];
    this.acceptedUnadvertisedToolNames = [];
    proto3.util.initPartial(data, this as _InferenceStreamRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceStreamRequest {
    return new _InferenceStreamRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceStreamRequest {
    return new _InferenceStreamRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceStreamRequest {
    return new _InferenceStreamRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceStreamRequest | PlainMessage<_InferenceStreamRequest> | undefined | null, b2: _InferenceStreamRequest | PlainMessage<_InferenceStreamRequest> | undefined | null): boolean {
    return proto3.util.equals(_InferenceStreamRequest as unknown as MessageType<_InferenceStreamRequest>, a, b2);
  }
})();
export type InferenceStreamRequest = InstanceType<typeof InferenceStreamRequest$Runtime>;
var InferenceStreamRequest: MessageType<InferenceStreamRequest> = InferenceStreamRequest$Runtime as unknown as MessageType<InferenceStreamRequest>;
(InferenceStreamRequest as MutableMessageType<InferenceStreamRequest>).runtime = proto3;
(InferenceStreamRequest as MutableMessageType<InferenceStreamRequest>).typeName = "aiserver.v1.InferenceStreamRequest";
(InferenceStreamRequest as MutableMessageType<InferenceStreamRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: InferenceCoreMessage, repeated: true },
  { no: 2, name: "tools", kind: "message", T: InferenceAgentTool, repeated: true },
  { no: 3, name: "provider_defined_tools", kind: "message", T: InferenceNamedProviderDefinedTool, repeated: true },
  { no: 4, name: "model_config", kind: "message", T: InferenceModelConfig, opt: true },
  { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "invocation_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "requested_model", kind: "message", T: InferenceRequestedModel, opt: true },
  { no: 8, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "accepted_unadvertised_tool_names", kind: "scalar", T: 9, repeated: true },
  { no: 10, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "inference_reason", kind: "enum", T: proto3.getEnumType(InferenceReason), opt: true }
]);
var InferenceRequestedModel$Runtime = (() => class _InferenceRequestedModel extends Message<_InferenceRequestedModel> {
  declare modelId: string;
  declare maxMode: boolean;
  declare parameters: InferenceModelParameterValue[];
  declare builtInModel: boolean;
  declare isVariantStringRepresentation: boolean;
  constructor(data?: PartialMessage<_InferenceRequestedModel>) {
    super();
    this.modelId = "";
    this.maxMode = false;
    this.parameters = [];
    this.builtInModel = false;
    this.isVariantStringRepresentation = false;
    proto3.util.initPartial(data, this as _InferenceRequestedModel);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceRequestedModel {
    return new _InferenceRequestedModel().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceRequestedModel {
    return new _InferenceRequestedModel().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceRequestedModel {
    return new _InferenceRequestedModel().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceRequestedModel | PlainMessage<_InferenceRequestedModel> | undefined | null, b2: _InferenceRequestedModel | PlainMessage<_InferenceRequestedModel> | undefined | null): boolean {
    return proto3.util.equals(_InferenceRequestedModel as unknown as MessageType<_InferenceRequestedModel>, a, b2);
  }
})();
export type InferenceRequestedModel = InstanceType<typeof InferenceRequestedModel$Runtime>;
var InferenceRequestedModel: MessageType<InferenceRequestedModel> = InferenceRequestedModel$Runtime as unknown as MessageType<InferenceRequestedModel>;
(InferenceRequestedModel as MutableMessageType<InferenceRequestedModel>).runtime = proto3;
(InferenceRequestedModel as MutableMessageType<InferenceRequestedModel>).typeName = "aiserver.v1.InferenceRequestedModel";
(InferenceRequestedModel as MutableMessageType<InferenceRequestedModel>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "parameters", kind: "message", T: InferenceModelParameterValue, repeated: true },
  {
    no: 4,
    name: "built_in_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "is_variant_string_representation",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var InferenceModelParameterValue$Runtime = (() => class _InferenceModelParameterValue extends Message<_InferenceModelParameterValue> {
  declare id: string;
  declare value: string;
  constructor(data?: PartialMessage<_InferenceModelParameterValue>) {
    super();
    this.id = "";
    this.value = "";
    proto3.util.initPartial(data, this as _InferenceModelParameterValue);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceModelParameterValue {
    return new _InferenceModelParameterValue().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceModelParameterValue {
    return new _InferenceModelParameterValue().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceModelParameterValue {
    return new _InferenceModelParameterValue().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceModelParameterValue | PlainMessage<_InferenceModelParameterValue> | undefined | null, b2: _InferenceModelParameterValue | PlainMessage<_InferenceModelParameterValue> | undefined | null): boolean {
    return proto3.util.equals(_InferenceModelParameterValue as unknown as MessageType<_InferenceModelParameterValue>, a, b2);
  }
})();
export type InferenceModelParameterValue = InstanceType<typeof InferenceModelParameterValue$Runtime>;
var InferenceModelParameterValue: MessageType<InferenceModelParameterValue> = InferenceModelParameterValue$Runtime as unknown as MessageType<InferenceModelParameterValue>;
(InferenceModelParameterValue as MutableMessageType<InferenceModelParameterValue>).runtime = proto3;
(InferenceModelParameterValue as MutableMessageType<InferenceModelParameterValue>).typeName = "aiserver.v1.InferenceModelParameterValue";
(InferenceModelParameterValue as MutableMessageType<InferenceModelParameterValue>).fields = proto3.util.newFieldList(() => [
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
var InferenceCoreMessage$Runtime = (() => class _InferenceCoreMessage extends Message<_InferenceCoreMessage> {
  declare role: InferenceMessageRole;
  declare toolCalls: InferenceToolCall[];
  declare reasoningParts: InferenceReasoningPart[];
  declare modelProviderMessageId?: string;
  declare openaiPhase?: string;
  declare openaiPhaseNull?: boolean;
  declare content: { case: "text"; value: string } | { case: "parts"; value: InferenceContentParts } | { case: "toolContent"; value: InferenceToolResultContent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InferenceCoreMessage>) {
    super();
    this.role = InferenceMessageRole.UNSPECIFIED;
    this.content = { case: void 0 };
    this.toolCalls = [];
    this.reasoningParts = [];
    proto3.util.initPartial(data, this as _InferenceCoreMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceCoreMessage {
    return new _InferenceCoreMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceCoreMessage {
    return new _InferenceCoreMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceCoreMessage {
    return new _InferenceCoreMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceCoreMessage | PlainMessage<_InferenceCoreMessage> | undefined | null, b2: _InferenceCoreMessage | PlainMessage<_InferenceCoreMessage> | undefined | null): boolean {
    return proto3.util.equals(_InferenceCoreMessage as unknown as MessageType<_InferenceCoreMessage>, a, b2);
  }
})();
export type InferenceCoreMessage = InstanceType<typeof InferenceCoreMessage$Runtime>;
var InferenceCoreMessage: MessageType<InferenceCoreMessage> = InferenceCoreMessage$Runtime as unknown as MessageType<InferenceCoreMessage>;
(InferenceCoreMessage as MutableMessageType<InferenceCoreMessage>).runtime = proto3;
(InferenceCoreMessage as MutableMessageType<InferenceCoreMessage>).typeName = "aiserver.v1.InferenceCoreMessage";
(InferenceCoreMessage as MutableMessageType<InferenceCoreMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "role", kind: "enum", T: proto3.getEnumType(InferenceMessageRole) },
  { no: 2, name: "text", kind: "scalar", T: 9, oneof: "content" },
  { no: 3, name: "parts", kind: "message", T: InferenceContentParts, oneof: "content" },
  { no: 6, name: "tool_content", kind: "message", T: InferenceToolResultContent, oneof: "content" },
  { no: 4, name: "tool_calls", kind: "message", T: InferenceToolCall, repeated: true },
  { no: 7, name: "reasoning_parts", kind: "message", T: InferenceReasoningPart, repeated: true },
  { no: 8, name: "model_provider_message_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "openai_phase", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "openai_phase_null", kind: "scalar", T: 8, opt: true }
]);
var InferenceReasoningPart$Runtime = (() => class _InferenceReasoningPart extends Message<_InferenceReasoningPart> {
  declare isRedacted: boolean;
  declare text: string;
  declare signature?: string;
  declare redactedData?: string;
  declare modelName?: string;
  constructor(data?: PartialMessage<_InferenceReasoningPart>) {
    super();
    this.isRedacted = false;
    this.text = "";
    proto3.util.initPartial(data, this as _InferenceReasoningPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceReasoningPart {
    return new _InferenceReasoningPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceReasoningPart {
    return new _InferenceReasoningPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceReasoningPart {
    return new _InferenceReasoningPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceReasoningPart | PlainMessage<_InferenceReasoningPart> | undefined | null, b2: _InferenceReasoningPart | PlainMessage<_InferenceReasoningPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceReasoningPart as unknown as MessageType<_InferenceReasoningPart>, a, b2);
  }
})();
export type InferenceReasoningPart = InstanceType<typeof InferenceReasoningPart$Runtime>;
var InferenceReasoningPart: MessageType<InferenceReasoningPart> = InferenceReasoningPart$Runtime as unknown as MessageType<InferenceReasoningPart>;
(InferenceReasoningPart as MutableMessageType<InferenceReasoningPart>).runtime = proto3;
(InferenceReasoningPart as MutableMessageType<InferenceReasoningPart>).typeName = "aiserver.v1.InferenceReasoningPart";
(InferenceReasoningPart as MutableMessageType<InferenceReasoningPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_redacted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "signature", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "redacted_data", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model_name", kind: "scalar", T: 9, opt: true }
]);
var InferenceContentParts$Runtime = (() => class _InferenceContentParts extends Message<_InferenceContentParts> {
  declare parts: InferenceContentPart[];
  constructor(data?: PartialMessage<_InferenceContentParts>) {
    super();
    this.parts = [];
    proto3.util.initPartial(data, this as _InferenceContentParts);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceContentParts {
    return new _InferenceContentParts().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceContentParts {
    return new _InferenceContentParts().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceContentParts {
    return new _InferenceContentParts().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceContentParts | PlainMessage<_InferenceContentParts> | undefined | null, b2: _InferenceContentParts | PlainMessage<_InferenceContentParts> | undefined | null): boolean {
    return proto3.util.equals(_InferenceContentParts as unknown as MessageType<_InferenceContentParts>, a, b2);
  }
})();
export type InferenceContentParts = InstanceType<typeof InferenceContentParts$Runtime>;
var InferenceContentParts: MessageType<InferenceContentParts> = InferenceContentParts$Runtime as unknown as MessageType<InferenceContentParts>;
(InferenceContentParts as MutableMessageType<InferenceContentParts>).runtime = proto3;
(InferenceContentParts as MutableMessageType<InferenceContentParts>).typeName = "aiserver.v1.InferenceContentParts";
(InferenceContentParts as MutableMessageType<InferenceContentParts>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "parts", kind: "message", T: InferenceContentPart, repeated: true }
]);
var InferenceContentPart$Runtime = (() => class _InferenceContentPart extends Message<_InferenceContentPart> {
  declare part: { case: "text"; value: InferenceTextPart } | { case: "image"; value: InferenceImagePart } | { case: "file"; value: InferenceFilePart } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InferenceContentPart>) {
    super();
    this.part = { case: void 0 };
    proto3.util.initPartial(data, this as _InferenceContentPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceContentPart {
    return new _InferenceContentPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceContentPart {
    return new _InferenceContentPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceContentPart {
    return new _InferenceContentPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceContentPart | PlainMessage<_InferenceContentPart> | undefined | null, b2: _InferenceContentPart | PlainMessage<_InferenceContentPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceContentPart as unknown as MessageType<_InferenceContentPart>, a, b2);
  }
})();
export type InferenceContentPart = InstanceType<typeof InferenceContentPart$Runtime>;
var InferenceContentPart: MessageType<InferenceContentPart> = InferenceContentPart$Runtime as unknown as MessageType<InferenceContentPart>;
(InferenceContentPart as MutableMessageType<InferenceContentPart>).runtime = proto3;
(InferenceContentPart as MutableMessageType<InferenceContentPart>).typeName = "aiserver.v1.InferenceContentPart";
(InferenceContentPart as MutableMessageType<InferenceContentPart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: InferenceTextPart, oneof: "part" },
  { no: 2, name: "image", kind: "message", T: InferenceImagePart, oneof: "part" },
  { no: 3, name: "file", kind: "message", T: InferenceFilePart, oneof: "part" }
]);
var InferenceTextPart$Runtime = (() => class _InferenceTextPart extends Message<_InferenceTextPart> {
  declare text: string;
  declare providerOptions?: InferenceProviderOptions;
  constructor(data?: PartialMessage<_InferenceTextPart>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _InferenceTextPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceTextPart {
    return new _InferenceTextPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceTextPart {
    return new _InferenceTextPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceTextPart {
    return new _InferenceTextPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceTextPart | PlainMessage<_InferenceTextPart> | undefined | null, b2: _InferenceTextPart | PlainMessage<_InferenceTextPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceTextPart as unknown as MessageType<_InferenceTextPart>, a, b2);
  }
})();
export type InferenceTextPart = InstanceType<typeof InferenceTextPart$Runtime>;
var InferenceTextPart: MessageType<InferenceTextPart> = InferenceTextPart$Runtime as unknown as MessageType<InferenceTextPart>;
(InferenceTextPart as MutableMessageType<InferenceTextPart>).runtime = proto3;
(InferenceTextPart as MutableMessageType<InferenceTextPart>).typeName = "aiserver.v1.InferenceTextPart";
(InferenceTextPart as MutableMessageType<InferenceTextPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "provider_options", kind: "message", T: InferenceProviderOptions, opt: true }
]);
var InferenceImagePart$Runtime = (() => class _InferenceImagePart extends Message<_InferenceImagePart> {
  declare data: string;
  declare mimeType?: string;
  declare providerOptions?: InferenceProviderOptions;
  constructor(data?: PartialMessage<_InferenceImagePart>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _InferenceImagePart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceImagePart {
    return new _InferenceImagePart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceImagePart {
    return new _InferenceImagePart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceImagePart {
    return new _InferenceImagePart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceImagePart | PlainMessage<_InferenceImagePart> | undefined | null, b2: _InferenceImagePart | PlainMessage<_InferenceImagePart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceImagePart as unknown as MessageType<_InferenceImagePart>, a, b2);
  }
})();
export type InferenceImagePart = InstanceType<typeof InferenceImagePart$Runtime>;
var InferenceImagePart: MessageType<InferenceImagePart> = InferenceImagePart$Runtime as unknown as MessageType<InferenceImagePart>;
(InferenceImagePart as MutableMessageType<InferenceImagePart>).runtime = proto3;
(InferenceImagePart as MutableMessageType<InferenceImagePart>).typeName = "aiserver.v1.InferenceImagePart";
(InferenceImagePart as MutableMessageType<InferenceImagePart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "mime_type", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "provider_options", kind: "message", T: InferenceProviderOptions, opt: true }
]);
var InferenceFilePart$Runtime = (() => class _InferenceFilePart extends Message<_InferenceFilePart> {
  declare data: string;
  declare mediaType: string;
  declare filename?: string;
  declare providerOptions?: InferenceProviderOptions;
  constructor(data?: PartialMessage<_InferenceFilePart>) {
    super();
    this.data = "";
    this.mediaType = "";
    proto3.util.initPartial(data, this as _InferenceFilePart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceFilePart {
    return new _InferenceFilePart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceFilePart {
    return new _InferenceFilePart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceFilePart {
    return new _InferenceFilePart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceFilePart | PlainMessage<_InferenceFilePart> | undefined | null, b2: _InferenceFilePart | PlainMessage<_InferenceFilePart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceFilePart as unknown as MessageType<_InferenceFilePart>, a, b2);
  }
})();
export type InferenceFilePart = InstanceType<typeof InferenceFilePart$Runtime>;
var InferenceFilePart: MessageType<InferenceFilePart> = InferenceFilePart$Runtime as unknown as MessageType<InferenceFilePart>;
(InferenceFilePart as MutableMessageType<InferenceFilePart>).runtime = proto3;
(InferenceFilePart as MutableMessageType<InferenceFilePart>).typeName = "aiserver.v1.InferenceFilePart";
(InferenceFilePart as MutableMessageType<InferenceFilePart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "media_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "filename", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "provider_options", kind: "message", T: InferenceProviderOptions, opt: true }
]);
var InferenceToolCall$Runtime = (() => class _InferenceToolCall extends Message<_InferenceToolCall> {
  declare toolCallId: string;
  declare toolName: string;
  declare args?: Struct;
  declare rawToolCallArgs?: string;
  constructor(data?: PartialMessage<_InferenceToolCall>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    proto3.util.initPartial(data, this as _InferenceToolCall);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceToolCall {
    return new _InferenceToolCall().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceToolCall {
    return new _InferenceToolCall().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceToolCall {
    return new _InferenceToolCall().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceToolCall | PlainMessage<_InferenceToolCall> | undefined | null, b2: _InferenceToolCall | PlainMessage<_InferenceToolCall> | undefined | null): boolean {
    return proto3.util.equals(_InferenceToolCall as unknown as MessageType<_InferenceToolCall>, a, b2);
  }
})();
export type InferenceToolCall = InstanceType<typeof InferenceToolCall$Runtime>;
var InferenceToolCall: MessageType<InferenceToolCall> = InferenceToolCall$Runtime as unknown as MessageType<InferenceToolCall>;
(InferenceToolCall as MutableMessageType<InferenceToolCall>).runtime = proto3;
(InferenceToolCall as MutableMessageType<InferenceToolCall>).typeName = "aiserver.v1.InferenceToolCall";
(InferenceToolCall as MutableMessageType<InferenceToolCall>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "args", kind: "message", T: Struct },
  { no: 4, name: "raw_tool_call_args", kind: "scalar", T: 9, opt: true }
]);
var InferenceAgentTool$Runtime = (() => class _InferenceAgentTool extends Message<_InferenceAgentTool> {
  declare name: string;
  declare description: string;
  declare parameters?: Struct;
  declare customToolFormat?: InferenceCustomToolFormat;
  constructor(data?: PartialMessage<_InferenceAgentTool>) {
    super();
    this.name = "";
    this.description = "";
    proto3.util.initPartial(data, this as _InferenceAgentTool);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceAgentTool {
    return new _InferenceAgentTool().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceAgentTool {
    return new _InferenceAgentTool().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceAgentTool {
    return new _InferenceAgentTool().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceAgentTool | PlainMessage<_InferenceAgentTool> | undefined | null, b2: _InferenceAgentTool | PlainMessage<_InferenceAgentTool> | undefined | null): boolean {
    return proto3.util.equals(_InferenceAgentTool as unknown as MessageType<_InferenceAgentTool>, a, b2);
  }
})();
export type InferenceAgentTool = InstanceType<typeof InferenceAgentTool$Runtime>;
var InferenceAgentTool: MessageType<InferenceAgentTool> = InferenceAgentTool$Runtime as unknown as MessageType<InferenceAgentTool>;
(InferenceAgentTool as MutableMessageType<InferenceAgentTool>).runtime = proto3;
(InferenceAgentTool as MutableMessageType<InferenceAgentTool>).typeName = "aiserver.v1.InferenceAgentTool";
(InferenceAgentTool as MutableMessageType<InferenceAgentTool>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  { no: 3, name: "parameters", kind: "message", T: Struct },
  { no: 4, name: "custom_tool_format", kind: "message", T: InferenceCustomToolFormat, opt: true }
]);
var InferenceCustomToolFormat$Runtime = (() => class _InferenceCustomToolFormat extends Message<_InferenceCustomToolFormat> {
  declare type: string;
  declare definition: string;
  declare syntax: string;
  constructor(data?: PartialMessage<_InferenceCustomToolFormat>) {
    super();
    this.type = "";
    this.definition = "";
    this.syntax = "";
    proto3.util.initPartial(data, this as _InferenceCustomToolFormat);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceCustomToolFormat {
    return new _InferenceCustomToolFormat().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceCustomToolFormat {
    return new _InferenceCustomToolFormat().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceCustomToolFormat {
    return new _InferenceCustomToolFormat().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceCustomToolFormat | PlainMessage<_InferenceCustomToolFormat> | undefined | null, b2: _InferenceCustomToolFormat | PlainMessage<_InferenceCustomToolFormat> | undefined | null): boolean {
    return proto3.util.equals(_InferenceCustomToolFormat as unknown as MessageType<_InferenceCustomToolFormat>, a, b2);
  }
})();
export type InferenceCustomToolFormat = InstanceType<typeof InferenceCustomToolFormat$Runtime>;
var InferenceCustomToolFormat: MessageType<InferenceCustomToolFormat> = InferenceCustomToolFormat$Runtime as unknown as MessageType<InferenceCustomToolFormat>;
(InferenceCustomToolFormat as MutableMessageType<InferenceCustomToolFormat>).runtime = proto3;
(InferenceCustomToolFormat as MutableMessageType<InferenceCustomToolFormat>).typeName = "aiserver.v1.InferenceCustomToolFormat";
(InferenceCustomToolFormat as MutableMessageType<InferenceCustomToolFormat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "definition",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "syntax",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InferenceNamedProviderDefinedTool$Runtime = (() => class _InferenceNamedProviderDefinedTool extends Message<_InferenceNamedProviderDefinedTool> {
  declare name: string;
  declare id: string;
  declare type: string;
  declare options?: Struct;
  constructor(data?: PartialMessage<_InferenceNamedProviderDefinedTool>) {
    super();
    this.name = "";
    this.id = "";
    this.type = "";
    proto3.util.initPartial(data, this as _InferenceNamedProviderDefinedTool);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceNamedProviderDefinedTool {
    return new _InferenceNamedProviderDefinedTool().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceNamedProviderDefinedTool {
    return new _InferenceNamedProviderDefinedTool().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceNamedProviderDefinedTool {
    return new _InferenceNamedProviderDefinedTool().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceNamedProviderDefinedTool | PlainMessage<_InferenceNamedProviderDefinedTool> | undefined | null, b2: _InferenceNamedProviderDefinedTool | PlainMessage<_InferenceNamedProviderDefinedTool> | undefined | null): boolean {
    return proto3.util.equals(_InferenceNamedProviderDefinedTool as unknown as MessageType<_InferenceNamedProviderDefinedTool>, a, b2);
  }
})();
export type InferenceNamedProviderDefinedTool = InstanceType<typeof InferenceNamedProviderDefinedTool$Runtime>;
var InferenceNamedProviderDefinedTool: MessageType<InferenceNamedProviderDefinedTool> = InferenceNamedProviderDefinedTool$Runtime as unknown as MessageType<InferenceNamedProviderDefinedTool>;
(InferenceNamedProviderDefinedTool as MutableMessageType<InferenceNamedProviderDefinedTool>).runtime = proto3;
(InferenceNamedProviderDefinedTool as MutableMessageType<InferenceNamedProviderDefinedTool>).typeName = "aiserver.v1.InferenceNamedProviderDefinedTool";
(InferenceNamedProviderDefinedTool as MutableMessageType<InferenceNamedProviderDefinedTool>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  {
    no: 3,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "options", kind: "message", T: Struct }
]);
var InferenceModelConfig$Runtime = (() => class _InferenceModelConfig extends Message<_InferenceModelConfig> {
  declare maxTokens?: number;
  declare temperature?: number;
  declare topP?: number;
  declare stopSequences: string[];
  constructor(data?: PartialMessage<_InferenceModelConfig>) {
    super();
    this.stopSequences = [];
    proto3.util.initPartial(data, this as _InferenceModelConfig);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceModelConfig {
    return new _InferenceModelConfig().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceModelConfig {
    return new _InferenceModelConfig().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceModelConfig {
    return new _InferenceModelConfig().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceModelConfig | PlainMessage<_InferenceModelConfig> | undefined | null, b2: _InferenceModelConfig | PlainMessage<_InferenceModelConfig> | undefined | null): boolean {
    return proto3.util.equals(_InferenceModelConfig as unknown as MessageType<_InferenceModelConfig>, a, b2);
  }
})();
export type InferenceModelConfig = InstanceType<typeof InferenceModelConfig$Runtime>;
var InferenceModelConfig: MessageType<InferenceModelConfig> = InferenceModelConfig$Runtime as unknown as MessageType<InferenceModelConfig>;
(InferenceModelConfig as MutableMessageType<InferenceModelConfig>).runtime = proto3;
(InferenceModelConfig as MutableMessageType<InferenceModelConfig>).typeName = "aiserver.v1.InferenceModelConfig";
(InferenceModelConfig as MutableMessageType<InferenceModelConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "max_tokens", kind: "scalar", T: 5, opt: true },
  { no: 2, name: "temperature", kind: "scalar", T: 2, opt: true },
  { no: 3, name: "top_p", kind: "scalar", T: 2, opt: true },
  { no: 4, name: "stop_sequences", kind: "scalar", T: 9, repeated: true }
]);
var InferenceStreamResponse$Runtime = (() => class _InferenceStreamResponse extends Message<_InferenceStreamResponse> {
  declare response: { case: "textPart"; value: InferenceTextStreamPart } | { case: "toolCallPart"; value: InferenceToolCallStreamPart } | { case: "usage"; value: InferenceUsageInfo } | { case: "responseInfo"; value: InferenceResponseInfo } | { case: "extendedUsage"; value: InferenceExtendedUsageInfo } | { case: "providerMetadata"; value: InferenceProviderMetadataInfo } | { case: "invocationId"; value: InferenceInvocationIdInfo } | { case: "error"; value: InferenceStreamError } | { case: "thinkingPart"; value: InferenceThinkingStreamPart } | { case: "imageDescriptions"; value: InferenceImageDescriptionsInfo } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InferenceStreamResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _InferenceStreamResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceStreamResponse {
    return new _InferenceStreamResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceStreamResponse {
    return new _InferenceStreamResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceStreamResponse {
    return new _InferenceStreamResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceStreamResponse | PlainMessage<_InferenceStreamResponse> | undefined | null, b2: _InferenceStreamResponse | PlainMessage<_InferenceStreamResponse> | undefined | null): boolean {
    return proto3.util.equals(_InferenceStreamResponse as unknown as MessageType<_InferenceStreamResponse>, a, b2);
  }
})();
export type InferenceStreamResponse = InstanceType<typeof InferenceStreamResponse$Runtime>;
var InferenceStreamResponse: MessageType<InferenceStreamResponse> = InferenceStreamResponse$Runtime as unknown as MessageType<InferenceStreamResponse>;
(InferenceStreamResponse as MutableMessageType<InferenceStreamResponse>).runtime = proto3;
(InferenceStreamResponse as MutableMessageType<InferenceStreamResponse>).typeName = "aiserver.v1.InferenceStreamResponse";
(InferenceStreamResponse as MutableMessageType<InferenceStreamResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text_part", kind: "message", T: InferenceTextStreamPart, oneof: "response" },
  { no: 2, name: "tool_call_part", kind: "message", T: InferenceToolCallStreamPart, oneof: "response" },
  { no: 3, name: "usage", kind: "message", T: InferenceUsageInfo, oneof: "response" },
  { no: 4, name: "response_info", kind: "message", T: InferenceResponseInfo, oneof: "response" },
  { no: 5, name: "extended_usage", kind: "message", T: InferenceExtendedUsageInfo, oneof: "response" },
  { no: 6, name: "provider_metadata", kind: "message", T: InferenceProviderMetadataInfo, oneof: "response" },
  { no: 7, name: "invocation_id", kind: "message", T: InferenceInvocationIdInfo, oneof: "response" },
  { no: 8, name: "error", kind: "message", T: InferenceStreamError, oneof: "response" },
  { no: 9, name: "thinking_part", kind: "message", T: InferenceThinkingStreamPart, oneof: "response" },
  { no: 10, name: "image_descriptions", kind: "message", T: InferenceImageDescriptionsInfo, oneof: "response" }
]);
var InferenceImageDescriptionsInfo$Runtime = (() => class _InferenceImageDescriptionsInfo extends Message<_InferenceImageDescriptionsInfo> {
  declare descriptions: InferenceImageDescription[];
  constructor(data?: PartialMessage<_InferenceImageDescriptionsInfo>) {
    super();
    this.descriptions = [];
    proto3.util.initPartial(data, this as _InferenceImageDescriptionsInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceImageDescriptionsInfo {
    return new _InferenceImageDescriptionsInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceImageDescriptionsInfo {
    return new _InferenceImageDescriptionsInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceImageDescriptionsInfo {
    return new _InferenceImageDescriptionsInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceImageDescriptionsInfo | PlainMessage<_InferenceImageDescriptionsInfo> | undefined | null, b2: _InferenceImageDescriptionsInfo | PlainMessage<_InferenceImageDescriptionsInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceImageDescriptionsInfo as unknown as MessageType<_InferenceImageDescriptionsInfo>, a, b2);
  }
})();
export type InferenceImageDescriptionsInfo = InstanceType<typeof InferenceImageDescriptionsInfo$Runtime>;
var InferenceImageDescriptionsInfo: MessageType<InferenceImageDescriptionsInfo> = InferenceImageDescriptionsInfo$Runtime as unknown as MessageType<InferenceImageDescriptionsInfo>;
(InferenceImageDescriptionsInfo as MutableMessageType<InferenceImageDescriptionsInfo>).runtime = proto3;
(InferenceImageDescriptionsInfo as MutableMessageType<InferenceImageDescriptionsInfo>).typeName = "aiserver.v1.InferenceImageDescriptionsInfo";
(InferenceImageDescriptionsInfo as MutableMessageType<InferenceImageDescriptionsInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "descriptions", kind: "message", T: InferenceImageDescription, repeated: true }
]);
var InferenceImageDescription$Runtime = (() => class _InferenceImageDescription extends Message<_InferenceImageDescription> {
  declare messageIndex: number;
  declare partIndex: number;
  declare expContentIndex?: number;
  declare description: string;
  constructor(data?: PartialMessage<_InferenceImageDescription>) {
    super();
    this.messageIndex = 0;
    this.partIndex = 0;
    this.description = "";
    proto3.util.initPartial(data, this as _InferenceImageDescription);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceImageDescription {
    return new _InferenceImageDescription().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceImageDescription {
    return new _InferenceImageDescription().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceImageDescription {
    return new _InferenceImageDescription().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceImageDescription | PlainMessage<_InferenceImageDescription> | undefined | null, b2: _InferenceImageDescription | PlainMessage<_InferenceImageDescription> | undefined | null): boolean {
    return proto3.util.equals(_InferenceImageDescription as unknown as MessageType<_InferenceImageDescription>, a, b2);
  }
})();
export type InferenceImageDescription = InstanceType<typeof InferenceImageDescription$Runtime>;
var InferenceImageDescription: MessageType<InferenceImageDescription> = InferenceImageDescription$Runtime as unknown as MessageType<InferenceImageDescription>;
(InferenceImageDescription as MutableMessageType<InferenceImageDescription>).runtime = proto3;
(InferenceImageDescription as MutableMessageType<InferenceImageDescription>).typeName = "aiserver.v1.InferenceImageDescription";
(InferenceImageDescription as MutableMessageType<InferenceImageDescription>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "part_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "exp_content_index", kind: "scalar", T: 5, opt: true },
  {
    no: 4,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InferenceTextStreamPart$Runtime = (() => class _InferenceTextStreamPart extends Message<_InferenceTextStreamPart> {
  declare text: string;
  declare isFinal: boolean;
  constructor(data?: PartialMessage<_InferenceTextStreamPart>) {
    super();
    this.text = "";
    this.isFinal = false;
    proto3.util.initPartial(data, this as _InferenceTextStreamPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceTextStreamPart {
    return new _InferenceTextStreamPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceTextStreamPart {
    return new _InferenceTextStreamPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceTextStreamPart {
    return new _InferenceTextStreamPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceTextStreamPart | PlainMessage<_InferenceTextStreamPart> | undefined | null, b2: _InferenceTextStreamPart | PlainMessage<_InferenceTextStreamPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceTextStreamPart as unknown as MessageType<_InferenceTextStreamPart>, a, b2);
  }
})();
export type InferenceTextStreamPart = InstanceType<typeof InferenceTextStreamPart$Runtime>;
var InferenceTextStreamPart: MessageType<InferenceTextStreamPart> = InferenceTextStreamPart$Runtime as unknown as MessageType<InferenceTextStreamPart>;
(InferenceTextStreamPart as MutableMessageType<InferenceTextStreamPart>).runtime = proto3;
(InferenceTextStreamPart as MutableMessageType<InferenceTextStreamPart>).typeName = "aiserver.v1.InferenceTextStreamPart";
(InferenceTextStreamPart as MutableMessageType<InferenceTextStreamPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_final",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var InferenceThinkingStreamPart$Runtime = (() => class _InferenceThinkingStreamPart extends Message<_InferenceThinkingStreamPart> {
  declare text: string;
  declare signature?: string;
  declare isFinal: boolean;
  constructor(data?: PartialMessage<_InferenceThinkingStreamPart>) {
    super();
    this.text = "";
    this.isFinal = false;
    proto3.util.initPartial(data, this as _InferenceThinkingStreamPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceThinkingStreamPart {
    return new _InferenceThinkingStreamPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceThinkingStreamPart {
    return new _InferenceThinkingStreamPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceThinkingStreamPart {
    return new _InferenceThinkingStreamPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceThinkingStreamPart | PlainMessage<_InferenceThinkingStreamPart> | undefined | null, b2: _InferenceThinkingStreamPart | PlainMessage<_InferenceThinkingStreamPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceThinkingStreamPart as unknown as MessageType<_InferenceThinkingStreamPart>, a, b2);
  }
})();
export type InferenceThinkingStreamPart = InstanceType<typeof InferenceThinkingStreamPart$Runtime>;
var InferenceThinkingStreamPart: MessageType<InferenceThinkingStreamPart> = InferenceThinkingStreamPart$Runtime as unknown as MessageType<InferenceThinkingStreamPart>;
(InferenceThinkingStreamPart as MutableMessageType<InferenceThinkingStreamPart>).runtime = proto3;
(InferenceThinkingStreamPart as MutableMessageType<InferenceThinkingStreamPart>).typeName = "aiserver.v1.InferenceThinkingStreamPart";
(InferenceThinkingStreamPart as MutableMessageType<InferenceThinkingStreamPart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "signature", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "is_final",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var InferenceToolCallStreamPart$Runtime = (() => class _InferenceToolCallStreamPart extends Message<_InferenceToolCallStreamPart> {
  declare toolCallId: string;
  declare toolName: string;
  declare args: string;
  declare isComplete: boolean;
  declare toolIndex?: number;
  constructor(data?: PartialMessage<_InferenceToolCallStreamPart>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.args = "";
    this.isComplete = false;
    proto3.util.initPartial(data, this as _InferenceToolCallStreamPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceToolCallStreamPart {
    return new _InferenceToolCallStreamPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceToolCallStreamPart {
    return new _InferenceToolCallStreamPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceToolCallStreamPart {
    return new _InferenceToolCallStreamPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceToolCallStreamPart | PlainMessage<_InferenceToolCallStreamPart> | undefined | null, b2: _InferenceToolCallStreamPart | PlainMessage<_InferenceToolCallStreamPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceToolCallStreamPart as unknown as MessageType<_InferenceToolCallStreamPart>, a, b2);
  }
})();
export type InferenceToolCallStreamPart = InstanceType<typeof InferenceToolCallStreamPart$Runtime>;
var InferenceToolCallStreamPart: MessageType<InferenceToolCallStreamPart> = InferenceToolCallStreamPart$Runtime as unknown as MessageType<InferenceToolCallStreamPart>;
(InferenceToolCallStreamPart as MutableMessageType<InferenceToolCallStreamPart>).runtime = proto3;
(InferenceToolCallStreamPart as MutableMessageType<InferenceToolCallStreamPart>).typeName = "aiserver.v1.InferenceToolCallStreamPart";
(InferenceToolCallStreamPart as MutableMessageType<InferenceToolCallStreamPart>).fields = proto3.util.newFieldList(() => [
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
    name: "args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_complete",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "tool_index", kind: "scalar", T: 5, opt: true }
]);
var InferenceUsageInfo$Runtime = (() => class _InferenceUsageInfo extends Message<_InferenceUsageInfo> {
  declare promptTokens: number;
  declare completionTokens: number;
  declare totalTokens?: number;
  constructor(data?: PartialMessage<_InferenceUsageInfo>) {
    super();
    this.promptTokens = 0;
    this.completionTokens = 0;
    proto3.util.initPartial(data, this as _InferenceUsageInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceUsageInfo {
    return new _InferenceUsageInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceUsageInfo {
    return new _InferenceUsageInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceUsageInfo {
    return new _InferenceUsageInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceUsageInfo | PlainMessage<_InferenceUsageInfo> | undefined | null, b2: _InferenceUsageInfo | PlainMessage<_InferenceUsageInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceUsageInfo as unknown as MessageType<_InferenceUsageInfo>, a, b2);
  }
})();
export type InferenceUsageInfo = InstanceType<typeof InferenceUsageInfo$Runtime>;
var InferenceUsageInfo: MessageType<InferenceUsageInfo> = InferenceUsageInfo$Runtime as unknown as MessageType<InferenceUsageInfo>;
(InferenceUsageInfo as MutableMessageType<InferenceUsageInfo>).runtime = proto3;
(InferenceUsageInfo as MutableMessageType<InferenceUsageInfo>).typeName = "aiserver.v1.InferenceUsageInfo";
(InferenceUsageInfo as MutableMessageType<InferenceUsageInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prompt_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "completion_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "total_tokens", kind: "scalar", T: 5, opt: true }
]);
var InferenceExtendedUsageInfo$Runtime = (() => class _InferenceExtendedUsageInfo extends Message<_InferenceExtendedUsageInfo> {
  declare inputTokens: number;
  declare outputTokens: number;
  declare cacheReadTokens: number;
  declare cacheWriteTokens: number;
  declare maxTokens: number;
  constructor(data?: PartialMessage<_InferenceExtendedUsageInfo>) {
    super();
    this.inputTokens = 0;
    this.outputTokens = 0;
    this.cacheReadTokens = 0;
    this.cacheWriteTokens = 0;
    this.maxTokens = 0;
    proto3.util.initPartial(data, this as _InferenceExtendedUsageInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceExtendedUsageInfo {
    return new _InferenceExtendedUsageInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceExtendedUsageInfo {
    return new _InferenceExtendedUsageInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceExtendedUsageInfo {
    return new _InferenceExtendedUsageInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceExtendedUsageInfo | PlainMessage<_InferenceExtendedUsageInfo> | undefined | null, b2: _InferenceExtendedUsageInfo | PlainMessage<_InferenceExtendedUsageInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceExtendedUsageInfo as unknown as MessageType<_InferenceExtendedUsageInfo>, a, b2);
  }
})();
export type InferenceExtendedUsageInfo = InstanceType<typeof InferenceExtendedUsageInfo$Runtime>;
var InferenceExtendedUsageInfo: MessageType<InferenceExtendedUsageInfo> = InferenceExtendedUsageInfo$Runtime as unknown as MessageType<InferenceExtendedUsageInfo>;
(InferenceExtendedUsageInfo as MutableMessageType<InferenceExtendedUsageInfo>).runtime = proto3;
(InferenceExtendedUsageInfo as MutableMessageType<InferenceExtendedUsageInfo>).typeName = "aiserver.v1.InferenceExtendedUsageInfo";
(InferenceExtendedUsageInfo as MutableMessageType<InferenceExtendedUsageInfo>).fields = proto3.util.newFieldList(() => [
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
    name: "cache_read_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "cache_write_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "max_tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var InferenceResponseInfo$Runtime = (() => class _InferenceResponseInfo extends Message<_InferenceResponseInfo> {
  declare id: string;
  declare model: string;
  declare createdAt: bigint;
  declare messages: InferenceResponseMessage[];
  declare errorMessage?: string;
  declare inferenceExtraData?: InferenceExtraData;
  constructor(data?: PartialMessage<_InferenceResponseInfo>) {
    super();
    this.id = "";
    this.model = "";
    this.createdAt = protoInt64.zero;
    this.messages = [];
    proto3.util.initPartial(data, this as _InferenceResponseInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceResponseInfo {
    return new _InferenceResponseInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceResponseInfo {
    return new _InferenceResponseInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceResponseInfo {
    return new _InferenceResponseInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceResponseInfo | PlainMessage<_InferenceResponseInfo> | undefined | null, b2: _InferenceResponseInfo | PlainMessage<_InferenceResponseInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceResponseInfo as unknown as MessageType<_InferenceResponseInfo>, a, b2);
  }
})();
export type InferenceResponseInfo = InstanceType<typeof InferenceResponseInfo$Runtime>;
var InferenceResponseInfo: MessageType<InferenceResponseInfo> = InferenceResponseInfo$Runtime as unknown as MessageType<InferenceResponseInfo>;
(InferenceResponseInfo as MutableMessageType<InferenceResponseInfo>).runtime = proto3;
(InferenceResponseInfo as MutableMessageType<InferenceResponseInfo>).typeName = "aiserver.v1.InferenceResponseInfo";
(InferenceResponseInfo as MutableMessageType<InferenceResponseInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "created_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "messages", kind: "message", T: InferenceResponseMessage, repeated: true },
  { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "inference_extra_data", kind: "message", T: InferenceExtraData, opt: true }
]);
var InferenceResponseMessage$Runtime = (() => class _InferenceResponseMessage extends Message<_InferenceResponseMessage> {
  declare id: string;
  declare role: InferenceMessageRole;
  declare content?: string;
  declare toolCalls: InferenceToolCall[];
  declare toolResult?: InferenceToolResultContent;
  declare reasoningParts: InferenceReasoningPart[];
  constructor(data?: PartialMessage<_InferenceResponseMessage>) {
    super();
    this.id = "";
    this.role = InferenceMessageRole.UNSPECIFIED;
    this.toolCalls = [];
    this.reasoningParts = [];
    proto3.util.initPartial(data, this as _InferenceResponseMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceResponseMessage {
    return new _InferenceResponseMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceResponseMessage {
    return new _InferenceResponseMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceResponseMessage {
    return new _InferenceResponseMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceResponseMessage | PlainMessage<_InferenceResponseMessage> | undefined | null, b2: _InferenceResponseMessage | PlainMessage<_InferenceResponseMessage> | undefined | null): boolean {
    return proto3.util.equals(_InferenceResponseMessage as unknown as MessageType<_InferenceResponseMessage>, a, b2);
  }
})();
export type InferenceResponseMessage = InstanceType<typeof InferenceResponseMessage$Runtime>;
var InferenceResponseMessage: MessageType<InferenceResponseMessage> = InferenceResponseMessage$Runtime as unknown as MessageType<InferenceResponseMessage>;
(InferenceResponseMessage as MutableMessageType<InferenceResponseMessage>).runtime = proto3;
(InferenceResponseMessage as MutableMessageType<InferenceResponseMessage>).typeName = "aiserver.v1.InferenceResponseMessage";
(InferenceResponseMessage as MutableMessageType<InferenceResponseMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(InferenceMessageRole) },
  { no: 3, name: "content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "tool_calls", kind: "message", T: InferenceToolCall, repeated: true },
  { no: 5, name: "tool_result", kind: "message", T: InferenceToolResultContent, opt: true },
  { no: 6, name: "reasoning_parts", kind: "message", T: InferenceReasoningPart, repeated: true }
]);
var InferenceToolResultContent$Runtime = (() => class _InferenceToolResultContent extends Message<_InferenceToolResultContent> {
  declare parts: InferenceToolResultPart[];
  constructor(data?: PartialMessage<_InferenceToolResultContent>) {
    super();
    this.parts = [];
    proto3.util.initPartial(data, this as _InferenceToolResultContent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceToolResultContent {
    return new _InferenceToolResultContent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceToolResultContent {
    return new _InferenceToolResultContent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceToolResultContent {
    return new _InferenceToolResultContent().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceToolResultContent | PlainMessage<_InferenceToolResultContent> | undefined | null, b2: _InferenceToolResultContent | PlainMessage<_InferenceToolResultContent> | undefined | null): boolean {
    return proto3.util.equals(_InferenceToolResultContent as unknown as MessageType<_InferenceToolResultContent>, a, b2);
  }
})();
export type InferenceToolResultContent = InstanceType<typeof InferenceToolResultContent$Runtime>;
var InferenceToolResultContent: MessageType<InferenceToolResultContent> = InferenceToolResultContent$Runtime as unknown as MessageType<InferenceToolResultContent>;
(InferenceToolResultContent as MutableMessageType<InferenceToolResultContent>).runtime = proto3;
(InferenceToolResultContent as MutableMessageType<InferenceToolResultContent>).typeName = "aiserver.v1.InferenceToolResultContent";
(InferenceToolResultContent as MutableMessageType<InferenceToolResultContent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "parts", kind: "message", T: InferenceToolResultPart, repeated: true }
]);
var InferenceToolResultPart$Runtime = (() => class _InferenceToolResultPart extends Message<_InferenceToolResultPart> {
  declare toolCallId: string;
  declare toolName: string;
  declare result?: Value;
  declare isError: boolean;
  declare experimentalContent: InferenceContentPart[];
  declare providerOptions?: InferenceProviderOptions;
  constructor(data?: PartialMessage<_InferenceToolResultPart>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.isError = false;
    this.experimentalContent = [];
    proto3.util.initPartial(data, this as _InferenceToolResultPart);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceToolResultPart {
    return new _InferenceToolResultPart().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceToolResultPart {
    return new _InferenceToolResultPart().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceToolResultPart {
    return new _InferenceToolResultPart().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceToolResultPart | PlainMessage<_InferenceToolResultPart> | undefined | null, b2: _InferenceToolResultPart | PlainMessage<_InferenceToolResultPart> | undefined | null): boolean {
    return proto3.util.equals(_InferenceToolResultPart as unknown as MessageType<_InferenceToolResultPart>, a, b2);
  }
})();
export type InferenceToolResultPart = InstanceType<typeof InferenceToolResultPart$Runtime>;
var InferenceToolResultPart: MessageType<InferenceToolResultPart> = InferenceToolResultPart$Runtime as unknown as MessageType<InferenceToolResultPart>;
(InferenceToolResultPart as MutableMessageType<InferenceToolResultPart>).runtime = proto3;
(InferenceToolResultPart as MutableMessageType<InferenceToolResultPart>).typeName = "aiserver.v1.InferenceToolResultPart";
(InferenceToolResultPart as MutableMessageType<InferenceToolResultPart>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "result", kind: "message", T: Value },
  {
    no: 4,
    name: "is_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "experimental_content", kind: "message", T: InferenceContentPart, repeated: true },
  { no: 6, name: "provider_options", kind: "message", T: InferenceProviderOptions, opt: true }
]);
var InferenceExtraData$Runtime = (() => class _InferenceExtraData extends Message<_InferenceExtraData> {
  declare tokenLogprobs: InferenceTokenLogprobs[];
  declare tokenIds: InferenceTokenIds[];
  declare promptTokenIds: InferenceTokenIds[];
  declare extraTokens: InferenceTokenIds[];
  declare extraLogprobs: InferenceTokenLogprobs[];
  declare routingMatrix: InferenceRoutingRow[];
  constructor(data?: PartialMessage<_InferenceExtraData>) {
    super();
    this.tokenLogprobs = [];
    this.tokenIds = [];
    this.promptTokenIds = [];
    this.extraTokens = [];
    this.extraLogprobs = [];
    this.routingMatrix = [];
    proto3.util.initPartial(data, this as _InferenceExtraData);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceExtraData {
    return new _InferenceExtraData().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceExtraData {
    return new _InferenceExtraData().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceExtraData {
    return new _InferenceExtraData().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceExtraData | PlainMessage<_InferenceExtraData> | undefined | null, b2: _InferenceExtraData | PlainMessage<_InferenceExtraData> | undefined | null): boolean {
    return proto3.util.equals(_InferenceExtraData as unknown as MessageType<_InferenceExtraData>, a, b2);
  }
})();
export type InferenceExtraData = InstanceType<typeof InferenceExtraData$Runtime>;
var InferenceExtraData: MessageType<InferenceExtraData> = InferenceExtraData$Runtime as unknown as MessageType<InferenceExtraData>;
(InferenceExtraData as MutableMessageType<InferenceExtraData>).runtime = proto3;
(InferenceExtraData as MutableMessageType<InferenceExtraData>).typeName = "aiserver.v1.InferenceExtraData";
(InferenceExtraData as MutableMessageType<InferenceExtraData>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "token_logprobs", kind: "message", T: InferenceTokenLogprobs, repeated: true },
  { no: 2, name: "token_ids", kind: "message", T: InferenceTokenIds, repeated: true },
  { no: 3, name: "prompt_token_ids", kind: "message", T: InferenceTokenIds, repeated: true },
  { no: 4, name: "extra_tokens", kind: "message", T: InferenceTokenIds, repeated: true },
  { no: 5, name: "extra_logprobs", kind: "message", T: InferenceTokenLogprobs, repeated: true },
  { no: 6, name: "routing_matrix", kind: "message", T: InferenceRoutingRow, repeated: true }
]);
var InferenceTokenLogprobs$Runtime = (() => class _InferenceTokenLogprobs extends Message<_InferenceTokenLogprobs> {
  declare values: number[];
  constructor(data?: PartialMessage<_InferenceTokenLogprobs>) {
    super();
    this.values = [];
    proto3.util.initPartial(data, this as _InferenceTokenLogprobs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceTokenLogprobs {
    return new _InferenceTokenLogprobs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceTokenLogprobs {
    return new _InferenceTokenLogprobs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceTokenLogprobs {
    return new _InferenceTokenLogprobs().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceTokenLogprobs | PlainMessage<_InferenceTokenLogprobs> | undefined | null, b2: _InferenceTokenLogprobs | PlainMessage<_InferenceTokenLogprobs> | undefined | null): boolean {
    return proto3.util.equals(_InferenceTokenLogprobs as unknown as MessageType<_InferenceTokenLogprobs>, a, b2);
  }
})();
export type InferenceTokenLogprobs = InstanceType<typeof InferenceTokenLogprobs$Runtime>;
var InferenceTokenLogprobs: MessageType<InferenceTokenLogprobs> = InferenceTokenLogprobs$Runtime as unknown as MessageType<InferenceTokenLogprobs>;
(InferenceTokenLogprobs as MutableMessageType<InferenceTokenLogprobs>).runtime = proto3;
(InferenceTokenLogprobs as MutableMessageType<InferenceTokenLogprobs>).typeName = "aiserver.v1.InferenceTokenLogprobs";
(InferenceTokenLogprobs as MutableMessageType<InferenceTokenLogprobs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "values", kind: "scalar", T: 1, repeated: true }
]);
var InferenceTokenIds$Runtime = (() => class _InferenceTokenIds extends Message<_InferenceTokenIds> {
  declare values: bigint[];
  constructor(data?: PartialMessage<_InferenceTokenIds>) {
    super();
    this.values = [];
    proto3.util.initPartial(data, this as _InferenceTokenIds);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceTokenIds {
    return new _InferenceTokenIds().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceTokenIds {
    return new _InferenceTokenIds().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceTokenIds {
    return new _InferenceTokenIds().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceTokenIds | PlainMessage<_InferenceTokenIds> | undefined | null, b2: _InferenceTokenIds | PlainMessage<_InferenceTokenIds> | undefined | null): boolean {
    return proto3.util.equals(_InferenceTokenIds as unknown as MessageType<_InferenceTokenIds>, a, b2);
  }
})();
export type InferenceTokenIds = InstanceType<typeof InferenceTokenIds$Runtime>;
var InferenceTokenIds: MessageType<InferenceTokenIds> = InferenceTokenIds$Runtime as unknown as MessageType<InferenceTokenIds>;
(InferenceTokenIds as MutableMessageType<InferenceTokenIds>).runtime = proto3;
(InferenceTokenIds as MutableMessageType<InferenceTokenIds>).typeName = "aiserver.v1.InferenceTokenIds";
(InferenceTokenIds as MutableMessageType<InferenceTokenIds>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "values", kind: "scalar", T: 3, repeated: true }
]);
var InferenceRoutingRow$Runtime = (() => class _InferenceRoutingRow extends Message<_InferenceRoutingRow> {
  declare values: string[];
  constructor(data?: PartialMessage<_InferenceRoutingRow>) {
    super();
    this.values = [];
    proto3.util.initPartial(data, this as _InferenceRoutingRow);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceRoutingRow {
    return new _InferenceRoutingRow().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceRoutingRow {
    return new _InferenceRoutingRow().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceRoutingRow {
    return new _InferenceRoutingRow().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceRoutingRow | PlainMessage<_InferenceRoutingRow> | undefined | null, b2: _InferenceRoutingRow | PlainMessage<_InferenceRoutingRow> | undefined | null): boolean {
    return proto3.util.equals(_InferenceRoutingRow as unknown as MessageType<_InferenceRoutingRow>, a, b2);
  }
})();
export type InferenceRoutingRow = InstanceType<typeof InferenceRoutingRow$Runtime>;
var InferenceRoutingRow: MessageType<InferenceRoutingRow> = InferenceRoutingRow$Runtime as unknown as MessageType<InferenceRoutingRow>;
(InferenceRoutingRow as MutableMessageType<InferenceRoutingRow>).runtime = proto3;
(InferenceRoutingRow as MutableMessageType<InferenceRoutingRow>).typeName = "aiserver.v1.InferenceRoutingRow";
(InferenceRoutingRow as MutableMessageType<InferenceRoutingRow>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "values", kind: "scalar", T: 9, repeated: true }
]);
var InferenceProviderMetadataInfo$Runtime = (() => class _InferenceProviderMetadataInfo extends Message<_InferenceProviderMetadataInfo> {
  declare metadata?: Struct;
  constructor(data?: PartialMessage<_InferenceProviderMetadataInfo>) {
    super();
    proto3.util.initPartial(data, this as _InferenceProviderMetadataInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceProviderMetadataInfo {
    return new _InferenceProviderMetadataInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceProviderMetadataInfo {
    return new _InferenceProviderMetadataInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceProviderMetadataInfo {
    return new _InferenceProviderMetadataInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceProviderMetadataInfo | PlainMessage<_InferenceProviderMetadataInfo> | undefined | null, b2: _InferenceProviderMetadataInfo | PlainMessage<_InferenceProviderMetadataInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceProviderMetadataInfo as unknown as MessageType<_InferenceProviderMetadataInfo>, a, b2);
  }
})();
export type InferenceProviderMetadataInfo = InstanceType<typeof InferenceProviderMetadataInfo$Runtime>;
var InferenceProviderMetadataInfo: MessageType<InferenceProviderMetadataInfo> = InferenceProviderMetadataInfo$Runtime as unknown as MessageType<InferenceProviderMetadataInfo>;
(InferenceProviderMetadataInfo as MutableMessageType<InferenceProviderMetadataInfo>).runtime = proto3;
(InferenceProviderMetadataInfo as MutableMessageType<InferenceProviderMetadataInfo>).typeName = "aiserver.v1.InferenceProviderMetadataInfo";
(InferenceProviderMetadataInfo as MutableMessageType<InferenceProviderMetadataInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "metadata", kind: "message", T: Struct }
]);
var InferenceInvocationIdInfo$Runtime = (() => class _InferenceInvocationIdInfo extends Message<_InferenceInvocationIdInfo> {
  declare invocationId: string;
  constructor(data?: PartialMessage<_InferenceInvocationIdInfo>) {
    super();
    this.invocationId = "";
    proto3.util.initPartial(data, this as _InferenceInvocationIdInfo);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceInvocationIdInfo {
    return new _InferenceInvocationIdInfo().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceInvocationIdInfo {
    return new _InferenceInvocationIdInfo().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceInvocationIdInfo {
    return new _InferenceInvocationIdInfo().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceInvocationIdInfo | PlainMessage<_InferenceInvocationIdInfo> | undefined | null, b2: _InferenceInvocationIdInfo | PlainMessage<_InferenceInvocationIdInfo> | undefined | null): boolean {
    return proto3.util.equals(_InferenceInvocationIdInfo as unknown as MessageType<_InferenceInvocationIdInfo>, a, b2);
  }
})();
export type InferenceInvocationIdInfo = InstanceType<typeof InferenceInvocationIdInfo$Runtime>;
var InferenceInvocationIdInfo: MessageType<InferenceInvocationIdInfo> = InferenceInvocationIdInfo$Runtime as unknown as MessageType<InferenceInvocationIdInfo>;
(InferenceInvocationIdInfo as MutableMessageType<InferenceInvocationIdInfo>).runtime = proto3;
(InferenceInvocationIdInfo as MutableMessageType<InferenceInvocationIdInfo>).typeName = "aiserver.v1.InferenceInvocationIdInfo";
(InferenceInvocationIdInfo as MutableMessageType<InferenceInvocationIdInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "invocation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InferenceStreamError$Runtime = (() => class _InferenceStreamError extends Message<_InferenceStreamError> {
  declare message: string;
  declare code: string;
  declare isInputTokenLimitError: boolean;
  declare isOutputTokenLimitError: boolean;
  declare errorType: InferenceStreamErrorType;
  constructor(data?: PartialMessage<_InferenceStreamError>) {
    super();
    this.message = "";
    this.code = "";
    this.isInputTokenLimitError = false;
    this.isOutputTokenLimitError = false;
    this.errorType = InferenceStreamErrorType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _InferenceStreamError);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceStreamError {
    return new _InferenceStreamError().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceStreamError {
    return new _InferenceStreamError().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceStreamError {
    return new _InferenceStreamError().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceStreamError | PlainMessage<_InferenceStreamError> | undefined | null, b2: _InferenceStreamError | PlainMessage<_InferenceStreamError> | undefined | null): boolean {
    return proto3.util.equals(_InferenceStreamError as unknown as MessageType<_InferenceStreamError>, a, b2);
  }
})();
export type InferenceStreamError = InstanceType<typeof InferenceStreamError$Runtime>;
var InferenceStreamError: MessageType<InferenceStreamError> = InferenceStreamError$Runtime as unknown as MessageType<InferenceStreamError>;
(InferenceStreamError as MutableMessageType<InferenceStreamError>).runtime = proto3;
(InferenceStreamError as MutableMessageType<InferenceStreamError>).typeName = "aiserver.v1.InferenceStreamError";
(InferenceStreamError as MutableMessageType<InferenceStreamError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "is_input_token_limit_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "is_output_token_limit_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "error_type", kind: "enum", T: proto3.getEnumType(InferenceStreamErrorType) }
]);
var InferenceProviderOptions$Runtime = (() => class _InferenceProviderOptions extends Message<_InferenceProviderOptions> {
  declare anthropic?: InferenceAnthropicOptions;
  declare cursor?: InferenceCursorOptions;
  constructor(data?: PartialMessage<_InferenceProviderOptions>) {
    super();
    proto3.util.initPartial(data, this as _InferenceProviderOptions);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceProviderOptions {
    return new _InferenceProviderOptions().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceProviderOptions {
    return new _InferenceProviderOptions().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceProviderOptions {
    return new _InferenceProviderOptions().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceProviderOptions | PlainMessage<_InferenceProviderOptions> | undefined | null, b2: _InferenceProviderOptions | PlainMessage<_InferenceProviderOptions> | undefined | null): boolean {
    return proto3.util.equals(_InferenceProviderOptions as unknown as MessageType<_InferenceProviderOptions>, a, b2);
  }
})();
export type InferenceProviderOptions = InstanceType<typeof InferenceProviderOptions$Runtime>;
var InferenceProviderOptions: MessageType<InferenceProviderOptions> = InferenceProviderOptions$Runtime as unknown as MessageType<InferenceProviderOptions>;
(InferenceProviderOptions as MutableMessageType<InferenceProviderOptions>).runtime = proto3;
(InferenceProviderOptions as MutableMessageType<InferenceProviderOptions>).typeName = "aiserver.v1.InferenceProviderOptions";
(InferenceProviderOptions as MutableMessageType<InferenceProviderOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "anthropic", kind: "message", T: InferenceAnthropicOptions, opt: true },
  { no: 2, name: "cursor", kind: "message", T: InferenceCursorOptions, opt: true }
]);
var InferenceCursorOptions$Runtime = (() => class _InferenceCursorOptions extends Message<_InferenceCursorOptions> {
  declare imageDescription?: string;
  declare imageDescriptions: { [key: string]: string };
  constructor(data?: PartialMessage<_InferenceCursorOptions>) {
    super();
    this.imageDescriptions = {};
    proto3.util.initPartial(data, this as _InferenceCursorOptions);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceCursorOptions {
    return new _InferenceCursorOptions().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceCursorOptions {
    return new _InferenceCursorOptions().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceCursorOptions {
    return new _InferenceCursorOptions().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceCursorOptions | PlainMessage<_InferenceCursorOptions> | undefined | null, b2: _InferenceCursorOptions | PlainMessage<_InferenceCursorOptions> | undefined | null): boolean {
    return proto3.util.equals(_InferenceCursorOptions as unknown as MessageType<_InferenceCursorOptions>, a, b2);
  }
})();
export type InferenceCursorOptions = InstanceType<typeof InferenceCursorOptions$Runtime>;
var InferenceCursorOptions: MessageType<InferenceCursorOptions> = InferenceCursorOptions$Runtime as unknown as MessageType<InferenceCursorOptions>;
(InferenceCursorOptions as MutableMessageType<InferenceCursorOptions>).runtime = proto3;
(InferenceCursorOptions as MutableMessageType<InferenceCursorOptions>).typeName = "aiserver.v1.InferenceCursorOptions";
(InferenceCursorOptions as MutableMessageType<InferenceCursorOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "image_description", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "image_descriptions", kind: "map", K: 5, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var InferenceAnthropicOptions$Runtime = (() => class _InferenceAnthropicOptions extends Message<_InferenceAnthropicOptions> {
  declare cacheControl?: InferenceCacheControl;
  constructor(data?: PartialMessage<_InferenceAnthropicOptions>) {
    super();
    proto3.util.initPartial(data, this as _InferenceAnthropicOptions);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceAnthropicOptions {
    return new _InferenceAnthropicOptions().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceAnthropicOptions {
    return new _InferenceAnthropicOptions().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceAnthropicOptions {
    return new _InferenceAnthropicOptions().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceAnthropicOptions | PlainMessage<_InferenceAnthropicOptions> | undefined | null, b2: _InferenceAnthropicOptions | PlainMessage<_InferenceAnthropicOptions> | undefined | null): boolean {
    return proto3.util.equals(_InferenceAnthropicOptions as unknown as MessageType<_InferenceAnthropicOptions>, a, b2);
  }
})();
export type InferenceAnthropicOptions = InstanceType<typeof InferenceAnthropicOptions$Runtime>;
var InferenceAnthropicOptions: MessageType<InferenceAnthropicOptions> = InferenceAnthropicOptions$Runtime as unknown as MessageType<InferenceAnthropicOptions>;
(InferenceAnthropicOptions as MutableMessageType<InferenceAnthropicOptions>).runtime = proto3;
(InferenceAnthropicOptions as MutableMessageType<InferenceAnthropicOptions>).typeName = "aiserver.v1.InferenceAnthropicOptions";
(InferenceAnthropicOptions as MutableMessageType<InferenceAnthropicOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cache_control", kind: "message", T: InferenceCacheControl, opt: true }
]);
var InferenceCacheControl$Runtime = (() => class _InferenceCacheControl extends Message<_InferenceCacheControl> {
  declare type: string;
  constructor(data?: PartialMessage<_InferenceCacheControl>) {
    super();
    this.type = "";
    proto3.util.initPartial(data, this as _InferenceCacheControl);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InferenceCacheControl {
    return new _InferenceCacheControl().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InferenceCacheControl {
    return new _InferenceCacheControl().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InferenceCacheControl {
    return new _InferenceCacheControl().fromJsonString(jsonString, options2);
  }
  static equals(a: _InferenceCacheControl | PlainMessage<_InferenceCacheControl> | undefined | null, b2: _InferenceCacheControl | PlainMessage<_InferenceCacheControl> | undefined | null): boolean {
    return proto3.util.equals(_InferenceCacheControl as unknown as MessageType<_InferenceCacheControl>, a, b2);
  }
})();
export type InferenceCacheControl = InstanceType<typeof InferenceCacheControl$Runtime>;
var InferenceCacheControl: MessageType<InferenceCacheControl> = InferenceCacheControl$Runtime as unknown as MessageType<InferenceCacheControl>;
(InferenceCacheControl as MutableMessageType<InferenceCacheControl>).runtime = proto3;
(InferenceCacheControl as MutableMessageType<InferenceCacheControl>).typeName = "aiserver.v1.InferenceCacheControl";
(InferenceCacheControl as MutableMessageType<InferenceCacheControl>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AgentFollowupCategorizationRequest$Runtime = (() => class _AgentFollowupCategorizationRequest extends Message<_AgentFollowupCategorizationRequest> {
  declare requestId: string;
  declare replyingToRequestId: string;
  declare messages: InferenceCoreMessage[];
  declare conversationId?: string;
  declare agentMode?: string;
  declare modelName?: string;
  constructor(data?: PartialMessage<_AgentFollowupCategorizationRequest>) {
    super();
    this.requestId = "";
    this.replyingToRequestId = "";
    this.messages = [];
    proto3.util.initPartial(data, this as _AgentFollowupCategorizationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentFollowupCategorizationRequest {
    return new _AgentFollowupCategorizationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentFollowupCategorizationRequest {
    return new _AgentFollowupCategorizationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentFollowupCategorizationRequest {
    return new _AgentFollowupCategorizationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentFollowupCategorizationRequest | PlainMessage<_AgentFollowupCategorizationRequest> | undefined | null, b2: _AgentFollowupCategorizationRequest | PlainMessage<_AgentFollowupCategorizationRequest> | undefined | null): boolean {
    return proto3.util.equals(_AgentFollowupCategorizationRequest as unknown as MessageType<_AgentFollowupCategorizationRequest>, a, b2);
  }
})();
export type AgentFollowupCategorizationRequest = InstanceType<typeof AgentFollowupCategorizationRequest$Runtime>;
var AgentFollowupCategorizationRequest: MessageType<AgentFollowupCategorizationRequest> = AgentFollowupCategorizationRequest$Runtime as unknown as MessageType<AgentFollowupCategorizationRequest>;
(AgentFollowupCategorizationRequest as MutableMessageType<AgentFollowupCategorizationRequest>).runtime = proto3;
(AgentFollowupCategorizationRequest as MutableMessageType<AgentFollowupCategorizationRequest>).typeName = "aiserver.v1.AgentFollowupCategorizationRequest";
(AgentFollowupCategorizationRequest as MutableMessageType<AgentFollowupCategorizationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "replying_to_request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "messages", kind: "message", T: InferenceCoreMessage, repeated: true },
  { no: 4, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "agent_mode", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "model_name", kind: "scalar", T: 9, opt: true }
]);
var AgentPostTurnLabelingRequest$Runtime = (() => class _AgentPostTurnLabelingRequest extends Message<_AgentPostTurnLabelingRequest> {
  declare requestId: string;
  declare messages: InferenceCoreMessage[];
  declare conversationId?: string;
  declare agentMode?: string;
  declare modelName?: string;
  constructor(data?: PartialMessage<_AgentPostTurnLabelingRequest>) {
    super();
    this.requestId = "";
    this.messages = [];
    proto3.util.initPartial(data, this as _AgentPostTurnLabelingRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentPostTurnLabelingRequest {
    return new _AgentPostTurnLabelingRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentPostTurnLabelingRequest {
    return new _AgentPostTurnLabelingRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentPostTurnLabelingRequest {
    return new _AgentPostTurnLabelingRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentPostTurnLabelingRequest | PlainMessage<_AgentPostTurnLabelingRequest> | undefined | null, b2: _AgentPostTurnLabelingRequest | PlainMessage<_AgentPostTurnLabelingRequest> | undefined | null): boolean {
    return proto3.util.equals(_AgentPostTurnLabelingRequest as unknown as MessageType<_AgentPostTurnLabelingRequest>, a, b2);
  }
})();
export type AgentPostTurnLabelingRequest = InstanceType<typeof AgentPostTurnLabelingRequest$Runtime>;
var AgentPostTurnLabelingRequest: MessageType<AgentPostTurnLabelingRequest> = AgentPostTurnLabelingRequest$Runtime as unknown as MessageType<AgentPostTurnLabelingRequest>;
(AgentPostTurnLabelingRequest as MutableMessageType<AgentPostTurnLabelingRequest>).runtime = proto3;
(AgentPostTurnLabelingRequest as MutableMessageType<AgentPostTurnLabelingRequest>).typeName = "aiserver.v1.AgentPostTurnLabelingRequest";
(AgentPostTurnLabelingRequest as MutableMessageType<AgentPostTurnLabelingRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "messages", kind: "message", T: InferenceCoreMessage, repeated: true },
  { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "agent_mode", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model_name", kind: "scalar", T: 9, opt: true }
]);


export { InferenceReason, InferenceMessageRole, InferenceStreamErrorType, InferenceStreamRequest, InferenceRequestedModel, InferenceModelParameterValue, InferenceCoreMessage, InferenceReasoningPart, InferenceContentParts, InferenceContentPart, InferenceTextPart, InferenceImagePart, InferenceFilePart, InferenceToolCall, InferenceAgentTool, InferenceCustomToolFormat, InferenceNamedProviderDefinedTool, InferenceModelConfig, InferenceStreamResponse, InferenceImageDescriptionsInfo, InferenceImageDescription, InferenceTextStreamPart, InferenceThinkingStreamPart, InferenceToolCallStreamPart, InferenceUsageInfo, InferenceExtendedUsageInfo, InferenceResponseInfo, InferenceResponseMessage, InferenceToolResultContent, InferenceToolResultPart, InferenceExtraData, InferenceTokenLogprobs, InferenceTokenIds, InferenceRoutingRow, InferenceProviderMetadataInfo, InferenceInvocationIdInfo, InferenceStreamError, InferenceProviderOptions, InferenceCursorOptions, InferenceAnthropicOptions, InferenceCacheControl, AgentFollowupCategorizationRequest, AgentPostTurnLabelingRequest };
