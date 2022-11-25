import React from "react";
import { ProgramDetailsModel } from "./model";
import { ProgramDetailsView } from "./view";

export const ProgramDetails = ({ route }: any) => {
  const programId: number | undefined = route?.params?.programId;
  console.log("programId", programId);
  return (
    <ProgramDetailsModel.Provider programId={programId}>
      <ProgramDetailsView />
    </ProgramDetailsModel.Provider>
  );
};
