import React from "react";
import { GoalsEditingModel } from "./model";
import { GoalsEditingView } from "./view";

export const GoalsEditing = () => {
  return (
    <GoalsEditingModel.Provider>
      <GoalsEditingView />
    </GoalsEditingModel.Provider>
  );
};
