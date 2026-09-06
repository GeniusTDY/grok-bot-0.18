/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:21817-21850
 * Region SHA-256: e3feb509f8809c4416e7221297b64f47ed1626d87d478524d19d1594cfbd7738
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { GrepArgs, GrepResult } from "./grep_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var GrepToolCall$Runtime = (() => class _GrepToolCall extends Message<_GrepToolCall> {
  declare args?: GrepArgs;
  declare result?: GrepResult;
  constructor(data?: PartialMessage<_GrepToolCall>) {
    super();
    proto3.util.initPartial(data, this as _GrepToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GrepToolCall {
    return new _GrepToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GrepToolCall {
    return new _GrepToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GrepToolCall {
    return new _GrepToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _GrepToolCall | PlainMessage<_GrepToolCall> | undefined | null, b2: _GrepToolCall | PlainMessage<_GrepToolCall> | undefined | null): boolean {
    return proto3.util.equals(_GrepToolCall as unknown as MessageType<_GrepToolCall>, a, b2);
  }
})();
export type GrepToolCall = InstanceType<typeof GrepToolCall$Runtime>;
var GrepToolCall: MessageType<GrepToolCall> = GrepToolCall$Runtime as unknown as MessageType<GrepToolCall>;
(GrepToolCall as MutableMessageType<GrepToolCall>).runtime = proto3;
(GrepToolCall as MutableMessageType<GrepToolCall>).typeName = "agent.v1.GrepToolCall";
(GrepToolCall as MutableMessageType<GrepToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: GrepArgs },
  { no: 2, name: "result", kind: "message", T: GrepResult }
]);


export { GrepToolCall };
