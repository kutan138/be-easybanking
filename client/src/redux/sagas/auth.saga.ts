import { call, delay, fork, put, take } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "src/api/auth";
import { LoginResponse } from "src/models/auth";
import { setCookie } from "src/utils/AsyncStorage";
import { authActions, LoginPayload } from "../slices/auth.slice";
import { push } from "connected-react-router";

function* handleLogin(payload: LoginPayload) {
  try {
    yield put(authActions.login());
    const data: LoginResponse = yield call(authApi.login, payload);
    if (!data) {
      throw new Error("Login failed");
    }
    const { accessToken, refreshToken, user } = data;
    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    yield put(authActions.loginSuccess(user));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
  // redirect to admin page
  yield put(push("/dashboard"));
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem("access_token");

  // redireact to login page
  yield put(push("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    // handleLogout trước rồi mới quay lại loop
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
