import React from "react";
import { GoalsEditingModel } from "./model";
import { GoalsEditingView } from "./view";

export const GoalsEditing = ({ route }: any) => {
  const programId = route?.params?.programId;
  return (
    <GoalsEditingModel.Provider programId={programId}>
      <GoalsEditingView />
    </GoalsEditingModel.Provider>
  );
};
