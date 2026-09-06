/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:38609-38784
 * Region SHA-256: a3789c5384c9fe5101602ea5456b783a22c8b8a11e1b08b94965d148aeafb866
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var EditPrLabelsArgs$Runtime = (() => class _EditPrLabelsArgs extends Message<_EditPrLabelsArgs> {
  declare toolCallId: string;
  declare prUrl: string;
  declare addLabels: string[];
  declare removeLabels: string[];
  constructor(data?: PartialMessage<_EditPrLabelsArgs>) {
    super();
    this.toolCallId = "";
    this.prUrl = "";
    this.addLabels = [];
    this.removeLabels = [];
    proto3.util.initPartial(data, this as _EditPrLabelsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPrLabelsArgs {
    return new _EditPrLabelsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPrLabelsArgs {
    return new _EditPrLabelsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPrLabelsArgs {
    return new _EditPrLabelsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPrLabelsArgs | PlainMessage<_EditPrLabelsArgs> | undefined | null, b2: _EditPrLabelsArgs | PlainMessage<_EditPrLabelsArgs> | undefined | null): boolean {
    return proto3.util.equals(_EditPrLabelsArgs as unknown as MessageType<_EditPrLabelsArgs>, a, b2);
  }
})();
export type EditPrLabelsArgs = InstanceType<typeof EditPrLabelsArgs$Runtime>;
var EditPrLabelsArgs: MessageType<EditPrLabelsArgs> = EditPrLabelsArgs$Runtime as unknown as MessageType<EditPrLabelsArgs>;
(EditPrLabelsArgs as MutableMessageType<EditPrLabelsArgs>).runtime = proto3;
(EditPrLabelsArgs as MutableMessageType<EditPrLabelsArgs>).typeName = "agent.v1.EditPrLabelsArgs";
(EditPrLabelsArgs as MutableMessageType<EditPrLabelsArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "add_labels", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "remove_labels", kind: "scalar", T: 9, repeated: true }
]);
var EditPrLabelsResult$Runtime = (() => class _EditPrLabelsResult extends Message<_EditPrLabelsResult> {
  declare result: { case: "success"; value: EditPrLabelsSuccess } | { case: "error"; value: EditPrLabelsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_EditPrLabelsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _EditPrLabelsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPrLabelsResult {
    return new _EditPrLabelsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPrLabelsResult {
    return new _EditPrLabelsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPrLabelsResult {
    return new _EditPrLabelsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPrLabelsResult | PlainMessage<_EditPrLabelsResult> | undefined | null, b2: _EditPrLabelsResult | PlainMessage<_EditPrLabelsResult> | undefined | null): boolean {
    return proto3.util.equals(_EditPrLabelsResult as unknown as MessageType<_EditPrLabelsResult>, a, b2);
  }
})();
export type EditPrLabelsResult = InstanceType<typeof EditPrLabelsResult$Runtime>;
var EditPrLabelsResult: MessageType<EditPrLabelsResult> = EditPrLabelsResult$Runtime as unknown as MessageType<EditPrLabelsResult>;
(EditPrLabelsResult as MutableMessageType<EditPrLabelsResult>).runtime = proto3;
(EditPrLabelsResult as MutableMessageType<EditPrLabelsResult>).typeName = "agent.v1.EditPrLabelsResult";
(EditPrLabelsResult as MutableMessageType<EditPrLabelsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: EditPrLabelsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: EditPrLabelsError, oneof: "result" }
]);
var EditPrLabelsSuccess$Runtime = (() => class _EditPrLabelsSuccess extends Message<_EditPrLabelsSuccess> {
  declare prUrl: string;
  declare prNumber: number;
  declare message: string;
  constructor(data?: PartialMessage<_EditPrLabelsSuccess>) {
    super();
    this.prUrl = "";
    this.prNumber = 0;
    this.message = "";
    proto3.util.initPartial(data, this as _EditPrLabelsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPrLabelsSuccess {
    return new _EditPrLabelsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPrLabelsSuccess {
    return new _EditPrLabelsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPrLabelsSuccess {
    return new _EditPrLabelsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPrLabelsSuccess | PlainMessage<_EditPrLabelsSuccess> | undefined | null, b2: _EditPrLabelsSuccess | PlainMessage<_EditPrLabelsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_EditPrLabelsSuccess as unknown as MessageType<_EditPrLabelsSuccess>, a, b2);
  }
})();
export type EditPrLabelsSuccess = InstanceType<typeof EditPrLabelsSuccess$Runtime>;
var EditPrLabelsSuccess: MessageType<EditPrLabelsSuccess> = EditPrLabelsSuccess$Runtime as unknown as MessageType<EditPrLabelsSuccess>;
(EditPrLabelsSuccess as MutableMessageType<EditPrLabelsSuccess>).runtime = proto3;
(EditPrLabelsSuccess as MutableMessageType<EditPrLabelsSuccess>).typeName = "agent.v1.EditPrLabelsSuccess";
(EditPrLabelsSuccess as MutableMessageType<EditPrLabelsSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditPrLabelsError$Runtime = (() => class _EditPrLabelsError extends Message<_EditPrLabelsError> {
  declare error: string;
  constructor(data?: PartialMessage<_EditPrLabelsError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _EditPrLabelsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPrLabelsError {
    return new _EditPrLabelsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPrLabelsError {
    return new _EditPrLabelsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPrLabelsError {
    return new _EditPrLabelsError().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPrLabelsError | PlainMessage<_EditPrLabelsError> | undefined | null, b2: _EditPrLabelsError | PlainMessage<_EditPrLabelsError> | undefined | null): boolean {
    return proto3.util.equals(_EditPrLabelsError as unknown as MessageType<_EditPrLabelsError>, a, b2);
  }
})();
export type EditPrLabelsError = InstanceType<typeof EditPrLabelsError$Runtime>;
var EditPrLabelsError: MessageType<EditPrLabelsError> = EditPrLabelsError$Runtime as unknown as MessageType<EditPrLabelsError>;
(EditPrLabelsError as MutableMessageType<EditPrLabelsError>).runtime = proto3;
(EditPrLabelsError as MutableMessageType<EditPrLabelsError>).typeName = "agent.v1.EditPrLabelsError";
(EditPrLabelsError as MutableMessageType<EditPrLabelsError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditPrLabelsToolCall$Runtime = (() => class _EditPrLabelsToolCall extends Message<_EditPrLabelsToolCall> {
  declare args?: EditPrLabelsArgs;
  declare result?: EditPrLabelsResult;
  constructor(data?: PartialMessage<_EditPrLabelsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _EditPrLabelsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditPrLabelsToolCall {
    return new _EditPrLabelsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditPrLabelsToolCall {
    return new _EditPrLabelsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditPrLabelsToolCall {
    return new _EditPrLabelsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _EditPrLabelsToolCall | PlainMessage<_EditPrLabelsToolCall> | undefined | null, b2: _EditPrLabelsToolCall | PlainMessage<_EditPrLabelsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_EditPrLabelsToolCall as unknown as MessageType<_EditPrLabelsToolCall>, a, b2);
  }
})();
export type EditPrLabelsToolCall = InstanceType<typeof EditPrLabelsToolCall$Runtime>;
var EditPrLabelsToolCall: MessageType<EditPrLabelsToolCall> = EditPrLabelsToolCall$Runtime as unknown as MessageType<EditPrLabelsToolCall>;
(EditPrLabelsToolCall as MutableMessageType<EditPrLabelsToolCall>).runtime = proto3;
(EditPrLabelsToolCall as MutableMessageType<EditPrLabelsToolCall>).typeName = "agent.v1.EditPrLabelsToolCall";
(EditPrLabelsToolCall as MutableMessageType<EditPrLabelsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: EditPrLabelsArgs },
  { no: 2, name: "result", kind: "message", T: EditPrLabelsResult }
]);


export { EditPrLabelsArgs, EditPrLabelsResult, EditPrLabelsSuccess, EditPrLabelsError, EditPrLabelsToolCall };
