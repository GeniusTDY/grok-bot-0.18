/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:34297-34330
 * Region SHA-256: 8767e06d42dbfa5acbd934a713c3dc02899ef766d33bb7f0a00f7edd55493cec
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FetchArgs, FetchResult } from "./fetch_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var FetchToolCall$Runtime = (() => class _FetchToolCall extends Message<_FetchToolCall> {
  declare args?: FetchArgs;
  declare result?: FetchResult;
  constructor(data?: PartialMessage<_FetchToolCall>) {
    super();
    proto3.util.initPartial(data, this as _FetchToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchToolCall {
    return new _FetchToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchToolCall {
    return new _FetchToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchToolCall {
    return new _FetchToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchToolCall | PlainMessage<_FetchToolCall> | undefined | null, b2: _FetchToolCall | PlainMessage<_FetchToolCall> | undefined | null): boolean {
    return proto3.util.equals(_FetchToolCall as unknown as MessageType<_FetchToolCall>, a, b2);
  }
})();
export type FetchToolCall = InstanceType<typeof FetchToolCall$Runtime>;
var FetchToolCall: MessageType<FetchToolCall> = FetchToolCall$Runtime as unknown as MessageType<FetchToolCall>;
(FetchToolCall as MutableMessageType<FetchToolCall>).runtime = proto3;
(FetchToolCall as MutableMessageType<FetchToolCall>).typeName = "agent.v1.FetchToolCall";
(FetchToolCall as MutableMessageType<FetchToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: FetchArgs },
  { no: 2, name: "result", kind: "message", T: FetchResult }
]);


export { FetchToolCall };
