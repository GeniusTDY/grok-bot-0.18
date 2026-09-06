/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:201123-201217
 * Region SHA-256: 7e3ce899de9a2f315a72585de55349d00638ab6c0ecd0bd1ea272378fddd1123
 * AI Server closure exports: 3 messages + 0 enums = 3
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { CurrentFileInfo, ModelDetails, HoverDetails, DocumentSymbolWithText } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var StreamAiPreviewsIntent$Runtime = (() => class _StreamAiPreviewsIntent extends Message<_StreamAiPreviewsIntent> {
  declare mainSymbolsToAnalyzeFromGoToDef: DocumentSymbolWithText[];
  declare mainSymbolHoverDetails?: HoverDetails;
  declare relatedSymbols: DocumentSymbolWithText[];
  declare mainSymbolsToAnalyzeFromImplementations: DocumentSymbolWithText[];
  constructor(data?: PartialMessage<_StreamAiPreviewsIntent>) {
    super();
    this.mainSymbolsToAnalyzeFromGoToDef = [];
    this.relatedSymbols = [];
    this.mainSymbolsToAnalyzeFromImplementations = [];
    proto3.util.initPartial(data, this as _StreamAiPreviewsIntent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamAiPreviewsIntent {
    return new _StreamAiPreviewsIntent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamAiPreviewsIntent {
    return new _StreamAiPreviewsIntent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamAiPreviewsIntent {
    return new _StreamAiPreviewsIntent().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamAiPreviewsIntent | PlainMessage<_StreamAiPreviewsIntent> | undefined | null, b2: _StreamAiPreviewsIntent | PlainMessage<_StreamAiPreviewsIntent> | undefined | null): boolean {
    return proto3.util.equals(_StreamAiPreviewsIntent as unknown as MessageType<_StreamAiPreviewsIntent>, a, b2);
  }
})();
export type StreamAiPreviewsIntent = InstanceType<typeof StreamAiPreviewsIntent$Runtime>;
var StreamAiPreviewsIntent: MessageType<StreamAiPreviewsIntent> = StreamAiPreviewsIntent$Runtime as unknown as MessageType<StreamAiPreviewsIntent>;
(StreamAiPreviewsIntent as MutableMessageType<StreamAiPreviewsIntent>).runtime = proto3;
(StreamAiPreviewsIntent as MutableMessageType<StreamAiPreviewsIntent>).typeName = "aiserver.v1.StreamAiPreviewsIntent";
(StreamAiPreviewsIntent as MutableMessageType<StreamAiPreviewsIntent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "main_symbols_to_analyze_from_go_to_def", kind: "message", T: DocumentSymbolWithText, repeated: true },
  { no: 4, name: "main_symbol_hover_details", kind: "message", T: HoverDetails },
  { no: 3, name: "related_symbols", kind: "message", T: DocumentSymbolWithText, repeated: true },
  { no: 6, name: "main_symbols_to_analyze_from_implementations", kind: "message", T: DocumentSymbolWithText, repeated: true }
]);
var StreamAiPreviewsRequest$Runtime = (() => class _StreamAiPreviewsRequest extends Message<_StreamAiPreviewsRequest> {
  declare currentFile?: CurrentFileInfo;
  declare intent?: StreamAiPreviewsIntent;
  declare modelDetails?: ModelDetails;
  declare isDetailed?: boolean;
  constructor(data?: PartialMessage<_StreamAiPreviewsRequest>) {
    super();
    proto3.util.initPartial(data, this as _StreamAiPreviewsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamAiPreviewsRequest {
    return new _StreamAiPreviewsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamAiPreviewsRequest {
    return new _StreamAiPreviewsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamAiPreviewsRequest {
    return new _StreamAiPreviewsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamAiPreviewsRequest | PlainMessage<_StreamAiPreviewsRequest> | undefined | null, b2: _StreamAiPreviewsRequest | PlainMessage<_StreamAiPreviewsRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamAiPreviewsRequest as unknown as MessageType<_StreamAiPreviewsRequest>, a, b2);
  }
})();
export type StreamAiPreviewsRequest = InstanceType<typeof StreamAiPreviewsRequest$Runtime>;
var StreamAiPreviewsRequest: MessageType<StreamAiPreviewsRequest> = StreamAiPreviewsRequest$Runtime as unknown as MessageType<StreamAiPreviewsRequest>;
(StreamAiPreviewsRequest as MutableMessageType<StreamAiPreviewsRequest>).runtime = proto3;
(StreamAiPreviewsRequest as MutableMessageType<StreamAiPreviewsRequest>).typeName = "aiserver.v1.StreamAiPreviewsRequest";
(StreamAiPreviewsRequest as MutableMessageType<StreamAiPreviewsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 2, name: "intent", kind: "message", T: StreamAiPreviewsIntent },
  { no: 14, name: "model_details", kind: "message", T: ModelDetails },
  { no: 15, name: "is_detailed", kind: "scalar", T: 8, opt: true }
]);
var StreamAiPreviewsResponse$Runtime = (() => class _StreamAiPreviewsResponse extends Message<_StreamAiPreviewsResponse> {
  declare text: string;
  constructor(data?: PartialMessage<_StreamAiPreviewsResponse>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _StreamAiPreviewsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamAiPreviewsResponse {
    return new _StreamAiPreviewsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamAiPreviewsResponse {
    return new _StreamAiPreviewsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamAiPreviewsResponse {
    return new _StreamAiPreviewsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamAiPreviewsResponse | PlainMessage<_StreamAiPreviewsResponse> | undefined | null, b2: _StreamAiPreviewsResponse | PlainMessage<_StreamAiPreviewsResponse> | undefined | null): boolean {
    return proto3.util.equals(_StreamAiPreviewsResponse as unknown as MessageType<_StreamAiPreviewsResponse>, a, b2);
  }
})();
export type StreamAiPreviewsResponse = InstanceType<typeof StreamAiPreviewsResponse$Runtime>;
var StreamAiPreviewsResponse: MessageType<StreamAiPreviewsResponse> = StreamAiPreviewsResponse$Runtime as unknown as MessageType<StreamAiPreviewsResponse>;
(StreamAiPreviewsResponse as MutableMessageType<StreamAiPreviewsResponse>).runtime = proto3;
(StreamAiPreviewsResponse as MutableMessageType<StreamAiPreviewsResponse>).typeName = "aiserver.v1.StreamAiPreviewsResponse";
(StreamAiPreviewsResponse as MutableMessageType<StreamAiPreviewsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { StreamAiPreviewsIntent, StreamAiPreviewsRequest, StreamAiPreviewsResponse };
