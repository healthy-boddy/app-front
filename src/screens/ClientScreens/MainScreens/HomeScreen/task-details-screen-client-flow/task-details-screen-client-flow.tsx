import React from "react";
import { TaskDetailModelClientFlow } from "./model";
import { TaskDetailsView } from "./view";

export const TaskDetailsScreenClientFlow = ({ route: { params } }: any) => {
  const taskData: any = params?.task;
  const programID: number = params.programID;
  const clientID: number = params.clientID;
  console.log("programID", programID);
  return (
    <TaskDetailModelClientFlow.Provider
      programID={programID}
      taskData={taskData}
      clientID={clientID}
    >
      <TaskDetailsView task={taskData} />
    </TaskDetailModelClientFlow.Provider>
  );
};
