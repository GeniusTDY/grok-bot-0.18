/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:41704-41827
 * Region SHA-256: dab1666cb81386389e64db13866932d8537694a9e50390f1e57df06091159ed6
 * Atomic B1 exports: 3 messages + 1 enums = 4
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type AdoptOutcome = 0 | 1 | 2 | 3;
var AdoptOutcome: {
  "UNSPECIFIED": 0;
  "ALREADY_PARENTED": 1;
  "EDGE_ONLY": 2;
  "STORE_IMPORT_COMPLETED": 3;
  0: "UNSPECIFIED";
  1: "ALREADY_PARENTED";
  2: "EDGE_ONLY";
  3: "STORE_IMPORT_COMPLETED";
};
(function(AdoptOutcome2) {
  AdoptOutcome2[AdoptOutcome2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AdoptOutcome2[AdoptOutcome2["ALREADY_PARENTED"] = 1] = "ALREADY_PARENTED";
  AdoptOutcome2[AdoptOutcome2["EDGE_ONLY"] = 2] = "EDGE_ONLY";
  AdoptOutcome2[AdoptOutcome2["STORE_IMPORT_COMPLETED"] = 3] = "STORE_IMPORT_COMPLETED";
})(AdoptOutcome! || (AdoptOutcome = {} as typeof AdoptOutcome));
proto3.util.setEnumType(AdoptOutcome, "agent.v1.AdoptOutcome", [
  { no: 0, name: "ADOPT_OUTCOME_UNSPECIFIED" },
  { no: 1, name: "ADOPT_OUTCOME_ALREADY_PARENTED" },
  { no: 2, name: "ADOPT_OUTCOME_EDGE_ONLY" },
  { no: 3, name: "ADOPT_OUTCOME_STORE_IMPORT_COMPLETED" }
]);
var AdoptArgs$Runtime = (() => class _AdoptArgs extends Message<_AdoptArgs> {
  declare sourceAgentId: string;
  constructor(data?: PartialMessage<_AdoptArgs>) {
    super();
    this.sourceAgentId = "";
    proto3.util.initPartial(data, this as _AdoptArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdoptArgs {
    return new _AdoptArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdoptArgs {
    return new _AdoptArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdoptArgs {
    return new _AdoptArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _AdoptArgs | PlainMessage<_AdoptArgs> | undefined | null, b2: _AdoptArgs | PlainMessage<_AdoptArgs> | undefined | null): boolean {
    return proto3.util.equals(_AdoptArgs as unknown as MessageType<_AdoptArgs>, a, b2);
  }
})();
export type AdoptArgs = InstanceType<typeof AdoptArgs$Runtime>;
var AdoptArgs: MessageType<AdoptArgs> = AdoptArgs$Runtime as unknown as MessageType<AdoptArgs>;
(AdoptArgs as MutableMessageType<AdoptArgs>).runtime = proto3;
(AdoptArgs as MutableMessageType<AdoptArgs>).typeName = "agent.v1.AdoptArgs";
(AdoptArgs as MutableMessageType<AdoptArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "source_agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AdoptResult$Runtime = (() => class _AdoptResult extends Message<_AdoptResult> {
  declare sourceAgentId: string;
  declare targetAgentId: string;
  declare projectRootId: string;
  declare result: { case: "success"; value: AdoptOutcome } | { case: "error"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AdoptResult>) {
    super();
    this.sourceAgentId = "";
    this.targetAgentId = "";
    this.projectRootId = "";
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _AdoptResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdoptResult {
    return new _AdoptResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdoptResult {
    return new _AdoptResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdoptResult {
    return new _AdoptResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AdoptResult | PlainMessage<_AdoptResult> | undefined | null, b2: _AdoptResult | PlainMessage<_AdoptResult> | undefined | null): boolean {
    return proto3.util.equals(_AdoptResult as unknown as MessageType<_AdoptResult>, a, b2);
  }
})();
export type AdoptResult = InstanceType<typeof AdoptResult$Runtime>;
var AdoptResult: MessageType<AdoptResult> = AdoptResult$Runtime as unknown as MessageType<AdoptResult>;
(AdoptResult as MutableMessageType<AdoptResult>).runtime = proto3;
(AdoptResult as MutableMessageType<AdoptResult>).typeName = "agent.v1.AdoptResult";
(AdoptResult as MutableMessageType<AdoptResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "source_agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "target_agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "project_root_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "success", kind: "enum", T: proto3.getEnumType(AdoptOutcome), oneof: "result" },
  { no: 5, name: "error", kind: "scalar", T: 9, oneof: "result" }
]);
var AdoptToolCall$Runtime = (() => class _AdoptToolCall extends Message<_AdoptToolCall> {
  declare args?: AdoptArgs;
  declare result?: AdoptResult;
  constructor(data?: PartialMessage<_AdoptToolCall>) {
    super();
    proto3.util.initPartial(data, this as _AdoptToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdoptToolCall {
    return new _AdoptToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdoptToolCall {
    return new _AdoptToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdoptToolCall {
    return new _AdoptToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _AdoptToolCall | PlainMessage<_AdoptToolCall> | undefined | null, b2: _AdoptToolCall | PlainMessage<_AdoptToolCall> | undefined | null): boolean {
    return proto3.util.equals(_AdoptToolCall as unknown as MessageType<_AdoptToolCall>, a, b2);
  }
})();
export type AdoptToolCall = InstanceType<typeof AdoptToolCall$Runtime>;
var AdoptToolCall: MessageType<AdoptToolCall> = AdoptToolCall$Runtime as unknown as MessageType<AdoptToolCall>;
(AdoptToolCall as MutableMessageType<AdoptToolCall>).runtime = proto3;
(AdoptToolCall as MutableMessageType<AdoptToolCall>).typeName = "agent.v1.AdoptToolCall";
(AdoptToolCall as MutableMessageType<AdoptToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: AdoptArgs },
  { no: 2, name: "result", kind: "message", T: AdoptResult }
]);


export { AdoptOutcome, AdoptArgs, AdoptResult, AdoptToolCall };
