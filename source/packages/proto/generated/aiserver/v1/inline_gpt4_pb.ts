/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:201025-201122
 * Region SHA-256: 65d4a95b74735d7fc00806cc1e9254de62022ded8a6f373efeb1e6e6fd0272cc
 * AI Server closure exports: 3 messages + 1 enums = 4
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { CodeBlock, CurrentFileInfo, ModelDetails, LinterErrors, ExplicitContext } from "./utils_pb.js";
import { RepositoryInfo } from "./repository_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type StreamInlineLongCompletionRequest_ContextBlock_ContextType = 0 | 1;
var StreamInlineLongCompletionRequest_ContextBlock_ContextType: {
  "UNSPECIFIED": 0;
  "RECENT_LOCATIONS": 1;
  0: "UNSPECIFIED";
  1: "RECENT_LOCATIONS";
};
var InlineGPT4PromptProtoV1$Runtime = (() => class _InlineGPT4PromptProtoV1 extends Message<_InlineGPT4PromptProtoV1> {
  declare currentFile?: CurrentFileInfo;
  constructor(data?: PartialMessage<_InlineGPT4PromptProtoV1>) {
    super();
    proto3.util.initPartial(data, this as _InlineGPT4PromptProtoV1);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InlineGPT4PromptProtoV1 {
    return new _InlineGPT4PromptProtoV1().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InlineGPT4PromptProtoV1 {
    return new _InlineGPT4PromptProtoV1().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InlineGPT4PromptProtoV1 {
    return new _InlineGPT4PromptProtoV1().fromJsonString(jsonString, options);
  }
  static equals(a: _InlineGPT4PromptProtoV1 | PlainMessage<_InlineGPT4PromptProtoV1> | undefined | null, b2: _InlineGPT4PromptProtoV1 | PlainMessage<_InlineGPT4PromptProtoV1> | undefined | null): boolean {
    return proto3.util.equals(_InlineGPT4PromptProtoV1 as unknown as MessageType<_InlineGPT4PromptProtoV1>, a, b2);
  }
})();
export type InlineGPT4PromptProtoV1 = InstanceType<typeof InlineGPT4PromptProtoV1$Runtime>;
var InlineGPT4PromptProtoV1: MessageType<InlineGPT4PromptProtoV1> = InlineGPT4PromptProtoV1$Runtime as unknown as MessageType<InlineGPT4PromptProtoV1>;
(InlineGPT4PromptProtoV1 as MutableMessageType<InlineGPT4PromptProtoV1>).runtime = proto3;
(InlineGPT4PromptProtoV1 as MutableMessageType<InlineGPT4PromptProtoV1>).typeName = "aiserver.v1.InlineGPT4PromptProtoV1";
(InlineGPT4PromptProtoV1 as MutableMessageType<InlineGPT4PromptProtoV1>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo }
]);
var StreamInlineLongCompletionRequest$Runtime = (() => class _StreamInlineLongCompletionRequest extends Message<_StreamInlineLongCompletionRequest> {
  declare currentFile?: CurrentFileInfo;
  declare repositories: RepositoryInfo[];
  declare contextBlocks: StreamInlineLongCompletionRequest_ContextBlock[];
  declare explicitContext?: ExplicitContext;
  declare modelDetails?: ModelDetails;
  declare linterErrors?: LinterErrors;
  constructor(data?: PartialMessage<_StreamInlineLongCompletionRequest>) {
    super();
    this.repositories = [];
    this.contextBlocks = [];
    proto3.util.initPartial(data, this as _StreamInlineLongCompletionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamInlineLongCompletionRequest {
    return new _StreamInlineLongCompletionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamInlineLongCompletionRequest {
    return new _StreamInlineLongCompletionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamInlineLongCompletionRequest {
    return new _StreamInlineLongCompletionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamInlineLongCompletionRequest | PlainMessage<_StreamInlineLongCompletionRequest> | undefined | null, b2: _StreamInlineLongCompletionRequest | PlainMessage<_StreamInlineLongCompletionRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamInlineLongCompletionRequest as unknown as MessageType<_StreamInlineLongCompletionRequest>, a, b2);
  }
})();
export type StreamInlineLongCompletionRequest = InstanceType<typeof StreamInlineLongCompletionRequest$Runtime>;
var StreamInlineLongCompletionRequest: MessageType<StreamInlineLongCompletionRequest> = StreamInlineLongCompletionRequest$Runtime as unknown as MessageType<StreamInlineLongCompletionRequest>;
(StreamInlineLongCompletionRequest as MutableMessageType<StreamInlineLongCompletionRequest>).runtime = proto3;
(StreamInlineLongCompletionRequest as MutableMessageType<StreamInlineLongCompletionRequest>).typeName = "aiserver.v1.StreamInlineLongCompletionRequest";
(StreamInlineLongCompletionRequest as MutableMessageType<StreamInlineLongCompletionRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_file", kind: "message", T: CurrentFileInfo },
  { no: 6, name: "repositories", kind: "message", T: RepositoryInfo, repeated: true },
  { no: 7, name: "context_blocks", kind: "message", T: StreamInlineLongCompletionRequest_ContextBlock, repeated: true },
  { no: 13, name: "explicit_context", kind: "message", T: ExplicitContext },
  { no: 14, name: "model_details", kind: "message", T: ModelDetails },
  { no: 15, name: "linter_errors", kind: "message", T: LinterErrors }
]);
var StreamInlineLongCompletionRequest_ContextBlock$Runtime = (() => class _StreamInlineLongCompletionRequest_ContextBlock extends Message<_StreamInlineLongCompletionRequest_ContextBlock> {
  declare contextType: StreamInlineLongCompletionRequest_ContextBlock_ContextType;
  declare blocks: CodeBlock[];
  constructor(data?: PartialMessage<_StreamInlineLongCompletionRequest_ContextBlock>) {
    super();
    this.contextType = StreamInlineLongCompletionRequest_ContextBlock_ContextType.UNSPECIFIED;
    this.blocks = [];
    proto3.util.initPartial(data, this as _StreamInlineLongCompletionRequest_ContextBlock);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamInlineLongCompletionRequest_ContextBlock {
    return new _StreamInlineLongCompletionRequest_ContextBlock().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamInlineLongCompletionRequest_ContextBlock {
    return new _StreamInlineLongCompletionRequest_ContextBlock().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamInlineLongCompletionRequest_ContextBlock {
    return new _StreamInlineLongCompletionRequest_ContextBlock().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamInlineLongCompletionRequest_ContextBlock | PlainMessage<_StreamInlineLongCompletionRequest_ContextBlock> | undefined | null, b2: _StreamInlineLongCompletionRequest_ContextBlock | PlainMessage<_StreamInlineLongCompletionRequest_ContextBlock> | undefined | null): boolean {
    return proto3.util.equals(_StreamInlineLongCompletionRequest_ContextBlock as unknown as MessageType<_StreamInlineLongCompletionRequest_ContextBlock>, a, b2);
  }
})();
export type StreamInlineLongCompletionRequest_ContextBlock = InstanceType<typeof StreamInlineLongCompletionRequest_ContextBlock$Runtime>;
var StreamInlineLongCompletionRequest_ContextBlock: MessageType<StreamInlineLongCompletionRequest_ContextBlock> = StreamInlineLongCompletionRequest_ContextBlock$Runtime as unknown as MessageType<StreamInlineLongCompletionRequest_ContextBlock>;
(StreamInlineLongCompletionRequest_ContextBlock as MutableMessageType<StreamInlineLongCompletionRequest_ContextBlock>).runtime = proto3;
(StreamInlineLongCompletionRequest_ContextBlock as MutableMessageType<StreamInlineLongCompletionRequest_ContextBlock>).typeName = "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock";
(StreamInlineLongCompletionRequest_ContextBlock as MutableMessageType<StreamInlineLongCompletionRequest_ContextBlock>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_type", kind: "enum", T: proto3.getEnumType(StreamInlineLongCompletionRequest_ContextBlock_ContextType) },
  { no: 2, name: "blocks", kind: "message", T: CodeBlock, repeated: true }
]);
(function(StreamInlineLongCompletionRequest_ContextBlock_ContextType2) {
  StreamInlineLongCompletionRequest_ContextBlock_ContextType2[StreamInlineLongCompletionRequest_ContextBlock_ContextType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StreamInlineLongCompletionRequest_ContextBlock_ContextType2[StreamInlineLongCompletionRequest_ContextBlock_ContextType2["RECENT_LOCATIONS"] = 1] = "RECENT_LOCATIONS";
})(StreamInlineLongCompletionRequest_ContextBlock_ContextType! || (StreamInlineLongCompletionRequest_ContextBlock_ContextType = {} as typeof StreamInlineLongCompletionRequest_ContextBlock_ContextType));
proto3.util.setEnumType(StreamInlineLongCompletionRequest_ContextBlock_ContextType, "aiserver.v1.StreamInlineLongCompletionRequest.ContextBlock.ContextType", [
  { no: 0, name: "CONTEXT_TYPE_UNSPECIFIED" },
  { no: 1, name: "CONTEXT_TYPE_RECENT_LOCATIONS" }
]);


export { InlineGPT4PromptProtoV1, StreamInlineLongCompletionRequest, StreamInlineLongCompletionRequest_ContextBlock, StreamInlineLongCompletionRequest_ContextBlock_ContextType };
