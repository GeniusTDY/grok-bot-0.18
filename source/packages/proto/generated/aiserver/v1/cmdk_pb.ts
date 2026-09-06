/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:179087-180129
 * Region SHA-256: e5a1e2275fe6f5ee41d6cf528bd4640c734b43ee414ba9f19131e07f6254b36e
 * AI Server closure exports: 32 messages + 0 enums = 32
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { PotentiallyCachedContextItem, ContextStatusUpdate, MissingContextItems } from "./context_pb.js";
import { FileDiff, CmdKDebugInfo, CodeBlock, ModelDetails, CursorRule2, ExplicitContext, ImageProto2, CmdKExternalLink } from "./utils_pb.js";
import { CppFileDiffHistory } from "./cpp_pb.js";
import { StatusUpdate, Commit } from "./chat_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var RerankCmdKContextRequest$Runtime = (() => class _RerankCmdKContextRequest extends Message<_RerankCmdKContextRequest> {
  declare contextItems: PotentiallyCachedContextItem[];
  declare legacyContext?: CmdKLegacyContext;
  declare cmdKOptions?: CmdKOptions;
  constructor(data?: PartialMessage<_RerankCmdKContextRequest>) {
    super();
    this.contextItems = [];
    proto3.util.initPartial(data, this as _RerankCmdKContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankCmdKContextRequest {
    return new _RerankCmdKContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankCmdKContextRequest {
    return new _RerankCmdKContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankCmdKContextRequest {
    return new _RerankCmdKContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankCmdKContextRequest | PlainMessage<_RerankCmdKContextRequest> | undefined | null, b2: _RerankCmdKContextRequest | PlainMessage<_RerankCmdKContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_RerankCmdKContextRequest as unknown as MessageType<_RerankCmdKContextRequest>, a, b2);
  }
})();
export type RerankCmdKContextRequest = InstanceType<typeof RerankCmdKContextRequest$Runtime>;
var RerankCmdKContextRequest: MessageType<RerankCmdKContextRequest> = RerankCmdKContextRequest$Runtime as unknown as MessageType<RerankCmdKContextRequest>;
(RerankCmdKContextRequest as MutableMessageType<RerankCmdKContextRequest>).runtime = proto3;
(RerankCmdKContextRequest as MutableMessageType<RerankCmdKContextRequest>).typeName = "aiserver.v1.RerankCmdKContextRequest";
(RerankCmdKContextRequest as MutableMessageType<RerankCmdKContextRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  { no: 3, name: "legacy_context", kind: "message", T: CmdKLegacyContext },
  { no: 2, name: "cmd_k_options", kind: "message", T: CmdKOptions }
]);
var RerankCmdKContextResponse$Runtime = (() => class _RerankCmdKContextResponse extends Message<_RerankCmdKContextResponse> {
  declare didCall?: boolean;
  declare response: { case: "contextStatusUpdate"; value: ContextStatusUpdate } | { case: "missingContextItems"; value: MissingContextItems } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RerankCmdKContextResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _RerankCmdKContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankCmdKContextResponse {
    return new _RerankCmdKContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankCmdKContextResponse {
    return new _RerankCmdKContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankCmdKContextResponse {
    return new _RerankCmdKContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankCmdKContextResponse | PlainMessage<_RerankCmdKContextResponse> | undefined | null, b2: _RerankCmdKContextResponse | PlainMessage<_RerankCmdKContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_RerankCmdKContextResponse as unknown as MessageType<_RerankCmdKContextResponse>, a, b2);
  }
})();
export type RerankCmdKContextResponse = InstanceType<typeof RerankCmdKContextResponse$Runtime>;
var RerankCmdKContextResponse: MessageType<RerankCmdKContextResponse> = RerankCmdKContextResponse$Runtime as unknown as MessageType<RerankCmdKContextResponse>;
(RerankCmdKContextResponse as MutableMessageType<RerankCmdKContextResponse>).runtime = proto3;
(RerankCmdKContextResponse as MutableMessageType<RerankCmdKContextResponse>).typeName = "aiserver.v1.RerankCmdKContextResponse";
(RerankCmdKContextResponse as MutableMessageType<RerankCmdKContextResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_status_update", kind: "message", T: ContextStatusUpdate, oneof: "response" },
  { no: 2, name: "missing_context_items", kind: "message", T: MissingContextItems, oneof: "response" },
  { no: 3, name: "did_call", kind: "scalar", T: 8, opt: true }
]);
var RerankTerminalCmdKContextRequest$Runtime = (() => class _RerankTerminalCmdKContextRequest extends Message<_RerankTerminalCmdKContextRequest> {
  declare contextItems: PotentiallyCachedContextItem[];
  declare cmdKOptions?: TerminalCmdKOptions;
  constructor(data?: PartialMessage<_RerankTerminalCmdKContextRequest>) {
    super();
    this.contextItems = [];
    proto3.util.initPartial(data, this as _RerankTerminalCmdKContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankTerminalCmdKContextRequest {
    return new _RerankTerminalCmdKContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankTerminalCmdKContextRequest {
    return new _RerankTerminalCmdKContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankTerminalCmdKContextRequest {
    return new _RerankTerminalCmdKContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankTerminalCmdKContextRequest | PlainMessage<_RerankTerminalCmdKContextRequest> | undefined | null, b2: _RerankTerminalCmdKContextRequest | PlainMessage<_RerankTerminalCmdKContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_RerankTerminalCmdKContextRequest as unknown as MessageType<_RerankTerminalCmdKContextRequest>, a, b2);
  }
})();
export type RerankTerminalCmdKContextRequest = InstanceType<typeof RerankTerminalCmdKContextRequest$Runtime>;
var RerankTerminalCmdKContextRequest: MessageType<RerankTerminalCmdKContextRequest> = RerankTerminalCmdKContextRequest$Runtime as unknown as MessageType<RerankTerminalCmdKContextRequest>;
(RerankTerminalCmdKContextRequest as MutableMessageType<RerankTerminalCmdKContextRequest>).runtime = proto3;
(RerankTerminalCmdKContextRequest as MutableMessageType<RerankTerminalCmdKContextRequest>).typeName = "aiserver.v1.RerankTerminalCmdKContextRequest";
(RerankTerminalCmdKContextRequest as MutableMessageType<RerankTerminalCmdKContextRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  { no: 2, name: "cmd_k_options", kind: "message", T: TerminalCmdKOptions }
]);
var RerankTerminalCmdKContextResponse$Runtime = (() => class _RerankTerminalCmdKContextResponse extends Message<_RerankTerminalCmdKContextResponse> {
  declare response: { case: "contextStatusUpdate"; value: ContextStatusUpdate } | { case: "missingContextItems"; value: MissingContextItems } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RerankTerminalCmdKContextResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _RerankTerminalCmdKContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RerankTerminalCmdKContextResponse {
    return new _RerankTerminalCmdKContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RerankTerminalCmdKContextResponse {
    return new _RerankTerminalCmdKContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RerankTerminalCmdKContextResponse {
    return new _RerankTerminalCmdKContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RerankTerminalCmdKContextResponse | PlainMessage<_RerankTerminalCmdKContextResponse> | undefined | null, b2: _RerankTerminalCmdKContextResponse | PlainMessage<_RerankTerminalCmdKContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_RerankTerminalCmdKContextResponse as unknown as MessageType<_RerankTerminalCmdKContextResponse>, a, b2);
  }
})();
export type RerankTerminalCmdKContextResponse = InstanceType<typeof RerankTerminalCmdKContextResponse$Runtime>;
var RerankTerminalCmdKContextResponse: MessageType<RerankTerminalCmdKContextResponse> = RerankTerminalCmdKContextResponse$Runtime as unknown as MessageType<RerankTerminalCmdKContextResponse>;
(RerankTerminalCmdKContextResponse as MutableMessageType<RerankTerminalCmdKContextResponse>).runtime = proto3;
(RerankTerminalCmdKContextResponse as MutableMessageType<RerankTerminalCmdKContextResponse>).typeName = "aiserver.v1.RerankTerminalCmdKContextResponse";
(RerankTerminalCmdKContextResponse as MutableMessageType<RerankTerminalCmdKContextResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_status_update", kind: "message", T: ContextStatusUpdate, oneof: "response" },
  { no: 2, name: "missing_context_items", kind: "message", T: MissingContextItems, oneof: "response" }
]);
var TerminalCmdKOptions$Runtime = (() => class _TerminalCmdKOptions extends Message<_TerminalCmdKOptions> {
  declare modelDetails?: ModelDetails;
  declare chatMode: boolean;
  declare adaCmdKContext: boolean;
  declare useWeb?: boolean;
  constructor(data?: PartialMessage<_TerminalCmdKOptions>) {
    super();
    this.chatMode = false;
    this.adaCmdKContext = false;
    proto3.util.initPartial(data, this as _TerminalCmdKOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TerminalCmdKOptions {
    return new _TerminalCmdKOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TerminalCmdKOptions {
    return new _TerminalCmdKOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TerminalCmdKOptions {
    return new _TerminalCmdKOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _TerminalCmdKOptions | PlainMessage<_TerminalCmdKOptions> | undefined | null, b2: _TerminalCmdKOptions | PlainMessage<_TerminalCmdKOptions> | undefined | null): boolean {
    return proto3.util.equals(_TerminalCmdKOptions as unknown as MessageType<_TerminalCmdKOptions>, a, b2);
  }
})();
export type TerminalCmdKOptions = InstanceType<typeof TerminalCmdKOptions$Runtime>;
var TerminalCmdKOptions: MessageType<TerminalCmdKOptions> = TerminalCmdKOptions$Runtime as unknown as MessageType<TerminalCmdKOptions>;
(TerminalCmdKOptions as MutableMessageType<TerminalCmdKOptions>).runtime = proto3;
(TerminalCmdKOptions as MutableMessageType<TerminalCmdKOptions>).typeName = "aiserver.v1.TerminalCmdKOptions";
(TerminalCmdKOptions as MutableMessageType<TerminalCmdKOptions>).fields = proto3.util.newFieldList(() => [
  { no: 3, name: "model_details", kind: "message", T: ModelDetails },
  {
    no: 1,
    name: "chat_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "ada_cmd_k_context",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "use_web", kind: "scalar", T: 8, opt: true }
]);
var CmdKOptions$Runtime = (() => class _CmdKOptions extends Message<_CmdKOptions> {
  declare modelDetails?: ModelDetails;
  declare chatMode: boolean;
  declare adaCmdKContext: boolean;
  declare useReranker?: boolean;
  declare useWeb?: boolean;
  declare requestIsForCaching?: boolean;
  constructor(data?: PartialMessage<_CmdKOptions>) {
    super();
    this.chatMode = false;
    this.adaCmdKContext = false;
    proto3.util.initPartial(data, this as _CmdKOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKOptions {
    return new _CmdKOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKOptions {
    return new _CmdKOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKOptions {
    return new _CmdKOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKOptions | PlainMessage<_CmdKOptions> | undefined | null, b2: _CmdKOptions | PlainMessage<_CmdKOptions> | undefined | null): boolean {
    return proto3.util.equals(_CmdKOptions as unknown as MessageType<_CmdKOptions>, a, b2);
  }
})();
export type CmdKOptions = InstanceType<typeof CmdKOptions$Runtime>;
var CmdKOptions: MessageType<CmdKOptions> = CmdKOptions$Runtime as unknown as MessageType<CmdKOptions>;
(CmdKOptions as MutableMessageType<CmdKOptions>).runtime = proto3;
(CmdKOptions as MutableMessageType<CmdKOptions>).typeName = "aiserver.v1.CmdKOptions";
(CmdKOptions as MutableMessageType<CmdKOptions>).fields = proto3.util.newFieldList(() => [
  { no: 3, name: "model_details", kind: "message", T: ModelDetails },
  {
    no: 1,
    name: "chat_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "ada_cmd_k_context",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "use_reranker", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "use_web", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "request_is_for_caching", kind: "scalar", T: 8, opt: true }
]);
var CmdKUpcomingEdit$Runtime = (() => class _CmdKUpcomingEdit extends Message<_CmdKUpcomingEdit> {
  declare originalLines: string[];
  declare relativePath: string;
  declare extraContextAbove: string[];
  declare extraContextBelow: string[];
  constructor(data?: PartialMessage<_CmdKUpcomingEdit>) {
    super();
    this.originalLines = [];
    this.relativePath = "";
    this.extraContextAbove = [];
    this.extraContextBelow = [];
    proto3.util.initPartial(data, this as _CmdKUpcomingEdit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKUpcomingEdit {
    return new _CmdKUpcomingEdit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKUpcomingEdit {
    return new _CmdKUpcomingEdit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKUpcomingEdit {
    return new _CmdKUpcomingEdit().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKUpcomingEdit | PlainMessage<_CmdKUpcomingEdit> | undefined | null, b2: _CmdKUpcomingEdit | PlainMessage<_CmdKUpcomingEdit> | undefined | null): boolean {
    return proto3.util.equals(_CmdKUpcomingEdit as unknown as MessageType<_CmdKUpcomingEdit>, a, b2);
  }
})();
export type CmdKUpcomingEdit = InstanceType<typeof CmdKUpcomingEdit$Runtime>;
var CmdKUpcomingEdit: MessageType<CmdKUpcomingEdit> = CmdKUpcomingEdit$Runtime as unknown as MessageType<CmdKUpcomingEdit>;
(CmdKUpcomingEdit as MutableMessageType<CmdKUpcomingEdit>).runtime = proto3;
(CmdKUpcomingEdit as MutableMessageType<CmdKUpcomingEdit>).typeName = "aiserver.v1.CmdKUpcomingEdit";
(CmdKUpcomingEdit as MutableMessageType<CmdKUpcomingEdit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "original_lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "extra_context_above", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "extra_context_below", kind: "scalar", T: 9, repeated: true }
]);
var CmdKPreviousEdit$Runtime = (() => class _CmdKPreviousEdit extends Message<_CmdKPreviousEdit> {
  declare originalLines: string[];
  declare newLines: string[];
  declare relativePath: string;
  declare extraContextAbove: string[];
  declare extraContextBelow: string[];
  constructor(data?: PartialMessage<_CmdKPreviousEdit>) {
    super();
    this.originalLines = [];
    this.newLines = [];
    this.relativePath = "";
    this.extraContextAbove = [];
    this.extraContextBelow = [];
    proto3.util.initPartial(data, this as _CmdKPreviousEdit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKPreviousEdit {
    return new _CmdKPreviousEdit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKPreviousEdit {
    return new _CmdKPreviousEdit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKPreviousEdit {
    return new _CmdKPreviousEdit().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKPreviousEdit | PlainMessage<_CmdKPreviousEdit> | undefined | null, b2: _CmdKPreviousEdit | PlainMessage<_CmdKPreviousEdit> | undefined | null): boolean {
    return proto3.util.equals(_CmdKPreviousEdit as unknown as MessageType<_CmdKPreviousEdit>, a, b2);
  }
})();
export type CmdKPreviousEdit = InstanceType<typeof CmdKPreviousEdit$Runtime>;
var CmdKPreviousEdit: MessageType<CmdKPreviousEdit> = CmdKPreviousEdit$Runtime as unknown as MessageType<CmdKPreviousEdit>;
(CmdKPreviousEdit as MutableMessageType<CmdKPreviousEdit>).runtime = proto3;
(CmdKPreviousEdit as MutableMessageType<CmdKPreviousEdit>).typeName = "aiserver.v1.CmdKPreviousEdit";
(CmdKPreviousEdit as MutableMessageType<CmdKPreviousEdit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "original_lines", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "new_lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "extra_context_above", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "extra_context_below", kind: "scalar", T: 9, repeated: true }
]);
var StreamHypermodeRequest$Runtime = (() => class _StreamHypermodeRequest extends Message<_StreamHypermodeRequest> {
  declare contextItems: PotentiallyCachedContextItem[];
  declare cmdKOptions?: CmdKOptions;
  declare cmdKDebugInfo?: CmdKDebugInfo;
  declare sessionId: string;
  declare legacyContext?: CmdKLegacyContext;
  declare previousEdit?: CmdKPreviousEdit;
  declare previousEdits: CmdKPreviousEdit[];
  declare upcomingEdits: CmdKUpcomingEdit[];
  declare useBigCmdkForMultiFileEdit?: boolean;
  declare images: ImageProto2[];
  declare links: CmdKExternalLink[];
  declare diffHistory: CppFileDiffHistory[];
  declare hyperModel?: string;
  declare timingInfo?: TimingInfo;
  constructor(data?: PartialMessage<_StreamHypermodeRequest>) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    this.previousEdits = [];
    this.upcomingEdits = [];
    this.images = [];
    this.links = [];
    this.diffHistory = [];
    proto3.util.initPartial(data, this as _StreamHypermodeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamHypermodeRequest {
    return new _StreamHypermodeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamHypermodeRequest {
    return new _StreamHypermodeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamHypermodeRequest {
    return new _StreamHypermodeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamHypermodeRequest | PlainMessage<_StreamHypermodeRequest> | undefined | null, b2: _StreamHypermodeRequest | PlainMessage<_StreamHypermodeRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamHypermodeRequest as unknown as MessageType<_StreamHypermodeRequest>, a, b2);
  }
})();
export type StreamHypermodeRequest = InstanceType<typeof StreamHypermodeRequest$Runtime>;
var StreamHypermodeRequest: MessageType<StreamHypermodeRequest> = StreamHypermodeRequest$Runtime as unknown as MessageType<StreamHypermodeRequest>;
(StreamHypermodeRequest as MutableMessageType<StreamHypermodeRequest>).runtime = proto3;
(StreamHypermodeRequest as MutableMessageType<StreamHypermodeRequest>).typeName = "aiserver.v1.StreamHypermodeRequest";
(StreamHypermodeRequest as MutableMessageType<StreamHypermodeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  { no: 2, name: "cmd_k_options", kind: "message", T: CmdKOptions },
  { no: 4, name: "cmd_k_debug_info", kind: "message", T: CmdKDebugInfo },
  {
    no: 6,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "legacy_context", kind: "message", T: CmdKLegacyContext },
  { no: 7, name: "previous_edit", kind: "message", T: CmdKPreviousEdit, opt: true },
  { no: 8, name: "previous_edits", kind: "message", T: CmdKPreviousEdit, repeated: true },
  { no: 12, name: "upcoming_edits", kind: "message", T: CmdKUpcomingEdit, repeated: true },
  { no: 9, name: "use_big_cmdk_for_multi_file_edit", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "images", kind: "message", T: ImageProto2, repeated: true },
  { no: 11, name: "links", kind: "message", T: CmdKExternalLink, repeated: true },
  { no: 13, name: "diff_history", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 14, name: "hyper_model", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "timing_info", kind: "message", T: TimingInfo, opt: true }
]);
var StreamCmdKRequest$Runtime = (() => class _StreamCmdKRequest extends Message<_StreamCmdKRequest> {
  declare contextItems: PotentiallyCachedContextItem[];
  declare cmdKOptions?: CmdKOptions;
  declare cmdKDebugInfo?: CmdKDebugInfo;
  declare sessionId: string;
  declare legacyContext?: CmdKLegacyContext;
  declare previousEdit?: CmdKPreviousEdit;
  declare previousEdits: CmdKPreviousEdit[];
  declare upcomingEdits: CmdKUpcomingEdit[];
  declare useBigCmdkForMultiFileEdit?: boolean;
  declare images: ImageProto2[];
  declare links: CmdKExternalLink[];
  declare diffHistory: CppFileDiffHistory[];
  declare diffToBaseBranch?: StreamCmdKRequest_BranchDiff;
  declare timingInfo?: TimingInfo;
  declare rules: CursorRule2[];
  constructor(data?: PartialMessage<_StreamCmdKRequest>) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    this.previousEdits = [];
    this.upcomingEdits = [];
    this.images = [];
    this.links = [];
    this.diffHistory = [];
    this.rules = [];
    proto3.util.initPartial(data, this as _StreamCmdKRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKRequest {
    return new _StreamCmdKRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKRequest {
    return new _StreamCmdKRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKRequest {
    return new _StreamCmdKRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKRequest | PlainMessage<_StreamCmdKRequest> | undefined | null, b2: _StreamCmdKRequest | PlainMessage<_StreamCmdKRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKRequest as unknown as MessageType<_StreamCmdKRequest>, a, b2);
  }
})();
export type StreamCmdKRequest = InstanceType<typeof StreamCmdKRequest$Runtime>;
var StreamCmdKRequest: MessageType<StreamCmdKRequest> = StreamCmdKRequest$Runtime as unknown as MessageType<StreamCmdKRequest>;
(StreamCmdKRequest as MutableMessageType<StreamCmdKRequest>).runtime = proto3;
(StreamCmdKRequest as MutableMessageType<StreamCmdKRequest>).typeName = "aiserver.v1.StreamCmdKRequest";
(StreamCmdKRequest as MutableMessageType<StreamCmdKRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  { no: 2, name: "cmd_k_options", kind: "message", T: CmdKOptions },
  { no: 4, name: "cmd_k_debug_info", kind: "message", T: CmdKDebugInfo },
  {
    no: 6,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "legacy_context", kind: "message", T: CmdKLegacyContext },
  { no: 7, name: "previous_edit", kind: "message", T: CmdKPreviousEdit, opt: true },
  { no: 8, name: "previous_edits", kind: "message", T: CmdKPreviousEdit, repeated: true },
  { no: 12, name: "upcoming_edits", kind: "message", T: CmdKUpcomingEdit, repeated: true },
  { no: 9, name: "use_big_cmdk_for_multi_file_edit", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "images", kind: "message", T: ImageProto2, repeated: true },
  { no: 11, name: "links", kind: "message", T: CmdKExternalLink, repeated: true },
  { no: 13, name: "diff_history", kind: "message", T: CppFileDiffHistory, repeated: true },
  { no: 14, name: "diff_to_base_branch", kind: "message", T: StreamCmdKRequest_BranchDiff, opt: true },
  { no: 15, name: "timing_info", kind: "message", T: TimingInfo, opt: true },
  { no: 16, name: "rules", kind: "message", T: CursorRule2, repeated: true }
]);
var StreamCmdKRequest_BranchDiff$Runtime = (() => class _StreamCmdKRequest_BranchDiff extends Message<_StreamCmdKRequest_BranchDiff> {
  declare fileDiffs: StreamCmdKRequest_BranchDiff_FileDiff[];
  declare commits: Commit[];
  constructor(data?: PartialMessage<_StreamCmdKRequest_BranchDiff>) {
    super();
    this.fileDiffs = [];
    this.commits = [];
    proto3.util.initPartial(data, this as _StreamCmdKRequest_BranchDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKRequest_BranchDiff {
    return new _StreamCmdKRequest_BranchDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKRequest_BranchDiff {
    return new _StreamCmdKRequest_BranchDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKRequest_BranchDiff {
    return new _StreamCmdKRequest_BranchDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKRequest_BranchDiff | PlainMessage<_StreamCmdKRequest_BranchDiff> | undefined | null, b2: _StreamCmdKRequest_BranchDiff | PlainMessage<_StreamCmdKRequest_BranchDiff> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKRequest_BranchDiff as unknown as MessageType<_StreamCmdKRequest_BranchDiff>, a, b2);
  }
})();
export type StreamCmdKRequest_BranchDiff = InstanceType<typeof StreamCmdKRequest_BranchDiff$Runtime>;
var StreamCmdKRequest_BranchDiff: MessageType<StreamCmdKRequest_BranchDiff> = StreamCmdKRequest_BranchDiff$Runtime as unknown as MessageType<StreamCmdKRequest_BranchDiff>;
(StreamCmdKRequest_BranchDiff as MutableMessageType<StreamCmdKRequest_BranchDiff>).runtime = proto3;
(StreamCmdKRequest_BranchDiff as MutableMessageType<StreamCmdKRequest_BranchDiff>).typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff";
(StreamCmdKRequest_BranchDiff as MutableMessageType<StreamCmdKRequest_BranchDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_diffs", kind: "message", T: StreamCmdKRequest_BranchDiff_FileDiff, repeated: true },
  { no: 2, name: "commits", kind: "message", T: Commit, repeated: true }
]);
var StreamCmdKRequest_BranchDiff_FileDiff$Runtime = (() => class _StreamCmdKRequest_BranchDiff_FileDiff extends Message<_StreamCmdKRequest_BranchDiff_FileDiff> {
  declare fileName: string;
  declare diff: string;
  declare tooBig: boolean;
  constructor(data?: PartialMessage<_StreamCmdKRequest_BranchDiff_FileDiff>) {
    super();
    this.fileName = "";
    this.diff = "";
    this.tooBig = false;
    proto3.util.initPartial(data, this as _StreamCmdKRequest_BranchDiff_FileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKRequest_BranchDiff_FileDiff {
    return new _StreamCmdKRequest_BranchDiff_FileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKRequest_BranchDiff_FileDiff {
    return new _StreamCmdKRequest_BranchDiff_FileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKRequest_BranchDiff_FileDiff {
    return new _StreamCmdKRequest_BranchDiff_FileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKRequest_BranchDiff_FileDiff | PlainMessage<_StreamCmdKRequest_BranchDiff_FileDiff> | undefined | null, b2: _StreamCmdKRequest_BranchDiff_FileDiff | PlainMessage<_StreamCmdKRequest_BranchDiff_FileDiff> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKRequest_BranchDiff_FileDiff as unknown as MessageType<_StreamCmdKRequest_BranchDiff_FileDiff>, a, b2);
  }
})();
export type StreamCmdKRequest_BranchDiff_FileDiff = InstanceType<typeof StreamCmdKRequest_BranchDiff_FileDiff$Runtime>;
var StreamCmdKRequest_BranchDiff_FileDiff: MessageType<StreamCmdKRequest_BranchDiff_FileDiff> = StreamCmdKRequest_BranchDiff_FileDiff$Runtime as unknown as MessageType<StreamCmdKRequest_BranchDiff_FileDiff>;
(StreamCmdKRequest_BranchDiff_FileDiff as MutableMessageType<StreamCmdKRequest_BranchDiff_FileDiff>).runtime = proto3;
(StreamCmdKRequest_BranchDiff_FileDiff as MutableMessageType<StreamCmdKRequest_BranchDiff_FileDiff>).typeName = "aiserver.v1.StreamCmdKRequest.BranchDiff.FileDiff";
(StreamCmdKRequest_BranchDiff_FileDiff as MutableMessageType<StreamCmdKRequest_BranchDiff_FileDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "too_big",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TimingInfo$Runtime = (() => class _TimingInfo extends Message<_TimingInfo> {
  declare userInputTime: number;
  declare streamCmdkTime: number;
  constructor(data?: PartialMessage<_TimingInfo>) {
    super();
    this.userInputTime = 0;
    this.streamCmdkTime = 0;
    proto3.util.initPartial(data, this as _TimingInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TimingInfo {
    return new _TimingInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TimingInfo {
    return new _TimingInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TimingInfo {
    return new _TimingInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _TimingInfo | PlainMessage<_TimingInfo> | undefined | null, b2: _TimingInfo | PlainMessage<_TimingInfo> | undefined | null): boolean {
    return proto3.util.equals(_TimingInfo as unknown as MessageType<_TimingInfo>, a, b2);
  }
})();
export type TimingInfo = InstanceType<typeof TimingInfo$Runtime>;
var TimingInfo: MessageType<TimingInfo> = TimingInfo$Runtime as unknown as MessageType<TimingInfo>;
(TimingInfo as MutableMessageType<TimingInfo>).runtime = proto3;
(TimingInfo as MutableMessageType<TimingInfo>).typeName = "aiserver.v1.TimingInfo";
(TimingInfo as MutableMessageType<TimingInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_input_time",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 2,
    name: "stream_cmdk_time",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var StreamTerminalCmdKRequest$Runtime = (() => class _StreamTerminalCmdKRequest extends Message<_StreamTerminalCmdKRequest> {
  declare contextItems: PotentiallyCachedContextItem[];
  declare cmdKOptions?: TerminalCmdKOptions;
  declare sessionId: string;
  declare legacyContext?: CmdKLegacyContext;
  constructor(data?: PartialMessage<_StreamTerminalCmdKRequest>) {
    super();
    this.contextItems = [];
    this.sessionId = "";
    proto3.util.initPartial(data, this as _StreamTerminalCmdKRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKRequest {
    return new _StreamTerminalCmdKRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKRequest {
    return new _StreamTerminalCmdKRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKRequest {
    return new _StreamTerminalCmdKRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKRequest | PlainMessage<_StreamTerminalCmdKRequest> | undefined | null, b2: _StreamTerminalCmdKRequest | PlainMessage<_StreamTerminalCmdKRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKRequest as unknown as MessageType<_StreamTerminalCmdKRequest>, a, b2);
  }
})();
export type StreamTerminalCmdKRequest = InstanceType<typeof StreamTerminalCmdKRequest$Runtime>;
var StreamTerminalCmdKRequest: MessageType<StreamTerminalCmdKRequest> = StreamTerminalCmdKRequest$Runtime as unknown as MessageType<StreamTerminalCmdKRequest>;
(StreamTerminalCmdKRequest as MutableMessageType<StreamTerminalCmdKRequest>).runtime = proto3;
(StreamTerminalCmdKRequest as MutableMessageType<StreamTerminalCmdKRequest>).typeName = "aiserver.v1.StreamTerminalCmdKRequest";
(StreamTerminalCmdKRequest as MutableMessageType<StreamTerminalCmdKRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  { no: 2, name: "cmd_k_options", kind: "message", T: TerminalCmdKOptions },
  {
    no: 6,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "legacy_context", kind: "message", T: CmdKLegacyContext }
]);
var CmdKLegacyContext$Runtime = (() => class _CmdKLegacyContext extends Message<_CmdKLegacyContext> {
  declare explicitContext?: ExplicitContext;
  declare promptCodeBlocks: CodeBlock[];
  declare documentationIdentifiers: string[];
  constructor(data?: PartialMessage<_CmdKLegacyContext>) {
    super();
    this.promptCodeBlocks = [];
    this.documentationIdentifiers = [];
    proto3.util.initPartial(data, this as _CmdKLegacyContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKLegacyContext {
    return new _CmdKLegacyContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKLegacyContext {
    return new _CmdKLegacyContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKLegacyContext {
    return new _CmdKLegacyContext().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKLegacyContext | PlainMessage<_CmdKLegacyContext> | undefined | null, b2: _CmdKLegacyContext | PlainMessage<_CmdKLegacyContext> | undefined | null): boolean {
    return proto3.util.equals(_CmdKLegacyContext as unknown as MessageType<_CmdKLegacyContext>, a, b2);
  }
})();
export type CmdKLegacyContext = InstanceType<typeof CmdKLegacyContext$Runtime>;
var CmdKLegacyContext: MessageType<CmdKLegacyContext> = CmdKLegacyContext$Runtime as unknown as MessageType<CmdKLegacyContext>;
(CmdKLegacyContext as MutableMessageType<CmdKLegacyContext>).runtime = proto3;
(CmdKLegacyContext as MutableMessageType<CmdKLegacyContext>).typeName = "aiserver.v1.CmdKLegacyContext";
(CmdKLegacyContext as MutableMessageType<CmdKLegacyContext>).fields = proto3.util.newFieldList(() => [
  { no: 4, name: "explicit_context", kind: "message", T: ExplicitContext },
  { no: 12, name: "prompt_code_blocks", kind: "message", T: CodeBlock, repeated: true },
  { no: 10, name: "documentation_identifiers", kind: "scalar", T: 9, repeated: true }
]);
var StreamCmdKResponseContextWrapped$Runtime = (() => class _StreamCmdKResponseContextWrapped extends Message<_StreamCmdKResponseContextWrapped> {
  declare response: { case: "realResponse"; value: StreamCmdKResponse } | { case: "contextStatusUpdate"; value: ContextStatusUpdate } | { case: "missingContextItems"; value: MissingContextItems } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamCmdKResponseContextWrapped>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamCmdKResponseContextWrapped);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponseContextWrapped {
    return new _StreamCmdKResponseContextWrapped().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponseContextWrapped {
    return new _StreamCmdKResponseContextWrapped().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponseContextWrapped {
    return new _StreamCmdKResponseContextWrapped().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponseContextWrapped | PlainMessage<_StreamCmdKResponseContextWrapped> | undefined | null, b2: _StreamCmdKResponseContextWrapped | PlainMessage<_StreamCmdKResponseContextWrapped> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponseContextWrapped as unknown as MessageType<_StreamCmdKResponseContextWrapped>, a, b2);
  }
})();
export type StreamCmdKResponseContextWrapped = InstanceType<typeof StreamCmdKResponseContextWrapped$Runtime>;
var StreamCmdKResponseContextWrapped: MessageType<StreamCmdKResponseContextWrapped> = StreamCmdKResponseContextWrapped$Runtime as unknown as MessageType<StreamCmdKResponseContextWrapped>;
(StreamCmdKResponseContextWrapped as MutableMessageType<StreamCmdKResponseContextWrapped>).runtime = proto3;
(StreamCmdKResponseContextWrapped as MutableMessageType<StreamCmdKResponseContextWrapped>).typeName = "aiserver.v1.StreamCmdKResponseContextWrapped";
(StreamCmdKResponseContextWrapped as MutableMessageType<StreamCmdKResponseContextWrapped>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "real_response", kind: "message", T: StreamCmdKResponse, oneof: "response" },
  { no: 2, name: "context_status_update", kind: "message", T: ContextStatusUpdate, oneof: "response" },
  { no: 3, name: "missing_context_items", kind: "message", T: MissingContextItems, oneof: "response" }
]);
var StreamTerminalCmdKResponseContextWrapped$Runtime = (() => class _StreamTerminalCmdKResponseContextWrapped extends Message<_StreamTerminalCmdKResponseContextWrapped> {
  declare response: { case: "realResponse"; value: StreamTerminalCmdKResponse } | { case: "contextStatusUpdate"; value: ContextStatusUpdate } | { case: "missingContextItems"; value: MissingContextItems } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamTerminalCmdKResponseContextWrapped>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamTerminalCmdKResponseContextWrapped);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKResponseContextWrapped {
    return new _StreamTerminalCmdKResponseContextWrapped().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponseContextWrapped {
    return new _StreamTerminalCmdKResponseContextWrapped().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponseContextWrapped {
    return new _StreamTerminalCmdKResponseContextWrapped().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKResponseContextWrapped | PlainMessage<_StreamTerminalCmdKResponseContextWrapped> | undefined | null, b2: _StreamTerminalCmdKResponseContextWrapped | PlainMessage<_StreamTerminalCmdKResponseContextWrapped> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKResponseContextWrapped as unknown as MessageType<_StreamTerminalCmdKResponseContextWrapped>, a, b2);
  }
})();
export type StreamTerminalCmdKResponseContextWrapped = InstanceType<typeof StreamTerminalCmdKResponseContextWrapped$Runtime>;
var StreamTerminalCmdKResponseContextWrapped: MessageType<StreamTerminalCmdKResponseContextWrapped> = StreamTerminalCmdKResponseContextWrapped$Runtime as unknown as MessageType<StreamTerminalCmdKResponseContextWrapped>;
(StreamTerminalCmdKResponseContextWrapped as MutableMessageType<StreamTerminalCmdKResponseContextWrapped>).runtime = proto3;
(StreamTerminalCmdKResponseContextWrapped as MutableMessageType<StreamTerminalCmdKResponseContextWrapped>).typeName = "aiserver.v1.StreamTerminalCmdKResponseContextWrapped";
(StreamTerminalCmdKResponseContextWrapped as MutableMessageType<StreamTerminalCmdKResponseContextWrapped>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "real_response", kind: "message", T: StreamTerminalCmdKResponse, oneof: "response" },
  { no: 2, name: "context_status_update", kind: "message", T: ContextStatusUpdate, oneof: "response" },
  { no: 3, name: "missing_context_items", kind: "message", T: MissingContextItems, oneof: "response" }
]);
var StreamTerminalCmdKResponse$Runtime = (() => class _StreamTerminalCmdKResponse extends Message<_StreamTerminalCmdKResponse> {
  declare response: { case: "terminalCommand"; value: StreamTerminalCmdKResponse_TerminalCommand } | { case: "chat"; value: StreamTerminalCmdKResponse_Chat } | { case: "statusUpdate"; value: StreamTerminalCmdKResponse_StatusUpdate } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamTerminalCmdKResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamTerminalCmdKResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKResponse {
    return new _StreamTerminalCmdKResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse {
    return new _StreamTerminalCmdKResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse {
    return new _StreamTerminalCmdKResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKResponse | PlainMessage<_StreamTerminalCmdKResponse> | undefined | null, b2: _StreamTerminalCmdKResponse | PlainMessage<_StreamTerminalCmdKResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKResponse as unknown as MessageType<_StreamTerminalCmdKResponse>, a, b2);
  }
})();
export type StreamTerminalCmdKResponse = InstanceType<typeof StreamTerminalCmdKResponse$Runtime>;
var StreamTerminalCmdKResponse: MessageType<StreamTerminalCmdKResponse> = StreamTerminalCmdKResponse$Runtime as unknown as MessageType<StreamTerminalCmdKResponse>;
(StreamTerminalCmdKResponse as MutableMessageType<StreamTerminalCmdKResponse>).runtime = proto3;
(StreamTerminalCmdKResponse as MutableMessageType<StreamTerminalCmdKResponse>).typeName = "aiserver.v1.StreamTerminalCmdKResponse";
(StreamTerminalCmdKResponse as MutableMessageType<StreamTerminalCmdKResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "terminal_command", kind: "message", T: StreamTerminalCmdKResponse_TerminalCommand, oneof: "response" },
  { no: 4, name: "chat", kind: "message", T: StreamTerminalCmdKResponse_Chat, oneof: "response" },
  { no: 5, name: "status_update", kind: "message", T: StreamTerminalCmdKResponse_StatusUpdate, oneof: "response" }
]);
var StreamTerminalCmdKResponse_TerminalCommand$Runtime = (() => class _StreamTerminalCmdKResponse_TerminalCommand extends Message<_StreamTerminalCmdKResponse_TerminalCommand> {
  declare partialCommand: string;
  constructor(data?: PartialMessage<_StreamTerminalCmdKResponse_TerminalCommand>) {
    super();
    this.partialCommand = "";
    proto3.util.initPartial(data, this as _StreamTerminalCmdKResponse_TerminalCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKResponse_TerminalCommand {
    return new _StreamTerminalCmdKResponse_TerminalCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_TerminalCommand {
    return new _StreamTerminalCmdKResponse_TerminalCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_TerminalCommand {
    return new _StreamTerminalCmdKResponse_TerminalCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKResponse_TerminalCommand | PlainMessage<_StreamTerminalCmdKResponse_TerminalCommand> | undefined | null, b2: _StreamTerminalCmdKResponse_TerminalCommand | PlainMessage<_StreamTerminalCmdKResponse_TerminalCommand> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKResponse_TerminalCommand as unknown as MessageType<_StreamTerminalCmdKResponse_TerminalCommand>, a, b2);
  }
})();
export type StreamTerminalCmdKResponse_TerminalCommand = InstanceType<typeof StreamTerminalCmdKResponse_TerminalCommand$Runtime>;
var StreamTerminalCmdKResponse_TerminalCommand: MessageType<StreamTerminalCmdKResponse_TerminalCommand> = StreamTerminalCmdKResponse_TerminalCommand$Runtime as unknown as MessageType<StreamTerminalCmdKResponse_TerminalCommand>;
(StreamTerminalCmdKResponse_TerminalCommand as MutableMessageType<StreamTerminalCmdKResponse_TerminalCommand>).runtime = proto3;
(StreamTerminalCmdKResponse_TerminalCommand as MutableMessageType<StreamTerminalCmdKResponse_TerminalCommand>).typeName = "aiserver.v1.StreamTerminalCmdKResponse.TerminalCommand";
(StreamTerminalCmdKResponse_TerminalCommand as MutableMessageType<StreamTerminalCmdKResponse_TerminalCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "partial_command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamTerminalCmdKResponse_Chat$Runtime = (() => class _StreamTerminalCmdKResponse_Chat extends Message<_StreamTerminalCmdKResponse_Chat> {
  declare text: string;
  constructor(data?: PartialMessage<_StreamTerminalCmdKResponse_Chat>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamTerminalCmdKResponse_Chat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKResponse_Chat {
    return new _StreamTerminalCmdKResponse_Chat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_Chat {
    return new _StreamTerminalCmdKResponse_Chat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_Chat {
    return new _StreamTerminalCmdKResponse_Chat().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKResponse_Chat | PlainMessage<_StreamTerminalCmdKResponse_Chat> | undefined | null, b2: _StreamTerminalCmdKResponse_Chat | PlainMessage<_StreamTerminalCmdKResponse_Chat> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKResponse_Chat as unknown as MessageType<_StreamTerminalCmdKResponse_Chat>, a, b2);
  }
})();
export type StreamTerminalCmdKResponse_Chat = InstanceType<typeof StreamTerminalCmdKResponse_Chat$Runtime>;
var StreamTerminalCmdKResponse_Chat: MessageType<StreamTerminalCmdKResponse_Chat> = StreamTerminalCmdKResponse_Chat$Runtime as unknown as MessageType<StreamTerminalCmdKResponse_Chat>;
(StreamTerminalCmdKResponse_Chat as MutableMessageType<StreamTerminalCmdKResponse_Chat>).runtime = proto3;
(StreamTerminalCmdKResponse_Chat as MutableMessageType<StreamTerminalCmdKResponse_Chat>).typeName = "aiserver.v1.StreamTerminalCmdKResponse.Chat";
(StreamTerminalCmdKResponse_Chat as MutableMessageType<StreamTerminalCmdKResponse_Chat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamTerminalCmdKResponse_StatusUpdate$Runtime = (() => class _StreamTerminalCmdKResponse_StatusUpdate extends Message<_StreamTerminalCmdKResponse_StatusUpdate> {
  declare messages: string[];
  constructor(data?: PartialMessage<_StreamTerminalCmdKResponse_StatusUpdate>) {
    super();
    this.messages = [];
    proto3.util.initPartial(data, this as _StreamTerminalCmdKResponse_StatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamTerminalCmdKResponse_StatusUpdate {
    return new _StreamTerminalCmdKResponse_StatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_StatusUpdate {
    return new _StreamTerminalCmdKResponse_StatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamTerminalCmdKResponse_StatusUpdate {
    return new _StreamTerminalCmdKResponse_StatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamTerminalCmdKResponse_StatusUpdate | PlainMessage<_StreamTerminalCmdKResponse_StatusUpdate> | undefined | null, b2: _StreamTerminalCmdKResponse_StatusUpdate | PlainMessage<_StreamTerminalCmdKResponse_StatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_StreamTerminalCmdKResponse_StatusUpdate as unknown as MessageType<_StreamTerminalCmdKResponse_StatusUpdate>, a, b2);
  }
})();
export type StreamTerminalCmdKResponse_StatusUpdate = InstanceType<typeof StreamTerminalCmdKResponse_StatusUpdate$Runtime>;
var StreamTerminalCmdKResponse_StatusUpdate: MessageType<StreamTerminalCmdKResponse_StatusUpdate> = StreamTerminalCmdKResponse_StatusUpdate$Runtime as unknown as MessageType<StreamTerminalCmdKResponse_StatusUpdate>;
(StreamTerminalCmdKResponse_StatusUpdate as MutableMessageType<StreamTerminalCmdKResponse_StatusUpdate>).runtime = proto3;
(StreamTerminalCmdKResponse_StatusUpdate as MutableMessageType<StreamTerminalCmdKResponse_StatusUpdate>).typeName = "aiserver.v1.StreamTerminalCmdKResponse.StatusUpdate";
(StreamTerminalCmdKResponse_StatusUpdate as MutableMessageType<StreamTerminalCmdKResponse_StatusUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "scalar", T: 9, repeated: true }
]);
var StreamCmdKResponse$Runtime = (() => class _StreamCmdKResponse extends Message<_StreamCmdKResponse> {
  declare response: { case: "editStart"; value: StreamCmdKResponse_EditStart } | { case: "editStream"; value: StreamCmdKResponse_EditStream } | { case: "editEnd"; value: StreamCmdKResponse_EditEnd } | { case: "chat"; value: StreamCmdKResponse_Chat } | { case: "statusUpdate"; value: StreamCmdKResponse_StatusUpdate } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamCmdKResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamCmdKResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse {
    return new _StreamCmdKResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse {
    return new _StreamCmdKResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse {
    return new _StreamCmdKResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse | PlainMessage<_StreamCmdKResponse> | undefined | null, b2: _StreamCmdKResponse | PlainMessage<_StreamCmdKResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse as unknown as MessageType<_StreamCmdKResponse>, a, b2);
  }
})();
export type StreamCmdKResponse = InstanceType<typeof StreamCmdKResponse$Runtime>;
var StreamCmdKResponse: MessageType<StreamCmdKResponse> = StreamCmdKResponse$Runtime as unknown as MessageType<StreamCmdKResponse>;
(StreamCmdKResponse as MutableMessageType<StreamCmdKResponse>).runtime = proto3;
(StreamCmdKResponse as MutableMessageType<StreamCmdKResponse>).typeName = "aiserver.v1.StreamCmdKResponse";
(StreamCmdKResponse as MutableMessageType<StreamCmdKResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "edit_start", kind: "message", T: StreamCmdKResponse_EditStart, oneof: "response" },
  { no: 2, name: "edit_stream", kind: "message", T: StreamCmdKResponse_EditStream, oneof: "response" },
  { no: 3, name: "edit_end", kind: "message", T: StreamCmdKResponse_EditEnd, oneof: "response" },
  { no: 4, name: "chat", kind: "message", T: StreamCmdKResponse_Chat, oneof: "response" },
  { no: 5, name: "status_update", kind: "message", T: StreamCmdKResponse_StatusUpdate, oneof: "response" }
]);
var StreamCmdKResponse_EditStart$Runtime = (() => class _StreamCmdKResponse_EditStart extends Message<_StreamCmdKResponse_EditStart> {
  declare startLineNumber: number;
  declare editId: number;
  declare maxEndLineNumberExclusive?: number;
  declare filePath?: string;
  constructor(data?: PartialMessage<_StreamCmdKResponse_EditStart>) {
    super();
    this.startLineNumber = 0;
    this.editId = 0;
    proto3.util.initPartial(data, this as _StreamCmdKResponse_EditStart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse_EditStart {
    return new _StreamCmdKResponse_EditStart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditStart {
    return new _StreamCmdKResponse_EditStart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditStart {
    return new _StreamCmdKResponse_EditStart().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse_EditStart | PlainMessage<_StreamCmdKResponse_EditStart> | undefined | null, b2: _StreamCmdKResponse_EditStart | PlainMessage<_StreamCmdKResponse_EditStart> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse_EditStart as unknown as MessageType<_StreamCmdKResponse_EditStart>, a, b2);
  }
})();
export type StreamCmdKResponse_EditStart = InstanceType<typeof StreamCmdKResponse_EditStart$Runtime>;
var StreamCmdKResponse_EditStart: MessageType<StreamCmdKResponse_EditStart> = StreamCmdKResponse_EditStart$Runtime as unknown as MessageType<StreamCmdKResponse_EditStart>;
(StreamCmdKResponse_EditStart as MutableMessageType<StreamCmdKResponse_EditStart>).runtime = proto3;
(StreamCmdKResponse_EditStart as MutableMessageType<StreamCmdKResponse_EditStart>).typeName = "aiserver.v1.StreamCmdKResponse.EditStart";
(StreamCmdKResponse_EditStart as MutableMessageType<StreamCmdKResponse_EditStart>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "edit_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "max_end_line_number_exclusive", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "file_path", kind: "scalar", T: 9, opt: true }
]);
var StreamCmdKResponse_EditStream$Runtime = (() => class _StreamCmdKResponse_EditStream extends Message<_StreamCmdKResponse_EditStream> {
  declare text: string;
  declare editId: number;
  declare filePath?: string;
  constructor(data?: PartialMessage<_StreamCmdKResponse_EditStream>) {
    super();
    this.text = "";
    this.editId = 0;
    proto3.util.initPartial(data, this as _StreamCmdKResponse_EditStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse_EditStream {
    return new _StreamCmdKResponse_EditStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditStream {
    return new _StreamCmdKResponse_EditStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditStream {
    return new _StreamCmdKResponse_EditStream().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse_EditStream | PlainMessage<_StreamCmdKResponse_EditStream> | undefined | null, b2: _StreamCmdKResponse_EditStream | PlainMessage<_StreamCmdKResponse_EditStream> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse_EditStream as unknown as MessageType<_StreamCmdKResponse_EditStream>, a, b2);
  }
})();
export type StreamCmdKResponse_EditStream = InstanceType<typeof StreamCmdKResponse_EditStream$Runtime>;
var StreamCmdKResponse_EditStream: MessageType<StreamCmdKResponse_EditStream> = StreamCmdKResponse_EditStream$Runtime as unknown as MessageType<StreamCmdKResponse_EditStream>;
(StreamCmdKResponse_EditStream as MutableMessageType<StreamCmdKResponse_EditStream>).runtime = proto3;
(StreamCmdKResponse_EditStream as MutableMessageType<StreamCmdKResponse_EditStream>).typeName = "aiserver.v1.StreamCmdKResponse.EditStream";
(StreamCmdKResponse_EditStream as MutableMessageType<StreamCmdKResponse_EditStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "edit_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "file_path", kind: "scalar", T: 9, opt: true }
]);
var StreamCmdKResponse_EditEnd$Runtime = (() => class _StreamCmdKResponse_EditEnd extends Message<_StreamCmdKResponse_EditEnd> {
  declare endLineNumberExclusive: number;
  declare editId: number;
  declare filePath?: string;
  constructor(data?: PartialMessage<_StreamCmdKResponse_EditEnd>) {
    super();
    this.endLineNumberExclusive = 0;
    this.editId = 0;
    proto3.util.initPartial(data, this as _StreamCmdKResponse_EditEnd);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse_EditEnd {
    return new _StreamCmdKResponse_EditEnd().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditEnd {
    return new _StreamCmdKResponse_EditEnd().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_EditEnd {
    return new _StreamCmdKResponse_EditEnd().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse_EditEnd | PlainMessage<_StreamCmdKResponse_EditEnd> | undefined | null, b2: _StreamCmdKResponse_EditEnd | PlainMessage<_StreamCmdKResponse_EditEnd> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse_EditEnd as unknown as MessageType<_StreamCmdKResponse_EditEnd>, a, b2);
  }
})();
export type StreamCmdKResponse_EditEnd = InstanceType<typeof StreamCmdKResponse_EditEnd$Runtime>;
var StreamCmdKResponse_EditEnd: MessageType<StreamCmdKResponse_EditEnd> = StreamCmdKResponse_EditEnd$Runtime as unknown as MessageType<StreamCmdKResponse_EditEnd>;
(StreamCmdKResponse_EditEnd as MutableMessageType<StreamCmdKResponse_EditEnd>).runtime = proto3;
(StreamCmdKResponse_EditEnd as MutableMessageType<StreamCmdKResponse_EditEnd>).typeName = "aiserver.v1.StreamCmdKResponse.EditEnd";
(StreamCmdKResponse_EditEnd as MutableMessageType<StreamCmdKResponse_EditEnd>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "end_line_number_exclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "edit_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "file_path", kind: "scalar", T: 9, opt: true }
]);
var StreamCmdKResponse_Chat$Runtime = (() => class _StreamCmdKResponse_Chat extends Message<_StreamCmdKResponse_Chat> {
  declare text: string;
  constructor(data?: PartialMessage<_StreamCmdKResponse_Chat>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamCmdKResponse_Chat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse_Chat {
    return new _StreamCmdKResponse_Chat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_Chat {
    return new _StreamCmdKResponse_Chat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_Chat {
    return new _StreamCmdKResponse_Chat().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse_Chat | PlainMessage<_StreamCmdKResponse_Chat> | undefined | null, b2: _StreamCmdKResponse_Chat | PlainMessage<_StreamCmdKResponse_Chat> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse_Chat as unknown as MessageType<_StreamCmdKResponse_Chat>, a, b2);
  }
})();
export type StreamCmdKResponse_Chat = InstanceType<typeof StreamCmdKResponse_Chat$Runtime>;
var StreamCmdKResponse_Chat: MessageType<StreamCmdKResponse_Chat> = StreamCmdKResponse_Chat$Runtime as unknown as MessageType<StreamCmdKResponse_Chat>;
(StreamCmdKResponse_Chat as MutableMessageType<StreamCmdKResponse_Chat>).runtime = proto3;
(StreamCmdKResponse_Chat as MutableMessageType<StreamCmdKResponse_Chat>).typeName = "aiserver.v1.StreamCmdKResponse.Chat";
(StreamCmdKResponse_Chat as MutableMessageType<StreamCmdKResponse_Chat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StreamCmdKResponse_StatusUpdate$Runtime = (() => class _StreamCmdKResponse_StatusUpdate extends Message<_StreamCmdKResponse_StatusUpdate> {
  declare messages: string[];
  constructor(data?: PartialMessage<_StreamCmdKResponse_StatusUpdate>) {
    super();
    this.messages = [];
    proto3.util.initPartial(data, this as _StreamCmdKResponse_StatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamCmdKResponse_StatusUpdate {
    return new _StreamCmdKResponse_StatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_StatusUpdate {
    return new _StreamCmdKResponse_StatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamCmdKResponse_StatusUpdate {
    return new _StreamCmdKResponse_StatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamCmdKResponse_StatusUpdate | PlainMessage<_StreamCmdKResponse_StatusUpdate> | undefined | null, b2: _StreamCmdKResponse_StatusUpdate | PlainMessage<_StreamCmdKResponse_StatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_StreamCmdKResponse_StatusUpdate as unknown as MessageType<_StreamCmdKResponse_StatusUpdate>, a, b2);
  }
})();
export type StreamCmdKResponse_StatusUpdate = InstanceType<typeof StreamCmdKResponse_StatusUpdate$Runtime>;
var StreamCmdKResponse_StatusUpdate: MessageType<StreamCmdKResponse_StatusUpdate> = StreamCmdKResponse_StatusUpdate$Runtime as unknown as MessageType<StreamCmdKResponse_StatusUpdate>;
(StreamCmdKResponse_StatusUpdate as MutableMessageType<StreamCmdKResponse_StatusUpdate>).runtime = proto3;
(StreamCmdKResponse_StatusUpdate as MutableMessageType<StreamCmdKResponse_StatusUpdate>).typeName = "aiserver.v1.StreamCmdKResponse.StatusUpdate";
(StreamCmdKResponse_StatusUpdate as MutableMessageType<StreamCmdKResponse_StatusUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "scalar", T: 9, repeated: true }
]);
var GetRelevantChunksRequest$Runtime = (() => class _GetRelevantChunksRequest extends Message<_GetRelevantChunksRequest> {
  declare codeBlocks: CodeBlock[];
  declare cmdKOptions?: CmdKOptions;
  declare contextItems: PotentiallyCachedContextItem[];
  declare sessionId: string;
  declare legacyContext?: CmdKLegacyContext;
  constructor(data?: PartialMessage<_GetRelevantChunksRequest>) {
    super();
    this.codeBlocks = [];
    this.contextItems = [];
    this.sessionId = "";
    proto3.util.initPartial(data, this as _GetRelevantChunksRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetRelevantChunksRequest {
    return new _GetRelevantChunksRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetRelevantChunksRequest {
    return new _GetRelevantChunksRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetRelevantChunksRequest {
    return new _GetRelevantChunksRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetRelevantChunksRequest | PlainMessage<_GetRelevantChunksRequest> | undefined | null, b2: _GetRelevantChunksRequest | PlainMessage<_GetRelevantChunksRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetRelevantChunksRequest as unknown as MessageType<_GetRelevantChunksRequest>, a, b2);
  }
})();
export type GetRelevantChunksRequest = InstanceType<typeof GetRelevantChunksRequest$Runtime>;
var GetRelevantChunksRequest: MessageType<GetRelevantChunksRequest> = GetRelevantChunksRequest$Runtime as unknown as MessageType<GetRelevantChunksRequest>;
(GetRelevantChunksRequest as MutableMessageType<GetRelevantChunksRequest>).runtime = proto3;
(GetRelevantChunksRequest as MutableMessageType<GetRelevantChunksRequest>).typeName = "aiserver.v1.GetRelevantChunksRequest";
(GetRelevantChunksRequest as MutableMessageType<GetRelevantChunksRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_blocks", kind: "message", T: CodeBlock, repeated: true },
  { no: 2, name: "cmd_k_options", kind: "message", T: CmdKOptions },
  { no: 3, name: "context_items", kind: "message", T: PotentiallyCachedContextItem, repeated: true },
  {
    no: 4,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "legacy_context", kind: "message", T: CmdKLegacyContext }
]);
var StreamGetRelevantChunksResponseContextWrapped$Runtime = (() => class _StreamGetRelevantChunksResponseContextWrapped extends Message<_StreamGetRelevantChunksResponseContextWrapped> {
  declare response: { case: "realResponse"; value: GetRelevantChunksResponse } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamGetRelevantChunksResponseContextWrapped>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _StreamGetRelevantChunksResponseContextWrapped);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamGetRelevantChunksResponseContextWrapped {
    return new _StreamGetRelevantChunksResponseContextWrapped().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamGetRelevantChunksResponseContextWrapped {
    return new _StreamGetRelevantChunksResponseContextWrapped().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamGetRelevantChunksResponseContextWrapped {
    return new _StreamGetRelevantChunksResponseContextWrapped().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamGetRelevantChunksResponseContextWrapped | PlainMessage<_StreamGetRelevantChunksResponseContextWrapped> | undefined | null, b2: _StreamGetRelevantChunksResponseContextWrapped | PlainMessage<_StreamGetRelevantChunksResponseContextWrapped> | undefined | null): boolean {
    return proto3.util.equals(_StreamGetRelevantChunksResponseContextWrapped as unknown as MessageType<_StreamGetRelevantChunksResponseContextWrapped>, a, b2);
  }
})();
export type StreamGetRelevantChunksResponseContextWrapped = InstanceType<typeof StreamGetRelevantChunksResponseContextWrapped$Runtime>;
var StreamGetRelevantChunksResponseContextWrapped: MessageType<StreamGetRelevantChunksResponseContextWrapped> = StreamGetRelevantChunksResponseContextWrapped$Runtime as unknown as MessageType<StreamGetRelevantChunksResponseContextWrapped>;
(StreamGetRelevantChunksResponseContextWrapped as MutableMessageType<StreamGetRelevantChunksResponseContextWrapped>).runtime = proto3;
(StreamGetRelevantChunksResponseContextWrapped as MutableMessageType<StreamGetRelevantChunksResponseContextWrapped>).typeName = "aiserver.v1.StreamGetRelevantChunksResponseContextWrapped";
(StreamGetRelevantChunksResponseContextWrapped as MutableMessageType<StreamGetRelevantChunksResponseContextWrapped>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "real_response", kind: "message", T: GetRelevantChunksResponse, oneof: "response" }
]);
var GetRelevantChunksResponse$Runtime = (() => class _GetRelevantChunksResponse extends Message<_GetRelevantChunksResponse> {
  declare response: { case: "codeBlocks"; value: GetRelevantChunksResponse_CodeBlocks } | { case: "chainOfThoughtStream"; value: GetRelevantChunksResponse_ChainOfThoughtStream } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GetRelevantChunksResponse>) {
    super();
    this.response = { case: void 0 };
    proto3.util.initPartial(data, this as _GetRelevantChunksResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetRelevantChunksResponse {
    return new _GetRelevantChunksResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse {
    return new _GetRelevantChunksResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse {
    return new _GetRelevantChunksResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetRelevantChunksResponse | PlainMessage<_GetRelevantChunksResponse> | undefined | null, b2: _GetRelevantChunksResponse | PlainMessage<_GetRelevantChunksResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetRelevantChunksResponse as unknown as MessageType<_GetRelevantChunksResponse>, a, b2);
  }
})();
export type GetRelevantChunksResponse = InstanceType<typeof GetRelevantChunksResponse$Runtime>;
var GetRelevantChunksResponse: MessageType<GetRelevantChunksResponse> = GetRelevantChunksResponse$Runtime as unknown as MessageType<GetRelevantChunksResponse>;
(GetRelevantChunksResponse as MutableMessageType<GetRelevantChunksResponse>).runtime = proto3;
(GetRelevantChunksResponse as MutableMessageType<GetRelevantChunksResponse>).typeName = "aiserver.v1.GetRelevantChunksResponse";
(GetRelevantChunksResponse as MutableMessageType<GetRelevantChunksResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_blocks", kind: "message", T: GetRelevantChunksResponse_CodeBlocks, oneof: "response" },
  { no: 2, name: "chain_of_thought_stream", kind: "message", T: GetRelevantChunksResponse_ChainOfThoughtStream, oneof: "response" }
]);
var GetRelevantChunksResponse_ChainOfThoughtStream$Runtime = (() => class _GetRelevantChunksResponse_ChainOfThoughtStream extends Message<_GetRelevantChunksResponse_ChainOfThoughtStream> {
  declare text: string;
  constructor(data?: PartialMessage<_GetRelevantChunksResponse_ChainOfThoughtStream>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _GetRelevantChunksResponse_ChainOfThoughtStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetRelevantChunksResponse_ChainOfThoughtStream {
    return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse_ChainOfThoughtStream {
    return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse_ChainOfThoughtStream {
    return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromJsonString(jsonString, options);
  }
  static equals(a: _GetRelevantChunksResponse_ChainOfThoughtStream | PlainMessage<_GetRelevantChunksResponse_ChainOfThoughtStream> | undefined | null, b2: _GetRelevantChunksResponse_ChainOfThoughtStream | PlainMessage<_GetRelevantChunksResponse_ChainOfThoughtStream> | undefined | null): boolean {
    return proto3.util.equals(_GetRelevantChunksResponse_ChainOfThoughtStream as unknown as MessageType<_GetRelevantChunksResponse_ChainOfThoughtStream>, a, b2);
  }
})();
export type GetRelevantChunksResponse_ChainOfThoughtStream = InstanceType<typeof GetRelevantChunksResponse_ChainOfThoughtStream$Runtime>;
var GetRelevantChunksResponse_ChainOfThoughtStream: MessageType<GetRelevantChunksResponse_ChainOfThoughtStream> = GetRelevantChunksResponse_ChainOfThoughtStream$Runtime as unknown as MessageType<GetRelevantChunksResponse_ChainOfThoughtStream>;
(GetRelevantChunksResponse_ChainOfThoughtStream as MutableMessageType<GetRelevantChunksResponse_ChainOfThoughtStream>).runtime = proto3;
(GetRelevantChunksResponse_ChainOfThoughtStream as MutableMessageType<GetRelevantChunksResponse_ChainOfThoughtStream>).typeName = "aiserver.v1.GetRelevantChunksResponse.ChainOfThoughtStream";
(GetRelevantChunksResponse_ChainOfThoughtStream as MutableMessageType<GetRelevantChunksResponse_ChainOfThoughtStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetRelevantChunksResponse_CodeBlocks$Runtime = (() => class _GetRelevantChunksResponse_CodeBlocks extends Message<_GetRelevantChunksResponse_CodeBlocks> {
  declare codeBlocks: CodeBlock[];
  constructor(data?: PartialMessage<_GetRelevantChunksResponse_CodeBlocks>) {
    super();
    this.codeBlocks = [];
    proto3.util.initPartial(data, this as _GetRelevantChunksResponse_CodeBlocks);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetRelevantChunksResponse_CodeBlocks {
    return new _GetRelevantChunksResponse_CodeBlocks().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse_CodeBlocks {
    return new _GetRelevantChunksResponse_CodeBlocks().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetRelevantChunksResponse_CodeBlocks {
    return new _GetRelevantChunksResponse_CodeBlocks().fromJsonString(jsonString, options);
  }
  static equals(a: _GetRelevantChunksResponse_CodeBlocks | PlainMessage<_GetRelevantChunksResponse_CodeBlocks> | undefined | null, b2: _GetRelevantChunksResponse_CodeBlocks | PlainMessage<_GetRelevantChunksResponse_CodeBlocks> | undefined | null): boolean {
    return proto3.util.equals(_GetRelevantChunksResponse_CodeBlocks as unknown as MessageType<_GetRelevantChunksResponse_CodeBlocks>, a, b2);
  }
})();
export type GetRelevantChunksResponse_CodeBlocks = InstanceType<typeof GetRelevantChunksResponse_CodeBlocks$Runtime>;
var GetRelevantChunksResponse_CodeBlocks: MessageType<GetRelevantChunksResponse_CodeBlocks> = GetRelevantChunksResponse_CodeBlocks$Runtime as unknown as MessageType<GetRelevantChunksResponse_CodeBlocks>;
(GetRelevantChunksResponse_CodeBlocks as MutableMessageType<GetRelevantChunksResponse_CodeBlocks>).runtime = proto3;
(GetRelevantChunksResponse_CodeBlocks as MutableMessageType<GetRelevantChunksResponse_CodeBlocks>).typeName = "aiserver.v1.GetRelevantChunksResponse.CodeBlocks";
(GetRelevantChunksResponse_CodeBlocks as MutableMessageType<GetRelevantChunksResponse_CodeBlocks>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_blocks", kind: "message", T: CodeBlock, repeated: true }
]);


export { RerankCmdKContextRequest, RerankCmdKContextResponse, RerankTerminalCmdKContextRequest, RerankTerminalCmdKContextResponse, TerminalCmdKOptions, CmdKOptions, CmdKUpcomingEdit, CmdKPreviousEdit, StreamHypermodeRequest, StreamCmdKRequest, StreamCmdKRequest_BranchDiff, StreamCmdKRequest_BranchDiff_FileDiff, TimingInfo, StreamTerminalCmdKRequest, CmdKLegacyContext, StreamCmdKResponseContextWrapped, StreamTerminalCmdKResponseContextWrapped, StreamTerminalCmdKResponse, StreamTerminalCmdKResponse_TerminalCommand, StreamTerminalCmdKResponse_Chat, StreamTerminalCmdKResponse_StatusUpdate, StreamCmdKResponse, StreamCmdKResponse_EditStart, StreamCmdKResponse_EditStream, StreamCmdKResponse_EditEnd, StreamCmdKResponse_Chat, StreamCmdKResponse_StatusUpdate, GetRelevantChunksRequest, StreamGetRelevantChunksResponseContextWrapped, GetRelevantChunksResponse, GetRelevantChunksResponse_ChainOfThoughtStream, GetRelevantChunksResponse_CodeBlocks };
