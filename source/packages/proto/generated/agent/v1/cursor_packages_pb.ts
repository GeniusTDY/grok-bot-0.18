/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:16627-16754
 * Region SHA-256: 7da5db8d048cb083d81e13f72f0a828a110594896f34026b1e1c43ac212d031b
 * Atomic B1 exports: 2 messages + 1 enums = 3
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type PackageType = 0 | 1 | 2 | 3 | 4;
var PackageType: {
  "UNSPECIFIED": 0;
  "CURSOR_PROJECT": 1;
  "CURSOR_PERSONAL": 2;
  "CLAUDE_SKILL": 3;
  "CLAUDE_PLUGIN": 4;
  0: "UNSPECIFIED";
  1: "CURSOR_PROJECT";
  2: "CURSOR_PERSONAL";
  3: "CLAUDE_SKILL";
  4: "CLAUDE_PLUGIN";
};
(function(PackageType2) {
  PackageType2[PackageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PackageType2[PackageType2["CURSOR_PROJECT"] = 1] = "CURSOR_PROJECT";
  PackageType2[PackageType2["CURSOR_PERSONAL"] = 2] = "CURSOR_PERSONAL";
  PackageType2[PackageType2["CLAUDE_SKILL"] = 3] = "CLAUDE_SKILL";
  PackageType2[PackageType2["CLAUDE_PLUGIN"] = 4] = "CLAUDE_PLUGIN";
})(PackageType! || (PackageType = {} as typeof PackageType));
proto3.util.setEnumType(PackageType, "agent.v1.PackageType", [
  { no: 0, name: "PACKAGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "PACKAGE_TYPE_CURSOR_PROJECT" },
  { no: 2, name: "PACKAGE_TYPE_CURSOR_PERSONAL" },
  { no: 3, name: "PACKAGE_TYPE_CLAUDE_SKILL" },
  { no: 4, name: "PACKAGE_TYPE_CLAUDE_PLUGIN" }
]);
var CursorPackagePrompt$Runtime = (() => class _CursorPackagePrompt extends Message<_CursorPackagePrompt> {
  declare name: string;
  declare filePath: string;
  constructor(data?: PartialMessage<_CursorPackagePrompt>) {
    super();
    this.name = "";
    this.filePath = "";
    proto3.util.initPartial(data, this as _CursorPackagePrompt);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorPackagePrompt {
    return new _CursorPackagePrompt().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorPackagePrompt {
    return new _CursorPackagePrompt().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorPackagePrompt {
    return new _CursorPackagePrompt().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorPackagePrompt | PlainMessage<_CursorPackagePrompt> | undefined | null, b2: _CursorPackagePrompt | PlainMessage<_CursorPackagePrompt> | undefined | null): boolean {
    return proto3.util.equals(_CursorPackagePrompt as unknown as MessageType<_CursorPackagePrompt>, a, b2);
  }
})();
export type CursorPackagePrompt = InstanceType<typeof CursorPackagePrompt$Runtime>;
var CursorPackagePrompt: MessageType<CursorPackagePrompt> = CursorPackagePrompt$Runtime as unknown as MessageType<CursorPackagePrompt>;
(CursorPackagePrompt as MutableMessageType<CursorPackagePrompt>).runtime = proto3;
(CursorPackagePrompt as MutableMessageType<CursorPackagePrompt>).typeName = "agent.v1.CursorPackagePrompt";
(CursorPackagePrompt as MutableMessageType<CursorPackagePrompt>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
  }
]);
var CursorPackage$Runtime = (() => class _CursorPackage extends Message<_CursorPackage> {
  declare name: string;
  declare description: string;
  declare folderPath: string;
  declare enabled: boolean;
  declare parseError?: string;
  declare prompts: CursorPackagePrompt[];
  declare readmeFilePath: string;
  declare packageType: PackageType;
  constructor(data?: PartialMessage<_CursorPackage>) {
    super();
    this.name = "";
    this.description = "";
    this.folderPath = "";
    this.enabled = false;
    this.prompts = [];
    this.readmeFilePath = "";
    this.packageType = PackageType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CursorPackage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CursorPackage {
    return new _CursorPackage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CursorPackage {
    return new _CursorPackage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CursorPackage {
    return new _CursorPackage().fromJsonString(jsonString, options);
  }
  static equals(a: _CursorPackage | PlainMessage<_CursorPackage> | undefined | null, b2: _CursorPackage | PlainMessage<_CursorPackage> | undefined | null): boolean {
    return proto3.util.equals(_CursorPackage as unknown as MessageType<_CursorPackage>, a, b2);
  }
})();
export type CursorPackage = InstanceType<typeof CursorPackage$Runtime>;
var CursorPackage: MessageType<CursorPackage> = CursorPackage$Runtime as unknown as MessageType<CursorPackage>;
(CursorPackage as MutableMessageType<CursorPackage>).runtime = proto3;
(CursorPackage as MutableMessageType<CursorPackage>).typeName = "agent.v1.CursorPackage";
(CursorPackage as MutableMessageType<CursorPackage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
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
    name: "folder_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "parse_error", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "prompts", kind: "message", T: CursorPackagePrompt, repeated: true },
  {
    no: 7,
    name: "readme_file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "package_type", kind: "enum", T: proto3.getEnumType(PackageType) }
]);


export { PackageType, CursorPackagePrompt, CursorPackage };
