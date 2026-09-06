/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:534901-534929
 * Region SHA-256: 762e5e3a6eb2638fefce458f0388cd39b488cad3dc4a5fc632a37dc1e20d8542
 * B11 exports: 1 messages + 0 enums + 0 services = 1
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ExecClientControlMessage, ExecClientMessage } from "./exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ExecStreamElement$Runtime = (() => class _ExecStreamElement extends Message<_ExecStreamElement> {
  declare element: { case: "execClientMessage"; value: ExecClientMessage } | { case: "execClientControlMessage"; value: ExecClientControlMessage } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ExecStreamElement>) {
    super();
    this.element = { case: void 0 };
    proto3.util.initPartial(data, this as _ExecStreamElement);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ExecStreamElement {
    return new _ExecStreamElement().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ExecStreamElement {
    return new _ExecStreamElement().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ExecStreamElement {
    return new _ExecStreamElement().fromJsonString(jsonString, options2);
  }
  static equals(a: _ExecStreamElement | PlainMessage<_ExecStreamElement> | undefined | null, b2: _ExecStreamElement | PlainMessage<_ExecStreamElement> | undefined | null): boolean {
    return proto3.util.equals(_ExecStreamElement as unknown as MessageType<_ExecStreamElement>, a, b2);
  }
})();
export type ExecStreamElement = InstanceType<typeof ExecStreamElement$Runtime>;
var ExecStreamElement: MessageType<ExecStreamElement> = ExecStreamElement$Runtime as unknown as MessageType<ExecStreamElement>;
(ExecStreamElement as MutableMessageType<ExecStreamElement>).runtime = proto3;
(ExecStreamElement as MutableMessageType<ExecStreamElement>).typeName = "agent.v1.ExecStreamElement";
(ExecStreamElement as MutableMessageType<ExecStreamElement>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "exec_client_message", kind: "message", T: ExecClientMessage, oneof: "element" },
  { no: 2, name: "exec_client_control_message", kind: "message", T: ExecClientControlMessage, oneof: "element" }
]);

export { ExecStreamElement };
