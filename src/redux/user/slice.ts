import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState, UserType } from '@src/types';

import { LOGIN, SET_CURRENT_USER } from './actionType';

const initialState: UserState = {
  isLogined: false,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  extraReducers: {
    [LOGIN]: state => {
      state.isLogined = true;
    },
    [SET_CURRENT_USER]: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
    },
  },
  reducers: {},
});

export default userSlice;
