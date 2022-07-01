import { all, put, takeEvery } from 'redux-saga/effects';

import { getUserByid } from '@src/https/user/userApi';
import { ResponseDataAPI } from '@src/https/base';
import { UserType } from '@src/types';

import { login, setCurrentUser } from './action';
import { FETCH_USER, FetchUserAction } from './actionType';

function* getUser(action: FetchUserAction): any {
  try {
    const { userId } = action.payload;
    const user: ResponseDataAPI<UserType> = yield getUserByid(userId);
    yield put(login());
    if (user?.data) {
      yield put(setCurrentUser(user.data));
    }
  } catch (error) {}
}

function* userSaga() {
  yield all([takeEvery(FETCH_USER, getUser)]);
}
export default userSaga;
