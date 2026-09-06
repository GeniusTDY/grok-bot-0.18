/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34970-35148
 * Region SHA-256: bb779f2b8804c1e40cbe562d7804a725a694b5bc0d4521c590307ab20d0a5d83
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ReflectArgs$Runtime = (() => class _ReflectArgs extends Message<_ReflectArgs> {
  declare unexpectedActionOutcomes: string;
  declare relevantInstructions: string;
  declare scenarioAnalysis: string;
  declare criticalSynthesis: string;
  declare nextSteps: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_ReflectArgs>) {
    super();
    this.unexpectedActionOutcomes = "";
    this.relevantInstructions = "";
    this.scenarioAnalysis = "";
    this.criticalSynthesis = "";
    this.nextSteps = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ReflectArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectArgs {
    return new _ReflectArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectArgs {
    return new _ReflectArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectArgs {
    return new _ReflectArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectArgs | PlainMessage<_ReflectArgs> | undefined | null, b2: _ReflectArgs | PlainMessage<_ReflectArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReflectArgs as unknown as MessageType<_ReflectArgs>, a, b2);
  }
})();
export type ReflectArgs = InstanceType<typeof ReflectArgs$Runtime>;
var ReflectArgs: MessageType<ReflectArgs> = ReflectArgs$Runtime as unknown as MessageType<ReflectArgs>;
(ReflectArgs as MutableMessageType<ReflectArgs>).runtime = proto3;
(ReflectArgs as MutableMessageType<ReflectArgs>).typeName = "agent.v1.ReflectArgs";
(ReflectArgs as MutableMessageType<ReflectArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "unexpected_action_outcomes",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relevant_instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "scenario_analysis",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "critical_synthesis",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "next_steps",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReflectResult$Runtime = (() => class _ReflectResult extends Message<_ReflectResult> {
  declare result: { case: "success"; value: ReflectSuccess } | { case: "error"; value: ReflectError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReflectResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReflectResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectResult {
    return new _ReflectResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectResult {
    return new _ReflectResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectResult {
    return new _ReflectResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectResult | PlainMessage<_ReflectResult> | undefined | null, b2: _ReflectResult | PlainMessage<_ReflectResult> | undefined | null): boolean {
    return proto3.util.equals(_ReflectResult as unknown as MessageType<_ReflectResult>, a, b2);
  }
})();
export type ReflectResult = InstanceType<typeof ReflectResult$Runtime>;
var ReflectResult: MessageType<ReflectResult> = ReflectResult$Runtime as unknown as MessageType<ReflectResult>;
(ReflectResult as MutableMessageType<ReflectResult>).runtime = proto3;
(ReflectResult as MutableMessageType<ReflectResult>).typeName = "agent.v1.ReflectResult";
(ReflectResult as MutableMessageType<ReflectResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReflectSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReflectError, oneof: "result" }
]);
var ReflectSuccess$Runtime = (() => class _ReflectSuccess extends Message<_ReflectSuccess> {
  constructor(data?: PartialMessage<_ReflectSuccess>) {
    super();
    proto3.util.initPartial(data, this as _ReflectSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectSuccess {
    return new _ReflectSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectSuccess {
    return new _ReflectSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectSuccess {
    return new _ReflectSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectSuccess | PlainMessage<_ReflectSuccess> | undefined | null, b2: _ReflectSuccess | PlainMessage<_ReflectSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReflectSuccess as unknown as MessageType<_ReflectSuccess>, a, b2);
  }
})();
export type ReflectSuccess = InstanceType<typeof ReflectSuccess$Runtime>;
var ReflectSuccess: MessageType<ReflectSuccess> = ReflectSuccess$Runtime as unknown as MessageType<ReflectSuccess>;
(ReflectSuccess as MutableMessageType<ReflectSuccess>).runtime = proto3;
(ReflectSuccess as MutableMessageType<ReflectSuccess>).typeName = "agent.v1.ReflectSuccess";
(ReflectSuccess as MutableMessageType<ReflectSuccess>).fields = proto3.util.newFieldList(() => []);
var ReflectError$Runtime = (() => class _ReflectError extends Message<_ReflectError> {
  declare error: string;
  constructor(data?: PartialMessage<_ReflectError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ReflectError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectError {
    return new _ReflectError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectError {
    return new _ReflectError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectError {
    return new _ReflectError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectError | PlainMessage<_ReflectError> | undefined | null, b2: _ReflectError | PlainMessage<_ReflectError> | undefined | null): boolean {
    return proto3.util.equals(_ReflectError as unknown as MessageType<_ReflectError>, a, b2);
  }
})();
export type ReflectError = InstanceType<typeof ReflectError$Runtime>;
var ReflectError: MessageType<ReflectError> = ReflectError$Runtime as unknown as MessageType<ReflectError>;
(ReflectError as MutableMessageType<ReflectError>).runtime = proto3;
(ReflectError as MutableMessageType<ReflectError>).typeName = "agent.v1.ReflectError";
(ReflectError as MutableMessageType<ReflectError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReflectToolCall$Runtime = (() => class _ReflectToolCall extends Message<_ReflectToolCall> {
  declare args?: ReflectArgs;
  declare result?: ReflectResult;
  constructor(data?: PartialMessage<_ReflectToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReflectToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectToolCall {
    return new _ReflectToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectToolCall {
    return new _ReflectToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectToolCall {
    return new _ReflectToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectToolCall | PlainMessage<_ReflectToolCall> | undefined | null, b2: _ReflectToolCall | PlainMessage<_ReflectToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReflectToolCall as unknown as MessageType<_ReflectToolCall>, a, b2);
  }
})();
export type ReflectToolCall = InstanceType<typeof ReflectToolCall$Runtime>;
var ReflectToolCall: MessageType<ReflectToolCall> = ReflectToolCall$Runtime as unknown as MessageType<ReflectToolCall>;
(ReflectToolCall as MutableMessageType<ReflectToolCall>).runtime = proto3;
(ReflectToolCall as MutableMessageType<ReflectToolCall>).typeName = "agent.v1.ReflectToolCall";
(ReflectToolCall as MutableMessageType<ReflectToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReflectArgs },
  { no: 2, name: "result", kind: "message", T: ReflectResult }
]);


export { ReflectArgs, ReflectResult, ReflectSuccess, ReflectError, ReflectToolCall };
