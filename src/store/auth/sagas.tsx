import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import rootNavigation from "../../navigator/helper/root-navigation";
import { setGeneratePasswordError } from "../error";
import { setLoader } from "../loader";
import * as actions from "./action-types";
import { setNumber } from "./actions";
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
  console.log("POST DATA METHOD:", payload);
  try {
    yield put(setGeneratePasswordError(false));
    yield put(setLoader(true));

    const data = yield call(authService.postClientData, payload);

    console.log("data status", data?.status);
    if (data.status === 201) {
      return rootNavigation.navigate("PickGender", {
        screen: "PickGender",
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

    console.log("response status check pincode", response.status);
    if (response.data.access) {
      rootNavigation.navigate("TabNavigator", {
        screen: "TabNavigator",
      });
    } else {
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

export function* authSagas() {
  yield all([fork(watchGeneratePassword)]);
  yield all([fork(watchPostClientData)]);
  yield all([fork(watchCheckPinCode)]);
  yield all([fork(watchPostUpdatedUserData)]);
}
