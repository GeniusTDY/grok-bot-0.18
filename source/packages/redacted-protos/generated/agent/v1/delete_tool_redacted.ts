// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { DeleteToolCall } from "../../../../proto/generated/agent/v1/delete_tool_pb.js";
import { fromRedactedDeleteArgs, fromRedactedDeleteResult, toRedactedDeleteArgs, toRedactedDeleteResult } from "./delete_exec_redacted.js";

function toRedactedDeleteToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedDeleteArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedDeleteResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedDeleteToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new DeleteToolCall({
    args: msg.args !== void 0 ? fromRedactedDeleteArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedDeleteResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedDeleteToolCall,
  fromRedactedDeleteToolCall,
};
