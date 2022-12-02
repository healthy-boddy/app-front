import { GlobalGoalsEditing } from "../../../../MainScreens/clients-goals/global-goasl-editing-screen";

export type UserArrays = Array<ClientResponse>;

export type ClientResponse = {
  birthday: string;
  gender: string;
  done_global_goals_count: number;
  total_global_goals_count: number;
  user: User;
  weight: number;
};

export type User = {
  avatar: string;
  avatar_thumbnail: string;
  email: string;
  id: number;
  phone_number: string | null;
  role: string;
  username: string;
};
