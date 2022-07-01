import { API_PATH } from '@src/constants';
import { UserType } from '@src/types';

import { api, ResponseDataAPI } from '../base';

export const getUserByid = (
  userId: string,
): Promise<ResponseDataAPI<UserType>> =>
  api.Get<UserType>(`${API_PATH.USER.GET}/${userId}`);
