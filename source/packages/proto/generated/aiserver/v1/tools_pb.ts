/**
 * Complete generated Grok Bot 0.18 Dashboard closure module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Canonical evidence: src/app/dist/electron-main/main.cjs:149935-160951
 * Region SHA-256: 8f3ebd21345db06aa8db2cad15d9828be8b37043d2a924ad25ac6502b09f45a8
 * Dashboard closure exports: 294 messages + 13 enums = 307
 */
import { Message, proto3, protoInt64, Struct, Timestamp, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";
import { FileDiff, SimpleRange, LineRange, DetailedLine, FileGit, File2, Diagnostic2, LinterError, LinterErrors, CursorRule2, DocumentSymbol, ImageProto2 } from "./utils_pb.js";
import { WriteShellStdinArgs, WriteShellStdinResult } from "../../agent/v1/background_shell_exec_pb.js";
import { RecordScreenArgs, RecordScreenResult } from "../../agent/v1/record_screen_exec_pb.js";
import { ApplyAgentDiffResult } from "../../agent/v1/apply_agent_diff_tool_pb.js";
import { GenerateImageResult } from "../../agent/v1/generate_image_tool_pb.js";
import { AiAttributionResult } from "../../agent/v1/ai_attribution_tool_pb.js";
import { CodeResult, FileResult, RepositoryInfo } from "./repository_pb.js";
import { SandboxPolicy } from "../../agent/v1/sandbox_pb.js";
import { ShellCommandParsingResult, CommandClassifierResult } from "../../agent/v1/shell_exec_pb.js";
import { TaskMode } from "../../agent/v1/subagents_pb.js";
import { TerminalMetadata } from "../../agent/v1/ls_exec_pb.js";
import { ComputerUseAction, ComputerUseResult, ComputerUseSuccess, ComputerUseError } from "../../agent/v1/computer_use_tool_pb.js";
import { BugfixResultItem, ReportBugfixResultsSuccess, ReportBugfixResultsError, ReportBugfixResultsResult } from "../../agent/v1/report_bugfix_results_tool_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type ClientSideToolV2 = 0 | 1 | 3 | 5 | 6 | 7 | 8 | 9 | 11 | 12 | 15 | 16 | 18 | 19 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 65 | 66;
var ClientSideToolV2: {
  "UNSPECIFIED": 0;
  "READ_SEMSEARCH_FILES": 1;
  "RIPGREP_SEARCH": 3;
  "READ_FILE": 5;
  "LIST_DIR": 6;
  "EDIT_FILE": 7;
  "FILE_SEARCH": 8;
  "SEMANTIC_SEARCH_FULL": 9;
  "DELETE_FILE": 11;
  "REAPPLY": 12;
  "RUN_TERMINAL_COMMAND_V2": 15;
  "FETCH_RULES": 16;
  "WEB_SEARCH": 18;
  "MCP": 19;
  "SEARCH_SYMBOLS": 23;
  "BACKGROUND_COMPOSER_FOLLOWUP": 24;
  "KNOWLEDGE_BASE": 25;
  "FETCH_PULL_REQUEST": 26;
  "DEEP_SEARCH": 27;
  "CREATE_DIAGRAM": 28;
  "FIX_LINTS": 29;
  "READ_LINTS": 30;
  "GO_TO_DEFINITION": 31;
  "TASK": 32;
  "AWAIT_TASK": 33;
  "TODO_READ": 34;
  "TODO_WRITE": 35;
  "EDIT_FILE_V2": 38;
  "LIST_DIR_V2": 39;
  "READ_FILE_V2": 40;
  "RIPGREP_RAW_SEARCH": 41;
  "GLOB_FILE_SEARCH": 42;
  "CREATE_PLAN": 43;
  "LIST_MCP_RESOURCES": 44;
  "READ_MCP_RESOURCE": 45;
  "READ_PROJECT": 46;
  "UPDATE_PROJECT": 47;
  "TASK_V2": 48;
  "CALL_MCP_TOOL": 49;
  "APPLY_AGENT_DIFF": 50;
  "ASK_QUESTION": 51;
  "SWITCH_MODE": 52;
  "GENERATE_IMAGE": 53;
  "COMPUTER_USE": 54;
  "WRITE_SHELL_STDIN": 55;
  "RECORD_SCREEN": 56;
  "WEB_FETCH": 57;
  "REPORT_BUGFIX_RESULTS": 58;
  "AI_ATTRIBUTION": 59;
  "MCP_AUTH": 60;
  "REFLECT": 61;
  "AWAIT": 62;
  "GET_MCP_TOOLS": 63;
  "SEND_TO_USER": 65;
  "CONNECT_SCM": 66;
  0: "UNSPECIFIED";
  1: "READ_SEMSEARCH_FILES";
  3: "RIPGREP_SEARCH";
  5: "READ_FILE";
  6: "LIST_DIR";
  7: "EDIT_FILE";
  8: "FILE_SEARCH";
  9: "SEMANTIC_SEARCH_FULL";
  11: "DELETE_FILE";
  12: "REAPPLY";
  15: "RUN_TERMINAL_COMMAND_V2";
  16: "FETCH_RULES";
  18: "WEB_SEARCH";
  19: "MCP";
  23: "SEARCH_SYMBOLS";
  24: "BACKGROUND_COMPOSER_FOLLOWUP";
  25: "KNOWLEDGE_BASE";
  26: "FETCH_PULL_REQUEST";
  27: "DEEP_SEARCH";
  28: "CREATE_DIAGRAM";
  29: "FIX_LINTS";
  30: "READ_LINTS";
  31: "GO_TO_DEFINITION";
  32: "TASK";
  33: "AWAIT_TASK";
  34: "TODO_READ";
  35: "TODO_WRITE";
  38: "EDIT_FILE_V2";
  39: "LIST_DIR_V2";
  40: "READ_FILE_V2";
  41: "RIPGREP_RAW_SEARCH";
  42: "GLOB_FILE_SEARCH";
  43: "CREATE_PLAN";
  44: "LIST_MCP_RESOURCES";
  45: "READ_MCP_RESOURCE";
  46: "READ_PROJECT";
  47: "UPDATE_PROJECT";
  48: "TASK_V2";
  49: "CALL_MCP_TOOL";
  50: "APPLY_AGENT_DIFF";
  51: "ASK_QUESTION";
  52: "SWITCH_MODE";
  53: "GENERATE_IMAGE";
  54: "COMPUTER_USE";
  55: "WRITE_SHELL_STDIN";
  56: "RECORD_SCREEN";
  57: "WEB_FETCH";
  58: "REPORT_BUGFIX_RESULTS";
  59: "AI_ATTRIBUTION";
  60: "MCP_AUTH";
  61: "REFLECT";
  62: "AWAIT";
  63: "GET_MCP_TOOLS";
  65: "SEND_TO_USER";
  66: "CONNECT_SCM";
};
export type ShellType = 0 | 1 | 2;
var ShellType: {
  "UNSPECIFIED": 0;
  "BASH": 1;
  "POWERSHELL": 2;
  0: "UNSPECIFIED";
  1: "BASH";
  2: "POWERSHELL";
};
export type BuiltinTool = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;
var BuiltinTool: {
  "UNSPECIFIED": 0;
  "SEARCH": 1;
  "READ_CHUNK": 2;
  "GOTODEF": 3;
  "EDIT": 4;
  "UNDO_EDIT": 5;
  "END": 6;
  "NEW_FILE": 7;
  "ADD_TEST": 8;
  "RUN_TEST": 9;
  "DELETE_TEST": 10;
  "SAVE_FILE": 11;
  "GET_TESTS": 12;
  "GET_SYMBOLS": 13;
  "SEMANTIC_SEARCH": 14;
  "GET_PROJECT_STRUCTURE": 15;
  "CREATE_RM_FILES": 16;
  "RUN_TERMINAL_COMMANDS": 17;
  "NEW_EDIT": 18;
  "READ_WITH_LINTER": 19;
  0: "UNSPECIFIED";
  1: "SEARCH";
  2: "READ_CHUNK";
  3: "GOTODEF";
  4: "EDIT";
  5: "UNDO_EDIT";
  6: "END";
  7: "NEW_FILE";
  8: "ADD_TEST";
  9: "RUN_TEST";
  10: "DELETE_TEST";
  11: "SAVE_FILE";
  12: "GET_TESTS";
  13: "GET_SYMBOLS";
  14: "SEMANTIC_SEARCH";
  15: "GET_PROJECT_STRUCTURE";
  16: "CREATE_RM_FILES";
  17: "RUN_TERMINAL_COMMANDS";
  18: "NEW_EDIT";
  19: "READ_WITH_LINTER";
};
export type RunTerminalCommandEndedReason = 0 | 1 | 2 | 3 | 4 | 5;
var RunTerminalCommandEndedReason: {
  "UNSPECIFIED": 0;
  "EXECUTION_COMPLETED": 1;
  "EXECUTION_ABORTED": 2;
  "EXECUTION_FAILED": 3;
  "ERROR_OCCURRED_CHECKING_REASON": 4;
  "IDLE_TIMEOUT": 5;
  0: "UNSPECIFIED";
  1: "EXECUTION_COMPLETED";
  2: "EXECUTION_ABORTED";
  3: "EXECUTION_FAILED";
  4: "ERROR_OCCURRED_CHECKING_REASON";
  5: "IDLE_TIMEOUT";
};
export type ToolResultAttachments_TodoReminderType = 0 | 1 | 2;
var ToolResultAttachments_TodoReminderType: {
  "UNSPECIFIED": 0;
  "EVERY_10_TURNS": 1;
  "AFTER_EDIT": 2;
  0: "UNSPECIFIED";
  1: "EVERY_10_TURNS";
  2: "AFTER_EDIT";
};
export type EditFileResult_FileDiff_Editor = 0 | 1 | 2;
var EditFileResult_FileDiff_Editor: {
  "UNSPECIFIED": 0;
  "AI": 1;
  "HUMAN": 2;
  0: "UNSPECIFIED";
  1: "AI";
  2: "HUMAN";
};
export type EditFileResult_RecoverableError_RecoverableErrorType = 0 | 1 | 2;
var EditFileResult_RecoverableError_RecoverableErrorType: {
  "UNSPECIFIED": 0;
  "SEARCH_STRING_NOT_FOUND": 1;
  "AMBIGUOUS_SEARCH_STRING": 2;
  0: "UNSPECIFIED";
  1: "SEARCH_STRING_NOT_FOUND";
  2: "AMBIGUOUS_SEARCH_STRING";
};
export type RipgrepSearchResultInternal_TextSearchCompleteMessageType = 0 | 1 | 2;
var RipgrepSearchResultInternal_TextSearchCompleteMessageType: {
  "UNSPECIFIED": 0;
  "INFORMATION": 1;
  "WARNING": 2;
  0: "UNSPECIFIED";
  1: "INFORMATION";
  2: "WARNING";
};
export type RipgrepSearchResultInternal_SearchCompletionExitCode = 0 | 1 | 2;
var RipgrepSearchResultInternal_SearchCompletionExitCode: {
  "UNSPECIFIED": 0;
  "NORMAL": 1;
  "NEW_SEARCH_STARTED": 2;
  0: "UNSPECIFIED";
  1: "NORMAL";
  2: "NEW_SEARCH_STARTED";
};
export type RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType = 0 | 1 | 2;
var RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType: {
  "UNSPECIFIED": 0;
  "FILE_SEARCH_PROVIDER": 1;
  "SEARCH_PROCESS": 2;
  0: "UNSPECIFIED";
  1: "FILE_SEARCH_PROVIDER";
  2: "SEARCH_PROCESS";
};
export type RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType = 0 | 1 | 2 | 3;
var RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType: {
  "UNSPECIFIED": 0;
  "TEXT_SEARCH_PROVIDER": 1;
  "SEARCH_PROCESS": 2;
  "AI_TEXT_SEARCH_PROVIDER": 3;
  0: "UNSPECIFIED";
  1: "TEXT_SEARCH_PROVIDER";
  2: "SEARCH_PROCESS";
  3: "AI_TEXT_SEARCH_PROVIDER";
};
export type MissingFile_MissingReason = 0 | 1 | 2;
var MissingFile_MissingReason: {
  "UNSPECIFIED": 0;
  "TOO_LARGE": 1;
  "NOT_FOUND": 2;
  0: "UNSPECIFIED";
  1: "TOO_LARGE";
  2: "NOT_FOUND";
};
export type EditParams_FrontendEditType = 0 | 1 | 2;
var EditParams_FrontendEditType: {
  "UNSPECIFIED": 0;
  "INLINE_DIFFS": 1;
  "SIMPLE": 2;
  0: "UNSPECIFIED";
  1: "INLINE_DIFFS";
  2: "SIMPLE";
};
(function(ClientSideToolV22) {
  ClientSideToolV22[ClientSideToolV22["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ClientSideToolV22[ClientSideToolV22["READ_SEMSEARCH_FILES"] = 1] = "READ_SEMSEARCH_FILES";
  ClientSideToolV22[ClientSideToolV22["RIPGREP_SEARCH"] = 3] = "RIPGREP_SEARCH";
  ClientSideToolV22[ClientSideToolV22["READ_FILE"] = 5] = "READ_FILE";
  ClientSideToolV22[ClientSideToolV22["LIST_DIR"] = 6] = "LIST_DIR";
  ClientSideToolV22[ClientSideToolV22["EDIT_FILE"] = 7] = "EDIT_FILE";
  ClientSideToolV22[ClientSideToolV22["FILE_SEARCH"] = 8] = "FILE_SEARCH";
  ClientSideToolV22[ClientSideToolV22["SEMANTIC_SEARCH_FULL"] = 9] = "SEMANTIC_SEARCH_FULL";
  ClientSideToolV22[ClientSideToolV22["DELETE_FILE"] = 11] = "DELETE_FILE";
  ClientSideToolV22[ClientSideToolV22["REAPPLY"] = 12] = "REAPPLY";
  ClientSideToolV22[ClientSideToolV22["RUN_TERMINAL_COMMAND_V2"] = 15] = "RUN_TERMINAL_COMMAND_V2";
  ClientSideToolV22[ClientSideToolV22["FETCH_RULES"] = 16] = "FETCH_RULES";
  ClientSideToolV22[ClientSideToolV22["WEB_SEARCH"] = 18] = "WEB_SEARCH";
  ClientSideToolV22[ClientSideToolV22["MCP"] = 19] = "MCP";
  ClientSideToolV22[ClientSideToolV22["SEARCH_SYMBOLS"] = 23] = "SEARCH_SYMBOLS";
  ClientSideToolV22[ClientSideToolV22["BACKGROUND_COMPOSER_FOLLOWUP"] = 24] = "BACKGROUND_COMPOSER_FOLLOWUP";
  ClientSideToolV22[ClientSideToolV22["KNOWLEDGE_BASE"] = 25] = "KNOWLEDGE_BASE";
  ClientSideToolV22[ClientSideToolV22["FETCH_PULL_REQUEST"] = 26] = "FETCH_PULL_REQUEST";
  ClientSideToolV22[ClientSideToolV22["DEEP_SEARCH"] = 27] = "DEEP_SEARCH";
  ClientSideToolV22[ClientSideToolV22["CREATE_DIAGRAM"] = 28] = "CREATE_DIAGRAM";
  ClientSideToolV22[ClientSideToolV22["FIX_LINTS"] = 29] = "FIX_LINTS";
  ClientSideToolV22[ClientSideToolV22["READ_LINTS"] = 30] = "READ_LINTS";
  ClientSideToolV22[ClientSideToolV22["GO_TO_DEFINITION"] = 31] = "GO_TO_DEFINITION";
  ClientSideToolV22[ClientSideToolV22["TASK"] = 32] = "TASK";
  ClientSideToolV22[ClientSideToolV22["AWAIT_TASK"] = 33] = "AWAIT_TASK";
  ClientSideToolV22[ClientSideToolV22["TODO_READ"] = 34] = "TODO_READ";
  ClientSideToolV22[ClientSideToolV22["TODO_WRITE"] = 35] = "TODO_WRITE";
  ClientSideToolV22[ClientSideToolV22["EDIT_FILE_V2"] = 38] = "EDIT_FILE_V2";
  ClientSideToolV22[ClientSideToolV22["LIST_DIR_V2"] = 39] = "LIST_DIR_V2";
  ClientSideToolV22[ClientSideToolV22["READ_FILE_V2"] = 40] = "READ_FILE_V2";
  ClientSideToolV22[ClientSideToolV22["RIPGREP_RAW_SEARCH"] = 41] = "RIPGREP_RAW_SEARCH";
  ClientSideToolV22[ClientSideToolV22["GLOB_FILE_SEARCH"] = 42] = "GLOB_FILE_SEARCH";
  ClientSideToolV22[ClientSideToolV22["CREATE_PLAN"] = 43] = "CREATE_PLAN";
  ClientSideToolV22[ClientSideToolV22["LIST_MCP_RESOURCES"] = 44] = "LIST_MCP_RESOURCES";
  ClientSideToolV22[ClientSideToolV22["READ_MCP_RESOURCE"] = 45] = "READ_MCP_RESOURCE";
  ClientSideToolV22[ClientSideToolV22["READ_PROJECT"] = 46] = "READ_PROJECT";
  ClientSideToolV22[ClientSideToolV22["UPDATE_PROJECT"] = 47] = "UPDATE_PROJECT";
  ClientSideToolV22[ClientSideToolV22["TASK_V2"] = 48] = "TASK_V2";
  ClientSideToolV22[ClientSideToolV22["CALL_MCP_TOOL"] = 49] = "CALL_MCP_TOOL";
  ClientSideToolV22[ClientSideToolV22["APPLY_AGENT_DIFF"] = 50] = "APPLY_AGENT_DIFF";
  ClientSideToolV22[ClientSideToolV22["ASK_QUESTION"] = 51] = "ASK_QUESTION";
  ClientSideToolV22[ClientSideToolV22["SWITCH_MODE"] = 52] = "SWITCH_MODE";
  ClientSideToolV22[ClientSideToolV22["GENERATE_IMAGE"] = 53] = "GENERATE_IMAGE";
  ClientSideToolV22[ClientSideToolV22["COMPUTER_USE"] = 54] = "COMPUTER_USE";
  ClientSideToolV22[ClientSideToolV22["WRITE_SHELL_STDIN"] = 55] = "WRITE_SHELL_STDIN";
  ClientSideToolV22[ClientSideToolV22["RECORD_SCREEN"] = 56] = "RECORD_SCREEN";
  ClientSideToolV22[ClientSideToolV22["WEB_FETCH"] = 57] = "WEB_FETCH";
  ClientSideToolV22[ClientSideToolV22["REPORT_BUGFIX_RESULTS"] = 58] = "REPORT_BUGFIX_RESULTS";
  ClientSideToolV22[ClientSideToolV22["AI_ATTRIBUTION"] = 59] = "AI_ATTRIBUTION";
  ClientSideToolV22[ClientSideToolV22["MCP_AUTH"] = 60] = "MCP_AUTH";
  ClientSideToolV22[ClientSideToolV22["REFLECT"] = 61] = "REFLECT";
  ClientSideToolV22[ClientSideToolV22["AWAIT"] = 62] = "AWAIT";
  ClientSideToolV22[ClientSideToolV22["GET_MCP_TOOLS"] = 63] = "GET_MCP_TOOLS";
  ClientSideToolV22[ClientSideToolV22["SEND_TO_USER"] = 65] = "SEND_TO_USER";
  ClientSideToolV22[ClientSideToolV22["CONNECT_SCM"] = 66] = "CONNECT_SCM";
})(ClientSideToolV2! || (ClientSideToolV2 = {} as typeof ClientSideToolV2));
proto3.util.setEnumType(ClientSideToolV2, "aiserver.v1.ClientSideToolV2", [
  { no: 0, name: "CLIENT_SIDE_TOOL_V2_UNSPECIFIED" },
  { no: 1, name: "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES" },
  { no: 3, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH" },
  { no: 5, name: "CLIENT_SIDE_TOOL_V2_READ_FILE" },
  { no: 6, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR" },
  { no: 7, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE" },
  { no: 8, name: "CLIENT_SIDE_TOOL_V2_FILE_SEARCH" },
  { no: 9, name: "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL" },
  { no: 11, name: "CLIENT_SIDE_TOOL_V2_DELETE_FILE" },
  { no: 12, name: "CLIENT_SIDE_TOOL_V2_REAPPLY" },
  { no: 15, name: "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2" },
  { no: 16, name: "CLIENT_SIDE_TOOL_V2_FETCH_RULES" },
  { no: 18, name: "CLIENT_SIDE_TOOL_V2_WEB_SEARCH" },
  { no: 19, name: "CLIENT_SIDE_TOOL_V2_MCP" },
  { no: 23, name: "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS" },
  { no: 24, name: "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP" },
  { no: 25, name: "CLIENT_SIDE_TOOL_V2_KNOWLEDGE_BASE" },
  { no: 26, name: "CLIENT_SIDE_TOOL_V2_FETCH_PULL_REQUEST" },
  { no: 27, name: "CLIENT_SIDE_TOOL_V2_DEEP_SEARCH" },
  { no: 28, name: "CLIENT_SIDE_TOOL_V2_CREATE_DIAGRAM" },
  { no: 29, name: "CLIENT_SIDE_TOOL_V2_FIX_LINTS" },
  { no: 30, name: "CLIENT_SIDE_TOOL_V2_READ_LINTS" },
  { no: 31, name: "CLIENT_SIDE_TOOL_V2_GO_TO_DEFINITION" },
  { no: 32, name: "CLIENT_SIDE_TOOL_V2_TASK" },
  { no: 33, name: "CLIENT_SIDE_TOOL_V2_AWAIT_TASK" },
  { no: 34, name: "CLIENT_SIDE_TOOL_V2_TODO_READ" },
  { no: 35, name: "CLIENT_SIDE_TOOL_V2_TODO_WRITE" },
  { no: 38, name: "CLIENT_SIDE_TOOL_V2_EDIT_FILE_V2" },
  { no: 39, name: "CLIENT_SIDE_TOOL_V2_LIST_DIR_V2" },
  { no: 40, name: "CLIENT_SIDE_TOOL_V2_READ_FILE_V2" },
  { no: 41, name: "CLIENT_SIDE_TOOL_V2_RIPGREP_RAW_SEARCH" },
  { no: 42, name: "CLIENT_SIDE_TOOL_V2_GLOB_FILE_SEARCH" },
  { no: 43, name: "CLIENT_SIDE_TOOL_V2_CREATE_PLAN" },
  { no: 44, name: "CLIENT_SIDE_TOOL_V2_LIST_MCP_RESOURCES" },
  { no: 45, name: "CLIENT_SIDE_TOOL_V2_READ_MCP_RESOURCE" },
  { no: 46, name: "CLIENT_SIDE_TOOL_V2_READ_PROJECT" },
  { no: 47, name: "CLIENT_SIDE_TOOL_V2_UPDATE_PROJECT" },
  { no: 48, name: "CLIENT_SIDE_TOOL_V2_TASK_V2" },
  { no: 49, name: "CLIENT_SIDE_TOOL_V2_CALL_MCP_TOOL" },
  { no: 50, name: "CLIENT_SIDE_TOOL_V2_APPLY_AGENT_DIFF" },
  { no: 51, name: "CLIENT_SIDE_TOOL_V2_ASK_QUESTION" },
  { no: 52, name: "CLIENT_SIDE_TOOL_V2_SWITCH_MODE" },
  { no: 53, name: "CLIENT_SIDE_TOOL_V2_GENERATE_IMAGE" },
  { no: 54, name: "CLIENT_SIDE_TOOL_V2_COMPUTER_USE" },
  { no: 55, name: "CLIENT_SIDE_TOOL_V2_WRITE_SHELL_STDIN" },
  { no: 56, name: "CLIENT_SIDE_TOOL_V2_RECORD_SCREEN" },
  { no: 57, name: "CLIENT_SIDE_TOOL_V2_WEB_FETCH" },
  { no: 58, name: "CLIENT_SIDE_TOOL_V2_REPORT_BUGFIX_RESULTS" },
  { no: 59, name: "CLIENT_SIDE_TOOL_V2_AI_ATTRIBUTION" },
  { no: 60, name: "CLIENT_SIDE_TOOL_V2_MCP_AUTH" },
  { no: 61, name: "CLIENT_SIDE_TOOL_V2_REFLECT" },
  { no: 62, name: "CLIENT_SIDE_TOOL_V2_AWAIT" },
  { no: 63, name: "CLIENT_SIDE_TOOL_V2_GET_MCP_TOOLS" },
  { no: 65, name: "CLIENT_SIDE_TOOL_V2_SEND_TO_USER" },
  { no: 66, name: "CLIENT_SIDE_TOOL_V2_CONNECT_SCM" }
]);
(function(ShellType2) {
  ShellType2[ShellType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ShellType2[ShellType2["BASH"] = 1] = "BASH";
  ShellType2[ShellType2["POWERSHELL"] = 2] = "POWERSHELL";
})(ShellType! || (ShellType = {} as typeof ShellType));
proto3.util.setEnumType(ShellType, "aiserver.v1.ShellType", [
  { no: 0, name: "SHELL_TYPE_UNSPECIFIED" },
  { no: 1, name: "SHELL_TYPE_BASH" },
  { no: 2, name: "SHELL_TYPE_POWERSHELL" }
]);
(function(BuiltinTool2) {
  BuiltinTool2[BuiltinTool2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BuiltinTool2[BuiltinTool2["SEARCH"] = 1] = "SEARCH";
  BuiltinTool2[BuiltinTool2["READ_CHUNK"] = 2] = "READ_CHUNK";
  BuiltinTool2[BuiltinTool2["GOTODEF"] = 3] = "GOTODEF";
  BuiltinTool2[BuiltinTool2["EDIT"] = 4] = "EDIT";
  BuiltinTool2[BuiltinTool2["UNDO_EDIT"] = 5] = "UNDO_EDIT";
  BuiltinTool2[BuiltinTool2["END"] = 6] = "END";
  BuiltinTool2[BuiltinTool2["NEW_FILE"] = 7] = "NEW_FILE";
  BuiltinTool2[BuiltinTool2["ADD_TEST"] = 8] = "ADD_TEST";
  BuiltinTool2[BuiltinTool2["RUN_TEST"] = 9] = "RUN_TEST";
  BuiltinTool2[BuiltinTool2["DELETE_TEST"] = 10] = "DELETE_TEST";
  BuiltinTool2[BuiltinTool2["SAVE_FILE"] = 11] = "SAVE_FILE";
  BuiltinTool2[BuiltinTool2["GET_TESTS"] = 12] = "GET_TESTS";
  BuiltinTool2[BuiltinTool2["GET_SYMBOLS"] = 13] = "GET_SYMBOLS";
  BuiltinTool2[BuiltinTool2["SEMANTIC_SEARCH"] = 14] = "SEMANTIC_SEARCH";
  BuiltinTool2[BuiltinTool2["GET_PROJECT_STRUCTURE"] = 15] = "GET_PROJECT_STRUCTURE";
  BuiltinTool2[BuiltinTool2["CREATE_RM_FILES"] = 16] = "CREATE_RM_FILES";
  BuiltinTool2[BuiltinTool2["RUN_TERMINAL_COMMANDS"] = 17] = "RUN_TERMINAL_COMMANDS";
  BuiltinTool2[BuiltinTool2["NEW_EDIT"] = 18] = "NEW_EDIT";
  BuiltinTool2[BuiltinTool2["READ_WITH_LINTER"] = 19] = "READ_WITH_LINTER";
})(BuiltinTool! || (BuiltinTool = {} as typeof BuiltinTool));
proto3.util.setEnumType(BuiltinTool, "aiserver.v1.BuiltinTool", [
  { no: 0, name: "BUILTIN_TOOL_UNSPECIFIED" },
  { no: 1, name: "BUILTIN_TOOL_SEARCH" },
  { no: 2, name: "BUILTIN_TOOL_READ_CHUNK" },
  { no: 3, name: "BUILTIN_TOOL_GOTODEF" },
  { no: 4, name: "BUILTIN_TOOL_EDIT" },
  { no: 5, name: "BUILTIN_TOOL_UNDO_EDIT" },
  { no: 6, name: "BUILTIN_TOOL_END" },
  { no: 7, name: "BUILTIN_TOOL_NEW_FILE" },
  { no: 8, name: "BUILTIN_TOOL_ADD_TEST" },
  { no: 9, name: "BUILTIN_TOOL_RUN_TEST" },
  { no: 10, name: "BUILTIN_TOOL_DELETE_TEST" },
  { no: 11, name: "BUILTIN_TOOL_SAVE_FILE" },
  { no: 12, name: "BUILTIN_TOOL_GET_TESTS" },
  { no: 13, name: "BUILTIN_TOOL_GET_SYMBOLS" },
  { no: 14, name: "BUILTIN_TOOL_SEMANTIC_SEARCH" },
  { no: 15, name: "BUILTIN_TOOL_GET_PROJECT_STRUCTURE" },
  { no: 16, name: "BUILTIN_TOOL_CREATE_RM_FILES" },
  { no: 17, name: "BUILTIN_TOOL_RUN_TERMINAL_COMMANDS" },
  { no: 18, name: "BUILTIN_TOOL_NEW_EDIT" },
  { no: 19, name: "BUILTIN_TOOL_READ_WITH_LINTER" }
]);
(function(RunTerminalCommandEndedReason2) {
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["EXECUTION_COMPLETED"] = 1] = "EXECUTION_COMPLETED";
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["EXECUTION_ABORTED"] = 2] = "EXECUTION_ABORTED";
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["EXECUTION_FAILED"] = 3] = "EXECUTION_FAILED";
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["ERROR_OCCURRED_CHECKING_REASON"] = 4] = "ERROR_OCCURRED_CHECKING_REASON";
  RunTerminalCommandEndedReason2[RunTerminalCommandEndedReason2["IDLE_TIMEOUT"] = 5] = "IDLE_TIMEOUT";
})(RunTerminalCommandEndedReason! || (RunTerminalCommandEndedReason = {} as typeof RunTerminalCommandEndedReason));
proto3.util.setEnumType(RunTerminalCommandEndedReason, "aiserver.v1.RunTerminalCommandEndedReason", [
  { no: 0, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_UNSPECIFIED" },
  { no: 1, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_COMPLETED" },
  { no: 2, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_ABORTED" },
  { no: 3, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_EXECUTION_FAILED" },
  { no: 4, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_ERROR_OCCURRED_CHECKING_REASON" },
  { no: 5, name: "RUN_TERMINAL_COMMAND_ENDED_REASON_IDLE_TIMEOUT" }
]);
var ReapplyParams$Runtime = (() => class _ReapplyParams extends Message<_ReapplyParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ReapplyParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ReapplyParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReapplyParams {
    return new _ReapplyParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReapplyParams {
    return new _ReapplyParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReapplyParams {
    return new _ReapplyParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReapplyParams | PlainMessage<_ReapplyParams> | undefined | null, b2: _ReapplyParams | PlainMessage<_ReapplyParams> | undefined | null): boolean {
    return proto3.util.equals(_ReapplyParams as unknown as MessageType<_ReapplyParams>, a, b2);
  }
})();
export type ReapplyParams = InstanceType<typeof ReapplyParams$Runtime>;
var ReapplyParams: MessageType<ReapplyParams> = ReapplyParams$Runtime as unknown as MessageType<ReapplyParams>;
(ReapplyParams as MutableMessageType<ReapplyParams>).runtime = proto3;
(ReapplyParams as MutableMessageType<ReapplyParams>).typeName = "aiserver.v1.ReapplyParams";
(ReapplyParams as MutableMessageType<ReapplyParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ApplyAgentDiffParams$Runtime = (() => class _ApplyAgentDiffParams extends Message<_ApplyAgentDiffParams> {
  declare agentId: string;
  constructor(data?: PartialMessage<_ApplyAgentDiffParams>) {
    super();
    this.agentId = "";
    proto3.util.initPartial(data, this as _ApplyAgentDiffParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApplyAgentDiffParams {
    return new _ApplyAgentDiffParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApplyAgentDiffParams {
    return new _ApplyAgentDiffParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApplyAgentDiffParams {
    return new _ApplyAgentDiffParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ApplyAgentDiffParams | PlainMessage<_ApplyAgentDiffParams> | undefined | null, b2: _ApplyAgentDiffParams | PlainMessage<_ApplyAgentDiffParams> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAgentDiffParams as unknown as MessageType<_ApplyAgentDiffParams>, a, b2);
  }
})();
export type ApplyAgentDiffParams = InstanceType<typeof ApplyAgentDiffParams$Runtime>;
var ApplyAgentDiffParams: MessageType<ApplyAgentDiffParams> = ApplyAgentDiffParams$Runtime as unknown as MessageType<ApplyAgentDiffParams>;
(ApplyAgentDiffParams as MutableMessageType<ApplyAgentDiffParams>).runtime = proto3;
(ApplyAgentDiffParams as MutableMessageType<ApplyAgentDiffParams>).typeName = "aiserver.v1.ApplyAgentDiffParams";
(ApplyAgentDiffParams as MutableMessageType<ApplyAgentDiffParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReapplyResult$Runtime = (() => class _ReapplyResult extends Message<_ReapplyResult> {
  declare diff?: EditFileResult_FileDiff;
  declare isApplied: boolean;
  declare applyFailed: boolean;
  declare linterErrors: LinterError[];
  declare rejected?: boolean;
  constructor(data?: PartialMessage<_ReapplyResult>) {
    super();
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    proto3.util.initPartial(data, this as _ReapplyResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReapplyResult {
    return new _ReapplyResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReapplyResult {
    return new _ReapplyResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReapplyResult {
    return new _ReapplyResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReapplyResult | PlainMessage<_ReapplyResult> | undefined | null, b2: _ReapplyResult | PlainMessage<_ReapplyResult> | undefined | null): boolean {
    return proto3.util.equals(_ReapplyResult as unknown as MessageType<_ReapplyResult>, a, b2);
  }
})();
export type ReapplyResult = InstanceType<typeof ReapplyResult$Runtime>;
var ReapplyResult: MessageType<ReapplyResult> = ReapplyResult$Runtime as unknown as MessageType<ReapplyResult>;
(ReapplyResult as MutableMessageType<ReapplyResult>).runtime = proto3;
(ReapplyResult as MutableMessageType<ReapplyResult>).typeName = "aiserver.v1.ReapplyResult";
(ReapplyResult as MutableMessageType<ReapplyResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diff", kind: "message", T: EditFileResult_FileDiff },
  {
    no: 2,
    name: "is_applied",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "apply_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "linter_errors", kind: "message", T: LinterError, repeated: true },
  { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true }
]);
var FetchRulesParams$Runtime = (() => class _FetchRulesParams extends Message<_FetchRulesParams> {
  declare ruleNames: string[];
  constructor(data?: PartialMessage<_FetchRulesParams>) {
    super();
    this.ruleNames = [];
    proto3.util.initPartial(data, this as _FetchRulesParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchRulesParams {
    return new _FetchRulesParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchRulesParams {
    return new _FetchRulesParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchRulesParams {
    return new _FetchRulesParams().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchRulesParams | PlainMessage<_FetchRulesParams> | undefined | null, b2: _FetchRulesParams | PlainMessage<_FetchRulesParams> | undefined | null): boolean {
    return proto3.util.equals(_FetchRulesParams as unknown as MessageType<_FetchRulesParams>, a, b2);
  }
})();
export type FetchRulesParams = InstanceType<typeof FetchRulesParams$Runtime>;
var FetchRulesParams: MessageType<FetchRulesParams> = FetchRulesParams$Runtime as unknown as MessageType<FetchRulesParams>;
(FetchRulesParams as MutableMessageType<FetchRulesParams>).runtime = proto3;
(FetchRulesParams as MutableMessageType<FetchRulesParams>).typeName = "aiserver.v1.FetchRulesParams";
(FetchRulesParams as MutableMessageType<FetchRulesParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rule_names", kind: "scalar", T: 9, repeated: true }
]);
var FetchRulesResult$Runtime = (() => class _FetchRulesResult extends Message<_FetchRulesResult> {
  declare rules: CursorRule2[];
  constructor(data?: PartialMessage<_FetchRulesResult>) {
    super();
    this.rules = [];
    proto3.util.initPartial(data, this as _FetchRulesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchRulesResult {
    return new _FetchRulesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchRulesResult {
    return new _FetchRulesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchRulesResult {
    return new _FetchRulesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchRulesResult | PlainMessage<_FetchRulesResult> | undefined | null, b2: _FetchRulesResult | PlainMessage<_FetchRulesResult> | undefined | null): boolean {
    return proto3.util.equals(_FetchRulesResult as unknown as MessageType<_FetchRulesResult>, a, b2);
  }
})();
export type FetchRulesResult = InstanceType<typeof FetchRulesResult$Runtime>;
var FetchRulesResult: MessageType<FetchRulesResult> = FetchRulesResult$Runtime as unknown as MessageType<FetchRulesResult>;
(FetchRulesResult as MutableMessageType<FetchRulesResult>).runtime = proto3;
(FetchRulesResult as MutableMessageType<FetchRulesResult>).typeName = "aiserver.v1.FetchRulesResult";
(FetchRulesResult as MutableMessageType<FetchRulesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rules", kind: "message", T: CursorRule2, repeated: true }
]);
var ReapplyStream$Runtime = (() => class _ReapplyStream extends Message<_ReapplyStream> {
  constructor(data?: PartialMessage<_ReapplyStream>) {
    super();
    proto3.util.initPartial(data, this as _ReapplyStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReapplyStream {
    return new _ReapplyStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReapplyStream {
    return new _ReapplyStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReapplyStream {
    return new _ReapplyStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReapplyStream | PlainMessage<_ReapplyStream> | undefined | null, b2: _ReapplyStream | PlainMessage<_ReapplyStream> | undefined | null): boolean {
    return proto3.util.equals(_ReapplyStream as unknown as MessageType<_ReapplyStream>, a, b2);
  }
})();
export type ReapplyStream = InstanceType<typeof ReapplyStream$Runtime>;
var ReapplyStream: MessageType<ReapplyStream> = ReapplyStream$Runtime as unknown as MessageType<ReapplyStream>;
(ReapplyStream as MutableMessageType<ReapplyStream>).runtime = proto3;
(ReapplyStream as MutableMessageType<ReapplyStream>).typeName = "aiserver.v1.ReapplyStream";
(ReapplyStream as MutableMessageType<ReapplyStream>).fields = proto3.util.newFieldList(() => []);
var SemanticSearchArguments$Runtime = (() => class _SemanticSearchArguments extends Message<_SemanticSearchArguments> {
  declare query: string;
  declare targetDirectories: string[];
  declare explanation: string;
  constructor(data?: PartialMessage<_SemanticSearchArguments>) {
    super();
    this.query = "";
    this.targetDirectories = [];
    this.explanation = "";
    proto3.util.initPartial(data, this as _SemanticSearchArguments);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchArguments {
    return new _SemanticSearchArguments().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchArguments {
    return new _SemanticSearchArguments().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchArguments {
    return new _SemanticSearchArguments().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchArguments | PlainMessage<_SemanticSearchArguments> | undefined | null, b2: _SemanticSearchArguments | PlainMessage<_SemanticSearchArguments> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchArguments as unknown as MessageType<_SemanticSearchArguments>, a, b2);
  }
})();
export type SemanticSearchArguments = InstanceType<typeof SemanticSearchArguments$Runtime>;
var SemanticSearchArguments: MessageType<SemanticSearchArguments> = SemanticSearchArguments$Runtime as unknown as MessageType<SemanticSearchArguments>;
(SemanticSearchArguments as MutableMessageType<SemanticSearchArguments>).runtime = proto3;
(SemanticSearchArguments as MutableMessageType<SemanticSearchArguments>).typeName = "aiserver.v1.SemanticSearchArguments";
(SemanticSearchArguments as MutableMessageType<SemanticSearchArguments>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "target_directories", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "explanation",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolResultError$Runtime = (() => class _ToolResultError extends Message<_ToolResultError> {
  declare clientVisibleErrorMessage: string;
  declare modelVisibleErrorMessage: string;
  declare actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk?: string;
  declare errorDetails: { case: "editFileErrorDetails"; value: ToolResultError_EditFileError } | { case: "searchReplaceErrorDetails"; value: ToolResultError_SearchReplaceError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ToolResultError>) {
    super();
    this.clientVisibleErrorMessage = "";
    this.modelVisibleErrorMessage = "";
    this.errorDetails = { case: void 0 };
    proto3.util.initPartial(data, this as _ToolResultError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResultError {
    return new _ToolResultError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResultError {
    return new _ToolResultError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResultError {
    return new _ToolResultError().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResultError | PlainMessage<_ToolResultError> | undefined | null, b2: _ToolResultError | PlainMessage<_ToolResultError> | undefined | null): boolean {
    return proto3.util.equals(_ToolResultError as unknown as MessageType<_ToolResultError>, a, b2);
  }
})();
export type ToolResultError = InstanceType<typeof ToolResultError$Runtime>;
var ToolResultError: MessageType<ToolResultError> = ToolResultError$Runtime as unknown as MessageType<ToolResultError>;
(ToolResultError as MutableMessageType<ToolResultError>).runtime = proto3;
(ToolResultError as MutableMessageType<ToolResultError>).typeName = "aiserver.v1.ToolResultError";
(ToolResultError as MutableMessageType<ToolResultError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "client_visible_error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "model_visible_error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "actual_error_message_only_send_from_client_to_server_never_the_other_way_around_because_that_may_be_a_security_risk", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "edit_file_error_details", kind: "message", T: ToolResultError_EditFileError, oneof: "error_details" },
  { no: 6, name: "search_replace_error_details", kind: "message", T: ToolResultError_SearchReplaceError, oneof: "error_details" }
]);
var ToolResultError_EditFileError$Runtime = (() => class _ToolResultError_EditFileError extends Message<_ToolResultError_EditFileError> {
  declare numLinesInFileBeforeEdit: number;
  constructor(data?: PartialMessage<_ToolResultError_EditFileError>) {
    super();
    this.numLinesInFileBeforeEdit = 0;
    proto3.util.initPartial(data, this as _ToolResultError_EditFileError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResultError_EditFileError {
    return new _ToolResultError_EditFileError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResultError_EditFileError {
    return new _ToolResultError_EditFileError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResultError_EditFileError {
    return new _ToolResultError_EditFileError().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResultError_EditFileError | PlainMessage<_ToolResultError_EditFileError> | undefined | null, b2: _ToolResultError_EditFileError | PlainMessage<_ToolResultError_EditFileError> | undefined | null): boolean {
    return proto3.util.equals(_ToolResultError_EditFileError as unknown as MessageType<_ToolResultError_EditFileError>, a, b2);
  }
})();
export type ToolResultError_EditFileError = InstanceType<typeof ToolResultError_EditFileError$Runtime>;
var ToolResultError_EditFileError: MessageType<ToolResultError_EditFileError> = ToolResultError_EditFileError$Runtime as unknown as MessageType<ToolResultError_EditFileError>;
(ToolResultError_EditFileError as MutableMessageType<ToolResultError_EditFileError>).runtime = proto3;
(ToolResultError_EditFileError as MutableMessageType<ToolResultError_EditFileError>).typeName = "aiserver.v1.ToolResultError.EditFileError";
(ToolResultError_EditFileError as MutableMessageType<ToolResultError_EditFileError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "num_lines_in_file_before_edit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ToolResultError_SearchReplaceError$Runtime = (() => class _ToolResultError_SearchReplaceError extends Message<_ToolResultError_SearchReplaceError> {
  declare numLinesInFileBeforeEdit: number;
  constructor(data?: PartialMessage<_ToolResultError_SearchReplaceError>) {
    super();
    this.numLinesInFileBeforeEdit = 0;
    proto3.util.initPartial(data, this as _ToolResultError_SearchReplaceError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResultError_SearchReplaceError {
    return new _ToolResultError_SearchReplaceError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResultError_SearchReplaceError {
    return new _ToolResultError_SearchReplaceError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResultError_SearchReplaceError {
    return new _ToolResultError_SearchReplaceError().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResultError_SearchReplaceError | PlainMessage<_ToolResultError_SearchReplaceError> | undefined | null, b2: _ToolResultError_SearchReplaceError | PlainMessage<_ToolResultError_SearchReplaceError> | undefined | null): boolean {
    return proto3.util.equals(_ToolResultError_SearchReplaceError as unknown as MessageType<_ToolResultError_SearchReplaceError>, a, b2);
  }
})();
export type ToolResultError_SearchReplaceError = InstanceType<typeof ToolResultError_SearchReplaceError$Runtime>;
var ToolResultError_SearchReplaceError: MessageType<ToolResultError_SearchReplaceError> = ToolResultError_SearchReplaceError$Runtime as unknown as MessageType<ToolResultError_SearchReplaceError>;
(ToolResultError_SearchReplaceError as MutableMessageType<ToolResultError_SearchReplaceError>).runtime = proto3;
(ToolResultError_SearchReplaceError as MutableMessageType<ToolResultError_SearchReplaceError>).typeName = "aiserver.v1.ToolResultError.SearchReplaceError";
(ToolResultError_SearchReplaceError as MutableMessageType<ToolResultError_SearchReplaceError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "num_lines_in_file_before_edit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ClientSideToolV2Call$Runtime = (() => class _ClientSideToolV2Call extends Message<_ClientSideToolV2Call> {
  declare tool: ClientSideToolV2;
  declare toolCallId: string;
  declare timeoutMs?: number;
  declare name: string;
  declare isStreaming: boolean;
  declare isLastMessage: boolean;
  declare internal: boolean;
  declare rawArgs: string;
  declare toolIndex?: number;
  declare modelCallId?: string;
  declare params: { case: "readSemsearchFilesParams"; value: ReadSemsearchFilesParams } | { case: "ripgrepSearchParams"; value: RipgrepSearchParams } | { case: "readFileParams"; value: ReadFileParams } | { case: "listDirParams"; value: ListDirParams } | { case: "editFileParams"; value: EditFileParams } | { case: "fileSearchParams"; value: ToolCallFileSearchParams } | { case: "semanticSearchFullParams"; value: SemanticSearchFullParams } | { case: "deleteFileParams"; value: DeleteFileParams } | { case: "reapplyParams"; value: ReapplyParams } | { case: "runTerminalCommandV2Params"; value: RunTerminalCommandV2Params } | { case: "fetchRulesParams"; value: FetchRulesParams } | { case: "webSearchParams"; value: WebSearchParams } | { case: "mcpParams"; value: MCPParams } | { case: "searchSymbolsParams"; value: SearchSymbolsParams } | { case: "gotodefParams"; value: GotodefParams } | { case: "backgroundComposerFollowupParams"; value: BackgroundComposerFollowupParams } | { case: "knowledgeBaseParams"; value: KnowledgeBaseParams } | { case: "fetchPullRequestParams"; value: FetchPullRequestParams } | { case: "deepSearchParams"; value: DeepSearchParams } | { case: "createDiagramParams"; value: CreateDiagramParams } | { case: "fixLintsParams"; value: FixLintsParams } | { case: "readLintsParams"; value: ReadLintsParams } | { case: "taskParams"; value: TaskParams } | { case: "awaitTaskParams"; value: AwaitTaskParams } | { case: "todoReadParams"; value: TodoReadParams } | { case: "todoWriteParams"; value: TodoWriteParams } | { case: "editFileV2Params"; value: EditFileV2Params } | { case: "listDirV2Params"; value: ListDirV2Params } | { case: "readFileV2Params"; value: ReadFileV2Params } | { case: "ripgrepRawSearchParams"; value: RipgrepRawSearchParams } | { case: "globFileSearchParams"; value: GlobFileSearchParams } | { case: "createPlanParams"; value: CreatePlanParams } | { case: "listMcpResourcesParams"; value: ListMcpResourcesParams } | { case: "readMcpResourceParams"; value: ReadMcpResourceParams } | { case: "readProjectParams"; value: ReadProjectParams } | { case: "updateProjectParams"; value: UpdateProjectParams } | { case: "taskV2Params"; value: TaskV2Params } | { case: "callMcpToolParams"; value: CallMcpToolParams } | { case: "applyAgentDiffParams"; value: ApplyAgentDiffParams } | { case: "askQuestionParams"; value: AskQuestionParams } | { case: "switchModeParams"; value: SwitchModeParams } | { case: "computerUseParams"; value: ComputerUseParams } | { case: "writeShellStdinParams"; value: WriteShellStdinArgs } | { case: "recordScreenParams"; value: RecordScreenArgs } | { case: "webFetchParams"; value: WebFetchParams } | { case: "reportBugfixResultsParams"; value: ReportBugfixResultsParams } | { case: "mcpAuthParams"; value: McpAuthParams } | { case: "getMcpToolsParams"; value: GetMcpToolsParams } | { case: "connectScmParams"; value: ConnectScmParams } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ClientSideToolV2Call>) {
    super();
    this.tool = ClientSideToolV2.UNSPECIFIED;
    this.params = { case: void 0 };
    this.toolCallId = "";
    this.name = "";
    this.isStreaming = false;
    this.isLastMessage = false;
    this.internal = false;
    this.rawArgs = "";
    proto3.util.initPartial(data, this as _ClientSideToolV2Call);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClientSideToolV2Call {
    return new _ClientSideToolV2Call().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClientSideToolV2Call {
    return new _ClientSideToolV2Call().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClientSideToolV2Call {
    return new _ClientSideToolV2Call().fromJsonString(jsonString, options);
  }
  static equals(a: _ClientSideToolV2Call | PlainMessage<_ClientSideToolV2Call> | undefined | null, b2: _ClientSideToolV2Call | PlainMessage<_ClientSideToolV2Call> | undefined | null): boolean {
    return proto3.util.equals(_ClientSideToolV2Call as unknown as MessageType<_ClientSideToolV2Call>, a, b2);
  }
})();
export type ClientSideToolV2Call = InstanceType<typeof ClientSideToolV2Call$Runtime>;
var ClientSideToolV2Call: MessageType<ClientSideToolV2Call> = ClientSideToolV2Call$Runtime as unknown as MessageType<ClientSideToolV2Call>;
(ClientSideToolV2Call as MutableMessageType<ClientSideToolV2Call>).runtime = proto3;
(ClientSideToolV2Call as MutableMessageType<ClientSideToolV2Call>).typeName = "aiserver.v1.ClientSideToolV2Call";
(ClientSideToolV2Call as MutableMessageType<ClientSideToolV2Call>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(ClientSideToolV2) },
  { no: 2, name: "read_semsearch_files_params", kind: "message", T: ReadSemsearchFilesParams, oneof: "params" },
  { no: 5, name: "ripgrep_search_params", kind: "message", T: RipgrepSearchParams, oneof: "params" },
  { no: 8, name: "read_file_params", kind: "message", T: ReadFileParams, oneof: "params" },
  { no: 12, name: "list_dir_params", kind: "message", T: ListDirParams, oneof: "params" },
  { no: 13, name: "edit_file_params", kind: "message", T: EditFileParams, oneof: "params" },
  { no: 16, name: "file_search_params", kind: "message", T: ToolCallFileSearchParams, oneof: "params" },
  { no: 17, name: "semantic_search_full_params", kind: "message", T: SemanticSearchFullParams, oneof: "params" },
  { no: 19, name: "delete_file_params", kind: "message", T: DeleteFileParams, oneof: "params" },
  { no: 20, name: "reapply_params", kind: "message", T: ReapplyParams, oneof: "params" },
  { no: 23, name: "run_terminal_command_v2_params", kind: "message", T: RunTerminalCommandV2Params, oneof: "params" },
  { no: 24, name: "fetch_rules_params", kind: "message", T: FetchRulesParams, oneof: "params" },
  { no: 26, name: "web_search_params", kind: "message", T: WebSearchParams, oneof: "params" },
  { no: 27, name: "mcp_params", kind: "message", T: MCPParams, oneof: "params" },
  { no: 31, name: "search_symbols_params", kind: "message", T: SearchSymbolsParams, oneof: "params" },
  { no: 41, name: "gotodef_params", kind: "message", T: GotodefParams, oneof: "params" },
  { no: 32, name: "background_composer_followup_params", kind: "message", T: BackgroundComposerFollowupParams, oneof: "params" },
  { no: 33, name: "knowledge_base_params", kind: "message", T: KnowledgeBaseParams, oneof: "params" },
  { no: 34, name: "fetch_pull_request_params", kind: "message", T: FetchPullRequestParams, oneof: "params" },
  { no: 35, name: "deep_search_params", kind: "message", T: DeepSearchParams, oneof: "params" },
  { no: 36, name: "create_diagram_params", kind: "message", T: CreateDiagramParams, oneof: "params" },
  { no: 37, name: "fix_lints_params", kind: "message", T: FixLintsParams, oneof: "params" },
  { no: 38, name: "read_lints_params", kind: "message", T: ReadLintsParams, oneof: "params" },
  { no: 42, name: "task_params", kind: "message", T: TaskParams, oneof: "params" },
  { no: 43, name: "await_task_params", kind: "message", T: AwaitTaskParams, oneof: "params" },
  { no: 44, name: "todo_read_params", kind: "message", T: TodoReadParams, oneof: "params" },
  { no: 45, name: "todo_write_params", kind: "message", T: TodoWriteParams, oneof: "params" },
  { no: 50, name: "edit_file_v2_params", kind: "message", T: EditFileV2Params, oneof: "params" },
  { no: 52, name: "list_dir_v2_params", kind: "message", T: ListDirV2Params, oneof: "params" },
  { no: 53, name: "read_file_v2_params", kind: "message", T: ReadFileV2Params, oneof: "params" },
  { no: 54, name: "ripgrep_raw_search_params", kind: "message", T: RipgrepRawSearchParams, oneof: "params" },
  { no: 55, name: "glob_file_search_params", kind: "message", T: GlobFileSearchParams, oneof: "params" },
  { no: 56, name: "create_plan_params", kind: "message", T: CreatePlanParams, oneof: "params" },
  { no: 57, name: "list_mcp_resources_params", kind: "message", T: ListMcpResourcesParams, oneof: "params" },
  { no: 58, name: "read_mcp_resource_params", kind: "message", T: ReadMcpResourceParams, oneof: "params" },
  { no: 59, name: "read_project_params", kind: "message", T: ReadProjectParams, oneof: "params" },
  { no: 60, name: "update_project_params", kind: "message", T: UpdateProjectParams, oneof: "params" },
  { no: 61, name: "task_v2_params", kind: "message", T: TaskV2Params, oneof: "params" },
  { no: 62, name: "call_mcp_tool_params", kind: "message", T: CallMcpToolParams, oneof: "params" },
  { no: 63, name: "apply_agent_diff_params", kind: "message", T: ApplyAgentDiffParams, oneof: "params" },
  { no: 64, name: "ask_question_params", kind: "message", T: AskQuestionParams, oneof: "params" },
  { no: 65, name: "switch_mode_params", kind: "message", T: SwitchModeParams, oneof: "params" },
  { no: 66, name: "computer_use_params", kind: "message", T: ComputerUseParams, oneof: "params" },
  { no: 67, name: "write_shell_stdin_params", kind: "message", T: WriteShellStdinArgs, oneof: "params" },
  { no: 68, name: "record_screen_params", kind: "message", T: RecordScreenArgs, oneof: "params" },
  { no: 69, name: "web_fetch_params", kind: "message", T: WebFetchParams, oneof: "params" },
  { no: 70, name: "report_bugfix_results_params", kind: "message", T: ReportBugfixResultsParams, oneof: "params" },
  { no: 71, name: "mcp_auth_params", kind: "message", T: McpAuthParams, oneof: "params" },
  { no: 72, name: "get_mcp_tools_params", kind: "message", T: GetMcpToolsParams, oneof: "params" },
  { no: 73, name: "connect_scm_params", kind: "message", T: ConnectScmParams, oneof: "params" },
  {
    no: 3,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "timeout_ms", kind: "scalar", T: 1, opt: true },
  {
    no: 9,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 14,
    name: "is_streaming",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 15,
    name: "is_last_message",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 51,
    name: "internal",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 10,
    name: "raw_args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 48, name: "tool_index", kind: "scalar", T: 13, opt: true },
  { no: 49, name: "model_call_id", kind: "scalar", T: 9, opt: true }
]);
var ClientSideToolV2Result$Runtime = (() => class _ClientSideToolV2Result extends Message<_ClientSideToolV2Result> {
  declare tool: ClientSideToolV2;
  declare toolCallId: string;
  declare error?: ToolResultError;
  declare modelCallId?: string;
  declare toolIndex?: number;
  declare attachments?: ToolResultAttachments;
  declare result: { case: "readSemsearchFilesResult"; value: ReadSemsearchFilesResult } | { case: "ripgrepSearchResult"; value: RipgrepSearchResult } | { case: "readFileResult"; value: ReadFileResult } | { case: "listDirResult"; value: ListDirResult } | { case: "editFileResult"; value: EditFileResult } | { case: "fileSearchResult"; value: ToolCallFileSearchResult } | { case: "semanticSearchFullResult"; value: SemanticSearchFullResult } | { case: "deleteFileResult"; value: DeleteFileResult } | { case: "reapplyResult"; value: ReapplyResult } | { case: "runTerminalCommandV2Result"; value: RunTerminalCommandV2Result } | { case: "fetchRulesResult"; value: FetchRulesResult } | { case: "webSearchResult"; value: WebSearchResult2 } | { case: "mcpResult"; value: MCPResult } | { case: "searchSymbolsResult"; value: SearchSymbolsResult } | { case: "backgroundComposerFollowupResult"; value: BackgroundComposerFollowupResult } | { case: "knowledgeBaseResult"; value: KnowledgeBaseResult } | { case: "fetchPullRequestResult"; value: FetchPullRequestResult } | { case: "deepSearchResult"; value: DeepSearchResult } | { case: "createDiagramResult"; value: CreateDiagramResult } | { case: "fixLintsResult"; value: FixLintsResult } | { case: "readLintsResult"; value: ReadLintsResult } | { case: "gotodefResult"; value: GotodefResult } | { case: "taskResult"; value: TaskResult2 } | { case: "awaitTaskResult"; value: AwaitTaskResult } | { case: "todoReadResult"; value: TodoReadResult } | { case: "todoWriteResult"; value: TodoWriteResult } | { case: "editFileV2Result"; value: EditFileV2Result } | { case: "listDirV2Result"; value: ListDirV2Result } | { case: "readFileV2Result"; value: ReadFileV2Result } | { case: "ripgrepRawSearchResult"; value: RipgrepRawSearchResult } | { case: "globFileSearchResult"; value: GlobFileSearchResult } | { case: "createPlanResult"; value: CreatePlanResult2 } | { case: "listMcpResourcesResult"; value: ListMcpResourcesResult } | { case: "readMcpResourceResult"; value: ReadMcpResourceResult } | { case: "readProjectResult"; value: ReadProjectResult } | { case: "updateProjectResult"; value: UpdateProjectResult } | { case: "taskV2Result"; value: TaskV2Result } | { case: "callMcpToolResult"; value: CallMcpToolResult } | { case: "applyAgentDiffResult"; value: ApplyAgentDiffResult } | { case: "askQuestionResult"; value: AskQuestionResult2 } | { case: "switchModeResult"; value: SwitchModeResult2 } | { case: "computerUseResult"; value: ComputerUseResult2 } | { case: "generateImageResult"; value: GenerateImageResult } | { case: "writeShellStdinResult"; value: WriteShellStdinResult } | { case: "recordScreenResult"; value: RecordScreenResult } | { case: "webFetchResult"; value: WebFetchResult2 } | { case: "reportBugfixResultsResult"; value: ReportBugfixResultsResult2 } | { case: "aiAttributionResult"; value: AiAttributionResult } | { case: "mcpAuthResult"; value: McpAuthResult2 } | { case: "getMcpToolsResult"; value: GetMcpToolsResult } | { case: "connectScmResult"; value: ConnectScmResult2 } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ClientSideToolV2Result>) {
    super();
    this.tool = ClientSideToolV2.UNSPECIFIED;
    this.result = { case: void 0 };
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _ClientSideToolV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClientSideToolV2Result {
    return new _ClientSideToolV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClientSideToolV2Result {
    return new _ClientSideToolV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClientSideToolV2Result {
    return new _ClientSideToolV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _ClientSideToolV2Result | PlainMessage<_ClientSideToolV2Result> | undefined | null, b2: _ClientSideToolV2Result | PlainMessage<_ClientSideToolV2Result> | undefined | null): boolean {
    return proto3.util.equals(_ClientSideToolV2Result as unknown as MessageType<_ClientSideToolV2Result>, a, b2);
  }
})();
export type ClientSideToolV2Result = InstanceType<typeof ClientSideToolV2Result$Runtime>;
var ClientSideToolV2Result: MessageType<ClientSideToolV2Result> = ClientSideToolV2Result$Runtime as unknown as MessageType<ClientSideToolV2Result>;
(ClientSideToolV2Result as MutableMessageType<ClientSideToolV2Result>).runtime = proto3;
(ClientSideToolV2Result as MutableMessageType<ClientSideToolV2Result>).typeName = "aiserver.v1.ClientSideToolV2Result";
(ClientSideToolV2Result as MutableMessageType<ClientSideToolV2Result>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(ClientSideToolV2) },
  { no: 2, name: "read_semsearch_files_result", kind: "message", T: ReadSemsearchFilesResult, oneof: "result" },
  { no: 4, name: "ripgrep_search_result", kind: "message", T: RipgrepSearchResult, oneof: "result" },
  { no: 6, name: "read_file_result", kind: "message", T: ReadFileResult, oneof: "result" },
  { no: 9, name: "list_dir_result", kind: "message", T: ListDirResult, oneof: "result" },
  { no: 10, name: "edit_file_result", kind: "message", T: EditFileResult, oneof: "result" },
  { no: 11, name: "file_search_result", kind: "message", T: ToolCallFileSearchResult, oneof: "result" },
  { no: 18, name: "semantic_search_full_result", kind: "message", T: SemanticSearchFullResult, oneof: "result" },
  { no: 20, name: "delete_file_result", kind: "message", T: DeleteFileResult, oneof: "result" },
  { no: 21, name: "reapply_result", kind: "message", T: ReapplyResult, oneof: "result" },
  { no: 24, name: "run_terminal_command_v2_result", kind: "message", T: RunTerminalCommandV2Result, oneof: "result" },
  { no: 25, name: "fetch_rules_result", kind: "message", T: FetchRulesResult, oneof: "result" },
  { no: 27, name: "web_search_result", kind: "message", T: WebSearchResult2, oneof: "result" },
  { no: 28, name: "mcp_result", kind: "message", T: MCPResult, oneof: "result" },
  { no: 32, name: "search_symbols_result", kind: "message", T: SearchSymbolsResult, oneof: "result" },
  { no: 33, name: "background_composer_followup_result", kind: "message", T: BackgroundComposerFollowupResult, oneof: "result" },
  { no: 34, name: "knowledge_base_result", kind: "message", T: KnowledgeBaseResult, oneof: "result" },
  { no: 36, name: "fetch_pull_request_result", kind: "message", T: FetchPullRequestResult, oneof: "result" },
  { no: 37, name: "deep_search_result", kind: "message", T: DeepSearchResult, oneof: "result" },
  { no: 38, name: "create_diagram_result", kind: "message", T: CreateDiagramResult, oneof: "result" },
  { no: 39, name: "fix_lints_result", kind: "message", T: FixLintsResult, oneof: "result" },
  { no: 40, name: "read_lints_result", kind: "message", T: ReadLintsResult, oneof: "result" },
  { no: 41, name: "gotodef_result", kind: "message", T: GotodefResult, oneof: "result" },
  { no: 42, name: "task_result", kind: "message", T: TaskResult2, oneof: "result" },
  { no: 43, name: "await_task_result", kind: "message", T: AwaitTaskResult, oneof: "result" },
  { no: 44, name: "todo_read_result", kind: "message", T: TodoReadResult, oneof: "result" },
  { no: 45, name: "todo_write_result", kind: "message", T: TodoWriteResult, oneof: "result" },
  { no: 51, name: "edit_file_v2_result", kind: "message", T: EditFileV2Result, oneof: "result" },
  { no: 52, name: "list_dir_v2_result", kind: "message", T: ListDirV2Result, oneof: "result" },
  { no: 53, name: "read_file_v2_result", kind: "message", T: ReadFileV2Result, oneof: "result" },
  { no: 54, name: "ripgrep_raw_search_result", kind: "message", T: RipgrepRawSearchResult, oneof: "result" },
  { no: 55, name: "glob_file_search_result", kind: "message", T: GlobFileSearchResult, oneof: "result" },
  { no: 56, name: "create_plan_result", kind: "message", T: CreatePlanResult2, oneof: "result" },
  { no: 57, name: "list_mcp_resources_result", kind: "message", T: ListMcpResourcesResult, oneof: "result" },
  { no: 58, name: "read_mcp_resource_result", kind: "message", T: ReadMcpResourceResult, oneof: "result" },
  { no: 59, name: "read_project_result", kind: "message", T: ReadProjectResult, oneof: "result" },
  { no: 60, name: "update_project_result", kind: "message", T: UpdateProjectResult, oneof: "result" },
  { no: 61, name: "task_v2_result", kind: "message", T: TaskV2Result, oneof: "result" },
  { no: 62, name: "call_mcp_tool_result", kind: "message", T: CallMcpToolResult, oneof: "result" },
  { no: 63, name: "apply_agent_diff_result", kind: "message", T: ApplyAgentDiffResult, oneof: "result" },
  { no: 64, name: "ask_question_result", kind: "message", T: AskQuestionResult2, oneof: "result" },
  { no: 65, name: "switch_mode_result", kind: "message", T: SwitchModeResult2, oneof: "result" },
  { no: 66, name: "computer_use_result", kind: "message", T: ComputerUseResult2, oneof: "result" },
  { no: 67, name: "generate_image_result", kind: "message", T: GenerateImageResult, oneof: "result" },
  { no: 68, name: "write_shell_stdin_result", kind: "message", T: WriteShellStdinResult, oneof: "result" },
  { no: 69, name: "record_screen_result", kind: "message", T: RecordScreenResult, oneof: "result" },
  { no: 70, name: "web_fetch_result", kind: "message", T: WebFetchResult2, oneof: "result" },
  { no: 71, name: "report_bugfix_results_result", kind: "message", T: ReportBugfixResultsResult2, oneof: "result" },
  { no: 72, name: "ai_attribution_result", kind: "message", T: AiAttributionResult, oneof: "result" },
  { no: 73, name: "mcp_auth_result", kind: "message", T: McpAuthResult2, oneof: "result" },
  { no: 74, name: "get_mcp_tools_result", kind: "message", T: GetMcpToolsResult, oneof: "result" },
  { no: 75, name: "connect_scm_result", kind: "message", T: ConnectScmResult2, oneof: "result" },
  {
    no: 35,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "error", kind: "message", T: ToolResultError, opt: true },
  { no: 48, name: "model_call_id", kind: "scalar", T: 9, opt: true },
  { no: 49, name: "tool_index", kind: "scalar", T: 13, opt: true },
  { no: 50, name: "attachments", kind: "message", T: ToolResultAttachments, opt: true }
]);
var NudgeMessage$Runtime = (() => class _NudgeMessage extends Message<_NudgeMessage> {
  declare rawMessage: string;
  constructor(data?: PartialMessage<_NudgeMessage>) {
    super();
    this.rawMessage = "";
    proto3.util.initPartial(data, this as _NudgeMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NudgeMessage {
    return new _NudgeMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NudgeMessage {
    return new _NudgeMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NudgeMessage {
    return new _NudgeMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _NudgeMessage | PlainMessage<_NudgeMessage> | undefined | null, b2: _NudgeMessage | PlainMessage<_NudgeMessage> | undefined | null): boolean {
    return proto3.util.equals(_NudgeMessage as unknown as MessageType<_NudgeMessage>, a, b2);
  }
})();
export type NudgeMessage = InstanceType<typeof NudgeMessage$Runtime>;
var NudgeMessage: MessageType<NudgeMessage> = NudgeMessage$Runtime as unknown as MessageType<NudgeMessage>;
(NudgeMessage as MutableMessageType<NudgeMessage>).runtime = proto3;
(NudgeMessage as MutableMessageType<NudgeMessage>).typeName = "aiserver.v1.NudgeMessage";
(NudgeMessage as MutableMessageType<NudgeMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "raw_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolResultAttachments$Runtime = (() => class _ToolResultAttachments extends Message<_ToolResultAttachments> {
  declare originalTodos: TodoItem2[];
  declare updatedTodos: TodoItem2[];
  declare nudgeMessages: NudgeMessage[];
  declare shouldShowTodoWriteReminder: boolean;
  declare todoReminderType: ToolResultAttachments_TodoReminderType;
  declare discoveryBudgetReminder?: ToolResultAttachments_DiscoveryBudgetReminder;
  constructor(data?: PartialMessage<_ToolResultAttachments>) {
    super();
    this.originalTodos = [];
    this.updatedTodos = [];
    this.nudgeMessages = [];
    this.shouldShowTodoWriteReminder = false;
    this.todoReminderType = ToolResultAttachments_TodoReminderType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ToolResultAttachments);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResultAttachments {
    return new _ToolResultAttachments().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResultAttachments {
    return new _ToolResultAttachments().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResultAttachments {
    return new _ToolResultAttachments().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResultAttachments | PlainMessage<_ToolResultAttachments> | undefined | null, b2: _ToolResultAttachments | PlainMessage<_ToolResultAttachments> | undefined | null): boolean {
    return proto3.util.equals(_ToolResultAttachments as unknown as MessageType<_ToolResultAttachments>, a, b2);
  }
})();
export type ToolResultAttachments = InstanceType<typeof ToolResultAttachments$Runtime>;
var ToolResultAttachments: MessageType<ToolResultAttachments> = ToolResultAttachments$Runtime as unknown as MessageType<ToolResultAttachments>;
(ToolResultAttachments as MutableMessageType<ToolResultAttachments>).runtime = proto3;
(ToolResultAttachments as MutableMessageType<ToolResultAttachments>).typeName = "aiserver.v1.ToolResultAttachments";
(ToolResultAttachments as MutableMessageType<ToolResultAttachments>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "original_todos", kind: "message", T: TodoItem2, repeated: true },
  { no: 2, name: "updated_todos", kind: "message", T: TodoItem2, repeated: true },
  { no: 3, name: "nudge_messages", kind: "message", T: NudgeMessage, repeated: true },
  {
    no: 4,
    name: "should_show_todo_write_reminder",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "todo_reminder_type", kind: "enum", T: proto3.getEnumType(ToolResultAttachments_TodoReminderType) },
  { no: 6, name: "discovery_budget_reminder", kind: "message", T: ToolResultAttachments_DiscoveryBudgetReminder, opt: true }
]);
(function(ToolResultAttachments_TodoReminderType2) {
  ToolResultAttachments_TodoReminderType2[ToolResultAttachments_TodoReminderType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ToolResultAttachments_TodoReminderType2[ToolResultAttachments_TodoReminderType2["EVERY_10_TURNS"] = 1] = "EVERY_10_TURNS";
  ToolResultAttachments_TodoReminderType2[ToolResultAttachments_TodoReminderType2["AFTER_EDIT"] = 2] = "AFTER_EDIT";
})(ToolResultAttachments_TodoReminderType! || (ToolResultAttachments_TodoReminderType = {} as typeof ToolResultAttachments_TodoReminderType));
proto3.util.setEnumType(ToolResultAttachments_TodoReminderType, "aiserver.v1.ToolResultAttachments.TodoReminderType", [
  { no: 0, name: "TODO_REMINDER_TYPE_UNSPECIFIED" },
  { no: 1, name: "TODO_REMINDER_TYPE_EVERY_10_TURNS" },
  { no: 2, name: "TODO_REMINDER_TYPE_AFTER_EDIT" }
]);
var ToolResultAttachments_DiscoveryBudgetReminder$Runtime = (() => class _ToolResultAttachments_DiscoveryBudgetReminder extends Message<_ToolResultAttachments_DiscoveryBudgetReminder> {
  declare discoveryRoundsRemaining: number;
  declare discoveryEffort?: string;
  constructor(data?: PartialMessage<_ToolResultAttachments_DiscoveryBudgetReminder>) {
    super();
    this.discoveryRoundsRemaining = 0;
    proto3.util.initPartial(data, this as _ToolResultAttachments_DiscoveryBudgetReminder);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResultAttachments_DiscoveryBudgetReminder {
    return new _ToolResultAttachments_DiscoveryBudgetReminder().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResultAttachments_DiscoveryBudgetReminder {
    return new _ToolResultAttachments_DiscoveryBudgetReminder().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResultAttachments_DiscoveryBudgetReminder {
    return new _ToolResultAttachments_DiscoveryBudgetReminder().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResultAttachments_DiscoveryBudgetReminder | PlainMessage<_ToolResultAttachments_DiscoveryBudgetReminder> | undefined | null, b2: _ToolResultAttachments_DiscoveryBudgetReminder | PlainMessage<_ToolResultAttachments_DiscoveryBudgetReminder> | undefined | null): boolean {
    return proto3.util.equals(_ToolResultAttachments_DiscoveryBudgetReminder as unknown as MessageType<_ToolResultAttachments_DiscoveryBudgetReminder>, a, b2);
  }
})();
export type ToolResultAttachments_DiscoveryBudgetReminder = InstanceType<typeof ToolResultAttachments_DiscoveryBudgetReminder$Runtime>;
var ToolResultAttachments_DiscoveryBudgetReminder: MessageType<ToolResultAttachments_DiscoveryBudgetReminder> = ToolResultAttachments_DiscoveryBudgetReminder$Runtime as unknown as MessageType<ToolResultAttachments_DiscoveryBudgetReminder>;
(ToolResultAttachments_DiscoveryBudgetReminder as MutableMessageType<ToolResultAttachments_DiscoveryBudgetReminder>).runtime = proto3;
(ToolResultAttachments_DiscoveryBudgetReminder as MutableMessageType<ToolResultAttachments_DiscoveryBudgetReminder>).typeName = "aiserver.v1.ToolResultAttachments.DiscoveryBudgetReminder";
(ToolResultAttachments_DiscoveryBudgetReminder as MutableMessageType<ToolResultAttachments_DiscoveryBudgetReminder>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "discovery_rounds_remaining",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 2, name: "discovery_effort", kind: "scalar", T: 9, opt: true }
]);
var StreamedBackPartialToolCall$Runtime = (() => class _StreamedBackPartialToolCall extends Message<_StreamedBackPartialToolCall> {
  declare tool: ClientSideToolV2;
  declare toolCallId: string;
  declare name: string;
  declare toolIndex?: number;
  declare modelCallId?: string;
  constructor(data?: PartialMessage<_StreamedBackPartialToolCall>) {
    super();
    this.tool = ClientSideToolV2.UNSPECIFIED;
    this.toolCallId = "";
    this.name = "";
    proto3.util.initPartial(data, this as _StreamedBackPartialToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamedBackPartialToolCall {
    return new _StreamedBackPartialToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamedBackPartialToolCall {
    return new _StreamedBackPartialToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamedBackPartialToolCall {
    return new _StreamedBackPartialToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamedBackPartialToolCall | PlainMessage<_StreamedBackPartialToolCall> | undefined | null, b2: _StreamedBackPartialToolCall | PlainMessage<_StreamedBackPartialToolCall> | undefined | null): boolean {
    return proto3.util.equals(_StreamedBackPartialToolCall as unknown as MessageType<_StreamedBackPartialToolCall>, a, b2);
  }
})();
export type StreamedBackPartialToolCall = InstanceType<typeof StreamedBackPartialToolCall$Runtime>;
var StreamedBackPartialToolCall: MessageType<StreamedBackPartialToolCall> = StreamedBackPartialToolCall$Runtime as unknown as MessageType<StreamedBackPartialToolCall>;
(StreamedBackPartialToolCall as MutableMessageType<StreamedBackPartialToolCall>).runtime = proto3;
(StreamedBackPartialToolCall as MutableMessageType<StreamedBackPartialToolCall>).typeName = "aiserver.v1.StreamedBackPartialToolCall";
(StreamedBackPartialToolCall as MutableMessageType<StreamedBackPartialToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(ClientSideToolV2) },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "tool_index", kind: "scalar", T: 13, opt: true },
  { no: 5, name: "model_call_id", kind: "scalar", T: 9, opt: true }
]);
var StreamedBackToolCall$Runtime = (() => class _StreamedBackToolCall extends Message<_StreamedBackToolCall> {
  declare tool: ClientSideToolV2;
  declare toolCallId: string;
  declare name: string;
  declare rawArgs: string;
  declare error?: ToolResultError;
  declare toolIndex?: number;
  declare modelCallId?: string;
  declare params: { case: "readSemsearchFilesStream"; value: ReadSemsearchFilesStream } | { case: "ripgrepSearchStream"; value: RipgrepSearchStream } | { case: "readFileStream"; value: ReadFileStream } | { case: "listDirStream"; value: ListDirStream } | { case: "editFileStream"; value: EditFileStream } | { case: "fileSearchStream"; value: ToolCallFileSearchStream } | { case: "semanticSearchFullStream"; value: SemanticSearchFullStream } | { case: "deleteFileStream"; value: DeleteFileStream } | { case: "reapplyStream"; value: ReapplyStream } | { case: "runTerminalCommandV2Stream"; value: RunTerminalCommandV2Stream } | { case: "fetchRulesStream"; value: FetchRulesStream } | { case: "webSearchStream"; value: WebSearchStream } | { case: "mcpStream"; value: MCPStream } | { case: "searchSymbolsStream"; value: SearchSymbolsStream } | { case: "gotodefStream"; value: GotodefStream } | { case: "backgroundComposerFollowupStream"; value: BackgroundComposerFollowupStream } | { case: "knowledgeBaseStream"; value: KnowledgeBaseStream } | { case: "fetchPullRequestStream"; value: FetchPullRequestStream } | { case: "deepSearchStream"; value: DeepSearchStream } | { case: "createDiagramStream"; value: CreateDiagramStream } | { case: "fixLintsStream"; value: FixLintsStream } | { case: "readLintsStream"; value: ReadLintsStream } | { case: "taskStream"; value: TaskStream } | { case: "awaitTaskStream"; value: AwaitTaskStream } | { case: "todoReadStream"; value: TodoReadStream } | { case: "todoWriteStream"; value: TodoWriteStream } | { case: "editFileV2Stream"; value: EditFileV2Stream } | { case: "listDirV2Stream"; value: ListDirV2Stream } | { case: "readFileV2Stream"; value: ReadFileV2Stream } | { case: "ripgrepRawSearchStream"; value: RipgrepRawSearchStream } | { case: "globFileSearchStream"; value: GlobFileSearchStream } | { case: "createPlanStream"; value: CreatePlanStream } | { case: "listMcpResourcesStream"; value: ListMcpResourcesStream } | { case: "readMcpResourceStream"; value: ReadMcpResourceStream } | { case: "readProjectStream"; value: ReadProjectStream } | { case: "updateProjectStream"; value: UpdateProjectStream } | { case: "taskV2Stream"; value: TaskV2Stream } | { case: "callMcpToolStream"; value: CallMcpToolStream } | { case: "askQuestionStream"; value: AskQuestionStream } | { case: "switchModeStream"; value: SwitchModeStream } | { case: "computerUseStream"; value: ComputerUseStream } | { case: "writeShellStdinStream"; value: WriteShellStdinStream } | { case: "webFetchStream"; value: WebFetchStream } | { case: "reportBugfixResultsStream"; value: ReportBugfixResultsStream } | { case: "mcpAuthStream"; value: McpAuthStream } | { case: "connectScmStream"; value: ConnectScmStream } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamedBackToolCall>) {
    super();
    this.tool = ClientSideToolV2.UNSPECIFIED;
    this.toolCallId = "";
    this.params = { case: void 0 };
    this.name = "";
    this.rawArgs = "";
    proto3.util.initPartial(data, this as _StreamedBackToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamedBackToolCall {
    return new _StreamedBackToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamedBackToolCall {
    return new _StreamedBackToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamedBackToolCall {
    return new _StreamedBackToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamedBackToolCall | PlainMessage<_StreamedBackToolCall> | undefined | null, b2: _StreamedBackToolCall | PlainMessage<_StreamedBackToolCall> | undefined | null): boolean {
    return proto3.util.equals(_StreamedBackToolCall as unknown as MessageType<_StreamedBackToolCall>, a, b2);
  }
})();
export type StreamedBackToolCall = InstanceType<typeof StreamedBackToolCall$Runtime>;
var StreamedBackToolCall: MessageType<StreamedBackToolCall> = StreamedBackToolCall$Runtime as unknown as MessageType<StreamedBackToolCall>;
(StreamedBackToolCall as MutableMessageType<StreamedBackToolCall>).runtime = proto3;
(StreamedBackToolCall as MutableMessageType<StreamedBackToolCall>).typeName = "aiserver.v1.StreamedBackToolCall";
(StreamedBackToolCall as MutableMessageType<StreamedBackToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(ClientSideToolV2) },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "read_semsearch_files_stream", kind: "message", T: ReadSemsearchFilesStream, oneof: "params" },
  { no: 5, name: "ripgrep_search_stream", kind: "message", T: RipgrepSearchStream, oneof: "params" },
  { no: 7, name: "read_file_stream", kind: "message", T: ReadFileStream, oneof: "params" },
  { no: 12, name: "list_dir_stream", kind: "message", T: ListDirStream, oneof: "params" },
  { no: 13, name: "edit_file_stream", kind: "message", T: EditFileStream, oneof: "params" },
  { no: 14, name: "file_search_stream", kind: "message", T: ToolCallFileSearchStream, oneof: "params" },
  { no: 19, name: "semantic_search_full_stream", kind: "message", T: SemanticSearchFullStream, oneof: "params" },
  { no: 21, name: "delete_file_stream", kind: "message", T: DeleteFileStream, oneof: "params" },
  { no: 22, name: "reapply_stream", kind: "message", T: ReapplyStream, oneof: "params" },
  { no: 25, name: "run_terminal_command_v2_stream", kind: "message", T: RunTerminalCommandV2Stream, oneof: "params" },
  { no: 26, name: "fetch_rules_stream", kind: "message", T: FetchRulesStream, oneof: "params" },
  { no: 28, name: "web_search_stream", kind: "message", T: WebSearchStream, oneof: "params" },
  { no: 29, name: "mcp_stream", kind: "message", T: MCPStream, oneof: "params" },
  { no: 33, name: "search_symbols_stream", kind: "message", T: SearchSymbolsStream, oneof: "params" },
  { no: 41, name: "gotodef_stream", kind: "message", T: GotodefStream, oneof: "params" },
  { no: 34, name: "background_composer_followup_stream", kind: "message", T: BackgroundComposerFollowupStream, oneof: "params" },
  { no: 35, name: "knowledge_base_stream", kind: "message", T: KnowledgeBaseStream, oneof: "params" },
  { no: 36, name: "fetch_pull_request_stream", kind: "message", T: FetchPullRequestStream, oneof: "params" },
  { no: 37, name: "deep_search_stream", kind: "message", T: DeepSearchStream, oneof: "params" },
  { no: 38, name: "create_diagram_stream", kind: "message", T: CreateDiagramStream, oneof: "params" },
  { no: 39, name: "fix_lints_stream", kind: "message", T: FixLintsStream, oneof: "params" },
  { no: 40, name: "read_lints_stream", kind: "message", T: ReadLintsStream, oneof: "params" },
  { no: 42, name: "task_stream", kind: "message", T: TaskStream, oneof: "params" },
  { no: 43, name: "await_task_stream", kind: "message", T: AwaitTaskStream, oneof: "params" },
  { no: 44, name: "todo_read_stream", kind: "message", T: TodoReadStream, oneof: "params" },
  { no: 45, name: "todo_write_stream", kind: "message", T: TodoWriteStream, oneof: "params" },
  { no: 52, name: "edit_file_v2_stream", kind: "message", T: EditFileV2Stream, oneof: "params" },
  { no: 53, name: "list_dir_v2_stream", kind: "message", T: ListDirV2Stream, oneof: "params" },
  { no: 54, name: "read_file_v2_stream", kind: "message", T: ReadFileV2Stream, oneof: "params" },
  { no: 55, name: "ripgrep_raw_search_stream", kind: "message", T: RipgrepRawSearchStream, oneof: "params" },
  { no: 56, name: "glob_file_search_stream", kind: "message", T: GlobFileSearchStream, oneof: "params" },
  { no: 57, name: "create_plan_stream", kind: "message", T: CreatePlanStream, oneof: "params" },
  { no: 58, name: "list_mcp_resources_stream", kind: "message", T: ListMcpResourcesStream, oneof: "params" },
  { no: 59, name: "read_mcp_resource_stream", kind: "message", T: ReadMcpResourceStream, oneof: "params" },
  { no: 60, name: "read_project_stream", kind: "message", T: ReadProjectStream, oneof: "params" },
  { no: 61, name: "update_project_stream", kind: "message", T: UpdateProjectStream, oneof: "params" },
  { no: 62, name: "task_v2_stream", kind: "message", T: TaskV2Stream, oneof: "params" },
  { no: 63, name: "call_mcp_tool_stream", kind: "message", T: CallMcpToolStream, oneof: "params" },
  { no: 64, name: "ask_question_stream", kind: "message", T: AskQuestionStream, oneof: "params" },
  { no: 65, name: "switch_mode_stream", kind: "message", T: SwitchModeStream, oneof: "params" },
  { no: 66, name: "computer_use_stream", kind: "message", T: ComputerUseStream, oneof: "params" },
  { no: 67, name: "write_shell_stdin_stream", kind: "message", T: WriteShellStdinStream, oneof: "params" },
  { no: 68, name: "web_fetch_stream", kind: "message", T: WebFetchStream, oneof: "params" },
  { no: 69, name: "report_bugfix_results_stream", kind: "message", T: ReportBugfixResultsStream, oneof: "params" },
  { no: 70, name: "mcp_auth_stream", kind: "message", T: McpAuthStream, oneof: "params" },
  { no: 71, name: "connect_scm_stream", kind: "message", T: ConnectScmStream, oneof: "params" },
  {
    no: 8,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "raw_args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 10, name: "error", kind: "message", T: ToolResultError, opt: true },
  { no: 50, name: "tool_index", kind: "scalar", T: 13, opt: true },
  { no: 51, name: "model_call_id", kind: "scalar", T: 9, opt: true }
]);
var StreamedBackToolCallV2$Runtime = (() => class _StreamedBackToolCallV2 extends Message<_StreamedBackToolCallV2> {
  declare tool: ClientSideToolV2;
  declare toolCallId: string;
  declare name: string;
  declare rawArgs: string;
  declare error?: ToolResultError;
  declare toolIndex?: number;
  declare modelCallId?: string;
  declare params: { case: "readSemsearchFilesParams"; value: ReadSemsearchFilesParams } | { case: "ripgrepSearchParams"; value: RipgrepSearchParams } | { case: "readFileParams"; value: ReadFileParams } | { case: "listDirParams"; value: ListDirParams } | { case: "editFileParams"; value: EditFileParams } | { case: "fileSearchParams"; value: ToolCallFileSearchParams } | { case: "semanticSearchFullParams"; value: SemanticSearchFullParams } | { case: "deleteFileParams"; value: DeleteFileParams } | { case: "reapplyParams"; value: ReapplyParams } | { case: "runTerminalCommandV2Params"; value: RunTerminalCommandV2Params } | { case: "fetchRulesParams"; value: FetchRulesParams } | { case: "webSearchParams"; value: WebSearchParams } | { case: "mcpParams"; value: MCPParams } | { case: "searchSymbolsParams"; value: SearchSymbolsParams } | { case: "gotodefParams"; value: GotodefParams } | { case: "backgroundComposerFollowupParams"; value: BackgroundComposerFollowupParams } | { case: "knowledgeBaseParams"; value: KnowledgeBaseParams } | { case: "fetchPullRequestParams"; value: FetchPullRequestParams } | { case: "deepSearchParams"; value: DeepSearchParams } | { case: "createDiagramParams"; value: CreateDiagramParams } | { case: "fixLintsParams"; value: FixLintsParams } | { case: "readLintsParams"; value: ReadLintsParams } | { case: "taskParams"; value: TaskParams } | { case: "awaitTaskParams"; value: AwaitTaskParams } | { case: "todoReadParams"; value: TodoReadParams } | { case: "todoWriteParams"; value: TodoWriteParams } | { case: "editFileV2Params"; value: EditFileV2Params } | { case: "listDirV2Params"; value: ListDirV2Params } | { case: "readFileV2Params"; value: ReadFileV2Params } | { case: "ripgrepRawSearchParams"; value: RipgrepRawSearchParams } | { case: "globFileSearchParams"; value: GlobFileSearchParams } | { case: "createPlanParams"; value: CreatePlanParams } | { case: "listMcpResourcesParams"; value: ListMcpResourcesParams } | { case: "readMcpResourceParams"; value: ReadMcpResourceParams } | { case: "readProjectParams"; value: ReadProjectParams } | { case: "updateProjectParams"; value: UpdateProjectParams } | { case: "taskV2Params"; value: TaskV2Params } | { case: "callMcpToolParams"; value: CallMcpToolParams } | { case: "applyAgentDiffParams"; value: ApplyAgentDiffParams } | { case: "askQuestionParams"; value: AskQuestionParams } | { case: "switchModeParams"; value: SwitchModeParams } | { case: "computerUseParams"; value: ComputerUseParams } | { case: "writeShellStdinParams"; value: WriteShellStdinArgs } | { case: "recordScreenParams"; value: RecordScreenArgs } | { case: "webFetchParams"; value: WebFetchParams } | { case: "reportBugfixResultsParams"; value: ReportBugfixResultsParams } | { case: "mcpAuthParams"; value: McpAuthParams } | { case: "getMcpToolsParams"; value: GetMcpToolsParams } | { case: "connectScmParams"; value: ConnectScmParams } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_StreamedBackToolCallV2>) {
    super();
    this.tool = ClientSideToolV2.UNSPECIFIED;
    this.toolCallId = "";
    this.params = { case: void 0 };
    this.name = "";
    this.rawArgs = "";
    proto3.util.initPartial(data, this as _StreamedBackToolCallV2);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StreamedBackToolCallV2 {
    return new _StreamedBackToolCallV2().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StreamedBackToolCallV2 {
    return new _StreamedBackToolCallV2().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StreamedBackToolCallV2 {
    return new _StreamedBackToolCallV2().fromJsonString(jsonString, options);
  }
  static equals(a: _StreamedBackToolCallV2 | PlainMessage<_StreamedBackToolCallV2> | undefined | null, b2: _StreamedBackToolCallV2 | PlainMessage<_StreamedBackToolCallV2> | undefined | null): boolean {
    return proto3.util.equals(_StreamedBackToolCallV2 as unknown as MessageType<_StreamedBackToolCallV2>, a, b2);
  }
})();
export type StreamedBackToolCallV2 = InstanceType<typeof StreamedBackToolCallV2$Runtime>;
var StreamedBackToolCallV2: MessageType<StreamedBackToolCallV2> = StreamedBackToolCallV2$Runtime as unknown as MessageType<StreamedBackToolCallV2>;
(StreamedBackToolCallV2 as MutableMessageType<StreamedBackToolCallV2>).runtime = proto3;
(StreamedBackToolCallV2 as MutableMessageType<StreamedBackToolCallV2>).typeName = "aiserver.v1.StreamedBackToolCallV2";
(StreamedBackToolCallV2 as MutableMessageType<StreamedBackToolCallV2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(ClientSideToolV2) },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "read_semsearch_files_params", kind: "message", T: ReadSemsearchFilesParams, oneof: "params" },
  { no: 5, name: "ripgrep_search_params", kind: "message", T: RipgrepSearchParams, oneof: "params" },
  { no: 9, name: "read_file_params", kind: "message", T: ReadFileParams, oneof: "params" },
  { no: 12, name: "list_dir_params", kind: "message", T: ListDirParams, oneof: "params" },
  { no: 13, name: "edit_file_params", kind: "message", T: EditFileParams, oneof: "params" },
  { no: 16, name: "file_search_params", kind: "message", T: ToolCallFileSearchParams, oneof: "params" },
  { no: 17, name: "semantic_search_full_params", kind: "message", T: SemanticSearchFullParams, oneof: "params" },
  { no: 19, name: "delete_file_params", kind: "message", T: DeleteFileParams, oneof: "params" },
  { no: 20, name: "reapply_params", kind: "message", T: ReapplyParams, oneof: "params" },
  { no: 23, name: "run_terminal_command_v2_params", kind: "message", T: RunTerminalCommandV2Params, oneof: "params" },
  { no: 24, name: "fetch_rules_params", kind: "message", T: FetchRulesParams, oneof: "params" },
  { no: 26, name: "web_search_params", kind: "message", T: WebSearchParams, oneof: "params" },
  { no: 27, name: "mcp_params", kind: "message", T: MCPParams, oneof: "params" },
  { no: 31, name: "search_symbols_params", kind: "message", T: SearchSymbolsParams, oneof: "params" },
  { no: 41, name: "gotodef_params", kind: "message", T: GotodefParams, oneof: "params" },
  { no: 32, name: "background_composer_followup_params", kind: "message", T: BackgroundComposerFollowupParams, oneof: "params" },
  { no: 33, name: "knowledge_base_params", kind: "message", T: KnowledgeBaseParams, oneof: "params" },
  { no: 34, name: "fetch_pull_request_params", kind: "message", T: FetchPullRequestParams, oneof: "params" },
  { no: 35, name: "deep_search_params", kind: "message", T: DeepSearchParams, oneof: "params" },
  { no: 36, name: "create_diagram_params", kind: "message", T: CreateDiagramParams, oneof: "params" },
  { no: 37, name: "fix_lints_params", kind: "message", T: FixLintsParams, oneof: "params" },
  { no: 38, name: "read_lints_params", kind: "message", T: ReadLintsParams, oneof: "params" },
  { no: 42, name: "task_params", kind: "message", T: TaskParams, oneof: "params" },
  { no: 43, name: "await_task_params", kind: "message", T: AwaitTaskParams, oneof: "params" },
  { no: 44, name: "todo_read_params", kind: "message", T: TodoReadParams, oneof: "params" },
  { no: 45, name: "todo_write_params", kind: "message", T: TodoWriteParams, oneof: "params" },
  { no: 48, name: "edit_file_v2_params", kind: "message", T: EditFileV2Params, oneof: "params" },
  { no: 49, name: "list_dir_v2_params", kind: "message", T: ListDirV2Params, oneof: "params" },
  { no: 61, name: "read_file_v2_params", kind: "message", T: ReadFileV2Params, oneof: "params" },
  { no: 62, name: "ripgrep_raw_search_params", kind: "message", T: RipgrepRawSearchParams, oneof: "params" },
  { no: 63, name: "glob_file_search_params", kind: "message", T: GlobFileSearchParams, oneof: "params" },
  { no: 64, name: "create_plan_params", kind: "message", T: CreatePlanParams, oneof: "params" },
  { no: 65, name: "list_mcp_resources_params", kind: "message", T: ListMcpResourcesParams, oneof: "params" },
  { no: 66, name: "read_mcp_resource_params", kind: "message", T: ReadMcpResourceParams, oneof: "params" },
  { no: 67, name: "read_project_params", kind: "message", T: ReadProjectParams, oneof: "params" },
  { no: 68, name: "update_project_params", kind: "message", T: UpdateProjectParams, oneof: "params" },
  { no: 69, name: "task_v2_params", kind: "message", T: TaskV2Params, oneof: "params" },
  { no: 70, name: "call_mcp_tool_params", kind: "message", T: CallMcpToolParams, oneof: "params" },
  { no: 71, name: "apply_agent_diff_params", kind: "message", T: ApplyAgentDiffParams, oneof: "params" },
  { no: 72, name: "ask_question_params", kind: "message", T: AskQuestionParams, oneof: "params" },
  { no: 73, name: "switch_mode_params", kind: "message", T: SwitchModeParams, oneof: "params" },
  { no: 74, name: "computer_use_params", kind: "message", T: ComputerUseParams, oneof: "params" },
  { no: 75, name: "write_shell_stdin_params", kind: "message", T: WriteShellStdinArgs, oneof: "params" },
  { no: 76, name: "record_screen_params", kind: "message", T: RecordScreenArgs, oneof: "params" },
  { no: 77, name: "web_fetch_params", kind: "message", T: WebFetchParams, oneof: "params" },
  { no: 78, name: "report_bugfix_results_params", kind: "message", T: ReportBugfixResultsParams, oneof: "params" },
  { no: 79, name: "mcp_auth_params", kind: "message", T: McpAuthParams, oneof: "params" },
  { no: 80, name: "get_mcp_tools_params", kind: "message", T: GetMcpToolsParams, oneof: "params" },
  { no: 81, name: "connect_scm_params", kind: "message", T: ConnectScmParams, oneof: "params" },
  {
    no: 8,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "raw_args",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 11, name: "error", kind: "message", T: ToolResultError, opt: true },
  { no: 50, name: "tool_index", kind: "scalar", T: 13, opt: true },
  { no: 51, name: "model_call_id", kind: "scalar", T: 9, opt: true }
]);
var EditFileV2Params$Runtime = (() => class _EditFileV2Params extends Message<_EditFileV2Params> {
  declare relativeWorkspacePath: string;
  declare contentsAfterEdit?: string;
  declare waitingForFileContents?: boolean;
  declare shouldSendBackLinterErrors: boolean;
  declare diff?: EditFileResult_FileDiff;
  declare resultForModel: string;
  declare streamingContent?: string;
  declare noCodeblock?: boolean;
  declare cloudAgentEdit?: boolean;
  declare streamingEdit: { case: "text"; value: EditFileV2Params_StreamingEditText } | { case: "code"; value: EditFileV2Params_StreamingEditCode } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_EditFileV2Params>) {
    super();
    this.relativeWorkspacePath = "";
    this.streamingEdit = { case: void 0 };
    this.shouldSendBackLinterErrors = false;
    this.resultForModel = "";
    proto3.util.initPartial(data, this as _EditFileV2Params);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileV2Params {
    return new _EditFileV2Params().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileV2Params {
    return new _EditFileV2Params().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileV2Params {
    return new _EditFileV2Params().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileV2Params | PlainMessage<_EditFileV2Params> | undefined | null, b2: _EditFileV2Params | PlainMessage<_EditFileV2Params> | undefined | null): boolean {
    return proto3.util.equals(_EditFileV2Params as unknown as MessageType<_EditFileV2Params>, a, b2);
  }
})();
export type EditFileV2Params = InstanceType<typeof EditFileV2Params$Runtime>;
var EditFileV2Params: MessageType<EditFileV2Params> = EditFileV2Params$Runtime as unknown as MessageType<EditFileV2Params>;
(EditFileV2Params as MutableMessageType<EditFileV2Params>).runtime = proto3;
(EditFileV2Params as MutableMessageType<EditFileV2Params>).typeName = "aiserver.v1.EditFileV2Params";
(EditFileV2Params as MutableMessageType<EditFileV2Params>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "contents_after_edit", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "waiting_for_file_contents", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "text", kind: "message", T: EditFileV2Params_StreamingEditText, oneof: "streaming_edit" },
  { no: 5, name: "code", kind: "message", T: EditFileV2Params_StreamingEditCode, oneof: "streaming_edit" },
  {
    no: 6,
    name: "should_send_back_linter_errors",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "diff", kind: "message", T: EditFileResult_FileDiff, opt: true },
  {
    no: 8,
    name: "result_for_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "streaming_content", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "no_codeblock", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "cloud_agent_edit", kind: "scalar", T: 8, opt: true }
]);
var EditFileV2Params_StreamingEditText$Runtime = (() => class _EditFileV2Params_StreamingEditText extends Message<_EditFileV2Params_StreamingEditText> {
  declare text: string;
  constructor(data?: PartialMessage<_EditFileV2Params_StreamingEditText>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _EditFileV2Params_StreamingEditText);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileV2Params_StreamingEditText {
    return new _EditFileV2Params_StreamingEditText().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileV2Params_StreamingEditText {
    return new _EditFileV2Params_StreamingEditText().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileV2Params_StreamingEditText {
    return new _EditFileV2Params_StreamingEditText().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileV2Params_StreamingEditText | PlainMessage<_EditFileV2Params_StreamingEditText> | undefined | null, b2: _EditFileV2Params_StreamingEditText | PlainMessage<_EditFileV2Params_StreamingEditText> | undefined | null): boolean {
    return proto3.util.equals(_EditFileV2Params_StreamingEditText as unknown as MessageType<_EditFileV2Params_StreamingEditText>, a, b2);
  }
})();
export type EditFileV2Params_StreamingEditText = InstanceType<typeof EditFileV2Params_StreamingEditText$Runtime>;
var EditFileV2Params_StreamingEditText: MessageType<EditFileV2Params_StreamingEditText> = EditFileV2Params_StreamingEditText$Runtime as unknown as MessageType<EditFileV2Params_StreamingEditText>;
(EditFileV2Params_StreamingEditText as MutableMessageType<EditFileV2Params_StreamingEditText>).runtime = proto3;
(EditFileV2Params_StreamingEditText as MutableMessageType<EditFileV2Params_StreamingEditText>).typeName = "aiserver.v1.EditFileV2Params.StreamingEditText";
(EditFileV2Params_StreamingEditText as MutableMessageType<EditFileV2Params_StreamingEditText>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditFileV2Params_StreamingEditCode$Runtime = (() => class _EditFileV2Params_StreamingEditCode extends Message<_EditFileV2Params_StreamingEditCode> {
  declare code: string;
  constructor(data?: PartialMessage<_EditFileV2Params_StreamingEditCode>) {
    super();
    this.code = "";
    proto3.util.initPartial(data, this as _EditFileV2Params_StreamingEditCode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileV2Params_StreamingEditCode {
    return new _EditFileV2Params_StreamingEditCode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileV2Params_StreamingEditCode {
    return new _EditFileV2Params_StreamingEditCode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileV2Params_StreamingEditCode {
    return new _EditFileV2Params_StreamingEditCode().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileV2Params_StreamingEditCode | PlainMessage<_EditFileV2Params_StreamingEditCode> | undefined | null, b2: _EditFileV2Params_StreamingEditCode | PlainMessage<_EditFileV2Params_StreamingEditCode> | undefined | null): boolean {
    return proto3.util.equals(_EditFileV2Params_StreamingEditCode as unknown as MessageType<_EditFileV2Params_StreamingEditCode>, a, b2);
  }
})();
export type EditFileV2Params_StreamingEditCode = InstanceType<typeof EditFileV2Params_StreamingEditCode$Runtime>;
var EditFileV2Params_StreamingEditCode: MessageType<EditFileV2Params_StreamingEditCode> = EditFileV2Params_StreamingEditCode$Runtime as unknown as MessageType<EditFileV2Params_StreamingEditCode>;
(EditFileV2Params_StreamingEditCode as MutableMessageType<EditFileV2Params_StreamingEditCode>).runtime = proto3;
(EditFileV2Params_StreamingEditCode as MutableMessageType<EditFileV2Params_StreamingEditCode>).typeName = "aiserver.v1.EditFileV2Params.StreamingEditCode";
(EditFileV2Params_StreamingEditCode as MutableMessageType<EditFileV2Params_StreamingEditCode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditFileV2Result$Runtime = (() => class _EditFileV2Result extends Message<_EditFileV2Result> {
  declare contentsBeforeEdit?: string;
  declare eolSequence?: string;
  declare detectedLanguage?: string;
  declare fileWasCreated: boolean;
  declare diff?: EditFileResult_FileDiff;
  declare rejected?: boolean;
  declare linterErrors: LinterError[];
  declare sentBackLinterErrors: boolean;
  declare shouldAutoFixLints: boolean;
  declare humanReviewV2?: HumanReview;
  declare resultForModel: string;
  declare contentsAfterEdit?: string;
  declare beforeContentId?: string;
  declare afterContentId: string;
  constructor(data?: PartialMessage<_EditFileV2Result>) {
    super();
    this.fileWasCreated = false;
    this.linterErrors = [];
    this.sentBackLinterErrors = false;
    this.shouldAutoFixLints = false;
    this.resultForModel = "";
    this.afterContentId = "";
    proto3.util.initPartial(data, this as _EditFileV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileV2Result {
    return new _EditFileV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileV2Result {
    return new _EditFileV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileV2Result {
    return new _EditFileV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileV2Result | PlainMessage<_EditFileV2Result> | undefined | null, b2: _EditFileV2Result | PlainMessage<_EditFileV2Result> | undefined | null): boolean {
    return proto3.util.equals(_EditFileV2Result as unknown as MessageType<_EditFileV2Result>, a, b2);
  }
})();
export type EditFileV2Result = InstanceType<typeof EditFileV2Result$Runtime>;
var EditFileV2Result: MessageType<EditFileV2Result> = EditFileV2Result$Runtime as unknown as MessageType<EditFileV2Result>;
(EditFileV2Result as MutableMessageType<EditFileV2Result>).runtime = proto3;
(EditFileV2Result as MutableMessageType<EditFileV2Result>).typeName = "aiserver.v1.EditFileV2Result";
(EditFileV2Result as MutableMessageType<EditFileV2Result>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "contents_before_edit", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "eol_sequence", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "detected_language", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "file_was_created",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "diff", kind: "message", T: EditFileResult_FileDiff, opt: true },
  { no: 4, name: "rejected", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "linter_errors", kind: "message", T: LinterError, repeated: true },
  {
    no: 6,
    name: "sent_back_linter_errors",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "should_auto_fix_lints",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "human_review_v2", kind: "message", T: HumanReview, opt: true },
  {
    no: 10,
    name: "result_for_model",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 12, name: "contents_after_edit", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "before_content_id", kind: "scalar", T: 9, opt: true },
  {
    no: 14,
    name: "after_content_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditFileV2Stream$Runtime = (() => class _EditFileV2Stream extends Message<_EditFileV2Stream> {
  constructor(data?: PartialMessage<_EditFileV2Stream>) {
    super();
    proto3.util.initPartial(data, this as _EditFileV2Stream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileV2Stream {
    return new _EditFileV2Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileV2Stream {
    return new _EditFileV2Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileV2Stream {
    return new _EditFileV2Stream().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileV2Stream | PlainMessage<_EditFileV2Stream> | undefined | null, b2: _EditFileV2Stream | PlainMessage<_EditFileV2Stream> | undefined | null): boolean {
    return proto3.util.equals(_EditFileV2Stream as unknown as MessageType<_EditFileV2Stream>, a, b2);
  }
})();
export type EditFileV2Stream = InstanceType<typeof EditFileV2Stream$Runtime>;
var EditFileV2Stream: MessageType<EditFileV2Stream> = EditFileV2Stream$Runtime as unknown as MessageType<EditFileV2Stream>;
(EditFileV2Stream as MutableMessageType<EditFileV2Stream>).runtime = proto3;
(EditFileV2Stream as MutableMessageType<EditFileV2Stream>).typeName = "aiserver.v1.EditFileV2Stream";
(EditFileV2Stream as MutableMessageType<EditFileV2Stream>).fields = proto3.util.newFieldList(() => []);
var EditFileParams$Runtime = (() => class _EditFileParams extends Message<_EditFileParams> {
  declare relativeWorkspacePath: string;
  declare language: string;
  declare blocking: boolean;
  declare contents: string;
  declare instructions?: string;
  declare shouldEditFileFailForLargeFiles?: boolean;
  declare oldString?: string;
  declare newString?: string;
  declare allowMultipleMatches?: boolean;
  declare useWhitespaceInsensitiveFallback?: boolean;
  declare useDidYouMeanFuzzyMatch?: boolean;
  declare gracefullyHandleRecoverableErrors?: boolean;
  declare lineRanges: LineRange[];
  declare notebookCellIdx?: number;
  declare isNewCell?: boolean;
  declare cellLanguage?: string;
  declare editCategory?: string;
  declare shouldEagerlyProcessLints?: boolean;
  constructor(data?: PartialMessage<_EditFileParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.language = "";
    this.blocking = false;
    this.contents = "";
    this.lineRanges = [];
    proto3.util.initPartial(data, this as _EditFileParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileParams {
    return new _EditFileParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileParams {
    return new _EditFileParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileParams {
    return new _EditFileParams().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileParams | PlainMessage<_EditFileParams> | undefined | null, b2: _EditFileParams | PlainMessage<_EditFileParams> | undefined | null): boolean {
    return proto3.util.equals(_EditFileParams as unknown as MessageType<_EditFileParams>, a, b2);
  }
})();
export type EditFileParams = InstanceType<typeof EditFileParams$Runtime>;
var EditFileParams: MessageType<EditFileParams> = EditFileParams$Runtime as unknown as MessageType<EditFileParams>;
(EditFileParams as MutableMessageType<EditFileParams>).runtime = proto3;
(EditFileParams as MutableMessageType<EditFileParams>).typeName = "aiserver.v1.EditFileParams";
(EditFileParams as MutableMessageType<EditFileParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "language",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "blocking",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "instructions", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "should_edit_file_fail_for_large_files", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "old_string", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "new_string", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "allow_multiple_matches", kind: "scalar", T: 8, opt: true },
  { no: 10, name: "use_whitespace_insensitive_fallback", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "use_did_you_mean_fuzzy_match", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "gracefully_handle_recoverable_errors", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "line_ranges", kind: "message", T: LineRange, repeated: true },
  { no: 13, name: "notebook_cell_idx", kind: "scalar", T: 5, opt: true },
  { no: 14, name: "is_new_cell", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "cell_language", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "edit_category", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true }
]);
var EditFileResult$Runtime = (() => class _EditFileResult extends Message<_EditFileResult> {
  declare diff?: EditFileResult_FileDiff;
  declare isApplied: boolean;
  declare applyFailed: boolean;
  declare linterErrors: LinterError[];
  declare rejected?: boolean;
  declare numMatches?: number;
  declare whitespaceInsensitiveFallbackFoundMatch?: boolean;
  declare noMatchFoundInLineRanges?: boolean;
  declare recoverableError?: EditFileResult_RecoverableError;
  declare numLinesInFile?: number;
  declare isSubagentEdit?: boolean;
  declare diffBecameNoOpDueToOnSaveFixes?: boolean;
  declare humanReview?: EditFileResult_EditFileHumanReview;
  declare humanFeedback?: EditFileResult_HumanFeedback;
  declare shouldEagerlyProcessLints?: boolean;
  declare humanReviewV2?: HumanReview;
  declare wereAllNewLinterErrorsResolvedByThisEdit?: boolean;
  constructor(data?: PartialMessage<_EditFileResult>) {
    super();
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    proto3.util.initPartial(data, this as _EditFileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult {
    return new _EditFileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult {
    return new _EditFileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult {
    return new _EditFileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult | PlainMessage<_EditFileResult> | undefined | null, b2: _EditFileResult | PlainMessage<_EditFileResult> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult as unknown as MessageType<_EditFileResult>, a, b2);
  }
})();
export type EditFileResult = InstanceType<typeof EditFileResult$Runtime>;
var EditFileResult: MessageType<EditFileResult> = EditFileResult$Runtime as unknown as MessageType<EditFileResult>;
(EditFileResult as MutableMessageType<EditFileResult>).runtime = proto3;
(EditFileResult as MutableMessageType<EditFileResult>).typeName = "aiserver.v1.EditFileResult";
(EditFileResult as MutableMessageType<EditFileResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "diff", kind: "message", T: EditFileResult_FileDiff },
  {
    no: 2,
    name: "is_applied",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "apply_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "linter_errors", kind: "message", T: LinterError, repeated: true },
  { no: 5, name: "rejected", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "num_matches", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "whitespace_insensitive_fallback_found_match", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "no_match_found_in_line_ranges", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "recoverable_error", kind: "message", T: EditFileResult_RecoverableError, opt: true },
  { no: 9, name: "num_lines_in_file", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "is_subagent_edit", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "diff_became_no_op_due_to_on_save_fixes", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "human_review", kind: "message", T: EditFileResult_EditFileHumanReview, opt: true },
  { no: 14, name: "human_feedback", kind: "message", T: EditFileResult_HumanFeedback, opt: true },
  { no: 15, name: "should_eagerly_process_lints", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "human_review_v2", kind: "message", T: HumanReview, opt: true },
  { no: 17, name: "were_all_new_linter_errors_resolved_by_this_edit", kind: "scalar", T: 8, opt: true }
]);
var EditFileResult_FileDiff$Runtime = (() => class _EditFileResult_FileDiff extends Message<_EditFileResult_FileDiff> {
  declare chunks: EditFileResult_FileDiff_ChunkDiff[];
  declare editor: EditFileResult_FileDiff_Editor;
  declare hitTimeout: boolean;
  constructor(data?: PartialMessage<_EditFileResult_FileDiff>) {
    super();
    this.chunks = [];
    this.editor = EditFileResult_FileDiff_Editor.UNSPECIFIED;
    this.hitTimeout = false;
    proto3.util.initPartial(data, this as _EditFileResult_FileDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult_FileDiff {
    return new _EditFileResult_FileDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult_FileDiff {
    return new _EditFileResult_FileDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult_FileDiff {
    return new _EditFileResult_FileDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult_FileDiff | PlainMessage<_EditFileResult_FileDiff> | undefined | null, b2: _EditFileResult_FileDiff | PlainMessage<_EditFileResult_FileDiff> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult_FileDiff as unknown as MessageType<_EditFileResult_FileDiff>, a, b2);
  }
})();
export type EditFileResult_FileDiff = InstanceType<typeof EditFileResult_FileDiff$Runtime>;
var EditFileResult_FileDiff: MessageType<EditFileResult_FileDiff> = EditFileResult_FileDiff$Runtime as unknown as MessageType<EditFileResult_FileDiff>;
(EditFileResult_FileDiff as MutableMessageType<EditFileResult_FileDiff>).runtime = proto3;
(EditFileResult_FileDiff as MutableMessageType<EditFileResult_FileDiff>).typeName = "aiserver.v1.EditFileResult.FileDiff";
(EditFileResult_FileDiff as MutableMessageType<EditFileResult_FileDiff>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "chunks", kind: "message", T: EditFileResult_FileDiff_ChunkDiff, repeated: true },
  { no: 2, name: "editor", kind: "enum", T: proto3.getEnumType(EditFileResult_FileDiff_Editor) },
  {
    no: 3,
    name: "hit_timeout",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
(function(EditFileResult_FileDiff_Editor2) {
  EditFileResult_FileDiff_Editor2[EditFileResult_FileDiff_Editor2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EditFileResult_FileDiff_Editor2[EditFileResult_FileDiff_Editor2["AI"] = 1] = "AI";
  EditFileResult_FileDiff_Editor2[EditFileResult_FileDiff_Editor2["HUMAN"] = 2] = "HUMAN";
})(EditFileResult_FileDiff_Editor! || (EditFileResult_FileDiff_Editor = {} as typeof EditFileResult_FileDiff_Editor));
proto3.util.setEnumType(EditFileResult_FileDiff_Editor, "aiserver.v1.EditFileResult.FileDiff.Editor", [
  { no: 0, name: "EDITOR_UNSPECIFIED" },
  { no: 1, name: "EDITOR_AI" },
  { no: 2, name: "EDITOR_HUMAN" }
]);
var EditFileResult_FileDiff_ChunkDiff$Runtime = (() => class _EditFileResult_FileDiff_ChunkDiff extends Message<_EditFileResult_FileDiff_ChunkDiff> {
  declare diffString: string;
  declare oldStart: number;
  declare newStart: number;
  declare oldLines: number;
  declare newLines: number;
  declare linesRemoved: number;
  declare linesAdded: number;
  constructor(data?: PartialMessage<_EditFileResult_FileDiff_ChunkDiff>) {
    super();
    this.diffString = "";
    this.oldStart = 0;
    this.newStart = 0;
    this.oldLines = 0;
    this.newLines = 0;
    this.linesRemoved = 0;
    this.linesAdded = 0;
    proto3.util.initPartial(data, this as _EditFileResult_FileDiff_ChunkDiff);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult_FileDiff_ChunkDiff {
    return new _EditFileResult_FileDiff_ChunkDiff().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult_FileDiff_ChunkDiff {
    return new _EditFileResult_FileDiff_ChunkDiff().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult_FileDiff_ChunkDiff {
    return new _EditFileResult_FileDiff_ChunkDiff().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult_FileDiff_ChunkDiff | PlainMessage<_EditFileResult_FileDiff_ChunkDiff> | undefined | null, b2: _EditFileResult_FileDiff_ChunkDiff | PlainMessage<_EditFileResult_FileDiff_ChunkDiff> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult_FileDiff_ChunkDiff as unknown as MessageType<_EditFileResult_FileDiff_ChunkDiff>, a, b2);
  }
})();
export type EditFileResult_FileDiff_ChunkDiff = InstanceType<typeof EditFileResult_FileDiff_ChunkDiff$Runtime>;
var EditFileResult_FileDiff_ChunkDiff: MessageType<EditFileResult_FileDiff_ChunkDiff> = EditFileResult_FileDiff_ChunkDiff$Runtime as unknown as MessageType<EditFileResult_FileDiff_ChunkDiff>;
(EditFileResult_FileDiff_ChunkDiff as MutableMessageType<EditFileResult_FileDiff_ChunkDiff>).runtime = proto3;
(EditFileResult_FileDiff_ChunkDiff as MutableMessageType<EditFileResult_FileDiff_ChunkDiff>).typeName = "aiserver.v1.EditFileResult.FileDiff.ChunkDiff";
(EditFileResult_FileDiff_ChunkDiff as MutableMessageType<EditFileResult_FileDiff_ChunkDiff>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "diff_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "old_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "new_start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "old_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "new_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "lines_removed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 7,
    name: "lines_added",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var EditFileResult_RecoverableError$Runtime = (() => class _EditFileResult_RecoverableError extends Message<_EditFileResult_RecoverableError> {
  declare errorType: EditFileResult_RecoverableError_RecoverableErrorType;
  declare modelMessage: string;
  constructor(data?: PartialMessage<_EditFileResult_RecoverableError>) {
    super();
    this.errorType = EditFileResult_RecoverableError_RecoverableErrorType.UNSPECIFIED;
    this.modelMessage = "";
    proto3.util.initPartial(data, this as _EditFileResult_RecoverableError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult_RecoverableError {
    return new _EditFileResult_RecoverableError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult_RecoverableError {
    return new _EditFileResult_RecoverableError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult_RecoverableError {
    return new _EditFileResult_RecoverableError().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult_RecoverableError | PlainMessage<_EditFileResult_RecoverableError> | undefined | null, b2: _EditFileResult_RecoverableError | PlainMessage<_EditFileResult_RecoverableError> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult_RecoverableError as unknown as MessageType<_EditFileResult_RecoverableError>, a, b2);
  }
})();
export type EditFileResult_RecoverableError = InstanceType<typeof EditFileResult_RecoverableError$Runtime>;
var EditFileResult_RecoverableError: MessageType<EditFileResult_RecoverableError> = EditFileResult_RecoverableError$Runtime as unknown as MessageType<EditFileResult_RecoverableError>;
(EditFileResult_RecoverableError as MutableMessageType<EditFileResult_RecoverableError>).runtime = proto3;
(EditFileResult_RecoverableError as MutableMessageType<EditFileResult_RecoverableError>).typeName = "aiserver.v1.EditFileResult.RecoverableError";
(EditFileResult_RecoverableError as MutableMessageType<EditFileResult_RecoverableError>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error_type", kind: "enum", T: proto3.getEnumType(EditFileResult_RecoverableError_RecoverableErrorType) },
  {
    no: 2,
    name: "model_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
(function(EditFileResult_RecoverableError_RecoverableErrorType2) {
  EditFileResult_RecoverableError_RecoverableErrorType2[EditFileResult_RecoverableError_RecoverableErrorType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EditFileResult_RecoverableError_RecoverableErrorType2[EditFileResult_RecoverableError_RecoverableErrorType2["SEARCH_STRING_NOT_FOUND"] = 1] = "SEARCH_STRING_NOT_FOUND";
  EditFileResult_RecoverableError_RecoverableErrorType2[EditFileResult_RecoverableError_RecoverableErrorType2["AMBIGUOUS_SEARCH_STRING"] = 2] = "AMBIGUOUS_SEARCH_STRING";
})(EditFileResult_RecoverableError_RecoverableErrorType! || (EditFileResult_RecoverableError_RecoverableErrorType = {} as typeof EditFileResult_RecoverableError_RecoverableErrorType));
proto3.util.setEnumType(EditFileResult_RecoverableError_RecoverableErrorType, "aiserver.v1.EditFileResult.RecoverableError.RecoverableErrorType", [
  { no: 0, name: "RECOVERABLE_ERROR_TYPE_UNSPECIFIED" },
  { no: 1, name: "RECOVERABLE_ERROR_TYPE_SEARCH_STRING_NOT_FOUND" },
  { no: 2, name: "RECOVERABLE_ERROR_TYPE_AMBIGUOUS_SEARCH_STRING" }
]);
var EditFileResult_EditFileHumanReview$Runtime = (() => class _EditFileResult_EditFileHumanReview extends Message<_EditFileResult_EditFileHumanReview> {
  declare isEditAccepted: boolean;
  declare textResult: string;
  declare stopAndGetNewUserInput: boolean;
  constructor(data?: PartialMessage<_EditFileResult_EditFileHumanReview>) {
    super();
    this.isEditAccepted = false;
    this.textResult = "";
    this.stopAndGetNewUserInput = false;
    proto3.util.initPartial(data, this as _EditFileResult_EditFileHumanReview);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult_EditFileHumanReview {
    return new _EditFileResult_EditFileHumanReview().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult_EditFileHumanReview {
    return new _EditFileResult_EditFileHumanReview().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult_EditFileHumanReview {
    return new _EditFileResult_EditFileHumanReview().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult_EditFileHumanReview | PlainMessage<_EditFileResult_EditFileHumanReview> | undefined | null, b2: _EditFileResult_EditFileHumanReview | PlainMessage<_EditFileResult_EditFileHumanReview> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult_EditFileHumanReview as unknown as MessageType<_EditFileResult_EditFileHumanReview>, a, b2);
  }
})();
export type EditFileResult_EditFileHumanReview = InstanceType<typeof EditFileResult_EditFileHumanReview$Runtime>;
var EditFileResult_EditFileHumanReview: MessageType<EditFileResult_EditFileHumanReview> = EditFileResult_EditFileHumanReview$Runtime as unknown as MessageType<EditFileResult_EditFileHumanReview>;
(EditFileResult_EditFileHumanReview as MutableMessageType<EditFileResult_EditFileHumanReview>).runtime = proto3;
(EditFileResult_EditFileHumanReview as MutableMessageType<EditFileResult_EditFileHumanReview>).typeName = "aiserver.v1.EditFileResult.EditFileHumanReview";
(EditFileResult_EditFileHumanReview as MutableMessageType<EditFileResult_EditFileHumanReview>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_edit_accepted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "text_result",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "stop_and_get_new_user_input",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var EditFileResult_HumanFeedback$Runtime = (() => class _EditFileResult_HumanFeedback extends Message<_EditFileResult_HumanFeedback> {
  declare selectedOption: string;
  declare feedbackText: string;
  declare submitFeedbackAsNewMessage: boolean;
  declare bubbleId: string;
  constructor(data?: PartialMessage<_EditFileResult_HumanFeedback>) {
    super();
    this.selectedOption = "";
    this.feedbackText = "";
    this.submitFeedbackAsNewMessage = false;
    this.bubbleId = "";
    proto3.util.initPartial(data, this as _EditFileResult_HumanFeedback);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileResult_HumanFeedback {
    return new _EditFileResult_HumanFeedback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileResult_HumanFeedback {
    return new _EditFileResult_HumanFeedback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileResult_HumanFeedback {
    return new _EditFileResult_HumanFeedback().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileResult_HumanFeedback | PlainMessage<_EditFileResult_HumanFeedback> | undefined | null, b2: _EditFileResult_HumanFeedback | PlainMessage<_EditFileResult_HumanFeedback> | undefined | null): boolean {
    return proto3.util.equals(_EditFileResult_HumanFeedback as unknown as MessageType<_EditFileResult_HumanFeedback>, a, b2);
  }
})();
export type EditFileResult_HumanFeedback = InstanceType<typeof EditFileResult_HumanFeedback$Runtime>;
var EditFileResult_HumanFeedback: MessageType<EditFileResult_HumanFeedback> = EditFileResult_HumanFeedback$Runtime as unknown as MessageType<EditFileResult_HumanFeedback>;
(EditFileResult_HumanFeedback as MutableMessageType<EditFileResult_HumanFeedback>).runtime = proto3;
(EditFileResult_HumanFeedback as MutableMessageType<EditFileResult_HumanFeedback>).typeName = "aiserver.v1.EditFileResult.HumanFeedback";
(EditFileResult_HumanFeedback as MutableMessageType<EditFileResult_HumanFeedback>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selected_option",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "feedback_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "submit_feedback_as_new_message",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var HumanReview$Runtime = (() => class _HumanReview extends Message<_HumanReview> {
  declare selectedOption: string;
  declare feedbackText: string;
  declare submitFeedbackAsNewMessage: boolean;
  declare bubbleId: string;
  constructor(data?: PartialMessage<_HumanReview>) {
    super();
    this.selectedOption = "";
    this.feedbackText = "";
    this.submitFeedbackAsNewMessage = false;
    this.bubbleId = "";
    proto3.util.initPartial(data, this as _HumanReview);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HumanReview {
    return new _HumanReview().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HumanReview {
    return new _HumanReview().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HumanReview {
    return new _HumanReview().fromJsonString(jsonString, options);
  }
  static equals(a: _HumanReview | PlainMessage<_HumanReview> | undefined | null, b2: _HumanReview | PlainMessage<_HumanReview> | undefined | null): boolean {
    return proto3.util.equals(_HumanReview as unknown as MessageType<_HumanReview>, a, b2);
  }
})();
export type HumanReview = InstanceType<typeof HumanReview$Runtime>;
var HumanReview: MessageType<HumanReview> = HumanReview$Runtime as unknown as MessageType<HumanReview>;
(HumanReview as MutableMessageType<HumanReview>).runtime = proto3;
(HumanReview as MutableMessageType<HumanReview>).typeName = "aiserver.v1.HumanReview";
(HumanReview as MutableMessageType<HumanReview>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selected_option",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "feedback_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "submit_feedback_as_new_message",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "bubble_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditFileStream$Runtime = (() => class _EditFileStream extends Message<_EditFileStream> {
  constructor(data?: PartialMessage<_EditFileStream>) {
    super();
    proto3.util.initPartial(data, this as _EditFileStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditFileStream {
    return new _EditFileStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditFileStream {
    return new _EditFileStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditFileStream {
    return new _EditFileStream().fromJsonString(jsonString, options);
  }
  static equals(a: _EditFileStream | PlainMessage<_EditFileStream> | undefined | null, b2: _EditFileStream | PlainMessage<_EditFileStream> | undefined | null): boolean {
    return proto3.util.equals(_EditFileStream as unknown as MessageType<_EditFileStream>, a, b2);
  }
})();
export type EditFileStream = InstanceType<typeof EditFileStream$Runtime>;
var EditFileStream: MessageType<EditFileStream> = EditFileStream$Runtime as unknown as MessageType<EditFileStream>;
(EditFileStream as MutableMessageType<EditFileStream>).runtime = proto3;
(EditFileStream as MutableMessageType<EditFileStream>).typeName = "aiserver.v1.EditFileStream";
(EditFileStream as MutableMessageType<EditFileStream>).fields = proto3.util.newFieldList(() => []);
var ToolCallFileSearchParams$Runtime = (() => class _ToolCallFileSearchParams extends Message<_ToolCallFileSearchParams> {
  declare query: string;
  constructor(data?: PartialMessage<_ToolCallFileSearchParams>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _ToolCallFileSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallFileSearchParams {
    return new _ToolCallFileSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallFileSearchParams {
    return new _ToolCallFileSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallFileSearchParams {
    return new _ToolCallFileSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallFileSearchParams | PlainMessage<_ToolCallFileSearchParams> | undefined | null, b2: _ToolCallFileSearchParams | PlainMessage<_ToolCallFileSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallFileSearchParams as unknown as MessageType<_ToolCallFileSearchParams>, a, b2);
  }
})();
export type ToolCallFileSearchParams = InstanceType<typeof ToolCallFileSearchParams$Runtime>;
var ToolCallFileSearchParams: MessageType<ToolCallFileSearchParams> = ToolCallFileSearchParams$Runtime as unknown as MessageType<ToolCallFileSearchParams>;
(ToolCallFileSearchParams as MutableMessageType<ToolCallFileSearchParams>).runtime = proto3;
(ToolCallFileSearchParams as MutableMessageType<ToolCallFileSearchParams>).typeName = "aiserver.v1.ToolCallFileSearchParams";
(ToolCallFileSearchParams as MutableMessageType<ToolCallFileSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolCallFileSearchStream$Runtime = (() => class _ToolCallFileSearchStream extends Message<_ToolCallFileSearchStream> {
  declare query: string;
  constructor(data?: PartialMessage<_ToolCallFileSearchStream>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _ToolCallFileSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallFileSearchStream {
    return new _ToolCallFileSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallFileSearchStream {
    return new _ToolCallFileSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallFileSearchStream {
    return new _ToolCallFileSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallFileSearchStream | PlainMessage<_ToolCallFileSearchStream> | undefined | null, b2: _ToolCallFileSearchStream | PlainMessage<_ToolCallFileSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallFileSearchStream as unknown as MessageType<_ToolCallFileSearchStream>, a, b2);
  }
})();
export type ToolCallFileSearchStream = InstanceType<typeof ToolCallFileSearchStream$Runtime>;
var ToolCallFileSearchStream: MessageType<ToolCallFileSearchStream> = ToolCallFileSearchStream$Runtime as unknown as MessageType<ToolCallFileSearchStream>;
(ToolCallFileSearchStream as MutableMessageType<ToolCallFileSearchStream>).runtime = proto3;
(ToolCallFileSearchStream as MutableMessageType<ToolCallFileSearchStream>).typeName = "aiserver.v1.ToolCallFileSearchStream";
(ToolCallFileSearchStream as MutableMessageType<ToolCallFileSearchStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolCallFileSearchResult$Runtime = (() => class _ToolCallFileSearchResult extends Message<_ToolCallFileSearchResult> {
  declare files: ToolCallFileSearchResult_File[];
  declare limitHit?: boolean;
  declare numResults: number;
  constructor(data?: PartialMessage<_ToolCallFileSearchResult>) {
    super();
    this.files = [];
    this.numResults = 0;
    proto3.util.initPartial(data, this as _ToolCallFileSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallFileSearchResult {
    return new _ToolCallFileSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallFileSearchResult {
    return new _ToolCallFileSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallFileSearchResult {
    return new _ToolCallFileSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallFileSearchResult | PlainMessage<_ToolCallFileSearchResult> | undefined | null, b2: _ToolCallFileSearchResult | PlainMessage<_ToolCallFileSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallFileSearchResult as unknown as MessageType<_ToolCallFileSearchResult>, a, b2);
  }
})();
export type ToolCallFileSearchResult = InstanceType<typeof ToolCallFileSearchResult$Runtime>;
var ToolCallFileSearchResult: MessageType<ToolCallFileSearchResult> = ToolCallFileSearchResult$Runtime as unknown as MessageType<ToolCallFileSearchResult>;
(ToolCallFileSearchResult as MutableMessageType<ToolCallFileSearchResult>).runtime = proto3;
(ToolCallFileSearchResult as MutableMessageType<ToolCallFileSearchResult>).typeName = "aiserver.v1.ToolCallFileSearchResult";
(ToolCallFileSearchResult as MutableMessageType<ToolCallFileSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: ToolCallFileSearchResult_File, repeated: true },
  { no: 2, name: "limit_hit", kind: "scalar", T: 8, opt: true },
  {
    no: 3,
    name: "num_results",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ToolCallFileSearchResult_File$Runtime = (() => class _ToolCallFileSearchResult_File extends Message<_ToolCallFileSearchResult_File> {
  declare uri: string;
  constructor(data?: PartialMessage<_ToolCallFileSearchResult_File>) {
    super();
    this.uri = "";
    proto3.util.initPartial(data, this as _ToolCallFileSearchResult_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallFileSearchResult_File {
    return new _ToolCallFileSearchResult_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallFileSearchResult_File {
    return new _ToolCallFileSearchResult_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallFileSearchResult_File {
    return new _ToolCallFileSearchResult_File().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallFileSearchResult_File | PlainMessage<_ToolCallFileSearchResult_File> | undefined | null, b2: _ToolCallFileSearchResult_File | PlainMessage<_ToolCallFileSearchResult_File> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallFileSearchResult_File as unknown as MessageType<_ToolCallFileSearchResult_File>, a, b2);
  }
})();
export type ToolCallFileSearchResult_File = InstanceType<typeof ToolCallFileSearchResult_File$Runtime>;
var ToolCallFileSearchResult_File: MessageType<ToolCallFileSearchResult_File> = ToolCallFileSearchResult_File$Runtime as unknown as MessageType<ToolCallFileSearchResult_File>;
(ToolCallFileSearchResult_File as MutableMessageType<ToolCallFileSearchResult_File>).runtime = proto3;
(ToolCallFileSearchResult_File as MutableMessageType<ToolCallFileSearchResult_File>).typeName = "aiserver.v1.ToolCallFileSearchResult.File";
(ToolCallFileSearchResult_File as MutableMessageType<ToolCallFileSearchResult_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListDirParams$Runtime = (() => class _ListDirParams extends Message<_ListDirParams> {
  declare directoryPath: string;
  constructor(data?: PartialMessage<_ListDirParams>) {
    super();
    this.directoryPath = "";
    proto3.util.initPartial(data, this as _ListDirParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirParams {
    return new _ListDirParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirParams {
    return new _ListDirParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirParams {
    return new _ListDirParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirParams | PlainMessage<_ListDirParams> | undefined | null, b2: _ListDirParams | PlainMessage<_ListDirParams> | undefined | null): boolean {
    return proto3.util.equals(_ListDirParams as unknown as MessageType<_ListDirParams>, a, b2);
  }
})();
export type ListDirParams = InstanceType<typeof ListDirParams$Runtime>;
var ListDirParams: MessageType<ListDirParams> = ListDirParams$Runtime as unknown as MessageType<ListDirParams>;
(ListDirParams as MutableMessageType<ListDirParams>).runtime = proto3;
(ListDirParams as MutableMessageType<ListDirParams>).typeName = "aiserver.v1.ListDirParams";
(ListDirParams as MutableMessageType<ListDirParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "directory_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListDirResult$Runtime = (() => class _ListDirResult extends Message<_ListDirResult> {
  declare files: ListDirResult_File[];
  declare directoryRelativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ListDirResult>) {
    super();
    this.files = [];
    this.directoryRelativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ListDirResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirResult {
    return new _ListDirResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirResult {
    return new _ListDirResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirResult {
    return new _ListDirResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirResult | PlainMessage<_ListDirResult> | undefined | null, b2: _ListDirResult | PlainMessage<_ListDirResult> | undefined | null): boolean {
    return proto3.util.equals(_ListDirResult as unknown as MessageType<_ListDirResult>, a, b2);
  }
})();
export type ListDirResult = InstanceType<typeof ListDirResult$Runtime>;
var ListDirResult: MessageType<ListDirResult> = ListDirResult$Runtime as unknown as MessageType<ListDirResult>;
(ListDirResult as MutableMessageType<ListDirResult>).runtime = proto3;
(ListDirResult as MutableMessageType<ListDirResult>).typeName = "aiserver.v1.ListDirResult";
(ListDirResult as MutableMessageType<ListDirResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: ListDirResult_File, repeated: true },
  {
    no: 2,
    name: "directory_relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListDirResult_File$Runtime = (() => class _ListDirResult_File extends Message<_ListDirResult_File> {
  declare name: string;
  declare isDirectory: boolean;
  declare size?: bigint;
  declare lastModified?: Timestamp;
  declare numChildren?: number;
  declare numLines?: number;
  constructor(data?: PartialMessage<_ListDirResult_File>) {
    super();
    this.name = "";
    this.isDirectory = false;
    proto3.util.initPartial(data, this as _ListDirResult_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirResult_File {
    return new _ListDirResult_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirResult_File {
    return new _ListDirResult_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirResult_File {
    return new _ListDirResult_File().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirResult_File | PlainMessage<_ListDirResult_File> | undefined | null, b2: _ListDirResult_File | PlainMessage<_ListDirResult_File> | undefined | null): boolean {
    return proto3.util.equals(_ListDirResult_File as unknown as MessageType<_ListDirResult_File>, a, b2);
  }
})();
export type ListDirResult_File = InstanceType<typeof ListDirResult_File$Runtime>;
var ListDirResult_File: MessageType<ListDirResult_File> = ListDirResult_File$Runtime as unknown as MessageType<ListDirResult_File>;
(ListDirResult_File as MutableMessageType<ListDirResult_File>).runtime = proto3;
(ListDirResult_File as MutableMessageType<ListDirResult_File>).typeName = "aiserver.v1.ListDirResult.File";
(ListDirResult_File as MutableMessageType<ListDirResult_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_directory",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "size", kind: "scalar", T: 3, opt: true },
  { no: 4, name: "last_modified", kind: "message", T: Timestamp, opt: true },
  { no: 5, name: "num_children", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "num_lines", kind: "scalar", T: 5, opt: true }
]);
var ListDirStream$Runtime = (() => class _ListDirStream extends Message<_ListDirStream> {
  constructor(data?: PartialMessage<_ListDirStream>) {
    super();
    proto3.util.initPartial(data, this as _ListDirStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirStream {
    return new _ListDirStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirStream {
    return new _ListDirStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirStream {
    return new _ListDirStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirStream | PlainMessage<_ListDirStream> | undefined | null, b2: _ListDirStream | PlainMessage<_ListDirStream> | undefined | null): boolean {
    return proto3.util.equals(_ListDirStream as unknown as MessageType<_ListDirStream>, a, b2);
  }
})();
export type ListDirStream = InstanceType<typeof ListDirStream$Runtime>;
var ListDirStream: MessageType<ListDirStream> = ListDirStream$Runtime as unknown as MessageType<ListDirStream>;
(ListDirStream as MutableMessageType<ListDirStream>).runtime = proto3;
(ListDirStream as MutableMessageType<ListDirStream>).typeName = "aiserver.v1.ListDirStream";
(ListDirStream as MutableMessageType<ListDirStream>).fields = proto3.util.newFieldList(() => []);
var ReadFileParams$Runtime = (() => class _ReadFileParams extends Message<_ReadFileParams> {
  declare relativeWorkspacePath: string;
  declare readEntireFile: boolean;
  declare startLineOneIndexed?: number;
  declare endLineOneIndexedInclusive?: number;
  declare fileIsAllowedToBeReadEntirely: boolean;
  declare maxLines?: number;
  declare maxChars?: number;
  declare minLines?: number;
  constructor(data?: PartialMessage<_ReadFileParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.readEntireFile = false;
    this.fileIsAllowedToBeReadEntirely = false;
    proto3.util.initPartial(data, this as _ReadFileParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileParams {
    return new _ReadFileParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileParams {
    return new _ReadFileParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileParams {
    return new _ReadFileParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileParams | PlainMessage<_ReadFileParams> | undefined | null, b2: _ReadFileParams | PlainMessage<_ReadFileParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileParams as unknown as MessageType<_ReadFileParams>, a, b2);
  }
})();
export type ReadFileParams = InstanceType<typeof ReadFileParams$Runtime>;
var ReadFileParams: MessageType<ReadFileParams> = ReadFileParams$Runtime as unknown as MessageType<ReadFileParams>;
(ReadFileParams as MutableMessageType<ReadFileParams>).runtime = proto3;
(ReadFileParams as MutableMessageType<ReadFileParams>).typeName = "aiserver.v1.ReadFileParams";
(ReadFileParams as MutableMessageType<ReadFileParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "read_entire_file",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true },
  {
    no: 5,
    name: "file_is_allowed_to_be_read_entirely",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "max_lines", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "max_chars", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "min_lines", kind: "scalar", T: 5, opt: true }
]);
var ReadFileResult$Runtime = (() => class _ReadFileResult extends Message<_ReadFileResult> {
  declare contents: string;
  declare didDowngradeToLineRange: boolean;
  declare didShortenLineRange: boolean;
  declare didSetDefaultLineRange: boolean;
  declare fullFileContents?: string;
  declare outline?: string;
  declare startLineOneIndexed?: number;
  declare endLineOneIndexedInclusive?: number;
  declare relativeWorkspacePath: string;
  declare didShortenCharRange: boolean;
  declare readFullFile?: boolean;
  declare totalLines?: number;
  declare matchingCursorRules: CursorRule2[];
  declare fileGitContext?: FileGit;
  constructor(data?: PartialMessage<_ReadFileResult>) {
    super();
    this.contents = "";
    this.didDowngradeToLineRange = false;
    this.didShortenLineRange = false;
    this.didSetDefaultLineRange = false;
    this.relativeWorkspacePath = "";
    this.didShortenCharRange = false;
    this.matchingCursorRules = [];
    proto3.util.initPartial(data, this as _ReadFileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileResult {
    return new _ReadFileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileResult {
    return new _ReadFileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileResult {
    return new _ReadFileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileResult | PlainMessage<_ReadFileResult> | undefined | null, b2: _ReadFileResult | PlainMessage<_ReadFileResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileResult as unknown as MessageType<_ReadFileResult>, a, b2);
  }
})();
export type ReadFileResult = InstanceType<typeof ReadFileResult$Runtime>;
var ReadFileResult: MessageType<ReadFileResult> = ReadFileResult$Runtime as unknown as MessageType<ReadFileResult>;
(ReadFileResult as MutableMessageType<ReadFileResult>).runtime = proto3;
(ReadFileResult as MutableMessageType<ReadFileResult>).typeName = "aiserver.v1.ReadFileResult";
(ReadFileResult as MutableMessageType<ReadFileResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "did_downgrade_to_line_range",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "did_shorten_line_range",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "did_set_default_line_range",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "full_file_contents", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "outline", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "start_line_one_indexed", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "end_line_one_indexed_inclusive", kind: "scalar", T: 5, opt: true },
  {
    no: 9,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "did_shorten_char_range",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 11, name: "read_full_file", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "total_lines", kind: "scalar", T: 5, opt: true },
  { no: 13, name: "matching_cursor_rules", kind: "message", T: CursorRule2, repeated: true },
  { no: 14, name: "file_git_context", kind: "message", T: FileGit }
]);
var ReadFileStream$Runtime = (() => class _ReadFileStream extends Message<_ReadFileStream> {
  constructor(data?: PartialMessage<_ReadFileStream>) {
    super();
    proto3.util.initPartial(data, this as _ReadFileStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileStream {
    return new _ReadFileStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileStream {
    return new _ReadFileStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileStream {
    return new _ReadFileStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileStream | PlainMessage<_ReadFileStream> | undefined | null, b2: _ReadFileStream | PlainMessage<_ReadFileStream> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileStream as unknown as MessageType<_ReadFileStream>, a, b2);
  }
})();
export type ReadFileStream = InstanceType<typeof ReadFileStream$Runtime>;
var ReadFileStream: MessageType<ReadFileStream> = ReadFileStream$Runtime as unknown as MessageType<ReadFileStream>;
(ReadFileStream as MutableMessageType<ReadFileStream>).runtime = proto3;
(ReadFileStream as MutableMessageType<ReadFileStream>).typeName = "aiserver.v1.ReadFileStream";
(ReadFileStream as MutableMessageType<ReadFileStream>).fields = proto3.util.newFieldList(() => []);
var RipgrepSearchParams$Runtime = (() => class _RipgrepSearchParams extends Message<_RipgrepSearchParams> {
  declare options?: RipgrepSearchParams_ITextQueryBuilderOptionsProto;
  declare patternInfo?: RipgrepSearchParams_IPatternInfoProto;
  constructor(data?: PartialMessage<_RipgrepSearchParams>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams {
    return new _RipgrepSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams {
    return new _RipgrepSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams {
    return new _RipgrepSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams | PlainMessage<_RipgrepSearchParams> | undefined | null, b2: _RipgrepSearchParams | PlainMessage<_RipgrepSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams as unknown as MessageType<_RipgrepSearchParams>, a, b2);
  }
})();
export type RipgrepSearchParams = InstanceType<typeof RipgrepSearchParams$Runtime>;
var RipgrepSearchParams: MessageType<RipgrepSearchParams> = RipgrepSearchParams$Runtime as unknown as MessageType<RipgrepSearchParams>;
(RipgrepSearchParams as MutableMessageType<RipgrepSearchParams>).runtime = proto3;
(RipgrepSearchParams as MutableMessageType<RipgrepSearchParams>).typeName = "aiserver.v1.RipgrepSearchParams";
(RipgrepSearchParams as MutableMessageType<RipgrepSearchParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "options", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto },
  { no: 2, name: "pattern_info", kind: "message", T: RipgrepSearchParams_IPatternInfoProto }
]);
var RipgrepSearchParams_IPatternInfoProto$Runtime = (() => class _RipgrepSearchParams_IPatternInfoProto extends Message<_RipgrepSearchParams_IPatternInfoProto> {
  declare pattern: string;
  declare isRegExp?: boolean;
  declare isWordMatch?: boolean;
  declare wordSeparators?: string;
  declare isMultiline?: boolean;
  declare isUnicode?: boolean;
  declare isCaseSensitive?: boolean;
  declare notebookInfo?: RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto;
  declare patternWasEscaped?: boolean;
  constructor(data?: PartialMessage<_RipgrepSearchParams_IPatternInfoProto>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _RipgrepSearchParams_IPatternInfoProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_IPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_IPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_IPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_IPatternInfoProto | PlainMessage<_RipgrepSearchParams_IPatternInfoProto> | undefined | null, b2: _RipgrepSearchParams_IPatternInfoProto | PlainMessage<_RipgrepSearchParams_IPatternInfoProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_IPatternInfoProto as unknown as MessageType<_RipgrepSearchParams_IPatternInfoProto>, a, b2);
  }
})();
export type RipgrepSearchParams_IPatternInfoProto = InstanceType<typeof RipgrepSearchParams_IPatternInfoProto$Runtime>;
var RipgrepSearchParams_IPatternInfoProto: MessageType<RipgrepSearchParams_IPatternInfoProto> = RipgrepSearchParams_IPatternInfoProto$Runtime as unknown as MessageType<RipgrepSearchParams_IPatternInfoProto>;
(RipgrepSearchParams_IPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto>).runtime = proto3;
(RipgrepSearchParams_IPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto>).typeName = "aiserver.v1.RipgrepSearchParams.IPatternInfoProto";
(RipgrepSearchParams_IPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "is_reg_exp", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "is_word_match", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "word_separators", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "is_multiline", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "is_unicode", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "is_case_sensitive", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "notebook_info", kind: "message", T: RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto },
  { no: 9, name: "pattern_was_escaped", kind: "scalar", T: 8, opt: true }
]);
var RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto$Runtime = (() => class _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto extends Message<_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto> {
  declare isInNotebookMarkdownInput?: boolean;
  declare isInNotebookMarkdownPreview?: boolean;
  declare isInNotebookCellInput?: boolean;
  declare isInNotebookCellOutput?: boolean;
  constructor(data?: PartialMessage<_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto {
    return new _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto | PlainMessage<_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto> | undefined | null, b2: _RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto | PlainMessage<_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto as unknown as MessageType<_RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>, a, b2);
  }
})();
export type RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto = InstanceType<typeof RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto$Runtime>;
var RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto: MessageType<RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto> = RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto$Runtime as unknown as MessageType<RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>;
(RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>).runtime = proto3;
(RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>).typeName = "aiserver.v1.RipgrepSearchParams.IPatternInfoProto.INotebookPatternInfoProto";
(RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto as MutableMessageType<RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "is_in_notebook_markdown_input", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "is_in_notebook_markdown_preview", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "is_in_notebook_cell_input", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_in_notebook_cell_output", kind: "scalar", T: 8, opt: true }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto> {
  declare previewOptions?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto;
  declare fileEncoding?: string;
  declare surroundingContext?: number;
  declare isSmartCase?: boolean;
  declare notebookSearchConfig?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto;
  declare excludePattern?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto;
  declare includePattern?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto;
  declare expandPatterns?: boolean;
  declare maxResults?: number;
  declare maxFileSize?: number;
  declare disregardIgnoreFiles?: boolean;
  declare disregardGlobalIgnoreFiles?: boolean;
  declare disregardParentIgnoreFiles?: boolean;
  declare disregardExcludeSettings?: boolean;
  declare disregardSearchExcludeSettings?: boolean;
  declare ignoreSymlinks?: boolean;
  declare onlyOpenEditors?: boolean;
  declare onlyFileScheme?: boolean;
  declare reason?: string;
  declare extraFileResources?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto;
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "preview_options", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto },
  { no: 2, name: "file_encoding", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "surrounding_context", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "is_smart_case", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "notebook_search_config", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto },
  { no: 6, name: "exclude_pattern", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto },
  { no: 7, name: "include_pattern", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto },
  { no: 8, name: "expand_patterns", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "max_results", kind: "scalar", T: 5, opt: true },
  { no: 10, name: "max_file_size", kind: "scalar", T: 5, opt: true },
  { no: 11, name: "disregard_ignore_files", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "disregard_global_ignore_files", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "disregard_parent_ignore_files", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "disregard_exclude_settings", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "disregard_search_exclude_settings", kind: "scalar", T: 8, opt: true },
  { no: 16, name: "ignore_symlinks", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "only_open_editors", kind: "scalar", T: 8, opt: true },
  { no: 18, name: "only_file_scheme", kind: "scalar", T: 8, opt: true },
  { no: 19, name: "reason", kind: "scalar", T: 9, opt: true },
  { no: 20, name: "extra_file_resources", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto> {
  declare extraFileResources: string[];
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>) {
    super();
    this.extraFileResources = [];
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExtraFileResourcesProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "extra_file_resources", kind: "scalar", T: 9, repeated: true }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto> {
  declare excludePattern: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto[];
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>) {
    super();
    this.excludePattern = [];
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ExcludePatternProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "exclude_pattern", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto, repeated: true }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto> {
  declare uri?: string;
  declare pattern?: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto;
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPatternBuilderProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uri", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "pattern", kind: "message", T: RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto> {
  declare pattern?: string;
  declare patterns: string[];
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>) {
    super();
    this.patterns = [];
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ISearchPathPatternBuilderProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pattern", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "patterns", kind: "scalar", T: 9, repeated: true }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto> {
  declare matchLines: number;
  declare charsPerLine: number;
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>) {
    super();
    this.matchLines = 0;
    this.charsPerLine = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.ITextSearchPreviewOptionsProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "match_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "chars_per_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto$Runtime = (() => class _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto extends Message<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto> {
  declare includeMarkupInput: boolean;
  declare includeMarkupPreview: boolean;
  declare includeCodeInput: boolean;
  declare includeOutput: boolean;
  constructor(data?: PartialMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>) {
    super();
    this.includeMarkupInput = false;
    this.includeMarkupPreview = false;
    this.includeCodeInput = false;
    this.includeOutput = false;
    proto3.util.initPartial(data, this as _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto {
    return new _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto> | undefined | null, b2: _RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto | PlainMessage<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto as unknown as MessageType<_RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>, a, b2);
  }
})();
export type RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto = InstanceType<typeof RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto$Runtime>;
var RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto: MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto> = RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto$Runtime as unknown as MessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>).runtime = proto3;
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>).typeName = "aiserver.v1.RipgrepSearchParams.ITextQueryBuilderOptionsProto.INotebookSearchConfigProto";
(RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto as MutableMessageType<RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "include_markup_input",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "include_markup_preview",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "include_code_input",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "include_output",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RipgrepSearchResult$Runtime = (() => class _RipgrepSearchResult extends Message<_RipgrepSearchResult> {
  declare internal?: RipgrepSearchResultInternal;
  constructor(data?: PartialMessage<_RipgrepSearchResult>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResult {
    return new _RipgrepSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResult {
    return new _RipgrepSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResult {
    return new _RipgrepSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResult | PlainMessage<_RipgrepSearchResult> | undefined | null, b2: _RipgrepSearchResult | PlainMessage<_RipgrepSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResult as unknown as MessageType<_RipgrepSearchResult>, a, b2);
  }
})();
export type RipgrepSearchResult = InstanceType<typeof RipgrepSearchResult$Runtime>;
var RipgrepSearchResult: MessageType<RipgrepSearchResult> = RipgrepSearchResult$Runtime as unknown as MessageType<RipgrepSearchResult>;
(RipgrepSearchResult as MutableMessageType<RipgrepSearchResult>).runtime = proto3;
(RipgrepSearchResult as MutableMessageType<RipgrepSearchResult>).typeName = "aiserver.v1.RipgrepSearchResult";
(RipgrepSearchResult as MutableMessageType<RipgrepSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "internal", kind: "message", T: RipgrepSearchResultInternal }
]);
var RipgrepSearchResultInternal$Runtime = (() => class _RipgrepSearchResultInternal extends Message<_RipgrepSearchResultInternal> {
  declare results: RipgrepSearchResultInternal_IFileMatch[];
  declare exit?: RipgrepSearchResultInternal_SearchCompletionExitCode;
  declare limitHit?: boolean;
  declare messages: RipgrepSearchResultInternal_ITextSearchCompleteMessage[];
  declare stats: { case: "fileSearchStats"; value: RipgrepSearchResultInternal_IFileSearchStats } | { case: "textSearchStats"; value: RipgrepSearchResultInternal_ITextSearchStats } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal>) {
    super();
    this.results = [];
    this.messages = [];
    this.stats = { case: void 0 };
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal {
    return new _RipgrepSearchResultInternal().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal {
    return new _RipgrepSearchResultInternal().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal {
    return new _RipgrepSearchResultInternal().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal | PlainMessage<_RipgrepSearchResultInternal> | undefined | null, b2: _RipgrepSearchResultInternal | PlainMessage<_RipgrepSearchResultInternal> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal as unknown as MessageType<_RipgrepSearchResultInternal>, a, b2);
  }
})();
export type RipgrepSearchResultInternal = InstanceType<typeof RipgrepSearchResultInternal$Runtime>;
var RipgrepSearchResultInternal: MessageType<RipgrepSearchResultInternal> = RipgrepSearchResultInternal$Runtime as unknown as MessageType<RipgrepSearchResultInternal>;
(RipgrepSearchResultInternal as MutableMessageType<RipgrepSearchResultInternal>).runtime = proto3;
(RipgrepSearchResultInternal as MutableMessageType<RipgrepSearchResultInternal>).typeName = "aiserver.v1.RipgrepSearchResultInternal";
(RipgrepSearchResultInternal as MutableMessageType<RipgrepSearchResultInternal>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: RipgrepSearchResultInternal_IFileMatch, repeated: true },
  { no: 2, name: "exit", kind: "enum", T: proto3.getEnumType(RipgrepSearchResultInternal_SearchCompletionExitCode), opt: true },
  { no: 3, name: "limit_hit", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "messages", kind: "message", T: RipgrepSearchResultInternal_ITextSearchCompleteMessage, repeated: true },
  { no: 5, name: "file_search_stats", kind: "message", T: RipgrepSearchResultInternal_IFileSearchStats, oneof: "stats" },
  { no: 6, name: "text_search_stats", kind: "message", T: RipgrepSearchResultInternal_ITextSearchStats, oneof: "stats" }
]);
(function(RipgrepSearchResultInternal_TextSearchCompleteMessageType2) {
  RipgrepSearchResultInternal_TextSearchCompleteMessageType2[RipgrepSearchResultInternal_TextSearchCompleteMessageType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RipgrepSearchResultInternal_TextSearchCompleteMessageType2[RipgrepSearchResultInternal_TextSearchCompleteMessageType2["INFORMATION"] = 1] = "INFORMATION";
  RipgrepSearchResultInternal_TextSearchCompleteMessageType2[RipgrepSearchResultInternal_TextSearchCompleteMessageType2["WARNING"] = 2] = "WARNING";
})(RipgrepSearchResultInternal_TextSearchCompleteMessageType! || (RipgrepSearchResultInternal_TextSearchCompleteMessageType = {} as typeof RipgrepSearchResultInternal_TextSearchCompleteMessageType));
proto3.util.setEnumType(RipgrepSearchResultInternal_TextSearchCompleteMessageType, "aiserver.v1.RipgrepSearchResultInternal.TextSearchCompleteMessageType", [
  { no: 0, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_UNSPECIFIED" },
  { no: 1, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_INFORMATION" },
  { no: 2, name: "TEXT_SEARCH_COMPLETE_MESSAGE_TYPE_WARNING" }
]);
(function(RipgrepSearchResultInternal_SearchCompletionExitCode2) {
  RipgrepSearchResultInternal_SearchCompletionExitCode2[RipgrepSearchResultInternal_SearchCompletionExitCode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RipgrepSearchResultInternal_SearchCompletionExitCode2[RipgrepSearchResultInternal_SearchCompletionExitCode2["NORMAL"] = 1] = "NORMAL";
  RipgrepSearchResultInternal_SearchCompletionExitCode2[RipgrepSearchResultInternal_SearchCompletionExitCode2["NEW_SEARCH_STARTED"] = 2] = "NEW_SEARCH_STARTED";
})(RipgrepSearchResultInternal_SearchCompletionExitCode! || (RipgrepSearchResultInternal_SearchCompletionExitCode = {} as typeof RipgrepSearchResultInternal_SearchCompletionExitCode));
proto3.util.setEnumType(RipgrepSearchResultInternal_SearchCompletionExitCode, "aiserver.v1.RipgrepSearchResultInternal.SearchCompletionExitCode", [
  { no: 0, name: "SEARCH_COMPLETION_EXIT_CODE_UNSPECIFIED" },
  { no: 1, name: "SEARCH_COMPLETION_EXIT_CODE_NORMAL" },
  { no: 2, name: "SEARCH_COMPLETION_EXIT_CODE_NEW_SEARCH_STARTED" }
]);
var RipgrepSearchResultInternal_IFileMatch$Runtime = (() => class _RipgrepSearchResultInternal_IFileMatch extends Message<_RipgrepSearchResultInternal_IFileMatch> {
  declare resource: string;
  declare results: RipgrepSearchResultInternal_ITextSearchResult[];
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_IFileMatch>) {
    super();
    this.resource = "";
    this.results = [];
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_IFileMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_IFileMatch {
    return new _RipgrepSearchResultInternal_IFileMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileMatch {
    return new _RipgrepSearchResultInternal_IFileMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileMatch {
    return new _RipgrepSearchResultInternal_IFileMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_IFileMatch | PlainMessage<_RipgrepSearchResultInternal_IFileMatch> | undefined | null, b2: _RipgrepSearchResultInternal_IFileMatch | PlainMessage<_RipgrepSearchResultInternal_IFileMatch> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_IFileMatch as unknown as MessageType<_RipgrepSearchResultInternal_IFileMatch>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_IFileMatch = InstanceType<typeof RipgrepSearchResultInternal_IFileMatch$Runtime>;
var RipgrepSearchResultInternal_IFileMatch: MessageType<RipgrepSearchResultInternal_IFileMatch> = RipgrepSearchResultInternal_IFileMatch$Runtime as unknown as MessageType<RipgrepSearchResultInternal_IFileMatch>;
(RipgrepSearchResultInternal_IFileMatch as MutableMessageType<RipgrepSearchResultInternal_IFileMatch>).runtime = proto3;
(RipgrepSearchResultInternal_IFileMatch as MutableMessageType<RipgrepSearchResultInternal_IFileMatch>).typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileMatch";
(RipgrepSearchResultInternal_IFileMatch as MutableMessageType<RipgrepSearchResultInternal_IFileMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "resource",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "results", kind: "message", T: RipgrepSearchResultInternal_ITextSearchResult, repeated: true }
]);
var RipgrepSearchResultInternal_ITextSearchResult$Runtime = (() => class _RipgrepSearchResultInternal_ITextSearchResult extends Message<_RipgrepSearchResultInternal_ITextSearchResult> {
  declare result: { case: "match"; value: RipgrepSearchResultInternal_ITextSearchMatch } | { case: "context"; value: RipgrepSearchResultInternal_ITextSearchContext } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ITextSearchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ITextSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ITextSearchResult {
    return new _RipgrepSearchResultInternal_ITextSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchResult {
    return new _RipgrepSearchResultInternal_ITextSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchResult {
    return new _RipgrepSearchResultInternal_ITextSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ITextSearchResult | PlainMessage<_RipgrepSearchResultInternal_ITextSearchResult> | undefined | null, b2: _RipgrepSearchResultInternal_ITextSearchResult | PlainMessage<_RipgrepSearchResultInternal_ITextSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ITextSearchResult as unknown as MessageType<_RipgrepSearchResultInternal_ITextSearchResult>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ITextSearchResult = InstanceType<typeof RipgrepSearchResultInternal_ITextSearchResult$Runtime>;
var RipgrepSearchResultInternal_ITextSearchResult: MessageType<RipgrepSearchResultInternal_ITextSearchResult> = RipgrepSearchResultInternal_ITextSearchResult$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ITextSearchResult>;
(RipgrepSearchResultInternal_ITextSearchResult as MutableMessageType<RipgrepSearchResultInternal_ITextSearchResult>).runtime = proto3;
(RipgrepSearchResultInternal_ITextSearchResult as MutableMessageType<RipgrepSearchResultInternal_ITextSearchResult>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchResult";
(RipgrepSearchResultInternal_ITextSearchResult as MutableMessageType<RipgrepSearchResultInternal_ITextSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "match", kind: "message", T: RipgrepSearchResultInternal_ITextSearchMatch, oneof: "result" },
  { no: 2, name: "context", kind: "message", T: RipgrepSearchResultInternal_ITextSearchContext, oneof: "result" }
]);
var RipgrepSearchResultInternal_ITextSearchMatch$Runtime = (() => class _RipgrepSearchResultInternal_ITextSearchMatch extends Message<_RipgrepSearchResultInternal_ITextSearchMatch> {
  declare uri?: string;
  declare rangeLocations: RipgrepSearchResultInternal_ISearchRangeSetPairing[];
  declare previewText: string;
  declare webviewIndex?: number;
  declare cellFragment?: string;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ITextSearchMatch>) {
    super();
    this.rangeLocations = [];
    this.previewText = "";
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ITextSearchMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ITextSearchMatch {
    return new _RipgrepSearchResultInternal_ITextSearchMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchMatch {
    return new _RipgrepSearchResultInternal_ITextSearchMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchMatch {
    return new _RipgrepSearchResultInternal_ITextSearchMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ITextSearchMatch | PlainMessage<_RipgrepSearchResultInternal_ITextSearchMatch> | undefined | null, b2: _RipgrepSearchResultInternal_ITextSearchMatch | PlainMessage<_RipgrepSearchResultInternal_ITextSearchMatch> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ITextSearchMatch as unknown as MessageType<_RipgrepSearchResultInternal_ITextSearchMatch>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ITextSearchMatch = InstanceType<typeof RipgrepSearchResultInternal_ITextSearchMatch$Runtime>;
var RipgrepSearchResultInternal_ITextSearchMatch: MessageType<RipgrepSearchResultInternal_ITextSearchMatch> = RipgrepSearchResultInternal_ITextSearchMatch$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ITextSearchMatch>;
(RipgrepSearchResultInternal_ITextSearchMatch as MutableMessageType<RipgrepSearchResultInternal_ITextSearchMatch>).runtime = proto3;
(RipgrepSearchResultInternal_ITextSearchMatch as MutableMessageType<RipgrepSearchResultInternal_ITextSearchMatch>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchMatch";
(RipgrepSearchResultInternal_ITextSearchMatch as MutableMessageType<RipgrepSearchResultInternal_ITextSearchMatch>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uri", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "range_locations", kind: "message", T: RipgrepSearchResultInternal_ISearchRangeSetPairing, repeated: true },
  {
    no: 3,
    name: "preview_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "webview_index", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "cell_fragment", kind: "scalar", T: 9, opt: true }
]);
var RipgrepSearchResultInternal_ITextSearchContext$Runtime = (() => class _RipgrepSearchResultInternal_ITextSearchContext extends Message<_RipgrepSearchResultInternal_ITextSearchContext> {
  declare uri?: string;
  declare text: string;
  declare lineNumber: number;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ITextSearchContext>) {
    super();
    this.text = "";
    this.lineNumber = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ITextSearchContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ITextSearchContext {
    return new _RipgrepSearchResultInternal_ITextSearchContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchContext {
    return new _RipgrepSearchResultInternal_ITextSearchContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchContext {
    return new _RipgrepSearchResultInternal_ITextSearchContext().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ITextSearchContext | PlainMessage<_RipgrepSearchResultInternal_ITextSearchContext> | undefined | null, b2: _RipgrepSearchResultInternal_ITextSearchContext | PlainMessage<_RipgrepSearchResultInternal_ITextSearchContext> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ITextSearchContext as unknown as MessageType<_RipgrepSearchResultInternal_ITextSearchContext>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ITextSearchContext = InstanceType<typeof RipgrepSearchResultInternal_ITextSearchContext$Runtime>;
var RipgrepSearchResultInternal_ITextSearchContext: MessageType<RipgrepSearchResultInternal_ITextSearchContext> = RipgrepSearchResultInternal_ITextSearchContext$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ITextSearchContext>;
(RipgrepSearchResultInternal_ITextSearchContext as MutableMessageType<RipgrepSearchResultInternal_ITextSearchContext>).runtime = proto3;
(RipgrepSearchResultInternal_ITextSearchContext as MutableMessageType<RipgrepSearchResultInternal_ITextSearchContext>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchContext";
(RipgrepSearchResultInternal_ITextSearchContext as MutableMessageType<RipgrepSearchResultInternal_ITextSearchContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "uri", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RipgrepSearchResultInternal_ISearchRangeSetPairing$Runtime = (() => class _RipgrepSearchResultInternal_ISearchRangeSetPairing extends Message<_RipgrepSearchResultInternal_ISearchRangeSetPairing> {
  declare source?: RipgrepSearchResultInternal_ISearchRange;
  declare preview?: RipgrepSearchResultInternal_ISearchRange;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ISearchRangeSetPairing>) {
    super();
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ISearchRangeSetPairing);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ISearchRangeSetPairing {
    return new _RipgrepSearchResultInternal_ISearchRangeSetPairing().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchRangeSetPairing {
    return new _RipgrepSearchResultInternal_ISearchRangeSetPairing().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchRangeSetPairing {
    return new _RipgrepSearchResultInternal_ISearchRangeSetPairing().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ISearchRangeSetPairing | PlainMessage<_RipgrepSearchResultInternal_ISearchRangeSetPairing> | undefined | null, b2: _RipgrepSearchResultInternal_ISearchRangeSetPairing | PlainMessage<_RipgrepSearchResultInternal_ISearchRangeSetPairing> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ISearchRangeSetPairing as unknown as MessageType<_RipgrepSearchResultInternal_ISearchRangeSetPairing>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ISearchRangeSetPairing = InstanceType<typeof RipgrepSearchResultInternal_ISearchRangeSetPairing$Runtime>;
var RipgrepSearchResultInternal_ISearchRangeSetPairing: MessageType<RipgrepSearchResultInternal_ISearchRangeSetPairing> = RipgrepSearchResultInternal_ISearchRangeSetPairing$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ISearchRangeSetPairing>;
(RipgrepSearchResultInternal_ISearchRangeSetPairing as MutableMessageType<RipgrepSearchResultInternal_ISearchRangeSetPairing>).runtime = proto3;
(RipgrepSearchResultInternal_ISearchRangeSetPairing as MutableMessageType<RipgrepSearchResultInternal_ISearchRangeSetPairing>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchRangeSetPairing";
(RipgrepSearchResultInternal_ISearchRangeSetPairing as MutableMessageType<RipgrepSearchResultInternal_ISearchRangeSetPairing>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: RipgrepSearchResultInternal_ISearchRange },
  { no: 2, name: "preview", kind: "message", T: RipgrepSearchResultInternal_ISearchRange }
]);
var RipgrepSearchResultInternal_ISearchRange$Runtime = (() => class _RipgrepSearchResultInternal_ISearchRange extends Message<_RipgrepSearchResultInternal_ISearchRange> {
  declare startLineNumber: number;
  declare startColumn: number;
  declare endLineNumber: number;
  declare endColumn: number;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ISearchRange>) {
    super();
    this.startLineNumber = 0;
    this.startColumn = 0;
    this.endLineNumber = 0;
    this.endColumn = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ISearchRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ISearchRange {
    return new _RipgrepSearchResultInternal_ISearchRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchRange {
    return new _RipgrepSearchResultInternal_ISearchRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchRange {
    return new _RipgrepSearchResultInternal_ISearchRange().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ISearchRange | PlainMessage<_RipgrepSearchResultInternal_ISearchRange> | undefined | null, b2: _RipgrepSearchResultInternal_ISearchRange | PlainMessage<_RipgrepSearchResultInternal_ISearchRange> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ISearchRange as unknown as MessageType<_RipgrepSearchResultInternal_ISearchRange>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ISearchRange = InstanceType<typeof RipgrepSearchResultInternal_ISearchRange$Runtime>;
var RipgrepSearchResultInternal_ISearchRange: MessageType<RipgrepSearchResultInternal_ISearchRange> = RipgrepSearchResultInternal_ISearchRange$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ISearchRange>;
(RipgrepSearchResultInternal_ISearchRange as MutableMessageType<RipgrepSearchResultInternal_ISearchRange>).runtime = proto3;
(RipgrepSearchResultInternal_ISearchRange as MutableMessageType<RipgrepSearchResultInternal_ISearchRange>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchRange";
(RipgrepSearchResultInternal_ISearchRange as MutableMessageType<RipgrepSearchResultInternal_ISearchRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_column",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RipgrepSearchResultInternal_ITextSearchCompleteMessage$Runtime = (() => class _RipgrepSearchResultInternal_ITextSearchCompleteMessage extends Message<_RipgrepSearchResultInternal_ITextSearchCompleteMessage> {
  declare text: string;
  declare type: RipgrepSearchResultInternal_TextSearchCompleteMessageType;
  declare trusted?: boolean;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ITextSearchCompleteMessage>) {
    super();
    this.text = "";
    this.type = RipgrepSearchResultInternal_TextSearchCompleteMessageType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ITextSearchCompleteMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ITextSearchCompleteMessage {
    return new _RipgrepSearchResultInternal_ITextSearchCompleteMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchCompleteMessage {
    return new _RipgrepSearchResultInternal_ITextSearchCompleteMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchCompleteMessage {
    return new _RipgrepSearchResultInternal_ITextSearchCompleteMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ITextSearchCompleteMessage | PlainMessage<_RipgrepSearchResultInternal_ITextSearchCompleteMessage> | undefined | null, b2: _RipgrepSearchResultInternal_ITextSearchCompleteMessage | PlainMessage<_RipgrepSearchResultInternal_ITextSearchCompleteMessage> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ITextSearchCompleteMessage as unknown as MessageType<_RipgrepSearchResultInternal_ITextSearchCompleteMessage>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ITextSearchCompleteMessage = InstanceType<typeof RipgrepSearchResultInternal_ITextSearchCompleteMessage$Runtime>;
var RipgrepSearchResultInternal_ITextSearchCompleteMessage: MessageType<RipgrepSearchResultInternal_ITextSearchCompleteMessage> = RipgrepSearchResultInternal_ITextSearchCompleteMessage$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ITextSearchCompleteMessage>;
(RipgrepSearchResultInternal_ITextSearchCompleteMessage as MutableMessageType<RipgrepSearchResultInternal_ITextSearchCompleteMessage>).runtime = proto3;
(RipgrepSearchResultInternal_ITextSearchCompleteMessage as MutableMessageType<RipgrepSearchResultInternal_ITextSearchCompleteMessage>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchCompleteMessage";
(RipgrepSearchResultInternal_ITextSearchCompleteMessage as MutableMessageType<RipgrepSearchResultInternal_ITextSearchCompleteMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(RipgrepSearchResultInternal_TextSearchCompleteMessageType) },
  { no: 3, name: "trusted", kind: "scalar", T: 8, opt: true }
]);
var RipgrepSearchResultInternal_IFileSearchStats$Runtime = (() => class _RipgrepSearchResultInternal_IFileSearchStats extends Message<_RipgrepSearchResultInternal_IFileSearchStats> {
  declare fromCache: boolean;
  declare resultCount: number;
  declare type: RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType;
  declare sortingTime?: number;
  declare detailStats: { case: "searchEngineStats"; value: RipgrepSearchResultInternal_ISearchEngineStats } | { case: "cachedSearchStats"; value: RipgrepSearchResultInternal_ICachedSearchStats } | { case: "fileSearchProviderStats"; value: RipgrepSearchResultInternal_IFileSearchProviderStats } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_IFileSearchStats>) {
    super();
    this.fromCache = false;
    this.detailStats = { case: void 0 };
    this.resultCount = 0;
    this.type = RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_IFileSearchStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_IFileSearchStats {
    return new _RipgrepSearchResultInternal_IFileSearchStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileSearchStats {
    return new _RipgrepSearchResultInternal_IFileSearchStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileSearchStats {
    return new _RipgrepSearchResultInternal_IFileSearchStats().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_IFileSearchStats | PlainMessage<_RipgrepSearchResultInternal_IFileSearchStats> | undefined | null, b2: _RipgrepSearchResultInternal_IFileSearchStats | PlainMessage<_RipgrepSearchResultInternal_IFileSearchStats> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_IFileSearchStats as unknown as MessageType<_RipgrepSearchResultInternal_IFileSearchStats>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_IFileSearchStats = InstanceType<typeof RipgrepSearchResultInternal_IFileSearchStats$Runtime>;
var RipgrepSearchResultInternal_IFileSearchStats: MessageType<RipgrepSearchResultInternal_IFileSearchStats> = RipgrepSearchResultInternal_IFileSearchStats$Runtime as unknown as MessageType<RipgrepSearchResultInternal_IFileSearchStats>;
(RipgrepSearchResultInternal_IFileSearchStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchStats>).runtime = proto3;
(RipgrepSearchResultInternal_IFileSearchStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchStats>).typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats";
(RipgrepSearchResultInternal_IFileSearchStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchStats>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "from_cache",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "search_engine_stats", kind: "message", T: RipgrepSearchResultInternal_ISearchEngineStats, oneof: "detail_stats" },
  { no: 3, name: "cached_search_stats", kind: "message", T: RipgrepSearchResultInternal_ICachedSearchStats, oneof: "detail_stats" },
  { no: 4, name: "file_search_provider_stats", kind: "message", T: RipgrepSearchResultInternal_IFileSearchProviderStats, oneof: "detail_stats" },
  {
    no: 5,
    name: "result_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "type", kind: "enum", T: proto3.getEnumType(RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType) },
  { no: 7, name: "sorting_time", kind: "scalar", T: 5, opt: true }
]);
(function(RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2) {
  RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2[RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2[RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2["FILE_SEARCH_PROVIDER"] = 1] = "FILE_SEARCH_PROVIDER";
  RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2[RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType2["SEARCH_PROCESS"] = 2] = "SEARCH_PROCESS";
})(RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType! || (RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType = {} as typeof RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType));
proto3.util.setEnumType(RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType, "aiserver.v1.RipgrepSearchResultInternal.IFileSearchStats.FileSearchProviderType", [
  { no: 0, name: "FILE_SEARCH_PROVIDER_TYPE_UNSPECIFIED" },
  { no: 1, name: "FILE_SEARCH_PROVIDER_TYPE_FILE_SEARCH_PROVIDER" },
  { no: 2, name: "FILE_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS" }
]);
var RipgrepSearchResultInternal_ITextSearchStats$Runtime = (() => class _RipgrepSearchResultInternal_ITextSearchStats extends Message<_RipgrepSearchResultInternal_ITextSearchStats> {
  declare type: RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ITextSearchStats>) {
    super();
    this.type = RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ITextSearchStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ITextSearchStats {
    return new _RipgrepSearchResultInternal_ITextSearchStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchStats {
    return new _RipgrepSearchResultInternal_ITextSearchStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ITextSearchStats {
    return new _RipgrepSearchResultInternal_ITextSearchStats().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ITextSearchStats | PlainMessage<_RipgrepSearchResultInternal_ITextSearchStats> | undefined | null, b2: _RipgrepSearchResultInternal_ITextSearchStats | PlainMessage<_RipgrepSearchResultInternal_ITextSearchStats> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ITextSearchStats as unknown as MessageType<_RipgrepSearchResultInternal_ITextSearchStats>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ITextSearchStats = InstanceType<typeof RipgrepSearchResultInternal_ITextSearchStats$Runtime>;
var RipgrepSearchResultInternal_ITextSearchStats: MessageType<RipgrepSearchResultInternal_ITextSearchStats> = RipgrepSearchResultInternal_ITextSearchStats$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ITextSearchStats>;
(RipgrepSearchResultInternal_ITextSearchStats as MutableMessageType<RipgrepSearchResultInternal_ITextSearchStats>).runtime = proto3;
(RipgrepSearchResultInternal_ITextSearchStats as MutableMessageType<RipgrepSearchResultInternal_ITextSearchStats>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats";
(RipgrepSearchResultInternal_ITextSearchStats as MutableMessageType<RipgrepSearchResultInternal_ITextSearchStats>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType) }
]);
(function(RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2) {
  RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2[RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2[RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2["TEXT_SEARCH_PROVIDER"] = 1] = "TEXT_SEARCH_PROVIDER";
  RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2[RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2["SEARCH_PROCESS"] = 2] = "SEARCH_PROCESS";
  RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2[RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType2["AI_TEXT_SEARCH_PROVIDER"] = 3] = "AI_TEXT_SEARCH_PROVIDER";
})(RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType! || (RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType = {} as typeof RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType));
proto3.util.setEnumType(RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType, "aiserver.v1.RipgrepSearchResultInternal.ITextSearchStats.TextSearchProviderType", [
  { no: 0, name: "TEXT_SEARCH_PROVIDER_TYPE_UNSPECIFIED" },
  { no: 1, name: "TEXT_SEARCH_PROVIDER_TYPE_TEXT_SEARCH_PROVIDER" },
  { no: 2, name: "TEXT_SEARCH_PROVIDER_TYPE_SEARCH_PROCESS" },
  { no: 3, name: "TEXT_SEARCH_PROVIDER_TYPE_AI_TEXT_SEARCH_PROVIDER" }
]);
var RipgrepSearchResultInternal_ISearchEngineStats$Runtime = (() => class _RipgrepSearchResultInternal_ISearchEngineStats extends Message<_RipgrepSearchResultInternal_ISearchEngineStats> {
  declare fileWalkTime: number;
  declare directoriesWalked: number;
  declare filesWalked: number;
  declare cmdTime: number;
  declare cmdResultCount?: number;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ISearchEngineStats>) {
    super();
    this.fileWalkTime = 0;
    this.directoriesWalked = 0;
    this.filesWalked = 0;
    this.cmdTime = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ISearchEngineStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ISearchEngineStats {
    return new _RipgrepSearchResultInternal_ISearchEngineStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchEngineStats {
    return new _RipgrepSearchResultInternal_ISearchEngineStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ISearchEngineStats {
    return new _RipgrepSearchResultInternal_ISearchEngineStats().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ISearchEngineStats | PlainMessage<_RipgrepSearchResultInternal_ISearchEngineStats> | undefined | null, b2: _RipgrepSearchResultInternal_ISearchEngineStats | PlainMessage<_RipgrepSearchResultInternal_ISearchEngineStats> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ISearchEngineStats as unknown as MessageType<_RipgrepSearchResultInternal_ISearchEngineStats>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ISearchEngineStats = InstanceType<typeof RipgrepSearchResultInternal_ISearchEngineStats$Runtime>;
var RipgrepSearchResultInternal_ISearchEngineStats: MessageType<RipgrepSearchResultInternal_ISearchEngineStats> = RipgrepSearchResultInternal_ISearchEngineStats$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ISearchEngineStats>;
(RipgrepSearchResultInternal_ISearchEngineStats as MutableMessageType<RipgrepSearchResultInternal_ISearchEngineStats>).runtime = proto3;
(RipgrepSearchResultInternal_ISearchEngineStats as MutableMessageType<RipgrepSearchResultInternal_ISearchEngineStats>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ISearchEngineStats";
(RipgrepSearchResultInternal_ISearchEngineStats as MutableMessageType<RipgrepSearchResultInternal_ISearchEngineStats>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_walk_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "directories_walked",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "files_walked",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "cmd_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "cmd_result_count", kind: "scalar", T: 5, opt: true }
]);
var RipgrepSearchResultInternal_ICachedSearchStats$Runtime = (() => class _RipgrepSearchResultInternal_ICachedSearchStats extends Message<_RipgrepSearchResultInternal_ICachedSearchStats> {
  declare cacheWasResolved: boolean;
  declare cacheLookupTime: number;
  declare cacheFilterTime: number;
  declare cacheEntryCount: number;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_ICachedSearchStats>) {
    super();
    this.cacheWasResolved = false;
    this.cacheLookupTime = 0;
    this.cacheFilterTime = 0;
    this.cacheEntryCount = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_ICachedSearchStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_ICachedSearchStats {
    return new _RipgrepSearchResultInternal_ICachedSearchStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ICachedSearchStats {
    return new _RipgrepSearchResultInternal_ICachedSearchStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_ICachedSearchStats {
    return new _RipgrepSearchResultInternal_ICachedSearchStats().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_ICachedSearchStats | PlainMessage<_RipgrepSearchResultInternal_ICachedSearchStats> | undefined | null, b2: _RipgrepSearchResultInternal_ICachedSearchStats | PlainMessage<_RipgrepSearchResultInternal_ICachedSearchStats> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_ICachedSearchStats as unknown as MessageType<_RipgrepSearchResultInternal_ICachedSearchStats>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_ICachedSearchStats = InstanceType<typeof RipgrepSearchResultInternal_ICachedSearchStats$Runtime>;
var RipgrepSearchResultInternal_ICachedSearchStats: MessageType<RipgrepSearchResultInternal_ICachedSearchStats> = RipgrepSearchResultInternal_ICachedSearchStats$Runtime as unknown as MessageType<RipgrepSearchResultInternal_ICachedSearchStats>;
(RipgrepSearchResultInternal_ICachedSearchStats as MutableMessageType<RipgrepSearchResultInternal_ICachedSearchStats>).runtime = proto3;
(RipgrepSearchResultInternal_ICachedSearchStats as MutableMessageType<RipgrepSearchResultInternal_ICachedSearchStats>).typeName = "aiserver.v1.RipgrepSearchResultInternal.ICachedSearchStats";
(RipgrepSearchResultInternal_ICachedSearchStats as MutableMessageType<RipgrepSearchResultInternal_ICachedSearchStats>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cache_was_resolved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "cache_lookup_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "cache_filter_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "cache_entry_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RipgrepSearchResultInternal_IFileSearchProviderStats$Runtime = (() => class _RipgrepSearchResultInternal_IFileSearchProviderStats extends Message<_RipgrepSearchResultInternal_IFileSearchProviderStats> {
  declare providerTime: number;
  declare postProcessTime: number;
  constructor(data?: PartialMessage<_RipgrepSearchResultInternal_IFileSearchProviderStats>) {
    super();
    this.providerTime = 0;
    this.postProcessTime = 0;
    proto3.util.initPartial(data, this as _RipgrepSearchResultInternal_IFileSearchProviderStats);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchResultInternal_IFileSearchProviderStats {
    return new _RipgrepSearchResultInternal_IFileSearchProviderStats().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileSearchProviderStats {
    return new _RipgrepSearchResultInternal_IFileSearchProviderStats().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchResultInternal_IFileSearchProviderStats {
    return new _RipgrepSearchResultInternal_IFileSearchProviderStats().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchResultInternal_IFileSearchProviderStats | PlainMessage<_RipgrepSearchResultInternal_IFileSearchProviderStats> | undefined | null, b2: _RipgrepSearchResultInternal_IFileSearchProviderStats | PlainMessage<_RipgrepSearchResultInternal_IFileSearchProviderStats> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchResultInternal_IFileSearchProviderStats as unknown as MessageType<_RipgrepSearchResultInternal_IFileSearchProviderStats>, a, b2);
  }
})();
export type RipgrepSearchResultInternal_IFileSearchProviderStats = InstanceType<typeof RipgrepSearchResultInternal_IFileSearchProviderStats$Runtime>;
var RipgrepSearchResultInternal_IFileSearchProviderStats: MessageType<RipgrepSearchResultInternal_IFileSearchProviderStats> = RipgrepSearchResultInternal_IFileSearchProviderStats$Runtime as unknown as MessageType<RipgrepSearchResultInternal_IFileSearchProviderStats>;
(RipgrepSearchResultInternal_IFileSearchProviderStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchProviderStats>).runtime = proto3;
(RipgrepSearchResultInternal_IFileSearchProviderStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchProviderStats>).typeName = "aiserver.v1.RipgrepSearchResultInternal.IFileSearchProviderStats";
(RipgrepSearchResultInternal_IFileSearchProviderStats as MutableMessageType<RipgrepSearchResultInternal_IFileSearchProviderStats>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "provider_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "post_process_time",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var RipgrepSearchStream$Runtime = (() => class _RipgrepSearchStream extends Message<_RipgrepSearchStream> {
  declare query: string;
  constructor(data?: PartialMessage<_RipgrepSearchStream>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _RipgrepSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepSearchStream {
    return new _RipgrepSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepSearchStream {
    return new _RipgrepSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepSearchStream {
    return new _RipgrepSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepSearchStream | PlainMessage<_RipgrepSearchStream> | undefined | null, b2: _RipgrepSearchStream | PlainMessage<_RipgrepSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepSearchStream as unknown as MessageType<_RipgrepSearchStream>, a, b2);
  }
})();
export type RipgrepSearchStream = InstanceType<typeof RipgrepSearchStream$Runtime>;
var RipgrepSearchStream: MessageType<RipgrepSearchStream> = RipgrepSearchStream$Runtime as unknown as MessageType<RipgrepSearchStream>;
(RipgrepSearchStream as MutableMessageType<RipgrepSearchStream>).runtime = proto3;
(RipgrepSearchStream as MutableMessageType<RipgrepSearchStream>).typeName = "aiserver.v1.RipgrepSearchStream";
(RipgrepSearchStream as MutableMessageType<RipgrepSearchStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadSemsearchFilesParams$Runtime = (() => class _ReadSemsearchFilesParams extends Message<_ReadSemsearchFilesParams> {
  declare repositoryInfo?: RepositoryInfo;
  declare codeResults: CodeResult[];
  declare query: string;
  declare prReferences: PullRequestReference[];
  declare prSearchOn?: boolean;
  constructor(data?: PartialMessage<_ReadSemsearchFilesParams>) {
    super();
    this.codeResults = [];
    this.query = "";
    this.prReferences = [];
    proto3.util.initPartial(data, this as _ReadSemsearchFilesParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadSemsearchFilesParams {
    return new _ReadSemsearchFilesParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesParams {
    return new _ReadSemsearchFilesParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesParams {
    return new _ReadSemsearchFilesParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadSemsearchFilesParams | PlainMessage<_ReadSemsearchFilesParams> | undefined | null, b2: _ReadSemsearchFilesParams | PlainMessage<_ReadSemsearchFilesParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadSemsearchFilesParams as unknown as MessageType<_ReadSemsearchFilesParams>, a, b2);
  }
})();
export type ReadSemsearchFilesParams = InstanceType<typeof ReadSemsearchFilesParams$Runtime>;
var ReadSemsearchFilesParams: MessageType<ReadSemsearchFilesParams> = ReadSemsearchFilesParams$Runtime as unknown as MessageType<ReadSemsearchFilesParams>;
(ReadSemsearchFilesParams as MutableMessageType<ReadSemsearchFilesParams>).runtime = proto3;
(ReadSemsearchFilesParams as MutableMessageType<ReadSemsearchFilesParams>).typeName = "aiserver.v1.ReadSemsearchFilesParams";
(ReadSemsearchFilesParams as MutableMessageType<ReadSemsearchFilesParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository_info", kind: "message", T: RepositoryInfo },
  { no: 2, name: "code_results", kind: "message", T: CodeResult, repeated: true },
  {
    no: 3,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "pr_references", kind: "message", T: PullRequestReference, repeated: true },
  { no: 5, name: "pr_search_on", kind: "scalar", T: 8, opt: true }
]);
var MissingFile$Runtime = (() => class _MissingFile extends Message<_MissingFile> {
  declare relativeWorkspacePath: string;
  declare missingReason: MissingFile_MissingReason;
  declare numLines?: number;
  constructor(data?: PartialMessage<_MissingFile>) {
    super();
    this.relativeWorkspacePath = "";
    this.missingReason = MissingFile_MissingReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _MissingFile);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MissingFile {
    return new _MissingFile().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MissingFile {
    return new _MissingFile().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MissingFile {
    return new _MissingFile().fromJsonString(jsonString, options);
  }
  static equals(a: _MissingFile | PlainMessage<_MissingFile> | undefined | null, b2: _MissingFile | PlainMessage<_MissingFile> | undefined | null): boolean {
    return proto3.util.equals(_MissingFile as unknown as MessageType<_MissingFile>, a, b2);
  }
})();
export type MissingFile = InstanceType<typeof MissingFile$Runtime>;
var MissingFile: MessageType<MissingFile> = MissingFile$Runtime as unknown as MessageType<MissingFile>;
(MissingFile as MutableMessageType<MissingFile>).runtime = proto3;
(MissingFile as MutableMessageType<MissingFile>).typeName = "aiserver.v1.MissingFile";
(MissingFile as MutableMessageType<MissingFile>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "missing_reason", kind: "enum", T: proto3.getEnumType(MissingFile_MissingReason) },
  { no: 3, name: "num_lines", kind: "scalar", T: 5, opt: true }
]);
(function(MissingFile_MissingReason2) {
  MissingFile_MissingReason2[MissingFile_MissingReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  MissingFile_MissingReason2[MissingFile_MissingReason2["TOO_LARGE"] = 1] = "TOO_LARGE";
  MissingFile_MissingReason2[MissingFile_MissingReason2["NOT_FOUND"] = 2] = "NOT_FOUND";
})(MissingFile_MissingReason! || (MissingFile_MissingReason = {} as typeof MissingFile_MissingReason));
proto3.util.setEnumType(MissingFile_MissingReason, "aiserver.v1.MissingFile.MissingReason", [
  { no: 0, name: "MISSING_REASON_UNSPECIFIED" },
  { no: 1, name: "MISSING_REASON_TOO_LARGE" },
  { no: 2, name: "MISSING_REASON_NOT_FOUND" }
]);
var Knowledge$Runtime = (() => class _Knowledge extends Message<_Knowledge> {
  declare knowledge: string;
  declare title: string;
  constructor(data?: PartialMessage<_Knowledge>) {
    super();
    this.knowledge = "";
    this.title = "";
    proto3.util.initPartial(data, this as _Knowledge);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Knowledge {
    return new _Knowledge().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Knowledge {
    return new _Knowledge().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Knowledge {
    return new _Knowledge().fromJsonString(jsonString, options);
  }
  static equals(a: _Knowledge | PlainMessage<_Knowledge> | undefined | null, b2: _Knowledge | PlainMessage<_Knowledge> | undefined | null): boolean {
    return proto3.util.equals(_Knowledge as unknown as MessageType<_Knowledge>, a, b2);
  }
})();
export type Knowledge = InstanceType<typeof Knowledge$Runtime>;
var Knowledge: MessageType<Knowledge> = Knowledge$Runtime as unknown as MessageType<Knowledge>;
(Knowledge as MutableMessageType<Knowledge>).runtime = proto3;
(Knowledge as MutableMessageType<Knowledge>).typeName = "aiserver.v1.Knowledge";
(Knowledge as MutableMessageType<Knowledge>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "knowledge",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolPullRequestResult$Runtime = (() => class _ToolPullRequestResult extends Message<_ToolPullRequestResult> {
  declare sha: string;
  declare fullPrContents: string;
  declare score: number;
  declare title?: string;
  declare summary?: string;
  declare prNumber?: number;
  declare changedFiles: string[];
  declare author?: string;
  declare date?: string;
  constructor(data?: PartialMessage<_ToolPullRequestResult>) {
    super();
    this.sha = "";
    this.fullPrContents = "";
    this.score = 0;
    this.changedFiles = [];
    proto3.util.initPartial(data, this as _ToolPullRequestResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolPullRequestResult {
    return new _ToolPullRequestResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolPullRequestResult {
    return new _ToolPullRequestResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolPullRequestResult {
    return new _ToolPullRequestResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolPullRequestResult | PlainMessage<_ToolPullRequestResult> | undefined | null, b2: _ToolPullRequestResult | PlainMessage<_ToolPullRequestResult> | undefined | null): boolean {
    return proto3.util.equals(_ToolPullRequestResult as unknown as MessageType<_ToolPullRequestResult>, a, b2);
  }
})();
export type ToolPullRequestResult = InstanceType<typeof ToolPullRequestResult$Runtime>;
var ToolPullRequestResult: MessageType<ToolPullRequestResult> = ToolPullRequestResult$Runtime as unknown as MessageType<ToolPullRequestResult>;
(ToolPullRequestResult as MutableMessageType<ToolPullRequestResult>).runtime = proto3;
(ToolPullRequestResult as MutableMessageType<ToolPullRequestResult>).typeName = "aiserver.v1.ToolPullRequestResult";
(ToolPullRequestResult as MutableMessageType<ToolPullRequestResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "full_pr_contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 4, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "summary", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "pr_number", kind: "scalar", T: 13, opt: true },
  { no: 7, name: "changed_files", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "author", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "date", kind: "scalar", T: 9, opt: true }
]);
var ReadSemsearchFilesResult$Runtime = (() => class _ReadSemsearchFilesResult extends Message<_ReadSemsearchFilesResult> {
  declare codeResults: CodeResult[];
  declare allFiles: File2[];
  declare missingFiles: MissingFile[];
  declare knowledgeResults: Knowledge[];
  declare prResults: ToolPullRequestResult[];
  declare gitRemoteUrl?: string;
  declare prHydrationTimedOut?: boolean;
  constructor(data?: PartialMessage<_ReadSemsearchFilesResult>) {
    super();
    this.codeResults = [];
    this.allFiles = [];
    this.missingFiles = [];
    this.knowledgeResults = [];
    this.prResults = [];
    proto3.util.initPartial(data, this as _ReadSemsearchFilesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadSemsearchFilesResult {
    return new _ReadSemsearchFilesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesResult {
    return new _ReadSemsearchFilesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesResult {
    return new _ReadSemsearchFilesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadSemsearchFilesResult | PlainMessage<_ReadSemsearchFilesResult> | undefined | null, b2: _ReadSemsearchFilesResult | PlainMessage<_ReadSemsearchFilesResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadSemsearchFilesResult as unknown as MessageType<_ReadSemsearchFilesResult>, a, b2);
  }
})();
export type ReadSemsearchFilesResult = InstanceType<typeof ReadSemsearchFilesResult$Runtime>;
var ReadSemsearchFilesResult: MessageType<ReadSemsearchFilesResult> = ReadSemsearchFilesResult$Runtime as unknown as MessageType<ReadSemsearchFilesResult>;
(ReadSemsearchFilesResult as MutableMessageType<ReadSemsearchFilesResult>).runtime = proto3;
(ReadSemsearchFilesResult as MutableMessageType<ReadSemsearchFilesResult>).typeName = "aiserver.v1.ReadSemsearchFilesResult";
(ReadSemsearchFilesResult as MutableMessageType<ReadSemsearchFilesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_results", kind: "message", T: CodeResult, repeated: true },
  { no: 2, name: "all_files", kind: "message", T: File2, repeated: true },
  { no: 3, name: "missing_files", kind: "message", T: MissingFile, repeated: true },
  { no: 4, name: "knowledge_results", kind: "message", T: Knowledge, repeated: true },
  { no: 5, name: "pr_results", kind: "message", T: ToolPullRequestResult, repeated: true },
  { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }
]);
var ReadSemsearchFilesStream$Runtime = (() => class _ReadSemsearchFilesStream extends Message<_ReadSemsearchFilesStream> {
  declare numFiles: number;
  constructor(data?: PartialMessage<_ReadSemsearchFilesStream>) {
    super();
    this.numFiles = 0;
    proto3.util.initPartial(data, this as _ReadSemsearchFilesStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadSemsearchFilesStream {
    return new _ReadSemsearchFilesStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesStream {
    return new _ReadSemsearchFilesStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadSemsearchFilesStream {
    return new _ReadSemsearchFilesStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadSemsearchFilesStream | PlainMessage<_ReadSemsearchFilesStream> | undefined | null, b2: _ReadSemsearchFilesStream | PlainMessage<_ReadSemsearchFilesStream> | undefined | null): boolean {
    return proto3.util.equals(_ReadSemsearchFilesStream as unknown as MessageType<_ReadSemsearchFilesStream>, a, b2);
  }
})();
export type ReadSemsearchFilesStream = InstanceType<typeof ReadSemsearchFilesStream$Runtime>;
var ReadSemsearchFilesStream: MessageType<ReadSemsearchFilesStream> = ReadSemsearchFilesStream$Runtime as unknown as MessageType<ReadSemsearchFilesStream>;
(ReadSemsearchFilesStream as MutableMessageType<ReadSemsearchFilesStream>).runtime = proto3;
(ReadSemsearchFilesStream as MutableMessageType<ReadSemsearchFilesStream>).typeName = "aiserver.v1.ReadSemsearchFilesStream";
(ReadSemsearchFilesStream as MutableMessageType<ReadSemsearchFilesStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "num_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SemanticSearchFullParams$Runtime = (() => class _SemanticSearchFullParams extends Message<_SemanticSearchFullParams> {
  declare repositoryInfo?: RepositoryInfo;
  declare query: string;
  declare includePattern?: string;
  declare excludePattern?: string;
  declare topK: number;
  declare prReferences: PullRequestReference[];
  declare prSearchOn?: boolean;
  declare explanation?: string;
  declare codeResults: CodeResult[];
  constructor(data?: PartialMessage<_SemanticSearchFullParams>) {
    super();
    this.query = "";
    this.topK = 0;
    this.prReferences = [];
    this.codeResults = [];
    proto3.util.initPartial(data, this as _SemanticSearchFullParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchFullParams {
    return new _SemanticSearchFullParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchFullParams {
    return new _SemanticSearchFullParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchFullParams {
    return new _SemanticSearchFullParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchFullParams | PlainMessage<_SemanticSearchFullParams> | undefined | null, b2: _SemanticSearchFullParams | PlainMessage<_SemanticSearchFullParams> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchFullParams as unknown as MessageType<_SemanticSearchFullParams>, a, b2);
  }
})();
export type SemanticSearchFullParams = InstanceType<typeof SemanticSearchFullParams$Runtime>;
var SemanticSearchFullParams: MessageType<SemanticSearchFullParams> = SemanticSearchFullParams$Runtime as unknown as MessageType<SemanticSearchFullParams>;
(SemanticSearchFullParams as MutableMessageType<SemanticSearchFullParams>).runtime = proto3;
(SemanticSearchFullParams as MutableMessageType<SemanticSearchFullParams>).typeName = "aiserver.v1.SemanticSearchFullParams";
(SemanticSearchFullParams as MutableMessageType<SemanticSearchFullParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository_info", kind: "message", T: RepositoryInfo },
  {
    no: 2,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "include_pattern", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "exclude_pattern", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "top_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "pr_references", kind: "message", T: PullRequestReference, repeated: true },
  { no: 7, name: "pr_search_on", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "explanation", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "code_results", kind: "message", T: CodeResult, repeated: true }
]);
var SemanticSearchFullResult$Runtime = (() => class _SemanticSearchFullResult extends Message<_SemanticSearchFullResult> {
  declare codeResults: CodeResult[];
  declare allFiles: File2[];
  declare missingFiles: MissingFile[];
  declare knowledgeResults: Knowledge[];
  declare prResults: ToolPullRequestResult[];
  declare gitRemoteUrl?: string;
  declare prHydrationTimedOut?: boolean;
  constructor(data?: PartialMessage<_SemanticSearchFullResult>) {
    super();
    this.codeResults = [];
    this.allFiles = [];
    this.missingFiles = [];
    this.knowledgeResults = [];
    this.prResults = [];
    proto3.util.initPartial(data, this as _SemanticSearchFullResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchFullResult {
    return new _SemanticSearchFullResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchFullResult {
    return new _SemanticSearchFullResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchFullResult {
    return new _SemanticSearchFullResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchFullResult | PlainMessage<_SemanticSearchFullResult> | undefined | null, b2: _SemanticSearchFullResult | PlainMessage<_SemanticSearchFullResult> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchFullResult as unknown as MessageType<_SemanticSearchFullResult>, a, b2);
  }
})();
export type SemanticSearchFullResult = InstanceType<typeof SemanticSearchFullResult$Runtime>;
var SemanticSearchFullResult: MessageType<SemanticSearchFullResult> = SemanticSearchFullResult$Runtime as unknown as MessageType<SemanticSearchFullResult>;
(SemanticSearchFullResult as MutableMessageType<SemanticSearchFullResult>).runtime = proto3;
(SemanticSearchFullResult as MutableMessageType<SemanticSearchFullResult>).typeName = "aiserver.v1.SemanticSearchFullResult";
(SemanticSearchFullResult as MutableMessageType<SemanticSearchFullResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code_results", kind: "message", T: CodeResult, repeated: true },
  { no: 2, name: "all_files", kind: "message", T: File2, repeated: true },
  { no: 3, name: "missing_files", kind: "message", T: MissingFile, repeated: true },
  { no: 4, name: "knowledge_results", kind: "message", T: Knowledge, repeated: true },
  { no: 5, name: "pr_results", kind: "message", T: ToolPullRequestResult, repeated: true },
  { no: 6, name: "git_remote_url", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "pr_hydration_timed_out", kind: "scalar", T: 8, opt: true }
]);
var SemanticSearchFullStream$Runtime = (() => class _SemanticSearchFullStream extends Message<_SemanticSearchFullStream> {
  declare numFiles: number;
  constructor(data?: PartialMessage<_SemanticSearchFullStream>) {
    super();
    this.numFiles = 0;
    proto3.util.initPartial(data, this as _SemanticSearchFullStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchFullStream {
    return new _SemanticSearchFullStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchFullStream {
    return new _SemanticSearchFullStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchFullStream {
    return new _SemanticSearchFullStream().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchFullStream | PlainMessage<_SemanticSearchFullStream> | undefined | null, b2: _SemanticSearchFullStream | PlainMessage<_SemanticSearchFullStream> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchFullStream as unknown as MessageType<_SemanticSearchFullStream>, a, b2);
  }
})();
export type SemanticSearchFullStream = InstanceType<typeof SemanticSearchFullStream$Runtime>;
var SemanticSearchFullStream: MessageType<SemanticSearchFullStream> = SemanticSearchFullStream$Runtime as unknown as MessageType<SemanticSearchFullStream>;
(SemanticSearchFullStream as MutableMessageType<SemanticSearchFullStream>).runtime = proto3;
(SemanticSearchFullStream as MutableMessageType<SemanticSearchFullStream>).typeName = "aiserver.v1.SemanticSearchFullStream";
(SemanticSearchFullStream as MutableMessageType<SemanticSearchFullStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "num_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var DeleteFileParams$Runtime = (() => class _DeleteFileParams extends Message<_DeleteFileParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_DeleteFileParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _DeleteFileParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFileParams {
    return new _DeleteFileParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFileParams {
    return new _DeleteFileParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFileParams {
    return new _DeleteFileParams().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFileParams | PlainMessage<_DeleteFileParams> | undefined | null, b2: _DeleteFileParams | PlainMessage<_DeleteFileParams> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFileParams as unknown as MessageType<_DeleteFileParams>, a, b2);
  }
})();
export type DeleteFileParams = InstanceType<typeof DeleteFileParams$Runtime>;
var DeleteFileParams: MessageType<DeleteFileParams> = DeleteFileParams$Runtime as unknown as MessageType<DeleteFileParams>;
(DeleteFileParams as MutableMessageType<DeleteFileParams>).runtime = proto3;
(DeleteFileParams as MutableMessageType<DeleteFileParams>).typeName = "aiserver.v1.DeleteFileParams";
(DeleteFileParams as MutableMessageType<DeleteFileParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteFileResult$Runtime = (() => class _DeleteFileResult extends Message<_DeleteFileResult> {
  declare rejected: boolean;
  declare fileNonExistent: boolean;
  declare fileDeletedSuccessfully: boolean;
  constructor(data?: PartialMessage<_DeleteFileResult>) {
    super();
    this.rejected = false;
    this.fileNonExistent = false;
    this.fileDeletedSuccessfully = false;
    proto3.util.initPartial(data, this as _DeleteFileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFileResult {
    return new _DeleteFileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFileResult {
    return new _DeleteFileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFileResult {
    return new _DeleteFileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFileResult | PlainMessage<_DeleteFileResult> | undefined | null, b2: _DeleteFileResult | PlainMessage<_DeleteFileResult> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFileResult as unknown as MessageType<_DeleteFileResult>, a, b2);
  }
})();
export type DeleteFileResult = InstanceType<typeof DeleteFileResult$Runtime>;
var DeleteFileResult: MessageType<DeleteFileResult> = DeleteFileResult$Runtime as unknown as MessageType<DeleteFileResult>;
(DeleteFileResult as MutableMessageType<DeleteFileResult>).runtime = proto3;
(DeleteFileResult as MutableMessageType<DeleteFileResult>).typeName = "aiserver.v1.DeleteFileResult";
(DeleteFileResult as MutableMessageType<DeleteFileResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rejected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "file_non_existent",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "file_deleted_successfully",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DeleteFileStream$Runtime = (() => class _DeleteFileStream extends Message<_DeleteFileStream> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_DeleteFileStream>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _DeleteFileStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteFileStream {
    return new _DeleteFileStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteFileStream {
    return new _DeleteFileStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteFileStream {
    return new _DeleteFileStream().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteFileStream | PlainMessage<_DeleteFileStream> | undefined | null, b2: _DeleteFileStream | PlainMessage<_DeleteFileStream> | undefined | null): boolean {
    return proto3.util.equals(_DeleteFileStream as unknown as MessageType<_DeleteFileStream>, a, b2);
  }
})();
export type DeleteFileStream = InstanceType<typeof DeleteFileStream$Runtime>;
var DeleteFileStream: MessageType<DeleteFileStream> = DeleteFileStream$Runtime as unknown as MessageType<DeleteFileStream>;
(DeleteFileStream as MutableMessageType<DeleteFileStream>).runtime = proto3;
(DeleteFileStream as MutableMessageType<DeleteFileStream>).typeName = "aiserver.v1.DeleteFileStream";
(DeleteFileStream as MutableMessageType<DeleteFileStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BuiltinToolCall$Runtime = (() => class _BuiltinToolCall extends Message<_BuiltinToolCall> {
  declare tool: BuiltinTool;
  declare toolCallId?: string;
  declare params: { case: "searchParams"; value: SearchParams } | { case: "readChunkParams"; value: ReadChunkParams } | { case: "gotodefParams"; value: GotodefParams } | { case: "editParams"; value: EditParams } | { case: "undoEditParams"; value: UndoEditParams } | { case: "endParams"; value: EndParams } | { case: "newFileParams"; value: NewFileParams } | { case: "addTestParams"; value: AddTestParams } | { case: "runTestParams"; value: RunTestParams } | { case: "deleteTestParams"; value: DeleteTestParams } | { case: "saveFileParams"; value: SaveFileParams } | { case: "getTestsParams"; value: GetTestsParams } | { case: "getSymbolsParams"; value: GetSymbolsParams } | { case: "semanticSearchParams"; value: SemanticSearchParams } | { case: "getProjectStructureParams"; value: GetProjectStructureParams } | { case: "createRmFilesParams"; value: CreateRmFilesParams } | { case: "runTerminalCommandsParams"; value: RunTerminalCommandsParams } | { case: "newEditParams"; value: NewEditParams } | { case: "readWithLinterParams"; value: ReadWithLinterParams } | { case: "addUiStepParams"; value: AddUiStepParams } | { case: "readSemsearchFilesParams"; value: ReadSemsearchFilesParams } | { case: "deleteFileParams"; value: DeleteFileParams } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BuiltinToolCall>) {
    super();
    this.tool = BuiltinTool.UNSPECIFIED;
    this.params = { case: void 0 };
    proto3.util.initPartial(data, this as _BuiltinToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuiltinToolCall {
    return new _BuiltinToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuiltinToolCall {
    return new _BuiltinToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuiltinToolCall {
    return new _BuiltinToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _BuiltinToolCall | PlainMessage<_BuiltinToolCall> | undefined | null, b2: _BuiltinToolCall | PlainMessage<_BuiltinToolCall> | undefined | null): boolean {
    return proto3.util.equals(_BuiltinToolCall as unknown as MessageType<_BuiltinToolCall>, a, b2);
  }
})();
export type BuiltinToolCall = InstanceType<typeof BuiltinToolCall$Runtime>;
var BuiltinToolCall: MessageType<BuiltinToolCall> = BuiltinToolCall$Runtime as unknown as MessageType<BuiltinToolCall>;
(BuiltinToolCall as MutableMessageType<BuiltinToolCall>).runtime = proto3;
(BuiltinToolCall as MutableMessageType<BuiltinToolCall>).typeName = "aiserver.v1.BuiltinToolCall";
(BuiltinToolCall as MutableMessageType<BuiltinToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(BuiltinTool) },
  { no: 2, name: "search_params", kind: "message", T: SearchParams, oneof: "params" },
  { no: 3, name: "read_chunk_params", kind: "message", T: ReadChunkParams, oneof: "params" },
  { no: 4, name: "gotodef_params", kind: "message", T: GotodefParams, oneof: "params" },
  { no: 5, name: "edit_params", kind: "message", T: EditParams, oneof: "params" },
  { no: 6, name: "undo_edit_params", kind: "message", T: UndoEditParams, oneof: "params" },
  { no: 7, name: "end_params", kind: "message", T: EndParams, oneof: "params" },
  { no: 8, name: "new_file_params", kind: "message", T: NewFileParams, oneof: "params" },
  { no: 9, name: "add_test_params", kind: "message", T: AddTestParams, oneof: "params" },
  { no: 10, name: "run_test_params", kind: "message", T: RunTestParams, oneof: "params" },
  { no: 11, name: "delete_test_params", kind: "message", T: DeleteTestParams, oneof: "params" },
  { no: 12, name: "save_file_params", kind: "message", T: SaveFileParams, oneof: "params" },
  { no: 13, name: "get_tests_params", kind: "message", T: GetTestsParams, oneof: "params" },
  { no: 14, name: "get_symbols_params", kind: "message", T: GetSymbolsParams, oneof: "params" },
  { no: 15, name: "semantic_search_params", kind: "message", T: SemanticSearchParams, oneof: "params" },
  { no: 16, name: "get_project_structure_params", kind: "message", T: GetProjectStructureParams, oneof: "params" },
  { no: 17, name: "create_rm_files_params", kind: "message", T: CreateRmFilesParams, oneof: "params" },
  { no: 18, name: "run_terminal_commands_params", kind: "message", T: RunTerminalCommandsParams, oneof: "params" },
  { no: 19, name: "new_edit_params", kind: "message", T: NewEditParams, oneof: "params" },
  { no: 20, name: "read_with_linter_params", kind: "message", T: ReadWithLinterParams, oneof: "params" },
  { no: 21, name: "add_ui_step_params", kind: "message", T: AddUiStepParams, oneof: "params" },
  { no: 23, name: "read_semsearch_files_params", kind: "message", T: ReadSemsearchFilesParams, oneof: "params" },
  { no: 26, name: "delete_file_params", kind: "message", T: DeleteFileParams, oneof: "params" },
  { no: 22, name: "tool_call_id", kind: "scalar", T: 9, opt: true }
]);
var BuiltinToolResult$Runtime = (() => class _BuiltinToolResult extends Message<_BuiltinToolResult> {
  declare tool: BuiltinTool;
  declare result: { case: "searchResult"; value: SearchResult } | { case: "readChunkResult"; value: ReadChunkResult } | { case: "gotodefResult"; value: GotodefResult } | { case: "editResult"; value: EditResult2 } | { case: "undoEditResult"; value: UndoEditResult } | { case: "endResult"; value: EndResult } | { case: "newFileResult"; value: NewFileResult } | { case: "addTestResult"; value: AddTestResult } | { case: "runTestResult"; value: RunTestResult } | { case: "deleteTestResult"; value: DeleteTestResult } | { case: "saveFileResult"; value: SaveFileResult } | { case: "getTestsResult"; value: GetTestsResult } | { case: "getSymbolsResult"; value: GetSymbolsResult } | { case: "semanticSearchResult"; value: SemanticSearchResult } | { case: "getProjectStructureResult"; value: GetProjectStructureResult } | { case: "createRmFilesResult"; value: CreateRmFilesResult } | { case: "runTerminalCommandsResult"; value: RunTerminalCommandsResult } | { case: "newEditResult"; value: NewEditResult } | { case: "readWithLinterResult"; value: ReadWithLinterResult } | { case: "addUiStepResult"; value: AddUiStepResult } | { case: "readSemsearchFilesResult"; value: ReadSemsearchFilesResult } | { case: "deleteFileResult"; value: DeleteFileResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_BuiltinToolResult>) {
    super();
    this.tool = BuiltinTool.UNSPECIFIED;
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _BuiltinToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BuiltinToolResult {
    return new _BuiltinToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BuiltinToolResult {
    return new _BuiltinToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BuiltinToolResult {
    return new _BuiltinToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _BuiltinToolResult | PlainMessage<_BuiltinToolResult> | undefined | null, b2: _BuiltinToolResult | PlainMessage<_BuiltinToolResult> | undefined | null): boolean {
    return proto3.util.equals(_BuiltinToolResult as unknown as MessageType<_BuiltinToolResult>, a, b2);
  }
})();
export type BuiltinToolResult = InstanceType<typeof BuiltinToolResult$Runtime>;
var BuiltinToolResult: MessageType<BuiltinToolResult> = BuiltinToolResult$Runtime as unknown as MessageType<BuiltinToolResult>;
(BuiltinToolResult as MutableMessageType<BuiltinToolResult>).runtime = proto3;
(BuiltinToolResult as MutableMessageType<BuiltinToolResult>).typeName = "aiserver.v1.BuiltinToolResult";
(BuiltinToolResult as MutableMessageType<BuiltinToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tool", kind: "enum", T: proto3.getEnumType(BuiltinTool) },
  { no: 2, name: "search_result", kind: "message", T: SearchResult, oneof: "result" },
  { no: 3, name: "read_chunk_result", kind: "message", T: ReadChunkResult, oneof: "result" },
  { no: 4, name: "gotodef_result", kind: "message", T: GotodefResult, oneof: "result" },
  { no: 5, name: "edit_result", kind: "message", T: EditResult2, oneof: "result" },
  { no: 6, name: "undo_edit_result", kind: "message", T: UndoEditResult, oneof: "result" },
  { no: 7, name: "end_result", kind: "message", T: EndResult, oneof: "result" },
  { no: 8, name: "new_file_result", kind: "message", T: NewFileResult, oneof: "result" },
  { no: 9, name: "add_test_result", kind: "message", T: AddTestResult, oneof: "result" },
  { no: 10, name: "run_test_result", kind: "message", T: RunTestResult, oneof: "result" },
  { no: 11, name: "delete_test_result", kind: "message", T: DeleteTestResult, oneof: "result" },
  { no: 12, name: "save_file_result", kind: "message", T: SaveFileResult, oneof: "result" },
  { no: 13, name: "get_tests_result", kind: "message", T: GetTestsResult, oneof: "result" },
  { no: 14, name: "get_symbols_result", kind: "message", T: GetSymbolsResult, oneof: "result" },
  { no: 15, name: "semantic_search_result", kind: "message", T: SemanticSearchResult, oneof: "result" },
  { no: 16, name: "get_project_structure_result", kind: "message", T: GetProjectStructureResult, oneof: "result" },
  { no: 17, name: "create_rm_files_result", kind: "message", T: CreateRmFilesResult, oneof: "result" },
  { no: 18, name: "run_terminal_commands_result", kind: "message", T: RunTerminalCommandsResult, oneof: "result" },
  { no: 19, name: "new_edit_result", kind: "message", T: NewEditResult, oneof: "result" },
  { no: 20, name: "read_with_linter_result", kind: "message", T: ReadWithLinterResult, oneof: "result" },
  { no: 21, name: "add_ui_step_result", kind: "message", T: AddUiStepResult, oneof: "result" },
  { no: 22, name: "read_semsearch_files_result", kind: "message", T: ReadSemsearchFilesResult, oneof: "result" },
  { no: 24, name: "delete_file_result", kind: "message", T: DeleteFileResult, oneof: "result" }
]);
var AddUiStepParams$Runtime = (() => class _AddUiStepParams extends Message<_AddUiStepParams> {
  declare conversationId: string;
  declare step: { case: "searchResults"; value: AddUiStepParams_SearchResults } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_AddUiStepParams>) {
    super();
    this.conversationId = "";
    this.step = { case: void 0 };
    proto3.util.initPartial(data, this as _AddUiStepParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddUiStepParams {
    return new _AddUiStepParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddUiStepParams {
    return new _AddUiStepParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddUiStepParams {
    return new _AddUiStepParams().fromJsonString(jsonString, options);
  }
  static equals(a: _AddUiStepParams | PlainMessage<_AddUiStepParams> | undefined | null, b2: _AddUiStepParams | PlainMessage<_AddUiStepParams> | undefined | null): boolean {
    return proto3.util.equals(_AddUiStepParams as unknown as MessageType<_AddUiStepParams>, a, b2);
  }
})();
export type AddUiStepParams = InstanceType<typeof AddUiStepParams$Runtime>;
var AddUiStepParams: MessageType<AddUiStepParams> = AddUiStepParams$Runtime as unknown as MessageType<AddUiStepParams>;
(AddUiStepParams as MutableMessageType<AddUiStepParams>).runtime = proto3;
(AddUiStepParams as MutableMessageType<AddUiStepParams>).typeName = "aiserver.v1.AddUiStepParams";
(AddUiStepParams as MutableMessageType<AddUiStepParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "search_results", kind: "message", T: AddUiStepParams_SearchResults, oneof: "step" }
]);
var AddUiStepParams_SearchResult$Runtime = (() => class _AddUiStepParams_SearchResult extends Message<_AddUiStepParams_SearchResult> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_AddUiStepParams_SearchResult>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _AddUiStepParams_SearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddUiStepParams_SearchResult {
    return new _AddUiStepParams_SearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddUiStepParams_SearchResult {
    return new _AddUiStepParams_SearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddUiStepParams_SearchResult {
    return new _AddUiStepParams_SearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AddUiStepParams_SearchResult | PlainMessage<_AddUiStepParams_SearchResult> | undefined | null, b2: _AddUiStepParams_SearchResult | PlainMessage<_AddUiStepParams_SearchResult> | undefined | null): boolean {
    return proto3.util.equals(_AddUiStepParams_SearchResult as unknown as MessageType<_AddUiStepParams_SearchResult>, a, b2);
  }
})();
export type AddUiStepParams_SearchResult = InstanceType<typeof AddUiStepParams_SearchResult$Runtime>;
var AddUiStepParams_SearchResult: MessageType<AddUiStepParams_SearchResult> = AddUiStepParams_SearchResult$Runtime as unknown as MessageType<AddUiStepParams_SearchResult>;
(AddUiStepParams_SearchResult as MutableMessageType<AddUiStepParams_SearchResult>).runtime = proto3;
(AddUiStepParams_SearchResult as MutableMessageType<AddUiStepParams_SearchResult>).typeName = "aiserver.v1.AddUiStepParams.SearchResult";
(AddUiStepParams_SearchResult as MutableMessageType<AddUiStepParams_SearchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AddUiStepParams_SearchResults$Runtime = (() => class _AddUiStepParams_SearchResults extends Message<_AddUiStepParams_SearchResults> {
  declare searchResults: AddUiStepParams_SearchResult[];
  constructor(data?: PartialMessage<_AddUiStepParams_SearchResults>) {
    super();
    this.searchResults = [];
    proto3.util.initPartial(data, this as _AddUiStepParams_SearchResults);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddUiStepParams_SearchResults {
    return new _AddUiStepParams_SearchResults().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddUiStepParams_SearchResults {
    return new _AddUiStepParams_SearchResults().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddUiStepParams_SearchResults {
    return new _AddUiStepParams_SearchResults().fromJsonString(jsonString, options);
  }
  static equals(a: _AddUiStepParams_SearchResults | PlainMessage<_AddUiStepParams_SearchResults> | undefined | null, b2: _AddUiStepParams_SearchResults | PlainMessage<_AddUiStepParams_SearchResults> | undefined | null): boolean {
    return proto3.util.equals(_AddUiStepParams_SearchResults as unknown as MessageType<_AddUiStepParams_SearchResults>, a, b2);
  }
})();
export type AddUiStepParams_SearchResults = InstanceType<typeof AddUiStepParams_SearchResults$Runtime>;
var AddUiStepParams_SearchResults: MessageType<AddUiStepParams_SearchResults> = AddUiStepParams_SearchResults$Runtime as unknown as MessageType<AddUiStepParams_SearchResults>;
(AddUiStepParams_SearchResults as MutableMessageType<AddUiStepParams_SearchResults>).runtime = proto3;
(AddUiStepParams_SearchResults as MutableMessageType<AddUiStepParams_SearchResults>).typeName = "aiserver.v1.AddUiStepParams.SearchResults";
(AddUiStepParams_SearchResults as MutableMessageType<AddUiStepParams_SearchResults>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "search_results", kind: "message", T: AddUiStepParams_SearchResult, repeated: true }
]);
var AddUiStepResult$Runtime = (() => class _AddUiStepResult extends Message<_AddUiStepResult> {
  constructor(data?: PartialMessage<_AddUiStepResult>) {
    super();
    proto3.util.initPartial(data, this as _AddUiStepResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddUiStepResult {
    return new _AddUiStepResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddUiStepResult {
    return new _AddUiStepResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddUiStepResult {
    return new _AddUiStepResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AddUiStepResult | PlainMessage<_AddUiStepResult> | undefined | null, b2: _AddUiStepResult | PlainMessage<_AddUiStepResult> | undefined | null): boolean {
    return proto3.util.equals(_AddUiStepResult as unknown as MessageType<_AddUiStepResult>, a, b2);
  }
})();
export type AddUiStepResult = InstanceType<typeof AddUiStepResult$Runtime>;
var AddUiStepResult: MessageType<AddUiStepResult> = AddUiStepResult$Runtime as unknown as MessageType<AddUiStepResult>;
(AddUiStepResult as MutableMessageType<AddUiStepResult>).runtime = proto3;
(AddUiStepResult as MutableMessageType<AddUiStepResult>).typeName = "aiserver.v1.AddUiStepResult";
(AddUiStepResult as MutableMessageType<AddUiStepResult>).fields = proto3.util.newFieldList(() => []);
var ServerSideToolResult$Runtime = (() => class _ServerSideToolResult extends Message<_ServerSideToolResult> {
  constructor(data?: PartialMessage<_ServerSideToolResult>) {
    super();
    proto3.util.initPartial(data, this as _ServerSideToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ServerSideToolResult {
    return new _ServerSideToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ServerSideToolResult {
    return new _ServerSideToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ServerSideToolResult {
    return new _ServerSideToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ServerSideToolResult | PlainMessage<_ServerSideToolResult> | undefined | null, b2: _ServerSideToolResult | PlainMessage<_ServerSideToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ServerSideToolResult as unknown as MessageType<_ServerSideToolResult>, a, b2);
  }
})();
export type ServerSideToolResult = InstanceType<typeof ServerSideToolResult$Runtime>;
var ServerSideToolResult: MessageType<ServerSideToolResult> = ServerSideToolResult$Runtime as unknown as MessageType<ServerSideToolResult>;
(ServerSideToolResult as MutableMessageType<ServerSideToolResult>).runtime = proto3;
(ServerSideToolResult as MutableMessageType<ServerSideToolResult>).typeName = "aiserver.v1.ServerSideToolResult";
(ServerSideToolResult as MutableMessageType<ServerSideToolResult>).fields = proto3.util.newFieldList(() => []);
var ToolCall2$Runtime = (() => class _ToolCall extends Message<_ToolCall> {
  declare toolCall: { case: "builtinToolCall"; value: BuiltinToolCall } | { case: "customToolCall"; value: CustomToolCall } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ToolCall>) {
    super();
    this.toolCall = { case: void 0 };
    proto3.util.initPartial(data, this as _ToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCall {
    return new _ToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCall {
    return new _ToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCall {
    return new _ToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCall | PlainMessage<_ToolCall> | undefined | null, b2: _ToolCall | PlainMessage<_ToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ToolCall as unknown as MessageType<_ToolCall>, a, b2);
  }
})();
export type ToolCall2 = InstanceType<typeof ToolCall2$Runtime>;
var ToolCall2: MessageType<ToolCall2> = ToolCall2$Runtime as unknown as MessageType<ToolCall2>;
(ToolCall2 as MutableMessageType<ToolCall2>).runtime = proto3;
(ToolCall2 as MutableMessageType<ToolCall2>).typeName = "aiserver.v1.ToolCall";
(ToolCall2 as MutableMessageType<ToolCall2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "builtin_tool_call", kind: "message", T: BuiltinToolCall, oneof: "tool_call" },
  { no: 2, name: "custom_tool_call", kind: "message", T: CustomToolCall, oneof: "tool_call" }
]);
var ToolResult$Runtime = (() => class _ToolResult extends Message<_ToolResult> {
  declare toolResult: { case: "builtinToolResult"; value: BuiltinToolResult } | { case: "customToolResult"; value: CustomToolResult } | { case: "errorToolResult"; value: ErrorToolResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ToolResult>) {
    super();
    this.toolResult = { case: void 0 };
    proto3.util.initPartial(data, this as _ToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolResult {
    return new _ToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolResult {
    return new _ToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolResult {
    return new _ToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolResult | PlainMessage<_ToolResult> | undefined | null, b2: _ToolResult | PlainMessage<_ToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ToolResult as unknown as MessageType<_ToolResult>, a, b2);
  }
})();
export type ToolResult = InstanceType<typeof ToolResult$Runtime>;
var ToolResult: MessageType<ToolResult> = ToolResult$Runtime as unknown as MessageType<ToolResult>;
(ToolResult as MutableMessageType<ToolResult>).runtime = proto3;
(ToolResult as MutableMessageType<ToolResult>).typeName = "aiserver.v1.ToolResult";
(ToolResult as MutableMessageType<ToolResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "builtin_tool_result", kind: "message", T: BuiltinToolResult, oneof: "tool_result" },
  { no: 2, name: "custom_tool_result", kind: "message", T: CustomToolResult, oneof: "tool_result" },
  { no: 3, name: "error_tool_result", kind: "message", T: ErrorToolResult, oneof: "tool_result" }
]);
var ReadWithLinterParams$Runtime = (() => class _ReadWithLinterParams extends Message<_ReadWithLinterParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_ReadWithLinterParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _ReadWithLinterParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadWithLinterParams {
    return new _ReadWithLinterParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadWithLinterParams {
    return new _ReadWithLinterParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadWithLinterParams {
    return new _ReadWithLinterParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadWithLinterParams | PlainMessage<_ReadWithLinterParams> | undefined | null, b2: _ReadWithLinterParams | PlainMessage<_ReadWithLinterParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadWithLinterParams as unknown as MessageType<_ReadWithLinterParams>, a, b2);
  }
})();
export type ReadWithLinterParams = InstanceType<typeof ReadWithLinterParams$Runtime>;
var ReadWithLinterParams: MessageType<ReadWithLinterParams> = ReadWithLinterParams$Runtime as unknown as MessageType<ReadWithLinterParams>;
(ReadWithLinterParams as MutableMessageType<ReadWithLinterParams>).runtime = proto3;
(ReadWithLinterParams as MutableMessageType<ReadWithLinterParams>).typeName = "aiserver.v1.ReadWithLinterParams";
(ReadWithLinterParams as MutableMessageType<ReadWithLinterParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadWithLinterResult$Runtime = (() => class _ReadWithLinterResult extends Message<_ReadWithLinterResult> {
  declare contents: string;
  declare diagnostics: Diagnostic2[];
  constructor(data?: PartialMessage<_ReadWithLinterResult>) {
    super();
    this.contents = "";
    this.diagnostics = [];
    proto3.util.initPartial(data, this as _ReadWithLinterResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadWithLinterResult {
    return new _ReadWithLinterResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadWithLinterResult {
    return new _ReadWithLinterResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadWithLinterResult {
    return new _ReadWithLinterResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadWithLinterResult | PlainMessage<_ReadWithLinterResult> | undefined | null, b2: _ReadWithLinterResult | PlainMessage<_ReadWithLinterResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadWithLinterResult as unknown as MessageType<_ReadWithLinterResult>, a, b2);
  }
})();
export type ReadWithLinterResult = InstanceType<typeof ReadWithLinterResult$Runtime>;
var ReadWithLinterResult: MessageType<ReadWithLinterResult> = ReadWithLinterResult$Runtime as unknown as MessageType<ReadWithLinterResult>;
(ReadWithLinterResult as MutableMessageType<ReadWithLinterResult>).runtime = proto3;
(ReadWithLinterResult as MutableMessageType<ReadWithLinterResult>).typeName = "aiserver.v1.ReadWithLinterResult";
(ReadWithLinterResult as MutableMessageType<ReadWithLinterResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "contents",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diagnostics", kind: "message", T: Diagnostic2, repeated: true }
]);
var RunTerminalCommandsParams$Runtime = (() => class _RunTerminalCommandsParams extends Message<_RunTerminalCommandsParams> {
  declare commands: string[];
  declare commandsUuid: string;
  constructor(data?: PartialMessage<_RunTerminalCommandsParams>) {
    super();
    this.commands = [];
    this.commandsUuid = "";
    proto3.util.initPartial(data, this as _RunTerminalCommandsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandsParams {
    return new _RunTerminalCommandsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandsParams {
    return new _RunTerminalCommandsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandsParams {
    return new _RunTerminalCommandsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandsParams | PlainMessage<_RunTerminalCommandsParams> | undefined | null, b2: _RunTerminalCommandsParams | PlainMessage<_RunTerminalCommandsParams> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandsParams as unknown as MessageType<_RunTerminalCommandsParams>, a, b2);
  }
})();
export type RunTerminalCommandsParams = InstanceType<typeof RunTerminalCommandsParams$Runtime>;
var RunTerminalCommandsParams: MessageType<RunTerminalCommandsParams> = RunTerminalCommandsParams$Runtime as unknown as MessageType<RunTerminalCommandsParams>;
(RunTerminalCommandsParams as MutableMessageType<RunTerminalCommandsParams>).runtime = proto3;
(RunTerminalCommandsParams as MutableMessageType<RunTerminalCommandsParams>).typeName = "aiserver.v1.RunTerminalCommandsParams";
(RunTerminalCommandsParams as MutableMessageType<RunTerminalCommandsParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "commands", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "commands_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RunTerminalCommandsResult$Runtime = (() => class _RunTerminalCommandsResult extends Message<_RunTerminalCommandsResult> {
  declare outputs: string[];
  constructor(data?: PartialMessage<_RunTerminalCommandsResult>) {
    super();
    this.outputs = [];
    proto3.util.initPartial(data, this as _RunTerminalCommandsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandsResult {
    return new _RunTerminalCommandsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandsResult {
    return new _RunTerminalCommandsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandsResult {
    return new _RunTerminalCommandsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandsResult | PlainMessage<_RunTerminalCommandsResult> | undefined | null, b2: _RunTerminalCommandsResult | PlainMessage<_RunTerminalCommandsResult> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandsResult as unknown as MessageType<_RunTerminalCommandsResult>, a, b2);
  }
})();
export type RunTerminalCommandsResult = InstanceType<typeof RunTerminalCommandsResult$Runtime>;
var RunTerminalCommandsResult: MessageType<RunTerminalCommandsResult> = RunTerminalCommandsResult$Runtime as unknown as MessageType<RunTerminalCommandsResult>;
(RunTerminalCommandsResult as MutableMessageType<RunTerminalCommandsResult>).runtime = proto3;
(RunTerminalCommandsResult as MutableMessageType<RunTerminalCommandsResult>).typeName = "aiserver.v1.RunTerminalCommandsResult";
(RunTerminalCommandsResult as MutableMessageType<RunTerminalCommandsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "outputs", kind: "scalar", T: 9, repeated: true }
]);
var CreateRmFilesParams$Runtime = (() => class _CreateRmFilesParams extends Message<_CreateRmFilesParams> {
  declare removedFilePaths: string[];
  declare createdFilePaths: string[];
  declare createdDirectoryPaths: string[];
  constructor(data?: PartialMessage<_CreateRmFilesParams>) {
    super();
    this.removedFilePaths = [];
    this.createdFilePaths = [];
    this.createdDirectoryPaths = [];
    proto3.util.initPartial(data, this as _CreateRmFilesParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateRmFilesParams {
    return new _CreateRmFilesParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateRmFilesParams {
    return new _CreateRmFilesParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateRmFilesParams {
    return new _CreateRmFilesParams().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateRmFilesParams | PlainMessage<_CreateRmFilesParams> | undefined | null, b2: _CreateRmFilesParams | PlainMessage<_CreateRmFilesParams> | undefined | null): boolean {
    return proto3.util.equals(_CreateRmFilesParams as unknown as MessageType<_CreateRmFilesParams>, a, b2);
  }
})();
export type CreateRmFilesParams = InstanceType<typeof CreateRmFilesParams$Runtime>;
var CreateRmFilesParams: MessageType<CreateRmFilesParams> = CreateRmFilesParams$Runtime as unknown as MessageType<CreateRmFilesParams>;
(CreateRmFilesParams as MutableMessageType<CreateRmFilesParams>).runtime = proto3;
(CreateRmFilesParams as MutableMessageType<CreateRmFilesParams>).typeName = "aiserver.v1.CreateRmFilesParams";
(CreateRmFilesParams as MutableMessageType<CreateRmFilesParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "removed_file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "created_file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "created_directory_paths", kind: "scalar", T: 9, repeated: true }
]);
var CreateRmFilesResult$Runtime = (() => class _CreateRmFilesResult extends Message<_CreateRmFilesResult> {
  declare createdFilePaths: string[];
  declare removedFilePaths: string[];
  constructor(data?: PartialMessage<_CreateRmFilesResult>) {
    super();
    this.createdFilePaths = [];
    this.removedFilePaths = [];
    proto3.util.initPartial(data, this as _CreateRmFilesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateRmFilesResult {
    return new _CreateRmFilesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateRmFilesResult {
    return new _CreateRmFilesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateRmFilesResult {
    return new _CreateRmFilesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateRmFilesResult | PlainMessage<_CreateRmFilesResult> | undefined | null, b2: _CreateRmFilesResult | PlainMessage<_CreateRmFilesResult> | undefined | null): boolean {
    return proto3.util.equals(_CreateRmFilesResult as unknown as MessageType<_CreateRmFilesResult>, a, b2);
  }
})();
export type CreateRmFilesResult = InstanceType<typeof CreateRmFilesResult$Runtime>;
var CreateRmFilesResult: MessageType<CreateRmFilesResult> = CreateRmFilesResult$Runtime as unknown as MessageType<CreateRmFilesResult>;
(CreateRmFilesResult as MutableMessageType<CreateRmFilesResult>).runtime = proto3;
(CreateRmFilesResult as MutableMessageType<CreateRmFilesResult>).typeName = "aiserver.v1.CreateRmFilesResult";
(CreateRmFilesResult as MutableMessageType<CreateRmFilesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "created_file_paths", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "removed_file_paths", kind: "scalar", T: 9, repeated: true }
]);
var GetProjectStructureParams$Runtime = (() => class _GetProjectStructureParams extends Message<_GetProjectStructureParams> {
  constructor(data?: PartialMessage<_GetProjectStructureParams>) {
    super();
    proto3.util.initPartial(data, this as _GetProjectStructureParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProjectStructureParams {
    return new _GetProjectStructureParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProjectStructureParams {
    return new _GetProjectStructureParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProjectStructureParams {
    return new _GetProjectStructureParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProjectStructureParams | PlainMessage<_GetProjectStructureParams> | undefined | null, b2: _GetProjectStructureParams | PlainMessage<_GetProjectStructureParams> | undefined | null): boolean {
    return proto3.util.equals(_GetProjectStructureParams as unknown as MessageType<_GetProjectStructureParams>, a, b2);
  }
})();
export type GetProjectStructureParams = InstanceType<typeof GetProjectStructureParams$Runtime>;
var GetProjectStructureParams: MessageType<GetProjectStructureParams> = GetProjectStructureParams$Runtime as unknown as MessageType<GetProjectStructureParams>;
(GetProjectStructureParams as MutableMessageType<GetProjectStructureParams>).runtime = proto3;
(GetProjectStructureParams as MutableMessageType<GetProjectStructureParams>).typeName = "aiserver.v1.GetProjectStructureParams";
(GetProjectStructureParams as MutableMessageType<GetProjectStructureParams>).fields = proto3.util.newFieldList(() => []);
var GetProjectStructureResult$Runtime = (() => class _GetProjectStructureResult extends Message<_GetProjectStructureResult> {
  declare files: GetProjectStructureResult_File[];
  declare rootWorkspacePath: string;
  constructor(data?: PartialMessage<_GetProjectStructureResult>) {
    super();
    this.files = [];
    this.rootWorkspacePath = "";
    proto3.util.initPartial(data, this as _GetProjectStructureResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProjectStructureResult {
    return new _GetProjectStructureResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProjectStructureResult {
    return new _GetProjectStructureResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProjectStructureResult {
    return new _GetProjectStructureResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProjectStructureResult | PlainMessage<_GetProjectStructureResult> | undefined | null, b2: _GetProjectStructureResult | PlainMessage<_GetProjectStructureResult> | undefined | null): boolean {
    return proto3.util.equals(_GetProjectStructureResult as unknown as MessageType<_GetProjectStructureResult>, a, b2);
  }
})();
export type GetProjectStructureResult = InstanceType<typeof GetProjectStructureResult$Runtime>;
var GetProjectStructureResult: MessageType<GetProjectStructureResult> = GetProjectStructureResult$Runtime as unknown as MessageType<GetProjectStructureResult>;
(GetProjectStructureResult as MutableMessageType<GetProjectStructureResult>).runtime = proto3;
(GetProjectStructureResult as MutableMessageType<GetProjectStructureResult>).typeName = "aiserver.v1.GetProjectStructureResult";
(GetProjectStructureResult as MutableMessageType<GetProjectStructureResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "message", T: GetProjectStructureResult_File, repeated: true },
  {
    no: 2,
    name: "root_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetProjectStructureResult_File$Runtime = (() => class _GetProjectStructureResult_File extends Message<_GetProjectStructureResult_File> {
  declare relativeWorkspacePath: string;
  declare outline: string;
  constructor(data?: PartialMessage<_GetProjectStructureResult_File>) {
    super();
    this.relativeWorkspacePath = "";
    this.outline = "";
    proto3.util.initPartial(data, this as _GetProjectStructureResult_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetProjectStructureResult_File {
    return new _GetProjectStructureResult_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetProjectStructureResult_File {
    return new _GetProjectStructureResult_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetProjectStructureResult_File {
    return new _GetProjectStructureResult_File().fromJsonString(jsonString, options);
  }
  static equals(a: _GetProjectStructureResult_File | PlainMessage<_GetProjectStructureResult_File> | undefined | null, b2: _GetProjectStructureResult_File | PlainMessage<_GetProjectStructureResult_File> | undefined | null): boolean {
    return proto3.util.equals(_GetProjectStructureResult_File as unknown as MessageType<_GetProjectStructureResult_File>, a, b2);
  }
})();
export type GetProjectStructureResult_File = InstanceType<typeof GetProjectStructureResult_File$Runtime>;
var GetProjectStructureResult_File: MessageType<GetProjectStructureResult_File> = GetProjectStructureResult_File$Runtime as unknown as MessageType<GetProjectStructureResult_File>;
(GetProjectStructureResult_File as MutableMessageType<GetProjectStructureResult_File>).runtime = proto3;
(GetProjectStructureResult_File as MutableMessageType<GetProjectStructureResult_File>).typeName = "aiserver.v1.GetProjectStructureResult.File";
(GetProjectStructureResult_File as MutableMessageType<GetProjectStructureResult_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "outline",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NewFileParams$Runtime = (() => class _NewFileParams extends Message<_NewFileParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_NewFileParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _NewFileParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NewFileParams {
    return new _NewFileParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NewFileParams {
    return new _NewFileParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NewFileParams {
    return new _NewFileParams().fromJsonString(jsonString, options);
  }
  static equals(a: _NewFileParams | PlainMessage<_NewFileParams> | undefined | null, b2: _NewFileParams | PlainMessage<_NewFileParams> | undefined | null): boolean {
    return proto3.util.equals(_NewFileParams as unknown as MessageType<_NewFileParams>, a, b2);
  }
})();
export type NewFileParams = InstanceType<typeof NewFileParams$Runtime>;
var NewFileParams: MessageType<NewFileParams> = NewFileParams$Runtime as unknown as MessageType<NewFileParams>;
(NewFileParams as MutableMessageType<NewFileParams>).runtime = proto3;
(NewFileParams as MutableMessageType<NewFileParams>).typeName = "aiserver.v1.NewFileParams";
(NewFileParams as MutableMessageType<NewFileParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SemanticSearchParams$Runtime = (() => class _SemanticSearchParams extends Message<_SemanticSearchParams> {
  declare query: string;
  declare includePattern?: string;
  declare excludePattern?: string;
  declare topK: number;
  declare indexId?: string;
  declare grabWholeFile: boolean;
  constructor(data?: PartialMessage<_SemanticSearchParams>) {
    super();
    this.query = "";
    this.topK = 0;
    this.grabWholeFile = false;
    proto3.util.initPartial(data, this as _SemanticSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchParams {
    return new _SemanticSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchParams {
    return new _SemanticSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchParams {
    return new _SemanticSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchParams | PlainMessage<_SemanticSearchParams> | undefined | null, b2: _SemanticSearchParams | PlainMessage<_SemanticSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchParams as unknown as MessageType<_SemanticSearchParams>, a, b2);
  }
})();
export type SemanticSearchParams = InstanceType<typeof SemanticSearchParams$Runtime>;
var SemanticSearchParams: MessageType<SemanticSearchParams> = SemanticSearchParams$Runtime as unknown as MessageType<SemanticSearchParams>;
(SemanticSearchParams as MutableMessageType<SemanticSearchParams>).runtime = proto3;
(SemanticSearchParams as MutableMessageType<SemanticSearchParams>).typeName = "aiserver.v1.SemanticSearchParams";
(SemanticSearchParams as MutableMessageType<SemanticSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "include_pattern", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "exclude_pattern", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "top_k",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "index_id", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "grab_whole_file",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var Range2$Runtime = (() => class _Range extends Message<_Range> {
  declare startLine: number;
  declare startCharacter: number;
  declare endLine: number;
  declare endCharacter: number;
  constructor(data?: PartialMessage<_Range>) {
    super();
    this.startLine = 0;
    this.startCharacter = 0;
    this.endLine = 0;
    this.endCharacter = 0;
    proto3.util.initPartial(data, this as _Range);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Range {
    return new _Range().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Range {
    return new _Range().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Range {
    return new _Range().fromJsonString(jsonString, options);
  }
  static equals(a: _Range | PlainMessage<_Range> | undefined | null, b2: _Range | PlainMessage<_Range> | undefined | null): boolean {
    return proto3.util.equals(_Range as unknown as MessageType<_Range>, a, b2);
  }
})();
export type Range2 = InstanceType<typeof Range2$Runtime>;
var Range2: MessageType<Range2> = Range2$Runtime as unknown as MessageType<Range2>;
(Range2 as MutableMessageType<Range2>).runtime = proto3;
(Range2 as MutableMessageType<Range2>).typeName = "aiserver.v1.Range";
(Range2 as MutableMessageType<Range2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "start_character",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_character",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var MatchRange$Runtime = (() => class _MatchRange extends Message<_MatchRange> {
  declare start: number;
  declare end: number;
  constructor(data?: PartialMessage<_MatchRange>) {
    super();
    this.start = 0;
    this.end = 0;
    proto3.util.initPartial(data, this as _MatchRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MatchRange {
    return new _MatchRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MatchRange {
    return new _MatchRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MatchRange {
    return new _MatchRange().fromJsonString(jsonString, options);
  }
  static equals(a: _MatchRange | PlainMessage<_MatchRange> | undefined | null, b2: _MatchRange | PlainMessage<_MatchRange> | undefined | null): boolean {
    return proto3.util.equals(_MatchRange as unknown as MessageType<_MatchRange>, a, b2);
  }
})();
export type MatchRange = InstanceType<typeof MatchRange$Runtime>;
var MatchRange: MessageType<MatchRange> = MatchRange$Runtime as unknown as MessageType<MatchRange>;
(MatchRange as MutableMessageType<MatchRange>).runtime = proto3;
(MatchRange as MutableMessageType<MatchRange>).typeName = "aiserver.v1.MatchRange";
(MatchRange as MutableMessageType<MatchRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SemanticSearchResult$Runtime = (() => class _SemanticSearchResult extends Message<_SemanticSearchResult> {
  declare results: SemanticSearchResult_Item[];
  declare files: { [key: string]: string };
  constructor(data?: PartialMessage<_SemanticSearchResult>) {
    super();
    this.results = [];
    this.files = {};
    proto3.util.initPartial(data, this as _SemanticSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchResult {
    return new _SemanticSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchResult {
    return new _SemanticSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchResult {
    return new _SemanticSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchResult | PlainMessage<_SemanticSearchResult> | undefined | null, b2: _SemanticSearchResult | PlainMessage<_SemanticSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchResult as unknown as MessageType<_SemanticSearchResult>, a, b2);
  }
})();
export type SemanticSearchResult = InstanceType<typeof SemanticSearchResult$Runtime>;
var SemanticSearchResult: MessageType<SemanticSearchResult> = SemanticSearchResult$Runtime as unknown as MessageType<SemanticSearchResult>;
(SemanticSearchResult as MutableMessageType<SemanticSearchResult>).runtime = proto3;
(SemanticSearchResult as MutableMessageType<SemanticSearchResult>).typeName = "aiserver.v1.SemanticSearchResult";
(SemanticSearchResult as MutableMessageType<SemanticSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "results", kind: "message", T: SemanticSearchResult_Item, repeated: true },
  { no: 2, name: "files", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var SemanticSearchResult_Item$Runtime = (() => class _SemanticSearchResult_Item extends Message<_SemanticSearchResult_Item> {
  declare relativeWorkspacePath: string;
  declare score: number;
  declare content: string;
  declare range?: SimpleRange;
  declare originalContent?: string;
  declare detailedLines: DetailedLine[];
  constructor(data?: PartialMessage<_SemanticSearchResult_Item>) {
    super();
    this.relativeWorkspacePath = "";
    this.score = 0;
    this.content = "";
    this.detailedLines = [];
    proto3.util.initPartial(data, this as _SemanticSearchResult_Item);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SemanticSearchResult_Item {
    return new _SemanticSearchResult_Item().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SemanticSearchResult_Item {
    return new _SemanticSearchResult_Item().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SemanticSearchResult_Item {
    return new _SemanticSearchResult_Item().fromJsonString(jsonString, options);
  }
  static equals(a: _SemanticSearchResult_Item | PlainMessage<_SemanticSearchResult_Item> | undefined | null, b2: _SemanticSearchResult_Item | PlainMessage<_SemanticSearchResult_Item> | undefined | null): boolean {
    return proto3.util.equals(_SemanticSearchResult_Item as unknown as MessageType<_SemanticSearchResult_Item>, a, b2);
  }
})();
export type SemanticSearchResult_Item = InstanceType<typeof SemanticSearchResult_Item$Runtime>;
var SemanticSearchResult_Item: MessageType<SemanticSearchResult_Item> = SemanticSearchResult_Item$Runtime as unknown as MessageType<SemanticSearchResult_Item>;
(SemanticSearchResult_Item as MutableMessageType<SemanticSearchResult_Item>).runtime = proto3;
(SemanticSearchResult_Item as MutableMessageType<SemanticSearchResult_Item>).typeName = "aiserver.v1.SemanticSearchResult.Item";
(SemanticSearchResult_Item as MutableMessageType<SemanticSearchResult_Item>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "range", kind: "message", T: SimpleRange },
  { no: 5, name: "original_content", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "detailed_lines", kind: "message", T: DetailedLine, repeated: true }
]);
var SearchParams$Runtime = (() => class _SearchParams extends Message<_SearchParams> {
  declare query: string;
  declare regex: boolean;
  declare includePattern: string;
  declare excludePattern: string;
  declare filenameSearch: boolean;
  constructor(data?: PartialMessage<_SearchParams>) {
    super();
    this.query = "";
    this.regex = false;
    this.includePattern = "";
    this.excludePattern = "";
    this.filenameSearch = false;
    proto3.util.initPartial(data, this as _SearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchParams {
    return new _SearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchParams {
    return new _SearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchParams {
    return new _SearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchParams | PlainMessage<_SearchParams> | undefined | null, b2: _SearchParams | PlainMessage<_SearchParams> | undefined | null): boolean {
    return proto3.util.equals(_SearchParams as unknown as MessageType<_SearchParams>, a, b2);
  }
})();
export type SearchParams = InstanceType<typeof SearchParams$Runtime>;
var SearchParams: MessageType<SearchParams> = SearchParams$Runtime as unknown as MessageType<SearchParams>;
(SearchParams as MutableMessageType<SearchParams>).runtime = proto3;
(SearchParams as MutableMessageType<SearchParams>).typeName = "aiserver.v1.SearchParams";
(SearchParams as MutableMessageType<SearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "include_pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "exclude_pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "filename_search",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SearchToolFileSearchResult$Runtime = (() => class _SearchToolFileSearchResult extends Message<_SearchToolFileSearchResult> {
  declare relativeWorkspacePath: string;
  declare numMatches: number;
  declare potentiallyRelevantLines: SearchToolFileSearchResult_Line[];
  declare cropped: boolean;
  constructor(data?: PartialMessage<_SearchToolFileSearchResult>) {
    super();
    this.relativeWorkspacePath = "";
    this.numMatches = 0;
    this.potentiallyRelevantLines = [];
    this.cropped = false;
    proto3.util.initPartial(data, this as _SearchToolFileSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchToolFileSearchResult {
    return new _SearchToolFileSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchToolFileSearchResult {
    return new _SearchToolFileSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchToolFileSearchResult {
    return new _SearchToolFileSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchToolFileSearchResult | PlainMessage<_SearchToolFileSearchResult> | undefined | null, b2: _SearchToolFileSearchResult | PlainMessage<_SearchToolFileSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_SearchToolFileSearchResult as unknown as MessageType<_SearchToolFileSearchResult>, a, b2);
  }
})();
export type SearchToolFileSearchResult = InstanceType<typeof SearchToolFileSearchResult$Runtime>;
var SearchToolFileSearchResult: MessageType<SearchToolFileSearchResult> = SearchToolFileSearchResult$Runtime as unknown as MessageType<SearchToolFileSearchResult>;
(SearchToolFileSearchResult as MutableMessageType<SearchToolFileSearchResult>).runtime = proto3;
(SearchToolFileSearchResult as MutableMessageType<SearchToolFileSearchResult>).typeName = "aiserver.v1.SearchToolFileSearchResult";
(SearchToolFileSearchResult as MutableMessageType<SearchToolFileSearchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "num_matches",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "potentially_relevant_lines", kind: "message", T: SearchToolFileSearchResult_Line, repeated: true },
  {
    no: 4,
    name: "cropped",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SearchToolFileSearchResult_Line$Runtime = (() => class _SearchToolFileSearchResult_Line extends Message<_SearchToolFileSearchResult_Line> {
  declare lineNumber: number;
  declare text: string;
  constructor(data?: PartialMessage<_SearchToolFileSearchResult_Line>) {
    super();
    this.lineNumber = 0;
    this.text = "";
    proto3.util.initPartial(data, this as _SearchToolFileSearchResult_Line);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchToolFileSearchResult_Line {
    return new _SearchToolFileSearchResult_Line().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchToolFileSearchResult_Line {
    return new _SearchToolFileSearchResult_Line().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchToolFileSearchResult_Line {
    return new _SearchToolFileSearchResult_Line().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchToolFileSearchResult_Line | PlainMessage<_SearchToolFileSearchResult_Line> | undefined | null, b2: _SearchToolFileSearchResult_Line | PlainMessage<_SearchToolFileSearchResult_Line> | undefined | null): boolean {
    return proto3.util.equals(_SearchToolFileSearchResult_Line as unknown as MessageType<_SearchToolFileSearchResult_Line>, a, b2);
  }
})();
export type SearchToolFileSearchResult_Line = InstanceType<typeof SearchToolFileSearchResult_Line$Runtime>;
var SearchToolFileSearchResult_Line: MessageType<SearchToolFileSearchResult_Line> = SearchToolFileSearchResult_Line$Runtime as unknown as MessageType<SearchToolFileSearchResult_Line>;
(SearchToolFileSearchResult_Line as MutableMessageType<SearchToolFileSearchResult_Line>).runtime = proto3;
(SearchToolFileSearchResult_Line as MutableMessageType<SearchToolFileSearchResult_Line>).typeName = "aiserver.v1.SearchToolFileSearchResult.Line";
(SearchToolFileSearchResult_Line as MutableMessageType<SearchToolFileSearchResult_Line>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SearchResult$Runtime = (() => class _SearchResult extends Message<_SearchResult> {
  declare fileResults: SearchToolFileSearchResult[];
  declare numTotalMatches: number;
  declare numTotalMatchedFiles: number;
  declare numTotalMayBeIncomplete: boolean;
  declare filesOnly: boolean;
  constructor(data?: PartialMessage<_SearchResult>) {
    super();
    this.fileResults = [];
    this.numTotalMatches = 0;
    this.numTotalMatchedFiles = 0;
    this.numTotalMayBeIncomplete = false;
    this.filesOnly = false;
    proto3.util.initPartial(data, this as _SearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchResult {
    return new _SearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchResult {
    return new _SearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchResult {
    return new _SearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchResult | PlainMessage<_SearchResult> | undefined | null, b2: _SearchResult | PlainMessage<_SearchResult> | undefined | null): boolean {
    return proto3.util.equals(_SearchResult as unknown as MessageType<_SearchResult>, a, b2);
  }
})();
export type SearchResult = InstanceType<typeof SearchResult$Runtime>;
var SearchResult: MessageType<SearchResult> = SearchResult$Runtime as unknown as MessageType<SearchResult>;
(SearchResult as MutableMessageType<SearchResult>).runtime = proto3;
(SearchResult as MutableMessageType<SearchResult>).typeName = "aiserver.v1.SearchResult";
(SearchResult as MutableMessageType<SearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_results", kind: "message", T: SearchToolFileSearchResult, repeated: true },
  {
    no: 2,
    name: "num_total_matches",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "num_total_matched_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "num_total_may_be_incomplete",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "files_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ReadChunkParams$Runtime = (() => class _ReadChunkParams extends Message<_ReadChunkParams> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare numLines?: number;
  constructor(data?: PartialMessage<_ReadChunkParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    proto3.util.initPartial(data, this as _ReadChunkParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadChunkParams {
    return new _ReadChunkParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadChunkParams {
    return new _ReadChunkParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadChunkParams {
    return new _ReadChunkParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadChunkParams | PlainMessage<_ReadChunkParams> | undefined | null, b2: _ReadChunkParams | PlainMessage<_ReadChunkParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadChunkParams as unknown as MessageType<_ReadChunkParams>, a, b2);
  }
})();
export type ReadChunkParams = InstanceType<typeof ReadChunkParams$Runtime>;
var ReadChunkParams: MessageType<ReadChunkParams> = ReadChunkParams$Runtime as unknown as MessageType<ReadChunkParams>;
(ReadChunkParams as MutableMessageType<ReadChunkParams>).runtime = proto3;
(ReadChunkParams as MutableMessageType<ReadChunkParams>).typeName = "aiserver.v1.ReadChunkParams";
(ReadChunkParams as MutableMessageType<ReadChunkParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "num_lines", kind: "scalar", T: 5, opt: true }
]);
var ReadChunkResult$Runtime = (() => class _ReadChunkResult extends Message<_ReadChunkResult> {
  declare relativeWorkspacePath: string;
  declare startLineNumber: number;
  declare lines: string[];
  declare totalNumLines: number;
  declare cropped: boolean;
  constructor(data?: PartialMessage<_ReadChunkResult>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLineNumber = 0;
    this.lines = [];
    this.totalNumLines = 0;
    this.cropped = false;
    proto3.util.initPartial(data, this as _ReadChunkResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadChunkResult {
    return new _ReadChunkResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadChunkResult {
    return new _ReadChunkResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadChunkResult {
    return new _ReadChunkResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadChunkResult | PlainMessage<_ReadChunkResult> | undefined | null, b2: _ReadChunkResult | PlainMessage<_ReadChunkResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadChunkResult as unknown as MessageType<_ReadChunkResult>, a, b2);
  }
})();
export type ReadChunkResult = InstanceType<typeof ReadChunkResult$Runtime>;
var ReadChunkResult: MessageType<ReadChunkResult> = ReadChunkResult$Runtime as unknown as MessageType<ReadChunkResult>;
(ReadChunkResult as MutableMessageType<ReadChunkResult>).runtime = proto3;
(ReadChunkResult as MutableMessageType<ReadChunkResult>).typeName = "aiserver.v1.ReadChunkResult";
(ReadChunkResult as MutableMessageType<ReadChunkResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "total_num_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "cropped",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var UndoEditParams$Runtime = (() => class _UndoEditParams extends Message<_UndoEditParams> {
  constructor(data?: PartialMessage<_UndoEditParams>) {
    super();
    proto3.util.initPartial(data, this as _UndoEditParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UndoEditParams {
    return new _UndoEditParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UndoEditParams {
    return new _UndoEditParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UndoEditParams {
    return new _UndoEditParams().fromJsonString(jsonString, options);
  }
  static equals(a: _UndoEditParams | PlainMessage<_UndoEditParams> | undefined | null, b2: _UndoEditParams | PlainMessage<_UndoEditParams> | undefined | null): boolean {
    return proto3.util.equals(_UndoEditParams as unknown as MessageType<_UndoEditParams>, a, b2);
  }
})();
export type UndoEditParams = InstanceType<typeof UndoEditParams$Runtime>;
var UndoEditParams: MessageType<UndoEditParams> = UndoEditParams$Runtime as unknown as MessageType<UndoEditParams>;
(UndoEditParams as MutableMessageType<UndoEditParams>).runtime = proto3;
(UndoEditParams as MutableMessageType<UndoEditParams>).typeName = "aiserver.v1.UndoEditParams";
(UndoEditParams as MutableMessageType<UndoEditParams>).fields = proto3.util.newFieldList(() => []);
var EndParams$Runtime = (() => class _EndParams extends Message<_EndParams> {
  constructor(data?: PartialMessage<_EndParams>) {
    super();
    proto3.util.initPartial(data, this as _EndParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EndParams {
    return new _EndParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EndParams {
    return new _EndParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EndParams {
    return new _EndParams().fromJsonString(jsonString, options);
  }
  static equals(a: _EndParams | PlainMessage<_EndParams> | undefined | null, b2: _EndParams | PlainMessage<_EndParams> | undefined | null): boolean {
    return proto3.util.equals(_EndParams as unknown as MessageType<_EndParams>, a, b2);
  }
})();
export type EndParams = InstanceType<typeof EndParams$Runtime>;
var EndParams: MessageType<EndParams> = EndParams$Runtime as unknown as MessageType<EndParams>;
(EndParams as MutableMessageType<EndParams>).runtime = proto3;
(EndParams as MutableMessageType<EndParams>).typeName = "aiserver.v1.EndParams";
(EndParams as MutableMessageType<EndParams>).fields = proto3.util.newFieldList(() => []);
var NewFileResult$Runtime = (() => class _NewFileResult extends Message<_NewFileResult> {
  declare relativeWorkspacePath: string;
  declare fileTotalLines: number;
  constructor(data?: PartialMessage<_NewFileResult>) {
    super();
    this.relativeWorkspacePath = "";
    this.fileTotalLines = 0;
    proto3.util.initPartial(data, this as _NewFileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NewFileResult {
    return new _NewFileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NewFileResult {
    return new _NewFileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NewFileResult {
    return new _NewFileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _NewFileResult | PlainMessage<_NewFileResult> | undefined | null, b2: _NewFileResult | PlainMessage<_NewFileResult> | undefined | null): boolean {
    return proto3.util.equals(_NewFileResult as unknown as MessageType<_NewFileResult>, a, b2);
  }
})();
export type NewFileResult = InstanceType<typeof NewFileResult$Runtime>;
var NewFileResult: MessageType<NewFileResult> = NewFileResult$Runtime as unknown as MessageType<NewFileResult>;
(NewFileResult as MutableMessageType<NewFileResult>).runtime = proto3;
(NewFileResult as MutableMessageType<NewFileResult>).typeName = "aiserver.v1.NewFileResult";
(NewFileResult as MutableMessageType<NewFileResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file_total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var UndoEditResult$Runtime = (() => class _UndoEditResult extends Message<_UndoEditResult> {
  declare feedback: string[];
  declare relativeWorkspacePath: string;
  declare contextStartLineNumber: number;
  declare contextLines: string[];
  declare contextTotalNumLines: number;
  declare fileTotalLines: number;
  constructor(data?: PartialMessage<_UndoEditResult>) {
    super();
    this.feedback = [];
    this.relativeWorkspacePath = "";
    this.contextStartLineNumber = 0;
    this.contextLines = [];
    this.contextTotalNumLines = 0;
    this.fileTotalLines = 0;
    proto3.util.initPartial(data, this as _UndoEditResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UndoEditResult {
    return new _UndoEditResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UndoEditResult {
    return new _UndoEditResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UndoEditResult {
    return new _UndoEditResult().fromJsonString(jsonString, options);
  }
  static equals(a: _UndoEditResult | PlainMessage<_UndoEditResult> | undefined | null, b2: _UndoEditResult | PlainMessage<_UndoEditResult> | undefined | null): boolean {
    return proto3.util.equals(_UndoEditResult as unknown as MessageType<_UndoEditResult>, a, b2);
  }
})();
export type UndoEditResult = InstanceType<typeof UndoEditResult$Runtime>;
var UndoEditResult: MessageType<UndoEditResult> = UndoEditResult$Runtime as unknown as MessageType<UndoEditResult>;
(UndoEditResult as MutableMessageType<UndoEditResult>).runtime = proto3;
(UndoEditResult as MutableMessageType<UndoEditResult>).typeName = "aiserver.v1.UndoEditResult";
(UndoEditResult as MutableMessageType<UndoEditResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "feedback", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "context_start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "context_lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 5,
    name: "context_total_num_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "file_total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var EndResult$Runtime = (() => class _EndResult extends Message<_EndResult> {
  constructor(data?: PartialMessage<_EndResult>) {
    super();
    proto3.util.initPartial(data, this as _EndResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EndResult {
    return new _EndResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EndResult {
    return new _EndResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EndResult {
    return new _EndResult().fromJsonString(jsonString, options);
  }
  static equals(a: _EndResult | PlainMessage<_EndResult> | undefined | null, b2: _EndResult | PlainMessage<_EndResult> | undefined | null): boolean {
    return proto3.util.equals(_EndResult as unknown as MessageType<_EndResult>, a, b2);
  }
})();
export type EndResult = InstanceType<typeof EndResult$Runtime>;
var EndResult: MessageType<EndResult> = EndResult$Runtime as unknown as MessageType<EndResult>;
(EndResult as MutableMessageType<EndResult>).runtime = proto3;
(EndResult as MutableMessageType<EndResult>).typeName = "aiserver.v1.EndResult";
(EndResult as MutableMessageType<EndResult>).fields = proto3.util.newFieldList(() => []);
var CustomToolCall$Runtime = (() => class _CustomToolCall extends Message<_CustomToolCall> {
  declare toolId: string;
  declare params: string;
  constructor(data?: PartialMessage<_CustomToolCall>) {
    super();
    this.toolId = "";
    this.params = "";
    proto3.util.initPartial(data, this as _CustomToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomToolCall {
    return new _CustomToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomToolCall {
    return new _CustomToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomToolCall {
    return new _CustomToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomToolCall | PlainMessage<_CustomToolCall> | undefined | null, b2: _CustomToolCall | PlainMessage<_CustomToolCall> | undefined | null): boolean {
    return proto3.util.equals(_CustomToolCall as unknown as MessageType<_CustomToolCall>, a, b2);
  }
})();
export type CustomToolCall = InstanceType<typeof CustomToolCall$Runtime>;
var CustomToolCall: MessageType<CustomToolCall> = CustomToolCall$Runtime as unknown as MessageType<CustomToolCall>;
(CustomToolCall as MutableMessageType<CustomToolCall>).runtime = proto3;
(CustomToolCall as MutableMessageType<CustomToolCall>).typeName = "aiserver.v1.CustomToolCall";
(CustomToolCall as MutableMessageType<CustomToolCall>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "params",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ScratchpadResult$Runtime = (() => class _ScratchpadResult extends Message<_ScratchpadResult> {
  constructor(data?: PartialMessage<_ScratchpadResult>) {
    super();
    proto3.util.initPartial(data, this as _ScratchpadResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ScratchpadResult {
    return new _ScratchpadResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ScratchpadResult {
    return new _ScratchpadResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ScratchpadResult {
    return new _ScratchpadResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ScratchpadResult | PlainMessage<_ScratchpadResult> | undefined | null, b2: _ScratchpadResult | PlainMessage<_ScratchpadResult> | undefined | null): boolean {
    return proto3.util.equals(_ScratchpadResult as unknown as MessageType<_ScratchpadResult>, a, b2);
  }
})();
export type ScratchpadResult = InstanceType<typeof ScratchpadResult$Runtime>;
var ScratchpadResult: MessageType<ScratchpadResult> = ScratchpadResult$Runtime as unknown as MessageType<ScratchpadResult>;
(ScratchpadResult as MutableMessageType<ScratchpadResult>).runtime = proto3;
(ScratchpadResult as MutableMessageType<ScratchpadResult>).typeName = "aiserver.v1.ScratchpadResult";
(ScratchpadResult as MutableMessageType<ScratchpadResult>).fields = proto3.util.newFieldList(() => []);
var CustomToolResult$Runtime = (() => class _CustomToolResult extends Message<_CustomToolResult> {
  declare toolId: string;
  declare result: string;
  constructor(data?: PartialMessage<_CustomToolResult>) {
    super();
    this.toolId = "";
    this.result = "";
    proto3.util.initPartial(data, this as _CustomToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomToolResult {
    return new _CustomToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomToolResult {
    return new _CustomToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomToolResult {
    return new _CustomToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomToolResult | PlainMessage<_CustomToolResult> | undefined | null, b2: _CustomToolResult | PlainMessage<_CustomToolResult> | undefined | null): boolean {
    return proto3.util.equals(_CustomToolResult as unknown as MessageType<_CustomToolResult>, a, b2);
  }
})();
export type CustomToolResult = InstanceType<typeof CustomToolResult$Runtime>;
var CustomToolResult: MessageType<CustomToolResult> = CustomToolResult$Runtime as unknown as MessageType<CustomToolResult>;
(CustomToolResult as MutableMessageType<CustomToolResult>).runtime = proto3;
(CustomToolResult as MutableMessageType<CustomToolResult>).typeName = "aiserver.v1.CustomToolResult";
(CustomToolResult as MutableMessageType<CustomToolResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "result",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GotodefParams$Runtime = (() => class _GotodefParams extends Message<_GotodefParams> {
  declare relativeWorkspacePath: string;
  declare symbol: string;
  declare startLine: number;
  declare endLine: number;
  constructor(data?: PartialMessage<_GotodefParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.symbol = "";
    this.startLine = 0;
    this.endLine = 0;
    proto3.util.initPartial(data, this as _GotodefParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GotodefParams {
    return new _GotodefParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GotodefParams {
    return new _GotodefParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GotodefParams {
    return new _GotodefParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GotodefParams | PlainMessage<_GotodefParams> | undefined | null, b2: _GotodefParams | PlainMessage<_GotodefParams> | undefined | null): boolean {
    return proto3.util.equals(_GotodefParams as unknown as MessageType<_GotodefParams>, a, b2);
  }
})();
export type GotodefParams = InstanceType<typeof GotodefParams$Runtime>;
var GotodefParams: MessageType<GotodefParams> = GotodefParams$Runtime as unknown as MessageType<GotodefParams>;
(GotodefParams as MutableMessageType<GotodefParams>).runtime = proto3;
(GotodefParams as MutableMessageType<GotodefParams>).typeName = "aiserver.v1.GotodefParams";
(GotodefParams as MutableMessageType<GotodefParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "symbol",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GotodefDefinition$Runtime = (() => class _GotodefDefinition extends Message<_GotodefDefinition> {
  declare relativeWorkspacePath: string;
  declare fullyQualifiedName?: string;
  declare symbolKind?: string;
  declare startLine: number;
  declare endLine: number;
  declare codeContextLines: string[];
  constructor(data?: PartialMessage<_GotodefDefinition>) {
    super();
    this.relativeWorkspacePath = "";
    this.startLine = 0;
    this.endLine = 0;
    this.codeContextLines = [];
    proto3.util.initPartial(data, this as _GotodefDefinition);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GotodefDefinition {
    return new _GotodefDefinition().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GotodefDefinition {
    return new _GotodefDefinition().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GotodefDefinition {
    return new _GotodefDefinition().fromJsonString(jsonString, options);
  }
  static equals(a: _GotodefDefinition | PlainMessage<_GotodefDefinition> | undefined | null, b2: _GotodefDefinition | PlainMessage<_GotodefDefinition> | undefined | null): boolean {
    return proto3.util.equals(_GotodefDefinition as unknown as MessageType<_GotodefDefinition>, a, b2);
  }
})();
export type GotodefDefinition = InstanceType<typeof GotodefDefinition$Runtime>;
var GotodefDefinition: MessageType<GotodefDefinition> = GotodefDefinition$Runtime as unknown as MessageType<GotodefDefinition>;
(GotodefDefinition as MutableMessageType<GotodefDefinition>).runtime = proto3;
(GotodefDefinition as MutableMessageType<GotodefDefinition>).typeName = "aiserver.v1.GotodefDefinition";
(GotodefDefinition as MutableMessageType<GotodefDefinition>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "fully_qualified_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "symbol_kind", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "start_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "end_line",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "code_context_lines", kind: "scalar", T: 9, repeated: true }
]);
var GotodefResult$Runtime = (() => class _GotodefResult extends Message<_GotodefResult> {
  declare definitions: GotodefDefinition[];
  constructor(data?: PartialMessage<_GotodefResult>) {
    super();
    this.definitions = [];
    proto3.util.initPartial(data, this as _GotodefResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GotodefResult {
    return new _GotodefResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GotodefResult {
    return new _GotodefResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GotodefResult {
    return new _GotodefResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GotodefResult | PlainMessage<_GotodefResult> | undefined | null, b2: _GotodefResult | PlainMessage<_GotodefResult> | undefined | null): boolean {
    return proto3.util.equals(_GotodefResult as unknown as MessageType<_GotodefResult>, a, b2);
  }
})();
export type GotodefResult = InstanceType<typeof GotodefResult$Runtime>;
var GotodefResult: MessageType<GotodefResult> = GotodefResult$Runtime as unknown as MessageType<GotodefResult>;
(GotodefResult as MutableMessageType<GotodefResult>).runtime = proto3;
(GotodefResult as MutableMessageType<GotodefResult>).typeName = "aiserver.v1.GotodefResult";
(GotodefResult as MutableMessageType<GotodefResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "definitions", kind: "message", T: GotodefDefinition, repeated: true }
]);
var ErrorToolResult$Runtime = (() => class _ErrorToolResult extends Message<_ErrorToolResult> {
  declare errorMessage: string;
  constructor(data?: PartialMessage<_ErrorToolResult>) {
    super();
    this.errorMessage = "";
    proto3.util.initPartial(data, this as _ErrorToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ErrorToolResult {
    return new _ErrorToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ErrorToolResult {
    return new _ErrorToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ErrorToolResult {
    return new _ErrorToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ErrorToolResult | PlainMessage<_ErrorToolResult> | undefined | null, b2: _ErrorToolResult | PlainMessage<_ErrorToolResult> | undefined | null): boolean {
    return proto3.util.equals(_ErrorToolResult as unknown as MessageType<_ErrorToolResult>, a, b2);
  }
})();
export type ErrorToolResult = InstanceType<typeof ErrorToolResult$Runtime>;
var ErrorToolResult: MessageType<ErrorToolResult> = ErrorToolResult$Runtime as unknown as MessageType<ErrorToolResult>;
(ErrorToolResult as MutableMessageType<ErrorToolResult>).runtime = proto3;
(ErrorToolResult as MutableMessageType<ErrorToolResult>).typeName = "aiserver.v1.ErrorToolResult";
(ErrorToolResult as MutableMessageType<ErrorToolResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var NewEditParams$Runtime = (() => class _NewEditParams extends Message<_NewEditParams> {
  declare relativeWorkspacePath: string;
  declare startLineNumber?: number;
  declare endLineNumber?: number;
  declare text: string;
  declare editId: string;
  declare firstEdit: boolean;
  constructor(data?: PartialMessage<_NewEditParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.text = "";
    this.editId = "";
    this.firstEdit = false;
    proto3.util.initPartial(data, this as _NewEditParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NewEditParams {
    return new _NewEditParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NewEditParams {
    return new _NewEditParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NewEditParams {
    return new _NewEditParams().fromJsonString(jsonString, options);
  }
  static equals(a: _NewEditParams | PlainMessage<_NewEditParams> | undefined | null, b2: _NewEditParams | PlainMessage<_NewEditParams> | undefined | null): boolean {
    return proto3.util.equals(_NewEditParams as unknown as MessageType<_NewEditParams>, a, b2);
  }
})();
export type NewEditParams = InstanceType<typeof NewEditParams$Runtime>;
var NewEditParams: MessageType<NewEditParams> = NewEditParams$Runtime as unknown as MessageType<NewEditParams>;
(NewEditParams as MutableMessageType<NewEditParams>).runtime = proto3;
(NewEditParams as MutableMessageType<NewEditParams>).typeName = "aiserver.v1.NewEditParams";
(NewEditParams as MutableMessageType<NewEditParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "start_line_number", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "end_line_number", kind: "scalar", T: 5, opt: true },
  {
    no: 4,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "edit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "first_edit",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var NewEditResult$Runtime = (() => class _NewEditResult extends Message<_NewEditResult> {
  constructor(data?: PartialMessage<_NewEditResult>) {
    super();
    proto3.util.initPartial(data, this as _NewEditResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NewEditResult {
    return new _NewEditResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NewEditResult {
    return new _NewEditResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NewEditResult {
    return new _NewEditResult().fromJsonString(jsonString, options);
  }
  static equals(a: _NewEditResult | PlainMessage<_NewEditResult> | undefined | null, b2: _NewEditResult | PlainMessage<_NewEditResult> | undefined | null): boolean {
    return proto3.util.equals(_NewEditResult as unknown as MessageType<_NewEditResult>, a, b2);
  }
})();
export type NewEditResult = InstanceType<typeof NewEditResult$Runtime>;
var NewEditResult: MessageType<NewEditResult> = NewEditResult$Runtime as unknown as MessageType<NewEditResult>;
(NewEditResult as MutableMessageType<NewEditResult>).runtime = proto3;
(NewEditResult as MutableMessageType<NewEditResult>).typeName = "aiserver.v1.NewEditResult";
(NewEditResult as MutableMessageType<NewEditResult>).fields = proto3.util.newFieldList(() => []);
var EditParams$Runtime = (() => class _EditParams extends Message<_EditParams> {
  declare relativeWorkspacePath: string;
  declare lineNumber?: number;
  declare replaceNumLines: number;
  declare newLines: string[];
  declare replaceWholeFile?: boolean;
  declare editId: string;
  declare frontendEditType: EditParams_FrontendEditType;
  declare autoFixAllLinterErrorsInFile?: boolean;
  constructor(data?: PartialMessage<_EditParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.replaceNumLines = 0;
    this.newLines = [];
    this.editId = "";
    this.frontendEditType = EditParams_FrontendEditType.UNSPECIFIED;
    proto3.util.initPartial(data, this as _EditParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditParams {
    return new _EditParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditParams {
    return new _EditParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditParams {
    return new _EditParams().fromJsonString(jsonString, options);
  }
  static equals(a: _EditParams | PlainMessage<_EditParams> | undefined | null, b2: _EditParams | PlainMessage<_EditParams> | undefined | null): boolean {
    return proto3.util.equals(_EditParams as unknown as MessageType<_EditParams>, a, b2);
  }
})();
export type EditParams = InstanceType<typeof EditParams$Runtime>;
var EditParams: MessageType<EditParams> = EditParams$Runtime as unknown as MessageType<EditParams>;
(EditParams as MutableMessageType<EditParams>).runtime = proto3;
(EditParams as MutableMessageType<EditParams>).typeName = "aiserver.v1.EditParams";
(EditParams as MutableMessageType<EditParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "line_number", kind: "scalar", T: 5, opt: true },
  {
    no: 3,
    name: "replace_num_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: true },
  { no: 7, name: "replace_whole_file", kind: "scalar", T: 8, opt: true },
  {
    no: 5,
    name: "edit_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "frontend_edit_type", kind: "enum", T: proto3.getEnumType(EditParams_FrontendEditType) },
  { no: 8, name: "auto_fix_all_linter_errors_in_file", kind: "scalar", T: 8, opt: true }
]);
(function(EditParams_FrontendEditType2) {
  EditParams_FrontendEditType2[EditParams_FrontendEditType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  EditParams_FrontendEditType2[EditParams_FrontendEditType2["INLINE_DIFFS"] = 1] = "INLINE_DIFFS";
  EditParams_FrontendEditType2[EditParams_FrontendEditType2["SIMPLE"] = 2] = "SIMPLE";
})(EditParams_FrontendEditType! || (EditParams_FrontendEditType = {} as typeof EditParams_FrontendEditType));
proto3.util.setEnumType(EditParams_FrontendEditType, "aiserver.v1.EditParams.FrontendEditType", [
  { no: 0, name: "FRONTEND_EDIT_TYPE_UNSPECIFIED" },
  { no: 1, name: "FRONTEND_EDIT_TYPE_INLINE_DIFFS" },
  { no: 2, name: "FRONTEND_EDIT_TYPE_SIMPLE" }
]);
var EditResult2$Runtime = (() => class _EditResult extends Message<_EditResult> {
  declare feedback: string[];
  declare contextStartLineNumber: number;
  declare contextLines: string[];
  declare file: string;
  declare fileTotalLines: number;
  declare structuredFeedback: EditResult_Feedback[];
  constructor(data?: PartialMessage<_EditResult>) {
    super();
    this.feedback = [];
    this.contextStartLineNumber = 0;
    this.contextLines = [];
    this.file = "";
    this.fileTotalLines = 0;
    this.structuredFeedback = [];
    proto3.util.initPartial(data, this as _EditResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditResult {
    return new _EditResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditResult {
    return new _EditResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditResult {
    return new _EditResult().fromJsonString(jsonString, options);
  }
  static equals(a: _EditResult | PlainMessage<_EditResult> | undefined | null, b2: _EditResult | PlainMessage<_EditResult> | undefined | null): boolean {
    return proto3.util.equals(_EditResult as unknown as MessageType<_EditResult>, a, b2);
  }
})();
export type EditResult2 = InstanceType<typeof EditResult2$Runtime>;
var EditResult2: MessageType<EditResult2> = EditResult2$Runtime as unknown as MessageType<EditResult2>;
(EditResult2 as MutableMessageType<EditResult2>).runtime = proto3;
(EditResult2 as MutableMessageType<EditResult2>).typeName = "aiserver.v1.EditResult";
(EditResult2 as MutableMessageType<EditResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "feedback", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "context_start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "context_lines", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "file_total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 6, name: "structured_feedback", kind: "message", T: EditResult_Feedback, repeated: true }
]);
var EditResult_RelatedInformation$Runtime = (() => class _EditResult_RelatedInformation extends Message<_EditResult_RelatedInformation> {
  declare message: string;
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_EditResult_RelatedInformation>) {
    super();
    this.message = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _EditResult_RelatedInformation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditResult_RelatedInformation {
    return new _EditResult_RelatedInformation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditResult_RelatedInformation {
    return new _EditResult_RelatedInformation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditResult_RelatedInformation {
    return new _EditResult_RelatedInformation().fromJsonString(jsonString, options);
  }
  static equals(a: _EditResult_RelatedInformation | PlainMessage<_EditResult_RelatedInformation> | undefined | null, b2: _EditResult_RelatedInformation | PlainMessage<_EditResult_RelatedInformation> | undefined | null): boolean {
    return proto3.util.equals(_EditResult_RelatedInformation as unknown as MessageType<_EditResult_RelatedInformation>, a, b2);
  }
})();
export type EditResult_RelatedInformation = InstanceType<typeof EditResult_RelatedInformation$Runtime>;
var EditResult_RelatedInformation: MessageType<EditResult_RelatedInformation> = EditResult_RelatedInformation$Runtime as unknown as MessageType<EditResult_RelatedInformation>;
(EditResult_RelatedInformation as MutableMessageType<EditResult_RelatedInformation>).runtime = proto3;
(EditResult_RelatedInformation as MutableMessageType<EditResult_RelatedInformation>).typeName = "aiserver.v1.EditResult.RelatedInformation";
(EditResult_RelatedInformation as MutableMessageType<EditResult_RelatedInformation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var EditResult_Feedback$Runtime = (() => class _EditResult_Feedback extends Message<_EditResult_Feedback> {
  declare message: string;
  declare severity: string;
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare relatedInformation: EditResult_RelatedInformation[];
  constructor(data?: PartialMessage<_EditResult_Feedback>) {
    super();
    this.message = "";
    this.severity = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relatedInformation = [];
    proto3.util.initPartial(data, this as _EditResult_Feedback);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _EditResult_Feedback {
    return new _EditResult_Feedback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _EditResult_Feedback {
    return new _EditResult_Feedback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _EditResult_Feedback {
    return new _EditResult_Feedback().fromJsonString(jsonString, options);
  }
  static equals(a: _EditResult_Feedback | PlainMessage<_EditResult_Feedback> | undefined | null, b2: _EditResult_Feedback | PlainMessage<_EditResult_Feedback> | undefined | null): boolean {
    return proto3.util.equals(_EditResult_Feedback as unknown as MessageType<_EditResult_Feedback>, a, b2);
  }
})();
export type EditResult_Feedback = InstanceType<typeof EditResult_Feedback$Runtime>;
var EditResult_Feedback: MessageType<EditResult_Feedback> = EditResult_Feedback$Runtime as unknown as MessageType<EditResult_Feedback>;
(EditResult_Feedback as MutableMessageType<EditResult_Feedback>).runtime = proto3;
(EditResult_Feedback as MutableMessageType<EditResult_Feedback>).typeName = "aiserver.v1.EditResult.Feedback";
(EditResult_Feedback as MutableMessageType<EditResult_Feedback>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "related_information", kind: "message", T: EditResult_RelatedInformation, repeated: true }
]);
var AddTestParams$Runtime = (() => class _AddTestParams extends Message<_AddTestParams> {
  declare relativeWorkspacePath: string;
  declare testName: string;
  declare testCode: string;
  constructor(data?: PartialMessage<_AddTestParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.testName = "";
    this.testCode = "";
    proto3.util.initPartial(data, this as _AddTestParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTestParams {
    return new _AddTestParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTestParams {
    return new _AddTestParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTestParams {
    return new _AddTestParams().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTestParams | PlainMessage<_AddTestParams> | undefined | null, b2: _AddTestParams | PlainMessage<_AddTestParams> | undefined | null): boolean {
    return proto3.util.equals(_AddTestParams as unknown as MessageType<_AddTestParams>, a, b2);
  }
})();
export type AddTestParams = InstanceType<typeof AddTestParams$Runtime>;
var AddTestParams: MessageType<AddTestParams> = AddTestParams$Runtime as unknown as MessageType<AddTestParams>;
(AddTestParams as MutableMessageType<AddTestParams>).runtime = proto3;
(AddTestParams as MutableMessageType<AddTestParams>).typeName = "aiserver.v1.AddTestParams";
(AddTestParams as MutableMessageType<AddTestParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "test_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "test_code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AddTestResult$Runtime = (() => class _AddTestResult extends Message<_AddTestResult> {
  declare feedback: AddTestResult_Feedback[];
  constructor(data?: PartialMessage<_AddTestResult>) {
    super();
    this.feedback = [];
    proto3.util.initPartial(data, this as _AddTestResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTestResult {
    return new _AddTestResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTestResult {
    return new _AddTestResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTestResult {
    return new _AddTestResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTestResult | PlainMessage<_AddTestResult> | undefined | null, b2: _AddTestResult | PlainMessage<_AddTestResult> | undefined | null): boolean {
    return proto3.util.equals(_AddTestResult as unknown as MessageType<_AddTestResult>, a, b2);
  }
})();
export type AddTestResult = InstanceType<typeof AddTestResult$Runtime>;
var AddTestResult: MessageType<AddTestResult> = AddTestResult$Runtime as unknown as MessageType<AddTestResult>;
(AddTestResult as MutableMessageType<AddTestResult>).runtime = proto3;
(AddTestResult as MutableMessageType<AddTestResult>).typeName = "aiserver.v1.AddTestResult";
(AddTestResult as MutableMessageType<AddTestResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "feedback", kind: "message", T: AddTestResult_Feedback, repeated: true }
]);
var AddTestResult_RelatedInformation$Runtime = (() => class _AddTestResult_RelatedInformation extends Message<_AddTestResult_RelatedInformation> {
  declare message: string;
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_AddTestResult_RelatedInformation>) {
    super();
    this.message = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _AddTestResult_RelatedInformation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTestResult_RelatedInformation {
    return new _AddTestResult_RelatedInformation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTestResult_RelatedInformation {
    return new _AddTestResult_RelatedInformation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTestResult_RelatedInformation {
    return new _AddTestResult_RelatedInformation().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTestResult_RelatedInformation | PlainMessage<_AddTestResult_RelatedInformation> | undefined | null, b2: _AddTestResult_RelatedInformation | PlainMessage<_AddTestResult_RelatedInformation> | undefined | null): boolean {
    return proto3.util.equals(_AddTestResult_RelatedInformation as unknown as MessageType<_AddTestResult_RelatedInformation>, a, b2);
  }
})();
export type AddTestResult_RelatedInformation = InstanceType<typeof AddTestResult_RelatedInformation$Runtime>;
var AddTestResult_RelatedInformation: MessageType<AddTestResult_RelatedInformation> = AddTestResult_RelatedInformation$Runtime as unknown as MessageType<AddTestResult_RelatedInformation>;
(AddTestResult_RelatedInformation as MutableMessageType<AddTestResult_RelatedInformation>).runtime = proto3;
(AddTestResult_RelatedInformation as MutableMessageType<AddTestResult_RelatedInformation>).typeName = "aiserver.v1.AddTestResult.RelatedInformation";
(AddTestResult_RelatedInformation as MutableMessageType<AddTestResult_RelatedInformation>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AddTestResult_Feedback$Runtime = (() => class _AddTestResult_Feedback extends Message<_AddTestResult_Feedback> {
  declare message: string;
  declare severity: string;
  declare startLineNumber: number;
  declare endLineNumber: number;
  declare relatedInformation: AddTestResult_RelatedInformation[];
  constructor(data?: PartialMessage<_AddTestResult_Feedback>) {
    super();
    this.message = "";
    this.severity = "";
    this.startLineNumber = 0;
    this.endLineNumber = 0;
    this.relatedInformation = [];
    proto3.util.initPartial(data, this as _AddTestResult_Feedback);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AddTestResult_Feedback {
    return new _AddTestResult_Feedback().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AddTestResult_Feedback {
    return new _AddTestResult_Feedback().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AddTestResult_Feedback {
    return new _AddTestResult_Feedback().fromJsonString(jsonString, options);
  }
  static equals(a: _AddTestResult_Feedback | PlainMessage<_AddTestResult_Feedback> | undefined | null, b2: _AddTestResult_Feedback | PlainMessage<_AddTestResult_Feedback> | undefined | null): boolean {
    return proto3.util.equals(_AddTestResult_Feedback as unknown as MessageType<_AddTestResult_Feedback>, a, b2);
  }
})();
export type AddTestResult_Feedback = InstanceType<typeof AddTestResult_Feedback$Runtime>;
var AddTestResult_Feedback: MessageType<AddTestResult_Feedback> = AddTestResult_Feedback$Runtime as unknown as MessageType<AddTestResult_Feedback>;
(AddTestResult_Feedback as MutableMessageType<AddTestResult_Feedback>).runtime = proto3;
(AddTestResult_Feedback as MutableMessageType<AddTestResult_Feedback>).typeName = "aiserver.v1.AddTestResult.Feedback";
(AddTestResult_Feedback as MutableMessageType<AddTestResult_Feedback>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "severity",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "end_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 5, name: "related_information", kind: "message", T: AddTestResult_RelatedInformation, repeated: true }
]);
var RunTestParams$Runtime = (() => class _RunTestParams extends Message<_RunTestParams> {
  declare relativeWorkspacePath: string;
  declare testName?: string;
  constructor(data?: PartialMessage<_RunTestParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _RunTestParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTestParams {
    return new _RunTestParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTestParams {
    return new _RunTestParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTestParams {
    return new _RunTestParams().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTestParams | PlainMessage<_RunTestParams> | undefined | null, b2: _RunTestParams | PlainMessage<_RunTestParams> | undefined | null): boolean {
    return proto3.util.equals(_RunTestParams as unknown as MessageType<_RunTestParams>, a, b2);
  }
})();
export type RunTestParams = InstanceType<typeof RunTestParams$Runtime>;
var RunTestParams: MessageType<RunTestParams> = RunTestParams$Runtime as unknown as MessageType<RunTestParams>;
(RunTestParams as MutableMessageType<RunTestParams>).runtime = proto3;
(RunTestParams as MutableMessageType<RunTestParams>).typeName = "aiserver.v1.RunTestParams";
(RunTestParams as MutableMessageType<RunTestParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "test_name", kind: "scalar", T: 9, opt: true }
]);
var RunTestResult$Runtime = (() => class _RunTestResult extends Message<_RunTestResult> {
  declare result: string;
  constructor(data?: PartialMessage<_RunTestResult>) {
    super();
    this.result = "";
    proto3.util.initPartial(data, this as _RunTestResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTestResult {
    return new _RunTestResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTestResult {
    return new _RunTestResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTestResult {
    return new _RunTestResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTestResult | PlainMessage<_RunTestResult> | undefined | null, b2: _RunTestResult | PlainMessage<_RunTestResult> | undefined | null): boolean {
    return proto3.util.equals(_RunTestResult as unknown as MessageType<_RunTestResult>, a, b2);
  }
})();
export type RunTestResult = InstanceType<typeof RunTestResult$Runtime>;
var RunTestResult: MessageType<RunTestResult> = RunTestResult$Runtime as unknown as MessageType<RunTestResult>;
(RunTestResult as MutableMessageType<RunTestResult>).runtime = proto3;
(RunTestResult as MutableMessageType<RunTestResult>).typeName = "aiserver.v1.RunTestResult";
(RunTestResult as MutableMessageType<RunTestResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "result",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetTestsParams$Runtime = (() => class _GetTestsParams extends Message<_GetTestsParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_GetTestsParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _GetTestsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetTestsParams {
    return new _GetTestsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetTestsParams {
    return new _GetTestsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetTestsParams {
    return new _GetTestsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GetTestsParams | PlainMessage<_GetTestsParams> | undefined | null, b2: _GetTestsParams | PlainMessage<_GetTestsParams> | undefined | null): boolean {
    return proto3.util.equals(_GetTestsParams as unknown as MessageType<_GetTestsParams>, a, b2);
  }
})();
export type GetTestsParams = InstanceType<typeof GetTestsParams$Runtime>;
var GetTestsParams: MessageType<GetTestsParams> = GetTestsParams$Runtime as unknown as MessageType<GetTestsParams>;
(GetTestsParams as MutableMessageType<GetTestsParams>).runtime = proto3;
(GetTestsParams as MutableMessageType<GetTestsParams>).typeName = "aiserver.v1.GetTestsParams";
(GetTestsParams as MutableMessageType<GetTestsParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetTestsResult$Runtime = (() => class _GetTestsResult extends Message<_GetTestsResult> {
  declare tests: GetTestsResult_Test[];
  constructor(data?: PartialMessage<_GetTestsResult>) {
    super();
    this.tests = [];
    proto3.util.initPartial(data, this as _GetTestsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetTestsResult {
    return new _GetTestsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetTestsResult {
    return new _GetTestsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetTestsResult {
    return new _GetTestsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetTestsResult | PlainMessage<_GetTestsResult> | undefined | null, b2: _GetTestsResult | PlainMessage<_GetTestsResult> | undefined | null): boolean {
    return proto3.util.equals(_GetTestsResult as unknown as MessageType<_GetTestsResult>, a, b2);
  }
})();
export type GetTestsResult = InstanceType<typeof GetTestsResult$Runtime>;
var GetTestsResult: MessageType<GetTestsResult> = GetTestsResult$Runtime as unknown as MessageType<GetTestsResult>;
(GetTestsResult as MutableMessageType<GetTestsResult>).runtime = proto3;
(GetTestsResult as MutableMessageType<GetTestsResult>).typeName = "aiserver.v1.GetTestsResult";
(GetTestsResult as MutableMessageType<GetTestsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tests", kind: "message", T: GetTestsResult_Test, repeated: true }
]);
var GetTestsResult_Test$Runtime = (() => class _GetTestsResult_Test extends Message<_GetTestsResult_Test> {
  declare name: string;
  declare lines: string[];
  constructor(data?: PartialMessage<_GetTestsResult_Test>) {
    super();
    this.name = "";
    this.lines = [];
    proto3.util.initPartial(data, this as _GetTestsResult_Test);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetTestsResult_Test {
    return new _GetTestsResult_Test().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetTestsResult_Test {
    return new _GetTestsResult_Test().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetTestsResult_Test {
    return new _GetTestsResult_Test().fromJsonString(jsonString, options);
  }
  static equals(a: _GetTestsResult_Test | PlainMessage<_GetTestsResult_Test> | undefined | null, b2: _GetTestsResult_Test | PlainMessage<_GetTestsResult_Test> | undefined | null): boolean {
    return proto3.util.equals(_GetTestsResult_Test as unknown as MessageType<_GetTestsResult_Test>, a, b2);
  }
})();
export type GetTestsResult_Test = InstanceType<typeof GetTestsResult_Test$Runtime>;
var GetTestsResult_Test: MessageType<GetTestsResult_Test> = GetTestsResult_Test$Runtime as unknown as MessageType<GetTestsResult_Test>;
(GetTestsResult_Test as MutableMessageType<GetTestsResult_Test>).runtime = proto3;
(GetTestsResult_Test as MutableMessageType<GetTestsResult_Test>).typeName = "aiserver.v1.GetTestsResult.Test";
(GetTestsResult_Test as MutableMessageType<GetTestsResult_Test>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "lines", kind: "scalar", T: 9, repeated: true }
]);
var DeleteTestParams$Runtime = (() => class _DeleteTestParams extends Message<_DeleteTestParams> {
  declare relativeWorkspacePath: string;
  declare testName?: string;
  constructor(data?: PartialMessage<_DeleteTestParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _DeleteTestParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteTestParams {
    return new _DeleteTestParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteTestParams {
    return new _DeleteTestParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteTestParams {
    return new _DeleteTestParams().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteTestParams | PlainMessage<_DeleteTestParams> | undefined | null, b2: _DeleteTestParams | PlainMessage<_DeleteTestParams> | undefined | null): boolean {
    return proto3.util.equals(_DeleteTestParams as unknown as MessageType<_DeleteTestParams>, a, b2);
  }
})();
export type DeleteTestParams = InstanceType<typeof DeleteTestParams$Runtime>;
var DeleteTestParams: MessageType<DeleteTestParams> = DeleteTestParams$Runtime as unknown as MessageType<DeleteTestParams>;
(DeleteTestParams as MutableMessageType<DeleteTestParams>).runtime = proto3;
(DeleteTestParams as MutableMessageType<DeleteTestParams>).typeName = "aiserver.v1.DeleteTestParams";
(DeleteTestParams as MutableMessageType<DeleteTestParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "test_name", kind: "scalar", T: 9, opt: true }
]);
var DeleteTestResult$Runtime = (() => class _DeleteTestResult extends Message<_DeleteTestResult> {
  constructor(data?: PartialMessage<_DeleteTestResult>) {
    super();
    proto3.util.initPartial(data, this as _DeleteTestResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeleteTestResult {
    return new _DeleteTestResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeleteTestResult {
    return new _DeleteTestResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeleteTestResult {
    return new _DeleteTestResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DeleteTestResult | PlainMessage<_DeleteTestResult> | undefined | null, b2: _DeleteTestResult | PlainMessage<_DeleteTestResult> | undefined | null): boolean {
    return proto3.util.equals(_DeleteTestResult as unknown as MessageType<_DeleteTestResult>, a, b2);
  }
})();
export type DeleteTestResult = InstanceType<typeof DeleteTestResult$Runtime>;
var DeleteTestResult: MessageType<DeleteTestResult> = DeleteTestResult$Runtime as unknown as MessageType<DeleteTestResult>;
(DeleteTestResult as MutableMessageType<DeleteTestResult>).runtime = proto3;
(DeleteTestResult as MutableMessageType<DeleteTestResult>).typeName = "aiserver.v1.DeleteTestResult";
(DeleteTestResult as MutableMessageType<DeleteTestResult>).fields = proto3.util.newFieldList(() => []);
var SaveFileParams$Runtime = (() => class _SaveFileParams extends Message<_SaveFileParams> {
  declare relativeWorkspacePath: string;
  constructor(data?: PartialMessage<_SaveFileParams>) {
    super();
    this.relativeWorkspacePath = "";
    proto3.util.initPartial(data, this as _SaveFileParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SaveFileParams {
    return new _SaveFileParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SaveFileParams {
    return new _SaveFileParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SaveFileParams {
    return new _SaveFileParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SaveFileParams | PlainMessage<_SaveFileParams> | undefined | null, b2: _SaveFileParams | PlainMessage<_SaveFileParams> | undefined | null): boolean {
    return proto3.util.equals(_SaveFileParams as unknown as MessageType<_SaveFileParams>, a, b2);
  }
})();
export type SaveFileParams = InstanceType<typeof SaveFileParams$Runtime>;
var SaveFileParams: MessageType<SaveFileParams> = SaveFileParams$Runtime as unknown as MessageType<SaveFileParams>;
(SaveFileParams as MutableMessageType<SaveFileParams>).runtime = proto3;
(SaveFileParams as MutableMessageType<SaveFileParams>).typeName = "aiserver.v1.SaveFileParams";
(SaveFileParams as MutableMessageType<SaveFileParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SaveFileResult$Runtime = (() => class _SaveFileResult extends Message<_SaveFileResult> {
  constructor(data?: PartialMessage<_SaveFileResult>) {
    super();
    proto3.util.initPartial(data, this as _SaveFileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SaveFileResult {
    return new _SaveFileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SaveFileResult {
    return new _SaveFileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SaveFileResult {
    return new _SaveFileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SaveFileResult | PlainMessage<_SaveFileResult> | undefined | null, b2: _SaveFileResult | PlainMessage<_SaveFileResult> | undefined | null): boolean {
    return proto3.util.equals(_SaveFileResult as unknown as MessageType<_SaveFileResult>, a, b2);
  }
})();
export type SaveFileResult = InstanceType<typeof SaveFileResult$Runtime>;
var SaveFileResult: MessageType<SaveFileResult> = SaveFileResult$Runtime as unknown as MessageType<SaveFileResult>;
(SaveFileResult as MutableMessageType<SaveFileResult>).runtime = proto3;
(SaveFileResult as MutableMessageType<SaveFileResult>).typeName = "aiserver.v1.SaveFileResult";
(SaveFileResult as MutableMessageType<SaveFileResult>).fields = proto3.util.newFieldList(() => []);
var GetSymbolsParams$Runtime = (() => class _GetSymbolsParams extends Message<_GetSymbolsParams> {
  declare relativeWorkspacePath: string;
  declare lineRange?: GetSymbolsParams_LineRange;
  declare includeChildren: boolean;
  constructor(data?: PartialMessage<_GetSymbolsParams>) {
    super();
    this.relativeWorkspacePath = "";
    this.includeChildren = false;
    proto3.util.initPartial(data, this as _GetSymbolsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSymbolsParams {
    return new _GetSymbolsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSymbolsParams {
    return new _GetSymbolsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSymbolsParams {
    return new _GetSymbolsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSymbolsParams | PlainMessage<_GetSymbolsParams> | undefined | null, b2: _GetSymbolsParams | PlainMessage<_GetSymbolsParams> | undefined | null): boolean {
    return proto3.util.equals(_GetSymbolsParams as unknown as MessageType<_GetSymbolsParams>, a, b2);
  }
})();
export type GetSymbolsParams = InstanceType<typeof GetSymbolsParams$Runtime>;
var GetSymbolsParams: MessageType<GetSymbolsParams> = GetSymbolsParams$Runtime as unknown as MessageType<GetSymbolsParams>;
(GetSymbolsParams as MutableMessageType<GetSymbolsParams>).runtime = proto3;
(GetSymbolsParams as MutableMessageType<GetSymbolsParams>).typeName = "aiserver.v1.GetSymbolsParams";
(GetSymbolsParams as MutableMessageType<GetSymbolsParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "relative_workspace_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "line_range", kind: "message", T: GetSymbolsParams_LineRange, opt: true },
  {
    no: 3,
    name: "include_children",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetSymbolsParams_LineRange$Runtime = (() => class _GetSymbolsParams_LineRange extends Message<_GetSymbolsParams_LineRange> {
  declare startLineNumber: number;
  declare endLineNumberInclusive: number;
  constructor(data?: PartialMessage<_GetSymbolsParams_LineRange>) {
    super();
    this.startLineNumber = 0;
    this.endLineNumberInclusive = 0;
    proto3.util.initPartial(data, this as _GetSymbolsParams_LineRange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSymbolsParams_LineRange {
    return new _GetSymbolsParams_LineRange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSymbolsParams_LineRange {
    return new _GetSymbolsParams_LineRange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSymbolsParams_LineRange {
    return new _GetSymbolsParams_LineRange().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSymbolsParams_LineRange | PlainMessage<_GetSymbolsParams_LineRange> | undefined | null, b2: _GetSymbolsParams_LineRange | PlainMessage<_GetSymbolsParams_LineRange> | undefined | null): boolean {
    return proto3.util.equals(_GetSymbolsParams_LineRange as unknown as MessageType<_GetSymbolsParams_LineRange>, a, b2);
  }
})();
export type GetSymbolsParams_LineRange = InstanceType<typeof GetSymbolsParams_LineRange$Runtime>;
var GetSymbolsParams_LineRange: MessageType<GetSymbolsParams_LineRange> = GetSymbolsParams_LineRange$Runtime as unknown as MessageType<GetSymbolsParams_LineRange>;
(GetSymbolsParams_LineRange as MutableMessageType<GetSymbolsParams_LineRange>).runtime = proto3;
(GetSymbolsParams_LineRange as MutableMessageType<GetSymbolsParams_LineRange>).typeName = "aiserver.v1.GetSymbolsParams.LineRange";
(GetSymbolsParams_LineRange as MutableMessageType<GetSymbolsParams_LineRange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "end_line_number_inclusive",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetSymbolsResult$Runtime = (() => class _GetSymbolsResult extends Message<_GetSymbolsResult> {
  declare symbols: DocumentSymbol[];
  constructor(data?: PartialMessage<_GetSymbolsResult>) {
    super();
    this.symbols = [];
    proto3.util.initPartial(data, this as _GetSymbolsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetSymbolsResult {
    return new _GetSymbolsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetSymbolsResult {
    return new _GetSymbolsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetSymbolsResult {
    return new _GetSymbolsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetSymbolsResult | PlainMessage<_GetSymbolsResult> | undefined | null, b2: _GetSymbolsResult | PlainMessage<_GetSymbolsResult> | undefined | null): boolean {
    return proto3.util.equals(_GetSymbolsResult as unknown as MessageType<_GetSymbolsResult>, a, b2);
  }
})();
export type GetSymbolsResult = InstanceType<typeof GetSymbolsResult$Runtime>;
var GetSymbolsResult: MessageType<GetSymbolsResult> = GetSymbolsResult$Runtime as unknown as MessageType<GetSymbolsResult>;
(GetSymbolsResult as MutableMessageType<GetSymbolsResult>).runtime = proto3;
(GetSymbolsResult as MutableMessageType<GetSymbolsResult>).typeName = "aiserver.v1.GetSymbolsResult";
(GetSymbolsResult as MutableMessageType<GetSymbolsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "symbols", kind: "message", T: DocumentSymbol, repeated: true }
]);
var ShellCommandParsingResult2$Runtime = (() => class _ShellCommandParsingResult extends Message<_ShellCommandParsingResult> {
  declare parsingFailed: boolean;
  declare executableCommands: ShellCommandParsingResult_ExecutableCommand2[];
  declare hasRedirects: boolean;
  declare hasCommandSubstitution: boolean;
  declare allRedirectsAreDevNull?: boolean;
  declare redirects: ShellCommandParsingResult_Redirect2[];
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
export type ShellCommandParsingResult2 = InstanceType<typeof ShellCommandParsingResult2$Runtime>;
var ShellCommandParsingResult2: MessageType<ShellCommandParsingResult2> = ShellCommandParsingResult2$Runtime as unknown as MessageType<ShellCommandParsingResult2>;
(ShellCommandParsingResult2 as MutableMessageType<ShellCommandParsingResult2>).runtime = proto3;
(ShellCommandParsingResult2 as MutableMessageType<ShellCommandParsingResult2>).typeName = "aiserver.v1.ShellCommandParsingResult";
(ShellCommandParsingResult2 as MutableMessageType<ShellCommandParsingResult2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "parsing_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "executable_commands", kind: "message", T: ShellCommandParsingResult_ExecutableCommand2, repeated: true },
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
  { no: 6, name: "redirects", kind: "message", T: ShellCommandParsingResult_Redirect2, repeated: true }
]);
var ShellCommandParsingResult_ExecutableCommandArg2$Runtime = (() => class _ShellCommandParsingResult_ExecutableCommandArg extends Message<_ShellCommandParsingResult_ExecutableCommandArg> {
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
export type ShellCommandParsingResult_ExecutableCommandArg2 = InstanceType<typeof ShellCommandParsingResult_ExecutableCommandArg2$Runtime>;
var ShellCommandParsingResult_ExecutableCommandArg2: MessageType<ShellCommandParsingResult_ExecutableCommandArg2> = ShellCommandParsingResult_ExecutableCommandArg2$Runtime as unknown as MessageType<ShellCommandParsingResult_ExecutableCommandArg2>;
(ShellCommandParsingResult_ExecutableCommandArg2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg2>).runtime = proto3;
(ShellCommandParsingResult_ExecutableCommandArg2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg2>).typeName = "aiserver.v1.ShellCommandParsingResult.ExecutableCommandArg";
(ShellCommandParsingResult_ExecutableCommandArg2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommandArg2>).fields = proto3.util.newFieldList(() => [
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
var ShellCommandParsingResult_ExecutableCommand2$Runtime = (() => class _ShellCommandParsingResult_ExecutableCommand extends Message<_ShellCommandParsingResult_ExecutableCommand> {
  declare name: string;
  declare args: ShellCommandParsingResult_ExecutableCommandArg2[];
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
export type ShellCommandParsingResult_ExecutableCommand2 = InstanceType<typeof ShellCommandParsingResult_ExecutableCommand2$Runtime>;
var ShellCommandParsingResult_ExecutableCommand2: MessageType<ShellCommandParsingResult_ExecutableCommand2> = ShellCommandParsingResult_ExecutableCommand2$Runtime as unknown as MessageType<ShellCommandParsingResult_ExecutableCommand2>;
(ShellCommandParsingResult_ExecutableCommand2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommand2>).runtime = proto3;
(ShellCommandParsingResult_ExecutableCommand2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommand2>).typeName = "aiserver.v1.ShellCommandParsingResult.ExecutableCommand";
(ShellCommandParsingResult_ExecutableCommand2 as MutableMessageType<ShellCommandParsingResult_ExecutableCommand2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "args", kind: "message", T: ShellCommandParsingResult_ExecutableCommandArg2, repeated: true },
  {
    no: 3,
    name: "full_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellCommandParsingResult_Redirect2$Runtime = (() => class _ShellCommandParsingResult_Redirect extends Message<_ShellCommandParsingResult_Redirect> {
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
export type ShellCommandParsingResult_Redirect2 = InstanceType<typeof ShellCommandParsingResult_Redirect2$Runtime>;
var ShellCommandParsingResult_Redirect2: MessageType<ShellCommandParsingResult_Redirect2> = ShellCommandParsingResult_Redirect2$Runtime as unknown as MessageType<ShellCommandParsingResult_Redirect2>;
(ShellCommandParsingResult_Redirect2 as MutableMessageType<ShellCommandParsingResult_Redirect2>).runtime = proto3;
(ShellCommandParsingResult_Redirect2 as MutableMessageType<ShellCommandParsingResult_Redirect2>).typeName = "aiserver.v1.ShellCommandParsingResult.Redirect";
(ShellCommandParsingResult_Redirect2 as MutableMessageType<ShellCommandParsingResult_Redirect2>).fields = proto3.util.newFieldList(() => [
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
var RunTerminalCommandV2Params$Runtime = (() => class _RunTerminalCommandV2Params extends Message<_RunTerminalCommandV2Params> {
  declare command: string;
  declare cwd?: string;
  declare newSession?: boolean;
  declare options?: RunTerminalCommandV2Params_ExecutionOptions;
  declare isBackground: boolean;
  declare requireUserApproval: boolean;
  declare parsingResult?: ShellCommandParsingResult2;
  declare idleTimeoutSeconds?: number;
  declare requestedSandboxPolicy?: SandboxPolicy;
  declare fileOutputThresholdBytes?: bigint;
  declare commandDescription?: string;
  declare classifierResult?: CommandClassifierResult;
  constructor(data?: PartialMessage<_RunTerminalCommandV2Params>) {
    super();
    this.command = "";
    this.isBackground = false;
    this.requireUserApproval = false;
    proto3.util.initPartial(data, this as _RunTerminalCommandV2Params);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandV2Params {
    return new _RunTerminalCommandV2Params().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Params {
    return new _RunTerminalCommandV2Params().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Params {
    return new _RunTerminalCommandV2Params().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandV2Params | PlainMessage<_RunTerminalCommandV2Params> | undefined | null, b2: _RunTerminalCommandV2Params | PlainMessage<_RunTerminalCommandV2Params> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandV2Params as unknown as MessageType<_RunTerminalCommandV2Params>, a, b2);
  }
})();
export type RunTerminalCommandV2Params = InstanceType<typeof RunTerminalCommandV2Params$Runtime>;
var RunTerminalCommandV2Params: MessageType<RunTerminalCommandV2Params> = RunTerminalCommandV2Params$Runtime as unknown as MessageType<RunTerminalCommandV2Params>;
(RunTerminalCommandV2Params as MutableMessageType<RunTerminalCommandV2Params>).runtime = proto3;
(RunTerminalCommandV2Params as MutableMessageType<RunTerminalCommandV2Params>).typeName = "aiserver.v1.RunTerminalCommandV2Params";
(RunTerminalCommandV2Params as MutableMessageType<RunTerminalCommandV2Params>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "cwd", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "new_session", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "options", kind: "message", T: RunTerminalCommandV2Params_ExecutionOptions, opt: true },
  {
    no: 5,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "require_user_approval",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "parsing_result", kind: "message", T: ShellCommandParsingResult2, opt: true },
  { no: 8, name: "idle_timeout_seconds", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "requested_sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 10, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true },
  { no: 11, name: "command_description", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "classifier_result", kind: "message", T: CommandClassifierResult, opt: true }
]);
var RunTerminalCommandV2Params_ExecutionOptions$Runtime = (() => class _RunTerminalCommandV2Params_ExecutionOptions extends Message<_RunTerminalCommandV2Params_ExecutionOptions> {
  declare timeout?: number;
  declare skipAiCheck?: boolean;
  declare commandRunTimeoutMs?: number;
  declare commandChangeCheckIntervalMs?: number;
  declare aiFinishCheckMaxAttempts?: number;
  declare aiFinishCheckIntervalMs?: number;
  declare delayerIntervalMs?: number;
  declare aiCheckForHangs?: boolean;
  constructor(data?: PartialMessage<_RunTerminalCommandV2Params_ExecutionOptions>) {
    super();
    proto3.util.initPartial(data, this as _RunTerminalCommandV2Params_ExecutionOptions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandV2Params_ExecutionOptions {
    return new _RunTerminalCommandV2Params_ExecutionOptions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Params_ExecutionOptions {
    return new _RunTerminalCommandV2Params_ExecutionOptions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Params_ExecutionOptions {
    return new _RunTerminalCommandV2Params_ExecutionOptions().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandV2Params_ExecutionOptions | PlainMessage<_RunTerminalCommandV2Params_ExecutionOptions> | undefined | null, b2: _RunTerminalCommandV2Params_ExecutionOptions | PlainMessage<_RunTerminalCommandV2Params_ExecutionOptions> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandV2Params_ExecutionOptions as unknown as MessageType<_RunTerminalCommandV2Params_ExecutionOptions>, a, b2);
  }
})();
export type RunTerminalCommandV2Params_ExecutionOptions = InstanceType<typeof RunTerminalCommandV2Params_ExecutionOptions$Runtime>;
var RunTerminalCommandV2Params_ExecutionOptions: MessageType<RunTerminalCommandV2Params_ExecutionOptions> = RunTerminalCommandV2Params_ExecutionOptions$Runtime as unknown as MessageType<RunTerminalCommandV2Params_ExecutionOptions>;
(RunTerminalCommandV2Params_ExecutionOptions as MutableMessageType<RunTerminalCommandV2Params_ExecutionOptions>).runtime = proto3;
(RunTerminalCommandV2Params_ExecutionOptions as MutableMessageType<RunTerminalCommandV2Params_ExecutionOptions>).typeName = "aiserver.v1.RunTerminalCommandV2Params.ExecutionOptions";
(RunTerminalCommandV2Params_ExecutionOptions as MutableMessageType<RunTerminalCommandV2Params_ExecutionOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "timeout", kind: "scalar", T: 5, opt: true },
  { no: 2, name: "skip_ai_check", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "command_run_timeout_ms", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "command_change_check_interval_ms", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "ai_finish_check_max_attempts", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "ai_finish_check_interval_ms", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "delayer_interval_ms", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "ai_check_for_hangs", kind: "scalar", T: 8, opt: true }
]);
var OutputLocation2$Runtime = (() => class _OutputLocation extends Message<_OutputLocation> {
  declare filePath: string;
  declare sizeBytes: bigint;
  declare lineCount: bigint;
  constructor(data?: PartialMessage<_OutputLocation>) {
    super();
    this.filePath = "";
    this.sizeBytes = protoInt64.zero;
    this.lineCount = protoInt64.zero;
    proto3.util.initPartial(data, this as _OutputLocation);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _OutputLocation {
    return new _OutputLocation().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _OutputLocation {
    return new _OutputLocation().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _OutputLocation {
    return new _OutputLocation().fromJsonString(jsonString, options);
  }
  static equals(a: _OutputLocation | PlainMessage<_OutputLocation> | undefined | null, b2: _OutputLocation | PlainMessage<_OutputLocation> | undefined | null): boolean {
    return proto3.util.equals(_OutputLocation as unknown as MessageType<_OutputLocation>, a, b2);
  }
})();
export type OutputLocation2 = InstanceType<typeof OutputLocation2$Runtime>;
var OutputLocation2: MessageType<OutputLocation2> = OutputLocation2$Runtime as unknown as MessageType<OutputLocation2>;
(OutputLocation2 as MutableMessageType<OutputLocation2>).runtime = proto3;
(OutputLocation2 as MutableMessageType<OutputLocation2>).typeName = "aiserver.v1.OutputLocation";
(OutputLocation2 as MutableMessageType<OutputLocation2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "size_bytes",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 3,
    name: "line_count",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var RunTerminalCommandV2Result$Runtime = (() => class _RunTerminalCommandV2Result extends Message<_RunTerminalCommandV2Result> {
  declare output: string;
  declare exitCode: number;
  declare rejected?: boolean;
  declare poppedOutIntoBackground: boolean;
  declare isRunningInBackground: boolean;
  declare notInterrupted: boolean;
  declare resultingWorkingDirectory: string;
  declare didUserChange: boolean;
  declare endedReason: RunTerminalCommandEndedReason;
  declare exitCodeV2?: number;
  declare updatedCommand?: string;
  declare outputRaw: string;
  declare humanReviewV2?: HumanReview;
  declare effectiveSandboxPolicy?: SandboxPolicy;
  declare terminalInstanceId?: number;
  declare outputLocation?: OutputLocation2;
  declare terminalInstancePath?: string;
  declare backgroundShellId?: number;
  constructor(data?: PartialMessage<_RunTerminalCommandV2Result>) {
    super();
    this.output = "";
    this.exitCode = 0;
    this.poppedOutIntoBackground = false;
    this.isRunningInBackground = false;
    this.notInterrupted = false;
    this.resultingWorkingDirectory = "";
    this.didUserChange = false;
    this.endedReason = RunTerminalCommandEndedReason.UNSPECIFIED;
    this.outputRaw = "";
    proto3.util.initPartial(data, this as _RunTerminalCommandV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandV2Result {
    return new _RunTerminalCommandV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Result {
    return new _RunTerminalCommandV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Result {
    return new _RunTerminalCommandV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandV2Result | PlainMessage<_RunTerminalCommandV2Result> | undefined | null, b2: _RunTerminalCommandV2Result | PlainMessage<_RunTerminalCommandV2Result> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandV2Result as unknown as MessageType<_RunTerminalCommandV2Result>, a, b2);
  }
})();
export type RunTerminalCommandV2Result = InstanceType<typeof RunTerminalCommandV2Result$Runtime>;
var RunTerminalCommandV2Result: MessageType<RunTerminalCommandV2Result> = RunTerminalCommandV2Result$Runtime as unknown as MessageType<RunTerminalCommandV2Result>;
(RunTerminalCommandV2Result as MutableMessageType<RunTerminalCommandV2Result>).runtime = proto3;
(RunTerminalCommandV2Result as MutableMessageType<RunTerminalCommandV2Result>).typeName = "aiserver.v1.RunTerminalCommandV2Result";
(RunTerminalCommandV2Result as MutableMessageType<RunTerminalCommandV2Result>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "exit_code",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true },
  {
    no: 4,
    name: "popped_out_into_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "is_running_in_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "not_interrupted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "resulting_working_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "did_user_change",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 9, name: "ended_reason", kind: "enum", T: proto3.getEnumType(RunTerminalCommandEndedReason) },
  { no: 10, name: "exit_code_v2", kind: "scalar", T: 5, opt: true },
  { no: 11, name: "updated_command", kind: "scalar", T: 9, opt: true },
  {
    no: 12,
    name: "output_raw",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 13, name: "human_review_v2", kind: "message", T: HumanReview, opt: true },
  { no: 14, name: "effective_sandbox_policy", kind: "message", T: SandboxPolicy, opt: true },
  { no: 15, name: "terminal_instance_id", kind: "scalar", T: 5, opt: true },
  { no: 16, name: "output_location", kind: "message", T: OutputLocation2, opt: true },
  { no: 17, name: "terminal_instance_path", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "background_shell_id", kind: "scalar", T: 13, opt: true }
]);
var RunTerminalCommandV2Stream$Runtime = (() => class _RunTerminalCommandV2Stream extends Message<_RunTerminalCommandV2Stream> {
  declare command: string;
  declare isBackground: boolean;
  declare parsingResult?: ShellCommandParsingResult2;
  declare idleTimeoutSeconds?: number;
  declare requestedSandboxPolicy?: SandboxPolicy;
  constructor(data?: PartialMessage<_RunTerminalCommandV2Stream>) {
    super();
    this.command = "";
    this.isBackground = false;
    proto3.util.initPartial(data, this as _RunTerminalCommandV2Stream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RunTerminalCommandV2Stream {
    return new _RunTerminalCommandV2Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Stream {
    return new _RunTerminalCommandV2Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RunTerminalCommandV2Stream {
    return new _RunTerminalCommandV2Stream().fromJsonString(jsonString, options);
  }
  static equals(a: _RunTerminalCommandV2Stream | PlainMessage<_RunTerminalCommandV2Stream> | undefined | null, b2: _RunTerminalCommandV2Stream | PlainMessage<_RunTerminalCommandV2Stream> | undefined | null): boolean {
    return proto3.util.equals(_RunTerminalCommandV2Stream as unknown as MessageType<_RunTerminalCommandV2Stream>, a, b2);
  }
})();
export type RunTerminalCommandV2Stream = InstanceType<typeof RunTerminalCommandV2Stream$Runtime>;
var RunTerminalCommandV2Stream: MessageType<RunTerminalCommandV2Stream> = RunTerminalCommandV2Stream$Runtime as unknown as MessageType<RunTerminalCommandV2Stream>;
(RunTerminalCommandV2Stream as MutableMessageType<RunTerminalCommandV2Stream>).runtime = proto3;
(RunTerminalCommandV2Stream as MutableMessageType<RunTerminalCommandV2Stream>).typeName = "aiserver.v1.RunTerminalCommandV2Stream";
(RunTerminalCommandV2Stream as MutableMessageType<RunTerminalCommandV2Stream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "parsing_result", kind: "message", T: ShellCommandParsingResult2, opt: true },
  { no: 8, name: "idle_timeout_seconds", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "requested_sandbox_policy", kind: "message", T: SandboxPolicy, opt: true }
]);
var FetchRulesStream$Runtime = (() => class _FetchRulesStream extends Message<_FetchRulesStream> {
  declare ruleNames: string[];
  constructor(data?: PartialMessage<_FetchRulesStream>) {
    super();
    this.ruleNames = [];
    proto3.util.initPartial(data, this as _FetchRulesStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchRulesStream {
    return new _FetchRulesStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchRulesStream {
    return new _FetchRulesStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchRulesStream {
    return new _FetchRulesStream().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchRulesStream | PlainMessage<_FetchRulesStream> | undefined | null, b2: _FetchRulesStream | PlainMessage<_FetchRulesStream> | undefined | null): boolean {
    return proto3.util.equals(_FetchRulesStream as unknown as MessageType<_FetchRulesStream>, a, b2);
  }
})();
export type FetchRulesStream = InstanceType<typeof FetchRulesStream$Runtime>;
var FetchRulesStream: MessageType<FetchRulesStream> = FetchRulesStream$Runtime as unknown as MessageType<FetchRulesStream>;
(FetchRulesStream as MutableMessageType<FetchRulesStream>).runtime = proto3;
(FetchRulesStream as MutableMessageType<FetchRulesStream>).typeName = "aiserver.v1.FetchRulesStream";
(FetchRulesStream as MutableMessageType<FetchRulesStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "rule_names", kind: "scalar", T: 9, repeated: true }
]);
var WebSearchParams$Runtime = (() => class _WebSearchParams extends Message<_WebSearchParams> {
  declare searchTerm: string;
  constructor(data?: PartialMessage<_WebSearchParams>) {
    super();
    this.searchTerm = "";
    proto3.util.initPartial(data, this as _WebSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchParams {
    return new _WebSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchParams {
    return new _WebSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchParams {
    return new _WebSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchParams | PlainMessage<_WebSearchParams> | undefined | null, b2: _WebSearchParams | PlainMessage<_WebSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchParams as unknown as MessageType<_WebSearchParams>, a, b2);
  }
})();
export type WebSearchParams = InstanceType<typeof WebSearchParams$Runtime>;
var WebSearchParams: MessageType<WebSearchParams> = WebSearchParams$Runtime as unknown as MessageType<WebSearchParams>;
(WebSearchParams as MutableMessageType<WebSearchParams>).runtime = proto3;
(WebSearchParams as MutableMessageType<WebSearchParams>).typeName = "aiserver.v1.WebSearchParams";
(WebSearchParams as MutableMessageType<WebSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "search_term",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebSearchResult2$Runtime = (() => class _WebSearchResult extends Message<_WebSearchResult> {
  declare references: WebSearchResult_WebReference[];
  declare isFinal?: boolean;
  declare rejected?: boolean;
  constructor(data?: PartialMessage<_WebSearchResult>) {
    super();
    this.references = [];
    proto3.util.initPartial(data, this as _WebSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchResult {
    return new _WebSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchResult | PlainMessage<_WebSearchResult> | undefined | null, b2: _WebSearchResult | PlainMessage<_WebSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchResult as unknown as MessageType<_WebSearchResult>, a, b2);
  }
})();
export type WebSearchResult2 = InstanceType<typeof WebSearchResult2$Runtime>;
var WebSearchResult2: MessageType<WebSearchResult2> = WebSearchResult2$Runtime as unknown as MessageType<WebSearchResult2>;
(WebSearchResult2 as MutableMessageType<WebSearchResult2>).runtime = proto3;
(WebSearchResult2 as MutableMessageType<WebSearchResult2>).typeName = "aiserver.v1.WebSearchResult";
(WebSearchResult2 as MutableMessageType<WebSearchResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "references", kind: "message", T: WebSearchResult_WebReference, repeated: true },
  { no: 2, name: "is_final", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "rejected", kind: "scalar", T: 8, opt: true }
]);
var WebSearchResult_WebReference$Runtime = (() => class _WebSearchResult_WebReference extends Message<_WebSearchResult_WebReference> {
  declare title: string;
  declare url: string;
  declare chunk: string;
  constructor(data?: PartialMessage<_WebSearchResult_WebReference>) {
    super();
    this.title = "";
    this.url = "";
    this.chunk = "";
    proto3.util.initPartial(data, this as _WebSearchResult_WebReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchResult_WebReference {
    return new _WebSearchResult_WebReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchResult_WebReference {
    return new _WebSearchResult_WebReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchResult_WebReference {
    return new _WebSearchResult_WebReference().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchResult_WebReference | PlainMessage<_WebSearchResult_WebReference> | undefined | null, b2: _WebSearchResult_WebReference | PlainMessage<_WebSearchResult_WebReference> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchResult_WebReference as unknown as MessageType<_WebSearchResult_WebReference>, a, b2);
  }
})();
export type WebSearchResult_WebReference = InstanceType<typeof WebSearchResult_WebReference$Runtime>;
var WebSearchResult_WebReference: MessageType<WebSearchResult_WebReference> = WebSearchResult_WebReference$Runtime as unknown as MessageType<WebSearchResult_WebReference>;
(WebSearchResult_WebReference as MutableMessageType<WebSearchResult_WebReference>).runtime = proto3;
(WebSearchResult_WebReference as MutableMessageType<WebSearchResult_WebReference>).typeName = "aiserver.v1.WebSearchResult.WebReference";
(WebSearchResult_WebReference as MutableMessageType<WebSearchResult_WebReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "chunk",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebSearchStream$Runtime = (() => class _WebSearchStream extends Message<_WebSearchStream> {
  declare searchTerm: string;
  constructor(data?: PartialMessage<_WebSearchStream>) {
    super();
    this.searchTerm = "";
    proto3.util.initPartial(data, this as _WebSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebSearchStream {
    return new _WebSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebSearchStream {
    return new _WebSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebSearchStream {
    return new _WebSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _WebSearchStream | PlainMessage<_WebSearchStream> | undefined | null, b2: _WebSearchStream | PlainMessage<_WebSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_WebSearchStream as unknown as MessageType<_WebSearchStream>, a, b2);
  }
})();
export type WebSearchStream = InstanceType<typeof WebSearchStream$Runtime>;
var WebSearchStream: MessageType<WebSearchStream> = WebSearchStream$Runtime as unknown as MessageType<WebSearchStream>;
(WebSearchStream as MutableMessageType<WebSearchStream>).runtime = proto3;
(WebSearchStream as MutableMessageType<WebSearchStream>).typeName = "aiserver.v1.WebSearchStream";
(WebSearchStream as MutableMessageType<WebSearchStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "search_term",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MCPParams$Runtime = (() => class _MCPParams extends Message<_MCPParams> {
  declare tools: MCPParams_Tool[];
  declare fileOutputThresholdBytes?: bigint;
  constructor(data?: PartialMessage<_MCPParams>) {
    super();
    this.tools = [];
    proto3.util.initPartial(data, this as _MCPParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPParams {
    return new _MCPParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPParams {
    return new _MCPParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPParams {
    return new _MCPParams().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPParams | PlainMessage<_MCPParams> | undefined | null, b2: _MCPParams | PlainMessage<_MCPParams> | undefined | null): boolean {
    return proto3.util.equals(_MCPParams as unknown as MessageType<_MCPParams>, a, b2);
  }
})();
export type MCPParams = InstanceType<typeof MCPParams$Runtime>;
var MCPParams: MessageType<MCPParams> = MCPParams$Runtime as unknown as MessageType<MCPParams>;
(MCPParams as MutableMessageType<MCPParams>).runtime = proto3;
(MCPParams as MutableMessageType<MCPParams>).typeName = "aiserver.v1.MCPParams";
(MCPParams as MutableMessageType<MCPParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tools", kind: "message", T: MCPParams_Tool, repeated: true },
  { no: 2, name: "file_output_threshold_bytes", kind: "scalar", T: 3, opt: true }
]);
var MCPParams_Tool$Runtime = (() => class _MCPParams_Tool extends Message<_MCPParams_Tool> {
  declare name: string;
  declare description: string;
  declare parameters: string;
  declare serverName: string;
  declare transcriptDisplay?: MCPParams_TranscriptDisplay;
  constructor(data?: PartialMessage<_MCPParams_Tool>) {
    super();
    this.name = "";
    this.description = "";
    this.parameters = "";
    this.serverName = "";
    proto3.util.initPartial(data, this as _MCPParams_Tool);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPParams_Tool {
    return new _MCPParams_Tool().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPParams_Tool {
    return new _MCPParams_Tool().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPParams_Tool {
    return new _MCPParams_Tool().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPParams_Tool | PlainMessage<_MCPParams_Tool> | undefined | null, b2: _MCPParams_Tool | PlainMessage<_MCPParams_Tool> | undefined | null): boolean {
    return proto3.util.equals(_MCPParams_Tool as unknown as MessageType<_MCPParams_Tool>, a, b2);
  }
})();
export type MCPParams_Tool = InstanceType<typeof MCPParams_Tool$Runtime>;
var MCPParams_Tool: MessageType<MCPParams_Tool> = MCPParams_Tool$Runtime as unknown as MessageType<MCPParams_Tool>;
(MCPParams_Tool as MutableMessageType<MCPParams_Tool>).runtime = proto3;
(MCPParams_Tool as MutableMessageType<MCPParams_Tool>).typeName = "aiserver.v1.MCPParams.Tool";
(MCPParams_Tool as MutableMessageType<MCPParams_Tool>).fields = proto3.util.newFieldList(() => [
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
    name: "parameters",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "transcript_display", kind: "message", T: MCPParams_TranscriptDisplay, opt: true }
]);
var MCPParams_TranscriptDisplay$Runtime = (() => class _MCPParams_TranscriptDisplay extends Message<_MCPParams_TranscriptDisplay> {
  declare loading: string;
  declare success: string;
  declare error: string;
  constructor(data?: PartialMessage<_MCPParams_TranscriptDisplay>) {
    super();
    this.loading = "";
    this.success = "";
    this.error = "";
    proto3.util.initPartial(data, this as _MCPParams_TranscriptDisplay);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPParams_TranscriptDisplay {
    return new _MCPParams_TranscriptDisplay().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPParams_TranscriptDisplay {
    return new _MCPParams_TranscriptDisplay().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPParams_TranscriptDisplay {
    return new _MCPParams_TranscriptDisplay().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPParams_TranscriptDisplay | PlainMessage<_MCPParams_TranscriptDisplay> | undefined | null, b2: _MCPParams_TranscriptDisplay | PlainMessage<_MCPParams_TranscriptDisplay> | undefined | null): boolean {
    return proto3.util.equals(_MCPParams_TranscriptDisplay as unknown as MessageType<_MCPParams_TranscriptDisplay>, a, b2);
  }
})();
export type MCPParams_TranscriptDisplay = InstanceType<typeof MCPParams_TranscriptDisplay$Runtime>;
var MCPParams_TranscriptDisplay: MessageType<MCPParams_TranscriptDisplay> = MCPParams_TranscriptDisplay$Runtime as unknown as MessageType<MCPParams_TranscriptDisplay>;
(MCPParams_TranscriptDisplay as MutableMessageType<MCPParams_TranscriptDisplay>).runtime = proto3;
(MCPParams_TranscriptDisplay as MutableMessageType<MCPParams_TranscriptDisplay>).typeName = "aiserver.v1.MCPParams.TranscriptDisplay";
(MCPParams_TranscriptDisplay as MutableMessageType<MCPParams_TranscriptDisplay>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "loading",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "success",
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
var MCPResult$Runtime = (() => class _MCPResult extends Message<_MCPResult> {
  declare selectedTool: string;
  declare result: string;
  constructor(data?: PartialMessage<_MCPResult>) {
    super();
    this.selectedTool = "";
    this.result = "";
    proto3.util.initPartial(data, this as _MCPResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPResult {
    return new _MCPResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPResult {
    return new _MCPResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPResult {
    return new _MCPResult().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPResult | PlainMessage<_MCPResult> | undefined | null, b2: _MCPResult | PlainMessage<_MCPResult> | undefined | null): boolean {
    return proto3.util.equals(_MCPResult as unknown as MessageType<_MCPResult>, a, b2);
  }
})();
export type MCPResult = InstanceType<typeof MCPResult$Runtime>;
var MCPResult: MessageType<MCPResult> = MCPResult$Runtime as unknown as MessageType<MCPResult>;
(MCPResult as MutableMessageType<MCPResult>).runtime = proto3;
(MCPResult as MutableMessageType<MCPResult>).typeName = "aiserver.v1.MCPResult";
(MCPResult as MutableMessageType<MCPResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "selected_tool",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "result",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MCPStream$Runtime = (() => class _MCPStream extends Message<_MCPStream> {
  declare tools: MCPParams_Tool[];
  constructor(data?: PartialMessage<_MCPStream>) {
    super();
    this.tools = [];
    proto3.util.initPartial(data, this as _MCPStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _MCPStream {
    return new _MCPStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _MCPStream {
    return new _MCPStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _MCPStream {
    return new _MCPStream().fromJsonString(jsonString, options);
  }
  static equals(a: _MCPStream | PlainMessage<_MCPStream> | undefined | null, b2: _MCPStream | PlainMessage<_MCPStream> | undefined | null): boolean {
    return proto3.util.equals(_MCPStream as unknown as MessageType<_MCPStream>, a, b2);
  }
})();
export type MCPStream = InstanceType<typeof MCPStream$Runtime>;
var MCPStream: MessageType<MCPStream> = MCPStream$Runtime as unknown as MessageType<MCPStream>;
(MCPStream as MutableMessageType<MCPStream>).runtime = proto3;
(MCPStream as MutableMessageType<MCPStream>).typeName = "aiserver.v1.MCPStream";
(MCPStream as MutableMessageType<MCPStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "tools", kind: "message", T: MCPParams_Tool, repeated: true }
]);
var ListMcpResourcesParams$Runtime = (() => class _ListMcpResourcesParams extends Message<_ListMcpResourcesParams> {
  declare server?: string;
  constructor(data?: PartialMessage<_ListMcpResourcesParams>) {
    super();
    proto3.util.initPartial(data, this as _ListMcpResourcesParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesParams {
    return new _ListMcpResourcesParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesParams {
    return new _ListMcpResourcesParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesParams {
    return new _ListMcpResourcesParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesParams | PlainMessage<_ListMcpResourcesParams> | undefined | null, b2: _ListMcpResourcesParams | PlainMessage<_ListMcpResourcesParams> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesParams as unknown as MessageType<_ListMcpResourcesParams>, a, b2);
  }
})();
export type ListMcpResourcesParams = InstanceType<typeof ListMcpResourcesParams$Runtime>;
var ListMcpResourcesParams: MessageType<ListMcpResourcesParams> = ListMcpResourcesParams$Runtime as unknown as MessageType<ListMcpResourcesParams>;
(ListMcpResourcesParams as MutableMessageType<ListMcpResourcesParams>).runtime = proto3;
(ListMcpResourcesParams as MutableMessageType<ListMcpResourcesParams>).typeName = "aiserver.v1.ListMcpResourcesParams";
(ListMcpResourcesParams as MutableMessageType<ListMcpResourcesParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server", kind: "scalar", T: 9, opt: true }
]);
var ListMcpResourcesResult$Runtime = (() => class _ListMcpResourcesResult extends Message<_ListMcpResourcesResult> {
  declare resources: ListMcpResourcesResult_MCPResource[];
  constructor(data?: PartialMessage<_ListMcpResourcesResult>) {
    super();
    this.resources = [];
    proto3.util.initPartial(data, this as _ListMcpResourcesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesResult {
    return new _ListMcpResourcesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesResult {
    return new _ListMcpResourcesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesResult {
    return new _ListMcpResourcesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesResult | PlainMessage<_ListMcpResourcesResult> | undefined | null, b2: _ListMcpResourcesResult | PlainMessage<_ListMcpResourcesResult> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesResult as unknown as MessageType<_ListMcpResourcesResult>, a, b2);
  }
})();
export type ListMcpResourcesResult = InstanceType<typeof ListMcpResourcesResult$Runtime>;
var ListMcpResourcesResult: MessageType<ListMcpResourcesResult> = ListMcpResourcesResult$Runtime as unknown as MessageType<ListMcpResourcesResult>;
(ListMcpResourcesResult as MutableMessageType<ListMcpResourcesResult>).runtime = proto3;
(ListMcpResourcesResult as MutableMessageType<ListMcpResourcesResult>).typeName = "aiserver.v1.ListMcpResourcesResult";
(ListMcpResourcesResult as MutableMessageType<ListMcpResourcesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "resources", kind: "message", T: ListMcpResourcesResult_MCPResource, repeated: true }
]);
var ListMcpResourcesResult_MCPResource$Runtime = (() => class _ListMcpResourcesResult_MCPResource extends Message<_ListMcpResourcesResult_MCPResource> {
  declare uri: string;
  declare name?: string;
  declare description?: string;
  declare mimeType?: string;
  declare server: string;
  declare annotations: { [key: string]: string };
  constructor(data?: PartialMessage<_ListMcpResourcesResult_MCPResource>) {
    super();
    this.uri = "";
    this.server = "";
    this.annotations = {};
    proto3.util.initPartial(data, this as _ListMcpResourcesResult_MCPResource);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesResult_MCPResource {
    return new _ListMcpResourcesResult_MCPResource().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesResult_MCPResource {
    return new _ListMcpResourcesResult_MCPResource().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesResult_MCPResource {
    return new _ListMcpResourcesResult_MCPResource().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesResult_MCPResource | PlainMessage<_ListMcpResourcesResult_MCPResource> | undefined | null, b2: _ListMcpResourcesResult_MCPResource | PlainMessage<_ListMcpResourcesResult_MCPResource> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesResult_MCPResource as unknown as MessageType<_ListMcpResourcesResult_MCPResource>, a, b2);
  }
})();
export type ListMcpResourcesResult_MCPResource = InstanceType<typeof ListMcpResourcesResult_MCPResource$Runtime>;
var ListMcpResourcesResult_MCPResource: MessageType<ListMcpResourcesResult_MCPResource> = ListMcpResourcesResult_MCPResource$Runtime as unknown as MessageType<ListMcpResourcesResult_MCPResource>;
(ListMcpResourcesResult_MCPResource as MutableMessageType<ListMcpResourcesResult_MCPResource>).runtime = proto3;
(ListMcpResourcesResult_MCPResource as MutableMessageType<ListMcpResourcesResult_MCPResource>).typeName = "aiserver.v1.ListMcpResourcesResult.MCPResource";
(ListMcpResourcesResult_MCPResource as MutableMessageType<ListMcpResourcesResult_MCPResource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "annotations", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var ReadMcpResourceParams$Runtime = (() => class _ReadMcpResourceParams extends Message<_ReadMcpResourceParams> {
  declare server: string;
  declare uri: string;
  declare downloadPath?: string;
  constructor(data?: PartialMessage<_ReadMcpResourceParams>) {
    super();
    this.server = "";
    this.uri = "";
    proto3.util.initPartial(data, this as _ReadMcpResourceParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceParams {
    return new _ReadMcpResourceParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceParams {
    return new _ReadMcpResourceParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceParams {
    return new _ReadMcpResourceParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceParams | PlainMessage<_ReadMcpResourceParams> | undefined | null, b2: _ReadMcpResourceParams | PlainMessage<_ReadMcpResourceParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceParams as unknown as MessageType<_ReadMcpResourceParams>, a, b2);
  }
})();
export type ReadMcpResourceParams = InstanceType<typeof ReadMcpResourceParams$Runtime>;
var ReadMcpResourceParams: MessageType<ReadMcpResourceParams> = ReadMcpResourceParams$Runtime as unknown as MessageType<ReadMcpResourceParams>;
(ReadMcpResourceParams as MutableMessageType<ReadMcpResourceParams>).runtime = proto3;
(ReadMcpResourceParams as MutableMessageType<ReadMcpResourceParams>).typeName = "aiserver.v1.ReadMcpResourceParams";
(ReadMcpResourceParams as MutableMessageType<ReadMcpResourceParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "download_path", kind: "scalar", T: 9, opt: true }
]);
var ReadMcpResourceResult$Runtime = (() => class _ReadMcpResourceResult extends Message<_ReadMcpResourceResult> {
  declare uri: string;
  declare name?: string;
  declare description?: string;
  declare mimeType?: string;
  declare annotations: { [key: string]: string };
  declare content: { case: "text"; value: string } | { case: "blob"; value: Uint8Array } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReadMcpResourceResult>) {
    super();
    this.uri = "";
    this.content = { case: void 0 };
    this.annotations = {};
    proto3.util.initPartial(data, this as _ReadMcpResourceResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceResult {
    return new _ReadMcpResourceResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceResult {
    return new _ReadMcpResourceResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceResult {
    return new _ReadMcpResourceResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceResult | PlainMessage<_ReadMcpResourceResult> | undefined | null, b2: _ReadMcpResourceResult | PlainMessage<_ReadMcpResourceResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceResult as unknown as MessageType<_ReadMcpResourceResult>, a, b2);
  }
})();
export type ReadMcpResourceResult = InstanceType<typeof ReadMcpResourceResult$Runtime>;
var ReadMcpResourceResult: MessageType<ReadMcpResourceResult> = ReadMcpResourceResult$Runtime as unknown as MessageType<ReadMcpResourceResult>;
(ReadMcpResourceResult as MutableMessageType<ReadMcpResourceResult>).runtime = proto3;
(ReadMcpResourceResult as MutableMessageType<ReadMcpResourceResult>).typeName = "aiserver.v1.ReadMcpResourceResult";
(ReadMcpResourceResult as MutableMessageType<ReadMcpResourceResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "mime_type", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "text", kind: "scalar", T: 9, oneof: "content" },
  { no: 6, name: "blob", kind: "scalar", T: 12, oneof: "content" },
  { no: 7, name: "annotations", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var CallMcpToolParams$Runtime = (() => class _CallMcpToolParams extends Message<_CallMcpToolParams> {
  declare server: string;
  declare toolName: string;
  declare toolArgs?: Struct;
  constructor(data?: PartialMessage<_CallMcpToolParams>) {
    super();
    this.server = "";
    this.toolName = "";
    proto3.util.initPartial(data, this as _CallMcpToolParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CallMcpToolParams {
    return new _CallMcpToolParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CallMcpToolParams {
    return new _CallMcpToolParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CallMcpToolParams {
    return new _CallMcpToolParams().fromJsonString(jsonString, options);
  }
  static equals(a: _CallMcpToolParams | PlainMessage<_CallMcpToolParams> | undefined | null, b2: _CallMcpToolParams | PlainMessage<_CallMcpToolParams> | undefined | null): boolean {
    return proto3.util.equals(_CallMcpToolParams as unknown as MessageType<_CallMcpToolParams>, a, b2);
  }
})();
export type CallMcpToolParams = InstanceType<typeof CallMcpToolParams$Runtime>;
var CallMcpToolParams: MessageType<CallMcpToolParams> = CallMcpToolParams$Runtime as unknown as MessageType<CallMcpToolParams>;
(CallMcpToolParams as MutableMessageType<CallMcpToolParams>).runtime = proto3;
(CallMcpToolParams as MutableMessageType<CallMcpToolParams>).typeName = "aiserver.v1.CallMcpToolParams";
(CallMcpToolParams as MutableMessageType<CallMcpToolParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "tool_args", kind: "message", T: Struct }
]);
var CallMcpToolResult$Runtime = (() => class _CallMcpToolResult extends Message<_CallMcpToolResult> {
  declare server: string;
  declare toolName: string;
  declare result?: Struct;
  constructor(data?: PartialMessage<_CallMcpToolResult>) {
    super();
    this.server = "";
    this.toolName = "";
    proto3.util.initPartial(data, this as _CallMcpToolResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CallMcpToolResult {
    return new _CallMcpToolResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CallMcpToolResult {
    return new _CallMcpToolResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CallMcpToolResult {
    return new _CallMcpToolResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CallMcpToolResult | PlainMessage<_CallMcpToolResult> | undefined | null, b2: _CallMcpToolResult | PlainMessage<_CallMcpToolResult> | undefined | null): boolean {
    return proto3.util.equals(_CallMcpToolResult as unknown as MessageType<_CallMcpToolResult>, a, b2);
  }
})();
export type CallMcpToolResult = InstanceType<typeof CallMcpToolResult$Runtime>;
var CallMcpToolResult: MessageType<CallMcpToolResult> = CallMcpToolResult$Runtime as unknown as MessageType<CallMcpToolResult>;
(CallMcpToolResult as MutableMessageType<CallMcpToolResult>).runtime = proto3;
(CallMcpToolResult as MutableMessageType<CallMcpToolResult>).typeName = "aiserver.v1.CallMcpToolResult";
(CallMcpToolResult as MutableMessageType<CallMcpToolResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "result", kind: "message", T: Struct }
]);
var GetMcpToolsParams$Runtime = (() => class _GetMcpToolsParams extends Message<_GetMcpToolsParams> {
  declare server?: string;
  declare toolName?: string;
  declare pattern?: string;
  constructor(data?: PartialMessage<_GetMcpToolsParams>) {
    super();
    proto3.util.initPartial(data, this as _GetMcpToolsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsParams {
    return new _GetMcpToolsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsParams {
    return new _GetMcpToolsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsParams {
    return new _GetMcpToolsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsParams | PlainMessage<_GetMcpToolsParams> | undefined | null, b2: _GetMcpToolsParams | PlainMessage<_GetMcpToolsParams> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsParams as unknown as MessageType<_GetMcpToolsParams>, a, b2);
  }
})();
export type GetMcpToolsParams = InstanceType<typeof GetMcpToolsParams$Runtime>;
var GetMcpToolsParams: MessageType<GetMcpToolsParams> = GetMcpToolsParams$Runtime as unknown as MessageType<GetMcpToolsParams>;
(GetMcpToolsParams as MutableMessageType<GetMcpToolsParams>).runtime = proto3;
(GetMcpToolsParams as MutableMessageType<GetMcpToolsParams>).typeName = "aiserver.v1.GetMcpToolsParams";
(GetMcpToolsParams as MutableMessageType<GetMcpToolsParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "tool_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "pattern", kind: "scalar", T: 9, opt: true }
]);
var GetMcpToolsResult$Runtime = (() => class _GetMcpToolsResult extends Message<_GetMcpToolsResult> {
  declare content: string;
  declare outputFilePath?: string;
  constructor(data?: PartialMessage<_GetMcpToolsResult>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _GetMcpToolsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GetMcpToolsResult {
    return new _GetMcpToolsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GetMcpToolsResult {
    return new _GetMcpToolsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GetMcpToolsResult {
    return new _GetMcpToolsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GetMcpToolsResult | PlainMessage<_GetMcpToolsResult> | undefined | null, b2: _GetMcpToolsResult | PlainMessage<_GetMcpToolsResult> | undefined | null): boolean {
    return proto3.util.equals(_GetMcpToolsResult as unknown as MessageType<_GetMcpToolsResult>, a, b2);
  }
})();
export type GetMcpToolsResult = InstanceType<typeof GetMcpToolsResult$Runtime>;
var GetMcpToolsResult: MessageType<GetMcpToolsResult> = GetMcpToolsResult$Runtime as unknown as MessageType<GetMcpToolsResult>;
(GetMcpToolsResult as MutableMessageType<GetMcpToolsResult>).runtime = proto3;
(GetMcpToolsResult as MutableMessageType<GetMcpToolsResult>).typeName = "aiserver.v1.GetMcpToolsResult";
(GetMcpToolsResult as MutableMessageType<GetMcpToolsResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "output_file_path", kind: "scalar", T: 9, opt: true }
]);
var SearchSymbolsParams$Runtime = (() => class _SearchSymbolsParams extends Message<_SearchSymbolsParams> {
  declare query: string;
  constructor(data?: PartialMessage<_SearchSymbolsParams>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _SearchSymbolsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchSymbolsParams {
    return new _SearchSymbolsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchSymbolsParams {
    return new _SearchSymbolsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchSymbolsParams {
    return new _SearchSymbolsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchSymbolsParams | PlainMessage<_SearchSymbolsParams> | undefined | null, b2: _SearchSymbolsParams | PlainMessage<_SearchSymbolsParams> | undefined | null): boolean {
    return proto3.util.equals(_SearchSymbolsParams as unknown as MessageType<_SearchSymbolsParams>, a, b2);
  }
})();
export type SearchSymbolsParams = InstanceType<typeof SearchSymbolsParams$Runtime>;
var SearchSymbolsParams: MessageType<SearchSymbolsParams> = SearchSymbolsParams$Runtime as unknown as MessageType<SearchSymbolsParams>;
(SearchSymbolsParams as MutableMessageType<SearchSymbolsParams>).runtime = proto3;
(SearchSymbolsParams as MutableMessageType<SearchSymbolsParams>).typeName = "aiserver.v1.SearchSymbolsParams";
(SearchSymbolsParams as MutableMessageType<SearchSymbolsParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SearchSymbolsResult$Runtime = (() => class _SearchSymbolsResult extends Message<_SearchSymbolsResult> {
  declare matches: SearchSymbolsResult_SymbolMatch[];
  declare rejected?: boolean;
  constructor(data?: PartialMessage<_SearchSymbolsResult>) {
    super();
    this.matches = [];
    proto3.util.initPartial(data, this as _SearchSymbolsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchSymbolsResult {
    return new _SearchSymbolsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchSymbolsResult {
    return new _SearchSymbolsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchSymbolsResult {
    return new _SearchSymbolsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchSymbolsResult | PlainMessage<_SearchSymbolsResult> | undefined | null, b2: _SearchSymbolsResult | PlainMessage<_SearchSymbolsResult> | undefined | null): boolean {
    return proto3.util.equals(_SearchSymbolsResult as unknown as MessageType<_SearchSymbolsResult>, a, b2);
  }
})();
export type SearchSymbolsResult = InstanceType<typeof SearchSymbolsResult$Runtime>;
var SearchSymbolsResult: MessageType<SearchSymbolsResult> = SearchSymbolsResult$Runtime as unknown as MessageType<SearchSymbolsResult>;
(SearchSymbolsResult as MutableMessageType<SearchSymbolsResult>).runtime = proto3;
(SearchSymbolsResult as MutableMessageType<SearchSymbolsResult>).typeName = "aiserver.v1.SearchSymbolsResult";
(SearchSymbolsResult as MutableMessageType<SearchSymbolsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "matches", kind: "message", T: SearchSymbolsResult_SymbolMatch, repeated: true },
  { no: 2, name: "rejected", kind: "scalar", T: 8, opt: true }
]);
var SearchSymbolsResult_SymbolMatch$Runtime = (() => class _SearchSymbolsResult_SymbolMatch extends Message<_SearchSymbolsResult_SymbolMatch> {
  declare name: string;
  declare uri: string;
  declare range?: Range2;
  declare secondaryText: string;
  declare labelMatches: MatchRange[];
  declare descriptionMatches: MatchRange[];
  declare score: number;
  constructor(data?: PartialMessage<_SearchSymbolsResult_SymbolMatch>) {
    super();
    this.name = "";
    this.uri = "";
    this.secondaryText = "";
    this.labelMatches = [];
    this.descriptionMatches = [];
    this.score = 0;
    proto3.util.initPartial(data, this as _SearchSymbolsResult_SymbolMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchSymbolsResult_SymbolMatch {
    return new _SearchSymbolsResult_SymbolMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchSymbolsResult_SymbolMatch {
    return new _SearchSymbolsResult_SymbolMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchSymbolsResult_SymbolMatch {
    return new _SearchSymbolsResult_SymbolMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchSymbolsResult_SymbolMatch | PlainMessage<_SearchSymbolsResult_SymbolMatch> | undefined | null, b2: _SearchSymbolsResult_SymbolMatch | PlainMessage<_SearchSymbolsResult_SymbolMatch> | undefined | null): boolean {
    return proto3.util.equals(_SearchSymbolsResult_SymbolMatch as unknown as MessageType<_SearchSymbolsResult_SymbolMatch>, a, b2);
  }
})();
export type SearchSymbolsResult_SymbolMatch = InstanceType<typeof SearchSymbolsResult_SymbolMatch$Runtime>;
var SearchSymbolsResult_SymbolMatch: MessageType<SearchSymbolsResult_SymbolMatch> = SearchSymbolsResult_SymbolMatch$Runtime as unknown as MessageType<SearchSymbolsResult_SymbolMatch>;
(SearchSymbolsResult_SymbolMatch as MutableMessageType<SearchSymbolsResult_SymbolMatch>).runtime = proto3;
(SearchSymbolsResult_SymbolMatch as MutableMessageType<SearchSymbolsResult_SymbolMatch>).typeName = "aiserver.v1.SearchSymbolsResult.SymbolMatch";
(SearchSymbolsResult_SymbolMatch as MutableMessageType<SearchSymbolsResult_SymbolMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "range", kind: "message", T: Range2 },
  {
    no: 4,
    name: "secondary_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "label_matches", kind: "message", T: MatchRange, repeated: true },
  { no: 6, name: "description_matches", kind: "message", T: MatchRange, repeated: true },
  {
    no: 7,
    name: "score",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  }
]);
var SearchSymbolsStream$Runtime = (() => class _SearchSymbolsStream extends Message<_SearchSymbolsStream> {
  declare query: string;
  constructor(data?: PartialMessage<_SearchSymbolsStream>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _SearchSymbolsStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SearchSymbolsStream {
    return new _SearchSymbolsStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SearchSymbolsStream {
    return new _SearchSymbolsStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SearchSymbolsStream {
    return new _SearchSymbolsStream().fromJsonString(jsonString, options);
  }
  static equals(a: _SearchSymbolsStream | PlainMessage<_SearchSymbolsStream> | undefined | null, b2: _SearchSymbolsStream | PlainMessage<_SearchSymbolsStream> | undefined | null): boolean {
    return proto3.util.equals(_SearchSymbolsStream as unknown as MessageType<_SearchSymbolsStream>, a, b2);
  }
})();
export type SearchSymbolsStream = InstanceType<typeof SearchSymbolsStream$Runtime>;
var SearchSymbolsStream: MessageType<SearchSymbolsStream> = SearchSymbolsStream$Runtime as unknown as MessageType<SearchSymbolsStream>;
(SearchSymbolsStream as MutableMessageType<SearchSymbolsStream>).runtime = proto3;
(SearchSymbolsStream as MutableMessageType<SearchSymbolsStream>).typeName = "aiserver.v1.SearchSymbolsStream";
(SearchSymbolsStream as MutableMessageType<SearchSymbolsStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BackgroundComposerFollowupParams$Runtime = (() => class _BackgroundComposerFollowupParams extends Message<_BackgroundComposerFollowupParams> {
  declare proposedFollowup: string;
  declare bcId: string;
  constructor(data?: PartialMessage<_BackgroundComposerFollowupParams>) {
    super();
    this.proposedFollowup = "";
    this.bcId = "";
    proto3.util.initPartial(data, this as _BackgroundComposerFollowupParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundComposerFollowupParams {
    return new _BackgroundComposerFollowupParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupParams {
    return new _BackgroundComposerFollowupParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupParams {
    return new _BackgroundComposerFollowupParams().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundComposerFollowupParams | PlainMessage<_BackgroundComposerFollowupParams> | undefined | null, b2: _BackgroundComposerFollowupParams | PlainMessage<_BackgroundComposerFollowupParams> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundComposerFollowupParams as unknown as MessageType<_BackgroundComposerFollowupParams>, a, b2);
  }
})();
export type BackgroundComposerFollowupParams = InstanceType<typeof BackgroundComposerFollowupParams$Runtime>;
var BackgroundComposerFollowupParams: MessageType<BackgroundComposerFollowupParams> = BackgroundComposerFollowupParams$Runtime as unknown as MessageType<BackgroundComposerFollowupParams>;
(BackgroundComposerFollowupParams as MutableMessageType<BackgroundComposerFollowupParams>).runtime = proto3;
(BackgroundComposerFollowupParams as MutableMessageType<BackgroundComposerFollowupParams>).typeName = "aiserver.v1.BackgroundComposerFollowupParams";
(BackgroundComposerFollowupParams as MutableMessageType<BackgroundComposerFollowupParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "proposed_followup",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BackgroundComposerFollowupResult$Runtime = (() => class _BackgroundComposerFollowupResult extends Message<_BackgroundComposerFollowupResult> {
  declare proposedFollowup: string;
  declare isSent: boolean;
  constructor(data?: PartialMessage<_BackgroundComposerFollowupResult>) {
    super();
    this.proposedFollowup = "";
    this.isSent = false;
    proto3.util.initPartial(data, this as _BackgroundComposerFollowupResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundComposerFollowupResult {
    return new _BackgroundComposerFollowupResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupResult {
    return new _BackgroundComposerFollowupResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupResult {
    return new _BackgroundComposerFollowupResult().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundComposerFollowupResult | PlainMessage<_BackgroundComposerFollowupResult> | undefined | null, b2: _BackgroundComposerFollowupResult | PlainMessage<_BackgroundComposerFollowupResult> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundComposerFollowupResult as unknown as MessageType<_BackgroundComposerFollowupResult>, a, b2);
  }
})();
export type BackgroundComposerFollowupResult = InstanceType<typeof BackgroundComposerFollowupResult$Runtime>;
var BackgroundComposerFollowupResult: MessageType<BackgroundComposerFollowupResult> = BackgroundComposerFollowupResult$Runtime as unknown as MessageType<BackgroundComposerFollowupResult>;
(BackgroundComposerFollowupResult as MutableMessageType<BackgroundComposerFollowupResult>).runtime = proto3;
(BackgroundComposerFollowupResult as MutableMessageType<BackgroundComposerFollowupResult>).typeName = "aiserver.v1.BackgroundComposerFollowupResult";
(BackgroundComposerFollowupResult as MutableMessageType<BackgroundComposerFollowupResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "proposed_followup",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_sent",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BackgroundComposerFollowupStream$Runtime = (() => class _BackgroundComposerFollowupStream extends Message<_BackgroundComposerFollowupStream> {
  constructor(data?: PartialMessage<_BackgroundComposerFollowupStream>) {
    super();
    proto3.util.initPartial(data, this as _BackgroundComposerFollowupStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundComposerFollowupStream {
    return new _BackgroundComposerFollowupStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupStream {
    return new _BackgroundComposerFollowupStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundComposerFollowupStream {
    return new _BackgroundComposerFollowupStream().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundComposerFollowupStream | PlainMessage<_BackgroundComposerFollowupStream> | undefined | null, b2: _BackgroundComposerFollowupStream | PlainMessage<_BackgroundComposerFollowupStream> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundComposerFollowupStream as unknown as MessageType<_BackgroundComposerFollowupStream>, a, b2);
  }
})();
export type BackgroundComposerFollowupStream = InstanceType<typeof BackgroundComposerFollowupStream$Runtime>;
var BackgroundComposerFollowupStream: MessageType<BackgroundComposerFollowupStream> = BackgroundComposerFollowupStream$Runtime as unknown as MessageType<BackgroundComposerFollowupStream>;
(BackgroundComposerFollowupStream as MutableMessageType<BackgroundComposerFollowupStream>).runtime = proto3;
(BackgroundComposerFollowupStream as MutableMessageType<BackgroundComposerFollowupStream>).typeName = "aiserver.v1.BackgroundComposerFollowupStream";
(BackgroundComposerFollowupStream as MutableMessageType<BackgroundComposerFollowupStream>).fields = proto3.util.newFieldList(() => []);
var SummarizeCodeParams$Runtime = (() => class _SummarizeCodeParams extends Message<_SummarizeCodeParams> {
  declare targetFiles: string[];
  declare focusQuery: string;
  constructor(data?: PartialMessage<_SummarizeCodeParams>) {
    super();
    this.targetFiles = [];
    this.focusQuery = "";
    proto3.util.initPartial(data, this as _SummarizeCodeParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeCodeParams {
    return new _SummarizeCodeParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeCodeParams {
    return new _SummarizeCodeParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeCodeParams {
    return new _SummarizeCodeParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeCodeParams | PlainMessage<_SummarizeCodeParams> | undefined | null, b2: _SummarizeCodeParams | PlainMessage<_SummarizeCodeParams> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeCodeParams as unknown as MessageType<_SummarizeCodeParams>, a, b2);
  }
})();
export type SummarizeCodeParams = InstanceType<typeof SummarizeCodeParams$Runtime>;
var SummarizeCodeParams: MessageType<SummarizeCodeParams> = SummarizeCodeParams$Runtime as unknown as MessageType<SummarizeCodeParams>;
(SummarizeCodeParams as MutableMessageType<SummarizeCodeParams>).runtime = proto3;
(SummarizeCodeParams as MutableMessageType<SummarizeCodeParams>).typeName = "aiserver.v1.SummarizeCodeParams";
(SummarizeCodeParams as MutableMessageType<SummarizeCodeParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "target_files", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "focus_query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SummarizeCodeResult$Runtime = (() => class _SummarizeCodeResult extends Message<_SummarizeCodeResult> {
  declare summary: string;
  constructor(data?: PartialMessage<_SummarizeCodeResult>) {
    super();
    this.summary = "";
    proto3.util.initPartial(data, this as _SummarizeCodeResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeCodeResult {
    return new _SummarizeCodeResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeCodeResult {
    return new _SummarizeCodeResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeCodeResult {
    return new _SummarizeCodeResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeCodeResult | PlainMessage<_SummarizeCodeResult> | undefined | null, b2: _SummarizeCodeResult | PlainMessage<_SummarizeCodeResult> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeCodeResult as unknown as MessageType<_SummarizeCodeResult>, a, b2);
  }
})();
export type SummarizeCodeResult = InstanceType<typeof SummarizeCodeResult$Runtime>;
var SummarizeCodeResult: MessageType<SummarizeCodeResult> = SummarizeCodeResult$Runtime as unknown as MessageType<SummarizeCodeResult>;
(SummarizeCodeResult as MutableMessageType<SummarizeCodeResult>).runtime = proto3;
(SummarizeCodeResult as MutableMessageType<SummarizeCodeResult>).typeName = "aiserver.v1.SummarizeCodeResult";
(SummarizeCodeResult as MutableMessageType<SummarizeCodeResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SummarizeCodeStream$Runtime = (() => class _SummarizeCodeStream extends Message<_SummarizeCodeStream> {
  constructor(data?: PartialMessage<_SummarizeCodeStream>) {
    super();
    proto3.util.initPartial(data, this as _SummarizeCodeStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeCodeStream {
    return new _SummarizeCodeStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeCodeStream {
    return new _SummarizeCodeStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeCodeStream {
    return new _SummarizeCodeStream().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeCodeStream | PlainMessage<_SummarizeCodeStream> | undefined | null, b2: _SummarizeCodeStream | PlainMessage<_SummarizeCodeStream> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeCodeStream as unknown as MessageType<_SummarizeCodeStream>, a, b2);
  }
})();
export type SummarizeCodeStream = InstanceType<typeof SummarizeCodeStream$Runtime>;
var SummarizeCodeStream: MessageType<SummarizeCodeStream> = SummarizeCodeStream$Runtime as unknown as MessageType<SummarizeCodeStream>;
(SummarizeCodeStream as MutableMessageType<SummarizeCodeStream>).runtime = proto3;
(SummarizeCodeStream as MutableMessageType<SummarizeCodeStream>).typeName = "aiserver.v1.SummarizeCodeStream";
(SummarizeCodeStream as MutableMessageType<SummarizeCodeStream>).fields = proto3.util.newFieldList(() => []);
var KnowledgeBaseParams$Runtime = (() => class _KnowledgeBaseParams extends Message<_KnowledgeBaseParams> {
  declare knowledgeToStore: string;
  declare title: string;
  declare existingKnowledgeId?: string;
  declare action?: string;
  constructor(data?: PartialMessage<_KnowledgeBaseParams>) {
    super();
    this.knowledgeToStore = "";
    this.title = "";
    proto3.util.initPartial(data, this as _KnowledgeBaseParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KnowledgeBaseParams {
    return new _KnowledgeBaseParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KnowledgeBaseParams {
    return new _KnowledgeBaseParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KnowledgeBaseParams {
    return new _KnowledgeBaseParams().fromJsonString(jsonString, options);
  }
  static equals(a: _KnowledgeBaseParams | PlainMessage<_KnowledgeBaseParams> | undefined | null, b2: _KnowledgeBaseParams | PlainMessage<_KnowledgeBaseParams> | undefined | null): boolean {
    return proto3.util.equals(_KnowledgeBaseParams as unknown as MessageType<_KnowledgeBaseParams>, a, b2);
  }
})();
export type KnowledgeBaseParams = InstanceType<typeof KnowledgeBaseParams$Runtime>;
var KnowledgeBaseParams: MessageType<KnowledgeBaseParams> = KnowledgeBaseParams$Runtime as unknown as MessageType<KnowledgeBaseParams>;
(KnowledgeBaseParams as MutableMessageType<KnowledgeBaseParams>).runtime = proto3;
(KnowledgeBaseParams as MutableMessageType<KnowledgeBaseParams>).typeName = "aiserver.v1.KnowledgeBaseParams";
(KnowledgeBaseParams as MutableMessageType<KnowledgeBaseParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "knowledge_to_store",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "existing_knowledge_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "action", kind: "scalar", T: 9, opt: true }
]);
var KnowledgeBaseResult$Runtime = (() => class _KnowledgeBaseResult extends Message<_KnowledgeBaseResult> {
  declare success: boolean;
  declare confirmationMessage: string;
  declare id: string;
  constructor(data?: PartialMessage<_KnowledgeBaseResult>) {
    super();
    this.success = false;
    this.confirmationMessage = "";
    this.id = "";
    proto3.util.initPartial(data, this as _KnowledgeBaseResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KnowledgeBaseResult {
    return new _KnowledgeBaseResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KnowledgeBaseResult {
    return new _KnowledgeBaseResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KnowledgeBaseResult {
    return new _KnowledgeBaseResult().fromJsonString(jsonString, options);
  }
  static equals(a: _KnowledgeBaseResult | PlainMessage<_KnowledgeBaseResult> | undefined | null, b2: _KnowledgeBaseResult | PlainMessage<_KnowledgeBaseResult> | undefined | null): boolean {
    return proto3.util.equals(_KnowledgeBaseResult as unknown as MessageType<_KnowledgeBaseResult>, a, b2);
  }
})();
export type KnowledgeBaseResult = InstanceType<typeof KnowledgeBaseResult$Runtime>;
var KnowledgeBaseResult: MessageType<KnowledgeBaseResult> = KnowledgeBaseResult$Runtime as unknown as MessageType<KnowledgeBaseResult>;
(KnowledgeBaseResult as MutableMessageType<KnowledgeBaseResult>).runtime = proto3;
(KnowledgeBaseResult as MutableMessageType<KnowledgeBaseResult>).typeName = "aiserver.v1.KnowledgeBaseResult";
(KnowledgeBaseResult as MutableMessageType<KnowledgeBaseResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "confirmation_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var KnowledgeBaseStream$Runtime = (() => class _KnowledgeBaseStream extends Message<_KnowledgeBaseStream> {
  constructor(data?: PartialMessage<_KnowledgeBaseStream>) {
    super();
    proto3.util.initPartial(data, this as _KnowledgeBaseStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _KnowledgeBaseStream {
    return new _KnowledgeBaseStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _KnowledgeBaseStream {
    return new _KnowledgeBaseStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _KnowledgeBaseStream {
    return new _KnowledgeBaseStream().fromJsonString(jsonString, options);
  }
  static equals(a: _KnowledgeBaseStream | PlainMessage<_KnowledgeBaseStream> | undefined | null, b2: _KnowledgeBaseStream | PlainMessage<_KnowledgeBaseStream> | undefined | null): boolean {
    return proto3.util.equals(_KnowledgeBaseStream as unknown as MessageType<_KnowledgeBaseStream>, a, b2);
  }
})();
export type KnowledgeBaseStream = InstanceType<typeof KnowledgeBaseStream$Runtime>;
var KnowledgeBaseStream: MessageType<KnowledgeBaseStream> = KnowledgeBaseStream$Runtime as unknown as MessageType<KnowledgeBaseStream>;
(KnowledgeBaseStream as MutableMessageType<KnowledgeBaseStream>).runtime = proto3;
(KnowledgeBaseStream as MutableMessageType<KnowledgeBaseStream>).typeName = "aiserver.v1.KnowledgeBaseStream";
(KnowledgeBaseStream as MutableMessageType<KnowledgeBaseStream>).fields = proto3.util.newFieldList(() => []);
var FetchPullRequestParams$Runtime = (() => class _FetchPullRequestParams extends Message<_FetchPullRequestParams> {
  declare pullNumberOrCommitHash: string;
  declare repo?: string;
  declare isGithub?: boolean;
  constructor(data?: PartialMessage<_FetchPullRequestParams>) {
    super();
    this.pullNumberOrCommitHash = "";
    proto3.util.initPartial(data, this as _FetchPullRequestParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchPullRequestParams {
    return new _FetchPullRequestParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchPullRequestParams {
    return new _FetchPullRequestParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchPullRequestParams {
    return new _FetchPullRequestParams().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchPullRequestParams | PlainMessage<_FetchPullRequestParams> | undefined | null, b2: _FetchPullRequestParams | PlainMessage<_FetchPullRequestParams> | undefined | null): boolean {
    return proto3.util.equals(_FetchPullRequestParams as unknown as MessageType<_FetchPullRequestParams>, a, b2);
  }
})();
export type FetchPullRequestParams = InstanceType<typeof FetchPullRequestParams$Runtime>;
var FetchPullRequestParams: MessageType<FetchPullRequestParams> = FetchPullRequestParams$Runtime as unknown as MessageType<FetchPullRequestParams>;
(FetchPullRequestParams as MutableMessageType<FetchPullRequestParams>).runtime = proto3;
(FetchPullRequestParams as MutableMessageType<FetchPullRequestParams>).typeName = "aiserver.v1.FetchPullRequestParams";
(FetchPullRequestParams as MutableMessageType<FetchPullRequestParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pull_number_or_commit_hash",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repo", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "is_github", kind: "scalar", T: 8, opt: true }
]);
var FetchPullRequestResult$Runtime = (() => class _FetchPullRequestResult extends Message<_FetchPullRequestResult> {
  declare content: string;
  declare prNumber: number;
  declare title: string;
  declare body: string;
  declare author: string;
  declare date: string;
  declare diff: string;
  declare sha?: string;
  declare externalLink?: string;
  declare url?: string;
  declare comments: IssueComment[];
  declare labels: string[];
  declare assignees: string[];
  declare isIssue?: boolean;
  declare state?: string;
  declare promptConnectGithub?: boolean;
  constructor(data?: PartialMessage<_FetchPullRequestResult>) {
    super();
    this.content = "";
    this.prNumber = 0;
    this.title = "";
    this.body = "";
    this.author = "";
    this.date = "";
    this.diff = "";
    this.comments = [];
    this.labels = [];
    this.assignees = [];
    proto3.util.initPartial(data, this as _FetchPullRequestResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchPullRequestResult {
    return new _FetchPullRequestResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchPullRequestResult {
    return new _FetchPullRequestResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchPullRequestResult {
    return new _FetchPullRequestResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchPullRequestResult | PlainMessage<_FetchPullRequestResult> | undefined | null, b2: _FetchPullRequestResult | PlainMessage<_FetchPullRequestResult> | undefined | null): boolean {
    return proto3.util.equals(_FetchPullRequestResult as unknown as MessageType<_FetchPullRequestResult>, a, b2);
  }
})();
export type FetchPullRequestResult = InstanceType<typeof FetchPullRequestResult$Runtime>;
var FetchPullRequestResult: MessageType<FetchPullRequestResult> = FetchPullRequestResult$Runtime as unknown as MessageType<FetchPullRequestResult>;
(FetchPullRequestResult as MutableMessageType<FetchPullRequestResult>).runtime = proto3;
(FetchPullRequestResult as MutableMessageType<FetchPullRequestResult>).typeName = "aiserver.v1.FetchPullRequestResult";
(FetchPullRequestResult as MutableMessageType<FetchPullRequestResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "pr_number",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "author",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "date",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "diff",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "sha", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "external_link", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "comments", kind: "message", T: IssueComment, repeated: true },
  { no: 12, name: "labels", kind: "scalar", T: 9, repeated: true },
  { no: 13, name: "assignees", kind: "scalar", T: 9, repeated: true },
  { no: 14, name: "is_issue", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "state", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "prompt_connect_github", kind: "scalar", T: 8, opt: true }
]);
var IssueComment$Runtime = (() => class _IssueComment extends Message<_IssueComment> {
  declare id: number;
  declare body: string;
  declare author?: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare authorAssociation?: string;
  constructor(data?: PartialMessage<_IssueComment>) {
    super();
    this.id = 0;
    this.body = "";
    this.createdAt = "";
    this.updatedAt = "";
    proto3.util.initPartial(data, this as _IssueComment);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _IssueComment {
    return new _IssueComment().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _IssueComment {
    return new _IssueComment().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _IssueComment {
    return new _IssueComment().fromJsonString(jsonString, options);
  }
  static equals(a: _IssueComment | PlainMessage<_IssueComment> | undefined | null, b2: _IssueComment | PlainMessage<_IssueComment> | undefined | null): boolean {
    return proto3.util.equals(_IssueComment as unknown as MessageType<_IssueComment>, a, b2);
  }
})();
export type IssueComment = InstanceType<typeof IssueComment$Runtime>;
var IssueComment: MessageType<IssueComment> = IssueComment$Runtime as unknown as MessageType<IssueComment>;
(IssueComment as MutableMessageType<IssueComment>).runtime = proto3;
(IssueComment as MutableMessageType<IssueComment>).typeName = "aiserver.v1.IssueComment";
(IssueComment as MutableMessageType<IssueComment>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "body",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "author", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "created_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "updated_at",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "author_association", kind: "scalar", T: 9, opt: true }
]);
var FetchPullRequestStream$Runtime = (() => class _FetchPullRequestStream extends Message<_FetchPullRequestStream> {
  constructor(data?: PartialMessage<_FetchPullRequestStream>) {
    super();
    proto3.util.initPartial(data, this as _FetchPullRequestStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FetchPullRequestStream {
    return new _FetchPullRequestStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FetchPullRequestStream {
    return new _FetchPullRequestStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FetchPullRequestStream {
    return new _FetchPullRequestStream().fromJsonString(jsonString, options);
  }
  static equals(a: _FetchPullRequestStream | PlainMessage<_FetchPullRequestStream> | undefined | null, b2: _FetchPullRequestStream | PlainMessage<_FetchPullRequestStream> | undefined | null): boolean {
    return proto3.util.equals(_FetchPullRequestStream as unknown as MessageType<_FetchPullRequestStream>, a, b2);
  }
})();
export type FetchPullRequestStream = InstanceType<typeof FetchPullRequestStream$Runtime>;
var FetchPullRequestStream: MessageType<FetchPullRequestStream> = FetchPullRequestStream$Runtime as unknown as MessageType<FetchPullRequestStream>;
(FetchPullRequestStream as MutableMessageType<FetchPullRequestStream>).runtime = proto3;
(FetchPullRequestStream as MutableMessageType<FetchPullRequestStream>).typeName = "aiserver.v1.FetchPullRequestStream";
(FetchPullRequestStream as MutableMessageType<FetchPullRequestStream>).fields = proto3.util.newFieldList(() => []);
var PullRequestReference$Runtime = (() => class _PullRequestReference extends Message<_PullRequestReference> {
  declare sha: string;
  declare score: number;
  declare title?: string;
  declare summary?: string;
  declare prNumber?: number;
  declare author?: string;
  declare date?: string;
  declare changedFiles: string[];
  constructor(data?: PartialMessage<_PullRequestReference>) {
    super();
    this.sha = "";
    this.score = 0;
    this.changedFiles = [];
    proto3.util.initPartial(data, this as _PullRequestReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PullRequestReference {
    return new _PullRequestReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PullRequestReference {
    return new _PullRequestReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PullRequestReference {
    return new _PullRequestReference().fromJsonString(jsonString, options);
  }
  static equals(a: _PullRequestReference | PlainMessage<_PullRequestReference> | undefined | null, b2: _PullRequestReference | PlainMessage<_PullRequestReference> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestReference as unknown as MessageType<_PullRequestReference>, a, b2);
  }
})();
export type PullRequestReference = InstanceType<typeof PullRequestReference$Runtime>;
var PullRequestReference: MessageType<PullRequestReference> = PullRequestReference$Runtime as unknown as MessageType<PullRequestReference>;
(PullRequestReference as MutableMessageType<PullRequestReference>).runtime = proto3;
(PullRequestReference as MutableMessageType<PullRequestReference>).typeName = "aiserver.v1.PullRequestReference";
(PullRequestReference as MutableMessageType<PullRequestReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "sha",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "score",
    kind: "scalar",
    T: 2
    /* ScalarType.FLOAT */
  },
  { no: 3, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "summary", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "pr_number", kind: "scalar", T: 13, opt: true },
  { no: 6, name: "author", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "date", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "changed_files", kind: "scalar", T: 9, repeated: true }
]);
var DeepSearchParams$Runtime = (() => class _DeepSearchParams extends Message<_DeepSearchParams> {
  declare query: string;
  constructor(data?: PartialMessage<_DeepSearchParams>) {
    super();
    this.query = "";
    proto3.util.initPartial(data, this as _DeepSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchParams {
    return new _DeepSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchParams {
    return new _DeepSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchParams {
    return new _DeepSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchParams | PlainMessage<_DeepSearchParams> | undefined | null, b2: _DeepSearchParams | PlainMessage<_DeepSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchParams as unknown as MessageType<_DeepSearchParams>, a, b2);
  }
})();
export type DeepSearchParams = InstanceType<typeof DeepSearchParams$Runtime>;
var DeepSearchParams: MessageType<DeepSearchParams> = DeepSearchParams$Runtime as unknown as MessageType<DeepSearchParams>;
(DeepSearchParams as MutableMessageType<DeepSearchParams>).runtime = proto3;
(DeepSearchParams as MutableMessageType<DeepSearchParams>).typeName = "aiserver.v1.DeepSearchParams";
(DeepSearchParams as MutableMessageType<DeepSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "query",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeepSearchResult$Runtime = (() => class _DeepSearchResult extends Message<_DeepSearchResult> {
  declare success: boolean;
  declare result: string;
  constructor(data?: PartialMessage<_DeepSearchResult>) {
    super();
    this.success = false;
    this.result = "";
    proto3.util.initPartial(data, this as _DeepSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchResult {
    return new _DeepSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchResult {
    return new _DeepSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchResult {
    return new _DeepSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchResult | PlainMessage<_DeepSearchResult> | undefined | null, b2: _DeepSearchResult | PlainMessage<_DeepSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchResult as unknown as MessageType<_DeepSearchResult>, a, b2);
  }
})();
export type DeepSearchResult = InstanceType<typeof DeepSearchResult$Runtime>;
var DeepSearchResult: MessageType<DeepSearchResult> = DeepSearchResult$Runtime as unknown as MessageType<DeepSearchResult>;
(DeepSearchResult as MutableMessageType<DeepSearchResult>).runtime = proto3;
(DeepSearchResult as MutableMessageType<DeepSearchResult>).typeName = "aiserver.v1.DeepSearchResult";
(DeepSearchResult as MutableMessageType<DeepSearchResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "result",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeepSearchStream$Runtime = (() => class _DeepSearchStream extends Message<_DeepSearchStream> {
  constructor(data?: PartialMessage<_DeepSearchStream>) {
    super();
    proto3.util.initPartial(data, this as _DeepSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _DeepSearchStream {
    return new _DeepSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _DeepSearchStream {
    return new _DeepSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _DeepSearchStream {
    return new _DeepSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _DeepSearchStream | PlainMessage<_DeepSearchStream> | undefined | null, b2: _DeepSearchStream | PlainMessage<_DeepSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_DeepSearchStream as unknown as MessageType<_DeepSearchStream>, a, b2);
  }
})();
export type DeepSearchStream = InstanceType<typeof DeepSearchStream$Runtime>;
var DeepSearchStream: MessageType<DeepSearchStream> = DeepSearchStream$Runtime as unknown as MessageType<DeepSearchStream>;
(DeepSearchStream as MutableMessageType<DeepSearchStream>).runtime = proto3;
(DeepSearchStream as MutableMessageType<DeepSearchStream>).typeName = "aiserver.v1.DeepSearchStream";
(DeepSearchStream as MutableMessageType<DeepSearchStream>).fields = proto3.util.newFieldList(() => []);
var CreateDiagramParams$Runtime = (() => class _CreateDiagramParams extends Message<_CreateDiagramParams> {
  declare content: string;
  constructor(data?: PartialMessage<_CreateDiagramParams>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _CreateDiagramParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateDiagramParams {
    return new _CreateDiagramParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateDiagramParams {
    return new _CreateDiagramParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateDiagramParams {
    return new _CreateDiagramParams().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateDiagramParams | PlainMessage<_CreateDiagramParams> | undefined | null, b2: _CreateDiagramParams | PlainMessage<_CreateDiagramParams> | undefined | null): boolean {
    return proto3.util.equals(_CreateDiagramParams as unknown as MessageType<_CreateDiagramParams>, a, b2);
  }
})();
export type CreateDiagramParams = InstanceType<typeof CreateDiagramParams$Runtime>;
var CreateDiagramParams: MessageType<CreateDiagramParams> = CreateDiagramParams$Runtime as unknown as MessageType<CreateDiagramParams>;
(CreateDiagramParams as MutableMessageType<CreateDiagramParams>).runtime = proto3;
(CreateDiagramParams as MutableMessageType<CreateDiagramParams>).typeName = "aiserver.v1.CreateDiagramParams";
(CreateDiagramParams as MutableMessageType<CreateDiagramParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreateDiagramResult$Runtime = (() => class _CreateDiagramResult extends Message<_CreateDiagramResult> {
  declare error?: string;
  constructor(data?: PartialMessage<_CreateDiagramResult>) {
    super();
    proto3.util.initPartial(data, this as _CreateDiagramResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateDiagramResult {
    return new _CreateDiagramResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateDiagramResult {
    return new _CreateDiagramResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateDiagramResult {
    return new _CreateDiagramResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateDiagramResult | PlainMessage<_CreateDiagramResult> | undefined | null, b2: _CreateDiagramResult | PlainMessage<_CreateDiagramResult> | undefined | null): boolean {
    return proto3.util.equals(_CreateDiagramResult as unknown as MessageType<_CreateDiagramResult>, a, b2);
  }
})();
export type CreateDiagramResult = InstanceType<typeof CreateDiagramResult$Runtime>;
var CreateDiagramResult: MessageType<CreateDiagramResult> = CreateDiagramResult$Runtime as unknown as MessageType<CreateDiagramResult>;
(CreateDiagramResult as MutableMessageType<CreateDiagramResult>).runtime = proto3;
(CreateDiagramResult as MutableMessageType<CreateDiagramResult>).typeName = "aiserver.v1.CreateDiagramResult";
(CreateDiagramResult as MutableMessageType<CreateDiagramResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "error", kind: "scalar", T: 9, opt: true }
]);
var CreateDiagramStream$Runtime = (() => class _CreateDiagramStream extends Message<_CreateDiagramStream> {
  constructor(data?: PartialMessage<_CreateDiagramStream>) {
    super();
    proto3.util.initPartial(data, this as _CreateDiagramStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreateDiagramStream {
    return new _CreateDiagramStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreateDiagramStream {
    return new _CreateDiagramStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreateDiagramStream {
    return new _CreateDiagramStream().fromJsonString(jsonString, options);
  }
  static equals(a: _CreateDiagramStream | PlainMessage<_CreateDiagramStream> | undefined | null, b2: _CreateDiagramStream | PlainMessage<_CreateDiagramStream> | undefined | null): boolean {
    return proto3.util.equals(_CreateDiagramStream as unknown as MessageType<_CreateDiagramStream>, a, b2);
  }
})();
export type CreateDiagramStream = InstanceType<typeof CreateDiagramStream$Runtime>;
var CreateDiagramStream: MessageType<CreateDiagramStream> = CreateDiagramStream$Runtime as unknown as MessageType<CreateDiagramStream>;
(CreateDiagramStream as MutableMessageType<CreateDiagramStream>).runtime = proto3;
(CreateDiagramStream as MutableMessageType<CreateDiagramStream>).typeName = "aiserver.v1.CreateDiagramStream";
(CreateDiagramStream as MutableMessageType<CreateDiagramStream>).fields = proto3.util.newFieldList(() => []);
var FixLintsParams$Runtime = (() => class _FixLintsParams extends Message<_FixLintsParams> {
  constructor(data?: PartialMessage<_FixLintsParams>) {
    super();
    proto3.util.initPartial(data, this as _FixLintsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsParams {
    return new _FixLintsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsParams {
    return new _FixLintsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsParams {
    return new _FixLintsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsParams | PlainMessage<_FixLintsParams> | undefined | null, b2: _FixLintsParams | PlainMessage<_FixLintsParams> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsParams as unknown as MessageType<_FixLintsParams>, a, b2);
  }
})();
export type FixLintsParams = InstanceType<typeof FixLintsParams$Runtime>;
var FixLintsParams: MessageType<FixLintsParams> = FixLintsParams$Runtime as unknown as MessageType<FixLintsParams>;
(FixLintsParams as MutableMessageType<FixLintsParams>).runtime = proto3;
(FixLintsParams as MutableMessageType<FixLintsParams>).typeName = "aiserver.v1.FixLintsParams";
(FixLintsParams as MutableMessageType<FixLintsParams>).fields = proto3.util.newFieldList(() => []);
var FixLintsResult$Runtime = (() => class _FixLintsResult extends Message<_FixLintsResult> {
  declare fileResults: FixLintsResult_FileResult[];
  constructor(data?: PartialMessage<_FixLintsResult>) {
    super();
    this.fileResults = [];
    proto3.util.initPartial(data, this as _FixLintsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsResult {
    return new _FixLintsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsResult {
    return new _FixLintsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsResult {
    return new _FixLintsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsResult | PlainMessage<_FixLintsResult> | undefined | null, b2: _FixLintsResult | PlainMessage<_FixLintsResult> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsResult as unknown as MessageType<_FixLintsResult>, a, b2);
  }
})();
export type FixLintsResult = InstanceType<typeof FixLintsResult$Runtime>;
var FixLintsResult: MessageType<FixLintsResult> = FixLintsResult$Runtime as unknown as MessageType<FixLintsResult>;
(FixLintsResult as MutableMessageType<FixLintsResult>).runtime = proto3;
(FixLintsResult as MutableMessageType<FixLintsResult>).typeName = "aiserver.v1.FixLintsResult";
(FixLintsResult as MutableMessageType<FixLintsResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "file_results", kind: "message", T: FixLintsResult_FileResult, repeated: true }
]);
var FixLintsResult_FileResult$Runtime = (() => class _FixLintsResult_FileResult extends Message<_FixLintsResult_FileResult> {
  declare filePath: string;
  declare diff?: EditFileResult_FileDiff;
  declare isApplied: boolean;
  declare applyFailed: boolean;
  declare error?: string;
  declare linterErrors: LinterError[];
  constructor(data?: PartialMessage<_FixLintsResult_FileResult>) {
    super();
    this.filePath = "";
    this.isApplied = false;
    this.applyFailed = false;
    this.linterErrors = [];
    proto3.util.initPartial(data, this as _FixLintsResult_FileResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsResult_FileResult {
    return new _FixLintsResult_FileResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsResult_FileResult {
    return new _FixLintsResult_FileResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsResult_FileResult {
    return new _FixLintsResult_FileResult().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsResult_FileResult | PlainMessage<_FixLintsResult_FileResult> | undefined | null, b2: _FixLintsResult_FileResult | PlainMessage<_FixLintsResult_FileResult> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsResult_FileResult as unknown as MessageType<_FixLintsResult_FileResult>, a, b2);
  }
})();
export type FixLintsResult_FileResult = InstanceType<typeof FixLintsResult_FileResult$Runtime>;
var FixLintsResult_FileResult: MessageType<FixLintsResult_FileResult> = FixLintsResult_FileResult$Runtime as unknown as MessageType<FixLintsResult_FileResult>;
(FixLintsResult_FileResult as MutableMessageType<FixLintsResult_FileResult>).runtime = proto3;
(FixLintsResult_FileResult as MutableMessageType<FixLintsResult_FileResult>).typeName = "aiserver.v1.FixLintsResult.FileResult";
(FixLintsResult_FileResult as MutableMessageType<FixLintsResult_FileResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "diff", kind: "message", T: EditFileResult_FileDiff },
  {
    no: 3,
    name: "is_applied",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "apply_failed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "error", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "linter_errors", kind: "message", T: LinterError, repeated: true }
]);
var FixLintsStream$Runtime = (() => class _FixLintsStream extends Message<_FixLintsStream> {
  constructor(data?: PartialMessage<_FixLintsStream>) {
    super();
    proto3.util.initPartial(data, this as _FixLintsStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FixLintsStream {
    return new _FixLintsStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FixLintsStream {
    return new _FixLintsStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FixLintsStream {
    return new _FixLintsStream().fromJsonString(jsonString, options);
  }
  static equals(a: _FixLintsStream | PlainMessage<_FixLintsStream> | undefined | null, b2: _FixLintsStream | PlainMessage<_FixLintsStream> | undefined | null): boolean {
    return proto3.util.equals(_FixLintsStream as unknown as MessageType<_FixLintsStream>, a, b2);
  }
})();
export type FixLintsStream = InstanceType<typeof FixLintsStream$Runtime>;
var FixLintsStream: MessageType<FixLintsStream> = FixLintsStream$Runtime as unknown as MessageType<FixLintsStream>;
(FixLintsStream as MutableMessageType<FixLintsStream>).runtime = proto3;
(FixLintsStream as MutableMessageType<FixLintsStream>).typeName = "aiserver.v1.FixLintsStream";
(FixLintsStream as MutableMessageType<FixLintsStream>).fields = proto3.util.newFieldList(() => []);
var ReadLintsParams$Runtime = (() => class _ReadLintsParams extends Message<_ReadLintsParams> {
  declare path: string;
  declare paths: string[];
  constructor(data?: PartialMessage<_ReadLintsParams>) {
    super();
    this.path = "";
    this.paths = [];
    proto3.util.initPartial(data, this as _ReadLintsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsParams {
    return new _ReadLintsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsParams {
    return new _ReadLintsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsParams {
    return new _ReadLintsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsParams | PlainMessage<_ReadLintsParams> | undefined | null, b2: _ReadLintsParams | PlainMessage<_ReadLintsParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsParams as unknown as MessageType<_ReadLintsParams>, a, b2);
  }
})();
export type ReadLintsParams = InstanceType<typeof ReadLintsParams$Runtime>;
var ReadLintsParams: MessageType<ReadLintsParams> = ReadLintsParams$Runtime as unknown as MessageType<ReadLintsParams>;
(ReadLintsParams as MutableMessageType<ReadLintsParams>).runtime = proto3;
(ReadLintsParams as MutableMessageType<ReadLintsParams>).typeName = "aiserver.v1.ReadLintsParams";
(ReadLintsParams as MutableMessageType<ReadLintsParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "paths", kind: "scalar", T: 9, repeated: true }
]);
var ReadLintsResult$Runtime = (() => class _ReadLintsResult extends Message<_ReadLintsResult> {
  declare path: string;
  declare linterErrors: LinterError[];
  declare linterErrorsByFile: LinterErrors[];
  constructor(data?: PartialMessage<_ReadLintsResult>) {
    super();
    this.path = "";
    this.linterErrors = [];
    this.linterErrorsByFile = [];
    proto3.util.initPartial(data, this as _ReadLintsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsResult {
    return new _ReadLintsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsResult {
    return new _ReadLintsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsResult {
    return new _ReadLintsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsResult | PlainMessage<_ReadLintsResult> | undefined | null, b2: _ReadLintsResult | PlainMessage<_ReadLintsResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsResult as unknown as MessageType<_ReadLintsResult>, a, b2);
  }
})();
export type ReadLintsResult = InstanceType<typeof ReadLintsResult$Runtime>;
var ReadLintsResult: MessageType<ReadLintsResult> = ReadLintsResult$Runtime as unknown as MessageType<ReadLintsResult>;
(ReadLintsResult as MutableMessageType<ReadLintsResult>).runtime = proto3;
(ReadLintsResult as MutableMessageType<ReadLintsResult>).typeName = "aiserver.v1.ReadLintsResult";
(ReadLintsResult as MutableMessageType<ReadLintsResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "linter_errors", kind: "message", T: LinterError, repeated: true },
  { no: 3, name: "linter_errors_by_file", kind: "message", T: LinterErrors, repeated: true }
]);
var ReadLintsStream$Runtime = (() => class _ReadLintsStream extends Message<_ReadLintsStream> {
  constructor(data?: PartialMessage<_ReadLintsStream>) {
    super();
    proto3.util.initPartial(data, this as _ReadLintsStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadLintsStream {
    return new _ReadLintsStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadLintsStream {
    return new _ReadLintsStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadLintsStream {
    return new _ReadLintsStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadLintsStream | PlainMessage<_ReadLintsStream> | undefined | null, b2: _ReadLintsStream | PlainMessage<_ReadLintsStream> | undefined | null): boolean {
    return proto3.util.equals(_ReadLintsStream as unknown as MessageType<_ReadLintsStream>, a, b2);
  }
})();
export type ReadLintsStream = InstanceType<typeof ReadLintsStream$Runtime>;
var ReadLintsStream: MessageType<ReadLintsStream> = ReadLintsStream$Runtime as unknown as MessageType<ReadLintsStream>;
(ReadLintsStream as MutableMessageType<ReadLintsStream>).runtime = proto3;
(ReadLintsStream as MutableMessageType<ReadLintsStream>).typeName = "aiserver.v1.ReadLintsStream";
(ReadLintsStream as MutableMessageType<ReadLintsStream>).fields = proto3.util.newFieldList(() => []);
var GotodefStream$Runtime = (() => class _GotodefStream extends Message<_GotodefStream> {
  constructor(data?: PartialMessage<_GotodefStream>) {
    super();
    proto3.util.initPartial(data, this as _GotodefStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GotodefStream {
    return new _GotodefStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GotodefStream {
    return new _GotodefStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GotodefStream {
    return new _GotodefStream().fromJsonString(jsonString, options);
  }
  static equals(a: _GotodefStream | PlainMessage<_GotodefStream> | undefined | null, b2: _GotodefStream | PlainMessage<_GotodefStream> | undefined | null): boolean {
    return proto3.util.equals(_GotodefStream as unknown as MessageType<_GotodefStream>, a, b2);
  }
})();
export type GotodefStream = InstanceType<typeof GotodefStream$Runtime>;
var GotodefStream: MessageType<GotodefStream> = GotodefStream$Runtime as unknown as MessageType<GotodefStream>;
(GotodefStream as MutableMessageType<GotodefStream>).runtime = proto3;
(GotodefStream as MutableMessageType<GotodefStream>).typeName = "aiserver.v1.GotodefStream";
(GotodefStream as MutableMessageType<GotodefStream>).fields = proto3.util.newFieldList(() => []);
var TaskParams$Runtime = (() => class _TaskParams extends Message<_TaskParams> {
  declare taskDescription: string;
  declare taskTitle: string;
  declare async?: boolean;
  declare allowedWriteDirectories: string[];
  declare modelOverride?: string;
  declare maxModeOverride?: boolean;
  declare defaultExpandedWhileRunning?: boolean;
  constructor(data?: PartialMessage<_TaskParams>) {
    super();
    this.taskDescription = "";
    this.taskTitle = "";
    this.allowedWriteDirectories = [];
    proto3.util.initPartial(data, this as _TaskParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskParams {
    return new _TaskParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskParams {
    return new _TaskParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskParams {
    return new _TaskParams().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskParams | PlainMessage<_TaskParams> | undefined | null, b2: _TaskParams | PlainMessage<_TaskParams> | undefined | null): boolean {
    return proto3.util.equals(_TaskParams as unknown as MessageType<_TaskParams>, a, b2);
  }
})();
export type TaskParams = InstanceType<typeof TaskParams$Runtime>;
var TaskParams: MessageType<TaskParams> = TaskParams$Runtime as unknown as MessageType<TaskParams>;
(TaskParams as MutableMessageType<TaskParams>).runtime = proto3;
(TaskParams as MutableMessageType<TaskParams>).typeName = "aiserver.v1.TaskParams";
(TaskParams as MutableMessageType<TaskParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "task_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "async", kind: "scalar", T: 8, opt: true },
  { no: 3, name: "allowed_write_directories", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "model_override", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "max_mode_override", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "default_expanded_while_running", kind: "scalar", T: 8, opt: true }
]);
var TaskResult2$Runtime = (() => class _TaskResult extends Message<_TaskResult> {
  declare result: { case: "completedTaskResult"; value: TaskResult_CompletedTaskResult } | { case: "asyncTaskResult"; value: TaskResult_AsyncTaskResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TaskResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _TaskResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskResult {
    return new _TaskResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskResult {
    return new _TaskResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskResult {
    return new _TaskResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskResult | PlainMessage<_TaskResult> | undefined | null, b2: _TaskResult | PlainMessage<_TaskResult> | undefined | null): boolean {
    return proto3.util.equals(_TaskResult as unknown as MessageType<_TaskResult>, a, b2);
  }
})();
export type TaskResult2 = InstanceType<typeof TaskResult2$Runtime>;
var TaskResult2: MessageType<TaskResult2> = TaskResult2$Runtime as unknown as MessageType<TaskResult2>;
(TaskResult2 as MutableMessageType<TaskResult2>).runtime = proto3;
(TaskResult2 as MutableMessageType<TaskResult2>).typeName = "aiserver.v1.TaskResult";
(TaskResult2 as MutableMessageType<TaskResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "completed_task_result", kind: "message", T: TaskResult_CompletedTaskResult, oneof: "result" },
  { no: 2, name: "async_task_result", kind: "message", T: TaskResult_AsyncTaskResult, oneof: "result" }
]);
var TaskResult_CompletedTaskResult$Runtime = (() => class _TaskResult_CompletedTaskResult extends Message<_TaskResult_CompletedTaskResult> {
  declare summary: string;
  declare fileResults: FixLintsResult_FileResult[];
  declare userAborted: boolean;
  declare subagentErrored: boolean;
  constructor(data?: PartialMessage<_TaskResult_CompletedTaskResult>) {
    super();
    this.summary = "";
    this.fileResults = [];
    this.userAborted = false;
    this.subagentErrored = false;
    proto3.util.initPartial(data, this as _TaskResult_CompletedTaskResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskResult_CompletedTaskResult {
    return new _TaskResult_CompletedTaskResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskResult_CompletedTaskResult {
    return new _TaskResult_CompletedTaskResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskResult_CompletedTaskResult {
    return new _TaskResult_CompletedTaskResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskResult_CompletedTaskResult | PlainMessage<_TaskResult_CompletedTaskResult> | undefined | null, b2: _TaskResult_CompletedTaskResult | PlainMessage<_TaskResult_CompletedTaskResult> | undefined | null): boolean {
    return proto3.util.equals(_TaskResult_CompletedTaskResult as unknown as MessageType<_TaskResult_CompletedTaskResult>, a, b2);
  }
})();
export type TaskResult_CompletedTaskResult = InstanceType<typeof TaskResult_CompletedTaskResult$Runtime>;
var TaskResult_CompletedTaskResult: MessageType<TaskResult_CompletedTaskResult> = TaskResult_CompletedTaskResult$Runtime as unknown as MessageType<TaskResult_CompletedTaskResult>;
(TaskResult_CompletedTaskResult as MutableMessageType<TaskResult_CompletedTaskResult>).runtime = proto3;
(TaskResult_CompletedTaskResult as MutableMessageType<TaskResult_CompletedTaskResult>).typeName = "aiserver.v1.TaskResult.CompletedTaskResult";
(TaskResult_CompletedTaskResult as MutableMessageType<TaskResult_CompletedTaskResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "file_results", kind: "message", T: FixLintsResult_FileResult, repeated: true },
  {
    no: 3,
    name: "user_aborted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "subagent_errored",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TaskResult_AsyncTaskResult$Runtime = (() => class _TaskResult_AsyncTaskResult extends Message<_TaskResult_AsyncTaskResult> {
  declare taskId: string;
  declare userAborted: boolean;
  declare subagentErrored: boolean;
  constructor(data?: PartialMessage<_TaskResult_AsyncTaskResult>) {
    super();
    this.taskId = "";
    this.userAborted = false;
    this.subagentErrored = false;
    proto3.util.initPartial(data, this as _TaskResult_AsyncTaskResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskResult_AsyncTaskResult {
    return new _TaskResult_AsyncTaskResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskResult_AsyncTaskResult {
    return new _TaskResult_AsyncTaskResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskResult_AsyncTaskResult {
    return new _TaskResult_AsyncTaskResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskResult_AsyncTaskResult | PlainMessage<_TaskResult_AsyncTaskResult> | undefined | null, b2: _TaskResult_AsyncTaskResult | PlainMessage<_TaskResult_AsyncTaskResult> | undefined | null): boolean {
    return proto3.util.equals(_TaskResult_AsyncTaskResult as unknown as MessageType<_TaskResult_AsyncTaskResult>, a, b2);
  }
})();
export type TaskResult_AsyncTaskResult = InstanceType<typeof TaskResult_AsyncTaskResult$Runtime>;
var TaskResult_AsyncTaskResult: MessageType<TaskResult_AsyncTaskResult> = TaskResult_AsyncTaskResult$Runtime as unknown as MessageType<TaskResult_AsyncTaskResult>;
(TaskResult_AsyncTaskResult as MutableMessageType<TaskResult_AsyncTaskResult>).runtime = proto3;
(TaskResult_AsyncTaskResult as MutableMessageType<TaskResult_AsyncTaskResult>).typeName = "aiserver.v1.TaskResult.AsyncTaskResult";
(TaskResult_AsyncTaskResult as MutableMessageType<TaskResult_AsyncTaskResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "user_aborted",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "subagent_errored",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TaskStream$Runtime = (() => class _TaskStream extends Message<_TaskStream> {
  constructor(data?: PartialMessage<_TaskStream>) {
    super();
    proto3.util.initPartial(data, this as _TaskStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskStream {
    return new _TaskStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskStream {
    return new _TaskStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskStream {
    return new _TaskStream().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskStream | PlainMessage<_TaskStream> | undefined | null, b2: _TaskStream | PlainMessage<_TaskStream> | undefined | null): boolean {
    return proto3.util.equals(_TaskStream as unknown as MessageType<_TaskStream>, a, b2);
  }
})();
export type TaskStream = InstanceType<typeof TaskStream$Runtime>;
var TaskStream: MessageType<TaskStream> = TaskStream$Runtime as unknown as MessageType<TaskStream>;
(TaskStream as MutableMessageType<TaskStream>).runtime = proto3;
(TaskStream as MutableMessageType<TaskStream>).typeName = "aiserver.v1.TaskStream";
(TaskStream as MutableMessageType<TaskStream>).fields = proto3.util.newFieldList(() => []);
var TaskV2Params$Runtime = (() => class _TaskV2Params extends Message<_TaskV2Params> {
  declare description: string;
  declare prompt: string;
  declare subagentType: string;
  declare model?: string;
  declare name: string;
  declare mode: TaskMode;
  constructor(data?: PartialMessage<_TaskV2Params>) {
    super();
    this.description = "";
    this.prompt = "";
    this.subagentType = "";
    this.name = "";
    this.mode = TaskMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _TaskV2Params);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskV2Params {
    return new _TaskV2Params().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskV2Params {
    return new _TaskV2Params().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskV2Params {
    return new _TaskV2Params().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskV2Params | PlainMessage<_TaskV2Params> | undefined | null, b2: _TaskV2Params | PlainMessage<_TaskV2Params> | undefined | null): boolean {
    return proto3.util.equals(_TaskV2Params as unknown as MessageType<_TaskV2Params>, a, b2);
  }
})();
export type TaskV2Params = InstanceType<typeof TaskV2Params$Runtime>;
var TaskV2Params: MessageType<TaskV2Params> = TaskV2Params$Runtime as unknown as MessageType<TaskV2Params>;
(TaskV2Params as MutableMessageType<TaskV2Params>).runtime = proto3;
(TaskV2Params as MutableMessageType<TaskV2Params>).typeName = "aiserver.v1.TaskV2Params";
(TaskV2Params as MutableMessageType<TaskV2Params>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "model", kind: "scalar", T: 9, opt: true },
  {
    no: 5,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "mode", kind: "enum", T: proto3.getEnumType(TaskMode) }
]);
var TaskV2Result$Runtime = (() => class _TaskV2Result extends Message<_TaskV2Result> {
  declare agentId?: string;
  declare isBackground: boolean;
  declare cloudAgentBcId?: string;
  constructor(data?: PartialMessage<_TaskV2Result>) {
    super();
    this.isBackground = false;
    proto3.util.initPartial(data, this as _TaskV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskV2Result {
    return new _TaskV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskV2Result {
    return new _TaskV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskV2Result {
    return new _TaskV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskV2Result | PlainMessage<_TaskV2Result> | undefined | null, b2: _TaskV2Result | PlainMessage<_TaskV2Result> | undefined | null): boolean {
    return proto3.util.equals(_TaskV2Result as unknown as MessageType<_TaskV2Result>, a, b2);
  }
})();
export type TaskV2Result = InstanceType<typeof TaskV2Result$Runtime>;
var TaskV2Result: MessageType<TaskV2Result> = TaskV2Result$Runtime as unknown as MessageType<TaskV2Result>;
(TaskV2Result as MutableMessageType<TaskV2Result>).runtime = proto3;
(TaskV2Result as MutableMessageType<TaskV2Result>).typeName = "aiserver.v1.TaskV2Result";
(TaskV2Result as MutableMessageType<TaskV2Result>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_id", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }
]);
var TaskV2Stream$Runtime = (() => class _TaskV2Stream extends Message<_TaskV2Stream> {
  constructor(data?: PartialMessage<_TaskV2Stream>) {
    super();
    proto3.util.initPartial(data, this as _TaskV2Stream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskV2Stream {
    return new _TaskV2Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskV2Stream {
    return new _TaskV2Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskV2Stream {
    return new _TaskV2Stream().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskV2Stream | PlainMessage<_TaskV2Stream> | undefined | null, b2: _TaskV2Stream | PlainMessage<_TaskV2Stream> | undefined | null): boolean {
    return proto3.util.equals(_TaskV2Stream as unknown as MessageType<_TaskV2Stream>, a, b2);
  }
})();
export type TaskV2Stream = InstanceType<typeof TaskV2Stream$Runtime>;
var TaskV2Stream: MessageType<TaskV2Stream> = TaskV2Stream$Runtime as unknown as MessageType<TaskV2Stream>;
(TaskV2Stream as MutableMessageType<TaskV2Stream>).runtime = proto3;
(TaskV2Stream as MutableMessageType<TaskV2Stream>).typeName = "aiserver.v1.TaskV2Stream";
(TaskV2Stream as MutableMessageType<TaskV2Stream>).fields = proto3.util.newFieldList(() => []);
var RipgrepRawSearchParams$Runtime = (() => class _RipgrepRawSearchParams extends Message<_RipgrepRawSearchParams> {
  declare pattern: string;
  declare path?: string;
  declare glob?: string;
  declare outputMode?: string;
  declare contextBefore?: number;
  declare contextAfter?: number;
  declare context?: number;
  declare caseInsensitive?: boolean;
  declare type?: string;
  declare headLimit?: number;
  declare multiline?: boolean;
  declare sort?: string;
  declare sortAscending?: boolean;
  declare ignoreGlobs: string[];
  declare offset?: number;
  constructor(data?: PartialMessage<_RipgrepRawSearchParams>) {
    super();
    this.pattern = "";
    this.ignoreGlobs = [];
    proto3.util.initPartial(data, this as _RipgrepRawSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchParams {
    return new _RipgrepRawSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchParams {
    return new _RipgrepRawSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchParams {
    return new _RipgrepRawSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchParams | PlainMessage<_RipgrepRawSearchParams> | undefined | null, b2: _RipgrepRawSearchParams | PlainMessage<_RipgrepRawSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchParams as unknown as MessageType<_RipgrepRawSearchParams>, a, b2);
  }
})();
export type RipgrepRawSearchParams = InstanceType<typeof RipgrepRawSearchParams$Runtime>;
var RipgrepRawSearchParams: MessageType<RipgrepRawSearchParams> = RipgrepRawSearchParams$Runtime as unknown as MessageType<RipgrepRawSearchParams>;
(RipgrepRawSearchParams as MutableMessageType<RipgrepRawSearchParams>).runtime = proto3;
(RipgrepRawSearchParams as MutableMessageType<RipgrepRawSearchParams>).typeName = "aiserver.v1.RipgrepRawSearchParams";
(RipgrepRawSearchParams as MutableMessageType<RipgrepRawSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "glob", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "output_mode", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "context_before", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "context_after", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "context", kind: "scalar", T: 5, opt: true },
  { no: 8, name: "case_insensitive", kind: "scalar", T: 8, opt: true },
  { no: 9, name: "type", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "head_limit", kind: "scalar", T: 5, opt: true },
  { no: 11, name: "multiline", kind: "scalar", T: 8, opt: true },
  { no: 12, name: "sort", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "sort_ascending", kind: "scalar", T: 8, opt: true },
  { no: 14, name: "ignore_globs", kind: "scalar", T: 9, repeated: true },
  { no: 15, name: "offset", kind: "scalar", T: 5, opt: true }
]);
var RipgrepRawSearchResult$Runtime = (() => class _RipgrepRawSearchResult extends Message<_RipgrepRawSearchResult> {
  declare result: { case: "success"; value: RipgrepRawSearchSuccess } | { case: "error"; value: RipgrepRawSearchError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RipgrepRawSearchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RipgrepRawSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchResult {
    return new _RipgrepRawSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchResult {
    return new _RipgrepRawSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchResult {
    return new _RipgrepRawSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchResult | PlainMessage<_RipgrepRawSearchResult> | undefined | null, b2: _RipgrepRawSearchResult | PlainMessage<_RipgrepRawSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchResult as unknown as MessageType<_RipgrepRawSearchResult>, a, b2);
  }
})();
export type RipgrepRawSearchResult = InstanceType<typeof RipgrepRawSearchResult$Runtime>;
var RipgrepRawSearchResult: MessageType<RipgrepRawSearchResult> = RipgrepRawSearchResult$Runtime as unknown as MessageType<RipgrepRawSearchResult>;
(RipgrepRawSearchResult as MutableMessageType<RipgrepRawSearchResult>).runtime = proto3;
(RipgrepRawSearchResult as MutableMessageType<RipgrepRawSearchResult>).typeName = "aiserver.v1.RipgrepRawSearchResult";
(RipgrepRawSearchResult as MutableMessageType<RipgrepRawSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: RipgrepRawSearchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: RipgrepRawSearchError, oneof: "result" }
]);
var RipgrepRawSearchError$Runtime = (() => class _RipgrepRawSearchError extends Message<_RipgrepRawSearchError> {
  declare error: string;
  constructor(data?: PartialMessage<_RipgrepRawSearchError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _RipgrepRawSearchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchError {
    return new _RipgrepRawSearchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchError {
    return new _RipgrepRawSearchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchError {
    return new _RipgrepRawSearchError().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchError | PlainMessage<_RipgrepRawSearchError> | undefined | null, b2: _RipgrepRawSearchError | PlainMessage<_RipgrepRawSearchError> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchError as unknown as MessageType<_RipgrepRawSearchError>, a, b2);
  }
})();
export type RipgrepRawSearchError = InstanceType<typeof RipgrepRawSearchError$Runtime>;
var RipgrepRawSearchError: MessageType<RipgrepRawSearchError> = RipgrepRawSearchError$Runtime as unknown as MessageType<RipgrepRawSearchError>;
(RipgrepRawSearchError as MutableMessageType<RipgrepRawSearchError>).runtime = proto3;
(RipgrepRawSearchError as MutableMessageType<RipgrepRawSearchError>).typeName = "aiserver.v1.RipgrepRawSearchError";
(RipgrepRawSearchError as MutableMessageType<RipgrepRawSearchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RipgrepRawSearchSuccess$Runtime = (() => class _RipgrepRawSearchSuccess extends Message<_RipgrepRawSearchSuccess> {
  declare pattern: string;
  declare path: string;
  declare outputMode: string;
  declare workspaceResults: { [key: string]: RipgrepRawSearchUnionResult };
  declare activeEditorResult?: RipgrepRawSearchUnionResult;
  constructor(data?: PartialMessage<_RipgrepRawSearchSuccess>) {
    super();
    this.pattern = "";
    this.path = "";
    this.outputMode = "";
    this.workspaceResults = {};
    proto3.util.initPartial(data, this as _RipgrepRawSearchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchSuccess {
    return new _RipgrepRawSearchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchSuccess {
    return new _RipgrepRawSearchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchSuccess {
    return new _RipgrepRawSearchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchSuccess | PlainMessage<_RipgrepRawSearchSuccess> | undefined | null, b2: _RipgrepRawSearchSuccess | PlainMessage<_RipgrepRawSearchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchSuccess as unknown as MessageType<_RipgrepRawSearchSuccess>, a, b2);
  }
})();
export type RipgrepRawSearchSuccess = InstanceType<typeof RipgrepRawSearchSuccess$Runtime>;
var RipgrepRawSearchSuccess: MessageType<RipgrepRawSearchSuccess> = RipgrepRawSearchSuccess$Runtime as unknown as MessageType<RipgrepRawSearchSuccess>;
(RipgrepRawSearchSuccess as MutableMessageType<RipgrepRawSearchSuccess>).runtime = proto3;
(RipgrepRawSearchSuccess as MutableMessageType<RipgrepRawSearchSuccess>).typeName = "aiserver.v1.RipgrepRawSearchSuccess";
(RipgrepRawSearchSuccess as MutableMessageType<RipgrepRawSearchSuccess>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "output_mode",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "workspace_results", kind: "map", K: 9, V: { kind: "message", T: RipgrepRawSearchUnionResult } },
  { no: 5, name: "active_editor_result", kind: "message", T: RipgrepRawSearchUnionResult, opt: true }
]);
var RipgrepRawSearchUnionResult$Runtime = (() => class _RipgrepRawSearchUnionResult extends Message<_RipgrepRawSearchUnionResult> {
  declare result: { case: "count"; value: RipgrepRawSearchCountResult } | { case: "files"; value: RipgrepRawSearchFilesResult } | { case: "content"; value: RipgrepRawSearchContentResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RipgrepRawSearchUnionResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _RipgrepRawSearchUnionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchUnionResult {
    return new _RipgrepRawSearchUnionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchUnionResult {
    return new _RipgrepRawSearchUnionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchUnionResult {
    return new _RipgrepRawSearchUnionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchUnionResult | PlainMessage<_RipgrepRawSearchUnionResult> | undefined | null, b2: _RipgrepRawSearchUnionResult | PlainMessage<_RipgrepRawSearchUnionResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchUnionResult as unknown as MessageType<_RipgrepRawSearchUnionResult>, a, b2);
  }
})();
export type RipgrepRawSearchUnionResult = InstanceType<typeof RipgrepRawSearchUnionResult$Runtime>;
var RipgrepRawSearchUnionResult: MessageType<RipgrepRawSearchUnionResult> = RipgrepRawSearchUnionResult$Runtime as unknown as MessageType<RipgrepRawSearchUnionResult>;
(RipgrepRawSearchUnionResult as MutableMessageType<RipgrepRawSearchUnionResult>).runtime = proto3;
(RipgrepRawSearchUnionResult as MutableMessageType<RipgrepRawSearchUnionResult>).typeName = "aiserver.v1.RipgrepRawSearchUnionResult";
(RipgrepRawSearchUnionResult as MutableMessageType<RipgrepRawSearchUnionResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "count", kind: "message", T: RipgrepRawSearchCountResult, oneof: "result" },
  { no: 2, name: "files", kind: "message", T: RipgrepRawSearchFilesResult, oneof: "result" },
  { no: 3, name: "content", kind: "message", T: RipgrepRawSearchContentResult, oneof: "result" }
]);
var RipgrepRawSearchCountResult$Runtime = (() => class _RipgrepRawSearchCountResult extends Message<_RipgrepRawSearchCountResult> {
  declare counts: RipgrepRawSearchFileCount[];
  declare totalFiles: number;
  declare totalMatches: number;
  declare clientTruncated: boolean;
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  declare ripgrepTruncated: boolean;
  constructor(data?: PartialMessage<_RipgrepRawSearchCountResult>) {
    super();
    this.counts = [];
    this.totalFiles = 0;
    this.totalMatches = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _RipgrepRawSearchCountResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchCountResult {
    return new _RipgrepRawSearchCountResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchCountResult {
    return new _RipgrepRawSearchCountResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchCountResult {
    return new _RipgrepRawSearchCountResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchCountResult | PlainMessage<_RipgrepRawSearchCountResult> | undefined | null, b2: _RipgrepRawSearchCountResult | PlainMessage<_RipgrepRawSearchCountResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchCountResult as unknown as MessageType<_RipgrepRawSearchCountResult>, a, b2);
  }
})();
export type RipgrepRawSearchCountResult = InstanceType<typeof RipgrepRawSearchCountResult$Runtime>;
var RipgrepRawSearchCountResult: MessageType<RipgrepRawSearchCountResult> = RipgrepRawSearchCountResult$Runtime as unknown as MessageType<RipgrepRawSearchCountResult>;
(RipgrepRawSearchCountResult as MutableMessageType<RipgrepRawSearchCountResult>).runtime = proto3;
(RipgrepRawSearchCountResult as MutableMessageType<RipgrepRawSearchCountResult>).typeName = "aiserver.v1.RipgrepRawSearchCountResult";
(RipgrepRawSearchCountResult as MutableMessageType<RipgrepRawSearchCountResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "counts", kind: "message", T: RipgrepRawSearchFileCount, repeated: true },
  {
    no: 2,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_matches",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true },
  {
    no: 5,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RipgrepRawSearchFileCount$Runtime = (() => class _RipgrepRawSearchFileCount extends Message<_RipgrepRawSearchFileCount> {
  declare file: string;
  declare count: number;
  declare isDirty?: boolean;
  declare isOutOfWorkspace?: boolean;
  declare absolutePath?: string;
  constructor(data?: PartialMessage<_RipgrepRawSearchFileCount>) {
    super();
    this.file = "";
    this.count = 0;
    proto3.util.initPartial(data, this as _RipgrepRawSearchFileCount);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchFileCount {
    return new _RipgrepRawSearchFileCount().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFileCount {
    return new _RipgrepRawSearchFileCount().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFileCount {
    return new _RipgrepRawSearchFileCount().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchFileCount | PlainMessage<_RipgrepRawSearchFileCount> | undefined | null, b2: _RipgrepRawSearchFileCount | PlainMessage<_RipgrepRawSearchFileCount> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchFileCount as unknown as MessageType<_RipgrepRawSearchFileCount>, a, b2);
  }
})();
export type RipgrepRawSearchFileCount = InstanceType<typeof RipgrepRawSearchFileCount$Runtime>;
var RipgrepRawSearchFileCount: MessageType<RipgrepRawSearchFileCount> = RipgrepRawSearchFileCount$Runtime as unknown as MessageType<RipgrepRawSearchFileCount>;
(RipgrepRawSearchFileCount as MutableMessageType<RipgrepRawSearchFileCount>).runtime = proto3;
(RipgrepRawSearchFileCount as MutableMessageType<RipgrepRawSearchFileCount>).typeName = "aiserver.v1.RipgrepRawSearchFileCount";
(RipgrepRawSearchFileCount as MutableMessageType<RipgrepRawSearchFileCount>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }
]);
var RipgrepRawSearchFilesResult$Runtime = (() => class _RipgrepRawSearchFilesResult extends Message<_RipgrepRawSearchFilesResult> {
  declare files: string[];
  declare totalFiles: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  declare filesWithMeta: RipgrepRawSearchFilesResult_FileEntry[];
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  constructor(data?: PartialMessage<_RipgrepRawSearchFilesResult>) {
    super();
    this.files = [];
    this.totalFiles = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    this.filesWithMeta = [];
    proto3.util.initPartial(data, this as _RipgrepRawSearchFilesResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchFilesResult {
    return new _RipgrepRawSearchFilesResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFilesResult {
    return new _RipgrepRawSearchFilesResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFilesResult {
    return new _RipgrepRawSearchFilesResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchFilesResult | PlainMessage<_RipgrepRawSearchFilesResult> | undefined | null, b2: _RipgrepRawSearchFilesResult | PlainMessage<_RipgrepRawSearchFilesResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchFilesResult as unknown as MessageType<_RipgrepRawSearchFilesResult>, a, b2);
  }
})();
export type RipgrepRawSearchFilesResult = InstanceType<typeof RipgrepRawSearchFilesResult$Runtime>;
var RipgrepRawSearchFilesResult: MessageType<RipgrepRawSearchFilesResult> = RipgrepRawSearchFilesResult$Runtime as unknown as MessageType<RipgrepRawSearchFilesResult>;
(RipgrepRawSearchFilesResult as MutableMessageType<RipgrepRawSearchFilesResult>).runtime = proto3;
(RipgrepRawSearchFilesResult as MutableMessageType<RipgrepRawSearchFilesResult>).typeName = "aiserver.v1.RipgrepRawSearchFilesResult";
(RipgrepRawSearchFilesResult as MutableMessageType<RipgrepRawSearchFilesResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "files_with_meta", kind: "message", T: RipgrepRawSearchFilesResult_FileEntry, repeated: true },
  { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }
]);
var RipgrepRawSearchFilesResult_FileEntry$Runtime = (() => class _RipgrepRawSearchFilesResult_FileEntry extends Message<_RipgrepRawSearchFilesResult_FileEntry> {
  declare file: string;
  declare isDirty: boolean;
  declare isOutOfWorkspace: boolean;
  declare absolutePath?: string;
  constructor(data?: PartialMessage<_RipgrepRawSearchFilesResult_FileEntry>) {
    super();
    this.file = "";
    this.isDirty = false;
    this.isOutOfWorkspace = false;
    proto3.util.initPartial(data, this as _RipgrepRawSearchFilesResult_FileEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchFilesResult_FileEntry {
    return new _RipgrepRawSearchFilesResult_FileEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFilesResult_FileEntry {
    return new _RipgrepRawSearchFilesResult_FileEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFilesResult_FileEntry {
    return new _RipgrepRawSearchFilesResult_FileEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchFilesResult_FileEntry | PlainMessage<_RipgrepRawSearchFilesResult_FileEntry> | undefined | null, b2: _RipgrepRawSearchFilesResult_FileEntry | PlainMessage<_RipgrepRawSearchFilesResult_FileEntry> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchFilesResult_FileEntry as unknown as MessageType<_RipgrepRawSearchFilesResult_FileEntry>, a, b2);
  }
})();
export type RipgrepRawSearchFilesResult_FileEntry = InstanceType<typeof RipgrepRawSearchFilesResult_FileEntry$Runtime>;
var RipgrepRawSearchFilesResult_FileEntry: MessageType<RipgrepRawSearchFilesResult_FileEntry> = RipgrepRawSearchFilesResult_FileEntry$Runtime as unknown as MessageType<RipgrepRawSearchFilesResult_FileEntry>;
(RipgrepRawSearchFilesResult_FileEntry as MutableMessageType<RipgrepRawSearchFilesResult_FileEntry>).runtime = proto3;
(RipgrepRawSearchFilesResult_FileEntry as MutableMessageType<RipgrepRawSearchFilesResult_FileEntry>).typeName = "aiserver.v1.RipgrepRawSearchFilesResult.FileEntry";
(RipgrepRawSearchFilesResult_FileEntry as MutableMessageType<RipgrepRawSearchFilesResult_FileEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_dirty",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "is_out_of_workspace",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "absolute_path", kind: "scalar", T: 9, opt: true }
]);
var RipgrepRawSearchContentResult$Runtime = (() => class _RipgrepRawSearchContentResult extends Message<_RipgrepRawSearchContentResult> {
  declare matches: RipgrepRawSearchFileMatch[];
  declare totalLines: number;
  declare totalMatchedLines: number;
  declare clientTruncated: boolean;
  declare ripgrepTruncated: boolean;
  declare headLimitApplied?: number;
  declare offsetApplied?: number;
  constructor(data?: PartialMessage<_RipgrepRawSearchContentResult>) {
    super();
    this.matches = [];
    this.totalLines = 0;
    this.totalMatchedLines = 0;
    this.clientTruncated = false;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _RipgrepRawSearchContentResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchContentResult {
    return new _RipgrepRawSearchContentResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchContentResult {
    return new _RipgrepRawSearchContentResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchContentResult {
    return new _RipgrepRawSearchContentResult().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchContentResult | PlainMessage<_RipgrepRawSearchContentResult> | undefined | null, b2: _RipgrepRawSearchContentResult | PlainMessage<_RipgrepRawSearchContentResult> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchContentResult as unknown as MessageType<_RipgrepRawSearchContentResult>, a, b2);
  }
})();
export type RipgrepRawSearchContentResult = InstanceType<typeof RipgrepRawSearchContentResult$Runtime>;
var RipgrepRawSearchContentResult: MessageType<RipgrepRawSearchContentResult> = RipgrepRawSearchContentResult$Runtime as unknown as MessageType<RipgrepRawSearchContentResult>;
(RipgrepRawSearchContentResult as MutableMessageType<RipgrepRawSearchContentResult>).runtime = proto3;
(RipgrepRawSearchContentResult as MutableMessageType<RipgrepRawSearchContentResult>).typeName = "aiserver.v1.RipgrepRawSearchContentResult";
(RipgrepRawSearchContentResult as MutableMessageType<RipgrepRawSearchContentResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "matches", kind: "message", T: RipgrepRawSearchFileMatch, repeated: true },
  {
    no: 2,
    name: "total_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "total_matched_lines",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "client_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "head_limit_applied", kind: "scalar", T: 5, opt: true },
  { no: 7, name: "offset_applied", kind: "scalar", T: 5, opt: true }
]);
var RipgrepRawSearchFileMatch$Runtime = (() => class _RipgrepRawSearchFileMatch extends Message<_RipgrepRawSearchFileMatch> {
  declare file: string;
  declare matches: RipgrepRawSearchContentMatch[];
  declare isDirty?: boolean;
  declare isOutOfWorkspace?: boolean;
  declare absolutePath?: string;
  constructor(data?: PartialMessage<_RipgrepRawSearchFileMatch>) {
    super();
    this.file = "";
    this.matches = [];
    proto3.util.initPartial(data, this as _RipgrepRawSearchFileMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchFileMatch {
    return new _RipgrepRawSearchFileMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFileMatch {
    return new _RipgrepRawSearchFileMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchFileMatch {
    return new _RipgrepRawSearchFileMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchFileMatch | PlainMessage<_RipgrepRawSearchFileMatch> | undefined | null, b2: _RipgrepRawSearchFileMatch | PlainMessage<_RipgrepRawSearchFileMatch> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchFileMatch as unknown as MessageType<_RipgrepRawSearchFileMatch>, a, b2);
  }
})();
export type RipgrepRawSearchFileMatch = InstanceType<typeof RipgrepRawSearchFileMatch$Runtime>;
var RipgrepRawSearchFileMatch: MessageType<RipgrepRawSearchFileMatch> = RipgrepRawSearchFileMatch$Runtime as unknown as MessageType<RipgrepRawSearchFileMatch>;
(RipgrepRawSearchFileMatch as MutableMessageType<RipgrepRawSearchFileMatch>).runtime = proto3;
(RipgrepRawSearchFileMatch as MutableMessageType<RipgrepRawSearchFileMatch>).typeName = "aiserver.v1.RipgrepRawSearchFileMatch";
(RipgrepRawSearchFileMatch as MutableMessageType<RipgrepRawSearchFileMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "matches", kind: "message", T: RipgrepRawSearchContentMatch, repeated: true },
  { no: 3, name: "is_dirty", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "is_out_of_workspace", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "absolute_path", kind: "scalar", T: 9, opt: true }
]);
var RipgrepRawSearchContentMatch$Runtime = (() => class _RipgrepRawSearchContentMatch extends Message<_RipgrepRawSearchContentMatch> {
  declare lineNumber: number;
  declare content: string;
  declare contentTruncated: boolean;
  declare isContextLine: boolean;
  constructor(data?: PartialMessage<_RipgrepRawSearchContentMatch>) {
    super();
    this.lineNumber = 0;
    this.content = "";
    this.contentTruncated = false;
    this.isContextLine = false;
    proto3.util.initPartial(data, this as _RipgrepRawSearchContentMatch);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchContentMatch {
    return new _RipgrepRawSearchContentMatch().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchContentMatch {
    return new _RipgrepRawSearchContentMatch().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchContentMatch {
    return new _RipgrepRawSearchContentMatch().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchContentMatch | PlainMessage<_RipgrepRawSearchContentMatch> | undefined | null, b2: _RipgrepRawSearchContentMatch | PlainMessage<_RipgrepRawSearchContentMatch> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchContentMatch as unknown as MessageType<_RipgrepRawSearchContentMatch>, a, b2);
  }
})();
export type RipgrepRawSearchContentMatch = InstanceType<typeof RipgrepRawSearchContentMatch$Runtime>;
var RipgrepRawSearchContentMatch: MessageType<RipgrepRawSearchContentMatch> = RipgrepRawSearchContentMatch$Runtime as unknown as MessageType<RipgrepRawSearchContentMatch>;
(RipgrepRawSearchContentMatch as MutableMessageType<RipgrepRawSearchContentMatch>).runtime = proto3;
(RipgrepRawSearchContentMatch as MutableMessageType<RipgrepRawSearchContentMatch>).typeName = "aiserver.v1.RipgrepRawSearchContentMatch";
(RipgrepRawSearchContentMatch as MutableMessageType<RipgrepRawSearchContentMatch>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "line_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "content_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "is_context_line",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RipgrepRawSearchStream$Runtime = (() => class _RipgrepRawSearchStream extends Message<_RipgrepRawSearchStream> {
  declare pattern: string;
  constructor(data?: PartialMessage<_RipgrepRawSearchStream>) {
    super();
    this.pattern = "";
    proto3.util.initPartial(data, this as _RipgrepRawSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RipgrepRawSearchStream {
    return new _RipgrepRawSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RipgrepRawSearchStream {
    return new _RipgrepRawSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RipgrepRawSearchStream {
    return new _RipgrepRawSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _RipgrepRawSearchStream | PlainMessage<_RipgrepRawSearchStream> | undefined | null, b2: _RipgrepRawSearchStream | PlainMessage<_RipgrepRawSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_RipgrepRawSearchStream as unknown as MessageType<_RipgrepRawSearchStream>, a, b2);
  }
})();
export type RipgrepRawSearchStream = InstanceType<typeof RipgrepRawSearchStream$Runtime>;
var RipgrepRawSearchStream: MessageType<RipgrepRawSearchStream> = RipgrepRawSearchStream$Runtime as unknown as MessageType<RipgrepRawSearchStream>;
(RipgrepRawSearchStream as MutableMessageType<RipgrepRawSearchStream>).runtime = proto3;
(RipgrepRawSearchStream as MutableMessageType<RipgrepRawSearchStream>).typeName = "aiserver.v1.RipgrepRawSearchStream";
(RipgrepRawSearchStream as MutableMessageType<RipgrepRawSearchStream>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AwaitTaskParams$Runtime = (() => class _AwaitTaskParams extends Message<_AwaitTaskParams> {
  declare ids: string[];
  constructor(data?: PartialMessage<_AwaitTaskParams>) {
    super();
    this.ids = [];
    proto3.util.initPartial(data, this as _AwaitTaskParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskParams {
    return new _AwaitTaskParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskParams {
    return new _AwaitTaskParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskParams {
    return new _AwaitTaskParams().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskParams | PlainMessage<_AwaitTaskParams> | undefined | null, b2: _AwaitTaskParams | PlainMessage<_AwaitTaskParams> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskParams as unknown as MessageType<_AwaitTaskParams>, a, b2);
  }
})();
export type AwaitTaskParams = InstanceType<typeof AwaitTaskParams$Runtime>;
var AwaitTaskParams: MessageType<AwaitTaskParams> = AwaitTaskParams$Runtime as unknown as MessageType<AwaitTaskParams>;
(AwaitTaskParams as MutableMessageType<AwaitTaskParams>).runtime = proto3;
(AwaitTaskParams as MutableMessageType<AwaitTaskParams>).typeName = "aiserver.v1.AwaitTaskParams";
(AwaitTaskParams as MutableMessageType<AwaitTaskParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "ids", kind: "scalar", T: 9, repeated: true }
]);
var AwaitTaskResult$Runtime = (() => class _AwaitTaskResult extends Message<_AwaitTaskResult> {
  declare taskResults: AwaitTaskResult_TaskResultItem[];
  declare missingTaskIds: string[];
  constructor(data?: PartialMessage<_AwaitTaskResult>) {
    super();
    this.taskResults = [];
    this.missingTaskIds = [];
    proto3.util.initPartial(data, this as _AwaitTaskResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskResult {
    return new _AwaitTaskResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskResult {
    return new _AwaitTaskResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskResult {
    return new _AwaitTaskResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskResult | PlainMessage<_AwaitTaskResult> | undefined | null, b2: _AwaitTaskResult | PlainMessage<_AwaitTaskResult> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskResult as unknown as MessageType<_AwaitTaskResult>, a, b2);
  }
})();
export type AwaitTaskResult = InstanceType<typeof AwaitTaskResult$Runtime>;
var AwaitTaskResult: MessageType<AwaitTaskResult> = AwaitTaskResult$Runtime as unknown as MessageType<AwaitTaskResult>;
(AwaitTaskResult as MutableMessageType<AwaitTaskResult>).runtime = proto3;
(AwaitTaskResult as MutableMessageType<AwaitTaskResult>).typeName = "aiserver.v1.AwaitTaskResult";
(AwaitTaskResult as MutableMessageType<AwaitTaskResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "task_results", kind: "message", T: AwaitTaskResult_TaskResultItem, repeated: true },
  { no: 2, name: "missing_task_ids", kind: "scalar", T: 9, repeated: true }
]);
var AwaitTaskResult_TaskResultItem$Runtime = (() => class _AwaitTaskResult_TaskResultItem extends Message<_AwaitTaskResult_TaskResultItem> {
  declare taskId: string;
  declare result?: TaskResult_CompletedTaskResult;
  constructor(data?: PartialMessage<_AwaitTaskResult_TaskResultItem>) {
    super();
    this.taskId = "";
    proto3.util.initPartial(data, this as _AwaitTaskResult_TaskResultItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskResult_TaskResultItem {
    return new _AwaitTaskResult_TaskResultItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskResult_TaskResultItem {
    return new _AwaitTaskResult_TaskResultItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskResult_TaskResultItem {
    return new _AwaitTaskResult_TaskResultItem().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskResult_TaskResultItem | PlainMessage<_AwaitTaskResult_TaskResultItem> | undefined | null, b2: _AwaitTaskResult_TaskResultItem | PlainMessage<_AwaitTaskResult_TaskResultItem> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskResult_TaskResultItem as unknown as MessageType<_AwaitTaskResult_TaskResultItem>, a, b2);
  }
})();
export type AwaitTaskResult_TaskResultItem = InstanceType<typeof AwaitTaskResult_TaskResultItem$Runtime>;
var AwaitTaskResult_TaskResultItem: MessageType<AwaitTaskResult_TaskResultItem> = AwaitTaskResult_TaskResultItem$Runtime as unknown as MessageType<AwaitTaskResult_TaskResultItem>;
(AwaitTaskResult_TaskResultItem as MutableMessageType<AwaitTaskResult_TaskResultItem>).runtime = proto3;
(AwaitTaskResult_TaskResultItem as MutableMessageType<AwaitTaskResult_TaskResultItem>).typeName = "aiserver.v1.AwaitTaskResult.TaskResultItem";
(AwaitTaskResult_TaskResultItem as MutableMessageType<AwaitTaskResult_TaskResultItem>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "result", kind: "message", T: TaskResult_CompletedTaskResult }
]);
var AwaitTaskStream$Runtime = (() => class _AwaitTaskStream extends Message<_AwaitTaskStream> {
  constructor(data?: PartialMessage<_AwaitTaskStream>) {
    super();
    proto3.util.initPartial(data, this as _AwaitTaskStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AwaitTaskStream {
    return new _AwaitTaskStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AwaitTaskStream {
    return new _AwaitTaskStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AwaitTaskStream {
    return new _AwaitTaskStream().fromJsonString(jsonString, options);
  }
  static equals(a: _AwaitTaskStream | PlainMessage<_AwaitTaskStream> | undefined | null, b2: _AwaitTaskStream | PlainMessage<_AwaitTaskStream> | undefined | null): boolean {
    return proto3.util.equals(_AwaitTaskStream as unknown as MessageType<_AwaitTaskStream>, a, b2);
  }
})();
export type AwaitTaskStream = InstanceType<typeof AwaitTaskStream$Runtime>;
var AwaitTaskStream: MessageType<AwaitTaskStream> = AwaitTaskStream$Runtime as unknown as MessageType<AwaitTaskStream>;
(AwaitTaskStream as MutableMessageType<AwaitTaskStream>).runtime = proto3;
(AwaitTaskStream as MutableMessageType<AwaitTaskStream>).typeName = "aiserver.v1.AwaitTaskStream";
(AwaitTaskStream as MutableMessageType<AwaitTaskStream>).fields = proto3.util.newFieldList(() => []);
var TodoReadParams$Runtime = (() => class _TodoReadParams extends Message<_TodoReadParams> {
  declare read: boolean;
  constructor(data?: PartialMessage<_TodoReadParams>) {
    super();
    this.read = false;
    proto3.util.initPartial(data, this as _TodoReadParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoReadParams {
    return new _TodoReadParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoReadParams {
    return new _TodoReadParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoReadParams {
    return new _TodoReadParams().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoReadParams | PlainMessage<_TodoReadParams> | undefined | null, b2: _TodoReadParams | PlainMessage<_TodoReadParams> | undefined | null): boolean {
    return proto3.util.equals(_TodoReadParams as unknown as MessageType<_TodoReadParams>, a, b2);
  }
})();
export type TodoReadParams = InstanceType<typeof TodoReadParams$Runtime>;
var TodoReadParams: MessageType<TodoReadParams> = TodoReadParams$Runtime as unknown as MessageType<TodoReadParams>;
(TodoReadParams as MutableMessageType<TodoReadParams>).runtime = proto3;
(TodoReadParams as MutableMessageType<TodoReadParams>).typeName = "aiserver.v1.TodoReadParams";
(TodoReadParams as MutableMessageType<TodoReadParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "read",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TodoItem2$Runtime = (() => class _TodoItem extends Message<_TodoItem> {
  declare content: string;
  declare status: string;
  declare id: string;
  declare dependencies: string[];
  constructor(data?: PartialMessage<_TodoItem>) {
    super();
    this.content = "";
    this.status = "";
    this.id = "";
    this.dependencies = [];
    proto3.util.initPartial(data, this as _TodoItem);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoItem {
    return new _TodoItem().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoItem {
    return new _TodoItem().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoItem {
    return new _TodoItem().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoItem | PlainMessage<_TodoItem> | undefined | null, b2: _TodoItem | PlainMessage<_TodoItem> | undefined | null): boolean {
    return proto3.util.equals(_TodoItem as unknown as MessageType<_TodoItem>, a, b2);
  }
})();
export type TodoItem2 = InstanceType<typeof TodoItem2$Runtime>;
var TodoItem2: MessageType<TodoItem2> = TodoItem2$Runtime as unknown as MessageType<TodoItem2>;
(TodoItem2 as MutableMessageType<TodoItem2>).runtime = proto3;
(TodoItem2 as MutableMessageType<TodoItem2>).typeName = "aiserver.v1.TodoItem";
(TodoItem2 as MutableMessageType<TodoItem2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: true }
]);
var TodoReadResult$Runtime = (() => class _TodoReadResult extends Message<_TodoReadResult> {
  declare todos: TodoItem2[];
  constructor(data?: PartialMessage<_TodoReadResult>) {
    super();
    this.todos = [];
    proto3.util.initPartial(data, this as _TodoReadResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoReadResult {
    return new _TodoReadResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoReadResult {
    return new _TodoReadResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoReadResult {
    return new _TodoReadResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoReadResult | PlainMessage<_TodoReadResult> | undefined | null, b2: _TodoReadResult | PlainMessage<_TodoReadResult> | undefined | null): boolean {
    return proto3.util.equals(_TodoReadResult as unknown as MessageType<_TodoReadResult>, a, b2);
  }
})();
export type TodoReadResult = InstanceType<typeof TodoReadResult$Runtime>;
var TodoReadResult: MessageType<TodoReadResult> = TodoReadResult$Runtime as unknown as MessageType<TodoReadResult>;
(TodoReadResult as MutableMessageType<TodoReadResult>).runtime = proto3;
(TodoReadResult as MutableMessageType<TodoReadResult>).typeName = "aiserver.v1.TodoReadResult";
(TodoReadResult as MutableMessageType<TodoReadResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "todos", kind: "message", T: TodoItem2, repeated: true }
]);
var TodoReadStream$Runtime = (() => class _TodoReadStream extends Message<_TodoReadStream> {
  constructor(data?: PartialMessage<_TodoReadStream>) {
    super();
    proto3.util.initPartial(data, this as _TodoReadStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoReadStream {
    return new _TodoReadStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoReadStream {
    return new _TodoReadStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoReadStream {
    return new _TodoReadStream().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoReadStream | PlainMessage<_TodoReadStream> | undefined | null, b2: _TodoReadStream | PlainMessage<_TodoReadStream> | undefined | null): boolean {
    return proto3.util.equals(_TodoReadStream as unknown as MessageType<_TodoReadStream>, a, b2);
  }
})();
export type TodoReadStream = InstanceType<typeof TodoReadStream$Runtime>;
var TodoReadStream: MessageType<TodoReadStream> = TodoReadStream$Runtime as unknown as MessageType<TodoReadStream>;
(TodoReadStream as MutableMessageType<TodoReadStream>).runtime = proto3;
(TodoReadStream as MutableMessageType<TodoReadStream>).typeName = "aiserver.v1.TodoReadStream";
(TodoReadStream as MutableMessageType<TodoReadStream>).fields = proto3.util.newFieldList(() => []);
var TodoWriteParams$Runtime = (() => class _TodoWriteParams extends Message<_TodoWriteParams> {
  declare todos: TodoItem2[];
  declare merge: boolean;
  constructor(data?: PartialMessage<_TodoWriteParams>) {
    super();
    this.todos = [];
    this.merge = false;
    proto3.util.initPartial(data, this as _TodoWriteParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoWriteParams {
    return new _TodoWriteParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoWriteParams {
    return new _TodoWriteParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoWriteParams {
    return new _TodoWriteParams().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoWriteParams | PlainMessage<_TodoWriteParams> | undefined | null, b2: _TodoWriteParams | PlainMessage<_TodoWriteParams> | undefined | null): boolean {
    return proto3.util.equals(_TodoWriteParams as unknown as MessageType<_TodoWriteParams>, a, b2);
  }
})();
export type TodoWriteParams = InstanceType<typeof TodoWriteParams$Runtime>;
var TodoWriteParams: MessageType<TodoWriteParams> = TodoWriteParams$Runtime as unknown as MessageType<TodoWriteParams>;
(TodoWriteParams as MutableMessageType<TodoWriteParams>).runtime = proto3;
(TodoWriteParams as MutableMessageType<TodoWriteParams>).typeName = "aiserver.v1.TodoWriteParams";
(TodoWriteParams as MutableMessageType<TodoWriteParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "todos", kind: "message", T: TodoItem2, repeated: true },
  {
    no: 2,
    name: "merge",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TodoWriteResult$Runtime = (() => class _TodoWriteResult extends Message<_TodoWriteResult> {
  declare success: boolean;
  declare readyTaskIds: string[];
  declare needsInProgressTodos: boolean;
  declare finalTodos: TodoItem2[];
  declare initialTodos: TodoItem2[];
  declare wasMerge: boolean;
  constructor(data?: PartialMessage<_TodoWriteResult>) {
    super();
    this.success = false;
    this.readyTaskIds = [];
    this.needsInProgressTodos = false;
    this.finalTodos = [];
    this.initialTodos = [];
    this.wasMerge = false;
    proto3.util.initPartial(data, this as _TodoWriteResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoWriteResult {
    return new _TodoWriteResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoWriteResult {
    return new _TodoWriteResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoWriteResult {
    return new _TodoWriteResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoWriteResult | PlainMessage<_TodoWriteResult> | undefined | null, b2: _TodoWriteResult | PlainMessage<_TodoWriteResult> | undefined | null): boolean {
    return proto3.util.equals(_TodoWriteResult as unknown as MessageType<_TodoWriteResult>, a, b2);
  }
})();
export type TodoWriteResult = InstanceType<typeof TodoWriteResult$Runtime>;
var TodoWriteResult: MessageType<TodoWriteResult> = TodoWriteResult$Runtime as unknown as MessageType<TodoWriteResult>;
(TodoWriteResult as MutableMessageType<TodoWriteResult>).runtime = proto3;
(TodoWriteResult as MutableMessageType<TodoWriteResult>).typeName = "aiserver.v1.TodoWriteResult";
(TodoWriteResult as MutableMessageType<TodoWriteResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "ready_task_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "needs_in_progress_todos",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "final_todos", kind: "message", T: TodoItem2, repeated: true },
  { no: 5, name: "initial_todos", kind: "message", T: TodoItem2, repeated: true },
  {
    no: 6,
    name: "was_merge",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var TodoWriteStream$Runtime = (() => class _TodoWriteStream extends Message<_TodoWriteStream> {
  constructor(data?: PartialMessage<_TodoWriteStream>) {
    super();
    proto3.util.initPartial(data, this as _TodoWriteStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TodoWriteStream {
    return new _TodoWriteStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TodoWriteStream {
    return new _TodoWriteStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TodoWriteStream {
    return new _TodoWriteStream().fromJsonString(jsonString, options);
  }
  static equals(a: _TodoWriteStream | PlainMessage<_TodoWriteStream> | undefined | null, b2: _TodoWriteStream | PlainMessage<_TodoWriteStream> | undefined | null): boolean {
    return proto3.util.equals(_TodoWriteStream as unknown as MessageType<_TodoWriteStream>, a, b2);
  }
})();
export type TodoWriteStream = InstanceType<typeof TodoWriteStream$Runtime>;
var TodoWriteStream: MessageType<TodoWriteStream> = TodoWriteStream$Runtime as unknown as MessageType<TodoWriteStream>;
(TodoWriteStream as MutableMessageType<TodoWriteStream>).runtime = proto3;
(TodoWriteStream as MutableMessageType<TodoWriteStream>).typeName = "aiserver.v1.TodoWriteStream";
(TodoWriteStream as MutableMessageType<TodoWriteStream>).fields = proto3.util.newFieldList(() => []);
var ListDirV2Params$Runtime = (() => class _ListDirV2Params extends Message<_ListDirV2Params> {
  declare targetDirectory: string;
  declare ignoreGlobs: string[];
  declare shouldEnrichTerminalMetadata?: boolean;
  constructor(data?: PartialMessage<_ListDirV2Params>) {
    super();
    this.targetDirectory = "";
    this.ignoreGlobs = [];
    proto3.util.initPartial(data, this as _ListDirV2Params);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirV2Params {
    return new _ListDirV2Params().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirV2Params {
    return new _ListDirV2Params().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirV2Params {
    return new _ListDirV2Params().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirV2Params | PlainMessage<_ListDirV2Params> | undefined | null, b2: _ListDirV2Params | PlainMessage<_ListDirV2Params> | undefined | null): boolean {
    return proto3.util.equals(_ListDirV2Params as unknown as MessageType<_ListDirV2Params>, a, b2);
  }
})();
export type ListDirV2Params = InstanceType<typeof ListDirV2Params$Runtime>;
var ListDirV2Params: MessageType<ListDirV2Params> = ListDirV2Params$Runtime as unknown as MessageType<ListDirV2Params>;
(ListDirV2Params as MutableMessageType<ListDirV2Params>).runtime = proto3;
(ListDirV2Params as MutableMessageType<ListDirV2Params>).typeName = "aiserver.v1.ListDirV2Params";
(ListDirV2Params as MutableMessageType<ListDirV2Params>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "target_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "ignore_globs", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "should_enrich_terminal_metadata", kind: "scalar", T: 8, opt: true }
]);
var ListDirV2Result$Runtime = (() => class _ListDirV2Result extends Message<_ListDirV2Result> {
  declare directoryTreeRoot?: ListDirV2Result_DirectoryTreeNode;
  constructor(data?: PartialMessage<_ListDirV2Result>) {
    super();
    proto3.util.initPartial(data, this as _ListDirV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirV2Result {
    return new _ListDirV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirV2Result {
    return new _ListDirV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirV2Result {
    return new _ListDirV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirV2Result | PlainMessage<_ListDirV2Result> | undefined | null, b2: _ListDirV2Result | PlainMessage<_ListDirV2Result> | undefined | null): boolean {
    return proto3.util.equals(_ListDirV2Result as unknown as MessageType<_ListDirV2Result>, a, b2);
  }
})();
export type ListDirV2Result = InstanceType<typeof ListDirV2Result$Runtime>;
var ListDirV2Result: MessageType<ListDirV2Result> = ListDirV2Result$Runtime as unknown as MessageType<ListDirV2Result>;
(ListDirV2Result as MutableMessageType<ListDirV2Result>).runtime = proto3;
(ListDirV2Result as MutableMessageType<ListDirV2Result>).typeName = "aiserver.v1.ListDirV2Result";
(ListDirV2Result as MutableMessageType<ListDirV2Result>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directory_tree_root", kind: "message", T: ListDirV2Result_DirectoryTreeNode }
]);
var ListDirV2Result_DirectoryTreeNode$Runtime = (() => class _ListDirV2Result_DirectoryTreeNode extends Message<_ListDirV2Result_DirectoryTreeNode> {
  declare absPath: string;
  declare childrenDirs: _ListDirV2Result_DirectoryTreeNode[];
  declare childrenFiles: ListDirV2Result_DirectoryTreeNode_File[];
  declare childrenWereProcessed: boolean;
  declare fullSubtreeExtensionCounts: { [key: string]: number };
  declare numFiles: number;
  constructor(data?: PartialMessage<_ListDirV2Result_DirectoryTreeNode>) {
    super();
    this.absPath = "";
    this.childrenDirs = [];
    this.childrenFiles = [];
    this.childrenWereProcessed = false;
    this.fullSubtreeExtensionCounts = {};
    this.numFiles = 0;
    proto3.util.initPartial(data, this as _ListDirV2Result_DirectoryTreeNode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirV2Result_DirectoryTreeNode {
    return new _ListDirV2Result_DirectoryTreeNode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirV2Result_DirectoryTreeNode {
    return new _ListDirV2Result_DirectoryTreeNode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirV2Result_DirectoryTreeNode {
    return new _ListDirV2Result_DirectoryTreeNode().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirV2Result_DirectoryTreeNode | PlainMessage<_ListDirV2Result_DirectoryTreeNode> | undefined | null, b2: _ListDirV2Result_DirectoryTreeNode | PlainMessage<_ListDirV2Result_DirectoryTreeNode> | undefined | null): boolean {
    return proto3.util.equals(_ListDirV2Result_DirectoryTreeNode as unknown as MessageType<_ListDirV2Result_DirectoryTreeNode>, a, b2);
  }
})();
export type ListDirV2Result_DirectoryTreeNode = InstanceType<typeof ListDirV2Result_DirectoryTreeNode$Runtime>;
var ListDirV2Result_DirectoryTreeNode: MessageType<ListDirV2Result_DirectoryTreeNode> = ListDirV2Result_DirectoryTreeNode$Runtime as unknown as MessageType<ListDirV2Result_DirectoryTreeNode>;
(ListDirV2Result_DirectoryTreeNode as MutableMessageType<ListDirV2Result_DirectoryTreeNode>).runtime = proto3;
(ListDirV2Result_DirectoryTreeNode as MutableMessageType<ListDirV2Result_DirectoryTreeNode>).typeName = "aiserver.v1.ListDirV2Result.DirectoryTreeNode";
(ListDirV2Result_DirectoryTreeNode as MutableMessageType<ListDirV2Result_DirectoryTreeNode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "abs_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "children_dirs", kind: "message", T: ListDirV2Result_DirectoryTreeNode, repeated: true },
  { no: 3, name: "children_files", kind: "message", T: ListDirV2Result_DirectoryTreeNode_File, repeated: true },
  {
    no: 4,
    name: "children_were_processed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "full_subtree_extension_counts", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  } },
  {
    no: 6,
    name: "num_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ListDirV2Result_DirectoryTreeNode_File$Runtime = (() => class _ListDirV2Result_DirectoryTreeNode_File extends Message<_ListDirV2Result_DirectoryTreeNode_File> {
  declare name: string;
  declare terminalMetadata?: TerminalMetadata;
  constructor(data?: PartialMessage<_ListDirV2Result_DirectoryTreeNode_File>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _ListDirV2Result_DirectoryTreeNode_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirV2Result_DirectoryTreeNode_File {
    return new _ListDirV2Result_DirectoryTreeNode_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirV2Result_DirectoryTreeNode_File {
    return new _ListDirV2Result_DirectoryTreeNode_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirV2Result_DirectoryTreeNode_File {
    return new _ListDirV2Result_DirectoryTreeNode_File().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirV2Result_DirectoryTreeNode_File | PlainMessage<_ListDirV2Result_DirectoryTreeNode_File> | undefined | null, b2: _ListDirV2Result_DirectoryTreeNode_File | PlainMessage<_ListDirV2Result_DirectoryTreeNode_File> | undefined | null): boolean {
    return proto3.util.equals(_ListDirV2Result_DirectoryTreeNode_File as unknown as MessageType<_ListDirV2Result_DirectoryTreeNode_File>, a, b2);
  }
})();
export type ListDirV2Result_DirectoryTreeNode_File = InstanceType<typeof ListDirV2Result_DirectoryTreeNode_File$Runtime>;
var ListDirV2Result_DirectoryTreeNode_File: MessageType<ListDirV2Result_DirectoryTreeNode_File> = ListDirV2Result_DirectoryTreeNode_File$Runtime as unknown as MessageType<ListDirV2Result_DirectoryTreeNode_File>;
(ListDirV2Result_DirectoryTreeNode_File as MutableMessageType<ListDirV2Result_DirectoryTreeNode_File>).runtime = proto3;
(ListDirV2Result_DirectoryTreeNode_File as MutableMessageType<ListDirV2Result_DirectoryTreeNode_File>).typeName = "aiserver.v1.ListDirV2Result.DirectoryTreeNode.File";
(ListDirV2Result_DirectoryTreeNode_File as MutableMessageType<ListDirV2Result_DirectoryTreeNode_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "terminal_metadata", kind: "message", T: TerminalMetadata, opt: true }
]);
var ListDirV2Stream$Runtime = (() => class _ListDirV2Stream extends Message<_ListDirV2Stream> {
  constructor(data?: PartialMessage<_ListDirV2Stream>) {
    super();
    proto3.util.initPartial(data, this as _ListDirV2Stream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListDirV2Stream {
    return new _ListDirV2Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListDirV2Stream {
    return new _ListDirV2Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListDirV2Stream {
    return new _ListDirV2Stream().fromJsonString(jsonString, options);
  }
  static equals(a: _ListDirV2Stream | PlainMessage<_ListDirV2Stream> | undefined | null, b2: _ListDirV2Stream | PlainMessage<_ListDirV2Stream> | undefined | null): boolean {
    return proto3.util.equals(_ListDirV2Stream as unknown as MessageType<_ListDirV2Stream>, a, b2);
  }
})();
export type ListDirV2Stream = InstanceType<typeof ListDirV2Stream$Runtime>;
var ListDirV2Stream: MessageType<ListDirV2Stream> = ListDirV2Stream$Runtime as unknown as MessageType<ListDirV2Stream>;
(ListDirV2Stream as MutableMessageType<ListDirV2Stream>).runtime = proto3;
(ListDirV2Stream as MutableMessageType<ListDirV2Stream>).typeName = "aiserver.v1.ListDirV2Stream";
(ListDirV2Stream as MutableMessageType<ListDirV2Stream>).fields = proto3.util.newFieldList(() => []);
var ReadFileV2Params$Runtime = (() => class _ReadFileV2Params extends Message<_ReadFileV2Params> {
  declare targetFile: string;
  declare offset?: number;
  declare limit?: number;
  declare charsLimit: number;
  declare effectiveUri: string;
  declare enableLineNumbers?: boolean;
  constructor(data?: PartialMessage<_ReadFileV2Params>) {
    super();
    this.targetFile = "";
    this.charsLimit = 0;
    this.effectiveUri = "";
    proto3.util.initPartial(data, this as _ReadFileV2Params);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileV2Params {
    return new _ReadFileV2Params().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileV2Params {
    return new _ReadFileV2Params().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileV2Params {
    return new _ReadFileV2Params().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileV2Params | PlainMessage<_ReadFileV2Params> | undefined | null, b2: _ReadFileV2Params | PlainMessage<_ReadFileV2Params> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileV2Params as unknown as MessageType<_ReadFileV2Params>, a, b2);
  }
})();
export type ReadFileV2Params = InstanceType<typeof ReadFileV2Params$Runtime>;
var ReadFileV2Params: MessageType<ReadFileV2Params> = ReadFileV2Params$Runtime as unknown as MessageType<ReadFileV2Params>;
(ReadFileV2Params as MutableMessageType<ReadFileV2Params>).runtime = proto3;
(ReadFileV2Params as MutableMessageType<ReadFileV2Params>).typeName = "aiserver.v1.ReadFileV2Params";
(ReadFileV2Params as MutableMessageType<ReadFileV2Params>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "target_file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "offset", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "limit", kind: "scalar", T: 5, opt: true },
  {
    no: 4,
    name: "chars_limit",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 5,
    name: "effective_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "enable_line_numbers", kind: "scalar", T: 8, opt: true }
]);
var ReadFileV2Result$Runtime = (() => class _ReadFileV2Result extends Message<_ReadFileV2Result> {
  declare contents?: string;
  declare numCharactersInRequestedRange: number;
  declare offsetIsBiggerThanNumberOfLinesInFile?: boolean;
  declare totalLinesInFile?: number;
  declare matchingCursorRules: CursorRule2[];
  declare images: ImageProto2[];
  constructor(data?: PartialMessage<_ReadFileV2Result>) {
    super();
    this.numCharactersInRequestedRange = 0;
    this.matchingCursorRules = [];
    this.images = [];
    proto3.util.initPartial(data, this as _ReadFileV2Result);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileV2Result {
    return new _ReadFileV2Result().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileV2Result {
    return new _ReadFileV2Result().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileV2Result {
    return new _ReadFileV2Result().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileV2Result | PlainMessage<_ReadFileV2Result> | undefined | null, b2: _ReadFileV2Result | PlainMessage<_ReadFileV2Result> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileV2Result as unknown as MessageType<_ReadFileV2Result>, a, b2);
  }
})();
export type ReadFileV2Result = InstanceType<typeof ReadFileV2Result$Runtime>;
var ReadFileV2Result: MessageType<ReadFileV2Result> = ReadFileV2Result$Runtime as unknown as MessageType<ReadFileV2Result>;
(ReadFileV2Result as MutableMessageType<ReadFileV2Result>).runtime = proto3;
(ReadFileV2Result as MutableMessageType<ReadFileV2Result>).typeName = "aiserver.v1.ReadFileV2Result";
(ReadFileV2Result as MutableMessageType<ReadFileV2Result>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "contents", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "num_characters_in_requested_range",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "offset_is_bigger_than_number_of_lines_in_file", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "total_lines_in_file", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "matching_cursor_rules", kind: "message", T: CursorRule2, repeated: true },
  { no: 6, name: "images", kind: "message", T: ImageProto2, repeated: true }
]);
var ReadFileV2Stream$Runtime = (() => class _ReadFileV2Stream extends Message<_ReadFileV2Stream> {
  declare params?: ReadFileV2Params;
  constructor(data?: PartialMessage<_ReadFileV2Stream>) {
    super();
    proto3.util.initPartial(data, this as _ReadFileV2Stream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadFileV2Stream {
    return new _ReadFileV2Stream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadFileV2Stream {
    return new _ReadFileV2Stream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadFileV2Stream {
    return new _ReadFileV2Stream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadFileV2Stream | PlainMessage<_ReadFileV2Stream> | undefined | null, b2: _ReadFileV2Stream | PlainMessage<_ReadFileV2Stream> | undefined | null): boolean {
    return proto3.util.equals(_ReadFileV2Stream as unknown as MessageType<_ReadFileV2Stream>, a, b2);
  }
})();
export type ReadFileV2Stream = InstanceType<typeof ReadFileV2Stream$Runtime>;
var ReadFileV2Stream: MessageType<ReadFileV2Stream> = ReadFileV2Stream$Runtime as unknown as MessageType<ReadFileV2Stream>;
(ReadFileV2Stream as MutableMessageType<ReadFileV2Stream>).runtime = proto3;
(ReadFileV2Stream as MutableMessageType<ReadFileV2Stream>).typeName = "aiserver.v1.ReadFileV2Stream";
(ReadFileV2Stream as MutableMessageType<ReadFileV2Stream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: ReadFileV2Params, opt: true }
]);
var GlobFileSearchParams$Runtime = (() => class _GlobFileSearchParams extends Message<_GlobFileSearchParams> {
  declare targetDirectory: string;
  declare globPattern: string;
  constructor(data?: PartialMessage<_GlobFileSearchParams>) {
    super();
    this.targetDirectory = "";
    this.globPattern = "";
    proto3.util.initPartial(data, this as _GlobFileSearchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobFileSearchParams {
    return new _GlobFileSearchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobFileSearchParams {
    return new _GlobFileSearchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobFileSearchParams {
    return new _GlobFileSearchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobFileSearchParams | PlainMessage<_GlobFileSearchParams> | undefined | null, b2: _GlobFileSearchParams | PlainMessage<_GlobFileSearchParams> | undefined | null): boolean {
    return proto3.util.equals(_GlobFileSearchParams as unknown as MessageType<_GlobFileSearchParams>, a, b2);
  }
})();
export type GlobFileSearchParams = InstanceType<typeof GlobFileSearchParams$Runtime>;
var GlobFileSearchParams: MessageType<GlobFileSearchParams> = GlobFileSearchParams$Runtime as unknown as MessageType<GlobFileSearchParams>;
(GlobFileSearchParams as MutableMessageType<GlobFileSearchParams>).runtime = proto3;
(GlobFileSearchParams as MutableMessageType<GlobFileSearchParams>).typeName = "aiserver.v1.GlobFileSearchParams";
(GlobFileSearchParams as MutableMessageType<GlobFileSearchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "target_directory",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "glob_pattern",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GlobFileSearchResult$Runtime = (() => class _GlobFileSearchResult extends Message<_GlobFileSearchResult> {
  declare directories: GlobFileSearchResult_Directory[];
  constructor(data?: PartialMessage<_GlobFileSearchResult>) {
    super();
    this.directories = [];
    proto3.util.initPartial(data, this as _GlobFileSearchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobFileSearchResult {
    return new _GlobFileSearchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobFileSearchResult {
    return new _GlobFileSearchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobFileSearchResult {
    return new _GlobFileSearchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobFileSearchResult | PlainMessage<_GlobFileSearchResult> | undefined | null, b2: _GlobFileSearchResult | PlainMessage<_GlobFileSearchResult> | undefined | null): boolean {
    return proto3.util.equals(_GlobFileSearchResult as unknown as MessageType<_GlobFileSearchResult>, a, b2);
  }
})();
export type GlobFileSearchResult = InstanceType<typeof GlobFileSearchResult$Runtime>;
var GlobFileSearchResult: MessageType<GlobFileSearchResult> = GlobFileSearchResult$Runtime as unknown as MessageType<GlobFileSearchResult>;
(GlobFileSearchResult as MutableMessageType<GlobFileSearchResult>).runtime = proto3;
(GlobFileSearchResult as MutableMessageType<GlobFileSearchResult>).typeName = "aiserver.v1.GlobFileSearchResult";
(GlobFileSearchResult as MutableMessageType<GlobFileSearchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "directories", kind: "message", T: GlobFileSearchResult_Directory, repeated: true }
]);
var GlobFileSearchResult_File$Runtime = (() => class _GlobFileSearchResult_File extends Message<_GlobFileSearchResult_File> {
  declare relPath: string;
  constructor(data?: PartialMessage<_GlobFileSearchResult_File>) {
    super();
    this.relPath = "";
    proto3.util.initPartial(data, this as _GlobFileSearchResult_File);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobFileSearchResult_File {
    return new _GlobFileSearchResult_File().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobFileSearchResult_File {
    return new _GlobFileSearchResult_File().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobFileSearchResult_File {
    return new _GlobFileSearchResult_File().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobFileSearchResult_File | PlainMessage<_GlobFileSearchResult_File> | undefined | null, b2: _GlobFileSearchResult_File | PlainMessage<_GlobFileSearchResult_File> | undefined | null): boolean {
    return proto3.util.equals(_GlobFileSearchResult_File as unknown as MessageType<_GlobFileSearchResult_File>, a, b2);
  }
})();
export type GlobFileSearchResult_File = InstanceType<typeof GlobFileSearchResult_File$Runtime>;
var GlobFileSearchResult_File: MessageType<GlobFileSearchResult_File> = GlobFileSearchResult_File$Runtime as unknown as MessageType<GlobFileSearchResult_File>;
(GlobFileSearchResult_File as MutableMessageType<GlobFileSearchResult_File>).runtime = proto3;
(GlobFileSearchResult_File as MutableMessageType<GlobFileSearchResult_File>).typeName = "aiserver.v1.GlobFileSearchResult.File";
(GlobFileSearchResult_File as MutableMessageType<GlobFileSearchResult_File>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "rel_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GlobFileSearchResult_Directory$Runtime = (() => class _GlobFileSearchResult_Directory extends Message<_GlobFileSearchResult_Directory> {
  declare absPath: string;
  declare files: GlobFileSearchResult_File[];
  declare totalFiles: number;
  declare ripgrepTruncated: boolean;
  constructor(data?: PartialMessage<_GlobFileSearchResult_Directory>) {
    super();
    this.absPath = "";
    this.files = [];
    this.totalFiles = 0;
    this.ripgrepTruncated = false;
    proto3.util.initPartial(data, this as _GlobFileSearchResult_Directory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobFileSearchResult_Directory {
    return new _GlobFileSearchResult_Directory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobFileSearchResult_Directory {
    return new _GlobFileSearchResult_Directory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobFileSearchResult_Directory {
    return new _GlobFileSearchResult_Directory().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobFileSearchResult_Directory | PlainMessage<_GlobFileSearchResult_Directory> | undefined | null, b2: _GlobFileSearchResult_Directory | PlainMessage<_GlobFileSearchResult_Directory> | undefined | null): boolean {
    return proto3.util.equals(_GlobFileSearchResult_Directory as unknown as MessageType<_GlobFileSearchResult_Directory>, a, b2);
  }
})();
export type GlobFileSearchResult_Directory = InstanceType<typeof GlobFileSearchResult_Directory$Runtime>;
var GlobFileSearchResult_Directory: MessageType<GlobFileSearchResult_Directory> = GlobFileSearchResult_Directory$Runtime as unknown as MessageType<GlobFileSearchResult_Directory>;
(GlobFileSearchResult_Directory as MutableMessageType<GlobFileSearchResult_Directory>).runtime = proto3;
(GlobFileSearchResult_Directory as MutableMessageType<GlobFileSearchResult_Directory>).typeName = "aiserver.v1.GlobFileSearchResult.Directory";
(GlobFileSearchResult_Directory as MutableMessageType<GlobFileSearchResult_Directory>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "abs_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "files", kind: "message", T: GlobFileSearchResult_File, repeated: true },
  {
    no: 3,
    name: "total_files",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 4,
    name: "ripgrep_truncated",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GlobFileSearchStream$Runtime = (() => class _GlobFileSearchStream extends Message<_GlobFileSearchStream> {
  constructor(data?: PartialMessage<_GlobFileSearchStream>) {
    super();
    proto3.util.initPartial(data, this as _GlobFileSearchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GlobFileSearchStream {
    return new _GlobFileSearchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GlobFileSearchStream {
    return new _GlobFileSearchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GlobFileSearchStream {
    return new _GlobFileSearchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _GlobFileSearchStream | PlainMessage<_GlobFileSearchStream> | undefined | null, b2: _GlobFileSearchStream | PlainMessage<_GlobFileSearchStream> | undefined | null): boolean {
    return proto3.util.equals(_GlobFileSearchStream as unknown as MessageType<_GlobFileSearchStream>, a, b2);
  }
})();
export type GlobFileSearchStream = InstanceType<typeof GlobFileSearchStream$Runtime>;
var GlobFileSearchStream: MessageType<GlobFileSearchStream> = GlobFileSearchStream$Runtime as unknown as MessageType<GlobFileSearchStream>;
(GlobFileSearchStream as MutableMessageType<GlobFileSearchStream>).runtime = proto3;
(GlobFileSearchStream as MutableMessageType<GlobFileSearchStream>).typeName = "aiserver.v1.GlobFileSearchStream";
(GlobFileSearchStream as MutableMessageType<GlobFileSearchStream>).fields = proto3.util.newFieldList(() => []);
var ListMcpResourcesStream$Runtime = (() => class _ListMcpResourcesStream extends Message<_ListMcpResourcesStream> {
  constructor(data?: PartialMessage<_ListMcpResourcesStream>) {
    super();
    proto3.util.initPartial(data, this as _ListMcpResourcesStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ListMcpResourcesStream {
    return new _ListMcpResourcesStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ListMcpResourcesStream {
    return new _ListMcpResourcesStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ListMcpResourcesStream {
    return new _ListMcpResourcesStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ListMcpResourcesStream | PlainMessage<_ListMcpResourcesStream> | undefined | null, b2: _ListMcpResourcesStream | PlainMessage<_ListMcpResourcesStream> | undefined | null): boolean {
    return proto3.util.equals(_ListMcpResourcesStream as unknown as MessageType<_ListMcpResourcesStream>, a, b2);
  }
})();
export type ListMcpResourcesStream = InstanceType<typeof ListMcpResourcesStream$Runtime>;
var ListMcpResourcesStream: MessageType<ListMcpResourcesStream> = ListMcpResourcesStream$Runtime as unknown as MessageType<ListMcpResourcesStream>;
(ListMcpResourcesStream as MutableMessageType<ListMcpResourcesStream>).runtime = proto3;
(ListMcpResourcesStream as MutableMessageType<ListMcpResourcesStream>).typeName = "aiserver.v1.ListMcpResourcesStream";
(ListMcpResourcesStream as MutableMessageType<ListMcpResourcesStream>).fields = proto3.util.newFieldList(() => []);
var CallMcpToolStream$Runtime = (() => class _CallMcpToolStream extends Message<_CallMcpToolStream> {
  constructor(data?: PartialMessage<_CallMcpToolStream>) {
    super();
    proto3.util.initPartial(data, this as _CallMcpToolStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CallMcpToolStream {
    return new _CallMcpToolStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CallMcpToolStream {
    return new _CallMcpToolStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CallMcpToolStream {
    return new _CallMcpToolStream().fromJsonString(jsonString, options);
  }
  static equals(a: _CallMcpToolStream | PlainMessage<_CallMcpToolStream> | undefined | null, b2: _CallMcpToolStream | PlainMessage<_CallMcpToolStream> | undefined | null): boolean {
    return proto3.util.equals(_CallMcpToolStream as unknown as MessageType<_CallMcpToolStream>, a, b2);
  }
})();
export type CallMcpToolStream = InstanceType<typeof CallMcpToolStream$Runtime>;
var CallMcpToolStream: MessageType<CallMcpToolStream> = CallMcpToolStream$Runtime as unknown as MessageType<CallMcpToolStream>;
(CallMcpToolStream as MutableMessageType<CallMcpToolStream>).runtime = proto3;
(CallMcpToolStream as MutableMessageType<CallMcpToolStream>).typeName = "aiserver.v1.CallMcpToolStream";
(CallMcpToolStream as MutableMessageType<CallMcpToolStream>).fields = proto3.util.newFieldList(() => []);
var ReadMcpResourceStream$Runtime = (() => class _ReadMcpResourceStream extends Message<_ReadMcpResourceStream> {
  constructor(data?: PartialMessage<_ReadMcpResourceStream>) {
    super();
    proto3.util.initPartial(data, this as _ReadMcpResourceStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadMcpResourceStream {
    return new _ReadMcpResourceStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadMcpResourceStream {
    return new _ReadMcpResourceStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadMcpResourceStream {
    return new _ReadMcpResourceStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadMcpResourceStream | PlainMessage<_ReadMcpResourceStream> | undefined | null, b2: _ReadMcpResourceStream | PlainMessage<_ReadMcpResourceStream> | undefined | null): boolean {
    return proto3.util.equals(_ReadMcpResourceStream as unknown as MessageType<_ReadMcpResourceStream>, a, b2);
  }
})();
export type ReadMcpResourceStream = InstanceType<typeof ReadMcpResourceStream$Runtime>;
var ReadMcpResourceStream: MessageType<ReadMcpResourceStream> = ReadMcpResourceStream$Runtime as unknown as MessageType<ReadMcpResourceStream>;
(ReadMcpResourceStream as MutableMessageType<ReadMcpResourceStream>).runtime = proto3;
(ReadMcpResourceStream as MutableMessageType<ReadMcpResourceStream>).typeName = "aiserver.v1.ReadMcpResourceStream";
(ReadMcpResourceStream as MutableMessageType<ReadMcpResourceStream>).fields = proto3.util.newFieldList(() => []);
var Step$Runtime = (() => class _Step extends Message<_Step> {
  declare id: string;
  declare title: string;
  declare description: string;
  declare instructions: string;
  declare prerequisites: string[];
  declare subComposerId: string;
  constructor(data?: PartialMessage<_Step>) {
    super();
    this.id = "";
    this.title = "";
    this.description = "";
    this.instructions = "";
    this.prerequisites = [];
    this.subComposerId = "";
    proto3.util.initPartial(data, this as _Step);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _Step {
    return new _Step().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _Step {
    return new _Step().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _Step {
    return new _Step().fromJsonString(jsonString, options);
  }
  static equals(a: _Step | PlainMessage<_Step> | undefined | null, b2: _Step | PlainMessage<_Step> | undefined | null): boolean {
    return proto3.util.equals(_Step as unknown as MessageType<_Step>, a, b2);
  }
})();
export type Step = InstanceType<typeof Step$Runtime>;
var Step: MessageType<Step> = Step$Runtime as unknown as MessageType<Step>;
(Step as MutableMessageType<Step>).runtime = proto3;
(Step as MutableMessageType<Step>).typeName = "aiserver.v1.Step";
(Step as MutableMessageType<Step>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "instructions",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "prerequisites", kind: "scalar", T: 9, repeated: true },
  {
    no: 6,
    name: "sub_composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PlanPhase$Runtime = (() => class _PlanPhase extends Message<_PlanPhase> {
  declare name: string;
  declare todos: TodoItem2[];
  constructor(data?: PartialMessage<_PlanPhase>) {
    super();
    this.name = "";
    this.todos = [];
    proto3.util.initPartial(data, this as _PlanPhase);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PlanPhase {
    return new _PlanPhase().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PlanPhase {
    return new _PlanPhase().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PlanPhase {
    return new _PlanPhase().fromJsonString(jsonString, options);
  }
  static equals(a: _PlanPhase | PlainMessage<_PlanPhase> | undefined | null, b2: _PlanPhase | PlainMessage<_PlanPhase> | undefined | null): boolean {
    return proto3.util.equals(_PlanPhase as unknown as MessageType<_PlanPhase>, a, b2);
  }
})();
export type PlanPhase = InstanceType<typeof PlanPhase$Runtime>;
var PlanPhase: MessageType<PlanPhase> = PlanPhase$Runtime as unknown as MessageType<PlanPhase>;
(PlanPhase as MutableMessageType<PlanPhase>).runtime = proto3;
(PlanPhase as MutableMessageType<PlanPhase>).typeName = "aiserver.v1.PlanPhase";
(PlanPhase as MutableMessageType<PlanPhase>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "todos", kind: "message", T: TodoItem2, repeated: true }
]);
var CreatePlanParams$Runtime = (() => class _CreatePlanParams extends Message<_CreatePlanParams> {
  declare plan: string;
  declare title: string;
  declare summary: string;
  declare steps: Step[];
  declare oldStr: string;
  declare newStr: string;
  declare name: string;
  declare todos: TodoItem2[];
  declare overview: string;
  declare isSpec: boolean;
  declare isProject: boolean;
  declare phases: PlanPhase[];
  constructor(data?: PartialMessage<_CreatePlanParams>) {
    super();
    this.plan = "";
    this.title = "";
    this.summary = "";
    this.steps = [];
    this.oldStr = "";
    this.newStr = "";
    this.name = "";
    this.todos = [];
    this.overview = "";
    this.isSpec = false;
    this.isProject = false;
    this.phases = [];
    proto3.util.initPartial(data, this as _CreatePlanParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanParams {
    return new _CreatePlanParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanParams {
    return new _CreatePlanParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanParams {
    return new _CreatePlanParams().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanParams | PlainMessage<_CreatePlanParams> | undefined | null, b2: _CreatePlanParams | PlainMessage<_CreatePlanParams> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanParams as unknown as MessageType<_CreatePlanParams>, a, b2);
  }
})();
export type CreatePlanParams = InstanceType<typeof CreatePlanParams$Runtime>;
var CreatePlanParams: MessageType<CreatePlanParams> = CreatePlanParams$Runtime as unknown as MessageType<CreatePlanParams>;
(CreatePlanParams as MutableMessageType<CreatePlanParams>).runtime = proto3;
(CreatePlanParams as MutableMessageType<CreatePlanParams>).typeName = "aiserver.v1.CreatePlanParams";
(CreatePlanParams as MutableMessageType<CreatePlanParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "steps", kind: "message", T: Step, repeated: true },
  {
    no: 5,
    name: "old_str",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "new_str",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "todos", kind: "message", T: TodoItem2, repeated: true },
  {
    no: 9,
    name: "overview",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "is_spec",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 11,
    name: "is_project",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 12, name: "phases", kind: "message", T: PlanPhase, repeated: true }
]);
var CreatePlanResult2$Runtime = (() => class _CreatePlanResult extends Message<_CreatePlanResult> {
  declare planUri: string;
  declare result: { case: "accepted"; value: CreatePlanResult_Accepted } | { case: "rejected"; value: CreatePlanResult_Rejected } | { case: "modified"; value: CreatePlanResult_Modified } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CreatePlanResult>) {
    super();
    this.result = { case: void 0 };
    this.planUri = "";
    proto3.util.initPartial(data, this as _CreatePlanResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanResult {
    return new _CreatePlanResult().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanResult | PlainMessage<_CreatePlanResult> | undefined | null, b2: _CreatePlanResult | PlainMessage<_CreatePlanResult> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanResult as unknown as MessageType<_CreatePlanResult>, a, b2);
  }
})();
export type CreatePlanResult2 = InstanceType<typeof CreatePlanResult2$Runtime>;
var CreatePlanResult2: MessageType<CreatePlanResult2> = CreatePlanResult2$Runtime as unknown as MessageType<CreatePlanResult2>;
(CreatePlanResult2 as MutableMessageType<CreatePlanResult2>).runtime = proto3;
(CreatePlanResult2 as MutableMessageType<CreatePlanResult2>).typeName = "aiserver.v1.CreatePlanResult";
(CreatePlanResult2 as MutableMessageType<CreatePlanResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "accepted", kind: "message", T: CreatePlanResult_Accepted, oneof: "result" },
  { no: 2, name: "rejected", kind: "message", T: CreatePlanResult_Rejected, oneof: "result" },
  { no: 3, name: "modified", kind: "message", T: CreatePlanResult_Modified, oneof: "result" },
  {
    no: 4,
    name: "plan_uri",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CreatePlanResult_Accepted$Runtime = (() => class _CreatePlanResult_Accepted extends Message<_CreatePlanResult_Accepted> {
  declare finalTodos: TodoItem2[];
  constructor(data?: PartialMessage<_CreatePlanResult_Accepted>) {
    super();
    this.finalTodos = [];
    proto3.util.initPartial(data, this as _CreatePlanResult_Accepted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanResult_Accepted {
    return new _CreatePlanResult_Accepted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanResult_Accepted {
    return new _CreatePlanResult_Accepted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanResult_Accepted {
    return new _CreatePlanResult_Accepted().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanResult_Accepted | PlainMessage<_CreatePlanResult_Accepted> | undefined | null, b2: _CreatePlanResult_Accepted | PlainMessage<_CreatePlanResult_Accepted> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanResult_Accepted as unknown as MessageType<_CreatePlanResult_Accepted>, a, b2);
  }
})();
export type CreatePlanResult_Accepted = InstanceType<typeof CreatePlanResult_Accepted$Runtime>;
var CreatePlanResult_Accepted: MessageType<CreatePlanResult_Accepted> = CreatePlanResult_Accepted$Runtime as unknown as MessageType<CreatePlanResult_Accepted>;
(CreatePlanResult_Accepted as MutableMessageType<CreatePlanResult_Accepted>).runtime = proto3;
(CreatePlanResult_Accepted as MutableMessageType<CreatePlanResult_Accepted>).typeName = "aiserver.v1.CreatePlanResult.Accepted";
(CreatePlanResult_Accepted as MutableMessageType<CreatePlanResult_Accepted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "final_todos", kind: "message", T: TodoItem2, repeated: true }
]);
var CreatePlanResult_Rejected$Runtime = (() => class _CreatePlanResult_Rejected extends Message<_CreatePlanResult_Rejected> {
  constructor(data?: PartialMessage<_CreatePlanResult_Rejected>) {
    super();
    proto3.util.initPartial(data, this as _CreatePlanResult_Rejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanResult_Rejected {
    return new _CreatePlanResult_Rejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanResult_Rejected {
    return new _CreatePlanResult_Rejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanResult_Rejected {
    return new _CreatePlanResult_Rejected().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanResult_Rejected | PlainMessage<_CreatePlanResult_Rejected> | undefined | null, b2: _CreatePlanResult_Rejected | PlainMessage<_CreatePlanResult_Rejected> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanResult_Rejected as unknown as MessageType<_CreatePlanResult_Rejected>, a, b2);
  }
})();
export type CreatePlanResult_Rejected = InstanceType<typeof CreatePlanResult_Rejected$Runtime>;
var CreatePlanResult_Rejected: MessageType<CreatePlanResult_Rejected> = CreatePlanResult_Rejected$Runtime as unknown as MessageType<CreatePlanResult_Rejected>;
(CreatePlanResult_Rejected as MutableMessageType<CreatePlanResult_Rejected>).runtime = proto3;
(CreatePlanResult_Rejected as MutableMessageType<CreatePlanResult_Rejected>).typeName = "aiserver.v1.CreatePlanResult.Rejected";
(CreatePlanResult_Rejected as MutableMessageType<CreatePlanResult_Rejected>).fields = proto3.util.newFieldList(() => []);
var CreatePlanResult_Modified$Runtime = (() => class _CreatePlanResult_Modified extends Message<_CreatePlanResult_Modified> {
  declare newPlan: string;
  declare finalTodos: TodoItem2[];
  constructor(data?: PartialMessage<_CreatePlanResult_Modified>) {
    super();
    this.newPlan = "";
    this.finalTodos = [];
    proto3.util.initPartial(data, this as _CreatePlanResult_Modified);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanResult_Modified {
    return new _CreatePlanResult_Modified().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanResult_Modified {
    return new _CreatePlanResult_Modified().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanResult_Modified {
    return new _CreatePlanResult_Modified().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanResult_Modified | PlainMessage<_CreatePlanResult_Modified> | undefined | null, b2: _CreatePlanResult_Modified | PlainMessage<_CreatePlanResult_Modified> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanResult_Modified as unknown as MessageType<_CreatePlanResult_Modified>, a, b2);
  }
})();
export type CreatePlanResult_Modified = InstanceType<typeof CreatePlanResult_Modified$Runtime>;
var CreatePlanResult_Modified: MessageType<CreatePlanResult_Modified> = CreatePlanResult_Modified$Runtime as unknown as MessageType<CreatePlanResult_Modified>;
(CreatePlanResult_Modified as MutableMessageType<CreatePlanResult_Modified>).runtime = proto3;
(CreatePlanResult_Modified as MutableMessageType<CreatePlanResult_Modified>).typeName = "aiserver.v1.CreatePlanResult.Modified";
(CreatePlanResult_Modified as MutableMessageType<CreatePlanResult_Modified>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "new_plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "final_todos", kind: "message", T: TodoItem2, repeated: true }
]);
var CreatePlanStream$Runtime = (() => class _CreatePlanStream extends Message<_CreatePlanStream> {
  constructor(data?: PartialMessage<_CreatePlanStream>) {
    super();
    proto3.util.initPartial(data, this as _CreatePlanStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CreatePlanStream {
    return new _CreatePlanStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CreatePlanStream {
    return new _CreatePlanStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CreatePlanStream {
    return new _CreatePlanStream().fromJsonString(jsonString, options);
  }
  static equals(a: _CreatePlanStream | PlainMessage<_CreatePlanStream> | undefined | null, b2: _CreatePlanStream | PlainMessage<_CreatePlanStream> | undefined | null): boolean {
    return proto3.util.equals(_CreatePlanStream as unknown as MessageType<_CreatePlanStream>, a, b2);
  }
})();
export type CreatePlanStream = InstanceType<typeof CreatePlanStream$Runtime>;
var CreatePlanStream: MessageType<CreatePlanStream> = CreatePlanStream$Runtime as unknown as MessageType<CreatePlanStream>;
(CreatePlanStream as MutableMessageType<CreatePlanStream>).runtime = proto3;
(CreatePlanStream as MutableMessageType<CreatePlanStream>).typeName = "aiserver.v1.CreatePlanStream";
(CreatePlanStream as MutableMessageType<CreatePlanStream>).fields = proto3.util.newFieldList(() => []);
var ReadProjectParams$Runtime = (() => class _ReadProjectParams extends Message<_ReadProjectParams> {
  constructor(data?: PartialMessage<_ReadProjectParams>) {
    super();
    proto3.util.initPartial(data, this as _ReadProjectParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadProjectParams {
    return new _ReadProjectParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadProjectParams {
    return new _ReadProjectParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadProjectParams {
    return new _ReadProjectParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadProjectParams | PlainMessage<_ReadProjectParams> | undefined | null, b2: _ReadProjectParams | PlainMessage<_ReadProjectParams> | undefined | null): boolean {
    return proto3.util.equals(_ReadProjectParams as unknown as MessageType<_ReadProjectParams>, a, b2);
  }
})();
export type ReadProjectParams = InstanceType<typeof ReadProjectParams$Runtime>;
var ReadProjectParams: MessageType<ReadProjectParams> = ReadProjectParams$Runtime as unknown as MessageType<ReadProjectParams>;
(ReadProjectParams as MutableMessageType<ReadProjectParams>).runtime = proto3;
(ReadProjectParams as MutableMessageType<ReadProjectParams>).typeName = "aiserver.v1.ReadProjectParams";
(ReadProjectParams as MutableMessageType<ReadProjectParams>).fields = proto3.util.newFieldList(() => []);
var ReadProjectResult$Runtime = (() => class _ReadProjectResult extends Message<_ReadProjectResult> {
  declare plan: string;
  constructor(data?: PartialMessage<_ReadProjectResult>) {
    super();
    this.plan = "";
    proto3.util.initPartial(data, this as _ReadProjectResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadProjectResult {
    return new _ReadProjectResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadProjectResult {
    return new _ReadProjectResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadProjectResult {
    return new _ReadProjectResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadProjectResult | PlainMessage<_ReadProjectResult> | undefined | null, b2: _ReadProjectResult | PlainMessage<_ReadProjectResult> | undefined | null): boolean {
    return proto3.util.equals(_ReadProjectResult as unknown as MessageType<_ReadProjectResult>, a, b2);
  }
})();
export type ReadProjectResult = InstanceType<typeof ReadProjectResult$Runtime>;
var ReadProjectResult: MessageType<ReadProjectResult> = ReadProjectResult$Runtime as unknown as MessageType<ReadProjectResult>;
(ReadProjectResult as MutableMessageType<ReadProjectResult>).runtime = proto3;
(ReadProjectResult as MutableMessageType<ReadProjectResult>).typeName = "aiserver.v1.ReadProjectResult";
(ReadProjectResult as MutableMessageType<ReadProjectResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ReadProjectStream$Runtime = (() => class _ReadProjectStream extends Message<_ReadProjectStream> {
  constructor(data?: PartialMessage<_ReadProjectStream>) {
    super();
    proto3.util.initPartial(data, this as _ReadProjectStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReadProjectStream {
    return new _ReadProjectStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReadProjectStream {
    return new _ReadProjectStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReadProjectStream {
    return new _ReadProjectStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReadProjectStream | PlainMessage<_ReadProjectStream> | undefined | null, b2: _ReadProjectStream | PlainMessage<_ReadProjectStream> | undefined | null): boolean {
    return proto3.util.equals(_ReadProjectStream as unknown as MessageType<_ReadProjectStream>, a, b2);
  }
})();
export type ReadProjectStream = InstanceType<typeof ReadProjectStream$Runtime>;
var ReadProjectStream: MessageType<ReadProjectStream> = ReadProjectStream$Runtime as unknown as MessageType<ReadProjectStream>;
(ReadProjectStream as MutableMessageType<ReadProjectStream>).runtime = proto3;
(ReadProjectStream as MutableMessageType<ReadProjectStream>).typeName = "aiserver.v1.ReadProjectStream";
(ReadProjectStream as MutableMessageType<ReadProjectStream>).fields = proto3.util.newFieldList(() => []);
var UpdateProjectStringReplacement$Runtime = (() => class _UpdateProjectStringReplacement extends Message<_UpdateProjectStringReplacement> {
  declare oldString: string;
  declare newString: string;
  constructor(data?: PartialMessage<_UpdateProjectStringReplacement>) {
    super();
    this.oldString = "";
    this.newString = "";
    proto3.util.initPartial(data, this as _UpdateProjectStringReplacement);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateProjectStringReplacement {
    return new _UpdateProjectStringReplacement().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateProjectStringReplacement {
    return new _UpdateProjectStringReplacement().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateProjectStringReplacement {
    return new _UpdateProjectStringReplacement().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateProjectStringReplacement | PlainMessage<_UpdateProjectStringReplacement> | undefined | null, b2: _UpdateProjectStringReplacement | PlainMessage<_UpdateProjectStringReplacement> | undefined | null): boolean {
    return proto3.util.equals(_UpdateProjectStringReplacement as unknown as MessageType<_UpdateProjectStringReplacement>, a, b2);
  }
})();
export type UpdateProjectStringReplacement = InstanceType<typeof UpdateProjectStringReplacement$Runtime>;
var UpdateProjectStringReplacement: MessageType<UpdateProjectStringReplacement> = UpdateProjectStringReplacement$Runtime as unknown as MessageType<UpdateProjectStringReplacement>;
(UpdateProjectStringReplacement as MutableMessageType<UpdateProjectStringReplacement>).runtime = proto3;
(UpdateProjectStringReplacement as MutableMessageType<UpdateProjectStringReplacement>).typeName = "aiserver.v1.UpdateProjectStringReplacement";
(UpdateProjectStringReplacement as MutableMessageType<UpdateProjectStringReplacement>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "old_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_string",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateProjectParams$Runtime = (() => class _UpdateProjectParams extends Message<_UpdateProjectParams> {
  declare stringReplacements: UpdateProjectStringReplacement[];
  declare summary: string;
  constructor(data?: PartialMessage<_UpdateProjectParams>) {
    super();
    this.stringReplacements = [];
    this.summary = "";
    proto3.util.initPartial(data, this as _UpdateProjectParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateProjectParams {
    return new _UpdateProjectParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateProjectParams {
    return new _UpdateProjectParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateProjectParams {
    return new _UpdateProjectParams().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateProjectParams | PlainMessage<_UpdateProjectParams> | undefined | null, b2: _UpdateProjectParams | PlainMessage<_UpdateProjectParams> | undefined | null): boolean {
    return proto3.util.equals(_UpdateProjectParams as unknown as MessageType<_UpdateProjectParams>, a, b2);
  }
})();
export type UpdateProjectParams = InstanceType<typeof UpdateProjectParams$Runtime>;
var UpdateProjectParams: MessageType<UpdateProjectParams> = UpdateProjectParams$Runtime as unknown as MessageType<UpdateProjectParams>;
(UpdateProjectParams as MutableMessageType<UpdateProjectParams>).runtime = proto3;
(UpdateProjectParams as MutableMessageType<UpdateProjectParams>).typeName = "aiserver.v1.UpdateProjectParams";
(UpdateProjectParams as MutableMessageType<UpdateProjectParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "string_replacements", kind: "message", T: UpdateProjectStringReplacement, repeated: true },
  {
    no: 2,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateProjectResult$Runtime = (() => class _UpdateProjectResult extends Message<_UpdateProjectResult> {
  declare success: boolean;
  declare updatedPlan: string;
  constructor(data?: PartialMessage<_UpdateProjectResult>) {
    super();
    this.success = false;
    this.updatedPlan = "";
    proto3.util.initPartial(data, this as _UpdateProjectResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateProjectResult {
    return new _UpdateProjectResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateProjectResult {
    return new _UpdateProjectResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateProjectResult {
    return new _UpdateProjectResult().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateProjectResult | PlainMessage<_UpdateProjectResult> | undefined | null, b2: _UpdateProjectResult | PlainMessage<_UpdateProjectResult> | undefined | null): boolean {
    return proto3.util.equals(_UpdateProjectResult as unknown as MessageType<_UpdateProjectResult>, a, b2);
  }
})();
export type UpdateProjectResult = InstanceType<typeof UpdateProjectResult$Runtime>;
var UpdateProjectResult: MessageType<UpdateProjectResult> = UpdateProjectResult$Runtime as unknown as MessageType<UpdateProjectResult>;
(UpdateProjectResult as MutableMessageType<UpdateProjectResult>).runtime = proto3;
(UpdateProjectResult as MutableMessageType<UpdateProjectResult>).typeName = "aiserver.v1.UpdateProjectResult";
(UpdateProjectResult as MutableMessageType<UpdateProjectResult>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "updated_plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UpdateProjectStream$Runtime = (() => class _UpdateProjectStream extends Message<_UpdateProjectStream> {
  constructor(data?: PartialMessage<_UpdateProjectStream>) {
    super();
    proto3.util.initPartial(data, this as _UpdateProjectStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UpdateProjectStream {
    return new _UpdateProjectStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UpdateProjectStream {
    return new _UpdateProjectStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UpdateProjectStream {
    return new _UpdateProjectStream().fromJsonString(jsonString, options);
  }
  static equals(a: _UpdateProjectStream | PlainMessage<_UpdateProjectStream> | undefined | null, b2: _UpdateProjectStream | PlainMessage<_UpdateProjectStream> | undefined | null): boolean {
    return proto3.util.equals(_UpdateProjectStream as unknown as MessageType<_UpdateProjectStream>, a, b2);
  }
})();
export type UpdateProjectStream = InstanceType<typeof UpdateProjectStream$Runtime>;
var UpdateProjectStream: MessageType<UpdateProjectStream> = UpdateProjectStream$Runtime as unknown as MessageType<UpdateProjectStream>;
(UpdateProjectStream as MutableMessageType<UpdateProjectStream>).runtime = proto3;
(UpdateProjectStream as MutableMessageType<UpdateProjectStream>).typeName = "aiserver.v1.UpdateProjectStream";
(UpdateProjectStream as MutableMessageType<UpdateProjectStream>).fields = proto3.util.newFieldList(() => []);
var AskQuestionParams$Runtime = (() => class _AskQuestionParams extends Message<_AskQuestionParams> {
  declare title: string;
  declare questions: AskQuestionParams_Question[];
  declare runAsync: boolean;
  constructor(data?: PartialMessage<_AskQuestionParams>) {
    super();
    this.title = "";
    this.questions = [];
    this.runAsync = false;
    proto3.util.initPartial(data, this as _AskQuestionParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionParams {
    return new _AskQuestionParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionParams {
    return new _AskQuestionParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionParams {
    return new _AskQuestionParams().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionParams | PlainMessage<_AskQuestionParams> | undefined | null, b2: _AskQuestionParams | PlainMessage<_AskQuestionParams> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionParams as unknown as MessageType<_AskQuestionParams>, a, b2);
  }
})();
export type AskQuestionParams = InstanceType<typeof AskQuestionParams$Runtime>;
var AskQuestionParams: MessageType<AskQuestionParams> = AskQuestionParams$Runtime as unknown as MessageType<AskQuestionParams>;
(AskQuestionParams as MutableMessageType<AskQuestionParams>).runtime = proto3;
(AskQuestionParams as MutableMessageType<AskQuestionParams>).typeName = "aiserver.v1.AskQuestionParams";
(AskQuestionParams as MutableMessageType<AskQuestionParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "questions", kind: "message", T: AskQuestionParams_Question, repeated: true },
  {
    no: 3,
    name: "run_async",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AskQuestionParams_Question$Runtime = (() => class _AskQuestionParams_Question extends Message<_AskQuestionParams_Question> {
  declare id: string;
  declare prompt: string;
  declare options: AskQuestionParams_Option[];
  declare allowMultiple: boolean;
  constructor(data?: PartialMessage<_AskQuestionParams_Question>) {
    super();
    this.id = "";
    this.prompt = "";
    this.options = [];
    this.allowMultiple = false;
    proto3.util.initPartial(data, this as _AskQuestionParams_Question);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionParams_Question {
    return new _AskQuestionParams_Question().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionParams_Question {
    return new _AskQuestionParams_Question().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionParams_Question {
    return new _AskQuestionParams_Question().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionParams_Question | PlainMessage<_AskQuestionParams_Question> | undefined | null, b2: _AskQuestionParams_Question | PlainMessage<_AskQuestionParams_Question> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionParams_Question as unknown as MessageType<_AskQuestionParams_Question>, a, b2);
  }
})();
export type AskQuestionParams_Question = InstanceType<typeof AskQuestionParams_Question$Runtime>;
var AskQuestionParams_Question: MessageType<AskQuestionParams_Question> = AskQuestionParams_Question$Runtime as unknown as MessageType<AskQuestionParams_Question>;
(AskQuestionParams_Question as MutableMessageType<AskQuestionParams_Question>).runtime = proto3;
(AskQuestionParams_Question as MutableMessageType<AskQuestionParams_Question>).typeName = "aiserver.v1.AskQuestionParams.Question";
(AskQuestionParams_Question as MutableMessageType<AskQuestionParams_Question>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "options", kind: "message", T: AskQuestionParams_Option, repeated: true },
  {
    no: 4,
    name: "allow_multiple",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AskQuestionParams_Option$Runtime = (() => class _AskQuestionParams_Option extends Message<_AskQuestionParams_Option> {
  declare id: string;
  declare label: string;
  constructor(data?: PartialMessage<_AskQuestionParams_Option>) {
    super();
    this.id = "";
    this.label = "";
    proto3.util.initPartial(data, this as _AskQuestionParams_Option);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionParams_Option {
    return new _AskQuestionParams_Option().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionParams_Option {
    return new _AskQuestionParams_Option().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionParams_Option {
    return new _AskQuestionParams_Option().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionParams_Option | PlainMessage<_AskQuestionParams_Option> | undefined | null, b2: _AskQuestionParams_Option | PlainMessage<_AskQuestionParams_Option> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionParams_Option as unknown as MessageType<_AskQuestionParams_Option>, a, b2);
  }
})();
export type AskQuestionParams_Option = InstanceType<typeof AskQuestionParams_Option$Runtime>;
var AskQuestionParams_Option: MessageType<AskQuestionParams_Option> = AskQuestionParams_Option$Runtime as unknown as MessageType<AskQuestionParams_Option>;
(AskQuestionParams_Option as MutableMessageType<AskQuestionParams_Option>).runtime = proto3;
(AskQuestionParams_Option as MutableMessageType<AskQuestionParams_Option>).typeName = "aiserver.v1.AskQuestionParams.Option";
(AskQuestionParams_Option as MutableMessageType<AskQuestionParams_Option>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionResult2$Runtime = (() => class _AskQuestionResult extends Message<_AskQuestionResult> {
  declare answers: AskQuestionResult_Answer[];
  declare isAsync: boolean;
  constructor(data?: PartialMessage<_AskQuestionResult>) {
    super();
    this.answers = [];
    this.isAsync = false;
    proto3.util.initPartial(data, this as _AskQuestionResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionResult {
    return new _AskQuestionResult().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionResult | PlainMessage<_AskQuestionResult> | undefined | null, b2: _AskQuestionResult | PlainMessage<_AskQuestionResult> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionResult as unknown as MessageType<_AskQuestionResult>, a, b2);
  }
})();
export type AskQuestionResult2 = InstanceType<typeof AskQuestionResult2$Runtime>;
var AskQuestionResult2: MessageType<AskQuestionResult2> = AskQuestionResult2$Runtime as unknown as MessageType<AskQuestionResult2>;
(AskQuestionResult2 as MutableMessageType<AskQuestionResult2>).runtime = proto3;
(AskQuestionResult2 as MutableMessageType<AskQuestionResult2>).typeName = "aiserver.v1.AskQuestionResult";
(AskQuestionResult2 as MutableMessageType<AskQuestionResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "answers", kind: "message", T: AskQuestionResult_Answer, repeated: true },
  {
    no: 2,
    name: "is_async",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var AskQuestionResult_Answer$Runtime = (() => class _AskQuestionResult_Answer extends Message<_AskQuestionResult_Answer> {
  declare questionId: string;
  declare selectedOptionIds: string[];
  declare freeformText?: string;
  constructor(data?: PartialMessage<_AskQuestionResult_Answer>) {
    super();
    this.questionId = "";
    this.selectedOptionIds = [];
    proto3.util.initPartial(data, this as _AskQuestionResult_Answer);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionResult_Answer {
    return new _AskQuestionResult_Answer().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionResult_Answer {
    return new _AskQuestionResult_Answer().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionResult_Answer {
    return new _AskQuestionResult_Answer().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionResult_Answer | PlainMessage<_AskQuestionResult_Answer> | undefined | null, b2: _AskQuestionResult_Answer | PlainMessage<_AskQuestionResult_Answer> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionResult_Answer as unknown as MessageType<_AskQuestionResult_Answer>, a, b2);
  }
})();
export type AskQuestionResult_Answer = InstanceType<typeof AskQuestionResult_Answer$Runtime>;
var AskQuestionResult_Answer: MessageType<AskQuestionResult_Answer> = AskQuestionResult_Answer$Runtime as unknown as MessageType<AskQuestionResult_Answer>;
(AskQuestionResult_Answer as MutableMessageType<AskQuestionResult_Answer>).runtime = proto3;
(AskQuestionResult_Answer as MutableMessageType<AskQuestionResult_Answer>).typeName = "aiserver.v1.AskQuestionResult.Answer";
(AskQuestionResult_Answer as MutableMessageType<AskQuestionResult_Answer>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "question_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "selected_option_ids", kind: "scalar", T: 9, repeated: true },
  { no: 3, name: "freeform_text", kind: "scalar", T: 9, opt: true }
]);
var AskQuestionStream$Runtime = (() => class _AskQuestionStream extends Message<_AskQuestionStream> {
  declare params?: AskQuestionParams;
  constructor(data?: PartialMessage<_AskQuestionStream>) {
    super();
    proto3.util.initPartial(data, this as _AskQuestionStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionStream {
    return new _AskQuestionStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionStream {
    return new _AskQuestionStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionStream {
    return new _AskQuestionStream().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionStream | PlainMessage<_AskQuestionStream> | undefined | null, b2: _AskQuestionStream | PlainMessage<_AskQuestionStream> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionStream as unknown as MessageType<_AskQuestionStream>, a, b2);
  }
})();
export type AskQuestionStream = InstanceType<typeof AskQuestionStream$Runtime>;
var AskQuestionStream: MessageType<AskQuestionStream> = AskQuestionStream$Runtime as unknown as MessageType<AskQuestionStream>;
(AskQuestionStream as MutableMessageType<AskQuestionStream>).runtime = proto3;
(AskQuestionStream as MutableMessageType<AskQuestionStream>).typeName = "aiserver.v1.AskQuestionStream";
(AskQuestionStream as MutableMessageType<AskQuestionStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: AskQuestionParams }
]);
var SwitchModeParams$Runtime = (() => class _SwitchModeParams extends Message<_SwitchModeParams> {
  declare fromModeId: string;
  declare toModeId: string;
  declare explanation?: string;
  constructor(data?: PartialMessage<_SwitchModeParams>) {
    super();
    this.fromModeId = "";
    this.toModeId = "";
    proto3.util.initPartial(data, this as _SwitchModeParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeParams {
    return new _SwitchModeParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeParams {
    return new _SwitchModeParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeParams {
    return new _SwitchModeParams().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeParams | PlainMessage<_SwitchModeParams> | undefined | null, b2: _SwitchModeParams | PlainMessage<_SwitchModeParams> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeParams as unknown as MessageType<_SwitchModeParams>, a, b2);
  }
})();
export type SwitchModeParams = InstanceType<typeof SwitchModeParams$Runtime>;
var SwitchModeParams: MessageType<SwitchModeParams> = SwitchModeParams$Runtime as unknown as MessageType<SwitchModeParams>;
(SwitchModeParams as MutableMessageType<SwitchModeParams>).runtime = proto3;
(SwitchModeParams as MutableMessageType<SwitchModeParams>).typeName = "aiserver.v1.SwitchModeParams";
(SwitchModeParams as MutableMessageType<SwitchModeParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "from_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "to_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "explanation", kind: "scalar", T: 9, opt: true }
]);
var SwitchModeResult2$Runtime = (() => class _SwitchModeResult extends Message<_SwitchModeResult> {
  declare fromModeId: string;
  declare toModeId: string;
  declare autoApproved: boolean;
  declare userApproved: boolean;
  constructor(data?: PartialMessage<_SwitchModeResult>) {
    super();
    this.fromModeId = "";
    this.toModeId = "";
    this.autoApproved = false;
    this.userApproved = false;
    proto3.util.initPartial(data, this as _SwitchModeResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeResult {
    return new _SwitchModeResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeResult | PlainMessage<_SwitchModeResult> | undefined | null, b2: _SwitchModeResult | PlainMessage<_SwitchModeResult> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeResult as unknown as MessageType<_SwitchModeResult>, a, b2);
  }
})();
export type SwitchModeResult2 = InstanceType<typeof SwitchModeResult2$Runtime>;
var SwitchModeResult2: MessageType<SwitchModeResult2> = SwitchModeResult2$Runtime as unknown as MessageType<SwitchModeResult2>;
(SwitchModeResult2 as MutableMessageType<SwitchModeResult2>).runtime = proto3;
(SwitchModeResult2 as MutableMessageType<SwitchModeResult2>).typeName = "aiserver.v1.SwitchModeResult";
(SwitchModeResult2 as MutableMessageType<SwitchModeResult2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "from_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "to_mode_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "auto_approved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "user_approved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SwitchModeStream$Runtime = (() => class _SwitchModeStream extends Message<_SwitchModeStream> {
  declare params?: SwitchModeParams;
  constructor(data?: PartialMessage<_SwitchModeStream>) {
    super();
    proto3.util.initPartial(data, this as _SwitchModeStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SwitchModeStream {
    return new _SwitchModeStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SwitchModeStream {
    return new _SwitchModeStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SwitchModeStream {
    return new _SwitchModeStream().fromJsonString(jsonString, options);
  }
  static equals(a: _SwitchModeStream | PlainMessage<_SwitchModeStream> | undefined | null, b2: _SwitchModeStream | PlainMessage<_SwitchModeStream> | undefined | null): boolean {
    return proto3.util.equals(_SwitchModeStream as unknown as MessageType<_SwitchModeStream>, a, b2);
  }
})();
export type SwitchModeStream = InstanceType<typeof SwitchModeStream$Runtime>;
var SwitchModeStream: MessageType<SwitchModeStream> = SwitchModeStream$Runtime as unknown as MessageType<SwitchModeStream>;
(SwitchModeStream as MutableMessageType<SwitchModeStream>).runtime = proto3;
(SwitchModeStream as MutableMessageType<SwitchModeStream>).typeName = "aiserver.v1.SwitchModeStream";
(SwitchModeStream as MutableMessageType<SwitchModeStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: SwitchModeParams }
]);
var ComputerUseParams$Runtime = (() => class _ComputerUseParams extends Message<_ComputerUseParams> {
  declare actions: ComputerUseAction[];
  constructor(data?: PartialMessage<_ComputerUseParams>) {
    super();
    this.actions = [];
    proto3.util.initPartial(data, this as _ComputerUseParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseParams {
    return new _ComputerUseParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseParams {
    return new _ComputerUseParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseParams {
    return new _ComputerUseParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseParams | PlainMessage<_ComputerUseParams> | undefined | null, b2: _ComputerUseParams | PlainMessage<_ComputerUseParams> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseParams as unknown as MessageType<_ComputerUseParams>, a, b2);
  }
})();
export type ComputerUseParams = InstanceType<typeof ComputerUseParams$Runtime>;
var ComputerUseParams: MessageType<ComputerUseParams> = ComputerUseParams$Runtime as unknown as MessageType<ComputerUseParams>;
(ComputerUseParams as MutableMessageType<ComputerUseParams>).runtime = proto3;
(ComputerUseParams as MutableMessageType<ComputerUseParams>).typeName = "aiserver.v1.ComputerUseParams";
(ComputerUseParams as MutableMessageType<ComputerUseParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "actions", kind: "message", T: ComputerUseAction, repeated: true }
]);
var ComputerUseResult2$Runtime = (() => class _ComputerUseResult extends Message<_ComputerUseResult> {
  declare result: { case: "success"; value: ComputerUseSuccess } | { case: "error"; value: ComputerUseError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ComputerUseResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ComputerUseResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseResult {
    return new _ComputerUseResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseResult | PlainMessage<_ComputerUseResult> | undefined | null, b2: _ComputerUseResult | PlainMessage<_ComputerUseResult> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseResult as unknown as MessageType<_ComputerUseResult>, a, b2);
  }
})();
export type ComputerUseResult2 = InstanceType<typeof ComputerUseResult2$Runtime>;
var ComputerUseResult2: MessageType<ComputerUseResult2> = ComputerUseResult2$Runtime as unknown as MessageType<ComputerUseResult2>;
(ComputerUseResult2 as MutableMessageType<ComputerUseResult2>).runtime = proto3;
(ComputerUseResult2 as MutableMessageType<ComputerUseResult2>).typeName = "aiserver.v1.ComputerUseResult";
(ComputerUseResult2 as MutableMessageType<ComputerUseResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ComputerUseSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ComputerUseError, oneof: "result" }
]);
var ComputerUseStream$Runtime = (() => class _ComputerUseStream extends Message<_ComputerUseStream> {
  declare params?: ComputerUseParams;
  constructor(data?: PartialMessage<_ComputerUseStream>) {
    super();
    proto3.util.initPartial(data, this as _ComputerUseStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ComputerUseStream {
    return new _ComputerUseStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ComputerUseStream {
    return new _ComputerUseStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ComputerUseStream {
    return new _ComputerUseStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ComputerUseStream | PlainMessage<_ComputerUseStream> | undefined | null, b2: _ComputerUseStream | PlainMessage<_ComputerUseStream> | undefined | null): boolean {
    return proto3.util.equals(_ComputerUseStream as unknown as MessageType<_ComputerUseStream>, a, b2);
  }
})();
export type ComputerUseStream = InstanceType<typeof ComputerUseStream$Runtime>;
var ComputerUseStream: MessageType<ComputerUseStream> = ComputerUseStream$Runtime as unknown as MessageType<ComputerUseStream>;
(ComputerUseStream as MutableMessageType<ComputerUseStream>).runtime = proto3;
(ComputerUseStream as MutableMessageType<ComputerUseStream>).typeName = "aiserver.v1.ComputerUseStream";
(ComputerUseStream as MutableMessageType<ComputerUseStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: ComputerUseParams }
]);
var WriteShellStdinStream$Runtime = (() => class _WriteShellStdinStream extends Message<_WriteShellStdinStream> {
  declare params?: WriteShellStdinArgs;
  constructor(data?: PartialMessage<_WriteShellStdinStream>) {
    super();
    proto3.util.initPartial(data, this as _WriteShellStdinStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WriteShellStdinStream {
    return new _WriteShellStdinStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WriteShellStdinStream {
    return new _WriteShellStdinStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WriteShellStdinStream {
    return new _WriteShellStdinStream().fromJsonString(jsonString, options);
  }
  static equals(a: _WriteShellStdinStream | PlainMessage<_WriteShellStdinStream> | undefined | null, b2: _WriteShellStdinStream | PlainMessage<_WriteShellStdinStream> | undefined | null): boolean {
    return proto3.util.equals(_WriteShellStdinStream as unknown as MessageType<_WriteShellStdinStream>, a, b2);
  }
})();
export type WriteShellStdinStream = InstanceType<typeof WriteShellStdinStream$Runtime>;
var WriteShellStdinStream: MessageType<WriteShellStdinStream> = WriteShellStdinStream$Runtime as unknown as MessageType<WriteShellStdinStream>;
(WriteShellStdinStream as MutableMessageType<WriteShellStdinStream>).runtime = proto3;
(WriteShellStdinStream as MutableMessageType<WriteShellStdinStream>).typeName = "aiserver.v1.WriteShellStdinStream";
(WriteShellStdinStream as MutableMessageType<WriteShellStdinStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: WriteShellStdinArgs }
]);
var WebFetchParams$Runtime = (() => class _WebFetchParams extends Message<_WebFetchParams> {
  declare url: string;
  constructor(data?: PartialMessage<_WebFetchParams>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _WebFetchParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchParams {
    return new _WebFetchParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchParams {
    return new _WebFetchParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchParams {
    return new _WebFetchParams().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchParams | PlainMessage<_WebFetchParams> | undefined | null, b2: _WebFetchParams | PlainMessage<_WebFetchParams> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchParams as unknown as MessageType<_WebFetchParams>, a, b2);
  }
})();
export type WebFetchParams = InstanceType<typeof WebFetchParams$Runtime>;
var WebFetchParams: MessageType<WebFetchParams> = WebFetchParams$Runtime as unknown as MessageType<WebFetchParams>;
(WebFetchParams as MutableMessageType<WebFetchParams>).runtime = proto3;
(WebFetchParams as MutableMessageType<WebFetchParams>).typeName = "aiserver.v1.WebFetchParams";
(WebFetchParams as MutableMessageType<WebFetchParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WebFetchResult2$Runtime = (() => class _WebFetchResult extends Message<_WebFetchResult> {
  declare url: string;
  declare markdown?: string;
  declare error?: string;
  constructor(data?: PartialMessage<_WebFetchResult>) {
    super();
    this.url = "";
    proto3.util.initPartial(data, this as _WebFetchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchResult {
    return new _WebFetchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchResult | PlainMessage<_WebFetchResult> | undefined | null, b2: _WebFetchResult | PlainMessage<_WebFetchResult> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchResult as unknown as MessageType<_WebFetchResult>, a, b2);
  }
})();
export type WebFetchResult2 = InstanceType<typeof WebFetchResult2$Runtime>;
var WebFetchResult2: MessageType<WebFetchResult2> = WebFetchResult2$Runtime as unknown as MessageType<WebFetchResult2>;
(WebFetchResult2 as MutableMessageType<WebFetchResult2>).runtime = proto3;
(WebFetchResult2 as MutableMessageType<WebFetchResult2>).typeName = "aiserver.v1.WebFetchResult";
(WebFetchResult2 as MutableMessageType<WebFetchResult2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "markdown", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "error", kind: "scalar", T: 9, opt: true }
]);
var WebFetchStream$Runtime = (() => class _WebFetchStream extends Message<_WebFetchStream> {
  declare params?: WebFetchParams;
  constructor(data?: PartialMessage<_WebFetchStream>) {
    super();
    proto3.util.initPartial(data, this as _WebFetchStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _WebFetchStream {
    return new _WebFetchStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _WebFetchStream {
    return new _WebFetchStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _WebFetchStream {
    return new _WebFetchStream().fromJsonString(jsonString, options);
  }
  static equals(a: _WebFetchStream | PlainMessage<_WebFetchStream> | undefined | null, b2: _WebFetchStream | PlainMessage<_WebFetchStream> | undefined | null): boolean {
    return proto3.util.equals(_WebFetchStream as unknown as MessageType<_WebFetchStream>, a, b2);
  }
})();
export type WebFetchStream = InstanceType<typeof WebFetchStream$Runtime>;
var WebFetchStream: MessageType<WebFetchStream> = WebFetchStream$Runtime as unknown as MessageType<WebFetchStream>;
(WebFetchStream as MutableMessageType<WebFetchStream>).runtime = proto3;
(WebFetchStream as MutableMessageType<WebFetchStream>).typeName = "aiserver.v1.WebFetchStream";
(WebFetchStream as MutableMessageType<WebFetchStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: WebFetchParams }
]);
var ReportBugfixResultsParams$Runtime = (() => class _ReportBugfixResultsParams extends Message<_ReportBugfixResultsParams> {
  declare summary: string;
  declare results: BugfixResultItem[];
  constructor(data?: PartialMessage<_ReportBugfixResultsParams>) {
    super();
    this.summary = "";
    this.results = [];
    proto3.util.initPartial(data, this as _ReportBugfixResultsParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsParams {
    return new _ReportBugfixResultsParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsParams {
    return new _ReportBugfixResultsParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsParams {
    return new _ReportBugfixResultsParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsParams | PlainMessage<_ReportBugfixResultsParams> | undefined | null, b2: _ReportBugfixResultsParams | PlainMessage<_ReportBugfixResultsParams> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsParams as unknown as MessageType<_ReportBugfixResultsParams>, a, b2);
  }
})();
export type ReportBugfixResultsParams = InstanceType<typeof ReportBugfixResultsParams$Runtime>;
var ReportBugfixResultsParams: MessageType<ReportBugfixResultsParams> = ReportBugfixResultsParams$Runtime as unknown as MessageType<ReportBugfixResultsParams>;
(ReportBugfixResultsParams as MutableMessageType<ReportBugfixResultsParams>).runtime = proto3;
(ReportBugfixResultsParams as MutableMessageType<ReportBugfixResultsParams>).typeName = "aiserver.v1.ReportBugfixResultsParams";
(ReportBugfixResultsParams as MutableMessageType<ReportBugfixResultsParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "results", kind: "message", T: BugfixResultItem, repeated: true }
]);
var ReportBugfixResultsResult2$Runtime = (() => class _ReportBugfixResultsResult extends Message<_ReportBugfixResultsResult> {
  declare result: { case: "success"; value: ReportBugfixResultsSuccess } | { case: "error"; value: ReportBugfixResultsError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ReportBugfixResultsResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _ReportBugfixResultsResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsResult {
    return new _ReportBugfixResultsResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsResult | PlainMessage<_ReportBugfixResultsResult> | undefined | null, b2: _ReportBugfixResultsResult | PlainMessage<_ReportBugfixResultsResult> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsResult as unknown as MessageType<_ReportBugfixResultsResult>, a, b2);
  }
})();
export type ReportBugfixResultsResult2 = InstanceType<typeof ReportBugfixResultsResult2$Runtime>;
var ReportBugfixResultsResult2: MessageType<ReportBugfixResultsResult2> = ReportBugfixResultsResult2$Runtime as unknown as MessageType<ReportBugfixResultsResult2>;
(ReportBugfixResultsResult2 as MutableMessageType<ReportBugfixResultsResult2>).runtime = proto3;
(ReportBugfixResultsResult2 as MutableMessageType<ReportBugfixResultsResult2>).typeName = "aiserver.v1.ReportBugfixResultsResult";
(ReportBugfixResultsResult2 as MutableMessageType<ReportBugfixResultsResult2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: ReportBugfixResultsSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: ReportBugfixResultsError, oneof: "result" }
]);
var ReportBugfixResultsStream$Runtime = (() => class _ReportBugfixResultsStream extends Message<_ReportBugfixResultsStream> {
  declare params?: ReportBugfixResultsParams;
  constructor(data?: PartialMessage<_ReportBugfixResultsStream>) {
    super();
    proto3.util.initPartial(data, this as _ReportBugfixResultsStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ReportBugfixResultsStream {
    return new _ReportBugfixResultsStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ReportBugfixResultsStream {
    return new _ReportBugfixResultsStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ReportBugfixResultsStream {
    return new _ReportBugfixResultsStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ReportBugfixResultsStream | PlainMessage<_ReportBugfixResultsStream> | undefined | null, b2: _ReportBugfixResultsStream | PlainMessage<_ReportBugfixResultsStream> | undefined | null): boolean {
    return proto3.util.equals(_ReportBugfixResultsStream as unknown as MessageType<_ReportBugfixResultsStream>, a, b2);
  }
})();
export type ReportBugfixResultsStream = InstanceType<typeof ReportBugfixResultsStream$Runtime>;
var ReportBugfixResultsStream: MessageType<ReportBugfixResultsStream> = ReportBugfixResultsStream$Runtime as unknown as MessageType<ReportBugfixResultsStream>;
(ReportBugfixResultsStream as MutableMessageType<ReportBugfixResultsStream>).runtime = proto3;
(ReportBugfixResultsStream as MutableMessageType<ReportBugfixResultsStream>).typeName = "aiserver.v1.ReportBugfixResultsStream";
(ReportBugfixResultsStream as MutableMessageType<ReportBugfixResultsStream>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "params", kind: "message", T: ReportBugfixResultsParams }
]);
var McpAuthParams$Runtime = (() => class _McpAuthParams extends Message<_McpAuthParams> {
  declare serverIdentifier: string;
  constructor(data?: PartialMessage<_McpAuthParams>) {
    super();
    this.serverIdentifier = "";
    proto3.util.initPartial(data, this as _McpAuthParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthParams {
    return new _McpAuthParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthParams {
    return new _McpAuthParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthParams {
    return new _McpAuthParams().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthParams | PlainMessage<_McpAuthParams> | undefined | null, b2: _McpAuthParams | PlainMessage<_McpAuthParams> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthParams as unknown as MessageType<_McpAuthParams>, a, b2);
  }
})();
export type McpAuthParams = InstanceType<typeof McpAuthParams$Runtime>;
var McpAuthParams: MessageType<McpAuthParams> = McpAuthParams$Runtime as unknown as MessageType<McpAuthParams>;
(McpAuthParams as MutableMessageType<McpAuthParams>).runtime = proto3;
(McpAuthParams as MutableMessageType<McpAuthParams>).typeName = "aiserver.v1.McpAuthParams";
(McpAuthParams as MutableMessageType<McpAuthParams>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "server_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthResult2$Runtime = (() => class _McpAuthResult extends Message<_McpAuthResult> {
  declare success: boolean;
  declare message: string;
  constructor(data?: PartialMessage<_McpAuthResult>) {
    super();
    this.success = false;
    this.message = "";
    proto3.util.initPartial(data, this as _McpAuthResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthResult {
    return new _McpAuthResult().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthResult | PlainMessage<_McpAuthResult> | undefined | null, b2: _McpAuthResult | PlainMessage<_McpAuthResult> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthResult as unknown as MessageType<_McpAuthResult>, a, b2);
  }
})();
export type McpAuthResult2 = InstanceType<typeof McpAuthResult2$Runtime>;
var McpAuthResult2: MessageType<McpAuthResult2> = McpAuthResult2$Runtime as unknown as MessageType<McpAuthResult2>;
(McpAuthResult2 as MutableMessageType<McpAuthResult2>).runtime = proto3;
(McpAuthResult2 as MutableMessageType<McpAuthResult2>).typeName = "aiserver.v1.McpAuthResult";
(McpAuthResult2 as MutableMessageType<McpAuthResult2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var McpAuthStream$Runtime = (() => class _McpAuthStream extends Message<_McpAuthStream> {
  constructor(data?: PartialMessage<_McpAuthStream>) {
    super();
    proto3.util.initPartial(data, this as _McpAuthStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _McpAuthStream {
    return new _McpAuthStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _McpAuthStream {
    return new _McpAuthStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _McpAuthStream {
    return new _McpAuthStream().fromJsonString(jsonString, options);
  }
  static equals(a: _McpAuthStream | PlainMessage<_McpAuthStream> | undefined | null, b2: _McpAuthStream | PlainMessage<_McpAuthStream> | undefined | null): boolean {
    return proto3.util.equals(_McpAuthStream as unknown as MessageType<_McpAuthStream>, a, b2);
  }
})();
export type McpAuthStream = InstanceType<typeof McpAuthStream$Runtime>;
var McpAuthStream: MessageType<McpAuthStream> = McpAuthStream$Runtime as unknown as MessageType<McpAuthStream>;
(McpAuthStream as MutableMessageType<McpAuthStream>).runtime = proto3;
(McpAuthStream as MutableMessageType<McpAuthStream>).typeName = "aiserver.v1.McpAuthStream";
(McpAuthStream as MutableMessageType<McpAuthStream>).fields = proto3.util.newFieldList(() => []);
var ConnectScmParams$Runtime = (() => class _ConnectScmParams extends Message<_ConnectScmParams> {
  declare github?: ConnectScmGithub2;
  constructor(data?: PartialMessage<_ConnectScmParams>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmParams);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmParams {
    return new _ConnectScmParams().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmParams {
    return new _ConnectScmParams().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmParams {
    return new _ConnectScmParams().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmParams | PlainMessage<_ConnectScmParams> | undefined | null, b2: _ConnectScmParams | PlainMessage<_ConnectScmParams> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmParams as unknown as MessageType<_ConnectScmParams>, a, b2);
  }
})();
export type ConnectScmParams = InstanceType<typeof ConnectScmParams$Runtime>;
var ConnectScmParams: MessageType<ConnectScmParams> = ConnectScmParams$Runtime as unknown as MessageType<ConnectScmParams>;
(ConnectScmParams as MutableMessageType<ConnectScmParams>).runtime = proto3;
(ConnectScmParams as MutableMessageType<ConnectScmParams>).typeName = "aiserver.v1.ConnectScmParams";
(ConnectScmParams as MutableMessageType<ConnectScmParams>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "github", kind: "message", T: ConnectScmGithub2 }
]);
var ConnectScmGithub2$Runtime = (() => class _ConnectScmGithub extends Message<_ConnectScmGithub> {
  declare repository?: ConnectScmGithubRepository2;
  declare gheApplication?: string;
  constructor(data?: PartialMessage<_ConnectScmGithub>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmGithub);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmGithub {
    return new _ConnectScmGithub().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmGithub | PlainMessage<_ConnectScmGithub> | undefined | null, b2: _ConnectScmGithub | PlainMessage<_ConnectScmGithub> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmGithub as unknown as MessageType<_ConnectScmGithub>, a, b2);
  }
})();
export type ConnectScmGithub2 = InstanceType<typeof ConnectScmGithub2$Runtime>;
var ConnectScmGithub2: MessageType<ConnectScmGithub2> = ConnectScmGithub2$Runtime as unknown as MessageType<ConnectScmGithub2>;
(ConnectScmGithub2 as MutableMessageType<ConnectScmGithub2>).runtime = proto3;
(ConnectScmGithub2 as MutableMessageType<ConnectScmGithub2>).typeName = "aiserver.v1.ConnectScmGithub";
(ConnectScmGithub2 as MutableMessageType<ConnectScmGithub2>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repository", kind: "message", T: ConnectScmGithubRepository2 },
  { no: 2, name: "ghe_application", kind: "scalar", T: 9, opt: true }
]);
var ConnectScmGithubRepository2$Runtime = (() => class _ConnectScmGithubRepository extends Message<_ConnectScmGithubRepository> {
  declare owner: string;
  declare repo: string;
  constructor(data?: PartialMessage<_ConnectScmGithubRepository>) {
    super();
    this.owner = "";
    this.repo = "";
    proto3.util.initPartial(data, this as _ConnectScmGithubRepository);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmGithubRepository {
    return new _ConnectScmGithubRepository().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmGithubRepository | PlainMessage<_ConnectScmGithubRepository> | undefined | null, b2: _ConnectScmGithubRepository | PlainMessage<_ConnectScmGithubRepository> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmGithubRepository as unknown as MessageType<_ConnectScmGithubRepository>, a, b2);
  }
})();
export type ConnectScmGithubRepository2 = InstanceType<typeof ConnectScmGithubRepository2$Runtime>;
var ConnectScmGithubRepository2: MessageType<ConnectScmGithubRepository2> = ConnectScmGithubRepository2$Runtime as unknown as MessageType<ConnectScmGithubRepository2>;
(ConnectScmGithubRepository2 as MutableMessageType<ConnectScmGithubRepository2>).runtime = proto3;
(ConnectScmGithubRepository2 as MutableMessageType<ConnectScmGithubRepository2>).typeName = "aiserver.v1.ConnectScmGithubRepository";
(ConnectScmGithubRepository2 as MutableMessageType<ConnectScmGithubRepository2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "owner",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmResult2$Runtime = (() => class _ConnectScmResult extends Message<_ConnectScmResult> {
  declare success: boolean;
  declare message: string;
  constructor(data?: PartialMessage<_ConnectScmResult>) {
    super();
    this.success = false;
    this.message = "";
    proto3.util.initPartial(data, this as _ConnectScmResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmResult {
    return new _ConnectScmResult().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmResult | PlainMessage<_ConnectScmResult> | undefined | null, b2: _ConnectScmResult | PlainMessage<_ConnectScmResult> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmResult as unknown as MessageType<_ConnectScmResult>, a, b2);
  }
})();
export type ConnectScmResult2 = InstanceType<typeof ConnectScmResult2$Runtime>;
var ConnectScmResult2: MessageType<ConnectScmResult2> = ConnectScmResult2$Runtime as unknown as MessageType<ConnectScmResult2>;
(ConnectScmResult2 as MutableMessageType<ConnectScmResult2>).runtime = proto3;
(ConnectScmResult2 as MutableMessageType<ConnectScmResult2>).typeName = "aiserver.v1.ConnectScmResult";
(ConnectScmResult2 as MutableMessageType<ConnectScmResult2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectScmStream$Runtime = (() => class _ConnectScmStream extends Message<_ConnectScmStream> {
  constructor(data?: PartialMessage<_ConnectScmStream>) {
    super();
    proto3.util.initPartial(data, this as _ConnectScmStream);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConnectScmStream {
    return new _ConnectScmStream().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConnectScmStream {
    return new _ConnectScmStream().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConnectScmStream {
    return new _ConnectScmStream().fromJsonString(jsonString, options);
  }
  static equals(a: _ConnectScmStream | PlainMessage<_ConnectScmStream> | undefined | null, b2: _ConnectScmStream | PlainMessage<_ConnectScmStream> | undefined | null): boolean {
    return proto3.util.equals(_ConnectScmStream as unknown as MessageType<_ConnectScmStream>, a, b2);
  }
})();
export type ConnectScmStream = InstanceType<typeof ConnectScmStream$Runtime>;
var ConnectScmStream: MessageType<ConnectScmStream> = ConnectScmStream$Runtime as unknown as MessageType<ConnectScmStream>;
(ConnectScmStream as MutableMessageType<ConnectScmStream>).runtime = proto3;
(ConnectScmStream as MutableMessageType<ConnectScmStream>).typeName = "aiserver.v1.ConnectScmStream";
(ConnectScmStream as MutableMessageType<ConnectScmStream>).fields = proto3.util.newFieldList(() => []);


export { ClientSideToolV2, ShellType, BuiltinTool, RunTerminalCommandEndedReason, ReapplyParams, ApplyAgentDiffParams, ReapplyResult, FetchRulesParams, FetchRulesResult, ReapplyStream, SemanticSearchArguments, ToolResultError, ToolResultError_EditFileError, ToolResultError_SearchReplaceError, ClientSideToolV2Call, ClientSideToolV2Result, NudgeMessage, ToolResultAttachments, ToolResultAttachments_TodoReminderType, ToolResultAttachments_DiscoveryBudgetReminder, StreamedBackPartialToolCall, StreamedBackToolCall, StreamedBackToolCallV2, EditFileV2Params, EditFileV2Params_StreamingEditText, EditFileV2Params_StreamingEditCode, EditFileV2Result, EditFileV2Stream, EditFileParams, EditFileResult, EditFileResult_FileDiff, EditFileResult_FileDiff_Editor, EditFileResult_FileDiff_ChunkDiff, EditFileResult_RecoverableError, EditFileResult_RecoverableError_RecoverableErrorType, EditFileResult_EditFileHumanReview, EditFileResult_HumanFeedback, HumanReview, EditFileStream, ToolCallFileSearchParams, ToolCallFileSearchStream, ToolCallFileSearchResult, ToolCallFileSearchResult_File, ListDirParams, ListDirResult, ListDirResult_File, ListDirStream, ReadFileParams, ReadFileResult, ReadFileStream, RipgrepSearchParams, RipgrepSearchParams_IPatternInfoProto, RipgrepSearchParams_IPatternInfoProto_INotebookPatternInfoProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExtraFileResourcesProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ExcludePatternProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPatternBuilderProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ISearchPathPatternBuilderProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_ITextSearchPreviewOptionsProto, RipgrepSearchParams_ITextQueryBuilderOptionsProto_INotebookSearchConfigProto, RipgrepSearchResult, RipgrepSearchResultInternal, RipgrepSearchResultInternal_TextSearchCompleteMessageType, RipgrepSearchResultInternal_SearchCompletionExitCode, RipgrepSearchResultInternal_IFileMatch, RipgrepSearchResultInternal_ITextSearchResult, RipgrepSearchResultInternal_ITextSearchMatch, RipgrepSearchResultInternal_ITextSearchContext, RipgrepSearchResultInternal_ISearchRangeSetPairing, RipgrepSearchResultInternal_ISearchRange, RipgrepSearchResultInternal_ITextSearchCompleteMessage, RipgrepSearchResultInternal_IFileSearchStats, RipgrepSearchResultInternal_IFileSearchStats_FileSearchProviderType, RipgrepSearchResultInternal_ITextSearchStats, RipgrepSearchResultInternal_ITextSearchStats_TextSearchProviderType, RipgrepSearchResultInternal_ISearchEngineStats, RipgrepSearchResultInternal_ICachedSearchStats, RipgrepSearchResultInternal_IFileSearchProviderStats, RipgrepSearchStream, ReadSemsearchFilesParams, MissingFile, MissingFile_MissingReason, Knowledge, ToolPullRequestResult, ReadSemsearchFilesResult, ReadSemsearchFilesStream, SemanticSearchFullParams, SemanticSearchFullResult, SemanticSearchFullStream, DeleteFileParams, DeleteFileResult, DeleteFileStream, BuiltinToolCall, BuiltinToolResult, AddUiStepParams, AddUiStepParams_SearchResult, AddUiStepParams_SearchResults, AddUiStepResult, ServerSideToolResult, ToolCall2, ToolResult, ReadWithLinterParams, ReadWithLinterResult, RunTerminalCommandsParams, RunTerminalCommandsResult, CreateRmFilesParams, CreateRmFilesResult, GetProjectStructureParams, GetProjectStructureResult, GetProjectStructureResult_File, NewFileParams, SemanticSearchParams, Range2, MatchRange, SemanticSearchResult, SemanticSearchResult_Item, SearchParams, SearchToolFileSearchResult, SearchToolFileSearchResult_Line, SearchResult, ReadChunkParams, ReadChunkResult, UndoEditParams, EndParams, NewFileResult, UndoEditResult, EndResult, CustomToolCall, ScratchpadResult, CustomToolResult, GotodefParams, GotodefDefinition, GotodefResult, ErrorToolResult, NewEditParams, NewEditResult, EditParams, EditParams_FrontendEditType, EditResult2, EditResult_RelatedInformation, EditResult_Feedback, AddTestParams, AddTestResult, AddTestResult_RelatedInformation, AddTestResult_Feedback, RunTestParams, RunTestResult, GetTestsParams, GetTestsResult, GetTestsResult_Test, DeleteTestParams, DeleteTestResult, SaveFileParams, SaveFileResult, GetSymbolsParams, GetSymbolsParams_LineRange, GetSymbolsResult, ShellCommandParsingResult2, ShellCommandParsingResult_ExecutableCommandArg2, ShellCommandParsingResult_ExecutableCommand2, ShellCommandParsingResult_Redirect2, RunTerminalCommandV2Params, RunTerminalCommandV2Params_ExecutionOptions, OutputLocation2, RunTerminalCommandV2Result, RunTerminalCommandV2Stream, FetchRulesStream, WebSearchParams, WebSearchResult2, WebSearchResult_WebReference, WebSearchStream, MCPParams, MCPParams_Tool, MCPParams_TranscriptDisplay, MCPResult, MCPStream, ListMcpResourcesParams, ListMcpResourcesResult, ListMcpResourcesResult_MCPResource, ReadMcpResourceParams, ReadMcpResourceResult, CallMcpToolParams, CallMcpToolResult, GetMcpToolsParams, GetMcpToolsResult, SearchSymbolsParams, SearchSymbolsResult, SearchSymbolsResult_SymbolMatch, SearchSymbolsStream, BackgroundComposerFollowupParams, BackgroundComposerFollowupResult, BackgroundComposerFollowupStream, SummarizeCodeParams, SummarizeCodeResult, SummarizeCodeStream, KnowledgeBaseParams, KnowledgeBaseResult, KnowledgeBaseStream, FetchPullRequestParams, FetchPullRequestResult, IssueComment, FetchPullRequestStream, PullRequestReference, DeepSearchParams, DeepSearchResult, DeepSearchStream, CreateDiagramParams, CreateDiagramResult, CreateDiagramStream, FixLintsParams, FixLintsResult, FixLintsResult_FileResult, FixLintsStream, ReadLintsParams, ReadLintsResult, ReadLintsStream, GotodefStream, TaskParams, TaskResult2, TaskResult_CompletedTaskResult, TaskResult_AsyncTaskResult, TaskStream, TaskV2Params, TaskV2Result, TaskV2Stream, RipgrepRawSearchParams, RipgrepRawSearchResult, RipgrepRawSearchError, RipgrepRawSearchSuccess, RipgrepRawSearchUnionResult, RipgrepRawSearchCountResult, RipgrepRawSearchFileCount, RipgrepRawSearchFilesResult, RipgrepRawSearchFilesResult_FileEntry, RipgrepRawSearchContentResult, RipgrepRawSearchFileMatch, RipgrepRawSearchContentMatch, RipgrepRawSearchStream, AwaitTaskParams, AwaitTaskResult, AwaitTaskResult_TaskResultItem, AwaitTaskStream, TodoReadParams, TodoItem2, TodoReadResult, TodoReadStream, TodoWriteParams, TodoWriteResult, TodoWriteStream, ListDirV2Params, ListDirV2Result, ListDirV2Result_DirectoryTreeNode, ListDirV2Result_DirectoryTreeNode_File, ListDirV2Stream, ReadFileV2Params, ReadFileV2Result, ReadFileV2Stream, GlobFileSearchParams, GlobFileSearchResult, GlobFileSearchResult_File, GlobFileSearchResult_Directory, GlobFileSearchStream, ListMcpResourcesStream, CallMcpToolStream, ReadMcpResourceStream, Step, PlanPhase, CreatePlanParams, CreatePlanResult2, CreatePlanResult_Accepted, CreatePlanResult_Rejected, CreatePlanResult_Modified, CreatePlanStream, ReadProjectParams, ReadProjectResult, ReadProjectStream, UpdateProjectStringReplacement, UpdateProjectParams, UpdateProjectResult, UpdateProjectStream, AskQuestionParams, AskQuestionParams_Question, AskQuestionParams_Option, AskQuestionResult2, AskQuestionResult_Answer, AskQuestionStream, SwitchModeParams, SwitchModeResult2, SwitchModeStream, ComputerUseParams, ComputerUseResult2, ComputerUseStream, WriteShellStdinStream, WebFetchParams, WebFetchResult2, WebFetchStream, ReportBugfixResultsParams, ReportBugfixResultsResult2, ReportBugfixResultsStream, McpAuthParams, McpAuthResult2, McpAuthStream, ConnectScmParams, ConnectScmGithub2, ConnectScmGithubRepository2, ConnectScmResult2, ConnectScmStream };
