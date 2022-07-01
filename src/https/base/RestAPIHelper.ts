import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export default class RestAPIHelper {
  private _config: AxiosRequestConfig = {};

  constructor(config: AxiosRequestConfig) {
    this._config = config;
  }

  public InitAxios(config: AxiosRequestConfig) {
    this._config = config;
  }

  public GetClient(
    cf: AxiosRequestConfig = {},
    callback: {
      refreshToken: () => Promise<any>;
    },
    customMessage?: {
      noInternetConnectionMessage?: string;
    },
  ): AxiosInstance {
    const axiosConfig = { ...this._config, ...cf };
    const client = axios.create(axiosConfig);

    client.interceptors.request.use(
      request => {
        return Promise.resolve(request);
      },
      error => {
        return Promise.reject(error);
      },
    );
    client.interceptors.response.use(
      async response => {
        return Promise.resolve(response);
      },
      error => {
        // Promise.reject(error);
        if (!error.response) {
          return Promise.reject({
            response: {
              data: {
                message: customMessage?.noInternetConnectionMessage,
              },
            },
          });
        }

        const status = error.response ? error.response.status : null;
        const errorCode = error.response
          ? error.response.data.error_code
          : null;
        if (status === 401 && errorCode === 4014 && !error.config._retry) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then(token => {
                error.config.headers.JWTAuthorization = token;
                return axios.request(error.config);
              })
              .catch(err => {
                return Promise.reject(err);
              });
          }

          error.config._retry = true;
          isRefreshing = true;

          return new Promise((resolve, reject) => {
            callback
              .refreshToken()
              .then(({ data }) => {
                error.config.headers.JWTAuthorization = data.access_token;
                processQueue(null, data.access_token);
                resolve(axios(error.config));
              })
              .catch(err => {
                processQueue(err, null);
                reject(err);
              })
              .finally(() => {
                isRefreshing = false;
              });
          });
        }
        return Promise.reject(error);
      },
    );
    return client;
  }
}
