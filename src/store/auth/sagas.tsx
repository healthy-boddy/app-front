import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import rootNavigation from "../../navigator/helper/root-navigation";
import { setGeneratePasswordError } from "../error";
import { setLoader } from "../loader";
import * as actions from "./action-types";
import { setNumber } from "./actions";
import authService from "../../service/AuthService";

function* generatePassword({ payload }: actions.GeneratePassword) {
  console.log("NUMBER PAYLOAD", payload);
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));
    yield put(setNumber(payload));
    const data = yield call(authService.generatePassword, payload);
    if (data.status === 200) {
      console.log("data.status: ", data.status);
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

function* postClientData({ payload }: actions.PostClientData) {
  console.log("DATA", payload);
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));

    const data = yield call(authService.postClientData, payload);
    if (data.status === 200) {
      console.log("data.status: ", data.status);
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

export function* watchGeneratePassword() {
  yield takeLatest(actions.GENERATE_PASSWORD, generatePassword);
}

export function* watchPostClientData() {
  yield takeLatest(actions.POST_CLIENT_DATA, postClientData);
}

export function* authSagas() {
  yield all([fork(watchGeneratePassword)]);
  yield all([fork(watchPostClientData)]);
}
