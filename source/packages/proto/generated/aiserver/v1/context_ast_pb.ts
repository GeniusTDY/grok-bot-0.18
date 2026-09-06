/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:181084-181341
 * Region SHA-256: a9d641d5c1e0cc8fb4376a7a199e335cb8adacd6a9e17aae1a07a58382f394f1
 * AI Server closure exports: 7 messages + 0 enums = 7
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ContextAST$Runtime = (() => class _ContextAST extends Message<_ContextAST> {
  declare files: ContainerTree[];
  constructor(data?: PartialMessage<_ContextAST>) {
    super();
    this.files = [];
    proto3.util.initPartial(data, this as _ContextAST);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextAST {
    return new _ContextAST().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextAST {
    return new _ContextAST().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextAST {
    return new _ContextAST().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextAST | PlainMessage<_ContextAST> | undefined | null, b2: _ContextAST | PlainMessage<_ContextAST> | undefined | null): boolean {
    return proto3.util.equals(_ContextAST as unknown as MessageType<_ContextAST>, a, b2);
  }
})();
export type ContextAST = InstanceType<typeof ContextAST$Runtime>;
var ContextAST: MessageType<ContextAST> = ContextAST$Runtime as unknown as MessageType<ContextAST>;
(ContextAST as MutableMessageType<ContextAST>).runtime = proto3;
(ContextAST as MutableMessageType<ContextAST>).typeName = "aiserver.v1.ContextAST";
(ContextAST as MutableMessageType<ContextAST>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: ContainerTree, repeated: true }
]);
var ContainerTree$Runtime = (() => class _ContainerTree extends Message<_ContainerTree> {
  declare relativeWorkspacePath: string;
  declare nodes: ContainerTreeNode[];
  constructor(data?: PartialMessage<_ContainerTree>) {
    super();
    this.relativeWorkspacePath = "";
    this.nodes = [];
    proto3.util.initPartial(data, this as _ContainerTree);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTree {
    return new _ContainerTree().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTree {
    return new _ContainerTree().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTree {
    return new _ContainerTree().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTree | PlainMessage<_ContainerTree> | undefined | null, b2: _ContainerTree | PlainMessage<_ContainerTree> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTree as unknown as MessageType<_ContainerTree>, a, b2);
  }
})();
export type ContainerTree = InstanceType<typeof ContainerTree$Runtime>;
var ContainerTree: MessageType<ContainerTree> = ContainerTree$Runtime as unknown as MessageType<ContainerTree>;
(ContainerTree as MutableMessageType<ContainerTree>).runtime = proto3;
(ContainerTree as MutableMessageType<ContainerTree>).typeName = "aiserver.v1.ContainerTree";
(ContainerTree as MutableMessageType<ContainerTree>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "nodes", kind: "message", T: ContainerTreeNode, repeated: true }
]);
var ContainerTreeNode$Runtime = (() => class _ContainerTreeNode extends Message<_ContainerTreeNode> {
  declare node: { case: "container"; value: ContainerTreeNode_Container } | { case: "blob"; value: ContainerTreeNode_Blob } | { case: "symbol"; value: ContainerTreeNode_Symbol } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ContainerTreeNode>) {
    super();
    this.node = { case: void 0 };
    proto3.util.initPartial(data, this as _ContainerTreeNode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTreeNode {
    return new _ContainerTreeNode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTreeNode {
    return new _ContainerTreeNode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTreeNode {
    return new _ContainerTreeNode().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTreeNode | PlainMessage<_ContainerTreeNode> | undefined | null, b2: _ContainerTreeNode | PlainMessage<_ContainerTreeNode> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTreeNode as unknown as MessageType<_ContainerTreeNode>, a, b2);
  }
})();
export interface ContainerTreeNode extends Message<ContainerTreeNode> {
  node: { case: "container"; value: ContainerTreeNode_Container } | { case: "blob"; value: ContainerTreeNode_Blob } | { case: "symbol"; value: ContainerTreeNode_Symbol } | { case: undefined; value?: undefined };
}
var ContainerTreeNode: MessageType<ContainerTreeNode> = ContainerTreeNode$Runtime as unknown as MessageType<ContainerTreeNode>;
(ContainerTreeNode as MutableMessageType<ContainerTreeNode>).runtime = proto3;
(ContainerTreeNode as MutableMessageType<ContainerTreeNode>).typeName = "aiserver.v1.ContainerTreeNode";
(ContainerTreeNode as MutableMessageType<ContainerTreeNode>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "container", kind: "message", T: ContainerTreeNode_Container, oneof: "node" },
  { no: 2, name: "blob", kind: "message", T: ContainerTreeNode_Blob, oneof: "node" },
  { no: 3, name: "symbol", kind: "message", T: ContainerTreeNode_Symbol, oneof: "node" }
]);
var ContainerTreeNode_Symbol$Runtime = (() => class _ContainerTreeNode_Symbol extends Message<_ContainerTreeNode_Symbol> {
  declare docString: string;
  declare value: string;
  declare references: ContainerTreeNode_Reference[];
  declare score: number;
  constructor(data?: PartialMessage<_ContainerTreeNode_Symbol>) {
    super();
    this.docString = "";
    this.value = "";
    this.references = [];
    this.score = 0;
    proto3.util.initPartial(data, this as _ContainerTreeNode_Symbol);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTreeNode_Symbol {
    return new _ContainerTreeNode_Symbol().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Symbol {
    return new _ContainerTreeNode_Symbol().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Symbol {
    return new _ContainerTreeNode_Symbol().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTreeNode_Symbol | PlainMessage<_ContainerTreeNode_Symbol> | undefined | null, b2: _ContainerTreeNode_Symbol | PlainMessage<_ContainerTreeNode_Symbol> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTreeNode_Symbol as unknown as MessageType<_ContainerTreeNode_Symbol>, a, b2);
  }
})();
export type ContainerTreeNode_Symbol = InstanceType<typeof ContainerTreeNode_Symbol$Runtime>;
var ContainerTreeNode_Symbol: MessageType<ContainerTreeNode_Symbol> = ContainerTreeNode_Symbol$Runtime as unknown as MessageType<ContainerTreeNode_Symbol>;
(ContainerTreeNode_Symbol as MutableMessageType<ContainerTreeNode_Symbol>).runtime = proto3;
(ContainerTreeNode_Symbol as MutableMessageType<ContainerTreeNode_Symbol>).typeName = "aiserver.v1.ContainerTreeNode.Symbol";
(ContainerTreeNode_Symbol as MutableMessageType<ContainerTreeNode_Symbol>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "references", kind: "message", T: ContainerTreeNode_Reference, repeated: true },
  {
    no: 7,
    name: "score",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var ContainerTreeNode_Container$Runtime = (() => class _ContainerTreeNode_Container extends Message<_ContainerTreeNode_Container> {
  declare docString: string;
  declare header: string;
  declare trailer: string;
  declare children: ContainerTreeNode[];
  declare references: ContainerTreeNode_Reference[];
  declare score: number;
  constructor(data?: PartialMessage<_ContainerTreeNode_Container>) {
    super();
    this.docString = "";
    this.header = "";
    this.trailer = "";
    this.children = [];
    this.references = [];
    this.score = 0;
    proto3.util.initPartial(data, this as _ContainerTreeNode_Container);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTreeNode_Container {
    return new _ContainerTreeNode_Container().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Container {
    return new _ContainerTreeNode_Container().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Container {
    return new _ContainerTreeNode_Container().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTreeNode_Container | PlainMessage<_ContainerTreeNode_Container> | undefined | null, b2: _ContainerTreeNode_Container | PlainMessage<_ContainerTreeNode_Container> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTreeNode_Container as unknown as MessageType<_ContainerTreeNode_Container>, a, b2);
  }
})();
export interface ContainerTreeNode_Container extends Message<ContainerTreeNode_Container> {
  docString: string;
  header: string;
  trailer: string;
  children: ContainerTreeNode[];
  references: ContainerTreeNode_Reference[];
  score: number;
}
var ContainerTreeNode_Container: MessageType<ContainerTreeNode_Container> = ContainerTreeNode_Container$Runtime as unknown as MessageType<ContainerTreeNode_Container>;
(ContainerTreeNode_Container as MutableMessageType<ContainerTreeNode_Container>).runtime = proto3;
(ContainerTreeNode_Container as MutableMessageType<ContainerTreeNode_Container>).typeName = "aiserver.v1.ContainerTreeNode.Container";
(ContainerTreeNode_Container as MutableMessageType<ContainerTreeNode_Container>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "doc_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "header",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "trailer",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "children", kind: "message", T: ContainerTreeNode, repeated: true },
  { no: 6, name: "references", kind: "message", T: ContainerTreeNode_Reference, repeated: true },
  {
    no: 7,
    name: "score",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var ContainerTreeNode_Blob$Runtime = (() => class _ContainerTreeNode_Blob extends Message<_ContainerTreeNode_Blob> {
  declare value?: string;
  constructor(data?: PartialMessage<_ContainerTreeNode_Blob>) {
    super();
    proto3.util.initPartial(data, this as _ContainerTreeNode_Blob);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTreeNode_Blob {
    return new _ContainerTreeNode_Blob().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Blob {
    return new _ContainerTreeNode_Blob().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Blob {
    return new _ContainerTreeNode_Blob().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTreeNode_Blob | PlainMessage<_ContainerTreeNode_Blob> | undefined | null, b2: _ContainerTreeNode_Blob | PlainMessage<_ContainerTreeNode_Blob> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTreeNode_Blob as unknown as MessageType<_ContainerTreeNode_Blob>, a, b2);
  }
})();
export type ContainerTreeNode_Blob = InstanceType<typeof ContainerTreeNode_Blob$Runtime>;
var ContainerTreeNode_Blob: MessageType<ContainerTreeNode_Blob> = ContainerTreeNode_Blob$Runtime as unknown as MessageType<ContainerTreeNode_Blob>;
(ContainerTreeNode_Blob as MutableMessageType<ContainerTreeNode_Blob>).runtime = proto3;
(ContainerTreeNode_Blob as MutableMessageType<ContainerTreeNode_Blob>).typeName = "aiserver.v1.ContainerTreeNode.Blob";
(ContainerTreeNode_Blob as MutableMessageType<ContainerTreeNode_Blob>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9, opt: true }
]);
var ContainerTreeNode_Reference$Runtime = (() => class _ContainerTreeNode_Reference extends Message<_ContainerTreeNode_Reference> {
  declare value: string;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ContainerTreeNode_Reference>) {
    super();
    this.value = "";
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ContainerTreeNode_Reference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContainerTreeNode_Reference {
    return new _ContainerTreeNode_Reference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Reference {
    return new _ContainerTreeNode_Reference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContainerTreeNode_Reference {
    return new _ContainerTreeNode_Reference().fromJsonString(jsonString, options);
  }
  static equals(a: _ContainerTreeNode_Reference | PlainMessage<_ContainerTreeNode_Reference> | undefined | null, b2: _ContainerTreeNode_Reference | PlainMessage<_ContainerTreeNode_Reference> | undefined | null): boolean {
    return proto3.util.equals(_ContainerTreeNode_Reference as unknown as MessageType<_ContainerTreeNode_Reference>, a, b2);
  }
})();
export type ContainerTreeNode_Reference = InstanceType<typeof ContainerTreeNode_Reference$Runtime>;
var ContainerTreeNode_Reference: MessageType<ContainerTreeNode_Reference> = ContainerTreeNode_Reference$Runtime as unknown as MessageType<ContainerTreeNode_Reference>;
(ContainerTreeNode_Reference as MutableMessageType<ContainerTreeNode_Reference>).runtime = proto3;
(ContainerTreeNode_Reference as MutableMessageType<ContainerTreeNode_Reference>).typeName = "aiserver.v1.ContainerTreeNode.Reference";
(ContainerTreeNode_Reference as MutableMessageType<ContainerTreeNode_Reference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "value",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { ContextAST, ContainerTree, ContainerTreeNode, ContainerTreeNode_Symbol, ContainerTreeNode_Container, ContainerTreeNode_Blob, ContainerTreeNode_Reference };
