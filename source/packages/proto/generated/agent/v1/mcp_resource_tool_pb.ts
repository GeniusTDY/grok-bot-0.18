/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:33708-33765
 * Region SHA-256: 9b5779f9a7257adef0e51534570cdbc32f06fb8315e95d241f1c9df251a2416a
 * Atomic B1 exports: 2 messages + 0 enums = 2
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { ListMcpResourcesExecArgs, ListMcpResourcesExecResult, ReadMcpResourceExecArgs, ReadMcpResourceExecResult } from "./mcp_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ListMcpResourcesToolCall$Runtime = (() => class _ListMcpResourcesToolCall extends Message<_ListMcpResourcesToolCall> {
  declare args?: ListMcpResourcesExecArgs;
  declare result?: ListMcpResourcesExecResult;
  constructor(data?: PartialMessage<_ListMcpResourcesToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ListMcpResourcesToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesToolCall {
    return new _ListMcpResourcesToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesToolCall {
    return new _ListMcpResourcesToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesToolCall {
    return new _ListMcpResourcesToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesToolCall | PlainMessage<_ListMcpResourcesToolCall> | undefined | null, b2: _ListMcpResourcesToolCall | PlainMessage<_ListMcpResourcesToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesToolCall as unknown as MessageType<_ListMcpResourcesToolCall>, a, b2);
  }
})();
export type ListMcpResourcesToolCall = InstanceType<typeof ListMcpResourcesToolCall$Runtime>;
var ListMcpResourcesToolCall: MessageType<ListMcpResourcesToolCall> = ListMcpResourcesToolCall$Runtime as unknown as MessageType<ListMcpResourcesToolCall>;
(ListMcpResourcesToolCall as MutableMessageType<ListMcpResourcesToolCall>).runtime = proto3;
(ListMcpResourcesToolCall as MutableMessageType<ListMcpResourcesToolCall>).typeName = "agent.v1.ListMcpResourcesToolCall";
(ListMcpResourcesToolCall as MutableMessageType<ListMcpResourcesToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ListMcpResourcesExecArgs },
  { no: 2, name: "result", kind: "message", T: ListMcpResourcesExecResult }
]);
var ReadMcpResourceToolCall$Runtime = (() => class _ReadMcpResourceToolCall extends Message<_ReadMcpResourceToolCall> {
  declare args?: ReadMcpResourceExecArgs;
  declare result?: ReadMcpResourceExecResult;
  constructor(data?: PartialMessage<_ReadMcpResourceToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReadMcpResourceToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceToolCall {
    return new _ReadMcpResourceToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceToolCall {
    return new _ReadMcpResourceToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceToolCall {
    return new _ReadMcpResourceToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceToolCall | PlainMessage<_ReadMcpResourceToolCall> | undefined | null, b2: _ReadMcpResourceToolCall | PlainMessage<_ReadMcpResourceToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceToolCall as unknown as MessageType<_ReadMcpResourceToolCall>, a, b2);
  }
})();
export type ReadMcpResourceToolCall = InstanceType<typeof ReadMcpResourceToolCall$Runtime>;
var ReadMcpResourceToolCall: MessageType<ReadMcpResourceToolCall> = ReadMcpResourceToolCall$Runtime as unknown as MessageType<ReadMcpResourceToolCall>;
(ReadMcpResourceToolCall as MutableMessageType<ReadMcpResourceToolCall>).runtime = proto3;
(ReadMcpResourceToolCall as MutableMessageType<ReadMcpResourceToolCall>).typeName = "agent.v1.ReadMcpResourceToolCall";
(ReadMcpResourceToolCall as MutableMessageType<ReadMcpResourceToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReadMcpResourceExecArgs },
  { no: 2, name: "result", kind: "message", T: ReadMcpResourceExecResult }
]);


export { ListMcpResourcesToolCall, ReadMcpResourceToolCall };
