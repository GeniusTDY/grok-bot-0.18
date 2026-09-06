// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { SystemPromptSpec } from "../../../../proto/generated/agent/v1/system_prompt_pb.js";
import { DataClassification } from "../../../../redaction/classification.js";
import { createRedactedString } from "../../../../redaction/factory.js";

function toRedactedSystemPromptSpec(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    spec: toRedactedSystemPromptSpec_spec(msg.spec, privacyMode)
  };
}
function toRedactedSystemPromptSpec_spec(oneof, privacyMode) {
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "replace":
      return { case: "replace", value: createRedactedString(oneof.value, DataClassification.CODE, "replace", privacyMode) };
    case "append":
      return { case: "append", value: createRedactedString(oneof.value, DataClassification.CODE, "append", privacyMode) };
    default:
      return { case: void 0, value: void 0 };
  }
}
function fromRedactedSystemPromptSpec(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new SystemPromptSpec({
    spec: fromRedactedSystemPromptSpec_spec(msg.spec, purpose, opts)
  });
}
function fromRedactedSystemPromptSpec_spec(oneof, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "replace":
      return { case: "replace", value: oneof.value.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing }) };
    case "append":
      return { case: "append", value: oneof.value.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing }) };
    default:
      return { case: void 0, value: void 0 };
  }
}

export {
  toRedactedSystemPromptSpec,
  toRedactedSystemPromptSpec_spec,
  fromRedactedSystemPromptSpec,
  fromRedactedSystemPromptSpec_spec,
};
