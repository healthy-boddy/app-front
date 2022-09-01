export const SET_NUMBER = "auth/SET_NUMBER";
export interface SetNumber {
  type: typeof SET_NUMBER;
  payload: string;
}

export const SET_NAME = "auth/SET_NAME";
export interface SetName {
  type: typeof SET_NAME;
  payload: string;
}

export const GENERATE_PASSWORD = "auth/GENERATE_PASSWORD";
export interface GeneratePassword {
  type: typeof GENERATE_PASSWORD;
  payload: string;
}

export const POST_CLIENT_DATA = "auth/POST_CLIENT_DATA";
export interface PostClientData {
  type: typeof POST_CLIENT_DATA;
  payload: { phone_number: string; number: string };
}
