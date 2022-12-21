import React from "react";
import { GoalsEditingForAssignModel } from "./model";
import { GoalsEditingView } from "./view";

export const GoalsEditingForAssign = ({ route }: any) => {
  const programId = route?.params?.programId;
  const clientId = route?.params?.clientId;
  return (
    <GoalsEditingForAssignModel.Provider
      clientId={clientId}
      programId={programId}
    >
      <GoalsEditingView />
    </GoalsEditingForAssignModel.Provider>
  );
};
