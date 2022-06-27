import { all, put, takeEvery } from 'redux-saga/effects';
import { login } from '../action';
import { FetchUserAction, FETCH_USER } from '../types/actionType';

function* getUser(action: FetchUserAction) {
  console.log('🚀 ~ file: index.ts ~ line 2 ~ *getUser ~ action', action);
  yield put(login());
}

function* userSaga() {
  yield all([takeEvery(FETCH_USER, getUser)]);
}
export default userSaga;
