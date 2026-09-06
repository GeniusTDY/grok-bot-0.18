/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:22802-22835
 * Region SHA-256: 0eedcd7d796300b4dd0a65a43b57ce9d2858df175b3325b30836fd0dc8c31c02
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { LsArgs, LsResult } from "./ls_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var LsToolCall$Runtime = (() => class _LsToolCall extends Message<_LsToolCall> {
  declare args?: LsArgs;
  declare result?: LsResult;
  constructor(data?: PartialMessage<_LsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _LsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LsToolCall {
    return new _LsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LsToolCall {
    return new _LsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LsToolCall {
    return new _LsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _LsToolCall | PlainMessage<_LsToolCall> | undefined | null, b2: _LsToolCall | PlainMessage<_LsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_LsToolCall as unknown as MessageType<_LsToolCall>, a, b2);
  }
})();
export type LsToolCall = InstanceType<typeof LsToolCall$Runtime>;
var LsToolCall: MessageType<LsToolCall> = LsToolCall$Runtime as unknown as MessageType<LsToolCall>;
(LsToolCall as MutableMessageType<LsToolCall>).runtime = proto3;
(LsToolCall as MutableMessageType<LsToolCall>).typeName = "agent.v1.LsToolCall";
(LsToolCall as MutableMessageType<LsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: LsArgs },
  { no: 2, name: "result", kind: "message", T: LsResult }
]);


export { LsToolCall };
