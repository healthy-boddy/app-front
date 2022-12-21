import React from "react";
import { TaskEditingForAssignModel } from "./model";
import { TaskEditingScreenForAssignView } from "./view";

export const TaskEditingForAssign = ({ route }: any) => {
  const task = route.params.task;
  return (
    <TaskEditingForAssignModel.Provider task={task}>
      <TaskEditingScreenForAssignView />
    </TaskEditingForAssignModel.Provider>
  );
};
