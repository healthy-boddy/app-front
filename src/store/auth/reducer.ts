import produce from "immer";
import { AnyAction } from "redux";
import * as actions from "./action-types";

export interface AuthState {
  number: string;
  userName: string;
  gender: string;
  weight: string;
  birthday: string;
}

const initialState: AuthState = {
  number: "",
  userName: "",
  gender: "",
  weight: "",
  birthday: "",
};

function authReducer(state = initialState, { type, payload }: AnyAction) {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_NUMBER:
        draft.number = payload;
        break;
      case actions.SET_NAME:
        draft.userName = payload;
        break;
      case actions.SET_GENDER:
        draft.gender = payload;
        break;
      case actions.SET_WEIGHT:
        draft.weight = payload;
        break;
      case actions.SET_BIRTHDAY:
        draft.birthday = payload;
        break;
      default:
        break;
    }
  });
}

export default authReducer;
