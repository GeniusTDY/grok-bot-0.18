/**
 * Complete generated Grok Bot 0.18 B11 delta module recovered from
 * byte-identical macOS and Windows immutable artifact regions. Do not hand-edit.
 * Evidence: src/app/dist/host/host-main.cjs:614663-614680
 * Region SHA-256: b05d52dd4bb7b692228a19ee1bef42ea051b6d587a358ee4cbf2dea9d1e56759
 * B11 exports: 0 messages + 0 enums + 1 services = 1
 */
import { MethodKind } from "@bufbuild/protobuf";
import { ExecStreamElement } from "./exec_service_pb.js";
import { ExecServerMessage } from "./exec_pb.js";

var ExecService = {
  typeName: "agent.v1.ExecService",
  methods: {
    /**
     * @generated from rpc agent.v1.ExecService.Exec
     */
    exec: {
      name: "Exec",
      I: ExecServerMessage,
      O: ExecStreamElement,
      kind: MethodKind.ServerStreaming
    }
  }
};

export { ExecService };
