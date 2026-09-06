/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34936-34969
 * Region SHA-256: 3eee00a79978c70c54d3ca7e215152644922b0595bb9242425524035736c462f
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { WriteShellStdinArgs, WriteShellStdinResult } from "./background_shell_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var WriteShellStdinToolCall$Runtime = (() => class _WriteShellStdinToolCall extends Message<_WriteShellStdinToolCall> {
  declare args?: WriteShellStdinArgs;
  declare result?: WriteShellStdinResult;
  constructor(data?: PartialMessage<_WriteShellStdinToolCall>) {
    super();
    proto3.util.initPartial(data, this as _WriteShellStdinToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinToolCall {
    return new _WriteShellStdinToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinToolCall {
    return new _WriteShellStdinToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinToolCall {
    return new _WriteShellStdinToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinToolCall | PlainMessage<_WriteShellStdinToolCall> | undefined | null, b2: _WriteShellStdinToolCall | PlainMessage<_WriteShellStdinToolCall> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinToolCall as unknown as MessageType<_WriteShellStdinToolCall>, a, b2);
  }
})();
export type WriteShellStdinToolCall = InstanceType<typeof WriteShellStdinToolCall$Runtime>;
var WriteShellStdinToolCall: MessageType<WriteShellStdinToolCall> = WriteShellStdinToolCall$Runtime as unknown as MessageType<WriteShellStdinToolCall>;
(WriteShellStdinToolCall as MutableMessageType<WriteShellStdinToolCall>).runtime = proto3;
(WriteShellStdinToolCall as MutableMessageType<WriteShellStdinToolCall>).typeName = "agent.v1.WriteShellStdinToolCall";
(WriteShellStdinToolCall as MutableMessageType<WriteShellStdinToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: WriteShellStdinArgs },
  { no: 2, name: "result", kind: "message", T: WriteShellStdinResult }
]);


export { WriteShellStdinToolCall };
