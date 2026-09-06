/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:177367-179086
 * Region SHA-256: 89375674213c7c603cd925eae6beab1d672a75c25e9b75c0f0d2479727ef6830
 * AI Server closure exports: 51 messages + 3 enums = 54
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { LintSeverity, SimpleRange, LineRange, Lint, CursorRule2, DocumentSymbol } from "./utils_pb.js";
import { CppFileDiffHistory } from "./cpp_pb.js";
import { LspSubgraphFullContext } from "./lsp_subgraph_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ContextItemStatus_PostGenerationEvaluation = 0 | 1 | 2;
var ContextItemStatus_PostGenerationEvaluation: {
  "UNSPECIFIED": 0;
  "USEFUL": 1;
  "USELESS": 2;
  0: "UNSPECIFIED";
  1: "USEFUL";
  2: "USELESS";
};
export type ContextIntent_Type = 0 | 1 | 2;
var ContextIntent_Type: {
  "UNSPECIFIED": 0;
  "USER_ADDED": 1;
  "AUTOMATIC": 2;
  0: "UNSPECIFIED";
  1: "USER_ADDED";
  2: "AUTOMATIC";
};
export type ContextIntent_File_Mode = 0 | 1 | 2 | 3;
var ContextIntent_File_Mode: {
  "UNSPECIFIED": 0;
  "FULL": 1;
  "OUTLINE": 2;
  "CHUNKS": 3;
  0: "UNSPECIFIED";
  1: "FULL";
  2: "OUTLINE";
  3: "CHUNKS";
};
var PotentiallyCachedContextItem$Runtime = (() => class _PotentiallyCachedContextItem extends Message<_PotentiallyCachedContextItem> {
  declare item: { case: "contextItem"; value: ContextItem } | { case: "contextItemHash"; value: string } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PotentiallyCachedContextItem>) {
    super();
    this.item = { case: void 0 };
    proto3.util.initPartial(data, this as _PotentiallyCachedContextItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PotentiallyCachedContextItem {
    return new _PotentiallyCachedContextItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PotentiallyCachedContextItem {
    return new _PotentiallyCachedContextItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PotentiallyCachedContextItem {
    return new _PotentiallyCachedContextItem().fromJsonString(jsonString, options);
  }
  static equals(a: _PotentiallyCachedContextItem | PlainMessage<_PotentiallyCachedContextItem> | undefined | null, b2: _PotentiallyCachedContextItem | PlainMessage<_PotentiallyCachedContextItem> | undefined | null): boolean {
    return proto3.util.equals(_PotentiallyCachedContextItem as unknown as MessageType<_PotentiallyCachedContextItem>, a, b2);
  }
})();
export type PotentiallyCachedContextItem = InstanceType<typeof PotentiallyCachedContextItem$Runtime>;
var PotentiallyCachedContextItem: MessageType<PotentiallyCachedContextItem> = PotentiallyCachedContextItem$Runtime as unknown as MessageType<PotentiallyCachedContextItem>;
(PotentiallyCachedContextItem as MutableMessageType<PotentiallyCachedContextItem>).runtime = proto3;
(PotentiallyCachedContextItem as MutableMessageType<PotentiallyCachedContextItem>).typeName = "aiserver.v1.PotentiallyCachedContextItem";
(PotentiallyCachedContextItem as MutableMessageType<PotentiallyCachedContextItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_item", kind: "message", T: ContextItem, oneof: "item" },
  { no: 2, name: "context_item_hash", kind: "scalar", T: 9, oneof: "item" }
]);
var ContextStatusUpdate$Runtime = (() => class _ContextStatusUpdate extends Message<_ContextStatusUpdate> {
  declare contextItemStatuses: ContextItemStatus[];
  constructor(data?: PartialMessage<_ContextStatusUpdate>) {
    super();
    this.contextItemStatuses = [];
    proto3.util.initPartial(data, this as _ContextStatusUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextStatusUpdate {
    return new _ContextStatusUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextStatusUpdate {
    return new _ContextStatusUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextStatusUpdate {
    return new _ContextStatusUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextStatusUpdate | PlainMessage<_ContextStatusUpdate> | undefined | null, b2: _ContextStatusUpdate | PlainMessage<_ContextStatusUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ContextStatusUpdate as unknown as MessageType<_ContextStatusUpdate>, a, b2);
  }
})();
export type ContextStatusUpdate = InstanceType<typeof ContextStatusUpdate$Runtime>;
var ContextStatusUpdate: MessageType<ContextStatusUpdate> = ContextStatusUpdate$Runtime as unknown as MessageType<ContextStatusUpdate>;
(ContextStatusUpdate as MutableMessageType<ContextStatusUpdate>).runtime = proto3;
(ContextStatusUpdate as MutableMessageType<ContextStatusUpdate>).typeName = "aiserver.v1.ContextStatusUpdate";
(ContextStatusUpdate as MutableMessageType<ContextStatusUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "context_item_statuses", kind: "message", T: ContextItemStatus, repeated: true }
]);
var MissingContextItems$Runtime = (() => class _MissingContextItems extends Message<_MissingContextItems> {
  declare missingContextItemHashes: string[];
  constructor(data?: PartialMessage<_MissingContextItems>) {
    super();
    this.missingContextItemHashes = [];
    proto3.util.initPartial(data, this as _MissingContextItems);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MissingContextItems {
    return new _MissingContextItems().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MissingContextItems {
    return new _MissingContextItems().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MissingContextItems {
    return new _MissingContextItems().fromJsonString(jsonString, options);
  }
  static equals(a: _MissingContextItems | PlainMessage<_MissingContextItems> | undefined | null, b2: _MissingContextItems | PlainMessage<_MissingContextItems> | undefined | null): boolean {
    return proto3.util.equals(_MissingContextItems as unknown as MessageType<_MissingContextItems>, a, b2);
  }
})();
export type MissingContextItems = InstanceType<typeof MissingContextItems$Runtime>;
var MissingContextItems: MessageType<MissingContextItems> = MissingContextItems$Runtime as unknown as MessageType<MissingContextItems>;
(MissingContextItems as MutableMessageType<MissingContextItems>).runtime = proto3;
(MissingContextItems as MutableMessageType<MissingContextItems>).typeName = "aiserver.v1.MissingContextItems";
(MissingContextItems as MutableMessageType<MissingContextItems>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "missing_context_item_hashes", kind: "scalar", T: 9, repeated: true }
]);
var ContextItemStatus$Runtime = (() => class _ContextItemStatus extends Message<_ContextItemStatus> {
  declare contextItemHash: string;
  declare shownToTheModel: boolean;
  declare score: number;
  declare percentageOfAvailableSpace: number;
  declare postGenerationEvaluation: ContextItemStatus_PostGenerationEvaluation;
  constructor(data?: PartialMessage<_ContextItemStatus>) {
    super();
    this.contextItemHash = "";
    this.shownToTheModel = false;
    this.score = 0;
    this.percentageOfAvailableSpace = 0;
    this.postGenerationEvaluation = ContextItemStatus_PostGenerationEvaluation.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ContextItemStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItemStatus {
    return new _ContextItemStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItemStatus {
    return new _ContextItemStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItemStatus {
    return new _ContextItemStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItemStatus | PlainMessage<_ContextItemStatus> | undefined | null, b2: _ContextItemStatus | PlainMessage<_ContextItemStatus> | undefined | null): boolean {
    return proto3.util.equals(_ContextItemStatus as unknown as MessageType<_ContextItemStatus>, a, b2);
  }
})();
export type ContextItemStatus = InstanceType<typeof ContextItemStatus$Runtime>;
var ContextItemStatus: MessageType<ContextItemStatus> = ContextItemStatus$Runtime as unknown as MessageType<ContextItemStatus>;
(ContextItemStatus as MutableMessageType<ContextItemStatus>).runtime = proto3;
(ContextItemStatus as MutableMessageType<ContextItemStatus>).typeName = "aiserver.v1.ContextItemStatus";
(ContextItemStatus as MutableMessageType<ContextItemStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "context_item_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "shown_to_the_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 4,
    name: "percentage_of_available_space",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 5, name: "post_generation_evaluation", kind: "enum", T: proto3.getEnumType(ContextItemStatus_PostGenerationEvaluation) }
]);
(function(ContextItemStatus_PostGenerationEvaluation2) {
  ContextItemStatus_PostGenerationEvaluation2[ContextItemStatus_PostGenerationEvaluation2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ContextItemStatus_PostGenerationEvaluation2[ContextItemStatus_PostGenerationEvaluation2["USEFUL"] = 1] = "USEFUL";
  ContextItemStatus_PostGenerationEvaluation2[ContextItemStatus_PostGenerationEvaluation2["USELESS"] = 2] = "USELESS";
})(ContextItemStatus_PostGenerationEvaluation! || (ContextItemStatus_PostGenerationEvaluation = {} as typeof ContextItemStatus_PostGenerationEvaluation));
proto3.util.setEnumType(ContextItemStatus_PostGenerationEvaluation, "aiserver.v1.ContextItemStatus.PostGenerationEvaluation", [
  { no: 0, name: "POST_GENERATION_EVALUATION_UNSPECIFIED" },
  { no: 1, name: "POST_GENERATION_EVALUATION_USEFUL" },
  { no: 2, name: "POST_GENERATION_EVALUATION_USELESS" }
]);
var ContextItem$Runtime = (() => class _ContextItem extends Message<_ContextItem> {
  declare intent?: ContextIntent;
  declare item: { case: "fileChunk"; value: ContextItem_FileChunk } | { case: "outlineChunk"; value: ContextItem_OutlineChunk } | { case: "cmdKSelection"; value: ContextItem_CmdKSelection } | { case: "cmdKImmediateContext"; value: ContextItem_CmdKImmediateContext } | { case: "cmdKQuery"; value: ContextItem_CmdKQuery } | { case: "cmdKQueryHistory"; value: ContextItem_CmdKQueryHistory } | { case: "customInstructions"; value: ContextItem_CustomInstructions } | { case: "goToDefinitionResult"; value: ContextItem_GoToDefinitionResult } | { case: "documentationChunk"; value: ContextItem_DocumentationChunk } | { case: "lints"; value: ContextItem_Lints } | { case: "chatHistory"; value: ContextItem_ChatHistory } | { case: "notebookCellOutput"; value: ContextItem_NotebookCellOutput } | { case: "terminalHistory"; value: ContextItem_TerminalHistory } | { case: "terminalCmdKQuery"; value: ContextItem_TerminalCmdKQuery } | { case: "terminalCmdKQueryHistory"; value: ContextItem_TerminalCmdKQueryHistory } | { case: "sparseFileChunk"; value: ContextItem_SparseFileChunk } | { case: "lspSubgraphChunk"; value: ContextItem_LspSubgraphChunk } | { case: "commitNoteChunk"; value: ContextItem_CommitNoteChunk } | { case: "fileDiffHistory"; value: ContextItem_FileDiffHistory } | { case: "cmdKQueryHistoryInDiffSession"; value: ContextItem_CmdKQueryHistoryInDiffSession } | { case: "projectRule"; value: CursorRule2 } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ContextItem>) {
    super();
    this.item = { case: void 0 };
    proto3.util.initPartial(data, this as _ContextItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem {
    return new _ContextItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem {
    return new _ContextItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem {
    return new _ContextItem().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem | PlainMessage<_ContextItem> | undefined | null, b2: _ContextItem | PlainMessage<_ContextItem> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem as unknown as MessageType<_ContextItem>, a, b2);
  }
})();
export type ContextItem = InstanceType<typeof ContextItem$Runtime>;
var ContextItem: MessageType<ContextItem> = ContextItem$Runtime as unknown as MessageType<ContextItem>;
(ContextItem as MutableMessageType<ContextItem>).runtime = proto3;
(ContextItem as MutableMessageType<ContextItem>).typeName = "aiserver.v1.ContextItem";
(ContextItem as MutableMessageType<ContextItem>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "intent", kind: "message", T: ContextIntent },
  { no: 2, name: "file_chunk", kind: "message", T: ContextItem_FileChunk, oneof: "item" },
  { no: 3, name: "outline_chunk", kind: "message", T: ContextItem_OutlineChunk, oneof: "item" },
  { no: 4, name: "cmd_k_selection", kind: "message", T: ContextItem_CmdKSelection, oneof: "item" },
  { no: 5, name: "cmd_k_immediate_context", kind: "message", T: ContextItem_CmdKImmediateContext, oneof: "item" },
  { no: 6, name: "cmd_k_query", kind: "message", T: ContextItem_CmdKQuery, oneof: "item" },
  { no: 7, name: "cmd_k_query_history", kind: "message", T: ContextItem_CmdKQueryHistory, oneof: "item" },
  { no: 8, name: "custom_instructions", kind: "message", T: ContextItem_CustomInstructions, oneof: "item" },
  { no: 9, name: "go_to_definition_result", kind: "message", T: ContextItem_GoToDefinitionResult, oneof: "item" },
  { no: 10, name: "documentation_chunk", kind: "message", T: ContextItem_DocumentationChunk, oneof: "item" },
  { no: 11, name: "lints", kind: "message", T: ContextItem_Lints, oneof: "item" },
  { no: 12, name: "chat_history", kind: "message", T: ContextItem_ChatHistory, oneof: "item" },
  { no: 13, name: "notebook_cell_output", kind: "message", T: ContextItem_NotebookCellOutput, oneof: "item" },
  { no: 14, name: "terminal_history", kind: "message", T: ContextItem_TerminalHistory, oneof: "item" },
  { no: 15, name: "terminal_cmd_k_query", kind: "message", T: ContextItem_TerminalCmdKQuery, oneof: "item" },
  { no: 16, name: "terminal_cmd_k_query_history", kind: "message", T: ContextItem_TerminalCmdKQueryHistory, oneof: "item" },
  { no: 17, name: "sparse_file_chunk", kind: "message", T: ContextItem_SparseFileChunk, oneof: "item" },
  { no: 18, name: "lsp_subgraph_chunk", kind: "message", T: ContextItem_LspSubgraphChunk, oneof: "item" },
  { no: 19, name: "commit_note_chunk", kind: "message", T: ContextItem_CommitNoteChunk, oneof: "item" },
  { no: 20, name: "file_diff_history", kind: "message", T: ContextItem_FileDiffHistory, oneof: "item" },
  { no: 21, name: "cmd_k_query_history_in_diff_session", kind: "message", T: ContextItem_CmdKQueryHistoryInDiffSession, oneof: "item" },
  { no: 22, name: "project_rule", kind: "message", T: CursorRule2, oneof: "item" }
]);
var ContextItem_FileChunk$Runtime = (() => class _ContextItem_FileChunk extends Message<_ContextItem_FileChunk> {
  declare relativeWorkspacePath: string;
  declare chunkContents: string;
  declare startLineNumber: number;
  constructor(data?: PartialMessage<_ContextItem_FileChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.chunkContents = "";
    this.startLineNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_FileChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_FileChunk {
    return new _ContextItem_FileChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_FileChunk {
    return new _ContextItem_FileChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_FileChunk {
    return new _ContextItem_FileChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_FileChunk | PlainMessage<_ContextItem_FileChunk> | undefined | null, b2: _ContextItem_FileChunk | PlainMessage<_ContextItem_FileChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_FileChunk as unknown as MessageType<_ContextItem_FileChunk>, a, b2);
  }
})();
export type ContextItem_FileChunk = InstanceType<typeof ContextItem_FileChunk$Runtime>;
var ContextItem_FileChunk: MessageType<ContextItem_FileChunk> = ContextItem_FileChunk$Runtime as unknown as MessageType<ContextItem_FileChunk>;
(ContextItem_FileChunk as MutableMessageType<ContextItem_FileChunk>).runtime = proto3;
(ContextItem_FileChunk as MutableMessageType<ContextItem_FileChunk>).typeName = "aiserver.v1.ContextItem.FileChunk";
(ContextItem_FileChunk as MutableMessageType<ContextItem_FileChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "chunk_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_SparseFileChunk$Runtime = (() => class _ContextItem_SparseFileChunk extends Message<_ContextItem_SparseFileChunk> {
  declare relativeWorkspacePath: string;
  declare lines: ContextItem_SparseFileChunk_Line[];
  declare totalNumberOfLinesInFile: number;
  declare cellNumber?: number;
  constructor(data?: PartialMessage<_ContextItem_SparseFileChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.lines = [];
    this.totalNumberOfLinesInFile = 0;
    proto3.util.initPartial(data, this as _ContextItem_SparseFileChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_SparseFileChunk {
    return new _ContextItem_SparseFileChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_SparseFileChunk {
    return new _ContextItem_SparseFileChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_SparseFileChunk {
    return new _ContextItem_SparseFileChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_SparseFileChunk | PlainMessage<_ContextItem_SparseFileChunk> | undefined | null, b2: _ContextItem_SparseFileChunk | PlainMessage<_ContextItem_SparseFileChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_SparseFileChunk as unknown as MessageType<_ContextItem_SparseFileChunk>, a, b2);
  }
})();
export type ContextItem_SparseFileChunk = InstanceType<typeof ContextItem_SparseFileChunk$Runtime>;
var ContextItem_SparseFileChunk: MessageType<ContextItem_SparseFileChunk> = ContextItem_SparseFileChunk$Runtime as unknown as MessageType<ContextItem_SparseFileChunk>;
(ContextItem_SparseFileChunk as MutableMessageType<ContextItem_SparseFileChunk>).runtime = proto3;
(ContextItem_SparseFileChunk as MutableMessageType<ContextItem_SparseFileChunk>).typeName = "aiserver.v1.ContextItem.SparseFileChunk";
(ContextItem_SparseFileChunk as MutableMessageType<ContextItem_SparseFileChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lines", kind: "message", T: ContextItem_SparseFileChunk_Line, repeated: true },
  {
    no: 3,
    name: "total_number_of_lines_in_file",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "cell_number", kind: "scalar", T: 5, opt: true }
]);
var ContextItem_SparseFileChunk_Line$Runtime = (() => class _ContextItem_SparseFileChunk_Line extends Message<_ContextItem_SparseFileChunk_Line> {
  declare line: string;
  declare lineNumber: number;
  constructor(data?: PartialMessage<_ContextItem_SparseFileChunk_Line>) {
    super();
    this.line = "";
    this.lineNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_SparseFileChunk_Line);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_SparseFileChunk_Line {
    return new _ContextItem_SparseFileChunk_Line().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_SparseFileChunk_Line {
    return new _ContextItem_SparseFileChunk_Line().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_SparseFileChunk_Line {
    return new _ContextItem_SparseFileChunk_Line().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_SparseFileChunk_Line | PlainMessage<_ContextItem_SparseFileChunk_Line> | undefined | null, b2: _ContextItem_SparseFileChunk_Line | PlainMessage<_ContextItem_SparseFileChunk_Line> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_SparseFileChunk_Line as unknown as MessageType<_ContextItem_SparseFileChunk_Line>, a, b2);
  }
})();
export type ContextItem_SparseFileChunk_Line = InstanceType<typeof ContextItem_SparseFileChunk_Line$Runtime>;
var ContextItem_SparseFileChunk_Line: MessageType<ContextItem_SparseFileChunk_Line> = ContextItem_SparseFileChunk_Line$Runtime as unknown as MessageType<ContextItem_SparseFileChunk_Line>;
(ContextItem_SparseFileChunk_Line as MutableMessageType<ContextItem_SparseFileChunk_Line>).runtime = proto3;
(ContextItem_SparseFileChunk_Line as MutableMessageType<ContextItem_SparseFileChunk_Line>).typeName = "aiserver.v1.ContextItem.SparseFileChunk.Line";
(ContextItem_SparseFileChunk_Line as MutableMessageType<ContextItem_SparseFileChunk_Line>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_OutlineChunk$Runtime = (() => class _ContextItem_OutlineChunk extends Message<_ContextItem_OutlineChunk> {
  declare relativeWorkspacePath: string;
  declare contents: string;
  declare fullRange?: LineRange;
  constructor(data?: PartialMessage<_ContextItem_OutlineChunk>) {
    super();
    this.relativeWorkspacePath = "";
    this.contents = "";
    proto3.util.initPartial(data, this as _ContextItem_OutlineChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_OutlineChunk {
    return new _ContextItem_OutlineChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_OutlineChunk {
    return new _ContextItem_OutlineChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_OutlineChunk {
    return new _ContextItem_OutlineChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_OutlineChunk | PlainMessage<_ContextItem_OutlineChunk> | undefined | null, b2: _ContextItem_OutlineChunk | PlainMessage<_ContextItem_OutlineChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_OutlineChunk as unknown as MessageType<_ContextItem_OutlineChunk>, a, b2);
  }
})();
export type ContextItem_OutlineChunk = InstanceType<typeof ContextItem_OutlineChunk$Runtime>;
var ContextItem_OutlineChunk: MessageType<ContextItem_OutlineChunk> = ContextItem_OutlineChunk$Runtime as unknown as MessageType<ContextItem_OutlineChunk>;
(ContextItem_OutlineChunk as MutableMessageType<ContextItem_OutlineChunk>).runtime = proto3;
(ContextItem_OutlineChunk as MutableMessageType<ContextItem_OutlineChunk>).typeName = "aiserver.v1.ContextItem.OutlineChunk";
(ContextItem_OutlineChunk as MutableMessageType<ContextItem_OutlineChunk>).fields = proto3.util.newFieldList(() => [
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
  },
  { no: 3, name: "full_range", kind: "message", T: LineRange }
]);
var ContextItem_CmdKSelection$Runtime = (() => class _ContextItem_CmdKSelection extends Message<_ContextItem_CmdKSelection> {
  declare lines: string[];
  declare startLineNumber: number;
  constructor(data?: PartialMessage<_ContextItem_CmdKSelection>) {
    super();
    this.lines = [];
    this.startLineNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_CmdKSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKSelection {
    return new _ContextItem_CmdKSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKSelection {
    return new _ContextItem_CmdKSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKSelection {
    return new _ContextItem_CmdKSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKSelection | PlainMessage<_ContextItem_CmdKSelection> | undefined | null, b2: _ContextItem_CmdKSelection | PlainMessage<_ContextItem_CmdKSelection> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKSelection as unknown as MessageType<_ContextItem_CmdKSelection>, a, b2);
  }
})();
export type ContextItem_CmdKSelection = InstanceType<typeof ContextItem_CmdKSelection$Runtime>;
var ContextItem_CmdKSelection: MessageType<ContextItem_CmdKSelection> = ContextItem_CmdKSelection$Runtime as unknown as MessageType<ContextItem_CmdKSelection>;
(ContextItem_CmdKSelection as MutableMessageType<ContextItem_CmdKSelection>).runtime = proto3;
(ContextItem_CmdKSelection as MutableMessageType<ContextItem_CmdKSelection>).typeName = "aiserver.v1.ContextItem.CmdKSelection";
(ContextItem_CmdKSelection as MutableMessageType<ContextItem_CmdKSelection>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_FileDiffHistory$Runtime = (() => class _ContextItem_FileDiffHistory extends Message<_ContextItem_FileDiffHistory> {
  declare cppFileDiffHistory?: CppFileDiffHistory;
  declare howManyDiffsAgo: number;
  declare isVeryRecent: boolean;
  constructor(data?: PartialMessage<_ContextItem_FileDiffHistory>) {
    super();
    this.howManyDiffsAgo = 0;
    this.isVeryRecent = false;
    proto3.util.initPartial(data, this as _ContextItem_FileDiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_FileDiffHistory {
    return new _ContextItem_FileDiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_FileDiffHistory {
    return new _ContextItem_FileDiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_FileDiffHistory {
    return new _ContextItem_FileDiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_FileDiffHistory | PlainMessage<_ContextItem_FileDiffHistory> | undefined | null, b2: _ContextItem_FileDiffHistory | PlainMessage<_ContextItem_FileDiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_FileDiffHistory as unknown as MessageType<_ContextItem_FileDiffHistory>, a, b2);
  }
})();
export type ContextItem_FileDiffHistory = InstanceType<typeof ContextItem_FileDiffHistory$Runtime>;
var ContextItem_FileDiffHistory: MessageType<ContextItem_FileDiffHistory> = ContextItem_FileDiffHistory$Runtime as unknown as MessageType<ContextItem_FileDiffHistory>;
(ContextItem_FileDiffHistory as MutableMessageType<ContextItem_FileDiffHistory>).runtime = proto3;
(ContextItem_FileDiffHistory as MutableMessageType<ContextItem_FileDiffHistory>).typeName = "aiserver.v1.ContextItem.FileDiffHistory";
(ContextItem_FileDiffHistory as MutableMessageType<ContextItem_FileDiffHistory>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cpp_file_diff_history", kind: "message", T: CppFileDiffHistory },
  {
    no: 2,
    name: "how_many_diffs_ago",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "is_very_recent",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ContextItem_CmdKImmediateContext$Runtime = (() => class _ContextItem_CmdKImmediateContext extends Message<_ContextItem_CmdKImmediateContext> {
  declare relativeWorkspacePath: string;
  declare lines: ContextItem_CmdKImmediateContext_Line[];
  declare totalNumberOfLinesInFile: number;
  declare cellNumber?: number;
  constructor(data?: PartialMessage<_ContextItem_CmdKImmediateContext>) {
    super();
    this.relativeWorkspacePath = "";
    this.lines = [];
    this.totalNumberOfLinesInFile = 0;
    proto3.util.initPartial(data, this as _ContextItem_CmdKImmediateContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKImmediateContext {
    return new _ContextItem_CmdKImmediateContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKImmediateContext {
    return new _ContextItem_CmdKImmediateContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKImmediateContext {
    return new _ContextItem_CmdKImmediateContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKImmediateContext | PlainMessage<_ContextItem_CmdKImmediateContext> | undefined | null, b2: _ContextItem_CmdKImmediateContext | PlainMessage<_ContextItem_CmdKImmediateContext> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKImmediateContext as unknown as MessageType<_ContextItem_CmdKImmediateContext>, a, b2);
  }
})();
export type ContextItem_CmdKImmediateContext = InstanceType<typeof ContextItem_CmdKImmediateContext$Runtime>;
var ContextItem_CmdKImmediateContext: MessageType<ContextItem_CmdKImmediateContext> = ContextItem_CmdKImmediateContext$Runtime as unknown as MessageType<ContextItem_CmdKImmediateContext>;
(ContextItem_CmdKImmediateContext as MutableMessageType<ContextItem_CmdKImmediateContext>).runtime = proto3;
(ContextItem_CmdKImmediateContext as MutableMessageType<ContextItem_CmdKImmediateContext>).typeName = "aiserver.v1.ContextItem.CmdKImmediateContext";
(ContextItem_CmdKImmediateContext as MutableMessageType<ContextItem_CmdKImmediateContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lines", kind: "message", T: ContextItem_CmdKImmediateContext_Line, repeated: true },
  {
    no: 3,
    name: "total_number_of_lines_in_file",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "cell_number", kind: "scalar", T: 5, opt: true }
]);
var ContextItem_CmdKImmediateContext_Line$Runtime = (() => class _ContextItem_CmdKImmediateContext_Line extends Message<_ContextItem_CmdKImmediateContext_Line> {
  declare line: string;
  declare lineNumber: number;
  constructor(data?: PartialMessage<_ContextItem_CmdKImmediateContext_Line>) {
    super();
    this.line = "";
    this.lineNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_CmdKImmediateContext_Line);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKImmediateContext_Line {
    return new _ContextItem_CmdKImmediateContext_Line().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKImmediateContext_Line {
    return new _ContextItem_CmdKImmediateContext_Line().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKImmediateContext_Line {
    return new _ContextItem_CmdKImmediateContext_Line().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKImmediateContext_Line | PlainMessage<_ContextItem_CmdKImmediateContext_Line> | undefined | null, b2: _ContextItem_CmdKImmediateContext_Line | PlainMessage<_ContextItem_CmdKImmediateContext_Line> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKImmediateContext_Line as unknown as MessageType<_ContextItem_CmdKImmediateContext_Line>, a, b2);
  }
})();
export type ContextItem_CmdKImmediateContext_Line = InstanceType<typeof ContextItem_CmdKImmediateContext_Line$Runtime>;
var ContextItem_CmdKImmediateContext_Line: MessageType<ContextItem_CmdKImmediateContext_Line> = ContextItem_CmdKImmediateContext_Line$Runtime as unknown as MessageType<ContextItem_CmdKImmediateContext_Line>;
(ContextItem_CmdKImmediateContext_Line as MutableMessageType<ContextItem_CmdKImmediateContext_Line>).runtime = proto3;
(ContextItem_CmdKImmediateContext_Line as MutableMessageType<ContextItem_CmdKImmediateContext_Line>).typeName = "aiserver.v1.ContextItem.CmdKImmediateContext.Line";
(ContextItem_CmdKImmediateContext_Line as MutableMessageType<ContextItem_CmdKImmediateContext_Line>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_CmdKQuery$Runtime = (() => class _ContextItem_CmdKQuery extends Message<_ContextItem_CmdKQuery> {
  declare query: string;
  constructor(data?: PartialMessage<_ContextItem_CmdKQuery>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _ContextItem_CmdKQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKQuery {
    return new _ContextItem_CmdKQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQuery {
    return new _ContextItem_CmdKQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQuery {
    return new _ContextItem_CmdKQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKQuery | PlainMessage<_ContextItem_CmdKQuery> | undefined | null, b2: _ContextItem_CmdKQuery | PlainMessage<_ContextItem_CmdKQuery> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKQuery as unknown as MessageType<_ContextItem_CmdKQuery>, a, b2);
  }
})();
export type ContextItem_CmdKQuery = InstanceType<typeof ContextItem_CmdKQuery$Runtime>;
var ContextItem_CmdKQuery: MessageType<ContextItem_CmdKQuery> = ContextItem_CmdKQuery$Runtime as unknown as MessageType<ContextItem_CmdKQuery>;
(ContextItem_CmdKQuery as MutableMessageType<ContextItem_CmdKQuery>).runtime = proto3;
(ContextItem_CmdKQuery as MutableMessageType<ContextItem_CmdKQuery>).typeName = "aiserver.v1.ContextItem.CmdKQuery";
(ContextItem_CmdKQuery as MutableMessageType<ContextItem_CmdKQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextItem_TerminalCmdKQuery$Runtime = (() => class _ContextItem_TerminalCmdKQuery extends Message<_ContextItem_TerminalCmdKQuery> {
  declare query: string;
  constructor(data?: PartialMessage<_ContextItem_TerminalCmdKQuery>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _ContextItem_TerminalCmdKQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_TerminalCmdKQuery {
    return new _ContextItem_TerminalCmdKQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_TerminalCmdKQuery {
    return new _ContextItem_TerminalCmdKQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_TerminalCmdKQuery {
    return new _ContextItem_TerminalCmdKQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_TerminalCmdKQuery | PlainMessage<_ContextItem_TerminalCmdKQuery> | undefined | null, b2: _ContextItem_TerminalCmdKQuery | PlainMessage<_ContextItem_TerminalCmdKQuery> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_TerminalCmdKQuery as unknown as MessageType<_ContextItem_TerminalCmdKQuery>, a, b2);
  }
})();
export type ContextItem_TerminalCmdKQuery = InstanceType<typeof ContextItem_TerminalCmdKQuery$Runtime>;
var ContextItem_TerminalCmdKQuery: MessageType<ContextItem_TerminalCmdKQuery> = ContextItem_TerminalCmdKQuery$Runtime as unknown as MessageType<ContextItem_TerminalCmdKQuery>;
(ContextItem_TerminalCmdKQuery as MutableMessageType<ContextItem_TerminalCmdKQuery>).runtime = proto3;
(ContextItem_TerminalCmdKQuery as MutableMessageType<ContextItem_TerminalCmdKQuery>).typeName = "aiserver.v1.ContextItem.TerminalCmdKQuery";
(ContextItem_TerminalCmdKQuery as MutableMessageType<ContextItem_TerminalCmdKQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextItem_TerminalCmdKQueryHistory$Runtime = (() => class _ContextItem_TerminalCmdKQueryHistory extends Message<_ContextItem_TerminalCmdKQueryHistory> {
  declare query?: ContextItem_TerminalCmdKQuery;
  declare queryHistory?: _ContextItem_TerminalCmdKQueryHistory;
  declare contextItemHashes: string[];
  declare suggestedCommand: string;
  constructor(data?: PartialMessage<_ContextItem_TerminalCmdKQueryHistory>) {
    super();
    this.contextItemHashes = [];
    this.suggestedCommand = "";
    proto3.util.initPartial(data, this as _ContextItem_TerminalCmdKQueryHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_TerminalCmdKQueryHistory {
    return new _ContextItem_TerminalCmdKQueryHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_TerminalCmdKQueryHistory {
    return new _ContextItem_TerminalCmdKQueryHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_TerminalCmdKQueryHistory {
    return new _ContextItem_TerminalCmdKQueryHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_TerminalCmdKQueryHistory | PlainMessage<_ContextItem_TerminalCmdKQueryHistory> | undefined | null, b2: _ContextItem_TerminalCmdKQueryHistory | PlainMessage<_ContextItem_TerminalCmdKQueryHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_TerminalCmdKQueryHistory as unknown as MessageType<_ContextItem_TerminalCmdKQueryHistory>, a, b2);
  }
})();
export type ContextItem_TerminalCmdKQueryHistory = InstanceType<typeof ContextItem_TerminalCmdKQueryHistory$Runtime>;
var ContextItem_TerminalCmdKQueryHistory: MessageType<ContextItem_TerminalCmdKQueryHistory> = ContextItem_TerminalCmdKQueryHistory$Runtime as unknown as MessageType<ContextItem_TerminalCmdKQueryHistory>;
(ContextItem_TerminalCmdKQueryHistory as MutableMessageType<ContextItem_TerminalCmdKQueryHistory>).runtime = proto3;
(ContextItem_TerminalCmdKQueryHistory as MutableMessageType<ContextItem_TerminalCmdKQueryHistory>).typeName = "aiserver.v1.ContextItem.TerminalCmdKQueryHistory";
(ContextItem_TerminalCmdKQueryHistory as MutableMessageType<ContextItem_TerminalCmdKQueryHistory>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "query", kind: "message", T: ContextItem_TerminalCmdKQuery },
  { no: 2, name: "query_history", kind: "message", T: ContextItem_TerminalCmdKQueryHistory },
  { no: 5, name: "context_item_hashes", kind: "scalar", T: 9, repeated: true },
  {
    no: 6,
    name: "suggested_command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextItem_CmdKQueryHistory$Runtime = (() => class _ContextItem_CmdKQueryHistory extends Message<_ContextItem_CmdKQueryHistory> {
  declare query?: ContextItem_CmdKQuery;
  declare immediateContext?: ContextItem_CmdKImmediateContext;
  declare selection?: ContextItem_CmdKSelection;
  declare queryHistory?: _ContextItem_CmdKQueryHistory;
  declare contextItemHashes: string[];
  declare timestamp?: bigint;
  declare timestampDouble?: number;
  constructor(data?: PartialMessage<_ContextItem_CmdKQueryHistory>) {
    super();
    this.contextItemHashes = [];
    proto3.util.initPartial(data, this as _ContextItem_CmdKQueryHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKQueryHistory {
    return new _ContextItem_CmdKQueryHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistory {
    return new _ContextItem_CmdKQueryHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistory {
    return new _ContextItem_CmdKQueryHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKQueryHistory | PlainMessage<_ContextItem_CmdKQueryHistory> | undefined | null, b2: _ContextItem_CmdKQueryHistory | PlainMessage<_ContextItem_CmdKQueryHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKQueryHistory as unknown as MessageType<_ContextItem_CmdKQueryHistory>, a, b2);
  }
})();
export type ContextItem_CmdKQueryHistory = InstanceType<typeof ContextItem_CmdKQueryHistory$Runtime>;
var ContextItem_CmdKQueryHistory: MessageType<ContextItem_CmdKQueryHistory> = ContextItem_CmdKQueryHistory$Runtime as unknown as MessageType<ContextItem_CmdKQueryHistory>;
(ContextItem_CmdKQueryHistory as MutableMessageType<ContextItem_CmdKQueryHistory>).runtime = proto3;
(ContextItem_CmdKQueryHistory as MutableMessageType<ContextItem_CmdKQueryHistory>).typeName = "aiserver.v1.ContextItem.CmdKQueryHistory";
(ContextItem_CmdKQueryHistory as MutableMessageType<ContextItem_CmdKQueryHistory>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "query", kind: "message", T: ContextItem_CmdKQuery },
  { no: 2, name: "immediate_context", kind: "message", T: ContextItem_CmdKImmediateContext },
  { no: 3, name: "selection", kind: "message", T: ContextItem_CmdKSelection },
  { no: 4, name: "query_history", kind: "message", T: ContextItem_CmdKQueryHistory },
  { no: 5, name: "context_item_hashes", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "timestamp", kind: "scalar", T: 3, opt: true },
  { no: 7, name: "timestamp_double", kind: "scalar", T: 1, opt: true }
]);
var ContextItem_CmdKQueryHistoryInDiffSession$Runtime = (() => class _ContextItem_CmdKQueryHistoryInDiffSession extends Message<_ContextItem_CmdKQueryHistoryInDiffSession> {
  declare pastCmdkQueries: ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession[];
  declare currTimestampDouble: number;
  constructor(data?: PartialMessage<_ContextItem_CmdKQueryHistoryInDiffSession>) {
    super();
    this.pastCmdkQueries = [];
    this.currTimestampDouble = 0;
    proto3.util.initPartial(data, this as _ContextItem_CmdKQueryHistoryInDiffSession);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKQueryHistoryInDiffSession | PlainMessage<_ContextItem_CmdKQueryHistoryInDiffSession> | undefined | null, b2: _ContextItem_CmdKQueryHistoryInDiffSession | PlainMessage<_ContextItem_CmdKQueryHistoryInDiffSession> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKQueryHistoryInDiffSession as unknown as MessageType<_ContextItem_CmdKQueryHistoryInDiffSession>, a, b2);
  }
})();
export type ContextItem_CmdKQueryHistoryInDiffSession = InstanceType<typeof ContextItem_CmdKQueryHistoryInDiffSession$Runtime>;
var ContextItem_CmdKQueryHistoryInDiffSession: MessageType<ContextItem_CmdKQueryHistoryInDiffSession> = ContextItem_CmdKQueryHistoryInDiffSession$Runtime as unknown as MessageType<ContextItem_CmdKQueryHistoryInDiffSession>;
(ContextItem_CmdKQueryHistoryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession>).runtime = proto3;
(ContextItem_CmdKQueryHistoryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession>).typeName = "aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession";
(ContextItem_CmdKQueryHistoryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "past_cmdk_queries", kind: "message", T: ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession, repeated: true },
  {
    no: 3,
    name: "curr_timestamp_double",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession$Runtime = (() => class _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession extends Message<_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession> {
  declare query?: ContextItem_CmdKQuery;
  declare relativeWorkspacePath: string;
  declare cmdkWasAccepted?: boolean;
  declare timestampDouble: number;
  declare timestampForDiffInterleaving?: number;
  declare requestId?: string;
  constructor(data?: PartialMessage<_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>) {
    super();
    this.relativeWorkspacePath = "";
    this.timestampDouble = 0;
    proto3.util.initPartial(data, this as _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession {
    return new _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession | PlainMessage<_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession> | undefined | null, b2: _ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession | PlainMessage<_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession as unknown as MessageType<_ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>, a, b2);
  }
})();
export type ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession = InstanceType<typeof ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession$Runtime>;
var ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession: MessageType<ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession> = ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession$Runtime as unknown as MessageType<ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>;
(ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>).runtime = proto3;
(ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>).typeName = "aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession";
(ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession as MutableMessageType<ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "query", kind: "message", T: ContextItem_CmdKQuery },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "cmdk_was_accepted", kind: "scalar", T: 8, opt: true },
  {
    no: 6,
    name: "timestamp_double",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  { no: 7, name: "timestamp_for_diff_interleaving", kind: "scalar", T: 1, opt: true },
  { no: 8, name: "request_id", kind: "scalar", T: 9, opt: true }
]);
var ContextItem_ChatHistory$Runtime = (() => class _ContextItem_ChatHistory extends Message<_ContextItem_ChatHistory> {
  declare userMessage: string;
  declare assistantResponse: string;
  declare chatHistory?: _ContextItem_ChatHistory;
  declare activeForCmdK: boolean;
  declare timestamp?: bigint;
  declare timestampDouble?: number;
  constructor(data?: PartialMessage<_ContextItem_ChatHistory>) {
    super();
    this.userMessage = "";
    this.assistantResponse = "";
    this.activeForCmdK = false;
    proto3.util.initPartial(data, this as _ContextItem_ChatHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_ChatHistory {
    return new _ContextItem_ChatHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_ChatHistory {
    return new _ContextItem_ChatHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_ChatHistory {
    return new _ContextItem_ChatHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_ChatHistory | PlainMessage<_ContextItem_ChatHistory> | undefined | null, b2: _ContextItem_ChatHistory | PlainMessage<_ContextItem_ChatHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_ChatHistory as unknown as MessageType<_ContextItem_ChatHistory>, a, b2);
  }
})();
export type ContextItem_ChatHistory = InstanceType<typeof ContextItem_ChatHistory$Runtime>;
var ContextItem_ChatHistory: MessageType<ContextItem_ChatHistory> = ContextItem_ChatHistory$Runtime as unknown as MessageType<ContextItem_ChatHistory>;
(ContextItem_ChatHistory as MutableMessageType<ContextItem_ChatHistory>).runtime = proto3;
(ContextItem_ChatHistory as MutableMessageType<ContextItem_ChatHistory>).typeName = "aiserver.v1.ContextItem.ChatHistory";
(ContextItem_ChatHistory as MutableMessageType<ContextItem_ChatHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "assistant_response",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "chat_history", kind: "message", T: ContextItem_ChatHistory },
  {
    no: 4,
    name: "active_for_cmd_k",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "timestamp", kind: "scalar", T: 3, opt: true },
  { no: 6, name: "timestamp_double", kind: "scalar", T: 1, opt: true }
]);
var ContextItem_TerminalHistory$Runtime = (() => class _ContextItem_TerminalHistory extends Message<_ContextItem_TerminalHistory> {
  declare history: string;
  declare cwdFull: string;
  declare cwdRelativeWorkspacePath: string;
  declare activeForCmdK: boolean;
  declare timestamp?: bigint;
  declare timestampDouble?: number;
  constructor(data?: PartialMessage<_ContextItem_TerminalHistory>) {
    super();
    this.history = "";
    this.cwdFull = "";
    this.cwdRelativeWorkspacePath = "";
    this.activeForCmdK = false;
    proto3.util.initPartial(data, this as _ContextItem_TerminalHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_TerminalHistory {
    return new _ContextItem_TerminalHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_TerminalHistory {
    return new _ContextItem_TerminalHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_TerminalHistory {
    return new _ContextItem_TerminalHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_TerminalHistory | PlainMessage<_ContextItem_TerminalHistory> | undefined | null, b2: _ContextItem_TerminalHistory | PlainMessage<_ContextItem_TerminalHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_TerminalHistory as unknown as MessageType<_ContextItem_TerminalHistory>, a, b2);
  }
})();
export type ContextItem_TerminalHistory = InstanceType<typeof ContextItem_TerminalHistory$Runtime>;
var ContextItem_TerminalHistory: MessageType<ContextItem_TerminalHistory> = ContextItem_TerminalHistory$Runtime as unknown as MessageType<ContextItem_TerminalHistory>;
(ContextItem_TerminalHistory as MutableMessageType<ContextItem_TerminalHistory>).runtime = proto3;
(ContextItem_TerminalHistory as MutableMessageType<ContextItem_TerminalHistory>).typeName = "aiserver.v1.ContextItem.TerminalHistory";
(ContextItem_TerminalHistory as MutableMessageType<ContextItem_TerminalHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "history",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "cwd_full",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "cwd_relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "active_for_cmd_k",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "timestamp", kind: "scalar", T: 3, opt: true },
  { no: 8, name: "timestamp_double", kind: "scalar", T: 1, opt: true }
]);
var ContextItem_CustomInstructions$Runtime = (() => class _ContextItem_CustomInstructions extends Message<_ContextItem_CustomInstructions> {
  declare instructions: string;
  constructor(data?: PartialMessage<_ContextItem_CustomInstructions>) {
    super();
    this.instructions = "";
    proto3.util.initPartial(data, this as _ContextItem_CustomInstructions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CustomInstructions {
    return new _ContextItem_CustomInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CustomInstructions {
    return new _ContextItem_CustomInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CustomInstructions {
    return new _ContextItem_CustomInstructions().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CustomInstructions | PlainMessage<_ContextItem_CustomInstructions> | undefined | null, b2: _ContextItem_CustomInstructions | PlainMessage<_ContextItem_CustomInstructions> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CustomInstructions as unknown as MessageType<_ContextItem_CustomInstructions>, a, b2);
  }
})();
export type ContextItem_CustomInstructions = InstanceType<typeof ContextItem_CustomInstructions$Runtime>;
var ContextItem_CustomInstructions: MessageType<ContextItem_CustomInstructions> = ContextItem_CustomInstructions$Runtime as unknown as MessageType<ContextItem_CustomInstructions>;
(ContextItem_CustomInstructions as MutableMessageType<ContextItem_CustomInstructions>).runtime = proto3;
(ContextItem_CustomInstructions as MutableMessageType<ContextItem_CustomInstructions>).typeName = "aiserver.v1.ContextItem.CustomInstructions";
(ContextItem_CustomInstructions as MutableMessageType<ContextItem_CustomInstructions>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextItem_GoToDefinitionResult$Runtime = (() => class _ContextItem_GoToDefinitionResult extends Message<_ContextItem_GoToDefinitionResult> {
  declare relativeWorkspacePath: string;
  declare line: string;
  declare lineNumber: number;
  declare columnNumber: number;
  declare definitionChunk?: ContextItem_FileChunk;
  constructor(data?: PartialMessage<_ContextItem_GoToDefinitionResult>) {
    super();
    this.relativeWorkspacePath = "";
    this.line = "";
    this.lineNumber = 0;
    this.columnNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_GoToDefinitionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_GoToDefinitionResult {
    return new _ContextItem_GoToDefinitionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_GoToDefinitionResult {
    return new _ContextItem_GoToDefinitionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_GoToDefinitionResult {
    return new _ContextItem_GoToDefinitionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_GoToDefinitionResult | PlainMessage<_ContextItem_GoToDefinitionResult> | undefined | null, b2: _ContextItem_GoToDefinitionResult | PlainMessage<_ContextItem_GoToDefinitionResult> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_GoToDefinitionResult as unknown as MessageType<_ContextItem_GoToDefinitionResult>, a, b2);
  }
})();
export type ContextItem_GoToDefinitionResult = InstanceType<typeof ContextItem_GoToDefinitionResult$Runtime>;
var ContextItem_GoToDefinitionResult: MessageType<ContextItem_GoToDefinitionResult> = ContextItem_GoToDefinitionResult$Runtime as unknown as MessageType<ContextItem_GoToDefinitionResult>;
(ContextItem_GoToDefinitionResult as MutableMessageType<ContextItem_GoToDefinitionResult>).runtime = proto3;
(ContextItem_GoToDefinitionResult as MutableMessageType<ContextItem_GoToDefinitionResult>).typeName = "aiserver.v1.ContextItem.GoToDefinitionResult";
(ContextItem_GoToDefinitionResult as MutableMessageType<ContextItem_GoToDefinitionResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "column_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "definition_chunk", kind: "message", T: ContextItem_FileChunk }
]);
var ContextItem_DocumentationChunk$Runtime = (() => class _ContextItem_DocumentationChunk extends Message<_ContextItem_DocumentationChunk> {
  declare docName: string;
  declare pageUrl: string;
  declare documentationChunk: string;
  declare score: number;
  constructor(data?: PartialMessage<_ContextItem_DocumentationChunk>) {
    super();
    this.docName = "";
    this.pageUrl = "";
    this.documentationChunk = "";
    this.score = 0;
    proto3.util.initPartial(data, this as _ContextItem_DocumentationChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_DocumentationChunk {
    return new _ContextItem_DocumentationChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_DocumentationChunk {
    return new _ContextItem_DocumentationChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_DocumentationChunk {
    return new _ContextItem_DocumentationChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_DocumentationChunk | PlainMessage<_ContextItem_DocumentationChunk> | undefined | null, b2: _ContextItem_DocumentationChunk | PlainMessage<_ContextItem_DocumentationChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_DocumentationChunk as unknown as MessageType<_ContextItem_DocumentationChunk>, a, b2);
  }
})();
export type ContextItem_DocumentationChunk = InstanceType<typeof ContextItem_DocumentationChunk$Runtime>;
var ContextItem_DocumentationChunk: MessageType<ContextItem_DocumentationChunk> = ContextItem_DocumentationChunk$Runtime as unknown as MessageType<ContextItem_DocumentationChunk>;
(ContextItem_DocumentationChunk as MutableMessageType<ContextItem_DocumentationChunk>).runtime = proto3;
(ContextItem_DocumentationChunk as MutableMessageType<ContextItem_DocumentationChunk>).typeName = "aiserver.v1.ContextItem.DocumentationChunk";
(ContextItem_DocumentationChunk as MutableMessageType<ContextItem_DocumentationChunk>).fields = proto3.util.newFieldList(() => [
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
  }
]);
var ContextItem_Lints$Runtime = (() => class _ContextItem_Lints extends Message<_ContextItem_Lints> {
  declare relativeWorkspacePath: string;
  declare lints: Lint[];
  declare contextLines: ContextItem_Lints_Line[];
  constructor(data?: PartialMessage<_ContextItem_Lints>) {
    super();
    this.relativeWorkspacePath = "";
    this.lints = [];
    this.contextLines = [];
    proto3.util.initPartial(data, this as _ContextItem_Lints);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_Lints {
    return new _ContextItem_Lints().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_Lints {
    return new _ContextItem_Lints().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_Lints {
    return new _ContextItem_Lints().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_Lints | PlainMessage<_ContextItem_Lints> | undefined | null, b2: _ContextItem_Lints | PlainMessage<_ContextItem_Lints> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_Lints as unknown as MessageType<_ContextItem_Lints>, a, b2);
  }
})();
export type ContextItem_Lints = InstanceType<typeof ContextItem_Lints$Runtime>;
var ContextItem_Lints: MessageType<ContextItem_Lints> = ContextItem_Lints$Runtime as unknown as MessageType<ContextItem_Lints>;
(ContextItem_Lints as MutableMessageType<ContextItem_Lints>).runtime = proto3;
(ContextItem_Lints as MutableMessageType<ContextItem_Lints>).typeName = "aiserver.v1.ContextItem.Lints";
(ContextItem_Lints as MutableMessageType<ContextItem_Lints>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lints", kind: "message", T: Lint, repeated: true },
  { no: 3, name: "context_lines", kind: "message", T: ContextItem_Lints_Line, repeated: true }
]);
var ContextItem_Lints_Line$Runtime = (() => class _ContextItem_Lints_Line extends Message<_ContextItem_Lints_Line> {
  declare line: string;
  declare lineNumber: number;
  constructor(data?: PartialMessage<_ContextItem_Lints_Line>) {
    super();
    this.line = "";
    this.lineNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_Lints_Line);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_Lints_Line {
    return new _ContextItem_Lints_Line().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_Lints_Line {
    return new _ContextItem_Lints_Line().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_Lints_Line {
    return new _ContextItem_Lints_Line().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_Lints_Line | PlainMessage<_ContextItem_Lints_Line> | undefined | null, b2: _ContextItem_Lints_Line | PlainMessage<_ContextItem_Lints_Line> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_Lints_Line as unknown as MessageType<_ContextItem_Lints_Line>, a, b2);
  }
})();
export type ContextItem_Lints_Line = InstanceType<typeof ContextItem_Lints_Line$Runtime>;
var ContextItem_Lints_Line: MessageType<ContextItem_Lints_Line> = ContextItem_Lints_Line$Runtime as unknown as MessageType<ContextItem_Lints_Line>;
(ContextItem_Lints_Line as MutableMessageType<ContextItem_Lints_Line>).runtime = proto3;
(ContextItem_Lints_Line as MutableMessageType<ContextItem_Lints_Line>).typeName = "aiserver.v1.ContextItem.Lints.Line";
(ContextItem_Lints_Line as MutableMessageType<ContextItem_Lints_Line>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_NotebookCellOutput$Runtime = (() => class _ContextItem_NotebookCellOutput extends Message<_ContextItem_NotebookCellOutput> {
  declare relativeWorkspacePath: string;
  declare cellOutput: string;
  declare cellNumber: number;
  constructor(data?: PartialMessage<_ContextItem_NotebookCellOutput>) {
    super();
    this.relativeWorkspacePath = "";
    this.cellOutput = "";
    this.cellNumber = 0;
    proto3.util.initPartial(data, this as _ContextItem_NotebookCellOutput);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_NotebookCellOutput {
    return new _ContextItem_NotebookCellOutput().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_NotebookCellOutput {
    return new _ContextItem_NotebookCellOutput().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_NotebookCellOutput {
    return new _ContextItem_NotebookCellOutput().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_NotebookCellOutput | PlainMessage<_ContextItem_NotebookCellOutput> | undefined | null, b2: _ContextItem_NotebookCellOutput | PlainMessage<_ContextItem_NotebookCellOutput> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_NotebookCellOutput as unknown as MessageType<_ContextItem_NotebookCellOutput>, a, b2);
  }
})();
export type ContextItem_NotebookCellOutput = InstanceType<typeof ContextItem_NotebookCellOutput$Runtime>;
var ContextItem_NotebookCellOutput: MessageType<ContextItem_NotebookCellOutput> = ContextItem_NotebookCellOutput$Runtime as unknown as MessageType<ContextItem_NotebookCellOutput>;
(ContextItem_NotebookCellOutput as MutableMessageType<ContextItem_NotebookCellOutput>).runtime = proto3;
(ContextItem_NotebookCellOutput as MutableMessageType<ContextItem_NotebookCellOutput>).typeName = "aiserver.v1.ContextItem.NotebookCellOutput";
(ContextItem_NotebookCellOutput as MutableMessageType<ContextItem_NotebookCellOutput>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "cell_output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "cell_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ContextItem_LspSubgraphChunk$Runtime = (() => class _ContextItem_LspSubgraphChunk extends Message<_ContextItem_LspSubgraphChunk> {
  declare lspSubgraphFullContext?: LspSubgraphFullContext;
  constructor(data?: PartialMessage<_ContextItem_LspSubgraphChunk>) {
    super();
    proto3.util.initPartial(data, this as _ContextItem_LspSubgraphChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_LspSubgraphChunk {
    return new _ContextItem_LspSubgraphChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_LspSubgraphChunk {
    return new _ContextItem_LspSubgraphChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_LspSubgraphChunk {
    return new _ContextItem_LspSubgraphChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_LspSubgraphChunk | PlainMessage<_ContextItem_LspSubgraphChunk> | undefined | null, b2: _ContextItem_LspSubgraphChunk | PlainMessage<_ContextItem_LspSubgraphChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_LspSubgraphChunk as unknown as MessageType<_ContextItem_LspSubgraphChunk>, a, b2);
  }
})();
export type ContextItem_LspSubgraphChunk = InstanceType<typeof ContextItem_LspSubgraphChunk$Runtime>;
var ContextItem_LspSubgraphChunk: MessageType<ContextItem_LspSubgraphChunk> = ContextItem_LspSubgraphChunk$Runtime as unknown as MessageType<ContextItem_LspSubgraphChunk>;
(ContextItem_LspSubgraphChunk as MutableMessageType<ContextItem_LspSubgraphChunk>).runtime = proto3;
(ContextItem_LspSubgraphChunk as MutableMessageType<ContextItem_LspSubgraphChunk>).typeName = "aiserver.v1.ContextItem.LspSubgraphChunk";
(ContextItem_LspSubgraphChunk as MutableMessageType<ContextItem_LspSubgraphChunk>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "lsp_subgraph_full_context", kind: "message", T: LspSubgraphFullContext }
]);
var ContextItem_CommitNoteChunk$Runtime = (() => class _ContextItem_CommitNoteChunk extends Message<_ContextItem_CommitNoteChunk> {
  declare note: string;
  constructor(data?: PartialMessage<_ContextItem_CommitNoteChunk>) {
    super();
    this.note = "";
    proto3.util.initPartial(data, this as _ContextItem_CommitNoteChunk);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextItem_CommitNoteChunk {
    return new _ContextItem_CommitNoteChunk().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextItem_CommitNoteChunk {
    return new _ContextItem_CommitNoteChunk().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextItem_CommitNoteChunk {
    return new _ContextItem_CommitNoteChunk().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextItem_CommitNoteChunk | PlainMessage<_ContextItem_CommitNoteChunk> | undefined | null, b2: _ContextItem_CommitNoteChunk | PlainMessage<_ContextItem_CommitNoteChunk> | undefined | null): boolean {
    return proto3.util.equals(_ContextItem_CommitNoteChunk as unknown as MessageType<_ContextItem_CommitNoteChunk>, a, b2);
  }
})();
export type ContextItem_CommitNoteChunk = InstanceType<typeof ContextItem_CommitNoteChunk$Runtime>;
var ContextItem_CommitNoteChunk: MessageType<ContextItem_CommitNoteChunk> = ContextItem_CommitNoteChunk$Runtime as unknown as MessageType<ContextItem_CommitNoteChunk>;
(ContextItem_CommitNoteChunk as MutableMessageType<ContextItem_CommitNoteChunk>).runtime = proto3;
(ContextItem_CommitNoteChunk as MutableMessageType<ContextItem_CommitNoteChunk>).typeName = "aiserver.v1.ContextItem.CommitNoteChunk";
(ContextItem_CommitNoteChunk as MutableMessageType<ContextItem_CommitNoteChunk>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextIntent$Runtime = (() => class _ContextIntent extends Message<_ContextIntent> {
  declare type: ContextIntent_Type;
  declare uuid: string;
  declare intent: { case: "file"; value: ContextIntent_File } | { case: "codeSelection"; value: ContextIntent_CodeSelection } | { case: "lints"; value: ContextIntent_Lints } | { case: "recentLocations"; value: ContextIntent_RecentLocations } | { case: "cmdKCurrentFile"; value: ContextIntent_CmdKCurrentFile } | { case: "cmdKQueryEtc"; value: ContextIntent_CmdKQueryEtc } | { case: "terminalCmdKDefaults"; value: ContextIntent_TerminalCmdKDefaults } | { case: "cmdKDefinitions"; value: ContextIntent_CmdKDefinitions } | { case: "documentation"; value: ContextIntent_Documentation } | { case: "customInstructions"; value: ContextIntent_CustomInstructions } | { case: "chatHistory"; value: ContextIntent_ChatHistory } | { case: "terminalHistory"; value: ContextIntent_TerminalHistory } | { case: "visibleTabs"; value: ContextIntent_VisibleTabs } | { case: "lspSubgraph"; value: ContextIntent_LspSubgraph } | { case: "commitNotes"; value: ContextIntent_CommitNotes } | { case: "diffHistory"; value: ContextIntent_DiffHistory } | { case: "pastCmdkMessagesInDiffSessions"; value: ContextIntent_PastCmdkConversationsInDiffSessions } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ContextIntent>) {
    super();
    this.type = ContextIntent_Type.UNSPECIFIED;
    this.uuid = "";
    this.intent = { case: void 0 };
    proto3.util.initPartial(data, this as _ContextIntent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent {
    return new _ContextIntent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent {
    return new _ContextIntent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent {
    return new _ContextIntent().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent | PlainMessage<_ContextIntent> | undefined | null, b2: _ContextIntent | PlainMessage<_ContextIntent> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent as unknown as MessageType<_ContextIntent>, a, b2);
  }
})();
export type ContextIntent = InstanceType<typeof ContextIntent$Runtime>;
var ContextIntent: MessageType<ContextIntent> = ContextIntent$Runtime as unknown as MessageType<ContextIntent>;
(ContextIntent as MutableMessageType<ContextIntent>).runtime = proto3;
(ContextIntent as MutableMessageType<ContextIntent>).typeName = "aiserver.v1.ContextIntent";
(ContextIntent as MutableMessageType<ContextIntent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ContextIntent_Type) },
  {
    no: 15,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file", kind: "message", T: ContextIntent_File, oneof: "intent" },
  { no: 3, name: "code_selection", kind: "message", T: ContextIntent_CodeSelection, oneof: "intent" },
  { no: 5, name: "lints", kind: "message", T: ContextIntent_Lints, oneof: "intent" },
  { no: 6, name: "recent_locations", kind: "message", T: ContextIntent_RecentLocations, oneof: "intent" },
  { no: 8, name: "cmd_k_current_file", kind: "message", T: ContextIntent_CmdKCurrentFile, oneof: "intent" },
  { no: 9, name: "cmd_k_query_etc", kind: "message", T: ContextIntent_CmdKQueryEtc, oneof: "intent" },
  { no: 14, name: "terminal_cmd_k_defaults", kind: "message", T: ContextIntent_TerminalCmdKDefaults, oneof: "intent" },
  { no: 10, name: "cmd_k_definitions", kind: "message", T: ContextIntent_CmdKDefinitions, oneof: "intent" },
  { no: 11, name: "documentation", kind: "message", T: ContextIntent_Documentation, oneof: "intent" },
  { no: 12, name: "custom_instructions", kind: "message", T: ContextIntent_CustomInstructions, oneof: "intent" },
  { no: 13, name: "chat_history", kind: "message", T: ContextIntent_ChatHistory, oneof: "intent" },
  { no: 16, name: "terminal_history", kind: "message", T: ContextIntent_TerminalHistory, oneof: "intent" },
  { no: 17, name: "visible_tabs", kind: "message", T: ContextIntent_VisibleTabs, oneof: "intent" },
  { no: 18, name: "lsp_subgraph", kind: "message", T: ContextIntent_LspSubgraph, oneof: "intent" },
  { no: 19, name: "commit_notes", kind: "message", T: ContextIntent_CommitNotes, oneof: "intent" },
  { no: 20, name: "diff_history", kind: "message", T: ContextIntent_DiffHistory, oneof: "intent" },
  { no: 21, name: "past_cmdk_messages_in_diff_sessions", kind: "message", T: ContextIntent_PastCmdkConversationsInDiffSessions, oneof: "intent" }
]);
(function(ContextIntent_Type2) {
  ContextIntent_Type2[ContextIntent_Type2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ContextIntent_Type2[ContextIntent_Type2["USER_ADDED"] = 1] = "USER_ADDED";
  ContextIntent_Type2[ContextIntent_Type2["AUTOMATIC"] = 2] = "AUTOMATIC";
})(ContextIntent_Type! || (ContextIntent_Type = {} as typeof ContextIntent_Type));
proto3.util.setEnumType(ContextIntent_Type, "aiserver.v1.ContextIntent.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_USER_ADDED" },
  { no: 2, name: "TYPE_AUTOMATIC" }
]);
var ContextIntent_Documentation$Runtime = (() => class _ContextIntent_Documentation extends Message<_ContextIntent_Documentation> {
  declare documentationIdentifier: string;
  constructor(data?: PartialMessage<_ContextIntent_Documentation>) {
    super();
    this.documentationIdentifier = "";
    proto3.util.initPartial(data, this as _ContextIntent_Documentation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_Documentation {
    return new _ContextIntent_Documentation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_Documentation {
    return new _ContextIntent_Documentation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_Documentation {
    return new _ContextIntent_Documentation().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_Documentation | PlainMessage<_ContextIntent_Documentation> | undefined | null, b2: _ContextIntent_Documentation | PlainMessage<_ContextIntent_Documentation> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_Documentation as unknown as MessageType<_ContextIntent_Documentation>, a, b2);
  }
})();
export type ContextIntent_Documentation = InstanceType<typeof ContextIntent_Documentation$Runtime>;
var ContextIntent_Documentation: MessageType<ContextIntent_Documentation> = ContextIntent_Documentation$Runtime as unknown as MessageType<ContextIntent_Documentation>;
(ContextIntent_Documentation as MutableMessageType<ContextIntent_Documentation>).runtime = proto3;
(ContextIntent_Documentation as MutableMessageType<ContextIntent_Documentation>).typeName = "aiserver.v1.ContextIntent.Documentation";
(ContextIntent_Documentation as MutableMessageType<ContextIntent_Documentation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "documentation_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextIntent_File$Runtime = (() => class _ContextIntent_File extends Message<_ContextIntent_File> {
  declare relativeWorkspacePath: string;
  declare mode: ContextIntent_File_Mode;
  constructor(data?: PartialMessage<_ContextIntent_File>) {
    super();
    this.relativeWorkspacePath = "";
    this.mode = ContextIntent_File_Mode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ContextIntent_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_File {
    return new _ContextIntent_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_File {
    return new _ContextIntent_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_File {
    return new _ContextIntent_File().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_File | PlainMessage<_ContextIntent_File> | undefined | null, b2: _ContextIntent_File | PlainMessage<_ContextIntent_File> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_File as unknown as MessageType<_ContextIntent_File>, a, b2);
  }
})();
export type ContextIntent_File = InstanceType<typeof ContextIntent_File$Runtime>;
var ContextIntent_File: MessageType<ContextIntent_File> = ContextIntent_File$Runtime as unknown as MessageType<ContextIntent_File>;
(ContextIntent_File as MutableMessageType<ContextIntent_File>).runtime = proto3;
(ContextIntent_File as MutableMessageType<ContextIntent_File>).typeName = "aiserver.v1.ContextIntent.File";
(ContextIntent_File as MutableMessageType<ContextIntent_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "mode", kind: "enum", T: proto3.getEnumType(ContextIntent_File_Mode) }
]);
(function(ContextIntent_File_Mode2) {
  ContextIntent_File_Mode2[ContextIntent_File_Mode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ContextIntent_File_Mode2[ContextIntent_File_Mode2["FULL"] = 1] = "FULL";
  ContextIntent_File_Mode2[ContextIntent_File_Mode2["OUTLINE"] = 2] = "OUTLINE";
  ContextIntent_File_Mode2[ContextIntent_File_Mode2["CHUNKS"] = 3] = "CHUNKS";
})(ContextIntent_File_Mode! || (ContextIntent_File_Mode = {} as typeof ContextIntent_File_Mode));
proto3.util.setEnumType(ContextIntent_File_Mode, "aiserver.v1.ContextIntent.File.Mode", [
  { no: 0, name: "MODE_UNSPECIFIED" },
  { no: 1, name: "MODE_FULL" },
  { no: 2, name: "MODE_OUTLINE" },
  { no: 3, name: "MODE_CHUNKS" }
]);
var ContextIntent_CodeSelection$Runtime = (() => class _ContextIntent_CodeSelection extends Message<_ContextIntent_CodeSelection> {
  declare relativeWorkspacePath: string;
  declare potentiallyOutOfDateRange?: SimpleRange;
  declare text: string;
  constructor(data?: PartialMessage<_ContextIntent_CodeSelection>) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    proto3.util.initPartial(data, this as _ContextIntent_CodeSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CodeSelection {
    return new _ContextIntent_CodeSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CodeSelection {
    return new _ContextIntent_CodeSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CodeSelection {
    return new _ContextIntent_CodeSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CodeSelection | PlainMessage<_ContextIntent_CodeSelection> | undefined | null, b2: _ContextIntent_CodeSelection | PlainMessage<_ContextIntent_CodeSelection> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CodeSelection as unknown as MessageType<_ContextIntent_CodeSelection>, a, b2);
  }
})();
export type ContextIntent_CodeSelection = InstanceType<typeof ContextIntent_CodeSelection$Runtime>;
var ContextIntent_CodeSelection: MessageType<ContextIntent_CodeSelection> = ContextIntent_CodeSelection$Runtime as unknown as MessageType<ContextIntent_CodeSelection>;
(ContextIntent_CodeSelection as MutableMessageType<ContextIntent_CodeSelection>).runtime = proto3;
(ContextIntent_CodeSelection as MutableMessageType<ContextIntent_CodeSelection>).typeName = "aiserver.v1.ContextIntent.CodeSelection";
(ContextIntent_CodeSelection as MutableMessageType<ContextIntent_CodeSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "potentially_out_of_date_range", kind: "message", T: SimpleRange },
  {
    no: 3,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextIntent_Symbol$Runtime = (() => class _ContextIntent_Symbol extends Message<_ContextIntent_Symbol> {
  declare symbol?: DocumentSymbol;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ContextIntent_Symbol>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ContextIntent_Symbol);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_Symbol {
    return new _ContextIntent_Symbol().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_Symbol {
    return new _ContextIntent_Symbol().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_Symbol {
    return new _ContextIntent_Symbol().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_Symbol | PlainMessage<_ContextIntent_Symbol> | undefined | null, b2: _ContextIntent_Symbol | PlainMessage<_ContextIntent_Symbol> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_Symbol as unknown as MessageType<_ContextIntent_Symbol>, a, b2);
  }
})();
export type ContextIntent_Symbol = InstanceType<typeof ContextIntent_Symbol$Runtime>;
var ContextIntent_Symbol: MessageType<ContextIntent_Symbol> = ContextIntent_Symbol$Runtime as unknown as MessageType<ContextIntent_Symbol>;
(ContextIntent_Symbol as MutableMessageType<ContextIntent_Symbol>).runtime = proto3;
(ContextIntent_Symbol as MutableMessageType<ContextIntent_Symbol>).typeName = "aiserver.v1.ContextIntent.Symbol";
(ContextIntent_Symbol as MutableMessageType<ContextIntent_Symbol>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "symbol", kind: "message", T: DocumentSymbol },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextIntent_CommitNotes$Runtime = (() => class _ContextIntent_CommitNotes extends Message<_ContextIntent_CommitNotes> {
  constructor(data?: PartialMessage<_ContextIntent_CommitNotes>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CommitNotes);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CommitNotes {
    return new _ContextIntent_CommitNotes().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CommitNotes {
    return new _ContextIntent_CommitNotes().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CommitNotes {
    return new _ContextIntent_CommitNotes().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CommitNotes | PlainMessage<_ContextIntent_CommitNotes> | undefined | null, b2: _ContextIntent_CommitNotes | PlainMessage<_ContextIntent_CommitNotes> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CommitNotes as unknown as MessageType<_ContextIntent_CommitNotes>, a, b2);
  }
})();
export type ContextIntent_CommitNotes = InstanceType<typeof ContextIntent_CommitNotes$Runtime>;
var ContextIntent_CommitNotes: MessageType<ContextIntent_CommitNotes> = ContextIntent_CommitNotes$Runtime as unknown as MessageType<ContextIntent_CommitNotes>;
(ContextIntent_CommitNotes as MutableMessageType<ContextIntent_CommitNotes>).runtime = proto3;
(ContextIntent_CommitNotes as MutableMessageType<ContextIntent_CommitNotes>).typeName = "aiserver.v1.ContextIntent.CommitNotes";
(ContextIntent_CommitNotes as MutableMessageType<ContextIntent_CommitNotes>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_Lints$Runtime = (() => class _ContextIntent_Lints extends Message<_ContextIntent_Lints> {
  declare filterToSeverities: LintSeverity[];
  declare scope: { case: "cmdkScope"; value: ContextIntent_Lints_CmdKScope } | { case: "fileScope"; value: ContextIntent_Lints_FileScope } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ContextIntent_Lints>) {
    super();
    this.scope = { case: void 0 };
    this.filterToSeverities = [];
    proto3.util.initPartial(data, this as _ContextIntent_Lints);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_Lints {
    return new _ContextIntent_Lints().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_Lints {
    return new _ContextIntent_Lints().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_Lints {
    return new _ContextIntent_Lints().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_Lints | PlainMessage<_ContextIntent_Lints> | undefined | null, b2: _ContextIntent_Lints | PlainMessage<_ContextIntent_Lints> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_Lints as unknown as MessageType<_ContextIntent_Lints>, a, b2);
  }
})();
export type ContextIntent_Lints = InstanceType<typeof ContextIntent_Lints$Runtime>;
var ContextIntent_Lints: MessageType<ContextIntent_Lints> = ContextIntent_Lints$Runtime as unknown as MessageType<ContextIntent_Lints>;
(ContextIntent_Lints as MutableMessageType<ContextIntent_Lints>).runtime = proto3;
(ContextIntent_Lints as MutableMessageType<ContextIntent_Lints>).typeName = "aiserver.v1.ContextIntent.Lints";
(ContextIntent_Lints as MutableMessageType<ContextIntent_Lints>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cmdk_scope", kind: "message", T: ContextIntent_Lints_CmdKScope, oneof: "scope" },
  { no: 2, name: "file_scope", kind: "message", T: ContextIntent_Lints_FileScope, oneof: "scope" },
  { no: 3, name: "filter_to_severities", kind: "enum", T: proto3.getEnumType(LintSeverity), repeated: true }
]);
var ContextIntent_Lints_CmdKScope$Runtime = (() => class _ContextIntent_Lints_CmdKScope extends Message<_ContextIntent_Lints_CmdKScope> {
  constructor(data?: PartialMessage<_ContextIntent_Lints_CmdKScope>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_Lints_CmdKScope);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_Lints_CmdKScope {
    return new _ContextIntent_Lints_CmdKScope().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_Lints_CmdKScope {
    return new _ContextIntent_Lints_CmdKScope().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_Lints_CmdKScope {
    return new _ContextIntent_Lints_CmdKScope().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_Lints_CmdKScope | PlainMessage<_ContextIntent_Lints_CmdKScope> | undefined | null, b2: _ContextIntent_Lints_CmdKScope | PlainMessage<_ContextIntent_Lints_CmdKScope> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_Lints_CmdKScope as unknown as MessageType<_ContextIntent_Lints_CmdKScope>, a, b2);
  }
})();
export type ContextIntent_Lints_CmdKScope = InstanceType<typeof ContextIntent_Lints_CmdKScope$Runtime>;
var ContextIntent_Lints_CmdKScope: MessageType<ContextIntent_Lints_CmdKScope> = ContextIntent_Lints_CmdKScope$Runtime as unknown as MessageType<ContextIntent_Lints_CmdKScope>;
(ContextIntent_Lints_CmdKScope as MutableMessageType<ContextIntent_Lints_CmdKScope>).runtime = proto3;
(ContextIntent_Lints_CmdKScope as MutableMessageType<ContextIntent_Lints_CmdKScope>).typeName = "aiserver.v1.ContextIntent.Lints.CmdKScope";
(ContextIntent_Lints_CmdKScope as MutableMessageType<ContextIntent_Lints_CmdKScope>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_Lints_FileScope$Runtime = (() => class _ContextIntent_Lints_FileScope extends Message<_ContextIntent_Lints_FileScope> {
  declare relativeWorkspacePath: string;
  declare filterRange?: LineRange;
  constructor(data?: PartialMessage<_ContextIntent_Lints_FileScope>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ContextIntent_Lints_FileScope);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_Lints_FileScope {
    return new _ContextIntent_Lints_FileScope().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_Lints_FileScope {
    return new _ContextIntent_Lints_FileScope().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_Lints_FileScope {
    return new _ContextIntent_Lints_FileScope().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_Lints_FileScope | PlainMessage<_ContextIntent_Lints_FileScope> | undefined | null, b2: _ContextIntent_Lints_FileScope | PlainMessage<_ContextIntent_Lints_FileScope> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_Lints_FileScope as unknown as MessageType<_ContextIntent_Lints_FileScope>, a, b2);
  }
})();
export type ContextIntent_Lints_FileScope = InstanceType<typeof ContextIntent_Lints_FileScope$Runtime>;
var ContextIntent_Lints_FileScope: MessageType<ContextIntent_Lints_FileScope> = ContextIntent_Lints_FileScope$Runtime as unknown as MessageType<ContextIntent_Lints_FileScope>;
(ContextIntent_Lints_FileScope as MutableMessageType<ContextIntent_Lints_FileScope>).runtime = proto3;
(ContextIntent_Lints_FileScope as MutableMessageType<ContextIntent_Lints_FileScope>).typeName = "aiserver.v1.ContextIntent.Lints.FileScope";
(ContextIntent_Lints_FileScope as MutableMessageType<ContextIntent_Lints_FileScope>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "filter_range", kind: "message", T: LineRange, opt: true }
]);
var ContextIntent_RecentLocations$Runtime = (() => class _ContextIntent_RecentLocations extends Message<_ContextIntent_RecentLocations> {
  declare timestamp?: number;
  constructor(data?: PartialMessage<_ContextIntent_RecentLocations>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_RecentLocations);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_RecentLocations {
    return new _ContextIntent_RecentLocations().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_RecentLocations {
    return new _ContextIntent_RecentLocations().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_RecentLocations {
    return new _ContextIntent_RecentLocations().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_RecentLocations | PlainMessage<_ContextIntent_RecentLocations> | undefined | null, b2: _ContextIntent_RecentLocations | PlainMessage<_ContextIntent_RecentLocations> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_RecentLocations as unknown as MessageType<_ContextIntent_RecentLocations>, a, b2);
  }
})();
export type ContextIntent_RecentLocations = InstanceType<typeof ContextIntent_RecentLocations$Runtime>;
var ContextIntent_RecentLocations: MessageType<ContextIntent_RecentLocations> = ContextIntent_RecentLocations$Runtime as unknown as MessageType<ContextIntent_RecentLocations>;
(ContextIntent_RecentLocations as MutableMessageType<ContextIntent_RecentLocations>).runtime = proto3;
(ContextIntent_RecentLocations as MutableMessageType<ContextIntent_RecentLocations>).typeName = "aiserver.v1.ContextIntent.RecentLocations";
(ContextIntent_RecentLocations as MutableMessageType<ContextIntent_RecentLocations>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "timestamp", kind: "scalar", T: 1, opt: true }
]);
var ContextIntent_PastCmdkConversationsInDiffSessions$Runtime = (() => class _ContextIntent_PastCmdkConversationsInDiffSessions extends Message<_ContextIntent_PastCmdkConversationsInDiffSessions> {
  constructor(data?: PartialMessage<_ContextIntent_PastCmdkConversationsInDiffSessions>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_PastCmdkConversationsInDiffSessions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_PastCmdkConversationsInDiffSessions {
    return new _ContextIntent_PastCmdkConversationsInDiffSessions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_PastCmdkConversationsInDiffSessions {
    return new _ContextIntent_PastCmdkConversationsInDiffSessions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_PastCmdkConversationsInDiffSessions {
    return new _ContextIntent_PastCmdkConversationsInDiffSessions().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_PastCmdkConversationsInDiffSessions | PlainMessage<_ContextIntent_PastCmdkConversationsInDiffSessions> | undefined | null, b2: _ContextIntent_PastCmdkConversationsInDiffSessions | PlainMessage<_ContextIntent_PastCmdkConversationsInDiffSessions> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_PastCmdkConversationsInDiffSessions as unknown as MessageType<_ContextIntent_PastCmdkConversationsInDiffSessions>, a, b2);
  }
})();
export type ContextIntent_PastCmdkConversationsInDiffSessions = InstanceType<typeof ContextIntent_PastCmdkConversationsInDiffSessions$Runtime>;
var ContextIntent_PastCmdkConversationsInDiffSessions: MessageType<ContextIntent_PastCmdkConversationsInDiffSessions> = ContextIntent_PastCmdkConversationsInDiffSessions$Runtime as unknown as MessageType<ContextIntent_PastCmdkConversationsInDiffSessions>;
(ContextIntent_PastCmdkConversationsInDiffSessions as MutableMessageType<ContextIntent_PastCmdkConversationsInDiffSessions>).runtime = proto3;
(ContextIntent_PastCmdkConversationsInDiffSessions as MutableMessageType<ContextIntent_PastCmdkConversationsInDiffSessions>).typeName = "aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions";
(ContextIntent_PastCmdkConversationsInDiffSessions as MutableMessageType<ContextIntent_PastCmdkConversationsInDiffSessions>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_VisibleTabs$Runtime = (() => class _ContextIntent_VisibleTabs extends Message<_ContextIntent_VisibleTabs> {
  constructor(data?: PartialMessage<_ContextIntent_VisibleTabs>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_VisibleTabs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_VisibleTabs {
    return new _ContextIntent_VisibleTabs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_VisibleTabs {
    return new _ContextIntent_VisibleTabs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_VisibleTabs {
    return new _ContextIntent_VisibleTabs().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_VisibleTabs | PlainMessage<_ContextIntent_VisibleTabs> | undefined | null, b2: _ContextIntent_VisibleTabs | PlainMessage<_ContextIntent_VisibleTabs> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_VisibleTabs as unknown as MessageType<_ContextIntent_VisibleTabs>, a, b2);
  }
})();
export type ContextIntent_VisibleTabs = InstanceType<typeof ContextIntent_VisibleTabs$Runtime>;
var ContextIntent_VisibleTabs: MessageType<ContextIntent_VisibleTabs> = ContextIntent_VisibleTabs$Runtime as unknown as MessageType<ContextIntent_VisibleTabs>;
(ContextIntent_VisibleTabs as MutableMessageType<ContextIntent_VisibleTabs>).runtime = proto3;
(ContextIntent_VisibleTabs as MutableMessageType<ContextIntent_VisibleTabs>).typeName = "aiserver.v1.ContextIntent.VisibleTabs";
(ContextIntent_VisibleTabs as MutableMessageType<ContextIntent_VisibleTabs>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_CodebaseChunks$Runtime = (() => class _ContextIntent_CodebaseChunks extends Message<_ContextIntent_CodebaseChunks> {
  constructor(data?: PartialMessage<_ContextIntent_CodebaseChunks>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CodebaseChunks);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CodebaseChunks {
    return new _ContextIntent_CodebaseChunks().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CodebaseChunks {
    return new _ContextIntent_CodebaseChunks().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CodebaseChunks {
    return new _ContextIntent_CodebaseChunks().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CodebaseChunks | PlainMessage<_ContextIntent_CodebaseChunks> | undefined | null, b2: _ContextIntent_CodebaseChunks | PlainMessage<_ContextIntent_CodebaseChunks> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CodebaseChunks as unknown as MessageType<_ContextIntent_CodebaseChunks>, a, b2);
  }
})();
export type ContextIntent_CodebaseChunks = InstanceType<typeof ContextIntent_CodebaseChunks$Runtime>;
var ContextIntent_CodebaseChunks: MessageType<ContextIntent_CodebaseChunks> = ContextIntent_CodebaseChunks$Runtime as unknown as MessageType<ContextIntent_CodebaseChunks>;
(ContextIntent_CodebaseChunks as MutableMessageType<ContextIntent_CodebaseChunks>).runtime = proto3;
(ContextIntent_CodebaseChunks as MutableMessageType<ContextIntent_CodebaseChunks>).typeName = "aiserver.v1.ContextIntent.CodebaseChunks";
(ContextIntent_CodebaseChunks as MutableMessageType<ContextIntent_CodebaseChunks>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_CmdKCurrentFile$Runtime = (() => class _ContextIntent_CmdKCurrentFile extends Message<_ContextIntent_CmdKCurrentFile> {
  constructor(data?: PartialMessage<_ContextIntent_CmdKCurrentFile>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CmdKCurrentFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CmdKCurrentFile {
    return new _ContextIntent_CmdKCurrentFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKCurrentFile {
    return new _ContextIntent_CmdKCurrentFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKCurrentFile {
    return new _ContextIntent_CmdKCurrentFile().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CmdKCurrentFile | PlainMessage<_ContextIntent_CmdKCurrentFile> | undefined | null, b2: _ContextIntent_CmdKCurrentFile | PlainMessage<_ContextIntent_CmdKCurrentFile> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CmdKCurrentFile as unknown as MessageType<_ContextIntent_CmdKCurrentFile>, a, b2);
  }
})();
export type ContextIntent_CmdKCurrentFile = InstanceType<typeof ContextIntent_CmdKCurrentFile$Runtime>;
var ContextIntent_CmdKCurrentFile: MessageType<ContextIntent_CmdKCurrentFile> = ContextIntent_CmdKCurrentFile$Runtime as unknown as MessageType<ContextIntent_CmdKCurrentFile>;
(ContextIntent_CmdKCurrentFile as MutableMessageType<ContextIntent_CmdKCurrentFile>).runtime = proto3;
(ContextIntent_CmdKCurrentFile as MutableMessageType<ContextIntent_CmdKCurrentFile>).typeName = "aiserver.v1.ContextIntent.CmdKCurrentFile";
(ContextIntent_CmdKCurrentFile as MutableMessageType<ContextIntent_CmdKCurrentFile>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_CmdKQueryEtc$Runtime = (() => class _ContextIntent_CmdKQueryEtc extends Message<_ContextIntent_CmdKQueryEtc> {
  constructor(data?: PartialMessage<_ContextIntent_CmdKQueryEtc>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CmdKQueryEtc);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CmdKQueryEtc {
    return new _ContextIntent_CmdKQueryEtc().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKQueryEtc {
    return new _ContextIntent_CmdKQueryEtc().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKQueryEtc {
    return new _ContextIntent_CmdKQueryEtc().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CmdKQueryEtc | PlainMessage<_ContextIntent_CmdKQueryEtc> | undefined | null, b2: _ContextIntent_CmdKQueryEtc | PlainMessage<_ContextIntent_CmdKQueryEtc> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CmdKQueryEtc as unknown as MessageType<_ContextIntent_CmdKQueryEtc>, a, b2);
  }
})();
export type ContextIntent_CmdKQueryEtc = InstanceType<typeof ContextIntent_CmdKQueryEtc$Runtime>;
var ContextIntent_CmdKQueryEtc: MessageType<ContextIntent_CmdKQueryEtc> = ContextIntent_CmdKQueryEtc$Runtime as unknown as MessageType<ContextIntent_CmdKQueryEtc>;
(ContextIntent_CmdKQueryEtc as MutableMessageType<ContextIntent_CmdKQueryEtc>).runtime = proto3;
(ContextIntent_CmdKQueryEtc as MutableMessageType<ContextIntent_CmdKQueryEtc>).typeName = "aiserver.v1.ContextIntent.CmdKQueryEtc";
(ContextIntent_CmdKQueryEtc as MutableMessageType<ContextIntent_CmdKQueryEtc>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_CustomInstructions$Runtime = (() => class _ContextIntent_CustomInstructions extends Message<_ContextIntent_CustomInstructions> {
  constructor(data?: PartialMessage<_ContextIntent_CustomInstructions>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CustomInstructions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CustomInstructions {
    return new _ContextIntent_CustomInstructions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CustomInstructions {
    return new _ContextIntent_CustomInstructions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CustomInstructions {
    return new _ContextIntent_CustomInstructions().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CustomInstructions | PlainMessage<_ContextIntent_CustomInstructions> | undefined | null, b2: _ContextIntent_CustomInstructions | PlainMessage<_ContextIntent_CustomInstructions> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CustomInstructions as unknown as MessageType<_ContextIntent_CustomInstructions>, a, b2);
  }
})();
export type ContextIntent_CustomInstructions = InstanceType<typeof ContextIntent_CustomInstructions$Runtime>;
var ContextIntent_CustomInstructions: MessageType<ContextIntent_CustomInstructions> = ContextIntent_CustomInstructions$Runtime as unknown as MessageType<ContextIntent_CustomInstructions>;
(ContextIntent_CustomInstructions as MutableMessageType<ContextIntent_CustomInstructions>).runtime = proto3;
(ContextIntent_CustomInstructions as MutableMessageType<ContextIntent_CustomInstructions>).typeName = "aiserver.v1.ContextIntent.CustomInstructions";
(ContextIntent_CustomInstructions as MutableMessageType<ContextIntent_CustomInstructions>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_CmdKDefinitions$Runtime = (() => class _ContextIntent_CmdKDefinitions extends Message<_ContextIntent_CmdKDefinitions> {
  constructor(data?: PartialMessage<_ContextIntent_CmdKDefinitions>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_CmdKDefinitions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_CmdKDefinitions {
    return new _ContextIntent_CmdKDefinitions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKDefinitions {
    return new _ContextIntent_CmdKDefinitions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_CmdKDefinitions {
    return new _ContextIntent_CmdKDefinitions().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_CmdKDefinitions | PlainMessage<_ContextIntent_CmdKDefinitions> | undefined | null, b2: _ContextIntent_CmdKDefinitions | PlainMessage<_ContextIntent_CmdKDefinitions> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_CmdKDefinitions as unknown as MessageType<_ContextIntent_CmdKDefinitions>, a, b2);
  }
})();
export type ContextIntent_CmdKDefinitions = InstanceType<typeof ContextIntent_CmdKDefinitions$Runtime>;
var ContextIntent_CmdKDefinitions: MessageType<ContextIntent_CmdKDefinitions> = ContextIntent_CmdKDefinitions$Runtime as unknown as MessageType<ContextIntent_CmdKDefinitions>;
(ContextIntent_CmdKDefinitions as MutableMessageType<ContextIntent_CmdKDefinitions>).runtime = proto3;
(ContextIntent_CmdKDefinitions as MutableMessageType<ContextIntent_CmdKDefinitions>).typeName = "aiserver.v1.ContextIntent.CmdKDefinitions";
(ContextIntent_CmdKDefinitions as MutableMessageType<ContextIntent_CmdKDefinitions>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_ChatHistory$Runtime = (() => class _ContextIntent_ChatHistory extends Message<_ContextIntent_ChatHistory> {
  constructor(data?: PartialMessage<_ContextIntent_ChatHistory>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_ChatHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_ChatHistory {
    return new _ContextIntent_ChatHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_ChatHistory {
    return new _ContextIntent_ChatHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_ChatHistory {
    return new _ContextIntent_ChatHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_ChatHistory | PlainMessage<_ContextIntent_ChatHistory> | undefined | null, b2: _ContextIntent_ChatHistory | PlainMessage<_ContextIntent_ChatHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_ChatHistory as unknown as MessageType<_ContextIntent_ChatHistory>, a, b2);
  }
})();
export type ContextIntent_ChatHistory = InstanceType<typeof ContextIntent_ChatHistory$Runtime>;
var ContextIntent_ChatHistory: MessageType<ContextIntent_ChatHistory> = ContextIntent_ChatHistory$Runtime as unknown as MessageType<ContextIntent_ChatHistory>;
(ContextIntent_ChatHistory as MutableMessageType<ContextIntent_ChatHistory>).runtime = proto3;
(ContextIntent_ChatHistory as MutableMessageType<ContextIntent_ChatHistory>).typeName = "aiserver.v1.ContextIntent.ChatHistory";
(ContextIntent_ChatHistory as MutableMessageType<ContextIntent_ChatHistory>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_DiffHistory$Runtime = (() => class _ContextIntent_DiffHistory extends Message<_ContextIntent_DiffHistory> {
  constructor(data?: PartialMessage<_ContextIntent_DiffHistory>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_DiffHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_DiffHistory {
    return new _ContextIntent_DiffHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_DiffHistory {
    return new _ContextIntent_DiffHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_DiffHistory {
    return new _ContextIntent_DiffHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_DiffHistory | PlainMessage<_ContextIntent_DiffHistory> | undefined | null, b2: _ContextIntent_DiffHistory | PlainMessage<_ContextIntent_DiffHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_DiffHistory as unknown as MessageType<_ContextIntent_DiffHistory>, a, b2);
  }
})();
export type ContextIntent_DiffHistory = InstanceType<typeof ContextIntent_DiffHistory$Runtime>;
var ContextIntent_DiffHistory: MessageType<ContextIntent_DiffHistory> = ContextIntent_DiffHistory$Runtime as unknown as MessageType<ContextIntent_DiffHistory>;
(ContextIntent_DiffHistory as MutableMessageType<ContextIntent_DiffHistory>).runtime = proto3;
(ContextIntent_DiffHistory as MutableMessageType<ContextIntent_DiffHistory>).typeName = "aiserver.v1.ContextIntent.DiffHistory";
(ContextIntent_DiffHistory as MutableMessageType<ContextIntent_DiffHistory>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_TerminalCmdKDefaults$Runtime = (() => class _ContextIntent_TerminalCmdKDefaults extends Message<_ContextIntent_TerminalCmdKDefaults> {
  constructor(data?: PartialMessage<_ContextIntent_TerminalCmdKDefaults>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_TerminalCmdKDefaults);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_TerminalCmdKDefaults {
    return new _ContextIntent_TerminalCmdKDefaults().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_TerminalCmdKDefaults {
    return new _ContextIntent_TerminalCmdKDefaults().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_TerminalCmdKDefaults {
    return new _ContextIntent_TerminalCmdKDefaults().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_TerminalCmdKDefaults | PlainMessage<_ContextIntent_TerminalCmdKDefaults> | undefined | null, b2: _ContextIntent_TerminalCmdKDefaults | PlainMessage<_ContextIntent_TerminalCmdKDefaults> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_TerminalCmdKDefaults as unknown as MessageType<_ContextIntent_TerminalCmdKDefaults>, a, b2);
  }
})();
export type ContextIntent_TerminalCmdKDefaults = InstanceType<typeof ContextIntent_TerminalCmdKDefaults$Runtime>;
var ContextIntent_TerminalCmdKDefaults: MessageType<ContextIntent_TerminalCmdKDefaults> = ContextIntent_TerminalCmdKDefaults$Runtime as unknown as MessageType<ContextIntent_TerminalCmdKDefaults>;
(ContextIntent_TerminalCmdKDefaults as MutableMessageType<ContextIntent_TerminalCmdKDefaults>).runtime = proto3;
(ContextIntent_TerminalCmdKDefaults as MutableMessageType<ContextIntent_TerminalCmdKDefaults>).typeName = "aiserver.v1.ContextIntent.TerminalCmdKDefaults";
(ContextIntent_TerminalCmdKDefaults as MutableMessageType<ContextIntent_TerminalCmdKDefaults>).fields = proto3.util.newFieldList(() => []);
var ContextIntent_TerminalHistory$Runtime = (() => class _ContextIntent_TerminalHistory extends Message<_ContextIntent_TerminalHistory> {
  declare instanceId: number;
  declare activeForCmdK: boolean;
  declare useActiveInstanceAsFallback?: boolean;
  constructor(data?: PartialMessage<_ContextIntent_TerminalHistory>) {
    super();
    this.instanceId = 0;
    this.activeForCmdK = false;
    proto3.util.initPartial(data, this as _ContextIntent_TerminalHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_TerminalHistory {
    return new _ContextIntent_TerminalHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_TerminalHistory {
    return new _ContextIntent_TerminalHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_TerminalHistory {
    return new _ContextIntent_TerminalHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_TerminalHistory | PlainMessage<_ContextIntent_TerminalHistory> | undefined | null, b2: _ContextIntent_TerminalHistory | PlainMessage<_ContextIntent_TerminalHistory> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_TerminalHistory as unknown as MessageType<_ContextIntent_TerminalHistory>, a, b2);
  }
})();
export type ContextIntent_TerminalHistory = InstanceType<typeof ContextIntent_TerminalHistory$Runtime>;
var ContextIntent_TerminalHistory: MessageType<ContextIntent_TerminalHistory> = ContextIntent_TerminalHistory$Runtime as unknown as MessageType<ContextIntent_TerminalHistory>;
(ContextIntent_TerminalHistory as MutableMessageType<ContextIntent_TerminalHistory>).runtime = proto3;
(ContextIntent_TerminalHistory as MutableMessageType<ContextIntent_TerminalHistory>).typeName = "aiserver.v1.ContextIntent.TerminalHistory";
(ContextIntent_TerminalHistory as MutableMessageType<ContextIntent_TerminalHistory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "instance_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "active_for_cmd_k",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "use_active_instance_as_fallback", kind: "scalar", T: 8, opt: true }
]);
var ContextIntent_LspSubgraph$Runtime = (() => class _ContextIntent_LspSubgraph extends Message<_ContextIntent_LspSubgraph> {
  constructor(data?: PartialMessage<_ContextIntent_LspSubgraph>) {
    super();
    proto3.util.initPartial(data, this as _ContextIntent_LspSubgraph);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextIntent_LspSubgraph {
    return new _ContextIntent_LspSubgraph().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextIntent_LspSubgraph {
    return new _ContextIntent_LspSubgraph().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextIntent_LspSubgraph {
    return new _ContextIntent_LspSubgraph().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextIntent_LspSubgraph | PlainMessage<_ContextIntent_LspSubgraph> | undefined | null, b2: _ContextIntent_LspSubgraph | PlainMessage<_ContextIntent_LspSubgraph> | undefined | null): boolean {
    return proto3.util.equals(_ContextIntent_LspSubgraph as unknown as MessageType<_ContextIntent_LspSubgraph>, a, b2);
  }
})();
export type ContextIntent_LspSubgraph = InstanceType<typeof ContextIntent_LspSubgraph$Runtime>;
var ContextIntent_LspSubgraph: MessageType<ContextIntent_LspSubgraph> = ContextIntent_LspSubgraph$Runtime as unknown as MessageType<ContextIntent_LspSubgraph>;
(ContextIntent_LspSubgraph as MutableMessageType<ContextIntent_LspSubgraph>).runtime = proto3;
(ContextIntent_LspSubgraph as MutableMessageType<ContextIntent_LspSubgraph>).typeName = "aiserver.v1.ContextIntent.LspSubgraph";
(ContextIntent_LspSubgraph as MutableMessageType<ContextIntent_LspSubgraph>).fields = proto3.util.newFieldList(() => []);


export { PotentiallyCachedContextItem, ContextStatusUpdate, MissingContextItems, ContextItemStatus, ContextItemStatus_PostGenerationEvaluation, ContextItem, ContextItem_FileChunk, ContextItem_SparseFileChunk, ContextItem_SparseFileChunk_Line, ContextItem_OutlineChunk, ContextItem_CmdKSelection, ContextItem_FileDiffHistory, ContextItem_CmdKImmediateContext, ContextItem_CmdKImmediateContext_Line, ContextItem_CmdKQuery, ContextItem_TerminalCmdKQuery, ContextItem_TerminalCmdKQueryHistory, ContextItem_CmdKQueryHistory, ContextItem_CmdKQueryHistoryInDiffSession, ContextItem_CmdKQueryHistoryInDiffSession_PastCmdKQueryInDiffSession, ContextItem_ChatHistory, ContextItem_TerminalHistory, ContextItem_CustomInstructions, ContextItem_GoToDefinitionResult, ContextItem_DocumentationChunk, ContextItem_Lints, ContextItem_Lints_Line, ContextItem_NotebookCellOutput, ContextItem_LspSubgraphChunk, ContextItem_CommitNoteChunk, ContextIntent, ContextIntent_Type, ContextIntent_Documentation, ContextIntent_File, ContextIntent_File_Mode, ContextIntent_CodeSelection, ContextIntent_Symbol, ContextIntent_CommitNotes, ContextIntent_Lints, ContextIntent_Lints_CmdKScope, ContextIntent_Lints_FileScope, ContextIntent_RecentLocations, ContextIntent_PastCmdkConversationsInDiffSessions, ContextIntent_VisibleTabs, ContextIntent_CodebaseChunks, ContextIntent_CmdKCurrentFile, ContextIntent_CmdKQueryEtc, ContextIntent_CustomInstructions, ContextIntent_CmdKDefinitions, ContextIntent_ChatHistory, ContextIntent_DiffHistory, ContextIntent_TerminalCmdKDefaults, ContextIntent_TerminalHistory, ContextIntent_LspSubgraph };
