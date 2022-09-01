import produce from "immer";
import { AnyAction } from "redux";
import * as actions from "./action-types";

export interface AuthState {
  number: string;
  userName: string;
}

const initialState: AuthState = {
  number: "",
  userName: "",
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
      default:
        break;
    }
  });
}

export default authReducer;
