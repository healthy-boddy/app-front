import React from "react";
import { ProgramDetailsModel } from "./model";
import { ProgramDetailsView } from "./view";

export const ProgramDetails = () => {
  return (
    <ProgramDetailsModel.Provider>
      <ProgramDetailsView />
    </ProgramDetailsModel.Provider>
  );
};
