/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:35866-36072
 * Region SHA-256: 21a22c8eff13d8c5e30fd2c521c696a3f4b9dc1de3448b4b0282a7e88d529435
 * Atomic B1 exports: 6 messages + 1 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type BugfixVerdict = 0 | 1 | 2 | 3 | 4;
var BugfixVerdict: {
  "UNSPECIFIED": 0;
  "FIXED": 1;
  "FALSE_POSITIVE": 2;
  "COULD_NOT_FIX": 3;
  "RESOLVED_BY_OTHER_FIX": 4;
  0: "UNSPECIFIED";
  1: "FIXED";
  2: "FALSE_POSITIVE";
  3: "COULD_NOT_FIX";
  4: "RESOLVED_BY_OTHER_FIX";
};
(function(BugfixVerdict2) {
  BugfixVerdict2[BugfixVerdict2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugfixVerdict2[BugfixVerdict2["FIXED"] = 1] = "FIXED";
  BugfixVerdict2[BugfixVerdict2["FALSE_POSITIVE"] = 2] = "FALSE_POSITIVE";
  BugfixVerdict2[BugfixVerdict2["COULD_NOT_FIX"] = 3] = "COULD_NOT_FIX";
  BugfixVerdict2[BugfixVerdict2["RESOLVED_BY_OTHER_FIX"] = 4] = "RESOLVED_BY_OTHER_FIX";
})(BugfixVerdict! || (BugfixVerdict = {} as typeof BugfixVerdict));
proto3.util.setEnumType(BugfixVerdict, "agent.v1.BugfixVerdict", [
  { no: 0, name: "BUGFIX_VERDICT_UNSPECIFIED" },
  { no: 1, name: "BUGFIX_VERDICT_FIXED" },
  { no: 2, name: "BUGFIX_VERDICT_FALSE_POSITIVE" },
  { no: 3, name: "BUGFIX_VERDICT_COULD_NOT_FIX" },
  { no: 4, name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX" }
]);
var BugfixResultItem$Runtime = (() => class _BugfixResultItem extends Message<_BugfixResultItem> {
  declare bugId: string;
  declare bugTitle: string;
  declare verdict: BugfixVerdict;
  declare explanation: string;
  declare severity?: string;
  constructor(data?: PartialMessage<_BugfixResultItem>) {
    super();
    this.bugId = "";
    this.bugTitle = "";
    this.verdict = BugfixVerdict.UNSPECIFIED;
    this.explanation = "";
    proto3.util.initPartial(data, this as _BugfixResultItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugfixResultItem {
    return new _BugfixResultItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugfixResultItem {
    return new _BugfixResultItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugfixResultItem {
    return new _BugfixResultItem().fromJsonString(jsonString, options);
  }
  static equals(a: _BugfixResultItem | PlainMessage<_BugfixResultItem> | undefined | null, b2: _BugfixResultItem | PlainMessage<_BugfixResultItem> | undefined | null): boolean {
    return proto3.util.equals(_BugfixResultItem as unknown as MessageType<_BugfixResultItem>, a, b2);
  }
})();
export type BugfixResultItem = InstanceType<typeof BugfixResultItem$Runtime>;
var BugfixResultItem: MessageType<BugfixResultItem> = BugfixResultItem$Runtime as unknown as MessageType<BugfixResultItem>;
(BugfixResultItem as MutableMessageType<BugfixResultItem>).runtime = proto3;
(BugfixResultItem as MutableMessageType<BugfixResultItem>).typeName = "agent.v1.BugfixResultItem";
(BugfixResultItem as MutableMessageType<BugfixResultItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bug_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bug_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "verdict", kind: "enum", T: proto3.getEnumType(BugfixVerdict) },
  {
    no: 4,
    name: "explanation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "severity", kind: "scalar", T: 9, opt: true }
]);
var ReportBugfixResultsArgs$Runtime = (() => class _ReportBugfixResultsArgs extends Message<_ReportBugfixResultsArgs> {
  declare summary: string;
  declare results: BugfixResultItem[];
  constructor(data?: PartialMessage<_ReportBugfixResultsArgs>) {
    super();
    this.summary = "";
    this.results = [];
    proto3.util.initPartial(data, this as _ReportBugfixResultsArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsArgs {
    return new _ReportBugfixResultsArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsArgs {
    return new _ReportBugfixResultsArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsArgs {
    return new _ReportBugfixResultsArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsArgs | PlainMessage<_ReportBugfixResultsArgs> | undefined | null, b2: _ReportBugfixResultsArgs | PlainMessage<_ReportBugfixResultsArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsArgs as unknown as MessageType<_ReportBugfixResultsArgs>, a, b2);
  }
})();
export type ReportBugfixResultsArgs = InstanceType<typeof ReportBugfixResultsArgs$Runtime>;
var ReportBugfixResultsArgs: MessageType<ReportBugfixResultsArgs> = ReportBugfixResultsArgs$Runtime as unknown as MessageType<ReportBugfixResultsArgs>;
(ReportBugfixResultsArgs as MutableMessageType<ReportBugfixResultsArgs>).runtime = proto3;
(ReportBugfixResultsArgs as MutableMessageType<ReportBugfixResultsArgs>).typeName = "agent.v1.ReportBugfixResultsArgs";
(ReportBugfixResultsArgs as MutableMessageType<ReportBugfixResultsArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "results", kind: "message", T: BugfixResultItem, repeated: true }
]);
var ReportBugfixResultsSuccess$Runtime = (() => class _ReportBugfixResultsSuccess extends Message<_ReportBugfixResultsSuccess> {
  declare results: BugfixResultItem[];
  constructor(data?: PartialMessage<_ReportBugfixResultsSuccess>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _ReportBugfixResultsSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsSuccess {
    return new _ReportBugfixResultsSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsSuccess {
    return new _ReportBugfixResultsSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsSuccess {
    return new _ReportBugfixResultsSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsSuccess | PlainMessage<_ReportBugfixResultsSuccess> | undefined | null, b2: _ReportBugfixResultsSuccess | PlainMessage<_ReportBugfixResultsSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsSuccess as unknown as MessageType<_ReportBugfixResultsSuccess>, a, b2);
  }
})();
export type ReportBugfixResultsSuccess = InstanceType<typeof ReportBugfixResultsSuccess$Runtime>;
var ReportBugfixResultsSuccess: MessageType<ReportBugfixResultsSuccess> = ReportBugfixResultsSuccess$Runtime as unknown as MessageType<ReportBugfixResultsSuccess>;
(ReportBugfixResultsSuccess as MutableMessageType<ReportBugfixResultsSuccess>).runtime = proto3;
(ReportBugfixResultsSuccess as MutableMessageType<ReportBugfixResultsSuccess>).typeName = "agent.v1.ReportBugfixResultsSuccess";
(ReportBugfixResultsSuccess as MutableMessageType<ReportBugfixResultsSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: BugfixResultItem, repeated: true }
]);
var ReportBugfixResultsError$Runtime = (() => class _ReportBugfixResultsError extends Message<_ReportBugfixResultsError> {
  declare error: string;
  constructor(data?: PartialMessage<_ReportBugfixResultsError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ReportBugfixResultsError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsError {
    return new _ReportBugfixResultsError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsError {
    return new _ReportBugfixResultsError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsError {
    return new _ReportBugfixResultsError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsError | PlainMessage<_ReportBugfixResultsError> | undefined | null, b2: _ReportBugfixResultsError | PlainMessage<_ReportBugfixResultsError> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsError as unknown as MessageType<_ReportBugfixResultsError>, a, b2);
  }
})();
export type ReportBugfixResultsError = InstanceType<typeof ReportBugfixResultsError$Runtime>;
var ReportBugfixResultsError: MessageType<ReportBugfixResultsError> = ReportBugfixResultsError$Runtime as unknown as MessageType<ReportBugfixResultsError>;
(ReportBugfixResultsError as MutableMessageType<ReportBugfixResultsError>).runtime = proto3;
(ReportBugfixResultsError as MutableMessageType<ReportBugfixResultsError>).typeName = "agent.v1.ReportBugfixResultsError";
(ReportBugfixResultsError as MutableMessageType<ReportBugfixResultsError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReportBugfixResultsResult$Runtime = (() => class _ReportBugfixResultsResult extends Message<_ReportBugfixResultsResult> {
  declare result: { case: "success"; value: ReportBugfixResultsSuccess } | { case: "error"; value: ReportBugfixResultsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReportBugfixResultsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReportBugfixResultsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsResult | PlainMessage<_ReportBugfixResultsResult> | undefined | null, b2: _ReportBugfixResultsResult | PlainMessage<_ReportBugfixResultsResult> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsResult as unknown as MessageType<_ReportBugfixResultsResult>, a, b2);
  }
})();
export type ReportBugfixResultsResult = InstanceType<typeof ReportBugfixResultsResult$Runtime>;
var ReportBugfixResultsResult: MessageType<ReportBugfixResultsResult> = ReportBugfixResultsResult$Runtime as unknown as MessageType<ReportBugfixResultsResult>;
(ReportBugfixResultsResult as MutableMessageType<ReportBugfixResultsResult>).runtime = proto3;
(ReportBugfixResultsResult as MutableMessageType<ReportBugfixResultsResult>).typeName = "agent.v1.ReportBugfixResultsResult";
(ReportBugfixResultsResult as MutableMessageType<ReportBugfixResultsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReportBugfixResultsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReportBugfixResultsError, oneof: "result" }
]);
var ReportBugfixResultsToolCall$Runtime = (() => class _ReportBugfixResultsToolCall extends Message<_ReportBugfixResultsToolCall> {
  declare args?: ReportBugfixResultsArgs;
  declare result?: ReportBugfixResultsResult;
  constructor(data?: PartialMessage<_ReportBugfixResultsToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReportBugfixResultsToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsToolCall {
    return new _ReportBugfixResultsToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsToolCall {
    return new _ReportBugfixResultsToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsToolCall {
    return new _ReportBugfixResultsToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsToolCall | PlainMessage<_ReportBugfixResultsToolCall> | undefined | null, b2: _ReportBugfixResultsToolCall | PlainMessage<_ReportBugfixResultsToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsToolCall as unknown as MessageType<_ReportBugfixResultsToolCall>, a, b2);
  }
})();
export type ReportBugfixResultsToolCall = InstanceType<typeof ReportBugfixResultsToolCall$Runtime>;
var ReportBugfixResultsToolCall: MessageType<ReportBugfixResultsToolCall> = ReportBugfixResultsToolCall$Runtime as unknown as MessageType<ReportBugfixResultsToolCall>;
(ReportBugfixResultsToolCall as MutableMessageType<ReportBugfixResultsToolCall>).runtime = proto3;
(ReportBugfixResultsToolCall as MutableMessageType<ReportBugfixResultsToolCall>).typeName = "agent.v1.ReportBugfixResultsToolCall";
(ReportBugfixResultsToolCall as MutableMessageType<ReportBugfixResultsToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReportBugfixResultsArgs },
  { no: 2, name: "result", kind: "message", T: ReportBugfixResultsResult }
]);


export { BugfixVerdict, BugfixResultItem, ReportBugfixResultsArgs, ReportBugfixResultsSuccess, ReportBugfixResultsError, ReportBugfixResultsResult, ReportBugfixResultsToolCall };
