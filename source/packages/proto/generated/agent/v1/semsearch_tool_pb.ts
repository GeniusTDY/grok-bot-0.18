/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:32959-33119
 * Region SHA-256: 3e1253e39e86a50e96acaa5b1a7e9f379dc804299dd6e09d07edbbb514e77be3
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { CodeResult } from "../../aiserver/v1/repository_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SemSearchToolCall$Runtime = (() => class _SemSearchToolCall extends Message<_SemSearchToolCall> {
  declare args?: SemSearchToolArgs;
  declare result?: SemSearchToolResult;
  constructor(data?: PartialMessage<_SemSearchToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SemSearchToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchToolCall {
    return new _SemSearchToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchToolCall {
    return new _SemSearchToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchToolCall {
    return new _SemSearchToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchToolCall | PlainMessage<_SemSearchToolCall> | undefined | null, b2: _SemSearchToolCall | PlainMessage<_SemSearchToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchToolCall as unknown as MessageType<_SemSearchToolCall>, a, b2);
  }
})();
export type SemSearchToolCall = InstanceType<typeof SemSearchToolCall$Runtime>;
var SemSearchToolCall: MessageType<SemSearchToolCall> = SemSearchToolCall$Runtime as unknown as MessageType<SemSearchToolCall>;
(SemSearchToolCall as MutableMessageType<SemSearchToolCall>).runtime = proto3;
(SemSearchToolCall as MutableMessageType<SemSearchToolCall>).typeName = "agent.v1.SemSearchToolCall";
(SemSearchToolCall as MutableMessageType<SemSearchToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SemSearchToolArgs },
  { no: 2, name: "result", kind: "message", T: SemSearchToolResult }
]);
var SemSearchToolArgs$Runtime = (() => class _SemSearchToolArgs extends Message<_SemSearchToolArgs> {
  declare query: string;
  declare targetDirectories: string[];
  declare explanation: string;
  constructor(data?: PartialMessage<_SemSearchToolArgs>) {
    super();
    this.query = "";
    this.targetDirectories = [];
    this.explanation = "";
    proto3.util.initPartial(data, this as _SemSearchToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchToolArgs {
    return new _SemSearchToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchToolArgs {
    return new _SemSearchToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchToolArgs {
    return new _SemSearchToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchToolArgs | PlainMessage<_SemSearchToolArgs> | undefined | null, b2: _SemSearchToolArgs | PlainMessage<_SemSearchToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchToolArgs as unknown as MessageType<_SemSearchToolArgs>, a, b2);
  }
})();
export type SemSearchToolArgs = InstanceType<typeof SemSearchToolArgs$Runtime>;
var SemSearchToolArgs: MessageType<SemSearchToolArgs> = SemSearchToolArgs$Runtime as unknown as MessageType<SemSearchToolArgs>;
(SemSearchToolArgs as MutableMessageType<SemSearchToolArgs>).runtime = proto3;
(SemSearchToolArgs as MutableMessageType<SemSearchToolArgs>).typeName = "agent.v1.SemSearchToolArgs";
(SemSearchToolArgs as MutableMessageType<SemSearchToolArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "target_directories", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "explanation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SemSearchToolResult$Runtime = (() => class _SemSearchToolResult extends Message<_SemSearchToolResult> {
  declare result: { case: "success"; value: SemSearchToolSuccess } | { case: "error"; value: SemSearchToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SemSearchToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SemSearchToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchToolResult {
    return new _SemSearchToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchToolResult {
    return new _SemSearchToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchToolResult {
    return new _SemSearchToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchToolResult | PlainMessage<_SemSearchToolResult> | undefined | null, b2: _SemSearchToolResult | PlainMessage<_SemSearchToolResult> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchToolResult as unknown as MessageType<_SemSearchToolResult>, a, b2);
  }
})();
export type SemSearchToolResult = InstanceType<typeof SemSearchToolResult$Runtime>;
var SemSearchToolResult: MessageType<SemSearchToolResult> = SemSearchToolResult$Runtime as unknown as MessageType<SemSearchToolResult>;
(SemSearchToolResult as MutableMessageType<SemSearchToolResult>).runtime = proto3;
(SemSearchToolResult as MutableMessageType<SemSearchToolResult>).typeName = "agent.v1.SemSearchToolResult";
(SemSearchToolResult as MutableMessageType<SemSearchToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SemSearchToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SemSearchToolError, oneof: "result" }
]);
var SemSearchToolSuccess$Runtime = (() => class _SemSearchToolSuccess extends Message<_SemSearchToolSuccess> {
  declare results: string;
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_SemSearchToolSuccess>) {
    super();
    this.results = "";
    this.codeResults = [];
    proto3.util.initPartial(data, this as _SemSearchToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchToolSuccess {
    return new _SemSearchToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchToolSuccess {
    return new _SemSearchToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchToolSuccess {
    return new _SemSearchToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchToolSuccess | PlainMessage<_SemSearchToolSuccess> | undefined | null, b2: _SemSearchToolSuccess | PlainMessage<_SemSearchToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchToolSuccess as unknown as MessageType<_SemSearchToolSuccess>, a, b2);
  }
})();
export type SemSearchToolSuccess = InstanceType<typeof SemSearchToolSuccess$Runtime>;
var SemSearchToolSuccess: MessageType<SemSearchToolSuccess> = SemSearchToolSuccess$Runtime as unknown as MessageType<SemSearchToolSuccess>;
(SemSearchToolSuccess as MutableMessageType<SemSearchToolSuccess>).runtime = proto3;
(SemSearchToolSuccess as MutableMessageType<SemSearchToolSuccess>).typeName = "agent.v1.SemSearchToolSuccess";
(SemSearchToolSuccess as MutableMessageType<SemSearchToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "results",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var SemSearchToolError$Runtime = (() => class _SemSearchToolError extends Message<_SemSearchToolError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_SemSearchToolError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _SemSearchToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchToolError {
    return new _SemSearchToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchToolError {
    return new _SemSearchToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchToolError {
    return new _SemSearchToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchToolError | PlainMessage<_SemSearchToolError> | undefined | null, b2: _SemSearchToolError | PlainMessage<_SemSearchToolError> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchToolError as unknown as MessageType<_SemSearchToolError>, a, b2);
  }
})();
export type SemSearchToolError = InstanceType<typeof SemSearchToolError$Runtime>;
var SemSearchToolError: MessageType<SemSearchToolError> = SemSearchToolError$Runtime as unknown as MessageType<SemSearchToolError>;
(SemSearchToolError as MutableMessageType<SemSearchToolError>).runtime = proto3;
(SemSearchToolError as MutableMessageType<SemSearchToolError>).typeName = "agent.v1.SemSearchToolError";
(SemSearchToolError as MutableMessageType<SemSearchToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { SemSearchToolCall, SemSearchToolArgs, SemSearchToolResult, SemSearchToolSuccess, SemSearchToolError };
