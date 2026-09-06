/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:38330-38608
 * Region SHA-256: ae822f442adf76c98ce77bf465873319e8630df03bd5fd5ea481e7ef8946c120
 * Atomic B1 exports: 8 messages + 1 enums = 9
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ReplaceEnvMode = 0 | 1 | 2 | 3;
var ReplaceEnvMode: {
  "UNSPECIFIED": 0;
  "CUSTOM": 1;
  "CLEAN_SLATE": 2;
  "DEFAULT": 3;
  0: "UNSPECIFIED";
  1: "CUSTOM";
  2: "CLEAN_SLATE";
  3: "DEFAULT";
};
(function(ReplaceEnvMode2) {
  ReplaceEnvMode2[ReplaceEnvMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ReplaceEnvMode2[ReplaceEnvMode2["CUSTOM"] = 1] = "CUSTOM";
  ReplaceEnvMode2[ReplaceEnvMode2["CLEAN_SLATE"] = 2] = "CLEAN_SLATE";
  ReplaceEnvMode2[ReplaceEnvMode2["DEFAULT"] = 3] = "DEFAULT";
})(ReplaceEnvMode! || (ReplaceEnvMode = {} as typeof ReplaceEnvMode));
proto3.util.setEnumType(ReplaceEnvMode, "agent.v1.ReplaceEnvMode", [
  { no: 0, name: "REPLACE_ENV_MODE_UNSPECIFIED" },
  { no: 1, name: "REPLACE_ENV_MODE_CUSTOM" },
  { no: 2, name: "REPLACE_ENV_MODE_CLEAN_SLATE" },
  { no: 3, name: "REPLACE_ENV_MODE_DEFAULT" }
]);
var RepoCheckoutRefOverride$Runtime = (() => class _RepoCheckoutRefOverride extends Message<_RepoCheckoutRefOverride> {
  declare repoUrl: string;
  declare ref: string;
  constructor(data?: PartialMessage<_RepoCheckoutRefOverride>) {
    super();
    this.repoUrl = "";
    this.ref = "";
    proto3.util.initPartial(data, this as _RepoCheckoutRefOverride);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoCheckoutRefOverride {
    return new _RepoCheckoutRefOverride().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoCheckoutRefOverride {
    return new _RepoCheckoutRefOverride().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoCheckoutRefOverride {
    return new _RepoCheckoutRefOverride().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoCheckoutRefOverride | PlainMessage<_RepoCheckoutRefOverride> | undefined | null, b2: _RepoCheckoutRefOverride | PlainMessage<_RepoCheckoutRefOverride> | undefined | null): boolean {
    return proto3.util.equals(_RepoCheckoutRefOverride as unknown as MessageType<_RepoCheckoutRefOverride>, a, b2);
  }
})();
export type RepoCheckoutRefOverride = InstanceType<typeof RepoCheckoutRefOverride$Runtime>;
var RepoCheckoutRefOverride: MessageType<RepoCheckoutRefOverride> = RepoCheckoutRefOverride$Runtime as unknown as MessageType<RepoCheckoutRefOverride>;
(RepoCheckoutRefOverride as MutableMessageType<RepoCheckoutRefOverride>).runtime = proto3;
(RepoCheckoutRefOverride as MutableMessageType<RepoCheckoutRefOverride>).typeName = "agent.v1.RepoCheckoutRefOverride";
(RepoCheckoutRefOverride as MutableMessageType<RepoCheckoutRefOverride>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
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
  }
]);
var ReplaceEnvConfig$Runtime = (() => class _ReplaceEnvConfig extends Message<_ReplaceEnvConfig> {
  declare installScript: string;
  declare dockerfileContents: string;
  constructor(data?: PartialMessage<_ReplaceEnvConfig>) {
    super();
    this.installScript = "";
    this.dockerfileContents = "";
    proto3.util.initPartial(data, this as _ReplaceEnvConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvConfig {
    return new _ReplaceEnvConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvConfig {
    return new _ReplaceEnvConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvConfig {
    return new _ReplaceEnvConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvConfig | PlainMessage<_ReplaceEnvConfig> | undefined | null, b2: _ReplaceEnvConfig | PlainMessage<_ReplaceEnvConfig> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvConfig as unknown as MessageType<_ReplaceEnvConfig>, a, b2);
  }
})();
export type ReplaceEnvConfig = InstanceType<typeof ReplaceEnvConfig$Runtime>;
var ReplaceEnvConfig: MessageType<ReplaceEnvConfig> = ReplaceEnvConfig$Runtime as unknown as MessageType<ReplaceEnvConfig>;
(ReplaceEnvConfig as MutableMessageType<ReplaceEnvConfig>).runtime = proto3;
(ReplaceEnvConfig as MutableMessageType<ReplaceEnvConfig>).typeName = "agent.v1.ReplaceEnvConfig";
(ReplaceEnvConfig as MutableMessageType<ReplaceEnvConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "install_script",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "dockerfile_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReplaceEnvArgs$Runtime = (() => class _ReplaceEnvArgs extends Message<_ReplaceEnvArgs> {
  declare config?: ReplaceEnvConfig;
  declare mode: ReplaceEnvMode;
  declare checkoutRefOverrides: RepoCheckoutRefOverride[];
  constructor(data?: PartialMessage<_ReplaceEnvArgs>) {
    super();
    this.mode = ReplaceEnvMode.UNSPECIFIED;
    this.checkoutRefOverrides = [];
    proto3.util.initPartial(data, this as _ReplaceEnvArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvArgs {
    return new _ReplaceEnvArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvArgs {
    return new _ReplaceEnvArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvArgs {
    return new _ReplaceEnvArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvArgs | PlainMessage<_ReplaceEnvArgs> | undefined | null, b2: _ReplaceEnvArgs | PlainMessage<_ReplaceEnvArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvArgs as unknown as MessageType<_ReplaceEnvArgs>, a, b2);
  }
})();
export type ReplaceEnvArgs = InstanceType<typeof ReplaceEnvArgs$Runtime>;
var ReplaceEnvArgs: MessageType<ReplaceEnvArgs> = ReplaceEnvArgs$Runtime as unknown as MessageType<ReplaceEnvArgs>;
(ReplaceEnvArgs as MutableMessageType<ReplaceEnvArgs>).runtime = proto3;
(ReplaceEnvArgs as MutableMessageType<ReplaceEnvArgs>).typeName = "agent.v1.ReplaceEnvArgs";
(ReplaceEnvArgs as MutableMessageType<ReplaceEnvArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "config", kind: "message", T: ReplaceEnvConfig },
  { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(ReplaceEnvMode) },
  { no: 3, name: "checkout_ref_overrides", kind: "message", T: RepoCheckoutRefOverride, repeated: true }
]);
var ReplaceEnvSuccess$Runtime = (() => class _ReplaceEnvSuccess extends Message<_ReplaceEnvSuccess> {
  declare setupLogs: string;
  constructor(data?: PartialMessage<_ReplaceEnvSuccess>) {
    super();
    this.setupLogs = "";
    proto3.util.initPartial(data, this as _ReplaceEnvSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvSuccess {
    return new _ReplaceEnvSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvSuccess {
    return new _ReplaceEnvSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvSuccess {
    return new _ReplaceEnvSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvSuccess | PlainMessage<_ReplaceEnvSuccess> | undefined | null, b2: _ReplaceEnvSuccess | PlainMessage<_ReplaceEnvSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvSuccess as unknown as MessageType<_ReplaceEnvSuccess>, a, b2);
  }
})();
export type ReplaceEnvSuccess = InstanceType<typeof ReplaceEnvSuccess$Runtime>;
var ReplaceEnvSuccess: MessageType<ReplaceEnvSuccess> = ReplaceEnvSuccess$Runtime as unknown as MessageType<ReplaceEnvSuccess>;
(ReplaceEnvSuccess as MutableMessageType<ReplaceEnvSuccess>).runtime = proto3;
(ReplaceEnvSuccess as MutableMessageType<ReplaceEnvSuccess>).typeName = "agent.v1.ReplaceEnvSuccess";
(ReplaceEnvSuccess as MutableMessageType<ReplaceEnvSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "setup_logs",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReplaceEnvFailure$Runtime = (() => class _ReplaceEnvFailure extends Message<_ReplaceEnvFailure> {
  declare errorMessage: string;
  declare setupLogs: string;
  constructor(data?: PartialMessage<_ReplaceEnvFailure>) {
    super();
    this.errorMessage = "";
    this.setupLogs = "";
    proto3.util.initPartial(data, this as _ReplaceEnvFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvFailure {
    return new _ReplaceEnvFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvFailure {
    return new _ReplaceEnvFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvFailure {
    return new _ReplaceEnvFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvFailure | PlainMessage<_ReplaceEnvFailure> | undefined | null, b2: _ReplaceEnvFailure | PlainMessage<_ReplaceEnvFailure> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvFailure as unknown as MessageType<_ReplaceEnvFailure>, a, b2);
  }
})();
export type ReplaceEnvFailure = InstanceType<typeof ReplaceEnvFailure$Runtime>;
var ReplaceEnvFailure: MessageType<ReplaceEnvFailure> = ReplaceEnvFailure$Runtime as unknown as MessageType<ReplaceEnvFailure>;
(ReplaceEnvFailure as MutableMessageType<ReplaceEnvFailure>).runtime = proto3;
(ReplaceEnvFailure as MutableMessageType<ReplaceEnvFailure>).typeName = "agent.v1.ReplaceEnvFailure";
(ReplaceEnvFailure as MutableMessageType<ReplaceEnvFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "setup_logs",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReplaceEnvResult$Runtime = (() => class _ReplaceEnvResult extends Message<_ReplaceEnvResult> {
  declare result: { case: "success"; value: ReplaceEnvSuccess } | { case: "failure"; value: ReplaceEnvFailure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReplaceEnvResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReplaceEnvResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvResult {
    return new _ReplaceEnvResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvResult {
    return new _ReplaceEnvResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvResult {
    return new _ReplaceEnvResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvResult | PlainMessage<_ReplaceEnvResult> | undefined | null, b2: _ReplaceEnvResult | PlainMessage<_ReplaceEnvResult> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvResult as unknown as MessageType<_ReplaceEnvResult>, a, b2);
  }
})();
export type ReplaceEnvResult = InstanceType<typeof ReplaceEnvResult$Runtime>;
var ReplaceEnvResult: MessageType<ReplaceEnvResult> = ReplaceEnvResult$Runtime as unknown as MessageType<ReplaceEnvResult>;
(ReplaceEnvResult as MutableMessageType<ReplaceEnvResult>).runtime = proto3;
(ReplaceEnvResult as MutableMessageType<ReplaceEnvResult>).typeName = "agent.v1.ReplaceEnvResult";
(ReplaceEnvResult as MutableMessageType<ReplaceEnvResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReplaceEnvSuccess, oneof: "result" },
  { no: 2, name: "failure", kind: "message", T: ReplaceEnvFailure, oneof: "result" }
]);
var ReplaceEnvToolCall$Runtime = (() => class _ReplaceEnvToolCall extends Message<_ReplaceEnvToolCall> {
  declare args?: ReplaceEnvArgs;
  declare result?: ReplaceEnvResult;
  declare associatedPodKey: string;
  constructor(data?: PartialMessage<_ReplaceEnvToolCall>) {
    super();
    this.associatedPodKey = "";
    proto3.util.initPartial(data, this as _ReplaceEnvToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvToolCall {
    return new _ReplaceEnvToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvToolCall {
    return new _ReplaceEnvToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvToolCall {
    return new _ReplaceEnvToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvToolCall | PlainMessage<_ReplaceEnvToolCall> | undefined | null, b2: _ReplaceEnvToolCall | PlainMessage<_ReplaceEnvToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvToolCall as unknown as MessageType<_ReplaceEnvToolCall>, a, b2);
  }
})();
export type ReplaceEnvToolCall = InstanceType<typeof ReplaceEnvToolCall$Runtime>;
var ReplaceEnvToolCall: MessageType<ReplaceEnvToolCall> = ReplaceEnvToolCall$Runtime as unknown as MessageType<ReplaceEnvToolCall>;
(ReplaceEnvToolCall as MutableMessageType<ReplaceEnvToolCall>).runtime = proto3;
(ReplaceEnvToolCall as MutableMessageType<ReplaceEnvToolCall>).typeName = "agent.v1.ReplaceEnvToolCall";
(ReplaceEnvToolCall as MutableMessageType<ReplaceEnvToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReplaceEnvArgs },
  { no: 2, name: "result", kind: "message", T: ReplaceEnvResult },
  {
    no: 3,
    name: "associated_pod_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReplaceEnvToolCallDelta$Runtime = (() => class _ReplaceEnvToolCallDelta extends Message<_ReplaceEnvToolCallDelta> {
  declare associatedPodKey: string;
  constructor(data?: PartialMessage<_ReplaceEnvToolCallDelta>) {
    super();
    this.associatedPodKey = "";
    proto3.util.initPartial(data, this as _ReplaceEnvToolCallDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReplaceEnvToolCallDelta {
    return new _ReplaceEnvToolCallDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReplaceEnvToolCallDelta {
    return new _ReplaceEnvToolCallDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReplaceEnvToolCallDelta {
    return new _ReplaceEnvToolCallDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ReplaceEnvToolCallDelta | PlainMessage<_ReplaceEnvToolCallDelta> | undefined | null, b2: _ReplaceEnvToolCallDelta | PlainMessage<_ReplaceEnvToolCallDelta> | undefined | null): boolean {
    return proto3.util.equals(_ReplaceEnvToolCallDelta as unknown as MessageType<_ReplaceEnvToolCallDelta>, a, b2);
  }
})();
export type ReplaceEnvToolCallDelta = InstanceType<typeof ReplaceEnvToolCallDelta$Runtime>;
var ReplaceEnvToolCallDelta: MessageType<ReplaceEnvToolCallDelta> = ReplaceEnvToolCallDelta$Runtime as unknown as MessageType<ReplaceEnvToolCallDelta>;
(ReplaceEnvToolCallDelta as MutableMessageType<ReplaceEnvToolCallDelta>).runtime = proto3;
(ReplaceEnvToolCallDelta as MutableMessageType<ReplaceEnvToolCallDelta>).typeName = "agent.v1.ReplaceEnvToolCallDelta";
(ReplaceEnvToolCallDelta as MutableMessageType<ReplaceEnvToolCallDelta>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "associated_pod_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ReplaceEnvMode, RepoCheckoutRefOverride, ReplaceEnvConfig, ReplaceEnvArgs, ReplaceEnvSuccess, ReplaceEnvFailure, ReplaceEnvResult, ReplaceEnvToolCall, ReplaceEnvToolCallDelta };
