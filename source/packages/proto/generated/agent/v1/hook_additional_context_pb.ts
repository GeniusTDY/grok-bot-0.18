/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:13120-13166
 * Region SHA-256: d53c17a6d7702129d91c2fc0105160d22a7f79480a7cf3a2722e337ceb1339af
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var HookAdditionalContext$Runtime = (() => class _HookAdditionalContext extends Message<_HookAdditionalContext> {
  declare hookEventName: string;
  declare content: string;
  constructor(data?: PartialMessage<_HookAdditionalContext>) {
    super();
    this.hookEventName = "";
    this.content = "";
    proto3.util.initPartial(data, this as _HookAdditionalContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HookAdditionalContext {
    return new _HookAdditionalContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HookAdditionalContext {
    return new _HookAdditionalContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HookAdditionalContext {
    return new _HookAdditionalContext().fromJsonString(jsonString, options);
  }
  static equals(a: _HookAdditionalContext | PlainMessage<_HookAdditionalContext> | undefined | null, b2: _HookAdditionalContext | PlainMessage<_HookAdditionalContext> | undefined | null): boolean {
    return proto3.util.equals(_HookAdditionalContext as unknown as MessageType<_HookAdditionalContext>, a, b2);
  }
})();
export type HookAdditionalContext = InstanceType<typeof HookAdditionalContext$Runtime>;
var HookAdditionalContext: MessageType<HookAdditionalContext> = HookAdditionalContext$Runtime as unknown as MessageType<HookAdditionalContext>;
(HookAdditionalContext as MutableMessageType<HookAdditionalContext>).runtime = proto3;
(HookAdditionalContext as MutableMessageType<HookAdditionalContext>).typeName = "agent.v1.HookAdditionalContext";
(HookAdditionalContext as MutableMessageType<HookAdditionalContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "hook_event_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { HookAdditionalContext };
