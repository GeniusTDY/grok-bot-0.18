/**
 * Complete generated Grok Bot 0.18 Dashboard closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:161944-162942
 * Region SHA-256: fb6343c5d6dc7de4eedd58e842ff30c1c09d0f617478f081aa9eb27eeda9facb
 * Dashboard closure exports: 32 messages + 0 enums = 32
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { DiagnosticsArgs, DiagnosticsResult } from "../../agent/v1/diagnostics_exec_pb.js";
import { EnvironmentInfo, Lint, LinterError, LinterErrors, ExplicitContext } from "./utils_pb.js";
import { ClientSideToolV2Call, ClientSideToolV2Result, MCPParams_Tool } from "./tools_pb.js";
import { RepositoryInfo } from "./repository_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SwTrackModelRequest$Runtime = (() => class _SwTrackModelRequest extends Message<_SwTrackModelRequest> {
  declare absolutePath: string;
  constructor(data?: PartialMessage<_SwTrackModelRequest>) {
    super();
    this.absolutePath = "";
    proto3.util.initPartial(data, this as _SwTrackModelRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwTrackModelRequest {
    return new _SwTrackModelRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwTrackModelRequest {
    return new _SwTrackModelRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwTrackModelRequest {
    return new _SwTrackModelRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwTrackModelRequest | PlainMessage<_SwTrackModelRequest> | undefined | null, b2: _SwTrackModelRequest | PlainMessage<_SwTrackModelRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwTrackModelRequest as unknown as MessageType<_SwTrackModelRequest>, a, b2);
  }
})();
export type SwTrackModelRequest = InstanceType<typeof SwTrackModelRequest$Runtime>;
var SwTrackModelRequest: MessageType<SwTrackModelRequest> = SwTrackModelRequest$Runtime as unknown as MessageType<SwTrackModelRequest>;
(SwTrackModelRequest as MutableMessageType<SwTrackModelRequest>).runtime = proto3;
(SwTrackModelRequest as MutableMessageType<SwTrackModelRequest>).typeName = "aiserver.v1.SwTrackModelRequest";
(SwTrackModelRequest as MutableMessageType<SwTrackModelRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwTrackModelResponse$Runtime = (() => class _SwTrackModelResponse extends Message<_SwTrackModelResponse> {
  constructor(data?: PartialMessage<_SwTrackModelResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwTrackModelResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwTrackModelResponse {
    return new _SwTrackModelResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwTrackModelResponse {
    return new _SwTrackModelResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwTrackModelResponse {
    return new _SwTrackModelResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwTrackModelResponse | PlainMessage<_SwTrackModelResponse> | undefined | null, b2: _SwTrackModelResponse | PlainMessage<_SwTrackModelResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwTrackModelResponse as unknown as MessageType<_SwTrackModelResponse>, a, b2);
  }
})();
export type SwTrackModelResponse = InstanceType<typeof SwTrackModelResponse$Runtime>;
var SwTrackModelResponse: MessageType<SwTrackModelResponse> = SwTrackModelResponse$Runtime as unknown as MessageType<SwTrackModelResponse>;
(SwTrackModelResponse as MutableMessageType<SwTrackModelResponse>).runtime = proto3;
(SwTrackModelResponse as MutableMessageType<SwTrackModelResponse>).typeName = "aiserver.v1.SwTrackModelResponse";
(SwTrackModelResponse as MutableMessageType<SwTrackModelResponse>).fields = proto3.util.newFieldList(() => []);
var SwCallDiagnosticsExecutorRequest$Runtime = (() => class _SwCallDiagnosticsExecutorRequest extends Message<_SwCallDiagnosticsExecutorRequest> {
  declare diagnosticsArgs?: DiagnosticsArgs;
  constructor(data?: PartialMessage<_SwCallDiagnosticsExecutorRequest>) {
    super();
    proto3.util.initPartial(data, this as _SwCallDiagnosticsExecutorRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCallDiagnosticsExecutorRequest {
    return new _SwCallDiagnosticsExecutorRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCallDiagnosticsExecutorRequest {
    return new _SwCallDiagnosticsExecutorRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCallDiagnosticsExecutorRequest {
    return new _SwCallDiagnosticsExecutorRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCallDiagnosticsExecutorRequest | PlainMessage<_SwCallDiagnosticsExecutorRequest> | undefined | null, b2: _SwCallDiagnosticsExecutorRequest | PlainMessage<_SwCallDiagnosticsExecutorRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwCallDiagnosticsExecutorRequest as unknown as MessageType<_SwCallDiagnosticsExecutorRequest>, a, b2);
  }
})();
export type SwCallDiagnosticsExecutorRequest = InstanceType<typeof SwCallDiagnosticsExecutorRequest$Runtime>;
var SwCallDiagnosticsExecutorRequest: MessageType<SwCallDiagnosticsExecutorRequest> = SwCallDiagnosticsExecutorRequest$Runtime as unknown as MessageType<SwCallDiagnosticsExecutorRequest>;
(SwCallDiagnosticsExecutorRequest as MutableMessageType<SwCallDiagnosticsExecutorRequest>).runtime = proto3;
(SwCallDiagnosticsExecutorRequest as MutableMessageType<SwCallDiagnosticsExecutorRequest>).typeName = "aiserver.v1.SwCallDiagnosticsExecutorRequest";
(SwCallDiagnosticsExecutorRequest as MutableMessageType<SwCallDiagnosticsExecutorRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diagnostics_args", kind: "message", T: DiagnosticsArgs }
]);
var SwCallDiagnosticsExecutorResponse$Runtime = (() => class _SwCallDiagnosticsExecutorResponse extends Message<_SwCallDiagnosticsExecutorResponse> {
  declare diagnosticsResult?: DiagnosticsResult;
  constructor(data?: PartialMessage<_SwCallDiagnosticsExecutorResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwCallDiagnosticsExecutorResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCallDiagnosticsExecutorResponse {
    return new _SwCallDiagnosticsExecutorResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCallDiagnosticsExecutorResponse {
    return new _SwCallDiagnosticsExecutorResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCallDiagnosticsExecutorResponse {
    return new _SwCallDiagnosticsExecutorResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCallDiagnosticsExecutorResponse | PlainMessage<_SwCallDiagnosticsExecutorResponse> | undefined | null, b2: _SwCallDiagnosticsExecutorResponse | PlainMessage<_SwCallDiagnosticsExecutorResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwCallDiagnosticsExecutorResponse as unknown as MessageType<_SwCallDiagnosticsExecutorResponse>, a, b2);
  }
})();
export type SwCallDiagnosticsExecutorResponse = InstanceType<typeof SwCallDiagnosticsExecutorResponse$Runtime>;
var SwCallDiagnosticsExecutorResponse: MessageType<SwCallDiagnosticsExecutorResponse> = SwCallDiagnosticsExecutorResponse$Runtime as unknown as MessageType<SwCallDiagnosticsExecutorResponse>;
(SwCallDiagnosticsExecutorResponse as MutableMessageType<SwCallDiagnosticsExecutorResponse>).runtime = proto3;
(SwCallDiagnosticsExecutorResponse as MutableMessageType<SwCallDiagnosticsExecutorResponse>).typeName = "aiserver.v1.SwCallDiagnosticsExecutorResponse";
(SwCallDiagnosticsExecutorResponse as MutableMessageType<SwCallDiagnosticsExecutorResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diagnostics_result", kind: "message", T: DiagnosticsResult }
]);
var SwWriteTextFileWithLintsRequest$Runtime = (() => class _SwWriteTextFileWithLintsRequest extends Message<_SwWriteTextFileWithLintsRequest> {
  declare absolutePath: string;
  declare newContents: string;
  constructor(data?: PartialMessage<_SwWriteTextFileWithLintsRequest>) {
    super();
    this.absolutePath = "";
    this.newContents = "";
    proto3.util.initPartial(data, this as _SwWriteTextFileWithLintsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwWriteTextFileWithLintsRequest {
    return new _SwWriteTextFileWithLintsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwWriteTextFileWithLintsRequest {
    return new _SwWriteTextFileWithLintsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwWriteTextFileWithLintsRequest {
    return new _SwWriteTextFileWithLintsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwWriteTextFileWithLintsRequest | PlainMessage<_SwWriteTextFileWithLintsRequest> | undefined | null, b2: _SwWriteTextFileWithLintsRequest | PlainMessage<_SwWriteTextFileWithLintsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwWriteTextFileWithLintsRequest as unknown as MessageType<_SwWriteTextFileWithLintsRequest>, a, b2);
  }
})();
export type SwWriteTextFileWithLintsRequest = InstanceType<typeof SwWriteTextFileWithLintsRequest$Runtime>;
var SwWriteTextFileWithLintsRequest: MessageType<SwWriteTextFileWithLintsRequest> = SwWriteTextFileWithLintsRequest$Runtime as unknown as MessageType<SwWriteTextFileWithLintsRequest>;
(SwWriteTextFileWithLintsRequest as MutableMessageType<SwWriteTextFileWithLintsRequest>).runtime = proto3;
(SwWriteTextFileWithLintsRequest as MutableMessageType<SwWriteTextFileWithLintsRequest>).typeName = "aiserver.v1.SwWriteTextFileWithLintsRequest";
(SwWriteTextFileWithLintsRequest as MutableMessageType<SwWriteTextFileWithLintsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "absolute_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwWriteTextFileWithLintsResponse$Runtime = (() => class _SwWriteTextFileWithLintsResponse extends Message<_SwWriteTextFileWithLintsResponse> {
  declare newLinterErrors: LinterError[];
  constructor(data?: PartialMessage<_SwWriteTextFileWithLintsResponse>) {
    super();
    this.newLinterErrors = [];
    proto3.util.initPartial(data, this as _SwWriteTextFileWithLintsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwWriteTextFileWithLintsResponse {
    return new _SwWriteTextFileWithLintsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwWriteTextFileWithLintsResponse {
    return new _SwWriteTextFileWithLintsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwWriteTextFileWithLintsResponse {
    return new _SwWriteTextFileWithLintsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwWriteTextFileWithLintsResponse | PlainMessage<_SwWriteTextFileWithLintsResponse> | undefined | null, b2: _SwWriteTextFileWithLintsResponse | PlainMessage<_SwWriteTextFileWithLintsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwWriteTextFileWithLintsResponse as unknown as MessageType<_SwWriteTextFileWithLintsResponse>, a, b2);
  }
})();
export type SwWriteTextFileWithLintsResponse = InstanceType<typeof SwWriteTextFileWithLintsResponse$Runtime>;
var SwWriteTextFileWithLintsResponse: MessageType<SwWriteTextFileWithLintsResponse> = SwWriteTextFileWithLintsResponse$Runtime as unknown as MessageType<SwWriteTextFileWithLintsResponse>;
(SwWriteTextFileWithLintsResponse as MutableMessageType<SwWriteTextFileWithLintsResponse>).runtime = proto3;
(SwWriteTextFileWithLintsResponse as MutableMessageType<SwWriteTextFileWithLintsResponse>).typeName = "aiserver.v1.SwWriteTextFileWithLintsResponse";
(SwWriteTextFileWithLintsResponse as MutableMessageType<SwWriteTextFileWithLintsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "new_linter_errors", kind: "message", T: LinterError, repeated: true }
]);
var SwGetExplicitContextRequest$Runtime = (() => class _SwGetExplicitContextRequest extends Message<_SwGetExplicitContextRequest> {
  constructor(data?: PartialMessage<_SwGetExplicitContextRequest>) {
    super();
    proto3.util.initPartial(data, this as _SwGetExplicitContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetExplicitContextRequest {
    return new _SwGetExplicitContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetExplicitContextRequest {
    return new _SwGetExplicitContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetExplicitContextRequest {
    return new _SwGetExplicitContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetExplicitContextRequest | PlainMessage<_SwGetExplicitContextRequest> | undefined | null, b2: _SwGetExplicitContextRequest | PlainMessage<_SwGetExplicitContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwGetExplicitContextRequest as unknown as MessageType<_SwGetExplicitContextRequest>, a, b2);
  }
})();
export type SwGetExplicitContextRequest = InstanceType<typeof SwGetExplicitContextRequest$Runtime>;
var SwGetExplicitContextRequest: MessageType<SwGetExplicitContextRequest> = SwGetExplicitContextRequest$Runtime as unknown as MessageType<SwGetExplicitContextRequest>;
(SwGetExplicitContextRequest as MutableMessageType<SwGetExplicitContextRequest>).runtime = proto3;
(SwGetExplicitContextRequest as MutableMessageType<SwGetExplicitContextRequest>).typeName = "aiserver.v1.SwGetExplicitContextRequest";
(SwGetExplicitContextRequest as MutableMessageType<SwGetExplicitContextRequest>).fields = proto3.util.newFieldList(() => []);
var SwGetExplicitContextResponse$Runtime = (() => class _SwGetExplicitContextResponse extends Message<_SwGetExplicitContextResponse> {
  declare explicitContext?: ExplicitContext;
  constructor(data?: PartialMessage<_SwGetExplicitContextResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwGetExplicitContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetExplicitContextResponse {
    return new _SwGetExplicitContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetExplicitContextResponse {
    return new _SwGetExplicitContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetExplicitContextResponse {
    return new _SwGetExplicitContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetExplicitContextResponse | PlainMessage<_SwGetExplicitContextResponse> | undefined | null, b2: _SwGetExplicitContextResponse | PlainMessage<_SwGetExplicitContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwGetExplicitContextResponse as unknown as MessageType<_SwGetExplicitContextResponse>, a, b2);
  }
})();
export type SwGetExplicitContextResponse = InstanceType<typeof SwGetExplicitContextResponse$Runtime>;
var SwGetExplicitContextResponse: MessageType<SwGetExplicitContextResponse> = SwGetExplicitContextResponse$Runtime as unknown as MessageType<SwGetExplicitContextResponse>;
(SwGetExplicitContextResponse as MutableMessageType<SwGetExplicitContextResponse>).runtime = proto3;
(SwGetExplicitContextResponse as MutableMessageType<SwGetExplicitContextResponse>).typeName = "aiserver.v1.SwGetExplicitContextResponse";
(SwGetExplicitContextResponse as MutableMessageType<SwGetExplicitContextResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "explicit_context", kind: "message", T: ExplicitContext }
]);
var SwGetEnvironmentInfoRequest$Runtime = (() => class _SwGetEnvironmentInfoRequest extends Message<_SwGetEnvironmentInfoRequest> {
  constructor(data?: PartialMessage<_SwGetEnvironmentInfoRequest>) {
    super();
    proto3.util.initPartial(data, this as _SwGetEnvironmentInfoRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetEnvironmentInfoRequest {
    return new _SwGetEnvironmentInfoRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetEnvironmentInfoRequest {
    return new _SwGetEnvironmentInfoRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetEnvironmentInfoRequest {
    return new _SwGetEnvironmentInfoRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetEnvironmentInfoRequest | PlainMessage<_SwGetEnvironmentInfoRequest> | undefined | null, b2: _SwGetEnvironmentInfoRequest | PlainMessage<_SwGetEnvironmentInfoRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwGetEnvironmentInfoRequest as unknown as MessageType<_SwGetEnvironmentInfoRequest>, a, b2);
  }
})();
export type SwGetEnvironmentInfoRequest = InstanceType<typeof SwGetEnvironmentInfoRequest$Runtime>;
var SwGetEnvironmentInfoRequest: MessageType<SwGetEnvironmentInfoRequest> = SwGetEnvironmentInfoRequest$Runtime as unknown as MessageType<SwGetEnvironmentInfoRequest>;
(SwGetEnvironmentInfoRequest as MutableMessageType<SwGetEnvironmentInfoRequest>).runtime = proto3;
(SwGetEnvironmentInfoRequest as MutableMessageType<SwGetEnvironmentInfoRequest>).typeName = "aiserver.v1.SwGetEnvironmentInfoRequest";
(SwGetEnvironmentInfoRequest as MutableMessageType<SwGetEnvironmentInfoRequest>).fields = proto3.util.newFieldList(() => []);
var SwGetEnvironmentInfoResponse$Runtime = (() => class _SwGetEnvironmentInfoResponse extends Message<_SwGetEnvironmentInfoResponse> {
  declare environmentInfo?: EnvironmentInfo;
  constructor(data?: PartialMessage<_SwGetEnvironmentInfoResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwGetEnvironmentInfoResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetEnvironmentInfoResponse {
    return new _SwGetEnvironmentInfoResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetEnvironmentInfoResponse {
    return new _SwGetEnvironmentInfoResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetEnvironmentInfoResponse {
    return new _SwGetEnvironmentInfoResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetEnvironmentInfoResponse | PlainMessage<_SwGetEnvironmentInfoResponse> | undefined | null, b2: _SwGetEnvironmentInfoResponse | PlainMessage<_SwGetEnvironmentInfoResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwGetEnvironmentInfoResponse as unknown as MessageType<_SwGetEnvironmentInfoResponse>, a, b2);
  }
})();
export type SwGetEnvironmentInfoResponse = InstanceType<typeof SwGetEnvironmentInfoResponse$Runtime>;
var SwGetEnvironmentInfoResponse: MessageType<SwGetEnvironmentInfoResponse> = SwGetEnvironmentInfoResponse$Runtime as unknown as MessageType<SwGetEnvironmentInfoResponse>;
(SwGetEnvironmentInfoResponse as MutableMessageType<SwGetEnvironmentInfoResponse>).runtime = proto3;
(SwGetEnvironmentInfoResponse as MutableMessageType<SwGetEnvironmentInfoResponse>).typeName = "aiserver.v1.SwGetEnvironmentInfoResponse";
(SwGetEnvironmentInfoResponse as MutableMessageType<SwGetEnvironmentInfoResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "environment_info", kind: "message", T: EnvironmentInfo }
]);
var SwGetLinterErrorsRequest$Runtime = (() => class _SwGetLinterErrorsRequest extends Message<_SwGetLinterErrorsRequest> {
  declare absolutePaths: string[];
  constructor(data?: PartialMessage<_SwGetLinterErrorsRequest>) {
    super();
    this.absolutePaths = [];
    proto3.util.initPartial(data, this as _SwGetLinterErrorsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetLinterErrorsRequest {
    return new _SwGetLinterErrorsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetLinterErrorsRequest {
    return new _SwGetLinterErrorsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetLinterErrorsRequest {
    return new _SwGetLinterErrorsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetLinterErrorsRequest | PlainMessage<_SwGetLinterErrorsRequest> | undefined | null, b2: _SwGetLinterErrorsRequest | PlainMessage<_SwGetLinterErrorsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwGetLinterErrorsRequest as unknown as MessageType<_SwGetLinterErrorsRequest>, a, b2);
  }
})();
export type SwGetLinterErrorsRequest = InstanceType<typeof SwGetLinterErrorsRequest$Runtime>;
var SwGetLinterErrorsRequest: MessageType<SwGetLinterErrorsRequest> = SwGetLinterErrorsRequest$Runtime as unknown as MessageType<SwGetLinterErrorsRequest>;
(SwGetLinterErrorsRequest as MutableMessageType<SwGetLinterErrorsRequest>).runtime = proto3;
(SwGetLinterErrorsRequest as MutableMessageType<SwGetLinterErrorsRequest>).typeName = "aiserver.v1.SwGetLinterErrorsRequest";
(SwGetLinterErrorsRequest as MutableMessageType<SwGetLinterErrorsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "absolute_paths", kind: "scalar", T: 9, repeated: true }
]);
var SwGetLinterErrorsResponse$Runtime = (() => class _SwGetLinterErrorsResponse extends Message<_SwGetLinterErrorsResponse> {
  declare linterErrors: LinterErrors[];
  constructor(data?: PartialMessage<_SwGetLinterErrorsResponse>) {
    super();
    this.linterErrors = [];
    proto3.util.initPartial(data, this as _SwGetLinterErrorsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetLinterErrorsResponse {
    return new _SwGetLinterErrorsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetLinterErrorsResponse {
    return new _SwGetLinterErrorsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetLinterErrorsResponse {
    return new _SwGetLinterErrorsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetLinterErrorsResponse | PlainMessage<_SwGetLinterErrorsResponse> | undefined | null, b2: _SwGetLinterErrorsResponse | PlainMessage<_SwGetLinterErrorsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwGetLinterErrorsResponse as unknown as MessageType<_SwGetLinterErrorsResponse>, a, b2);
  }
})();
export type SwGetLinterErrorsResponse = InstanceType<typeof SwGetLinterErrorsResponse$Runtime>;
var SwGetLinterErrorsResponse: MessageType<SwGetLinterErrorsResponse> = SwGetLinterErrorsResponse$Runtime as unknown as MessageType<SwGetLinterErrorsResponse>;
(SwGetLinterErrorsResponse as MutableMessageType<SwGetLinterErrorsResponse>).runtime = proto3;
(SwGetLinterErrorsResponse as MutableMessageType<SwGetLinterErrorsResponse>).typeName = "aiserver.v1.SwGetLinterErrorsResponse";
(SwGetLinterErrorsResponse as MutableMessageType<SwGetLinterErrorsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "linter_errors", kind: "message", T: LinterErrors, repeated: true }
]);
var SwGetMcpToolsRequest$Runtime = (() => class _SwGetMcpToolsRequest extends Message<_SwGetMcpToolsRequest> {
  declare browserIntegrationPreference?: string;
  constructor(data?: PartialMessage<_SwGetMcpToolsRequest>) {
    super();
    proto3.util.initPartial(data, this as _SwGetMcpToolsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetMcpToolsRequest {
    return new _SwGetMcpToolsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetMcpToolsRequest {
    return new _SwGetMcpToolsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetMcpToolsRequest {
    return new _SwGetMcpToolsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetMcpToolsRequest | PlainMessage<_SwGetMcpToolsRequest> | undefined | null, b2: _SwGetMcpToolsRequest | PlainMessage<_SwGetMcpToolsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwGetMcpToolsRequest as unknown as MessageType<_SwGetMcpToolsRequest>, a, b2);
  }
})();
export type SwGetMcpToolsRequest = InstanceType<typeof SwGetMcpToolsRequest$Runtime>;
var SwGetMcpToolsRequest: MessageType<SwGetMcpToolsRequest> = SwGetMcpToolsRequest$Runtime as unknown as MessageType<SwGetMcpToolsRequest>;
(SwGetMcpToolsRequest as MutableMessageType<SwGetMcpToolsRequest>).runtime = proto3;
(SwGetMcpToolsRequest as MutableMessageType<SwGetMcpToolsRequest>).typeName = "aiserver.v1.SwGetMcpToolsRequest";
(SwGetMcpToolsRequest as MutableMessageType<SwGetMcpToolsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "browser_integration_preference", kind: "scalar", T: 9, opt: true }
]);
var SwGetMcpToolsResponse$Runtime = (() => class _SwGetMcpToolsResponse extends Message<_SwGetMcpToolsResponse> {
  declare tools: MCPParams_Tool[];
  constructor(data?: PartialMessage<_SwGetMcpToolsResponse>) {
    super();
    this.tools = [];
    proto3.util.initPartial(data, this as _SwGetMcpToolsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwGetMcpToolsResponse {
    return new _SwGetMcpToolsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwGetMcpToolsResponse {
    return new _SwGetMcpToolsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwGetMcpToolsResponse {
    return new _SwGetMcpToolsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwGetMcpToolsResponse | PlainMessage<_SwGetMcpToolsResponse> | undefined | null, b2: _SwGetMcpToolsResponse | PlainMessage<_SwGetMcpToolsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwGetMcpToolsResponse as unknown as MessageType<_SwGetMcpToolsResponse>, a, b2);
  }
})();
export type SwGetMcpToolsResponse = InstanceType<typeof SwGetMcpToolsResponse$Runtime>;
var SwGetMcpToolsResponse: MessageType<SwGetMcpToolsResponse> = SwGetMcpToolsResponse$Runtime as unknown as MessageType<SwGetMcpToolsResponse>;
(SwGetMcpToolsResponse as MutableMessageType<SwGetMcpToolsResponse>).runtime = proto3;
(SwGetMcpToolsResponse as MutableMessageType<SwGetMcpToolsResponse>).typeName = "aiserver.v1.SwGetMcpToolsResponse";
(SwGetMcpToolsResponse as MutableMessageType<SwGetMcpToolsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tools", kind: "message", T: MCPParams_Tool, repeated: true }
]);
var SwCallClientSideV2ToolRequest$Runtime = (() => class _SwCallClientSideV2ToolRequest extends Message<_SwCallClientSideV2ToolRequest> {
  declare toolCall?: ClientSideToolV2Call;
  declare composerId: string;
  constructor(data?: PartialMessage<_SwCallClientSideV2ToolRequest>) {
    super();
    this.composerId = "";
    proto3.util.initPartial(data, this as _SwCallClientSideV2ToolRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCallClientSideV2ToolRequest {
    return new _SwCallClientSideV2ToolRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCallClientSideV2ToolRequest {
    return new _SwCallClientSideV2ToolRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCallClientSideV2ToolRequest {
    return new _SwCallClientSideV2ToolRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCallClientSideV2ToolRequest | PlainMessage<_SwCallClientSideV2ToolRequest> | undefined | null, b2: _SwCallClientSideV2ToolRequest | PlainMessage<_SwCallClientSideV2ToolRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwCallClientSideV2ToolRequest as unknown as MessageType<_SwCallClientSideV2ToolRequest>, a, b2);
  }
})();
export type SwCallClientSideV2ToolRequest = InstanceType<typeof SwCallClientSideV2ToolRequest$Runtime>;
var SwCallClientSideV2ToolRequest: MessageType<SwCallClientSideV2ToolRequest> = SwCallClientSideV2ToolRequest$Runtime as unknown as MessageType<SwCallClientSideV2ToolRequest>;
(SwCallClientSideV2ToolRequest as MutableMessageType<SwCallClientSideV2ToolRequest>).runtime = proto3;
(SwCallClientSideV2ToolRequest as MutableMessageType<SwCallClientSideV2ToolRequest>).typeName = "aiserver.v1.SwCallClientSideV2ToolRequest";
(SwCallClientSideV2ToolRequest as MutableMessageType<SwCallClientSideV2ToolRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool_call", kind: "message", T: ClientSideToolV2Call },
  {
    no: 2,
    name: "composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwCallClientSideV2ToolResponse$Runtime = (() => class _SwCallClientSideV2ToolResponse extends Message<_SwCallClientSideV2ToolResponse> {
  declare toolResult?: ClientSideToolV2Result;
  constructor(data?: PartialMessage<_SwCallClientSideV2ToolResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwCallClientSideV2ToolResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCallClientSideV2ToolResponse {
    return new _SwCallClientSideV2ToolResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCallClientSideV2ToolResponse {
    return new _SwCallClientSideV2ToolResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCallClientSideV2ToolResponse {
    return new _SwCallClientSideV2ToolResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCallClientSideV2ToolResponse | PlainMessage<_SwCallClientSideV2ToolResponse> | undefined | null, b2: _SwCallClientSideV2ToolResponse | PlainMessage<_SwCallClientSideV2ToolResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwCallClientSideV2ToolResponse as unknown as MessageType<_SwCallClientSideV2ToolResponse>, a, b2);
  }
})();
export type SwCallClientSideV2ToolResponse = InstanceType<typeof SwCallClientSideV2ToolResponse$Runtime>;
var SwCallClientSideV2ToolResponse: MessageType<SwCallClientSideV2ToolResponse> = SwCallClientSideV2ToolResponse$Runtime as unknown as MessageType<SwCallClientSideV2ToolResponse>;
(SwCallClientSideV2ToolResponse as MutableMessageType<SwCallClientSideV2ToolResponse>).runtime = proto3;
(SwCallClientSideV2ToolResponse as MutableMessageType<SwCallClientSideV2ToolResponse>).typeName = "aiserver.v1.SwCallClientSideV2ToolResponse";
(SwCallClientSideV2ToolResponse as MutableMessageType<SwCallClientSideV2ToolResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool_result", kind: "message", T: ClientSideToolV2Result }
]);
var SwCompileRepoIncludeExcludePatternsRequest$Runtime = (() => class _SwCompileRepoIncludeExcludePatternsRequest extends Message<_SwCompileRepoIncludeExcludePatternsRequest> {
  declare includePattern?: string;
  declare excludePattern?: string;
  declare pathEncryptionKey: string;
  declare repositoryInfo?: RepositoryInfo;
  constructor(data?: PartialMessage<_SwCompileRepoIncludeExcludePatternsRequest>) {
    super();
    this.pathEncryptionKey = "";
    proto3.util.initPartial(data, this as _SwCompileRepoIncludeExcludePatternsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCompileRepoIncludeExcludePatternsRequest {
    return new _SwCompileRepoIncludeExcludePatternsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCompileRepoIncludeExcludePatternsRequest {
    return new _SwCompileRepoIncludeExcludePatternsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCompileRepoIncludeExcludePatternsRequest {
    return new _SwCompileRepoIncludeExcludePatternsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCompileRepoIncludeExcludePatternsRequest | PlainMessage<_SwCompileRepoIncludeExcludePatternsRequest> | undefined | null, b2: _SwCompileRepoIncludeExcludePatternsRequest | PlainMessage<_SwCompileRepoIncludeExcludePatternsRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwCompileRepoIncludeExcludePatternsRequest as unknown as MessageType<_SwCompileRepoIncludeExcludePatternsRequest>, a, b2);
  }
})();
export type SwCompileRepoIncludeExcludePatternsRequest = InstanceType<typeof SwCompileRepoIncludeExcludePatternsRequest$Runtime>;
var SwCompileRepoIncludeExcludePatternsRequest: MessageType<SwCompileRepoIncludeExcludePatternsRequest> = SwCompileRepoIncludeExcludePatternsRequest$Runtime as unknown as MessageType<SwCompileRepoIncludeExcludePatternsRequest>;
(SwCompileRepoIncludeExcludePatternsRequest as MutableMessageType<SwCompileRepoIncludeExcludePatternsRequest>).runtime = proto3;
(SwCompileRepoIncludeExcludePatternsRequest as MutableMessageType<SwCompileRepoIncludeExcludePatternsRequest>).typeName = "aiserver.v1.SwCompileRepoIncludeExcludePatternsRequest";
(SwCompileRepoIncludeExcludePatternsRequest as MutableMessageType<SwCompileRepoIncludeExcludePatternsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "include_pattern", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "exclude_pattern", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "path_encryption_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "repository_info", kind: "message", T: RepositoryInfo }
]);
var SwCompileRepoIncludeExcludePatternsResponse$Runtime = (() => class _SwCompileRepoIncludeExcludePatternsResponse extends Message<_SwCompileRepoIncludeExcludePatternsResponse> {
  declare globFilter?: string;
  declare notGlobFilter?: string;
  constructor(data?: PartialMessage<_SwCompileRepoIncludeExcludePatternsResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwCompileRepoIncludeExcludePatternsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwCompileRepoIncludeExcludePatternsResponse {
    return new _SwCompileRepoIncludeExcludePatternsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwCompileRepoIncludeExcludePatternsResponse {
    return new _SwCompileRepoIncludeExcludePatternsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwCompileRepoIncludeExcludePatternsResponse {
    return new _SwCompileRepoIncludeExcludePatternsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwCompileRepoIncludeExcludePatternsResponse | PlainMessage<_SwCompileRepoIncludeExcludePatternsResponse> | undefined | null, b2: _SwCompileRepoIncludeExcludePatternsResponse | PlainMessage<_SwCompileRepoIncludeExcludePatternsResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwCompileRepoIncludeExcludePatternsResponse as unknown as MessageType<_SwCompileRepoIncludeExcludePatternsResponse>, a, b2);
  }
})();
export type SwCompileRepoIncludeExcludePatternsResponse = InstanceType<typeof SwCompileRepoIncludeExcludePatternsResponse$Runtime>;
var SwCompileRepoIncludeExcludePatternsResponse: MessageType<SwCompileRepoIncludeExcludePatternsResponse> = SwCompileRepoIncludeExcludePatternsResponse$Runtime as unknown as MessageType<SwCompileRepoIncludeExcludePatternsResponse>;
(SwCompileRepoIncludeExcludePatternsResponse as MutableMessageType<SwCompileRepoIncludeExcludePatternsResponse>).runtime = proto3;
(SwCompileRepoIncludeExcludePatternsResponse as MutableMessageType<SwCompileRepoIncludeExcludePatternsResponse>).typeName = "aiserver.v1.SwCompileRepoIncludeExcludePatternsResponse";
(SwCompileRepoIncludeExcludePatternsResponse as MutableMessageType<SwCompileRepoIncludeExcludePatternsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "glob_filter", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "not_glob_filter", kind: "scalar", T: 9, opt: true }
]);
var SwProvideTemporaryAccessTokenRequest$Runtime = (() => class _SwProvideTemporaryAccessTokenRequest extends Message<_SwProvideTemporaryAccessTokenRequest> {
  declare accessToken: string;
  constructor(data?: PartialMessage<_SwProvideTemporaryAccessTokenRequest>) {
    super();
    this.accessToken = "";
    proto3.util.initPartial(data, this as _SwProvideTemporaryAccessTokenRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwProvideTemporaryAccessTokenRequest {
    return new _SwProvideTemporaryAccessTokenRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwProvideTemporaryAccessTokenRequest {
    return new _SwProvideTemporaryAccessTokenRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwProvideTemporaryAccessTokenRequest {
    return new _SwProvideTemporaryAccessTokenRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwProvideTemporaryAccessTokenRequest | PlainMessage<_SwProvideTemporaryAccessTokenRequest> | undefined | null, b2: _SwProvideTemporaryAccessTokenRequest | PlainMessage<_SwProvideTemporaryAccessTokenRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwProvideTemporaryAccessTokenRequest as unknown as MessageType<_SwProvideTemporaryAccessTokenRequest>, a, b2);
  }
})();
export type SwProvideTemporaryAccessTokenRequest = InstanceType<typeof SwProvideTemporaryAccessTokenRequest$Runtime>;
var SwProvideTemporaryAccessTokenRequest: MessageType<SwProvideTemporaryAccessTokenRequest> = SwProvideTemporaryAccessTokenRequest$Runtime as unknown as MessageType<SwProvideTemporaryAccessTokenRequest>;
(SwProvideTemporaryAccessTokenRequest as MutableMessageType<SwProvideTemporaryAccessTokenRequest>).runtime = proto3;
(SwProvideTemporaryAccessTokenRequest as MutableMessageType<SwProvideTemporaryAccessTokenRequest>).typeName = "aiserver.v1.SwProvideTemporaryAccessTokenRequest";
(SwProvideTemporaryAccessTokenRequest as MutableMessageType<SwProvideTemporaryAccessTokenRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "access_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SwProvideTemporaryAccessTokenResponse$Runtime = (() => class _SwProvideTemporaryAccessTokenResponse extends Message<_SwProvideTemporaryAccessTokenResponse> {
  constructor(data?: PartialMessage<_SwProvideTemporaryAccessTokenResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwProvideTemporaryAccessTokenResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwProvideTemporaryAccessTokenResponse {
    return new _SwProvideTemporaryAccessTokenResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwProvideTemporaryAccessTokenResponse {
    return new _SwProvideTemporaryAccessTokenResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwProvideTemporaryAccessTokenResponse {
    return new _SwProvideTemporaryAccessTokenResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwProvideTemporaryAccessTokenResponse | PlainMessage<_SwProvideTemporaryAccessTokenResponse> | undefined | null, b2: _SwProvideTemporaryAccessTokenResponse | PlainMessage<_SwProvideTemporaryAccessTokenResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwProvideTemporaryAccessTokenResponse as unknown as MessageType<_SwProvideTemporaryAccessTokenResponse>, a, b2);
  }
})();
export type SwProvideTemporaryAccessTokenResponse = InstanceType<typeof SwProvideTemporaryAccessTokenResponse$Runtime>;
var SwProvideTemporaryAccessTokenResponse: MessageType<SwProvideTemporaryAccessTokenResponse> = SwProvideTemporaryAccessTokenResponse$Runtime as unknown as MessageType<SwProvideTemporaryAccessTokenResponse>;
(SwProvideTemporaryAccessTokenResponse as MutableMessageType<SwProvideTemporaryAccessTokenResponse>).runtime = proto3;
(SwProvideTemporaryAccessTokenResponse as MutableMessageType<SwProvideTemporaryAccessTokenResponse>).typeName = "aiserver.v1.SwProvideTemporaryAccessTokenResponse";
(SwProvideTemporaryAccessTokenResponse as MutableMessageType<SwProvideTemporaryAccessTokenResponse>).fields = proto3.util.newFieldList(() => []);
var ShadowHealthCheckRequest$Runtime = (() => class _ShadowHealthCheckRequest extends Message<_ShadowHealthCheckRequest> {
  constructor(data?: PartialMessage<_ShadowHealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this as _ShadowHealthCheckRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShadowHealthCheckRequest {
    return new _ShadowHealthCheckRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShadowHealthCheckRequest {
    return new _ShadowHealthCheckRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShadowHealthCheckRequest {
    return new _ShadowHealthCheckRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _ShadowHealthCheckRequest | PlainMessage<_ShadowHealthCheckRequest> | undefined | null, b2: _ShadowHealthCheckRequest | PlainMessage<_ShadowHealthCheckRequest> | undefined | null): boolean {
    return proto3.util.equals(_ShadowHealthCheckRequest as unknown as MessageType<_ShadowHealthCheckRequest>, a, b2);
  }
})();
export type ShadowHealthCheckRequest = InstanceType<typeof ShadowHealthCheckRequest$Runtime>;
var ShadowHealthCheckRequest: MessageType<ShadowHealthCheckRequest> = ShadowHealthCheckRequest$Runtime as unknown as MessageType<ShadowHealthCheckRequest>;
(ShadowHealthCheckRequest as MutableMessageType<ShadowHealthCheckRequest>).runtime = proto3;
(ShadowHealthCheckRequest as MutableMessageType<ShadowHealthCheckRequest>).typeName = "aiserver.v1.ShadowHealthCheckRequest";
(ShadowHealthCheckRequest as MutableMessageType<ShadowHealthCheckRequest>).fields = proto3.util.newFieldList(() => []);
var ShadowHealthCheckResponse$Runtime = (() => class _ShadowHealthCheckResponse extends Message<_ShadowHealthCheckResponse> {
  constructor(data?: PartialMessage<_ShadowHealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this as _ShadowHealthCheckResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShadowHealthCheckResponse {
    return new _ShadowHealthCheckResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShadowHealthCheckResponse {
    return new _ShadowHealthCheckResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShadowHealthCheckResponse {
    return new _ShadowHealthCheckResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _ShadowHealthCheckResponse | PlainMessage<_ShadowHealthCheckResponse> | undefined | null, b2: _ShadowHealthCheckResponse | PlainMessage<_ShadowHealthCheckResponse> | undefined | null): boolean {
    return proto3.util.equals(_ShadowHealthCheckResponse as unknown as MessageType<_ShadowHealthCheckResponse>, a, b2);
  }
})();
export type ShadowHealthCheckResponse = InstanceType<typeof ShadowHealthCheckResponse$Runtime>;
var ShadowHealthCheckResponse: MessageType<ShadowHealthCheckResponse> = ShadowHealthCheckResponse$Runtime as unknown as MessageType<ShadowHealthCheckResponse>;
(ShadowHealthCheckResponse as MutableMessageType<ShadowHealthCheckResponse>).runtime = proto3;
(ShadowHealthCheckResponse as MutableMessageType<ShadowHealthCheckResponse>).typeName = "aiserver.v1.ShadowHealthCheckResponse";
(ShadowHealthCheckResponse as MutableMessageType<ShadowHealthCheckResponse>).fields = proto3.util.newFieldList(() => []);
var SwSyncIndexRequest$Runtime = (() => class _SwSyncIndexRequest extends Message<_SwSyncIndexRequest> {
  declare repositoryInfo?: RepositoryInfo;
  declare pathEncryptionKey: string;
  declare indexingProgressThreshold?: number;
  constructor(data?: PartialMessage<_SwSyncIndexRequest>) {
    super();
    this.pathEncryptionKey = "";
    proto3.util.initPartial(data, this as _SwSyncIndexRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwSyncIndexRequest {
    return new _SwSyncIndexRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwSyncIndexRequest {
    return new _SwSyncIndexRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwSyncIndexRequest {
    return new _SwSyncIndexRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SwSyncIndexRequest | PlainMessage<_SwSyncIndexRequest> | undefined | null, b2: _SwSyncIndexRequest | PlainMessage<_SwSyncIndexRequest> | undefined | null): boolean {
    return proto3.util.equals(_SwSyncIndexRequest as unknown as MessageType<_SwSyncIndexRequest>, a, b2);
  }
})();
export type SwSyncIndexRequest = InstanceType<typeof SwSyncIndexRequest$Runtime>;
var SwSyncIndexRequest: MessageType<SwSyncIndexRequest> = SwSyncIndexRequest$Runtime as unknown as MessageType<SwSyncIndexRequest>;
(SwSyncIndexRequest as MutableMessageType<SwSyncIndexRequest>).runtime = proto3;
(SwSyncIndexRequest as MutableMessageType<SwSyncIndexRequest>).typeName = "aiserver.v1.SwSyncIndexRequest";
(SwSyncIndexRequest as MutableMessageType<SwSyncIndexRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository_info", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "path_encryption_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "indexing_progress_threshold", kind: "scalar", T: 1, opt: true }
]);
var SwSyncIndexResponse$Runtime = (() => class _SwSyncIndexResponse extends Message<_SwSyncIndexResponse> {
  constructor(data?: PartialMessage<_SwSyncIndexResponse>) {
    super();
    proto3.util.initPartial(data, this as _SwSyncIndexResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwSyncIndexResponse {
    return new _SwSyncIndexResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwSyncIndexResponse {
    return new _SwSyncIndexResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwSyncIndexResponse {
    return new _SwSyncIndexResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SwSyncIndexResponse | PlainMessage<_SwSyncIndexResponse> | undefined | null, b2: _SwSyncIndexResponse | PlainMessage<_SwSyncIndexResponse> | undefined | null): boolean {
    return proto3.util.equals(_SwSyncIndexResponse as unknown as MessageType<_SwSyncIndexResponse>, a, b2);
  }
})();
export type SwSyncIndexResponse = InstanceType<typeof SwSyncIndexResponse$Runtime>;
var SwSyncIndexResponse: MessageType<SwSyncIndexResponse> = SwSyncIndexResponse$Runtime as unknown as MessageType<SwSyncIndexResponse>;
(SwSyncIndexResponse as MutableMessageType<SwSyncIndexResponse>).runtime = proto3;
(SwSyncIndexResponse as MutableMessageType<SwSyncIndexResponse>).typeName = "aiserver.v1.SwSyncIndexResponse";
(SwSyncIndexResponse as MutableMessageType<SwSyncIndexResponse>).fields = proto3.util.newFieldList(() => []);
var GetLintsForChangeRequest$Runtime = (() => class _GetLintsForChangeRequest extends Message<_GetLintsForChangeRequest> {
  declare files: GetLintsForChangeRequest_File[];
  declare includeQuickFixes: boolean;
  declare doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy: boolean;
  constructor(data?: PartialMessage<_GetLintsForChangeRequest>) {
    super();
    this.files = [];
    this.includeQuickFixes = false;
    this.doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy = false;
    proto3.util.initPartial(data, this as _GetLintsForChangeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeRequest {
    return new _GetLintsForChangeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest {
    return new _GetLintsForChangeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest {
    return new _GetLintsForChangeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeRequest | PlainMessage<_GetLintsForChangeRequest> | undefined | null, b2: _GetLintsForChangeRequest | PlainMessage<_GetLintsForChangeRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeRequest as unknown as MessageType<_GetLintsForChangeRequest>, a, b2);
  }
})();
export type GetLintsForChangeRequest = InstanceType<typeof GetLintsForChangeRequest$Runtime>;
var GetLintsForChangeRequest: MessageType<GetLintsForChangeRequest> = GetLintsForChangeRequest$Runtime as unknown as MessageType<GetLintsForChangeRequest>;
(GetLintsForChangeRequest as MutableMessageType<GetLintsForChangeRequest>).runtime = proto3;
(GetLintsForChangeRequest as MutableMessageType<GetLintsForChangeRequest>).typeName = "aiserver.v1.GetLintsForChangeRequest";
(GetLintsForChangeRequest as MutableMessageType<GetLintsForChangeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: GetLintsForChangeRequest_File, repeated: true },
  {
    no: 2,
    name: "include_quick_fixes",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetLintsForChangeRequest_File$Runtime = (() => class _GetLintsForChangeRequest_File extends Message<_GetLintsForChangeRequest_File> {
  declare relativeWorkspacePath: string;
  declare initialContent: string;
  declare finalContent: string;
  declare getAllLintsNotJustDeltaLintsForRangesInFinalModel?: GetLintsForChangeRequest_File_RangeCollection;
  constructor(data?: PartialMessage<_GetLintsForChangeRequest_File>) {
    super();
    this.relativeWorkspacePath = "";
    this.initialContent = "";
    this.finalContent = "";
    proto3.util.initPartial(data, this as _GetLintsForChangeRequest_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeRequest_File {
    return new _GetLintsForChangeRequest_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File {
    return new _GetLintsForChangeRequest_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File {
    return new _GetLintsForChangeRequest_File().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeRequest_File | PlainMessage<_GetLintsForChangeRequest_File> | undefined | null, b2: _GetLintsForChangeRequest_File | PlainMessage<_GetLintsForChangeRequest_File> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeRequest_File as unknown as MessageType<_GetLintsForChangeRequest_File>, a, b2);
  }
})();
export type GetLintsForChangeRequest_File = InstanceType<typeof GetLintsForChangeRequest_File$Runtime>;
var GetLintsForChangeRequest_File: MessageType<GetLintsForChangeRequest_File> = GetLintsForChangeRequest_File$Runtime as unknown as MessageType<GetLintsForChangeRequest_File>;
(GetLintsForChangeRequest_File as MutableMessageType<GetLintsForChangeRequest_File>).runtime = proto3;
(GetLintsForChangeRequest_File as MutableMessageType<GetLintsForChangeRequest_File>).typeName = "aiserver.v1.GetLintsForChangeRequest.File";
(GetLintsForChangeRequest_File as MutableMessageType<GetLintsForChangeRequest_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "initial_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "final_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model", kind: "message", T: GetLintsForChangeRequest_File_RangeCollection, opt: true }
]);
var GetLintsForChangeRequest_File_RangeCollection$Runtime = (() => class _GetLintsForChangeRequest_File_RangeCollection extends Message<_GetLintsForChangeRequest_File_RangeCollection> {
  declare ranges: GetLintsForChangeRequest_File_IRange[];
  constructor(data?: PartialMessage<_GetLintsForChangeRequest_File_RangeCollection>) {
    super();
    this.ranges = [];
    proto3.util.initPartial(data, this as _GetLintsForChangeRequest_File_RangeCollection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeRequest_File_RangeCollection {
    return new _GetLintsForChangeRequest_File_RangeCollection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File_RangeCollection {
    return new _GetLintsForChangeRequest_File_RangeCollection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File_RangeCollection {
    return new _GetLintsForChangeRequest_File_RangeCollection().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeRequest_File_RangeCollection | PlainMessage<_GetLintsForChangeRequest_File_RangeCollection> | undefined | null, b2: _GetLintsForChangeRequest_File_RangeCollection | PlainMessage<_GetLintsForChangeRequest_File_RangeCollection> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeRequest_File_RangeCollection as unknown as MessageType<_GetLintsForChangeRequest_File_RangeCollection>, a, b2);
  }
})();
export type GetLintsForChangeRequest_File_RangeCollection = InstanceType<typeof GetLintsForChangeRequest_File_RangeCollection$Runtime>;
var GetLintsForChangeRequest_File_RangeCollection: MessageType<GetLintsForChangeRequest_File_RangeCollection> = GetLintsForChangeRequest_File_RangeCollection$Runtime as unknown as MessageType<GetLintsForChangeRequest_File_RangeCollection>;
(GetLintsForChangeRequest_File_RangeCollection as MutableMessageType<GetLintsForChangeRequest_File_RangeCollection>).runtime = proto3;
(GetLintsForChangeRequest_File_RangeCollection as MutableMessageType<GetLintsForChangeRequest_File_RangeCollection>).typeName = "aiserver.v1.GetLintsForChangeRequest.File.RangeCollection";
(GetLintsForChangeRequest_File_RangeCollection as MutableMessageType<GetLintsForChangeRequest_File_RangeCollection>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ranges", kind: "message", T: GetLintsForChangeRequest_File_IRange, repeated: true }
]);
var GetLintsForChangeRequest_File_IRange$Runtime = (() => class _GetLintsForChangeRequest_File_IRange extends Message<_GetLintsForChangeRequest_File_IRange> {
  declare startLineNumber: number;
  declare startColumn: number;
  declare endLineNumber: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_GetLintsForChangeRequest_File_IRange>) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumber = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _GetLintsForChangeRequest_File_IRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeRequest_File_IRange {
    return new _GetLintsForChangeRequest_File_IRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File_IRange {
    return new _GetLintsForChangeRequest_File_IRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeRequest_File_IRange {
    return new _GetLintsForChangeRequest_File_IRange().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeRequest_File_IRange | PlainMessage<_GetLintsForChangeRequest_File_IRange> | undefined | null, b2: _GetLintsForChangeRequest_File_IRange | PlainMessage<_GetLintsForChangeRequest_File_IRange> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeRequest_File_IRange as unknown as MessageType<_GetLintsForChangeRequest_File_IRange>, a, b2);
  }
})();
export type GetLintsForChangeRequest_File_IRange = InstanceType<typeof GetLintsForChangeRequest_File_IRange$Runtime>;
var GetLintsForChangeRequest_File_IRange: MessageType<GetLintsForChangeRequest_File_IRange> = GetLintsForChangeRequest_File_IRange$Runtime as unknown as MessageType<GetLintsForChangeRequest_File_IRange>;
(GetLintsForChangeRequest_File_IRange as MutableMessageType<GetLintsForChangeRequest_File_IRange>).runtime = proto3;
(GetLintsForChangeRequest_File_IRange as MutableMessageType<GetLintsForChangeRequest_File_IRange>).typeName = "aiserver.v1.GetLintsForChangeRequest.File.IRange";
(GetLintsForChangeRequest_File_IRange as MutableMessageType<GetLintsForChangeRequest_File_IRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetLintsForChangeResponse$Runtime = (() => class _GetLintsForChangeResponse extends Message<_GetLintsForChangeResponse> {
  declare lints: GetLintsForChangeResponse_Lint[];
  constructor(data?: PartialMessage<_GetLintsForChangeResponse>) {
    super();
    this.lints = [];
    proto3.util.initPartial(data, this as _GetLintsForChangeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeResponse {
    return new _GetLintsForChangeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse {
    return new _GetLintsForChangeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse {
    return new _GetLintsForChangeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeResponse | PlainMessage<_GetLintsForChangeResponse> | undefined | null, b2: _GetLintsForChangeResponse | PlainMessage<_GetLintsForChangeResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeResponse as unknown as MessageType<_GetLintsForChangeResponse>, a, b2);
  }
})();
export type GetLintsForChangeResponse = InstanceType<typeof GetLintsForChangeResponse$Runtime>;
var GetLintsForChangeResponse: MessageType<GetLintsForChangeResponse> = GetLintsForChangeResponse$Runtime as unknown as MessageType<GetLintsForChangeResponse>;
(GetLintsForChangeResponse as MutableMessageType<GetLintsForChangeResponse>).runtime = proto3;
(GetLintsForChangeResponse as MutableMessageType<GetLintsForChangeResponse>).typeName = "aiserver.v1.GetLintsForChangeResponse";
(GetLintsForChangeResponse as MutableMessageType<GetLintsForChangeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "lints", kind: "message", T: GetLintsForChangeResponse_Lint, repeated: true }
]);
var GetLintsForChangeResponse_Lint$Runtime = (() => class _GetLintsForChangeResponse_Lint extends Message<_GetLintsForChangeResponse_Lint> {
  declare message: string;
  declare severity: string;
  declare relativeWorkspacePath: string;
  declare startLineNumberOneIndexed: number;
  declare startColumnOneIndexed: number;
  declare endLineNumberInclusiveOneIndexed: number;
  declare endColumnOneIndexed: number;
  declare quickFixes: GetLintsForChangeResponse_Lint_QuickFix[];
  constructor(data?: PartialMessage<_GetLintsForChangeResponse_Lint>) {
    super();
    this.message = "";
    this.severity = "";
    this.relativeWorkspacePath = "";
    this.startLineNumberOneIndexed = 0;
    this.startColumnOneIndexed = 0;
    this.endLineNumberInclusiveOneIndexed = 0;
    this.endColumnOneIndexed = 0;
    this.quickFixes = [];
    proto3.util.initPartial(data, this as _GetLintsForChangeResponse_Lint);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeResponse_Lint {
    return new _GetLintsForChangeResponse_Lint().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint {
    return new _GetLintsForChangeResponse_Lint().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint {
    return new _GetLintsForChangeResponse_Lint().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeResponse_Lint | PlainMessage<_GetLintsForChangeResponse_Lint> | undefined | null, b2: _GetLintsForChangeResponse_Lint | PlainMessage<_GetLintsForChangeResponse_Lint> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeResponse_Lint as unknown as MessageType<_GetLintsForChangeResponse_Lint>, a, b2);
  }
})();
export type GetLintsForChangeResponse_Lint = InstanceType<typeof GetLintsForChangeResponse_Lint$Runtime>;
var GetLintsForChangeResponse_Lint: MessageType<GetLintsForChangeResponse_Lint> = GetLintsForChangeResponse_Lint$Runtime as unknown as MessageType<GetLintsForChangeResponse_Lint>;
(GetLintsForChangeResponse_Lint as MutableMessageType<GetLintsForChangeResponse_Lint>).runtime = proto3;
(GetLintsForChangeResponse_Lint as MutableMessageType<GetLintsForChangeResponse_Lint>).typeName = "aiserver.v1.GetLintsForChangeResponse.Lint";
(GetLintsForChangeResponse_Lint as MutableMessageType<GetLintsForChangeResponse_Lint>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "start_line_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "start_column_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "end_line_number_inclusive_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 7,
    name: "end_column_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 9, name: "quick_fixes", kind: "message", T: GetLintsForChangeResponse_Lint_QuickFix, repeated: true }
]);
var GetLintsForChangeResponse_Lint_QuickFix$Runtime = (() => class _GetLintsForChangeResponse_Lint_QuickFix extends Message<_GetLintsForChangeResponse_Lint_QuickFix> {
  declare message: string;
  declare kind: string;
  declare isPreferred: boolean;
  declare edits: GetLintsForChangeResponse_Lint_QuickFix_Edit[];
  constructor(data?: PartialMessage<_GetLintsForChangeResponse_Lint_QuickFix>) {
    super();
    this.message = "";
    this.kind = "";
    this.isPreferred = false;
    this.edits = [];
    proto3.util.initPartial(data, this as _GetLintsForChangeResponse_Lint_QuickFix);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix {
    return new _GetLintsForChangeResponse_Lint_QuickFix().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix {
    return new _GetLintsForChangeResponse_Lint_QuickFix().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix {
    return new _GetLintsForChangeResponse_Lint_QuickFix().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeResponse_Lint_QuickFix | PlainMessage<_GetLintsForChangeResponse_Lint_QuickFix> | undefined | null, b2: _GetLintsForChangeResponse_Lint_QuickFix | PlainMessage<_GetLintsForChangeResponse_Lint_QuickFix> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeResponse_Lint_QuickFix as unknown as MessageType<_GetLintsForChangeResponse_Lint_QuickFix>, a, b2);
  }
})();
export type GetLintsForChangeResponse_Lint_QuickFix = InstanceType<typeof GetLintsForChangeResponse_Lint_QuickFix$Runtime>;
var GetLintsForChangeResponse_Lint_QuickFix: MessageType<GetLintsForChangeResponse_Lint_QuickFix> = GetLintsForChangeResponse_Lint_QuickFix$Runtime as unknown as MessageType<GetLintsForChangeResponse_Lint_QuickFix>;
(GetLintsForChangeResponse_Lint_QuickFix as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix>).runtime = proto3;
(GetLintsForChangeResponse_Lint_QuickFix as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix>).typeName = "aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix";
(GetLintsForChangeResponse_Lint_QuickFix as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "is_preferred",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "edits", kind: "message", T: GetLintsForChangeResponse_Lint_QuickFix_Edit, repeated: true }
]);
var GetLintsForChangeResponse_Lint_QuickFix_Edit$Runtime = (() => class _GetLintsForChangeResponse_Lint_QuickFix_Edit extends Message<_GetLintsForChangeResponse_Lint_QuickFix_Edit> {
  declare relativeWorkspacePath: string;
  declare text: string;
  declare startLineNumberOneIndexed: number;
  declare startColumnOneIndexed: number;
  declare endLineNumberInclusiveOneIndexed: number;
  declare endColumnOneIndexed: number;
  constructor(data?: PartialMessage<_GetLintsForChangeResponse_Lint_QuickFix_Edit>) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    this.startLineNumberOneIndexed = 0;
    this.startColumnOneIndexed = 0;
    this.endLineNumberInclusiveOneIndexed = 0;
    this.endColumnOneIndexed = 0;
    proto3.util.initPartial(data, this as _GetLintsForChangeResponse_Lint_QuickFix_Edit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix_Edit {
    return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix_Edit {
    return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLintsForChangeResponse_Lint_QuickFix_Edit {
    return new _GetLintsForChangeResponse_Lint_QuickFix_Edit().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLintsForChangeResponse_Lint_QuickFix_Edit | PlainMessage<_GetLintsForChangeResponse_Lint_QuickFix_Edit> | undefined | null, b2: _GetLintsForChangeResponse_Lint_QuickFix_Edit | PlainMessage<_GetLintsForChangeResponse_Lint_QuickFix_Edit> | undefined | null): boolean {
    return proto3.util.equals(_GetLintsForChangeResponse_Lint_QuickFix_Edit as unknown as MessageType<_GetLintsForChangeResponse_Lint_QuickFix_Edit>, a, b2);
  }
})();
export type GetLintsForChangeResponse_Lint_QuickFix_Edit = InstanceType<typeof GetLintsForChangeResponse_Lint_QuickFix_Edit$Runtime>;
var GetLintsForChangeResponse_Lint_QuickFix_Edit: MessageType<GetLintsForChangeResponse_Lint_QuickFix_Edit> = GetLintsForChangeResponse_Lint_QuickFix_Edit$Runtime as unknown as MessageType<GetLintsForChangeResponse_Lint_QuickFix_Edit>;
(GetLintsForChangeResponse_Lint_QuickFix_Edit as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix_Edit>).runtime = proto3;
(GetLintsForChangeResponse_Lint_QuickFix_Edit as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix_Edit>).typeName = "aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit";
(GetLintsForChangeResponse_Lint_QuickFix_Edit as MutableMessageType<GetLintsForChangeResponse_Lint_QuickFix_Edit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line_number_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "start_column_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "end_line_number_inclusive_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "end_column_one_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);


export { SwTrackModelRequest, SwTrackModelResponse, SwCallDiagnosticsExecutorRequest, SwCallDiagnosticsExecutorResponse, SwWriteTextFileWithLintsRequest, SwWriteTextFileWithLintsResponse, SwGetExplicitContextRequest, SwGetExplicitContextResponse, SwGetEnvironmentInfoRequest, SwGetEnvironmentInfoResponse, SwGetLinterErrorsRequest, SwGetLinterErrorsResponse, SwGetMcpToolsRequest, SwGetMcpToolsResponse, SwCallClientSideV2ToolRequest, SwCallClientSideV2ToolResponse, SwCompileRepoIncludeExcludePatternsRequest, SwCompileRepoIncludeExcludePatternsResponse, SwProvideTemporaryAccessTokenRequest, SwProvideTemporaryAccessTokenResponse, ShadowHealthCheckRequest, ShadowHealthCheckResponse, SwSyncIndexRequest, SwSyncIndexResponse, GetLintsForChangeRequest, GetLintsForChangeRequest_File, GetLintsForChangeRequest_File_RangeCollection, GetLintsForChangeRequest_File_IRange, GetLintsForChangeResponse, GetLintsForChangeResponse_Lint, GetLintsForChangeResponse_Lint_QuickFix, GetLintsForChangeResponse_Lint_QuickFix_Edit };
