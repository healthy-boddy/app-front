import React from "react";
import { ProgramDetailsClientModel } from "./model";
import { ProgramDetailsClientView } from "./view";
import { ProgramAssignedToClient } from "../interface/interface";

export const ProgramDetailsClient = ({ route }: any) => {
  const programDetailForClient: ProgramAssignedToClient | undefined =
    route?.params?.programDetailForClient;
  const programId = route?.params?.programDetailForClient?.program;

  return (
    <ProgramDetailsClientModel.Provider
      programId={programId}
      programAssignedToClient={programDetailForClient}
    >
      <ProgramDetailsClientView />
    </ProgramDetailsClientModel.Provider>
  );
};
