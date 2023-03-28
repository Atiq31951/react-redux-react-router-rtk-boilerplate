import { call, put, all } from "redux-saga/effects";
import { v4 as uuidv4 } from 'uuid';

import {
  LOGIN_USER,
  AUTH,
  USER_NOT_FOUND,
} from "_/constants/auth";
import { loginUser } from "_/services/api/auth";

function* loginUser({ payload }) {
  const { error, response } = yield call(loginUser, payload);
  if (!error) {
    yield put({
      type: 'auth/updateUserInfo',
      payload: response,
    });
  } else {
    const uuid = uuidv4();
    yield put({
      type: 'app/showTooltip',
      payload: {
        type: AUTH,
        description:
          error.type === USER_NOT_FOUND
            ? "User not found with this email"
            : "Wrong user email / password",
        id: uuid,
      },
    });
    setTimeout(() => {
      yield put({
        type: 'app/hideTooltip',
        payload: {
          id: uuid,
        },
      });
    }, timeout);
  }
}

export function* root() {
  yield all([yield takeLatest(LOGIN_USER, loginUser)]);
}
