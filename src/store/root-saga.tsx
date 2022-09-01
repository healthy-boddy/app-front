import { all, fork } from "redux-saga/effects";
import { authSagas } from "./auth/sagas";

export function* rootSaga() {
  yield all([fork(authSagas)]);
}
