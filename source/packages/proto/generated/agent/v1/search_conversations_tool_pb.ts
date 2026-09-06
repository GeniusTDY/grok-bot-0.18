/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:41420-41453
 * Region SHA-256: f5541c535a958ed4fadb3f63b9be5f06e47b522471b93f1d352fff848069cfe2
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { ConversationSearchArgs, ConversationSearchResult } from "./conversation_search_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SearchConversationsToolCall$Runtime = (() => class _SearchConversationsToolCall extends Message<_SearchConversationsToolCall> {
  declare args?: ConversationSearchArgs;
  declare result?: ConversationSearchResult;
  constructor(data?: PartialMessage<_SearchConversationsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SearchConversationsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchConversationsToolCall {
    return new _SearchConversationsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchConversationsToolCall {
    return new _SearchConversationsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchConversationsToolCall {
    return new _SearchConversationsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchConversationsToolCall | PlainMessage<_SearchConversationsToolCall> | undefined | null, b2: _SearchConversationsToolCall | PlainMessage<_SearchConversationsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SearchConversationsToolCall as unknown as MessageType<_SearchConversationsToolCall>, a, b2);
  }
})();
export type SearchConversationsToolCall = InstanceType<typeof SearchConversationsToolCall$Runtime>;
var SearchConversationsToolCall: MessageType<SearchConversationsToolCall> = SearchConversationsToolCall$Runtime as unknown as MessageType<SearchConversationsToolCall>;
(SearchConversationsToolCall as MutableMessageType<SearchConversationsToolCall>).runtime = proto3;
(SearchConversationsToolCall as MutableMessageType<SearchConversationsToolCall>).typeName = "agent.v1.SearchConversationsToolCall";
(SearchConversationsToolCall as MutableMessageType<SearchConversationsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ConversationSearchArgs },
  { no: 2, name: "result", kind: "message", T: ConversationSearchResult }
]);


export { SearchConversationsToolCall };
