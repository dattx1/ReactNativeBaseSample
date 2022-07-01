import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import i18next from 'i18next';
import merge from 'lodash/merge';

import {
  API_URL,
  BASIC_AUTHEN_KEY,
  ENABLE_BASIC_AUTHEN,
} from '@src/constants/environment';
import { isIos } from '@src/constants';

import RestHelper from './RestAPIHelper';
import { ApiCustomConfig, AppToken, ResponseDataAPI } from './types';

class Api extends RestHelper {
  private _JWTAuthorization: string = '';
  private _RefreshToken: string = '';

  constructor() {
    super({
      baseURL: API_URL,
    });
  }

  public delay = (task: Promise<any>) =>
    new Promise<void>(res => task.then(() => res()).catch(() => res()));

  public SetJWTAuthorizationToken(token: string) {
    this._JWTAuthorization = token;
  }

  public SetRefreshToken(token: string) {
    this._RefreshToken = token;
  }

  public SetAbcToken(token: AppToken) {
    this.SetJWTAuthorizationToken(token.accessToken);
    this.SetRefreshToken(token.refreshToken);
  }

  public RefreshAccessToken() {
    return this.Patch<any>(
      `${API_URL}auth/refresh_token`,
      {},
      {
        headers: {
          RefreshToken: this._RefreshToken,
          JWTAuthorization: this._JWTAuthorization,
        },
      },
    ).then(result => {
      this.SetAbcToken(result.data);
      return Promise.resolve(result);
    });
  }

  private _HandleError<T>() {
    return (error: AxiosError): Promise<ResponseDataAPI<T>> => {
      return Promise.reject(error);
    };
  }

  private _HandleSuccess<T>() {
    return (response: AxiosResponse): Promise<ResponseDataAPI<T>> => {
      const { data, status } = response;
      return Promise.resolve({
        data,
        status,
      });
    };
  }

  public GetAxiosRequestConfig(
    cf: AxiosRequestConfig = {},
  ): AxiosRequestConfig {
    let authenConfig = {};
    if (ENABLE_BASIC_AUTHEN === 'true') {
      authenConfig = {
        Authorization: `Basic ${BASIC_AUTHEN_KEY}`,
      };
    }

    if (this._JWTAuthorization) {
      authenConfig = {
        ...authenConfig,
        JWTAuthorization: this._JWTAuthorization,
      };
    }

    const config: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...authenConfig,
      },
    };
    return merge(config, cf);
  }

  public GetClient(config: ApiCustomConfig = {}): AxiosInstance {
    return super.GetClient(
      this.GetAxiosRequestConfig(config),
      {
        refreshToken: () => this.RefreshAccessToken(),
      },
      {
        noInternetConnectionMessage: i18next.t(
          'validation:no_internet_connection',
        ),
      },
    );
  }

  public Post<T>(
    path: string,
    data: object,
    config: ApiCustomConfig = {},
  ): Promise<ResponseDataAPI<T>> {
    return this.GetClient(config)
      .post(path, data)
      .then(this._HandleSuccess<T>())
      .catch(this._HandleError<T>());
  }

  public Get<T>(
    path: string,
    config: ApiCustomConfig = {},
  ): Promise<ResponseDataAPI<T>> {
    // do not keep the cache from android
    const androidConfig = {
      ...config,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    };
    const newConfig = isIos ? config : androidConfig;
    return this.GetClient(newConfig)
      .get(path)
      .then(this._HandleSuccess<T>())
      .catch(this._HandleError<T>());
  }

  public Delete<T>(
    path: string,
    config: ApiCustomConfig = {},
  ): Promise<ResponseDataAPI<T>> {
    return this.GetClient(config)
      .delete(path)
      .then(this._HandleSuccess<T>())
      .catch(this._HandleError<T>());
  }

  public Patch<T>(
    path: string,
    data: object,
    config: ApiCustomConfig = {},
  ): Promise<ResponseDataAPI<T>> {
    return this.GetClient(config)
      .patch(path, data)
      .then(this._HandleSuccess<T>())
      .catch(this._HandleError<T>());
  }

  public Put<T>(
    path: string,
    data: object,
    config: ApiCustomConfig = {},
  ): Promise<ResponseDataAPI<T>> {
    return this.GetClient(config)
      .put(path, data)
      .then(this._HandleSuccess<T>())
      .catch(this._HandleError<T>());
  }

  public GetAccessToken(): string {
    return this._JWTAuthorization;
  }
}
const api = new Api();
export { api };
