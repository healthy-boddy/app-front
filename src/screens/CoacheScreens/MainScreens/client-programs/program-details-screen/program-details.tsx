import React from "react";
import { ProgramDetailsClientModel } from "./model";
import { ProgramDetailsClientView } from "./view";
import { ProgramAssignedToClient } from "../interface/interface";

export const ProgramDetailsClient = ({ route }: any) => {
  const programDetailForClient: ProgramAssignedToClient | undefined =
    route?.params;
  const programId = route?.params?.programId;
  return (
    <ProgramDetailsClientModel.Provider
      programId={programId}
      programAssignedToClient={programDetailForClient}
    >
      <ProgramDetailsClientView />
    </ProgramDetailsClientModel.Provider>
  );
};
