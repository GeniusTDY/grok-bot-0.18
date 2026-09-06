/**
 * Complete generated Grok Bot 0.18 AI Server closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:182187-182365
 * Region SHA-256: 848dfc7fb8baa5724dac73798cc521e17e49fd1f8a5ed37e22f1e6f7c3ca900d
 * AI Server closure exports: 2 messages + 1 enums = 3
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type InterfaceAgentStatus_Status = 0 | 1 | 2 | 3 | 4;
var InterfaceAgentStatus_Status: {
  "UNSPECIFIED": 0;
  "WAITING": 1;
  "RUNNING": 2;
  "SUCCESS": 3;
  "FAILURE": 4;
  0: "UNSPECIFIED";
  1: "WAITING";
  2: "RUNNING";
  3: "SUCCESS";
  4: "FAILURE";
};
var InterfaceAgentClientState$Runtime = (() => class _InterfaceAgentClientState extends Message<_InterfaceAgentClientState> {
  declare interfaceRelativeWorkspacePath: string;
  declare interfaceLines: string[];
  declare testRelativeWorkspacePath?: string;
  declare testLines: string[];
  declare implementationRelativeWorkspacePath?: string;
  declare implementationLines: string[];
  declare language: string;
  declare testingFramework: string;
  constructor(data?: PartialMessage<_InterfaceAgentClientState>) {
    super();
    this.interfaceRelativeWorkspacePath = "";
    this.interfaceLines = [];
    this.testLines = [];
    this.implementationLines = [];
    this.language = "";
    this.testingFramework = "";
    proto3.util.initPartial(data, this as _InterfaceAgentClientState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InterfaceAgentClientState {
    return new _InterfaceAgentClientState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InterfaceAgentClientState {
    return new _InterfaceAgentClientState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InterfaceAgentClientState {
    return new _InterfaceAgentClientState().fromJsonString(jsonString, options);
  }
  static equals(a: _InterfaceAgentClientState | PlainMessage<_InterfaceAgentClientState> | undefined | null, b2: _InterfaceAgentClientState | PlainMessage<_InterfaceAgentClientState> | undefined | null): boolean {
    return proto3.util.equals(_InterfaceAgentClientState as unknown as MessageType<_InterfaceAgentClientState>, a, b2);
  }
})();
export type InterfaceAgentClientState = InstanceType<typeof InterfaceAgentClientState$Runtime>;
var InterfaceAgentClientState: MessageType<InterfaceAgentClientState> = InterfaceAgentClientState$Runtime as unknown as MessageType<InterfaceAgentClientState>;
(InterfaceAgentClientState as MutableMessageType<InterfaceAgentClientState>).runtime = proto3;
(InterfaceAgentClientState as MutableMessageType<InterfaceAgentClientState>).typeName = "aiserver.v1.InterfaceAgentClientState";
(InterfaceAgentClientState as MutableMessageType<InterfaceAgentClientState>).fields = proto3.util.newFieldList(() => [
  {
    no: 3,
    name: "interface_relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "interface_lines", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "test_relative_workspace_path", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "test_lines", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "implementation_relative_workspace_path", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "implementation_lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 8,
    name: "language",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "testing_framework",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InterfaceAgentStatus$Runtime = (() => class _InterfaceAgentStatus extends Message<_InterfaceAgentStatus> {
  declare validateConfiguration: InterfaceAgentStatus_Status;
  declare stubNewFunction: InterfaceAgentStatus_Status;
  declare verifySpec: InterfaceAgentStatus_Status;
  declare writeTestPlan: InterfaceAgentStatus_Status;
  declare writeTests: InterfaceAgentStatus_Status;
  declare writeImplementation: InterfaceAgentStatus_Status;
  declare implementNewFunction: InterfaceAgentStatus_Status;
  declare runTests: InterfaceAgentStatus_Status;
  declare validateConfigurationMessage: string;
  declare stubNewFunctionMessage: string;
  declare verifySpecMessage: string;
  declare writeTestPlanMessage: string;
  declare writeTestsMessage: string;
  declare writeImplementationMessage: string;
  declare implementNewFunctionMessage: string;
  declare runTestsMessage: string;
  constructor(data?: PartialMessage<_InterfaceAgentStatus>) {
    super();
    this.validateConfiguration = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.stubNewFunction = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.verifySpec = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.writeTestPlan = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.writeTests = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.writeImplementation = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.implementNewFunction = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.runTests = InterfaceAgentStatus_Status.UNSPECIFIED;
    this.validateConfigurationMessage = "";
    this.stubNewFunctionMessage = "";
    this.verifySpecMessage = "";
    this.writeTestPlanMessage = "";
    this.writeTestsMessage = "";
    this.writeImplementationMessage = "";
    this.implementNewFunctionMessage = "";
    this.runTestsMessage = "";
    proto3.util.initPartial(data, this as _InterfaceAgentStatus);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InterfaceAgentStatus {
    return new _InterfaceAgentStatus().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InterfaceAgentStatus {
    return new _InterfaceAgentStatus().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InterfaceAgentStatus {
    return new _InterfaceAgentStatus().fromJsonString(jsonString, options);
  }
  static equals(a: _InterfaceAgentStatus | PlainMessage<_InterfaceAgentStatus> | undefined | null, b2: _InterfaceAgentStatus | PlainMessage<_InterfaceAgentStatus> | undefined | null): boolean {
    return proto3.util.equals(_InterfaceAgentStatus as unknown as MessageType<_InterfaceAgentStatus>, a, b2);
  }
})();
export type InterfaceAgentStatus = InstanceType<typeof InterfaceAgentStatus$Runtime>;
var InterfaceAgentStatus: MessageType<InterfaceAgentStatus> = InterfaceAgentStatus$Runtime as unknown as MessageType<InterfaceAgentStatus>;
(InterfaceAgentStatus as MutableMessageType<InterfaceAgentStatus>).runtime = proto3;
(InterfaceAgentStatus as MutableMessageType<InterfaceAgentStatus>).typeName = "aiserver.v1.InterfaceAgentStatus";
(InterfaceAgentStatus as MutableMessageType<InterfaceAgentStatus>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "validate_configuration", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 2, name: "stub_new_function", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 3, name: "verify_spec", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 15, name: "write_test_plan", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 4, name: "write_tests", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 5, name: "write_implementation", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 6, name: "implement_new_function", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  { no: 7, name: "run_tests", kind: "enum", T: proto3.getEnumType(InterfaceAgentStatus_Status) },
  {
    no: 8,
    name: "validate_configuration_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "stub_new_function_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "verify_spec_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 16,
    name: "write_test_plan_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 11,
    name: "write_tests_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "write_implementation_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 13,
    name: "implement_new_function_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "run_tests_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(InterfaceAgentStatus_Status2) {
  InterfaceAgentStatus_Status2[InterfaceAgentStatus_Status2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  InterfaceAgentStatus_Status2[InterfaceAgentStatus_Status2["WAITING"] = 1] = "WAITING";
  InterfaceAgentStatus_Status2[InterfaceAgentStatus_Status2["RUNNING"] = 2] = "RUNNING";
  InterfaceAgentStatus_Status2[InterfaceAgentStatus_Status2["SUCCESS"] = 3] = "SUCCESS";
  InterfaceAgentStatus_Status2[InterfaceAgentStatus_Status2["FAILURE"] = 4] = "FAILURE";
})(InterfaceAgentStatus_Status! || (InterfaceAgentStatus_Status = {} as typeof InterfaceAgentStatus_Status));
proto3.util.setEnumType(InterfaceAgentStatus_Status, "aiserver.v1.InterfaceAgentStatus.Status", [
  { no: 0, name: "STATUS_UNSPECIFIED" },
  { no: 1, name: "STATUS_WAITING" },
  { no: 2, name: "STATUS_RUNNING" },
  { no: 3, name: "STATUS_SUCCESS" },
  { no: 4, name: "STATUS_FAILURE" }
]);


export { InterfaceAgentClientState, InterfaceAgentStatus, InterfaceAgentStatus_Status };
