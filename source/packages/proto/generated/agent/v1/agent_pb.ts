/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:44799-51682
 * Region SHA-256: 315bcdae576f323b41da1e1122679ea6489e1aa49010507dc4bc10606c6125f5
 * Atomic B1 exports: 183 messages + 14 enums = 197
 */
import { Message, proto3, protoInt64, Struct } from "@bufbuild/protobuf";
import type { BinaryReadOptions, JsonReadOptions, JsonValue, MessageType, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { TaskMode, SubagentType } from "./subagents_pb.js";
import { ShellToolCall, ShellToolCallDelta } from "./shell_tool_pb.js";
import { DeleteToolCall } from "./delete_tool_pb.js";
import { GlobToolCall } from "./glob_tool_pb.js";
import { GrepToolCall } from "./grep_tool_pb.js";
import { ReadToolCall } from "./read_tool_pb.js";
import { TodoItem, UpdateTodosToolCall, ReadTodosToolCall } from "./todo_tool_pb.js";
import { EditToolCall, EditToolCallDelta } from "./edit_tool_pb.js";
import { LsToolCall } from "./ls_tool_pb.js";
import { ReadLintsToolCall } from "./read_lints_tool_pb.js";
import { McpToolCall } from "./mcp_tool_pb.js";
import { SemSearchToolCall } from "./semsearch_tool_pb.js";
import { CreatePlanToolCall, CreatePlanRequestQuery, CreatePlanRequestResponse } from "./create_plan_tool_pb.js";
import { WebSearchToolCall, WebSearchRequestQuery, WebSearchRequestResponse } from "./web_search_tool_pb.js";
import { ListMcpResourcesToolCall, ReadMcpResourceToolCall } from "./mcp_resource_tool_pb.js";
import { ApplyAgentDiffToolCall } from "./apply_agent_diff_tool_pb.js";
import { AskQuestionToolCall, AskQuestionArgs, AskQuestionResult } from "./ask_question_tool_pb.js";
import { FetchToolCall } from "./fetch_tool_pb.js";
import { SwitchModeToolCall, SwitchModeRequestQuery, SwitchModeRequestResponse } from "./switch_mode_tool_pb.js";
import { GenerateImageToolCall, GenerateImageRequestQuery, GenerateImageRequestResponse } from "./generate_image_tool_pb.js";
import { RecordScreenToolCall } from "./record_screen_tool_pb.js";
import { ComputerUseToolCall } from "./computer_use_tool_pb.js";
import { WriteShellStdinToolCall } from "./write_shell_stdin_tool_pb.js";
import { ReflectToolCall } from "./reflect_tool_pb.js";
import { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentToolCall } from "./setup_vm_environment_tool_pb.js";
import { StartGrindExecutionToolCall } from "./start_grind_execution_tool_pb.js";
import { StartGrindPlanningToolCall } from "./start_grind_planning_tool_pb.js";
import { WebFetchToolCall, WebFetchRequestQuery, WebFetchRequestResponse } from "./web_fetch_tool_pb.js";
import { ReportBugfixResultsToolCall } from "./report_bugfix_results_tool_pb.js";
import { AiAttributionToolCall } from "./ai_attribution_tool_pb.js";
import { PrManagementResult, PrManagementToolCall, PrManagementRequestQuery } from "./pr_management_tool_pb.js";
import { McpAuthToolCall, McpAuthRequestQuery, McpAuthRequestResponse } from "./mcp_auth_tool_pb.js";
import { AwaitToolCall } from "./await_tool_pb.js";
import { BlameByFilePathToolCall } from "./blame_by_file_path_tool_pb.js";
import { GetMcpToolsToolCall } from "./get_mcp_tools_tool_pb.js";
import { ReportBugToolCall } from "./report_bug_tool_pb.js";
import { CommunicateUpdateToolCall } from "./communicate_update_tool_pb.js";
import { SendFinalSummaryToolCall } from "./send_final_summary_tool_pb.js";
import { UpdatePrCodeTourToolCall } from "./update_pr_code_tour_tool_pb.js";
import { ReplaceEnvArgs, ReplaceEnvResult, ReplaceEnvToolCall, ReplaceEnvToolCallDelta } from "./replace_env_tool_pb.js";
import { EditPrLabelsToolCall } from "./edit_pr_labels_tool_pb.js";
import { RecordCiInvestigationFindingsToolCall } from "./record_ci_investigation_findings_tool_pb.js";
import { SendMessageToolCall } from "./send_message_tool_pb.js";
import { FetchCloudAgentDataToolCall } from "./fetch_cloud_agent_data_tool_pb.js";
import { SendToUserToolCall } from "./send_to_user_tool_pb.js";
import { PiReadToolCall } from "./pi_read_tool_pb.js";
import { PiBashToolCall } from "./pi_bash_tool_pb.js";
import { PiEditToolCall } from "./pi_edit_tool_pb.js";
import { PiWriteToolCall } from "./pi_write_tool_pb.js";
import { PiGrepToolCall } from "./pi_grep_tool_pb.js";
import { PiFindToolCall } from "./pi_find_tool_pb.js";
import { PiLsToolCall } from "./pi_ls_tool_pb.js";
import { ConnectScmToolCall, ConnectScmRequestQuery, ConnectScmRequestResponse } from "./connect_scm_tool_pb.js";
import { SearchConversationsToolCall } from "./search_conversations_tool_pb.js";
import { GoalStatus, CreateGoalToolCall, UpdateGoalToolCall } from "./goal_tool_pb.js";
import { AdoptToolCall } from "./adopt_tool_pb.js";
import { GetAgentStatusToolCall, SendToAgentToolCall, ReadAgentTranscriptToolCall, CreateAgentToolCall, StopAgentToolCall } from "./coordinator_tools_pb.js";
import { HookAdditionalContext } from "./hook_additional_context_pb.js";
import { SkillOptions, RequestContext, RequestContextPartReferences } from "./request_context_exec_pb.js";
import { ShellResult, ShellStreamStdout, ShellStreamStderr, ShellStreamExit, ShellStreamStart } from "./shell_exec_pb.js";
import { SelectedContext } from "./selected_context_pb.js";
import { McpTools, McpFileSystemOptions } from "./mcp_pb.js";
import { SystemPromptSpec } from "./system_prompt_pb.js";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type AgentMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
var AgentMode: {
  "UNSPECIFIED": 0;
  "AGENT": 1;
  "ASK": 2;
  "PLAN": 3;
  "DEBUG": 4;
  "TRIAGE": 5;
  "PROJECT": 6;
  "MULTITASK": 7;
  "CUSTOM": 8;
  0: "UNSPECIFIED";
  1: "AGENT";
  2: "ASK";
  3: "PLAN";
  4: "DEBUG";
  5: "TRIAGE";
  6: "PROJECT";
  7: "MULTITASK";
  8: "CUSTOM";
};
export type SubagentExecutionEnvironment = 0 | 1 | 2;
var SubagentExecutionEnvironment: {
  "UNSPECIFIED": 0;
  "LOCAL": 1;
  "CLOUD": 2;
  0: "UNSPECIFIED";
  1: "LOCAL";
  2: "CLOUD";
};
export type SubagentBackgroundReason = 0 | 1 | 2 | 3;
var SubagentBackgroundReason: {
  "UNSPECIFIED": 0;
  "AGENT_REQUEST": 1;
  "USER_REQUEST": 2;
  "QUEUED_FOLLOW_UP": 3;
  0: "UNSPECIFIED";
  1: "AGENT_REQUEST";
  2: "USER_REQUEST";
  3: "QUEUED_FOLLOW_UP";
};
export type BackgroundTaskKind = 0 | 1 | 2;
var BackgroundTaskKind: {
  "UNSPECIFIED": 0;
  "SHELL": 1;
  "SUBAGENT": 2;
  0: "UNSPECIFIED";
  1: "SHELL";
  2: "SUBAGENT";
};
export type BackgroundTaskStatus = 0 | 1 | 2 | 3;
var BackgroundTaskStatus: {
  "UNSPECIFIED": 0;
  "SUCCESS": 1;
  "ERROR": 2;
  "ABORTED": 3;
  0: "UNSPECIFIED";
  1: "SUCCESS";
  2: "ERROR";
  3: "ABORTED";
};
export type BackgroundTaskCompletionReason = 0 | 1 | 2 | 3;
var BackgroundTaskCompletionReason: {
  "UNSPECIFIED": 0;
  "TASK_FINISHED": 1;
  "TASK_PROGRESS": 2;
  "WORKER_REPARENTED": 3;
  0: "UNSPECIFIED";
  1: "TASK_FINISHED";
  2: "TASK_PROGRESS";
  3: "WORKER_REPARENTED";
};
export type BackgroundTaskNotificationContext = 0 | 1;
var BackgroundTaskNotificationContext: {
  "UNSPECIFIED": 0;
  "USER_DRIVEN_INTERACTIVE_CHILD": 1;
  0: "UNSPECIFIED";
  1: "USER_DRIVEN_INTERACTIVE_CHILD";
};
export type SubagentRunStatus = 0 | 1 | 2 | 3 | 4 | 5;
var SubagentRunStatus: {
  "UNSPECIFIED": 0;
  "RUNNING": 1;
  "BACKGROUNDED": 2;
  "SUCCESS": 3;
  "ERROR": 4;
  "ABORTED": 5;
  0: "UNSPECIFIED";
  1: "RUNNING";
  2: "BACKGROUNDED";
  3: "SUCCESS";
  4: "ERROR";
  5: "ABORTED";
};
export type CustomModeSource = 0 | 1 | 2 | 3 | 4;
var CustomModeSource: {
  "UNSPECIFIED": 0;
  "AGENT_SKILL": 1;
  "PLUGIN_SKILL": 2;
  "REPO_SKILL": 3;
  "MANAGED_SKILL": 4;
  0: "UNSPECIFIED";
  1: "AGENT_SKILL";
  2: "PLUGIN_SKILL";
  3: "REPO_SKILL";
  4: "MANAGED_SKILL";
};
export type SimulatedMsgReason = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32;
var SimulatedMsgReason: {
  "UNSPECIFIED": 0;
  "PLAN_EXECUTION": 1;
  "COMMIT_REMINDER": 2;
  "BACKGROUND_TASK_COMPLETION": 3;
  "DIFF_TAB_COMMIT": 4;
  "DIFF_TAB_COMMIT_AND_PUSH": 5;
  "DIFF_TAB_PUSH": 6;
  "DIFF_TAB_CREATE_PR": 7;
  "DIFF_TAB_FIX_MERGE_CONFLICTS": 8;
  "USER_SENT_TO_SUBAGENT": 9;
  "USER_INTERRUPTED_SUBAGENT": 10;
  "USER_QUEUED_TO_SUBAGENT": 11;
  "BABYSIT_PR_IN_CLOUD": 12;
  "CI_PANEL_INVESTIGATE_FAILURE": 13;
  "MULTITASK": 14;
  "BUILD_IN_PARALLEL": 15;
  "MULTITASK_SPLIT_PRS": 16;
  "APPLY_LOCALLY": 17;
  "CHECKOUT_BRANCH": 18;
  "DIFF_TAB_UPDATE_BRANCH": 19;
  "PR_TAB_BUGBOT_FIX": 20;
  "RUN_BUGBOT_REVIEW": 22;
  "RUN_SECURITY_REVIEW": 23;
  "FSD_APPLY_FINDING": 24;
  "FSD_UNDO_FINDING": 25;
  "FSD_START": 26;
  "FSD_PR_INTERRUPT": 27;
  "SUBSCRIPTION": 28;
  "DIFF_TAB_CREATE_BRANCH": 29;
  "AGENT_STORE_CONFLICT": 30;
  "GOAL_CONTINUATION": 31;
  "PROJECT_KICKOFF": 32;
  0: "UNSPECIFIED";
  1: "PLAN_EXECUTION";
  2: "COMMIT_REMINDER";
  3: "BACKGROUND_TASK_COMPLETION";
  4: "DIFF_TAB_COMMIT";
  5: "DIFF_TAB_COMMIT_AND_PUSH";
  6: "DIFF_TAB_PUSH";
  7: "DIFF_TAB_CREATE_PR";
  8: "DIFF_TAB_FIX_MERGE_CONFLICTS";
  9: "USER_SENT_TO_SUBAGENT";
  10: "USER_INTERRUPTED_SUBAGENT";
  11: "USER_QUEUED_TO_SUBAGENT";
  12: "BABYSIT_PR_IN_CLOUD";
  13: "CI_PANEL_INVESTIGATE_FAILURE";
  14: "MULTITASK";
  15: "BUILD_IN_PARALLEL";
  16: "MULTITASK_SPLIT_PRS";
  17: "APPLY_LOCALLY";
  18: "CHECKOUT_BRANCH";
  19: "DIFF_TAB_UPDATE_BRANCH";
  20: "PR_TAB_BUGBOT_FIX";
  22: "RUN_BUGBOT_REVIEW";
  23: "RUN_SECURITY_REVIEW";
  24: "FSD_APPLY_FINDING";
  25: "FSD_UNDO_FINDING";
  26: "FSD_START";
  27: "FSD_PR_INTERRUPT";
  28: "SUBSCRIPTION";
  29: "DIFF_TAB_CREATE_BRANCH";
  30: "AGENT_STORE_CONFLICT";
  31: "GOAL_CONTINUATION";
  32: "PROJECT_KICKOFF";
};
export type SubscriptionSource = 0 | 1 | 2 | 3 | 4;
var SubscriptionSource: {
  "UNSPECIFIED": 0;
  "SLACK": 1;
  "GITHUB": 2;
  "LINEAR": 3;
  "ORIGIN": 4;
  0: "UNSPECIFIED";
  1: "SLACK";
  2: "GITHUB";
  3: "LINEAR";
  4: "ORIGIN";
};
export type ThinkingStyle = 0 | 1 | 2 | 3;
var ThinkingStyle: {
  "UNSPECIFIED": 0;
  "DEFAULT": 1;
  "CODEX": 2;
  "GPT5": 3;
  0: "UNSPECIFIED";
  1: "DEFAULT";
  2: "CODEX";
  3: "GPT5";
};
export type ResponseComparisonDisplayOrder = 0 | 1 | 2;
var ResponseComparisonDisplayOrder: {
  "UNSPECIFIED": 0;
  "PARENT_FIRST": 1;
  "ALTERNATE_FIRST": 2;
  0: "UNSPECIFIED";
  1: "PARENT_FIRST";
  2: "ALTERNATE_FIRST";
};
export type ResponseComparisonSkipReason = 0 | 1 | 2 | 3 | 4;
var ResponseComparisonSkipReason: {
  "UNSPECIFIED": 0;
  "ALTERNATE_TOOL_CALL": 1;
  "INFERENCE_ERROR": 2;
  "TIMEOUT": 3;
  "CANCELLED": 4;
  0: "UNSPECIFIED";
  1: "ALTERNATE_TOOL_CALL";
  2: "INFERENCE_ERROR";
  3: "TIMEOUT";
  4: "CANCELLED";
};
(function(AgentMode2) {
  AgentMode2[AgentMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AgentMode2[AgentMode2["AGENT"] = 1] = "AGENT";
  AgentMode2[AgentMode2["ASK"] = 2] = "ASK";
  AgentMode2[AgentMode2["PLAN"] = 3] = "PLAN";
  AgentMode2[AgentMode2["DEBUG"] = 4] = "DEBUG";
  AgentMode2[AgentMode2["TRIAGE"] = 5] = "TRIAGE";
  AgentMode2[AgentMode2["PROJECT"] = 6] = "PROJECT";
  AgentMode2[AgentMode2["MULTITASK"] = 7] = "MULTITASK";
  AgentMode2[AgentMode2["CUSTOM"] = 8] = "CUSTOM";
})(AgentMode! || (AgentMode = {} as typeof AgentMode));
proto3.util.setEnumType(AgentMode, "agent.v1.AgentMode", [
  { no: 0, name: "AGENT_MODE_UNSPECIFIED" },
  { no: 1, name: "AGENT_MODE_AGENT" },
  { no: 2, name: "AGENT_MODE_ASK" },
  { no: 3, name: "AGENT_MODE_PLAN" },
  { no: 4, name: "AGENT_MODE_DEBUG" },
  { no: 5, name: "AGENT_MODE_TRIAGE" },
  { no: 6, name: "AGENT_MODE_PROJECT" },
  { no: 7, name: "AGENT_MODE_MULTITASK" },
  { no: 8, name: "AGENT_MODE_CUSTOM" }
]);
(function(SubagentExecutionEnvironment2) {
  SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["LOCAL"] = 1] = "LOCAL";
  SubagentExecutionEnvironment2[SubagentExecutionEnvironment2["CLOUD"] = 2] = "CLOUD";
})(SubagentExecutionEnvironment! || (SubagentExecutionEnvironment = {} as typeof SubagentExecutionEnvironment));
proto3.util.setEnumType(SubagentExecutionEnvironment, "agent.v1.SubagentExecutionEnvironment", [
  { no: 0, name: "SUBAGENT_EXECUTION_ENVIRONMENT_UNSPECIFIED" },
  { no: 1, name: "SUBAGENT_EXECUTION_ENVIRONMENT_LOCAL" },
  { no: 2, name: "SUBAGENT_EXECUTION_ENVIRONMENT_CLOUD" }
]);
(function(SubagentBackgroundReason2) {
  SubagentBackgroundReason2[SubagentBackgroundReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubagentBackgroundReason2[SubagentBackgroundReason2["AGENT_REQUEST"] = 1] = "AGENT_REQUEST";
  SubagentBackgroundReason2[SubagentBackgroundReason2["USER_REQUEST"] = 2] = "USER_REQUEST";
  SubagentBackgroundReason2[SubagentBackgroundReason2["QUEUED_FOLLOW_UP"] = 3] = "QUEUED_FOLLOW_UP";
})(SubagentBackgroundReason! || (SubagentBackgroundReason = {} as typeof SubagentBackgroundReason));
proto3.util.setEnumType(SubagentBackgroundReason, "agent.v1.SubagentBackgroundReason", [
  { no: 0, name: "SUBAGENT_BACKGROUND_REASON_UNSPECIFIED" },
  { no: 1, name: "SUBAGENT_BACKGROUND_REASON_AGENT_REQUEST" },
  { no: 2, name: "SUBAGENT_BACKGROUND_REASON_USER_REQUEST" },
  { no: 3, name: "SUBAGENT_BACKGROUND_REASON_QUEUED_FOLLOW_UP" }
]);
(function(BackgroundTaskKind2) {
  BackgroundTaskKind2[BackgroundTaskKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BackgroundTaskKind2[BackgroundTaskKind2["SHELL"] = 1] = "SHELL";
  BackgroundTaskKind2[BackgroundTaskKind2["SUBAGENT"] = 2] = "SUBAGENT";
})(BackgroundTaskKind! || (BackgroundTaskKind = {} as typeof BackgroundTaskKind));
proto3.util.setEnumType(BackgroundTaskKind, "agent.v1.BackgroundTaskKind", [
  { no: 0, name: "BACKGROUND_TASK_KIND_UNSPECIFIED" },
  { no: 1, name: "BACKGROUND_TASK_KIND_SHELL" },
  { no: 2, name: "BACKGROUND_TASK_KIND_SUBAGENT" }
]);
(function(BackgroundTaskStatus2) {
  BackgroundTaskStatus2[BackgroundTaskStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BackgroundTaskStatus2[BackgroundTaskStatus2["SUCCESS"] = 1] = "SUCCESS";
  BackgroundTaskStatus2[BackgroundTaskStatus2["ERROR"] = 2] = "ERROR";
  BackgroundTaskStatus2[BackgroundTaskStatus2["ABORTED"] = 3] = "ABORTED";
})(BackgroundTaskStatus! || (BackgroundTaskStatus = {} as typeof BackgroundTaskStatus));
proto3.util.setEnumType(BackgroundTaskStatus, "agent.v1.BackgroundTaskStatus", [
  { no: 0, name: "BACKGROUND_TASK_STATUS_UNSPECIFIED" },
  { no: 1, name: "BACKGROUND_TASK_STATUS_SUCCESS" },
  { no: 2, name: "BACKGROUND_TASK_STATUS_ERROR" },
  { no: 3, name: "BACKGROUND_TASK_STATUS_ABORTED" }
]);
(function(BackgroundTaskCompletionReason2) {
  BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["TASK_FINISHED"] = 1] = "TASK_FINISHED";
  BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["TASK_PROGRESS"] = 2] = "TASK_PROGRESS";
  BackgroundTaskCompletionReason2[BackgroundTaskCompletionReason2["WORKER_REPARENTED"] = 3] = "WORKER_REPARENTED";
})(BackgroundTaskCompletionReason! || (BackgroundTaskCompletionReason = {} as typeof BackgroundTaskCompletionReason));
proto3.util.setEnumType(BackgroundTaskCompletionReason, "agent.v1.BackgroundTaskCompletionReason", [
  { no: 0, name: "BACKGROUND_TASK_COMPLETION_REASON_UNSPECIFIED" },
  { no: 1, name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_FINISHED" },
  { no: 2, name: "BACKGROUND_TASK_COMPLETION_REASON_TASK_PROGRESS" },
  { no: 3, name: "BACKGROUND_TASK_COMPLETION_REASON_WORKER_REPARENTED" }
]);
(function(BackgroundTaskNotificationContext2) {
  BackgroundTaskNotificationContext2[BackgroundTaskNotificationContext2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  BackgroundTaskNotificationContext2[BackgroundTaskNotificationContext2["USER_DRIVEN_INTERACTIVE_CHILD"] = 1] = "USER_DRIVEN_INTERACTIVE_CHILD";
})(BackgroundTaskNotificationContext! || (BackgroundTaskNotificationContext = {} as typeof BackgroundTaskNotificationContext));
proto3.util.setEnumType(BackgroundTaskNotificationContext, "agent.v1.BackgroundTaskNotificationContext", [
  { no: 0, name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_UNSPECIFIED" },
  { no: 1, name: "BACKGROUND_TASK_NOTIFICATION_CONTEXT_USER_DRIVEN_INTERACTIVE_CHILD" }
]);
(function(SubagentRunStatus2) {
  SubagentRunStatus2[SubagentRunStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubagentRunStatus2[SubagentRunStatus2["RUNNING"] = 1] = "RUNNING";
  SubagentRunStatus2[SubagentRunStatus2["BACKGROUNDED"] = 2] = "BACKGROUNDED";
  SubagentRunStatus2[SubagentRunStatus2["SUCCESS"] = 3] = "SUCCESS";
  SubagentRunStatus2[SubagentRunStatus2["ERROR"] = 4] = "ERROR";
  SubagentRunStatus2[SubagentRunStatus2["ABORTED"] = 5] = "ABORTED";
})(SubagentRunStatus! || (SubagentRunStatus = {} as typeof SubagentRunStatus));
proto3.util.setEnumType(SubagentRunStatus, "agent.v1.SubagentRunStatus", [
  { no: 0, name: "SUBAGENT_RUN_STATUS_UNSPECIFIED" },
  { no: 1, name: "SUBAGENT_RUN_STATUS_RUNNING" },
  { no: 2, name: "SUBAGENT_RUN_STATUS_BACKGROUNDED" },
  { no: 3, name: "SUBAGENT_RUN_STATUS_SUCCESS" },
  { no: 4, name: "SUBAGENT_RUN_STATUS_ERROR" },
  { no: 5, name: "SUBAGENT_RUN_STATUS_ABORTED" }
]);
(function(CustomModeSource2) {
  CustomModeSource2[CustomModeSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  CustomModeSource2[CustomModeSource2["AGENT_SKILL"] = 1] = "AGENT_SKILL";
  CustomModeSource2[CustomModeSource2["PLUGIN_SKILL"] = 2] = "PLUGIN_SKILL";
  CustomModeSource2[CustomModeSource2["REPO_SKILL"] = 3] = "REPO_SKILL";
  CustomModeSource2[CustomModeSource2["MANAGED_SKILL"] = 4] = "MANAGED_SKILL";
})(CustomModeSource! || (CustomModeSource = {} as typeof CustomModeSource));
proto3.util.setEnumType(CustomModeSource, "agent.v1.CustomModeSource", [
  { no: 0, name: "CUSTOM_MODE_SOURCE_UNSPECIFIED" },
  { no: 1, name: "CUSTOM_MODE_SOURCE_AGENT_SKILL" },
  { no: 2, name: "CUSTOM_MODE_SOURCE_PLUGIN_SKILL" },
  { no: 3, name: "CUSTOM_MODE_SOURCE_REPO_SKILL" },
  { no: 4, name: "CUSTOM_MODE_SOURCE_MANAGED_SKILL" }
]);
(function(SimulatedMsgReason2) {
  SimulatedMsgReason2[SimulatedMsgReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SimulatedMsgReason2[SimulatedMsgReason2["PLAN_EXECUTION"] = 1] = "PLAN_EXECUTION";
  SimulatedMsgReason2[SimulatedMsgReason2["COMMIT_REMINDER"] = 2] = "COMMIT_REMINDER";
  SimulatedMsgReason2[SimulatedMsgReason2["BACKGROUND_TASK_COMPLETION"] = 3] = "BACKGROUND_TASK_COMPLETION";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_COMMIT"] = 4] = "DIFF_TAB_COMMIT";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_COMMIT_AND_PUSH"] = 5] = "DIFF_TAB_COMMIT_AND_PUSH";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_PUSH"] = 6] = "DIFF_TAB_PUSH";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_CREATE_PR"] = 7] = "DIFF_TAB_CREATE_PR";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_FIX_MERGE_CONFLICTS"] = 8] = "DIFF_TAB_FIX_MERGE_CONFLICTS";
  SimulatedMsgReason2[SimulatedMsgReason2["USER_SENT_TO_SUBAGENT"] = 9] = "USER_SENT_TO_SUBAGENT";
  SimulatedMsgReason2[SimulatedMsgReason2["USER_INTERRUPTED_SUBAGENT"] = 10] = "USER_INTERRUPTED_SUBAGENT";
  SimulatedMsgReason2[SimulatedMsgReason2["USER_QUEUED_TO_SUBAGENT"] = 11] = "USER_QUEUED_TO_SUBAGENT";
  SimulatedMsgReason2[SimulatedMsgReason2["BABYSIT_PR_IN_CLOUD"] = 12] = "BABYSIT_PR_IN_CLOUD";
  SimulatedMsgReason2[SimulatedMsgReason2["CI_PANEL_INVESTIGATE_FAILURE"] = 13] = "CI_PANEL_INVESTIGATE_FAILURE";
  SimulatedMsgReason2[SimulatedMsgReason2["MULTITASK"] = 14] = "MULTITASK";
  SimulatedMsgReason2[SimulatedMsgReason2["BUILD_IN_PARALLEL"] = 15] = "BUILD_IN_PARALLEL";
  SimulatedMsgReason2[SimulatedMsgReason2["MULTITASK_SPLIT_PRS"] = 16] = "MULTITASK_SPLIT_PRS";
  SimulatedMsgReason2[SimulatedMsgReason2["APPLY_LOCALLY"] = 17] = "APPLY_LOCALLY";
  SimulatedMsgReason2[SimulatedMsgReason2["CHECKOUT_BRANCH"] = 18] = "CHECKOUT_BRANCH";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_UPDATE_BRANCH"] = 19] = "DIFF_TAB_UPDATE_BRANCH";
  SimulatedMsgReason2[SimulatedMsgReason2["PR_TAB_BUGBOT_FIX"] = 20] = "PR_TAB_BUGBOT_FIX";
  SimulatedMsgReason2[SimulatedMsgReason2["RUN_BUGBOT_REVIEW"] = 22] = "RUN_BUGBOT_REVIEW";
  SimulatedMsgReason2[SimulatedMsgReason2["RUN_SECURITY_REVIEW"] = 23] = "RUN_SECURITY_REVIEW";
  SimulatedMsgReason2[SimulatedMsgReason2["FSD_APPLY_FINDING"] = 24] = "FSD_APPLY_FINDING";
  SimulatedMsgReason2[SimulatedMsgReason2["FSD_UNDO_FINDING"] = 25] = "FSD_UNDO_FINDING";
  SimulatedMsgReason2[SimulatedMsgReason2["FSD_START"] = 26] = "FSD_START";
  SimulatedMsgReason2[SimulatedMsgReason2["FSD_PR_INTERRUPT"] = 27] = "FSD_PR_INTERRUPT";
  SimulatedMsgReason2[SimulatedMsgReason2["SUBSCRIPTION"] = 28] = "SUBSCRIPTION";
  SimulatedMsgReason2[SimulatedMsgReason2["DIFF_TAB_CREATE_BRANCH"] = 29] = "DIFF_TAB_CREATE_BRANCH";
  SimulatedMsgReason2[SimulatedMsgReason2["AGENT_STORE_CONFLICT"] = 30] = "AGENT_STORE_CONFLICT";
  SimulatedMsgReason2[SimulatedMsgReason2["GOAL_CONTINUATION"] = 31] = "GOAL_CONTINUATION";
  SimulatedMsgReason2[SimulatedMsgReason2["PROJECT_KICKOFF"] = 32] = "PROJECT_KICKOFF";
})(SimulatedMsgReason! || (SimulatedMsgReason = {} as typeof SimulatedMsgReason));
proto3.util.setEnumType(SimulatedMsgReason, "agent.v1.SimulatedMsgReason", [
  { no: 0, name: "SIMULATED_MSG_REASON_UNSPECIFIED" },
  { no: 1, name: "SIMULATED_MSG_REASON_PLAN_EXECUTION" },
  { no: 2, name: "SIMULATED_MSG_REASON_COMMIT_REMINDER" },
  { no: 3, name: "SIMULATED_MSG_REASON_BACKGROUND_TASK_COMPLETION" },
  { no: 4, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT" },
  { no: 5, name: "SIMULATED_MSG_REASON_DIFF_TAB_COMMIT_AND_PUSH" },
  { no: 6, name: "SIMULATED_MSG_REASON_DIFF_TAB_PUSH" },
  { no: 7, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_PR" },
  { no: 8, name: "SIMULATED_MSG_REASON_DIFF_TAB_FIX_MERGE_CONFLICTS" },
  { no: 9, name: "SIMULATED_MSG_REASON_USER_SENT_TO_SUBAGENT" },
  { no: 10, name: "SIMULATED_MSG_REASON_USER_INTERRUPTED_SUBAGENT" },
  { no: 11, name: "SIMULATED_MSG_REASON_USER_QUEUED_TO_SUBAGENT" },
  { no: 12, name: "SIMULATED_MSG_REASON_BABYSIT_PR_IN_CLOUD" },
  { no: 13, name: "SIMULATED_MSG_REASON_CI_PANEL_INVESTIGATE_FAILURE" },
  { no: 14, name: "SIMULATED_MSG_REASON_MULTITASK" },
  { no: 15, name: "SIMULATED_MSG_REASON_BUILD_IN_PARALLEL" },
  { no: 16, name: "SIMULATED_MSG_REASON_MULTITASK_SPLIT_PRS" },
  { no: 17, name: "SIMULATED_MSG_REASON_APPLY_LOCALLY" },
  { no: 18, name: "SIMULATED_MSG_REASON_CHECKOUT_BRANCH" },
  { no: 19, name: "SIMULATED_MSG_REASON_DIFF_TAB_UPDATE_BRANCH" },
  { no: 20, name: "SIMULATED_MSG_REASON_PR_TAB_BUGBOT_FIX" },
  { no: 22, name: "SIMULATED_MSG_REASON_RUN_BUGBOT_REVIEW" },
  { no: 23, name: "SIMULATED_MSG_REASON_RUN_SECURITY_REVIEW" },
  { no: 24, name: "SIMULATED_MSG_REASON_FSD_APPLY_FINDING" },
  { no: 25, name: "SIMULATED_MSG_REASON_FSD_UNDO_FINDING" },
  { no: 26, name: "SIMULATED_MSG_REASON_FSD_START" },
  { no: 27, name: "SIMULATED_MSG_REASON_FSD_PR_INTERRUPT" },
  { no: 28, name: "SIMULATED_MSG_REASON_SUBSCRIPTION" },
  { no: 29, name: "SIMULATED_MSG_REASON_DIFF_TAB_CREATE_BRANCH" },
  { no: 30, name: "SIMULATED_MSG_REASON_AGENT_STORE_CONFLICT" },
  { no: 31, name: "SIMULATED_MSG_REASON_GOAL_CONTINUATION" },
  { no: 32, name: "SIMULATED_MSG_REASON_PROJECT_KICKOFF" }
]);
(function(SubscriptionSource2) {
  SubscriptionSource2[SubscriptionSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SubscriptionSource2[SubscriptionSource2["SLACK"] = 1] = "SLACK";
  SubscriptionSource2[SubscriptionSource2["GITHUB"] = 2] = "GITHUB";
  SubscriptionSource2[SubscriptionSource2["LINEAR"] = 3] = "LINEAR";
  SubscriptionSource2[SubscriptionSource2["ORIGIN"] = 4] = "ORIGIN";
})(SubscriptionSource! || (SubscriptionSource = {} as typeof SubscriptionSource));
proto3.util.setEnumType(SubscriptionSource, "agent.v1.SubscriptionSource", [
  { no: 0, name: "SUBSCRIPTION_SOURCE_UNSPECIFIED" },
  { no: 1, name: "SUBSCRIPTION_SOURCE_SLACK" },
  { no: 2, name: "SUBSCRIPTION_SOURCE_GITHUB" },
  { no: 3, name: "SUBSCRIPTION_SOURCE_LINEAR" },
  { no: 4, name: "SUBSCRIPTION_SOURCE_ORIGIN" }
]);
(function(ThinkingStyle2) {
  ThinkingStyle2[ThinkingStyle2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ThinkingStyle2[ThinkingStyle2["DEFAULT"] = 1] = "DEFAULT";
  ThinkingStyle2[ThinkingStyle2["CODEX"] = 2] = "CODEX";
  ThinkingStyle2[ThinkingStyle2["GPT5"] = 3] = "GPT5";
})(ThinkingStyle! || (ThinkingStyle = {} as typeof ThinkingStyle));
proto3.util.setEnumType(ThinkingStyle, "agent.v1.ThinkingStyle", [
  { no: 0, name: "THINKING_STYLE_UNSPECIFIED" },
  { no: 1, name: "THINKING_STYLE_DEFAULT" },
  { no: 2, name: "THINKING_STYLE_CODEX" },
  { no: 3, name: "THINKING_STYLE_GPT5" }
]);
(function(ResponseComparisonDisplayOrder2) {
  ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["PARENT_FIRST"] = 1] = "PARENT_FIRST";
  ResponseComparisonDisplayOrder2[ResponseComparisonDisplayOrder2["ALTERNATE_FIRST"] = 2] = "ALTERNATE_FIRST";
})(ResponseComparisonDisplayOrder! || (ResponseComparisonDisplayOrder = {} as typeof ResponseComparisonDisplayOrder));
proto3.util.setEnumType(ResponseComparisonDisplayOrder, "agent.v1.ResponseComparisonDisplayOrder", [
  { no: 0, name: "RESPONSE_COMPARISON_DISPLAY_ORDER_UNSPECIFIED" },
  { no: 1, name: "RESPONSE_COMPARISON_DISPLAY_ORDER_PARENT_FIRST" },
  { no: 2, name: "RESPONSE_COMPARISON_DISPLAY_ORDER_ALTERNATE_FIRST" }
]);
(function(ResponseComparisonSkipReason2) {
  ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["ALTERNATE_TOOL_CALL"] = 1] = "ALTERNATE_TOOL_CALL";
  ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["INFERENCE_ERROR"] = 2] = "INFERENCE_ERROR";
  ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["TIMEOUT"] = 3] = "TIMEOUT";
  ResponseComparisonSkipReason2[ResponseComparisonSkipReason2["CANCELLED"] = 4] = "CANCELLED";
})(ResponseComparisonSkipReason! || (ResponseComparisonSkipReason = {} as typeof ResponseComparisonSkipReason));
proto3.util.setEnumType(ResponseComparisonSkipReason, "agent.v1.ResponseComparisonSkipReason", [
  { no: 0, name: "RESPONSE_COMPARISON_SKIP_REASON_UNSPECIFIED" },
  { no: 1, name: "RESPONSE_COMPARISON_SKIP_REASON_ALTERNATE_TOOL_CALL" },
  { no: 2, name: "RESPONSE_COMPARISON_SKIP_REASON_INFERENCE_ERROR" },
  { no: 3, name: "RESPONSE_COMPARISON_SKIP_REASON_TIMEOUT" },
  { no: 4, name: "RESPONSE_COMPARISON_SKIP_REASON_CANCELLED" }
]);
var TaskArgs$Runtime = (() => class _TaskArgs extends Message<_TaskArgs> {
  declare description: string;
  declare prompt: string;
  declare subagentType?: SubagentType;
  declare model?: string;
  declare resume?: string;
  declare agentId?: string;
  declare attachments: string[];
  declare mode: TaskMode;
  declare respondingToMessageIds: string[];
  declare environment: SubagentExecutionEnvironment;
  declare machine?: TargetMachine;
  constructor(data?: PartialMessage<_TaskArgs>) {
    super();
    this.description = "";
    this.prompt = "";
    this.attachments = [];
    this.mode = TaskMode.UNSPECIFIED;
    this.respondingToMessageIds = [];
    this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
    proto3.util.initPartial(data, this as _TaskArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskArgs {
    return new _TaskArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskArgs {
    return new _TaskArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskArgs {
    return new _TaskArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskArgs | PlainMessage<_TaskArgs> | undefined | null, b2: _TaskArgs | PlainMessage<_TaskArgs> | undefined | null): boolean {
    return proto3.util.equals(_TaskArgs as unknown as MessageType<_TaskArgs>, a, b2);
  }
})();
export type TaskArgs = InstanceType<typeof TaskArgs$Runtime>;
var TaskArgs: MessageType<TaskArgs> = TaskArgs$Runtime as unknown as MessageType<TaskArgs>;
(TaskArgs as MutableMessageType<TaskArgs>).runtime = proto3;
(TaskArgs as MutableMessageType<TaskArgs>).typeName = "agent.v1.TaskArgs";
(TaskArgs as MutableMessageType<TaskArgs>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "subagent_type", kind: "message", T: SubagentType },
  { no: 4, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "resume", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "agent_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "attachments", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "mode", kind: "enum", T: proto3.getEnumType(TaskMode) },
  { no: 9, name: "responding_to_message_ids", kind: "scalar", T: 9, repeated: true },
  { no: 10, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) },
  { no: 11, name: "machine", kind: "message", T: TargetMachine, opt: true }
]);
var TargetMachine$Runtime = (() => class _TargetMachine extends Message<_TargetMachine> {
  declare machine: { case: "sameMachine"; value: SameMachineTarget } | { case: "newCloudVm"; value: NewCloudVmTarget } | { case: "selfHostedWorker"; value: SelfHostedWorkerTarget } | { case: "selfHostedPool"; value: SelfHostedPoolTarget } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TargetMachine>) {
    super();
    this.machine = { case: void 0 };
    proto3.util.initPartial(data, this as _TargetMachine);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TargetMachine {
    return new _TargetMachine().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TargetMachine {
    return new _TargetMachine().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TargetMachine {
    return new _TargetMachine().fromJsonString(jsonString, options);
  }
  static equals(a: _TargetMachine | PlainMessage<_TargetMachine> | undefined | null, b2: _TargetMachine | PlainMessage<_TargetMachine> | undefined | null): boolean {
    return proto3.util.equals(_TargetMachine as unknown as MessageType<_TargetMachine>, a, b2);
  }
})();
export type TargetMachine = InstanceType<typeof TargetMachine$Runtime>;
var TargetMachine: MessageType<TargetMachine> = TargetMachine$Runtime as unknown as MessageType<TargetMachine>;
(TargetMachine as MutableMessageType<TargetMachine>).runtime = proto3;
(TargetMachine as MutableMessageType<TargetMachine>).typeName = "agent.v1.TargetMachine";
(TargetMachine as MutableMessageType<TargetMachine>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "same_machine", kind: "message", T: SameMachineTarget, oneof: "machine" },
  { no: 2, name: "new_cloud_vm", kind: "message", T: NewCloudVmTarget, oneof: "machine" },
  { no: 3, name: "self_hosted_worker", kind: "message", T: SelfHostedWorkerTarget, oneof: "machine" },
  { no: 4, name: "self_hosted_pool", kind: "message", T: SelfHostedPoolTarget, oneof: "machine" }
]);
var SameMachineTarget$Runtime = (() => class _SameMachineTarget extends Message<_SameMachineTarget> {
  constructor(data?: PartialMessage<_SameMachineTarget>) {
    super();
    proto3.util.initPartial(data, this as _SameMachineTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SameMachineTarget {
    return new _SameMachineTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SameMachineTarget {
    return new _SameMachineTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SameMachineTarget {
    return new _SameMachineTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _SameMachineTarget | PlainMessage<_SameMachineTarget> | undefined | null, b2: _SameMachineTarget | PlainMessage<_SameMachineTarget> | undefined | null): boolean {
    return proto3.util.equals(_SameMachineTarget as unknown as MessageType<_SameMachineTarget>, a, b2);
  }
})();
export type SameMachineTarget = InstanceType<typeof SameMachineTarget$Runtime>;
var SameMachineTarget: MessageType<SameMachineTarget> = SameMachineTarget$Runtime as unknown as MessageType<SameMachineTarget>;
(SameMachineTarget as MutableMessageType<SameMachineTarget>).runtime = proto3;
(SameMachineTarget as MutableMessageType<SameMachineTarget>).typeName = "agent.v1.SameMachineTarget";
(SameMachineTarget as MutableMessageType<SameMachineTarget>).fields = proto3.util.newFieldList(() => []);
var NewCloudVmTarget$Runtime = (() => class _NewCloudVmTarget extends Message<_NewCloudVmTarget> {
  declare environmentBuildId?: string;
  declare baseBranch?: string;
  constructor(data?: PartialMessage<_NewCloudVmTarget>) {
    super();
    proto3.util.initPartial(data, this as _NewCloudVmTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _NewCloudVmTarget {
    return new _NewCloudVmTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _NewCloudVmTarget {
    return new _NewCloudVmTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _NewCloudVmTarget {
    return new _NewCloudVmTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _NewCloudVmTarget | PlainMessage<_NewCloudVmTarget> | undefined | null, b2: _NewCloudVmTarget | PlainMessage<_NewCloudVmTarget> | undefined | null): boolean {
    return proto3.util.equals(_NewCloudVmTarget as unknown as MessageType<_NewCloudVmTarget>, a, b2);
  }
})();
export type NewCloudVmTarget = InstanceType<typeof NewCloudVmTarget$Runtime>;
var NewCloudVmTarget: MessageType<NewCloudVmTarget> = NewCloudVmTarget$Runtime as unknown as MessageType<NewCloudVmTarget>;
(NewCloudVmTarget as MutableMessageType<NewCloudVmTarget>).runtime = proto3;
(NewCloudVmTarget as MutableMessageType<NewCloudVmTarget>).typeName = "agent.v1.NewCloudVmTarget";
(NewCloudVmTarget as MutableMessageType<NewCloudVmTarget>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "environment_build_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "base_branch", kind: "scalar", T: 9, opt: true }
]);
var SelfHostedWorkerTarget$Runtime = (() => class _SelfHostedWorkerTarget extends Message<_SelfHostedWorkerTarget> {
  declare workerId: string;
  constructor(data?: PartialMessage<_SelfHostedWorkerTarget>) {
    super();
    this.workerId = "";
    proto3.util.initPartial(data, this as _SelfHostedWorkerTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelfHostedWorkerTarget {
    return new _SelfHostedWorkerTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelfHostedWorkerTarget {
    return new _SelfHostedWorkerTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelfHostedWorkerTarget {
    return new _SelfHostedWorkerTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _SelfHostedWorkerTarget | PlainMessage<_SelfHostedWorkerTarget> | undefined | null, b2: _SelfHostedWorkerTarget | PlainMessage<_SelfHostedWorkerTarget> | undefined | null): boolean {
    return proto3.util.equals(_SelfHostedWorkerTarget as unknown as MessageType<_SelfHostedWorkerTarget>, a, b2);
  }
})();
export type SelfHostedWorkerTarget = InstanceType<typeof SelfHostedWorkerTarget$Runtime>;
var SelfHostedWorkerTarget: MessageType<SelfHostedWorkerTarget> = SelfHostedWorkerTarget$Runtime as unknown as MessageType<SelfHostedWorkerTarget>;
(SelfHostedWorkerTarget as MutableMessageType<SelfHostedWorkerTarget>).runtime = proto3;
(SelfHostedWorkerTarget as MutableMessageType<SelfHostedWorkerTarget>).typeName = "agent.v1.SelfHostedWorkerTarget";
(SelfHostedWorkerTarget as MutableMessageType<SelfHostedWorkerTarget>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "worker_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SelfHostedPoolTarget$Runtime = (() => class _SelfHostedPoolTarget extends Message<_SelfHostedPoolTarget> {
  declare pool?: string;
  declare labels: SelfHostedWorkerLabel[];
  constructor(data?: PartialMessage<_SelfHostedPoolTarget>) {
    super();
    this.labels = [];
    proto3.util.initPartial(data, this as _SelfHostedPoolTarget);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelfHostedPoolTarget {
    return new _SelfHostedPoolTarget().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelfHostedPoolTarget {
    return new _SelfHostedPoolTarget().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelfHostedPoolTarget {
    return new _SelfHostedPoolTarget().fromJsonString(jsonString, options);
  }
  static equals(a: _SelfHostedPoolTarget | PlainMessage<_SelfHostedPoolTarget> | undefined | null, b2: _SelfHostedPoolTarget | PlainMessage<_SelfHostedPoolTarget> | undefined | null): boolean {
    return proto3.util.equals(_SelfHostedPoolTarget as unknown as MessageType<_SelfHostedPoolTarget>, a, b2);
  }
})();
export type SelfHostedPoolTarget = InstanceType<typeof SelfHostedPoolTarget$Runtime>;
var SelfHostedPoolTarget: MessageType<SelfHostedPoolTarget> = SelfHostedPoolTarget$Runtime as unknown as MessageType<SelfHostedPoolTarget>;
(SelfHostedPoolTarget as MutableMessageType<SelfHostedPoolTarget>).runtime = proto3;
(SelfHostedPoolTarget as MutableMessageType<SelfHostedPoolTarget>).typeName = "agent.v1.SelfHostedPoolTarget";
(SelfHostedPoolTarget as MutableMessageType<SelfHostedPoolTarget>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pool", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "labels", kind: "message", T: SelfHostedWorkerLabel, repeated: true }
]);
var SelfHostedWorkerLabel$Runtime = (() => class _SelfHostedWorkerLabel extends Message<_SelfHostedWorkerLabel> {
  declare key: string;
  declare value: string;
  constructor(data?: PartialMessage<_SelfHostedWorkerLabel>) {
    super();
    this.key = "";
    this.value = "";
    proto3.util.initPartial(data, this as _SelfHostedWorkerLabel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SelfHostedWorkerLabel {
    return new _SelfHostedWorkerLabel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SelfHostedWorkerLabel {
    return new _SelfHostedWorkerLabel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SelfHostedWorkerLabel {
    return new _SelfHostedWorkerLabel().fromJsonString(jsonString, options);
  }
  static equals(a: _SelfHostedWorkerLabel | PlainMessage<_SelfHostedWorkerLabel> | undefined | null, b2: _SelfHostedWorkerLabel | PlainMessage<_SelfHostedWorkerLabel> | undefined | null): boolean {
    return proto3.util.equals(_SelfHostedWorkerLabel as unknown as MessageType<_SelfHostedWorkerLabel>, a, b2);
  }
})();
export type SelfHostedWorkerLabel = InstanceType<typeof SelfHostedWorkerLabel$Runtime>;
var SelfHostedWorkerLabel: MessageType<SelfHostedWorkerLabel> = SelfHostedWorkerLabel$Runtime as unknown as MessageType<SelfHostedWorkerLabel>;
(SelfHostedWorkerLabel as MutableMessageType<SelfHostedWorkerLabel>).runtime = proto3;
(SelfHostedWorkerLabel as MutableMessageType<SelfHostedWorkerLabel>).typeName = "agent.v1.SelfHostedWorkerLabel";
(SelfHostedWorkerLabel as MutableMessageType<SelfHostedWorkerLabel>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
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
var TaskSuccess$Runtime = (() => class _TaskSuccess extends Message<_TaskSuccess> {
  declare conversationSteps: ConversationStep[];
  declare agentId?: string;
  declare isBackground: boolean;
  declare durationMs?: bigint;
  declare resultSuffix?: string;
  declare backgroundReason: SubagentBackgroundReason;
  declare transcriptPath?: string;
  constructor(data?: PartialMessage<_TaskSuccess>) {
    super();
    this.conversationSteps = [];
    this.isBackground = false;
    this.backgroundReason = SubagentBackgroundReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _TaskSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskSuccess {
    return new _TaskSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskSuccess {
    return new _TaskSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskSuccess {
    return new _TaskSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskSuccess | PlainMessage<_TaskSuccess> | undefined | null, b2: _TaskSuccess | PlainMessage<_TaskSuccess> | undefined | null): boolean {
    return proto3.util.equals(_TaskSuccess as unknown as MessageType<_TaskSuccess>, a, b2);
  }
})();
export type TaskSuccess = InstanceType<typeof TaskSuccess$Runtime>;
var TaskSuccess: MessageType<TaskSuccess> = TaskSuccess$Runtime as unknown as MessageType<TaskSuccess>;
(TaskSuccess as MutableMessageType<TaskSuccess>).runtime = proto3;
(TaskSuccess as MutableMessageType<TaskSuccess>).typeName = "agent.v1.TaskSuccess";
(TaskSuccess as MutableMessageType<TaskSuccess>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "conversation_steps", kind: "message", T: ConversationStep, repeated: true },
  { no: 2, name: "agent_id", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "is_background",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "duration_ms", kind: "scalar", T: 4, opt: true },
  { no: 5, name: "result_suffix", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "background_reason", kind: "enum", T: proto3.getEnumType(SubagentBackgroundReason) },
  { no: 7, name: "transcript_path", kind: "scalar", T: 9, opt: true }
]);
var TaskError$Runtime = (() => class _TaskError extends Message<_TaskError> {
  declare error: string;
  constructor(data?: PartialMessage<_TaskError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _TaskError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskError {
    return new _TaskError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskError {
    return new _TaskError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskError {
    return new _TaskError().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskError | PlainMessage<_TaskError> | undefined | null, b2: _TaskError | PlainMessage<_TaskError> | undefined | null): boolean {
    return proto3.util.equals(_TaskError as unknown as MessageType<_TaskError>, a, b2);
  }
})();
export type TaskError = InstanceType<typeof TaskError$Runtime>;
var TaskError: MessageType<TaskError> = TaskError$Runtime as unknown as MessageType<TaskError>;
(TaskError as MutableMessageType<TaskError>).runtime = proto3;
(TaskError as MutableMessageType<TaskError>).typeName = "agent.v1.TaskError";
(TaskError as MutableMessageType<TaskError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TaskResult$Runtime = (() => class _TaskResult extends Message<_TaskResult> {
  declare result: { case: "success"; value: TaskSuccess } | { case: "error"; value: TaskError } | { case: undefined; value?: undefined };
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
export type TaskResult = InstanceType<typeof TaskResult$Runtime>;
var TaskResult: MessageType<TaskResult> = TaskResult$Runtime as unknown as MessageType<TaskResult>;
(TaskResult as MutableMessageType<TaskResult>).runtime = proto3;
(TaskResult as MutableMessageType<TaskResult>).typeName = "agent.v1.TaskResult";
(TaskResult as MutableMessageType<TaskResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: TaskSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: TaskError, oneof: "result" }
]);
var TaskToolCall$Runtime = (() => class _TaskToolCall extends Message<_TaskToolCall> {
  declare args?: TaskArgs;
  declare result?: TaskResult;
  declare cloudAgentBcId?: string;
  constructor(data?: PartialMessage<_TaskToolCall>) {
    super();
    proto3.util.initPartial(data, this as _TaskToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskToolCall {
    return new _TaskToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskToolCall {
    return new _TaskToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskToolCall {
    return new _TaskToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskToolCall | PlainMessage<_TaskToolCall> | undefined | null, b2: _TaskToolCall | PlainMessage<_TaskToolCall> | undefined | null): boolean {
    return proto3.util.equals(_TaskToolCall as unknown as MessageType<_TaskToolCall>, a, b2);
  }
})();
export type TaskToolCall = InstanceType<typeof TaskToolCall$Runtime>;
var TaskToolCall: MessageType<TaskToolCall> = TaskToolCall$Runtime as unknown as MessageType<TaskToolCall>;
(TaskToolCall as MutableMessageType<TaskToolCall>).runtime = proto3;
(TaskToolCall as MutableMessageType<TaskToolCall>).typeName = "agent.v1.TaskToolCall";
(TaskToolCall as MutableMessageType<TaskToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: TaskArgs },
  { no: 2, name: "result", kind: "message", T: TaskResult },
  { no: 3, name: "cloud_agent_bc_id", kind: "scalar", T: 9, opt: true }
]);
var TaskToolCallDelta$Runtime = (() => class _TaskToolCallDelta extends Message<_TaskToolCallDelta> {
  declare interactionUpdate?: InteractionUpdate;
  constructor(data?: PartialMessage<_TaskToolCallDelta>) {
    super();
    proto3.util.initPartial(data, this as _TaskToolCallDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskToolCallDelta {
    return new _TaskToolCallDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskToolCallDelta {
    return new _TaskToolCallDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskToolCallDelta {
    return new _TaskToolCallDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskToolCallDelta | PlainMessage<_TaskToolCallDelta> | undefined | null, b2: _TaskToolCallDelta | PlainMessage<_TaskToolCallDelta> | undefined | null): boolean {
    return proto3.util.equals(_TaskToolCallDelta as unknown as MessageType<_TaskToolCallDelta>, a, b2);
  }
})();
export type TaskToolCallDelta = InstanceType<typeof TaskToolCallDelta$Runtime>;
var TaskToolCallDelta: MessageType<TaskToolCallDelta> = TaskToolCallDelta$Runtime as unknown as MessageType<TaskToolCallDelta>;
(TaskToolCallDelta as MutableMessageType<TaskToolCallDelta>).runtime = proto3;
(TaskToolCallDelta as MutableMessageType<TaskToolCallDelta>).typeName = "agent.v1.TaskToolCallDelta";
(TaskToolCallDelta as MutableMessageType<TaskToolCallDelta>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "interaction_update", kind: "message", T: InteractionUpdate }
]);
var SetActiveBranchArgs$Runtime = (() => class _SetActiveBranchArgs extends Message<_SetActiveBranchArgs> {
  declare path: string;
  declare branchName: string;
  constructor(data?: PartialMessage<_SetActiveBranchArgs>) {
    super();
    this.path = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _SetActiveBranchArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetActiveBranchArgs {
    return new _SetActiveBranchArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetActiveBranchArgs {
    return new _SetActiveBranchArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetActiveBranchArgs {
    return new _SetActiveBranchArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _SetActiveBranchArgs | PlainMessage<_SetActiveBranchArgs> | undefined | null, b2: _SetActiveBranchArgs | PlainMessage<_SetActiveBranchArgs> | undefined | null): boolean {
    return proto3.util.equals(_SetActiveBranchArgs as unknown as MessageType<_SetActiveBranchArgs>, a, b2);
  }
})();
export type SetActiveBranchArgs = InstanceType<typeof SetActiveBranchArgs$Runtime>;
var SetActiveBranchArgs: MessageType<SetActiveBranchArgs> = SetActiveBranchArgs$Runtime as unknown as MessageType<SetActiveBranchArgs>;
(SetActiveBranchArgs as MutableMessageType<SetActiveBranchArgs>).runtime = proto3;
(SetActiveBranchArgs as MutableMessageType<SetActiveBranchArgs>).typeName = "agent.v1.SetActiveBranchArgs";
(SetActiveBranchArgs as MutableMessageType<SetActiveBranchArgs>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SetActiveBranchSuccess$Runtime = (() => class _SetActiveBranchSuccess extends Message<_SetActiveBranchSuccess> {
  constructor(data?: PartialMessage<_SetActiveBranchSuccess>) {
    super();
    proto3.util.initPartial(data, this as _SetActiveBranchSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetActiveBranchSuccess {
    return new _SetActiveBranchSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetActiveBranchSuccess {
    return new _SetActiveBranchSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetActiveBranchSuccess {
    return new _SetActiveBranchSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _SetActiveBranchSuccess | PlainMessage<_SetActiveBranchSuccess> | undefined | null, b2: _SetActiveBranchSuccess | PlainMessage<_SetActiveBranchSuccess> | undefined | null): boolean {
    return proto3.util.equals(_SetActiveBranchSuccess as unknown as MessageType<_SetActiveBranchSuccess>, a, b2);
  }
})();
export type SetActiveBranchSuccess = InstanceType<typeof SetActiveBranchSuccess$Runtime>;
var SetActiveBranchSuccess: MessageType<SetActiveBranchSuccess> = SetActiveBranchSuccess$Runtime as unknown as MessageType<SetActiveBranchSuccess>;
(SetActiveBranchSuccess as MutableMessageType<SetActiveBranchSuccess>).runtime = proto3;
(SetActiveBranchSuccess as MutableMessageType<SetActiveBranchSuccess>).typeName = "agent.v1.SetActiveBranchSuccess";
(SetActiveBranchSuccess as MutableMessageType<SetActiveBranchSuccess>).fields = proto3.util.newFieldList(() => []);
var SetActiveBranchError$Runtime = (() => class _SetActiveBranchError extends Message<_SetActiveBranchError> {
  declare error: string;
  constructor(data?: PartialMessage<_SetActiveBranchError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _SetActiveBranchError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetActiveBranchError {
    return new _SetActiveBranchError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetActiveBranchError {
    return new _SetActiveBranchError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetActiveBranchError {
    return new _SetActiveBranchError().fromJsonString(jsonString, options);
  }
  static equals(a: _SetActiveBranchError | PlainMessage<_SetActiveBranchError> | undefined | null, b2: _SetActiveBranchError | PlainMessage<_SetActiveBranchError> | undefined | null): boolean {
    return proto3.util.equals(_SetActiveBranchError as unknown as MessageType<_SetActiveBranchError>, a, b2);
  }
})();
export type SetActiveBranchError = InstanceType<typeof SetActiveBranchError$Runtime>;
var SetActiveBranchError: MessageType<SetActiveBranchError> = SetActiveBranchError$Runtime as unknown as MessageType<SetActiveBranchError>;
(SetActiveBranchError as MutableMessageType<SetActiveBranchError>).runtime = proto3;
(SetActiveBranchError as MutableMessageType<SetActiveBranchError>).typeName = "agent.v1.SetActiveBranchError";
(SetActiveBranchError as MutableMessageType<SetActiveBranchError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SetActiveBranchResult$Runtime = (() => class _SetActiveBranchResult extends Message<_SetActiveBranchResult> {
  declare result: { case: "success"; value: SetActiveBranchSuccess } | { case: "error"; value: SetActiveBranchError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SetActiveBranchResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _SetActiveBranchResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetActiveBranchResult {
    return new _SetActiveBranchResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetActiveBranchResult {
    return new _SetActiveBranchResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetActiveBranchResult {
    return new _SetActiveBranchResult().fromJsonString(jsonString, options);
  }
  static equals(a: _SetActiveBranchResult | PlainMessage<_SetActiveBranchResult> | undefined | null, b2: _SetActiveBranchResult | PlainMessage<_SetActiveBranchResult> | undefined | null): boolean {
    return proto3.util.equals(_SetActiveBranchResult as unknown as MessageType<_SetActiveBranchResult>, a, b2);
  }
})();
export type SetActiveBranchResult = InstanceType<typeof SetActiveBranchResult$Runtime>;
var SetActiveBranchResult: MessageType<SetActiveBranchResult> = SetActiveBranchResult$Runtime as unknown as MessageType<SetActiveBranchResult>;
(SetActiveBranchResult as MutableMessageType<SetActiveBranchResult>).runtime = proto3;
(SetActiveBranchResult as MutableMessageType<SetActiveBranchResult>).typeName = "agent.v1.SetActiveBranchResult";
(SetActiveBranchResult as MutableMessageType<SetActiveBranchResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: SetActiveBranchSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: SetActiveBranchError, oneof: "result" }
]);
var SetActiveBranchToolCall$Runtime = (() => class _SetActiveBranchToolCall extends Message<_SetActiveBranchToolCall> {
  declare args?: SetActiveBranchArgs;
  declare result?: SetActiveBranchResult;
  constructor(data?: PartialMessage<_SetActiveBranchToolCall>) {
    super();
    proto3.util.initPartial(data, this as _SetActiveBranchToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SetActiveBranchToolCall {
    return new _SetActiveBranchToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SetActiveBranchToolCall {
    return new _SetActiveBranchToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SetActiveBranchToolCall {
    return new _SetActiveBranchToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _SetActiveBranchToolCall | PlainMessage<_SetActiveBranchToolCall> | undefined | null, b2: _SetActiveBranchToolCall | PlainMessage<_SetActiveBranchToolCall> | undefined | null): boolean {
    return proto3.util.equals(_SetActiveBranchToolCall as unknown as MessageType<_SetActiveBranchToolCall>, a, b2);
  }
})();
export type SetActiveBranchToolCall = InstanceType<typeof SetActiveBranchToolCall$Runtime>;
var SetActiveBranchToolCall: MessageType<SetActiveBranchToolCall> = SetActiveBranchToolCall$Runtime as unknown as MessageType<SetActiveBranchToolCall>;
(SetActiveBranchToolCall as MutableMessageType<SetActiveBranchToolCall>).runtime = proto3;
(SetActiveBranchToolCall as MutableMessageType<SetActiveBranchToolCall>).typeName = "agent.v1.SetActiveBranchToolCall";
(SetActiveBranchToolCall as MutableMessageType<SetActiveBranchToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: SetActiveBranchArgs },
  { no: 2, name: "result", kind: "message", T: SetActiveBranchResult }
]);
var ToolCall$Runtime = (() => class _ToolCall extends Message<_ToolCall> {
  declare hookAdditionalContexts: HookAdditionalContext[];
  declare toolCallId?: string;
  declare startedAtMs?: bigint;
  declare completedAtMs?: bigint;
  declare tool: { case: "shellToolCall"; value: ShellToolCall } | { case: "deleteToolCall"; value: DeleteToolCall } | { case: "globToolCall"; value: GlobToolCall } | { case: "grepToolCall"; value: GrepToolCall } | { case: "readToolCall"; value: ReadToolCall } | { case: "updateTodosToolCall"; value: UpdateTodosToolCall } | { case: "readTodosToolCall"; value: ReadTodosToolCall } | { case: "editToolCall"; value: EditToolCall } | { case: "lsToolCall"; value: LsToolCall } | { case: "readLintsToolCall"; value: ReadLintsToolCall } | { case: "mcpToolCall"; value: McpToolCall } | { case: "semSearchToolCall"; value: SemSearchToolCall } | { case: "createPlanToolCall"; value: CreatePlanToolCall } | { case: "webSearchToolCall"; value: WebSearchToolCall } | { case: "taskToolCall"; value: TaskToolCall } | { case: "listMcpResourcesToolCall"; value: ListMcpResourcesToolCall } | { case: "readMcpResourceToolCall"; value: ReadMcpResourceToolCall } | { case: "applyAgentDiffToolCall"; value: ApplyAgentDiffToolCall } | { case: "askQuestionToolCall"; value: AskQuestionToolCall } | { case: "fetchToolCall"; value: FetchToolCall } | { case: "switchModeToolCall"; value: SwitchModeToolCall } | { case: "generateImageToolCall"; value: GenerateImageToolCall } | { case: "recordScreenToolCall"; value: RecordScreenToolCall } | { case: "computerUseToolCall"; value: ComputerUseToolCall } | { case: "writeShellStdinToolCall"; value: WriteShellStdinToolCall } | { case: "reflectToolCall"; value: ReflectToolCall } | { case: "setupVmEnvironmentToolCall"; value: SetupVmEnvironmentToolCall } | { case: "truncatedToolCall"; value: TruncatedToolCall } | { case: "startGrindExecutionToolCall"; value: StartGrindExecutionToolCall } | { case: "startGrindPlanningToolCall"; value: StartGrindPlanningToolCall } | { case: "webFetchToolCall"; value: WebFetchToolCall } | { case: "reportBugfixResultsToolCall"; value: ReportBugfixResultsToolCall } | { case: "aiAttributionToolCall"; value: AiAttributionToolCall } | { case: "prManagementToolCall"; value: PrManagementToolCall } | { case: "mcpAuthToolCall"; value: McpAuthToolCall } | { case: "awaitToolCall"; value: AwaitToolCall } | { case: "blameByFilePathToolCall"; value: BlameByFilePathToolCall } | { case: "getMcpToolsToolCall"; value: GetMcpToolsToolCall } | { case: "reportBugToolCall"; value: ReportBugToolCall } | { case: "setActiveBranchToolCall"; value: SetActiveBranchToolCall } | { case: "communicateUpdateToolCall"; value: CommunicateUpdateToolCall } | { case: "sendFinalSummaryToolCall"; value: SendFinalSummaryToolCall } | { case: "updatePrCodeTourToolCall"; value: UpdatePrCodeTourToolCall } | { case: "replaceEnvToolCall"; value: ReplaceEnvToolCall } | { case: "editPrLabelsToolCall"; value: EditPrLabelsToolCall } | { case: "recordCiInvestigationFindingsToolCall"; value: RecordCiInvestigationFindingsToolCall } | { case: "sendMessageToolCall"; value: SendMessageToolCall } | { case: "fetchCloudAgentDataToolCall"; value: FetchCloudAgentDataToolCall } | { case: "sendToUserToolCall"; value: SendToUserToolCall } | { case: "piReadToolCall"; value: PiReadToolCall } | { case: "piBashToolCall"; value: PiBashToolCall } | { case: "piEditToolCall"; value: PiEditToolCall } | { case: "piWriteToolCall"; value: PiWriteToolCall } | { case: "piGrepToolCall"; value: PiGrepToolCall } | { case: "piFindToolCall"; value: PiFindToolCall } | { case: "piLsToolCall"; value: PiLsToolCall } | { case: "connectScmToolCall"; value: ConnectScmToolCall } | { case: "searchConversationsToolCall"; value: SearchConversationsToolCall } | { case: "createGoalToolCall"; value: CreateGoalToolCall } | { case: "updateGoalToolCall"; value: UpdateGoalToolCall } | { case: "adoptToolCall"; value: AdoptToolCall } | { case: "getAgentStatusToolCall"; value: GetAgentStatusToolCall } | { case: "sendToAgentToolCall"; value: SendToAgentToolCall } | { case: "readAgentTranscriptToolCall"; value: ReadAgentTranscriptToolCall } | { case: "createAgentToolCall"; value: CreateAgentToolCall } | { case: "stopAgentToolCall"; value: StopAgentToolCall } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ToolCall>) {
    super();
    this.tool = { case: void 0 };
    this.hookAdditionalContexts = [];
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
export type ToolCall = InstanceType<typeof ToolCall$Runtime>;
var ToolCall: MessageType<ToolCall> = ToolCall$Runtime as unknown as MessageType<ToolCall>;
(ToolCall as MutableMessageType<ToolCall>).runtime = proto3;
(ToolCall as MutableMessageType<ToolCall>).typeName = "agent.v1.ToolCall";
(ToolCall as MutableMessageType<ToolCall>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "shell_tool_call", kind: "message", T: ShellToolCall, oneof: "tool" },
  { no: 3, name: "delete_tool_call", kind: "message", T: DeleteToolCall, oneof: "tool" },
  { no: 4, name: "glob_tool_call", kind: "message", T: GlobToolCall, oneof: "tool" },
  { no: 5, name: "grep_tool_call", kind: "message", T: GrepToolCall, oneof: "tool" },
  { no: 8, name: "read_tool_call", kind: "message", T: ReadToolCall, oneof: "tool" },
  { no: 9, name: "update_todos_tool_call", kind: "message", T: UpdateTodosToolCall, oneof: "tool" },
  { no: 10, name: "read_todos_tool_call", kind: "message", T: ReadTodosToolCall, oneof: "tool" },
  { no: 12, name: "edit_tool_call", kind: "message", T: EditToolCall, oneof: "tool" },
  { no: 13, name: "ls_tool_call", kind: "message", T: LsToolCall, oneof: "tool" },
  { no: 14, name: "read_lints_tool_call", kind: "message", T: ReadLintsToolCall, oneof: "tool" },
  { no: 15, name: "mcp_tool_call", kind: "message", T: McpToolCall, oneof: "tool" },
  { no: 16, name: "sem_search_tool_call", kind: "message", T: SemSearchToolCall, oneof: "tool" },
  { no: 17, name: "create_plan_tool_call", kind: "message", T: CreatePlanToolCall, oneof: "tool" },
  { no: 18, name: "web_search_tool_call", kind: "message", T: WebSearchToolCall, oneof: "tool" },
  { no: 19, name: "task_tool_call", kind: "message", T: TaskToolCall, oneof: "tool" },
  { no: 20, name: "list_mcp_resources_tool_call", kind: "message", T: ListMcpResourcesToolCall, oneof: "tool" },
  { no: 21, name: "read_mcp_resource_tool_call", kind: "message", T: ReadMcpResourceToolCall, oneof: "tool" },
  { no: 22, name: "apply_agent_diff_tool_call", kind: "message", T: ApplyAgentDiffToolCall, oneof: "tool" },
  { no: 23, name: "ask_question_tool_call", kind: "message", T: AskQuestionToolCall, oneof: "tool" },
  { no: 24, name: "fetch_tool_call", kind: "message", T: FetchToolCall, oneof: "tool" },
  { no: 25, name: "switch_mode_tool_call", kind: "message", T: SwitchModeToolCall, oneof: "tool" },
  { no: 28, name: "generate_image_tool_call", kind: "message", T: GenerateImageToolCall, oneof: "tool" },
  { no: 29, name: "record_screen_tool_call", kind: "message", T: RecordScreenToolCall, oneof: "tool" },
  { no: 30, name: "computer_use_tool_call", kind: "message", T: ComputerUseToolCall, oneof: "tool" },
  { no: 31, name: "write_shell_stdin_tool_call", kind: "message", T: WriteShellStdinToolCall, oneof: "tool" },
  { no: 32, name: "reflect_tool_call", kind: "message", T: ReflectToolCall, oneof: "tool" },
  { no: 33, name: "setup_vm_environment_tool_call", kind: "message", T: SetupVmEnvironmentToolCall, oneof: "tool" },
  { no: 34, name: "truncated_tool_call", kind: "message", T: TruncatedToolCall, oneof: "tool" },
  { no: 35, name: "start_grind_execution_tool_call", kind: "message", T: StartGrindExecutionToolCall, oneof: "tool" },
  { no: 36, name: "start_grind_planning_tool_call", kind: "message", T: StartGrindPlanningToolCall, oneof: "tool" },
  { no: 37, name: "web_fetch_tool_call", kind: "message", T: WebFetchToolCall, oneof: "tool" },
  { no: 38, name: "report_bugfix_results_tool_call", kind: "message", T: ReportBugfixResultsToolCall, oneof: "tool" },
  { no: 39, name: "ai_attribution_tool_call", kind: "message", T: AiAttributionToolCall, oneof: "tool" },
  { no: 40, name: "pr_management_tool_call", kind: "message", T: PrManagementToolCall, oneof: "tool" },
  { no: 41, name: "mcp_auth_tool_call", kind: "message", T: McpAuthToolCall, oneof: "tool" },
  { no: 42, name: "await_tool_call", kind: "message", T: AwaitToolCall, oneof: "tool" },
  { no: 43, name: "blame_by_file_path_tool_call", kind: "message", T: BlameByFilePathToolCall, oneof: "tool" },
  { no: 44, name: "get_mcp_tools_tool_call", kind: "message", T: GetMcpToolsToolCall, oneof: "tool" },
  { no: 45, name: "report_bug_tool_call", kind: "message", T: ReportBugToolCall, oneof: "tool" },
  { no: 46, name: "set_active_branch_tool_call", kind: "message", T: SetActiveBranchToolCall, oneof: "tool" },
  { no: 48, name: "communicate_update_tool_call", kind: "message", T: CommunicateUpdateToolCall, oneof: "tool" },
  { no: 49, name: "send_final_summary_tool_call", kind: "message", T: SendFinalSummaryToolCall, oneof: "tool" },
  { no: 50, name: "update_pr_code_tour_tool_call", kind: "message", T: UpdatePrCodeTourToolCall, oneof: "tool" },
  { no: 51, name: "replace_env_tool_call", kind: "message", T: ReplaceEnvToolCall, oneof: "tool" },
  { no: 52, name: "edit_pr_labels_tool_call", kind: "message", T: EditPrLabelsToolCall, oneof: "tool" },
  { no: 53, name: "record_ci_investigation_findings_tool_call", kind: "message", T: RecordCiInvestigationFindingsToolCall, oneof: "tool" },
  { no: 55, name: "send_message_tool_call", kind: "message", T: SendMessageToolCall, oneof: "tool" },
  { no: 56, name: "fetch_cloud_agent_data_tool_call", kind: "message", T: FetchCloudAgentDataToolCall, oneof: "tool" },
  { no: 58, name: "send_to_user_tool_call", kind: "message", T: SendToUserToolCall, oneof: "tool" },
  { no: 61, name: "pi_read_tool_call", kind: "message", T: PiReadToolCall, oneof: "tool" },
  { no: 62, name: "pi_bash_tool_call", kind: "message", T: PiBashToolCall, oneof: "tool" },
  { no: 63, name: "pi_edit_tool_call", kind: "message", T: PiEditToolCall, oneof: "tool" },
  { no: 64, name: "pi_write_tool_call", kind: "message", T: PiWriteToolCall, oneof: "tool" },
  { no: 65, name: "pi_grep_tool_call", kind: "message", T: PiGrepToolCall, oneof: "tool" },
  { no: 66, name: "pi_find_tool_call", kind: "message", T: PiFindToolCall, oneof: "tool" },
  { no: 67, name: "pi_ls_tool_call", kind: "message", T: PiLsToolCall, oneof: "tool" },
  { no: 68, name: "connect_scm_tool_call", kind: "message", T: ConnectScmToolCall, oneof: "tool" },
  { no: 69, name: "search_conversations_tool_call", kind: "message", T: SearchConversationsToolCall, oneof: "tool" },
  { no: 70, name: "create_goal_tool_call", kind: "message", T: CreateGoalToolCall, oneof: "tool" },
  { no: 71, name: "update_goal_tool_call", kind: "message", T: UpdateGoalToolCall, oneof: "tool" },
  { no: 72, name: "adopt_tool_call", kind: "message", T: AdoptToolCall, oneof: "tool" },
  { no: 73, name: "get_agent_status_tool_call", kind: "message", T: GetAgentStatusToolCall, oneof: "tool" },
  { no: 74, name: "send_to_agent_tool_call", kind: "message", T: SendToAgentToolCall, oneof: "tool" },
  { no: 75, name: "read_agent_transcript_tool_call", kind: "message", T: ReadAgentTranscriptToolCall, oneof: "tool" },
  { no: 76, name: "create_agent_tool_call", kind: "message", T: CreateAgentToolCall, oneof: "tool" },
  { no: 77, name: "stop_agent_tool_call", kind: "message", T: StopAgentToolCall, oneof: "tool" },
  { no: 54, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true },
  { no: 57, name: "tool_call_id", kind: "scalar", T: 9, opt: true },
  { no: 59, name: "started_at_ms", kind: "scalar", T: 4, opt: true },
  { no: 60, name: "completed_at_ms", kind: "scalar", T: 4, opt: true }
]);
var TruncatedToolCallArgs$Runtime = (() => class _TruncatedToolCallArgs extends Message<_TruncatedToolCallArgs> {
  constructor(data?: PartialMessage<_TruncatedToolCallArgs>) {
    super();
    proto3.util.initPartial(data, this as _TruncatedToolCallArgs);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TruncatedToolCallArgs {
    return new _TruncatedToolCallArgs().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TruncatedToolCallArgs {
    return new _TruncatedToolCallArgs().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TruncatedToolCallArgs {
    return new _TruncatedToolCallArgs().fromJsonString(jsonString, options);
  }
  static equals(a: _TruncatedToolCallArgs | PlainMessage<_TruncatedToolCallArgs> | undefined | null, b2: _TruncatedToolCallArgs | PlainMessage<_TruncatedToolCallArgs> | undefined | null): boolean {
    return proto3.util.equals(_TruncatedToolCallArgs as unknown as MessageType<_TruncatedToolCallArgs>, a, b2);
  }
})();
export type TruncatedToolCallArgs = InstanceType<typeof TruncatedToolCallArgs$Runtime>;
var TruncatedToolCallArgs: MessageType<TruncatedToolCallArgs> = TruncatedToolCallArgs$Runtime as unknown as MessageType<TruncatedToolCallArgs>;
(TruncatedToolCallArgs as MutableMessageType<TruncatedToolCallArgs>).runtime = proto3;
(TruncatedToolCallArgs as MutableMessageType<TruncatedToolCallArgs>).typeName = "agent.v1.TruncatedToolCallArgs";
(TruncatedToolCallArgs as MutableMessageType<TruncatedToolCallArgs>).fields = proto3.util.newFieldList(() => []);
var TruncatedToolCallSuccess$Runtime = (() => class _TruncatedToolCallSuccess extends Message<_TruncatedToolCallSuccess> {
  constructor(data?: PartialMessage<_TruncatedToolCallSuccess>) {
    super();
    proto3.util.initPartial(data, this as _TruncatedToolCallSuccess);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TruncatedToolCallSuccess {
    return new _TruncatedToolCallSuccess().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TruncatedToolCallSuccess {
    return new _TruncatedToolCallSuccess().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TruncatedToolCallSuccess {
    return new _TruncatedToolCallSuccess().fromJsonString(jsonString, options);
  }
  static equals(a: _TruncatedToolCallSuccess | PlainMessage<_TruncatedToolCallSuccess> | undefined | null, b2: _TruncatedToolCallSuccess | PlainMessage<_TruncatedToolCallSuccess> | undefined | null): boolean {
    return proto3.util.equals(_TruncatedToolCallSuccess as unknown as MessageType<_TruncatedToolCallSuccess>, a, b2);
  }
})();
export type TruncatedToolCallSuccess = InstanceType<typeof TruncatedToolCallSuccess$Runtime>;
var TruncatedToolCallSuccess: MessageType<TruncatedToolCallSuccess> = TruncatedToolCallSuccess$Runtime as unknown as MessageType<TruncatedToolCallSuccess>;
(TruncatedToolCallSuccess as MutableMessageType<TruncatedToolCallSuccess>).runtime = proto3;
(TruncatedToolCallSuccess as MutableMessageType<TruncatedToolCallSuccess>).typeName = "agent.v1.TruncatedToolCallSuccess";
(TruncatedToolCallSuccess as MutableMessageType<TruncatedToolCallSuccess>).fields = proto3.util.newFieldList(() => []);
var TruncatedToolCallError$Runtime = (() => class _TruncatedToolCallError extends Message<_TruncatedToolCallError> {
  declare error: string;
  constructor(data?: PartialMessage<_TruncatedToolCallError>) {
    super();
    this.error = "";
    proto3.util.initPartial(data, this as _TruncatedToolCallError);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TruncatedToolCallError {
    return new _TruncatedToolCallError().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TruncatedToolCallError {
    return new _TruncatedToolCallError().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TruncatedToolCallError {
    return new _TruncatedToolCallError().fromJsonString(jsonString, options);
  }
  static equals(a: _TruncatedToolCallError | PlainMessage<_TruncatedToolCallError> | undefined | null, b2: _TruncatedToolCallError | PlainMessage<_TruncatedToolCallError> | undefined | null): boolean {
    return proto3.util.equals(_TruncatedToolCallError as unknown as MessageType<_TruncatedToolCallError>, a, b2);
  }
})();
export type TruncatedToolCallError = InstanceType<typeof TruncatedToolCallError$Runtime>;
var TruncatedToolCallError: MessageType<TruncatedToolCallError> = TruncatedToolCallError$Runtime as unknown as MessageType<TruncatedToolCallError>;
(TruncatedToolCallError as MutableMessageType<TruncatedToolCallError>).runtime = proto3;
(TruncatedToolCallError as MutableMessageType<TruncatedToolCallError>).typeName = "agent.v1.TruncatedToolCallError";
(TruncatedToolCallError as MutableMessageType<TruncatedToolCallError>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "error",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TruncatedToolCallResult$Runtime = (() => class _TruncatedToolCallResult extends Message<_TruncatedToolCallResult> {
  declare result: { case: "success"; value: TruncatedToolCallSuccess } | { case: "error"; value: TruncatedToolCallError } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TruncatedToolCallResult>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _TruncatedToolCallResult);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TruncatedToolCallResult {
    return new _TruncatedToolCallResult().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TruncatedToolCallResult {
    return new _TruncatedToolCallResult().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TruncatedToolCallResult {
    return new _TruncatedToolCallResult().fromJsonString(jsonString, options);
  }
  static equals(a: _TruncatedToolCallResult | PlainMessage<_TruncatedToolCallResult> | undefined | null, b2: _TruncatedToolCallResult | PlainMessage<_TruncatedToolCallResult> | undefined | null): boolean {
    return proto3.util.equals(_TruncatedToolCallResult as unknown as MessageType<_TruncatedToolCallResult>, a, b2);
  }
})();
export type TruncatedToolCallResult = InstanceType<typeof TruncatedToolCallResult$Runtime>;
var TruncatedToolCallResult: MessageType<TruncatedToolCallResult> = TruncatedToolCallResult$Runtime as unknown as MessageType<TruncatedToolCallResult>;
(TruncatedToolCallResult as MutableMessageType<TruncatedToolCallResult>).runtime = proto3;
(TruncatedToolCallResult as MutableMessageType<TruncatedToolCallResult>).typeName = "agent.v1.TruncatedToolCallResult";
(TruncatedToolCallResult as MutableMessageType<TruncatedToolCallResult>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "success", kind: "message", T: TruncatedToolCallSuccess, oneof: "result" },
  { no: 2, name: "error", kind: "message", T: TruncatedToolCallError, oneof: "result" }
]);
var TruncatedToolCall$Runtime = (() => class _TruncatedToolCall extends Message<_TruncatedToolCall> {
  declare originalStepBlobId: Uint8Array;
  declare args?: TruncatedToolCallArgs;
  declare result?: TruncatedToolCallResult;
  constructor(data?: PartialMessage<_TruncatedToolCall>) {
    super();
    this.originalStepBlobId = new Uint8Array(0);
    proto3.util.initPartial(data, this as _TruncatedToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TruncatedToolCall {
    return new _TruncatedToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TruncatedToolCall {
    return new _TruncatedToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TruncatedToolCall {
    return new _TruncatedToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _TruncatedToolCall | PlainMessage<_TruncatedToolCall> | undefined | null, b2: _TruncatedToolCall | PlainMessage<_TruncatedToolCall> | undefined | null): boolean {
    return proto3.util.equals(_TruncatedToolCall as unknown as MessageType<_TruncatedToolCall>, a, b2);
  }
})();
export type TruncatedToolCall = InstanceType<typeof TruncatedToolCall$Runtime>;
var TruncatedToolCall: MessageType<TruncatedToolCall> = TruncatedToolCall$Runtime as unknown as MessageType<TruncatedToolCall>;
(TruncatedToolCall as MutableMessageType<TruncatedToolCall>).runtime = proto3;
(TruncatedToolCall as MutableMessageType<TruncatedToolCall>).typeName = "agent.v1.TruncatedToolCall";
(TruncatedToolCall as MutableMessageType<TruncatedToolCall>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "original_step_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "args", kind: "message", T: TruncatedToolCallArgs },
  { no: 3, name: "result", kind: "message", T: TruncatedToolCallResult }
]);
var ToolCallDelta$Runtime = (() => class _ToolCallDelta extends Message<_ToolCallDelta> {
  declare delta: { case: "shellToolCallDelta"; value: ShellToolCallDelta } | { case: "taskToolCallDelta"; value: TaskToolCallDelta } | { case: "editToolCallDelta"; value: EditToolCallDelta } | { case: "replaceEnvToolCallDelta"; value: ReplaceEnvToolCallDelta } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ToolCallDelta>) {
    super();
    this.delta = { case: void 0 };
    proto3.util.initPartial(data, this as _ToolCallDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallDelta {
    return new _ToolCallDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallDelta {
    return new _ToolCallDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallDelta {
    return new _ToolCallDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallDelta | PlainMessage<_ToolCallDelta> | undefined | null, b2: _ToolCallDelta | PlainMessage<_ToolCallDelta> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallDelta as unknown as MessageType<_ToolCallDelta>, a, b2);
  }
})();
export type ToolCallDelta = InstanceType<typeof ToolCallDelta$Runtime>;
var ToolCallDelta: MessageType<ToolCallDelta> = ToolCallDelta$Runtime as unknown as MessageType<ToolCallDelta>;
(ToolCallDelta as MutableMessageType<ToolCallDelta>).runtime = proto3;
(ToolCallDelta as MutableMessageType<ToolCallDelta>).typeName = "agent.v1.ToolCallDelta";
(ToolCallDelta as MutableMessageType<ToolCallDelta>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "shell_tool_call_delta", kind: "message", T: ShellToolCallDelta, oneof: "delta" },
  { no: 2, name: "task_tool_call_delta", kind: "message", T: TaskToolCallDelta, oneof: "delta" },
  { no: 3, name: "edit_tool_call_delta", kind: "message", T: EditToolCallDelta, oneof: "delta" },
  { no: 4, name: "replace_env_tool_call_delta", kind: "message", T: ReplaceEnvToolCallDelta, oneof: "delta" }
]);
var ConversationStep$Runtime = (() => class _ConversationStep extends Message<_ConversationStep> {
  declare message: { case: "assistantMessage"; value: AssistantMessage } | { case: "toolCall"; value: ToolCall } | { case: "thinkingMessage"; value: ThinkingMessage } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationStep>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationStep);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationStep {
    return new _ConversationStep().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationStep {
    return new _ConversationStep().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationStep {
    return new _ConversationStep().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationStep | PlainMessage<_ConversationStep> | undefined | null, b2: _ConversationStep | PlainMessage<_ConversationStep> | undefined | null): boolean {
    return proto3.util.equals(_ConversationStep as unknown as MessageType<_ConversationStep>, a, b2);
  }
})();
export type ConversationStep = InstanceType<typeof ConversationStep$Runtime>;
var ConversationStep: MessageType<ConversationStep> = ConversationStep$Runtime as unknown as MessageType<ConversationStep>;
(ConversationStep as MutableMessageType<ConversationStep>).runtime = proto3;
(ConversationStep as MutableMessageType<ConversationStep>).typeName = "agent.v1.ConversationStep";
(ConversationStep as MutableMessageType<ConversationStep>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "assistant_message", kind: "message", T: AssistantMessage, oneof: "message" },
  { no: 2, name: "tool_call", kind: "message", T: ToolCall, oneof: "message" },
  { no: 3, name: "thinking_message", kind: "message", T: ThinkingMessage, oneof: "message" }
]);
var ConversationAction$Runtime = (() => class _ConversationAction extends Message<_ConversationAction> {
  declare triggeringAuthId?: string;
  declare triggeringUserInfo?: TriggeringUserInfo;
  declare requestContextParts?: RequestContextPartReferences;
  declare action: { case: "userMessageAction"; value: UserMessageAction } | { case: "resumeAction"; value: ResumeAction } | { case: "cancelAction"; value: CancelAction } | { case: "summarizeAction"; value: SummarizeAction } | { case: "shellCommandAction"; value: ShellCommandAction } | { case: "startPlanAction"; value: StartPlanAction } | { case: "executePlanAction"; value: ExecutePlanAction } | { case: "asyncAskQuestionCompletionAction"; value: AsyncAskQuestionCompletionAction } | { case: "cancelSubagentAction"; value: CancelSubagentAction } | { case: "backgroundTaskCompletionAction"; value: BackgroundTaskCompletionAction } | { case: "backgroundShellAction"; value: BackgroundShellAction } | { case: "backgroundSubagentAction"; value: BackgroundSubagentAction } | { case: "subscriptionNotificationAction"; value: SubscriptionNotificationAction } | { case: "goalContinuationAction"; value: GoalContinuationAction } | { case: "injectContextAction"; value: InjectContextAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationAction>) {
    super();
    this.action = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationAction {
    return new _ConversationAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationAction {
    return new _ConversationAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationAction {
    return new _ConversationAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationAction | PlainMessage<_ConversationAction> | undefined | null, b2: _ConversationAction | PlainMessage<_ConversationAction> | undefined | null): boolean {
    return proto3.util.equals(_ConversationAction as unknown as MessageType<_ConversationAction>, a, b2);
  }
})();
export type ConversationAction = InstanceType<typeof ConversationAction$Runtime>;
var ConversationAction: MessageType<ConversationAction> = ConversationAction$Runtime as unknown as MessageType<ConversationAction>;
(ConversationAction as MutableMessageType<ConversationAction>).runtime = proto3;
(ConversationAction as MutableMessageType<ConversationAction>).typeName = "agent.v1.ConversationAction";
(ConversationAction as MutableMessageType<ConversationAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message_action", kind: "message", T: UserMessageAction, oneof: "action" },
  { no: 2, name: "resume_action", kind: "message", T: ResumeAction, oneof: "action" },
  { no: 3, name: "cancel_action", kind: "message", T: CancelAction, oneof: "action" },
  { no: 4, name: "summarize_action", kind: "message", T: SummarizeAction, oneof: "action" },
  { no: 5, name: "shell_command_action", kind: "message", T: ShellCommandAction, oneof: "action" },
  { no: 6, name: "start_plan_action", kind: "message", T: StartPlanAction, oneof: "action" },
  { no: 7, name: "execute_plan_action", kind: "message", T: ExecutePlanAction, oneof: "action" },
  { no: 8, name: "async_ask_question_completion_action", kind: "message", T: AsyncAskQuestionCompletionAction, oneof: "action" },
  { no: 10, name: "cancel_subagent_action", kind: "message", T: CancelSubagentAction, oneof: "action" },
  { no: 12, name: "background_task_completion_action", kind: "message", T: BackgroundTaskCompletionAction, oneof: "action" },
  { no: 13, name: "background_shell_action", kind: "message", T: BackgroundShellAction, oneof: "action" },
  { no: 14, name: "background_subagent_action", kind: "message", T: BackgroundSubagentAction, oneof: "action" },
  { no: 16, name: "subscription_notification_action", kind: "message", T: SubscriptionNotificationAction, oneof: "action" },
  { no: 18, name: "goal_continuation_action", kind: "message", T: GoalContinuationAction, oneof: "action" },
  { no: 19, name: "inject_context_action", kind: "message", T: InjectContextAction, oneof: "action" },
  { no: 11, name: "triggering_auth_id", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "triggering_user_info", kind: "message", T: TriggeringUserInfo, opt: true },
  { no: 17, name: "request_context_parts", kind: "message", T: RequestContextPartReferences, opt: true }
]);
var TriggeringUserInfo$Runtime = (() => class _TriggeringUserInfo extends Message<_TriggeringUserInfo> {
  declare authId?: string;
  declare userId?: number;
  constructor(data?: PartialMessage<_TriggeringUserInfo>) {
    super();
    proto3.util.initPartial(data, this as _TriggeringUserInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TriggeringUserInfo {
    return new _TriggeringUserInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TriggeringUserInfo {
    return new _TriggeringUserInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TriggeringUserInfo {
    return new _TriggeringUserInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _TriggeringUserInfo | PlainMessage<_TriggeringUserInfo> | undefined | null, b2: _TriggeringUserInfo | PlainMessage<_TriggeringUserInfo> | undefined | null): boolean {
    return proto3.util.equals(_TriggeringUserInfo as unknown as MessageType<_TriggeringUserInfo>, a, b2);
  }
})();
export type TriggeringUserInfo = InstanceType<typeof TriggeringUserInfo$Runtime>;
var TriggeringUserInfo: MessageType<TriggeringUserInfo> = TriggeringUserInfo$Runtime as unknown as MessageType<TriggeringUserInfo>;
(TriggeringUserInfo as MutableMessageType<TriggeringUserInfo>).runtime = proto3;
(TriggeringUserInfo as MutableMessageType<TriggeringUserInfo>).typeName = "agent.v1.TriggeringUserInfo";
(TriggeringUserInfo as MutableMessageType<TriggeringUserInfo>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "auth_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "user_id", kind: "scalar", T: 5, opt: true }
]);
var BackgroundTaskCompletionAction$Runtime = (() => class _BackgroundTaskCompletionAction extends Message<_BackgroundTaskCompletionAction> {
  declare completions: BackgroundTaskCompletion[];
  constructor(data?: PartialMessage<_BackgroundTaskCompletionAction>) {
    super();
    this.completions = [];
    proto3.util.initPartial(data, this as _BackgroundTaskCompletionAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundTaskCompletionAction {
    return new _BackgroundTaskCompletionAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundTaskCompletionAction {
    return new _BackgroundTaskCompletionAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundTaskCompletionAction {
    return new _BackgroundTaskCompletionAction().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundTaskCompletionAction | PlainMessage<_BackgroundTaskCompletionAction> | undefined | null, b2: _BackgroundTaskCompletionAction | PlainMessage<_BackgroundTaskCompletionAction> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundTaskCompletionAction as unknown as MessageType<_BackgroundTaskCompletionAction>, a, b2);
  }
})();
export type BackgroundTaskCompletionAction = InstanceType<typeof BackgroundTaskCompletionAction$Runtime>;
var BackgroundTaskCompletionAction: MessageType<BackgroundTaskCompletionAction> = BackgroundTaskCompletionAction$Runtime as unknown as MessageType<BackgroundTaskCompletionAction>;
(BackgroundTaskCompletionAction as MutableMessageType<BackgroundTaskCompletionAction>).runtime = proto3;
(BackgroundTaskCompletionAction as MutableMessageType<BackgroundTaskCompletionAction>).typeName = "agent.v1.BackgroundTaskCompletionAction";
(BackgroundTaskCompletionAction as MutableMessageType<BackgroundTaskCompletionAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "completions", kind: "message", T: BackgroundTaskCompletion, repeated: true }
]);
var BackgroundTaskCompletion$Runtime = (() => class _BackgroundTaskCompletion extends Message<_BackgroundTaskCompletion> {
  declare taskId: string;
  declare kind: BackgroundTaskKind;
  declare status: BackgroundTaskStatus;
  declare title: string;
  declare detail?: string;
  declare outputPath?: string;
  declare threadId?: string;
  declare reason: BackgroundTaskCompletionReason;
  declare subagentId?: string;
  declare toolCallId?: string;
  declare notificationContext: BackgroundTaskNotificationContext;
  constructor(data?: PartialMessage<_BackgroundTaskCompletion>) {
    super();
    this.taskId = "";
    this.kind = BackgroundTaskKind.UNSPECIFIED;
    this.status = BackgroundTaskStatus.UNSPECIFIED;
    this.title = "";
    this.reason = BackgroundTaskCompletionReason.UNSPECIFIED;
    this.notificationContext = BackgroundTaskNotificationContext.UNSPECIFIED;
    proto3.util.initPartial(data, this as _BackgroundTaskCompletion);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundTaskCompletion {
    return new _BackgroundTaskCompletion().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundTaskCompletion {
    return new _BackgroundTaskCompletion().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundTaskCompletion {
    return new _BackgroundTaskCompletion().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundTaskCompletion | PlainMessage<_BackgroundTaskCompletion> | undefined | null, b2: _BackgroundTaskCompletion | PlainMessage<_BackgroundTaskCompletion> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundTaskCompletion as unknown as MessageType<_BackgroundTaskCompletion>, a, b2);
  }
})();
export type BackgroundTaskCompletion = InstanceType<typeof BackgroundTaskCompletion$Runtime>;
var BackgroundTaskCompletion: MessageType<BackgroundTaskCompletion> = BackgroundTaskCompletion$Runtime as unknown as MessageType<BackgroundTaskCompletion>;
(BackgroundTaskCompletion as MutableMessageType<BackgroundTaskCompletion>).runtime = proto3;
(BackgroundTaskCompletion as MutableMessageType<BackgroundTaskCompletion>).typeName = "agent.v1.BackgroundTaskCompletion";
(BackgroundTaskCompletion as MutableMessageType<BackgroundTaskCompletion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "task_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(BackgroundTaskKind) },
  { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(BackgroundTaskStatus) },
  {
    no: 4,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "detail", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "output_path", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "thread_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "reason", kind: "enum", T: proto3.getEnumType(BackgroundTaskCompletionReason) },
  { no: 9, name: "subagent_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "tool_call_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "notification_context", kind: "enum", T: proto3.getEnumType(BackgroundTaskNotificationContext) }
]);
var SubagentRunState$Runtime = (() => class _SubagentRunState extends Message<_SubagentRunState> {
  declare parentToolCallId: string;
  declare subagentId?: string;
  declare environment: SubagentExecutionEnvironment;
  declare status: SubagentRunStatus;
  declare title?: string;
  declare detail?: string;
  declare transcriptPath?: string;
  declare outputPath?: string;
  declare completedTimestampMs?: bigint;
  declare completionReason?: BackgroundTaskCompletionReason;
  constructor(data?: PartialMessage<_SubagentRunState>) {
    super();
    this.parentToolCallId = "";
    this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
    this.status = SubagentRunStatus.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SubagentRunState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentRunState {
    return new _SubagentRunState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentRunState {
    return new _SubagentRunState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentRunState {
    return new _SubagentRunState().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentRunState | PlainMessage<_SubagentRunState> | undefined | null, b2: _SubagentRunState | PlainMessage<_SubagentRunState> | undefined | null): boolean {
    return proto3.util.equals(_SubagentRunState as unknown as MessageType<_SubagentRunState>, a, b2);
  }
})();
export type SubagentRunState = InstanceType<typeof SubagentRunState$Runtime>;
var SubagentRunState: MessageType<SubagentRunState> = SubagentRunState$Runtime as unknown as MessageType<SubagentRunState>;
(SubagentRunState as MutableMessageType<SubagentRunState>).runtime = proto3;
(SubagentRunState as MutableMessageType<SubagentRunState>).typeName = "agent.v1.SubagentRunState";
(SubagentRunState as MutableMessageType<SubagentRunState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "parent_tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "subagent_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(SubagentRunStatus) },
  { no: 5, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "detail", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "transcript_path", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "output_path", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "completed_timestamp_ms", kind: "scalar", T: 4, opt: true },
  { no: 10, name: "completion_reason", kind: "enum", T: proto3.getEnumType(BackgroundTaskCompletionReason), opt: true }
]);
var CancelSubagentAction$Runtime = (() => class _CancelSubagentAction extends Message<_CancelSubagentAction> {
  declare subagentId: string;
  constructor(data?: PartialMessage<_CancelSubagentAction>) {
    super();
    this.subagentId = "";
    proto3.util.initPartial(data, this as _CancelSubagentAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CancelSubagentAction {
    return new _CancelSubagentAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CancelSubagentAction {
    return new _CancelSubagentAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CancelSubagentAction {
    return new _CancelSubagentAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CancelSubagentAction | PlainMessage<_CancelSubagentAction> | undefined | null, b2: _CancelSubagentAction | PlainMessage<_CancelSubagentAction> | undefined | null): boolean {
    return proto3.util.equals(_CancelSubagentAction as unknown as MessageType<_CancelSubagentAction>, a, b2);
  }
})();
export type CancelSubagentAction = InstanceType<typeof CancelSubagentAction$Runtime>;
var CancelSubagentAction: MessageType<CancelSubagentAction> = CancelSubagentAction$Runtime as unknown as MessageType<CancelSubagentAction>;
(CancelSubagentAction as MutableMessageType<CancelSubagentAction>).runtime = proto3;
(CancelSubagentAction as MutableMessageType<CancelSubagentAction>).typeName = "agent.v1.CancelSubagentAction";
(CancelSubagentAction as MutableMessageType<CancelSubagentAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subagent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BackgroundShellAction$Runtime = (() => class _BackgroundShellAction extends Message<_BackgroundShellAction> {
  declare toolCallId: string;
  constructor(data?: PartialMessage<_BackgroundShellAction>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _BackgroundShellAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundShellAction {
    return new _BackgroundShellAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundShellAction {
    return new _BackgroundShellAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundShellAction {
    return new _BackgroundShellAction().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundShellAction | PlainMessage<_BackgroundShellAction> | undefined | null, b2: _BackgroundShellAction | PlainMessage<_BackgroundShellAction> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundShellAction as unknown as MessageType<_BackgroundShellAction>, a, b2);
  }
})();
export type BackgroundShellAction = InstanceType<typeof BackgroundShellAction$Runtime>;
var BackgroundShellAction: MessageType<BackgroundShellAction> = BackgroundShellAction$Runtime as unknown as MessageType<BackgroundShellAction>;
(BackgroundShellAction as MutableMessageType<BackgroundShellAction>).runtime = proto3;
(BackgroundShellAction as MutableMessageType<BackgroundShellAction>).typeName = "agent.v1.BackgroundShellAction";
(BackgroundShellAction as MutableMessageType<BackgroundShellAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BackgroundSubagentAction$Runtime = (() => class _BackgroundSubagentAction extends Message<_BackgroundSubagentAction> {
  declare toolCallId: string;
  constructor(data?: PartialMessage<_BackgroundSubagentAction>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _BackgroundSubagentAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BackgroundSubagentAction {
    return new _BackgroundSubagentAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BackgroundSubagentAction {
    return new _BackgroundSubagentAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BackgroundSubagentAction {
    return new _BackgroundSubagentAction().fromJsonString(jsonString, options);
  }
  static equals(a: _BackgroundSubagentAction | PlainMessage<_BackgroundSubagentAction> | undefined | null, b2: _BackgroundSubagentAction | PlainMessage<_BackgroundSubagentAction> | undefined | null): boolean {
    return proto3.util.equals(_BackgroundSubagentAction as unknown as MessageType<_BackgroundSubagentAction>, a, b2);
  }
})();
export type BackgroundSubagentAction = InstanceType<typeof BackgroundSubagentAction$Runtime>;
var BackgroundSubagentAction: MessageType<BackgroundSubagentAction> = BackgroundSubagentAction$Runtime as unknown as MessageType<BackgroundSubagentAction>;
(BackgroundSubagentAction as MutableMessageType<BackgroundSubagentAction>).runtime = proto3;
(BackgroundSubagentAction as MutableMessageType<BackgroundSubagentAction>).typeName = "agent.v1.BackgroundSubagentAction";
(BackgroundSubagentAction as MutableMessageType<BackgroundSubagentAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InterruptedPendingToolCallResolution$Runtime = (() => class _InterruptedPendingToolCallResolution extends Message<_InterruptedPendingToolCallResolution> {
  declare toolCallId: string;
  declare resolution: { case: "shellResult"; value: ShellResult } | { case: "taskResult"; value: TaskResult } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InterruptedPendingToolCallResolution>) {
    super();
    this.toolCallId = "";
    this.resolution = { case: void 0 };
    proto3.util.initPartial(data, this as _InterruptedPendingToolCallResolution);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InterruptedPendingToolCallResolution {
    return new _InterruptedPendingToolCallResolution().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InterruptedPendingToolCallResolution {
    return new _InterruptedPendingToolCallResolution().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InterruptedPendingToolCallResolution {
    return new _InterruptedPendingToolCallResolution().fromJsonString(jsonString, options);
  }
  static equals(a: _InterruptedPendingToolCallResolution | PlainMessage<_InterruptedPendingToolCallResolution> | undefined | null, b2: _InterruptedPendingToolCallResolution | PlainMessage<_InterruptedPendingToolCallResolution> | undefined | null): boolean {
    return proto3.util.equals(_InterruptedPendingToolCallResolution as unknown as MessageType<_InterruptedPendingToolCallResolution>, a, b2);
  }
})();
export type InterruptedPendingToolCallResolution = InstanceType<typeof InterruptedPendingToolCallResolution$Runtime>;
var InterruptedPendingToolCallResolution: MessageType<InterruptedPendingToolCallResolution> = InterruptedPendingToolCallResolution$Runtime as unknown as MessageType<InterruptedPendingToolCallResolution>;
(InterruptedPendingToolCallResolution as MutableMessageType<InterruptedPendingToolCallResolution>).runtime = proto3;
(InterruptedPendingToolCallResolution as MutableMessageType<InterruptedPendingToolCallResolution>).typeName = "agent.v1.InterruptedPendingToolCallResolution";
(InterruptedPendingToolCallResolution as MutableMessageType<InterruptedPendingToolCallResolution>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "shell_result", kind: "message", T: ShellResult, oneof: "resolution" },
  { no: 3, name: "task_result", kind: "message", T: TaskResult, oneof: "resolution" }
]);
var InterruptedPendingToolCallResolutions$Runtime = (() => class _InterruptedPendingToolCallResolutions extends Message<_InterruptedPendingToolCallResolutions> {
  declare resolutions: InterruptedPendingToolCallResolution[];
  constructor(data?: PartialMessage<_InterruptedPendingToolCallResolutions>) {
    super();
    this.resolutions = [];
    proto3.util.initPartial(data, this as _InterruptedPendingToolCallResolutions);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InterruptedPendingToolCallResolutions {
    return new _InterruptedPendingToolCallResolutions().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InterruptedPendingToolCallResolutions {
    return new _InterruptedPendingToolCallResolutions().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InterruptedPendingToolCallResolutions {
    return new _InterruptedPendingToolCallResolutions().fromJsonString(jsonString, options);
  }
  static equals(a: _InterruptedPendingToolCallResolutions | PlainMessage<_InterruptedPendingToolCallResolutions> | undefined | null, b2: _InterruptedPendingToolCallResolutions | PlainMessage<_InterruptedPendingToolCallResolutions> | undefined | null): boolean {
    return proto3.util.equals(_InterruptedPendingToolCallResolutions as unknown as MessageType<_InterruptedPendingToolCallResolutions>, a, b2);
  }
})();
export type InterruptedPendingToolCallResolutions = InstanceType<typeof InterruptedPendingToolCallResolutions$Runtime>;
var InterruptedPendingToolCallResolutions: MessageType<InterruptedPendingToolCallResolutions> = InterruptedPendingToolCallResolutions$Runtime as unknown as MessageType<InterruptedPendingToolCallResolutions>;
(InterruptedPendingToolCallResolutions as MutableMessageType<InterruptedPendingToolCallResolutions>).runtime = proto3;
(InterruptedPendingToolCallResolutions as MutableMessageType<InterruptedPendingToolCallResolutions>).typeName = "agent.v1.InterruptedPendingToolCallResolutions";
(InterruptedPendingToolCallResolutions as MutableMessageType<InterruptedPendingToolCallResolutions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "resolutions", kind: "message", T: InterruptedPendingToolCallResolution, repeated: true }
]);
var ConversationHistory$Runtime = (() => class _ConversationHistory extends Message<_ConversationHistory> {
  declare messages: ConversationHistoryMessage[];
  declare replaceUserInfo?: boolean;
  constructor(data?: PartialMessage<_ConversationHistory>) {
    super();
    this.messages = [];
    proto3.util.initPartial(data, this as _ConversationHistory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistory {
    return new _ConversationHistory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistory {
    return new _ConversationHistory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistory {
    return new _ConversationHistory().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistory | PlainMessage<_ConversationHistory> | undefined | null, b2: _ConversationHistory | PlainMessage<_ConversationHistory> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistory as unknown as MessageType<_ConversationHistory>, a, b2);
  }
})();
export type ConversationHistory = InstanceType<typeof ConversationHistory$Runtime>;
var ConversationHistory: MessageType<ConversationHistory> = ConversationHistory$Runtime as unknown as MessageType<ConversationHistory>;
(ConversationHistory as MutableMessageType<ConversationHistory>).runtime = proto3;
(ConversationHistory as MutableMessageType<ConversationHistory>).typeName = "agent.v1.ConversationHistory";
(ConversationHistory as MutableMessageType<ConversationHistory>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: ConversationHistoryMessage, repeated: true },
  { no: 2, name: "replace_user_info", kind: "scalar", T: 8, opt: true }
]);
var ConversationHistoryMessage$Runtime = (() => class _ConversationHistoryMessage extends Message<_ConversationHistoryMessage> {
  declare message: { case: "user"; value: ConversationHistoryUserMessage } | { case: "assistant"; value: ConversationHistoryAssistantMessage } | { case: "tool"; value: ConversationHistoryToolMessage } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationHistoryMessage>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationHistoryMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryMessage {
    return new _ConversationHistoryMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryMessage {
    return new _ConversationHistoryMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryMessage {
    return new _ConversationHistoryMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryMessage | PlainMessage<_ConversationHistoryMessage> | undefined | null, b2: _ConversationHistoryMessage | PlainMessage<_ConversationHistoryMessage> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryMessage as unknown as MessageType<_ConversationHistoryMessage>, a, b2);
  }
})();
export type ConversationHistoryMessage = InstanceType<typeof ConversationHistoryMessage$Runtime>;
var ConversationHistoryMessage: MessageType<ConversationHistoryMessage> = ConversationHistoryMessage$Runtime as unknown as MessageType<ConversationHistoryMessage>;
(ConversationHistoryMessage as MutableMessageType<ConversationHistoryMessage>).runtime = proto3;
(ConversationHistoryMessage as MutableMessageType<ConversationHistoryMessage>).typeName = "agent.v1.ConversationHistoryMessage";
(ConversationHistoryMessage as MutableMessageType<ConversationHistoryMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: ConversationHistoryUserMessage, oneof: "message" },
  { no: 2, name: "assistant", kind: "message", T: ConversationHistoryAssistantMessage, oneof: "message" },
  { no: 3, name: "tool", kind: "message", T: ConversationHistoryToolMessage, oneof: "message" }
]);
var ConversationHistoryUserMessage$Runtime = (() => class _ConversationHistoryUserMessage extends Message<_ConversationHistoryUserMessage> {
  declare content: ConversationHistoryUserContent[];
  constructor(data?: PartialMessage<_ConversationHistoryUserMessage>) {
    super();
    this.content = [];
    proto3.util.initPartial(data, this as _ConversationHistoryUserMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryUserMessage {
    return new _ConversationHistoryUserMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryUserMessage {
    return new _ConversationHistoryUserMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryUserMessage {
    return new _ConversationHistoryUserMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryUserMessage | PlainMessage<_ConversationHistoryUserMessage> | undefined | null, b2: _ConversationHistoryUserMessage | PlainMessage<_ConversationHistoryUserMessage> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryUserMessage as unknown as MessageType<_ConversationHistoryUserMessage>, a, b2);
  }
})();
export type ConversationHistoryUserMessage = InstanceType<typeof ConversationHistoryUserMessage$Runtime>;
var ConversationHistoryUserMessage: MessageType<ConversationHistoryUserMessage> = ConversationHistoryUserMessage$Runtime as unknown as MessageType<ConversationHistoryUserMessage>;
(ConversationHistoryUserMessage as MutableMessageType<ConversationHistoryUserMessage>).runtime = proto3;
(ConversationHistoryUserMessage as MutableMessageType<ConversationHistoryUserMessage>).typeName = "agent.v1.ConversationHistoryUserMessage";
(ConversationHistoryUserMessage as MutableMessageType<ConversationHistoryUserMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "message", T: ConversationHistoryUserContent, repeated: true }
]);
var ConversationHistoryUserContent$Runtime = (() => class _ConversationHistoryUserContent extends Message<_ConversationHistoryUserContent> {
  declare content: { case: "text"; value: ConversationHistoryTextContent } | { case: "image"; value: ConversationHistoryImageContent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationHistoryUserContent>) {
    super();
    this.content = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationHistoryUserContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryUserContent {
    return new _ConversationHistoryUserContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryUserContent {
    return new _ConversationHistoryUserContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryUserContent {
    return new _ConversationHistoryUserContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryUserContent | PlainMessage<_ConversationHistoryUserContent> | undefined | null, b2: _ConversationHistoryUserContent | PlainMessage<_ConversationHistoryUserContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryUserContent as unknown as MessageType<_ConversationHistoryUserContent>, a, b2);
  }
})();
export type ConversationHistoryUserContent = InstanceType<typeof ConversationHistoryUserContent$Runtime>;
var ConversationHistoryUserContent: MessageType<ConversationHistoryUserContent> = ConversationHistoryUserContent$Runtime as unknown as MessageType<ConversationHistoryUserContent>;
(ConversationHistoryUserContent as MutableMessageType<ConversationHistoryUserContent>).runtime = proto3;
(ConversationHistoryUserContent as MutableMessageType<ConversationHistoryUserContent>).typeName = "agent.v1.ConversationHistoryUserContent";
(ConversationHistoryUserContent as MutableMessageType<ConversationHistoryUserContent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: ConversationHistoryTextContent, oneof: "content" },
  { no: 2, name: "image", kind: "message", T: ConversationHistoryImageContent, oneof: "content" }
]);
var ConversationHistoryTextContent$Runtime = (() => class _ConversationHistoryTextContent extends Message<_ConversationHistoryTextContent> {
  declare text: string;
  constructor(data?: PartialMessage<_ConversationHistoryTextContent>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _ConversationHistoryTextContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryTextContent {
    return new _ConversationHistoryTextContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryTextContent {
    return new _ConversationHistoryTextContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryTextContent {
    return new _ConversationHistoryTextContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryTextContent | PlainMessage<_ConversationHistoryTextContent> | undefined | null, b2: _ConversationHistoryTextContent | PlainMessage<_ConversationHistoryTextContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryTextContent as unknown as MessageType<_ConversationHistoryTextContent>, a, b2);
  }
})();
export type ConversationHistoryTextContent = InstanceType<typeof ConversationHistoryTextContent$Runtime>;
var ConversationHistoryTextContent: MessageType<ConversationHistoryTextContent> = ConversationHistoryTextContent$Runtime as unknown as MessageType<ConversationHistoryTextContent>;
(ConversationHistoryTextContent as MutableMessageType<ConversationHistoryTextContent>).runtime = proto3;
(ConversationHistoryTextContent as MutableMessageType<ConversationHistoryTextContent>).typeName = "agent.v1.ConversationHistoryTextContent";
(ConversationHistoryTextContent as MutableMessageType<ConversationHistoryTextContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationHistoryImageContent$Runtime = (() => class _ConversationHistoryImageContent extends Message<_ConversationHistoryImageContent> {
  declare data: string;
  declare mimeType?: string;
  constructor(data?: PartialMessage<_ConversationHistoryImageContent>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _ConversationHistoryImageContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryImageContent {
    return new _ConversationHistoryImageContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryImageContent {
    return new _ConversationHistoryImageContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryImageContent {
    return new _ConversationHistoryImageContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryImageContent | PlainMessage<_ConversationHistoryImageContent> | undefined | null, b2: _ConversationHistoryImageContent | PlainMessage<_ConversationHistoryImageContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryImageContent as unknown as MessageType<_ConversationHistoryImageContent>, a, b2);
  }
})();
export type ConversationHistoryImageContent = InstanceType<typeof ConversationHistoryImageContent$Runtime>;
var ConversationHistoryImageContent: MessageType<ConversationHistoryImageContent> = ConversationHistoryImageContent$Runtime as unknown as MessageType<ConversationHistoryImageContent>;
(ConversationHistoryImageContent as MutableMessageType<ConversationHistoryImageContent>).runtime = proto3;
(ConversationHistoryImageContent as MutableMessageType<ConversationHistoryImageContent>).typeName = "agent.v1.ConversationHistoryImageContent";
(ConversationHistoryImageContent as MutableMessageType<ConversationHistoryImageContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "mime_type", kind: "scalar", T: 9, opt: true }
]);
var ConversationHistoryAssistantMessage$Runtime = (() => class _ConversationHistoryAssistantMessage extends Message<_ConversationHistoryAssistantMessage> {
  declare content: ConversationHistoryAssistantContent[];
  constructor(data?: PartialMessage<_ConversationHistoryAssistantMessage>) {
    super();
    this.content = [];
    proto3.util.initPartial(data, this as _ConversationHistoryAssistantMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryAssistantMessage {
    return new _ConversationHistoryAssistantMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryAssistantMessage {
    return new _ConversationHistoryAssistantMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryAssistantMessage {
    return new _ConversationHistoryAssistantMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryAssistantMessage | PlainMessage<_ConversationHistoryAssistantMessage> | undefined | null, b2: _ConversationHistoryAssistantMessage | PlainMessage<_ConversationHistoryAssistantMessage> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryAssistantMessage as unknown as MessageType<_ConversationHistoryAssistantMessage>, a, b2);
  }
})();
export type ConversationHistoryAssistantMessage = InstanceType<typeof ConversationHistoryAssistantMessage$Runtime>;
var ConversationHistoryAssistantMessage: MessageType<ConversationHistoryAssistantMessage> = ConversationHistoryAssistantMessage$Runtime as unknown as MessageType<ConversationHistoryAssistantMessage>;
(ConversationHistoryAssistantMessage as MutableMessageType<ConversationHistoryAssistantMessage>).runtime = proto3;
(ConversationHistoryAssistantMessage as MutableMessageType<ConversationHistoryAssistantMessage>).typeName = "agent.v1.ConversationHistoryAssistantMessage";
(ConversationHistoryAssistantMessage as MutableMessageType<ConversationHistoryAssistantMessage>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "message", T: ConversationHistoryAssistantContent, repeated: true }
]);
var ConversationHistoryAssistantContent$Runtime = (() => class _ConversationHistoryAssistantContent extends Message<_ConversationHistoryAssistantContent> {
  declare content: { case: "text"; value: ConversationHistoryTextContent } | { case: "reasoning"; value: ConversationHistoryReasoningContent } | { case: "redactedReasoning"; value: ConversationHistoryRedactedReasoningContent } | { case: "toolCall"; value: ConversationHistoryToolCall } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationHistoryAssistantContent>) {
    super();
    this.content = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationHistoryAssistantContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryAssistantContent {
    return new _ConversationHistoryAssistantContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryAssistantContent {
    return new _ConversationHistoryAssistantContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryAssistantContent {
    return new _ConversationHistoryAssistantContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryAssistantContent | PlainMessage<_ConversationHistoryAssistantContent> | undefined | null, b2: _ConversationHistoryAssistantContent | PlainMessage<_ConversationHistoryAssistantContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryAssistantContent as unknown as MessageType<_ConversationHistoryAssistantContent>, a, b2);
  }
})();
export type ConversationHistoryAssistantContent = InstanceType<typeof ConversationHistoryAssistantContent$Runtime>;
var ConversationHistoryAssistantContent: MessageType<ConversationHistoryAssistantContent> = ConversationHistoryAssistantContent$Runtime as unknown as MessageType<ConversationHistoryAssistantContent>;
(ConversationHistoryAssistantContent as MutableMessageType<ConversationHistoryAssistantContent>).runtime = proto3;
(ConversationHistoryAssistantContent as MutableMessageType<ConversationHistoryAssistantContent>).typeName = "agent.v1.ConversationHistoryAssistantContent";
(ConversationHistoryAssistantContent as MutableMessageType<ConversationHistoryAssistantContent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: ConversationHistoryTextContent, oneof: "content" },
  { no: 2, name: "reasoning", kind: "message", T: ConversationHistoryReasoningContent, oneof: "content" },
  { no: 3, name: "redacted_reasoning", kind: "message", T: ConversationHistoryRedactedReasoningContent, oneof: "content" },
  { no: 4, name: "tool_call", kind: "message", T: ConversationHistoryToolCall, oneof: "content" }
]);
var ConversationHistoryReasoningContent$Runtime = (() => class _ConversationHistoryReasoningContent extends Message<_ConversationHistoryReasoningContent> {
  declare text: string;
  declare signature?: string;
  constructor(data?: PartialMessage<_ConversationHistoryReasoningContent>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _ConversationHistoryReasoningContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryReasoningContent {
    return new _ConversationHistoryReasoningContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryReasoningContent {
    return new _ConversationHistoryReasoningContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryReasoningContent {
    return new _ConversationHistoryReasoningContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryReasoningContent | PlainMessage<_ConversationHistoryReasoningContent> | undefined | null, b2: _ConversationHistoryReasoningContent | PlainMessage<_ConversationHistoryReasoningContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryReasoningContent as unknown as MessageType<_ConversationHistoryReasoningContent>, a, b2);
  }
})();
export type ConversationHistoryReasoningContent = InstanceType<typeof ConversationHistoryReasoningContent$Runtime>;
var ConversationHistoryReasoningContent: MessageType<ConversationHistoryReasoningContent> = ConversationHistoryReasoningContent$Runtime as unknown as MessageType<ConversationHistoryReasoningContent>;
(ConversationHistoryReasoningContent as MutableMessageType<ConversationHistoryReasoningContent>).runtime = proto3;
(ConversationHistoryReasoningContent as MutableMessageType<ConversationHistoryReasoningContent>).typeName = "agent.v1.ConversationHistoryReasoningContent";
(ConversationHistoryReasoningContent as MutableMessageType<ConversationHistoryReasoningContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "signature", kind: "scalar", T: 9, opt: true }
]);
var ConversationHistoryRedactedReasoningContent$Runtime = (() => class _ConversationHistoryRedactedReasoningContent extends Message<_ConversationHistoryRedactedReasoningContent> {
  declare data: string;
  constructor(data?: PartialMessage<_ConversationHistoryRedactedReasoningContent>) {
    super();
    this.data = "";
    proto3.util.initPartial(data, this as _ConversationHistoryRedactedReasoningContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryRedactedReasoningContent {
    return new _ConversationHistoryRedactedReasoningContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryRedactedReasoningContent {
    return new _ConversationHistoryRedactedReasoningContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryRedactedReasoningContent {
    return new _ConversationHistoryRedactedReasoningContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryRedactedReasoningContent | PlainMessage<_ConversationHistoryRedactedReasoningContent> | undefined | null, b2: _ConversationHistoryRedactedReasoningContent | PlainMessage<_ConversationHistoryRedactedReasoningContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryRedactedReasoningContent as unknown as MessageType<_ConversationHistoryRedactedReasoningContent>, a, b2);
  }
})();
export type ConversationHistoryRedactedReasoningContent = InstanceType<typeof ConversationHistoryRedactedReasoningContent$Runtime>;
var ConversationHistoryRedactedReasoningContent: MessageType<ConversationHistoryRedactedReasoningContent> = ConversationHistoryRedactedReasoningContent$Runtime as unknown as MessageType<ConversationHistoryRedactedReasoningContent>;
(ConversationHistoryRedactedReasoningContent as MutableMessageType<ConversationHistoryRedactedReasoningContent>).runtime = proto3;
(ConversationHistoryRedactedReasoningContent as MutableMessageType<ConversationHistoryRedactedReasoningContent>).typeName = "agent.v1.ConversationHistoryRedactedReasoningContent";
(ConversationHistoryRedactedReasoningContent as MutableMessageType<ConversationHistoryRedactedReasoningContent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "data",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationHistoryToolCall$Runtime = (() => class _ConversationHistoryToolCall extends Message<_ConversationHistoryToolCall> {
  declare toolCallId: string;
  declare toolName: string;
  declare argsJson: string;
  constructor(data?: PartialMessage<_ConversationHistoryToolCall>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.argsJson = "";
    proto3.util.initPartial(data, this as _ConversationHistoryToolCall);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryToolCall {
    return new _ConversationHistoryToolCall().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryToolCall {
    return new _ConversationHistoryToolCall().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryToolCall {
    return new _ConversationHistoryToolCall().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryToolCall | PlainMessage<_ConversationHistoryToolCall> | undefined | null, b2: _ConversationHistoryToolCall | PlainMessage<_ConversationHistoryToolCall> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryToolCall as unknown as MessageType<_ConversationHistoryToolCall>, a, b2);
  }
})();
export type ConversationHistoryToolCall = InstanceType<typeof ConversationHistoryToolCall$Runtime>;
var ConversationHistoryToolCall: MessageType<ConversationHistoryToolCall> = ConversationHistoryToolCall$Runtime as unknown as MessageType<ConversationHistoryToolCall>;
(ConversationHistoryToolCall as MutableMessageType<ConversationHistoryToolCall>).runtime = proto3;
(ConversationHistoryToolCall as MutableMessageType<ConversationHistoryToolCall>).typeName = "agent.v1.ConversationHistoryToolCall";
(ConversationHistoryToolCall as MutableMessageType<ConversationHistoryToolCall>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
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
  {
    no: 3,
    name: "args_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationHistoryToolMessage$Runtime = (() => class _ConversationHistoryToolMessage extends Message<_ConversationHistoryToolMessage> {
  declare toolCallId: string;
  declare toolName: string;
  declare content: ConversationHistoryToolResultContent[];
  declare isError?: boolean;
  declare hookAdditionalContexts: HookAdditionalContext[];
  constructor(data?: PartialMessage<_ConversationHistoryToolMessage>) {
    super();
    this.toolCallId = "";
    this.toolName = "";
    this.content = [];
    this.hookAdditionalContexts = [];
    proto3.util.initPartial(data, this as _ConversationHistoryToolMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryToolMessage {
    return new _ConversationHistoryToolMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryToolMessage {
    return new _ConversationHistoryToolMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryToolMessage {
    return new _ConversationHistoryToolMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryToolMessage | PlainMessage<_ConversationHistoryToolMessage> | undefined | null, b2: _ConversationHistoryToolMessage | PlainMessage<_ConversationHistoryToolMessage> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryToolMessage as unknown as MessageType<_ConversationHistoryToolMessage>, a, b2);
  }
})();
export type ConversationHistoryToolMessage = InstanceType<typeof ConversationHistoryToolMessage$Runtime>;
var ConversationHistoryToolMessage: MessageType<ConversationHistoryToolMessage> = ConversationHistoryToolMessage$Runtime as unknown as MessageType<ConversationHistoryToolMessage>;
(ConversationHistoryToolMessage as MutableMessageType<ConversationHistoryToolMessage>).runtime = proto3;
(ConversationHistoryToolMessage as MutableMessageType<ConversationHistoryToolMessage>).typeName = "agent.v1.ConversationHistoryToolMessage";
(ConversationHistoryToolMessage as MutableMessageType<ConversationHistoryToolMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_call_id",
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
  { no: 3, name: "content", kind: "message", T: ConversationHistoryToolResultContent, repeated: true },
  { no: 4, name: "is_error", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true }
]);
var ConversationHistoryToolResultContent$Runtime = (() => class _ConversationHistoryToolResultContent extends Message<_ConversationHistoryToolResultContent> {
  declare content: { case: "text"; value: ConversationHistoryTextContent } | { case: "image"; value: ConversationHistoryImageContent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationHistoryToolResultContent>) {
    super();
    this.content = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationHistoryToolResultContent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationHistoryToolResultContent {
    return new _ConversationHistoryToolResultContent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationHistoryToolResultContent {
    return new _ConversationHistoryToolResultContent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationHistoryToolResultContent {
    return new _ConversationHistoryToolResultContent().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationHistoryToolResultContent | PlainMessage<_ConversationHistoryToolResultContent> | undefined | null, b2: _ConversationHistoryToolResultContent | PlainMessage<_ConversationHistoryToolResultContent> | undefined | null): boolean {
    return proto3.util.equals(_ConversationHistoryToolResultContent as unknown as MessageType<_ConversationHistoryToolResultContent>, a, b2);
  }
})();
export type ConversationHistoryToolResultContent = InstanceType<typeof ConversationHistoryToolResultContent$Runtime>;
var ConversationHistoryToolResultContent: MessageType<ConversationHistoryToolResultContent> = ConversationHistoryToolResultContent$Runtime as unknown as MessageType<ConversationHistoryToolResultContent>;
(ConversationHistoryToolResultContent as MutableMessageType<ConversationHistoryToolResultContent>).runtime = proto3;
(ConversationHistoryToolResultContent as MutableMessageType<ConversationHistoryToolResultContent>).typeName = "agent.v1.ConversationHistoryToolResultContent";
(ConversationHistoryToolResultContent as MutableMessageType<ConversationHistoryToolResultContent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text", kind: "message", T: ConversationHistoryTextContent, oneof: "content" },
  { no: 2, name: "image", kind: "message", T: ConversationHistoryImageContent, oneof: "content" }
]);
var UserMessageAction$Runtime = (() => class _UserMessageAction extends Message<_UserMessageAction> {
  declare userMessage?: UserMessage;
  declare requestContext?: RequestContext;
  declare sendToInteractionListener?: boolean;
  declare prependUserMessages: UserMessage[];
  declare interruptedPendingToolCallResolutions?: InterruptedPendingToolCallResolutions;
  declare conversationHistory?: ConversationHistory;
  constructor(data?: PartialMessage<_UserMessageAction>) {
    super();
    this.prependUserMessages = [];
    proto3.util.initPartial(data, this as _UserMessageAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserMessageAction {
    return new _UserMessageAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserMessageAction {
    return new _UserMessageAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserMessageAction {
    return new _UserMessageAction().fromJsonString(jsonString, options);
  }
  static equals(a: _UserMessageAction | PlainMessage<_UserMessageAction> | undefined | null, b2: _UserMessageAction | PlainMessage<_UserMessageAction> | undefined | null): boolean {
    return proto3.util.equals(_UserMessageAction as unknown as MessageType<_UserMessageAction>, a, b2);
  }
})();
export type UserMessageAction = InstanceType<typeof UserMessageAction$Runtime>;
var UserMessageAction: MessageType<UserMessageAction> = UserMessageAction$Runtime as unknown as MessageType<UserMessageAction>;
(UserMessageAction as MutableMessageType<UserMessageAction>).runtime = proto3;
(UserMessageAction as MutableMessageType<UserMessageAction>).typeName = "agent.v1.UserMessageAction";
(UserMessageAction as MutableMessageType<UserMessageAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "message", T: UserMessage },
  { no: 2, name: "request_context", kind: "message", T: RequestContext },
  { no: 3, name: "send_to_interaction_listener", kind: "scalar", T: 8, opt: true },
  { no: 4, name: "prepend_user_messages", kind: "message", T: UserMessage, repeated: true },
  { no: 6, name: "interrupted_pending_tool_call_resolutions", kind: "message", T: InterruptedPendingToolCallResolutions, opt: true },
  { no: 7, name: "conversation_history", kind: "message", T: ConversationHistory, opt: true }
]);
var SubscriptionNotificationAction$Runtime = (() => class _SubscriptionNotificationAction extends Message<_SubscriptionNotificationAction> {
  declare notifications: UserMessage[];
  declare requestContext?: RequestContext;
  declare sendToInteractionListener?: boolean;
  constructor(data?: PartialMessage<_SubscriptionNotificationAction>) {
    super();
    this.notifications = [];
    proto3.util.initPartial(data, this as _SubscriptionNotificationAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubscriptionNotificationAction {
    return new _SubscriptionNotificationAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubscriptionNotificationAction {
    return new _SubscriptionNotificationAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubscriptionNotificationAction {
    return new _SubscriptionNotificationAction().fromJsonString(jsonString, options);
  }
  static equals(a: _SubscriptionNotificationAction | PlainMessage<_SubscriptionNotificationAction> | undefined | null, b2: _SubscriptionNotificationAction | PlainMessage<_SubscriptionNotificationAction> | undefined | null): boolean {
    return proto3.util.equals(_SubscriptionNotificationAction as unknown as MessageType<_SubscriptionNotificationAction>, a, b2);
  }
})();
export type SubscriptionNotificationAction = InstanceType<typeof SubscriptionNotificationAction$Runtime>;
var SubscriptionNotificationAction: MessageType<SubscriptionNotificationAction> = SubscriptionNotificationAction$Runtime as unknown as MessageType<SubscriptionNotificationAction>;
(SubscriptionNotificationAction as MutableMessageType<SubscriptionNotificationAction>).runtime = proto3;
(SubscriptionNotificationAction as MutableMessageType<SubscriptionNotificationAction>).typeName = "agent.v1.SubscriptionNotificationAction";
(SubscriptionNotificationAction as MutableMessageType<SubscriptionNotificationAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "notifications", kind: "message", T: UserMessage, repeated: true },
  { no: 2, name: "request_context", kind: "message", T: RequestContext },
  { no: 3, name: "send_to_interaction_listener", kind: "scalar", T: 8, opt: true }
]);
var GoalContinuationAction$Runtime = (() => class _GoalContinuationAction extends Message<_GoalContinuationAction> {
  constructor(data?: PartialMessage<_GoalContinuationAction>) {
    super();
    proto3.util.initPartial(data, this as _GoalContinuationAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GoalContinuationAction {
    return new _GoalContinuationAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GoalContinuationAction {
    return new _GoalContinuationAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GoalContinuationAction {
    return new _GoalContinuationAction().fromJsonString(jsonString, options);
  }
  static equals(a: _GoalContinuationAction | PlainMessage<_GoalContinuationAction> | undefined | null, b2: _GoalContinuationAction | PlainMessage<_GoalContinuationAction> | undefined | null): boolean {
    return proto3.util.equals(_GoalContinuationAction as unknown as MessageType<_GoalContinuationAction>, a, b2);
  }
})();
export type GoalContinuationAction = InstanceType<typeof GoalContinuationAction$Runtime>;
var GoalContinuationAction: MessageType<GoalContinuationAction> = GoalContinuationAction$Runtime as unknown as MessageType<GoalContinuationAction>;
(GoalContinuationAction as MutableMessageType<GoalContinuationAction>).runtime = proto3;
(GoalContinuationAction as MutableMessageType<GoalContinuationAction>).typeName = "agent.v1.GoalContinuationAction";
(GoalContinuationAction as MutableMessageType<GoalContinuationAction>).fields = proto3.util.newFieldList(() => []);
var InjectContextAction$Runtime = (() => class _InjectContextAction extends Message<_InjectContextAction> {
  declare injectionId: string;
  declare expectedRunId: string;
  declare payload: { case: "userContext"; value: UserContextInjection } | { case: "systemContext"; value: SystemContextInjection } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InjectContextAction>) {
    super();
    this.injectionId = "";
    this.expectedRunId = "";
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _InjectContextAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InjectContextAction {
    return new _InjectContextAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InjectContextAction {
    return new _InjectContextAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InjectContextAction {
    return new _InjectContextAction().fromJsonString(jsonString, options);
  }
  static equals(a: _InjectContextAction | PlainMessage<_InjectContextAction> | undefined | null, b2: _InjectContextAction | PlainMessage<_InjectContextAction> | undefined | null): boolean {
    return proto3.util.equals(_InjectContextAction as unknown as MessageType<_InjectContextAction>, a, b2);
  }
})();
export type InjectContextAction = InstanceType<typeof InjectContextAction$Runtime>;
var InjectContextAction: MessageType<InjectContextAction> = InjectContextAction$Runtime as unknown as MessageType<InjectContextAction>;
(InjectContextAction as MutableMessageType<InjectContextAction>).runtime = proto3;
(InjectContextAction as MutableMessageType<InjectContextAction>).typeName = "agent.v1.InjectContextAction";
(InjectContextAction as MutableMessageType<InjectContextAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "injection_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "expected_run_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "user_context", kind: "message", T: UserContextInjection, oneof: "payload" },
  { no: 4, name: "system_context", kind: "message", T: SystemContextInjection, oneof: "payload" }
]);
var UserContextInjection$Runtime = (() => class _UserContextInjection extends Message<_UserContextInjection> {
  declare userMessage?: UserMessage;
  declare requestContext?: RequestContext;
  constructor(data?: PartialMessage<_UserContextInjection>) {
    super();
    proto3.util.initPartial(data, this as _UserContextInjection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserContextInjection {
    return new _UserContextInjection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserContextInjection {
    return new _UserContextInjection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserContextInjection {
    return new _UserContextInjection().fromJsonString(jsonString, options);
  }
  static equals(a: _UserContextInjection | PlainMessage<_UserContextInjection> | undefined | null, b2: _UserContextInjection | PlainMessage<_UserContextInjection> | undefined | null): boolean {
    return proto3.util.equals(_UserContextInjection as unknown as MessageType<_UserContextInjection>, a, b2);
  }
})();
export type UserContextInjection = InstanceType<typeof UserContextInjection$Runtime>;
var UserContextInjection: MessageType<UserContextInjection> = UserContextInjection$Runtime as unknown as MessageType<UserContextInjection>;
(UserContextInjection as MutableMessageType<UserContextInjection>).runtime = proto3;
(UserContextInjection as MutableMessageType<UserContextInjection>).typeName = "agent.v1.UserContextInjection";
(UserContextInjection as MutableMessageType<UserContextInjection>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "message", T: UserMessage },
  { no: 2, name: "request_context", kind: "message", T: RequestContext }
]);
var SystemContextInjection$Runtime = (() => class _SystemContextInjection extends Message<_SystemContextInjection> {
  declare producer: string;
  declare content: string;
  constructor(data?: PartialMessage<_SystemContextInjection>) {
    super();
    this.producer = "";
    this.content = "";
    proto3.util.initPartial(data, this as _SystemContextInjection);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SystemContextInjection {
    return new _SystemContextInjection().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SystemContextInjection {
    return new _SystemContextInjection().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SystemContextInjection {
    return new _SystemContextInjection().fromJsonString(jsonString, options);
  }
  static equals(a: _SystemContextInjection | PlainMessage<_SystemContextInjection> | undefined | null, b2: _SystemContextInjection | PlainMessage<_SystemContextInjection> | undefined | null): boolean {
    return proto3.util.equals(_SystemContextInjection as unknown as MessageType<_SystemContextInjection>, a, b2);
  }
})();
export type SystemContextInjection = InstanceType<typeof SystemContextInjection$Runtime>;
var SystemContextInjection: MessageType<SystemContextInjection> = SystemContextInjection$Runtime as unknown as MessageType<SystemContextInjection>;
(SystemContextInjection as MutableMessageType<SystemContextInjection>).runtime = proto3;
(SystemContextInjection as MutableMessageType<SystemContextInjection>).typeName = "agent.v1.SystemContextInjection";
(SystemContextInjection as MutableMessageType<SystemContextInjection>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "producer",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ContextInjectionState$Runtime = (() => class _ContextInjectionState extends Message<_ContextInjectionState> {
  declare state: { case: "queued"; value: ContextInjectionQueued } | { case: "delivered"; value: ContextInjectionDelivered } | { case: "queuedForNextTurn"; value: ContextInjectionQueuedForNextTurn } | { case: "cancelled"; value: ContextInjectionCancelled } | { case: "rejected"; value: ContextInjectionRejected } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ContextInjectionState>) {
    super();
    this.state = { case: void 0 };
    proto3.util.initPartial(data, this as _ContextInjectionState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionState {
    return new _ContextInjectionState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionState {
    return new _ContextInjectionState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionState {
    return new _ContextInjectionState().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionState | PlainMessage<_ContextInjectionState> | undefined | null, b2: _ContextInjectionState | PlainMessage<_ContextInjectionState> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionState as unknown as MessageType<_ContextInjectionState>, a, b2);
  }
})();
export type ContextInjectionState = InstanceType<typeof ContextInjectionState$Runtime>;
var ContextInjectionState: MessageType<ContextInjectionState> = ContextInjectionState$Runtime as unknown as MessageType<ContextInjectionState>;
(ContextInjectionState as MutableMessageType<ContextInjectionState>).runtime = proto3;
(ContextInjectionState as MutableMessageType<ContextInjectionState>).typeName = "agent.v1.ContextInjectionState";
(ContextInjectionState as MutableMessageType<ContextInjectionState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "queued", kind: "message", T: ContextInjectionQueued, oneof: "state" },
  { no: 2, name: "delivered", kind: "message", T: ContextInjectionDelivered, oneof: "state" },
  { no: 3, name: "queued_for_next_turn", kind: "message", T: ContextInjectionQueuedForNextTurn, oneof: "state" },
  { no: 4, name: "cancelled", kind: "message", T: ContextInjectionCancelled, oneof: "state" },
  { no: 5, name: "rejected", kind: "message", T: ContextInjectionRejected, oneof: "state" }
]);
var ContextInjectionQueued$Runtime = (() => class _ContextInjectionQueued extends Message<_ContextInjectionQueued> {
  constructor(data?: PartialMessage<_ContextInjectionQueued>) {
    super();
    proto3.util.initPartial(data, this as _ContextInjectionQueued);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionQueued {
    return new _ContextInjectionQueued().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionQueued {
    return new _ContextInjectionQueued().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionQueued {
    return new _ContextInjectionQueued().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionQueued | PlainMessage<_ContextInjectionQueued> | undefined | null, b2: _ContextInjectionQueued | PlainMessage<_ContextInjectionQueued> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionQueued as unknown as MessageType<_ContextInjectionQueued>, a, b2);
  }
})();
export type ContextInjectionQueued = InstanceType<typeof ContextInjectionQueued$Runtime>;
var ContextInjectionQueued: MessageType<ContextInjectionQueued> = ContextInjectionQueued$Runtime as unknown as MessageType<ContextInjectionQueued>;
(ContextInjectionQueued as MutableMessageType<ContextInjectionQueued>).runtime = proto3;
(ContextInjectionQueued as MutableMessageType<ContextInjectionQueued>).typeName = "agent.v1.ContextInjectionQueued";
(ContextInjectionQueued as MutableMessageType<ContextInjectionQueued>).fields = proto3.util.newFieldList(() => []);
var ContextInjectionDelivered$Runtime = (() => class _ContextInjectionDelivered extends Message<_ContextInjectionDelivered> {
  declare step: number;
  declare deliveryBatchId: string;
  declare deliveredAtMs: bigint;
  constructor(data?: PartialMessage<_ContextInjectionDelivered>) {
    super();
    this.step = 0;
    this.deliveryBatchId = "";
    this.deliveredAtMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _ContextInjectionDelivered);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionDelivered {
    return new _ContextInjectionDelivered().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionDelivered {
    return new _ContextInjectionDelivered().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionDelivered {
    return new _ContextInjectionDelivered().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionDelivered | PlainMessage<_ContextInjectionDelivered> | undefined | null, b2: _ContextInjectionDelivered | PlainMessage<_ContextInjectionDelivered> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionDelivered as unknown as MessageType<_ContextInjectionDelivered>, a, b2);
  }
})();
export type ContextInjectionDelivered = InstanceType<typeof ContextInjectionDelivered$Runtime>;
var ContextInjectionDelivered: MessageType<ContextInjectionDelivered> = ContextInjectionDelivered$Runtime as unknown as MessageType<ContextInjectionDelivered>;
(ContextInjectionDelivered as MutableMessageType<ContextInjectionDelivered>).runtime = proto3;
(ContextInjectionDelivered as MutableMessageType<ContextInjectionDelivered>).typeName = "agent.v1.ContextInjectionDelivered";
(ContextInjectionDelivered as MutableMessageType<ContextInjectionDelivered>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "step",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "delivery_batch_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "delivered_at_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var ContextInjectionQueuedForNextTurn$Runtime = (() => class _ContextInjectionQueuedForNextTurn extends Message<_ContextInjectionQueuedForNextTurn> {
  constructor(data?: PartialMessage<_ContextInjectionQueuedForNextTurn>) {
    super();
    proto3.util.initPartial(data, this as _ContextInjectionQueuedForNextTurn);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionQueuedForNextTurn {
    return new _ContextInjectionQueuedForNextTurn().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionQueuedForNextTurn {
    return new _ContextInjectionQueuedForNextTurn().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionQueuedForNextTurn {
    return new _ContextInjectionQueuedForNextTurn().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionQueuedForNextTurn | PlainMessage<_ContextInjectionQueuedForNextTurn> | undefined | null, b2: _ContextInjectionQueuedForNextTurn | PlainMessage<_ContextInjectionQueuedForNextTurn> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionQueuedForNextTurn as unknown as MessageType<_ContextInjectionQueuedForNextTurn>, a, b2);
  }
})();
export type ContextInjectionQueuedForNextTurn = InstanceType<typeof ContextInjectionQueuedForNextTurn$Runtime>;
var ContextInjectionQueuedForNextTurn: MessageType<ContextInjectionQueuedForNextTurn> = ContextInjectionQueuedForNextTurn$Runtime as unknown as MessageType<ContextInjectionQueuedForNextTurn>;
(ContextInjectionQueuedForNextTurn as MutableMessageType<ContextInjectionQueuedForNextTurn>).runtime = proto3;
(ContextInjectionQueuedForNextTurn as MutableMessageType<ContextInjectionQueuedForNextTurn>).typeName = "agent.v1.ContextInjectionQueuedForNextTurn";
(ContextInjectionQueuedForNextTurn as MutableMessageType<ContextInjectionQueuedForNextTurn>).fields = proto3.util.newFieldList(() => []);
var ContextInjectionCancelled$Runtime = (() => class _ContextInjectionCancelled extends Message<_ContextInjectionCancelled> {
  constructor(data?: PartialMessage<_ContextInjectionCancelled>) {
    super();
    proto3.util.initPartial(data, this as _ContextInjectionCancelled);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionCancelled {
    return new _ContextInjectionCancelled().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionCancelled {
    return new _ContextInjectionCancelled().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionCancelled {
    return new _ContextInjectionCancelled().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionCancelled | PlainMessage<_ContextInjectionCancelled> | undefined | null, b2: _ContextInjectionCancelled | PlainMessage<_ContextInjectionCancelled> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionCancelled as unknown as MessageType<_ContextInjectionCancelled>, a, b2);
  }
})();
export type ContextInjectionCancelled = InstanceType<typeof ContextInjectionCancelled$Runtime>;
var ContextInjectionCancelled: MessageType<ContextInjectionCancelled> = ContextInjectionCancelled$Runtime as unknown as MessageType<ContextInjectionCancelled>;
(ContextInjectionCancelled as MutableMessageType<ContextInjectionCancelled>).runtime = proto3;
(ContextInjectionCancelled as MutableMessageType<ContextInjectionCancelled>).typeName = "agent.v1.ContextInjectionCancelled";
(ContextInjectionCancelled as MutableMessageType<ContextInjectionCancelled>).fields = proto3.util.newFieldList(() => []);
var ContextInjectionRejected$Runtime = (() => class _ContextInjectionRejected extends Message<_ContextInjectionRejected> {
  declare reason: string;
  constructor(data?: PartialMessage<_ContextInjectionRejected>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _ContextInjectionRejected);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionRejected {
    return new _ContextInjectionRejected().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionRejected {
    return new _ContextInjectionRejected().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionRejected {
    return new _ContextInjectionRejected().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionRejected | PlainMessage<_ContextInjectionRejected> | undefined | null, b2: _ContextInjectionRejected | PlainMessage<_ContextInjectionRejected> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionRejected as unknown as MessageType<_ContextInjectionRejected>, a, b2);
  }
})();
export type ContextInjectionRejected = InstanceType<typeof ContextInjectionRejected$Runtime>;
var ContextInjectionRejected: MessageType<ContextInjectionRejected> = ContextInjectionRejected$Runtime as unknown as MessageType<ContextInjectionRejected>;
(ContextInjectionRejected as MutableMessageType<ContextInjectionRejected>).runtime = proto3;
(ContextInjectionRejected as MutableMessageType<ContextInjectionRejected>).typeName = "agent.v1.ContextInjectionRejected";
(ContextInjectionRejected as MutableMessageType<ContextInjectionRejected>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SubmittedCustomMode$Runtime = (() => class _SubmittedCustomMode extends Message<_SubmittedCustomMode> {
  declare id: string;
  declare label: string;
  declare source: CustomModeSource;
  declare sourcePath?: string;
  declare sourceHash?: string;
  declare managedSkillId?: string;
  declare pluginId?: string;
  declare pluginSnapshotToken?: string;
  constructor(data?: PartialMessage<_SubmittedCustomMode>) {
    super();
    this.id = "";
    this.label = "";
    this.source = CustomModeSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SubmittedCustomMode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmittedCustomMode {
    return new _SubmittedCustomMode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmittedCustomMode {
    return new _SubmittedCustomMode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmittedCustomMode {
    return new _SubmittedCustomMode().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmittedCustomMode | PlainMessage<_SubmittedCustomMode> | undefined | null, b2: _SubmittedCustomMode | PlainMessage<_SubmittedCustomMode> | undefined | null): boolean {
    return proto3.util.equals(_SubmittedCustomMode as unknown as MessageType<_SubmittedCustomMode>, a, b2);
  }
})();
export type SubmittedCustomMode = InstanceType<typeof SubmittedCustomMode$Runtime>;
var SubmittedCustomMode: MessageType<SubmittedCustomMode> = SubmittedCustomMode$Runtime as unknown as MessageType<SubmittedCustomMode>;
(SubmittedCustomMode as MutableMessageType<SubmittedCustomMode>).runtime = proto3;
(SubmittedCustomMode as MutableMessageType<SubmittedCustomMode>).typeName = "agent.v1.SubmittedCustomMode";
(SubmittedCustomMode as MutableMessageType<SubmittedCustomMode>).fields = proto3.util.newFieldList(() => [
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
  },
  { no: 5, name: "source", kind: "enum", T: proto3.getEnumType(CustomModeSource) },
  { no: 6, name: "source_path", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "source_hash", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "managed_skill_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "plugin_snapshot_token", kind: "scalar", T: 9, opt: true }
]);
var CustomModeDescriptor$Runtime = (() => class _CustomModeDescriptor extends Message<_CustomModeDescriptor> {
  declare id: string;
  declare label: string;
  declare description?: string;
  declare icon?: string;
  declare color?: string;
  declare source: CustomModeSource;
  declare sourcePath?: string;
  declare sourceHash?: string;
  declare managedSkillId?: string;
  declare pluginId?: string;
  declare pluginSnapshotToken?: string;
  constructor(data?: PartialMessage<_CustomModeDescriptor>) {
    super();
    this.id = "";
    this.label = "";
    this.source = CustomModeSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CustomModeDescriptor);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomModeDescriptor {
    return new _CustomModeDescriptor().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomModeDescriptor {
    return new _CustomModeDescriptor().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomModeDescriptor {
    return new _CustomModeDescriptor().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomModeDescriptor | PlainMessage<_CustomModeDescriptor> | undefined | null, b2: _CustomModeDescriptor | PlainMessage<_CustomModeDescriptor> | undefined | null): boolean {
    return proto3.util.equals(_CustomModeDescriptor as unknown as MessageType<_CustomModeDescriptor>, a, b2);
  }
})();
export type CustomModeDescriptor = InstanceType<typeof CustomModeDescriptor$Runtime>;
var CustomModeDescriptor: MessageType<CustomModeDescriptor> = CustomModeDescriptor$Runtime as unknown as MessageType<CustomModeDescriptor>;
(CustomModeDescriptor as MutableMessageType<CustomModeDescriptor>).runtime = proto3;
(CustomModeDescriptor as MutableMessageType<CustomModeDescriptor>).typeName = "agent.v1.CustomModeDescriptor";
(CustomModeDescriptor as MutableMessageType<CustomModeDescriptor>).fields = proto3.util.newFieldList(() => [
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
  },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "icon", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "color", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "source", kind: "enum", T: proto3.getEnumType(CustomModeSource) },
  { no: 7, name: "source_path", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "source_hash", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "managed_skill_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "plugin_snapshot_token", kind: "scalar", T: 9, opt: true }
]);
var SubmittedExitedCustomMode$Runtime = (() => class _SubmittedExitedCustomMode extends Message<_SubmittedExitedCustomMode> {
  declare id: string;
  declare label: string;
  constructor(data?: PartialMessage<_SubmittedExitedCustomMode>) {
    super();
    this.id = "";
    this.label = "";
    proto3.util.initPartial(data, this as _SubmittedExitedCustomMode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubmittedExitedCustomMode {
    return new _SubmittedExitedCustomMode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubmittedExitedCustomMode {
    return new _SubmittedExitedCustomMode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubmittedExitedCustomMode {
    return new _SubmittedExitedCustomMode().fromJsonString(jsonString, options);
  }
  static equals(a: _SubmittedExitedCustomMode | PlainMessage<_SubmittedExitedCustomMode> | undefined | null, b2: _SubmittedExitedCustomMode | PlainMessage<_SubmittedExitedCustomMode> | undefined | null): boolean {
    return proto3.util.equals(_SubmittedExitedCustomMode as unknown as MessageType<_SubmittedExitedCustomMode>, a, b2);
  }
})();
export type SubmittedExitedCustomMode = InstanceType<typeof SubmittedExitedCustomMode$Runtime>;
var SubmittedExitedCustomMode: MessageType<SubmittedExitedCustomMode> = SubmittedExitedCustomMode$Runtime as unknown as MessageType<SubmittedExitedCustomMode>;
(SubmittedExitedCustomMode as MutableMessageType<SubmittedExitedCustomMode>).runtime = proto3;
(SubmittedExitedCustomMode as MutableMessageType<SubmittedExitedCustomMode>).typeName = "agent.v1.SubmittedExitedCustomMode";
(SubmittedExitedCustomMode as MutableMessageType<SubmittedExitedCustomMode>).fields = proto3.util.newFieldList(() => [
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
var CustomModeExitIntent$Runtime = (() => class _CustomModeExitIntent extends Message<_CustomModeExitIntent> {
  declare nextMode: AgentMode;
  declare exitedMode?: SubmittedExitedCustomMode;
  constructor(data?: PartialMessage<_CustomModeExitIntent>) {
    super();
    this.nextMode = AgentMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CustomModeExitIntent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomModeExitIntent {
    return new _CustomModeExitIntent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomModeExitIntent {
    return new _CustomModeExitIntent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomModeExitIntent {
    return new _CustomModeExitIntent().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomModeExitIntent | PlainMessage<_CustomModeExitIntent> | undefined | null, b2: _CustomModeExitIntent | PlainMessage<_CustomModeExitIntent> | undefined | null): boolean {
    return proto3.util.equals(_CustomModeExitIntent as unknown as MessageType<_CustomModeExitIntent>, a, b2);
  }
})();
export type CustomModeExitIntent = InstanceType<typeof CustomModeExitIntent$Runtime>;
var CustomModeExitIntent: MessageType<CustomModeExitIntent> = CustomModeExitIntent$Runtime as unknown as MessageType<CustomModeExitIntent>;
(CustomModeExitIntent as MutableMessageType<CustomModeExitIntent>).runtime = proto3;
(CustomModeExitIntent as MutableMessageType<CustomModeExitIntent>).typeName = "agent.v1.CustomModeExitIntent";
(CustomModeExitIntent as MutableMessageType<CustomModeExitIntent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "next_mode", kind: "enum", T: proto3.getEnumType(AgentMode) },
  { no: 2, name: "exited_mode", kind: "message", T: SubmittedExitedCustomMode }
]);
var CustomModeIntent$Runtime = (() => class _CustomModeIntent extends Message<_CustomModeIntent> {
  declare intent: { case: "enter"; value: SubmittedCustomMode } | { case: "exit"; value: CustomModeExitIntent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_CustomModeIntent>) {
    super();
    this.intent = { case: void 0 };
    proto3.util.initPartial(data, this as _CustomModeIntent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CustomModeIntent {
    return new _CustomModeIntent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CustomModeIntent {
    return new _CustomModeIntent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CustomModeIntent {
    return new _CustomModeIntent().fromJsonString(jsonString, options);
  }
  static equals(a: _CustomModeIntent | PlainMessage<_CustomModeIntent> | undefined | null, b2: _CustomModeIntent | PlainMessage<_CustomModeIntent> | undefined | null): boolean {
    return proto3.util.equals(_CustomModeIntent as unknown as MessageType<_CustomModeIntent>, a, b2);
  }
})();
export type CustomModeIntent = InstanceType<typeof CustomModeIntent$Runtime>;
var CustomModeIntent: MessageType<CustomModeIntent> = CustomModeIntent$Runtime as unknown as MessageType<CustomModeIntent>;
(CustomModeIntent as MutableMessageType<CustomModeIntent>).runtime = proto3;
(CustomModeIntent as MutableMessageType<CustomModeIntent>).typeName = "agent.v1.CustomModeIntent";
(CustomModeIntent as MutableMessageType<CustomModeIntent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "enter", kind: "message", T: SubmittedCustomMode, oneof: "intent" },
  { no: 2, name: "exit", kind: "message", T: CustomModeExitIntent, oneof: "intent" }
]);
var CancelAction$Runtime = (() => class _CancelAction extends Message<_CancelAction> {
  declare reason: string;
  declare interruptedPendingToolCallResolutions?: InterruptedPendingToolCallResolutions;
  constructor(data?: PartialMessage<_CancelAction>) {
    super();
    this.reason = "";
    proto3.util.initPartial(data, this as _CancelAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CancelAction {
    return new _CancelAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CancelAction {
    return new _CancelAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CancelAction {
    return new _CancelAction().fromJsonString(jsonString, options);
  }
  static equals(a: _CancelAction | PlainMessage<_CancelAction> | undefined | null, b2: _CancelAction | PlainMessage<_CancelAction> | undefined | null): boolean {
    return proto3.util.equals(_CancelAction as unknown as MessageType<_CancelAction>, a, b2);
  }
})();
export type CancelAction = InstanceType<typeof CancelAction$Runtime>;
var CancelAction: MessageType<CancelAction> = CancelAction$Runtime as unknown as MessageType<CancelAction>;
(CancelAction as MutableMessageType<CancelAction>).runtime = proto3;
(CancelAction as MutableMessageType<CancelAction>).typeName = "agent.v1.CancelAction";
(CancelAction as MutableMessageType<CancelAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "reason",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "interrupted_pending_tool_call_resolutions", kind: "message", T: InterruptedPendingToolCallResolutions, opt: true }
]);
var ResumeAction$Runtime = (() => class _ResumeAction extends Message<_ResumeAction> {
  declare requestContext?: RequestContext;
  constructor(data?: PartialMessage<_ResumeAction>) {
    super();
    proto3.util.initPartial(data, this as _ResumeAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResumeAction {
    return new _ResumeAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResumeAction {
    return new _ResumeAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResumeAction {
    return new _ResumeAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ResumeAction | PlainMessage<_ResumeAction> | undefined | null, b2: _ResumeAction | PlainMessage<_ResumeAction> | undefined | null): boolean {
    return proto3.util.equals(_ResumeAction as unknown as MessageType<_ResumeAction>, a, b2);
  }
})();
export type ResumeAction = InstanceType<typeof ResumeAction$Runtime>;
var ResumeAction: MessageType<ResumeAction> = ResumeAction$Runtime as unknown as MessageType<ResumeAction>;
(ResumeAction as MutableMessageType<ResumeAction>).runtime = proto3;
(ResumeAction as MutableMessageType<ResumeAction>).typeName = "agent.v1.ResumeAction";
(ResumeAction as MutableMessageType<ResumeAction>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "request_context", kind: "message", T: RequestContext }
]);
var AsyncAskQuestionCompletionAction$Runtime = (() => class _AsyncAskQuestionCompletionAction extends Message<_AsyncAskQuestionCompletionAction> {
  declare originalToolCallId: string;
  declare originalArgs?: AskQuestionArgs;
  declare result?: AskQuestionResult;
  constructor(data?: PartialMessage<_AsyncAskQuestionCompletionAction>) {
    super();
    this.originalToolCallId = "";
    proto3.util.initPartial(data, this as _AsyncAskQuestionCompletionAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AsyncAskQuestionCompletionAction {
    return new _AsyncAskQuestionCompletionAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AsyncAskQuestionCompletionAction {
    return new _AsyncAskQuestionCompletionAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AsyncAskQuestionCompletionAction {
    return new _AsyncAskQuestionCompletionAction().fromJsonString(jsonString, options);
  }
  static equals(a: _AsyncAskQuestionCompletionAction | PlainMessage<_AsyncAskQuestionCompletionAction> | undefined | null, b2: _AsyncAskQuestionCompletionAction | PlainMessage<_AsyncAskQuestionCompletionAction> | undefined | null): boolean {
    return proto3.util.equals(_AsyncAskQuestionCompletionAction as unknown as MessageType<_AsyncAskQuestionCompletionAction>, a, b2);
  }
})();
export type AsyncAskQuestionCompletionAction = InstanceType<typeof AsyncAskQuestionCompletionAction$Runtime>;
var AsyncAskQuestionCompletionAction: MessageType<AsyncAskQuestionCompletionAction> = AsyncAskQuestionCompletionAction$Runtime as unknown as MessageType<AsyncAskQuestionCompletionAction>;
(AsyncAskQuestionCompletionAction as MutableMessageType<AsyncAskQuestionCompletionAction>).runtime = proto3;
(AsyncAskQuestionCompletionAction as MutableMessageType<AsyncAskQuestionCompletionAction>).typeName = "agent.v1.AsyncAskQuestionCompletionAction";
(AsyncAskQuestionCompletionAction as MutableMessageType<AsyncAskQuestionCompletionAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "original_tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "original_args", kind: "message", T: AskQuestionArgs },
  { no: 3, name: "result", kind: "message", T: AskQuestionResult }
]);
var SummarizeAction$Runtime = (() => class _SummarizeAction extends Message<_SummarizeAction> {
  constructor(data?: PartialMessage<_SummarizeAction>) {
    super();
    proto3.util.initPartial(data, this as _SummarizeAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummarizeAction {
    return new _SummarizeAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummarizeAction {
    return new _SummarizeAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummarizeAction {
    return new _SummarizeAction().fromJsonString(jsonString, options);
  }
  static equals(a: _SummarizeAction | PlainMessage<_SummarizeAction> | undefined | null, b2: _SummarizeAction | PlainMessage<_SummarizeAction> | undefined | null): boolean {
    return proto3.util.equals(_SummarizeAction as unknown as MessageType<_SummarizeAction>, a, b2);
  }
})();
export type SummarizeAction = InstanceType<typeof SummarizeAction$Runtime>;
var SummarizeAction: MessageType<SummarizeAction> = SummarizeAction$Runtime as unknown as MessageType<SummarizeAction>;
(SummarizeAction as MutableMessageType<SummarizeAction>).runtime = proto3;
(SummarizeAction as MutableMessageType<SummarizeAction>).typeName = "agent.v1.SummarizeAction";
(SummarizeAction as MutableMessageType<SummarizeAction>).fields = proto3.util.newFieldList(() => []);
var ShellCommandAction$Runtime = (() => class _ShellCommandAction extends Message<_ShellCommandAction> {
  declare shellCommand?: ShellCommand;
  declare execId: string;
  constructor(data?: PartialMessage<_ShellCommandAction>) {
    super();
    this.execId = "";
    proto3.util.initPartial(data, this as _ShellCommandAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommandAction {
    return new _ShellCommandAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommandAction {
    return new _ShellCommandAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommandAction {
    return new _ShellCommandAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommandAction | PlainMessage<_ShellCommandAction> | undefined | null, b2: _ShellCommandAction | PlainMessage<_ShellCommandAction> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommandAction as unknown as MessageType<_ShellCommandAction>, a, b2);
  }
})();
export type ShellCommandAction = InstanceType<typeof ShellCommandAction$Runtime>;
var ShellCommandAction: MessageType<ShellCommandAction> = ShellCommandAction$Runtime as unknown as MessageType<ShellCommandAction>;
(ShellCommandAction as MutableMessageType<ShellCommandAction>).runtime = proto3;
(ShellCommandAction as MutableMessageType<ShellCommandAction>).typeName = "agent.v1.ShellCommandAction";
(ShellCommandAction as MutableMessageType<ShellCommandAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "shell_command", kind: "message", T: ShellCommand },
  {
    no: 2,
    name: "exec_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var StartPlanAction$Runtime = (() => class _StartPlanAction extends Message<_StartPlanAction> {
  declare userMessage?: UserMessage;
  declare requestContext?: RequestContext;
  declare isSpec: boolean;
  constructor(data?: PartialMessage<_StartPlanAction>) {
    super();
    this.isSpec = false;
    proto3.util.initPartial(data, this as _StartPlanAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StartPlanAction {
    return new _StartPlanAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StartPlanAction {
    return new _StartPlanAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StartPlanAction {
    return new _StartPlanAction().fromJsonString(jsonString, options);
  }
  static equals(a: _StartPlanAction | PlainMessage<_StartPlanAction> | undefined | null, b2: _StartPlanAction | PlainMessage<_StartPlanAction> | undefined | null): boolean {
    return proto3.util.equals(_StartPlanAction as unknown as MessageType<_StartPlanAction>, a, b2);
  }
})();
export type StartPlanAction = InstanceType<typeof StartPlanAction$Runtime>;
var StartPlanAction: MessageType<StartPlanAction> = StartPlanAction$Runtime as unknown as MessageType<StartPlanAction>;
(StartPlanAction as MutableMessageType<StartPlanAction>).runtime = proto3;
(StartPlanAction as MutableMessageType<StartPlanAction>).typeName = "agent.v1.StartPlanAction";
(StartPlanAction as MutableMessageType<StartPlanAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "message", T: UserMessage },
  { no: 2, name: "request_context", kind: "message", T: RequestContext },
  {
    no: 3,
    name: "is_spec",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ExecutePlanAction$Runtime = (() => class _ExecutePlanAction extends Message<_ExecutePlanAction> {
  declare requestContext?: RequestContext;
  declare plan?: ConversationPlan;
  declare planFileUri?: string;
  declare planFileContent?: string;
  declare executionMode: AgentMode;
  declare kickoffMessageId?: string;
  declare planId?: string;
  declare planFilePath?: string;
  constructor(data?: PartialMessage<_ExecutePlanAction>) {
    super();
    this.executionMode = AgentMode.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ExecutePlanAction);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExecutePlanAction {
    return new _ExecutePlanAction().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExecutePlanAction {
    return new _ExecutePlanAction().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExecutePlanAction {
    return new _ExecutePlanAction().fromJsonString(jsonString, options);
  }
  static equals(a: _ExecutePlanAction | PlainMessage<_ExecutePlanAction> | undefined | null, b2: _ExecutePlanAction | PlainMessage<_ExecutePlanAction> | undefined | null): boolean {
    return proto3.util.equals(_ExecutePlanAction as unknown as MessageType<_ExecutePlanAction>, a, b2);
  }
})();
export type ExecutePlanAction = InstanceType<typeof ExecutePlanAction$Runtime>;
var ExecutePlanAction: MessageType<ExecutePlanAction> = ExecutePlanAction$Runtime as unknown as MessageType<ExecutePlanAction>;
(ExecutePlanAction as MutableMessageType<ExecutePlanAction>).runtime = proto3;
(ExecutePlanAction as MutableMessageType<ExecutePlanAction>).typeName = "agent.v1.ExecutePlanAction";
(ExecutePlanAction as MutableMessageType<ExecutePlanAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "request_context", kind: "message", T: RequestContext },
  { no: 2, name: "plan", kind: "message", T: ConversationPlan, opt: true },
  { no: 3, name: "plan_file_uri", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "plan_file_content", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "execution_mode", kind: "enum", T: proto3.getEnumType(AgentMode) },
  { no: 6, name: "kickoff_message_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "plan_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "plan_file_path", kind: "scalar", T: 9, opt: true }
]);
var SubscriptionEventDisplay$Runtime = (() => class _SubscriptionEventDisplay extends Message<_SubscriptionEventDisplay> {
  declare displayLabel?: string;
  declare resourceUrl?: string;
  declare subscriptionId?: string;
  constructor(data?: PartialMessage<_SubscriptionEventDisplay>) {
    super();
    proto3.util.initPartial(data, this as _SubscriptionEventDisplay);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubscriptionEventDisplay {
    return new _SubscriptionEventDisplay().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubscriptionEventDisplay {
    return new _SubscriptionEventDisplay().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubscriptionEventDisplay {
    return new _SubscriptionEventDisplay().fromJsonString(jsonString, options);
  }
  static equals(a: _SubscriptionEventDisplay | PlainMessage<_SubscriptionEventDisplay> | undefined | null, b2: _SubscriptionEventDisplay | PlainMessage<_SubscriptionEventDisplay> | undefined | null): boolean {
    return proto3.util.equals(_SubscriptionEventDisplay as unknown as MessageType<_SubscriptionEventDisplay>, a, b2);
  }
})();
export type SubscriptionEventDisplay = InstanceType<typeof SubscriptionEventDisplay$Runtime>;
var SubscriptionEventDisplay: MessageType<SubscriptionEventDisplay> = SubscriptionEventDisplay$Runtime as unknown as MessageType<SubscriptionEventDisplay>;
(SubscriptionEventDisplay as MutableMessageType<SubscriptionEventDisplay>).runtime = proto3;
(SubscriptionEventDisplay as MutableMessageType<SubscriptionEventDisplay>).typeName = "agent.v1.SubscriptionEventDisplay";
(SubscriptionEventDisplay as MutableMessageType<SubscriptionEventDisplay>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "display_label", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "resource_url", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "subscription_id", kind: "scalar", T: 9, opt: true }
]);
var UserDisplayInfo$Runtime = (() => class _UserDisplayInfo extends Message<_UserDisplayInfo> {
  declare userId: number;
  declare displayName?: string;
  declare email?: string;
  declare profilePictureUrl?: string;
  constructor(data?: PartialMessage<_UserDisplayInfo>) {
    super();
    this.userId = 0;
    proto3.util.initPartial(data, this as _UserDisplayInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserDisplayInfo {
    return new _UserDisplayInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserDisplayInfo {
    return new _UserDisplayInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserDisplayInfo {
    return new _UserDisplayInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _UserDisplayInfo | PlainMessage<_UserDisplayInfo> | undefined | null, b2: _UserDisplayInfo | PlainMessage<_UserDisplayInfo> | undefined | null): boolean {
    return proto3.util.equals(_UserDisplayInfo as unknown as MessageType<_UserDisplayInfo>, a, b2);
  }
})();
export type UserDisplayInfo = InstanceType<typeof UserDisplayInfo$Runtime>;
var UserDisplayInfo: MessageType<UserDisplayInfo> = UserDisplayInfo$Runtime as unknown as MessageType<UserDisplayInfo>;
(UserDisplayInfo as MutableMessageType<UserDisplayInfo>).runtime = proto3;
(UserDisplayInfo as MutableMessageType<UserDisplayInfo>).typeName = "agent.v1.UserDisplayInfo";
(UserDisplayInfo as MutableMessageType<UserDisplayInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 2, name: "display_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "email", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "profile_picture_url", kind: "scalar", T: 9, opt: true }
]);
var ExecutePlanInfo$Runtime = (() => class _ExecutePlanInfo extends Message<_ExecutePlanInfo> {
  declare planId: string;
  declare planTitle: string;
  constructor(data?: PartialMessage<_ExecutePlanInfo>) {
    super();
    this.planId = "";
    this.planTitle = "";
    proto3.util.initPartial(data, this as _ExecutePlanInfo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ExecutePlanInfo {
    return new _ExecutePlanInfo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ExecutePlanInfo {
    return new _ExecutePlanInfo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ExecutePlanInfo {
    return new _ExecutePlanInfo().fromJsonString(jsonString, options);
  }
  static equals(a: _ExecutePlanInfo | PlainMessage<_ExecutePlanInfo> | undefined | null, b2: _ExecutePlanInfo | PlainMessage<_ExecutePlanInfo> | undefined | null): boolean {
    return proto3.util.equals(_ExecutePlanInfo as unknown as MessageType<_ExecutePlanInfo>, a, b2);
  }
})();
export type ExecutePlanInfo = InstanceType<typeof ExecutePlanInfo$Runtime>;
var ExecutePlanInfo: MessageType<ExecutePlanInfo> = ExecutePlanInfo$Runtime as unknown as MessageType<ExecutePlanInfo>;
(ExecutePlanInfo as MutableMessageType<ExecutePlanInfo>).runtime = proto3;
(ExecutePlanInfo as MutableMessageType<ExecutePlanInfo>).typeName = "agent.v1.ExecutePlanInfo";
(ExecutePlanInfo as MutableMessageType<ExecutePlanInfo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "plan_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ProjectDetails$Runtime = (() => class _ProjectDetails extends Message<_ProjectDetails> {
  declare name?: string;
  declare subagent?: ProjectSubagentDetails;
  declare sideChat?: ProjectSideChatDetails;
  constructor(data?: PartialMessage<_ProjectDetails>) {
    super();
    proto3.util.initPartial(data, this as _ProjectDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectDetails {
    return new _ProjectDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectDetails {
    return new _ProjectDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectDetails {
    return new _ProjectDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectDetails | PlainMessage<_ProjectDetails> | undefined | null, b2: _ProjectDetails | PlainMessage<_ProjectDetails> | undefined | null): boolean {
    return proto3.util.equals(_ProjectDetails as unknown as MessageType<_ProjectDetails>, a, b2);
  }
})();
export type ProjectDetails = InstanceType<typeof ProjectDetails$Runtime>;
var ProjectDetails: MessageType<ProjectDetails> = ProjectDetails$Runtime as unknown as MessageType<ProjectDetails>;
(ProjectDetails as MutableMessageType<ProjectDetails>).runtime = proto3;
(ProjectDetails as MutableMessageType<ProjectDetails>).typeName = "agent.v1.ProjectDetails";
(ProjectDetails as MutableMessageType<ProjectDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "subagent", kind: "message", T: ProjectSubagentDetails, opt: true },
  { no: 3, name: "side_chat", kind: "message", T: ProjectSideChatDetails, opt: true }
]);
var ProjectSubagentDetails$Runtime = (() => class _ProjectSubagentDetails extends Message<_ProjectSubagentDetails> {
  declare storeDir?: string;
  constructor(data?: PartialMessage<_ProjectSubagentDetails>) {
    super();
    proto3.util.initPartial(data, this as _ProjectSubagentDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectSubagentDetails {
    return new _ProjectSubagentDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectSubagentDetails {
    return new _ProjectSubagentDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectSubagentDetails {
    return new _ProjectSubagentDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectSubagentDetails | PlainMessage<_ProjectSubagentDetails> | undefined | null, b2: _ProjectSubagentDetails | PlainMessage<_ProjectSubagentDetails> | undefined | null): boolean {
    return proto3.util.equals(_ProjectSubagentDetails as unknown as MessageType<_ProjectSubagentDetails>, a, b2);
  }
})();
export type ProjectSubagentDetails = InstanceType<typeof ProjectSubagentDetails$Runtime>;
var ProjectSubagentDetails: MessageType<ProjectSubagentDetails> = ProjectSubagentDetails$Runtime as unknown as MessageType<ProjectSubagentDetails>;
(ProjectSubagentDetails as MutableMessageType<ProjectSubagentDetails>).runtime = proto3;
(ProjectSubagentDetails as MutableMessageType<ProjectSubagentDetails>).typeName = "agent.v1.ProjectSubagentDetails";
(ProjectSubagentDetails as MutableMessageType<ProjectSubagentDetails>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "store_dir", kind: "scalar", T: 9, opt: true }
]);
var ProjectSideChatDetails$Runtime = (() => class _ProjectSideChatDetails extends Message<_ProjectSideChatDetails> {
  declare storeDir: string;
  constructor(data?: PartialMessage<_ProjectSideChatDetails>) {
    super();
    this.storeDir = "";
    proto3.util.initPartial(data, this as _ProjectSideChatDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ProjectSideChatDetails {
    return new _ProjectSideChatDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ProjectSideChatDetails {
    return new _ProjectSideChatDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ProjectSideChatDetails {
    return new _ProjectSideChatDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ProjectSideChatDetails | PlainMessage<_ProjectSideChatDetails> | undefined | null, b2: _ProjectSideChatDetails | PlainMessage<_ProjectSideChatDetails> | undefined | null): boolean {
    return proto3.util.equals(_ProjectSideChatDetails as unknown as MessageType<_ProjectSideChatDetails>, a, b2);
  }
})();
export type ProjectSideChatDetails = InstanceType<typeof ProjectSideChatDetails$Runtime>;
var ProjectSideChatDetails: MessageType<ProjectSideChatDetails> = ProjectSideChatDetails$Runtime as unknown as MessageType<ProjectSideChatDetails>;
(ProjectSideChatDetails as MutableMessageType<ProjectSideChatDetails>).runtime = proto3;
(ProjectSideChatDetails as MutableMessageType<ProjectSideChatDetails>).typeName = "agent.v1.ProjectSideChatDetails";
(ProjectSideChatDetails as MutableMessageType<ProjectSideChatDetails>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "store_dir",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var UserMessage$Runtime = (() => class _UserMessage extends Message<_UserMessage> {
  declare text: string;
  declare messageId: string;
  declare selectedContext?: SelectedContext;
  declare mode: AgentMode;
  declare isSimulatedMsg?: boolean;
  declare bestOfNGroupId?: string;
  declare tryUseBestOfNPromotion?: boolean;
  declare richText?: string;
  declare simulatedMsgReason?: SimulatedMsgReason;
  declare conversationStateBlobId: Uint8Array;
  declare subagentSystemReminder?: string;
  declare triggeringUserInfo?: TriggeringUserInfo;
  declare executePlanInfo?: ExecutePlanInfo;
  declare simulatedMessageMetadata?: UserMessage_SimulatedMessageMetadata;
  declare promptReferenceId?: string;
  declare threadId?: string;
  declare textBlobId?: Uint8Array;
  declare richTextBlobId?: Uint8Array;
  declare hookAdditionalContexts: HookAdditionalContext[];
  declare customModeIntent?: CustomModeIntent;
  declare projectDetails?: ProjectDetails;
  constructor(data?: PartialMessage<_UserMessage>) {
    super();
    this.text = "";
    this.messageId = "";
    this.mode = AgentMode.UNSPECIFIED;
    this.conversationStateBlobId = new Uint8Array(0);
    this.hookAdditionalContexts = [];
    proto3.util.initPartial(data, this as _UserMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserMessage {
    return new _UserMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserMessage {
    return new _UserMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserMessage {
    return new _UserMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _UserMessage | PlainMessage<_UserMessage> | undefined | null, b2: _UserMessage | PlainMessage<_UserMessage> | undefined | null): boolean {
    return proto3.util.equals(_UserMessage as unknown as MessageType<_UserMessage>, a, b2);
  }
})();
export type UserMessage = InstanceType<typeof UserMessage$Runtime>;
var UserMessage: MessageType<UserMessage> = UserMessage$Runtime as unknown as MessageType<UserMessage>;
(UserMessage as MutableMessageType<UserMessage>).runtime = proto3;
(UserMessage as MutableMessageType<UserMessage>).typeName = "agent.v1.UserMessage";
(UserMessage as MutableMessageType<UserMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "selected_context", kind: "message", T: SelectedContext, opt: true },
  { no: 4, name: "mode", kind: "enum", T: proto3.getEnumType(AgentMode) },
  { no: 5, name: "is_simulated_msg", kind: "scalar", T: 8, opt: true },
  { no: 6, name: "best_of_n_group_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "try_use_best_of_n_promotion", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "rich_text", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "simulated_msg_reason", kind: "enum", T: proto3.getEnumType(SimulatedMsgReason), opt: true },
  {
    no: 10,
    name: "conversation_state_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 11, name: "subagent_system_reminder", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "triggering_user_info", kind: "message", T: TriggeringUserInfo, opt: true },
  { no: 14, name: "execute_plan_info", kind: "message", T: ExecutePlanInfo, opt: true },
  { no: 15, name: "simulated_message_metadata", kind: "message", T: UserMessage_SimulatedMessageMetadata, opt: true },
  { no: 16, name: "prompt_reference_id", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "thread_id", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "text_blob_id", kind: "scalar", T: 12, opt: true },
  { no: 19, name: "rich_text_blob_id", kind: "scalar", T: 12, opt: true },
  { no: 21, name: "hook_additional_contexts", kind: "message", T: HookAdditionalContext, repeated: true },
  { no: 22, name: "custom_mode_intent", kind: "message", T: CustomModeIntent, opt: true },
  { no: 23, name: "project_details", kind: "message", T: ProjectDetails, opt: true }
]);
var UserMessage_SimulatedMessageMetadata$Runtime = (() => class _UserMessage_SimulatedMessageMetadata extends Message<_UserMessage_SimulatedMessageMetadata> {
  declare title?: string;
  declare taskId?: string;
  declare fsdFindingAction?: string;
  declare url?: string;
  declare subscriptionSource?: SubscriptionSource;
  declare subscriptionEventDisplay?: SubscriptionEventDisplay;
  constructor(data?: PartialMessage<_UserMessage_SimulatedMessageMetadata>) {
    super();
    proto3.util.initPartial(data, this as _UserMessage_SimulatedMessageMetadata);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserMessage_SimulatedMessageMetadata {
    return new _UserMessage_SimulatedMessageMetadata().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserMessage_SimulatedMessageMetadata {
    return new _UserMessage_SimulatedMessageMetadata().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserMessage_SimulatedMessageMetadata {
    return new _UserMessage_SimulatedMessageMetadata().fromJsonString(jsonString, options);
  }
  static equals(a: _UserMessage_SimulatedMessageMetadata | PlainMessage<_UserMessage_SimulatedMessageMetadata> | undefined | null, b2: _UserMessage_SimulatedMessageMetadata | PlainMessage<_UserMessage_SimulatedMessageMetadata> | undefined | null): boolean {
    return proto3.util.equals(_UserMessage_SimulatedMessageMetadata as unknown as MessageType<_UserMessage_SimulatedMessageMetadata>, a, b2);
  }
})();
export type UserMessage_SimulatedMessageMetadata = InstanceType<typeof UserMessage_SimulatedMessageMetadata$Runtime>;
var UserMessage_SimulatedMessageMetadata: MessageType<UserMessage_SimulatedMessageMetadata> = UserMessage_SimulatedMessageMetadata$Runtime as unknown as MessageType<UserMessage_SimulatedMessageMetadata>;
(UserMessage_SimulatedMessageMetadata as MutableMessageType<UserMessage_SimulatedMessageMetadata>).runtime = proto3;
(UserMessage_SimulatedMessageMetadata as MutableMessageType<UserMessage_SimulatedMessageMetadata>).typeName = "agent.v1.UserMessage.SimulatedMessageMetadata";
(UserMessage_SimulatedMessageMetadata as MutableMessageType<UserMessage_SimulatedMessageMetadata>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "task_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "fsd_finding_action", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "subscription_source", kind: "enum", T: proto3.getEnumType(SubscriptionSource), opt: true },
  { no: 6, name: "subscription_event_display", kind: "message", T: SubscriptionEventDisplay, opt: true }
]);
var AssistantMessage$Runtime = (() => class _AssistantMessage extends Message<_AssistantMessage> {
  declare text: string;
  constructor(data?: PartialMessage<_AssistantMessage>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _AssistantMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AssistantMessage {
    return new _AssistantMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AssistantMessage {
    return new _AssistantMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AssistantMessage {
    return new _AssistantMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _AssistantMessage | PlainMessage<_AssistantMessage> | undefined | null, b2: _AssistantMessage | PlainMessage<_AssistantMessage> | undefined | null): boolean {
    return proto3.util.equals(_AssistantMessage as unknown as MessageType<_AssistantMessage>, a, b2);
  }
})();
export type AssistantMessage = InstanceType<typeof AssistantMessage$Runtime>;
var AssistantMessage: MessageType<AssistantMessage> = AssistantMessage$Runtime as unknown as MessageType<AssistantMessage>;
(AssistantMessage as MutableMessageType<AssistantMessage>).runtime = proto3;
(AssistantMessage as MutableMessageType<AssistantMessage>).typeName = "agent.v1.AssistantMessage";
(AssistantMessage as MutableMessageType<AssistantMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ThinkingMessage$Runtime = (() => class _ThinkingMessage extends Message<_ThinkingMessage> {
  declare text: string;
  declare durationMs: number;
  constructor(data?: PartialMessage<_ThinkingMessage>) {
    super();
    this.text = "";
    this.durationMs = 0;
    proto3.util.initPartial(data, this as _ThinkingMessage);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ThinkingMessage {
    return new _ThinkingMessage().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ThinkingMessage {
    return new _ThinkingMessage().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ThinkingMessage {
    return new _ThinkingMessage().fromJsonString(jsonString, options);
  }
  static equals(a: _ThinkingMessage | PlainMessage<_ThinkingMessage> | undefined | null, b2: _ThinkingMessage | PlainMessage<_ThinkingMessage> | undefined | null): boolean {
    return proto3.util.equals(_ThinkingMessage as unknown as MessageType<_ThinkingMessage>, a, b2);
  }
})();
export type ThinkingMessage = InstanceType<typeof ThinkingMessage$Runtime>;
var ThinkingMessage: MessageType<ThinkingMessage> = ThinkingMessage$Runtime as unknown as MessageType<ThinkingMessage>;
(ThinkingMessage as MutableMessageType<ThinkingMessage>).runtime = proto3;
(ThinkingMessage as MutableMessageType<ThinkingMessage>).typeName = "agent.v1.ThinkingMessage";
(ThinkingMessage as MutableMessageType<ThinkingMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "duration_ms",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ShellCommand$Runtime = (() => class _ShellCommand extends Message<_ShellCommand> {
  declare command: string;
  constructor(data?: PartialMessage<_ShellCommand>) {
    super();
    this.command = "";
    proto3.util.initPartial(data, this as _ShellCommand);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellCommand {
    return new _ShellCommand().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellCommand {
    return new _ShellCommand().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellCommand {
    return new _ShellCommand().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellCommand | PlainMessage<_ShellCommand> | undefined | null, b2: _ShellCommand | PlainMessage<_ShellCommand> | undefined | null): boolean {
    return proto3.util.equals(_ShellCommand as unknown as MessageType<_ShellCommand>, a, b2);
  }
})();
export type ShellCommand = InstanceType<typeof ShellCommand$Runtime>;
var ShellCommand: MessageType<ShellCommand> = ShellCommand$Runtime as unknown as MessageType<ShellCommand>;
(ShellCommand as MutableMessageType<ShellCommand>).runtime = proto3;
(ShellCommand as MutableMessageType<ShellCommand>).typeName = "agent.v1.ShellCommand";
(ShellCommand as MutableMessageType<ShellCommand>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "command",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ShellOutput$Runtime = (() => class _ShellOutput extends Message<_ShellOutput> {
  declare stdout: string;
  declare stderr: string;
  declare exitCode: number;
  constructor(data?: PartialMessage<_ShellOutput>) {
    super();
    this.stdout = "";
    this.stderr = "";
    this.exitCode = 0;
    proto3.util.initPartial(data, this as _ShellOutput);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellOutput {
    return new _ShellOutput().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellOutput {
    return new _ShellOutput().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellOutput {
    return new _ShellOutput().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellOutput | PlainMessage<_ShellOutput> | undefined | null, b2: _ShellOutput | PlainMessage<_ShellOutput> | undefined | null): boolean {
    return proto3.util.equals(_ShellOutput as unknown as MessageType<_ShellOutput>, a, b2);
  }
})();
export type ShellOutput = InstanceType<typeof ShellOutput$Runtime>;
var ShellOutput: MessageType<ShellOutput> = ShellOutput$Runtime as unknown as MessageType<ShellOutput>;
(ShellOutput as MutableMessageType<ShellOutput>).runtime = proto3;
(ShellOutput as MutableMessageType<ShellOutput>).typeName = "agent.v1.ShellOutput";
(ShellOutput as MutableMessageType<ShellOutput>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stdout",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "stderr",
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
  }
]);
var ConversationTurn$Runtime = (() => class _ConversationTurn extends Message<_ConversationTurn> {
  declare turn: { case: "agentConversationTurn"; value: AgentConversationTurn } | { case: "shellConversationTurn"; value: ShellConversationTurn } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationTurn>) {
    super();
    this.turn = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationTurn);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationTurn {
    return new _ConversationTurn().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationTurn {
    return new _ConversationTurn().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationTurn {
    return new _ConversationTurn().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationTurn | PlainMessage<_ConversationTurn> | undefined | null, b2: _ConversationTurn | PlainMessage<_ConversationTurn> | undefined | null): boolean {
    return proto3.util.equals(_ConversationTurn as unknown as MessageType<_ConversationTurn>, a, b2);
  }
})();
export type ConversationTurn = InstanceType<typeof ConversationTurn$Runtime>;
var ConversationTurn: MessageType<ConversationTurn> = ConversationTurn$Runtime as unknown as MessageType<ConversationTurn>;
(ConversationTurn as MutableMessageType<ConversationTurn>).runtime = proto3;
(ConversationTurn as MutableMessageType<ConversationTurn>).typeName = "agent.v1.ConversationTurn";
(ConversationTurn as MutableMessageType<ConversationTurn>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_conversation_turn", kind: "message", T: AgentConversationTurn, oneof: "turn" },
  { no: 2, name: "shell_conversation_turn", kind: "message", T: ShellConversationTurn, oneof: "turn" }
]);
var ConversationPlan$Runtime = (() => class _ConversationPlan extends Message<_ConversationPlan> {
  declare plan: string;
  constructor(data?: PartialMessage<_ConversationPlan>) {
    super();
    this.plan = "";
    proto3.util.initPartial(data, this as _ConversationPlan);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationPlan {
    return new _ConversationPlan().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationPlan {
    return new _ConversationPlan().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationPlan {
    return new _ConversationPlan().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationPlan | PlainMessage<_ConversationPlan> | undefined | null, b2: _ConversationPlan | PlainMessage<_ConversationPlan> | undefined | null): boolean {
    return proto3.util.equals(_ConversationPlan as unknown as MessageType<_ConversationPlan>, a, b2);
  }
})();
export type ConversationPlan = InstanceType<typeof ConversationPlan$Runtime>;
var ConversationPlan: MessageType<ConversationPlan> = ConversationPlan$Runtime as unknown as MessageType<ConversationPlan>;
(ConversationPlan as MutableMessageType<ConversationPlan>).runtime = proto3;
(ConversationPlan as MutableMessageType<ConversationPlan>).typeName = "agent.v1.ConversationPlan";
(ConversationPlan as MutableMessageType<ConversationPlan>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "plan",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PlanRegistryEntry$Runtime = (() => class _PlanRegistryEntry extends Message<_PlanRegistryEntry> {
  declare id: string;
  declare path: string;
  constructor(data?: PartialMessage<_PlanRegistryEntry>) {
    super();
    this.id = "";
    this.path = "";
    proto3.util.initPartial(data, this as _PlanRegistryEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PlanRegistryEntry {
    return new _PlanRegistryEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PlanRegistryEntry {
    return new _PlanRegistryEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PlanRegistryEntry {
    return new _PlanRegistryEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _PlanRegistryEntry | PlainMessage<_PlanRegistryEntry> | undefined | null, b2: _PlanRegistryEntry | PlainMessage<_PlanRegistryEntry> | undefined | null): boolean {
    return proto3.util.equals(_PlanRegistryEntry as unknown as MessageType<_PlanRegistryEntry>, a, b2);
  }
})();
export type PlanRegistryEntry = InstanceType<typeof PlanRegistryEntry$Runtime>;
var PlanRegistryEntry: MessageType<PlanRegistryEntry> = PlanRegistryEntry$Runtime as unknown as MessageType<PlanRegistryEntry>;
(PlanRegistryEntry as MutableMessageType<PlanRegistryEntry>).runtime = proto3;
(PlanRegistryEntry as MutableMessageType<PlanRegistryEntry>).typeName = "agent.v1.PlanRegistryEntry";
(PlanRegistryEntry as MutableMessageType<PlanRegistryEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
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
  }
]);
var GoalState$Runtime = (() => class _GoalState extends Message<_GoalState> {
  declare conversationId: string;
  declare goalId: string;
  declare objective: string;
  declare status: GoalStatus;
  declare idleContinuationsWithoutToolCalls: number;
  declare activeDurationMs?: bigint;
  declare lastAccruedAtMs?: bigint;
  declare continuationCount: number;
  declare agentSessionId?: string;
  constructor(data?: PartialMessage<_GoalState>) {
    super();
    this.conversationId = "";
    this.goalId = "";
    this.objective = "";
    this.status = GoalStatus.UNSPECIFIED;
    this.idleContinuationsWithoutToolCalls = 0;
    this.continuationCount = 0;
    proto3.util.initPartial(data, this as _GoalState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _GoalState {
    return new _GoalState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _GoalState {
    return new _GoalState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _GoalState {
    return new _GoalState().fromJsonString(jsonString, options);
  }
  static equals(a: _GoalState | PlainMessage<_GoalState> | undefined | null, b2: _GoalState | PlainMessage<_GoalState> | undefined | null): boolean {
    return proto3.util.equals(_GoalState as unknown as MessageType<_GoalState>, a, b2);
  }
})();
export type GoalState = InstanceType<typeof GoalState$Runtime>;
var GoalState: MessageType<GoalState> = GoalState$Runtime as unknown as MessageType<GoalState>;
(GoalState as MutableMessageType<GoalState>).runtime = proto3;
(GoalState as MutableMessageType<GoalState>).typeName = "agent.v1.GoalState";
(GoalState as MutableMessageType<GoalState>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "goal_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "objective",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(GoalStatus) },
  {
    no: 5,
    name: "idle_continuations_without_tool_calls",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 6, name: "active_duration_ms", kind: "scalar", T: 4, opt: true },
  { no: 7, name: "last_accrued_at_ms", kind: "scalar", T: 4, opt: true },
  {
    no: 8,
    name: "continuation_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 9, name: "agent_session_id", kind: "scalar", T: 9, opt: true }
]);
var ConversationTurnStructure$Runtime = (() => class _ConversationTurnStructure extends Message<_ConversationTurnStructure> {
  declare turn: { case: "agentConversationTurn"; value: AgentConversationTurnStructure } | { case: "shellConversationTurn"; value: ShellConversationTurnStructure } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ConversationTurnStructure>) {
    super();
    this.turn = { case: void 0 };
    proto3.util.initPartial(data, this as _ConversationTurnStructure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationTurnStructure {
    return new _ConversationTurnStructure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationTurnStructure {
    return new _ConversationTurnStructure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationTurnStructure {
    return new _ConversationTurnStructure().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationTurnStructure | PlainMessage<_ConversationTurnStructure> | undefined | null, b2: _ConversationTurnStructure | PlainMessage<_ConversationTurnStructure> | undefined | null): boolean {
    return proto3.util.equals(_ConversationTurnStructure as unknown as MessageType<_ConversationTurnStructure>, a, b2);
  }
})();
export type ConversationTurnStructure = InstanceType<typeof ConversationTurnStructure$Runtime>;
var ConversationTurnStructure: MessageType<ConversationTurnStructure> = ConversationTurnStructure$Runtime as unknown as MessageType<ConversationTurnStructure>;
(ConversationTurnStructure as MutableMessageType<ConversationTurnStructure>).runtime = proto3;
(ConversationTurnStructure as MutableMessageType<ConversationTurnStructure>).typeName = "agent.v1.ConversationTurnStructure";
(ConversationTurnStructure as MutableMessageType<ConversationTurnStructure>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "agent_conversation_turn", kind: "message", T: AgentConversationTurnStructure, oneof: "turn" },
  { no: 2, name: "shell_conversation_turn", kind: "message", T: ShellConversationTurnStructure, oneof: "turn" }
]);
var AgentConversationTurn$Runtime = (() => class _AgentConversationTurn extends Message<_AgentConversationTurn> {
  declare userMessage?: UserMessage;
  declare steps: ConversationStep[];
  declare requestId?: string;
  constructor(data?: PartialMessage<_AgentConversationTurn>) {
    super();
    this.steps = [];
    proto3.util.initPartial(data, this as _AgentConversationTurn);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentConversationTurn {
    return new _AgentConversationTurn().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentConversationTurn {
    return new _AgentConversationTurn().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentConversationTurn {
    return new _AgentConversationTurn().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentConversationTurn | PlainMessage<_AgentConversationTurn> | undefined | null, b2: _AgentConversationTurn | PlainMessage<_AgentConversationTurn> | undefined | null): boolean {
    return proto3.util.equals(_AgentConversationTurn as unknown as MessageType<_AgentConversationTurn>, a, b2);
  }
})();
export type AgentConversationTurn = InstanceType<typeof AgentConversationTurn$Runtime>;
var AgentConversationTurn: MessageType<AgentConversationTurn> = AgentConversationTurn$Runtime as unknown as MessageType<AgentConversationTurn>;
(AgentConversationTurn as MutableMessageType<AgentConversationTurn>).runtime = proto3;
(AgentConversationTurn as MutableMessageType<AgentConversationTurn>).typeName = "agent.v1.AgentConversationTurn";
(AgentConversationTurn as MutableMessageType<AgentConversationTurn>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "message", T: UserMessage },
  { no: 2, name: "steps", kind: "message", T: ConversationStep, repeated: true },
  { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true }
]);
var AgentConversationTurnStructure$Runtime = (() => class _AgentConversationTurnStructure extends Message<_AgentConversationTurnStructure> {
  declare userMessage: Uint8Array;
  declare steps: Uint8Array[];
  declare requestId?: string;
  declare encryptedModel?: string;
  declare dynamicToolCount?: number;
  declare sendMessageStepIndices: number[];
  constructor(data?: PartialMessage<_AgentConversationTurnStructure>) {
    super();
    this.userMessage = new Uint8Array(0);
    this.steps = [];
    this.sendMessageStepIndices = [];
    proto3.util.initPartial(data, this as _AgentConversationTurnStructure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentConversationTurnStructure {
    return new _AgentConversationTurnStructure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentConversationTurnStructure {
    return new _AgentConversationTurnStructure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentConversationTurnStructure {
    return new _AgentConversationTurnStructure().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentConversationTurnStructure | PlainMessage<_AgentConversationTurnStructure> | undefined | null, b2: _AgentConversationTurnStructure | PlainMessage<_AgentConversationTurnStructure> | undefined | null): boolean {
    return proto3.util.equals(_AgentConversationTurnStructure as unknown as MessageType<_AgentConversationTurnStructure>, a, b2);
  }
})();
export type AgentConversationTurnStructure = InstanceType<typeof AgentConversationTurnStructure$Runtime>;
var AgentConversationTurnStructure: MessageType<AgentConversationTurnStructure> = AgentConversationTurnStructure$Runtime as unknown as MessageType<AgentConversationTurnStructure>;
(AgentConversationTurnStructure as MutableMessageType<AgentConversationTurnStructure>).runtime = proto3;
(AgentConversationTurnStructure as MutableMessageType<AgentConversationTurnStructure>).typeName = "agent.v1.AgentConversationTurnStructure";
(AgentConversationTurnStructure as MutableMessageType<AgentConversationTurnStructure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "user_message",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  { no: 2, name: "steps", kind: "scalar", T: 12, repeated: true },
  { no: 3, name: "request_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "encrypted_model", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "dynamic_tool_count", kind: "scalar", T: 13, opt: true },
  { no: 6, name: "send_message_step_indices", kind: "scalar", T: 13, repeated: true }
]);
var ShellConversationTurn$Runtime = (() => class _ShellConversationTurn extends Message<_ShellConversationTurn> {
  declare shellCommand?: ShellCommand;
  declare shellOutput?: ShellOutput;
  constructor(data?: PartialMessage<_ShellConversationTurn>) {
    super();
    proto3.util.initPartial(data, this as _ShellConversationTurn);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellConversationTurn {
    return new _ShellConversationTurn().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellConversationTurn {
    return new _ShellConversationTurn().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellConversationTurn {
    return new _ShellConversationTurn().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellConversationTurn | PlainMessage<_ShellConversationTurn> | undefined | null, b2: _ShellConversationTurn | PlainMessage<_ShellConversationTurn> | undefined | null): boolean {
    return proto3.util.equals(_ShellConversationTurn as unknown as MessageType<_ShellConversationTurn>, a, b2);
  }
})();
export type ShellConversationTurn = InstanceType<typeof ShellConversationTurn$Runtime>;
var ShellConversationTurn: MessageType<ShellConversationTurn> = ShellConversationTurn$Runtime as unknown as MessageType<ShellConversationTurn>;
(ShellConversationTurn as MutableMessageType<ShellConversationTurn>).runtime = proto3;
(ShellConversationTurn as MutableMessageType<ShellConversationTurn>).typeName = "agent.v1.ShellConversationTurn";
(ShellConversationTurn as MutableMessageType<ShellConversationTurn>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "shell_command", kind: "message", T: ShellCommand },
  { no: 2, name: "shell_output", kind: "message", T: ShellOutput }
]);
var ShellConversationTurnStructure$Runtime = (() => class _ShellConversationTurnStructure extends Message<_ShellConversationTurnStructure> {
  declare shellCommand: Uint8Array;
  declare shellOutput: Uint8Array;
  constructor(data?: PartialMessage<_ShellConversationTurnStructure>) {
    super();
    this.shellCommand = new Uint8Array(0);
    this.shellOutput = new Uint8Array(0);
    proto3.util.initPartial(data, this as _ShellConversationTurnStructure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellConversationTurnStructure {
    return new _ShellConversationTurnStructure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellConversationTurnStructure {
    return new _ShellConversationTurnStructure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellConversationTurnStructure {
    return new _ShellConversationTurnStructure().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellConversationTurnStructure | PlainMessage<_ShellConversationTurnStructure> | undefined | null, b2: _ShellConversationTurnStructure | PlainMessage<_ShellConversationTurnStructure> | undefined | null): boolean {
    return proto3.util.equals(_ShellConversationTurnStructure as unknown as MessageType<_ShellConversationTurnStructure>, a, b2);
  }
})();
export type ShellConversationTurnStructure = InstanceType<typeof ShellConversationTurnStructure$Runtime>;
var ShellConversationTurnStructure: MessageType<ShellConversationTurnStructure> = ShellConversationTurnStructure$Runtime as unknown as MessageType<ShellConversationTurnStructure>;
(ShellConversationTurnStructure as MutableMessageType<ShellConversationTurnStructure>).runtime = proto3;
(ShellConversationTurnStructure as MutableMessageType<ShellConversationTurnStructure>).typeName = "agent.v1.ShellConversationTurnStructure";
(ShellConversationTurnStructure as MutableMessageType<ShellConversationTurnStructure>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "shell_command",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "shell_output",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var ConversationSummary$Runtime = (() => class _ConversationSummary extends Message<_ConversationSummary> {
  declare summary: string;
  constructor(data?: PartialMessage<_ConversationSummary>) {
    super();
    this.summary = "";
    proto3.util.initPartial(data, this as _ConversationSummary);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummary {
    return new _ConversationSummary().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummary | PlainMessage<_ConversationSummary> | undefined | null, b2: _ConversationSummary | PlainMessage<_ConversationSummary> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummary as unknown as MessageType<_ConversationSummary>, a, b2);
  }
})();
export type ConversationSummary = InstanceType<typeof ConversationSummary$Runtime>;
var ConversationSummary: MessageType<ConversationSummary> = ConversationSummary$Runtime as unknown as MessageType<ConversationSummary>;
(ConversationSummary as MutableMessageType<ConversationSummary>).runtime = proto3;
(ConversationSummary as MutableMessageType<ConversationSummary>).typeName = "agent.v1.ConversationSummary";
(ConversationSummary as MutableMessageType<ConversationSummary>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationSummaryArchive$Runtime = (() => class _ConversationSummaryArchive extends Message<_ConversationSummaryArchive> {
  declare summarizedMessages: Uint8Array[];
  declare summary: string;
  declare windowTail: number;
  declare summaryMessage: Uint8Array;
  constructor(data?: PartialMessage<_ConversationSummaryArchive>) {
    super();
    this.summarizedMessages = [];
    this.summary = "";
    this.windowTail = 0;
    this.summaryMessage = new Uint8Array(0);
    proto3.util.initPartial(data, this as _ConversationSummaryArchive);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationSummaryArchive {
    return new _ConversationSummaryArchive().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationSummaryArchive {
    return new _ConversationSummaryArchive().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationSummaryArchive {
    return new _ConversationSummaryArchive().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationSummaryArchive | PlainMessage<_ConversationSummaryArchive> | undefined | null, b2: _ConversationSummaryArchive | PlainMessage<_ConversationSummaryArchive> | undefined | null): boolean {
    return proto3.util.equals(_ConversationSummaryArchive as unknown as MessageType<_ConversationSummaryArchive>, a, b2);
  }
})();
export type ConversationSummaryArchive = InstanceType<typeof ConversationSummaryArchive$Runtime>;
var ConversationSummaryArchive: MessageType<ConversationSummaryArchive> = ConversationSummaryArchive$Runtime as unknown as MessageType<ConversationSummaryArchive>;
(ConversationSummaryArchive as MutableMessageType<ConversationSummaryArchive>).runtime = proto3;
(ConversationSummaryArchive as MutableMessageType<ConversationSummaryArchive>).typeName = "agent.v1.ConversationSummaryArchive";
(ConversationSummaryArchive as MutableMessageType<ConversationSummaryArchive>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "summarized_messages", kind: "scalar", T: 12, repeated: true },
  {
    no: 2,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "window_tail",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "summary_message",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var PromptTokenBreakdownCategory$Runtime = (() => class _PromptTokenBreakdownCategory extends Message<_PromptTokenBreakdownCategory> {
  declare id: string;
  declare label: string;
  declare estimatedTokens: number;
  declare characterCount?: number;
  constructor(data?: PartialMessage<_PromptTokenBreakdownCategory>) {
    super();
    this.id = "";
    this.label = "";
    this.estimatedTokens = 0;
    proto3.util.initPartial(data, this as _PromptTokenBreakdownCategory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptTokenBreakdownCategory {
    return new _PromptTokenBreakdownCategory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptTokenBreakdownCategory {
    return new _PromptTokenBreakdownCategory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptTokenBreakdownCategory {
    return new _PromptTokenBreakdownCategory().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptTokenBreakdownCategory | PlainMessage<_PromptTokenBreakdownCategory> | undefined | null, b2: _PromptTokenBreakdownCategory | PlainMessage<_PromptTokenBreakdownCategory> | undefined | null): boolean {
    return proto3.util.equals(_PromptTokenBreakdownCategory as unknown as MessageType<_PromptTokenBreakdownCategory>, a, b2);
  }
})();
export type PromptTokenBreakdownCategory = InstanceType<typeof PromptTokenBreakdownCategory$Runtime>;
var PromptTokenBreakdownCategory: MessageType<PromptTokenBreakdownCategory> = PromptTokenBreakdownCategory$Runtime as unknown as MessageType<PromptTokenBreakdownCategory>;
(PromptTokenBreakdownCategory as MutableMessageType<PromptTokenBreakdownCategory>).runtime = proto3;
(PromptTokenBreakdownCategory as MutableMessageType<PromptTokenBreakdownCategory>).typeName = "agent.v1.PromptTokenBreakdownCategory";
(PromptTokenBreakdownCategory as MutableMessageType<PromptTokenBreakdownCategory>).fields = proto3.util.newFieldList(() => [
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
  },
  {
    no: 3,
    name: "estimated_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 4, name: "character_count", kind: "scalar", T: 13, opt: true }
]);
var PromptTokenBreakdownSnapshot$Runtime = (() => class _PromptTokenBreakdownSnapshot extends Message<_PromptTokenBreakdownSnapshot> {
  declare totalUsedTokens: number;
  declare maxTokens: number;
  declare categories: PromptTokenBreakdownCategory[];
  constructor(data?: PartialMessage<_PromptTokenBreakdownSnapshot>) {
    super();
    this.totalUsedTokens = 0;
    this.maxTokens = 0;
    this.categories = [];
    proto3.util.initPartial(data, this as _PromptTokenBreakdownSnapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptTokenBreakdownSnapshot {
    return new _PromptTokenBreakdownSnapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptTokenBreakdownSnapshot {
    return new _PromptTokenBreakdownSnapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptTokenBreakdownSnapshot {
    return new _PromptTokenBreakdownSnapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptTokenBreakdownSnapshot | PlainMessage<_PromptTokenBreakdownSnapshot> | undefined | null, b2: _PromptTokenBreakdownSnapshot | PlainMessage<_PromptTokenBreakdownSnapshot> | undefined | null): boolean {
    return proto3.util.equals(_PromptTokenBreakdownSnapshot as unknown as MessageType<_PromptTokenBreakdownSnapshot>, a, b2);
  }
})();
export type PromptTokenBreakdownSnapshot = InstanceType<typeof PromptTokenBreakdownSnapshot$Runtime>;
var PromptTokenBreakdownSnapshot: MessageType<PromptTokenBreakdownSnapshot> = PromptTokenBreakdownSnapshot$Runtime as unknown as MessageType<PromptTokenBreakdownSnapshot>;
(PromptTokenBreakdownSnapshot as MutableMessageType<PromptTokenBreakdownSnapshot>).runtime = proto3;
(PromptTokenBreakdownSnapshot as MutableMessageType<PromptTokenBreakdownSnapshot>).typeName = "agent.v1.PromptTokenBreakdownSnapshot";
(PromptTokenBreakdownSnapshot as MutableMessageType<PromptTokenBreakdownSnapshot>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "total_used_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "max_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 3, name: "categories", kind: "message", T: PromptTokenBreakdownCategory, repeated: true }
]);
var PromptContextSourceRef$Runtime = (() => class _PromptContextSourceRef extends Message<_PromptContextSourceRef> {
  declare sourceType: string;
  declare messageIndex: number;
  declare contentPath: string;
  declare startOffset: number;
  declare endOffset: number;
  constructor(data?: PartialMessage<_PromptContextSourceRef>) {
    super();
    this.sourceType = "";
    this.messageIndex = 0;
    this.contentPath = "";
    this.startOffset = 0;
    this.endOffset = 0;
    proto3.util.initPartial(data, this as _PromptContextSourceRef);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptContextSourceRef {
    return new _PromptContextSourceRef().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptContextSourceRef {
    return new _PromptContextSourceRef().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptContextSourceRef {
    return new _PromptContextSourceRef().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptContextSourceRef | PlainMessage<_PromptContextSourceRef> | undefined | null, b2: _PromptContextSourceRef | PlainMessage<_PromptContextSourceRef> | undefined | null): boolean {
    return proto3.util.equals(_PromptContextSourceRef as unknown as MessageType<_PromptContextSourceRef>, a, b2);
  }
})();
export type PromptContextSourceRef = InstanceType<typeof PromptContextSourceRef$Runtime>;
var PromptContextSourceRef: MessageType<PromptContextSourceRef> = PromptContextSourceRef$Runtime as unknown as MessageType<PromptContextSourceRef>;
(PromptContextSourceRef as MutableMessageType<PromptContextSourceRef>).runtime = proto3;
(PromptContextSourceRef as MutableMessageType<PromptContextSourceRef>).typeName = "agent.v1.PromptContextSourceRef";
(PromptContextSourceRef as MutableMessageType<PromptContextSourceRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "source_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 4,
    name: "content_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "start_offset",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 6,
    name: "end_offset",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var PromptContextNode$Runtime = (() => class _PromptContextNode extends Message<_PromptContextNode> {
  declare id: string;
  declare parentId?: string;
  declare kind: string;
  declare label: string;
  declare categoryId: string;
  declare estimatedTokens: number;
  declare characterCount: number;
  declare contentAvailable: boolean;
  declare source?: PromptContextSourceRef;
  declare inlineContent?: string;
  constructor(data?: PartialMessage<_PromptContextNode>) {
    super();
    this.id = "";
    this.kind = "";
    this.label = "";
    this.categoryId = "";
    this.estimatedTokens = 0;
    this.characterCount = 0;
    this.contentAvailable = false;
    proto3.util.initPartial(data, this as _PromptContextNode);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptContextNode {
    return new _PromptContextNode().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptContextNode {
    return new _PromptContextNode().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptContextNode {
    return new _PromptContextNode().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptContextNode | PlainMessage<_PromptContextNode> | undefined | null, b2: _PromptContextNode | PlainMessage<_PromptContextNode> | undefined | null): boolean {
    return proto3.util.equals(_PromptContextNode as unknown as MessageType<_PromptContextNode>, a, b2);
  }
})();
export type PromptContextNode = InstanceType<typeof PromptContextNode$Runtime>;
var PromptContextNode: MessageType<PromptContextNode> = PromptContextNode$Runtime as unknown as MessageType<PromptContextNode>;
(PromptContextNode as MutableMessageType<PromptContextNode>).runtime = proto3;
(PromptContextNode as MutableMessageType<PromptContextNode>).typeName = "agent.v1.PromptContextNode";
(PromptContextNode as MutableMessageType<PromptContextNode>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "parent_id", kind: "scalar", T: 9, opt: true },
  {
    no: 3,
    name: "kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "category_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "estimated_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 7,
    name: "character_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 9,
    name: "content_available",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 11, name: "source", kind: "message", T: PromptContextSourceRef, opt: true },
  { no: 12, name: "inline_content", kind: "scalar", T: 9, opt: true }
]);
var PromptContextUsageTree$Runtime = (() => class _PromptContextUsageTree extends Message<_PromptContextUsageTree> {
  declare schemaVersion: number;
  declare nodes: PromptContextNode[];
  constructor(data?: PartialMessage<_PromptContextUsageTree>) {
    super();
    this.schemaVersion = 0;
    this.nodes = [];
    proto3.util.initPartial(data, this as _PromptContextUsageTree);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptContextUsageTree {
    return new _PromptContextUsageTree().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptContextUsageTree {
    return new _PromptContextUsageTree().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptContextUsageTree {
    return new _PromptContextUsageTree().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptContextUsageTree | PlainMessage<_PromptContextUsageTree> | undefined | null, b2: _PromptContextUsageTree | PlainMessage<_PromptContextUsageTree> | undefined | null): boolean {
    return proto3.util.equals(_PromptContextUsageTree as unknown as MessageType<_PromptContextUsageTree>, a, b2);
  }
})();
export type PromptContextUsageTree = InstanceType<typeof PromptContextUsageTree$Runtime>;
var PromptContextUsageTree: MessageType<PromptContextUsageTree> = PromptContextUsageTree$Runtime as unknown as MessageType<PromptContextUsageTree>;
(PromptContextUsageTree as MutableMessageType<PromptContextUsageTree>).runtime = proto3;
(PromptContextUsageTree as MutableMessageType<PromptContextUsageTree>).typeName = "agent.v1.PromptContextUsageTree";
(PromptContextUsageTree as MutableMessageType<PromptContextUsageTree>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "schema_version",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "nodes", kind: "message", T: PromptContextNode, repeated: true }
]);
var PromptContextUsageSnapshot$Runtime = (() => class _PromptContextUsageSnapshot extends Message<_PromptContextUsageSnapshot> {
  declare promptContextUsageTree?: PromptContextUsageTree;
  declare rootPromptMessagesJson: Uint8Array[];
  constructor(data?: PartialMessage<_PromptContextUsageSnapshot>) {
    super();
    this.rootPromptMessagesJson = [];
    proto3.util.initPartial(data, this as _PromptContextUsageSnapshot);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptContextUsageSnapshot {
    return new _PromptContextUsageSnapshot().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptContextUsageSnapshot {
    return new _PromptContextUsageSnapshot().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptContextUsageSnapshot {
    return new _PromptContextUsageSnapshot().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptContextUsageSnapshot | PlainMessage<_PromptContextUsageSnapshot> | undefined | null, b2: _PromptContextUsageSnapshot | PlainMessage<_PromptContextUsageSnapshot> | undefined | null): boolean {
    return proto3.util.equals(_PromptContextUsageSnapshot as unknown as MessageType<_PromptContextUsageSnapshot>, a, b2);
  }
})();
export type PromptContextUsageSnapshot = InstanceType<typeof PromptContextUsageSnapshot$Runtime>;
var PromptContextUsageSnapshot: MessageType<PromptContextUsageSnapshot> = PromptContextUsageSnapshot$Runtime as unknown as MessageType<PromptContextUsageSnapshot>;
(PromptContextUsageSnapshot as MutableMessageType<PromptContextUsageSnapshot>).runtime = proto3;
(PromptContextUsageSnapshot as MutableMessageType<PromptContextUsageSnapshot>).typeName = "agent.v1.PromptContextUsageSnapshot";
(PromptContextUsageSnapshot as MutableMessageType<PromptContextUsageSnapshot>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "prompt_context_usage_tree", kind: "message", T: PromptContextUsageTree },
  { no: 2, name: "root_prompt_messages_json", kind: "scalar", T: 12, repeated: true }
]);
var ConversationTokenDetails$Runtime = (() => class _ConversationTokenDetails extends Message<_ConversationTokenDetails> {
  declare usedTokens: number;
  declare maxTokens: number;
  declare breakdown?: PromptTokenBreakdownSnapshot;
  declare promptContextUsageTree?: PromptContextUsageTree;
  declare promptContextUsageSnapshotBlobId?: Uint8Array;
  constructor(data?: PartialMessage<_ConversationTokenDetails>) {
    super();
    this.usedTokens = 0;
    this.maxTokens = 0;
    proto3.util.initPartial(data, this as _ConversationTokenDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationTokenDetails {
    return new _ConversationTokenDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationTokenDetails {
    return new _ConversationTokenDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationTokenDetails {
    return new _ConversationTokenDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationTokenDetails | PlainMessage<_ConversationTokenDetails> | undefined | null, b2: _ConversationTokenDetails | PlainMessage<_ConversationTokenDetails> | undefined | null): boolean {
    return proto3.util.equals(_ConversationTokenDetails as unknown as MessageType<_ConversationTokenDetails>, a, b2);
  }
})();
export type ConversationTokenDetails = InstanceType<typeof ConversationTokenDetails$Runtime>;
var ConversationTokenDetails: MessageType<ConversationTokenDetails> = ConversationTokenDetails$Runtime as unknown as MessageType<ConversationTokenDetails>;
(ConversationTokenDetails as MutableMessageType<ConversationTokenDetails>).runtime = proto3;
(ConversationTokenDetails as MutableMessageType<ConversationTokenDetails>).typeName = "agent.v1.ConversationTokenDetails";
(ConversationTokenDetails as MutableMessageType<ConversationTokenDetails>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "used_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "max_tokens",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 3, name: "breakdown", kind: "message", T: PromptTokenBreakdownSnapshot, opt: true },
  { no: 4, name: "prompt_context_usage_tree", kind: "message", T: PromptContextUsageTree, opt: true },
  { no: 5, name: "prompt_context_usage_snapshot_blob_id", kind: "scalar", T: 12, opt: true }
]);
var FileState$Runtime = (() => class _FileState extends Message<_FileState> {
  declare content?: string;
  declare initialContent?: string;
  constructor(data?: PartialMessage<_FileState>) {
    super();
    proto3.util.initPartial(data, this as _FileState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileState {
    return new _FileState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileState {
    return new _FileState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileState {
    return new _FileState().fromJsonString(jsonString, options);
  }
  static equals(a: _FileState | PlainMessage<_FileState> | undefined | null, b2: _FileState | PlainMessage<_FileState> | undefined | null): boolean {
    return proto3.util.equals(_FileState as unknown as MessageType<_FileState>, a, b2);
  }
})();
export type FileState = InstanceType<typeof FileState$Runtime>;
var FileState: MessageType<FileState> = FileState$Runtime as unknown as MessageType<FileState>;
(FileState as MutableMessageType<FileState>).runtime = proto3;
(FileState as MutableMessageType<FileState>).typeName = "agent.v1.FileState";
(FileState as MutableMessageType<FileState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "initial_content", kind: "scalar", T: 9, opt: true }
]);
var FileStateStructure$Runtime = (() => class _FileStateStructure extends Message<_FileStateStructure> {
  declare content?: Uint8Array;
  declare initialContent?: Uint8Array;
  constructor(data?: PartialMessage<_FileStateStructure>) {
    super();
    proto3.util.initPartial(data, this as _FileStateStructure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FileStateStructure {
    return new _FileStateStructure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FileStateStructure {
    return new _FileStateStructure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FileStateStructure {
    return new _FileStateStructure().fromJsonString(jsonString, options);
  }
  static equals(a: _FileStateStructure | PlainMessage<_FileStateStructure> | undefined | null, b2: _FileStateStructure | PlainMessage<_FileStateStructure> | undefined | null): boolean {
    return proto3.util.equals(_FileStateStructure as unknown as MessageType<_FileStateStructure>, a, b2);
  }
})();
export type FileStateStructure = InstanceType<typeof FileStateStructure$Runtime>;
var FileStateStructure: MessageType<FileStateStructure> = FileStateStructure$Runtime as unknown as MessageType<FileStateStructure>;
(FileStateStructure as MutableMessageType<FileStateStructure>).runtime = proto3;
(FileStateStructure as MutableMessageType<FileStateStructure>).typeName = "agent.v1.FileStateStructure";
(FileStateStructure as MutableMessageType<FileStateStructure>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "content", kind: "scalar", T: 12, opt: true },
  { no: 2, name: "initial_content", kind: "scalar", T: 12, opt: true }
]);
var StepTiming$Runtime = (() => class _StepTiming extends Message<_StepTiming> {
  declare durationMs: bigint;
  declare timestampMs: bigint;
  constructor(data?: PartialMessage<_StepTiming>) {
    super();
    this.durationMs = protoInt64.zero;
    this.timestampMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _StepTiming);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StepTiming {
    return new _StepTiming().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StepTiming {
    return new _StepTiming().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StepTiming {
    return new _StepTiming().fromJsonString(jsonString, options);
  }
  static equals(a: _StepTiming | PlainMessage<_StepTiming> | undefined | null, b2: _StepTiming | PlainMessage<_StepTiming> | undefined | null): boolean {
    return proto3.util.equals(_StepTiming as unknown as MessageType<_StepTiming>, a, b2);
  }
})();
export type StepTiming = InstanceType<typeof StepTiming$Runtime>;
var StepTiming: MessageType<StepTiming> = StepTiming$Runtime as unknown as MessageType<StepTiming>;
(StepTiming as MutableMessageType<StepTiming>).runtime = proto3;
(StepTiming as MutableMessageType<StepTiming>).typeName = "agent.v1.StepTiming";
(StepTiming as MutableMessageType<StepTiming>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "duration_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "timestamp_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var ConversationState$Runtime = (() => class _ConversationState extends Message<_ConversationState> {
  declare rootPromptMessagesJson: string[];
  declare turns: ConversationTurn[];
  declare todos: TodoItem[];
  declare pendingToolCalls: string[];
  declare tokenDetails?: ConversationTokenDetails;
  declare summary?: ConversationSummary;
  declare plan?: ConversationPlan;
  declare summaryArchive?: ConversationSummaryArchive;
  declare fileStates: { [key: string]: FileState };
  declare summaryArchives: ConversationSummaryArchive[];
  declare plans: { [key: string]: PlanRegistryEntry };
  declare communicateUpdateHistory: CommunicateUpdateHistoryEntry[];
  declare communicateUpdateFinalSummary?: string;
  declare communicateUpdateCompletedSubtitle?: string;
  declare communicateUpdateStatesByParentToolCallId: { [key: string]: CommunicateUpdateTurnState };
  constructor(data?: PartialMessage<_ConversationState>) {
    super();
    this.rootPromptMessagesJson = [];
    this.turns = [];
    this.todos = [];
    this.pendingToolCalls = [];
    this.fileStates = {};
    this.summaryArchives = [];
    this.plans = {};
    this.communicateUpdateHistory = [];
    this.communicateUpdateStatesByParentToolCallId = {};
    proto3.util.initPartial(data, this as _ConversationState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationState {
    return new _ConversationState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationState {
    return new _ConversationState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationState {
    return new _ConversationState().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationState | PlainMessage<_ConversationState> | undefined | null, b2: _ConversationState | PlainMessage<_ConversationState> | undefined | null): boolean {
    return proto3.util.equals(_ConversationState as unknown as MessageType<_ConversationState>, a, b2);
  }
})();
export type ConversationState = InstanceType<typeof ConversationState$Runtime>;
var ConversationState: MessageType<ConversationState> = ConversationState$Runtime as unknown as MessageType<ConversationState>;
(ConversationState as MutableMessageType<ConversationState>).runtime = proto3;
(ConversationState as MutableMessageType<ConversationState>).typeName = "agent.v1.ConversationState";
(ConversationState as MutableMessageType<ConversationState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "root_prompt_messages_json", kind: "scalar", T: 9, repeated: true },
  { no: 8, name: "turns", kind: "message", T: ConversationTurn, repeated: true },
  { no: 3, name: "todos", kind: "message", T: TodoItem, repeated: true },
  { no: 4, name: "pending_tool_calls", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "token_details", kind: "message", T: ConversationTokenDetails },
  { no: 6, name: "summary", kind: "message", T: ConversationSummary, opt: true },
  { no: 7, name: "plan", kind: "message", T: ConversationPlan, opt: true },
  { no: 9, name: "summary_archive", kind: "message", T: ConversationSummaryArchive, opt: true },
  { no: 10, name: "file_states", kind: "map", K: 9, V: { kind: "message", T: FileState } },
  { no: 11, name: "summary_archives", kind: "message", T: ConversationSummaryArchive, repeated: true },
  { no: 12, name: "plans", kind: "map", K: 9, V: { kind: "message", T: PlanRegistryEntry } },
  { no: 13, name: "communicate_update_history", kind: "message", T: CommunicateUpdateHistoryEntry, repeated: true },
  { no: 14, name: "communicate_update_final_summary", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "communicate_update_completed_subtitle", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "communicate_update_states_by_parent_tool_call_id", kind: "map", K: 9, V: { kind: "message", T: CommunicateUpdateTurnState } }
]);
var CommunicateUpdateHistoryEntry$Runtime = (() => class _CommunicateUpdateHistoryEntry extends Message<_CommunicateUpdateHistoryEntry> {
  declare step: string;
  declare messageIndex: number;
  constructor(data?: PartialMessage<_CommunicateUpdateHistoryEntry>) {
    super();
    this.step = "";
    this.messageIndex = 0;
    proto3.util.initPartial(data, this as _CommunicateUpdateHistoryEntry);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateHistoryEntry {
    return new _CommunicateUpdateHistoryEntry().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateHistoryEntry {
    return new _CommunicateUpdateHistoryEntry().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateHistoryEntry {
    return new _CommunicateUpdateHistoryEntry().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateHistoryEntry | PlainMessage<_CommunicateUpdateHistoryEntry> | undefined | null, b2: _CommunicateUpdateHistoryEntry | PlainMessage<_CommunicateUpdateHistoryEntry> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateHistoryEntry as unknown as MessageType<_CommunicateUpdateHistoryEntry>, a, b2);
  }
})();
export type CommunicateUpdateHistoryEntry = InstanceType<typeof CommunicateUpdateHistoryEntry$Runtime>;
var CommunicateUpdateHistoryEntry: MessageType<CommunicateUpdateHistoryEntry> = CommunicateUpdateHistoryEntry$Runtime as unknown as MessageType<CommunicateUpdateHistoryEntry>;
(CommunicateUpdateHistoryEntry as MutableMessageType<CommunicateUpdateHistoryEntry>).runtime = proto3;
(CommunicateUpdateHistoryEntry as MutableMessageType<CommunicateUpdateHistoryEntry>).typeName = "agent.v1.CommunicateUpdateHistoryEntry";
(CommunicateUpdateHistoryEntry as MutableMessageType<CommunicateUpdateHistoryEntry>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "step",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message_index",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var CommunicateUpdateTurnState$Runtime = (() => class _CommunicateUpdateTurnState extends Message<_CommunicateUpdateTurnState> {
  declare history: CommunicateUpdateHistoryEntry[];
  declare finalSummary?: string;
  declare completedSubtitle?: string;
  constructor(data?: PartialMessage<_CommunicateUpdateTurnState>) {
    super();
    this.history = [];
    proto3.util.initPartial(data, this as _CommunicateUpdateTurnState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CommunicateUpdateTurnState {
    return new _CommunicateUpdateTurnState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CommunicateUpdateTurnState {
    return new _CommunicateUpdateTurnState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CommunicateUpdateTurnState {
    return new _CommunicateUpdateTurnState().fromJsonString(jsonString, options);
  }
  static equals(a: _CommunicateUpdateTurnState | PlainMessage<_CommunicateUpdateTurnState> | undefined | null, b2: _CommunicateUpdateTurnState | PlainMessage<_CommunicateUpdateTurnState> | undefined | null): boolean {
    return proto3.util.equals(_CommunicateUpdateTurnState as unknown as MessageType<_CommunicateUpdateTurnState>, a, b2);
  }
})();
export type CommunicateUpdateTurnState = InstanceType<typeof CommunicateUpdateTurnState$Runtime>;
var CommunicateUpdateTurnState: MessageType<CommunicateUpdateTurnState> = CommunicateUpdateTurnState$Runtime as unknown as MessageType<CommunicateUpdateTurnState>;
(CommunicateUpdateTurnState as MutableMessageType<CommunicateUpdateTurnState>).runtime = proto3;
(CommunicateUpdateTurnState as MutableMessageType<CommunicateUpdateTurnState>).typeName = "agent.v1.CommunicateUpdateTurnState";
(CommunicateUpdateTurnState as MutableMessageType<CommunicateUpdateTurnState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "history", kind: "message", T: CommunicateUpdateHistoryEntry, repeated: true },
  { no: 2, name: "final_summary", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "completed_subtitle", kind: "scalar", T: 9, opt: true }
]);
var SubagentPersistedState$Runtime = (() => class _SubagentPersistedState extends Message<_SubagentPersistedState> {
  declare conversationState?: ConversationStateStructure;
  declare createdTimestampMs: bigint;
  declare lastUsedTimestampMs: bigint;
  declare subagentType?: SubagentType;
  declare modelId?: string;
  declare environment: SubagentExecutionEnvironment;
  declare cloudSubagent?: CloudSubagentReference;
  declare firstClassBcId?: string;
  declare cloudRequestedEnvironmentBuildId?: string;
  declare machine?: TargetMachine;
  constructor(data?: PartialMessage<_SubagentPersistedState>) {
    super();
    this.createdTimestampMs = protoInt64.zero;
    this.lastUsedTimestampMs = protoInt64.zero;
    this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
    proto3.util.initPartial(data, this as _SubagentPersistedState);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentPersistedState {
    return new _SubagentPersistedState().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentPersistedState {
    return new _SubagentPersistedState().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentPersistedState {
    return new _SubagentPersistedState().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentPersistedState | PlainMessage<_SubagentPersistedState> | undefined | null, b2: _SubagentPersistedState | PlainMessage<_SubagentPersistedState> | undefined | null): boolean {
    return proto3.util.equals(_SubagentPersistedState as unknown as MessageType<_SubagentPersistedState>, a, b2);
  }
})();
export type SubagentPersistedState = InstanceType<typeof SubagentPersistedState$Runtime>;
var SubagentPersistedState: MessageType<SubagentPersistedState> = SubagentPersistedState$Runtime as unknown as MessageType<SubagentPersistedState>;
(SubagentPersistedState as MutableMessageType<SubagentPersistedState>).runtime = proto3;
(SubagentPersistedState as MutableMessageType<SubagentPersistedState>).typeName = "agent.v1.SubagentPersistedState";
(SubagentPersistedState as MutableMessageType<SubagentPersistedState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "conversation_state", kind: "message", T: ConversationStateStructure },
  {
    no: 2,
    name: "created_timestamp_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 3,
    name: "last_used_timestamp_ms",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  { no: 4, name: "subagent_type", kind: "message", T: SubagentType },
  { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) },
  { no: 7, name: "cloud_subagent", kind: "message", T: CloudSubagentReference, opt: true },
  { no: 8, name: "first_class_bc_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "cloud_requested_environment_build_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "machine", kind: "message", T: TargetMachine, opt: true }
]);
var CloudSubagentReference$Runtime = (() => class _CloudSubagentReference extends Message<_CloudSubagentReference> {
  declare bcId: string;
  declare transcriptPath?: string;
  constructor(data?: PartialMessage<_CloudSubagentReference>) {
    super();
    this.bcId = "";
    proto3.util.initPartial(data, this as _CloudSubagentReference);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloudSubagentReference {
    return new _CloudSubagentReference().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloudSubagentReference {
    return new _CloudSubagentReference().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloudSubagentReference {
    return new _CloudSubagentReference().fromJsonString(jsonString, options);
  }
  static equals(a: _CloudSubagentReference | PlainMessage<_CloudSubagentReference> | undefined | null, b2: _CloudSubagentReference | PlainMessage<_CloudSubagentReference> | undefined | null): boolean {
    return proto3.util.equals(_CloudSubagentReference as unknown as MessageType<_CloudSubagentReference>, a, b2);
  }
})();
export type CloudSubagentReference = InstanceType<typeof CloudSubagentReference$Runtime>;
var CloudSubagentReference: MessageType<CloudSubagentReference> = CloudSubagentReference$Runtime as unknown as MessageType<CloudSubagentReference>;
(CloudSubagentReference as MutableMessageType<CloudSubagentReference>).runtime = proto3;
(CloudSubagentReference as MutableMessageType<CloudSubagentReference>).typeName = "agent.v1.CloudSubagentReference";
(CloudSubagentReference as MutableMessageType<CloudSubagentReference>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bc_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "transcript_path", kind: "scalar", T: 9, opt: true }
]);
var TrackedGitRepo$Runtime = (() => class _TrackedGitRepo extends Message<_TrackedGitRepo> {
  declare repoPath: string;
  declare branchName: string;
  constructor(data?: PartialMessage<_TrackedGitRepo>) {
    super();
    this.repoPath = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _TrackedGitRepo);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TrackedGitRepo {
    return new _TrackedGitRepo().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TrackedGitRepo {
    return new _TrackedGitRepo().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TrackedGitRepo {
    return new _TrackedGitRepo().fromJsonString(jsonString, options);
  }
  static equals(a: _TrackedGitRepo | PlainMessage<_TrackedGitRepo> | undefined | null, b2: _TrackedGitRepo | PlainMessage<_TrackedGitRepo> | undefined | null): boolean {
    return proto3.util.equals(_TrackedGitRepo as unknown as MessageType<_TrackedGitRepo>, a, b2);
  }
})();
export type TrackedGitRepo = InstanceType<typeof TrackedGitRepo$Runtime>;
var TrackedGitRepo: MessageType<TrackedGitRepo> = TrackedGitRepo$Runtime as unknown as MessageType<TrackedGitRepo>;
(TrackedGitRepo as MutableMessageType<TrackedGitRepo>).runtime = proto3;
(TrackedGitRepo as MutableMessageType<TrackedGitRepo>).typeName = "agent.v1.TrackedGitRepo";
(TrackedGitRepo as MutableMessageType<TrackedGitRepo>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConversationStateStructure$Runtime = (() => class _ConversationStateStructure extends Message<_ConversationStateStructure> {
  declare rootPromptMessagesJson: Uint8Array[];
  declare turns: Uint8Array[];
  declare todos: Uint8Array[];
  declare pendingToolCalls: string[];
  declare tokenDetails?: ConversationTokenDetails;
  declare summary?: Uint8Array;
  declare plan?: Uint8Array;
  declare previousWorkspaceUris: string[];
  declare mode?: AgentMode;
  declare summaryArchive?: Uint8Array;
  declare fileStates: { [key: string]: Uint8Array };
  declare fileStatesV2: { [key: string]: FileStateStructure };
  declare summaryArchives: Uint8Array[];
  declare turnTimings: StepTiming[];
  declare subagentStates: { [key: string]: SubagentPersistedState };
  declare selfSummaryCount: number;
  declare readPaths: string[];
  declare activeBranchName?: string;
  declare plans: { [key: string]: PlanRegistryEntry };
  declare trackedGitRepoBranches: TrackedGitRepo[];
  declare agentType?: string;
  declare communicateUpdateHistory: CommunicateUpdateHistoryEntry[];
  declare subagentThreads: { [key: string]: string };
  declare communicateUpdateFinalSummary?: string;
  declare communicateUpdateCompletedSubtitle?: string;
  declare communicateUpdateStatesByParentToolCallId: { [key: string]: CommunicateUpdateTurnState };
  declare subagentRunsByParentToolCallId: { [key: string]: SubagentRunState };
  declare conversationStartedTimestampMs?: bigint;
  declare conversationStartedTimeZone?: string;
  declare subagentStateRefs: { [key: string]: Uint8Array };
  declare goalState?: GoalState;
  declare isRootProjectConversation?: boolean;
  declare completedAskQuestionToolCallIds: string[];
  constructor(data?: PartialMessage<_ConversationStateStructure>) {
    super();
    this.rootPromptMessagesJson = [];
    this.turns = [];
    this.todos = [];
    this.pendingToolCalls = [];
    this.previousWorkspaceUris = [];
    this.fileStates = {};
    this.fileStatesV2 = {};
    this.summaryArchives = [];
    this.turnTimings = [];
    this.subagentStates = {};
    this.selfSummaryCount = 0;
    this.readPaths = [];
    this.plans = {};
    this.trackedGitRepoBranches = [];
    this.communicateUpdateHistory = [];
    this.subagentThreads = {};
    this.communicateUpdateStatesByParentToolCallId = {};
    this.subagentRunsByParentToolCallId = {};
    this.subagentStateRefs = {};
    this.completedAskQuestionToolCallIds = [];
    proto3.util.initPartial(data, this as _ConversationStateStructure);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ConversationStateStructure {
    return new _ConversationStateStructure().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ConversationStateStructure {
    return new _ConversationStateStructure().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ConversationStateStructure {
    return new _ConversationStateStructure().fromJsonString(jsonString, options);
  }
  static equals(a: _ConversationStateStructure | PlainMessage<_ConversationStateStructure> | undefined | null, b2: _ConversationStateStructure | PlainMessage<_ConversationStateStructure> | undefined | null): boolean {
    return proto3.util.equals(_ConversationStateStructure as unknown as MessageType<_ConversationStateStructure>, a, b2);
  }
})();
export type ConversationStateStructure = InstanceType<typeof ConversationStateStructure$Runtime>;
var ConversationStateStructure: MessageType<ConversationStateStructure> = ConversationStateStructure$Runtime as unknown as MessageType<ConversationStateStructure>;
(ConversationStateStructure as MutableMessageType<ConversationStateStructure>).runtime = proto3;
(ConversationStateStructure as MutableMessageType<ConversationStateStructure>).typeName = "agent.v1.ConversationStateStructure";
(ConversationStateStructure as MutableMessageType<ConversationStateStructure>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "root_prompt_messages_json", kind: "scalar", T: 12, repeated: true },
  { no: 8, name: "turns", kind: "scalar", T: 12, repeated: true },
  { no: 3, name: "todos", kind: "scalar", T: 12, repeated: true },
  { no: 4, name: "pending_tool_calls", kind: "scalar", T: 9, repeated: true },
  { no: 5, name: "token_details", kind: "message", T: ConversationTokenDetails },
  { no: 6, name: "summary", kind: "scalar", T: 12, opt: true },
  { no: 7, name: "plan", kind: "scalar", T: 12, opt: true },
  { no: 9, name: "previous_workspace_uris", kind: "scalar", T: 9, repeated: true },
  { no: 10, name: "mode", kind: "enum", T: proto3.getEnumType(AgentMode), opt: true },
  { no: 11, name: "summary_archive", kind: "scalar", T: 12, opt: true },
  { no: 12, name: "file_states", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  } },
  { no: 15, name: "file_states_v2", kind: "map", K: 9, V: { kind: "message", T: FileStateStructure } },
  { no: 13, name: "summary_archives", kind: "scalar", T: 12, repeated: true },
  { no: 14, name: "turn_timings", kind: "message", T: StepTiming, repeated: true },
  { no: 16, name: "subagent_states", kind: "map", K: 9, V: { kind: "message", T: SubagentPersistedState } },
  {
    no: 17,
    name: "self_summary_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 18, name: "read_paths", kind: "scalar", T: 9, repeated: true },
  { no: 19, name: "active_branch_name", kind: "scalar", T: 9, opt: true },
  { no: 20, name: "plans", kind: "map", K: 9, V: { kind: "message", T: PlanRegistryEntry } },
  { no: 21, name: "tracked_git_repo_branches", kind: "message", T: TrackedGitRepo, repeated: true },
  { no: 22, name: "agent_type", kind: "scalar", T: 9, opt: true },
  { no: 23, name: "communicate_update_history", kind: "message", T: CommunicateUpdateHistoryEntry, repeated: true },
  { no: 24, name: "subagent_threads", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  { no: 25, name: "communicate_update_final_summary", kind: "scalar", T: 9, opt: true },
  { no: 28, name: "communicate_update_completed_subtitle", kind: "scalar", T: 9, opt: true },
  { no: 29, name: "communicate_update_states_by_parent_tool_call_id", kind: "map", K: 9, V: { kind: "message", T: CommunicateUpdateTurnState } },
  { no: 30, name: "subagent_runs_by_parent_tool_call_id", kind: "map", K: 9, V: { kind: "message", T: SubagentRunState } },
  { no: 26, name: "conversation_started_timestamp_ms", kind: "scalar", T: 4, opt: true },
  { no: 27, name: "conversation_started_time_zone", kind: "scalar", T: 9, opt: true },
  { no: 31, name: "subagent_state_refs", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  } },
  { no: 32, name: "goal_state", kind: "message", T: GoalState, opt: true },
  { no: 33, name: "is_root_project_conversation", kind: "scalar", T: 8, opt: true },
  { no: 34, name: "completed_ask_question_tool_call_ids", kind: "scalar", T: 9, repeated: true }
]);
var ThinkingDetails$Runtime = (() => class _ThinkingDetails extends Message<_ThinkingDetails> {
  constructor(data?: PartialMessage<_ThinkingDetails>) {
    super();
    proto3.util.initPartial(data, this as _ThinkingDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ThinkingDetails {
    return new _ThinkingDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ThinkingDetails {
    return new _ThinkingDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ThinkingDetails {
    return new _ThinkingDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ThinkingDetails | PlainMessage<_ThinkingDetails> | undefined | null, b2: _ThinkingDetails | PlainMessage<_ThinkingDetails> | undefined | null): boolean {
    return proto3.util.equals(_ThinkingDetails as unknown as MessageType<_ThinkingDetails>, a, b2);
  }
})();
export type ThinkingDetails = InstanceType<typeof ThinkingDetails$Runtime>;
var ThinkingDetails: MessageType<ThinkingDetails> = ThinkingDetails$Runtime as unknown as MessageType<ThinkingDetails>;
(ThinkingDetails as MutableMessageType<ThinkingDetails>).runtime = proto3;
(ThinkingDetails as MutableMessageType<ThinkingDetails>).typeName = "agent.v1.ThinkingDetails";
(ThinkingDetails as MutableMessageType<ThinkingDetails>).fields = proto3.util.newFieldList(() => []);
var ApiKeyCredentials$Runtime = (() => class _ApiKeyCredentials extends Message<_ApiKeyCredentials> {
  declare apiKey: string;
  declare baseUrl?: string;
  constructor(data?: PartialMessage<_ApiKeyCredentials>) {
    super();
    this.apiKey = "";
    proto3.util.initPartial(data, this as _ApiKeyCredentials);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ApiKeyCredentials {
    return new _ApiKeyCredentials().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ApiKeyCredentials {
    return new _ApiKeyCredentials().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ApiKeyCredentials {
    return new _ApiKeyCredentials().fromJsonString(jsonString, options);
  }
  static equals(a: _ApiKeyCredentials | PlainMessage<_ApiKeyCredentials> | undefined | null, b2: _ApiKeyCredentials | PlainMessage<_ApiKeyCredentials> | undefined | null): boolean {
    return proto3.util.equals(_ApiKeyCredentials as unknown as MessageType<_ApiKeyCredentials>, a, b2);
  }
})();
export type ApiKeyCredentials = InstanceType<typeof ApiKeyCredentials$Runtime>;
var ApiKeyCredentials: MessageType<ApiKeyCredentials> = ApiKeyCredentials$Runtime as unknown as MessageType<ApiKeyCredentials>;
(ApiKeyCredentials as MutableMessageType<ApiKeyCredentials>).runtime = proto3;
(ApiKeyCredentials as MutableMessageType<ApiKeyCredentials>).typeName = "agent.v1.ApiKeyCredentials";
(ApiKeyCredentials as MutableMessageType<ApiKeyCredentials>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "api_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "base_url", kind: "scalar", T: 9, opt: true }
]);
var ClientLlmGatewayCredential$Runtime = (() => class _ClientLlmGatewayCredential extends Message<_ClientLlmGatewayCredential> {
  declare bearerToken: string;
  constructor(data?: PartialMessage<_ClientLlmGatewayCredential>) {
    super();
    this.bearerToken = "";
    proto3.util.initPartial(data, this as _ClientLlmGatewayCredential);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ClientLlmGatewayCredential {
    return new _ClientLlmGatewayCredential().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ClientLlmGatewayCredential {
    return new _ClientLlmGatewayCredential().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ClientLlmGatewayCredential {
    return new _ClientLlmGatewayCredential().fromJsonString(jsonString, options);
  }
  static equals(a: _ClientLlmGatewayCredential | PlainMessage<_ClientLlmGatewayCredential> | undefined | null, b2: _ClientLlmGatewayCredential | PlainMessage<_ClientLlmGatewayCredential> | undefined | null): boolean {
    return proto3.util.equals(_ClientLlmGatewayCredential as unknown as MessageType<_ClientLlmGatewayCredential>, a, b2);
  }
})();
export type ClientLlmGatewayCredential = InstanceType<typeof ClientLlmGatewayCredential$Runtime>;
var ClientLlmGatewayCredential: MessageType<ClientLlmGatewayCredential> = ClientLlmGatewayCredential$Runtime as unknown as MessageType<ClientLlmGatewayCredential>;
(ClientLlmGatewayCredential as MutableMessageType<ClientLlmGatewayCredential>).runtime = proto3;
(ClientLlmGatewayCredential as MutableMessageType<ClientLlmGatewayCredential>).typeName = "agent.v1.ClientLlmGatewayCredential";
(ClientLlmGatewayCredential as MutableMessageType<ClientLlmGatewayCredential>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "bearer_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AzureCredentials$Runtime = (() => class _AzureCredentials extends Message<_AzureCredentials> {
  declare apiKey: string;
  declare baseUrl: string;
  declare deployment: string;
  constructor(data?: PartialMessage<_AzureCredentials>) {
    super();
    this.apiKey = "";
    this.baseUrl = "";
    this.deployment = "";
    proto3.util.initPartial(data, this as _AzureCredentials);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AzureCredentials {
    return new _AzureCredentials().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AzureCredentials {
    return new _AzureCredentials().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AzureCredentials {
    return new _AzureCredentials().fromJsonString(jsonString, options);
  }
  static equals(a: _AzureCredentials | PlainMessage<_AzureCredentials> | undefined | null, b2: _AzureCredentials | PlainMessage<_AzureCredentials> | undefined | null): boolean {
    return proto3.util.equals(_AzureCredentials as unknown as MessageType<_AzureCredentials>, a, b2);
  }
})();
export type AzureCredentials = InstanceType<typeof AzureCredentials$Runtime>;
var AzureCredentials: MessageType<AzureCredentials> = AzureCredentials$Runtime as unknown as MessageType<AzureCredentials>;
(AzureCredentials as MutableMessageType<AzureCredentials>).runtime = proto3;
(AzureCredentials as MutableMessageType<AzureCredentials>).typeName = "agent.v1.AzureCredentials";
(AzureCredentials as MutableMessageType<AzureCredentials>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "api_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "base_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "deployment",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BedrockCredentials$Runtime = (() => class _BedrockCredentials extends Message<_BedrockCredentials> {
  declare accessKey: string;
  declare secretKey: string;
  declare region: string;
  declare sessionToken?: string;
  constructor(data?: PartialMessage<_BedrockCredentials>) {
    super();
    this.accessKey = "";
    this.secretKey = "";
    this.region = "";
    proto3.util.initPartial(data, this as _BedrockCredentials);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BedrockCredentials {
    return new _BedrockCredentials().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BedrockCredentials {
    return new _BedrockCredentials().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BedrockCredentials {
    return new _BedrockCredentials().fromJsonString(jsonString, options);
  }
  static equals(a: _BedrockCredentials | PlainMessage<_BedrockCredentials> | undefined | null, b2: _BedrockCredentials | PlainMessage<_BedrockCredentials> | undefined | null): boolean {
    return proto3.util.equals(_BedrockCredentials as unknown as MessageType<_BedrockCredentials>, a, b2);
  }
})();
export type BedrockCredentials = InstanceType<typeof BedrockCredentials$Runtime>;
var BedrockCredentials: MessageType<BedrockCredentials> = BedrockCredentials$Runtime as unknown as MessageType<BedrockCredentials>;
(BedrockCredentials as MutableMessageType<BedrockCredentials>).runtime = proto3;
(BedrockCredentials as MutableMessageType<BedrockCredentials>).typeName = "agent.v1.BedrockCredentials";
(BedrockCredentials as MutableMessageType<BedrockCredentials>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "access_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "secret_key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "region",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "session_token", kind: "scalar", T: 9, opt: true }
]);
var ModelDetails2$Runtime = (() => class _ModelDetails extends Message<_ModelDetails> {
  declare modelId: string;
  declare displayModelId: string;
  declare displayName: string;
  declare displayNameShort: string;
  declare aliases: string[];
  declare thinkingDetails?: ThinkingDetails;
  declare maxMode?: boolean;
  declare credentials: { case: "apiKeyCredentials"; value: ApiKeyCredentials } | { case: "azureCredentials"; value: AzureCredentials } | { case: "bedrockCredentials"; value: BedrockCredentials } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ModelDetails>) {
    super();
    this.modelId = "";
    this.displayModelId = "";
    this.displayName = "";
    this.displayNameShort = "";
    this.aliases = [];
    this.credentials = { case: void 0 };
    proto3.util.initPartial(data, this as _ModelDetails);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ModelDetails {
    return new _ModelDetails().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ModelDetails {
    return new _ModelDetails().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ModelDetails {
    return new _ModelDetails().fromJsonString(jsonString, options);
  }
  static equals(a: _ModelDetails | PlainMessage<_ModelDetails> | undefined | null, b2: _ModelDetails | PlainMessage<_ModelDetails> | undefined | null): boolean {
    return proto3.util.equals(_ModelDetails as unknown as MessageType<_ModelDetails>, a, b2);
  }
})();
export type ModelDetails2 = InstanceType<typeof ModelDetails2$Runtime>;
var ModelDetails2: MessageType<ModelDetails2> = ModelDetails2$Runtime as unknown as MessageType<ModelDetails2>;
(ModelDetails2 as MutableMessageType<ModelDetails2>).runtime = proto3;
(ModelDetails2 as MutableMessageType<ModelDetails2>).typeName = "agent.v1.ModelDetails";
(ModelDetails2 as MutableMessageType<ModelDetails2>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "display_model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "display_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "display_name_short",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "aliases", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "thinking_details", kind: "message", T: ThinkingDetails, opt: true },
  { no: 7, name: "max_mode", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "api_key_credentials", kind: "message", T: ApiKeyCredentials, oneof: "credentials" },
  { no: 9, name: "azure_credentials", kind: "message", T: AzureCredentials, oneof: "credentials" },
  { no: 10, name: "bedrock_credentials", kind: "message", T: BedrockCredentials, oneof: "credentials" }
]);
var RequestedModel$Runtime = (() => class _RequestedModel extends Message<_RequestedModel> {
  declare modelId: string;
  declare maxMode: boolean;
  declare parameters: RequestedModel_ModelParameterValue[];
  declare builtInModel: boolean;
  declare isVariantStringRepresentation: boolean;
  declare credentials: { case: "apiKeyCredentials"; value: ApiKeyCredentials } | { case: "azureCredentials"; value: AzureCredentials } | { case: "bedrockCredentials"; value: BedrockCredentials } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_RequestedModel>) {
    super();
    this.modelId = "";
    this.maxMode = false;
    this.parameters = [];
    this.credentials = { case: void 0 };
    this.builtInModel = false;
    this.isVariantStringRepresentation = false;
    proto3.util.initPartial(data, this as _RequestedModel);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestedModel {
    return new _RequestedModel().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestedModel {
    return new _RequestedModel().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestedModel {
    return new _RequestedModel().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestedModel | PlainMessage<_RequestedModel> | undefined | null, b2: _RequestedModel | PlainMessage<_RequestedModel> | undefined | null): boolean {
    return proto3.util.equals(_RequestedModel as unknown as MessageType<_RequestedModel>, a, b2);
  }
})();
export type RequestedModel = InstanceType<typeof RequestedModel$Runtime>;
var RequestedModel: MessageType<RequestedModel> = RequestedModel$Runtime as unknown as MessageType<RequestedModel>;
(RequestedModel as MutableMessageType<RequestedModel>).runtime = proto3;
(RequestedModel as MutableMessageType<RequestedModel>).typeName = "agent.v1.RequestedModel";
(RequestedModel as MutableMessageType<RequestedModel>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "max_mode",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 3, name: "parameters", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true },
  { no: 4, name: "api_key_credentials", kind: "message", T: ApiKeyCredentials, oneof: "credentials" },
  { no: 5, name: "azure_credentials", kind: "message", T: AzureCredentials, oneof: "credentials" },
  { no: 6, name: "bedrock_credentials", kind: "message", T: BedrockCredentials, oneof: "credentials" },
  {
    no: 7,
    name: "built_in_model",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "is_variant_string_representation",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RequestedModel_ModelParameterValue$Runtime = (() => class _RequestedModel_ModelParameterValue extends Message<_RequestedModel_ModelParameterValue> {
  declare id: string;
  declare value: string;
  constructor(data?: PartialMessage<_RequestedModel_ModelParameterValue>) {
    super();
    this.id = "";
    this.value = "";
    proto3.util.initPartial(data, this as _RequestedModel_ModelParameterValue);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RequestedModel_ModelParameterValue {
    return new _RequestedModel_ModelParameterValue().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RequestedModel_ModelParameterValue {
    return new _RequestedModel_ModelParameterValue().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RequestedModel_ModelParameterValue {
    return new _RequestedModel_ModelParameterValue().fromJsonString(jsonString, options);
  }
  static equals(a: _RequestedModel_ModelParameterValue | PlainMessage<_RequestedModel_ModelParameterValue> | undefined | null, b2: _RequestedModel_ModelParameterValue | PlainMessage<_RequestedModel_ModelParameterValue> | undefined | null): boolean {
    return proto3.util.equals(_RequestedModel_ModelParameterValue as unknown as MessageType<_RequestedModel_ModelParameterValue>, a, b2);
  }
})();
export type RequestedModel_ModelParameterValue = InstanceType<typeof RequestedModel_ModelParameterValue$Runtime>;
var RequestedModel_ModelParameterValue: MessageType<RequestedModel_ModelParameterValue> = RequestedModel_ModelParameterValue$Runtime as unknown as MessageType<RequestedModel_ModelParameterValue>;
(RequestedModel_ModelParameterValue as MutableMessageType<RequestedModel_ModelParameterValue>).runtime = proto3;
(RequestedModel_ModelParameterValue as MutableMessageType<RequestedModel_ModelParameterValue>).typeName = "agent.v1.RequestedModel.ModelParameterValue";
(RequestedModel_ModelParameterValue as MutableMessageType<RequestedModel_ModelParameterValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
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
var SubagentModelOverride$Runtime = (() => class _SubagentModelOverride extends Message<_SubagentModelOverride> {
  declare subagentType: string;
  declare selection: { case: "model"; value: RequestedModel } | { case: "inherit"; value: boolean } | { case: "disabled"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentModelOverride>) {
    super();
    this.subagentType = "";
    this.selection = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentModelOverride);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentModelOverride {
    return new _SubagentModelOverride().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentModelOverride {
    return new _SubagentModelOverride().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentModelOverride {
    return new _SubagentModelOverride().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentModelOverride | PlainMessage<_SubagentModelOverride> | undefined | null, b2: _SubagentModelOverride | PlainMessage<_SubagentModelOverride> | undefined | null): boolean {
    return proto3.util.equals(_SubagentModelOverride as unknown as MessageType<_SubagentModelOverride>, a, b2);
  }
})();
export type SubagentModelOverride = InstanceType<typeof SubagentModelOverride$Runtime>;
var SubagentModelOverride: MessageType<SubagentModelOverride> = SubagentModelOverride$Runtime as unknown as MessageType<SubagentModelOverride>;
(SubagentModelOverride as MutableMessageType<SubagentModelOverride>).runtime = proto3;
(SubagentModelOverride as MutableMessageType<SubagentModelOverride>).typeName = "agent.v1.SubagentModelOverride";
(SubagentModelOverride as MutableMessageType<SubagentModelOverride>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "model", kind: "message", T: RequestedModel, oneof: "selection" },
  { no: 3, name: "inherit", kind: "scalar", T: 8, oneof: "selection" },
  { no: 4, name: "disabled", kind: "scalar", T: 8, oneof: "selection" }
]);
var PreFetchedBlob$Runtime = (() => class _PreFetchedBlob extends Message<_PreFetchedBlob> {
  declare id: Uint8Array;
  declare value: Uint8Array;
  constructor(data?: PartialMessage<_PreFetchedBlob>) {
    super();
    this.id = new Uint8Array(0);
    this.value = new Uint8Array(0);
    proto3.util.initPartial(data, this as _PreFetchedBlob);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreFetchedBlob {
    return new _PreFetchedBlob().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreFetchedBlob {
    return new _PreFetchedBlob().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreFetchedBlob {
    return new _PreFetchedBlob().fromJsonString(jsonString, options);
  }
  static equals(a: _PreFetchedBlob | PlainMessage<_PreFetchedBlob> | undefined | null, b2: _PreFetchedBlob | PlainMessage<_PreFetchedBlob> | undefined | null): boolean {
    return proto3.util.equals(_PreFetchedBlob as unknown as MessageType<_PreFetchedBlob>, a, b2);
  }
})();
export type PreFetchedBlob = InstanceType<typeof PreFetchedBlob$Runtime>;
var PreFetchedBlob: MessageType<PreFetchedBlob> = PreFetchedBlob$Runtime as unknown as MessageType<PreFetchedBlob>;
(PreFetchedBlob as MutableMessageType<PreFetchedBlob>).runtime = proto3;
(PreFetchedBlob as MutableMessageType<PreFetchedBlob>).typeName = "agent.v1.PreFetchedBlob";
(PreFetchedBlob as MutableMessageType<PreFetchedBlob>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var AgentRunRequest$Runtime = (() => class _AgentRunRequest extends Message<_AgentRunRequest> {
  declare conversationState?: ConversationStateStructure;
  declare action?: ConversationAction;
  declare modelDetails?: ModelDetails2;
  declare requestedModel?: RequestedModel;
  declare mcpTools?: McpTools;
  declare conversationId?: string;
  declare mcpFileSystemOptions?: McpFileSystemOptions;
  declare skillOptions?: SkillOptions;
  declare customSystemPrompt?: string;
  declare suggestNextPrompt?: boolean;
  declare subagentTypeName?: string;
  declare excludeWorkspaceContext?: boolean;
  declare harness?: string;
  declare selectedSubagentModels: RequestedModel[];
  declare selectedSubagentModelDetails: ModelDetails2[];
  declare conversationGroupId?: string;
  declare preFetchedBlobs: PreFetchedBlob[];
  declare devRawModelSlug?: string;
  declare clientSupportsInlineImages?: boolean;
  declare subagentModelOverrides: SubagentModelOverride[];
  declare canCreateCloudSubagents?: boolean;
  declare suppressSubagentProgressUpdateTool?: boolean;
  declare clientSupportsSendToUser?: boolean;
  declare computerUseCoordinateMode?: string;
  declare runId?: string;
  declare agentSessionId?: string;
  declare clientSupportsPromptContextUsageRpc?: boolean;
  declare clientSupportsRoutedModelUpdate?: boolean;
  declare systemPromptSpec?: SystemPromptSpec;
  declare clientLlmGatewayCredential?: ClientLlmGatewayCredential;
  constructor(data?: PartialMessage<_AgentRunRequest>) {
    super();
    this.selectedSubagentModels = [];
    this.selectedSubagentModelDetails = [];
    this.preFetchedBlobs = [];
    this.subagentModelOverrides = [];
    proto3.util.initPartial(data, this as _AgentRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AgentRunRequest {
    return new _AgentRunRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AgentRunRequest {
    return new _AgentRunRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AgentRunRequest {
    return new _AgentRunRequest().fromJsonString(jsonString, options);
  }
  static equals(a: _AgentRunRequest | PlainMessage<_AgentRunRequest> | undefined | null, b2: _AgentRunRequest | PlainMessage<_AgentRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_AgentRunRequest as unknown as MessageType<_AgentRunRequest>, a, b2);
  }
})();
export type AgentRunRequest = InstanceType<typeof AgentRunRequest$Runtime>;
var AgentRunRequest: MessageType<AgentRunRequest> = AgentRunRequest$Runtime as unknown as MessageType<AgentRunRequest>;
(AgentRunRequest as MutableMessageType<AgentRunRequest>).runtime = proto3;
(AgentRunRequest as MutableMessageType<AgentRunRequest>).typeName = "agent.v1.AgentRunRequest";
(AgentRunRequest as MutableMessageType<AgentRunRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "conversation_state", kind: "message", T: ConversationStateStructure },
  { no: 2, name: "action", kind: "message", T: ConversationAction },
  { no: 3, name: "model_details", kind: "message", T: ModelDetails2 },
  { no: 9, name: "requested_model", kind: "message", T: RequestedModel, opt: true },
  { no: 4, name: "mcp_tools", kind: "message", T: McpTools },
  { no: 5, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "mcp_file_system_options", kind: "message", T: McpFileSystemOptions, opt: true },
  { no: 7, name: "skill_options", kind: "message", T: SkillOptions, opt: true },
  { no: 8, name: "custom_system_prompt", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "suggest_next_prompt", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "subagent_type_name", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "exclude_workspace_context", kind: "scalar", T: 8, opt: true },
  { no: 13, name: "harness", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "selected_subagent_models", kind: "message", T: RequestedModel, repeated: true },
  { no: 15, name: "selected_subagent_model_details", kind: "message", T: ModelDetails2, repeated: true },
  { no: 16, name: "conversation_group_id", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "pre_fetched_blobs", kind: "message", T: PreFetchedBlob, repeated: true },
  { no: 18, name: "dev_raw_model_slug", kind: "scalar", T: 9, opt: true },
  { no: 19, name: "client_supports_inline_images", kind: "scalar", T: 8, opt: true },
  { no: 20, name: "subagent_model_overrides", kind: "message", T: SubagentModelOverride, repeated: true },
  { no: 21, name: "can_create_cloud_subagents", kind: "scalar", T: 8, opt: true },
  { no: 22, name: "suppress_subagent_progress_update_tool", kind: "scalar", T: 8, opt: true },
  { no: 23, name: "client_supports_send_to_user", kind: "scalar", T: 8, opt: true },
  { no: 24, name: "computer_use_coordinate_mode", kind: "scalar", T: 9, opt: true },
  { no: 25, name: "run_id", kind: "scalar", T: 9, opt: true },
  { no: 26, name: "agent_session_id", kind: "scalar", T: 9, opt: true },
  { no: 27, name: "client_supports_prompt_context_usage_rpc", kind: "scalar", T: 8, opt: true },
  { no: 28, name: "client_supports_routed_model_update", kind: "scalar", T: 8, opt: true },
  { no: 29, name: "system_prompt_spec", kind: "message", T: SystemPromptSpec, opt: true },
  { no: 30, name: "client_llm_gateway_credential", kind: "message", T: ClientLlmGatewayCredential, opt: true }
]);
var TextDeltaUpdate$Runtime = (() => class _TextDeltaUpdate extends Message<_TextDeltaUpdate> {
  declare text: string;
  declare isServerNotice: boolean;
  constructor(data?: PartialMessage<_TextDeltaUpdate>) {
    super();
    this.text = "";
    this.isServerNotice = false;
    proto3.util.initPartial(data, this as _TextDeltaUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TextDeltaUpdate {
    return new _TextDeltaUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TextDeltaUpdate {
    return new _TextDeltaUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TextDeltaUpdate {
    return new _TextDeltaUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _TextDeltaUpdate | PlainMessage<_TextDeltaUpdate> | undefined | null, b2: _TextDeltaUpdate | PlainMessage<_TextDeltaUpdate> | undefined | null): boolean {
    return proto3.util.equals(_TextDeltaUpdate as unknown as MessageType<_TextDeltaUpdate>, a, b2);
  }
})();
export type TextDeltaUpdate = InstanceType<typeof TextDeltaUpdate$Runtime>;
var TextDeltaUpdate: MessageType<TextDeltaUpdate> = TextDeltaUpdate$Runtime as unknown as MessageType<TextDeltaUpdate>;
(TextDeltaUpdate as MutableMessageType<TextDeltaUpdate>).runtime = proto3;
(TextDeltaUpdate as MutableMessageType<TextDeltaUpdate>).typeName = "agent.v1.TextDeltaUpdate";
(TextDeltaUpdate as MutableMessageType<TextDeltaUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_server_notice",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RoutedModelUpdate$Runtime = (() => class _RoutedModelUpdate extends Message<_RoutedModelUpdate> {
  declare displayName: string;
  constructor(data?: PartialMessage<_RoutedModelUpdate>) {
    super();
    this.displayName = "";
    proto3.util.initPartial(data, this as _RoutedModelUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _RoutedModelUpdate {
    return new _RoutedModelUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _RoutedModelUpdate {
    return new _RoutedModelUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _RoutedModelUpdate {
    return new _RoutedModelUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _RoutedModelUpdate | PlainMessage<_RoutedModelUpdate> | undefined | null, b2: _RoutedModelUpdate | PlainMessage<_RoutedModelUpdate> | undefined | null): boolean {
    return proto3.util.equals(_RoutedModelUpdate as unknown as MessageType<_RoutedModelUpdate>, a, b2);
  }
})();
export type RoutedModelUpdate = InstanceType<typeof RoutedModelUpdate$Runtime>;
var RoutedModelUpdate: MessageType<RoutedModelUpdate> = RoutedModelUpdate$Runtime as unknown as MessageType<RoutedModelUpdate>;
(RoutedModelUpdate as MutableMessageType<RoutedModelUpdate>).runtime = proto3;
(RoutedModelUpdate as MutableMessageType<RoutedModelUpdate>).typeName = "agent.v1.RoutedModelUpdate";
(RoutedModelUpdate as MutableMessageType<RoutedModelUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "display_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolCallStartedUpdate$Runtime = (() => class _ToolCallStartedUpdate extends Message<_ToolCallStartedUpdate> {
  declare callId: string;
  declare toolCall?: ToolCall;
  declare modelCallId: string;
  constructor(data?: PartialMessage<_ToolCallStartedUpdate>) {
    super();
    this.callId = "";
    this.modelCallId = "";
    proto3.util.initPartial(data, this as _ToolCallStartedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallStartedUpdate {
    return new _ToolCallStartedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallStartedUpdate {
    return new _ToolCallStartedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallStartedUpdate {
    return new _ToolCallStartedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallStartedUpdate | PlainMessage<_ToolCallStartedUpdate> | undefined | null, b2: _ToolCallStartedUpdate | PlainMessage<_ToolCallStartedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallStartedUpdate as unknown as MessageType<_ToolCallStartedUpdate>, a, b2);
  }
})();
export type ToolCallStartedUpdate = InstanceType<typeof ToolCallStartedUpdate$Runtime>;
var ToolCallStartedUpdate: MessageType<ToolCallStartedUpdate> = ToolCallStartedUpdate$Runtime as unknown as MessageType<ToolCallStartedUpdate>;
(ToolCallStartedUpdate as MutableMessageType<ToolCallStartedUpdate>).runtime = proto3;
(ToolCallStartedUpdate as MutableMessageType<ToolCallStartedUpdate>).typeName = "agent.v1.ToolCallStartedUpdate";
(ToolCallStartedUpdate as MutableMessageType<ToolCallStartedUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_call", kind: "message", T: ToolCall },
  {
    no: 3,
    name: "model_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolCallCompletedUpdate$Runtime = (() => class _ToolCallCompletedUpdate extends Message<_ToolCallCompletedUpdate> {
  declare callId: string;
  declare toolCall?: ToolCall;
  declare modelCallId: string;
  constructor(data?: PartialMessage<_ToolCallCompletedUpdate>) {
    super();
    this.callId = "";
    this.modelCallId = "";
    proto3.util.initPartial(data, this as _ToolCallCompletedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallCompletedUpdate {
    return new _ToolCallCompletedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallCompletedUpdate {
    return new _ToolCallCompletedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallCompletedUpdate {
    return new _ToolCallCompletedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallCompletedUpdate | PlainMessage<_ToolCallCompletedUpdate> | undefined | null, b2: _ToolCallCompletedUpdate | PlainMessage<_ToolCallCompletedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallCompletedUpdate as unknown as MessageType<_ToolCallCompletedUpdate>, a, b2);
  }
})();
export type ToolCallCompletedUpdate = InstanceType<typeof ToolCallCompletedUpdate$Runtime>;
var ToolCallCompletedUpdate: MessageType<ToolCallCompletedUpdate> = ToolCallCompletedUpdate$Runtime as unknown as MessageType<ToolCallCompletedUpdate>;
(ToolCallCompletedUpdate as MutableMessageType<ToolCallCompletedUpdate>).runtime = proto3;
(ToolCallCompletedUpdate as MutableMessageType<ToolCallCompletedUpdate>).typeName = "agent.v1.ToolCallCompletedUpdate";
(ToolCallCompletedUpdate as MutableMessageType<ToolCallCompletedUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_call", kind: "message", T: ToolCall },
  {
    no: 3,
    name: "model_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ToolCallDeltaUpdate$Runtime = (() => class _ToolCallDeltaUpdate extends Message<_ToolCallDeltaUpdate> {
  declare callId: string;
  declare toolCallDelta?: ToolCallDelta;
  declare modelCallId: string;
  constructor(data?: PartialMessage<_ToolCallDeltaUpdate>) {
    super();
    this.callId = "";
    this.modelCallId = "";
    proto3.util.initPartial(data, this as _ToolCallDeltaUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ToolCallDeltaUpdate {
    return new _ToolCallDeltaUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ToolCallDeltaUpdate {
    return new _ToolCallDeltaUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ToolCallDeltaUpdate {
    return new _ToolCallDeltaUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ToolCallDeltaUpdate | PlainMessage<_ToolCallDeltaUpdate> | undefined | null, b2: _ToolCallDeltaUpdate | PlainMessage<_ToolCallDeltaUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ToolCallDeltaUpdate as unknown as MessageType<_ToolCallDeltaUpdate>, a, b2);
  }
})();
export type ToolCallDeltaUpdate = InstanceType<typeof ToolCallDeltaUpdate$Runtime>;
var ToolCallDeltaUpdate: MessageType<ToolCallDeltaUpdate> = ToolCallDeltaUpdate$Runtime as unknown as MessageType<ToolCallDeltaUpdate>;
(ToolCallDeltaUpdate as MutableMessageType<ToolCallDeltaUpdate>).runtime = proto3;
(ToolCallDeltaUpdate as MutableMessageType<ToolCallDeltaUpdate>).typeName = "agent.v1.ToolCallDeltaUpdate";
(ToolCallDeltaUpdate as MutableMessageType<ToolCallDeltaUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_call_delta", kind: "message", T: ToolCallDelta },
  {
    no: 3,
    name: "model_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PartialToolCallUpdate$Runtime = (() => class _PartialToolCallUpdate extends Message<_PartialToolCallUpdate> {
  declare callId: string;
  declare toolCall?: ToolCall;
  declare argsTextDelta: string;
  declare modelCallId: string;
  constructor(data?: PartialMessage<_PartialToolCallUpdate>) {
    super();
    this.callId = "";
    this.argsTextDelta = "";
    this.modelCallId = "";
    proto3.util.initPartial(data, this as _PartialToolCallUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PartialToolCallUpdate {
    return new _PartialToolCallUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PartialToolCallUpdate {
    return new _PartialToolCallUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PartialToolCallUpdate {
    return new _PartialToolCallUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _PartialToolCallUpdate | PlainMessage<_PartialToolCallUpdate> | undefined | null, b2: _PartialToolCallUpdate | PlainMessage<_PartialToolCallUpdate> | undefined | null): boolean {
    return proto3.util.equals(_PartialToolCallUpdate as unknown as MessageType<_PartialToolCallUpdate>, a, b2);
  }
})();
export type PartialToolCallUpdate = InstanceType<typeof PartialToolCallUpdate$Runtime>;
var PartialToolCallUpdate: MessageType<PartialToolCallUpdate> = PartialToolCallUpdate$Runtime as unknown as MessageType<PartialToolCallUpdate>;
(PartialToolCallUpdate as MutableMessageType<PartialToolCallUpdate>).runtime = proto3;
(PartialToolCallUpdate as MutableMessageType<PartialToolCallUpdate>).typeName = "agent.v1.PartialToolCallUpdate";
(PartialToolCallUpdate as MutableMessageType<PartialToolCallUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_call", kind: "message", T: ToolCall },
  {
    no: 3,
    name: "args_text_delta",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "model_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ThinkingDeltaUpdate$Runtime = (() => class _ThinkingDeltaUpdate extends Message<_ThinkingDeltaUpdate> {
  declare text: string;
  declare thinkingStyle?: ThinkingStyle;
  constructor(data?: PartialMessage<_ThinkingDeltaUpdate>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _ThinkingDeltaUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ThinkingDeltaUpdate {
    return new _ThinkingDeltaUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ThinkingDeltaUpdate {
    return new _ThinkingDeltaUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ThinkingDeltaUpdate {
    return new _ThinkingDeltaUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ThinkingDeltaUpdate | PlainMessage<_ThinkingDeltaUpdate> | undefined | null, b2: _ThinkingDeltaUpdate | PlainMessage<_ThinkingDeltaUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ThinkingDeltaUpdate as unknown as MessageType<_ThinkingDeltaUpdate>, a, b2);
  }
})();
export type ThinkingDeltaUpdate = InstanceType<typeof ThinkingDeltaUpdate$Runtime>;
var ThinkingDeltaUpdate: MessageType<ThinkingDeltaUpdate> = ThinkingDeltaUpdate$Runtime as unknown as MessageType<ThinkingDeltaUpdate>;
(ThinkingDeltaUpdate as MutableMessageType<ThinkingDeltaUpdate>).runtime = proto3;
(ThinkingDeltaUpdate as MutableMessageType<ThinkingDeltaUpdate>).typeName = "agent.v1.ThinkingDeltaUpdate";
(ThinkingDeltaUpdate as MutableMessageType<ThinkingDeltaUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "thinking_style", kind: "enum", T: proto3.getEnumType(ThinkingStyle), opt: true }
]);
var ThinkingCompletedUpdate$Runtime = (() => class _ThinkingCompletedUpdate extends Message<_ThinkingCompletedUpdate> {
  declare thinkingDurationMs: number;
  constructor(data?: PartialMessage<_ThinkingCompletedUpdate>) {
    super();
    this.thinkingDurationMs = 0;
    proto3.util.initPartial(data, this as _ThinkingCompletedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ThinkingCompletedUpdate {
    return new _ThinkingCompletedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ThinkingCompletedUpdate {
    return new _ThinkingCompletedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ThinkingCompletedUpdate {
    return new _ThinkingCompletedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ThinkingCompletedUpdate | PlainMessage<_ThinkingCompletedUpdate> | undefined | null, b2: _ThinkingCompletedUpdate | PlainMessage<_ThinkingCompletedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ThinkingCompletedUpdate as unknown as MessageType<_ThinkingCompletedUpdate>, a, b2);
  }
})();
export type ThinkingCompletedUpdate = InstanceType<typeof ThinkingCompletedUpdate$Runtime>;
var ThinkingCompletedUpdate: MessageType<ThinkingCompletedUpdate> = ThinkingCompletedUpdate$Runtime as unknown as MessageType<ThinkingCompletedUpdate>;
(ThinkingCompletedUpdate as MutableMessageType<ThinkingCompletedUpdate>).runtime = proto3;
(ThinkingCompletedUpdate as MutableMessageType<ThinkingCompletedUpdate>).typeName = "agent.v1.ThinkingCompletedUpdate";
(ThinkingCompletedUpdate as MutableMessageType<ThinkingCompletedUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "thinking_duration_ms",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var TokenDeltaUpdate$Runtime = (() => class _TokenDeltaUpdate extends Message<_TokenDeltaUpdate> {
  declare tokens: number;
  constructor(data?: PartialMessage<_TokenDeltaUpdate>) {
    super();
    this.tokens = 0;
    proto3.util.initPartial(data, this as _TokenDeltaUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TokenDeltaUpdate {
    return new _TokenDeltaUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TokenDeltaUpdate {
    return new _TokenDeltaUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TokenDeltaUpdate {
    return new _TokenDeltaUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _TokenDeltaUpdate | PlainMessage<_TokenDeltaUpdate> | undefined | null, b2: _TokenDeltaUpdate | PlainMessage<_TokenDeltaUpdate> | undefined | null): boolean {
    return proto3.util.equals(_TokenDeltaUpdate as unknown as MessageType<_TokenDeltaUpdate>, a, b2);
  }
})();
export type TokenDeltaUpdate = InstanceType<typeof TokenDeltaUpdate$Runtime>;
var TokenDeltaUpdate: MessageType<TokenDeltaUpdate> = TokenDeltaUpdate$Runtime as unknown as MessageType<TokenDeltaUpdate>;
(TokenDeltaUpdate as MutableMessageType<TokenDeltaUpdate>).runtime = proto3;
(TokenDeltaUpdate as MutableMessageType<TokenDeltaUpdate>).typeName = "agent.v1.TokenDeltaUpdate";
(TokenDeltaUpdate as MutableMessageType<TokenDeltaUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tokens",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var SummaryUpdate$Runtime = (() => class _SummaryUpdate extends Message<_SummaryUpdate> {
  declare summary: string;
  constructor(data?: PartialMessage<_SummaryUpdate>) {
    super();
    this.summary = "";
    proto3.util.initPartial(data, this as _SummaryUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummaryUpdate {
    return new _SummaryUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummaryUpdate {
    return new _SummaryUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummaryUpdate {
    return new _SummaryUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _SummaryUpdate | PlainMessage<_SummaryUpdate> | undefined | null, b2: _SummaryUpdate | PlainMessage<_SummaryUpdate> | undefined | null): boolean {
    return proto3.util.equals(_SummaryUpdate as unknown as MessageType<_SummaryUpdate>, a, b2);
  }
})();
export type SummaryUpdate = InstanceType<typeof SummaryUpdate$Runtime>;
var SummaryUpdate: MessageType<SummaryUpdate> = SummaryUpdate$Runtime as unknown as MessageType<SummaryUpdate>;
(SummaryUpdate as MutableMessageType<SummaryUpdate>).runtime = proto3;
(SummaryUpdate as MutableMessageType<SummaryUpdate>).typeName = "agent.v1.SummaryUpdate";
(SummaryUpdate as MutableMessageType<SummaryUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "summary",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SummaryStartedUpdate$Runtime = (() => class _SummaryStartedUpdate extends Message<_SummaryStartedUpdate> {
  constructor(data?: PartialMessage<_SummaryStartedUpdate>) {
    super();
    proto3.util.initPartial(data, this as _SummaryStartedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummaryStartedUpdate {
    return new _SummaryStartedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummaryStartedUpdate {
    return new _SummaryStartedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummaryStartedUpdate {
    return new _SummaryStartedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _SummaryStartedUpdate | PlainMessage<_SummaryStartedUpdate> | undefined | null, b2: _SummaryStartedUpdate | PlainMessage<_SummaryStartedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_SummaryStartedUpdate as unknown as MessageType<_SummaryStartedUpdate>, a, b2);
  }
})();
export type SummaryStartedUpdate = InstanceType<typeof SummaryStartedUpdate$Runtime>;
var SummaryStartedUpdate: MessageType<SummaryStartedUpdate> = SummaryStartedUpdate$Runtime as unknown as MessageType<SummaryStartedUpdate>;
(SummaryStartedUpdate as MutableMessageType<SummaryStartedUpdate>).runtime = proto3;
(SummaryStartedUpdate as MutableMessageType<SummaryStartedUpdate>).typeName = "agent.v1.SummaryStartedUpdate";
(SummaryStartedUpdate as MutableMessageType<SummaryStartedUpdate>).fields = proto3.util.newFieldList(() => []);
var HeartbeatUpdate$Runtime = (() => class _HeartbeatUpdate extends Message<_HeartbeatUpdate> {
  constructor(data?: PartialMessage<_HeartbeatUpdate>) {
    super();
    proto3.util.initPartial(data, this as _HeartbeatUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _HeartbeatUpdate {
    return new _HeartbeatUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _HeartbeatUpdate {
    return new _HeartbeatUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _HeartbeatUpdate {
    return new _HeartbeatUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _HeartbeatUpdate | PlainMessage<_HeartbeatUpdate> | undefined | null, b2: _HeartbeatUpdate | PlainMessage<_HeartbeatUpdate> | undefined | null): boolean {
    return proto3.util.equals(_HeartbeatUpdate as unknown as MessageType<_HeartbeatUpdate>, a, b2);
  }
})();
export type HeartbeatUpdate = InstanceType<typeof HeartbeatUpdate$Runtime>;
var HeartbeatUpdate: MessageType<HeartbeatUpdate> = HeartbeatUpdate$Runtime as unknown as MessageType<HeartbeatUpdate>;
(HeartbeatUpdate as MutableMessageType<HeartbeatUpdate>).runtime = proto3;
(HeartbeatUpdate as MutableMessageType<HeartbeatUpdate>).typeName = "agent.v1.HeartbeatUpdate";
(HeartbeatUpdate as MutableMessageType<HeartbeatUpdate>).fields = proto3.util.newFieldList(() => []);
var SummaryCompletedUpdate$Runtime = (() => class _SummaryCompletedUpdate extends Message<_SummaryCompletedUpdate> {
  declare hookMessage?: string;
  constructor(data?: PartialMessage<_SummaryCompletedUpdate>) {
    super();
    proto3.util.initPartial(data, this as _SummaryCompletedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SummaryCompletedUpdate {
    return new _SummaryCompletedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SummaryCompletedUpdate {
    return new _SummaryCompletedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SummaryCompletedUpdate {
    return new _SummaryCompletedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _SummaryCompletedUpdate | PlainMessage<_SummaryCompletedUpdate> | undefined | null, b2: _SummaryCompletedUpdate | PlainMessage<_SummaryCompletedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_SummaryCompletedUpdate as unknown as MessageType<_SummaryCompletedUpdate>, a, b2);
  }
})();
export type SummaryCompletedUpdate = InstanceType<typeof SummaryCompletedUpdate$Runtime>;
var SummaryCompletedUpdate: MessageType<SummaryCompletedUpdate> = SummaryCompletedUpdate$Runtime as unknown as MessageType<SummaryCompletedUpdate>;
(SummaryCompletedUpdate as MutableMessageType<SummaryCompletedUpdate>).runtime = proto3;
(SummaryCompletedUpdate as MutableMessageType<SummaryCompletedUpdate>).typeName = "agent.v1.SummaryCompletedUpdate";
(SummaryCompletedUpdate as MutableMessageType<SummaryCompletedUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "hook_message", kind: "scalar", T: 9, opt: true }
]);
var ShellOutputDeltaUpdate$Runtime = (() => class _ShellOutputDeltaUpdate extends Message<_ShellOutputDeltaUpdate> {
  declare event: { case: "stdout"; value: ShellStreamStdout } | { case: "stderr"; value: ShellStreamStderr } | { case: "exit"; value: ShellStreamExit } | { case: "start"; value: ShellStreamStart } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ShellOutputDeltaUpdate>) {
    super();
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _ShellOutputDeltaUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ShellOutputDeltaUpdate {
    return new _ShellOutputDeltaUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ShellOutputDeltaUpdate {
    return new _ShellOutputDeltaUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ShellOutputDeltaUpdate {
    return new _ShellOutputDeltaUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ShellOutputDeltaUpdate | PlainMessage<_ShellOutputDeltaUpdate> | undefined | null, b2: _ShellOutputDeltaUpdate | PlainMessage<_ShellOutputDeltaUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ShellOutputDeltaUpdate as unknown as MessageType<_ShellOutputDeltaUpdate>, a, b2);
  }
})();
export type ShellOutputDeltaUpdate = InstanceType<typeof ShellOutputDeltaUpdate$Runtime>;
var ShellOutputDeltaUpdate: MessageType<ShellOutputDeltaUpdate> = ShellOutputDeltaUpdate$Runtime as unknown as MessageType<ShellOutputDeltaUpdate>;
(ShellOutputDeltaUpdate as MutableMessageType<ShellOutputDeltaUpdate>).runtime = proto3;
(ShellOutputDeltaUpdate as MutableMessageType<ShellOutputDeltaUpdate>).typeName = "agent.v1.ShellOutputDeltaUpdate";
(ShellOutputDeltaUpdate as MutableMessageType<ShellOutputDeltaUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "stdout", kind: "message", T: ShellStreamStdout, oneof: "event" },
  { no: 2, name: "stderr", kind: "message", T: ShellStreamStderr, oneof: "event" },
  { no: 3, name: "exit", kind: "message", T: ShellStreamExit, oneof: "event" },
  { no: 4, name: "start", kind: "message", T: ShellStreamStart, oneof: "event" }
]);
var TurnEndedUpdate$Runtime = (() => class _TurnEndedUpdate extends Message<_TurnEndedUpdate> {
  declare inputTokens?: bigint;
  declare outputTokens?: bigint;
  declare cacheReadTokens?: bigint;
  declare cacheWriteTokens?: bigint;
  declare reasoningTokens?: bigint;
  constructor(data?: PartialMessage<_TurnEndedUpdate>) {
    super();
    proto3.util.initPartial(data, this as _TurnEndedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TurnEndedUpdate {
    return new _TurnEndedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TurnEndedUpdate {
    return new _TurnEndedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TurnEndedUpdate {
    return new _TurnEndedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _TurnEndedUpdate | PlainMessage<_TurnEndedUpdate> | undefined | null, b2: _TurnEndedUpdate | PlainMessage<_TurnEndedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_TurnEndedUpdate as unknown as MessageType<_TurnEndedUpdate>, a, b2);
  }
})();
export type TurnEndedUpdate = InstanceType<typeof TurnEndedUpdate$Runtime>;
var TurnEndedUpdate: MessageType<TurnEndedUpdate> = TurnEndedUpdate$Runtime as unknown as MessageType<TurnEndedUpdate>;
(TurnEndedUpdate as MutableMessageType<TurnEndedUpdate>).runtime = proto3;
(TurnEndedUpdate as MutableMessageType<TurnEndedUpdate>).typeName = "agent.v1.TurnEndedUpdate";
(TurnEndedUpdate as MutableMessageType<TurnEndedUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "input_tokens", kind: "scalar", T: 3, opt: true },
  { no: 2, name: "output_tokens", kind: "scalar", T: 3, opt: true },
  { no: 3, name: "cache_read_tokens", kind: "scalar", T: 3, opt: true },
  { no: 4, name: "cache_write_tokens", kind: "scalar", T: 3, opt: true },
  { no: 5, name: "reasoning_tokens", kind: "scalar", T: 3, opt: true }
]);
var UserMessageAppendedUpdate$Runtime = (() => class _UserMessageAppendedUpdate extends Message<_UserMessageAppendedUpdate> {
  declare userMessage?: UserMessage;
  constructor(data?: PartialMessage<_UserMessageAppendedUpdate>) {
    super();
    proto3.util.initPartial(data, this as _UserMessageAppendedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _UserMessageAppendedUpdate {
    return new _UserMessageAppendedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _UserMessageAppendedUpdate {
    return new _UserMessageAppendedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _UserMessageAppendedUpdate {
    return new _UserMessageAppendedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _UserMessageAppendedUpdate | PlainMessage<_UserMessageAppendedUpdate> | undefined | null, b2: _UserMessageAppendedUpdate | PlainMessage<_UserMessageAppendedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_UserMessageAppendedUpdate as unknown as MessageType<_UserMessageAppendedUpdate>, a, b2);
  }
})();
export type UserMessageAppendedUpdate = InstanceType<typeof UserMessageAppendedUpdate$Runtime>;
var UserMessageAppendedUpdate: MessageType<UserMessageAppendedUpdate> = UserMessageAppendedUpdate$Runtime as unknown as MessageType<UserMessageAppendedUpdate>;
(UserMessageAppendedUpdate as MutableMessageType<UserMessageAppendedUpdate>).runtime = proto3;
(UserMessageAppendedUpdate as MutableMessageType<UserMessageAppendedUpdate>).typeName = "agent.v1.UserMessageAppendedUpdate";
(UserMessageAppendedUpdate as MutableMessageType<UserMessageAppendedUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "message", T: UserMessage }
]);
var StepStartedUpdate$Runtime = (() => class _StepStartedUpdate extends Message<_StepStartedUpdate> {
  declare stepId: bigint;
  constructor(data?: PartialMessage<_StepStartedUpdate>) {
    super();
    this.stepId = protoInt64.zero;
    proto3.util.initPartial(data, this as _StepStartedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StepStartedUpdate {
    return new _StepStartedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StepStartedUpdate {
    return new _StepStartedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StepStartedUpdate {
    return new _StepStartedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _StepStartedUpdate | PlainMessage<_StepStartedUpdate> | undefined | null, b2: _StepStartedUpdate | PlainMessage<_StepStartedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_StepStartedUpdate as unknown as MessageType<_StepStartedUpdate>, a, b2);
  }
})();
export type StepStartedUpdate = InstanceType<typeof StepStartedUpdate$Runtime>;
var StepStartedUpdate: MessageType<StepStartedUpdate> = StepStartedUpdate$Runtime as unknown as MessageType<StepStartedUpdate>;
(StepStartedUpdate as MutableMessageType<StepStartedUpdate>).runtime = proto3;
(StepStartedUpdate as MutableMessageType<StepStartedUpdate>).typeName = "agent.v1.StepStartedUpdate";
(StepStartedUpdate as MutableMessageType<StepStartedUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "step_id",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  }
]);
var StepCompletedUpdate$Runtime = (() => class _StepCompletedUpdate extends Message<_StepCompletedUpdate> {
  declare stepId: bigint;
  declare stepDurationMs: bigint;
  constructor(data?: PartialMessage<_StepCompletedUpdate>) {
    super();
    this.stepId = protoInt64.zero;
    this.stepDurationMs = protoInt64.zero;
    proto3.util.initPartial(data, this as _StepCompletedUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StepCompletedUpdate {
    return new _StepCompletedUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StepCompletedUpdate {
    return new _StepCompletedUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StepCompletedUpdate {
    return new _StepCompletedUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _StepCompletedUpdate | PlainMessage<_StepCompletedUpdate> | undefined | null, b2: _StepCompletedUpdate | PlainMessage<_StepCompletedUpdate> | undefined | null): boolean {
    return proto3.util.equals(_StepCompletedUpdate as unknown as MessageType<_StepCompletedUpdate>, a, b2);
  }
})();
export type StepCompletedUpdate = InstanceType<typeof StepCompletedUpdate$Runtime>;
var StepCompletedUpdate: MessageType<StepCompletedUpdate> = StepCompletedUpdate$Runtime as unknown as MessageType<StepCompletedUpdate>;
(StepCompletedUpdate as MutableMessageType<StepCompletedUpdate>).runtime = proto3;
(StepCompletedUpdate as MutableMessageType<StepCompletedUpdate>).typeName = "agent.v1.StepCompletedUpdate";
(StepCompletedUpdate as MutableMessageType<StepCompletedUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "step_id",
    kind: "scalar",
    T: 4
    /* ScalarType.UINT64 */
  },
  {
    no: 2,
    name: "step_duration_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var PromptSuggestionUpdate$Runtime = (() => class _PromptSuggestionUpdate extends Message<_PromptSuggestionUpdate> {
  declare suggestion: string;
  constructor(data?: PartialMessage<_PromptSuggestionUpdate>) {
    super();
    this.suggestion = "";
    proto3.util.initPartial(data, this as _PromptSuggestionUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PromptSuggestionUpdate {
    return new _PromptSuggestionUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PromptSuggestionUpdate {
    return new _PromptSuggestionUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PromptSuggestionUpdate {
    return new _PromptSuggestionUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _PromptSuggestionUpdate | PlainMessage<_PromptSuggestionUpdate> | undefined | null, b2: _PromptSuggestionUpdate | PlainMessage<_PromptSuggestionUpdate> | undefined | null): boolean {
    return proto3.util.equals(_PromptSuggestionUpdate as unknown as MessageType<_PromptSuggestionUpdate>, a, b2);
  }
})();
export type PromptSuggestionUpdate = InstanceType<typeof PromptSuggestionUpdate$Runtime>;
var PromptSuggestionUpdate: MessageType<PromptSuggestionUpdate> = PromptSuggestionUpdate$Runtime as unknown as MessageType<PromptSuggestionUpdate>;
(PromptSuggestionUpdate as MutableMessageType<PromptSuggestionUpdate>).runtime = proto3;
(PromptSuggestionUpdate as MutableMessageType<PromptSuggestionUpdate>).typeName = "agent.v1.PromptSuggestionUpdate";
(PromptSuggestionUpdate as MutableMessageType<PromptSuggestionUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "suggestion",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ActiveBranchChange$Runtime = (() => class _ActiveBranchChange extends Message<_ActiveBranchChange> {
  declare path: string;
  declare branchName: string;
  constructor(data?: PartialMessage<_ActiveBranchChange>) {
    super();
    this.path = "";
    this.branchName = "";
    proto3.util.initPartial(data, this as _ActiveBranchChange);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ActiveBranchChange {
    return new _ActiveBranchChange().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ActiveBranchChange {
    return new _ActiveBranchChange().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ActiveBranchChange {
    return new _ActiveBranchChange().fromJsonString(jsonString, options);
  }
  static equals(a: _ActiveBranchChange | PlainMessage<_ActiveBranchChange> | undefined | null, b2: _ActiveBranchChange | PlainMessage<_ActiveBranchChange> | undefined | null): boolean {
    return proto3.util.equals(_ActiveBranchChange as unknown as MessageType<_ActiveBranchChange>, a, b2);
  }
})();
export type ActiveBranchChange = InstanceType<typeof ActiveBranchChange$Runtime>;
var ActiveBranchChange: MessageType<ActiveBranchChange> = ActiveBranchChange$Runtime as unknown as MessageType<ActiveBranchChange>;
(ActiveBranchChange as MutableMessageType<ActiveBranchChange>).runtime = proto3;
(ActiveBranchChange as MutableMessageType<ActiveBranchChange>).typeName = "agent.v1.ActiveBranchChange";
(ActiveBranchChange as MutableMessageType<ActiveBranchChange>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "path",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var FeedbackRequestCategory$Runtime = (() => class _FeedbackRequestCategory extends Message<_FeedbackRequestCategory> {
  declare id: string;
  declare label: string;
  constructor(data?: PartialMessage<_FeedbackRequestCategory>) {
    super();
    this.id = "";
    this.label = "";
    proto3.util.initPartial(data, this as _FeedbackRequestCategory);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FeedbackRequestCategory {
    return new _FeedbackRequestCategory().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FeedbackRequestCategory {
    return new _FeedbackRequestCategory().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FeedbackRequestCategory {
    return new _FeedbackRequestCategory().fromJsonString(jsonString, options);
  }
  static equals(a: _FeedbackRequestCategory | PlainMessage<_FeedbackRequestCategory> | undefined | null, b2: _FeedbackRequestCategory | PlainMessage<_FeedbackRequestCategory> | undefined | null): boolean {
    return proto3.util.equals(_FeedbackRequestCategory as unknown as MessageType<_FeedbackRequestCategory>, a, b2);
  }
})();
export type FeedbackRequestCategory = InstanceType<typeof FeedbackRequestCategory$Runtime>;
var FeedbackRequestCategory: MessageType<FeedbackRequestCategory> = FeedbackRequestCategory$Runtime as unknown as MessageType<FeedbackRequestCategory>;
(FeedbackRequestCategory as MutableMessageType<FeedbackRequestCategory>).runtime = proto3;
(FeedbackRequestCategory as MutableMessageType<FeedbackRequestCategory>).typeName = "agent.v1.FeedbackRequestCategory";
(FeedbackRequestCategory as MutableMessageType<FeedbackRequestCategory>).fields = proto3.util.newFieldList(() => [
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
var FeedbackRequestCategoryGroup$Runtime = (() => class _FeedbackRequestCategoryGroup extends Message<_FeedbackRequestCategoryGroup> {
  declare id: string;
  declare prompt: string;
  declare categories: FeedbackRequestCategory[];
  constructor(data?: PartialMessage<_FeedbackRequestCategoryGroup>) {
    super();
    this.id = "";
    this.prompt = "";
    this.categories = [];
    proto3.util.initPartial(data, this as _FeedbackRequestCategoryGroup);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FeedbackRequestCategoryGroup {
    return new _FeedbackRequestCategoryGroup().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FeedbackRequestCategoryGroup {
    return new _FeedbackRequestCategoryGroup().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FeedbackRequestCategoryGroup {
    return new _FeedbackRequestCategoryGroup().fromJsonString(jsonString, options);
  }
  static equals(a: _FeedbackRequestCategoryGroup | PlainMessage<_FeedbackRequestCategoryGroup> | undefined | null, b2: _FeedbackRequestCategoryGroup | PlainMessage<_FeedbackRequestCategoryGroup> | undefined | null): boolean {
    return proto3.util.equals(_FeedbackRequestCategoryGroup as unknown as MessageType<_FeedbackRequestCategoryGroup>, a, b2);
  }
})();
export type FeedbackRequestCategoryGroup = InstanceType<typeof FeedbackRequestCategoryGroup$Runtime>;
var FeedbackRequestCategoryGroup: MessageType<FeedbackRequestCategoryGroup> = FeedbackRequestCategoryGroup$Runtime as unknown as MessageType<FeedbackRequestCategoryGroup>;
(FeedbackRequestCategoryGroup as MutableMessageType<FeedbackRequestCategoryGroup>).runtime = proto3;
(FeedbackRequestCategoryGroup as MutableMessageType<FeedbackRequestCategoryGroup>).typeName = "agent.v1.FeedbackRequestCategoryGroup";
(FeedbackRequestCategoryGroup as MutableMessageType<FeedbackRequestCategoryGroup>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "categories", kind: "message", T: FeedbackRequestCategory, repeated: true }
]);
var FeedbackRequestUpdate$Runtime = (() => class _FeedbackRequestUpdate extends Message<_FeedbackRequestUpdate> {
  declare requestId: string;
  declare canonicalModelName?: string;
  declare categories: FeedbackRequestCategory[];
  declare categoryGroups: FeedbackRequestCategoryGroup[];
  declare showFormImmediately: boolean;
  declare title?: string;
  declare negativeTitle?: string;
  declare commentPlaceholder?: string;
  constructor(data?: PartialMessage<_FeedbackRequestUpdate>) {
    super();
    this.requestId = "";
    this.categories = [];
    this.categoryGroups = [];
    this.showFormImmediately = false;
    proto3.util.initPartial(data, this as _FeedbackRequestUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _FeedbackRequestUpdate {
    return new _FeedbackRequestUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _FeedbackRequestUpdate {
    return new _FeedbackRequestUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _FeedbackRequestUpdate {
    return new _FeedbackRequestUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _FeedbackRequestUpdate | PlainMessage<_FeedbackRequestUpdate> | undefined | null, b2: _FeedbackRequestUpdate | PlainMessage<_FeedbackRequestUpdate> | undefined | null): boolean {
    return proto3.util.equals(_FeedbackRequestUpdate as unknown as MessageType<_FeedbackRequestUpdate>, a, b2);
  }
})();
export type FeedbackRequestUpdate = InstanceType<typeof FeedbackRequestUpdate$Runtime>;
var FeedbackRequestUpdate: MessageType<FeedbackRequestUpdate> = FeedbackRequestUpdate$Runtime as unknown as MessageType<FeedbackRequestUpdate>;
(FeedbackRequestUpdate as MutableMessageType<FeedbackRequestUpdate>).runtime = proto3;
(FeedbackRequestUpdate as MutableMessageType<FeedbackRequestUpdate>).typeName = "agent.v1.FeedbackRequestUpdate";
(FeedbackRequestUpdate as MutableMessageType<FeedbackRequestUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "canonical_model_name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "categories", kind: "message", T: FeedbackRequestCategory, repeated: true },
  { no: 4, name: "category_groups", kind: "message", T: FeedbackRequestCategoryGroup, repeated: true },
  {
    no: 5,
    name: "show_form_immediately",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 6, name: "title", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "negative_title", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "comment_placeholder", kind: "scalar", T: 9, opt: true }
]);
var ResponseComparisonStarted$Runtime = (() => class _ResponseComparisonStarted extends Message<_ResponseComparisonStarted> {
  declare displayOrder: ResponseComparisonDisplayOrder;
  declare parentInvocationId: string;
  declare alternateInvocationId: string;
  declare parentResponse: string;
  declare comparisonConfigId: string;
  declare alternateModelId: string;
  constructor(data?: PartialMessage<_ResponseComparisonStarted>) {
    super();
    this.displayOrder = ResponseComparisonDisplayOrder.UNSPECIFIED;
    this.parentInvocationId = "";
    this.alternateInvocationId = "";
    this.parentResponse = "";
    this.comparisonConfigId = "";
    this.alternateModelId = "";
    proto3.util.initPartial(data, this as _ResponseComparisonStarted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResponseComparisonStarted {
    return new _ResponseComparisonStarted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResponseComparisonStarted {
    return new _ResponseComparisonStarted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResponseComparisonStarted {
    return new _ResponseComparisonStarted().fromJsonString(jsonString, options);
  }
  static equals(a: _ResponseComparisonStarted | PlainMessage<_ResponseComparisonStarted> | undefined | null, b2: _ResponseComparisonStarted | PlainMessage<_ResponseComparisonStarted> | undefined | null): boolean {
    return proto3.util.equals(_ResponseComparisonStarted as unknown as MessageType<_ResponseComparisonStarted>, a, b2);
  }
})();
export type ResponseComparisonStarted = InstanceType<typeof ResponseComparisonStarted$Runtime>;
var ResponseComparisonStarted: MessageType<ResponseComparisonStarted> = ResponseComparisonStarted$Runtime as unknown as MessageType<ResponseComparisonStarted>;
(ResponseComparisonStarted as MutableMessageType<ResponseComparisonStarted>).runtime = proto3;
(ResponseComparisonStarted as MutableMessageType<ResponseComparisonStarted>).typeName = "agent.v1.ResponseComparisonStarted";
(ResponseComparisonStarted as MutableMessageType<ResponseComparisonStarted>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "display_order", kind: "enum", T: proto3.getEnumType(ResponseComparisonDisplayOrder) },
  {
    no: 2,
    name: "parent_invocation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "alternate_invocation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "parent_response",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "comparison_config_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "alternate_model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ResponseComparisonTextDelta$Runtime = (() => class _ResponseComparisonTextDelta extends Message<_ResponseComparisonTextDelta> {
  declare text: string;
  constructor(data?: PartialMessage<_ResponseComparisonTextDelta>) {
    super();
    this.text = "";
    proto3.util.initPartial(data, this as _ResponseComparisonTextDelta);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResponseComparisonTextDelta {
    return new _ResponseComparisonTextDelta().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResponseComparisonTextDelta {
    return new _ResponseComparisonTextDelta().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResponseComparisonTextDelta {
    return new _ResponseComparisonTextDelta().fromJsonString(jsonString, options);
  }
  static equals(a: _ResponseComparisonTextDelta | PlainMessage<_ResponseComparisonTextDelta> | undefined | null, b2: _ResponseComparisonTextDelta | PlainMessage<_ResponseComparisonTextDelta> | undefined | null): boolean {
    return proto3.util.equals(_ResponseComparisonTextDelta as unknown as MessageType<_ResponseComparisonTextDelta>, a, b2);
  }
})();
export type ResponseComparisonTextDelta = InstanceType<typeof ResponseComparisonTextDelta$Runtime>;
var ResponseComparisonTextDelta: MessageType<ResponseComparisonTextDelta> = ResponseComparisonTextDelta$Runtime as unknown as MessageType<ResponseComparisonTextDelta>;
(ResponseComparisonTextDelta as MutableMessageType<ResponseComparisonTextDelta>).runtime = proto3;
(ResponseComparisonTextDelta as MutableMessageType<ResponseComparisonTextDelta>).typeName = "agent.v1.ResponseComparisonTextDelta";
(ResponseComparisonTextDelta as MutableMessageType<ResponseComparisonTextDelta>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ResponseComparisonCompleted$Runtime = (() => class _ResponseComparisonCompleted extends Message<_ResponseComparisonCompleted> {
  constructor(data?: PartialMessage<_ResponseComparisonCompleted>) {
    super();
    proto3.util.initPartial(data, this as _ResponseComparisonCompleted);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResponseComparisonCompleted {
    return new _ResponseComparisonCompleted().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResponseComparisonCompleted {
    return new _ResponseComparisonCompleted().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResponseComparisonCompleted {
    return new _ResponseComparisonCompleted().fromJsonString(jsonString, options);
  }
  static equals(a: _ResponseComparisonCompleted | PlainMessage<_ResponseComparisonCompleted> | undefined | null, b2: _ResponseComparisonCompleted | PlainMessage<_ResponseComparisonCompleted> | undefined | null): boolean {
    return proto3.util.equals(_ResponseComparisonCompleted as unknown as MessageType<_ResponseComparisonCompleted>, a, b2);
  }
})();
export type ResponseComparisonCompleted = InstanceType<typeof ResponseComparisonCompleted$Runtime>;
var ResponseComparisonCompleted: MessageType<ResponseComparisonCompleted> = ResponseComparisonCompleted$Runtime as unknown as MessageType<ResponseComparisonCompleted>;
(ResponseComparisonCompleted as MutableMessageType<ResponseComparisonCompleted>).runtime = proto3;
(ResponseComparisonCompleted as MutableMessageType<ResponseComparisonCompleted>).typeName = "agent.v1.ResponseComparisonCompleted";
(ResponseComparisonCompleted as MutableMessageType<ResponseComparisonCompleted>).fields = proto3.util.newFieldList(() => []);
var ResponseComparisonSkipped$Runtime = (() => class _ResponseComparisonSkipped extends Message<_ResponseComparisonSkipped> {
  declare reason: ResponseComparisonSkipReason;
  constructor(data?: PartialMessage<_ResponseComparisonSkipped>) {
    super();
    this.reason = ResponseComparisonSkipReason.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ResponseComparisonSkipped);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResponseComparisonSkipped {
    return new _ResponseComparisonSkipped().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResponseComparisonSkipped {
    return new _ResponseComparisonSkipped().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResponseComparisonSkipped {
    return new _ResponseComparisonSkipped().fromJsonString(jsonString, options);
  }
  static equals(a: _ResponseComparisonSkipped | PlainMessage<_ResponseComparisonSkipped> | undefined | null, b2: _ResponseComparisonSkipped | PlainMessage<_ResponseComparisonSkipped> | undefined | null): boolean {
    return proto3.util.equals(_ResponseComparisonSkipped as unknown as MessageType<_ResponseComparisonSkipped>, a, b2);
  }
})();
export type ResponseComparisonSkipped = InstanceType<typeof ResponseComparisonSkipped$Runtime>;
var ResponseComparisonSkipped: MessageType<ResponseComparisonSkipped> = ResponseComparisonSkipped$Runtime as unknown as MessageType<ResponseComparisonSkipped>;
(ResponseComparisonSkipped as MutableMessageType<ResponseComparisonSkipped>).runtime = proto3;
(ResponseComparisonSkipped as MutableMessageType<ResponseComparisonSkipped>).typeName = "agent.v1.ResponseComparisonSkipped";
(ResponseComparisonSkipped as MutableMessageType<ResponseComparisonSkipped>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "enum", T: proto3.getEnumType(ResponseComparisonSkipReason) }
]);
var ResponseComparisonUpdate$Runtime = (() => class _ResponseComparisonUpdate extends Message<_ResponseComparisonUpdate> {
  declare comparisonId: string;
  declare event: { case: "started"; value: ResponseComparisonStarted } | { case: "textDelta"; value: ResponseComparisonTextDelta } | { case: "completed"; value: ResponseComparisonCompleted } | { case: "skipped"; value: ResponseComparisonSkipped } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ResponseComparisonUpdate>) {
    super();
    this.comparisonId = "";
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _ResponseComparisonUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ResponseComparisonUpdate {
    return new _ResponseComparisonUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ResponseComparisonUpdate {
    return new _ResponseComparisonUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ResponseComparisonUpdate {
    return new _ResponseComparisonUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ResponseComparisonUpdate | PlainMessage<_ResponseComparisonUpdate> | undefined | null, b2: _ResponseComparisonUpdate | PlainMessage<_ResponseComparisonUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ResponseComparisonUpdate as unknown as MessageType<_ResponseComparisonUpdate>, a, b2);
  }
})();
export type ResponseComparisonUpdate = InstanceType<typeof ResponseComparisonUpdate$Runtime>;
var ResponseComparisonUpdate: MessageType<ResponseComparisonUpdate> = ResponseComparisonUpdate$Runtime as unknown as MessageType<ResponseComparisonUpdate>;
(ResponseComparisonUpdate as MutableMessageType<ResponseComparisonUpdate>).runtime = proto3;
(ResponseComparisonUpdate as MutableMessageType<ResponseComparisonUpdate>).typeName = "agent.v1.ResponseComparisonUpdate";
(ResponseComparisonUpdate as MutableMessageType<ResponseComparisonUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "comparison_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "started", kind: "message", T: ResponseComparisonStarted, oneof: "event" },
  { no: 3, name: "text_delta", kind: "message", T: ResponseComparisonTextDelta, oneof: "event" },
  { no: 4, name: "completed", kind: "message", T: ResponseComparisonCompleted, oneof: "event" },
  { no: 5, name: "skipped", kind: "message", T: ResponseComparisonSkipped, oneof: "event" }
]);
var InteractionUpdate$Runtime = (() => class _InteractionUpdate extends Message<_InteractionUpdate> {
  declare message: { case: "textDelta"; value: TextDeltaUpdate } | { case: "partialToolCall"; value: PartialToolCallUpdate } | { case: "toolCallDelta"; value: ToolCallDeltaUpdate } | { case: "toolCallStarted"; value: ToolCallStartedUpdate } | { case: "toolCallCompleted"; value: ToolCallCompletedUpdate } | { case: "thinkingDelta"; value: ThinkingDeltaUpdate } | { case: "thinkingCompleted"; value: ThinkingCompletedUpdate } | { case: "userMessageAppended"; value: UserMessageAppendedUpdate } | { case: "tokenDelta"; value: TokenDeltaUpdate } | { case: "summary"; value: SummaryUpdate } | { case: "summaryStarted"; value: SummaryStartedUpdate } | { case: "summaryCompleted"; value: SummaryCompletedUpdate } | { case: "shellOutputDelta"; value: ShellOutputDeltaUpdate } | { case: "heartbeat"; value: HeartbeatUpdate } | { case: "turnEnded"; value: TurnEndedUpdate } | { case: "stepStarted"; value: StepStartedUpdate } | { case: "stepCompleted"; value: StepCompletedUpdate } | { case: "promptSuggestion"; value: PromptSuggestionUpdate } | { case: "postRequestPrompt"; value: PostRequestPromptUpdate } | { case: "activeBranchChange"; value: ActiveBranchChange } | { case: "feedbackRequest"; value: FeedbackRequestUpdate } | { case: "responseComparison"; value: ResponseComparisonUpdate } | { case: "contextInjectionState"; value: ContextInjectionStateUpdate } | { case: "routedModel"; value: RoutedModelUpdate } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InteractionUpdate>) {
    super();
    this.message = { case: void 0 };
    proto3.util.initPartial(data, this as _InteractionUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InteractionUpdate {
    return new _InteractionUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InteractionUpdate {
    return new _InteractionUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InteractionUpdate {
    return new _InteractionUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _InteractionUpdate | PlainMessage<_InteractionUpdate> | undefined | null, b2: _InteractionUpdate | PlainMessage<_InteractionUpdate> | undefined | null): boolean {
    return proto3.util.equals(_InteractionUpdate as unknown as MessageType<_InteractionUpdate>, a, b2);
  }
})();
export type InteractionUpdate = InstanceType<typeof InteractionUpdate$Runtime>;
var InteractionUpdate: MessageType<InteractionUpdate> = InteractionUpdate$Runtime as unknown as MessageType<InteractionUpdate>;
(InteractionUpdate as MutableMessageType<InteractionUpdate>).runtime = proto3;
(InteractionUpdate as MutableMessageType<InteractionUpdate>).typeName = "agent.v1.InteractionUpdate";
(InteractionUpdate as MutableMessageType<InteractionUpdate>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "text_delta", kind: "message", T: TextDeltaUpdate, oneof: "message" },
  { no: 7, name: "partial_tool_call", kind: "message", T: PartialToolCallUpdate, oneof: "message" },
  { no: 15, name: "tool_call_delta", kind: "message", T: ToolCallDeltaUpdate, oneof: "message" },
  { no: 2, name: "tool_call_started", kind: "message", T: ToolCallStartedUpdate, oneof: "message" },
  { no: 3, name: "tool_call_completed", kind: "message", T: ToolCallCompletedUpdate, oneof: "message" },
  { no: 4, name: "thinking_delta", kind: "message", T: ThinkingDeltaUpdate, oneof: "message" },
  { no: 5, name: "thinking_completed", kind: "message", T: ThinkingCompletedUpdate, oneof: "message" },
  { no: 6, name: "user_message_appended", kind: "message", T: UserMessageAppendedUpdate, oneof: "message" },
  { no: 8, name: "token_delta", kind: "message", T: TokenDeltaUpdate, oneof: "message" },
  { no: 9, name: "summary", kind: "message", T: SummaryUpdate, oneof: "message" },
  { no: 10, name: "summary_started", kind: "message", T: SummaryStartedUpdate, oneof: "message" },
  { no: 11, name: "summary_completed", kind: "message", T: SummaryCompletedUpdate, oneof: "message" },
  { no: 12, name: "shell_output_delta", kind: "message", T: ShellOutputDeltaUpdate, oneof: "message" },
  { no: 13, name: "heartbeat", kind: "message", T: HeartbeatUpdate, oneof: "message" },
  { no: 14, name: "turn_ended", kind: "message", T: TurnEndedUpdate, oneof: "message" },
  { no: 16, name: "step_started", kind: "message", T: StepStartedUpdate, oneof: "message" },
  { no: 17, name: "step_completed", kind: "message", T: StepCompletedUpdate, oneof: "message" },
  { no: 18, name: "prompt_suggestion", kind: "message", T: PromptSuggestionUpdate, oneof: "message" },
  { no: 19, name: "post_request_prompt", kind: "message", T: PostRequestPromptUpdate, oneof: "message" },
  { no: 20, name: "active_branch_change", kind: "message", T: ActiveBranchChange, oneof: "message" },
  { no: 21, name: "feedback_request", kind: "message", T: FeedbackRequestUpdate, oneof: "message" },
  { no: 22, name: "response_comparison", kind: "message", T: ResponseComparisonUpdate, oneof: "message" },
  { no: 23, name: "context_injection_state", kind: "message", T: ContextInjectionStateUpdate, oneof: "message" },
  { no: 24, name: "routed_model", kind: "message", T: RoutedModelUpdate, oneof: "message" }
]);
var ContextInjectionStateUpdate$Runtime = (() => class _ContextInjectionStateUpdate extends Message<_ContextInjectionStateUpdate> {
  declare injectionId: string;
  declare state?: ContextInjectionState;
  constructor(data?: PartialMessage<_ContextInjectionStateUpdate>) {
    super();
    this.injectionId = "";
    proto3.util.initPartial(data, this as _ContextInjectionStateUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _ContextInjectionStateUpdate {
    return new _ContextInjectionStateUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _ContextInjectionStateUpdate {
    return new _ContextInjectionStateUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _ContextInjectionStateUpdate {
    return new _ContextInjectionStateUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _ContextInjectionStateUpdate | PlainMessage<_ContextInjectionStateUpdate> | undefined | null, b2: _ContextInjectionStateUpdate | PlainMessage<_ContextInjectionStateUpdate> | undefined | null): boolean {
    return proto3.util.equals(_ContextInjectionStateUpdate as unknown as MessageType<_ContextInjectionStateUpdate>, a, b2);
  }
})();
export type ContextInjectionStateUpdate = InstanceType<typeof ContextInjectionStateUpdate$Runtime>;
var ContextInjectionStateUpdate: MessageType<ContextInjectionStateUpdate> = ContextInjectionStateUpdate$Runtime as unknown as MessageType<ContextInjectionStateUpdate>;
(ContextInjectionStateUpdate as MutableMessageType<ContextInjectionStateUpdate>).runtime = proto3;
(ContextInjectionStateUpdate as MutableMessageType<ContextInjectionStateUpdate>).typeName = "agent.v1.ContextInjectionStateUpdate";
(ContextInjectionStateUpdate as MutableMessageType<ContextInjectionStateUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "injection_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "state", kind: "message", T: ContextInjectionState }
]);
var PostRequestPromptUpdate$Runtime = (() => class _PostRequestPromptUpdate extends Message<_PostRequestPromptUpdate> {
  declare title: string;
  declare message: string;
  declare buttonLabel: string;
  declare buttonUrl: string;
  constructor(data?: PartialMessage<_PostRequestPromptUpdate>) {
    super();
    this.title = "";
    this.message = "";
    this.buttonLabel = "";
    this.buttonUrl = "";
    proto3.util.initPartial(data, this as _PostRequestPromptUpdate);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostRequestPromptUpdate {
    return new _PostRequestPromptUpdate().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostRequestPromptUpdate {
    return new _PostRequestPromptUpdate().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostRequestPromptUpdate {
    return new _PostRequestPromptUpdate().fromJsonString(jsonString, options);
  }
  static equals(a: _PostRequestPromptUpdate | PlainMessage<_PostRequestPromptUpdate> | undefined | null, b2: _PostRequestPromptUpdate | PlainMessage<_PostRequestPromptUpdate> | undefined | null): boolean {
    return proto3.util.equals(_PostRequestPromptUpdate as unknown as MessageType<_PostRequestPromptUpdate>, a, b2);
  }
})();
export type PostRequestPromptUpdate = InstanceType<typeof PostRequestPromptUpdate$Runtime>;
var PostRequestPromptUpdate: MessageType<PostRequestPromptUpdate> = PostRequestPromptUpdate$Runtime as unknown as MessageType<PostRequestPromptUpdate>;
(PostRequestPromptUpdate as MutableMessageType<PostRequestPromptUpdate>).runtime = proto3;
(PostRequestPromptUpdate as MutableMessageType<PostRequestPromptUpdate>).typeName = "agent.v1.PostRequestPromptUpdate";
(PostRequestPromptUpdate as MutableMessageType<PostRequestPromptUpdate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "button_label",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "button_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var InteractionQuery$Runtime = (() => class _InteractionQuery extends Message<_InteractionQuery> {
  declare id: number;
  declare query: { case: "webSearchRequestQuery"; value: WebSearchRequestQuery } | { case: "askQuestionInteractionQuery"; value: AskQuestionInteractionQuery } | { case: "switchModeRequestQuery"; value: SwitchModeRequestQuery } | { case: "createPlanRequestQuery"; value: CreatePlanRequestQuery } | { case: "setupVmEnvironmentArgs"; value: SetupVmEnvironmentArgs } | { case: "webFetchRequestQuery"; value: WebFetchRequestQuery } | { case: "prManagementRequestQuery"; value: PrManagementRequestQuery } | { case: "mcpAuthRequestQuery"; value: McpAuthRequestQuery } | { case: "generateImageRequestQuery"; value: GenerateImageRequestQuery } | { case: "replaceEnvArgs"; value: ReplaceEnvArgs } | { case: "connectScmRequestQuery"; value: ConnectScmRequestQuery } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InteractionQuery>) {
    super();
    this.id = 0;
    this.query = { case: void 0 };
    proto3.util.initPartial(data, this as _InteractionQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InteractionQuery {
    return new _InteractionQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InteractionQuery {
    return new _InteractionQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InteractionQuery {
    return new _InteractionQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _InteractionQuery | PlainMessage<_InteractionQuery> | undefined | null, b2: _InteractionQuery | PlainMessage<_InteractionQuery> | undefined | null): boolean {
    return proto3.util.equals(_InteractionQuery as unknown as MessageType<_InteractionQuery>, a, b2);
  }
})();
export type InteractionQuery = InstanceType<typeof InteractionQuery$Runtime>;
var InteractionQuery: MessageType<InteractionQuery> = InteractionQuery$Runtime as unknown as MessageType<InteractionQuery>;
(InteractionQuery as MutableMessageType<InteractionQuery>).runtime = proto3;
(InteractionQuery as MutableMessageType<InteractionQuery>).typeName = "agent.v1.InteractionQuery";
(InteractionQuery as MutableMessageType<InteractionQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "web_search_request_query", kind: "message", T: WebSearchRequestQuery, oneof: "query" },
  { no: 3, name: "ask_question_interaction_query", kind: "message", T: AskQuestionInteractionQuery, oneof: "query" },
  { no: 4, name: "switch_mode_request_query", kind: "message", T: SwitchModeRequestQuery, oneof: "query" },
  { no: 7, name: "create_plan_request_query", kind: "message", T: CreatePlanRequestQuery, oneof: "query" },
  { no: 8, name: "setup_vm_environment_args", kind: "message", T: SetupVmEnvironmentArgs, oneof: "query" },
  { no: 9, name: "web_fetch_request_query", kind: "message", T: WebFetchRequestQuery, oneof: "query" },
  { no: 10, name: "pr_management_request_query", kind: "message", T: PrManagementRequestQuery, oneof: "query" },
  { no: 11, name: "mcp_auth_request_query", kind: "message", T: McpAuthRequestQuery, oneof: "query" },
  { no: 12, name: "generate_image_request_query", kind: "message", T: GenerateImageRequestQuery, oneof: "query" },
  { no: 13, name: "replace_env_args", kind: "message", T: ReplaceEnvArgs, oneof: "query" },
  { no: 14, name: "connect_scm_request_query", kind: "message", T: ConnectScmRequestQuery, oneof: "query" }
]);
var InteractionResponse$Runtime = (() => class _InteractionResponse extends Message<_InteractionResponse> {
  declare id: number;
  declare result: { case: "webSearchRequestResponse"; value: WebSearchRequestResponse } | { case: "askQuestionInteractionResponse"; value: AskQuestionInteractionResponse } | { case: "switchModeRequestResponse"; value: SwitchModeRequestResponse } | { case: "createPlanRequestResponse"; value: CreatePlanRequestResponse } | { case: "setupVmEnvironmentResult"; value: SetupVmEnvironmentResult } | { case: "webFetchRequestResponse"; value: WebFetchRequestResponse } | { case: "prManagementResult"; value: PrManagementResult } | { case: "mcpAuthRequestResponse"; value: McpAuthRequestResponse } | { case: "generateImageRequestResponse"; value: GenerateImageRequestResponse } | { case: "replaceEnvResult"; value: ReplaceEnvResult } | { case: "connectScmRequestResponse"; value: ConnectScmRequestResponse } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InteractionResponse>) {
    super();
    this.id = 0;
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _InteractionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _InteractionResponse {
    return new _InteractionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _InteractionResponse {
    return new _InteractionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _InteractionResponse {
    return new _InteractionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _InteractionResponse | PlainMessage<_InteractionResponse> | undefined | null, b2: _InteractionResponse | PlainMessage<_InteractionResponse> | undefined | null): boolean {
    return proto3.util.equals(_InteractionResponse as unknown as MessageType<_InteractionResponse>, a, b2);
  }
})();
export type InteractionResponse = InstanceType<typeof InteractionResponse$Runtime>;
var InteractionResponse: MessageType<InteractionResponse> = InteractionResponse$Runtime as unknown as MessageType<InteractionResponse>;
(InteractionResponse as MutableMessageType<InteractionResponse>).runtime = proto3;
(InteractionResponse as MutableMessageType<InteractionResponse>).typeName = "agent.v1.InteractionResponse";
(InteractionResponse as MutableMessageType<InteractionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  { no: 2, name: "web_search_request_response", kind: "message", T: WebSearchRequestResponse, oneof: "result" },
  { no: 3, name: "ask_question_interaction_response", kind: "message", T: AskQuestionInteractionResponse, oneof: "result" },
  { no: 4, name: "switch_mode_request_response", kind: "message", T: SwitchModeRequestResponse, oneof: "result" },
  { no: 7, name: "create_plan_request_response", kind: "message", T: CreatePlanRequestResponse, oneof: "result" },
  { no: 8, name: "setup_vm_environment_result", kind: "message", T: SetupVmEnvironmentResult, oneof: "result" },
  { no: 9, name: "web_fetch_request_response", kind: "message", T: WebFetchRequestResponse, oneof: "result" },
  { no: 10, name: "pr_management_result", kind: "message", T: PrManagementResult, oneof: "result" },
  { no: 11, name: "mcp_auth_request_response", kind: "message", T: McpAuthRequestResponse, oneof: "result" },
  { no: 12, name: "generate_image_request_response", kind: "message", T: GenerateImageRequestResponse, oneof: "result" },
  { no: 13, name: "replace_env_result", kind: "message", T: ReplaceEnvResult, oneof: "result" },
  { no: 14, name: "connect_scm_request_response", kind: "message", T: ConnectScmRequestResponse, oneof: "result" }
]);
var AskQuestionInteractionQuery$Runtime = (() => class _AskQuestionInteractionQuery extends Message<_AskQuestionInteractionQuery> {
  declare args?: AskQuestionArgs;
  declare toolCallId: string;
  constructor(data?: PartialMessage<_AskQuestionInteractionQuery>) {
    super();
    this.toolCallId = "";
    proto3.util.initPartial(data, this as _AskQuestionInteractionQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionInteractionQuery {
    return new _AskQuestionInteractionQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionInteractionQuery {
    return new _AskQuestionInteractionQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionInteractionQuery {
    return new _AskQuestionInteractionQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionInteractionQuery | PlainMessage<_AskQuestionInteractionQuery> | undefined | null, b2: _AskQuestionInteractionQuery | PlainMessage<_AskQuestionInteractionQuery> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionInteractionQuery as unknown as MessageType<_AskQuestionInteractionQuery>, a, b2);
  }
})();
export type AskQuestionInteractionQuery = InstanceType<typeof AskQuestionInteractionQuery$Runtime>;
var AskQuestionInteractionQuery: MessageType<AskQuestionInteractionQuery> = AskQuestionInteractionQuery$Runtime as unknown as MessageType<AskQuestionInteractionQuery>;
(AskQuestionInteractionQuery as MutableMessageType<AskQuestionInteractionQuery>).runtime = proto3;
(AskQuestionInteractionQuery as MutableMessageType<AskQuestionInteractionQuery>).typeName = "agent.v1.AskQuestionInteractionQuery";
(AskQuestionInteractionQuery as MutableMessageType<AskQuestionInteractionQuery>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "args", kind: "message", T: AskQuestionArgs },
  {
    no: 2,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AskQuestionInteractionResponse$Runtime = (() => class _AskQuestionInteractionResponse extends Message<_AskQuestionInteractionResponse> {
  declare result?: AskQuestionResult;
  constructor(data?: PartialMessage<_AskQuestionInteractionResponse>) {
    super();
    proto3.util.initPartial(data, this as _AskQuestionInteractionResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AskQuestionInteractionResponse {
    return new _AskQuestionInteractionResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AskQuestionInteractionResponse {
    return new _AskQuestionInteractionResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AskQuestionInteractionResponse {
    return new _AskQuestionInteractionResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AskQuestionInteractionResponse | PlainMessage<_AskQuestionInteractionResponse> | undefined | null, b2: _AskQuestionInteractionResponse | PlainMessage<_AskQuestionInteractionResponse> | undefined | null): boolean {
    return proto3.util.equals(_AskQuestionInteractionResponse as unknown as MessageType<_AskQuestionInteractionResponse>, a, b2);
  }
})();
export type AskQuestionInteractionResponse = InstanceType<typeof AskQuestionInteractionResponse$Runtime>;
var AskQuestionInteractionResponse: MessageType<AskQuestionInteractionResponse> = AskQuestionInteractionResponse$Runtime as unknown as MessageType<AskQuestionInteractionResponse>;
(AskQuestionInteractionResponse as MutableMessageType<AskQuestionInteractionResponse>).runtime = proto3;
(AskQuestionInteractionResponse as MutableMessageType<AskQuestionInteractionResponse>).typeName = "agent.v1.AskQuestionInteractionResponse";
(AskQuestionInteractionResponse as MutableMessageType<AskQuestionInteractionResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "result", kind: "message", T: AskQuestionResult }
]);
var PreCompactRequestQuery$Runtime = (() => class _PreCompactRequestQuery extends Message<_PreCompactRequestQuery> {
  declare trigger: string;
  declare contextUsagePercent: number;
  declare contextTokens: bigint;
  declare contextWindowSize: bigint;
  declare messageCount: number;
  declare messagesToCompact: number;
  declare isFirstCompaction: boolean;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_PreCompactRequestQuery>) {
    super();
    this.trigger = "";
    this.contextUsagePercent = 0;
    this.contextTokens = protoInt64.zero;
    this.contextWindowSize = protoInt64.zero;
    this.messageCount = 0;
    this.messagesToCompact = 0;
    this.isFirstCompaction = false;
    this.modelParams = [];
    proto3.util.initPartial(data, this as _PreCompactRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreCompactRequestQuery {
    return new _PreCompactRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreCompactRequestQuery {
    return new _PreCompactRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreCompactRequestQuery {
    return new _PreCompactRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _PreCompactRequestQuery | PlainMessage<_PreCompactRequestQuery> | undefined | null, b2: _PreCompactRequestQuery | PlainMessage<_PreCompactRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_PreCompactRequestQuery as unknown as MessageType<_PreCompactRequestQuery>, a, b2);
  }
})();
export type PreCompactRequestQuery = InstanceType<typeof PreCompactRequestQuery$Runtime>;
var PreCompactRequestQuery: MessageType<PreCompactRequestQuery> = PreCompactRequestQuery$Runtime as unknown as MessageType<PreCompactRequestQuery>;
(PreCompactRequestQuery as MutableMessageType<PreCompactRequestQuery>).runtime = proto3;
(PreCompactRequestQuery as MutableMessageType<PreCompactRequestQuery>).typeName = "agent.v1.PreCompactRequestQuery";
(PreCompactRequestQuery as MutableMessageType<PreCompactRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "trigger",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "context_usage_percent",
    kind: "scalar",
    T: 1
    /* ScalarType.DOUBLE */
  },
  {
    no: 3,
    name: "context_tokens",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 4,
    name: "context_window_size",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "message_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 6,
    name: "messages_to_compact",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 7,
    name: "is_first_compaction",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var PreCompactRequestResponse$Runtime = (() => class _PreCompactRequestResponse extends Message<_PreCompactRequestResponse> {
  declare userMessage?: string;
  constructor(data?: PartialMessage<_PreCompactRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _PreCompactRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreCompactRequestResponse {
    return new _PreCompactRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreCompactRequestResponse {
    return new _PreCompactRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreCompactRequestResponse {
    return new _PreCompactRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PreCompactRequestResponse | PlainMessage<_PreCompactRequestResponse> | undefined | null, b2: _PreCompactRequestResponse | PlainMessage<_PreCompactRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_PreCompactRequestResponse as unknown as MessageType<_PreCompactRequestResponse>, a, b2);
  }
})();
export type PreCompactRequestResponse = InstanceType<typeof PreCompactRequestResponse$Runtime>;
var PreCompactRequestResponse: MessageType<PreCompactRequestResponse> = PreCompactRequestResponse$Runtime as unknown as MessageType<PreCompactRequestResponse>;
(PreCompactRequestResponse as MutableMessageType<PreCompactRequestResponse>).runtime = proto3;
(PreCompactRequestResponse as MutableMessageType<PreCompactRequestResponse>).typeName = "agent.v1.PreCompactRequestResponse";
(PreCompactRequestResponse as MutableMessageType<PreCompactRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "user_message", kind: "scalar", T: 9, opt: true }
]);
var SubagentStartRequestQuery$Runtime = (() => class _SubagentStartRequestQuery extends Message<_SubagentStartRequestQuery> {
  declare subagentId: string;
  declare subagentType: string;
  declare task: string;
  declare parentConversationId: string;
  declare toolCallId?: string;
  declare subagentModel?: string;
  declare isParallelWorker: boolean;
  declare gitBranch?: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_SubagentStartRequestQuery>) {
    super();
    this.subagentId = "";
    this.subagentType = "";
    this.task = "";
    this.parentConversationId = "";
    this.isParallelWorker = false;
    this.modelParams = [];
    proto3.util.initPartial(data, this as _SubagentStartRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentStartRequestQuery {
    return new _SubagentStartRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentStartRequestQuery {
    return new _SubagentStartRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentStartRequestQuery {
    return new _SubagentStartRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentStartRequestQuery | PlainMessage<_SubagentStartRequestQuery> | undefined | null, b2: _SubagentStartRequestQuery | PlainMessage<_SubagentStartRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_SubagentStartRequestQuery as unknown as MessageType<_SubagentStartRequestQuery>, a, b2);
  }
})();
export type SubagentStartRequestQuery = InstanceType<typeof SubagentStartRequestQuery$Runtime>;
var SubagentStartRequestQuery: MessageType<SubagentStartRequestQuery> = SubagentStartRequestQuery$Runtime as unknown as MessageType<SubagentStartRequestQuery>;
(SubagentStartRequestQuery as MutableMessageType<SubagentStartRequestQuery>).runtime = proto3;
(SubagentStartRequestQuery as MutableMessageType<SubagentStartRequestQuery>).typeName = "agent.v1.SubagentStartRequestQuery";
(SubagentStartRequestQuery as MutableMessageType<SubagentStartRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subagent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "task",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "parent_conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "tool_call_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "subagent_model", kind: "scalar", T: 9, opt: true },
  {
    no: 7,
    name: "is_parallel_worker",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "git_branch", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var SubagentStartRequestResponse$Runtime = (() => class _SubagentStartRequestResponse extends Message<_SubagentStartRequestResponse> {
  declare permission?: string;
  declare userMessage?: string;
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_SubagentStartRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _SubagentStartRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentStartRequestResponse {
    return new _SubagentStartRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentStartRequestResponse {
    return new _SubagentStartRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentStartRequestResponse {
    return new _SubagentStartRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentStartRequestResponse | PlainMessage<_SubagentStartRequestResponse> | undefined | null, b2: _SubagentStartRequestResponse | PlainMessage<_SubagentStartRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubagentStartRequestResponse as unknown as MessageType<_SubagentStartRequestResponse>, a, b2);
  }
})();
export type SubagentStartRequestResponse = InstanceType<typeof SubagentStartRequestResponse$Runtime>;
var SubagentStartRequestResponse: MessageType<SubagentStartRequestResponse> = SubagentStartRequestResponse$Runtime as unknown as MessageType<SubagentStartRequestResponse>;
(SubagentStartRequestResponse as MutableMessageType<SubagentStartRequestResponse>).runtime = proto3;
(SubagentStartRequestResponse as MutableMessageType<SubagentStartRequestResponse>).typeName = "agent.v1.SubagentStartRequestResponse";
(SubagentStartRequestResponse as MutableMessageType<SubagentStartRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "permission", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var SubagentStopRequestQuery$Runtime = (() => class _SubagentStopRequestQuery extends Message<_SubagentStopRequestQuery> {
  declare subagentId: string;
  declare subagentType: string;
  declare status: string;
  declare durationMs: bigint;
  declare summary?: string;
  declare parentConversationId: string;
  declare messageCount: number;
  declare toolCallCount: number;
  declare errorMessage?: string;
  declare modifiedFiles: string[];
  declare gitBranch?: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare loopCount: number;
  declare task?: string;
  declare description?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_SubagentStopRequestQuery>) {
    super();
    this.subagentId = "";
    this.subagentType = "";
    this.status = "";
    this.durationMs = protoInt64.zero;
    this.parentConversationId = "";
    this.messageCount = 0;
    this.toolCallCount = 0;
    this.modifiedFiles = [];
    this.loopCount = 0;
    this.modelParams = [];
    proto3.util.initPartial(data, this as _SubagentStopRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentStopRequestQuery {
    return new _SubagentStopRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentStopRequestQuery {
    return new _SubagentStopRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentStopRequestQuery {
    return new _SubagentStopRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentStopRequestQuery | PlainMessage<_SubagentStopRequestQuery> | undefined | null, b2: _SubagentStopRequestQuery | PlainMessage<_SubagentStopRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_SubagentStopRequestQuery as unknown as MessageType<_SubagentStopRequestQuery>, a, b2);
  }
})();
export type SubagentStopRequestQuery = InstanceType<typeof SubagentStopRequestQuery$Runtime>;
var SubagentStopRequestQuery: MessageType<SubagentStopRequestQuery> = SubagentStopRequestQuery$Runtime as unknown as MessageType<SubagentStopRequestQuery>;
(SubagentStopRequestQuery as MutableMessageType<SubagentStopRequestQuery>).runtime = proto3;
(SubagentStopRequestQuery as MutableMessageType<SubagentStopRequestQuery>).typeName = "agent.v1.SubagentStopRequestQuery";
(SubagentStopRequestQuery as MutableMessageType<SubagentStopRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subagent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "duration_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 5, name: "summary", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "parent_conversation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "message_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 8,
    name: "tool_call_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 9, name: "error_message", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "modified_files", kind: "scalar", T: 9, repeated: true },
  { no: 11, name: "git_branch", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "model", kind: "scalar", T: 9, opt: true },
  {
    no: 15,
    name: "loop_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 16, name: "task", kind: "scalar", T: 9, opt: true },
  { no: 17, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 19, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var SubagentStopRequestResponse$Runtime = (() => class _SubagentStopRequestResponse extends Message<_SubagentStopRequestResponse> {
  declare followupMessage?: string;
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_SubagentStopRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _SubagentStopRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentStopRequestResponse {
    return new _SubagentStopRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentStopRequestResponse {
    return new _SubagentStopRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentStopRequestResponse {
    return new _SubagentStopRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentStopRequestResponse | PlainMessage<_SubagentStopRequestResponse> | undefined | null, b2: _SubagentStopRequestResponse | PlainMessage<_SubagentStopRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_SubagentStopRequestResponse as unknown as MessageType<_SubagentStopRequestResponse>, a, b2);
  }
})();
export type SubagentStopRequestResponse = InstanceType<typeof SubagentStopRequestResponse$Runtime>;
var SubagentStopRequestResponse: MessageType<SubagentStopRequestResponse> = SubagentStopRequestResponse$Runtime as unknown as MessageType<SubagentStopRequestResponse>;
(SubagentStopRequestResponse as MutableMessageType<SubagentStopRequestResponse>).runtime = proto3;
(SubagentStopRequestResponse as MutableMessageType<SubagentStopRequestResponse>).typeName = "agent.v1.SubagentStopRequestResponse";
(SubagentStopRequestResponse as MutableMessageType<SubagentStopRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "followup_message", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var BeforeSubmitPromptAttachment$Runtime = (() => class _BeforeSubmitPromptAttachment extends Message<_BeforeSubmitPromptAttachment> {
  declare type: string;
  declare filePath: string;
  constructor(data?: PartialMessage<_BeforeSubmitPromptAttachment>) {
    super();
    this.type = "";
    this.filePath = "";
    proto3.util.initPartial(data, this as _BeforeSubmitPromptAttachment);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BeforeSubmitPromptAttachment {
    return new _BeforeSubmitPromptAttachment().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptAttachment {
    return new _BeforeSubmitPromptAttachment().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptAttachment {
    return new _BeforeSubmitPromptAttachment().fromJsonString(jsonString, options);
  }
  static equals(a: _BeforeSubmitPromptAttachment | PlainMessage<_BeforeSubmitPromptAttachment> | undefined | null, b2: _BeforeSubmitPromptAttachment | PlainMessage<_BeforeSubmitPromptAttachment> | undefined | null): boolean {
    return proto3.util.equals(_BeforeSubmitPromptAttachment as unknown as MessageType<_BeforeSubmitPromptAttachment>, a, b2);
  }
})();
export type BeforeSubmitPromptAttachment = InstanceType<typeof BeforeSubmitPromptAttachment$Runtime>;
var BeforeSubmitPromptAttachment: MessageType<BeforeSubmitPromptAttachment> = BeforeSubmitPromptAttachment$Runtime as unknown as MessageType<BeforeSubmitPromptAttachment>;
(BeforeSubmitPromptAttachment as MutableMessageType<BeforeSubmitPromptAttachment>).runtime = proto3;
(BeforeSubmitPromptAttachment as MutableMessageType<BeforeSubmitPromptAttachment>).typeName = "agent.v1.BeforeSubmitPromptAttachment";
(BeforeSubmitPromptAttachment as MutableMessageType<BeforeSubmitPromptAttachment>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type",
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
var BeforeSubmitPromptRequestQuery$Runtime = (() => class _BeforeSubmitPromptRequestQuery extends Message<_BeforeSubmitPromptRequestQuery> {
  declare prompt: string;
  declare attachments: BeforeSubmitPromptAttachment[];
  declare composerMode?: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_BeforeSubmitPromptRequestQuery>) {
    super();
    this.prompt = "";
    this.attachments = [];
    this.modelParams = [];
    proto3.util.initPartial(data, this as _BeforeSubmitPromptRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BeforeSubmitPromptRequestQuery {
    return new _BeforeSubmitPromptRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptRequestQuery {
    return new _BeforeSubmitPromptRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptRequestQuery {
    return new _BeforeSubmitPromptRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _BeforeSubmitPromptRequestQuery | PlainMessage<_BeforeSubmitPromptRequestQuery> | undefined | null, b2: _BeforeSubmitPromptRequestQuery | PlainMessage<_BeforeSubmitPromptRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_BeforeSubmitPromptRequestQuery as unknown as MessageType<_BeforeSubmitPromptRequestQuery>, a, b2);
  }
})();
export type BeforeSubmitPromptRequestQuery = InstanceType<typeof BeforeSubmitPromptRequestQuery$Runtime>;
var BeforeSubmitPromptRequestQuery: MessageType<BeforeSubmitPromptRequestQuery> = BeforeSubmitPromptRequestQuery$Runtime as unknown as MessageType<BeforeSubmitPromptRequestQuery>;
(BeforeSubmitPromptRequestQuery as MutableMessageType<BeforeSubmitPromptRequestQuery>).runtime = proto3;
(BeforeSubmitPromptRequestQuery as MutableMessageType<BeforeSubmitPromptRequestQuery>).typeName = "agent.v1.BeforeSubmitPromptRequestQuery";
(BeforeSubmitPromptRequestQuery as MutableMessageType<BeforeSubmitPromptRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "attachments", kind: "message", T: BeforeSubmitPromptAttachment, repeated: true },
  { no: 3, name: "composer_mode", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var BeforeSubmitPromptRequestResponse$Runtime = (() => class _BeforeSubmitPromptRequestResponse extends Message<_BeforeSubmitPromptRequestResponse> {
  declare continue?: boolean;
  declare userMessage?: string;
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_BeforeSubmitPromptRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _BeforeSubmitPromptRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _BeforeSubmitPromptRequestResponse {
    return new _BeforeSubmitPromptRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptRequestResponse {
    return new _BeforeSubmitPromptRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _BeforeSubmitPromptRequestResponse {
    return new _BeforeSubmitPromptRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _BeforeSubmitPromptRequestResponse | PlainMessage<_BeforeSubmitPromptRequestResponse> | undefined | null, b2: _BeforeSubmitPromptRequestResponse | PlainMessage<_BeforeSubmitPromptRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_BeforeSubmitPromptRequestResponse as unknown as MessageType<_BeforeSubmitPromptRequestResponse>, a, b2);
  }
})();
export type BeforeSubmitPromptRequestResponse = InstanceType<typeof BeforeSubmitPromptRequestResponse$Runtime>;
var BeforeSubmitPromptRequestResponse: MessageType<BeforeSubmitPromptRequestResponse> = BeforeSubmitPromptRequestResponse$Runtime as unknown as MessageType<BeforeSubmitPromptRequestResponse>;
(BeforeSubmitPromptRequestResponse as MutableMessageType<BeforeSubmitPromptRequestResponse>).runtime = proto3;
(BeforeSubmitPromptRequestResponse as MutableMessageType<BeforeSubmitPromptRequestResponse>).typeName = "agent.v1.BeforeSubmitPromptRequestResponse";
(BeforeSubmitPromptRequestResponse as MutableMessageType<BeforeSubmitPromptRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "continue", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var AfterAgentResponseRequestQuery$Runtime = (() => class _AfterAgentResponseRequestQuery extends Message<_AfterAgentResponseRequestQuery> {
  declare text: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  declare inputTokens?: bigint;
  declare outputTokens?: bigint;
  declare cacheReadTokens?: bigint;
  declare cacheWriteTokens?: bigint;
  constructor(data?: PartialMessage<_AfterAgentResponseRequestQuery>) {
    super();
    this.text = "";
    this.modelParams = [];
    proto3.util.initPartial(data, this as _AfterAgentResponseRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AfterAgentResponseRequestQuery {
    return new _AfterAgentResponseRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AfterAgentResponseRequestQuery {
    return new _AfterAgentResponseRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AfterAgentResponseRequestQuery {
    return new _AfterAgentResponseRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _AfterAgentResponseRequestQuery | PlainMessage<_AfterAgentResponseRequestQuery> | undefined | null, b2: _AfterAgentResponseRequestQuery | PlainMessage<_AfterAgentResponseRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_AfterAgentResponseRequestQuery as unknown as MessageType<_AfterAgentResponseRequestQuery>, a, b2);
  }
})();
export type AfterAgentResponseRequestQuery = InstanceType<typeof AfterAgentResponseRequestQuery$Runtime>;
var AfterAgentResponseRequestQuery: MessageType<AfterAgentResponseRequestQuery> = AfterAgentResponseRequestQuery$Runtime as unknown as MessageType<AfterAgentResponseRequestQuery>;
(AfterAgentResponseRequestQuery as MutableMessageType<AfterAgentResponseRequestQuery>).runtime = proto3;
(AfterAgentResponseRequestQuery as MutableMessageType<AfterAgentResponseRequestQuery>).typeName = "agent.v1.AfterAgentResponseRequestQuery";
(AfterAgentResponseRequestQuery as MutableMessageType<AfterAgentResponseRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true },
  { no: 7, name: "input_tokens", kind: "scalar", T: 3, opt: true },
  { no: 8, name: "output_tokens", kind: "scalar", T: 3, opt: true },
  { no: 9, name: "cache_read_tokens", kind: "scalar", T: 3, opt: true },
  { no: 10, name: "cache_write_tokens", kind: "scalar", T: 3, opt: true }
]);
var AfterAgentResponseRequestResponse$Runtime = (() => class _AfterAgentResponseRequestResponse extends Message<_AfterAgentResponseRequestResponse> {
  constructor(data?: PartialMessage<_AfterAgentResponseRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _AfterAgentResponseRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AfterAgentResponseRequestResponse {
    return new _AfterAgentResponseRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AfterAgentResponseRequestResponse {
    return new _AfterAgentResponseRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AfterAgentResponseRequestResponse {
    return new _AfterAgentResponseRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AfterAgentResponseRequestResponse | PlainMessage<_AfterAgentResponseRequestResponse> | undefined | null, b2: _AfterAgentResponseRequestResponse | PlainMessage<_AfterAgentResponseRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_AfterAgentResponseRequestResponse as unknown as MessageType<_AfterAgentResponseRequestResponse>, a, b2);
  }
})();
export type AfterAgentResponseRequestResponse = InstanceType<typeof AfterAgentResponseRequestResponse$Runtime>;
var AfterAgentResponseRequestResponse: MessageType<AfterAgentResponseRequestResponse> = AfterAgentResponseRequestResponse$Runtime as unknown as MessageType<AfterAgentResponseRequestResponse>;
(AfterAgentResponseRequestResponse as MutableMessageType<AfterAgentResponseRequestResponse>).runtime = proto3;
(AfterAgentResponseRequestResponse as MutableMessageType<AfterAgentResponseRequestResponse>).typeName = "agent.v1.AfterAgentResponseRequestResponse";
(AfterAgentResponseRequestResponse as MutableMessageType<AfterAgentResponseRequestResponse>).fields = proto3.util.newFieldList(() => []);
var AfterAgentThoughtRequestQuery$Runtime = (() => class _AfterAgentThoughtRequestQuery extends Message<_AfterAgentThoughtRequestQuery> {
  declare text: string;
  declare durationMs?: bigint;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_AfterAgentThoughtRequestQuery>) {
    super();
    this.text = "";
    this.modelParams = [];
    proto3.util.initPartial(data, this as _AfterAgentThoughtRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AfterAgentThoughtRequestQuery {
    return new _AfterAgentThoughtRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AfterAgentThoughtRequestQuery {
    return new _AfterAgentThoughtRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AfterAgentThoughtRequestQuery {
    return new _AfterAgentThoughtRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _AfterAgentThoughtRequestQuery | PlainMessage<_AfterAgentThoughtRequestQuery> | undefined | null, b2: _AfterAgentThoughtRequestQuery | PlainMessage<_AfterAgentThoughtRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_AfterAgentThoughtRequestQuery as unknown as MessageType<_AfterAgentThoughtRequestQuery>, a, b2);
  }
})();
export type AfterAgentThoughtRequestQuery = InstanceType<typeof AfterAgentThoughtRequestQuery$Runtime>;
var AfterAgentThoughtRequestQuery: MessageType<AfterAgentThoughtRequestQuery> = AfterAgentThoughtRequestQuery$Runtime as unknown as MessageType<AfterAgentThoughtRequestQuery>;
(AfterAgentThoughtRequestQuery as MutableMessageType<AfterAgentThoughtRequestQuery>).runtime = proto3;
(AfterAgentThoughtRequestQuery as MutableMessageType<AfterAgentThoughtRequestQuery>).typeName = "agent.v1.AfterAgentThoughtRequestQuery";
(AfterAgentThoughtRequestQuery as MutableMessageType<AfterAgentThoughtRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "duration_ms", kind: "scalar", T: 3, opt: true },
  { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var AfterAgentThoughtRequestResponse$Runtime = (() => class _AfterAgentThoughtRequestResponse extends Message<_AfterAgentThoughtRequestResponse> {
  constructor(data?: PartialMessage<_AfterAgentThoughtRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _AfterAgentThoughtRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _AfterAgentThoughtRequestResponse {
    return new _AfterAgentThoughtRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _AfterAgentThoughtRequestResponse {
    return new _AfterAgentThoughtRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _AfterAgentThoughtRequestResponse {
    return new _AfterAgentThoughtRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _AfterAgentThoughtRequestResponse | PlainMessage<_AfterAgentThoughtRequestResponse> | undefined | null, b2: _AfterAgentThoughtRequestResponse | PlainMessage<_AfterAgentThoughtRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_AfterAgentThoughtRequestResponse as unknown as MessageType<_AfterAgentThoughtRequestResponse>, a, b2);
  }
})();
export type AfterAgentThoughtRequestResponse = InstanceType<typeof AfterAgentThoughtRequestResponse$Runtime>;
var AfterAgentThoughtRequestResponse: MessageType<AfterAgentThoughtRequestResponse> = AfterAgentThoughtRequestResponse$Runtime as unknown as MessageType<AfterAgentThoughtRequestResponse>;
(AfterAgentThoughtRequestResponse as MutableMessageType<AfterAgentThoughtRequestResponse>).runtime = proto3;
(AfterAgentThoughtRequestResponse as MutableMessageType<AfterAgentThoughtRequestResponse>).typeName = "agent.v1.AfterAgentThoughtRequestResponse";
(AfterAgentThoughtRequestResponse as MutableMessageType<AfterAgentThoughtRequestResponse>).fields = proto3.util.newFieldList(() => []);
var StopRequestQuery$Runtime = (() => class _StopRequestQuery extends Message<_StopRequestQuery> {
  declare status: string;
  declare loopCount: number;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  declare inputTokens?: bigint;
  declare outputTokens?: bigint;
  declare cacheReadTokens?: bigint;
  declare cacheWriteTokens?: bigint;
  constructor(data?: PartialMessage<_StopRequestQuery>) {
    super();
    this.status = "";
    this.loopCount = 0;
    this.modelParams = [];
    proto3.util.initPartial(data, this as _StopRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopRequestQuery {
    return new _StopRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopRequestQuery {
    return new _StopRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopRequestQuery {
    return new _StopRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _StopRequestQuery | PlainMessage<_StopRequestQuery> | undefined | null, b2: _StopRequestQuery | PlainMessage<_StopRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_StopRequestQuery as unknown as MessageType<_StopRequestQuery>, a, b2);
  }
})();
export type StopRequestQuery = InstanceType<typeof StopRequestQuery$Runtime>;
var StopRequestQuery: MessageType<StopRequestQuery> = StopRequestQuery$Runtime as unknown as MessageType<StopRequestQuery>;
(StopRequestQuery as MutableMessageType<StopRequestQuery>).runtime = proto3;
(StopRequestQuery as MutableMessageType<StopRequestQuery>).typeName = "agent.v1.StopRequestQuery";
(StopRequestQuery as MutableMessageType<StopRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "loop_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 3, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true },
  { no: 8, name: "input_tokens", kind: "scalar", T: 3, opt: true },
  { no: 9, name: "output_tokens", kind: "scalar", T: 3, opt: true },
  { no: 10, name: "cache_read_tokens", kind: "scalar", T: 3, opt: true },
  { no: 11, name: "cache_write_tokens", kind: "scalar", T: 3, opt: true }
]);
var StopRequestResponse$Runtime = (() => class _StopRequestResponse extends Message<_StopRequestResponse> {
  declare followupMessage?: string;
  constructor(data?: PartialMessage<_StopRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _StopRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _StopRequestResponse {
    return new _StopRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _StopRequestResponse {
    return new _StopRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _StopRequestResponse {
    return new _StopRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _StopRequestResponse | PlainMessage<_StopRequestResponse> | undefined | null, b2: _StopRequestResponse | PlainMessage<_StopRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_StopRequestResponse as unknown as MessageType<_StopRequestResponse>, a, b2);
  }
})();
export type StopRequestResponse = InstanceType<typeof StopRequestResponse$Runtime>;
var StopRequestResponse: MessageType<StopRequestResponse> = StopRequestResponse$Runtime as unknown as MessageType<StopRequestResponse>;
(StopRequestResponse as MutableMessageType<StopRequestResponse>).runtime = proto3;
(StopRequestResponse as MutableMessageType<StopRequestResponse>).typeName = "agent.v1.StopRequestResponse";
(StopRequestResponse as MutableMessageType<StopRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "followup_message", kind: "scalar", T: 9, opt: true }
]);
var PreToolUseRequestQuery$Runtime = (() => class _PreToolUseRequestQuery extends Message<_PreToolUseRequestQuery> {
  declare toolName: string;
  declare toolInput?: Struct;
  declare toolUseId: string;
  declare cwd?: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_PreToolUseRequestQuery>) {
    super();
    this.toolName = "";
    this.toolUseId = "";
    this.modelParams = [];
    proto3.util.initPartial(data, this as _PreToolUseRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreToolUseRequestQuery {
    return new _PreToolUseRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreToolUseRequestQuery {
    return new _PreToolUseRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreToolUseRequestQuery {
    return new _PreToolUseRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _PreToolUseRequestQuery | PlainMessage<_PreToolUseRequestQuery> | undefined | null, b2: _PreToolUseRequestQuery | PlainMessage<_PreToolUseRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_PreToolUseRequestQuery as unknown as MessageType<_PreToolUseRequestQuery>, a, b2);
  }
})();
export type PreToolUseRequestQuery = InstanceType<typeof PreToolUseRequestQuery$Runtime>;
var PreToolUseRequestQuery: MessageType<PreToolUseRequestQuery> = PreToolUseRequestQuery$Runtime as unknown as MessageType<PreToolUseRequestQuery>;
(PreToolUseRequestQuery as MutableMessageType<PreToolUseRequestQuery>).runtime = proto3;
(PreToolUseRequestQuery as MutableMessageType<PreToolUseRequestQuery>).typeName = "agent.v1.PreToolUseRequestQuery";
(PreToolUseRequestQuery as MutableMessageType<PreToolUseRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_input", kind: "message", T: Struct },
  {
    no: 3,
    name: "tool_use_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "cwd", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var PreToolUseRequestResponse$Runtime = (() => class _PreToolUseRequestResponse extends Message<_PreToolUseRequestResponse> {
  declare permission?: string;
  declare userMessage?: string;
  declare agentMessage?: string;
  declare updatedInput?: string;
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_PreToolUseRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _PreToolUseRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreToolUseRequestResponse {
    return new _PreToolUseRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreToolUseRequestResponse {
    return new _PreToolUseRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreToolUseRequestResponse {
    return new _PreToolUseRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PreToolUseRequestResponse | PlainMessage<_PreToolUseRequestResponse> | undefined | null, b2: _PreToolUseRequestResponse | PlainMessage<_PreToolUseRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_PreToolUseRequestResponse as unknown as MessageType<_PreToolUseRequestResponse>, a, b2);
  }
})();
export type PreToolUseRequestResponse = InstanceType<typeof PreToolUseRequestResponse$Runtime>;
var PreToolUseRequestResponse: MessageType<PreToolUseRequestResponse> = PreToolUseRequestResponse$Runtime as unknown as MessageType<PreToolUseRequestResponse>;
(PreToolUseRequestResponse as MutableMessageType<PreToolUseRequestResponse>).runtime = proto3;
(PreToolUseRequestResponse as MutableMessageType<PreToolUseRequestResponse>).typeName = "agent.v1.PreToolUseRequestResponse";
(PreToolUseRequestResponse as MutableMessageType<PreToolUseRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "permission", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "user_message", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "agent_message", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "updated_input", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var PostToolUseRequestQuery$Runtime = (() => class _PostToolUseRequestQuery extends Message<_PostToolUseRequestQuery> {
  declare toolName: string;
  declare toolInput?: Struct;
  declare toolOutput: string;
  declare durationMs: bigint;
  declare toolUseId: string;
  declare cwd?: string;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_PostToolUseRequestQuery>) {
    super();
    this.toolName = "";
    this.toolOutput = "";
    this.durationMs = protoInt64.zero;
    this.toolUseId = "";
    this.modelParams = [];
    proto3.util.initPartial(data, this as _PostToolUseRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostToolUseRequestQuery {
    return new _PostToolUseRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostToolUseRequestQuery {
    return new _PostToolUseRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostToolUseRequestQuery {
    return new _PostToolUseRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _PostToolUseRequestQuery | PlainMessage<_PostToolUseRequestQuery> | undefined | null, b2: _PostToolUseRequestQuery | PlainMessage<_PostToolUseRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_PostToolUseRequestQuery as unknown as MessageType<_PostToolUseRequestQuery>, a, b2);
  }
})();
export type PostToolUseRequestQuery = InstanceType<typeof PostToolUseRequestQuery$Runtime>;
var PostToolUseRequestQuery: MessageType<PostToolUseRequestQuery> = PostToolUseRequestQuery$Runtime as unknown as MessageType<PostToolUseRequestQuery>;
(PostToolUseRequestQuery as MutableMessageType<PostToolUseRequestQuery>).runtime = proto3;
(PostToolUseRequestQuery as MutableMessageType<PostToolUseRequestQuery>).typeName = "agent.v1.PostToolUseRequestQuery";
(PostToolUseRequestQuery as MutableMessageType<PostToolUseRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_input", kind: "message", T: Struct },
  {
    no: 3,
    name: "tool_output",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "duration_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 5,
    name: "tool_use_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "cwd", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var PostToolUseRequestResponse$Runtime = (() => class _PostToolUseRequestResponse extends Message<_PostToolUseRequestResponse> {
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_PostToolUseRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _PostToolUseRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostToolUseRequestResponse {
    return new _PostToolUseRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostToolUseRequestResponse {
    return new _PostToolUseRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostToolUseRequestResponse {
    return new _PostToolUseRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PostToolUseRequestResponse | PlainMessage<_PostToolUseRequestResponse> | undefined | null, b2: _PostToolUseRequestResponse | PlainMessage<_PostToolUseRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_PostToolUseRequestResponse as unknown as MessageType<_PostToolUseRequestResponse>, a, b2);
  }
})();
export type PostToolUseRequestResponse = InstanceType<typeof PostToolUseRequestResponse$Runtime>;
var PostToolUseRequestResponse: MessageType<PostToolUseRequestResponse> = PostToolUseRequestResponse$Runtime as unknown as MessageType<PostToolUseRequestResponse>;
(PostToolUseRequestResponse as MutableMessageType<PostToolUseRequestResponse>).runtime = proto3;
(PostToolUseRequestResponse as MutableMessageType<PostToolUseRequestResponse>).typeName = "agent.v1.PostToolUseRequestResponse";
(PostToolUseRequestResponse as MutableMessageType<PostToolUseRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var PostToolUseFailureRequestQuery$Runtime = (() => class _PostToolUseFailureRequestQuery extends Message<_PostToolUseFailureRequestQuery> {
  declare toolName: string;
  declare toolInput?: Struct;
  declare errorMessage: string;
  declare failureType: string;
  declare durationMs: bigint;
  declare toolUseId: string;
  declare isInterrupt: boolean;
  declare conversationId?: string;
  declare generationId?: string;
  declare model?: string;
  declare modelId?: string;
  declare modelParams: RequestedModel_ModelParameterValue[];
  constructor(data?: PartialMessage<_PostToolUseFailureRequestQuery>) {
    super();
    this.toolName = "";
    this.errorMessage = "";
    this.failureType = "";
    this.durationMs = protoInt64.zero;
    this.toolUseId = "";
    this.isInterrupt = false;
    this.modelParams = [];
    proto3.util.initPartial(data, this as _PostToolUseFailureRequestQuery);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostToolUseFailureRequestQuery {
    return new _PostToolUseFailureRequestQuery().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostToolUseFailureRequestQuery {
    return new _PostToolUseFailureRequestQuery().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostToolUseFailureRequestQuery {
    return new _PostToolUseFailureRequestQuery().fromJsonString(jsonString, options);
  }
  static equals(a: _PostToolUseFailureRequestQuery | PlainMessage<_PostToolUseFailureRequestQuery> | undefined | null, b2: _PostToolUseFailureRequestQuery | PlainMessage<_PostToolUseFailureRequestQuery> | undefined | null): boolean {
    return proto3.util.equals(_PostToolUseFailureRequestQuery as unknown as MessageType<_PostToolUseFailureRequestQuery>, a, b2);
  }
})();
export type PostToolUseFailureRequestQuery = InstanceType<typeof PostToolUseFailureRequestQuery$Runtime>;
var PostToolUseFailureRequestQuery: MessageType<PostToolUseFailureRequestQuery> = PostToolUseFailureRequestQuery$Runtime as unknown as MessageType<PostToolUseFailureRequestQuery>;
(PostToolUseFailureRequestQuery as MutableMessageType<PostToolUseFailureRequestQuery>).runtime = proto3;
(PostToolUseFailureRequestQuery as MutableMessageType<PostToolUseFailureRequestQuery>).typeName = "agent.v1.PostToolUseFailureRequestQuery";
(PostToolUseFailureRequestQuery as MutableMessageType<PostToolUseFailureRequestQuery>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "tool_input", kind: "message", T: Struct },
  {
    no: 3,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "failure_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "duration_ms",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 6,
    name: "tool_use_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "is_interrupt",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "conversation_id", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "generation_id", kind: "scalar", T: 9, opt: true },
  { no: 10, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "model_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "model_params", kind: "message", T: RequestedModel_ModelParameterValue, repeated: true }
]);
var PostToolUseFailureRequestResponse$Runtime = (() => class _PostToolUseFailureRequestResponse extends Message<_PostToolUseFailureRequestResponse> {
  declare additionalContext?: string;
  constructor(data?: PartialMessage<_PostToolUseFailureRequestResponse>) {
    super();
    proto3.util.initPartial(data, this as _PostToolUseFailureRequestResponse);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PostToolUseFailureRequestResponse {
    return new _PostToolUseFailureRequestResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PostToolUseFailureRequestResponse {
    return new _PostToolUseFailureRequestResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PostToolUseFailureRequestResponse {
    return new _PostToolUseFailureRequestResponse().fromJsonString(jsonString, options);
  }
  static equals(a: _PostToolUseFailureRequestResponse | PlainMessage<_PostToolUseFailureRequestResponse> | undefined | null, b2: _PostToolUseFailureRequestResponse | PlainMessage<_PostToolUseFailureRequestResponse> | undefined | null): boolean {
    return proto3.util.equals(_PostToolUseFailureRequestResponse as unknown as MessageType<_PostToolUseFailureRequestResponse>, a, b2);
  }
})();
export type PostToolUseFailureRequestResponse = InstanceType<typeof PostToolUseFailureRequestResponse$Runtime>;
var PostToolUseFailureRequestResponse: MessageType<PostToolUseFailureRequestResponse> = PostToolUseFailureRequestResponse$Runtime as unknown as MessageType<PostToolUseFailureRequestResponse>;
(PostToolUseFailureRequestResponse as MutableMessageType<PostToolUseFailureRequestResponse>).runtime = proto3;
(PostToolUseFailureRequestResponse as MutableMessageType<PostToolUseFailureRequestResponse>).typeName = "agent.v1.PostToolUseFailureRequestResponse";
(PostToolUseFailureRequestResponse as MutableMessageType<PostToolUseFailureRequestResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "additional_context", kind: "scalar", T: 9, opt: true }
]);
var TaskToolCallArgsProto$Runtime = (() => class _TaskToolCallArgsProto extends Message<_TaskToolCallArgsProto> {
  declare description: string;
  declare prompt: string;
  declare model?: string;
  declare subagentType: string;
  declare resume?: string;
  declare readonly?: boolean;
  declare runInBackground?: boolean;
  declare attachments: string[];
  declare environment: SubagentExecutionEnvironment;
  declare cloudBaseBranch?: string;
  declare cloudRequestedEnvironmentBuildId?: string;
  declare machine?: TargetMachine;
  constructor(data?: PartialMessage<_TaskToolCallArgsProto>) {
    super();
    this.description = "";
    this.prompt = "";
    this.subagentType = "";
    this.attachments = [];
    this.environment = SubagentExecutionEnvironment.UNSPECIFIED;
    proto3.util.initPartial(data, this as _TaskToolCallArgsProto);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _TaskToolCallArgsProto {
    return new _TaskToolCallArgsProto().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _TaskToolCallArgsProto {
    return new _TaskToolCallArgsProto().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _TaskToolCallArgsProto {
    return new _TaskToolCallArgsProto().fromJsonString(jsonString, options);
  }
  static equals(a: _TaskToolCallArgsProto | PlainMessage<_TaskToolCallArgsProto> | undefined | null, b2: _TaskToolCallArgsProto | PlainMessage<_TaskToolCallArgsProto> | undefined | null): boolean {
    return proto3.util.equals(_TaskToolCallArgsProto as unknown as MessageType<_TaskToolCallArgsProto>, a, b2);
  }
})();
export type TaskToolCallArgsProto = InstanceType<typeof TaskToolCallArgsProto$Runtime>;
var TaskToolCallArgsProto: MessageType<TaskToolCallArgsProto> = TaskToolCallArgsProto$Runtime as unknown as MessageType<TaskToolCallArgsProto>;
(TaskToolCallArgsProto as MutableMessageType<TaskToolCallArgsProto>).runtime = proto3;
(TaskToolCallArgsProto as MutableMessageType<TaskToolCallArgsProto>).typeName = "agent.v1.TaskToolCallArgsProto";
(TaskToolCallArgsProto as MutableMessageType<TaskToolCallArgsProto>).fields = proto3.util.newFieldList(() => [
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
  { no: 3, name: "model", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "resume", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "readonly", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "run_in_background", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "attachments", kind: "scalar", T: 9, repeated: true },
  { no: 9, name: "environment", kind: "enum", T: proto3.getEnumType(SubagentExecutionEnvironment) },
  { no: 10, name: "cloud_base_branch", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "cloud_requested_environment_build_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "machine", kind: "message", T: TargetMachine, opt: true }
]);
var SubagentCredentials$Runtime = (() => class _SubagentCredentials extends Message<_SubagentCredentials> {
  declare credentials: { case: "apiKeyCredentials"; value: ApiKeyCredentials } | { case: "azureCredentials"; value: AzureCredentials } | { case: "bedrockCredentials"; value: BedrockCredentials } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SubagentCredentials>) {
    super();
    this.credentials = { case: void 0 };
    proto3.util.initPartial(data, this as _SubagentCredentials);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _SubagentCredentials {
    return new _SubagentCredentials().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _SubagentCredentials {
    return new _SubagentCredentials().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _SubagentCredentials {
    return new _SubagentCredentials().fromJsonString(jsonString, options);
  }
  static equals(a: _SubagentCredentials | PlainMessage<_SubagentCredentials> | undefined | null, b2: _SubagentCredentials | PlainMessage<_SubagentCredentials> | undefined | null): boolean {
    return proto3.util.equals(_SubagentCredentials as unknown as MessageType<_SubagentCredentials>, a, b2);
  }
})();
export type SubagentCredentials = InstanceType<typeof SubagentCredentials$Runtime>;
var SubagentCredentials: MessageType<SubagentCredentials> = SubagentCredentials$Runtime as unknown as MessageType<SubagentCredentials>;
(SubagentCredentials as MutableMessageType<SubagentCredentials>).runtime = proto3;
(SubagentCredentials as MutableMessageType<SubagentCredentials>).typeName = "agent.v1.SubagentCredentials";
(SubagentCredentials as MutableMessageType<SubagentCredentials>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "api_key_credentials", kind: "message", T: ApiKeyCredentials, oneof: "credentials" },
  { no: 2, name: "azure_credentials", kind: "message", T: AzureCredentials, oneof: "credentials" },
  { no: 3, name: "bedrock_credentials", kind: "message", T: BedrockCredentials, oneof: "credentials" }
]);
var CloudSubagentInheritedContext$Runtime = (() => class _CloudSubagentInheritedContext extends Message<_CloudSubagentInheritedContext> {
  declare automationRunBcId?: string;
  declare inlineMcpConfigJson?: string;
  declare resolved: boolean;
  declare inlineMcpConfigBlobId: Uint8Array;
  constructor(data?: PartialMessage<_CloudSubagentInheritedContext>) {
    super();
    this.resolved = false;
    this.inlineMcpConfigBlobId = new Uint8Array(0);
    proto3.util.initPartial(data, this as _CloudSubagentInheritedContext);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _CloudSubagentInheritedContext {
    return new _CloudSubagentInheritedContext().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _CloudSubagentInheritedContext {
    return new _CloudSubagentInheritedContext().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _CloudSubagentInheritedContext {
    return new _CloudSubagentInheritedContext().fromJsonString(jsonString, options);
  }
  static equals(a: _CloudSubagentInheritedContext | PlainMessage<_CloudSubagentInheritedContext> | undefined | null, b2: _CloudSubagentInheritedContext | PlainMessage<_CloudSubagentInheritedContext> | undefined | null): boolean {
    return proto3.util.equals(_CloudSubagentInheritedContext as unknown as MessageType<_CloudSubagentInheritedContext>, a, b2);
  }
})();
export type CloudSubagentInheritedContext = InstanceType<typeof CloudSubagentInheritedContext$Runtime>;
var CloudSubagentInheritedContext: MessageType<CloudSubagentInheritedContext> = CloudSubagentInheritedContext$Runtime as unknown as MessageType<CloudSubagentInheritedContext>;
(CloudSubagentInheritedContext as MutableMessageType<CloudSubagentInheritedContext>).runtime = proto3;
(CloudSubagentInheritedContext as MutableMessageType<CloudSubagentInheritedContext>).typeName = "agent.v1.CloudSubagentInheritedContext";
(CloudSubagentInheritedContext as MutableMessageType<CloudSubagentInheritedContext>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "automation_run_bc_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "inline_mcp_config_json", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "resolved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "inline_mcp_config_blob_id",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);
var PreparedTaskSubagent$Runtime = (() => class _PreparedTaskSubagent extends Message<_PreparedTaskSubagent> {
  declare subagentId: string;
  declare subagentTypeName: string;
  declare subagentType?: SubagentType;
  declare analyticsSubagentType: string;
  declare resolvedModelId: string;
  declare effectiveReadonly: boolean;
  declare useAskModeForSubagent: boolean;
  declare conversationState?: ConversationStateStructure;
  declare initialAction?: ConversationAction;
  declare initialTurnsCount: number;
  declare subagentRequestId: string;
  declare toolCallId: string;
  declare isResume: boolean;
  declare parentRequestId?: string;
  declare rootParentRequestId?: string;
  declare taskPrompt: string;
  declare taskDescription: string;
  declare selectedContext?: SelectedContext;
  declare plugin?: string;
  declare marketplace?: string;
  declare parentModelName: string;
  declare rawArgs?: TaskToolCallArgsProto;
  declare subagentCredentials?: SubagentCredentials;
  declare resultSuffix?: string;
  declare enableExecuteHookExec: boolean;
  declare configuredSteps: string[];
  declare readonlyShellEnabled: boolean;
  declare toolName: string;
  declare preparedTimestampUnixMs?: bigint;
  declare pluginId?: string;
  declare marketplaceId?: string;
  declare subagentSource?: string;
  declare cloudSubagentBcId?: string;
  declare providerToolName?: string;
  declare inheritedContext?: CloudSubagentInheritedContext;
  constructor(data?: PartialMessage<_PreparedTaskSubagent>) {
    super();
    this.subagentId = "";
    this.subagentTypeName = "";
    this.analyticsSubagentType = "";
    this.resolvedModelId = "";
    this.effectiveReadonly = false;
    this.useAskModeForSubagent = false;
    this.initialTurnsCount = 0;
    this.subagentRequestId = "";
    this.toolCallId = "";
    this.isResume = false;
    this.taskPrompt = "";
    this.taskDescription = "";
    this.parentModelName = "";
    this.enableExecuteHookExec = false;
    this.configuredSteps = [];
    this.readonlyShellEnabled = false;
    this.toolName = "";
    proto3.util.initPartial(data, this as _PreparedTaskSubagent);
  }
  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): _PreparedTaskSubagent {
    return new _PreparedTaskSubagent().fromBinary(bytes, options);
  }
  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): _PreparedTaskSubagent {
    return new _PreparedTaskSubagent().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): _PreparedTaskSubagent {
    return new _PreparedTaskSubagent().fromJsonString(jsonString, options);
  }
  static equals(a: _PreparedTaskSubagent | PlainMessage<_PreparedTaskSubagent> | undefined | null, b2: _PreparedTaskSubagent | PlainMessage<_PreparedTaskSubagent> | undefined | null): boolean {
    return proto3.util.equals(_PreparedTaskSubagent as unknown as MessageType<_PreparedTaskSubagent>, a, b2);
  }
})();
export type PreparedTaskSubagent = InstanceType<typeof PreparedTaskSubagent$Runtime>;
var PreparedTaskSubagent: MessageType<PreparedTaskSubagent> = PreparedTaskSubagent$Runtime as unknown as MessageType<PreparedTaskSubagent>;
(PreparedTaskSubagent as MutableMessageType<PreparedTaskSubagent>).runtime = proto3;
(PreparedTaskSubagent as MutableMessageType<PreparedTaskSubagent>).typeName = "agent.v1.PreparedTaskSubagent";
(PreparedTaskSubagent as MutableMessageType<PreparedTaskSubagent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "subagent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "subagent_type_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "subagent_type", kind: "message", T: SubagentType },
  {
    no: 4,
    name: "analytics_subagent_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "resolved_model_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "effective_readonly",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "use_ask_mode_for_subagent",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 8, name: "conversation_state", kind: "message", T: ConversationStateStructure },
  { no: 9, name: "initial_action", kind: "message", T: ConversationAction },
  {
    no: 10,
    name: "initial_turns_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 11,
    name: "subagent_request_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 12,
    name: "tool_call_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 13,
    name: "is_resume",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 14, name: "parent_request_id", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "root_parent_request_id", kind: "scalar", T: 9, opt: true },
  {
    no: 16,
    name: "task_prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 17,
    name: "task_description",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 18, name: "selected_context", kind: "message", T: SelectedContext, opt: true },
  { no: 19, name: "plugin", kind: "scalar", T: 9, opt: true },
  { no: 20, name: "marketplace", kind: "scalar", T: 9, opt: true },
  {
    no: 21,
    name: "parent_model_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 22, name: "raw_args", kind: "message", T: TaskToolCallArgsProto },
  { no: 23, name: "subagent_credentials", kind: "message", T: SubagentCredentials },
  { no: 25, name: "result_suffix", kind: "scalar", T: 9, opt: true },
  {
    no: 26,
    name: "enable_execute_hook_exec",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 27, name: "configured_steps", kind: "scalar", T: 9, repeated: true },
  {
    no: 28,
    name: "readonly_shell_enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 29,
    name: "tool_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 30, name: "prepared_timestamp_unix_ms", kind: "scalar", T: 3, opt: true },
  { no: 31, name: "plugin_id", kind: "scalar", T: 9, opt: true },
  { no: 32, name: "marketplace_id", kind: "scalar", T: 9, opt: true },
  { no: 33, name: "subagent_source", kind: "scalar", T: 9, opt: true },
  { no: 34, name: "cloud_subagent_bc_id", kind: "scalar", T: 9, opt: true },
  { no: 35, name: "provider_tool_name", kind: "scalar", T: 9, opt: true },
  { no: 36, name: "inherited_context", kind: "message", T: CloudSubagentInheritedContext, opt: true }
]);


export { AgentMode, SubagentExecutionEnvironment, SubagentBackgroundReason, BackgroundTaskKind, BackgroundTaskStatus, BackgroundTaskCompletionReason, BackgroundTaskNotificationContext, SubagentRunStatus, CustomModeSource, SimulatedMsgReason, SubscriptionSource, ThinkingStyle, ResponseComparisonDisplayOrder, ResponseComparisonSkipReason, TaskArgs, TargetMachine, SameMachineTarget, NewCloudVmTarget, SelfHostedWorkerTarget, SelfHostedPoolTarget, SelfHostedWorkerLabel, TaskSuccess, TaskError, TaskResult, TaskToolCall, TaskToolCallDelta, SetActiveBranchArgs, SetActiveBranchSuccess, SetActiveBranchError, SetActiveBranchResult, SetActiveBranchToolCall, ToolCall, TruncatedToolCallArgs, TruncatedToolCallSuccess, TruncatedToolCallError, TruncatedToolCallResult, TruncatedToolCall, ToolCallDelta, ConversationStep, ConversationAction, TriggeringUserInfo, BackgroundTaskCompletionAction, BackgroundTaskCompletion, SubagentRunState, CancelSubagentAction, BackgroundShellAction, BackgroundSubagentAction, InterruptedPendingToolCallResolution, InterruptedPendingToolCallResolutions, ConversationHistory, ConversationHistoryMessage, ConversationHistoryUserMessage, ConversationHistoryUserContent, ConversationHistoryTextContent, ConversationHistoryImageContent, ConversationHistoryAssistantMessage, ConversationHistoryAssistantContent, ConversationHistoryReasoningContent, ConversationHistoryRedactedReasoningContent, ConversationHistoryToolCall, ConversationHistoryToolMessage, ConversationHistoryToolResultContent, UserMessageAction, SubscriptionNotificationAction, GoalContinuationAction, InjectContextAction, UserContextInjection, SystemContextInjection, ContextInjectionState, ContextInjectionQueued, ContextInjectionDelivered, ContextInjectionQueuedForNextTurn, ContextInjectionCancelled, ContextInjectionRejected, SubmittedCustomMode, CustomModeDescriptor, SubmittedExitedCustomMode, CustomModeExitIntent, CustomModeIntent, CancelAction, ResumeAction, AsyncAskQuestionCompletionAction, SummarizeAction, ShellCommandAction, StartPlanAction, ExecutePlanAction, SubscriptionEventDisplay, UserDisplayInfo, ExecutePlanInfo, ProjectDetails, ProjectSubagentDetails, ProjectSideChatDetails, UserMessage, UserMessage_SimulatedMessageMetadata, AssistantMessage, ThinkingMessage, ShellCommand, ShellOutput, ConversationTurn, ConversationPlan, PlanRegistryEntry, GoalState, ConversationTurnStructure, AgentConversationTurn, AgentConversationTurnStructure, ShellConversationTurn, ShellConversationTurnStructure, ConversationSummary, ConversationSummaryArchive, PromptTokenBreakdownCategory, PromptTokenBreakdownSnapshot, PromptContextSourceRef, PromptContextNode, PromptContextUsageTree, PromptContextUsageSnapshot, ConversationTokenDetails, FileState, FileStateStructure, StepTiming, ConversationState, CommunicateUpdateHistoryEntry, CommunicateUpdateTurnState, SubagentPersistedState, CloudSubagentReference, TrackedGitRepo, ConversationStateStructure, ThinkingDetails, ApiKeyCredentials, ClientLlmGatewayCredential, AzureCredentials, BedrockCredentials, ModelDetails2, RequestedModel, RequestedModel_ModelParameterValue, SubagentModelOverride, PreFetchedBlob, AgentRunRequest, TextDeltaUpdate, RoutedModelUpdate, ToolCallStartedUpdate, ToolCallCompletedUpdate, ToolCallDeltaUpdate, PartialToolCallUpdate, ThinkingDeltaUpdate, ThinkingCompletedUpdate, TokenDeltaUpdate, SummaryUpdate, SummaryStartedUpdate, HeartbeatUpdate, SummaryCompletedUpdate, ShellOutputDeltaUpdate, TurnEndedUpdate, UserMessageAppendedUpdate, StepStartedUpdate, StepCompletedUpdate, PromptSuggestionUpdate, ActiveBranchChange, FeedbackRequestCategory, FeedbackRequestCategoryGroup, FeedbackRequestUpdate, ResponseComparisonStarted, ResponseComparisonTextDelta, ResponseComparisonCompleted, ResponseComparisonSkipped, ResponseComparisonUpdate, InteractionUpdate, ContextInjectionStateUpdate, PostRequestPromptUpdate, InteractionQuery, InteractionResponse, AskQuestionInteractionQuery, AskQuestionInteractionResponse, PreCompactRequestQuery, PreCompactRequestResponse, SubagentStartRequestQuery, SubagentStartRequestResponse, SubagentStopRequestQuery, SubagentStopRequestResponse, BeforeSubmitPromptAttachment, BeforeSubmitPromptRequestQuery, BeforeSubmitPromptRequestResponse, AfterAgentResponseRequestQuery, AfterAgentResponseRequestResponse, AfterAgentThoughtRequestQuery, AfterAgentThoughtRequestResponse, StopRequestQuery, StopRequestResponse, PreToolUseRequestQuery, PreToolUseRequestResponse, PostToolUseRequestQuery, PostToolUseRequestResponse, PostToolUseFailureRequestQuery, PostToolUseFailureRequestResponse, TaskToolCallArgsProto, SubagentCredentials, CloudSubagentInheritedContext, PreparedTaskSubagent };
