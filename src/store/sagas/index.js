import { all } from "redux-saga/effects";

import auth from "_/store/sagas/auth";

function* allSaga() {
  yield all([auth()]);
}

export default allSaga;
