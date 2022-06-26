import { LOGIN, SET_USER_NAME } from './types/actionType';
import { createAction } from '@reduxjs/toolkit';

export const login = createAction(LOGIN);
export const setUserName = createAction(SET_USER_NAME, (userName: string) => ({
  payload: userName,
}));
