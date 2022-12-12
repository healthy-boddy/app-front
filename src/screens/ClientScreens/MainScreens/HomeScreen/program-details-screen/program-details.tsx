import React from "react";
import { ProgramDetailsModel } from "./model";
import { ProgramDetailsView } from "./view";

export const DetailsProgramClient = ({ route }: any) => {
  const programId: number | undefined = route?.params?.programId;
  return (
    <ProgramDetailsModel.Provider
      programId={programId}
      clientID={route?.params?.clientID}
    >
      <ProgramDetailsView />
    </ProgramDetailsModel.Provider>
  );
};
