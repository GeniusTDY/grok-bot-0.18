/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:21600-21633
 * Region SHA-256: fb6e4987d808707fb8c78853ad57651713c1a64e0ad053f7c949e6e9b92605a3
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { DeleteArgs, DeleteResult } from "./delete_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var DeleteToolCall$Runtime = (() => class _DeleteToolCall extends Message<_DeleteToolCall> {
  declare args?: DeleteArgs;
  declare result?: DeleteResult;
  constructor(data?: PartialMessage<_DeleteToolCall>) {
    super();
    proto3.util.initPartial(data, this as _DeleteToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteToolCall {
    return new _DeleteToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteToolCall {
    return new _DeleteToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteToolCall {
    return new _DeleteToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteToolCall | PlainMessage<_DeleteToolCall> | undefined | null, b2: _DeleteToolCall | PlainMessage<_DeleteToolCall> | undefined | null): boolean {
    return proto3.util.equals(_DeleteToolCall as unknown as MessageType<_DeleteToolCall>, a, b2);
  }
})();
export type DeleteToolCall = InstanceType<typeof DeleteToolCall$Runtime>;
var DeleteToolCall: MessageType<DeleteToolCall> = DeleteToolCall$Runtime as unknown as MessageType<DeleteToolCall>;
(DeleteToolCall as MutableMessageType<DeleteToolCall>).runtime = proto3;
(DeleteToolCall as MutableMessageType<DeleteToolCall>).typeName = "agent.v1.DeleteToolCall";
(DeleteToolCall as MutableMessageType<DeleteToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: DeleteArgs },
  { no: 2, name: "result", kind: "message", T: DeleteResult }
]);


export { DeleteToolCall };
