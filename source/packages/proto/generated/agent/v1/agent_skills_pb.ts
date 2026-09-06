/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:17753-17889
 * Region SHA-256: 217c0ab66f1bc7d3883c1cf39b45eaf7a9285a11cc301c0c73c814b8e76cdb1c
 * Atomic B0 exports: 2 messages + 0 enums = 2
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var AgentSkill$Runtime = (() => class _AgentSkill extends Message<_AgentSkill> {
  declare fullPath: string;
  declare content: string;
  declare description: string;
  declare parseError?: string;
  declare environments: string[];
  declare disabledEnvironments: string[];
  declare gitRemoteOrigin?: string;
  declare disableModelInvocation: boolean;
  declare plugin?: string;
  declare marketplace?: string;
  declare pluginId?: string;
  declare marketplaceId?: string;
  declare globs: string[];
  declare scopedTo: string[];
  constructor(data?: PartialMessage<_AgentSkill>) {
    super();
    this.fullPath = "";
    this.content = "";
    this.description = "";
    this.environments = [];
    this.disabledEnvironments = [];
    this.disableModelInvocation = false;
    this.globs = [];
    this.scopedTo = [];
    proto3.util.initPartial(data, this as _AgentSkill);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentSkill {
    return new _AgentSkill().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentSkill {
    return new _AgentSkill().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentSkill {
    return new _AgentSkill().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentSkill | PlainMessage<_AgentSkill> | undefined | null, b2: _AgentSkill | PlainMessage<_AgentSkill> | undefined | null): boolean {
    return proto3.util.equals(_AgentSkill as unknown as MessageType<_AgentSkill>, a, b2);
  }
})();
export type AgentSkill = InstanceType<typeof AgentSkill$Runtime>;
var AgentSkill: MessageType<AgentSkill> = AgentSkill$Runtime as unknown as MessageType<AgentSkill>;
(AgentSkill as MutableMessageType<AgentSkill>).runtime = proto3;
(AgentSkill as MutableMessageType<AgentSkill>).typeName = "agent.v1.AgentSkill";
(AgentSkill as MutableMessageType<AgentSkill>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "parse_error", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "environments", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "disabled_environments", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "git_remote_origin", kind: "scalar", T: 9, opt: true },
  {
    no: 8,
    name: "disable_model_invocation",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "globs", kind: "scalar", T: 9, repeated: true },
  { no: 14, name: "scoped_to", kind: "scalar", T: 9, repeated: true }
]);
var AgentSkillMetadata$Runtime = (() => class _AgentSkillMetadata extends Message<_AgentSkillMetadata> {
  declare fullPath: string;
  declare description: string;
  declare parseError?: string;
  declare environments: string[];
  declare disabledEnvironments: string[];
  declare gitRemoteOrigin?: string;
  declare disableModelInvocation: boolean;
  declare plugin?: string;
  declare marketplace?: string;
  declare pluginId?: string;
  declare marketplaceId?: string;
  declare globs: string[];
  declare scopedTo: string[];
  constructor(data?: PartialMessage<_AgentSkillMetadata>) {
    super();
    this.fullPath = "";
    this.description = "";
    this.environments = [];
    this.disabledEnvironments = [];
    this.disableModelInvocation = false;
    this.globs = [];
    this.scopedTo = [];
    proto3.util.initPartial(data, this as _AgentSkillMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentSkillMetadata {
    return new _AgentSkillMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentSkillMetadata {
    return new _AgentSkillMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentSkillMetadata {
    return new _AgentSkillMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentSkillMetadata | PlainMessage<_AgentSkillMetadata> | undefined | null, b2: _AgentSkillMetadata | PlainMessage<_AgentSkillMetadata> | undefined | null): boolean {
    return proto3.util.equals(_AgentSkillMetadata as unknown as MessageType<_AgentSkillMetadata>, a, b2);
  }
})();
export type AgentSkillMetadata = InstanceType<typeof AgentSkillMetadata$Runtime>;
var AgentSkillMetadata: MessageType<AgentSkillMetadata> = AgentSkillMetadata$Runtime as unknown as MessageType<AgentSkillMetadata>;
(AgentSkillMetadata as MutableMessageType<AgentSkillMetadata>).runtime = proto3;
(AgentSkillMetadata as MutableMessageType<AgentSkillMetadata>).typeName = "agent.v1.AgentSkillMetadata";
(AgentSkillMetadata as MutableMessageType<AgentSkillMetadata>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "full_path",
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
  { no: 3, name: "parse_error", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "environments", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "disabled_environments", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "git_remote_origin", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "disable_model_invocation",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "marketplace_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "globs", kind: "scalar", T: 9, repeated: true },
  { no: 13, name: "scoped_to", kind: "scalar", T: 9, repeated: true }
]);


export { AgentSkill, AgentSkillMetadata };
