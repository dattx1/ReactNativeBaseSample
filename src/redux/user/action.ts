import { createAction } from '@reduxjs/toolkit';

import { UserType } from '@src/types';

import {
  FETCH_USER,
  FetchUserParameter,
  LOGIN,
  SET_CURRENT_USER,
} from './actionType';

export const login = createAction(LOGIN);
export const fetchUser = createAction<FetchUserParameter>(FETCH_USER);
export const setCurrentUser = createAction(
  SET_CURRENT_USER,
  (user: UserType) => ({
    payload: user,
  }),
);
