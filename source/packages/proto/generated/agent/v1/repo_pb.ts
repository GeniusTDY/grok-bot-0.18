/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:16959-17050
 * Region SHA-256: ae5cad1280cc8a25c966b7caef1b932ea410b9a682adfbacce69a89c7d200b5b
 * Atomic B1 exports: 1 messages + 0 enums = 1
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var RepositoryIndexingInfo$Runtime = (() => class _RepositoryIndexingInfo extends Message<_RepositoryIndexingInfo> {
  declare relativeWorkspacePath: string;
  declare remoteUrls: string[];
  declare remoteNames: string[];
  declare repoName: string;
  declare repoOwner: string;
  declare isTracked: boolean;
  declare isLocal: boolean;
  declare orthogonalTransformSeed?: number;
  declare workspaceUri: string;
  declare pathEncryptionKey: string;
  constructor(data?: PartialMessage<_RepositoryIndexingInfo>) {
    super();
    this.relativeWorkspacePath = "";
    this.remoteUrls = [];
    this.remoteNames = [];
    this.repoName = "";
    this.repoOwner = "";
    this.isTracked = false;
    this.isLocal = false;
    this.workspaceUri = "";
    this.pathEncryptionKey = "";
    proto3.util.initPartial(data, this as _RepositoryIndexingInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RepositoryIndexingInfo {
    return new _RepositoryIndexingInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RepositoryIndexingInfo {
    return new _RepositoryIndexingInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RepositoryIndexingInfo {
    return new _RepositoryIndexingInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _RepositoryIndexingInfo | PlainMessage<_RepositoryIndexingInfo> | undefined | null, b2: _RepositoryIndexingInfo | PlainMessage<_RepositoryIndexingInfo> | undefined | null): boolean {
    return proto3.util.equals(_RepositoryIndexingInfo as unknown as MessageType<_RepositoryIndexingInfo>, a, b2);
  }
})();
export type RepositoryIndexingInfo = InstanceType<typeof RepositoryIndexingInfo$Runtime>;
var RepositoryIndexingInfo: MessageType<RepositoryIndexingInfo> = RepositoryIndexingInfo$Runtime as unknown as MessageType<RepositoryIndexingInfo>;
(RepositoryIndexingInfo as MutableMessageType<RepositoryIndexingInfo>).runtime = proto3;
(RepositoryIndexingInfo as MutableMessageType<RepositoryIndexingInfo>).typeName = "agent.v1.RepositoryIndexingInfo";
(RepositoryIndexingInfo as MutableMessageType<RepositoryIndexingInfo>).fields = proto3.util.newFieldList(() => [
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
  { no: 8, name: "orthogonal_transform_seed", kind: "scalar", T: 1, opt: true },
  {
    no: 9,
    name: "workspace_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "path_encryption_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { RepositoryIndexingInfo };
