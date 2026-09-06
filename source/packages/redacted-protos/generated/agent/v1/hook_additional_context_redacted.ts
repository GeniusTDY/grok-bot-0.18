// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { HookAdditionalContext } from "../../../../proto/generated/agent/v1/hook_additional_context_pb.js";
import { DataClassification } from "../../../../redaction/classification.js";
import { createRedactedString } from "../../../../redaction/factory.js";

function toRedactedHookAdditionalContext(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    hookEventName: msg.hookEventName,
    content: createRedactedString(msg.content, DataClassification.CODE, "content", privacyMode)
  };
}
function fromRedactedHookAdditionalContext(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new HookAdditionalContext({
    hookEventName: msg.hookEventName,
    content: msg.content.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing })
  });
}

export {
  toRedactedHookAdditionalContext,
  fromRedactedHookAdditionalContext,
};
