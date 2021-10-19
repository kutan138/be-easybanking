import { Action, configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { ThunkAction } from "redux-thunk";
import { history } from "src/utils";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const isProduction = process.env.REACT_APP_HOST_TYPE === "prod" ? true : false;
const sagaMiddleware = createSagaMiddleware();
const arrMiddleware = [sagaMiddleware, routerMiddleware(history)];
if (isProduction) {
  arrMiddleware.push(logger);
}
const store = configureStore({
  reducer: rootReducer,
  middleware: arrMiddleware,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
