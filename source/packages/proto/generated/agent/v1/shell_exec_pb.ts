/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:13167-14458
 * Region SHA-256: 7967a913a5fd54239f9de4f4294f8901b37b973393a73f559443bc04f418f5aa
 * Atomic B1 exports: 27 messages + 6 enums = 33
 */
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { SandboxPolicy } from "./sandbox_pb.js";
import { OutputLocation, SmartModeApproval } from "./utils_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type TimeoutBehavior = 0 | 1 | 2;
var TimeoutBehavior: {
  "UNSPECIFIED": 0;
  "CANCEL": 1;
  "BACKGROUND": 2;
  0: "UNSPECIFIED";
  1: "CANCEL";
  2: "BACKGROUND";
};
export type ShellBackgroundReason = 0 | 1 | 2;
var ShellBackgroundReason: {
  "UNSPECIFIED": 0;
  "TIMEOUT": 1;
  "USER_REQUEST": 2;
  0: "UNSPECIFIED";
  1: "TIMEOUT";
  2: "USER_REQUEST";
};
export type ForceBackgroundShellStatus = 0 | 1 | 2;
var ForceBackgroundShellStatus: {
  "UNSPECIFIED": 0;
  "ACCEPTED": 1;
  "NOT_FOUND": 2;
  0: "UNSPECIFIED";
  1: "ACCEPTED";
  2: "NOT_FOUND";
};
export type ShellAbortReason = 0 | 1 | 2;
var ShellAbortReason: {
  "UNSPECIFIED": 0;
  "USER_ABORT": 1;
  "TIMEOUT": 2;
  0: "UNSPECIFIED";
  1: "USER_ABORT";
  2: "TIMEOUT";
};
export type CommandClassifierResult_SuggestedSandboxMode = 0 | 1 | 2 | 3;
var CommandClassifierResult_SuggestedSandboxMode: {
  "UNSPECIFIED": 0;
  "SANDBOX": 1;
  "NO_SANDBOX": 2;
  "UNDETERMINED": 3;
  0: "UNSPECIFIED";
  1: "SANDBOX";
  2: "NO_SANDBOX";
  3: "UNDETERMINED";
};
export type ShellHookApprovalRequirement_Kind = 0 | 1;
var ShellHookApprovalRequirement_Kind: {
  "UNSPECIFIED": 0;
  "FORCE_PROMPT": 1;
  0: "UNSPECIFIED";
  1: "FORCE_PROMPT";
};
(function(TimeoutBehavior2) {
  TimeoutBehavior2[TimeoutBehavior2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  TimeoutBehavior2[TimeoutBehavior2["CANCEL"] = 1] = "CANCEL";
  TimeoutBehavior2[TimeoutBehavior2["BACKGROUND"] = 2] = "BACKGROUND";
})(TimeoutBehavior! || (TimeoutBehavior = {} as typeof TimeoutBehavior));
proto3.util.setEnumType(TimeoutBehavior, "agent.v1.TimeoutBehavior", [
  { no: 0, name: "TIMEOUT_BEHAVIOR_UNSPECIFIED" },
  { no: 1, name: "TIMEOUT_BEHAVIOR_CANCEL" },
  { no: 2, name: "TIMEOUT_BEHAVIOR_BACKGROUND" }
]);
(function(ShellBackgroundReason2) {
  ShellBackgroundReason2[ShellBackgroundReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ShellBackgroundReason2[ShellBackgroundReason2["TIMEOUT"] = 1] = "TIMEOUT";
  ShellBackgroundReason2[ShellBackgroundReason2["USER_REQUEST"] = 2] = "USER_REQUEST";
})(ShellBackgroundReason! || (ShellBackgroundReason = {} as typeof ShellBackgroundReason));
proto3.util.setEnumType(ShellBackgroundReason, "agent.v1.ShellBackgroundReason", [
  { no: 0, name: "SHELL_BACKGROUND_REASON_UNSPECIFIED" },
  { no: 1, name: "SHELL_BACKGROUND_REASON_TIMEOUT" },
  { no: 2, name: "SHELL_BACKGROUND_REASON_USER_REQUEST" }
]);
(function(ForceBackgroundShellStatus2) {
  ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["ACCEPTED"] = 1] = "ACCEPTED";
  ForceBackgroundShellStatus2[ForceBackgroundShellStatus2["NOT_FOUND"] = 2] = "NOT_FOUND";
})(ForceBackgroundShellStatus! || (ForceBackgroundShellStatus = {} as typeof ForceBackgroundShellStatus));
proto3.util.setEnumType(ForceBackgroundShellStatus, "agent.v1.ForceBackgroundShellStatus", [
  { no: 0, name: "FORCE_BACKGROUND_SHELL_STATUS_UNSPECIFIED" },
  { no: 1, name: "FORCE_BACKGROUND_SHELL_STATUS_ACCEPTED" },
  { no: 2, name: "FORCE_BACKGROUND_SHELL_STATUS_NOT_FOUND" }
]);
(function(ShellAbortReason2) {
  ShellAbortReason2[ShellAbortReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ShellAbortReason2[ShellAbortReason2["USER_ABORT"] = 1] = "USER_ABORT";
  ShellAbortReason2[ShellAbortReason2["TIMEOUT"] = 2] = "TIMEOUT";
})(ShellAbortReason! || (ShellAbortReason = {} as typeof ShellAbortReason));
proto3.util.setEnumType(ShellAbortReason, "agent.v1.ShellAbortReason", [
  { no: 0, name: "SHELL_ABORT_REASON_UNSPECIFIED" },
  { no: 1, name: "SHELL_ABORT_REASON_USER_ABORT" },
  { no: 2, name: "SHELL_ABORT_REASON_TIMEOUT" }
]);
var ShellCommandParsingResult$Runtime = (() => class _ShellCommandParsingResult extends Message<_ShellCommandParsingResult> {
  declare parsingFailed: boolean;
  declare executableCommands: ShellCommandParsingResult_ExecutableCommand[];
  declare hasRedirects: boolean;
  declare hasCommandSubstitution: boolean;
  declare allRedirectsAreDevNull?: boolean;
  declare redirects: ShellCommandParsingResult_Redirect[];
  constructor(data?: PartialMessage<_ShellCommandParsingResult>) {
    super();
    this.parsingFailed = false;
    this.executableCommands = [];
    this.hasRedirects = false;
    this.hasCommandSubstitution = false;
    this.redirects = [];
    proto3.util.initPartial(data, this as _ShellCommandParsingResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommandParsingResult {
    return new _ShellCommandParsingResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult {
    return new _ShellCommandParsingResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult {
    return new _ShellCommandParsingResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommandParsingResult | PlainMessage<_ShellCommandParsingResult> | undefined | null, b2: _ShellCommandParsingResult | PlainMessage<_ShellCommandParsingResult> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommandParsingResult as unknown as MessageType<_ShellCommandParsingResult>, a, b2);
  }
})();
export type ShellCommandParsingResult = InstanceType<typeof ShellCommandParsingResult$Runtime>;
var ShellCommandParsingResult: MessageType<ShellCommandParsingResult> = ShellCommandParsingResult$Runtime as unknown as MessageType<ShellCommandParsingResult>;
(ShellCommandParsingResult as MutableMessageType<ShellCommandParsingResult>).runtime = proto3;
(ShellCommandParsingResult as MutableMessageType<ShellCommandParsingResult>).typeName = "agent.v1.ShellCommandParsingResult";
(ShellCommandParsingResult as MutableMessageType<ShellCommandParsingResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "parsing_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "executable_commands", kind: "message", T: ShellCommandParsingResult_ExecutableCommand, repeated: true },
  {
    no: 3,
    name: "has_redirects",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "has_command_substitution",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "all_redirects_are_dev_null", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "redirects", kind: "message", T: ShellCommandParsingResult_Redirect, repeated: true }
]);
var ShellCommandParsingResult_ExecutableCommandArg$Runtime = (() => class _ShellCommandParsingResult_ExecutableCommandArg extends Message<_ShellCommandParsingResult_ExecutableCommandArg> {
  declare type: string;
  declare value: string;
  constructor(data?: PartialMessage<_ShellCommandParsingResult_ExecutableCommandArg>) {
    super();
    this.type = "";
    this.value = "";
    proto3.util.initPartial(data, this as _ShellCommandParsingResult_ExecutableCommandArg);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommandParsingResult_ExecutableCommandArg {
    return new _ShellCommandParsingResult_ExecutableCommandArg().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_ExecutableCommandArg {
    return new _ShellCommandParsingResult_ExecutableCommandArg().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_ExecutableCommandArg {
    return new _ShellCommandParsingResult_ExecutableCommandArg().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommandParsingResult_ExecutableCommandArg | PlainMessage<_ShellCommandParsingResult_ExecutableCommandArg> | undefined | null, b2: _ShellCommandParsingResult_ExecutableCommandArg | PlainMessage<_ShellCommandParsingResult_ExecutableCommandArg> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommandParsingResult_ExecutableCommandArg as unknown as MessageType<_ShellCommandParsingResult_ExecutableCommandArg>, a, b2);
  }
})();
export type ShellCommandParsingResult_ExecutableCommandArg = InstanceType<typeof ShellCommandParsingResult_ExecutableCommandArg$Runtime>;
var ShellCommandParsingResult_ExecutableCommandArg: MessageType<ShellCommandParsingResult_ExecutableCommandArg> = ShellCommandParsingResult_ExecutableCommandArg$Runtime as unknown as MessageType<ShellCommandParsingResult_ExecutableCommandArg>;
(ShellCommandParsingResult_ExecutableCommandArg as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg>).runtime = proto3;
(ShellCommandParsingResult_ExecutableCommandArg as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg>).typeName = "agent.v1.ShellCommandParsingResult.ExecutableCommandArg";
(ShellCommandParsingResult_ExecutableCommandArg as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
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
  }
]);
var ShellCommandParsingResult_ExecutableCommand$Runtime = (() => class _ShellCommandParsingResult_ExecutableCommand extends Message<_ShellCommandParsingResult_ExecutableCommand> {
  declare name: string;
  declare args: ShellCommandParsingResult_ExecutableCommandArg[];
  declare fullText: string;
  constructor(data?: PartialMessage<_ShellCommandParsingResult_ExecutableCommand>) {
    super();
    this.name = "";
    this.args = [];
    this.fullText = "";
    proto3.util.initPartial(data, this as _ShellCommandParsingResult_ExecutableCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommandParsingResult_ExecutableCommand {
    return new _ShellCommandParsingResult_ExecutableCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_ExecutableCommand {
    return new _ShellCommandParsingResult_ExecutableCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_ExecutableCommand {
    return new _ShellCommandParsingResult_ExecutableCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommandParsingResult_ExecutableCommand | PlainMessage<_ShellCommandParsingResult_ExecutableCommand> | undefined | null, b2: _ShellCommandParsingResult_ExecutableCommand | PlainMessage<_ShellCommandParsingResult_ExecutableCommand> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommandParsingResult_ExecutableCommand as unknown as MessageType<_ShellCommandParsingResult_ExecutableCommand>, a, b2);
  }
})();
export type ShellCommandParsingResult_ExecutableCommand = InstanceType<typeof ShellCommandParsingResult_ExecutableCommand$Runtime>;
var ShellCommandParsingResult_ExecutableCommand: MessageType<ShellCommandParsingResult_ExecutableCommand> = ShellCommandParsingResult_ExecutableCommand$Runtime as unknown as MessageType<ShellCommandParsingResult_ExecutableCommand>;
(ShellCommandParsingResult_ExecutableCommand as MutableMessageType<ShellCommandParsingResult_ExecutableCommand>).runtime = proto3;
(ShellCommandParsingResult_ExecutableCommand as MutableMessageType<ShellCommandParsingResult_ExecutableCommand>).typeName = "agent.v1.ShellCommandParsingResult.ExecutableCommand";
(ShellCommandParsingResult_ExecutableCommand as MutableMessageType<ShellCommandParsingResult_ExecutableCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "message", T: ShellCommandParsingResult_ExecutableCommandArg, repeated: true },
  {
    no: 3,
    name: "full_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellCommandParsingResult_Redirect$Runtime = (() => class _ShellCommandParsingResult_Redirect extends Message<_ShellCommandParsingResult_Redirect> {
  declare operator: string;
  declare destinationFds: number[];
  declare targetNodeType: string;
  declare targetText?: string;
  constructor(data?: PartialMessage<_ShellCommandParsingResult_Redirect>) {
    super();
    this.operator = "";
    this.destinationFds = [];
    this.targetNodeType = "";
    proto3.util.initPartial(data, this as _ShellCommandParsingResult_Redirect);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommandParsingResult_Redirect {
    return new _ShellCommandParsingResult_Redirect().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_Redirect {
    return new _ShellCommandParsingResult_Redirect().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommandParsingResult_Redirect {
    return new _ShellCommandParsingResult_Redirect().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommandParsingResult_Redirect | PlainMessage<_ShellCommandParsingResult_Redirect> | undefined | null, b2: _ShellCommandParsingResult_Redirect | PlainMessage<_ShellCommandParsingResult_Redirect> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommandParsingResult_Redirect as unknown as MessageType<_ShellCommandParsingResult_Redirect>, a, b2);
  }
})();
export type ShellCommandParsingResult_Redirect = InstanceType<typeof ShellCommandParsingResult_Redirect$Runtime>;
var ShellCommandParsingResult_Redirect: MessageType<ShellCommandParsingResult_Redirect> = ShellCommandParsingResult_Redirect$Runtime as unknown as MessageType<ShellCommandParsingResult_Redirect>;
(ShellCommandParsingResult_Redirect as MutableMessageType<ShellCommandParsingResult_Redirect>).runtime = proto3;
(ShellCommandParsingResult_Redirect as MutableMessageType<ShellCommandParsingResult_Redirect>).typeName = "agent.v1.ShellCommandParsingResult.Redirect";
(ShellCommandParsingResult_Redirect as MutableMessageType<ShellCommandParsingResult_Redirect>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "operator",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "destination_fds", kind: "scalar", T: 13, repeated: true },
  {
    no: 3,
    name: "target_node_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "target_text", kind: "scalar", T: 9, opt: true }
]);
var CommandClassifierResult$Runtime = (() => class _CommandClassifierResult extends Message<_CommandClassifierResult> {
  declare commands: CommandClassifierResult_ClassifiedCommand[];
  declare suggestedSandboxMode: CommandClassifierResult_SuggestedSandboxMode;
  declare classificationFailed: boolean;
  constructor(data?: PartialMessage<_CommandClassifierResult>) {
    super();
    this.commands = [];
    this.suggestedSandboxMode = CommandClassifierResult_SuggestedSandboxMode.UNSPECIFIED;
    this.classificationFailed = false;
    proto3.util.initPartial(data, this as _CommandClassifierResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommandClassifierResult {
    return new _CommandClassifierResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommandClassifierResult {
    return new _CommandClassifierResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommandClassifierResult {
    return new _CommandClassifierResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CommandClassifierResult | PlainMessage<_CommandClassifierResult> | undefined | null, b2: _CommandClassifierResult | PlainMessage<_CommandClassifierResult> | undefined | null): boolean {
    return proto3.util.equals(_CommandClassifierResult as unknown as MessageType<_CommandClassifierResult>, a, b2);
  }
})();
export type CommandClassifierResult = InstanceType<typeof CommandClassifierResult$Runtime>;
var CommandClassifierResult: MessageType<CommandClassifierResult> = CommandClassifierResult$Runtime as unknown as MessageType<CommandClassifierResult>;
(CommandClassifierResult as MutableMessageType<CommandClassifierResult>).runtime = proto3;
(CommandClassifierResult as MutableMessageType<CommandClassifierResult>).typeName = "agent.v1.CommandClassifierResult";
(CommandClassifierResult as MutableMessageType<CommandClassifierResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "commands", kind: "message", T: CommandClassifierResult_ClassifiedCommand, repeated: true },
  { no: 2, name: "suggested_sandbox_mode", kind: "enum", T: proto3.getEnumType(CommandClassifierResult_SuggestedSandboxMode) },
  {
    no: 3,
    name: "classification_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
(function(CommandClassifierResult_SuggestedSandboxMode2) {
  CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["SANDBOX"] = 1] = "SANDBOX";
  CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["NO_SANDBOX"] = 2] = "NO_SANDBOX";
  CommandClassifierResult_SuggestedSandboxMode2[CommandClassifierResult_SuggestedSandboxMode2["UNDETERMINED"] = 3] = "UNDETERMINED";
})(CommandClassifierResult_SuggestedSandboxMode! || (CommandClassifierResult_SuggestedSandboxMode = {} as typeof CommandClassifierResult_SuggestedSandboxMode));
proto3.util.setEnumType(CommandClassifierResult_SuggestedSandboxMode, "agent.v1.CommandClassifierResult.SuggestedSandboxMode", [
  { no: 0, name: "SUGGESTED_SANDBOX_MODE_UNSPECIFIED" },
  { no: 1, name: "SUGGESTED_SANDBOX_MODE_SANDBOX" },
  { no: 2, name: "SUGGESTED_SANDBOX_MODE_NO_SANDBOX" },
  { no: 3, name: "SUGGESTED_SANDBOX_MODE_UNDETERMINED" }
]);
var CommandClassifierResult_ClassifiedCommand$Runtime = (() => class _CommandClassifierResult_ClassifiedCommand extends Message<_CommandClassifierResult_ClassifiedCommand> {
  declare name: string;
  declare arguments: string[];
  declare suggestedAllowlistEntry?: string;
  declare subcommandTokens: string[];
  constructor(data?: PartialMessage<_CommandClassifierResult_ClassifiedCommand>) {
    super();
    this.name = "";
    this.arguments = [];
    this.subcommandTokens = [];
    proto3.util.initPartial(data, this as _CommandClassifierResult_ClassifiedCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommandClassifierResult_ClassifiedCommand {
    return new _CommandClassifierResult_ClassifiedCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommandClassifierResult_ClassifiedCommand {
    return new _CommandClassifierResult_ClassifiedCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommandClassifierResult_ClassifiedCommand {
    return new _CommandClassifierResult_ClassifiedCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _CommandClassifierResult_ClassifiedCommand | PlainMessage<_CommandClassifierResult_ClassifiedCommand> | undefined | null, b2: _CommandClassifierResult_ClassifiedCommand | PlainMessage<_CommandClassifierResult_ClassifiedCommand> | undefined | null): boolean {
    return proto3.util.equals(_CommandClassifierResult_ClassifiedCommand as unknown as MessageType<_CommandClassifierResult_ClassifiedCommand>, a, b2);
  }
})();
export type CommandClassifierResult_ClassifiedCommand = InstanceType<typeof CommandClassifierResult_ClassifiedCommand$Runtime>;
var CommandClassifierResult_ClassifiedCommand: MessageType<CommandClassifierResult_ClassifiedCommand> = CommandClassifierResult_ClassifiedCommand$Runtime as unknown as MessageType<CommandClassifierResult_ClassifiedCommand>;
(CommandClassifierResult_ClassifiedCommand as MutableMessageType<CommandClassifierResult_ClassifiedCommand>).runtime = proto3;
(CommandClassifierResult_ClassifiedCommand as MutableMessageType<CommandClassifierResult_ClassifiedCommand>).typeName = "agent.v1.CommandClassifierResult.ClassifiedCommand";
(CommandClassifierResult_ClassifiedCommand as MutableMessageType<CommandClassifierResult_ClassifiedCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "arguments", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "suggested_allowlist_entry", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "subcommand_tokens", kind: "scalar", T: 9, repeated: true }
]);
var ShellOutputNotificationConfig$Runtime = (() => class _ShellOutputNotificationConfig extends Message<_ShellOutputNotificationConfig> {
  declare pattern: string;
  declare reason: string;
  declare debounce?: number;
  declare notificationLimit?: number;
  constructor(data?: PartialMessage<_ShellOutputNotificationConfig>) {
    super();
    this.pattern = "";
    this.reason = "";
    proto3.util.initPartial(data, this as _ShellOutputNotificationConfig);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellOutputNotificationConfig {
    return new _ShellOutputNotificationConfig().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellOutputNotificationConfig {
    return new _ShellOutputNotificationConfig().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellOutputNotificationConfig {
    return new _ShellOutputNotificationConfig().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellOutputNotificationConfig | PlainMessage<_ShellOutputNotificationConfig> | undefined | null, b2: _ShellOutputNotificationConfig | PlainMessage<_ShellOutputNotificationConfig> | undefined | null): boolean {
    return proto3.util.equals(_ShellOutputNotificationConfig as unknown as MessageType<_ShellOutputNotificationConfig>, a, b2);
  }
})();
export type ShellOutputNotificationConfig = InstanceType<typeof ShellOutputNotificationConfig$Runtime>;
var ShellOutputNotificationConfig: MessageType<ShellOutputNotificationConfig> = ShellOutputNotificationConfig$Runtime as unknown as MessageType<ShellOutputNotificationConfig>;
(ShellOutputNotificationConfig as MutableMessageType<ShellOutputNotificationConfig>).runtime = proto3;
(ShellOutputNotificationConfig as MutableMessageType<ShellOutputNotificationConfig>).typeName = "agent.v1.ShellOutputNotificationConfig";
(ShellOutputNotificationConfig as MutableMessageType<ShellOutputNotificationConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "debounce", kind: "scalar", T: 1, opt: true },
  { no: 4, name: "notification_limit", kind: "scalar", T: 5, opt: true }
]);
var ForceBackgroundShellArgs$Runtime = (() => class _ForceBackgroundShellArgs extends Message<_ForceBackgroundShellArgs> {
  declare toolCallId: string;
  constructor(data?: PartialMessage<_ForceBackgroundShellArgs>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ForceBackgroundShellArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ForceBackgroundShellArgs {
    return new _ForceBackgroundShellArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ForceBackgroundShellArgs {
    return new _ForceBackgroundShellArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ForceBackgroundShellArgs {
    return new _ForceBackgroundShellArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ForceBackgroundShellArgs | PlainMessage<_ForceBackgroundShellArgs> | undefined | null, b2: _ForceBackgroundShellArgs | PlainMessage<_ForceBackgroundShellArgs> | undefined | null): boolean {
    return proto3.util.equals(_ForceBackgroundShellArgs as unknown as MessageType<_ForceBackgroundShellArgs>, a, b2);
  }
})();
export type ForceBackgroundShellArgs = InstanceType<typeof ForceBackgroundShellArgs$Runtime>;
var ForceBackgroundShellArgs: MessageType<ForceBackgroundShellArgs> = ForceBackgroundShellArgs$Runtime as unknown as MessageType<ForceBackgroundShellArgs>;
(ForceBackgroundShellArgs as MutableMessageType<ForceBackgroundShellArgs>).runtime = proto3;
(ForceBackgroundShellArgs as MutableMessageType<ForceBackgroundShellArgs>).typeName = "agent.v1.ForceBackgroundShellArgs";
(ForceBackgroundShellArgs as MutableMessageType<ForceBackgroundShellArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ForceBackgroundShellResult$Runtime = (() => class _ForceBackgroundShellResult extends Message<_ForceBackgroundShellResult> {
  declare status: ForceBackgroundShellStatus;
  declare shellResult?: ShellResult;
  constructor(data?: PartialMessage<_ForceBackgroundShellResult>) {
    super();
    this.status = ForceBackgroundShellStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ForceBackgroundShellResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ForceBackgroundShellResult {
    return new _ForceBackgroundShellResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ForceBackgroundShellResult {
    return new _ForceBackgroundShellResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ForceBackgroundShellResult {
    return new _ForceBackgroundShellResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ForceBackgroundShellResult | PlainMessage<_ForceBackgroundShellResult> | undefined | null, b2: _ForceBackgroundShellResult | PlainMessage<_ForceBackgroundShellResult> | undefined | null): boolean {
    return proto3.util.equals(_ForceBackgroundShellResult as unknown as MessageType<_ForceBackgroundShellResult>, a, b2);
  }
})();
export type ForceBackgroundShellResult = InstanceType<typeof ForceBackgroundShellResult$Runtime>;
var ForceBackgroundShellResult: MessageType<ForceBackgroundShellResult> = ForceBackgroundShellResult$Runtime as unknown as MessageType<ForceBackgroundShellResult>;
(ForceBackgroundShellResult as MutableMessageType<ForceBackgroundShellResult>).runtime = proto3;
(ForceBackgroundShellResult as MutableMessageType<ForceBackgroundShellResult>).typeName = "agent.v1.ForceBackgroundShellResult";
(ForceBackgroundShellResult as MutableMessageType<ForceBackgroundShellResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(ForceBackgroundShellStatus) },
  { no: 2, name: "shell_result", kind: "message", T: ShellResult, opt: true }
]);
var ShellHookApprovalRequirement$Runtime = (() => class _ShellHookApprovalRequirement extends Message<_ShellHookApprovalRequirement> {
  declare kind: ShellHookApprovalRequirement_Kind;
  declare reason?: string;
  constructor(data?: PartialMessage<_ShellHookApprovalRequirement>) {
    super();
    this.kind = ShellHookApprovalRequirement_Kind.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ShellHookApprovalRequirement);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellHookApprovalRequirement {
    return new _ShellHookApprovalRequirement().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellHookApprovalRequirement {
    return new _ShellHookApprovalRequirement().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellHookApprovalRequirement {
    return new _ShellHookApprovalRequirement().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellHookApprovalRequirement | PlainMessage<_ShellHookApprovalRequirement> | undefined | null, b2: _ShellHookApprovalRequirement | PlainMessage<_ShellHookApprovalRequirement> | undefined | null): boolean {
    return proto3.util.equals(_ShellHookApprovalRequirement as unknown as MessageType<_ShellHookApprovalRequirement>, a, b2);
  }
})();
export type ShellHookApprovalRequirement = InstanceType<typeof ShellHookApprovalRequirement$Runtime>;
var ShellHookApprovalRequirement: MessageType<ShellHookApprovalRequirement> = ShellHookApprovalRequirement$Runtime as unknown as MessageType<ShellHookApprovalRequirement>;
(ShellHookApprovalRequirement as MutableMessageType<ShellHookApprovalRequirement>).runtime = proto3;
(ShellHookApprovalRequirement as MutableMessageType<ShellHookApprovalRequirement>).typeName = "agent.v1.ShellHookApprovalRequirement";
(ShellHookApprovalRequirement as MutableMessageType<ShellHookApprovalRequirement>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(ShellHookApprovalRequirement_Kind) },
  { no: 2, name: "reason", kind: "scalar", T: 9, opt: true }
]);
(function(ShellHookApprovalRequirement_Kind2) {
  ShellHookApprovalRequirement_Kind2[ShellHookApprovalRequirement_Kind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ShellHookApprovalRequirement_Kind2[ShellHookApprovalRequirement_Kind2["FORCE_PROMPT"] = 1] = "FORCE_PROMPT";
})(ShellHookApprovalRequirement_Kind! || (ShellHookApprovalRequirement_Kind = {} as typeof ShellHookApprovalRequirement_Kind));
proto3.util.setEnumType(ShellHookApprovalRequirement_Kind, "agent.v1.ShellHookApprovalRequirement.Kind", [
  { no: 0, name: "KIND_UNSPECIFIED" },
  { no: 1, name: "KIND_FORCE_PROMPT" }
]);
var ShellArgs$Runtime = (() => class _ShellArgs extends Message<_ShellArgs> {
  declare command: string;
  declare workingDirectory: string;
  declare timeout: number;
  declare toolCallId: string;
  declare simpleCommands: string[];
  declare hasInputRedirect: boolean;
  declare hasOutputRedirect: boolean;
  declare parsingResult?: ShellCommandParsingResult;
  declare requestedSandboxPolicy?: SandboxPolicy;
  declare fileOutputThresholdBytes?: bigint;
  declare isBackground: boolean;
  declare skipApproval: boolean;
  declare timeoutBehavior: TimeoutBehavior;
  declare hardTimeout?: number;
  declare description?: string;
  declare classifierResult?: CommandClassifierResult;
  declare closeStdin: boolean;
  declare outputNotification?: ShellOutputNotificationConfig;
  declare smartModeApproval?: SmartModeApproval;
  declare hookApprovalRequirement?: ShellHookApprovalRequirement;
  declare conversationId?: string;
  declare adminCommandDenylist: string[];
  constructor(data?: PartialMessage<_ShellArgs>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.timeout = 0;
    this.toolCallId = "";
    this.simpleCommands = [];
    this.hasInputRedirect = false;
    this.hasOutputRedirect = false;
    this.isBackground = false;
    this.skipApproval = false;
    this.timeoutBehavior = TimeoutBehavior.UNSPECIFIED;
    this.closeStdin = false;
    this.adminCommandDenylist = [];
    proto3.util.initPartial(data, this as _ShellArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellArgs {
    return new _ShellArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellArgs {
    return new _ShellArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellArgs {
    return new _ShellArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellArgs | PlainMessage<_ShellArgs> | undefined | null, b2: _ShellArgs | PlainMessage<_ShellArgs> | undefined | null): boolean {
    return proto3.util.equals(_ShellArgs as unknown as MessageType<_ShellArgs>, a, b2);
  }
})();
export type ShellArgs = InstanceType<typeof ShellArgs$Runtime>;
var ShellArgs: MessageType<ShellArgs> = ShellArgs$Runtime as unknown as MessageType<ShellArgs>;
(ShellArgs as MutableMessageType<ShellArgs>).runtime = proto3;
(ShellArgs as MutableMessageType<ShellArgs>).typeName = "agent.v1.ShellArgs";
(ShellArgs as MutableMessageType<ShellArgs>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "timeout",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "simple_commands", kind: "scalar", T: 9, repeated: true },
  {
    no: 6,
    name: "has_input_redirect",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "has_output_redirect",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "parsing_result", kind: "message", T: ShellCommandParsingResult },
  { no: 9, name: "requested_sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 4, opt: true },
  {
    no: 11,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 12,
    name: "skip_approval",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 13, name: "timeout_behavior", kind: "enum", T: proto3.getEnumType(TimeoutBehavior) },
  { no: 14, name: "hard_timeout", kind: "scalar", T: 5, opt: true },
  { no: 15, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "classifier_result", kind: "message", T: CommandClassifierResult, opt: true },
  {
    no: 17,
    name: "close_stdin",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 18, name: "output_notification", kind: "message", T: ShellOutputNotificationConfig, opt: true },
  { no: 19, name: "smart_mode_approval", kind: "message", T: SmartModeApproval, opt: true },
  { no: 20, name: "hook_approval_requirement", kind: "message", T: ShellHookApprovalRequirement, opt: true },
  { no: 21, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 22, name: "admin_command_denylist", kind: "scalar", T: 9, repeated: true }
]);
var ShellResult$Runtime = (() => class _ShellResult extends Message<_ShellResult> {
  declare sandboxPolicy?: SandboxPolicy;
  declare isBackground?: boolean;
  declare terminalsFolder?: string;
  declare pid?: number;
  declare result: { case: "success"; value: ShellSuccess } | { case: "failure"; value: ShellFailure } | { case: "timeout"; value: ShellTimeout } | { case: "rejected"; value: ShellRejected } | { case: "spawnError"; value: ShellSpawnError } | { case: "permissionDenied"; value: ShellPermissionDenied } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ShellResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ShellResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellResult {
    return new _ShellResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellResult {
    return new _ShellResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellResult {
    return new _ShellResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellResult | PlainMessage<_ShellResult> | undefined | null, b2: _ShellResult | PlainMessage<_ShellResult> | undefined | null): boolean {
    return proto3.util.equals(_ShellResult as unknown as MessageType<_ShellResult>, a, b2);
  }
})();
export type ShellResult = InstanceType<typeof ShellResult$Runtime>;
var ShellResult: MessageType<ShellResult> = ShellResult$Runtime as unknown as MessageType<ShellResult>;
(ShellResult as MutableMessageType<ShellResult>).runtime = proto3;
(ShellResult as MutableMessageType<ShellResult>).typeName = "agent.v1.ShellResult";
(ShellResult as MutableMessageType<ShellResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ShellSuccess, oneof: "result" },
  { no: 2, name: "failure", kind: "message", T: ShellFailure, oneof: "result" },
  { no: 3, name: "timeout", kind: "message", T: ShellTimeout, oneof: "result" },
  { no: 4, name: "rejected", kind: "message", T: ShellRejected, oneof: "result" },
  { no: 5, name: "spawn_error", kind: "message", T: ShellSpawnError, oneof: "result" },
  { no: 7, name: "permission_denied", kind: "message", T: ShellPermissionDenied, oneof: "result" },
  { no: 101, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 102, name: "is_background", kind: "scalar", T: 8, opt: true },
  { no: 103, name: "terminals_folder", kind: "scalar", T: 9, opt: true },
  { no: 104, name: "pid", kind: "scalar", T: 13, opt: true }
]);
var ShellStreamStdout$Runtime = (() => class _ShellStreamStdout extends Message<_ShellStreamStdout> {
  declare data: string;
  constructor(data?: PartialMessage<_ShellStreamStdout>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _ShellStreamStdout);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamStdout {
    return new _ShellStreamStdout().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamStdout {
    return new _ShellStreamStdout().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamStdout {
    return new _ShellStreamStdout().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamStdout | PlainMessage<_ShellStreamStdout> | undefined | null, b2: _ShellStreamStdout | PlainMessage<_ShellStreamStdout> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamStdout as unknown as MessageType<_ShellStreamStdout>, a, b2);
  }
})();
export type ShellStreamStdout = InstanceType<typeof ShellStreamStdout$Runtime>;
var ShellStreamStdout: MessageType<ShellStreamStdout> = ShellStreamStdout$Runtime as unknown as MessageType<ShellStreamStdout>;
(ShellStreamStdout as MutableMessageType<ShellStreamStdout>).runtime = proto3;
(ShellStreamStdout as MutableMessageType<ShellStreamStdout>).typeName = "agent.v1.ShellStreamStdout";
(ShellStreamStdout as MutableMessageType<ShellStreamStdout>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellStreamStderr$Runtime = (() => class _ShellStreamStderr extends Message<_ShellStreamStderr> {
  declare data: string;
  constructor(data?: PartialMessage<_ShellStreamStderr>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _ShellStreamStderr);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamStderr {
    return new _ShellStreamStderr().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamStderr {
    return new _ShellStreamStderr().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamStderr {
    return new _ShellStreamStderr().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamStderr | PlainMessage<_ShellStreamStderr> | undefined | null, b2: _ShellStreamStderr | PlainMessage<_ShellStreamStderr> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamStderr as unknown as MessageType<_ShellStreamStderr>, a, b2);
  }
})();
export type ShellStreamStderr = InstanceType<typeof ShellStreamStderr$Runtime>;
var ShellStreamStderr: MessageType<ShellStreamStderr> = ShellStreamStderr$Runtime as unknown as MessageType<ShellStreamStderr>;
(ShellStreamStderr as MutableMessageType<ShellStreamStderr>).runtime = proto3;
(ShellStreamStderr as MutableMessageType<ShellStreamStderr>).typeName = "agent.v1.ShellStreamStderr";
(ShellStreamStderr as MutableMessageType<ShellStreamStderr>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellStreamExit$Runtime = (() => class _ShellStreamExit extends Message<_ShellStreamExit> {
  declare code: number;
  declare cwd: string;
  declare outputLocation?: OutputLocation;
  declare aborted: boolean;
  declare abortReason?: ShellAbortReason;
  declare localExecutionTimeMs?: number;
  constructor(data?: PartialMessage<_ShellStreamExit>) {
    super();
    this.code = 0;
    this.cwd = "";
    this.aborted = false;
    proto3.util.initPartial(data, this as _ShellStreamExit);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamExit {
    return new _ShellStreamExit().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamExit {
    return new _ShellStreamExit().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamExit {
    return new _ShellStreamExit().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamExit | PlainMessage<_ShellStreamExit> | undefined | null, b2: _ShellStreamExit | PlainMessage<_ShellStreamExit> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamExit as unknown as MessageType<_ShellStreamExit>, a, b2);
  }
})();
export type ShellStreamExit = InstanceType<typeof ShellStreamExit$Runtime>;
var ShellStreamExit: MessageType<ShellStreamExit> = ShellStreamExit$Runtime as unknown as MessageType<ShellStreamExit>;
(ShellStreamExit as MutableMessageType<ShellStreamExit>).runtime = proto3;
(ShellStreamExit as MutableMessageType<ShellStreamExit>).typeName = "agent.v1.ShellStreamExit";
(ShellStreamExit as MutableMessageType<ShellStreamExit>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "code",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "cwd",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "output_location", kind: "message", T: OutputLocation, opt: true },
  {
    no: 4,
    name: "aborted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "abort_reason", kind: "enum", T: proto3.getEnumType(ShellAbortReason), opt: true },
  { no: 6, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true }
]);
var ShellStreamStart$Runtime = (() => class _ShellStreamStart extends Message<_ShellStreamStart> {
  declare sandboxPolicy?: SandboxPolicy;
  constructor(data?: PartialMessage<_ShellStreamStart>) {
    super();
    proto3.util.initPartial(data, this as _ShellStreamStart);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamStart {
    return new _ShellStreamStart().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamStart {
    return new _ShellStreamStart().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamStart {
    return new _ShellStreamStart().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamStart | PlainMessage<_ShellStreamStart> | undefined | null, b2: _ShellStreamStart | PlainMessage<_ShellStreamStart> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamStart as unknown as MessageType<_ShellStreamStart>, a, b2);
  }
})();
export type ShellStreamStart = InstanceType<typeof ShellStreamStart$Runtime>;
var ShellStreamStart: MessageType<ShellStreamStart> = ShellStreamStart$Runtime as unknown as MessageType<ShellStreamStart>;
(ShellStreamStart as MutableMessageType<ShellStreamStart>).runtime = proto3;
(ShellStreamStart as MutableMessageType<ShellStreamStart>).typeName = "agent.v1.ShellStreamStart";
(ShellStreamStart as MutableMessageType<ShellStreamStart>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }
]);
var ShellStreamBackgrounded$Runtime = (() => class _ShellStreamBackgrounded extends Message<_ShellStreamBackgrounded> {
  declare shellId: number;
  declare command: string;
  declare workingDirectory: string;
  declare pid?: number;
  declare msToWait?: number;
  declare reason?: ShellBackgroundReason;
  constructor(data?: PartialMessage<_ShellStreamBackgrounded>) {
    super();
    this.shellId = 0;
    this.command = "";
    this.workingDirectory = "";
    proto3.util.initPartial(data, this as _ShellStreamBackgrounded);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamBackgrounded {
    return new _ShellStreamBackgrounded().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamBackgrounded {
    return new _ShellStreamBackgrounded().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamBackgrounded {
    return new _ShellStreamBackgrounded().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamBackgrounded | PlainMessage<_ShellStreamBackgrounded> | undefined | null, b2: _ShellStreamBackgrounded | PlainMessage<_ShellStreamBackgrounded> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamBackgrounded as unknown as MessageType<_ShellStreamBackgrounded>, a, b2);
  }
})();
export type ShellStreamBackgrounded = InstanceType<typeof ShellStreamBackgrounded$Runtime>;
var ShellStreamBackgrounded: MessageType<ShellStreamBackgrounded> = ShellStreamBackgrounded$Runtime as unknown as MessageType<ShellStreamBackgrounded>;
(ShellStreamBackgrounded as MutableMessageType<ShellStreamBackgrounded>).runtime = proto3;
(ShellStreamBackgrounded as MutableMessageType<ShellStreamBackgrounded>).typeName = "agent.v1.ShellStreamBackgrounded";
(ShellStreamBackgrounded as MutableMessageType<ShellStreamBackgrounded>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "shell_id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "pid", kind: "scalar", T: 13, opt: true },
  { no: 5, name: "ms_to_wait", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "reason", kind: "enum", T: proto3.getEnumType(ShellBackgroundReason), opt: true }
]);
var ShellStreamHookContext$Runtime = (() => class _ShellStreamHookContext extends Message<_ShellStreamHookContext> {
  declare hookAdditionalContexts: HookAdditionalContext[];
  constructor(data?: PartialMessage<_ShellStreamHookContext>) {
    super();
    this.hookAdditionalContexts = [];
    proto3.util.initPartial(data, this as _ShellStreamHookContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStreamHookContext {
    return new _ShellStreamHookContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStreamHookContext {
    return new _ShellStreamHookContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStreamHookContext {
    return new _ShellStreamHookContext().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStreamHookContext | PlainMessage<_ShellStreamHookContext> | undefined | null, b2: _ShellStreamHookContext | PlainMessage<_ShellStreamHookContext> | undefined | null): boolean {
    return proto3.util.equals(_ShellStreamHookContext as unknown as MessageType<_ShellStreamHookContext>, a, b2);
  }
})();
export type ShellStreamHookContext = InstanceType<typeof ShellStreamHookContext$Runtime>;
var ShellStreamHookContext: MessageType<ShellStreamHookContext> = ShellStreamHookContext$Runtime as unknown as MessageType<ShellStreamHookContext>;
(ShellStreamHookContext as MutableMessageType<ShellStreamHookContext>).runtime = proto3;
(ShellStreamHookContext as MutableMessageType<ShellStreamHookContext>).typeName = "agent.v1.ShellStreamHookContext";
(ShellStreamHookContext as MutableMessageType<ShellStreamHookContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true }
]);
var ShellSandboxUnsupported$Runtime = (() => class _ShellSandboxUnsupported extends Message<_ShellSandboxUnsupported> {
  declare command: string;
  declare workingDirectory: string;
  declare sandboxPolicyType: string;
  declare reason: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_ShellSandboxUnsupported>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.sandboxPolicyType = "";
    this.reason = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _ShellSandboxUnsupported);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellSandboxUnsupported {
    return new _ShellSandboxUnsupported().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellSandboxUnsupported {
    return new _ShellSandboxUnsupported().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellSandboxUnsupported {
    return new _ShellSandboxUnsupported().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellSandboxUnsupported | PlainMessage<_ShellSandboxUnsupported> | undefined | null, b2: _ShellSandboxUnsupported | PlainMessage<_ShellSandboxUnsupported> | undefined | null): boolean {
    return proto3.util.equals(_ShellSandboxUnsupported as unknown as MessageType<_ShellSandboxUnsupported>, a, b2);
  }
})();
export type ShellSandboxUnsupported = InstanceType<typeof ShellSandboxUnsupported$Runtime>;
var ShellSandboxUnsupported: MessageType<ShellSandboxUnsupported> = ShellSandboxUnsupported$Runtime as unknown as MessageType<ShellSandboxUnsupported>;
(ShellSandboxUnsupported as MutableMessageType<ShellSandboxUnsupported>).runtime = proto3;
(ShellSandboxUnsupported as MutableMessageType<ShellSandboxUnsupported>).typeName = "agent.v1.ShellSandboxUnsupported";
(ShellSandboxUnsupported as MutableMessageType<ShellSandboxUnsupported>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "sandbox_policy_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ShellStream$Runtime = (() => class _ShellStream extends Message<_ShellStream> {
  declare event: { case: "stdout"; value: ShellStreamStdout } | { case: "stderr"; value: ShellStreamStderr } | { case: "exit"; value: ShellStreamExit } | { case: "start"; value: ShellStreamStart } | { case: "rejected"; value: ShellRejected } | { case: "permissionDenied"; value: ShellPermissionDenied } | { case: "backgrounded"; value: ShellStreamBackgrounded } | { case: "hookContext"; value: ShellStreamHookContext } | { case: "sandboxUnsupported"; value: ShellSandboxUnsupported } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ShellStream>) {
    super();
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _ShellStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellStream {
    return new _ShellStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellStream {
    return new _ShellStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellStream {
    return new _ShellStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellStream | PlainMessage<_ShellStream> | undefined | null, b2: _ShellStream | PlainMessage<_ShellStream> | undefined | null): boolean {
    return proto3.util.equals(_ShellStream as unknown as MessageType<_ShellStream>, a, b2);
  }
})();
export type ShellStream = InstanceType<typeof ShellStream$Runtime>;
var ShellStream: MessageType<ShellStream> = ShellStream$Runtime as unknown as MessageType<ShellStream>;
(ShellStream as MutableMessageType<ShellStream>).runtime = proto3;
(ShellStream as MutableMessageType<ShellStream>).typeName = "agent.v1.ShellStream";
(ShellStream as MutableMessageType<ShellStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stdout", kind: "message", T: ShellStreamStdout, oneof: "event" },
  { no: 2, name: "stderr", kind: "message", T: ShellStreamStderr, oneof: "event" },
  { no: 3, name: "exit", kind: "message", T: ShellStreamExit, oneof: "event" },
  { no: 4, name: "start", kind: "message", T: ShellStreamStart, oneof: "event" },
  { no: 5, name: "rejected", kind: "message", T: ShellRejected, oneof: "event" },
  { no: 6, name: "permission_denied", kind: "message", T: ShellPermissionDenied, oneof: "event" },
  { no: 7, name: "backgrounded", kind: "message", T: ShellStreamBackgrounded, oneof: "event" },
  { no: 8, name: "hook_context", kind: "message", T: ShellStreamHookContext, oneof: "event" },
  { no: 9, name: "sandbox_unsupported", kind: "message", T: ShellSandboxUnsupported, oneof: "event" }
]);
var ShellSuccess$Runtime = (() => class _ShellSuccess extends Message<_ShellSuccess> {
  declare command: string;
  declare workingDirectory: string;
  declare exitCode: number;
  declare signal: string;
  declare stdout: string;
  declare stderr: string;
  declare executionTime: number;
  declare outputLocation?: OutputLocation;
  declare shellId?: number;
  declare interleavedOutput?: string;
  declare pid?: number;
  declare msToWait?: number;
  declare localExecutionTimeMs?: number;
  declare backgroundReason?: ShellBackgroundReason;
  declare outputHead?: string;
  declare outputTail?: string;
  declare elidedChars?: number;
  constructor(data?: PartialMessage<_ShellSuccess>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.exitCode = 0;
    this.signal = "";
    this.stdout = "";
    this.stderr = "";
    this.executionTime = 0;
    proto3.util.initPartial(data, this as _ShellSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellSuccess {
    return new _ShellSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellSuccess {
    return new _ShellSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellSuccess {
    return new _ShellSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellSuccess | PlainMessage<_ShellSuccess> | undefined | null, b2: _ShellSuccess | PlainMessage<_ShellSuccess> | undefined | null): boolean {
    return proto3.util.equals(_ShellSuccess as unknown as MessageType<_ShellSuccess>, a, b2);
  }
})();
export type ShellSuccess = InstanceType<typeof ShellSuccess$Runtime>;
var ShellSuccess: MessageType<ShellSuccess> = ShellSuccess$Runtime as unknown as MessageType<ShellSuccess>;
(ShellSuccess as MutableMessageType<ShellSuccess>).runtime = proto3;
(ShellSuccess as MutableMessageType<ShellSuccess>).typeName = "agent.v1.ShellSuccess";
(ShellSuccess as MutableMessageType<ShellSuccess>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "signal",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "stdout",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "stderr",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "execution_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 8, name: "output_location", kind: "message", T: OutputLocation, opt: true },
  { no: 9, name: "shell_id", kind: "scalar", T: 13, opt: true },
  { no: 10, name: "interleaved_output", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "pid", kind: "scalar", T: 13, opt: true },
  { no: 12, name: "ms_to_wait", kind: "scalar", T: 5, opt: true },
  { no: 13, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true },
  { no: 14, name: "background_reason", kind: "enum", T: proto3.getEnumType(ShellBackgroundReason), opt: true },
  { no: 15, name: "output_head", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "output_tail", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "elided_chars", kind: "scalar", T: 13, opt: true }
]);
var ShellFailure$Runtime = (() => class _ShellFailure extends Message<_ShellFailure> {
  declare command: string;
  declare workingDirectory: string;
  declare exitCode: number;
  declare signal: string;
  declare stdout: string;
  declare stderr: string;
  declare executionTime: number;
  declare outputLocation?: OutputLocation;
  declare interleavedOutput?: string;
  declare abortReason?: ShellAbortReason;
  declare aborted: boolean;
  declare localExecutionTimeMs?: number;
  declare outputHead?: string;
  declare outputTail?: string;
  declare elidedChars?: number;
  constructor(data?: PartialMessage<_ShellFailure>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.exitCode = 0;
    this.signal = "";
    this.stdout = "";
    this.stderr = "";
    this.executionTime = 0;
    this.aborted = false;
    proto3.util.initPartial(data, this as _ShellFailure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellFailure {
    return new _ShellFailure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellFailure {
    return new _ShellFailure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellFailure {
    return new _ShellFailure().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellFailure | PlainMessage<_ShellFailure> | undefined | null, b2: _ShellFailure | PlainMessage<_ShellFailure> | undefined | null): boolean {
    return proto3.util.equals(_ShellFailure as unknown as MessageType<_ShellFailure>, a, b2);
  }
})();
export type ShellFailure = InstanceType<typeof ShellFailure$Runtime>;
var ShellFailure: MessageType<ShellFailure> = ShellFailure$Runtime as unknown as MessageType<ShellFailure>;
(ShellFailure as MutableMessageType<ShellFailure>).runtime = proto3;
(ShellFailure as MutableMessageType<ShellFailure>).typeName = "agent.v1.ShellFailure";
(ShellFailure as MutableMessageType<ShellFailure>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "signal",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "stdout",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "stderr",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "execution_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 8, name: "output_location", kind: "message", T: OutputLocation, opt: true },
  { no: 9, name: "interleaved_output", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "abort_reason", kind: "enum", T: proto3.getEnumType(ShellAbortReason), opt: true },
  {
    no: 11,
    name: "aborted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 12, name: "local_execution_time_ms", kind: "scalar", T: 5, opt: true },
  { no: 13, name: "output_head", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "output_tail", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "elided_chars", kind: "scalar", T: 13, opt: true }
]);
var ShellTimeout$Runtime = (() => class _ShellTimeout extends Message<_ShellTimeout> {
  declare command: string;
  declare workingDirectory: string;
  declare timeoutMs: number;
  constructor(data?: PartialMessage<_ShellTimeout>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.timeoutMs = 0;
    proto3.util.initPartial(data, this as _ShellTimeout);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellTimeout {
    return new _ShellTimeout().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellTimeout {
    return new _ShellTimeout().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellTimeout {
    return new _ShellTimeout().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellTimeout | PlainMessage<_ShellTimeout> | undefined | null, b2: _ShellTimeout | PlainMessage<_ShellTimeout> | undefined | null): boolean {
    return proto3.util.equals(_ShellTimeout as unknown as MessageType<_ShellTimeout>, a, b2);
  }
})();
export type ShellTimeout = InstanceType<typeof ShellTimeout$Runtime>;
var ShellTimeout: MessageType<ShellTimeout> = ShellTimeout$Runtime as unknown as MessageType<ShellTimeout>;
(ShellTimeout as MutableMessageType<ShellTimeout>).runtime = proto3;
(ShellTimeout as MutableMessageType<ShellTimeout>).typeName = "agent.v1.ShellTimeout";
(ShellTimeout as MutableMessageType<ShellTimeout>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "timeout_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ShellRejected$Runtime = (() => class _ShellRejected extends Message<_ShellRejected> {
  declare command: string;
  declare workingDirectory: string;
  declare reason: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_ShellRejected>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.reason = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _ShellRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellRejected {
    return new _ShellRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellRejected {
    return new _ShellRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellRejected {
    return new _ShellRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellRejected | PlainMessage<_ShellRejected> | undefined | null, b2: _ShellRejected | PlainMessage<_ShellRejected> | undefined | null): boolean {
    return proto3.util.equals(_ShellRejected as unknown as MessageType<_ShellRejected>, a, b2);
  }
})();
export type ShellRejected = InstanceType<typeof ShellRejected$Runtime>;
var ShellRejected: MessageType<ShellRejected> = ShellRejected$Runtime as unknown as MessageType<ShellRejected>;
(ShellRejected as MutableMessageType<ShellRejected>).runtime = proto3;
(ShellRejected as MutableMessageType<ShellRejected>).typeName = "agent.v1.ShellRejected";
(ShellRejected as MutableMessageType<ShellRejected>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ShellPermissionDenied$Runtime = (() => class _ShellPermissionDenied extends Message<_ShellPermissionDenied> {
  declare command: string;
  declare workingDirectory: string;
  declare error: string;
  declare isReadonly: boolean;
  constructor(data?: PartialMessage<_ShellPermissionDenied>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.error = "";
    this.isReadonly = false;
    proto3.util.initPartial(data, this as _ShellPermissionDenied);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellPermissionDenied {
    return new _ShellPermissionDenied().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellPermissionDenied {
    return new _ShellPermissionDenied().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellPermissionDenied {
    return new _ShellPermissionDenied().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellPermissionDenied | PlainMessage<_ShellPermissionDenied> | undefined | null, b2: _ShellPermissionDenied | PlainMessage<_ShellPermissionDenied> | undefined | null): boolean {
    return proto3.util.equals(_ShellPermissionDenied as unknown as MessageType<_ShellPermissionDenied>, a, b2);
  }
})();
export type ShellPermissionDenied = InstanceType<typeof ShellPermissionDenied$Runtime>;
var ShellPermissionDenied: MessageType<ShellPermissionDenied> = ShellPermissionDenied$Runtime as unknown as MessageType<ShellPermissionDenied>;
(ShellPermissionDenied as MutableMessageType<ShellPermissionDenied>).runtime = proto3;
(ShellPermissionDenied as MutableMessageType<ShellPermissionDenied>).typeName = "agent.v1.ShellPermissionDenied";
(ShellPermissionDenied as MutableMessageType<ShellPermissionDenied>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "is_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ShellSpawnError$Runtime = (() => class _ShellSpawnError extends Message<_ShellSpawnError> {
  declare command: string;
  declare workingDirectory: string;
  declare error: string;
  constructor(data?: PartialMessage<_ShellSpawnError>) {
    super();
    this.command = "";
    this.workingDirectory = "";
    this.error = "";
    proto3.util.initPartial(data, this as _ShellSpawnError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellSpawnError {
    return new _ShellSpawnError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellSpawnError {
    return new _ShellSpawnError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellSpawnError {
    return new _ShellSpawnError().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellSpawnError | PlainMessage<_ShellSpawnError> | undefined | null, b2: _ShellSpawnError | PlainMessage<_ShellSpawnError> | undefined | null): boolean {
    return proto3.util.equals(_ShellSpawnError as unknown as MessageType<_ShellSpawnError>, a, b2);
  }
})();
export type ShellSpawnError = InstanceType<typeof ShellSpawnError$Runtime>;
var ShellSpawnError: MessageType<ShellSpawnError> = ShellSpawnError$Runtime as unknown as MessageType<ShellSpawnError>;
(ShellSpawnError as MutableMessageType<ShellSpawnError>).runtime = proto3;
(ShellSpawnError as MutableMessageType<ShellSpawnError>).typeName = "agent.v1.ShellSpawnError";
(ShellSpawnError as MutableMessageType<ShellSpawnError>).fields = proto3.util.newFieldList(() => [
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
  {
    no: 3,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellPartialResult$Runtime = (() => class _ShellPartialResult extends Message<_ShellPartialResult> {
  declare stdoutDelta: string;
  declare stderrDelta: string;
  constructor(data?: PartialMessage<_ShellPartialResult>) {
    super();
    this.stdoutDelta = "";
    this.stderrDelta = "";
    proto3.util.initPartial(data, this as _ShellPartialResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellPartialResult {
    return new _ShellPartialResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellPartialResult {
    return new _ShellPartialResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellPartialResult {
    return new _ShellPartialResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellPartialResult | PlainMessage<_ShellPartialResult> | undefined | null, b2: _ShellPartialResult | PlainMessage<_ShellPartialResult> | undefined | null): boolean {
    return proto3.util.equals(_ShellPartialResult as unknown as MessageType<_ShellPartialResult>, a, b2);
  }
})();
export type ShellPartialResult = InstanceType<typeof ShellPartialResult$Runtime>;
var ShellPartialResult: MessageType<ShellPartialResult> = ShellPartialResult$Runtime as unknown as MessageType<ShellPartialResult>;
(ShellPartialResult as MutableMessageType<ShellPartialResult>).runtime = proto3;
(ShellPartialResult as MutableMessageType<ShellPartialResult>).typeName = "agent.v1.ShellPartialResult";
(ShellPartialResult as MutableMessageType<ShellPartialResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stdout_delta",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "stderr_delta",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);


export { TimeoutBehavior, ShellBackgroundReason, ForceBackgroundShellStatus, ShellAbortReason, ShellCommandParsingResult, ShellCommandParsingResult_ExecutableCommandArg, ShellCommandParsingResult_ExecutableCommand, ShellCommandParsingResult_Redirect, CommandClassifierResult, CommandClassifierResult_SuggestedSandboxMode, CommandClassifierResult_ClassifiedCommand, ShellOutputNotificationConfig, ForceBackgroundShellArgs, ForceBackgroundShellResult, ShellHookApprovalRequirement, ShellHookApprovalRequirement_Kind, ShellArgs, ShellResult, ShellStreamStdout, ShellStreamStderr, ShellStreamExit, ShellStreamStart, ShellStreamBackgrounded, ShellStreamHookContext, ShellSandboxUnsupported, ShellStream, ShellSuccess, ShellFailure, ShellTimeout, ShellRejected, ShellPermissionDenied, ShellSpawnError, ShellPartialResult };
