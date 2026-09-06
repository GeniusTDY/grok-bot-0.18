/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:41454-41703
 * Region SHA-256: 874c6ee7cbb0db67de4442fb8eeee2e09a702f034655ba909661102fc0e15d35
 * Atomic B1 exports: 9 messages + 1 enums = 10
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type GoalStatus = 0 | 1 | 2 | 3 | 4;
var GoalStatus: {
  "UNSPECIFIED": 0;
  "ACTIVE": 1;
  "PAUSED": 2;
  "COMPLETE": 3;
  "CLEARED": 4;
  0: "UNSPECIFIED";
  1: "ACTIVE";
  2: "PAUSED";
  3: "COMPLETE";
  4: "CLEARED";
};
(function(GoalStatus2) {
  GoalStatus2[GoalStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GoalStatus2[GoalStatus2["ACTIVE"] = 1] = "ACTIVE";
  GoalStatus2[GoalStatus2["PAUSED"] = 2] = "PAUSED";
  GoalStatus2[GoalStatus2["COMPLETE"] = 3] = "COMPLETE";
  GoalStatus2[GoalStatus2["CLEARED"] = 4] = "CLEARED";
})(GoalStatus! || (GoalStatus = {} as typeof GoalStatus));
proto3.util.setEnumType(GoalStatus, "agent.v1.GoalStatus", [
  { no: 0, name: "GOAL_STATUS_UNSPECIFIED" },
  { no: 1, name: "GOAL_STATUS_ACTIVE" },
  { no: 2, name: "GOAL_STATUS_PAUSED" },
  { no: 3, name: "GOAL_STATUS_COMPLETE" },
  { no: 4, name: "GOAL_STATUS_CLEARED" }
]);
var CreateGoalArgs$Runtime = (() => class _CreateGoalArgs extends Message<_CreateGoalArgs> {
  declare objective: string;
  constructor(data?: PartialMessage<_CreateGoalArgs>) {
    super();
    this.objective = "";
    proto3.util.initPartial(data, this as _CreateGoalArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateGoalArgs {
    return new _CreateGoalArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateGoalArgs {
    return new _CreateGoalArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateGoalArgs {
    return new _CreateGoalArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateGoalArgs | PlainMessage<_CreateGoalArgs> | undefined | null, b2: _CreateGoalArgs | PlainMessage<_CreateGoalArgs> | undefined | null): boolean {
    return proto3.util.equals(_CreateGoalArgs as unknown as MessageType<_CreateGoalArgs>, a, b2);
  }
})();
export type CreateGoalArgs = InstanceType<typeof CreateGoalArgs$Runtime>;
var CreateGoalArgs: MessageType<CreateGoalArgs> = CreateGoalArgs$Runtime as unknown as MessageType<CreateGoalArgs>;
(CreateGoalArgs as MutableMessageType<CreateGoalArgs>).runtime = proto3;
(CreateGoalArgs as MutableMessageType<CreateGoalArgs>).typeName = "agent.v1.CreateGoalArgs";
(CreateGoalArgs as MutableMessageType<CreateGoalArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "objective",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateGoalSuccess$Runtime = (() => class _CreateGoalSuccess extends Message<_CreateGoalSuccess> {
  constructor(data?: PartialMessage<_CreateGoalSuccess>) {
    super();
    proto3.util.initPartial(data, this as _CreateGoalSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateGoalSuccess {
    return new _CreateGoalSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateGoalSuccess {
    return new _CreateGoalSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateGoalSuccess {
    return new _CreateGoalSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateGoalSuccess | PlainMessage<_CreateGoalSuccess> | undefined | null, b2: _CreateGoalSuccess | PlainMessage<_CreateGoalSuccess> | undefined | null): boolean {
    return proto3.util.equals(_CreateGoalSuccess as unknown as MessageType<_CreateGoalSuccess>, a, b2);
  }
})();
export type CreateGoalSuccess = InstanceType<typeof CreateGoalSuccess$Runtime>;
var CreateGoalSuccess: MessageType<CreateGoalSuccess> = CreateGoalSuccess$Runtime as unknown as MessageType<CreateGoalSuccess>;
(CreateGoalSuccess as MutableMessageType<CreateGoalSuccess>).runtime = proto3;
(CreateGoalSuccess as MutableMessageType<CreateGoalSuccess>).typeName = "agent.v1.CreateGoalSuccess";
(CreateGoalSuccess as MutableMessageType<CreateGoalSuccess>).fields = proto3.util.newFieldList(() => []);
var GoalError$Runtime = (() => class _GoalError extends Message<_GoalError> {
  declare error: string;
  constructor(data?: PartialMessage<_GoalError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GoalError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GoalError {
    return new _GoalError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GoalError {
    return new _GoalError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GoalError {
    return new _GoalError().fromJsonString(jsonString, options);
  }
  static equals(a: _GoalError | PlainMessage<_GoalError> | undefined | null, b2: _GoalError | PlainMessage<_GoalError> | undefined | null): boolean {
    return proto3.util.equals(_GoalError as unknown as MessageType<_GoalError>, a, b2);
  }
})();
export type GoalError = InstanceType<typeof GoalError$Runtime>;
var GoalError: MessageType<GoalError> = GoalError$Runtime as unknown as MessageType<GoalError>;
(GoalError as MutableMessageType<GoalError>).runtime = proto3;
(GoalError as MutableMessageType<GoalError>).typeName = "agent.v1.GoalError";
(GoalError as MutableMessageType<GoalError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateGoalResult$Runtime = (() => class _CreateGoalResult extends Message<_CreateGoalResult> {
  declare result: { case: "success"; value: CreateGoalSuccess } | { case: "error"; value: GoalError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CreateGoalResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _CreateGoalResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateGoalResult {
    return new _CreateGoalResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateGoalResult {
    return new _CreateGoalResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateGoalResult {
    return new _CreateGoalResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateGoalResult | PlainMessage<_CreateGoalResult> | undefined | null, b2: _CreateGoalResult | PlainMessage<_CreateGoalResult> | undefined | null): boolean {
    return proto3.util.equals(_CreateGoalResult as unknown as MessageType<_CreateGoalResult>, a, b2);
  }
})();
export type CreateGoalResult = InstanceType<typeof CreateGoalResult$Runtime>;
var CreateGoalResult: MessageType<CreateGoalResult> = CreateGoalResult$Runtime as unknown as MessageType<CreateGoalResult>;
(CreateGoalResult as MutableMessageType<CreateGoalResult>).runtime = proto3;
(CreateGoalResult as MutableMessageType<CreateGoalResult>).typeName = "agent.v1.CreateGoalResult";
(CreateGoalResult as MutableMessageType<CreateGoalResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: CreateGoalSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GoalError, oneof: "result" }
]);
var CreateGoalToolCall$Runtime = (() => class _CreateGoalToolCall extends Message<_CreateGoalToolCall> {
  declare args?: CreateGoalArgs;
  declare result?: CreateGoalResult;
  constructor(data?: PartialMessage<_CreateGoalToolCall>) {
    super();
    proto3.util.initPartial(data, this as _CreateGoalToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateGoalToolCall {
    return new _CreateGoalToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateGoalToolCall {
    return new _CreateGoalToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateGoalToolCall {
    return new _CreateGoalToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateGoalToolCall | PlainMessage<_CreateGoalToolCall> | undefined | null, b2: _CreateGoalToolCall | PlainMessage<_CreateGoalToolCall> | undefined | null): boolean {
    return proto3.util.equals(_CreateGoalToolCall as unknown as MessageType<_CreateGoalToolCall>, a, b2);
  }
})();
export type CreateGoalToolCall = InstanceType<typeof CreateGoalToolCall$Runtime>;
var CreateGoalToolCall: MessageType<CreateGoalToolCall> = CreateGoalToolCall$Runtime as unknown as MessageType<CreateGoalToolCall>;
(CreateGoalToolCall as MutableMessageType<CreateGoalToolCall>).runtime = proto3;
(CreateGoalToolCall as MutableMessageType<CreateGoalToolCall>).typeName = "agent.v1.CreateGoalToolCall";
(CreateGoalToolCall as MutableMessageType<CreateGoalToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: CreateGoalArgs },
  { no: 2, name: "result", kind: "message", T: CreateGoalResult }
]);
var UpdateGoalArgs$Runtime = (() => class _UpdateGoalArgs extends Message<_UpdateGoalArgs> {
  declare status: GoalStatus;
  constructor(data?: PartialMessage<_UpdateGoalArgs>) {
    super();
    this.status = GoalStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpdateGoalArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateGoalArgs {
    return new _UpdateGoalArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateGoalArgs {
    return new _UpdateGoalArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateGoalArgs {
    return new _UpdateGoalArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateGoalArgs | PlainMessage<_UpdateGoalArgs> | undefined | null, b2: _UpdateGoalArgs | PlainMessage<_UpdateGoalArgs> | undefined | null): boolean {
    return proto3.util.equals(_UpdateGoalArgs as unknown as MessageType<_UpdateGoalArgs>, a, b2);
  }
})();
export type UpdateGoalArgs = InstanceType<typeof UpdateGoalArgs$Runtime>;
var UpdateGoalArgs: MessageType<UpdateGoalArgs> = UpdateGoalArgs$Runtime as unknown as MessageType<UpdateGoalArgs>;
(UpdateGoalArgs as MutableMessageType<UpdateGoalArgs>).runtime = proto3;
(UpdateGoalArgs as MutableMessageType<UpdateGoalArgs>).typeName = "agent.v1.UpdateGoalArgs";
(UpdateGoalArgs as MutableMessageType<UpdateGoalArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) }
]);
var UpdateGoalSuccess$Runtime = (() => class _UpdateGoalSuccess extends Message<_UpdateGoalSuccess> {
  declare status: GoalStatus;
  constructor(data?: PartialMessage<_UpdateGoalSuccess>) {
    super();
    this.status = GoalStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpdateGoalSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateGoalSuccess {
    return new _UpdateGoalSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateGoalSuccess {
    return new _UpdateGoalSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateGoalSuccess {
    return new _UpdateGoalSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateGoalSuccess | PlainMessage<_UpdateGoalSuccess> | undefined | null, b2: _UpdateGoalSuccess | PlainMessage<_UpdateGoalSuccess> | undefined | null): boolean {
    return proto3.util.equals(_UpdateGoalSuccess as unknown as MessageType<_UpdateGoalSuccess>, a, b2);
  }
})();
export type UpdateGoalSuccess = InstanceType<typeof UpdateGoalSuccess$Runtime>;
var UpdateGoalSuccess: MessageType<UpdateGoalSuccess> = UpdateGoalSuccess$Runtime as unknown as MessageType<UpdateGoalSuccess>;
(UpdateGoalSuccess as MutableMessageType<UpdateGoalSuccess>).runtime = proto3;
(UpdateGoalSuccess as MutableMessageType<UpdateGoalSuccess>).typeName = "agent.v1.UpdateGoalSuccess";
(UpdateGoalSuccess as MutableMessageType<UpdateGoalSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) }
]);
var UpdateGoalResult$Runtime = (() => class _UpdateGoalResult extends Message<_UpdateGoalResult> {
  declare result: { case: "success"; value: UpdateGoalSuccess } | { case: "error"; value: GoalError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UpdateGoalResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _UpdateGoalResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateGoalResult {
    return new _UpdateGoalResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateGoalResult {
    return new _UpdateGoalResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateGoalResult {
    return new _UpdateGoalResult().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateGoalResult | PlainMessage<_UpdateGoalResult> | undefined | null, b2: _UpdateGoalResult | PlainMessage<_UpdateGoalResult> | undefined | null): boolean {
    return proto3.util.equals(_UpdateGoalResult as unknown as MessageType<_UpdateGoalResult>, a, b2);
  }
})();
export type UpdateGoalResult = InstanceType<typeof UpdateGoalResult$Runtime>;
var UpdateGoalResult: MessageType<UpdateGoalResult> = UpdateGoalResult$Runtime as unknown as MessageType<UpdateGoalResult>;
(UpdateGoalResult as MutableMessageType<UpdateGoalResult>).runtime = proto3;
(UpdateGoalResult as MutableMessageType<UpdateGoalResult>).typeName = "agent.v1.UpdateGoalResult";
(UpdateGoalResult as MutableMessageType<UpdateGoalResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: UpdateGoalSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GoalError, oneof: "result" }
]);
var UpdateGoalToolCall$Runtime = (() => class _UpdateGoalToolCall extends Message<_UpdateGoalToolCall> {
  declare args?: UpdateGoalArgs;
  declare result?: UpdateGoalResult;
  constructor(data?: PartialMessage<_UpdateGoalToolCall>) {
    super();
    proto3.util.initPartial(data, this as _UpdateGoalToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateGoalToolCall {
    return new _UpdateGoalToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateGoalToolCall {
    return new _UpdateGoalToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateGoalToolCall {
    return new _UpdateGoalToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateGoalToolCall | PlainMessage<_UpdateGoalToolCall> | undefined | null, b2: _UpdateGoalToolCall | PlainMessage<_UpdateGoalToolCall> | undefined | null): boolean {
    return proto3.util.equals(_UpdateGoalToolCall as unknown as MessageType<_UpdateGoalToolCall>, a, b2);
  }
})();
export type UpdateGoalToolCall = InstanceType<typeof UpdateGoalToolCall$Runtime>;
var UpdateGoalToolCall: MessageType<UpdateGoalToolCall> = UpdateGoalToolCall$Runtime as unknown as MessageType<UpdateGoalToolCall>;
(UpdateGoalToolCall as MutableMessageType<UpdateGoalToolCall>).runtime = proto3;
(UpdateGoalToolCall as MutableMessageType<UpdateGoalToolCall>).typeName = "agent.v1.UpdateGoalToolCall";
(UpdateGoalToolCall as MutableMessageType<UpdateGoalToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: UpdateGoalArgs },
  { no: 2, name: "result", kind: "message", T: UpdateGoalResult }
]);


export { GoalStatus, CreateGoalArgs, CreateGoalSuccess, GoalError, CreateGoalResult, CreateGoalToolCall, UpdateGoalArgs, UpdateGoalSuccess, UpdateGoalResult, UpdateGoalToolCall };
