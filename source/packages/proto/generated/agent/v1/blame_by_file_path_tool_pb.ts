/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:37354-37503
 * Region SHA-256: 72a28b0c2d9c2e5586efa991c57123a065f91dcd7282a9415aa7014fe5b34bf1
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var BlameByFilePathArgs$Runtime = (() => class _BlameByFilePathArgs extends Message<_BlameByFilePathArgs> {
  declare filePath: string;
  declare startLine?: number;
  declare endLine?: number;
  constructor(data?: PartialMessage<_BlameByFilePathArgs>) {
    super();
    this.filePath = "";
    proto3.util.initPartial(data, this as _BlameByFilePathArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlameByFilePathArgs {
    return new _BlameByFilePathArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlameByFilePathArgs {
    return new _BlameByFilePathArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlameByFilePathArgs {
    return new _BlameByFilePathArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _BlameByFilePathArgs | PlainMessage<_BlameByFilePathArgs> | undefined | null, b2: _BlameByFilePathArgs | PlainMessage<_BlameByFilePathArgs> | undefined | null): boolean {
    return proto3.util.equals(_BlameByFilePathArgs as unknown as MessageType<_BlameByFilePathArgs>, a, b2);
  }
})();
export type BlameByFilePathArgs = InstanceType<typeof BlameByFilePathArgs$Runtime>;
var BlameByFilePathArgs: MessageType<BlameByFilePathArgs> = BlameByFilePathArgs$Runtime as unknown as MessageType<BlameByFilePathArgs>;
(BlameByFilePathArgs as MutableMessageType<BlameByFilePathArgs>).runtime = proto3;
(BlameByFilePathArgs as MutableMessageType<BlameByFilePathArgs>).typeName = "agent.v1.BlameByFilePathArgs";
(BlameByFilePathArgs as MutableMessageType<BlameByFilePathArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true }
]);
var BlameByFilePathSuccess$Runtime = (() => class _BlameByFilePathSuccess extends Message<_BlameByFilePathSuccess> {
  declare content: string;
  constructor(data?: PartialMessage<_BlameByFilePathSuccess>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _BlameByFilePathSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlameByFilePathSuccess {
    return new _BlameByFilePathSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlameByFilePathSuccess {
    return new _BlameByFilePathSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlameByFilePathSuccess {
    return new _BlameByFilePathSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _BlameByFilePathSuccess | PlainMessage<_BlameByFilePathSuccess> | undefined | null, b2: _BlameByFilePathSuccess | PlainMessage<_BlameByFilePathSuccess> | undefined | null): boolean {
    return proto3.util.equals(_BlameByFilePathSuccess as unknown as MessageType<_BlameByFilePathSuccess>, a, b2);
  }
})();
export type BlameByFilePathSuccess = InstanceType<typeof BlameByFilePathSuccess$Runtime>;
var BlameByFilePathSuccess: MessageType<BlameByFilePathSuccess> = BlameByFilePathSuccess$Runtime as unknown as MessageType<BlameByFilePathSuccess>;
(BlameByFilePathSuccess as MutableMessageType<BlameByFilePathSuccess>).runtime = proto3;
(BlameByFilePathSuccess as MutableMessageType<BlameByFilePathSuccess>).typeName = "agent.v1.BlameByFilePathSuccess";
(BlameByFilePathSuccess as MutableMessageType<BlameByFilePathSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BlameByFilePathError$Runtime = (() => class _BlameByFilePathError extends Message<_BlameByFilePathError> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_BlameByFilePathError>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _BlameByFilePathError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlameByFilePathError {
    return new _BlameByFilePathError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlameByFilePathError {
    return new _BlameByFilePathError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlameByFilePathError {
    return new _BlameByFilePathError().fromJsonString(jsonString, options);
  }
  static equals(a: _BlameByFilePathError | PlainMessage<_BlameByFilePathError> | undefined | null, b2: _BlameByFilePathError | PlainMessage<_BlameByFilePathError> | undefined | null): boolean {
    return proto3.util.equals(_BlameByFilePathError as unknown as MessageType<_BlameByFilePathError>, a, b2);
  }
})();
export type BlameByFilePathError = InstanceType<typeof BlameByFilePathError$Runtime>;
var BlameByFilePathError: MessageType<BlameByFilePathError> = BlameByFilePathError$Runtime as unknown as MessageType<BlameByFilePathError>;
(BlameByFilePathError as MutableMessageType<BlameByFilePathError>).runtime = proto3;
(BlameByFilePathError as MutableMessageType<BlameByFilePathError>).typeName = "agent.v1.BlameByFilePathError";
(BlameByFilePathError as MutableMessageType<BlameByFilePathError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BlameByFilePathResult$Runtime = (() => class _BlameByFilePathResult extends Message<_BlameByFilePathResult> {
  declare result: { case: "success"; value: BlameByFilePathSuccess } | { case: "error"; value: BlameByFilePathError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BlameByFilePathResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _BlameByFilePathResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlameByFilePathResult {
    return new _BlameByFilePathResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlameByFilePathResult {
    return new _BlameByFilePathResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlameByFilePathResult {
    return new _BlameByFilePathResult().fromJsonString(jsonString, options);
  }
  static equals(a: _BlameByFilePathResult | PlainMessage<_BlameByFilePathResult> | undefined | null, b2: _BlameByFilePathResult | PlainMessage<_BlameByFilePathResult> | undefined | null): boolean {
    return proto3.util.equals(_BlameByFilePathResult as unknown as MessageType<_BlameByFilePathResult>, a, b2);
  }
})();
export type BlameByFilePathResult = InstanceType<typeof BlameByFilePathResult$Runtime>;
var BlameByFilePathResult: MessageType<BlameByFilePathResult> = BlameByFilePathResult$Runtime as unknown as MessageType<BlameByFilePathResult>;
(BlameByFilePathResult as MutableMessageType<BlameByFilePathResult>).runtime = proto3;
(BlameByFilePathResult as MutableMessageType<BlameByFilePathResult>).typeName = "agent.v1.BlameByFilePathResult";
(BlameByFilePathResult as MutableMessageType<BlameByFilePathResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: BlameByFilePathSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: BlameByFilePathError, oneof: "result" }
]);
var BlameByFilePathToolCall$Runtime = (() => class _BlameByFilePathToolCall extends Message<_BlameByFilePathToolCall> {
  declare args?: BlameByFilePathArgs;
  declare result?: BlameByFilePathResult;
  constructor(data?: PartialMessage<_BlameByFilePathToolCall>) {
    super();
    proto3.util.initPartial(data, this as _BlameByFilePathToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlameByFilePathToolCall {
    return new _BlameByFilePathToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlameByFilePathToolCall {
    return new _BlameByFilePathToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlameByFilePathToolCall {
    return new _BlameByFilePathToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _BlameByFilePathToolCall | PlainMessage<_BlameByFilePathToolCall> | undefined | null, b2: _BlameByFilePathToolCall | PlainMessage<_BlameByFilePathToolCall> | undefined | null): boolean {
    return proto3.util.equals(_BlameByFilePathToolCall as unknown as MessageType<_BlameByFilePathToolCall>, a, b2);
  }
})();
export type BlameByFilePathToolCall = InstanceType<typeof BlameByFilePathToolCall$Runtime>;
var BlameByFilePathToolCall: MessageType<BlameByFilePathToolCall> = BlameByFilePathToolCall$Runtime as unknown as MessageType<BlameByFilePathToolCall>;
(BlameByFilePathToolCall as MutableMessageType<BlameByFilePathToolCall>).runtime = proto3;
(BlameByFilePathToolCall as MutableMessageType<BlameByFilePathToolCall>).typeName = "agent.v1.BlameByFilePathToolCall";
(BlameByFilePathToolCall as MutableMessageType<BlameByFilePathToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: BlameByFilePathArgs },
  { no: 2, name: "result", kind: "message", T: BlameByFilePathResult }
]);


export { BlameByFilePathArgs, BlameByFilePathSuccess, BlameByFilePathError, BlameByFilePathResult, BlameByFilePathToolCall };
