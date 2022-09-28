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

export const SET_BIRTHDAY = "auth/SET_BIRTHDAY";
export interface SetBirthday {
  type: typeof SET_BIRTHDAY;
  payload: string;
}

export const SET_GENDER = "auth/SET_GENDER";
export interface SetGender {
  type: typeof SET_GENDER;
  payload: string;
}

export const SET_WEIGHT = "auth/SET_WEIGHT";
export interface SetWeight {
  type: typeof SET_WEIGHT;
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
  payload: { phone_number: string; password: string };
}

export const CHECK_PIN_CODE = "auth/CHECK_PIN_CODE";
export interface CheckPinCode {
  type: typeof CHECK_PIN_CODE;
  payload: { phone_number: string; password: string; userData: string | null };
}

export const POST_UPDATED_DATE = "auth/POST_UPDATED_DATE";
export interface PostUpdatedData {
  type: typeof POST_UPDATED_DATE;
  payload: { gender: string; weight: string; birthDate: string };
}

export const GET_ME = "auth/GET_ME";
export interface GetMe {
  type: typeof GET_ME;
}

export const SET_USER_INFO = "auth/SET_USER_INFO";
export interface SetUserInfo {
  type: typeof SET_USER_INFO;
  payload: any;
}

export const LOGOUT = "auth/LOGOUT";
export interface Logout {
  type: typeof LOGOUT;
}
