/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:38152-38329
 * Region SHA-256: bb869abac17167d19c89d4a0a4777a881fba663c70619079578fe9ca73e0dbf3
 * Atomic B1 exports: 5 messages + 1 enums = 6
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type UpdatePrCodeTourExecutionMode = 0 | 1 | 2 | 3;
var UpdatePrCodeTourExecutionMode: {
  "UNSPECIFIED": 0;
  "SERVER_SCHEDULED": 1;
  "CLIENT_REQUIRED": 2;
  "SKIPPED": 3;
  0: "UNSPECIFIED";
  1: "SERVER_SCHEDULED";
  2: "CLIENT_REQUIRED";
  3: "SKIPPED";
};
(function(UpdatePrCodeTourExecutionMode2) {
  UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["SERVER_SCHEDULED"] = 1] = "SERVER_SCHEDULED";
  UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["CLIENT_REQUIRED"] = 2] = "CLIENT_REQUIRED";
  UpdatePrCodeTourExecutionMode2[UpdatePrCodeTourExecutionMode2["SKIPPED"] = 3] = "SKIPPED";
})(UpdatePrCodeTourExecutionMode! || (UpdatePrCodeTourExecutionMode = {} as typeof UpdatePrCodeTourExecutionMode));
proto3.util.setEnumType(UpdatePrCodeTourExecutionMode, "agent.v1.UpdatePrCodeTourExecutionMode", [
  { no: 0, name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_UNSPECIFIED" },
  { no: 1, name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_SERVER_SCHEDULED" },
  { no: 2, name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_CLIENT_REQUIRED" },
  { no: 3, name: "UPDATE_PR_CODE_TOUR_EXECUTION_MODE_SKIPPED" }
]);
var UpdatePrCodeTourArgs$Runtime = (() => class _UpdatePrCodeTourArgs extends Message<_UpdatePrCodeTourArgs> {
  declare feedback: string;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_UpdatePrCodeTourArgs>) {
    super();
    this.feedback = "";
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _UpdatePrCodeTourArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrCodeTourArgs {
    return new _UpdatePrCodeTourArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourArgs {
    return new _UpdatePrCodeTourArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourArgs {
    return new _UpdatePrCodeTourArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrCodeTourArgs | PlainMessage<_UpdatePrCodeTourArgs> | undefined | null, b2: _UpdatePrCodeTourArgs | PlainMessage<_UpdatePrCodeTourArgs> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrCodeTourArgs as unknown as MessageType<_UpdatePrCodeTourArgs>, a, b2);
  }
})();
export type UpdatePrCodeTourArgs = InstanceType<typeof UpdatePrCodeTourArgs$Runtime>;
var UpdatePrCodeTourArgs: MessageType<UpdatePrCodeTourArgs> = UpdatePrCodeTourArgs$Runtime as unknown as MessageType<UpdatePrCodeTourArgs>;
(UpdatePrCodeTourArgs as MutableMessageType<UpdatePrCodeTourArgs>).runtime = proto3;
(UpdatePrCodeTourArgs as MutableMessageType<UpdatePrCodeTourArgs>).typeName = "agent.v1.UpdatePrCodeTourArgs";
(UpdatePrCodeTourArgs as MutableMessageType<UpdatePrCodeTourArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "feedback",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdatePrCodeTourResult$Runtime = (() => class _UpdatePrCodeTourResult extends Message<_UpdatePrCodeTourResult> {
  declare result: { case: "success"; value: UpdatePrCodeTourSuccess } | { case: "error"; value: UpdatePrCodeTourError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UpdatePrCodeTourResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _UpdatePrCodeTourResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrCodeTourResult {
    return new _UpdatePrCodeTourResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourResult {
    return new _UpdatePrCodeTourResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourResult {
    return new _UpdatePrCodeTourResult().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrCodeTourResult | PlainMessage<_UpdatePrCodeTourResult> | undefined | null, b2: _UpdatePrCodeTourResult | PlainMessage<_UpdatePrCodeTourResult> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrCodeTourResult as unknown as MessageType<_UpdatePrCodeTourResult>, a, b2);
  }
})();
export type UpdatePrCodeTourResult = InstanceType<typeof UpdatePrCodeTourResult$Runtime>;
var UpdatePrCodeTourResult: MessageType<UpdatePrCodeTourResult> = UpdatePrCodeTourResult$Runtime as unknown as MessageType<UpdatePrCodeTourResult>;
(UpdatePrCodeTourResult as MutableMessageType<UpdatePrCodeTourResult>).runtime = proto3;
(UpdatePrCodeTourResult as MutableMessageType<UpdatePrCodeTourResult>).typeName = "agent.v1.UpdatePrCodeTourResult";
(UpdatePrCodeTourResult as MutableMessageType<UpdatePrCodeTourResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: UpdatePrCodeTourSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: UpdatePrCodeTourError, oneof: "result" }
]);
var UpdatePrCodeTourSuccess$Runtime = (() => class _UpdatePrCodeTourSuccess extends Message<_UpdatePrCodeTourSuccess> {
  declare revisionId: string;
  declare message: string;
  declare executionMode: UpdatePrCodeTourExecutionMode;
  constructor(data?: PartialMessage<_UpdatePrCodeTourSuccess>) {
    super();
    this.revisionId = "";
    this.message = "";
    this.executionMode = UpdatePrCodeTourExecutionMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpdatePrCodeTourSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrCodeTourSuccess {
    return new _UpdatePrCodeTourSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourSuccess {
    return new _UpdatePrCodeTourSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourSuccess {
    return new _UpdatePrCodeTourSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrCodeTourSuccess | PlainMessage<_UpdatePrCodeTourSuccess> | undefined | null, b2: _UpdatePrCodeTourSuccess | PlainMessage<_UpdatePrCodeTourSuccess> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrCodeTourSuccess as unknown as MessageType<_UpdatePrCodeTourSuccess>, a, b2);
  }
})();
export type UpdatePrCodeTourSuccess = InstanceType<typeof UpdatePrCodeTourSuccess$Runtime>;
var UpdatePrCodeTourSuccess: MessageType<UpdatePrCodeTourSuccess> = UpdatePrCodeTourSuccess$Runtime as unknown as MessageType<UpdatePrCodeTourSuccess>;
(UpdatePrCodeTourSuccess as MutableMessageType<UpdatePrCodeTourSuccess>).runtime = proto3;
(UpdatePrCodeTourSuccess as MutableMessageType<UpdatePrCodeTourSuccess>).typeName = "agent.v1.UpdatePrCodeTourSuccess";
(UpdatePrCodeTourSuccess as MutableMessageType<UpdatePrCodeTourSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "revision_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "execution_mode", kind: "enum", T: proto3.getEnumType(UpdatePrCodeTourExecutionMode) }
]);
var UpdatePrCodeTourError$Runtime = (() => class _UpdatePrCodeTourError extends Message<_UpdatePrCodeTourError> {
  declare error: string;
  constructor(data?: PartialMessage<_UpdatePrCodeTourError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _UpdatePrCodeTourError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrCodeTourError {
    return new _UpdatePrCodeTourError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourError {
    return new _UpdatePrCodeTourError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourError {
    return new _UpdatePrCodeTourError().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrCodeTourError | PlainMessage<_UpdatePrCodeTourError> | undefined | null, b2: _UpdatePrCodeTourError | PlainMessage<_UpdatePrCodeTourError> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrCodeTourError as unknown as MessageType<_UpdatePrCodeTourError>, a, b2);
  }
})();
export type UpdatePrCodeTourError = InstanceType<typeof UpdatePrCodeTourError$Runtime>;
var UpdatePrCodeTourError: MessageType<UpdatePrCodeTourError> = UpdatePrCodeTourError$Runtime as unknown as MessageType<UpdatePrCodeTourError>;
(UpdatePrCodeTourError as MutableMessageType<UpdatePrCodeTourError>).runtime = proto3;
(UpdatePrCodeTourError as MutableMessageType<UpdatePrCodeTourError>).typeName = "agent.v1.UpdatePrCodeTourError";
(UpdatePrCodeTourError as MutableMessageType<UpdatePrCodeTourError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdatePrCodeTourToolCall$Runtime = (() => class _UpdatePrCodeTourToolCall extends Message<_UpdatePrCodeTourToolCall> {
  declare args?: UpdatePrCodeTourArgs;
  declare result?: UpdatePrCodeTourResult;
  constructor(data?: PartialMessage<_UpdatePrCodeTourToolCall>) {
    super();
    proto3.util.initPartial(data, this as _UpdatePrCodeTourToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrCodeTourToolCall {
    return new _UpdatePrCodeTourToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourToolCall {
    return new _UpdatePrCodeTourToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrCodeTourToolCall {
    return new _UpdatePrCodeTourToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrCodeTourToolCall | PlainMessage<_UpdatePrCodeTourToolCall> | undefined | null, b2: _UpdatePrCodeTourToolCall | PlainMessage<_UpdatePrCodeTourToolCall> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrCodeTourToolCall as unknown as MessageType<_UpdatePrCodeTourToolCall>, a, b2);
  }
})();
export type UpdatePrCodeTourToolCall = InstanceType<typeof UpdatePrCodeTourToolCall$Runtime>;
var UpdatePrCodeTourToolCall: MessageType<UpdatePrCodeTourToolCall> = UpdatePrCodeTourToolCall$Runtime as unknown as MessageType<UpdatePrCodeTourToolCall>;
(UpdatePrCodeTourToolCall as MutableMessageType<UpdatePrCodeTourToolCall>).runtime = proto3;
(UpdatePrCodeTourToolCall as MutableMessageType<UpdatePrCodeTourToolCall>).typeName = "agent.v1.UpdatePrCodeTourToolCall";
(UpdatePrCodeTourToolCall as MutableMessageType<UpdatePrCodeTourToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: UpdatePrCodeTourArgs },
  { no: 2, name: "result", kind: "message", T: UpdatePrCodeTourResult }
]);


export { UpdatePrCodeTourExecutionMode, UpdatePrCodeTourArgs, UpdatePrCodeTourResult, UpdatePrCodeTourSuccess, UpdatePrCodeTourError, UpdatePrCodeTourToolCall };
