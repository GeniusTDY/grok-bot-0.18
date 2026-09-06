/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:39235-39425
 * Region SHA-256: 7d51f9fa641320ff26703a665f0735eb5249e0530c93ee4d645e50df357fe9d6
 * Atomic B1 exports: 5 messages + 0 enums = 5
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var FetchCloudAgentDataArgs$Runtime = (() => class _FetchCloudAgentDataArgs extends Message<_FetchCloudAgentDataArgs> {
  declare bcIds: string[];
  declare sources: string[];
  declare statuses: string[];
  declare includeTeamWide: boolean;
  declare includeArchived: boolean;
  declare limit?: number;
  declare includeTranscript: boolean;
  declare activeSince: string;
  constructor(data?: PartialMessage<_FetchCloudAgentDataArgs>) {
    super();
    this.bcIds = [];
    this.sources = [];
    this.statuses = [];
    this.includeTeamWide = false;
    this.includeArchived = false;
    this.includeTranscript = false;
    this.activeSince = "";
    proto3.util.initPartial(data, this as _FetchCloudAgentDataArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchCloudAgentDataArgs {
    return new _FetchCloudAgentDataArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataArgs {
    return new _FetchCloudAgentDataArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataArgs {
    return new _FetchCloudAgentDataArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchCloudAgentDataArgs | PlainMessage<_FetchCloudAgentDataArgs> | undefined | null, b2: _FetchCloudAgentDataArgs | PlainMessage<_FetchCloudAgentDataArgs> | undefined | null): boolean {
    return proto3.util.equals(_FetchCloudAgentDataArgs as unknown as MessageType<_FetchCloudAgentDataArgs>, a, b2);
  }
})();
export type FetchCloudAgentDataArgs = InstanceType<typeof FetchCloudAgentDataArgs$Runtime>;
var FetchCloudAgentDataArgs: MessageType<FetchCloudAgentDataArgs> = FetchCloudAgentDataArgs$Runtime as unknown as MessageType<FetchCloudAgentDataArgs>;
(FetchCloudAgentDataArgs as MutableMessageType<FetchCloudAgentDataArgs>).runtime = proto3;
(FetchCloudAgentDataArgs as MutableMessageType<FetchCloudAgentDataArgs>).typeName = "agent.v1.FetchCloudAgentDataArgs";
(FetchCloudAgentDataArgs as MutableMessageType<FetchCloudAgentDataArgs>).fields = proto3.util.newFieldList(() => [
  { no: 4, name: "bc_ids", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "sources", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "statuses", kind: "scalar", T: 9, repeated: true },
  {
    no: 8,
    name: "include_team_wide",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 9,
    name: "include_archived",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 10, name: "limit", kind: "scalar", T: 5, opt: true },
  {
    no: 12,
    name: "include_transcript",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 13,
    name: "active_since",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FetchCloudAgentDataResult$Runtime = (() => class _FetchCloudAgentDataResult extends Message<_FetchCloudAgentDataResult> {
  declare result: { case: "success"; value: FetchCloudAgentDataSuccess } | { case: "error"; value: FetchCloudAgentDataError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_FetchCloudAgentDataResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _FetchCloudAgentDataResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchCloudAgentDataResult {
    return new _FetchCloudAgentDataResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataResult {
    return new _FetchCloudAgentDataResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataResult {
    return new _FetchCloudAgentDataResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchCloudAgentDataResult | PlainMessage<_FetchCloudAgentDataResult> | undefined | null, b2: _FetchCloudAgentDataResult | PlainMessage<_FetchCloudAgentDataResult> | undefined | null): boolean {
    return proto3.util.equals(_FetchCloudAgentDataResult as unknown as MessageType<_FetchCloudAgentDataResult>, a, b2);
  }
})();
export type FetchCloudAgentDataResult = InstanceType<typeof FetchCloudAgentDataResult$Runtime>;
var FetchCloudAgentDataResult: MessageType<FetchCloudAgentDataResult> = FetchCloudAgentDataResult$Runtime as unknown as MessageType<FetchCloudAgentDataResult>;
(FetchCloudAgentDataResult as MutableMessageType<FetchCloudAgentDataResult>).runtime = proto3;
(FetchCloudAgentDataResult as MutableMessageType<FetchCloudAgentDataResult>).typeName = "agent.v1.FetchCloudAgentDataResult";
(FetchCloudAgentDataResult as MutableMessageType<FetchCloudAgentDataResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: FetchCloudAgentDataSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: FetchCloudAgentDataError, oneof: "result" }
]);
var FetchCloudAgentDataSuccess$Runtime = (() => class _FetchCloudAgentDataSuccess extends Message<_FetchCloudAgentDataSuccess> {
  declare summary: string;
  declare agentCount: number;
  declare writtenPaths: string[];
  declare unavailableBcIds: string[];
  constructor(data?: PartialMessage<_FetchCloudAgentDataSuccess>) {
    super();
    this.summary = "";
    this.agentCount = 0;
    this.writtenPaths = [];
    this.unavailableBcIds = [];
    proto3.util.initPartial(data, this as _FetchCloudAgentDataSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchCloudAgentDataSuccess {
    return new _FetchCloudAgentDataSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataSuccess {
    return new _FetchCloudAgentDataSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataSuccess {
    return new _FetchCloudAgentDataSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchCloudAgentDataSuccess | PlainMessage<_FetchCloudAgentDataSuccess> | undefined | null, b2: _FetchCloudAgentDataSuccess | PlainMessage<_FetchCloudAgentDataSuccess> | undefined | null): boolean {
    return proto3.util.equals(_FetchCloudAgentDataSuccess as unknown as MessageType<_FetchCloudAgentDataSuccess>, a, b2);
  }
})();
export type FetchCloudAgentDataSuccess = InstanceType<typeof FetchCloudAgentDataSuccess$Runtime>;
var FetchCloudAgentDataSuccess: MessageType<FetchCloudAgentDataSuccess> = FetchCloudAgentDataSuccess$Runtime as unknown as MessageType<FetchCloudAgentDataSuccess>;
(FetchCloudAgentDataSuccess as MutableMessageType<FetchCloudAgentDataSuccess>).runtime = proto3;
(FetchCloudAgentDataSuccess as MutableMessageType<FetchCloudAgentDataSuccess>).typeName = "agent.v1.FetchCloudAgentDataSuccess";
(FetchCloudAgentDataSuccess as MutableMessageType<FetchCloudAgentDataSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "agent_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "written_paths", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "unavailable_bc_ids", kind: "scalar", T: 9, repeated: true }
]);
var FetchCloudAgentDataError$Runtime = (() => class _FetchCloudAgentDataError extends Message<_FetchCloudAgentDataError> {
  declare error: string;
  constructor(data?: PartialMessage<_FetchCloudAgentDataError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _FetchCloudAgentDataError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchCloudAgentDataError {
    return new _FetchCloudAgentDataError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataError {
    return new _FetchCloudAgentDataError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataError {
    return new _FetchCloudAgentDataError().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchCloudAgentDataError | PlainMessage<_FetchCloudAgentDataError> | undefined | null, b2: _FetchCloudAgentDataError | PlainMessage<_FetchCloudAgentDataError> | undefined | null): boolean {
    return proto3.util.equals(_FetchCloudAgentDataError as unknown as MessageType<_FetchCloudAgentDataError>, a, b2);
  }
})();
export type FetchCloudAgentDataError = InstanceType<typeof FetchCloudAgentDataError$Runtime>;
var FetchCloudAgentDataError: MessageType<FetchCloudAgentDataError> = FetchCloudAgentDataError$Runtime as unknown as MessageType<FetchCloudAgentDataError>;
(FetchCloudAgentDataError as MutableMessageType<FetchCloudAgentDataError>).runtime = proto3;
(FetchCloudAgentDataError as MutableMessageType<FetchCloudAgentDataError>).typeName = "agent.v1.FetchCloudAgentDataError";
(FetchCloudAgentDataError as MutableMessageType<FetchCloudAgentDataError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FetchCloudAgentDataToolCall$Runtime = (() => class _FetchCloudAgentDataToolCall extends Message<_FetchCloudAgentDataToolCall> {
  declare args?: FetchCloudAgentDataArgs;
  declare result?: FetchCloudAgentDataResult;
  constructor(data?: PartialMessage<_FetchCloudAgentDataToolCall>) {
    super();
    proto3.util.initPartial(data, this as _FetchCloudAgentDataToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchCloudAgentDataToolCall {
    return new _FetchCloudAgentDataToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataToolCall {
    return new _FetchCloudAgentDataToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchCloudAgentDataToolCall {
    return new _FetchCloudAgentDataToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchCloudAgentDataToolCall | PlainMessage<_FetchCloudAgentDataToolCall> | undefined | null, b2: _FetchCloudAgentDataToolCall | PlainMessage<_FetchCloudAgentDataToolCall> | undefined | null): boolean {
    return proto3.util.equals(_FetchCloudAgentDataToolCall as unknown as MessageType<_FetchCloudAgentDataToolCall>, a, b2);
  }
})();
export type FetchCloudAgentDataToolCall = InstanceType<typeof FetchCloudAgentDataToolCall$Runtime>;
var FetchCloudAgentDataToolCall: MessageType<FetchCloudAgentDataToolCall> = FetchCloudAgentDataToolCall$Runtime as unknown as MessageType<FetchCloudAgentDataToolCall>;
(FetchCloudAgentDataToolCall as MutableMessageType<FetchCloudAgentDataToolCall>).runtime = proto3;
(FetchCloudAgentDataToolCall as MutableMessageType<FetchCloudAgentDataToolCall>).typeName = "agent.v1.FetchCloudAgentDataToolCall";
(FetchCloudAgentDataToolCall as MutableMessageType<FetchCloudAgentDataToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: FetchCloudAgentDataArgs },
  { no: 2, name: "result", kind: "message", T: FetchCloudAgentDataResult }
]);


export { FetchCloudAgentDataArgs, FetchCloudAgentDataResult, FetchCloudAgentDataSuccess, FetchCloudAgentDataError, FetchCloudAgentDataToolCall };
