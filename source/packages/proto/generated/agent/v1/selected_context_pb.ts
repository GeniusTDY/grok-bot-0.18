/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:42739-44798
 * Region SHA-256: 5be91190948afeac78ee2c722f5adb7f3b83ef999fb76fd4f990c1e8428f2375
 * Atomic B1 exports: 53 messages + 1 enums = 54
 */
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Range } from "./utils_pb.js";
import { LsDirectoryTreeNode } from "./ls_exec_pb.js";
import { CursorRule } from "./cursor_rules_pb.js";
import { AgentSkill } from "./agent_skills_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type SelectedPluginCapabilityType = 0 | 1 | 2 | 3;
var SelectedPluginCapabilityType: {
  "UNSPECIFIED": 0;
  "COMMAND": 1;
  "SKILL": 2;
  "SUBAGENT": 3;
  0: "UNSPECIFIED";
  1: "COMMAND";
  2: "SKILL";
  3: "SUBAGENT";
};
(function(SelectedPluginCapabilityType2) {
  SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["COMMAND"] = 1] = "COMMAND";
  SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["SKILL"] = 2] = "SKILL";
  SelectedPluginCapabilityType2[SelectedPluginCapabilityType2["SUBAGENT"] = 3] = "SUBAGENT";
})(SelectedPluginCapabilityType! || (SelectedPluginCapabilityType = {} as typeof SelectedPluginCapabilityType));
proto3.util.setEnumType(SelectedPluginCapabilityType, "agent.v1.SelectedPluginCapabilityType", [
  { no: 0, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_UNSPECIFIED" },
  { no: 1, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_COMMAND" },
  { no: 2, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SKILL" },
  { no: 3, name: "SELECTED_PLUGIN_CAPABILITY_TYPE_SUBAGENT" }
]);
var SelectedImage$Runtime = (() => class _SelectedImage extends Message<_SelectedImage> {
  declare uuid: string;
  declare path: string;
  declare dimension?: SelectedImage_Dimension;
  declare mimeType: string;
  declare dataOrBlobId: { case: "blobId"; value: Uint8Array } | { case: "data"; value: Uint8Array } | { case: "blobIdWithData"; value: SelectedImage_BlobIdWithData } | { case: "promptUploadRef"; value: PromptUploadRef } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SelectedImage>) {
    super();
    this.dataOrBlobId = { case: void 0 };
    this.uuid = "";
    this.path = "";
    this.mimeType = "";
    proto3.util.initPartial(data, this as _SelectedImage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedImage {
    return new _SelectedImage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedImage {
    return new _SelectedImage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedImage {
    return new _SelectedImage().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedImage | PlainMessage<_SelectedImage> | undefined | null, b2: _SelectedImage | PlainMessage<_SelectedImage> | undefined | null): boolean {
    return proto3.util.equals(_SelectedImage as unknown as MessageType<_SelectedImage>, a, b2);
  }
})();
export type SelectedImage = InstanceType<typeof SelectedImage$Runtime>;
var SelectedImage: MessageType<SelectedImage> = SelectedImage$Runtime as unknown as MessageType<SelectedImage>;
(SelectedImage as MutableMessageType<SelectedImage>).runtime = proto3;
(SelectedImage as MutableMessageType<SelectedImage>).typeName = "agent.v1.SelectedImage";
(SelectedImage as MutableMessageType<SelectedImage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedImage_BlobIdWithData, oneof: "data_or_blob_id" },
  { no: 10, name: "prompt_upload_ref", kind: "message", T: PromptUploadRef, oneof: "data_or_blob_id" },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "dimension", kind: "message", T: SelectedImage_Dimension },
  {
    no: 7,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedImage_BlobIdWithData$Runtime = (() => class _SelectedImage_BlobIdWithData extends Message<_SelectedImage_BlobIdWithData> {
  declare blobId: Uint8Array;
  declare data: Uint8Array;
  constructor(data?: PartialMessage<_SelectedImage_BlobIdWithData>) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    proto3.util.initPartial(data, this as _SelectedImage_BlobIdWithData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedImage_BlobIdWithData {
    return new _SelectedImage_BlobIdWithData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedImage_BlobIdWithData {
    return new _SelectedImage_BlobIdWithData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedImage_BlobIdWithData {
    return new _SelectedImage_BlobIdWithData().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedImage_BlobIdWithData | PlainMessage<_SelectedImage_BlobIdWithData> | undefined | null, b2: _SelectedImage_BlobIdWithData | PlainMessage<_SelectedImage_BlobIdWithData> | undefined | null): boolean {
    return proto3.util.equals(_SelectedImage_BlobIdWithData as unknown as MessageType<_SelectedImage_BlobIdWithData>, a, b2);
  }
})();
export type SelectedImage_BlobIdWithData = InstanceType<typeof SelectedImage_BlobIdWithData$Runtime>;
var SelectedImage_BlobIdWithData: MessageType<SelectedImage_BlobIdWithData> = SelectedImage_BlobIdWithData$Runtime as unknown as MessageType<SelectedImage_BlobIdWithData>;
(SelectedImage_BlobIdWithData as MutableMessageType<SelectedImage_BlobIdWithData>).runtime = proto3;
(SelectedImage_BlobIdWithData as MutableMessageType<SelectedImage_BlobIdWithData>).typeName = "agent.v1.SelectedImage.BlobIdWithData";
(SelectedImage_BlobIdWithData as MutableMessageType<SelectedImage_BlobIdWithData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var SelectedImage_Dimension$Runtime = (() => class _SelectedImage_Dimension extends Message<_SelectedImage_Dimension> {
  declare width: number;
  declare height: number;
  constructor(data?: PartialMessage<_SelectedImage_Dimension>) {
    super();
    this.width = 0;
    this.height = 0;
    proto3.util.initPartial(data, this as _SelectedImage_Dimension);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedImage_Dimension {
    return new _SelectedImage_Dimension().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedImage_Dimension {
    return new _SelectedImage_Dimension().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedImage_Dimension {
    return new _SelectedImage_Dimension().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedImage_Dimension | PlainMessage<_SelectedImage_Dimension> | undefined | null, b2: _SelectedImage_Dimension | PlainMessage<_SelectedImage_Dimension> | undefined | null): boolean {
    return proto3.util.equals(_SelectedImage_Dimension as unknown as MessageType<_SelectedImage_Dimension>, a, b2);
  }
})();
export type SelectedImage_Dimension = InstanceType<typeof SelectedImage_Dimension$Runtime>;
var SelectedImage_Dimension: MessageType<SelectedImage_Dimension> = SelectedImage_Dimension$Runtime as unknown as MessageType<SelectedImage_Dimension>;
(SelectedImage_Dimension as MutableMessageType<SelectedImage_Dimension>).runtime = proto3;
(SelectedImage_Dimension as MutableMessageType<SelectedImage_Dimension>).typeName = "agent.v1.SelectedImage.Dimension";
(SelectedImage_Dimension as MutableMessageType<SelectedImage_Dimension>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "width",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "height",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var PromptUploadRef$Runtime = (() => class _PromptUploadRef extends Message<_PromptUploadRef> {
  declare uploadId: string;
  constructor(data?: PartialMessage<_PromptUploadRef>) {
    super();
    this.uploadId = "";
    proto3.util.initPartial(data, this as _PromptUploadRef);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptUploadRef {
    return new _PromptUploadRef().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptUploadRef {
    return new _PromptUploadRef().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptUploadRef {
    return new _PromptUploadRef().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptUploadRef | PlainMessage<_PromptUploadRef> | undefined | null, b2: _PromptUploadRef | PlainMessage<_PromptUploadRef> | undefined | null): boolean {
    return proto3.util.equals(_PromptUploadRef as unknown as MessageType<_PromptUploadRef>, a, b2);
  }
})();
export type PromptUploadRef = InstanceType<typeof PromptUploadRef$Runtime>;
var PromptUploadRef: MessageType<PromptUploadRef> = PromptUploadRef$Runtime as unknown as MessageType<PromptUploadRef>;
(PromptUploadRef as MutableMessageType<PromptUploadRef>).runtime = proto3;
(PromptUploadRef as MutableMessageType<PromptUploadRef>).typeName = "agent.v1.PromptUploadRef";
(PromptUploadRef as MutableMessageType<PromptUploadRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "upload_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedDocument$Runtime = (() => class _SelectedDocument extends Message<_SelectedDocument> {
  declare uuid: string;
  declare filename: string;
  declare mimeType: string;
  declare path: string;
  declare dataOrBlobId: { case: "blobId"; value: Uint8Array } | { case: "data"; value: Uint8Array } | { case: "blobIdWithData"; value: SelectedDocument_BlobIdWithData } | { case: "promptUploadRef"; value: PromptUploadRef } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SelectedDocument>) {
    super();
    this.dataOrBlobId = { case: void 0 };
    this.uuid = "";
    this.filename = "";
    this.mimeType = "";
    this.path = "";
    proto3.util.initPartial(data, this as _SelectedDocument);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedDocument {
    return new _SelectedDocument().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedDocument {
    return new _SelectedDocument().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedDocument {
    return new _SelectedDocument().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedDocument | PlainMessage<_SelectedDocument> | undefined | null, b2: _SelectedDocument | PlainMessage<_SelectedDocument> | undefined | null): boolean {
    return proto3.util.equals(_SelectedDocument as unknown as MessageType<_SelectedDocument>, a, b2);
  }
})();
export type SelectedDocument = InstanceType<typeof SelectedDocument$Runtime>;
var SelectedDocument: MessageType<SelectedDocument> = SelectedDocument$Runtime as unknown as MessageType<SelectedDocument>;
(SelectedDocument as MutableMessageType<SelectedDocument>).runtime = proto3;
(SelectedDocument as MutableMessageType<SelectedDocument>).typeName = "agent.v1.SelectedDocument";
(SelectedDocument as MutableMessageType<SelectedDocument>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedDocument_BlobIdWithData, oneof: "data_or_blob_id" },
  { no: 10, name: "prompt_upload_ref", kind: "message", T: PromptUploadRef, oneof: "data_or_blob_id" },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "filename",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedDocument_BlobIdWithData$Runtime = (() => class _SelectedDocument_BlobIdWithData extends Message<_SelectedDocument_BlobIdWithData> {
  declare blobId: Uint8Array;
  declare data: Uint8Array;
  constructor(data?: PartialMessage<_SelectedDocument_BlobIdWithData>) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    proto3.util.initPartial(data, this as _SelectedDocument_BlobIdWithData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedDocument_BlobIdWithData {
    return new _SelectedDocument_BlobIdWithData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedDocument_BlobIdWithData {
    return new _SelectedDocument_BlobIdWithData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedDocument_BlobIdWithData {
    return new _SelectedDocument_BlobIdWithData().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedDocument_BlobIdWithData | PlainMessage<_SelectedDocument_BlobIdWithData> | undefined | null, b2: _SelectedDocument_BlobIdWithData | PlainMessage<_SelectedDocument_BlobIdWithData> | undefined | null): boolean {
    return proto3.util.equals(_SelectedDocument_BlobIdWithData as unknown as MessageType<_SelectedDocument_BlobIdWithData>, a, b2);
  }
})();
export type SelectedDocument_BlobIdWithData = InstanceType<typeof SelectedDocument_BlobIdWithData$Runtime>;
var SelectedDocument_BlobIdWithData: MessageType<SelectedDocument_BlobIdWithData> = SelectedDocument_BlobIdWithData$Runtime as unknown as MessageType<SelectedDocument_BlobIdWithData>;
(SelectedDocument_BlobIdWithData as MutableMessageType<SelectedDocument_BlobIdWithData>).runtime = proto3;
(SelectedDocument_BlobIdWithData as MutableMessageType<SelectedDocument_BlobIdWithData>).typeName = "agent.v1.SelectedDocument.BlobIdWithData";
(SelectedDocument_BlobIdWithData as MutableMessageType<SelectedDocument_BlobIdWithData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var SelectedVideo$Runtime = (() => class _SelectedVideo extends Message<_SelectedVideo> {
  declare uuid: string;
  declare path: string;
  declare fps?: number;
  declare mimeType: string;
  declare filename: string;
  declare materializeToFilesystem: boolean;
  declare dataOrBlobId: { case: "blobId"; value: Uint8Array } | { case: "data"; value: Uint8Array } | { case: "blobIdWithData"; value: SelectedVideo_BlobIdWithData } | { case: "signedUrl"; value: SelectedVideo_SignedUrl } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SelectedVideo>) {
    super();
    this.dataOrBlobId = { case: void 0 };
    this.uuid = "";
    this.path = "";
    this.mimeType = "";
    this.filename = "";
    this.materializeToFilesystem = false;
    proto3.util.initPartial(data, this as _SelectedVideo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedVideo {
    return new _SelectedVideo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedVideo {
    return new _SelectedVideo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedVideo {
    return new _SelectedVideo().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedVideo | PlainMessage<_SelectedVideo> | undefined | null, b2: _SelectedVideo | PlainMessage<_SelectedVideo> | undefined | null): boolean {
    return proto3.util.equals(_SelectedVideo as unknown as MessageType<_SelectedVideo>, a, b2);
  }
})();
export type SelectedVideo = InstanceType<typeof SelectedVideo$Runtime>;
var SelectedVideo: MessageType<SelectedVideo> = SelectedVideo$Runtime as unknown as MessageType<SelectedVideo>;
(SelectedVideo as MutableMessageType<SelectedVideo>).runtime = proto3;
(SelectedVideo as MutableMessageType<SelectedVideo>).typeName = "agent.v1.SelectedVideo";
(SelectedVideo as MutableMessageType<SelectedVideo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 8, name: "data", kind: "scalar", T: 12, oneof: "data_or_blob_id" },
  { no: 9, name: "blob_id_with_data", kind: "message", T: SelectedVideo_BlobIdWithData, oneof: "data_or_blob_id" },
  { no: 11, name: "signed_url", kind: "message", T: SelectedVideo_SignedUrl, oneof: "data_or_blob_id" },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "fps", kind: "scalar", T: 2, opt: true },
  {
    no: 7,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "filename",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "materialize_to_filesystem",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SelectedVideo_BlobIdWithData$Runtime = (() => class _SelectedVideo_BlobIdWithData extends Message<_SelectedVideo_BlobIdWithData> {
  declare blobId: Uint8Array;
  declare data: Uint8Array;
  constructor(data?: PartialMessage<_SelectedVideo_BlobIdWithData>) {
    super();
    this.blobId = new Uint8Array(0);
    this.data = new Uint8Array(0);
    proto3.util.initPartial(data, this as _SelectedVideo_BlobIdWithData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedVideo_BlobIdWithData {
    return new _SelectedVideo_BlobIdWithData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedVideo_BlobIdWithData {
    return new _SelectedVideo_BlobIdWithData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedVideo_BlobIdWithData {
    return new _SelectedVideo_BlobIdWithData().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedVideo_BlobIdWithData | PlainMessage<_SelectedVideo_BlobIdWithData> | undefined | null, b2: _SelectedVideo_BlobIdWithData | PlainMessage<_SelectedVideo_BlobIdWithData> | undefined | null): boolean {
    return proto3.util.equals(_SelectedVideo_BlobIdWithData as unknown as MessageType<_SelectedVideo_BlobIdWithData>, a, b2);
  }
})();
export type SelectedVideo_BlobIdWithData = InstanceType<typeof SelectedVideo_BlobIdWithData$Runtime>;
var SelectedVideo_BlobIdWithData: MessageType<SelectedVideo_BlobIdWithData> = SelectedVideo_BlobIdWithData$Runtime as unknown as MessageType<SelectedVideo_BlobIdWithData>;
(SelectedVideo_BlobIdWithData as MutableMessageType<SelectedVideo_BlobIdWithData>).runtime = proto3;
(SelectedVideo_BlobIdWithData as MutableMessageType<SelectedVideo_BlobIdWithData>).typeName = "agent.v1.SelectedVideo.BlobIdWithData";
(SelectedVideo_BlobIdWithData as MutableMessageType<SelectedVideo_BlobIdWithData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "data",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var SelectedVideo_SignedUrl$Runtime = (() => class _SelectedVideo_SignedUrl extends Message<_SelectedVideo_SignedUrl> {
  declare url: string;
  declare key: string;
  declare expiresAtUnixMs: bigint;
  declare refreshAfterUnixMs: bigint;
  declare conversationId: string;
  constructor(data?: PartialMessage<_SelectedVideo_SignedUrl>) {
    super();
    this.url = "";
    this.key = "";
    this.expiresAtUnixMs = protoInt64.zero;
    this.refreshAfterUnixMs = protoInt64.zero;
    this.conversationId = "";
    proto3.util.initPartial(data, this as _SelectedVideo_SignedUrl);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedVideo_SignedUrl {
    return new _SelectedVideo_SignedUrl().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedVideo_SignedUrl {
    return new _SelectedVideo_SignedUrl().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedVideo_SignedUrl {
    return new _SelectedVideo_SignedUrl().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedVideo_SignedUrl | PlainMessage<_SelectedVideo_SignedUrl> | undefined | null, b2: _SelectedVideo_SignedUrl | PlainMessage<_SelectedVideo_SignedUrl> | undefined | null): boolean {
    return proto3.util.equals(_SelectedVideo_SignedUrl as unknown as MessageType<_SelectedVideo_SignedUrl>, a, b2);
  }
})();
export type SelectedVideo_SignedUrl = InstanceType<typeof SelectedVideo_SignedUrl$Runtime>;
var SelectedVideo_SignedUrl: MessageType<SelectedVideo_SignedUrl> = SelectedVideo_SignedUrl$Runtime as unknown as MessageType<SelectedVideo_SignedUrl>;
(SelectedVideo_SignedUrl as MutableMessageType<SelectedVideo_SignedUrl>).runtime = proto3;
(SelectedVideo_SignedUrl as MutableMessageType<SelectedVideo_SignedUrl>).typeName = "agent.v1.SelectedVideo.SignedUrl";
(SelectedVideo_SignedUrl as MutableMessageType<SelectedVideo_SignedUrl>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "expires_at_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "refresh_after_unix_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ExtraContextEntry$Runtime = (() => class _ExtraContextEntry extends Message<_ExtraContextEntry> {
  declare dataOrBlobId: { case: "data"; value: string } | { case: "blobId"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExtraContextEntry>) {
    super();
    this.dataOrBlobId = { case: void 0 };
    proto3.util.initPartial(data, this as _ExtraContextEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExtraContextEntry {
    return new _ExtraContextEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExtraContextEntry {
    return new _ExtraContextEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExtraContextEntry {
    return new _ExtraContextEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _ExtraContextEntry | PlainMessage<_ExtraContextEntry> | undefined | null, b2: _ExtraContextEntry | PlainMessage<_ExtraContextEntry> | undefined | null): boolean {
    return proto3.util.equals(_ExtraContextEntry as unknown as MessageType<_ExtraContextEntry>, a, b2);
  }
})();
export type ExtraContextEntry = InstanceType<typeof ExtraContextEntry$Runtime>;
var ExtraContextEntry: MessageType<ExtraContextEntry> = ExtraContextEntry$Runtime as unknown as MessageType<ExtraContextEntry>;
(ExtraContextEntry as MutableMessageType<ExtraContextEntry>).runtime = proto3;
(ExtraContextEntry as MutableMessageType<ExtraContextEntry>).typeName = "agent.v1.ExtraContextEntry";
(ExtraContextEntry as MutableMessageType<ExtraContextEntry>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "data", kind: "scalar", T: 9, oneof: "data_or_blob_id" },
  { no: 2, name: "blob_id", kind: "scalar", T: 12, oneof: "data_or_blob_id" }
]);
var SelectedFile$Runtime = (() => class _SelectedFile extends Message<_SelectedFile> {
  declare content: string;
  declare path: string;
  declare relativePath?: string;
  constructor(data?: PartialMessage<_SelectedFile>) {
    super();
    this.content = "";
    this.path = "";
    proto3.util.initPartial(data, this as _SelectedFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedFile {
    return new _SelectedFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedFile {
    return new _SelectedFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedFile {
    return new _SelectedFile().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedFile | PlainMessage<_SelectedFile> | undefined | null, b2: _SelectedFile | PlainMessage<_SelectedFile> | undefined | null): boolean {
    return proto3.util.equals(_SelectedFile as unknown as MessageType<_SelectedFile>, a, b2);
  }
})();
export type SelectedFile = InstanceType<typeof SelectedFile$Runtime>;
var SelectedFile: MessageType<SelectedFile> = SelectedFile$Runtime as unknown as MessageType<SelectedFile>;
(SelectedFile as MutableMessageType<SelectedFile>).runtime = proto3;
(SelectedFile as MutableMessageType<SelectedFile>).typeName = "agent.v1.SelectedFile";
(SelectedFile as MutableMessageType<SelectedFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
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
  { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true }
]);
var SelectedCodeSelection$Runtime = (() => class _SelectedCodeSelection extends Message<_SelectedCodeSelection> {
  declare content: string;
  declare path: string;
  declare relativePath?: string;
  declare range?: Range;
  constructor(data?: PartialMessage<_SelectedCodeSelection>) {
    super();
    this.content = "";
    this.path = "";
    proto3.util.initPartial(data, this as _SelectedCodeSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedCodeSelection {
    return new _SelectedCodeSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedCodeSelection {
    return new _SelectedCodeSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedCodeSelection {
    return new _SelectedCodeSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedCodeSelection | PlainMessage<_SelectedCodeSelection> | undefined | null, b2: _SelectedCodeSelection | PlainMessage<_SelectedCodeSelection> | undefined | null): boolean {
    return proto3.util.equals(_SelectedCodeSelection as unknown as MessageType<_SelectedCodeSelection>, a, b2);
  }
})();
export type SelectedCodeSelection = InstanceType<typeof SelectedCodeSelection$Runtime>;
var SelectedCodeSelection: MessageType<SelectedCodeSelection> = SelectedCodeSelection$Runtime as unknown as MessageType<SelectedCodeSelection>;
(SelectedCodeSelection as MutableMessageType<SelectedCodeSelection>).runtime = proto3;
(SelectedCodeSelection as MutableMessageType<SelectedCodeSelection>).typeName = "agent.v1.SelectedCodeSelection";
(SelectedCodeSelection as MutableMessageType<SelectedCodeSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
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
  { no: 3, name: "relative_path", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "range", kind: "message", T: Range }
]);
var SelectedTerminal$Runtime = (() => class _SelectedTerminal extends Message<_SelectedTerminal> {
  declare content: string;
  declare title?: string;
  declare path?: string;
  constructor(data?: PartialMessage<_SelectedTerminal>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _SelectedTerminal);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedTerminal {
    return new _SelectedTerminal().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedTerminal {
    return new _SelectedTerminal().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedTerminal {
    return new _SelectedTerminal().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedTerminal | PlainMessage<_SelectedTerminal> | undefined | null, b2: _SelectedTerminal | PlainMessage<_SelectedTerminal> | undefined | null): boolean {
    return proto3.util.equals(_SelectedTerminal as unknown as MessageType<_SelectedTerminal>, a, b2);
  }
})();
export type SelectedTerminal = InstanceType<typeof SelectedTerminal$Runtime>;
var SelectedTerminal: MessageType<SelectedTerminal> = SelectedTerminal$Runtime as unknown as MessageType<SelectedTerminal>;
(SelectedTerminal as MutableMessageType<SelectedTerminal>).runtime = proto3;
(SelectedTerminal as MutableMessageType<SelectedTerminal>).typeName = "agent.v1.SelectedTerminal";
(SelectedTerminal as MutableMessageType<SelectedTerminal>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "path", kind: "scalar", T: 9, opt: true }
]);
var SelectedTerminalSelection$Runtime = (() => class _SelectedTerminalSelection extends Message<_SelectedTerminalSelection> {
  declare content: string;
  declare title?: string;
  declare path?: string;
  declare range?: Range;
  constructor(data?: PartialMessage<_SelectedTerminalSelection>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _SelectedTerminalSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedTerminalSelection {
    return new _SelectedTerminalSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedTerminalSelection {
    return new _SelectedTerminalSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedTerminalSelection {
    return new _SelectedTerminalSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedTerminalSelection | PlainMessage<_SelectedTerminalSelection> | undefined | null, b2: _SelectedTerminalSelection | PlainMessage<_SelectedTerminalSelection> | undefined | null): boolean {
    return proto3.util.equals(_SelectedTerminalSelection as unknown as MessageType<_SelectedTerminalSelection>, a, b2);
  }
})();
export type SelectedTerminalSelection = InstanceType<typeof SelectedTerminalSelection$Runtime>;
var SelectedTerminalSelection: MessageType<SelectedTerminalSelection> = SelectedTerminalSelection$Runtime as unknown as MessageType<SelectedTerminalSelection>;
(SelectedTerminalSelection as MutableMessageType<SelectedTerminalSelection>).runtime = proto3;
(SelectedTerminalSelection as MutableMessageType<SelectedTerminalSelection>).typeName = "agent.v1.SelectedTerminalSelection";
(SelectedTerminalSelection as MutableMessageType<SelectedTerminalSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "range", kind: "message", T: Range }
]);
var SelectedFolder$Runtime = (() => class _SelectedFolder extends Message<_SelectedFolder> {
  declare path: string;
  declare relativePath?: string;
  declare directoryTree?: LsDirectoryTreeNode;
  constructor(data?: PartialMessage<_SelectedFolder>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _SelectedFolder);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedFolder {
    return new _SelectedFolder().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedFolder {
    return new _SelectedFolder().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedFolder {
    return new _SelectedFolder().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedFolder | PlainMessage<_SelectedFolder> | undefined | null, b2: _SelectedFolder | PlainMessage<_SelectedFolder> | undefined | null): boolean {
    return proto3.util.equals(_SelectedFolder as unknown as MessageType<_SelectedFolder>, a, b2);
  }
})();
export type SelectedFolder = InstanceType<typeof SelectedFolder$Runtime>;
var SelectedFolder: MessageType<SelectedFolder> = SelectedFolder$Runtime as unknown as MessageType<SelectedFolder>;
(SelectedFolder as MutableMessageType<SelectedFolder>).runtime = proto3;
(SelectedFolder as MutableMessageType<SelectedFolder>).typeName = "agent.v1.SelectedFolder";
(SelectedFolder as MutableMessageType<SelectedFolder>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "directory_tree", kind: "message", T: LsDirectoryTreeNode }
]);
var SelectedExternalLink$Runtime = (() => class _SelectedExternalLink extends Message<_SelectedExternalLink> {
  declare url: string;
  declare uuid: string;
  declare pdfContent?: string;
  declare isPdf?: boolean;
  declare filename?: string;
  declare blobId?: Uint8Array;
  constructor(data?: PartialMessage<_SelectedExternalLink>) {
    super();
    this.url = "";
    this.uuid = "";
    proto3.util.initPartial(data, this as _SelectedExternalLink);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedExternalLink {
    return new _SelectedExternalLink().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedExternalLink {
    return new _SelectedExternalLink().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedExternalLink {
    return new _SelectedExternalLink().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedExternalLink | PlainMessage<_SelectedExternalLink> | undefined | null, b2: _SelectedExternalLink | PlainMessage<_SelectedExternalLink> | undefined | null): boolean {
    return proto3.util.equals(_SelectedExternalLink as unknown as MessageType<_SelectedExternalLink>, a, b2);
  }
})();
export type SelectedExternalLink = InstanceType<typeof SelectedExternalLink$Runtime>;
var SelectedExternalLink: MessageType<SelectedExternalLink> = SelectedExternalLink$Runtime as unknown as MessageType<SelectedExternalLink>;
(SelectedExternalLink as MutableMessageType<SelectedExternalLink>).runtime = proto3;
(SelectedExternalLink as MutableMessageType<SelectedExternalLink>).typeName = "agent.v1.SelectedExternalLink";
(SelectedExternalLink as MutableMessageType<SelectedExternalLink>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "pdf_content", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_pdf", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "filename", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }
]);
var SelectedCursorRule$Runtime = (() => class _SelectedCursorRule extends Message<_SelectedCursorRule> {
  declare rule?: CursorRule;
  constructor(data?: PartialMessage<_SelectedCursorRule>) {
    super();
    proto3.util.initPartial(data, this as _SelectedCursorRule);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedCursorRule {
    return new _SelectedCursorRule().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedCursorRule {
    return new _SelectedCursorRule().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedCursorRule {
    return new _SelectedCursorRule().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedCursorRule | PlainMessage<_SelectedCursorRule> | undefined | null, b2: _SelectedCursorRule | PlainMessage<_SelectedCursorRule> | undefined | null): boolean {
    return proto3.util.equals(_SelectedCursorRule as unknown as MessageType<_SelectedCursorRule>, a, b2);
  }
})();
export type SelectedCursorRule = InstanceType<typeof SelectedCursorRule$Runtime>;
var SelectedCursorRule: MessageType<SelectedCursorRule> = SelectedCursorRule$Runtime as unknown as MessageType<SelectedCursorRule>;
(SelectedCursorRule as MutableMessageType<SelectedCursorRule>).runtime = proto3;
(SelectedCursorRule as MutableMessageType<SelectedCursorRule>).typeName = "agent.v1.SelectedCursorRule";
(SelectedCursorRule as MutableMessageType<SelectedCursorRule>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rule", kind: "message", T: CursorRule }
]);
var SelectedGitDiff$Runtime = (() => class _SelectedGitDiff extends Message<_SelectedGitDiff> {
  declare content: string;
  declare fullContentLengthCharCount: number;
  constructor(data?: PartialMessage<_SelectedGitDiff>) {
    super();
    this.content = "";
    this.fullContentLengthCharCount = 0;
    proto3.util.initPartial(data, this as _SelectedGitDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedGitDiff {
    return new _SelectedGitDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedGitDiff {
    return new _SelectedGitDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedGitDiff {
    return new _SelectedGitDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedGitDiff | PlainMessage<_SelectedGitDiff> | undefined | null, b2: _SelectedGitDiff | PlainMessage<_SelectedGitDiff> | undefined | null): boolean {
    return proto3.util.equals(_SelectedGitDiff as unknown as MessageType<_SelectedGitDiff>, a, b2);
  }
})();
export type SelectedGitDiff = InstanceType<typeof SelectedGitDiff$Runtime>;
var SelectedGitDiff: MessageType<SelectedGitDiff> = SelectedGitDiff$Runtime as unknown as MessageType<SelectedGitDiff>;
(SelectedGitDiff as MutableMessageType<SelectedGitDiff>).runtime = proto3;
(SelectedGitDiff as MutableMessageType<SelectedGitDiff>).typeName = "agent.v1.SelectedGitDiff";
(SelectedGitDiff as MutableMessageType<SelectedGitDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "full_content_length_char_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SelectedGitDiffFromBranchToMain$Runtime = (() => class _SelectedGitDiffFromBranchToMain extends Message<_SelectedGitDiffFromBranchToMain> {
  declare content: string;
  declare fullContentLengthCharCount: number;
  constructor(data?: PartialMessage<_SelectedGitDiffFromBranchToMain>) {
    super();
    this.content = "";
    this.fullContentLengthCharCount = 0;
    proto3.util.initPartial(data, this as _SelectedGitDiffFromBranchToMain);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedGitDiffFromBranchToMain {
    return new _SelectedGitDiffFromBranchToMain().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedGitDiffFromBranchToMain {
    return new _SelectedGitDiffFromBranchToMain().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedGitDiffFromBranchToMain {
    return new _SelectedGitDiffFromBranchToMain().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedGitDiffFromBranchToMain | PlainMessage<_SelectedGitDiffFromBranchToMain> | undefined | null, b2: _SelectedGitDiffFromBranchToMain | PlainMessage<_SelectedGitDiffFromBranchToMain> | undefined | null): boolean {
    return proto3.util.equals(_SelectedGitDiffFromBranchToMain as unknown as MessageType<_SelectedGitDiffFromBranchToMain>, a, b2);
  }
})();
export type SelectedGitDiffFromBranchToMain = InstanceType<typeof SelectedGitDiffFromBranchToMain$Runtime>;
var SelectedGitDiffFromBranchToMain: MessageType<SelectedGitDiffFromBranchToMain> = SelectedGitDiffFromBranchToMain$Runtime as unknown as MessageType<SelectedGitDiffFromBranchToMain>;
(SelectedGitDiffFromBranchToMain as MutableMessageType<SelectedGitDiffFromBranchToMain>).runtime = proto3;
(SelectedGitDiffFromBranchToMain as MutableMessageType<SelectedGitDiffFromBranchToMain>).typeName = "agent.v1.SelectedGitDiffFromBranchToMain";
(SelectedGitDiffFromBranchToMain as MutableMessageType<SelectedGitDiffFromBranchToMain>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "full_content_length_char_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SelectedGitCommit$Runtime = (() => class _SelectedGitCommit extends Message<_SelectedGitCommit> {
  declare sha: string;
  declare message: string;
  declare description?: string;
  declare diff: string;
  constructor(data?: PartialMessage<_SelectedGitCommit>) {
    super();
    this.sha = "";
    this.message = "";
    this.diff = "";
    proto3.util.initPartial(data, this as _SelectedGitCommit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedGitCommit {
    return new _SelectedGitCommit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedGitCommit {
    return new _SelectedGitCommit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedGitCommit {
    return new _SelectedGitCommit().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedGitCommit | PlainMessage<_SelectedGitCommit> | undefined | null, b2: _SelectedGitCommit | PlainMessage<_SelectedGitCommit> | undefined | null): boolean {
    return proto3.util.equals(_SelectedGitCommit as unknown as MessageType<_SelectedGitCommit>, a, b2);
  }
})();
export type SelectedGitCommit = InstanceType<typeof SelectedGitCommit$Runtime>;
var SelectedGitCommit: MessageType<SelectedGitCommit> = SelectedGitCommit$Runtime as unknown as MessageType<SelectedGitCommit>;
(SelectedGitCommit as MutableMessageType<SelectedGitCommit>).runtime = proto3;
(SelectedGitCommit as MutableMessageType<SelectedGitCommit>).typeName = "agent.v1.SelectedGitCommit";
(SelectedGitCommit as MutableMessageType<SelectedGitCommit>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedPullRequest$Runtime = (() => class _SelectedPullRequest extends Message<_SelectedPullRequest> {
  declare number: number;
  declare url: string;
  declare title?: string;
  declare folderPath: string;
  declare summaryJson?: string;
  declare description?: string;
  declare blobId?: Uint8Array;
  constructor(data?: PartialMessage<_SelectedPullRequest>) {
    super();
    this.number = 0;
    this.url = "";
    this.folderPath = "";
    proto3.util.initPartial(data, this as _SelectedPullRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedPullRequest {
    return new _SelectedPullRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedPullRequest {
    return new _SelectedPullRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedPullRequest {
    return new _SelectedPullRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedPullRequest | PlainMessage<_SelectedPullRequest> | undefined | null, b2: _SelectedPullRequest | PlainMessage<_SelectedPullRequest> | undefined | null): boolean {
    return proto3.util.equals(_SelectedPullRequest as unknown as MessageType<_SelectedPullRequest>, a, b2);
  }
})();
export type SelectedPullRequest = InstanceType<typeof SelectedPullRequest$Runtime>;
var SelectedPullRequest: MessageType<SelectedPullRequest> = SelectedPullRequest$Runtime as unknown as MessageType<SelectedPullRequest>;
(SelectedPullRequest as MutableMessageType<SelectedPullRequest>).runtime = proto3;
(SelectedPullRequest as MutableMessageType<SelectedPullRequest>).typeName = "agent.v1.SelectedPullRequest";
(SelectedPullRequest as MutableMessageType<SelectedPullRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "title", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "folder_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "blob_id", kind: "scalar", T: 12, opt: true }
]);
var SelectedGitPRDiffSelection$Runtime = (() => class _SelectedGitPRDiffSelection extends Message<_SelectedGitPRDiffSelection> {
  declare prUrl: string;
  declare filePath: string;
  declare startLine: number;
  declare endLine: number;
  declare diffContent?: string;
  declare blobId?: Uint8Array;
  constructor(data?: PartialMessage<_SelectedGitPRDiffSelection>) {
    super();
    this.prUrl = "";
    this.filePath = "";
    this.startLine = 0;
    this.endLine = 0;
    proto3.util.initPartial(data, this as _SelectedGitPRDiffSelection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedGitPRDiffSelection {
    return new _SelectedGitPRDiffSelection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedGitPRDiffSelection {
    return new _SelectedGitPRDiffSelection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedGitPRDiffSelection {
    return new _SelectedGitPRDiffSelection().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedGitPRDiffSelection | PlainMessage<_SelectedGitPRDiffSelection> | undefined | null, b2: _SelectedGitPRDiffSelection | PlainMessage<_SelectedGitPRDiffSelection> | undefined | null): boolean {
    return proto3.util.equals(_SelectedGitPRDiffSelection as unknown as MessageType<_SelectedGitPRDiffSelection>, a, b2);
  }
})();
export type SelectedGitPRDiffSelection = InstanceType<typeof SelectedGitPRDiffSelection$Runtime>;
var SelectedGitPRDiffSelection: MessageType<SelectedGitPRDiffSelection> = SelectedGitPRDiffSelection$Runtime as unknown as MessageType<SelectedGitPRDiffSelection>;
(SelectedGitPRDiffSelection as MutableMessageType<SelectedGitPRDiffSelection>).runtime = proto3;
(SelectedGitPRDiffSelection as MutableMessageType<SelectedGitPRDiffSelection>).typeName = "agent.v1.SelectedGitPRDiffSelection";
(SelectedGitPRDiffSelection as MutableMessageType<SelectedGitPRDiffSelection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "diff_content", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "blob_id", kind: "scalar", T: 12, opt: true }
]);
var SelectedPluginCapabilityRef$Runtime = (() => class _SelectedPluginCapabilityRef extends Message<_SelectedPluginCapabilityRef> {
  declare pluginId: string;
  declare capabilityType: SelectedPluginCapabilityType;
  declare sourcePath: string;
  declare snapshotToken: string;
  declare resolvedCommitSha?: string;
  constructor(data?: PartialMessage<_SelectedPluginCapabilityRef>) {
    super();
    this.pluginId = "";
    this.capabilityType = SelectedPluginCapabilityType.UNSPECIFIED;
    this.sourcePath = "";
    this.snapshotToken = "";
    proto3.util.initPartial(data, this as _SelectedPluginCapabilityRef);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedPluginCapabilityRef {
    return new _SelectedPluginCapabilityRef().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedPluginCapabilityRef {
    return new _SelectedPluginCapabilityRef().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedPluginCapabilityRef {
    return new _SelectedPluginCapabilityRef().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedPluginCapabilityRef | PlainMessage<_SelectedPluginCapabilityRef> | undefined | null, b2: _SelectedPluginCapabilityRef | PlainMessage<_SelectedPluginCapabilityRef> | undefined | null): boolean {
    return proto3.util.equals(_SelectedPluginCapabilityRef as unknown as MessageType<_SelectedPluginCapabilityRef>, a, b2);
  }
})();
export type SelectedPluginCapabilityRef = InstanceType<typeof SelectedPluginCapabilityRef$Runtime>;
var SelectedPluginCapabilityRef: MessageType<SelectedPluginCapabilityRef> = SelectedPluginCapabilityRef$Runtime as unknown as MessageType<SelectedPluginCapabilityRef>;
(SelectedPluginCapabilityRef as MutableMessageType<SelectedPluginCapabilityRef>).runtime = proto3;
(SelectedPluginCapabilityRef as MutableMessageType<SelectedPluginCapabilityRef>).typeName = "agent.v1.SelectedPluginCapabilityRef";
(SelectedPluginCapabilityRef as MutableMessageType<SelectedPluginCapabilityRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plugin_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "capability_type", kind: "enum", T: proto3.getEnumType(SelectedPluginCapabilityType) },
  {
    no: 3,
    name: "source_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "snapshot_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "resolved_commit_sha", kind: "scalar", T: 9, opt: true }
]);
var SelectedCursorCommand$Runtime = (() => class _SelectedCursorCommand extends Message<_SelectedCursorCommand> {
  declare name: string;
  declare content: string;
  declare pluginCapability?: SelectedPluginCapabilityRef;
  declare fullPath?: string;
  declare displayName?: string;
  constructor(data?: PartialMessage<_SelectedCursorCommand>) {
    super();
    this.name = "";
    this.content = "";
    proto3.util.initPartial(data, this as _SelectedCursorCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedCursorCommand {
    return new _SelectedCursorCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedCursorCommand {
    return new _SelectedCursorCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedCursorCommand {
    return new _SelectedCursorCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedCursorCommand | PlainMessage<_SelectedCursorCommand> | undefined | null, b2: _SelectedCursorCommand | PlainMessage<_SelectedCursorCommand> | undefined | null): boolean {
    return proto3.util.equals(_SelectedCursorCommand as unknown as MessageType<_SelectedCursorCommand>, a, b2);
  }
})();
export type SelectedCursorCommand = InstanceType<typeof SelectedCursorCommand$Runtime>;
var SelectedCursorCommand: MessageType<SelectedCursorCommand> = SelectedCursorCommand$Runtime as unknown as MessageType<SelectedCursorCommand>;
(SelectedCursorCommand as MutableMessageType<SelectedCursorCommand>).runtime = proto3;
(SelectedCursorCommand as MutableMessageType<SelectedCursorCommand>).typeName = "agent.v1.SelectedCursorCommand";
(SelectedCursorCommand as MutableMessageType<SelectedCursorCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  { no: 3, name: "plugin_capability", kind: "message", T: SelectedPluginCapabilityRef, opt: true },
  { no: 4, name: "full_path", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "display_name", kind: "scalar", T: 9, opt: true }
]);
var SelectedDocumentation$Runtime = (() => class _SelectedDocumentation extends Message<_SelectedDocumentation> {
  declare docId: string;
  declare name: string;
  constructor(data?: PartialMessage<_SelectedDocumentation>) {
    super();
    this.docId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _SelectedDocumentation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedDocumentation {
    return new _SelectedDocumentation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedDocumentation {
    return new _SelectedDocumentation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedDocumentation {
    return new _SelectedDocumentation().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedDocumentation | PlainMessage<_SelectedDocumentation> | undefined | null, b2: _SelectedDocumentation | PlainMessage<_SelectedDocumentation> | undefined | null): boolean {
    return proto3.util.equals(_SelectedDocumentation as unknown as MessageType<_SelectedDocumentation>, a, b2);
  }
})();
export type SelectedDocumentation = InstanceType<typeof SelectedDocumentation$Runtime>;
var SelectedDocumentation: MessageType<SelectedDocumentation> = SelectedDocumentation$Runtime as unknown as MessageType<SelectedDocumentation>;
(SelectedDocumentation as MutableMessageType<SelectedDocumentation>).runtime = proto3;
(SelectedDocumentation as MutableMessageType<SelectedDocumentation>).typeName = "agent.v1.SelectedDocumentation";
(SelectedDocumentation as MutableMessageType<SelectedDocumentation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_id",
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
  }
]);
var SelectedPastChat$Runtime = (() => class _SelectedPastChat extends Message<_SelectedPastChat> {
  declare agentId: string;
  declare name: string;
  constructor(data?: PartialMessage<_SelectedPastChat>) {
    super();
    this.agentId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _SelectedPastChat);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedPastChat {
    return new _SelectedPastChat().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedPastChat {
    return new _SelectedPastChat().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedPastChat {
    return new _SelectedPastChat().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedPastChat | PlainMessage<_SelectedPastChat> | undefined | null, b2: _SelectedPastChat | PlainMessage<_SelectedPastChat> | undefined | null): boolean {
    return proto3.util.equals(_SelectedPastChat as unknown as MessageType<_SelectedPastChat>, a, b2);
  }
})();
export type SelectedPastChat = InstanceType<typeof SelectedPastChat$Runtime>;
var SelectedPastChat: MessageType<SelectedPastChat> = SelectedPastChat$Runtime as unknown as MessageType<SelectedPastChat>;
(SelectedPastChat as MutableMessageType<SelectedPastChat>).runtime = proto3;
(SelectedPastChat as MutableMessageType<SelectedPastChat>).typeName = "agent.v1.SelectedPastChat";
(SelectedPastChat as MutableMessageType<SelectedPastChat>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
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
  }
]);
var RecentAgent$Runtime = (() => class _RecentAgent extends Message<_RecentAgent> {
  declare name: string;
  declare path: string;
  declare overview?: string;
  constructor(data?: PartialMessage<_RecentAgent>) {
    super();
    this.name = "";
    this.path = "";
    proto3.util.initPartial(data, this as _RecentAgent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecentAgent {
    return new _RecentAgent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecentAgent {
    return new _RecentAgent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecentAgent {
    return new _RecentAgent().fromJsonString(jsonString, options);
  }
  static equals(a: _RecentAgent | PlainMessage<_RecentAgent> | undefined | null, b2: _RecentAgent | PlainMessage<_RecentAgent> | undefined | null): boolean {
    return proto3.util.equals(_RecentAgent as unknown as MessageType<_RecentAgent>, a, b2);
  }
})();
export type RecentAgent = InstanceType<typeof RecentAgent$Runtime>;
var RecentAgent: MessageType<RecentAgent> = RecentAgent$Runtime as unknown as MessageType<RecentAgent>;
(RecentAgent as MutableMessageType<RecentAgent>).runtime = proto3;
(RecentAgent as MutableMessageType<RecentAgent>).typeName = "agent.v1.RecentAgent";
(RecentAgent as MutableMessageType<RecentAgent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  { no: 3, name: "overview", kind: "scalar", T: 9, opt: true }
]);
var RecentAgentsContext$Runtime = (() => class _RecentAgentsContext extends Message<_RecentAgentsContext> {
  declare recentAgents: RecentAgent[];
  constructor(data?: PartialMessage<_RecentAgentsContext>) {
    super();
    this.recentAgents = [];
    proto3.util.initPartial(data, this as _RecentAgentsContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RecentAgentsContext {
    return new _RecentAgentsContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RecentAgentsContext {
    return new _RecentAgentsContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RecentAgentsContext {
    return new _RecentAgentsContext().fromJsonString(jsonString, options);
  }
  static equals(a: _RecentAgentsContext | PlainMessage<_RecentAgentsContext> | undefined | null, b2: _RecentAgentsContext | PlainMessage<_RecentAgentsContext> | undefined | null): boolean {
    return proto3.util.equals(_RecentAgentsContext as unknown as MessageType<_RecentAgentsContext>, a, b2);
  }
})();
export type RecentAgentsContext = InstanceType<typeof RecentAgentsContext$Runtime>;
var RecentAgentsContext: MessageType<RecentAgentsContext> = RecentAgentsContext$Runtime as unknown as MessageType<RecentAgentsContext>;
(RecentAgentsContext as MutableMessageType<RecentAgentsContext>).runtime = proto3;
(RecentAgentsContext as MutableMessageType<RecentAgentsContext>).typeName = "agent.v1.RecentAgentsContext";
(RecentAgentsContext as MutableMessageType<RecentAgentsContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "recent_agents", kind: "message", T: RecentAgent, repeated: true }
]);
var CallFrame$Runtime = (() => class _CallFrame extends Message<_CallFrame> {
  declare functionName?: string;
  declare url?: string;
  declare lineNumber?: number;
  declare columnNumber?: number;
  constructor(data?: PartialMessage<_CallFrame>) {
    super();
    proto3.util.initPartial(data, this as _CallFrame);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CallFrame {
    return new _CallFrame().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CallFrame {
    return new _CallFrame().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CallFrame {
    return new _CallFrame().fromJsonString(jsonString, options);
  }
  static equals(a: _CallFrame | PlainMessage<_CallFrame> | undefined | null, b2: _CallFrame | PlainMessage<_CallFrame> | undefined | null): boolean {
    return proto3.util.equals(_CallFrame as unknown as MessageType<_CallFrame>, a, b2);
  }
})();
export type CallFrame = InstanceType<typeof CallFrame$Runtime>;
var CallFrame: MessageType<CallFrame> = CallFrame$Runtime as unknown as MessageType<CallFrame>;
(CallFrame as MutableMessageType<CallFrame>).runtime = proto3;
(CallFrame as MutableMessageType<CallFrame>).typeName = "agent.v1.CallFrame";
(CallFrame as MutableMessageType<CallFrame>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "function_name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "line_number", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "column_number", kind: "scalar", T: 5, opt: true }
]);
var StackTrace$Runtime = (() => class _StackTrace extends Message<_StackTrace> {
  declare callFrames: CallFrame[];
  declare rawStackTrace?: string;
  constructor(data?: PartialMessage<_StackTrace>) {
    super();
    this.callFrames = [];
    proto3.util.initPartial(data, this as _StackTrace);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StackTrace {
    return new _StackTrace().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StackTrace {
    return new _StackTrace().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StackTrace {
    return new _StackTrace().fromJsonString(jsonString, options);
  }
  static equals(a: _StackTrace | PlainMessage<_StackTrace> | undefined | null, b2: _StackTrace | PlainMessage<_StackTrace> | undefined | null): boolean {
    return proto3.util.equals(_StackTrace as unknown as MessageType<_StackTrace>, a, b2);
  }
})();
export type StackTrace = InstanceType<typeof StackTrace$Runtime>;
var StackTrace: MessageType<StackTrace> = StackTrace$Runtime as unknown as MessageType<StackTrace>;
(StackTrace as MutableMessageType<StackTrace>).runtime = proto3;
(StackTrace as MutableMessageType<StackTrace>).typeName = "agent.v1.StackTrace";
(StackTrace as MutableMessageType<StackTrace>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "call_frames", kind: "message", T: CallFrame, repeated: true },
  { no: 2, name: "raw_stack_trace", kind: "scalar", T: 9, opt: true }
]);
var SelectedConsoleLog$Runtime = (() => class _SelectedConsoleLog extends Message<_SelectedConsoleLog> {
  declare message: string;
  declare timestamp: number;
  declare level: string;
  declare clientName: string;
  declare sessionId: string;
  declare stackTrace?: StackTrace;
  declare objectDataJson?: string;
  constructor(data?: PartialMessage<_SelectedConsoleLog>) {
    super();
    this.message = "";
    this.timestamp = 0;
    this.level = "";
    this.clientName = "";
    this.sessionId = "";
    proto3.util.initPartial(data, this as _SelectedConsoleLog);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedConsoleLog {
    return new _SelectedConsoleLog().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedConsoleLog {
    return new _SelectedConsoleLog().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedConsoleLog {
    return new _SelectedConsoleLog().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedConsoleLog | PlainMessage<_SelectedConsoleLog> | undefined | null, b2: _SelectedConsoleLog | PlainMessage<_SelectedConsoleLog> | undefined | null): boolean {
    return proto3.util.equals(_SelectedConsoleLog as unknown as MessageType<_SelectedConsoleLog>, a, b2);
  }
})();
export type SelectedConsoleLog = InstanceType<typeof SelectedConsoleLog$Runtime>;
var SelectedConsoleLog: MessageType<SelectedConsoleLog> = SelectedConsoleLog$Runtime as unknown as MessageType<SelectedConsoleLog>;
(SelectedConsoleLog as MutableMessageType<SelectedConsoleLog>).runtime = proto3;
(SelectedConsoleLog as MutableMessageType<SelectedConsoleLog>).typeName = "agent.v1.SelectedConsoleLog";
(SelectedConsoleLog as MutableMessageType<SelectedConsoleLog>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "timestamp",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "level",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "client_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "session_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "stack_trace", kind: "message", T: StackTrace, opt: true },
  { no: 7, name: "object_data_json", kind: "scalar", T: 9, opt: true }
]);
var SelectedUIElement$Runtime = (() => class _SelectedUIElement extends Message<_SelectedUIElement> {
  declare element: string;
  declare xpath: string;
  declare textContent: string;
  declare extra: string;
  declare component?: string;
  declare componentPropsJson?: string;
  constructor(data?: PartialMessage<_SelectedUIElement>) {
    super();
    this.element = "";
    this.xpath = "";
    this.textContent = "";
    this.extra = "";
    proto3.util.initPartial(data, this as _SelectedUIElement);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedUIElement {
    return new _SelectedUIElement().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedUIElement {
    return new _SelectedUIElement().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedUIElement {
    return new _SelectedUIElement().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedUIElement | PlainMessage<_SelectedUIElement> | undefined | null, b2: _SelectedUIElement | PlainMessage<_SelectedUIElement> | undefined | null): boolean {
    return proto3.util.equals(_SelectedUIElement as unknown as MessageType<_SelectedUIElement>, a, b2);
  }
})();
export type SelectedUIElement = InstanceType<typeof SelectedUIElement$Runtime>;
var SelectedUIElement: MessageType<SelectedUIElement> = SelectedUIElement$Runtime as unknown as MessageType<SelectedUIElement>;
(SelectedUIElement as MutableMessageType<SelectedUIElement>).runtime = proto3;
(SelectedUIElement as MutableMessageType<SelectedUIElement>).typeName = "agent.v1.SelectedUIElement";
(SelectedUIElement as MutableMessageType<SelectedUIElement>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "element",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "xpath",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "text_content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "extra",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "component", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "component_props_json", kind: "scalar", T: 9, opt: true }
]);
var SelectedSubagent$Runtime = (() => class _SelectedSubagent extends Message<_SelectedSubagent> {
  declare name: string;
  constructor(data?: PartialMessage<_SelectedSubagent>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _SelectedSubagent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedSubagent {
    return new _SelectedSubagent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedSubagent {
    return new _SelectedSubagent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedSubagent {
    return new _SelectedSubagent().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedSubagent | PlainMessage<_SelectedSubagent> | undefined | null, b2: _SelectedSubagent | PlainMessage<_SelectedSubagent> | undefined | null): boolean {
    return proto3.util.equals(_SelectedSubagent as unknown as MessageType<_SelectedSubagent>, a, b2);
  }
})();
export type SelectedSubagent = InstanceType<typeof SelectedSubagent$Runtime>;
var SelectedSubagent: MessageType<SelectedSubagent> = SelectedSubagent$Runtime as unknown as MessageType<SelectedSubagent>;
(SelectedSubagent as MutableMessageType<SelectedSubagent>).runtime = proto3;
(SelectedSubagent as MutableMessageType<SelectedSubagent>).typeName = "agent.v1.SelectedSubagent";
(SelectedSubagent as MutableMessageType<SelectedSubagent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedBrowser$Runtime = (() => class _SelectedBrowser extends Message<_SelectedBrowser> {
  declare browserId: string;
  declare url: string;
  declare pageTitle?: string;
  constructor(data?: PartialMessage<_SelectedBrowser>) {
    super();
    this.browserId = "";
    this.url = "";
    proto3.util.initPartial(data, this as _SelectedBrowser);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedBrowser {
    return new _SelectedBrowser().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedBrowser {
    return new _SelectedBrowser().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedBrowser {
    return new _SelectedBrowser().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedBrowser | PlainMessage<_SelectedBrowser> | undefined | null, b2: _SelectedBrowser | PlainMessage<_SelectedBrowser> | undefined | null): boolean {
    return proto3.util.equals(_SelectedBrowser as unknown as MessageType<_SelectedBrowser>, a, b2);
  }
})();
export type SelectedBrowser = InstanceType<typeof SelectedBrowser$Runtime>;
var SelectedBrowser: MessageType<SelectedBrowser> = SelectedBrowser$Runtime as unknown as MessageType<SelectedBrowser>;
(SelectedBrowser as MutableMessageType<SelectedBrowser>).runtime = proto3;
(SelectedBrowser as MutableMessageType<SelectedBrowser>).typeName = "agent.v1.SelectedBrowser";
(SelectedBrowser as MutableMessageType<SelectedBrowser>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "browser_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "page_title", kind: "scalar", T: 9, opt: true }
]);
var SelectedAgenticGitActionCommitParams$Runtime = (() => class _SelectedAgenticGitActionCommitParams extends Message<_SelectedAgenticGitActionCommitParams> {
  declare filesToCommit: string[];
  declare filesToExcludeFromCommit: string[];
  declare shouldStageAllChanges: boolean;
  declare createPrDraft?: boolean;
  declare filesToCommitWithStatus: SelectedAgenticGitFileWithStatus[];
  declare filesToExcludeFromCommitWithStatus: SelectedAgenticGitFileWithStatus[];
  constructor(data?: PartialMessage<_SelectedAgenticGitActionCommitParams>) {
    super();
    this.filesToCommit = [];
    this.filesToExcludeFromCommit = [];
    this.shouldStageAllChanges = false;
    this.filesToCommitWithStatus = [];
    this.filesToExcludeFromCommitWithStatus = [];
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionCommitParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionCommitParams {
    return new _SelectedAgenticGitActionCommitParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionCommitParams {
    return new _SelectedAgenticGitActionCommitParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionCommitParams {
    return new _SelectedAgenticGitActionCommitParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionCommitParams | PlainMessage<_SelectedAgenticGitActionCommitParams> | undefined | null, b2: _SelectedAgenticGitActionCommitParams | PlainMessage<_SelectedAgenticGitActionCommitParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionCommitParams as unknown as MessageType<_SelectedAgenticGitActionCommitParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionCommitParams = InstanceType<typeof SelectedAgenticGitActionCommitParams$Runtime>;
var SelectedAgenticGitActionCommitParams: MessageType<SelectedAgenticGitActionCommitParams> = SelectedAgenticGitActionCommitParams$Runtime as unknown as MessageType<SelectedAgenticGitActionCommitParams>;
(SelectedAgenticGitActionCommitParams as MutableMessageType<SelectedAgenticGitActionCommitParams>).runtime = proto3;
(SelectedAgenticGitActionCommitParams as MutableMessageType<SelectedAgenticGitActionCommitParams>).typeName = "agent.v1.SelectedAgenticGitActionCommitParams";
(SelectedAgenticGitActionCommitParams as MutableMessageType<SelectedAgenticGitActionCommitParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files_to_commit", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "files_to_exclude_from_commit", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "should_stage_all_changes",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "create_pr_draft", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "files_to_commit_with_status", kind: "message", T: SelectedAgenticGitFileWithStatus, repeated: true },
  { no: 6, name: "files_to_exclude_from_commit_with_status", kind: "message", T: SelectedAgenticGitFileWithStatus, repeated: true }
]);
var SelectedAgenticGitActionCreateBranchParams$Runtime = (() => class _SelectedAgenticGitActionCreateBranchParams extends Message<_SelectedAgenticGitActionCreateBranchParams> {
  constructor(data?: PartialMessage<_SelectedAgenticGitActionCreateBranchParams>) {
    super();
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionCreateBranchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionCreateBranchParams {
    return new _SelectedAgenticGitActionCreateBranchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionCreateBranchParams {
    return new _SelectedAgenticGitActionCreateBranchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionCreateBranchParams {
    return new _SelectedAgenticGitActionCreateBranchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionCreateBranchParams | PlainMessage<_SelectedAgenticGitActionCreateBranchParams> | undefined | null, b2: _SelectedAgenticGitActionCreateBranchParams | PlainMessage<_SelectedAgenticGitActionCreateBranchParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionCreateBranchParams as unknown as MessageType<_SelectedAgenticGitActionCreateBranchParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionCreateBranchParams = InstanceType<typeof SelectedAgenticGitActionCreateBranchParams$Runtime>;
var SelectedAgenticGitActionCreateBranchParams: MessageType<SelectedAgenticGitActionCreateBranchParams> = SelectedAgenticGitActionCreateBranchParams$Runtime as unknown as MessageType<SelectedAgenticGitActionCreateBranchParams>;
(SelectedAgenticGitActionCreateBranchParams as MutableMessageType<SelectedAgenticGitActionCreateBranchParams>).runtime = proto3;
(SelectedAgenticGitActionCreateBranchParams as MutableMessageType<SelectedAgenticGitActionCreateBranchParams>).typeName = "agent.v1.SelectedAgenticGitActionCreateBranchParams";
(SelectedAgenticGitActionCreateBranchParams as MutableMessageType<SelectedAgenticGitActionCreateBranchParams>).fields = proto3.util.newFieldList(() => []);
var SelectedAgenticGitFileWithStatus$Runtime = (() => class _SelectedAgenticGitFileWithStatus extends Message<_SelectedAgenticGitFileWithStatus> {
  declare path: string;
  declare status?: string;
  constructor(data?: PartialMessage<_SelectedAgenticGitFileWithStatus>) {
    super();
    this.path = "";
    proto3.util.initPartial(data, this as _SelectedAgenticGitFileWithStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitFileWithStatus {
    return new _SelectedAgenticGitFileWithStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitFileWithStatus {
    return new _SelectedAgenticGitFileWithStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitFileWithStatus {
    return new _SelectedAgenticGitFileWithStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitFileWithStatus | PlainMessage<_SelectedAgenticGitFileWithStatus> | undefined | null, b2: _SelectedAgenticGitFileWithStatus | PlainMessage<_SelectedAgenticGitFileWithStatus> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitFileWithStatus as unknown as MessageType<_SelectedAgenticGitFileWithStatus>, a, b2);
  }
})();
export type SelectedAgenticGitFileWithStatus = InstanceType<typeof SelectedAgenticGitFileWithStatus$Runtime>;
var SelectedAgenticGitFileWithStatus: MessageType<SelectedAgenticGitFileWithStatus> = SelectedAgenticGitFileWithStatus$Runtime as unknown as MessageType<SelectedAgenticGitFileWithStatus>;
(SelectedAgenticGitFileWithStatus as MutableMessageType<SelectedAgenticGitFileWithStatus>).runtime = proto3;
(SelectedAgenticGitFileWithStatus as MutableMessageType<SelectedAgenticGitFileWithStatus>).typeName = "agent.v1.SelectedAgenticGitFileWithStatus";
(SelectedAgenticGitFileWithStatus as MutableMessageType<SelectedAgenticGitFileWithStatus>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "status", kind: "scalar", T: 9, opt: true }
]);
var SelectedAgenticGitActionPushParams$Runtime = (() => class _SelectedAgenticGitActionPushParams extends Message<_SelectedAgenticGitActionPushParams> {
  declare filesToPush: string[];
  declare createPrDraft?: boolean;
  constructor(data?: PartialMessage<_SelectedAgenticGitActionPushParams>) {
    super();
    this.filesToPush = [];
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionPushParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionPushParams {
    return new _SelectedAgenticGitActionPushParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionPushParams {
    return new _SelectedAgenticGitActionPushParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionPushParams {
    return new _SelectedAgenticGitActionPushParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionPushParams | PlainMessage<_SelectedAgenticGitActionPushParams> | undefined | null, b2: _SelectedAgenticGitActionPushParams | PlainMessage<_SelectedAgenticGitActionPushParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionPushParams as unknown as MessageType<_SelectedAgenticGitActionPushParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionPushParams = InstanceType<typeof SelectedAgenticGitActionPushParams$Runtime>;
var SelectedAgenticGitActionPushParams: MessageType<SelectedAgenticGitActionPushParams> = SelectedAgenticGitActionPushParams$Runtime as unknown as MessageType<SelectedAgenticGitActionPushParams>;
(SelectedAgenticGitActionPushParams as MutableMessageType<SelectedAgenticGitActionPushParams>).runtime = proto3;
(SelectedAgenticGitActionPushParams as MutableMessageType<SelectedAgenticGitActionPushParams>).typeName = "agent.v1.SelectedAgenticGitActionPushParams";
(SelectedAgenticGitActionPushParams as MutableMessageType<SelectedAgenticGitActionPushParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files_to_push", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "create_pr_draft", kind: "scalar", T: 8, opt: true }
]);
var SelectedAgenticGitActionFixMergeConflictsParams$Runtime = (() => class _SelectedAgenticGitActionFixMergeConflictsParams extends Message<_SelectedAgenticGitActionFixMergeConflictsParams> {
  declare baseBranch?: string;
  declare prUrl?: string;
  constructor(data?: PartialMessage<_SelectedAgenticGitActionFixMergeConflictsParams>) {
    super();
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionFixMergeConflictsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionFixMergeConflictsParams {
    return new _SelectedAgenticGitActionFixMergeConflictsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionFixMergeConflictsParams {
    return new _SelectedAgenticGitActionFixMergeConflictsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionFixMergeConflictsParams {
    return new _SelectedAgenticGitActionFixMergeConflictsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionFixMergeConflictsParams | PlainMessage<_SelectedAgenticGitActionFixMergeConflictsParams> | undefined | null, b2: _SelectedAgenticGitActionFixMergeConflictsParams | PlainMessage<_SelectedAgenticGitActionFixMergeConflictsParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionFixMergeConflictsParams as unknown as MessageType<_SelectedAgenticGitActionFixMergeConflictsParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionFixMergeConflictsParams = InstanceType<typeof SelectedAgenticGitActionFixMergeConflictsParams$Runtime>;
var SelectedAgenticGitActionFixMergeConflictsParams: MessageType<SelectedAgenticGitActionFixMergeConflictsParams> = SelectedAgenticGitActionFixMergeConflictsParams$Runtime as unknown as MessageType<SelectedAgenticGitActionFixMergeConflictsParams>;
(SelectedAgenticGitActionFixMergeConflictsParams as MutableMessageType<SelectedAgenticGitActionFixMergeConflictsParams>).runtime = proto3;
(SelectedAgenticGitActionFixMergeConflictsParams as MutableMessageType<SelectedAgenticGitActionFixMergeConflictsParams>).typeName = "agent.v1.SelectedAgenticGitActionFixMergeConflictsParams";
(SelectedAgenticGitActionFixMergeConflictsParams as MutableMessageType<SelectedAgenticGitActionFixMergeConflictsParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "pr_url", kind: "scalar", T: 9, opt: true }
]);
var SelectedAgenticGitActionBabysitPrInCloudParams$Runtime = (() => class _SelectedAgenticGitActionBabysitPrInCloudParams extends Message<_SelectedAgenticGitActionBabysitPrInCloudParams> {
  declare baseBranch?: string;
  constructor(data?: PartialMessage<_SelectedAgenticGitActionBabysitPrInCloudParams>) {
    super();
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionBabysitPrInCloudParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionBabysitPrInCloudParams {
    return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionBabysitPrInCloudParams {
    return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionBabysitPrInCloudParams {
    return new _SelectedAgenticGitActionBabysitPrInCloudParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionBabysitPrInCloudParams | PlainMessage<_SelectedAgenticGitActionBabysitPrInCloudParams> | undefined | null, b2: _SelectedAgenticGitActionBabysitPrInCloudParams | PlainMessage<_SelectedAgenticGitActionBabysitPrInCloudParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionBabysitPrInCloudParams as unknown as MessageType<_SelectedAgenticGitActionBabysitPrInCloudParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionBabysitPrInCloudParams = InstanceType<typeof SelectedAgenticGitActionBabysitPrInCloudParams$Runtime>;
var SelectedAgenticGitActionBabysitPrInCloudParams: MessageType<SelectedAgenticGitActionBabysitPrInCloudParams> = SelectedAgenticGitActionBabysitPrInCloudParams$Runtime as unknown as MessageType<SelectedAgenticGitActionBabysitPrInCloudParams>;
(SelectedAgenticGitActionBabysitPrInCloudParams as MutableMessageType<SelectedAgenticGitActionBabysitPrInCloudParams>).runtime = proto3;
(SelectedAgenticGitActionBabysitPrInCloudParams as MutableMessageType<SelectedAgenticGitActionBabysitPrInCloudParams>).typeName = "agent.v1.SelectedAgenticGitActionBabysitPrInCloudParams";
(SelectedAgenticGitActionBabysitPrInCloudParams as MutableMessageType<SelectedAgenticGitActionBabysitPrInCloudParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }
]);
var SelectedAgenticGitActionUpdateBranchParams$Runtime = (() => class _SelectedAgenticGitActionUpdateBranchParams extends Message<_SelectedAgenticGitActionUpdateBranchParams> {
  declare baseBranch?: string;
  constructor(data?: PartialMessage<_SelectedAgenticGitActionUpdateBranchParams>) {
    super();
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionUpdateBranchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionUpdateBranchParams {
    return new _SelectedAgenticGitActionUpdateBranchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionUpdateBranchParams {
    return new _SelectedAgenticGitActionUpdateBranchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionUpdateBranchParams {
    return new _SelectedAgenticGitActionUpdateBranchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionUpdateBranchParams | PlainMessage<_SelectedAgenticGitActionUpdateBranchParams> | undefined | null, b2: _SelectedAgenticGitActionUpdateBranchParams | PlainMessage<_SelectedAgenticGitActionUpdateBranchParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionUpdateBranchParams as unknown as MessageType<_SelectedAgenticGitActionUpdateBranchParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionUpdateBranchParams = InstanceType<typeof SelectedAgenticGitActionUpdateBranchParams$Runtime>;
var SelectedAgenticGitActionUpdateBranchParams: MessageType<SelectedAgenticGitActionUpdateBranchParams> = SelectedAgenticGitActionUpdateBranchParams$Runtime as unknown as MessageType<SelectedAgenticGitActionUpdateBranchParams>;
(SelectedAgenticGitActionUpdateBranchParams as MutableMessageType<SelectedAgenticGitActionUpdateBranchParams>).runtime = proto3;
(SelectedAgenticGitActionUpdateBranchParams as MutableMessageType<SelectedAgenticGitActionUpdateBranchParams>).typeName = "agent.v1.SelectedAgenticGitActionUpdateBranchParams";
(SelectedAgenticGitActionUpdateBranchParams as MutableMessageType<SelectedAgenticGitActionUpdateBranchParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "base_branch", kind: "scalar", T: 9, opt: true }
]);
var SelectedAgenticGitActionPullLocallyParams$Runtime = (() => class _SelectedAgenticGitActionPullLocallyParams extends Message<_SelectedAgenticGitActionPullLocallyParams> {
  declare remoteBranch: string;
  constructor(data?: PartialMessage<_SelectedAgenticGitActionPullLocallyParams>) {
    super();
    this.remoteBranch = "";
    proto3.util.initPartial(data, this as _SelectedAgenticGitActionPullLocallyParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitActionPullLocallyParams {
    return new _SelectedAgenticGitActionPullLocallyParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionPullLocallyParams {
    return new _SelectedAgenticGitActionPullLocallyParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitActionPullLocallyParams {
    return new _SelectedAgenticGitActionPullLocallyParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitActionPullLocallyParams | PlainMessage<_SelectedAgenticGitActionPullLocallyParams> | undefined | null, b2: _SelectedAgenticGitActionPullLocallyParams | PlainMessage<_SelectedAgenticGitActionPullLocallyParams> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitActionPullLocallyParams as unknown as MessageType<_SelectedAgenticGitActionPullLocallyParams>, a, b2);
  }
})();
export type SelectedAgenticGitActionPullLocallyParams = InstanceType<typeof SelectedAgenticGitActionPullLocallyParams$Runtime>;
var SelectedAgenticGitActionPullLocallyParams: MessageType<SelectedAgenticGitActionPullLocallyParams> = SelectedAgenticGitActionPullLocallyParams$Runtime as unknown as MessageType<SelectedAgenticGitActionPullLocallyParams>;
(SelectedAgenticGitActionPullLocallyParams as MutableMessageType<SelectedAgenticGitActionPullLocallyParams>).runtime = proto3;
(SelectedAgenticGitActionPullLocallyParams as MutableMessageType<SelectedAgenticGitActionPullLocallyParams>).typeName = "agent.v1.SelectedAgenticGitActionPullLocallyParams";
(SelectedAgenticGitActionPullLocallyParams as MutableMessageType<SelectedAgenticGitActionPullLocallyParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "remote_branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelectedAgenticGitAction$Runtime = (() => class _SelectedAgenticGitAction extends Message<_SelectedAgenticGitAction> {
  declare branchContext?: SelectedGitBranchContext;
  declare pathToTemplateFile?: string;
  declare pathToTemplateDir?: string;
  declare params: { case: "commitParams"; value: SelectedAgenticGitActionCommitParams } | { case: "commitAndPushParams"; value: SelectedAgenticGitActionCommitParams } | { case: "pushParams"; value: SelectedAgenticGitActionPushParams } | { case: "createPrParams"; value: SelectedAgenticGitActionPushParams } | { case: "createPrWithChangesParams"; value: SelectedAgenticGitActionCommitParams } | { case: "fixMergeConflictsParams"; value: SelectedAgenticGitActionFixMergeConflictsParams } | { case: "babysitPrInCloudParams"; value: SelectedAgenticGitActionBabysitPrInCloudParams } | { case: "applyLocallyParams"; value: SelectedAgenticGitActionPullLocallyParams } | { case: "checkoutBranchParams"; value: SelectedAgenticGitActionPullLocallyParams } | { case: "createBranchAndCommitParams"; value: SelectedAgenticGitActionCommitParams } | { case: "createBranchCommitAndPushParams"; value: SelectedAgenticGitActionCommitParams } | { case: "updateBranchParams"; value: SelectedAgenticGitActionUpdateBranchParams } | { case: "createBranchParams"; value: SelectedAgenticGitActionCreateBranchParams } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SelectedAgenticGitAction>) {
    super();
    this.params = { case: void 0 };
    proto3.util.initPartial(data, this as _SelectedAgenticGitAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedAgenticGitAction {
    return new _SelectedAgenticGitAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedAgenticGitAction {
    return new _SelectedAgenticGitAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedAgenticGitAction {
    return new _SelectedAgenticGitAction().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedAgenticGitAction | PlainMessage<_SelectedAgenticGitAction> | undefined | null, b2: _SelectedAgenticGitAction | PlainMessage<_SelectedAgenticGitAction> | undefined | null): boolean {
    return proto3.util.equals(_SelectedAgenticGitAction as unknown as MessageType<_SelectedAgenticGitAction>, a, b2);
  }
})();
export type SelectedAgenticGitAction = InstanceType<typeof SelectedAgenticGitAction$Runtime>;
var SelectedAgenticGitAction: MessageType<SelectedAgenticGitAction> = SelectedAgenticGitAction$Runtime as unknown as MessageType<SelectedAgenticGitAction>;
(SelectedAgenticGitAction as MutableMessageType<SelectedAgenticGitAction>).runtime = proto3;
(SelectedAgenticGitAction as MutableMessageType<SelectedAgenticGitAction>).typeName = "agent.v1.SelectedAgenticGitAction";
(SelectedAgenticGitAction as MutableMessageType<SelectedAgenticGitAction>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "commit_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" },
  { no: 6, name: "commit_and_push_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" },
  { no: 3, name: "push_params", kind: "message", T: SelectedAgenticGitActionPushParams, oneof: "params" },
  { no: 7, name: "create_pr_params", kind: "message", T: SelectedAgenticGitActionPushParams, oneof: "params" },
  { no: 8, name: "create_pr_with_changes_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" },
  { no: 4, name: "fix_merge_conflicts_params", kind: "message", T: SelectedAgenticGitActionFixMergeConflictsParams, oneof: "params" },
  { no: 11, name: "babysit_pr_in_cloud_params", kind: "message", T: SelectedAgenticGitActionBabysitPrInCloudParams, oneof: "params" },
  { no: 14, name: "apply_locally_params", kind: "message", T: SelectedAgenticGitActionPullLocallyParams, oneof: "params" },
  { no: 15, name: "checkout_branch_params", kind: "message", T: SelectedAgenticGitActionPullLocallyParams, oneof: "params" },
  { no: 12, name: "create_branch_and_commit_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" },
  { no: 13, name: "create_branch_commit_and_push_params", kind: "message", T: SelectedAgenticGitActionCommitParams, oneof: "params" },
  { no: 16, name: "update_branch_params", kind: "message", T: SelectedAgenticGitActionUpdateBranchParams, oneof: "params" },
  { no: 17, name: "create_branch_params", kind: "message", T: SelectedAgenticGitActionCreateBranchParams, oneof: "params" },
  { no: 5, name: "branch_context", kind: "message", T: SelectedGitBranchContext, opt: true },
  { no: 9, name: "path_to_template_file", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "path_to_template_dir", kind: "scalar", T: 9, opt: true }
]);
var SelectedGitBranchContext$Runtime = (() => class _SelectedGitBranchContext extends Message<_SelectedGitBranchContext> {
  declare currentBranch?: string;
  declare baseBranch?: string;
  declare agentBranchPrefix?: string;
  constructor(data?: PartialMessage<_SelectedGitBranchContext>) {
    super();
    proto3.util.initPartial(data, this as _SelectedGitBranchContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedGitBranchContext {
    return new _SelectedGitBranchContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedGitBranchContext {
    return new _SelectedGitBranchContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedGitBranchContext {
    return new _SelectedGitBranchContext().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedGitBranchContext | PlainMessage<_SelectedGitBranchContext> | undefined | null, b2: _SelectedGitBranchContext | PlainMessage<_SelectedGitBranchContext> | undefined | null): boolean {
    return proto3.util.equals(_SelectedGitBranchContext as unknown as MessageType<_SelectedGitBranchContext>, a, b2);
  }
})();
export type SelectedGitBranchContext = InstanceType<typeof SelectedGitBranchContext$Runtime>;
var SelectedGitBranchContext: MessageType<SelectedGitBranchContext> = SelectedGitBranchContext$Runtime as unknown as MessageType<SelectedGitBranchContext>;
(SelectedGitBranchContext as MutableMessageType<SelectedGitBranchContext>).runtime = proto3;
(SelectedGitBranchContext as MutableMessageType<SelectedGitBranchContext>).typeName = "agent.v1.SelectedGitBranchContext";
(SelectedGitBranchContext as MutableMessageType<SelectedGitBranchContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "current_branch", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "agent_branch_prefix", kind: "scalar", T: 9, opt: true }
]);
var SelectedContext$Runtime = (() => class _SelectedContext extends Message<_SelectedContext> {
  declare selectedImages: SelectedImage[];
  declare invocationContext?: InvocationContext;
  declare extraContext: string[];
  declare extraContextEntries: ExtraContextEntry[];
  declare files: SelectedFile[];
  declare codeSelections: SelectedCodeSelection[];
  declare terminals: SelectedTerminal[];
  declare terminalSelections: SelectedTerminalSelection[];
  declare folders: SelectedFolder[];
  declare externalLinks: SelectedExternalLink[];
  declare cursorRules: SelectedCursorRule[];
  declare gitDiff?: SelectedGitDiff;
  declare gitDiffFromBranchToMain?: SelectedGitDiffFromBranchToMain;
  declare cursorCommands: SelectedCursorCommand[];
  declare documentations: SelectedDocumentation[];
  declare uiElements: SelectedUIElement[];
  declare consoleLogs: SelectedConsoleLog[];
  declare gitCommits: SelectedGitCommit[];
  declare pastChats: SelectedPastChat[];
  declare gitPrDiffSelections: SelectedGitPRDiffSelection[];
  declare selectedPullRequests: SelectedPullRequest[];
  declare selectedSubagents: SelectedSubagent[];
  declare selectedVideos: SelectedVideo[];
  declare selectedBrowsers: SelectedBrowser[];
  declare selectedDocuments: SelectedDocument[];
  declare selectedSkills: AgentSkill[];
  declare recentAgentsContext?: RecentAgentsContext;
  declare selectedAgenticGitAction?: SelectedAgenticGitAction;
  constructor(data?: PartialMessage<_SelectedContext>) {
    super();
    this.selectedImages = [];
    this.extraContext = [];
    this.extraContextEntries = [];
    this.files = [];
    this.codeSelections = [];
    this.terminals = [];
    this.terminalSelections = [];
    this.folders = [];
    this.externalLinks = [];
    this.cursorRules = [];
    this.cursorCommands = [];
    this.documentations = [];
    this.uiElements = [];
    this.consoleLogs = [];
    this.gitCommits = [];
    this.pastChats = [];
    this.gitPrDiffSelections = [];
    this.selectedPullRequests = [];
    this.selectedSubagents = [];
    this.selectedVideos = [];
    this.selectedBrowsers = [];
    this.selectedDocuments = [];
    this.selectedSkills = [];
    proto3.util.initPartial(data, this as _SelectedContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelectedContext {
    return new _SelectedContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelectedContext {
    return new _SelectedContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelectedContext {
    return new _SelectedContext().fromJsonString(jsonString, options);
  }
  static equals(a: _SelectedContext | PlainMessage<_SelectedContext> | undefined | null, b2: _SelectedContext | PlainMessage<_SelectedContext> | undefined | null): boolean {
    return proto3.util.equals(_SelectedContext as unknown as MessageType<_SelectedContext>, a, b2);
  }
})();
export type SelectedContext = InstanceType<typeof SelectedContext$Runtime>;
var SelectedContext: MessageType<SelectedContext> = SelectedContext$Runtime as unknown as MessageType<SelectedContext>;
(SelectedContext as MutableMessageType<SelectedContext>).runtime = proto3;
(SelectedContext as MutableMessageType<SelectedContext>).typeName = "agent.v1.SelectedContext";
(SelectedContext as MutableMessageType<SelectedContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "selected_images", kind: "message", T: SelectedImage, repeated: true },
  { no: 2, name: "invocation_context", kind: "message", T: InvocationContext, opt: true },
  { no: 3, name: "extra_context", kind: "scalar", T: 9, repeated: true },
  { no: 16, name: "extra_context_entries", kind: "message", T: ExtraContextEntry, repeated: true },
  { no: 4, name: "files", kind: "message", T: SelectedFile, repeated: true },
  { no: 5, name: "code_selections", kind: "message", T: SelectedCodeSelection, repeated: true },
  { no: 6, name: "terminals", kind: "message", T: SelectedTerminal, repeated: true },
  { no: 7, name: "terminal_selections", kind: "message", T: SelectedTerminalSelection, repeated: true },
  { no: 8, name: "folders", kind: "message", T: SelectedFolder, repeated: true },
  { no: 9, name: "external_links", kind: "message", T: SelectedExternalLink, repeated: true },
  { no: 10, name: "cursor_rules", kind: "message", T: SelectedCursorRule, repeated: true },
  { no: 18, name: "git_diff", kind: "message", T: SelectedGitDiff, opt: true },
  { no: 11, name: "git_diff_from_branch_to_main", kind: "message", T: SelectedGitDiffFromBranchToMain, opt: true },
  { no: 12, name: "cursor_commands", kind: "message", T: SelectedCursorCommand, repeated: true },
  { no: 13, name: "documentations", kind: "message", T: SelectedDocumentation, repeated: true },
  { no: 14, name: "ui_elements", kind: "message", T: SelectedUIElement, repeated: true },
  { no: 15, name: "console_logs", kind: "message", T: SelectedConsoleLog, repeated: true },
  { no: 17, name: "git_commits", kind: "message", T: SelectedGitCommit, repeated: true },
  { no: 19, name: "past_chats", kind: "message", T: SelectedPastChat, repeated: true },
  { no: 20, name: "git_pr_diff_selections", kind: "message", T: SelectedGitPRDiffSelection, repeated: true },
  { no: 21, name: "selected_pull_requests", kind: "message", T: SelectedPullRequest, repeated: true },
  { no: 22, name: "selected_subagents", kind: "message", T: SelectedSubagent, repeated: true },
  { no: 23, name: "selected_videos", kind: "message", T: SelectedVideo, repeated: true },
  { no: 24, name: "selected_browsers", kind: "message", T: SelectedBrowser, repeated: true },
  { no: 25, name: "selected_documents", kind: "message", T: SelectedDocument, repeated: true },
  { no: 26, name: "selected_skills", kind: "message", T: AgentSkill, repeated: true },
  { no: 27, name: "recent_agents_context", kind: "message", T: RecentAgentsContext, opt: true },
  { no: 34, name: "selected_agentic_git_action", kind: "message", T: SelectedAgenticGitAction, opt: true }
]);
var InvocationContext$Runtime = (() => class _InvocationContext extends Message<_InvocationContext> {
  declare data: { case: "slackThread"; value: InvocationContext_SlackThread } | { case: "githubPr"; value: InvocationContext_GithubPR } | { case: "ideState"; value: InvocationContext_IdeState } | { case: "microsoftTeamsThread"; value: InvocationContext_MicrosoftTeamsThread } | { case: "blobId"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InvocationContext>) {
    super();
    this.data = { case: void 0 };
    proto3.util.initPartial(data, this as _InvocationContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext {
    return new _InvocationContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext {
    return new _InvocationContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext {
    return new _InvocationContext().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext | PlainMessage<_InvocationContext> | undefined | null, b2: _InvocationContext | PlainMessage<_InvocationContext> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext as unknown as MessageType<_InvocationContext>, a, b2);
  }
})();
export type InvocationContext = InstanceType<typeof InvocationContext$Runtime>;
var InvocationContext: MessageType<InvocationContext> = InvocationContext$Runtime as unknown as MessageType<InvocationContext>;
(InvocationContext as MutableMessageType<InvocationContext>).runtime = proto3;
(InvocationContext as MutableMessageType<InvocationContext>).typeName = "agent.v1.InvocationContext";
(InvocationContext as MutableMessageType<InvocationContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "slack_thread", kind: "message", T: InvocationContext_SlackThread, oneof: "data" },
  { no: 2, name: "github_pr", kind: "message", T: InvocationContext_GithubPR, oneof: "data" },
  { no: 3, name: "ide_state", kind: "message", T: InvocationContext_IdeState, oneof: "data" },
  { no: 4, name: "microsoft_teams_thread", kind: "message", T: InvocationContext_MicrosoftTeamsThread, oneof: "data" },
  { no: 10, name: "blob_id", kind: "scalar", T: 12, oneof: "data" }
]);
var InvocationContext_SlackThread$Runtime = (() => class _InvocationContext_SlackThread extends Message<_InvocationContext_SlackThread> {
  declare thread: string;
  declare channelName?: string;
  declare channelPurpose?: string;
  declare channelTopic?: string;
  declare senderName?: string;
  declare senderId?: string;
  declare senderType?: string;
  declare isDirectlyAddressed?: boolean;
  constructor(data?: PartialMessage<_InvocationContext_SlackThread>) {
    super();
    this.thread = "";
    proto3.util.initPartial(data, this as _InvocationContext_SlackThread);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_SlackThread {
    return new _InvocationContext_SlackThread().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_SlackThread {
    return new _InvocationContext_SlackThread().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_SlackThread {
    return new _InvocationContext_SlackThread().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_SlackThread | PlainMessage<_InvocationContext_SlackThread> | undefined | null, b2: _InvocationContext_SlackThread | PlainMessage<_InvocationContext_SlackThread> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_SlackThread as unknown as MessageType<_InvocationContext_SlackThread>, a, b2);
  }
})();
export type InvocationContext_SlackThread = InstanceType<typeof InvocationContext_SlackThread$Runtime>;
var InvocationContext_SlackThread: MessageType<InvocationContext_SlackThread> = InvocationContext_SlackThread$Runtime as unknown as MessageType<InvocationContext_SlackThread>;
(InvocationContext_SlackThread as MutableMessageType<InvocationContext_SlackThread>).runtime = proto3;
(InvocationContext_SlackThread as MutableMessageType<InvocationContext_SlackThread>).typeName = "agent.v1.InvocationContext.SlackThread";
(InvocationContext_SlackThread as MutableMessageType<InvocationContext_SlackThread>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "thread",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "channel_purpose", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "channel_topic", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "sender_name", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "sender_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "sender_type", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "is_directly_addressed", kind: "scalar", T: 8, opt: true }
]);
var InvocationContext_MicrosoftTeamsThread$Runtime = (() => class _InvocationContext_MicrosoftTeamsThread extends Message<_InvocationContext_MicrosoftTeamsThread> {
  declare thread: string;
  declare channelName?: string;
  declare teamName?: string;
  declare channelDescription?: string;
  declare teamDescription?: string;
  constructor(data?: PartialMessage<_InvocationContext_MicrosoftTeamsThread>) {
    super();
    this.thread = "";
    proto3.util.initPartial(data, this as _InvocationContext_MicrosoftTeamsThread);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_MicrosoftTeamsThread {
    return new _InvocationContext_MicrosoftTeamsThread().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_MicrosoftTeamsThread {
    return new _InvocationContext_MicrosoftTeamsThread().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_MicrosoftTeamsThread {
    return new _InvocationContext_MicrosoftTeamsThread().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_MicrosoftTeamsThread | PlainMessage<_InvocationContext_MicrosoftTeamsThread> | undefined | null, b2: _InvocationContext_MicrosoftTeamsThread | PlainMessage<_InvocationContext_MicrosoftTeamsThread> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_MicrosoftTeamsThread as unknown as MessageType<_InvocationContext_MicrosoftTeamsThread>, a, b2);
  }
})();
export type InvocationContext_MicrosoftTeamsThread = InstanceType<typeof InvocationContext_MicrosoftTeamsThread$Runtime>;
var InvocationContext_MicrosoftTeamsThread: MessageType<InvocationContext_MicrosoftTeamsThread> = InvocationContext_MicrosoftTeamsThread$Runtime as unknown as MessageType<InvocationContext_MicrosoftTeamsThread>;
(InvocationContext_MicrosoftTeamsThread as MutableMessageType<InvocationContext_MicrosoftTeamsThread>).runtime = proto3;
(InvocationContext_MicrosoftTeamsThread as MutableMessageType<InvocationContext_MicrosoftTeamsThread>).typeName = "agent.v1.InvocationContext.MicrosoftTeamsThread";
(InvocationContext_MicrosoftTeamsThread as MutableMessageType<InvocationContext_MicrosoftTeamsThread>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "thread",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channel_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "team_name", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "channel_description", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "team_description", kind: "scalar", T: 9, opt: true }
]);
var InvocationContext_GithubPR$Runtime = (() => class _InvocationContext_GithubPR extends Message<_InvocationContext_GithubPR> {
  declare title: string;
  declare description: string;
  declare comments: string;
  declare ciFailures?: string;
  constructor(data?: PartialMessage<_InvocationContext_GithubPR>) {
    super();
    this.title = "";
    this.description = "";
    this.comments = "";
    proto3.util.initPartial(data, this as _InvocationContext_GithubPR);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_GithubPR {
    return new _InvocationContext_GithubPR().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_GithubPR {
    return new _InvocationContext_GithubPR().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_GithubPR {
    return new _InvocationContext_GithubPR().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_GithubPR | PlainMessage<_InvocationContext_GithubPR> | undefined | null, b2: _InvocationContext_GithubPR | PlainMessage<_InvocationContext_GithubPR> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_GithubPR as unknown as MessageType<_InvocationContext_GithubPR>, a, b2);
  }
})();
export type InvocationContext_GithubPR = InstanceType<typeof InvocationContext_GithubPR$Runtime>;
var InvocationContext_GithubPR: MessageType<InvocationContext_GithubPR> = InvocationContext_GithubPR$Runtime as unknown as MessageType<InvocationContext_GithubPR>;
(InvocationContext_GithubPR as MutableMessageType<InvocationContext_GithubPR>).runtime = proto3;
(InvocationContext_GithubPR as MutableMessageType<InvocationContext_GithubPR>).typeName = "agent.v1.InvocationContext.GithubPR";
(InvocationContext_GithubPR as MutableMessageType<InvocationContext_GithubPR>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "comments",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "ci_failures", kind: "scalar", T: 9, opt: true }
]);
var InvocationContext_IdeState$Runtime = (() => class _InvocationContext_IdeState extends Message<_InvocationContext_IdeState> {
  declare visibleFiles: InvocationContext_IdeState_File[];
  declare recentlyViewedFiles: InvocationContext_IdeState_File[];
  declare currentlyViewedPrs: InvocationContext_IdeState_ViewedPullRequest[];
  constructor(data?: PartialMessage<_InvocationContext_IdeState>) {
    super();
    this.visibleFiles = [];
    this.recentlyViewedFiles = [];
    this.currentlyViewedPrs = [];
    proto3.util.initPartial(data, this as _InvocationContext_IdeState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_IdeState {
    return new _InvocationContext_IdeState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState {
    return new _InvocationContext_IdeState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState {
    return new _InvocationContext_IdeState().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_IdeState | PlainMessage<_InvocationContext_IdeState> | undefined | null, b2: _InvocationContext_IdeState | PlainMessage<_InvocationContext_IdeState> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_IdeState as unknown as MessageType<_InvocationContext_IdeState>, a, b2);
  }
})();
export type InvocationContext_IdeState = InstanceType<typeof InvocationContext_IdeState$Runtime>;
var InvocationContext_IdeState: MessageType<InvocationContext_IdeState> = InvocationContext_IdeState$Runtime as unknown as MessageType<InvocationContext_IdeState>;
(InvocationContext_IdeState as MutableMessageType<InvocationContext_IdeState>).runtime = proto3;
(InvocationContext_IdeState as MutableMessageType<InvocationContext_IdeState>).typeName = "agent.v1.InvocationContext.IdeState";
(InvocationContext_IdeState as MutableMessageType<InvocationContext_IdeState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "visible_files", kind: "message", T: InvocationContext_IdeState_File, repeated: true },
  { no: 2, name: "recently_viewed_files", kind: "message", T: InvocationContext_IdeState_File, repeated: true },
  { no: 3, name: "currently_viewed_prs", kind: "message", T: InvocationContext_IdeState_ViewedPullRequest, repeated: true }
]);
var InvocationContext_IdeState_File$Runtime = (() => class _InvocationContext_IdeState_File extends Message<_InvocationContext_IdeState_File> {
  declare path: string;
  declare relativePath?: string;
  declare cursorPosition?: InvocationContext_IdeState_File_CursorPosition;
  declare totalLines: number;
  declare activeCommand?: string;
  constructor(data?: PartialMessage<_InvocationContext_IdeState_File>) {
    super();
    this.path = "";
    this.totalLines = 0;
    proto3.util.initPartial(data, this as _InvocationContext_IdeState_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_IdeState_File {
    return new _InvocationContext_IdeState_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_File {
    return new _InvocationContext_IdeState_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_File {
    return new _InvocationContext_IdeState_File().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_IdeState_File | PlainMessage<_InvocationContext_IdeState_File> | undefined | null, b2: _InvocationContext_IdeState_File | PlainMessage<_InvocationContext_IdeState_File> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_IdeState_File as unknown as MessageType<_InvocationContext_IdeState_File>, a, b2);
  }
})();
export type InvocationContext_IdeState_File = InstanceType<typeof InvocationContext_IdeState_File$Runtime>;
var InvocationContext_IdeState_File: MessageType<InvocationContext_IdeState_File> = InvocationContext_IdeState_File$Runtime as unknown as MessageType<InvocationContext_IdeState_File>;
(InvocationContext_IdeState_File as MutableMessageType<InvocationContext_IdeState_File>).runtime = proto3;
(InvocationContext_IdeState_File as MutableMessageType<InvocationContext_IdeState_File>).typeName = "agent.v1.InvocationContext.IdeState.File";
(InvocationContext_IdeState_File as MutableMessageType<InvocationContext_IdeState_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "relative_path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "cursor_position", kind: "message", T: InvocationContext_IdeState_File_CursorPosition, opt: true },
  {
    no: 4,
    name: "total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "active_command", kind: "scalar", T: 9, opt: true }
]);
var InvocationContext_IdeState_File_CursorPosition$Runtime = (() => class _InvocationContext_IdeState_File_CursorPosition extends Message<_InvocationContext_IdeState_File_CursorPosition> {
  declare line: number;
  declare text: string;
  constructor(data?: PartialMessage<_InvocationContext_IdeState_File_CursorPosition>) {
    super();
    this.line = 0;
    this.text = "";
    proto3.util.initPartial(data, this as _InvocationContext_IdeState_File_CursorPosition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_IdeState_File_CursorPosition {
    return new _InvocationContext_IdeState_File_CursorPosition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_File_CursorPosition {
    return new _InvocationContext_IdeState_File_CursorPosition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_File_CursorPosition {
    return new _InvocationContext_IdeState_File_CursorPosition().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_IdeState_File_CursorPosition | PlainMessage<_InvocationContext_IdeState_File_CursorPosition> | undefined | null, b2: _InvocationContext_IdeState_File_CursorPosition | PlainMessage<_InvocationContext_IdeState_File_CursorPosition> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_IdeState_File_CursorPosition as unknown as MessageType<_InvocationContext_IdeState_File_CursorPosition>, a, b2);
  }
})();
export type InvocationContext_IdeState_File_CursorPosition = InstanceType<typeof InvocationContext_IdeState_File_CursorPosition$Runtime>;
var InvocationContext_IdeState_File_CursorPosition: MessageType<InvocationContext_IdeState_File_CursorPosition> = InvocationContext_IdeState_File_CursorPosition$Runtime as unknown as MessageType<InvocationContext_IdeState_File_CursorPosition>;
(InvocationContext_IdeState_File_CursorPosition as MutableMessageType<InvocationContext_IdeState_File_CursorPosition>).runtime = proto3;
(InvocationContext_IdeState_File_CursorPosition as MutableMessageType<InvocationContext_IdeState_File_CursorPosition>).typeName = "agent.v1.InvocationContext.IdeState.File.CursorPosition";
(InvocationContext_IdeState_File_CursorPosition as MutableMessageType<InvocationContext_IdeState_File_CursorPosition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InvocationContext_IdeState_ViewedPullRequest$Runtime = (() => class _InvocationContext_IdeState_ViewedPullRequest extends Message<_InvocationContext_IdeState_ViewedPullRequest> {
  declare number: number;
  declare url: string;
  declare title?: string;
  declare folderPath?: string;
  declare summaryJson?: string;
  declare description?: string;
  constructor(data?: PartialMessage<_InvocationContext_IdeState_ViewedPullRequest>) {
    super();
    this.number = 0;
    this.url = "";
    proto3.util.initPartial(data, this as _InvocationContext_IdeState_ViewedPullRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InvocationContext_IdeState_ViewedPullRequest {
    return new _InvocationContext_IdeState_ViewedPullRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_ViewedPullRequest {
    return new _InvocationContext_IdeState_ViewedPullRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InvocationContext_IdeState_ViewedPullRequest {
    return new _InvocationContext_IdeState_ViewedPullRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _InvocationContext_IdeState_ViewedPullRequest | PlainMessage<_InvocationContext_IdeState_ViewedPullRequest> | undefined | null, b2: _InvocationContext_IdeState_ViewedPullRequest | PlainMessage<_InvocationContext_IdeState_ViewedPullRequest> | undefined | null): boolean {
    return proto3.util.equals(_InvocationContext_IdeState_ViewedPullRequest as unknown as MessageType<_InvocationContext_IdeState_ViewedPullRequest>, a, b2);
  }
})();
export type InvocationContext_IdeState_ViewedPullRequest = InstanceType<typeof InvocationContext_IdeState_ViewedPullRequest$Runtime>;
var InvocationContext_IdeState_ViewedPullRequest: MessageType<InvocationContext_IdeState_ViewedPullRequest> = InvocationContext_IdeState_ViewedPullRequest$Runtime as unknown as MessageType<InvocationContext_IdeState_ViewedPullRequest>;
(InvocationContext_IdeState_ViewedPullRequest as MutableMessageType<InvocationContext_IdeState_ViewedPullRequest>).runtime = proto3;
(InvocationContext_IdeState_ViewedPullRequest as MutableMessageType<InvocationContext_IdeState_ViewedPullRequest>).typeName = "agent.v1.InvocationContext.IdeState.ViewedPullRequest";
(InvocationContext_IdeState_ViewedPullRequest as MutableMessageType<InvocationContext_IdeState_ViewedPullRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "folder_path", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "summary_json", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "description", kind: "scalar", T: 9, opt: true }
]);


export { SelectedPluginCapabilityType, SelectedImage, SelectedImage_BlobIdWithData, SelectedImage_Dimension, PromptUploadRef, SelectedDocument, SelectedDocument_BlobIdWithData, SelectedVideo, SelectedVideo_BlobIdWithData, SelectedVideo_SignedUrl, ExtraContextEntry, SelectedFile, SelectedCodeSelection, SelectedTerminal, SelectedTerminalSelection, SelectedFolder, SelectedExternalLink, SelectedCursorRule, SelectedGitDiff, SelectedGitDiffFromBranchToMain, SelectedGitCommit, SelectedPullRequest, SelectedGitPRDiffSelection, SelectedPluginCapabilityRef, SelectedCursorCommand, SelectedDocumentation, SelectedPastChat, RecentAgent, RecentAgentsContext, CallFrame, StackTrace, SelectedConsoleLog, SelectedUIElement, SelectedSubagent, SelectedBrowser, SelectedAgenticGitActionCommitParams, SelectedAgenticGitActionCreateBranchParams, SelectedAgenticGitFileWithStatus, SelectedAgenticGitActionPushParams, SelectedAgenticGitActionFixMergeConflictsParams, SelectedAgenticGitActionBabysitPrInCloudParams, SelectedAgenticGitActionUpdateBranchParams, SelectedAgenticGitActionPullLocallyParams, SelectedAgenticGitAction, SelectedGitBranchContext, SelectedContext, InvocationContext, InvocationContext_SlackThread, InvocationContext_MicrosoftTeamsThread, InvocationContext_GithubPR, InvocationContext_IdeState, InvocationContext_IdeState_File, InvocationContext_IdeState_File_CursorPosition, InvocationContext_IdeState_ViewedPullRequest };
