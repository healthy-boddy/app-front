import React from "react";
import { TaskDetailClientModel } from "./model";
import { TaskDetailsClientView } from "./view";
import { ProgramAssignedToClient } from "../interface/interface";

export const TaskDetailsClientScreen = ({ route: { params } }: any) => {
  const taskData: any = params?.task;
  const assignedProgram: ProgramAssignedToClient | undefined =
    params?.assignedProgram;
  const programId = params?.programId;
  const clientID = params?.clientID;

  return (
    <TaskDetailClientModel.Provider
      programId={programId}
      programAssignedToClient={assignedProgram}
      clientID={clientID}
      taskData={taskData}
    >
      <TaskDetailsClientView task={taskData} />
    </TaskDetailClientModel.Provider>
  );
};
