import React from "react";
import { TaskEditingModel } from "./model";
import { TaskEditingScreenView } from "./view";

export const TaskEditing = ({ route }: any) => {
  const task = route.params.task;
  return (
    <TaskEditingModel.Provider task={task}>
      <TaskEditingScreenView />
    </TaskEditingModel.Provider>
  );
};
