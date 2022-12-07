import React from "react";
import { ProgramDetailsClientModel } from "./model";
import { ProgramDetailsClientView } from "./view";
import { ProgramAssignedToClient } from "../interface/interface";

export const ProgramDetailsClient = ({ route }: any) => {
  const assignedProgram: ProgramAssignedToClient | undefined =
    route?.params?.assignedProgram;
  const programId = route?.params?.programId;
  const clientID = route?.params?.clientID;
  return (
    <ProgramDetailsClientModel.Provider
      programId={programId}
      programAssignedToClient={assignedProgram}
      clientID={clientID}
    >
      <ProgramDetailsClientView />
    </ProgramDetailsClientModel.Provider>
  );
};
