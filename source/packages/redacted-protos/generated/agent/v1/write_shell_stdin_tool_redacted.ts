// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { WriteShellStdinToolCall } from "../../../../proto/generated/agent/v1/write_shell_stdin_tool_pb.js";
import { fromRedactedWriteShellStdinArgs, fromRedactedWriteShellStdinResult, toRedactedWriteShellStdinArgs, toRedactedWriteShellStdinResult } from "./background_shell_exec_redacted.js";

function toRedactedWriteShellStdinToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedWriteShellStdinArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedWriteShellStdinResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedWriteShellStdinToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new WriteShellStdinToolCall({
    args: msg.args !== void 0 ? fromRedactedWriteShellStdinArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedWriteShellStdinResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedWriteShellStdinToolCall,
  fromRedactedWriteShellStdinToolCall,
};
