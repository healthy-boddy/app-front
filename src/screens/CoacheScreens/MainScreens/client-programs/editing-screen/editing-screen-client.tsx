import React from "react";
import { EditingScreenClientView } from "./view";
import { ProgramDetailsModel } from "../../../AuthScreens/ConstructorScreen/program-details-screen/model";

export const EditingScreenClient = ({ route }: any) => {
  const programId: number | undefined = route?.params?.programId;
  const clientID = route?.params?.clientID;
  const assignedProgram = route?.params?.assignedProgram;
  return (
    <ProgramDetailsModel.Provider
      programId={programId}
      programAssignedToClient={assignedProgram}
      clientID={clientID}
    >
      <EditingScreenClientView />
    </ProgramDetailsModel.Provider>
  );
};
