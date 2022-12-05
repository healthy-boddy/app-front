import React from "react";
import { ProgramDetailsForAssignModel } from "./model";
import { ProgramAssignedToClient } from "../interface/interface";
import { ProgramDetailsForAssignView } from "./view";

export const ProgramDetailsForAssign = ({ route }: any) => {
  const programDetailForClient: ProgramAssignedToClient | undefined =
    route?.params.clientID;
  const programId = route?.params?.programId;

  return (
    <ProgramDetailsForAssignModel.Provider
      programId={programId}
      programAssignedToClient={programDetailForClient}
    >
      <ProgramDetailsForAssignView />
    </ProgramDetailsForAssignModel.Provider>
  );
};
