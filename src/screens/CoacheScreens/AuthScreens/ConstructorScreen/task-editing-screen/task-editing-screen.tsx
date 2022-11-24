import React from "react";
import { TaskEditingModel } from "./model";
import { TaskEditingScreenView } from "./view";

export const TaskEditing = ({ route }: any) => {
  const taskId = route.params.taskId;
  return (
    <TaskEditingModel.Provider taskId={taskId}>
      <TaskEditingScreenView />
    </TaskEditingModel.Provider>
  );
};
