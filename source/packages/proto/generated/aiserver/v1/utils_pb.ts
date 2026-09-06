/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:23211-27148
 * Region SHA-256: e91ca8ca8364732eff6d4735d461cb636476e2f9529ecbeb256a7c216519b466
 * Atomic B0 exports: 89 messages + 11 enums = 100
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type LintSeverity = 0 | 1 | 2 | 3 | 4 | 5;
var LintSeverity: {
  "UNSPECIFIED": 0;
  "ERROR": 1;
  "WARNING": 2;
  "INFO": 3;
  "HINT": 4;
  "AI": 5;
  0: "UNSPECIFIED";
  1: "ERROR";
  2: "WARNING";
  3: "INFO";
  4: "HINT";
  5: "AI";
};
export type FeatureType = 0 | 1 | 2 | 3;
var FeatureType: {
  "UNSPECIFIED": 0;
  "EDIT": 1;
  "GENERATE": 2;
  "INLINE_LONG_COMPLETION": 3;
  0: "UNSPECIFIED";
  1: "EDIT";
  2: "GENERATE";
  3: "INLINE_LONG_COMPLETION";
};
export type EmbeddingModel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
var EmbeddingModel: {
  "UNSPECIFIED": 0;
  "VOYAGE_CODE_2": 1;
  "TEXT_EMBEDDINGS_LARGE_3": 2;
  "QWEN_1_5B_CUSTOM": 3;
  "MOCK_CHUNKER_ERROR": 4;
  "QWEN_1_5B_0618_CUSTOM": 5;
  "QWEN_1_5B_0618_FP8_MM_CUSTOM": 6;
  0: "UNSPECIFIED";
  1: "VOYAGE_CODE_2";
  2: "TEXT_EMBEDDINGS_LARGE_3";
  3: "QWEN_1_5B_CUSTOM";
  4: "MOCK_CHUNKER_ERROR";
  5: "QWEN_1_5B_0618_CUSTOM";
  6: "QWEN_1_5B_0618_FP8_MM_CUSTOM";
};
export type GetDiffRequest_OutputFormat = 0 | 1 | 2 | 3 | 4;
var GetDiffRequest_OutputFormat: {
  "UNSPECIFIED": 0;
  "NAME_STATUS": 1;
  "NAME_STATUS_AND_NUMSTAT": 2;
  "FILE_DIFFS": 3;
  "DIFFS_WITH_BEFORE_AND_AFTER": 4;
  0: "UNSPECIFIED";
  1: "NAME_STATUS";
  2: "NAME_STATUS_AND_NUMSTAT";
  3: "FILE_DIFFS";
  4: "DIFFS_WITH_BEFORE_AND_AFTER";
};
export type GitDiff_DiffType = 0 | 1 | 2;
var GitDiff_DiffType: {
  "UNSPECIFIED": 0;
  "DIFF_TO_HEAD": 1;
  "DIFF_FROM_BRANCH_TO_MAIN": 2;
  0: "UNSPECIFIED";
  1: "DIFF_TO_HEAD";
  2: "DIFF_FROM_BRANCH_TO_MAIN";
};
export type Diagnostic_DiagnosticSeverity = 0 | 1 | 2 | 3 | 4;
var Diagnostic_DiagnosticSeverity: {
  "UNSPECIFIED": 0;
  "ERROR": 1;
  "WARNING": 2;
  "INFORMATION": 3;
  "HINT": 4;
  0: "UNSPECIFIED";
  1: "ERROR";
  2: "WARNING";
  3: "INFORMATION";
  4: "HINT";
};
export type PureMessage_MessageType = 0 | 1 | 2 | 3;
var PureMessage_MessageType: {
  "UNSPECIFIED": 0;
  "SYSTEM": 1;
  "USER": 2;
  "ASSISTANT": 3;
  0: "UNSPECIFIED";
  1: "SYSTEM";
  2: "USER";
  3: "ASSISTANT";
};
export type DocumentSymbol_SymbolKind = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;
var DocumentSymbol_SymbolKind: {
  "UNSPECIFIED": 0;
  "FILE": 1;
  "MODULE": 2;
  "NAMESPACE": 3;
  "PACKAGE": 4;
  "CLASS": 5;
  "METHOD": 6;
  "PROPERTY": 7;
  "FIELD": 8;
  "CONSTRUCTOR": 9;
  "ENUM": 10;
  "INTERFACE": 11;
  "FUNCTION": 12;
  "VARIABLE": 13;
  "CONSTANT": 14;
  "STRING": 15;
  "NUMBER": 16;
  "BOOLEAN": 17;
  "ARRAY": 18;
  "OBJECT": 19;
  "KEY": 20;
  "NULL": 21;
  "ENUM_MEMBER": 22;
  "STRUCT": 23;
  "EVENT": 24;
  "OPERATOR": 25;
  "TYPE_PARAMETER": 26;
  0: "UNSPECIFIED";
  1: "FILE";
  2: "MODULE";
  3: "NAMESPACE";
  4: "PACKAGE";
  5: "CLASS";
  6: "METHOD";
  7: "PROPERTY";
  8: "FIELD";
  9: "CONSTRUCTOR";
  10: "ENUM";
  11: "INTERFACE";
  12: "FUNCTION";
  13: "VARIABLE";
  14: "CONSTANT";
  15: "STRING";
  16: "NUMBER";
  17: "BOOLEAN";
  18: "ARRAY";
  19: "OBJECT";
  20: "KEY";
  21: "NULL";
  22: "ENUM_MEMBER";
  23: "STRUCT";
  24: "EVENT";
  25: "OPERATOR";
  26: "TYPE_PARAMETER";
};
export type ErrorDetails_Error = 0 | 1 | 42 | 2 | 3 | 4 | 18 | 5 | 39 | 40 | 6 | 7 | 8 | 9 | 10 | 41 | 11 | 12 | 13 | 14 | 20 | 23 | 21 | 25 | 22 | 28 | 29 | 30 | 31 | 33 | 34 | 35 | 36 | 37 | 38 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65;
var ErrorDetails_Error: {
  "UNSPECIFIED": 0;
  "BAD_API_KEY": 1;
  "BAD_USER_API_KEY": 42;
  "NOT_LOGGED_IN": 2;
  "INVALID_AUTH_ID": 3;
  "NOT_HIGH_ENOUGH_PERMISSIONS": 4;
  "AGENT_REQUIRES_LOGIN": 18;
  "BAD_MODEL_NAME": 5;
  "NOT_FOUND": 39;
  "DEPRECATED": 40;
  "USER_NOT_FOUND": 6;
  "FREE_USER_RATE_LIMIT_EXCEEDED": 7;
  "PRO_USER_RATE_LIMIT_EXCEEDED": 8;
  "FREE_USER_USAGE_LIMIT": 9;
  "PRO_USER_USAGE_LIMIT": 10;
  "RESOURCE_EXHAUSTED": 41;
  "AUTH_TOKEN_NOT_FOUND": 11;
  "AUTH_TOKEN_EXPIRED": 12;
  "OPENAI": 13;
  "OPENAI_RATE_LIMIT_EXCEEDED": 14;
  "MAX_TOKENS": 20;
  "PRO_USER_ONLY": 23;
  "USER_ABORTED_REQUEST": 21;
  "TIMEOUT": 25;
  "GENERIC_RATE_LIMIT_EXCEEDED": 22;
  "GPT_4_VISION_PREVIEW_RATE_LIMIT": 28;
  "CUSTOM_MESSAGE": 29;
  "OUTDATED_CLIENT": 30;
  "CLAUDE_IMAGE_TOO_LARGE": 31;
  "FILE_NOT_FOUND": 33;
  "API_KEY_RATE_LIMIT": 34;
  "DEBOUNCED": 35;
  "BAD_REQUEST": 36;
  "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED": 37;
  "UNAUTHORIZED": 38;
  "CONVERSATION_TOO_LONG": 43;
  "USAGE_PRICING_REQUIRED": 44;
  "USAGE_PRICING_REQUIRED_CHANGEABLE": 45;
  "GITHUB_NO_USER_CREDENTIALS": 46;
  "GITHUB_USER_NO_ACCESS": 47;
  "GITHUB_APP_NO_ACCESS": 48;
  "GITHUB_MULTIPLE_OWNERS": 49;
  "RATE_LIMITED": 50;
  "RATE_LIMITED_CHANGEABLE": 51;
  "CUSTOM": 52;
  "HOOKS_BLOCKED": 53;
  "SUSPICIOUS_USAGE_BLOCKED": 54;
  "EXTENSION_HOST_TIMEOUT": 55;
  "NETWORK_ERROR": 56;
  "PROVIDER_ERROR": 57;
  "MODEL_BLOCKED": 58;
  "INTERNAL": 59;
  "MAX_MODE_REQUIRED": 60;
  "MODEL_NO_LONGER_SUPPORTED": 61;
  "PRICING_WARNING": 62;
  "SLOW_POOL": 63;
  "UNSUPPORTED_REGION": 64;
  "ACCOUNT_CLOSED": 65;
  0: "UNSPECIFIED";
  1: "BAD_API_KEY";
  42: "BAD_USER_API_KEY";
  2: "NOT_LOGGED_IN";
  3: "INVALID_AUTH_ID";
  4: "NOT_HIGH_ENOUGH_PERMISSIONS";
  18: "AGENT_REQUIRES_LOGIN";
  5: "BAD_MODEL_NAME";
  39: "NOT_FOUND";
  40: "DEPRECATED";
  6: "USER_NOT_FOUND";
  7: "FREE_USER_RATE_LIMIT_EXCEEDED";
  8: "PRO_USER_RATE_LIMIT_EXCEEDED";
  9: "FREE_USER_USAGE_LIMIT";
  10: "PRO_USER_USAGE_LIMIT";
  41: "RESOURCE_EXHAUSTED";
  11: "AUTH_TOKEN_NOT_FOUND";
  12: "AUTH_TOKEN_EXPIRED";
  13: "OPENAI";
  14: "OPENAI_RATE_LIMIT_EXCEEDED";
  20: "MAX_TOKENS";
  23: "PRO_USER_ONLY";
  21: "USER_ABORTED_REQUEST";
  25: "TIMEOUT";
  22: "GENERIC_RATE_LIMIT_EXCEEDED";
  28: "GPT_4_VISION_PREVIEW_RATE_LIMIT";
  29: "CUSTOM_MESSAGE";
  30: "OUTDATED_CLIENT";
  31: "CLAUDE_IMAGE_TOO_LARGE";
  33: "FILE_NOT_FOUND";
  34: "API_KEY_RATE_LIMIT";
  35: "DEBOUNCED";
  36: "BAD_REQUEST";
  37: "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED";
  38: "UNAUTHORIZED";
  43: "CONVERSATION_TOO_LONG";
  44: "USAGE_PRICING_REQUIRED";
  45: "USAGE_PRICING_REQUIRED_CHANGEABLE";
  46: "GITHUB_NO_USER_CREDENTIALS";
  47: "GITHUB_USER_NO_ACCESS";
  48: "GITHUB_APP_NO_ACCESS";
  49: "GITHUB_MULTIPLE_OWNERS";
  50: "RATE_LIMITED";
  51: "RATE_LIMITED_CHANGEABLE";
  52: "CUSTOM";
  53: "HOOKS_BLOCKED";
  54: "SUSPICIOUS_USAGE_BLOCKED";
  55: "EXTENSION_HOST_TIMEOUT";
  56: "NETWORK_ERROR";
  57: "PROVIDER_ERROR";
  58: "MODEL_BLOCKED";
  59: "INTERNAL";
  60: "MAX_MODE_REQUIRED";
  61: "MODEL_NO_LONGER_SUPPORTED";
  62: "PRICING_WARNING";
  63: "SLOW_POOL";
  64: "UNSUPPORTED_REGION";
  65: "ACCOUNT_CLOSED";
};
export type CodeChunk_Intent = 0 | 1 | 2;
var CodeChunk_Intent: {
  "UNSPECIFIED": 0;
  "COMPOSER_FILE": 1;
  "COMPRESSED_COMPOSER_FILE": 2;
  0: "UNSPECIFIED";
  1: "COMPOSER_FILE";
  2: "COMPRESSED_COMPOSER_FILE";
};
export type CodeChunk_SummarizationStrategy = 0 | 1 | 2;
var CodeChunk_SummarizationStrategy: {
  "NONE_UNSPECIFIED": 0;
  "SUMMARIZED": 1;
  "EMBEDDED": 2;
  0: "NONE_UNSPECIFIED";
  1: "SUMMARIZED";
  2: "EMBEDDED";
};
(function(LintSeverity2) {
  LintSeverity2[LintSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LintSeverity2[LintSeverity2["ERROR"] = 1] = "ERROR";
  LintSeverity2[LintSeverity2["WARNING"] = 2] = "WARNING";
  LintSeverity2[LintSeverity2["INFO"] = 3] = "INFO";
  LintSeverity2[LintSeverity2["HINT"] = 4] = "HINT";
  LintSeverity2[LintSeverity2["AI"] = 5] = "AI";
})(LintSeverity! || (LintSeverity = {} as typeof LintSeverity));
proto3.util.setEnumType(LintSeverity, "aiserver.v1.LintSeverity", [
  { no: 0, name: "LINT_SEVERITY_UNSPECIFIED" },
  { no: 1, name: "LINT_SEVERITY_ERROR" },
  { no: 2, name: "LINT_SEVERITY_WARNING" },
  { no: 3, name: "LINT_SEVERITY_INFO" },
  { no: 4, name: "LINT_SEVERITY_HINT" },
  { no: 5, name: "LINT_SEVERITY_AI" }
]);
(function(FeatureType2) {
  FeatureType2[FeatureType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FeatureType2[FeatureType2["EDIT"] = 1] = "EDIT";
  FeatureType2[FeatureType2["GENERATE"] = 2] = "GENERATE";
  FeatureType2[FeatureType2["INLINE_LONG_COMPLETION"] = 3] = "INLINE_LONG_COMPLETION";
})(FeatureType! || (FeatureType = {} as typeof FeatureType));
proto3.util.setEnumType(FeatureType, "aiserver.v1.FeatureType", [
  { no: 0, name: "FEATURE_TYPE_UNSPECIFIED" },
  { no: 1, name: "FEATURE_TYPE_EDIT" },
  { no: 2, name: "FEATURE_TYPE_GENERATE" },
  { no: 3, name: "FEATURE_TYPE_INLINE_LONG_COMPLETION" }
]);
(function(EmbeddingModel2) {
  EmbeddingModel2[EmbeddingModel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EmbeddingModel2[EmbeddingModel2["VOYAGE_CODE_2"] = 1] = "VOYAGE_CODE_2";
  EmbeddingModel2[EmbeddingModel2["TEXT_EMBEDDINGS_LARGE_3"] = 2] = "TEXT_EMBEDDINGS_LARGE_3";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_CUSTOM"] = 3] = "QWEN_1_5B_CUSTOM";
  EmbeddingModel2[EmbeddingModel2["MOCK_CHUNKER_ERROR"] = 4] = "MOCK_CHUNKER_ERROR";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_CUSTOM"] = 5] = "QWEN_1_5B_0618_CUSTOM";
  EmbeddingModel2[EmbeddingModel2["QWEN_1_5B_0618_FP8_MM_CUSTOM"] = 6] = "QWEN_1_5B_0618_FP8_MM_CUSTOM";
})(EmbeddingModel! || (EmbeddingModel = {} as typeof EmbeddingModel));
proto3.util.setEnumType(EmbeddingModel, "aiserver.v1.EmbeddingModel", [
  { no: 0, name: "EMBEDDING_MODEL_UNSPECIFIED" },
  { no: 1, name: "EMBEDDING_MODEL_VOYAGE_CODE_2" },
  { no: 2, name: "EMBEDDING_MODEL_TEXT_EMBEDDINGS_LARGE_3" },
  { no: 3, name: "EMBEDDING_MODEL_QWEN_1_5B_CUSTOM" },
  { no: 4, name: "EMBEDDING_MODEL_MOCK_CHUNKER_ERROR" },
  { no: 5, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_CUSTOM" },
  { no: 6, name: "EMBEDDING_MODEL_QWEN_1_5B_0618_FP8_MM_CUSTOM" }
]);
var CursorPosition$Runtime = (() => class _CursorPosition extends Message<_CursorPosition> {
  declare line: number;
  declare column: number;
  constructor(data?: PartialMessage<_CursorPosition>) {
    super();
    this.line = 0;
    this.column = 0;
    proto3.util.initPartial(data, this as _CursorPosition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorPosition {
    return new _CursorPosition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorPosition {
    return new _CursorPosition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorPosition {
    return new _CursorPosition().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorPosition | PlainMessage<_CursorPosition> | undefined | null, b2: _CursorPosition | PlainMessage<_CursorPosition> | undefined | null): boolean {
    return proto3.util.equals(_CursorPosition as unknown as MessageType<_CursorPosition>, a, b2);
  }
})();
export type CursorPosition = InstanceType<typeof CursorPosition$Runtime>;
var CursorPosition: MessageType<CursorPosition> = CursorPosition$Runtime as unknown as MessageType<CursorPosition>;
(CursorPosition as MutableMessageType<CursorPosition>).runtime = proto3;
(CursorPosition as MutableMessageType<CursorPosition>).typeName = "aiserver.v1.CursorPosition";
(CursorPosition as MutableMessageType<CursorPosition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var VscodeOSStatistics$Runtime = (() => class _VscodeOSStatistics extends Message<_VscodeOSStatistics> {
  declare totalmem: number;
  declare freemem: number;
  declare loadavg: number[];
  constructor(data?: PartialMessage<_VscodeOSStatistics>) {
    super();
    this.totalmem = 0;
    this.freemem = 0;
    this.loadavg = [];
    proto3.util.initPartial(data, this as _VscodeOSStatistics);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _VscodeOSStatistics {
    return new _VscodeOSStatistics().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _VscodeOSStatistics {
    return new _VscodeOSStatistics().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _VscodeOSStatistics {
    return new _VscodeOSStatistics().fromJsonString(jsonString, options);
  }
  static equals(a: _VscodeOSStatistics | PlainMessage<_VscodeOSStatistics> | undefined | null, b2: _VscodeOSStatistics | PlainMessage<_VscodeOSStatistics> | undefined | null): boolean {
    return proto3.util.equals(_VscodeOSStatistics as unknown as MessageType<_VscodeOSStatistics>, a, b2);
  }
})();
export type VscodeOSStatistics = InstanceType<typeof VscodeOSStatistics$Runtime>;
var VscodeOSStatistics: MessageType<VscodeOSStatistics> = VscodeOSStatistics$Runtime as unknown as MessageType<VscodeOSStatistics>;
(VscodeOSStatistics as MutableMessageType<VscodeOSStatistics>).runtime = proto3;
(VscodeOSStatistics as MutableMessageType<VscodeOSStatistics>).typeName = "aiserver.v1.VscodeOSStatistics";
(VscodeOSStatistics as MutableMessageType<VscodeOSStatistics>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "totalmem",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 2,
    name: "freemem",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 3, name: "loadavg", kind: "scalar", T: 1, repeated: true }
]);
var VscodeOSProperties$Runtime = (() => class _VscodeOSProperties extends Message<_VscodeOSProperties> {
  declare type: string;
  declare release: string;
  declare arch: string;
  declare platform: string;
  declare cpus: VscodeCPUProperties[];
  constructor(data?: PartialMessage<_VscodeOSProperties>) {
    super();
    this.type = "";
    this.release = "";
    this.arch = "";
    this.platform = "";
    this.cpus = [];
    proto3.util.initPartial(data, this as _VscodeOSProperties);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _VscodeOSProperties {
    return new _VscodeOSProperties().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _VscodeOSProperties {
    return new _VscodeOSProperties().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _VscodeOSProperties {
    return new _VscodeOSProperties().fromJsonString(jsonString, options);
  }
  static equals(a: _VscodeOSProperties | PlainMessage<_VscodeOSProperties> | undefined | null, b2: _VscodeOSProperties | PlainMessage<_VscodeOSProperties> | undefined | null): boolean {
    return proto3.util.equals(_VscodeOSProperties as unknown as MessageType<_VscodeOSProperties>, a, b2);
  }
})();
export type VscodeOSProperties = InstanceType<typeof VscodeOSProperties$Runtime>;
var VscodeOSProperties: MessageType<VscodeOSProperties> = VscodeOSProperties$Runtime as unknown as MessageType<VscodeOSProperties>;
(VscodeOSProperties as MutableMessageType<VscodeOSProperties>).runtime = proto3;
(VscodeOSProperties as MutableMessageType<VscodeOSProperties>).typeName = "aiserver.v1.VscodeOSProperties";
(VscodeOSProperties as MutableMessageType<VscodeOSProperties>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "release",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "arch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "platform",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "cpus", kind: "message", T: VscodeCPUProperties, repeated: true }
]);
var VscodeCPUProperties$Runtime = (() => class _VscodeCPUProperties extends Message<_VscodeCPUProperties> {
  declare model: string;
  declare speed: number;
  constructor(data?: PartialMessage<_VscodeCPUProperties>) {
    super();
    this.model = "";
    this.speed = 0;
    proto3.util.initPartial(data, this as _VscodeCPUProperties);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _VscodeCPUProperties {
    return new _VscodeCPUProperties().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _VscodeCPUProperties {
    return new _VscodeCPUProperties().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _VscodeCPUProperties {
    return new _VscodeCPUProperties().fromJsonString(jsonString, options);
  }
  static equals(a: _VscodeCPUProperties | PlainMessage<_VscodeCPUProperties> | undefined | null, b2: _VscodeCPUProperties | PlainMessage<_VscodeCPUProperties> | undefined | null): boolean {
    return proto3.util.equals(_VscodeCPUProperties as unknown as MessageType<_VscodeCPUProperties>, a, b2);
  }
})();
export type VscodeCPUProperties = InstanceType<typeof VscodeCPUProperties$Runtime>;
var VscodeCPUProperties: MessageType<VscodeCPUProperties> = VscodeCPUProperties$Runtime as unknown as MessageType<VscodeCPUProperties>;
(VscodeCPUProperties as MutableMessageType<VscodeCPUProperties>).runtime = proto3;
(VscodeCPUProperties as MutableMessageType<VscodeCPUProperties>).typeName = "aiserver.v1.VscodeCPUProperties";
(VscodeCPUProperties as MutableMessageType<VscodeCPUProperties>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "speed",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var EnvironmentInfo$Runtime = (() => class _EnvironmentInfo extends Message<_EnvironmentInfo> {
  declare exthostPlatform?: string;
  declare exthostArch?: string;
  declare exthostRelease?: string;
  declare exthostShell?: string;
  declare localTimestamp?: string;
  declare workspaceUris: string[];
  declare cursorVersion?: string;
  declare isRemote?: boolean;
  declare localOsType?: string;
  declare homeDirectory?: string;
  declare localTimezone?: string;
  constructor(data?: PartialMessage<_EnvironmentInfo>) {
    super();
    this.workspaceUris = [];
    proto3.util.initPartial(data, this as _EnvironmentInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnvironmentInfo {
    return new _EnvironmentInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnvironmentInfo {
    return new _EnvironmentInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnvironmentInfo {
    return new _EnvironmentInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _EnvironmentInfo | PlainMessage<_EnvironmentInfo> | undefined | null, b2: _EnvironmentInfo | PlainMessage<_EnvironmentInfo> | undefined | null): boolean {
    return proto3.util.equals(_EnvironmentInfo as unknown as MessageType<_EnvironmentInfo>, a, b2);
  }
})();
export type EnvironmentInfo = InstanceType<typeof EnvironmentInfo$Runtime>;
var EnvironmentInfo: MessageType<EnvironmentInfo> = EnvironmentInfo$Runtime as unknown as MessageType<EnvironmentInfo>;
(EnvironmentInfo as MutableMessageType<EnvironmentInfo>).runtime = proto3;
(EnvironmentInfo as MutableMessageType<EnvironmentInfo>).typeName = "aiserver.v1.EnvironmentInfo";
(EnvironmentInfo as MutableMessageType<EnvironmentInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "exthost_platform", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "exthost_arch", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "exthost_release", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "exthost_shell", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "local_timestamp", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "workspace_uris", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "cursor_version", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_remote", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "local_os_type", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "home_directory", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "local_timezone", kind: "scalar", T: 9, opt: true }
]);
var SelectionWithOrientation$Runtime = (() => class _SelectionWithOrientation extends Message<_SelectionWithOrientation> {
  declare selectionStartLineNumber: number;
  declare selectionStartColumn: number;
  declare positionLineNumber: number;
  declare positionColumn: number;
  constructor(data?: PartialMessage<_SelectionWithOrientation>) {
    super();
    this.selectionStartLineNumber = 0;
    this.selectionStartColumn = 0;
    this.positionLineNumber = 0;
    this.positionColumn = 0;
    proto3.util.initPartial(data, this as _SelectionWithOrientation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectionWithOrientation {
    return new _SelectionWithOrientation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectionWithOrientation {
    return new _SelectionWithOrientation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectionWithOrientation {
    return new _SelectionWithOrientation().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectionWithOrientation | PlainMessage<_SelectionWithOrientation> | undefined | null, b2: _SelectionWithOrientation | PlainMessage<_SelectionWithOrientation> | undefined | null): boolean {
    return proto3.util.equals(_SelectionWithOrientation as unknown as MessageType<_SelectionWithOrientation>, a, b2);
  }
})();
export type SelectionWithOrientation = InstanceType<typeof SelectionWithOrientation$Runtime>;
var SelectionWithOrientation: MessageType<SelectionWithOrientation> = SelectionWithOrientation$Runtime as unknown as MessageType<SelectionWithOrientation>;
(SelectionWithOrientation as MutableMessageType<SelectionWithOrientation>).runtime = proto3;
(SelectionWithOrientation as MutableMessageType<SelectionWithOrientation>).typeName = "aiserver.v1.SelectionWithOrientation";
(SelectionWithOrientation as MutableMessageType<SelectionWithOrientation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selection_start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "selection_start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "position_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "position_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetDiffRequest$Runtime = (() => class _GetDiffRequest extends Message<_GetDiffRequest> {
  declare cwd: string;
  declare ref: string;
  declare baseRef: string;
  declare mergeBase: boolean;
  declare targetPaths: string[];
  declare unifiedContextLines?: number;
  declare maxUntrackedFiles: number;
  declare submoduleRecurseDepth: number;
  declare includeSpaceChanges: boolean;
  declare committedOnly: boolean;
  declare computePatchId: boolean;
  declare returnHeadSha?: boolean;
  declare maxResponseBytes?: number;
  declare outputFormat?: GetDiffRequest_OutputFormat;
  constructor(data?: PartialMessage<_GetDiffRequest>) {
    super();
    this.cwd = "";
    this.ref = "";
    this.baseRef = "";
    this.mergeBase = false;
    this.targetPaths = [];
    this.maxUntrackedFiles = 0;
    this.submoduleRecurseDepth = 0;
    this.includeSpaceChanges = false;
    this.committedOnly = false;
    this.computePatchId = false;
    proto3.util.initPartial(data, this as _GetDiffRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetDiffRequest {
    return new _GetDiffRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetDiffRequest {
    return new _GetDiffRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetDiffRequest {
    return new _GetDiffRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetDiffRequest | PlainMessage<_GetDiffRequest> | undefined | null, b2: _GetDiffRequest | PlainMessage<_GetDiffRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetDiffRequest as unknown as MessageType<_GetDiffRequest>, a, b2);
  }
})();
export type GetDiffRequest = InstanceType<typeof GetDiffRequest$Runtime>;
var GetDiffRequest: MessageType<GetDiffRequest> = GetDiffRequest$Runtime as unknown as MessageType<GetDiffRequest>;
(GetDiffRequest as MutableMessageType<GetDiffRequest>).runtime = proto3;
(GetDiffRequest as MutableMessageType<GetDiffRequest>).typeName = "aiserver.v1.GetDiffRequest";
(GetDiffRequest as MutableMessageType<GetDiffRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cwd",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "base_ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "merge_base",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "target_paths", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "unified_context_lines", kind: "scalar", T: 5, opt: true },
  {
    no: 7,
    name: "max_untracked_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 9,
    name: "submodule_recurse_depth",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 10,
    name: "include_space_changes",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 11,
    name: "committed_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 12,
    name: "compute_patch_id",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 13, name: "return_head_sha", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "max_response_bytes", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "output_format", kind: "enum", T: proto3.getEnumType(GetDiffRequest_OutputFormat), opt: true }
]);
(function(GetDiffRequest_OutputFormat2) {
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS"] = 1] = "NAME_STATUS";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["NAME_STATUS_AND_NUMSTAT"] = 2] = "NAME_STATUS_AND_NUMSTAT";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["FILE_DIFFS"] = 3] = "FILE_DIFFS";
  GetDiffRequest_OutputFormat2[GetDiffRequest_OutputFormat2["DIFFS_WITH_BEFORE_AND_AFTER"] = 4] = "DIFFS_WITH_BEFORE_AND_AFTER";
})(GetDiffRequest_OutputFormat! || (GetDiffRequest_OutputFormat = {} as typeof GetDiffRequest_OutputFormat));
proto3.util.setEnumType(GetDiffRequest_OutputFormat, "aiserver.v1.GetDiffRequest.OutputFormat", [
  { no: 0, name: "OUTPUT_FORMAT_UNSPECIFIED" },
  { no: 1, name: "OUTPUT_FORMAT_NAME_STATUS" },
  { no: 2, name: "OUTPUT_FORMAT_NAME_STATUS_AND_NUMSTAT" },
  { no: 3, name: "OUTPUT_FORMAT_FILE_DIFFS" },
  { no: 4, name: "OUTPUT_FORMAT_DIFFS_WITH_BEFORE_AND_AFTER" }
]);
var GetDiffResponse$Runtime = (() => class _GetDiffResponse extends Message<_GetDiffResponse> {
  declare diff?: GitDiff;
  declare submoduleDiffs: GetDiffResponse_SubmoduleDiff[];
  declare patchId?: string;
  declare headSha?: string;
  declare hasUncommittedChanges?: boolean;
  constructor(data?: PartialMessage<_GetDiffResponse>) {
    super();
    this.submoduleDiffs = [];
    proto3.util.initPartial(data, this as _GetDiffResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetDiffResponse {
    return new _GetDiffResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetDiffResponse {
    return new _GetDiffResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetDiffResponse {
    return new _GetDiffResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetDiffResponse | PlainMessage<_GetDiffResponse> | undefined | null, b2: _GetDiffResponse | PlainMessage<_GetDiffResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetDiffResponse as unknown as MessageType<_GetDiffResponse>, a, b2);
  }
})();
export type GetDiffResponse = InstanceType<typeof GetDiffResponse$Runtime>;
var GetDiffResponse: MessageType<GetDiffResponse> = GetDiffResponse$Runtime as unknown as MessageType<GetDiffResponse>;
(GetDiffResponse as MutableMessageType<GetDiffResponse>).runtime = proto3;
(GetDiffResponse as MutableMessageType<GetDiffResponse>).typeName = "aiserver.v1.GetDiffResponse";
(GetDiffResponse as MutableMessageType<GetDiffResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diff", kind: "message", T: GitDiff },
  { no: 2, name: "submodule_diffs", kind: "message", T: GetDiffResponse_SubmoduleDiff, repeated: true },
  { no: 3, name: "patch_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "head_sha", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "has_uncommitted_changes", kind: "scalar", T: 8, opt: true }
]);
var GetDiffResponse_SubmoduleDiff$Runtime = (() => class _GetDiffResponse_SubmoduleDiff extends Message<_GetDiffResponse_SubmoduleDiff> {
  declare relativePath: string;
  declare diff?: GitDiff;
  declare errored: boolean;
  constructor(data?: PartialMessage<_GetDiffResponse_SubmoduleDiff>) {
    super();
    this.relativePath = "";
    this.errored = false;
    proto3.util.initPartial(data, this as _GetDiffResponse_SubmoduleDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetDiffResponse_SubmoduleDiff {
    return new _GetDiffResponse_SubmoduleDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetDiffResponse_SubmoduleDiff {
    return new _GetDiffResponse_SubmoduleDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetDiffResponse_SubmoduleDiff {
    return new _GetDiffResponse_SubmoduleDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _GetDiffResponse_SubmoduleDiff | PlainMessage<_GetDiffResponse_SubmoduleDiff> | undefined | null, b2: _GetDiffResponse_SubmoduleDiff | PlainMessage<_GetDiffResponse_SubmoduleDiff> | undefined | null): boolean {
    return proto3.util.equals(_GetDiffResponse_SubmoduleDiff as unknown as MessageType<_GetDiffResponse_SubmoduleDiff>, a, b2);
  }
})();
export type GetDiffResponse_SubmoduleDiff = InstanceType<typeof GetDiffResponse_SubmoduleDiff$Runtime>;
var GetDiffResponse_SubmoduleDiff: MessageType<GetDiffResponse_SubmoduleDiff> = GetDiffResponse_SubmoduleDiff$Runtime as unknown as MessageType<GetDiffResponse_SubmoduleDiff>;
(GetDiffResponse_SubmoduleDiff as MutableMessageType<GetDiffResponse_SubmoduleDiff>).runtime = proto3;
(GetDiffResponse_SubmoduleDiff as MutableMessageType<GetDiffResponse_SubmoduleDiff>).typeName = "aiserver.v1.GetDiffResponse.SubmoduleDiff";
(GetDiffResponse_SubmoduleDiff as MutableMessageType<GetDiffResponse_SubmoduleDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff", kind: "message", T: GitDiff },
  {
    no: 3,
    name: "errored",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SimplestRange$Runtime = (() => class _SimplestRange extends Message<_SimplestRange> {
  declare startLine: number;
  declare endLineInclusive: number;
  constructor(data?: PartialMessage<_SimplestRange>) {
    super();
    this.startLine = 0;
    this.endLineInclusive = 0;
    proto3.util.initPartial(data, this as _SimplestRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimplestRange {
    return new _SimplestRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimplestRange {
    return new _SimplestRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimplestRange {
    return new _SimplestRange().fromJsonString(jsonString, options);
  }
  static equals(a: _SimplestRange | PlainMessage<_SimplestRange> | undefined | null, b2: _SimplestRange | PlainMessage<_SimplestRange> | undefined | null): boolean {
    return proto3.util.equals(_SimplestRange as unknown as MessageType<_SimplestRange>, a, b2);
  }
})();
export type SimplestRange = InstanceType<typeof SimplestRange$Runtime>;
var SimplestRange: MessageType<SimplestRange> = SimplestRange$Runtime as unknown as MessageType<SimplestRange>;
(SimplestRange as MutableMessageType<SimplestRange>).runtime = proto3;
(SimplestRange as MutableMessageType<SimplestRange>).typeName = "aiserver.v1.SimplestRange";
(SimplestRange as MutableMessageType<SimplestRange>).fields = proto3.util.newFieldList(() => [
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
var ComputeLinesDiffOriginalAndModified$Runtime = (() => class _ComputeLinesDiffOriginalAndModified extends Message<_ComputeLinesDiffOriginalAndModified> {
  declare original: string[];
  declare modified: string[];
  constructor(data?: PartialMessage<_ComputeLinesDiffOriginalAndModified>) {
    super();
    this.original = [];
    this.modified = [];
    proto3.util.initPartial(data, this as _ComputeLinesDiffOriginalAndModified);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputeLinesDiffOriginalAndModified {
    return new _ComputeLinesDiffOriginalAndModified().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputeLinesDiffOriginalAndModified {
    return new _ComputeLinesDiffOriginalAndModified().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputeLinesDiffOriginalAndModified {
    return new _ComputeLinesDiffOriginalAndModified().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputeLinesDiffOriginalAndModified | PlainMessage<_ComputeLinesDiffOriginalAndModified> | undefined | null, b2: _ComputeLinesDiffOriginalAndModified | PlainMessage<_ComputeLinesDiffOriginalAndModified> | undefined | null): boolean {
    return proto3.util.equals(_ComputeLinesDiffOriginalAndModified as unknown as MessageType<_ComputeLinesDiffOriginalAndModified>, a, b2);
  }
})();
export type ComputeLinesDiffOriginalAndModified = InstanceType<typeof ComputeLinesDiffOriginalAndModified$Runtime>;
var ComputeLinesDiffOriginalAndModified: MessageType<ComputeLinesDiffOriginalAndModified> = ComputeLinesDiffOriginalAndModified$Runtime as unknown as MessageType<ComputeLinesDiffOriginalAndModified>;
(ComputeLinesDiffOriginalAndModified as MutableMessageType<ComputeLinesDiffOriginalAndModified>).runtime = proto3;
(ComputeLinesDiffOriginalAndModified as MutableMessageType<ComputeLinesDiffOriginalAndModified>).typeName = "aiserver.v1.ComputeLinesDiffOriginalAndModified";
(ComputeLinesDiffOriginalAndModified as MutableMessageType<ComputeLinesDiffOriginalAndModified>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "original", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "modified", kind: "scalar", T: 9, repeated: true }
]);
var GitDiff$Runtime = (() => class _GitDiff extends Message<_GitDiff> {
  declare diffs: FileDiff[];
  declare diffType: GitDiff_DiffType;
  constructor(data?: PartialMessage<_GitDiff>) {
    super();
    this.diffs = [];
    this.diffType = GitDiff_DiffType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _GitDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitDiff {
    return new _GitDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitDiff {
    return new _GitDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitDiff {
    return new _GitDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _GitDiff | PlainMessage<_GitDiff> | undefined | null, b2: _GitDiff | PlainMessage<_GitDiff> | undefined | null): boolean {
    return proto3.util.equals(_GitDiff as unknown as MessageType<_GitDiff>, a, b2);
  }
})();
export type GitDiff = InstanceType<typeof GitDiff$Runtime>;
var GitDiff: MessageType<GitDiff> = GitDiff$Runtime as unknown as MessageType<GitDiff>;
(GitDiff as MutableMessageType<GitDiff>).runtime = proto3;
(GitDiff as MutableMessageType<GitDiff>).typeName = "aiserver.v1.GitDiff";
(GitDiff as MutableMessageType<GitDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diffs", kind: "message", T: FileDiff, repeated: true },
  { no: 2, name: "diff_type", kind: "enum", T: proto3.getEnumType(GitDiff_DiffType) }
]);
(function(GitDiff_DiffType2) {
  GitDiff_DiffType2[GitDiff_DiffType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitDiff_DiffType2[GitDiff_DiffType2["DIFF_TO_HEAD"] = 1] = "DIFF_TO_HEAD";
  GitDiff_DiffType2[GitDiff_DiffType2["DIFF_FROM_BRANCH_TO_MAIN"] = 2] = "DIFF_FROM_BRANCH_TO_MAIN";
})(GitDiff_DiffType! || (GitDiff_DiffType = {} as typeof GitDiff_DiffType));
proto3.util.setEnumType(GitDiff_DiffType, "aiserver.v1.GitDiff.DiffType", [
  { no: 0, name: "DIFF_TYPE_UNSPECIFIED" },
  { no: 1, name: "DIFF_TYPE_DIFF_TO_HEAD" },
  { no: 2, name: "DIFF_TYPE_DIFF_FROM_BRANCH_TO_MAIN" }
]);
var FileDiff$Runtime = (() => class _FileDiff extends Message<_FileDiff> {
  declare added: number;
  declare removed: number;
  declare from: string;
  declare to: string;
  declare chunks: FileDiff_Chunk[];
  declare beforeFileContents?: string;
  declare afterFileContents?: string;
  declare isGenerated?: boolean;
  constructor(data?: PartialMessage<_FileDiff>) {
    super();
    this.added = 0;
    this.removed = 0;
    this.from = "";
    this.to = "";
    this.chunks = [];
    proto3.util.initPartial(data, this as _FileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileDiff {
    return new _FileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileDiff {
    return new _FileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileDiff {
    return new _FileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _FileDiff | PlainMessage<_FileDiff> | undefined | null, b2: _FileDiff | PlainMessage<_FileDiff> | undefined | null): boolean {
    return proto3.util.equals(_FileDiff as unknown as MessageType<_FileDiff>, a, b2);
  }
})();
export type FileDiff = InstanceType<typeof FileDiff$Runtime>;
var FileDiff: MessageType<FileDiff> = FileDiff$Runtime as unknown as MessageType<FileDiff>;
(FileDiff as MutableMessageType<FileDiff>).runtime = proto3;
(FileDiff as MutableMessageType<FileDiff>).typeName = "aiserver.v1.FileDiff";
(FileDiff as MutableMessageType<FileDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 4,
    name: "added",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "removed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 1,
    name: "from",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "to",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "chunks", kind: "message", T: FileDiff_Chunk, repeated: true },
  { no: 6, name: "before_file_contents", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "after_file_contents", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_generated", kind: "scalar", T: 8, opt: true }
]);
var FileDiff_Chunk$Runtime = (() => class _FileDiff_Chunk extends Message<_FileDiff_Chunk> {
  declare content: string;
  declare lines: string[];
  declare oldStart: number;
  declare oldLines: number;
  declare newStart: number;
  declare newLines: number;
  constructor(data?: PartialMessage<_FileDiff_Chunk>) {
    super();
    this.content = "";
    this.lines = [];
    this.oldStart = 0;
    this.oldLines = 0;
    this.newStart = 0;
    this.newLines = 0;
    proto3.util.initPartial(data, this as _FileDiff_Chunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileDiff_Chunk {
    return new _FileDiff_Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileDiff_Chunk {
    return new _FileDiff_Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileDiff_Chunk {
    return new _FileDiff_Chunk().fromJsonString(jsonString, options);
  }
  static equals(a: _FileDiff_Chunk | PlainMessage<_FileDiff_Chunk> | undefined | null, b2: _FileDiff_Chunk | PlainMessage<_FileDiff_Chunk> | undefined | null): boolean {
    return proto3.util.equals(_FileDiff_Chunk as unknown as MessageType<_FileDiff_Chunk>, a, b2);
  }
})();
export type FileDiff_Chunk = InstanceType<typeof FileDiff_Chunk$Runtime>;
var FileDiff_Chunk: MessageType<FileDiff_Chunk> = FileDiff_Chunk$Runtime as unknown as MessageType<FileDiff_Chunk>;
(FileDiff_Chunk as MutableMessageType<FileDiff_Chunk>).runtime = proto3;
(FileDiff_Chunk as MutableMessageType<FileDiff_Chunk>).typeName = "aiserver.v1.FileDiff.Chunk";
(FileDiff_Chunk as MutableMessageType<FileDiff_Chunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "old_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "old_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "new_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "new_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SimpleRange$Runtime = (() => class _SimpleRange extends Message<_SimpleRange> {
  declare startLineNumber: number;
  declare startColumn: number;
  declare endLineNumberInclusive: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_SimpleRange>) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumberInclusive = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _SimpleRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimpleRange {
    return new _SimpleRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimpleRange {
    return new _SimpleRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimpleRange {
    return new _SimpleRange().fromJsonString(jsonString, options);
  }
  static equals(a: _SimpleRange | PlainMessage<_SimpleRange> | undefined | null, b2: _SimpleRange | PlainMessage<_SimpleRange> | undefined | null): boolean {
    return proto3.util.equals(_SimpleRange as unknown as MessageType<_SimpleRange>, a, b2);
  }
})();
export type SimpleRange = InstanceType<typeof SimpleRange$Runtime>;
var SimpleRange: MessageType<SimpleRange> = SimpleRange$Runtime as unknown as MessageType<SimpleRange>;
(SimpleRange as MutableMessageType<SimpleRange>).runtime = proto3;
(SimpleRange as MutableMessageType<SimpleRange>).typeName = "aiserver.v1.SimpleRange";
(SimpleRange as MutableMessageType<SimpleRange>).fields = proto3.util.newFieldList(() => [
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
    name: "end_line_number_inclusive",
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
var SimpleFileChunk$Runtime = (() => class _SimpleFileChunk extends Message<_SimpleFileChunk> {
  declare relativeWorkspacePath: string;
  declare range?: SimplestRange;
  declare chunkHash: string;
  constructor(data?: PartialMessage<_SimpleFileChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.chunkHash = "";
    proto3.util.initPartial(data, this as _SimpleFileChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimpleFileChunk {
    return new _SimpleFileChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimpleFileChunk {
    return new _SimpleFileChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimpleFileChunk {
    return new _SimpleFileChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _SimpleFileChunk | PlainMessage<_SimpleFileChunk> | undefined | null, b2: _SimpleFileChunk | PlainMessage<_SimpleFileChunk> | undefined | null): boolean {
    return proto3.util.equals(_SimpleFileChunk as unknown as MessageType<_SimpleFileChunk>, a, b2);
  }
})();
export type SimpleFileChunk = InstanceType<typeof SimpleFileChunk$Runtime>;
var SimpleFileChunk: MessageType<SimpleFileChunk> = SimpleFileChunk$Runtime as unknown as MessageType<SimpleFileChunk>;
(SimpleFileChunk as MutableMessageType<SimpleFileChunk>).runtime = proto3;
(SimpleFileChunk as MutableMessageType<SimpleFileChunk>).typeName = "aiserver.v1.SimpleFileChunk";
(SimpleFileChunk as MutableMessageType<SimpleFileChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimplestRange },
  {
    no: 3,
    name: "chunk_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CmdKDebugInfo$Runtime = (() => class _CmdKDebugInfo extends Message<_CmdKDebugInfo> {
  declare remoteUrl: string;
  declare commitId: string;
  declare gitPatch: string;
  declare unsavedFiles: CmdKDebugInfo_UnsavedFiles[];
  declare unixTimestampMs: number;
  declare openEditors: CmdKDebugInfo_OpenEditor[];
  declare fileDiffHistories: CmdKDebugInfo_CppFileDiffHistory[];
  declare branchName: string;
  declare branchNotes: string;
  declare branchNotesRich: string;
  declare globalNotes: string;
  declare pastThoughts: CmdKDebugInfo_PastThought[];
  declare baseBranchName: string;
  declare baseBranchCommitId: string;
  constructor(data?: PartialMessage<_CmdKDebugInfo>) {
    super();
    this.remoteUrl = "";
    this.commitId = "";
    this.gitPatch = "";
    this.unsavedFiles = [];
    this.unixTimestampMs = 0;
    this.openEditors = [];
    this.fileDiffHistories = [];
    this.branchName = "";
    this.branchNotes = "";
    this.branchNotesRich = "";
    this.globalNotes = "";
    this.pastThoughts = [];
    this.baseBranchName = "";
    this.baseBranchCommitId = "";
    proto3.util.initPartial(data, this as _CmdKDebugInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKDebugInfo {
    return new _CmdKDebugInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKDebugInfo {
    return new _CmdKDebugInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKDebugInfo {
    return new _CmdKDebugInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKDebugInfo | PlainMessage<_CmdKDebugInfo> | undefined | null, b2: _CmdKDebugInfo | PlainMessage<_CmdKDebugInfo> | undefined | null): boolean {
    return proto3.util.equals(_CmdKDebugInfo as unknown as MessageType<_CmdKDebugInfo>, a, b2);
  }
})();
export type CmdKDebugInfo = InstanceType<typeof CmdKDebugInfo$Runtime>;
var CmdKDebugInfo: MessageType<CmdKDebugInfo> = CmdKDebugInfo$Runtime as unknown as MessageType<CmdKDebugInfo>;
(CmdKDebugInfo as MutableMessageType<CmdKDebugInfo>).runtime = proto3;
(CmdKDebugInfo as MutableMessageType<CmdKDebugInfo>).typeName = "aiserver.v1.CmdKDebugInfo";
(CmdKDebugInfo as MutableMessageType<CmdKDebugInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "remote_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "git_patch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "unsaved_files", kind: "message", T: CmdKDebugInfo_UnsavedFiles, repeated: true },
  {
    no: 5,
    name: "unix_timestamp_ms",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 6, name: "open_editors", kind: "message", T: CmdKDebugInfo_OpenEditor, repeated: true },
  { no: 7, name: "file_diff_histories", kind: "message", T: CmdKDebugInfo_CppFileDiffHistory, repeated: true },
  {
    no: 8,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "branch_notes",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "branch_notes_rich",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "global_notes",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "past_thoughts", kind: "message", T: CmdKDebugInfo_PastThought, repeated: true },
  {
    no: 13,
    name: "base_branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "base_branch_commit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CmdKDebugInfo_UnsavedFiles$Runtime = (() => class _CmdKDebugInfo_UnsavedFiles extends Message<_CmdKDebugInfo_UnsavedFiles> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  constructor(data?: PartialMessage<_CmdKDebugInfo_UnsavedFiles>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    proto3.util.initPartial(data, this as _CmdKDebugInfo_UnsavedFiles);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKDebugInfo_UnsavedFiles {
    return new _CmdKDebugInfo_UnsavedFiles().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_UnsavedFiles {
    return new _CmdKDebugInfo_UnsavedFiles().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_UnsavedFiles {
    return new _CmdKDebugInfo_UnsavedFiles().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKDebugInfo_UnsavedFiles | PlainMessage<_CmdKDebugInfo_UnsavedFiles> | undefined | null, b2: _CmdKDebugInfo_UnsavedFiles | PlainMessage<_CmdKDebugInfo_UnsavedFiles> | undefined | null): boolean {
    return proto3.util.equals(_CmdKDebugInfo_UnsavedFiles as unknown as MessageType<_CmdKDebugInfo_UnsavedFiles>, a, b2);
  }
})();
export type CmdKDebugInfo_UnsavedFiles = InstanceType<typeof CmdKDebugInfo_UnsavedFiles$Runtime>;
var CmdKDebugInfo_UnsavedFiles: MessageType<CmdKDebugInfo_UnsavedFiles> = CmdKDebugInfo_UnsavedFiles$Runtime as unknown as MessageType<CmdKDebugInfo_UnsavedFiles>;
(CmdKDebugInfo_UnsavedFiles as MutableMessageType<CmdKDebugInfo_UnsavedFiles>).runtime = proto3;
(CmdKDebugInfo_UnsavedFiles as MutableMessageType<CmdKDebugInfo_UnsavedFiles>).typeName = "aiserver.v1.CmdKDebugInfo.UnsavedFiles";
(CmdKDebugInfo_UnsavedFiles as MutableMessageType<CmdKDebugInfo_UnsavedFiles>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CmdKDebugInfo_OpenEditor$Runtime = (() => class _CmdKDebugInfo_OpenEditor extends Message<_CmdKDebugInfo_OpenEditor> {
  declare relativeWorkspacePath: string;
  declare editorGroupIndex: number;
  declare editorGroupId: number;
  declare isActive: boolean;
  constructor(data?: PartialMessage<_CmdKDebugInfo_OpenEditor>) {
    super();
    this.relativeWorkspacePath = "";
    this.editorGroupIndex = 0;
    this.editorGroupId = 0;
    this.isActive = false;
    proto3.util.initPartial(data, this as _CmdKDebugInfo_OpenEditor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKDebugInfo_OpenEditor {
    return new _CmdKDebugInfo_OpenEditor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_OpenEditor {
    return new _CmdKDebugInfo_OpenEditor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_OpenEditor {
    return new _CmdKDebugInfo_OpenEditor().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKDebugInfo_OpenEditor | PlainMessage<_CmdKDebugInfo_OpenEditor> | undefined | null, b2: _CmdKDebugInfo_OpenEditor | PlainMessage<_CmdKDebugInfo_OpenEditor> | undefined | null): boolean {
    return proto3.util.equals(_CmdKDebugInfo_OpenEditor as unknown as MessageType<_CmdKDebugInfo_OpenEditor>, a, b2);
  }
})();
export type CmdKDebugInfo_OpenEditor = InstanceType<typeof CmdKDebugInfo_OpenEditor$Runtime>;
var CmdKDebugInfo_OpenEditor: MessageType<CmdKDebugInfo_OpenEditor> = CmdKDebugInfo_OpenEditor$Runtime as unknown as MessageType<CmdKDebugInfo_OpenEditor>;
(CmdKDebugInfo_OpenEditor as MutableMessageType<CmdKDebugInfo_OpenEditor>).runtime = proto3;
(CmdKDebugInfo_OpenEditor as MutableMessageType<CmdKDebugInfo_OpenEditor>).typeName = "aiserver.v1.CmdKDebugInfo.OpenEditor";
(CmdKDebugInfo_OpenEditor as MutableMessageType<CmdKDebugInfo_OpenEditor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "editor_group_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "editor_group_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "is_active",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CmdKDebugInfo_CppFileDiffHistory$Runtime = (() => class _CmdKDebugInfo_CppFileDiffHistory extends Message<_CmdKDebugInfo_CppFileDiffHistory> {
  declare fileName: string;
  declare diffHistory: string[];
  constructor(data?: PartialMessage<_CmdKDebugInfo_CppFileDiffHistory>) {
    super();
    this.fileName = "";
    this.diffHistory = [];
    proto3.util.initPartial(data, this as _CmdKDebugInfo_CppFileDiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKDebugInfo_CppFileDiffHistory {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_CppFileDiffHistory {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_CppFileDiffHistory {
    return new _CmdKDebugInfo_CppFileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKDebugInfo_CppFileDiffHistory | PlainMessage<_CmdKDebugInfo_CppFileDiffHistory> | undefined | null, b2: _CmdKDebugInfo_CppFileDiffHistory | PlainMessage<_CmdKDebugInfo_CppFileDiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_CmdKDebugInfo_CppFileDiffHistory as unknown as MessageType<_CmdKDebugInfo_CppFileDiffHistory>, a, b2);
  }
})();
export type CmdKDebugInfo_CppFileDiffHistory = InstanceType<typeof CmdKDebugInfo_CppFileDiffHistory$Runtime>;
var CmdKDebugInfo_CppFileDiffHistory: MessageType<CmdKDebugInfo_CppFileDiffHistory> = CmdKDebugInfo_CppFileDiffHistory$Runtime as unknown as MessageType<CmdKDebugInfo_CppFileDiffHistory>;
(CmdKDebugInfo_CppFileDiffHistory as MutableMessageType<CmdKDebugInfo_CppFileDiffHistory>).runtime = proto3;
(CmdKDebugInfo_CppFileDiffHistory as MutableMessageType<CmdKDebugInfo_CppFileDiffHistory>).typeName = "aiserver.v1.CmdKDebugInfo.CppFileDiffHistory";
(CmdKDebugInfo_CppFileDiffHistory as MutableMessageType<CmdKDebugInfo_CppFileDiffHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: true }
]);
var CmdKDebugInfo_PastThought$Runtime = (() => class _CmdKDebugInfo_PastThought extends Message<_CmdKDebugInfo_PastThought> {
  declare text: string;
  declare timeInUnixSeconds: number;
  constructor(data?: PartialMessage<_CmdKDebugInfo_PastThought>) {
    super();
    this.text = "";
    this.timeInUnixSeconds = 0;
    proto3.util.initPartial(data, this as _CmdKDebugInfo_PastThought);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKDebugInfo_PastThought {
    return new _CmdKDebugInfo_PastThought().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_PastThought {
    return new _CmdKDebugInfo_PastThought().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKDebugInfo_PastThought {
    return new _CmdKDebugInfo_PastThought().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKDebugInfo_PastThought | PlainMessage<_CmdKDebugInfo_PastThought> | undefined | null, b2: _CmdKDebugInfo_PastThought | PlainMessage<_CmdKDebugInfo_PastThought> | undefined | null): boolean {
    return proto3.util.equals(_CmdKDebugInfo_PastThought as unknown as MessageType<_CmdKDebugInfo_PastThought>, a, b2);
  }
})();
export type CmdKDebugInfo_PastThought = InstanceType<typeof CmdKDebugInfo_PastThought$Runtime>;
var CmdKDebugInfo_PastThought: MessageType<CmdKDebugInfo_PastThought> = CmdKDebugInfo_PastThought$Runtime as unknown as MessageType<CmdKDebugInfo_PastThought>;
(CmdKDebugInfo_PastThought as MutableMessageType<CmdKDebugInfo_PastThought>).runtime = proto3;
(CmdKDebugInfo_PastThought as MutableMessageType<CmdKDebugInfo_PastThought>).typeName = "aiserver.v1.CmdKDebugInfo.PastThought";
(CmdKDebugInfo_PastThought as MutableMessageType<CmdKDebugInfo_PastThought>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "time_in_unix_seconds",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var LineRange$Runtime = (() => class _LineRange extends Message<_LineRange> {
  declare startLineNumber: number;
  declare endLineNumberInclusive: number;
  constructor(data?: PartialMessage<_LineRange>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    proto3.util.initPartial(data, this as _LineRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LineRange {
    return new _LineRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LineRange {
    return new _LineRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LineRange {
    return new _LineRange().fromJsonString(jsonString, options);
  }
  static equals(a: _LineRange | PlainMessage<_LineRange> | undefined | null, b2: _LineRange | PlainMessage<_LineRange> | undefined | null): boolean {
    return proto3.util.equals(_LineRange as unknown as MessageType<_LineRange>, a, b2);
  }
})();
export type LineRange = InstanceType<typeof LineRange$Runtime>;
var LineRange: MessageType<LineRange> = LineRange$Runtime as unknown as MessageType<LineRange>;
(LineRange as MutableMessageType<LineRange>).runtime = proto3;
(LineRange as MutableMessageType<LineRange>).typeName = "aiserver.v1.LineRange";
(LineRange as MutableMessageType<LineRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var CursorRange$Runtime = (() => class _CursorRange extends Message<_CursorRange> {
  declare startPosition?: CursorPosition;
  declare endPosition?: CursorPosition;
  constructor(data?: PartialMessage<_CursorRange>) {
    super();
    proto3.util.initPartial(data, this as _CursorRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRange {
    return new _CursorRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRange {
    return new _CursorRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRange {
    return new _CursorRange().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRange | PlainMessage<_CursorRange> | undefined | null, b2: _CursorRange | PlainMessage<_CursorRange> | undefined | null): boolean {
    return proto3.util.equals(_CursorRange as unknown as MessageType<_CursorRange>, a, b2);
  }
})();
export type CursorRange = InstanceType<typeof CursorRange$Runtime>;
var CursorRange: MessageType<CursorRange> = CursorRange$Runtime as unknown as MessageType<CursorRange>;
(CursorRange as MutableMessageType<CursorRange>).runtime = proto3;
(CursorRange as MutableMessageType<CursorRange>).typeName = "aiserver.v1.CursorRange";
(CursorRange as MutableMessageType<CursorRange>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "start_position", kind: "message", T: CursorPosition },
  { no: 2, name: "end_position", kind: "message", T: CursorPosition }
]);
var DetailedLine$Runtime = (() => class _DetailedLine extends Message<_DetailedLine> {
  declare text: string;
  declare lineNumber: number;
  declare isSignature: boolean;
  constructor(data?: PartialMessage<_DetailedLine>) {
    super();
    this.text = "";
    this.lineNumber = 0;
    this.isSignature = false;
    proto3.util.initPartial(data, this as _DetailedLine);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DetailedLine {
    return new _DetailedLine().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DetailedLine {
    return new _DetailedLine().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DetailedLine {
    return new _DetailedLine().fromJsonString(jsonString, options);
  }
  static equals(a: _DetailedLine | PlainMessage<_DetailedLine> | undefined | null, b2: _DetailedLine | PlainMessage<_DetailedLine> | undefined | null): boolean {
    return proto3.util.equals(_DetailedLine as unknown as MessageType<_DetailedLine>, a, b2);
  }
})();
export type DetailedLine = InstanceType<typeof DetailedLine$Runtime>;
var DetailedLine: MessageType<DetailedLine> = DetailedLine$Runtime as unknown as MessageType<DetailedLine>;
(DetailedLine as MutableMessageType<DetailedLine>).runtime = proto3;
(DetailedLine as MutableMessageType<DetailedLine>).typeName = "aiserver.v1.DetailedLine";
(DetailedLine as MutableMessageType<DetailedLine>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 3,
    name: "is_signature",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CodeBlock$Runtime = (() => class _CodeBlock extends Message<_CodeBlock> {
  declare relativeWorkspacePath: string;
  declare fileContents?: string;
  declare fileContentsLength?: number;
  declare range?: CursorRange;
  declare contents: string;
  declare signatures?: CodeBlock_Signatures;
  declare overrideContents?: string;
  declare originalContents?: string;
  declare detailedLines: DetailedLine[];
  declare fileGitContext?: FileGit;
  constructor(data?: PartialMessage<_CodeBlock>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    this.detailedLines = [];
    proto3.util.initPartial(data, this as _CodeBlock);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeBlock {
    return new _CodeBlock().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeBlock {
    return new _CodeBlock().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeBlock {
    return new _CodeBlock().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeBlock | PlainMessage<_CodeBlock> | undefined | null, b2: _CodeBlock | PlainMessage<_CodeBlock> | undefined | null): boolean {
    return proto3.util.equals(_CodeBlock as unknown as MessageType<_CodeBlock>, a, b2);
  }
})();
export type CodeBlock = InstanceType<typeof CodeBlock$Runtime>;
var CodeBlock: MessageType<CodeBlock> = CodeBlock$Runtime as unknown as MessageType<CodeBlock>;
(CodeBlock as MutableMessageType<CodeBlock>).runtime = proto3;
(CodeBlock as MutableMessageType<CodeBlock>).typeName = "aiserver.v1.CodeBlock";
(CodeBlock as MutableMessageType<CodeBlock>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file_contents", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "file_contents_length", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "range", kind: "message", T: CursorRange },
  {
    no: 4,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "signatures", kind: "message", T: CodeBlock_Signatures },
  { no: 6, name: "override_contents", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "original_contents", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "detailed_lines", kind: "message", T: DetailedLine, repeated: true },
  { no: 10, name: "file_git_context", kind: "message", T: FileGit }
]);
var CodeBlock_Signatures$Runtime = (() => class _CodeBlock_Signatures extends Message<_CodeBlock_Signatures> {
  declare ranges: CursorRange[];
  constructor(data?: PartialMessage<_CodeBlock_Signatures>) {
    super();
    this.ranges = [];
    proto3.util.initPartial(data, this as _CodeBlock_Signatures);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeBlock_Signatures {
    return new _CodeBlock_Signatures().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeBlock_Signatures {
    return new _CodeBlock_Signatures().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeBlock_Signatures {
    return new _CodeBlock_Signatures().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeBlock_Signatures | PlainMessage<_CodeBlock_Signatures> | undefined | null, b2: _CodeBlock_Signatures | PlainMessage<_CodeBlock_Signatures> | undefined | null): boolean {
    return proto3.util.equals(_CodeBlock_Signatures as unknown as MessageType<_CodeBlock_Signatures>, a, b2);
  }
})();
export type CodeBlock_Signatures = InstanceType<typeof CodeBlock_Signatures$Runtime>;
var CodeBlock_Signatures: MessageType<CodeBlock_Signatures> = CodeBlock_Signatures$Runtime as unknown as MessageType<CodeBlock_Signatures>;
(CodeBlock_Signatures as MutableMessageType<CodeBlock_Signatures>).runtime = proto3;
(CodeBlock_Signatures as MutableMessageType<CodeBlock_Signatures>).typeName = "aiserver.v1.CodeBlock.Signatures";
(CodeBlock_Signatures as MutableMessageType<CodeBlock_Signatures>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ranges", kind: "message", T: CursorRange, repeated: true }
]);
var GitCommit$Runtime = (() => class _GitCommit extends Message<_GitCommit> {
  declare commit: string;
  declare author: string;
  declare date: string;
  declare message: string;
  constructor(data?: PartialMessage<_GitCommit>) {
    super();
    this.commit = "";
    this.author = "";
    this.date = "";
    this.message = "";
    proto3.util.initPartial(data, this as _GitCommit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GitCommit {
    return new _GitCommit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GitCommit {
    return new _GitCommit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GitCommit {
    return new _GitCommit().fromJsonString(jsonString, options);
  }
  static equals(a: _GitCommit | PlainMessage<_GitCommit> | undefined | null, b2: _GitCommit | PlainMessage<_GitCommit> | undefined | null): boolean {
    return proto3.util.equals(_GitCommit as unknown as MessageType<_GitCommit>, a, b2);
  }
})();
export type GitCommit = InstanceType<typeof GitCommit$Runtime>;
var GitCommit: MessageType<GitCommit> = GitCommit$Runtime as unknown as MessageType<GitCommit>;
(GitCommit as MutableMessageType<GitCommit>).runtime = proto3;
(GitCommit as MutableMessageType<GitCommit>).typeName = "aiserver.v1.GitCommit";
(GitCommit as MutableMessageType<GitCommit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "author",
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
  {
    no: 4,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FileGit$Runtime = (() => class _FileGit extends Message<_FileGit> {
  declare commits: GitCommit[];
  constructor(data?: PartialMessage<_FileGit>) {
    super();
    this.commits = [];
    proto3.util.initPartial(data, this as _FileGit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileGit {
    return new _FileGit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileGit {
    return new _FileGit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileGit {
    return new _FileGit().fromJsonString(jsonString, options);
  }
  static equals(a: _FileGit | PlainMessage<_FileGit> | undefined | null, b2: _FileGit | PlainMessage<_FileGit> | undefined | null): boolean {
    return proto3.util.equals(_FileGit as unknown as MessageType<_FileGit>, a, b2);
  }
})();
export type FileGit = InstanceType<typeof FileGit$Runtime>;
var FileGit: MessageType<FileGit> = FileGit$Runtime as unknown as MessageType<FileGit>;
(FileGit as MutableMessageType<FileGit>).runtime = proto3;
(FileGit as MutableMessageType<FileGit>).typeName = "aiserver.v1.FileGit";
(FileGit as MutableMessageType<FileGit>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "commits", kind: "message", T: GitCommit, repeated: true }
]);
var File2$Runtime = (() => class _File extends Message<_File> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare fileGitContext?: FileGit;
  constructor(data?: PartialMessage<_File>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    proto3.util.initPartial(data, this as _File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _File {
    return new _File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _File {
    return new _File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _File {
    return new _File().fromJsonString(jsonString, options);
  }
  static equals(a: _File | PlainMessage<_File> | undefined | null, b2: _File | PlainMessage<_File> | undefined | null): boolean {
    return proto3.util.equals(_File as unknown as MessageType<_File>, a, b2);
  }
})();
export type File2 = InstanceType<typeof File2$Runtime>;
var File2: MessageType<File2> = File2$Runtime as unknown as MessageType<File2>;
(File2 as MutableMessageType<File2>).runtime = proto3;
(File2 as MutableMessageType<File2>).typeName = "aiserver.v1.File";
(File2 as MutableMessageType<File2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "file_git_context", kind: "message", T: FileGit }
]);
var Diagnostic2$Runtime = (() => class _Diagnostic extends Message<_Diagnostic> {
  declare message: string;
  declare range?: CursorRange;
  declare severity: Diagnostic_DiagnosticSeverity;
  declare relatedInformation: Diagnostic_RelatedInformation[];
  constructor(data?: PartialMessage<_Diagnostic>) {
    super();
    this.message = "";
    this.severity = Diagnostic_DiagnosticSeverity.UNSPECIFIED;
    this.relatedInformation = [];
    proto3.util.initPartial(data, this as _Diagnostic);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Diagnostic {
    return new _Diagnostic().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Diagnostic {
    return new _Diagnostic().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Diagnostic {
    return new _Diagnostic().fromJsonString(jsonString, options);
  }
  static equals(a: _Diagnostic | PlainMessage<_Diagnostic> | undefined | null, b2: _Diagnostic | PlainMessage<_Diagnostic> | undefined | null): boolean {
    return proto3.util.equals(_Diagnostic as unknown as MessageType<_Diagnostic>, a, b2);
  }
})();
export type Diagnostic2 = InstanceType<typeof Diagnostic2$Runtime>;
var Diagnostic2: MessageType<Diagnostic2> = Diagnostic2$Runtime as unknown as MessageType<Diagnostic2>;
(Diagnostic2 as MutableMessageType<Diagnostic2>).runtime = proto3;
(Diagnostic2 as MutableMessageType<Diagnostic2>).typeName = "aiserver.v1.Diagnostic";
(Diagnostic2 as MutableMessageType<Diagnostic2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange },
  { no: 3, name: "severity", kind: "enum", T: proto3.getEnumType(Diagnostic_DiagnosticSeverity) },
  { no: 4, name: "related_information", kind: "message", T: Diagnostic_RelatedInformation, repeated: true }
]);
(function(Diagnostic_DiagnosticSeverity2) {
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["ERROR"] = 1] = "ERROR";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["WARNING"] = 2] = "WARNING";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["INFORMATION"] = 3] = "INFORMATION";
  Diagnostic_DiagnosticSeverity2[Diagnostic_DiagnosticSeverity2["HINT"] = 4] = "HINT";
})(Diagnostic_DiagnosticSeverity! || (Diagnostic_DiagnosticSeverity = {} as typeof Diagnostic_DiagnosticSeverity));
proto3.util.setEnumType(Diagnostic_DiagnosticSeverity, "aiserver.v1.Diagnostic.DiagnosticSeverity", [
  { no: 0, name: "DIAGNOSTIC_SEVERITY_UNSPECIFIED" },
  { no: 1, name: "DIAGNOSTIC_SEVERITY_ERROR" },
  { no: 2, name: "DIAGNOSTIC_SEVERITY_WARNING" },
  { no: 3, name: "DIAGNOSTIC_SEVERITY_INFORMATION" },
  { no: 4, name: "DIAGNOSTIC_SEVERITY_HINT" }
]);
var Diagnostic_RelatedInformation$Runtime = (() => class _Diagnostic_RelatedInformation extends Message<_Diagnostic_RelatedInformation> {
  declare message: string;
  declare range?: CursorRange;
  constructor(data?: PartialMessage<_Diagnostic_RelatedInformation>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _Diagnostic_RelatedInformation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Diagnostic_RelatedInformation {
    return new _Diagnostic_RelatedInformation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Diagnostic_RelatedInformation {
    return new _Diagnostic_RelatedInformation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Diagnostic_RelatedInformation {
    return new _Diagnostic_RelatedInformation().fromJsonString(jsonString, options);
  }
  static equals(a: _Diagnostic_RelatedInformation | PlainMessage<_Diagnostic_RelatedInformation> | undefined | null, b2: _Diagnostic_RelatedInformation | PlainMessage<_Diagnostic_RelatedInformation> | undefined | null): boolean {
    return proto3.util.equals(_Diagnostic_RelatedInformation as unknown as MessageType<_Diagnostic_RelatedInformation>, a, b2);
  }
})();
export type Diagnostic_RelatedInformation = InstanceType<typeof Diagnostic_RelatedInformation$Runtime>;
var Diagnostic_RelatedInformation: MessageType<Diagnostic_RelatedInformation> = Diagnostic_RelatedInformation$Runtime as unknown as MessageType<Diagnostic_RelatedInformation>;
(Diagnostic_RelatedInformation as MutableMessageType<Diagnostic_RelatedInformation>).runtime = proto3;
(Diagnostic_RelatedInformation as MutableMessageType<Diagnostic_RelatedInformation>).typeName = "aiserver.v1.Diagnostic.RelatedInformation";
(Diagnostic_RelatedInformation as MutableMessageType<Diagnostic_RelatedInformation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange }
]);
var Lint$Runtime = (() => class _Lint extends Message<_Lint> {
  declare message: string;
  declare range?: SimpleRange;
  declare severity: LintSeverity;
  constructor(data?: PartialMessage<_Lint>) {
    super();
    this.message = "";
    this.severity = LintSeverity.UNSPECIFIED;
    proto3.util.initPartial(data, this as _Lint);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Lint {
    return new _Lint().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Lint {
    return new _Lint().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Lint {
    return new _Lint().fromJsonString(jsonString, options);
  }
  static equals(a: _Lint | PlainMessage<_Lint> | undefined | null, b2: _Lint | PlainMessage<_Lint> | undefined | null): boolean {
    return proto3.util.equals(_Lint as unknown as MessageType<_Lint>, a, b2);
  }
})();
export type Lint = InstanceType<typeof Lint$Runtime>;
var Lint: MessageType<Lint> = Lint$Runtime as unknown as MessageType<Lint>;
(Lint as MutableMessageType<Lint>).runtime = proto3;
(Lint as MutableMessageType<Lint>).typeName = "aiserver.v1.Lint";
(Lint as MutableMessageType<Lint>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimpleRange },
  { no: 3, name: "severity", kind: "enum", T: proto3.getEnumType(LintSeverity) }
]);
var BM25Chunk$Runtime = (() => class _BM25Chunk extends Message<_BM25Chunk> {
  declare content: string;
  declare range?: SimplestRange;
  declare score: number;
  declare relativePath: string;
  constructor(data?: PartialMessage<_BM25Chunk>) {
    super();
    this.content = "";
    this.score = 0;
    this.relativePath = "";
    proto3.util.initPartial(data, this as _BM25Chunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BM25Chunk {
    return new _BM25Chunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BM25Chunk {
    return new _BM25Chunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BM25Chunk {
    return new _BM25Chunk().fromJsonString(jsonString, options);
  }
  static equals(a: _BM25Chunk | PlainMessage<_BM25Chunk> | undefined | null, b2: _BM25Chunk | PlainMessage<_BM25Chunk> | undefined | null): boolean {
    return proto3.util.equals(_BM25Chunk as unknown as MessageType<_BM25Chunk>, a, b2);
  }
})();
export type BM25Chunk = InstanceType<typeof BM25Chunk$Runtime>;
var BM25Chunk: MessageType<BM25Chunk> = BM25Chunk$Runtime as unknown as MessageType<BM25Chunk>;
(BM25Chunk as MutableMessageType<BM25Chunk>).runtime = proto3;
(BM25Chunk as MutableMessageType<BM25Chunk>).typeName = "aiserver.v1.BM25Chunk";
(BM25Chunk as MutableMessageType<BM25Chunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: SimplestRange },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CurrentFileInfo$Runtime = (() => class _CurrentFileInfo extends Message<_CurrentFileInfo> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare relyOnFilesync: boolean;
  declare sha256Hash?: string;
  declare cells: CurrentFileInfo_NotebookCell[];
  declare topChunks: BM25Chunk[];
  declare contentsStartAtLine: number;
  declare cursorPosition?: CursorPosition;
  declare dataframes: DataframeInfo[];
  declare totalNumberOfLines: number;
  declare languageId: string;
  declare selection?: CursorRange;
  declare alternativeVersionId?: number;
  declare diagnostics: Diagnostic2[];
  declare fileVersion?: number;
  declare cellStartLines: number[];
  declare workspaceRootPath: string;
  declare lineEnding?: string;
  constructor(data?: PartialMessage<_CurrentFileInfo>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    this.relyOnFilesync = false;
    this.cells = [];
    this.topChunks = [];
    this.contentsStartAtLine = 0;
    this.dataframes = [];
    this.totalNumberOfLines = 0;
    this.languageId = "";
    this.diagnostics = [];
    this.cellStartLines = [];
    this.workspaceRootPath = "";
    proto3.util.initPartial(data, this as _CurrentFileInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CurrentFileInfo {
    return new _CurrentFileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CurrentFileInfo {
    return new _CurrentFileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CurrentFileInfo {
    return new _CurrentFileInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _CurrentFileInfo | PlainMessage<_CurrentFileInfo> | undefined | null, b2: _CurrentFileInfo | PlainMessage<_CurrentFileInfo> | undefined | null): boolean {
    return proto3.util.equals(_CurrentFileInfo as unknown as MessageType<_CurrentFileInfo>, a, b2);
  }
})();
export type CurrentFileInfo = InstanceType<typeof CurrentFileInfo$Runtime>;
var CurrentFileInfo: MessageType<CurrentFileInfo> = CurrentFileInfo$Runtime as unknown as MessageType<CurrentFileInfo>;
(CurrentFileInfo as MutableMessageType<CurrentFileInfo>).runtime = proto3;
(CurrentFileInfo as MutableMessageType<CurrentFileInfo>).typeName = "aiserver.v1.CurrentFileInfo";
(CurrentFileInfo as MutableMessageType<CurrentFileInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 18,
    name: "rely_on_filesync",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 17, name: "sha_256_hash", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "cells", kind: "message", T: CurrentFileInfo_NotebookCell, repeated: true },
  { no: 10, name: "top_chunks", kind: "message", T: BM25Chunk, repeated: true },
  {
    no: 9,
    name: "contents_start_at_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "cursor_position", kind: "message", T: CursorPosition },
  { no: 4, name: "dataframes", kind: "message", T: DataframeInfo, repeated: true },
  {
    no: 8,
    name: "total_number_of_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "language_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "selection", kind: "message", T: CursorRange },
  { no: 11, name: "alternative_version_id", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "diagnostics", kind: "message", T: Diagnostic2, repeated: true },
  { no: 14, name: "file_version", kind: "scalar", T: 5, opt: true },
  { no: 15, name: "cell_start_lines", kind: "scalar", T: 5, repeated: true },
  {
    no: 19,
    name: "workspace_root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 20, name: "line_ending", kind: "scalar", T: 9, opt: true }
]);
var CurrentFileInfo_NotebookCell$Runtime = (() => class _CurrentFileInfo_NotebookCell extends Message<_CurrentFileInfo_NotebookCell> {
  constructor(data?: PartialMessage<_CurrentFileInfo_NotebookCell>) {
    super();
    proto3.util.initPartial(data, this as _CurrentFileInfo_NotebookCell);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CurrentFileInfo_NotebookCell {
    return new _CurrentFileInfo_NotebookCell().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CurrentFileInfo_NotebookCell {
    return new _CurrentFileInfo_NotebookCell().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CurrentFileInfo_NotebookCell {
    return new _CurrentFileInfo_NotebookCell().fromJsonString(jsonString, options);
  }
  static equals(a: _CurrentFileInfo_NotebookCell | PlainMessage<_CurrentFileInfo_NotebookCell> | undefined | null, b2: _CurrentFileInfo_NotebookCell | PlainMessage<_CurrentFileInfo_NotebookCell> | undefined | null): boolean {
    return proto3.util.equals(_CurrentFileInfo_NotebookCell as unknown as MessageType<_CurrentFileInfo_NotebookCell>, a, b2);
  }
})();
export type CurrentFileInfo_NotebookCell = InstanceType<typeof CurrentFileInfo_NotebookCell$Runtime>;
var CurrentFileInfo_NotebookCell: MessageType<CurrentFileInfo_NotebookCell> = CurrentFileInfo_NotebookCell$Runtime as unknown as MessageType<CurrentFileInfo_NotebookCell>;
(CurrentFileInfo_NotebookCell as MutableMessageType<CurrentFileInfo_NotebookCell>).runtime = proto3;
(CurrentFileInfo_NotebookCell as MutableMessageType<CurrentFileInfo_NotebookCell>).typeName = "aiserver.v1.CurrentFileInfo.NotebookCell";
(CurrentFileInfo_NotebookCell as MutableMessageType<CurrentFileInfo_NotebookCell>).fields = proto3.util.newFieldList(() => []);
var AzureState$Runtime = (() => class _AzureState extends Message<_AzureState> {
  declare apiKey: string;
  declare baseUrl: string;
  declare deployment: string;
  declare useAzure: boolean;
  constructor(data?: PartialMessage<_AzureState>) {
    super();
    this.apiKey = "";
    this.baseUrl = "";
    this.deployment = "";
    this.useAzure = false;
    proto3.util.initPartial(data, this as _AzureState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AzureState {
    return new _AzureState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AzureState {
    return new _AzureState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AzureState {
    return new _AzureState().fromJsonString(jsonString, options);
  }
  static equals(a: _AzureState | PlainMessage<_AzureState> | undefined | null, b2: _AzureState | PlainMessage<_AzureState> | undefined | null): boolean {
    return proto3.util.equals(_AzureState as unknown as MessageType<_AzureState>, a, b2);
  }
})();
export type AzureState = InstanceType<typeof AzureState$Runtime>;
var AzureState: MessageType<AzureState> = AzureState$Runtime as unknown as MessageType<AzureState>;
(AzureState as MutableMessageType<AzureState>).runtime = proto3;
(AzureState as MutableMessageType<AzureState>).typeName = "aiserver.v1.AzureState";
(AzureState as MutableMessageType<AzureState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "api_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "base_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "deployment",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "use_azure",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BedrockState$Runtime = (() => class _BedrockState extends Message<_BedrockState> {
  declare accessKey: string;
  declare secretKey: string;
  declare region: string;
  declare useBedrock: boolean;
  declare sessionToken: string;
  constructor(data?: PartialMessage<_BedrockState>) {
    super();
    this.accessKey = "";
    this.secretKey = "";
    this.region = "";
    this.useBedrock = false;
    this.sessionToken = "";
    proto3.util.initPartial(data, this as _BedrockState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BedrockState {
    return new _BedrockState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BedrockState {
    return new _BedrockState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BedrockState {
    return new _BedrockState().fromJsonString(jsonString, options);
  }
  static equals(a: _BedrockState | PlainMessage<_BedrockState> | undefined | null, b2: _BedrockState | PlainMessage<_BedrockState> | undefined | null): boolean {
    return proto3.util.equals(_BedrockState as unknown as MessageType<_BedrockState>, a, b2);
  }
})();
export type BedrockState = InstanceType<typeof BedrockState$Runtime>;
var BedrockState: MessageType<BedrockState> = BedrockState$Runtime as unknown as MessageType<BedrockState>;
(BedrockState as MutableMessageType<BedrockState>).runtime = proto3;
(BedrockState as MutableMessageType<BedrockState>).typeName = "aiserver.v1.BedrockState";
(BedrockState as MutableMessageType<BedrockState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "access_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "secret_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "region",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "use_bedrock",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "session_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ModelDetails$Runtime = (() => class _ModelDetails extends Message<_ModelDetails> {
  declare modelName?: string;
  declare apiKey?: string;
  declare enableGhostMode?: boolean;
  declare azureState?: AzureState;
  declare enableSlowPool?: boolean;
  declare openaiApiBaseUrl?: string;
  declare bedrockState?: BedrockState;
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_ModelDetails>) {
    super();
    proto3.util.initPartial(data, this as _ModelDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelDetails {
    return new _ModelDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelDetails {
    return new _ModelDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelDetails {
    return new _ModelDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelDetails | PlainMessage<_ModelDetails> | undefined | null, b2: _ModelDetails | PlainMessage<_ModelDetails> | undefined | null): boolean {
    return proto3.util.equals(_ModelDetails as unknown as MessageType<_ModelDetails>, a, b2);
  }
})();
export type ModelDetails = InstanceType<typeof ModelDetails$Runtime>;
var ModelDetails: MessageType<ModelDetails> = ModelDetails$Runtime as unknown as MessageType<ModelDetails>;
(ModelDetails as MutableMessageType<ModelDetails>).runtime = proto3;
(ModelDetails as MutableMessageType<ModelDetails>).typeName = "aiserver.v1.ModelDetails";
(ModelDetails as MutableMessageType<ModelDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "model_name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "api_key", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "enable_ghost_mode", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "azure_state", kind: "message", T: AzureState, opt: true },
  { no: 5, name: "enable_slow_pool", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "openai_api_base_url", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "bedrock_state", kind: "message", T: BedrockState, opt: true },
  { no: 8, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var CloudAgentModelSelection$Runtime = (() => class _CloudAgentModelSelection extends Message<_CloudAgentModelSelection> {
  declare modelId: string;
  declare parameters: CloudAgentModelSelection_ParameterValue[];
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_CloudAgentModelSelection>) {
    super();
    this.modelId = "";
    this.parameters = [];
    proto3.util.initPartial(data, this as _CloudAgentModelSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloudAgentModelSelection {
    return new _CloudAgentModelSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloudAgentModelSelection {
    return new _CloudAgentModelSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloudAgentModelSelection {
    return new _CloudAgentModelSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _CloudAgentModelSelection | PlainMessage<_CloudAgentModelSelection> | undefined | null, b2: _CloudAgentModelSelection | PlainMessage<_CloudAgentModelSelection> | undefined | null): boolean {
    return proto3.util.equals(_CloudAgentModelSelection as unknown as MessageType<_CloudAgentModelSelection>, a, b2);
  }
})();
export type CloudAgentModelSelection = InstanceType<typeof CloudAgentModelSelection$Runtime>;
var CloudAgentModelSelection: MessageType<CloudAgentModelSelection> = CloudAgentModelSelection$Runtime as unknown as MessageType<CloudAgentModelSelection>;
(CloudAgentModelSelection as MutableMessageType<CloudAgentModelSelection>).runtime = proto3;
(CloudAgentModelSelection as MutableMessageType<CloudAgentModelSelection>).typeName = "aiserver.v1.CloudAgentModelSelection";
(CloudAgentModelSelection as MutableMessageType<CloudAgentModelSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "parameters", kind: "message", T: CloudAgentModelSelection_ParameterValue, repeated: true },
  { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var CloudAgentModelSelection_ParameterValue$Runtime = (() => class _CloudAgentModelSelection_ParameterValue extends Message<_CloudAgentModelSelection_ParameterValue> {
  declare id: string;
  declare value: string;
  constructor(data?: PartialMessage<_CloudAgentModelSelection_ParameterValue>) {
    super();
    this.id = "";
    this.value = "";
    proto3.util.initPartial(data, this as _CloudAgentModelSelection_ParameterValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloudAgentModelSelection_ParameterValue {
    return new _CloudAgentModelSelection_ParameterValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloudAgentModelSelection_ParameterValue {
    return new _CloudAgentModelSelection_ParameterValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloudAgentModelSelection_ParameterValue {
    return new _CloudAgentModelSelection_ParameterValue().fromJsonString(jsonString, options);
  }
  static equals(a: _CloudAgentModelSelection_ParameterValue | PlainMessage<_CloudAgentModelSelection_ParameterValue> | undefined | null, b2: _CloudAgentModelSelection_ParameterValue | PlainMessage<_CloudAgentModelSelection_ParameterValue> | undefined | null): boolean {
    return proto3.util.equals(_CloudAgentModelSelection_ParameterValue as unknown as MessageType<_CloudAgentModelSelection_ParameterValue>, a, b2);
  }
})();
export type CloudAgentModelSelection_ParameterValue = InstanceType<typeof CloudAgentModelSelection_ParameterValue$Runtime>;
var CloudAgentModelSelection_ParameterValue: MessageType<CloudAgentModelSelection_ParameterValue> = CloudAgentModelSelection_ParameterValue$Runtime as unknown as MessageType<CloudAgentModelSelection_ParameterValue>;
(CloudAgentModelSelection_ParameterValue as MutableMessageType<CloudAgentModelSelection_ParameterValue>).runtime = proto3;
(CloudAgentModelSelection_ParameterValue as MutableMessageType<CloudAgentModelSelection_ParameterValue>).typeName = "aiserver.v1.CloudAgentModelSelection.ParameterValue";
(CloudAgentModelSelection_ParameterValue as MutableMessageType<CloudAgentModelSelection_ParameterValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ModelInfo$Runtime = (() => class _ModelInfo extends Message<_ModelInfo> {
  declare modelName: string;
  constructor(data?: PartialMessage<_ModelInfo>) {
    super();
    this.modelName = "";
    proto3.util.initPartial(data, this as _ModelInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelInfo {
    return new _ModelInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelInfo {
    return new _ModelInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelInfo {
    return new _ModelInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelInfo | PlainMessage<_ModelInfo> | undefined | null, b2: _ModelInfo | PlainMessage<_ModelInfo> | undefined | null): boolean {
    return proto3.util.equals(_ModelInfo as unknown as MessageType<_ModelInfo>, a, b2);
  }
})();
export type ModelInfo = InstanceType<typeof ModelInfo$Runtime>;
var ModelInfo: MessageType<ModelInfo> = ModelInfo$Runtime as unknown as MessageType<ModelInfo>;
(ModelInfo as MutableMessageType<ModelInfo>).runtime = proto3;
(ModelInfo as MutableMessageType<ModelInfo>).typeName = "aiserver.v1.ModelInfo";
(ModelInfo as MutableMessageType<ModelInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DataframeInfo$Runtime = (() => class _DataframeInfo extends Message<_DataframeInfo> {
  declare name: string;
  declare shape: string;
  declare dataDimensionality: number;
  declare columns: DataframeInfo_Column[];
  declare rowCount: number;
  declare indexColumn: string;
  constructor(data?: PartialMessage<_DataframeInfo>) {
    super();
    this.name = "";
    this.shape = "";
    this.dataDimensionality = 0;
    this.columns = [];
    this.rowCount = 0;
    this.indexColumn = "";
    proto3.util.initPartial(data, this as _DataframeInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DataframeInfo {
    return new _DataframeInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DataframeInfo {
    return new _DataframeInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DataframeInfo {
    return new _DataframeInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _DataframeInfo | PlainMessage<_DataframeInfo> | undefined | null, b2: _DataframeInfo | PlainMessage<_DataframeInfo> | undefined | null): boolean {
    return proto3.util.equals(_DataframeInfo as unknown as MessageType<_DataframeInfo>, a, b2);
  }
})();
export type DataframeInfo = InstanceType<typeof DataframeInfo$Runtime>;
var DataframeInfo: MessageType<DataframeInfo> = DataframeInfo$Runtime as unknown as MessageType<DataframeInfo>;
(DataframeInfo as MutableMessageType<DataframeInfo>).runtime = proto3;
(DataframeInfo as MutableMessageType<DataframeInfo>).typeName = "aiserver.v1.DataframeInfo";
(DataframeInfo as MutableMessageType<DataframeInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "shape",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "data_dimensionality",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "columns", kind: "message", T: DataframeInfo_Column, repeated: true },
  {
    no: 7,
    name: "row_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 8,
    name: "index_column",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DataframeInfo_Column$Runtime = (() => class _DataframeInfo_Column extends Message<_DataframeInfo_Column> {
  declare key: string;
  declare type: string;
  constructor(data?: PartialMessage<_DataframeInfo_Column>) {
    super();
    this.key = "";
    this.type = "";
    proto3.util.initPartial(data, this as _DataframeInfo_Column);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DataframeInfo_Column {
    return new _DataframeInfo_Column().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DataframeInfo_Column {
    return new _DataframeInfo_Column().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DataframeInfo_Column {
    return new _DataframeInfo_Column().fromJsonString(jsonString, options);
  }
  static equals(a: _DataframeInfo_Column | PlainMessage<_DataframeInfo_Column> | undefined | null, b2: _DataframeInfo_Column | PlainMessage<_DataframeInfo_Column> | undefined | null): boolean {
    return proto3.util.equals(_DataframeInfo_Column as unknown as MessageType<_DataframeInfo_Column>, a, b2);
  }
})();
export type DataframeInfo_Column = InstanceType<typeof DataframeInfo_Column$Runtime>;
var DataframeInfo_Column: MessageType<DataframeInfo_Column> = DataframeInfo_Column$Runtime as unknown as MessageType<DataframeInfo_Column>;
(DataframeInfo_Column as MutableMessageType<DataframeInfo_Column>).runtime = proto3;
(DataframeInfo_Column as MutableMessageType<DataframeInfo_Column>).typeName = "aiserver.v1.DataframeInfo.Column";
(DataframeInfo_Column as MutableMessageType<DataframeInfo_Column>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LinterError$Runtime = (() => class _LinterError extends Message<_LinterError> {
  declare message: string;
  declare range?: CursorRange;
  declare source?: string;
  declare relatedInformation: Diagnostic_RelatedInformation[];
  declare severity?: Diagnostic_DiagnosticSeverity;
  declare isStale?: boolean;
  constructor(data?: PartialMessage<_LinterError>) {
    super();
    this.message = "";
    this.relatedInformation = [];
    proto3.util.initPartial(data, this as _LinterError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LinterError {
    return new _LinterError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LinterError {
    return new _LinterError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LinterError {
    return new _LinterError().fromJsonString(jsonString, options);
  }
  static equals(a: _LinterError | PlainMessage<_LinterError> | undefined | null, b2: _LinterError | PlainMessage<_LinterError> | undefined | null): boolean {
    return proto3.util.equals(_LinterError as unknown as MessageType<_LinterError>, a, b2);
  }
})();
export type LinterError = InstanceType<typeof LinterError$Runtime>;
var LinterError: MessageType<LinterError> = LinterError$Runtime as unknown as MessageType<LinterError>;
(LinterError as MutableMessageType<LinterError>).runtime = proto3;
(LinterError as MutableMessageType<LinterError>).typeName = "aiserver.v1.LinterError";
(LinterError as MutableMessageType<LinterError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "range", kind: "message", T: CursorRange },
  { no: 3, name: "source", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "related_information", kind: "message", T: Diagnostic_RelatedInformation, repeated: true },
  { no: 5, name: "severity", kind: "enum", T: proto3.getEnumType(Diagnostic_DiagnosticSeverity), opt: true },
  { no: 6, name: "is_stale", kind: "scalar", T: 8, opt: true }
]);
var LinterErrors$Runtime = (() => class _LinterErrors extends Message<_LinterErrors> {
  declare relativeWorkspacePath: string;
  declare errors: LinterError[];
  declare fileContents: string;
  constructor(data?: PartialMessage<_LinterErrors>) {
    super();
    this.relativeWorkspacePath = "";
    this.errors = [];
    this.fileContents = "";
    proto3.util.initPartial(data, this as _LinterErrors);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LinterErrors {
    return new _LinterErrors().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LinterErrors {
    return new _LinterErrors().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LinterErrors {
    return new _LinterErrors().fromJsonString(jsonString, options);
  }
  static equals(a: _LinterErrors | PlainMessage<_LinterErrors> | undefined | null, b2: _LinterErrors | PlainMessage<_LinterErrors> | undefined | null): boolean {
    return proto3.util.equals(_LinterErrors as unknown as MessageType<_LinterErrors>, a, b2);
  }
})();
export type LinterErrors = InstanceType<typeof LinterErrors$Runtime>;
var LinterErrors: MessageType<LinterErrors> = LinterErrors$Runtime as unknown as MessageType<LinterErrors>;
(LinterErrors as MutableMessageType<LinterErrors>).runtime = proto3;
(LinterErrors as MutableMessageType<LinterErrors>).typeName = "aiserver.v1.LinterErrors";
(LinterErrors as MutableMessageType<LinterErrors>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "errors", kind: "message", T: LinterError, repeated: true },
  {
    no: 3,
    name: "file_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LinterErrorsWithoutFileContents$Runtime = (() => class _LinterErrorsWithoutFileContents extends Message<_LinterErrorsWithoutFileContents> {
  declare relativeWorkspacePath: string;
  declare errors: LinterError[];
  constructor(data?: PartialMessage<_LinterErrorsWithoutFileContents>) {
    super();
    this.relativeWorkspacePath = "";
    this.errors = [];
    proto3.util.initPartial(data, this as _LinterErrorsWithoutFileContents);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LinterErrorsWithoutFileContents {
    return new _LinterErrorsWithoutFileContents().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LinterErrorsWithoutFileContents {
    return new _LinterErrorsWithoutFileContents().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LinterErrorsWithoutFileContents {
    return new _LinterErrorsWithoutFileContents().fromJsonString(jsonString, options);
  }
  static equals(a: _LinterErrorsWithoutFileContents | PlainMessage<_LinterErrorsWithoutFileContents> | undefined | null, b2: _LinterErrorsWithoutFileContents | PlainMessage<_LinterErrorsWithoutFileContents> | undefined | null): boolean {
    return proto3.util.equals(_LinterErrorsWithoutFileContents as unknown as MessageType<_LinterErrorsWithoutFileContents>, a, b2);
  }
})();
export type LinterErrorsWithoutFileContents = InstanceType<typeof LinterErrorsWithoutFileContents$Runtime>;
var LinterErrorsWithoutFileContents: MessageType<LinterErrorsWithoutFileContents> = LinterErrorsWithoutFileContents$Runtime as unknown as MessageType<LinterErrorsWithoutFileContents>;
(LinterErrorsWithoutFileContents as MutableMessageType<LinterErrorsWithoutFileContents>).runtime = proto3;
(LinterErrorsWithoutFileContents as MutableMessageType<LinterErrorsWithoutFileContents>).typeName = "aiserver.v1.LinterErrorsWithoutFileContents";
(LinterErrorsWithoutFileContents as MutableMessageType<LinterErrorsWithoutFileContents>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "errors", kind: "message", T: LinterError, repeated: true }
]);
var CursorRule2$Runtime = (() => class _CursorRule extends Message<_CursorRule> {
  declare name: string;
  declare description: string;
  declare body?: string;
  declare isFromGlob?: boolean;
  declare alwaysApply?: boolean;
  declare attachToBackgroundAgents?: boolean;
  declare fullPath?: string;
  declare environments: string[];
  declare disabledEnvironments: string[];
  declare plugin?: string;
  declare marketplace?: string;
  constructor(data?: PartialMessage<_CursorRule>) {
    super();
    this.name = "";
    this.description = "";
    this.environments = [];
    this.disabledEnvironments = [];
    proto3.util.initPartial(data, this as _CursorRule);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRule {
    return new _CursorRule().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRule {
    return new _CursorRule().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRule {
    return new _CursorRule().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRule | PlainMessage<_CursorRule> | undefined | null, b2: _CursorRule | PlainMessage<_CursorRule> | undefined | null): boolean {
    return proto3.util.equals(_CursorRule as unknown as MessageType<_CursorRule>, a, b2);
  }
})();
export type CursorRule2 = InstanceType<typeof CursorRule2$Runtime>;
var CursorRule2: MessageType<CursorRule2> = CursorRule2$Runtime as unknown as MessageType<CursorRule2>;
(CursorRule2 as MutableMessageType<CursorRule2>).runtime = proto3;
(CursorRule2 as MutableMessageType<CursorRule2>).typeName = "aiserver.v1.CursorRule";
(CursorRule2 as MutableMessageType<CursorRule2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "body", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_from_glob", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "always_apply", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "attach_to_background_agents", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "full_path", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "environments", kind: "scalar", T: 9, repeated: true },
  { no: 9, name: "disabled_environments", kind: "scalar", T: 9, repeated: true },
  { no: 10, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "marketplace", kind: "scalar", T: 9, opt: true }
]);
var ExplicitContext$Runtime = (() => class _ExplicitContext extends Message<_ExplicitContext> {
  declare context: string;
  declare repoContext?: string;
  declare rules: CursorRule2[];
  declare modeSpecificContext?: string;
  declare mcpInstructions: MCPInstructions[];
  constructor(data?: PartialMessage<_ExplicitContext>) {
    super();
    this.context = "";
    this.rules = [];
    this.mcpInstructions = [];
    proto3.util.initPartial(data, this as _ExplicitContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExplicitContext {
    return new _ExplicitContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExplicitContext {
    return new _ExplicitContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExplicitContext {
    return new _ExplicitContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ExplicitContext | PlainMessage<_ExplicitContext> | undefined | null, b2: _ExplicitContext | PlainMessage<_ExplicitContext> | undefined | null): boolean {
    return proto3.util.equals(_ExplicitContext as unknown as MessageType<_ExplicitContext>, a, b2);
  }
})();
export type ExplicitContext = InstanceType<typeof ExplicitContext$Runtime>;
var ExplicitContext: MessageType<ExplicitContext> = ExplicitContext$Runtime as unknown as MessageType<ExplicitContext>;
(ExplicitContext as MutableMessageType<ExplicitContext>).runtime = proto3;
(ExplicitContext as MutableMessageType<ExplicitContext>).typeName = "aiserver.v1.ExplicitContext";
(ExplicitContext as MutableMessageType<ExplicitContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repo_context", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "rules", kind: "message", T: CursorRule2, repeated: true },
  { no: 4, name: "mode_specific_context", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "mcp_instructions", kind: "message", T: MCPInstructions, repeated: true }
]);
var MCPInstructions$Runtime = (() => class _MCPInstructions extends Message<_MCPInstructions> {
  declare serverName: string;
  declare serverIdentifier: string;
  declare instructions: string;
  constructor(data?: PartialMessage<_MCPInstructions>) {
    super();
    this.serverName = "";
    this.serverIdentifier = "";
    this.instructions = "";
    proto3.util.initPartial(data, this as _MCPInstructions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPInstructions {
    return new _MCPInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPInstructions {
    return new _MCPInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPInstructions {
    return new _MCPInstructions().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPInstructions | PlainMessage<_MCPInstructions> | undefined | null, b2: _MCPInstructions | PlainMessage<_MCPInstructions> | undefined | null): boolean {
    return proto3.util.equals(_MCPInstructions as unknown as MessageType<_MCPInstructions>, a, b2);
  }
})();
export type MCPInstructions = InstanceType<typeof MCPInstructions$Runtime>;
var MCPInstructions: MessageType<MCPInstructions> = MCPInstructions$Runtime as unknown as MessageType<MCPInstructions>;
(MCPInstructions as MutableMessageType<MCPInstructions>).runtime = proto3;
(MCPInstructions as MutableMessageType<MCPInstructions>).typeName = "aiserver.v1.MCPInstructions";
(MCPInstructions as MutableMessageType<MCPInstructions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PureMessage$Runtime = (() => class _PureMessage extends Message<_PureMessage> {
  declare messageType: PureMessage_MessageType;
  declare content: string;
  constructor(data?: PartialMessage<_PureMessage>) {
    super();
    this.messageType = PureMessage_MessageType.UNSPECIFIED;
    this.content = "";
    proto3.util.initPartial(data, this as _PureMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PureMessage {
    return new _PureMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PureMessage {
    return new _PureMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PureMessage {
    return new _PureMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _PureMessage | PlainMessage<_PureMessage> | undefined | null, b2: _PureMessage | PlainMessage<_PureMessage> | undefined | null): boolean {
    return proto3.util.equals(_PureMessage as unknown as MessageType<_PureMessage>, a, b2);
  }
})();
export type PureMessage = InstanceType<typeof PureMessage$Runtime>;
var PureMessage: MessageType<PureMessage> = PureMessage$Runtime as unknown as MessageType<PureMessage>;
(PureMessage as MutableMessageType<PureMessage>).runtime = proto3;
(PureMessage as MutableMessageType<PureMessage>).typeName = "aiserver.v1.PureMessage";
(PureMessage as MutableMessageType<PureMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "message_type", kind: "enum", T: proto3.getEnumType(PureMessage_MessageType) },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(PureMessage_MessageType2) {
  PureMessage_MessageType2[PureMessage_MessageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PureMessage_MessageType2[PureMessage_MessageType2["SYSTEM"] = 1] = "SYSTEM";
  PureMessage_MessageType2[PureMessage_MessageType2["USER"] = 2] = "USER";
  PureMessage_MessageType2[PureMessage_MessageType2["ASSISTANT"] = 3] = "ASSISTANT";
})(PureMessage_MessageType! || (PureMessage_MessageType = {} as typeof PureMessage_MessageType));
proto3.util.setEnumType(PureMessage_MessageType, "aiserver.v1.PureMessage.MessageType", [
  { no: 0, name: "MESSAGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "MESSAGE_TYPE_SYSTEM" },
  { no: 2, name: "MESSAGE_TYPE_USER" },
  { no: 3, name: "MESSAGE_TYPE_ASSISTANT" }
]);
var DocumentSymbol$Runtime = (() => class _DocumentSymbol extends Message<_DocumentSymbol> {
  declare name: string;
  declare detail: string;
  declare kind: DocumentSymbol_SymbolKind;
  declare containerName: string;
  declare range?: DocumentSymbol_Range;
  declare selectionRange?: DocumentSymbol_Range;
  declare children: _DocumentSymbol[];
  constructor(data?: PartialMessage<_DocumentSymbol>) {
    super();
    this.name = "";
    this.detail = "";
    this.kind = DocumentSymbol_SymbolKind.UNSPECIFIED;
    this.containerName = "";
    this.children = [];
    proto3.util.initPartial(data, this as _DocumentSymbol);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentSymbol {
    return new _DocumentSymbol().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentSymbol {
    return new _DocumentSymbol().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentSymbol {
    return new _DocumentSymbol().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentSymbol | PlainMessage<_DocumentSymbol> | undefined | null, b2: _DocumentSymbol | PlainMessage<_DocumentSymbol> | undefined | null): boolean {
    return proto3.util.equals(_DocumentSymbol as unknown as MessageType<_DocumentSymbol>, a, b2);
  }
})();
export type DocumentSymbol = InstanceType<typeof DocumentSymbol$Runtime>;
var DocumentSymbol: MessageType<DocumentSymbol> = DocumentSymbol$Runtime as unknown as MessageType<DocumentSymbol>;
(DocumentSymbol as MutableMessageType<DocumentSymbol>).runtime = proto3;
(DocumentSymbol as MutableMessageType<DocumentSymbol>).typeName = "aiserver.v1.DocumentSymbol";
(DocumentSymbol as MutableMessageType<DocumentSymbol>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "detail",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "kind", kind: "enum", T: proto3.getEnumType(DocumentSymbol_SymbolKind) },
  {
    no: 5,
    name: "container_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "range", kind: "message", T: DocumentSymbol_Range },
  { no: 7, name: "selection_range", kind: "message", T: DocumentSymbol_Range },
  { no: 8, name: "children", kind: "message", T: DocumentSymbol, repeated: true }
]);
(function(DocumentSymbol_SymbolKind2) {
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FILE"] = 1] = "FILE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["MODULE"] = 2] = "MODULE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NAMESPACE"] = 3] = "NAMESPACE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PACKAGE"] = 4] = "PACKAGE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CLASS"] = 5] = "CLASS";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["METHOD"] = 6] = "METHOD";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["PROPERTY"] = 7] = "PROPERTY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FIELD"] = 8] = "FIELD";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTRUCTOR"] = 9] = "CONSTRUCTOR";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM"] = 10] = "ENUM";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["INTERFACE"] = 11] = "INTERFACE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["FUNCTION"] = 12] = "FUNCTION";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["VARIABLE"] = 13] = "VARIABLE";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["CONSTANT"] = 14] = "CONSTANT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRING"] = 15] = "STRING";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NUMBER"] = 16] = "NUMBER";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["BOOLEAN"] = 17] = "BOOLEAN";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ARRAY"] = 18] = "ARRAY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OBJECT"] = 19] = "OBJECT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["KEY"] = 20] = "KEY";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["NULL"] = 21] = "NULL";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["ENUM_MEMBER"] = 22] = "ENUM_MEMBER";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["STRUCT"] = 23] = "STRUCT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["EVENT"] = 24] = "EVENT";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["OPERATOR"] = 25] = "OPERATOR";
  DocumentSymbol_SymbolKind2[DocumentSymbol_SymbolKind2["TYPE_PARAMETER"] = 26] = "TYPE_PARAMETER";
})(DocumentSymbol_SymbolKind! || (DocumentSymbol_SymbolKind = {} as typeof DocumentSymbol_SymbolKind));
proto3.util.setEnumType(DocumentSymbol_SymbolKind, "aiserver.v1.DocumentSymbol.SymbolKind", [
  { no: 0, name: "SYMBOL_KIND_UNSPECIFIED" },
  { no: 1, name: "SYMBOL_KIND_FILE" },
  { no: 2, name: "SYMBOL_KIND_MODULE" },
  { no: 3, name: "SYMBOL_KIND_NAMESPACE" },
  { no: 4, name: "SYMBOL_KIND_PACKAGE" },
  { no: 5, name: "SYMBOL_KIND_CLASS" },
  { no: 6, name: "SYMBOL_KIND_METHOD" },
  { no: 7, name: "SYMBOL_KIND_PROPERTY" },
  { no: 8, name: "SYMBOL_KIND_FIELD" },
  { no: 9, name: "SYMBOL_KIND_CONSTRUCTOR" },
  { no: 10, name: "SYMBOL_KIND_ENUM" },
  { no: 11, name: "SYMBOL_KIND_INTERFACE" },
  { no: 12, name: "SYMBOL_KIND_FUNCTION" },
  { no: 13, name: "SYMBOL_KIND_VARIABLE" },
  { no: 14, name: "SYMBOL_KIND_CONSTANT" },
  { no: 15, name: "SYMBOL_KIND_STRING" },
  { no: 16, name: "SYMBOL_KIND_NUMBER" },
  { no: 17, name: "SYMBOL_KIND_BOOLEAN" },
  { no: 18, name: "SYMBOL_KIND_ARRAY" },
  { no: 19, name: "SYMBOL_KIND_OBJECT" },
  { no: 20, name: "SYMBOL_KIND_KEY" },
  { no: 21, name: "SYMBOL_KIND_NULL" },
  { no: 22, name: "SYMBOL_KIND_ENUM_MEMBER" },
  { no: 23, name: "SYMBOL_KIND_STRUCT" },
  { no: 24, name: "SYMBOL_KIND_EVENT" },
  { no: 25, name: "SYMBOL_KIND_OPERATOR" },
  { no: 26, name: "SYMBOL_KIND_TYPE_PARAMETER" }
]);
var DocumentSymbol_Range$Runtime = (() => class _DocumentSymbol_Range extends Message<_DocumentSymbol_Range> {
  declare startLineNumber: number;
  declare startColumn: number;
  declare endLineNumber: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_DocumentSymbol_Range>) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumber = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _DocumentSymbol_Range);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentSymbol_Range {
    return new _DocumentSymbol_Range().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentSymbol_Range {
    return new _DocumentSymbol_Range().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentSymbol_Range {
    return new _DocumentSymbol_Range().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentSymbol_Range | PlainMessage<_DocumentSymbol_Range> | undefined | null, b2: _DocumentSymbol_Range | PlainMessage<_DocumentSymbol_Range> | undefined | null): boolean {
    return proto3.util.equals(_DocumentSymbol_Range as unknown as MessageType<_DocumentSymbol_Range>, a, b2);
  }
})();
export type DocumentSymbol_Range = InstanceType<typeof DocumentSymbol_Range$Runtime>;
var DocumentSymbol_Range: MessageType<DocumentSymbol_Range> = DocumentSymbol_Range$Runtime as unknown as MessageType<DocumentSymbol_Range>;
(DocumentSymbol_Range as MutableMessageType<DocumentSymbol_Range>).runtime = proto3;
(DocumentSymbol_Range as MutableMessageType<DocumentSymbol_Range>).typeName = "aiserver.v1.DocumentSymbol.Range";
(DocumentSymbol_Range as MutableMessageType<DocumentSymbol_Range>).fields = proto3.util.newFieldList(() => [
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
var HoverDetails$Runtime = (() => class _HoverDetails extends Message<_HoverDetails> {
  declare codeDetails: string;
  declare markdownBlocks: string[];
  constructor(data?: PartialMessage<_HoverDetails>) {
    super();
    this.codeDetails = "";
    this.markdownBlocks = [];
    proto3.util.initPartial(data, this as _HoverDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HoverDetails {
    return new _HoverDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HoverDetails {
    return new _HoverDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HoverDetails {
    return new _HoverDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _HoverDetails | PlainMessage<_HoverDetails> | undefined | null, b2: _HoverDetails | PlainMessage<_HoverDetails> | undefined | null): boolean {
    return proto3.util.equals(_HoverDetails as unknown as MessageType<_HoverDetails>, a, b2);
  }
})();
export type HoverDetails = InstanceType<typeof HoverDetails$Runtime>;
var HoverDetails: MessageType<HoverDetails> = HoverDetails$Runtime as unknown as MessageType<HoverDetails>;
(HoverDetails as MutableMessageType<HoverDetails>).runtime = proto3;
(HoverDetails as MutableMessageType<HoverDetails>).typeName = "aiserver.v1.HoverDetails";
(HoverDetails as MutableMessageType<HoverDetails>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "code_details",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "markdown_blocks", kind: "scalar", T: 9, repeated: true }
]);
var UriComponents$Runtime = (() => class _UriComponents extends Message<_UriComponents> {
  declare scheme: string;
  declare authority?: string;
  declare path?: string;
  declare query?: string;
  declare fragment?: string;
  constructor(data?: PartialMessage<_UriComponents>) {
    super();
    this.scheme = "";
    proto3.util.initPartial(data, this as _UriComponents);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UriComponents {
    return new _UriComponents().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UriComponents {
    return new _UriComponents().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UriComponents {
    return new _UriComponents().fromJsonString(jsonString, options);
  }
  static equals(a: _UriComponents | PlainMessage<_UriComponents> | undefined | null, b2: _UriComponents | PlainMessage<_UriComponents> | undefined | null): boolean {
    return proto3.util.equals(_UriComponents as unknown as MessageType<_UriComponents>, a, b2);
  }
})();
export type UriComponents = InstanceType<typeof UriComponents$Runtime>;
var UriComponents: MessageType<UriComponents> = UriComponents$Runtime as unknown as MessageType<UriComponents>;
(UriComponents as MutableMessageType<UriComponents>).runtime = proto3;
(UriComponents as MutableMessageType<UriComponents>).typeName = "aiserver.v1.UriComponents";
(UriComponents as MutableMessageType<UriComponents>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "scheme",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "authority", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "query", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "fragment", kind: "scalar", T: 9, opt: true }
]);
var DocumentSymbolWithText$Runtime = (() => class _DocumentSymbolWithText extends Message<_DocumentSymbolWithText> {
  declare symbol?: DocumentSymbol;
  declare relativeWorkspacePath: string;
  declare textInSymbolRange: string;
  declare uriComponents?: UriComponents;
  constructor(data?: PartialMessage<_DocumentSymbolWithText>) {
    super();
    this.relativeWorkspacePath = "";
    this.textInSymbolRange = "";
    proto3.util.initPartial(data, this as _DocumentSymbolWithText);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentSymbolWithText {
    return new _DocumentSymbolWithText().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentSymbolWithText {
    return new _DocumentSymbolWithText().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentSymbolWithText {
    return new _DocumentSymbolWithText().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentSymbolWithText | PlainMessage<_DocumentSymbolWithText> | undefined | null, b2: _DocumentSymbolWithText | PlainMessage<_DocumentSymbolWithText> | undefined | null): boolean {
    return proto3.util.equals(_DocumentSymbolWithText as unknown as MessageType<_DocumentSymbolWithText>, a, b2);
  }
})();
export type DocumentSymbolWithText = InstanceType<typeof DocumentSymbolWithText$Runtime>;
var DocumentSymbolWithText: MessageType<DocumentSymbolWithText> = DocumentSymbolWithText$Runtime as unknown as MessageType<DocumentSymbolWithText>;
(DocumentSymbolWithText as MutableMessageType<DocumentSymbolWithText>).runtime = proto3;
(DocumentSymbolWithText as MutableMessageType<DocumentSymbolWithText>).typeName = "aiserver.v1.DocumentSymbolWithText";
(DocumentSymbolWithText as MutableMessageType<DocumentSymbolWithText>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "symbol", kind: "message", T: DocumentSymbol },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "text_in_symbol_range",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "uri_components", kind: "message", T: UriComponents }
]);
var ErrorDetails$Runtime = (() => class _ErrorDetails extends Message<_ErrorDetails> {
  declare error: ErrorDetails_Error;
  declare details?: CustomErrorDetails;
  declare isExpected?: boolean;
  constructor(data?: PartialMessage<_ErrorDetails>) {
    super();
    this.error = ErrorDetails_Error.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ErrorDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ErrorDetails {
    return new _ErrorDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ErrorDetails {
    return new _ErrorDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ErrorDetails {
    return new _ErrorDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ErrorDetails | PlainMessage<_ErrorDetails> | undefined | null, b2: _ErrorDetails | PlainMessage<_ErrorDetails> | undefined | null): boolean {
    return proto3.util.equals(_ErrorDetails as unknown as MessageType<_ErrorDetails>, a, b2);
  }
})();
export type ErrorDetails = InstanceType<typeof ErrorDetails$Runtime>;
var ErrorDetails: MessageType<ErrorDetails> = ErrorDetails$Runtime as unknown as MessageType<ErrorDetails>;
(ErrorDetails as MutableMessageType<ErrorDetails>).runtime = proto3;
(ErrorDetails as MutableMessageType<ErrorDetails>).typeName = "aiserver.v1.ErrorDetails";
(ErrorDetails as MutableMessageType<ErrorDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "enum", T: proto3.getEnumType(ErrorDetails_Error) },
  { no: 2, name: "details", kind: "message", T: CustomErrorDetails },
  { no: 3, name: "is_expected", kind: "scalar", T: 8, opt: true }
]);
(function(ErrorDetails_Error2) {
  ErrorDetails_Error2[ErrorDetails_Error2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_API_KEY"] = 1] = "BAD_API_KEY";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_USER_API_KEY"] = 42] = "BAD_USER_API_KEY";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_LOGGED_IN"] = 2] = "NOT_LOGGED_IN";
  ErrorDetails_Error2[ErrorDetails_Error2["INVALID_AUTH_ID"] = 3] = "INVALID_AUTH_ID";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_HIGH_ENOUGH_PERMISSIONS"] = 4] = "NOT_HIGH_ENOUGH_PERMISSIONS";
  ErrorDetails_Error2[ErrorDetails_Error2["AGENT_REQUIRES_LOGIN"] = 18] = "AGENT_REQUIRES_LOGIN";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_MODEL_NAME"] = 5] = "BAD_MODEL_NAME";
  ErrorDetails_Error2[ErrorDetails_Error2["NOT_FOUND"] = 39] = "NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["DEPRECATED"] = 40] = "DEPRECATED";
  ErrorDetails_Error2[ErrorDetails_Error2["USER_NOT_FOUND"] = 6] = "USER_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_RATE_LIMIT_EXCEEDED"] = 7] = "FREE_USER_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_RATE_LIMIT_EXCEEDED"] = 8] = "PRO_USER_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["FREE_USER_USAGE_LIMIT"] = 9] = "FREE_USER_USAGE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_USAGE_LIMIT"] = 10] = "PRO_USER_USAGE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["RESOURCE_EXHAUSTED"] = 41] = "RESOURCE_EXHAUSTED";
  ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_NOT_FOUND"] = 11] = "AUTH_TOKEN_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["AUTH_TOKEN_EXPIRED"] = 12] = "AUTH_TOKEN_EXPIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["OPENAI"] = 13] = "OPENAI";
  ErrorDetails_Error2[ErrorDetails_Error2["OPENAI_RATE_LIMIT_EXCEEDED"] = 14] = "OPENAI_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["MAX_TOKENS"] = 20] = "MAX_TOKENS";
  ErrorDetails_Error2[ErrorDetails_Error2["PRO_USER_ONLY"] = 23] = "PRO_USER_ONLY";
  ErrorDetails_Error2[ErrorDetails_Error2["USER_ABORTED_REQUEST"] = 21] = "USER_ABORTED_REQUEST";
  ErrorDetails_Error2[ErrorDetails_Error2["TIMEOUT"] = 25] = "TIMEOUT";
  ErrorDetails_Error2[ErrorDetails_Error2["GENERIC_RATE_LIMIT_EXCEEDED"] = 22] = "GENERIC_RATE_LIMIT_EXCEEDED";
  ErrorDetails_Error2[ErrorDetails_Error2["GPT_4_VISION_PREVIEW_RATE_LIMIT"] = 28] = "GPT_4_VISION_PREVIEW_RATE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM_MESSAGE"] = 29] = "CUSTOM_MESSAGE";
  ErrorDetails_Error2[ErrorDetails_Error2["OUTDATED_CLIENT"] = 30] = "OUTDATED_CLIENT";
  ErrorDetails_Error2[ErrorDetails_Error2["CLAUDE_IMAGE_TOO_LARGE"] = 31] = "CLAUDE_IMAGE_TOO_LARGE";
  ErrorDetails_Error2[ErrorDetails_Error2["FILE_NOT_FOUND"] = 33] = "FILE_NOT_FOUND";
  ErrorDetails_Error2[ErrorDetails_Error2["API_KEY_RATE_LIMIT"] = 34] = "API_KEY_RATE_LIMIT";
  ErrorDetails_Error2[ErrorDetails_Error2["DEBOUNCED"] = 35] = "DEBOUNCED";
  ErrorDetails_Error2[ErrorDetails_Error2["BAD_REQUEST"] = 36] = "BAD_REQUEST";
  ErrorDetails_Error2[ErrorDetails_Error2["REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED"] = 37] = "REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED";
  ErrorDetails_Error2[ErrorDetails_Error2["UNAUTHORIZED"] = 38] = "UNAUTHORIZED";
  ErrorDetails_Error2[ErrorDetails_Error2["CONVERSATION_TOO_LONG"] = 43] = "CONVERSATION_TOO_LONG";
  ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED"] = 44] = "USAGE_PRICING_REQUIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["USAGE_PRICING_REQUIRED_CHANGEABLE"] = 45] = "USAGE_PRICING_REQUIRED_CHANGEABLE";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_NO_USER_CREDENTIALS"] = 46] = "GITHUB_NO_USER_CREDENTIALS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_USER_NO_ACCESS"] = 47] = "GITHUB_USER_NO_ACCESS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_APP_NO_ACCESS"] = 48] = "GITHUB_APP_NO_ACCESS";
  ErrorDetails_Error2[ErrorDetails_Error2["GITHUB_MULTIPLE_OWNERS"] = 49] = "GITHUB_MULTIPLE_OWNERS";
  ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED"] = 50] = "RATE_LIMITED";
  ErrorDetails_Error2[ErrorDetails_Error2["RATE_LIMITED_CHANGEABLE"] = 51] = "RATE_LIMITED_CHANGEABLE";
  ErrorDetails_Error2[ErrorDetails_Error2["CUSTOM"] = 52] = "CUSTOM";
  ErrorDetails_Error2[ErrorDetails_Error2["HOOKS_BLOCKED"] = 53] = "HOOKS_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["SUSPICIOUS_USAGE_BLOCKED"] = 54] = "SUSPICIOUS_USAGE_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["EXTENSION_HOST_TIMEOUT"] = 55] = "EXTENSION_HOST_TIMEOUT";
  ErrorDetails_Error2[ErrorDetails_Error2["NETWORK_ERROR"] = 56] = "NETWORK_ERROR";
  ErrorDetails_Error2[ErrorDetails_Error2["PROVIDER_ERROR"] = 57] = "PROVIDER_ERROR";
  ErrorDetails_Error2[ErrorDetails_Error2["MODEL_BLOCKED"] = 58] = "MODEL_BLOCKED";
  ErrorDetails_Error2[ErrorDetails_Error2["INTERNAL"] = 59] = "INTERNAL";
  ErrorDetails_Error2[ErrorDetails_Error2["MAX_MODE_REQUIRED"] = 60] = "MAX_MODE_REQUIRED";
  ErrorDetails_Error2[ErrorDetails_Error2["MODEL_NO_LONGER_SUPPORTED"] = 61] = "MODEL_NO_LONGER_SUPPORTED";
  ErrorDetails_Error2[ErrorDetails_Error2["PRICING_WARNING"] = 62] = "PRICING_WARNING";
  ErrorDetails_Error2[ErrorDetails_Error2["SLOW_POOL"] = 63] = "SLOW_POOL";
  ErrorDetails_Error2[ErrorDetails_Error2["UNSUPPORTED_REGION"] = 64] = "UNSUPPORTED_REGION";
  ErrorDetails_Error2[ErrorDetails_Error2["ACCOUNT_CLOSED"] = 65] = "ACCOUNT_CLOSED";
})(ErrorDetails_Error! || (ErrorDetails_Error = {} as typeof ErrorDetails_Error));
proto3.util.setEnumType(ErrorDetails_Error, "aiserver.v1.ErrorDetails.Error", [
  { no: 0, name: "ERROR_UNSPECIFIED" },
  { no: 1, name: "ERROR_BAD_API_KEY" },
  { no: 42, name: "ERROR_BAD_USER_API_KEY" },
  { no: 2, name: "ERROR_NOT_LOGGED_IN" },
  { no: 3, name: "ERROR_INVALID_AUTH_ID" },
  { no: 4, name: "ERROR_NOT_HIGH_ENOUGH_PERMISSIONS" },
  { no: 18, name: "ERROR_AGENT_REQUIRES_LOGIN" },
  { no: 5, name: "ERROR_BAD_MODEL_NAME" },
  { no: 39, name: "ERROR_NOT_FOUND" },
  { no: 40, name: "ERROR_DEPRECATED" },
  { no: 6, name: "ERROR_USER_NOT_FOUND" },
  { no: 7, name: "ERROR_FREE_USER_RATE_LIMIT_EXCEEDED" },
  { no: 8, name: "ERROR_PRO_USER_RATE_LIMIT_EXCEEDED" },
  { no: 9, name: "ERROR_FREE_USER_USAGE_LIMIT" },
  { no: 10, name: "ERROR_PRO_USER_USAGE_LIMIT" },
  { no: 41, name: "ERROR_RESOURCE_EXHAUSTED" },
  { no: 11, name: "ERROR_AUTH_TOKEN_NOT_FOUND" },
  { no: 12, name: "ERROR_AUTH_TOKEN_EXPIRED" },
  { no: 13, name: "ERROR_OPENAI" },
  { no: 14, name: "ERROR_OPENAI_RATE_LIMIT_EXCEEDED" },
  { no: 20, name: "ERROR_MAX_TOKENS" },
  { no: 23, name: "ERROR_PRO_USER_ONLY" },
  { no: 21, name: "ERROR_USER_ABORTED_REQUEST" },
  { no: 25, name: "ERROR_TIMEOUT" },
  { no: 22, name: "ERROR_GENERIC_RATE_LIMIT_EXCEEDED" },
  { no: 28, name: "ERROR_GPT_4_VISION_PREVIEW_RATE_LIMIT" },
  { no: 29, name: "ERROR_CUSTOM_MESSAGE" },
  { no: 30, name: "ERROR_OUTDATED_CLIENT" },
  { no: 31, name: "ERROR_CLAUDE_IMAGE_TOO_LARGE" },
  { no: 33, name: "ERROR_FILE_NOT_FOUND" },
  { no: 34, name: "ERROR_API_KEY_RATE_LIMIT" },
  { no: 35, name: "ERROR_DEBOUNCED" },
  { no: 36, name: "ERROR_BAD_REQUEST" },
  { no: 37, name: "ERROR_REPOSITORY_SERVICE_REPOSITORY_IS_NOT_INITIALIZED" },
  { no: 38, name: "ERROR_UNAUTHORIZED" },
  { no: 43, name: "ERROR_CONVERSATION_TOO_LONG" },
  { no: 44, name: "ERROR_USAGE_PRICING_REQUIRED" },
  { no: 45, name: "ERROR_USAGE_PRICING_REQUIRED_CHANGEABLE" },
  { no: 46, name: "ERROR_GITHUB_NO_USER_CREDENTIALS" },
  { no: 47, name: "ERROR_GITHUB_USER_NO_ACCESS" },
  { no: 48, name: "ERROR_GITHUB_APP_NO_ACCESS" },
  { no: 49, name: "ERROR_GITHUB_MULTIPLE_OWNERS" },
  { no: 50, name: "ERROR_RATE_LIMITED" },
  { no: 51, name: "ERROR_RATE_LIMITED_CHANGEABLE" },
  { no: 52, name: "ERROR_CUSTOM" },
  { no: 53, name: "ERROR_HOOKS_BLOCKED" },
  { no: 54, name: "ERROR_SUSPICIOUS_USAGE_BLOCKED" },
  { no: 55, name: "ERROR_EXTENSION_HOST_TIMEOUT" },
  { no: 56, name: "ERROR_NETWORK_ERROR" },
  { no: 57, name: "ERROR_PROVIDER_ERROR" },
  { no: 58, name: "ERROR_MODEL_BLOCKED" },
  { no: 59, name: "ERROR_INTERNAL" },
  { no: 60, name: "ERROR_MAX_MODE_REQUIRED" },
  { no: 61, name: "ERROR_MODEL_NO_LONGER_SUPPORTED" },
  { no: 62, name: "ERROR_PRICING_WARNING" },
  { no: 63, name: "ERROR_SLOW_POOL" },
  { no: 64, name: "ERROR_UNSUPPORTED_REGION" },
  { no: 65, name: "ERROR_ACCOUNT_CLOSED" }
]);
var CustomErrorDetails$Runtime = (() => class _CustomErrorDetails extends Message<_CustomErrorDetails> {
  declare title: string;
  declare detail: string;
  declare allowCommandLinksPotentiallyUnsafePleaseOnlyUseForHandwrittenTrustedMarkdown?: boolean;
  declare isRetryable?: boolean;
  declare showRequestId?: boolean;
  declare shouldShowImmediateError?: boolean;
  declare buttons: ErrorButton[];
  declare additionalInfo: { [key: string]: string };
  declare planChoices: PlanChoice[];
  declare analyticsMetadata?: ErrorAnalyticsMetadata;
  constructor(data?: PartialMessage<_CustomErrorDetails>) {
    super();
    this.title = "";
    this.detail = "";
    this.buttons = [];
    this.additionalInfo = {};
    this.planChoices = [];
    proto3.util.initPartial(data, this as _CustomErrorDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomErrorDetails {
    return new _CustomErrorDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomErrorDetails {
    return new _CustomErrorDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomErrorDetails {
    return new _CustomErrorDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomErrorDetails | PlainMessage<_CustomErrorDetails> | undefined | null, b2: _CustomErrorDetails | PlainMessage<_CustomErrorDetails> | undefined | null): boolean {
    return proto3.util.equals(_CustomErrorDetails as unknown as MessageType<_CustomErrorDetails>, a, b2);
  }
})();
export type CustomErrorDetails = InstanceType<typeof CustomErrorDetails$Runtime>;
var CustomErrorDetails: MessageType<CustomErrorDetails> = CustomErrorDetails$Runtime as unknown as MessageType<CustomErrorDetails>;
(CustomErrorDetails as MutableMessageType<CustomErrorDetails>).runtime = proto3;
(CustomErrorDetails as MutableMessageType<CustomErrorDetails>).typeName = "aiserver.v1.CustomErrorDetails";
(CustomErrorDetails as MutableMessageType<CustomErrorDetails>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "detail",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "allow_command_links_potentially_unsafe_please_only_use_for_handwritten_trusted_markdown", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_retryable", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "show_request_id", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "should_show_immediate_error", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "buttons", kind: "message", T: ErrorButton, repeated: true },
  { no: 7, name: "additional_info", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 9, name: "plan_choices", kind: "message", T: PlanChoice, repeated: true },
  { no: 10, name: "analytics_metadata", kind: "message", T: ErrorAnalyticsMetadata, opt: true }
]);
var ErrorAnalyticsMetadata$Runtime = (() => class _ErrorAnalyticsMetadata extends Message<_ErrorAnalyticsMetadata> {
  declare actionRequired?: string;
  constructor(data?: PartialMessage<_ErrorAnalyticsMetadata>) {
    super();
    proto3.util.initPartial(data, this as _ErrorAnalyticsMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ErrorAnalyticsMetadata {
    return new _ErrorAnalyticsMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ErrorAnalyticsMetadata {
    return new _ErrorAnalyticsMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ErrorAnalyticsMetadata {
    return new _ErrorAnalyticsMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _ErrorAnalyticsMetadata | PlainMessage<_ErrorAnalyticsMetadata> | undefined | null, b2: _ErrorAnalyticsMetadata | PlainMessage<_ErrorAnalyticsMetadata> | undefined | null): boolean {
    return proto3.util.equals(_ErrorAnalyticsMetadata as unknown as MessageType<_ErrorAnalyticsMetadata>, a, b2);
  }
})();
export type ErrorAnalyticsMetadata = InstanceType<typeof ErrorAnalyticsMetadata$Runtime>;
var ErrorAnalyticsMetadata: MessageType<ErrorAnalyticsMetadata> = ErrorAnalyticsMetadata$Runtime as unknown as MessageType<ErrorAnalyticsMetadata>;
(ErrorAnalyticsMetadata as MutableMessageType<ErrorAnalyticsMetadata>).runtime = proto3;
(ErrorAnalyticsMetadata as MutableMessageType<ErrorAnalyticsMetadata>).typeName = "aiserver.v1.ErrorAnalyticsMetadata";
(ErrorAnalyticsMetadata as MutableMessageType<ErrorAnalyticsMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "action_required", kind: "scalar", T: 9, opt: true }
]);
var PlanChoice$Runtime = (() => class _PlanChoice extends Message<_PlanChoice> {
  declare label: string;
  declare sublabel?: string;
  declare description?: string;
  declare value: string;
  constructor(data?: PartialMessage<_PlanChoice>) {
    super();
    this.label = "";
    this.value = "";
    proto3.util.initPartial(data, this as _PlanChoice);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PlanChoice {
    return new _PlanChoice().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PlanChoice {
    return new _PlanChoice().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PlanChoice {
    return new _PlanChoice().fromJsonString(jsonString, options);
  }
  static equals(a: _PlanChoice | PlainMessage<_PlanChoice> | undefined | null, b2: _PlanChoice | PlainMessage<_PlanChoice> | undefined | null): boolean {
    return proto3.util.equals(_PlanChoice as unknown as MessageType<_PlanChoice>, a, b2);
  }
})();
export type PlanChoice = InstanceType<typeof PlanChoice$Runtime>;
var PlanChoice: MessageType<PlanChoice> = PlanChoice$Runtime as unknown as MessageType<PlanChoice>;
(PlanChoice as MutableMessageType<PlanChoice>).runtime = proto3;
(PlanChoice as MutableMessageType<PlanChoice>).typeName = "aiserver.v1.PlanChoice";
(PlanChoice as MutableMessageType<PlanChoice>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "sublabel", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ErrorButton$Runtime = (() => class _ErrorButton extends Message<_ErrorButton> {
  declare label: string;
  declare action: { case: "upgrade"; value: UpgradeAction } | { case: "switchModel"; value: SwitchModelAction } | { case: "configureSpendLimit"; value: ConfigureSpendLimitAction } | { case: "url"; value: UrlAction } | { case: "upgradeChoice"; value: UpgradeChoice } | { case: "dashboardAction"; value: DashboardAction } | { case: "reloadWindow"; value: ReloadWindowAction } | { case: "clientAction"; value: ClientAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ErrorButton>) {
    super();
    this.label = "";
    this.action = { case: void 0 };
    proto3.util.initPartial(data, this as _ErrorButton);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ErrorButton {
    return new _ErrorButton().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ErrorButton {
    return new _ErrorButton().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ErrorButton {
    return new _ErrorButton().fromJsonString(jsonString, options);
  }
  static equals(a: _ErrorButton | PlainMessage<_ErrorButton> | undefined | null, b2: _ErrorButton | PlainMessage<_ErrorButton> | undefined | null): boolean {
    return proto3.util.equals(_ErrorButton as unknown as MessageType<_ErrorButton>, a, b2);
  }
})();
export type ErrorButton = InstanceType<typeof ErrorButton$Runtime>;
var ErrorButton: MessageType<ErrorButton> = ErrorButton$Runtime as unknown as MessageType<ErrorButton>;
(ErrorButton as MutableMessageType<ErrorButton>).runtime = proto3;
(ErrorButton as MutableMessageType<ErrorButton>).typeName = "aiserver.v1.ErrorButton";
(ErrorButton as MutableMessageType<ErrorButton>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "upgrade", kind: "message", T: UpgradeAction, oneof: "action" },
  { no: 3, name: "switch_model", kind: "message", T: SwitchModelAction, oneof: "action" },
  { no: 4, name: "configure_spend_limit", kind: "message", T: ConfigureSpendLimitAction, oneof: "action" },
  { no: 5, name: "url", kind: "message", T: UrlAction, oneof: "action" },
  { no: 6, name: "upgrade_choice", kind: "message", T: UpgradeChoice, oneof: "action" },
  { no: 7, name: "dashboard_action", kind: "message", T: DashboardAction, oneof: "action" },
  { no: 8, name: "reload_window", kind: "message", T: ReloadWindowAction, oneof: "action" },
  { no: 9, name: "client_action", kind: "message", T: ClientAction, oneof: "action" }
]);
var ClientAction$Runtime = (() => class _ClientAction extends Message<_ClientAction> {
  declare commandId: string;
  declare args: { [key: string]: string };
  constructor(data?: PartialMessage<_ClientAction>) {
    super();
    this.commandId = "";
    this.args = {};
    proto3.util.initPartial(data, this as _ClientAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClientAction {
    return new _ClientAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClientAction {
    return new _ClientAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClientAction {
    return new _ClientAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ClientAction | PlainMessage<_ClientAction> | undefined | null, b2: _ClientAction | PlainMessage<_ClientAction> | undefined | null): boolean {
    return proto3.util.equals(_ClientAction as unknown as MessageType<_ClientAction>, a, b2);
  }
})();
export type ClientAction = InstanceType<typeof ClientAction$Runtime>;
var ClientAction: MessageType<ClientAction> = ClientAction$Runtime as unknown as MessageType<ClientAction>;
(ClientAction as MutableMessageType<ClientAction>).runtime = proto3;
(ClientAction as MutableMessageType<ClientAction>).typeName = "aiserver.v1.ClientAction";
(ClientAction as MutableMessageType<ClientAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ReloadWindowAction$Runtime = (() => class _ReloadWindowAction extends Message<_ReloadWindowAction> {
  constructor(data?: PartialMessage<_ReloadWindowAction>) {
    super();
    proto3.util.initPartial(data, this as _ReloadWindowAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReloadWindowAction {
    return new _ReloadWindowAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReloadWindowAction {
    return new _ReloadWindowAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReloadWindowAction {
    return new _ReloadWindowAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ReloadWindowAction | PlainMessage<_ReloadWindowAction> | undefined | null, b2: _ReloadWindowAction | PlainMessage<_ReloadWindowAction> | undefined | null): boolean {
    return proto3.util.equals(_ReloadWindowAction as unknown as MessageType<_ReloadWindowAction>, a, b2);
  }
})();
export type ReloadWindowAction = InstanceType<typeof ReloadWindowAction$Runtime>;
var ReloadWindowAction: MessageType<ReloadWindowAction> = ReloadWindowAction$Runtime as unknown as MessageType<ReloadWindowAction>;
(ReloadWindowAction as MutableMessageType<ReloadWindowAction>).runtime = proto3;
(ReloadWindowAction as MutableMessageType<ReloadWindowAction>).typeName = "aiserver.v1.ReloadWindowAction";
(ReloadWindowAction as MutableMessageType<ReloadWindowAction>).fields = proto3.util.newFieldList(() => []);
var DashboardAction$Runtime = (() => class _DashboardAction extends Message<_DashboardAction> {
  declare action: string;
  declare args: { [key: string]: string };
  declare successMessage?: string;
  constructor(data?: PartialMessage<_DashboardAction>) {
    super();
    this.action = "";
    this.args = {};
    proto3.util.initPartial(data, this as _DashboardAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DashboardAction {
    return new _DashboardAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DashboardAction {
    return new _DashboardAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DashboardAction {
    return new _DashboardAction().fromJsonString(jsonString, options);
  }
  static equals(a: _DashboardAction | PlainMessage<_DashboardAction> | undefined | null, b2: _DashboardAction | PlainMessage<_DashboardAction> | undefined | null): boolean {
    return proto3.util.equals(_DashboardAction as unknown as MessageType<_DashboardAction>, a, b2);
  }
})();
export type DashboardAction = InstanceType<typeof DashboardAction$Runtime>;
var DashboardAction: MessageType<DashboardAction> = DashboardAction$Runtime as unknown as MessageType<DashboardAction>;
(DashboardAction as MutableMessageType<DashboardAction>).runtime = proto3;
(DashboardAction as MutableMessageType<DashboardAction>).typeName = "aiserver.v1.DashboardAction";
(DashboardAction as MutableMessageType<DashboardAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 3, name: "success_message", kind: "scalar", T: 9, opt: true }
]);
var UpgradeChoice$Runtime = (() => class _UpgradeChoice extends Message<_UpgradeChoice> {
  constructor(data?: PartialMessage<_UpgradeChoice>) {
    super();
    proto3.util.initPartial(data, this as _UpgradeChoice);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpgradeChoice {
    return new _UpgradeChoice().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpgradeChoice {
    return new _UpgradeChoice().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpgradeChoice {
    return new _UpgradeChoice().fromJsonString(jsonString, options);
  }
  static equals(a: _UpgradeChoice | PlainMessage<_UpgradeChoice> | undefined | null, b2: _UpgradeChoice | PlainMessage<_UpgradeChoice> | undefined | null): boolean {
    return proto3.util.equals(_UpgradeChoice as unknown as MessageType<_UpgradeChoice>, a, b2);
  }
})();
export type UpgradeChoice = InstanceType<typeof UpgradeChoice$Runtime>;
var UpgradeChoice: MessageType<UpgradeChoice> = UpgradeChoice$Runtime as unknown as MessageType<UpgradeChoice>;
(UpgradeChoice as MutableMessageType<UpgradeChoice>).runtime = proto3;
(UpgradeChoice as MutableMessageType<UpgradeChoice>).typeName = "aiserver.v1.UpgradeChoice";
(UpgradeChoice as MutableMessageType<UpgradeChoice>).fields = proto3.util.newFieldList(() => []);
var UpgradeAction$Runtime = (() => class _UpgradeAction extends Message<_UpgradeAction> {
  declare membershipToUpgradeTo: string;
  declare tryImmediateUpgrade?: boolean;
  declare allowTrial?: boolean;
  constructor(data?: PartialMessage<_UpgradeAction>) {
    super();
    this.membershipToUpgradeTo = "";
    proto3.util.initPartial(data, this as _UpgradeAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpgradeAction {
    return new _UpgradeAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpgradeAction {
    return new _UpgradeAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpgradeAction {
    return new _UpgradeAction().fromJsonString(jsonString, options);
  }
  static equals(a: _UpgradeAction | PlainMessage<_UpgradeAction> | undefined | null, b2: _UpgradeAction | PlainMessage<_UpgradeAction> | undefined | null): boolean {
    return proto3.util.equals(_UpgradeAction as unknown as MessageType<_UpgradeAction>, a, b2);
  }
})();
export type UpgradeAction = InstanceType<typeof UpgradeAction$Runtime>;
var UpgradeAction: MessageType<UpgradeAction> = UpgradeAction$Runtime as unknown as MessageType<UpgradeAction>;
(UpgradeAction as MutableMessageType<UpgradeAction>).runtime = proto3;
(UpgradeAction as MutableMessageType<UpgradeAction>).typeName = "aiserver.v1.UpgradeAction";
(UpgradeAction as MutableMessageType<UpgradeAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "membership_to_upgrade_to",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "try_immediate_upgrade", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "allow_trial", kind: "scalar", T: 8, opt: true }
]);
var SwitchModelAction$Runtime = (() => class _SwitchModelAction extends Message<_SwitchModelAction> {
  declare suggestedModel?: string;
  declare parameters: SwitchModelAction_ModelParameterValue[];
  declare maxMode?: boolean;
  constructor(data?: PartialMessage<_SwitchModelAction>) {
    super();
    this.parameters = [];
    proto3.util.initPartial(data, this as _SwitchModelAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModelAction {
    return new _SwitchModelAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModelAction {
    return new _SwitchModelAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModelAction {
    return new _SwitchModelAction().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModelAction | PlainMessage<_SwitchModelAction> | undefined | null, b2: _SwitchModelAction | PlainMessage<_SwitchModelAction> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModelAction as unknown as MessageType<_SwitchModelAction>, a, b2);
  }
})();
export type SwitchModelAction = InstanceType<typeof SwitchModelAction$Runtime>;
var SwitchModelAction: MessageType<SwitchModelAction> = SwitchModelAction$Runtime as unknown as MessageType<SwitchModelAction>;
(SwitchModelAction as MutableMessageType<SwitchModelAction>).runtime = proto3;
(SwitchModelAction as MutableMessageType<SwitchModelAction>).typeName = "aiserver.v1.SwitchModelAction";
(SwitchModelAction as MutableMessageType<SwitchModelAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggested_model", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "parameters", kind: "message", T: SwitchModelAction_ModelParameterValue, repeated: true },
  { no: 3, name: "max_mode", kind: "scalar", T: 8, opt: true }
]);
var SwitchModelAction_ModelParameterValue$Runtime = (() => class _SwitchModelAction_ModelParameterValue extends Message<_SwitchModelAction_ModelParameterValue> {
  declare id: string;
  declare value: string;
  constructor(data?: PartialMessage<_SwitchModelAction_ModelParameterValue>) {
    super();
    this.id = "";
    this.value = "";
    proto3.util.initPartial(data, this as _SwitchModelAction_ModelParameterValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModelAction_ModelParameterValue {
    return new _SwitchModelAction_ModelParameterValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModelAction_ModelParameterValue {
    return new _SwitchModelAction_ModelParameterValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModelAction_ModelParameterValue {
    return new _SwitchModelAction_ModelParameterValue().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModelAction_ModelParameterValue | PlainMessage<_SwitchModelAction_ModelParameterValue> | undefined | null, b2: _SwitchModelAction_ModelParameterValue | PlainMessage<_SwitchModelAction_ModelParameterValue> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModelAction_ModelParameterValue as unknown as MessageType<_SwitchModelAction_ModelParameterValue>, a, b2);
  }
})();
export type SwitchModelAction_ModelParameterValue = InstanceType<typeof SwitchModelAction_ModelParameterValue$Runtime>;
var SwitchModelAction_ModelParameterValue: MessageType<SwitchModelAction_ModelParameterValue> = SwitchModelAction_ModelParameterValue$Runtime as unknown as MessageType<SwitchModelAction_ModelParameterValue>;
(SwitchModelAction_ModelParameterValue as MutableMessageType<SwitchModelAction_ModelParameterValue>).runtime = proto3;
(SwitchModelAction_ModelParameterValue as MutableMessageType<SwitchModelAction_ModelParameterValue>).typeName = "aiserver.v1.SwitchModelAction.ModelParameterValue";
(SwitchModelAction_ModelParameterValue as MutableMessageType<SwitchModelAction_ModelParameterValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConfigureSpendLimitAction$Runtime = (() => class _ConfigureSpendLimitAction extends Message<_ConfigureSpendLimitAction> {
  declare confirmLabel: string;
  constructor(data?: PartialMessage<_ConfigureSpendLimitAction>) {
    super();
    this.confirmLabel = "";
    proto3.util.initPartial(data, this as _ConfigureSpendLimitAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConfigureSpendLimitAction {
    return new _ConfigureSpendLimitAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConfigureSpendLimitAction {
    return new _ConfigureSpendLimitAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConfigureSpendLimitAction {
    return new _ConfigureSpendLimitAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ConfigureSpendLimitAction | PlainMessage<_ConfigureSpendLimitAction> | undefined | null, b2: _ConfigureSpendLimitAction | PlainMessage<_ConfigureSpendLimitAction> | undefined | null): boolean {
    return proto3.util.equals(_ConfigureSpendLimitAction as unknown as MessageType<_ConfigureSpendLimitAction>, a, b2);
  }
})();
export type ConfigureSpendLimitAction = InstanceType<typeof ConfigureSpendLimitAction$Runtime>;
var ConfigureSpendLimitAction: MessageType<ConfigureSpendLimitAction> = ConfigureSpendLimitAction$Runtime as unknown as MessageType<ConfigureSpendLimitAction>;
(ConfigureSpendLimitAction as MutableMessageType<ConfigureSpendLimitAction>).runtime = proto3;
(ConfigureSpendLimitAction as MutableMessageType<ConfigureSpendLimitAction>).typeName = "aiserver.v1.ConfigureSpendLimitAction";
(ConfigureSpendLimitAction as MutableMessageType<ConfigureSpendLimitAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "confirm_label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UrlAction$Runtime = (() => class _UrlAction extends Message<_UrlAction> {
  declare url: string;
  constructor(data?: PartialMessage<_UrlAction>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _UrlAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UrlAction {
    return new _UrlAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UrlAction {
    return new _UrlAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UrlAction {
    return new _UrlAction().fromJsonString(jsonString, options);
  }
  static equals(a: _UrlAction | PlainMessage<_UrlAction> | undefined | null, b2: _UrlAction | PlainMessage<_UrlAction> | undefined | null): boolean {
    return proto3.util.equals(_UrlAction as unknown as MessageType<_UrlAction>, a, b2);
  }
})();
export type UrlAction = InstanceType<typeof UrlAction$Runtime>;
var UrlAction: MessageType<UrlAction> = UrlAction$Runtime as unknown as MessageType<UrlAction>;
(UrlAction as MutableMessageType<UrlAction>).runtime = proto3;
(UrlAction as MutableMessageType<UrlAction>).typeName = "aiserver.v1.UrlAction";
(UrlAction as MutableMessageType<UrlAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ImageProto2$Runtime = (() => class _ImageProto extends Message<_ImageProto> {
  declare data: Uint8Array;
  declare dimension?: ImageProto_Dimension2;
  declare uuid: string;
  declare taskSpecificDescription?: string;
  constructor(data?: PartialMessage<_ImageProto>) {
    super();
    this.data = new Uint8Array(0);
    this.uuid = "";
    proto3.util.initPartial(data, this as _ImageProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageProto {
    return new _ImageProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageProto {
    return new _ImageProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageProto {
    return new _ImageProto().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageProto | PlainMessage<_ImageProto> | undefined | null, b2: _ImageProto | PlainMessage<_ImageProto> | undefined | null): boolean {
    return proto3.util.equals(_ImageProto as unknown as MessageType<_ImageProto>, a, b2);
  }
})();
export type ImageProto2 = InstanceType<typeof ImageProto2$Runtime>;
var ImageProto2: MessageType<ImageProto2> = ImageProto2$Runtime as unknown as MessageType<ImageProto2>;
(ImageProto2 as MutableMessageType<ImageProto2>).runtime = proto3;
(ImageProto2 as MutableMessageType<ImageProto2>).typeName = "aiserver.v1.ImageProto";
(ImageProto2 as MutableMessageType<ImageProto2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "dimension", kind: "message", T: ImageProto_Dimension2 },
  {
    no: 3,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "task_specific_description", kind: "scalar", T: 9, opt: true }
]);
var ImageProto_Dimension2$Runtime = (() => class _ImageProto_Dimension extends Message<_ImageProto_Dimension> {
  declare width: number;
  declare height: number;
  constructor(data?: PartialMessage<_ImageProto_Dimension>) {
    super();
    this.width = 0;
    this.height = 0;
    proto3.util.initPartial(data, this as _ImageProto_Dimension);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageProto_Dimension {
    return new _ImageProto_Dimension().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageProto_Dimension | PlainMessage<_ImageProto_Dimension> | undefined | null, b2: _ImageProto_Dimension | PlainMessage<_ImageProto_Dimension> | undefined | null): boolean {
    return proto3.util.equals(_ImageProto_Dimension as unknown as MessageType<_ImageProto_Dimension>, a, b2);
  }
})();
export type ImageProto_Dimension2 = InstanceType<typeof ImageProto_Dimension2$Runtime>;
var ImageProto_Dimension2: MessageType<ImageProto_Dimension2> = ImageProto_Dimension2$Runtime as unknown as MessageType<ImageProto_Dimension2>;
(ImageProto_Dimension2 as MutableMessageType<ImageProto_Dimension2>).runtime = proto3;
(ImageProto_Dimension2 as MutableMessageType<ImageProto_Dimension2>).typeName = "aiserver.v1.ImageProto.Dimension";
(ImageProto_Dimension2 as MutableMessageType<ImageProto_Dimension2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "width",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "height",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ChatQuote$Runtime = (() => class _ChatQuote extends Message<_ChatQuote> {
  declare markdown: string;
  declare bubbleId: string;
  declare sectionIndex: number;
  constructor(data?: PartialMessage<_ChatQuote>) {
    super();
    this.markdown = "";
    this.bubbleId = "";
    this.sectionIndex = 0;
    proto3.util.initPartial(data, this as _ChatQuote);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatQuote {
    return new _ChatQuote().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatQuote {
    return new _ChatQuote().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatQuote {
    return new _ChatQuote().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatQuote | PlainMessage<_ChatQuote> | undefined | null, b2: _ChatQuote | PlainMessage<_ChatQuote> | undefined | null): boolean {
    return proto3.util.equals(_ChatQuote as unknown as MessageType<_ChatQuote>, a, b2);
  }
})();
export type ChatQuote = InstanceType<typeof ChatQuote$Runtime>;
var ChatQuote: MessageType<ChatQuote> = ChatQuote$Runtime as unknown as MessageType<ChatQuote>;
(ChatQuote as MutableMessageType<ChatQuote>).runtime = proto3;
(ChatQuote as MutableMessageType<ChatQuote>).typeName = "aiserver.v1.ChatQuote";
(ChatQuote as MutableMessageType<ChatQuote>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "markdown",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "section_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ChatExternalLink$Runtime = (() => class _ChatExternalLink extends Message<_ChatExternalLink> {
  declare url: string;
  declare uuid: string;
  declare pdfContent?: string;
  declare isPdf?: boolean;
  declare filename?: string;
  constructor(data?: PartialMessage<_ChatExternalLink>) {
    super();
    this.url = "";
    this.uuid = "";
    proto3.util.initPartial(data, this as _ChatExternalLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ChatExternalLink {
    return new _ChatExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ChatExternalLink {
    return new _ChatExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ChatExternalLink {
    return new _ChatExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a: _ChatExternalLink | PlainMessage<_ChatExternalLink> | undefined | null, b2: _ChatExternalLink | PlainMessage<_ChatExternalLink> | undefined | null): boolean {
    return proto3.util.equals(_ChatExternalLink as unknown as MessageType<_ChatExternalLink>, a, b2);
  }
})();
export type ChatExternalLink = InstanceType<typeof ChatExternalLink$Runtime>;
var ChatExternalLink: MessageType<ChatExternalLink> = ChatExternalLink$Runtime as unknown as MessageType<ChatExternalLink>;
(ChatExternalLink as MutableMessageType<ChatExternalLink>).runtime = proto3;
(ChatExternalLink as MutableMessageType<ChatExternalLink>).typeName = "aiserver.v1.ChatExternalLink";
(ChatExternalLink as MutableMessageType<ChatExternalLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }
]);
var ComposerExternalLink$Runtime = (() => class _ComposerExternalLink extends Message<_ComposerExternalLink> {
  declare url: string;
  declare uuid: string;
  declare pdfContent?: string;
  declare isPdf?: boolean;
  declare filename?: string;
  constructor(data?: PartialMessage<_ComposerExternalLink>) {
    super();
    this.url = "";
    this.uuid = "";
    proto3.util.initPartial(data, this as _ComposerExternalLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComposerExternalLink {
    return new _ComposerExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComposerExternalLink {
    return new _ComposerExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComposerExternalLink {
    return new _ComposerExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a: _ComposerExternalLink | PlainMessage<_ComposerExternalLink> | undefined | null, b2: _ComposerExternalLink | PlainMessage<_ComposerExternalLink> | undefined | null): boolean {
    return proto3.util.equals(_ComposerExternalLink as unknown as MessageType<_ComposerExternalLink>, a, b2);
  }
})();
export type ComposerExternalLink = InstanceType<typeof ComposerExternalLink$Runtime>;
var ComposerExternalLink: MessageType<ComposerExternalLink> = ComposerExternalLink$Runtime as unknown as MessageType<ComposerExternalLink>;
(ComposerExternalLink as MutableMessageType<ComposerExternalLink>).runtime = proto3;
(ComposerExternalLink as MutableMessageType<ComposerExternalLink>).typeName = "aiserver.v1.ComposerExternalLink";
(ComposerExternalLink as MutableMessageType<ComposerExternalLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "filename", kind: "scalar", T: 9, opt: true }
]);
var CmdKExternalLink$Runtime = (() => class _CmdKExternalLink extends Message<_CmdKExternalLink> {
  declare url: string;
  declare uuid: string;
  constructor(data?: PartialMessage<_CmdKExternalLink>) {
    super();
    this.url = "";
    this.uuid = "";
    proto3.util.initPartial(data, this as _CmdKExternalLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CmdKExternalLink {
    return new _CmdKExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CmdKExternalLink {
    return new _CmdKExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CmdKExternalLink {
    return new _CmdKExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a: _CmdKExternalLink | PlainMessage<_CmdKExternalLink> | undefined | null, b2: _CmdKExternalLink | PlainMessage<_CmdKExternalLink> | undefined | null): boolean {
    return proto3.util.equals(_CmdKExternalLink as unknown as MessageType<_CmdKExternalLink>, a, b2);
  }
})();
export type CmdKExternalLink = InstanceType<typeof CmdKExternalLink$Runtime>;
var CmdKExternalLink: MessageType<CmdKExternalLink> = CmdKExternalLink$Runtime as unknown as MessageType<CmdKExternalLink>;
(CmdKExternalLink as MutableMessageType<CmdKExternalLink>).runtime = proto3;
(CmdKExternalLink as MutableMessageType<CmdKExternalLink>).typeName = "aiserver.v1.CmdKExternalLink";
(CmdKExternalLink as MutableMessageType<CmdKExternalLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CommitNote$Runtime = (() => class _CommitNote extends Message<_CommitNote> {
  declare note: string;
  declare commitHash: string;
  constructor(data?: PartialMessage<_CommitNote>) {
    super();
    this.note = "";
    this.commitHash = "";
    proto3.util.initPartial(data, this as _CommitNote);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommitNote {
    return new _CommitNote().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommitNote {
    return new _CommitNote().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommitNote {
    return new _CommitNote().fromJsonString(jsonString, options);
  }
  static equals(a: _CommitNote | PlainMessage<_CommitNote> | undefined | null, b2: _CommitNote | PlainMessage<_CommitNote> | undefined | null): boolean {
    return proto3.util.equals(_CommitNote as unknown as MessageType<_CommitNote>, a, b2);
  }
})();
export type CommitNote = InstanceType<typeof CommitNote$Runtime>;
var CommitNote: MessageType<CommitNote> = CommitNote$Runtime as unknown as MessageType<CommitNote>;
(CommitNote as MutableMessageType<CommitNote>).runtime = proto3;
(CommitNote as MutableMessageType<CommitNote>).typeName = "aiserver.v1.CommitNote";
(CommitNote as MutableMessageType<CommitNote>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CommitNoteWithEmbeddings$Runtime = (() => class _CommitNoteWithEmbeddings extends Message<_CommitNoteWithEmbeddings> {
  declare note: string;
  declare commitHash: string;
  declare embeddings: number[];
  constructor(data?: PartialMessage<_CommitNoteWithEmbeddings>) {
    super();
    this.note = "";
    this.commitHash = "";
    this.embeddings = [];
    proto3.util.initPartial(data, this as _CommitNoteWithEmbeddings);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommitNoteWithEmbeddings {
    return new _CommitNoteWithEmbeddings().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommitNoteWithEmbeddings {
    return new _CommitNoteWithEmbeddings().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommitNoteWithEmbeddings {
    return new _CommitNoteWithEmbeddings().fromJsonString(jsonString, options);
  }
  static equals(a: _CommitNoteWithEmbeddings | PlainMessage<_CommitNoteWithEmbeddings> | undefined | null, b2: _CommitNoteWithEmbeddings | PlainMessage<_CommitNoteWithEmbeddings> | undefined | null): boolean {
    return proto3.util.equals(_CommitNoteWithEmbeddings as unknown as MessageType<_CommitNoteWithEmbeddings>, a, b2);
  }
})();
export type CommitNoteWithEmbeddings = InstanceType<typeof CommitNoteWithEmbeddings$Runtime>;
var CommitNoteWithEmbeddings: MessageType<CommitNoteWithEmbeddings> = CommitNoteWithEmbeddings$Runtime as unknown as MessageType<CommitNoteWithEmbeddings>;
(CommitNoteWithEmbeddings as MutableMessageType<CommitNoteWithEmbeddings>).runtime = proto3;
(CommitNoteWithEmbeddings as MutableMessageType<CommitNoteWithEmbeddings>).typeName = "aiserver.v1.CommitNoteWithEmbeddings";
(CommitNoteWithEmbeddings as MutableMessageType<CommitNoteWithEmbeddings>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "embeddings", kind: "scalar", T: 1, repeated: true }
]);
var CommitDiffString$Runtime = (() => class _CommitDiffString extends Message<_CommitDiffString> {
  declare diff: string;
  constructor(data?: PartialMessage<_CommitDiffString>) {
    super();
    this.diff = "";
    proto3.util.initPartial(data, this as _CommitDiffString);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommitDiffString {
    return new _CommitDiffString().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommitDiffString {
    return new _CommitDiffString().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommitDiffString {
    return new _CommitDiffString().fromJsonString(jsonString, options);
  }
  static equals(a: _CommitDiffString | PlainMessage<_CommitDiffString> | undefined | null, b2: _CommitDiffString | PlainMessage<_CommitDiffString> | undefined | null): boolean {
    return proto3.util.equals(_CommitDiffString as unknown as MessageType<_CommitDiffString>, a, b2);
  }
})();
export type CommitDiffString = InstanceType<typeof CommitDiffString$Runtime>;
var CommitDiffString: MessageType<CommitDiffString> = CommitDiffString$Runtime as unknown as MessageType<CommitDiffString>;
(CommitDiffString as MutableMessageType<CommitDiffString>).runtime = proto3;
(CommitDiffString as MutableMessageType<CommitDiffString>).typeName = "aiserver.v1.CommitDiffString";
(CommitDiffString as MutableMessageType<CommitDiffString>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FullCommitNotes$Runtime = (() => class _FullCommitNotes extends Message<_FullCommitNotes> {
  declare notes: CommitNote[];
  declare commitHash: string;
  declare repoUrl: string;
  declare filesChangedRelativePath: string;
  constructor(data?: PartialMessage<_FullCommitNotes>) {
    super();
    this.notes = [];
    this.commitHash = "";
    this.repoUrl = "";
    this.filesChangedRelativePath = "";
    proto3.util.initPartial(data, this as _FullCommitNotes);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FullCommitNotes {
    return new _FullCommitNotes().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FullCommitNotes {
    return new _FullCommitNotes().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FullCommitNotes {
    return new _FullCommitNotes().fromJsonString(jsonString, options);
  }
  static equals(a: _FullCommitNotes | PlainMessage<_FullCommitNotes> | undefined | null, b2: _FullCommitNotes | PlainMessage<_FullCommitNotes> | undefined | null): boolean {
    return proto3.util.equals(_FullCommitNotes as unknown as MessageType<_FullCommitNotes>, a, b2);
  }
})();
export type FullCommitNotes = InstanceType<typeof FullCommitNotes$Runtime>;
var FullCommitNotes: MessageType<FullCommitNotes> = FullCommitNotes$Runtime as unknown as MessageType<FullCommitNotes>;
(FullCommitNotes as MutableMessageType<FullCommitNotes>).runtime = proto3;
(FullCommitNotes as MutableMessageType<FullCommitNotes>).typeName = "aiserver.v1.FullCommitNotes";
(FullCommitNotes as MutableMessageType<FullCommitNotes>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "notes", kind: "message", T: CommitNote, repeated: true },
  {
    no: 2,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "files_changed_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CrossExtHostHeader$Runtime = (() => class _CrossExtHostHeader extends Message<_CrossExtHostHeader> {
  declare key: string;
  declare value: string;
  constructor(data?: PartialMessage<_CrossExtHostHeader>) {
    super();
    this.key = "";
    this.value = "";
    proto3.util.initPartial(data, this as _CrossExtHostHeader);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CrossExtHostHeader {
    return new _CrossExtHostHeader().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CrossExtHostHeader {
    return new _CrossExtHostHeader().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CrossExtHostHeader {
    return new _CrossExtHostHeader().fromJsonString(jsonString, options);
  }
  static equals(a: _CrossExtHostHeader | PlainMessage<_CrossExtHostHeader> | undefined | null, b2: _CrossExtHostHeader | PlainMessage<_CrossExtHostHeader> | undefined | null): boolean {
    return proto3.util.equals(_CrossExtHostHeader as unknown as MessageType<_CrossExtHostHeader>, a, b2);
  }
})();
export type CrossExtHostHeader = InstanceType<typeof CrossExtHostHeader$Runtime>;
var CrossExtHostHeader: MessageType<CrossExtHostHeader> = CrossExtHostHeader$Runtime as unknown as MessageType<CrossExtHostHeader>;
(CrossExtHostHeader as MutableMessageType<CrossExtHostHeader>).runtime = proto3;
(CrossExtHostHeader as MutableMessageType<CrossExtHostHeader>).typeName = "aiserver.v1.CrossExtHostHeader";
(CrossExtHostHeader as MutableMessageType<CrossExtHostHeader>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CrossExtHostHeaders$Runtime = (() => class _CrossExtHostHeaders extends Message<_CrossExtHostHeaders> {
  declare headers: CrossExtHostHeader[];
  constructor(data?: PartialMessage<_CrossExtHostHeaders>) {
    super();
    this.headers = [];
    proto3.util.initPartial(data, this as _CrossExtHostHeaders);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CrossExtHostHeaders {
    return new _CrossExtHostHeaders().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CrossExtHostHeaders {
    return new _CrossExtHostHeaders().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CrossExtHostHeaders {
    return new _CrossExtHostHeaders().fromJsonString(jsonString, options);
  }
  static equals(a: _CrossExtHostHeaders | PlainMessage<_CrossExtHostHeaders> | undefined | null, b2: _CrossExtHostHeaders | PlainMessage<_CrossExtHostHeaders> | undefined | null): boolean {
    return proto3.util.equals(_CrossExtHostHeaders as unknown as MessageType<_CrossExtHostHeaders>, a, b2);
  }
})();
export type CrossExtHostHeaders = InstanceType<typeof CrossExtHostHeaders$Runtime>;
var CrossExtHostHeaders: MessageType<CrossExtHostHeaders> = CrossExtHostHeaders$Runtime as unknown as MessageType<CrossExtHostHeaders>;
(CrossExtHostHeaders as MutableMessageType<CrossExtHostHeaders>).runtime = proto3;
(CrossExtHostHeaders as MutableMessageType<CrossExtHostHeaders>).typeName = "aiserver.v1.CrossExtHostHeaders";
(CrossExtHostHeaders as MutableMessageType<CrossExtHostHeaders>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "headers", kind: "message", T: CrossExtHostHeader, repeated: true }
]);
var SimpleUnaryCrossExtensionHostMessage$Runtime = (() => class _SimpleUnaryCrossExtensionHostMessage extends Message<_SimpleUnaryCrossExtensionHostMessage> {
  declare message: Uint8Array;
  declare header?: CrossExtHostHeaders;
  declare trailer?: CrossExtHostHeaders;
  declare isError: boolean;
  declare connectError: string;
  constructor(data?: PartialMessage<_SimpleUnaryCrossExtensionHostMessage>) {
    super();
    this.message = new Uint8Array(0);
    this.isError = false;
    this.connectError = "";
    proto3.util.initPartial(data, this as _SimpleUnaryCrossExtensionHostMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SimpleUnaryCrossExtensionHostMessage {
    return new _SimpleUnaryCrossExtensionHostMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SimpleUnaryCrossExtensionHostMessage {
    return new _SimpleUnaryCrossExtensionHostMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SimpleUnaryCrossExtensionHostMessage {
    return new _SimpleUnaryCrossExtensionHostMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _SimpleUnaryCrossExtensionHostMessage | PlainMessage<_SimpleUnaryCrossExtensionHostMessage> | undefined | null, b2: _SimpleUnaryCrossExtensionHostMessage | PlainMessage<_SimpleUnaryCrossExtensionHostMessage> | undefined | null): boolean {
    return proto3.util.equals(_SimpleUnaryCrossExtensionHostMessage as unknown as MessageType<_SimpleUnaryCrossExtensionHostMessage>, a, b2);
  }
})();
export type SimpleUnaryCrossExtensionHostMessage = InstanceType<typeof SimpleUnaryCrossExtensionHostMessage$Runtime>;
var SimpleUnaryCrossExtensionHostMessage: MessageType<SimpleUnaryCrossExtensionHostMessage> = SimpleUnaryCrossExtensionHostMessage$Runtime as unknown as MessageType<SimpleUnaryCrossExtensionHostMessage>;
(SimpleUnaryCrossExtensionHostMessage as MutableMessageType<SimpleUnaryCrossExtensionHostMessage>).runtime = proto3;
(SimpleUnaryCrossExtensionHostMessage as MutableMessageType<SimpleUnaryCrossExtensionHostMessage>).typeName = "aiserver.v1.SimpleUnaryCrossExtensionHostMessage";
(SimpleUnaryCrossExtensionHostMessage as MutableMessageType<SimpleUnaryCrossExtensionHostMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "header", kind: "message", T: CrossExtHostHeaders },
  { no: 3, name: "trailer", kind: "message", T: CrossExtHostHeaders },
  {
    no: 4,
    name: "is_error",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "connect_error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CodeChunk$Runtime = (() => class _CodeChunk extends Message<_CodeChunk> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare lines: string[];
  declare summarizationStrategy?: CodeChunk_SummarizationStrategy;
  declare languageIdentifier: string;
  declare intent?: CodeChunk_Intent;
  declare isFinalVersion?: boolean;
  declare isFirstVersion?: boolean;
  constructor(data?: PartialMessage<_CodeChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.lines = [];
    this.languageIdentifier = "";
    proto3.util.initPartial(data, this as _CodeChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeChunk {
    return new _CodeChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeChunk {
    return new _CodeChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeChunk {
    return new _CodeChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeChunk | PlainMessage<_CodeChunk> | undefined | null, b2: _CodeChunk | PlainMessage<_CodeChunk> | undefined | null): boolean {
    return proto3.util.equals(_CodeChunk as unknown as MessageType<_CodeChunk>, a, b2);
  }
})();
export type CodeChunk = InstanceType<typeof CodeChunk$Runtime>;
var CodeChunk: MessageType<CodeChunk> = CodeChunk$Runtime as unknown as MessageType<CodeChunk>;
(CodeChunk as MutableMessageType<CodeChunk>).runtime = proto3;
(CodeChunk as MutableMessageType<CodeChunk>).typeName = "aiserver.v1.CodeChunk";
(CodeChunk as MutableMessageType<CodeChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "summarization_strategy", kind: "enum", T: proto3.getEnumType(CodeChunk_SummarizationStrategy), opt: true },
  {
    no: 5,
    name: "language_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "intent", kind: "enum", T: proto3.getEnumType(CodeChunk_Intent), opt: true },
  { no: 7, name: "is_final_version", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "is_first_version", kind: "scalar", T: 8, opt: true }
]);
(function(CodeChunk_Intent2) {
  CodeChunk_Intent2[CodeChunk_Intent2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CodeChunk_Intent2[CodeChunk_Intent2["COMPOSER_FILE"] = 1] = "COMPOSER_FILE";
  CodeChunk_Intent2[CodeChunk_Intent2["COMPRESSED_COMPOSER_FILE"] = 2] = "COMPRESSED_COMPOSER_FILE";
})(CodeChunk_Intent! || (CodeChunk_Intent = {} as typeof CodeChunk_Intent));
proto3.util.setEnumType(CodeChunk_Intent, "aiserver.v1.CodeChunk.Intent", [
  { no: 0, name: "INTENT_UNSPECIFIED" },
  { no: 1, name: "INTENT_COMPOSER_FILE" },
  { no: 2, name: "INTENT_COMPRESSED_COMPOSER_FILE" }
]);
(function(CodeChunk_SummarizationStrategy2) {
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["NONE_UNSPECIFIED"] = 0] = "NONE_UNSPECIFIED";
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["SUMMARIZED"] = 1] = "SUMMARIZED";
  CodeChunk_SummarizationStrategy2[CodeChunk_SummarizationStrategy2["EMBEDDED"] = 2] = "EMBEDDED";
})(CodeChunk_SummarizationStrategy! || (CodeChunk_SummarizationStrategy = {} as typeof CodeChunk_SummarizationStrategy));
proto3.util.setEnumType(CodeChunk_SummarizationStrategy, "aiserver.v1.CodeChunk.SummarizationStrategy", [
  { no: 0, name: "SUMMARIZATION_STRATEGY_NONE_UNSPECIFIED" },
  { no: 1, name: "SUMMARIZATION_STRATEGY_SUMMARIZED" },
  { no: 2, name: "SUMMARIZATION_STRATEGY_EMBEDDED" }
]);
var RCPCallFrame$Runtime = (() => class _RCPCallFrame extends Message<_RCPCallFrame> {
  declare functionName?: string;
  declare url?: string;
  declare lineNumber?: number;
  declare columnNumber?: number;
  constructor(data?: PartialMessage<_RCPCallFrame>) {
    super();
    proto3.util.initPartial(data, this as _RCPCallFrame);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPCallFrame {
    return new _RCPCallFrame().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPCallFrame {
    return new _RCPCallFrame().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPCallFrame {
    return new _RCPCallFrame().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPCallFrame | PlainMessage<_RCPCallFrame> | undefined | null, b2: _RCPCallFrame | PlainMessage<_RCPCallFrame> | undefined | null): boolean {
    return proto3.util.equals(_RCPCallFrame as unknown as MessageType<_RCPCallFrame>, a, b2);
  }
})();
export type RCPCallFrame = InstanceType<typeof RCPCallFrame$Runtime>;
var RCPCallFrame: MessageType<RCPCallFrame> = RCPCallFrame$Runtime as unknown as MessageType<RCPCallFrame>;
(RCPCallFrame as MutableMessageType<RCPCallFrame>).runtime = proto3;
(RCPCallFrame as MutableMessageType<RCPCallFrame>).typeName = "aiserver.v1.RCPCallFrame";
(RCPCallFrame as MutableMessageType<RCPCallFrame>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "function_name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }
]);
var RCPStackTrace$Runtime = (() => class _RCPStackTrace extends Message<_RCPStackTrace> {
  declare callFrames: RCPCallFrame[];
  declare rawStackTrace?: string;
  constructor(data?: PartialMessage<_RCPStackTrace>) {
    super();
    this.callFrames = [];
    proto3.util.initPartial(data, this as _RCPStackTrace);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPStackTrace {
    return new _RCPStackTrace().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPStackTrace {
    return new _RCPStackTrace().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPStackTrace {
    return new _RCPStackTrace().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPStackTrace | PlainMessage<_RCPStackTrace> | undefined | null, b2: _RCPStackTrace | PlainMessage<_RCPStackTrace> | undefined | null): boolean {
    return proto3.util.equals(_RCPStackTrace as unknown as MessageType<_RCPStackTrace>, a, b2);
  }
})();
export type RCPStackTrace = InstanceType<typeof RCPStackTrace$Runtime>;
var RCPStackTrace: MessageType<RCPStackTrace> = RCPStackTrace$Runtime as unknown as MessageType<RCPStackTrace>;
(RCPStackTrace as MutableMessageType<RCPStackTrace>).runtime = proto3;
(RCPStackTrace as MutableMessageType<RCPStackTrace>).typeName = "aiserver.v1.RCPStackTrace";
(RCPStackTrace as MutableMessageType<RCPStackTrace>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "call_frames", kind: "message", T: RCPCallFrame, repeated: true },
  { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }
]);
var RCPLogEntry$Runtime = (() => class _RCPLogEntry extends Message<_RCPLogEntry> {
  declare message: string;
  declare timestamp: number;
  declare level: string;
  declare clientName: string;
  declare sessionId: string;
  declare stackTrace?: RCPStackTrace;
  declare objectDataJson?: string;
  constructor(data?: PartialMessage<_RCPLogEntry>) {
    super();
    this.message = "";
    this.timestamp = 0;
    this.level = "";
    this.clientName = "";
    this.sessionId = "";
    proto3.util.initPartial(data, this as _RCPLogEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPLogEntry {
    return new _RCPLogEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPLogEntry {
    return new _RCPLogEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPLogEntry {
    return new _RCPLogEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPLogEntry | PlainMessage<_RCPLogEntry> | undefined | null, b2: _RCPLogEntry | PlainMessage<_RCPLogEntry> | undefined | null): boolean {
    return proto3.util.equals(_RCPLogEntry as unknown as MessageType<_RCPLogEntry>, a, b2);
  }
})();
export type RCPLogEntry = InstanceType<typeof RCPLogEntry$Runtime>;
var RCPLogEntry: MessageType<RCPLogEntry> = RCPLogEntry$Runtime as unknown as MessageType<RCPLogEntry>;
(RCPLogEntry as MutableMessageType<RCPLogEntry>).runtime = proto3;
(RCPLogEntry as MutableMessageType<RCPLogEntry>).typeName = "aiserver.v1.RCPLogEntry";
(RCPLogEntry as MutableMessageType<RCPLogEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "level",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "client_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "stack_trace", kind: "message", T: RCPStackTrace, opt: true },
  { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }
]);
var RCPUIElementPicked$Runtime = (() => class _RCPUIElementPicked extends Message<_RCPUIElementPicked> {
  declare element: string;
  declare xpath: string;
  declare textContent: string;
  declare extra: string;
  declare component?: string;
  declare componentPropsJson?: string;
  constructor(data?: PartialMessage<_RCPUIElementPicked>) {
    super();
    this.element = "";
    this.xpath = "";
    this.textContent = "";
    this.extra = "";
    proto3.util.initPartial(data, this as _RCPUIElementPicked);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPUIElementPicked {
    return new _RCPUIElementPicked().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPUIElementPicked {
    return new _RCPUIElementPicked().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPUIElementPicked {
    return new _RCPUIElementPicked().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPUIElementPicked | PlainMessage<_RCPUIElementPicked> | undefined | null, b2: _RCPUIElementPicked | PlainMessage<_RCPUIElementPicked> | undefined | null): boolean {
    return proto3.util.equals(_RCPUIElementPicked as unknown as MessageType<_RCPUIElementPicked>, a, b2);
  }
})();
export type RCPUIElementPicked = InstanceType<typeof RCPUIElementPicked$Runtime>;
var RCPUIElementPicked: MessageType<RCPUIElementPicked> = RCPUIElementPicked$Runtime as unknown as MessageType<RCPUIElementPicked>;
(RCPUIElementPicked as MutableMessageType<RCPUIElementPicked>).runtime = proto3;
(RCPUIElementPicked as MutableMessageType<RCPUIElementPicked>).typeName = "aiserver.v1.RCPUIElementPicked";
(RCPUIElementPicked as MutableMessageType<RCPUIElementPicked>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "element",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "xpath",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "text_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "extra",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "component", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }
]);
var RCPChatMessage$Runtime = (() => class _RCPChatMessage extends Message<_RCPChatMessage> {
  declare text: string;
  constructor(data?: PartialMessage<_RCPChatMessage>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _RCPChatMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPChatMessage {
    return new _RCPChatMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPChatMessage {
    return new _RCPChatMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPChatMessage {
    return new _RCPChatMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPChatMessage | PlainMessage<_RCPChatMessage> | undefined | null, b2: _RCPChatMessage | PlainMessage<_RCPChatMessage> | undefined | null): boolean {
    return proto3.util.equals(_RCPChatMessage as unknown as MessageType<_RCPChatMessage>, a, b2);
  }
})();
export type RCPChatMessage = InstanceType<typeof RCPChatMessage$Runtime>;
var RCPChatMessage: MessageType<RCPChatMessage> = RCPChatMessage$Runtime as unknown as MessageType<RCPChatMessage>;
(RCPChatMessage as MutableMessageType<RCPChatMessage>).runtime = proto3;
(RCPChatMessage as MutableMessageType<RCPChatMessage>).typeName = "aiserver.v1.RCPChatMessage";
(RCPChatMessage as MutableMessageType<RCPChatMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RCPMessage$Runtime = (() => class _RCPMessage extends Message<_RCPMessage> {
  declare message: { case: "console"; value: RCPLogEntry } | { case: "uiElementPicked"; value: RCPUIElementPicked } | { case: "chatMessage"; value: RCPChatMessage } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RCPMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _RCPMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RCPMessage {
    return new _RCPMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RCPMessage {
    return new _RCPMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RCPMessage {
    return new _RCPMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _RCPMessage | PlainMessage<_RCPMessage> | undefined | null, b2: _RCPMessage | PlainMessage<_RCPMessage> | undefined | null): boolean {
    return proto3.util.equals(_RCPMessage as unknown as MessageType<_RCPMessage>, a, b2);
  }
})();
export type RCPMessage = InstanceType<typeof RCPMessage$Runtime>;
var RCPMessage: MessageType<RCPMessage> = RCPMessage$Runtime as unknown as MessageType<RCPMessage>;
(RCPMessage as MutableMessageType<RCPMessage>).runtime = proto3;
(RCPMessage as MutableMessageType<RCPMessage>).typeName = "aiserver.v1.RCPMessage";
(RCPMessage as MutableMessageType<RCPMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "console", kind: "message", T: RCPLogEntry, oneof: "message" },
  { no: 2, name: "ui_element_picked", kind: "message", T: RCPUIElementPicked, oneof: "message" },
  { no: 3, name: "chat_message", kind: "message", T: RCPChatMessage, oneof: "message" }
]);


export { LintSeverity, FeatureType, EmbeddingModel, CursorPosition, VscodeOSStatistics, VscodeOSProperties, VscodeCPUProperties, EnvironmentInfo, SelectionWithOrientation, GetDiffRequest, GetDiffRequest_OutputFormat, GetDiffResponse, GetDiffResponse_SubmoduleDiff, SimplestRange, ComputeLinesDiffOriginalAndModified, GitDiff, GitDiff_DiffType, FileDiff, FileDiff_Chunk, SimpleRange, SimpleFileChunk, CmdKDebugInfo, CmdKDebugInfo_UnsavedFiles, CmdKDebugInfo_OpenEditor, CmdKDebugInfo_CppFileDiffHistory, CmdKDebugInfo_PastThought, LineRange, CursorRange, DetailedLine, CodeBlock, CodeBlock_Signatures, GitCommit, FileGit, File2, Diagnostic2, Diagnostic_DiagnosticSeverity, Diagnostic_RelatedInformation, Lint, BM25Chunk, CurrentFileInfo, CurrentFileInfo_NotebookCell, AzureState, BedrockState, ModelDetails, CloudAgentModelSelection, CloudAgentModelSelection_ParameterValue, ModelInfo, DataframeInfo, DataframeInfo_Column, LinterError, LinterErrors, LinterErrorsWithoutFileContents, CursorRule2, ExplicitContext, MCPInstructions, PureMessage, PureMessage_MessageType, DocumentSymbol, DocumentSymbol_SymbolKind, DocumentSymbol_Range, HoverDetails, UriComponents, DocumentSymbolWithText, ErrorDetails, ErrorDetails_Error, CustomErrorDetails, ErrorAnalyticsMetadata, PlanChoice, ErrorButton, ClientAction, ReloadWindowAction, DashboardAction, UpgradeChoice, UpgradeAction, SwitchModelAction, SwitchModelAction_ModelParameterValue, ConfigureSpendLimitAction, UrlAction, ImageProto2, ImageProto_Dimension2, ChatQuote, ChatExternalLink, ComposerExternalLink, CmdKExternalLink, CommitNote, CommitNoteWithEmbeddings, CommitDiffString, FullCommitNotes, CrossExtHostHeader, CrossExtHostHeaders, SimpleUnaryCrossExtensionHostMessage, CodeChunk, CodeChunk_Intent, CodeChunk_SummarizationStrategy, RCPCallFrame, RCPStackTrace, RCPLogEntry, RCPUIElementPicked, RCPChatMessage, RCPMessage };
