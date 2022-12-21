import React from "react";
import { TaskDetailModel } from "./model";
import { TaskDetailsView } from "./view";
import { TaskResponse } from "../program-details-screen/editing-screen/interface";

export const TaskDetailsScreen = ({ route: { params } }: any) => {
  const taskData: any = params?.task;
  const programID: number = params.programID;
  console.log("programID", programID);
  return (
    <TaskDetailModel.Provider programID={programID} taskData={taskData}>
      <TaskDetailsView task={taskData} />
    </TaskDetailModel.Provider>
  );
};
