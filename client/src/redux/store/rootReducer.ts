import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { authReducer, postReducer } from "../slices";
import { history } from "src/utils";

const rootPersistConfig = { key: "root", storage, whitelist: ["post"] }; // This is to local storage
const authPersistConfig = { key: "auth", storage: storageSession }; // This is to session storage
const rootReducer = combineReducers({
  router: connectRouter(history),
  post: postReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
