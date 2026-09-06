/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:33120-33381
 * Region SHA-256: 6cd2c4089c369aec35040788476011b27c0c4457113ee54901f26fd2c0419876
 * Atomic B1 exports: 8 messages + 0 enums = 8
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { TodoItem } from "./todo_tool_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var CreatePlanToolCall$Runtime = (() => class _CreatePlanToolCall extends Message<_CreatePlanToolCall> {
  declare args?: CreatePlanArgs;
  declare result?: CreatePlanResult;
  constructor(data?: PartialMessage<_CreatePlanToolCall>) {
    super();
    proto3.util.initPartial(data, this as _CreatePlanToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanToolCall {
    return new _CreatePlanToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanToolCall {
    return new _CreatePlanToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanToolCall {
    return new _CreatePlanToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanToolCall | PlainMessage<_CreatePlanToolCall> | undefined | null, b2: _CreatePlanToolCall | PlainMessage<_CreatePlanToolCall> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanToolCall as unknown as MessageType<_CreatePlanToolCall>, a, b2);
  }
})();
export type CreatePlanToolCall = InstanceType<typeof CreatePlanToolCall$Runtime>;
var CreatePlanToolCall: MessageType<CreatePlanToolCall> = CreatePlanToolCall$Runtime as unknown as MessageType<CreatePlanToolCall>;
(CreatePlanToolCall as MutableMessageType<CreatePlanToolCall>).runtime = proto3;
(CreatePlanToolCall as MutableMessageType<CreatePlanToolCall>).typeName = "agent.v1.CreatePlanToolCall";
(CreatePlanToolCall as MutableMessageType<CreatePlanToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: CreatePlanArgs },
  { no: 2, name: "result", kind: "message", T: CreatePlanResult }
]);
var Phase$Runtime = (() => class _Phase extends Message<_Phase> {
  declare name: string;
  declare todos: TodoItem[];
  constructor(data?: PartialMessage<_Phase>) {
    super();
    this.name = "";
    this.todos = [];
    proto3.util.initPartial(data, this as _Phase);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Phase {
    return new _Phase().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Phase {
    return new _Phase().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Phase {
    return new _Phase().fromJsonString(jsonString, options);
  }
  static equals(a: _Phase | PlainMessage<_Phase> | undefined | null, b2: _Phase | PlainMessage<_Phase> | undefined | null): boolean {
    return proto3.util.equals(_Phase as unknown as MessageType<_Phase>, a, b2);
  }
})();
export type Phase = InstanceType<typeof Phase$Runtime>;
var Phase: MessageType<Phase> = Phase$Runtime as unknown as MessageType<Phase>;
(Phase as MutableMessageType<Phase>).runtime = proto3;
(Phase as MutableMessageType<Phase>).typeName = "agent.v1.Phase";
(Phase as MutableMessageType<Phase>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "todos", kind: "message", T: TodoItem, repeated: true }
]);
var CreatePlanArgs$Runtime = (() => class _CreatePlanArgs extends Message<_CreatePlanArgs> {
  declare plan: string;
  declare todos: TodoItem[];
  declare overview: string;
  declare name: string;
  declare isProject: boolean;
  declare phases: Phase[];
  constructor(data?: PartialMessage<_CreatePlanArgs>) {
    super();
    this.plan = "";
    this.todos = [];
    this.overview = "";
    this.name = "";
    this.isProject = false;
    this.phases = [];
    proto3.util.initPartial(data, this as _CreatePlanArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanArgs {
    return new _CreatePlanArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanArgs {
    return new _CreatePlanArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanArgs {
    return new _CreatePlanArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanArgs | PlainMessage<_CreatePlanArgs> | undefined | null, b2: _CreatePlanArgs | PlainMessage<_CreatePlanArgs> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanArgs as unknown as MessageType<_CreatePlanArgs>, a, b2);
  }
})();
export type CreatePlanArgs = InstanceType<typeof CreatePlanArgs$Runtime>;
var CreatePlanArgs: MessageType<CreatePlanArgs> = CreatePlanArgs$Runtime as unknown as MessageType<CreatePlanArgs>;
(CreatePlanArgs as MutableMessageType<CreatePlanArgs>).runtime = proto3;
(CreatePlanArgs as MutableMessageType<CreatePlanArgs>).typeName = "agent.v1.CreatePlanArgs";
(CreatePlanArgs as MutableMessageType<CreatePlanArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "todos", kind: "message", T: TodoItem, repeated: true },
  {
    no: 3,
    name: "overview",
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
  },
  {
    no: 5,
    name: "is_project",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "phases", kind: "message", T: Phase, repeated: true }
]);
var CreatePlanResult$Runtime = (() => class _CreatePlanResult extends Message<_CreatePlanResult> {
  declare planUri: string;
  declare result: { case: "success"; value: CreatePlanSuccess } | { case: "error"; value: CreatePlanError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CreatePlanResult>) {
    super();
    this.result = { case: void 0 };
    this.planUri = "";
    proto3.util.initPartial(data, this as _CreatePlanResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanResult | PlainMessage<_CreatePlanResult> | undefined | null, b2: _CreatePlanResult | PlainMessage<_CreatePlanResult> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanResult as unknown as MessageType<_CreatePlanResult>, a, b2);
  }
})();
export type CreatePlanResult = InstanceType<typeof CreatePlanResult$Runtime>;
var CreatePlanResult: MessageType<CreatePlanResult> = CreatePlanResult$Runtime as unknown as MessageType<CreatePlanResult>;
(CreatePlanResult as MutableMessageType<CreatePlanResult>).runtime = proto3;
(CreatePlanResult as MutableMessageType<CreatePlanResult>).typeName = "agent.v1.CreatePlanResult";
(CreatePlanResult as MutableMessageType<CreatePlanResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: CreatePlanSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: CreatePlanError, oneof: "result" },
  {
    no: 3,
    name: "plan_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreatePlanSuccess$Runtime = (() => class _CreatePlanSuccess extends Message<_CreatePlanSuccess> {
  constructor(data?: PartialMessage<_CreatePlanSuccess>) {
    super();
    proto3.util.initPartial(data, this as _CreatePlanSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanSuccess {
    return new _CreatePlanSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanSuccess {
    return new _CreatePlanSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanSuccess {
    return new _CreatePlanSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanSuccess | PlainMessage<_CreatePlanSuccess> | undefined | null, b2: _CreatePlanSuccess | PlainMessage<_CreatePlanSuccess> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanSuccess as unknown as MessageType<_CreatePlanSuccess>, a, b2);
  }
})();
export type CreatePlanSuccess = InstanceType<typeof CreatePlanSuccess$Runtime>;
var CreatePlanSuccess: MessageType<CreatePlanSuccess> = CreatePlanSuccess$Runtime as unknown as MessageType<CreatePlanSuccess>;
(CreatePlanSuccess as MutableMessageType<CreatePlanSuccess>).runtime = proto3;
(CreatePlanSuccess as MutableMessageType<CreatePlanSuccess>).typeName = "agent.v1.CreatePlanSuccess";
(CreatePlanSuccess as MutableMessageType<CreatePlanSuccess>).fields = proto3.util.newFieldList(() => []);
var CreatePlanError$Runtime = (() => class _CreatePlanError extends Message<_CreatePlanError> {
  declare error: string;
  constructor(data?: PartialMessage<_CreatePlanError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _CreatePlanError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanError {
    return new _CreatePlanError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanError {
    return new _CreatePlanError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanError {
    return new _CreatePlanError().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanError | PlainMessage<_CreatePlanError> | undefined | null, b2: _CreatePlanError | PlainMessage<_CreatePlanError> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanError as unknown as MessageType<_CreatePlanError>, a, b2);
  }
})();
export type CreatePlanError = InstanceType<typeof CreatePlanError$Runtime>;
var CreatePlanError: MessageType<CreatePlanError> = CreatePlanError$Runtime as unknown as MessageType<CreatePlanError>;
(CreatePlanError as MutableMessageType<CreatePlanError>).runtime = proto3;
(CreatePlanError as MutableMessageType<CreatePlanError>).typeName = "agent.v1.CreatePlanError";
(CreatePlanError as MutableMessageType<CreatePlanError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreatePlanRequestQuery$Runtime = (() => class _CreatePlanRequestQuery extends Message<_CreatePlanRequestQuery> {
  declare args?: CreatePlanArgs;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_CreatePlanRequestQuery>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _CreatePlanRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanRequestQuery {
    return new _CreatePlanRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanRequestQuery {
    return new _CreatePlanRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanRequestQuery {
    return new _CreatePlanRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanRequestQuery | PlainMessage<_CreatePlanRequestQuery> | undefined | null, b2: _CreatePlanRequestQuery | PlainMessage<_CreatePlanRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanRequestQuery as unknown as MessageType<_CreatePlanRequestQuery>, a, b2);
  }
})();
export type CreatePlanRequestQuery = InstanceType<typeof CreatePlanRequestQuery$Runtime>;
var CreatePlanRequestQuery: MessageType<CreatePlanRequestQuery> = CreatePlanRequestQuery$Runtime as unknown as MessageType<CreatePlanRequestQuery>;
(CreatePlanRequestQuery as MutableMessageType<CreatePlanRequestQuery>).runtime = proto3;
(CreatePlanRequestQuery as MutableMessageType<CreatePlanRequestQuery>).typeName = "agent.v1.CreatePlanRequestQuery";
(CreatePlanRequestQuery as MutableMessageType<CreatePlanRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: CreatePlanArgs },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreatePlanRequestResponse$Runtime = (() => class _CreatePlanRequestResponse extends Message<_CreatePlanRequestResponse> {
  declare result?: CreatePlanResult;
  constructor(data?: PartialMessage<_CreatePlanRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _CreatePlanRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanRequestResponse {
    return new _CreatePlanRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanRequestResponse {
    return new _CreatePlanRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanRequestResponse {
    return new _CreatePlanRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanRequestResponse | PlainMessage<_CreatePlanRequestResponse> | undefined | null, b2: _CreatePlanRequestResponse | PlainMessage<_CreatePlanRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanRequestResponse as unknown as MessageType<_CreatePlanRequestResponse>, a, b2);
  }
})();
export type CreatePlanRequestResponse = InstanceType<typeof CreatePlanRequestResponse$Runtime>;
var CreatePlanRequestResponse: MessageType<CreatePlanRequestResponse> = CreatePlanRequestResponse$Runtime as unknown as MessageType<CreatePlanRequestResponse>;
(CreatePlanRequestResponse as MutableMessageType<CreatePlanRequestResponse>).runtime = proto3;
(CreatePlanRequestResponse as MutableMessageType<CreatePlanRequestResponse>).typeName = "agent.v1.CreatePlanRequestResponse";
(CreatePlanRequestResponse as MutableMessageType<CreatePlanRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "result", kind: "message", T: CreatePlanResult }
]);


export { CreatePlanToolCall, Phase, CreatePlanArgs, CreatePlanResult, CreatePlanSuccess, CreatePlanError, CreatePlanRequestQuery, CreatePlanRequestResponse };
