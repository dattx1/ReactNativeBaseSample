import { REDUX_PATH } from '@src/constants';

export const LOGIN = `${REDUX_PATH}/user/login`;
export const SET_CURRENT_USER = `${REDUX_PATH}/user/setCurrentUser`;
export const FETCH_USER = `${REDUX_PATH}/user/fetchUser`;

export type FetchUserAction = {
  type: typeof FETCH_USER;
  payload: FetchUserParameter;
};

export type FetchUserParameter = {
  userId: string;
};
