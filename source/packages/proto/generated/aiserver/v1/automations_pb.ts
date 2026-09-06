/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:585035-592301
 * Region SHA-256: eb2d80d2b065a7a5577f97a35f6bcc32feae660335da2491fe0255cb725e2cef
 */
import { Any, Empty, Message, Struct, Value, proto3, protoInt64, type BinaryReadOptions, type JsonReadOptions, type JsonValue, type MessageType, type PartialMessage, type PlainMessage } from "@bufbuild/protobuf";

type MutableMessageType<T extends Message<T>> = { -readonly [P in keyof MessageType<T>]: MessageType<T>[P] };

export type AutomationDefaultTool = 0 | 1;
var AutomationDefaultTool: {
  "UNSPECIFIED": 0;
  "OPEN_GIT_PR": 1;
  0: "UNSPECIFIED";
  1: "OPEN_GIT_PR";
};
export type SlackCompletionReactionMode = 0 | 1 | 2 | 3;
var SlackCompletionReactionMode: {
  "UNSPECIFIED": 0;
  "ON": 1;
  "OFF": 2;
  "CUSTOM": 3;
  0: "UNSPECIFIED";
  1: "ON";
  2: "OFF";
  3: "CUSTOM";
};
export type AutomationScope = 0 | 1 | 2 | 3 | 4 | 5;
var AutomationScope: {
  "UNSPECIFIED": 0;
  "USER": 1;
  "TEAM": 2;
  "TEAM_VISIBLE": 3;
  "TEAM_EDITABLE": 4;
  "TEAM_EDITABLE_USER": 5;
  0: "UNSPECIFIED";
  1: "USER";
  2: "TEAM";
  3: "TEAM_VISIBLE";
  4: "TEAM_EDITABLE";
  5: "TEAM_EDITABLE_USER";
};
export type AutomationCreationSource = 0 | 1 | 2 | 3 | 4;
var AutomationCreationSource: {
  "UNSPECIFIED": 0;
  "PORTAL_WEB": 1;
  "GLASS_UI": 2;
  "SKILL_MCP": 3;
  "CONFIG_AS_CODE": 4;
  0: "UNSPECIFIED";
  1: "PORTAL_WEB";
  2: "GLASS_UI";
  3: "SKILL_MCP";
  4: "CONFIG_AS_CODE";
};
export type AutomationManagedBy = 0 | 1 | 2 | 3;
var AutomationManagedBy: {
  "UNSPECIFIED": 0;
  "UI": 1;
  "DEPLOY": 2;
  "ANY": 3;
  0: "UNSPECIFIED";
  1: "UI";
  2: "DEPLOY";
  3: "ANY";
};
export type PromptEffortLevel = 0 | 1 | 10;
var PromptEffortLevel: {
  "UNSPECIFIED": 0;
  "STANDARD": 1;
  "HARD": 10;
  0: "UNSPECIFIED";
  1: "STANDARD";
  10: "HARD";
};
export type PromptRunMode = 0 | 1 | 2;
var PromptRunMode: {
  "UNSPECIFIED": 0;
  "SAME_CHAT": 1;
  "NEW_AGENT": 2;
  0: "UNSPECIFIED";
  1: "SAME_CHAT";
  2: "NEW_AGENT";
};
export type GitPullRequestAction = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
var GitPullRequestAction: {
  "UNSPECIFIED": 0;
  "OPENED": 1;
  "PUSHED": 2;
  "MERGED": 3;
  "COMMENTED": 4;
  "DRAFT_OPENED": 5;
  "LABELED": 6;
  "UNLABELED": 7;
  0: "UNSPECIFIED";
  1: "OPENED";
  2: "PUSHED";
  3: "MERGED";
  4: "COMMENTED";
  5: "DRAFT_OPENED";
  6: "LABELED";
  7: "UNLABELED";
};
export type GitCICompletionCondition = 0 | 1 | 2 | 3;
var GitCICompletionCondition: {
  "GIT_CI_COMPLETION_CONDITION_UNSPECIFIED": 0;
  "GIT_CI_COMPLETION_CONDITION_FAILURE": 1;
  "GIT_CI_COMPLETION_CONDITION_SUCCESS": 2;
  "GIT_CI_COMPLETION_CONDITION_ANY": 3;
  0: "GIT_CI_COMPLETION_CONDITION_UNSPECIFIED";
  1: "GIT_CI_COMPLETION_CONDITION_FAILURE";
  2: "GIT_CI_COMPLETION_CONDITION_SUCCESS";
  3: "GIT_CI_COMPLETION_CONDITION_ANY";
};
export type GitWorkflowRunConclusion = 0 | 1 | 2 | 3 | 4;
var GitWorkflowRunConclusion: {
  "UNSPECIFIED": 0;
  "ANY": 1;
  "SUCCESS": 2;
  "FAILURE": 3;
  "CANCELLED": 4;
  0: "UNSPECIFIED";
  1: "ANY";
  2: "SUCCESS";
  3: "FAILURE";
  4: "CANCELLED";
};
export type PlatformActionStatus = 0 | 1 | 2 | 3 | 4;
var PlatformActionStatus: {
  "UNSPECIFIED": 0;
  "PENDING": 1;
  "SUCCESS": 2;
  "ERROR": 3;
  "SKIPPED": 4;
  0: "UNSPECIFIED";
  1: "PENDING";
  2: "SUCCESS";
  3: "ERROR";
  4: "SKIPPED";
};
export type PlatformActionScope = 0 | 1 | 2;
var PlatformActionScope: {
  "UNSPECIFIED": 0;
  "WORKFLOW": 1;
  "TRIGGER": 2;
  0: "UNSPECIFIED";
  1: "WORKFLOW";
  2: "TRIGGER";
};
export type PlatformTriggerType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
var PlatformTriggerType: {
  "UNSPECIFIED": 0;
  "GIT": 1;
  "SLACK": 2;
  "LINEAR": 3;
  "CRON": 4;
  "WEBHOOK": 5;
  "SLACK_CHANNEL_CREATED": 6;
  "PAGERDUTY": 7;
  "SENTRY": 8;
  "MICROSOFT_TEAMS": 9;
  "MICROSOFT_TEAMS_CHANNEL_CREATED": 10;
  "SLACK_REACTION_ADDED": 11;
  0: "UNSPECIFIED";
  1: "GIT";
  2: "SLACK";
  3: "LINEAR";
  4: "CRON";
  5: "WEBHOOK";
  6: "SLACK_CHANNEL_CREATED";
  7: "PAGERDUTY";
  8: "SENTRY";
  9: "MICROSOFT_TEAMS";
  10: "MICROSOFT_TEAMS_CHANNEL_CREATED";
  11: "SLACK_REACTION_ADDED";
};
export type McpAuthState = 0 | 1 | 2 | 3;
var McpAuthState: {
  "UNSPECIFIED": 0;
  "UNKNOWN": 1;
  "AUTHENTICATED": 2;
  "NEEDS_AUTH": 3;
  0: "UNSPECIFIED";
  1: "UNKNOWN";
  2: "AUTHENTICATED";
  3: "NEEDS_AUTH";
};
export type AutomationRunListKind = 0 | 1 | 2;
var AutomationRunListKind: {
  "UNSPECIFIED": 0;
  "EXECUTION_RUNS": 1;
  "FILTER_EVALUATIONS": 2;
  0: "UNSPECIFIED";
  1: "EXECUTION_RUNS";
  2: "FILTER_EVALUATIONS";
};
export type AutomationFilterDecision = 0 | 1 | 2 | 3;
var AutomationFilterDecision: {
  "UNSPECIFIED": 0;
  "ALLOW": 1;
  "BLOCK": 2;
  "ERROR": 3;
  0: "UNSPECIFIED";
  1: "ALLOW";
  2: "BLOCK";
  3: "ERROR";
};
export type AutomationRunStatus = 0 | 1 | 2 | 3 | 4;
var AutomationRunStatus: {
  "UNSPECIFIED": 0;
  "RUNNING": 1;
  "FAILED": 2;
  "SUCCEEDED": 3;
  "SKIPPED": 4;
  0: "UNSPECIFIED";
  1: "RUNNING";
  2: "FAILED";
  3: "SUCCEEDED";
  4: "SKIPPED";
};
export type AutomationRunFailureCode = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
var AutomationRunFailureCode: {
  "UNSPECIFIED": 0;
  "UNAUTHENTICATED_REPO_ACCESS": 2;
  "RESOURCE_EXHAUSTED": 3;
  "UNAVAILABLE": 4;
  "CI_SIGNAL_FAILURE": 5;
  "UNKNOWN": 6;
  "FAILED_TO_START_AGENT": 7;
  "CANCELLED_BY_USER": 8;
  "CANCELLED_AUTOMATION_DISABLED": 9;
  "CONCURRENT_LIMIT_EXCEEDED": 10;
  "BRANCH_NOT_FOUND": 11;
  "MODEL_BLOCKED": 12;
  "PRIVATE_WORKERS_DISABLED": 13;
  "PRIVATE_WORKER_RESOURCE_EXHAUSTED": 14;
  "GITHUB_IP_ALLOWLIST": 15;
  "INVALID_REQUEST": 16;
  "CLOUD_AGENT_PLAN_RESTRICTED": 17;
  "PRIVATE_WORKER_MISSING_REPO": 18;
  "ENVIRONMENT_BUILD_FAILED": 19;
  "FORK_PR_UNSUPPORTED": 20;
  "PROTECTED_SCOPE_BLOCKED": 21;
  "CANCELLED_SUPERSEDED_BY_NEWER_EVENT": 22;
  "USER_BLOCKED": 23;
  "PAYLOAD_TOO_LARGE": 24;
  0: "UNSPECIFIED";
  2: "UNAUTHENTICATED_REPO_ACCESS";
  3: "RESOURCE_EXHAUSTED";
  4: "UNAVAILABLE";
  5: "CI_SIGNAL_FAILURE";
  6: "UNKNOWN";
  7: "FAILED_TO_START_AGENT";
  8: "CANCELLED_BY_USER";
  9: "CANCELLED_AUTOMATION_DISABLED";
  10: "CONCURRENT_LIMIT_EXCEEDED";
  11: "BRANCH_NOT_FOUND";
  12: "MODEL_BLOCKED";
  13: "PRIVATE_WORKERS_DISABLED";
  14: "PRIVATE_WORKER_RESOURCE_EXHAUSTED";
  15: "GITHUB_IP_ALLOWLIST";
  16: "INVALID_REQUEST";
  17: "CLOUD_AGENT_PLAN_RESTRICTED";
  18: "PRIVATE_WORKER_MISSING_REPO";
  19: "ENVIRONMENT_BUILD_FAILED";
  20: "FORK_PR_UNSUPPORTED";
  21: "PROTECTED_SCOPE_BLOCKED";
  22: "CANCELLED_SUPERSEDED_BY_NEWER_EVENT";
  23: "USER_BLOCKED";
  24: "PAYLOAD_TOO_LARGE";
};
export type AutomationRunRetryIneligibleReason = 0 | 1 | 2;
var AutomationRunRetryIneligibleReason: {
  "UNSPECIFIED": 0;
  "LAUNCH_CONTEXT_MISSING": 1;
  "PERMISSION_DENIED": 2;
  0: "UNSPECIFIED";
  1: "LAUNCH_CONTEXT_MISSING";
  2: "PERMISSION_DENIED";
};
(function(AutomationDefaultTool2) {
  AutomationDefaultTool2[AutomationDefaultTool2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationDefaultTool2[AutomationDefaultTool2["OPEN_GIT_PR"] = 1] = "OPEN_GIT_PR";
})(AutomationDefaultTool! || (AutomationDefaultTool = {} as typeof AutomationDefaultTool));
proto3.util.setEnumType(AutomationDefaultTool, "aiserver.v1.AutomationDefaultTool", [
  { no: 0, name: "AUTOMATION_DEFAULT_TOOL_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_DEFAULT_TOOL_OPEN_GIT_PR" }
]);
(function(SlackCompletionReactionMode2) {
  SlackCompletionReactionMode2[SlackCompletionReactionMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  SlackCompletionReactionMode2[SlackCompletionReactionMode2["ON"] = 1] = "ON";
  SlackCompletionReactionMode2[SlackCompletionReactionMode2["OFF"] = 2] = "OFF";
  SlackCompletionReactionMode2[SlackCompletionReactionMode2["CUSTOM"] = 3] = "CUSTOM";
})(SlackCompletionReactionMode! || (SlackCompletionReactionMode = {} as typeof SlackCompletionReactionMode));
proto3.util.setEnumType(SlackCompletionReactionMode, "aiserver.v1.SlackCompletionReactionMode", [
  { no: 0, name: "SLACK_COMPLETION_REACTION_MODE_UNSPECIFIED" },
  { no: 1, name: "SLACK_COMPLETION_REACTION_MODE_ON" },
  { no: 2, name: "SLACK_COMPLETION_REACTION_MODE_OFF" },
  { no: 3, name: "SLACK_COMPLETION_REACTION_MODE_CUSTOM" }
]);
(function(AutomationScope2) {
  AutomationScope2[AutomationScope2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationScope2[AutomationScope2["USER"] = 1] = "USER";
  AutomationScope2[AutomationScope2["TEAM"] = 2] = "TEAM";
  AutomationScope2[AutomationScope2["TEAM_VISIBLE"] = 3] = "TEAM_VISIBLE";
  AutomationScope2[AutomationScope2["TEAM_EDITABLE"] = 4] = "TEAM_EDITABLE";
  AutomationScope2[AutomationScope2["TEAM_EDITABLE_USER"] = 5] = "TEAM_EDITABLE_USER";
})(AutomationScope! || (AutomationScope = {} as typeof AutomationScope));
proto3.util.setEnumType(AutomationScope, "aiserver.v1.AutomationScope", [
  { no: 0, name: "AUTOMATION_SCOPE_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_SCOPE_USER" },
  { no: 2, name: "AUTOMATION_SCOPE_TEAM" },
  { no: 3, name: "AUTOMATION_SCOPE_TEAM_VISIBLE" },
  { no: 4, name: "AUTOMATION_SCOPE_TEAM_EDITABLE" },
  { no: 5, name: "AUTOMATION_SCOPE_TEAM_EDITABLE_USER" }
]);
(function(AutomationCreationSource2) {
  AutomationCreationSource2[AutomationCreationSource2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationCreationSource2[AutomationCreationSource2["PORTAL_WEB"] = 1] = "PORTAL_WEB";
  AutomationCreationSource2[AutomationCreationSource2["GLASS_UI"] = 2] = "GLASS_UI";
  AutomationCreationSource2[AutomationCreationSource2["SKILL_MCP"] = 3] = "SKILL_MCP";
  AutomationCreationSource2[AutomationCreationSource2["CONFIG_AS_CODE"] = 4] = "CONFIG_AS_CODE";
})(AutomationCreationSource! || (AutomationCreationSource = {} as typeof AutomationCreationSource));
proto3.util.setEnumType(AutomationCreationSource, "aiserver.v1.AutomationCreationSource", [
  { no: 0, name: "AUTOMATION_CREATION_SOURCE_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_CREATION_SOURCE_PORTAL_WEB" },
  { no: 2, name: "AUTOMATION_CREATION_SOURCE_GLASS_UI" },
  { no: 3, name: "AUTOMATION_CREATION_SOURCE_SKILL_MCP" },
  { no: 4, name: "AUTOMATION_CREATION_SOURCE_CONFIG_AS_CODE" }
]);
(function(AutomationManagedBy2) {
  AutomationManagedBy2[AutomationManagedBy2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationManagedBy2[AutomationManagedBy2["UI"] = 1] = "UI";
  AutomationManagedBy2[AutomationManagedBy2["DEPLOY"] = 2] = "DEPLOY";
  AutomationManagedBy2[AutomationManagedBy2["ANY"] = 3] = "ANY";
})(AutomationManagedBy! || (AutomationManagedBy = {} as typeof AutomationManagedBy));
proto3.util.setEnumType(AutomationManagedBy, "aiserver.v1.AutomationManagedBy", [
  { no: 0, name: "AUTOMATION_MANAGED_BY_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_MANAGED_BY_UI" },
  { no: 2, name: "AUTOMATION_MANAGED_BY_DEPLOY" },
  { no: 3, name: "AUTOMATION_MANAGED_BY_ANY" }
]);
(function(PromptEffortLevel2) {
  PromptEffortLevel2[PromptEffortLevel2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PromptEffortLevel2[PromptEffortLevel2["STANDARD"] = 1] = "STANDARD";
  PromptEffortLevel2[PromptEffortLevel2["HARD"] = 10] = "HARD";
})(PromptEffortLevel! || (PromptEffortLevel = {} as typeof PromptEffortLevel));
proto3.util.setEnumType(PromptEffortLevel, "aiserver.v1.PromptEffortLevel", [
  { no: 0, name: "PROMPT_EFFORT_LEVEL_UNSPECIFIED" },
  { no: 1, name: "PROMPT_EFFORT_LEVEL_STANDARD" },
  { no: 10, name: "PROMPT_EFFORT_LEVEL_HARD" }
]);
(function(PromptRunMode2) {
  PromptRunMode2[PromptRunMode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PromptRunMode2[PromptRunMode2["SAME_CHAT"] = 1] = "SAME_CHAT";
  PromptRunMode2[PromptRunMode2["NEW_AGENT"] = 2] = "NEW_AGENT";
})(PromptRunMode! || (PromptRunMode = {} as typeof PromptRunMode));
proto3.util.setEnumType(PromptRunMode, "aiserver.v1.PromptRunMode", [
  { no: 0, name: "PROMPT_RUN_MODE_UNSPECIFIED" },
  { no: 1, name: "PROMPT_RUN_MODE_SAME_CHAT" },
  { no: 2, name: "PROMPT_RUN_MODE_NEW_AGENT" }
]);
(function(GitPullRequestAction2) {
  GitPullRequestAction2[GitPullRequestAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitPullRequestAction2[GitPullRequestAction2["OPENED"] = 1] = "OPENED";
  GitPullRequestAction2[GitPullRequestAction2["PUSHED"] = 2] = "PUSHED";
  GitPullRequestAction2[GitPullRequestAction2["MERGED"] = 3] = "MERGED";
  GitPullRequestAction2[GitPullRequestAction2["COMMENTED"] = 4] = "COMMENTED";
  GitPullRequestAction2[GitPullRequestAction2["DRAFT_OPENED"] = 5] = "DRAFT_OPENED";
  GitPullRequestAction2[GitPullRequestAction2["LABELED"] = 6] = "LABELED";
  GitPullRequestAction2[GitPullRequestAction2["UNLABELED"] = 7] = "UNLABELED";
})(GitPullRequestAction! || (GitPullRequestAction = {} as typeof GitPullRequestAction));
proto3.util.setEnumType(GitPullRequestAction, "aiserver.v1.GitPullRequestAction", [
  { no: 0, name: "GIT_PULL_REQUEST_ACTION_UNSPECIFIED" },
  { no: 1, name: "GIT_PULL_REQUEST_ACTION_OPENED" },
  { no: 2, name: "GIT_PULL_REQUEST_ACTION_PUSHED" },
  { no: 3, name: "GIT_PULL_REQUEST_ACTION_MERGED" },
  { no: 4, name: "GIT_PULL_REQUEST_ACTION_COMMENTED" },
  { no: 5, name: "GIT_PULL_REQUEST_ACTION_DRAFT_OPENED" },
  { no: 6, name: "GIT_PULL_REQUEST_ACTION_LABELED" },
  { no: 7, name: "GIT_PULL_REQUEST_ACTION_UNLABELED" }
]);
(function(GitCICompletionCondition2) {
  GitCICompletionCondition2[GitCICompletionCondition2["GIT_CI_COMPLETION_CONDITION_UNSPECIFIED"] = 0] = "GIT_CI_COMPLETION_CONDITION_UNSPECIFIED";
  GitCICompletionCondition2[GitCICompletionCondition2["GIT_CI_COMPLETION_CONDITION_FAILURE"] = 1] = "GIT_CI_COMPLETION_CONDITION_FAILURE";
  GitCICompletionCondition2[GitCICompletionCondition2["GIT_CI_COMPLETION_CONDITION_SUCCESS"] = 2] = "GIT_CI_COMPLETION_CONDITION_SUCCESS";
  GitCICompletionCondition2[GitCICompletionCondition2["GIT_CI_COMPLETION_CONDITION_ANY"] = 3] = "GIT_CI_COMPLETION_CONDITION_ANY";
})(GitCICompletionCondition! || (GitCICompletionCondition = {} as typeof GitCICompletionCondition));
proto3.util.setEnumType(GitCICompletionCondition, "aiserver.v1.GitCICompletionCondition", [
  { no: 0, name: "GIT_CI_COMPLETION_CONDITION_UNSPECIFIED" },
  { no: 1, name: "GIT_CI_COMPLETION_CONDITION_FAILURE" },
  { no: 2, name: "GIT_CI_COMPLETION_CONDITION_SUCCESS" },
  { no: 3, name: "GIT_CI_COMPLETION_CONDITION_ANY" }
]);
(function(GitWorkflowRunConclusion2) {
  GitWorkflowRunConclusion2[GitWorkflowRunConclusion2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  GitWorkflowRunConclusion2[GitWorkflowRunConclusion2["ANY"] = 1] = "ANY";
  GitWorkflowRunConclusion2[GitWorkflowRunConclusion2["SUCCESS"] = 2] = "SUCCESS";
  GitWorkflowRunConclusion2[GitWorkflowRunConclusion2["FAILURE"] = 3] = "FAILURE";
  GitWorkflowRunConclusion2[GitWorkflowRunConclusion2["CANCELLED"] = 4] = "CANCELLED";
})(GitWorkflowRunConclusion! || (GitWorkflowRunConclusion = {} as typeof GitWorkflowRunConclusion));
proto3.util.setEnumType(GitWorkflowRunConclusion, "aiserver.v1.GitWorkflowRunConclusion", [
  { no: 0, name: "GIT_WORKFLOW_RUN_CONCLUSION_UNSPECIFIED" },
  { no: 1, name: "GIT_WORKFLOW_RUN_CONCLUSION_ANY" },
  { no: 2, name: "GIT_WORKFLOW_RUN_CONCLUSION_SUCCESS" },
  { no: 3, name: "GIT_WORKFLOW_RUN_CONCLUSION_FAILURE" },
  { no: 4, name: "GIT_WORKFLOW_RUN_CONCLUSION_CANCELLED" }
]);
(function(PlatformActionStatus2) {
  PlatformActionStatus2[PlatformActionStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PlatformActionStatus2[PlatformActionStatus2["PENDING"] = 1] = "PENDING";
  PlatformActionStatus2[PlatformActionStatus2["SUCCESS"] = 2] = "SUCCESS";
  PlatformActionStatus2[PlatformActionStatus2["ERROR"] = 3] = "ERROR";
  PlatformActionStatus2[PlatformActionStatus2["SKIPPED"] = 4] = "SKIPPED";
})(PlatformActionStatus! || (PlatformActionStatus = {} as typeof PlatformActionStatus));
proto3.util.setEnumType(PlatformActionStatus, "aiserver.v1.PlatformActionStatus", [
  { no: 0, name: "PLATFORM_ACTION_STATUS_UNSPECIFIED" },
  { no: 1, name: "PLATFORM_ACTION_STATUS_PENDING" },
  { no: 2, name: "PLATFORM_ACTION_STATUS_SUCCESS" },
  { no: 3, name: "PLATFORM_ACTION_STATUS_ERROR" },
  { no: 4, name: "PLATFORM_ACTION_STATUS_SKIPPED" }
]);
(function(PlatformActionScope2) {
  PlatformActionScope2[PlatformActionScope2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PlatformActionScope2[PlatformActionScope2["WORKFLOW"] = 1] = "WORKFLOW";
  PlatformActionScope2[PlatformActionScope2["TRIGGER"] = 2] = "TRIGGER";
})(PlatformActionScope! || (PlatformActionScope = {} as typeof PlatformActionScope));
proto3.util.setEnumType(PlatformActionScope, "aiserver.v1.PlatformActionScope", [
  { no: 0, name: "PLATFORM_ACTION_SCOPE_UNSPECIFIED" },
  { no: 1, name: "PLATFORM_ACTION_SCOPE_WORKFLOW" },
  { no: 2, name: "PLATFORM_ACTION_SCOPE_TRIGGER" }
]);
(function(PlatformTriggerType2) {
  PlatformTriggerType2[PlatformTriggerType2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PlatformTriggerType2[PlatformTriggerType2["GIT"] = 1] = "GIT";
  PlatformTriggerType2[PlatformTriggerType2["SLACK"] = 2] = "SLACK";
  PlatformTriggerType2[PlatformTriggerType2["LINEAR"] = 3] = "LINEAR";
  PlatformTriggerType2[PlatformTriggerType2["CRON"] = 4] = "CRON";
  PlatformTriggerType2[PlatformTriggerType2["WEBHOOK"] = 5] = "WEBHOOK";
  PlatformTriggerType2[PlatformTriggerType2["SLACK_CHANNEL_CREATED"] = 6] = "SLACK_CHANNEL_CREATED";
  PlatformTriggerType2[PlatformTriggerType2["PAGERDUTY"] = 7] = "PAGERDUTY";
  PlatformTriggerType2[PlatformTriggerType2["SENTRY"] = 8] = "SENTRY";
  PlatformTriggerType2[PlatformTriggerType2["MICROSOFT_TEAMS"] = 9] = "MICROSOFT_TEAMS";
  PlatformTriggerType2[PlatformTriggerType2["MICROSOFT_TEAMS_CHANNEL_CREATED"] = 10] = "MICROSOFT_TEAMS_CHANNEL_CREATED";
  PlatformTriggerType2[PlatformTriggerType2["SLACK_REACTION_ADDED"] = 11] = "SLACK_REACTION_ADDED";
})(PlatformTriggerType! || (PlatformTriggerType = {} as typeof PlatformTriggerType));
proto3.util.setEnumType(PlatformTriggerType, "aiserver.v1.PlatformTriggerType", [
  { no: 0, name: "PLATFORM_TRIGGER_TYPE_UNSPECIFIED" },
  { no: 1, name: "PLATFORM_TRIGGER_TYPE_GIT" },
  { no: 2, name: "PLATFORM_TRIGGER_TYPE_SLACK" },
  { no: 3, name: "PLATFORM_TRIGGER_TYPE_LINEAR" },
  { no: 4, name: "PLATFORM_TRIGGER_TYPE_CRON" },
  { no: 5, name: "PLATFORM_TRIGGER_TYPE_WEBHOOK" },
  { no: 6, name: "PLATFORM_TRIGGER_TYPE_SLACK_CHANNEL_CREATED" },
  { no: 7, name: "PLATFORM_TRIGGER_TYPE_PAGERDUTY" },
  { no: 8, name: "PLATFORM_TRIGGER_TYPE_SENTRY" },
  { no: 9, name: "PLATFORM_TRIGGER_TYPE_MICROSOFT_TEAMS" },
  { no: 10, name: "PLATFORM_TRIGGER_TYPE_MICROSOFT_TEAMS_CHANNEL_CREATED" },
  { no: 11, name: "PLATFORM_TRIGGER_TYPE_SLACK_REACTION_ADDED" }
]);
(function(McpAuthState2) {
  McpAuthState2[McpAuthState2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  McpAuthState2[McpAuthState2["UNKNOWN"] = 1] = "UNKNOWN";
  McpAuthState2[McpAuthState2["AUTHENTICATED"] = 2] = "AUTHENTICATED";
  McpAuthState2[McpAuthState2["NEEDS_AUTH"] = 3] = "NEEDS_AUTH";
})(McpAuthState! || (McpAuthState = {} as typeof McpAuthState));
proto3.util.setEnumType(McpAuthState, "aiserver.v1.McpAuthState", [
  { no: 0, name: "MCP_AUTH_STATE_UNSPECIFIED" },
  { no: 1, name: "MCP_AUTH_STATE_UNKNOWN" },
  { no: 2, name: "MCP_AUTH_STATE_AUTHENTICATED" },
  { no: 3, name: "MCP_AUTH_STATE_NEEDS_AUTH" }
]);
(function(AutomationRunListKind2) {
  AutomationRunListKind2[AutomationRunListKind2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationRunListKind2[AutomationRunListKind2["EXECUTION_RUNS"] = 1] = "EXECUTION_RUNS";
  AutomationRunListKind2[AutomationRunListKind2["FILTER_EVALUATIONS"] = 2] = "FILTER_EVALUATIONS";
})(AutomationRunListKind! || (AutomationRunListKind = {} as typeof AutomationRunListKind));
proto3.util.setEnumType(AutomationRunListKind, "aiserver.v1.AutomationRunListKind", [
  { no: 0, name: "AUTOMATION_RUN_LIST_KIND_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_RUN_LIST_KIND_EXECUTION_RUNS" },
  { no: 2, name: "AUTOMATION_RUN_LIST_KIND_FILTER_EVALUATIONS" }
]);
(function(AutomationFilterDecision2) {
  AutomationFilterDecision2[AutomationFilterDecision2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationFilterDecision2[AutomationFilterDecision2["ALLOW"] = 1] = "ALLOW";
  AutomationFilterDecision2[AutomationFilterDecision2["BLOCK"] = 2] = "BLOCK";
  AutomationFilterDecision2[AutomationFilterDecision2["ERROR"] = 3] = "ERROR";
})(AutomationFilterDecision! || (AutomationFilterDecision = {} as typeof AutomationFilterDecision));
proto3.util.setEnumType(AutomationFilterDecision, "aiserver.v1.AutomationFilterDecision", [
  { no: 0, name: "AUTOMATION_FILTER_DECISION_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_FILTER_DECISION_ALLOW" },
  { no: 2, name: "AUTOMATION_FILTER_DECISION_BLOCK" },
  { no: 3, name: "AUTOMATION_FILTER_DECISION_ERROR" }
]);
(function(AutomationRunStatus2) {
  AutomationRunStatus2[AutomationRunStatus2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationRunStatus2[AutomationRunStatus2["RUNNING"] = 1] = "RUNNING";
  AutomationRunStatus2[AutomationRunStatus2["FAILED"] = 2] = "FAILED";
  AutomationRunStatus2[AutomationRunStatus2["SUCCEEDED"] = 3] = "SUCCEEDED";
  AutomationRunStatus2[AutomationRunStatus2["SKIPPED"] = 4] = "SKIPPED";
})(AutomationRunStatus! || (AutomationRunStatus = {} as typeof AutomationRunStatus));
proto3.util.setEnumType(AutomationRunStatus, "aiserver.v1.AutomationRunStatus", [
  { no: 0, name: "AUTOMATION_RUN_STATUS_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_RUN_STATUS_RUNNING" },
  { no: 2, name: "AUTOMATION_RUN_STATUS_FAILED" },
  { no: 3, name: "AUTOMATION_RUN_STATUS_SUCCEEDED" },
  { no: 4, name: "AUTOMATION_RUN_STATUS_SKIPPED" }
]);
(function(AutomationRunFailureCode2) {
  AutomationRunFailureCode2[AutomationRunFailureCode2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["UNAUTHENTICATED_REPO_ACCESS"] = 2] = "UNAUTHENTICATED_REPO_ACCESS";
  AutomationRunFailureCode2[AutomationRunFailureCode2["RESOURCE_EXHAUSTED"] = 3] = "RESOURCE_EXHAUSTED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["UNAVAILABLE"] = 4] = "UNAVAILABLE";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CI_SIGNAL_FAILURE"] = 5] = "CI_SIGNAL_FAILURE";
  AutomationRunFailureCode2[AutomationRunFailureCode2["UNKNOWN"] = 6] = "UNKNOWN";
  AutomationRunFailureCode2[AutomationRunFailureCode2["FAILED_TO_START_AGENT"] = 7] = "FAILED_TO_START_AGENT";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CANCELLED_BY_USER"] = 8] = "CANCELLED_BY_USER";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CANCELLED_AUTOMATION_DISABLED"] = 9] = "CANCELLED_AUTOMATION_DISABLED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CONCURRENT_LIMIT_EXCEEDED"] = 10] = "CONCURRENT_LIMIT_EXCEEDED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["BRANCH_NOT_FOUND"] = 11] = "BRANCH_NOT_FOUND";
  AutomationRunFailureCode2[AutomationRunFailureCode2["MODEL_BLOCKED"] = 12] = "MODEL_BLOCKED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["PRIVATE_WORKERS_DISABLED"] = 13] = "PRIVATE_WORKERS_DISABLED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["PRIVATE_WORKER_RESOURCE_EXHAUSTED"] = 14] = "PRIVATE_WORKER_RESOURCE_EXHAUSTED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["GITHUB_IP_ALLOWLIST"] = 15] = "GITHUB_IP_ALLOWLIST";
  AutomationRunFailureCode2[AutomationRunFailureCode2["INVALID_REQUEST"] = 16] = "INVALID_REQUEST";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CLOUD_AGENT_PLAN_RESTRICTED"] = 17] = "CLOUD_AGENT_PLAN_RESTRICTED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["PRIVATE_WORKER_MISSING_REPO"] = 18] = "PRIVATE_WORKER_MISSING_REPO";
  AutomationRunFailureCode2[AutomationRunFailureCode2["ENVIRONMENT_BUILD_FAILED"] = 19] = "ENVIRONMENT_BUILD_FAILED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["FORK_PR_UNSUPPORTED"] = 20] = "FORK_PR_UNSUPPORTED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["PROTECTED_SCOPE_BLOCKED"] = 21] = "PROTECTED_SCOPE_BLOCKED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["CANCELLED_SUPERSEDED_BY_NEWER_EVENT"] = 22] = "CANCELLED_SUPERSEDED_BY_NEWER_EVENT";
  AutomationRunFailureCode2[AutomationRunFailureCode2["USER_BLOCKED"] = 23] = "USER_BLOCKED";
  AutomationRunFailureCode2[AutomationRunFailureCode2["PAYLOAD_TOO_LARGE"] = 24] = "PAYLOAD_TOO_LARGE";
})(AutomationRunFailureCode! || (AutomationRunFailureCode = {} as typeof AutomationRunFailureCode));
proto3.util.setEnumType(AutomationRunFailureCode, "aiserver.v1.AutomationRunFailureCode", [
  { no: 0, name: "AUTOMATION_RUN_FAILURE_CODE_UNSPECIFIED" },
  { no: 2, name: "AUTOMATION_RUN_FAILURE_CODE_UNAUTHENTICATED_REPO_ACCESS" },
  { no: 3, name: "AUTOMATION_RUN_FAILURE_CODE_RESOURCE_EXHAUSTED" },
  { no: 4, name: "AUTOMATION_RUN_FAILURE_CODE_UNAVAILABLE" },
  { no: 5, name: "AUTOMATION_RUN_FAILURE_CODE_CI_SIGNAL_FAILURE" },
  { no: 6, name: "AUTOMATION_RUN_FAILURE_CODE_UNKNOWN" },
  { no: 7, name: "AUTOMATION_RUN_FAILURE_CODE_FAILED_TO_START_AGENT" },
  { no: 8, name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_BY_USER" },
  { no: 9, name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_AUTOMATION_DISABLED" },
  { no: 10, name: "AUTOMATION_RUN_FAILURE_CODE_CONCURRENT_LIMIT_EXCEEDED" },
  { no: 11, name: "AUTOMATION_RUN_FAILURE_CODE_BRANCH_NOT_FOUND" },
  { no: 12, name: "AUTOMATION_RUN_FAILURE_CODE_MODEL_BLOCKED" },
  { no: 13, name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKERS_DISABLED" },
  { no: 14, name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKER_RESOURCE_EXHAUSTED" },
  { no: 15, name: "AUTOMATION_RUN_FAILURE_CODE_GITHUB_IP_ALLOWLIST" },
  { no: 16, name: "AUTOMATION_RUN_FAILURE_CODE_INVALID_REQUEST" },
  { no: 17, name: "AUTOMATION_RUN_FAILURE_CODE_CLOUD_AGENT_PLAN_RESTRICTED" },
  { no: 18, name: "AUTOMATION_RUN_FAILURE_CODE_PRIVATE_WORKER_MISSING_REPO" },
  { no: 19, name: "AUTOMATION_RUN_FAILURE_CODE_ENVIRONMENT_BUILD_FAILED" },
  { no: 20, name: "AUTOMATION_RUN_FAILURE_CODE_FORK_PR_UNSUPPORTED" },
  { no: 21, name: "AUTOMATION_RUN_FAILURE_CODE_PROTECTED_SCOPE_BLOCKED" },
  { no: 22, name: "AUTOMATION_RUN_FAILURE_CODE_CANCELLED_SUPERSEDED_BY_NEWER_EVENT" },
  { no: 23, name: "AUTOMATION_RUN_FAILURE_CODE_USER_BLOCKED" },
  { no: 24, name: "AUTOMATION_RUN_FAILURE_CODE_PAYLOAD_TOO_LARGE" }
]);
(function(AutomationRunRetryIneligibleReason2) {
  AutomationRunRetryIneligibleReason2[AutomationRunRetryIneligibleReason2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  AutomationRunRetryIneligibleReason2[AutomationRunRetryIneligibleReason2["LAUNCH_CONTEXT_MISSING"] = 1] = "LAUNCH_CONTEXT_MISSING";
  AutomationRunRetryIneligibleReason2[AutomationRunRetryIneligibleReason2["PERMISSION_DENIED"] = 2] = "PERMISSION_DENIED";
})(AutomationRunRetryIneligibleReason! || (AutomationRunRetryIneligibleReason = {} as typeof AutomationRunRetryIneligibleReason));
proto3.util.setEnumType(AutomationRunRetryIneligibleReason, "aiserver.v1.AutomationRunRetryIneligibleReason", [
  { no: 0, name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_UNSPECIFIED" },
  { no: 1, name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_LAUNCH_CONTEXT_MISSING" },
  { no: 2, name: "AUTOMATION_RUN_RETRY_INELIGIBLE_REASON_PERMISSION_DENIED" }
]);
var Trigger$Runtime = (() => class _Trigger extends Message<_Trigger> {
  declare agenticFilterPrompt?: string;
  declare trigger: { case: "cron"; value: CronTrigger } | { case: "git"; value: GitTrigger } | { case: "slackTrigger"; value: SlackTrigger } | { case: "linear"; value: LinearTrigger } | { case: "webhook"; value: WebhookTrigger } | { case: "slackChannelCreated"; value: SlackChannelCreatedTrigger } | { case: "pagerduty"; value: PagerDutyTrigger } | { case: "sentry"; value: SentryTrigger } | { case: "microsoftTeamsTrigger"; value: MicrosoftTeamsTrigger } | { case: "microsoftTeamsChannelCreated"; value: MicrosoftTeamsChannelCreatedTrigger } | { case: "slackReactionAdded"; value: SlackReactionAddedTrigger } | { case: "slackMention"; value: SlackMentionTrigger } | { case: "slackAnyReactionAdded"; value: SlackAnyReactionAddedTrigger } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_Trigger>) {
    super();
    this.trigger = { case: void 0 };
    proto3.util.initPartial(data, this as _Trigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Trigger {
    return new _Trigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Trigger {
    return new _Trigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Trigger {
    return new _Trigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _Trigger | PlainMessage<_Trigger> | undefined | null, b2: _Trigger | PlainMessage<_Trigger> | undefined | null): boolean {
    return proto3.util.equals(_Trigger as unknown as MessageType<_Trigger>, a, b2);
  }
})();
export type Trigger = InstanceType<typeof Trigger$Runtime>;
var Trigger: MessageType<Trigger> = Trigger$Runtime as unknown as MessageType<Trigger>;
(Trigger as MutableMessageType<Trigger>).runtime = proto3;
(Trigger as MutableMessageType<Trigger>).typeName = "aiserver.v1.Trigger";
(Trigger as MutableMessageType<Trigger>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cron", kind: "message", T: CronTrigger, oneof: "trigger" },
  { no: 2, name: "git", kind: "message", T: GitTrigger, oneof: "trigger" },
  { no: 7, name: "slack_trigger", kind: "message", T: SlackTrigger, oneof: "trigger" },
  { no: 9, name: "linear", kind: "message", T: LinearTrigger, oneof: "trigger" },
  { no: 11, name: "webhook", kind: "message", T: WebhookTrigger, oneof: "trigger" },
  { no: 12, name: "slack_channel_created", kind: "message", T: SlackChannelCreatedTrigger, oneof: "trigger" },
  { no: 13, name: "pagerduty", kind: "message", T: PagerDutyTrigger, oneof: "trigger" },
  { no: 15, name: "sentry", kind: "message", T: SentryTrigger, oneof: "trigger" },
  { no: 16, name: "microsoft_teams_trigger", kind: "message", T: MicrosoftTeamsTrigger, oneof: "trigger" },
  { no: 17, name: "microsoft_teams_channel_created", kind: "message", T: MicrosoftTeamsChannelCreatedTrigger, oneof: "trigger" },
  { no: 18, name: "slack_reaction_added", kind: "message", T: SlackReactionAddedTrigger, oneof: "trigger" },
  { no: 19, name: "slack_mention", kind: "message", T: SlackMentionTrigger, oneof: "trigger" },
  { no: 20, name: "slack_any_reaction_added", kind: "message", T: SlackAnyReactionAddedTrigger, oneof: "trigger" },
  { no: 14, name: "agentic_filter_prompt", kind: "scalar", T: 9, opt: true }
]);
var Action$Runtime = (() => class _Action extends Message<_Action> {
  declare action: { case: "gitPr"; value: GitPrAction } | { case: "prComment"; value: PrCommentAction } | { case: "slack"; value: SlackAction } | { case: "mcp"; value: McpAction } | { case: "manageCheckRun"; value: ManageCheckRunAction } | { case: "requestReviewers"; value: RequestReviewersAction } | { case: "readSlack"; value: ReadSlackAction } | { case: "approvePr"; value: ApprovePrAction } | { case: "resolveReviewThreads"; value: ResolveReviewThreadsAction } | { case: "microsoftTeams"; value: MicrosoftTeamsAction } | { case: "readMicrosoftTeams"; value: ReadMicrosoftTeamsAction } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_Action>) {
    super();
    this.action = { case: void 0 };
    proto3.util.initPartial(data, this as _Action);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Action {
    return new _Action().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Action {
    return new _Action().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Action {
    return new _Action().fromJsonString(jsonString, options2);
  }
  static equals(a: _Action | PlainMessage<_Action> | undefined | null, b2: _Action | PlainMessage<_Action> | undefined | null): boolean {
    return proto3.util.equals(_Action as unknown as MessageType<_Action>, a, b2);
  }
})();
export type Action = InstanceType<typeof Action$Runtime>;
var Action: MessageType<Action> = Action$Runtime as unknown as MessageType<Action>;
(Action as MutableMessageType<Action>).runtime = proto3;
(Action as MutableMessageType<Action>).typeName = "aiserver.v1.Action";
(Action as MutableMessageType<Action>).fields = proto3.util.newFieldList(() => [
  { no: 4, name: "git_pr", kind: "message", T: GitPrAction, oneof: "action" },
  { no: 5, name: "pr_comment", kind: "message", T: PrCommentAction, oneof: "action" },
  { no: 6, name: "slack", kind: "message", T: SlackAction, oneof: "action" },
  { no: 7, name: "mcp", kind: "message", T: McpAction, oneof: "action" },
  { no: 8, name: "manage_check_run", kind: "message", T: ManageCheckRunAction, oneof: "action" },
  { no: 9, name: "request_reviewers", kind: "message", T: RequestReviewersAction, oneof: "action" },
  { no: 10, name: "read_slack", kind: "message", T: ReadSlackAction, oneof: "action" },
  { no: 11, name: "approve_pr", kind: "message", T: ApprovePrAction, oneof: "action" },
  { no: 12, name: "resolve_review_threads", kind: "message", T: ResolveReviewThreadsAction, oneof: "action" },
  { no: 13, name: "microsoft_teams", kind: "message", T: MicrosoftTeamsAction, oneof: "action" },
  { no: 14, name: "read_microsoft_teams", kind: "message", T: ReadMicrosoftTeamsAction, oneof: "action" }
]);
var McpAction$Runtime = (() => class _McpAction extends Message<_McpAction> {
  declare server?: McpServerConfig;
  constructor(data?: PartialMessage<_McpAction>) {
    super();
    proto3.util.initPartial(data, this as _McpAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _McpAction {
    return new _McpAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _McpAction {
    return new _McpAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _McpAction {
    return new _McpAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _McpAction | PlainMessage<_McpAction> | undefined | null, b2: _McpAction | PlainMessage<_McpAction> | undefined | null): boolean {
    return proto3.util.equals(_McpAction as unknown as MessageType<_McpAction>, a, b2);
  }
})();
export type McpAction = InstanceType<typeof McpAction$Runtime>;
var McpAction: MessageType<McpAction> = McpAction$Runtime as unknown as MessageType<McpAction>;
(McpAction as MutableMessageType<McpAction>).runtime = proto3;
(McpAction as MutableMessageType<McpAction>).typeName = "aiserver.v1.McpAction";
(McpAction as MutableMessageType<McpAction>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server", kind: "message", T: McpServerConfig }
]);
var McpServerConfig$Runtime = (() => class _McpServerConfig extends Message<_McpServerConfig> {
  declare id?: bigint;
  declare name: string;
  constructor(data?: PartialMessage<_McpServerConfig>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _McpServerConfig);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _McpServerConfig {
    return new _McpServerConfig().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _McpServerConfig {
    return new _McpServerConfig().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _McpServerConfig {
    return new _McpServerConfig().fromJsonString(jsonString, options2);
  }
  static equals(a: _McpServerConfig | PlainMessage<_McpServerConfig> | undefined | null, b2: _McpServerConfig | PlainMessage<_McpServerConfig> | undefined | null): boolean {
    return proto3.util.equals(_McpServerConfig as unknown as MessageType<_McpServerConfig>, a, b2);
  }
})();
export type McpServerConfig = InstanceType<typeof McpServerConfig$Runtime>;
var McpServerConfig: MessageType<McpServerConfig> = McpServerConfig$Runtime as unknown as MessageType<McpServerConfig>;
(McpServerConfig as MutableMessageType<McpServerConfig>).runtime = proto3;
(McpServerConfig as MutableMessageType<McpServerConfig>).typeName = "aiserver.v1.McpServerConfig";
(McpServerConfig as MutableMessageType<McpServerConfig>).fields = proto3.util.newFieldList(() => [
  { no: 4, name: "id", kind: "scalar", T: 3, opt: true },
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var AgentPrivateWorkerLabel$Runtime = (() => class _AgentPrivateWorkerLabel extends Message<_AgentPrivateWorkerLabel> {
  declare key: string;
  declare value: string;
  constructor(data?: PartialMessage<_AgentPrivateWorkerLabel>) {
    super();
    this.key = "";
    this.value = "";
    proto3.util.initPartial(data, this as _AgentPrivateWorkerLabel);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentPrivateWorkerLabel {
    return new _AgentPrivateWorkerLabel().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentPrivateWorkerLabel {
    return new _AgentPrivateWorkerLabel().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentPrivateWorkerLabel {
    return new _AgentPrivateWorkerLabel().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentPrivateWorkerLabel | PlainMessage<_AgentPrivateWorkerLabel> | undefined | null, b2: _AgentPrivateWorkerLabel | PlainMessage<_AgentPrivateWorkerLabel> | undefined | null): boolean {
    return proto3.util.equals(_AgentPrivateWorkerLabel as unknown as MessageType<_AgentPrivateWorkerLabel>, a, b2);
  }
})();
export type AgentPrivateWorkerLabel = InstanceType<typeof AgentPrivateWorkerLabel$Runtime>;
var AgentPrivateWorkerLabel: MessageType<AgentPrivateWorkerLabel> = AgentPrivateWorkerLabel$Runtime as unknown as MessageType<AgentPrivateWorkerLabel>;
(AgentPrivateWorkerLabel as MutableMessageType<AgentPrivateWorkerLabel>).runtime = proto3;
(AgentPrivateWorkerLabel as MutableMessageType<AgentPrivateWorkerLabel>).typeName = "aiserver.v1.AgentPrivateWorkerLabel";
(AgentPrivateWorkerLabel as MutableMessageType<AgentPrivateWorkerLabel>).fields = proto3.util.newFieldList(() => [
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
var AgentPrivateWorkerConfig$Runtime = (() => class _AgentPrivateWorkerConfig extends Message<_AgentPrivateWorkerConfig> {
  declare labels: AgentPrivateWorkerLabel[];
  constructor(data?: PartialMessage<_AgentPrivateWorkerConfig>) {
    super();
    this.labels = [];
    proto3.util.initPartial(data, this as _AgentPrivateWorkerConfig);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentPrivateWorkerConfig {
    return new _AgentPrivateWorkerConfig().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentPrivateWorkerConfig {
    return new _AgentPrivateWorkerConfig().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentPrivateWorkerConfig {
    return new _AgentPrivateWorkerConfig().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentPrivateWorkerConfig | PlainMessage<_AgentPrivateWorkerConfig> | undefined | null, b2: _AgentPrivateWorkerConfig | PlainMessage<_AgentPrivateWorkerConfig> | undefined | null): boolean {
    return proto3.util.equals(_AgentPrivateWorkerConfig as unknown as MessageType<_AgentPrivateWorkerConfig>, a, b2);
  }
})();
export type AgentPrivateWorkerConfig = InstanceType<typeof AgentPrivateWorkerConfig$Runtime>;
var AgentPrivateWorkerConfig: MessageType<AgentPrivateWorkerConfig> = AgentPrivateWorkerConfig$Runtime as unknown as MessageType<AgentPrivateWorkerConfig>;
(AgentPrivateWorkerConfig as MutableMessageType<AgentPrivateWorkerConfig>).runtime = proto3;
(AgentPrivateWorkerConfig as MutableMessageType<AgentPrivateWorkerConfig>).typeName = "aiserver.v1.AgentPrivateWorkerConfig";
(AgentPrivateWorkerConfig as MutableMessageType<AgentPrivateWorkerConfig>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "labels", kind: "message", T: AgentPrivateWorkerLabel, repeated: true }
]);
var AgentOptions$Runtime = (() => class _AgentOptions extends Message<_AgentOptions> {
  declare skipInstall?: boolean;
  declare privateWorker?: AgentPrivateWorkerConfig;
  declare environmentPublicId?: string;
  constructor(data?: PartialMessage<_AgentOptions>) {
    super();
    proto3.util.initPartial(data, this as _AgentOptions);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AgentOptions {
    return new _AgentOptions().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AgentOptions {
    return new _AgentOptions().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AgentOptions {
    return new _AgentOptions().fromJsonString(jsonString, options2);
  }
  static equals(a: _AgentOptions | PlainMessage<_AgentOptions> | undefined | null, b2: _AgentOptions | PlainMessage<_AgentOptions> | undefined | null): boolean {
    return proto3.util.equals(_AgentOptions as unknown as MessageType<_AgentOptions>, a, b2);
  }
})();
export type AgentOptions = InstanceType<typeof AgentOptions$Runtime>;
var AgentOptions: MessageType<AgentOptions> = AgentOptions$Runtime as unknown as MessageType<AgentOptions>;
(AgentOptions as MutableMessageType<AgentOptions>).runtime = proto3;
(AgentOptions as MutableMessageType<AgentOptions>).typeName = "aiserver.v1.AgentOptions";
(AgentOptions as MutableMessageType<AgentOptions>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "skip_install", kind: "scalar", T: 8, opt: true },
  { no: 2, name: "private_worker", kind: "message", T: AgentPrivateWorkerConfig, opt: true },
  { no: 3, name: "environment_public_id", kind: "scalar", T: 9, opt: true }
]);
var Workflow$Runtime = (() => class _Workflow extends Message<_Workflow> {
  declare triggers: Trigger[];
  declare actions: Action[];
  declare prompts: Prompt[];
  declare model?: string;
  declare gitConfig?: GitConfig;
  declare agentOptions?: AgentOptions;
  declare memoryEnabled?: boolean;
  declare slackNotifiedChannels: string[];
  declare slackCompletionReactionMode?: SlackCompletionReactionMode;
  declare slackCompletionReactionCustomEmoji?: string;
  declare managedConfig?: Struct;
  declare disabledDefaultTools: AutomationDefaultTool[];
  constructor(data?: PartialMessage<_Workflow>) {
    super();
    this.triggers = [];
    this.actions = [];
    this.prompts = [];
    this.slackNotifiedChannels = [];
    this.disabledDefaultTools = [];
    proto3.util.initPartial(data, this as _Workflow);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Workflow {
    return new _Workflow().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Workflow {
    return new _Workflow().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Workflow {
    return new _Workflow().fromJsonString(jsonString, options2);
  }
  static equals(a: _Workflow | PlainMessage<_Workflow> | undefined | null, b2: _Workflow | PlainMessage<_Workflow> | undefined | null): boolean {
    return proto3.util.equals(_Workflow as unknown as MessageType<_Workflow>, a, b2);
  }
})();
export type Workflow = InstanceType<typeof Workflow$Runtime>;
var Workflow: MessageType<Workflow> = Workflow$Runtime as unknown as MessageType<Workflow>;
(Workflow as MutableMessageType<Workflow>).runtime = proto3;
(Workflow as MutableMessageType<Workflow>).typeName = "aiserver.v1.Workflow";
(Workflow as MutableMessageType<Workflow>).fields = proto3.util.newFieldList(() => [
  { no: 10, name: "triggers", kind: "message", T: Trigger, repeated: true },
  { no: 11, name: "actions", kind: "message", T: Action, repeated: true },
  { no: 3, name: "prompts", kind: "message", T: Prompt, repeated: true },
  { no: 8, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "git_config", kind: "message", T: GitConfig, opt: true },
  { no: 13, name: "agent_options", kind: "message", T: AgentOptions, opt: true },
  { no: 14, name: "memory_enabled", kind: "scalar", T: 8, opt: true },
  { no: 15, name: "slack_notified_channels", kind: "scalar", T: 9, repeated: true },
  { no: 16, name: "slack_completion_reaction_mode", kind: "enum", T: proto3.getEnumType(SlackCompletionReactionMode), opt: true },
  { no: 17, name: "slack_completion_reaction_custom_emoji", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "managed_config", kind: "message", T: Struct, opt: true },
  { no: 19, name: "disabled_default_tools", kind: "enum", T: proto3.getEnumType(AutomationDefaultTool), repeated: true }
]);
var Prompt$Runtime = (() => class _Prompt extends Message<_Prompt> {
  declare prompt: string;
  declare effortLevel: PromptEffortLevel;
  declare model?: string;
  declare isFilter?: boolean;
  declare runMode?: PromptRunMode;
  declare suppressSlackReaction?: boolean;
  constructor(data?: PartialMessage<_Prompt>) {
    super();
    this.prompt = "";
    this.effortLevel = PromptEffortLevel.UNSPECIFIED;
    proto3.util.initPartial(data, this as _Prompt);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Prompt {
    return new _Prompt().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Prompt {
    return new _Prompt().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Prompt {
    return new _Prompt().fromJsonString(jsonString, options2);
  }
  static equals(a: _Prompt | PlainMessage<_Prompt> | undefined | null, b2: _Prompt | PlainMessage<_Prompt> | undefined | null): boolean {
    return proto3.util.equals(_Prompt as unknown as MessageType<_Prompt>, a, b2);
  }
})();
export type Prompt = InstanceType<typeof Prompt$Runtime>;
var Prompt: MessageType<Prompt> = Prompt$Runtime as unknown as MessageType<Prompt>;
(Prompt as MutableMessageType<Prompt>).runtime = proto3;
(Prompt as MutableMessageType<Prompt>).typeName = "aiserver.v1.Prompt";
(Prompt as MutableMessageType<Prompt>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "effort_level", kind: "enum", T: proto3.getEnumType(PromptEffortLevel) },
  { no: 3, name: "model", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "is_filter", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "run_mode", kind: "enum", T: proto3.getEnumType(PromptRunMode), opt: true },
  { no: 6, name: "suppress_slack_reaction", kind: "scalar", T: 8, opt: true }
]);
var GitConfig$Runtime = (() => class _GitConfig extends Message<_GitConfig> {
  declare repo: string;
  declare branch: string;
  declare repos: string[];
  constructor(data?: PartialMessage<_GitConfig>) {
    super();
    this.repo = "";
    this.branch = "";
    this.repos = [];
    proto3.util.initPartial(data, this as _GitConfig);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitConfig {
    return new _GitConfig().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitConfig {
    return new _GitConfig().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitConfig {
    return new _GitConfig().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitConfig | PlainMessage<_GitConfig> | undefined | null, b2: _GitConfig | PlainMessage<_GitConfig> | undefined | null): boolean {
    return proto3.util.equals(_GitConfig as unknown as MessageType<_GitConfig>, a, b2);
  }
})();
export type GitConfig = InstanceType<typeof GitConfig$Runtime>;
var GitConfig: MessageType<GitConfig> = GitConfig$Runtime as unknown as MessageType<GitConfig>;
(GitConfig as MutableMessageType<GitConfig>).runtime = proto3;
(GitConfig as MutableMessageType<GitConfig>).typeName = "aiserver.v1.GitConfig";
(GitConfig as MutableMessageType<GitConfig>).fields = proto3.util.newFieldList(() => [
  {
    no: 3,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "repos", kind: "scalar", T: 9, repeated: true }
]);
var CronTrigger$Runtime = (() => class _CronTrigger extends Message<_CronTrigger> {
  declare cron: string;
  constructor(data?: PartialMessage<_CronTrigger>) {
    super();
    this.cron = "";
    proto3.util.initPartial(data, this as _CronTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CronTrigger {
    return new _CronTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CronTrigger {
    return new _CronTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CronTrigger {
    return new _CronTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _CronTrigger | PlainMessage<_CronTrigger> | undefined | null, b2: _CronTrigger | PlainMessage<_CronTrigger> | undefined | null): boolean {
    return proto3.util.equals(_CronTrigger as unknown as MessageType<_CronTrigger>, a, b2);
  }
})();
export type CronTrigger = InstanceType<typeof CronTrigger$Runtime>;
var CronTrigger: MessageType<CronTrigger> = CronTrigger$Runtime as unknown as MessageType<CronTrigger>;
(CronTrigger as MutableMessageType<CronTrigger>).runtime = proto3;
(CronTrigger as MutableMessageType<CronTrigger>).typeName = "aiserver.v1.CronTrigger";
(CronTrigger as MutableMessageType<CronTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cron",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GitTrigger$Runtime = (() => class _GitTrigger extends Message<_GitTrigger> {
  declare userAllowlist: string[];
  declare event: { case: "pullRequest"; value: GitPullRequestEvent } | { case: "push"; value: GitPushEvent } | { case: "ciCompleted"; value: GitCICompletedEvent } | { case: "issueLabeled"; value: GitIssueLabeledEvent } | { case: "label"; value: GitLabelEvent } | { case: "issueComment"; value: GitIssueCommentEvent } | { case: "pullRequestReviewComment"; value: GitPullRequestReviewCommentEvent } | { case: "pullRequestReview"; value: GitPullRequestReviewEvent } | { case: "reviewThread"; value: GitReviewThreadEvent } | { case: "workflowRun"; value: GitWorkflowRunEvent } | { case: "pullRequestReviewRequested"; value: GitPullRequestReviewRequestedEvent } | { case: "issueAssigned"; value: GitIssueAssignedEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GitTrigger>) {
    super();
    this.event = { case: void 0 };
    this.userAllowlist = [];
    proto3.util.initPartial(data, this as _GitTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitTrigger {
    return new _GitTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitTrigger {
    return new _GitTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitTrigger {
    return new _GitTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitTrigger | PlainMessage<_GitTrigger> | undefined | null, b2: _GitTrigger | PlainMessage<_GitTrigger> | undefined | null): boolean {
    return proto3.util.equals(_GitTrigger as unknown as MessageType<_GitTrigger>, a, b2);
  }
})();
export type GitTrigger = InstanceType<typeof GitTrigger$Runtime>;
var GitTrigger: MessageType<GitTrigger> = GitTrigger$Runtime as unknown as MessageType<GitTrigger>;
(GitTrigger as MutableMessageType<GitTrigger>).runtime = proto3;
(GitTrigger as MutableMessageType<GitTrigger>).typeName = "aiserver.v1.GitTrigger";
(GitTrigger as MutableMessageType<GitTrigger>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pull_request", kind: "message", T: GitPullRequestEvent, oneof: "event" },
  { no: 2, name: "push", kind: "message", T: GitPushEvent, oneof: "event" },
  { no: 4, name: "ci_completed", kind: "message", T: GitCICompletedEvent, oneof: "event" },
  { no: 5, name: "issue_labeled", kind: "message", T: GitIssueLabeledEvent, oneof: "event" },
  { no: 6, name: "label", kind: "message", T: GitLabelEvent, oneof: "event" },
  { no: 7, name: "issue_comment", kind: "message", T: GitIssueCommentEvent, oneof: "event" },
  { no: 8, name: "pull_request_review_comment", kind: "message", T: GitPullRequestReviewCommentEvent, oneof: "event" },
  { no: 9, name: "pull_request_review", kind: "message", T: GitPullRequestReviewEvent, oneof: "event" },
  { no: 10, name: "review_thread", kind: "message", T: GitReviewThreadEvent, oneof: "event" },
  { no: 11, name: "workflow_run", kind: "message", T: GitWorkflowRunEvent, oneof: "event" },
  { no: 12, name: "pull_request_review_requested", kind: "message", T: GitPullRequestReviewRequestedEvent, oneof: "event" },
  { no: 13, name: "issue_assigned", kind: "message", T: GitIssueAssignedEvent, oneof: "event" },
  { no: 3, name: "user_allowlist", kind: "scalar", T: 9, repeated: true }
]);
var GitPullRequestEvent$Runtime = (() => class _GitPullRequestEvent extends Message<_GitPullRequestEvent> {
  declare repo: string;
  declare repos: string[];
  declare ignoreDraftPrs: boolean;
  declare onlyOnce: boolean;
  declare prAction: GitPullRequestAction;
  declare commenterAllowlist: string[];
  declare commentContains: string;
  declare commentContainsIsRegex: boolean;
  declare labelName: string;
  declare orgs: string[];
  constructor(data?: PartialMessage<_GitPullRequestEvent>) {
    super();
    this.repo = "";
    this.repos = [];
    this.ignoreDraftPrs = false;
    this.onlyOnce = false;
    this.prAction = GitPullRequestAction.UNSPECIFIED;
    this.commenterAllowlist = [];
    this.commentContains = "";
    this.commentContainsIsRegex = false;
    this.labelName = "";
    this.orgs = [];
    proto3.util.initPartial(data, this as _GitPullRequestEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPullRequestEvent {
    return new _GitPullRequestEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPullRequestEvent {
    return new _GitPullRequestEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPullRequestEvent {
    return new _GitPullRequestEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPullRequestEvent | PlainMessage<_GitPullRequestEvent> | undefined | null, b2: _GitPullRequestEvent | PlainMessage<_GitPullRequestEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitPullRequestEvent as unknown as MessageType<_GitPullRequestEvent>, a, b2);
  }
})();
export type GitPullRequestEvent = InstanceType<typeof GitPullRequestEvent$Runtime>;
var GitPullRequestEvent: MessageType<GitPullRequestEvent> = GitPullRequestEvent$Runtime as unknown as MessageType<GitPullRequestEvent>;
(GitPullRequestEvent as MutableMessageType<GitPullRequestEvent>).runtime = proto3;
(GitPullRequestEvent as MutableMessageType<GitPullRequestEvent>).typeName = "aiserver.v1.GitPullRequestEvent";
(GitPullRequestEvent as MutableMessageType<GitPullRequestEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repos", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "ignore_draft_prs",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "only_once",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "pr_action", kind: "enum", T: proto3.getEnumType(GitPullRequestAction) },
  { no: 6, name: "commenter_allowlist", kind: "scalar", T: 9, repeated: true },
  {
    no: 7,
    name: "comment_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 10,
    name: "comment_contains_is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 8,
    name: "label_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "orgs", kind: "scalar", T: 9, repeated: true }
]);
var GitPullRequestReviewRequestedEvent$Runtime = (() => class _GitPullRequestReviewRequestedEvent extends Message<_GitPullRequestReviewRequestedEvent> {
  declare repos: string[];
  constructor(data?: PartialMessage<_GitPullRequestReviewRequestedEvent>) {
    super();
    this.repos = [];
    proto3.util.initPartial(data, this as _GitPullRequestReviewRequestedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPullRequestReviewRequestedEvent {
    return new _GitPullRequestReviewRequestedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewRequestedEvent {
    return new _GitPullRequestReviewRequestedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewRequestedEvent {
    return new _GitPullRequestReviewRequestedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPullRequestReviewRequestedEvent | PlainMessage<_GitPullRequestReviewRequestedEvent> | undefined | null, b2: _GitPullRequestReviewRequestedEvent | PlainMessage<_GitPullRequestReviewRequestedEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitPullRequestReviewRequestedEvent as unknown as MessageType<_GitPullRequestReviewRequestedEvent>, a, b2);
  }
})();
export type GitPullRequestReviewRequestedEvent = InstanceType<typeof GitPullRequestReviewRequestedEvent$Runtime>;
var GitPullRequestReviewRequestedEvent: MessageType<GitPullRequestReviewRequestedEvent> = GitPullRequestReviewRequestedEvent$Runtime as unknown as MessageType<GitPullRequestReviewRequestedEvent>;
(GitPullRequestReviewRequestedEvent as MutableMessageType<GitPullRequestReviewRequestedEvent>).runtime = proto3;
(GitPullRequestReviewRequestedEvent as MutableMessageType<GitPullRequestReviewRequestedEvent>).typeName = "aiserver.v1.GitPullRequestReviewRequestedEvent";
(GitPullRequestReviewRequestedEvent as MutableMessageType<GitPullRequestReviewRequestedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true }
]);
var GitIssueAssignedEvent$Runtime = (() => class _GitIssueAssignedEvent extends Message<_GitIssueAssignedEvent> {
  declare repos: string[];
  constructor(data?: PartialMessage<_GitIssueAssignedEvent>) {
    super();
    this.repos = [];
    proto3.util.initPartial(data, this as _GitIssueAssignedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitIssueAssignedEvent {
    return new _GitIssueAssignedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitIssueAssignedEvent {
    return new _GitIssueAssignedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitIssueAssignedEvent {
    return new _GitIssueAssignedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitIssueAssignedEvent | PlainMessage<_GitIssueAssignedEvent> | undefined | null, b2: _GitIssueAssignedEvent | PlainMessage<_GitIssueAssignedEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitIssueAssignedEvent as unknown as MessageType<_GitIssueAssignedEvent>, a, b2);
  }
})();
export type GitIssueAssignedEvent = InstanceType<typeof GitIssueAssignedEvent$Runtime>;
var GitIssueAssignedEvent: MessageType<GitIssueAssignedEvent> = GitIssueAssignedEvent$Runtime as unknown as MessageType<GitIssueAssignedEvent>;
(GitIssueAssignedEvent as MutableMessageType<GitIssueAssignedEvent>).runtime = proto3;
(GitIssueAssignedEvent as MutableMessageType<GitIssueAssignedEvent>).typeName = "aiserver.v1.GitIssueAssignedEvent";
(GitIssueAssignedEvent as MutableMessageType<GitIssueAssignedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true }
]);
var GitPushEvent$Runtime = (() => class _GitPushEvent extends Message<_GitPushEvent> {
  declare repo: string;
  declare branch: string;
  declare repos: string[];
  constructor(data?: PartialMessage<_GitPushEvent>) {
    super();
    this.repo = "";
    this.branch = "";
    this.repos = [];
    proto3.util.initPartial(data, this as _GitPushEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPushEvent {
    return new _GitPushEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPushEvent {
    return new _GitPushEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPushEvent {
    return new _GitPushEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPushEvent | PlainMessage<_GitPushEvent> | undefined | null, b2: _GitPushEvent | PlainMessage<_GitPushEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitPushEvent as unknown as MessageType<_GitPushEvent>, a, b2);
  }
})();
export type GitPushEvent = InstanceType<typeof GitPushEvent$Runtime>;
var GitPushEvent: MessageType<GitPushEvent> = GitPushEvent$Runtime as unknown as MessageType<GitPushEvent>;
(GitPushEvent as MutableMessageType<GitPushEvent>).runtime = proto3;
(GitPushEvent as MutableMessageType<GitPushEvent>).typeName = "aiserver.v1.GitPushEvent";
(GitPushEvent as MutableMessageType<GitPushEvent>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "repos", kind: "scalar", T: 9, repeated: true }
]);
var GitCICompletedEvent$Runtime = (() => class _GitCICompletedEvent extends Message<_GitCICompletedEvent> {
  declare repos: string[];
  declare condition: GitCICompletionCondition;
  declare ignoreBaseFailures: boolean;
  declare branch: string;
  constructor(data?: PartialMessage<_GitCICompletedEvent>) {
    super();
    this.repos = [];
    this.condition = GitCICompletionCondition.GIT_CI_COMPLETION_CONDITION_UNSPECIFIED;
    this.ignoreBaseFailures = false;
    this.branch = "";
    proto3.util.initPartial(data, this as _GitCICompletedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitCICompletedEvent {
    return new _GitCICompletedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitCICompletedEvent {
    return new _GitCICompletedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitCICompletedEvent {
    return new _GitCICompletedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitCICompletedEvent | PlainMessage<_GitCICompletedEvent> | undefined | null, b2: _GitCICompletedEvent | PlainMessage<_GitCICompletedEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitCICompletedEvent as unknown as MessageType<_GitCICompletedEvent>, a, b2);
  }
})();
export type GitCICompletedEvent = InstanceType<typeof GitCICompletedEvent$Runtime>;
var GitCICompletedEvent: MessageType<GitCICompletedEvent> = GitCICompletedEvent$Runtime as unknown as MessageType<GitCICompletedEvent>;
(GitCICompletedEvent as MutableMessageType<GitCICompletedEvent>).runtime = proto3;
(GitCICompletedEvent as MutableMessageType<GitCICompletedEvent>).typeName = "aiserver.v1.GitCICompletedEvent";
(GitCICompletedEvent as MutableMessageType<GitCICompletedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "condition", kind: "enum", T: proto3.getEnumType(GitCICompletionCondition) },
  {
    no: 3,
    name: "ignore_base_failures",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GitIssueLabeledEvent$Runtime = (() => class _GitIssueLabeledEvent extends Message<_GitIssueLabeledEvent> {
  declare repos: string[];
  declare labelName: string;
  declare unlabeled: boolean;
  constructor(data?: PartialMessage<_GitIssueLabeledEvent>) {
    super();
    this.repos = [];
    this.labelName = "";
    this.unlabeled = false;
    proto3.util.initPartial(data, this as _GitIssueLabeledEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitIssueLabeledEvent {
    return new _GitIssueLabeledEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitIssueLabeledEvent {
    return new _GitIssueLabeledEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitIssueLabeledEvent {
    return new _GitIssueLabeledEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitIssueLabeledEvent | PlainMessage<_GitIssueLabeledEvent> | undefined | null, b2: _GitIssueLabeledEvent | PlainMessage<_GitIssueLabeledEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitIssueLabeledEvent as unknown as MessageType<_GitIssueLabeledEvent>, a, b2);
  }
})();
export type GitIssueLabeledEvent = InstanceType<typeof GitIssueLabeledEvent$Runtime>;
var GitIssueLabeledEvent: MessageType<GitIssueLabeledEvent> = GitIssueLabeledEvent$Runtime as unknown as MessageType<GitIssueLabeledEvent>;
(GitIssueLabeledEvent as MutableMessageType<GitIssueLabeledEvent>).runtime = proto3;
(GitIssueLabeledEvent as MutableMessageType<GitIssueLabeledEvent>).typeName = "aiserver.v1.GitIssueLabeledEvent";
(GitIssueLabeledEvent as MutableMessageType<GitIssueLabeledEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "label_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "unlabeled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitIssueCommentEvent$Runtime = (() => class _GitIssueCommentEvent extends Message<_GitIssueCommentEvent> {
  declare repos: string[];
  declare commenterAllowlist: string[];
  declare commentContains: string;
  declare commentContainsIsRegex: boolean;
  constructor(data?: PartialMessage<_GitIssueCommentEvent>) {
    super();
    this.repos = [];
    this.commenterAllowlist = [];
    this.commentContains = "";
    this.commentContainsIsRegex = false;
    proto3.util.initPartial(data, this as _GitIssueCommentEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitIssueCommentEvent {
    return new _GitIssueCommentEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitIssueCommentEvent {
    return new _GitIssueCommentEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitIssueCommentEvent {
    return new _GitIssueCommentEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitIssueCommentEvent | PlainMessage<_GitIssueCommentEvent> | undefined | null, b2: _GitIssueCommentEvent | PlainMessage<_GitIssueCommentEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitIssueCommentEvent as unknown as MessageType<_GitIssueCommentEvent>, a, b2);
  }
})();
export type GitIssueCommentEvent = InstanceType<typeof GitIssueCommentEvent$Runtime>;
var GitIssueCommentEvent: MessageType<GitIssueCommentEvent> = GitIssueCommentEvent$Runtime as unknown as MessageType<GitIssueCommentEvent>;
(GitIssueCommentEvent as MutableMessageType<GitIssueCommentEvent>).runtime = proto3;
(GitIssueCommentEvent as MutableMessageType<GitIssueCommentEvent>).typeName = "aiserver.v1.GitIssueCommentEvent";
(GitIssueCommentEvent as MutableMessageType<GitIssueCommentEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "commenter_allowlist", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "comment_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "comment_contains_is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitPullRequestReviewCommentEvent$Runtime = (() => class _GitPullRequestReviewCommentEvent extends Message<_GitPullRequestReviewCommentEvent> {
  declare repos: string[];
  declare commenterAllowlist: string[];
  declare commentContains: string;
  declare commentContainsIsRegex: boolean;
  constructor(data?: PartialMessage<_GitPullRequestReviewCommentEvent>) {
    super();
    this.repos = [];
    this.commenterAllowlist = [];
    this.commentContains = "";
    this.commentContainsIsRegex = false;
    proto3.util.initPartial(data, this as _GitPullRequestReviewCommentEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPullRequestReviewCommentEvent {
    return new _GitPullRequestReviewCommentEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewCommentEvent {
    return new _GitPullRequestReviewCommentEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewCommentEvent {
    return new _GitPullRequestReviewCommentEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPullRequestReviewCommentEvent | PlainMessage<_GitPullRequestReviewCommentEvent> | undefined | null, b2: _GitPullRequestReviewCommentEvent | PlainMessage<_GitPullRequestReviewCommentEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitPullRequestReviewCommentEvent as unknown as MessageType<_GitPullRequestReviewCommentEvent>, a, b2);
  }
})();
export type GitPullRequestReviewCommentEvent = InstanceType<typeof GitPullRequestReviewCommentEvent$Runtime>;
var GitPullRequestReviewCommentEvent: MessageType<GitPullRequestReviewCommentEvent> = GitPullRequestReviewCommentEvent$Runtime as unknown as MessageType<GitPullRequestReviewCommentEvent>;
(GitPullRequestReviewCommentEvent as MutableMessageType<GitPullRequestReviewCommentEvent>).runtime = proto3;
(GitPullRequestReviewCommentEvent as MutableMessageType<GitPullRequestReviewCommentEvent>).typeName = "aiserver.v1.GitPullRequestReviewCommentEvent";
(GitPullRequestReviewCommentEvent as MutableMessageType<GitPullRequestReviewCommentEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "commenter_allowlist", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "comment_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "comment_contains_is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitPullRequestReviewEvent$Runtime = (() => class _GitPullRequestReviewEvent extends Message<_GitPullRequestReviewEvent> {
  declare repos: string[];
  declare onApproved: boolean;
  declare onChangesRequested: boolean;
  declare onCommented: boolean;
  constructor(data?: PartialMessage<_GitPullRequestReviewEvent>) {
    super();
    this.repos = [];
    this.onApproved = false;
    this.onChangesRequested = false;
    this.onCommented = false;
    proto3.util.initPartial(data, this as _GitPullRequestReviewEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPullRequestReviewEvent {
    return new _GitPullRequestReviewEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewEvent {
    return new _GitPullRequestReviewEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPullRequestReviewEvent {
    return new _GitPullRequestReviewEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPullRequestReviewEvent | PlainMessage<_GitPullRequestReviewEvent> | undefined | null, b2: _GitPullRequestReviewEvent | PlainMessage<_GitPullRequestReviewEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitPullRequestReviewEvent as unknown as MessageType<_GitPullRequestReviewEvent>, a, b2);
  }
})();
export type GitPullRequestReviewEvent = InstanceType<typeof GitPullRequestReviewEvent$Runtime>;
var GitPullRequestReviewEvent: MessageType<GitPullRequestReviewEvent> = GitPullRequestReviewEvent$Runtime as unknown as MessageType<GitPullRequestReviewEvent>;
(GitPullRequestReviewEvent as MutableMessageType<GitPullRequestReviewEvent>).runtime = proto3;
(GitPullRequestReviewEvent as MutableMessageType<GitPullRequestReviewEvent>).typeName = "aiserver.v1.GitPullRequestReviewEvent";
(GitPullRequestReviewEvent as MutableMessageType<GitPullRequestReviewEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "on_approved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "on_changes_requested",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "on_commented",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitReviewThreadEvent$Runtime = (() => class _GitReviewThreadEvent extends Message<_GitReviewThreadEvent> {
  declare repos: string[];
  declare onResolved: boolean;
  declare onUnresolved: boolean;
  constructor(data?: PartialMessage<_GitReviewThreadEvent>) {
    super();
    this.repos = [];
    this.onResolved = false;
    this.onUnresolved = false;
    proto3.util.initPartial(data, this as _GitReviewThreadEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitReviewThreadEvent {
    return new _GitReviewThreadEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitReviewThreadEvent {
    return new _GitReviewThreadEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitReviewThreadEvent {
    return new _GitReviewThreadEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitReviewThreadEvent | PlainMessage<_GitReviewThreadEvent> | undefined | null, b2: _GitReviewThreadEvent | PlainMessage<_GitReviewThreadEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitReviewThreadEvent as unknown as MessageType<_GitReviewThreadEvent>, a, b2);
  }
})();
export type GitReviewThreadEvent = InstanceType<typeof GitReviewThreadEvent$Runtime>;
var GitReviewThreadEvent: MessageType<GitReviewThreadEvent> = GitReviewThreadEvent$Runtime as unknown as MessageType<GitReviewThreadEvent>;
(GitReviewThreadEvent as MutableMessageType<GitReviewThreadEvent>).runtime = proto3;
(GitReviewThreadEvent as MutableMessageType<GitReviewThreadEvent>).typeName = "aiserver.v1.GitReviewThreadEvent";
(GitReviewThreadEvent as MutableMessageType<GitReviewThreadEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "on_resolved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "on_unresolved",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GitWorkflowRunEvent$Runtime = (() => class _GitWorkflowRunEvent extends Message<_GitWorkflowRunEvent> {
  declare repos: string[];
  declare workflowNames: string[];
  declare branch: string;
  declare conclusion: GitWorkflowRunConclusion;
  constructor(data?: PartialMessage<_GitWorkflowRunEvent>) {
    super();
    this.repos = [];
    this.workflowNames = [];
    this.branch = "";
    this.conclusion = GitWorkflowRunConclusion.UNSPECIFIED;
    proto3.util.initPartial(data, this as _GitWorkflowRunEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitWorkflowRunEvent {
    return new _GitWorkflowRunEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitWorkflowRunEvent {
    return new _GitWorkflowRunEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitWorkflowRunEvent {
    return new _GitWorkflowRunEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitWorkflowRunEvent | PlainMessage<_GitWorkflowRunEvent> | undefined | null, b2: _GitWorkflowRunEvent | PlainMessage<_GitWorkflowRunEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitWorkflowRunEvent as unknown as MessageType<_GitWorkflowRunEvent>, a, b2);
  }
})();
export type GitWorkflowRunEvent = InstanceType<typeof GitWorkflowRunEvent$Runtime>;
var GitWorkflowRunEvent: MessageType<GitWorkflowRunEvent> = GitWorkflowRunEvent$Runtime as unknown as MessageType<GitWorkflowRunEvent>;
(GitWorkflowRunEvent as MutableMessageType<GitWorkflowRunEvent>).runtime = proto3;
(GitWorkflowRunEvent as MutableMessageType<GitWorkflowRunEvent>).typeName = "aiserver.v1.GitWorkflowRunEvent";
(GitWorkflowRunEvent as MutableMessageType<GitWorkflowRunEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  { no: 2, name: "workflow_names", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "conclusion", kind: "enum", T: proto3.getEnumType(GitWorkflowRunConclusion) }
]);
var GitLabelEvent$Runtime = (() => class _GitLabelEvent extends Message<_GitLabelEvent> {
  declare repos: string[];
  declare labelName: string;
  declare onAdded: boolean;
  declare onRemoved: boolean;
  declare pullRequests: boolean;
  declare issues: boolean;
  constructor(data?: PartialMessage<_GitLabelEvent>) {
    super();
    this.repos = [];
    this.labelName = "";
    this.onAdded = false;
    this.onRemoved = false;
    this.pullRequests = false;
    this.issues = false;
    proto3.util.initPartial(data, this as _GitLabelEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitLabelEvent {
    return new _GitLabelEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitLabelEvent {
    return new _GitLabelEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitLabelEvent {
    return new _GitLabelEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitLabelEvent | PlainMessage<_GitLabelEvent> | undefined | null, b2: _GitLabelEvent | PlainMessage<_GitLabelEvent> | undefined | null): boolean {
    return proto3.util.equals(_GitLabelEvent as unknown as MessageType<_GitLabelEvent>, a, b2);
  }
})();
export type GitLabelEvent = InstanceType<typeof GitLabelEvent$Runtime>;
var GitLabelEvent: MessageType<GitLabelEvent> = GitLabelEvent$Runtime as unknown as MessageType<GitLabelEvent>;
(GitLabelEvent as MutableMessageType<GitLabelEvent>).runtime = proto3;
(GitLabelEvent as MutableMessageType<GitLabelEvent>).typeName = "aiserver.v1.GitLabelEvent";
(GitLabelEvent as MutableMessageType<GitLabelEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "repos", kind: "scalar", T: 9, repeated: true },
  {
    no: 2,
    name: "label_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "on_added",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "on_removed",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "pull_requests",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "issues",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SlackTrigger$Runtime = (() => class _SlackTrigger extends Message<_SlackTrigger> {
  declare channel: string;
  declare messageContains: string;
  declare messageContainsIsRegex: boolean;
  declare channels: string[];
  declare blockUnauthenticatedSlackUsers: boolean;
  declare slackCompletionReactionMode?: SlackCompletionReactionMode;
  declare slackCompletionReactionCustomEmoji?: string;
  declare topLevelOnly?: boolean;
  constructor(data?: PartialMessage<_SlackTrigger>) {
    super();
    this.channel = "";
    this.messageContains = "";
    this.messageContainsIsRegex = false;
    this.channels = [];
    this.blockUnauthenticatedSlackUsers = false;
    proto3.util.initPartial(data, this as _SlackTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackTrigger {
    return new _SlackTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackTrigger {
    return new _SlackTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackTrigger {
    return new _SlackTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackTrigger | PlainMessage<_SlackTrigger> | undefined | null, b2: _SlackTrigger | PlainMessage<_SlackTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SlackTrigger as unknown as MessageType<_SlackTrigger>, a, b2);
  }
})();
export type SlackTrigger = InstanceType<typeof SlackTrigger$Runtime>;
var SlackTrigger: MessageType<SlackTrigger> = SlackTrigger$Runtime as unknown as MessageType<SlackTrigger>;
(SlackTrigger as MutableMessageType<SlackTrigger>).runtime = proto3;
(SlackTrigger as MutableMessageType<SlackTrigger>).typeName = "aiserver.v1.SlackTrigger";
(SlackTrigger as MutableMessageType<SlackTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message_contains_is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "channels", kind: "scalar", T: 9, repeated: true },
  {
    no: 6,
    name: "block_unauthenticated_slack_users",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "slack_completion_reaction_mode", kind: "enum", T: proto3.getEnumType(SlackCompletionReactionMode), opt: true },
  { no: 8, name: "slack_completion_reaction_custom_emoji", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "top_level_only", kind: "scalar", T: 8, opt: true }
]);
var SlackChannelCreatedTrigger$Runtime = (() => class _SlackChannelCreatedTrigger extends Message<_SlackChannelCreatedTrigger> {
  declare channelNameContains: string;
  constructor(data?: PartialMessage<_SlackChannelCreatedTrigger>) {
    super();
    this.channelNameContains = "";
    proto3.util.initPartial(data, this as _SlackChannelCreatedTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackChannelCreatedTrigger {
    return new _SlackChannelCreatedTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedTrigger {
    return new _SlackChannelCreatedTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedTrigger {
    return new _SlackChannelCreatedTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackChannelCreatedTrigger | PlainMessage<_SlackChannelCreatedTrigger> | undefined | null, b2: _SlackChannelCreatedTrigger | PlainMessage<_SlackChannelCreatedTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SlackChannelCreatedTrigger as unknown as MessageType<_SlackChannelCreatedTrigger>, a, b2);
  }
})();
export type SlackChannelCreatedTrigger = InstanceType<typeof SlackChannelCreatedTrigger$Runtime>;
var SlackChannelCreatedTrigger: MessageType<SlackChannelCreatedTrigger> = SlackChannelCreatedTrigger$Runtime as unknown as MessageType<SlackChannelCreatedTrigger>;
(SlackChannelCreatedTrigger as MutableMessageType<SlackChannelCreatedTrigger>).runtime = proto3;
(SlackChannelCreatedTrigger as MutableMessageType<SlackChannelCreatedTrigger>).typeName = "aiserver.v1.SlackChannelCreatedTrigger";
(SlackChannelCreatedTrigger as MutableMessageType<SlackChannelCreatedTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel_name_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackReactionAddedTrigger$Runtime = (() => class _SlackReactionAddedTrigger extends Message<_SlackReactionAddedTrigger> {
  declare channel: string;
  declare emojiName: string;
  declare channels: string[];
  declare blockUnauthenticatedSlackUsers: boolean;
  declare onlyOwnerReactions: boolean;
  constructor(data?: PartialMessage<_SlackReactionAddedTrigger>) {
    super();
    this.channel = "";
    this.emojiName = "";
    this.channels = [];
    this.blockUnauthenticatedSlackUsers = false;
    this.onlyOwnerReactions = false;
    proto3.util.initPartial(data, this as _SlackReactionAddedTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackReactionAddedTrigger {
    return new _SlackReactionAddedTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackReactionAddedTrigger {
    return new _SlackReactionAddedTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackReactionAddedTrigger {
    return new _SlackReactionAddedTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackReactionAddedTrigger | PlainMessage<_SlackReactionAddedTrigger> | undefined | null, b2: _SlackReactionAddedTrigger | PlainMessage<_SlackReactionAddedTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SlackReactionAddedTrigger as unknown as MessageType<_SlackReactionAddedTrigger>, a, b2);
  }
})();
export type SlackReactionAddedTrigger = InstanceType<typeof SlackReactionAddedTrigger$Runtime>;
var SlackReactionAddedTrigger: MessageType<SlackReactionAddedTrigger> = SlackReactionAddedTrigger$Runtime as unknown as MessageType<SlackReactionAddedTrigger>;
(SlackReactionAddedTrigger as MutableMessageType<SlackReactionAddedTrigger>).runtime = proto3;
(SlackReactionAddedTrigger as MutableMessageType<SlackReactionAddedTrigger>).typeName = "aiserver.v1.SlackReactionAddedTrigger";
(SlackReactionAddedTrigger as MutableMessageType<SlackReactionAddedTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "emoji_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "channels", kind: "scalar", T: 9, repeated: true },
  {
    no: 6,
    name: "block_unauthenticated_slack_users",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 9,
    name: "only_owner_reactions",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SlackMentionTrigger$Runtime = (() => class _SlackMentionTrigger extends Message<_SlackMentionTrigger> {
  declare channel: string;
  declare channels: string[];
  declare blockUnauthenticatedSlackUsers: boolean;
  constructor(data?: PartialMessage<_SlackMentionTrigger>) {
    super();
    this.channel = "";
    this.channels = [];
    this.blockUnauthenticatedSlackUsers = false;
    proto3.util.initPartial(data, this as _SlackMentionTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackMentionTrigger {
    return new _SlackMentionTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackMentionTrigger {
    return new _SlackMentionTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackMentionTrigger {
    return new _SlackMentionTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackMentionTrigger | PlainMessage<_SlackMentionTrigger> | undefined | null, b2: _SlackMentionTrigger | PlainMessage<_SlackMentionTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SlackMentionTrigger as unknown as MessageType<_SlackMentionTrigger>, a, b2);
  }
})();
export type SlackMentionTrigger = InstanceType<typeof SlackMentionTrigger$Runtime>;
var SlackMentionTrigger: MessageType<SlackMentionTrigger> = SlackMentionTrigger$Runtime as unknown as MessageType<SlackMentionTrigger>;
(SlackMentionTrigger as MutableMessageType<SlackMentionTrigger>).runtime = proto3;
(SlackMentionTrigger as MutableMessageType<SlackMentionTrigger>).typeName = "aiserver.v1.SlackMentionTrigger";
(SlackMentionTrigger as MutableMessageType<SlackMentionTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channels", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "block_unauthenticated_slack_users",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var SlackAnyReactionAddedTrigger$Runtime = (() => class _SlackAnyReactionAddedTrigger extends Message<_SlackAnyReactionAddedTrigger> {
  declare channel: string;
  declare channels: string[];
  declare blockUnauthenticatedSlackUsers: boolean;
  declare onlyOwnerReactions: boolean;
  constructor(data?: PartialMessage<_SlackAnyReactionAddedTrigger>) {
    super();
    this.channel = "";
    this.channels = [];
    this.blockUnauthenticatedSlackUsers = false;
    this.onlyOwnerReactions = false;
    proto3.util.initPartial(data, this as _SlackAnyReactionAddedTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackAnyReactionAddedTrigger {
    return new _SlackAnyReactionAddedTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackAnyReactionAddedTrigger {
    return new _SlackAnyReactionAddedTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackAnyReactionAddedTrigger {
    return new _SlackAnyReactionAddedTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackAnyReactionAddedTrigger | PlainMessage<_SlackAnyReactionAddedTrigger> | undefined | null, b2: _SlackAnyReactionAddedTrigger | PlainMessage<_SlackAnyReactionAddedTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SlackAnyReactionAddedTrigger as unknown as MessageType<_SlackAnyReactionAddedTrigger>, a, b2);
  }
})();
export type SlackAnyReactionAddedTrigger = InstanceType<typeof SlackAnyReactionAddedTrigger$Runtime>;
var SlackAnyReactionAddedTrigger: MessageType<SlackAnyReactionAddedTrigger> = SlackAnyReactionAddedTrigger$Runtime as unknown as MessageType<SlackAnyReactionAddedTrigger>;
(SlackAnyReactionAddedTrigger as MutableMessageType<SlackAnyReactionAddedTrigger>).runtime = proto3;
(SlackAnyReactionAddedTrigger as MutableMessageType<SlackAnyReactionAddedTrigger>).typeName = "aiserver.v1.SlackAnyReactionAddedTrigger";
(SlackAnyReactionAddedTrigger as MutableMessageType<SlackAnyReactionAddedTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "channels", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "block_unauthenticated_slack_users",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "only_owner_reactions",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var LinearTrigger$Runtime = (() => class _LinearTrigger extends Message<_LinearTrigger> {
  declare projectIds: string[];
  declare teamIds: string[];
  declare event: { case: "issueCreated"; value: LinearIssueCreatedEvent } | { case: "statusChanged"; value: LinearStatusChangedEvent } | { case: "endOfCycle"; value: LinearEndOfCycleEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_LinearTrigger>) {
    super();
    this.event = { case: void 0 };
    this.projectIds = [];
    this.teamIds = [];
    proto3.util.initPartial(data, this as _LinearTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearTrigger {
    return new _LinearTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearTrigger {
    return new _LinearTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearTrigger {
    return new _LinearTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearTrigger | PlainMessage<_LinearTrigger> | undefined | null, b2: _LinearTrigger | PlainMessage<_LinearTrigger> | undefined | null): boolean {
    return proto3.util.equals(_LinearTrigger as unknown as MessageType<_LinearTrigger>, a, b2);
  }
})();
export type LinearTrigger = InstanceType<typeof LinearTrigger$Runtime>;
var LinearTrigger: MessageType<LinearTrigger> = LinearTrigger$Runtime as unknown as MessageType<LinearTrigger>;
(LinearTrigger as MutableMessageType<LinearTrigger>).runtime = proto3;
(LinearTrigger as MutableMessageType<LinearTrigger>).typeName = "aiserver.v1.LinearTrigger";
(LinearTrigger as MutableMessageType<LinearTrigger>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "issue_created", kind: "message", T: LinearIssueCreatedEvent, oneof: "event" },
  { no: 2, name: "status_changed", kind: "message", T: LinearStatusChangedEvent, oneof: "event" },
  { no: 3, name: "end_of_cycle", kind: "message", T: LinearEndOfCycleEvent, oneof: "event" },
  { no: 4, name: "project_ids", kind: "scalar", T: 9, repeated: true },
  { no: 6, name: "team_ids", kind: "scalar", T: 9, repeated: true }
]);
var LinearIssueCreatedEvent$Runtime = (() => class _LinearIssueCreatedEvent extends Message<_LinearIssueCreatedEvent> {
  constructor(data?: PartialMessage<_LinearIssueCreatedEvent>) {
    super();
    proto3.util.initPartial(data, this as _LinearIssueCreatedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearIssueCreatedEvent {
    return new _LinearIssueCreatedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearIssueCreatedEvent {
    return new _LinearIssueCreatedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearIssueCreatedEvent {
    return new _LinearIssueCreatedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearIssueCreatedEvent | PlainMessage<_LinearIssueCreatedEvent> | undefined | null, b2: _LinearIssueCreatedEvent | PlainMessage<_LinearIssueCreatedEvent> | undefined | null): boolean {
    return proto3.util.equals(_LinearIssueCreatedEvent as unknown as MessageType<_LinearIssueCreatedEvent>, a, b2);
  }
})();
export type LinearIssueCreatedEvent = InstanceType<typeof LinearIssueCreatedEvent$Runtime>;
var LinearIssueCreatedEvent: MessageType<LinearIssueCreatedEvent> = LinearIssueCreatedEvent$Runtime as unknown as MessageType<LinearIssueCreatedEvent>;
(LinearIssueCreatedEvent as MutableMessageType<LinearIssueCreatedEvent>).runtime = proto3;
(LinearIssueCreatedEvent as MutableMessageType<LinearIssueCreatedEvent>).typeName = "aiserver.v1.LinearIssueCreatedEvent";
(LinearIssueCreatedEvent as MutableMessageType<LinearIssueCreatedEvent>).fields = proto3.util.newFieldList(() => []);
var LinearStatusChangedEvent$Runtime = (() => class _LinearStatusChangedEvent extends Message<_LinearStatusChangedEvent> {
  declare statusIds: string[];
  constructor(data?: PartialMessage<_LinearStatusChangedEvent>) {
    super();
    this.statusIds = [];
    proto3.util.initPartial(data, this as _LinearStatusChangedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearStatusChangedEvent {
    return new _LinearStatusChangedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearStatusChangedEvent {
    return new _LinearStatusChangedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearStatusChangedEvent {
    return new _LinearStatusChangedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearStatusChangedEvent | PlainMessage<_LinearStatusChangedEvent> | undefined | null, b2: _LinearStatusChangedEvent | PlainMessage<_LinearStatusChangedEvent> | undefined | null): boolean {
    return proto3.util.equals(_LinearStatusChangedEvent as unknown as MessageType<_LinearStatusChangedEvent>, a, b2);
  }
})();
export type LinearStatusChangedEvent = InstanceType<typeof LinearStatusChangedEvent$Runtime>;
var LinearStatusChangedEvent: MessageType<LinearStatusChangedEvent> = LinearStatusChangedEvent$Runtime as unknown as MessageType<LinearStatusChangedEvent>;
(LinearStatusChangedEvent as MutableMessageType<LinearStatusChangedEvent>).runtime = proto3;
(LinearStatusChangedEvent as MutableMessageType<LinearStatusChangedEvent>).typeName = "aiserver.v1.LinearStatusChangedEvent";
(LinearStatusChangedEvent as MutableMessageType<LinearStatusChangedEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "status_ids", kind: "scalar", T: 9, repeated: true }
]);
var LinearEndOfCycleEvent$Runtime = (() => class _LinearEndOfCycleEvent extends Message<_LinearEndOfCycleEvent> {
  declare cycleIds: string[];
  constructor(data?: PartialMessage<_LinearEndOfCycleEvent>) {
    super();
    this.cycleIds = [];
    proto3.util.initPartial(data, this as _LinearEndOfCycleEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearEndOfCycleEvent {
    return new _LinearEndOfCycleEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearEndOfCycleEvent {
    return new _LinearEndOfCycleEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearEndOfCycleEvent {
    return new _LinearEndOfCycleEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearEndOfCycleEvent | PlainMessage<_LinearEndOfCycleEvent> | undefined | null, b2: _LinearEndOfCycleEvent | PlainMessage<_LinearEndOfCycleEvent> | undefined | null): boolean {
    return proto3.util.equals(_LinearEndOfCycleEvent as unknown as MessageType<_LinearEndOfCycleEvent>, a, b2);
  }
})();
export type LinearEndOfCycleEvent = InstanceType<typeof LinearEndOfCycleEvent$Runtime>;
var LinearEndOfCycleEvent: MessageType<LinearEndOfCycleEvent> = LinearEndOfCycleEvent$Runtime as unknown as MessageType<LinearEndOfCycleEvent>;
(LinearEndOfCycleEvent as MutableMessageType<LinearEndOfCycleEvent>).runtime = proto3;
(LinearEndOfCycleEvent as MutableMessageType<LinearEndOfCycleEvent>).typeName = "aiserver.v1.LinearEndOfCycleEvent";
(LinearEndOfCycleEvent as MutableMessageType<LinearEndOfCycleEvent>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "cycle_ids", kind: "scalar", T: 9, repeated: true }
]);
var WebhookTrigger$Runtime = (() => class _WebhookTrigger extends Message<_WebhookTrigger> {
  constructor(data?: PartialMessage<_WebhookTrigger>) {
    super();
    proto3.util.initPartial(data, this as _WebhookTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WebhookTrigger {
    return new _WebhookTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WebhookTrigger {
    return new _WebhookTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WebhookTrigger {
    return new _WebhookTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _WebhookTrigger | PlainMessage<_WebhookTrigger> | undefined | null, b2: _WebhookTrigger | PlainMessage<_WebhookTrigger> | undefined | null): boolean {
    return proto3.util.equals(_WebhookTrigger as unknown as MessageType<_WebhookTrigger>, a, b2);
  }
})();
export type WebhookTrigger = InstanceType<typeof WebhookTrigger$Runtime>;
var WebhookTrigger: MessageType<WebhookTrigger> = WebhookTrigger$Runtime as unknown as MessageType<WebhookTrigger>;
(WebhookTrigger as MutableMessageType<WebhookTrigger>).runtime = proto3;
(WebhookTrigger as MutableMessageType<WebhookTrigger>).typeName = "aiserver.v1.WebhookTrigger";
(WebhookTrigger as MutableMessageType<WebhookTrigger>).fields = proto3.util.newFieldList(() => []);
var PagerDutyTrigger$Runtime = (() => class _PagerDutyTrigger extends Message<_PagerDutyTrigger> {
  declare serviceIds: string[];
  declare event: { case: "incidentTriggered"; value: PagerDutyIncidentTriggeredEvent } | { case: "incidentAcknowledged"; value: PagerDutyIncidentAcknowledgedEvent } | { case: "incidentResolved"; value: PagerDutyIncidentResolvedEvent } | { case: "incidentEscalated"; value: PagerDutyIncidentEscalatedEvent } | { case: "incidentAny"; value: PagerDutyIncidentAnyEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_PagerDutyTrigger>) {
    super();
    this.event = { case: void 0 };
    this.serviceIds = [];
    proto3.util.initPartial(data, this as _PagerDutyTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyTrigger {
    return new _PagerDutyTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyTrigger {
    return new _PagerDutyTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyTrigger {
    return new _PagerDutyTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyTrigger | PlainMessage<_PagerDutyTrigger> | undefined | null, b2: _PagerDutyTrigger | PlainMessage<_PagerDutyTrigger> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyTrigger as unknown as MessageType<_PagerDutyTrigger>, a, b2);
  }
})();
export type PagerDutyTrigger = InstanceType<typeof PagerDutyTrigger$Runtime>;
var PagerDutyTrigger: MessageType<PagerDutyTrigger> = PagerDutyTrigger$Runtime as unknown as MessageType<PagerDutyTrigger>;
(PagerDutyTrigger as MutableMessageType<PagerDutyTrigger>).runtime = proto3;
(PagerDutyTrigger as MutableMessageType<PagerDutyTrigger>).typeName = "aiserver.v1.PagerDutyTrigger";
(PagerDutyTrigger as MutableMessageType<PagerDutyTrigger>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "incident_triggered", kind: "message", T: PagerDutyIncidentTriggeredEvent, oneof: "event" },
  { no: 2, name: "incident_acknowledged", kind: "message", T: PagerDutyIncidentAcknowledgedEvent, oneof: "event" },
  { no: 3, name: "incident_resolved", kind: "message", T: PagerDutyIncidentResolvedEvent, oneof: "event" },
  { no: 4, name: "incident_escalated", kind: "message", T: PagerDutyIncidentEscalatedEvent, oneof: "event" },
  { no: 5, name: "incident_any", kind: "message", T: PagerDutyIncidentAnyEvent, oneof: "event" },
  { no: 6, name: "service_ids", kind: "scalar", T: 9, repeated: true }
]);
var PagerDutyIncidentTriggeredEvent$Runtime = (() => class _PagerDutyIncidentTriggeredEvent extends Message<_PagerDutyIncidentTriggeredEvent> {
  constructor(data?: PartialMessage<_PagerDutyIncidentTriggeredEvent>) {
    super();
    proto3.util.initPartial(data, this as _PagerDutyIncidentTriggeredEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyIncidentTriggeredEvent {
    return new _PagerDutyIncidentTriggeredEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentTriggeredEvent {
    return new _PagerDutyIncidentTriggeredEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentTriggeredEvent {
    return new _PagerDutyIncidentTriggeredEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyIncidentTriggeredEvent | PlainMessage<_PagerDutyIncidentTriggeredEvent> | undefined | null, b2: _PagerDutyIncidentTriggeredEvent | PlainMessage<_PagerDutyIncidentTriggeredEvent> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyIncidentTriggeredEvent as unknown as MessageType<_PagerDutyIncidentTriggeredEvent>, a, b2);
  }
})();
export type PagerDutyIncidentTriggeredEvent = InstanceType<typeof PagerDutyIncidentTriggeredEvent$Runtime>;
var PagerDutyIncidentTriggeredEvent: MessageType<PagerDutyIncidentTriggeredEvent> = PagerDutyIncidentTriggeredEvent$Runtime as unknown as MessageType<PagerDutyIncidentTriggeredEvent>;
(PagerDutyIncidentTriggeredEvent as MutableMessageType<PagerDutyIncidentTriggeredEvent>).runtime = proto3;
(PagerDutyIncidentTriggeredEvent as MutableMessageType<PagerDutyIncidentTriggeredEvent>).typeName = "aiserver.v1.PagerDutyIncidentTriggeredEvent";
(PagerDutyIncidentTriggeredEvent as MutableMessageType<PagerDutyIncidentTriggeredEvent>).fields = proto3.util.newFieldList(() => []);
var PagerDutyIncidentAcknowledgedEvent$Runtime = (() => class _PagerDutyIncidentAcknowledgedEvent extends Message<_PagerDutyIncidentAcknowledgedEvent> {
  constructor(data?: PartialMessage<_PagerDutyIncidentAcknowledgedEvent>) {
    super();
    proto3.util.initPartial(data, this as _PagerDutyIncidentAcknowledgedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyIncidentAcknowledgedEvent {
    return new _PagerDutyIncidentAcknowledgedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentAcknowledgedEvent {
    return new _PagerDutyIncidentAcknowledgedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentAcknowledgedEvent {
    return new _PagerDutyIncidentAcknowledgedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyIncidentAcknowledgedEvent | PlainMessage<_PagerDutyIncidentAcknowledgedEvent> | undefined | null, b2: _PagerDutyIncidentAcknowledgedEvent | PlainMessage<_PagerDutyIncidentAcknowledgedEvent> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyIncidentAcknowledgedEvent as unknown as MessageType<_PagerDutyIncidentAcknowledgedEvent>, a, b2);
  }
})();
export type PagerDutyIncidentAcknowledgedEvent = InstanceType<typeof PagerDutyIncidentAcknowledgedEvent$Runtime>;
var PagerDutyIncidentAcknowledgedEvent: MessageType<PagerDutyIncidentAcknowledgedEvent> = PagerDutyIncidentAcknowledgedEvent$Runtime as unknown as MessageType<PagerDutyIncidentAcknowledgedEvent>;
(PagerDutyIncidentAcknowledgedEvent as MutableMessageType<PagerDutyIncidentAcknowledgedEvent>).runtime = proto3;
(PagerDutyIncidentAcknowledgedEvent as MutableMessageType<PagerDutyIncidentAcknowledgedEvent>).typeName = "aiserver.v1.PagerDutyIncidentAcknowledgedEvent";
(PagerDutyIncidentAcknowledgedEvent as MutableMessageType<PagerDutyIncidentAcknowledgedEvent>).fields = proto3.util.newFieldList(() => []);
var PagerDutyIncidentResolvedEvent$Runtime = (() => class _PagerDutyIncidentResolvedEvent extends Message<_PagerDutyIncidentResolvedEvent> {
  constructor(data?: PartialMessage<_PagerDutyIncidentResolvedEvent>) {
    super();
    proto3.util.initPartial(data, this as _PagerDutyIncidentResolvedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyIncidentResolvedEvent {
    return new _PagerDutyIncidentResolvedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentResolvedEvent {
    return new _PagerDutyIncidentResolvedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentResolvedEvent {
    return new _PagerDutyIncidentResolvedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyIncidentResolvedEvent | PlainMessage<_PagerDutyIncidentResolvedEvent> | undefined | null, b2: _PagerDutyIncidentResolvedEvent | PlainMessage<_PagerDutyIncidentResolvedEvent> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyIncidentResolvedEvent as unknown as MessageType<_PagerDutyIncidentResolvedEvent>, a, b2);
  }
})();
export type PagerDutyIncidentResolvedEvent = InstanceType<typeof PagerDutyIncidentResolvedEvent$Runtime>;
var PagerDutyIncidentResolvedEvent: MessageType<PagerDutyIncidentResolvedEvent> = PagerDutyIncidentResolvedEvent$Runtime as unknown as MessageType<PagerDutyIncidentResolvedEvent>;
(PagerDutyIncidentResolvedEvent as MutableMessageType<PagerDutyIncidentResolvedEvent>).runtime = proto3;
(PagerDutyIncidentResolvedEvent as MutableMessageType<PagerDutyIncidentResolvedEvent>).typeName = "aiserver.v1.PagerDutyIncidentResolvedEvent";
(PagerDutyIncidentResolvedEvent as MutableMessageType<PagerDutyIncidentResolvedEvent>).fields = proto3.util.newFieldList(() => []);
var PagerDutyIncidentEscalatedEvent$Runtime = (() => class _PagerDutyIncidentEscalatedEvent extends Message<_PagerDutyIncidentEscalatedEvent> {
  constructor(data?: PartialMessage<_PagerDutyIncidentEscalatedEvent>) {
    super();
    proto3.util.initPartial(data, this as _PagerDutyIncidentEscalatedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyIncidentEscalatedEvent {
    return new _PagerDutyIncidentEscalatedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentEscalatedEvent {
    return new _PagerDutyIncidentEscalatedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentEscalatedEvent {
    return new _PagerDutyIncidentEscalatedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyIncidentEscalatedEvent | PlainMessage<_PagerDutyIncidentEscalatedEvent> | undefined | null, b2: _PagerDutyIncidentEscalatedEvent | PlainMessage<_PagerDutyIncidentEscalatedEvent> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyIncidentEscalatedEvent as unknown as MessageType<_PagerDutyIncidentEscalatedEvent>, a, b2);
  }
})();
export type PagerDutyIncidentEscalatedEvent = InstanceType<typeof PagerDutyIncidentEscalatedEvent$Runtime>;
var PagerDutyIncidentEscalatedEvent: MessageType<PagerDutyIncidentEscalatedEvent> = PagerDutyIncidentEscalatedEvent$Runtime as unknown as MessageType<PagerDutyIncidentEscalatedEvent>;
(PagerDutyIncidentEscalatedEvent as MutableMessageType<PagerDutyIncidentEscalatedEvent>).runtime = proto3;
(PagerDutyIncidentEscalatedEvent as MutableMessageType<PagerDutyIncidentEscalatedEvent>).typeName = "aiserver.v1.PagerDutyIncidentEscalatedEvent";
(PagerDutyIncidentEscalatedEvent as MutableMessageType<PagerDutyIncidentEscalatedEvent>).fields = proto3.util.newFieldList(() => []);
var PagerDutyIncidentAnyEvent$Runtime = (() => class _PagerDutyIncidentAnyEvent extends Message<_PagerDutyIncidentAnyEvent> {
  constructor(data?: PartialMessage<_PagerDutyIncidentAnyEvent>) {
    super();
    proto3.util.initPartial(data, this as _PagerDutyIncidentAnyEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyIncidentAnyEvent {
    return new _PagerDutyIncidentAnyEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentAnyEvent {
    return new _PagerDutyIncidentAnyEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyIncidentAnyEvent {
    return new _PagerDutyIncidentAnyEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyIncidentAnyEvent | PlainMessage<_PagerDutyIncidentAnyEvent> | undefined | null, b2: _PagerDutyIncidentAnyEvent | PlainMessage<_PagerDutyIncidentAnyEvent> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyIncidentAnyEvent as unknown as MessageType<_PagerDutyIncidentAnyEvent>, a, b2);
  }
})();
export type PagerDutyIncidentAnyEvent = InstanceType<typeof PagerDutyIncidentAnyEvent$Runtime>;
var PagerDutyIncidentAnyEvent: MessageType<PagerDutyIncidentAnyEvent> = PagerDutyIncidentAnyEvent$Runtime as unknown as MessageType<PagerDutyIncidentAnyEvent>;
(PagerDutyIncidentAnyEvent as MutableMessageType<PagerDutyIncidentAnyEvent>).runtime = proto3;
(PagerDutyIncidentAnyEvent as MutableMessageType<PagerDutyIncidentAnyEvent>).typeName = "aiserver.v1.PagerDutyIncidentAnyEvent";
(PagerDutyIncidentAnyEvent as MutableMessageType<PagerDutyIncidentAnyEvent>).fields = proto3.util.newFieldList(() => []);
var SentryTrigger$Runtime = (() => class _SentryTrigger extends Message<_SentryTrigger> {
  declare projectIds: string[];
  declare event: { case: "issueCreated"; value: SentryIssueCreatedEvent } | { case: "issueResolved"; value: SentryIssueResolvedEvent } | { case: "issueAssigned"; value: SentryIssueAssignedEvent } | { case: "issueArchived"; value: SentryIssueArchivedEvent } | { case: "issueUnresolved"; value: SentryIssueUnresolvedEvent } | { case: "issueAny"; value: SentryIssueAnyEvent } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_SentryTrigger>) {
    super();
    this.event = { case: void 0 };
    this.projectIds = [];
    proto3.util.initPartial(data, this as _SentryTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryTrigger {
    return new _SentryTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryTrigger {
    return new _SentryTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryTrigger {
    return new _SentryTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryTrigger | PlainMessage<_SentryTrigger> | undefined | null, b2: _SentryTrigger | PlainMessage<_SentryTrigger> | undefined | null): boolean {
    return proto3.util.equals(_SentryTrigger as unknown as MessageType<_SentryTrigger>, a, b2);
  }
})();
export type SentryTrigger = InstanceType<typeof SentryTrigger$Runtime>;
var SentryTrigger: MessageType<SentryTrigger> = SentryTrigger$Runtime as unknown as MessageType<SentryTrigger>;
(SentryTrigger as MutableMessageType<SentryTrigger>).runtime = proto3;
(SentryTrigger as MutableMessageType<SentryTrigger>).typeName = "aiserver.v1.SentryTrigger";
(SentryTrigger as MutableMessageType<SentryTrigger>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "issue_created", kind: "message", T: SentryIssueCreatedEvent, oneof: "event" },
  { no: 2, name: "issue_resolved", kind: "message", T: SentryIssueResolvedEvent, oneof: "event" },
  { no: 3, name: "issue_assigned", kind: "message", T: SentryIssueAssignedEvent, oneof: "event" },
  { no: 4, name: "issue_archived", kind: "message", T: SentryIssueArchivedEvent, oneof: "event" },
  { no: 5, name: "issue_unresolved", kind: "message", T: SentryIssueUnresolvedEvent, oneof: "event" },
  { no: 6, name: "issue_any", kind: "message", T: SentryIssueAnyEvent, oneof: "event" },
  { no: 7, name: "project_ids", kind: "scalar", T: 9, repeated: true }
]);
var SentryIssueCreatedEvent$Runtime = (() => class _SentryIssueCreatedEvent extends Message<_SentryIssueCreatedEvent> {
  constructor(data?: PartialMessage<_SentryIssueCreatedEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueCreatedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueCreatedEvent {
    return new _SentryIssueCreatedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueCreatedEvent {
    return new _SentryIssueCreatedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueCreatedEvent {
    return new _SentryIssueCreatedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueCreatedEvent | PlainMessage<_SentryIssueCreatedEvent> | undefined | null, b2: _SentryIssueCreatedEvent | PlainMessage<_SentryIssueCreatedEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueCreatedEvent as unknown as MessageType<_SentryIssueCreatedEvent>, a, b2);
  }
})();
export type SentryIssueCreatedEvent = InstanceType<typeof SentryIssueCreatedEvent$Runtime>;
var SentryIssueCreatedEvent: MessageType<SentryIssueCreatedEvent> = SentryIssueCreatedEvent$Runtime as unknown as MessageType<SentryIssueCreatedEvent>;
(SentryIssueCreatedEvent as MutableMessageType<SentryIssueCreatedEvent>).runtime = proto3;
(SentryIssueCreatedEvent as MutableMessageType<SentryIssueCreatedEvent>).typeName = "aiserver.v1.SentryIssueCreatedEvent";
(SentryIssueCreatedEvent as MutableMessageType<SentryIssueCreatedEvent>).fields = proto3.util.newFieldList(() => []);
var SentryIssueResolvedEvent$Runtime = (() => class _SentryIssueResolvedEvent extends Message<_SentryIssueResolvedEvent> {
  constructor(data?: PartialMessage<_SentryIssueResolvedEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueResolvedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueResolvedEvent {
    return new _SentryIssueResolvedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueResolvedEvent {
    return new _SentryIssueResolvedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueResolvedEvent {
    return new _SentryIssueResolvedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueResolvedEvent | PlainMessage<_SentryIssueResolvedEvent> | undefined | null, b2: _SentryIssueResolvedEvent | PlainMessage<_SentryIssueResolvedEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueResolvedEvent as unknown as MessageType<_SentryIssueResolvedEvent>, a, b2);
  }
})();
export type SentryIssueResolvedEvent = InstanceType<typeof SentryIssueResolvedEvent$Runtime>;
var SentryIssueResolvedEvent: MessageType<SentryIssueResolvedEvent> = SentryIssueResolvedEvent$Runtime as unknown as MessageType<SentryIssueResolvedEvent>;
(SentryIssueResolvedEvent as MutableMessageType<SentryIssueResolvedEvent>).runtime = proto3;
(SentryIssueResolvedEvent as MutableMessageType<SentryIssueResolvedEvent>).typeName = "aiserver.v1.SentryIssueResolvedEvent";
(SentryIssueResolvedEvent as MutableMessageType<SentryIssueResolvedEvent>).fields = proto3.util.newFieldList(() => []);
var SentryIssueAssignedEvent$Runtime = (() => class _SentryIssueAssignedEvent extends Message<_SentryIssueAssignedEvent> {
  constructor(data?: PartialMessage<_SentryIssueAssignedEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueAssignedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueAssignedEvent {
    return new _SentryIssueAssignedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueAssignedEvent {
    return new _SentryIssueAssignedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueAssignedEvent {
    return new _SentryIssueAssignedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueAssignedEvent | PlainMessage<_SentryIssueAssignedEvent> | undefined | null, b2: _SentryIssueAssignedEvent | PlainMessage<_SentryIssueAssignedEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueAssignedEvent as unknown as MessageType<_SentryIssueAssignedEvent>, a, b2);
  }
})();
export type SentryIssueAssignedEvent = InstanceType<typeof SentryIssueAssignedEvent$Runtime>;
var SentryIssueAssignedEvent: MessageType<SentryIssueAssignedEvent> = SentryIssueAssignedEvent$Runtime as unknown as MessageType<SentryIssueAssignedEvent>;
(SentryIssueAssignedEvent as MutableMessageType<SentryIssueAssignedEvent>).runtime = proto3;
(SentryIssueAssignedEvent as MutableMessageType<SentryIssueAssignedEvent>).typeName = "aiserver.v1.SentryIssueAssignedEvent";
(SentryIssueAssignedEvent as MutableMessageType<SentryIssueAssignedEvent>).fields = proto3.util.newFieldList(() => []);
var SentryIssueArchivedEvent$Runtime = (() => class _SentryIssueArchivedEvent extends Message<_SentryIssueArchivedEvent> {
  constructor(data?: PartialMessage<_SentryIssueArchivedEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueArchivedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueArchivedEvent {
    return new _SentryIssueArchivedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueArchivedEvent {
    return new _SentryIssueArchivedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueArchivedEvent {
    return new _SentryIssueArchivedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueArchivedEvent | PlainMessage<_SentryIssueArchivedEvent> | undefined | null, b2: _SentryIssueArchivedEvent | PlainMessage<_SentryIssueArchivedEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueArchivedEvent as unknown as MessageType<_SentryIssueArchivedEvent>, a, b2);
  }
})();
export type SentryIssueArchivedEvent = InstanceType<typeof SentryIssueArchivedEvent$Runtime>;
var SentryIssueArchivedEvent: MessageType<SentryIssueArchivedEvent> = SentryIssueArchivedEvent$Runtime as unknown as MessageType<SentryIssueArchivedEvent>;
(SentryIssueArchivedEvent as MutableMessageType<SentryIssueArchivedEvent>).runtime = proto3;
(SentryIssueArchivedEvent as MutableMessageType<SentryIssueArchivedEvent>).typeName = "aiserver.v1.SentryIssueArchivedEvent";
(SentryIssueArchivedEvent as MutableMessageType<SentryIssueArchivedEvent>).fields = proto3.util.newFieldList(() => []);
var SentryIssueUnresolvedEvent$Runtime = (() => class _SentryIssueUnresolvedEvent extends Message<_SentryIssueUnresolvedEvent> {
  constructor(data?: PartialMessage<_SentryIssueUnresolvedEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueUnresolvedEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueUnresolvedEvent {
    return new _SentryIssueUnresolvedEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueUnresolvedEvent {
    return new _SentryIssueUnresolvedEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueUnresolvedEvent {
    return new _SentryIssueUnresolvedEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueUnresolvedEvent | PlainMessage<_SentryIssueUnresolvedEvent> | undefined | null, b2: _SentryIssueUnresolvedEvent | PlainMessage<_SentryIssueUnresolvedEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueUnresolvedEvent as unknown as MessageType<_SentryIssueUnresolvedEvent>, a, b2);
  }
})();
export type SentryIssueUnresolvedEvent = InstanceType<typeof SentryIssueUnresolvedEvent$Runtime>;
var SentryIssueUnresolvedEvent: MessageType<SentryIssueUnresolvedEvent> = SentryIssueUnresolvedEvent$Runtime as unknown as MessageType<SentryIssueUnresolvedEvent>;
(SentryIssueUnresolvedEvent as MutableMessageType<SentryIssueUnresolvedEvent>).runtime = proto3;
(SentryIssueUnresolvedEvent as MutableMessageType<SentryIssueUnresolvedEvent>).typeName = "aiserver.v1.SentryIssueUnresolvedEvent";
(SentryIssueUnresolvedEvent as MutableMessageType<SentryIssueUnresolvedEvent>).fields = proto3.util.newFieldList(() => []);
var SentryIssueAnyEvent$Runtime = (() => class _SentryIssueAnyEvent extends Message<_SentryIssueAnyEvent> {
  constructor(data?: PartialMessage<_SentryIssueAnyEvent>) {
    super();
    proto3.util.initPartial(data, this as _SentryIssueAnyEvent);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryIssueAnyEvent {
    return new _SentryIssueAnyEvent().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryIssueAnyEvent {
    return new _SentryIssueAnyEvent().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryIssueAnyEvent {
    return new _SentryIssueAnyEvent().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryIssueAnyEvent | PlainMessage<_SentryIssueAnyEvent> | undefined | null, b2: _SentryIssueAnyEvent | PlainMessage<_SentryIssueAnyEvent> | undefined | null): boolean {
    return proto3.util.equals(_SentryIssueAnyEvent as unknown as MessageType<_SentryIssueAnyEvent>, a, b2);
  }
})();
export type SentryIssueAnyEvent = InstanceType<typeof SentryIssueAnyEvent$Runtime>;
var SentryIssueAnyEvent: MessageType<SentryIssueAnyEvent> = SentryIssueAnyEvent$Runtime as unknown as MessageType<SentryIssueAnyEvent>;
(SentryIssueAnyEvent as MutableMessageType<SentryIssueAnyEvent>).runtime = proto3;
(SentryIssueAnyEvent as MutableMessageType<SentryIssueAnyEvent>).typeName = "aiserver.v1.SentryIssueAnyEvent";
(SentryIssueAnyEvent as MutableMessageType<SentryIssueAnyEvent>).fields = proto3.util.newFieldList(() => []);
var MicrosoftTeamsTrigger$Runtime = (() => class _MicrosoftTeamsTrigger extends Message<_MicrosoftTeamsTrigger> {
  declare tenantId: string;
  declare teamId: string;
  declare teamIds: string[];
  declare channelIds: string[];
  declare messageContains: string;
  declare messageContainsIsRegex: boolean;
  declare blockUnauthenticatedTeamsUsers: boolean;
  constructor(data?: PartialMessage<_MicrosoftTeamsTrigger>) {
    super();
    this.tenantId = "";
    this.teamId = "";
    this.teamIds = [];
    this.channelIds = [];
    this.messageContains = "";
    this.messageContainsIsRegex = false;
    this.blockUnauthenticatedTeamsUsers = false;
    proto3.util.initPartial(data, this as _MicrosoftTeamsTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsTrigger {
    return new _MicrosoftTeamsTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsTrigger {
    return new _MicrosoftTeamsTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsTrigger {
    return new _MicrosoftTeamsTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsTrigger | PlainMessage<_MicrosoftTeamsTrigger> | undefined | null, b2: _MicrosoftTeamsTrigger | PlainMessage<_MicrosoftTeamsTrigger> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsTrigger as unknown as MessageType<_MicrosoftTeamsTrigger>, a, b2);
  }
})();
export type MicrosoftTeamsTrigger = InstanceType<typeof MicrosoftTeamsTrigger$Runtime>;
var MicrosoftTeamsTrigger: MessageType<MicrosoftTeamsTrigger> = MicrosoftTeamsTrigger$Runtime as unknown as MessageType<MicrosoftTeamsTrigger>;
(MicrosoftTeamsTrigger as MutableMessageType<MicrosoftTeamsTrigger>).runtime = proto3;
(MicrosoftTeamsTrigger as MutableMessageType<MicrosoftTeamsTrigger>).typeName = "aiserver.v1.MicrosoftTeamsTrigger";
(MicrosoftTeamsTrigger as MutableMessageType<MicrosoftTeamsTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "team_ids", kind: "scalar", T: 9, repeated: true },
  { no: 4, name: "channel_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 5,
    name: "message_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "message_contains_is_regex",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "block_unauthenticated_teams_users",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var MicrosoftTeamsChannelCreatedTrigger$Runtime = (() => class _MicrosoftTeamsChannelCreatedTrigger extends Message<_MicrosoftTeamsChannelCreatedTrigger> {
  declare tenantId: string;
  declare teamIds: string[];
  declare channelNameContains: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsChannelCreatedTrigger>) {
    super();
    this.tenantId = "";
    this.teamIds = [];
    this.channelNameContains = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsChannelCreatedTrigger);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsChannelCreatedTrigger {
    return new _MicrosoftTeamsChannelCreatedTrigger().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedTrigger {
    return new _MicrosoftTeamsChannelCreatedTrigger().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedTrigger {
    return new _MicrosoftTeamsChannelCreatedTrigger().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsChannelCreatedTrigger | PlainMessage<_MicrosoftTeamsChannelCreatedTrigger> | undefined | null, b2: _MicrosoftTeamsChannelCreatedTrigger | PlainMessage<_MicrosoftTeamsChannelCreatedTrigger> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsChannelCreatedTrigger as unknown as MessageType<_MicrosoftTeamsChannelCreatedTrigger>, a, b2);
  }
})();
export type MicrosoftTeamsChannelCreatedTrigger = InstanceType<typeof MicrosoftTeamsChannelCreatedTrigger$Runtime>;
var MicrosoftTeamsChannelCreatedTrigger: MessageType<MicrosoftTeamsChannelCreatedTrigger> = MicrosoftTeamsChannelCreatedTrigger$Runtime as unknown as MessageType<MicrosoftTeamsChannelCreatedTrigger>;
(MicrosoftTeamsChannelCreatedTrigger as MutableMessageType<MicrosoftTeamsChannelCreatedTrigger>).runtime = proto3;
(MicrosoftTeamsChannelCreatedTrigger as MutableMessageType<MicrosoftTeamsChannelCreatedTrigger>).typeName = "aiserver.v1.MicrosoftTeamsChannelCreatedTrigger";
(MicrosoftTeamsChannelCreatedTrigger as MutableMessageType<MicrosoftTeamsChannelCreatedTrigger>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "team_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 3,
    name: "channel_name_contains",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GitPrAction$Runtime = (() => class _GitPrAction extends Message<_GitPrAction> {
  constructor(data?: PartialMessage<_GitPrAction>) {
    super();
    proto3.util.initPartial(data, this as _GitPrAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPrAction {
    return new _GitPrAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPrAction {
    return new _GitPrAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPrAction {
    return new _GitPrAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPrAction | PlainMessage<_GitPrAction> | undefined | null, b2: _GitPrAction | PlainMessage<_GitPrAction> | undefined | null): boolean {
    return proto3.util.equals(_GitPrAction as unknown as MessageType<_GitPrAction>, a, b2);
  }
})();
export type GitPrAction = InstanceType<typeof GitPrAction$Runtime>;
var GitPrAction: MessageType<GitPrAction> = GitPrAction$Runtime as unknown as MessageType<GitPrAction>;
(GitPrAction as MutableMessageType<GitPrAction>).runtime = proto3;
(GitPrAction as MutableMessageType<GitPrAction>).typeName = "aiserver.v1.GitPrAction";
(GitPrAction as MutableMessageType<GitPrAction>).fields = proto3.util.newFieldList(() => []);
var PrCommentAction$Runtime = (() => class _PrCommentAction extends Message<_PrCommentAction> {
  declare minimizePreviousComments: boolean;
  declare allowInlineComments: boolean;
  declare resolveStaleThreads: boolean;
  declare allowApprove: boolean;
  constructor(data?: PartialMessage<_PrCommentAction>) {
    super();
    this.minimizePreviousComments = false;
    this.allowInlineComments = false;
    this.resolveStaleThreads = false;
    this.allowApprove = false;
    proto3.util.initPartial(data, this as _PrCommentAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PrCommentAction {
    return new _PrCommentAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PrCommentAction {
    return new _PrCommentAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PrCommentAction {
    return new _PrCommentAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _PrCommentAction | PlainMessage<_PrCommentAction> | undefined | null, b2: _PrCommentAction | PlainMessage<_PrCommentAction> | undefined | null): boolean {
    return proto3.util.equals(_PrCommentAction as unknown as MessageType<_PrCommentAction>, a, b2);
  }
})();
export type PrCommentAction = InstanceType<typeof PrCommentAction$Runtime>;
var PrCommentAction: MessageType<PrCommentAction> = PrCommentAction$Runtime as unknown as MessageType<PrCommentAction>;
(PrCommentAction as MutableMessageType<PrCommentAction>).runtime = proto3;
(PrCommentAction as MutableMessageType<PrCommentAction>).typeName = "aiserver.v1.PrCommentAction";
(PrCommentAction as MutableMessageType<PrCommentAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "minimize_previous_comments",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 2,
    name: "allow_inline_comments",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "resolve_stale_threads",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "allow_approve",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ManageCheckRunAction$Runtime = (() => class _ManageCheckRunAction extends Message<_ManageCheckRunAction> {
  declare deterministic: boolean;
  constructor(data?: PartialMessage<_ManageCheckRunAction>) {
    super();
    this.deterministic = false;
    proto3.util.initPartial(data, this as _ManageCheckRunAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ManageCheckRunAction {
    return new _ManageCheckRunAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ManageCheckRunAction {
    return new _ManageCheckRunAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ManageCheckRunAction {
    return new _ManageCheckRunAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ManageCheckRunAction | PlainMessage<_ManageCheckRunAction> | undefined | null, b2: _ManageCheckRunAction | PlainMessage<_ManageCheckRunAction> | undefined | null): boolean {
    return proto3.util.equals(_ManageCheckRunAction as unknown as MessageType<_ManageCheckRunAction>, a, b2);
  }
})();
export type ManageCheckRunAction = InstanceType<typeof ManageCheckRunAction$Runtime>;
var ManageCheckRunAction: MessageType<ManageCheckRunAction> = ManageCheckRunAction$Runtime as unknown as MessageType<ManageCheckRunAction>;
(ManageCheckRunAction as MutableMessageType<ManageCheckRunAction>).runtime = proto3;
(ManageCheckRunAction as MutableMessageType<ManageCheckRunAction>).typeName = "aiserver.v1.ManageCheckRunAction";
(ManageCheckRunAction as MutableMessageType<ManageCheckRunAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "deterministic",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var RequestReviewersAction$Runtime = (() => class _RequestReviewersAction extends Message<_RequestReviewersAction> {
  constructor(data?: PartialMessage<_RequestReviewersAction>) {
    super();
    proto3.util.initPartial(data, this as _RequestReviewersAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RequestReviewersAction {
    return new _RequestReviewersAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RequestReviewersAction {
    return new _RequestReviewersAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RequestReviewersAction {
    return new _RequestReviewersAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _RequestReviewersAction | PlainMessage<_RequestReviewersAction> | undefined | null, b2: _RequestReviewersAction | PlainMessage<_RequestReviewersAction> | undefined | null): boolean {
    return proto3.util.equals(_RequestReviewersAction as unknown as MessageType<_RequestReviewersAction>, a, b2);
  }
})();
export type RequestReviewersAction = InstanceType<typeof RequestReviewersAction$Runtime>;
var RequestReviewersAction: MessageType<RequestReviewersAction> = RequestReviewersAction$Runtime as unknown as MessageType<RequestReviewersAction>;
(RequestReviewersAction as MutableMessageType<RequestReviewersAction>).runtime = proto3;
(RequestReviewersAction as MutableMessageType<RequestReviewersAction>).typeName = "aiserver.v1.RequestReviewersAction";
(RequestReviewersAction as MutableMessageType<RequestReviewersAction>).fields = proto3.util.newFieldList(() => []);
var ApprovePrAction$Runtime = (() => class _ApprovePrAction extends Message<_ApprovePrAction> {
  constructor(data?: PartialMessage<_ApprovePrAction>) {
    super();
    proto3.util.initPartial(data, this as _ApprovePrAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ApprovePrAction {
    return new _ApprovePrAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ApprovePrAction {
    return new _ApprovePrAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ApprovePrAction {
    return new _ApprovePrAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ApprovePrAction | PlainMessage<_ApprovePrAction> | undefined | null, b2: _ApprovePrAction | PlainMessage<_ApprovePrAction> | undefined | null): boolean {
    return proto3.util.equals(_ApprovePrAction as unknown as MessageType<_ApprovePrAction>, a, b2);
  }
})();
export type ApprovePrAction = InstanceType<typeof ApprovePrAction$Runtime>;
var ApprovePrAction: MessageType<ApprovePrAction> = ApprovePrAction$Runtime as unknown as MessageType<ApprovePrAction>;
(ApprovePrAction as MutableMessageType<ApprovePrAction>).runtime = proto3;
(ApprovePrAction as MutableMessageType<ApprovePrAction>).typeName = "aiserver.v1.ApprovePrAction";
(ApprovePrAction as MutableMessageType<ApprovePrAction>).fields = proto3.util.newFieldList(() => []);
var ReadSlackAction$Runtime = (() => class _ReadSlackAction extends Message<_ReadSlackAction> {
  constructor(data?: PartialMessage<_ReadSlackAction>) {
    super();
    proto3.util.initPartial(data, this as _ReadSlackAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadSlackAction {
    return new _ReadSlackAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadSlackAction {
    return new _ReadSlackAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadSlackAction {
    return new _ReadSlackAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadSlackAction | PlainMessage<_ReadSlackAction> | undefined | null, b2: _ReadSlackAction | PlainMessage<_ReadSlackAction> | undefined | null): boolean {
    return proto3.util.equals(_ReadSlackAction as unknown as MessageType<_ReadSlackAction>, a, b2);
  }
})();
export type ReadSlackAction = InstanceType<typeof ReadSlackAction$Runtime>;
var ReadSlackAction: MessageType<ReadSlackAction> = ReadSlackAction$Runtime as unknown as MessageType<ReadSlackAction>;
(ReadSlackAction as MutableMessageType<ReadSlackAction>).runtime = proto3;
(ReadSlackAction as MutableMessageType<ReadSlackAction>).typeName = "aiserver.v1.ReadSlackAction";
(ReadSlackAction as MutableMessageType<ReadSlackAction>).fields = proto3.util.newFieldList(() => []);
var ResolveReviewThreadsAction$Runtime = (() => class _ResolveReviewThreadsAction extends Message<_ResolveReviewThreadsAction> {
  constructor(data?: PartialMessage<_ResolveReviewThreadsAction>) {
    super();
    proto3.util.initPartial(data, this as _ResolveReviewThreadsAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ResolveReviewThreadsAction {
    return new _ResolveReviewThreadsAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ResolveReviewThreadsAction {
    return new _ResolveReviewThreadsAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ResolveReviewThreadsAction {
    return new _ResolveReviewThreadsAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ResolveReviewThreadsAction | PlainMessage<_ResolveReviewThreadsAction> | undefined | null, b2: _ResolveReviewThreadsAction | PlainMessage<_ResolveReviewThreadsAction> | undefined | null): boolean {
    return proto3.util.equals(_ResolveReviewThreadsAction as unknown as MessageType<_ResolveReviewThreadsAction>, a, b2);
  }
})();
export type ResolveReviewThreadsAction = InstanceType<typeof ResolveReviewThreadsAction$Runtime>;
var ResolveReviewThreadsAction: MessageType<ResolveReviewThreadsAction> = ResolveReviewThreadsAction$Runtime as unknown as MessageType<ResolveReviewThreadsAction>;
(ResolveReviewThreadsAction as MutableMessageType<ResolveReviewThreadsAction>).runtime = proto3;
(ResolveReviewThreadsAction as MutableMessageType<ResolveReviewThreadsAction>).typeName = "aiserver.v1.ResolveReviewThreadsAction";
(ResolveReviewThreadsAction as MutableMessageType<ResolveReviewThreadsAction>).fields = proto3.util.newFieldList(() => []);
var SlackAction$Runtime = (() => class _SlackAction extends Message<_SlackAction> {
  declare channel: string;
  declare generalized: boolean;
  declare respondInThread: boolean;
  declare postAsThread: boolean;
  declare channels: string[];
  constructor(data?: PartialMessage<_SlackAction>) {
    super();
    this.channel = "";
    this.generalized = false;
    this.respondInThread = false;
    this.postAsThread = false;
    this.channels = [];
    proto3.util.initPartial(data, this as _SlackAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackAction {
    return new _SlackAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackAction {
    return new _SlackAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackAction {
    return new _SlackAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackAction | PlainMessage<_SlackAction> | undefined | null, b2: _SlackAction | PlainMessage<_SlackAction> | undefined | null): boolean {
    return proto3.util.equals(_SlackAction as unknown as MessageType<_SlackAction>, a, b2);
  }
})();
export type SlackAction = InstanceType<typeof SlackAction$Runtime>;
var SlackAction: MessageType<SlackAction> = SlackAction$Runtime as unknown as MessageType<SlackAction>;
(SlackAction as MutableMessageType<SlackAction>).runtime = proto3;
(SlackAction as MutableMessageType<SlackAction>).typeName = "aiserver.v1.SlackAction";
(SlackAction as MutableMessageType<SlackAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "generalized",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "respond_in_thread",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "post_as_thread",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 5, name: "channels", kind: "scalar", T: 9, repeated: true }
]);
var MicrosoftTeamsAction$Runtime = (() => class _MicrosoftTeamsAction extends Message<_MicrosoftTeamsAction> {
  declare tenantId: string;
  declare teamId: string;
  declare channelId: string;
  declare channelIds: string[];
  declare generalized: boolean;
  declare respondInThread: boolean;
  declare postAsThread: boolean;
  constructor(data?: PartialMessage<_MicrosoftTeamsAction>) {
    super();
    this.tenantId = "";
    this.teamId = "";
    this.channelId = "";
    this.channelIds = [];
    this.generalized = false;
    this.respondInThread = false;
    this.postAsThread = false;
    proto3.util.initPartial(data, this as _MicrosoftTeamsAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsAction {
    return new _MicrosoftTeamsAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsAction {
    return new _MicrosoftTeamsAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsAction {
    return new _MicrosoftTeamsAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsAction | PlainMessage<_MicrosoftTeamsAction> | undefined | null, b2: _MicrosoftTeamsAction | PlainMessage<_MicrosoftTeamsAction> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsAction as unknown as MessageType<_MicrosoftTeamsAction>, a, b2);
  }
})();
export type MicrosoftTeamsAction = InstanceType<typeof MicrosoftTeamsAction$Runtime>;
var MicrosoftTeamsAction: MessageType<MicrosoftTeamsAction> = MicrosoftTeamsAction$Runtime as unknown as MessageType<MicrosoftTeamsAction>;
(MicrosoftTeamsAction as MutableMessageType<MicrosoftTeamsAction>).runtime = proto3;
(MicrosoftTeamsAction as MutableMessageType<MicrosoftTeamsAction>).typeName = "aiserver.v1.MicrosoftTeamsAction";
(MicrosoftTeamsAction as MutableMessageType<MicrosoftTeamsAction>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "channel_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "channel_ids", kind: "scalar", T: 9, repeated: true },
  {
    no: 5,
    name: "generalized",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "respond_in_thread",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "post_as_thread",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ReadMicrosoftTeamsAction$Runtime = (() => class _ReadMicrosoftTeamsAction extends Message<_ReadMicrosoftTeamsAction> {
  constructor(data?: PartialMessage<_ReadMicrosoftTeamsAction>) {
    super();
    proto3.util.initPartial(data, this as _ReadMicrosoftTeamsAction);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReadMicrosoftTeamsAction {
    return new _ReadMicrosoftTeamsAction().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReadMicrosoftTeamsAction {
    return new _ReadMicrosoftTeamsAction().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReadMicrosoftTeamsAction {
    return new _ReadMicrosoftTeamsAction().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReadMicrosoftTeamsAction | PlainMessage<_ReadMicrosoftTeamsAction> | undefined | null, b2: _ReadMicrosoftTeamsAction | PlainMessage<_ReadMicrosoftTeamsAction> | undefined | null): boolean {
    return proto3.util.equals(_ReadMicrosoftTeamsAction as unknown as MessageType<_ReadMicrosoftTeamsAction>, a, b2);
  }
})();
export type ReadMicrosoftTeamsAction = InstanceType<typeof ReadMicrosoftTeamsAction$Runtime>;
var ReadMicrosoftTeamsAction: MessageType<ReadMicrosoftTeamsAction> = ReadMicrosoftTeamsAction$Runtime as unknown as MessageType<ReadMicrosoftTeamsAction>;
(ReadMicrosoftTeamsAction as MutableMessageType<ReadMicrosoftTeamsAction>).runtime = proto3;
(ReadMicrosoftTeamsAction as MutableMessageType<ReadMicrosoftTeamsAction>).typeName = "aiserver.v1.ReadMicrosoftTeamsAction";
(ReadMicrosoftTeamsAction as MutableMessageType<ReadMicrosoftTeamsAction>).fields = proto3.util.newFieldList(() => []);
var PrCommentActionPayload$Runtime = (() => class _PrCommentActionPayload extends Message<_PrCommentActionPayload> {
  declare prNumber: number;
  declare repoUrl: string;
  declare headSha?: string;
  constructor(data?: PartialMessage<_PrCommentActionPayload>) {
    super();
    this.prNumber = 0;
    this.repoUrl = "";
    proto3.util.initPartial(data, this as _PrCommentActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PrCommentActionPayload {
    return new _PrCommentActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PrCommentActionPayload {
    return new _PrCommentActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PrCommentActionPayload {
    return new _PrCommentActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PrCommentActionPayload | PlainMessage<_PrCommentActionPayload> | undefined | null, b2: _PrCommentActionPayload | PlainMessage<_PrCommentActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_PrCommentActionPayload as unknown as MessageType<_PrCommentActionPayload>, a, b2);
  }
})();
export type PrCommentActionPayload = InstanceType<typeof PrCommentActionPayload$Runtime>;
var PrCommentActionPayload: MessageType<PrCommentActionPayload> = PrCommentActionPayload$Runtime as unknown as MessageType<PrCommentActionPayload>;
(PrCommentActionPayload as MutableMessageType<PrCommentActionPayload>).runtime = proto3;
(PrCommentActionPayload as MutableMessageType<PrCommentActionPayload>).typeName = "aiserver.v1.PrCommentActionPayload";
(PrCommentActionPayload as MutableMessageType<PrCommentActionPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "head_sha", kind: "scalar", T: 9, opt: true }
]);
var GitPrActionPayload$Runtime = (() => class _GitPrActionPayload extends Message<_GitPrActionPayload> {
  declare prUrl?: string;
  declare repoUrl: string;
  constructor(data?: PartialMessage<_GitPrActionPayload>) {
    super();
    this.repoUrl = "";
    proto3.util.initPartial(data, this as _GitPrActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GitPrActionPayload {
    return new _GitPrActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GitPrActionPayload {
    return new _GitPrActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GitPrActionPayload {
    return new _GitPrActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _GitPrActionPayload | PlainMessage<_GitPrActionPayload> | undefined | null, b2: _GitPrActionPayload | PlainMessage<_GitPrActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_GitPrActionPayload as unknown as MessageType<_GitPrActionPayload>, a, b2);
  }
})();
export type GitPrActionPayload = InstanceType<typeof GitPrActionPayload$Runtime>;
var GitPrActionPayload: MessageType<GitPrActionPayload> = GitPrActionPayload$Runtime as unknown as MessageType<GitPrActionPayload>;
(GitPrActionPayload as MutableMessageType<GitPrActionPayload>).runtime = proto3;
(GitPrActionPayload as MutableMessageType<GitPrActionPayload>).typeName = "aiserver.v1.GitPrActionPayload";
(GitPrActionPayload as MutableMessageType<GitPrActionPayload>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_url", kind: "scalar", T: 9, opt: true },
  {
    no: 2,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackActionPayload$Runtime = (() => class _SlackActionPayload extends Message<_SlackActionPayload> {
  declare channel: string;
  declare triggeringPrUrl?: string;
  declare replyThreadTs?: string;
  constructor(data?: PartialMessage<_SlackActionPayload>) {
    super();
    this.channel = "";
    proto3.util.initPartial(data, this as _SlackActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackActionPayload {
    return new _SlackActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackActionPayload {
    return new _SlackActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackActionPayload {
    return new _SlackActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackActionPayload | PlainMessage<_SlackActionPayload> | undefined | null, b2: _SlackActionPayload | PlainMessage<_SlackActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackActionPayload as unknown as MessageType<_SlackActionPayload>, a, b2);
  }
})();
export type SlackActionPayload = InstanceType<typeof SlackActionPayload$Runtime>;
var SlackActionPayload: MessageType<SlackActionPayload> = SlackActionPayload$Runtime as unknown as MessageType<SlackActionPayload>;
(SlackActionPayload as MutableMessageType<SlackActionPayload>).runtime = proto3;
(SlackActionPayload as MutableMessageType<SlackActionPayload>).typeName = "aiserver.v1.SlackActionPayload";
(SlackActionPayload as MutableMessageType<SlackActionPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "triggering_pr_url", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "reply_thread_ts", kind: "scalar", T: 9, opt: true }
]);
var ResolveReviewThreadsActionPayload$Runtime = (() => class _ResolveReviewThreadsActionPayload extends Message<_ResolveReviewThreadsActionPayload> {
  declare prNumber: number;
  declare repoUrl: string;
  constructor(data?: PartialMessage<_ResolveReviewThreadsActionPayload>) {
    super();
    this.prNumber = 0;
    this.repoUrl = "";
    proto3.util.initPartial(data, this as _ResolveReviewThreadsActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ResolveReviewThreadsActionPayload {
    return new _ResolveReviewThreadsActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ResolveReviewThreadsActionPayload {
    return new _ResolveReviewThreadsActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ResolveReviewThreadsActionPayload {
    return new _ResolveReviewThreadsActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _ResolveReviewThreadsActionPayload | PlainMessage<_ResolveReviewThreadsActionPayload> | undefined | null, b2: _ResolveReviewThreadsActionPayload | PlainMessage<_ResolveReviewThreadsActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_ResolveReviewThreadsActionPayload as unknown as MessageType<_ResolveReviewThreadsActionPayload>, a, b2);
  }
})();
export type ResolveReviewThreadsActionPayload = InstanceType<typeof ResolveReviewThreadsActionPayload$Runtime>;
var ResolveReviewThreadsActionPayload: MessageType<ResolveReviewThreadsActionPayload> = ResolveReviewThreadsActionPayload$Runtime as unknown as MessageType<ResolveReviewThreadsActionPayload>;
(ResolveReviewThreadsActionPayload as MutableMessageType<ResolveReviewThreadsActionPayload>).runtime = proto3;
(ResolveReviewThreadsActionPayload as MutableMessageType<ResolveReviewThreadsActionPayload>).typeName = "aiserver.v1.ResolveReviewThreadsActionPayload";
(ResolveReviewThreadsActionPayload as MutableMessageType<ResolveReviewThreadsActionPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MicrosoftTeamsActionPayload$Runtime = (() => class _MicrosoftTeamsActionPayload extends Message<_MicrosoftTeamsActionPayload> {
  declare tenantId: string;
  declare teamId: string;
  declare channelId: string;
  declare triggeringPrUrl?: string;
  declare replyRootMessageId?: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsActionPayload>) {
    super();
    this.tenantId = "";
    this.teamId = "";
    this.channelId = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsActionPayload {
    return new _MicrosoftTeamsActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsActionPayload {
    return new _MicrosoftTeamsActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsActionPayload {
    return new _MicrosoftTeamsActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsActionPayload | PlainMessage<_MicrosoftTeamsActionPayload> | undefined | null, b2: _MicrosoftTeamsActionPayload | PlainMessage<_MicrosoftTeamsActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsActionPayload as unknown as MessageType<_MicrosoftTeamsActionPayload>, a, b2);
  }
})();
export type MicrosoftTeamsActionPayload = InstanceType<typeof MicrosoftTeamsActionPayload$Runtime>;
var MicrosoftTeamsActionPayload: MessageType<MicrosoftTeamsActionPayload> = MicrosoftTeamsActionPayload$Runtime as unknown as MessageType<MicrosoftTeamsActionPayload>;
(MicrosoftTeamsActionPayload as MutableMessageType<MicrosoftTeamsActionPayload>).runtime = proto3;
(MicrosoftTeamsActionPayload as MutableMessageType<MicrosoftTeamsActionPayload>).typeName = "aiserver.v1.MicrosoftTeamsActionPayload";
(MicrosoftTeamsActionPayload as MutableMessageType<MicrosoftTeamsActionPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "channel_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "triggering_pr_url", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "reply_root_message_id", kind: "scalar", T: 9, opt: true }
]);
var ActionPayload$Runtime = (() => class _ActionPayload extends Message<_ActionPayload> {
  declare payload: { case: "prComment"; value: PrCommentActionPayload } | { case: "gitPr"; value: GitPrActionPayload } | { case: "slack"; value: SlackActionPayload } | { case: "resolveReviewThreads"; value: ResolveReviewThreadsActionPayload } | { case: "microsoftTeams"; value: MicrosoftTeamsActionPayload } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_ActionPayload>) {
    super();
    this.payload = { case: void 0 };
    proto3.util.initPartial(data, this as _ActionPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ActionPayload {
    return new _ActionPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ActionPayload {
    return new _ActionPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ActionPayload {
    return new _ActionPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _ActionPayload | PlainMessage<_ActionPayload> | undefined | null, b2: _ActionPayload | PlainMessage<_ActionPayload> | undefined | null): boolean {
    return proto3.util.equals(_ActionPayload as unknown as MessageType<_ActionPayload>, a, b2);
  }
})();
export type ActionPayload = InstanceType<typeof ActionPayload$Runtime>;
var ActionPayload: MessageType<ActionPayload> = ActionPayload$Runtime as unknown as MessageType<ActionPayload>;
(ActionPayload as MutableMessageType<ActionPayload>).runtime = proto3;
(ActionPayload as MutableMessageType<ActionPayload>).typeName = "aiserver.v1.ActionPayload";
(ActionPayload as MutableMessageType<ActionPayload>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "pr_comment", kind: "message", T: PrCommentActionPayload, oneof: "payload" },
  { no: 2, name: "git_pr", kind: "message", T: GitPrActionPayload, oneof: "payload" },
  { no: 3, name: "slack", kind: "message", T: SlackActionPayload, oneof: "payload" },
  { no: 4, name: "resolve_review_threads", kind: "message", T: ResolveReviewThreadsActionPayload, oneof: "payload" },
  { no: 5, name: "microsoft_teams", kind: "message", T: MicrosoftTeamsActionPayload, oneof: "payload" }
]);
var ActionsPayload$Runtime = (() => class _ActionsPayload extends Message<_ActionsPayload> {
  declare payloads: ActionPayload[];
  constructor(data?: PartialMessage<_ActionsPayload>) {
    super();
    this.payloads = [];
    proto3.util.initPartial(data, this as _ActionsPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ActionsPayload {
    return new _ActionsPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ActionsPayload {
    return new _ActionsPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ActionsPayload {
    return new _ActionsPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _ActionsPayload | PlainMessage<_ActionsPayload> | undefined | null, b2: _ActionsPayload | PlainMessage<_ActionsPayload> | undefined | null): boolean {
    return proto3.util.equals(_ActionsPayload as unknown as MessageType<_ActionsPayload>, a, b2);
  }
})();
export type ActionsPayload = InstanceType<typeof ActionsPayload$Runtime>;
var ActionsPayload: MessageType<ActionsPayload> = ActionsPayload$Runtime as unknown as MessageType<ActionsPayload>;
(ActionsPayload as MutableMessageType<ActionsPayload>).runtime = proto3;
(ActionsPayload as MutableMessageType<ActionsPayload>).typeName = "aiserver.v1.ActionsPayload";
(ActionsPayload as MutableMessageType<ActionsPayload>).fields = proto3.util.newFieldList(() => [
  { no: 4, name: "payloads", kind: "message", T: ActionPayload, repeated: true }
]);
var PlatformActionEntry$Runtime = (() => class _PlatformActionEntry extends Message<_PlatformActionEntry> {
  declare scope: PlatformActionScope;
  declare actionIndex: number;
  declare actionType: string;
  declare status: PlatformActionStatus;
  declare errorMessage: string;
  declare metadata: { [key: string]: string };
  declare timestamp: bigint;
  constructor(data?: PartialMessage<_PlatformActionEntry>) {
    super();
    this.scope = PlatformActionScope.UNSPECIFIED;
    this.actionIndex = 0;
    this.actionType = "";
    this.status = PlatformActionStatus.UNSPECIFIED;
    this.errorMessage = "";
    this.metadata = {};
    this.timestamp = protoInt64.zero;
    proto3.util.initPartial(data, this as _PlatformActionEntry);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PlatformActionEntry {
    return new _PlatformActionEntry().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PlatformActionEntry {
    return new _PlatformActionEntry().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PlatformActionEntry {
    return new _PlatformActionEntry().fromJsonString(jsonString, options2);
  }
  static equals(a: _PlatformActionEntry | PlainMessage<_PlatformActionEntry> | undefined | null, b2: _PlatformActionEntry | PlainMessage<_PlatformActionEntry> | undefined | null): boolean {
    return proto3.util.equals(_PlatformActionEntry as unknown as MessageType<_PlatformActionEntry>, a, b2);
  }
})();
export type PlatformActionEntry = InstanceType<typeof PlatformActionEntry$Runtime>;
var PlatformActionEntry: MessageType<PlatformActionEntry> = PlatformActionEntry$Runtime as unknown as MessageType<PlatformActionEntry>;
(PlatformActionEntry as MutableMessageType<PlatformActionEntry>).runtime = proto3;
(PlatformActionEntry as MutableMessageType<PlatformActionEntry>).typeName = "aiserver.v1.PlatformActionEntry";
(PlatformActionEntry as MutableMessageType<PlatformActionEntry>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "scope", kind: "enum", T: proto3.getEnumType(PlatformActionScope) },
  {
    no: 2,
    name: "action_index",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "action_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(PlatformActionStatus) },
  {
    no: 5,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } },
  {
    no: 8,
    name: "timestamp",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  }
]);
var PlatformActionsPayload$Runtime = (() => class _PlatformActionsPayload extends Message<_PlatformActionsPayload> {
  declare actions: PlatformActionEntry[];
  constructor(data?: PartialMessage<_PlatformActionsPayload>) {
    super();
    this.actions = [];
    proto3.util.initPartial(data, this as _PlatformActionsPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PlatformActionsPayload {
    return new _PlatformActionsPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PlatformActionsPayload {
    return new _PlatformActionsPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PlatformActionsPayload {
    return new _PlatformActionsPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PlatformActionsPayload | PlainMessage<_PlatformActionsPayload> | undefined | null, b2: _PlatformActionsPayload | PlainMessage<_PlatformActionsPayload> | undefined | null): boolean {
    return proto3.util.equals(_PlatformActionsPayload as unknown as MessageType<_PlatformActionsPayload>, a, b2);
  }
})();
export type PlatformActionsPayload = InstanceType<typeof PlatformActionsPayload$Runtime>;
var PlatformActionsPayload: MessageType<PlatformActionsPayload> = PlatformActionsPayload$Runtime as unknown as MessageType<PlatformActionsPayload>;
(PlatformActionsPayload as MutableMessageType<PlatformActionsPayload>).runtime = proto3;
(PlatformActionsPayload as MutableMessageType<PlatformActionsPayload>).typeName = "aiserver.v1.PlatformActionsPayload";
(PlatformActionsPayload as MutableMessageType<PlatformActionsPayload>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "actions", kind: "message", T: PlatformActionEntry, repeated: true }
]);
var SlackTriggerPayload$Runtime = (() => class _SlackTriggerPayload extends Message<_SlackTriggerPayload> {
  declare channel: string;
  declare messageText: string;
  declare userId: string;
  declare messageTs: string;
  declare threadTs?: string;
  constructor(data?: PartialMessage<_SlackTriggerPayload>) {
    super();
    this.channel = "";
    this.messageText = "";
    this.userId = "";
    this.messageTs = "";
    proto3.util.initPartial(data, this as _SlackTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackTriggerPayload {
    return new _SlackTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackTriggerPayload {
    return new _SlackTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackTriggerPayload {
    return new _SlackTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackTriggerPayload | PlainMessage<_SlackTriggerPayload> | undefined | null, b2: _SlackTriggerPayload | PlainMessage<_SlackTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackTriggerPayload as unknown as MessageType<_SlackTriggerPayload>, a, b2);
  }
})();
export type SlackTriggerPayload = InstanceType<typeof SlackTriggerPayload$Runtime>;
var SlackTriggerPayload: MessageType<SlackTriggerPayload> = SlackTriggerPayload$Runtime as unknown as MessageType<SlackTriggerPayload>;
(SlackTriggerPayload as MutableMessageType<SlackTriggerPayload>).runtime = proto3;
(SlackTriggerPayload as MutableMessageType<SlackTriggerPayload>).typeName = "aiserver.v1.SlackTriggerPayload";
(SlackTriggerPayload as MutableMessageType<SlackTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "user_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message_ts",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "thread_ts", kind: "scalar", T: 9, opt: true }
]);
var SlackChannelCreatedTriggerPayload$Runtime = (() => class _SlackChannelCreatedTriggerPayload extends Message<_SlackChannelCreatedTriggerPayload> {
  declare channelId: string;
  declare channelName: string;
  declare creatorId: string;
  constructor(data?: PartialMessage<_SlackChannelCreatedTriggerPayload>) {
    super();
    this.channelId = "";
    this.channelName = "";
    this.creatorId = "";
    proto3.util.initPartial(data, this as _SlackChannelCreatedTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackChannelCreatedTriggerPayload {
    return new _SlackChannelCreatedTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedTriggerPayload {
    return new _SlackChannelCreatedTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedTriggerPayload {
    return new _SlackChannelCreatedTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackChannelCreatedTriggerPayload | PlainMessage<_SlackChannelCreatedTriggerPayload> | undefined | null, b2: _SlackChannelCreatedTriggerPayload | PlainMessage<_SlackChannelCreatedTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackChannelCreatedTriggerPayload as unknown as MessageType<_SlackChannelCreatedTriggerPayload>, a, b2);
  }
})();
export type SlackChannelCreatedTriggerPayload = InstanceType<typeof SlackChannelCreatedTriggerPayload$Runtime>;
var SlackChannelCreatedTriggerPayload: MessageType<SlackChannelCreatedTriggerPayload> = SlackChannelCreatedTriggerPayload$Runtime as unknown as MessageType<SlackChannelCreatedTriggerPayload>;
(SlackChannelCreatedTriggerPayload as MutableMessageType<SlackChannelCreatedTriggerPayload>).runtime = proto3;
(SlackChannelCreatedTriggerPayload as MutableMessageType<SlackChannelCreatedTriggerPayload>).typeName = "aiserver.v1.SlackChannelCreatedTriggerPayload";
(SlackChannelCreatedTriggerPayload as MutableMessageType<SlackChannelCreatedTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "channel_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "creator_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackReactionAddedTriggerPayload$Runtime = (() => class _SlackReactionAddedTriggerPayload extends Message<_SlackReactionAddedTriggerPayload> {
  declare channel: string;
  declare messageText: string;
  declare userId: string;
  declare messageTs: string;
  declare threadTs?: string;
  declare emojiName: string;
  constructor(data?: PartialMessage<_SlackReactionAddedTriggerPayload>) {
    super();
    this.channel = "";
    this.messageText = "";
    this.userId = "";
    this.messageTs = "";
    this.emojiName = "";
    proto3.util.initPartial(data, this as _SlackReactionAddedTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackReactionAddedTriggerPayload {
    return new _SlackReactionAddedTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackReactionAddedTriggerPayload {
    return new _SlackReactionAddedTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackReactionAddedTriggerPayload {
    return new _SlackReactionAddedTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackReactionAddedTriggerPayload | PlainMessage<_SlackReactionAddedTriggerPayload> | undefined | null, b2: _SlackReactionAddedTriggerPayload | PlainMessage<_SlackReactionAddedTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackReactionAddedTriggerPayload as unknown as MessageType<_SlackReactionAddedTriggerPayload>, a, b2);
  }
})();
export type SlackReactionAddedTriggerPayload = InstanceType<typeof SlackReactionAddedTriggerPayload$Runtime>;
var SlackReactionAddedTriggerPayload: MessageType<SlackReactionAddedTriggerPayload> = SlackReactionAddedTriggerPayload$Runtime as unknown as MessageType<SlackReactionAddedTriggerPayload>;
(SlackReactionAddedTriggerPayload as MutableMessageType<SlackReactionAddedTriggerPayload>).runtime = proto3;
(SlackReactionAddedTriggerPayload as MutableMessageType<SlackReactionAddedTriggerPayload>).typeName = "aiserver.v1.SlackReactionAddedTriggerPayload";
(SlackReactionAddedTriggerPayload as MutableMessageType<SlackReactionAddedTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "message_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "user_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message_ts",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "thread_ts", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "emoji_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LinearTriggerPayload$Runtime = (() => class _LinearTriggerPayload extends Message<_LinearTriggerPayload> {
  declare issueId: string;
  declare issueIdentifier: string;
  declare projectId: string;
  declare teamId: string;
  declare event: { case: "issueCreated"; value: LinearIssueCreatedPayload } | { case: "statusChanged"; value: LinearStatusChangedPayload } | { case: "endOfCycle"; value: LinearEndOfCyclePayload } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_LinearTriggerPayload>) {
    super();
    this.issueId = "";
    this.issueIdentifier = "";
    this.projectId = "";
    this.teamId = "";
    this.event = { case: void 0 };
    proto3.util.initPartial(data, this as _LinearTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearTriggerPayload {
    return new _LinearTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearTriggerPayload {
    return new _LinearTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearTriggerPayload {
    return new _LinearTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearTriggerPayload | PlainMessage<_LinearTriggerPayload> | undefined | null, b2: _LinearTriggerPayload | PlainMessage<_LinearTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_LinearTriggerPayload as unknown as MessageType<_LinearTriggerPayload>, a, b2);
  }
})();
export type LinearTriggerPayload = InstanceType<typeof LinearTriggerPayload$Runtime>;
var LinearTriggerPayload: MessageType<LinearTriggerPayload> = LinearTriggerPayload$Runtime as unknown as MessageType<LinearTriggerPayload>;
(LinearTriggerPayload as MutableMessageType<LinearTriggerPayload>).runtime = proto3;
(LinearTriggerPayload as MutableMessageType<LinearTriggerPayload>).typeName = "aiserver.v1.LinearTriggerPayload";
(LinearTriggerPayload as MutableMessageType<LinearTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "issue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "issue_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "project_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "issue_created", kind: "message", T: LinearIssueCreatedPayload, oneof: "event" },
  { no: 6, name: "status_changed", kind: "message", T: LinearStatusChangedPayload, oneof: "event" },
  { no: 7, name: "end_of_cycle", kind: "message", T: LinearEndOfCyclePayload, oneof: "event" }
]);
var LinearIssueCreatedPayload$Runtime = (() => class _LinearIssueCreatedPayload extends Message<_LinearIssueCreatedPayload> {
  constructor(data?: PartialMessage<_LinearIssueCreatedPayload>) {
    super();
    proto3.util.initPartial(data, this as _LinearIssueCreatedPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearIssueCreatedPayload {
    return new _LinearIssueCreatedPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearIssueCreatedPayload {
    return new _LinearIssueCreatedPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearIssueCreatedPayload {
    return new _LinearIssueCreatedPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearIssueCreatedPayload | PlainMessage<_LinearIssueCreatedPayload> | undefined | null, b2: _LinearIssueCreatedPayload | PlainMessage<_LinearIssueCreatedPayload> | undefined | null): boolean {
    return proto3.util.equals(_LinearIssueCreatedPayload as unknown as MessageType<_LinearIssueCreatedPayload>, a, b2);
  }
})();
export type LinearIssueCreatedPayload = InstanceType<typeof LinearIssueCreatedPayload$Runtime>;
var LinearIssueCreatedPayload: MessageType<LinearIssueCreatedPayload> = LinearIssueCreatedPayload$Runtime as unknown as MessageType<LinearIssueCreatedPayload>;
(LinearIssueCreatedPayload as MutableMessageType<LinearIssueCreatedPayload>).runtime = proto3;
(LinearIssueCreatedPayload as MutableMessageType<LinearIssueCreatedPayload>).typeName = "aiserver.v1.LinearIssueCreatedPayload";
(LinearIssueCreatedPayload as MutableMessageType<LinearIssueCreatedPayload>).fields = proto3.util.newFieldList(() => []);
var LinearStatusChangedPayload$Runtime = (() => class _LinearStatusChangedPayload extends Message<_LinearStatusChangedPayload> {
  declare oldStatusId: string;
  declare newStatusId: string;
  constructor(data?: PartialMessage<_LinearStatusChangedPayload>) {
    super();
    this.oldStatusId = "";
    this.newStatusId = "";
    proto3.util.initPartial(data, this as _LinearStatusChangedPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearStatusChangedPayload {
    return new _LinearStatusChangedPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearStatusChangedPayload {
    return new _LinearStatusChangedPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearStatusChangedPayload {
    return new _LinearStatusChangedPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearStatusChangedPayload | PlainMessage<_LinearStatusChangedPayload> | undefined | null, b2: _LinearStatusChangedPayload | PlainMessage<_LinearStatusChangedPayload> | undefined | null): boolean {
    return proto3.util.equals(_LinearStatusChangedPayload as unknown as MessageType<_LinearStatusChangedPayload>, a, b2);
  }
})();
export type LinearStatusChangedPayload = InstanceType<typeof LinearStatusChangedPayload$Runtime>;
var LinearStatusChangedPayload: MessageType<LinearStatusChangedPayload> = LinearStatusChangedPayload$Runtime as unknown as MessageType<LinearStatusChangedPayload>;
(LinearStatusChangedPayload as MutableMessageType<LinearStatusChangedPayload>).runtime = proto3;
(LinearStatusChangedPayload as MutableMessageType<LinearStatusChangedPayload>).typeName = "aiserver.v1.LinearStatusChangedPayload";
(LinearStatusChangedPayload as MutableMessageType<LinearStatusChangedPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "old_status_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_status_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var LinearEndOfCyclePayload$Runtime = (() => class _LinearEndOfCyclePayload extends Message<_LinearEndOfCyclePayload> {
  declare cycleId: string;
  declare cycleName: string;
  constructor(data?: PartialMessage<_LinearEndOfCyclePayload>) {
    super();
    this.cycleId = "";
    this.cycleName = "";
    proto3.util.initPartial(data, this as _LinearEndOfCyclePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearEndOfCyclePayload {
    return new _LinearEndOfCyclePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearEndOfCyclePayload {
    return new _LinearEndOfCyclePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearEndOfCyclePayload {
    return new _LinearEndOfCyclePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearEndOfCyclePayload | PlainMessage<_LinearEndOfCyclePayload> | undefined | null, b2: _LinearEndOfCyclePayload | PlainMessage<_LinearEndOfCyclePayload> | undefined | null): boolean {
    return proto3.util.equals(_LinearEndOfCyclePayload as unknown as MessageType<_LinearEndOfCyclePayload>, a, b2);
  }
})();
export type LinearEndOfCyclePayload = InstanceType<typeof LinearEndOfCyclePayload$Runtime>;
var LinearEndOfCyclePayload: MessageType<LinearEndOfCyclePayload> = LinearEndOfCyclePayload$Runtime as unknown as MessageType<LinearEndOfCyclePayload>;
(LinearEndOfCyclePayload as MutableMessageType<LinearEndOfCyclePayload>).runtime = proto3;
(LinearEndOfCyclePayload as MutableMessageType<LinearEndOfCyclePayload>).typeName = "aiserver.v1.LinearEndOfCyclePayload";
(LinearEndOfCyclePayload as MutableMessageType<LinearEndOfCyclePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cycle_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "cycle_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PagerDutyTriggerPayload$Runtime = (() => class _PagerDutyTriggerPayload extends Message<_PagerDutyTriggerPayload> {
  declare incidentId: string;
  declare incidentTitle: string;
  declare incidentStatus: string;
  declare incidentUrgency: string;
  declare serviceId: string;
  declare serviceName: string;
  declare incidentUrl: string;
  declare eventType: string;
  constructor(data?: PartialMessage<_PagerDutyTriggerPayload>) {
    super();
    this.incidentId = "";
    this.incidentTitle = "";
    this.incidentStatus = "";
    this.incidentUrgency = "";
    this.serviceId = "";
    this.serviceName = "";
    this.incidentUrl = "";
    this.eventType = "";
    proto3.util.initPartial(data, this as _PagerDutyTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutyTriggerPayload {
    return new _PagerDutyTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutyTriggerPayload {
    return new _PagerDutyTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutyTriggerPayload {
    return new _PagerDutyTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutyTriggerPayload | PlainMessage<_PagerDutyTriggerPayload> | undefined | null, b2: _PagerDutyTriggerPayload | PlainMessage<_PagerDutyTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutyTriggerPayload as unknown as MessageType<_PagerDutyTriggerPayload>, a, b2);
  }
})();
export type PagerDutyTriggerPayload = InstanceType<typeof PagerDutyTriggerPayload$Runtime>;
var PagerDutyTriggerPayload: MessageType<PagerDutyTriggerPayload> = PagerDutyTriggerPayload$Runtime as unknown as MessageType<PagerDutyTriggerPayload>;
(PagerDutyTriggerPayload as MutableMessageType<PagerDutyTriggerPayload>).runtime = proto3;
(PagerDutyTriggerPayload as MutableMessageType<PagerDutyTriggerPayload>).typeName = "aiserver.v1.PagerDutyTriggerPayload";
(PagerDutyTriggerPayload as MutableMessageType<PagerDutyTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "incident_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "incident_title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "incident_status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "incident_urgency",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "service_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "service_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "incident_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "event_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SentryTriggerPayload$Runtime = (() => class _SentryTriggerPayload extends Message<_SentryTriggerPayload> {
  declare issueId: string;
  declare shortId: string;
  declare title: string;
  declare issueUrl: string;
  declare projectId: string;
  declare projectSlug: string;
  declare action: string;
  declare status: string;
  declare substatus: string;
  constructor(data?: PartialMessage<_SentryTriggerPayload>) {
    super();
    this.issueId = "";
    this.shortId = "";
    this.title = "";
    this.issueUrl = "";
    this.projectId = "";
    this.projectSlug = "";
    this.action = "";
    this.status = "";
    this.substatus = "";
    proto3.util.initPartial(data, this as _SentryTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryTriggerPayload {
    return new _SentryTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryTriggerPayload {
    return new _SentryTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryTriggerPayload {
    return new _SentryTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryTriggerPayload | PlainMessage<_SentryTriggerPayload> | undefined | null, b2: _SentryTriggerPayload | PlainMessage<_SentryTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_SentryTriggerPayload as unknown as MessageType<_SentryTriggerPayload>, a, b2);
  }
})();
export type SentryTriggerPayload = InstanceType<typeof SentryTriggerPayload$Runtime>;
var SentryTriggerPayload: MessageType<SentryTriggerPayload> = SentryTriggerPayload$Runtime as unknown as MessageType<SentryTriggerPayload>;
(SentryTriggerPayload as MutableMessageType<SentryTriggerPayload>).runtime = proto3;
(SentryTriggerPayload as MutableMessageType<SentryTriggerPayload>).typeName = "aiserver.v1.SentryTriggerPayload";
(SentryTriggerPayload as MutableMessageType<SentryTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "issue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "short_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
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
    name: "issue_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "project_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "project_slug",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 7,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 8,
    name: "status",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 9,
    name: "substatus",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MicrosoftTeamsTriggerPayload$Runtime = (() => class _MicrosoftTeamsTriggerPayload extends Message<_MicrosoftTeamsTriggerPayload> {
  declare tenantId: string;
  declare teamId: string;
  declare channelId: string;
  declare messageText: string;
  declare aadObjectId: string;
  declare activityId: string;
  declare rootMessageId?: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsTriggerPayload>) {
    super();
    this.tenantId = "";
    this.teamId = "";
    this.channelId = "";
    this.messageText = "";
    this.aadObjectId = "";
    this.activityId = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsTriggerPayload {
    return new _MicrosoftTeamsTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsTriggerPayload {
    return new _MicrosoftTeamsTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsTriggerPayload {
    return new _MicrosoftTeamsTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsTriggerPayload | PlainMessage<_MicrosoftTeamsTriggerPayload> | undefined | null, b2: _MicrosoftTeamsTriggerPayload | PlainMessage<_MicrosoftTeamsTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsTriggerPayload as unknown as MessageType<_MicrosoftTeamsTriggerPayload>, a, b2);
  }
})();
export type MicrosoftTeamsTriggerPayload = InstanceType<typeof MicrosoftTeamsTriggerPayload$Runtime>;
var MicrosoftTeamsTriggerPayload: MessageType<MicrosoftTeamsTriggerPayload> = MicrosoftTeamsTriggerPayload$Runtime as unknown as MessageType<MicrosoftTeamsTriggerPayload>;
(MicrosoftTeamsTriggerPayload as MutableMessageType<MicrosoftTeamsTriggerPayload>).runtime = proto3;
(MicrosoftTeamsTriggerPayload as MutableMessageType<MicrosoftTeamsTriggerPayload>).typeName = "aiserver.v1.MicrosoftTeamsTriggerPayload";
(MicrosoftTeamsTriggerPayload as MutableMessageType<MicrosoftTeamsTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "channel_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "message_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "aad_object_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 6,
    name: "activity_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "root_message_id", kind: "scalar", T: 9, opt: true }
]);
var MicrosoftTeamsChannelCreatedTriggerPayload$Runtime = (() => class _MicrosoftTeamsChannelCreatedTriggerPayload extends Message<_MicrosoftTeamsChannelCreatedTriggerPayload> {
  declare tenantId: string;
  declare teamId: string;
  declare channelId: string;
  declare channelName: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsChannelCreatedTriggerPayload>) {
    super();
    this.tenantId = "";
    this.teamId = "";
    this.channelId = "";
    this.channelName = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsChannelCreatedTriggerPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsChannelCreatedTriggerPayload {
    return new _MicrosoftTeamsChannelCreatedTriggerPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedTriggerPayload {
    return new _MicrosoftTeamsChannelCreatedTriggerPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedTriggerPayload {
    return new _MicrosoftTeamsChannelCreatedTriggerPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsChannelCreatedTriggerPayload | PlainMessage<_MicrosoftTeamsChannelCreatedTriggerPayload> | undefined | null, b2: _MicrosoftTeamsChannelCreatedTriggerPayload | PlainMessage<_MicrosoftTeamsChannelCreatedTriggerPayload> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsChannelCreatedTriggerPayload as unknown as MessageType<_MicrosoftTeamsChannelCreatedTriggerPayload>, a, b2);
  }
})();
export type MicrosoftTeamsChannelCreatedTriggerPayload = InstanceType<typeof MicrosoftTeamsChannelCreatedTriggerPayload$Runtime>;
var MicrosoftTeamsChannelCreatedTriggerPayload: MessageType<MicrosoftTeamsChannelCreatedTriggerPayload> = MicrosoftTeamsChannelCreatedTriggerPayload$Runtime as unknown as MessageType<MicrosoftTeamsChannelCreatedTriggerPayload>;
(MicrosoftTeamsChannelCreatedTriggerPayload as MutableMessageType<MicrosoftTeamsChannelCreatedTriggerPayload>).runtime = proto3;
(MicrosoftTeamsChannelCreatedTriggerPayload as MutableMessageType<MicrosoftTeamsChannelCreatedTriggerPayload>).typeName = "aiserver.v1.MicrosoftTeamsChannelCreatedTriggerPayload";
(MicrosoftTeamsChannelCreatedTriggerPayload as MutableMessageType<MicrosoftTeamsChannelCreatedTriggerPayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "tenant_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "team_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "channel_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "channel_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TriggerMetadataEntry$Runtime = (() => class _TriggerMetadataEntry extends Message<_TriggerMetadataEntry> {
  declare triggerType: PlatformTriggerType;
  declare metadata: { [key: string]: string };
  constructor(data?: PartialMessage<_TriggerMetadataEntry>) {
    super();
    this.triggerType = PlatformTriggerType.UNSPECIFIED;
    this.metadata = {};
    proto3.util.initPartial(data, this as _TriggerMetadataEntry);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TriggerMetadataEntry {
    return new _TriggerMetadataEntry().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TriggerMetadataEntry {
    return new _TriggerMetadataEntry().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TriggerMetadataEntry {
    return new _TriggerMetadataEntry().fromJsonString(jsonString, options2);
  }
  static equals(a: _TriggerMetadataEntry | PlainMessage<_TriggerMetadataEntry> | undefined | null, b2: _TriggerMetadataEntry | PlainMessage<_TriggerMetadataEntry> | undefined | null): boolean {
    return proto3.util.equals(_TriggerMetadataEntry as unknown as MessageType<_TriggerMetadataEntry>, a, b2);
  }
})();
export type TriggerMetadataEntry = InstanceType<typeof TriggerMetadataEntry$Runtime>;
var TriggerMetadataEntry: MessageType<TriggerMetadataEntry> = TriggerMetadataEntry$Runtime as unknown as MessageType<TriggerMetadataEntry>;
(TriggerMetadataEntry as MutableMessageType<TriggerMetadataEntry>).runtime = proto3;
(TriggerMetadataEntry as MutableMessageType<TriggerMetadataEntry>).typeName = "aiserver.v1.TriggerMetadataEntry";
(TriggerMetadataEntry as MutableMessageType<TriggerMetadataEntry>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "trigger_type", kind: "enum", T: proto3.getEnumType(PlatformTriggerType) },
  { no: 2, name: "metadata", kind: "map", K: 9, V: {
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  } }
]);
var TriggerMetadataPayload$Runtime = (() => class _TriggerMetadataPayload extends Message<_TriggerMetadataPayload> {
  declare entries: TriggerMetadataEntry[];
  constructor(data?: PartialMessage<_TriggerMetadataPayload>) {
    super();
    this.entries = [];
    proto3.util.initPartial(data, this as _TriggerMetadataPayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TriggerMetadataPayload {
    return new _TriggerMetadataPayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TriggerMetadataPayload {
    return new _TriggerMetadataPayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TriggerMetadataPayload {
    return new _TriggerMetadataPayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _TriggerMetadataPayload | PlainMessage<_TriggerMetadataPayload> | undefined | null, b2: _TriggerMetadataPayload | PlainMessage<_TriggerMetadataPayload> | undefined | null): boolean {
    return proto3.util.equals(_TriggerMetadataPayload as unknown as MessageType<_TriggerMetadataPayload>, a, b2);
  }
})();
export type TriggerMetadataPayload = InstanceType<typeof TriggerMetadataPayload$Runtime>;
var TriggerMetadataPayload: MessageType<TriggerMetadataPayload> = TriggerMetadataPayload$Runtime as unknown as MessageType<TriggerMetadataPayload>;
(TriggerMetadataPayload as MutableMessageType<TriggerMetadataPayload>).runtime = proto3;
(TriggerMetadataPayload as MutableMessageType<TriggerMetadataPayload>).typeName = "aiserver.v1.TriggerMetadataPayload";
(TriggerMetadataPayload as MutableMessageType<TriggerMetadataPayload>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "entries", kind: "message", T: TriggerMetadataEntry, repeated: true }
]);
var AutomationDeploySource$Runtime = (() => class _AutomationDeploySource extends Message<_AutomationDeploySource> {
  declare kind: string;
  declare repoInstanceKey?: string;
  declare repoNodeId?: string;
  declare repoName?: string;
  declare path?: string;
  declare ref?: string;
  declare commitSha?: string;
  declare toolVersion?: string;
  constructor(data?: PartialMessage<_AutomationDeploySource>) {
    super();
    this.kind = "";
    proto3.util.initPartial(data, this as _AutomationDeploySource);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationDeploySource {
    return new _AutomationDeploySource().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationDeploySource {
    return new _AutomationDeploySource().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationDeploySource {
    return new _AutomationDeploySource().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationDeploySource | PlainMessage<_AutomationDeploySource> | undefined | null, b2: _AutomationDeploySource | PlainMessage<_AutomationDeploySource> | undefined | null): boolean {
    return proto3.util.equals(_AutomationDeploySource as unknown as MessageType<_AutomationDeploySource>, a, b2);
  }
})();
export type AutomationDeploySource = InstanceType<typeof AutomationDeploySource$Runtime>;
var AutomationDeploySource: MessageType<AutomationDeploySource> = AutomationDeploySource$Runtime as unknown as MessageType<AutomationDeploySource>;
(AutomationDeploySource as MutableMessageType<AutomationDeploySource>).runtime = proto3;
(AutomationDeploySource as MutableMessageType<AutomationDeploySource>).typeName = "aiserver.v1.AutomationDeploySource";
(AutomationDeploySource as MutableMessageType<AutomationDeploySource>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "kind",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "repo_instance_key", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "repo_node_id", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "repo_name", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "path", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "ref", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "commit_sha", kind: "scalar", T: 9, opt: true },
  { no: 8, name: "tool_version", kind: "scalar", T: 9, opt: true }
]);
var AutomationDeploySpec$Runtime = (() => class _AutomationDeploySpec extends Message<_AutomationDeploySpec> {
  declare version: number;
  declare source?: AutomationDeploySource;
  declare key: string;
  declare name: string;
  declare description?: string;
  declare enabled: boolean;
  declare scope: AutomationScope;
  declare workflow?: Workflow;
  declare managedBy?: AutomationManagedBy;
  constructor(data?: PartialMessage<_AutomationDeploySpec>) {
    super();
    this.version = 0;
    this.key = "";
    this.name = "";
    this.enabled = false;
    this.scope = AutomationScope.UNSPECIFIED;
    proto3.util.initPartial(data, this as _AutomationDeploySpec);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationDeploySpec {
    return new _AutomationDeploySpec().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationDeploySpec {
    return new _AutomationDeploySpec().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationDeploySpec {
    return new _AutomationDeploySpec().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationDeploySpec | PlainMessage<_AutomationDeploySpec> | undefined | null, b2: _AutomationDeploySpec | PlainMessage<_AutomationDeploySpec> | undefined | null): boolean {
    return proto3.util.equals(_AutomationDeploySpec as unknown as MessageType<_AutomationDeploySpec>, a, b2);
  }
})();
export type AutomationDeploySpec = InstanceType<typeof AutomationDeploySpec$Runtime>;
var AutomationDeploySpec: MessageType<AutomationDeploySpec> = AutomationDeploySpec$Runtime as unknown as MessageType<AutomationDeploySpec>;
(AutomationDeploySpec as MutableMessageType<AutomationDeploySpec>).runtime = proto3;
(AutomationDeploySpec as MutableMessageType<AutomationDeploySpec>).typeName = "aiserver.v1.AutomationDeploySpec";
(AutomationDeploySpec as MutableMessageType<AutomationDeploySpec>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "version",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  { no: 2, name: "source", kind: "message", T: AutomationDeploySource },
  {
    no: 3,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 7, name: "scope", kind: "enum", T: proto3.getEnumType(AutomationScope) },
  { no: 8, name: "workflow", kind: "message", T: Workflow },
  { no: 9, name: "managed_by", kind: "enum", T: proto3.getEnumType(AutomationManagedBy), opt: true }
]);
var ValidateAutomationSpecRequest$Runtime = (() => class _ValidateAutomationSpecRequest extends Message<_ValidateAutomationSpecRequest> {
  declare spec?: AutomationDeploySpec;
  constructor(data?: PartialMessage<_ValidateAutomationSpecRequest>) {
    super();
    proto3.util.initPartial(data, this as _ValidateAutomationSpecRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ValidateAutomationSpecRequest {
    return new _ValidateAutomationSpecRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ValidateAutomationSpecRequest {
    return new _ValidateAutomationSpecRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ValidateAutomationSpecRequest {
    return new _ValidateAutomationSpecRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ValidateAutomationSpecRequest | PlainMessage<_ValidateAutomationSpecRequest> | undefined | null, b2: _ValidateAutomationSpecRequest | PlainMessage<_ValidateAutomationSpecRequest> | undefined | null): boolean {
    return proto3.util.equals(_ValidateAutomationSpecRequest as unknown as MessageType<_ValidateAutomationSpecRequest>, a, b2);
  }
})();
export type ValidateAutomationSpecRequest = InstanceType<typeof ValidateAutomationSpecRequest$Runtime>;
var ValidateAutomationSpecRequest: MessageType<ValidateAutomationSpecRequest> = ValidateAutomationSpecRequest$Runtime as unknown as MessageType<ValidateAutomationSpecRequest>;
(ValidateAutomationSpecRequest as MutableMessageType<ValidateAutomationSpecRequest>).runtime = proto3;
(ValidateAutomationSpecRequest as MutableMessageType<ValidateAutomationSpecRequest>).typeName = "aiserver.v1.ValidateAutomationSpecRequest";
(ValidateAutomationSpecRequest as MutableMessageType<ValidateAutomationSpecRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "spec", kind: "message", T: AutomationDeploySpec }
]);
var ValidateAutomationSpecResponse$Runtime = (() => class _ValidateAutomationSpecResponse extends Message<_ValidateAutomationSpecResponse> {
  declare wouldCreate: boolean;
  declare automationId?: string;
  constructor(data?: PartialMessage<_ValidateAutomationSpecResponse>) {
    super();
    this.wouldCreate = false;
    proto3.util.initPartial(data, this as _ValidateAutomationSpecResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ValidateAutomationSpecResponse {
    return new _ValidateAutomationSpecResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ValidateAutomationSpecResponse {
    return new _ValidateAutomationSpecResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ValidateAutomationSpecResponse {
    return new _ValidateAutomationSpecResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ValidateAutomationSpecResponse | PlainMessage<_ValidateAutomationSpecResponse> | undefined | null, b2: _ValidateAutomationSpecResponse | PlainMessage<_ValidateAutomationSpecResponse> | undefined | null): boolean {
    return proto3.util.equals(_ValidateAutomationSpecResponse as unknown as MessageType<_ValidateAutomationSpecResponse>, a, b2);
  }
})();
export type ValidateAutomationSpecResponse = InstanceType<typeof ValidateAutomationSpecResponse$Runtime>;
var ValidateAutomationSpecResponse: MessageType<ValidateAutomationSpecResponse> = ValidateAutomationSpecResponse$Runtime as unknown as MessageType<ValidateAutomationSpecResponse>;
(ValidateAutomationSpecResponse as MutableMessageType<ValidateAutomationSpecResponse>).runtime = proto3;
(ValidateAutomationSpecResponse as MutableMessageType<ValidateAutomationSpecResponse>).typeName = "aiserver.v1.ValidateAutomationSpecResponse";
(ValidateAutomationSpecResponse as MutableMessageType<ValidateAutomationSpecResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "would_create",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "automation_id", kind: "scalar", T: 9, opt: true }
]);
var ApplyAutomationSpecRequest$Runtime = (() => class _ApplyAutomationSpecRequest extends Message<_ApplyAutomationSpecRequest> {
  declare spec?: AutomationDeploySpec;
  constructor(data?: PartialMessage<_ApplyAutomationSpecRequest>) {
    super();
    proto3.util.initPartial(data, this as _ApplyAutomationSpecRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ApplyAutomationSpecRequest {
    return new _ApplyAutomationSpecRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ApplyAutomationSpecRequest {
    return new _ApplyAutomationSpecRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ApplyAutomationSpecRequest {
    return new _ApplyAutomationSpecRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ApplyAutomationSpecRequest | PlainMessage<_ApplyAutomationSpecRequest> | undefined | null, b2: _ApplyAutomationSpecRequest | PlainMessage<_ApplyAutomationSpecRequest> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAutomationSpecRequest as unknown as MessageType<_ApplyAutomationSpecRequest>, a, b2);
  }
})();
export type ApplyAutomationSpecRequest = InstanceType<typeof ApplyAutomationSpecRequest$Runtime>;
var ApplyAutomationSpecRequest: MessageType<ApplyAutomationSpecRequest> = ApplyAutomationSpecRequest$Runtime as unknown as MessageType<ApplyAutomationSpecRequest>;
(ApplyAutomationSpecRequest as MutableMessageType<ApplyAutomationSpecRequest>).runtime = proto3;
(ApplyAutomationSpecRequest as MutableMessageType<ApplyAutomationSpecRequest>).typeName = "aiserver.v1.ApplyAutomationSpecRequest";
(ApplyAutomationSpecRequest as MutableMessageType<ApplyAutomationSpecRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "spec", kind: "message", T: AutomationDeploySpec }
]);
var ApplyAutomationSpecResponse$Runtime = (() => class _ApplyAutomationSpecResponse extends Message<_ApplyAutomationSpecResponse> {
  declare workflow?: AutomationWithOwner;
  declare created: boolean;
  constructor(data?: PartialMessage<_ApplyAutomationSpecResponse>) {
    super();
    this.created = false;
    proto3.util.initPartial(data, this as _ApplyAutomationSpecResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ApplyAutomationSpecResponse {
    return new _ApplyAutomationSpecResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ApplyAutomationSpecResponse {
    return new _ApplyAutomationSpecResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ApplyAutomationSpecResponse {
    return new _ApplyAutomationSpecResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ApplyAutomationSpecResponse | PlainMessage<_ApplyAutomationSpecResponse> | undefined | null, b2: _ApplyAutomationSpecResponse | PlainMessage<_ApplyAutomationSpecResponse> | undefined | null): boolean {
    return proto3.util.equals(_ApplyAutomationSpecResponse as unknown as MessageType<_ApplyAutomationSpecResponse>, a, b2);
  }
})();
export type ApplyAutomationSpecResponse = InstanceType<typeof ApplyAutomationSpecResponse$Runtime>;
var ApplyAutomationSpecResponse: MessageType<ApplyAutomationSpecResponse> = ApplyAutomationSpecResponse$Runtime as unknown as MessageType<ApplyAutomationSpecResponse>;
(ApplyAutomationSpecResponse as MutableMessageType<ApplyAutomationSpecResponse>).runtime = proto3;
(ApplyAutomationSpecResponse as MutableMessageType<ApplyAutomationSpecResponse>).typeName = "aiserver.v1.ApplyAutomationSpecResponse";
(ApplyAutomationSpecResponse as MutableMessageType<ApplyAutomationSpecResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner },
  {
    no: 2,
    name: "created",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var CreateAutomationRequest$Runtime = (() => class _CreateAutomationRequest extends Message<_CreateAutomationRequest> {
  declare name: string;
  declare workflow?: Workflow;
  declare description?: string;
  declare scope?: AutomationScope;
  declare templateId?: string;
  declare managedType?: string;
  declare hidden?: boolean;
  declare teamId?: number;
  declare creationSource: AutomationCreationSource;
  declare enabled?: boolean;
  declare sandAgentId?: string;
  declare sandAutomationId?: string;
  constructor(data?: PartialMessage<_CreateAutomationRequest>) {
    super();
    this.name = "";
    this.creationSource = AutomationCreationSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CreateAutomationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateAutomationRequest {
    return new _CreateAutomationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateAutomationRequest {
    return new _CreateAutomationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateAutomationRequest {
    return new _CreateAutomationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateAutomationRequest | PlainMessage<_CreateAutomationRequest> | undefined | null, b2: _CreateAutomationRequest | PlainMessage<_CreateAutomationRequest> | undefined | null): boolean {
    return proto3.util.equals(_CreateAutomationRequest as unknown as MessageType<_CreateAutomationRequest>, a, b2);
  }
})();
export type CreateAutomationRequest = InstanceType<typeof CreateAutomationRequest$Runtime>;
var CreateAutomationRequest: MessageType<CreateAutomationRequest> = CreateAutomationRequest$Runtime as unknown as MessageType<CreateAutomationRequest>;
(CreateAutomationRequest as MutableMessageType<CreateAutomationRequest>).runtime = proto3;
(CreateAutomationRequest as MutableMessageType<CreateAutomationRequest>).typeName = "aiserver.v1.CreateAutomationRequest";
(CreateAutomationRequest as MutableMessageType<CreateAutomationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "workflow", kind: "message", T: Workflow },
  { no: 3, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "scope", kind: "enum", T: proto3.getEnumType(AutomationScope), opt: true },
  { no: 5, name: "template_id", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "managed_type", kind: "scalar", T: 9, opt: true },
  { no: 7, name: "hidden", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "team_id", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "creation_source", kind: "enum", T: proto3.getEnumType(AutomationCreationSource) },
  { no: 10, name: "enabled", kind: "scalar", T: 8, opt: true },
  { no: 11, name: "sand_agent_id", kind: "scalar", T: 9, opt: true },
  { no: 12, name: "sand_automation_id", kind: "scalar", T: 9, opt: true }
]);
var CreateAutomationResponse$Runtime = (() => class _CreateAutomationResponse extends Message<_CreateAutomationResponse> {
  declare workflow?: AutomationWithOwner;
  constructor(data?: PartialMessage<_CreateAutomationResponse>) {
    super();
    proto3.util.initPartial(data, this as _CreateAutomationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateAutomationResponse {
    return new _CreateAutomationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateAutomationResponse {
    return new _CreateAutomationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateAutomationResponse {
    return new _CreateAutomationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateAutomationResponse | PlainMessage<_CreateAutomationResponse> | undefined | null, b2: _CreateAutomationResponse | PlainMessage<_CreateAutomationResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreateAutomationResponse as unknown as MessageType<_CreateAutomationResponse>, a, b2);
  }
})();
export type CreateAutomationResponse = InstanceType<typeof CreateAutomationResponse$Runtime>;
var CreateAutomationResponse: MessageType<CreateAutomationResponse> = CreateAutomationResponse$Runtime as unknown as MessageType<CreateAutomationResponse>;
(CreateAutomationResponse as MutableMessageType<CreateAutomationResponse>).runtime = proto3;
(CreateAutomationResponse as MutableMessageType<CreateAutomationResponse>).typeName = "aiserver.v1.CreateAutomationResponse";
(CreateAutomationResponse as MutableMessageType<CreateAutomationResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner }
]);
var ListSandAutomationsRequest$Runtime = (() => class _ListSandAutomationsRequest extends Message<_ListSandAutomationsRequest> {
  declare sandAgentId: string;
  constructor(data?: PartialMessage<_ListSandAutomationsRequest>) {
    super();
    this.sandAgentId = "";
    proto3.util.initPartial(data, this as _ListSandAutomationsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListSandAutomationsRequest {
    return new _ListSandAutomationsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListSandAutomationsRequest {
    return new _ListSandAutomationsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListSandAutomationsRequest {
    return new _ListSandAutomationsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListSandAutomationsRequest | PlainMessage<_ListSandAutomationsRequest> | undefined | null, b2: _ListSandAutomationsRequest | PlainMessage<_ListSandAutomationsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListSandAutomationsRequest as unknown as MessageType<_ListSandAutomationsRequest>, a, b2);
  }
})();
export type ListSandAutomationsRequest = InstanceType<typeof ListSandAutomationsRequest$Runtime>;
var ListSandAutomationsRequest: MessageType<ListSandAutomationsRequest> = ListSandAutomationsRequest$Runtime as unknown as MessageType<ListSandAutomationsRequest>;
(ListSandAutomationsRequest as MutableMessageType<ListSandAutomationsRequest>).runtime = proto3;
(ListSandAutomationsRequest as MutableMessageType<ListSandAutomationsRequest>).typeName = "aiserver.v1.ListSandAutomationsRequest";
(ListSandAutomationsRequest as MutableMessageType<ListSandAutomationsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "sand_agent_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListAutomationsRequest$Runtime = (() => class _ListAutomationsRequest extends Message<_ListAutomationsRequest> {
  declare teamId?: number;
  constructor(data?: PartialMessage<_ListAutomationsRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListAutomationsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationsRequest {
    return new _ListAutomationsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationsRequest {
    return new _ListAutomationsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationsRequest {
    return new _ListAutomationsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationsRequest | PlainMessage<_ListAutomationsRequest> | undefined | null, b2: _ListAutomationsRequest | PlainMessage<_ListAutomationsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationsRequest as unknown as MessageType<_ListAutomationsRequest>, a, b2);
  }
})();
export type ListAutomationsRequest = InstanceType<typeof ListAutomationsRequest$Runtime>;
var ListAutomationsRequest: MessageType<ListAutomationsRequest> = ListAutomationsRequest$Runtime as unknown as MessageType<ListAutomationsRequest>;
(ListAutomationsRequest as MutableMessageType<ListAutomationsRequest>).runtime = proto3;
(ListAutomationsRequest as MutableMessageType<ListAutomationsRequest>).typeName = "aiserver.v1.ListAutomationsRequest";
(ListAutomationsRequest as MutableMessageType<ListAutomationsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var ListAutomationsResponse$Runtime = (() => class _ListAutomationsResponse extends Message<_ListAutomationsResponse> {
  declare workflows: AutomationWithOwner[];
  constructor(data?: PartialMessage<_ListAutomationsResponse>) {
    super();
    this.workflows = [];
    proto3.util.initPartial(data, this as _ListAutomationsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationsResponse {
    return new _ListAutomationsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationsResponse {
    return new _ListAutomationsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationsResponse {
    return new _ListAutomationsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationsResponse | PlainMessage<_ListAutomationsResponse> | undefined | null, b2: _ListAutomationsResponse | PlainMessage<_ListAutomationsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationsResponse as unknown as MessageType<_ListAutomationsResponse>, a, b2);
  }
})();
export type ListAutomationsResponse = InstanceType<typeof ListAutomationsResponse$Runtime>;
var ListAutomationsResponse: MessageType<ListAutomationsResponse> = ListAutomationsResponse$Runtime as unknown as MessageType<ListAutomationsResponse>;
(ListAutomationsResponse as MutableMessageType<ListAutomationsResponse>).runtime = proto3;
(ListAutomationsResponse as MutableMessageType<ListAutomationsResponse>).typeName = "aiserver.v1.ListAutomationsResponse";
(ListAutomationsResponse as MutableMessageType<ListAutomationsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflows", kind: "message", T: AutomationWithOwner, repeated: true }
]);
var GetAutomationRequest$Runtime = (() => class _GetAutomationRequest extends Message<_GetAutomationRequest> {
  declare automationId: string;
  declare teamId?: number;
  constructor(data?: PartialMessage<_GetAutomationRequest>) {
    super();
    this.automationId = "";
    proto3.util.initPartial(data, this as _GetAutomationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationRequest {
    return new _GetAutomationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationRequest {
    return new _GetAutomationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationRequest {
    return new _GetAutomationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationRequest | PlainMessage<_GetAutomationRequest> | undefined | null, b2: _GetAutomationRequest | PlainMessage<_GetAutomationRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationRequest as unknown as MessageType<_GetAutomationRequest>, a, b2);
  }
})();
export type GetAutomationRequest = InstanceType<typeof GetAutomationRequest$Runtime>;
var GetAutomationRequest: MessageType<GetAutomationRequest> = GetAutomationRequest$Runtime as unknown as MessageType<GetAutomationRequest>;
(GetAutomationRequest as MutableMessageType<GetAutomationRequest>).runtime = proto3;
(GetAutomationRequest as MutableMessageType<GetAutomationRequest>).typeName = "aiserver.v1.GetAutomationRequest";
(GetAutomationRequest as MutableMessageType<GetAutomationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var RestrictedAutomationSummary$Runtime = (() => class _RestrictedAutomationSummary extends Message<_RestrictedAutomationSummary> {
  declare automationId: string;
  declare name: string;
  declare enabled: boolean;
  declare ownerName: string;
  constructor(data?: PartialMessage<_RestrictedAutomationSummary>) {
    super();
    this.automationId = "";
    this.name = "";
    this.enabled = false;
    this.ownerName = "";
    proto3.util.initPartial(data, this as _RestrictedAutomationSummary);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RestrictedAutomationSummary {
    return new _RestrictedAutomationSummary().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RestrictedAutomationSummary {
    return new _RestrictedAutomationSummary().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RestrictedAutomationSummary {
    return new _RestrictedAutomationSummary().fromJsonString(jsonString, options2);
  }
  static equals(a: _RestrictedAutomationSummary | PlainMessage<_RestrictedAutomationSummary> | undefined | null, b2: _RestrictedAutomationSummary | PlainMessage<_RestrictedAutomationSummary> | undefined | null): boolean {
    return proto3.util.equals(_RestrictedAutomationSummary as unknown as MessageType<_RestrictedAutomationSummary>, a, b2);
  }
})();
export type RestrictedAutomationSummary = InstanceType<typeof RestrictedAutomationSummary$Runtime>;
var RestrictedAutomationSummary: MessageType<RestrictedAutomationSummary> = RestrictedAutomationSummary$Runtime as unknown as MessageType<RestrictedAutomationSummary>;
(RestrictedAutomationSummary as MutableMessageType<RestrictedAutomationSummary>).runtime = proto3;
(RestrictedAutomationSummary as MutableMessageType<RestrictedAutomationSummary>).typeName = "aiserver.v1.RestrictedAutomationSummary";
(RestrictedAutomationSummary as MutableMessageType<RestrictedAutomationSummary>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "owner_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetAutomationResponse$Runtime = (() => class _GetAutomationResponse extends Message<_GetAutomationResponse> {
  declare result: { case: "workflow"; value: AutomationWithOwner } | { case: "restrictedSummary"; value: RestrictedAutomationSummary } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_GetAutomationResponse>) {
    super();
    this.result = { case: void 0 };
    proto3.util.initPartial(data, this as _GetAutomationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationResponse {
    return new _GetAutomationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationResponse {
    return new _GetAutomationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationResponse {
    return new _GetAutomationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationResponse | PlainMessage<_GetAutomationResponse> | undefined | null, b2: _GetAutomationResponse | PlainMessage<_GetAutomationResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationResponse as unknown as MessageType<_GetAutomationResponse>, a, b2);
  }
})();
export type GetAutomationResponse = InstanceType<typeof GetAutomationResponse$Runtime>;
var GetAutomationResponse: MessageType<GetAutomationResponse> = GetAutomationResponse$Runtime as unknown as MessageType<GetAutomationResponse>;
(GetAutomationResponse as MutableMessageType<GetAutomationResponse>).runtime = proto3;
(GetAutomationResponse as MutableMessageType<GetAutomationResponse>).typeName = "aiserver.v1.GetAutomationResponse";
(GetAutomationResponse as MutableMessageType<GetAutomationResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner, oneof: "result" },
  { no: 2, name: "restricted_summary", kind: "message", T: RestrictedAutomationSummary, oneof: "result" }
]);
var UpdateAutomationRequest$Runtime = (() => class _UpdateAutomationRequest extends Message<_UpdateAutomationRequest> {
  declare name?: string;
  declare workflow?: Workflow;
  declare enabled?: boolean;
  declare description?: string;
  declare automationId: string;
  declare scope?: AutomationScope;
  declare managedType?: string;
  declare hidden?: boolean;
  constructor(data?: PartialMessage<_UpdateAutomationRequest>) {
    super();
    this.automationId = "";
    proto3.util.initPartial(data, this as _UpdateAutomationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationRequest {
    return new _UpdateAutomationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationRequest {
    return new _UpdateAutomationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationRequest {
    return new _UpdateAutomationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationRequest | PlainMessage<_UpdateAutomationRequest> | undefined | null, b2: _UpdateAutomationRequest | PlainMessage<_UpdateAutomationRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationRequest as unknown as MessageType<_UpdateAutomationRequest>, a, b2);
  }
})();
export type UpdateAutomationRequest = InstanceType<typeof UpdateAutomationRequest$Runtime>;
var UpdateAutomationRequest: MessageType<UpdateAutomationRequest> = UpdateAutomationRequest$Runtime as unknown as MessageType<UpdateAutomationRequest>;
(UpdateAutomationRequest as MutableMessageType<UpdateAutomationRequest>).runtime = proto3;
(UpdateAutomationRequest as MutableMessageType<UpdateAutomationRequest>).typeName = "aiserver.v1.UpdateAutomationRequest";
(UpdateAutomationRequest as MutableMessageType<UpdateAutomationRequest>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "name", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "workflow", kind: "message", T: Workflow, opt: true },
  { no: 4, name: "enabled", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 6,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 7, name: "scope", kind: "enum", T: proto3.getEnumType(AutomationScope), opt: true },
  { no: 8, name: "managed_type", kind: "scalar", T: 9, opt: true },
  { no: 9, name: "hidden", kind: "scalar", T: 8, opt: true }
]);
var UpdateAutomationResponse$Runtime = (() => class _UpdateAutomationResponse extends Message<_UpdateAutomationResponse> {
  declare workflow?: AutomationWithOwner;
  constructor(data?: PartialMessage<_UpdateAutomationResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateAutomationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationResponse {
    return new _UpdateAutomationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationResponse {
    return new _UpdateAutomationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationResponse {
    return new _UpdateAutomationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationResponse | PlainMessage<_UpdateAutomationResponse> | undefined | null, b2: _UpdateAutomationResponse | PlainMessage<_UpdateAutomationResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationResponse as unknown as MessageType<_UpdateAutomationResponse>, a, b2);
  }
})();
export type UpdateAutomationResponse = InstanceType<typeof UpdateAutomationResponse$Runtime>;
var UpdateAutomationResponse: MessageType<UpdateAutomationResponse> = UpdateAutomationResponse$Runtime as unknown as MessageType<UpdateAutomationResponse>;
(UpdateAutomationResponse as MutableMessageType<UpdateAutomationResponse>).runtime = proto3;
(UpdateAutomationResponse as MutableMessageType<UpdateAutomationResponse>).typeName = "aiserver.v1.UpdateAutomationResponse";
(UpdateAutomationResponse as MutableMessageType<UpdateAutomationResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner }
]);
var ReassignAutomationOwnerRequest$Runtime = (() => class _ReassignAutomationOwnerRequest extends Message<_ReassignAutomationOwnerRequest> {
  declare automationId: string;
  declare newOwnerUserId: number;
  constructor(data?: PartialMessage<_ReassignAutomationOwnerRequest>) {
    super();
    this.automationId = "";
    this.newOwnerUserId = 0;
    proto3.util.initPartial(data, this as _ReassignAutomationOwnerRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReassignAutomationOwnerRequest {
    return new _ReassignAutomationOwnerRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReassignAutomationOwnerRequest {
    return new _ReassignAutomationOwnerRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReassignAutomationOwnerRequest {
    return new _ReassignAutomationOwnerRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReassignAutomationOwnerRequest | PlainMessage<_ReassignAutomationOwnerRequest> | undefined | null, b2: _ReassignAutomationOwnerRequest | PlainMessage<_ReassignAutomationOwnerRequest> | undefined | null): boolean {
    return proto3.util.equals(_ReassignAutomationOwnerRequest as unknown as MessageType<_ReassignAutomationOwnerRequest>, a, b2);
  }
})();
export type ReassignAutomationOwnerRequest = InstanceType<typeof ReassignAutomationOwnerRequest$Runtime>;
var ReassignAutomationOwnerRequest: MessageType<ReassignAutomationOwnerRequest> = ReassignAutomationOwnerRequest$Runtime as unknown as MessageType<ReassignAutomationOwnerRequest>;
(ReassignAutomationOwnerRequest as MutableMessageType<ReassignAutomationOwnerRequest>).runtime = proto3;
(ReassignAutomationOwnerRequest as MutableMessageType<ReassignAutomationOwnerRequest>).typeName = "aiserver.v1.ReassignAutomationOwnerRequest";
(ReassignAutomationOwnerRequest as MutableMessageType<ReassignAutomationOwnerRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "new_owner_user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var ReassignAutomationOwnerResponse$Runtime = (() => class _ReassignAutomationOwnerResponse extends Message<_ReassignAutomationOwnerResponse> {
  declare workflow?: AutomationWithOwner;
  constructor(data?: PartialMessage<_ReassignAutomationOwnerResponse>) {
    super();
    proto3.util.initPartial(data, this as _ReassignAutomationOwnerResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ReassignAutomationOwnerResponse {
    return new _ReassignAutomationOwnerResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ReassignAutomationOwnerResponse {
    return new _ReassignAutomationOwnerResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ReassignAutomationOwnerResponse {
    return new _ReassignAutomationOwnerResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ReassignAutomationOwnerResponse | PlainMessage<_ReassignAutomationOwnerResponse> | undefined | null, b2: _ReassignAutomationOwnerResponse | PlainMessage<_ReassignAutomationOwnerResponse> | undefined | null): boolean {
    return proto3.util.equals(_ReassignAutomationOwnerResponse as unknown as MessageType<_ReassignAutomationOwnerResponse>, a, b2);
  }
})();
export type ReassignAutomationOwnerResponse = InstanceType<typeof ReassignAutomationOwnerResponse$Runtime>;
var ReassignAutomationOwnerResponse: MessageType<ReassignAutomationOwnerResponse> = ReassignAutomationOwnerResponse$Runtime as unknown as MessageType<ReassignAutomationOwnerResponse>;
(ReassignAutomationOwnerResponse as MutableMessageType<ReassignAutomationOwnerResponse>).runtime = proto3;
(ReassignAutomationOwnerResponse as MutableMessageType<ReassignAutomationOwnerResponse>).typeName = "aiserver.v1.ReassignAutomationOwnerResponse";
(ReassignAutomationOwnerResponse as MutableMessageType<ReassignAutomationOwnerResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner }
]);
var UpdateAutomationAuthoringModeRequest$Runtime = (() => class _UpdateAutomationAuthoringModeRequest extends Message<_UpdateAutomationAuthoringModeRequest> {
  declare automationId: string;
  declare managedBy: AutomationManagedBy;
  declare deployKey?: string;
  constructor(data?: PartialMessage<_UpdateAutomationAuthoringModeRequest>) {
    super();
    this.automationId = "";
    this.managedBy = AutomationManagedBy.UNSPECIFIED;
    proto3.util.initPartial(data, this as _UpdateAutomationAuthoringModeRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationAuthoringModeRequest {
    return new _UpdateAutomationAuthoringModeRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationAuthoringModeRequest {
    return new _UpdateAutomationAuthoringModeRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationAuthoringModeRequest {
    return new _UpdateAutomationAuthoringModeRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationAuthoringModeRequest | PlainMessage<_UpdateAutomationAuthoringModeRequest> | undefined | null, b2: _UpdateAutomationAuthoringModeRequest | PlainMessage<_UpdateAutomationAuthoringModeRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationAuthoringModeRequest as unknown as MessageType<_UpdateAutomationAuthoringModeRequest>, a, b2);
  }
})();
export type UpdateAutomationAuthoringModeRequest = InstanceType<typeof UpdateAutomationAuthoringModeRequest$Runtime>;
var UpdateAutomationAuthoringModeRequest: MessageType<UpdateAutomationAuthoringModeRequest> = UpdateAutomationAuthoringModeRequest$Runtime as unknown as MessageType<UpdateAutomationAuthoringModeRequest>;
(UpdateAutomationAuthoringModeRequest as MutableMessageType<UpdateAutomationAuthoringModeRequest>).runtime = proto3;
(UpdateAutomationAuthoringModeRequest as MutableMessageType<UpdateAutomationAuthoringModeRequest>).typeName = "aiserver.v1.UpdateAutomationAuthoringModeRequest";
(UpdateAutomationAuthoringModeRequest as MutableMessageType<UpdateAutomationAuthoringModeRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "managed_by", kind: "enum", T: proto3.getEnumType(AutomationManagedBy) },
  { no: 3, name: "deploy_key", kind: "scalar", T: 9, opt: true }
]);
var UpdateAutomationAuthoringModeResponse$Runtime = (() => class _UpdateAutomationAuthoringModeResponse extends Message<_UpdateAutomationAuthoringModeResponse> {
  declare workflow?: AutomationWithOwner;
  constructor(data?: PartialMessage<_UpdateAutomationAuthoringModeResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateAutomationAuthoringModeResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationAuthoringModeResponse {
    return new _UpdateAutomationAuthoringModeResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationAuthoringModeResponse {
    return new _UpdateAutomationAuthoringModeResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationAuthoringModeResponse {
    return new _UpdateAutomationAuthoringModeResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationAuthoringModeResponse | PlainMessage<_UpdateAutomationAuthoringModeResponse> | undefined | null, b2: _UpdateAutomationAuthoringModeResponse | PlainMessage<_UpdateAutomationAuthoringModeResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationAuthoringModeResponse as unknown as MessageType<_UpdateAutomationAuthoringModeResponse>, a, b2);
  }
})();
export type UpdateAutomationAuthoringModeResponse = InstanceType<typeof UpdateAutomationAuthoringModeResponse$Runtime>;
var UpdateAutomationAuthoringModeResponse: MessageType<UpdateAutomationAuthoringModeResponse> = UpdateAutomationAuthoringModeResponse$Runtime as unknown as MessageType<UpdateAutomationAuthoringModeResponse>;
(UpdateAutomationAuthoringModeResponse as MutableMessageType<UpdateAutomationAuthoringModeResponse>).runtime = proto3;
(UpdateAutomationAuthoringModeResponse as MutableMessageType<UpdateAutomationAuthoringModeResponse>).typeName = "aiserver.v1.UpdateAutomationAuthoringModeResponse";
(UpdateAutomationAuthoringModeResponse as MutableMessageType<UpdateAutomationAuthoringModeResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: AutomationWithOwner }
]);
var DeleteAutomationRequest$Runtime = (() => class _DeleteAutomationRequest extends Message<_DeleteAutomationRequest> {
  declare automationId: string;
  constructor(data?: PartialMessage<_DeleteAutomationRequest>) {
    super();
    this.automationId = "";
    proto3.util.initPartial(data, this as _DeleteAutomationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DeleteAutomationRequest {
    return new _DeleteAutomationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DeleteAutomationRequest {
    return new _DeleteAutomationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DeleteAutomationRequest {
    return new _DeleteAutomationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DeleteAutomationRequest | PlainMessage<_DeleteAutomationRequest> | undefined | null, b2: _DeleteAutomationRequest | PlainMessage<_DeleteAutomationRequest> | undefined | null): boolean {
    return proto3.util.equals(_DeleteAutomationRequest as unknown as MessageType<_DeleteAutomationRequest>, a, b2);
  }
})();
export type DeleteAutomationRequest = InstanceType<typeof DeleteAutomationRequest$Runtime>;
var DeleteAutomationRequest: MessageType<DeleteAutomationRequest> = DeleteAutomationRequest$Runtime as unknown as MessageType<DeleteAutomationRequest>;
(DeleteAutomationRequest as MutableMessageType<DeleteAutomationRequest>).runtime = proto3;
(DeleteAutomationRequest as MutableMessageType<DeleteAutomationRequest>).typeName = "aiserver.v1.DeleteAutomationRequest";
(DeleteAutomationRequest as MutableMessageType<DeleteAutomationRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DeleteAutomationResponse$Runtime = (() => class _DeleteAutomationResponse extends Message<_DeleteAutomationResponse> {
  constructor(data?: PartialMessage<_DeleteAutomationResponse>) {
    super();
    proto3.util.initPartial(data, this as _DeleteAutomationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DeleteAutomationResponse {
    return new _DeleteAutomationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DeleteAutomationResponse {
    return new _DeleteAutomationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DeleteAutomationResponse {
    return new _DeleteAutomationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DeleteAutomationResponse | PlainMessage<_DeleteAutomationResponse> | undefined | null, b2: _DeleteAutomationResponse | PlainMessage<_DeleteAutomationResponse> | undefined | null): boolean {
    return proto3.util.equals(_DeleteAutomationResponse as unknown as MessageType<_DeleteAutomationResponse>, a, b2);
  }
})();
export type DeleteAutomationResponse = InstanceType<typeof DeleteAutomationResponse$Runtime>;
var DeleteAutomationResponse: MessageType<DeleteAutomationResponse> = DeleteAutomationResponse$Runtime as unknown as MessageType<DeleteAutomationResponse>;
(DeleteAutomationResponse as MutableMessageType<DeleteAutomationResponse>).runtime = proto3;
(DeleteAutomationResponse as MutableMessageType<DeleteAutomationResponse>).typeName = "aiserver.v1.DeleteAutomationResponse";
(DeleteAutomationResponse as MutableMessageType<DeleteAutomationResponse>).fields = proto3.util.newFieldList(() => []);
var TestAutomationRequest$Runtime = (() => class _TestAutomationRequest extends Message<_TestAutomationRequest> {
  declare automationId: string;
  declare triggerIndex?: number;
  declare testRepo?: string;
  declare testBranch?: string;
  declare samplePayload: { case: "cron"; value: CronSamplePayload } | { case: "pullRequest"; value: PullRequestSamplePayload } | { case: "push"; value: PushSamplePayload } | { case: "slack"; value: SlackSamplePayload } | { case: "linear"; value: LinearSamplePayload } | { case: "ciCompleted"; value: CICompletedSamplePayload } | { case: "webhook"; value: WebhookSamplePayload } | { case: "slackChannelCreated"; value: SlackChannelCreatedSamplePayload } | { case: "pagerduty"; value: PagerDutySamplePayload } | { case: "sentry"; value: SentrySamplePayload } | { case: "microsoftTeams"; value: MicrosoftTeamsSamplePayload } | { case: "microsoftTeamsChannelCreated"; value: MicrosoftTeamsChannelCreatedSamplePayload } | { case: "slackReactionAdded"; value: SlackReactionAddedSamplePayload } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TestAutomationRequest>) {
    super();
    this.samplePayload = { case: void 0 };
    this.automationId = "";
    proto3.util.initPartial(data, this as _TestAutomationRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TestAutomationRequest {
    return new _TestAutomationRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TestAutomationRequest {
    return new _TestAutomationRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TestAutomationRequest {
    return new _TestAutomationRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _TestAutomationRequest | PlainMessage<_TestAutomationRequest> | undefined | null, b2: _TestAutomationRequest | PlainMessage<_TestAutomationRequest> | undefined | null): boolean {
    return proto3.util.equals(_TestAutomationRequest as unknown as MessageType<_TestAutomationRequest>, a, b2);
  }
})();
export type TestAutomationRequest = InstanceType<typeof TestAutomationRequest$Runtime>;
var TestAutomationRequest: MessageType<TestAutomationRequest> = TestAutomationRequest$Runtime as unknown as MessageType<TestAutomationRequest>;
(TestAutomationRequest as MutableMessageType<TestAutomationRequest>).runtime = proto3;
(TestAutomationRequest as MutableMessageType<TestAutomationRequest>).typeName = "aiserver.v1.TestAutomationRequest";
(TestAutomationRequest as MutableMessageType<TestAutomationRequest>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "cron", kind: "message", T: CronSamplePayload, oneof: "sample_payload" },
  { no: 3, name: "pull_request", kind: "message", T: PullRequestSamplePayload, oneof: "sample_payload" },
  { no: 4, name: "push", kind: "message", T: PushSamplePayload, oneof: "sample_payload" },
  { no: 5, name: "slack", kind: "message", T: SlackSamplePayload, oneof: "sample_payload" },
  { no: 6, name: "linear", kind: "message", T: LinearSamplePayload, oneof: "sample_payload" },
  { no: 7, name: "ci_completed", kind: "message", T: CICompletedSamplePayload, oneof: "sample_payload" },
  { no: 9, name: "webhook", kind: "message", T: WebhookSamplePayload, oneof: "sample_payload" },
  { no: 10, name: "slack_channel_created", kind: "message", T: SlackChannelCreatedSamplePayload, oneof: "sample_payload" },
  { no: 11, name: "pagerduty", kind: "message", T: PagerDutySamplePayload, oneof: "sample_payload" },
  { no: 15, name: "sentry", kind: "message", T: SentrySamplePayload, oneof: "sample_payload" },
  { no: 16, name: "microsoft_teams", kind: "message", T: MicrosoftTeamsSamplePayload, oneof: "sample_payload" },
  { no: 17, name: "microsoft_teams_channel_created", kind: "message", T: MicrosoftTeamsChannelCreatedSamplePayload, oneof: "sample_payload" },
  { no: 18, name: "slack_reaction_added", kind: "message", T: SlackReactionAddedSamplePayload, oneof: "sample_payload" },
  {
    no: 8,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 12, name: "trigger_index", kind: "scalar", T: 5, opt: true },
  { no: 13, name: "test_repo", kind: "scalar", T: 9, opt: true },
  { no: 14, name: "test_branch", kind: "scalar", T: 9, opt: true }
]);
var CronSamplePayload$Runtime = (() => class _CronSamplePayload extends Message<_CronSamplePayload> {
  constructor(data?: PartialMessage<_CronSamplePayload>) {
    super();
    proto3.util.initPartial(data, this as _CronSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CronSamplePayload {
    return new _CronSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CronSamplePayload {
    return new _CronSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CronSamplePayload {
    return new _CronSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _CronSamplePayload | PlainMessage<_CronSamplePayload> | undefined | null, b2: _CronSamplePayload | PlainMessage<_CronSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_CronSamplePayload as unknown as MessageType<_CronSamplePayload>, a, b2);
  }
})();
export type CronSamplePayload = InstanceType<typeof CronSamplePayload$Runtime>;
var CronSamplePayload: MessageType<CronSamplePayload> = CronSamplePayload$Runtime as unknown as MessageType<CronSamplePayload>;
(CronSamplePayload as MutableMessageType<CronSamplePayload>).runtime = proto3;
(CronSamplePayload as MutableMessageType<CronSamplePayload>).typeName = "aiserver.v1.CronSamplePayload";
(CronSamplePayload as MutableMessageType<CronSamplePayload>).fields = proto3.util.newFieldList(() => []);
var PullRequestSamplePayload$Runtime = (() => class _PullRequestSamplePayload extends Message<_PullRequestSamplePayload> {
  declare headBranch: string;
  declare baseBranch: string;
  declare repo: string;
  declare prUrl: string;
  constructor(data?: PartialMessage<_PullRequestSamplePayload>) {
    super();
    this.headBranch = "";
    this.baseBranch = "";
    this.repo = "";
    this.prUrl = "";
    proto3.util.initPartial(data, this as _PullRequestSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PullRequestSamplePayload {
    return new _PullRequestSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PullRequestSamplePayload {
    return new _PullRequestSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PullRequestSamplePayload {
    return new _PullRequestSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PullRequestSamplePayload | PlainMessage<_PullRequestSamplePayload> | undefined | null, b2: _PullRequestSamplePayload | PlainMessage<_PullRequestSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_PullRequestSamplePayload as unknown as MessageType<_PullRequestSamplePayload>, a, b2);
  }
})();
export type PullRequestSamplePayload = InstanceType<typeof PullRequestSamplePayload$Runtime>;
var PullRequestSamplePayload: MessageType<PullRequestSamplePayload> = PullRequestSamplePayload$Runtime as unknown as MessageType<PullRequestSamplePayload>;
(PullRequestSamplePayload as MutableMessageType<PullRequestSamplePayload>).runtime = proto3;
(PullRequestSamplePayload as MutableMessageType<PullRequestSamplePayload>).typeName = "aiserver.v1.PullRequestSamplePayload";
(PullRequestSamplePayload as MutableMessageType<PullRequestSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "head_branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "base_branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "pr_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PushSamplePayload$Runtime = (() => class _PushSamplePayload extends Message<_PushSamplePayload> {
  declare repo: string;
  declare ref: string;
  constructor(data?: PartialMessage<_PushSamplePayload>) {
    super();
    this.repo = "";
    this.ref = "";
    proto3.util.initPartial(data, this as _PushSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PushSamplePayload {
    return new _PushSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PushSamplePayload {
    return new _PushSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PushSamplePayload {
    return new _PushSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PushSamplePayload | PlainMessage<_PushSamplePayload> | undefined | null, b2: _PushSamplePayload | PlainMessage<_PushSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_PushSamplePayload as unknown as MessageType<_PushSamplePayload>, a, b2);
  }
})();
export type PushSamplePayload = InstanceType<typeof PushSamplePayload$Runtime>;
var PushSamplePayload: MessageType<PushSamplePayload> = PushSamplePayload$Runtime as unknown as MessageType<PushSamplePayload>;
(PushSamplePayload as MutableMessageType<PushSamplePayload>).runtime = proto3;
(PushSamplePayload as MutableMessageType<PushSamplePayload>).typeName = "aiserver.v1.PushSamplePayload";
(PushSamplePayload as MutableMessageType<PushSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackSamplePayload$Runtime = (() => class _SlackSamplePayload extends Message<_SlackSamplePayload> {
  declare message: string;
  declare isThreadReply: boolean;
  constructor(data?: PartialMessage<_SlackSamplePayload>) {
    super();
    this.message = "";
    this.isThreadReply = false;
    proto3.util.initPartial(data, this as _SlackSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackSamplePayload {
    return new _SlackSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackSamplePayload {
    return new _SlackSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackSamplePayload {
    return new _SlackSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackSamplePayload | PlainMessage<_SlackSamplePayload> | undefined | null, b2: _SlackSamplePayload | PlainMessage<_SlackSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackSamplePayload as unknown as MessageType<_SlackSamplePayload>, a, b2);
  }
})();
export type SlackSamplePayload = InstanceType<typeof SlackSamplePayload$Runtime>;
var SlackSamplePayload: MessageType<SlackSamplePayload> = SlackSamplePayload$Runtime as unknown as MessageType<SlackSamplePayload>;
(SlackSamplePayload as MutableMessageType<SlackSamplePayload>).runtime = proto3;
(SlackSamplePayload as MutableMessageType<SlackSamplePayload>).typeName = "aiserver.v1.SlackSamplePayload";
(SlackSamplePayload as MutableMessageType<SlackSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "is_thread_reply",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var LinearSamplePayload$Runtime = (() => class _LinearSamplePayload extends Message<_LinearSamplePayload> {
  declare issueId: string;
  declare issueIdentifier: string;
  constructor(data?: PartialMessage<_LinearSamplePayload>) {
    super();
    this.issueId = "";
    this.issueIdentifier = "";
    proto3.util.initPartial(data, this as _LinearSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _LinearSamplePayload {
    return new _LinearSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _LinearSamplePayload {
    return new _LinearSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _LinearSamplePayload {
    return new _LinearSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _LinearSamplePayload | PlainMessage<_LinearSamplePayload> | undefined | null, b2: _LinearSamplePayload | PlainMessage<_LinearSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_LinearSamplePayload as unknown as MessageType<_LinearSamplePayload>, a, b2);
  }
})();
export type LinearSamplePayload = InstanceType<typeof LinearSamplePayload$Runtime>;
var LinearSamplePayload: MessageType<LinearSamplePayload> = LinearSamplePayload$Runtime as unknown as MessageType<LinearSamplePayload>;
(LinearSamplePayload as MutableMessageType<LinearSamplePayload>).runtime = proto3;
(LinearSamplePayload as MutableMessageType<LinearSamplePayload>).typeName = "aiserver.v1.LinearSamplePayload";
(LinearSamplePayload as MutableMessageType<LinearSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "issue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "issue_identifier",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CICompletedSamplePayload$Runtime = (() => class _CICompletedSamplePayload extends Message<_CICompletedSamplePayload> {
  declare prNumber: number;
  declare repo: string;
  constructor(data?: PartialMessage<_CICompletedSamplePayload>) {
    super();
    this.prNumber = 0;
    this.repo = "";
    proto3.util.initPartial(data, this as _CICompletedSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CICompletedSamplePayload {
    return new _CICompletedSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CICompletedSamplePayload {
    return new _CICompletedSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CICompletedSamplePayload {
    return new _CICompletedSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _CICompletedSamplePayload | PlainMessage<_CICompletedSamplePayload> | undefined | null, b2: _CICompletedSamplePayload | PlainMessage<_CICompletedSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_CICompletedSamplePayload as unknown as MessageType<_CICompletedSamplePayload>, a, b2);
  }
})();
export type CICompletedSamplePayload = InstanceType<typeof CICompletedSamplePayload$Runtime>;
var CICompletedSamplePayload: MessageType<CICompletedSamplePayload> = CICompletedSamplePayload$Runtime as unknown as MessageType<CICompletedSamplePayload>;
(CICompletedSamplePayload as MutableMessageType<CICompletedSamplePayload>).runtime = proto3;
(CICompletedSamplePayload as MutableMessageType<CICompletedSamplePayload>).typeName = "aiserver.v1.CICompletedSamplePayload";
(CICompletedSamplePayload as MutableMessageType<CICompletedSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "pr_number",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "repo",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackChannelCreatedSamplePayload$Runtime = (() => class _SlackChannelCreatedSamplePayload extends Message<_SlackChannelCreatedSamplePayload> {
  declare channelName: string;
  constructor(data?: PartialMessage<_SlackChannelCreatedSamplePayload>) {
    super();
    this.channelName = "";
    proto3.util.initPartial(data, this as _SlackChannelCreatedSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackChannelCreatedSamplePayload {
    return new _SlackChannelCreatedSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedSamplePayload {
    return new _SlackChannelCreatedSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackChannelCreatedSamplePayload {
    return new _SlackChannelCreatedSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackChannelCreatedSamplePayload | PlainMessage<_SlackChannelCreatedSamplePayload> | undefined | null, b2: _SlackChannelCreatedSamplePayload | PlainMessage<_SlackChannelCreatedSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackChannelCreatedSamplePayload as unknown as MessageType<_SlackChannelCreatedSamplePayload>, a, b2);
  }
})();
export type SlackChannelCreatedSamplePayload = InstanceType<typeof SlackChannelCreatedSamplePayload$Runtime>;
var SlackChannelCreatedSamplePayload: MessageType<SlackChannelCreatedSamplePayload> = SlackChannelCreatedSamplePayload$Runtime as unknown as MessageType<SlackChannelCreatedSamplePayload>;
(SlackChannelCreatedSamplePayload as MutableMessageType<SlackChannelCreatedSamplePayload>).runtime = proto3;
(SlackChannelCreatedSamplePayload as MutableMessageType<SlackChannelCreatedSamplePayload>).typeName = "aiserver.v1.SlackChannelCreatedSamplePayload";
(SlackChannelCreatedSamplePayload as MutableMessageType<SlackChannelCreatedSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SlackReactionAddedSamplePayload$Runtime = (() => class _SlackReactionAddedSamplePayload extends Message<_SlackReactionAddedSamplePayload> {
  declare emojiName: string;
  declare message: string;
  constructor(data?: PartialMessage<_SlackReactionAddedSamplePayload>) {
    super();
    this.emojiName = "";
    this.message = "";
    proto3.util.initPartial(data, this as _SlackReactionAddedSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SlackReactionAddedSamplePayload {
    return new _SlackReactionAddedSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SlackReactionAddedSamplePayload {
    return new _SlackReactionAddedSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SlackReactionAddedSamplePayload {
    return new _SlackReactionAddedSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SlackReactionAddedSamplePayload | PlainMessage<_SlackReactionAddedSamplePayload> | undefined | null, b2: _SlackReactionAddedSamplePayload | PlainMessage<_SlackReactionAddedSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_SlackReactionAddedSamplePayload as unknown as MessageType<_SlackReactionAddedSamplePayload>, a, b2);
  }
})();
export type SlackReactionAddedSamplePayload = InstanceType<typeof SlackReactionAddedSamplePayload$Runtime>;
var SlackReactionAddedSamplePayload: MessageType<SlackReactionAddedSamplePayload> = SlackReactionAddedSamplePayload$Runtime as unknown as MessageType<SlackReactionAddedSamplePayload>;
(SlackReactionAddedSamplePayload as MutableMessageType<SlackReactionAddedSamplePayload>).runtime = proto3;
(SlackReactionAddedSamplePayload as MutableMessageType<SlackReactionAddedSamplePayload>).typeName = "aiserver.v1.SlackReactionAddedSamplePayload";
(SlackReactionAddedSamplePayload as MutableMessageType<SlackReactionAddedSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "emoji_name",
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
  }
]);
var WebhookSamplePayload$Runtime = (() => class _WebhookSamplePayload extends Message<_WebhookSamplePayload> {
  declare context: string;
  declare webhookPayloadJson: string;
  constructor(data?: PartialMessage<_WebhookSamplePayload>) {
    super();
    this.context = "";
    this.webhookPayloadJson = "";
    proto3.util.initPartial(data, this as _WebhookSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WebhookSamplePayload {
    return new _WebhookSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WebhookSamplePayload {
    return new _WebhookSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WebhookSamplePayload {
    return new _WebhookSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _WebhookSamplePayload | PlainMessage<_WebhookSamplePayload> | undefined | null, b2: _WebhookSamplePayload | PlainMessage<_WebhookSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_WebhookSamplePayload as unknown as MessageType<_WebhookSamplePayload>, a, b2);
  }
})();
export type WebhookSamplePayload = InstanceType<typeof WebhookSamplePayload$Runtime>;
var WebhookSamplePayload: MessageType<WebhookSamplePayload> = WebhookSamplePayload$Runtime as unknown as MessageType<WebhookSamplePayload>;
(WebhookSamplePayload as MutableMessageType<WebhookSamplePayload>).runtime = proto3;
(WebhookSamplePayload as MutableMessageType<WebhookSamplePayload>).typeName = "aiserver.v1.WebhookSamplePayload";
(WebhookSamplePayload as MutableMessageType<WebhookSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "context",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "webhook_payload_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var SentrySamplePayload$Runtime = (() => class _SentrySamplePayload extends Message<_SentrySamplePayload> {
  declare issueId: string;
  declare action: string;
  declare projectId: string;
  constructor(data?: PartialMessage<_SentrySamplePayload>) {
    super();
    this.issueId = "";
    this.action = "";
    this.projectId = "";
    proto3.util.initPartial(data, this as _SentrySamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentrySamplePayload {
    return new _SentrySamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentrySamplePayload {
    return new _SentrySamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentrySamplePayload {
    return new _SentrySamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentrySamplePayload | PlainMessage<_SentrySamplePayload> | undefined | null, b2: _SentrySamplePayload | PlainMessage<_SentrySamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_SentrySamplePayload as unknown as MessageType<_SentrySamplePayload>, a, b2);
  }
})();
export type SentrySamplePayload = InstanceType<typeof SentrySamplePayload$Runtime>;
var SentrySamplePayload: MessageType<SentrySamplePayload> = SentrySamplePayload$Runtime as unknown as MessageType<SentrySamplePayload>;
(SentrySamplePayload as MutableMessageType<SentrySamplePayload>).runtime = proto3;
(SentrySamplePayload as MutableMessageType<SentrySamplePayload>).typeName = "aiserver.v1.SentrySamplePayload";
(SentrySamplePayload as MutableMessageType<SentrySamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "issue_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "action",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "project_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var PagerDutySamplePayload$Runtime = (() => class _PagerDutySamplePayload extends Message<_PagerDutySamplePayload> {
  declare incidentId: string;
  declare eventType: string;
  constructor(data?: PartialMessage<_PagerDutySamplePayload>) {
    super();
    this.incidentId = "";
    this.eventType = "";
    proto3.util.initPartial(data, this as _PagerDutySamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _PagerDutySamplePayload {
    return new _PagerDutySamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _PagerDutySamplePayload {
    return new _PagerDutySamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _PagerDutySamplePayload {
    return new _PagerDutySamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _PagerDutySamplePayload | PlainMessage<_PagerDutySamplePayload> | undefined | null, b2: _PagerDutySamplePayload | PlainMessage<_PagerDutySamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_PagerDutySamplePayload as unknown as MessageType<_PagerDutySamplePayload>, a, b2);
  }
})();
export type PagerDutySamplePayload = InstanceType<typeof PagerDutySamplePayload$Runtime>;
var PagerDutySamplePayload: MessageType<PagerDutySamplePayload> = PagerDutySamplePayload$Runtime as unknown as MessageType<PagerDutySamplePayload>;
(PagerDutySamplePayload as MutableMessageType<PagerDutySamplePayload>).runtime = proto3;
(PagerDutySamplePayload as MutableMessageType<PagerDutySamplePayload>).typeName = "aiserver.v1.PagerDutySamplePayload";
(PagerDutySamplePayload as MutableMessageType<PagerDutySamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "incident_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "event_type",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MicrosoftTeamsSamplePayload$Runtime = (() => class _MicrosoftTeamsSamplePayload extends Message<_MicrosoftTeamsSamplePayload> {
  declare message: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsSamplePayload>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsSamplePayload {
    return new _MicrosoftTeamsSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsSamplePayload {
    return new _MicrosoftTeamsSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsSamplePayload {
    return new _MicrosoftTeamsSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsSamplePayload | PlainMessage<_MicrosoftTeamsSamplePayload> | undefined | null, b2: _MicrosoftTeamsSamplePayload | PlainMessage<_MicrosoftTeamsSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsSamplePayload as unknown as MessageType<_MicrosoftTeamsSamplePayload>, a, b2);
  }
})();
export type MicrosoftTeamsSamplePayload = InstanceType<typeof MicrosoftTeamsSamplePayload$Runtime>;
var MicrosoftTeamsSamplePayload: MessageType<MicrosoftTeamsSamplePayload> = MicrosoftTeamsSamplePayload$Runtime as unknown as MessageType<MicrosoftTeamsSamplePayload>;
(MicrosoftTeamsSamplePayload as MutableMessageType<MicrosoftTeamsSamplePayload>).runtime = proto3;
(MicrosoftTeamsSamplePayload as MutableMessageType<MicrosoftTeamsSamplePayload>).typeName = "aiserver.v1.MicrosoftTeamsSamplePayload";
(MicrosoftTeamsSamplePayload as MutableMessageType<MicrosoftTeamsSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var MicrosoftTeamsChannelCreatedSamplePayload$Runtime = (() => class _MicrosoftTeamsChannelCreatedSamplePayload extends Message<_MicrosoftTeamsChannelCreatedSamplePayload> {
  declare channelName: string;
  constructor(data?: PartialMessage<_MicrosoftTeamsChannelCreatedSamplePayload>) {
    super();
    this.channelName = "";
    proto3.util.initPartial(data, this as _MicrosoftTeamsChannelCreatedSamplePayload);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _MicrosoftTeamsChannelCreatedSamplePayload {
    return new _MicrosoftTeamsChannelCreatedSamplePayload().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedSamplePayload {
    return new _MicrosoftTeamsChannelCreatedSamplePayload().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _MicrosoftTeamsChannelCreatedSamplePayload {
    return new _MicrosoftTeamsChannelCreatedSamplePayload().fromJsonString(jsonString, options2);
  }
  static equals(a: _MicrosoftTeamsChannelCreatedSamplePayload | PlainMessage<_MicrosoftTeamsChannelCreatedSamplePayload> | undefined | null, b2: _MicrosoftTeamsChannelCreatedSamplePayload | PlainMessage<_MicrosoftTeamsChannelCreatedSamplePayload> | undefined | null): boolean {
    return proto3.util.equals(_MicrosoftTeamsChannelCreatedSamplePayload as unknown as MessageType<_MicrosoftTeamsChannelCreatedSamplePayload>, a, b2);
  }
})();
export type MicrosoftTeamsChannelCreatedSamplePayload = InstanceType<typeof MicrosoftTeamsChannelCreatedSamplePayload$Runtime>;
var MicrosoftTeamsChannelCreatedSamplePayload: MessageType<MicrosoftTeamsChannelCreatedSamplePayload> = MicrosoftTeamsChannelCreatedSamplePayload$Runtime as unknown as MessageType<MicrosoftTeamsChannelCreatedSamplePayload>;
(MicrosoftTeamsChannelCreatedSamplePayload as MutableMessageType<MicrosoftTeamsChannelCreatedSamplePayload>).runtime = proto3;
(MicrosoftTeamsChannelCreatedSamplePayload as MutableMessageType<MicrosoftTeamsChannelCreatedSamplePayload>).typeName = "aiserver.v1.MicrosoftTeamsChannelCreatedSamplePayload";
(MicrosoftTeamsChannelCreatedSamplePayload as MutableMessageType<MicrosoftTeamsChannelCreatedSamplePayload>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "channel_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var TestAutomationResponse$Runtime = (() => class _TestAutomationResponse extends Message<_TestAutomationResponse> {
  declare message: string;
  declare backgroundComposerId?: string;
  declare runUuid?: string;
  constructor(data?: PartialMessage<_TestAutomationResponse>) {
    super();
    this.message = "";
    proto3.util.initPartial(data, this as _TestAutomationResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TestAutomationResponse {
    return new _TestAutomationResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TestAutomationResponse {
    return new _TestAutomationResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TestAutomationResponse {
    return new _TestAutomationResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _TestAutomationResponse | PlainMessage<_TestAutomationResponse> | undefined | null, b2: _TestAutomationResponse | PlainMessage<_TestAutomationResponse> | undefined | null): boolean {
    return proto3.util.equals(_TestAutomationResponse as unknown as MessageType<_TestAutomationResponse>, a, b2);
  }
})();
export type TestAutomationResponse = InstanceType<typeof TestAutomationResponse$Runtime>;
var TestAutomationResponse: MessageType<TestAutomationResponse> = TestAutomationResponse$Runtime as unknown as MessageType<TestAutomationResponse>;
(TestAutomationResponse as MutableMessageType<TestAutomationResponse>).runtime = proto3;
(TestAutomationResponse as MutableMessageType<TestAutomationResponse>).typeName = "aiserver.v1.TestAutomationResponse";
(TestAutomationResponse as MutableMessageType<TestAutomationResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "background_composer_id", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "run_uuid", kind: "scalar", T: 9, opt: true }
]);
var Automation$Runtime = (() => class _Automation extends Message<_Automation> {
  declare name: string;
  declare enabled: boolean;
  declare workflow?: Workflow;
  declare createdAt: bigint;
  declare updatedAt: bigint;
  declare description?: string;
  declare automationId: string;
  declare scope: AutomationScope;
  declare serviceAccountId?: string;
  declare managedBy: AutomationManagedBy;
  declare deployKey?: string;
  declare deployLastAppliedAt?: bigint;
  declare deployLastApplyError?: string;
  declare managedType?: string;
  declare hidden?: boolean;
  declare templateId?: string;
  constructor(data?: PartialMessage<_Automation>) {
    super();
    this.name = "";
    this.enabled = false;
    this.createdAt = protoInt64.zero;
    this.updatedAt = protoInt64.zero;
    this.automationId = "";
    this.scope = AutomationScope.UNSPECIFIED;
    this.managedBy = AutomationManagedBy.UNSPECIFIED;
    proto3.util.initPartial(data, this as _Automation);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _Automation {
    return new _Automation().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _Automation {
    return new _Automation().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _Automation {
    return new _Automation().fromJsonString(jsonString, options2);
  }
  static equals(a: _Automation | PlainMessage<_Automation> | undefined | null, b2: _Automation | PlainMessage<_Automation> | undefined | null): boolean {
    return proto3.util.equals(_Automation as unknown as MessageType<_Automation>, a, b2);
  }
})();
export type Automation = InstanceType<typeof Automation$Runtime>;
var Automation: MessageType<Automation> = Automation$Runtime as unknown as MessageType<Automation>;
(Automation as MutableMessageType<Automation>).runtime = proto3;
(Automation as MutableMessageType<Automation>).typeName = "aiserver.v1.Automation";
(Automation as MutableMessageType<Automation>).fields = proto3.util.newFieldList(() => [
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "enabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "workflow", kind: "message", T: Workflow },
  {
    no: 5,
    name: "created_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 6,
    name: "updated_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 7, name: "description", kind: "scalar", T: 9, opt: true },
  {
    no: 8,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 9, name: "scope", kind: "enum", T: proto3.getEnumType(AutomationScope) },
  { no: 10, name: "service_account_id", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "managed_by", kind: "enum", T: proto3.getEnumType(AutomationManagedBy) },
  { no: 12, name: "deploy_key", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "deploy_last_applied_at", kind: "scalar", T: 3, opt: true },
  { no: 14, name: "deploy_last_apply_error", kind: "scalar", T: 9, opt: true },
  { no: 15, name: "managed_type", kind: "scalar", T: 9, opt: true },
  { no: 16, name: "hidden", kind: "scalar", T: 8, opt: true },
  { no: 17, name: "template_id", kind: "scalar", T: 9, opt: true }
]);
var AutomationMcpAuthState$Runtime = (() => class _AutomationMcpAuthState extends Message<_AutomationMcpAuthState> {
  declare serverId?: bigint;
  declare serverName: string;
  declare authState: McpAuthState;
  constructor(data?: PartialMessage<_AutomationMcpAuthState>) {
    super();
    this.serverName = "";
    this.authState = McpAuthState.UNSPECIFIED;
    proto3.util.initPartial(data, this as _AutomationMcpAuthState);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationMcpAuthState {
    return new _AutomationMcpAuthState().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationMcpAuthState {
    return new _AutomationMcpAuthState().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationMcpAuthState {
    return new _AutomationMcpAuthState().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationMcpAuthState | PlainMessage<_AutomationMcpAuthState> | undefined | null, b2: _AutomationMcpAuthState | PlainMessage<_AutomationMcpAuthState> | undefined | null): boolean {
    return proto3.util.equals(_AutomationMcpAuthState as unknown as MessageType<_AutomationMcpAuthState>, a, b2);
  }
})();
export type AutomationMcpAuthState = InstanceType<typeof AutomationMcpAuthState$Runtime>;
var AutomationMcpAuthState: MessageType<AutomationMcpAuthState> = AutomationMcpAuthState$Runtime as unknown as MessageType<AutomationMcpAuthState>;
(AutomationMcpAuthState as MutableMessageType<AutomationMcpAuthState>).runtime = proto3;
(AutomationMcpAuthState as MutableMessageType<AutomationMcpAuthState>).typeName = "aiserver.v1.AutomationMcpAuthState";
(AutomationMcpAuthState as MutableMessageType<AutomationMcpAuthState>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "server_id", kind: "scalar", T: 3, opt: true },
  {
    no: 2,
    name: "server_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "auth_state", kind: "enum", T: proto3.getEnumType(McpAuthState) }
]);
var AutomationWithOwner$Runtime = (() => class _AutomationWithOwner extends Message<_AutomationWithOwner> {
  declare workflow?: Automation;
  declare userId: number;
  declare ownerName: string;
  declare mcpAuthStates: AutomationMcpAuthState[];
  declare teamId?: number;
  constructor(data?: PartialMessage<_AutomationWithOwner>) {
    super();
    this.userId = 0;
    this.ownerName = "";
    this.mcpAuthStates = [];
    proto3.util.initPartial(data, this as _AutomationWithOwner);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationWithOwner {
    return new _AutomationWithOwner().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationWithOwner {
    return new _AutomationWithOwner().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationWithOwner {
    return new _AutomationWithOwner().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationWithOwner | PlainMessage<_AutomationWithOwner> | undefined | null, b2: _AutomationWithOwner | PlainMessage<_AutomationWithOwner> | undefined | null): boolean {
    return proto3.util.equals(_AutomationWithOwner as unknown as MessageType<_AutomationWithOwner>, a, b2);
  }
})();
export type AutomationWithOwner = InstanceType<typeof AutomationWithOwner$Runtime>;
var AutomationWithOwner: MessageType<AutomationWithOwner> = AutomationWithOwner$Runtime as unknown as MessageType<AutomationWithOwner>;
(AutomationWithOwner as MutableMessageType<AutomationWithOwner>).runtime = proto3;
(AutomationWithOwner as MutableMessageType<AutomationWithOwner>).typeName = "aiserver.v1.AutomationWithOwner";
(AutomationWithOwner as MutableMessageType<AutomationWithOwner>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: Automation },
  {
    no: 2,
    name: "user_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "owner_name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "mcp_auth_states", kind: "message", T: AutomationMcpAuthState, repeated: true },
  { no: 5, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var ListAutomationRunsRequest$Runtime = (() => class _ListAutomationRunsRequest extends Message<_ListAutomationRunsRequest> {
  declare limit?: number;
  declare automationId: string;
  declare cursor?: string;
  declare runKind: AutomationRunListKind;
  constructor(data?: PartialMessage<_ListAutomationRunsRequest>) {
    super();
    this.automationId = "";
    this.runKind = AutomationRunListKind.UNSPECIFIED;
    proto3.util.initPartial(data, this as _ListAutomationRunsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationRunsRequest {
    return new _ListAutomationRunsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationRunsRequest {
    return new _ListAutomationRunsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationRunsRequest {
    return new _ListAutomationRunsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationRunsRequest | PlainMessage<_ListAutomationRunsRequest> | undefined | null, b2: _ListAutomationRunsRequest | PlainMessage<_ListAutomationRunsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationRunsRequest as unknown as MessageType<_ListAutomationRunsRequest>, a, b2);
  }
})();
export type ListAutomationRunsRequest = InstanceType<typeof ListAutomationRunsRequest$Runtime>;
var ListAutomationRunsRequest: MessageType<ListAutomationRunsRequest> = ListAutomationRunsRequest$Runtime as unknown as MessageType<ListAutomationRunsRequest>;
(ListAutomationRunsRequest as MutableMessageType<ListAutomationRunsRequest>).runtime = proto3;
(ListAutomationRunsRequest as MutableMessageType<ListAutomationRunsRequest>).typeName = "aiserver.v1.ListAutomationRunsRequest";
(ListAutomationRunsRequest as MutableMessageType<ListAutomationRunsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true },
  {
    no: 3,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "cursor", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "run_kind", kind: "enum", T: proto3.getEnumType(AutomationRunListKind) }
]);
var ListAutomationRunsResponse$Runtime = (() => class _ListAutomationRunsResponse extends Message<_ListAutomationRunsResponse> {
  declare runs: AutomationRun[];
  declare nextCursor?: string;
  constructor(data?: PartialMessage<_ListAutomationRunsResponse>) {
    super();
    this.runs = [];
    proto3.util.initPartial(data, this as _ListAutomationRunsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationRunsResponse {
    return new _ListAutomationRunsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationRunsResponse {
    return new _ListAutomationRunsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationRunsResponse {
    return new _ListAutomationRunsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationRunsResponse | PlainMessage<_ListAutomationRunsResponse> | undefined | null, b2: _ListAutomationRunsResponse | PlainMessage<_ListAutomationRunsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationRunsResponse as unknown as MessageType<_ListAutomationRunsResponse>, a, b2);
  }
})();
export type ListAutomationRunsResponse = InstanceType<typeof ListAutomationRunsResponse$Runtime>;
var ListAutomationRunsResponse: MessageType<ListAutomationRunsResponse> = ListAutomationRunsResponse$Runtime as unknown as MessageType<ListAutomationRunsResponse>;
(ListAutomationRunsResponse as MutableMessageType<ListAutomationRunsResponse>).runtime = proto3;
(ListAutomationRunsResponse as MutableMessageType<ListAutomationRunsResponse>).typeName = "aiserver.v1.ListAutomationRunsResponse";
(ListAutomationRunsResponse as MutableMessageType<ListAutomationRunsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "runs", kind: "message", T: AutomationRun, repeated: true },
  { no: 2, name: "next_cursor", kind: "scalar", T: 9, opt: true }
]);
var GetAutomationRunRequest$Runtime = (() => class _GetAutomationRunRequest extends Message<_GetAutomationRunRequest> {
  declare backgroundComposerId: string;
  constructor(data?: PartialMessage<_GetAutomationRunRequest>) {
    super();
    this.backgroundComposerId = "";
    proto3.util.initPartial(data, this as _GetAutomationRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationRunRequest {
    return new _GetAutomationRunRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationRunRequest {
    return new _GetAutomationRunRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationRunRequest {
    return new _GetAutomationRunRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationRunRequest | PlainMessage<_GetAutomationRunRequest> | undefined | null, b2: _GetAutomationRunRequest | PlainMessage<_GetAutomationRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationRunRequest as unknown as MessageType<_GetAutomationRunRequest>, a, b2);
  }
})();
export type GetAutomationRunRequest = InstanceType<typeof GetAutomationRunRequest$Runtime>;
var GetAutomationRunRequest: MessageType<GetAutomationRunRequest> = GetAutomationRunRequest$Runtime as unknown as MessageType<GetAutomationRunRequest>;
(GetAutomationRunRequest as MutableMessageType<GetAutomationRunRequest>).runtime = proto3;
(GetAutomationRunRequest as MutableMessageType<GetAutomationRunRequest>).typeName = "aiserver.v1.GetAutomationRunRequest";
(GetAutomationRunRequest as MutableMessageType<GetAutomationRunRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "background_composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetAutomationRunResponse$Runtime = (() => class _GetAutomationRunResponse extends Message<_GetAutomationRunResponse> {
  declare run?: AutomationRun;
  constructor(data?: PartialMessage<_GetAutomationRunResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetAutomationRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationRunResponse {
    return new _GetAutomationRunResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationRunResponse {
    return new _GetAutomationRunResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationRunResponse {
    return new _GetAutomationRunResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationRunResponse | PlainMessage<_GetAutomationRunResponse> | undefined | null, b2: _GetAutomationRunResponse | PlainMessage<_GetAutomationRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationRunResponse as unknown as MessageType<_GetAutomationRunResponse>, a, b2);
  }
})();
export type GetAutomationRunResponse = InstanceType<typeof GetAutomationRunResponse$Runtime>;
var GetAutomationRunResponse: MessageType<GetAutomationRunResponse> = GetAutomationRunResponse$Runtime as unknown as MessageType<GetAutomationRunResponse>;
(GetAutomationRunResponse as MutableMessageType<GetAutomationRunResponse>).runtime = proto3;
(GetAutomationRunResponse as MutableMessageType<GetAutomationRunResponse>).typeName = "aiserver.v1.GetAutomationRunResponse";
(GetAutomationRunResponse as MutableMessageType<GetAutomationRunResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "run", kind: "message", T: AutomationRun, opt: true }
]);
var ListAllRunsRequest$Runtime = (() => class _ListAllRunsRequest extends Message<_ListAllRunsRequest> {
  declare automationId?: string;
  declare limit?: number;
  declare cursor?: string;
  declare runKind: AutomationRunListKind;
  declare teamId?: number;
  declare ownerOnly: boolean;
  constructor(data?: PartialMessage<_ListAllRunsRequest>) {
    super();
    this.runKind = AutomationRunListKind.UNSPECIFIED;
    this.ownerOnly = false;
    proto3.util.initPartial(data, this as _ListAllRunsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAllRunsRequest {
    return new _ListAllRunsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAllRunsRequest {
    return new _ListAllRunsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAllRunsRequest {
    return new _ListAllRunsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAllRunsRequest | PlainMessage<_ListAllRunsRequest> | undefined | null, b2: _ListAllRunsRequest | PlainMessage<_ListAllRunsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListAllRunsRequest as unknown as MessageType<_ListAllRunsRequest>, a, b2);
  }
})();
export type ListAllRunsRequest = InstanceType<typeof ListAllRunsRequest$Runtime>;
var ListAllRunsRequest: MessageType<ListAllRunsRequest> = ListAllRunsRequest$Runtime as unknown as MessageType<ListAllRunsRequest>;
(ListAllRunsRequest as MutableMessageType<ListAllRunsRequest>).runtime = proto3;
(ListAllRunsRequest as MutableMessageType<ListAllRunsRequest>).typeName = "aiserver.v1.ListAllRunsRequest";
(ListAllRunsRequest as MutableMessageType<ListAllRunsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "limit", kind: "scalar", T: 5, opt: true },
  { no: 3, name: "cursor", kind: "scalar", T: 9, opt: true },
  { no: 4, name: "run_kind", kind: "enum", T: proto3.getEnumType(AutomationRunListKind) },
  { no: 5, name: "team_id", kind: "scalar", T: 5, opt: true },
  {
    no: 6,
    name: "owner_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var ListAllRunsResponse$Runtime = (() => class _ListAllRunsResponse extends Message<_ListAllRunsResponse> {
  declare runs: AutomationRun[];
  declare nextCursor?: string;
  constructor(data?: PartialMessage<_ListAllRunsResponse>) {
    super();
    this.runs = [];
    proto3.util.initPartial(data, this as _ListAllRunsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAllRunsResponse {
    return new _ListAllRunsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAllRunsResponse {
    return new _ListAllRunsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAllRunsResponse {
    return new _ListAllRunsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAllRunsResponse | PlainMessage<_ListAllRunsResponse> | undefined | null, b2: _ListAllRunsResponse | PlainMessage<_ListAllRunsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListAllRunsResponse as unknown as MessageType<_ListAllRunsResponse>, a, b2);
  }
})();
export type ListAllRunsResponse = InstanceType<typeof ListAllRunsResponse$Runtime>;
var ListAllRunsResponse: MessageType<ListAllRunsResponse> = ListAllRunsResponse$Runtime as unknown as MessageType<ListAllRunsResponse>;
(ListAllRunsResponse as MutableMessageType<ListAllRunsResponse>).runtime = proto3;
(ListAllRunsResponse as MutableMessageType<ListAllRunsResponse>).typeName = "aiserver.v1.ListAllRunsResponse";
(ListAllRunsResponse as MutableMessageType<ListAllRunsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "runs", kind: "message", T: AutomationRun, repeated: true },
  { no: 2, name: "next_cursor", kind: "scalar", T: 9, opt: true }
]);
var TestAutomationFilterRequest$Runtime = (() => class _TestAutomationFilterRequest extends Message<_TestAutomationFilterRequest> {
  declare automationId: string;
  declare triggerIndex?: number;
  declare testRepo?: string;
  declare testBranch?: string;
  declare samplePayload: { case: "cron"; value: CronSamplePayload } | { case: "pullRequest"; value: PullRequestSamplePayload } | { case: "push"; value: PushSamplePayload } | { case: "slack"; value: SlackSamplePayload } | { case: "linear"; value: LinearSamplePayload } | { case: "ciCompleted"; value: CICompletedSamplePayload } | { case: "webhook"; value: WebhookSamplePayload } | { case: "slackChannelCreated"; value: SlackChannelCreatedSamplePayload } | { case: "pagerduty"; value: PagerDutySamplePayload } | { case: "sentry"; value: SentrySamplePayload } | { case: "microsoftTeams"; value: MicrosoftTeamsSamplePayload } | { case: "microsoftTeamsChannelCreated"; value: MicrosoftTeamsChannelCreatedSamplePayload } | { case: "slackReactionAdded"; value: SlackReactionAddedSamplePayload } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_TestAutomationFilterRequest>) {
    super();
    this.automationId = "";
    this.samplePayload = { case: void 0 };
    proto3.util.initPartial(data, this as _TestAutomationFilterRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TestAutomationFilterRequest {
    return new _TestAutomationFilterRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TestAutomationFilterRequest {
    return new _TestAutomationFilterRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TestAutomationFilterRequest {
    return new _TestAutomationFilterRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _TestAutomationFilterRequest | PlainMessage<_TestAutomationFilterRequest> | undefined | null, b2: _TestAutomationFilterRequest | PlainMessage<_TestAutomationFilterRequest> | undefined | null): boolean {
    return proto3.util.equals(_TestAutomationFilterRequest as unknown as MessageType<_TestAutomationFilterRequest>, a, b2);
  }
})();
export type TestAutomationFilterRequest = InstanceType<typeof TestAutomationFilterRequest$Runtime>;
var TestAutomationFilterRequest: MessageType<TestAutomationFilterRequest> = TestAutomationFilterRequest$Runtime as unknown as MessageType<TestAutomationFilterRequest>;
(TestAutomationFilterRequest as MutableMessageType<TestAutomationFilterRequest>).runtime = proto3;
(TestAutomationFilterRequest as MutableMessageType<TestAutomationFilterRequest>).typeName = "aiserver.v1.TestAutomationFilterRequest";
(TestAutomationFilterRequest as MutableMessageType<TestAutomationFilterRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "cron", kind: "message", T: CronSamplePayload, oneof: "sample_payload" },
  { no: 3, name: "pull_request", kind: "message", T: PullRequestSamplePayload, oneof: "sample_payload" },
  { no: 4, name: "push", kind: "message", T: PushSamplePayload, oneof: "sample_payload" },
  { no: 5, name: "slack", kind: "message", T: SlackSamplePayload, oneof: "sample_payload" },
  { no: 6, name: "linear", kind: "message", T: LinearSamplePayload, oneof: "sample_payload" },
  { no: 7, name: "ci_completed", kind: "message", T: CICompletedSamplePayload, oneof: "sample_payload" },
  { no: 8, name: "webhook", kind: "message", T: WebhookSamplePayload, oneof: "sample_payload" },
  { no: 9, name: "slack_channel_created", kind: "message", T: SlackChannelCreatedSamplePayload, oneof: "sample_payload" },
  { no: 10, name: "pagerduty", kind: "message", T: PagerDutySamplePayload, oneof: "sample_payload" },
  { no: 15, name: "sentry", kind: "message", T: SentrySamplePayload, oneof: "sample_payload" },
  { no: 16, name: "microsoft_teams", kind: "message", T: MicrosoftTeamsSamplePayload, oneof: "sample_payload" },
  { no: 17, name: "microsoft_teams_channel_created", kind: "message", T: MicrosoftTeamsChannelCreatedSamplePayload, oneof: "sample_payload" },
  { no: 18, name: "slack_reaction_added", kind: "message", T: SlackReactionAddedSamplePayload, oneof: "sample_payload" },
  { no: 11, name: "trigger_index", kind: "scalar", T: 5, opt: true },
  { no: 12, name: "test_repo", kind: "scalar", T: 9, opt: true },
  { no: 13, name: "test_branch", kind: "scalar", T: 9, opt: true }
]);
var TestAutomationFilterResponse$Runtime = (() => class _TestAutomationFilterResponse extends Message<_TestAutomationFilterResponse> {
  declare decision: AutomationFilterDecision;
  declare rationale?: string;
  declare errorMessage?: string;
  constructor(data?: PartialMessage<_TestAutomationFilterResponse>) {
    super();
    this.decision = AutomationFilterDecision.UNSPECIFIED;
    proto3.util.initPartial(data, this as _TestAutomationFilterResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _TestAutomationFilterResponse {
    return new _TestAutomationFilterResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _TestAutomationFilterResponse {
    return new _TestAutomationFilterResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _TestAutomationFilterResponse {
    return new _TestAutomationFilterResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _TestAutomationFilterResponse | PlainMessage<_TestAutomationFilterResponse> | undefined | null, b2: _TestAutomationFilterResponse | PlainMessage<_TestAutomationFilterResponse> | undefined | null): boolean {
    return proto3.util.equals(_TestAutomationFilterResponse as unknown as MessageType<_TestAutomationFilterResponse>, a, b2);
  }
})();
export type TestAutomationFilterResponse = InstanceType<typeof TestAutomationFilterResponse$Runtime>;
var TestAutomationFilterResponse: MessageType<TestAutomationFilterResponse> = TestAutomationFilterResponse$Runtime as unknown as MessageType<TestAutomationFilterResponse>;
(TestAutomationFilterResponse as MutableMessageType<TestAutomationFilterResponse>).runtime = proto3;
(TestAutomationFilterResponse as MutableMessageType<TestAutomationFilterResponse>).typeName = "aiserver.v1.TestAutomationFilterResponse";
(TestAutomationFilterResponse as MutableMessageType<TestAutomationFilterResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "decision", kind: "enum", T: proto3.getEnumType(AutomationFilterDecision) },
  { no: 2, name: "rationale", kind: "scalar", T: 9, opt: true },
  { no: 3, name: "error_message", kind: "scalar", T: 9, opt: true }
]);
var ListAutomationMemoriesRequest$Runtime = (() => class _ListAutomationMemoriesRequest extends Message<_ListAutomationMemoriesRequest> {
  declare automationId: string;
  constructor(data?: PartialMessage<_ListAutomationMemoriesRequest>) {
    super();
    this.automationId = "";
    proto3.util.initPartial(data, this as _ListAutomationMemoriesRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationMemoriesRequest {
    return new _ListAutomationMemoriesRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationMemoriesRequest {
    return new _ListAutomationMemoriesRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationMemoriesRequest {
    return new _ListAutomationMemoriesRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationMemoriesRequest | PlainMessage<_ListAutomationMemoriesRequest> | undefined | null, b2: _ListAutomationMemoriesRequest | PlainMessage<_ListAutomationMemoriesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationMemoriesRequest as unknown as MessageType<_ListAutomationMemoriesRequest>, a, b2);
  }
})();
export type ListAutomationMemoriesRequest = InstanceType<typeof ListAutomationMemoriesRequest$Runtime>;
var ListAutomationMemoriesRequest: MessageType<ListAutomationMemoriesRequest> = ListAutomationMemoriesRequest$Runtime as unknown as MessageType<ListAutomationMemoriesRequest>;
(ListAutomationMemoriesRequest as MutableMessageType<ListAutomationMemoriesRequest>).runtime = proto3;
(ListAutomationMemoriesRequest as MutableMessageType<ListAutomationMemoriesRequest>).typeName = "aiserver.v1.ListAutomationMemoriesRequest";
(ListAutomationMemoriesRequest as MutableMessageType<ListAutomationMemoriesRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ListAutomationMemoriesResponse$Runtime = (() => class _ListAutomationMemoriesResponse extends Message<_ListAutomationMemoriesResponse> {
  declare files: string[];
  constructor(data?: PartialMessage<_ListAutomationMemoriesResponse>) {
    super();
    this.files = [];
    proto3.util.initPartial(data, this as _ListAutomationMemoriesResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListAutomationMemoriesResponse {
    return new _ListAutomationMemoriesResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListAutomationMemoriesResponse {
    return new _ListAutomationMemoriesResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListAutomationMemoriesResponse {
    return new _ListAutomationMemoriesResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListAutomationMemoriesResponse | PlainMessage<_ListAutomationMemoriesResponse> | undefined | null, b2: _ListAutomationMemoriesResponse | PlainMessage<_ListAutomationMemoriesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListAutomationMemoriesResponse as unknown as MessageType<_ListAutomationMemoriesResponse>, a, b2);
  }
})();
export type ListAutomationMemoriesResponse = InstanceType<typeof ListAutomationMemoriesResponse$Runtime>;
var ListAutomationMemoriesResponse: MessageType<ListAutomationMemoriesResponse> = ListAutomationMemoriesResponse$Runtime as unknown as MessageType<ListAutomationMemoriesResponse>;
(ListAutomationMemoriesResponse as MutableMessageType<ListAutomationMemoriesResponse>).runtime = proto3;
(ListAutomationMemoriesResponse as MutableMessageType<ListAutomationMemoriesResponse>).typeName = "aiserver.v1.ListAutomationMemoriesResponse";
(ListAutomationMemoriesResponse as MutableMessageType<ListAutomationMemoriesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "files", kind: "scalar", T: 9, repeated: true }
]);
var GetAutomationMemoryRequest$Runtime = (() => class _GetAutomationMemoryRequest extends Message<_GetAutomationMemoryRequest> {
  declare automationId: string;
  declare file: string;
  constructor(data?: PartialMessage<_GetAutomationMemoryRequest>) {
    super();
    this.automationId = "";
    this.file = "";
    proto3.util.initPartial(data, this as _GetAutomationMemoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationMemoryRequest {
    return new _GetAutomationMemoryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationMemoryRequest {
    return new _GetAutomationMemoryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationMemoryRequest {
    return new _GetAutomationMemoryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationMemoryRequest | PlainMessage<_GetAutomationMemoryRequest> | undefined | null, b2: _GetAutomationMemoryRequest | PlainMessage<_GetAutomationMemoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationMemoryRequest as unknown as MessageType<_GetAutomationMemoryRequest>, a, b2);
  }
})();
export type GetAutomationMemoryRequest = InstanceType<typeof GetAutomationMemoryRequest$Runtime>;
var GetAutomationMemoryRequest: MessageType<GetAutomationMemoryRequest> = GetAutomationMemoryRequest$Runtime as unknown as MessageType<GetAutomationMemoryRequest>;
(GetAutomationMemoryRequest as MutableMessageType<GetAutomationMemoryRequest>).runtime = proto3;
(GetAutomationMemoryRequest as MutableMessageType<GetAutomationMemoryRequest>).typeName = "aiserver.v1.GetAutomationMemoryRequest";
(GetAutomationMemoryRequest as MutableMessageType<GetAutomationMemoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetAutomationMemoryResponse$Runtime = (() => class _GetAutomationMemoryResponse extends Message<_GetAutomationMemoryResponse> {
  declare file: string;
  declare content: string;
  declare exists: boolean;
  declare version?: string;
  constructor(data?: PartialMessage<_GetAutomationMemoryResponse>) {
    super();
    this.file = "";
    this.content = "";
    this.exists = false;
    proto3.util.initPartial(data, this as _GetAutomationMemoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetAutomationMemoryResponse {
    return new _GetAutomationMemoryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetAutomationMemoryResponse {
    return new _GetAutomationMemoryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetAutomationMemoryResponse {
    return new _GetAutomationMemoryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetAutomationMemoryResponse | PlainMessage<_GetAutomationMemoryResponse> | undefined | null, b2: _GetAutomationMemoryResponse | PlainMessage<_GetAutomationMemoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetAutomationMemoryResponse as unknown as MessageType<_GetAutomationMemoryResponse>, a, b2);
  }
})();
export type GetAutomationMemoryResponse = InstanceType<typeof GetAutomationMemoryResponse$Runtime>;
var GetAutomationMemoryResponse: MessageType<GetAutomationMemoryResponse> = GetAutomationMemoryResponse$Runtime as unknown as MessageType<GetAutomationMemoryResponse>;
(GetAutomationMemoryResponse as MutableMessageType<GetAutomationMemoryResponse>).runtime = proto3;
(GetAutomationMemoryResponse as MutableMessageType<GetAutomationMemoryResponse>).typeName = "aiserver.v1.GetAutomationMemoryResponse";
(GetAutomationMemoryResponse as MutableMessageType<GetAutomationMemoryResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
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
  },
  {
    no: 3,
    name: "exists",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "version", kind: "scalar", T: 9, opt: true }
]);
var UpdateAutomationMemoryRequest$Runtime = (() => class _UpdateAutomationMemoryRequest extends Message<_UpdateAutomationMemoryRequest> {
  declare automationId: string;
  declare file: string;
  declare content: string;
  declare expected: { case: "expectedVersion"; value: string } | { case: "expectMissing"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_UpdateAutomationMemoryRequest>) {
    super();
    this.automationId = "";
    this.file = "";
    this.content = "";
    this.expected = { case: void 0 };
    proto3.util.initPartial(data, this as _UpdateAutomationMemoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationMemoryRequest {
    return new _UpdateAutomationMemoryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationMemoryRequest {
    return new _UpdateAutomationMemoryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationMemoryRequest {
    return new _UpdateAutomationMemoryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationMemoryRequest | PlainMessage<_UpdateAutomationMemoryRequest> | undefined | null, b2: _UpdateAutomationMemoryRequest | PlainMessage<_UpdateAutomationMemoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationMemoryRequest as unknown as MessageType<_UpdateAutomationMemoryRequest>, a, b2);
  }
})();
export type UpdateAutomationMemoryRequest = InstanceType<typeof UpdateAutomationMemoryRequest$Runtime>;
var UpdateAutomationMemoryRequest: MessageType<UpdateAutomationMemoryRequest> = UpdateAutomationMemoryRequest$Runtime as unknown as MessageType<UpdateAutomationMemoryRequest>;
(UpdateAutomationMemoryRequest as MutableMessageType<UpdateAutomationMemoryRequest>).runtime = proto3;
(UpdateAutomationMemoryRequest as MutableMessageType<UpdateAutomationMemoryRequest>).typeName = "aiserver.v1.UpdateAutomationMemoryRequest";
(UpdateAutomationMemoryRequest as MutableMessageType<UpdateAutomationMemoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "expected_version", kind: "scalar", T: 9, oneof: "expected" },
  { no: 5, name: "expect_missing", kind: "scalar", T: 8, oneof: "expected" }
]);
var UpdateAutomationMemoryResponse$Runtime = (() => class _UpdateAutomationMemoryResponse extends Message<_UpdateAutomationMemoryResponse> {
  declare file: string;
  declare content: string;
  declare version?: string;
  declare conflict: boolean;
  constructor(data?: PartialMessage<_UpdateAutomationMemoryResponse>) {
    super();
    this.file = "";
    this.content = "";
    this.conflict = false;
    proto3.util.initPartial(data, this as _UpdateAutomationMemoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateAutomationMemoryResponse {
    return new _UpdateAutomationMemoryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateAutomationMemoryResponse {
    return new _UpdateAutomationMemoryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateAutomationMemoryResponse {
    return new _UpdateAutomationMemoryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateAutomationMemoryResponse | PlainMessage<_UpdateAutomationMemoryResponse> | undefined | null, b2: _UpdateAutomationMemoryResponse | PlainMessage<_UpdateAutomationMemoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateAutomationMemoryResponse as unknown as MessageType<_UpdateAutomationMemoryResponse>, a, b2);
  }
})();
export type UpdateAutomationMemoryResponse = InstanceType<typeof UpdateAutomationMemoryResponse$Runtime>;
var UpdateAutomationMemoryResponse: MessageType<UpdateAutomationMemoryResponse> = UpdateAutomationMemoryResponse$Runtime as unknown as MessageType<UpdateAutomationMemoryResponse>;
(UpdateAutomationMemoryResponse as MutableMessageType<UpdateAutomationMemoryResponse>).runtime = proto3;
(UpdateAutomationMemoryResponse as MutableMessageType<UpdateAutomationMemoryResponse>).typeName = "aiserver.v1.UpdateAutomationMemoryResponse";
(UpdateAutomationMemoryResponse as MutableMessageType<UpdateAutomationMemoryResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
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
  },
  { no: 3, name: "version", kind: "scalar", T: 9, opt: true },
  {
    no: 4,
    name: "conflict",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var DeleteAutomationMemoryRequest$Runtime = (() => class _DeleteAutomationMemoryRequest extends Message<_DeleteAutomationMemoryRequest> {
  declare automationId: string;
  declare file: string;
  declare expected: { case: "expectedVersion"; value: string } | { case: "expectMissing"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_DeleteAutomationMemoryRequest>) {
    super();
    this.automationId = "";
    this.file = "";
    this.expected = { case: void 0 };
    proto3.util.initPartial(data, this as _DeleteAutomationMemoryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DeleteAutomationMemoryRequest {
    return new _DeleteAutomationMemoryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DeleteAutomationMemoryRequest {
    return new _DeleteAutomationMemoryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DeleteAutomationMemoryRequest {
    return new _DeleteAutomationMemoryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DeleteAutomationMemoryRequest | PlainMessage<_DeleteAutomationMemoryRequest> | undefined | null, b2: _DeleteAutomationMemoryRequest | PlainMessage<_DeleteAutomationMemoryRequest> | undefined | null): boolean {
    return proto3.util.equals(_DeleteAutomationMemoryRequest as unknown as MessageType<_DeleteAutomationMemoryRequest>, a, b2);
  }
})();
export type DeleteAutomationMemoryRequest = InstanceType<typeof DeleteAutomationMemoryRequest$Runtime>;
var DeleteAutomationMemoryRequest: MessageType<DeleteAutomationMemoryRequest> = DeleteAutomationMemoryRequest$Runtime as unknown as MessageType<DeleteAutomationMemoryRequest>;
(DeleteAutomationMemoryRequest as MutableMessageType<DeleteAutomationMemoryRequest>).runtime = proto3;
(DeleteAutomationMemoryRequest as MutableMessageType<DeleteAutomationMemoryRequest>).typeName = "aiserver.v1.DeleteAutomationMemoryRequest";
(DeleteAutomationMemoryRequest as MutableMessageType<DeleteAutomationMemoryRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "expected_version", kind: "scalar", T: 9, oneof: "expected" },
  { no: 4, name: "expect_missing", kind: "scalar", T: 8, oneof: "expected" }
]);
var DeleteAutomationMemoryResponse$Runtime = (() => class _DeleteAutomationMemoryResponse extends Message<_DeleteAutomationMemoryResponse> {
  declare file: string;
  declare conflict: boolean;
  declare content: string;
  declare version?: string;
  declare files: string[];
  constructor(data?: PartialMessage<_DeleteAutomationMemoryResponse>) {
    super();
    this.file = "";
    this.conflict = false;
    this.content = "";
    this.files = [];
    proto3.util.initPartial(data, this as _DeleteAutomationMemoryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DeleteAutomationMemoryResponse {
    return new _DeleteAutomationMemoryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DeleteAutomationMemoryResponse {
    return new _DeleteAutomationMemoryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DeleteAutomationMemoryResponse {
    return new _DeleteAutomationMemoryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DeleteAutomationMemoryResponse | PlainMessage<_DeleteAutomationMemoryResponse> | undefined | null, b2: _DeleteAutomationMemoryResponse | PlainMessage<_DeleteAutomationMemoryResponse> | undefined | null): boolean {
    return proto3.util.equals(_DeleteAutomationMemoryResponse as unknown as MessageType<_DeleteAutomationMemoryResponse>, a, b2);
  }
})();
export type DeleteAutomationMemoryResponse = InstanceType<typeof DeleteAutomationMemoryResponse$Runtime>;
var DeleteAutomationMemoryResponse: MessageType<DeleteAutomationMemoryResponse> = DeleteAutomationMemoryResponse$Runtime as unknown as MessageType<DeleteAutomationMemoryResponse>;
(DeleteAutomationMemoryResponse as MutableMessageType<DeleteAutomationMemoryResponse>).runtime = proto3;
(DeleteAutomationMemoryResponse as MutableMessageType<DeleteAutomationMemoryResponse>).typeName = "aiserver.v1.DeleteAutomationMemoryResponse";
(DeleteAutomationMemoryResponse as MutableMessageType<DeleteAutomationMemoryResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "file",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "conflict",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "version", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "files", kind: "scalar", T: 9, repeated: true }
]);
var AutomationRunFailureDetails$Runtime = (() => class _AutomationRunFailureDetails extends Message<_AutomationRunFailureDetails> {
  declare code: AutomationRunFailureCode;
  declare title: string;
  declare message: string;
  declare ctaLabel?: string;
  declare ctaPath?: string;
  constructor(data?: PartialMessage<_AutomationRunFailureDetails>) {
    super();
    this.code = AutomationRunFailureCode.UNSPECIFIED;
    this.title = "";
    this.message = "";
    proto3.util.initPartial(data, this as _AutomationRunFailureDetails);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationRunFailureDetails {
    return new _AutomationRunFailureDetails().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationRunFailureDetails {
    return new _AutomationRunFailureDetails().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationRunFailureDetails {
    return new _AutomationRunFailureDetails().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationRunFailureDetails | PlainMessage<_AutomationRunFailureDetails> | undefined | null, b2: _AutomationRunFailureDetails | PlainMessage<_AutomationRunFailureDetails> | undefined | null): boolean {
    return proto3.util.equals(_AutomationRunFailureDetails as unknown as MessageType<_AutomationRunFailureDetails>, a, b2);
  }
})();
export type AutomationRunFailureDetails = InstanceType<typeof AutomationRunFailureDetails$Runtime>;
var AutomationRunFailureDetails: MessageType<AutomationRunFailureDetails> = AutomationRunFailureDetails$Runtime as unknown as MessageType<AutomationRunFailureDetails>;
(AutomationRunFailureDetails as MutableMessageType<AutomationRunFailureDetails>).runtime = proto3;
(AutomationRunFailureDetails as MutableMessageType<AutomationRunFailureDetails>).typeName = "aiserver.v1.AutomationRunFailureDetails";
(AutomationRunFailureDetails as MutableMessageType<AutomationRunFailureDetails>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(AutomationRunFailureCode) },
  {
    no: 2,
    name: "title",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "cta_label", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "cta_path", kind: "scalar", T: 9, opt: true }
]);
var AutomationRun$Runtime = (() => class _AutomationRun extends Message<_AutomationRun> {
  declare backgroundComposerId: string;
  declare namespacedWorkflowId: string;
  declare workflow?: Workflow;
  declare createdAt: bigint;
  declare updatedAt: bigint;
  declare platformActions?: PlatformActionsPayload;
  declare triggerMetadata?: TriggerMetadataPayload;
  declare uuid: string;
  declare automationId: string;
  declare status: AutomationRunStatus;
  declare errorMessage: string;
  declare failureDetails?: AutomationRunFailureDetails;
  declare completedAt?: bigint;
  declare filterDecision?: AutomationFilterDecision;
  declare filterRationale?: string;
  declare filterErrorMessage?: string;
  declare canRetry: boolean;
  declare retryIneligibleReason?: string;
  declare retryIneligibleReasonCode?: AutomationRunRetryIneligibleReason;
  declare skipReason?: string;
  constructor(data?: PartialMessage<_AutomationRun>) {
    super();
    this.backgroundComposerId = "";
    this.namespacedWorkflowId = "";
    this.createdAt = protoInt64.zero;
    this.updatedAt = protoInt64.zero;
    this.uuid = "";
    this.automationId = "";
    this.status = AutomationRunStatus.UNSPECIFIED;
    this.errorMessage = "";
    this.canRetry = false;
    proto3.util.initPartial(data, this as _AutomationRun);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationRun {
    return new _AutomationRun().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationRun {
    return new _AutomationRun().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationRun {
    return new _AutomationRun().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationRun | PlainMessage<_AutomationRun> | undefined | null, b2: _AutomationRun | PlainMessage<_AutomationRun> | undefined | null): boolean {
    return proto3.util.equals(_AutomationRun as unknown as MessageType<_AutomationRun>, a, b2);
  }
})();
export type AutomationRun = InstanceType<typeof AutomationRun$Runtime>;
var AutomationRun: MessageType<AutomationRun> = AutomationRun$Runtime as unknown as MessageType<AutomationRun>;
(AutomationRun as MutableMessageType<AutomationRun>).runtime = proto3;
(AutomationRun as MutableMessageType<AutomationRun>).typeName = "aiserver.v1.AutomationRun";
(AutomationRun as MutableMessageType<AutomationRun>).fields = proto3.util.newFieldList(() => [
  {
    no: 3,
    name: "background_composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "namespaced_workflow_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "workflow", kind: "message", T: Workflow },
  {
    no: 6,
    name: "created_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 7,
    name: "updated_at",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  { no: 8, name: "platform_actions", kind: "message", T: PlatformActionsPayload, opt: true },
  { no: 9, name: "trigger_metadata", kind: "message", T: TriggerMetadataPayload, opt: true },
  {
    no: 10,
    name: "uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 11,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 12, name: "status", kind: "enum", T: proto3.getEnumType(AutomationRunStatus) },
  {
    no: 13,
    name: "error_message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 14, name: "failure_details", kind: "message", T: AutomationRunFailureDetails, opt: true },
  { no: 15, name: "completed_at", kind: "scalar", T: 3, opt: true },
  { no: 16, name: "filter_decision", kind: "enum", T: proto3.getEnumType(AutomationFilterDecision), opt: true },
  { no: 17, name: "filter_rationale", kind: "scalar", T: 9, opt: true },
  { no: 18, name: "filter_error_message", kind: "scalar", T: 9, opt: true },
  {
    no: 19,
    name: "can_retry",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 20, name: "retry_ineligible_reason", kind: "scalar", T: 9, opt: true },
  { no: 21, name: "retry_ineligible_reason_code", kind: "enum", T: proto3.getEnumType(AutomationRunRetryIneligibleReason), opt: true },
  { no: 22, name: "skip_reason", kind: "scalar", T: 9, opt: true }
]);
var AutomationRunLaunchStartingRef$Runtime = (() => class _AutomationRunLaunchStartingRef extends Message<_AutomationRunLaunchStartingRef> {
  declare repoUrl: string;
  declare ref: string;
  declare baseRef?: string;
  constructor(data?: PartialMessage<_AutomationRunLaunchStartingRef>) {
    super();
    this.repoUrl = "";
    this.ref = "";
    proto3.util.initPartial(data, this as _AutomationRunLaunchStartingRef);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationRunLaunchStartingRef {
    return new _AutomationRunLaunchStartingRef().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationRunLaunchStartingRef {
    return new _AutomationRunLaunchStartingRef().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationRunLaunchStartingRef {
    return new _AutomationRunLaunchStartingRef().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationRunLaunchStartingRef | PlainMessage<_AutomationRunLaunchStartingRef> | undefined | null, b2: _AutomationRunLaunchStartingRef | PlainMessage<_AutomationRunLaunchStartingRef> | undefined | null): boolean {
    return proto3.util.equals(_AutomationRunLaunchStartingRef as unknown as MessageType<_AutomationRunLaunchStartingRef>, a, b2);
  }
})();
export type AutomationRunLaunchStartingRef = InstanceType<typeof AutomationRunLaunchStartingRef$Runtime>;
var AutomationRunLaunchStartingRef: MessageType<AutomationRunLaunchStartingRef> = AutomationRunLaunchStartingRef$Runtime as unknown as MessageType<AutomationRunLaunchStartingRef>;
(AutomationRunLaunchStartingRef as MutableMessageType<AutomationRunLaunchStartingRef>).runtime = proto3;
(AutomationRunLaunchStartingRef as MutableMessageType<AutomationRunLaunchStartingRef>).typeName = "aiserver.v1.AutomationRunLaunchStartingRef";
(AutomationRunLaunchStartingRef as MutableMessageType<AutomationRunLaunchStartingRef>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "ref",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "base_ref", kind: "scalar", T: 9, opt: true }
]);
var AutomationRunLaunchContext$Runtime = (() => class _AutomationRunLaunchContext extends Message<_AutomationRunLaunchContext> {
  declare contextText: string;
  declare triggerContextJson: string;
  declare repoUrl: string;
  declare branch: string;
  declare baseBranch: string;
  declare startingRefs: AutomationRunLaunchStartingRef[];
  constructor(data?: PartialMessage<_AutomationRunLaunchContext>) {
    super();
    this.contextText = "";
    this.triggerContextJson = "";
    this.repoUrl = "";
    this.branch = "";
    this.baseBranch = "";
    this.startingRefs = [];
    proto3.util.initPartial(data, this as _AutomationRunLaunchContext);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _AutomationRunLaunchContext {
    return new _AutomationRunLaunchContext().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _AutomationRunLaunchContext {
    return new _AutomationRunLaunchContext().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _AutomationRunLaunchContext {
    return new _AutomationRunLaunchContext().fromJsonString(jsonString, options2);
  }
  static equals(a: _AutomationRunLaunchContext | PlainMessage<_AutomationRunLaunchContext> | undefined | null, b2: _AutomationRunLaunchContext | PlainMessage<_AutomationRunLaunchContext> | undefined | null): boolean {
    return proto3.util.equals(_AutomationRunLaunchContext as unknown as MessageType<_AutomationRunLaunchContext>, a, b2);
  }
})();
export type AutomationRunLaunchContext = InstanceType<typeof AutomationRunLaunchContext$Runtime>;
var AutomationRunLaunchContext: MessageType<AutomationRunLaunchContext> = AutomationRunLaunchContext$Runtime as unknown as MessageType<AutomationRunLaunchContext>;
(AutomationRunLaunchContext as MutableMessageType<AutomationRunLaunchContext>).runtime = proto3;
(AutomationRunLaunchContext as MutableMessageType<AutomationRunLaunchContext>).typeName = "aiserver.v1.AutomationRunLaunchContext";
(AutomationRunLaunchContext as MutableMessageType<AutomationRunLaunchContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "context_text",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "trigger_context_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "repo_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 4,
    name: "branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 5,
    name: "base_branch",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 6, name: "starting_refs", kind: "message", T: AutomationRunLaunchStartingRef, repeated: true }
]);
var GetRunSummaryRequest$Runtime = (() => class _GetRunSummaryRequest extends Message<_GetRunSummaryRequest> {
  declare automationId?: string;
  declare teamId?: number;
  declare ownerOnly: boolean;
  constructor(data?: PartialMessage<_GetRunSummaryRequest>) {
    super();
    this.ownerOnly = false;
    proto3.util.initPartial(data, this as _GetRunSummaryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetRunSummaryRequest {
    return new _GetRunSummaryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetRunSummaryRequest {
    return new _GetRunSummaryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetRunSummaryRequest {
    return new _GetRunSummaryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetRunSummaryRequest | PlainMessage<_GetRunSummaryRequest> | undefined | null, b2: _GetRunSummaryRequest | PlainMessage<_GetRunSummaryRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetRunSummaryRequest as unknown as MessageType<_GetRunSummaryRequest>, a, b2);
  }
})();
export type GetRunSummaryRequest = InstanceType<typeof GetRunSummaryRequest$Runtime>;
var GetRunSummaryRequest: MessageType<GetRunSummaryRequest> = GetRunSummaryRequest$Runtime as unknown as MessageType<GetRunSummaryRequest>;
(GetRunSummaryRequest as MutableMessageType<GetRunSummaryRequest>).runtime = proto3;
(GetRunSummaryRequest as MutableMessageType<GetRunSummaryRequest>).typeName = "aiserver.v1.GetRunSummaryRequest";
(GetRunSummaryRequest as MutableMessageType<GetRunSummaryRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "team_id", kind: "scalar", T: 5, opt: true },
  {
    no: 3,
    name: "owner_only",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetRunSummaryResponse$Runtime = (() => class _GetRunSummaryResponse extends Message<_GetRunSummaryResponse> {
  declare windows: RunSummaryWindow[];
  declare histogram: HistogramBucket[];
  constructor(data?: PartialMessage<_GetRunSummaryResponse>) {
    super();
    this.windows = [];
    this.histogram = [];
    proto3.util.initPartial(data, this as _GetRunSummaryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetRunSummaryResponse {
    return new _GetRunSummaryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetRunSummaryResponse {
    return new _GetRunSummaryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetRunSummaryResponse {
    return new _GetRunSummaryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetRunSummaryResponse | PlainMessage<_GetRunSummaryResponse> | undefined | null, b2: _GetRunSummaryResponse | PlainMessage<_GetRunSummaryResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetRunSummaryResponse as unknown as MessageType<_GetRunSummaryResponse>, a, b2);
  }
})();
export type GetRunSummaryResponse = InstanceType<typeof GetRunSummaryResponse$Runtime>;
var GetRunSummaryResponse: MessageType<GetRunSummaryResponse> = GetRunSummaryResponse$Runtime as unknown as MessageType<GetRunSummaryResponse>;
(GetRunSummaryResponse as MutableMessageType<GetRunSummaryResponse>).runtime = proto3;
(GetRunSummaryResponse as MutableMessageType<GetRunSummaryResponse>).typeName = "aiserver.v1.GetRunSummaryResponse";
(GetRunSummaryResponse as MutableMessageType<GetRunSummaryResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "windows", kind: "message", T: RunSummaryWindow, repeated: true },
  { no: 2, name: "histogram", kind: "message", T: HistogramBucket, repeated: true }
]);
var RunSummaryWindow$Runtime = (() => class _RunSummaryWindow extends Message<_RunSummaryWindow> {
  declare key: string;
  declare succeeded: number;
  declare failed: number;
  constructor(data?: PartialMessage<_RunSummaryWindow>) {
    super();
    this.key = "";
    this.succeeded = 0;
    this.failed = 0;
    proto3.util.initPartial(data, this as _RunSummaryWindow);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RunSummaryWindow {
    return new _RunSummaryWindow().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RunSummaryWindow {
    return new _RunSummaryWindow().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RunSummaryWindow {
    return new _RunSummaryWindow().fromJsonString(jsonString, options2);
  }
  static equals(a: _RunSummaryWindow | PlainMessage<_RunSummaryWindow> | undefined | null, b2: _RunSummaryWindow | PlainMessage<_RunSummaryWindow> | undefined | null): boolean {
    return proto3.util.equals(_RunSummaryWindow as unknown as MessageType<_RunSummaryWindow>, a, b2);
  }
})();
export type RunSummaryWindow = InstanceType<typeof RunSummaryWindow$Runtime>;
var RunSummaryWindow: MessageType<RunSummaryWindow> = RunSummaryWindow$Runtime as unknown as MessageType<RunSummaryWindow>;
(RunSummaryWindow as MutableMessageType<RunSummaryWindow>).runtime = proto3;
(RunSummaryWindow as MutableMessageType<RunSummaryWindow>).typeName = "aiserver.v1.RunSummaryWindow";
(RunSummaryWindow as MutableMessageType<RunSummaryWindow>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "succeeded",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 3,
    name: "failed",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var HistogramBucket$Runtime = (() => class _HistogramBucket extends Message<_HistogramBucket> {
  declare startTime: bigint;
  declare count: number;
  constructor(data?: PartialMessage<_HistogramBucket>) {
    super();
    this.startTime = protoInt64.zero;
    this.count = 0;
    proto3.util.initPartial(data, this as _HistogramBucket);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _HistogramBucket {
    return new _HistogramBucket().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _HistogramBucket {
    return new _HistogramBucket().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _HistogramBucket {
    return new _HistogramBucket().fromJsonString(jsonString, options2);
  }
  static equals(a: _HistogramBucket | PlainMessage<_HistogramBucket> | undefined | null, b2: _HistogramBucket | PlainMessage<_HistogramBucket> | undefined | null): boolean {
    return proto3.util.equals(_HistogramBucket as unknown as MessageType<_HistogramBucket>, a, b2);
  }
})();
export type HistogramBucket = InstanceType<typeof HistogramBucket$Runtime>;
var HistogramBucket: MessageType<HistogramBucket> = HistogramBucket$Runtime as unknown as MessageType<HistogramBucket>;
(HistogramBucket as MutableMessageType<HistogramBucket>).runtime = proto3;
(HistogramBucket as MutableMessageType<HistogramBucket>).typeName = "aiserver.v1.HistogramBucket";
(HistogramBucket as MutableMessageType<HistogramBucket>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "start_time",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetSecuritybotResolutionStatsRequest$Runtime = (() => class _GetSecuritybotResolutionStatsRequest extends Message<_GetSecuritybotResolutionStatsRequest> {
  declare automationId?: string;
  declare teamId?: number;
  constructor(data?: PartialMessage<_GetSecuritybotResolutionStatsRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetSecuritybotResolutionStatsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSecuritybotResolutionStatsRequest {
    return new _GetSecuritybotResolutionStatsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSecuritybotResolutionStatsRequest {
    return new _GetSecuritybotResolutionStatsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSecuritybotResolutionStatsRequest {
    return new _GetSecuritybotResolutionStatsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSecuritybotResolutionStatsRequest | PlainMessage<_GetSecuritybotResolutionStatsRequest> | undefined | null, b2: _GetSecuritybotResolutionStatsRequest | PlainMessage<_GetSecuritybotResolutionStatsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSecuritybotResolutionStatsRequest as unknown as MessageType<_GetSecuritybotResolutionStatsRequest>, a, b2);
  }
})();
export type GetSecuritybotResolutionStatsRequest = InstanceType<typeof GetSecuritybotResolutionStatsRequest$Runtime>;
var GetSecuritybotResolutionStatsRequest: MessageType<GetSecuritybotResolutionStatsRequest> = GetSecuritybotResolutionStatsRequest$Runtime as unknown as MessageType<GetSecuritybotResolutionStatsRequest>;
(GetSecuritybotResolutionStatsRequest as MutableMessageType<GetSecuritybotResolutionStatsRequest>).runtime = proto3;
(GetSecuritybotResolutionStatsRequest as MutableMessageType<GetSecuritybotResolutionStatsRequest>).typeName = "aiserver.v1.GetSecuritybotResolutionStatsRequest";
(GetSecuritybotResolutionStatsRequest as MutableMessageType<GetSecuritybotResolutionStatsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var GetSecuritybotResolutionStatsResponse$Runtime = (() => class _GetSecuritybotResolutionStatsResponse extends Message<_GetSecuritybotResolutionStatsResponse> {
  declare vulnerabilitiesCount: number;
  declare fixedCount: number;
  declare automationCount: number;
  constructor(data?: PartialMessage<_GetSecuritybotResolutionStatsResponse>) {
    super();
    this.vulnerabilitiesCount = 0;
    this.fixedCount = 0;
    this.automationCount = 0;
    proto3.util.initPartial(data, this as _GetSecuritybotResolutionStatsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSecuritybotResolutionStatsResponse {
    return new _GetSecuritybotResolutionStatsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSecuritybotResolutionStatsResponse {
    return new _GetSecuritybotResolutionStatsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSecuritybotResolutionStatsResponse {
    return new _GetSecuritybotResolutionStatsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSecuritybotResolutionStatsResponse | PlainMessage<_GetSecuritybotResolutionStatsResponse> | undefined | null, b2: _GetSecuritybotResolutionStatsResponse | PlainMessage<_GetSecuritybotResolutionStatsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSecuritybotResolutionStatsResponse as unknown as MessageType<_GetSecuritybotResolutionStatsResponse>, a, b2);
  }
})();
export type GetSecuritybotResolutionStatsResponse = InstanceType<typeof GetSecuritybotResolutionStatsResponse$Runtime>;
var GetSecuritybotResolutionStatsResponse: MessageType<GetSecuritybotResolutionStatsResponse> = GetSecuritybotResolutionStatsResponse$Runtime as unknown as MessageType<GetSecuritybotResolutionStatsResponse>;
(GetSecuritybotResolutionStatsResponse as MutableMessageType<GetSecuritybotResolutionStatsResponse>).runtime = proto3;
(GetSecuritybotResolutionStatsResponse as MutableMessageType<GetSecuritybotResolutionStatsResponse>).typeName = "aiserver.v1.GetSecuritybotResolutionStatsResponse";
(GetSecuritybotResolutionStatsResponse as MutableMessageType<GetSecuritybotResolutionStatsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "vulnerabilities_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "fixed_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "automation_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var GetApprovalAgentAnalyticsRequest$Runtime = (() => class _GetApprovalAgentAnalyticsRequest extends Message<_GetApprovalAgentAnalyticsRequest> {
  declare automationId?: string;
  declare teamId?: number;
  constructor(data?: PartialMessage<_GetApprovalAgentAnalyticsRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetApprovalAgentAnalyticsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetApprovalAgentAnalyticsRequest {
    return new _GetApprovalAgentAnalyticsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetApprovalAgentAnalyticsRequest {
    return new _GetApprovalAgentAnalyticsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetApprovalAgentAnalyticsRequest {
    return new _GetApprovalAgentAnalyticsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetApprovalAgentAnalyticsRequest | PlainMessage<_GetApprovalAgentAnalyticsRequest> | undefined | null, b2: _GetApprovalAgentAnalyticsRequest | PlainMessage<_GetApprovalAgentAnalyticsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetApprovalAgentAnalyticsRequest as unknown as MessageType<_GetApprovalAgentAnalyticsRequest>, a, b2);
  }
})();
export type GetApprovalAgentAnalyticsRequest = InstanceType<typeof GetApprovalAgentAnalyticsRequest$Runtime>;
var GetApprovalAgentAnalyticsRequest: MessageType<GetApprovalAgentAnalyticsRequest> = GetApprovalAgentAnalyticsRequest$Runtime as unknown as MessageType<GetApprovalAgentAnalyticsRequest>;
(GetApprovalAgentAnalyticsRequest as MutableMessageType<GetApprovalAgentAnalyticsRequest>).runtime = proto3;
(GetApprovalAgentAnalyticsRequest as MutableMessageType<GetApprovalAgentAnalyticsRequest>).typeName = "aiserver.v1.GetApprovalAgentAnalyticsRequest";
(GetApprovalAgentAnalyticsRequest as MutableMessageType<GetApprovalAgentAnalyticsRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "automation_id", kind: "scalar", T: 9, opt: true },
  { no: 2, name: "team_id", kind: "scalar", T: 5, opt: true }
]);
var GetApprovalAgentAnalyticsResponse$Runtime = (() => class _GetApprovalAgentAnalyticsResponse extends Message<_GetApprovalAgentAnalyticsResponse> {
  declare approvedPrCount: number;
  declare reviewedPrCount: number;
  declare automationCount: number;
  constructor(data?: PartialMessage<_GetApprovalAgentAnalyticsResponse>) {
    super();
    this.approvedPrCount = 0;
    this.reviewedPrCount = 0;
    this.automationCount = 0;
    proto3.util.initPartial(data, this as _GetApprovalAgentAnalyticsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetApprovalAgentAnalyticsResponse {
    return new _GetApprovalAgentAnalyticsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetApprovalAgentAnalyticsResponse {
    return new _GetApprovalAgentAnalyticsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetApprovalAgentAnalyticsResponse {
    return new _GetApprovalAgentAnalyticsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetApprovalAgentAnalyticsResponse | PlainMessage<_GetApprovalAgentAnalyticsResponse> | undefined | null, b2: _GetApprovalAgentAnalyticsResponse | PlainMessage<_GetApprovalAgentAnalyticsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetApprovalAgentAnalyticsResponse as unknown as MessageType<_GetApprovalAgentAnalyticsResponse>, a, b2);
  }
})();
export type GetApprovalAgentAnalyticsResponse = InstanceType<typeof GetApprovalAgentAnalyticsResponse$Runtime>;
var GetApprovalAgentAnalyticsResponse: MessageType<GetApprovalAgentAnalyticsResponse> = GetApprovalAgentAnalyticsResponse$Runtime as unknown as MessageType<GetApprovalAgentAnalyticsResponse>;
(GetApprovalAgentAnalyticsResponse as MutableMessageType<GetApprovalAgentAnalyticsResponse>).runtime = proto3;
(GetApprovalAgentAnalyticsResponse as MutableMessageType<GetApprovalAgentAnalyticsResponse>).typeName = "aiserver.v1.GetApprovalAgentAnalyticsResponse";
(GetApprovalAgentAnalyticsResponse as MutableMessageType<GetApprovalAgentAnalyticsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "approved_pr_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 2,
    name: "reviewed_pr_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  },
  {
    no: 3,
    name: "automation_count",
    kind: "scalar",
    T: 13
    /* ScalarType.UINT32 */
  }
]);
var ManagedAutomationTeamSettings$Runtime = (() => class _ManagedAutomationTeamSettings extends Message<_ManagedAutomationTeamSettings> {
  declare teamId: number;
  declare securityAgentDisabled: boolean;
  declare approvalAgentDisabled: boolean;
  constructor(data?: PartialMessage<_ManagedAutomationTeamSettings>) {
    super();
    this.teamId = 0;
    this.securityAgentDisabled = false;
    this.approvalAgentDisabled = false;
    proto3.util.initPartial(data, this as _ManagedAutomationTeamSettings);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ManagedAutomationTeamSettings {
    return new _ManagedAutomationTeamSettings().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ManagedAutomationTeamSettings {
    return new _ManagedAutomationTeamSettings().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ManagedAutomationTeamSettings {
    return new _ManagedAutomationTeamSettings().fromJsonString(jsonString, options2);
  }
  static equals(a: _ManagedAutomationTeamSettings | PlainMessage<_ManagedAutomationTeamSettings> | undefined | null, b2: _ManagedAutomationTeamSettings | PlainMessage<_ManagedAutomationTeamSettings> | undefined | null): boolean {
    return proto3.util.equals(_ManagedAutomationTeamSettings as unknown as MessageType<_ManagedAutomationTeamSettings>, a, b2);
  }
})();
export type ManagedAutomationTeamSettings = InstanceType<typeof ManagedAutomationTeamSettings$Runtime>;
var ManagedAutomationTeamSettings: MessageType<ManagedAutomationTeamSettings> = ManagedAutomationTeamSettings$Runtime as unknown as MessageType<ManagedAutomationTeamSettings>;
(ManagedAutomationTeamSettings as MutableMessageType<ManagedAutomationTeamSettings>).runtime = proto3;
(ManagedAutomationTeamSettings as MutableMessageType<ManagedAutomationTeamSettings>).typeName = "aiserver.v1.ManagedAutomationTeamSettings";
(ManagedAutomationTeamSettings as MutableMessageType<ManagedAutomationTeamSettings>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "security_agent_disabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "approval_agent_disabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetManagedAutomationTeamSettingsRequest$Runtime = (() => class _GetManagedAutomationTeamSettingsRequest extends Message<_GetManagedAutomationTeamSettingsRequest> {
  declare teamId: number;
  constructor(data?: PartialMessage<_GetManagedAutomationTeamSettingsRequest>) {
    super();
    this.teamId = 0;
    proto3.util.initPartial(data, this as _GetManagedAutomationTeamSettingsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetManagedAutomationTeamSettingsRequest {
    return new _GetManagedAutomationTeamSettingsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetManagedAutomationTeamSettingsRequest {
    return new _GetManagedAutomationTeamSettingsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetManagedAutomationTeamSettingsRequest {
    return new _GetManagedAutomationTeamSettingsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetManagedAutomationTeamSettingsRequest | PlainMessage<_GetManagedAutomationTeamSettingsRequest> | undefined | null, b2: _GetManagedAutomationTeamSettingsRequest | PlainMessage<_GetManagedAutomationTeamSettingsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetManagedAutomationTeamSettingsRequest as unknown as MessageType<_GetManagedAutomationTeamSettingsRequest>, a, b2);
  }
})();
export type GetManagedAutomationTeamSettingsRequest = InstanceType<typeof GetManagedAutomationTeamSettingsRequest$Runtime>;
var GetManagedAutomationTeamSettingsRequest: MessageType<GetManagedAutomationTeamSettingsRequest> = GetManagedAutomationTeamSettingsRequest$Runtime as unknown as MessageType<GetManagedAutomationTeamSettingsRequest>;
(GetManagedAutomationTeamSettingsRequest as MutableMessageType<GetManagedAutomationTeamSettingsRequest>).runtime = proto3;
(GetManagedAutomationTeamSettingsRequest as MutableMessageType<GetManagedAutomationTeamSettingsRequest>).typeName = "aiserver.v1.GetManagedAutomationTeamSettingsRequest";
(GetManagedAutomationTeamSettingsRequest as MutableMessageType<GetManagedAutomationTeamSettingsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var GetManagedAutomationTeamSettingsResponse$Runtime = (() => class _GetManagedAutomationTeamSettingsResponse extends Message<_GetManagedAutomationTeamSettingsResponse> {
  declare settings?: ManagedAutomationTeamSettings;
  constructor(data?: PartialMessage<_GetManagedAutomationTeamSettingsResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetManagedAutomationTeamSettingsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetManagedAutomationTeamSettingsResponse {
    return new _GetManagedAutomationTeamSettingsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetManagedAutomationTeamSettingsResponse {
    return new _GetManagedAutomationTeamSettingsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetManagedAutomationTeamSettingsResponse {
    return new _GetManagedAutomationTeamSettingsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetManagedAutomationTeamSettingsResponse | PlainMessage<_GetManagedAutomationTeamSettingsResponse> | undefined | null, b2: _GetManagedAutomationTeamSettingsResponse | PlainMessage<_GetManagedAutomationTeamSettingsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetManagedAutomationTeamSettingsResponse as unknown as MessageType<_GetManagedAutomationTeamSettingsResponse>, a, b2);
  }
})();
export type GetManagedAutomationTeamSettingsResponse = InstanceType<typeof GetManagedAutomationTeamSettingsResponse$Runtime>;
var GetManagedAutomationTeamSettingsResponse: MessageType<GetManagedAutomationTeamSettingsResponse> = GetManagedAutomationTeamSettingsResponse$Runtime as unknown as MessageType<GetManagedAutomationTeamSettingsResponse>;
(GetManagedAutomationTeamSettingsResponse as MutableMessageType<GetManagedAutomationTeamSettingsResponse>).runtime = proto3;
(GetManagedAutomationTeamSettingsResponse as MutableMessageType<GetManagedAutomationTeamSettingsResponse>).typeName = "aiserver.v1.GetManagedAutomationTeamSettingsResponse";
(GetManagedAutomationTeamSettingsResponse as MutableMessageType<GetManagedAutomationTeamSettingsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "settings", kind: "message", T: ManagedAutomationTeamSettings }
]);
var UpdateManagedAutomationTeamSettingsRequest$Runtime = (() => class _UpdateManagedAutomationTeamSettingsRequest extends Message<_UpdateManagedAutomationTeamSettingsRequest> {
  declare teamId: number;
  declare securityAgentDisabled: boolean;
  declare approvalAgentDisabled: boolean;
  declare securityAgentDisabledPatch?: boolean;
  declare approvalAgentDisabledPatch?: boolean;
  constructor(data?: PartialMessage<_UpdateManagedAutomationTeamSettingsRequest>) {
    super();
    this.teamId = 0;
    this.securityAgentDisabled = false;
    this.approvalAgentDisabled = false;
    proto3.util.initPartial(data, this as _UpdateManagedAutomationTeamSettingsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateManagedAutomationTeamSettingsRequest {
    return new _UpdateManagedAutomationTeamSettingsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateManagedAutomationTeamSettingsRequest {
    return new _UpdateManagedAutomationTeamSettingsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateManagedAutomationTeamSettingsRequest {
    return new _UpdateManagedAutomationTeamSettingsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateManagedAutomationTeamSettingsRequest | PlainMessage<_UpdateManagedAutomationTeamSettingsRequest> | undefined | null, b2: _UpdateManagedAutomationTeamSettingsRequest | PlainMessage<_UpdateManagedAutomationTeamSettingsRequest> | undefined | null): boolean {
    return proto3.util.equals(_UpdateManagedAutomationTeamSettingsRequest as unknown as MessageType<_UpdateManagedAutomationTeamSettingsRequest>, a, b2);
  }
})();
export type UpdateManagedAutomationTeamSettingsRequest = InstanceType<typeof UpdateManagedAutomationTeamSettingsRequest$Runtime>;
var UpdateManagedAutomationTeamSettingsRequest: MessageType<UpdateManagedAutomationTeamSettingsRequest> = UpdateManagedAutomationTeamSettingsRequest$Runtime as unknown as MessageType<UpdateManagedAutomationTeamSettingsRequest>;
(UpdateManagedAutomationTeamSettingsRequest as MutableMessageType<UpdateManagedAutomationTeamSettingsRequest>).runtime = proto3;
(UpdateManagedAutomationTeamSettingsRequest as MutableMessageType<UpdateManagedAutomationTeamSettingsRequest>).typeName = "aiserver.v1.UpdateManagedAutomationTeamSettingsRequest";
(UpdateManagedAutomationTeamSettingsRequest as MutableMessageType<UpdateManagedAutomationTeamSettingsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "security_agent_disabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 3,
    name: "approval_agent_disabled",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 4, name: "security_agent_disabled_patch", kind: "scalar", T: 8, opt: true },
  { no: 5, name: "approval_agent_disabled_patch", kind: "scalar", T: 8, opt: true }
]);
var UpdateManagedAutomationTeamSettingsResponse$Runtime = (() => class _UpdateManagedAutomationTeamSettingsResponse extends Message<_UpdateManagedAutomationTeamSettingsResponse> {
  declare settings?: ManagedAutomationTeamSettings;
  constructor(data?: PartialMessage<_UpdateManagedAutomationTeamSettingsResponse>) {
    super();
    proto3.util.initPartial(data, this as _UpdateManagedAutomationTeamSettingsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _UpdateManagedAutomationTeamSettingsResponse {
    return new _UpdateManagedAutomationTeamSettingsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _UpdateManagedAutomationTeamSettingsResponse {
    return new _UpdateManagedAutomationTeamSettingsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _UpdateManagedAutomationTeamSettingsResponse {
    return new _UpdateManagedAutomationTeamSettingsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _UpdateManagedAutomationTeamSettingsResponse | PlainMessage<_UpdateManagedAutomationTeamSettingsResponse> | undefined | null, b2: _UpdateManagedAutomationTeamSettingsResponse | PlainMessage<_UpdateManagedAutomationTeamSettingsResponse> | undefined | null): boolean {
    return proto3.util.equals(_UpdateManagedAutomationTeamSettingsResponse as unknown as MessageType<_UpdateManagedAutomationTeamSettingsResponse>, a, b2);
  }
})();
export type UpdateManagedAutomationTeamSettingsResponse = InstanceType<typeof UpdateManagedAutomationTeamSettingsResponse$Runtime>;
var UpdateManagedAutomationTeamSettingsResponse: MessageType<UpdateManagedAutomationTeamSettingsResponse> = UpdateManagedAutomationTeamSettingsResponse$Runtime as unknown as MessageType<UpdateManagedAutomationTeamSettingsResponse>;
(UpdateManagedAutomationTeamSettingsResponse as MutableMessageType<UpdateManagedAutomationTeamSettingsResponse>).runtime = proto3;
(UpdateManagedAutomationTeamSettingsResponse as MutableMessageType<UpdateManagedAutomationTeamSettingsResponse>).typeName = "aiserver.v1.UpdateManagedAutomationTeamSettingsResponse";
(UpdateManagedAutomationTeamSettingsResponse as MutableMessageType<UpdateManagedAutomationTeamSettingsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "settings", kind: "message", T: ManagedAutomationTeamSettings }
]);
var CancelAutomationRunRequest$Runtime = (() => class _CancelAutomationRunRequest extends Message<_CancelAutomationRunRequest> {
  declare backgroundComposerId: string;
  constructor(data?: PartialMessage<_CancelAutomationRunRequest>) {
    super();
    this.backgroundComposerId = "";
    proto3.util.initPartial(data, this as _CancelAutomationRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CancelAutomationRunRequest {
    return new _CancelAutomationRunRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CancelAutomationRunRequest {
    return new _CancelAutomationRunRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CancelAutomationRunRequest {
    return new _CancelAutomationRunRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _CancelAutomationRunRequest | PlainMessage<_CancelAutomationRunRequest> | undefined | null, b2: _CancelAutomationRunRequest | PlainMessage<_CancelAutomationRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_CancelAutomationRunRequest as unknown as MessageType<_CancelAutomationRunRequest>, a, b2);
  }
})();
export type CancelAutomationRunRequest = InstanceType<typeof CancelAutomationRunRequest$Runtime>;
var CancelAutomationRunRequest: MessageType<CancelAutomationRunRequest> = CancelAutomationRunRequest$Runtime as unknown as MessageType<CancelAutomationRunRequest>;
(CancelAutomationRunRequest as MutableMessageType<CancelAutomationRunRequest>).runtime = proto3;
(CancelAutomationRunRequest as MutableMessageType<CancelAutomationRunRequest>).typeName = "aiserver.v1.CancelAutomationRunRequest";
(CancelAutomationRunRequest as MutableMessageType<CancelAutomationRunRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "background_composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CancelAutomationRunResponse$Runtime = (() => class _CancelAutomationRunResponse extends Message<_CancelAutomationRunResponse> {
  declare success: boolean;
  declare message: string;
  constructor(data?: PartialMessage<_CancelAutomationRunResponse>) {
    super();
    this.success = false;
    this.message = "";
    proto3.util.initPartial(data, this as _CancelAutomationRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CancelAutomationRunResponse {
    return new _CancelAutomationRunResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CancelAutomationRunResponse {
    return new _CancelAutomationRunResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CancelAutomationRunResponse {
    return new _CancelAutomationRunResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _CancelAutomationRunResponse | PlainMessage<_CancelAutomationRunResponse> | undefined | null, b2: _CancelAutomationRunResponse | PlainMessage<_CancelAutomationRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_CancelAutomationRunResponse as unknown as MessageType<_CancelAutomationRunResponse>, a, b2);
  }
})();
export type CancelAutomationRunResponse = InstanceType<typeof CancelAutomationRunResponse$Runtime>;
var CancelAutomationRunResponse: MessageType<CancelAutomationRunResponse> = CancelAutomationRunResponse$Runtime as unknown as MessageType<CancelAutomationRunResponse>;
(CancelAutomationRunResponse as MutableMessageType<CancelAutomationRunResponse>).runtime = proto3;
(CancelAutomationRunResponse as MutableMessageType<CancelAutomationRunResponse>).typeName = "aiserver.v1.CancelAutomationRunResponse";
(CancelAutomationRunResponse as MutableMessageType<CancelAutomationRunResponse>).fields = proto3.util.newFieldList(() => [
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
var CancelAllAutomationRunsRequest$Runtime = (() => class _CancelAllAutomationRunsRequest extends Message<_CancelAllAutomationRunsRequest> {
  declare automationId: string;
  constructor(data?: PartialMessage<_CancelAllAutomationRunsRequest>) {
    super();
    this.automationId = "";
    proto3.util.initPartial(data, this as _CancelAllAutomationRunsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CancelAllAutomationRunsRequest {
    return new _CancelAllAutomationRunsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CancelAllAutomationRunsRequest {
    return new _CancelAllAutomationRunsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CancelAllAutomationRunsRequest {
    return new _CancelAllAutomationRunsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _CancelAllAutomationRunsRequest | PlainMessage<_CancelAllAutomationRunsRequest> | undefined | null, b2: _CancelAllAutomationRunsRequest | PlainMessage<_CancelAllAutomationRunsRequest> | undefined | null): boolean {
    return proto3.util.equals(_CancelAllAutomationRunsRequest as unknown as MessageType<_CancelAllAutomationRunsRequest>, a, b2);
  }
})();
export type CancelAllAutomationRunsRequest = InstanceType<typeof CancelAllAutomationRunsRequest$Runtime>;
var CancelAllAutomationRunsRequest: MessageType<CancelAllAutomationRunsRequest> = CancelAllAutomationRunsRequest$Runtime as unknown as MessageType<CancelAllAutomationRunsRequest>;
(CancelAllAutomationRunsRequest as MutableMessageType<CancelAllAutomationRunsRequest>).runtime = proto3;
(CancelAllAutomationRunsRequest as MutableMessageType<CancelAllAutomationRunsRequest>).typeName = "aiserver.v1.CancelAllAutomationRunsRequest";
(CancelAllAutomationRunsRequest as MutableMessageType<CancelAllAutomationRunsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var CancelAllAutomationRunsResponse$Runtime = (() => class _CancelAllAutomationRunsResponse extends Message<_CancelAllAutomationRunsResponse> {
  declare cancelledCount: number;
  declare message: string;
  constructor(data?: PartialMessage<_CancelAllAutomationRunsResponse>) {
    super();
    this.cancelledCount = 0;
    this.message = "";
    proto3.util.initPartial(data, this as _CancelAllAutomationRunsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CancelAllAutomationRunsResponse {
    return new _CancelAllAutomationRunsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CancelAllAutomationRunsResponse {
    return new _CancelAllAutomationRunsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CancelAllAutomationRunsResponse {
    return new _CancelAllAutomationRunsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _CancelAllAutomationRunsResponse | PlainMessage<_CancelAllAutomationRunsResponse> | undefined | null, b2: _CancelAllAutomationRunsResponse | PlainMessage<_CancelAllAutomationRunsResponse> | undefined | null): boolean {
    return proto3.util.equals(_CancelAllAutomationRunsResponse as unknown as MessageType<_CancelAllAutomationRunsResponse>, a, b2);
  }
})();
export type CancelAllAutomationRunsResponse = InstanceType<typeof CancelAllAutomationRunsResponse$Runtime>;
var CancelAllAutomationRunsResponse: MessageType<CancelAllAutomationRunsResponse> = CancelAllAutomationRunsResponse$Runtime as unknown as MessageType<CancelAllAutomationRunsResponse>;
(CancelAllAutomationRunsResponse as MutableMessageType<CancelAllAutomationRunsResponse>).runtime = proto3;
(CancelAllAutomationRunsResponse as MutableMessageType<CancelAllAutomationRunsResponse>).typeName = "aiserver.v1.CancelAllAutomationRunsResponse";
(CancelAllAutomationRunsResponse as MutableMessageType<CancelAllAutomationRunsResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "cancelled_count",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "message",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RetryAutomationRunRequest$Runtime = (() => class _RetryAutomationRunRequest extends Message<_RetryAutomationRunRequest> {
  declare runUuid: string;
  constructor(data?: PartialMessage<_RetryAutomationRunRequest>) {
    super();
    this.runUuid = "";
    proto3.util.initPartial(data, this as _RetryAutomationRunRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RetryAutomationRunRequest {
    return new _RetryAutomationRunRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RetryAutomationRunRequest {
    return new _RetryAutomationRunRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RetryAutomationRunRequest {
    return new _RetryAutomationRunRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _RetryAutomationRunRequest | PlainMessage<_RetryAutomationRunRequest> | undefined | null, b2: _RetryAutomationRunRequest | PlainMessage<_RetryAutomationRunRequest> | undefined | null): boolean {
    return proto3.util.equals(_RetryAutomationRunRequest as unknown as MessageType<_RetryAutomationRunRequest>, a, b2);
  }
})();
export type RetryAutomationRunRequest = InstanceType<typeof RetryAutomationRunRequest$Runtime>;
var RetryAutomationRunRequest: MessageType<RetryAutomationRunRequest> = RetryAutomationRunRequest$Runtime as unknown as MessageType<RetryAutomationRunRequest>;
(RetryAutomationRunRequest as MutableMessageType<RetryAutomationRunRequest>).runtime = proto3;
(RetryAutomationRunRequest as MutableMessageType<RetryAutomationRunRequest>).typeName = "aiserver.v1.RetryAutomationRunRequest";
(RetryAutomationRunRequest as MutableMessageType<RetryAutomationRunRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "run_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var RetryAutomationRunResponse$Runtime = (() => class _RetryAutomationRunResponse extends Message<_RetryAutomationRunResponse> {
  declare backgroundComposerId: string;
  declare runUuid: string;
  constructor(data?: PartialMessage<_RetryAutomationRunResponse>) {
    super();
    this.backgroundComposerId = "";
    this.runUuid = "";
    proto3.util.initPartial(data, this as _RetryAutomationRunResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _RetryAutomationRunResponse {
    return new _RetryAutomationRunResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _RetryAutomationRunResponse {
    return new _RetryAutomationRunResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _RetryAutomationRunResponse {
    return new _RetryAutomationRunResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _RetryAutomationRunResponse | PlainMessage<_RetryAutomationRunResponse> | undefined | null, b2: _RetryAutomationRunResponse | PlainMessage<_RetryAutomationRunResponse> | undefined | null): boolean {
    return proto3.util.equals(_RetryAutomationRunResponse as unknown as MessageType<_RetryAutomationRunResponse>, a, b2);
  }
})();
export type RetryAutomationRunResponse = InstanceType<typeof RetryAutomationRunResponse$Runtime>;
var RetryAutomationRunResponse: MessageType<RetryAutomationRunResponse> = RetryAutomationRunResponse$Runtime as unknown as MessageType<RetryAutomationRunResponse>;
(RetryAutomationRunResponse as MutableMessageType<RetryAutomationRunResponse>).runtime = proto3;
(RetryAutomationRunResponse as MutableMessageType<RetryAutomationRunResponse>).typeName = "aiserver.v1.RetryAutomationRunResponse";
(RetryAutomationRunResponse as MutableMessageType<RetryAutomationRunResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "background_composer_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "run_uuid",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var WorkflowTemplate$Runtime = (() => class _WorkflowTemplate extends Message<_WorkflowTemplate> {
  declare id: string;
  declare name: string;
  declare description: string;
  declare category: string;
  declare workflow?: Workflow;
  declare inputSchema?: InputSchema;
  declare icon: string;
  declare featuredIndex?: number;
  declare mcpHints: McpTemplateHint[];
  constructor(data?: PartialMessage<_WorkflowTemplate>) {
    super();
    this.id = "";
    this.name = "";
    this.description = "";
    this.category = "";
    this.icon = "";
    this.mcpHints = [];
    proto3.util.initPartial(data, this as _WorkflowTemplate);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _WorkflowTemplate {
    return new _WorkflowTemplate().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _WorkflowTemplate {
    return new _WorkflowTemplate().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _WorkflowTemplate {
    return new _WorkflowTemplate().fromJsonString(jsonString, options2);
  }
  static equals(a: _WorkflowTemplate | PlainMessage<_WorkflowTemplate> | undefined | null, b2: _WorkflowTemplate | PlainMessage<_WorkflowTemplate> | undefined | null): boolean {
    return proto3.util.equals(_WorkflowTemplate as unknown as MessageType<_WorkflowTemplate>, a, b2);
  }
})();
export type WorkflowTemplate = InstanceType<typeof WorkflowTemplate$Runtime>;
var WorkflowTemplate: MessageType<WorkflowTemplate> = WorkflowTemplate$Runtime as unknown as MessageType<WorkflowTemplate>;
(WorkflowTemplate as MutableMessageType<WorkflowTemplate>).runtime = proto3;
(WorkflowTemplate as MutableMessageType<WorkflowTemplate>).typeName = "aiserver.v1.WorkflowTemplate";
(WorkflowTemplate as MutableMessageType<WorkflowTemplate>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
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
    name: "category",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 5, name: "workflow", kind: "message", T: Workflow },
  { no: 6, name: "input_schema", kind: "message", T: InputSchema },
  {
    no: 7,
    name: "icon",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 8, name: "featured_index", kind: "scalar", T: 5, opt: true },
  { no: 9, name: "mcp_hints", kind: "message", T: McpTemplateHint, repeated: true }
]);
var McpTemplateHint$Runtime = (() => class _McpTemplateHint extends Message<_McpTemplateHint> {
  declare name: string;
  declare url?: string;
  constructor(data?: PartialMessage<_McpTemplateHint>) {
    super();
    this.name = "";
    proto3.util.initPartial(data, this as _McpTemplateHint);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _McpTemplateHint {
    return new _McpTemplateHint().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _McpTemplateHint {
    return new _McpTemplateHint().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _McpTemplateHint {
    return new _McpTemplateHint().fromJsonString(jsonString, options2);
  }
  static equals(a: _McpTemplateHint | PlainMessage<_McpTemplateHint> | undefined | null, b2: _McpTemplateHint | PlainMessage<_McpTemplateHint> | undefined | null): boolean {
    return proto3.util.equals(_McpTemplateHint as unknown as MessageType<_McpTemplateHint>, a, b2);
  }
})();
export type McpTemplateHint = InstanceType<typeof McpTemplateHint$Runtime>;
var McpTemplateHint: MessageType<McpTemplateHint> = McpTemplateHint$Runtime as unknown as MessageType<McpTemplateHint>;
(McpTemplateHint as MutableMessageType<McpTemplateHint>).runtime = proto3;
(McpTemplateHint as MutableMessageType<McpTemplateHint>).typeName = "aiserver.v1.McpTemplateHint";
(McpTemplateHint as MutableMessageType<McpTemplateHint>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "url", kind: "scalar", T: 9, opt: true }
]);
var InputSchema$Runtime = (() => class _InputSchema extends Message<_InputSchema> {
  declare fields: InputField[];
  constructor(data?: PartialMessage<_InputSchema>) {
    super();
    this.fields = [];
    proto3.util.initPartial(data, this as _InputSchema);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InputSchema {
    return new _InputSchema().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InputSchema {
    return new _InputSchema().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InputSchema {
    return new _InputSchema().fromJsonString(jsonString, options2);
  }
  static equals(a: _InputSchema | PlainMessage<_InputSchema> | undefined | null, b2: _InputSchema | PlainMessage<_InputSchema> | undefined | null): boolean {
    return proto3.util.equals(_InputSchema as unknown as MessageType<_InputSchema>, a, b2);
  }
})();
export type InputSchema = InstanceType<typeof InputSchema$Runtime>;
var InputSchema: MessageType<InputSchema> = InputSchema$Runtime as unknown as MessageType<InputSchema>;
(InputSchema as MutableMessageType<InputSchema>).runtime = proto3;
(InputSchema as MutableMessageType<InputSchema>).typeName = "aiserver.v1.InputSchema";
(InputSchema as MutableMessageType<InputSchema>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "fields", kind: "message", T: InputField, repeated: true }
]);
var InputField$Runtime = (() => class _InputField extends Message<_InputField> {
  declare key: string;
  declare displayName: string;
  declare description: string;
  declare type: { case: "stringValue"; value: string } | { case: "stringListValue"; value: StringList } | { case: "boolValue"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InputField>) {
    super();
    this.key = "";
    this.displayName = "";
    this.description = "";
    this.type = { case: void 0 };
    proto3.util.initPartial(data, this as _InputField);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InputField {
    return new _InputField().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InputField {
    return new _InputField().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InputField {
    return new _InputField().fromJsonString(jsonString, options2);
  }
  static equals(a: _InputField | PlainMessage<_InputField> | undefined | null, b2: _InputField | PlainMessage<_InputField> | undefined | null): boolean {
    return proto3.util.equals(_InputField as unknown as MessageType<_InputField>, a, b2);
  }
})();
export type InputField = InstanceType<typeof InputField$Runtime>;
var InputField: MessageType<InputField> = InputField$Runtime as unknown as MessageType<InputField>;
(InputField as MutableMessageType<InputField>).runtime = proto3;
(InputField as MutableMessageType<InputField>).typeName = "aiserver.v1.InputField";
(InputField as MutableMessageType<InputField>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "display_name",
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
  { no: 4, name: "string_value", kind: "scalar", T: 9, oneof: "type" },
  { no: 5, name: "string_list_value", kind: "message", T: StringList, oneof: "type" },
  { no: 6, name: "bool_value", kind: "scalar", T: 8, oneof: "type" }
]);
var StringList$Runtime = (() => class _StringList extends Message<_StringList> {
  declare values: string[];
  constructor(data?: PartialMessage<_StringList>) {
    super();
    this.values = [];
    proto3.util.initPartial(data, this as _StringList);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _StringList {
    return new _StringList().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _StringList {
    return new _StringList().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _StringList {
    return new _StringList().fromJsonString(jsonString, options2);
  }
  static equals(a: _StringList | PlainMessage<_StringList> | undefined | null, b2: _StringList | PlainMessage<_StringList> | undefined | null): boolean {
    return proto3.util.equals(_StringList as unknown as MessageType<_StringList>, a, b2);
  }
})();
export type StringList = InstanceType<typeof StringList$Runtime>;
var StringList: MessageType<StringList> = StringList$Runtime as unknown as MessageType<StringList>;
(StringList as MutableMessageType<StringList>).runtime = proto3;
(StringList as MutableMessageType<StringList>).typeName = "aiserver.v1.StringList";
(StringList as MutableMessageType<StringList>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "values", kind: "scalar", T: 9, repeated: true }
]);
var InputValues$Runtime = (() => class _InputValues extends Message<_InputValues> {
  declare values: InputValue[];
  constructor(data?: PartialMessage<_InputValues>) {
    super();
    this.values = [];
    proto3.util.initPartial(data, this as _InputValues);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InputValues {
    return new _InputValues().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InputValues {
    return new _InputValues().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InputValues {
    return new _InputValues().fromJsonString(jsonString, options2);
  }
  static equals(a: _InputValues | PlainMessage<_InputValues> | undefined | null, b2: _InputValues | PlainMessage<_InputValues> | undefined | null): boolean {
    return proto3.util.equals(_InputValues as unknown as MessageType<_InputValues>, a, b2);
  }
})();
export type InputValues = InstanceType<typeof InputValues$Runtime>;
var InputValues: MessageType<InputValues> = InputValues$Runtime as unknown as MessageType<InputValues>;
(InputValues as MutableMessageType<InputValues>).runtime = proto3;
(InputValues as MutableMessageType<InputValues>).typeName = "aiserver.v1.InputValues";
(InputValues as MutableMessageType<InputValues>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "values", kind: "message", T: InputValue, repeated: true }
]);
var InputValue$Runtime = (() => class _InputValue extends Message<_InputValue> {
  declare key: string;
  declare value: { case: "stringValue"; value: string } | { case: "stringListValue"; value: StringList } | { case: "boolValue"; value: boolean } | { case: undefined; value?: undefined };
  constructor(data?: PartialMessage<_InputValue>) {
    super();
    this.key = "";
    this.value = { case: void 0 };
    proto3.util.initPartial(data, this as _InputValue);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _InputValue {
    return new _InputValue().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _InputValue {
    return new _InputValue().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _InputValue {
    return new _InputValue().fromJsonString(jsonString, options2);
  }
  static equals(a: _InputValue | PlainMessage<_InputValue> | undefined | null, b2: _InputValue | PlainMessage<_InputValue> | undefined | null): boolean {
    return proto3.util.equals(_InputValue as unknown as MessageType<_InputValue>, a, b2);
  }
})();
export type InputValue = InstanceType<typeof InputValue$Runtime>;
var InputValue: MessageType<InputValue> = InputValue$Runtime as unknown as MessageType<InputValue>;
(InputValue as MutableMessageType<InputValue>).runtime = proto3;
(InputValue as MutableMessageType<InputValue>).typeName = "aiserver.v1.InputValue";
(InputValue as MutableMessageType<InputValue>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "key",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "string_value", kind: "scalar", T: 9, oneof: "value" },
  { no: 3, name: "string_list_value", kind: "message", T: StringList, oneof: "value" },
  { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "value" }
]);
var ListWorkflowTemplatesRequest$Runtime = (() => class _ListWorkflowTemplatesRequest extends Message<_ListWorkflowTemplatesRequest> {
  declare category?: string;
  constructor(data?: PartialMessage<_ListWorkflowTemplatesRequest>) {
    super();
    proto3.util.initPartial(data, this as _ListWorkflowTemplatesRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListWorkflowTemplatesRequest {
    return new _ListWorkflowTemplatesRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListWorkflowTemplatesRequest {
    return new _ListWorkflowTemplatesRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListWorkflowTemplatesRequest {
    return new _ListWorkflowTemplatesRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListWorkflowTemplatesRequest | PlainMessage<_ListWorkflowTemplatesRequest> | undefined | null, b2: _ListWorkflowTemplatesRequest | PlainMessage<_ListWorkflowTemplatesRequest> | undefined | null): boolean {
    return proto3.util.equals(_ListWorkflowTemplatesRequest as unknown as MessageType<_ListWorkflowTemplatesRequest>, a, b2);
  }
})();
export type ListWorkflowTemplatesRequest = InstanceType<typeof ListWorkflowTemplatesRequest$Runtime>;
var ListWorkflowTemplatesRequest: MessageType<ListWorkflowTemplatesRequest> = ListWorkflowTemplatesRequest$Runtime as unknown as MessageType<ListWorkflowTemplatesRequest>;
(ListWorkflowTemplatesRequest as MutableMessageType<ListWorkflowTemplatesRequest>).runtime = proto3;
(ListWorkflowTemplatesRequest as MutableMessageType<ListWorkflowTemplatesRequest>).typeName = "aiserver.v1.ListWorkflowTemplatesRequest";
(ListWorkflowTemplatesRequest as MutableMessageType<ListWorkflowTemplatesRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "category", kind: "scalar", T: 9, opt: true }
]);
var ListWorkflowTemplatesResponse$Runtime = (() => class _ListWorkflowTemplatesResponse extends Message<_ListWorkflowTemplatesResponse> {
  declare templates: WorkflowTemplate[];
  constructor(data?: PartialMessage<_ListWorkflowTemplatesResponse>) {
    super();
    this.templates = [];
    proto3.util.initPartial(data, this as _ListWorkflowTemplatesResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ListWorkflowTemplatesResponse {
    return new _ListWorkflowTemplatesResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ListWorkflowTemplatesResponse {
    return new _ListWorkflowTemplatesResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ListWorkflowTemplatesResponse {
    return new _ListWorkflowTemplatesResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ListWorkflowTemplatesResponse | PlainMessage<_ListWorkflowTemplatesResponse> | undefined | null, b2: _ListWorkflowTemplatesResponse | PlainMessage<_ListWorkflowTemplatesResponse> | undefined | null): boolean {
    return proto3.util.equals(_ListWorkflowTemplatesResponse as unknown as MessageType<_ListWorkflowTemplatesResponse>, a, b2);
  }
})();
export type ListWorkflowTemplatesResponse = InstanceType<typeof ListWorkflowTemplatesResponse$Runtime>;
var ListWorkflowTemplatesResponse: MessageType<ListWorkflowTemplatesResponse> = ListWorkflowTemplatesResponse$Runtime as unknown as MessageType<ListWorkflowTemplatesResponse>;
(ListWorkflowTemplatesResponse as MutableMessageType<ListWorkflowTemplatesResponse>).runtime = proto3;
(ListWorkflowTemplatesResponse as MutableMessageType<ListWorkflowTemplatesResponse>).typeName = "aiserver.v1.ListWorkflowTemplatesResponse";
(ListWorkflowTemplatesResponse as MutableMessageType<ListWorkflowTemplatesResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "templates", kind: "message", T: WorkflowTemplate, repeated: true }
]);
var GetWorkflowTemplateRequest$Runtime = (() => class _GetWorkflowTemplateRequest extends Message<_GetWorkflowTemplateRequest> {
  declare templateId: string;
  constructor(data?: PartialMessage<_GetWorkflowTemplateRequest>) {
    super();
    this.templateId = "";
    proto3.util.initPartial(data, this as _GetWorkflowTemplateRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetWorkflowTemplateRequest {
    return new _GetWorkflowTemplateRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetWorkflowTemplateRequest {
    return new _GetWorkflowTemplateRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetWorkflowTemplateRequest {
    return new _GetWorkflowTemplateRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetWorkflowTemplateRequest | PlainMessage<_GetWorkflowTemplateRequest> | undefined | null, b2: _GetWorkflowTemplateRequest | PlainMessage<_GetWorkflowTemplateRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetWorkflowTemplateRequest as unknown as MessageType<_GetWorkflowTemplateRequest>, a, b2);
  }
})();
export type GetWorkflowTemplateRequest = InstanceType<typeof GetWorkflowTemplateRequest$Runtime>;
var GetWorkflowTemplateRequest: MessageType<GetWorkflowTemplateRequest> = GetWorkflowTemplateRequest$Runtime as unknown as MessageType<GetWorkflowTemplateRequest>;
(GetWorkflowTemplateRequest as MutableMessageType<GetWorkflowTemplateRequest>).runtime = proto3;
(GetWorkflowTemplateRequest as MutableMessageType<GetWorkflowTemplateRequest>).typeName = "aiserver.v1.GetWorkflowTemplateRequest";
(GetWorkflowTemplateRequest as MutableMessageType<GetWorkflowTemplateRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "template_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var GetWorkflowTemplateResponse$Runtime = (() => class _GetWorkflowTemplateResponse extends Message<_GetWorkflowTemplateResponse> {
  declare template?: WorkflowTemplate;
  constructor(data?: PartialMessage<_GetWorkflowTemplateResponse>) {
    super();
    proto3.util.initPartial(data, this as _GetWorkflowTemplateResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetWorkflowTemplateResponse {
    return new _GetWorkflowTemplateResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetWorkflowTemplateResponse {
    return new _GetWorkflowTemplateResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetWorkflowTemplateResponse {
    return new _GetWorkflowTemplateResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetWorkflowTemplateResponse | PlainMessage<_GetWorkflowTemplateResponse> | undefined | null, b2: _GetWorkflowTemplateResponse | PlainMessage<_GetWorkflowTemplateResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetWorkflowTemplateResponse as unknown as MessageType<_GetWorkflowTemplateResponse>, a, b2);
  }
})();
export type GetWorkflowTemplateResponse = InstanceType<typeof GetWorkflowTemplateResponse$Runtime>;
var GetWorkflowTemplateResponse: MessageType<GetWorkflowTemplateResponse> = GetWorkflowTemplateResponse$Runtime as unknown as MessageType<GetWorkflowTemplateResponse>;
(GetWorkflowTemplateResponse as MutableMessageType<GetWorkflowTemplateResponse>).runtime = proto3;
(GetWorkflowTemplateResponse as MutableMessageType<GetWorkflowTemplateResponse>).typeName = "aiserver.v1.GetWorkflowTemplateResponse";
(GetWorkflowTemplateResponse as MutableMessageType<GetWorkflowTemplateResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "template", kind: "message", T: WorkflowTemplate }
]);
var CreateWorkflowFromTemplateRequest$Runtime = (() => class _CreateWorkflowFromTemplateRequest extends Message<_CreateWorkflowFromTemplateRequest> {
  declare templateId: string;
  declare name: string;
  declare inputValues?: InputValues;
  declare description?: string;
  declare creationSource: AutomationCreationSource;
  constructor(data?: PartialMessage<_CreateWorkflowFromTemplateRequest>) {
    super();
    this.templateId = "";
    this.name = "";
    this.creationSource = AutomationCreationSource.UNSPECIFIED;
    proto3.util.initPartial(data, this as _CreateWorkflowFromTemplateRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateWorkflowFromTemplateRequest {
    return new _CreateWorkflowFromTemplateRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateWorkflowFromTemplateRequest {
    return new _CreateWorkflowFromTemplateRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateWorkflowFromTemplateRequest {
    return new _CreateWorkflowFromTemplateRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateWorkflowFromTemplateRequest | PlainMessage<_CreateWorkflowFromTemplateRequest> | undefined | null, b2: _CreateWorkflowFromTemplateRequest | PlainMessage<_CreateWorkflowFromTemplateRequest> | undefined | null): boolean {
    return proto3.util.equals(_CreateWorkflowFromTemplateRequest as unknown as MessageType<_CreateWorkflowFromTemplateRequest>, a, b2);
  }
})();
export type CreateWorkflowFromTemplateRequest = InstanceType<typeof CreateWorkflowFromTemplateRequest$Runtime>;
var CreateWorkflowFromTemplateRequest: MessageType<CreateWorkflowFromTemplateRequest> = CreateWorkflowFromTemplateRequest$Runtime as unknown as MessageType<CreateWorkflowFromTemplateRequest>;
(CreateWorkflowFromTemplateRequest as MutableMessageType<CreateWorkflowFromTemplateRequest>).runtime = proto3;
(CreateWorkflowFromTemplateRequest as MutableMessageType<CreateWorkflowFromTemplateRequest>).typeName = "aiserver.v1.CreateWorkflowFromTemplateRequest";
(CreateWorkflowFromTemplateRequest as MutableMessageType<CreateWorkflowFromTemplateRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "template_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "name",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 3, name: "input_values", kind: "message", T: InputValues },
  { no: 4, name: "description", kind: "scalar", T: 9, opt: true },
  { no: 5, name: "creation_source", kind: "enum", T: proto3.getEnumType(AutomationCreationSource) }
]);
var CreateWorkflowFromTemplateResponse$Runtime = (() => class _CreateWorkflowFromTemplateResponse extends Message<_CreateWorkflowFromTemplateResponse> {
  declare workflow?: Automation;
  constructor(data?: PartialMessage<_CreateWorkflowFromTemplateResponse>) {
    super();
    proto3.util.initPartial(data, this as _CreateWorkflowFromTemplateResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _CreateWorkflowFromTemplateResponse {
    return new _CreateWorkflowFromTemplateResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _CreateWorkflowFromTemplateResponse {
    return new _CreateWorkflowFromTemplateResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _CreateWorkflowFromTemplateResponse {
    return new _CreateWorkflowFromTemplateResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _CreateWorkflowFromTemplateResponse | PlainMessage<_CreateWorkflowFromTemplateResponse> | undefined | null, b2: _CreateWorkflowFromTemplateResponse | PlainMessage<_CreateWorkflowFromTemplateResponse> | undefined | null): boolean {
    return proto3.util.equals(_CreateWorkflowFromTemplateResponse as unknown as MessageType<_CreateWorkflowFromTemplateResponse>, a, b2);
  }
})();
export type CreateWorkflowFromTemplateResponse = InstanceType<typeof CreateWorkflowFromTemplateResponse$Runtime>;
var CreateWorkflowFromTemplateResponse: MessageType<CreateWorkflowFromTemplateResponse> = CreateWorkflowFromTemplateResponse$Runtime as unknown as MessageType<CreateWorkflowFromTemplateResponse>;
(CreateWorkflowFromTemplateResponse as MutableMessageType<CreateWorkflowFromTemplateResponse>).runtime = proto3;
(CreateWorkflowFromTemplateResponse as MutableMessageType<CreateWorkflowFromTemplateResponse>).typeName = "aiserver.v1.CreateWorkflowFromTemplateResponse";
(CreateWorkflowFromTemplateResponse as MutableMessageType<CreateWorkflowFromTemplateResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "workflow", kind: "message", T: Automation }
]);
var ValidateAutomationToolsRequest$Runtime = (() => class _ValidateAutomationToolsRequest extends Message<_ValidateAutomationToolsRequest> {
  declare prompt: string;
  declare triggerTypes: string[];
  constructor(data?: PartialMessage<_ValidateAutomationToolsRequest>) {
    super();
    this.prompt = "";
    this.triggerTypes = [];
    proto3.util.initPartial(data, this as _ValidateAutomationToolsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ValidateAutomationToolsRequest {
    return new _ValidateAutomationToolsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ValidateAutomationToolsRequest {
    return new _ValidateAutomationToolsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ValidateAutomationToolsRequest {
    return new _ValidateAutomationToolsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ValidateAutomationToolsRequest | PlainMessage<_ValidateAutomationToolsRequest> | undefined | null, b2: _ValidateAutomationToolsRequest | PlainMessage<_ValidateAutomationToolsRequest> | undefined | null): boolean {
    return proto3.util.equals(_ValidateAutomationToolsRequest as unknown as MessageType<_ValidateAutomationToolsRequest>, a, b2);
  }
})();
export type ValidateAutomationToolsRequest = InstanceType<typeof ValidateAutomationToolsRequest$Runtime>;
var ValidateAutomationToolsRequest: MessageType<ValidateAutomationToolsRequest> = ValidateAutomationToolsRequest$Runtime as unknown as MessageType<ValidateAutomationToolsRequest>;
(ValidateAutomationToolsRequest as MutableMessageType<ValidateAutomationToolsRequest>).runtime = proto3;
(ValidateAutomationToolsRequest as MutableMessageType<ValidateAutomationToolsRequest>).typeName = "aiserver.v1.ValidateAutomationToolsRequest";
(ValidateAutomationToolsRequest as MutableMessageType<ValidateAutomationToolsRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "prompt",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 2, name: "trigger_types", kind: "scalar", T: 9, repeated: true }
]);
var ValidateAutomationToolsResponse$Runtime = (() => class _ValidateAutomationToolsResponse extends Message<_ValidateAutomationToolsResponse> {
  declare suggestions: ToolSuggestion[];
  constructor(data?: PartialMessage<_ValidateAutomationToolsResponse>) {
    super();
    this.suggestions = [];
    proto3.util.initPartial(data, this as _ValidateAutomationToolsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ValidateAutomationToolsResponse {
    return new _ValidateAutomationToolsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ValidateAutomationToolsResponse {
    return new _ValidateAutomationToolsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ValidateAutomationToolsResponse {
    return new _ValidateAutomationToolsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ValidateAutomationToolsResponse | PlainMessage<_ValidateAutomationToolsResponse> | undefined | null, b2: _ValidateAutomationToolsResponse | PlainMessage<_ValidateAutomationToolsResponse> | undefined | null): boolean {
    return proto3.util.equals(_ValidateAutomationToolsResponse as unknown as MessageType<_ValidateAutomationToolsResponse>, a, b2);
  }
})();
export type ValidateAutomationToolsResponse = InstanceType<typeof ValidateAutomationToolsResponse$Runtime>;
var ValidateAutomationToolsResponse: MessageType<ValidateAutomationToolsResponse> = ValidateAutomationToolsResponse$Runtime as unknown as MessageType<ValidateAutomationToolsResponse>;
(ValidateAutomationToolsResponse as MutableMessageType<ValidateAutomationToolsResponse>).runtime = proto3;
(ValidateAutomationToolsResponse as MutableMessageType<ValidateAutomationToolsResponse>).typeName = "aiserver.v1.ValidateAutomationToolsResponse";
(ValidateAutomationToolsResponse as MutableMessageType<ValidateAutomationToolsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "suggestions", kind: "message", T: ToolSuggestion, repeated: true }
]);
var ToolSuggestion$Runtime = (() => class _ToolSuggestion extends Message<_ToolSuggestion> {
  declare slug: string;
  declare label: string;
  declare evidence: string[];
  declare configNote: string;
  constructor(data?: PartialMessage<_ToolSuggestion>) {
    super();
    this.slug = "";
    this.label = "";
    this.evidence = [];
    this.configNote = "";
    proto3.util.initPartial(data, this as _ToolSuggestion);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ToolSuggestion {
    return new _ToolSuggestion().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ToolSuggestion {
    return new _ToolSuggestion().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ToolSuggestion {
    return new _ToolSuggestion().fromJsonString(jsonString, options2);
  }
  static equals(a: _ToolSuggestion | PlainMessage<_ToolSuggestion> | undefined | null, b2: _ToolSuggestion | PlainMessage<_ToolSuggestion> | undefined | null): boolean {
    return proto3.util.equals(_ToolSuggestion as unknown as MessageType<_ToolSuggestion>, a, b2);
  }
})();
export type ToolSuggestion = InstanceType<typeof ToolSuggestion$Runtime>;
var ToolSuggestion: MessageType<ToolSuggestion> = ToolSuggestion$Runtime as unknown as MessageType<ToolSuggestion>;
(ToolSuggestion as MutableMessageType<ToolSuggestion>).runtime = proto3;
(ToolSuggestion as MutableMessageType<ToolSuggestion>).typeName = "aiserver.v1.ToolSuggestion";
(ToolSuggestion as MutableMessageType<ToolSuggestion>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "slug",
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
  { no: 3, name: "evidence", kind: "scalar", T: 9, repeated: true },
  {
    no: 4,
    name: "config_note",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var BuilderCompletionMessage$Runtime = (() => class _BuilderCompletionMessage extends Message<_BuilderCompletionMessage> {
  declare role: string;
  declare content: string;
  constructor(data?: PartialMessage<_BuilderCompletionMessage>) {
    super();
    this.role = "";
    this.content = "";
    proto3.util.initPartial(data, this as _BuilderCompletionMessage);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BuilderCompletionMessage {
    return new _BuilderCompletionMessage().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BuilderCompletionMessage {
    return new _BuilderCompletionMessage().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BuilderCompletionMessage {
    return new _BuilderCompletionMessage().fromJsonString(jsonString, options2);
  }
  static equals(a: _BuilderCompletionMessage | PlainMessage<_BuilderCompletionMessage> | undefined | null, b2: _BuilderCompletionMessage | PlainMessage<_BuilderCompletionMessage> | undefined | null): boolean {
    return proto3.util.equals(_BuilderCompletionMessage as unknown as MessageType<_BuilderCompletionMessage>, a, b2);
  }
})();
export type BuilderCompletionMessage = InstanceType<typeof BuilderCompletionMessage$Runtime>;
var BuilderCompletionMessage: MessageType<BuilderCompletionMessage> = BuilderCompletionMessage$Runtime as unknown as MessageType<BuilderCompletionMessage>;
(BuilderCompletionMessage as MutableMessageType<BuilderCompletionMessage>).runtime = proto3;
(BuilderCompletionMessage as MutableMessageType<BuilderCompletionMessage>).typeName = "aiserver.v1.BuilderCompletionMessage";
(BuilderCompletionMessage as MutableMessageType<BuilderCompletionMessage>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "role",
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
var BuilderCompletionContext$Runtime = (() => class _BuilderCompletionContext extends Message<_BuilderCompletionContext> {
  declare stage: string;
  declare currentConfigJson: string;
  declare githubConnected: boolean;
  declare slackConnected: boolean;
  declare linearConnected: boolean;
  declare pagerdutyConnected: boolean;
  declare microsoftTeamsConnected: boolean;
  constructor(data?: PartialMessage<_BuilderCompletionContext>) {
    super();
    this.stage = "";
    this.currentConfigJson = "";
    this.githubConnected = false;
    this.slackConnected = false;
    this.linearConnected = false;
    this.pagerdutyConnected = false;
    this.microsoftTeamsConnected = false;
    proto3.util.initPartial(data, this as _BuilderCompletionContext);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BuilderCompletionContext {
    return new _BuilderCompletionContext().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BuilderCompletionContext {
    return new _BuilderCompletionContext().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BuilderCompletionContext {
    return new _BuilderCompletionContext().fromJsonString(jsonString, options2);
  }
  static equals(a: _BuilderCompletionContext | PlainMessage<_BuilderCompletionContext> | undefined | null, b2: _BuilderCompletionContext | PlainMessage<_BuilderCompletionContext> | undefined | null): boolean {
    return proto3.util.equals(_BuilderCompletionContext as unknown as MessageType<_BuilderCompletionContext>, a, b2);
  }
})();
export type BuilderCompletionContext = InstanceType<typeof BuilderCompletionContext$Runtime>;
var BuilderCompletionContext: MessageType<BuilderCompletionContext> = BuilderCompletionContext$Runtime as unknown as MessageType<BuilderCompletionContext>;
(BuilderCompletionContext as MutableMessageType<BuilderCompletionContext>).runtime = proto3;
(BuilderCompletionContext as MutableMessageType<BuilderCompletionContext>).typeName = "aiserver.v1.BuilderCompletionContext";
(BuilderCompletionContext as MutableMessageType<BuilderCompletionContext>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "stage",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "current_config_json",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "github_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 4,
    name: "slack_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 5,
    name: "linear_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 6,
    name: "pagerduty_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  {
    no: 7,
    name: "microsoft_teams_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var BuilderCompletionRequest$Runtime = (() => class _BuilderCompletionRequest extends Message<_BuilderCompletionRequest> {
  declare messages: BuilderCompletionMessage[];
  declare context?: BuilderCompletionContext;
  constructor(data?: PartialMessage<_BuilderCompletionRequest>) {
    super();
    this.messages = [];
    proto3.util.initPartial(data, this as _BuilderCompletionRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BuilderCompletionRequest {
    return new _BuilderCompletionRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BuilderCompletionRequest {
    return new _BuilderCompletionRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BuilderCompletionRequest {
    return new _BuilderCompletionRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _BuilderCompletionRequest | PlainMessage<_BuilderCompletionRequest> | undefined | null, b2: _BuilderCompletionRequest | PlainMessage<_BuilderCompletionRequest> | undefined | null): boolean {
    return proto3.util.equals(_BuilderCompletionRequest as unknown as MessageType<_BuilderCompletionRequest>, a, b2);
  }
})();
export type BuilderCompletionRequest = InstanceType<typeof BuilderCompletionRequest$Runtime>;
var BuilderCompletionRequest: MessageType<BuilderCompletionRequest> = BuilderCompletionRequest$Runtime as unknown as MessageType<BuilderCompletionRequest>;
(BuilderCompletionRequest as MutableMessageType<BuilderCompletionRequest>).runtime = proto3;
(BuilderCompletionRequest as MutableMessageType<BuilderCompletionRequest>).typeName = "aiserver.v1.BuilderCompletionRequest";
(BuilderCompletionRequest as MutableMessageType<BuilderCompletionRequest>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: BuilderCompletionMessage, repeated: true },
  { no: 2, name: "context", kind: "message", T: BuilderCompletionContext }
]);
var BuilderCompletionResponse$Runtime = (() => class _BuilderCompletionResponse extends Message<_BuilderCompletionResponse> {
  declare content: string;
  constructor(data?: PartialMessage<_BuilderCompletionResponse>) {
    super();
    this.content = "";
    proto3.util.initPartial(data, this as _BuilderCompletionResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _BuilderCompletionResponse {
    return new _BuilderCompletionResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _BuilderCompletionResponse {
    return new _BuilderCompletionResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _BuilderCompletionResponse {
    return new _BuilderCompletionResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _BuilderCompletionResponse | PlainMessage<_BuilderCompletionResponse> | undefined | null, b2: _BuilderCompletionResponse | PlainMessage<_BuilderCompletionResponse> | undefined | null): boolean {
    return proto3.util.equals(_BuilderCompletionResponse as unknown as MessageType<_BuilderCompletionResponse>, a, b2);
  }
})();
export type BuilderCompletionResponse = InstanceType<typeof BuilderCompletionResponse$Runtime>;
var BuilderCompletionResponse: MessageType<BuilderCompletionResponse> = BuilderCompletionResponse$Runtime as unknown as MessageType<BuilderCompletionResponse>;
(BuilderCompletionResponse as MutableMessageType<BuilderCompletionResponse>).runtime = proto3;
(BuilderCompletionResponse as MutableMessageType<BuilderCompletionResponse>).typeName = "aiserver.v1.BuilderCompletionResponse";
(BuilderCompletionResponse as MutableMessageType<BuilderCompletionResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "content",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DisableAutomationForTeamShutdownRequest$Runtime = (() => class _DisableAutomationForTeamShutdownRequest extends Message<_DisableAutomationForTeamShutdownRequest> {
  declare teamId: number;
  declare automationId: string;
  constructor(data?: PartialMessage<_DisableAutomationForTeamShutdownRequest>) {
    super();
    this.teamId = 0;
    this.automationId = "";
    proto3.util.initPartial(data, this as _DisableAutomationForTeamShutdownRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DisableAutomationForTeamShutdownRequest {
    return new _DisableAutomationForTeamShutdownRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DisableAutomationForTeamShutdownRequest {
    return new _DisableAutomationForTeamShutdownRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DisableAutomationForTeamShutdownRequest {
    return new _DisableAutomationForTeamShutdownRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DisableAutomationForTeamShutdownRequest | PlainMessage<_DisableAutomationForTeamShutdownRequest> | undefined | null, b2: _DisableAutomationForTeamShutdownRequest | PlainMessage<_DisableAutomationForTeamShutdownRequest> | undefined | null): boolean {
    return proto3.util.equals(_DisableAutomationForTeamShutdownRequest as unknown as MessageType<_DisableAutomationForTeamShutdownRequest>, a, b2);
  }
})();
export type DisableAutomationForTeamShutdownRequest = InstanceType<typeof DisableAutomationForTeamShutdownRequest$Runtime>;
var DisableAutomationForTeamShutdownRequest: MessageType<DisableAutomationForTeamShutdownRequest> = DisableAutomationForTeamShutdownRequest$Runtime as unknown as MessageType<DisableAutomationForTeamShutdownRequest>;
(DisableAutomationForTeamShutdownRequest as MutableMessageType<DisableAutomationForTeamShutdownRequest>).runtime = proto3;
(DisableAutomationForTeamShutdownRequest as MutableMessageType<DisableAutomationForTeamShutdownRequest>).typeName = "aiserver.v1.DisableAutomationForTeamShutdownRequest";
(DisableAutomationForTeamShutdownRequest as MutableMessageType<DisableAutomationForTeamShutdownRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "team_id",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  },
  {
    no: 2,
    name: "automation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var DisableAutomationForTeamShutdownResponse$Runtime = (() => class _DisableAutomationForTeamShutdownResponse extends Message<_DisableAutomationForTeamShutdownResponse> {
  constructor(data?: PartialMessage<_DisableAutomationForTeamShutdownResponse>) {
    super();
    proto3.util.initPartial(data, this as _DisableAutomationForTeamShutdownResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DisableAutomationForTeamShutdownResponse {
    return new _DisableAutomationForTeamShutdownResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DisableAutomationForTeamShutdownResponse {
    return new _DisableAutomationForTeamShutdownResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DisableAutomationForTeamShutdownResponse {
    return new _DisableAutomationForTeamShutdownResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DisableAutomationForTeamShutdownResponse | PlainMessage<_DisableAutomationForTeamShutdownResponse> | undefined | null, b2: _DisableAutomationForTeamShutdownResponse | PlainMessage<_DisableAutomationForTeamShutdownResponse> | undefined | null): boolean {
    return proto3.util.equals(_DisableAutomationForTeamShutdownResponse as unknown as MessageType<_DisableAutomationForTeamShutdownResponse>, a, b2);
  }
})();
export type DisableAutomationForTeamShutdownResponse = InstanceType<typeof DisableAutomationForTeamShutdownResponse$Runtime>;
var DisableAutomationForTeamShutdownResponse: MessageType<DisableAutomationForTeamShutdownResponse> = DisableAutomationForTeamShutdownResponse$Runtime as unknown as MessageType<DisableAutomationForTeamShutdownResponse>;
(DisableAutomationForTeamShutdownResponse as MutableMessageType<DisableAutomationForTeamShutdownResponse>).runtime = proto3;
(DisableAutomationForTeamShutdownResponse as MutableMessageType<DisableAutomationForTeamShutdownResponse>).typeName = "aiserver.v1.DisableAutomationForTeamShutdownResponse";
(DisableAutomationForTeamShutdownResponse as MutableMessageType<DisableAutomationForTeamShutdownResponse>).fields = proto3.util.newFieldList(() => []);
var GetSentryAuthUrlRequest$Runtime = (() => class _GetSentryAuthUrlRequest extends Message<_GetSentryAuthUrlRequest> {
  constructor(data?: PartialMessage<_GetSentryAuthUrlRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetSentryAuthUrlRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryAuthUrlRequest {
    return new _GetSentryAuthUrlRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryAuthUrlRequest {
    return new _GetSentryAuthUrlRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryAuthUrlRequest {
    return new _GetSentryAuthUrlRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryAuthUrlRequest | PlainMessage<_GetSentryAuthUrlRequest> | undefined | null, b2: _GetSentryAuthUrlRequest | PlainMessage<_GetSentryAuthUrlRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryAuthUrlRequest as unknown as MessageType<_GetSentryAuthUrlRequest>, a, b2);
  }
})();
export type GetSentryAuthUrlRequest = InstanceType<typeof GetSentryAuthUrlRequest$Runtime>;
var GetSentryAuthUrlRequest: MessageType<GetSentryAuthUrlRequest> = GetSentryAuthUrlRequest$Runtime as unknown as MessageType<GetSentryAuthUrlRequest>;
(GetSentryAuthUrlRequest as MutableMessageType<GetSentryAuthUrlRequest>).runtime = proto3;
(GetSentryAuthUrlRequest as MutableMessageType<GetSentryAuthUrlRequest>).typeName = "aiserver.v1.GetSentryAuthUrlRequest";
(GetSentryAuthUrlRequest as MutableMessageType<GetSentryAuthUrlRequest>).fields = proto3.util.newFieldList(() => []);
var GetSentryAuthUrlResponse$Runtime = (() => class _GetSentryAuthUrlResponse extends Message<_GetSentryAuthUrlResponse> {
  declare installUrl: string;
  declare csrfToken: string;
  constructor(data?: PartialMessage<_GetSentryAuthUrlResponse>) {
    super();
    this.installUrl = "";
    this.csrfToken = "";
    proto3.util.initPartial(data, this as _GetSentryAuthUrlResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryAuthUrlResponse {
    return new _GetSentryAuthUrlResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryAuthUrlResponse {
    return new _GetSentryAuthUrlResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryAuthUrlResponse {
    return new _GetSentryAuthUrlResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryAuthUrlResponse | PlainMessage<_GetSentryAuthUrlResponse> | undefined | null, b2: _GetSentryAuthUrlResponse | PlainMessage<_GetSentryAuthUrlResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryAuthUrlResponse as unknown as MessageType<_GetSentryAuthUrlResponse>, a, b2);
  }
})();
export type GetSentryAuthUrlResponse = InstanceType<typeof GetSentryAuthUrlResponse$Runtime>;
var GetSentryAuthUrlResponse: MessageType<GetSentryAuthUrlResponse> = GetSentryAuthUrlResponse$Runtime as unknown as MessageType<GetSentryAuthUrlResponse>;
(GetSentryAuthUrlResponse as MutableMessageType<GetSentryAuthUrlResponse>).runtime = proto3;
(GetSentryAuthUrlResponse as MutableMessageType<GetSentryAuthUrlResponse>).typeName = "aiserver.v1.GetSentryAuthUrlResponse";
(GetSentryAuthUrlResponse as MutableMessageType<GetSentryAuthUrlResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "install_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "csrf_token",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  }
]);
var ConnectSentryCallbackRequest$Runtime = (() => class _ConnectSentryCallbackRequest extends Message<_ConnectSentryCallbackRequest> {
  declare code: string;
  declare installationId: string;
  declare state: string;
  declare organizationSlug?: string;
  constructor(data?: PartialMessage<_ConnectSentryCallbackRequest>) {
    super();
    this.code = "";
    this.installationId = "";
    this.state = "";
    proto3.util.initPartial(data, this as _ConnectSentryCallbackRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ConnectSentryCallbackRequest {
    return new _ConnectSentryCallbackRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ConnectSentryCallbackRequest {
    return new _ConnectSentryCallbackRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ConnectSentryCallbackRequest {
    return new _ConnectSentryCallbackRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _ConnectSentryCallbackRequest | PlainMessage<_ConnectSentryCallbackRequest> | undefined | null, b2: _ConnectSentryCallbackRequest | PlainMessage<_ConnectSentryCallbackRequest> | undefined | null): boolean {
    return proto3.util.equals(_ConnectSentryCallbackRequest as unknown as MessageType<_ConnectSentryCallbackRequest>, a, b2);
  }
})();
export type ConnectSentryCallbackRequest = InstanceType<typeof ConnectSentryCallbackRequest$Runtime>;
var ConnectSentryCallbackRequest: MessageType<ConnectSentryCallbackRequest> = ConnectSentryCallbackRequest$Runtime as unknown as MessageType<ConnectSentryCallbackRequest>;
(ConnectSentryCallbackRequest as MutableMessageType<ConnectSentryCallbackRequest>).runtime = proto3;
(ConnectSentryCallbackRequest as MutableMessageType<ConnectSentryCallbackRequest>).typeName = "aiserver.v1.ConnectSentryCallbackRequest";
(ConnectSentryCallbackRequest as MutableMessageType<ConnectSentryCallbackRequest>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "code",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "installation_id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 3,
    name: "state",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  { no: 4, name: "organization_slug", kind: "scalar", T: 9, opt: true }
]);
var ConnectSentryCallbackResponse$Runtime = (() => class _ConnectSentryCallbackResponse extends Message<_ConnectSentryCallbackResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_ConnectSentryCallbackResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _ConnectSentryCallbackResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _ConnectSentryCallbackResponse {
    return new _ConnectSentryCallbackResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _ConnectSentryCallbackResponse {
    return new _ConnectSentryCallbackResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _ConnectSentryCallbackResponse {
    return new _ConnectSentryCallbackResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _ConnectSentryCallbackResponse | PlainMessage<_ConnectSentryCallbackResponse> | undefined | null, b2: _ConnectSentryCallbackResponse | PlainMessage<_ConnectSentryCallbackResponse> | undefined | null): boolean {
    return proto3.util.equals(_ConnectSentryCallbackResponse as unknown as MessageType<_ConnectSentryCallbackResponse>, a, b2);
  }
})();
export type ConnectSentryCallbackResponse = InstanceType<typeof ConnectSentryCallbackResponse$Runtime>;
var ConnectSentryCallbackResponse: MessageType<ConnectSentryCallbackResponse> = ConnectSentryCallbackResponse$Runtime as unknown as MessageType<ConnectSentryCallbackResponse>;
(ConnectSentryCallbackResponse as MutableMessageType<ConnectSentryCallbackResponse>).runtime = proto3;
(ConnectSentryCallbackResponse as MutableMessageType<ConnectSentryCallbackResponse>).typeName = "aiserver.v1.ConnectSentryCallbackResponse";
(ConnectSentryCallbackResponse as MutableMessageType<ConnectSentryCallbackResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);
var GetSentryStatusRequest$Runtime = (() => class _GetSentryStatusRequest extends Message<_GetSentryStatusRequest> {
  constructor(data?: PartialMessage<_GetSentryStatusRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetSentryStatusRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryStatusRequest {
    return new _GetSentryStatusRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryStatusRequest {
    return new _GetSentryStatusRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryStatusRequest {
    return new _GetSentryStatusRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryStatusRequest | PlainMessage<_GetSentryStatusRequest> | undefined | null, b2: _GetSentryStatusRequest | PlainMessage<_GetSentryStatusRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryStatusRequest as unknown as MessageType<_GetSentryStatusRequest>, a, b2);
  }
})();
export type GetSentryStatusRequest = InstanceType<typeof GetSentryStatusRequest$Runtime>;
var GetSentryStatusRequest: MessageType<GetSentryStatusRequest> = GetSentryStatusRequest$Runtime as unknown as MessageType<GetSentryStatusRequest>;
(GetSentryStatusRequest as MutableMessageType<GetSentryStatusRequest>).runtime = proto3;
(GetSentryStatusRequest as MutableMessageType<GetSentryStatusRequest>).typeName = "aiserver.v1.GetSentryStatusRequest";
(GetSentryStatusRequest as MutableMessageType<GetSentryStatusRequest>).fields = proto3.util.newFieldList(() => []);
var GetSentryStatusResponse$Runtime = (() => class _GetSentryStatusResponse extends Message<_GetSentryStatusResponse> {
  declare isConnected: boolean;
  declare organizationSlug?: string;
  constructor(data?: PartialMessage<_GetSentryStatusResponse>) {
    super();
    this.isConnected = false;
    proto3.util.initPartial(data, this as _GetSentryStatusResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryStatusResponse {
    return new _GetSentryStatusResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryStatusResponse {
    return new _GetSentryStatusResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryStatusResponse {
    return new _GetSentryStatusResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryStatusResponse | PlainMessage<_GetSentryStatusResponse> | undefined | null, b2: _GetSentryStatusResponse | PlainMessage<_GetSentryStatusResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryStatusResponse as unknown as MessageType<_GetSentryStatusResponse>, a, b2);
  }
})();
export type GetSentryStatusResponse = InstanceType<typeof GetSentryStatusResponse$Runtime>;
var GetSentryStatusResponse: MessageType<GetSentryStatusResponse> = GetSentryStatusResponse$Runtime as unknown as MessageType<GetSentryStatusResponse>;
(GetSentryStatusResponse as MutableMessageType<GetSentryStatusResponse>).runtime = proto3;
(GetSentryStatusResponse as MutableMessageType<GetSentryStatusResponse>).typeName = "aiserver.v1.GetSentryStatusResponse";
(GetSentryStatusResponse as MutableMessageType<GetSentryStatusResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "is_connected",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  },
  { no: 2, name: "organization_slug", kind: "scalar", T: 9, opt: true }
]);
var GetSentryProjectsRequest$Runtime = (() => class _GetSentryProjectsRequest extends Message<_GetSentryProjectsRequest> {
  constructor(data?: PartialMessage<_GetSentryProjectsRequest>) {
    super();
    proto3.util.initPartial(data, this as _GetSentryProjectsRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryProjectsRequest {
    return new _GetSentryProjectsRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryProjectsRequest {
    return new _GetSentryProjectsRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryProjectsRequest {
    return new _GetSentryProjectsRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryProjectsRequest | PlainMessage<_GetSentryProjectsRequest> | undefined | null, b2: _GetSentryProjectsRequest | PlainMessage<_GetSentryProjectsRequest> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryProjectsRequest as unknown as MessageType<_GetSentryProjectsRequest>, a, b2);
  }
})();
export type GetSentryProjectsRequest = InstanceType<typeof GetSentryProjectsRequest$Runtime>;
var GetSentryProjectsRequest: MessageType<GetSentryProjectsRequest> = GetSentryProjectsRequest$Runtime as unknown as MessageType<GetSentryProjectsRequest>;
(GetSentryProjectsRequest as MutableMessageType<GetSentryProjectsRequest>).runtime = proto3;
(GetSentryProjectsRequest as MutableMessageType<GetSentryProjectsRequest>).typeName = "aiserver.v1.GetSentryProjectsRequest";
(GetSentryProjectsRequest as MutableMessageType<GetSentryProjectsRequest>).fields = proto3.util.newFieldList(() => []);
var SentryProject$Runtime = (() => class _SentryProject extends Message<_SentryProject> {
  declare id: string;
  declare slug: string;
  declare name: string;
  constructor(data?: PartialMessage<_SentryProject>) {
    super();
    this.id = "";
    this.slug = "";
    this.name = "";
    proto3.util.initPartial(data, this as _SentryProject);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _SentryProject {
    return new _SentryProject().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _SentryProject {
    return new _SentryProject().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _SentryProject {
    return new _SentryProject().fromJsonString(jsonString, options2);
  }
  static equals(a: _SentryProject | PlainMessage<_SentryProject> | undefined | null, b2: _SentryProject | PlainMessage<_SentryProject> | undefined | null): boolean {
    return proto3.util.equals(_SentryProject as unknown as MessageType<_SentryProject>, a, b2);
  }
})();
export type SentryProject = InstanceType<typeof SentryProject$Runtime>;
var SentryProject: MessageType<SentryProject> = SentryProject$Runtime as unknown as MessageType<SentryProject>;
(SentryProject as MutableMessageType<SentryProject>).runtime = proto3;
(SentryProject as MutableMessageType<SentryProject>).typeName = "aiserver.v1.SentryProject";
(SentryProject as MutableMessageType<SentryProject>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "id",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "slug",
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
  }
]);
var GetSentryProjectsResponse$Runtime = (() => class _GetSentryProjectsResponse extends Message<_GetSentryProjectsResponse> {
  declare projects: SentryProject[];
  declare organizationSlug?: string;
  constructor(data?: PartialMessage<_GetSentryProjectsResponse>) {
    super();
    this.projects = [];
    proto3.util.initPartial(data, this as _GetSentryProjectsResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _GetSentryProjectsResponse {
    return new _GetSentryProjectsResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _GetSentryProjectsResponse {
    return new _GetSentryProjectsResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _GetSentryProjectsResponse {
    return new _GetSentryProjectsResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _GetSentryProjectsResponse | PlainMessage<_GetSentryProjectsResponse> | undefined | null, b2: _GetSentryProjectsResponse | PlainMessage<_GetSentryProjectsResponse> | undefined | null): boolean {
    return proto3.util.equals(_GetSentryProjectsResponse as unknown as MessageType<_GetSentryProjectsResponse>, a, b2);
  }
})();
export type GetSentryProjectsResponse = InstanceType<typeof GetSentryProjectsResponse$Runtime>;
var GetSentryProjectsResponse: MessageType<GetSentryProjectsResponse> = GetSentryProjectsResponse$Runtime as unknown as MessageType<GetSentryProjectsResponse>;
(GetSentryProjectsResponse as MutableMessageType<GetSentryProjectsResponse>).runtime = proto3;
(GetSentryProjectsResponse as MutableMessageType<GetSentryProjectsResponse>).typeName = "aiserver.v1.GetSentryProjectsResponse";
(GetSentryProjectsResponse as MutableMessageType<GetSentryProjectsResponse>).fields = proto3.util.newFieldList(() => [
  { no: 1, name: "projects", kind: "message", T: SentryProject, repeated: true },
  { no: 2, name: "organization_slug", kind: "scalar", T: 9, opt: true }
]);
var DisconnectSentryRequest$Runtime = (() => class _DisconnectSentryRequest extends Message<_DisconnectSentryRequest> {
  constructor(data?: PartialMessage<_DisconnectSentryRequest>) {
    super();
    proto3.util.initPartial(data, this as _DisconnectSentryRequest);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DisconnectSentryRequest {
    return new _DisconnectSentryRequest().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DisconnectSentryRequest {
    return new _DisconnectSentryRequest().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DisconnectSentryRequest {
    return new _DisconnectSentryRequest().fromJsonString(jsonString, options2);
  }
  static equals(a: _DisconnectSentryRequest | PlainMessage<_DisconnectSentryRequest> | undefined | null, b2: _DisconnectSentryRequest | PlainMessage<_DisconnectSentryRequest> | undefined | null): boolean {
    return proto3.util.equals(_DisconnectSentryRequest as unknown as MessageType<_DisconnectSentryRequest>, a, b2);
  }
})();
export type DisconnectSentryRequest = InstanceType<typeof DisconnectSentryRequest$Runtime>;
var DisconnectSentryRequest: MessageType<DisconnectSentryRequest> = DisconnectSentryRequest$Runtime as unknown as MessageType<DisconnectSentryRequest>;
(DisconnectSentryRequest as MutableMessageType<DisconnectSentryRequest>).runtime = proto3;
(DisconnectSentryRequest as MutableMessageType<DisconnectSentryRequest>).typeName = "aiserver.v1.DisconnectSentryRequest";
(DisconnectSentryRequest as MutableMessageType<DisconnectSentryRequest>).fields = proto3.util.newFieldList(() => []);
var DisconnectSentryResponse$Runtime = (() => class _DisconnectSentryResponse extends Message<_DisconnectSentryResponse> {
  declare success: boolean;
  constructor(data?: PartialMessage<_DisconnectSentryResponse>) {
    super();
    this.success = false;
    proto3.util.initPartial(data, this as _DisconnectSentryResponse);
  }
  static fromBinary(bytes: Uint8Array, options2?: Partial<BinaryReadOptions>): _DisconnectSentryResponse {
    return new _DisconnectSentryResponse().fromBinary(bytes, options2);
  }
  static fromJson(jsonValue: JsonValue, options2?: Partial<JsonReadOptions>): _DisconnectSentryResponse {
    return new _DisconnectSentryResponse().fromJson(jsonValue, options2);
  }
  static fromJsonString(jsonString: string, options2?: Partial<JsonReadOptions>): _DisconnectSentryResponse {
    return new _DisconnectSentryResponse().fromJsonString(jsonString, options2);
  }
  static equals(a: _DisconnectSentryResponse | PlainMessage<_DisconnectSentryResponse> | undefined | null, b2: _DisconnectSentryResponse | PlainMessage<_DisconnectSentryResponse> | undefined | null): boolean {
    return proto3.util.equals(_DisconnectSentryResponse as unknown as MessageType<_DisconnectSentryResponse>, a, b2);
  }
})();
export type DisconnectSentryResponse = InstanceType<typeof DisconnectSentryResponse$Runtime>;
var DisconnectSentryResponse: MessageType<DisconnectSentryResponse> = DisconnectSentryResponse$Runtime as unknown as MessageType<DisconnectSentryResponse>;
(DisconnectSentryResponse as MutableMessageType<DisconnectSentryResponse>).runtime = proto3;
(DisconnectSentryResponse as MutableMessageType<DisconnectSentryResponse>).typeName = "aiserver.v1.DisconnectSentryResponse";
(DisconnectSentryResponse as MutableMessageType<DisconnectSentryResponse>).fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "success",
    kind: "scalar",
    T: 8
    /* ScalarType.BOOL */
  }
]);


export { AutomationDefaultTool, SlackCompletionReactionMode, AutomationScope, AutomationCreationSource, AutomationManagedBy, PromptEffortLevel, PromptRunMode, GitPullRequestAction, GitCICompletionCondition, GitWorkflowRunConclusion, PlatformActionStatus, PlatformActionScope, PlatformTriggerType, McpAuthState, AutomationRunListKind, AutomationFilterDecision, AutomationRunStatus, AutomationRunFailureCode, AutomationRunRetryIneligibleReason, Trigger, Action, McpAction, McpServerConfig, AgentPrivateWorkerLabel, AgentPrivateWorkerConfig, AgentOptions, Workflow, Prompt, GitConfig, CronTrigger, GitTrigger, GitPullRequestEvent, GitPullRequestReviewRequestedEvent, GitIssueAssignedEvent, GitPushEvent, GitCICompletedEvent, GitIssueLabeledEvent, GitIssueCommentEvent, GitPullRequestReviewCommentEvent, GitPullRequestReviewEvent, GitReviewThreadEvent, GitWorkflowRunEvent, GitLabelEvent, SlackTrigger, SlackChannelCreatedTrigger, SlackReactionAddedTrigger, SlackMentionTrigger, SlackAnyReactionAddedTrigger, LinearTrigger, LinearIssueCreatedEvent, LinearStatusChangedEvent, LinearEndOfCycleEvent, WebhookTrigger, PagerDutyTrigger, PagerDutyIncidentTriggeredEvent, PagerDutyIncidentAcknowledgedEvent, PagerDutyIncidentResolvedEvent, PagerDutyIncidentEscalatedEvent, PagerDutyIncidentAnyEvent, SentryTrigger, SentryIssueCreatedEvent, SentryIssueResolvedEvent, SentryIssueAssignedEvent, SentryIssueArchivedEvent, SentryIssueUnresolvedEvent, SentryIssueAnyEvent, MicrosoftTeamsTrigger, MicrosoftTeamsChannelCreatedTrigger, GitPrAction, PrCommentAction, ManageCheckRunAction, RequestReviewersAction, ApprovePrAction, ReadSlackAction, ResolveReviewThreadsAction, SlackAction, MicrosoftTeamsAction, ReadMicrosoftTeamsAction, PrCommentActionPayload, GitPrActionPayload, SlackActionPayload, ResolveReviewThreadsActionPayload, MicrosoftTeamsActionPayload, ActionPayload, ActionsPayload, PlatformActionEntry, PlatformActionsPayload, SlackTriggerPayload, SlackChannelCreatedTriggerPayload, SlackReactionAddedTriggerPayload, LinearTriggerPayload, LinearIssueCreatedPayload, LinearStatusChangedPayload, LinearEndOfCyclePayload, PagerDutyTriggerPayload, SentryTriggerPayload, MicrosoftTeamsTriggerPayload, MicrosoftTeamsChannelCreatedTriggerPayload, TriggerMetadataEntry, TriggerMetadataPayload, AutomationDeploySource, AutomationDeploySpec, ValidateAutomationSpecRequest, ValidateAutomationSpecResponse, ApplyAutomationSpecRequest, ApplyAutomationSpecResponse, CreateAutomationRequest, CreateAutomationResponse, ListSandAutomationsRequest, ListAutomationsRequest, ListAutomationsResponse, GetAutomationRequest, RestrictedAutomationSummary, GetAutomationResponse, UpdateAutomationRequest, UpdateAutomationResponse, ReassignAutomationOwnerRequest, ReassignAutomationOwnerResponse, UpdateAutomationAuthoringModeRequest, UpdateAutomationAuthoringModeResponse, DeleteAutomationRequest, DeleteAutomationResponse, TestAutomationRequest, CronSamplePayload, PullRequestSamplePayload, PushSamplePayload, SlackSamplePayload, LinearSamplePayload, CICompletedSamplePayload, SlackChannelCreatedSamplePayload, SlackReactionAddedSamplePayload, WebhookSamplePayload, SentrySamplePayload, PagerDutySamplePayload, MicrosoftTeamsSamplePayload, MicrosoftTeamsChannelCreatedSamplePayload, TestAutomationResponse, Automation, AutomationMcpAuthState, AutomationWithOwner, ListAutomationRunsRequest, ListAutomationRunsResponse, GetAutomationRunRequest, GetAutomationRunResponse, ListAllRunsRequest, ListAllRunsResponse, TestAutomationFilterRequest, TestAutomationFilterResponse, ListAutomationMemoriesRequest, ListAutomationMemoriesResponse, GetAutomationMemoryRequest, GetAutomationMemoryResponse, UpdateAutomationMemoryRequest, UpdateAutomationMemoryResponse, DeleteAutomationMemoryRequest, DeleteAutomationMemoryResponse, AutomationRunFailureDetails, AutomationRun, AutomationRunLaunchStartingRef, AutomationRunLaunchContext, GetRunSummaryRequest, GetRunSummaryResponse, RunSummaryWindow, HistogramBucket, GetSecuritybotResolutionStatsRequest, GetSecuritybotResolutionStatsResponse, GetApprovalAgentAnalyticsRequest, GetApprovalAgentAnalyticsResponse, ManagedAutomationTeamSettings, GetManagedAutomationTeamSettingsRequest, GetManagedAutomationTeamSettingsResponse, UpdateManagedAutomationTeamSettingsRequest, UpdateManagedAutomationTeamSettingsResponse, CancelAutomationRunRequest, CancelAutomationRunResponse, CancelAllAutomationRunsRequest, CancelAllAutomationRunsResponse, RetryAutomationRunRequest, RetryAutomationRunResponse, WorkflowTemplate, McpTemplateHint, InputSchema, InputField, StringList, InputValues, InputValue, ListWorkflowTemplatesRequest, ListWorkflowTemplatesResponse, GetWorkflowTemplateRequest, GetWorkflowTemplateResponse, CreateWorkflowFromTemplateRequest, CreateWorkflowFromTemplateResponse, ValidateAutomationToolsRequest, ValidateAutomationToolsResponse, ToolSuggestion, BuilderCompletionMessage, BuilderCompletionContext, BuilderCompletionRequest, BuilderCompletionResponse, DisableAutomationForTeamShutdownRequest, DisableAutomationForTeamShutdownResponse, GetSentryAuthUrlRequest, GetSentryAuthUrlResponse, ConnectSentryCallbackRequest, ConnectSentryCallbackResponse, GetSentryStatusRequest, GetSentryStatusResponse, GetSentryProjectsRequest, SentryProject, GetSentryProjectsResponse, DisconnectSentryRequest, DisconnectSentryResponse };
