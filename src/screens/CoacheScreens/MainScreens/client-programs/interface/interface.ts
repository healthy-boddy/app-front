export type ProgramAssignedToClientArray = Array<ProgramAssignedToClient>;

export type ProgramAssignedToClient = {
  assigned_at: string;
  assigned_to: number;
  id: number;
  program: number;
  program_info: ProgramInfo;
};

export type ProgramInfo = {
  description: string;
  duration: number;
  goals_quantity: number;
  id: number;
  name: string;
  tasks_quantity: number;
};
