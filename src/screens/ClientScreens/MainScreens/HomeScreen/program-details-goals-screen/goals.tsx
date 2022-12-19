import React from "react";
import { ProgramDetailGoalsModel } from "./model";
import { ProgramDetailGoalsView } from "./view";

export const ProgramDetailGoals = ({ route }: any) => {
  const programId: number = route.params.programId;
  const clientID: number = route.params.clientID;

  return (
    <ProgramDetailGoalsModel.Provider clientID={clientID} programId={programId}>
      <ProgramDetailGoalsView programId={programId} />
    </ProgramDetailGoalsModel.Provider>
  );
};
