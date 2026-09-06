// @ts-nocheck -- exact generated runtime; declaration typing is a subsequent mechanical pass.
import { PiTruncation } from "../../../../proto/generated/agent/v1/pi_common_pb.js";

function toRedactedPiTruncation(msg, privacyMode) {
  return {
    _privacyMode: privacyMode,
    truncated: msg.truncated,
    truncatedBy: msg.truncatedBy,
    totalLines: msg.totalLines,
    outputLines: msg.outputLines,
    outputBytes: msg.outputBytes,
    maxLines: msg.maxLines,
    maxBytes: msg.maxBytes,
    firstLineExceedsLimit: msg.firstLineExceedsLimit,
    lastLinePartial: msg.lastLinePartial
  };
}
function fromRedactedPiTruncation(msg, purpose, opts) {
  const redactUnallowedFieldsInsteadOfThrowing = opts?.redactUnallowedFieldsInsteadOfThrowing ?? false;
  const enforcing = opts?.enforcing;
  return new PiTruncation({
    truncated: msg.truncated,
    truncatedBy: msg.truncatedBy,
    totalLines: msg.totalLines,
    outputLines: msg.outputLines,
    outputBytes: msg.outputBytes,
    maxLines: msg.maxLines,
    maxBytes: msg.maxBytes,
    firstLineExceedsLimit: msg.firstLineExceedsLimit,
    lastLinePartial: msg.lastLinePartial
  });
}

export {
  toRedactedPiTruncation,
  fromRedactedPiTruncation,
};
