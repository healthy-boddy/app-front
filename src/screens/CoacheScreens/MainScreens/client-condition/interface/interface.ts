export type ConditionsStateArray = Array<ConditionsState>;
export enum UpdatedAt {
  GREAT = "great",
  GOOD = "good",
  NEED_HELP = "need_help",
}

export type ConditionsState = {
  client: string;
  name: string;
  max_value: string;
  value: number;
  status: string;
  updated_at: UpdatedAt;
};
