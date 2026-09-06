/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:63822-63902
 * Region SHA-256: b4006368afdf3e6590a850d8a38fe37f3c594c83db5edf166222df93edfd513d
 * B11 exports: 2 messages + 0 enums + 0 services = 2
 */
import { Any, Empty, Message, Struct, Timestamp, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { ShellCommandParsingResult, CommandClassifierResult } from "./shell_exec_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

var ShellAllowlistPrecheckArgs$Runtime = (() => class _ShellAllowlistPrecheckArgs extends Message<_ShellAllowlistPrecheckArgs> {
  declare command: string;
  declare workingDirectory: string;
  declare parsingResult?: ShellCommandParsingResult;
  declare classifierResult?: CommandClassifierResult;
  declare toolCallId?: string;
  constructor(data?: PartialMessage<_ShellAllowlistPrecheckArgs>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    proto3.util.initPartial(data, this as _ShellAllowlistPrecheckArgs);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ShellAllowlistPrecheckArgs {
    return new _ShellAllowlistPrecheckArgs().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ShellAllowlistPrecheckArgs {
    return new _ShellAllowlistPrecheckArgs().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ShellAllowlistPrecheckArgs {
    return new _ShellAllowlistPrecheckArgs().fromJsonString(jsonString, options2);
  }
  static equals(a: _ShellAllowlistPrecheckArgs | PlainMessage<_ShellAllowlistPrecheckArgs> | undefined | null, b2: _ShellAllowlistPrecheckArgs | PlainMessage<_ShellAllowlistPrecheckArgs> | undefined | null): boolean {
    return proto3.util.equals(_ShellAllowlistPrecheckArgs as unknown as MessageType<_ShellAllowlistPrecheckArgs>, a, b2);
  }
})();
export type ShellAllowlistPrecheckArgs = InstanceType<typeof ShellAllowlistPrecheckArgs$Runtime>;
var ShellAllowlistPrecheckArgs: MessageType<ShellAllowlistPrecheckArgs> = ShellAllowlistPrecheckArgs$Runtime as unknown as MessageType<ShellAllowlistPrecheckArgs>;
(ShellAllowlistPrecheckArgs as MutableMessageType<ShellAllowlistPrecheckArgs>).runtime = proto3;
(ShellAllowlistPrecheckArgs as MutableMessageType<ShellAllowlistPrecheckArgs>).typeName = "agent.v1.ShellAllowlistPrecheckArgs";
(ShellAllowlistPrecheckArgs as MutableMessageType<ShellAllowlistPrecheckArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "parsing_result", kind: "message", T: ShellCommandParsingResult },
  { no: 4, name: "classifier_result", kind: "message", T: CommandClassifierResult, opt: true },
  { no: 5, name: "tool_call_id", kind: "scalar", T: 9, opt: true }
]);
var ShellAllowlistPrecheckResult$Runtime = (() => class _ShellAllowlistPrecheckResult extends Message<_ShellAllowlistPrecheckResult> {
  declare allowlisted: boolean;
  constructor(data?: PartialMessage<_ShellAllowlistPrecheckResult>) {
    super();
    this.allowlisted = false;
    proto3.util.initPartial(data, this as _ShellAllowlistPrecheckResult);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ShellAllowlistPrecheckResult {
    return new _ShellAllowlistPrecheckResult().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ShellAllowlistPrecheckResult {
    return new _ShellAllowlistPrecheckResult().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ShellAllowlistPrecheckResult {
    return new _ShellAllowlistPrecheckResult().fromJsonString(jsonString, options2);
  }
  static equals(a: _ShellAllowlistPrecheckResult | PlainMessage<_ShellAllowlistPrecheckResult> | undefined | null, b2: _ShellAllowlistPrecheckResult | PlainMessage<_ShellAllowlistPrecheckResult> | undefined | null): boolean {
    return proto3.util.equals(_ShellAllowlistPrecheckResult as unknown as MessageType<_ShellAllowlistPrecheckResult>, a, b2);
  }
})();
export type ShellAllowlistPrecheckResult = InstanceType<typeof ShellAllowlistPrecheckResult$Runtime>;
var ShellAllowlistPrecheckResult: MessageType<ShellAllowlistPrecheckResult> = ShellAllowlistPrecheckResult$Runtime as unknown as MessageType<ShellAllowlistPrecheckResult>;
(ShellAllowlistPrecheckResult as MutableMessageType<ShellAllowlistPrecheckResult>).runtime = proto3;
(ShellAllowlistPrecheckResult as MutableMessageType<ShellAllowlistPrecheckResult>).typeName = "agent.v1.ShellAllowlistPrecheckResult";
(ShellAllowlistPrecheckResult as MutableMessageType<ShellAllowlistPrecheckResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "allowlisted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { ShellAllowlistPrecheckArgs, ShellAllowlistPrecheckResult };
