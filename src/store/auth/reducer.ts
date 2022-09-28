import produce from "immer";
import { AnyAction } from "redux";
import * as actions from "./action-types";
import { GetMe } from "../../types/types";

export interface AuthState {
  number: string;
  userName: string;
  gender: { gender: string };
  weight: string;
  birthday: string;
  setUserInfo: {
    birthday: string;
    user: {
      username: string | null;
    };
  };
}

const initialState: AuthState = {
  number: "",
  userName: "",
  gender: { gender: "" },
  weight: "",
  birthday: "",
  setUserInfo: {
    user: {
      username: "",
    },
    birthday: null,
  },
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
      case actions.SET_USER_INFO:
        draft.setUserInfo = payload;
        break;
      default:
        break;
    }
  });
}

export default authReducer;
