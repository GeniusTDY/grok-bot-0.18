/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:248624-248646
 * Region SHA-256: ff39ea53c24cc041fb77392d9ae9745d554856cee9f9c5d5287c0575aeecb31d
 */
import { Any, Empty, Message, Struct, Value, proto3, protoInt64 } from "@bufbuild/protobuf";

export type PrivacyMode = 0 | 1 | 2 | 3 | 4;
var PrivacyMode: {
  "UNSPECIFIED": 0;
  "NO_STORAGE": 1;
  "NO_TRAINING": 2;
  "USAGE_DATA_TRAINING_ALLOWED": 3;
  "USAGE_CODEBASE_TRAINING_ALLOWED": 4;
  0: "UNSPECIFIED";
  1: "NO_STORAGE";
  2: "NO_TRAINING";
  3: "USAGE_DATA_TRAINING_ALLOWED";
  4: "USAGE_CODEBASE_TRAINING_ALLOWED";
};
(function(PrivacyMode2) {
  PrivacyMode2[PrivacyMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PrivacyMode2[PrivacyMode2["NO_STORAGE"] = 1] = "NO_STORAGE";
  PrivacyMode2[PrivacyMode2["NO_TRAINING"] = 2] = "NO_TRAINING";
  PrivacyMode2[PrivacyMode2["USAGE_DATA_TRAINING_ALLOWED"] = 3] = "USAGE_DATA_TRAINING_ALLOWED";
  PrivacyMode2[PrivacyMode2["USAGE_CODEBASE_TRAINING_ALLOWED"] = 4] = "USAGE_CODEBASE_TRAINING_ALLOWED";
})(PrivacyMode! || (PrivacyMode = {} as typeof PrivacyMode));
proto3.util.setEnumType(PrivacyMode, "aiserver.v1.PrivacyMode", [
  { no: 0, name: "PRIVACY_MODE_UNSPECIFIED" },
  { no: 1, name: "PRIVACY_MODE_NO_STORAGE" },
  { no: 2, name: "PRIVACY_MODE_NO_TRAINING" },
  { no: 3, name: "PRIVACY_MODE_USAGE_DATA_TRAINING_ALLOWED" },
  { no: 4, name: "PRIVACY_MODE_USAGE_CODEBASE_TRAINING_ALLOWED" }
]);


export { PrivacyMode };
