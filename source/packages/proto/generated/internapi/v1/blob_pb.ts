/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:416019-416149
 * Region SHA-256: 6e7a530d7abfd326e0efce125833df814d30adb215f5b1eafc78bcf636c5bec8
 * BackgroundComposer closure exports: 3 messages + 1 enums = 4
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type BlobType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
var BlobType: {
  "UNSPECIFIED": 0;
  "IMAGE": 1;
  "INVOCATION_CONTEXT": 2;
  "EXTRA_CONTEXT": 3;
  "GIT_PR_DIFF_SELECTION": 4;
  "SELECTED_PULL_REQUEST": 5;
  "TEXT": 6;
  "RICH_TEXT": 7;
  "EXTERNAL_LINK_PDF": 8;
  "DOCUMENT": 9;
  "VIDEO": 10;
  0: "UNSPECIFIED";
  1: "IMAGE";
  2: "INVOCATION_CONTEXT";
  3: "EXTRA_CONTEXT";
  4: "GIT_PR_DIFF_SELECTION";
  5: "SELECTED_PULL_REQUEST";
  6: "TEXT";
  7: "RICH_TEXT";
  8: "EXTERNAL_LINK_PDF";
  9: "DOCUMENT";
  10: "VIDEO";
};
(function(BlobType2) {
  BlobType2[BlobType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BlobType2[BlobType2["IMAGE"] = 1] = "IMAGE";
  BlobType2[BlobType2["INVOCATION_CONTEXT"] = 2] = "INVOCATION_CONTEXT";
  BlobType2[BlobType2["EXTRA_CONTEXT"] = 3] = "EXTRA_CONTEXT";
  BlobType2[BlobType2["GIT_PR_DIFF_SELECTION"] = 4] = "GIT_PR_DIFF_SELECTION";
  BlobType2[BlobType2["SELECTED_PULL_REQUEST"] = 5] = "SELECTED_PULL_REQUEST";
  BlobType2[BlobType2["TEXT"] = 6] = "TEXT";
  BlobType2[BlobType2["RICH_TEXT"] = 7] = "RICH_TEXT";
  BlobType2[BlobType2["EXTERNAL_LINK_PDF"] = 8] = "EXTERNAL_LINK_PDF";
  BlobType2[BlobType2["DOCUMENT"] = 9] = "DOCUMENT";
  BlobType2[BlobType2["VIDEO"] = 10] = "VIDEO";
})(BlobType! || (BlobType = {} as typeof BlobType));
proto3.util.setEnumType(BlobType, "internapi.v1.BlobType", [
  { no: 0, name: "BLOB_TYPE_UNSPECIFIED" },
  { no: 1, name: "BLOB_TYPE_IMAGE" },
  { no: 2, name: "BLOB_TYPE_INVOCATION_CONTEXT" },
  { no: 3, name: "BLOB_TYPE_EXTRA_CONTEXT" },
  { no: 4, name: "BLOB_TYPE_GIT_PR_DIFF_SELECTION" },
  { no: 5, name: "BLOB_TYPE_SELECTED_PULL_REQUEST" },
  { no: 6, name: "BLOB_TYPE_TEXT" },
  { no: 7, name: "BLOB_TYPE_RICH_TEXT" },
  { no: 8, name: "BLOB_TYPE_EXTERNAL_LINK_PDF" },
  { no: 9, name: "BLOB_TYPE_DOCUMENT" },
  { no: 10, name: "BLOB_TYPE_VIDEO" }
]);
var ImageBlobData$Runtime = (() => class _ImageBlobData extends Message<_ImageBlobData> {
  declare mimeType: string;
  constructor(data?: PartialMessage<_ImageBlobData>) {
    super();
    this.mimeType = "";
    proto3.util.initPartial(data, this as _ImageBlobData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ImageBlobData {
    return new _ImageBlobData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ImageBlobData {
    return new _ImageBlobData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ImageBlobData {
    return new _ImageBlobData().fromJsonString(jsonString, options);
  }
  static equals(a: _ImageBlobData | PlainMessage<_ImageBlobData> | undefined | null, b2: _ImageBlobData | PlainMessage<_ImageBlobData> | undefined | null): boolean {
    return proto3.util.equals(_ImageBlobData as unknown as MessageType<_ImageBlobData>, a, b2);
  }
})();
export type ImageBlobData = InstanceType<typeof ImageBlobData$Runtime>;
var ImageBlobData: MessageType<ImageBlobData> = ImageBlobData$Runtime as unknown as MessageType<ImageBlobData>;
(ImageBlobData as MutableMessageType<ImageBlobData>).runtime = proto3;
(ImageBlobData as MutableMessageType<ImageBlobData>).typeName = "internapi.v1.ImageBlobData";
(ImageBlobData as MutableMessageType<ImageBlobData>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "mime_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BlobData$Runtime = (() => class _BlobData extends Message<_BlobData> {
  declare blobType: BlobType;
  declare blobId: Uint8Array;
  declare index: number;
  declare typeSpecificData: { case: "imageData"; value: ImageBlobData } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BlobData>) {
    super();
    this.blobType = BlobType.UNSPECIFIED;
    this.blobId = new Uint8Array(0);
    this.index = 0;
    this.typeSpecificData = { case: void 0 };
    proto3.util.initPartial(data, this as _BlobData);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlobData {
    return new _BlobData().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlobData {
    return new _BlobData().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlobData {
    return new _BlobData().fromJsonString(jsonString, options);
  }
  static equals(a: _BlobData | PlainMessage<_BlobData> | undefined | null, b2: _BlobData | PlainMessage<_BlobData> | undefined | null): boolean {
    return proto3.util.equals(_BlobData as unknown as MessageType<_BlobData>, a, b2);
  }
})();
export type BlobData = InstanceType<typeof BlobData$Runtime>;
var BlobData: MessageType<BlobData> = BlobData$Runtime as unknown as MessageType<BlobData>;
(BlobData as MutableMessageType<BlobData>).runtime = proto3;
(BlobData as MutableMessageType<BlobData>).typeName = "internapi.v1.BlobData";
(BlobData as MutableMessageType<BlobData>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_type", kind: "enum", T: proto3.getEnumType(BlobType) },
  {
    no: 2,
    name: "blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 3,
    name: "index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "image_data", kind: "message", T: ImageBlobData, oneof: "type_specific_data" }
]);
var BlobDataPerMessage$Runtime = (() => class _BlobDataPerMessage extends Message<_BlobDataPerMessage> {
  declare blobData: BlobData[];
  constructor(data?: PartialMessage<_BlobDataPerMessage>) {
    super();
    this.blobData = [];
    proto3.util.initPartial(data, this as _BlobDataPerMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BlobDataPerMessage {
    return new _BlobDataPerMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BlobDataPerMessage {
    return new _BlobDataPerMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BlobDataPerMessage {
    return new _BlobDataPerMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _BlobDataPerMessage | PlainMessage<_BlobDataPerMessage> | undefined | null, b2: _BlobDataPerMessage | PlainMessage<_BlobDataPerMessage> | undefined | null): boolean {
    return proto3.util.equals(_BlobDataPerMessage as unknown as MessageType<_BlobDataPerMessage>, a, b2);
  }
})();
export type BlobDataPerMessage = InstanceType<typeof BlobDataPerMessage$Runtime>;
var BlobDataPerMessage: MessageType<BlobDataPerMessage> = BlobDataPerMessage$Runtime as unknown as MessageType<BlobDataPerMessage>;
(BlobDataPerMessage as MutableMessageType<BlobDataPerMessage>).runtime = proto3;
(BlobDataPerMessage as MutableMessageType<BlobDataPerMessage>).typeName = "internapi.v1.BlobDataPerMessage";
(BlobDataPerMessage as MutableMessageType<BlobDataPerMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "blob_data", kind: "message", T: BlobData, repeated: true }
]);


export { BlobType, ImageBlobData, BlobData, BlobDataPerMessage };
