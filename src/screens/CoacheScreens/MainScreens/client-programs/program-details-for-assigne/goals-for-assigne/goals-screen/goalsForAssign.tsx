import React from "react";
import { GoalsModelForAssign } from "./model";
import { GoalsViewForAssign } from "./view";

export const GoalsForAssign = ({ route }: any) => {
  const programId: number = route?.params?.programId;
  const clientID: number = route?.params?.clientID;
  return (
    <GoalsModelForAssign.Provider clientID={clientID} programId={programId}>
      <GoalsViewForAssign programId={programId} />
    </GoalsModelForAssign.Provider>
  );
};
