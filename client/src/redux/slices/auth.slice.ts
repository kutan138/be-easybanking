import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "src/models/index";

export interface RegisterPayLoad {
  email: string;
  password: string;
  name: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  isAuthenticated?: boolean;
  isLogging: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLogging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.isLogging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLogging = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLogging = false;
      state.isAuthenticated = false;
    },
    register(state, action: PayloadAction<RegisterPayLoad>) {
      state.isLogging = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isLogging = false;
    },
    registerFailed(state, action: PayloadAction<string>) {
      state.isLogging = false;
      state.isAuthenticated = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = undefined;
    },
  },
});

//Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;

//Reducer
const authReducer = authSlice.reducer;
export default authReducer;
