// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { StartGrindPlanningArgs, StartGrindPlanningError, StartGrindPlanningResult, StartGrindPlanningSuccess, StartGrindPlanningToolCall } from "../../../../proto/generated/agent/v1/start_grind_planning_tool_pb.js";
import { DataClassification } from "../../../../redaction/classification.js";
import { createRedactedString } from "../../../../redaction/factory.js";

function toRedactedStartGrindPlanningArgs(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    explanation: msg.explanation !== void 0 ? createRedactedString(msg.explanation, DataClassification.CODE, "explanation", privacyMode) : void 0,
    toolCallId: msg.toolCallId
  };
}
function fromRedactedStartGrindPlanningArgs(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new StartGrindPlanningArgs({
    explanation: msg.explanation?.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing }),
    toolCallId: msg.toolCallId
  });
}
function toRedactedStartGrindPlanningResult(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    result: toRedactedStartGrindPlanningResult_result(msg.result, privacyMode)
  };
}
function toRedactedStartGrindPlanningResult_result(oneof, privacyMode) {
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "success":
      return { case: "success", value: toRedactedStartGrindPlanningSuccess(oneof.value, privacyMode) };
    case "error":
      return { case: "error", value: toRedactedStartGrindPlanningError(oneof.value, privacyMode) };
    default:
      return { case: void 0, value: void 0 };
  }
}
function fromRedactedStartGrindPlanningResult(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new StartGrindPlanningResult({
    result: fromRedactedStartGrindPlanningResult_result(msg.result, purpose, opts)
  });
}
function fromRedactedStartGrindPlanningResult_result(oneof, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  if (!oneof || oneof.case === void 0) {
    return { case: void 0, value: void 0 };
  }
  switch (oneof.case) {
    case "success":
      return { case: "success", value: fromRedactedStartGrindPlanningSuccess(oneof.value, purpose, opts) };
    case "error":
      return { case: "error", value: fromRedactedStartGrindPlanningError(oneof.value, purpose, opts) };
    default:
      return { case: void 0, value: void 0 };
  }
}
function toRedactedStartGrindPlanningSuccess(msg, privacyMode) {
  return {
    _privacyMode: privacyMode
  };
}
function fromRedactedStartGrindPlanningSuccess(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new StartGrindPlanningSuccess({});
}
function toRedactedStartGrindPlanningError(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    error: createRedactedString(msg.error, DataClassification.CODE, "error", privacyMode)
  };
}
function fromRedactedStartGrindPlanningError(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new StartGrindPlanningError({
    error: msg.error.unwrap(purpose, { redactUnallowedFieldsInsteadOfThrowing, enforcing })
  });
}
function toRedactedStartGrindPlanningToolCall(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    args: msg.args !== void 0 ? toRedactedStartGrindPlanningArgs(msg.args, privacyMode) : void 0,
    result: msg.result !== void 0 ? toRedactedStartGrindPlanningResult(msg.result, privacyMode) : void 0
  };
}
function fromRedactedStartGrindPlanningToolCall(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new StartGrindPlanningToolCall({
    args: msg.args !== void 0 ? fromRedactedStartGrindPlanningArgs(msg.args, purpose, opts) : void 0,
    result: msg.result !== void 0 ? fromRedactedStartGrindPlanningResult(msg.result, purpose, opts) : void 0
  });
}

export {
  toRedactedStartGrindPlanningArgs,
  fromRedactedStartGrindPlanningArgs,
  toRedactedStartGrindPlanningResult,
  toRedactedStartGrindPlanningResult_result,
  fromRedactedStartGrindPlanningResult,
  fromRedactedStartGrindPlanningResult_result,
  toRedactedStartGrindPlanningSuccess,
  fromRedactedStartGrindPlanningSuccess,
  toRedactedStartGrindPlanningError,
  fromRedactedStartGrindPlanningError,
  toRedactedStartGrindPlanningToolCall,
  fromRedactedStartGrindPlanningToolCall,
};
