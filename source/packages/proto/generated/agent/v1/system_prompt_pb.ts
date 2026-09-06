/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:17890-17923
 * Region SHA-256: 42bbf2b4116a66073c3d71bf8c3ba1ab77ba5e797173129d3d45f94f04ada38b
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SystemPromptSpec$Runtime = (() => class _SystemPromptSpec extends Message<_SystemPromptSpec> {
  declare spec: { case: "replace"; value: string } | { case: "append"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SystemPromptSpec>) {
    super();
    this.spec = { case: void 0 };
    proto3.util.initPartial(data, this as _SystemPromptSpec);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SystemPromptSpec {
    return new _SystemPromptSpec().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SystemPromptSpec {
    return new _SystemPromptSpec().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SystemPromptSpec {
    return new _SystemPromptSpec().fromJsonString(jsonString, options);
  }
  static equals(a: _SystemPromptSpec | PlainMessage<_SystemPromptSpec> | undefined | null, b2: _SystemPromptSpec | PlainMessage<_SystemPromptSpec> | undefined | null): boolean {
    return proto3.util.equals(_SystemPromptSpec as unknown as MessageType<_SystemPromptSpec>, a, b2);
  }
})();
export type SystemPromptSpec = InstanceType<typeof SystemPromptSpec$Runtime>;
var SystemPromptSpec: MessageType<SystemPromptSpec> = SystemPromptSpec$Runtime as unknown as MessageType<SystemPromptSpec>;
(SystemPromptSpec as MutableMessageType<SystemPromptSpec>).runtime = proto3;
(SystemPromptSpec as MutableMessageType<SystemPromptSpec>).typeName = "agent.v1.SystemPromptSpec";
(SystemPromptSpec as MutableMessageType<SystemPromptSpec>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "replace", kind: "scalar", T: 9, oneof: "spec" },
  { no: 2, name: "append", kind: "scalar", T: 9, oneof: "spec" }
]);


export { SystemPromptSpec };
