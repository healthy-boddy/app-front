import React from "react";
import { ProgramDetailsForAssignModel } from "./model";
import { ProgramDetailsForAssignView } from "./view";

export const ProgramDetailsForAssign = ({ route }: any) => {
  const programDetailForClient: number | undefined = route?.params.clientID;
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
