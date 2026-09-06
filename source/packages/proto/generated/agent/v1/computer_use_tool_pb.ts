/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:20896-21479
 * Region SHA-256: 757b5c867aa7f1d796c3f443d7da36e8bac7f62f38d6e5c725d327dba267f8d1
 * Atomic B1 exports: 18 messages + 2 enums = 20
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type MouseButton = 0 | 1 | 2 | 3 | 4 | 5;
var MouseButton: {
  "UNSPECIFIED": 0;
  "LEFT": 1;
  "RIGHT": 2;
  "MIDDLE": 3;
  "BACK": 4;
  "FORWARD": 5;
  0: "UNSPECIFIED";
  1: "LEFT";
  2: "RIGHT";
  3: "MIDDLE";
  4: "BACK";
  5: "FORWARD";
};
export type ScrollDirection = 0 | 1 | 2 | 3 | 4;
var ScrollDirection: {
  "UNSPECIFIED": 0;
  "UP": 1;
  "DOWN": 2;
  "LEFT": 3;
  "RIGHT": 4;
  0: "UNSPECIFIED";
  1: "UP";
  2: "DOWN";
  3: "LEFT";
  4: "RIGHT";
};
(function(MouseButton2) {
  MouseButton2[MouseButton2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  MouseButton2[MouseButton2["LEFT"] = 1] = "LEFT";
  MouseButton2[MouseButton2["RIGHT"] = 2] = "RIGHT";
  MouseButton2[MouseButton2["MIDDLE"] = 3] = "MIDDLE";
  MouseButton2[MouseButton2["BACK"] = 4] = "BACK";
  MouseButton2[MouseButton2["FORWARD"] = 5] = "FORWARD";
})(MouseButton! || (MouseButton = {} as typeof MouseButton));
proto3.util.setEnumType(MouseButton, "agent.v1.MouseButton", [
  { no: 0, name: "MOUSE_BUTTON_UNSPECIFIED" },
  { no: 1, name: "MOUSE_BUTTON_LEFT" },
  { no: 2, name: "MOUSE_BUTTON_RIGHT" },
  { no: 3, name: "MOUSE_BUTTON_MIDDLE" },
  { no: 4, name: "MOUSE_BUTTON_BACK" },
  { no: 5, name: "MOUSE_BUTTON_FORWARD" }
]);
(function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ScrollDirection2[ScrollDirection2["UP"] = 1] = "UP";
  ScrollDirection2[ScrollDirection2["DOWN"] = 2] = "DOWN";
  ScrollDirection2[ScrollDirection2["LEFT"] = 3] = "LEFT";
  ScrollDirection2[ScrollDirection2["RIGHT"] = 4] = "RIGHT";
})(ScrollDirection! || (ScrollDirection = {} as typeof ScrollDirection));
proto3.util.setEnumType(ScrollDirection, "agent.v1.ScrollDirection", [
  { no: 0, name: "SCROLL_DIRECTION_UNSPECIFIED" },
  { no: 1, name: "SCROLL_DIRECTION_UP" },
  { no: 2, name: "SCROLL_DIRECTION_DOWN" },
  { no: 3, name: "SCROLL_DIRECTION_LEFT" },
  { no: 4, name: "SCROLL_DIRECTION_RIGHT" }
]);
var Coordinate$Runtime = (() => class _Coordinate extends Message<_Coordinate> {
  declare x: number;
  declare y: number;
  constructor(data?: PartialMessage<_Coordinate>) {
    super();
    this.x = 0;
    this.y = 0;
    proto3.util.initPartial(data, this as _Coordinate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Coordinate {
    return new _Coordinate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Coordinate {
    return new _Coordinate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Coordinate {
    return new _Coordinate().fromJsonString(jsonString, options);
  }
  static equals(a: _Coordinate | PlainMessage<_Coordinate> | undefined | null, b2: _Coordinate | PlainMessage<_Coordinate> | undefined | null): boolean {
    return proto3.util.equals(_Coordinate as unknown as MessageType<_Coordinate>, a, b2);
  }
})();
export type Coordinate = InstanceType<typeof Coordinate$Runtime>;
var Coordinate: MessageType<Coordinate> = Coordinate$Runtime as unknown as MessageType<Coordinate>;
(Coordinate as MutableMessageType<Coordinate>).runtime = proto3;
(Coordinate as MutableMessageType<Coordinate>).typeName = "agent.v1.Coordinate";
(Coordinate as MutableMessageType<Coordinate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "x",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "y",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ComputerUseArgs$Runtime = (() => class _ComputerUseArgs extends Message<_ComputerUseArgs> {
  declare toolCallId: string;
  declare actions: ComputerUseAction[];
  declare description?: string;
  declare bindUnmappedCharacters?: boolean;
  constructor(data?: PartialMessage<_ComputerUseArgs>) {
    super();
    this.toolCallId = "";
    this.actions = [];
    proto3.util.initPartial(data, this as _ComputerUseArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseArgs {
    return new _ComputerUseArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseArgs {
    return new _ComputerUseArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseArgs {
    return new _ComputerUseArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseArgs | PlainMessage<_ComputerUseArgs> | undefined | null, b2: _ComputerUseArgs | PlainMessage<_ComputerUseArgs> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseArgs as unknown as MessageType<_ComputerUseArgs>, a, b2);
  }
})();
export type ComputerUseArgs = InstanceType<typeof ComputerUseArgs$Runtime>;
var ComputerUseArgs: MessageType<ComputerUseArgs> = ComputerUseArgs$Runtime as unknown as MessageType<ComputerUseArgs>;
(ComputerUseArgs as MutableMessageType<ComputerUseArgs>).runtime = proto3;
(ComputerUseArgs as MutableMessageType<ComputerUseArgs>).typeName = "agent.v1.ComputerUseArgs";
(ComputerUseArgs as MutableMessageType<ComputerUseArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "actions", kind: "message", T: ComputerUseAction, repeated: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "bind_unmapped_characters", kind: "scalar", T: 8, opt: true }
]);
var ComputerUseAction$Runtime = (() => class _ComputerUseAction extends Message<_ComputerUseAction> {
  declare action: { case: "mouseMove"; value: MouseMoveAction } | { case: "click"; value: ClickAction } | { case: "mouseDown"; value: MouseDownAction } | { case: "mouseUp"; value: MouseUpAction } | { case: "drag"; value: DragAction } | { case: "scroll"; value: ScrollAction } | { case: "type"; value: TypeAction } | { case: "key"; value: KeyAction } | { case: "wait"; value: WaitAction } | { case: "screenshot"; value: ScreenshotAction } | { case: "cursorPosition"; value: CursorPositionAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ComputerUseAction>) {
    super();
    this.action = { case: void 0 };
    proto3.util.initPartial(data, this as _ComputerUseAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseAction {
    return new _ComputerUseAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseAction {
    return new _ComputerUseAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseAction {
    return new _ComputerUseAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseAction | PlainMessage<_ComputerUseAction> | undefined | null, b2: _ComputerUseAction | PlainMessage<_ComputerUseAction> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseAction as unknown as MessageType<_ComputerUseAction>, a, b2);
  }
})();
export type ComputerUseAction = InstanceType<typeof ComputerUseAction$Runtime>;
var ComputerUseAction: MessageType<ComputerUseAction> = ComputerUseAction$Runtime as unknown as MessageType<ComputerUseAction>;
(ComputerUseAction as MutableMessageType<ComputerUseAction>).runtime = proto3;
(ComputerUseAction as MutableMessageType<ComputerUseAction>).typeName = "agent.v1.ComputerUseAction";
(ComputerUseAction as MutableMessageType<ComputerUseAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "mouse_move", kind: "message", T: MouseMoveAction, oneof: "action" },
  { no: 2, name: "click", kind: "message", T: ClickAction, oneof: "action" },
  { no: 3, name: "mouse_down", kind: "message", T: MouseDownAction, oneof: "action" },
  { no: 4, name: "mouse_up", kind: "message", T: MouseUpAction, oneof: "action" },
  { no: 5, name: "drag", kind: "message", T: DragAction, oneof: "action" },
  { no: 6, name: "scroll", kind: "message", T: ScrollAction, oneof: "action" },
  { no: 7, name: "type", kind: "message", T: TypeAction, oneof: "action" },
  { no: 8, name: "key", kind: "message", T: KeyAction, oneof: "action" },
  { no: 9, name: "wait", kind: "message", T: WaitAction, oneof: "action" },
  { no: 10, name: "screenshot", kind: "message", T: ScreenshotAction, oneof: "action" },
  { no: 11, name: "cursor_position", kind: "message", T: CursorPositionAction, oneof: "action" }
]);
var MouseMoveAction$Runtime = (() => class _MouseMoveAction extends Message<_MouseMoveAction> {
  declare coordinate?: Coordinate;
  constructor(data?: PartialMessage<_MouseMoveAction>) {
    super();
    proto3.util.initPartial(data, this as _MouseMoveAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MouseMoveAction {
    return new _MouseMoveAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MouseMoveAction {
    return new _MouseMoveAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MouseMoveAction {
    return new _MouseMoveAction().fromJsonString(jsonString, options);
  }
  static equals(a: _MouseMoveAction | PlainMessage<_MouseMoveAction> | undefined | null, b2: _MouseMoveAction | PlainMessage<_MouseMoveAction> | undefined | null): boolean {
    return proto3.util.equals(_MouseMoveAction as unknown as MessageType<_MouseMoveAction>, a, b2);
  }
})();
export type MouseMoveAction = InstanceType<typeof MouseMoveAction$Runtime>;
var MouseMoveAction: MessageType<MouseMoveAction> = MouseMoveAction$Runtime as unknown as MessageType<MouseMoveAction>;
(MouseMoveAction as MutableMessageType<MouseMoveAction>).runtime = proto3;
(MouseMoveAction as MutableMessageType<MouseMoveAction>).typeName = "agent.v1.MouseMoveAction";
(MouseMoveAction as MutableMessageType<MouseMoveAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "coordinate", kind: "message", T: Coordinate }
]);
var ClickAction$Runtime = (() => class _ClickAction extends Message<_ClickAction> {
  declare coordinate?: Coordinate;
  declare button: MouseButton;
  declare count: number;
  declare modifierKeys?: string;
  constructor(data?: PartialMessage<_ClickAction>) {
    super();
    this.button = MouseButton.UNSPECIFIED;
    this.count = 0;
    proto3.util.initPartial(data, this as _ClickAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClickAction {
    return new _ClickAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClickAction {
    return new _ClickAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClickAction {
    return new _ClickAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ClickAction | PlainMessage<_ClickAction> | undefined | null, b2: _ClickAction | PlainMessage<_ClickAction> | undefined | null): boolean {
    return proto3.util.equals(_ClickAction as unknown as MessageType<_ClickAction>, a, b2);
  }
})();
export type ClickAction = InstanceType<typeof ClickAction$Runtime>;
var ClickAction: MessageType<ClickAction> = ClickAction$Runtime as unknown as MessageType<ClickAction>;
(ClickAction as MutableMessageType<ClickAction>).runtime = proto3;
(ClickAction as MutableMessageType<ClickAction>).typeName = "agent.v1.ClickAction";
(ClickAction as MutableMessageType<ClickAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "coordinate", kind: "message", T: Coordinate, opt: true },
  { no: 2, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) },
  {
    no: 3,
    name: "count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }
]);
var MouseDownAction$Runtime = (() => class _MouseDownAction extends Message<_MouseDownAction> {
  declare button: MouseButton;
  constructor(data?: PartialMessage<_MouseDownAction>) {
    super();
    this.button = MouseButton.UNSPECIFIED;
    proto3.util.initPartial(data, this as _MouseDownAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MouseDownAction {
    return new _MouseDownAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MouseDownAction {
    return new _MouseDownAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MouseDownAction {
    return new _MouseDownAction().fromJsonString(jsonString, options);
  }
  static equals(a: _MouseDownAction | PlainMessage<_MouseDownAction> | undefined | null, b2: _MouseDownAction | PlainMessage<_MouseDownAction> | undefined | null): boolean {
    return proto3.util.equals(_MouseDownAction as unknown as MessageType<_MouseDownAction>, a, b2);
  }
})();
export type MouseDownAction = InstanceType<typeof MouseDownAction$Runtime>;
var MouseDownAction: MessageType<MouseDownAction> = MouseDownAction$Runtime as unknown as MessageType<MouseDownAction>;
(MouseDownAction as MutableMessageType<MouseDownAction>).runtime = proto3;
(MouseDownAction as MutableMessageType<MouseDownAction>).typeName = "agent.v1.MouseDownAction";
(MouseDownAction as MutableMessageType<MouseDownAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }
]);
var MouseUpAction$Runtime = (() => class _MouseUpAction extends Message<_MouseUpAction> {
  declare button: MouseButton;
  constructor(data?: PartialMessage<_MouseUpAction>) {
    super();
    this.button = MouseButton.UNSPECIFIED;
    proto3.util.initPartial(data, this as _MouseUpAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MouseUpAction {
    return new _MouseUpAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MouseUpAction {
    return new _MouseUpAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MouseUpAction {
    return new _MouseUpAction().fromJsonString(jsonString, options);
  }
  static equals(a: _MouseUpAction | PlainMessage<_MouseUpAction> | undefined | null, b2: _MouseUpAction | PlainMessage<_MouseUpAction> | undefined | null): boolean {
    return proto3.util.equals(_MouseUpAction as unknown as MessageType<_MouseUpAction>, a, b2);
  }
})();
export type MouseUpAction = InstanceType<typeof MouseUpAction$Runtime>;
var MouseUpAction: MessageType<MouseUpAction> = MouseUpAction$Runtime as unknown as MessageType<MouseUpAction>;
(MouseUpAction as MutableMessageType<MouseUpAction>).runtime = proto3;
(MouseUpAction as MutableMessageType<MouseUpAction>).typeName = "agent.v1.MouseUpAction";
(MouseUpAction as MutableMessageType<MouseUpAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) }
]);
var DragAction$Runtime = (() => class _DragAction extends Message<_DragAction> {
  declare path: Coordinate[];
  declare button: MouseButton;
  declare modifierKeys?: string;
  constructor(data?: PartialMessage<_DragAction>) {
    super();
    this.path = [];
    this.button = MouseButton.UNSPECIFIED;
    proto3.util.initPartial(data, this as _DragAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DragAction {
    return new _DragAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DragAction {
    return new _DragAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DragAction {
    return new _DragAction().fromJsonString(jsonString, options);
  }
  static equals(a: _DragAction | PlainMessage<_DragAction> | undefined | null, b2: _DragAction | PlainMessage<_DragAction> | undefined | null): boolean {
    return proto3.util.equals(_DragAction as unknown as MessageType<_DragAction>, a, b2);
  }
})();
export type DragAction = InstanceType<typeof DragAction$Runtime>;
var DragAction: MessageType<DragAction> = DragAction$Runtime as unknown as MessageType<DragAction>;
(DragAction as MutableMessageType<DragAction>).runtime = proto3;
(DragAction as MutableMessageType<DragAction>).typeName = "agent.v1.DragAction";
(DragAction as MutableMessageType<DragAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "path", kind: "message", T: Coordinate, repeated: true },
  { no: 2, name: "button", kind: "enum", T: proto3.getEnumType(MouseButton) },
  { no: 3, name: "modifier_keys", kind: "scalar", T: 9, opt: true }
]);
var ScrollAction$Runtime = (() => class _ScrollAction extends Message<_ScrollAction> {
  declare coordinate?: Coordinate;
  declare direction: ScrollDirection;
  declare amount: number;
  declare modifierKeys?: string;
  constructor(data?: PartialMessage<_ScrollAction>) {
    super();
    this.direction = ScrollDirection.UNSPECIFIED;
    this.amount = 0;
    proto3.util.initPartial(data, this as _ScrollAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScrollAction {
    return new _ScrollAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScrollAction {
    return new _ScrollAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScrollAction {
    return new _ScrollAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ScrollAction | PlainMessage<_ScrollAction> | undefined | null, b2: _ScrollAction | PlainMessage<_ScrollAction> | undefined | null): boolean {
    return proto3.util.equals(_ScrollAction as unknown as MessageType<_ScrollAction>, a, b2);
  }
})();
export type ScrollAction = InstanceType<typeof ScrollAction$Runtime>;
var ScrollAction: MessageType<ScrollAction> = ScrollAction$Runtime as unknown as MessageType<ScrollAction>;
(ScrollAction as MutableMessageType<ScrollAction>).runtime = proto3;
(ScrollAction as MutableMessageType<ScrollAction>).typeName = "agent.v1.ScrollAction";
(ScrollAction as MutableMessageType<ScrollAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "coordinate", kind: "message", T: Coordinate, opt: true },
  { no: 2, name: "direction", kind: "enum", T: proto3.getEnumType(ScrollDirection) },
  {
    no: 3,
    name: "amount",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "modifier_keys", kind: "scalar", T: 9, opt: true }
]);
var TypeAction$Runtime = (() => class _TypeAction extends Message<_TypeAction> {
  declare text: string;
  constructor(data?: PartialMessage<_TypeAction>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _TypeAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TypeAction {
    return new _TypeAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TypeAction {
    return new _TypeAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TypeAction {
    return new _TypeAction().fromJsonString(jsonString, options);
  }
  static equals(a: _TypeAction | PlainMessage<_TypeAction> | undefined | null, b2: _TypeAction | PlainMessage<_TypeAction> | undefined | null): boolean {
    return proto3.util.equals(_TypeAction as unknown as MessageType<_TypeAction>, a, b2);
  }
})();
export type TypeAction = InstanceType<typeof TypeAction$Runtime>;
var TypeAction: MessageType<TypeAction> = TypeAction$Runtime as unknown as MessageType<TypeAction>;
(TypeAction as MutableMessageType<TypeAction>).runtime = proto3;
(TypeAction as MutableMessageType<TypeAction>).typeName = "agent.v1.TypeAction";
(TypeAction as MutableMessageType<TypeAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var KeyAction$Runtime = (() => class _KeyAction extends Message<_KeyAction> {
  declare key: string;
  declare holdDurationMs?: number;
  constructor(data?: PartialMessage<_KeyAction>) {
    super();
    this.key = "";
    proto3.util.initPartial(data, this as _KeyAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KeyAction {
    return new _KeyAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KeyAction {
    return new _KeyAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KeyAction {
    return new _KeyAction().fromJsonString(jsonString, options);
  }
  static equals(a: _KeyAction | PlainMessage<_KeyAction> | undefined | null, b2: _KeyAction | PlainMessage<_KeyAction> | undefined | null): boolean {
    return proto3.util.equals(_KeyAction as unknown as MessageType<_KeyAction>, a, b2);
  }
})();
export type KeyAction = InstanceType<typeof KeyAction$Runtime>;
var KeyAction: MessageType<KeyAction> = KeyAction$Runtime as unknown as MessageType<KeyAction>;
(KeyAction as MutableMessageType<KeyAction>).runtime = proto3;
(KeyAction as MutableMessageType<KeyAction>).typeName = "agent.v1.KeyAction";
(KeyAction as MutableMessageType<KeyAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "hold_duration_ms", kind: "scalar", T: 5, opt: true }
]);
var WaitAction$Runtime = (() => class _WaitAction extends Message<_WaitAction> {
  declare durationMs: number;
  constructor(data?: PartialMessage<_WaitAction>) {
    super();
    this.durationMs = 0;
    proto3.util.initPartial(data, this as _WaitAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WaitAction {
    return new _WaitAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WaitAction {
    return new _WaitAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WaitAction {
    return new _WaitAction().fromJsonString(jsonString, options);
  }
  static equals(a: _WaitAction | PlainMessage<_WaitAction> | undefined | null, b2: _WaitAction | PlainMessage<_WaitAction> | undefined | null): boolean {
    return proto3.util.equals(_WaitAction as unknown as MessageType<_WaitAction>, a, b2);
  }
})();
export type WaitAction = InstanceType<typeof WaitAction$Runtime>;
var WaitAction: MessageType<WaitAction> = WaitAction$Runtime as unknown as MessageType<WaitAction>;
(WaitAction as MutableMessageType<WaitAction>).runtime = proto3;
(WaitAction as MutableMessageType<WaitAction>).typeName = "agent.v1.WaitAction";
(WaitAction as MutableMessageType<WaitAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "duration_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ScreenshotAction$Runtime = (() => class _ScreenshotAction extends Message<_ScreenshotAction> {
  constructor(data?: PartialMessage<_ScreenshotAction>) {
    super();
    proto3.util.initPartial(data, this as _ScreenshotAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScreenshotAction {
    return new _ScreenshotAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScreenshotAction {
    return new _ScreenshotAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScreenshotAction {
    return new _ScreenshotAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ScreenshotAction | PlainMessage<_ScreenshotAction> | undefined | null, b2: _ScreenshotAction | PlainMessage<_ScreenshotAction> | undefined | null): boolean {
    return proto3.util.equals(_ScreenshotAction as unknown as MessageType<_ScreenshotAction>, a, b2);
  }
})();
export type ScreenshotAction = InstanceType<typeof ScreenshotAction$Runtime>;
var ScreenshotAction: MessageType<ScreenshotAction> = ScreenshotAction$Runtime as unknown as MessageType<ScreenshotAction>;
(ScreenshotAction as MutableMessageType<ScreenshotAction>).runtime = proto3;
(ScreenshotAction as MutableMessageType<ScreenshotAction>).typeName = "agent.v1.ScreenshotAction";
(ScreenshotAction as MutableMessageType<ScreenshotAction>).fields = proto3.util.newFieldList(() => []);
var CursorPositionAction$Runtime = (() => class _CursorPositionAction extends Message<_CursorPositionAction> {
  constructor(data?: PartialMessage<_CursorPositionAction>) {
    super();
    proto3.util.initPartial(data, this as _CursorPositionAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorPositionAction {
    return new _CursorPositionAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorPositionAction {
    return new _CursorPositionAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorPositionAction {
    return new _CursorPositionAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorPositionAction | PlainMessage<_CursorPositionAction> | undefined | null, b2: _CursorPositionAction | PlainMessage<_CursorPositionAction> | undefined | null): boolean {
    return proto3.util.equals(_CursorPositionAction as unknown as MessageType<_CursorPositionAction>, a, b2);
  }
})();
export type CursorPositionAction = InstanceType<typeof CursorPositionAction$Runtime>;
var CursorPositionAction: MessageType<CursorPositionAction> = CursorPositionAction$Runtime as unknown as MessageType<CursorPositionAction>;
(CursorPositionAction as MutableMessageType<CursorPositionAction>).runtime = proto3;
(CursorPositionAction as MutableMessageType<CursorPositionAction>).typeName = "agent.v1.CursorPositionAction";
(CursorPositionAction as MutableMessageType<CursorPositionAction>).fields = proto3.util.newFieldList(() => []);
var ComputerUseResult$Runtime = (() => class _ComputerUseResult extends Message<_ComputerUseResult> {
  declare result: { case: "success"; value: ComputerUseSuccess } | { case: "error"; value: ComputerUseError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ComputerUseResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ComputerUseResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseResult | PlainMessage<_ComputerUseResult> | undefined | null, b2: _ComputerUseResult | PlainMessage<_ComputerUseResult> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseResult as unknown as MessageType<_ComputerUseResult>, a, b2);
  }
})();
export type ComputerUseResult = InstanceType<typeof ComputerUseResult$Runtime>;
var ComputerUseResult: MessageType<ComputerUseResult> = ComputerUseResult$Runtime as unknown as MessageType<ComputerUseResult>;
(ComputerUseResult as MutableMessageType<ComputerUseResult>).runtime = proto3;
(ComputerUseResult as MutableMessageType<ComputerUseResult>).typeName = "agent.v1.ComputerUseResult";
(ComputerUseResult as MutableMessageType<ComputerUseResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ComputerUseSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ComputerUseError, oneof: "result" }
]);
var ComputerUseSuccess$Runtime = (() => class _ComputerUseSuccess extends Message<_ComputerUseSuccess> {
  declare actionCount: number;
  declare durationMs: number;
  declare screenshot?: string;
  declare log?: string;
  declare screenshotPath?: string;
  declare cursorPosition?: Coordinate;
  constructor(data?: PartialMessage<_ComputerUseSuccess>) {
    super();
    this.actionCount = 0;
    this.durationMs = 0;
    proto3.util.initPartial(data, this as _ComputerUseSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseSuccess {
    return new _ComputerUseSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseSuccess {
    return new _ComputerUseSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseSuccess {
    return new _ComputerUseSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseSuccess | PlainMessage<_ComputerUseSuccess> | undefined | null, b2: _ComputerUseSuccess | PlainMessage<_ComputerUseSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseSuccess as unknown as MessageType<_ComputerUseSuccess>, a, b2);
  }
})();
export type ComputerUseSuccess = InstanceType<typeof ComputerUseSuccess$Runtime>;
var ComputerUseSuccess: MessageType<ComputerUseSuccess> = ComputerUseSuccess$Runtime as unknown as MessageType<ComputerUseSuccess>;
(ComputerUseSuccess as MutableMessageType<ComputerUseSuccess>).runtime = proto3;
(ComputerUseSuccess as MutableMessageType<ComputerUseSuccess>).typeName = "agent.v1.ComputerUseSuccess";
(ComputerUseSuccess as MutableMessageType<ComputerUseSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "action_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "duration_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "screenshot", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "log", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "screenshot_path", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "cursor_position", kind: "message", T: Coordinate, opt: true }
]);
var ComputerUseError$Runtime = (() => class _ComputerUseError extends Message<_ComputerUseError> {
  declare error: string;
  declare actionCount: number;
  declare durationMs: number;
  declare log?: string;
  declare screenshot?: string;
  declare screenshotPath?: string;
  constructor(data?: PartialMessage<_ComputerUseError>) {
    super();
    this.error = "";
    this.actionCount = 0;
    this.durationMs = 0;
    proto3.util.initPartial(data, this as _ComputerUseError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseError {
    return new _ComputerUseError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseError {
    return new _ComputerUseError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseError {
    return new _ComputerUseError().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseError | PlainMessage<_ComputerUseError> | undefined | null, b2: _ComputerUseError | PlainMessage<_ComputerUseError> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseError as unknown as MessageType<_ComputerUseError>, a, b2);
  }
})();
export type ComputerUseError = InstanceType<typeof ComputerUseError$Runtime>;
var ComputerUseError: MessageType<ComputerUseError> = ComputerUseError$Runtime as unknown as MessageType<ComputerUseError>;
(ComputerUseError as MutableMessageType<ComputerUseError>).runtime = proto3;
(ComputerUseError as MutableMessageType<ComputerUseError>).typeName = "agent.v1.ComputerUseError";
(ComputerUseError as MutableMessageType<ComputerUseError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "action_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "duration_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "log", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "screenshot", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "screenshot_path", kind: "scalar", T: 9, opt: true }
]);
var ComputerUseToolCall$Runtime = (() => class _ComputerUseToolCall extends Message<_ComputerUseToolCall> {
  declare args?: ComputerUseArgs;
  declare result?: ComputerUseResult;
  constructor(data?: PartialMessage<_ComputerUseToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ComputerUseToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseToolCall {
    return new _ComputerUseToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseToolCall {
    return new _ComputerUseToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseToolCall {
    return new _ComputerUseToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseToolCall | PlainMessage<_ComputerUseToolCall> | undefined | null, b2: _ComputerUseToolCall | PlainMessage<_ComputerUseToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseToolCall as unknown as MessageType<_ComputerUseToolCall>, a, b2);
  }
})();
export type ComputerUseToolCall = InstanceType<typeof ComputerUseToolCall$Runtime>;
var ComputerUseToolCall: MessageType<ComputerUseToolCall> = ComputerUseToolCall$Runtime as unknown as MessageType<ComputerUseToolCall>;
(ComputerUseToolCall as MutableMessageType<ComputerUseToolCall>).runtime = proto3;
(ComputerUseToolCall as MutableMessageType<ComputerUseToolCall>).typeName = "agent.v1.ComputerUseToolCall";
(ComputerUseToolCall as MutableMessageType<ComputerUseToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ComputerUseArgs },
  { no: 2, name: "result", kind: "message", T: ComputerUseResult }
]);


export { MouseButton, ScrollDirection, Coordinate, ComputerUseArgs, ComputerUseAction, MouseMoveAction, ClickAction, MouseDownAction, MouseUpAction, DragAction, ScrollAction, TypeAction, KeyAction, WaitAction, ScreenshotAction, CursorPositionAction, ComputerUseResult, ComputerUseSuccess, ComputerUseError, ComputerUseToolCall };
