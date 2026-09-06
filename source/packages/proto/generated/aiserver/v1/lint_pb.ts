/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:180278-181083
 * Region SHA-256: e99f1f52fc1e46a0f5d86f496949df9254ee6d86395e6bcd503cce39a0536dc7
 * AI Server closure exports: 18 messages + 2 enums = 20
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { SimpleRange } from "./utils_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type LintDiscriminator = 0 | 1 | 2 | 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
var LintDiscriminator: {
  "UNSPECIFIED": 0;
  "SPECIFIC_RULES": 1;
  "COMPILE_ERRORS": 2;
  "CHANGE_BEHAVIOR": 3;
  "RELEVANCE": 5;
  "USER_AWARENESS": 6;
  "CORRECTNESS": 7;
  "CHUNKING": 8;
  "TYPO": 9;
  "CONFIDENCE": 10;
  "DISMISSED_BUGS": 11;
  0: "UNSPECIFIED";
  1: "SPECIFIC_RULES";
  2: "COMPILE_ERRORS";
  3: "CHANGE_BEHAVIOR";
  5: "RELEVANCE";
  6: "USER_AWARENESS";
  7: "CORRECTNESS";
  8: "CHUNKING";
  9: "TYPO";
  10: "CONFIDENCE";
  11: "DISMISSED_BUGS";
};
export type LintGenerator = 0 | 1 | 2 | 3 | 4;
var LintGenerator: {
  "UNSPECIFIED": 0;
  "NAIVE": 1;
  "COMMENT_PIPELINE": 2;
  "SIMPLE_BUG": 3;
  "SIMPLE_LINT_RULES": 4;
  0: "UNSPECIFIED";
  1: "NAIVE";
  2: "COMMENT_PIPELINE";
  3: "SIMPLE_BUG";
  4: "SIMPLE_LINT_RULES";
};
(function(LintDiscriminator2) {
  LintDiscriminator2[LintDiscriminator2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LintDiscriminator2[LintDiscriminator2["SPECIFIC_RULES"] = 1] = "SPECIFIC_RULES";
  LintDiscriminator2[LintDiscriminator2["COMPILE_ERRORS"] = 2] = "COMPILE_ERRORS";
  LintDiscriminator2[LintDiscriminator2["CHANGE_BEHAVIOR"] = 3] = "CHANGE_BEHAVIOR";
  LintDiscriminator2[LintDiscriminator2["RELEVANCE"] = 5] = "RELEVANCE";
  LintDiscriminator2[LintDiscriminator2["USER_AWARENESS"] = 6] = "USER_AWARENESS";
  LintDiscriminator2[LintDiscriminator2["CORRECTNESS"] = 7] = "CORRECTNESS";
  LintDiscriminator2[LintDiscriminator2["CHUNKING"] = 8] = "CHUNKING";
  LintDiscriminator2[LintDiscriminator2["TYPO"] = 9] = "TYPO";
  LintDiscriminator2[LintDiscriminator2["CONFIDENCE"] = 10] = "CONFIDENCE";
  LintDiscriminator2[LintDiscriminator2["DISMISSED_BUGS"] = 11] = "DISMISSED_BUGS";
})(LintDiscriminator! || (LintDiscriminator = {} as typeof LintDiscriminator));
proto3.util.setEnumType(LintDiscriminator, "aiserver.v1.LintDiscriminator", [
  { no: 0, name: "LINT_DISCRIMINATOR_UNSPECIFIED" },
  { no: 1, name: "LINT_DISCRIMINATOR_SPECIFIC_RULES" },
  { no: 2, name: "LINT_DISCRIMINATOR_COMPILE_ERRORS" },
  { no: 3, name: "LINT_DISCRIMINATOR_CHANGE_BEHAVIOR" },
  { no: 5, name: "LINT_DISCRIMINATOR_RELEVANCE" },
  { no: 6, name: "LINT_DISCRIMINATOR_USER_AWARENESS" },
  { no: 7, name: "LINT_DISCRIMINATOR_CORRECTNESS" },
  { no: 8, name: "LINT_DISCRIMINATOR_CHUNKING" },
  { no: 9, name: "LINT_DISCRIMINATOR_TYPO" },
  { no: 10, name: "LINT_DISCRIMINATOR_CONFIDENCE" },
  { no: 11, name: "LINT_DISCRIMINATOR_DISMISSED_BUGS" }
]);
(function(LintGenerator2) {
  LintGenerator2[LintGenerator2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LintGenerator2[LintGenerator2["NAIVE"] = 1] = "NAIVE";
  LintGenerator2[LintGenerator2["COMMENT_PIPELINE"] = 2] = "COMMENT_PIPELINE";
  LintGenerator2[LintGenerator2["SIMPLE_BUG"] = 3] = "SIMPLE_BUG";
  LintGenerator2[LintGenerator2["SIMPLE_LINT_RULES"] = 4] = "SIMPLE_LINT_RULES";
})(LintGenerator! || (LintGenerator = {} as typeof LintGenerator));
proto3.util.setEnumType(LintGenerator, "aiserver.v1.LintGenerator", [
  { no: 0, name: "LINT_GENERATOR_UNSPECIFIED" },
  { no: 1, name: "LINT_GENERATOR_NAIVE" },
  { no: 2, name: "LINT_GENERATOR_COMMENT_PIPELINE" },
  { no: 3, name: "LINT_GENERATOR_SIMPLE_BUG" },
  { no: 4, name: "LINT_GENERATOR_SIMPLE_LINT_RULES" }
]);
var LintExplanationRequest$Runtime = (() => class _LintExplanationRequest extends Message<_LintExplanationRequest> {
  declare relativeFilePath: string;
  declare chunk?: LintChunk;
  declare lineSelection: string;
  declare tokenStartIndex: number;
  declare tokenEndIndex: number;
  declare likelyAlternateToken: string;
  declare lineChunkIndexZeroBased: number;
  constructor(data?: PartialMessage<_LintExplanationRequest>) {
    super();
    this.relativeFilePath = "";
    this.lineSelection = "";
    this.tokenStartIndex = 0;
    this.tokenEndIndex = 0;
    this.likelyAlternateToken = "";
    this.lineChunkIndexZeroBased = 0;
    proto3.util.initPartial(data, this as _LintExplanationRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintExplanationRequest {
    return new _LintExplanationRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintExplanationRequest {
    return new _LintExplanationRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintExplanationRequest {
    return new _LintExplanationRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LintExplanationRequest | PlainMessage<_LintExplanationRequest> | undefined | null, b2: _LintExplanationRequest | PlainMessage<_LintExplanationRequest> | undefined | null): boolean {
    return proto3.util.equals(_LintExplanationRequest as unknown as MessageType<_LintExplanationRequest>, a, b2);
  }
})();
export type LintExplanationRequest = InstanceType<typeof LintExplanationRequest$Runtime>;
var LintExplanationRequest: MessageType<LintExplanationRequest> = LintExplanationRequest$Runtime as unknown as MessageType<LintExplanationRequest>;
(LintExplanationRequest as MutableMessageType<LintExplanationRequest>).runtime = proto3;
(LintExplanationRequest as MutableMessageType<LintExplanationRequest>).typeName = "aiserver.v1.LintExplanationRequest";
(LintExplanationRequest as MutableMessageType<LintExplanationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "chunk", kind: "message", T: LintChunk },
  {
    no: 3,
    name: "line_selection",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "token_start_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "token_end_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "likely_alternate_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "line_chunk_index_zero_based",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var LintExplanationResponse$Runtime = (() => class _LintExplanationResponse extends Message<_LintExplanationResponse> {
  declare explanation: string;
  constructor(data?: PartialMessage<_LintExplanationResponse>) {
    super();
    this.explanation = "";
    proto3.util.initPartial(data, this as _LintExplanationResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintExplanationResponse {
    return new _LintExplanationResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintExplanationResponse {
    return new _LintExplanationResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintExplanationResponse {
    return new _LintExplanationResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LintExplanationResponse | PlainMessage<_LintExplanationResponse> | undefined | null, b2: _LintExplanationResponse | PlainMessage<_LintExplanationResponse> | undefined | null): boolean {
    return proto3.util.equals(_LintExplanationResponse as unknown as MessageType<_LintExplanationResponse>, a, b2);
  }
})();
export type LintExplanationResponse = InstanceType<typeof LintExplanationResponse$Runtime>;
var LintExplanationResponse: MessageType<LintExplanationResponse> = LintExplanationResponse$Runtime as unknown as MessageType<LintExplanationResponse>;
(LintExplanationResponse as MutableMessageType<LintExplanationResponse>).runtime = proto3;
(LintExplanationResponse as MutableMessageType<LintExplanationResponse>).typeName = "aiserver.v1.LintExplanationResponse";
(LintExplanationResponse as MutableMessageType<LintExplanationResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "explanation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LintExplanationResponse2$Runtime = (() => class _LintExplanationResponse2 extends Message<_LintExplanationResponse2> {
  declare origLine: string;
  declare newLine: string;
  constructor(data?: PartialMessage<_LintExplanationResponse2>) {
    super();
    this.origLine = "";
    this.newLine = "";
    proto3.util.initPartial(data, this as _LintExplanationResponse2);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintExplanationResponse2 {
    return new _LintExplanationResponse2().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintExplanationResponse2 {
    return new _LintExplanationResponse2().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintExplanationResponse2 {
    return new _LintExplanationResponse2().fromJsonString(jsonString, options);
  }
  static equals(a: _LintExplanationResponse2 | PlainMessage<_LintExplanationResponse2> | undefined | null, b2: _LintExplanationResponse2 | PlainMessage<_LintExplanationResponse2> | undefined | null): boolean {
    return proto3.util.equals(_LintExplanationResponse2 as unknown as MessageType<_LintExplanationResponse2>, a, b2);
  }
})();
export type LintExplanationResponse2 = InstanceType<typeof LintExplanationResponse2$Runtime>;
var LintExplanationResponse2: MessageType<LintExplanationResponse2> = LintExplanationResponse2$Runtime as unknown as MessageType<LintExplanationResponse2>;
(LintExplanationResponse2 as MutableMessageType<LintExplanationResponse2>).runtime = proto3;
(LintExplanationResponse2 as MutableMessageType<LintExplanationResponse2>).typeName = "aiserver.v1.LintExplanationResponse2";
(LintExplanationResponse2 as MutableMessageType<LintExplanationResponse2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "orig_line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LintChunk$Runtime = (() => class _LintChunk extends Message<_LintChunk> {
  declare chunkContents: string;
  declare startLineNumber: number;
  declare numRemainingLines: number;
  constructor(data?: PartialMessage<_LintChunk>) {
    super();
    this.chunkContents = "";
    this.startLineNumber = 0;
    this.numRemainingLines = 0;
    proto3.util.initPartial(data, this as _LintChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintChunk {
    return new _LintChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintChunk {
    return new _LintChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintChunk {
    return new _LintChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _LintChunk | PlainMessage<_LintChunk> | undefined | null, b2: _LintChunk | PlainMessage<_LintChunk> | undefined | null): boolean {
    return proto3.util.equals(_LintChunk as unknown as MessageType<_LintChunk>, a, b2);
  }
})();
export type LintChunk = InstanceType<typeof LintChunk$Runtime>;
var LintChunk: MessageType<LintChunk> = LintChunk$Runtime as unknown as MessageType<LintChunk>;
(LintChunk as MutableMessageType<LintChunk>).runtime = proto3;
(LintChunk as MutableMessageType<LintChunk>).typeName = "aiserver.v1.LintChunk";
(LintChunk as MutableMessageType<LintChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "chunk_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "num_remaining_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var LintChunkRequest$Runtime = (() => class _LintChunkRequest extends Message<_LintChunkRequest> {
  declare relativeFilePath: string;
  declare chunk?: LintChunk;
  declare useSpeculativeLinter?: boolean;
  constructor(data?: PartialMessage<_LintChunkRequest>) {
    super();
    this.relativeFilePath = "";
    proto3.util.initPartial(data, this as _LintChunkRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintChunkRequest {
    return new _LintChunkRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintChunkRequest {
    return new _LintChunkRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintChunkRequest {
    return new _LintChunkRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LintChunkRequest | PlainMessage<_LintChunkRequest> | undefined | null, b2: _LintChunkRequest | PlainMessage<_LintChunkRequest> | undefined | null): boolean {
    return proto3.util.equals(_LintChunkRequest as unknown as MessageType<_LintChunkRequest>, a, b2);
  }
})();
export type LintChunkRequest = InstanceType<typeof LintChunkRequest$Runtime>;
var LintChunkRequest: MessageType<LintChunkRequest> = LintChunkRequest$Runtime as unknown as MessageType<LintChunkRequest>;
(LintChunkRequest as MutableMessageType<LintChunkRequest>).runtime = proto3;
(LintChunkRequest as MutableMessageType<LintChunkRequest>).typeName = "aiserver.v1.LintChunkRequest";
(LintChunkRequest as MutableMessageType<LintChunkRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "chunk", kind: "message", T: LintChunk },
  { no: 3, name: "use_speculative_linter", kind: "scalar", T: 8, opt: true }
]);
var LintChunkResponse$Runtime = (() => class _LintChunkResponse extends Message<_LintChunkResponse> {
  declare chunkTokens: TokenIndex[];
  constructor(data?: PartialMessage<_LintChunkResponse>) {
    super();
    this.chunkTokens = [];
    proto3.util.initPartial(data, this as _LintChunkResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintChunkResponse {
    return new _LintChunkResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintChunkResponse {
    return new _LintChunkResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintChunkResponse {
    return new _LintChunkResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LintChunkResponse | PlainMessage<_LintChunkResponse> | undefined | null, b2: _LintChunkResponse | PlainMessage<_LintChunkResponse> | undefined | null): boolean {
    return proto3.util.equals(_LintChunkResponse as unknown as MessageType<_LintChunkResponse>, a, b2);
  }
})();
export type LintChunkResponse = InstanceType<typeof LintChunkResponse$Runtime>;
var LintChunkResponse: MessageType<LintChunkResponse> = LintChunkResponse$Runtime as unknown as MessageType<LintChunkResponse>;
(LintChunkResponse as MutableMessageType<LintChunkResponse>).runtime = proto3;
(LintChunkResponse as MutableMessageType<LintChunkResponse>).typeName = "aiserver.v1.LintChunkResponse";
(LintChunkResponse as MutableMessageType<LintChunkResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chunk_tokens", kind: "message", T: TokenIndex, repeated: true }
]);
var LintFimChunkRequest$Runtime = (() => class _LintFimChunkRequest extends Message<_LintFimChunkRequest> {
  declare relativeFilePath: string;
  declare prefix?: LintChunk;
  declare suffix?: LintChunk;
  declare middle?: LintChunk;
  constructor(data?: PartialMessage<_LintFimChunkRequest>) {
    super();
    this.relativeFilePath = "";
    proto3.util.initPartial(data, this as _LintFimChunkRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintFimChunkRequest {
    return new _LintFimChunkRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintFimChunkRequest {
    return new _LintFimChunkRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintFimChunkRequest {
    return new _LintFimChunkRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LintFimChunkRequest | PlainMessage<_LintFimChunkRequest> | undefined | null, b2: _LintFimChunkRequest | PlainMessage<_LintFimChunkRequest> | undefined | null): boolean {
    return proto3.util.equals(_LintFimChunkRequest as unknown as MessageType<_LintFimChunkRequest>, a, b2);
  }
})();
export type LintFimChunkRequest = InstanceType<typeof LintFimChunkRequest$Runtime>;
var LintFimChunkRequest: MessageType<LintFimChunkRequest> = LintFimChunkRequest$Runtime as unknown as MessageType<LintFimChunkRequest>;
(LintFimChunkRequest as MutableMessageType<LintFimChunkRequest>).runtime = proto3;
(LintFimChunkRequest as MutableMessageType<LintFimChunkRequest>).typeName = "aiserver.v1.LintFimChunkRequest";
(LintFimChunkRequest as MutableMessageType<LintFimChunkRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "prefix", kind: "message", T: LintChunk },
  { no: 3, name: "suffix", kind: "message", T: LintChunk },
  { no: 4, name: "middle", kind: "message", T: LintChunk }
]);
var LintFimChunkResponse$Runtime = (() => class _LintFimChunkResponse extends Message<_LintFimChunkResponse> {
  declare middleChunkTokens: TokenIndex[];
  constructor(data?: PartialMessage<_LintFimChunkResponse>) {
    super();
    this.middleChunkTokens = [];
    proto3.util.initPartial(data, this as _LintFimChunkResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintFimChunkResponse {
    return new _LintFimChunkResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintFimChunkResponse {
    return new _LintFimChunkResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintFimChunkResponse {
    return new _LintFimChunkResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LintFimChunkResponse | PlainMessage<_LintFimChunkResponse> | undefined | null, b2: _LintFimChunkResponse | PlainMessage<_LintFimChunkResponse> | undefined | null): boolean {
    return proto3.util.equals(_LintFimChunkResponse as unknown as MessageType<_LintFimChunkResponse>, a, b2);
  }
})();
export type LintFimChunkResponse = InstanceType<typeof LintFimChunkResponse$Runtime>;
var LintFimChunkResponse: MessageType<LintFimChunkResponse> = LintFimChunkResponse$Runtime as unknown as MessageType<LintFimChunkResponse>;
(LintFimChunkResponse as MutableMessageType<LintFimChunkResponse>).runtime = proto3;
(LintFimChunkResponse as MutableMessageType<LintFimChunkResponse>).typeName = "aiserver.v1.LintFimChunkResponse";
(LintFimChunkResponse as MutableMessageType<LintFimChunkResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "middle_chunk_tokens", kind: "message", T: TokenIndex, repeated: true }
]);
var LintFileRequest$Runtime = (() => class _LintFileRequest extends Message<_LintFileRequest> {
  declare relativeFilePath: string;
  declare fileContents: string;
  constructor(data?: PartialMessage<_LintFileRequest>) {
    super();
    this.relativeFilePath = "";
    this.fileContents = "";
    proto3.util.initPartial(data, this as _LintFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintFileRequest {
    return new _LintFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintFileRequest {
    return new _LintFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintFileRequest {
    return new _LintFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LintFileRequest | PlainMessage<_LintFileRequest> | undefined | null, b2: _LintFileRequest | PlainMessage<_LintFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_LintFileRequest as unknown as MessageType<_LintFileRequest>, a, b2);
  }
})();
export type LintFileRequest = InstanceType<typeof LintFileRequest$Runtime>;
var LintFileRequest: MessageType<LintFileRequest> = LintFileRequest$Runtime as unknown as MessageType<LintFileRequest>;
(LintFileRequest as MutableMessageType<LintFileRequest>).runtime = proto3;
(LintFileRequest as MutableMessageType<LintFileRequest>).typeName = "aiserver.v1.LintFileRequest";
(LintFileRequest as MutableMessageType<LintFileRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TokensWithLogprobs$Runtime = (() => class _TokensWithLogprobs extends Message<_TokensWithLogprobs> {
  declare token: string;
  declare logProbability: number;
  constructor(data?: PartialMessage<_TokensWithLogprobs>) {
    super();
    this.token = "";
    this.logProbability = 0;
    proto3.util.initPartial(data, this as _TokensWithLogprobs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TokensWithLogprobs {
    return new _TokensWithLogprobs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TokensWithLogprobs {
    return new _TokensWithLogprobs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TokensWithLogprobs {
    return new _TokensWithLogprobs().fromJsonString(jsonString, options);
  }
  static equals(a: _TokensWithLogprobs | PlainMessage<_TokensWithLogprobs> | undefined | null, b2: _TokensWithLogprobs | PlainMessage<_TokensWithLogprobs> | undefined | null): boolean {
    return proto3.util.equals(_TokensWithLogprobs as unknown as MessageType<_TokensWithLogprobs>, a, b2);
  }
})();
export type TokensWithLogprobs = InstanceType<typeof TokensWithLogprobs$Runtime>;
var TokensWithLogprobs: MessageType<TokensWithLogprobs> = TokensWithLogprobs$Runtime as unknown as MessageType<TokensWithLogprobs>;
(TokensWithLogprobs as MutableMessageType<TokensWithLogprobs>).runtime = proto3;
(TokensWithLogprobs as MutableMessageType<TokensWithLogprobs>).typeName = "aiserver.v1.TokensWithLogprobs";
(TokensWithLogprobs as MutableMessageType<TokensWithLogprobs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "log_probability",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var TokenIndex$Runtime = (() => class _TokenIndex extends Message<_TokenIndex> {
  declare tokensWithLogprobs: TokensWithLogprobs[];
  declare actualToken: string;
  constructor(data?: PartialMessage<_TokenIndex>) {
    super();
    this.tokensWithLogprobs = [];
    this.actualToken = "";
    proto3.util.initPartial(data, this as _TokenIndex);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TokenIndex {
    return new _TokenIndex().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TokenIndex {
    return new _TokenIndex().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TokenIndex {
    return new _TokenIndex().fromJsonString(jsonString, options);
  }
  static equals(a: _TokenIndex | PlainMessage<_TokenIndex> | undefined | null, b2: _TokenIndex | PlainMessage<_TokenIndex> | undefined | null): boolean {
    return proto3.util.equals(_TokenIndex as unknown as MessageType<_TokenIndex>, a, b2);
  }
})();
export type TokenIndex = InstanceType<typeof TokenIndex$Runtime>;
var TokenIndex: MessageType<TokenIndex> = TokenIndex$Runtime as unknown as MessageType<TokenIndex>;
(TokenIndex as MutableMessageType<TokenIndex>).runtime = proto3;
(TokenIndex as MutableMessageType<TokenIndex>).typeName = "aiserver.v1.TokenIndex";
(TokenIndex as MutableMessageType<TokenIndex>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tokens_with_logprobs", kind: "message", T: TokensWithLogprobs, repeated: true },
  {
    no: 2,
    name: "actual_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LintFileResponse$Runtime = (() => class _LintFileResponse extends Message<_LintFileResponse> {
  declare tokens: TokenIndex[];
  constructor(data?: PartialMessage<_LintFileResponse>) {
    super();
    this.tokens = [];
    proto3.util.initPartial(data, this as _LintFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintFileResponse {
    return new _LintFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintFileResponse {
    return new _LintFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintFileResponse {
    return new _LintFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LintFileResponse | PlainMessage<_LintFileResponse> | undefined | null, b2: _LintFileResponse | PlainMessage<_LintFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_LintFileResponse as unknown as MessageType<_LintFileResponse>, a, b2);
  }
})();
export type LintFileResponse = InstanceType<typeof LintFileResponse$Runtime>;
var LintFileResponse: MessageType<LintFileResponse> = LintFileResponse$Runtime as unknown as MessageType<LintFileResponse>;
(LintFileResponse as MutableMessageType<LintFileResponse>).runtime = proto3;
(LintFileResponse as MutableMessageType<LintFileResponse>).typeName = "aiserver.v1.LintFileResponse";
(LintFileResponse as MutableMessageType<LintFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tokens", kind: "message", T: TokenIndex, repeated: true }
]);
var LintDiscriminatorResult$Runtime = (() => class _LintDiscriminatorResult extends Message<_LintDiscriminatorResult> {
  declare discriminator: LintDiscriminator;
  declare allow: boolean;
  declare reasoning: string;
  constructor(data?: PartialMessage<_LintDiscriminatorResult>) {
    super();
    this.discriminator = LintDiscriminator.UNSPECIFIED;
    this.allow = false;
    this.reasoning = "";
    proto3.util.initPartial(data, this as _LintDiscriminatorResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LintDiscriminatorResult {
    return new _LintDiscriminatorResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LintDiscriminatorResult {
    return new _LintDiscriminatorResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LintDiscriminatorResult {
    return new _LintDiscriminatorResult().fromJsonString(jsonString, options);
  }
  static equals(a: _LintDiscriminatorResult | PlainMessage<_LintDiscriminatorResult> | undefined | null, b2: _LintDiscriminatorResult | PlainMessage<_LintDiscriminatorResult> | undefined | null): boolean {
    return proto3.util.equals(_LintDiscriminatorResult as unknown as MessageType<_LintDiscriminatorResult>, a, b2);
  }
})();
export type LintDiscriminatorResult = InstanceType<typeof LintDiscriminatorResult$Runtime>;
var LintDiscriminatorResult: MessageType<LintDiscriminatorResult> = LintDiscriminatorResult$Runtime as unknown as MessageType<LintDiscriminatorResult>;
(LintDiscriminatorResult as MutableMessageType<LintDiscriminatorResult>).runtime = proto3;
(LintDiscriminatorResult as MutableMessageType<LintDiscriminatorResult>).typeName = "aiserver.v1.LintDiscriminatorResult";
(LintDiscriminatorResult as MutableMessageType<LintDiscriminatorResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "discriminator", kind: "enum", T: proto3.getEnumType(LintDiscriminator) },
  {
    no: 2,
    name: "allow",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "reasoning",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiLintBug$Runtime = (() => class _AiLintBug extends Message<_AiLintBug> {
  declare relativeWorkspacePath: string;
  declare uuid: string;
  declare message: string;
  declare replaceRange?: SimpleRange;
  declare replaceText: string;
  declare replaceInitialText: string;
  declare reevaluateRange?: SimpleRange;
  declare reevaluateInitialText: string;
  declare generator: LintGenerator;
  declare discriminatorResults: LintDiscriminatorResult[];
  declare logprobsPayload?: LogprobsLintPayload;
  constructor(data?: PartialMessage<_AiLintBug>) {
    super();
    this.relativeWorkspacePath = "";
    this.uuid = "";
    this.message = "";
    this.replaceText = "";
    this.replaceInitialText = "";
    this.reevaluateInitialText = "";
    this.generator = LintGenerator.UNSPECIFIED;
    this.discriminatorResults = [];
    proto3.util.initPartial(data, this as _AiLintBug);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiLintBug {
    return new _AiLintBug().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiLintBug {
    return new _AiLintBug().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiLintBug {
    return new _AiLintBug().fromJsonString(jsonString, options);
  }
  static equals(a: _AiLintBug | PlainMessage<_AiLintBug> | undefined | null, b2: _AiLintBug | PlainMessage<_AiLintBug> | undefined | null): boolean {
    return proto3.util.equals(_AiLintBug as unknown as MessageType<_AiLintBug>, a, b2);
  }
})();
export type AiLintBug = InstanceType<typeof AiLintBug$Runtime>;
var AiLintBug: MessageType<AiLintBug> = AiLintBug$Runtime as unknown as MessageType<AiLintBug>;
(AiLintBug as MutableMessageType<AiLintBug>).runtime = proto3;
(AiLintBug as MutableMessageType<AiLintBug>).typeName = "aiserver.v1.AiLintBug";
(AiLintBug as MutableMessageType<AiLintBug>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "replace_range", kind: "message", T: SimpleRange },
  {
    no: 4,
    name: "replace_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "replace_initial_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "reevaluate_range", kind: "message", T: SimpleRange },
  {
    no: 7,
    name: "reevaluate_initial_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "generator", kind: "enum", T: proto3.getEnumType(LintGenerator) },
  { no: 10, name: "discriminator_results", kind: "message", T: LintDiscriminatorResult, repeated: true },
  { no: 11, name: "logprobs_payload", kind: "message", T: LogprobsLintPayload }
]);
var LogprobsLintPayload$Runtime = (() => class _LogprobsLintPayload extends Message<_LogprobsLintPayload> {
  declare chunk: string;
  declare problematicLine: string;
  declare startCol: number;
  declare endCol: number;
  declare mostLikelyReplace: string;
  declare lineChunkIndexZeroBased: number;
  constructor(data?: PartialMessage<_LogprobsLintPayload>) {
    super();
    this.chunk = "";
    this.problematicLine = "";
    this.startCol = 0;
    this.endCol = 0;
    this.mostLikelyReplace = "";
    this.lineChunkIndexZeroBased = 0;
    proto3.util.initPartial(data, this as _LogprobsLintPayload);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LogprobsLintPayload {
    return new _LogprobsLintPayload().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LogprobsLintPayload {
    return new _LogprobsLintPayload().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LogprobsLintPayload {
    return new _LogprobsLintPayload().fromJsonString(jsonString, options);
  }
  static equals(a: _LogprobsLintPayload | PlainMessage<_LogprobsLintPayload> | undefined | null, b2: _LogprobsLintPayload | PlainMessage<_LogprobsLintPayload> | undefined | null): boolean {
    return proto3.util.equals(_LogprobsLintPayload as unknown as MessageType<_LogprobsLintPayload>, a, b2);
  }
})();
export type LogprobsLintPayload = InstanceType<typeof LogprobsLintPayload$Runtime>;
var LogprobsLintPayload: MessageType<LogprobsLintPayload> = LogprobsLintPayload$Runtime as unknown as MessageType<LogprobsLintPayload>;
(LogprobsLintPayload as MutableMessageType<LogprobsLintPayload>).runtime = proto3;
(LogprobsLintPayload as MutableMessageType<LogprobsLintPayload>).typeName = "aiserver.v1.LogprobsLintPayload";
(LogprobsLintPayload as MutableMessageType<LogprobsLintPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "problematic_line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_col",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_col",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "most_likely_replace",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "line_chunk_index_zero_based",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var AiLintInlineSuggestion$Runtime = (() => class _AiLintInlineSuggestion extends Message<_AiLintInlineSuggestion> {
  declare relativeWorkspacePath: string;
  declare uuid: string;
  declare message: string;
  declare lineNumber: number;
  declare reevaluateRange?: SimpleRange;
  declare reevaluateInitialText: string;
  constructor(data?: PartialMessage<_AiLintInlineSuggestion>) {
    super();
    this.relativeWorkspacePath = "";
    this.uuid = "";
    this.message = "";
    this.lineNumber = 0;
    this.reevaluateInitialText = "";
    proto3.util.initPartial(data, this as _AiLintInlineSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiLintInlineSuggestion {
    return new _AiLintInlineSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiLintInlineSuggestion {
    return new _AiLintInlineSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiLintInlineSuggestion {
    return new _AiLintInlineSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _AiLintInlineSuggestion | PlainMessage<_AiLintInlineSuggestion> | undefined | null, b2: _AiLintInlineSuggestion | PlainMessage<_AiLintInlineSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_AiLintInlineSuggestion as unknown as MessageType<_AiLintInlineSuggestion>, a, b2);
  }
})();
export type AiLintInlineSuggestion = InstanceType<typeof AiLintInlineSuggestion$Runtime>;
var AiLintInlineSuggestion: MessageType<AiLintInlineSuggestion> = AiLintInlineSuggestion$Runtime as unknown as MessageType<AiLintInlineSuggestion>;
(AiLintInlineSuggestion as MutableMessageType<AiLintInlineSuggestion>).runtime = proto3;
(AiLintInlineSuggestion as MutableMessageType<AiLintInlineSuggestion>).typeName = "aiserver.v1.AiLintInlineSuggestion";
(AiLintInlineSuggestion as MutableMessageType<AiLintInlineSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "reevaluate_range", kind: "message", T: SimpleRange },
  {
    no: 5,
    name: "reevaluate_initial_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiLintOutOfFlowSuggestion$Runtime = (() => class _AiLintOutOfFlowSuggestion extends Message<_AiLintOutOfFlowSuggestion> {
  declare relativeWorkspacePath: string;
  declare uuid: string;
  declare message: string;
  constructor(data?: PartialMessage<_AiLintOutOfFlowSuggestion>) {
    super();
    this.relativeWorkspacePath = "";
    this.uuid = "";
    this.message = "";
    proto3.util.initPartial(data, this as _AiLintOutOfFlowSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiLintOutOfFlowSuggestion {
    return new _AiLintOutOfFlowSuggestion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiLintOutOfFlowSuggestion {
    return new _AiLintOutOfFlowSuggestion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiLintOutOfFlowSuggestion {
    return new _AiLintOutOfFlowSuggestion().fromJsonString(jsonString, options);
  }
  static equals(a: _AiLintOutOfFlowSuggestion | PlainMessage<_AiLintOutOfFlowSuggestion> | undefined | null, b2: _AiLintOutOfFlowSuggestion | PlainMessage<_AiLintOutOfFlowSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_AiLintOutOfFlowSuggestion as unknown as MessageType<_AiLintOutOfFlowSuggestion>, a, b2);
  }
})();
export type AiLintOutOfFlowSuggestion = InstanceType<typeof AiLintOutOfFlowSuggestion$Runtime>;
var AiLintOutOfFlowSuggestion: MessageType<AiLintOutOfFlowSuggestion> = AiLintOutOfFlowSuggestion$Runtime as unknown as MessageType<AiLintOutOfFlowSuggestion>;
(AiLintOutOfFlowSuggestion as MutableMessageType<AiLintOutOfFlowSuggestion>).runtime = proto3;
(AiLintOutOfFlowSuggestion as MutableMessageType<AiLintOutOfFlowSuggestion>).typeName = "aiserver.v1.AiLintOutOfFlowSuggestion";
(AiLintOutOfFlowSuggestion as MutableMessageType<AiLintOutOfFlowSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AiLintRule$Runtime = (() => class _AiLintRule extends Message<_AiLintRule> {
  declare text: string;
  constructor(data?: PartialMessage<_AiLintRule>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _AiLintRule);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AiLintRule {
    return new _AiLintRule().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AiLintRule {
    return new _AiLintRule().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AiLintRule {
    return new _AiLintRule().fromJsonString(jsonString, options);
  }
  static equals(a: _AiLintRule | PlainMessage<_AiLintRule> | undefined | null, b2: _AiLintRule | PlainMessage<_AiLintRule> | undefined | null): boolean {
    return proto3.util.equals(_AiLintRule as unknown as MessageType<_AiLintRule>, a, b2);
  }
})();
export type AiLintRule = InstanceType<typeof AiLintRule$Runtime>;
var AiLintRule: MessageType<AiLintRule> = AiLintRule$Runtime as unknown as MessageType<AiLintRule>;
(AiLintRule as MutableMessageType<AiLintRule>).runtime = proto3;
(AiLintRule as MutableMessageType<AiLintRule>).typeName = "aiserver.v1.AiLintRule";
(AiLintRule as MutableMessageType<AiLintRule>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { LintDiscriminator, LintGenerator, LintExplanationRequest, LintExplanationResponse, LintExplanationResponse2, LintChunk, LintChunkRequest, LintChunkResponse, LintFimChunkRequest, LintFimChunkResponse, LintFileRequest, TokensWithLogprobs, TokenIndex, LintFileResponse, LintDiscriminatorResult, AiLintBug, LogprobsLintPayload, AiLintInlineSuggestion, AiLintOutOfFlowSuggestion, AiLintRule };
