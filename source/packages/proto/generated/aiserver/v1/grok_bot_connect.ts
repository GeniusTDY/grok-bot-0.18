/**
 * Complete generated Grok Bot 0.18 module recovered from byte-identical
 * macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/electron-main/main.cjs:491544-491821
 * Region SHA-256: 267fffc55b76d1f2beb3279e9a6767f9b482a18c0d7936ae213195ba2576a474
 */
import { MethodKind } from "@bufbuild/protobuf";
import { EnsureSandBoxRequest, EnsureSandBoxResponse, EnsureSandBoxWindowRequest, RecreateSandBoxRequest, RecreateSandBoxResponse, ForceRecreateSandBoxRequest, AdminRecreateSandBoxRequest, AdminForceRecreateSandBoxRequest, PresignSandBoxStoreWritesRequest, PresignSandBoxStoreWritesResponse, CompleteSandBoxStoreMultipartWritesRequest, CompleteSandBoxStoreMultipartWritesResponse, AbortSandBoxStoreMultipartWritesRequest, AbortSandBoxStoreMultipartWritesResponse, PresignSandBoxStoreReadsRequest, PresignSandBoxStoreReadsResponse, StatSandBoxStoreObjectRequest, StatSandBoxStoreObjectResponse, ListSandBoxStoreObjectsRequest, ListSandBoxStoreObjectsResponse, AdminSandBoxStoreStatusRequest, AdminSandBoxStoreStatusResponse, AdminUpdateSandBoxHostRequest, AdminUpdateSandBoxHostResponse, AdminSandBoxHostStatusRequest, AdminSandBoxHostStatusResponse, AdminSnapshotSandBoxStoreRequest, AdminSnapshotSandBoxStoreResponse, AdminHibernateSandBoxRequest, AdminHibernateSandBoxResponse, AdminListSandAgentsRequest, AdminListSandAgentsResponse, AdminGetSandAgentTranscriptPageRequest, AdminGetSandAgentTranscriptPageResponse, WatchSandBoxMigrationRequest, SandBoxMigrationEvent, AdminWatchSandBoxMigrationRequest, GetSandBoxRunStateRequest, GetSandBoxRunStateResponse, ListSandBoxesRequest, ListSandBoxesResponse, NotifySandAgentTurnFinishedRequest, NotifySandAgentTurnFinishedResponse, ListSandSetupManifestsRequest, ListSandSetupManifestsResponse, ListTeamSandSetupManifestsRequest, ListTeamSandSetupManifestsResponse, SaveTeamSandSetupManifestRequest, SaveTeamSandSetupManifestResponse, DeleteTeamSandSetupManifestRequest, DeleteTeamSandSetupManifestResponse, ListTeamMemberSandBoxesRequest, ListTeamMemberSandBoxesResponse, KillTeamMemberSandBoxRequest, KillTeamMemberSandBoxResponse } from "./sand_box_pb.js";

var GrokBotService = {
  typeName: "aiserver.v1.GrokBotService",
  methods: {
    /**
     * @generated from rpc aiserver.v1.GrokBotService.EnsureSandBox
     */
    ensureSandBox: {
      name: "EnsureSandBox",
      I: EnsureSandBoxRequest,
      O: EnsureSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.EnsureSandBoxWindow
     */
    ensureSandBoxWindow: {
      name: "EnsureSandBoxWindow",
      I: EnsureSandBoxWindowRequest,
      O: EnsureSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.RecreateSandBox
     */
    recreateSandBox: {
      name: "RecreateSandBox",
      I: RecreateSandBoxRequest,
      O: RecreateSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ForceRecreateSandBox
     */
    forceRecreateSandBox: {
      name: "ForceRecreateSandBox",
      I: ForceRecreateSandBoxRequest,
      O: RecreateSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminRecreateSandBox
     */
    adminRecreateSandBox: {
      name: "AdminRecreateSandBox",
      I: AdminRecreateSandBoxRequest,
      O: RecreateSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminForceRecreateSandBox
     */
    adminForceRecreateSandBox: {
      name: "AdminForceRecreateSandBox",
      I: AdminForceRecreateSandBoxRequest,
      O: RecreateSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.PresignSandBoxStoreWrites
     */
    presignSandBoxStoreWrites: {
      name: "PresignSandBoxStoreWrites",
      I: PresignSandBoxStoreWritesRequest,
      O: PresignSandBoxStoreWritesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.CompleteSandBoxStoreMultipartWrites
     */
    completeSandBoxStoreMultipartWrites: {
      name: "CompleteSandBoxStoreMultipartWrites",
      I: CompleteSandBoxStoreMultipartWritesRequest,
      O: CompleteSandBoxStoreMultipartWritesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AbortSandBoxStoreMultipartWrites
     */
    abortSandBoxStoreMultipartWrites: {
      name: "AbortSandBoxStoreMultipartWrites",
      I: AbortSandBoxStoreMultipartWritesRequest,
      O: AbortSandBoxStoreMultipartWritesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.PresignSandBoxStoreReads
     */
    presignSandBoxStoreReads: {
      name: "PresignSandBoxStoreReads",
      I: PresignSandBoxStoreReadsRequest,
      O: PresignSandBoxStoreReadsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.StatSandBoxStoreObject
     */
    statSandBoxStoreObject: {
      name: "StatSandBoxStoreObject",
      I: StatSandBoxStoreObjectRequest,
      O: StatSandBoxStoreObjectResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ListSandBoxStoreObjects
     */
    listSandBoxStoreObjects: {
      name: "ListSandBoxStoreObjects",
      I: ListSandBoxStoreObjectsRequest,
      O: ListSandBoxStoreObjectsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminGetSandBoxStoreStatus
     */
    adminGetSandBoxStoreStatus: {
      name: "AdminGetSandBoxStoreStatus",
      I: AdminSandBoxStoreStatusRequest,
      O: AdminSandBoxStoreStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminUpdateSandBoxHost
     */
    adminUpdateSandBoxHost: {
      name: "AdminUpdateSandBoxHost",
      I: AdminUpdateSandBoxHostRequest,
      O: AdminUpdateSandBoxHostResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminGetSandBoxHostStatus
     */
    adminGetSandBoxHostStatus: {
      name: "AdminGetSandBoxHostStatus",
      I: AdminSandBoxHostStatusRequest,
      O: AdminSandBoxHostStatusResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminSnapshotSandBoxStore
     */
    adminSnapshotSandBoxStore: {
      name: "AdminSnapshotSandBoxStore",
      I: AdminSnapshotSandBoxStoreRequest,
      O: AdminSnapshotSandBoxStoreResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminHibernateSandBox
     */
    adminHibernateSandBox: {
      name: "AdminHibernateSandBox",
      I: AdminHibernateSandBoxRequest,
      O: AdminHibernateSandBoxResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminListSandAgents
     */
    adminListSandAgents: {
      name: "AdminListSandAgents",
      I: AdminListSandAgentsRequest,
      O: AdminListSandAgentsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminGetSandAgentTranscriptPage
     */
    adminGetSandAgentTranscriptPage: {
      name: "AdminGetSandAgentTranscriptPage",
      I: AdminGetSandAgentTranscriptPageRequest,
      O: AdminGetSandAgentTranscriptPageResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.WatchSandBoxMigration
     */
    watchSandBoxMigration: {
      name: "WatchSandBoxMigration",
      I: WatchSandBoxMigrationRequest,
      O: SandBoxMigrationEvent,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.AdminWatchSandBoxMigration
     */
    adminWatchSandBoxMigration: {
      name: "AdminWatchSandBoxMigration",
      I: AdminWatchSandBoxMigrationRequest,
      O: SandBoxMigrationEvent,
      kind: MethodKind.ServerStreaming
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.GetSandBoxRunState
     */
    getSandBoxRunState: {
      name: "GetSandBoxRunState",
      I: GetSandBoxRunStateRequest,
      O: GetSandBoxRunStateResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ListSandBoxes
     */
    listSandBoxes: {
      name: "ListSandBoxes",
      I: ListSandBoxesRequest,
      O: ListSandBoxesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.NotifySandAgentTurnFinished
     */
    notifySandAgentTurnFinished: {
      name: "NotifySandAgentTurnFinished",
      I: NotifySandAgentTurnFinishedRequest,
      O: NotifySandAgentTurnFinishedResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ListSandSetupManifests
     */
    listSandSetupManifests: {
      name: "ListSandSetupManifests",
      I: ListSandSetupManifestsRequest,
      O: ListSandSetupManifestsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ListTeamSandSetupManifests
     */
    listTeamSandSetupManifests: {
      name: "ListTeamSandSetupManifests",
      I: ListTeamSandSetupManifestsRequest,
      O: ListTeamSandSetupManifestsResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.SaveTeamSandSetupManifest
     */
    saveTeamSandSetupManifest: {
      name: "SaveTeamSandSetupManifest",
      I: SaveTeamSandSetupManifestRequest,
      O: SaveTeamSandSetupManifestResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.DeleteTeamSandSetupManifest
     */
    deleteTeamSandSetupManifest: {
      name: "DeleteTeamSandSetupManifest",
      I: DeleteTeamSandSetupManifestRequest,
      O: DeleteTeamSandSetupManifestResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.ListTeamMemberSandBoxes
     */
    listTeamMemberSandBoxes: {
      name: "ListTeamMemberSandBoxes",
      I: ListTeamMemberSandBoxesRequest,
      O: ListTeamMemberSandBoxesResponse,
      kind: MethodKind.Unary
    },
    /**
     * @generated from rpc aiserver.v1.GrokBotService.KillTeamMemberSandBox
     */
    killTeamMemberSandBox: {
      name: "KillTeamMemberSandBox",
      I: KillTeamMemberSandBoxRequest,
      O: KillTeamMemberSandBoxResponse,
      kind: MethodKind.Unary
    }
  }
};


export { GrokBotService };
