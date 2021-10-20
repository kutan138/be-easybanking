import { call, fork, put, take } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { race } from "redux-saga/effects";
import authApi from "src/api/auth";
import { removeCookie, setCookie } from "src/utils/AsyncStorage";
import { authActions, LoginPayload } from "../slices/auth.slice";

function* forwardTo(location: string) {
  yield console.log(location);
  yield put(push(location));
}

function* handleLogin(payload: LoginPayload) {
  try {
    yield put(authActions.login(payload));
    const { data } = yield call(authApi.login, payload);
    const { accessToken, refreshToken, user } = data;
    setCookie("accessToken", accessToken);
    setCookie("refreshToken", refreshToken);
    yield put(authActions.loginSuccess(user));
    return data;
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
    return false;
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(authActions.logout.type);
    removeCookie("accessToken");
    forwardTo("/");
  }
}
interface LoginFlowState {
  auth: boolean;
  logout: boolean;
}
function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(
      authActions.login.type
    );
    const { auth }: LoginFlowState = yield race({
      auth: call(handleLogin, action.payload),
      logout: take(authActions.logout.type),
    });
    if (auth) {
      yield forwardTo("/dashboard");
    }
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
  yield fork(logoutFlow);
}
