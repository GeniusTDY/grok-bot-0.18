// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { GrepToolCall } from "../../../../proto/generated/agent/v1/grep_tool_pb.js";
import { fromRedactedGrepArgs, fromRedactedGrepResult, toRedactedGrepArgs, toRedactedGrepResult } from "./grep_exec_redacted.js";

function toRedactedGrepToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedGrepArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedGrepResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedGrepToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new GrepToolCall({
    args: msg.args !== void 0 ? fromRedactedGrepArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedGrepResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedGrepToolCall,
  fromRedactedGrepToolCall,
};
