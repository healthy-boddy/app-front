export type ResponseArrayConstructor = Array<ProgramResponse>;

export type ProgramResponse = {
  id: number;
  name: string;
  description: string;
  duration: number;
  tasks_quantity: number;
  goals_quantity: number;
};
