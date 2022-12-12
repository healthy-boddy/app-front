import React from "react";
import { GoalsDetailsClientModel } from "./model";
import { GoalsView } from "./view";

export const GoalsClientDetails = () => {
  return (
    <GoalsDetailsClientModel.Provider>
      <GoalsView />
    </GoalsDetailsClientModel.Provider>
  );
};
