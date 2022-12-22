export type GlobalGoalsResArray = Array<GlobalGoalsResponse>;

export type GlobalGoalsResponse = {
  id: number;
  client: string;
  status: string;
  description: string;
};
