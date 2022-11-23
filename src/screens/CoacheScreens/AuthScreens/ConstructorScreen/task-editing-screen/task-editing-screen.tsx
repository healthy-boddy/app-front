import React from "react";
import { TaskEditingModel } from "./model";
import { TaskEditingScreenView } from "./view";

export const TaskEditing = () => {
  return (
    <TaskEditingModel.Provider>
      <TaskEditingScreenView />
    </TaskEditingModel.Provider>
  );
};
