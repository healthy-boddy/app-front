import React from "react";
import { TaskDetailModel } from "./model";
import { TaskDetailsView } from "./view";
import { TaskResponse } from "../program-details-screen/editing-screen/interface";

export const TaskDetailsScreen = ({
  route: { params },
}: {
  route: { params: TaskResponse };
}) => {
  const taskData: TaskResponse = params;
  return (
    <TaskDetailModel.Provider taskData={taskData}>
      <TaskDetailsView task={taskData} />
    </TaskDetailModel.Provider>
  );
};
