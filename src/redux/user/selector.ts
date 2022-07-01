import { UserState } from '@src/types';

export const isLogined = (state: { User: UserState }) => state.User.isLogined;

export const currentUserSelector = (state: { User: UserState }) =>
  state.User.currentUser;
