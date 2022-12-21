import React from "react";
import { GoalsModelClient } from "./model";
import { GoalsViewClient } from "./view";

export const GoalsClient = ({ route }: any) => {
  const programId: number = route?.params?.programId;
  const clientID = route?.params?.clientID;
  const assignedProgram = route?.params?.assignedProgram;
  return (
    <GoalsModelClient.Provider
      programAssignedToClient={assignedProgram}
      clientID={clientID}
      programId={programId}
    >
      <GoalsViewClient programId={programId} />
    </GoalsModelClient.Provider>
  );
};
