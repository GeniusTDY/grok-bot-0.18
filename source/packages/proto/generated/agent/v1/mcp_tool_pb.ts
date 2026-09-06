/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:23111-23210
 * Region SHA-256: 0aca972a9a946ba3095936f86078d590355a58983990080409514c7de7d34a41
 * Atomic B1 exports: 3 messages + 0 enums = 3
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { McpArgs, McpSuccess, McpRejected, McpPermissionDenied } from "./mcp_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var McpToolError$Runtime = (() => class _McpToolError extends Message<_McpToolError> {
  declare error: string;
  declare readToolDefReminder: string;
  constructor(data?: PartialMessage<_McpToolError>) {
    super();
    this.error = "";
    this.readToolDefReminder = "";
    proto3.util.initPartial(data, this as _McpToolError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolError {
    return new _McpToolError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolError {
    return new _McpToolError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolError {
    return new _McpToolError().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolError | PlainMessage<_McpToolError> | undefined | null, b2: _McpToolError | PlainMessage<_McpToolError> | undefined | null): boolean {
    return proto3.util.equals(_McpToolError as unknown as MessageType<_McpToolError>, a, b2);
  }
})();
export type McpToolError = InstanceType<typeof McpToolError$Runtime>;
var McpToolError: MessageType<McpToolError> = McpToolError$Runtime as unknown as MessageType<McpToolError>;
(McpToolError as MutableMessageType<McpToolError>).runtime = proto3;
(McpToolError as MutableMessageType<McpToolError>).typeName = "agent.v1.McpToolError";
(McpToolError as MutableMessageType<McpToolError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "read_tool_def_reminder",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpToolResult$Runtime = (() => class _McpToolResult extends Message<_McpToolResult> {
  declare result: { case: "success"; value: McpSuccess } | { case: "error"; value: McpToolError } | { case: "rejected"; value: McpRejected } | { case: "permissionDenied"; value: McpPermissionDenied } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_McpToolResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _McpToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolResult {
    return new _McpToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolResult {
    return new _McpToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolResult {
    return new _McpToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolResult | PlainMessage<_McpToolResult> | undefined | null, b2: _McpToolResult | PlainMessage<_McpToolResult> | undefined | null): boolean {
    return proto3.util.equals(_McpToolResult as unknown as MessageType<_McpToolResult>, a, b2);
  }
})();
export type McpToolResult = InstanceType<typeof McpToolResult$Runtime>;
var McpToolResult: MessageType<McpToolResult> = McpToolResult$Runtime as unknown as MessageType<McpToolResult>;
(McpToolResult as MutableMessageType<McpToolResult>).runtime = proto3;
(McpToolResult as MutableMessageType<McpToolResult>).typeName = "agent.v1.McpToolResult";
(McpToolResult as MutableMessageType<McpToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: McpSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: McpToolError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: McpRejected, oneof: "result" },
  { no: 4, name: "permission_denied", kind: "message", T: McpPermissionDenied, oneof: "result" }
]);
var McpToolCall$Runtime = (() => class _McpToolCall extends Message<_McpToolCall> {
  declare args?: McpArgs;
  declare result?: McpToolResult;
  declare description?: string;
  constructor(data?: PartialMessage<_McpToolCall>) {
    super();
    proto3.util.initPartial(data, this as _McpToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpToolCall {
    return new _McpToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpToolCall {
    return new _McpToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpToolCall {
    return new _McpToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _McpToolCall | PlainMessage<_McpToolCall> | undefined | null, b2: _McpToolCall | PlainMessage<_McpToolCall> | undefined | null): boolean {
    return proto3.util.equals(_McpToolCall as unknown as MessageType<_McpToolCall>, a, b2);
  }
})();
export type McpToolCall = InstanceType<typeof McpToolCall$Runtime>;
var McpToolCall: MessageType<McpToolCall> = McpToolCall$Runtime as unknown as MessageType<McpToolCall>;
(McpToolCall as MutableMessageType<McpToolCall>).runtime = proto3;
(McpToolCall as MutableMessageType<McpToolCall>).typeName = "agent.v1.McpToolCall";
(McpToolCall as MutableMessageType<McpToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: McpArgs },
  { no: 2, name: "result", kind: "message", T: McpToolResult },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true }
]);


export { McpToolError, McpToolResult, McpToolCall };
