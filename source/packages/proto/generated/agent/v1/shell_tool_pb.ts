/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:21480-21599
 * Region SHA-256: 65b07e3d22ef5c6ca7327bfd45f5159f303f7070c4f31305f55dae7f5af4d94b
 * Atomic B1 exports: 4 messages + 0 enums = 4
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { ShellArgs, ShellResult } from "./shell_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ShellToolCall$Runtime = (() => class _ShellToolCall extends Message<_ShellToolCall> {
  declare args?: ShellArgs;
  declare result?: ShellResult;
  declare description?: string;
  constructor(data?: PartialMessage<_ShellToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ShellToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellToolCall {
    return new _ShellToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellToolCall {
    return new _ShellToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellToolCall {
    return new _ShellToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellToolCall | PlainMessage<_ShellToolCall> | undefined | null, b2: _ShellToolCall | PlainMessage<_ShellToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ShellToolCall as unknown as MessageType<_ShellToolCall>, a, b2);
  }
})();
export type ShellToolCall = InstanceType<typeof ShellToolCall$Runtime>;
var ShellToolCall: MessageType<ShellToolCall> = ShellToolCall$Runtime as unknown as MessageType<ShellToolCall>;
(ShellToolCall as MutableMessageType<ShellToolCall>).runtime = proto3;
(ShellToolCall as MutableMessageType<ShellToolCall>).typeName = "agent.v1.ShellToolCall";
(ShellToolCall as MutableMessageType<ShellToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ShellArgs },
  { no: 2, name: "result", kind: "message", T: ShellResult },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true }
]);
var ShellToolCallStdoutDelta$Runtime = (() => class _ShellToolCallStdoutDelta extends Message<_ShellToolCallStdoutDelta> {
  declare content: string;
  constructor(data?: PartialMessage<_ShellToolCallStdoutDelta>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _ShellToolCallStdoutDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellToolCallStdoutDelta {
    return new _ShellToolCallStdoutDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellToolCallStdoutDelta {
    return new _ShellToolCallStdoutDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellToolCallStdoutDelta {
    return new _ShellToolCallStdoutDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellToolCallStdoutDelta | PlainMessage<_ShellToolCallStdoutDelta> | undefined | null, b2: _ShellToolCallStdoutDelta | PlainMessage<_ShellToolCallStdoutDelta> | undefined | null): boolean {
    return proto3.util.equals(_ShellToolCallStdoutDelta as unknown as MessageType<_ShellToolCallStdoutDelta>, a, b2);
  }
})();
export type ShellToolCallStdoutDelta = InstanceType<typeof ShellToolCallStdoutDelta$Runtime>;
var ShellToolCallStdoutDelta: MessageType<ShellToolCallStdoutDelta> = ShellToolCallStdoutDelta$Runtime as unknown as MessageType<ShellToolCallStdoutDelta>;
(ShellToolCallStdoutDelta as MutableMessageType<ShellToolCallStdoutDelta>).runtime = proto3;
(ShellToolCallStdoutDelta as MutableMessageType<ShellToolCallStdoutDelta>).typeName = "agent.v1.ShellToolCallStdoutDelta";
(ShellToolCallStdoutDelta as MutableMessageType<ShellToolCallStdoutDelta>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellToolCallStderrDelta$Runtime = (() => class _ShellToolCallStderrDelta extends Message<_ShellToolCallStderrDelta> {
  declare content: string;
  constructor(data?: PartialMessage<_ShellToolCallStderrDelta>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _ShellToolCallStderrDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellToolCallStderrDelta {
    return new _ShellToolCallStderrDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellToolCallStderrDelta {
    return new _ShellToolCallStderrDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellToolCallStderrDelta {
    return new _ShellToolCallStderrDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellToolCallStderrDelta | PlainMessage<_ShellToolCallStderrDelta> | undefined | null, b2: _ShellToolCallStderrDelta | PlainMessage<_ShellToolCallStderrDelta> | undefined | null): boolean {
    return proto3.util.equals(_ShellToolCallStderrDelta as unknown as MessageType<_ShellToolCallStderrDelta>, a, b2);
  }
})();
export type ShellToolCallStderrDelta = InstanceType<typeof ShellToolCallStderrDelta$Runtime>;
var ShellToolCallStderrDelta: MessageType<ShellToolCallStderrDelta> = ShellToolCallStderrDelta$Runtime as unknown as MessageType<ShellToolCallStderrDelta>;
(ShellToolCallStderrDelta as MutableMessageType<ShellToolCallStderrDelta>).runtime = proto3;
(ShellToolCallStderrDelta as MutableMessageType<ShellToolCallStderrDelta>).typeName = "agent.v1.ShellToolCallStderrDelta";
(ShellToolCallStderrDelta as MutableMessageType<ShellToolCallStderrDelta>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellToolCallDelta$Runtime = (() => class _ShellToolCallDelta extends Message<_ShellToolCallDelta> {
  declare delta: { case: "stdout"; value: ShellToolCallStdoutDelta } | { case: "stderr"; value: ShellToolCallStderrDelta } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ShellToolCallDelta>) {
    super();
    this.delta = { case: void 0 };
    proto3.util.initPartial(data, this as _ShellToolCallDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellToolCallDelta {
    return new _ShellToolCallDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellToolCallDelta {
    return new _ShellToolCallDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellToolCallDelta {
    return new _ShellToolCallDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellToolCallDelta | PlainMessage<_ShellToolCallDelta> | undefined | null, b2: _ShellToolCallDelta | PlainMessage<_ShellToolCallDelta> | undefined | null): boolean {
    return proto3.util.equals(_ShellToolCallDelta as unknown as MessageType<_ShellToolCallDelta>, a, b2);
  }
})();
export type ShellToolCallDelta = InstanceType<typeof ShellToolCallDelta$Runtime>;
var ShellToolCallDelta: MessageType<ShellToolCallDelta> = ShellToolCallDelta$Runtime as unknown as MessageType<ShellToolCallDelta>;
(ShellToolCallDelta as MutableMessageType<ShellToolCallDelta>).runtime = proto3;
(ShellToolCallDelta as MutableMessageType<ShellToolCallDelta>).typeName = "agent.v1.ShellToolCallDelta";
(ShellToolCallDelta as MutableMessageType<ShellToolCallDelta>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stdout", kind: "message", T: ShellToolCallStdoutDelta, oneof: "delta" },
  { no: 2, name: "stderr", kind: "message", T: ShellToolCallStderrDelta, oneof: "delta" }
]);


export { ShellToolCall, ShellToolCallStdoutDelta, ShellToolCallStderrDelta, ShellToolCallDelta };
