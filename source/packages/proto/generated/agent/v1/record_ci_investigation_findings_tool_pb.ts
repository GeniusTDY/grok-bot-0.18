/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:38785-39022
 * Region SHA-256: 8535fa4a87873f1ed60e3a16db4b534f4f03dd28b943ba0dc457eb714a83d731
 * Atomic B1 exports: 7 messages + 0 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var RecordCiInvestigationFinding$Runtime = (() => class _RecordCiInvestigationFinding extends Message<_RecordCiInvestigationFinding> {
  declare checkName: string;
  declare detailsUrl?: string;
  declare tldr: string;
  declare rootCause?: string;
  declare failingSignal?: string;
  declare suggestedNextStep?: string;
  declare diffRelation?: string;
  declare diffRelationEvidence?: string;
  declare flakeAssessment?: string;
  declare flakeEvidence?: string;
  declare rerunAvailable?: boolean;
  declare rerunEvidence?: string;
  declare recommendedAction?: string;
  declare recommendedActionEvidence?: string;
  declare confidence?: string;
  constructor(data?: PartialMessage<_RecordCiInvestigationFinding>) {
    super();
    this.checkName = "";
    this.tldr = "";
    proto3.util.initPartial(data, this as _RecordCiInvestigationFinding);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFinding {
    return new _RecordCiInvestigationFinding().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFinding {
    return new _RecordCiInvestigationFinding().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFinding {
    return new _RecordCiInvestigationFinding().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFinding | PlainMessage<_RecordCiInvestigationFinding> | undefined | null, b2: _RecordCiInvestigationFinding | PlainMessage<_RecordCiInvestigationFinding> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFinding as unknown as MessageType<_RecordCiInvestigationFinding>, a, b2);
  }
})();
export type RecordCiInvestigationFinding = InstanceType<typeof RecordCiInvestigationFinding$Runtime>;
var RecordCiInvestigationFinding: MessageType<RecordCiInvestigationFinding> = RecordCiInvestigationFinding$Runtime as unknown as MessageType<RecordCiInvestigationFinding>;
(RecordCiInvestigationFinding as MutableMessageType<RecordCiInvestigationFinding>).runtime = proto3;
(RecordCiInvestigationFinding as MutableMessageType<RecordCiInvestigationFinding>).typeName = "agent.v1.RecordCiInvestigationFinding";
(RecordCiInvestigationFinding as MutableMessageType<RecordCiInvestigationFinding>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "check_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "details_url", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "tldr",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "root_cause", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "failing_signal", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "suggested_next_step", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "diff_relation", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "diff_relation_evidence", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "flake_assessment", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "flake_evidence", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "rerun_available", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "rerun_evidence", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "recommended_action", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "confidence", kind: "scalar", T: 9, opt: true }
]);
var RecordCiInvestigationOverall$Runtime = (() => class _RecordCiInvestigationOverall extends Message<_RecordCiInvestigationOverall> {
  declare summary: string;
  declare themes: string[];
  declare recommendedAction?: string;
  declare recommendedActionEvidence?: string;
  declare checkKeys: string[];
  constructor(data?: PartialMessage<_RecordCiInvestigationOverall>) {
    super();
    this.summary = "";
    this.themes = [];
    this.checkKeys = [];
    proto3.util.initPartial(data, this as _RecordCiInvestigationOverall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationOverall {
    return new _RecordCiInvestigationOverall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationOverall {
    return new _RecordCiInvestigationOverall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationOverall {
    return new _RecordCiInvestigationOverall().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationOverall | PlainMessage<_RecordCiInvestigationOverall> | undefined | null, b2: _RecordCiInvestigationOverall | PlainMessage<_RecordCiInvestigationOverall> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationOverall as unknown as MessageType<_RecordCiInvestigationOverall>, a, b2);
  }
})();
export type RecordCiInvestigationOverall = InstanceType<typeof RecordCiInvestigationOverall$Runtime>;
var RecordCiInvestigationOverall: MessageType<RecordCiInvestigationOverall> = RecordCiInvestigationOverall$Runtime as unknown as MessageType<RecordCiInvestigationOverall>;
(RecordCiInvestigationOverall as MutableMessageType<RecordCiInvestigationOverall>).runtime = proto3;
(RecordCiInvestigationOverall as MutableMessageType<RecordCiInvestigationOverall>).typeName = "agent.v1.RecordCiInvestigationOverall";
(RecordCiInvestigationOverall as MutableMessageType<RecordCiInvestigationOverall>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "themes", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "recommended_action", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "recommended_action_evidence", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "check_keys", kind: "scalar", T: 9, repeated: true }
]);
var RecordCiInvestigationFindingsArgs$Runtime = (() => class _RecordCiInvestigationFindingsArgs extends Message<_RecordCiInvestigationFindingsArgs> {
  declare findings: RecordCiInvestigationFinding[];
  declare overall?: RecordCiInvestigationOverall;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_RecordCiInvestigationFindingsArgs>) {
    super();
    this.findings = [];
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _RecordCiInvestigationFindingsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFindingsArgs {
    return new _RecordCiInvestigationFindingsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsArgs {
    return new _RecordCiInvestigationFindingsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsArgs {
    return new _RecordCiInvestigationFindingsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFindingsArgs | PlainMessage<_RecordCiInvestigationFindingsArgs> | undefined | null, b2: _RecordCiInvestigationFindingsArgs | PlainMessage<_RecordCiInvestigationFindingsArgs> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFindingsArgs as unknown as MessageType<_RecordCiInvestigationFindingsArgs>, a, b2);
  }
})();
export type RecordCiInvestigationFindingsArgs = InstanceType<typeof RecordCiInvestigationFindingsArgs$Runtime>;
var RecordCiInvestigationFindingsArgs: MessageType<RecordCiInvestigationFindingsArgs> = RecordCiInvestigationFindingsArgs$Runtime as unknown as MessageType<RecordCiInvestigationFindingsArgs>;
(RecordCiInvestigationFindingsArgs as MutableMessageType<RecordCiInvestigationFindingsArgs>).runtime = proto3;
(RecordCiInvestigationFindingsArgs as MutableMessageType<RecordCiInvestigationFindingsArgs>).typeName = "agent.v1.RecordCiInvestigationFindingsArgs";
(RecordCiInvestigationFindingsArgs as MutableMessageType<RecordCiInvestigationFindingsArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "findings", kind: "message", T: RecordCiInvestigationFinding, repeated: true },
  { no: 2, name: "overall", kind: "message", T: RecordCiInvestigationOverall, opt: true },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecordCiInvestigationFindingsSuccess$Runtime = (() => class _RecordCiInvestigationFindingsSuccess extends Message<_RecordCiInvestigationFindingsSuccess> {
  declare message: string;
  constructor(data?: PartialMessage<_RecordCiInvestigationFindingsSuccess>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _RecordCiInvestigationFindingsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFindingsSuccess {
    return new _RecordCiInvestigationFindingsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsSuccess {
    return new _RecordCiInvestigationFindingsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsSuccess {
    return new _RecordCiInvestigationFindingsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFindingsSuccess | PlainMessage<_RecordCiInvestigationFindingsSuccess> | undefined | null, b2: _RecordCiInvestigationFindingsSuccess | PlainMessage<_RecordCiInvestigationFindingsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFindingsSuccess as unknown as MessageType<_RecordCiInvestigationFindingsSuccess>, a, b2);
  }
})();
export type RecordCiInvestigationFindingsSuccess = InstanceType<typeof RecordCiInvestigationFindingsSuccess$Runtime>;
var RecordCiInvestigationFindingsSuccess: MessageType<RecordCiInvestigationFindingsSuccess> = RecordCiInvestigationFindingsSuccess$Runtime as unknown as MessageType<RecordCiInvestigationFindingsSuccess>;
(RecordCiInvestigationFindingsSuccess as MutableMessageType<RecordCiInvestigationFindingsSuccess>).runtime = proto3;
(RecordCiInvestigationFindingsSuccess as MutableMessageType<RecordCiInvestigationFindingsSuccess>).typeName = "agent.v1.RecordCiInvestigationFindingsSuccess";
(RecordCiInvestigationFindingsSuccess as MutableMessageType<RecordCiInvestigationFindingsSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecordCiInvestigationFindingsError$Runtime = (() => class _RecordCiInvestigationFindingsError extends Message<_RecordCiInvestigationFindingsError> {
  declare error: string;
  constructor(data?: PartialMessage<_RecordCiInvestigationFindingsError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _RecordCiInvestigationFindingsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFindingsError {
    return new _RecordCiInvestigationFindingsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsError {
    return new _RecordCiInvestigationFindingsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsError {
    return new _RecordCiInvestigationFindingsError().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFindingsError | PlainMessage<_RecordCiInvestigationFindingsError> | undefined | null, b2: _RecordCiInvestigationFindingsError | PlainMessage<_RecordCiInvestigationFindingsError> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFindingsError as unknown as MessageType<_RecordCiInvestigationFindingsError>, a, b2);
  }
})();
export type RecordCiInvestigationFindingsError = InstanceType<typeof RecordCiInvestigationFindingsError$Runtime>;
var RecordCiInvestigationFindingsError: MessageType<RecordCiInvestigationFindingsError> = RecordCiInvestigationFindingsError$Runtime as unknown as MessageType<RecordCiInvestigationFindingsError>;
(RecordCiInvestigationFindingsError as MutableMessageType<RecordCiInvestigationFindingsError>).runtime = proto3;
(RecordCiInvestigationFindingsError as MutableMessageType<RecordCiInvestigationFindingsError>).typeName = "agent.v1.RecordCiInvestigationFindingsError";
(RecordCiInvestigationFindingsError as MutableMessageType<RecordCiInvestigationFindingsError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RecordCiInvestigationFindingsResult$Runtime = (() => class _RecordCiInvestigationFindingsResult extends Message<_RecordCiInvestigationFindingsResult> {
  declare result: { case: "success"; value: RecordCiInvestigationFindingsSuccess } | { case: "error"; value: RecordCiInvestigationFindingsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RecordCiInvestigationFindingsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RecordCiInvestigationFindingsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFindingsResult {
    return new _RecordCiInvestigationFindingsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsResult {
    return new _RecordCiInvestigationFindingsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsResult {
    return new _RecordCiInvestigationFindingsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFindingsResult | PlainMessage<_RecordCiInvestigationFindingsResult> | undefined | null, b2: _RecordCiInvestigationFindingsResult | PlainMessage<_RecordCiInvestigationFindingsResult> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFindingsResult as unknown as MessageType<_RecordCiInvestigationFindingsResult>, a, b2);
  }
})();
export type RecordCiInvestigationFindingsResult = InstanceType<typeof RecordCiInvestigationFindingsResult$Runtime>;
var RecordCiInvestigationFindingsResult: MessageType<RecordCiInvestigationFindingsResult> = RecordCiInvestigationFindingsResult$Runtime as unknown as MessageType<RecordCiInvestigationFindingsResult>;
(RecordCiInvestigationFindingsResult as MutableMessageType<RecordCiInvestigationFindingsResult>).runtime = proto3;
(RecordCiInvestigationFindingsResult as MutableMessageType<RecordCiInvestigationFindingsResult>).typeName = "agent.v1.RecordCiInvestigationFindingsResult";
(RecordCiInvestigationFindingsResult as MutableMessageType<RecordCiInvestigationFindingsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: RecordCiInvestigationFindingsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: RecordCiInvestigationFindingsError, oneof: "result" }
]);
var RecordCiInvestigationFindingsToolCall$Runtime = (() => class _RecordCiInvestigationFindingsToolCall extends Message<_RecordCiInvestigationFindingsToolCall> {
  declare args?: RecordCiInvestigationFindingsArgs;
  declare result?: RecordCiInvestigationFindingsResult;
  constructor(data?: PartialMessage<_RecordCiInvestigationFindingsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _RecordCiInvestigationFindingsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordCiInvestigationFindingsToolCall {
    return new _RecordCiInvestigationFindingsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsToolCall {
    return new _RecordCiInvestigationFindingsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordCiInvestigationFindingsToolCall {
    return new _RecordCiInvestigationFindingsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordCiInvestigationFindingsToolCall | PlainMessage<_RecordCiInvestigationFindingsToolCall> | undefined | null, b2: _RecordCiInvestigationFindingsToolCall | PlainMessage<_RecordCiInvestigationFindingsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_RecordCiInvestigationFindingsToolCall as unknown as MessageType<_RecordCiInvestigationFindingsToolCall>, a, b2);
  }
})();
export type RecordCiInvestigationFindingsToolCall = InstanceType<typeof RecordCiInvestigationFindingsToolCall$Runtime>;
var RecordCiInvestigationFindingsToolCall: MessageType<RecordCiInvestigationFindingsToolCall> = RecordCiInvestigationFindingsToolCall$Runtime as unknown as MessageType<RecordCiInvestigationFindingsToolCall>;
(RecordCiInvestigationFindingsToolCall as MutableMessageType<RecordCiInvestigationFindingsToolCall>).runtime = proto3;
(RecordCiInvestigationFindingsToolCall as MutableMessageType<RecordCiInvestigationFindingsToolCall>).typeName = "agent.v1.RecordCiInvestigationFindingsToolCall";
(RecordCiInvestigationFindingsToolCall as MutableMessageType<RecordCiInvestigationFindingsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: RecordCiInvestigationFindingsArgs },
  { no: 2, name: "result", kind: "message", T: RecordCiInvestigationFindingsResult }
]);


export { RecordCiInvestigationFinding, RecordCiInvestigationOverall, RecordCiInvestigationFindingsArgs, RecordCiInvestigationFindingsSuccess, RecordCiInvestigationFindingsError, RecordCiInvestigationFindingsResult, RecordCiInvestigationFindingsToolCall };
