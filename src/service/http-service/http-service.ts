import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// eslint-disable-next-line import/no-unresolved
import { API_URL } from "@env";

import { HttpLogger } from "./http-logger";

export interface TokensPair {
  token: string;
  refresh_token: string;
}

export interface HttpClientQueryParams {
  [key: string]: any;
}

export interface HttpMethodProps {
  data?: any;
  headers?: Record<string, string>;
  params?: HttpClientQueryParams;
  useAuthorization?: boolean;
}

export type HttpGetMethodProps = Omit<HttpMethodProps, "data">;

/**
 * This parameter enables logger.
 * The output includes successful and failure requests, and retries.
 * @default __DEV__
 */
const LOGGER_ENABLED = __DEV__;

export class HttpService {
  private readonly _baseUrl: string;

  private readonly _axiosInstance: AxiosInstance;

  private _isRefreshingByInterceptor = false;

  public get axiosInstance() {
    return this._axiosInstance;
  }

  private _logger = LOGGER_ENABLED ? new HttpLogger() : null;

  public constructor(
    public options: AxiosRequestConfig = {},
    private readonly onLogout?: () => void
  ) {
    if (!API_URL) {
      throw new Error(
        "Variable API_URL not found. Specify it in .env or .env.development file"
      );
    }
    this._baseUrl = API_URL;
    this._axiosInstance = axios.create({ baseURL: this._baseUrl, ...options });
    this.attachInterceptors();
  }

  public async get<T>(
    relativeUrl: string,
    props?: HttpGetMethodProps
  ): Promise<AxiosResponse<T>> {
    console.log("URL CHECK:", this._baseUrl);

    const axiosConfig = await this.getAxiosConfig<T>(props);
    return this._axiosInstance.get<T, AxiosResponse<T>, T>(
      relativeUrl,
      axiosConfig
    );
  }

  public async post<T>(
    relativeUrl: string,
    props?: HttpMethodProps
  ): Promise<AxiosResponse<T>> {
    const axiosConfig = await this.getAxiosConfig<T>(props);
    return this._axiosInstance.post<T, AxiosResponse<T>, T>(
      relativeUrl,
      props?.data || {},
      axiosConfig
    );
  }

  public async put<T>(
    relativeUrl: string,
    props?: HttpMethodProps
  ): Promise<AxiosResponse<T>> {
    const axiosConfig = await this.getAxiosConfig<T>(props);
    return this._axiosInstance.put<T, AxiosResponse<T>, T>(
      relativeUrl,
      props?.data || {},
      axiosConfig
    );
  }

  public async delete<T>(
    relativeUrl: string,
    props?: HttpMethodProps
  ): Promise<AxiosResponse<T>> {
    const axiosConfig = await this.getAxiosConfig<T>(props);
    return this._axiosInstance.delete<T, AxiosResponse<T>, T>(
      relativeUrl,
      axiosConfig
    );
  }

  private async getAxiosConfig<T>(
    props: HttpMethodProps = {
      useAuthorization: true,
    }
  ): Promise<AxiosRequestConfig<T>> {
    const useAuthorization = props?.useAuthorization ?? true;

    if (!useAuthorization) {
      return props;
    }

    const token = await HttpService.getAccessTokenFromAsyncStorage();
    console.log("TOKEN:", token);
    if (!token) {
      await this.refreshTokensSilently();
    }

    return {
      params: props.params ?? {},
      headers: {
        ...props.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }

  private attachInterceptors() {
    this._axiosInstance.interceptors.response.use(
      (response) => {
        this._logger?.logRequestSuccess(response);
        return response;
      },
      async (error) => {
        if (!axios.isAxiosError(error) || this._isRefreshingByInterceptor) {
          this._isRefreshingByInterceptor = false;
          return Promise.reject(error);
        }

        const originalRequest = error.config;

        this._logger?.logRequestFailed(error);

        if (error.response?.status === 401) {
          this._isRefreshingByInterceptor = true;

          return new Promise((resolve, reject) => {
            this.refreshTokensSilently().then((token) => {
              axios({
                ...originalRequest,
                headers: {
                  ...originalRequest.headers,
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((response) => {
                  this._logger?.logRetrySuccess(response);
                  resolve(response);
                })
                .catch((error) => {
                  this._logger?.logRetryFailed(error);
                  reject(error);
                });
            });
          });
        }

        return Promise.reject(error);
      }
    );
  }

  private async refreshTokensSilently() {
    const refreshToken = await HttpService.getRefreshTokenFromAsyncStorage();

    if (!refreshToken) {
      await this.logout();
      return Promise.reject();
    }

    try {
      const response = await this._axiosInstance.post<TokensPair>(
        "/user/token/refresh/",
        {
          refresh_token: refreshToken,
        }
      );

      if (response.status === 200) {
        this._logger?.logNewTokens(response);
        await AsyncStorage.setItem("access", response.data.token);
        await AsyncStorage.setItem("refresh", response.data.refresh_token);
        return Promise.resolve(response.data.token);
      }

      return Promise.reject();
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        console.error(`Cannot refresh token.\nUnknown error`);
        return Promise.reject(error);
      }

      this._logger?.logRequestFailed(error);

      if (error.response?.status === 401) {
        await this.logout();
      }

      return Promise.reject(error);
    } finally {
      this._isRefreshingByInterceptor = false;
    }

    return Promise.reject();
  }

  private static async getAccessTokenFromAsyncStorage() {
    return AsyncStorage.getItem("access");
  }

  private static async getRefreshTokenFromAsyncStorage() {
    return AsyncStorage.getItem("refresh");
  }

  private async logout() {
    await AsyncStorage.removeItem("access");
    await AsyncStorage.removeItem("refresh");
    this.onLogout?.();
  }
}
