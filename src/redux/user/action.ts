import { createAction } from '@reduxjs/toolkit';

import {
  FETCH_USER,
  FetchUserParameter,
  LOGIN,
  SET_USER_NAME,
} from './types/actionType';

export const login = createAction(LOGIN);
export const fetchUser = createAction<FetchUserParameter>(FETCH_USER);
export const setUserName = createAction(SET_USER_NAME, (userName: string) => ({
  payload: userName,
}));
