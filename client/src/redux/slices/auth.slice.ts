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
  isLoading: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    register(state, action: PayloadAction<RegisterPayLoad>) {
      state.isLoading = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
    },
    registerFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
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
