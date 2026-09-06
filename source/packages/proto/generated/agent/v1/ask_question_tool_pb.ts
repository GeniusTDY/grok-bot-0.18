/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:33958-34296
 * Region SHA-256: cb27bce133aae257952ad1920385c0a492d26539bb48f03e99b002c5d1874d27
 * Atomic B1 exports: 10 messages + 0 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AskQuestionToolCall$Runtime = (() => class _AskQuestionToolCall extends Message<_AskQuestionToolCall> {
  declare args?: AskQuestionArgs;
  declare result?: AskQuestionResult;
  constructor(data?: PartialMessage<_AskQuestionToolCall>) {
    super();
    proto3.util.initPartial(data, this as _AskQuestionToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionToolCall {
    return new _AskQuestionToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionToolCall {
    return new _AskQuestionToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionToolCall {
    return new _AskQuestionToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionToolCall | PlainMessage<_AskQuestionToolCall> | undefined | null, b2: _AskQuestionToolCall | PlainMessage<_AskQuestionToolCall> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionToolCall as unknown as MessageType<_AskQuestionToolCall>, a, b2);
  }
})();
export type AskQuestionToolCall = InstanceType<typeof AskQuestionToolCall$Runtime>;
var AskQuestionToolCall: MessageType<AskQuestionToolCall> = AskQuestionToolCall$Runtime as unknown as MessageType<AskQuestionToolCall>;
(AskQuestionToolCall as MutableMessageType<AskQuestionToolCall>).runtime = proto3;
(AskQuestionToolCall as MutableMessageType<AskQuestionToolCall>).typeName = "agent.v1.AskQuestionToolCall";
(AskQuestionToolCall as MutableMessageType<AskQuestionToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: AskQuestionArgs },
  { no: 2, name: "result", kind: "message", T: AskQuestionResult }
]);
var AskQuestionArgs$Runtime = (() => class _AskQuestionArgs extends Message<_AskQuestionArgs> {
  declare title: string;
  declare questions: AskQuestionArgs_Question[];
  declare runAsync: boolean;
  declare asyncOriginalToolCallId: string;
  constructor(data?: PartialMessage<_AskQuestionArgs>) {
    super();
    this.title = "";
    this.questions = [];
    this.runAsync = false;
    this.asyncOriginalToolCallId = "";
    proto3.util.initPartial(data, this as _AskQuestionArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionArgs {
    return new _AskQuestionArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionArgs {
    return new _AskQuestionArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionArgs {
    return new _AskQuestionArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionArgs | PlainMessage<_AskQuestionArgs> | undefined | null, b2: _AskQuestionArgs | PlainMessage<_AskQuestionArgs> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionArgs as unknown as MessageType<_AskQuestionArgs>, a, b2);
  }
})();
export type AskQuestionArgs = InstanceType<typeof AskQuestionArgs$Runtime>;
var AskQuestionArgs: MessageType<AskQuestionArgs> = AskQuestionArgs$Runtime as unknown as MessageType<AskQuestionArgs>;
(AskQuestionArgs as MutableMessageType<AskQuestionArgs>).runtime = proto3;
(AskQuestionArgs as MutableMessageType<AskQuestionArgs>).typeName = "agent.v1.AskQuestionArgs";
(AskQuestionArgs as MutableMessageType<AskQuestionArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "questions", kind: "message", T: AskQuestionArgs_Question, repeated: true },
  {
    no: 5,
    name: "run_async",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "async_original_tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionArgs_Question$Runtime = (() => class _AskQuestionArgs_Question extends Message<_AskQuestionArgs_Question> {
  declare id: string;
  declare prompt: string;
  declare options: AskQuestionArgs_Option[];
  declare allowMultiple: boolean;
  constructor(data?: PartialMessage<_AskQuestionArgs_Question>) {
    super();
    this.id = "";
    this.prompt = "";
    this.options = [];
    this.allowMultiple = false;
    proto3.util.initPartial(data, this as _AskQuestionArgs_Question);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionArgs_Question {
    return new _AskQuestionArgs_Question().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionArgs_Question {
    return new _AskQuestionArgs_Question().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionArgs_Question {
    return new _AskQuestionArgs_Question().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionArgs_Question | PlainMessage<_AskQuestionArgs_Question> | undefined | null, b2: _AskQuestionArgs_Question | PlainMessage<_AskQuestionArgs_Question> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionArgs_Question as unknown as MessageType<_AskQuestionArgs_Question>, a, b2);
  }
})();
export type AskQuestionArgs_Question = InstanceType<typeof AskQuestionArgs_Question$Runtime>;
var AskQuestionArgs_Question: MessageType<AskQuestionArgs_Question> = AskQuestionArgs_Question$Runtime as unknown as MessageType<AskQuestionArgs_Question>;
(AskQuestionArgs_Question as MutableMessageType<AskQuestionArgs_Question>).runtime = proto3;
(AskQuestionArgs_Question as MutableMessageType<AskQuestionArgs_Question>).typeName = "agent.v1.AskQuestionArgs.Question";
(AskQuestionArgs_Question as MutableMessageType<AskQuestionArgs_Question>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "options", kind: "message", T: AskQuestionArgs_Option, repeated: true },
  {
    no: 4,
    name: "allow_multiple",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AskQuestionArgs_Option$Runtime = (() => class _AskQuestionArgs_Option extends Message<_AskQuestionArgs_Option> {
  declare id: string;
  declare label: string;
  constructor(data?: PartialMessage<_AskQuestionArgs_Option>) {
    super();
    this.id = "";
    this.label = "";
    proto3.util.initPartial(data, this as _AskQuestionArgs_Option);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionArgs_Option {
    return new _AskQuestionArgs_Option().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionArgs_Option {
    return new _AskQuestionArgs_Option().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionArgs_Option {
    return new _AskQuestionArgs_Option().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionArgs_Option | PlainMessage<_AskQuestionArgs_Option> | undefined | null, b2: _AskQuestionArgs_Option | PlainMessage<_AskQuestionArgs_Option> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionArgs_Option as unknown as MessageType<_AskQuestionArgs_Option>, a, b2);
  }
})();
export type AskQuestionArgs_Option = InstanceType<typeof AskQuestionArgs_Option$Runtime>;
var AskQuestionArgs_Option: MessageType<AskQuestionArgs_Option> = AskQuestionArgs_Option$Runtime as unknown as MessageType<AskQuestionArgs_Option>;
(AskQuestionArgs_Option as MutableMessageType<AskQuestionArgs_Option>).runtime = proto3;
(AskQuestionArgs_Option as MutableMessageType<AskQuestionArgs_Option>).typeName = "agent.v1.AskQuestionArgs.Option";
(AskQuestionArgs_Option as MutableMessageType<AskQuestionArgs_Option>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionAsync$Runtime = (() => class _AskQuestionAsync extends Message<_AskQuestionAsync> {
  constructor(data?: PartialMessage<_AskQuestionAsync>) {
    super();
    proto3.util.initPartial(data, this as _AskQuestionAsync);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionAsync {
    return new _AskQuestionAsync().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionAsync {
    return new _AskQuestionAsync().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionAsync {
    return new _AskQuestionAsync().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionAsync | PlainMessage<_AskQuestionAsync> | undefined | null, b2: _AskQuestionAsync | PlainMessage<_AskQuestionAsync> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionAsync as unknown as MessageType<_AskQuestionAsync>, a, b2);
  }
})();
export type AskQuestionAsync = InstanceType<typeof AskQuestionAsync$Runtime>;
var AskQuestionAsync: MessageType<AskQuestionAsync> = AskQuestionAsync$Runtime as unknown as MessageType<AskQuestionAsync>;
(AskQuestionAsync as MutableMessageType<AskQuestionAsync>).runtime = proto3;
(AskQuestionAsync as MutableMessageType<AskQuestionAsync>).typeName = "agent.v1.AskQuestionAsync";
(AskQuestionAsync as MutableMessageType<AskQuestionAsync>).fields = proto3.util.newFieldList(() => []);
var AskQuestionResult$Runtime = (() => class _AskQuestionResult extends Message<_AskQuestionResult> {
  declare result: { case: "success"; value: AskQuestionSuccess } | { case: "error"; value: AskQuestionError } | { case: "rejected"; value: AskQuestionRejected } | { case: "async"; value: AskQuestionAsync } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AskQuestionResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _AskQuestionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionResult | PlainMessage<_AskQuestionResult> | undefined | null, b2: _AskQuestionResult | PlainMessage<_AskQuestionResult> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionResult as unknown as MessageType<_AskQuestionResult>, a, b2);
  }
})();
export type AskQuestionResult = InstanceType<typeof AskQuestionResult$Runtime>;
var AskQuestionResult: MessageType<AskQuestionResult> = AskQuestionResult$Runtime as unknown as MessageType<AskQuestionResult>;
(AskQuestionResult as MutableMessageType<AskQuestionResult>).runtime = proto3;
(AskQuestionResult as MutableMessageType<AskQuestionResult>).typeName = "agent.v1.AskQuestionResult";
(AskQuestionResult as MutableMessageType<AskQuestionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: AskQuestionSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: AskQuestionError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: AskQuestionRejected, oneof: "result" },
  { no: 4, name: "async", kind: "message", T: AskQuestionAsync, oneof: "result" }
]);
var AskQuestionSuccess$Runtime = (() => class _AskQuestionSuccess extends Message<_AskQuestionSuccess> {
  declare answers: AskQuestionSuccess_Answer[];
  constructor(data?: PartialMessage<_AskQuestionSuccess>) {
    super();
    this.answers = [];
    proto3.util.initPartial(data, this as _AskQuestionSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionSuccess {
    return new _AskQuestionSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionSuccess {
    return new _AskQuestionSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionSuccess {
    return new _AskQuestionSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionSuccess | PlainMessage<_AskQuestionSuccess> | undefined | null, b2: _AskQuestionSuccess | PlainMessage<_AskQuestionSuccess> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionSuccess as unknown as MessageType<_AskQuestionSuccess>, a, b2);
  }
})();
export type AskQuestionSuccess = InstanceType<typeof AskQuestionSuccess$Runtime>;
var AskQuestionSuccess: MessageType<AskQuestionSuccess> = AskQuestionSuccess$Runtime as unknown as MessageType<AskQuestionSuccess>;
(AskQuestionSuccess as MutableMessageType<AskQuestionSuccess>).runtime = proto3;
(AskQuestionSuccess as MutableMessageType<AskQuestionSuccess>).typeName = "agent.v1.AskQuestionSuccess";
(AskQuestionSuccess as MutableMessageType<AskQuestionSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "answers", kind: "message", T: AskQuestionSuccess_Answer, repeated: true }
]);
var AskQuestionSuccess_Answer$Runtime = (() => class _AskQuestionSuccess_Answer extends Message<_AskQuestionSuccess_Answer> {
  declare questionId: string;
  declare selectedOptionIds: string[];
  declare freeformText: string;
  constructor(data?: PartialMessage<_AskQuestionSuccess_Answer>) {
    super();
    this.questionId = "";
    this.selectedOptionIds = [];
    this.freeformText = "";
    proto3.util.initPartial(data, this as _AskQuestionSuccess_Answer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionSuccess_Answer {
    return new _AskQuestionSuccess_Answer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionSuccess_Answer {
    return new _AskQuestionSuccess_Answer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionSuccess_Answer {
    return new _AskQuestionSuccess_Answer().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionSuccess_Answer | PlainMessage<_AskQuestionSuccess_Answer> | undefined | null, b2: _AskQuestionSuccess_Answer | PlainMessage<_AskQuestionSuccess_Answer> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionSuccess_Answer as unknown as MessageType<_AskQuestionSuccess_Answer>, a, b2);
  }
})();
export type AskQuestionSuccess_Answer = InstanceType<typeof AskQuestionSuccess_Answer$Runtime>;
var AskQuestionSuccess_Answer: MessageType<AskQuestionSuccess_Answer> = AskQuestionSuccess_Answer$Runtime as unknown as MessageType<AskQuestionSuccess_Answer>;
(AskQuestionSuccess_Answer as MutableMessageType<AskQuestionSuccess_Answer>).runtime = proto3;
(AskQuestionSuccess_Answer as MutableMessageType<AskQuestionSuccess_Answer>).typeName = "agent.v1.AskQuestionSuccess.Answer";
(AskQuestionSuccess_Answer as MutableMessageType<AskQuestionSuccess_Answer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "question_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "freeform_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionError$Runtime = (() => class _AskQuestionError extends Message<_AskQuestionError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_AskQuestionError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _AskQuestionError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionError {
    return new _AskQuestionError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionError {
    return new _AskQuestionError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionError {
    return new _AskQuestionError().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionError | PlainMessage<_AskQuestionError> | undefined | null, b2: _AskQuestionError | PlainMessage<_AskQuestionError> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionError as unknown as MessageType<_AskQuestionError>, a, b2);
  }
})();
export type AskQuestionError = InstanceType<typeof AskQuestionError$Runtime>;
var AskQuestionError: MessageType<AskQuestionError> = AskQuestionError$Runtime as unknown as MessageType<AskQuestionError>;
(AskQuestionError as MutableMessageType<AskQuestionError>).runtime = proto3;
(AskQuestionError as MutableMessageType<AskQuestionError>).typeName = "agent.v1.AskQuestionError";
(AskQuestionError as MutableMessageType<AskQuestionError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionRejected$Runtime = (() => class _AskQuestionRejected extends Message<_AskQuestionRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_AskQuestionRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _AskQuestionRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionRejected {
    return new _AskQuestionRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionRejected {
    return new _AskQuestionRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionRejected {
    return new _AskQuestionRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionRejected | PlainMessage<_AskQuestionRejected> | undefined | null, b2: _AskQuestionRejected | PlainMessage<_AskQuestionRejected> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionRejected as unknown as MessageType<_AskQuestionRejected>, a, b2);
  }
})();
export type AskQuestionRejected = InstanceType<typeof AskQuestionRejected$Runtime>;
var AskQuestionRejected: MessageType<AskQuestionRejected> = AskQuestionRejected$Runtime as unknown as MessageType<AskQuestionRejected>;
(AskQuestionRejected as MutableMessageType<AskQuestionRejected>).runtime = proto3;
(AskQuestionRejected as MutableMessageType<AskQuestionRejected>).typeName = "agent.v1.AskQuestionRejected";
(AskQuestionRejected as MutableMessageType<AskQuestionRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { AskQuestionToolCall, AskQuestionArgs, AskQuestionArgs_Question, AskQuestionArgs_Option, AskQuestionAsync, AskQuestionResult, AskQuestionSuccess, AskQuestionSuccess_Answer, AskQuestionError, AskQuestionRejected };
