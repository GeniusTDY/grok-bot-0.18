/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:17339-17752
 * Region SHA-256: ce268e46ea4b589840e9b87f70bb9d3cf68aad491498727d6d8e1e9fc9edfa25
 * Atomic B1 exports: 14 messages + 2 enums = 16
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type CustomSubagentPermissionMode = 0 | 1 | 2 | 3;
var CustomSubagentPermissionMode: {
  "UNSPECIFIED": 0;
  "DEFAULT": 1;
  "READONLY": 2;
  "AGENT_ONLY": 3;
  0: "UNSPECIFIED";
  1: "DEFAULT";
  2: "READONLY";
  3: "AGENT_ONLY";
};
export type TaskMode = 0 | 1 | 2;
var TaskMode: {
  "UNSPECIFIED": 0;
  "AGENT": 1;
  "PLAN": 2;
  0: "UNSPECIFIED";
  1: "AGENT";
  2: "PLAN";
};
(function(CustomSubagentPermissionMode2) {
  CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["DEFAULT"] = 1] = "DEFAULT";
  CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["READONLY"] = 2] = "READONLY";
  CustomSubagentPermissionMode2[CustomSubagentPermissionMode2["AGENT_ONLY"] = 3] = "AGENT_ONLY";
})(CustomSubagentPermissionMode! || (CustomSubagentPermissionMode = {} as typeof CustomSubagentPermissionMode));
proto3.util.setEnumType(CustomSubagentPermissionMode, "agent.v1.CustomSubagentPermissionMode", [
  { no: 0, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_UNSPECIFIED" },
  { no: 1, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_DEFAULT" },
  { no: 2, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_READONLY" },
  { no: 3, name: "CUSTOM_SUBAGENT_PERMISSION_MODE_AGENT_ONLY" }
]);
(function(TaskMode2) {
  TaskMode2[TaskMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  TaskMode2[TaskMode2["AGENT"] = 1] = "AGENT";
  TaskMode2[TaskMode2["PLAN"] = 2] = "PLAN";
})(TaskMode! || (TaskMode = {} as typeof TaskMode));
proto3.util.setEnumType(TaskMode, "agent.v1.TaskMode", [
  { no: 0, name: "TASK_MODE_UNSPECIFIED" },
  { no: 1, name: "TASK_MODE_AGENT" },
  { no: 2, name: "TASK_MODE_PLAN" }
]);
var SubagentType$Runtime = (() => class _SubagentType extends Message<_SubagentType> {
  declare type: { case: "unspecified"; value: SubagentTypeUnspecified } | { case: "computerUse"; value: SubagentTypeComputerUse } | { case: "custom"; value: SubagentTypeCustom } | { case: "explore"; value: SubagentTypeExplore } | { case: "mediaReview"; value: SubagentTypeMediaReview } | { case: "bash"; value: SubagentTypeBash } | { case: "browserUse"; value: SubagentTypeBrowserUse } | { case: "shell"; value: SubagentTypeShell } | { case: "vmSetupHelper"; value: SubagentTypeVmSetupHelper } | { case: "debug"; value: SubagentTypeDebug } | { case: "cursorGuide"; value: SubagentTypeCursorGuide } | { case: "watchVideo"; value: SubagentTypeWatchVideo } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentType>) {
    super();
    this.type = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentType);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentType {
    return new _SubagentType().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentType {
    return new _SubagentType().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentType {
    return new _SubagentType().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentType | PlainMessage<_SubagentType> | undefined | null, b2: _SubagentType | PlainMessage<_SubagentType> | undefined | null): boolean {
    return proto3.util.equals(_SubagentType as unknown as MessageType<_SubagentType>, a, b2);
  }
})();
export type SubagentType = InstanceType<typeof SubagentType$Runtime>;
var SubagentType: MessageType<SubagentType> = SubagentType$Runtime as unknown as MessageType<SubagentType>;
(SubagentType as MutableMessageType<SubagentType>).runtime = proto3;
(SubagentType as MutableMessageType<SubagentType>).typeName = "agent.v1.SubagentType";
(SubagentType as MutableMessageType<SubagentType>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "unspecified", kind: "message", T: SubagentTypeUnspecified, oneof: "type" },
  { no: 2, name: "computer_use", kind: "message", T: SubagentTypeComputerUse, oneof: "type" },
  { no: 3, name: "custom", kind: "message", T: SubagentTypeCustom, oneof: "type" },
  { no: 4, name: "explore", kind: "message", T: SubagentTypeExplore, oneof: "type" },
  { no: 5, name: "media_review", kind: "message", T: SubagentTypeMediaReview, oneof: "type" },
  { no: 6, name: "bash", kind: "message", T: SubagentTypeBash, oneof: "type" },
  { no: 7, name: "browser_use", kind: "message", T: SubagentTypeBrowserUse, oneof: "type" },
  { no: 8, name: "shell", kind: "message", T: SubagentTypeShell, oneof: "type" },
  { no: 9, name: "vm_setup_helper", kind: "message", T: SubagentTypeVmSetupHelper, oneof: "type" },
  { no: 10, name: "debug", kind: "message", T: SubagentTypeDebug, oneof: "type" },
  { no: 11, name: "cursor_guide", kind: "message", T: SubagentTypeCursorGuide, oneof: "type" },
  { no: 12, name: "watch_video", kind: "message", T: SubagentTypeWatchVideo, oneof: "type" }
]);
var SubagentTypeUnspecified$Runtime = (() => class _SubagentTypeUnspecified extends Message<_SubagentTypeUnspecified> {
  constructor(data?: PartialMessage<_SubagentTypeUnspecified>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeUnspecified);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeUnspecified {
    return new _SubagentTypeUnspecified().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeUnspecified {
    return new _SubagentTypeUnspecified().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeUnspecified {
    return new _SubagentTypeUnspecified().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeUnspecified | PlainMessage<_SubagentTypeUnspecified> | undefined | null, b2: _SubagentTypeUnspecified | PlainMessage<_SubagentTypeUnspecified> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeUnspecified as unknown as MessageType<_SubagentTypeUnspecified>, a, b2);
  }
})();
export type SubagentTypeUnspecified = InstanceType<typeof SubagentTypeUnspecified$Runtime>;
var SubagentTypeUnspecified: MessageType<SubagentTypeUnspecified> = SubagentTypeUnspecified$Runtime as unknown as MessageType<SubagentTypeUnspecified>;
(SubagentTypeUnspecified as MutableMessageType<SubagentTypeUnspecified>).runtime = proto3;
(SubagentTypeUnspecified as MutableMessageType<SubagentTypeUnspecified>).typeName = "agent.v1.SubagentTypeUnspecified";
(SubagentTypeUnspecified as MutableMessageType<SubagentTypeUnspecified>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeComputerUse$Runtime = (() => class _SubagentTypeComputerUse extends Message<_SubagentTypeComputerUse> {
  constructor(data?: PartialMessage<_SubagentTypeComputerUse>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeComputerUse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeComputerUse {
    return new _SubagentTypeComputerUse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeComputerUse {
    return new _SubagentTypeComputerUse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeComputerUse {
    return new _SubagentTypeComputerUse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeComputerUse | PlainMessage<_SubagentTypeComputerUse> | undefined | null, b2: _SubagentTypeComputerUse | PlainMessage<_SubagentTypeComputerUse> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeComputerUse as unknown as MessageType<_SubagentTypeComputerUse>, a, b2);
  }
})();
export type SubagentTypeComputerUse = InstanceType<typeof SubagentTypeComputerUse$Runtime>;
var SubagentTypeComputerUse: MessageType<SubagentTypeComputerUse> = SubagentTypeComputerUse$Runtime as unknown as MessageType<SubagentTypeComputerUse>;
(SubagentTypeComputerUse as MutableMessageType<SubagentTypeComputerUse>).runtime = proto3;
(SubagentTypeComputerUse as MutableMessageType<SubagentTypeComputerUse>).typeName = "agent.v1.SubagentTypeComputerUse";
(SubagentTypeComputerUse as MutableMessageType<SubagentTypeComputerUse>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeExplore$Runtime = (() => class _SubagentTypeExplore extends Message<_SubagentTypeExplore> {
  constructor(data?: PartialMessage<_SubagentTypeExplore>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeExplore);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeExplore {
    return new _SubagentTypeExplore().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeExplore {
    return new _SubagentTypeExplore().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeExplore {
    return new _SubagentTypeExplore().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeExplore | PlainMessage<_SubagentTypeExplore> | undefined | null, b2: _SubagentTypeExplore | PlainMessage<_SubagentTypeExplore> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeExplore as unknown as MessageType<_SubagentTypeExplore>, a, b2);
  }
})();
export type SubagentTypeExplore = InstanceType<typeof SubagentTypeExplore$Runtime>;
var SubagentTypeExplore: MessageType<SubagentTypeExplore> = SubagentTypeExplore$Runtime as unknown as MessageType<SubagentTypeExplore>;
(SubagentTypeExplore as MutableMessageType<SubagentTypeExplore>).runtime = proto3;
(SubagentTypeExplore as MutableMessageType<SubagentTypeExplore>).typeName = "agent.v1.SubagentTypeExplore";
(SubagentTypeExplore as MutableMessageType<SubagentTypeExplore>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeMediaReview$Runtime = (() => class _SubagentTypeMediaReview extends Message<_SubagentTypeMediaReview> {
  constructor(data?: PartialMessage<_SubagentTypeMediaReview>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeMediaReview);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeMediaReview {
    return new _SubagentTypeMediaReview().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeMediaReview {
    return new _SubagentTypeMediaReview().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeMediaReview {
    return new _SubagentTypeMediaReview().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeMediaReview | PlainMessage<_SubagentTypeMediaReview> | undefined | null, b2: _SubagentTypeMediaReview | PlainMessage<_SubagentTypeMediaReview> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeMediaReview as unknown as MessageType<_SubagentTypeMediaReview>, a, b2);
  }
})();
export type SubagentTypeMediaReview = InstanceType<typeof SubagentTypeMediaReview$Runtime>;
var SubagentTypeMediaReview: MessageType<SubagentTypeMediaReview> = SubagentTypeMediaReview$Runtime as unknown as MessageType<SubagentTypeMediaReview>;
(SubagentTypeMediaReview as MutableMessageType<SubagentTypeMediaReview>).runtime = proto3;
(SubagentTypeMediaReview as MutableMessageType<SubagentTypeMediaReview>).typeName = "agent.v1.SubagentTypeMediaReview";
(SubagentTypeMediaReview as MutableMessageType<SubagentTypeMediaReview>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeBash$Runtime = (() => class _SubagentTypeBash extends Message<_SubagentTypeBash> {
  constructor(data?: PartialMessage<_SubagentTypeBash>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeBash);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeBash {
    return new _SubagentTypeBash().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeBash {
    return new _SubagentTypeBash().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeBash {
    return new _SubagentTypeBash().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeBash | PlainMessage<_SubagentTypeBash> | undefined | null, b2: _SubagentTypeBash | PlainMessage<_SubagentTypeBash> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeBash as unknown as MessageType<_SubagentTypeBash>, a, b2);
  }
})();
export type SubagentTypeBash = InstanceType<typeof SubagentTypeBash$Runtime>;
var SubagentTypeBash: MessageType<SubagentTypeBash> = SubagentTypeBash$Runtime as unknown as MessageType<SubagentTypeBash>;
(SubagentTypeBash as MutableMessageType<SubagentTypeBash>).runtime = proto3;
(SubagentTypeBash as MutableMessageType<SubagentTypeBash>).typeName = "agent.v1.SubagentTypeBash";
(SubagentTypeBash as MutableMessageType<SubagentTypeBash>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeShell$Runtime = (() => class _SubagentTypeShell extends Message<_SubagentTypeShell> {
  constructor(data?: PartialMessage<_SubagentTypeShell>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeShell);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeShell {
    return new _SubagentTypeShell().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeShell {
    return new _SubagentTypeShell().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeShell {
    return new _SubagentTypeShell().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeShell | PlainMessage<_SubagentTypeShell> | undefined | null, b2: _SubagentTypeShell | PlainMessage<_SubagentTypeShell> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeShell as unknown as MessageType<_SubagentTypeShell>, a, b2);
  }
})();
export type SubagentTypeShell = InstanceType<typeof SubagentTypeShell$Runtime>;
var SubagentTypeShell: MessageType<SubagentTypeShell> = SubagentTypeShell$Runtime as unknown as MessageType<SubagentTypeShell>;
(SubagentTypeShell as MutableMessageType<SubagentTypeShell>).runtime = proto3;
(SubagentTypeShell as MutableMessageType<SubagentTypeShell>).typeName = "agent.v1.SubagentTypeShell";
(SubagentTypeShell as MutableMessageType<SubagentTypeShell>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeBrowserUse$Runtime = (() => class _SubagentTypeBrowserUse extends Message<_SubagentTypeBrowserUse> {
  constructor(data?: PartialMessage<_SubagentTypeBrowserUse>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeBrowserUse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeBrowserUse {
    return new _SubagentTypeBrowserUse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeBrowserUse {
    return new _SubagentTypeBrowserUse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeBrowserUse {
    return new _SubagentTypeBrowserUse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeBrowserUse | PlainMessage<_SubagentTypeBrowserUse> | undefined | null, b2: _SubagentTypeBrowserUse | PlainMessage<_SubagentTypeBrowserUse> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeBrowserUse as unknown as MessageType<_SubagentTypeBrowserUse>, a, b2);
  }
})();
export type SubagentTypeBrowserUse = InstanceType<typeof SubagentTypeBrowserUse$Runtime>;
var SubagentTypeBrowserUse: MessageType<SubagentTypeBrowserUse> = SubagentTypeBrowserUse$Runtime as unknown as MessageType<SubagentTypeBrowserUse>;
(SubagentTypeBrowserUse as MutableMessageType<SubagentTypeBrowserUse>).runtime = proto3;
(SubagentTypeBrowserUse as MutableMessageType<SubagentTypeBrowserUse>).typeName = "agent.v1.SubagentTypeBrowserUse";
(SubagentTypeBrowserUse as MutableMessageType<SubagentTypeBrowserUse>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeVmSetupHelper$Runtime = (() => class _SubagentTypeVmSetupHelper extends Message<_SubagentTypeVmSetupHelper> {
  constructor(data?: PartialMessage<_SubagentTypeVmSetupHelper>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeVmSetupHelper);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeVmSetupHelper {
    return new _SubagentTypeVmSetupHelper().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeVmSetupHelper {
    return new _SubagentTypeVmSetupHelper().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeVmSetupHelper {
    return new _SubagentTypeVmSetupHelper().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeVmSetupHelper | PlainMessage<_SubagentTypeVmSetupHelper> | undefined | null, b2: _SubagentTypeVmSetupHelper | PlainMessage<_SubagentTypeVmSetupHelper> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeVmSetupHelper as unknown as MessageType<_SubagentTypeVmSetupHelper>, a, b2);
  }
})();
export type SubagentTypeVmSetupHelper = InstanceType<typeof SubagentTypeVmSetupHelper$Runtime>;
var SubagentTypeVmSetupHelper: MessageType<SubagentTypeVmSetupHelper> = SubagentTypeVmSetupHelper$Runtime as unknown as MessageType<SubagentTypeVmSetupHelper>;
(SubagentTypeVmSetupHelper as MutableMessageType<SubagentTypeVmSetupHelper>).runtime = proto3;
(SubagentTypeVmSetupHelper as MutableMessageType<SubagentTypeVmSetupHelper>).typeName = "agent.v1.SubagentTypeVmSetupHelper";
(SubagentTypeVmSetupHelper as MutableMessageType<SubagentTypeVmSetupHelper>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeDebug$Runtime = (() => class _SubagentTypeDebug extends Message<_SubagentTypeDebug> {
  constructor(data?: PartialMessage<_SubagentTypeDebug>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeDebug);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeDebug {
    return new _SubagentTypeDebug().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeDebug {
    return new _SubagentTypeDebug().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeDebug {
    return new _SubagentTypeDebug().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeDebug | PlainMessage<_SubagentTypeDebug> | undefined | null, b2: _SubagentTypeDebug | PlainMessage<_SubagentTypeDebug> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeDebug as unknown as MessageType<_SubagentTypeDebug>, a, b2);
  }
})();
export type SubagentTypeDebug = InstanceType<typeof SubagentTypeDebug$Runtime>;
var SubagentTypeDebug: MessageType<SubagentTypeDebug> = SubagentTypeDebug$Runtime as unknown as MessageType<SubagentTypeDebug>;
(SubagentTypeDebug as MutableMessageType<SubagentTypeDebug>).runtime = proto3;
(SubagentTypeDebug as MutableMessageType<SubagentTypeDebug>).typeName = "agent.v1.SubagentTypeDebug";
(SubagentTypeDebug as MutableMessageType<SubagentTypeDebug>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeCursorGuide$Runtime = (() => class _SubagentTypeCursorGuide extends Message<_SubagentTypeCursorGuide> {
  constructor(data?: PartialMessage<_SubagentTypeCursorGuide>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeCursorGuide);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeCursorGuide {
    return new _SubagentTypeCursorGuide().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeCursorGuide {
    return new _SubagentTypeCursorGuide().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeCursorGuide {
    return new _SubagentTypeCursorGuide().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeCursorGuide | PlainMessage<_SubagentTypeCursorGuide> | undefined | null, b2: _SubagentTypeCursorGuide | PlainMessage<_SubagentTypeCursorGuide> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeCursorGuide as unknown as MessageType<_SubagentTypeCursorGuide>, a, b2);
  }
})();
export type SubagentTypeCursorGuide = InstanceType<typeof SubagentTypeCursorGuide$Runtime>;
var SubagentTypeCursorGuide: MessageType<SubagentTypeCursorGuide> = SubagentTypeCursorGuide$Runtime as unknown as MessageType<SubagentTypeCursorGuide>;
(SubagentTypeCursorGuide as MutableMessageType<SubagentTypeCursorGuide>).runtime = proto3;
(SubagentTypeCursorGuide as MutableMessageType<SubagentTypeCursorGuide>).typeName = "agent.v1.SubagentTypeCursorGuide";
(SubagentTypeCursorGuide as MutableMessageType<SubagentTypeCursorGuide>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeWatchVideo$Runtime = (() => class _SubagentTypeWatchVideo extends Message<_SubagentTypeWatchVideo> {
  constructor(data?: PartialMessage<_SubagentTypeWatchVideo>) {
    super();
    proto3.util.initPartial(data, this as _SubagentTypeWatchVideo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeWatchVideo {
    return new _SubagentTypeWatchVideo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeWatchVideo {
    return new _SubagentTypeWatchVideo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeWatchVideo {
    return new _SubagentTypeWatchVideo().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeWatchVideo | PlainMessage<_SubagentTypeWatchVideo> | undefined | null, b2: _SubagentTypeWatchVideo | PlainMessage<_SubagentTypeWatchVideo> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeWatchVideo as unknown as MessageType<_SubagentTypeWatchVideo>, a, b2);
  }
})();
export type SubagentTypeWatchVideo = InstanceType<typeof SubagentTypeWatchVideo$Runtime>;
var SubagentTypeWatchVideo: MessageType<SubagentTypeWatchVideo> = SubagentTypeWatchVideo$Runtime as unknown as MessageType<SubagentTypeWatchVideo>;
(SubagentTypeWatchVideo as MutableMessageType<SubagentTypeWatchVideo>).runtime = proto3;
(SubagentTypeWatchVideo as MutableMessageType<SubagentTypeWatchVideo>).typeName = "agent.v1.SubagentTypeWatchVideo";
(SubagentTypeWatchVideo as MutableMessageType<SubagentTypeWatchVideo>).fields = proto3.util.newFieldList(() => []);
var SubagentTypeCustom$Runtime = (() => class _SubagentTypeCustom extends Message<_SubagentTypeCustom> {
  declare name: string;
  constructor(data?: PartialMessage<_SubagentTypeCustom>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _SubagentTypeCustom);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentTypeCustom {
    return new _SubagentTypeCustom().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentTypeCustom {
    return new _SubagentTypeCustom().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentTypeCustom {
    return new _SubagentTypeCustom().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentTypeCustom | PlainMessage<_SubagentTypeCustom> | undefined | null, b2: _SubagentTypeCustom | PlainMessage<_SubagentTypeCustom> | undefined | null): boolean {
    return proto3.util.equals(_SubagentTypeCustom as unknown as MessageType<_SubagentTypeCustom>, a, b2);
  }
})();
export type SubagentTypeCustom = InstanceType<typeof SubagentTypeCustom$Runtime>;
var SubagentTypeCustom: MessageType<SubagentTypeCustom> = SubagentTypeCustom$Runtime as unknown as MessageType<SubagentTypeCustom>;
(SubagentTypeCustom as MutableMessageType<SubagentTypeCustom>).runtime = proto3;
(SubagentTypeCustom as MutableMessageType<SubagentTypeCustom>).typeName = "agent.v1.SubagentTypeCustom";
(SubagentTypeCustom as MutableMessageType<SubagentTypeCustom>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CustomSubagent$Runtime = (() => class _CustomSubagent extends Message<_CustomSubagent> {
  declare fullPath: string;
  declare name: string;
  declare description: string;
  declare tools: string[];
  declare model: string;
  declare prompt: string;
  declare permissionMode: CustomSubagentPermissionMode;
  declare isBackground: boolean;
  declare plugin?: string;
  declare marketplace?: string;
  declare pluginId?: string;
  declare marketplaceId?: string;
  declare forceDefaultModel: boolean;
  declare source?: string;
  constructor(data?: PartialMessage<_CustomSubagent>) {
    super();
    this.fullPath = "";
    this.name = "";
    this.description = "";
    this.tools = [];
    this.model = "";
    this.prompt = "";
    this.permissionMode = CustomSubagentPermissionMode.UNSPECIFIED;
    this.isBackground = false;
    this.forceDefaultModel = false;
    proto3.util.initPartial(data, this as _CustomSubagent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomSubagent {
    return new _CustomSubagent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomSubagent {
    return new _CustomSubagent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomSubagent {
    return new _CustomSubagent().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomSubagent | PlainMessage<_CustomSubagent> | undefined | null, b2: _CustomSubagent | PlainMessage<_CustomSubagent> | undefined | null): boolean {
    return proto3.util.equals(_CustomSubagent as unknown as MessageType<_CustomSubagent>, a, b2);
  }
})();
export type CustomSubagent = InstanceType<typeof CustomSubagent$Runtime>;
var CustomSubagent: MessageType<CustomSubagent> = CustomSubagent$Runtime as unknown as MessageType<CustomSubagent>;
(CustomSubagent as MutableMessageType<CustomSubagent>).runtime = proto3;
(CustomSubagent as MutableMessageType<CustomSubagent>).typeName = "agent.v1.CustomSubagent";
(CustomSubagent as MutableMessageType<CustomSubagent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "full_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
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
  { no: 4, name: "tools", kind: "scalar", T: 9, repeated: true },
  {
    no: 5,
    name: "model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "permission_mode", kind: "enum", T: proto3.getEnumType(CustomSubagentPermissionMode) },
  {
    no: 8,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 9, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "marketplace", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "marketplace_id", kind: "scalar", T: 9, opt: true },
  {
    no: 13,
    name: "force_default_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 14, name: "source", kind: "scalar", T: 9, opt: true }
]);


export { CustomSubagentPermissionMode, TaskMode, SubagentType, SubagentTypeUnspecified, SubagentTypeComputerUse, SubagentTypeExplore, SubagentTypeMediaReview, SubagentTypeBash, SubagentTypeShell, SubagentTypeBrowserUse, SubagentTypeVmSetupHelper, SubagentTypeDebug, SubagentTypeCursorGuide, SubagentTypeWatchVideo, SubagentTypeCustom, CustomSubagent };
