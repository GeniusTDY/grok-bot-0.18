/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:37656-37859
 * Region SHA-256: 6ef60d144790f5cd687efa2f235090172a60ea4780b3d1f8f47d41e6d0ba54fa
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ReportBugArgs$Runtime = (() => class _ReportBugArgs extends Message<_ReportBugArgs> {
  declare title: string;
  declare file: string;
  declare startLine: number;
  declare endLine: number;
  declare description: string;
  declare severity: string;
  declare category: string;
  declare rationale: string;
  constructor(data?: PartialMessage<_ReportBugArgs>) {
    super();
    this.title = "";
    this.file = "";
    this.startLine = 0;
    this.endLine = 0;
    this.description = "";
    this.severity = "";
    this.category = "";
    this.rationale = "";
    proto3.util.initPartial(data, this as _ReportBugArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugArgs {
    return new _ReportBugArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugArgs {
    return new _ReportBugArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugArgs {
    return new _ReportBugArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugArgs | PlainMessage<_ReportBugArgs> | undefined | null, b2: _ReportBugArgs | PlainMessage<_ReportBugArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugArgs as unknown as MessageType<_ReportBugArgs>, a, b2);
  }
})();
export type ReportBugArgs = InstanceType<typeof ReportBugArgs$Runtime>;
var ReportBugArgs: MessageType<ReportBugArgs> = ReportBugArgs$Runtime as unknown as MessageType<ReportBugArgs>;
(ReportBugArgs as MutableMessageType<ReportBugArgs>).runtime = proto3;
(ReportBugArgs as MutableMessageType<ReportBugArgs>).typeName = "agent.v1.ReportBugArgs";
(ReportBugArgs as MutableMessageType<ReportBugArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "category",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "rationale",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReportBugSuccess$Runtime = (() => class _ReportBugSuccess extends Message<_ReportBugSuccess> {
  declare output: string;
  constructor(data?: PartialMessage<_ReportBugSuccess>) {
    super();
    this.output = "";
    proto3.util.initPartial(data, this as _ReportBugSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugSuccess {
    return new _ReportBugSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugSuccess {
    return new _ReportBugSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugSuccess {
    return new _ReportBugSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugSuccess | PlainMessage<_ReportBugSuccess> | undefined | null, b2: _ReportBugSuccess | PlainMessage<_ReportBugSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugSuccess as unknown as MessageType<_ReportBugSuccess>, a, b2);
  }
})();
export type ReportBugSuccess = InstanceType<typeof ReportBugSuccess$Runtime>;
var ReportBugSuccess: MessageType<ReportBugSuccess> = ReportBugSuccess$Runtime as unknown as MessageType<ReportBugSuccess>;
(ReportBugSuccess as MutableMessageType<ReportBugSuccess>).runtime = proto3;
(ReportBugSuccess as MutableMessageType<ReportBugSuccess>).typeName = "agent.v1.ReportBugSuccess";
(ReportBugSuccess as MutableMessageType<ReportBugSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReportBugError$Runtime = (() => class _ReportBugError extends Message<_ReportBugError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_ReportBugError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _ReportBugError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugError {
    return new _ReportBugError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugError {
    return new _ReportBugError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugError {
    return new _ReportBugError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugError | PlainMessage<_ReportBugError> | undefined | null, b2: _ReportBugError | PlainMessage<_ReportBugError> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugError as unknown as MessageType<_ReportBugError>, a, b2);
  }
})();
export type ReportBugError = InstanceType<typeof ReportBugError$Runtime>;
var ReportBugError: MessageType<ReportBugError> = ReportBugError$Runtime as unknown as MessageType<ReportBugError>;
(ReportBugError as MutableMessageType<ReportBugError>).runtime = proto3;
(ReportBugError as MutableMessageType<ReportBugError>).typeName = "agent.v1.ReportBugError";
(ReportBugError as MutableMessageType<ReportBugError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReportBugResult$Runtime = (() => class _ReportBugResult extends Message<_ReportBugResult> {
  declare result: { case: "success"; value: ReportBugSuccess } | { case: "error"; value: ReportBugError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReportBugResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReportBugResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugResult {
    return new _ReportBugResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugResult {
    return new _ReportBugResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugResult {
    return new _ReportBugResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugResult | PlainMessage<_ReportBugResult> | undefined | null, b2: _ReportBugResult | PlainMessage<_ReportBugResult> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugResult as unknown as MessageType<_ReportBugResult>, a, b2);
  }
})();
export type ReportBugResult = InstanceType<typeof ReportBugResult$Runtime>;
var ReportBugResult: MessageType<ReportBugResult> = ReportBugResult$Runtime as unknown as MessageType<ReportBugResult>;
(ReportBugResult as MutableMessageType<ReportBugResult>).runtime = proto3;
(ReportBugResult as MutableMessageType<ReportBugResult>).typeName = "agent.v1.ReportBugResult";
(ReportBugResult as MutableMessageType<ReportBugResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReportBugSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReportBugError, oneof: "result" }
]);
var ReportBugToolCall$Runtime = (() => class _ReportBugToolCall extends Message<_ReportBugToolCall> {
  declare args?: ReportBugArgs;
  declare result?: ReportBugResult;
  constructor(data?: PartialMessage<_ReportBugToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReportBugToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugToolCall {
    return new _ReportBugToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugToolCall {
    return new _ReportBugToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugToolCall {
    return new _ReportBugToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugToolCall | PlainMessage<_ReportBugToolCall> | undefined | null, b2: _ReportBugToolCall | PlainMessage<_ReportBugToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugToolCall as unknown as MessageType<_ReportBugToolCall>, a, b2);
  }
})();
export type ReportBugToolCall = InstanceType<typeof ReportBugToolCall$Runtime>;
var ReportBugToolCall: MessageType<ReportBugToolCall> = ReportBugToolCall$Runtime as unknown as MessageType<ReportBugToolCall>;
(ReportBugToolCall as MutableMessageType<ReportBugToolCall>).runtime = proto3;
(ReportBugToolCall as MutableMessageType<ReportBugToolCall>).typeName = "agent.v1.ReportBugToolCall";
(ReportBugToolCall as MutableMessageType<ReportBugToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReportBugArgs },
  { no: 2, name: "result", kind: "message", T: ReportBugResult }
]);


export { ReportBugArgs, ReportBugSuccess, ReportBugError, ReportBugResult, ReportBugToolCall };
