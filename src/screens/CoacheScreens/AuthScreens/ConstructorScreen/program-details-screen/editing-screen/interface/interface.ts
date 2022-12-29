export type TaskResponseArray = Array<TaskResponse>;

export type TaskResponse = {
  id: number;
  program: number;
  name: string;
  description: string;
  document: string;
  date: string;
  button_text: string;
  button_link: string;
  image: string;
};
