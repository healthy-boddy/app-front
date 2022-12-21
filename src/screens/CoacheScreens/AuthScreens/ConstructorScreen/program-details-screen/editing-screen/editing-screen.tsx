import React from "react";
import { EditingScreenView } from "./view";
import { ProgramDetailsModel } from "../model";

export const EditingScreen = ({ route }: any) => {
  let programId: number | undefined = route?.params?.programId;
  console.log("EditingScreen programId", programId);
  return (
    <ProgramDetailsModel.Provider programId={programId}>
      <EditingScreenView programId={programId} />
    </ProgramDetailsModel.Provider>
  );
};
