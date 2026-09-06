/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:33766-33957
 * Region SHA-256: d0c9193319c384913c6b24837b938259f02cc08a5d873fece1708c4e71d877a8
 * Atomic B1 exports: 6 messages + 1 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type AppliedAgentChange_ChangeType = 0 | 1 | 2 | 3;
var AppliedAgentChange_ChangeType: {
  "UNSPECIFIED": 0;
  "CREATED": 1;
  "MODIFIED": 2;
  "DELETED": 3;
  0: "UNSPECIFIED";
  1: "CREATED";
  2: "MODIFIED";
  3: "DELETED";
};
var ApplyAgentDiffToolCall$Runtime = (() => class _ApplyAgentDiffToolCall extends Message<_ApplyAgentDiffToolCall> {
  declare args?: ApplyAgentDiffArgs;
  declare result?: ApplyAgentDiffResult;
  constructor(data?: PartialMessage<_ApplyAgentDiffToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ApplyAgentDiffToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffToolCall {
    return new _ApplyAgentDiffToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffToolCall {
    return new _ApplyAgentDiffToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffToolCall {
    return new _ApplyAgentDiffToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffToolCall | PlainMessage<_ApplyAgentDiffToolCall> | undefined | null, b2: _ApplyAgentDiffToolCall | PlainMessage<_ApplyAgentDiffToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffToolCall as unknown as MessageType<_ApplyAgentDiffToolCall>, a, b2);
  }
})();
export type ApplyAgentDiffToolCall = InstanceType<typeof ApplyAgentDiffToolCall$Runtime>;
var ApplyAgentDiffToolCall: MessageType<ApplyAgentDiffToolCall> = ApplyAgentDiffToolCall$Runtime as unknown as MessageType<ApplyAgentDiffToolCall>;
(ApplyAgentDiffToolCall as MutableMessageType<ApplyAgentDiffToolCall>).runtime = proto3;
(ApplyAgentDiffToolCall as MutableMessageType<ApplyAgentDiffToolCall>).typeName = "agent.v1.ApplyAgentDiffToolCall";
(ApplyAgentDiffToolCall as MutableMessageType<ApplyAgentDiffToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ApplyAgentDiffArgs },
  { no: 2, name: "result", kind: "message", T: ApplyAgentDiffResult }
]);
var ApplyAgentDiffArgs$Runtime = (() => class _ApplyAgentDiffArgs extends Message<_ApplyAgentDiffArgs> {
  declare agentId: string;
  constructor(data?: PartialMessage<_ApplyAgentDiffArgs>) {
    super();
    this.agentId = "";
    proto3.util.initPartial(data, this as _ApplyAgentDiffArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffArgs {
    return new _ApplyAgentDiffArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffArgs {
    return new _ApplyAgentDiffArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffArgs {
    return new _ApplyAgentDiffArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffArgs | PlainMessage<_ApplyAgentDiffArgs> | undefined | null, b2: _ApplyAgentDiffArgs | PlainMessage<_ApplyAgentDiffArgs> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffArgs as unknown as MessageType<_ApplyAgentDiffArgs>, a, b2);
  }
})();
export type ApplyAgentDiffArgs = InstanceType<typeof ApplyAgentDiffArgs$Runtime>;
var ApplyAgentDiffArgs: MessageType<ApplyAgentDiffArgs> = ApplyAgentDiffArgs$Runtime as unknown as MessageType<ApplyAgentDiffArgs>;
(ApplyAgentDiffArgs as MutableMessageType<ApplyAgentDiffArgs>).runtime = proto3;
(ApplyAgentDiffArgs as MutableMessageType<ApplyAgentDiffArgs>).typeName = "agent.v1.ApplyAgentDiffArgs";
(ApplyAgentDiffArgs as MutableMessageType<ApplyAgentDiffArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ApplyAgentDiffResult$Runtime = (() => class _ApplyAgentDiffResult extends Message<_ApplyAgentDiffResult> {
  declare result: { case: "success"; value: ApplyAgentDiffSuccess } | { case: "error"; value: ApplyAgentDiffError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ApplyAgentDiffResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ApplyAgentDiffResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffResult {
    return new _ApplyAgentDiffResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffResult {
    return new _ApplyAgentDiffResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffResult {
    return new _ApplyAgentDiffResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffResult | PlainMessage<_ApplyAgentDiffResult> | undefined | null, b2: _ApplyAgentDiffResult | PlainMessage<_ApplyAgentDiffResult> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffResult as unknown as MessageType<_ApplyAgentDiffResult>, a, b2);
  }
})();
export type ApplyAgentDiffResult = InstanceType<typeof ApplyAgentDiffResult$Runtime>;
var ApplyAgentDiffResult: MessageType<ApplyAgentDiffResult> = ApplyAgentDiffResult$Runtime as unknown as MessageType<ApplyAgentDiffResult>;
(ApplyAgentDiffResult as MutableMessageType<ApplyAgentDiffResult>).runtime = proto3;
(ApplyAgentDiffResult as MutableMessageType<ApplyAgentDiffResult>).typeName = "agent.v1.ApplyAgentDiffResult";
(ApplyAgentDiffResult as MutableMessageType<ApplyAgentDiffResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ApplyAgentDiffSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ApplyAgentDiffError, oneof: "result" }
]);
var ApplyAgentDiffSuccess$Runtime = (() => class _ApplyAgentDiffSuccess extends Message<_ApplyAgentDiffSuccess> {
  declare appliedChanges: AppliedAgentChange[];
  constructor(data?: PartialMessage<_ApplyAgentDiffSuccess>) {
    super();
    this.appliedChanges = [];
    proto3.util.initPartial(data, this as _ApplyAgentDiffSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffSuccess {
    return new _ApplyAgentDiffSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffSuccess {
    return new _ApplyAgentDiffSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffSuccess {
    return new _ApplyAgentDiffSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffSuccess | PlainMessage<_ApplyAgentDiffSuccess> | undefined | null, b2: _ApplyAgentDiffSuccess | PlainMessage<_ApplyAgentDiffSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffSuccess as unknown as MessageType<_ApplyAgentDiffSuccess>, a, b2);
  }
})();
export type ApplyAgentDiffSuccess = InstanceType<typeof ApplyAgentDiffSuccess$Runtime>;
var ApplyAgentDiffSuccess: MessageType<ApplyAgentDiffSuccess> = ApplyAgentDiffSuccess$Runtime as unknown as MessageType<ApplyAgentDiffSuccess>;
(ApplyAgentDiffSuccess as MutableMessageType<ApplyAgentDiffSuccess>).runtime = proto3;
(ApplyAgentDiffSuccess as MutableMessageType<ApplyAgentDiffSuccess>).typeName = "agent.v1.ApplyAgentDiffSuccess";
(ApplyAgentDiffSuccess as MutableMessageType<ApplyAgentDiffSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "applied_changes", kind: "message", T: AppliedAgentChange, repeated: true }
]);
var AppliedAgentChange$Runtime = (() => class _AppliedAgentChange extends Message<_AppliedAgentChange> {
  declare path: string;
  declare changeType: AppliedAgentChange_ChangeType;
  declare beforeContent?: string;
  declare afterContent?: string;
  declare error?: string;
  declare messageForModel?: string;
  constructor(data?: PartialMessage<_AppliedAgentChange>) {
    super();
    this.path = "";
    this.changeType = AppliedAgentChange_ChangeType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _AppliedAgentChange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AppliedAgentChange {
    return new _AppliedAgentChange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AppliedAgentChange {
    return new _AppliedAgentChange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AppliedAgentChange {
    return new _AppliedAgentChange().fromJsonString(jsonString, options);
  }
  static equals(a: _AppliedAgentChange | PlainMessage<_AppliedAgentChange> | undefined | null, b2: _AppliedAgentChange | PlainMessage<_AppliedAgentChange> | undefined | null): boolean {
    return proto3.util.equals(_AppliedAgentChange as unknown as MessageType<_AppliedAgentChange>, a, b2);
  }
})();
export type AppliedAgentChange = InstanceType<typeof AppliedAgentChange$Runtime>;
var AppliedAgentChange: MessageType<AppliedAgentChange> = AppliedAgentChange$Runtime as unknown as MessageType<AppliedAgentChange>;
(AppliedAgentChange as MutableMessageType<AppliedAgentChange>).runtime = proto3;
(AppliedAgentChange as MutableMessageType<AppliedAgentChange>).typeName = "agent.v1.AppliedAgentChange";
(AppliedAgentChange as MutableMessageType<AppliedAgentChange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "change_type", kind: "enum", T: proto3.getEnumType(AppliedAgentChange_ChangeType) },
  { no: 3, name: "before_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "after_content", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "error", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "message_for_model", kind: "scalar", T: 9, opt: true }
]);
(function(AppliedAgentChange_ChangeType2) {
  AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["CREATED"] = 1] = "CREATED";
  AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["MODIFIED"] = 2] = "MODIFIED";
  AppliedAgentChange_ChangeType2[AppliedAgentChange_ChangeType2["DELETED"] = 3] = "DELETED";
})(AppliedAgentChange_ChangeType! || (AppliedAgentChange_ChangeType = {} as typeof AppliedAgentChange_ChangeType));
proto3.util.setEnumType(AppliedAgentChange_ChangeType, "agent.v1.AppliedAgentChange.ChangeType", [
  { no: 0, name: "CHANGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "CHANGE_TYPE_CREATED" },
  { no: 2, name: "CHANGE_TYPE_MODIFIED" },
  { no: 3, name: "CHANGE_TYPE_DELETED" }
]);
var ApplyAgentDiffError$Runtime = (() => class _ApplyAgentDiffError extends Message<_ApplyAgentDiffError> {
  declare error: string;
  declare appliedChanges: AppliedAgentChange[];
  constructor(data?: PartialMessage<_ApplyAgentDiffError>) {
    super();
    this.error = "";
    this.appliedChanges = [];
    proto3.util.initPartial(data, this as _ApplyAgentDiffError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffError {
    return new _ApplyAgentDiffError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffError {
    return new _ApplyAgentDiffError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffError {
    return new _ApplyAgentDiffError().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffError | PlainMessage<_ApplyAgentDiffError> | undefined | null, b2: _ApplyAgentDiffError | PlainMessage<_ApplyAgentDiffError> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffError as unknown as MessageType<_ApplyAgentDiffError>, a, b2);
  }
})();
export type ApplyAgentDiffError = InstanceType<typeof ApplyAgentDiffError$Runtime>;
var ApplyAgentDiffError: MessageType<ApplyAgentDiffError> = ApplyAgentDiffError$Runtime as unknown as MessageType<ApplyAgentDiffError>;
(ApplyAgentDiffError as MutableMessageType<ApplyAgentDiffError>).runtime = proto3;
(ApplyAgentDiffError as MutableMessageType<ApplyAgentDiffError>).typeName = "agent.v1.ApplyAgentDiffError";
(ApplyAgentDiffError as MutableMessageType<ApplyAgentDiffError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "applied_changes", kind: "message", T: AppliedAgentChange, repeated: true }
]);


export { ApplyAgentDiffToolCall, ApplyAgentDiffArgs, ApplyAgentDiffResult, ApplyAgentDiffSuccess, AppliedAgentChange, AppliedAgentChange_ChangeType, ApplyAgentDiffError };
