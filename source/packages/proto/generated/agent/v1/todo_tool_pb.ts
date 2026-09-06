/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:22084-22452
 * Region SHA-256: c1ebffeffded07e448b58af80a280ac8c1693a5ee1241936f05cd53db09aa215
 * Atomic B1 exports: 11 messages + 1 enums = 12
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type TodoStatus = 0 | 1 | 2 | 3 | 4;
var TodoStatus: {
  "UNSPECIFIED": 0;
  "PENDING": 1;
  "IN_PROGRESS": 2;
  "COMPLETED": 3;
  "CANCELLED": 4;
  0: "UNSPECIFIED";
  1: "PENDING";
  2: "IN_PROGRESS";
  3: "COMPLETED";
  4: "CANCELLED";
};
(function(TodoStatus2) {
  TodoStatus2[TodoStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  TodoStatus2[TodoStatus2["PENDING"] = 1] = "PENDING";
  TodoStatus2[TodoStatus2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
  TodoStatus2[TodoStatus2["COMPLETED"] = 3] = "COMPLETED";
  TodoStatus2[TodoStatus2["CANCELLED"] = 4] = "CANCELLED";
})(TodoStatus! || (TodoStatus = {} as typeof TodoStatus));
proto3.util.setEnumType(TodoStatus, "agent.v1.TodoStatus", [
  { no: 0, name: "TODO_STATUS_UNSPECIFIED" },
  { no: 1, name: "TODO_STATUS_PENDING" },
  { no: 2, name: "TODO_STATUS_IN_PROGRESS" },
  { no: 3, name: "TODO_STATUS_COMPLETED" },
  { no: 4, name: "TODO_STATUS_CANCELLED" }
]);
var TodoItem$Runtime = (() => class _TodoItem extends Message<_TodoItem> {
  declare id: string;
  declare content: string;
  declare status: TodoStatus;
  declare createdAt: bigint;
  declare updatedAt: bigint;
  declare dependencies: string[];
  constructor(data?: PartialMessage<_TodoItem>) {
    super();
    this.id = "";
    this.content = "";
    this.status = TodoStatus.UNSPECIFIED;
    this.createdAt = protoInt64.zero;
    this.updatedAt = protoInt64.zero;
    this.dependencies = [];
    proto3.util.initPartial(data, this as _TodoItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoItem {
    return new _TodoItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoItem {
    return new _TodoItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoItem {
    return new _TodoItem().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoItem | PlainMessage<_TodoItem> | undefined | null, b2: _TodoItem | PlainMessage<_TodoItem> | undefined | null): boolean {
    return proto3.util.equals(_TodoItem as unknown as MessageType<_TodoItem>, a, b2);
  }
})();
export type TodoItem = InstanceType<typeof TodoItem$Runtime>;
var TodoItem: MessageType<TodoItem> = TodoItem$Runtime as unknown as MessageType<TodoItem>;
(TodoItem as MutableMessageType<TodoItem>).runtime = proto3;
(TodoItem as MutableMessageType<TodoItem>).typeName = "agent.v1.TodoItem";
(TodoItem as MutableMessageType<TodoItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
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
  { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(TodoStatus) },
  {
    no: 4,
    name: "created_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "updated_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 6, name: "dependencies", kind: "scalar", T: 9, repeated: true }
]);
var UpdateTodosToolCall$Runtime = (() => class _UpdateTodosToolCall extends Message<_UpdateTodosToolCall> {
  declare args?: UpdateTodosArgs;
  declare result?: UpdateTodosResult;
  constructor(data?: PartialMessage<_UpdateTodosToolCall>) {
    super();
    proto3.util.initPartial(data, this as _UpdateTodosToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateTodosToolCall {
    return new _UpdateTodosToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateTodosToolCall {
    return new _UpdateTodosToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateTodosToolCall {
    return new _UpdateTodosToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateTodosToolCall | PlainMessage<_UpdateTodosToolCall> | undefined | null, b2: _UpdateTodosToolCall | PlainMessage<_UpdateTodosToolCall> | undefined | null): boolean {
    return proto3.util.equals(_UpdateTodosToolCall as unknown as MessageType<_UpdateTodosToolCall>, a, b2);
  }
})();
export type UpdateTodosToolCall = InstanceType<typeof UpdateTodosToolCall$Runtime>;
var UpdateTodosToolCall: MessageType<UpdateTodosToolCall> = UpdateTodosToolCall$Runtime as unknown as MessageType<UpdateTodosToolCall>;
(UpdateTodosToolCall as MutableMessageType<UpdateTodosToolCall>).runtime = proto3;
(UpdateTodosToolCall as MutableMessageType<UpdateTodosToolCall>).typeName = "agent.v1.UpdateTodosToolCall";
(UpdateTodosToolCall as MutableMessageType<UpdateTodosToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: UpdateTodosArgs },
  { no: 2, name: "result", kind: "message", T: UpdateTodosResult }
]);
var UpdateTodosArgs$Runtime = (() => class _UpdateTodosArgs extends Message<_UpdateTodosArgs> {
  declare todos: TodoItem[];
  declare merge: boolean;
  constructor(data?: PartialMessage<_UpdateTodosArgs>) {
    super();
    this.todos = [];
    this.merge = false;
    proto3.util.initPartial(data, this as _UpdateTodosArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateTodosArgs {
    return new _UpdateTodosArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateTodosArgs {
    return new _UpdateTodosArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateTodosArgs {
    return new _UpdateTodosArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateTodosArgs | PlainMessage<_UpdateTodosArgs> | undefined | null, b2: _UpdateTodosArgs | PlainMessage<_UpdateTodosArgs> | undefined | null): boolean {
    return proto3.util.equals(_UpdateTodosArgs as unknown as MessageType<_UpdateTodosArgs>, a, b2);
  }
})();
export type UpdateTodosArgs = InstanceType<typeof UpdateTodosArgs$Runtime>;
var UpdateTodosArgs: MessageType<UpdateTodosArgs> = UpdateTodosArgs$Runtime as unknown as MessageType<UpdateTodosArgs>;
(UpdateTodosArgs as MutableMessageType<UpdateTodosArgs>).runtime = proto3;
(UpdateTodosArgs as MutableMessageType<UpdateTodosArgs>).typeName = "agent.v1.UpdateTodosArgs";
(UpdateTodosArgs as MutableMessageType<UpdateTodosArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true },
  {
    no: 2,
    name: "merge",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UpdateTodosResult$Runtime = (() => class _UpdateTodosResult extends Message<_UpdateTodosResult> {
  declare result: { case: "success"; value: UpdateTodosSuccess } | { case: "error"; value: UpdateTodosError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UpdateTodosResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _UpdateTodosResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateTodosResult {
    return new _UpdateTodosResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateTodosResult {
    return new _UpdateTodosResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateTodosResult {
    return new _UpdateTodosResult().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateTodosResult | PlainMessage<_UpdateTodosResult> | undefined | null, b2: _UpdateTodosResult | PlainMessage<_UpdateTodosResult> | undefined | null): boolean {
    return proto3.util.equals(_UpdateTodosResult as unknown as MessageType<_UpdateTodosResult>, a, b2);
  }
})();
export type UpdateTodosResult = InstanceType<typeof UpdateTodosResult$Runtime>;
var UpdateTodosResult: MessageType<UpdateTodosResult> = UpdateTodosResult$Runtime as unknown as MessageType<UpdateTodosResult>;
(UpdateTodosResult as MutableMessageType<UpdateTodosResult>).runtime = proto3;
(UpdateTodosResult as MutableMessageType<UpdateTodosResult>).typeName = "agent.v1.UpdateTodosResult";
(UpdateTodosResult as MutableMessageType<UpdateTodosResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: UpdateTodosSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: UpdateTodosError, oneof: "result" }
]);
var UpdateTodosSuccess$Runtime = (() => class _UpdateTodosSuccess extends Message<_UpdateTodosSuccess> {
  declare todos: TodoItem[];
  declare totalCount: number;
  declare wasMerge: boolean;
  constructor(data?: PartialMessage<_UpdateTodosSuccess>) {
    super();
    this.todos = [];
    this.totalCount = 0;
    this.wasMerge = false;
    proto3.util.initPartial(data, this as _UpdateTodosSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateTodosSuccess {
    return new _UpdateTodosSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateTodosSuccess {
    return new _UpdateTodosSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateTodosSuccess {
    return new _UpdateTodosSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateTodosSuccess | PlainMessage<_UpdateTodosSuccess> | undefined | null, b2: _UpdateTodosSuccess | PlainMessage<_UpdateTodosSuccess> | undefined | null): boolean {
    return proto3.util.equals(_UpdateTodosSuccess as unknown as MessageType<_UpdateTodosSuccess>, a, b2);
  }
})();
export type UpdateTodosSuccess = InstanceType<typeof UpdateTodosSuccess$Runtime>;
var UpdateTodosSuccess: MessageType<UpdateTodosSuccess> = UpdateTodosSuccess$Runtime as unknown as MessageType<UpdateTodosSuccess>;
(UpdateTodosSuccess as MutableMessageType<UpdateTodosSuccess>).runtime = proto3;
(UpdateTodosSuccess as MutableMessageType<UpdateTodosSuccess>).typeName = "agent.v1.UpdateTodosSuccess";
(UpdateTodosSuccess as MutableMessageType<UpdateTodosSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true },
  {
    no: 2,
    name: "total_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "was_merge",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UpdateTodosError$Runtime = (() => class _UpdateTodosError extends Message<_UpdateTodosError> {
  declare error: string;
  constructor(data?: PartialMessage<_UpdateTodosError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _UpdateTodosError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateTodosError {
    return new _UpdateTodosError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateTodosError {
    return new _UpdateTodosError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateTodosError {
    return new _UpdateTodosError().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateTodosError | PlainMessage<_UpdateTodosError> | undefined | null, b2: _UpdateTodosError | PlainMessage<_UpdateTodosError> | undefined | null): boolean {
    return proto3.util.equals(_UpdateTodosError as unknown as MessageType<_UpdateTodosError>, a, b2);
  }
})();
export type UpdateTodosError = InstanceType<typeof UpdateTodosError$Runtime>;
var UpdateTodosError: MessageType<UpdateTodosError> = UpdateTodosError$Runtime as unknown as MessageType<UpdateTodosError>;
(UpdateTodosError as MutableMessageType<UpdateTodosError>).runtime = proto3;
(UpdateTodosError as MutableMessageType<UpdateTodosError>).typeName = "agent.v1.UpdateTodosError";
(UpdateTodosError as MutableMessageType<UpdateTodosError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadTodosToolCall$Runtime = (() => class _ReadTodosToolCall extends Message<_ReadTodosToolCall> {
  declare args?: ReadTodosArgs;
  declare result?: ReadTodosResult;
  constructor(data?: PartialMessage<_ReadTodosToolCall>) {
    super();
    proto3.util.initPartial(data, this as _ReadTodosToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTodosToolCall {
    return new _ReadTodosToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTodosToolCall {
    return new _ReadTodosToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTodosToolCall {
    return new _ReadTodosToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTodosToolCall | PlainMessage<_ReadTodosToolCall> | undefined | null, b2: _ReadTodosToolCall | PlainMessage<_ReadTodosToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ReadTodosToolCall as unknown as MessageType<_ReadTodosToolCall>, a, b2);
  }
})();
export type ReadTodosToolCall = InstanceType<typeof ReadTodosToolCall$Runtime>;
var ReadTodosToolCall: MessageType<ReadTodosToolCall> = ReadTodosToolCall$Runtime as unknown as MessageType<ReadTodosToolCall>;
(ReadTodosToolCall as MutableMessageType<ReadTodosToolCall>).runtime = proto3;
(ReadTodosToolCall as MutableMessageType<ReadTodosToolCall>).typeName = "agent.v1.ReadTodosToolCall";
(ReadTodosToolCall as MutableMessageType<ReadTodosToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: ReadTodosArgs },
  { no: 2, name: "result", kind: "message", T: ReadTodosResult }
]);
var ReadTodosArgs$Runtime = (() => class _ReadTodosArgs extends Message<_ReadTodosArgs> {
  declare statusFilter: TodoStatus[];
  declare idFilter: string[];
  constructor(data?: PartialMessage<_ReadTodosArgs>) {
    super();
    this.statusFilter = [];
    this.idFilter = [];
    proto3.util.initPartial(data, this as _ReadTodosArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTodosArgs {
    return new _ReadTodosArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTodosArgs {
    return new _ReadTodosArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTodosArgs {
    return new _ReadTodosArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTodosArgs | PlainMessage<_ReadTodosArgs> | undefined | null, b2: _ReadTodosArgs | PlainMessage<_ReadTodosArgs> | undefined | null): boolean {
    return proto3.util.equals(_ReadTodosArgs as unknown as MessageType<_ReadTodosArgs>, a, b2);
  }
})();
export type ReadTodosArgs = InstanceType<typeof ReadTodosArgs$Runtime>;
var ReadTodosArgs: MessageType<ReadTodosArgs> = ReadTodosArgs$Runtime as unknown as MessageType<ReadTodosArgs>;
(ReadTodosArgs as MutableMessageType<ReadTodosArgs>).runtime = proto3;
(ReadTodosArgs as MutableMessageType<ReadTodosArgs>).typeName = "agent.v1.ReadTodosArgs";
(ReadTodosArgs as MutableMessageType<ReadTodosArgs>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status_filter", kind: "enum", T: proto3.getEnumType(TodoStatus), repeated: true },
  { no: 2, name: "id_filter", kind: "scalar", T: 9, repeated: true }
]);
var ReadTodosResult$Runtime = (() => class _ReadTodosResult extends Message<_ReadTodosResult> {
  declare result: { case: "success"; value: ReadTodosSuccess } | { case: "error"; value: ReadTodosError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadTodosResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReadTodosResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTodosResult {
    return new _ReadTodosResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTodosResult {
    return new _ReadTodosResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTodosResult {
    return new _ReadTodosResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTodosResult | PlainMessage<_ReadTodosResult> | undefined | null, b2: _ReadTodosResult | PlainMessage<_ReadTodosResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadTodosResult as unknown as MessageType<_ReadTodosResult>, a, b2);
  }
})();
export type ReadTodosResult = InstanceType<typeof ReadTodosResult$Runtime>;
var ReadTodosResult: MessageType<ReadTodosResult> = ReadTodosResult$Runtime as unknown as MessageType<ReadTodosResult>;
(ReadTodosResult as MutableMessageType<ReadTodosResult>).runtime = proto3;
(ReadTodosResult as MutableMessageType<ReadTodosResult>).typeName = "agent.v1.ReadTodosResult";
(ReadTodosResult as MutableMessageType<ReadTodosResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReadTodosSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReadTodosError, oneof: "result" }
]);
var ReadTodosSuccess$Runtime = (() => class _ReadTodosSuccess extends Message<_ReadTodosSuccess> {
  declare todos: TodoItem[];
  declare totalCount: number;
  constructor(data?: PartialMessage<_ReadTodosSuccess>) {
    super();
    this.todos = [];
    this.totalCount = 0;
    proto3.util.initPartial(data, this as _ReadTodosSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTodosSuccess {
    return new _ReadTodosSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTodosSuccess {
    return new _ReadTodosSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTodosSuccess {
    return new _ReadTodosSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTodosSuccess | PlainMessage<_ReadTodosSuccess> | undefined | null, b2: _ReadTodosSuccess | PlainMessage<_ReadTodosSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ReadTodosSuccess as unknown as MessageType<_ReadTodosSuccess>, a, b2);
  }
})();
export type ReadTodosSuccess = InstanceType<typeof ReadTodosSuccess$Runtime>;
var ReadTodosSuccess: MessageType<ReadTodosSuccess> = ReadTodosSuccess$Runtime as unknown as MessageType<ReadTodosSuccess>;
(ReadTodosSuccess as MutableMessageType<ReadTodosSuccess>).runtime = proto3;
(ReadTodosSuccess as MutableMessageType<ReadTodosSuccess>).typeName = "agent.v1.ReadTodosSuccess";
(ReadTodosSuccess as MutableMessageType<ReadTodosSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "todos", kind: "message", T: TodoItem, repeated: true },
  {
    no: 2,
    name: "total_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ReadTodosError$Runtime = (() => class _ReadTodosError extends Message<_ReadTodosError> {
  declare error: string;
  constructor(data?: PartialMessage<_ReadTodosError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _ReadTodosError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadTodosError {
    return new _ReadTodosError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadTodosError {
    return new _ReadTodosError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadTodosError {
    return new _ReadTodosError().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadTodosError | PlainMessage<_ReadTodosError> | undefined | null, b2: _ReadTodosError | PlainMessage<_ReadTodosError> | undefined | null): boolean {
    return proto3.util.equals(_ReadTodosError as unknown as MessageType<_ReadTodosError>, a, b2);
  }
})();
export type ReadTodosError = InstanceType<typeof ReadTodosError$Runtime>;
var ReadTodosError: MessageType<ReadTodosError> = ReadTodosError$Runtime as unknown as MessageType<ReadTodosError>;
(ReadTodosError as MutableMessageType<ReadTodosError>).runtime = proto3;
(ReadTodosError as MutableMessageType<ReadTodosError>).typeName = "agent.v1.ReadTodosError";
(ReadTodosError as MutableMessageType<ReadTodosError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { TodoStatus, TodoItem, UpdateTodosToolCall, UpdateTodosArgs, UpdateTodosResult, UpdateTodosSuccess, UpdateTodosError, ReadTodosToolCall, ReadTodosArgs, ReadTodosResult, ReadTodosSuccess, ReadTodosError };
