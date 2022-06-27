import { all } from 'redux-saga/effects';
import userSaga from '@src/redux/user/saga'

export default function* rootSaga() {
  yield all([userSaga()]);
}
