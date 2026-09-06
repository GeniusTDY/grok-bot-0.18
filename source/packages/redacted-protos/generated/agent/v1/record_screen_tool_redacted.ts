// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { RecordScreenToolCall } from "../../../../proto/generated/agent/v1/record_screen_tool_pb.js";
import { fromRedactedRecordScreenArgs, fromRedactedRecordScreenResult, toRedactedRecordScreenArgs, toRedactedRecordScreenResult } from "./record_screen_exec_redacted.js";

function toRedactedRecordScreenToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedRecordScreenArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedRecordScreenResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedRecordScreenToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new RecordScreenToolCall({
    args: msg.args !== void 0 ? fromRedactedRecordScreenArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedRecordScreenResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedRecordScreenToolCall,
  fromRedactedRecordScreenToolCall,
};
