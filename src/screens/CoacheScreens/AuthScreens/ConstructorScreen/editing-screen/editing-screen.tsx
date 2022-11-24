import React from "react";
import { EditingScreenModel } from "./model";
import { EditingScreenView } from "./view";

export const EditingScreen = ({ route }: any) => {
  const programId: number | undefined = route?.params?.programId;
  console.log("programId EditingScreen", programId);
  return (
    <EditingScreenModel.Provider programId={programId}>
      <EditingScreenView />
    </EditingScreenModel.Provider>
  );
};
