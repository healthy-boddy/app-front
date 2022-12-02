export type GlobalGoalsResArray = Array<GlobalGoalResponse>;

export type GlobalGoalResponse = {
  id: number;
  description: string;
  client: string;
  status: GlobalStatus;
};

export enum GlobalStatus {
  New = "new",
  InProgress = "in_progress",
  Done = "done",
}
