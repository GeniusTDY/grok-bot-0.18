// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { FetchToolCall } from "../../../../proto/generated/agent/v1/fetch_tool_pb.js";
import { fromRedactedFetchArgs, fromRedactedFetchResult, toRedactedFetchArgs, toRedactedFetchResult } from "./fetch_exec_redacted.js";

function toRedactedFetchToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedFetchArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedFetchResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedFetchToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new FetchToolCall({
    args: msg.args !== void 0 ? fromRedactedFetchArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedFetchResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedFetchToolCall,
  fromRedactedFetchToolCall,
};
