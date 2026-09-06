/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:168166-168886
 * Region SHA-256: cab6a07cbb6b59be44bedf3ba25b85802cfc137046da402df1e2da023b6c68ee
 * AI Server closure exports: 19 messages + 3 enums = 22
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { GitDiff, CodeBlock, ModelDetails } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type BugbotDeeplinkEventKind = 0 | 1 | 2 | 3 | 4 | 5;
var BugbotDeeplinkEventKind: {
  "UNSPECIFIED": 0;
  "CLICKED": 1;
  "HANDLED_DIALOG_SHOWN": 2;
  "HANDLED_CHAT_CREATED": 3;
  "ERROR": 4;
  "HANDLED_FIX_IN_WEB": 5;
  0: "UNSPECIFIED";
  1: "CLICKED";
  2: "HANDLED_DIALOG_SHOWN";
  3: "HANDLED_CHAT_CREATED";
  4: "ERROR";
  5: "HANDLED_FIX_IN_WEB";
};
export type BugbotFeedbackReaction = 0 | 1 | 2;
var BugbotFeedbackReaction: {
  "UNSPECIFIED": 0;
  "THUMBS_UP": 1;
  "THUMBS_DOWN": 2;
  0: "UNSPECIFIED";
  1: "THUMBS_UP";
  2: "THUMBS_DOWN";
};
export type BugBotRunStatus = 0 | 1 | 2 | 3;
var BugBotRunStatus: {
  "UNSPECIFIED": 0;
  "NO_RUN": 1;
  "IN_PROGRESS": 2;
  "COMPLETED": 3;
  0: "UNSPECIFIED";
  1: "NO_RUN";
  2: "IN_PROGRESS";
  3: "COMPLETED";
};
(function(BugbotDeeplinkEventKind2) {
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["CLICKED"] = 1] = "CLICKED";
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["HANDLED_DIALOG_SHOWN"] = 2] = "HANDLED_DIALOG_SHOWN";
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["HANDLED_CHAT_CREATED"] = 3] = "HANDLED_CHAT_CREATED";
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["ERROR"] = 4] = "ERROR";
  BugbotDeeplinkEventKind2[BugbotDeeplinkEventKind2["HANDLED_FIX_IN_WEB"] = 5] = "HANDLED_FIX_IN_WEB";
})(BugbotDeeplinkEventKind! || (BugbotDeeplinkEventKind = {} as typeof BugbotDeeplinkEventKind));
proto3.util.setEnumType(BugbotDeeplinkEventKind, "aiserver.v1.BugbotDeeplinkEventKind", [
  { no: 0, name: "BUGBOT_DEEPLINK_EVENT_KIND_UNSPECIFIED" },
  { no: 1, name: "BUGBOT_DEEPLINK_EVENT_KIND_CLICKED" },
  { no: 2, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_DIALOG_SHOWN" },
  { no: 3, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_CHAT_CREATED" },
  { no: 4, name: "BUGBOT_DEEPLINK_EVENT_KIND_ERROR" },
  { no: 5, name: "BUGBOT_DEEPLINK_EVENT_KIND_HANDLED_FIX_IN_WEB" }
]);
(function(BugbotFeedbackReaction2) {
  BugbotFeedbackReaction2[BugbotFeedbackReaction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugbotFeedbackReaction2[BugbotFeedbackReaction2["THUMBS_UP"] = 1] = "THUMBS_UP";
  BugbotFeedbackReaction2[BugbotFeedbackReaction2["THUMBS_DOWN"] = 2] = "THUMBS_DOWN";
})(BugbotFeedbackReaction! || (BugbotFeedbackReaction = {} as typeof BugbotFeedbackReaction));
proto3.util.setEnumType(BugbotFeedbackReaction, "aiserver.v1.BugbotFeedbackReaction", [
  { no: 0, name: "BUGBOT_FEEDBACK_REACTION_UNSPECIFIED" },
  { no: 1, name: "BUGBOT_FEEDBACK_REACTION_THUMBS_UP" },
  { no: 2, name: "BUGBOT_FEEDBACK_REACTION_THUMBS_DOWN" }
]);
(function(BugBotRunStatus2) {
  BugBotRunStatus2[BugBotRunStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BugBotRunStatus2[BugBotRunStatus2["NO_RUN"] = 1] = "NO_RUN";
  BugBotRunStatus2[BugBotRunStatus2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
  BugBotRunStatus2[BugBotRunStatus2["COMPLETED"] = 3] = "COMPLETED";
})(BugBotRunStatus! || (BugBotRunStatus = {} as typeof BugBotRunStatus));
proto3.util.setEnumType(BugBotRunStatus, "aiserver.v1.BugBotRunStatus", [
  { no: 0, name: "BUG_BOT_RUN_STATUS_UNSPECIFIED" },
  { no: 1, name: "BUG_BOT_RUN_STATUS_NO_RUN" },
  { no: 2, name: "BUG_BOT_RUN_STATUS_IN_PROGRESS" },
  { no: 3, name: "BUG_BOT_RUN_STATUS_COMPLETED" }
]);
var BugLocation$Runtime = (() => class _BugLocation extends Message<_BugLocation> {
  declare file: string;
  declare startLine: number;
  declare endLine: number;
  declare codeLines: string[];
  constructor(data?: PartialMessage<_BugLocation>) {
    super();
    this.file = "";
    this.startLine = 0;
    this.endLine = 0;
    this.codeLines = [];
    proto3.util.initPartial(data, this as _BugLocation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugLocation {
    return new _BugLocation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugLocation {
    return new _BugLocation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugLocation {
    return new _BugLocation().fromJsonString(jsonString, options);
  }
  static equals(a: _BugLocation | PlainMessage<_BugLocation> | undefined | null, b2: _BugLocation | PlainMessage<_BugLocation> | undefined | null): boolean {
    return proto3.util.equals(_BugLocation as unknown as MessageType<_BugLocation>, a, b2);
  }
})();
export type BugLocation = InstanceType<typeof BugLocation$Runtime>;
var BugLocation: MessageType<BugLocation> = BugLocation$Runtime as unknown as MessageType<BugLocation>;
(BugLocation as MutableMessageType<BugLocation>).runtime = proto3;
(BugLocation as MutableMessageType<BugLocation>).typeName = "aiserver.v1.BugLocation";
(BugLocation as MutableMessageType<BugLocation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: true }
]);
var BugReport$Runtime = (() => class _BugReport extends Message<_BugReport> {
  declare locations: BugLocation[];
  declare id: string;
  declare description: string;
  declare confidence?: number;
  declare category?: string;
  declare severity?: string;
  declare title?: string;
  declare rationale?: string;
  declare triggeredByRuleId?: string;
  declare modelConfidence?: number;
  constructor(data?: PartialMessage<_BugReport>) {
    super();
    this.locations = [];
    this.id = "";
    this.description = "";
    proto3.util.initPartial(data, this as _BugReport);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugReport {
    return new _BugReport().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugReport {
    return new _BugReport().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugReport {
    return new _BugReport().fromJsonString(jsonString, options);
  }
  static equals(a: _BugReport | PlainMessage<_BugReport> | undefined | null, b2: _BugReport | PlainMessage<_BugReport> | undefined | null): boolean {
    return proto3.util.equals(_BugReport as unknown as MessageType<_BugReport>, a, b2);
  }
})();
export type BugReport = InstanceType<typeof BugReport$Runtime>;
var BugReport: MessageType<BugReport> = BugReport$Runtime as unknown as MessageType<BugReport>;
(BugReport as MutableMessageType<BugReport>).runtime = proto3;
(BugReport as MutableMessageType<BugReport>).typeName = "aiserver.v1.BugReport";
(BugReport as MutableMessageType<BugReport>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "locations", kind: "message", T: BugLocation, repeated: true },
  {
    no: 2,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "confidence", kind: "scalar", T: 2, opt: true },
  { no: 5, name: "category", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "severity", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "rationale", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "triggered_by_rule_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "model_confidence", kind: "scalar", T: 2, opt: true }
]);
var BugReports$Runtime = (() => class _BugReports extends Message<_BugReports> {
  declare bugReports: BugReport[];
  constructor(data?: PartialMessage<_BugReports>) {
    super();
    this.bugReports = [];
    proto3.util.initPartial(data, this as _BugReports);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugReports {
    return new _BugReports().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugReports {
    return new _BugReports().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugReports {
    return new _BugReports().fromJsonString(jsonString, options);
  }
  static equals(a: _BugReports | PlainMessage<_BugReports> | undefined | null, b2: _BugReports | PlainMessage<_BugReports> | undefined | null): boolean {
    return proto3.util.equals(_BugReports as unknown as MessageType<_BugReports>, a, b2);
  }
})();
export type BugReports = InstanceType<typeof BugReports$Runtime>;
var BugReports: MessageType<BugReports> = BugReports$Runtime as unknown as MessageType<BugReports>;
(BugReports as MutableMessageType<BugReports>).runtime = proto3;
(BugReports as MutableMessageType<BugReports>).typeName = "aiserver.v1.BugReports";
(BugReports as MutableMessageType<BugReports>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_reports", kind: "message", T: BugReport, repeated: true }
]);
var StreamBugBotRequest$Runtime = (() => class _StreamBugBotRequest extends Message<_StreamBugBotRequest> {
  declare gitDiff?: GitDiff;
  declare contextFiles: CodeBlock[];
  declare modelDetails?: ModelDetails;
  declare userInstructions?: string;
  declare bugDetectionGuidelines?: string;
  declare iterations?: number;
  declare unifiedContextLines?: number;
  declare inBackgroundSubsidized: boolean;
  declare sessionId?: string;
  declare priceId?: string;
  declare hasTelemetry: boolean;
  declare constrainToFile?: string;
  declare constrainToRange?: StreamBugBotRequest_Range;
  declare deepReview?: boolean;
  constructor(data?: PartialMessage<_StreamBugBotRequest>) {
    super();
    this.contextFiles = [];
    this.inBackgroundSubsidized = false;
    this.hasTelemetry = false;
    proto3.util.initPartial(data, this as _StreamBugBotRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamBugBotRequest {
    return new _StreamBugBotRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamBugBotRequest {
    return new _StreamBugBotRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamBugBotRequest {
    return new _StreamBugBotRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamBugBotRequest | PlainMessage<_StreamBugBotRequest> | undefined | null, b2: _StreamBugBotRequest | PlainMessage<_StreamBugBotRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamBugBotRequest as unknown as MessageType<_StreamBugBotRequest>, a, b2);
  }
})();
export type StreamBugBotRequest = InstanceType<typeof StreamBugBotRequest$Runtime>;
var StreamBugBotRequest: MessageType<StreamBugBotRequest> = StreamBugBotRequest$Runtime as unknown as MessageType<StreamBugBotRequest>;
(StreamBugBotRequest as MutableMessageType<StreamBugBotRequest>).runtime = proto3;
(StreamBugBotRequest as MutableMessageType<StreamBugBotRequest>).typeName = "aiserver.v1.StreamBugBotRequest";
(StreamBugBotRequest as MutableMessageType<StreamBugBotRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "git_diff", kind: "message", T: GitDiff },
  { no: 13, name: "context_files", kind: "message", T: CodeBlock, repeated: true },
  { no: 2, name: "model_details", kind: "message", T: ModelDetails },
  { no: 3, name: "user_instructions", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "bug_detection_guidelines", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "iterations", kind: "scalar", T: 5, opt: true },
  { no: 12, name: "unified_context_lines", kind: "scalar", T: 5, opt: true },
  {
    no: 6,
    name: "in_background_subsidized",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "session_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "price_id", kind: "scalar", T: 9, opt: true },
  {
    no: 9,
    name: "has_telemetry",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 10, name: "constrain_to_file", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "constrain_to_range", kind: "message", T: StreamBugBotRequest_Range, opt: true },
  { no: 14, name: "deep_review", kind: "scalar", T: 8, opt: true }
]);
var StreamBugBotRequest_Range$Runtime = (() => class _StreamBugBotRequest_Range extends Message<_StreamBugBotRequest_Range> {
  declare startLine: number;
  declare endLineInclusive: number;
  constructor(data?: PartialMessage<_StreamBugBotRequest_Range>) {
    super();
    this.startLine = 0;
    this.endLineInclusive = 0;
    proto3.util.initPartial(data, this as _StreamBugBotRequest_Range);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamBugBotRequest_Range {
    return new _StreamBugBotRequest_Range().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamBugBotRequest_Range {
    return new _StreamBugBotRequest_Range().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamBugBotRequest_Range {
    return new _StreamBugBotRequest_Range().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamBugBotRequest_Range | PlainMessage<_StreamBugBotRequest_Range> | undefined | null, b2: _StreamBugBotRequest_Range | PlainMessage<_StreamBugBotRequest_Range> | undefined | null): boolean {
    return proto3.util.equals(_StreamBugBotRequest_Range as unknown as MessageType<_StreamBugBotRequest_Range>, a, b2);
  }
})();
export type StreamBugBotRequest_Range = InstanceType<typeof StreamBugBotRequest_Range$Runtime>;
var StreamBugBotRequest_Range: MessageType<StreamBugBotRequest_Range> = StreamBugBotRequest_Range$Runtime as unknown as MessageType<StreamBugBotRequest_Range>;
(StreamBugBotRequest_Range as MutableMessageType<StreamBugBotRequest_Range>).runtime = proto3;
(StreamBugBotRequest_Range as MutableMessageType<StreamBugBotRequest_Range>).typeName = "aiserver.v1.StreamBugBotRequest.Range";
(StreamBugBotRequest_Range as MutableMessageType<StreamBugBotRequest_Range>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var FileAndOutline$Runtime = (() => class _FileAndOutline extends Message<_FileAndOutline> {
  declare file?: CodeBlock;
  declare outline?: string;
  constructor(data?: PartialMessage<_FileAndOutline>) {
    super();
    proto3.util.initPartial(data, this as _FileAndOutline);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileAndOutline {
    return new _FileAndOutline().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileAndOutline {
    return new _FileAndOutline().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileAndOutline {
    return new _FileAndOutline().fromJsonString(jsonString, options);
  }
  static equals(a: _FileAndOutline | PlainMessage<_FileAndOutline> | undefined | null, b2: _FileAndOutline | PlainMessage<_FileAndOutline> | undefined | null): boolean {
    return proto3.util.equals(_FileAndOutline as unknown as MessageType<_FileAndOutline>, a, b2);
  }
})();
export type FileAndOutline = InstanceType<typeof FileAndOutline$Runtime>;
var FileAndOutline: MessageType<FileAndOutline> = FileAndOutline$Runtime as unknown as MessageType<FileAndOutline>;
(FileAndOutline as MutableMessageType<FileAndOutline>).runtime = proto3;
(FileAndOutline as MutableMessageType<FileAndOutline>).typeName = "aiserver.v1.FileAndOutline";
(FileAndOutline as MutableMessageType<FileAndOutline>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file", kind: "message", T: CodeBlock },
  { no: 2, name: "outline", kind: "scalar", T: 9, opt: true }
]);
var RunBugBotPromptProps$Runtime = (() => class _RunBugBotPromptProps extends Message<_RunBugBotPromptProps> {
  declare req?: StreamBugBotRequest;
  declare seed: string;
  declare date: string;
  declare contextFiles: FileAndOutline[];
  declare fileContentSource?: string;
  constructor(data?: PartialMessage<_RunBugBotPromptProps>) {
    super();
    this.seed = "";
    this.date = "";
    this.contextFiles = [];
    proto3.util.initPartial(data, this as _RunBugBotPromptProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunBugBotPromptProps {
    return new _RunBugBotPromptProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunBugBotPromptProps {
    return new _RunBugBotPromptProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunBugBotPromptProps {
    return new _RunBugBotPromptProps().fromJsonString(jsonString, options);
  }
  static equals(a: _RunBugBotPromptProps | PlainMessage<_RunBugBotPromptProps> | undefined | null, b2: _RunBugBotPromptProps | PlainMessage<_RunBugBotPromptProps> | undefined | null): boolean {
    return proto3.util.equals(_RunBugBotPromptProps as unknown as MessageType<_RunBugBotPromptProps>, a, b2);
  }
})();
export type RunBugBotPromptProps = InstanceType<typeof RunBugBotPromptProps$Runtime>;
var RunBugBotPromptProps: MessageType<RunBugBotPromptProps> = RunBugBotPromptProps$Runtime as unknown as MessageType<RunBugBotPromptProps>;
(RunBugBotPromptProps as MutableMessageType<RunBugBotPromptProps>).runtime = proto3;
(RunBugBotPromptProps as MutableMessageType<RunBugBotPromptProps>).typeName = "aiserver.v1.RunBugBotPromptProps";
(RunBugBotPromptProps as MutableMessageType<RunBugBotPromptProps>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "req", kind: "message", T: StreamBugBotRequest },
  {
    no: 2,
    name: "seed",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "context_files", kind: "message", T: FileAndOutline, repeated: true },
  { no: 5, name: "file_content_source", kind: "scalar", T: 9, opt: true }
]);
var BugBotDiscriminatorPromptProps$Runtime = (() => class _BugBotDiscriminatorPromptProps extends Message<_BugBotDiscriminatorPromptProps> {
  declare req?: StreamBugBotRequest;
  declare bug?: BugReport;
  declare date: string;
  declare seed: string;
  constructor(data?: PartialMessage<_BugBotDiscriminatorPromptProps>) {
    super();
    this.date = "";
    this.seed = "";
    proto3.util.initPartial(data, this as _BugBotDiscriminatorPromptProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotDiscriminatorPromptProps {
    return new _BugBotDiscriminatorPromptProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotDiscriminatorPromptProps {
    return new _BugBotDiscriminatorPromptProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotDiscriminatorPromptProps {
    return new _BugBotDiscriminatorPromptProps().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotDiscriminatorPromptProps | PlainMessage<_BugBotDiscriminatorPromptProps> | undefined | null, b2: _BugBotDiscriminatorPromptProps | PlainMessage<_BugBotDiscriminatorPromptProps> | undefined | null): boolean {
    return proto3.util.equals(_BugBotDiscriminatorPromptProps as unknown as MessageType<_BugBotDiscriminatorPromptProps>, a, b2);
  }
})();
export type BugBotDiscriminatorPromptProps = InstanceType<typeof BugBotDiscriminatorPromptProps$Runtime>;
var BugBotDiscriminatorPromptProps: MessageType<BugBotDiscriminatorPromptProps> = BugBotDiscriminatorPromptProps$Runtime as unknown as MessageType<BugBotDiscriminatorPromptProps>;
(BugBotDiscriminatorPromptProps as MutableMessageType<BugBotDiscriminatorPromptProps>).runtime = proto3;
(BugBotDiscriminatorPromptProps as MutableMessageType<BugBotDiscriminatorPromptProps>).typeName = "aiserver.v1.BugBotDiscriminatorPromptProps";
(BugBotDiscriminatorPromptProps as MutableMessageType<BugBotDiscriminatorPromptProps>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "req", kind: "message", T: StreamBugBotRequest },
  { no: 2, name: "bug", kind: "message", T: BugReport },
  {
    no: 3,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "seed",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BugBotDiscriminatorTrainingPromptProps$Runtime = (() => class _BugBotDiscriminatorTrainingPromptProps extends Message<_BugBotDiscriminatorTrainingPromptProps> {
  declare props?: BugBotDiscriminatorPromptProps;
  declare isRealBug: boolean;
  constructor(data?: PartialMessage<_BugBotDiscriminatorTrainingPromptProps>) {
    super();
    this.isRealBug = false;
    proto3.util.initPartial(data, this as _BugBotDiscriminatorTrainingPromptProps);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BugBotDiscriminatorTrainingPromptProps {
    return new _BugBotDiscriminatorTrainingPromptProps().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BugBotDiscriminatorTrainingPromptProps {
    return new _BugBotDiscriminatorTrainingPromptProps().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BugBotDiscriminatorTrainingPromptProps {
    return new _BugBotDiscriminatorTrainingPromptProps().fromJsonString(jsonString, options);
  }
  static equals(a: _BugBotDiscriminatorTrainingPromptProps | PlainMessage<_BugBotDiscriminatorTrainingPromptProps> | undefined | null, b2: _BugBotDiscriminatorTrainingPromptProps | PlainMessage<_BugBotDiscriminatorTrainingPromptProps> | undefined | null): boolean {
    return proto3.util.equals(_BugBotDiscriminatorTrainingPromptProps as unknown as MessageType<_BugBotDiscriminatorTrainingPromptProps>, a, b2);
  }
})();
export type BugBotDiscriminatorTrainingPromptProps = InstanceType<typeof BugBotDiscriminatorTrainingPromptProps$Runtime>;
var BugBotDiscriminatorTrainingPromptProps: MessageType<BugBotDiscriminatorTrainingPromptProps> = BugBotDiscriminatorTrainingPromptProps$Runtime as unknown as MessageType<BugBotDiscriminatorTrainingPromptProps>;
(BugBotDiscriminatorTrainingPromptProps as MutableMessageType<BugBotDiscriminatorTrainingPromptProps>).runtime = proto3;
(BugBotDiscriminatorTrainingPromptProps as MutableMessageType<BugBotDiscriminatorTrainingPromptProps>).typeName = "aiserver.v1.BugBotDiscriminatorTrainingPromptProps";
(BugBotDiscriminatorTrainingPromptProps as MutableMessageType<BugBotDiscriminatorTrainingPromptProps>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "props", kind: "message", T: BugBotDiscriminatorPromptProps },
  {
    no: 2,
    name: "is_real_bug",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var LogDeeplinkEventRequest$Runtime = (() => class _LogDeeplinkEventRequest extends Message<_LogDeeplinkEventRequest> {
  declare userId: number;
  declare bugId: string;
  declare commentId?: bigint;
  declare event: BugbotDeeplinkEventKind;
  constructor(data?: PartialMessage<_LogDeeplinkEventRequest>) {
    super();
    this.userId = 0;
    this.bugId = "";
    this.event = BugbotDeeplinkEventKind.UNSPECIFIED;
    proto3.util.initPartial(data, this as _LogDeeplinkEventRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LogDeeplinkEventRequest {
    return new _LogDeeplinkEventRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LogDeeplinkEventRequest {
    return new _LogDeeplinkEventRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LogDeeplinkEventRequest {
    return new _LogDeeplinkEventRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LogDeeplinkEventRequest | PlainMessage<_LogDeeplinkEventRequest> | undefined | null, b2: _LogDeeplinkEventRequest | PlainMessage<_LogDeeplinkEventRequest> | undefined | null): boolean {
    return proto3.util.equals(_LogDeeplinkEventRequest as unknown as MessageType<_LogDeeplinkEventRequest>, a, b2);
  }
})();
export type LogDeeplinkEventRequest = InstanceType<typeof LogDeeplinkEventRequest$Runtime>;
var LogDeeplinkEventRequest: MessageType<LogDeeplinkEventRequest> = LogDeeplinkEventRequest$Runtime as unknown as MessageType<LogDeeplinkEventRequest>;
(LogDeeplinkEventRequest as MutableMessageType<LogDeeplinkEventRequest>).runtime = proto3;
(LogDeeplinkEventRequest as MutableMessageType<LogDeeplinkEventRequest>).typeName = "aiserver.v1.LogDeeplinkEventRequest";
(LogDeeplinkEventRequest as MutableMessageType<LogDeeplinkEventRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "bug_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "comment_id", kind: "scalar", T: 3, opt: true },
  { no: 4, name: "event", kind: "enum", T: proto3.getEnumType(BugbotDeeplinkEventKind) }
]);
var LogDeeplinkEventResponse$Runtime = (() => class _LogDeeplinkEventResponse extends Message<_LogDeeplinkEventResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_LogDeeplinkEventResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _LogDeeplinkEventResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LogDeeplinkEventResponse {
    return new _LogDeeplinkEventResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LogDeeplinkEventResponse {
    return new _LogDeeplinkEventResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LogDeeplinkEventResponse {
    return new _LogDeeplinkEventResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LogDeeplinkEventResponse | PlainMessage<_LogDeeplinkEventResponse> | undefined | null, b2: _LogDeeplinkEventResponse | PlainMessage<_LogDeeplinkEventResponse> | undefined | null): boolean {
    return proto3.util.equals(_LogDeeplinkEventResponse as unknown as MessageType<_LogDeeplinkEventResponse>, a, b2);
  }
})();
export type LogDeeplinkEventResponse = InstanceType<typeof LogDeeplinkEventResponse$Runtime>;
var LogDeeplinkEventResponse: MessageType<LogDeeplinkEventResponse> = LogDeeplinkEventResponse$Runtime as unknown as MessageType<LogDeeplinkEventResponse>;
(LogDeeplinkEventResponse as MutableMessageType<LogDeeplinkEventResponse>).runtime = proto3;
(LogDeeplinkEventResponse as MutableMessageType<LogDeeplinkEventResponse>).typeName = "aiserver.v1.LogDeeplinkEventResponse";
(LogDeeplinkEventResponse as MutableMessageType<LogDeeplinkEventResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetEncryptedBugDataRequest$Runtime = (() => class _GetEncryptedBugDataRequest extends Message<_GetEncryptedBugDataRequest> {
  declare redisKey: string;
  declare encryptionKey: string;
  constructor(data?: PartialMessage<_GetEncryptedBugDataRequest>) {
    super();
    this.redisKey = "";
    this.encryptionKey = "";
    proto3.util.initPartial(data, this as _GetEncryptedBugDataRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEncryptedBugDataRequest {
    return new _GetEncryptedBugDataRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataRequest {
    return new _GetEncryptedBugDataRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataRequest {
    return new _GetEncryptedBugDataRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEncryptedBugDataRequest | PlainMessage<_GetEncryptedBugDataRequest> | undefined | null, b2: _GetEncryptedBugDataRequest | PlainMessage<_GetEncryptedBugDataRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetEncryptedBugDataRequest as unknown as MessageType<_GetEncryptedBugDataRequest>, a, b2);
  }
})();
export type GetEncryptedBugDataRequest = InstanceType<typeof GetEncryptedBugDataRequest$Runtime>;
var GetEncryptedBugDataRequest: MessageType<GetEncryptedBugDataRequest> = GetEncryptedBugDataRequest$Runtime as unknown as MessageType<GetEncryptedBugDataRequest>;
(GetEncryptedBugDataRequest as MutableMessageType<GetEncryptedBugDataRequest>).runtime = proto3;
(GetEncryptedBugDataRequest as MutableMessageType<GetEncryptedBugDataRequest>).typeName = "aiserver.v1.GetEncryptedBugDataRequest";
(GetEncryptedBugDataRequest as MutableMessageType<GetEncryptedBugDataRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "redis_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "encryption_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetEncryptedBugDataResponse$Runtime = (() => class _GetEncryptedBugDataResponse extends Message<_GetEncryptedBugDataResponse> {
  declare bugReport?: BugReport;
  constructor(data?: PartialMessage<_GetEncryptedBugDataResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetEncryptedBugDataResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEncryptedBugDataResponse {
    return new _GetEncryptedBugDataResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataResponse {
    return new _GetEncryptedBugDataResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataResponse {
    return new _GetEncryptedBugDataResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEncryptedBugDataResponse | PlainMessage<_GetEncryptedBugDataResponse> | undefined | null, b2: _GetEncryptedBugDataResponse | PlainMessage<_GetEncryptedBugDataResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetEncryptedBugDataResponse as unknown as MessageType<_GetEncryptedBugDataResponse>, a, b2);
  }
})();
export type GetEncryptedBugDataResponse = InstanceType<typeof GetEncryptedBugDataResponse$Runtime>;
var GetEncryptedBugDataResponse: MessageType<GetEncryptedBugDataResponse> = GetEncryptedBugDataResponse$Runtime as unknown as MessageType<GetEncryptedBugDataResponse>;
(GetEncryptedBugDataResponse as MutableMessageType<GetEncryptedBugDataResponse>).runtime = proto3;
(GetEncryptedBugDataResponse as MutableMessageType<GetEncryptedBugDataResponse>).typeName = "aiserver.v1.GetEncryptedBugDataResponse";
(GetEncryptedBugDataResponse as MutableMessageType<GetEncryptedBugDataResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_report", kind: "message", T: BugReport }
]);
var GetEncryptedBugDataMultipleRequest$Runtime = (() => class _GetEncryptedBugDataMultipleRequest extends Message<_GetEncryptedBugDataMultipleRequest> {
  declare redisKey: string;
  declare encryptionKey: string;
  constructor(data?: PartialMessage<_GetEncryptedBugDataMultipleRequest>) {
    super();
    this.redisKey = "";
    this.encryptionKey = "";
    proto3.util.initPartial(data, this as _GetEncryptedBugDataMultipleRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEncryptedBugDataMultipleRequest {
    return new _GetEncryptedBugDataMultipleRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataMultipleRequest {
    return new _GetEncryptedBugDataMultipleRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataMultipleRequest {
    return new _GetEncryptedBugDataMultipleRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEncryptedBugDataMultipleRequest | PlainMessage<_GetEncryptedBugDataMultipleRequest> | undefined | null, b2: _GetEncryptedBugDataMultipleRequest | PlainMessage<_GetEncryptedBugDataMultipleRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetEncryptedBugDataMultipleRequest as unknown as MessageType<_GetEncryptedBugDataMultipleRequest>, a, b2);
  }
})();
export type GetEncryptedBugDataMultipleRequest = InstanceType<typeof GetEncryptedBugDataMultipleRequest$Runtime>;
var GetEncryptedBugDataMultipleRequest: MessageType<GetEncryptedBugDataMultipleRequest> = GetEncryptedBugDataMultipleRequest$Runtime as unknown as MessageType<GetEncryptedBugDataMultipleRequest>;
(GetEncryptedBugDataMultipleRequest as MutableMessageType<GetEncryptedBugDataMultipleRequest>).runtime = proto3;
(GetEncryptedBugDataMultipleRequest as MutableMessageType<GetEncryptedBugDataMultipleRequest>).typeName = "aiserver.v1.GetEncryptedBugDataMultipleRequest";
(GetEncryptedBugDataMultipleRequest as MutableMessageType<GetEncryptedBugDataMultipleRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "redis_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "encryption_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetEncryptedBugDataMultipleResponse$Runtime = (() => class _GetEncryptedBugDataMultipleResponse extends Message<_GetEncryptedBugDataMultipleResponse> {
  declare bugReports: BugReport[];
  constructor(data?: PartialMessage<_GetEncryptedBugDataMultipleResponse>) {
    super();
    this.bugReports = [];
    proto3.util.initPartial(data, this as _GetEncryptedBugDataMultipleResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEncryptedBugDataMultipleResponse {
    return new _GetEncryptedBugDataMultipleResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataMultipleResponse {
    return new _GetEncryptedBugDataMultipleResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEncryptedBugDataMultipleResponse {
    return new _GetEncryptedBugDataMultipleResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEncryptedBugDataMultipleResponse | PlainMessage<_GetEncryptedBugDataMultipleResponse> | undefined | null, b2: _GetEncryptedBugDataMultipleResponse | PlainMessage<_GetEncryptedBugDataMultipleResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetEncryptedBugDataMultipleResponse as unknown as MessageType<_GetEncryptedBugDataMultipleResponse>, a, b2);
  }
})();
export type GetEncryptedBugDataMultipleResponse = InstanceType<typeof GetEncryptedBugDataMultipleResponse$Runtime>;
var GetEncryptedBugDataMultipleResponse: MessageType<GetEncryptedBugDataMultipleResponse> = GetEncryptedBugDataMultipleResponse$Runtime as unknown as MessageType<GetEncryptedBugDataMultipleResponse>;
(GetEncryptedBugDataMultipleResponse as MutableMessageType<GetEncryptedBugDataMultipleResponse>).runtime = proto3;
(GetEncryptedBugDataMultipleResponse as MutableMessageType<GetEncryptedBugDataMultipleResponse>).typeName = "aiserver.v1.GetEncryptedBugDataMultipleResponse";
(GetEncryptedBugDataMultipleResponse as MutableMessageType<GetEncryptedBugDataMultipleResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "bug_reports", kind: "message", T: BugReport, repeated: true }
]);
var AddBugbotFeedbackRequest$Runtime = (() => class _AddBugbotFeedbackRequest extends Message<_AddBugbotFeedbackRequest> {
  declare commentId: bigint;
  declare reaction: BugbotFeedbackReaction;
  declare feedback?: string;
  constructor(data?: PartialMessage<_AddBugbotFeedbackRequest>) {
    super();
    this.commentId = protoInt64.zero;
    this.reaction = BugbotFeedbackReaction.UNSPECIFIED;
    proto3.util.initPartial(data, this as _AddBugbotFeedbackRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddBugbotFeedbackRequest {
    return new _AddBugbotFeedbackRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddBugbotFeedbackRequest {
    return new _AddBugbotFeedbackRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddBugbotFeedbackRequest {
    return new _AddBugbotFeedbackRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AddBugbotFeedbackRequest | PlainMessage<_AddBugbotFeedbackRequest> | undefined | null, b2: _AddBugbotFeedbackRequest | PlainMessage<_AddBugbotFeedbackRequest> | undefined | null): boolean {
    return proto3.util.equals(_AddBugbotFeedbackRequest as unknown as MessageType<_AddBugbotFeedbackRequest>, a, b2);
  }
})();
export type AddBugbotFeedbackRequest = InstanceType<typeof AddBugbotFeedbackRequest$Runtime>;
var AddBugbotFeedbackRequest: MessageType<AddBugbotFeedbackRequest> = AddBugbotFeedbackRequest$Runtime as unknown as MessageType<AddBugbotFeedbackRequest>;
(AddBugbotFeedbackRequest as MutableMessageType<AddBugbotFeedbackRequest>).runtime = proto3;
(AddBugbotFeedbackRequest as MutableMessageType<AddBugbotFeedbackRequest>).typeName = "aiserver.v1.AddBugbotFeedbackRequest";
(AddBugbotFeedbackRequest as MutableMessageType<AddBugbotFeedbackRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "comment_id",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 2, name: "reaction", kind: "enum", T: proto3.getEnumType(BugbotFeedbackReaction) },
  { no: 3, name: "feedback", kind: "scalar", T: 9, opt: true }
]);
var AddBugbotFeedbackResponse$Runtime = (() => class _AddBugbotFeedbackResponse extends Message<_AddBugbotFeedbackResponse> {
  declare id: bigint;
  constructor(data?: PartialMessage<_AddBugbotFeedbackResponse>) {
    super();
    this.id = protoInt64.zero;
    proto3.util.initPartial(data, this as _AddBugbotFeedbackResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddBugbotFeedbackResponse {
    return new _AddBugbotFeedbackResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddBugbotFeedbackResponse {
    return new _AddBugbotFeedbackResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddBugbotFeedbackResponse {
    return new _AddBugbotFeedbackResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AddBugbotFeedbackResponse | PlainMessage<_AddBugbotFeedbackResponse> | undefined | null, b2: _AddBugbotFeedbackResponse | PlainMessage<_AddBugbotFeedbackResponse> | undefined | null): boolean {
    return proto3.util.equals(_AddBugbotFeedbackResponse as unknown as MessageType<_AddBugbotFeedbackResponse>, a, b2);
  }
})();
export type AddBugbotFeedbackResponse = InstanceType<typeof AddBugbotFeedbackResponse$Runtime>;
var AddBugbotFeedbackResponse: MessageType<AddBugbotFeedbackResponse> = AddBugbotFeedbackResponse$Runtime as unknown as MessageType<AddBugbotFeedbackResponse>;
(AddBugbotFeedbackResponse as MutableMessageType<AddBugbotFeedbackResponse>).runtime = proto3;
(AddBugbotFeedbackResponse as MutableMessageType<AddBugbotFeedbackResponse>).typeName = "aiserver.v1.AddBugbotFeedbackResponse";
(AddBugbotFeedbackResponse as MutableMessageType<AddBugbotFeedbackResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var GetBugBotRunEtaRequest$Runtime = (() => class _GetBugBotRunEtaRequest extends Message<_GetBugBotRunEtaRequest> {
  declare repositoryOwner: string;
  declare repositoryName: string;
  declare prNumber: number;
  constructor(data?: PartialMessage<_GetBugBotRunEtaRequest>) {
    super();
    this.repositoryOwner = "";
    this.repositoryName = "";
    this.prNumber = 0;
    proto3.util.initPartial(data, this as _GetBugBotRunEtaRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetBugBotRunEtaRequest {
    return new _GetBugBotRunEtaRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetBugBotRunEtaRequest {
    return new _GetBugBotRunEtaRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetBugBotRunEtaRequest {
    return new _GetBugBotRunEtaRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetBugBotRunEtaRequest | PlainMessage<_GetBugBotRunEtaRequest> | undefined | null, b2: _GetBugBotRunEtaRequest | PlainMessage<_GetBugBotRunEtaRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetBugBotRunEtaRequest as unknown as MessageType<_GetBugBotRunEtaRequest>, a, b2);
  }
})();
export type GetBugBotRunEtaRequest = InstanceType<typeof GetBugBotRunEtaRequest$Runtime>;
var GetBugBotRunEtaRequest: MessageType<GetBugBotRunEtaRequest> = GetBugBotRunEtaRequest$Runtime as unknown as MessageType<GetBugBotRunEtaRequest>;
(GetBugBotRunEtaRequest as MutableMessageType<GetBugBotRunEtaRequest>).runtime = proto3;
(GetBugBotRunEtaRequest as MutableMessageType<GetBugBotRunEtaRequest>).typeName = "aiserver.v1.GetBugBotRunEtaRequest";
(GetBugBotRunEtaRequest as MutableMessageType<GetBugBotRunEtaRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repository_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "repository_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetBugBotRunEtaResponse$Runtime = (() => class _GetBugBotRunEtaResponse extends Message<_GetBugBotRunEtaResponse> {
  declare status: BugBotRunStatus;
  declare estimatedCompletionTimeMs?: bigint;
  constructor(data?: PartialMessage<_GetBugBotRunEtaResponse>) {
    super();
    this.status = BugBotRunStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _GetBugBotRunEtaResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetBugBotRunEtaResponse {
    return new _GetBugBotRunEtaResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetBugBotRunEtaResponse {
    return new _GetBugBotRunEtaResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetBugBotRunEtaResponse {
    return new _GetBugBotRunEtaResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetBugBotRunEtaResponse | PlainMessage<_GetBugBotRunEtaResponse> | undefined | null, b2: _GetBugBotRunEtaResponse | PlainMessage<_GetBugBotRunEtaResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetBugBotRunEtaResponse as unknown as MessageType<_GetBugBotRunEtaResponse>, a, b2);
  }
})();
export type GetBugBotRunEtaResponse = InstanceType<typeof GetBugBotRunEtaResponse$Runtime>;
var GetBugBotRunEtaResponse: MessageType<GetBugBotRunEtaResponse> = GetBugBotRunEtaResponse$Runtime as unknown as MessageType<GetBugBotRunEtaResponse>;
(GetBugBotRunEtaResponse as MutableMessageType<GetBugBotRunEtaResponse>).runtime = proto3;
(GetBugBotRunEtaResponse as MutableMessageType<GetBugBotRunEtaResponse>).typeName = "aiserver.v1.GetBugBotRunEtaResponse";
(GetBugBotRunEtaResponse as MutableMessageType<GetBugBotRunEtaResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(BugBotRunStatus) },
  { no: 2, name: "estimated_completion_time_ms", kind: "scalar", T: 3, opt: true }
]);


export { BugbotDeeplinkEventKind, BugbotFeedbackReaction, BugBotRunStatus, BugLocation, BugReport, BugReports, StreamBugBotRequest, StreamBugBotRequest_Range, FileAndOutline, RunBugBotPromptProps, BugBotDiscriminatorPromptProps, BugBotDiscriminatorTrainingPromptProps, LogDeeplinkEventRequest, LogDeeplinkEventResponse, GetEncryptedBugDataRequest, GetEncryptedBugDataResponse, GetEncryptedBugDataMultipleRequest, GetEncryptedBugDataMultipleResponse, AddBugbotFeedbackRequest, AddBugbotFeedbackResponse, GetBugBotRunEtaRequest, GetBugBotRunEtaResponse };
