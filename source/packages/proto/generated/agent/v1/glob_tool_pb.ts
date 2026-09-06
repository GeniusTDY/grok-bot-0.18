/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:21634-21816
 * Region SHA-256: 46725da93bb9e21e08f1c96a49148f31eb5d7f4d92dd92cb4b8333f1e8b57743
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GlobToolArgs$Runtime = (() => class _GlobToolArgs extends Message<_GlobToolArgs> {
  declare targetDirectory?: string;
  declare globPattern: string;
  constructor(data?: PartialMessage<_GlobToolArgs>) {
    super();
    this.globPattern = "";
    proto3.util.initPartial(data, this as _GlobToolArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobToolArgs {
    return new _GlobToolArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobToolArgs {
    return new _GlobToolArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobToolArgs {
    return new _GlobToolArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobToolArgs | PlainMessage<_GlobToolArgs> | undefined | null, b2: _GlobToolArgs | PlainMessage<_GlobToolArgs> | undefined | null): boolean {
    return proto3.util.equals(_GlobToolArgs as unknown as MessageType<_GlobToolArgs>, a, b2);
  }
})();
export type GlobToolArgs = InstanceType<typeof GlobToolArgs$Runtime>;
var GlobToolArgs: MessageType<GlobToolArgs> = GlobToolArgs$Runtime as unknown as MessageType<GlobToolArgs>;
(GlobToolArgs as MutableMessageType<GlobToolArgs>).runtime = proto3;
(GlobToolArgs as MutableMessageType<GlobToolArgs>).typeName = "agent.v1.GlobToolArgs";
(GlobToolArgs as MutableMessageType<GlobToolArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "target_directory", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "glob_pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GlobToolResult$Runtime = (() => class _GlobToolResult extends Message<_GlobToolResult> {
  declare result: { case: "success"; value: GlobToolSuccess } | { case: "error"; value: GlobToolError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GlobToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GlobToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobToolResult {
    return new _GlobToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobToolResult {
    return new _GlobToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobToolResult {
    return new _GlobToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobToolResult | PlainMessage<_GlobToolResult> | undefined | null, b2: _GlobToolResult | PlainMessage<_GlobToolResult> | undefined | null): boolean {
    return proto3.util.equals(_GlobToolResult as unknown as MessageType<_GlobToolResult>, a, b2);
  }
})();
export type GlobToolResult = InstanceType<typeof GlobToolResult$Runtime>;
var GlobToolResult: MessageType<GlobToolResult> = GlobToolResult$Runtime as unknown as MessageType<GlobToolResult>;
(GlobToolResult as MutableMessageType<GlobToolResult>).runtime = proto3;
(GlobToolResult as MutableMessageType<GlobToolResult>).typeName = "agent.v1.GlobToolResult";
(GlobToolResult as MutableMessageType<GlobToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: GlobToolSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GlobToolError, oneof: "result" }
]);
var GlobToolError$Runtime = (() => class _GlobToolError extends Message<_GlobToolError> {
  declare error: string;
  constructor(data?: PartialMessage<_GlobToolError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GlobToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobToolError {
    return new _GlobToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobToolError {
    return new _GlobToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobToolError {
    return new _GlobToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobToolError | PlainMessage<_GlobToolError> | undefined | null, b2: _GlobToolError | PlainMessage<_GlobToolError> | undefined | null): boolean {
    return proto3.util.equals(_GlobToolError as unknown as MessageType<_GlobToolError>, a, b2);
  }
})();
export type GlobToolError = InstanceType<typeof GlobToolError$Runtime>;
var GlobToolError: MessageType<GlobToolError> = GlobToolError$Runtime as unknown as MessageType<GlobToolError>;
(GlobToolError as MutableMessageType<GlobToolError>).runtime = proto3;
(GlobToolError as MutableMessageType<GlobToolError>).typeName = "agent.v1.GlobToolError";
(GlobToolError as MutableMessageType<GlobToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GlobToolSuccess$Runtime = (() => class _GlobToolSuccess extends Message<_GlobToolSuccess> {
  declare pattern: string;
  declare path: string;
  declare files: string[];
  declare totalFiles: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  constructor(data?: PartialMessage<_GlobToolSuccess>) {
    super();
    this.pattern = "";
    this.path = "";
    this.files = [];
    this.totalFiles = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _GlobToolSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobToolSuccess {
    return new _GlobToolSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobToolSuccess {
    return new _GlobToolSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobToolSuccess {
    return new _GlobToolSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobToolSuccess | PlainMessage<_GlobToolSuccess> | undefined | null, b2: _GlobToolSuccess | PlainMessage<_GlobToolSuccess> | undefined | null): boolean {
    return proto3.util.equals(_GlobToolSuccess as unknown as MessageType<_GlobToolSuccess>, a, b2);
  }
})();
export type GlobToolSuccess = InstanceType<typeof GlobToolSuccess$Runtime>;
var GlobToolSuccess: MessageType<GlobToolSuccess> = GlobToolSuccess$Runtime as unknown as MessageType<GlobToolSuccess>;
(GlobToolSuccess as MutableMessageType<GlobToolSuccess>).runtime = proto3;
(GlobToolSuccess as MutableMessageType<GlobToolSuccess>).typeName = "agent.v1.GlobToolSuccess";
(GlobToolSuccess as MutableMessageType<GlobToolSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "files", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GlobToolCall$Runtime = (() => class _GlobToolCall extends Message<_GlobToolCall> {
  declare args?: GlobToolArgs;
  declare result?: GlobToolResult;
  constructor(data?: PartialMessage<_GlobToolCall>) {
    super();
    proto3.util.initPartial(data, this as _GlobToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobToolCall {
    return new _GlobToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobToolCall {
    return new _GlobToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobToolCall {
    return new _GlobToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobToolCall | PlainMessage<_GlobToolCall> | undefined | null, b2: _GlobToolCall | PlainMessage<_GlobToolCall> | undefined | null): boolean {
    return proto3.util.equals(_GlobToolCall as unknown as MessageType<_GlobToolCall>, a, b2);
  }
})();
export type GlobToolCall = InstanceType<typeof GlobToolCall$Runtime>;
var GlobToolCall: MessageType<GlobToolCall> = GlobToolCall$Runtime as unknown as MessageType<GlobToolCall>;
(GlobToolCall as MutableMessageType<GlobToolCall>).runtime = proto3;
(GlobToolCall as MutableMessageType<GlobToolCall>).typeName = "agent.v1.GlobToolCall";
(GlobToolCall as MutableMessageType<GlobToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GlobToolArgs },
  { no: 2, name: "result", kind: "message", T: GlobToolResult }
]);


export { GlobToolArgs, GlobToolResult, GlobToolError, GlobToolSuccess, GlobToolCall };
