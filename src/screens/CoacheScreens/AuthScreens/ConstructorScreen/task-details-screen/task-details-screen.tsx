import React from "react";
import { TaskDetailModel } from "./model";
import { TaskDetailsView } from "./view";

export const TaskDetailsScreen = () => {
  return (
    <TaskDetailModel.Provider>
      <TaskDetailsView />
    </TaskDetailModel.Provider>
  );
};
