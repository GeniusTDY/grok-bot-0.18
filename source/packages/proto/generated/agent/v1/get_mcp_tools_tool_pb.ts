/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:37504-37655
 * Region SHA-256: 3fbe61c1882273952d36c0030f5d74658fc656e960c952c23f8e80ecfdd0a329
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GetMcpToolsArgs$Runtime = (() => class _GetMcpToolsArgs extends Message<_GetMcpToolsArgs> {
  declare server?: string;
  declare toolName?: string;
  declare pattern?: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_GetMcpToolsArgs>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _GetMcpToolsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsArgs {
    return new _GetMcpToolsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsArgs {
    return new _GetMcpToolsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsArgs {
    return new _GetMcpToolsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsArgs | PlainMessage<_GetMcpToolsArgs> | undefined | null, b2: _GetMcpToolsArgs | PlainMessage<_GetMcpToolsArgs> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsArgs as unknown as MessageType<_GetMcpToolsArgs>, a, b2);
  }
})();
export type GetMcpToolsArgs = InstanceType<typeof GetMcpToolsArgs$Runtime>;
var GetMcpToolsArgs: MessageType<GetMcpToolsArgs> = GetMcpToolsArgs$Runtime as unknown as MessageType<GetMcpToolsArgs>;
(GetMcpToolsArgs as MutableMessageType<GetMcpToolsArgs>).runtime = proto3;
(GetMcpToolsArgs as MutableMessageType<GetMcpToolsArgs>).typeName = "agent.v1.GetMcpToolsArgs";
(GetMcpToolsArgs as MutableMessageType<GetMcpToolsArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetMcpToolsAgentResult$Runtime = (() => class _GetMcpToolsAgentResult extends Message<_GetMcpToolsAgentResult> {
  declare result: { case: "success"; value: GetMcpToolsSuccess } | { case: "error"; value: GetMcpToolsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GetMcpToolsAgentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GetMcpToolsAgentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsAgentResult {
    return new _GetMcpToolsAgentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsAgentResult {
    return new _GetMcpToolsAgentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsAgentResult {
    return new _GetMcpToolsAgentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsAgentResult | PlainMessage<_GetMcpToolsAgentResult> | undefined | null, b2: _GetMcpToolsAgentResult | PlainMessage<_GetMcpToolsAgentResult> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsAgentResult as unknown as MessageType<_GetMcpToolsAgentResult>, a, b2);
  }
})();
export type GetMcpToolsAgentResult = InstanceType<typeof GetMcpToolsAgentResult$Runtime>;
var GetMcpToolsAgentResult: MessageType<GetMcpToolsAgentResult> = GetMcpToolsAgentResult$Runtime as unknown as MessageType<GetMcpToolsAgentResult>;
(GetMcpToolsAgentResult as MutableMessageType<GetMcpToolsAgentResult>).runtime = proto3;
(GetMcpToolsAgentResult as MutableMessageType<GetMcpToolsAgentResult>).typeName = "agent.v1.GetMcpToolsAgentResult";
(GetMcpToolsAgentResult as MutableMessageType<GetMcpToolsAgentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: GetMcpToolsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: GetMcpToolsError, oneof: "result" }
]);
var GetMcpToolsSuccess$Runtime = (() => class _GetMcpToolsSuccess extends Message<_GetMcpToolsSuccess> {
  declare content: string;
  declare outputFilePath?: string;
  constructor(data?: PartialMessage<_GetMcpToolsSuccess>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _GetMcpToolsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsSuccess {
    return new _GetMcpToolsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsSuccess {
    return new _GetMcpToolsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsSuccess {
    return new _GetMcpToolsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsSuccess | PlainMessage<_GetMcpToolsSuccess> | undefined | null, b2: _GetMcpToolsSuccess | PlainMessage<_GetMcpToolsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsSuccess as unknown as MessageType<_GetMcpToolsSuccess>, a, b2);
  }
})();
export type GetMcpToolsSuccess = InstanceType<typeof GetMcpToolsSuccess$Runtime>;
var GetMcpToolsSuccess: MessageType<GetMcpToolsSuccess> = GetMcpToolsSuccess$Runtime as unknown as MessageType<GetMcpToolsSuccess>;
(GetMcpToolsSuccess as MutableMessageType<GetMcpToolsSuccess>).runtime = proto3;
(GetMcpToolsSuccess as MutableMessageType<GetMcpToolsSuccess>).typeName = "agent.v1.GetMcpToolsSuccess";
(GetMcpToolsSuccess as MutableMessageType<GetMcpToolsSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }
]);
var GetMcpToolsError$Runtime = (() => class _GetMcpToolsError extends Message<_GetMcpToolsError> {
  declare error: string;
  constructor(data?: PartialMessage<_GetMcpToolsError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _GetMcpToolsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsError {
    return new _GetMcpToolsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsError {
    return new _GetMcpToolsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsError {
    return new _GetMcpToolsError().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsError | PlainMessage<_GetMcpToolsError> | undefined | null, b2: _GetMcpToolsError | PlainMessage<_GetMcpToolsError> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsError as unknown as MessageType<_GetMcpToolsError>, a, b2);
  }
})();
export type GetMcpToolsError = InstanceType<typeof GetMcpToolsError$Runtime>;
var GetMcpToolsError: MessageType<GetMcpToolsError> = GetMcpToolsError$Runtime as unknown as MessageType<GetMcpToolsError>;
(GetMcpToolsError as MutableMessageType<GetMcpToolsError>).runtime = proto3;
(GetMcpToolsError as MutableMessageType<GetMcpToolsError>).typeName = "agent.v1.GetMcpToolsError";
(GetMcpToolsError as MutableMessageType<GetMcpToolsError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetMcpToolsToolCall$Runtime = (() => class _GetMcpToolsToolCall extends Message<_GetMcpToolsToolCall> {
  declare args?: GetMcpToolsArgs;
  declare result?: GetMcpToolsAgentResult;
  constructor(data?: PartialMessage<_GetMcpToolsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _GetMcpToolsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsToolCall {
    return new _GetMcpToolsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsToolCall {
    return new _GetMcpToolsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsToolCall {
    return new _GetMcpToolsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsToolCall | PlainMessage<_GetMcpToolsToolCall> | undefined | null, b2: _GetMcpToolsToolCall | PlainMessage<_GetMcpToolsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsToolCall as unknown as MessageType<_GetMcpToolsToolCall>, a, b2);
  }
})();
export type GetMcpToolsToolCall = InstanceType<typeof GetMcpToolsToolCall$Runtime>;
var GetMcpToolsToolCall: MessageType<GetMcpToolsToolCall> = GetMcpToolsToolCall$Runtime as unknown as MessageType<GetMcpToolsToolCall>;
(GetMcpToolsToolCall as MutableMessageType<GetMcpToolsToolCall>).runtime = proto3;
(GetMcpToolsToolCall as MutableMessageType<GetMcpToolsToolCall>).typeName = "agent.v1.GetMcpToolsToolCall";
(GetMcpToolsToolCall as MutableMessageType<GetMcpToolsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GetMcpToolsArgs },
  { no: 2, name: "result", kind: "message", T: GetMcpToolsAgentResult }
]);


export { GetMcpToolsArgs, GetMcpToolsAgentResult, GetMcpToolsSuccess, GetMcpToolsError, GetMcpToolsToolCall };
