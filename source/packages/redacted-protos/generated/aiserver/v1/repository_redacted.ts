// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { CodeResult } from "../../../../proto/generated/aiserver/v1/repository_pb.js";
import { fromRedactedCodeBlock, toRedactedCodeBlock } from "./utils_redacted.js";

function toRedactedCodeResult(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    codeBlock: msg.codeBlock !== void 0 ? toRedactedCodeBlock(msg.codeBlock, privacyMode) : void 0,
    score: msg.score
  };
}
function fromRedactedCodeResult(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new CodeResult({
    codeBlock: msg.codeBlock !== void 0 ? fromRedactedCodeBlock(msg.codeBlock, purpose, opts) : void 0,
    score: msg.score
  });
}

export {
  toRedactedCodeResult,
  fromRedactedCodeResult,
};
