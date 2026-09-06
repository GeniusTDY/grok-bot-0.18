/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34902-34935
 * Region SHA-256: fbdb8746cd2e7f8442ce7f99c74e79f5e42b5bfb8b9b1a12a243522622c63ff3
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { RecordScreenArgs, RecordScreenResult } from "./record_screen_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var RecordScreenToolCall$Runtime = (() => class _RecordScreenToolCall extends Message<_RecordScreenToolCall> {
  declare args?: RecordScreenArgs;
  declare result?: RecordScreenResult;
  constructor(data?: PartialMessage<_RecordScreenToolCall>) {
    super();
    proto3.util.initPartial(data, this as _RecordScreenToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenToolCall {
    return new _RecordScreenToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenToolCall {
    return new _RecordScreenToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenToolCall {
    return new _RecordScreenToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenToolCall | PlainMessage<_RecordScreenToolCall> | undefined | null, b2: _RecordScreenToolCall | PlainMessage<_RecordScreenToolCall> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenToolCall as unknown as MessageType<_RecordScreenToolCall>, a, b2);
  }
})();
export type RecordScreenToolCall = InstanceType<typeof RecordScreenToolCall$Runtime>;
var RecordScreenToolCall: MessageType<RecordScreenToolCall> = RecordScreenToolCall$Runtime as unknown as MessageType<RecordScreenToolCall>;
(RecordScreenToolCall as MutableMessageType<RecordScreenToolCall>).runtime = proto3;
(RecordScreenToolCall as MutableMessageType<RecordScreenToolCall>).typeName = "agent.v1.RecordScreenToolCall";
(RecordScreenToolCall as MutableMessageType<RecordScreenToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: RecordScreenArgs },
  { no: 2, name: "result", kind: "message", T: RecordScreenResult }
]);


export { RecordScreenToolCall };
