// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { UpdatePrCodeTourArgs, UpdatePrCodeTourError, UpdatePrCodeTourResult, UpdatePrCodeTourSuccess, UpdatePrCodeTourToolCall } from "../../../../proto/generated/agent/v1/update_pr_code_tour_tool_pb.js";
import { DataClassification } from "../../../../redaction/classification.js";
import { createRedactedString } from "../../../../redaction/factory.js";

function toRedactedUpdatePrCodeTourArgs(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    feedback: createRedactedString(msg.feedback, DataClassification.CODE, "feedback", privacyMode),
    toolCallId: msg.toolCallId
  };
}
function fromRedactedUpdatePrCodeTourArgs(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new UpdatePrCodeTourArgs({
    feedback: msg.feedback.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing }),
    toolCallId: msg.toolCallId
  });
}
function toRedactedUpdatePrCodeTourResult(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    result: toRedactedUpdatePrCodeTourResult_result(msg.result, privacyMode)
  };
}
function toRedactedUpdatePrCodeTourResult_result(oneof, privacyMode) {
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "success":
      return { case: "success", value: toRedactedUpdatePrCodeTourSuccess(oneof.value, privacyMode) };
    case "error":
      return { case: "error", value: toRedactedUpdatePrCodeTourError(oneof.value, privacyMode) };
    default:
      return { case: void 0, value: void 0 };
  }
}
function fromRedactedUpdatePrCodeTourResult(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new UpdatePrCodeTourResult({
    result: fromRedactedUpdatePrCodeTourResult_result(msg.result, purpose, opts)
  });
}
function fromRedactedUpdatePrCodeTourResult_result(oneof, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "success":
      return { case: "success", value: fromRedactedUpdatePrCodeTourSuccess(oneof.value, purpose, opts) };
    case "error":
      return { case: "error", value: fromRedactedUpdatePrCodeTourError(oneof.value, purpose, opts) };
    default:
      return { case: void 0, value: void 0 };
  }
}
function toRedactedUpdatePrCodeTourSuccess(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    revisionId: msg.revisionId,
    message: createRedactedString(msg.message, DataClassification.CODE, "message", privacyMode),
    executionMode: msg.executionMode
  };
}
function fromRedactedUpdatePrCodeTourSuccess(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new UpdatePrCodeTourSuccess({
    revisionId: msg.revisionId,
    message: msg.message.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing }),
    executionMode: msg.executionMode
  });
}
function toRedactedUpdatePrCodeTourError(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    error: createRedactedString(msg.error, DataClassification.CODE, "error", privacyMode)
  };
}
function fromRedactedUpdatePrCodeTourError(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new UpdatePrCodeTourError({
    error: msg.error.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing })
  });
}
function toRedactedUpdatePrCodeTourToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedUpdatePrCodeTourArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedUpdatePrCodeTourResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedUpdatePrCodeTourToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new UpdatePrCodeTourToolCall({
    args: msg.args !== void 0 ? fromRedactedUpdatePrCodeTourArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedUpdatePrCodeTourResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedUpdatePrCodeTourArgs,
  fromRedactedUpdatePrCodeTourArgs,
  toRedactedUpdatePrCodeTourResult,
  toRedactedUpdatePrCodeTourResult_result,
  fromRedactedUpdatePrCodeTourResult,
  fromRedactedUpdatePrCodeTourResult_result,
  toRedactedUpdatePrCodeTourSuccess,
  fromRedactedUpdatePrCodeTourSuccess,
  toRedactedUpdatePrCodeTourError,
  fromRedactedUpdatePrCodeTourError,
  toRedactedUpdatePrCodeTourToolCall,
  fromRedactedUpdatePrCodeTourToolCall,
};
