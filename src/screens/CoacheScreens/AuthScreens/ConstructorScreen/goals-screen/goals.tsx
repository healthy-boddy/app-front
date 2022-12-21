import React from "react";
import { GoalsModel } from "./model";
import { GoalsView } from "./view";

export const Goals = ({ route }: any) => {
  const programId: number = route.params.programId;
  return (
    <GoalsModel.Provider programId={programId}>
      <GoalsView programId={programId} />
    </GoalsModel.Provider>
  );
};
