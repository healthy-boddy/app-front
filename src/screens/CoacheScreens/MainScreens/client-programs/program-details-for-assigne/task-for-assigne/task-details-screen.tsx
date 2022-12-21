import React from "react";
import { TaskDetailForAssignModel } from "./model";
import { ProgramAssignedToClient } from "../../interface/interface";
import { TaskDetailsForAssignView } from "./view";

export const TaskDetailsForAssign = ({ route: { params } }: any) => {
  const taskData: any = params?.task;
  const assignedProgram: ProgramAssignedToClient | undefined =
    params?.assignedProgram;
  const programId = params?.programId;
  const clientID = params?.clientID;

  return (
    <TaskDetailForAssignModel.Provider
      programId={programId}
      programAssignedToClient={assignedProgram}
      clientID={clientID}
      taskData={taskData}
    >
      <TaskDetailsForAssignView task={taskData} />
    </TaskDetailForAssignModel.Provider>
  );
};
