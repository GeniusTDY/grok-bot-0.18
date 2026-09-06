/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:416150-418651
 * Region SHA-256: 1fa4bc6f85e13a6f4e87199700e955c7592196c44c0067ff038bb35502f21868
 * BackgroundComposer closure exports: 64 messages + 8 enums = 72
 */
import { Message, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type SCMPullRequestState = 0 | 1 | 2 | 3;
var SCMPullRequestState: {
  "SCM_PULL_REQUEST_STATE_UNSPECIFIED": 0;
  "SCM_PULL_REQUEST_STATE_OPEN": 1;
  "SCM_PULL_REQUEST_STATE_CLOSED": 2;
  "SCM_PULL_REQUEST_STATE_MERGED": 3;
  0: "SCM_PULL_REQUEST_STATE_UNSPECIFIED";
  1: "SCM_PULL_REQUEST_STATE_OPEN";
  2: "SCM_PULL_REQUEST_STATE_CLOSED";
  3: "SCM_PULL_REQUEST_STATE_MERGED";
};
export type SCMMergeability = 0 | 1 | 2 | 3;
var SCMMergeability: {
  "SCM_MERGEABILITY_UNSPECIFIED": 0;
  "SCM_MERGEABILITY_UNKNOWN": 1;
  "SCM_MERGEABILITY_MERGEABLE": 2;
  "SCM_MERGEABILITY_CONFLICTING": 3;
  0: "SCM_MERGEABILITY_UNSPECIFIED";
  1: "SCM_MERGEABILITY_UNKNOWN";
  2: "SCM_MERGEABILITY_MERGEABLE";
  3: "SCM_MERGEABILITY_CONFLICTING";
};
export type SCMCiStatus = 0 | 1 | 2 | 3 | 4;
var SCMCiStatus: {
  "SCM_CI_STATUS_UNSPECIFIED": 0;
  "SCM_CI_STATUS_UNKNOWN": 1;
  "SCM_CI_STATUS_SUCCESS": 2;
  "SCM_CI_STATUS_FAILURE": 3;
  "SCM_CI_STATUS_PENDING": 4;
  0: "SCM_CI_STATUS_UNSPECIFIED";
  1: "SCM_CI_STATUS_UNKNOWN";
  2: "SCM_CI_STATUS_SUCCESS";
  3: "SCM_CI_STATUS_FAILURE";
  4: "SCM_CI_STATUS_PENDING";
};
export type SCMPullRequestDiffFileStatus = 0 | 1 | 2 | 3 | 4;
var SCMPullRequestDiffFileStatus: {
  "SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED": 0;
  "SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED": 1;
  "SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED": 2;
  "SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED": 3;
  "SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED": 4;
  0: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED";
  1: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED";
  2: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED";
  3: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED";
  4: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED";
};
export type SCMMergeMethod = 0 | 1 | 2 | 3;
var SCMMergeMethod: {
  "SCM_MERGE_METHOD_UNSPECIFIED": 0;
  "SCM_MERGE_METHOD_MERGE": 1;
  "SCM_MERGE_METHOD_SQUASH": 2;
  "SCM_MERGE_METHOD_REBASE": 3;
  0: "SCM_MERGE_METHOD_UNSPECIFIED";
  1: "SCM_MERGE_METHOD_MERGE";
  2: "SCM_MERGE_METHOD_SQUASH";
  3: "SCM_MERGE_METHOD_REBASE";
};
export type SCMPullRequestStackSource = 0 | 1 | 2 | 3;
var SCMPullRequestStackSource: {
  "SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED": 0;
  "SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN": 1;
  "SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE": 2;
  "SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE": 3;
  0: "SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED";
  1: "SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN";
  2: "SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE";
  3: "SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE";
};
export type PullRequestFileContentsStatus = 0 | 1 | 2 | 3 | 4 | 5;
var PullRequestFileContentsStatus: {
  "UNSPECIFIED": 0;
  "OK": 1;
  "NOT_FOUND": 2;
  "TOO_LARGE": 3;
  "NOT_SUPPORTED": 4;
  "ERROR": 5;
  0: "UNSPECIFIED";
  1: "OK";
  2: "NOT_FOUND";
  3: "TOO_LARGE";
  4: "NOT_SUPPORTED";
  5: "ERROR";
};
export type CheckLogExcerptStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6;
var CheckLogExcerptStatus: {
  "UNSPECIFIED": 0;
  "OK": 1;
  "NOT_SUPPORTED": 2;
  "NOT_FOUND": 3;
  "INSUFFICIENT_PERMISSIONS": 4;
  "AUTH_REQUIRED": 5;
  "ERROR": 6;
  0: "UNSPECIFIED";
  1: "OK";
  2: "NOT_SUPPORTED";
  3: "NOT_FOUND";
  4: "INSUFFICIENT_PERMISSIONS";
  5: "AUTH_REQUIRED";
  6: "ERROR";
};
(function(SCMPullRequestState2) {
  SCMPullRequestState2[SCMPullRequestState2["SCM_PULL_REQUEST_STATE_UNSPECIFIED"] = 0] = "SCM_PULL_REQUEST_STATE_UNSPECIFIED";
  SCMPullRequestState2[SCMPullRequestState2["SCM_PULL_REQUEST_STATE_OPEN"] = 1] = "SCM_PULL_REQUEST_STATE_OPEN";
  SCMPullRequestState2[SCMPullRequestState2["SCM_PULL_REQUEST_STATE_CLOSED"] = 2] = "SCM_PULL_REQUEST_STATE_CLOSED";
  SCMPullRequestState2[SCMPullRequestState2["SCM_PULL_REQUEST_STATE_MERGED"] = 3] = "SCM_PULL_REQUEST_STATE_MERGED";
})(SCMPullRequestState! || (SCMPullRequestState = {} as typeof SCMPullRequestState));
proto3.util.setEnumType(SCMPullRequestState, "aiserver.v1.SCMPullRequestState", [
  { no: 0, name: "SCM_PULL_REQUEST_STATE_UNSPECIFIED" },
  { no: 1, name: "SCM_PULL_REQUEST_STATE_OPEN" },
  { no: 2, name: "SCM_PULL_REQUEST_STATE_CLOSED" },
  { no: 3, name: "SCM_PULL_REQUEST_STATE_MERGED" }
]);
(function(SCMMergeability2) {
  SCMMergeability2[SCMMergeability2["SCM_MERGEABILITY_UNSPECIFIED"] = 0] = "SCM_MERGEABILITY_UNSPECIFIED";
  SCMMergeability2[SCMMergeability2["SCM_MERGEABILITY_UNKNOWN"] = 1] = "SCM_MERGEABILITY_UNKNOWN";
  SCMMergeability2[SCMMergeability2["SCM_MERGEABILITY_MERGEABLE"] = 2] = "SCM_MERGEABILITY_MERGEABLE";
  SCMMergeability2[SCMMergeability2["SCM_MERGEABILITY_CONFLICTING"] = 3] = "SCM_MERGEABILITY_CONFLICTING";
})(SCMMergeability! || (SCMMergeability = {} as typeof SCMMergeability));
proto3.util.setEnumType(SCMMergeability, "aiserver.v1.SCMMergeability", [
  { no: 0, name: "SCM_MERGEABILITY_UNSPECIFIED" },
  { no: 1, name: "SCM_MERGEABILITY_UNKNOWN" },
  { no: 2, name: "SCM_MERGEABILITY_MERGEABLE" },
  { no: 3, name: "SCM_MERGEABILITY_CONFLICTING" }
]);
(function(SCMCiStatus2) {
  SCMCiStatus2[SCMCiStatus2["SCM_CI_STATUS_UNSPECIFIED"] = 0] = "SCM_CI_STATUS_UNSPECIFIED";
  SCMCiStatus2[SCMCiStatus2["SCM_CI_STATUS_UNKNOWN"] = 1] = "SCM_CI_STATUS_UNKNOWN";
  SCMCiStatus2[SCMCiStatus2["SCM_CI_STATUS_SUCCESS"] = 2] = "SCM_CI_STATUS_SUCCESS";
  SCMCiStatus2[SCMCiStatus2["SCM_CI_STATUS_FAILURE"] = 3] = "SCM_CI_STATUS_FAILURE";
  SCMCiStatus2[SCMCiStatus2["SCM_CI_STATUS_PENDING"] = 4] = "SCM_CI_STATUS_PENDING";
})(SCMCiStatus! || (SCMCiStatus = {} as typeof SCMCiStatus));
proto3.util.setEnumType(SCMCiStatus, "aiserver.v1.SCMCiStatus", [
  { no: 0, name: "SCM_CI_STATUS_UNSPECIFIED" },
  { no: 1, name: "SCM_CI_STATUS_UNKNOWN" },
  { no: 2, name: "SCM_CI_STATUS_SUCCESS" },
  { no: 3, name: "SCM_CI_STATUS_FAILURE" },
  { no: 4, name: "SCM_CI_STATUS_PENDING" }
]);
(function(SCMPullRequestDiffFileStatus2) {
  SCMPullRequestDiffFileStatus2[SCMPullRequestDiffFileStatus2["SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED"] = 0] = "SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED";
  SCMPullRequestDiffFileStatus2[SCMPullRequestDiffFileStatus2["SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED"] = 1] = "SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED";
  SCMPullRequestDiffFileStatus2[SCMPullRequestDiffFileStatus2["SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED"] = 2] = "SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED";
  SCMPullRequestDiffFileStatus2[SCMPullRequestDiffFileStatus2["SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED"] = 3] = "SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED";
  SCMPullRequestDiffFileStatus2[SCMPullRequestDiffFileStatus2["SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED"] = 4] = "SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED";
})(SCMPullRequestDiffFileStatus! || (SCMPullRequestDiffFileStatus = {} as typeof SCMPullRequestDiffFileStatus));
proto3.util.setEnumType(SCMPullRequestDiffFileStatus, "aiserver.v1.SCMPullRequestDiffFileStatus", [
  { no: 0, name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED" },
  { no: 1, name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_ADDED" },
  { no: 2, name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_DELETED" },
  { no: 3, name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_MODIFIED" },
  { no: 4, name: "SCM_PULL_REQUEST_DIFF_FILE_STATUS_RENAMED" }
]);
(function(SCMMergeMethod2) {
  SCMMergeMethod2[SCMMergeMethod2["SCM_MERGE_METHOD_UNSPECIFIED"] = 0] = "SCM_MERGE_METHOD_UNSPECIFIED";
  SCMMergeMethod2[SCMMergeMethod2["SCM_MERGE_METHOD_MERGE"] = 1] = "SCM_MERGE_METHOD_MERGE";
  SCMMergeMethod2[SCMMergeMethod2["SCM_MERGE_METHOD_SQUASH"] = 2] = "SCM_MERGE_METHOD_SQUASH";
  SCMMergeMethod2[SCMMergeMethod2["SCM_MERGE_METHOD_REBASE"] = 3] = "SCM_MERGE_METHOD_REBASE";
})(SCMMergeMethod! || (SCMMergeMethod = {} as typeof SCMMergeMethod));
proto3.util.setEnumType(SCMMergeMethod, "aiserver.v1.SCMMergeMethod", [
  { no: 0, name: "SCM_MERGE_METHOD_UNSPECIFIED" },
  { no: 1, name: "SCM_MERGE_METHOD_MERGE" },
  { no: 2, name: "SCM_MERGE_METHOD_SQUASH" },
  { no: 3, name: "SCM_MERGE_METHOD_REBASE" }
]);
(function(SCMPullRequestStackSource2) {
  SCMPullRequestStackSource2[SCMPullRequestStackSource2["SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED"] = 0] = "SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED";
  SCMPullRequestStackSource2[SCMPullRequestStackSource2["SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN"] = 1] = "SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN";
  SCMPullRequestStackSource2[SCMPullRequestStackSource2["SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE"] = 2] = "SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE";
  SCMPullRequestStackSource2[SCMPullRequestStackSource2["SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE"] = 3] = "SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE";
})(SCMPullRequestStackSource! || (SCMPullRequestStackSource = {} as typeof SCMPullRequestStackSource));
proto3.util.setEnumType(SCMPullRequestStackSource, "aiserver.v1.SCMPullRequestStackSource", [
  { no: 0, name: "SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED" },
  { no: 1, name: "SCM_PULL_REQUEST_STACK_SOURCE_ORIGIN" },
  { no: 2, name: "SCM_PULL_REQUEST_STACK_SOURCE_GRAPHITE" },
  { no: 3, name: "SCM_PULL_REQUEST_STACK_SOURCE_GITHUB_NATIVE" }
]);
(function(PullRequestFileContentsStatus2) {
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["OK"] = 1] = "OK";
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["NOT_FOUND"] = 2] = "NOT_FOUND";
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["TOO_LARGE"] = 3] = "TOO_LARGE";
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["NOT_SUPPORTED"] = 4] = "NOT_SUPPORTED";
  PullRequestFileContentsStatus2[PullRequestFileContentsStatus2["ERROR"] = 5] = "ERROR";
})(PullRequestFileContentsStatus! || (PullRequestFileContentsStatus = {} as typeof PullRequestFileContentsStatus));
proto3.util.setEnumType(PullRequestFileContentsStatus, "aiserver.v1.PullRequestFileContentsStatus", [
  { no: 0, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_UNSPECIFIED" },
  { no: 1, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_OK" },
  { no: 2, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_NOT_FOUND" },
  { no: 3, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_TOO_LARGE" },
  { no: 4, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_NOT_SUPPORTED" },
  { no: 5, name: "PULL_REQUEST_FILE_CONTENTS_STATUS_ERROR" }
]);
(function(CheckLogExcerptStatus2) {
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["OK"] = 1] = "OK";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["NOT_SUPPORTED"] = 2] = "NOT_SUPPORTED";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["NOT_FOUND"] = 3] = "NOT_FOUND";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["INSUFFICIENT_PERMISSIONS"] = 4] = "INSUFFICIENT_PERMISSIONS";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["AUTH_REQUIRED"] = 5] = "AUTH_REQUIRED";
  CheckLogExcerptStatus2[CheckLogExcerptStatus2["ERROR"] = 6] = "ERROR";
})(CheckLogExcerptStatus! || (CheckLogExcerptStatus = {} as typeof CheckLogExcerptStatus));
proto3.util.setEnumType(CheckLogExcerptStatus, "aiserver.v1.CheckLogExcerptStatus", [
  { no: 0, name: "CHECK_LOG_EXCERPT_STATUS_UNSPECIFIED" },
  { no: 1, name: "CHECK_LOG_EXCERPT_STATUS_OK" },
  { no: 2, name: "CHECK_LOG_EXCERPT_STATUS_NOT_SUPPORTED" },
  { no: 3, name: "CHECK_LOG_EXCERPT_STATUS_NOT_FOUND" },
  { no: 4, name: "CHECK_LOG_EXCERPT_STATUS_INSUFFICIENT_PERMISSIONS" },
  { no: 5, name: "CHECK_LOG_EXCERPT_STATUS_AUTH_REQUIRED" },
  { no: 6, name: "CHECK_LOG_EXCERPT_STATUS_ERROR" }
]);
var GetPullRequestRequest$Runtime = (() => class _GetPullRequestRequest extends Message<_GetPullRequestRequest> {
  declare prUrl: string;
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_GetPullRequestRequest>) {
    super();
    this.prUrl = "";
    this.skipCache = false;
    proto3.util.initPartial(data, this as _GetPullRequestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestRequest {
    return new _GetPullRequestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestRequest {
    return new _GetPullRequestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestRequest {
    return new _GetPullRequestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestRequest | PlainMessage<_GetPullRequestRequest> | undefined | null, b2: _GetPullRequestRequest | PlainMessage<_GetPullRequestRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestRequest as unknown as MessageType<_GetPullRequestRequest>, a, b2);
  }
})();
export type GetPullRequestRequest = InstanceType<typeof GetPullRequestRequest$Runtime>;
var GetPullRequestRequest: MessageType<GetPullRequestRequest> = GetPullRequestRequest$Runtime as unknown as MessageType<GetPullRequestRequest>;
(GetPullRequestRequest as MutableMessageType<GetPullRequestRequest>).runtime = proto3;
(GetPullRequestRequest as MutableMessageType<GetPullRequestRequest>).typeName = "aiserver.v1.GetPullRequestRequest";
(GetPullRequestRequest as MutableMessageType<GetPullRequestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetPullRequestResponse$Runtime = (() => class _GetPullRequestResponse extends Message<_GetPullRequestResponse> {
  declare pullRequest?: SCMPullRequest;
  constructor(data?: PartialMessage<_GetPullRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetPullRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestResponse {
    return new _GetPullRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestResponse {
    return new _GetPullRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestResponse {
    return new _GetPullRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestResponse | PlainMessage<_GetPullRequestResponse> | undefined | null, b2: _GetPullRequestResponse | PlainMessage<_GetPullRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestResponse as unknown as MessageType<_GetPullRequestResponse>, a, b2);
  }
})();
export type GetPullRequestResponse = InstanceType<typeof GetPullRequestResponse$Runtime>;
var GetPullRequestResponse: MessageType<GetPullRequestResponse> = GetPullRequestResponse$Runtime as unknown as MessageType<GetPullRequestResponse>;
(GetPullRequestResponse as MutableMessageType<GetPullRequestResponse>).runtime = proto3;
(GetPullRequestResponse as MutableMessageType<GetPullRequestResponse>).typeName = "aiserver.v1.GetPullRequestResponse";
(GetPullRequestResponse as MutableMessageType<GetPullRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pull_request", kind: "message", T: SCMPullRequest }
]);
var GetPullRequestStackRequest$Runtime = (() => class _GetPullRequestStackRequest extends Message<_GetPullRequestStackRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_GetPullRequestStackRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _GetPullRequestStackRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestStackRequest {
    return new _GetPullRequestStackRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestStackRequest {
    return new _GetPullRequestStackRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestStackRequest {
    return new _GetPullRequestStackRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestStackRequest | PlainMessage<_GetPullRequestStackRequest> | undefined | null, b2: _GetPullRequestStackRequest | PlainMessage<_GetPullRequestStackRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestStackRequest as unknown as MessageType<_GetPullRequestStackRequest>, a, b2);
  }
})();
export type GetPullRequestStackRequest = InstanceType<typeof GetPullRequestStackRequest$Runtime>;
var GetPullRequestStackRequest: MessageType<GetPullRequestStackRequest> = GetPullRequestStackRequest$Runtime as unknown as MessageType<GetPullRequestStackRequest>;
(GetPullRequestStackRequest as MutableMessageType<GetPullRequestStackRequest>).runtime = proto3;
(GetPullRequestStackRequest as MutableMessageType<GetPullRequestStackRequest>).typeName = "aiserver.v1.GetPullRequestStackRequest";
(GetPullRequestStackRequest as MutableMessageType<GetPullRequestStackRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetPullRequestStackResponse$Runtime = (() => class _GetPullRequestStackResponse extends Message<_GetPullRequestStackResponse> {
  declare stack?: SCMPullRequestStack;
  constructor(data?: PartialMessage<_GetPullRequestStackResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetPullRequestStackResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestStackResponse {
    return new _GetPullRequestStackResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestStackResponse {
    return new _GetPullRequestStackResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestStackResponse {
    return new _GetPullRequestStackResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestStackResponse | PlainMessage<_GetPullRequestStackResponse> | undefined | null, b2: _GetPullRequestStackResponse | PlainMessage<_GetPullRequestStackResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestStackResponse as unknown as MessageType<_GetPullRequestStackResponse>, a, b2);
  }
})();
export type GetPullRequestStackResponse = InstanceType<typeof GetPullRequestStackResponse$Runtime>;
var GetPullRequestStackResponse: MessageType<GetPullRequestStackResponse> = GetPullRequestStackResponse$Runtime as unknown as MessageType<GetPullRequestStackResponse>;
(GetPullRequestStackResponse as MutableMessageType<GetPullRequestStackResponse>).runtime = proto3;
(GetPullRequestStackResponse as MutableMessageType<GetPullRequestStackResponse>).typeName = "aiserver.v1.GetPullRequestStackResponse";
(GetPullRequestStackResponse as MutableMessageType<GetPullRequestStackResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stack", kind: "message", T: SCMPullRequestStack, opt: true }
]);
var SCMPullRequestStack$Runtime = (() => class _SCMPullRequestStack extends Message<_SCMPullRequestStack> {
  declare source: SCMPullRequestStackSource;
  declare members: SCMPullRequestStackMember[];
  declare edges: SCMPullRequestStackEdge[];
  declare baseRefName?: string;
  constructor(data?: PartialMessage<_SCMPullRequestStack>) {
    super();
    this.source = SCMPullRequestStackSource.SCM_PULL_REQUEST_STACK_SOURCE_UNSPECIFIED;
    this.members = [];
    this.edges = [];
    proto3.util.initPartial(data, this as _SCMPullRequestStack);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestStack {
    return new _SCMPullRequestStack().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestStack {
    return new _SCMPullRequestStack().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestStack {
    return new _SCMPullRequestStack().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestStack | PlainMessage<_SCMPullRequestStack> | undefined | null, b2: _SCMPullRequestStack | PlainMessage<_SCMPullRequestStack> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestStack as unknown as MessageType<_SCMPullRequestStack>, a, b2);
  }
})();
export type SCMPullRequestStack = InstanceType<typeof SCMPullRequestStack$Runtime>;
var SCMPullRequestStack: MessageType<SCMPullRequestStack> = SCMPullRequestStack$Runtime as unknown as MessageType<SCMPullRequestStack>;
(SCMPullRequestStack as MutableMessageType<SCMPullRequestStack>).runtime = proto3;
(SCMPullRequestStack as MutableMessageType<SCMPullRequestStack>).typeName = "aiserver.v1.SCMPullRequestStack";
(SCMPullRequestStack as MutableMessageType<SCMPullRequestStack>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "source", kind: "enum", T: proto3.getEnumType(SCMPullRequestStackSource) },
  { no: 2, name: "members", kind: "message", T: SCMPullRequestStackMember, repeated: true },
  { no: 3, name: "edges", kind: "message", T: SCMPullRequestStackEdge, repeated: true },
  { no: 4, name: "base_ref_name", kind: "scalar", T: 9, opt: true }
]);
var SCMPullRequestStackMember$Runtime = (() => class _SCMPullRequestStackMember extends Message<_SCMPullRequestStackMember> {
  declare pullRequest?: SCMPullRequest;
  declare position?: number;
  constructor(data?: PartialMessage<_SCMPullRequestStackMember>) {
    super();
    proto3.util.initPartial(data, this as _SCMPullRequestStackMember);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestStackMember {
    return new _SCMPullRequestStackMember().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestStackMember {
    return new _SCMPullRequestStackMember().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestStackMember {
    return new _SCMPullRequestStackMember().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestStackMember | PlainMessage<_SCMPullRequestStackMember> | undefined | null, b2: _SCMPullRequestStackMember | PlainMessage<_SCMPullRequestStackMember> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestStackMember as unknown as MessageType<_SCMPullRequestStackMember>, a, b2);
  }
})();
export type SCMPullRequestStackMember = InstanceType<typeof SCMPullRequestStackMember$Runtime>;
var SCMPullRequestStackMember: MessageType<SCMPullRequestStackMember> = SCMPullRequestStackMember$Runtime as unknown as MessageType<SCMPullRequestStackMember>;
(SCMPullRequestStackMember as MutableMessageType<SCMPullRequestStackMember>).runtime = proto3;
(SCMPullRequestStackMember as MutableMessageType<SCMPullRequestStackMember>).typeName = "aiserver.v1.SCMPullRequestStackMember";
(SCMPullRequestStackMember as MutableMessageType<SCMPullRequestStackMember>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pull_request", kind: "message", T: SCMPullRequest },
  { no: 2, name: "position", kind: "scalar", T: 5, opt: true }
]);
var SCMPullRequestStackEdge$Runtime = (() => class _SCMPullRequestStackEdge extends Message<_SCMPullRequestStackEdge> {
  declare parentPrUrl: string;
  declare childPrUrl: string;
  constructor(data?: PartialMessage<_SCMPullRequestStackEdge>) {
    super();
    this.parentPrUrl = "";
    this.childPrUrl = "";
    proto3.util.initPartial(data, this as _SCMPullRequestStackEdge);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestStackEdge {
    return new _SCMPullRequestStackEdge().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestStackEdge {
    return new _SCMPullRequestStackEdge().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestStackEdge {
    return new _SCMPullRequestStackEdge().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestStackEdge | PlainMessage<_SCMPullRequestStackEdge> | undefined | null, b2: _SCMPullRequestStackEdge | PlainMessage<_SCMPullRequestStackEdge> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestStackEdge as unknown as MessageType<_SCMPullRequestStackEdge>, a, b2);
  }
})();
export type SCMPullRequestStackEdge = InstanceType<typeof SCMPullRequestStackEdge$Runtime>;
var SCMPullRequestStackEdge: MessageType<SCMPullRequestStackEdge> = SCMPullRequestStackEdge$Runtime as unknown as MessageType<SCMPullRequestStackEdge>;
(SCMPullRequestStackEdge as MutableMessageType<SCMPullRequestStackEdge>).runtime = proto3;
(SCMPullRequestStackEdge as MutableMessageType<SCMPullRequestStackEdge>).typeName = "aiserver.v1.SCMPullRequestStackEdge";
(SCMPullRequestStackEdge as MutableMessageType<SCMPullRequestStackEdge>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "parent_pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "child_pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BatchGetPullRequestsRequest$Runtime = (() => class _BatchGetPullRequestsRequest extends Message<_BatchGetPullRequestsRequest> {
  declare prUrls: string[];
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_BatchGetPullRequestsRequest>) {
    super();
    this.prUrls = [];
    this.skipCache = false;
    proto3.util.initPartial(data, this as _BatchGetPullRequestsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchGetPullRequestsRequest {
    return new _BatchGetPullRequestsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchGetPullRequestsRequest {
    return new _BatchGetPullRequestsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchGetPullRequestsRequest {
    return new _BatchGetPullRequestsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchGetPullRequestsRequest | PlainMessage<_BatchGetPullRequestsRequest> | undefined | null, b2: _BatchGetPullRequestsRequest | PlainMessage<_BatchGetPullRequestsRequest> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetPullRequestsRequest as unknown as MessageType<_BatchGetPullRequestsRequest>, a, b2);
  }
})();
export type BatchGetPullRequestsRequest = InstanceType<typeof BatchGetPullRequestsRequest$Runtime>;
var BatchGetPullRequestsRequest: MessageType<BatchGetPullRequestsRequest> = BatchGetPullRequestsRequest$Runtime as unknown as MessageType<BatchGetPullRequestsRequest>;
(BatchGetPullRequestsRequest as MutableMessageType<BatchGetPullRequestsRequest>).runtime = proto3;
(BatchGetPullRequestsRequest as MutableMessageType<BatchGetPullRequestsRequest>).typeName = "aiserver.v1.BatchGetPullRequestsRequest";
(BatchGetPullRequestsRequest as MutableMessageType<BatchGetPullRequestsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_urls", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BatchGetPullRequestsResponse$Runtime = (() => class _BatchGetPullRequestsResponse extends Message<_BatchGetPullRequestsResponse> {
  declare pullRequests: { [key: string]: SCMPullRequest };
  declare failedPrUrls: string[];
  constructor(data?: PartialMessage<_BatchGetPullRequestsResponse>) {
    super();
    this.pullRequests = {};
    this.failedPrUrls = [];
    proto3.util.initPartial(data, this as _BatchGetPullRequestsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchGetPullRequestsResponse {
    return new _BatchGetPullRequestsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchGetPullRequestsResponse {
    return new _BatchGetPullRequestsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchGetPullRequestsResponse {
    return new _BatchGetPullRequestsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchGetPullRequestsResponse | PlainMessage<_BatchGetPullRequestsResponse> | undefined | null, b2: _BatchGetPullRequestsResponse | PlainMessage<_BatchGetPullRequestsResponse> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetPullRequestsResponse as unknown as MessageType<_BatchGetPullRequestsResponse>, a, b2);
  }
})();
export type BatchGetPullRequestsResponse = InstanceType<typeof BatchGetPullRequestsResponse$Runtime>;
var BatchGetPullRequestsResponse: MessageType<BatchGetPullRequestsResponse> = BatchGetPullRequestsResponse$Runtime as unknown as MessageType<BatchGetPullRequestsResponse>;
(BatchGetPullRequestsResponse as MutableMessageType<BatchGetPullRequestsResponse>).runtime = proto3;
(BatchGetPullRequestsResponse as MutableMessageType<BatchGetPullRequestsResponse>).typeName = "aiserver.v1.BatchGetPullRequestsResponse";
(BatchGetPullRequestsResponse as MutableMessageType<BatchGetPullRequestsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pull_requests", kind: "map", K: 9, V: { kind: "message", T: SCMPullRequest } },
  { no: 2, name: "failed_pr_urls", kind: "scalar", T: 9, repeated: true }
]);
var BatchGetPullRequestStatusRequest$Runtime = (() => class _BatchGetPullRequestStatusRequest extends Message<_BatchGetPullRequestStatusRequest> {
  declare prUrls: string[];
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_BatchGetPullRequestStatusRequest>) {
    super();
    this.prUrls = [];
    this.skipCache = false;
    proto3.util.initPartial(data, this as _BatchGetPullRequestStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchGetPullRequestStatusRequest {
    return new _BatchGetPullRequestStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchGetPullRequestStatusRequest {
    return new _BatchGetPullRequestStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchGetPullRequestStatusRequest {
    return new _BatchGetPullRequestStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchGetPullRequestStatusRequest | PlainMessage<_BatchGetPullRequestStatusRequest> | undefined | null, b2: _BatchGetPullRequestStatusRequest | PlainMessage<_BatchGetPullRequestStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetPullRequestStatusRequest as unknown as MessageType<_BatchGetPullRequestStatusRequest>, a, b2);
  }
})();
export type BatchGetPullRequestStatusRequest = InstanceType<typeof BatchGetPullRequestStatusRequest$Runtime>;
var BatchGetPullRequestStatusRequest: MessageType<BatchGetPullRequestStatusRequest> = BatchGetPullRequestStatusRequest$Runtime as unknown as MessageType<BatchGetPullRequestStatusRequest>;
(BatchGetPullRequestStatusRequest as MutableMessageType<BatchGetPullRequestStatusRequest>).runtime = proto3;
(BatchGetPullRequestStatusRequest as MutableMessageType<BatchGetPullRequestStatusRequest>).typeName = "aiserver.v1.BatchGetPullRequestStatusRequest";
(BatchGetPullRequestStatusRequest as MutableMessageType<BatchGetPullRequestStatusRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_urls", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BatchGetPullRequestStatusResponse$Runtime = (() => class _BatchGetPullRequestStatusResponse extends Message<_BatchGetPullRequestStatusResponse> {
  declare statuses: { [key: string]: SCMPullRequestStatus };
  declare failedPrUrls: string[];
  constructor(data?: PartialMessage<_BatchGetPullRequestStatusResponse>) {
    super();
    this.statuses = {};
    this.failedPrUrls = [];
    proto3.util.initPartial(data, this as _BatchGetPullRequestStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchGetPullRequestStatusResponse {
    return new _BatchGetPullRequestStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchGetPullRequestStatusResponse {
    return new _BatchGetPullRequestStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchGetPullRequestStatusResponse {
    return new _BatchGetPullRequestStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchGetPullRequestStatusResponse | PlainMessage<_BatchGetPullRequestStatusResponse> | undefined | null, b2: _BatchGetPullRequestStatusResponse | PlainMessage<_BatchGetPullRequestStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_BatchGetPullRequestStatusResponse as unknown as MessageType<_BatchGetPullRequestStatusResponse>, a, b2);
  }
})();
export type BatchGetPullRequestStatusResponse = InstanceType<typeof BatchGetPullRequestStatusResponse$Runtime>;
var BatchGetPullRequestStatusResponse: MessageType<BatchGetPullRequestStatusResponse> = BatchGetPullRequestStatusResponse$Runtime as unknown as MessageType<BatchGetPullRequestStatusResponse>;
(BatchGetPullRequestStatusResponse as MutableMessageType<BatchGetPullRequestStatusResponse>).runtime = proto3;
(BatchGetPullRequestStatusResponse as MutableMessageType<BatchGetPullRequestStatusResponse>).typeName = "aiserver.v1.BatchGetPullRequestStatusResponse";
(BatchGetPullRequestStatusResponse as MutableMessageType<BatchGetPullRequestStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "statuses", kind: "map", K: 9, V: { kind: "message", T: SCMPullRequestStatus } },
  { no: 2, name: "failed_pr_urls", kind: "scalar", T: 9, repeated: true }
]);
var SCMPullRequestStatus$Runtime = (() => class _SCMPullRequestStatus extends Message<_SCMPullRequestStatus> {
  declare title: string;
  declare state: SCMPullRequestState;
  declare isMerged: boolean;
  declare isDraft: boolean;
  declare degradedByRateLimit?: boolean;
  declare updatedAt?: string;
  constructor(data?: PartialMessage<_SCMPullRequestStatus>) {
    super();
    this.title = "";
    this.state = SCMPullRequestState.SCM_PULL_REQUEST_STATE_UNSPECIFIED;
    this.isMerged = false;
    this.isDraft = false;
    proto3.util.initPartial(data, this as _SCMPullRequestStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestStatus {
    return new _SCMPullRequestStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestStatus {
    return new _SCMPullRequestStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestStatus {
    return new _SCMPullRequestStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestStatus | PlainMessage<_SCMPullRequestStatus> | undefined | null, b2: _SCMPullRequestStatus | PlainMessage<_SCMPullRequestStatus> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestStatus as unknown as MessageType<_SCMPullRequestStatus>, a, b2);
  }
})();
export type SCMPullRequestStatus = InstanceType<typeof SCMPullRequestStatus$Runtime>;
var SCMPullRequestStatus: MessageType<SCMPullRequestStatus> = SCMPullRequestStatus$Runtime as unknown as MessageType<SCMPullRequestStatus>;
(SCMPullRequestStatus as MutableMessageType<SCMPullRequestStatus>).runtime = proto3;
(SCMPullRequestStatus as MutableMessageType<SCMPullRequestStatus>).typeName = "aiserver.v1.SCMPullRequestStatus";
(SCMPullRequestStatus as MutableMessageType<SCMPullRequestStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(SCMPullRequestState) },
  {
    no: 3,
    name: "is_merged",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "is_draft",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "degraded_by_rate_limit", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "updated_at", kind: "scalar", T: 9, opt: true }
]);
var SCMPullRequest$Runtime = (() => class _SCMPullRequest extends Message<_SCMPullRequest> {
  declare id: string;
  declare prUrl: string;
  declare number: number;
  declare title: string;
  declare state: SCMPullRequestState;
  declare isMerged: boolean;
  declare isDraft: boolean;
  declare repository: string;
  declare headRefName?: string;
  declare baseRefName?: string;
  declare mergeable: SCMMergeability;
  declare mergeStateStatus: string;
  declare reviewDecision?: string;
  declare ciStatus: SCMCiStatus;
  declare authorLogin?: string;
  declare createdAt?: string;
  declare updatedAt?: string;
  declare mergedAt?: string;
  declare closedAt?: string;
  declare isAutoMergeEnabled: boolean;
  declare viewerCanEnableAutoMerge?: boolean;
  declare body?: string;
  declare commitCount?: number;
  declare reviewCount?: number;
  declare reviewers: SCMPullRequestReviewer[];
  declare requestedReviewers: SCMPullRequestRequestedReviewer[];
  declare mergeStatusDegradedByRateLimit?: boolean;
  constructor(data?: PartialMessage<_SCMPullRequest>) {
    super();
    this.id = "";
    this.prUrl = "";
    this.number = 0;
    this.title = "";
    this.state = SCMPullRequestState.SCM_PULL_REQUEST_STATE_UNSPECIFIED;
    this.isMerged = false;
    this.isDraft = false;
    this.repository = "";
    this.mergeable = SCMMergeability.SCM_MERGEABILITY_UNSPECIFIED;
    this.mergeStateStatus = "";
    this.ciStatus = SCMCiStatus.SCM_CI_STATUS_UNSPECIFIED;
    this.isAutoMergeEnabled = false;
    this.reviewers = [];
    this.requestedReviewers = [];
    proto3.util.initPartial(data, this as _SCMPullRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequest {
    return new _SCMPullRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequest {
    return new _SCMPullRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequest {
    return new _SCMPullRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequest | PlainMessage<_SCMPullRequest> | undefined | null, b2: _SCMPullRequest | PlainMessage<_SCMPullRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequest as unknown as MessageType<_SCMPullRequest>, a, b2);
  }
})();
export type SCMPullRequest = InstanceType<typeof SCMPullRequest$Runtime>;
var SCMPullRequest: MessageType<SCMPullRequest> = SCMPullRequest$Runtime as unknown as MessageType<SCMPullRequest>;
(SCMPullRequest as MutableMessageType<SCMPullRequest>).runtime = proto3;
(SCMPullRequest as MutableMessageType<SCMPullRequest>).typeName = "aiserver.v1.SCMPullRequest";
(SCMPullRequest as MutableMessageType<SCMPullRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "state", kind: "enum", T: proto3.getEnumType(SCMPullRequestState) },
  {
    no: 6,
    name: "is_merged",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "is_draft",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "repository",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "head_ref_name", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "base_ref_name", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "mergeable", kind: "enum", T: proto3.getEnumType(SCMMergeability) },
  {
    no: 12,
    name: "merge_state_status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 13, name: "review_decision", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "ci_status", kind: "enum", T: proto3.getEnumType(SCMCiStatus) },
  { no: 15, name: "author_login", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "created_at", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "updated_at", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "merged_at", kind: "scalar", T: 9, opt: true },
  { no: 19, name: "closed_at", kind: "scalar", T: 9, opt: true },
  {
    no: 20,
    name: "is_auto_merge_enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 21, name: "viewer_can_enable_auto_merge", kind: "scalar", T: 8, opt: true },
  { no: 22, name: "body", kind: "scalar", T: 9, opt: true },
  { no: 23, name: "commit_count", kind: "scalar", T: 5, opt: true },
  { no: 24, name: "review_count", kind: "scalar", T: 5, opt: true },
  { no: 25, name: "reviewers", kind: "message", T: SCMPullRequestReviewer, repeated: true },
  { no: 26, name: "requested_reviewers", kind: "message", T: SCMPullRequestRequestedReviewer, repeated: true },
  { no: 27, name: "merge_status_degraded_by_rate_limit", kind: "scalar", T: 8, opt: true }
]);
var SCMPullRequestReviewer$Runtime = (() => class _SCMPullRequestReviewer extends Message<_SCMPullRequestReviewer> {
  declare login: string;
  declare name?: string;
  declare avatarUrl?: string;
  declare state?: string;
  constructor(data?: PartialMessage<_SCMPullRequestReviewer>) {
    super();
    this.login = "";
    proto3.util.initPartial(data, this as _SCMPullRequestReviewer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestReviewer {
    return new _SCMPullRequestReviewer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestReviewer {
    return new _SCMPullRequestReviewer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestReviewer {
    return new _SCMPullRequestReviewer().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestReviewer | PlainMessage<_SCMPullRequestReviewer> | undefined | null, b2: _SCMPullRequestReviewer | PlainMessage<_SCMPullRequestReviewer> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestReviewer as unknown as MessageType<_SCMPullRequestReviewer>, a, b2);
  }
})();
export type SCMPullRequestReviewer = InstanceType<typeof SCMPullRequestReviewer$Runtime>;
var SCMPullRequestReviewer: MessageType<SCMPullRequestReviewer> = SCMPullRequestReviewer$Runtime as unknown as MessageType<SCMPullRequestReviewer>;
(SCMPullRequestReviewer as MutableMessageType<SCMPullRequestReviewer>).runtime = proto3;
(SCMPullRequestReviewer as MutableMessageType<SCMPullRequestReviewer>).typeName = "aiserver.v1.SCMPullRequestReviewer";
(SCMPullRequestReviewer as MutableMessageType<SCMPullRequestReviewer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "login",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "avatar_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "state", kind: "scalar", T: 9, opt: true }
]);
var SCMPullRequestRequestedReviewer$Runtime = (() => class _SCMPullRequestRequestedReviewer extends Message<_SCMPullRequestRequestedReviewer> {
  declare login: string;
  declare name?: string;
  declare avatarUrl?: string;
  declare kind?: string;
  constructor(data?: PartialMessage<_SCMPullRequestRequestedReviewer>) {
    super();
    this.login = "";
    proto3.util.initPartial(data, this as _SCMPullRequestRequestedReviewer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestRequestedReviewer {
    return new _SCMPullRequestRequestedReviewer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestRequestedReviewer {
    return new _SCMPullRequestRequestedReviewer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestRequestedReviewer {
    return new _SCMPullRequestRequestedReviewer().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestRequestedReviewer | PlainMessage<_SCMPullRequestRequestedReviewer> | undefined | null, b2: _SCMPullRequestRequestedReviewer | PlainMessage<_SCMPullRequestRequestedReviewer> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestRequestedReviewer as unknown as MessageType<_SCMPullRequestRequestedReviewer>, a, b2);
  }
})();
export type SCMPullRequestRequestedReviewer = InstanceType<typeof SCMPullRequestRequestedReviewer$Runtime>;
var SCMPullRequestRequestedReviewer: MessageType<SCMPullRequestRequestedReviewer> = SCMPullRequestRequestedReviewer$Runtime as unknown as MessageType<SCMPullRequestRequestedReviewer>;
(SCMPullRequestRequestedReviewer as MutableMessageType<SCMPullRequestRequestedReviewer>).runtime = proto3;
(SCMPullRequestRequestedReviewer as MutableMessageType<SCMPullRequestRequestedReviewer>).typeName = "aiserver.v1.SCMPullRequestRequestedReviewer";
(SCMPullRequestRequestedReviewer as MutableMessageType<SCMPullRequestRequestedReviewer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "login",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "avatar_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "kind", kind: "scalar", T: 9, opt: true }
]);
var GetPullRequestDiffRequest$Runtime = (() => class _GetPullRequestDiffRequest extends Message<_GetPullRequestDiffRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_GetPullRequestDiffRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _GetPullRequestDiffRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestDiffRequest {
    return new _GetPullRequestDiffRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestDiffRequest {
    return new _GetPullRequestDiffRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestDiffRequest {
    return new _GetPullRequestDiffRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestDiffRequest | PlainMessage<_GetPullRequestDiffRequest> | undefined | null, b2: _GetPullRequestDiffRequest | PlainMessage<_GetPullRequestDiffRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestDiffRequest as unknown as MessageType<_GetPullRequestDiffRequest>, a, b2);
  }
})();
export type GetPullRequestDiffRequest = InstanceType<typeof GetPullRequestDiffRequest$Runtime>;
var GetPullRequestDiffRequest: MessageType<GetPullRequestDiffRequest> = GetPullRequestDiffRequest$Runtime as unknown as MessageType<GetPullRequestDiffRequest>;
(GetPullRequestDiffRequest as MutableMessageType<GetPullRequestDiffRequest>).runtime = proto3;
(GetPullRequestDiffRequest as MutableMessageType<GetPullRequestDiffRequest>).typeName = "aiserver.v1.GetPullRequestDiffRequest";
(GetPullRequestDiffRequest as MutableMessageType<GetPullRequestDiffRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetPullRequestFileContentsRequest$Runtime = (() => class _GetPullRequestFileContentsRequest extends Message<_GetPullRequestFileContentsRequest> {
  declare prUrl: string;
  declare path: string;
  declare ref: string;
  declare maxBytes?: number;
  constructor(data?: PartialMessage<_GetPullRequestFileContentsRequest>) {
    super();
    this.prUrl = "";
    this.path = "";
    this.ref = "";
    proto3.util.initPartial(data, this as _GetPullRequestFileContentsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestFileContentsRequest {
    return new _GetPullRequestFileContentsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestFileContentsRequest {
    return new _GetPullRequestFileContentsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestFileContentsRequest {
    return new _GetPullRequestFileContentsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestFileContentsRequest | PlainMessage<_GetPullRequestFileContentsRequest> | undefined | null, b2: _GetPullRequestFileContentsRequest | PlainMessage<_GetPullRequestFileContentsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestFileContentsRequest as unknown as MessageType<_GetPullRequestFileContentsRequest>, a, b2);
  }
})();
export type GetPullRequestFileContentsRequest = InstanceType<typeof GetPullRequestFileContentsRequest$Runtime>;
var GetPullRequestFileContentsRequest: MessageType<GetPullRequestFileContentsRequest> = GetPullRequestFileContentsRequest$Runtime as unknown as MessageType<GetPullRequestFileContentsRequest>;
(GetPullRequestFileContentsRequest as MutableMessageType<GetPullRequestFileContentsRequest>).runtime = proto3;
(GetPullRequestFileContentsRequest as MutableMessageType<GetPullRequestFileContentsRequest>).typeName = "aiserver.v1.GetPullRequestFileContentsRequest";
(GetPullRequestFileContentsRequest as MutableMessageType<GetPullRequestFileContentsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "max_bytes", kind: "scalar", T: 13, opt: true }
]);
var GetPullRequestFileContentsResponse$Runtime = (() => class _GetPullRequestFileContentsResponse extends Message<_GetPullRequestFileContentsResponse> {
  declare status: PullRequestFileContentsStatus;
  declare contentBase64: string;
  declare sizeBytes: bigint;
  constructor(data?: PartialMessage<_GetPullRequestFileContentsResponse>) {
    super();
    this.status = PullRequestFileContentsStatus.UNSPECIFIED;
    this.contentBase64 = "";
    this.sizeBytes = protoInt64.zero;
    proto3.util.initPartial(data, this as _GetPullRequestFileContentsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestFileContentsResponse {
    return new _GetPullRequestFileContentsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestFileContentsResponse {
    return new _GetPullRequestFileContentsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestFileContentsResponse {
    return new _GetPullRequestFileContentsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestFileContentsResponse | PlainMessage<_GetPullRequestFileContentsResponse> | undefined | null, b2: _GetPullRequestFileContentsResponse | PlainMessage<_GetPullRequestFileContentsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestFileContentsResponse as unknown as MessageType<_GetPullRequestFileContentsResponse>, a, b2);
  }
})();
export type GetPullRequestFileContentsResponse = InstanceType<typeof GetPullRequestFileContentsResponse$Runtime>;
var GetPullRequestFileContentsResponse: MessageType<GetPullRequestFileContentsResponse> = GetPullRequestFileContentsResponse$Runtime as unknown as MessageType<GetPullRequestFileContentsResponse>;
(GetPullRequestFileContentsResponse as MutableMessageType<GetPullRequestFileContentsResponse>).runtime = proto3;
(GetPullRequestFileContentsResponse as MutableMessageType<GetPullRequestFileContentsResponse>).typeName = "aiserver.v1.GetPullRequestFileContentsResponse";
(GetPullRequestFileContentsResponse as MutableMessageType<GetPullRequestFileContentsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(PullRequestFileContentsStatus) },
  {
    no: 2,
    name: "content_base64",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "size_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var GetPullRequestChecksRequest$Runtime = (() => class _GetPullRequestChecksRequest extends Message<_GetPullRequestChecksRequest> {
  declare prUrl: string;
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_GetPullRequestChecksRequest>) {
    super();
    this.prUrl = "";
    this.skipCache = false;
    proto3.util.initPartial(data, this as _GetPullRequestChecksRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestChecksRequest {
    return new _GetPullRequestChecksRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestChecksRequest {
    return new _GetPullRequestChecksRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestChecksRequest {
    return new _GetPullRequestChecksRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestChecksRequest | PlainMessage<_GetPullRequestChecksRequest> | undefined | null, b2: _GetPullRequestChecksRequest | PlainMessage<_GetPullRequestChecksRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestChecksRequest as unknown as MessageType<_GetPullRequestChecksRequest>, a, b2);
  }
})();
export type GetPullRequestChecksRequest = InstanceType<typeof GetPullRequestChecksRequest$Runtime>;
var GetPullRequestChecksRequest: MessageType<GetPullRequestChecksRequest> = GetPullRequestChecksRequest$Runtime as unknown as MessageType<GetPullRequestChecksRequest>;
(GetPullRequestChecksRequest as MutableMessageType<GetPullRequestChecksRequest>).runtime = proto3;
(GetPullRequestChecksRequest as MutableMessageType<GetPullRequestChecksRequest>).typeName = "aiserver.v1.GetPullRequestChecksRequest";
(GetPullRequestChecksRequest as MutableMessageType<GetPullRequestChecksRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetPullRequestChecksResponse$Runtime = (() => class _GetPullRequestChecksResponse extends Message<_GetPullRequestChecksResponse> {
  declare checkStatus?: PRCheckStatus;
  constructor(data?: PartialMessage<_GetPullRequestChecksResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetPullRequestChecksResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestChecksResponse {
    return new _GetPullRequestChecksResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestChecksResponse {
    return new _GetPullRequestChecksResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestChecksResponse {
    return new _GetPullRequestChecksResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestChecksResponse | PlainMessage<_GetPullRequestChecksResponse> | undefined | null, b2: _GetPullRequestChecksResponse | PlainMessage<_GetPullRequestChecksResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestChecksResponse as unknown as MessageType<_GetPullRequestChecksResponse>, a, b2);
  }
})();
export type GetPullRequestChecksResponse = InstanceType<typeof GetPullRequestChecksResponse$Runtime>;
var GetPullRequestChecksResponse: MessageType<GetPullRequestChecksResponse> = GetPullRequestChecksResponse$Runtime as unknown as MessageType<GetPullRequestChecksResponse>;
(GetPullRequestChecksResponse as MutableMessageType<GetPullRequestChecksResponse>).runtime = proto3;
(GetPullRequestChecksResponse as MutableMessageType<GetPullRequestChecksResponse>).typeName = "aiserver.v1.GetPullRequestChecksResponse";
(GetPullRequestChecksResponse as MutableMessageType<GetPullRequestChecksResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "check_status", kind: "message", T: PRCheckStatus, opt: true }
]);
var PRCheckStatus$Runtime = (() => class _PRCheckStatus extends Message<_PRCheckStatus> {
  declare overallState: string;
  declare successCount: number;
  declare failureCount: number;
  declare pendingCount: number;
  declare neutralCount: number;
  declare skippedCount: number;
  declare totalCount: number;
  declare checks: PRCheck[];
  declare requiredFailureCount?: number;
  declare requiredPendingCount?: number;
  constructor(data?: PartialMessage<_PRCheckStatus>) {
    super();
    this.overallState = "";
    this.successCount = 0;
    this.failureCount = 0;
    this.pendingCount = 0;
    this.neutralCount = 0;
    this.skippedCount = 0;
    this.totalCount = 0;
    this.checks = [];
    proto3.util.initPartial(data, this as _PRCheckStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PRCheckStatus {
    return new _PRCheckStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PRCheckStatus {
    return new _PRCheckStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PRCheckStatus {
    return new _PRCheckStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _PRCheckStatus | PlainMessage<_PRCheckStatus> | undefined | null, b2: _PRCheckStatus | PlainMessage<_PRCheckStatus> | undefined | null): boolean {
    return proto3.util.equals(_PRCheckStatus as unknown as MessageType<_PRCheckStatus>, a, b2);
  }
})();
export type PRCheckStatus = InstanceType<typeof PRCheckStatus$Runtime>;
var PRCheckStatus: MessageType<PRCheckStatus> = PRCheckStatus$Runtime as unknown as MessageType<PRCheckStatus>;
(PRCheckStatus as MutableMessageType<PRCheckStatus>).runtime = proto3;
(PRCheckStatus as MutableMessageType<PRCheckStatus>).typeName = "aiserver.v1.PRCheckStatus";
(PRCheckStatus as MutableMessageType<PRCheckStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "overall_state",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "success_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "failure_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "pending_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "neutral_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "skipped_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 7,
    name: "total_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 8, name: "checks", kind: "message", T: PRCheck, repeated: true },
  { no: 9, name: "required_failure_count", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "required_pending_count", kind: "scalar", T: 5, opt: true }
]);
var PRCheckAnnotation$Runtime = (() => class _PRCheckAnnotation extends Message<_PRCheckAnnotation> {
  declare path: string;
  declare startLine?: number;
  declare endLine?: number;
  declare annotationLevel?: string;
  declare title?: string;
  declare message: string;
  constructor(data?: PartialMessage<_PRCheckAnnotation>) {
    super();
    this.path = "";
    this.message = "";
    proto3.util.initPartial(data, this as _PRCheckAnnotation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PRCheckAnnotation {
    return new _PRCheckAnnotation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PRCheckAnnotation {
    return new _PRCheckAnnotation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PRCheckAnnotation {
    return new _PRCheckAnnotation().fromJsonString(jsonString, options);
  }
  static equals(a: _PRCheckAnnotation | PlainMessage<_PRCheckAnnotation> | undefined | null, b2: _PRCheckAnnotation | PlainMessage<_PRCheckAnnotation> | undefined | null): boolean {
    return proto3.util.equals(_PRCheckAnnotation as unknown as MessageType<_PRCheckAnnotation>, a, b2);
  }
})();
export type PRCheckAnnotation = InstanceType<typeof PRCheckAnnotation$Runtime>;
var PRCheckAnnotation: MessageType<PRCheckAnnotation> = PRCheckAnnotation$Runtime as unknown as MessageType<PRCheckAnnotation>;
(PRCheckAnnotation as MutableMessageType<PRCheckAnnotation>).runtime = proto3;
(PRCheckAnnotation as MutableMessageType<PRCheckAnnotation>).typeName = "aiserver.v1.PRCheckAnnotation";
(PRCheckAnnotation as MutableMessageType<PRCheckAnnotation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "start_line", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "end_line", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "annotation_level", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "title", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PRCheck$Runtime = (() => class _PRCheck extends Message<_PRCheck> {
  declare name: string;
  declare status: string;
  declare detailsUrl?: string;
  declare summary?: string;
  declare startedAt?: string;
  declare completedAt?: string;
  declare provider?: string;
  declare providerCheckId?: string;
  declare canRerun: boolean;
  declare rerunDisabledReason?: string;
  declare annotations: PRCheckAnnotation[];
  declare annotationsTruncated: boolean;
  declare isRequired: boolean;
  constructor(data?: PartialMessage<_PRCheck>) {
    super();
    this.name = "";
    this.status = "";
    this.canRerun = false;
    this.annotations = [];
    this.annotationsTruncated = false;
    this.isRequired = false;
    proto3.util.initPartial(data, this as _PRCheck);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PRCheck {
    return new _PRCheck().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PRCheck {
    return new _PRCheck().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PRCheck {
    return new _PRCheck().fromJsonString(jsonString, options);
  }
  static equals(a: _PRCheck | PlainMessage<_PRCheck> | undefined | null, b2: _PRCheck | PlainMessage<_PRCheck> | undefined | null): boolean {
    return proto3.util.equals(_PRCheck as unknown as MessageType<_PRCheck>, a, b2);
  }
})();
export type PRCheck = InstanceType<typeof PRCheck$Runtime>;
var PRCheck: MessageType<PRCheck> = PRCheck$Runtime as unknown as MessageType<PRCheck>;
(PRCheck as MutableMessageType<PRCheck>).runtime = proto3;
(PRCheck as MutableMessageType<PRCheck>).typeName = "aiserver.v1.PRCheck";
(PRCheck as MutableMessageType<PRCheck>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "details_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "summary", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "started_at", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "completed_at", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "provider", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "provider_check_id", kind: "scalar", T: 9, opt: true },
  {
    no: 9,
    name: "can_rerun",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 10, name: "rerun_disabled_reason", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "annotations", kind: "message", T: PRCheckAnnotation, repeated: true },
  {
    no: 12,
    name: "annotations_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 13,
    name: "is_required",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetSCMPullRequestCommitsRequest$Runtime = (() => class _GetSCMPullRequestCommitsRequest extends Message<_GetSCMPullRequestCommitsRequest> {
  declare prUrl: string;
  declare afterCursor?: string;
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_GetSCMPullRequestCommitsRequest>) {
    super();
    this.prUrl = "";
    this.skipCache = false;
    proto3.util.initPartial(data, this as _GetSCMPullRequestCommitsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSCMPullRequestCommitsRequest {
    return new _GetSCMPullRequestCommitsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSCMPullRequestCommitsRequest {
    return new _GetSCMPullRequestCommitsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSCMPullRequestCommitsRequest {
    return new _GetSCMPullRequestCommitsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSCMPullRequestCommitsRequest | PlainMessage<_GetSCMPullRequestCommitsRequest> | undefined | null, b2: _GetSCMPullRequestCommitsRequest | PlainMessage<_GetSCMPullRequestCommitsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSCMPullRequestCommitsRequest as unknown as MessageType<_GetSCMPullRequestCommitsRequest>, a, b2);
  }
})();
export type GetSCMPullRequestCommitsRequest = InstanceType<typeof GetSCMPullRequestCommitsRequest$Runtime>;
var GetSCMPullRequestCommitsRequest: MessageType<GetSCMPullRequestCommitsRequest> = GetSCMPullRequestCommitsRequest$Runtime as unknown as MessageType<GetSCMPullRequestCommitsRequest>;
(GetSCMPullRequestCommitsRequest as MutableMessageType<GetSCMPullRequestCommitsRequest>).runtime = proto3;
(GetSCMPullRequestCommitsRequest as MutableMessageType<GetSCMPullRequestCommitsRequest>).typeName = "aiserver.v1.GetSCMPullRequestCommitsRequest";
(GetSCMPullRequestCommitsRequest as MutableMessageType<GetSCMPullRequestCommitsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "after_cursor", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetSCMPullRequestCommitsResponse$Runtime = (() => class _GetSCMPullRequestCommitsResponse extends Message<_GetSCMPullRequestCommitsResponse> {
  declare commits: SCMPullRequestCommit[];
  declare hasNextPage: boolean;
  declare endCursor?: string;
  constructor(data?: PartialMessage<_GetSCMPullRequestCommitsResponse>) {
    super();
    this.commits = [];
    this.hasNextPage = false;
    proto3.util.initPartial(data, this as _GetSCMPullRequestCommitsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSCMPullRequestCommitsResponse {
    return new _GetSCMPullRequestCommitsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSCMPullRequestCommitsResponse {
    return new _GetSCMPullRequestCommitsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSCMPullRequestCommitsResponse {
    return new _GetSCMPullRequestCommitsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSCMPullRequestCommitsResponse | PlainMessage<_GetSCMPullRequestCommitsResponse> | undefined | null, b2: _GetSCMPullRequestCommitsResponse | PlainMessage<_GetSCMPullRequestCommitsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSCMPullRequestCommitsResponse as unknown as MessageType<_GetSCMPullRequestCommitsResponse>, a, b2);
  }
})();
export type GetSCMPullRequestCommitsResponse = InstanceType<typeof GetSCMPullRequestCommitsResponse$Runtime>;
var GetSCMPullRequestCommitsResponse: MessageType<GetSCMPullRequestCommitsResponse> = GetSCMPullRequestCommitsResponse$Runtime as unknown as MessageType<GetSCMPullRequestCommitsResponse>;
(GetSCMPullRequestCommitsResponse as MutableMessageType<GetSCMPullRequestCommitsResponse>).runtime = proto3;
(GetSCMPullRequestCommitsResponse as MutableMessageType<GetSCMPullRequestCommitsResponse>).typeName = "aiserver.v1.GetSCMPullRequestCommitsResponse";
(GetSCMPullRequestCommitsResponse as MutableMessageType<GetSCMPullRequestCommitsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "commits", kind: "message", T: SCMPullRequestCommit, repeated: true },
  {
    no: 2,
    name: "has_next_page",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "end_cursor", kind: "scalar", T: 9, opt: true }
]);
var SCMPullRequestCommit$Runtime = (() => class _SCMPullRequestCommit extends Message<_SCMPullRequestCommit> {
  declare sha: string;
  declare message: string;
  declare committedDate?: string;
  declare additions: number;
  declare deletions: number;
  declare changedFiles?: number;
  declare author?: SCMPullRequestCommitUser;
  declare committer?: SCMPullRequestCommitUser;
  declare authors: SCMPullRequestCommitUser[];
  constructor(data?: PartialMessage<_SCMPullRequestCommit>) {
    super();
    this.sha = "";
    this.message = "";
    this.additions = 0;
    this.deletions = 0;
    this.authors = [];
    proto3.util.initPartial(data, this as _SCMPullRequestCommit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestCommit {
    return new _SCMPullRequestCommit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestCommit {
    return new _SCMPullRequestCommit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestCommit {
    return new _SCMPullRequestCommit().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestCommit | PlainMessage<_SCMPullRequestCommit> | undefined | null, b2: _SCMPullRequestCommit | PlainMessage<_SCMPullRequestCommit> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestCommit as unknown as MessageType<_SCMPullRequestCommit>, a, b2);
  }
})();
export type SCMPullRequestCommit = InstanceType<typeof SCMPullRequestCommit$Runtime>;
var SCMPullRequestCommit: MessageType<SCMPullRequestCommit> = SCMPullRequestCommit$Runtime as unknown as MessageType<SCMPullRequestCommit>;
(SCMPullRequestCommit as MutableMessageType<SCMPullRequestCommit>).runtime = proto3;
(SCMPullRequestCommit as MutableMessageType<SCMPullRequestCommit>).typeName = "aiserver.v1.SCMPullRequestCommit";
(SCMPullRequestCommit as MutableMessageType<SCMPullRequestCommit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "committed_date", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "additions",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "deletions",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "changed_files", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "author", kind: "message", T: SCMPullRequestCommitUser, opt: true },
  { no: 8, name: "committer", kind: "message", T: SCMPullRequestCommitUser, opt: true },
  { no: 9, name: "authors", kind: "message", T: SCMPullRequestCommitUser, repeated: true }
]);
var SCMPullRequestCommitUser$Runtime = (() => class _SCMPullRequestCommitUser extends Message<_SCMPullRequestCommitUser> {
  declare name?: string;
  declare email?: string;
  declare avatarUrl?: string;
  constructor(data?: PartialMessage<_SCMPullRequestCommitUser>) {
    super();
    proto3.util.initPartial(data, this as _SCMPullRequestCommitUser);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestCommitUser {
    return new _SCMPullRequestCommitUser().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestCommitUser {
    return new _SCMPullRequestCommitUser().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestCommitUser {
    return new _SCMPullRequestCommitUser().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestCommitUser | PlainMessage<_SCMPullRequestCommitUser> | undefined | null, b2: _SCMPullRequestCommitUser | PlainMessage<_SCMPullRequestCommitUser> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestCommitUser as unknown as MessageType<_SCMPullRequestCommitUser>, a, b2);
  }
})();
export type SCMPullRequestCommitUser = InstanceType<typeof SCMPullRequestCommitUser$Runtime>;
var SCMPullRequestCommitUser: MessageType<SCMPullRequestCommitUser> = SCMPullRequestCommitUser$Runtime as unknown as MessageType<SCMPullRequestCommitUser>;
(SCMPullRequestCommitUser as MutableMessageType<SCMPullRequestCommitUser>).runtime = proto3;
(SCMPullRequestCommitUser as MutableMessageType<SCMPullRequestCommitUser>).typeName = "aiserver.v1.SCMPullRequestCommitUser";
(SCMPullRequestCommitUser as MutableMessageType<SCMPullRequestCommitUser>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "email", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "avatar_url", kind: "scalar", T: 9, opt: true }
]);
var GetSCMPullRequestTimelineEventsRequest$Runtime = (() => class _GetSCMPullRequestTimelineEventsRequest extends Message<_GetSCMPullRequestTimelineEventsRequest> {
  declare prUrl: string;
  declare page?: number;
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_GetSCMPullRequestTimelineEventsRequest>) {
    super();
    this.prUrl = "";
    this.skipCache = false;
    proto3.util.initPartial(data, this as _GetSCMPullRequestTimelineEventsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSCMPullRequestTimelineEventsRequest {
    return new _GetSCMPullRequestTimelineEventsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSCMPullRequestTimelineEventsRequest {
    return new _GetSCMPullRequestTimelineEventsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSCMPullRequestTimelineEventsRequest {
    return new _GetSCMPullRequestTimelineEventsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSCMPullRequestTimelineEventsRequest | PlainMessage<_GetSCMPullRequestTimelineEventsRequest> | undefined | null, b2: _GetSCMPullRequestTimelineEventsRequest | PlainMessage<_GetSCMPullRequestTimelineEventsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSCMPullRequestTimelineEventsRequest as unknown as MessageType<_GetSCMPullRequestTimelineEventsRequest>, a, b2);
  }
})();
export type GetSCMPullRequestTimelineEventsRequest = InstanceType<typeof GetSCMPullRequestTimelineEventsRequest$Runtime>;
var GetSCMPullRequestTimelineEventsRequest: MessageType<GetSCMPullRequestTimelineEventsRequest> = GetSCMPullRequestTimelineEventsRequest$Runtime as unknown as MessageType<GetSCMPullRequestTimelineEventsRequest>;
(GetSCMPullRequestTimelineEventsRequest as MutableMessageType<GetSCMPullRequestTimelineEventsRequest>).runtime = proto3;
(GetSCMPullRequestTimelineEventsRequest as MutableMessageType<GetSCMPullRequestTimelineEventsRequest>).typeName = "aiserver.v1.GetSCMPullRequestTimelineEventsRequest";
(GetSCMPullRequestTimelineEventsRequest as MutableMessageType<GetSCMPullRequestTimelineEventsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "page", kind: "scalar", T: 5, opt: true },
  {
    no: 3,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetSCMPullRequestTimelineEventsResponse$Runtime = (() => class _GetSCMPullRequestTimelineEventsResponse extends Message<_GetSCMPullRequestTimelineEventsResponse> {
  declare events: SCMPullRequestTimelineEvent[];
  declare hasNextPage: boolean;
  declare nextPage?: number;
  constructor(data?: PartialMessage<_GetSCMPullRequestTimelineEventsResponse>) {
    super();
    this.events = [];
    this.hasNextPage = false;
    proto3.util.initPartial(data, this as _GetSCMPullRequestTimelineEventsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSCMPullRequestTimelineEventsResponse {
    return new _GetSCMPullRequestTimelineEventsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSCMPullRequestTimelineEventsResponse {
    return new _GetSCMPullRequestTimelineEventsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSCMPullRequestTimelineEventsResponse {
    return new _GetSCMPullRequestTimelineEventsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSCMPullRequestTimelineEventsResponse | PlainMessage<_GetSCMPullRequestTimelineEventsResponse> | undefined | null, b2: _GetSCMPullRequestTimelineEventsResponse | PlainMessage<_GetSCMPullRequestTimelineEventsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSCMPullRequestTimelineEventsResponse as unknown as MessageType<_GetSCMPullRequestTimelineEventsResponse>, a, b2);
  }
})();
export type GetSCMPullRequestTimelineEventsResponse = InstanceType<typeof GetSCMPullRequestTimelineEventsResponse$Runtime>;
var GetSCMPullRequestTimelineEventsResponse: MessageType<GetSCMPullRequestTimelineEventsResponse> = GetSCMPullRequestTimelineEventsResponse$Runtime as unknown as MessageType<GetSCMPullRequestTimelineEventsResponse>;
(GetSCMPullRequestTimelineEventsResponse as MutableMessageType<GetSCMPullRequestTimelineEventsResponse>).runtime = proto3;
(GetSCMPullRequestTimelineEventsResponse as MutableMessageType<GetSCMPullRequestTimelineEventsResponse>).typeName = "aiserver.v1.GetSCMPullRequestTimelineEventsResponse";
(GetSCMPullRequestTimelineEventsResponse as MutableMessageType<GetSCMPullRequestTimelineEventsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "events", kind: "message", T: SCMPullRequestTimelineEvent, repeated: true },
  {
    no: 2,
    name: "has_next_page",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "next_page", kind: "scalar", T: 5, opt: true }
]);
var SCMPullRequestTimelineEvent$Runtime = (() => class _SCMPullRequestTimelineEvent extends Message<_SCMPullRequestTimelineEvent> {
  declare id: string;
  declare eventType: string;
  declare createdAt: string;
  declare actor?: SCMPullRequestTimelineActor;
  declare label?: string;
  declare body?: string;
  constructor(data?: PartialMessage<_SCMPullRequestTimelineEvent>) {
    super();
    this.id = "";
    this.eventType = "";
    this.createdAt = "";
    proto3.util.initPartial(data, this as _SCMPullRequestTimelineEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestTimelineEvent {
    return new _SCMPullRequestTimelineEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestTimelineEvent {
    return new _SCMPullRequestTimelineEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestTimelineEvent {
    return new _SCMPullRequestTimelineEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestTimelineEvent | PlainMessage<_SCMPullRequestTimelineEvent> | undefined | null, b2: _SCMPullRequestTimelineEvent | PlainMessage<_SCMPullRequestTimelineEvent> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestTimelineEvent as unknown as MessageType<_SCMPullRequestTimelineEvent>, a, b2);
  }
})();
export type SCMPullRequestTimelineEvent = InstanceType<typeof SCMPullRequestTimelineEvent$Runtime>;
var SCMPullRequestTimelineEvent: MessageType<SCMPullRequestTimelineEvent> = SCMPullRequestTimelineEvent$Runtime as unknown as MessageType<SCMPullRequestTimelineEvent>;
(SCMPullRequestTimelineEvent as MutableMessageType<SCMPullRequestTimelineEvent>).runtime = proto3;
(SCMPullRequestTimelineEvent as MutableMessageType<SCMPullRequestTimelineEvent>).typeName = "aiserver.v1.SCMPullRequestTimelineEvent";
(SCMPullRequestTimelineEvent as MutableMessageType<SCMPullRequestTimelineEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "event_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "created_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "actor", kind: "message", T: SCMPullRequestTimelineActor, opt: true },
  { no: 5, name: "label", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "body", kind: "scalar", T: 9, opt: true }
]);
var SCMPullRequestTimelineActor$Runtime = (() => class _SCMPullRequestTimelineActor extends Message<_SCMPullRequestTimelineActor> {
  declare login: string;
  declare avatarUrl?: string;
  declare name?: string;
  constructor(data?: PartialMessage<_SCMPullRequestTimelineActor>) {
    super();
    this.login = "";
    proto3.util.initPartial(data, this as _SCMPullRequestTimelineActor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestTimelineActor {
    return new _SCMPullRequestTimelineActor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestTimelineActor {
    return new _SCMPullRequestTimelineActor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestTimelineActor {
    return new _SCMPullRequestTimelineActor().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestTimelineActor | PlainMessage<_SCMPullRequestTimelineActor> | undefined | null, b2: _SCMPullRequestTimelineActor | PlainMessage<_SCMPullRequestTimelineActor> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestTimelineActor as unknown as MessageType<_SCMPullRequestTimelineActor>, a, b2);
  }
})();
export type SCMPullRequestTimelineActor = InstanceType<typeof SCMPullRequestTimelineActor$Runtime>;
var SCMPullRequestTimelineActor: MessageType<SCMPullRequestTimelineActor> = SCMPullRequestTimelineActor$Runtime as unknown as MessageType<SCMPullRequestTimelineActor>;
(SCMPullRequestTimelineActor as MutableMessageType<SCMPullRequestTimelineActor>).runtime = proto3;
(SCMPullRequestTimelineActor as MutableMessageType<SCMPullRequestTimelineActor>).typeName = "aiserver.v1.SCMPullRequestTimelineActor";
(SCMPullRequestTimelineActor as MutableMessageType<SCMPullRequestTimelineActor>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "login",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "avatar_url", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "name", kind: "scalar", T: 9, opt: true }
]);
var GetPullRequestDiffResponse$Runtime = (() => class _GetPullRequestDiffResponse extends Message<_GetPullRequestDiffResponse> {
  declare files: SCMPullRequestDiffFile[];
  declare baseSha: string;
  declare headSha: string;
  declare baseRefName?: string;
  declare headRefName?: string;
  constructor(data?: PartialMessage<_GetPullRequestDiffResponse>) {
    super();
    this.files = [];
    this.baseSha = "";
    this.headSha = "";
    proto3.util.initPartial(data, this as _GetPullRequestDiffResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestDiffResponse {
    return new _GetPullRequestDiffResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestDiffResponse {
    return new _GetPullRequestDiffResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestDiffResponse {
    return new _GetPullRequestDiffResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestDiffResponse | PlainMessage<_GetPullRequestDiffResponse> | undefined | null, b2: _GetPullRequestDiffResponse | PlainMessage<_GetPullRequestDiffResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestDiffResponse as unknown as MessageType<_GetPullRequestDiffResponse>, a, b2);
  }
})();
export type GetPullRequestDiffResponse = InstanceType<typeof GetPullRequestDiffResponse$Runtime>;
var GetPullRequestDiffResponse: MessageType<GetPullRequestDiffResponse> = GetPullRequestDiffResponse$Runtime as unknown as MessageType<GetPullRequestDiffResponse>;
(GetPullRequestDiffResponse as MutableMessageType<GetPullRequestDiffResponse>).runtime = proto3;
(GetPullRequestDiffResponse as MutableMessageType<GetPullRequestDiffResponse>).typeName = "aiserver.v1.GetPullRequestDiffResponse";
(GetPullRequestDiffResponse as MutableMessageType<GetPullRequestDiffResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: SCMPullRequestDiffFile, repeated: true },
  {
    no: 2,
    name: "base_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "head_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "base_ref_name", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "head_ref_name", kind: "scalar", T: 9, opt: true }
]);
var GetBranchComparisonRequest$Runtime = (() => class _GetBranchComparisonRequest extends Message<_GetBranchComparisonRequest> {
  declare repoUrl: string;
  declare branchName: string;
  declare baseBranch?: string;
  constructor(data?: PartialMessage<_GetBranchComparisonRequest>) {
    super();
    this.repoUrl = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _GetBranchComparisonRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetBranchComparisonRequest {
    return new _GetBranchComparisonRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetBranchComparisonRequest {
    return new _GetBranchComparisonRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetBranchComparisonRequest {
    return new _GetBranchComparisonRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetBranchComparisonRequest | PlainMessage<_GetBranchComparisonRequest> | undefined | null, b2: _GetBranchComparisonRequest | PlainMessage<_GetBranchComparisonRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetBranchComparisonRequest as unknown as MessageType<_GetBranchComparisonRequest>, a, b2);
  }
})();
export type GetBranchComparisonRequest = InstanceType<typeof GetBranchComparisonRequest$Runtime>;
var GetBranchComparisonRequest: MessageType<GetBranchComparisonRequest> = GetBranchComparisonRequest$Runtime as unknown as MessageType<GetBranchComparisonRequest>;
(GetBranchComparisonRequest as MutableMessageType<GetBranchComparisonRequest>).runtime = proto3;
(GetBranchComparisonRequest as MutableMessageType<GetBranchComparisonRequest>).typeName = "aiserver.v1.GetBranchComparisonRequest";
(GetBranchComparisonRequest as MutableMessageType<GetBranchComparisonRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "base_branch", kind: "scalar", T: 9, opt: true }
]);
var GetBranchComparisonResponse$Runtime = (() => class _GetBranchComparisonResponse extends Message<_GetBranchComparisonResponse> {
  declare files: SCMPullRequestDiffFile[];
  declare baseSha: string;
  declare headSha: string;
  declare baseBranch: string;
  constructor(data?: PartialMessage<_GetBranchComparisonResponse>) {
    super();
    this.files = [];
    this.baseSha = "";
    this.headSha = "";
    this.baseBranch = "";
    proto3.util.initPartial(data, this as _GetBranchComparisonResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetBranchComparisonResponse {
    return new _GetBranchComparisonResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetBranchComparisonResponse {
    return new _GetBranchComparisonResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetBranchComparisonResponse {
    return new _GetBranchComparisonResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetBranchComparisonResponse | PlainMessage<_GetBranchComparisonResponse> | undefined | null, b2: _GetBranchComparisonResponse | PlainMessage<_GetBranchComparisonResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetBranchComparisonResponse as unknown as MessageType<_GetBranchComparisonResponse>, a, b2);
  }
})();
export type GetBranchComparisonResponse = InstanceType<typeof GetBranchComparisonResponse$Runtime>;
var GetBranchComparisonResponse: MessageType<GetBranchComparisonResponse> = GetBranchComparisonResponse$Runtime as unknown as MessageType<GetBranchComparisonResponse>;
(GetBranchComparisonResponse as MutableMessageType<GetBranchComparisonResponse>).runtime = proto3;
(GetBranchComparisonResponse as MutableMessageType<GetBranchComparisonResponse>).typeName = "aiserver.v1.GetBranchComparisonResponse";
(GetBranchComparisonResponse as MutableMessageType<GetBranchComparisonResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: SCMPullRequestDiffFile, repeated: true },
  {
    no: 2,
    name: "base_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "head_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "base_branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMGetPullRequestForBranchRequest$Runtime = (() => class _SCMGetPullRequestForBranchRequest extends Message<_SCMGetPullRequestForBranchRequest> {
  declare repoUrl: string;
  declare branchName: string;
  declare skipCache?: boolean;
  constructor(data?: PartialMessage<_SCMGetPullRequestForBranchRequest>) {
    super();
    this.repoUrl = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _SCMGetPullRequestForBranchRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMGetPullRequestForBranchRequest {
    return new _SCMGetPullRequestForBranchRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMGetPullRequestForBranchRequest {
    return new _SCMGetPullRequestForBranchRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMGetPullRequestForBranchRequest {
    return new _SCMGetPullRequestForBranchRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMGetPullRequestForBranchRequest | PlainMessage<_SCMGetPullRequestForBranchRequest> | undefined | null, b2: _SCMGetPullRequestForBranchRequest | PlainMessage<_SCMGetPullRequestForBranchRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMGetPullRequestForBranchRequest as unknown as MessageType<_SCMGetPullRequestForBranchRequest>, a, b2);
  }
})();
export type SCMGetPullRequestForBranchRequest = InstanceType<typeof SCMGetPullRequestForBranchRequest$Runtime>;
var SCMGetPullRequestForBranchRequest: MessageType<SCMGetPullRequestForBranchRequest> = SCMGetPullRequestForBranchRequest$Runtime as unknown as MessageType<SCMGetPullRequestForBranchRequest>;
(SCMGetPullRequestForBranchRequest as MutableMessageType<SCMGetPullRequestForBranchRequest>).runtime = proto3;
(SCMGetPullRequestForBranchRequest as MutableMessageType<SCMGetPullRequestForBranchRequest>).typeName = "aiserver.v1.SCMGetPullRequestForBranchRequest";
(SCMGetPullRequestForBranchRequest as MutableMessageType<SCMGetPullRequestForBranchRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "skip_cache", kind: "scalar", T: 8, opt: true }
]);
var SCMGetPullRequestForBranchResponse$Runtime = (() => class _SCMGetPullRequestForBranchResponse extends Message<_SCMGetPullRequestForBranchResponse> {
  declare prUrls: string[];
  constructor(data?: PartialMessage<_SCMGetPullRequestForBranchResponse>) {
    super();
    this.prUrls = [];
    proto3.util.initPartial(data, this as _SCMGetPullRequestForBranchResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMGetPullRequestForBranchResponse {
    return new _SCMGetPullRequestForBranchResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMGetPullRequestForBranchResponse {
    return new _SCMGetPullRequestForBranchResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMGetPullRequestForBranchResponse {
    return new _SCMGetPullRequestForBranchResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMGetPullRequestForBranchResponse | PlainMessage<_SCMGetPullRequestForBranchResponse> | undefined | null, b2: _SCMGetPullRequestForBranchResponse | PlainMessage<_SCMGetPullRequestForBranchResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMGetPullRequestForBranchResponse as unknown as MessageType<_SCMGetPullRequestForBranchResponse>, a, b2);
  }
})();
export type SCMGetPullRequestForBranchResponse = InstanceType<typeof SCMGetPullRequestForBranchResponse$Runtime>;
var SCMGetPullRequestForBranchResponse: MessageType<SCMGetPullRequestForBranchResponse> = SCMGetPullRequestForBranchResponse$Runtime as unknown as MessageType<SCMGetPullRequestForBranchResponse>;
(SCMGetPullRequestForBranchResponse as MutableMessageType<SCMGetPullRequestForBranchResponse>).runtime = proto3;
(SCMGetPullRequestForBranchResponse as MutableMessageType<SCMGetPullRequestForBranchResponse>).typeName = "aiserver.v1.SCMGetPullRequestForBranchResponse";
(SCMGetPullRequestForBranchResponse as MutableMessageType<SCMGetPullRequestForBranchResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_urls", kind: "scalar", T: 9, repeated: true }
]);
var SCMBranchRef$Runtime = (() => class _SCMBranchRef extends Message<_SCMBranchRef> {
  declare repoUrl: string;
  declare branchName: string;
  constructor(data?: PartialMessage<_SCMBranchRef>) {
    super();
    this.repoUrl = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _SCMBranchRef);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMBranchRef {
    return new _SCMBranchRef().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMBranchRef {
    return new _SCMBranchRef().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMBranchRef {
    return new _SCMBranchRef().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMBranchRef | PlainMessage<_SCMBranchRef> | undefined | null, b2: _SCMBranchRef | PlainMessage<_SCMBranchRef> | undefined | null): boolean {
    return proto3.util.equals(_SCMBranchRef as unknown as MessageType<_SCMBranchRef>, a, b2);
  }
})();
export type SCMBranchRef = InstanceType<typeof SCMBranchRef$Runtime>;
var SCMBranchRef: MessageType<SCMBranchRef> = SCMBranchRef$Runtime as unknown as MessageType<SCMBranchRef>;
(SCMBranchRef as MutableMessageType<SCMBranchRef>).runtime = proto3;
(SCMBranchRef as MutableMessageType<SCMBranchRef>).typeName = "aiserver.v1.SCMBranchRef";
(SCMBranchRef as MutableMessageType<SCMBranchRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMBatchGetPullRequestForBranchRequest$Runtime = (() => class _SCMBatchGetPullRequestForBranchRequest extends Message<_SCMBatchGetPullRequestForBranchRequest> {
  declare branches: SCMBranchRef[];
  declare skipCache?: boolean;
  constructor(data?: PartialMessage<_SCMBatchGetPullRequestForBranchRequest>) {
    super();
    this.branches = [];
    proto3.util.initPartial(data, this as _SCMBatchGetPullRequestForBranchRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMBatchGetPullRequestForBranchRequest {
    return new _SCMBatchGetPullRequestForBranchRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMBatchGetPullRequestForBranchRequest {
    return new _SCMBatchGetPullRequestForBranchRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMBatchGetPullRequestForBranchRequest {
    return new _SCMBatchGetPullRequestForBranchRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMBatchGetPullRequestForBranchRequest | PlainMessage<_SCMBatchGetPullRequestForBranchRequest> | undefined | null, b2: _SCMBatchGetPullRequestForBranchRequest | PlainMessage<_SCMBatchGetPullRequestForBranchRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMBatchGetPullRequestForBranchRequest as unknown as MessageType<_SCMBatchGetPullRequestForBranchRequest>, a, b2);
  }
})();
export type SCMBatchGetPullRequestForBranchRequest = InstanceType<typeof SCMBatchGetPullRequestForBranchRequest$Runtime>;
var SCMBatchGetPullRequestForBranchRequest: MessageType<SCMBatchGetPullRequestForBranchRequest> = SCMBatchGetPullRequestForBranchRequest$Runtime as unknown as MessageType<SCMBatchGetPullRequestForBranchRequest>;
(SCMBatchGetPullRequestForBranchRequest as MutableMessageType<SCMBatchGetPullRequestForBranchRequest>).runtime = proto3;
(SCMBatchGetPullRequestForBranchRequest as MutableMessageType<SCMBatchGetPullRequestForBranchRequest>).typeName = "aiserver.v1.SCMBatchGetPullRequestForBranchRequest";
(SCMBatchGetPullRequestForBranchRequest as MutableMessageType<SCMBatchGetPullRequestForBranchRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "branches", kind: "message", T: SCMBranchRef, repeated: true },
  { no: 2, name: "skip_cache", kind: "scalar", T: 8, opt: true }
]);
var SCMBranchPullRequests$Runtime = (() => class _SCMBranchPullRequests extends Message<_SCMBranchPullRequests> {
  declare repoUrl: string;
  declare branchName: string;
  declare prUrls: string[];
  constructor(data?: PartialMessage<_SCMBranchPullRequests>) {
    super();
    this.repoUrl = "";
    this.branchName = "";
    this.prUrls = [];
    proto3.util.initPartial(data, this as _SCMBranchPullRequests);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMBranchPullRequests {
    return new _SCMBranchPullRequests().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMBranchPullRequests {
    return new _SCMBranchPullRequests().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMBranchPullRequests {
    return new _SCMBranchPullRequests().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMBranchPullRequests | PlainMessage<_SCMBranchPullRequests> | undefined | null, b2: _SCMBranchPullRequests | PlainMessage<_SCMBranchPullRequests> | undefined | null): boolean {
    return proto3.util.equals(_SCMBranchPullRequests as unknown as MessageType<_SCMBranchPullRequests>, a, b2);
  }
})();
export type SCMBranchPullRequests = InstanceType<typeof SCMBranchPullRequests$Runtime>;
var SCMBranchPullRequests: MessageType<SCMBranchPullRequests> = SCMBranchPullRequests$Runtime as unknown as MessageType<SCMBranchPullRequests>;
(SCMBranchPullRequests as MutableMessageType<SCMBranchPullRequests>).runtime = proto3;
(SCMBranchPullRequests as MutableMessageType<SCMBranchPullRequests>).typeName = "aiserver.v1.SCMBranchPullRequests";
(SCMBranchPullRequests as MutableMessageType<SCMBranchPullRequests>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pr_urls", kind: "scalar", T: 9, repeated: true }
]);
var SCMBatchGetPullRequestForBranchResponse$Runtime = (() => class _SCMBatchGetPullRequestForBranchResponse extends Message<_SCMBatchGetPullRequestForBranchResponse> {
  declare results: SCMBranchPullRequests[];
  constructor(data?: PartialMessage<_SCMBatchGetPullRequestForBranchResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _SCMBatchGetPullRequestForBranchResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMBatchGetPullRequestForBranchResponse {
    return new _SCMBatchGetPullRequestForBranchResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMBatchGetPullRequestForBranchResponse {
    return new _SCMBatchGetPullRequestForBranchResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMBatchGetPullRequestForBranchResponse {
    return new _SCMBatchGetPullRequestForBranchResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMBatchGetPullRequestForBranchResponse | PlainMessage<_SCMBatchGetPullRequestForBranchResponse> | undefined | null, b2: _SCMBatchGetPullRequestForBranchResponse | PlainMessage<_SCMBatchGetPullRequestForBranchResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMBatchGetPullRequestForBranchResponse as unknown as MessageType<_SCMBatchGetPullRequestForBranchResponse>, a, b2);
  }
})();
export type SCMBatchGetPullRequestForBranchResponse = InstanceType<typeof SCMBatchGetPullRequestForBranchResponse$Runtime>;
var SCMBatchGetPullRequestForBranchResponse: MessageType<SCMBatchGetPullRequestForBranchResponse> = SCMBatchGetPullRequestForBranchResponse$Runtime as unknown as MessageType<SCMBatchGetPullRequestForBranchResponse>;
(SCMBatchGetPullRequestForBranchResponse as MutableMessageType<SCMBatchGetPullRequestForBranchResponse>).runtime = proto3;
(SCMBatchGetPullRequestForBranchResponse as MutableMessageType<SCMBatchGetPullRequestForBranchResponse>).typeName = "aiserver.v1.SCMBatchGetPullRequestForBranchResponse";
(SCMBatchGetPullRequestForBranchResponse as MutableMessageType<SCMBatchGetPullRequestForBranchResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: SCMBranchPullRequests, repeated: true }
]);
var SCMPullRequestDiffFile$Runtime = (() => class _SCMPullRequestDiffFile extends Message<_SCMPullRequestDiffFile> {
  declare filename: string;
  declare previousFilename?: string;
  declare status: SCMPullRequestDiffFileStatus;
  declare originalContents?: string;
  declare modifiedContents?: string;
  declare patch?: string;
  declare isGenerated?: boolean;
  constructor(data?: PartialMessage<_SCMPullRequestDiffFile>) {
    super();
    this.filename = "";
    this.status = SCMPullRequestDiffFileStatus.SCM_PULL_REQUEST_DIFF_FILE_STATUS_UNSPECIFIED;
    proto3.util.initPartial(data, this as _SCMPullRequestDiffFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMPullRequestDiffFile {
    return new _SCMPullRequestDiffFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMPullRequestDiffFile {
    return new _SCMPullRequestDiffFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMPullRequestDiffFile {
    return new _SCMPullRequestDiffFile().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMPullRequestDiffFile | PlainMessage<_SCMPullRequestDiffFile> | undefined | null, b2: _SCMPullRequestDiffFile | PlainMessage<_SCMPullRequestDiffFile> | undefined | null): boolean {
    return proto3.util.equals(_SCMPullRequestDiffFile as unknown as MessageType<_SCMPullRequestDiffFile>, a, b2);
  }
})();
export type SCMPullRequestDiffFile = InstanceType<typeof SCMPullRequestDiffFile$Runtime>;
var SCMPullRequestDiffFile: MessageType<SCMPullRequestDiffFile> = SCMPullRequestDiffFile$Runtime as unknown as MessageType<SCMPullRequestDiffFile>;
(SCMPullRequestDiffFile as MutableMessageType<SCMPullRequestDiffFile>).runtime = proto3;
(SCMPullRequestDiffFile as MutableMessageType<SCMPullRequestDiffFile>).typeName = "aiserver.v1.SCMPullRequestDiffFile";
(SCMPullRequestDiffFile as MutableMessageType<SCMPullRequestDiffFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "filename",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "previous_filename", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(SCMPullRequestDiffFileStatus) },
  { no: 4, name: "original_contents", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "modified_contents", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "patch", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "is_generated", kind: "scalar", T: 8, opt: true }
]);
var SCMMergePullRequestRequest$Runtime = (() => class _SCMMergePullRequestRequest extends Message<_SCMMergePullRequestRequest> {
  declare prUrl: string;
  declare mergeMethod: SCMMergeMethod;
  constructor(data?: PartialMessage<_SCMMergePullRequestRequest>) {
    super();
    this.prUrl = "";
    this.mergeMethod = SCMMergeMethod.SCM_MERGE_METHOD_UNSPECIFIED;
    proto3.util.initPartial(data, this as _SCMMergePullRequestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMMergePullRequestRequest {
    return new _SCMMergePullRequestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMMergePullRequestRequest {
    return new _SCMMergePullRequestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMMergePullRequestRequest {
    return new _SCMMergePullRequestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMMergePullRequestRequest | PlainMessage<_SCMMergePullRequestRequest> | undefined | null, b2: _SCMMergePullRequestRequest | PlainMessage<_SCMMergePullRequestRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMMergePullRequestRequest as unknown as MessageType<_SCMMergePullRequestRequest>, a, b2);
  }
})();
export type SCMMergePullRequestRequest = InstanceType<typeof SCMMergePullRequestRequest$Runtime>;
var SCMMergePullRequestRequest: MessageType<SCMMergePullRequestRequest> = SCMMergePullRequestRequest$Runtime as unknown as MessageType<SCMMergePullRequestRequest>;
(SCMMergePullRequestRequest as MutableMessageType<SCMMergePullRequestRequest>).runtime = proto3;
(SCMMergePullRequestRequest as MutableMessageType<SCMMergePullRequestRequest>).typeName = "aiserver.v1.SCMMergePullRequestRequest";
(SCMMergePullRequestRequest as MutableMessageType<SCMMergePullRequestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "merge_method", kind: "enum", T: proto3.getEnumType(SCMMergeMethod) }
]);
var SCMMergePullRequestResponse$Runtime = (() => class _SCMMergePullRequestResponse extends Message<_SCMMergePullRequestResponse> {
  declare success: boolean;
  declare error: string;
  declare prNodeId?: string;
  constructor(data?: PartialMessage<_SCMMergePullRequestResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMMergePullRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMMergePullRequestResponse {
    return new _SCMMergePullRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMMergePullRequestResponse {
    return new _SCMMergePullRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMMergePullRequestResponse {
    return new _SCMMergePullRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMMergePullRequestResponse | PlainMessage<_SCMMergePullRequestResponse> | undefined | null, b2: _SCMMergePullRequestResponse | PlainMessage<_SCMMergePullRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMMergePullRequestResponse as unknown as MessageType<_SCMMergePullRequestResponse>, a, b2);
  }
})();
export type SCMMergePullRequestResponse = InstanceType<typeof SCMMergePullRequestResponse$Runtime>;
var SCMMergePullRequestResponse: MessageType<SCMMergePullRequestResponse> = SCMMergePullRequestResponse$Runtime as unknown as MessageType<SCMMergePullRequestResponse>;
(SCMMergePullRequestResponse as MutableMessageType<SCMMergePullRequestResponse>).runtime = proto3;
(SCMMergePullRequestResponse as MutableMessageType<SCMMergePullRequestResponse>).typeName = "aiserver.v1.SCMMergePullRequestResponse";
(SCMMergePullRequestResponse as MutableMessageType<SCMMergePullRequestResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pr_node_id", kind: "scalar", T: 9, opt: true }
]);
var SCMUpdatePullRequestTitleRequest$Runtime = (() => class _SCMUpdatePullRequestTitleRequest extends Message<_SCMUpdatePullRequestTitleRequest> {
  declare prUrl: string;
  declare title: string;
  constructor(data?: PartialMessage<_SCMUpdatePullRequestTitleRequest>) {
    super();
    this.prUrl = "";
    this.title = "";
    proto3.util.initPartial(data, this as _SCMUpdatePullRequestTitleRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMUpdatePullRequestTitleRequest {
    return new _SCMUpdatePullRequestTitleRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMUpdatePullRequestTitleRequest {
    return new _SCMUpdatePullRequestTitleRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMUpdatePullRequestTitleRequest {
    return new _SCMUpdatePullRequestTitleRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMUpdatePullRequestTitleRequest | PlainMessage<_SCMUpdatePullRequestTitleRequest> | undefined | null, b2: _SCMUpdatePullRequestTitleRequest | PlainMessage<_SCMUpdatePullRequestTitleRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMUpdatePullRequestTitleRequest as unknown as MessageType<_SCMUpdatePullRequestTitleRequest>, a, b2);
  }
})();
export type SCMUpdatePullRequestTitleRequest = InstanceType<typeof SCMUpdatePullRequestTitleRequest$Runtime>;
var SCMUpdatePullRequestTitleRequest: MessageType<SCMUpdatePullRequestTitleRequest> = SCMUpdatePullRequestTitleRequest$Runtime as unknown as MessageType<SCMUpdatePullRequestTitleRequest>;
(SCMUpdatePullRequestTitleRequest as MutableMessageType<SCMUpdatePullRequestTitleRequest>).runtime = proto3;
(SCMUpdatePullRequestTitleRequest as MutableMessageType<SCMUpdatePullRequestTitleRequest>).typeName = "aiserver.v1.SCMUpdatePullRequestTitleRequest";
(SCMUpdatePullRequestTitleRequest as MutableMessageType<SCMUpdatePullRequestTitleRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
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
  }
]);
var SCMUpdatePullRequestTitleResponse$Runtime = (() => class _SCMUpdatePullRequestTitleResponse extends Message<_SCMUpdatePullRequestTitleResponse> {
  declare success: boolean;
  declare error: string;
  constructor(data?: PartialMessage<_SCMUpdatePullRequestTitleResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMUpdatePullRequestTitleResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMUpdatePullRequestTitleResponse {
    return new _SCMUpdatePullRequestTitleResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMUpdatePullRequestTitleResponse {
    return new _SCMUpdatePullRequestTitleResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMUpdatePullRequestTitleResponse {
    return new _SCMUpdatePullRequestTitleResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMUpdatePullRequestTitleResponse | PlainMessage<_SCMUpdatePullRequestTitleResponse> | undefined | null, b2: _SCMUpdatePullRequestTitleResponse | PlainMessage<_SCMUpdatePullRequestTitleResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMUpdatePullRequestTitleResponse as unknown as MessageType<_SCMUpdatePullRequestTitleResponse>, a, b2);
  }
})();
export type SCMUpdatePullRequestTitleResponse = InstanceType<typeof SCMUpdatePullRequestTitleResponse$Runtime>;
var SCMUpdatePullRequestTitleResponse: MessageType<SCMUpdatePullRequestTitleResponse> = SCMUpdatePullRequestTitleResponse$Runtime as unknown as MessageType<SCMUpdatePullRequestTitleResponse>;
(SCMUpdatePullRequestTitleResponse as MutableMessageType<SCMUpdatePullRequestTitleResponse>).runtime = proto3;
(SCMUpdatePullRequestTitleResponse as MutableMessageType<SCMUpdatePullRequestTitleResponse>).typeName = "aiserver.v1.SCMUpdatePullRequestTitleResponse";
(SCMUpdatePullRequestTitleResponse as MutableMessageType<SCMUpdatePullRequestTitleResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMMakePullRequestReadyRequest$Runtime = (() => class _SCMMakePullRequestReadyRequest extends Message<_SCMMakePullRequestReadyRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_SCMMakePullRequestReadyRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _SCMMakePullRequestReadyRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMMakePullRequestReadyRequest {
    return new _SCMMakePullRequestReadyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMMakePullRequestReadyRequest {
    return new _SCMMakePullRequestReadyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMMakePullRequestReadyRequest {
    return new _SCMMakePullRequestReadyRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMMakePullRequestReadyRequest | PlainMessage<_SCMMakePullRequestReadyRequest> | undefined | null, b2: _SCMMakePullRequestReadyRequest | PlainMessage<_SCMMakePullRequestReadyRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMMakePullRequestReadyRequest as unknown as MessageType<_SCMMakePullRequestReadyRequest>, a, b2);
  }
})();
export type SCMMakePullRequestReadyRequest = InstanceType<typeof SCMMakePullRequestReadyRequest$Runtime>;
var SCMMakePullRequestReadyRequest: MessageType<SCMMakePullRequestReadyRequest> = SCMMakePullRequestReadyRequest$Runtime as unknown as MessageType<SCMMakePullRequestReadyRequest>;
(SCMMakePullRequestReadyRequest as MutableMessageType<SCMMakePullRequestReadyRequest>).runtime = proto3;
(SCMMakePullRequestReadyRequest as MutableMessageType<SCMMakePullRequestReadyRequest>).typeName = "aiserver.v1.SCMMakePullRequestReadyRequest";
(SCMMakePullRequestReadyRequest as MutableMessageType<SCMMakePullRequestReadyRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMMakePullRequestReadyResponse$Runtime = (() => class _SCMMakePullRequestReadyResponse extends Message<_SCMMakePullRequestReadyResponse> {
  declare success: boolean;
  declare error: string;
  constructor(data?: PartialMessage<_SCMMakePullRequestReadyResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMMakePullRequestReadyResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMMakePullRequestReadyResponse {
    return new _SCMMakePullRequestReadyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMMakePullRequestReadyResponse {
    return new _SCMMakePullRequestReadyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMMakePullRequestReadyResponse {
    return new _SCMMakePullRequestReadyResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMMakePullRequestReadyResponse | PlainMessage<_SCMMakePullRequestReadyResponse> | undefined | null, b2: _SCMMakePullRequestReadyResponse | PlainMessage<_SCMMakePullRequestReadyResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMMakePullRequestReadyResponse as unknown as MessageType<_SCMMakePullRequestReadyResponse>, a, b2);
  }
})();
export type SCMMakePullRequestReadyResponse = InstanceType<typeof SCMMakePullRequestReadyResponse$Runtime>;
var SCMMakePullRequestReadyResponse: MessageType<SCMMakePullRequestReadyResponse> = SCMMakePullRequestReadyResponse$Runtime as unknown as MessageType<SCMMakePullRequestReadyResponse>;
(SCMMakePullRequestReadyResponse as MutableMessageType<SCMMakePullRequestReadyResponse>).runtime = proto3;
(SCMMakePullRequestReadyResponse as MutableMessageType<SCMMakePullRequestReadyResponse>).typeName = "aiserver.v1.SCMMakePullRequestReadyResponse";
(SCMMakePullRequestReadyResponse as MutableMessageType<SCMMakePullRequestReadyResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMClosePullRequestRequest$Runtime = (() => class _SCMClosePullRequestRequest extends Message<_SCMClosePullRequestRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_SCMClosePullRequestRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _SCMClosePullRequestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMClosePullRequestRequest {
    return new _SCMClosePullRequestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMClosePullRequestRequest {
    return new _SCMClosePullRequestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMClosePullRequestRequest {
    return new _SCMClosePullRequestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMClosePullRequestRequest | PlainMessage<_SCMClosePullRequestRequest> | undefined | null, b2: _SCMClosePullRequestRequest | PlainMessage<_SCMClosePullRequestRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMClosePullRequestRequest as unknown as MessageType<_SCMClosePullRequestRequest>, a, b2);
  }
})();
export type SCMClosePullRequestRequest = InstanceType<typeof SCMClosePullRequestRequest$Runtime>;
var SCMClosePullRequestRequest: MessageType<SCMClosePullRequestRequest> = SCMClosePullRequestRequest$Runtime as unknown as MessageType<SCMClosePullRequestRequest>;
(SCMClosePullRequestRequest as MutableMessageType<SCMClosePullRequestRequest>).runtime = proto3;
(SCMClosePullRequestRequest as MutableMessageType<SCMClosePullRequestRequest>).typeName = "aiserver.v1.SCMClosePullRequestRequest";
(SCMClosePullRequestRequest as MutableMessageType<SCMClosePullRequestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMClosePullRequestResponse$Runtime = (() => class _SCMClosePullRequestResponse extends Message<_SCMClosePullRequestResponse> {
  declare success: boolean;
  declare error: string;
  constructor(data?: PartialMessage<_SCMClosePullRequestResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMClosePullRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMClosePullRequestResponse {
    return new _SCMClosePullRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMClosePullRequestResponse {
    return new _SCMClosePullRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMClosePullRequestResponse {
    return new _SCMClosePullRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMClosePullRequestResponse | PlainMessage<_SCMClosePullRequestResponse> | undefined | null, b2: _SCMClosePullRequestResponse | PlainMessage<_SCMClosePullRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMClosePullRequestResponse as unknown as MessageType<_SCMClosePullRequestResponse>, a, b2);
  }
})();
export type SCMClosePullRequestResponse = InstanceType<typeof SCMClosePullRequestResponse$Runtime>;
var SCMClosePullRequestResponse: MessageType<SCMClosePullRequestResponse> = SCMClosePullRequestResponse$Runtime as unknown as MessageType<SCMClosePullRequestResponse>;
(SCMClosePullRequestResponse as MutableMessageType<SCMClosePullRequestResponse>).runtime = proto3;
(SCMClosePullRequestResponse as MutableMessageType<SCMClosePullRequestResponse>).typeName = "aiserver.v1.SCMClosePullRequestResponse";
(SCMClosePullRequestResponse as MutableMessageType<SCMClosePullRequestResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMReopenPullRequestRequest$Runtime = (() => class _SCMReopenPullRequestRequest extends Message<_SCMReopenPullRequestRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_SCMReopenPullRequestRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _SCMReopenPullRequestRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMReopenPullRequestRequest {
    return new _SCMReopenPullRequestRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMReopenPullRequestRequest {
    return new _SCMReopenPullRequestRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMReopenPullRequestRequest {
    return new _SCMReopenPullRequestRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMReopenPullRequestRequest | PlainMessage<_SCMReopenPullRequestRequest> | undefined | null, b2: _SCMReopenPullRequestRequest | PlainMessage<_SCMReopenPullRequestRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMReopenPullRequestRequest as unknown as MessageType<_SCMReopenPullRequestRequest>, a, b2);
  }
})();
export type SCMReopenPullRequestRequest = InstanceType<typeof SCMReopenPullRequestRequest$Runtime>;
var SCMReopenPullRequestRequest: MessageType<SCMReopenPullRequestRequest> = SCMReopenPullRequestRequest$Runtime as unknown as MessageType<SCMReopenPullRequestRequest>;
(SCMReopenPullRequestRequest as MutableMessageType<SCMReopenPullRequestRequest>).runtime = proto3;
(SCMReopenPullRequestRequest as MutableMessageType<SCMReopenPullRequestRequest>).typeName = "aiserver.v1.SCMReopenPullRequestRequest";
(SCMReopenPullRequestRequest as MutableMessageType<SCMReopenPullRequestRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMReopenPullRequestResponse$Runtime = (() => class _SCMReopenPullRequestResponse extends Message<_SCMReopenPullRequestResponse> {
  declare success: boolean;
  declare error: string;
  constructor(data?: PartialMessage<_SCMReopenPullRequestResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMReopenPullRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMReopenPullRequestResponse {
    return new _SCMReopenPullRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMReopenPullRequestResponse {
    return new _SCMReopenPullRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMReopenPullRequestResponse {
    return new _SCMReopenPullRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMReopenPullRequestResponse | PlainMessage<_SCMReopenPullRequestResponse> | undefined | null, b2: _SCMReopenPullRequestResponse | PlainMessage<_SCMReopenPullRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMReopenPullRequestResponse as unknown as MessageType<_SCMReopenPullRequestResponse>, a, b2);
  }
})();
export type SCMReopenPullRequestResponse = InstanceType<typeof SCMReopenPullRequestResponse$Runtime>;
var SCMReopenPullRequestResponse: MessageType<SCMReopenPullRequestResponse> = SCMReopenPullRequestResponse$Runtime as unknown as MessageType<SCMReopenPullRequestResponse>;
(SCMReopenPullRequestResponse as MutableMessageType<SCMReopenPullRequestResponse>).runtime = proto3;
(SCMReopenPullRequestResponse as MutableMessageType<SCMReopenPullRequestResponse>).typeName = "aiserver.v1.SCMReopenPullRequestResponse";
(SCMReopenPullRequestResponse as MutableMessageType<SCMReopenPullRequestResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMEnablePullRequestAutoMergeRequest$Runtime = (() => class _SCMEnablePullRequestAutoMergeRequest extends Message<_SCMEnablePullRequestAutoMergeRequest> {
  declare prUrl: string;
  declare mergeMethod: SCMMergeMethod;
  constructor(data?: PartialMessage<_SCMEnablePullRequestAutoMergeRequest>) {
    super();
    this.prUrl = "";
    this.mergeMethod = SCMMergeMethod.SCM_MERGE_METHOD_UNSPECIFIED;
    proto3.util.initPartial(data, this as _SCMEnablePullRequestAutoMergeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMEnablePullRequestAutoMergeRequest {
    return new _SCMEnablePullRequestAutoMergeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMEnablePullRequestAutoMergeRequest {
    return new _SCMEnablePullRequestAutoMergeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMEnablePullRequestAutoMergeRequest {
    return new _SCMEnablePullRequestAutoMergeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMEnablePullRequestAutoMergeRequest | PlainMessage<_SCMEnablePullRequestAutoMergeRequest> | undefined | null, b2: _SCMEnablePullRequestAutoMergeRequest | PlainMessage<_SCMEnablePullRequestAutoMergeRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMEnablePullRequestAutoMergeRequest as unknown as MessageType<_SCMEnablePullRequestAutoMergeRequest>, a, b2);
  }
})();
export type SCMEnablePullRequestAutoMergeRequest = InstanceType<typeof SCMEnablePullRequestAutoMergeRequest$Runtime>;
var SCMEnablePullRequestAutoMergeRequest: MessageType<SCMEnablePullRequestAutoMergeRequest> = SCMEnablePullRequestAutoMergeRequest$Runtime as unknown as MessageType<SCMEnablePullRequestAutoMergeRequest>;
(SCMEnablePullRequestAutoMergeRequest as MutableMessageType<SCMEnablePullRequestAutoMergeRequest>).runtime = proto3;
(SCMEnablePullRequestAutoMergeRequest as MutableMessageType<SCMEnablePullRequestAutoMergeRequest>).typeName = "aiserver.v1.SCMEnablePullRequestAutoMergeRequest";
(SCMEnablePullRequestAutoMergeRequest as MutableMessageType<SCMEnablePullRequestAutoMergeRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "merge_method", kind: "enum", T: proto3.getEnumType(SCMMergeMethod) }
]);
var SCMEnablePullRequestAutoMergeResponse$Runtime = (() => class _SCMEnablePullRequestAutoMergeResponse extends Message<_SCMEnablePullRequestAutoMergeResponse> {
  declare success: boolean;
  declare error: string;
  declare prNodeId?: string;
  constructor(data?: PartialMessage<_SCMEnablePullRequestAutoMergeResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMEnablePullRequestAutoMergeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMEnablePullRequestAutoMergeResponse {
    return new _SCMEnablePullRequestAutoMergeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMEnablePullRequestAutoMergeResponse {
    return new _SCMEnablePullRequestAutoMergeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMEnablePullRequestAutoMergeResponse {
    return new _SCMEnablePullRequestAutoMergeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMEnablePullRequestAutoMergeResponse | PlainMessage<_SCMEnablePullRequestAutoMergeResponse> | undefined | null, b2: _SCMEnablePullRequestAutoMergeResponse | PlainMessage<_SCMEnablePullRequestAutoMergeResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMEnablePullRequestAutoMergeResponse as unknown as MessageType<_SCMEnablePullRequestAutoMergeResponse>, a, b2);
  }
})();
export type SCMEnablePullRequestAutoMergeResponse = InstanceType<typeof SCMEnablePullRequestAutoMergeResponse$Runtime>;
var SCMEnablePullRequestAutoMergeResponse: MessageType<SCMEnablePullRequestAutoMergeResponse> = SCMEnablePullRequestAutoMergeResponse$Runtime as unknown as MessageType<SCMEnablePullRequestAutoMergeResponse>;
(SCMEnablePullRequestAutoMergeResponse as MutableMessageType<SCMEnablePullRequestAutoMergeResponse>).runtime = proto3;
(SCMEnablePullRequestAutoMergeResponse as MutableMessageType<SCMEnablePullRequestAutoMergeResponse>).typeName = "aiserver.v1.SCMEnablePullRequestAutoMergeResponse";
(SCMEnablePullRequestAutoMergeResponse as MutableMessageType<SCMEnablePullRequestAutoMergeResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pr_node_id", kind: "scalar", T: 9, opt: true }
]);
var SCMDisablePullRequestAutoMergeRequest$Runtime = (() => class _SCMDisablePullRequestAutoMergeRequest extends Message<_SCMDisablePullRequestAutoMergeRequest> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_SCMDisablePullRequestAutoMergeRequest>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _SCMDisablePullRequestAutoMergeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMDisablePullRequestAutoMergeRequest {
    return new _SCMDisablePullRequestAutoMergeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMDisablePullRequestAutoMergeRequest {
    return new _SCMDisablePullRequestAutoMergeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMDisablePullRequestAutoMergeRequest {
    return new _SCMDisablePullRequestAutoMergeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMDisablePullRequestAutoMergeRequest | PlainMessage<_SCMDisablePullRequestAutoMergeRequest> | undefined | null, b2: _SCMDisablePullRequestAutoMergeRequest | PlainMessage<_SCMDisablePullRequestAutoMergeRequest> | undefined | null): boolean {
    return proto3.util.equals(_SCMDisablePullRequestAutoMergeRequest as unknown as MessageType<_SCMDisablePullRequestAutoMergeRequest>, a, b2);
  }
})();
export type SCMDisablePullRequestAutoMergeRequest = InstanceType<typeof SCMDisablePullRequestAutoMergeRequest$Runtime>;
var SCMDisablePullRequestAutoMergeRequest: MessageType<SCMDisablePullRequestAutoMergeRequest> = SCMDisablePullRequestAutoMergeRequest$Runtime as unknown as MessageType<SCMDisablePullRequestAutoMergeRequest>;
(SCMDisablePullRequestAutoMergeRequest as MutableMessageType<SCMDisablePullRequestAutoMergeRequest>).runtime = proto3;
(SCMDisablePullRequestAutoMergeRequest as MutableMessageType<SCMDisablePullRequestAutoMergeRequest>).typeName = "aiserver.v1.SCMDisablePullRequestAutoMergeRequest";
(SCMDisablePullRequestAutoMergeRequest as MutableMessageType<SCMDisablePullRequestAutoMergeRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SCMDisablePullRequestAutoMergeResponse$Runtime = (() => class _SCMDisablePullRequestAutoMergeResponse extends Message<_SCMDisablePullRequestAutoMergeResponse> {
  declare success: boolean;
  declare error: string;
  declare prNodeId?: string;
  constructor(data?: PartialMessage<_SCMDisablePullRequestAutoMergeResponse>) {
    super();
    this.success = false;
    this.error = "";
    proto3.util.initPartial(data, this as _SCMDisablePullRequestAutoMergeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SCMDisablePullRequestAutoMergeResponse {
    return new _SCMDisablePullRequestAutoMergeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SCMDisablePullRequestAutoMergeResponse {
    return new _SCMDisablePullRequestAutoMergeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SCMDisablePullRequestAutoMergeResponse {
    return new _SCMDisablePullRequestAutoMergeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SCMDisablePullRequestAutoMergeResponse | PlainMessage<_SCMDisablePullRequestAutoMergeResponse> | undefined | null, b2: _SCMDisablePullRequestAutoMergeResponse | PlainMessage<_SCMDisablePullRequestAutoMergeResponse> | undefined | null): boolean {
    return proto3.util.equals(_SCMDisablePullRequestAutoMergeResponse as unknown as MessageType<_SCMDisablePullRequestAutoMergeResponse>, a, b2);
  }
})();
export type SCMDisablePullRequestAutoMergeResponse = InstanceType<typeof SCMDisablePullRequestAutoMergeResponse$Runtime>;
var SCMDisablePullRequestAutoMergeResponse: MessageType<SCMDisablePullRequestAutoMergeResponse> = SCMDisablePullRequestAutoMergeResponse$Runtime as unknown as MessageType<SCMDisablePullRequestAutoMergeResponse>;
(SCMDisablePullRequestAutoMergeResponse as MutableMessageType<SCMDisablePullRequestAutoMergeResponse>).runtime = proto3;
(SCMDisablePullRequestAutoMergeResponse as MutableMessageType<SCMDisablePullRequestAutoMergeResponse>).typeName = "aiserver.v1.SCMDisablePullRequestAutoMergeResponse";
(SCMDisablePullRequestAutoMergeResponse as MutableMessageType<SCMDisablePullRequestAutoMergeResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pr_node_id", kind: "scalar", T: 9, opt: true }
]);
var GetPullRequestCheckLogExcerptRequest$Runtime = (() => class _GetPullRequestCheckLogExcerptRequest extends Message<_GetPullRequestCheckLogExcerptRequest> {
  declare prUrl: string;
  declare provider: string;
  declare providerCheckId: string;
  declare maxBytes?: number;
  constructor(data?: PartialMessage<_GetPullRequestCheckLogExcerptRequest>) {
    super();
    this.prUrl = "";
    this.provider = "";
    this.providerCheckId = "";
    proto3.util.initPartial(data, this as _GetPullRequestCheckLogExcerptRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestCheckLogExcerptRequest {
    return new _GetPullRequestCheckLogExcerptRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestCheckLogExcerptRequest {
    return new _GetPullRequestCheckLogExcerptRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestCheckLogExcerptRequest {
    return new _GetPullRequestCheckLogExcerptRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestCheckLogExcerptRequest | PlainMessage<_GetPullRequestCheckLogExcerptRequest> | undefined | null, b2: _GetPullRequestCheckLogExcerptRequest | PlainMessage<_GetPullRequestCheckLogExcerptRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestCheckLogExcerptRequest as unknown as MessageType<_GetPullRequestCheckLogExcerptRequest>, a, b2);
  }
})();
export type GetPullRequestCheckLogExcerptRequest = InstanceType<typeof GetPullRequestCheckLogExcerptRequest$Runtime>;
var GetPullRequestCheckLogExcerptRequest: MessageType<GetPullRequestCheckLogExcerptRequest> = GetPullRequestCheckLogExcerptRequest$Runtime as unknown as MessageType<GetPullRequestCheckLogExcerptRequest>;
(GetPullRequestCheckLogExcerptRequest as MutableMessageType<GetPullRequestCheckLogExcerptRequest>).runtime = proto3;
(GetPullRequestCheckLogExcerptRequest as MutableMessageType<GetPullRequestCheckLogExcerptRequest>).typeName = "aiserver.v1.GetPullRequestCheckLogExcerptRequest";
(GetPullRequestCheckLogExcerptRequest as MutableMessageType<GetPullRequestCheckLogExcerptRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "provider",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "provider_check_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "max_bytes", kind: "scalar", T: 13, opt: true }
]);
var GetPullRequestCodeownersRequest$Runtime = (() => class _GetPullRequestCodeownersRequest extends Message<_GetPullRequestCodeownersRequest> {
  declare prUrl: string;
  declare paths: string[];
  declare skipCache: boolean;
  constructor(data?: PartialMessage<_GetPullRequestCodeownersRequest>) {
    super();
    this.prUrl = "";
    this.paths = [];
    this.skipCache = false;
    proto3.util.initPartial(data, this as _GetPullRequestCodeownersRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestCodeownersRequest {
    return new _GetPullRequestCodeownersRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestCodeownersRequest {
    return new _GetPullRequestCodeownersRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestCodeownersRequest {
    return new _GetPullRequestCodeownersRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestCodeownersRequest | PlainMessage<_GetPullRequestCodeownersRequest> | undefined | null, b2: _GetPullRequestCodeownersRequest | PlainMessage<_GetPullRequestCodeownersRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestCodeownersRequest as unknown as MessageType<_GetPullRequestCodeownersRequest>, a, b2);
  }
})();
export type GetPullRequestCodeownersRequest = InstanceType<typeof GetPullRequestCodeownersRequest$Runtime>;
var GetPullRequestCodeownersRequest: MessageType<GetPullRequestCodeownersRequest> = GetPullRequestCodeownersRequest$Runtime as unknown as MessageType<GetPullRequestCodeownersRequest>;
(GetPullRequestCodeownersRequest as MutableMessageType<GetPullRequestCodeownersRequest>).runtime = proto3;
(GetPullRequestCodeownersRequest as MutableMessageType<GetPullRequestCodeownersRequest>).typeName = "aiserver.v1.GetPullRequestCodeownersRequest";
(GetPullRequestCodeownersRequest as MutableMessageType<GetPullRequestCodeownersRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "paths", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "skip_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var PullRequestPathCodeowners$Runtime = (() => class _PullRequestPathCodeowners extends Message<_PullRequestPathCodeowners> {
  declare path: string;
  declare owners: string[];
  constructor(data?: PartialMessage<_PullRequestPathCodeowners>) {
    super();
    this.path = "";
    this.owners = [];
    proto3.util.initPartial(data, this as _PullRequestPathCodeowners);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequestPathCodeowners {
    return new _PullRequestPathCodeowners().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequestPathCodeowners {
    return new _PullRequestPathCodeowners().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequestPathCodeowners {
    return new _PullRequestPathCodeowners().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequestPathCodeowners | PlainMessage<_PullRequestPathCodeowners> | undefined | null, b2: _PullRequestPathCodeowners | PlainMessage<_PullRequestPathCodeowners> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestPathCodeowners as unknown as MessageType<_PullRequestPathCodeowners>, a, b2);
  }
})();
export type PullRequestPathCodeowners = InstanceType<typeof PullRequestPathCodeowners$Runtime>;
var PullRequestPathCodeowners: MessageType<PullRequestPathCodeowners> = PullRequestPathCodeowners$Runtime as unknown as MessageType<PullRequestPathCodeowners>;
(PullRequestPathCodeowners as MutableMessageType<PullRequestPathCodeowners>).runtime = proto3;
(PullRequestPathCodeowners as MutableMessageType<PullRequestPathCodeowners>).typeName = "aiserver.v1.PullRequestPathCodeowners";
(PullRequestPathCodeowners as MutableMessageType<PullRequestPathCodeowners>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "owners", kind: "scalar", T: 9, repeated: true }
]);
var GetPullRequestCodeownersResponse$Runtime = (() => class _GetPullRequestCodeownersResponse extends Message<_GetPullRequestCodeownersResponse> {
  declare entries: PullRequestPathCodeowners[];
  constructor(data?: PartialMessage<_GetPullRequestCodeownersResponse>) {
    super();
    this.entries = [];
    proto3.util.initPartial(data, this as _GetPullRequestCodeownersResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestCodeownersResponse {
    return new _GetPullRequestCodeownersResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestCodeownersResponse {
    return new _GetPullRequestCodeownersResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestCodeownersResponse {
    return new _GetPullRequestCodeownersResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestCodeownersResponse | PlainMessage<_GetPullRequestCodeownersResponse> | undefined | null, b2: _GetPullRequestCodeownersResponse | PlainMessage<_GetPullRequestCodeownersResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestCodeownersResponse as unknown as MessageType<_GetPullRequestCodeownersResponse>, a, b2);
  }
})();
export type GetPullRequestCodeownersResponse = InstanceType<typeof GetPullRequestCodeownersResponse$Runtime>;
var GetPullRequestCodeownersResponse: MessageType<GetPullRequestCodeownersResponse> = GetPullRequestCodeownersResponse$Runtime as unknown as MessageType<GetPullRequestCodeownersResponse>;
(GetPullRequestCodeownersResponse as MutableMessageType<GetPullRequestCodeownersResponse>).runtime = proto3;
(GetPullRequestCodeownersResponse as MutableMessageType<GetPullRequestCodeownersResponse>).typeName = "aiserver.v1.GetPullRequestCodeownersResponse";
(GetPullRequestCodeownersResponse as MutableMessageType<GetPullRequestCodeownersResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "entries", kind: "message", T: PullRequestPathCodeowners, repeated: true }
]);
var StreamPullRequestUpdatesRequest$Runtime = (() => class _StreamPullRequestUpdatesRequest extends Message<_StreamPullRequestUpdatesRequest> {
  declare prUrls: string[];
  constructor(data?: PartialMessage<_StreamPullRequestUpdatesRequest>) {
    super();
    this.prUrls = [];
    proto3.util.initPartial(data, this as _StreamPullRequestUpdatesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamPullRequestUpdatesRequest {
    return new _StreamPullRequestUpdatesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamPullRequestUpdatesRequest {
    return new _StreamPullRequestUpdatesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamPullRequestUpdatesRequest {
    return new _StreamPullRequestUpdatesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamPullRequestUpdatesRequest | PlainMessage<_StreamPullRequestUpdatesRequest> | undefined | null, b2: _StreamPullRequestUpdatesRequest | PlainMessage<_StreamPullRequestUpdatesRequest> | undefined | null): boolean {
    return proto3.util.equals(_StreamPullRequestUpdatesRequest as unknown as MessageType<_StreamPullRequestUpdatesRequest>, a, b2);
  }
})();
export type StreamPullRequestUpdatesRequest = InstanceType<typeof StreamPullRequestUpdatesRequest$Runtime>;
var StreamPullRequestUpdatesRequest: MessageType<StreamPullRequestUpdatesRequest> = StreamPullRequestUpdatesRequest$Runtime as unknown as MessageType<StreamPullRequestUpdatesRequest>;
(StreamPullRequestUpdatesRequest as MutableMessageType<StreamPullRequestUpdatesRequest>).runtime = proto3;
(StreamPullRequestUpdatesRequest as MutableMessageType<StreamPullRequestUpdatesRequest>).typeName = "aiserver.v1.StreamPullRequestUpdatesRequest";
(StreamPullRequestUpdatesRequest as MutableMessageType<StreamPullRequestUpdatesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_urls", kind: "scalar", T: 9, repeated: true }
]);
var PullRequestUpdatedNotification$Runtime = (() => class _PullRequestUpdatedNotification extends Message<_PullRequestUpdatedNotification> {
  declare prUrl: string;
  constructor(data?: PartialMessage<_PullRequestUpdatedNotification>) {
    super();
    this.prUrl = "";
    proto3.util.initPartial(data, this as _PullRequestUpdatedNotification);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequestUpdatedNotification {
    return new _PullRequestUpdatedNotification().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequestUpdatedNotification {
    return new _PullRequestUpdatedNotification().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequestUpdatedNotification {
    return new _PullRequestUpdatedNotification().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequestUpdatedNotification | PlainMessage<_PullRequestUpdatedNotification> | undefined | null, b2: _PullRequestUpdatedNotification | PlainMessage<_PullRequestUpdatedNotification> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestUpdatedNotification as unknown as MessageType<_PullRequestUpdatedNotification>, a, b2);
  }
})();
export type PullRequestUpdatedNotification = InstanceType<typeof PullRequestUpdatedNotification$Runtime>;
var PullRequestUpdatedNotification: MessageType<PullRequestUpdatedNotification> = PullRequestUpdatedNotification$Runtime as unknown as MessageType<PullRequestUpdatedNotification>;
(PullRequestUpdatedNotification as MutableMessageType<PullRequestUpdatedNotification>).runtime = proto3;
(PullRequestUpdatedNotification as MutableMessageType<PullRequestUpdatedNotification>).typeName = "aiserver.v1.PullRequestUpdatedNotification";
(PullRequestUpdatedNotification as MutableMessageType<PullRequestUpdatedNotification>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PullRequestUpdatesHeartbeat$Runtime = (() => class _PullRequestUpdatesHeartbeat extends Message<_PullRequestUpdatesHeartbeat> {
  constructor(data?: PartialMessage<_PullRequestUpdatesHeartbeat>) {
    super();
    proto3.util.initPartial(data, this as _PullRequestUpdatesHeartbeat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequestUpdatesHeartbeat {
    return new _PullRequestUpdatesHeartbeat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequestUpdatesHeartbeat {
    return new _PullRequestUpdatesHeartbeat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequestUpdatesHeartbeat {
    return new _PullRequestUpdatesHeartbeat().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequestUpdatesHeartbeat | PlainMessage<_PullRequestUpdatesHeartbeat> | undefined | null, b2: _PullRequestUpdatesHeartbeat | PlainMessage<_PullRequestUpdatesHeartbeat> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestUpdatesHeartbeat as unknown as MessageType<_PullRequestUpdatesHeartbeat>, a, b2);
  }
})();
export type PullRequestUpdatesHeartbeat = InstanceType<typeof PullRequestUpdatesHeartbeat$Runtime>;
var PullRequestUpdatesHeartbeat: MessageType<PullRequestUpdatesHeartbeat> = PullRequestUpdatesHeartbeat$Runtime as unknown as MessageType<PullRequestUpdatesHeartbeat>;
(PullRequestUpdatesHeartbeat as MutableMessageType<PullRequestUpdatesHeartbeat>).runtime = proto3;
(PullRequestUpdatesHeartbeat as MutableMessageType<PullRequestUpdatesHeartbeat>).typeName = "aiserver.v1.PullRequestUpdatesHeartbeat";
(PullRequestUpdatesHeartbeat as MutableMessageType<PullRequestUpdatesHeartbeat>).fields = proto3.util.newFieldList(() => []);
var PullRequestUpdatedEvent$Runtime = (() => class _PullRequestUpdatedEvent extends Message<_PullRequestUpdatedEvent> {
  declare event: { case: "updated"; value: PullRequestUpdatedNotification } | { case: "heartbeat"; value: PullRequestUpdatesHeartbeat } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PullRequestUpdatedEvent>) {
    super();
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _PullRequestUpdatedEvent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequestUpdatedEvent {
    return new _PullRequestUpdatedEvent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequestUpdatedEvent {
    return new _PullRequestUpdatedEvent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequestUpdatedEvent {
    return new _PullRequestUpdatedEvent().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequestUpdatedEvent | PlainMessage<_PullRequestUpdatedEvent> | undefined | null, b2: _PullRequestUpdatedEvent | PlainMessage<_PullRequestUpdatedEvent> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestUpdatedEvent as unknown as MessageType<_PullRequestUpdatedEvent>, a, b2);
  }
})();
export type PullRequestUpdatedEvent = InstanceType<typeof PullRequestUpdatedEvent$Runtime>;
var PullRequestUpdatedEvent: MessageType<PullRequestUpdatedEvent> = PullRequestUpdatedEvent$Runtime as unknown as MessageType<PullRequestUpdatedEvent>;
(PullRequestUpdatedEvent as MutableMessageType<PullRequestUpdatedEvent>).runtime = proto3;
(PullRequestUpdatedEvent as MutableMessageType<PullRequestUpdatedEvent>).typeName = "aiserver.v1.PullRequestUpdatedEvent";
(PullRequestUpdatedEvent as MutableMessageType<PullRequestUpdatedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "updated", kind: "message", T: PullRequestUpdatedNotification, oneof: "event" },
  { no: 2, name: "heartbeat", kind: "message", T: PullRequestUpdatesHeartbeat, oneof: "event" }
]);
var GetPullRequestCheckLogExcerptResponse$Runtime = (() => class _GetPullRequestCheckLogExcerptResponse extends Message<_GetPullRequestCheckLogExcerptResponse> {
  declare status: CheckLogExcerptStatus;
  declare excerpt: string;
  declare totalBytes: bigint;
  declare truncated: boolean;
  declare message: string;
  constructor(data?: PartialMessage<_GetPullRequestCheckLogExcerptResponse>) {
    super();
    this.status = CheckLogExcerptStatus.UNSPECIFIED;
    this.excerpt = "";
    this.totalBytes = protoInt64.zero;
    this.truncated = false;
    this.message = "";
    proto3.util.initPartial(data, this as _GetPullRequestCheckLogExcerptResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPullRequestCheckLogExcerptResponse {
    return new _GetPullRequestCheckLogExcerptResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPullRequestCheckLogExcerptResponse {
    return new _GetPullRequestCheckLogExcerptResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPullRequestCheckLogExcerptResponse {
    return new _GetPullRequestCheckLogExcerptResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPullRequestCheckLogExcerptResponse | PlainMessage<_GetPullRequestCheckLogExcerptResponse> | undefined | null, b2: _GetPullRequestCheckLogExcerptResponse | PlainMessage<_GetPullRequestCheckLogExcerptResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPullRequestCheckLogExcerptResponse as unknown as MessageType<_GetPullRequestCheckLogExcerptResponse>, a, b2);
  }
})();
export type GetPullRequestCheckLogExcerptResponse = InstanceType<typeof GetPullRequestCheckLogExcerptResponse$Runtime>;
var GetPullRequestCheckLogExcerptResponse: MessageType<GetPullRequestCheckLogExcerptResponse> = GetPullRequestCheckLogExcerptResponse$Runtime as unknown as MessageType<GetPullRequestCheckLogExcerptResponse>;
(GetPullRequestCheckLogExcerptResponse as MutableMessageType<GetPullRequestCheckLogExcerptResponse>).runtime = proto3;
(GetPullRequestCheckLogExcerptResponse as MutableMessageType<GetPullRequestCheckLogExcerptResponse>).typeName = "aiserver.v1.GetPullRequestCheckLogExcerptResponse";
(GetPullRequestCheckLogExcerptResponse as MutableMessageType<GetPullRequestCheckLogExcerptResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(CheckLogExcerptStatus) },
  {
    no: 2,
    name: "excerpt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "total_bytes",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 4,
    name: "truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { SCMPullRequestState, SCMMergeability, SCMCiStatus, SCMPullRequestDiffFileStatus, SCMMergeMethod, SCMPullRequestStackSource, PullRequestFileContentsStatus, CheckLogExcerptStatus, GetPullRequestRequest, GetPullRequestResponse, GetPullRequestStackRequest, GetPullRequestStackResponse, SCMPullRequestStack, SCMPullRequestStackMember, SCMPullRequestStackEdge, BatchGetPullRequestsRequest, BatchGetPullRequestsResponse, BatchGetPullRequestStatusRequest, BatchGetPullRequestStatusResponse, SCMPullRequestStatus, SCMPullRequest, SCMPullRequestReviewer, SCMPullRequestRequestedReviewer, GetPullRequestDiffRequest, GetPullRequestFileContentsRequest, GetPullRequestFileContentsResponse, GetPullRequestChecksRequest, GetPullRequestChecksResponse, PRCheckStatus, PRCheckAnnotation, PRCheck, GetSCMPullRequestCommitsRequest, GetSCMPullRequestCommitsResponse, SCMPullRequestCommit, SCMPullRequestCommitUser, GetSCMPullRequestTimelineEventsRequest, GetSCMPullRequestTimelineEventsResponse, SCMPullRequestTimelineEvent, SCMPullRequestTimelineActor, GetPullRequestDiffResponse, GetBranchComparisonRequest, GetBranchComparisonResponse, SCMGetPullRequestForBranchRequest, SCMGetPullRequestForBranchResponse, SCMBranchRef, SCMBatchGetPullRequestForBranchRequest, SCMBranchPullRequests, SCMBatchGetPullRequestForBranchResponse, SCMPullRequestDiffFile, SCMMergePullRequestRequest, SCMMergePullRequestResponse, SCMUpdatePullRequestTitleRequest, SCMUpdatePullRequestTitleResponse, SCMMakePullRequestReadyRequest, SCMMakePullRequestReadyResponse, SCMClosePullRequestRequest, SCMClosePullRequestResponse, SCMReopenPullRequestRequest, SCMReopenPullRequestResponse, SCMEnablePullRequestAutoMergeRequest, SCMEnablePullRequestAutoMergeResponse, SCMDisablePullRequestAutoMergeRequest, SCMDisablePullRequestAutoMergeResponse, GetPullRequestCheckLogExcerptRequest, GetPullRequestCodeownersRequest, PullRequestPathCodeowners, GetPullRequestCodeownersResponse, StreamPullRequestUpdatesRequest, PullRequestUpdatedNotification, PullRequestUpdatesHeartbeat, PullRequestUpdatedEvent, GetPullRequestCheckLogExcerptResponse };
