import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import rootNavigation from "../../navigator/helper/root-navigation";
import { setGeneratePasswordError } from "../error";
import { setLoader } from "../loader";
import * as actions from "./action-types";
import { setNumber, setUserInfo } from "./actions";
import authService from "../../service/AuthService";

function* generatePassword({ payload }: actions.GeneratePassword) {
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));
    yield put(setNumber(payload));
    const response = yield call(authService.generatePassword, payload);
    if (response.status === 200) {
      return rootNavigation.navigate("EnterPin", {
        screen: "EnterPinStack",
      });
    } else if (response === "User not found") {
      return rootNavigation.navigate("EnterNameRegistration", {
        screen: "EnterNameRegistrationStack",
      });
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

function* postClientData({ payload }: actions.PostClientData) {
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));
    const data = yield call(authService.postClientData, payload);
    if (data.status === 201) {
      // return rootNavigation.navigate("PickGender", {
      //   screen: "PickGender",
      // });

      const response = yield call(
        authService.generatePassword,
        payload.phone_number
      );

      return rootNavigation.navigate("EnterPin", {
        screen: "EnterPinStack",
      });
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

function* checkPinCode({ payload }: actions.CheckPinCode) {
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));

    const response = yield call(authService.checkPinCode, payload);
    if (response.data.access && payload.userData !== null) {
      rootNavigation.navigate("TabNavigator", {
        screen: "TabNavigator",
      });
    } else if (payload.userData === null) {
      rootNavigation.navigate("PickGender", {
        screen: "PickGenderTabStack",
      });
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

//PUT METHOD
function* postUpdatedUserData({ payload }: actions.PostUpdatedData) {
  console.log("postUpdatedUserData", payload);

  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));

    const data = yield call(authService.putUpdatedUserData, payload);
    if (data.status === 200) {
      rootNavigation.navigate("TariffPage", {
        screen: "TariffPageStack",
      });
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

//GET ME
function* getMe() {
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));

    const response = yield call(authService.getMe);
    if (response.status === 200) {
      yield put(setUserInfo(response.data));
    }
  } catch (error) {
    yield put(setGeneratePasswordError(true));
    console.log("ERROR:", error);
  } finally {
    yield put(setLoader(false));
  }
}

function* logout() {
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));
    yield call(authService.logout);
  } catch (error) {
    console.log("ERROR LOGOUT", error);
    yield put(setGeneratePasswordError(true));
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

export function* watchCheckPinCode() {
  yield takeLatest(actions.CHECK_PIN_CODE, checkPinCode);
}

export function* watchPostUpdatedUserData() {
  yield takeLatest(actions.POST_UPDATED_DATE, postUpdatedUserData);
}

export function* watchGetMe() {
  yield takeLatest(actions.GET_ME, getMe);
}

export function* watchLogout() {
  yield takeLatest(actions.LOGOUT, logout);
}

export function* authSagas() {
  yield all([fork(watchGeneratePassword)]);
  yield all([fork(watchPostClientData)]);
  yield all([fork(watchCheckPinCode)]);
  yield all([fork(watchPostUpdatedUserData)]);
  yield all([fork(watchGetMe)]);
  yield all([fork(watchLogout)]);
}
