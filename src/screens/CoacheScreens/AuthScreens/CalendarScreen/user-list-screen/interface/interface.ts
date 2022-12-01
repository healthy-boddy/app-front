export type UserArrays = Array<ClientResponse>;

export type ClientResponse = {
  birthday: string;
  gender: string;
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
