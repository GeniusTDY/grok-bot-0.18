/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:16755-16958
 * Region SHA-256: 511b47b721ec823d953960276ddeeedc610c9d45623cbe53333cae9609981f64
 * Atomic B1 exports: 6 messages + 1 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type CursorRuleSource = 0 | 1 | 2;
var CursorRuleSource: {
  "UNSPECIFIED": 0;
  "TEAM": 1;
  "USER": 2;
  0: "UNSPECIFIED";
  1: "TEAM";
  2: "USER";
};
(function(CursorRuleSource2) {
  CursorRuleSource2[CursorRuleSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CursorRuleSource2[CursorRuleSource2["TEAM"] = 1] = "TEAM";
  CursorRuleSource2[CursorRuleSource2["USER"] = 2] = "USER";
})(CursorRuleSource! || (CursorRuleSource = {} as typeof CursorRuleSource));
proto3.util.setEnumType(CursorRuleSource, "agent.v1.CursorRuleSource", [
  { no: 0, name: "CURSOR_RULE_SOURCE_UNSPECIFIED" },
  { no: 1, name: "CURSOR_RULE_SOURCE_TEAM" },
  { no: 2, name: "CURSOR_RULE_SOURCE_USER" }
]);
var CursorRuleTypeGlobal$Runtime = (() => class _CursorRuleTypeGlobal extends Message<_CursorRuleTypeGlobal> {
  constructor(data?: PartialMessage<_CursorRuleTypeGlobal>) {
    super();
    proto3.util.initPartial(data, this as _CursorRuleTypeGlobal);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRuleTypeGlobal {
    return new _CursorRuleTypeGlobal().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRuleTypeGlobal {
    return new _CursorRuleTypeGlobal().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRuleTypeGlobal {
    return new _CursorRuleTypeGlobal().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRuleTypeGlobal | PlainMessage<_CursorRuleTypeGlobal> | undefined | null, b2: _CursorRuleTypeGlobal | PlainMessage<_CursorRuleTypeGlobal> | undefined | null): boolean {
    return proto3.util.equals(_CursorRuleTypeGlobal as unknown as MessageType<_CursorRuleTypeGlobal>, a, b2);
  }
})();
export type CursorRuleTypeGlobal = InstanceType<typeof CursorRuleTypeGlobal$Runtime>;
var CursorRuleTypeGlobal: MessageType<CursorRuleTypeGlobal> = CursorRuleTypeGlobal$Runtime as unknown as MessageType<CursorRuleTypeGlobal>;
(CursorRuleTypeGlobal as MutableMessageType<CursorRuleTypeGlobal>).runtime = proto3;
(CursorRuleTypeGlobal as MutableMessageType<CursorRuleTypeGlobal>).typeName = "agent.v1.CursorRuleTypeGlobal";
(CursorRuleTypeGlobal as MutableMessageType<CursorRuleTypeGlobal>).fields = proto3.util.newFieldList(() => []);
var CursorRuleTypeFileGlobs$Runtime = (() => class _CursorRuleTypeFileGlobs extends Message<_CursorRuleTypeFileGlobs> {
  declare globs: string[];
  constructor(data?: PartialMessage<_CursorRuleTypeFileGlobs>) {
    super();
    this.globs = [];
    proto3.util.initPartial(data, this as _CursorRuleTypeFileGlobs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRuleTypeFileGlobs {
    return new _CursorRuleTypeFileGlobs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRuleTypeFileGlobs {
    return new _CursorRuleTypeFileGlobs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRuleTypeFileGlobs {
    return new _CursorRuleTypeFileGlobs().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRuleTypeFileGlobs | PlainMessage<_CursorRuleTypeFileGlobs> | undefined | null, b2: _CursorRuleTypeFileGlobs | PlainMessage<_CursorRuleTypeFileGlobs> | undefined | null): boolean {
    return proto3.util.equals(_CursorRuleTypeFileGlobs as unknown as MessageType<_CursorRuleTypeFileGlobs>, a, b2);
  }
})();
export type CursorRuleTypeFileGlobs = InstanceType<typeof CursorRuleTypeFileGlobs$Runtime>;
var CursorRuleTypeFileGlobs: MessageType<CursorRuleTypeFileGlobs> = CursorRuleTypeFileGlobs$Runtime as unknown as MessageType<CursorRuleTypeFileGlobs>;
(CursorRuleTypeFileGlobs as MutableMessageType<CursorRuleTypeFileGlobs>).runtime = proto3;
(CursorRuleTypeFileGlobs as MutableMessageType<CursorRuleTypeFileGlobs>).typeName = "agent.v1.CursorRuleTypeFileGlobs";
(CursorRuleTypeFileGlobs as MutableMessageType<CursorRuleTypeFileGlobs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "globs", kind: "scalar", T: 9, repeated: true }
]);
var CursorRuleTypeAgentFetched$Runtime = (() => class _CursorRuleTypeAgentFetched extends Message<_CursorRuleTypeAgentFetched> {
  declare description: string;
  constructor(data?: PartialMessage<_CursorRuleTypeAgentFetched>) {
    super();
    this.description = "";
    proto3.util.initPartial(data, this as _CursorRuleTypeAgentFetched);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRuleTypeAgentFetched {
    return new _CursorRuleTypeAgentFetched().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRuleTypeAgentFetched {
    return new _CursorRuleTypeAgentFetched().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRuleTypeAgentFetched {
    return new _CursorRuleTypeAgentFetched().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRuleTypeAgentFetched | PlainMessage<_CursorRuleTypeAgentFetched> | undefined | null, b2: _CursorRuleTypeAgentFetched | PlainMessage<_CursorRuleTypeAgentFetched> | undefined | null): boolean {
    return proto3.util.equals(_CursorRuleTypeAgentFetched as unknown as MessageType<_CursorRuleTypeAgentFetched>, a, b2);
  }
})();
export type CursorRuleTypeAgentFetched = InstanceType<typeof CursorRuleTypeAgentFetched$Runtime>;
var CursorRuleTypeAgentFetched: MessageType<CursorRuleTypeAgentFetched> = CursorRuleTypeAgentFetched$Runtime as unknown as MessageType<CursorRuleTypeAgentFetched>;
(CursorRuleTypeAgentFetched as MutableMessageType<CursorRuleTypeAgentFetched>).runtime = proto3;
(CursorRuleTypeAgentFetched as MutableMessageType<CursorRuleTypeAgentFetched>).typeName = "agent.v1.CursorRuleTypeAgentFetched";
(CursorRuleTypeAgentFetched as MutableMessageType<CursorRuleTypeAgentFetched>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CursorRuleTypeManuallyAttached$Runtime = (() => class _CursorRuleTypeManuallyAttached extends Message<_CursorRuleTypeManuallyAttached> {
  constructor(data?: PartialMessage<_CursorRuleTypeManuallyAttached>) {
    super();
    proto3.util.initPartial(data, this as _CursorRuleTypeManuallyAttached);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRuleTypeManuallyAttached {
    return new _CursorRuleTypeManuallyAttached().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRuleTypeManuallyAttached {
    return new _CursorRuleTypeManuallyAttached().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRuleTypeManuallyAttached {
    return new _CursorRuleTypeManuallyAttached().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRuleTypeManuallyAttached | PlainMessage<_CursorRuleTypeManuallyAttached> | undefined | null, b2: _CursorRuleTypeManuallyAttached | PlainMessage<_CursorRuleTypeManuallyAttached> | undefined | null): boolean {
    return proto3.util.equals(_CursorRuleTypeManuallyAttached as unknown as MessageType<_CursorRuleTypeManuallyAttached>, a, b2);
  }
})();
export type CursorRuleTypeManuallyAttached = InstanceType<typeof CursorRuleTypeManuallyAttached$Runtime>;
var CursorRuleTypeManuallyAttached: MessageType<CursorRuleTypeManuallyAttached> = CursorRuleTypeManuallyAttached$Runtime as unknown as MessageType<CursorRuleTypeManuallyAttached>;
(CursorRuleTypeManuallyAttached as MutableMessageType<CursorRuleTypeManuallyAttached>).runtime = proto3;
(CursorRuleTypeManuallyAttached as MutableMessageType<CursorRuleTypeManuallyAttached>).typeName = "agent.v1.CursorRuleTypeManuallyAttached";
(CursorRuleTypeManuallyAttached as MutableMessageType<CursorRuleTypeManuallyAttached>).fields = proto3.util.newFieldList(() => []);
var CursorRuleType$Runtime = (() => class _CursorRuleType extends Message<_CursorRuleType> {
  declare type: { case: "global"; value: CursorRuleTypeGlobal } | { case: "fileGlobbed"; value: CursorRuleTypeFileGlobs } | { case: "agentFetched"; value: CursorRuleTypeAgentFetched } | { case: "manuallyAttached"; value: CursorRuleTypeManuallyAttached } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CursorRuleType>) {
    super();
    this.type = { case: void 0 };
    proto3.util.initPartial(data, this as _CursorRuleType);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorRuleType {
    return new _CursorRuleType().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorRuleType {
    return new _CursorRuleType().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorRuleType {
    return new _CursorRuleType().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorRuleType | PlainMessage<_CursorRuleType> | undefined | null, b2: _CursorRuleType | PlainMessage<_CursorRuleType> | undefined | null): boolean {
    return proto3.util.equals(_CursorRuleType as unknown as MessageType<_CursorRuleType>, a, b2);
  }
})();
export type CursorRuleType = InstanceType<typeof CursorRuleType$Runtime>;
var CursorRuleType: MessageType<CursorRuleType> = CursorRuleType$Runtime as unknown as MessageType<CursorRuleType>;
(CursorRuleType as MutableMessageType<CursorRuleType>).runtime = proto3;
(CursorRuleType as MutableMessageType<CursorRuleType>).typeName = "agent.v1.CursorRuleType";
(CursorRuleType as MutableMessageType<CursorRuleType>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "global", kind: "message", T: CursorRuleTypeGlobal, oneof: "type" },
  { no: 2, name: "file_globbed", kind: "message", T: CursorRuleTypeFileGlobs, oneof: "type" },
  { no: 3, name: "agent_fetched", kind: "message", T: CursorRuleTypeAgentFetched, oneof: "type" },
  { no: 4, name: "manually_attached", kind: "message", T: CursorRuleTypeManuallyAttached, oneof: "type" }
]);
var CursorRule$Runtime = (() => class _CursorRule extends Message<_CursorRule> {
  declare fullPath: string;
  declare content: string;
  declare type?: CursorRuleType;
  declare source: CursorRuleSource;
  declare gitRemoteOrigin?: string;
  declare parseError?: string;
  declare environments: string[];
  declare disabledEnvironments: string[];
  declare plugin?: string;
  declare marketplace?: string;
  declare pluginId?: string;
  declare marketplaceId?: string;
  declare scopedTo: string[];
  declare frontmatter: string;
  declare isRequired?: boolean;
  constructor(data?: PartialMessage<_CursorRule>) {
    super();
    this.fullPath = "";
    this.content = "";
    this.source = CursorRuleSource.UNSPECIFIED;
    this.environments = [];
    this.disabledEnvironments = [];
    this.scopedTo = [];
    this.frontmatter = "";
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
export type CursorRule = InstanceType<typeof CursorRule$Runtime>;
var CursorRule: MessageType<CursorRule> = CursorRule$Runtime as unknown as MessageType<CursorRule>;
(CursorRule as MutableMessageType<CursorRule>).runtime = proto3;
(CursorRule as MutableMessageType<CursorRule>).typeName = "agent.v1.CursorRule";
(CursorRule as MutableMessageType<CursorRule>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "full_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "type", kind: "message", T: CursorRuleType },
  { no: 4, name: "source", kind: "enum", T: proto3.getEnumType(CursorRuleSource) },
  { no: 5, name: "git_remote_origin", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "parse_error", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "environments", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "disabled_environments", kind: "scalar", T: 9, repeated: true },
  { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "scoped_to", kind: "scalar", T: 9, repeated: true },
  {
    no: 14,
    name: "frontmatter",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 15, name: "is_required", kind: "scalar", T: 8, opt: true }
]);


export { CursorRuleSource, CursorRuleTypeGlobal, CursorRuleTypeFileGlobs, CursorRuleTypeAgentFetched, CursorRuleTypeManuallyAttached, CursorRuleType, CursorRule };
