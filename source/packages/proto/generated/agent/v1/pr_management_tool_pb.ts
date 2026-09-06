/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:36224-36791
 * Region SHA-256: 01233c3beb60416ee5f43020e389d352c269f3bb6374d609fac455cd2b773157
 * Atomic B1 exports: 15 messages + 1 enums = 16
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type PullRequestStatus = 0 | 1 | 2;
var PullRequestStatus: {
  "UNSPECIFIED": 0;
  "OPEN": 1;
  "CLOSED": 2;
  0: "UNSPECIFIED";
  1: "OPEN";
  2: "CLOSED";
};
(function(PullRequestStatus2) {
  PullRequestStatus2[PullRequestStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PullRequestStatus2[PullRequestStatus2["OPEN"] = 1] = "OPEN";
  PullRequestStatus2[PullRequestStatus2["CLOSED"] = 2] = "CLOSED";
})(PullRequestStatus! || (PullRequestStatus = {} as typeof PullRequestStatus));
proto3.util.setEnumType(PullRequestStatus, "agent.v1.PullRequestStatus", [
  { no: 0, name: "PULL_REQUEST_STATUS_UNSPECIFIED" },
  { no: 1, name: "PULL_REQUEST_STATUS_OPEN" },
  { no: 2, name: "PULL_REQUEST_STATUS_CLOSED" }
]);
var PrManagementArgs$Runtime = (() => class _PrManagementArgs extends Message<_PrManagementArgs> {
  declare toolCallId: string;
  declare action: { case: "createPr"; value: CreatePrAction } | { case: "updatePr"; value: UpdatePrAction } | { case: "postComment"; value: PostCommentAction } | { case: "resolveComment"; value: ResolveCommentAction } | { case: "getCiStatus"; value: GetCiStatusAction } | { case: "setPrStatus"; value: SetPrStatusAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PrManagementArgs>) {
    super();
    this.toolCallId = "";
    this.action = { case: void 0 };
    proto3.util.initPartial(data, this as _PrManagementArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementArgs {
    return new _PrManagementArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementArgs {
    return new _PrManagementArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementArgs {
    return new _PrManagementArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementArgs | PlainMessage<_PrManagementArgs> | undefined | null, b2: _PrManagementArgs | PlainMessage<_PrManagementArgs> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementArgs as unknown as MessageType<_PrManagementArgs>, a, b2);
  }
})();
export type PrManagementArgs = InstanceType<typeof PrManagementArgs$Runtime>;
var PrManagementArgs: MessageType<PrManagementArgs> = PrManagementArgs$Runtime as unknown as MessageType<PrManagementArgs>;
(PrManagementArgs as MutableMessageType<PrManagementArgs>).runtime = proto3;
(PrManagementArgs as MutableMessageType<PrManagementArgs>).typeName = "agent.v1.PrManagementArgs";
(PrManagementArgs as MutableMessageType<PrManagementArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "create_pr", kind: "message", T: CreatePrAction, oneof: "action" },
  { no: 3, name: "update_pr", kind: "message", T: UpdatePrAction, oneof: "action" },
  { no: 4, name: "post_comment", kind: "message", T: PostCommentAction, oneof: "action" },
  { no: 5, name: "resolve_comment", kind: "message", T: ResolveCommentAction, oneof: "action" },
  { no: 6, name: "get_ci_status", kind: "message", T: GetCiStatusAction, oneof: "action" },
  { no: 7, name: "set_pr_status", kind: "message", T: SetPrStatusAction, oneof: "action" }
]);
var CreatePrAction$Runtime = (() => class _CreatePrAction extends Message<_CreatePrAction> {
  declare title: string;
  declare body: string;
  declare baseBranch?: string;
  declare draft?: boolean;
  declare branchName: string;
  declare addLabels: string[];
  declare repoUrl?: string;
  declare skipBranchPrefixCheck?: boolean;
  declare stackOnPrNumber?: bigint;
  constructor(data?: PartialMessage<_CreatePrAction>) {
    super();
    this.title = "";
    this.body = "";
    this.branchName = "";
    this.addLabels = [];
    proto3.util.initPartial(data, this as _CreatePrAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePrAction {
    return new _CreatePrAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePrAction {
    return new _CreatePrAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePrAction {
    return new _CreatePrAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePrAction | PlainMessage<_CreatePrAction> | undefined | null, b2: _CreatePrAction | PlainMessage<_CreatePrAction> | undefined | null): boolean {
    return proto3.util.equals(_CreatePrAction as unknown as MessageType<_CreatePrAction>, a, b2);
  }
})();
export type CreatePrAction = InstanceType<typeof CreatePrAction$Runtime>;
var CreatePrAction: MessageType<CreatePrAction> = CreatePrAction$Runtime as unknown as MessageType<CreatePrAction>;
(CreatePrAction as MutableMessageType<CreatePrAction>).runtime = proto3;
(CreatePrAction as MutableMessageType<CreatePrAction>).typeName = "agent.v1.CreatePrAction";
(CreatePrAction as MutableMessageType<CreatePrAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "draft", kind: "scalar", T: 8, opt: true },
  {
    no: 5,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "skip_branch_prefix_check", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true }
]);
var UpdatePrAction$Runtime = (() => class _UpdatePrAction extends Message<_UpdatePrAction> {
  declare prUrl?: string;
  declare title?: string;
  declare body?: string;
  declare baseBranch?: string;
  declare branchName?: string;
  declare addLabels: string[];
  declare removeLabels: string[];
  declare repoUrl?: string;
  declare stackOnPrNumber?: bigint;
  declare clearStack?: boolean;
  declare draft?: boolean;
  constructor(data?: PartialMessage<_UpdatePrAction>) {
    super();
    this.addLabels = [];
    this.removeLabels = [];
    proto3.util.initPartial(data, this as _UpdatePrAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdatePrAction {
    return new _UpdatePrAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdatePrAction {
    return new _UpdatePrAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdatePrAction {
    return new _UpdatePrAction().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdatePrAction | PlainMessage<_UpdatePrAction> | undefined | null, b2: _UpdatePrAction | PlainMessage<_UpdatePrAction> | undefined | null): boolean {
    return proto3.util.equals(_UpdatePrAction as unknown as MessageType<_UpdatePrAction>, a, b2);
  }
})();
export type UpdatePrAction = InstanceType<typeof UpdatePrAction$Runtime>;
var UpdatePrAction: MessageType<UpdatePrAction> = UpdatePrAction$Runtime as unknown as MessageType<UpdatePrAction>;
(UpdatePrAction as MutableMessageType<UpdatePrAction>).runtime = proto3;
(UpdatePrAction as MutableMessageType<UpdatePrAction>).typeName = "agent.v1.UpdatePrAction";
(UpdatePrAction as MutableMessageType<UpdatePrAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "body", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "branch_name", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "add_labels", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "remove_labels", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "stack_on_pr_number", kind: "scalar", T: 3, opt: true },
  { no: 10, name: "clear_stack", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "draft", kind: "scalar", T: 8, opt: true }
]);
var PostCommentAction$Runtime = (() => class _PostCommentAction extends Message<_PostCommentAction> {
  declare prUrl?: string;
  declare branchName?: string;
  declare body: string;
  declare repoUrl?: string;
  declare inReplyTo?: bigint;
  declare path?: string;
  declare line?: number;
  declare startLine?: number;
  declare side?: string;
  declare replyToReference?: string;
  constructor(data?: PartialMessage<_PostCommentAction>) {
    super();
    this.body = "";
    proto3.util.initPartial(data, this as _PostCommentAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostCommentAction {
    return new _PostCommentAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostCommentAction {
    return new _PostCommentAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostCommentAction {
    return new _PostCommentAction().fromJsonString(jsonString, options);
  }
  static equals(a: _PostCommentAction | PlainMessage<_PostCommentAction> | undefined | null, b2: _PostCommentAction | PlainMessage<_PostCommentAction> | undefined | null): boolean {
    return proto3.util.equals(_PostCommentAction as unknown as MessageType<_PostCommentAction>, a, b2);
  }
})();
export type PostCommentAction = InstanceType<typeof PostCommentAction$Runtime>;
var PostCommentAction: MessageType<PostCommentAction> = PostCommentAction$Runtime as unknown as MessageType<PostCommentAction>;
(PostCommentAction as MutableMessageType<PostCommentAction>).runtime = proto3;
(PostCommentAction as MutableMessageType<PostCommentAction>).typeName = "agent.v1.PostCommentAction";
(PostCommentAction as MutableMessageType<PostCommentAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "in_reply_to", kind: "scalar", T: 3, opt: true },
  { no: 6, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "line", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "start_line", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "side", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "reply_to_reference", kind: "scalar", T: 9, opt: true }
]);
var ResolveCommentAction$Runtime = (() => class _ResolveCommentAction extends Message<_ResolveCommentAction> {
  declare prUrl?: string;
  declare branchName?: string;
  declare commentId: bigint;
  declare repoUrl?: string;
  declare commentReference?: string;
  constructor(data?: PartialMessage<_ResolveCommentAction>) {
    super();
    this.commentId = protoInt64.zero;
    proto3.util.initPartial(data, this as _ResolveCommentAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResolveCommentAction {
    return new _ResolveCommentAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResolveCommentAction {
    return new _ResolveCommentAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResolveCommentAction {
    return new _ResolveCommentAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ResolveCommentAction | PlainMessage<_ResolveCommentAction> | undefined | null, b2: _ResolveCommentAction | PlainMessage<_ResolveCommentAction> | undefined | null): boolean {
    return proto3.util.equals(_ResolveCommentAction as unknown as MessageType<_ResolveCommentAction>, a, b2);
  }
})();
export type ResolveCommentAction = InstanceType<typeof ResolveCommentAction$Runtime>;
var ResolveCommentAction: MessageType<ResolveCommentAction> = ResolveCommentAction$Runtime as unknown as MessageType<ResolveCommentAction>;
(ResolveCommentAction as MutableMessageType<ResolveCommentAction>).runtime = proto3;
(ResolveCommentAction as MutableMessageType<ResolveCommentAction>).typeName = "agent.v1.ResolveCommentAction";
(ResolveCommentAction as MutableMessageType<ResolveCommentAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "comment_id",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "comment_reference", kind: "scalar", T: 9, opt: true }
]);
var GetCiStatusAction$Runtime = (() => class _GetCiStatusAction extends Message<_GetCiStatusAction> {
  declare prUrl?: string;
  declare branchName?: string;
  declare repoUrl?: string;
  constructor(data?: PartialMessage<_GetCiStatusAction>) {
    super();
    proto3.util.initPartial(data, this as _GetCiStatusAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCiStatusAction {
    return new _GetCiStatusAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCiStatusAction {
    return new _GetCiStatusAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCiStatusAction {
    return new _GetCiStatusAction().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCiStatusAction | PlainMessage<_GetCiStatusAction> | undefined | null, b2: _GetCiStatusAction | PlainMessage<_GetCiStatusAction> | undefined | null): boolean {
    return proto3.util.equals(_GetCiStatusAction as unknown as MessageType<_GetCiStatusAction>, a, b2);
  }
})();
export type GetCiStatusAction = InstanceType<typeof GetCiStatusAction$Runtime>;
var GetCiStatusAction: MessageType<GetCiStatusAction> = GetCiStatusAction$Runtime as unknown as MessageType<GetCiStatusAction>;
(GetCiStatusAction as MutableMessageType<GetCiStatusAction>).runtime = proto3;
(GetCiStatusAction as MutableMessageType<GetCiStatusAction>).typeName = "agent.v1.GetCiStatusAction";
(GetCiStatusAction as MutableMessageType<GetCiStatusAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true }
]);
var SetPrStatusAction$Runtime = (() => class _SetPrStatusAction extends Message<_SetPrStatusAction> {
  declare prUrl?: string;
  declare branchName?: string;
  declare repoUrl?: string;
  declare status: PullRequestStatus;
  constructor(data?: PartialMessage<_SetPrStatusAction>) {
    super();
    this.status = PullRequestStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SetPrStatusAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetPrStatusAction {
    return new _SetPrStatusAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetPrStatusAction {
    return new _SetPrStatusAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetPrStatusAction {
    return new _SetPrStatusAction().fromJsonString(jsonString, options);
  }
  static equals(a: _SetPrStatusAction | PlainMessage<_SetPrStatusAction> | undefined | null, b2: _SetPrStatusAction | PlainMessage<_SetPrStatusAction> | undefined | null): boolean {
    return proto3.util.equals(_SetPrStatusAction as unknown as MessageType<_SetPrStatusAction>, a, b2);
  }
})();
export type SetPrStatusAction = InstanceType<typeof SetPrStatusAction$Runtime>;
var SetPrStatusAction: MessageType<SetPrStatusAction> = SetPrStatusAction$Runtime as unknown as MessageType<SetPrStatusAction>;
(SetPrStatusAction as MutableMessageType<SetPrStatusAction>).runtime = proto3;
(SetPrStatusAction as MutableMessageType<SetPrStatusAction>).typeName = "agent.v1.SetPrStatusAction";
(SetPrStatusAction as MutableMessageType<SetPrStatusAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "repo_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(PullRequestStatus) }
]);
var PrManagementResult$Runtime = (() => class _PrManagementResult extends Message<_PrManagementResult> {
  declare result: { case: "success"; value: PrManagementSuccess } | { case: "error"; value: PrManagementError } | { case: "rejected"; value: PrManagementRejected } | { case: "registered"; value: PrManagementRegistered } | { case: "needsConfirmation"; value: PrManagementNeedsConfirmation } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PrManagementResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _PrManagementResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementResult {
    return new _PrManagementResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementResult {
    return new _PrManagementResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementResult {
    return new _PrManagementResult().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementResult | PlainMessage<_PrManagementResult> | undefined | null, b2: _PrManagementResult | PlainMessage<_PrManagementResult> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementResult as unknown as MessageType<_PrManagementResult>, a, b2);
  }
})();
export type PrManagementResult = InstanceType<typeof PrManagementResult$Runtime>;
var PrManagementResult: MessageType<PrManagementResult> = PrManagementResult$Runtime as unknown as MessageType<PrManagementResult>;
(PrManagementResult as MutableMessageType<PrManagementResult>).runtime = proto3;
(PrManagementResult as MutableMessageType<PrManagementResult>).typeName = "agent.v1.PrManagementResult";
(PrManagementResult as MutableMessageType<PrManagementResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: PrManagementSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: PrManagementError, oneof: "result" },
  { no: 3, name: "rejected", kind: "message", T: PrManagementRejected, oneof: "result" },
  { no: 4, name: "registered", kind: "message", T: PrManagementRegistered, oneof: "result" },
  { no: 5, name: "needs_confirmation", kind: "message", T: PrManagementNeedsConfirmation, oneof: "result" }
]);
var PrManagementSuccess$Runtime = (() => class _PrManagementSuccess extends Message<_PrManagementSuccess> {
  declare prUrl: string;
  declare prNumber: number;
  declare message: string;
  constructor(data?: PartialMessage<_PrManagementSuccess>) {
    super();
    this.prUrl = "";
    this.prNumber = 0;
    this.message = "";
    proto3.util.initPartial(data, this as _PrManagementSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementSuccess {
    return new _PrManagementSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementSuccess {
    return new _PrManagementSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementSuccess {
    return new _PrManagementSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementSuccess | PlainMessage<_PrManagementSuccess> | undefined | null, b2: _PrManagementSuccess | PlainMessage<_PrManagementSuccess> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementSuccess as unknown as MessageType<_PrManagementSuccess>, a, b2);
  }
})();
export type PrManagementSuccess = InstanceType<typeof PrManagementSuccess$Runtime>;
var PrManagementSuccess: MessageType<PrManagementSuccess> = PrManagementSuccess$Runtime as unknown as MessageType<PrManagementSuccess>;
(PrManagementSuccess as MutableMessageType<PrManagementSuccess>).runtime = proto3;
(PrManagementSuccess as MutableMessageType<PrManagementSuccess>).typeName = "agent.v1.PrManagementSuccess";
(PrManagementSuccess as MutableMessageType<PrManagementSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrManagementError$Runtime = (() => class _PrManagementError extends Message<_PrManagementError> {
  declare error: string;
  constructor(data?: PartialMessage<_PrManagementError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _PrManagementError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementError {
    return new _PrManagementError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementError {
    return new _PrManagementError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementError {
    return new _PrManagementError().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementError | PlainMessage<_PrManagementError> | undefined | null, b2: _PrManagementError | PlainMessage<_PrManagementError> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementError as unknown as MessageType<_PrManagementError>, a, b2);
  }
})();
export type PrManagementError = InstanceType<typeof PrManagementError$Runtime>;
var PrManagementError: MessageType<PrManagementError> = PrManagementError$Runtime as unknown as MessageType<PrManagementError>;
(PrManagementError as MutableMessageType<PrManagementError>).runtime = proto3;
(PrManagementError as MutableMessageType<PrManagementError>).typeName = "agent.v1.PrManagementError";
(PrManagementError as MutableMessageType<PrManagementError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrManagementRejected$Runtime = (() => class _PrManagementRejected extends Message<_PrManagementRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_PrManagementRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _PrManagementRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementRejected {
    return new _PrManagementRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementRejected {
    return new _PrManagementRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementRejected {
    return new _PrManagementRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementRejected | PlainMessage<_PrManagementRejected> | undefined | null, b2: _PrManagementRejected | PlainMessage<_PrManagementRejected> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementRejected as unknown as MessageType<_PrManagementRejected>, a, b2);
  }
})();
export type PrManagementRejected = InstanceType<typeof PrManagementRejected$Runtime>;
var PrManagementRejected: MessageType<PrManagementRejected> = PrManagementRejected$Runtime as unknown as MessageType<PrManagementRejected>;
(PrManagementRejected as MutableMessageType<PrManagementRejected>).runtime = proto3;
(PrManagementRejected as MutableMessageType<PrManagementRejected>).typeName = "agent.v1.PrManagementRejected";
(PrManagementRejected as MutableMessageType<PrManagementRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrManagementRegistered$Runtime = (() => class _PrManagementRegistered extends Message<_PrManagementRegistered> {
  declare message: string;
  declare title: string;
  declare body: string;
  declare baseBranch?: string;
  declare draft?: boolean;
  declare branchName: string;
  constructor(data?: PartialMessage<_PrManagementRegistered>) {
    super();
    this.message = "";
    this.title = "";
    this.body = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _PrManagementRegistered);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementRegistered {
    return new _PrManagementRegistered().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementRegistered {
    return new _PrManagementRegistered().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementRegistered {
    return new _PrManagementRegistered().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementRegistered | PlainMessage<_PrManagementRegistered> | undefined | null, b2: _PrManagementRegistered | PlainMessage<_PrManagementRegistered> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementRegistered as unknown as MessageType<_PrManagementRegistered>, a, b2);
  }
})();
export type PrManagementRegistered = InstanceType<typeof PrManagementRegistered$Runtime>;
var PrManagementRegistered: MessageType<PrManagementRegistered> = PrManagementRegistered$Runtime as unknown as MessageType<PrManagementRegistered>;
(PrManagementRegistered as MutableMessageType<PrManagementRegistered>).runtime = proto3;
(PrManagementRegistered as MutableMessageType<PrManagementRegistered>).typeName = "agent.v1.PrManagementRegistered";
(PrManagementRegistered as MutableMessageType<PrManagementRegistered>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "draft", kind: "scalar", T: 8, opt: true },
  {
    no: 6,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrManagementNeedsConfirmation$Runtime = (() => class _PrManagementNeedsConfirmation extends Message<_PrManagementNeedsConfirmation> {
  declare message: string;
  declare discoveredPrUrl: string;
  declare discoveredPrNumber: number;
  declare discoveredPrTitle: string;
  declare branchName: string;
  constructor(data?: PartialMessage<_PrManagementNeedsConfirmation>) {
    super();
    this.message = "";
    this.discoveredPrUrl = "";
    this.discoveredPrNumber = 0;
    this.discoveredPrTitle = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _PrManagementNeedsConfirmation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementNeedsConfirmation {
    return new _PrManagementNeedsConfirmation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementNeedsConfirmation {
    return new _PrManagementNeedsConfirmation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementNeedsConfirmation {
    return new _PrManagementNeedsConfirmation().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementNeedsConfirmation | PlainMessage<_PrManagementNeedsConfirmation> | undefined | null, b2: _PrManagementNeedsConfirmation | PlainMessage<_PrManagementNeedsConfirmation> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementNeedsConfirmation as unknown as MessageType<_PrManagementNeedsConfirmation>, a, b2);
  }
})();
export type PrManagementNeedsConfirmation = InstanceType<typeof PrManagementNeedsConfirmation$Runtime>;
var PrManagementNeedsConfirmation: MessageType<PrManagementNeedsConfirmation> = PrManagementNeedsConfirmation$Runtime as unknown as MessageType<PrManagementNeedsConfirmation>;
(PrManagementNeedsConfirmation as MutableMessageType<PrManagementNeedsConfirmation>).runtime = proto3;
(PrManagementNeedsConfirmation as MutableMessageType<PrManagementNeedsConfirmation>).typeName = "agent.v1.PrManagementNeedsConfirmation";
(PrManagementNeedsConfirmation as MutableMessageType<PrManagementNeedsConfirmation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "discovered_pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "discovered_pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "discovered_pr_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PrManagementToolCall$Runtime = (() => class _PrManagementToolCall extends Message<_PrManagementToolCall> {
  declare args?: PrManagementArgs;
  declare result?: PrManagementResult;
  constructor(data?: PartialMessage<_PrManagementToolCall>) {
    super();
    proto3.util.initPartial(data, this as _PrManagementToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementToolCall {
    return new _PrManagementToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementToolCall {
    return new _PrManagementToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementToolCall {
    return new _PrManagementToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementToolCall | PlainMessage<_PrManagementToolCall> | undefined | null, b2: _PrManagementToolCall | PlainMessage<_PrManagementToolCall> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementToolCall as unknown as MessageType<_PrManagementToolCall>, a, b2);
  }
})();
export type PrManagementToolCall = InstanceType<typeof PrManagementToolCall$Runtime>;
var PrManagementToolCall: MessageType<PrManagementToolCall> = PrManagementToolCall$Runtime as unknown as MessageType<PrManagementToolCall>;
(PrManagementToolCall as MutableMessageType<PrManagementToolCall>).runtime = proto3;
(PrManagementToolCall as MutableMessageType<PrManagementToolCall>).typeName = "agent.v1.PrManagementToolCall";
(PrManagementToolCall as MutableMessageType<PrManagementToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PrManagementArgs },
  { no: 2, name: "result", kind: "message", T: PrManagementResult }
]);
var PrManagementRequestQuery$Runtime = (() => class _PrManagementRequestQuery extends Message<_PrManagementRequestQuery> {
  declare args?: PrManagementArgs;
  constructor(data?: PartialMessage<_PrManagementRequestQuery>) {
    super();
    proto3.util.initPartial(data, this as _PrManagementRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PrManagementRequestQuery {
    return new _PrManagementRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PrManagementRequestQuery {
    return new _PrManagementRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PrManagementRequestQuery {
    return new _PrManagementRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _PrManagementRequestQuery | PlainMessage<_PrManagementRequestQuery> | undefined | null, b2: _PrManagementRequestQuery | PlainMessage<_PrManagementRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_PrManagementRequestQuery as unknown as MessageType<_PrManagementRequestQuery>, a, b2);
  }
})();
export type PrManagementRequestQuery = InstanceType<typeof PrManagementRequestQuery$Runtime>;
var PrManagementRequestQuery: MessageType<PrManagementRequestQuery> = PrManagementRequestQuery$Runtime as unknown as MessageType<PrManagementRequestQuery>;
(PrManagementRequestQuery as MutableMessageType<PrManagementRequestQuery>).runtime = proto3;
(PrManagementRequestQuery as MutableMessageType<PrManagementRequestQuery>).typeName = "agent.v1.PrManagementRequestQuery";
(PrManagementRequestQuery as MutableMessageType<PrManagementRequestQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: PrManagementArgs }
]);


export { PullRequestStatus, PrManagementArgs, CreatePrAction, UpdatePrAction, PostCommentAction, ResolveCommentAction, GetCiStatusAction, SetPrStatusAction, PrManagementResult, PrManagementSuccess, PrManagementError, PrManagementRejected, PrManagementRegistered, PrManagementNeedsConfirmation, PrManagementToolCall, PrManagementRequestQuery };
