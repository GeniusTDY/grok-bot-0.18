/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:12803-12964
 * Region SHA-256: 893b458c0df28652435e6a687325e0fa2dd704564c2ba0264d7d3a72aa71c96f
 * Atomic B1 exports: 4 messages + 3 enums = 7
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type NetworkPolicy_DefaultAction = 0 | 1 | 2;
var NetworkPolicy_DefaultAction: {
  "UNSPECIFIED": 0;
  "ALLOW": 1;
  "DENY": 2;
  0: "UNSPECIFIED";
  1: "ALLOW";
  2: "DENY";
};
export type SandboxPolicy_Type = 0 | 1 | 2 | 3;
var SandboxPolicy_Type: {
  "UNSPECIFIED": 0;
  "INSECURE_NONE": 1;
  "WORKSPACE_READWRITE": 2;
  "WORKSPACE_READONLY": 3;
  0: "UNSPECIFIED";
  1: "INSECURE_NONE";
  2: "WORKSPACE_READWRITE";
  3: "WORKSPACE_READONLY";
};
export type SandboxPolicy_ReadBoundaryMode = 0 | 1 | 2 | 3;
var SandboxPolicy_ReadBoundaryMode: {
  "UNSPECIFIED": 0;
  "SYSTEM": 1;
  "WORKSPACE": 2;
  "CUSTOM": 3;
  0: "UNSPECIFIED";
  1: "SYSTEM";
  2: "WORKSPACE";
  3: "CUSTOM";
};
var NetworkPolicyLoggingConfig$Runtime = (() => class _NetworkPolicyLoggingConfig extends Message<_NetworkPolicyLoggingConfig> {
  declare decisionLogPath?: string;
  declare logFormat?: string;
  constructor(data?: PartialMessage<_NetworkPolicyLoggingConfig>) {
    super();
    proto3.util.initPartial(data, this as _NetworkPolicyLoggingConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NetworkPolicyLoggingConfig {
    return new _NetworkPolicyLoggingConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NetworkPolicyLoggingConfig {
    return new _NetworkPolicyLoggingConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NetworkPolicyLoggingConfig {
    return new _NetworkPolicyLoggingConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _NetworkPolicyLoggingConfig | PlainMessage<_NetworkPolicyLoggingConfig> | undefined | null, b2: _NetworkPolicyLoggingConfig | PlainMessage<_NetworkPolicyLoggingConfig> | undefined | null): boolean {
    return proto3.util.equals(_NetworkPolicyLoggingConfig as unknown as MessageType<_NetworkPolicyLoggingConfig>, a, b2);
  }
})();
export type NetworkPolicyLoggingConfig = InstanceType<typeof NetworkPolicyLoggingConfig$Runtime>;
var NetworkPolicyLoggingConfig: MessageType<NetworkPolicyLoggingConfig> = NetworkPolicyLoggingConfig$Runtime as unknown as MessageType<NetworkPolicyLoggingConfig>;
(NetworkPolicyLoggingConfig as MutableMessageType<NetworkPolicyLoggingConfig>).runtime = proto3;
(NetworkPolicyLoggingConfig as MutableMessageType<NetworkPolicyLoggingConfig>).typeName = "agent.v1.NetworkPolicyLoggingConfig";
(NetworkPolicyLoggingConfig as MutableMessageType<NetworkPolicyLoggingConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "decision_log_path", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "log_format", kind: "scalar", T: 9, opt: true }
]);
var NetworkPolicy$Runtime = (() => class _NetworkPolicy extends Message<_NetworkPolicy> {
  declare version?: number;
  declare defaultAction?: NetworkPolicy_DefaultAction;
  declare deny: string[];
  declare allow: string[];
  declare logging?: NetworkPolicyLoggingConfig;
  constructor(data?: PartialMessage<_NetworkPolicy>) {
    super();
    this.deny = [];
    this.allow = [];
    proto3.util.initPartial(data, this as _NetworkPolicy);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NetworkPolicy {
    return new _NetworkPolicy().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NetworkPolicy {
    return new _NetworkPolicy().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NetworkPolicy {
    return new _NetworkPolicy().fromJsonString(jsonString, options);
  }
  static equals(a: _NetworkPolicy | PlainMessage<_NetworkPolicy> | undefined | null, b2: _NetworkPolicy | PlainMessage<_NetworkPolicy> | undefined | null): boolean {
    return proto3.util.equals(_NetworkPolicy as unknown as MessageType<_NetworkPolicy>, a, b2);
  }
})();
export type NetworkPolicy = InstanceType<typeof NetworkPolicy$Runtime>;
var NetworkPolicy: MessageType<NetworkPolicy> = NetworkPolicy$Runtime as unknown as MessageType<NetworkPolicy>;
(NetworkPolicy as MutableMessageType<NetworkPolicy>).runtime = proto3;
(NetworkPolicy as MutableMessageType<NetworkPolicy>).typeName = "agent.v1.NetworkPolicy";
(NetworkPolicy as MutableMessageType<NetworkPolicy>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 13, opt: true },
  { no: 2, name: "default_action", kind: "enum", T: proto3.getEnumType(NetworkPolicy_DefaultAction), opt: true },
  { no: 3, name: "deny", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "allow", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "logging", kind: "message", T: NetworkPolicyLoggingConfig, opt: true }
]);
(function(NetworkPolicy_DefaultAction2) {
  NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["ALLOW"] = 1] = "ALLOW";
  NetworkPolicy_DefaultAction2[NetworkPolicy_DefaultAction2["DENY"] = 2] = "DENY";
})(NetworkPolicy_DefaultAction! || (NetworkPolicy_DefaultAction = {} as typeof NetworkPolicy_DefaultAction));
proto3.util.setEnumType(NetworkPolicy_DefaultAction, "agent.v1.NetworkPolicy.DefaultAction", [
  { no: 0, name: "DEFAULT_ACTION_UNSPECIFIED" },
  { no: 1, name: "DEFAULT_ACTION_ALLOW" },
  { no: 2, name: "DEFAULT_ACTION_DENY" }
]);
var SandboxPolicy$Runtime = (() => class _SandboxPolicy extends Message<_SandboxPolicy> {
  declare type: SandboxPolicy_Type;
  declare networkAccess?: boolean;
  declare additionalReadwritePaths: string[];
  declare additionalReadonlyPaths: string[];
  declare debugOutputDir?: string;
  declare disableTmpWrite?: boolean;
  declare allowlistEscalated?: boolean;
  declare enableSharedBuildCache?: boolean;
  declare networkPolicy?: NetworkPolicy;
  declare networkPolicyStrict?: boolean;
  declare captureDenies?: boolean;
  declare skipStatsigDefaults?: boolean;
  declare readBoundary: SandboxPolicy_ReadBoundaryMode;
  declare additionalReadPaths: string[];
  constructor(data?: PartialMessage<_SandboxPolicy>) {
    super();
    this.type = SandboxPolicy_Type.UNSPECIFIED;
    this.additionalReadwritePaths = [];
    this.additionalReadonlyPaths = [];
    this.readBoundary = SandboxPolicy_ReadBoundaryMode.UNSPECIFIED;
    this.additionalReadPaths = [];
    proto3.util.initPartial(data, this as _SandboxPolicy);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandboxPolicy {
    return new _SandboxPolicy().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandboxPolicy {
    return new _SandboxPolicy().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandboxPolicy {
    return new _SandboxPolicy().fromJsonString(jsonString, options);
  }
  static equals(a: _SandboxPolicy | PlainMessage<_SandboxPolicy> | undefined | null, b2: _SandboxPolicy | PlainMessage<_SandboxPolicy> | undefined | null): boolean {
    return proto3.util.equals(_SandboxPolicy as unknown as MessageType<_SandboxPolicy>, a, b2);
  }
})();
export type SandboxPolicy = InstanceType<typeof SandboxPolicy$Runtime>;
var SandboxPolicy: MessageType<SandboxPolicy> = SandboxPolicy$Runtime as unknown as MessageType<SandboxPolicy>;
(SandboxPolicy as MutableMessageType<SandboxPolicy>).runtime = proto3;
(SandboxPolicy as MutableMessageType<SandboxPolicy>).typeName = "agent.v1.SandboxPolicy";
(SandboxPolicy as MutableMessageType<SandboxPolicy>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SandboxPolicy_Type) },
  { no: 2, name: "network_access", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "additional_readwrite_paths", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "additional_readonly_paths", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "debug_output_dir", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "disable_tmp_write", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "allowlist_escalated", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "enable_shared_build_cache", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "network_policy", kind: "message", T: NetworkPolicy, opt: true },
  { no: 11, name: "network_policy_strict", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "capture_denies", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "skip_statsig_defaults", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "read_boundary", kind: "enum", T: proto3.getEnumType(SandboxPolicy_ReadBoundaryMode) },
  { no: 15, name: "additional_read_paths", kind: "scalar", T: 9, repeated: true }
]);
(function(SandboxPolicy_Type2) {
  SandboxPolicy_Type2[SandboxPolicy_Type2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandboxPolicy_Type2[SandboxPolicy_Type2["INSECURE_NONE"] = 1] = "INSECURE_NONE";
  SandboxPolicy_Type2[SandboxPolicy_Type2["WORKSPACE_READWRITE"] = 2] = "WORKSPACE_READWRITE";
  SandboxPolicy_Type2[SandboxPolicy_Type2["WORKSPACE_READONLY"] = 3] = "WORKSPACE_READONLY";
})(SandboxPolicy_Type! || (SandboxPolicy_Type = {} as typeof SandboxPolicy_Type));
proto3.util.setEnumType(SandboxPolicy_Type, "agent.v1.SandboxPolicy.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_INSECURE_NONE" },
  { no: 2, name: "TYPE_WORKSPACE_READWRITE" },
  { no: 3, name: "TYPE_WORKSPACE_READONLY" }
]);
(function(SandboxPolicy_ReadBoundaryMode2) {
  SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["SYSTEM"] = 1] = "SYSTEM";
  SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["WORKSPACE"] = 2] = "WORKSPACE";
  SandboxPolicy_ReadBoundaryMode2[SandboxPolicy_ReadBoundaryMode2["CUSTOM"] = 3] = "CUSTOM";
})(SandboxPolicy_ReadBoundaryMode! || (SandboxPolicy_ReadBoundaryMode = {} as typeof SandboxPolicy_ReadBoundaryMode));
proto3.util.setEnumType(SandboxPolicy_ReadBoundaryMode, "agent.v1.SandboxPolicy.ReadBoundaryMode", [
  { no: 0, name: "READ_BOUNDARY_MODE_UNSPECIFIED" },
  { no: 1, name: "READ_BOUNDARY_MODE_SYSTEM" },
  { no: 2, name: "READ_BOUNDARY_MODE_WORKSPACE" },
  { no: 3, name: "READ_BOUNDARY_MODE_CUSTOM" }
]);
var SandboxPolicyMergeSources$Runtime = (() => class _SandboxPolicyMergeSources extends Message<_SandboxPolicyMergeSources> {
  declare perUser?: SandboxPolicy;
  declare perRepo?: SandboxPolicy;
  declare teamAdmin?: SandboxPolicy;
  constructor(data?: PartialMessage<_SandboxPolicyMergeSources>) {
    super();
    proto3.util.initPartial(data, this as _SandboxPolicyMergeSources);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SandboxPolicyMergeSources {
    return new _SandboxPolicyMergeSources().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SandboxPolicyMergeSources {
    return new _SandboxPolicyMergeSources().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SandboxPolicyMergeSources {
    return new _SandboxPolicyMergeSources().fromJsonString(jsonString, options);
  }
  static equals(a: _SandboxPolicyMergeSources | PlainMessage<_SandboxPolicyMergeSources> | undefined | null, b2: _SandboxPolicyMergeSources | PlainMessage<_SandboxPolicyMergeSources> | undefined | null): boolean {
    return proto3.util.equals(_SandboxPolicyMergeSources as unknown as MessageType<_SandboxPolicyMergeSources>, a, b2);
  }
})();
export type SandboxPolicyMergeSources = InstanceType<typeof SandboxPolicyMergeSources$Runtime>;
var SandboxPolicyMergeSources: MessageType<SandboxPolicyMergeSources> = SandboxPolicyMergeSources$Runtime as unknown as MessageType<SandboxPolicyMergeSources>;
(SandboxPolicyMergeSources as MutableMessageType<SandboxPolicyMergeSources>).runtime = proto3;
(SandboxPolicyMergeSources as MutableMessageType<SandboxPolicyMergeSources>).typeName = "agent.v1.SandboxPolicyMergeSources";
(SandboxPolicyMergeSources as MutableMessageType<SandboxPolicyMergeSources>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "per_user", kind: "message", T: SandboxPolicy, opt: true },
  { no: 2, name: "per_repo", kind: "message", T: SandboxPolicy, opt: true },
  { no: 3, name: "team_admin", kind: "message", T: SandboxPolicy, opt: true }
]);


export { NetworkPolicyLoggingConfig, NetworkPolicy, NetworkPolicy_DefaultAction, SandboxPolicy, SandboxPolicy_Type, SandboxPolicy_ReadBoundaryMode, SandboxPolicyMergeSources };
