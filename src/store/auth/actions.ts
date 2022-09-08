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

export function setGender(payload: string): actions.SetGender {
  return {
    type: actions.SET_GENDER,
    payload,
  };
}

export function setWeight(payload: string): actions.SetWeight {
  return {
    type: actions.SET_WEIGHT,
    payload,
  };
}

export function setBirthday(payload: string): actions.SetBirthday {
  return {
    type: actions.SET_BIRTHDAY,
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
  password: string;
}): actions.PostClientData {
  return {
    type: actions.POST_CLIENT_DATA,
    payload,
  };
}

export function checkPinCode(payload: {
  phone_number: string;
  password: string;
}): actions.CheckPinCode {
  return {
    type: actions.CHECK_PIN_CODE,
    payload,
  };
}

export function postUpdatedData(payload: {
  gender: string;
  weight: string;
  birthDate: string;
}): actions.PostUpdatedData {
  return {
    type: actions.POST_UPDATED_DATE,
    payload,
  };
}
