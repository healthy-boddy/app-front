import * as actions from "./action-types";

export function setNumber(payload: string): actions.SetNumber {
  return {
    type: actions.SET_NUMBER,
    payload,
  };
}

export function setName(payload: string): actions.SetName {
  return {
    type: actions.SET_NAME,
    payload,
  };
}

export function generatePassword(payload: string): actions.GeneratePassword {
  return {
    type: actions.GENERATE_PASSWORD,
    payload,
  };
}

export function postClientData(payload: {
  phone_number: string;
  number: string;
}): actions.PostClientData {
  return {
    type: actions.POST_CLIENT_DATA,
    payload,
  };
}
