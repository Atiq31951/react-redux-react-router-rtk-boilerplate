import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import auth from "_/store/auth";
import allSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();

export const Store = configureStore({
  reducer: {
    auth,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(allSaga);
