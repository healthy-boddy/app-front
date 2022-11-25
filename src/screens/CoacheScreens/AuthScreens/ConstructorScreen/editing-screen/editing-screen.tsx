import React, { useEffect } from "react";
import { EditingScreenModel } from "./model";
import { EditingScreenView } from "./view";

export const EditingScreen = ({ route }: any) => {
  let programId: number | undefined = route?.params?.programId;
  console.log("props.model.id", programId);

  return (
    <EditingScreenModel.Provider programId={programId}>
      <EditingScreenView />
    </EditingScreenModel.Provider>
  );
};
