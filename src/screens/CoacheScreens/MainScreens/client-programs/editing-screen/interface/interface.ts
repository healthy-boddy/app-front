export type TaskResponseArray = Array<TaskResponse>;

export type TaskResponse = {
  id: number;
  program: number;
  name: string;
  description: string;
  document: string;
  date: number;
  button_text: string;
  button_link: string;
};
