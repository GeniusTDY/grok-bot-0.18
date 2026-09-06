/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:37860-38010
 * Region SHA-256: 1a67d49e34f28abdc085e79857aaebccce53296627b72a752e6bcfc8ba08811e
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var CommunicateUpdateArgs$Runtime = (() => class _CommunicateUpdateArgs extends Message<_CommunicateUpdateArgs> {
  declare currentStep?: string;
  declare finalSummary?: string;
  declare completedSubtitle?: string;
  constructor(data?: PartialMessage<_CommunicateUpdateArgs>) {
    super();
    proto3.util.initPartial(data, this as _CommunicateUpdateArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateArgs {
    return new _CommunicateUpdateArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateArgs {
    return new _CommunicateUpdateArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateArgs {
    return new _CommunicateUpdateArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateArgs | PlainMessage<_CommunicateUpdateArgs> | undefined | null, b2: _CommunicateUpdateArgs | PlainMessage<_CommunicateUpdateArgs> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateArgs as unknown as MessageType<_CommunicateUpdateArgs>, a, b2);
  }
})();
export type CommunicateUpdateArgs = InstanceType<typeof CommunicateUpdateArgs$Runtime>;
var CommunicateUpdateArgs: MessageType<CommunicateUpdateArgs> = CommunicateUpdateArgs$Runtime as unknown as MessageType<CommunicateUpdateArgs>;
(CommunicateUpdateArgs as MutableMessageType<CommunicateUpdateArgs>).runtime = proto3;
(CommunicateUpdateArgs as MutableMessageType<CommunicateUpdateArgs>).typeName = "agent.v1.CommunicateUpdateArgs";
(CommunicateUpdateArgs as MutableMessageType<CommunicateUpdateArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_step", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "final_summary", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "completed_subtitle", kind: "scalar", T: 9, opt: true }
]);
var CommunicateUpdateSuccess$Runtime = (() => class _CommunicateUpdateSuccess extends Message<_CommunicateUpdateSuccess> {
  declare currentStep: string;
  declare messageIndex: number;
  constructor(data?: PartialMessage<_CommunicateUpdateSuccess>) {
    super();
    this.currentStep = "";
    this.messageIndex = 0;
    proto3.util.initPartial(data, this as _CommunicateUpdateSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateSuccess {
    return new _CommunicateUpdateSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateSuccess {
    return new _CommunicateUpdateSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateSuccess {
    return new _CommunicateUpdateSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateSuccess | PlainMessage<_CommunicateUpdateSuccess> | undefined | null, b2: _CommunicateUpdateSuccess | PlainMessage<_CommunicateUpdateSuccess> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateSuccess as unknown as MessageType<_CommunicateUpdateSuccess>, a, b2);
  }
})();
export type CommunicateUpdateSuccess = InstanceType<typeof CommunicateUpdateSuccess$Runtime>;
var CommunicateUpdateSuccess: MessageType<CommunicateUpdateSuccess> = CommunicateUpdateSuccess$Runtime as unknown as MessageType<CommunicateUpdateSuccess>;
(CommunicateUpdateSuccess as MutableMessageType<CommunicateUpdateSuccess>).runtime = proto3;
(CommunicateUpdateSuccess as MutableMessageType<CommunicateUpdateSuccess>).typeName = "agent.v1.CommunicateUpdateSuccess";
(CommunicateUpdateSuccess as MutableMessageType<CommunicateUpdateSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "current_step",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var CommunicateUpdateError$Runtime = (() => class _CommunicateUpdateError extends Message<_CommunicateUpdateError> {
  declare error: string;
  constructor(data?: PartialMessage<_CommunicateUpdateError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _CommunicateUpdateError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateError {
    return new _CommunicateUpdateError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateError {
    return new _CommunicateUpdateError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateError {
    return new _CommunicateUpdateError().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateError | PlainMessage<_CommunicateUpdateError> | undefined | null, b2: _CommunicateUpdateError | PlainMessage<_CommunicateUpdateError> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateError as unknown as MessageType<_CommunicateUpdateError>, a, b2);
  }
})();
export type CommunicateUpdateError = InstanceType<typeof CommunicateUpdateError$Runtime>;
var CommunicateUpdateError: MessageType<CommunicateUpdateError> = CommunicateUpdateError$Runtime as unknown as MessageType<CommunicateUpdateError>;
(CommunicateUpdateError as MutableMessageType<CommunicateUpdateError>).runtime = proto3;
(CommunicateUpdateError as MutableMessageType<CommunicateUpdateError>).typeName = "agent.v1.CommunicateUpdateError";
(CommunicateUpdateError as MutableMessageType<CommunicateUpdateError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CommunicateUpdateResult$Runtime = (() => class _CommunicateUpdateResult extends Message<_CommunicateUpdateResult> {
  declare result: { case: "success"; value: CommunicateUpdateSuccess } | { case: "error"; value: CommunicateUpdateError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CommunicateUpdateResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _CommunicateUpdateResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateResult {
    return new _CommunicateUpdateResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateResult {
    return new _CommunicateUpdateResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateResult {
    return new _CommunicateUpdateResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateResult | PlainMessage<_CommunicateUpdateResult> | undefined | null, b2: _CommunicateUpdateResult | PlainMessage<_CommunicateUpdateResult> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateResult as unknown as MessageType<_CommunicateUpdateResult>, a, b2);
  }
})();
export type CommunicateUpdateResult = InstanceType<typeof CommunicateUpdateResult$Runtime>;
var CommunicateUpdateResult: MessageType<CommunicateUpdateResult> = CommunicateUpdateResult$Runtime as unknown as MessageType<CommunicateUpdateResult>;
(CommunicateUpdateResult as MutableMessageType<CommunicateUpdateResult>).runtime = proto3;
(CommunicateUpdateResult as MutableMessageType<CommunicateUpdateResult>).typeName = "agent.v1.CommunicateUpdateResult";
(CommunicateUpdateResult as MutableMessageType<CommunicateUpdateResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: CommunicateUpdateSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: CommunicateUpdateError, oneof: "result" }
]);
var CommunicateUpdateToolCall$Runtime = (() => class _CommunicateUpdateToolCall extends Message<_CommunicateUpdateToolCall> {
  declare args?: CommunicateUpdateArgs;
  declare result?: CommunicateUpdateResult;
  constructor(data?: PartialMessage<_CommunicateUpdateToolCall>) {
    super();
    proto3.util.initPartial(data, this as _CommunicateUpdateToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateToolCall {
    return new _CommunicateUpdateToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateToolCall {
    return new _CommunicateUpdateToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateToolCall {
    return new _CommunicateUpdateToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateToolCall | PlainMessage<_CommunicateUpdateToolCall> | undefined | null, b2: _CommunicateUpdateToolCall | PlainMessage<_CommunicateUpdateToolCall> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateToolCall as unknown as MessageType<_CommunicateUpdateToolCall>, a, b2);
  }
})();
export type CommunicateUpdateToolCall = InstanceType<typeof CommunicateUpdateToolCall$Runtime>;
var CommunicateUpdateToolCall: MessageType<CommunicateUpdateToolCall> = CommunicateUpdateToolCall$Runtime as unknown as MessageType<CommunicateUpdateToolCall>;
(CommunicateUpdateToolCall as MutableMessageType<CommunicateUpdateToolCall>).runtime = proto3;
(CommunicateUpdateToolCall as MutableMessageType<CommunicateUpdateToolCall>).typeName = "agent.v1.CommunicateUpdateToolCall";
(CommunicateUpdateToolCall as MutableMessageType<CommunicateUpdateToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: CommunicateUpdateArgs },
  { no: 2, name: "result", kind: "message", T: CommunicateUpdateResult }
]);


export { CommunicateUpdateArgs, CommunicateUpdateSuccess, CommunicateUpdateError, CommunicateUpdateResult, CommunicateUpdateToolCall };
