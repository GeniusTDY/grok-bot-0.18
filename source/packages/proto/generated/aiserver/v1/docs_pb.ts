/**
 * Complete generated Grok Bot 0.18 Dashboard closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:160952-161193
 * Region SHA-256: 445a541c869f60f4f71b0f64fee654a5deb50efb887f4b6943417709ba6e5c1d
 * Dashboard closure exports: 4 messages + 1 enums = 5
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type DocumentationQueryResponse_Status = 0 | 1 | 2 | 3;
var DocumentationQueryResponse_Status: {
  "UNSPECIFIED": 0;
  "NOT_FOUND": 1;
  "SUCCESS": 2;
  "FAILURE": 3;
  0: "UNSPECIFIED";
  1: "NOT_FOUND";
  2: "SUCCESS";
  3: "FAILURE";
};
var DocumentationMetadata$Runtime = (() => class _DocumentationMetadata extends Message<_DocumentationMetadata> {
  declare prefixUrl: string;
  declare docName: string;
  declare isDifferentPrefixOrigin: boolean;
  declare truePrefixUrl: string;
  declare public: boolean;
  declare teamId?: number;
  constructor(data?: PartialMessage<_DocumentationMetadata>) {
    super();
    this.prefixUrl = "";
    this.docName = "";
    this.isDifferentPrefixOrigin = false;
    this.truePrefixUrl = "";
    this.public = false;
    proto3.util.initPartial(data, this as _DocumentationMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentationMetadata {
    return new _DocumentationMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentationMetadata {
    return new _DocumentationMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentationMetadata {
    return new _DocumentationMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentationMetadata | PlainMessage<_DocumentationMetadata> | undefined | null, b2: _DocumentationMetadata | PlainMessage<_DocumentationMetadata> | undefined | null): boolean {
    return proto3.util.equals(_DocumentationMetadata as unknown as MessageType<_DocumentationMetadata>, a, b2);
  }
})();
export type DocumentationMetadata = InstanceType<typeof DocumentationMetadata$Runtime>;
var DocumentationMetadata: MessageType<DocumentationMetadata> = DocumentationMetadata$Runtime as unknown as MessageType<DocumentationMetadata>;
(DocumentationMetadata as MutableMessageType<DocumentationMetadata>).runtime = proto3;
(DocumentationMetadata as MutableMessageType<DocumentationMetadata>).typeName = "aiserver.v1.DocumentationMetadata";
(DocumentationMetadata as MutableMessageType<DocumentationMetadata>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prefix_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "doc_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "is_different_prefix_origin",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "true_prefix_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "public",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var DocumentationChunk$Runtime = (() => class _DocumentationChunk extends Message<_DocumentationChunk> {
  declare docName: string;
  declare pageUrl: string;
  declare documentationChunk: string;
  declare score: number;
  declare pageTitle: string;
  constructor(data?: PartialMessage<_DocumentationChunk>) {
    super();
    this.docName = "";
    this.pageUrl = "";
    this.documentationChunk = "";
    this.score = 0;
    this.pageTitle = "";
    proto3.util.initPartial(data, this as _DocumentationChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentationChunk {
    return new _DocumentationChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentationChunk {
    return new _DocumentationChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentationChunk {
    return new _DocumentationChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentationChunk | PlainMessage<_DocumentationChunk> | undefined | null, b2: _DocumentationChunk | PlainMessage<_DocumentationChunk> | undefined | null): boolean {
    return proto3.util.equals(_DocumentationChunk as unknown as MessageType<_DocumentationChunk>, a, b2);
  }
})();
export type DocumentationChunk = InstanceType<typeof DocumentationChunk$Runtime>;
var DocumentationChunk: MessageType<DocumentationChunk> = DocumentationChunk$Runtime as unknown as MessageType<DocumentationChunk>;
(DocumentationChunk as MutableMessageType<DocumentationChunk>).runtime = proto3;
(DocumentationChunk as MutableMessageType<DocumentationChunk>).typeName = "aiserver.v1.DocumentationChunk";
(DocumentationChunk as MutableMessageType<DocumentationChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "page_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "documentation_chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 5,
    name: "page_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DocumentationQueryRequest$Runtime = (() => class _DocumentationQueryRequest extends Message<_DocumentationQueryRequest> {
  declare docIdentifier: string;
  declare query: string;
  declare topK: number;
  declare rerankResults: boolean;
  constructor(data?: PartialMessage<_DocumentationQueryRequest>) {
    super();
    this.docIdentifier = "";
    this.query = "";
    this.topK = 0;
    this.rerankResults = false;
    proto3.util.initPartial(data, this as _DocumentationQueryRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentationQueryRequest {
    return new _DocumentationQueryRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentationQueryRequest {
    return new _DocumentationQueryRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentationQueryRequest {
    return new _DocumentationQueryRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentationQueryRequest | PlainMessage<_DocumentationQueryRequest> | undefined | null, b2: _DocumentationQueryRequest | PlainMessage<_DocumentationQueryRequest> | undefined | null): boolean {
    return proto3.util.equals(_DocumentationQueryRequest as unknown as MessageType<_DocumentationQueryRequest>, a, b2);
  }
})();
export type DocumentationQueryRequest = InstanceType<typeof DocumentationQueryRequest$Runtime>;
var DocumentationQueryRequest: MessageType<DocumentationQueryRequest> = DocumentationQueryRequest$Runtime as unknown as MessageType<DocumentationQueryRequest>;
(DocumentationQueryRequest as MutableMessageType<DocumentationQueryRequest>).runtime = proto3;
(DocumentationQueryRequest as MutableMessageType<DocumentationQueryRequest>).typeName = "aiserver.v1.DocumentationQueryRequest";
(DocumentationQueryRequest as MutableMessageType<DocumentationQueryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
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
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "rerank_results",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DocumentationQueryResponse$Runtime = (() => class _DocumentationQueryResponse extends Message<_DocumentationQueryResponse> {
  declare docIdentifier: string;
  declare docName: string;
  declare docChunks: DocumentationChunk[];
  declare status: DocumentationQueryResponse_Status;
  constructor(data?: PartialMessage<_DocumentationQueryResponse>) {
    super();
    this.docIdentifier = "";
    this.docName = "";
    this.docChunks = [];
    this.status = DocumentationQueryResponse_Status.UNSPECIFIED;
    proto3.util.initPartial(data, this as _DocumentationQueryResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DocumentationQueryResponse {
    return new _DocumentationQueryResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DocumentationQueryResponse {
    return new _DocumentationQueryResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DocumentationQueryResponse {
    return new _DocumentationQueryResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _DocumentationQueryResponse | PlainMessage<_DocumentationQueryResponse> | undefined | null, b2: _DocumentationQueryResponse | PlainMessage<_DocumentationQueryResponse> | undefined | null): boolean {
    return proto3.util.equals(_DocumentationQueryResponse as unknown as MessageType<_DocumentationQueryResponse>, a, b2);
  }
})();
export type DocumentationQueryResponse = InstanceType<typeof DocumentationQueryResponse$Runtime>;
var DocumentationQueryResponse: MessageType<DocumentationQueryResponse> = DocumentationQueryResponse$Runtime as unknown as MessageType<DocumentationQueryResponse>;
(DocumentationQueryResponse as MutableMessageType<DocumentationQueryResponse>).runtime = proto3;
(DocumentationQueryResponse as MutableMessageType<DocumentationQueryResponse>).typeName = "aiserver.v1.DocumentationQueryResponse";
(DocumentationQueryResponse as MutableMessageType<DocumentationQueryResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "doc_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "doc_chunks", kind: "message", T: DocumentationChunk, repeated: true },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(DocumentationQueryResponse_Status) }
]);
(function(DocumentationQueryResponse_Status2) {
  DocumentationQueryResponse_Status2[DocumentationQueryResponse_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  DocumentationQueryResponse_Status2[DocumentationQueryResponse_Status2["NOT_FOUND"] = 1] = "NOT_FOUND";
  DocumentationQueryResponse_Status2[DocumentationQueryResponse_Status2["SUCCESS"] = 2] = "SUCCESS";
  DocumentationQueryResponse_Status2[DocumentationQueryResponse_Status2["FAILURE"] = 3] = "FAILURE";
})(DocumentationQueryResponse_Status! || (DocumentationQueryResponse_Status = {} as typeof DocumentationQueryResponse_Status));
proto3.util.setEnumType(DocumentationQueryResponse_Status, "aiserver.v1.DocumentationQueryResponse.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_NOT_FOUND" },
  { no: 2, name: "STATUS_SUCCESS" },
  { no: 3, name: "STATUS_FAILURE" }
]);


export { DocumentationMetadata, DocumentationChunk, DocumentationQueryRequest, DocumentationQueryResponse, DocumentationQueryResponse_Status };
