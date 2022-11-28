import React from "react";
import { GoalsModel } from "./model";
import { GoalsView } from "./view";

export const ClientGoalsDetailsPage = () => {
  return (
    <GoalsModel.Provider>
      <GoalsView />
    </GoalsModel.Provider>
  );
};
