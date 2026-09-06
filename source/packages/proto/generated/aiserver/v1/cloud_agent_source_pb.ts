/**
 * Complete generated Grok Bot 0.18 BackgroundComposer closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:415512-415558
 * Region SHA-256: b59bfbea6dbdb20af907fb63b2dd62b5e26fd7dd0119af1fe6e1d1d53a4466a3
 * BackgroundComposer closure exports: 0 messages + 1 enums = 1
 */
import { Message, proto3, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type CloudAgentSourceCategory = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
var CloudAgentSourceCategory: {
  "UNSPECIFIED": 0;
  "DESKTOP": 1;
  "WEB": 2;
  "MOBILE": 3;
  "SLACK": 4;
  "LINEAR": 5;
  "SCM": 6;
  "CLI": 7;
  "SETUP": 8;
  "SDK": 9;
  "AUTOMATIONS": 10;
  "API": 11;
  "BUGBOT_AUTOFIX": 12;
  "QABOT_FRONTEND": 13;
  "LOCAL": 14;
  "INTERNAL": 15;
  "SAND": 16;
  0: "UNSPECIFIED";
  1: "DESKTOP";
  2: "WEB";
  3: "MOBILE";
  4: "SLACK";
  5: "LINEAR";
  6: "SCM";
  7: "CLI";
  8: "SETUP";
  9: "SDK";
  10: "AUTOMATIONS";
  11: "API";
  12: "BUGBOT_AUTOFIX";
  13: "QABOT_FRONTEND";
  14: "LOCAL";
  15: "INTERNAL";
  16: "SAND";
};
(function(CloudAgentSourceCategory2) {
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["DESKTOP"] = 1] = "DESKTOP";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["WEB"] = 2] = "WEB";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["MOBILE"] = 3] = "MOBILE";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["SLACK"] = 4] = "SLACK";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["LINEAR"] = 5] = "LINEAR";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["SCM"] = 6] = "SCM";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["CLI"] = 7] = "CLI";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["SETUP"] = 8] = "SETUP";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["SDK"] = 9] = "SDK";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["AUTOMATIONS"] = 10] = "AUTOMATIONS";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["API"] = 11] = "API";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["BUGBOT_AUTOFIX"] = 12] = "BUGBOT_AUTOFIX";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["QABOT_FRONTEND"] = 13] = "QABOT_FRONTEND";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["LOCAL"] = 14] = "LOCAL";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["INTERNAL"] = 15] = "INTERNAL";
  CloudAgentSourceCategory2[CloudAgentSourceCategory2["SAND"] = 16] = "SAND";
})(CloudAgentSourceCategory! || (CloudAgentSourceCategory = {} as typeof CloudAgentSourceCategory));
proto3.util.setEnumType(CloudAgentSourceCategory, "aiserver.v1.CloudAgentSourceCategory", [
  { no: 0, name: "CLOUD_AGENT_SOURCE_CATEGORY_UNSPECIFIED" },
  { no: 1, name: "CLOUD_AGENT_SOURCE_CATEGORY_DESKTOP" },
  { no: 2, name: "CLOUD_AGENT_SOURCE_CATEGORY_WEB" },
  { no: 3, name: "CLOUD_AGENT_SOURCE_CATEGORY_MOBILE" },
  { no: 4, name: "CLOUD_AGENT_SOURCE_CATEGORY_SLACK" },
  { no: 5, name: "CLOUD_AGENT_SOURCE_CATEGORY_LINEAR" },
  { no: 6, name: "CLOUD_AGENT_SOURCE_CATEGORY_SCM" },
  { no: 7, name: "CLOUD_AGENT_SOURCE_CATEGORY_CLI" },
  { no: 8, name: "CLOUD_AGENT_SOURCE_CATEGORY_SETUP" },
  { no: 9, name: "CLOUD_AGENT_SOURCE_CATEGORY_SDK" },
  { no: 10, name: "CLOUD_AGENT_SOURCE_CATEGORY_AUTOMATIONS" },
  { no: 11, name: "CLOUD_AGENT_SOURCE_CATEGORY_API" },
  { no: 12, name: "CLOUD_AGENT_SOURCE_CATEGORY_BUGBOT_AUTOFIX" },
  { no: 13, name: "CLOUD_AGENT_SOURCE_CATEGORY_QABOT_FRONTEND" },
  { no: 14, name: "CLOUD_AGENT_SOURCE_CATEGORY_LOCAL" },
  { no: 15, name: "CLOUD_AGENT_SOURCE_CATEGORY_INTERNAL" },
  { no: 16, name: "CLOUD_AGENT_SOURCE_CATEGORY_SAND" }
]);


export { CloudAgentSourceCategory };
