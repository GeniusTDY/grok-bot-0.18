/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:306757-306952
 * Region SHA-256: eae5f600c8a3144a61425407343200170e285648bb24253d41f6d9439f3549e2
 * Atomic B0 exports: 4 messages + 0 enums = 4
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var SubjectScore$Runtime = (() => class _SubjectScore extends Message<_SubjectScore> {
  declare subjectKey: string;
  declare score: number;
  declare sampleCount: number;
  constructor(data?: PartialMessage<_SubjectScore>) {
    super();
    this.subjectKey = "";
    this.score = 0;
    this.sampleCount = 0;
    proto3.util.initPartial(data, this as _SubjectScore);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubjectScore {
    return new _SubjectScore().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubjectScore {
    return new _SubjectScore().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubjectScore {
    return new _SubjectScore().fromJsonString(jsonString, options);
  }
  static equals(a: _SubjectScore | PlainMessage<_SubjectScore> | undefined | null, b2: _SubjectScore | PlainMessage<_SubjectScore> | undefined | null): boolean {
    return proto3.util.equals(_SubjectScore as unknown as MessageType<_SubjectScore>, a, b2);
  }
})();
export type SubjectScore = InstanceType<typeof SubjectScore$Runtime>;
var SubjectScore: MessageType<SubjectScore> = SubjectScore$Runtime as unknown as MessageType<SubjectScore>;
(SubjectScore as MutableMessageType<SubjectScore>).runtime = proto3;
(SubjectScore as MutableMessageType<SubjectScore>).typeName = "aiserver.v1.SubjectScore";
(SubjectScore as MutableMessageType<SubjectScore>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subject_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "sample_count",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var ProjectionScoreSet$Runtime = (() => class _ProjectionScoreSet extends Message<_ProjectionScoreSet> {
  declare sourceWatermarkMs: bigint;
  declare generatedAtMs: bigint;
  declare expiresAtMs: bigint;
  declare scores: SubjectScore[];
  constructor(data?: PartialMessage<_ProjectionScoreSet>) {
    super();
    this.sourceWatermarkMs = protoInt64.zero;
    this.generatedAtMs = protoInt64.zero;
    this.expiresAtMs = protoInt64.zero;
    this.scores = [];
    proto3.util.initPartial(data, this as _ProjectionScoreSet);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectionScoreSet {
    return new _ProjectionScoreSet().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectionScoreSet {
    return new _ProjectionScoreSet().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectionScoreSet {
    return new _ProjectionScoreSet().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectionScoreSet | PlainMessage<_ProjectionScoreSet> | undefined | null, b2: _ProjectionScoreSet | PlainMessage<_ProjectionScoreSet> | undefined | null): boolean {
    return proto3.util.equals(_ProjectionScoreSet as unknown as MessageType<_ProjectionScoreSet>, a, b2);
  }
})();
export type ProjectionScoreSet = InstanceType<typeof ProjectionScoreSet$Runtime>;
var ProjectionScoreSet: MessageType<ProjectionScoreSet> = ProjectionScoreSet$Runtime as unknown as MessageType<ProjectionScoreSet>;
(ProjectionScoreSet as MutableMessageType<ProjectionScoreSet>).runtime = proto3;
(ProjectionScoreSet as MutableMessageType<ProjectionScoreSet>).typeName = "aiserver.v1.ProjectionScoreSet";
(ProjectionScoreSet as MutableMessageType<ProjectionScoreSet>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "source_watermark_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "generated_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "expires_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 4, name: "scores", kind: "message", T: SubjectScore, repeated: true }
]);
var GetProjectionSnapshotRequest$Runtime = (() => class _GetProjectionSnapshotRequest extends Message<_GetProjectionSnapshotRequest> {
  declare policyId: string;
  declare knownSnapshotVersion: bigint;
  constructor(data?: PartialMessage<_GetProjectionSnapshotRequest>) {
    super();
    this.policyId = "";
    this.knownSnapshotVersion = protoInt64.zero;
    proto3.util.initPartial(data, this as _GetProjectionSnapshotRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProjectionSnapshotRequest {
    return new _GetProjectionSnapshotRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProjectionSnapshotRequest {
    return new _GetProjectionSnapshotRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProjectionSnapshotRequest {
    return new _GetProjectionSnapshotRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProjectionSnapshotRequest | PlainMessage<_GetProjectionSnapshotRequest> | undefined | null, b2: _GetProjectionSnapshotRequest | PlainMessage<_GetProjectionSnapshotRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetProjectionSnapshotRequest as unknown as MessageType<_GetProjectionSnapshotRequest>, a, b2);
  }
})();
export type GetProjectionSnapshotRequest = InstanceType<typeof GetProjectionSnapshotRequest$Runtime>;
var GetProjectionSnapshotRequest: MessageType<GetProjectionSnapshotRequest> = GetProjectionSnapshotRequest$Runtime as unknown as MessageType<GetProjectionSnapshotRequest>;
(GetProjectionSnapshotRequest as MutableMessageType<GetProjectionSnapshotRequest>).runtime = proto3;
(GetProjectionSnapshotRequest as MutableMessageType<GetProjectionSnapshotRequest>).typeName = "aiserver.v1.GetProjectionSnapshotRequest";
(GetProjectionSnapshotRequest as MutableMessageType<GetProjectionSnapshotRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "policy_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "known_snapshot_version",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var GetProjectionSnapshotResponse$Runtime = (() => class _GetProjectionSnapshotResponse extends Message<_GetProjectionSnapshotResponse> {
  declare policyId: string;
  declare policyVersion: number;
  declare snapshotVersion: bigint;
  declare team?: ProjectionScoreSet;
  declare notModified: boolean;
  constructor(data?: PartialMessage<_GetProjectionSnapshotResponse>) {
    super();
    this.policyId = "";
    this.policyVersion = 0;
    this.snapshotVersion = protoInt64.zero;
    this.notModified = false;
    proto3.util.initPartial(data, this as _GetProjectionSnapshotResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProjectionSnapshotResponse {
    return new _GetProjectionSnapshotResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProjectionSnapshotResponse {
    return new _GetProjectionSnapshotResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProjectionSnapshotResponse {
    return new _GetProjectionSnapshotResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProjectionSnapshotResponse | PlainMessage<_GetProjectionSnapshotResponse> | undefined | null, b2: _GetProjectionSnapshotResponse | PlainMessage<_GetProjectionSnapshotResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetProjectionSnapshotResponse as unknown as MessageType<_GetProjectionSnapshotResponse>, a, b2);
  }
})();
export type GetProjectionSnapshotResponse = InstanceType<typeof GetProjectionSnapshotResponse$Runtime>;
var GetProjectionSnapshotResponse: MessageType<GetProjectionSnapshotResponse> = GetProjectionSnapshotResponse$Runtime as unknown as MessageType<GetProjectionSnapshotResponse>;
(GetProjectionSnapshotResponse as MutableMessageType<GetProjectionSnapshotResponse>).runtime = proto3;
(GetProjectionSnapshotResponse as MutableMessageType<GetProjectionSnapshotResponse>).typeName = "aiserver.v1.GetProjectionSnapshotResponse";
(GetProjectionSnapshotResponse as MutableMessageType<GetProjectionSnapshotResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "policy_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "policy_version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "snapshot_version",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 4, name: "team", kind: "message", T: ProjectionScoreSet },
  {
    no: 5,
    name: "not_modified",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { SubjectScore, ProjectionScoreSet, GetProjectionSnapshotRequest, GetProjectionSnapshotResponse };
