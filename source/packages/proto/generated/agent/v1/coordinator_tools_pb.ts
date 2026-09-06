/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:41828-42738
 * Region SHA-256: f4df786e246434e47f30775d09fa188f6cc0c2ac0476497f6dff04eb12b68ee6
 * Atomic B1 exports: 26 messages + 0 enums = 26
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GetAgentStatusArgs$Runtime = (() => class _GetAgentStatusArgs extends Message<_GetAgentStatusArgs> {
  declare toolCallId: string;
  declare agentIds: string[];
  constructor(data?: PartialMessage<_GetAgentStatusArgs>) {
    super();
    this.toolCallId = "";
    this.agentIds = [];
    proto3.util.initPartial(data, this as _GetAgentStatusArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusArgs {
    return new _GetAgentStatusArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusArgs {
    return new _GetAgentStatusArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusArgs {
    return new _GetAgentStatusArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusArgs | PlainMessage<_GetAgentStatusArgs> | undefined | null, b2: _GetAgentStatusArgs | PlainMessage<_GetAgentStatusArgs> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusArgs as unknown as MessageType<_GetAgentStatusArgs>, a, b2);
  }
})();
export type GetAgentStatusArgs = InstanceType<typeof GetAgentStatusArgs$Runtime>;
var GetAgentStatusArgs: MessageType<GetAgentStatusArgs> = GetAgentStatusArgs$Runtime as unknown as MessageType<GetAgentStatusArgs>;
(GetAgentStatusArgs as MutableMessageType<GetAgentStatusArgs>).runtime = proto3;
(GetAgentStatusArgs as MutableMessageType<GetAgentStatusArgs>).typeName = "agent.v1.GetAgentStatusArgs";
(GetAgentStatusArgs as MutableMessageType<GetAgentStatusArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "agent_ids", kind: "scalar", T: 9, repeated: true }
]);
var GetAgentStatusWorker$Runtime = (() => class _GetAgentStatusWorker extends Message<_GetAgentStatusWorker> {
  declare bcId: string;
  declare name: string;
  declare lifecycle: string;
  declare turnInFlight: boolean;
  declare lastTerminalTurnStatus: string;
  declare prUrl: string;
  declare lastActivityAtMs: bigint;
  constructor(data?: PartialMessage<_GetAgentStatusWorker>) {
    super();
    this.bcId = "";
    this.name = "";
    this.lifecycle = "";
    this.turnInFlight = false;
    this.lastTerminalTurnStatus = "";
    this.prUrl = "";
    this.lastActivityAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _GetAgentStatusWorker);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusWorker {
    return new _GetAgentStatusWorker().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusWorker {
    return new _GetAgentStatusWorker().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusWorker {
    return new _GetAgentStatusWorker().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusWorker | PlainMessage<_GetAgentStatusWorker> | undefined | null, b2: _GetAgentStatusWorker | PlainMessage<_GetAgentStatusWorker> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusWorker as unknown as MessageType<_GetAgentStatusWorker>, a, b2);
  }
})();
export type GetAgentStatusWorker = InstanceType<typeof GetAgentStatusWorker$Runtime>;
var GetAgentStatusWorker: MessageType<GetAgentStatusWorker> = GetAgentStatusWorker$Runtime as unknown as MessageType<GetAgentStatusWorker>;
(GetAgentStatusWorker as MutableMessageType<GetAgentStatusWorker>).runtime = proto3;
(GetAgentStatusWorker as MutableMessageType<GetAgentStatusWorker>).typeName = "agent.v1.GetAgentStatusWorker";
(GetAgentStatusWorker as MutableMessageType<GetAgentStatusWorker>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
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
  },
  {
    no: 3,
    name: "lifecycle",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "turn_in_flight",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "last_terminal_turn_status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "last_activity_at_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var GetAgentStatusSuccess$Runtime = (() => class _GetAgentStatusSuccess extends Message<_GetAgentStatusSuccess> {
  declare workers: GetAgentStatusWorker[];
  declare message: string;
  constructor(data?: PartialMessage<_GetAgentStatusSuccess>) {
    super();
    this.workers = [];
    this.message = "";
    proto3.util.initPartial(data, this as _GetAgentStatusSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusSuccess {
    return new _GetAgentStatusSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusSuccess {
    return new _GetAgentStatusSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusSuccess {
    return new _GetAgentStatusSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusSuccess | PlainMessage<_GetAgentStatusSuccess> | undefined | null, b2: _GetAgentStatusSuccess | PlainMessage<_GetAgentStatusSuccess> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusSuccess as unknown as MessageType<_GetAgentStatusSuccess>, a, b2);
  }
})();
export type GetAgentStatusSuccess = InstanceType<typeof GetAgentStatusSuccess$Runtime>;
var GetAgentStatusSuccess: MessageType<GetAgentStatusSuccess> = GetAgentStatusSuccess$Runtime as unknown as MessageType<GetAgentStatusSuccess>;
(GetAgentStatusSuccess as MutableMessageType<GetAgentStatusSuccess>).runtime = proto3;
(GetAgentStatusSuccess as MutableMessageType<GetAgentStatusSuccess>).typeName = "agent.v1.GetAgentStatusSuccess";
(GetAgentStatusSuccess as MutableMessageType<GetAgentStatusSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workers", kind: "message", T: GetAgentStatusWorker, repeated: true },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetAgentStatusError$Runtime = (() => class _GetAgentStatusError extends Message<_GetAgentStatusError> {
  declare error: string;
  constructor(data?: PartialMessage<_GetAgentStatusError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GetAgentStatusError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusError {
    return new _GetAgentStatusError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusError {
    return new _GetAgentStatusError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusError {
    return new _GetAgentStatusError().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusError | PlainMessage<_GetAgentStatusError> | undefined | null, b2: _GetAgentStatusError | PlainMessage<_GetAgentStatusError> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusError as unknown as MessageType<_GetAgentStatusError>, a, b2);
  }
})();
export type GetAgentStatusError = InstanceType<typeof GetAgentStatusError$Runtime>;
var GetAgentStatusError: MessageType<GetAgentStatusError> = GetAgentStatusError$Runtime as unknown as MessageType<GetAgentStatusError>;
(GetAgentStatusError as MutableMessageType<GetAgentStatusError>).runtime = proto3;
(GetAgentStatusError as MutableMessageType<GetAgentStatusError>).typeName = "agent.v1.GetAgentStatusError";
(GetAgentStatusError as MutableMessageType<GetAgentStatusError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetAgentStatusResult$Runtime = (() => class _GetAgentStatusResult extends Message<_GetAgentStatusResult> {
  declare result: { case: "success"; value: GetAgentStatusSuccess } | { case: "error"; value: GetAgentStatusError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GetAgentStatusResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GetAgentStatusResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusResult {
    return new _GetAgentStatusResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusResult {
    return new _GetAgentStatusResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusResult {
    return new _GetAgentStatusResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusResult | PlainMessage<_GetAgentStatusResult> | undefined | null, b2: _GetAgentStatusResult | PlainMessage<_GetAgentStatusResult> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusResult as unknown as MessageType<_GetAgentStatusResult>, a, b2);
  }
})();
export type GetAgentStatusResult = InstanceType<typeof GetAgentStatusResult$Runtime>;
var GetAgentStatusResult: MessageType<GetAgentStatusResult> = GetAgentStatusResult$Runtime as unknown as MessageType<GetAgentStatusResult>;
(GetAgentStatusResult as MutableMessageType<GetAgentStatusResult>).runtime = proto3;
(GetAgentStatusResult as MutableMessageType<GetAgentStatusResult>).typeName = "agent.v1.GetAgentStatusResult";
(GetAgentStatusResult as MutableMessageType<GetAgentStatusResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: GetAgentStatusSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GetAgentStatusError, oneof: "result" }
]);
var GetAgentStatusToolCall$Runtime = (() => class _GetAgentStatusToolCall extends Message<_GetAgentStatusToolCall> {
  declare args?: GetAgentStatusArgs;
  declare result?: GetAgentStatusResult;
  constructor(data?: PartialMessage<_GetAgentStatusToolCall>) {
    super();
    proto3.util.initPartial(data, this as _GetAgentStatusToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAgentStatusToolCall {
    return new _GetAgentStatusToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAgentStatusToolCall {
    return new _GetAgentStatusToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAgentStatusToolCall {
    return new _GetAgentStatusToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAgentStatusToolCall | PlainMessage<_GetAgentStatusToolCall> | undefined | null, b2: _GetAgentStatusToolCall | PlainMessage<_GetAgentStatusToolCall> | undefined | null): boolean {
    return proto3.util.equals(_GetAgentStatusToolCall as unknown as MessageType<_GetAgentStatusToolCall>, a, b2);
  }
})();
export type GetAgentStatusToolCall = InstanceType<typeof GetAgentStatusToolCall$Runtime>;
var GetAgentStatusToolCall: MessageType<GetAgentStatusToolCall> = GetAgentStatusToolCall$Runtime as unknown as MessageType<GetAgentStatusToolCall>;
(GetAgentStatusToolCall as MutableMessageType<GetAgentStatusToolCall>).runtime = proto3;
(GetAgentStatusToolCall as MutableMessageType<GetAgentStatusToolCall>).typeName = "agent.v1.GetAgentStatusToolCall";
(GetAgentStatusToolCall as MutableMessageType<GetAgentStatusToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GetAgentStatusArgs },
  { no: 2, name: "result", kind: "message", T: GetAgentStatusResult }
]);
var SendToAgentArgs$Runtime = (() => class _SendToAgentArgs extends Message<_SendToAgentArgs> {
  declare toolCallId: string;
  declare agentId: string;
  declare message: string;
  declare delivery: string;
  declare title: string;
  constructor(data?: PartialMessage<_SendToAgentArgs>) {
    super();
    this.toolCallId = "";
    this.agentId = "";
    this.message = "";
    this.delivery = "";
    this.title = "";
    proto3.util.initPartial(data, this as _SendToAgentArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToAgentArgs {
    return new _SendToAgentArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToAgentArgs {
    return new _SendToAgentArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToAgentArgs {
    return new _SendToAgentArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToAgentArgs | PlainMessage<_SendToAgentArgs> | undefined | null, b2: _SendToAgentArgs | PlainMessage<_SendToAgentArgs> | undefined | null): boolean {
    return proto3.util.equals(_SendToAgentArgs as unknown as MessageType<_SendToAgentArgs>, a, b2);
  }
})();
export type SendToAgentArgs = InstanceType<typeof SendToAgentArgs$Runtime>;
var SendToAgentArgs: MessageType<SendToAgentArgs> = SendToAgentArgs$Runtime as unknown as MessageType<SendToAgentArgs>;
(SendToAgentArgs as MutableMessageType<SendToAgentArgs>).runtime = proto3;
(SendToAgentArgs as MutableMessageType<SendToAgentArgs>).typeName = "agent.v1.SendToAgentArgs";
(SendToAgentArgs as MutableMessageType<SendToAgentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "delivery",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendToAgentSuccess$Runtime = (() => class _SendToAgentSuccess extends Message<_SendToAgentSuccess> {
  declare workerBcId: string;
  declare deliveredAs: string;
  declare message: string;
  constructor(data?: PartialMessage<_SendToAgentSuccess>) {
    super();
    this.workerBcId = "";
    this.deliveredAs = "";
    this.message = "";
    proto3.util.initPartial(data, this as _SendToAgentSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToAgentSuccess {
    return new _SendToAgentSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToAgentSuccess {
    return new _SendToAgentSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToAgentSuccess {
    return new _SendToAgentSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToAgentSuccess | PlainMessage<_SendToAgentSuccess> | undefined | null, b2: _SendToAgentSuccess | PlainMessage<_SendToAgentSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SendToAgentSuccess as unknown as MessageType<_SendToAgentSuccess>, a, b2);
  }
})();
export type SendToAgentSuccess = InstanceType<typeof SendToAgentSuccess$Runtime>;
var SendToAgentSuccess: MessageType<SendToAgentSuccess> = SendToAgentSuccess$Runtime as unknown as MessageType<SendToAgentSuccess>;
(SendToAgentSuccess as MutableMessageType<SendToAgentSuccess>).runtime = proto3;
(SendToAgentSuccess as MutableMessageType<SendToAgentSuccess>).typeName = "agent.v1.SendToAgentSuccess";
(SendToAgentSuccess as MutableMessageType<SendToAgentSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "worker_bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "delivered_as",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendToAgentError$Runtime = (() => class _SendToAgentError extends Message<_SendToAgentError> {
  declare error: string;
  constructor(data?: PartialMessage<_SendToAgentError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SendToAgentError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToAgentError {
    return new _SendToAgentError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToAgentError {
    return new _SendToAgentError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToAgentError {
    return new _SendToAgentError().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToAgentError | PlainMessage<_SendToAgentError> | undefined | null, b2: _SendToAgentError | PlainMessage<_SendToAgentError> | undefined | null): boolean {
    return proto3.util.equals(_SendToAgentError as unknown as MessageType<_SendToAgentError>, a, b2);
  }
})();
export type SendToAgentError = InstanceType<typeof SendToAgentError$Runtime>;
var SendToAgentError: MessageType<SendToAgentError> = SendToAgentError$Runtime as unknown as MessageType<SendToAgentError>;
(SendToAgentError as MutableMessageType<SendToAgentError>).runtime = proto3;
(SendToAgentError as MutableMessageType<SendToAgentError>).typeName = "agent.v1.SendToAgentError";
(SendToAgentError as MutableMessageType<SendToAgentError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SendToAgentResult$Runtime = (() => class _SendToAgentResult extends Message<_SendToAgentResult> {
  declare result: { case: "success"; value: SendToAgentSuccess } | { case: "error"; value: SendToAgentError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SendToAgentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SendToAgentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToAgentResult {
    return new _SendToAgentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToAgentResult {
    return new _SendToAgentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToAgentResult {
    return new _SendToAgentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToAgentResult | PlainMessage<_SendToAgentResult> | undefined | null, b2: _SendToAgentResult | PlainMessage<_SendToAgentResult> | undefined | null): boolean {
    return proto3.util.equals(_SendToAgentResult as unknown as MessageType<_SendToAgentResult>, a, b2);
  }
})();
export type SendToAgentResult = InstanceType<typeof SendToAgentResult$Runtime>;
var SendToAgentResult: MessageType<SendToAgentResult> = SendToAgentResult$Runtime as unknown as MessageType<SendToAgentResult>;
(SendToAgentResult as MutableMessageType<SendToAgentResult>).runtime = proto3;
(SendToAgentResult as MutableMessageType<SendToAgentResult>).typeName = "agent.v1.SendToAgentResult";
(SendToAgentResult as MutableMessageType<SendToAgentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SendToAgentSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SendToAgentError, oneof: "result" }
]);
var SendToAgentToolCall$Runtime = (() => class _SendToAgentToolCall extends Message<_SendToAgentToolCall> {
  declare args?: SendToAgentArgs;
  declare result?: SendToAgentResult;
  constructor(data?: PartialMessage<_SendToAgentToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SendToAgentToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SendToAgentToolCall {
    return new _SendToAgentToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SendToAgentToolCall {
    return new _SendToAgentToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SendToAgentToolCall {
    return new _SendToAgentToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SendToAgentToolCall | PlainMessage<_SendToAgentToolCall> | undefined | null, b2: _SendToAgentToolCall | PlainMessage<_SendToAgentToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SendToAgentToolCall as unknown as MessageType<_SendToAgentToolCall>, a, b2);
  }
})();
export type SendToAgentToolCall = InstanceType<typeof SendToAgentToolCall$Runtime>;
var SendToAgentToolCall: MessageType<SendToAgentToolCall> = SendToAgentToolCall$Runtime as unknown as MessageType<SendToAgentToolCall>;
(SendToAgentToolCall as MutableMessageType<SendToAgentToolCall>).runtime = proto3;
(SendToAgentToolCall as MutableMessageType<SendToAgentToolCall>).typeName = "agent.v1.SendToAgentToolCall";
(SendToAgentToolCall as MutableMessageType<SendToAgentToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SendToAgentArgs },
  { no: 2, name: "result", kind: "message", T: SendToAgentResult }
]);
var ReadAgentTranscriptArgs$Runtime = (() => class _ReadAgentTranscriptArgs extends Message<_ReadAgentTranscriptArgs> {
  declare toolCallId: string;
  declare agentId: string;
  declare mode: string;
  declare maxTurns: number;
  constructor(data?: PartialMessage<_ReadAgentTranscriptArgs>) {
    super();
    this.toolCallId = "";
    this.agentId = "";
    this.mode = "";
    this.maxTurns = 0;
    proto3.util.initPartial(data, this as _ReadAgentTranscriptArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadAgentTranscriptArgs {
    return new _ReadAgentTranscriptArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptArgs {
    return new _ReadAgentTranscriptArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptArgs {
    return new _ReadAgentTranscriptArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadAgentTranscriptArgs | PlainMessage<_ReadAgentTranscriptArgs> | undefined | null, b2: _ReadAgentTranscriptArgs | PlainMessage<_ReadAgentTranscriptArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadAgentTranscriptArgs as unknown as MessageType<_ReadAgentTranscriptArgs>, a, b2);
  }
})();
export type ReadAgentTranscriptArgs = InstanceType<typeof ReadAgentTranscriptArgs$Runtime>;
var ReadAgentTranscriptArgs: MessageType<ReadAgentTranscriptArgs> = ReadAgentTranscriptArgs$Runtime as unknown as MessageType<ReadAgentTranscriptArgs>;
(ReadAgentTranscriptArgs as MutableMessageType<ReadAgentTranscriptArgs>).runtime = proto3;
(ReadAgentTranscriptArgs as MutableMessageType<ReadAgentTranscriptArgs>).typeName = "agent.v1.ReadAgentTranscriptArgs";
(ReadAgentTranscriptArgs as MutableMessageType<ReadAgentTranscriptArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "mode",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "max_turns",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ReadAgentTranscriptSuccess$Runtime = (() => class _ReadAgentTranscriptSuccess extends Message<_ReadAgentTranscriptSuccess> {
  declare transcript: string;
  declare truncated: boolean;
  constructor(data?: PartialMessage<_ReadAgentTranscriptSuccess>) {
    super();
    this.transcript = "";
    this.truncated = false;
    proto3.util.initPartial(data, this as _ReadAgentTranscriptSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadAgentTranscriptSuccess {
    return new _ReadAgentTranscriptSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptSuccess {
    return new _ReadAgentTranscriptSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptSuccess {
    return new _ReadAgentTranscriptSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadAgentTranscriptSuccess | PlainMessage<_ReadAgentTranscriptSuccess> | undefined | null, b2: _ReadAgentTranscriptSuccess | PlainMessage<_ReadAgentTranscriptSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadAgentTranscriptSuccess as unknown as MessageType<_ReadAgentTranscriptSuccess>, a, b2);
  }
})();
export type ReadAgentTranscriptSuccess = InstanceType<typeof ReadAgentTranscriptSuccess$Runtime>;
var ReadAgentTranscriptSuccess: MessageType<ReadAgentTranscriptSuccess> = ReadAgentTranscriptSuccess$Runtime as unknown as MessageType<ReadAgentTranscriptSuccess>;
(ReadAgentTranscriptSuccess as MutableMessageType<ReadAgentTranscriptSuccess>).runtime = proto3;
(ReadAgentTranscriptSuccess as MutableMessageType<ReadAgentTranscriptSuccess>).typeName = "agent.v1.ReadAgentTranscriptSuccess";
(ReadAgentTranscriptSuccess as MutableMessageType<ReadAgentTranscriptSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "transcript",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ReadAgentTranscriptError$Runtime = (() => class _ReadAgentTranscriptError extends Message<_ReadAgentTranscriptError> {
  declare error: string;
  constructor(data?: PartialMessage<_ReadAgentTranscriptError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ReadAgentTranscriptError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadAgentTranscriptError {
    return new _ReadAgentTranscriptError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptError {
    return new _ReadAgentTranscriptError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptError {
    return new _ReadAgentTranscriptError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadAgentTranscriptError | PlainMessage<_ReadAgentTranscriptError> | undefined | null, b2: _ReadAgentTranscriptError | PlainMessage<_ReadAgentTranscriptError> | undefined | null): boolean {
    return proto3.util.equals(_ReadAgentTranscriptError as unknown as MessageType<_ReadAgentTranscriptError>, a, b2);
  }
})();
export type ReadAgentTranscriptError = InstanceType<typeof ReadAgentTranscriptError$Runtime>;
var ReadAgentTranscriptError: MessageType<ReadAgentTranscriptError> = ReadAgentTranscriptError$Runtime as unknown as MessageType<ReadAgentTranscriptError>;
(ReadAgentTranscriptError as MutableMessageType<ReadAgentTranscriptError>).runtime = proto3;
(ReadAgentTranscriptError as MutableMessageType<ReadAgentTranscriptError>).typeName = "agent.v1.ReadAgentTranscriptError";
(ReadAgentTranscriptError as MutableMessageType<ReadAgentTranscriptError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadAgentTranscriptResult$Runtime = (() => class _ReadAgentTranscriptResult extends Message<_ReadAgentTranscriptResult> {
  declare result: { case: "success"; value: ReadAgentTranscriptSuccess } | { case: "error"; value: ReadAgentTranscriptError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadAgentTranscriptResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadAgentTranscriptResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadAgentTranscriptResult {
    return new _ReadAgentTranscriptResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptResult {
    return new _ReadAgentTranscriptResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptResult {
    return new _ReadAgentTranscriptResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadAgentTranscriptResult | PlainMessage<_ReadAgentTranscriptResult> | undefined | null, b2: _ReadAgentTranscriptResult | PlainMessage<_ReadAgentTranscriptResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadAgentTranscriptResult as unknown as MessageType<_ReadAgentTranscriptResult>, a, b2);
  }
})();
export type ReadAgentTranscriptResult = InstanceType<typeof ReadAgentTranscriptResult$Runtime>;
var ReadAgentTranscriptResult: MessageType<ReadAgentTranscriptResult> = ReadAgentTranscriptResult$Runtime as unknown as MessageType<ReadAgentTranscriptResult>;
(ReadAgentTranscriptResult as MutableMessageType<ReadAgentTranscriptResult>).runtime = proto3;
(ReadAgentTranscriptResult as MutableMessageType<ReadAgentTranscriptResult>).typeName = "agent.v1.ReadAgentTranscriptResult";
(ReadAgentTranscriptResult as MutableMessageType<ReadAgentTranscriptResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadAgentTranscriptSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadAgentTranscriptError, oneof: "result" }
]);
var ReadAgentTranscriptToolCall$Runtime = (() => class _ReadAgentTranscriptToolCall extends Message<_ReadAgentTranscriptToolCall> {
  declare args?: ReadAgentTranscriptArgs;
  declare result?: ReadAgentTranscriptResult;
  constructor(data?: PartialMessage<_ReadAgentTranscriptToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReadAgentTranscriptToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadAgentTranscriptToolCall {
    return new _ReadAgentTranscriptToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptToolCall {
    return new _ReadAgentTranscriptToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadAgentTranscriptToolCall {
    return new _ReadAgentTranscriptToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadAgentTranscriptToolCall | PlainMessage<_ReadAgentTranscriptToolCall> | undefined | null, b2: _ReadAgentTranscriptToolCall | PlainMessage<_ReadAgentTranscriptToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReadAgentTranscriptToolCall as unknown as MessageType<_ReadAgentTranscriptToolCall>, a, b2);
  }
})();
export type ReadAgentTranscriptToolCall = InstanceType<typeof ReadAgentTranscriptToolCall$Runtime>;
var ReadAgentTranscriptToolCall: MessageType<ReadAgentTranscriptToolCall> = ReadAgentTranscriptToolCall$Runtime as unknown as MessageType<ReadAgentTranscriptToolCall>;
(ReadAgentTranscriptToolCall as MutableMessageType<ReadAgentTranscriptToolCall>).runtime = proto3;
(ReadAgentTranscriptToolCall as MutableMessageType<ReadAgentTranscriptToolCall>).typeName = "agent.v1.ReadAgentTranscriptToolCall";
(ReadAgentTranscriptToolCall as MutableMessageType<ReadAgentTranscriptToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReadAgentTranscriptArgs },
  { no: 2, name: "result", kind: "message", T: ReadAgentTranscriptResult }
]);
var CreateAgentArgs$Runtime = (() => class _CreateAgentArgs extends Message<_CreateAgentArgs> {
  declare toolCallId: string;
  declare prompt: string;
  declare name?: string;
  declare model?: string;
  declare baseBranch?: string;
  declare machineType?: string;
  declare workerId?: string;
  declare pool?: string;
  declare labels: { [key: string]: string };
  declare environmentBuildId?: string;
  constructor(data?: PartialMessage<_CreateAgentArgs>) {
    super();
    this.toolCallId = "";
    this.prompt = "";
    this.labels = {};
    proto3.util.initPartial(data, this as _CreateAgentArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateAgentArgs {
    return new _CreateAgentArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateAgentArgs {
    return new _CreateAgentArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateAgentArgs {
    return new _CreateAgentArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateAgentArgs | PlainMessage<_CreateAgentArgs> | undefined | null, b2: _CreateAgentArgs | PlainMessage<_CreateAgentArgs> | undefined | null): boolean {
    return proto3.util.equals(_CreateAgentArgs as unknown as MessageType<_CreateAgentArgs>, a, b2);
  }
})();
export type CreateAgentArgs = InstanceType<typeof CreateAgentArgs$Runtime>;
var CreateAgentArgs: MessageType<CreateAgentArgs> = CreateAgentArgs$Runtime as unknown as MessageType<CreateAgentArgs>;
(CreateAgentArgs as MutableMessageType<CreateAgentArgs>).runtime = proto3;
(CreateAgentArgs as MutableMessageType<CreateAgentArgs>).typeName = "agent.v1.CreateAgentArgs";
(CreateAgentArgs as MutableMessageType<CreateAgentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
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
  { no: 3, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "machine_type", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "worker_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "pool", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "labels", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 10, name: "environment_build_id", kind: "scalar", T: 9, opt: true }
]);
var CreateAgentSuccess$Runtime = (() => class _CreateAgentSuccess extends Message<_CreateAgentSuccess> {
  declare agentId: string;
  declare message: string;
  constructor(data?: PartialMessage<_CreateAgentSuccess>) {
    super();
    this.agentId = "";
    this.message = "";
    proto3.util.initPartial(data, this as _CreateAgentSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateAgentSuccess {
    return new _CreateAgentSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateAgentSuccess {
    return new _CreateAgentSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateAgentSuccess {
    return new _CreateAgentSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateAgentSuccess | PlainMessage<_CreateAgentSuccess> | undefined | null, b2: _CreateAgentSuccess | PlainMessage<_CreateAgentSuccess> | undefined | null): boolean {
    return proto3.util.equals(_CreateAgentSuccess as unknown as MessageType<_CreateAgentSuccess>, a, b2);
  }
})();
export type CreateAgentSuccess = InstanceType<typeof CreateAgentSuccess$Runtime>;
var CreateAgentSuccess: MessageType<CreateAgentSuccess> = CreateAgentSuccess$Runtime as unknown as MessageType<CreateAgentSuccess>;
(CreateAgentSuccess as MutableMessageType<CreateAgentSuccess>).runtime = proto3;
(CreateAgentSuccess as MutableMessageType<CreateAgentSuccess>).typeName = "agent.v1.CreateAgentSuccess";
(CreateAgentSuccess as MutableMessageType<CreateAgentSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
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
var CreateAgentError$Runtime = (() => class _CreateAgentError extends Message<_CreateAgentError> {
  declare error: string;
  constructor(data?: PartialMessage<_CreateAgentError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _CreateAgentError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateAgentError {
    return new _CreateAgentError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateAgentError {
    return new _CreateAgentError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateAgentError {
    return new _CreateAgentError().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateAgentError | PlainMessage<_CreateAgentError> | undefined | null, b2: _CreateAgentError | PlainMessage<_CreateAgentError> | undefined | null): boolean {
    return proto3.util.equals(_CreateAgentError as unknown as MessageType<_CreateAgentError>, a, b2);
  }
})();
export type CreateAgentError = InstanceType<typeof CreateAgentError$Runtime>;
var CreateAgentError: MessageType<CreateAgentError> = CreateAgentError$Runtime as unknown as MessageType<CreateAgentError>;
(CreateAgentError as MutableMessageType<CreateAgentError>).runtime = proto3;
(CreateAgentError as MutableMessageType<CreateAgentError>).typeName = "agent.v1.CreateAgentError";
(CreateAgentError as MutableMessageType<CreateAgentError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateAgentResult$Runtime = (() => class _CreateAgentResult extends Message<_CreateAgentResult> {
  declare result: { case: "success"; value: CreateAgentSuccess } | { case: "error"; value: CreateAgentError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CreateAgentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _CreateAgentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateAgentResult {
    return new _CreateAgentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateAgentResult {
    return new _CreateAgentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateAgentResult {
    return new _CreateAgentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateAgentResult | PlainMessage<_CreateAgentResult> | undefined | null, b2: _CreateAgentResult | PlainMessage<_CreateAgentResult> | undefined | null): boolean {
    return proto3.util.equals(_CreateAgentResult as unknown as MessageType<_CreateAgentResult>, a, b2);
  }
})();
export type CreateAgentResult = InstanceType<typeof CreateAgentResult$Runtime>;
var CreateAgentResult: MessageType<CreateAgentResult> = CreateAgentResult$Runtime as unknown as MessageType<CreateAgentResult>;
(CreateAgentResult as MutableMessageType<CreateAgentResult>).runtime = proto3;
(CreateAgentResult as MutableMessageType<CreateAgentResult>).typeName = "agent.v1.CreateAgentResult";
(CreateAgentResult as MutableMessageType<CreateAgentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: CreateAgentSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: CreateAgentError, oneof: "result" }
]);
var CreateAgentToolCall$Runtime = (() => class _CreateAgentToolCall extends Message<_CreateAgentToolCall> {
  declare args?: CreateAgentArgs;
  declare result?: CreateAgentResult;
  constructor(data?: PartialMessage<_CreateAgentToolCall>) {
    super();
    proto3.util.initPartial(data, this as _CreateAgentToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateAgentToolCall {
    return new _CreateAgentToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateAgentToolCall {
    return new _CreateAgentToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateAgentToolCall {
    return new _CreateAgentToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateAgentToolCall | PlainMessage<_CreateAgentToolCall> | undefined | null, b2: _CreateAgentToolCall | PlainMessage<_CreateAgentToolCall> | undefined | null): boolean {
    return proto3.util.equals(_CreateAgentToolCall as unknown as MessageType<_CreateAgentToolCall>, a, b2);
  }
})();
export type CreateAgentToolCall = InstanceType<typeof CreateAgentToolCall$Runtime>;
var CreateAgentToolCall: MessageType<CreateAgentToolCall> = CreateAgentToolCall$Runtime as unknown as MessageType<CreateAgentToolCall>;
(CreateAgentToolCall as MutableMessageType<CreateAgentToolCall>).runtime = proto3;
(CreateAgentToolCall as MutableMessageType<CreateAgentToolCall>).typeName = "agent.v1.CreateAgentToolCall";
(CreateAgentToolCall as MutableMessageType<CreateAgentToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: CreateAgentArgs },
  { no: 2, name: "result", kind: "message", T: CreateAgentResult }
]);
var StopAgentArgs$Runtime = (() => class _StopAgentArgs extends Message<_StopAgentArgs> {
  declare toolCallId: string;
  declare agentId: string;
  constructor(data?: PartialMessage<_StopAgentArgs>) {
    super();
    this.toolCallId = "";
    this.agentId = "";
    proto3.util.initPartial(data, this as _StopAgentArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopAgentArgs {
    return new _StopAgentArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopAgentArgs {
    return new _StopAgentArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopAgentArgs {
    return new _StopAgentArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _StopAgentArgs | PlainMessage<_StopAgentArgs> | undefined | null, b2: _StopAgentArgs | PlainMessage<_StopAgentArgs> | undefined | null): boolean {
    return proto3.util.equals(_StopAgentArgs as unknown as MessageType<_StopAgentArgs>, a, b2);
  }
})();
export type StopAgentArgs = InstanceType<typeof StopAgentArgs$Runtime>;
var StopAgentArgs: MessageType<StopAgentArgs> = StopAgentArgs$Runtime as unknown as MessageType<StopAgentArgs>;
(StopAgentArgs as MutableMessageType<StopAgentArgs>).runtime = proto3;
(StopAgentArgs as MutableMessageType<StopAgentArgs>).typeName = "agent.v1.StopAgentArgs";
(StopAgentArgs as MutableMessageType<StopAgentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StopAgentSuccess$Runtime = (() => class _StopAgentSuccess extends Message<_StopAgentSuccess> {
  declare workerBcId: string;
  declare message: string;
  constructor(data?: PartialMessage<_StopAgentSuccess>) {
    super();
    this.workerBcId = "";
    this.message = "";
    proto3.util.initPartial(data, this as _StopAgentSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopAgentSuccess {
    return new _StopAgentSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopAgentSuccess {
    return new _StopAgentSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopAgentSuccess {
    return new _StopAgentSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _StopAgentSuccess | PlainMessage<_StopAgentSuccess> | undefined | null, b2: _StopAgentSuccess | PlainMessage<_StopAgentSuccess> | undefined | null): boolean {
    return proto3.util.equals(_StopAgentSuccess as unknown as MessageType<_StopAgentSuccess>, a, b2);
  }
})();
export type StopAgentSuccess = InstanceType<typeof StopAgentSuccess$Runtime>;
var StopAgentSuccess: MessageType<StopAgentSuccess> = StopAgentSuccess$Runtime as unknown as MessageType<StopAgentSuccess>;
(StopAgentSuccess as MutableMessageType<StopAgentSuccess>).runtime = proto3;
(StopAgentSuccess as MutableMessageType<StopAgentSuccess>).typeName = "agent.v1.StopAgentSuccess";
(StopAgentSuccess as MutableMessageType<StopAgentSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "worker_bc_id",
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
var StopAgentError$Runtime = (() => class _StopAgentError extends Message<_StopAgentError> {
  declare error: string;
  constructor(data?: PartialMessage<_StopAgentError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _StopAgentError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopAgentError {
    return new _StopAgentError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopAgentError {
    return new _StopAgentError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopAgentError {
    return new _StopAgentError().fromJsonString(jsonString, options);
  }
  static equals(a: _StopAgentError | PlainMessage<_StopAgentError> | undefined | null, b2: _StopAgentError | PlainMessage<_StopAgentError> | undefined | null): boolean {
    return proto3.util.equals(_StopAgentError as unknown as MessageType<_StopAgentError>, a, b2);
  }
})();
export type StopAgentError = InstanceType<typeof StopAgentError$Runtime>;
var StopAgentError: MessageType<StopAgentError> = StopAgentError$Runtime as unknown as MessageType<StopAgentError>;
(StopAgentError as MutableMessageType<StopAgentError>).runtime = proto3;
(StopAgentError as MutableMessageType<StopAgentError>).typeName = "agent.v1.StopAgentError";
(StopAgentError as MutableMessageType<StopAgentError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StopAgentResult$Runtime = (() => class _StopAgentResult extends Message<_StopAgentResult> {
  declare result: { case: "success"; value: StopAgentSuccess } | { case: "error"; value: StopAgentError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StopAgentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _StopAgentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopAgentResult {
    return new _StopAgentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopAgentResult {
    return new _StopAgentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopAgentResult {
    return new _StopAgentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _StopAgentResult | PlainMessage<_StopAgentResult> | undefined | null, b2: _StopAgentResult | PlainMessage<_StopAgentResult> | undefined | null): boolean {
    return proto3.util.equals(_StopAgentResult as unknown as MessageType<_StopAgentResult>, a, b2);
  }
})();
export type StopAgentResult = InstanceType<typeof StopAgentResult$Runtime>;
var StopAgentResult: MessageType<StopAgentResult> = StopAgentResult$Runtime as unknown as MessageType<StopAgentResult>;
(StopAgentResult as MutableMessageType<StopAgentResult>).runtime = proto3;
(StopAgentResult as MutableMessageType<StopAgentResult>).typeName = "agent.v1.StopAgentResult";
(StopAgentResult as MutableMessageType<StopAgentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: StopAgentSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: StopAgentError, oneof: "result" }
]);
var StopAgentToolCall$Runtime = (() => class _StopAgentToolCall extends Message<_StopAgentToolCall> {
  declare args?: StopAgentArgs;
  declare result?: StopAgentResult;
  constructor(data?: PartialMessage<_StopAgentToolCall>) {
    super();
    proto3.util.initPartial(data, this as _StopAgentToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopAgentToolCall {
    return new _StopAgentToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopAgentToolCall {
    return new _StopAgentToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopAgentToolCall {
    return new _StopAgentToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _StopAgentToolCall | PlainMessage<_StopAgentToolCall> | undefined | null, b2: _StopAgentToolCall | PlainMessage<_StopAgentToolCall> | undefined | null): boolean {
    return proto3.util.equals(_StopAgentToolCall as unknown as MessageType<_StopAgentToolCall>, a, b2);
  }
})();
export type StopAgentToolCall = InstanceType<typeof StopAgentToolCall$Runtime>;
var StopAgentToolCall: MessageType<StopAgentToolCall> = StopAgentToolCall$Runtime as unknown as MessageType<StopAgentToolCall>;
(StopAgentToolCall as MutableMessageType<StopAgentToolCall>).runtime = proto3;
(StopAgentToolCall as MutableMessageType<StopAgentToolCall>).typeName = "agent.v1.StopAgentToolCall";
(StopAgentToolCall as MutableMessageType<StopAgentToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: StopAgentArgs },
  { no: 2, name: "result", kind: "message", T: StopAgentResult }
]);


export { GetAgentStatusArgs, GetAgentStatusWorker, GetAgentStatusSuccess, GetAgentStatusError, GetAgentStatusResult, GetAgentStatusToolCall, SendToAgentArgs, SendToAgentSuccess, SendToAgentError, SendToAgentResult, SendToAgentToolCall, ReadAgentTranscriptArgs, ReadAgentTranscriptSuccess, ReadAgentTranscriptError, ReadAgentTranscriptResult, ReadAgentTranscriptToolCall, CreateAgentArgs, CreateAgentSuccess, CreateAgentError, CreateAgentResult, CreateAgentToolCall, StopAgentArgs, StopAgentSuccess, StopAgentError, StopAgentResult, StopAgentToolCall };
