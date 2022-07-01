import { AxiosRequestConfig } from 'axios';

export type AppToken = {
  accessToken: string;
  refreshToken: string;
};

export type ResponseDataAPI<T> = {
  data?: T;
  code?: string;
  name?: string;
  message?: string;
};

export type ApiCustomConfig = AxiosRequestConfig & {};
