import React from "react";
import { GoalsEditingModelClient } from "./model";
import { GoalsEditingView } from "./view";

export const GoalsEditingClient = ({ route }: any) => {
  const programId: number = route.params.programId;
  const clientID = route?.params?.clientID;
  const assignedProgram = route?.params?.assignedProgram;
  return (
    <GoalsEditingModelClient.Provider
      programAssignedToClient={assignedProgram}
      clientID={clientID}
      programId={programId}
    >
      <GoalsEditingView />
    </GoalsEditingModelClient.Provider>
  );
};
