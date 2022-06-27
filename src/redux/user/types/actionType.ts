import { REDUX_PATH } from '@src/constant';

export const LOGIN = `${REDUX_PATH}/user/login`;
export const SET_USER_NAME = `${REDUX_PATH}/user/setUserName`;
export const FETCH_USER = `${REDUX_PATH}/user/fetchUser`;

export type FetchUserAction = {
  type: typeof FETCH_USER;
  payload: FetchUserParameter;
};

export type FetchUserParameter = {
  userId: number;
};
