// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { SearchConversationsToolCall } from "../../../../proto/generated/agent/v1/search_conversations_tool_pb.js";
import { fromRedactedConversationSearchArgs, fromRedactedConversationSearchResult, toRedactedConversationSearchArgs, toRedactedConversationSearchResult } from "./conversation_search_exec_redacted.js";

function toRedactedSearchConversationsToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedConversationSearchArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedConversationSearchResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedSearchConversationsToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new SearchConversationsToolCall({
    args: msg.args !== void 0 ? fromRedactedConversationSearchArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedConversationSearchResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedSearchConversationsToolCall,
  fromRedactedSearchConversationsToolCall,
};
