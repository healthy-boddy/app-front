export type GoalsResArray = Array<GoalsResponseProps>;

export type GoalsResponseProps = {
  id: number;
  program: number | null;
  description: string;
};
