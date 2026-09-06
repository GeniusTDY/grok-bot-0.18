/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:20679-20895
 * Region SHA-256: aeab3ddb998d4e563691a065f3d7df29a1832cfb9765f611f4f29f070b8ecf45
 * Atomic B1 exports: 6 messages + 2 enums = 8
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type RecordingMode = 0 | 1 | 2 | 3;
var RecordingMode: {
  "UNSPECIFIED": 0;
  "START_RECORDING": 1;
  "SAVE_RECORDING": 2;
  "DISCARD_RECORDING": 3;
  0: "UNSPECIFIED";
  1: "START_RECORDING";
  2: "SAVE_RECORDING";
  3: "DISCARD_RECORDING";
};
export type RequestedFilePathRejectedReason = 0 | 1;
var RequestedFilePathRejectedReason: {
  "UNSPECIFIED": 0;
  "SLASHES_NOT_ALLOWED": 1;
  0: "UNSPECIFIED";
  1: "SLASHES_NOT_ALLOWED";
};
(function(RecordingMode2) {
  RecordingMode2[RecordingMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RecordingMode2[RecordingMode2["START_RECORDING"] = 1] = "START_RECORDING";
  RecordingMode2[RecordingMode2["SAVE_RECORDING"] = 2] = "SAVE_RECORDING";
  RecordingMode2[RecordingMode2["DISCARD_RECORDING"] = 3] = "DISCARD_RECORDING";
})(RecordingMode! || (RecordingMode = {} as typeof RecordingMode));
proto3.util.setEnumType(RecordingMode, "agent.v1.RecordingMode", [
  { no: 0, name: "RECORDING_MODE_UNSPECIFIED" },
  { no: 1, name: "RECORDING_MODE_START_RECORDING" },
  { no: 2, name: "RECORDING_MODE_SAVE_RECORDING" },
  { no: 3, name: "RECORDING_MODE_DISCARD_RECORDING" }
]);
(function(RequestedFilePathRejectedReason2) {
  RequestedFilePathRejectedReason2[RequestedFilePathRejectedReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RequestedFilePathRejectedReason2[RequestedFilePathRejectedReason2["SLASHES_NOT_ALLOWED"] = 1] = "SLASHES_NOT_ALLOWED";
})(RequestedFilePathRejectedReason! || (RequestedFilePathRejectedReason = {} as typeof RequestedFilePathRejectedReason));
proto3.util.setEnumType(RequestedFilePathRejectedReason, "agent.v1.RequestedFilePathRejectedReason", [
  { no: 0, name: "REQUESTED_FILE_PATH_REJECTED_REASON_UNSPECIFIED" },
  { no: 1, name: "REQUESTED_FILE_PATH_REJECTED_REASON_SLASHES_NOT_ALLOWED" }
]);
var RecordScreenArgs$Runtime = (() => class _RecordScreenArgs extends Message<_RecordScreenArgs> {
  declare mode: RecordingMode;
  declare toolCallId: string;
  declare saveAsFilename?: string;
  constructor(data?: PartialMessage<_RecordScreenArgs>) {
    super();
    this.mode = RecordingMode.UNSPECIFIED;
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _RecordScreenArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenArgs {
    return new _RecordScreenArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenArgs {
    return new _RecordScreenArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenArgs {
    return new _RecordScreenArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenArgs | PlainMessage<_RecordScreenArgs> | undefined | null, b2: _RecordScreenArgs | PlainMessage<_RecordScreenArgs> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenArgs as unknown as MessageType<_RecordScreenArgs>, a, b2);
  }
})();
export type RecordScreenArgs = InstanceType<typeof RecordScreenArgs$Runtime>;
var RecordScreenArgs: MessageType<RecordScreenArgs> = RecordScreenArgs$Runtime as unknown as MessageType<RecordScreenArgs>;
(RecordScreenArgs as MutableMessageType<RecordScreenArgs>).runtime = proto3;
(RecordScreenArgs as MutableMessageType<RecordScreenArgs>).typeName = "agent.v1.RecordScreenArgs";
(RecordScreenArgs as MutableMessageType<RecordScreenArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "mode", kind: "enum", T: proto3.getEnumType(RecordingMode) },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "save_as_filename", kind: "scalar", T: 9, opt: true }
]);
var RecordScreenResult$Runtime = (() => class _RecordScreenResult extends Message<_RecordScreenResult> {
  declare result: { case: "startSuccess"; value: RecordScreenStartSuccess } | { case: "saveSuccess"; value: RecordScreenSaveSuccess } | { case: "discardSuccess"; value: RecordScreenDiscardSuccess } | { case: "failure"; value: RecordScreenFailure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RecordScreenResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RecordScreenResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenResult {
    return new _RecordScreenResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenResult {
    return new _RecordScreenResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenResult {
    return new _RecordScreenResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenResult | PlainMessage<_RecordScreenResult> | undefined | null, b2: _RecordScreenResult | PlainMessage<_RecordScreenResult> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenResult as unknown as MessageType<_RecordScreenResult>, a, b2);
  }
})();
export type RecordScreenResult = InstanceType<typeof RecordScreenResult$Runtime>;
var RecordScreenResult: MessageType<RecordScreenResult> = RecordScreenResult$Runtime as unknown as MessageType<RecordScreenResult>;
(RecordScreenResult as MutableMessageType<RecordScreenResult>).runtime = proto3;
(RecordScreenResult as MutableMessageType<RecordScreenResult>).typeName = "agent.v1.RecordScreenResult";
(RecordScreenResult as MutableMessageType<RecordScreenResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "start_success", kind: "message", T: RecordScreenStartSuccess, oneof: "result" },
  { no: 2, name: "save_success", kind: "message", T: RecordScreenSaveSuccess, oneof: "result" },
  { no: 3, name: "discard_success", kind: "message", T: RecordScreenDiscardSuccess, oneof: "result" },
  { no: 4, name: "failure", kind: "message", T: RecordScreenFailure, oneof: "result" }
]);
var RecordScreenStartSuccess$Runtime = (() => class _RecordScreenStartSuccess extends Message<_RecordScreenStartSuccess> {
  declare wasPriorRecordingCancelled: boolean;
  declare wasSaveAsFilenameIgnored: boolean;
  constructor(data?: PartialMessage<_RecordScreenStartSuccess>) {
    super();
    this.wasPriorRecordingCancelled = false;
    this.wasSaveAsFilenameIgnored = false;
    proto3.util.initPartial(data, this as _RecordScreenStartSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenStartSuccess {
    return new _RecordScreenStartSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenStartSuccess {
    return new _RecordScreenStartSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenStartSuccess {
    return new _RecordScreenStartSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenStartSuccess | PlainMessage<_RecordScreenStartSuccess> | undefined | null, b2: _RecordScreenStartSuccess | PlainMessage<_RecordScreenStartSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenStartSuccess as unknown as MessageType<_RecordScreenStartSuccess>, a, b2);
  }
})();
export type RecordScreenStartSuccess = InstanceType<typeof RecordScreenStartSuccess$Runtime>;
var RecordScreenStartSuccess: MessageType<RecordScreenStartSuccess> = RecordScreenStartSuccess$Runtime as unknown as MessageType<RecordScreenStartSuccess>;
(RecordScreenStartSuccess as MutableMessageType<RecordScreenStartSuccess>).runtime = proto3;
(RecordScreenStartSuccess as MutableMessageType<RecordScreenStartSuccess>).typeName = "agent.v1.RecordScreenStartSuccess";
(RecordScreenStartSuccess as MutableMessageType<RecordScreenStartSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "was_prior_recording_cancelled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "was_save_as_filename_ignored",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RecordScreenSaveSuccess$Runtime = (() => class _RecordScreenSaveSuccess extends Message<_RecordScreenSaveSuccess> {
  declare path: string;
  declare recordingDurationMs: bigint;
  declare requestedFilePathRejectedReason?: RequestedFilePathRejectedReason;
  constructor(data?: PartialMessage<_RecordScreenSaveSuccess>) {
    super();
    this.path = "";
    this.recordingDurationMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _RecordScreenSaveSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenSaveSuccess {
    return new _RecordScreenSaveSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenSaveSuccess {
    return new _RecordScreenSaveSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenSaveSuccess {
    return new _RecordScreenSaveSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenSaveSuccess | PlainMessage<_RecordScreenSaveSuccess> | undefined | null, b2: _RecordScreenSaveSuccess | PlainMessage<_RecordScreenSaveSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenSaveSuccess as unknown as MessageType<_RecordScreenSaveSuccess>, a, b2);
  }
})();
export type RecordScreenSaveSuccess = InstanceType<typeof RecordScreenSaveSuccess$Runtime>;
var RecordScreenSaveSuccess: MessageType<RecordScreenSaveSuccess> = RecordScreenSaveSuccess$Runtime as unknown as MessageType<RecordScreenSaveSuccess>;
(RecordScreenSaveSuccess as MutableMessageType<RecordScreenSaveSuccess>).runtime = proto3;
(RecordScreenSaveSuccess as MutableMessageType<RecordScreenSaveSuccess>).typeName = "agent.v1.RecordScreenSaveSuccess";
(RecordScreenSaveSuccess as MutableMessageType<RecordScreenSaveSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "recording_duration_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 3, name: "requested_file_path_rejected_reason", kind: "enum", T: proto3.getEnumType(RequestedFilePathRejectedReason), opt: true }
]);
var RecordScreenDiscardSuccess$Runtime = (() => class _RecordScreenDiscardSuccess extends Message<_RecordScreenDiscardSuccess> {
  constructor(data?: PartialMessage<_RecordScreenDiscardSuccess>) {
    super();
    proto3.util.initPartial(data, this as _RecordScreenDiscardSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenDiscardSuccess {
    return new _RecordScreenDiscardSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenDiscardSuccess {
    return new _RecordScreenDiscardSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenDiscardSuccess {
    return new _RecordScreenDiscardSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenDiscardSuccess | PlainMessage<_RecordScreenDiscardSuccess> | undefined | null, b2: _RecordScreenDiscardSuccess | PlainMessage<_RecordScreenDiscardSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenDiscardSuccess as unknown as MessageType<_RecordScreenDiscardSuccess>, a, b2);
  }
})();
export type RecordScreenDiscardSuccess = InstanceType<typeof RecordScreenDiscardSuccess$Runtime>;
var RecordScreenDiscardSuccess: MessageType<RecordScreenDiscardSuccess> = RecordScreenDiscardSuccess$Runtime as unknown as MessageType<RecordScreenDiscardSuccess>;
(RecordScreenDiscardSuccess as MutableMessageType<RecordScreenDiscardSuccess>).runtime = proto3;
(RecordScreenDiscardSuccess as MutableMessageType<RecordScreenDiscardSuccess>).typeName = "agent.v1.RecordScreenDiscardSuccess";
(RecordScreenDiscardSuccess as MutableMessageType<RecordScreenDiscardSuccess>).fields = proto3.util.newFieldList(() => []);
var RecordScreenFailure$Runtime = (() => class _RecordScreenFailure extends Message<_RecordScreenFailure> {
  declare error: string;
  constructor(data?: PartialMessage<_RecordScreenFailure>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _RecordScreenFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecordScreenFailure {
    return new _RecordScreenFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecordScreenFailure {
    return new _RecordScreenFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecordScreenFailure {
    return new _RecordScreenFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _RecordScreenFailure | PlainMessage<_RecordScreenFailure> | undefined | null, b2: _RecordScreenFailure | PlainMessage<_RecordScreenFailure> | undefined | null): boolean {
    return proto3.util.equals(_RecordScreenFailure as unknown as MessageType<_RecordScreenFailure>, a, b2);
  }
})();
export type RecordScreenFailure = InstanceType<typeof RecordScreenFailure$Runtime>;
var RecordScreenFailure: MessageType<RecordScreenFailure> = RecordScreenFailure$Runtime as unknown as MessageType<RecordScreenFailure>;
(RecordScreenFailure as MutableMessageType<RecordScreenFailure>).runtime = proto3;
(RecordScreenFailure as MutableMessageType<RecordScreenFailure>).typeName = "agent.v1.RecordScreenFailure";
(RecordScreenFailure as MutableMessageType<RecordScreenFailure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { RecordingMode, RequestedFilePathRejectedReason, RecordScreenArgs, RecordScreenResult, RecordScreenStartSuccess, RecordScreenSaveSuccess, RecordScreenDiscardSuccess, RecordScreenFailure };
