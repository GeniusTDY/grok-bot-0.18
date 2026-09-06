/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:36073-36223
 * Region SHA-256: d80f66df52aabe064ce739a649f18606c3bcc5c307be819ff7a0031732616c10
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { OutputLocation } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AiAttributionArgs$Runtime = (() => class _AiAttributionArgs extends Message<_AiAttributionArgs> {
  declare filePaths: string[];
  declare startLine?: number;
  declare endLine?: number;
  declare commitHashes: string[];
  declare outputMode?: string;
  declare maxCommits?: number;
  declare includeLineRanges?: boolean;
  constructor(data?: PartialMessage<_AiAttributionArgs>) {
    super();
    this.filePaths = [];
    this.commitHashes = [];
    proto3.util.initPartial(data, this as _AiAttributionArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiAttributionArgs {
    return new _AiAttributionArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiAttributionArgs {
    return new _AiAttributionArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiAttributionArgs {
    return new _AiAttributionArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _AiAttributionArgs | PlainMessage<_AiAttributionArgs> | undefined | null, b2: _AiAttributionArgs | PlainMessage<_AiAttributionArgs> | undefined | null): boolean {
    return proto3.util.equals(_AiAttributionArgs as unknown as MessageType<_AiAttributionArgs>, a, b2);
  }
})();
export type AiAttributionArgs = InstanceType<typeof AiAttributionArgs$Runtime>;
var AiAttributionArgs: MessageType<AiAttributionArgs> = AiAttributionArgs$Runtime as unknown as MessageType<AiAttributionArgs>;
(AiAttributionArgs as MutableMessageType<AiAttributionArgs>).runtime = proto3;
(AiAttributionArgs as MutableMessageType<AiAttributionArgs>).typeName = "agent.v1.AiAttributionArgs";
(AiAttributionArgs as MutableMessageType<AiAttributionArgs>).fields = proto3.util.newFieldList(() => [
  { no: 5, name: "file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "commit_hashes", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "output_mode", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "max_commits", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "include_line_ranges", kind: "scalar", T: 8, opt: true }
]);
var AiAttributionResult$Runtime = (() => class _AiAttributionResult extends Message<_AiAttributionResult> {
  declare result: { case: "success"; value: AiAttributionSuccess } | { case: "error"; value: AiAttributionError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AiAttributionResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _AiAttributionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiAttributionResult {
    return new _AiAttributionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiAttributionResult {
    return new _AiAttributionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiAttributionResult {
    return new _AiAttributionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AiAttributionResult | PlainMessage<_AiAttributionResult> | undefined | null, b2: _AiAttributionResult | PlainMessage<_AiAttributionResult> | undefined | null): boolean {
    return proto3.util.equals(_AiAttributionResult as unknown as MessageType<_AiAttributionResult>, a, b2);
  }
})();
export type AiAttributionResult = InstanceType<typeof AiAttributionResult$Runtime>;
var AiAttributionResult: MessageType<AiAttributionResult> = AiAttributionResult$Runtime as unknown as MessageType<AiAttributionResult>;
(AiAttributionResult as MutableMessageType<AiAttributionResult>).runtime = proto3;
(AiAttributionResult as MutableMessageType<AiAttributionResult>).typeName = "agent.v1.AiAttributionResult";
(AiAttributionResult as MutableMessageType<AiAttributionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: AiAttributionSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: AiAttributionError, oneof: "result" }
]);
var AiAttributionSuccess$Runtime = (() => class _AiAttributionSuccess extends Message<_AiAttributionSuccess> {
  declare attributionText: string;
  declare outputLocation?: OutputLocation;
  constructor(data?: PartialMessage<_AiAttributionSuccess>) {
    super();
    this.attributionText = "";
    proto3.util.initPartial(data, this as _AiAttributionSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiAttributionSuccess {
    return new _AiAttributionSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiAttributionSuccess {
    return new _AiAttributionSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiAttributionSuccess {
    return new _AiAttributionSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _AiAttributionSuccess | PlainMessage<_AiAttributionSuccess> | undefined | null, b2: _AiAttributionSuccess | PlainMessage<_AiAttributionSuccess> | undefined | null): boolean {
    return proto3.util.equals(_AiAttributionSuccess as unknown as MessageType<_AiAttributionSuccess>, a, b2);
  }
})();
export type AiAttributionSuccess = InstanceType<typeof AiAttributionSuccess$Runtime>;
var AiAttributionSuccess: MessageType<AiAttributionSuccess> = AiAttributionSuccess$Runtime as unknown as MessageType<AiAttributionSuccess>;
(AiAttributionSuccess as MutableMessageType<AiAttributionSuccess>).runtime = proto3;
(AiAttributionSuccess as MutableMessageType<AiAttributionSuccess>).typeName = "agent.v1.AiAttributionSuccess";
(AiAttributionSuccess as MutableMessageType<AiAttributionSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "attribution_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "output_location", kind: "message", T: OutputLocation, opt: true }
]);
var AiAttributionError$Runtime = (() => class _AiAttributionError extends Message<_AiAttributionError> {
  declare error: string;
  constructor(data?: PartialMessage<_AiAttributionError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _AiAttributionError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiAttributionError {
    return new _AiAttributionError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiAttributionError {
    return new _AiAttributionError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiAttributionError {
    return new _AiAttributionError().fromJsonString(jsonString, options);
  }
  static equals(a: _AiAttributionError | PlainMessage<_AiAttributionError> | undefined | null, b2: _AiAttributionError | PlainMessage<_AiAttributionError> | undefined | null): boolean {
    return proto3.util.equals(_AiAttributionError as unknown as MessageType<_AiAttributionError>, a, b2);
  }
})();
export type AiAttributionError = InstanceType<typeof AiAttributionError$Runtime>;
var AiAttributionError: MessageType<AiAttributionError> = AiAttributionError$Runtime as unknown as MessageType<AiAttributionError>;
(AiAttributionError as MutableMessageType<AiAttributionError>).runtime = proto3;
(AiAttributionError as MutableMessageType<AiAttributionError>).typeName = "agent.v1.AiAttributionError";
(AiAttributionError as MutableMessageType<AiAttributionError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiAttributionToolCall$Runtime = (() => class _AiAttributionToolCall extends Message<_AiAttributionToolCall> {
  declare args?: AiAttributionArgs;
  declare result?: AiAttributionResult;
  constructor(data?: PartialMessage<_AiAttributionToolCall>) {
    super();
    proto3.util.initPartial(data, this as _AiAttributionToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiAttributionToolCall {
    return new _AiAttributionToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiAttributionToolCall {
    return new _AiAttributionToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiAttributionToolCall {
    return new _AiAttributionToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _AiAttributionToolCall | PlainMessage<_AiAttributionToolCall> | undefined | null, b2: _AiAttributionToolCall | PlainMessage<_AiAttributionToolCall> | undefined | null): boolean {
    return proto3.util.equals(_AiAttributionToolCall as unknown as MessageType<_AiAttributionToolCall>, a, b2);
  }
})();
export type AiAttributionToolCall = InstanceType<typeof AiAttributionToolCall$Runtime>;
var AiAttributionToolCall: MessageType<AiAttributionToolCall> = AiAttributionToolCall$Runtime as unknown as MessageType<AiAttributionToolCall>;
(AiAttributionToolCall as MutableMessageType<AiAttributionToolCall>).runtime = proto3;
(AiAttributionToolCall as MutableMessageType<AiAttributionToolCall>).typeName = "agent.v1.AiAttributionToolCall";
(AiAttributionToolCall as MutableMessageType<AiAttributionToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: AiAttributionArgs },
  { no: 2, name: "result", kind: "message", T: AiAttributionResult }
]);


export { AiAttributionArgs, AiAttributionResult, AiAttributionSuccess, AiAttributionError, AiAttributionToolCall };
