import React from "react";
import { EditingScreenView } from "./view";
import { ProgramDetailsModel } from "../../../../AuthScreens/ConstructorScreen/program-details-screen/model";

export const EditingScreenForAssign = ({ route }: any) => {
  let programId: number | undefined = route?.params?.programId;
  let clientId: number | undefined = route?.params?.clientId;

  return (
    <ProgramDetailsModel.Provider clientID={clientId} programId={programId}>
      <EditingScreenView programId={programId} />
    </ProgramDetailsModel.Provider>
  );
};
