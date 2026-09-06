/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:614167-614440
 * Region SHA-256: 197d267f25e668bf4dc0cb922b6925e0e08a320d117ff5f7bd61ba2c662ed5cb
 * B11 exports: 0 messages + 0 enums + 1 services = 1
 */
import { MethodKind } from "@bufbuild/protobuf";
import { PingRequest, PingResponse, GetCapabilitiesRequest, GetCapabilitiesResponse, ReloadAgentSkillsRequest, ReloadAgentSkillsResponse, ReloadPluginsRequest, ReloadPluginsResponse, ExecRequest, ExecResponse, ListDirectoryRequest as ListDirectoryRequest2, ListDirectoryResponse as ListDirectoryResponse2, ReadTextFileRequest as ReadTextFileRequest2, ReadTextFileResponse as ReadTextFileResponse2, WriteTextFileRequest as WriteTextFileRequest2, WriteTextFileResponse as WriteTextFileResponse2, ReadBinaryFileRequest as ReadBinaryFileRequest3, ReadBinaryFileResponse as ReadBinaryFileResponse3, ExportFileRequest, ExportFileResponse, WriteBinaryFileRequest as WriteBinaryFileRequest2, WriteBinaryFileResponse as WriteBinaryFileResponse2, GetWorkspaceChangesHashRequest, GetWorkspaceChangesHashResponse, BatchGetDiffRequest, BatchGetDiffResponse, RefreshGithubAccessTokenRequest, RefreshGithubAccessTokenResponse, WarmRemoteAccessServerRequest, WarmRemoteAccessServerResponse, ListArtifactsRequest, ListArtifactsResponse, UploadArtifactsRequest, UploadArtifactsResponse, PersistArtifactsToAgentStoreRequest, PersistArtifactsToAgentStoreResponse, RestoreArtifactsRequest, RestoreArtifactsResponse, GetMcpRefreshTokensRequest, GetMcpRefreshTokensResponse, UpdateEnvironmentVariablesRequest, UpdateEnvironmentVariablesResponse, DownloadCursorServerRequest, DownloadCursorServerResponse, InstallPluginArtifactRequest, InstallPluginArtifactResponse, LoadMcpServersRequest, LoadMcpServersResponse } from "./control_service_pb.js";
import { GetDiffRequest, GetDiffResponse } from "../../aiserver/v1/utils_pb.js";

var ControlService = {
  typeName: "agent.v1.ControlService",
  methods: {
    /**
     * @generated from rpc agent.v1.ControlService.Ping
     */
    ping: {
      name: "Ping",
      I: PingRequest,
      O: PingResponse,
      kind: MethodKind.Unary
    },
    /**
     * Capabilities supported  (e.g. computer use)
     *
     * @generated from rpc agent.v1.ControlService.GetCapabilities
     */
    getCapabilities: {
      name: "GetCapabilities",
      I: GetCapabilitiesRequest,
      O: GetCapabilitiesResponse,
      kind: MethodKind.Unary
    },
    /**
     * Spawn
     *
     * @generated from rpc agent.v1.ControlService.Exec
     */
    exec: {
      name: "Exec",
      I: ExecRequest,
      O: ExecResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Filesystem browsing (arbitrary paths).
     *
     * @generated from rpc agent.v1.ControlService.ListDirectory
     */
    listDirectory: {
      name: "ListDirectory",
      I: ListDirectoryRequest2,
      O: ListDirectoryResponse2,
      kind: MethodKind.Unary
    },
    /**
     * File read / write (arbitrary filesystem paths).
     *
     * @generated from rpc agent.v1.ControlService.ReadTextFile
     */
    readTextFile: {
      name: "ReadTextFile",
      I: ReadTextFileRequest2,
      O: ReadTextFileResponse2,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.WriteTextFile
     */
    writeTextFile: {
      name: "WriteTextFile",
      I: WriteTextFileRequest2,
      O: WriteTextFileResponse2,
      kind: MethodKind.Unary
    },
    /**
     * Binary file read / write
     *
     * @generated from rpc agent.v1.ControlService.ReadBinaryFile
     */
    readBinaryFile: {
      name: "ReadBinaryFile",
      I: ReadBinaryFileRequest3,
      O: ReadBinaryFileResponse3,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.WriteBinaryFile
     */
    writeBinaryFile: {
      name: "WriteBinaryFile",
      I: WriteBinaryFileRequest2,
      O: WriteBinaryFileResponse2,
      kind: MethodKind.Unary
    },
    /**
     * Workspace-contained streaming file export for user-initiated saves.
     *
     * @generated from rpc agent.v1.ControlService.ExportFile
     */
    exportFile: {
      name: "ExportFile",
      I: ExportFileRequest,
      O: ExportFileResponse,
      kind: MethodKind.ServerStreaming
    },
    /**
     * Git
     *
     * @generated from rpc agent.v1.ControlService.GetDiff
     */
    getDiff: {
      name: "GetDiff",
      I: GetDiffRequest,
      O: GetDiffResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.BatchGetDiff
     */
    batchGetDiff: {
      name: "BatchGetDiff",
      I: BatchGetDiffRequest,
      O: BatchGetDiffResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.GetWorkspaceChangesHash
     */
    getWorkspaceChangesHash: {
      name: "GetWorkspaceChangesHash",
      I: GetWorkspaceChangesHashRequest,
      O: GetWorkspaceChangesHashResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.RefreshGithubAccessToken
     */
    refreshGithubAccessToken: {
      name: "RefreshGithubAccessToken",
      I: RefreshGithubAccessTokenRequest,
      O: RefreshGithubAccessTokenResponse,
      kind: MethodKind.Unary
    },
    /**
     * Remote access
     *
     * @generated from rpc agent.v1.ControlService.WarmRemoteAccessServer
     */
    warmRemoteAccessServer: {
      name: "WarmRemoteAccessServer",
      I: WarmRemoteAccessServerRequest,
      O: WarmRemoteAccessServerResponse,
      kind: MethodKind.Unary
    },
    /**
     * Artifact uploads
     *
     * @generated from rpc agent.v1.ControlService.ListArtifacts
     */
    listArtifacts: {
      name: "ListArtifacts",
      I: ListArtifactsRequest,
      O: ListArtifactsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.UploadArtifacts
     */
    uploadArtifacts: {
      name: "UploadArtifacts",
      I: UploadArtifactsRequest,
      O: UploadArtifactsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.PersistArtifactsToAgentStore
     */
    persistArtifactsToAgentStore: {
      name: "PersistArtifactsToAgentStore",
      I: PersistArtifactsToAgentStoreRequest,
      O: PersistArtifactsToAgentStoreResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.RestoreArtifacts
     */
    restoreArtifacts: {
      name: "RestoreArtifacts",
      I: RestoreArtifactsRequest,
      O: RestoreArtifactsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc agent.v1.ControlService.GetMcpRefreshTokens
     */
    getMcpRefreshTokens: {
      name: "GetMcpRefreshTokens",
      I: GetMcpRefreshTokensRequest,
      O: GetMcpRefreshTokensResponse,
      kind: MethodKind.Unary
    },
    /**
     * Download (but do not start) the cursor server for a given commit.
     * This is used to pre-download the cursor server binary so that subsequent
     * WarmRemoteAccessServer calls are faster.
     *
     * @generated from rpc agent.v1.ControlService.DownloadCursorServer
     */
    downloadCursorServer: {
      name: "DownloadCursorServer",
      I: DownloadCursorServerRequest,
      O: DownloadCursorServerResponse,
      kind: MethodKind.Unary
    },
    /**
     * Update the exec-daemon's environment variables for subsequent process spawns.
     * This does NOT affect already-running processes.
     *
     * @generated from rpc agent.v1.ControlService.UpdateEnvironmentVariables
     */
    updateEnvironmentVariables: {
      name: "UpdateEnvironmentVariables",
      I: UpdateEnvironmentVariablesRequest,
      O: UpdateEnvironmentVariablesResponse,
      kind: MethodKind.Unary
    },
    /**
     * Reload agent skills from disk (~/.cursor/skills/, workspace skills, etc.).
     * Call after writing new SKILL.md files so the next agent turn sees them.
     *
     * @generated from rpc agent.v1.ControlService.ReloadAgentSkills
     */
    reloadAgentSkills: {
      name: "ReloadAgentSkills",
      I: ReloadAgentSkillsRequest,
      O: ReloadAgentSkillsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Reload plugin-backed skills/subagents after the cloud harness materializes
     * plugin files onto disk. Empty reload_targets means "reload everything".
     *
     * @generated from rpc agent.v1.ControlService.ReloadPlugins
     */
    reloadPlugins: {
      name: "ReloadPlugins",
      I: ReloadPluginsRequest,
      O: ReloadPluginsResponse,
      kind: MethodKind.Unary
    },
    /**
     * Download a plugin artifact tarball from a presigned URL and extract it on the VM.
     *
     * @generated from rpc agent.v1.ControlService.InstallPluginArtifact
     */
    installPluginArtifact: {
      name: "InstallPluginArtifact",
      I: InstallPluginArtifactRequest,
      O: InstallPluginArtifactResponse,
      kind: MethodKind.Unary
    },
    /**
     * Load (and optionally reconcile) session MCP servers on the daemon from a
     * desired MCP config. The same operation the private-worker bridge performs
     * in-process at claim time, exposed for co-located callers (e.g. the Sand
     * in-box host) whose MCP config changes while the daemon runs. Servers are
     * registered lazily (child processes spawn on first use); servers already
     * registered with the same config are left untouched.
     *
     * @generated from rpc agent.v1.ControlService.LoadMcpServers
     */
    loadMcpServers: {
      name: "LoadMcpServers",
      I: LoadMcpServersRequest,
      O: LoadMcpServersResponse,
      kind: MethodKind.Unary
    }
  }
};

export { ControlService };
