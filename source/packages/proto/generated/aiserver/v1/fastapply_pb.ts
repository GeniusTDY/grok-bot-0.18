/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:180130-180277
 * Region SHA-256: a0586962bb94f5dd3df73249d33bf0f2ea280c79212bebb14f149e87e9c3ebcb
 * AI Server closure exports: 4 messages + 2 enums = 6
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { CurrentFileInfo, ExplicitContext } from "./utils_pb.js";
import { ConversationMessage } from "./chat_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type EditFate = 0 | 1 | 2 | 3;
var EditFate: {
  "UNSPECIFIED": 0;
  "ACCEPTED": 1;
  "REJECTED": 2;
  "PARTIALLY_ACCEPTED": 3;
  0: "UNSPECIFIED";
  1: "ACCEPTED";
  2: "REJECTED";
  3: "PARTIALLY_ACCEPTED";
};
export type FastApplySource = 0 | 1 | 2 | 3 | 4;
var FastApplySource: {
  "UNSPECIFIED": 0;
  "COMPOSER": 1;
  "CLICKED_APPLY": 2;
  "CACHED_APPLY": 3;
  "COMPOSER_AGENT": 4;
  0: "UNSPECIFIED";
  1: "COMPOSER";
  2: "CLICKED_APPLY";
  3: "CACHED_APPLY";
  4: "COMPOSER_AGENT";
};
(function(EditFate2) {
  EditFate2[EditFate2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EditFate2[EditFate2["ACCEPTED"] = 1] = "ACCEPTED";
  EditFate2[EditFate2["REJECTED"] = 2] = "REJECTED";
  EditFate2[EditFate2["PARTIALLY_ACCEPTED"] = 3] = "PARTIALLY_ACCEPTED";
})(EditFate! || (EditFate = {} as typeof EditFate));
proto3.util.setEnumType(EditFate, "aiserver.v1.EditFate", [
  { no: 0, name: "EDIT_FATE_UNSPECIFIED" },
  { no: 1, name: "EDIT_FATE_ACCEPTED" },
  { no: 2, name: "EDIT_FATE_REJECTED" },
  { no: 3, name: "EDIT_FATE_PARTIALLY_ACCEPTED" }
]);
(function(FastApplySource2) {
  FastApplySource2[FastApplySource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastApplySource2[FastApplySource2["COMPOSER"] = 1] = "COMPOSER";
  FastApplySource2[FastApplySource2["CLICKED_APPLY"] = 2] = "CLICKED_APPLY";
  FastApplySource2[FastApplySource2["CACHED_APPLY"] = 3] = "CACHED_APPLY";
  FastApplySource2[FastApplySource2["COMPOSER_AGENT"] = 4] = "COMPOSER_AGENT";
})(FastApplySource! || (FastApplySource = {} as typeof FastApplySource));
proto3.util.setEnumType(FastApplySource, "aiserver.v1.FastApplySource", [
  { no: 0, name: "FAST_APPLY_SOURCE_UNSPECIFIED" },
  { no: 1, name: "FAST_APPLY_SOURCE_COMPOSER" },
  { no: 2, name: "FAST_APPLY_SOURCE_CLICKED_APPLY" },
  { no: 3, name: "FAST_APPLY_SOURCE_CACHED_APPLY" },
  { no: 4, name: "FAST_APPLY_SOURCE_COMPOSER_AGENT" }
]);
var ReportEditFateRequest$Runtime = (() => class _ReportEditFateRequest extends Message<_ReportEditFateRequest> {
  declare requestId: string;
  declare fate?: EditFate;
  declare numAcceptedPartialDiffs?: number;
  declare numRejectedPartialDiffs?: number;
  constructor(data?: PartialMessage<_ReportEditFateRequest>) {
    super();
    this.requestId = "";
    proto3.util.initPartial(data, this as _ReportEditFateRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportEditFateRequest {
    return new _ReportEditFateRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportEditFateRequest {
    return new _ReportEditFateRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportEditFateRequest {
    return new _ReportEditFateRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportEditFateRequest | PlainMessage<_ReportEditFateRequest> | undefined | null, b2: _ReportEditFateRequest | PlainMessage<_ReportEditFateRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReportEditFateRequest as unknown as MessageType<_ReportEditFateRequest>, a, b2);
  }
})();
export type ReportEditFateRequest = InstanceType<typeof ReportEditFateRequest$Runtime>;
var ReportEditFateRequest: MessageType<ReportEditFateRequest> = ReportEditFateRequest$Runtime as unknown as MessageType<ReportEditFateRequest>;
(ReportEditFateRequest as MutableMessageType<ReportEditFateRequest>).runtime = proto3;
(ReportEditFateRequest as MutableMessageType<ReportEditFateRequest>).typeName = "aiserver.v1.ReportEditFateRequest";
(ReportEditFateRequest as MutableMessageType<ReportEditFateRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "fate", kind: "enum", T: proto3.getEnumType(EditFate), opt: true },
  { no: 3, name: "num_accepted_partial_diffs", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "num_rejected_partial_diffs", kind: "scalar", T: 5, opt: true }
]);
var ReportEditFateResponse$Runtime = (() => class _ReportEditFateResponse extends Message<_ReportEditFateResponse> {
  constructor(data?: PartialMessage<_ReportEditFateResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReportEditFateResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportEditFateResponse {
    return new _ReportEditFateResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportEditFateResponse {
    return new _ReportEditFateResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportEditFateResponse {
    return new _ReportEditFateResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportEditFateResponse | PlainMessage<_ReportEditFateResponse> | undefined | null, b2: _ReportEditFateResponse | PlainMessage<_ReportEditFateResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReportEditFateResponse as unknown as MessageType<_ReportEditFateResponse>, a, b2);
  }
})();
export type ReportEditFateResponse = InstanceType<typeof ReportEditFateResponse$Runtime>;
var ReportEditFateResponse: MessageType<ReportEditFateResponse> = ReportEditFateResponse$Runtime as unknown as MessageType<ReportEditFateResponse>;
(ReportEditFateResponse as MutableMessageType<ReportEditFateResponse>).runtime = proto3;
(ReportEditFateResponse as MutableMessageType<ReportEditFateResponse>).typeName = "aiserver.v1.ReportEditFateResponse";
(ReportEditFateResponse as MutableMessageType<ReportEditFateResponse>).fields = proto3.util.newFieldList(() => []);
var WarmApplyRequest$Runtime = (() => class _WarmApplyRequest extends Message<_WarmApplyRequest> {
  declare currentFile?: CurrentFileInfo;
  declare conversation: ConversationMessage[];
  declare explicitContext?: ExplicitContext;
  declare source: FastApplySource;
  declare willingToPayExtraForSpeed: boolean;
  constructor(data?: PartialMessage<_WarmApplyRequest>) {
    super();
    this.conversation = [];
    this.source = FastApplySource.UNSPECIFIED;
    this.willingToPayExtraForSpeed = false;
    proto3.util.initPartial(data, this as _WarmApplyRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WarmApplyRequest {
    return new _WarmApplyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WarmApplyRequest {
    return new _WarmApplyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WarmApplyRequest {
    return new _WarmApplyRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _WarmApplyRequest | PlainMessage<_WarmApplyRequest> | undefined | null, b2: _WarmApplyRequest | PlainMessage<_WarmApplyRequest> | undefined | null): boolean {
    return proto3.util.equals(_WarmApplyRequest as unknown as MessageType<_WarmApplyRequest>, a, b2);
  }
})();
export type WarmApplyRequest = InstanceType<typeof WarmApplyRequest$Runtime>;
var WarmApplyRequest: MessageType<WarmApplyRequest> = WarmApplyRequest$Runtime as unknown as MessageType<WarmApplyRequest>;
(WarmApplyRequest as MutableMessageType<WarmApplyRequest>).runtime = proto3;
(WarmApplyRequest as MutableMessageType<WarmApplyRequest>).typeName = "aiserver.v1.WarmApplyRequest";
(WarmApplyRequest as MutableMessageType<WarmApplyRequest>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 3, name: "conversation", kind: "message", T: ConversationMessage, repeated: true },
  { no: 4, name: "explicit_context", kind: "message", T: ExplicitContext },
  { no: 5, name: "source", kind: "enum", T: proto3.getEnumType(FastApplySource) },
  {
    no: 6,
    name: "willing_to_pay_extra_for_speed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var WarmApplyResponse$Runtime = (() => class _WarmApplyResponse extends Message<_WarmApplyResponse> {
  constructor(data?: PartialMessage<_WarmApplyResponse>) {
    super();
    proto3.util.initPartial(data, this as _WarmApplyResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WarmApplyResponse {
    return new _WarmApplyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WarmApplyResponse {
    return new _WarmApplyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WarmApplyResponse {
    return new _WarmApplyResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _WarmApplyResponse | PlainMessage<_WarmApplyResponse> | undefined | null, b2: _WarmApplyResponse | PlainMessage<_WarmApplyResponse> | undefined | null): boolean {
    return proto3.util.equals(_WarmApplyResponse as unknown as MessageType<_WarmApplyResponse>, a, b2);
  }
})();
export type WarmApplyResponse = InstanceType<typeof WarmApplyResponse$Runtime>;
var WarmApplyResponse: MessageType<WarmApplyResponse> = WarmApplyResponse$Runtime as unknown as MessageType<WarmApplyResponse>;
(WarmApplyResponse as MutableMessageType<WarmApplyResponse>).runtime = proto3;
(WarmApplyResponse as MutableMessageType<WarmApplyResponse>).typeName = "aiserver.v1.WarmApplyResponse";
(WarmApplyResponse as MutableMessageType<WarmApplyResponse>).fields = proto3.util.newFieldList(() => []);


export { EditFate, FastApplySource, ReportEditFateRequest, ReportEditFateResponse, WarmApplyRequest, WarmApplyResponse };
