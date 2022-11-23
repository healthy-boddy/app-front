import React from "react";
import { EditingScreenModel } from "./model";
import { EditingScreenView } from "./view";

export const EditingScreen = () => {
  return (
    <EditingScreenModel.Provider>
      <EditingScreenView />
    </EditingScreenModel.Provider>
  );
};
