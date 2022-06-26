import { UserState } from './types';

export const isLogined = (state: { User: UserState }) => state.User.isLogined;
