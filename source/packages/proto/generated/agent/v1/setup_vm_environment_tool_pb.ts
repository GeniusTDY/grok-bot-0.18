/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:35149-35272
 * Region SHA-256: 06a6c848afc23569bd4dd5633233fde3337e1e0785e19c4949b1bd4b0c346bd0
 * Atomic B1 exports: 4 messages + 0 enums = 4
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SetupVmEnvironmentArgs$Runtime = (() => class _SetupVmEnvironmentArgs extends Message<_SetupVmEnvironmentArgs> {
  declare installCommand: string;
  declare startCommand: string;
  declare dockerfileContents: string;
  constructor(data?: PartialMessage<_SetupVmEnvironmentArgs>) {
    super();
    this.installCommand = "";
    this.startCommand = "";
    this.dockerfileContents = "";
    proto3.util.initPartial(data, this as _SetupVmEnvironmentArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupVmEnvironmentArgs {
    return new _SetupVmEnvironmentArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentArgs {
    return new _SetupVmEnvironmentArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentArgs {
    return new _SetupVmEnvironmentArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupVmEnvironmentArgs | PlainMessage<_SetupVmEnvironmentArgs> | undefined | null, b2: _SetupVmEnvironmentArgs | PlainMessage<_SetupVmEnvironmentArgs> | undefined | null): boolean {
    return proto3.util.equals(_SetupVmEnvironmentArgs as unknown as MessageType<_SetupVmEnvironmentArgs>, a, b2);
  }
})();
export type SetupVmEnvironmentArgs = InstanceType<typeof SetupVmEnvironmentArgs$Runtime>;
var SetupVmEnvironmentArgs: MessageType<SetupVmEnvironmentArgs> = SetupVmEnvironmentArgs$Runtime as unknown as MessageType<SetupVmEnvironmentArgs>;
(SetupVmEnvironmentArgs as MutableMessageType<SetupVmEnvironmentArgs>).runtime = proto3;
(SetupVmEnvironmentArgs as MutableMessageType<SetupVmEnvironmentArgs>).typeName = "agent.v1.SetupVmEnvironmentArgs";
(SetupVmEnvironmentArgs as MutableMessageType<SetupVmEnvironmentArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "install_command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "dockerfile_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SetupVmEnvironmentResult$Runtime = (() => class _SetupVmEnvironmentResult extends Message<_SetupVmEnvironmentResult> {
  declare result: { case: "success"; value: SetupVmEnvironmentSuccess } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SetupVmEnvironmentResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SetupVmEnvironmentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupVmEnvironmentResult {
    return new _SetupVmEnvironmentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentResult {
    return new _SetupVmEnvironmentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentResult {
    return new _SetupVmEnvironmentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupVmEnvironmentResult | PlainMessage<_SetupVmEnvironmentResult> | undefined | null, b2: _SetupVmEnvironmentResult | PlainMessage<_SetupVmEnvironmentResult> | undefined | null): boolean {
    return proto3.util.equals(_SetupVmEnvironmentResult as unknown as MessageType<_SetupVmEnvironmentResult>, a, b2);
  }
})();
export type SetupVmEnvironmentResult = InstanceType<typeof SetupVmEnvironmentResult$Runtime>;
var SetupVmEnvironmentResult: MessageType<SetupVmEnvironmentResult> = SetupVmEnvironmentResult$Runtime as unknown as MessageType<SetupVmEnvironmentResult>;
(SetupVmEnvironmentResult as MutableMessageType<SetupVmEnvironmentResult>).runtime = proto3;
(SetupVmEnvironmentResult as MutableMessageType<SetupVmEnvironmentResult>).typeName = "agent.v1.SetupVmEnvironmentResult";
(SetupVmEnvironmentResult as MutableMessageType<SetupVmEnvironmentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SetupVmEnvironmentSuccess, oneof: "result" }
]);
var SetupVmEnvironmentSuccess$Runtime = (() => class _SetupVmEnvironmentSuccess extends Message<_SetupVmEnvironmentSuccess> {
  constructor(data?: PartialMessage<_SetupVmEnvironmentSuccess>) {
    super();
    proto3.util.initPartial(data, this as _SetupVmEnvironmentSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupVmEnvironmentSuccess {
    return new _SetupVmEnvironmentSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentSuccess {
    return new _SetupVmEnvironmentSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentSuccess {
    return new _SetupVmEnvironmentSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupVmEnvironmentSuccess | PlainMessage<_SetupVmEnvironmentSuccess> | undefined | null, b2: _SetupVmEnvironmentSuccess | PlainMessage<_SetupVmEnvironmentSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SetupVmEnvironmentSuccess as unknown as MessageType<_SetupVmEnvironmentSuccess>, a, b2);
  }
})();
export type SetupVmEnvironmentSuccess = InstanceType<typeof SetupVmEnvironmentSuccess$Runtime>;
var SetupVmEnvironmentSuccess: MessageType<SetupVmEnvironmentSuccess> = SetupVmEnvironmentSuccess$Runtime as unknown as MessageType<SetupVmEnvironmentSuccess>;
(SetupVmEnvironmentSuccess as MutableMessageType<SetupVmEnvironmentSuccess>).runtime = proto3;
(SetupVmEnvironmentSuccess as MutableMessageType<SetupVmEnvironmentSuccess>).typeName = "agent.v1.SetupVmEnvironmentSuccess";
(SetupVmEnvironmentSuccess as MutableMessageType<SetupVmEnvironmentSuccess>).fields = proto3.util.newFieldList(() => []);
var SetupVmEnvironmentToolCall$Runtime = (() => class _SetupVmEnvironmentToolCall extends Message<_SetupVmEnvironmentToolCall> {
  declare args?: SetupVmEnvironmentArgs;
  declare result?: SetupVmEnvironmentResult;
  constructor(data?: PartialMessage<_SetupVmEnvironmentToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SetupVmEnvironmentToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetupVmEnvironmentToolCall {
    return new _SetupVmEnvironmentToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentToolCall {
    return new _SetupVmEnvironmentToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetupVmEnvironmentToolCall {
    return new _SetupVmEnvironmentToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SetupVmEnvironmentToolCall | PlainMessage<_SetupVmEnvironmentToolCall> | undefined | null, b2: _SetupVmEnvironmentToolCall | PlainMessage<_SetupVmEnvironmentToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SetupVmEnvironmentToolCall as unknown as MessageType<_SetupVmEnvironmentToolCall>, a, b2);
  }
})();
export type SetupVmEnvironmentToolCall = InstanceType<typeof SetupVmEnvironmentToolCall$Runtime>;
var SetupVmEnvironmentToolCall: MessageType<SetupVmEnvironmentToolCall> = SetupVmEnvironmentToolCall$Runtime as unknown as MessageType<SetupVmEnvironmentToolCall>;
(SetupVmEnvironmentToolCall as MutableMessageType<SetupVmEnvironmentToolCall>).runtime = proto3;
(SetupVmEnvironmentToolCall as MutableMessageType<SetupVmEnvironmentToolCall>).typeName = "agent.v1.SetupVmEnvironmentToolCall";
(SetupVmEnvironmentToolCall as MutableMessageType<SetupVmEnvironmentToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SetupVmEnvironmentArgs },
  { no: 2, name: "result", kind: "message", T: SetupVmEnvironmentResult }
]);


export { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentSuccess, SetupVmEnvironmentToolCall };
