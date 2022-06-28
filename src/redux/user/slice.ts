import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from './types';
import { LOGIN, SET_USER_NAME } from './types/actionType';

const initialState: UserState = {
  isLogined: false,
  userName: '',
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: {
    [LOGIN]: state => {
      state.isLogined = true;
    },
    [SET_USER_NAME]: (state, action: PayloadAction<string>) => {
      state.userName += action.payload;
    },
  },
  reducers: {},
});

export default userSlice;
