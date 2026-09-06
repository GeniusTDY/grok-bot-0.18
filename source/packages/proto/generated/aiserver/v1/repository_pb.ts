/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:28668-32958
 * Region SHA-256: ee262180608d7ad035faed69c82773c89542588987f2f56f7637d3a3e23c0fad
 * Atomic B1 exports: 126 messages + 34 enums = 160
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { EmbeddingModel, SimpleRange, DetailedLine, CodeBlock, File2, ModelDetails } from "./utils_pb.js";
import { ReflectionData, IndexFileData_NodeData } from "./symbolic_context_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ChunkingStrategy = 0 | 1;
var ChunkingStrategy: {
  "UNSPECIFIED": 0;
  "DEFAULT": 1;
  0: "UNSPECIFIED";
  1: "DEFAULT";
};
export type SimilarityMetricType = 0 | 1;
var SimilarityMetricType: {
  "UNSPECIFIED": 0;
  "SIMHASH": 1;
  0: "UNSPECIFIED";
  1: "SIMHASH";
};
export type PathKeyHashType = 0 | 1;
var PathKeyHashType: {
  "UNSPECIFIED": 0;
  "SHA256": 1;
  0: "UNSPECIFIED";
  1: "SHA256";
};
export type RerankerAlgorithm = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
var RerankerAlgorithm: {
  "UNSPECIFIED": 0;
  "LULEA": 1;
  "UMEA": 2;
  "NONE": 3;
  "LLAMA": 4;
  "STARCODER_V1": 5;
  "GPT_3_5_LOGPROBS": 6;
  "LULEA_HAIKU": 7;
  "COHERE": 8;
  "VOYAGE": 9;
  "VOYAGE_EMBEDS": 10;
  "IDENTITY": 11;
  "ADA_EMBEDS": 12;
  0: "UNSPECIFIED";
  1: "LULEA";
  2: "UMEA";
  3: "NONE";
  4: "LLAMA";
  5: "STARCODER_V1";
  6: "GPT_3_5_LOGPROBS";
  7: "LULEA_HAIKU";
  8: "COHERE";
  9: "VOYAGE";
  10: "VOYAGE_EMBEDS";
  11: "IDENTITY";
  12: "ADA_EMBEDS";
};
export type DatabaseProvider = 0 | 1 | 2;
var DatabaseProvider: {
  "UNSPECIFIED": 0;
  "AURORA": 1;
  "PLANETSCALE": 2;
  0: "UNSPECIFIED";
  1: "AURORA";
  2: "PLANETSCALE";
};
export type RechunkerChoice = 0 | 1 | 2 | 3 | 4;
var RechunkerChoice: {
  "RECHUNKER_CHOICE_UNSPECIFIED": 0;
  "RECHUNKER_CHOICE_IDENTITY": 1;
  "RECHUNKER_CHOICE_600_TOKS": 2;
  "RECHUNKER_CHOICE_2400_TOKS": 3;
  "RECHUNKER_CHOICE_4000_TOKS": 4;
  0: "RECHUNKER_CHOICE_UNSPECIFIED";
  1: "RECHUNKER_CHOICE_IDENTITY";
  2: "RECHUNKER_CHOICE_600_TOKS";
  3: "RECHUNKER_CHOICE_2400_TOKS";
  4: "RECHUNKER_CHOICE_4000_TOKS";
};
export type FastRepoInitHandshakeResponse_Status = 0 | 1 | 2 | 3 | 4;
var FastRepoInitHandshakeResponse_Status: {
  "UNSPECIFIED": 0;
  "UP_TO_DATE": 1;
  "OUT_OF_SYNC": 2;
  "FAILURE": 3;
  "EMPTY": 4;
  0: "UNSPECIFIED";
  1: "UP_TO_DATE";
  2: "OUT_OF_SYNC";
  3: "FAILURE";
  4: "EMPTY";
};
export type RepositoryCodebaseInfo_Status = 0 | 1 | 2 | 3 | 4 | 5;
var RepositoryCodebaseInfo_Status: {
  "UNSPECIFIED": 0;
  "UP_TO_DATE": 1;
  "OUT_OF_SYNC": 2;
  "EMPTY": 3;
  "EMPTY_WITH_COPY_AVAILABLE": 4;
  "COPY_IN_PROGRESS": 5;
  0: "UNSPECIFIED";
  1: "UP_TO_DATE";
  2: "OUT_OF_SYNC";
  3: "EMPTY";
  4: "EMPTY_WITH_COPY_AVAILABLE";
  5: "COPY_IN_PROGRESS";
};
export type FastRepoInitHandshakeV2Response_Status = 0 | 1 | 2;
var FastRepoInitHandshakeV2Response_Status: {
  "UNSPECIFIED": 0;
  "FAILURE": 1;
  "SUCCESS": 2;
  0: "UNSPECIFIED";
  1: "FAILURE";
  2: "SUCCESS";
};
export type RepositoryCodebaseSyncStatus_Status = 0 | 1 | 2;
var RepositoryCodebaseSyncStatus_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
};
export type FastUpdateFileRequest_UpdateType = 0 | 1 | 2 | 3;
var FastUpdateFileRequest_UpdateType: {
  "UNSPECIFIED": 0;
  "ADD": 1;
  "DELETE": 2;
  "MODIFY": 3;
  0: "UNSPECIFIED";
  1: "ADD";
  2: "DELETE";
  3: "MODIFY";
};
export type FastUpdateFileResponse_Status = 0 | 1 | 2 | 3;
var FastUpdateFileResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "EXPECTED_FAILURE": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "EXPECTED_FAILURE";
};
export type FastUpdateFileV2Request_UpdateType = 0 | 1 | 2 | 3 | 4;
var FastUpdateFileV2Request_UpdateType: {
  "UNSPECIFIED": 0;
  "ADD": 1;
  "DELETE": 2;
  "MODIFY": 3;
  "BATCH": 4;
  0: "UNSPECIFIED";
  1: "ADD";
  2: "DELETE";
  3: "MODIFY";
  4: "BATCH";
};
export type FastUpdateFileV2Response_Status = 0 | 1 | 2 | 3;
var FastUpdateFileV2Response_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "EXPECTED_FAILURE": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "EXPECTED_FAILURE";
};
export type StartUploadRepoResponse_Status = 0 | 1 | 2 | 3;
var StartUploadRepoResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "ALREADY_EXISTS": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "ALREADY_EXISTS";
};
export type UploadFileResponse_Status = 0 | 1 | 2 | 3 | 4;
var UploadFileResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "EXPECTED_FAILURE": 3;
  "QUEUE_BACKED_UP": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "EXPECTED_FAILURE";
  4: "QUEUE_BACKED_UP";
};
export type FinishUploadRepoResponse_Status = 0 | 1 | 2;
var FinishUploadRepoResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
};
export type StartUpdateRepoResponse_Status = 0 | 1 | 2 | 3 | 4;
var StartUpdateRepoResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "NOT_FOUND": 3;
  "ALREADY_SYNCING": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "NOT_FOUND";
  4: "ALREADY_SYNCING";
};
export type UpdateFileResponse_Status = 0 | 1 | 2 | 3 | 4;
var UpdateFileResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "EXPECTED_FAILURE": 3;
  "QUEUE_BACKED_UP": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "EXPECTED_FAILURE";
  4: "QUEUE_BACKED_UP";
};
export type FinishUpdateRepoResponse_Status = 0 | 1 | 2;
var FinishUpdateRepoResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
};
export type UnsubscribeRepositoryResponse_Status = 0 | 1 | 2 | 3;
var UnsubscribeRepositoryResponse_Status: {
  "UNSPECIFIED": 0;
  "NOT_FOUND": 1;
  "NOT_SUBSCRIBED": 2;
  "SUCCESS": 3;
  0: "UNSPECIFIED";
  1: "NOT_FOUND";
  2: "NOT_SUBSCRIBED";
  3: "SUCCESS";
};
export type LogoutResponse_Status = 0 | 1 | 2 | 3;
var LogoutResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "NOT_LOGGED_IN": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "NOT_LOGGED_IN";
};
export type RemoveRepositoryResponse_Status = 0 | 1 | 2 | 3 | 4;
var RemoveRepositoryResponse_Status: {
  "UNSPECIFIED": 0;
  "NOT_FOUND": 1;
  "NOT_AUTHORIZED": 2;
  "STARTED": 3;
  "SUCCESS": 4;
  0: "UNSPECIFIED";
  1: "NOT_FOUND";
  2: "NOT_AUTHORIZED";
  3: "STARTED";
  4: "SUCCESS";
};
export type SubscribeRepositoryResponse_Status = 0 | 1 | 2 | 3 | 4;
var SubscribeRepositoryResponse_Status: {
  "UNSPECIFIED": 0;
  "NOT_FOUND": 1;
  "NOT_AUTHORIZED": 2;
  "ALREADY_SUBSCRIBED": 3;
  "SUCCESS": 4;
  0: "UNSPECIFIED";
  1: "NOT_FOUND";
  2: "NOT_AUTHORIZED";
  3: "ALREADY_SUBSCRIBED";
  4: "SUCCESS";
};
export type PollLoginResponse_Status = 0 | 1 | 2 | 3;
var PollLoginResponse_Status: {
  "UNSPECIFIED": 0;
  "LOGGED_IN": 1;
  "FAILURE": 2;
  "CHECKING": 3;
  0: "UNSPECIFIED";
  1: "LOGGED_IN";
  2: "FAILURE";
  3: "CHECKING";
};
export type UpgradeScopeResponse_Status = 0 | 1 | 2;
var UpgradeScopeResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
};
export type UploadRepositoryResponse_Status = 0 | 1 | 2 | 3 | 4;
var UploadRepositoryResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "AUTH_TOKEN_BAD_PERMISSIONS": 3;
  "ALREADY_EXISTS": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "AUTH_TOKEN_BAD_PERMISSIONS";
  4: "ALREADY_EXISTS";
};
export type GetCopyStatusResponse_Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
var GetCopyStatusResponse_Phase: {
  "UNSPECIFIED": 0;
  "INITIALIZING": 1;
  "COPYING": 2;
  "COMPLETED": 3;
  "CREATING_SEARCH_FILTERS": 4;
  "COPYING_SEARCH_STATE": 5;
  "COPYING_TREE_STATE": 6;
  "SYNCING_COPY": 7;
  0: "UNSPECIFIED";
  1: "INITIALIZING";
  2: "COPYING";
  3: "COMPLETED";
  4: "CREATING_SEARCH_FILTERS";
  5: "COPYING_SEARCH_STATE";
  6: "COPYING_TREE_STATE";
  7: "SYNCING_COPY";
};
export type GetCopyStatusResponse_CompletedStatus = 0 | 1 | 2 | 3;
var GetCopyStatusResponse_CompletedStatus: {
  "UNSPECIFIED": 0;
  "UP_TO_DATE": 1;
  "OUT_OF_SYNC": 2;
  "FAILURE": 3;
  0: "UNSPECIFIED";
  1: "UP_TO_DATE";
  2: "OUT_OF_SYNC";
  3: "FAILURE";
};
export type RepoHistoryInitHandshakeResponse_Status = 0 | 1 | 2 | 3 | 4;
var RepoHistoryInitHandshakeResponse_Status: {
  "UNSPECIFIED": 0;
  "FAILURE": 1;
  "SUCCESS": 2;
  "TEST_CANDIDATES": 3;
  "NO_INDEXING": 4;
  0: "UNSPECIFIED";
  1: "FAILURE";
  2: "SUCCESS";
  3: "TEST_CANDIDATES";
  4: "NO_INDEXING";
};
export type RepoHistorySyncOneResponse_Status = 0 | 1 | 2 | 3 | 4;
var RepoHistorySyncOneResponse_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "PARTIAL_SUCCESS": 3;
  "NOT_INDEXING": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "PARTIAL_SUCCESS";
  4: "NOT_INDEXING";
};
export type RepoHistorySyncCompleteRequest_Status = 0 | 1 | 2 | 3 | 4;
var RepoHistorySyncCompleteRequest_Status: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "FAILURE": 2;
  "TOTAL_FAILURE": 3;
  "INTERRUPTED": 4;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "FAILURE";
  3: "TOTAL_FAILURE";
  4: "INTERRUPTED";
};
export type RemoveRepoHistoryResponse_Status = 0 | 1 | 2 | 3 | 4;
var RemoveRepoHistoryResponse_Status: {
  "UNSPECIFIED": 0;
  "NOT_FOUND": 1;
  "NOT_AUTHORIZED": 2;
  "PARTIAL_SUCCESS": 3;
  "SUCCESS": 4;
  0: "UNSPECIFIED";
  1: "NOT_FOUND";
  2: "NOT_AUTHORIZED";
  3: "PARTIAL_SUCCESS";
  4: "SUCCESS";
};
export type GetPRIndexingStatusResponse_Status = 0 | 1 | 2 | 3 | 4;
var GetPRIndexingStatusResponse_Status: {
  "UNSPECIFIED": 0;
  "EMPTY": 1;
  "SYNCING": 2;
  "SYNCED": 3;
  "PARTIAL": 4;
  0: "UNSPECIFIED";
  1: "EMPTY";
  2: "SYNCING";
  3: "SYNCED";
  4: "PARTIAL";
};
(function(ChunkingStrategy2) {
  ChunkingStrategy2[ChunkingStrategy2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ChunkingStrategy2[ChunkingStrategy2["DEFAULT"] = 1] = "DEFAULT";
})(ChunkingStrategy! || (ChunkingStrategy = {} as typeof ChunkingStrategy));
proto3.util.setEnumType(ChunkingStrategy, "aiserver.v1.ChunkingStrategy", [
  { no: 0, name: "CHUNKING_STRATEGY_UNSPECIFIED" },
  { no: 1, name: "CHUNKING_STRATEGY_DEFAULT" }
]);
(function(SimilarityMetricType2) {
  SimilarityMetricType2[SimilarityMetricType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SimilarityMetricType2[SimilarityMetricType2["SIMHASH"] = 1] = "SIMHASH";
})(SimilarityMetricType! || (SimilarityMetricType = {} as typeof SimilarityMetricType));
proto3.util.setEnumType(SimilarityMetricType, "aiserver.v1.SimilarityMetricType", [
  { no: 0, name: "SIMILARITY_METRIC_TYPE_UNSPECIFIED" },
  { no: 1, name: "SIMILARITY_METRIC_TYPE_SIMHASH" }
]);
(function(PathKeyHashType2) {
  PathKeyHashType2[PathKeyHashType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PathKeyHashType2[PathKeyHashType2["SHA256"] = 1] = "SHA256";
})(PathKeyHashType! || (PathKeyHashType = {} as typeof PathKeyHashType));
proto3.util.setEnumType(PathKeyHashType, "aiserver.v1.PathKeyHashType", [
  { no: 0, name: "PATH_KEY_HASH_TYPE_UNSPECIFIED" },
  { no: 1, name: "PATH_KEY_HASH_TYPE_SHA256" }
]);
(function(RerankerAlgorithm2) {
  RerankerAlgorithm2[RerankerAlgorithm2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RerankerAlgorithm2[RerankerAlgorithm2["LULEA"] = 1] = "LULEA";
  RerankerAlgorithm2[RerankerAlgorithm2["UMEA"] = 2] = "UMEA";
  RerankerAlgorithm2[RerankerAlgorithm2["NONE"] = 3] = "NONE";
  RerankerAlgorithm2[RerankerAlgorithm2["LLAMA"] = 4] = "LLAMA";
  RerankerAlgorithm2[RerankerAlgorithm2["STARCODER_V1"] = 5] = "STARCODER_V1";
  RerankerAlgorithm2[RerankerAlgorithm2["GPT_3_5_LOGPROBS"] = 6] = "GPT_3_5_LOGPROBS";
  RerankerAlgorithm2[RerankerAlgorithm2["LULEA_HAIKU"] = 7] = "LULEA_HAIKU";
  RerankerAlgorithm2[RerankerAlgorithm2["COHERE"] = 8] = "COHERE";
  RerankerAlgorithm2[RerankerAlgorithm2["VOYAGE"] = 9] = "VOYAGE";
  RerankerAlgorithm2[RerankerAlgorithm2["VOYAGE_EMBEDS"] = 10] = "VOYAGE_EMBEDS";
  RerankerAlgorithm2[RerankerAlgorithm2["IDENTITY"] = 11] = "IDENTITY";
  RerankerAlgorithm2[RerankerAlgorithm2["ADA_EMBEDS"] = 12] = "ADA_EMBEDS";
})(RerankerAlgorithm! || (RerankerAlgorithm = {} as typeof RerankerAlgorithm));
proto3.util.setEnumType(RerankerAlgorithm, "aiserver.v1.RerankerAlgorithm", [
  { no: 0, name: "RERANKER_ALGORITHM_UNSPECIFIED" },
  { no: 1, name: "RERANKER_ALGORITHM_LULEA" },
  { no: 2, name: "RERANKER_ALGORITHM_UMEA" },
  { no: 3, name: "RERANKER_ALGORITHM_NONE" },
  { no: 4, name: "RERANKER_ALGORITHM_LLAMA" },
  { no: 5, name: "RERANKER_ALGORITHM_STARCODER_V1" },
  { no: 6, name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS" },
  { no: 7, name: "RERANKER_ALGORITHM_LULEA_HAIKU" },
  { no: 8, name: "RERANKER_ALGORITHM_COHERE" },
  { no: 9, name: "RERANKER_ALGORITHM_VOYAGE" },
  { no: 10, name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS" },
  { no: 11, name: "RERANKER_ALGORITHM_IDENTITY" },
  { no: 12, name: "RERANKER_ALGORITHM_ADA_EMBEDS" }
]);
(function(DatabaseProvider2) {
  DatabaseProvider2[DatabaseProvider2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DatabaseProvider2[DatabaseProvider2["AURORA"] = 1] = "AURORA";
  DatabaseProvider2[DatabaseProvider2["PLANETSCALE"] = 2] = "PLANETSCALE";
})(DatabaseProvider! || (DatabaseProvider = {} as typeof DatabaseProvider));
proto3.util.setEnumType(DatabaseProvider, "aiserver.v1.DatabaseProvider", [
  { no: 0, name: "DATABASE_PROVIDER_UNSPECIFIED" },
  { no: 1, name: "DATABASE_PROVIDER_AURORA" },
  { no: 2, name: "DATABASE_PROVIDER_PLANETSCALE" }
]);
(function(RechunkerChoice2) {
  RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_UNSPECIFIED"] = 0] = "RECHUNKER_CHOICE_UNSPECIFIED";
  RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_IDENTITY"] = 1] = "RECHUNKER_CHOICE_IDENTITY";
  RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_600_TOKS"] = 2] = "RECHUNKER_CHOICE_600_TOKS";
  RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_2400_TOKS"] = 3] = "RECHUNKER_CHOICE_2400_TOKS";
  RechunkerChoice2[RechunkerChoice2["RECHUNKER_CHOICE_4000_TOKS"] = 4] = "RECHUNKER_CHOICE_4000_TOKS";
})(RechunkerChoice! || (RechunkerChoice = {} as typeof RechunkerChoice));
proto3.util.setEnumType(RechunkerChoice, "aiserver.v1.RechunkerChoice", [
  { no: 0, name: "RECHUNKER_CHOICE_UNSPECIFIED" },
  { no: 1, name: "RECHUNKER_CHOICE_IDENTITY" },
  { no: 2, name: "RECHUNKER_CHOICE_600_TOKS" },
  { no: 3, name: "RECHUNKER_CHOICE_2400_TOKS" },
  { no: 4, name: "RECHUNKER_CHOICE_4000_TOKS" }
]);
var GetHighLevelFolderDescriptionRequest$Runtime = (() => class _GetHighLevelFolderDescriptionRequest extends Message<_GetHighLevelFolderDescriptionRequest> {
  declare readmes: GetHighLevelFolderDescriptionRequest_Readme[];
  declare topLevelRelativeWorkspacePaths: string[];
  declare workspaceRootPath: string;
  constructor(data?: PartialMessage<_GetHighLevelFolderDescriptionRequest>) {
    super();
    this.readmes = [];
    this.topLevelRelativeWorkspacePaths = [];
    this.workspaceRootPath = "";
    proto3.util.initPartial(data, this as _GetHighLevelFolderDescriptionRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetHighLevelFolderDescriptionRequest {
    return new _GetHighLevelFolderDescriptionRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionRequest {
    return new _GetHighLevelFolderDescriptionRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionRequest {
    return new _GetHighLevelFolderDescriptionRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetHighLevelFolderDescriptionRequest | PlainMessage<_GetHighLevelFolderDescriptionRequest> | undefined | null, b2: _GetHighLevelFolderDescriptionRequest | PlainMessage<_GetHighLevelFolderDescriptionRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetHighLevelFolderDescriptionRequest as unknown as MessageType<_GetHighLevelFolderDescriptionRequest>, a, b2);
  }
})();
export type GetHighLevelFolderDescriptionRequest = InstanceType<typeof GetHighLevelFolderDescriptionRequest$Runtime>;
var GetHighLevelFolderDescriptionRequest: MessageType<GetHighLevelFolderDescriptionRequest> = GetHighLevelFolderDescriptionRequest$Runtime as unknown as MessageType<GetHighLevelFolderDescriptionRequest>;
(GetHighLevelFolderDescriptionRequest as MutableMessageType<GetHighLevelFolderDescriptionRequest>).runtime = proto3;
(GetHighLevelFolderDescriptionRequest as MutableMessageType<GetHighLevelFolderDescriptionRequest>).typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest";
(GetHighLevelFolderDescriptionRequest as MutableMessageType<GetHighLevelFolderDescriptionRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "readmes", kind: "message", T: GetHighLevelFolderDescriptionRequest_Readme, repeated: true },
  { no: 2, name: "top_level_relative_workspace_paths", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "workspace_root_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetHighLevelFolderDescriptionRequest_Readme$Runtime = (() => class _GetHighLevelFolderDescriptionRequest_Readme extends Message<_GetHighLevelFolderDescriptionRequest_Readme> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  constructor(data?: PartialMessage<_GetHighLevelFolderDescriptionRequest_Readme>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    proto3.util.initPartial(data, this as _GetHighLevelFolderDescriptionRequest_Readme);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetHighLevelFolderDescriptionRequest_Readme {
    return new _GetHighLevelFolderDescriptionRequest_Readme().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionRequest_Readme {
    return new _GetHighLevelFolderDescriptionRequest_Readme().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionRequest_Readme {
    return new _GetHighLevelFolderDescriptionRequest_Readme().fromJsonString(jsonString, options);
  }
  static equals(a: _GetHighLevelFolderDescriptionRequest_Readme | PlainMessage<_GetHighLevelFolderDescriptionRequest_Readme> | undefined | null, b2: _GetHighLevelFolderDescriptionRequest_Readme | PlainMessage<_GetHighLevelFolderDescriptionRequest_Readme> | undefined | null): boolean {
    return proto3.util.equals(_GetHighLevelFolderDescriptionRequest_Readme as unknown as MessageType<_GetHighLevelFolderDescriptionRequest_Readme>, a, b2);
  }
})();
export type GetHighLevelFolderDescriptionRequest_Readme = InstanceType<typeof GetHighLevelFolderDescriptionRequest_Readme$Runtime>;
var GetHighLevelFolderDescriptionRequest_Readme: MessageType<GetHighLevelFolderDescriptionRequest_Readme> = GetHighLevelFolderDescriptionRequest_Readme$Runtime as unknown as MessageType<GetHighLevelFolderDescriptionRequest_Readme>;
(GetHighLevelFolderDescriptionRequest_Readme as MutableMessageType<GetHighLevelFolderDescriptionRequest_Readme>).runtime = proto3;
(GetHighLevelFolderDescriptionRequest_Readme as MutableMessageType<GetHighLevelFolderDescriptionRequest_Readme>).typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme";
(GetHighLevelFolderDescriptionRequest_Readme as MutableMessageType<GetHighLevelFolderDescriptionRequest_Readme>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetHighLevelFolderDescriptionResponse$Runtime = (() => class _GetHighLevelFolderDescriptionResponse extends Message<_GetHighLevelFolderDescriptionResponse> {
  declare description: string;
  constructor(data?: PartialMessage<_GetHighLevelFolderDescriptionResponse>) {
    super();
    this.description = "";
    proto3.util.initPartial(data, this as _GetHighLevelFolderDescriptionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetHighLevelFolderDescriptionResponse {
    return new _GetHighLevelFolderDescriptionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionResponse {
    return new _GetHighLevelFolderDescriptionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetHighLevelFolderDescriptionResponse {
    return new _GetHighLevelFolderDescriptionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetHighLevelFolderDescriptionResponse | PlainMessage<_GetHighLevelFolderDescriptionResponse> | undefined | null, b2: _GetHighLevelFolderDescriptionResponse | PlainMessage<_GetHighLevelFolderDescriptionResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetHighLevelFolderDescriptionResponse as unknown as MessageType<_GetHighLevelFolderDescriptionResponse>, a, b2);
  }
})();
export type GetHighLevelFolderDescriptionResponse = InstanceType<typeof GetHighLevelFolderDescriptionResponse$Runtime>;
var GetHighLevelFolderDescriptionResponse: MessageType<GetHighLevelFolderDescriptionResponse> = GetHighLevelFolderDescriptionResponse$Runtime as unknown as MessageType<GetHighLevelFolderDescriptionResponse>;
(GetHighLevelFolderDescriptionResponse as MutableMessageType<GetHighLevelFolderDescriptionResponse>).runtime = proto3;
(GetHighLevelFolderDescriptionResponse as MutableMessageType<GetHighLevelFolderDescriptionResponse>).typeName = "aiserver.v1.GetHighLevelFolderDescriptionResponse";
(GetHighLevelFolderDescriptionResponse as MutableMessageType<GetHighLevelFolderDescriptionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EnsureIndexCreatedRequest$Runtime = (() => class _EnsureIndexCreatedRequest extends Message<_EnsureIndexCreatedRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_EnsureIndexCreatedRequest>) {
    super();
    proto3.util.initPartial(data, this as _EnsureIndexCreatedRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnsureIndexCreatedRequest {
    return new _EnsureIndexCreatedRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnsureIndexCreatedRequest {
    return new _EnsureIndexCreatedRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnsureIndexCreatedRequest {
    return new _EnsureIndexCreatedRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _EnsureIndexCreatedRequest | PlainMessage<_EnsureIndexCreatedRequest> | undefined | null, b2: _EnsureIndexCreatedRequest | PlainMessage<_EnsureIndexCreatedRequest> | undefined | null): boolean {
    return proto3.util.equals(_EnsureIndexCreatedRequest as unknown as MessageType<_EnsureIndexCreatedRequest>, a, b2);
  }
})();
export type EnsureIndexCreatedRequest = InstanceType<typeof EnsureIndexCreatedRequest$Runtime>;
var EnsureIndexCreatedRequest: MessageType<EnsureIndexCreatedRequest> = EnsureIndexCreatedRequest$Runtime as unknown as MessageType<EnsureIndexCreatedRequest>;
(EnsureIndexCreatedRequest as MutableMessageType<EnsureIndexCreatedRequest>).runtime = proto3;
(EnsureIndexCreatedRequest as MutableMessageType<EnsureIndexCreatedRequest>).typeName = "aiserver.v1.EnsureIndexCreatedRequest";
(EnsureIndexCreatedRequest as MutableMessageType<EnsureIndexCreatedRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var EnsureIndexCreatedResponse$Runtime = (() => class _EnsureIndexCreatedResponse extends Message<_EnsureIndexCreatedResponse> {
  constructor(data?: PartialMessage<_EnsureIndexCreatedResponse>) {
    super();
    proto3.util.initPartial(data, this as _EnsureIndexCreatedResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EnsureIndexCreatedResponse {
    return new _EnsureIndexCreatedResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EnsureIndexCreatedResponse {
    return new _EnsureIndexCreatedResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EnsureIndexCreatedResponse {
    return new _EnsureIndexCreatedResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _EnsureIndexCreatedResponse | PlainMessage<_EnsureIndexCreatedResponse> | undefined | null, b2: _EnsureIndexCreatedResponse | PlainMessage<_EnsureIndexCreatedResponse> | undefined | null): boolean {
    return proto3.util.equals(_EnsureIndexCreatedResponse as unknown as MessageType<_EnsureIndexCreatedResponse>, a, b2);
  }
})();
export type EnsureIndexCreatedResponse = InstanceType<typeof EnsureIndexCreatedResponse$Runtime>;
var EnsureIndexCreatedResponse: MessageType<EnsureIndexCreatedResponse> = EnsureIndexCreatedResponse$Runtime as unknown as MessageType<EnsureIndexCreatedResponse>;
(EnsureIndexCreatedResponse as MutableMessageType<EnsureIndexCreatedResponse>).runtime = proto3;
(EnsureIndexCreatedResponse as MutableMessageType<EnsureIndexCreatedResponse>).typeName = "aiserver.v1.EnsureIndexCreatedResponse";
(EnsureIndexCreatedResponse as MutableMessageType<EnsureIndexCreatedResponse>).fields = proto3.util.newFieldList(() => []);
var PartialPathItem$Runtime = (() => class _PartialPathItem extends Message<_PartialPathItem> {
  declare relativeWorkspacePath: string;
  declare hashOfNode: string;
  constructor(data?: PartialMessage<_PartialPathItem>) {
    super();
    this.relativeWorkspacePath = "";
    this.hashOfNode = "";
    proto3.util.initPartial(data, this as _PartialPathItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PartialPathItem {
    return new _PartialPathItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PartialPathItem {
    return new _PartialPathItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PartialPathItem {
    return new _PartialPathItem().fromJsonString(jsonString, options);
  }
  static equals(a: _PartialPathItem | PlainMessage<_PartialPathItem> | undefined | null, b2: _PartialPathItem | PlainMessage<_PartialPathItem> | undefined | null): boolean {
    return proto3.util.equals(_PartialPathItem as unknown as MessageType<_PartialPathItem>, a, b2);
  }
})();
export type PartialPathItem = InstanceType<typeof PartialPathItem$Runtime>;
var PartialPathItem: MessageType<PartialPathItem> = PartialPathItem$Runtime as unknown as MessageType<PartialPathItem>;
(PartialPathItem as MutableMessageType<PartialPathItem>).runtime = proto3;
(PartialPathItem as MutableMessageType<PartialPathItem>).typeName = "aiserver.v1.PartialPathItem";
(PartialPathItem as MutableMessageType<PartialPathItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "hash_of_node",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FastRepoInitHandshakeRequest$Runtime = (() => class _FastRepoInitHandshakeRequest extends Message<_FastRepoInitHandshakeRequest> {
  declare repository?: RepositoryInfo;
  declare rootHash: string;
  declare potentialLegacyRepoName: string;
  constructor(data?: PartialMessage<_FastRepoInitHandshakeRequest>) {
    super();
    this.rootHash = "";
    this.potentialLegacyRepoName = "";
    proto3.util.initPartial(data, this as _FastRepoInitHandshakeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoInitHandshakeRequest {
    return new _FastRepoInitHandshakeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeRequest {
    return new _FastRepoInitHandshakeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeRequest {
    return new _FastRepoInitHandshakeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoInitHandshakeRequest | PlainMessage<_FastRepoInitHandshakeRequest> | undefined | null, b2: _FastRepoInitHandshakeRequest | PlainMessage<_FastRepoInitHandshakeRequest> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoInitHandshakeRequest as unknown as MessageType<_FastRepoInitHandshakeRequest>, a, b2);
  }
})();
export type FastRepoInitHandshakeRequest = InstanceType<typeof FastRepoInitHandshakeRequest$Runtime>;
var FastRepoInitHandshakeRequest: MessageType<FastRepoInitHandshakeRequest> = FastRepoInitHandshakeRequest$Runtime as unknown as MessageType<FastRepoInitHandshakeRequest>;
(FastRepoInitHandshakeRequest as MutableMessageType<FastRepoInitHandshakeRequest>).runtime = proto3;
(FastRepoInitHandshakeRequest as MutableMessageType<FastRepoInitHandshakeRequest>).typeName = "aiserver.v1.FastRepoInitHandshakeRequest";
(FastRepoInitHandshakeRequest as MutableMessageType<FastRepoInitHandshakeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "root_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "potential_legacy_repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FastRepoInitHandshakeResponse$Runtime = (() => class _FastRepoInitHandshakeResponse extends Message<_FastRepoInitHandshakeResponse> {
  declare status: FastRepoInitHandshakeResponse_Status;
  declare repoName: string;
  constructor(data?: PartialMessage<_FastRepoInitHandshakeResponse>) {
    super();
    this.status = FastRepoInitHandshakeResponse_Status.UNSPECIFIED;
    this.repoName = "";
    proto3.util.initPartial(data, this as _FastRepoInitHandshakeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoInitHandshakeResponse {
    return new _FastRepoInitHandshakeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeResponse {
    return new _FastRepoInitHandshakeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeResponse {
    return new _FastRepoInitHandshakeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoInitHandshakeResponse | PlainMessage<_FastRepoInitHandshakeResponse> | undefined | null, b2: _FastRepoInitHandshakeResponse | PlainMessage<_FastRepoInitHandshakeResponse> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoInitHandshakeResponse as unknown as MessageType<_FastRepoInitHandshakeResponse>, a, b2);
  }
})();
export type FastRepoInitHandshakeResponse = InstanceType<typeof FastRepoInitHandshakeResponse$Runtime>;
var FastRepoInitHandshakeResponse: MessageType<FastRepoInitHandshakeResponse> = FastRepoInitHandshakeResponse$Runtime as unknown as MessageType<FastRepoInitHandshakeResponse>;
(FastRepoInitHandshakeResponse as MutableMessageType<FastRepoInitHandshakeResponse>).runtime = proto3;
(FastRepoInitHandshakeResponse as MutableMessageType<FastRepoInitHandshakeResponse>).typeName = "aiserver.v1.FastRepoInitHandshakeResponse";
(FastRepoInitHandshakeResponse as MutableMessageType<FastRepoInitHandshakeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FastRepoInitHandshakeResponse_Status) },
  {
    no: 2,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(FastRepoInitHandshakeResponse_Status2) {
  FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
  FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
  FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["FAILURE"] = 3] = "FAILURE";
  FastRepoInitHandshakeResponse_Status2[FastRepoInitHandshakeResponse_Status2["EMPTY"] = 4] = "EMPTY";
})(FastRepoInitHandshakeResponse_Status! || (FastRepoInitHandshakeResponse_Status = {} as typeof FastRepoInitHandshakeResponse_Status));
proto3.util.setEnumType(FastRepoInitHandshakeResponse_Status, "aiserver.v1.FastRepoInitHandshakeResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_UP_TO_DATE" },
  { no: 2, name: "STATUS_OUT_OF_SYNC" },
  { no: 3, name: "STATUS_FAILURE" },
  { no: 4, name: "STATUS_EMPTY" }
]);
var LocalCodebaseFileInfo$Runtime = (() => class _LocalCodebaseFileInfo extends Message<_LocalCodebaseFileInfo> {
  declare encryptedRelativePath: string;
  declare hash: string;
  declare children: _LocalCodebaseFileInfo[];
  declare separator?: string;
  constructor(data?: PartialMessage<_LocalCodebaseFileInfo>) {
    super();
    this.encryptedRelativePath = "";
    this.hash = "";
    this.children = [];
    proto3.util.initPartial(data, this as _LocalCodebaseFileInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LocalCodebaseFileInfo {
    return new _LocalCodebaseFileInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LocalCodebaseFileInfo {
    return new _LocalCodebaseFileInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LocalCodebaseFileInfo {
    return new _LocalCodebaseFileInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _LocalCodebaseFileInfo | PlainMessage<_LocalCodebaseFileInfo> | undefined | null, b2: _LocalCodebaseFileInfo | PlainMessage<_LocalCodebaseFileInfo> | undefined | null): boolean {
    return proto3.util.equals(_LocalCodebaseFileInfo as unknown as MessageType<_LocalCodebaseFileInfo>, a, b2);
  }
})();
export type LocalCodebaseFileInfo = InstanceType<typeof LocalCodebaseFileInfo$Runtime>;
var LocalCodebaseFileInfo: MessageType<LocalCodebaseFileInfo> = LocalCodebaseFileInfo$Runtime as unknown as MessageType<LocalCodebaseFileInfo>;
(LocalCodebaseFileInfo as MutableMessageType<LocalCodebaseFileInfo>).runtime = proto3;
(LocalCodebaseFileInfo as MutableMessageType<LocalCodebaseFileInfo>).typeName = "aiserver.v1.LocalCodebaseFileInfo";
(LocalCodebaseFileInfo as MutableMessageType<LocalCodebaseFileInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "encrypted_relative_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "children", kind: "message", T: LocalCodebaseFileInfo, repeated: true },
  { no: 4, name: "separator", kind: "scalar", T: 9, opt: true }
]);
var FastRepoInitHandshakeV2Request$Runtime = (() => class _FastRepoInitHandshakeV2Request extends Message<_FastRepoInitHandshakeV2Request> {
  declare repository?: RepositoryInfo;
  declare rootHash: string;
  declare similarityMetricType: SimilarityMetricType;
  declare similarityMetric: number[];
  declare pathKeyHash: string;
  declare pathKeyHashType: PathKeyHashType;
  declare doCopy: boolean;
  declare pathKey: string;
  declare localCodebaseRootInfo?: LocalCodebaseFileInfo;
  declare returnAfterBackgroundCopyStarted: boolean;
  constructor(data?: PartialMessage<_FastRepoInitHandshakeV2Request>) {
    super();
    this.rootHash = "";
    this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
    this.similarityMetric = [];
    this.pathKeyHash = "";
    this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
    this.doCopy = false;
    this.pathKey = "";
    this.returnAfterBackgroundCopyStarted = false;
    proto3.util.initPartial(data, this as _FastRepoInitHandshakeV2Request);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoInitHandshakeV2Request {
    return new _FastRepoInitHandshakeV2Request().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeV2Request {
    return new _FastRepoInitHandshakeV2Request().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeV2Request {
    return new _FastRepoInitHandshakeV2Request().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoInitHandshakeV2Request | PlainMessage<_FastRepoInitHandshakeV2Request> | undefined | null, b2: _FastRepoInitHandshakeV2Request | PlainMessage<_FastRepoInitHandshakeV2Request> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoInitHandshakeV2Request as unknown as MessageType<_FastRepoInitHandshakeV2Request>, a, b2);
  }
})();
export type FastRepoInitHandshakeV2Request = InstanceType<typeof FastRepoInitHandshakeV2Request$Runtime>;
var FastRepoInitHandshakeV2Request: MessageType<FastRepoInitHandshakeV2Request> = FastRepoInitHandshakeV2Request$Runtime as unknown as MessageType<FastRepoInitHandshakeV2Request>;
(FastRepoInitHandshakeV2Request as MutableMessageType<FastRepoInitHandshakeV2Request>).runtime = proto3;
(FastRepoInitHandshakeV2Request as MutableMessageType<FastRepoInitHandshakeV2Request>).typeName = "aiserver.v1.FastRepoInitHandshakeV2Request";
(FastRepoInitHandshakeV2Request as MutableMessageType<FastRepoInitHandshakeV2Request>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "root_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "similarity_metric_type", kind: "enum", T: proto3.getEnumType(SimilarityMetricType) },
  { no: 4, name: "similarity_metric", kind: "scalar", T: 2, repeated: true },
  {
    no: 5,
    name: "path_key_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "path_key_hash_type", kind: "enum", T: proto3.getEnumType(PathKeyHashType) },
  {
    no: 7,
    name: "do_copy",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "path_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "local_codebase_root_info", kind: "message", T: LocalCodebaseFileInfo },
  {
    no: 10,
    name: "return_after_background_copy_started",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var QueryOnlyRepositoryInfo$Runtime = (() => class _QueryOnlyRepositoryInfo extends Message<_QueryOnlyRepositoryInfo> {
  declare repository?: RepositoryInfo;
  declare queryOnlyRepoAccess?: QueryOnlyRepoAccess;
  constructor(data?: PartialMessage<_QueryOnlyRepositoryInfo>) {
    super();
    proto3.util.initPartial(data, this as _QueryOnlyRepositoryInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _QueryOnlyRepositoryInfo {
    return new _QueryOnlyRepositoryInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _QueryOnlyRepositoryInfo {
    return new _QueryOnlyRepositoryInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _QueryOnlyRepositoryInfo {
    return new _QueryOnlyRepositoryInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _QueryOnlyRepositoryInfo | PlainMessage<_QueryOnlyRepositoryInfo> | undefined | null, b2: _QueryOnlyRepositoryInfo | PlainMessage<_QueryOnlyRepositoryInfo> | undefined | null): boolean {
    return proto3.util.equals(_QueryOnlyRepositoryInfo as unknown as MessageType<_QueryOnlyRepositoryInfo>, a, b2);
  }
})();
export type QueryOnlyRepositoryInfo = InstanceType<typeof QueryOnlyRepositoryInfo$Runtime>;
var QueryOnlyRepositoryInfo: MessageType<QueryOnlyRepositoryInfo> = QueryOnlyRepositoryInfo$Runtime as unknown as MessageType<QueryOnlyRepositoryInfo>;
(QueryOnlyRepositoryInfo as MutableMessageType<QueryOnlyRepositoryInfo>).runtime = proto3;
(QueryOnlyRepositoryInfo as MutableMessageType<QueryOnlyRepositoryInfo>).typeName = "aiserver.v1.QueryOnlyRepositoryInfo";
(QueryOnlyRepositoryInfo as MutableMessageType<QueryOnlyRepositoryInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  { no: 2, name: "query_only_repo_access", kind: "message", T: QueryOnlyRepoAccess }
]);
var RepositoryCodebaseInfo$Runtime = (() => class _RepositoryCodebaseInfo extends Message<_RepositoryCodebaseInfo> {
  declare codebaseId: string;
  declare status: RepositoryCodebaseInfo_Status;
  declare queryOnlySimilarRepo?: QueryOnlyRepositoryInfo;
  declare copyTaskHandle: string;
  constructor(data?: PartialMessage<_RepositoryCodebaseInfo>) {
    super();
    this.codebaseId = "";
    this.status = RepositoryCodebaseInfo_Status.UNSPECIFIED;
    this.copyTaskHandle = "";
    proto3.util.initPartial(data, this as _RepositoryCodebaseInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryCodebaseInfo {
    return new _RepositoryCodebaseInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryCodebaseInfo {
    return new _RepositoryCodebaseInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryCodebaseInfo {
    return new _RepositoryCodebaseInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryCodebaseInfo | PlainMessage<_RepositoryCodebaseInfo> | undefined | null, b2: _RepositoryCodebaseInfo | PlainMessage<_RepositoryCodebaseInfo> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryCodebaseInfo as unknown as MessageType<_RepositoryCodebaseInfo>, a, b2);
  }
})();
export type RepositoryCodebaseInfo = InstanceType<typeof RepositoryCodebaseInfo$Runtime>;
var RepositoryCodebaseInfo: MessageType<RepositoryCodebaseInfo> = RepositoryCodebaseInfo$Runtime as unknown as MessageType<RepositoryCodebaseInfo>;
(RepositoryCodebaseInfo as MutableMessageType<RepositoryCodebaseInfo>).runtime = proto3;
(RepositoryCodebaseInfo as MutableMessageType<RepositoryCodebaseInfo>).typeName = "aiserver.v1.RepositoryCodebaseInfo";
(RepositoryCodebaseInfo as MutableMessageType<RepositoryCodebaseInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "codebase_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(RepositoryCodebaseInfo_Status) },
  { no: 3, name: "query_only_similar_repo", kind: "message", T: QueryOnlyRepositoryInfo },
  {
    no: 4,
    name: "copy_task_handle",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(RepositoryCodebaseInfo_Status2) {
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["EMPTY"] = 3] = "EMPTY";
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["EMPTY_WITH_COPY_AVAILABLE"] = 4] = "EMPTY_WITH_COPY_AVAILABLE";
  RepositoryCodebaseInfo_Status2[RepositoryCodebaseInfo_Status2["COPY_IN_PROGRESS"] = 5] = "COPY_IN_PROGRESS";
})(RepositoryCodebaseInfo_Status! || (RepositoryCodebaseInfo_Status = {} as typeof RepositoryCodebaseInfo_Status));
proto3.util.setEnumType(RepositoryCodebaseInfo_Status, "aiserver.v1.RepositoryCodebaseInfo.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_UP_TO_DATE" },
  { no: 2, name: "STATUS_OUT_OF_SYNC" },
  { no: 3, name: "STATUS_EMPTY" },
  { no: 4, name: "STATUS_EMPTY_WITH_COPY_AVAILABLE" },
  { no: 5, name: "STATUS_COPY_IN_PROGRESS" }
]);
var FastRepoInitHandshakeV2Response$Runtime = (() => class _FastRepoInitHandshakeV2Response extends Message<_FastRepoInitHandshakeV2Response> {
  declare status: FastRepoInitHandshakeV2Response_Status;
  declare codebases: RepositoryCodebaseInfo[];
  constructor(data?: PartialMessage<_FastRepoInitHandshakeV2Response>) {
    super();
    this.status = FastRepoInitHandshakeV2Response_Status.UNSPECIFIED;
    this.codebases = [];
    proto3.util.initPartial(data, this as _FastRepoInitHandshakeV2Response);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoInitHandshakeV2Response {
    return new _FastRepoInitHandshakeV2Response().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeV2Response {
    return new _FastRepoInitHandshakeV2Response().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoInitHandshakeV2Response {
    return new _FastRepoInitHandshakeV2Response().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoInitHandshakeV2Response | PlainMessage<_FastRepoInitHandshakeV2Response> | undefined | null, b2: _FastRepoInitHandshakeV2Response | PlainMessage<_FastRepoInitHandshakeV2Response> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoInitHandshakeV2Response as unknown as MessageType<_FastRepoInitHandshakeV2Response>, a, b2);
  }
})();
export type FastRepoInitHandshakeV2Response = InstanceType<typeof FastRepoInitHandshakeV2Response$Runtime>;
var FastRepoInitHandshakeV2Response: MessageType<FastRepoInitHandshakeV2Response> = FastRepoInitHandshakeV2Response$Runtime as unknown as MessageType<FastRepoInitHandshakeV2Response>;
(FastRepoInitHandshakeV2Response as MutableMessageType<FastRepoInitHandshakeV2Response>).runtime = proto3;
(FastRepoInitHandshakeV2Response as MutableMessageType<FastRepoInitHandshakeV2Response>).typeName = "aiserver.v1.FastRepoInitHandshakeV2Response";
(FastRepoInitHandshakeV2Response as MutableMessageType<FastRepoInitHandshakeV2Response>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FastRepoInitHandshakeV2Response_Status) },
  { no: 2, name: "codebases", kind: "message", T: RepositoryCodebaseInfo, repeated: true }
]);
(function(FastRepoInitHandshakeV2Response_Status2) {
  FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["FAILURE"] = 1] = "FAILURE";
  FastRepoInitHandshakeV2Response_Status2[FastRepoInitHandshakeV2Response_Status2["SUCCESS"] = 2] = "SUCCESS";
})(FastRepoInitHandshakeV2Response_Status! || (FastRepoInitHandshakeV2Response_Status = {} as typeof FastRepoInitHandshakeV2Response_Status));
proto3.util.setEnumType(FastRepoInitHandshakeV2Response_Status, "aiserver.v1.FastRepoInitHandshakeV2Response.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_FAILURE" },
  { no: 2, name: "STATUS_SUCCESS" }
]);
var RepositoryCodebaseSyncStatus$Runtime = (() => class _RepositoryCodebaseSyncStatus extends Message<_RepositoryCodebaseSyncStatus> {
  declare codebaseId: string;
  declare status: RepositoryCodebaseSyncStatus_Status;
  declare similarityMetricType: SimilarityMetricType;
  declare similarityMetric: number[];
  declare pathKeyHash: string;
  declare pathKeyHashType: PathKeyHashType;
  declare failedUploadCount: number;
  declare failedDeleteCount: number;
  declare totalUploadCount: number;
  declare totalDeleteCount: number;
  declare failedSubtreeCount: number;
  declare totalSubtreeCount: number;
  declare hitIterationLimit: boolean;
  constructor(data?: PartialMessage<_RepositoryCodebaseSyncStatus>) {
    super();
    this.codebaseId = "";
    this.status = RepositoryCodebaseSyncStatus_Status.UNSPECIFIED;
    this.similarityMetricType = SimilarityMetricType.UNSPECIFIED;
    this.similarityMetric = [];
    this.pathKeyHash = "";
    this.pathKeyHashType = PathKeyHashType.UNSPECIFIED;
    this.failedUploadCount = 0;
    this.failedDeleteCount = 0;
    this.totalUploadCount = 0;
    this.totalDeleteCount = 0;
    this.failedSubtreeCount = 0;
    this.totalSubtreeCount = 0;
    this.hitIterationLimit = false;
    proto3.util.initPartial(data, this as _RepositoryCodebaseSyncStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryCodebaseSyncStatus {
    return new _RepositoryCodebaseSyncStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryCodebaseSyncStatus {
    return new _RepositoryCodebaseSyncStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryCodebaseSyncStatus {
    return new _RepositoryCodebaseSyncStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryCodebaseSyncStatus | PlainMessage<_RepositoryCodebaseSyncStatus> | undefined | null, b2: _RepositoryCodebaseSyncStatus | PlainMessage<_RepositoryCodebaseSyncStatus> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryCodebaseSyncStatus as unknown as MessageType<_RepositoryCodebaseSyncStatus>, a, b2);
  }
})();
export type RepositoryCodebaseSyncStatus = InstanceType<typeof RepositoryCodebaseSyncStatus$Runtime>;
var RepositoryCodebaseSyncStatus: MessageType<RepositoryCodebaseSyncStatus> = RepositoryCodebaseSyncStatus$Runtime as unknown as MessageType<RepositoryCodebaseSyncStatus>;
(RepositoryCodebaseSyncStatus as MutableMessageType<RepositoryCodebaseSyncStatus>).runtime = proto3;
(RepositoryCodebaseSyncStatus as MutableMessageType<RepositoryCodebaseSyncStatus>).typeName = "aiserver.v1.RepositoryCodebaseSyncStatus";
(RepositoryCodebaseSyncStatus as MutableMessageType<RepositoryCodebaseSyncStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "codebase_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(RepositoryCodebaseSyncStatus_Status) },
  { no: 3, name: "similarity_metric_type", kind: "enum", T: proto3.getEnumType(SimilarityMetricType) },
  { no: 4, name: "similarity_metric", kind: "scalar", T: 2, repeated: true },
  {
    no: 5,
    name: "path_key_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "path_key_hash_type", kind: "enum", T: proto3.getEnumType(PathKeyHashType) },
  {
    no: 7,
    name: "failed_upload_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 8,
    name: "failed_delete_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 9,
    name: "total_upload_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 10,
    name: "total_delete_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 11,
    name: "failed_subtree_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 12,
    name: "total_subtree_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 13,
    name: "hit_iteration_limit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
(function(RepositoryCodebaseSyncStatus_Status2) {
  RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["SUCCESS"] = 1] = "SUCCESS";
  RepositoryCodebaseSyncStatus_Status2[RepositoryCodebaseSyncStatus_Status2["FAILURE"] = 2] = "FAILURE";
})(RepositoryCodebaseSyncStatus_Status! || (RepositoryCodebaseSyncStatus_Status = {} as typeof RepositoryCodebaseSyncStatus_Status));
proto3.util.setEnumType(RepositoryCodebaseSyncStatus_Status, "aiserver.v1.RepositoryCodebaseSyncStatus.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" }
]);
var FastRepoSyncCompleteRequest$Runtime = (() => class _FastRepoSyncCompleteRequest extends Message<_FastRepoSyncCompleteRequest> {
  declare codebases: RepositoryCodebaseSyncStatus[];
  constructor(data?: PartialMessage<_FastRepoSyncCompleteRequest>) {
    super();
    this.codebases = [];
    proto3.util.initPartial(data, this as _FastRepoSyncCompleteRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoSyncCompleteRequest {
    return new _FastRepoSyncCompleteRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoSyncCompleteRequest {
    return new _FastRepoSyncCompleteRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoSyncCompleteRequest {
    return new _FastRepoSyncCompleteRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoSyncCompleteRequest | PlainMessage<_FastRepoSyncCompleteRequest> | undefined | null, b2: _FastRepoSyncCompleteRequest | PlainMessage<_FastRepoSyncCompleteRequest> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoSyncCompleteRequest as unknown as MessageType<_FastRepoSyncCompleteRequest>, a, b2);
  }
})();
export type FastRepoSyncCompleteRequest = InstanceType<typeof FastRepoSyncCompleteRequest$Runtime>;
var FastRepoSyncCompleteRequest: MessageType<FastRepoSyncCompleteRequest> = FastRepoSyncCompleteRequest$Runtime as unknown as MessageType<FastRepoSyncCompleteRequest>;
(FastRepoSyncCompleteRequest as MutableMessageType<FastRepoSyncCompleteRequest>).runtime = proto3;
(FastRepoSyncCompleteRequest as MutableMessageType<FastRepoSyncCompleteRequest>).typeName = "aiserver.v1.FastRepoSyncCompleteRequest";
(FastRepoSyncCompleteRequest as MutableMessageType<FastRepoSyncCompleteRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "codebases", kind: "message", T: RepositoryCodebaseSyncStatus, repeated: true }
]);
var FastRepoSyncCompleteResponse$Runtime = (() => class _FastRepoSyncCompleteResponse extends Message<_FastRepoSyncCompleteResponse> {
  constructor(data?: PartialMessage<_FastRepoSyncCompleteResponse>) {
    super();
    proto3.util.initPartial(data, this as _FastRepoSyncCompleteResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastRepoSyncCompleteResponse {
    return new _FastRepoSyncCompleteResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastRepoSyncCompleteResponse {
    return new _FastRepoSyncCompleteResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastRepoSyncCompleteResponse {
    return new _FastRepoSyncCompleteResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FastRepoSyncCompleteResponse | PlainMessage<_FastRepoSyncCompleteResponse> | undefined | null, b2: _FastRepoSyncCompleteResponse | PlainMessage<_FastRepoSyncCompleteResponse> | undefined | null): boolean {
    return proto3.util.equals(_FastRepoSyncCompleteResponse as unknown as MessageType<_FastRepoSyncCompleteResponse>, a, b2);
  }
})();
export type FastRepoSyncCompleteResponse = InstanceType<typeof FastRepoSyncCompleteResponse$Runtime>;
var FastRepoSyncCompleteResponse: MessageType<FastRepoSyncCompleteResponse> = FastRepoSyncCompleteResponse$Runtime as unknown as MessageType<FastRepoSyncCompleteResponse>;
(FastRepoSyncCompleteResponse as MutableMessageType<FastRepoSyncCompleteResponse>).runtime = proto3;
(FastRepoSyncCompleteResponse as MutableMessageType<FastRepoSyncCompleteResponse>).typeName = "aiserver.v1.FastRepoSyncCompleteResponse";
(FastRepoSyncCompleteResponse as MutableMessageType<FastRepoSyncCompleteResponse>).fields = proto3.util.newFieldList(() => []);
var SyncMerkleSubtreeRequest$Runtime = (() => class _SyncMerkleSubtreeRequest extends Message<_SyncMerkleSubtreeRequest> {
  declare repository?: RepositoryInfo;
  declare localPartialPath?: PartialPathItem;
  constructor(data?: PartialMessage<_SyncMerkleSubtreeRequest>) {
    super();
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeRequest {
    return new _SyncMerkleSubtreeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeRequest {
    return new _SyncMerkleSubtreeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeRequest {
    return new _SyncMerkleSubtreeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeRequest | PlainMessage<_SyncMerkleSubtreeRequest> | undefined | null, b2: _SyncMerkleSubtreeRequest | PlainMessage<_SyncMerkleSubtreeRequest> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeRequest as unknown as MessageType<_SyncMerkleSubtreeRequest>, a, b2);
  }
})();
export type SyncMerkleSubtreeRequest = InstanceType<typeof SyncMerkleSubtreeRequest$Runtime>;
var SyncMerkleSubtreeRequest: MessageType<SyncMerkleSubtreeRequest> = SyncMerkleSubtreeRequest$Runtime as unknown as MessageType<SyncMerkleSubtreeRequest>;
(SyncMerkleSubtreeRequest as MutableMessageType<SyncMerkleSubtreeRequest>).runtime = proto3;
(SyncMerkleSubtreeRequest as MutableMessageType<SyncMerkleSubtreeRequest>).typeName = "aiserver.v1.SyncMerkleSubtreeRequest";
(SyncMerkleSubtreeRequest as MutableMessageType<SyncMerkleSubtreeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  { no: 2, name: "local_partial_path", kind: "message", T: PartialPathItem }
]);
var SyncMerkleSubtreeResponse$Runtime = (() => class _SyncMerkleSubtreeResponse extends Message<_SyncMerkleSubtreeResponse> {
  declare result: { case: "match"; value: boolean } | { case: "mismatch"; value: SyncMerkleSubtreeResponse_Mismatch } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SyncMerkleSubtreeResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeResponse {
    return new _SyncMerkleSubtreeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeResponse {
    return new _SyncMerkleSubtreeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeResponse {
    return new _SyncMerkleSubtreeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeResponse | PlainMessage<_SyncMerkleSubtreeResponse> | undefined | null, b2: _SyncMerkleSubtreeResponse | PlainMessage<_SyncMerkleSubtreeResponse> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeResponse as unknown as MessageType<_SyncMerkleSubtreeResponse>, a, b2);
  }
})();
export type SyncMerkleSubtreeResponse = InstanceType<typeof SyncMerkleSubtreeResponse$Runtime>;
var SyncMerkleSubtreeResponse: MessageType<SyncMerkleSubtreeResponse> = SyncMerkleSubtreeResponse$Runtime as unknown as MessageType<SyncMerkleSubtreeResponse>;
(SyncMerkleSubtreeResponse as MutableMessageType<SyncMerkleSubtreeResponse>).runtime = proto3;
(SyncMerkleSubtreeResponse as MutableMessageType<SyncMerkleSubtreeResponse>).typeName = "aiserver.v1.SyncMerkleSubtreeResponse";
(SyncMerkleSubtreeResponse as MutableMessageType<SyncMerkleSubtreeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "match", kind: "scalar", T: 8, oneof: "result" },
  { no: 2, name: "mismatch", kind: "message", T: SyncMerkleSubtreeResponse_Mismatch, oneof: "result" }
]);
var SyncMerkleSubtreeResponse_Mismatch$Runtime = (() => class _SyncMerkleSubtreeResponse_Mismatch extends Message<_SyncMerkleSubtreeResponse_Mismatch> {
  declare children: PartialPathItem[];
  constructor(data?: PartialMessage<_SyncMerkleSubtreeResponse_Mismatch>) {
    super();
    this.children = [];
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeResponse_Mismatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeResponse_Mismatch {
    return new _SyncMerkleSubtreeResponse_Mismatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeResponse_Mismatch {
    return new _SyncMerkleSubtreeResponse_Mismatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeResponse_Mismatch {
    return new _SyncMerkleSubtreeResponse_Mismatch().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeResponse_Mismatch | PlainMessage<_SyncMerkleSubtreeResponse_Mismatch> | undefined | null, b2: _SyncMerkleSubtreeResponse_Mismatch | PlainMessage<_SyncMerkleSubtreeResponse_Mismatch> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeResponse_Mismatch as unknown as MessageType<_SyncMerkleSubtreeResponse_Mismatch>, a, b2);
  }
})();
export type SyncMerkleSubtreeResponse_Mismatch = InstanceType<typeof SyncMerkleSubtreeResponse_Mismatch$Runtime>;
var SyncMerkleSubtreeResponse_Mismatch: MessageType<SyncMerkleSubtreeResponse_Mismatch> = SyncMerkleSubtreeResponse_Mismatch$Runtime as unknown as MessageType<SyncMerkleSubtreeResponse_Mismatch>;
(SyncMerkleSubtreeResponse_Mismatch as MutableMessageType<SyncMerkleSubtreeResponse_Mismatch>).runtime = proto3;
(SyncMerkleSubtreeResponse_Mismatch as MutableMessageType<SyncMerkleSubtreeResponse_Mismatch>).typeName = "aiserver.v1.SyncMerkleSubtreeResponse.Mismatch";
(SyncMerkleSubtreeResponse_Mismatch as MutableMessageType<SyncMerkleSubtreeResponse_Mismatch>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "children", kind: "message", T: PartialPathItem, repeated: true }
]);
var ClientRepositoryInfo$Runtime = (() => class _ClientRepositoryInfo extends Message<_ClientRepositoryInfo> {
  declare orthogonalTransformSeed: number;
  constructor(data?: PartialMessage<_ClientRepositoryInfo>) {
    super();
    this.orthogonalTransformSeed = 0;
    proto3.util.initPartial(data, this as _ClientRepositoryInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClientRepositoryInfo {
    return new _ClientRepositoryInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClientRepositoryInfo {
    return new _ClientRepositoryInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClientRepositoryInfo {
    return new _ClientRepositoryInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _ClientRepositoryInfo | PlainMessage<_ClientRepositoryInfo> | undefined | null, b2: _ClientRepositoryInfo | PlainMessage<_ClientRepositoryInfo> | undefined | null): boolean {
    return proto3.util.equals(_ClientRepositoryInfo as unknown as MessageType<_ClientRepositoryInfo>, a, b2);
  }
})();
export type ClientRepositoryInfo = InstanceType<typeof ClientRepositoryInfo$Runtime>;
var ClientRepositoryInfo: MessageType<ClientRepositoryInfo> = ClientRepositoryInfo$Runtime as unknown as MessageType<ClientRepositoryInfo>;
(ClientRepositoryInfo as MutableMessageType<ClientRepositoryInfo>).runtime = proto3;
(ClientRepositoryInfo as MutableMessageType<ClientRepositoryInfo>).typeName = "aiserver.v1.ClientRepositoryInfo";
(ClientRepositoryInfo as MutableMessageType<ClientRepositoryInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "orthogonal_transform_seed",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var SyncMerkleSubtreeV2Request$Runtime = (() => class _SyncMerkleSubtreeV2Request extends Message<_SyncMerkleSubtreeV2Request> {
  declare clientRepositoryInfo?: ClientRepositoryInfo;
  declare codebaseId: string;
  declare localPartialPath?: PartialPathItem;
  declare localPartialPaths: PartialPathItem[];
  constructor(data?: PartialMessage<_SyncMerkleSubtreeV2Request>) {
    super();
    this.codebaseId = "";
    this.localPartialPaths = [];
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeV2Request);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeV2Request {
    return new _SyncMerkleSubtreeV2Request().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Request {
    return new _SyncMerkleSubtreeV2Request().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Request {
    return new _SyncMerkleSubtreeV2Request().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeV2Request | PlainMessage<_SyncMerkleSubtreeV2Request> | undefined | null, b2: _SyncMerkleSubtreeV2Request | PlainMessage<_SyncMerkleSubtreeV2Request> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeV2Request as unknown as MessageType<_SyncMerkleSubtreeV2Request>, a, b2);
  }
})();
export type SyncMerkleSubtreeV2Request = InstanceType<typeof SyncMerkleSubtreeV2Request$Runtime>;
var SyncMerkleSubtreeV2Request: MessageType<SyncMerkleSubtreeV2Request> = SyncMerkleSubtreeV2Request$Runtime as unknown as MessageType<SyncMerkleSubtreeV2Request>;
(SyncMerkleSubtreeV2Request as MutableMessageType<SyncMerkleSubtreeV2Request>).runtime = proto3;
(SyncMerkleSubtreeV2Request as MutableMessageType<SyncMerkleSubtreeV2Request>).typeName = "aiserver.v1.SyncMerkleSubtreeV2Request";
(SyncMerkleSubtreeV2Request as MutableMessageType<SyncMerkleSubtreeV2Request>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "client_repository_info", kind: "message", T: ClientRepositoryInfo },
  {
    no: 2,
    name: "codebase_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "local_partial_path", kind: "message", T: PartialPathItem },
  { no: 4, name: "local_partial_paths", kind: "message", T: PartialPathItem, repeated: true }
]);
var SyncMerkleSubtreeV2Response$Runtime = (() => class _SyncMerkleSubtreeV2Response extends Message<_SyncMerkleSubtreeV2Response> {
  declare results: SyncMerkleSubtreeV2Response_PartialPathResult[];
  declare result: { case: "match"; value: boolean } | { case: "mismatch"; value: SyncMerkleSubtreeV2Response_Mismatch } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SyncMerkleSubtreeV2Response>) {
    super();
    this.result = { case: void 0 };
    this.results = [];
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeV2Response);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeV2Response {
    return new _SyncMerkleSubtreeV2Response().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response {
    return new _SyncMerkleSubtreeV2Response().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response {
    return new _SyncMerkleSubtreeV2Response().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeV2Response | PlainMessage<_SyncMerkleSubtreeV2Response> | undefined | null, b2: _SyncMerkleSubtreeV2Response | PlainMessage<_SyncMerkleSubtreeV2Response> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeV2Response as unknown as MessageType<_SyncMerkleSubtreeV2Response>, a, b2);
  }
})();
export type SyncMerkleSubtreeV2Response = InstanceType<typeof SyncMerkleSubtreeV2Response$Runtime>;
var SyncMerkleSubtreeV2Response: MessageType<SyncMerkleSubtreeV2Response> = SyncMerkleSubtreeV2Response$Runtime as unknown as MessageType<SyncMerkleSubtreeV2Response>;
(SyncMerkleSubtreeV2Response as MutableMessageType<SyncMerkleSubtreeV2Response>).runtime = proto3;
(SyncMerkleSubtreeV2Response as MutableMessageType<SyncMerkleSubtreeV2Response>).typeName = "aiserver.v1.SyncMerkleSubtreeV2Response";
(SyncMerkleSubtreeV2Response as MutableMessageType<SyncMerkleSubtreeV2Response>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "match", kind: "scalar", T: 8, oneof: "result" },
  { no: 2, name: "mismatch", kind: "message", T: SyncMerkleSubtreeV2Response_Mismatch, oneof: "result" },
  { no: 3, name: "results", kind: "message", T: SyncMerkleSubtreeV2Response_PartialPathResult, repeated: true }
]);
var SyncMerkleSubtreeV2Response_Mismatch$Runtime = (() => class _SyncMerkleSubtreeV2Response_Mismatch extends Message<_SyncMerkleSubtreeV2Response_Mismatch> {
  declare children: PartialPathItem[];
  constructor(data?: PartialMessage<_SyncMerkleSubtreeV2Response_Mismatch>) {
    super();
    this.children = [];
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeV2Response_Mismatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeV2Response_Mismatch {
    return new _SyncMerkleSubtreeV2Response_Mismatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response_Mismatch {
    return new _SyncMerkleSubtreeV2Response_Mismatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response_Mismatch {
    return new _SyncMerkleSubtreeV2Response_Mismatch().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeV2Response_Mismatch | PlainMessage<_SyncMerkleSubtreeV2Response_Mismatch> | undefined | null, b2: _SyncMerkleSubtreeV2Response_Mismatch | PlainMessage<_SyncMerkleSubtreeV2Response_Mismatch> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeV2Response_Mismatch as unknown as MessageType<_SyncMerkleSubtreeV2Response_Mismatch>, a, b2);
  }
})();
export type SyncMerkleSubtreeV2Response_Mismatch = InstanceType<typeof SyncMerkleSubtreeV2Response_Mismatch$Runtime>;
var SyncMerkleSubtreeV2Response_Mismatch: MessageType<SyncMerkleSubtreeV2Response_Mismatch> = SyncMerkleSubtreeV2Response_Mismatch$Runtime as unknown as MessageType<SyncMerkleSubtreeV2Response_Mismatch>;
(SyncMerkleSubtreeV2Response_Mismatch as MutableMessageType<SyncMerkleSubtreeV2Response_Mismatch>).runtime = proto3;
(SyncMerkleSubtreeV2Response_Mismatch as MutableMessageType<SyncMerkleSubtreeV2Response_Mismatch>).typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.Mismatch";
(SyncMerkleSubtreeV2Response_Mismatch as MutableMessageType<SyncMerkleSubtreeV2Response_Mismatch>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "children", kind: "message", T: PartialPathItem, repeated: true }
]);
var SyncMerkleSubtreeV2Response_PartialPathResult$Runtime = (() => class _SyncMerkleSubtreeV2Response_PartialPathResult extends Message<_SyncMerkleSubtreeV2Response_PartialPathResult> {
  declare result: { case: "match"; value: boolean } | { case: "mismatch"; value: SyncMerkleSubtreeV2Response_Mismatch } | { case: "responseSizeLimitExceeded"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SyncMerkleSubtreeV2Response_PartialPathResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SyncMerkleSubtreeV2Response_PartialPathResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncMerkleSubtreeV2Response_PartialPathResult {
    return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response_PartialPathResult {
    return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncMerkleSubtreeV2Response_PartialPathResult {
    return new _SyncMerkleSubtreeV2Response_PartialPathResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncMerkleSubtreeV2Response_PartialPathResult | PlainMessage<_SyncMerkleSubtreeV2Response_PartialPathResult> | undefined | null, b2: _SyncMerkleSubtreeV2Response_PartialPathResult | PlainMessage<_SyncMerkleSubtreeV2Response_PartialPathResult> | undefined | null): boolean {
    return proto3.util.equals(_SyncMerkleSubtreeV2Response_PartialPathResult as unknown as MessageType<_SyncMerkleSubtreeV2Response_PartialPathResult>, a, b2);
  }
})();
export type SyncMerkleSubtreeV2Response_PartialPathResult = InstanceType<typeof SyncMerkleSubtreeV2Response_PartialPathResult$Runtime>;
var SyncMerkleSubtreeV2Response_PartialPathResult: MessageType<SyncMerkleSubtreeV2Response_PartialPathResult> = SyncMerkleSubtreeV2Response_PartialPathResult$Runtime as unknown as MessageType<SyncMerkleSubtreeV2Response_PartialPathResult>;
(SyncMerkleSubtreeV2Response_PartialPathResult as MutableMessageType<SyncMerkleSubtreeV2Response_PartialPathResult>).runtime = proto3;
(SyncMerkleSubtreeV2Response_PartialPathResult as MutableMessageType<SyncMerkleSubtreeV2Response_PartialPathResult>).typeName = "aiserver.v1.SyncMerkleSubtreeV2Response.PartialPathResult";
(SyncMerkleSubtreeV2Response_PartialPathResult as MutableMessageType<SyncMerkleSubtreeV2Response_PartialPathResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "match", kind: "scalar", T: 8, oneof: "result" },
  { no: 2, name: "mismatch", kind: "message", T: SyncMerkleSubtreeV2Response_Mismatch, oneof: "result" },
  { no: 3, name: "response_size_limit_exceeded", kind: "scalar", T: 8, oneof: "result" }
]);
var FastUpdateFileRequest$Runtime = (() => class _FastUpdateFileRequest extends Message<_FastUpdateFileRequest> {
  declare repository?: RepositoryInfo;
  declare ancestorSpline: PartialPathItem[];
  declare updateType: FastUpdateFileRequest_UpdateType;
  declare partialPath: { case: "directory"; value: PartialPathItem } | { case: "localFile"; value: FastUpdateFileRequest_LocalFile } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_FastUpdateFileRequest>) {
    super();
    this.partialPath = { case: void 0 };
    this.ancestorSpline = [];
    this.updateType = FastUpdateFileRequest_UpdateType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FastUpdateFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileRequest {
    return new _FastUpdateFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileRequest {
    return new _FastUpdateFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileRequest {
    return new _FastUpdateFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileRequest | PlainMessage<_FastUpdateFileRequest> | undefined | null, b2: _FastUpdateFileRequest | PlainMessage<_FastUpdateFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileRequest as unknown as MessageType<_FastUpdateFileRequest>, a, b2);
  }
})();
export type FastUpdateFileRequest = InstanceType<typeof FastUpdateFileRequest$Runtime>;
var FastUpdateFileRequest: MessageType<FastUpdateFileRequest> = FastUpdateFileRequest$Runtime as unknown as MessageType<FastUpdateFileRequest>;
(FastUpdateFileRequest as MutableMessageType<FastUpdateFileRequest>).runtime = proto3;
(FastUpdateFileRequest as MutableMessageType<FastUpdateFileRequest>).typeName = "aiserver.v1.FastUpdateFileRequest";
(FastUpdateFileRequest as MutableMessageType<FastUpdateFileRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  { no: 2, name: "directory", kind: "message", T: PartialPathItem, oneof: "partial_path" },
  { no: 3, name: "local_file", kind: "message", T: FastUpdateFileRequest_LocalFile, oneof: "partial_path" },
  { no: 4, name: "ancestor_spline", kind: "message", T: PartialPathItem, repeated: true },
  { no: 5, name: "update_type", kind: "enum", T: proto3.getEnumType(FastUpdateFileRequest_UpdateType) }
]);
(function(FastUpdateFileRequest_UpdateType2) {
  FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["ADD"] = 1] = "ADD";
  FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["DELETE"] = 2] = "DELETE";
  FastUpdateFileRequest_UpdateType2[FastUpdateFileRequest_UpdateType2["MODIFY"] = 3] = "MODIFY";
})(FastUpdateFileRequest_UpdateType! || (FastUpdateFileRequest_UpdateType = {} as typeof FastUpdateFileRequest_UpdateType));
proto3.util.setEnumType(FastUpdateFileRequest_UpdateType, "aiserver.v1.FastUpdateFileRequest.UpdateType", [
  { no: 0, name: "UPDATE_TYPE_UNSPECIFIED" },
  { no: 1, name: "UPDATE_TYPE_ADD" },
  { no: 2, name: "UPDATE_TYPE_DELETE" },
  { no: 3, name: "UPDATE_TYPE_MODIFY" }
]);
var FastUpdateFileRequest_LocalFile$Runtime = (() => class _FastUpdateFileRequest_LocalFile extends Message<_FastUpdateFileRequest_LocalFile> {
  declare file?: File2;
  declare hash: string;
  declare unencryptedRelativeWorkspacePath: string;
  constructor(data?: PartialMessage<_FastUpdateFileRequest_LocalFile>) {
    super();
    this.hash = "";
    this.unencryptedRelativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _FastUpdateFileRequest_LocalFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileRequest_LocalFile {
    return new _FastUpdateFileRequest_LocalFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileRequest_LocalFile {
    return new _FastUpdateFileRequest_LocalFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileRequest_LocalFile {
    return new _FastUpdateFileRequest_LocalFile().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileRequest_LocalFile | PlainMessage<_FastUpdateFileRequest_LocalFile> | undefined | null, b2: _FastUpdateFileRequest_LocalFile | PlainMessage<_FastUpdateFileRequest_LocalFile> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileRequest_LocalFile as unknown as MessageType<_FastUpdateFileRequest_LocalFile>, a, b2);
  }
})();
export type FastUpdateFileRequest_LocalFile = InstanceType<typeof FastUpdateFileRequest_LocalFile$Runtime>;
var FastUpdateFileRequest_LocalFile: MessageType<FastUpdateFileRequest_LocalFile> = FastUpdateFileRequest_LocalFile$Runtime as unknown as MessageType<FastUpdateFileRequest_LocalFile>;
(FastUpdateFileRequest_LocalFile as MutableMessageType<FastUpdateFileRequest_LocalFile>).runtime = proto3;
(FastUpdateFileRequest_LocalFile as MutableMessageType<FastUpdateFileRequest_LocalFile>).typeName = "aiserver.v1.FastUpdateFileRequest.LocalFile";
(FastUpdateFileRequest_LocalFile as MutableMessageType<FastUpdateFileRequest_LocalFile>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file", kind: "message", T: File2 },
  {
    no: 2,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "unencrypted_relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FastUpdateFileResponse$Runtime = (() => class _FastUpdateFileResponse extends Message<_FastUpdateFileResponse> {
  declare status: FastUpdateFileResponse_Status;
  constructor(data?: PartialMessage<_FastUpdateFileResponse>) {
    super();
    this.status = FastUpdateFileResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FastUpdateFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileResponse {
    return new _FastUpdateFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileResponse {
    return new _FastUpdateFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileResponse {
    return new _FastUpdateFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileResponse | PlainMessage<_FastUpdateFileResponse> | undefined | null, b2: _FastUpdateFileResponse | PlainMessage<_FastUpdateFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileResponse as unknown as MessageType<_FastUpdateFileResponse>, a, b2);
  }
})();
export type FastUpdateFileResponse = InstanceType<typeof FastUpdateFileResponse$Runtime>;
var FastUpdateFileResponse: MessageType<FastUpdateFileResponse> = FastUpdateFileResponse$Runtime as unknown as MessageType<FastUpdateFileResponse>;
(FastUpdateFileResponse as MutableMessageType<FastUpdateFileResponse>).runtime = proto3;
(FastUpdateFileResponse as MutableMessageType<FastUpdateFileResponse>).typeName = "aiserver.v1.FastUpdateFileResponse";
(FastUpdateFileResponse as MutableMessageType<FastUpdateFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FastUpdateFileResponse_Status) }
]);
(function(FastUpdateFileResponse_Status2) {
  FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
  FastUpdateFileResponse_Status2[FastUpdateFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
})(FastUpdateFileResponse_Status! || (FastUpdateFileResponse_Status = {} as typeof FastUpdateFileResponse_Status));
proto3.util.setEnumType(FastUpdateFileResponse_Status, "aiserver.v1.FastUpdateFileResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_EXPECTED_FAILURE" }
]);
var FastUpdateFileV2Request$Runtime = (() => class _FastUpdateFileV2Request extends Message<_FastUpdateFileV2Request> {
  declare clientRepositoryInfo?: ClientRepositoryInfo;
  declare codebaseId: string;
  declare ancestorSpline: PartialPathItem[];
  declare updateType: FastUpdateFileV2Request_UpdateType;
  declare fileUpdates: FastUpdateFileV2Request_FileUpdate[];
  declare partialPath: { case: "directory"; value: PartialPathItem } | { case: "localFile"; value: FastUpdateFileV2Request_LocalFile } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_FastUpdateFileV2Request>) {
    super();
    this.codebaseId = "";
    this.partialPath = { case: void 0 };
    this.ancestorSpline = [];
    this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
    this.fileUpdates = [];
    proto3.util.initPartial(data, this as _FastUpdateFileV2Request);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileV2Request {
    return new _FastUpdateFileV2Request().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request {
    return new _FastUpdateFileV2Request().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request {
    return new _FastUpdateFileV2Request().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileV2Request | PlainMessage<_FastUpdateFileV2Request> | undefined | null, b2: _FastUpdateFileV2Request | PlainMessage<_FastUpdateFileV2Request> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileV2Request as unknown as MessageType<_FastUpdateFileV2Request>, a, b2);
  }
})();
export type FastUpdateFileV2Request = InstanceType<typeof FastUpdateFileV2Request$Runtime>;
var FastUpdateFileV2Request: MessageType<FastUpdateFileV2Request> = FastUpdateFileV2Request$Runtime as unknown as MessageType<FastUpdateFileV2Request>;
(FastUpdateFileV2Request as MutableMessageType<FastUpdateFileV2Request>).runtime = proto3;
(FastUpdateFileV2Request as MutableMessageType<FastUpdateFileV2Request>).typeName = "aiserver.v1.FastUpdateFileV2Request";
(FastUpdateFileV2Request as MutableMessageType<FastUpdateFileV2Request>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "client_repository_info", kind: "message", T: ClientRepositoryInfo },
  {
    no: 2,
    name: "codebase_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "directory", kind: "message", T: PartialPathItem, oneof: "partial_path" },
  { no: 4, name: "local_file", kind: "message", T: FastUpdateFileV2Request_LocalFile, oneof: "partial_path" },
  { no: 5, name: "ancestor_spline", kind: "message", T: PartialPathItem, repeated: true },
  { no: 6, name: "update_type", kind: "enum", T: proto3.getEnumType(FastUpdateFileV2Request_UpdateType) },
  { no: 7, name: "file_updates", kind: "message", T: FastUpdateFileV2Request_FileUpdate, repeated: true }
]);
(function(FastUpdateFileV2Request_UpdateType2) {
  FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["ADD"] = 1] = "ADD";
  FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["DELETE"] = 2] = "DELETE";
  FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["MODIFY"] = 3] = "MODIFY";
  FastUpdateFileV2Request_UpdateType2[FastUpdateFileV2Request_UpdateType2["BATCH"] = 4] = "BATCH";
})(FastUpdateFileV2Request_UpdateType! || (FastUpdateFileV2Request_UpdateType = {} as typeof FastUpdateFileV2Request_UpdateType));
proto3.util.setEnumType(FastUpdateFileV2Request_UpdateType, "aiserver.v1.FastUpdateFileV2Request.UpdateType", [
  { no: 0, name: "UPDATE_TYPE_UNSPECIFIED" },
  { no: 1, name: "UPDATE_TYPE_ADD" },
  { no: 2, name: "UPDATE_TYPE_DELETE" },
  { no: 3, name: "UPDATE_TYPE_MODIFY" },
  { no: 4, name: "UPDATE_TYPE_BATCH" }
]);
var FastUpdateFileV2Request_LocalFile$Runtime = (() => class _FastUpdateFileV2Request_LocalFile extends Message<_FastUpdateFileV2Request_LocalFile> {
  declare file?: File2;
  declare hash: string;
  declare unencryptedRelativeWorkspacePath: string;
  constructor(data?: PartialMessage<_FastUpdateFileV2Request_LocalFile>) {
    super();
    this.hash = "";
    this.unencryptedRelativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _FastUpdateFileV2Request_LocalFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileV2Request_LocalFile {
    return new _FastUpdateFileV2Request_LocalFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request_LocalFile {
    return new _FastUpdateFileV2Request_LocalFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request_LocalFile {
    return new _FastUpdateFileV2Request_LocalFile().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileV2Request_LocalFile | PlainMessage<_FastUpdateFileV2Request_LocalFile> | undefined | null, b2: _FastUpdateFileV2Request_LocalFile | PlainMessage<_FastUpdateFileV2Request_LocalFile> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileV2Request_LocalFile as unknown as MessageType<_FastUpdateFileV2Request_LocalFile>, a, b2);
  }
})();
export type FastUpdateFileV2Request_LocalFile = InstanceType<typeof FastUpdateFileV2Request_LocalFile$Runtime>;
var FastUpdateFileV2Request_LocalFile: MessageType<FastUpdateFileV2Request_LocalFile> = FastUpdateFileV2Request_LocalFile$Runtime as unknown as MessageType<FastUpdateFileV2Request_LocalFile>;
(FastUpdateFileV2Request_LocalFile as MutableMessageType<FastUpdateFileV2Request_LocalFile>).runtime = proto3;
(FastUpdateFileV2Request_LocalFile as MutableMessageType<FastUpdateFileV2Request_LocalFile>).typeName = "aiserver.v1.FastUpdateFileV2Request.LocalFile";
(FastUpdateFileV2Request_LocalFile as MutableMessageType<FastUpdateFileV2Request_LocalFile>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file", kind: "message", T: File2 },
  {
    no: 2,
    name: "hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "unencrypted_relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FastUpdateFileV2Request_FileUpdate$Runtime = (() => class _FastUpdateFileV2Request_FileUpdate extends Message<_FastUpdateFileV2Request_FileUpdate> {
  declare ancestorSpline: PartialPathItem[];
  declare updateType: FastUpdateFileV2Request_UpdateType;
  declare partialPath: { case: "directory"; value: PartialPathItem } | { case: "localFile"; value: FastUpdateFileV2Request_LocalFile } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_FastUpdateFileV2Request_FileUpdate>) {
    super();
    this.partialPath = { case: void 0 };
    this.ancestorSpline = [];
    this.updateType = FastUpdateFileV2Request_UpdateType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FastUpdateFileV2Request_FileUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileV2Request_FileUpdate {
    return new _FastUpdateFileV2Request_FileUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request_FileUpdate {
    return new _FastUpdateFileV2Request_FileUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Request_FileUpdate {
    return new _FastUpdateFileV2Request_FileUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileV2Request_FileUpdate | PlainMessage<_FastUpdateFileV2Request_FileUpdate> | undefined | null, b2: _FastUpdateFileV2Request_FileUpdate | PlainMessage<_FastUpdateFileV2Request_FileUpdate> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileV2Request_FileUpdate as unknown as MessageType<_FastUpdateFileV2Request_FileUpdate>, a, b2);
  }
})();
export type FastUpdateFileV2Request_FileUpdate = InstanceType<typeof FastUpdateFileV2Request_FileUpdate$Runtime>;
var FastUpdateFileV2Request_FileUpdate: MessageType<FastUpdateFileV2Request_FileUpdate> = FastUpdateFileV2Request_FileUpdate$Runtime as unknown as MessageType<FastUpdateFileV2Request_FileUpdate>;
(FastUpdateFileV2Request_FileUpdate as MutableMessageType<FastUpdateFileV2Request_FileUpdate>).runtime = proto3;
(FastUpdateFileV2Request_FileUpdate as MutableMessageType<FastUpdateFileV2Request_FileUpdate>).typeName = "aiserver.v1.FastUpdateFileV2Request.FileUpdate";
(FastUpdateFileV2Request_FileUpdate as MutableMessageType<FastUpdateFileV2Request_FileUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directory", kind: "message", T: PartialPathItem, oneof: "partial_path" },
  { no: 2, name: "local_file", kind: "message", T: FastUpdateFileV2Request_LocalFile, oneof: "partial_path" },
  { no: 3, name: "ancestor_spline", kind: "message", T: PartialPathItem, repeated: true },
  { no: 4, name: "update_type", kind: "enum", T: proto3.getEnumType(FastUpdateFileV2Request_UpdateType) }
]);
var FastUpdateFileV2Response$Runtime = (() => class _FastUpdateFileV2Response extends Message<_FastUpdateFileV2Response> {
  declare status: FastUpdateFileV2Response_Status;
  constructor(data?: PartialMessage<_FastUpdateFileV2Response>) {
    super();
    this.status = FastUpdateFileV2Response_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FastUpdateFileV2Response);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FastUpdateFileV2Response {
    return new _FastUpdateFileV2Response().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Response {
    return new _FastUpdateFileV2Response().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FastUpdateFileV2Response {
    return new _FastUpdateFileV2Response().fromJsonString(jsonString, options);
  }
  static equals(a: _FastUpdateFileV2Response | PlainMessage<_FastUpdateFileV2Response> | undefined | null, b2: _FastUpdateFileV2Response | PlainMessage<_FastUpdateFileV2Response> | undefined | null): boolean {
    return proto3.util.equals(_FastUpdateFileV2Response as unknown as MessageType<_FastUpdateFileV2Response>, a, b2);
  }
})();
export type FastUpdateFileV2Response = InstanceType<typeof FastUpdateFileV2Response$Runtime>;
var FastUpdateFileV2Response: MessageType<FastUpdateFileV2Response> = FastUpdateFileV2Response$Runtime as unknown as MessageType<FastUpdateFileV2Response>;
(FastUpdateFileV2Response as MutableMessageType<FastUpdateFileV2Response>).runtime = proto3;
(FastUpdateFileV2Response as MutableMessageType<FastUpdateFileV2Response>).typeName = "aiserver.v1.FastUpdateFileV2Response";
(FastUpdateFileV2Response as MutableMessageType<FastUpdateFileV2Response>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FastUpdateFileV2Response_Status) }
]);
(function(FastUpdateFileV2Response_Status2) {
  FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["SUCCESS"] = 1] = "SUCCESS";
  FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["FAILURE"] = 2] = "FAILURE";
  FastUpdateFileV2Response_Status2[FastUpdateFileV2Response_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
})(FastUpdateFileV2Response_Status! || (FastUpdateFileV2Response_Status = {} as typeof FastUpdateFileV2Response_Status));
proto3.util.setEnumType(FastUpdateFileV2Response_Status, "aiserver.v1.FastUpdateFileV2Response.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_EXPECTED_FAILURE" }
]);
var GetUploadLimitsRequest$Runtime = (() => class _GetUploadLimitsRequest extends Message<_GetUploadLimitsRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_GetUploadLimitsRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetUploadLimitsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetUploadLimitsRequest {
    return new _GetUploadLimitsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetUploadLimitsRequest {
    return new _GetUploadLimitsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetUploadLimitsRequest {
    return new _GetUploadLimitsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetUploadLimitsRequest | PlainMessage<_GetUploadLimitsRequest> | undefined | null, b2: _GetUploadLimitsRequest | PlainMessage<_GetUploadLimitsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetUploadLimitsRequest as unknown as MessageType<_GetUploadLimitsRequest>, a, b2);
  }
})();
export type GetUploadLimitsRequest = InstanceType<typeof GetUploadLimitsRequest$Runtime>;
var GetUploadLimitsRequest: MessageType<GetUploadLimitsRequest> = GetUploadLimitsRequest$Runtime as unknown as MessageType<GetUploadLimitsRequest>;
(GetUploadLimitsRequest as MutableMessageType<GetUploadLimitsRequest>).runtime = proto3;
(GetUploadLimitsRequest as MutableMessageType<GetUploadLimitsRequest>).typeName = "aiserver.v1.GetUploadLimitsRequest";
(GetUploadLimitsRequest as MutableMessageType<GetUploadLimitsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo, opt: true }
]);
var GetUploadLimitsResponse$Runtime = (() => class _GetUploadLimitsResponse extends Message<_GetUploadLimitsResponse> {
  declare softLimit: number;
  declare hardLimit: number;
  constructor(data?: PartialMessage<_GetUploadLimitsResponse>) {
    super();
    this.softLimit = 0;
    this.hardLimit = 0;
    proto3.util.initPartial(data, this as _GetUploadLimitsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetUploadLimitsResponse {
    return new _GetUploadLimitsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetUploadLimitsResponse {
    return new _GetUploadLimitsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetUploadLimitsResponse {
    return new _GetUploadLimitsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetUploadLimitsResponse | PlainMessage<_GetUploadLimitsResponse> | undefined | null, b2: _GetUploadLimitsResponse | PlainMessage<_GetUploadLimitsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetUploadLimitsResponse as unknown as MessageType<_GetUploadLimitsResponse>, a, b2);
  }
})();
export type GetUploadLimitsResponse = InstanceType<typeof GetUploadLimitsResponse$Runtime>;
var GetUploadLimitsResponse: MessageType<GetUploadLimitsResponse> = GetUploadLimitsResponse$Runtime as unknown as MessageType<GetUploadLimitsResponse>;
(GetUploadLimitsResponse as MutableMessageType<GetUploadLimitsResponse>).runtime = proto3;
(GetUploadLimitsResponse as MutableMessageType<GetUploadLimitsResponse>).typeName = "aiserver.v1.GetUploadLimitsResponse";
(GetUploadLimitsResponse as MutableMessageType<GetUploadLimitsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "soft_limit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "hard_limit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetNumFilesToSendRequest$Runtime = (() => class _GetNumFilesToSendRequest extends Message<_GetNumFilesToSendRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_GetNumFilesToSendRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetNumFilesToSendRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetNumFilesToSendRequest {
    return new _GetNumFilesToSendRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetNumFilesToSendRequest {
    return new _GetNumFilesToSendRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetNumFilesToSendRequest {
    return new _GetNumFilesToSendRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetNumFilesToSendRequest | PlainMessage<_GetNumFilesToSendRequest> | undefined | null, b2: _GetNumFilesToSendRequest | PlainMessage<_GetNumFilesToSendRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetNumFilesToSendRequest as unknown as MessageType<_GetNumFilesToSendRequest>, a, b2);
  }
})();
export type GetNumFilesToSendRequest = InstanceType<typeof GetNumFilesToSendRequest$Runtime>;
var GetNumFilesToSendRequest: MessageType<GetNumFilesToSendRequest> = GetNumFilesToSendRequest$Runtime as unknown as MessageType<GetNumFilesToSendRequest>;
(GetNumFilesToSendRequest as MutableMessageType<GetNumFilesToSendRequest>).runtime = proto3;
(GetNumFilesToSendRequest as MutableMessageType<GetNumFilesToSendRequest>).typeName = "aiserver.v1.GetNumFilesToSendRequest";
(GetNumFilesToSendRequest as MutableMessageType<GetNumFilesToSendRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var GetNumFilesToSendResponse$Runtime = (() => class _GetNumFilesToSendResponse extends Message<_GetNumFilesToSendResponse> {
  declare numFiles: number;
  constructor(data?: PartialMessage<_GetNumFilesToSendResponse>) {
    super();
    this.numFiles = 0;
    proto3.util.initPartial(data, this as _GetNumFilesToSendResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetNumFilesToSendResponse {
    return new _GetNumFilesToSendResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetNumFilesToSendResponse {
    return new _GetNumFilesToSendResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetNumFilesToSendResponse {
    return new _GetNumFilesToSendResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetNumFilesToSendResponse | PlainMessage<_GetNumFilesToSendResponse> | undefined | null, b2: _GetNumFilesToSendResponse | PlainMessage<_GetNumFilesToSendResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetNumFilesToSendResponse as unknown as MessageType<_GetNumFilesToSendResponse>, a, b2);
  }
})();
export type GetNumFilesToSendResponse = InstanceType<typeof GetNumFilesToSendResponse$Runtime>;
var GetNumFilesToSendResponse: MessageType<GetNumFilesToSendResponse> = GetNumFilesToSendResponse$Runtime as unknown as MessageType<GetNumFilesToSendResponse>;
(GetNumFilesToSendResponse as MutableMessageType<GetNumFilesToSendResponse>).runtime = proto3;
(GetNumFilesToSendResponse as MutableMessageType<GetNumFilesToSendResponse>).typeName = "aiserver.v1.GetNumFilesToSendResponse";
(GetNumFilesToSendResponse as MutableMessageType<GetNumFilesToSendResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "num_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetAvailableChunkingStrategiesRequest$Runtime = (() => class _GetAvailableChunkingStrategiesRequest extends Message<_GetAvailableChunkingStrategiesRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_GetAvailableChunkingStrategiesRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetAvailableChunkingStrategiesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAvailableChunkingStrategiesRequest {
    return new _GetAvailableChunkingStrategiesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAvailableChunkingStrategiesRequest {
    return new _GetAvailableChunkingStrategiesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAvailableChunkingStrategiesRequest {
    return new _GetAvailableChunkingStrategiesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAvailableChunkingStrategiesRequest | PlainMessage<_GetAvailableChunkingStrategiesRequest> | undefined | null, b2: _GetAvailableChunkingStrategiesRequest | PlainMessage<_GetAvailableChunkingStrategiesRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetAvailableChunkingStrategiesRequest as unknown as MessageType<_GetAvailableChunkingStrategiesRequest>, a, b2);
  }
})();
export type GetAvailableChunkingStrategiesRequest = InstanceType<typeof GetAvailableChunkingStrategiesRequest$Runtime>;
var GetAvailableChunkingStrategiesRequest: MessageType<GetAvailableChunkingStrategiesRequest> = GetAvailableChunkingStrategiesRequest$Runtime as unknown as MessageType<GetAvailableChunkingStrategiesRequest>;
(GetAvailableChunkingStrategiesRequest as MutableMessageType<GetAvailableChunkingStrategiesRequest>).runtime = proto3;
(GetAvailableChunkingStrategiesRequest as MutableMessageType<GetAvailableChunkingStrategiesRequest>).typeName = "aiserver.v1.GetAvailableChunkingStrategiesRequest";
(GetAvailableChunkingStrategiesRequest as MutableMessageType<GetAvailableChunkingStrategiesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var GetAvailableChunkingStrategiesResponse$Runtime = (() => class _GetAvailableChunkingStrategiesResponse extends Message<_GetAvailableChunkingStrategiesResponse> {
  declare chunkingStrategies: ChunkingStrategy[];
  constructor(data?: PartialMessage<_GetAvailableChunkingStrategiesResponse>) {
    super();
    this.chunkingStrategies = [];
    proto3.util.initPartial(data, this as _GetAvailableChunkingStrategiesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetAvailableChunkingStrategiesResponse {
    return new _GetAvailableChunkingStrategiesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetAvailableChunkingStrategiesResponse {
    return new _GetAvailableChunkingStrategiesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetAvailableChunkingStrategiesResponse {
    return new _GetAvailableChunkingStrategiesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetAvailableChunkingStrategiesResponse | PlainMessage<_GetAvailableChunkingStrategiesResponse> | undefined | null, b2: _GetAvailableChunkingStrategiesResponse | PlainMessage<_GetAvailableChunkingStrategiesResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetAvailableChunkingStrategiesResponse as unknown as MessageType<_GetAvailableChunkingStrategiesResponse>, a, b2);
  }
})();
export type GetAvailableChunkingStrategiesResponse = InstanceType<typeof GetAvailableChunkingStrategiesResponse$Runtime>;
var GetAvailableChunkingStrategiesResponse: MessageType<GetAvailableChunkingStrategiesResponse> = GetAvailableChunkingStrategiesResponse$Runtime as unknown as MessageType<GetAvailableChunkingStrategiesResponse>;
(GetAvailableChunkingStrategiesResponse as MutableMessageType<GetAvailableChunkingStrategiesResponse>).runtime = proto3;
(GetAvailableChunkingStrategiesResponse as MutableMessageType<GetAvailableChunkingStrategiesResponse>).typeName = "aiserver.v1.GetAvailableChunkingStrategiesResponse";
(GetAvailableChunkingStrategiesResponse as MutableMessageType<GetAvailableChunkingStrategiesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chunking_strategies", kind: "enum", T: proto3.getEnumType(ChunkingStrategy), repeated: true }
]);
var GetEmbeddingsRequest$Runtime = (() => class _GetEmbeddingsRequest extends Message<_GetEmbeddingsRequest> {
  declare texts: string[];
  constructor(data?: PartialMessage<_GetEmbeddingsRequest>) {
    super();
    this.texts = [];
    proto3.util.initPartial(data, this as _GetEmbeddingsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEmbeddingsRequest {
    return new _GetEmbeddingsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEmbeddingsRequest {
    return new _GetEmbeddingsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEmbeddingsRequest {
    return new _GetEmbeddingsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEmbeddingsRequest | PlainMessage<_GetEmbeddingsRequest> | undefined | null, b2: _GetEmbeddingsRequest | PlainMessage<_GetEmbeddingsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetEmbeddingsRequest as unknown as MessageType<_GetEmbeddingsRequest>, a, b2);
  }
})();
export type GetEmbeddingsRequest = InstanceType<typeof GetEmbeddingsRequest$Runtime>;
var GetEmbeddingsRequest: MessageType<GetEmbeddingsRequest> = GetEmbeddingsRequest$Runtime as unknown as MessageType<GetEmbeddingsRequest>;
(GetEmbeddingsRequest as MutableMessageType<GetEmbeddingsRequest>).runtime = proto3;
(GetEmbeddingsRequest as MutableMessageType<GetEmbeddingsRequest>).typeName = "aiserver.v1.GetEmbeddingsRequest";
(GetEmbeddingsRequest as MutableMessageType<GetEmbeddingsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "texts", kind: "scalar", T: 9, repeated: true }
]);
var GetEmbeddingsResponse$Runtime = (() => class _GetEmbeddingsResponse extends Message<_GetEmbeddingsResponse> {
  declare embeddings: GetEmbeddingsResponse_Embedding[];
  constructor(data?: PartialMessage<_GetEmbeddingsResponse>) {
    super();
    this.embeddings = [];
    proto3.util.initPartial(data, this as _GetEmbeddingsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEmbeddingsResponse {
    return new _GetEmbeddingsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEmbeddingsResponse {
    return new _GetEmbeddingsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEmbeddingsResponse {
    return new _GetEmbeddingsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEmbeddingsResponse | PlainMessage<_GetEmbeddingsResponse> | undefined | null, b2: _GetEmbeddingsResponse | PlainMessage<_GetEmbeddingsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetEmbeddingsResponse as unknown as MessageType<_GetEmbeddingsResponse>, a, b2);
  }
})();
export type GetEmbeddingsResponse = InstanceType<typeof GetEmbeddingsResponse$Runtime>;
var GetEmbeddingsResponse: MessageType<GetEmbeddingsResponse> = GetEmbeddingsResponse$Runtime as unknown as MessageType<GetEmbeddingsResponse>;
(GetEmbeddingsResponse as MutableMessageType<GetEmbeddingsResponse>).runtime = proto3;
(GetEmbeddingsResponse as MutableMessageType<GetEmbeddingsResponse>).typeName = "aiserver.v1.GetEmbeddingsResponse";
(GetEmbeddingsResponse as MutableMessageType<GetEmbeddingsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "embeddings", kind: "message", T: GetEmbeddingsResponse_Embedding, repeated: true }
]);
var GetEmbeddingsResponse_Embedding$Runtime = (() => class _GetEmbeddingsResponse_Embedding extends Message<_GetEmbeddingsResponse_Embedding> {
  declare embedding: number[];
  constructor(data?: PartialMessage<_GetEmbeddingsResponse_Embedding>) {
    super();
    this.embedding = [];
    proto3.util.initPartial(data, this as _GetEmbeddingsResponse_Embedding);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetEmbeddingsResponse_Embedding {
    return new _GetEmbeddingsResponse_Embedding().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetEmbeddingsResponse_Embedding {
    return new _GetEmbeddingsResponse_Embedding().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetEmbeddingsResponse_Embedding {
    return new _GetEmbeddingsResponse_Embedding().fromJsonString(jsonString, options);
  }
  static equals(a: _GetEmbeddingsResponse_Embedding | PlainMessage<_GetEmbeddingsResponse_Embedding> | undefined | null, b2: _GetEmbeddingsResponse_Embedding | PlainMessage<_GetEmbeddingsResponse_Embedding> | undefined | null): boolean {
    return proto3.util.equals(_GetEmbeddingsResponse_Embedding as unknown as MessageType<_GetEmbeddingsResponse_Embedding>, a, b2);
  }
})();
export type GetEmbeddingsResponse_Embedding = InstanceType<typeof GetEmbeddingsResponse_Embedding$Runtime>;
var GetEmbeddingsResponse_Embedding: MessageType<GetEmbeddingsResponse_Embedding> = GetEmbeddingsResponse_Embedding$Runtime as unknown as MessageType<GetEmbeddingsResponse_Embedding>;
(GetEmbeddingsResponse_Embedding as MutableMessageType<GetEmbeddingsResponse_Embedding>).runtime = proto3;
(GetEmbeddingsResponse_Embedding as MutableMessageType<GetEmbeddingsResponse_Embedding>).typeName = "aiserver.v1.GetEmbeddingsResponse.Embedding";
(GetEmbeddingsResponse_Embedding as MutableMessageType<GetEmbeddingsResponse_Embedding>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "embedding", kind: "scalar", T: 2, repeated: true }
]);
var AdminRemoveRepositoryRequest$Runtime = (() => class _AdminRemoveRepositoryRequest extends Message<_AdminRemoveRepositoryRequest> {
  declare codebaseId: number;
  constructor(data?: PartialMessage<_AdminRemoveRepositoryRequest>) {
    super();
    this.codebaseId = 0;
    proto3.util.initPartial(data, this as _AdminRemoveRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminRemoveRepositoryRequest {
    return new _AdminRemoveRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminRemoveRepositoryRequest {
    return new _AdminRemoveRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminRemoveRepositoryRequest {
    return new _AdminRemoveRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminRemoveRepositoryRequest | PlainMessage<_AdminRemoveRepositoryRequest> | undefined | null, b2: _AdminRemoveRepositoryRequest | PlainMessage<_AdminRemoveRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_AdminRemoveRepositoryRequest as unknown as MessageType<_AdminRemoveRepositoryRequest>, a, b2);
  }
})();
export type AdminRemoveRepositoryRequest = InstanceType<typeof AdminRemoveRepositoryRequest$Runtime>;
var AdminRemoveRepositoryRequest: MessageType<AdminRemoveRepositoryRequest> = AdminRemoveRepositoryRequest$Runtime as unknown as MessageType<AdminRemoveRepositoryRequest>;
(AdminRemoveRepositoryRequest as MutableMessageType<AdminRemoveRepositoryRequest>).runtime = proto3;
(AdminRemoveRepositoryRequest as MutableMessageType<AdminRemoveRepositoryRequest>).typeName = "aiserver.v1.AdminRemoveRepositoryRequest";
(AdminRemoveRepositoryRequest as MutableMessageType<AdminRemoveRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "codebase_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var AdminRemoveRepositoryResponse$Runtime = (() => class _AdminRemoveRepositoryResponse extends Message<_AdminRemoveRepositoryResponse> {
  constructor(data?: PartialMessage<_AdminRemoveRepositoryResponse>) {
    super();
    proto3.util.initPartial(data, this as _AdminRemoveRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AdminRemoveRepositoryResponse {
    return new _AdminRemoveRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AdminRemoveRepositoryResponse {
    return new _AdminRemoveRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AdminRemoveRepositoryResponse {
    return new _AdminRemoveRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AdminRemoveRepositoryResponse | PlainMessage<_AdminRemoveRepositoryResponse> | undefined | null, b2: _AdminRemoveRepositoryResponse | PlainMessage<_AdminRemoveRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_AdminRemoveRepositoryResponse as unknown as MessageType<_AdminRemoveRepositoryResponse>, a, b2);
  }
})();
export type AdminRemoveRepositoryResponse = InstanceType<typeof AdminRemoveRepositoryResponse$Runtime>;
var AdminRemoveRepositoryResponse: MessageType<AdminRemoveRepositoryResponse> = AdminRemoveRepositoryResponse$Runtime as unknown as MessageType<AdminRemoveRepositoryResponse>;
(AdminRemoveRepositoryResponse as MutableMessageType<AdminRemoveRepositoryResponse>).runtime = proto3;
(AdminRemoveRepositoryResponse as MutableMessageType<AdminRemoveRepositoryResponse>).typeName = "aiserver.v1.AdminRemoveRepositoryResponse";
(AdminRemoveRepositoryResponse as MutableMessageType<AdminRemoveRepositoryResponse>).fields = proto3.util.newFieldList(() => []);
var SyncRepositoryRequest$Runtime = (() => class _SyncRepositoryRequest extends Message<_SyncRepositoryRequest> {
  declare codebaseId: number;
  constructor(data?: PartialMessage<_SyncRepositoryRequest>) {
    super();
    this.codebaseId = 0;
    proto3.util.initPartial(data, this as _SyncRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncRepositoryRequest {
    return new _SyncRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncRepositoryRequest {
    return new _SyncRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncRepositoryRequest {
    return new _SyncRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncRepositoryRequest | PlainMessage<_SyncRepositoryRequest> | undefined | null, b2: _SyncRepositoryRequest | PlainMessage<_SyncRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_SyncRepositoryRequest as unknown as MessageType<_SyncRepositoryRequest>, a, b2);
  }
})();
export type SyncRepositoryRequest = InstanceType<typeof SyncRepositoryRequest$Runtime>;
var SyncRepositoryRequest: MessageType<SyncRepositoryRequest> = SyncRepositoryRequest$Runtime as unknown as MessageType<SyncRepositoryRequest>;
(SyncRepositoryRequest as MutableMessageType<SyncRepositoryRequest>).runtime = proto3;
(SyncRepositoryRequest as MutableMessageType<SyncRepositoryRequest>).typeName = "aiserver.v1.SyncRepositoryRequest";
(SyncRepositoryRequest as MutableMessageType<SyncRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "codebase_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SyncRepositoryResponse$Runtime = (() => class _SyncRepositoryResponse extends Message<_SyncRepositoryResponse> {
  constructor(data?: PartialMessage<_SyncRepositoryResponse>) {
    super();
    proto3.util.initPartial(data, this as _SyncRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SyncRepositoryResponse {
    return new _SyncRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SyncRepositoryResponse {
    return new _SyncRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SyncRepositoryResponse {
    return new _SyncRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SyncRepositoryResponse | PlainMessage<_SyncRepositoryResponse> | undefined | null, b2: _SyncRepositoryResponse | PlainMessage<_SyncRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_SyncRepositoryResponse as unknown as MessageType<_SyncRepositoryResponse>, a, b2);
  }
})();
export type SyncRepositoryResponse = InstanceType<typeof SyncRepositoryResponse$Runtime>;
var SyncRepositoryResponse: MessageType<SyncRepositoryResponse> = SyncRepositoryResponse$Runtime as unknown as MessageType<SyncRepositoryResponse>;
(SyncRepositoryResponse as MutableMessageType<SyncRepositoryResponse>).runtime = proto3;
(SyncRepositoryResponse as MutableMessageType<SyncRepositoryResponse>).typeName = "aiserver.v1.SyncRepositoryResponse";
(SyncRepositoryResponse as MutableMessageType<SyncRepositoryResponse>).fields = proto3.util.newFieldList(() => []);
var StartUploadRepoRequest$Runtime = (() => class _StartUploadRepoRequest extends Message<_StartUploadRepoRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_StartUploadRepoRequest>) {
    super();
    proto3.util.initPartial(data, this as _StartUploadRepoRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartUploadRepoRequest {
    return new _StartUploadRepoRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartUploadRepoRequest {
    return new _StartUploadRepoRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartUploadRepoRequest {
    return new _StartUploadRepoRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StartUploadRepoRequest | PlainMessage<_StartUploadRepoRequest> | undefined | null, b2: _StartUploadRepoRequest | PlainMessage<_StartUploadRepoRequest> | undefined | null): boolean {
    return proto3.util.equals(_StartUploadRepoRequest as unknown as MessageType<_StartUploadRepoRequest>, a, b2);
  }
})();
export type StartUploadRepoRequest = InstanceType<typeof StartUploadRepoRequest$Runtime>;
var StartUploadRepoRequest: MessageType<StartUploadRepoRequest> = StartUploadRepoRequest$Runtime as unknown as MessageType<StartUploadRepoRequest>;
(StartUploadRepoRequest as MutableMessageType<StartUploadRepoRequest>).runtime = proto3;
(StartUploadRepoRequest as MutableMessageType<StartUploadRepoRequest>).typeName = "aiserver.v1.StartUploadRepoRequest";
(StartUploadRepoRequest as MutableMessageType<StartUploadRepoRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var StartUploadRepoResponse$Runtime = (() => class _StartUploadRepoResponse extends Message<_StartUploadRepoResponse> {
  declare status: StartUploadRepoResponse_Status;
  declare seenFiles: string[];
  constructor(data?: PartialMessage<_StartUploadRepoResponse>) {
    super();
    this.status = StartUploadRepoResponse_Status.UNSPECIFIED;
    this.seenFiles = [];
    proto3.util.initPartial(data, this as _StartUploadRepoResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartUploadRepoResponse {
    return new _StartUploadRepoResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartUploadRepoResponse {
    return new _StartUploadRepoResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartUploadRepoResponse {
    return new _StartUploadRepoResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StartUploadRepoResponse | PlainMessage<_StartUploadRepoResponse> | undefined | null, b2: _StartUploadRepoResponse | PlainMessage<_StartUploadRepoResponse> | undefined | null): boolean {
    return proto3.util.equals(_StartUploadRepoResponse as unknown as MessageType<_StartUploadRepoResponse>, a, b2);
  }
})();
export type StartUploadRepoResponse = InstanceType<typeof StartUploadRepoResponse$Runtime>;
var StartUploadRepoResponse: MessageType<StartUploadRepoResponse> = StartUploadRepoResponse$Runtime as unknown as MessageType<StartUploadRepoResponse>;
(StartUploadRepoResponse as MutableMessageType<StartUploadRepoResponse>).runtime = proto3;
(StartUploadRepoResponse as MutableMessageType<StartUploadRepoResponse>).typeName = "aiserver.v1.StartUploadRepoResponse";
(StartUploadRepoResponse as MutableMessageType<StartUploadRepoResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(StartUploadRepoResponse_Status) },
  { no: 2, name: "seen_files", kind: "scalar", T: 9, repeated: true }
]);
(function(StartUploadRepoResponse_Status2) {
  StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
  StartUploadRepoResponse_Status2[StartUploadRepoResponse_Status2["ALREADY_EXISTS"] = 3] = "ALREADY_EXISTS";
})(StartUploadRepoResponse_Status! || (StartUploadRepoResponse_Status = {} as typeof StartUploadRepoResponse_Status));
proto3.util.setEnumType(StartUploadRepoResponse_Status, "aiserver.v1.StartUploadRepoResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_ALREADY_EXISTS" }
]);
var UploadFileRequest$Runtime = (() => class _UploadFileRequest extends Message<_UploadFileRequest> {
  declare repository?: RepositoryInfo;
  declare file?: File2;
  declare commitSha: string;
  declare queueId: string;
  constructor(data?: PartialMessage<_UploadFileRequest>) {
    super();
    this.commitSha = "";
    this.queueId = "";
    proto3.util.initPartial(data, this as _UploadFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UploadFileRequest {
    return new _UploadFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UploadFileRequest {
    return new _UploadFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UploadFileRequest {
    return new _UploadFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UploadFileRequest | PlainMessage<_UploadFileRequest> | undefined | null, b2: _UploadFileRequest | PlainMessage<_UploadFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadFileRequest as unknown as MessageType<_UploadFileRequest>, a, b2);
  }
})();
export type UploadFileRequest = InstanceType<typeof UploadFileRequest$Runtime>;
var UploadFileRequest: MessageType<UploadFileRequest> = UploadFileRequest$Runtime as unknown as MessageType<UploadFileRequest>;
(UploadFileRequest as MutableMessageType<UploadFileRequest>).runtime = proto3;
(UploadFileRequest as MutableMessageType<UploadFileRequest>).typeName = "aiserver.v1.UploadFileRequest";
(UploadFileRequest as MutableMessageType<UploadFileRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  { no: 2, name: "file", kind: "message", T: File2 },
  {
    no: 3,
    name: "commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "queue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UploadFileResponse$Runtime = (() => class _UploadFileResponse extends Message<_UploadFileResponse> {
  declare status: UploadFileResponse_Status;
  constructor(data?: PartialMessage<_UploadFileResponse>) {
    super();
    this.status = UploadFileResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UploadFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UploadFileResponse {
    return new _UploadFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UploadFileResponse {
    return new _UploadFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UploadFileResponse {
    return new _UploadFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UploadFileResponse | PlainMessage<_UploadFileResponse> | undefined | null, b2: _UploadFileResponse | PlainMessage<_UploadFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadFileResponse as unknown as MessageType<_UploadFileResponse>, a, b2);
  }
})();
export type UploadFileResponse = InstanceType<typeof UploadFileResponse$Runtime>;
var UploadFileResponse: MessageType<UploadFileResponse> = UploadFileResponse$Runtime as unknown as MessageType<UploadFileResponse>;
(UploadFileResponse as MutableMessageType<UploadFileResponse>).runtime = proto3;
(UploadFileResponse as MutableMessageType<UploadFileResponse>).typeName = "aiserver.v1.UploadFileResponse";
(UploadFileResponse as MutableMessageType<UploadFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(UploadFileResponse_Status) }
]);
(function(UploadFileResponse_Status2) {
  UploadFileResponse_Status2[UploadFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UploadFileResponse_Status2[UploadFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  UploadFileResponse_Status2[UploadFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
  UploadFileResponse_Status2[UploadFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
  UploadFileResponse_Status2[UploadFileResponse_Status2["QUEUE_BACKED_UP"] = 4] = "QUEUE_BACKED_UP";
})(UploadFileResponse_Status! || (UploadFileResponse_Status = {} as typeof UploadFileResponse_Status));
proto3.util.setEnumType(UploadFileResponse_Status, "aiserver.v1.UploadFileResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_EXPECTED_FAILURE" },
  { no: 4, name: "STATUS_QUEUE_BACKED_UP" }
]);
var FinishUploadRepoRequest$Runtime = (() => class _FinishUploadRepoRequest extends Message<_FinishUploadRepoRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_FinishUploadRepoRequest>) {
    super();
    proto3.util.initPartial(data, this as _FinishUploadRepoRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FinishUploadRepoRequest {
    return new _FinishUploadRepoRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FinishUploadRepoRequest {
    return new _FinishUploadRepoRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FinishUploadRepoRequest {
    return new _FinishUploadRepoRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FinishUploadRepoRequest | PlainMessage<_FinishUploadRepoRequest> | undefined | null, b2: _FinishUploadRepoRequest | PlainMessage<_FinishUploadRepoRequest> | undefined | null): boolean {
    return proto3.util.equals(_FinishUploadRepoRequest as unknown as MessageType<_FinishUploadRepoRequest>, a, b2);
  }
})();
export type FinishUploadRepoRequest = InstanceType<typeof FinishUploadRepoRequest$Runtime>;
var FinishUploadRepoRequest: MessageType<FinishUploadRepoRequest> = FinishUploadRepoRequest$Runtime as unknown as MessageType<FinishUploadRepoRequest>;
(FinishUploadRepoRequest as MutableMessageType<FinishUploadRepoRequest>).runtime = proto3;
(FinishUploadRepoRequest as MutableMessageType<FinishUploadRepoRequest>).typeName = "aiserver.v1.FinishUploadRepoRequest";
(FinishUploadRepoRequest as MutableMessageType<FinishUploadRepoRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var FinishUploadRepoResponse$Runtime = (() => class _FinishUploadRepoResponse extends Message<_FinishUploadRepoResponse> {
  declare status: FinishUploadRepoResponse_Status;
  constructor(data?: PartialMessage<_FinishUploadRepoResponse>) {
    super();
    this.status = FinishUploadRepoResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FinishUploadRepoResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FinishUploadRepoResponse {
    return new _FinishUploadRepoResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FinishUploadRepoResponse {
    return new _FinishUploadRepoResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FinishUploadRepoResponse {
    return new _FinishUploadRepoResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FinishUploadRepoResponse | PlainMessage<_FinishUploadRepoResponse> | undefined | null, b2: _FinishUploadRepoResponse | PlainMessage<_FinishUploadRepoResponse> | undefined | null): boolean {
    return proto3.util.equals(_FinishUploadRepoResponse as unknown as MessageType<_FinishUploadRepoResponse>, a, b2);
  }
})();
export type FinishUploadRepoResponse = InstanceType<typeof FinishUploadRepoResponse$Runtime>;
var FinishUploadRepoResponse: MessageType<FinishUploadRepoResponse> = FinishUploadRepoResponse$Runtime as unknown as MessageType<FinishUploadRepoResponse>;
(FinishUploadRepoResponse as MutableMessageType<FinishUploadRepoResponse>).runtime = proto3;
(FinishUploadRepoResponse as MutableMessageType<FinishUploadRepoResponse>).typeName = "aiserver.v1.FinishUploadRepoResponse";
(FinishUploadRepoResponse as MutableMessageType<FinishUploadRepoResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FinishUploadRepoResponse_Status) }
]);
(function(FinishUploadRepoResponse_Status2) {
  FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  FinishUploadRepoResponse_Status2[FinishUploadRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(FinishUploadRepoResponse_Status! || (FinishUploadRepoResponse_Status = {} as typeof FinishUploadRepoResponse_Status));
proto3.util.setEnumType(FinishUploadRepoResponse_Status, "aiserver.v1.FinishUploadRepoResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" }
]);
var StartUpdateRepoRequest$Runtime = (() => class _StartUpdateRepoRequest extends Message<_StartUpdateRepoRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_StartUpdateRepoRequest>) {
    super();
    proto3.util.initPartial(data, this as _StartUpdateRepoRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartUpdateRepoRequest {
    return new _StartUpdateRepoRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartUpdateRepoRequest {
    return new _StartUpdateRepoRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartUpdateRepoRequest {
    return new _StartUpdateRepoRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _StartUpdateRepoRequest | PlainMessage<_StartUpdateRepoRequest> | undefined | null, b2: _StartUpdateRepoRequest | PlainMessage<_StartUpdateRepoRequest> | undefined | null): boolean {
    return proto3.util.equals(_StartUpdateRepoRequest as unknown as MessageType<_StartUpdateRepoRequest>, a, b2);
  }
})();
export type StartUpdateRepoRequest = InstanceType<typeof StartUpdateRepoRequest$Runtime>;
var StartUpdateRepoRequest: MessageType<StartUpdateRepoRequest> = StartUpdateRepoRequest$Runtime as unknown as MessageType<StartUpdateRepoRequest>;
(StartUpdateRepoRequest as MutableMessageType<StartUpdateRepoRequest>).runtime = proto3;
(StartUpdateRepoRequest as MutableMessageType<StartUpdateRepoRequest>).typeName = "aiserver.v1.StartUpdateRepoRequest";
(StartUpdateRepoRequest as MutableMessageType<StartUpdateRepoRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var StartUpdateRepoResponse$Runtime = (() => class _StartUpdateRepoResponse extends Message<_StartUpdateRepoResponse> {
  declare status: StartUpdateRepoResponse_Status;
  constructor(data?: PartialMessage<_StartUpdateRepoResponse>) {
    super();
    this.status = StartUpdateRepoResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _StartUpdateRepoResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartUpdateRepoResponse {
    return new _StartUpdateRepoResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartUpdateRepoResponse {
    return new _StartUpdateRepoResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartUpdateRepoResponse {
    return new _StartUpdateRepoResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StartUpdateRepoResponse | PlainMessage<_StartUpdateRepoResponse> | undefined | null, b2: _StartUpdateRepoResponse | PlainMessage<_StartUpdateRepoResponse> | undefined | null): boolean {
    return proto3.util.equals(_StartUpdateRepoResponse as unknown as MessageType<_StartUpdateRepoResponse>, a, b2);
  }
})();
export type StartUpdateRepoResponse = InstanceType<typeof StartUpdateRepoResponse$Runtime>;
var StartUpdateRepoResponse: MessageType<StartUpdateRepoResponse> = StartUpdateRepoResponse$Runtime as unknown as MessageType<StartUpdateRepoResponse>;
(StartUpdateRepoResponse as MutableMessageType<StartUpdateRepoResponse>).runtime = proto3;
(StartUpdateRepoResponse as MutableMessageType<StartUpdateRepoResponse>).typeName = "aiserver.v1.StartUpdateRepoResponse";
(StartUpdateRepoResponse as MutableMessageType<StartUpdateRepoResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(StartUpdateRepoResponse_Status) }
]);
(function(StartUpdateRepoResponse_Status2) {
  StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
  StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["NOT_FOUND"] = 3] = "NOT_FOUND";
  StartUpdateRepoResponse_Status2[StartUpdateRepoResponse_Status2["ALREADY_SYNCING"] = 4] = "ALREADY_SYNCING";
})(StartUpdateRepoResponse_Status! || (StartUpdateRepoResponse_Status = {} as typeof StartUpdateRepoResponse_Status));
proto3.util.setEnumType(StartUpdateRepoResponse_Status, "aiserver.v1.StartUpdateRepoResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_NOT_FOUND" },
  { no: 4, name: "STATUS_ALREADY_SYNCING" }
]);
var UpdateFileRequest$Runtime = (() => class _UpdateFileRequest extends Message<_UpdateFileRequest> {
  declare repository?: RepositoryInfo;
  declare addedFile?: File2;
  declare deletedFilePath?: string;
  declare commitSha: string;
  declare queueId: string;
  constructor(data?: PartialMessage<_UpdateFileRequest>) {
    super();
    this.commitSha = "";
    this.queueId = "";
    proto3.util.initPartial(data, this as _UpdateFileRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFileRequest {
    return new _UpdateFileRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFileRequest {
    return new _UpdateFileRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFileRequest {
    return new _UpdateFileRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFileRequest | PlainMessage<_UpdateFileRequest> | undefined | null, b2: _UpdateFileRequest | PlainMessage<_UpdateFileRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFileRequest as unknown as MessageType<_UpdateFileRequest>, a, b2);
  }
})();
export type UpdateFileRequest = InstanceType<typeof UpdateFileRequest$Runtime>;
var UpdateFileRequest: MessageType<UpdateFileRequest> = UpdateFileRequest$Runtime as unknown as MessageType<UpdateFileRequest>;
(UpdateFileRequest as MutableMessageType<UpdateFileRequest>).runtime = proto3;
(UpdateFileRequest as MutableMessageType<UpdateFileRequest>).typeName = "aiserver.v1.UpdateFileRequest";
(UpdateFileRequest as MutableMessageType<UpdateFileRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  { no: 2, name: "added_file", kind: "message", T: File2 },
  { no: 3, name: "deleted_file_path", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "commit_sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "queue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateFileResponse$Runtime = (() => class _UpdateFileResponse extends Message<_UpdateFileResponse> {
  declare status: UpdateFileResponse_Status;
  constructor(data?: PartialMessage<_UpdateFileResponse>) {
    super();
    this.status = UpdateFileResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpdateFileResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateFileResponse {
    return new _UpdateFileResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateFileResponse {
    return new _UpdateFileResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateFileResponse {
    return new _UpdateFileResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateFileResponse | PlainMessage<_UpdateFileResponse> | undefined | null, b2: _UpdateFileResponse | PlainMessage<_UpdateFileResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateFileResponse as unknown as MessageType<_UpdateFileResponse>, a, b2);
  }
})();
export type UpdateFileResponse = InstanceType<typeof UpdateFileResponse$Runtime>;
var UpdateFileResponse: MessageType<UpdateFileResponse> = UpdateFileResponse$Runtime as unknown as MessageType<UpdateFileResponse>;
(UpdateFileResponse as MutableMessageType<UpdateFileResponse>).runtime = proto3;
(UpdateFileResponse as MutableMessageType<UpdateFileResponse>).typeName = "aiserver.v1.UpdateFileResponse";
(UpdateFileResponse as MutableMessageType<UpdateFileResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(UpdateFileResponse_Status) }
]);
(function(UpdateFileResponse_Status2) {
  UpdateFileResponse_Status2[UpdateFileResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UpdateFileResponse_Status2[UpdateFileResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  UpdateFileResponse_Status2[UpdateFileResponse_Status2["FAILURE"] = 2] = "FAILURE";
  UpdateFileResponse_Status2[UpdateFileResponse_Status2["EXPECTED_FAILURE"] = 3] = "EXPECTED_FAILURE";
  UpdateFileResponse_Status2[UpdateFileResponse_Status2["QUEUE_BACKED_UP"] = 4] = "QUEUE_BACKED_UP";
})(UpdateFileResponse_Status! || (UpdateFileResponse_Status = {} as typeof UpdateFileResponse_Status));
proto3.util.setEnumType(UpdateFileResponse_Status, "aiserver.v1.UpdateFileResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_EXPECTED_FAILURE" },
  { no: 4, name: "STATUS_QUEUE_BACKED_UP" }
]);
var FinishUpdateRepoRequest$Runtime = (() => class _FinishUpdateRepoRequest extends Message<_FinishUpdateRepoRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_FinishUpdateRepoRequest>) {
    super();
    proto3.util.initPartial(data, this as _FinishUpdateRepoRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FinishUpdateRepoRequest {
    return new _FinishUpdateRepoRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FinishUpdateRepoRequest {
    return new _FinishUpdateRepoRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FinishUpdateRepoRequest {
    return new _FinishUpdateRepoRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _FinishUpdateRepoRequest | PlainMessage<_FinishUpdateRepoRequest> | undefined | null, b2: _FinishUpdateRepoRequest | PlainMessage<_FinishUpdateRepoRequest> | undefined | null): boolean {
    return proto3.util.equals(_FinishUpdateRepoRequest as unknown as MessageType<_FinishUpdateRepoRequest>, a, b2);
  }
})();
export type FinishUpdateRepoRequest = InstanceType<typeof FinishUpdateRepoRequest$Runtime>;
var FinishUpdateRepoRequest: MessageType<FinishUpdateRepoRequest> = FinishUpdateRepoRequest$Runtime as unknown as MessageType<FinishUpdateRepoRequest>;
(FinishUpdateRepoRequest as MutableMessageType<FinishUpdateRepoRequest>).runtime = proto3;
(FinishUpdateRepoRequest as MutableMessageType<FinishUpdateRepoRequest>).typeName = "aiserver.v1.FinishUpdateRepoRequest";
(FinishUpdateRepoRequest as MutableMessageType<FinishUpdateRepoRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var FinishUpdateRepoResponse$Runtime = (() => class _FinishUpdateRepoResponse extends Message<_FinishUpdateRepoResponse> {
  declare status: FinishUpdateRepoResponse_Status;
  constructor(data?: PartialMessage<_FinishUpdateRepoResponse>) {
    super();
    this.status = FinishUpdateRepoResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _FinishUpdateRepoResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FinishUpdateRepoResponse {
    return new _FinishUpdateRepoResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FinishUpdateRepoResponse {
    return new _FinishUpdateRepoResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FinishUpdateRepoResponse {
    return new _FinishUpdateRepoResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _FinishUpdateRepoResponse | PlainMessage<_FinishUpdateRepoResponse> | undefined | null, b2: _FinishUpdateRepoResponse | PlainMessage<_FinishUpdateRepoResponse> | undefined | null): boolean {
    return proto3.util.equals(_FinishUpdateRepoResponse as unknown as MessageType<_FinishUpdateRepoResponse>, a, b2);
  }
})();
export type FinishUpdateRepoResponse = InstanceType<typeof FinishUpdateRepoResponse$Runtime>;
var FinishUpdateRepoResponse: MessageType<FinishUpdateRepoResponse> = FinishUpdateRepoResponse$Runtime as unknown as MessageType<FinishUpdateRepoResponse>;
(FinishUpdateRepoResponse as MutableMessageType<FinishUpdateRepoResponse>).runtime = proto3;
(FinishUpdateRepoResponse as MutableMessageType<FinishUpdateRepoResponse>).typeName = "aiserver.v1.FinishUpdateRepoResponse";
(FinishUpdateRepoResponse as MutableMessageType<FinishUpdateRepoResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(FinishUpdateRepoResponse_Status) }
]);
(function(FinishUpdateRepoResponse_Status2) {
  FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  FinishUpdateRepoResponse_Status2[FinishUpdateRepoResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(FinishUpdateRepoResponse_Status! || (FinishUpdateRepoResponse_Status = {} as typeof FinishUpdateRepoResponse_Status));
proto3.util.setEnumType(FinishUpdateRepoResponse_Status, "aiserver.v1.FinishUpdateRepoResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" }
]);
var BatchRepositoryStatusRequest$Runtime = (() => class _BatchRepositoryStatusRequest extends Message<_BatchRepositoryStatusRequest> {
  declare requests: RepositoryStatusRequest[];
  constructor(data?: PartialMessage<_BatchRepositoryStatusRequest>) {
    super();
    this.requests = [];
    proto3.util.initPartial(data, this as _BatchRepositoryStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchRepositoryStatusRequest {
    return new _BatchRepositoryStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchRepositoryStatusRequest {
    return new _BatchRepositoryStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchRepositoryStatusRequest {
    return new _BatchRepositoryStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchRepositoryStatusRequest | PlainMessage<_BatchRepositoryStatusRequest> | undefined | null, b2: _BatchRepositoryStatusRequest | PlainMessage<_BatchRepositoryStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_BatchRepositoryStatusRequest as unknown as MessageType<_BatchRepositoryStatusRequest>, a, b2);
  }
})();
export type BatchRepositoryStatusRequest = InstanceType<typeof BatchRepositoryStatusRequest$Runtime>;
var BatchRepositoryStatusRequest: MessageType<BatchRepositoryStatusRequest> = BatchRepositoryStatusRequest$Runtime as unknown as MessageType<BatchRepositoryStatusRequest>;
(BatchRepositoryStatusRequest as MutableMessageType<BatchRepositoryStatusRequest>).runtime = proto3;
(BatchRepositoryStatusRequest as MutableMessageType<BatchRepositoryStatusRequest>).typeName = "aiserver.v1.BatchRepositoryStatusRequest";
(BatchRepositoryStatusRequest as MutableMessageType<BatchRepositoryStatusRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "requests", kind: "message", T: RepositoryStatusRequest, repeated: true }
]);
var BatchRepositoryStatusResponse$Runtime = (() => class _BatchRepositoryStatusResponse extends Message<_BatchRepositoryStatusResponse> {
  declare responses: RepositoryStatusResponse[];
  constructor(data?: PartialMessage<_BatchRepositoryStatusResponse>) {
    super();
    this.responses = [];
    proto3.util.initPartial(data, this as _BatchRepositoryStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BatchRepositoryStatusResponse {
    return new _BatchRepositoryStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BatchRepositoryStatusResponse {
    return new _BatchRepositoryStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BatchRepositoryStatusResponse {
    return new _BatchRepositoryStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _BatchRepositoryStatusResponse | PlainMessage<_BatchRepositoryStatusResponse> | undefined | null, b2: _BatchRepositoryStatusResponse | PlainMessage<_BatchRepositoryStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_BatchRepositoryStatusResponse as unknown as MessageType<_BatchRepositoryStatusResponse>, a, b2);
  }
})();
export type BatchRepositoryStatusResponse = InstanceType<typeof BatchRepositoryStatusResponse$Runtime>;
var BatchRepositoryStatusResponse: MessageType<BatchRepositoryStatusResponse> = BatchRepositoryStatusResponse$Runtime as unknown as MessageType<BatchRepositoryStatusResponse>;
(BatchRepositoryStatusResponse as MutableMessageType<BatchRepositoryStatusResponse>).runtime = proto3;
(BatchRepositoryStatusResponse as MutableMessageType<BatchRepositoryStatusResponse>).typeName = "aiserver.v1.BatchRepositoryStatusResponse";
(BatchRepositoryStatusResponse as MutableMessageType<BatchRepositoryStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "responses", kind: "message", T: RepositoryStatusResponse, repeated: true }
]);
var UnsubscribeRepositoryRequest$Runtime = (() => class _UnsubscribeRepositoryRequest extends Message<_UnsubscribeRepositoryRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_UnsubscribeRepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this as _UnsubscribeRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UnsubscribeRepositoryRequest {
    return new _UnsubscribeRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UnsubscribeRepositoryRequest {
    return new _UnsubscribeRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UnsubscribeRepositoryRequest {
    return new _UnsubscribeRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UnsubscribeRepositoryRequest | PlainMessage<_UnsubscribeRepositoryRequest> | undefined | null, b2: _UnsubscribeRepositoryRequest | PlainMessage<_UnsubscribeRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_UnsubscribeRepositoryRequest as unknown as MessageType<_UnsubscribeRepositoryRequest>, a, b2);
  }
})();
export type UnsubscribeRepositoryRequest = InstanceType<typeof UnsubscribeRepositoryRequest$Runtime>;
var UnsubscribeRepositoryRequest: MessageType<UnsubscribeRepositoryRequest> = UnsubscribeRepositoryRequest$Runtime as unknown as MessageType<UnsubscribeRepositoryRequest>;
(UnsubscribeRepositoryRequest as MutableMessageType<UnsubscribeRepositoryRequest>).runtime = proto3;
(UnsubscribeRepositoryRequest as MutableMessageType<UnsubscribeRepositoryRequest>).typeName = "aiserver.v1.UnsubscribeRepositoryRequest";
(UnsubscribeRepositoryRequest as MutableMessageType<UnsubscribeRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var UnsubscribeRepositoryResponse$Runtime = (() => class _UnsubscribeRepositoryResponse extends Message<_UnsubscribeRepositoryResponse> {
  declare status: UnsubscribeRepositoryResponse_Status;
  constructor(data?: PartialMessage<_UnsubscribeRepositoryResponse>) {
    super();
    this.status = UnsubscribeRepositoryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UnsubscribeRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UnsubscribeRepositoryResponse {
    return new _UnsubscribeRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UnsubscribeRepositoryResponse {
    return new _UnsubscribeRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UnsubscribeRepositoryResponse {
    return new _UnsubscribeRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UnsubscribeRepositoryResponse | PlainMessage<_UnsubscribeRepositoryResponse> | undefined | null, b2: _UnsubscribeRepositoryResponse | PlainMessage<_UnsubscribeRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_UnsubscribeRepositoryResponse as unknown as MessageType<_UnsubscribeRepositoryResponse>, a, b2);
  }
})();
export type UnsubscribeRepositoryResponse = InstanceType<typeof UnsubscribeRepositoryResponse$Runtime>;
var UnsubscribeRepositoryResponse: MessageType<UnsubscribeRepositoryResponse> = UnsubscribeRepositoryResponse$Runtime as unknown as MessageType<UnsubscribeRepositoryResponse>;
(UnsubscribeRepositoryResponse as MutableMessageType<UnsubscribeRepositoryResponse>).runtime = proto3;
(UnsubscribeRepositoryResponse as MutableMessageType<UnsubscribeRepositoryResponse>).typeName = "aiserver.v1.UnsubscribeRepositoryResponse";
(UnsubscribeRepositoryResponse as MutableMessageType<UnsubscribeRepositoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(UnsubscribeRepositoryResponse_Status) }
]);
(function(UnsubscribeRepositoryResponse_Status2) {
  UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
  UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["NOT_SUBSCRIBED"] = 2] = "NOT_SUBSCRIBED";
  UnsubscribeRepositoryResponse_Status2[UnsubscribeRepositoryResponse_Status2["SUCCESS"] = 3] = "SUCCESS";
})(UnsubscribeRepositoryResponse_Status! || (UnsubscribeRepositoryResponse_Status = {} as typeof UnsubscribeRepositoryResponse_Status));
proto3.util.setEnumType(UnsubscribeRepositoryResponse_Status, "aiserver.v1.UnsubscribeRepositoryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_NOT_FOUND" },
  { no: 2, name: "STATUS_NOT_SUBSCRIBED" },
  { no: 3, name: "STATUS_SUCCESS" }
]);
var LogoutRequest$Runtime = (() => class _LogoutRequest extends Message<_LogoutRequest> {
  constructor(data?: PartialMessage<_LogoutRequest>) {
    super();
    proto3.util.initPartial(data, this as _LogoutRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LogoutRequest {
    return new _LogoutRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LogoutRequest {
    return new _LogoutRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LogoutRequest {
    return new _LogoutRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LogoutRequest | PlainMessage<_LogoutRequest> | undefined | null, b2: _LogoutRequest | PlainMessage<_LogoutRequest> | undefined | null): boolean {
    return proto3.util.equals(_LogoutRequest as unknown as MessageType<_LogoutRequest>, a, b2);
  }
})();
export type LogoutRequest = InstanceType<typeof LogoutRequest$Runtime>;
var LogoutRequest: MessageType<LogoutRequest> = LogoutRequest$Runtime as unknown as MessageType<LogoutRequest>;
(LogoutRequest as MutableMessageType<LogoutRequest>).runtime = proto3;
(LogoutRequest as MutableMessageType<LogoutRequest>).typeName = "aiserver.v1.LogoutRequest";
(LogoutRequest as MutableMessageType<LogoutRequest>).fields = proto3.util.newFieldList(() => []);
var LogoutResponse$Runtime = (() => class _LogoutResponse extends Message<_LogoutResponse> {
  declare status: LogoutResponse_Status;
  constructor(data?: PartialMessage<_LogoutResponse>) {
    super();
    this.status = LogoutResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _LogoutResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LogoutResponse {
    return new _LogoutResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LogoutResponse {
    return new _LogoutResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LogoutResponse {
    return new _LogoutResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LogoutResponse | PlainMessage<_LogoutResponse> | undefined | null, b2: _LogoutResponse | PlainMessage<_LogoutResponse> | undefined | null): boolean {
    return proto3.util.equals(_LogoutResponse as unknown as MessageType<_LogoutResponse>, a, b2);
  }
})();
export type LogoutResponse = InstanceType<typeof LogoutResponse$Runtime>;
var LogoutResponse: MessageType<LogoutResponse> = LogoutResponse$Runtime as unknown as MessageType<LogoutResponse>;
(LogoutResponse as MutableMessageType<LogoutResponse>).runtime = proto3;
(LogoutResponse as MutableMessageType<LogoutResponse>).typeName = "aiserver.v1.LogoutResponse";
(LogoutResponse as MutableMessageType<LogoutResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(LogoutResponse_Status) }
]);
(function(LogoutResponse_Status2) {
  LogoutResponse_Status2[LogoutResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  LogoutResponse_Status2[LogoutResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  LogoutResponse_Status2[LogoutResponse_Status2["FAILURE"] = 2] = "FAILURE";
  LogoutResponse_Status2[LogoutResponse_Status2["NOT_LOGGED_IN"] = 3] = "NOT_LOGGED_IN";
})(LogoutResponse_Status! || (LogoutResponse_Status = {} as typeof LogoutResponse_Status));
proto3.util.setEnumType(LogoutResponse_Status, "aiserver.v1.LogoutResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_NOT_LOGGED_IN" }
]);
var RemoveRepositoryRequest$Runtime = (() => class _RemoveRepositoryRequest extends Message<_RemoveRepositoryRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_RemoveRepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this as _RemoveRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RemoveRepositoryRequest {
    return new _RemoveRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RemoveRepositoryRequest {
    return new _RemoveRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RemoveRepositoryRequest {
    return new _RemoveRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RemoveRepositoryRequest | PlainMessage<_RemoveRepositoryRequest> | undefined | null, b2: _RemoveRepositoryRequest | PlainMessage<_RemoveRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_RemoveRepositoryRequest as unknown as MessageType<_RemoveRepositoryRequest>, a, b2);
  }
})();
export type RemoveRepositoryRequest = InstanceType<typeof RemoveRepositoryRequest$Runtime>;
var RemoveRepositoryRequest: MessageType<RemoveRepositoryRequest> = RemoveRepositoryRequest$Runtime as unknown as MessageType<RemoveRepositoryRequest>;
(RemoveRepositoryRequest as MutableMessageType<RemoveRepositoryRequest>).runtime = proto3;
(RemoveRepositoryRequest as MutableMessageType<RemoveRepositoryRequest>).typeName = "aiserver.v1.RemoveRepositoryRequest";
(RemoveRepositoryRequest as MutableMessageType<RemoveRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var RemoveRepositoryResponse$Runtime = (() => class _RemoveRepositoryResponse extends Message<_RemoveRepositoryResponse> {
  declare status: RemoveRepositoryResponse_Status;
  constructor(data?: PartialMessage<_RemoveRepositoryResponse>) {
    super();
    this.status = RemoveRepositoryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RemoveRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RemoveRepositoryResponse {
    return new _RemoveRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RemoveRepositoryResponse {
    return new _RemoveRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RemoveRepositoryResponse {
    return new _RemoveRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RemoveRepositoryResponse | PlainMessage<_RemoveRepositoryResponse> | undefined | null, b2: _RemoveRepositoryResponse | PlainMessage<_RemoveRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_RemoveRepositoryResponse as unknown as MessageType<_RemoveRepositoryResponse>, a, b2);
  }
})();
export type RemoveRepositoryResponse = InstanceType<typeof RemoveRepositoryResponse$Runtime>;
var RemoveRepositoryResponse: MessageType<RemoveRepositoryResponse> = RemoveRepositoryResponse$Runtime as unknown as MessageType<RemoveRepositoryResponse>;
(RemoveRepositoryResponse as MutableMessageType<RemoveRepositoryResponse>).runtime = proto3;
(RemoveRepositoryResponse as MutableMessageType<RemoveRepositoryResponse>).typeName = "aiserver.v1.RemoveRepositoryResponse";
(RemoveRepositoryResponse as MutableMessageType<RemoveRepositoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(RemoveRepositoryResponse_Status) }
]);
(function(RemoveRepositoryResponse_Status2) {
  RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
  RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
  RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["STARTED"] = 3] = "STARTED";
  RemoveRepositoryResponse_Status2[RemoveRepositoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(RemoveRepositoryResponse_Status! || (RemoveRepositoryResponse_Status = {} as typeof RemoveRepositoryResponse_Status));
proto3.util.setEnumType(RemoveRepositoryResponse_Status, "aiserver.v1.RemoveRepositoryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_NOT_FOUND" },
  { no: 2, name: "STATUS_NOT_AUTHORIZED" },
  { no: 3, name: "STATUS_STARTED" },
  { no: 4, name: "STATUS_SUCCESS" }
]);
var SubscribeRepositoryRequest$Runtime = (() => class _SubscribeRepositoryRequest extends Message<_SubscribeRepositoryRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_SubscribeRepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this as _SubscribeRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubscribeRepositoryRequest {
    return new _SubscribeRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubscribeRepositoryRequest {
    return new _SubscribeRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubscribeRepositoryRequest {
    return new _SubscribeRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SubscribeRepositoryRequest | PlainMessage<_SubscribeRepositoryRequest> | undefined | null, b2: _SubscribeRepositoryRequest | PlainMessage<_SubscribeRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_SubscribeRepositoryRequest as unknown as MessageType<_SubscribeRepositoryRequest>, a, b2);
  }
})();
export type SubscribeRepositoryRequest = InstanceType<typeof SubscribeRepositoryRequest$Runtime>;
var SubscribeRepositoryRequest: MessageType<SubscribeRepositoryRequest> = SubscribeRepositoryRequest$Runtime as unknown as MessageType<SubscribeRepositoryRequest>;
(SubscribeRepositoryRequest as MutableMessageType<SubscribeRepositoryRequest>).runtime = proto3;
(SubscribeRepositoryRequest as MutableMessageType<SubscribeRepositoryRequest>).typeName = "aiserver.v1.SubscribeRepositoryRequest";
(SubscribeRepositoryRequest as MutableMessageType<SubscribeRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var SubscribeRepositoryResponse$Runtime = (() => class _SubscribeRepositoryResponse extends Message<_SubscribeRepositoryResponse> {
  declare status: SubscribeRepositoryResponse_Status;
  constructor(data?: PartialMessage<_SubscribeRepositoryResponse>) {
    super();
    this.status = SubscribeRepositoryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SubscribeRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubscribeRepositoryResponse {
    return new _SubscribeRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubscribeRepositoryResponse {
    return new _SubscribeRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubscribeRepositoryResponse {
    return new _SubscribeRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubscribeRepositoryResponse | PlainMessage<_SubscribeRepositoryResponse> | undefined | null, b2: _SubscribeRepositoryResponse | PlainMessage<_SubscribeRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubscribeRepositoryResponse as unknown as MessageType<_SubscribeRepositoryResponse>, a, b2);
  }
})();
export type SubscribeRepositoryResponse = InstanceType<typeof SubscribeRepositoryResponse$Runtime>;
var SubscribeRepositoryResponse: MessageType<SubscribeRepositoryResponse> = SubscribeRepositoryResponse$Runtime as unknown as MessageType<SubscribeRepositoryResponse>;
(SubscribeRepositoryResponse as MutableMessageType<SubscribeRepositoryResponse>).runtime = proto3;
(SubscribeRepositoryResponse as MutableMessageType<SubscribeRepositoryResponse>).typeName = "aiserver.v1.SubscribeRepositoryResponse";
(SubscribeRepositoryResponse as MutableMessageType<SubscribeRepositoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(SubscribeRepositoryResponse_Status) }
]);
(function(SubscribeRepositoryResponse_Status2) {
  SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
  SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
  SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["ALREADY_SUBSCRIBED"] = 3] = "ALREADY_SUBSCRIBED";
  SubscribeRepositoryResponse_Status2[SubscribeRepositoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(SubscribeRepositoryResponse_Status! || (SubscribeRepositoryResponse_Status = {} as typeof SubscribeRepositoryResponse_Status));
proto3.util.setEnumType(SubscribeRepositoryResponse_Status, "aiserver.v1.SubscribeRepositoryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_NOT_FOUND" },
  { no: 2, name: "STATUS_NOT_AUTHORIZED" },
  { no: 3, name: "STATUS_ALREADY_SUBSCRIBED" },
  { no: 4, name: "STATUS_SUCCESS" }
]);
var SearchRepositoryRequest$Runtime = (() => class _SearchRepositoryRequest extends Message<_SearchRepositoryRequest> {
  declare query: string;
  declare repository?: RepositoryInfo;
  declare topK: number;
  declare modelDetails?: ModelDetails;
  declare rerank: boolean;
  declare contextCacheRequest?: boolean;
  declare globFilter?: string;
  declare notGlobFilter?: string;
  declare raceNRequests?: number;
  declare queryOnlyRepoAccess?: QueryOnlyRepoAccess;
  constructor(data?: PartialMessage<_SearchRepositoryRequest>) {
    super();
    this.query = "";
    this.topK = 0;
    this.rerank = false;
    proto3.util.initPartial(data, this as _SearchRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchRepositoryRequest {
    return new _SearchRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchRepositoryRequest {
    return new _SearchRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchRepositoryRequest {
    return new _SearchRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchRepositoryRequest | PlainMessage<_SearchRepositoryRequest> | undefined | null, b2: _SearchRepositoryRequest | PlainMessage<_SearchRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_SearchRepositoryRequest as unknown as MessageType<_SearchRepositoryRequest>, a, b2);
  }
})();
export type SearchRepositoryRequest = InstanceType<typeof SearchRepositoryRequest$Runtime>;
var SearchRepositoryRequest: MessageType<SearchRepositoryRequest> = SearchRepositoryRequest$Runtime as unknown as MessageType<SearchRepositoryRequest>;
(SearchRepositoryRequest as MutableMessageType<SearchRepositoryRequest>).runtime = proto3;
(SearchRepositoryRequest as MutableMessageType<SearchRepositoryRequest>).typeName = "aiserver.v1.SearchRepositoryRequest";
(SearchRepositoryRequest as MutableMessageType<SearchRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repository", kind: "message", T: RepositoryInfo },
  {
    no: 3,
    name: "top_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "model_details", kind: "message", T: ModelDetails },
  {
    no: 5,
    name: "rerank",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "context_cache_request", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "glob_filter", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "not_glob_filter", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "race_n_requests", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "query_only_repo_access", kind: "message", T: QueryOnlyRepoAccess }
]);
var QueryOnlyRepoAccess$Runtime = (() => class _QueryOnlyRepoAccess extends Message<_QueryOnlyRepoAccess> {
  declare ownerAuthId: string;
  declare accessToken: string;
  declare userRepoOwner: string;
  declare userRepoName: string;
  constructor(data?: PartialMessage<_QueryOnlyRepoAccess>) {
    super();
    this.ownerAuthId = "";
    this.accessToken = "";
    this.userRepoOwner = "";
    this.userRepoName = "";
    proto3.util.initPartial(data, this as _QueryOnlyRepoAccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _QueryOnlyRepoAccess {
    return new _QueryOnlyRepoAccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _QueryOnlyRepoAccess {
    return new _QueryOnlyRepoAccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _QueryOnlyRepoAccess {
    return new _QueryOnlyRepoAccess().fromJsonString(jsonString, options);
  }
  static equals(a: _QueryOnlyRepoAccess | PlainMessage<_QueryOnlyRepoAccess> | undefined | null, b2: _QueryOnlyRepoAccess | PlainMessage<_QueryOnlyRepoAccess> | undefined | null): boolean {
    return proto3.util.equals(_QueryOnlyRepoAccess as unknown as MessageType<_QueryOnlyRepoAccess>, a, b2);
  }
})();
export type QueryOnlyRepoAccess = InstanceType<typeof QueryOnlyRepoAccess$Runtime>;
var QueryOnlyRepoAccess: MessageType<QueryOnlyRepoAccess> = QueryOnlyRepoAccess$Runtime as unknown as MessageType<QueryOnlyRepoAccess>;
(QueryOnlyRepoAccess as MutableMessageType<QueryOnlyRepoAccess>).runtime = proto3;
(QueryOnlyRepoAccess as MutableMessageType<QueryOnlyRepoAccess>).typeName = "aiserver.v1.QueryOnlyRepoAccess";
(QueryOnlyRepoAccess as MutableMessageType<QueryOnlyRepoAccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "owner_auth_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "access_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "user_repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "user_repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CodeResult$Runtime = (() => class _CodeResult extends Message<_CodeResult> {
  declare codeBlock?: CodeBlock;
  declare score: number;
  constructor(data?: PartialMessage<_CodeResult>) {
    super();
    this.score = 0;
    proto3.util.initPartial(data, this as _CodeResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeResult {
    return new _CodeResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeResult {
    return new _CodeResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeResult {
    return new _CodeResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeResult | PlainMessage<_CodeResult> | undefined | null, b2: _CodeResult | PlainMessage<_CodeResult> | undefined | null): boolean {
    return proto3.util.equals(_CodeResult as unknown as MessageType<_CodeResult>, a, b2);
  }
})();
export type CodeResult = InstanceType<typeof CodeResult$Runtime>;
var CodeResult: MessageType<CodeResult> = CodeResult$Runtime as unknown as MessageType<CodeResult>;
(CodeResult as MutableMessageType<CodeResult>).runtime = proto3;
(CodeResult as MutableMessageType<CodeResult>).typeName = "aiserver.v1.CodeResult";
(CodeResult as MutableMessageType<CodeResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_block", kind: "message", T: CodeBlock },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var FileResult$Runtime = (() => class _FileResult extends Message<_FileResult> {
  declare file?: File2;
  declare score: number;
  constructor(data?: PartialMessage<_FileResult>) {
    super();
    this.score = 0;
    proto3.util.initPartial(data, this as _FileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileResult {
    return new _FileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileResult {
    return new _FileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileResult {
    return new _FileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FileResult | PlainMessage<_FileResult> | undefined | null, b2: _FileResult | PlainMessage<_FileResult> | undefined | null): boolean {
    return proto3.util.equals(_FileResult as unknown as MessageType<_FileResult>, a, b2);
  }
})();
export type FileResult = InstanceType<typeof FileResult$Runtime>;
var FileResult: MessageType<FileResult> = FileResult$Runtime as unknown as MessageType<FileResult>;
(FileResult as MutableMessageType<FileResult>).runtime = proto3;
(FileResult as MutableMessageType<FileResult>).typeName = "aiserver.v1.FileResult";
(FileResult as MutableMessageType<FileResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file", kind: "message", T: File2 },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var SearchRepositoryResponse$Runtime = (() => class _SearchRepositoryResponse extends Message<_SearchRepositoryResponse> {
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_SearchRepositoryResponse>) {
    super();
    this.codeResults = [];
    proto3.util.initPartial(data, this as _SearchRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchRepositoryResponse {
    return new _SearchRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchRepositoryResponse {
    return new _SearchRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchRepositoryResponse {
    return new _SearchRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchRepositoryResponse | PlainMessage<_SearchRepositoryResponse> | undefined | null, b2: _SearchRepositoryResponse | PlainMessage<_SearchRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_SearchRepositoryResponse as unknown as MessageType<_SearchRepositoryResponse>, a, b2);
  }
})();
export type SearchRepositoryResponse = InstanceType<typeof SearchRepositoryResponse$Runtime>;
var SearchRepositoryResponse: MessageType<SearchRepositoryResponse> = SearchRepositoryResponse$Runtime as unknown as MessageType<SearchRepositoryResponse>;
(SearchRepositoryResponse as MutableMessageType<SearchRepositoryResponse>).runtime = proto3;
(SearchRepositoryResponse as MutableMessageType<SearchRepositoryResponse>).typeName = "aiserver.v1.SearchRepositoryResponse";
(SearchRepositoryResponse as MutableMessageType<SearchRepositoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var SemSearchRequest$Runtime = (() => class _SemSearchRequest extends Message<_SemSearchRequest> {
  declare request?: SearchRepositoryRequest;
  constructor(data?: PartialMessage<_SemSearchRequest>) {
    super();
    proto3.util.initPartial(data, this as _SemSearchRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchRequest {
    return new _SemSearchRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchRequest {
    return new _SemSearchRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchRequest {
    return new _SemSearchRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchRequest | PlainMessage<_SemSearchRequest> | undefined | null, b2: _SemSearchRequest | PlainMessage<_SemSearchRequest> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchRequest as unknown as MessageType<_SemSearchRequest>, a, b2);
  }
})();
export type SemSearchRequest = InstanceType<typeof SemSearchRequest$Runtime>;
var SemSearchRequest: MessageType<SemSearchRequest> = SemSearchRequest$Runtime as unknown as MessageType<SemSearchRequest>;
(SemSearchRequest as MutableMessageType<SemSearchRequest>).runtime = proto3;
(SemSearchRequest as MutableMessageType<SemSearchRequest>).typeName = "aiserver.v1.SemSearchRequest";
(SemSearchRequest as MutableMessageType<SemSearchRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: SearchRepositoryRequest }
]);
var CodeResultWithClassificationInfo$Runtime = (() => class _CodeResultWithClassificationInfo extends Message<_CodeResultWithClassificationInfo> {
  declare codeResult?: CodeResult;
  declare lineNumberClassification?: CodeResultWithClassificationInfo_LineNumberClassification;
  constructor(data?: PartialMessage<_CodeResultWithClassificationInfo>) {
    super();
    proto3.util.initPartial(data, this as _CodeResultWithClassificationInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeResultWithClassificationInfo {
    return new _CodeResultWithClassificationInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeResultWithClassificationInfo {
    return new _CodeResultWithClassificationInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeResultWithClassificationInfo {
    return new _CodeResultWithClassificationInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeResultWithClassificationInfo | PlainMessage<_CodeResultWithClassificationInfo> | undefined | null, b2: _CodeResultWithClassificationInfo | PlainMessage<_CodeResultWithClassificationInfo> | undefined | null): boolean {
    return proto3.util.equals(_CodeResultWithClassificationInfo as unknown as MessageType<_CodeResultWithClassificationInfo>, a, b2);
  }
})();
export type CodeResultWithClassificationInfo = InstanceType<typeof CodeResultWithClassificationInfo$Runtime>;
var CodeResultWithClassificationInfo: MessageType<CodeResultWithClassificationInfo> = CodeResultWithClassificationInfo$Runtime as unknown as MessageType<CodeResultWithClassificationInfo>;
(CodeResultWithClassificationInfo as MutableMessageType<CodeResultWithClassificationInfo>).runtime = proto3;
(CodeResultWithClassificationInfo as MutableMessageType<CodeResultWithClassificationInfo>).typeName = "aiserver.v1.CodeResultWithClassificationInfo";
(CodeResultWithClassificationInfo as MutableMessageType<CodeResultWithClassificationInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_result", kind: "message", T: CodeResult },
  { no: 2, name: "line_number_classification", kind: "message", T: CodeResultWithClassificationInfo_LineNumberClassification, opt: true }
]);
var CodeResultWithClassificationInfo_LineNumberClassification$Runtime = (() => class _CodeResultWithClassificationInfo_LineNumberClassification extends Message<_CodeResultWithClassificationInfo_LineNumberClassification> {
  declare detailedLine?: DetailedLine;
  declare queryComputedFor: string;
  declare matchedStrings: string[];
  declare highlightRange?: SimpleRange;
  constructor(data?: PartialMessage<_CodeResultWithClassificationInfo_LineNumberClassification>) {
    super();
    this.queryComputedFor = "";
    this.matchedStrings = [];
    proto3.util.initPartial(data, this as _CodeResultWithClassificationInfo_LineNumberClassification);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CodeResultWithClassificationInfo_LineNumberClassification {
    return new _CodeResultWithClassificationInfo_LineNumberClassification().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CodeResultWithClassificationInfo_LineNumberClassification {
    return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CodeResultWithClassificationInfo_LineNumberClassification {
    return new _CodeResultWithClassificationInfo_LineNumberClassification().fromJsonString(jsonString, options);
  }
  static equals(a: _CodeResultWithClassificationInfo_LineNumberClassification | PlainMessage<_CodeResultWithClassificationInfo_LineNumberClassification> | undefined | null, b2: _CodeResultWithClassificationInfo_LineNumberClassification | PlainMessage<_CodeResultWithClassificationInfo_LineNumberClassification> | undefined | null): boolean {
    return proto3.util.equals(_CodeResultWithClassificationInfo_LineNumberClassification as unknown as MessageType<_CodeResultWithClassificationInfo_LineNumberClassification>, a, b2);
  }
})();
export type CodeResultWithClassificationInfo_LineNumberClassification = InstanceType<typeof CodeResultWithClassificationInfo_LineNumberClassification$Runtime>;
var CodeResultWithClassificationInfo_LineNumberClassification: MessageType<CodeResultWithClassificationInfo_LineNumberClassification> = CodeResultWithClassificationInfo_LineNumberClassification$Runtime as unknown as MessageType<CodeResultWithClassificationInfo_LineNumberClassification>;
(CodeResultWithClassificationInfo_LineNumberClassification as MutableMessageType<CodeResultWithClassificationInfo_LineNumberClassification>).runtime = proto3;
(CodeResultWithClassificationInfo_LineNumberClassification as MutableMessageType<CodeResultWithClassificationInfo_LineNumberClassification>).typeName = "aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification";
(CodeResultWithClassificationInfo_LineNumberClassification as MutableMessageType<CodeResultWithClassificationInfo_LineNumberClassification>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "detailed_line", kind: "message", T: DetailedLine },
  {
    no: 2,
    name: "query_computed_for",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "matched_strings", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "highlight_range", kind: "message", T: SimpleRange }
]);
var SemSearchResponse$Runtime = (() => class _SemSearchResponse extends Message<_SemSearchResponse> {
  declare response?: SearchRepositoryResponse;
  declare metadata?: SemSearchResponse_SemSearchMetadata;
  declare codeResults: CodeResultWithClassificationInfo[];
  constructor(data?: PartialMessage<_SemSearchResponse>) {
    super();
    this.codeResults = [];
    proto3.util.initPartial(data, this as _SemSearchResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchResponse {
    return new _SemSearchResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchResponse {
    return new _SemSearchResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchResponse {
    return new _SemSearchResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchResponse | PlainMessage<_SemSearchResponse> | undefined | null, b2: _SemSearchResponse | PlainMessage<_SemSearchResponse> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchResponse as unknown as MessageType<_SemSearchResponse>, a, b2);
  }
})();
export type SemSearchResponse = InstanceType<typeof SemSearchResponse$Runtime>;
var SemSearchResponse: MessageType<SemSearchResponse> = SemSearchResponse$Runtime as unknown as MessageType<SemSearchResponse>;
(SemSearchResponse as MutableMessageType<SemSearchResponse>).runtime = proto3;
(SemSearchResponse as MutableMessageType<SemSearchResponse>).typeName = "aiserver.v1.SemSearchResponse";
(SemSearchResponse as MutableMessageType<SemSearchResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: SearchRepositoryResponse },
  { no: 2, name: "metadata", kind: "message", T: SemSearchResponse_SemSearchMetadata, opt: true },
  { no: 3, name: "code_results", kind: "message", T: CodeResultWithClassificationInfo, repeated: true }
]);
var SemSearchResponse_SemSearchMetadata$Runtime = (() => class _SemSearchResponse_SemSearchMetadata extends Message<_SemSearchResponse_SemSearchMetadata> {
  declare queryEmbeddingModel?: string;
  declare serverSideLatencyMs?: number;
  declare embedLatencyMs?: number;
  declare knnLatencyMs?: number;
  constructor(data?: PartialMessage<_SemSearchResponse_SemSearchMetadata>) {
    super();
    proto3.util.initPartial(data, this as _SemSearchResponse_SemSearchMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemSearchResponse_SemSearchMetadata {
    return new _SemSearchResponse_SemSearchMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemSearchResponse_SemSearchMetadata {
    return new _SemSearchResponse_SemSearchMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemSearchResponse_SemSearchMetadata {
    return new _SemSearchResponse_SemSearchMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _SemSearchResponse_SemSearchMetadata | PlainMessage<_SemSearchResponse_SemSearchMetadata> | undefined | null, b2: _SemSearchResponse_SemSearchMetadata | PlainMessage<_SemSearchResponse_SemSearchMetadata> | undefined | null): boolean {
    return proto3.util.equals(_SemSearchResponse_SemSearchMetadata as unknown as MessageType<_SemSearchResponse_SemSearchMetadata>, a, b2);
  }
})();
export type SemSearchResponse_SemSearchMetadata = InstanceType<typeof SemSearchResponse_SemSearchMetadata$Runtime>;
var SemSearchResponse_SemSearchMetadata: MessageType<SemSearchResponse_SemSearchMetadata> = SemSearchResponse_SemSearchMetadata$Runtime as unknown as MessageType<SemSearchResponse_SemSearchMetadata>;
(SemSearchResponse_SemSearchMetadata as MutableMessageType<SemSearchResponse_SemSearchMetadata>).runtime = proto3;
(SemSearchResponse_SemSearchMetadata as MutableMessageType<SemSearchResponse_SemSearchMetadata>).typeName = "aiserver.v1.SemSearchResponse.SemSearchMetadata";
(SemSearchResponse_SemSearchMetadata as MutableMessageType<SemSearchResponse_SemSearchMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "query_embedding_model", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "server_side_latency_ms", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "embed_latency_ms", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "knn_latency_ms", kind: "scalar", T: 5, opt: true }
]);
var LoginRequest$Runtime = (() => class _LoginRequest extends Message<_LoginRequest> {
  constructor(data?: PartialMessage<_LoginRequest>) {
    super();
    proto3.util.initPartial(data, this as _LoginRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LoginRequest {
    return new _LoginRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LoginRequest {
    return new _LoginRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LoginRequest {
    return new _LoginRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _LoginRequest | PlainMessage<_LoginRequest> | undefined | null, b2: _LoginRequest | PlainMessage<_LoginRequest> | undefined | null): boolean {
    return proto3.util.equals(_LoginRequest as unknown as MessageType<_LoginRequest>, a, b2);
  }
})();
export type LoginRequest = InstanceType<typeof LoginRequest$Runtime>;
var LoginRequest: MessageType<LoginRequest> = LoginRequest$Runtime as unknown as MessageType<LoginRequest>;
(LoginRequest as MutableMessageType<LoginRequest>).runtime = proto3;
(LoginRequest as MutableMessageType<LoginRequest>).typeName = "aiserver.v1.LoginRequest";
(LoginRequest as MutableMessageType<LoginRequest>).fields = proto3.util.newFieldList(() => []);
var LoginResponse$Runtime = (() => class _LoginResponse extends Message<_LoginResponse> {
  declare loginUrl: string;
  constructor(data?: PartialMessage<_LoginResponse>) {
    super();
    this.loginUrl = "";
    proto3.util.initPartial(data, this as _LoginResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _LoginResponse {
    return new _LoginResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _LoginResponse {
    return new _LoginResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _LoginResponse {
    return new _LoginResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _LoginResponse | PlainMessage<_LoginResponse> | undefined | null, b2: _LoginResponse | PlainMessage<_LoginResponse> | undefined | null): boolean {
    return proto3.util.equals(_LoginResponse as unknown as MessageType<_LoginResponse>, a, b2);
  }
})();
export type LoginResponse = InstanceType<typeof LoginResponse$Runtime>;
var LoginResponse: MessageType<LoginResponse> = LoginResponse$Runtime as unknown as MessageType<LoginResponse>;
(LoginResponse as MutableMessageType<LoginResponse>).runtime = proto3;
(LoginResponse as MutableMessageType<LoginResponse>).typeName = "aiserver.v1.LoginResponse";
(LoginResponse as MutableMessageType<LoginResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "login_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var IsLoggedInRequest$Runtime = (() => class _IsLoggedInRequest extends Message<_IsLoggedInRequest> {
  constructor(data?: PartialMessage<_IsLoggedInRequest>) {
    super();
    proto3.util.initPartial(data, this as _IsLoggedInRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsLoggedInRequest {
    return new _IsLoggedInRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsLoggedInRequest {
    return new _IsLoggedInRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsLoggedInRequest {
    return new _IsLoggedInRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _IsLoggedInRequest | PlainMessage<_IsLoggedInRequest> | undefined | null, b2: _IsLoggedInRequest | PlainMessage<_IsLoggedInRequest> | undefined | null): boolean {
    return proto3.util.equals(_IsLoggedInRequest as unknown as MessageType<_IsLoggedInRequest>, a, b2);
  }
})();
export type IsLoggedInRequest = InstanceType<typeof IsLoggedInRequest$Runtime>;
var IsLoggedInRequest: MessageType<IsLoggedInRequest> = IsLoggedInRequest$Runtime as unknown as MessageType<IsLoggedInRequest>;
(IsLoggedInRequest as MutableMessageType<IsLoggedInRequest>).runtime = proto3;
(IsLoggedInRequest as MutableMessageType<IsLoggedInRequest>).typeName = "aiserver.v1.IsLoggedInRequest";
(IsLoggedInRequest as MutableMessageType<IsLoggedInRequest>).fields = proto3.util.newFieldList(() => []);
var IsLoggedInResponse$Runtime = (() => class _IsLoggedInResponse extends Message<_IsLoggedInResponse> {
  declare loggedIn: boolean;
  constructor(data?: PartialMessage<_IsLoggedInResponse>) {
    super();
    this.loggedIn = false;
    proto3.util.initPartial(data, this as _IsLoggedInResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IsLoggedInResponse {
    return new _IsLoggedInResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IsLoggedInResponse {
    return new _IsLoggedInResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IsLoggedInResponse {
    return new _IsLoggedInResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _IsLoggedInResponse | PlainMessage<_IsLoggedInResponse> | undefined | null, b2: _IsLoggedInResponse | PlainMessage<_IsLoggedInResponse> | undefined | null): boolean {
    return proto3.util.equals(_IsLoggedInResponse as unknown as MessageType<_IsLoggedInResponse>, a, b2);
  }
})();
export type IsLoggedInResponse = InstanceType<typeof IsLoggedInResponse$Runtime>;
var IsLoggedInResponse: MessageType<IsLoggedInResponse> = IsLoggedInResponse$Runtime as unknown as MessageType<IsLoggedInResponse>;
(IsLoggedInResponse as MutableMessageType<IsLoggedInResponse>).runtime = proto3;
(IsLoggedInResponse as MutableMessageType<IsLoggedInResponse>).typeName = "aiserver.v1.IsLoggedInResponse";
(IsLoggedInResponse as MutableMessageType<IsLoggedInResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "logged_in",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var PollLoginRequest$Runtime = (() => class _PollLoginRequest extends Message<_PollLoginRequest> {
  constructor(data?: PartialMessage<_PollLoginRequest>) {
    super();
    proto3.util.initPartial(data, this as _PollLoginRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PollLoginRequest {
    return new _PollLoginRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PollLoginRequest {
    return new _PollLoginRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PollLoginRequest {
    return new _PollLoginRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _PollLoginRequest | PlainMessage<_PollLoginRequest> | undefined | null, b2: _PollLoginRequest | PlainMessage<_PollLoginRequest> | undefined | null): boolean {
    return proto3.util.equals(_PollLoginRequest as unknown as MessageType<_PollLoginRequest>, a, b2);
  }
})();
export type PollLoginRequest = InstanceType<typeof PollLoginRequest$Runtime>;
var PollLoginRequest: MessageType<PollLoginRequest> = PollLoginRequest$Runtime as unknown as MessageType<PollLoginRequest>;
(PollLoginRequest as MutableMessageType<PollLoginRequest>).runtime = proto3;
(PollLoginRequest as MutableMessageType<PollLoginRequest>).typeName = "aiserver.v1.PollLoginRequest";
(PollLoginRequest as MutableMessageType<PollLoginRequest>).fields = proto3.util.newFieldList(() => []);
var PollLoginResponse$Runtime = (() => class _PollLoginResponse extends Message<_PollLoginResponse> {
  declare status: PollLoginResponse_Status;
  constructor(data?: PartialMessage<_PollLoginResponse>) {
    super();
    this.status = PollLoginResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _PollLoginResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PollLoginResponse {
    return new _PollLoginResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PollLoginResponse {
    return new _PollLoginResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PollLoginResponse {
    return new _PollLoginResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PollLoginResponse | PlainMessage<_PollLoginResponse> | undefined | null, b2: _PollLoginResponse | PlainMessage<_PollLoginResponse> | undefined | null): boolean {
    return proto3.util.equals(_PollLoginResponse as unknown as MessageType<_PollLoginResponse>, a, b2);
  }
})();
export type PollLoginResponse = InstanceType<typeof PollLoginResponse$Runtime>;
var PollLoginResponse: MessageType<PollLoginResponse> = PollLoginResponse$Runtime as unknown as MessageType<PollLoginResponse>;
(PollLoginResponse as MutableMessageType<PollLoginResponse>).runtime = proto3;
(PollLoginResponse as MutableMessageType<PollLoginResponse>).typeName = "aiserver.v1.PollLoginResponse";
(PollLoginResponse as MutableMessageType<PollLoginResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(PollLoginResponse_Status) }
]);
(function(PollLoginResponse_Status2) {
  PollLoginResponse_Status2[PollLoginResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PollLoginResponse_Status2[PollLoginResponse_Status2["LOGGED_IN"] = 1] = "LOGGED_IN";
  PollLoginResponse_Status2[PollLoginResponse_Status2["FAILURE"] = 2] = "FAILURE";
  PollLoginResponse_Status2[PollLoginResponse_Status2["CHECKING"] = 3] = "CHECKING";
})(PollLoginResponse_Status! || (PollLoginResponse_Status = {} as typeof PollLoginResponse_Status));
proto3.util.setEnumType(PollLoginResponse_Status, "aiserver.v1.PollLoginResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_LOGGED_IN" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_CHECKING" }
]);
var UpgradeScopeRequest$Runtime = (() => class _UpgradeScopeRequest extends Message<_UpgradeScopeRequest> {
  declare scopes: string[];
  constructor(data?: PartialMessage<_UpgradeScopeRequest>) {
    super();
    this.scopes = [];
    proto3.util.initPartial(data, this as _UpgradeScopeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpgradeScopeRequest {
    return new _UpgradeScopeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpgradeScopeRequest {
    return new _UpgradeScopeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpgradeScopeRequest {
    return new _UpgradeScopeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UpgradeScopeRequest | PlainMessage<_UpgradeScopeRequest> | undefined | null, b2: _UpgradeScopeRequest | PlainMessage<_UpgradeScopeRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpgradeScopeRequest as unknown as MessageType<_UpgradeScopeRequest>, a, b2);
  }
})();
export type UpgradeScopeRequest = InstanceType<typeof UpgradeScopeRequest$Runtime>;
var UpgradeScopeRequest: MessageType<UpgradeScopeRequest> = UpgradeScopeRequest$Runtime as unknown as MessageType<UpgradeScopeRequest>;
(UpgradeScopeRequest as MutableMessageType<UpgradeScopeRequest>).runtime = proto3;
(UpgradeScopeRequest as MutableMessageType<UpgradeScopeRequest>).typeName = "aiserver.v1.UpgradeScopeRequest";
(UpgradeScopeRequest as MutableMessageType<UpgradeScopeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "scopes", kind: "scalar", T: 9, repeated: true }
]);
var UpgradeScopeResponse$Runtime = (() => class _UpgradeScopeResponse extends Message<_UpgradeScopeResponse> {
  declare status: UpgradeScopeResponse_Status;
  constructor(data?: PartialMessage<_UpgradeScopeResponse>) {
    super();
    this.status = UpgradeScopeResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpgradeScopeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpgradeScopeResponse {
    return new _UpgradeScopeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpgradeScopeResponse {
    return new _UpgradeScopeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpgradeScopeResponse {
    return new _UpgradeScopeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UpgradeScopeResponse | PlainMessage<_UpgradeScopeResponse> | undefined | null, b2: _UpgradeScopeResponse | PlainMessage<_UpgradeScopeResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpgradeScopeResponse as unknown as MessageType<_UpgradeScopeResponse>, a, b2);
  }
})();
export type UpgradeScopeResponse = InstanceType<typeof UpgradeScopeResponse$Runtime>;
var UpgradeScopeResponse: MessageType<UpgradeScopeResponse> = UpgradeScopeResponse$Runtime as unknown as MessageType<UpgradeScopeResponse>;
(UpgradeScopeResponse as MutableMessageType<UpgradeScopeResponse>).runtime = proto3;
(UpgradeScopeResponse as MutableMessageType<UpgradeScopeResponse>).typeName = "aiserver.v1.UpgradeScopeResponse";
(UpgradeScopeResponse as MutableMessageType<UpgradeScopeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(UpgradeScopeResponse_Status) }
]);
(function(UpgradeScopeResponse_Status2) {
  UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  UpgradeScopeResponse_Status2[UpgradeScopeResponse_Status2["FAILURE"] = 2] = "FAILURE";
})(UpgradeScopeResponse_Status! || (UpgradeScopeResponse_Status = {} as typeof UpgradeScopeResponse_Status));
proto3.util.setEnumType(UpgradeScopeResponse_Status, "aiserver.v1.UpgradeScopeResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" }
]);
var RepositoriesRequest$Runtime = (() => class _RepositoriesRequest extends Message<_RepositoriesRequest> {
  constructor(data?: PartialMessage<_RepositoriesRequest>) {
    super();
    proto3.util.initPartial(data, this as _RepositoriesRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoriesRequest {
    return new _RepositoriesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoriesRequest {
    return new _RepositoriesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoriesRequest {
    return new _RepositoriesRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoriesRequest | PlainMessage<_RepositoriesRequest> | undefined | null, b2: _RepositoriesRequest | PlainMessage<_RepositoriesRequest> | undefined | null): boolean {
    return proto3.util.equals(_RepositoriesRequest as unknown as MessageType<_RepositoriesRequest>, a, b2);
  }
})();
export type RepositoriesRequest = InstanceType<typeof RepositoriesRequest$Runtime>;
var RepositoriesRequest: MessageType<RepositoriesRequest> = RepositoriesRequest$Runtime as unknown as MessageType<RepositoriesRequest>;
(RepositoriesRequest as MutableMessageType<RepositoriesRequest>).runtime = proto3;
(RepositoriesRequest as MutableMessageType<RepositoriesRequest>).typeName = "aiserver.v1.RepositoriesRequest";
(RepositoriesRequest as MutableMessageType<RepositoriesRequest>).fields = proto3.util.newFieldList(() => []);
var RepositoriesResponse$Runtime = (() => class _RepositoriesResponse extends Message<_RepositoriesResponse> {
  declare repositories: RepositoryInfo[];
  constructor(data?: PartialMessage<_RepositoriesResponse>) {
    super();
    this.repositories = [];
    proto3.util.initPartial(data, this as _RepositoriesResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoriesResponse {
    return new _RepositoriesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoriesResponse {
    return new _RepositoriesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoriesResponse {
    return new _RepositoriesResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoriesResponse | PlainMessage<_RepositoriesResponse> | undefined | null, b2: _RepositoriesResponse | PlainMessage<_RepositoriesResponse> | undefined | null): boolean {
    return proto3.util.equals(_RepositoriesResponse as unknown as MessageType<_RepositoriesResponse>, a, b2);
  }
})();
export type RepositoriesResponse = InstanceType<typeof RepositoriesResponse$Runtime>;
var RepositoriesResponse: MessageType<RepositoriesResponse> = RepositoriesResponse$Runtime as unknown as MessageType<RepositoriesResponse>;
(RepositoriesResponse as MutableMessageType<RepositoriesResponse>).runtime = proto3;
(RepositoriesResponse as MutableMessageType<RepositoriesResponse>).typeName = "aiserver.v1.RepositoriesResponse";
(RepositoriesResponse as MutableMessageType<RepositoriesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repositories", kind: "message", T: RepositoryInfo, repeated: true }
]);
var UploadRepositoryRequest$Runtime = (() => class _UploadRepositoryRequest extends Message<_UploadRepositoryRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_UploadRepositoryRequest>) {
    super();
    proto3.util.initPartial(data, this as _UploadRepositoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UploadRepositoryRequest {
    return new _UploadRepositoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UploadRepositoryRequest {
    return new _UploadRepositoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UploadRepositoryRequest {
    return new _UploadRepositoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _UploadRepositoryRequest | PlainMessage<_UploadRepositoryRequest> | undefined | null, b2: _UploadRepositoryRequest | PlainMessage<_UploadRepositoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_UploadRepositoryRequest as unknown as MessageType<_UploadRepositoryRequest>, a, b2);
  }
})();
export type UploadRepositoryRequest = InstanceType<typeof UploadRepositoryRequest$Runtime>;
var UploadRepositoryRequest: MessageType<UploadRepositoryRequest> = UploadRepositoryRequest$Runtime as unknown as MessageType<UploadRepositoryRequest>;
(UploadRepositoryRequest as MutableMessageType<UploadRepositoryRequest>).runtime = proto3;
(UploadRepositoryRequest as MutableMessageType<UploadRepositoryRequest>).typeName = "aiserver.v1.UploadRepositoryRequest";
(UploadRepositoryRequest as MutableMessageType<UploadRepositoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var UploadRepositoryResponse$Runtime = (() => class _UploadRepositoryResponse extends Message<_UploadRepositoryResponse> {
  declare status: UploadRepositoryResponse_Status;
  constructor(data?: PartialMessage<_UploadRepositoryResponse>) {
    super();
    this.status = UploadRepositoryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UploadRepositoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UploadRepositoryResponse {
    return new _UploadRepositoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UploadRepositoryResponse {
    return new _UploadRepositoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UploadRepositoryResponse {
    return new _UploadRepositoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _UploadRepositoryResponse | PlainMessage<_UploadRepositoryResponse> | undefined | null, b2: _UploadRepositoryResponse | PlainMessage<_UploadRepositoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_UploadRepositoryResponse as unknown as MessageType<_UploadRepositoryResponse>, a, b2);
  }
})();
export type UploadRepositoryResponse = InstanceType<typeof UploadRepositoryResponse$Runtime>;
var UploadRepositoryResponse: MessageType<UploadRepositoryResponse> = UploadRepositoryResponse$Runtime as unknown as MessageType<UploadRepositoryResponse>;
(UploadRepositoryResponse as MutableMessageType<UploadRepositoryResponse>).runtime = proto3;
(UploadRepositoryResponse as MutableMessageType<UploadRepositoryResponse>).typeName = "aiserver.v1.UploadRepositoryResponse";
(UploadRepositoryResponse as MutableMessageType<UploadRepositoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(UploadRepositoryResponse_Status) }
]);
(function(UploadRepositoryResponse_Status2) {
  UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["FAILURE"] = 2] = "FAILURE";
  UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["AUTH_TOKEN_BAD_PERMISSIONS"] = 3] = "AUTH_TOKEN_BAD_PERMISSIONS";
  UploadRepositoryResponse_Status2[UploadRepositoryResponse_Status2["ALREADY_EXISTS"] = 4] = "ALREADY_EXISTS";
})(UploadRepositoryResponse_Status! || (UploadRepositoryResponse_Status = {} as typeof UploadRepositoryResponse_Status));
proto3.util.setEnumType(UploadRepositoryResponse_Status, "aiserver.v1.UploadRepositoryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_AUTH_TOKEN_BAD_PERMISSIONS" },
  { no: 4, name: "STATUS_ALREADY_EXISTS" }
]);
var RepositoryStatusRequest$Runtime = (() => class _RepositoryStatusRequest extends Message<_RepositoryStatusRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_RepositoryStatusRequest>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusRequest {
    return new _RepositoryStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusRequest {
    return new _RepositoryStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusRequest {
    return new _RepositoryStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusRequest | PlainMessage<_RepositoryStatusRequest> | undefined | null, b2: _RepositoryStatusRequest | PlainMessage<_RepositoryStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusRequest as unknown as MessageType<_RepositoryStatusRequest>, a, b2);
  }
})();
export type RepositoryStatusRequest = InstanceType<typeof RepositoryStatusRequest$Runtime>;
var RepositoryStatusRequest: MessageType<RepositoryStatusRequest> = RepositoryStatusRequest$Runtime as unknown as MessageType<RepositoryStatusRequest>;
(RepositoryStatusRequest as MutableMessageType<RepositoryStatusRequest>).runtime = proto3;
(RepositoryStatusRequest as MutableMessageType<RepositoryStatusRequest>).typeName = "aiserver.v1.RepositoryStatusRequest";
(RepositoryStatusRequest as MutableMessageType<RepositoryStatusRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var RepositoryStatusResponse$Runtime = (() => class _RepositoryStatusResponse extends Message<_RepositoryStatusResponse> {
  declare isOwner?: boolean;
  declare status: { case: "notFound"; value: RepositoryStatusResponse_NotFound } | { case: "uploading"; value: RepositoryStatusResponse_Uploading } | { case: "syncing"; value: RepositoryStatusResponse_Syncing } | { case: "synced"; value: RepositoryStatusResponse_Synced } | { case: "notSubscribed"; value: RepositoryStatusResponse_NotSubscribed } | { case: "tooBig"; value: RepositoryStatusResponse_TooBig } | { case: "authTokenNotFound"; value: RepositoryStatusResponse_AuthTokenNotFound } | { case: "authTokenNotAuthorized"; value: RepositoryStatusResponse_AuthTokenNotAuthorized } | { case: "errorUploading"; value: RepositoryStatusResponse_EmptyMessage } | { case: "errorSyncing"; value: RepositoryStatusResponse_EmptyMessage } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RepositoryStatusResponse>) {
    super();
    this.status = { case: void 0 };
    proto3.util.initPartial(data, this as _RepositoryStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse {
    return new _RepositoryStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse {
    return new _RepositoryStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse {
    return new _RepositoryStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse | PlainMessage<_RepositoryStatusResponse> | undefined | null, b2: _RepositoryStatusResponse | PlainMessage<_RepositoryStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse as unknown as MessageType<_RepositoryStatusResponse>, a, b2);
  }
})();
export type RepositoryStatusResponse = InstanceType<typeof RepositoryStatusResponse$Runtime>;
var RepositoryStatusResponse: MessageType<RepositoryStatusResponse> = RepositoryStatusResponse$Runtime as unknown as MessageType<RepositoryStatusResponse>;
(RepositoryStatusResponse as MutableMessageType<RepositoryStatusResponse>).runtime = proto3;
(RepositoryStatusResponse as MutableMessageType<RepositoryStatusResponse>).typeName = "aiserver.v1.RepositoryStatusResponse";
(RepositoryStatusResponse as MutableMessageType<RepositoryStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "not_found", kind: "message", T: RepositoryStatusResponse_NotFound, oneof: "status" },
  { no: 2, name: "uploading", kind: "message", T: RepositoryStatusResponse_Uploading, oneof: "status" },
  { no: 3, name: "syncing", kind: "message", T: RepositoryStatusResponse_Syncing, oneof: "status" },
  { no: 4, name: "synced", kind: "message", T: RepositoryStatusResponse_Synced, oneof: "status" },
  { no: 5, name: "not_subscribed", kind: "message", T: RepositoryStatusResponse_NotSubscribed, oneof: "status" },
  { no: 6, name: "too_big", kind: "message", T: RepositoryStatusResponse_TooBig, oneof: "status" },
  { no: 7, name: "auth_token_not_found", kind: "message", T: RepositoryStatusResponse_AuthTokenNotFound, oneof: "status" },
  { no: 8, name: "auth_token_not_authorized", kind: "message", T: RepositoryStatusResponse_AuthTokenNotAuthorized, oneof: "status" },
  { no: 10, name: "error_uploading", kind: "message", T: RepositoryStatusResponse_EmptyMessage, oneof: "status" },
  { no: 11, name: "error_syncing", kind: "message", T: RepositoryStatusResponse_EmptyMessage, oneof: "status" },
  { no: 9, name: "is_owner", kind: "scalar", T: 8, opt: true }
]);
var RepositoryStatusResponse_NotFound$Runtime = (() => class _RepositoryStatusResponse_NotFound extends Message<_RepositoryStatusResponse_NotFound> {
  constructor(data?: PartialMessage<_RepositoryStatusResponse_NotFound>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_NotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_NotFound {
    return new _RepositoryStatusResponse_NotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_NotFound {
    return new _RepositoryStatusResponse_NotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_NotFound {
    return new _RepositoryStatusResponse_NotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_NotFound | PlainMessage<_RepositoryStatusResponse_NotFound> | undefined | null, b2: _RepositoryStatusResponse_NotFound | PlainMessage<_RepositoryStatusResponse_NotFound> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_NotFound as unknown as MessageType<_RepositoryStatusResponse_NotFound>, a, b2);
  }
})();
export type RepositoryStatusResponse_NotFound = InstanceType<typeof RepositoryStatusResponse_NotFound$Runtime>;
var RepositoryStatusResponse_NotFound: MessageType<RepositoryStatusResponse_NotFound> = RepositoryStatusResponse_NotFound$Runtime as unknown as MessageType<RepositoryStatusResponse_NotFound>;
(RepositoryStatusResponse_NotFound as MutableMessageType<RepositoryStatusResponse_NotFound>).runtime = proto3;
(RepositoryStatusResponse_NotFound as MutableMessageType<RepositoryStatusResponse_NotFound>).typeName = "aiserver.v1.RepositoryStatusResponse.NotFound";
(RepositoryStatusResponse_NotFound as MutableMessageType<RepositoryStatusResponse_NotFound>).fields = proto3.util.newFieldList(() => []);
var RepositoryStatusResponse_NotSubscribed$Runtime = (() => class _RepositoryStatusResponse_NotSubscribed extends Message<_RepositoryStatusResponse_NotSubscribed> {
  constructor(data?: PartialMessage<_RepositoryStatusResponse_NotSubscribed>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_NotSubscribed);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_NotSubscribed {
    return new _RepositoryStatusResponse_NotSubscribed().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_NotSubscribed {
    return new _RepositoryStatusResponse_NotSubscribed().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_NotSubscribed {
    return new _RepositoryStatusResponse_NotSubscribed().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_NotSubscribed | PlainMessage<_RepositoryStatusResponse_NotSubscribed> | undefined | null, b2: _RepositoryStatusResponse_NotSubscribed | PlainMessage<_RepositoryStatusResponse_NotSubscribed> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_NotSubscribed as unknown as MessageType<_RepositoryStatusResponse_NotSubscribed>, a, b2);
  }
})();
export type RepositoryStatusResponse_NotSubscribed = InstanceType<typeof RepositoryStatusResponse_NotSubscribed$Runtime>;
var RepositoryStatusResponse_NotSubscribed: MessageType<RepositoryStatusResponse_NotSubscribed> = RepositoryStatusResponse_NotSubscribed$Runtime as unknown as MessageType<RepositoryStatusResponse_NotSubscribed>;
(RepositoryStatusResponse_NotSubscribed as MutableMessageType<RepositoryStatusResponse_NotSubscribed>).runtime = proto3;
(RepositoryStatusResponse_NotSubscribed as MutableMessageType<RepositoryStatusResponse_NotSubscribed>).typeName = "aiserver.v1.RepositoryStatusResponse.NotSubscribed";
(RepositoryStatusResponse_NotSubscribed as MutableMessageType<RepositoryStatusResponse_NotSubscribed>).fields = proto3.util.newFieldList(() => []);
var RepositoryStatusResponse_Uploading$Runtime = (() => class _RepositoryStatusResponse_Uploading extends Message<_RepositoryStatusResponse_Uploading> {
  declare progress: number;
  constructor(data?: PartialMessage<_RepositoryStatusResponse_Uploading>) {
    super();
    this.progress = 0;
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_Uploading);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_Uploading {
    return new _RepositoryStatusResponse_Uploading().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Uploading {
    return new _RepositoryStatusResponse_Uploading().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Uploading {
    return new _RepositoryStatusResponse_Uploading().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_Uploading | PlainMessage<_RepositoryStatusResponse_Uploading> | undefined | null, b2: _RepositoryStatusResponse_Uploading | PlainMessage<_RepositoryStatusResponse_Uploading> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_Uploading as unknown as MessageType<_RepositoryStatusResponse_Uploading>, a, b2);
  }
})();
export type RepositoryStatusResponse_Uploading = InstanceType<typeof RepositoryStatusResponse_Uploading$Runtime>;
var RepositoryStatusResponse_Uploading: MessageType<RepositoryStatusResponse_Uploading> = RepositoryStatusResponse_Uploading$Runtime as unknown as MessageType<RepositoryStatusResponse_Uploading>;
(RepositoryStatusResponse_Uploading as MutableMessageType<RepositoryStatusResponse_Uploading>).runtime = proto3;
(RepositoryStatusResponse_Uploading as MutableMessageType<RepositoryStatusResponse_Uploading>).typeName = "aiserver.v1.RepositoryStatusResponse.Uploading";
(RepositoryStatusResponse_Uploading as MutableMessageType<RepositoryStatusResponse_Uploading>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "progress",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var RepositoryStatusResponse_Syncing$Runtime = (() => class _RepositoryStatusResponse_Syncing extends Message<_RepositoryStatusResponse_Syncing> {
  declare branch: string;
  declare oldCommit: string;
  declare newCommit: string;
  declare progress: number;
  constructor(data?: PartialMessage<_RepositoryStatusResponse_Syncing>) {
    super();
    this.branch = "";
    this.oldCommit = "";
    this.newCommit = "";
    this.progress = 0;
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_Syncing);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_Syncing {
    return new _RepositoryStatusResponse_Syncing().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Syncing {
    return new _RepositoryStatusResponse_Syncing().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Syncing {
    return new _RepositoryStatusResponse_Syncing().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_Syncing | PlainMessage<_RepositoryStatusResponse_Syncing> | undefined | null, b2: _RepositoryStatusResponse_Syncing | PlainMessage<_RepositoryStatusResponse_Syncing> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_Syncing as unknown as MessageType<_RepositoryStatusResponse_Syncing>, a, b2);
  }
})();
export type RepositoryStatusResponse_Syncing = InstanceType<typeof RepositoryStatusResponse_Syncing$Runtime>;
var RepositoryStatusResponse_Syncing: MessageType<RepositoryStatusResponse_Syncing> = RepositoryStatusResponse_Syncing$Runtime as unknown as MessageType<RepositoryStatusResponse_Syncing>;
(RepositoryStatusResponse_Syncing as MutableMessageType<RepositoryStatusResponse_Syncing>).runtime = proto3;
(RepositoryStatusResponse_Syncing as MutableMessageType<RepositoryStatusResponse_Syncing>).typeName = "aiserver.v1.RepositoryStatusResponse.Syncing";
(RepositoryStatusResponse_Syncing as MutableMessageType<RepositoryStatusResponse_Syncing>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "old_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "new_commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "progress",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var RepositoryStatusResponse_Synced$Runtime = (() => class _RepositoryStatusResponse_Synced extends Message<_RepositoryStatusResponse_Synced> {
  declare branch: string;
  declare commit: string;
  constructor(data?: PartialMessage<_RepositoryStatusResponse_Synced>) {
    super();
    this.branch = "";
    this.commit = "";
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_Synced);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_Synced {
    return new _RepositoryStatusResponse_Synced().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Synced {
    return new _RepositoryStatusResponse_Synced().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_Synced {
    return new _RepositoryStatusResponse_Synced().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_Synced | PlainMessage<_RepositoryStatusResponse_Synced> | undefined | null, b2: _RepositoryStatusResponse_Synced | PlainMessage<_RepositoryStatusResponse_Synced> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_Synced as unknown as MessageType<_RepositoryStatusResponse_Synced>, a, b2);
  }
})();
export type RepositoryStatusResponse_Synced = InstanceType<typeof RepositoryStatusResponse_Synced$Runtime>;
var RepositoryStatusResponse_Synced: MessageType<RepositoryStatusResponse_Synced> = RepositoryStatusResponse_Synced$Runtime as unknown as MessageType<RepositoryStatusResponse_Synced>;
(RepositoryStatusResponse_Synced as MutableMessageType<RepositoryStatusResponse_Synced>).runtime = proto3;
(RepositoryStatusResponse_Synced as MutableMessageType<RepositoryStatusResponse_Synced>).typeName = "aiserver.v1.RepositoryStatusResponse.Synced";
(RepositoryStatusResponse_Synced as MutableMessageType<RepositoryStatusResponse_Synced>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "commit",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RepositoryStatusResponse_TooBig$Runtime = (() => class _RepositoryStatusResponse_TooBig extends Message<_RepositoryStatusResponse_TooBig> {
  declare maxSize: number;
  constructor(data?: PartialMessage<_RepositoryStatusResponse_TooBig>) {
    super();
    this.maxSize = 0;
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_TooBig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_TooBig {
    return new _RepositoryStatusResponse_TooBig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_TooBig {
    return new _RepositoryStatusResponse_TooBig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_TooBig {
    return new _RepositoryStatusResponse_TooBig().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_TooBig | PlainMessage<_RepositoryStatusResponse_TooBig> | undefined | null, b2: _RepositoryStatusResponse_TooBig | PlainMessage<_RepositoryStatusResponse_TooBig> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_TooBig as unknown as MessageType<_RepositoryStatusResponse_TooBig>, a, b2);
  }
})();
export type RepositoryStatusResponse_TooBig = InstanceType<typeof RepositoryStatusResponse_TooBig$Runtime>;
var RepositoryStatusResponse_TooBig: MessageType<RepositoryStatusResponse_TooBig> = RepositoryStatusResponse_TooBig$Runtime as unknown as MessageType<RepositoryStatusResponse_TooBig>;
(RepositoryStatusResponse_TooBig as MutableMessageType<RepositoryStatusResponse_TooBig>).runtime = proto3;
(RepositoryStatusResponse_TooBig as MutableMessageType<RepositoryStatusResponse_TooBig>).typeName = "aiserver.v1.RepositoryStatusResponse.TooBig";
(RepositoryStatusResponse_TooBig as MutableMessageType<RepositoryStatusResponse_TooBig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "max_size",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RepositoryStatusResponse_AuthTokenNotFound$Runtime = (() => class _RepositoryStatusResponse_AuthTokenNotFound extends Message<_RepositoryStatusResponse_AuthTokenNotFound> {
  constructor(data?: PartialMessage<_RepositoryStatusResponse_AuthTokenNotFound>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_AuthTokenNotFound);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_AuthTokenNotFound {
    return new _RepositoryStatusResponse_AuthTokenNotFound().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_AuthTokenNotFound {
    return new _RepositoryStatusResponse_AuthTokenNotFound().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_AuthTokenNotFound {
    return new _RepositoryStatusResponse_AuthTokenNotFound().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_AuthTokenNotFound | PlainMessage<_RepositoryStatusResponse_AuthTokenNotFound> | undefined | null, b2: _RepositoryStatusResponse_AuthTokenNotFound | PlainMessage<_RepositoryStatusResponse_AuthTokenNotFound> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_AuthTokenNotFound as unknown as MessageType<_RepositoryStatusResponse_AuthTokenNotFound>, a, b2);
  }
})();
export type RepositoryStatusResponse_AuthTokenNotFound = InstanceType<typeof RepositoryStatusResponse_AuthTokenNotFound$Runtime>;
var RepositoryStatusResponse_AuthTokenNotFound: MessageType<RepositoryStatusResponse_AuthTokenNotFound> = RepositoryStatusResponse_AuthTokenNotFound$Runtime as unknown as MessageType<RepositoryStatusResponse_AuthTokenNotFound>;
(RepositoryStatusResponse_AuthTokenNotFound as MutableMessageType<RepositoryStatusResponse_AuthTokenNotFound>).runtime = proto3;
(RepositoryStatusResponse_AuthTokenNotFound as MutableMessageType<RepositoryStatusResponse_AuthTokenNotFound>).typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotFound";
(RepositoryStatusResponse_AuthTokenNotFound as MutableMessageType<RepositoryStatusResponse_AuthTokenNotFound>).fields = proto3.util.newFieldList(() => []);
var RepositoryStatusResponse_AuthTokenNotAuthorized$Runtime = (() => class _RepositoryStatusResponse_AuthTokenNotAuthorized extends Message<_RepositoryStatusResponse_AuthTokenNotAuthorized> {
  constructor(data?: PartialMessage<_RepositoryStatusResponse_AuthTokenNotAuthorized>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_AuthTokenNotAuthorized);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_AuthTokenNotAuthorized {
    return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_AuthTokenNotAuthorized {
    return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_AuthTokenNotAuthorized {
    return new _RepositoryStatusResponse_AuthTokenNotAuthorized().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_AuthTokenNotAuthorized | PlainMessage<_RepositoryStatusResponse_AuthTokenNotAuthorized> | undefined | null, b2: _RepositoryStatusResponse_AuthTokenNotAuthorized | PlainMessage<_RepositoryStatusResponse_AuthTokenNotAuthorized> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_AuthTokenNotAuthorized as unknown as MessageType<_RepositoryStatusResponse_AuthTokenNotAuthorized>, a, b2);
  }
})();
export type RepositoryStatusResponse_AuthTokenNotAuthorized = InstanceType<typeof RepositoryStatusResponse_AuthTokenNotAuthorized$Runtime>;
var RepositoryStatusResponse_AuthTokenNotAuthorized: MessageType<RepositoryStatusResponse_AuthTokenNotAuthorized> = RepositoryStatusResponse_AuthTokenNotAuthorized$Runtime as unknown as MessageType<RepositoryStatusResponse_AuthTokenNotAuthorized>;
(RepositoryStatusResponse_AuthTokenNotAuthorized as MutableMessageType<RepositoryStatusResponse_AuthTokenNotAuthorized>).runtime = proto3;
(RepositoryStatusResponse_AuthTokenNotAuthorized as MutableMessageType<RepositoryStatusResponse_AuthTokenNotAuthorized>).typeName = "aiserver.v1.RepositoryStatusResponse.AuthTokenNotAuthorized";
(RepositoryStatusResponse_AuthTokenNotAuthorized as MutableMessageType<RepositoryStatusResponse_AuthTokenNotAuthorized>).fields = proto3.util.newFieldList(() => []);
var RepositoryStatusResponse_EmptyMessage$Runtime = (() => class _RepositoryStatusResponse_EmptyMessage extends Message<_RepositoryStatusResponse_EmptyMessage> {
  constructor(data?: PartialMessage<_RepositoryStatusResponse_EmptyMessage>) {
    super();
    proto3.util.initPartial(data, this as _RepositoryStatusResponse_EmptyMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryStatusResponse_EmptyMessage {
    return new _RepositoryStatusResponse_EmptyMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_EmptyMessage {
    return new _RepositoryStatusResponse_EmptyMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryStatusResponse_EmptyMessage {
    return new _RepositoryStatusResponse_EmptyMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryStatusResponse_EmptyMessage | PlainMessage<_RepositoryStatusResponse_EmptyMessage> | undefined | null, b2: _RepositoryStatusResponse_EmptyMessage | PlainMessage<_RepositoryStatusResponse_EmptyMessage> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryStatusResponse_EmptyMessage as unknown as MessageType<_RepositoryStatusResponse_EmptyMessage>, a, b2);
  }
})();
export type RepositoryStatusResponse_EmptyMessage = InstanceType<typeof RepositoryStatusResponse_EmptyMessage$Runtime>;
var RepositoryStatusResponse_EmptyMessage: MessageType<RepositoryStatusResponse_EmptyMessage> = RepositoryStatusResponse_EmptyMessage$Runtime as unknown as MessageType<RepositoryStatusResponse_EmptyMessage>;
(RepositoryStatusResponse_EmptyMessage as MutableMessageType<RepositoryStatusResponse_EmptyMessage>).runtime = proto3;
(RepositoryStatusResponse_EmptyMessage as MutableMessageType<RepositoryStatusResponse_EmptyMessage>).typeName = "aiserver.v1.RepositoryStatusResponse.EmptyMessage";
(RepositoryStatusResponse_EmptyMessage as MutableMessageType<RepositoryStatusResponse_EmptyMessage>).fields = proto3.util.newFieldList(() => []);
var RepositoryInfo$Runtime = (() => class _RepositoryInfo extends Message<_RepositoryInfo> {
  declare relativeWorkspacePath: string;
  declare remoteUrls: string[];
  declare remoteNames: string[];
  declare repoName: string;
  declare repoOwner: string;
  declare isTracked: boolean;
  declare isLocal: boolean;
  declare numFiles?: number;
  declare orthogonalTransformSeed?: number;
  declare preferredEmbeddingModel?: EmbeddingModel;
  declare workspaceUri: string;
  declare preferredDbProvider?: DatabaseProvider;
  constructor(data?: PartialMessage<_RepositoryInfo>) {
    super();
    this.relativeWorkspacePath = "";
    this.remoteUrls = [];
    this.remoteNames = [];
    this.repoName = "";
    this.repoOwner = "";
    this.isTracked = false;
    this.isLocal = false;
    this.workspaceUri = "";
    proto3.util.initPartial(data, this as _RepositoryInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryInfo {
    return new _RepositoryInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryInfo {
    return new _RepositoryInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryInfo {
    return new _RepositoryInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryInfo | PlainMessage<_RepositoryInfo> | undefined | null, b2: _RepositoryInfo | PlainMessage<_RepositoryInfo> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryInfo as unknown as MessageType<_RepositoryInfo>, a, b2);
  }
})();
export type RepositoryInfo = InstanceType<typeof RepositoryInfo$Runtime>;
var RepositoryInfo: MessageType<RepositoryInfo> = RepositoryInfo$Runtime as unknown as MessageType<RepositoryInfo>;
(RepositoryInfo as MutableMessageType<RepositoryInfo>).runtime = proto3;
(RepositoryInfo as MutableMessageType<RepositoryInfo>).typeName = "aiserver.v1.RepositoryInfo";
(RepositoryInfo as MutableMessageType<RepositoryInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "remote_urls", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "remote_names", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "repo_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "repo_owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "is_tracked",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "is_local",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "num_files", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "orthogonal_transform_seed", kind: "scalar", T: 1, opt: true },
  { no: 10, name: "preferred_embedding_model", kind: "enum", T: proto3.getEnumType(EmbeddingModel), opt: true },
  {
    no: 11,
    name: "workspace_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 12, name: "preferred_db_provider", kind: "enum", T: proto3.getEnumType(DatabaseProvider), opt: true }
]);
var SearchRepositoryDeepContextRequest$Runtime = (() => class _SearchRepositoryDeepContextRequest extends Message<_SearchRepositoryDeepContextRequest> {
  declare query: string;
  declare topK: number;
  declare topReflectionsK: number;
  declare indexIds: string[];
  declare useModelOnFiles: boolean;
  declare useReflections: boolean;
  constructor(data?: PartialMessage<_SearchRepositoryDeepContextRequest>) {
    super();
    this.query = "";
    this.topK = 0;
    this.topReflectionsK = 0;
    this.indexIds = [];
    this.useModelOnFiles = false;
    this.useReflections = false;
    proto3.util.initPartial(data, this as _SearchRepositoryDeepContextRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchRepositoryDeepContextRequest {
    return new _SearchRepositoryDeepContextRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchRepositoryDeepContextRequest {
    return new _SearchRepositoryDeepContextRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchRepositoryDeepContextRequest {
    return new _SearchRepositoryDeepContextRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchRepositoryDeepContextRequest | PlainMessage<_SearchRepositoryDeepContextRequest> | undefined | null, b2: _SearchRepositoryDeepContextRequest | PlainMessage<_SearchRepositoryDeepContextRequest> | undefined | null): boolean {
    return proto3.util.equals(_SearchRepositoryDeepContextRequest as unknown as MessageType<_SearchRepositoryDeepContextRequest>, a, b2);
  }
})();
export type SearchRepositoryDeepContextRequest = InstanceType<typeof SearchRepositoryDeepContextRequest$Runtime>;
var SearchRepositoryDeepContextRequest: MessageType<SearchRepositoryDeepContextRequest> = SearchRepositoryDeepContextRequest$Runtime as unknown as MessageType<SearchRepositoryDeepContextRequest>;
(SearchRepositoryDeepContextRequest as MutableMessageType<SearchRepositoryDeepContextRequest>).runtime = proto3;
(SearchRepositoryDeepContextRequest as MutableMessageType<SearchRepositoryDeepContextRequest>).typeName = "aiserver.v1.SearchRepositoryDeepContextRequest";
(SearchRepositoryDeepContextRequest as MutableMessageType<SearchRepositoryDeepContextRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "top_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "top_reflections_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "index_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 5,
    name: "use_model_on_files",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "use_reflections",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var NodeResult$Runtime = (() => class _NodeResult extends Message<_NodeResult> {
  declare node?: IndexFileData_NodeData;
  declare file?: File2;
  declare score: number;
  constructor(data?: PartialMessage<_NodeResult>) {
    super();
    this.score = 0;
    proto3.util.initPartial(data, this as _NodeResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NodeResult {
    return new _NodeResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NodeResult {
    return new _NodeResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NodeResult {
    return new _NodeResult().fromJsonString(jsonString, options);
  }
  static equals(a: _NodeResult | PlainMessage<_NodeResult> | undefined | null, b2: _NodeResult | PlainMessage<_NodeResult> | undefined | null): boolean {
    return proto3.util.equals(_NodeResult as unknown as MessageType<_NodeResult>, a, b2);
  }
})();
export type NodeResult = InstanceType<typeof NodeResult$Runtime>;
var NodeResult: MessageType<NodeResult> = NodeResult$Runtime as unknown as MessageType<NodeResult>;
(NodeResult as MutableMessageType<NodeResult>).runtime = proto3;
(NodeResult as MutableMessageType<NodeResult>).typeName = "aiserver.v1.NodeResult";
(NodeResult as MutableMessageType<NodeResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "node", kind: "message", T: IndexFileData_NodeData },
  { no: 2, name: "file", kind: "message", T: File2 },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var ReflectionResult$Runtime = (() => class _ReflectionResult extends Message<_ReflectionResult> {
  declare reflection?: ReflectionData;
  declare score: number;
  constructor(data?: PartialMessage<_ReflectionResult>) {
    super();
    this.score = 0;
    proto3.util.initPartial(data, this as _ReflectionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReflectionResult {
    return new _ReflectionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReflectionResult {
    return new _ReflectionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReflectionResult {
    return new _ReflectionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReflectionResult | PlainMessage<_ReflectionResult> | undefined | null, b2: _ReflectionResult | PlainMessage<_ReflectionResult> | undefined | null): boolean {
    return proto3.util.equals(_ReflectionResult as unknown as MessageType<_ReflectionResult>, a, b2);
  }
})();
export type ReflectionResult = InstanceType<typeof ReflectionResult$Runtime>;
var ReflectionResult: MessageType<ReflectionResult> = ReflectionResult$Runtime as unknown as MessageType<ReflectionResult>;
(ReflectionResult as MutableMessageType<ReflectionResult>).runtime = proto3;
(ReflectionResult as MutableMessageType<ReflectionResult>).typeName = "aiserver.v1.ReflectionResult";
(ReflectionResult as MutableMessageType<ReflectionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "reflection", kind: "message", T: ReflectionData },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  }
]);
var SearchRepositoryDeepContextResponse$Runtime = (() => class _SearchRepositoryDeepContextResponse extends Message<_SearchRepositoryDeepContextResponse> {
  declare topNodes: NodeResult[];
  declare reflections: ReflectionResult[];
  declare indexId: string;
  constructor(data?: PartialMessage<_SearchRepositoryDeepContextResponse>) {
    super();
    this.topNodes = [];
    this.reflections = [];
    this.indexId = "";
    proto3.util.initPartial(data, this as _SearchRepositoryDeepContextResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchRepositoryDeepContextResponse {
    return new _SearchRepositoryDeepContextResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchRepositoryDeepContextResponse {
    return new _SearchRepositoryDeepContextResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchRepositoryDeepContextResponse {
    return new _SearchRepositoryDeepContextResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchRepositoryDeepContextResponse | PlainMessage<_SearchRepositoryDeepContextResponse> | undefined | null, b2: _SearchRepositoryDeepContextResponse | PlainMessage<_SearchRepositoryDeepContextResponse> | undefined | null): boolean {
    return proto3.util.equals(_SearchRepositoryDeepContextResponse as unknown as MessageType<_SearchRepositoryDeepContextResponse>, a, b2);
  }
})();
export type SearchRepositoryDeepContextResponse = InstanceType<typeof SearchRepositoryDeepContextResponse$Runtime>;
var SearchRepositoryDeepContextResponse: MessageType<SearchRepositoryDeepContextResponse> = SearchRepositoryDeepContextResponse$Runtime as unknown as MessageType<SearchRepositoryDeepContextResponse>;
(SearchRepositoryDeepContextResponse as MutableMessageType<SearchRepositoryDeepContextResponse>).runtime = proto3;
(SearchRepositoryDeepContextResponse as MutableMessageType<SearchRepositoryDeepContextResponse>).typeName = "aiserver.v1.SearchRepositoryDeepContextResponse";
(SearchRepositoryDeepContextResponse as MutableMessageType<SearchRepositoryDeepContextResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "top_nodes", kind: "message", T: NodeResult, repeated: true },
  { no: 2, name: "reflections", kind: "message", T: ReflectionResult, repeated: true },
  {
    no: 3,
    name: "index_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetLineNumberClassificationsRequest$Runtime = (() => class _GetLineNumberClassificationsRequest extends Message<_GetLineNumberClassificationsRequest> {
  declare query: string;
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_GetLineNumberClassificationsRequest>) {
    super();
    this.query = "";
    this.codeResults = [];
    proto3.util.initPartial(data, this as _GetLineNumberClassificationsRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLineNumberClassificationsRequest {
    return new _GetLineNumberClassificationsRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLineNumberClassificationsRequest {
    return new _GetLineNumberClassificationsRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLineNumberClassificationsRequest {
    return new _GetLineNumberClassificationsRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLineNumberClassificationsRequest | PlainMessage<_GetLineNumberClassificationsRequest> | undefined | null, b2: _GetLineNumberClassificationsRequest | PlainMessage<_GetLineNumberClassificationsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetLineNumberClassificationsRequest as unknown as MessageType<_GetLineNumberClassificationsRequest>, a, b2);
  }
})();
export type GetLineNumberClassificationsRequest = InstanceType<typeof GetLineNumberClassificationsRequest$Runtime>;
var GetLineNumberClassificationsRequest: MessageType<GetLineNumberClassificationsRequest> = GetLineNumberClassificationsRequest$Runtime as unknown as MessageType<GetLineNumberClassificationsRequest>;
(GetLineNumberClassificationsRequest as MutableMessageType<GetLineNumberClassificationsRequest>).runtime = proto3;
(GetLineNumberClassificationsRequest as MutableMessageType<GetLineNumberClassificationsRequest>).typeName = "aiserver.v1.GetLineNumberClassificationsRequest";
(GetLineNumberClassificationsRequest as MutableMessageType<GetLineNumberClassificationsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var GetLineNumberClassificationsResponse$Runtime = (() => class _GetLineNumberClassificationsResponse extends Message<_GetLineNumberClassificationsResponse> {
  declare classifiedResult?: CodeResultWithClassificationInfo;
  constructor(data?: PartialMessage<_GetLineNumberClassificationsResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetLineNumberClassificationsResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetLineNumberClassificationsResponse {
    return new _GetLineNumberClassificationsResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetLineNumberClassificationsResponse {
    return new _GetLineNumberClassificationsResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetLineNumberClassificationsResponse {
    return new _GetLineNumberClassificationsResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetLineNumberClassificationsResponse | PlainMessage<_GetLineNumberClassificationsResponse> | undefined | null, b2: _GetLineNumberClassificationsResponse | PlainMessage<_GetLineNumberClassificationsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetLineNumberClassificationsResponse as unknown as MessageType<_GetLineNumberClassificationsResponse>, a, b2);
  }
})();
export type GetLineNumberClassificationsResponse = InstanceType<typeof GetLineNumberClassificationsResponse$Runtime>;
var GetLineNumberClassificationsResponse: MessageType<GetLineNumberClassificationsResponse> = GetLineNumberClassificationsResponse$Runtime as unknown as MessageType<GetLineNumberClassificationsResponse>;
(GetLineNumberClassificationsResponse as MutableMessageType<GetLineNumberClassificationsResponse>).runtime = proto3;
(GetLineNumberClassificationsResponse as MutableMessageType<GetLineNumberClassificationsResponse>).typeName = "aiserver.v1.GetLineNumberClassificationsResponse";
(GetLineNumberClassificationsResponse as MutableMessageType<GetLineNumberClassificationsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "classified_result", kind: "message", T: CodeResultWithClassificationInfo }
]);
var GetCopyStatusRequest$Runtime = (() => class _GetCopyStatusRequest extends Message<_GetCopyStatusRequest> {
  declare codebaseId: string;
  declare copyTaskHandle: string;
  constructor(data?: PartialMessage<_GetCopyStatusRequest>) {
    super();
    this.codebaseId = "";
    this.copyTaskHandle = "";
    proto3.util.initPartial(data, this as _GetCopyStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCopyStatusRequest {
    return new _GetCopyStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCopyStatusRequest {
    return new _GetCopyStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCopyStatusRequest {
    return new _GetCopyStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCopyStatusRequest | PlainMessage<_GetCopyStatusRequest> | undefined | null, b2: _GetCopyStatusRequest | PlainMessage<_GetCopyStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetCopyStatusRequest as unknown as MessageType<_GetCopyStatusRequest>, a, b2);
  }
})();
export type GetCopyStatusRequest = InstanceType<typeof GetCopyStatusRequest$Runtime>;
var GetCopyStatusRequest: MessageType<GetCopyStatusRequest> = GetCopyStatusRequest$Runtime as unknown as MessageType<GetCopyStatusRequest>;
(GetCopyStatusRequest as MutableMessageType<GetCopyStatusRequest>).runtime = proto3;
(GetCopyStatusRequest as MutableMessageType<GetCopyStatusRequest>).typeName = "aiserver.v1.GetCopyStatusRequest";
(GetCopyStatusRequest as MutableMessageType<GetCopyStatusRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "codebase_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "copy_task_handle",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetCopyStatusResponse$Runtime = (() => class _GetCopyStatusResponse extends Message<_GetCopyStatusResponse> {
  declare phase: GetCopyStatusResponse_Phase;
  declare percentDone: number;
  declare errorMessage: string;
  declare completedStatus?: GetCopyStatusResponse_CompletedStatus;
  constructor(data?: PartialMessage<_GetCopyStatusResponse>) {
    super();
    this.phase = GetCopyStatusResponse_Phase.UNSPECIFIED;
    this.percentDone = 0;
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _GetCopyStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetCopyStatusResponse {
    return new _GetCopyStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetCopyStatusResponse {
    return new _GetCopyStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetCopyStatusResponse {
    return new _GetCopyStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetCopyStatusResponse | PlainMessage<_GetCopyStatusResponse> | undefined | null, b2: _GetCopyStatusResponse | PlainMessage<_GetCopyStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetCopyStatusResponse as unknown as MessageType<_GetCopyStatusResponse>, a, b2);
  }
})();
export type GetCopyStatusResponse = InstanceType<typeof GetCopyStatusResponse$Runtime>;
var GetCopyStatusResponse: MessageType<GetCopyStatusResponse> = GetCopyStatusResponse$Runtime as unknown as MessageType<GetCopyStatusResponse>;
(GetCopyStatusResponse as MutableMessageType<GetCopyStatusResponse>).runtime = proto3;
(GetCopyStatusResponse as MutableMessageType<GetCopyStatusResponse>).typeName = "aiserver.v1.GetCopyStatusResponse";
(GetCopyStatusResponse as MutableMessageType<GetCopyStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "phase", kind: "enum", T: proto3.getEnumType(GetCopyStatusResponse_Phase) },
  {
    no: 2,
    name: "percent_done",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 3,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "completed_status", kind: "enum", T: proto3.getEnumType(GetCopyStatusResponse_CompletedStatus), opt: true }
]);
(function(GetCopyStatusResponse_Phase2) {
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["INITIALIZING"] = 1] = "INITIALIZING";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING"] = 2] = "COPYING";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COMPLETED"] = 3] = "COMPLETED";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["CREATING_SEARCH_FILTERS"] = 4] = "CREATING_SEARCH_FILTERS";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING_SEARCH_STATE"] = 5] = "COPYING_SEARCH_STATE";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["COPYING_TREE_STATE"] = 6] = "COPYING_TREE_STATE";
  GetCopyStatusResponse_Phase2[GetCopyStatusResponse_Phase2["SYNCING_COPY"] = 7] = "SYNCING_COPY";
})(GetCopyStatusResponse_Phase! || (GetCopyStatusResponse_Phase = {} as typeof GetCopyStatusResponse_Phase));
proto3.util.setEnumType(GetCopyStatusResponse_Phase, "aiserver.v1.GetCopyStatusResponse.Phase", [
  { no: 0, name: "PHASE_UNSPECIFIED" },
  { no: 1, name: "PHASE_INITIALIZING" },
  { no: 2, name: "PHASE_COPYING" },
  { no: 3, name: "PHASE_COMPLETED" },
  { no: 4, name: "PHASE_CREATING_SEARCH_FILTERS" },
  { no: 5, name: "PHASE_COPYING_SEARCH_STATE" },
  { no: 6, name: "PHASE_COPYING_TREE_STATE" },
  { no: 7, name: "PHASE_SYNCING_COPY" }
]);
(function(GetCopyStatusResponse_CompletedStatus2) {
  GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["UP_TO_DATE"] = 1] = "UP_TO_DATE";
  GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["OUT_OF_SYNC"] = 2] = "OUT_OF_SYNC";
  GetCopyStatusResponse_CompletedStatus2[GetCopyStatusResponse_CompletedStatus2["FAILURE"] = 3] = "FAILURE";
})(GetCopyStatusResponse_CompletedStatus! || (GetCopyStatusResponse_CompletedStatus = {} as typeof GetCopyStatusResponse_CompletedStatus));
proto3.util.setEnumType(GetCopyStatusResponse_CompletedStatus, "aiserver.v1.GetCopyStatusResponse.CompletedStatus", [
  { no: 0, name: "COMPLETED_STATUS_UNSPECIFIED" },
  { no: 1, name: "COMPLETED_STATUS_UP_TO_DATE" },
  { no: 2, name: "COMPLETED_STATUS_OUT_OF_SYNC" },
  { no: 3, name: "COMPLETED_STATUS_FAILURE" }
]);
var IndexedFile$Runtime = (() => class _IndexedFile extends Message<_IndexedFile> {
  declare path: string;
  declare diff: string[];
  constructor(data?: PartialMessage<_IndexedFile>) {
    super();
    this.path = "";
    this.diff = [];
    proto3.util.initPartial(data, this as _IndexedFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IndexedFile {
    return new _IndexedFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IndexedFile {
    return new _IndexedFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IndexedFile {
    return new _IndexedFile().fromJsonString(jsonString, options);
  }
  static equals(a: _IndexedFile | PlainMessage<_IndexedFile> | undefined | null, b2: _IndexedFile | PlainMessage<_IndexedFile> | undefined | null): boolean {
    return proto3.util.equals(_IndexedFile as unknown as MessageType<_IndexedFile>, a, b2);
  }
})();
export type IndexedFile = InstanceType<typeof IndexedFile$Runtime>;
var IndexedFile: MessageType<IndexedFile> = IndexedFile$Runtime as unknown as MessageType<IndexedFile>;
(IndexedFile as MutableMessageType<IndexedFile>).runtime = proto3;
(IndexedFile as MutableMessageType<IndexedFile>).typeName = "aiserver.v1.IndexedFile";
(IndexedFile as MutableMessageType<IndexedFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff", kind: "scalar", T: 9, repeated: true }
]);
var IndexedPullRequest$Runtime = (() => class _IndexedPullRequest extends Message<_IndexedPullRequest> {
  declare prNumber: number;
  declare sha: string;
  declare message: string;
  declare changedFiles: IndexedFile[];
  declare generation: number;
  declare commitSecret: string;
  declare unixTimestamp: bigint;
  declare title?: string;
  declare author?: string;
  constructor(data?: PartialMessage<_IndexedPullRequest>) {
    super();
    this.prNumber = 0;
    this.sha = "";
    this.message = "";
    this.changedFiles = [];
    this.generation = 0;
    this.commitSecret = "";
    this.unixTimestamp = protoInt64.zero;
    proto3.util.initPartial(data, this as _IndexedPullRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IndexedPullRequest {
    return new _IndexedPullRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IndexedPullRequest {
    return new _IndexedPullRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IndexedPullRequest {
    return new _IndexedPullRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _IndexedPullRequest | PlainMessage<_IndexedPullRequest> | undefined | null, b2: _IndexedPullRequest | PlainMessage<_IndexedPullRequest> | undefined | null): boolean {
    return proto3.util.equals(_IndexedPullRequest as unknown as MessageType<_IndexedPullRequest>, a, b2);
  }
})();
export type IndexedPullRequest = InstanceType<typeof IndexedPullRequest$Runtime>;
var IndexedPullRequest: MessageType<IndexedPullRequest> = IndexedPullRequest$Runtime as unknown as MessageType<IndexedPullRequest>;
(IndexedPullRequest as MutableMessageType<IndexedPullRequest>).runtime = proto3;
(IndexedPullRequest as MutableMessageType<IndexedPullRequest>).typeName = "aiserver.v1.IndexedPullRequest";
(IndexedPullRequest as MutableMessageType<IndexedPullRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "changed_files", kind: "message", T: IndexedFile, repeated: true },
  {
    no: 5,
    name: "generation",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 6,
    name: "commit_secret",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "unix_timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 8, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "author", kind: "scalar", T: 9, opt: true }
]);
var RepoHistoryInitHandshakeRequest$Runtime = (() => class _RepoHistoryInitHandshakeRequest extends Message<_RepoHistoryInitHandshakeRequest> {
  declare repository?: RepositoryInfo;
  declare origin: string;
  declare testOriginCommit?: string;
  declare testOriginCommitSecret?: string;
  declare sendCopyCandidates?: boolean;
  constructor(data?: PartialMessage<_RepoHistoryInitHandshakeRequest>) {
    super();
    this.origin = "";
    proto3.util.initPartial(data, this as _RepoHistoryInitHandshakeRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistoryInitHandshakeRequest {
    return new _RepoHistoryInitHandshakeRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistoryInitHandshakeRequest {
    return new _RepoHistoryInitHandshakeRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistoryInitHandshakeRequest {
    return new _RepoHistoryInitHandshakeRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistoryInitHandshakeRequest | PlainMessage<_RepoHistoryInitHandshakeRequest> | undefined | null, b2: _RepoHistoryInitHandshakeRequest | PlainMessage<_RepoHistoryInitHandshakeRequest> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistoryInitHandshakeRequest as unknown as MessageType<_RepoHistoryInitHandshakeRequest>, a, b2);
  }
})();
export type RepoHistoryInitHandshakeRequest = InstanceType<typeof RepoHistoryInitHandshakeRequest$Runtime>;
var RepoHistoryInitHandshakeRequest: MessageType<RepoHistoryInitHandshakeRequest> = RepoHistoryInitHandshakeRequest$Runtime as unknown as MessageType<RepoHistoryInitHandshakeRequest>;
(RepoHistoryInitHandshakeRequest as MutableMessageType<RepoHistoryInitHandshakeRequest>).runtime = proto3;
(RepoHistoryInitHandshakeRequest as MutableMessageType<RepoHistoryInitHandshakeRequest>).typeName = "aiserver.v1.RepoHistoryInitHandshakeRequest";
(RepoHistoryInitHandshakeRequest as MutableMessageType<RepoHistoryInitHandshakeRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "origin",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "test_origin_commit", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "test_origin_commit_secret", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "send_copy_candidates", kind: "scalar", T: 8, opt: true }
]);
var RepoHistoryInfo$Runtime = (() => class _RepoHistoryInfo extends Message<_RepoHistoryInfo> {
  declare historyId: string;
  declare branchName?: string;
  declare lastIndexedCommit?: string;
  declare lastIndexedCommitGeneration?: number;
  declare syncBitmap?: Uint8Array;
  constructor(data?: PartialMessage<_RepoHistoryInfo>) {
    super();
    this.historyId = "";
    proto3.util.initPartial(data, this as _RepoHistoryInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistoryInfo {
    return new _RepoHistoryInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistoryInfo {
    return new _RepoHistoryInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistoryInfo {
    return new _RepoHistoryInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistoryInfo | PlainMessage<_RepoHistoryInfo> | undefined | null, b2: _RepoHistoryInfo | PlainMessage<_RepoHistoryInfo> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistoryInfo as unknown as MessageType<_RepoHistoryInfo>, a, b2);
  }
})();
export type RepoHistoryInfo = InstanceType<typeof RepoHistoryInfo$Runtime>;
var RepoHistoryInfo: MessageType<RepoHistoryInfo> = RepoHistoryInfo$Runtime as unknown as MessageType<RepoHistoryInfo>;
(RepoHistoryInfo as MutableMessageType<RepoHistoryInfo>).runtime = proto3;
(RepoHistoryInfo as MutableMessageType<RepoHistoryInfo>).typeName = "aiserver.v1.RepoHistoryInfo";
(RepoHistoryInfo as MutableMessageType<RepoHistoryInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "history_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "branch_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "last_indexed_commit", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "last_indexed_commit_generation", kind: "scalar", T: 13, opt: true },
  { no: 5, name: "sync_bitmap", kind: "scalar", T: 12, opt: true }
]);
var RepoHistoryInitHandshakeResponse$Runtime = (() => class _RepoHistoryInitHandshakeResponse extends Message<_RepoHistoryInitHandshakeResponse> {
  declare status: RepoHistoryInitHandshakeResponse_Status;
  declare histories: RepoHistoryInfo[];
  declare copyCandidateNonce?: string;
  declare copyCandidates: string[];
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_RepoHistoryInitHandshakeResponse>) {
    super();
    this.status = RepoHistoryInitHandshakeResponse_Status.UNSPECIFIED;
    this.histories = [];
    this.copyCandidates = [];
    proto3.util.initPartial(data, this as _RepoHistoryInitHandshakeResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistoryInitHandshakeResponse {
    return new _RepoHistoryInitHandshakeResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistoryInitHandshakeResponse {
    return new _RepoHistoryInitHandshakeResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistoryInitHandshakeResponse {
    return new _RepoHistoryInitHandshakeResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistoryInitHandshakeResponse | PlainMessage<_RepoHistoryInitHandshakeResponse> | undefined | null, b2: _RepoHistoryInitHandshakeResponse | PlainMessage<_RepoHistoryInitHandshakeResponse> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistoryInitHandshakeResponse as unknown as MessageType<_RepoHistoryInitHandshakeResponse>, a, b2);
  }
})();
export type RepoHistoryInitHandshakeResponse = InstanceType<typeof RepoHistoryInitHandshakeResponse$Runtime>;
var RepoHistoryInitHandshakeResponse: MessageType<RepoHistoryInitHandshakeResponse> = RepoHistoryInitHandshakeResponse$Runtime as unknown as MessageType<RepoHistoryInitHandshakeResponse>;
(RepoHistoryInitHandshakeResponse as MutableMessageType<RepoHistoryInitHandshakeResponse>).runtime = proto3;
(RepoHistoryInitHandshakeResponse as MutableMessageType<RepoHistoryInitHandshakeResponse>).typeName = "aiserver.v1.RepoHistoryInitHandshakeResponse";
(RepoHistoryInitHandshakeResponse as MutableMessageType<RepoHistoryInitHandshakeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(RepoHistoryInitHandshakeResponse_Status) },
  { no: 2, name: "histories", kind: "message", T: RepoHistoryInfo, repeated: true },
  { no: 3, name: "copy_candidate_nonce", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "copy_candidates", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
(function(RepoHistoryInitHandshakeResponse_Status2) {
  RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["FAILURE"] = 1] = "FAILURE";
  RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["SUCCESS"] = 2] = "SUCCESS";
  RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["TEST_CANDIDATES"] = 3] = "TEST_CANDIDATES";
  RepoHistoryInitHandshakeResponse_Status2[RepoHistoryInitHandshakeResponse_Status2["NO_INDEXING"] = 4] = "NO_INDEXING";
})(RepoHistoryInitHandshakeResponse_Status! || (RepoHistoryInitHandshakeResponse_Status = {} as typeof RepoHistoryInitHandshakeResponse_Status));
proto3.util.setEnumType(RepoHistoryInitHandshakeResponse_Status, "aiserver.v1.RepoHistoryInitHandshakeResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_FAILURE" },
  { no: 2, name: "STATUS_SUCCESS" },
  { no: 3, name: "STATUS_TEST_CANDIDATES" },
  { no: 4, name: "STATUS_NO_INDEXING" }
]);
var RepoHistorySyncOneRequest$Runtime = (() => class _RepoHistorySyncOneRequest extends Message<_RepoHistorySyncOneRequest> {
  declare historyId: string;
  declare pullRequests: IndexedPullRequest[];
  declare ignoreCommits: number[];
  constructor(data?: PartialMessage<_RepoHistorySyncOneRequest>) {
    super();
    this.historyId = "";
    this.pullRequests = [];
    this.ignoreCommits = [];
    proto3.util.initPartial(data, this as _RepoHistorySyncOneRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistorySyncOneRequest {
    return new _RepoHistorySyncOneRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistorySyncOneRequest {
    return new _RepoHistorySyncOneRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistorySyncOneRequest {
    return new _RepoHistorySyncOneRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistorySyncOneRequest | PlainMessage<_RepoHistorySyncOneRequest> | undefined | null, b2: _RepoHistorySyncOneRequest | PlainMessage<_RepoHistorySyncOneRequest> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistorySyncOneRequest as unknown as MessageType<_RepoHistorySyncOneRequest>, a, b2);
  }
})();
export type RepoHistorySyncOneRequest = InstanceType<typeof RepoHistorySyncOneRequest$Runtime>;
var RepoHistorySyncOneRequest: MessageType<RepoHistorySyncOneRequest> = RepoHistorySyncOneRequest$Runtime as unknown as MessageType<RepoHistorySyncOneRequest>;
(RepoHistorySyncOneRequest as MutableMessageType<RepoHistorySyncOneRequest>).runtime = proto3;
(RepoHistorySyncOneRequest as MutableMessageType<RepoHistorySyncOneRequest>).typeName = "aiserver.v1.RepoHistorySyncOneRequest";
(RepoHistorySyncOneRequest as MutableMessageType<RepoHistorySyncOneRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "history_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "pull_requests", kind: "message", T: IndexedPullRequest, repeated: true },
  { no: 3, name: "ignore_commits", kind: "scalar", T: 13, repeated: true }
]);
var RepoHistorySyncOneResponse$Runtime = (() => class _RepoHistorySyncOneResponse extends Message<_RepoHistorySyncOneResponse> {
  declare status: RepoHistorySyncOneResponse_Status;
  constructor(data?: PartialMessage<_RepoHistorySyncOneResponse>) {
    super();
    this.status = RepoHistorySyncOneResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RepoHistorySyncOneResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistorySyncOneResponse {
    return new _RepoHistorySyncOneResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistorySyncOneResponse {
    return new _RepoHistorySyncOneResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistorySyncOneResponse {
    return new _RepoHistorySyncOneResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistorySyncOneResponse | PlainMessage<_RepoHistorySyncOneResponse> | undefined | null, b2: _RepoHistorySyncOneResponse | PlainMessage<_RepoHistorySyncOneResponse> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistorySyncOneResponse as unknown as MessageType<_RepoHistorySyncOneResponse>, a, b2);
  }
})();
export type RepoHistorySyncOneResponse = InstanceType<typeof RepoHistorySyncOneResponse$Runtime>;
var RepoHistorySyncOneResponse: MessageType<RepoHistorySyncOneResponse> = RepoHistorySyncOneResponse$Runtime as unknown as MessageType<RepoHistorySyncOneResponse>;
(RepoHistorySyncOneResponse as MutableMessageType<RepoHistorySyncOneResponse>).runtime = proto3;
(RepoHistorySyncOneResponse as MutableMessageType<RepoHistorySyncOneResponse>).typeName = "aiserver.v1.RepoHistorySyncOneResponse";
(RepoHistorySyncOneResponse as MutableMessageType<RepoHistorySyncOneResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(RepoHistorySyncOneResponse_Status) }
]);
(function(RepoHistorySyncOneResponse_Status2) {
  RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["SUCCESS"] = 1] = "SUCCESS";
  RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["FAILURE"] = 2] = "FAILURE";
  RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["PARTIAL_SUCCESS"] = 3] = "PARTIAL_SUCCESS";
  RepoHistorySyncOneResponse_Status2[RepoHistorySyncOneResponse_Status2["NOT_INDEXING"] = 4] = "NOT_INDEXING";
})(RepoHistorySyncOneResponse_Status! || (RepoHistorySyncOneResponse_Status = {} as typeof RepoHistorySyncOneResponse_Status));
proto3.util.setEnumType(RepoHistorySyncOneResponse_Status, "aiserver.v1.RepoHistorySyncOneResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_PARTIAL_SUCCESS" },
  { no: 4, name: "STATUS_NOT_INDEXING" }
]);
var RepoHistorySyncCompleteRequest$Runtime = (() => class _RepoHistorySyncCompleteRequest extends Message<_RepoHistorySyncCompleteRequest> {
  declare syncedHistories: RepoHistorySyncCompleteRequest_SyncedHistory[];
  constructor(data?: PartialMessage<_RepoHistorySyncCompleteRequest>) {
    super();
    this.syncedHistories = [];
    proto3.util.initPartial(data, this as _RepoHistorySyncCompleteRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistorySyncCompleteRequest {
    return new _RepoHistorySyncCompleteRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteRequest {
    return new _RepoHistorySyncCompleteRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteRequest {
    return new _RepoHistorySyncCompleteRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistorySyncCompleteRequest | PlainMessage<_RepoHistorySyncCompleteRequest> | undefined | null, b2: _RepoHistorySyncCompleteRequest | PlainMessage<_RepoHistorySyncCompleteRequest> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistorySyncCompleteRequest as unknown as MessageType<_RepoHistorySyncCompleteRequest>, a, b2);
  }
})();
export type RepoHistorySyncCompleteRequest = InstanceType<typeof RepoHistorySyncCompleteRequest$Runtime>;
var RepoHistorySyncCompleteRequest: MessageType<RepoHistorySyncCompleteRequest> = RepoHistorySyncCompleteRequest$Runtime as unknown as MessageType<RepoHistorySyncCompleteRequest>;
(RepoHistorySyncCompleteRequest as MutableMessageType<RepoHistorySyncCompleteRequest>).runtime = proto3;
(RepoHistorySyncCompleteRequest as MutableMessageType<RepoHistorySyncCompleteRequest>).typeName = "aiserver.v1.RepoHistorySyncCompleteRequest";
(RepoHistorySyncCompleteRequest as MutableMessageType<RepoHistorySyncCompleteRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "synced_histories", kind: "message", T: RepoHistorySyncCompleteRequest_SyncedHistory, repeated: true }
]);
(function(RepoHistorySyncCompleteRequest_Status2) {
  RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["SUCCESS"] = 1] = "SUCCESS";
  RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["FAILURE"] = 2] = "FAILURE";
  RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["TOTAL_FAILURE"] = 3] = "TOTAL_FAILURE";
  RepoHistorySyncCompleteRequest_Status2[RepoHistorySyncCompleteRequest_Status2["INTERRUPTED"] = 4] = "INTERRUPTED";
})(RepoHistorySyncCompleteRequest_Status! || (RepoHistorySyncCompleteRequest_Status = {} as typeof RepoHistorySyncCompleteRequest_Status));
proto3.util.setEnumType(RepoHistorySyncCompleteRequest_Status, "aiserver.v1.RepoHistorySyncCompleteRequest.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_SUCCESS" },
  { no: 2, name: "STATUS_FAILURE" },
  { no: 3, name: "STATUS_TOTAL_FAILURE" },
  { no: 4, name: "STATUS_INTERRUPTED" }
]);
var RepoHistorySyncCompleteRequest_SyncedHistory$Runtime = (() => class _RepoHistorySyncCompleteRequest_SyncedHistory extends Message<_RepoHistorySyncCompleteRequest_SyncedHistory> {
  declare historyId: string;
  declare status: RepoHistorySyncCompleteRequest_Status;
  declare lastIndexedCommit?: string;
  declare lastIndexedCommitSecret?: string;
  declare lastIndexedCommitGeneration?: number;
  constructor(data?: PartialMessage<_RepoHistorySyncCompleteRequest_SyncedHistory>) {
    super();
    this.historyId = "";
    this.status = RepoHistorySyncCompleteRequest_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RepoHistorySyncCompleteRequest_SyncedHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistorySyncCompleteRequest_SyncedHistory {
    return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteRequest_SyncedHistory {
    return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteRequest_SyncedHistory {
    return new _RepoHistorySyncCompleteRequest_SyncedHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistorySyncCompleteRequest_SyncedHistory | PlainMessage<_RepoHistorySyncCompleteRequest_SyncedHistory> | undefined | null, b2: _RepoHistorySyncCompleteRequest_SyncedHistory | PlainMessage<_RepoHistorySyncCompleteRequest_SyncedHistory> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistorySyncCompleteRequest_SyncedHistory as unknown as MessageType<_RepoHistorySyncCompleteRequest_SyncedHistory>, a, b2);
  }
})();
export type RepoHistorySyncCompleteRequest_SyncedHistory = InstanceType<typeof RepoHistorySyncCompleteRequest_SyncedHistory$Runtime>;
var RepoHistorySyncCompleteRequest_SyncedHistory: MessageType<RepoHistorySyncCompleteRequest_SyncedHistory> = RepoHistorySyncCompleteRequest_SyncedHistory$Runtime as unknown as MessageType<RepoHistorySyncCompleteRequest_SyncedHistory>;
(RepoHistorySyncCompleteRequest_SyncedHistory as MutableMessageType<RepoHistorySyncCompleteRequest_SyncedHistory>).runtime = proto3;
(RepoHistorySyncCompleteRequest_SyncedHistory as MutableMessageType<RepoHistorySyncCompleteRequest_SyncedHistory>).typeName = "aiserver.v1.RepoHistorySyncCompleteRequest.SyncedHistory";
(RepoHistorySyncCompleteRequest_SyncedHistory as MutableMessageType<RepoHistorySyncCompleteRequest_SyncedHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "history_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(RepoHistorySyncCompleteRequest_Status) },
  { no: 3, name: "last_indexed_commit", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "last_indexed_commit_secret", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "last_indexed_commit_generation", kind: "scalar", T: 13, opt: true }
]);
var RepoHistorySyncCompleteResponse$Runtime = (() => class _RepoHistorySyncCompleteResponse extends Message<_RepoHistorySyncCompleteResponse> {
  constructor(data?: PartialMessage<_RepoHistorySyncCompleteResponse>) {
    super();
    proto3.util.initPartial(data, this as _RepoHistorySyncCompleteResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepoHistorySyncCompleteResponse {
    return new _RepoHistorySyncCompleteResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteResponse {
    return new _RepoHistorySyncCompleteResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepoHistorySyncCompleteResponse {
    return new _RepoHistorySyncCompleteResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RepoHistorySyncCompleteResponse | PlainMessage<_RepoHistorySyncCompleteResponse> | undefined | null, b2: _RepoHistorySyncCompleteResponse | PlainMessage<_RepoHistorySyncCompleteResponse> | undefined | null): boolean {
    return proto3.util.equals(_RepoHistorySyncCompleteResponse as unknown as MessageType<_RepoHistorySyncCompleteResponse>, a, b2);
  }
})();
export type RepoHistorySyncCompleteResponse = InstanceType<typeof RepoHistorySyncCompleteResponse$Runtime>;
var RepoHistorySyncCompleteResponse: MessageType<RepoHistorySyncCompleteResponse> = RepoHistorySyncCompleteResponse$Runtime as unknown as MessageType<RepoHistorySyncCompleteResponse>;
(RepoHistorySyncCompleteResponse as MutableMessageType<RepoHistorySyncCompleteResponse>).runtime = proto3;
(RepoHistorySyncCompleteResponse as MutableMessageType<RepoHistorySyncCompleteResponse>).typeName = "aiserver.v1.RepoHistorySyncCompleteResponse";
(RepoHistorySyncCompleteResponse as MutableMessageType<RepoHistorySyncCompleteResponse>).fields = proto3.util.newFieldList(() => []);
var SearchPRHistoryRequest$Runtime = (() => class _SearchPRHistoryRequest extends Message<_SearchPRHistoryRequest> {
  declare repository?: RepositoryInfo;
  declare query: string;
  declare topK: number;
  constructor(data?: PartialMessage<_SearchPRHistoryRequest>) {
    super();
    this.query = "";
    this.topK = 0;
    proto3.util.initPartial(data, this as _SearchPRHistoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchPRHistoryRequest {
    return new _SearchPRHistoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchPRHistoryRequest {
    return new _SearchPRHistoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchPRHistoryRequest {
    return new _SearchPRHistoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchPRHistoryRequest | PlainMessage<_SearchPRHistoryRequest> | undefined | null, b2: _SearchPRHistoryRequest | PlainMessage<_SearchPRHistoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_SearchPRHistoryRequest as unknown as MessageType<_SearchPRHistoryRequest>, a, b2);
  }
})();
export type SearchPRHistoryRequest = InstanceType<typeof SearchPRHistoryRequest$Runtime>;
var SearchPRHistoryRequest: MessageType<SearchPRHistoryRequest> = SearchPRHistoryRequest$Runtime as unknown as MessageType<SearchPRHistoryRequest>;
(SearchPRHistoryRequest as MutableMessageType<SearchPRHistoryRequest>).runtime = proto3;
(SearchPRHistoryRequest as MutableMessageType<SearchPRHistoryRequest>).typeName = "aiserver.v1.SearchPRHistoryRequest";
(SearchPRHistoryRequest as MutableMessageType<SearchPRHistoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "top_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var PRDiffChunkPointer$Runtime = (() => class _PRDiffChunkPointer extends Message<_PRDiffChunkPointer> {
  declare filePath: string;
  declare startLineNumberZeroIndexed: number;
  declare endLineNumberZeroIndexedExclusive: number;
  constructor(data?: PartialMessage<_PRDiffChunkPointer>) {
    super();
    this.filePath = "";
    this.startLineNumberZeroIndexed = 0;
    this.endLineNumberZeroIndexedExclusive = 0;
    proto3.util.initPartial(data, this as _PRDiffChunkPointer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PRDiffChunkPointer {
    return new _PRDiffChunkPointer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PRDiffChunkPointer {
    return new _PRDiffChunkPointer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PRDiffChunkPointer {
    return new _PRDiffChunkPointer().fromJsonString(jsonString, options);
  }
  static equals(a: _PRDiffChunkPointer | PlainMessage<_PRDiffChunkPointer> | undefined | null, b2: _PRDiffChunkPointer | PlainMessage<_PRDiffChunkPointer> | undefined | null): boolean {
    return proto3.util.equals(_PRDiffChunkPointer as unknown as MessageType<_PRDiffChunkPointer>, a, b2);
  }
})();
export type PRDiffChunkPointer = InstanceType<typeof PRDiffChunkPointer$Runtime>;
var PRDiffChunkPointer: MessageType<PRDiffChunkPointer> = PRDiffChunkPointer$Runtime as unknown as MessageType<PRDiffChunkPointer>;
(PRDiffChunkPointer as MutableMessageType<PRDiffChunkPointer>).runtime = proto3;
(PRDiffChunkPointer as MutableMessageType<PRDiffChunkPointer>).typeName = "aiserver.v1.PRDiffChunkPointer";
(PRDiffChunkPointer as MutableMessageType<PRDiffChunkPointer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number_zero_indexed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number_zero_indexed_exclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SearchPRHistoryResponse$Runtime = (() => class _SearchPRHistoryResponse extends Message<_SearchPRHistoryResponse> {
  declare results: SearchPRHistoryResponse_PRSearchResult[];
  declare gitHeight?: number;
  constructor(data?: PartialMessage<_SearchPRHistoryResponse>) {
    super();
    this.results = [];
    proto3.util.initPartial(data, this as _SearchPRHistoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchPRHistoryResponse {
    return new _SearchPRHistoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchPRHistoryResponse {
    return new _SearchPRHistoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchPRHistoryResponse {
    return new _SearchPRHistoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchPRHistoryResponse | PlainMessage<_SearchPRHistoryResponse> | undefined | null, b2: _SearchPRHistoryResponse | PlainMessage<_SearchPRHistoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_SearchPRHistoryResponse as unknown as MessageType<_SearchPRHistoryResponse>, a, b2);
  }
})();
export type SearchPRHistoryResponse = InstanceType<typeof SearchPRHistoryResponse$Runtime>;
var SearchPRHistoryResponse: MessageType<SearchPRHistoryResponse> = SearchPRHistoryResponse$Runtime as unknown as MessageType<SearchPRHistoryResponse>;
(SearchPRHistoryResponse as MutableMessageType<SearchPRHistoryResponse>).runtime = proto3;
(SearchPRHistoryResponse as MutableMessageType<SearchPRHistoryResponse>).typeName = "aiserver.v1.SearchPRHistoryResponse";
(SearchPRHistoryResponse as MutableMessageType<SearchPRHistoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: SearchPRHistoryResponse_PRSearchResult, repeated: true },
  { no: 2, name: "git_height", kind: "scalar", T: 13, opt: true }
]);
var SearchPRHistoryResponse_PRSearchResult$Runtime = (() => class _SearchPRHistoryResponse_PRSearchResult extends Message<_SearchPRHistoryResponse_PRSearchResult> {
  declare commitHash: string;
  declare score: number;
  declare diffChunks: PRDiffChunkPointer[];
  declare title?: string;
  declare summary?: string;
  declare prNumber?: number;
  declare author?: string;
  declare date?: string;
  declare changedFiles: string[];
  constructor(data?: PartialMessage<_SearchPRHistoryResponse_PRSearchResult>) {
    super();
    this.commitHash = "";
    this.score = 0;
    this.diffChunks = [];
    this.changedFiles = [];
    proto3.util.initPartial(data, this as _SearchPRHistoryResponse_PRSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchPRHistoryResponse_PRSearchResult {
    return new _SearchPRHistoryResponse_PRSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchPRHistoryResponse_PRSearchResult {
    return new _SearchPRHistoryResponse_PRSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchPRHistoryResponse_PRSearchResult {
    return new _SearchPRHistoryResponse_PRSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchPRHistoryResponse_PRSearchResult | PlainMessage<_SearchPRHistoryResponse_PRSearchResult> | undefined | null, b2: _SearchPRHistoryResponse_PRSearchResult | PlainMessage<_SearchPRHistoryResponse_PRSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_SearchPRHistoryResponse_PRSearchResult as unknown as MessageType<_SearchPRHistoryResponse_PRSearchResult>, a, b2);
  }
})();
export type SearchPRHistoryResponse_PRSearchResult = InstanceType<typeof SearchPRHistoryResponse_PRSearchResult$Runtime>;
var SearchPRHistoryResponse_PRSearchResult: MessageType<SearchPRHistoryResponse_PRSearchResult> = SearchPRHistoryResponse_PRSearchResult$Runtime as unknown as MessageType<SearchPRHistoryResponse_PRSearchResult>;
(SearchPRHistoryResponse_PRSearchResult as MutableMessageType<SearchPRHistoryResponse_PRSearchResult>).runtime = proto3;
(SearchPRHistoryResponse_PRSearchResult as MutableMessageType<SearchPRHistoryResponse_PRSearchResult>).typeName = "aiserver.v1.SearchPRHistoryResponse.PRSearchResult";
(SearchPRHistoryResponse_PRSearchResult as MutableMessageType<SearchPRHistoryResponse_PRSearchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 3, name: "diff_chunks", kind: "message", T: PRDiffChunkPointer, repeated: true },
  { no: 4, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "summary", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "pr_number", kind: "scalar", T: 13, opt: true },
  { no: 7, name: "author", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "date", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "changed_files", kind: "scalar", T: 9, repeated: true }
]);
var RemoveRepoHistoryRequest$Runtime = (() => class _RemoveRepoHistoryRequest extends Message<_RemoveRepoHistoryRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_RemoveRepoHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this as _RemoveRepoHistoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RemoveRepoHistoryRequest {
    return new _RemoveRepoHistoryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RemoveRepoHistoryRequest {
    return new _RemoveRepoHistoryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RemoveRepoHistoryRequest {
    return new _RemoveRepoHistoryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _RemoveRepoHistoryRequest | PlainMessage<_RemoveRepoHistoryRequest> | undefined | null, b2: _RemoveRepoHistoryRequest | PlainMessage<_RemoveRepoHistoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_RemoveRepoHistoryRequest as unknown as MessageType<_RemoveRepoHistoryRequest>, a, b2);
  }
})();
export type RemoveRepoHistoryRequest = InstanceType<typeof RemoveRepoHistoryRequest$Runtime>;
var RemoveRepoHistoryRequest: MessageType<RemoveRepoHistoryRequest> = RemoveRepoHistoryRequest$Runtime as unknown as MessageType<RemoveRepoHistoryRequest>;
(RemoveRepoHistoryRequest as MutableMessageType<RemoveRepoHistoryRequest>).runtime = proto3;
(RemoveRepoHistoryRequest as MutableMessageType<RemoveRepoHistoryRequest>).typeName = "aiserver.v1.RemoveRepoHistoryRequest";
(RemoveRepoHistoryRequest as MutableMessageType<RemoveRepoHistoryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var RemoveRepoHistoryResponse$Runtime = (() => class _RemoveRepoHistoryResponse extends Message<_RemoveRepoHistoryResponse> {
  declare status: RemoveRepoHistoryResponse_Status;
  constructor(data?: PartialMessage<_RemoveRepoHistoryResponse>) {
    super();
    this.status = RemoveRepoHistoryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RemoveRepoHistoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RemoveRepoHistoryResponse {
    return new _RemoveRepoHistoryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RemoveRepoHistoryResponse {
    return new _RemoveRepoHistoryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RemoveRepoHistoryResponse {
    return new _RemoveRepoHistoryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _RemoveRepoHistoryResponse | PlainMessage<_RemoveRepoHistoryResponse> | undefined | null, b2: _RemoveRepoHistoryResponse | PlainMessage<_RemoveRepoHistoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_RemoveRepoHistoryResponse as unknown as MessageType<_RemoveRepoHistoryResponse>, a, b2);
  }
})();
export type RemoveRepoHistoryResponse = InstanceType<typeof RemoveRepoHistoryResponse$Runtime>;
var RemoveRepoHistoryResponse: MessageType<RemoveRepoHistoryResponse> = RemoveRepoHistoryResponse$Runtime as unknown as MessageType<RemoveRepoHistoryResponse>;
(RemoveRepoHistoryResponse as MutableMessageType<RemoveRepoHistoryResponse>).runtime = proto3;
(RemoveRepoHistoryResponse as MutableMessageType<RemoveRepoHistoryResponse>).typeName = "aiserver.v1.RemoveRepoHistoryResponse";
(RemoveRepoHistoryResponse as MutableMessageType<RemoveRepoHistoryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(RemoveRepoHistoryResponse_Status) }
]);
(function(RemoveRepoHistoryResponse_Status2) {
  RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
  RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["NOT_AUTHORIZED"] = 2] = "NOT_AUTHORIZED";
  RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["PARTIAL_SUCCESS"] = 3] = "PARTIAL_SUCCESS";
  RemoveRepoHistoryResponse_Status2[RemoveRepoHistoryResponse_Status2["SUCCESS"] = 4] = "SUCCESS";
})(RemoveRepoHistoryResponse_Status! || (RemoveRepoHistoryResponse_Status = {} as typeof RemoveRepoHistoryResponse_Status));
proto3.util.setEnumType(RemoveRepoHistoryResponse_Status, "aiserver.v1.RemoveRepoHistoryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_NOT_FOUND" },
  { no: 2, name: "STATUS_NOT_AUTHORIZED" },
  { no: 3, name: "STATUS_PARTIAL_SUCCESS" },
  { no: 4, name: "STATUS_SUCCESS" }
]);
var GetPRIndexingStatusRequest$Runtime = (() => class _GetPRIndexingStatusRequest extends Message<_GetPRIndexingStatusRequest> {
  declare repository?: RepositoryInfo;
  constructor(data?: PartialMessage<_GetPRIndexingStatusRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetPRIndexingStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPRIndexingStatusRequest {
    return new _GetPRIndexingStatusRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPRIndexingStatusRequest {
    return new _GetPRIndexingStatusRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPRIndexingStatusRequest {
    return new _GetPRIndexingStatusRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPRIndexingStatusRequest | PlainMessage<_GetPRIndexingStatusRequest> | undefined | null, b2: _GetPRIndexingStatusRequest | PlainMessage<_GetPRIndexingStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetPRIndexingStatusRequest as unknown as MessageType<_GetPRIndexingStatusRequest>, a, b2);
  }
})();
export type GetPRIndexingStatusRequest = InstanceType<typeof GetPRIndexingStatusRequest$Runtime>;
var GetPRIndexingStatusRequest: MessageType<GetPRIndexingStatusRequest> = GetPRIndexingStatusRequest$Runtime as unknown as MessageType<GetPRIndexingStatusRequest>;
(GetPRIndexingStatusRequest as MutableMessageType<GetPRIndexingStatusRequest>).runtime = proto3;
(GetPRIndexingStatusRequest as MutableMessageType<GetPRIndexingStatusRequest>).typeName = "aiserver.v1.GetPRIndexingStatusRequest";
(GetPRIndexingStatusRequest as MutableMessageType<GetPRIndexingStatusRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: RepositoryInfo }
]);
var GetPRIndexingStatusResponse$Runtime = (() => class _GetPRIndexingStatusResponse extends Message<_GetPRIndexingStatusResponse> {
  declare status: GetPRIndexingStatusResponse_Status;
  declare syncPercentage: number;
  declare lastIndexedCommit?: string;
  declare lastIndexedGeneration?: number;
  declare totalCommits?: number;
  declare indexingRate?: number;
  declare lastUpdatedTimestamp?: bigint;
  declare indexVersion?: number;
  constructor(data?: PartialMessage<_GetPRIndexingStatusResponse>) {
    super();
    this.status = GetPRIndexingStatusResponse_Status.UNSPECIFIED;
    this.syncPercentage = 0;
    proto3.util.initPartial(data, this as _GetPRIndexingStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetPRIndexingStatusResponse {
    return new _GetPRIndexingStatusResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetPRIndexingStatusResponse {
    return new _GetPRIndexingStatusResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetPRIndexingStatusResponse {
    return new _GetPRIndexingStatusResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _GetPRIndexingStatusResponse | PlainMessage<_GetPRIndexingStatusResponse> | undefined | null, b2: _GetPRIndexingStatusResponse | PlainMessage<_GetPRIndexingStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetPRIndexingStatusResponse as unknown as MessageType<_GetPRIndexingStatusResponse>, a, b2);
  }
})();
export type GetPRIndexingStatusResponse = InstanceType<typeof GetPRIndexingStatusResponse$Runtime>;
var GetPRIndexingStatusResponse: MessageType<GetPRIndexingStatusResponse> = GetPRIndexingStatusResponse$Runtime as unknown as MessageType<GetPRIndexingStatusResponse>;
(GetPRIndexingStatusResponse as MutableMessageType<GetPRIndexingStatusResponse>).runtime = proto3;
(GetPRIndexingStatusResponse as MutableMessageType<GetPRIndexingStatusResponse>).typeName = "aiserver.v1.GetPRIndexingStatusResponse";
(GetPRIndexingStatusResponse as MutableMessageType<GetPRIndexingStatusResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(GetPRIndexingStatusResponse_Status) },
  {
    no: 2,
    name: "sync_percentage",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 3, name: "last_indexed_commit", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "last_indexed_generation", kind: "scalar", T: 13, opt: true },
  { no: 5, name: "total_commits", kind: "scalar", T: 13, opt: true },
  { no: 6, name: "indexing_rate", kind: "scalar", T: 2, opt: true },
  { no: 7, name: "last_updated_timestamp", kind: "scalar", T: 3, opt: true },
  { no: 8, name: "index_version", kind: "scalar", T: 13, opt: true }
]);
(function(GetPRIndexingStatusResponse_Status2) {
  GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["EMPTY"] = 1] = "EMPTY";
  GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["SYNCING"] = 2] = "SYNCING";
  GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["SYNCED"] = 3] = "SYNCED";
  GetPRIndexingStatusResponse_Status2[GetPRIndexingStatusResponse_Status2["PARTIAL"] = 4] = "PARTIAL";
})(GetPRIndexingStatusResponse_Status! || (GetPRIndexingStatusResponse_Status = {} as typeof GetPRIndexingStatusResponse_Status));
proto3.util.setEnumType(GetPRIndexingStatusResponse_Status, "aiserver.v1.GetPRIndexingStatusResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_EMPTY" },
  { no: 2, name: "STATUS_SYNCING" },
  { no: 3, name: "STATUS_SYNCED" },
  { no: 4, name: "STATUS_PARTIAL" }
]);


export { ChunkingStrategy, SimilarityMetricType, PathKeyHashType, RerankerAlgorithm, DatabaseProvider, RechunkerChoice, GetHighLevelFolderDescriptionRequest, GetHighLevelFolderDescriptionRequest_Readme, GetHighLevelFolderDescriptionResponse, EnsureIndexCreatedRequest, EnsureIndexCreatedResponse, PartialPathItem, FastRepoInitHandshakeRequest, FastRepoInitHandshakeResponse, FastRepoInitHandshakeResponse_Status, LocalCodebaseFileInfo, FastRepoInitHandshakeV2Request, QueryOnlyRepositoryInfo, RepositoryCodebaseInfo, RepositoryCodebaseInfo_Status, FastRepoInitHandshakeV2Response, FastRepoInitHandshakeV2Response_Status, RepositoryCodebaseSyncStatus, RepositoryCodebaseSyncStatus_Status, FastRepoSyncCompleteRequest, FastRepoSyncCompleteResponse, SyncMerkleSubtreeRequest, SyncMerkleSubtreeResponse, SyncMerkleSubtreeResponse_Mismatch, ClientRepositoryInfo, SyncMerkleSubtreeV2Request, SyncMerkleSubtreeV2Response, SyncMerkleSubtreeV2Response_Mismatch, SyncMerkleSubtreeV2Response_PartialPathResult, FastUpdateFileRequest, FastUpdateFileRequest_UpdateType, FastUpdateFileRequest_LocalFile, FastUpdateFileResponse, FastUpdateFileResponse_Status, FastUpdateFileV2Request, FastUpdateFileV2Request_UpdateType, FastUpdateFileV2Request_LocalFile, FastUpdateFileV2Request_FileUpdate, FastUpdateFileV2Response, FastUpdateFileV2Response_Status, GetUploadLimitsRequest, GetUploadLimitsResponse, GetNumFilesToSendRequest, GetNumFilesToSendResponse, GetAvailableChunkingStrategiesRequest, GetAvailableChunkingStrategiesResponse, GetEmbeddingsRequest, GetEmbeddingsResponse, GetEmbeddingsResponse_Embedding, AdminRemoveRepositoryRequest, AdminRemoveRepositoryResponse, SyncRepositoryRequest, SyncRepositoryResponse, StartUploadRepoRequest, StartUploadRepoResponse, StartUploadRepoResponse_Status, UploadFileRequest, UploadFileResponse, UploadFileResponse_Status, FinishUploadRepoRequest, FinishUploadRepoResponse, FinishUploadRepoResponse_Status, StartUpdateRepoRequest, StartUpdateRepoResponse, StartUpdateRepoResponse_Status, UpdateFileRequest, UpdateFileResponse, UpdateFileResponse_Status, FinishUpdateRepoRequest, FinishUpdateRepoResponse, FinishUpdateRepoResponse_Status, BatchRepositoryStatusRequest, BatchRepositoryStatusResponse, UnsubscribeRepositoryRequest, UnsubscribeRepositoryResponse, UnsubscribeRepositoryResponse_Status, LogoutRequest, LogoutResponse, LogoutResponse_Status, RemoveRepositoryRequest, RemoveRepositoryResponse, RemoveRepositoryResponse_Status, SubscribeRepositoryRequest, SubscribeRepositoryResponse, SubscribeRepositoryResponse_Status, SearchRepositoryRequest, QueryOnlyRepoAccess, CodeResult, FileResult, SearchRepositoryResponse, SemSearchRequest, CodeResultWithClassificationInfo, CodeResultWithClassificationInfo_LineNumberClassification, SemSearchResponse, SemSearchResponse_SemSearchMetadata, LoginRequest, LoginResponse, IsLoggedInRequest, IsLoggedInResponse, PollLoginRequest, PollLoginResponse, PollLoginResponse_Status, UpgradeScopeRequest, UpgradeScopeResponse, UpgradeScopeResponse_Status, RepositoriesRequest, RepositoriesResponse, UploadRepositoryRequest, UploadRepositoryResponse, UploadRepositoryResponse_Status, RepositoryStatusRequest, RepositoryStatusResponse, RepositoryStatusResponse_NotFound, RepositoryStatusResponse_NotSubscribed, RepositoryStatusResponse_Uploading, RepositoryStatusResponse_Syncing, RepositoryStatusResponse_Synced, RepositoryStatusResponse_TooBig, RepositoryStatusResponse_AuthTokenNotFound, RepositoryStatusResponse_AuthTokenNotAuthorized, RepositoryStatusResponse_EmptyMessage, RepositoryInfo, SearchRepositoryDeepContextRequest, NodeResult, ReflectionResult, SearchRepositoryDeepContextResponse, GetLineNumberClassificationsRequest, GetLineNumberClassificationsResponse, GetCopyStatusRequest, GetCopyStatusResponse, GetCopyStatusResponse_Phase, GetCopyStatusResponse_CompletedStatus, IndexedFile, IndexedPullRequest, RepoHistoryInitHandshakeRequest, RepoHistoryInfo, RepoHistoryInitHandshakeResponse, RepoHistoryInitHandshakeResponse_Status, RepoHistorySyncOneRequest, RepoHistorySyncOneResponse, RepoHistorySyncOneResponse_Status, RepoHistorySyncCompleteRequest, RepoHistorySyncCompleteRequest_Status, RepoHistorySyncCompleteRequest_SyncedHistory, RepoHistorySyncCompleteResponse, SearchPRHistoryRequest, PRDiffChunkPointer, SearchPRHistoryResponse, SearchPRHistoryResponse_PRSearchResult, RemoveRepoHistoryRequest, RemoveRepoHistoryResponse, RemoveRepoHistoryResponse_Status, GetPRIndexingStatusRequest, GetPRIndexingStatusResponse, GetPRIndexingStatusResponse_Status };
