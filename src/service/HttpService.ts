import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootNavigation from "../navigator/helper/root-navigation";
import { useSelector } from "../hooks";
import { API_URL_DEVELOPMENT } from "../config/env";

class HttpService {
  private readonly baseUrl: string;

  private readonly client: AxiosInstance;

  private _isRefreshingByInterceptor = false;

  public get axiosInstance() {
    return this.client;
  }

  public constructor(options = {}) {
    const baseUrl = API_URL_DEVELOPMENT;
    this.baseUrl = baseUrl;
    this.client = axios.create({ baseURL: this.baseUrl, ...options });
    this.attachInterceptors();
  }

  private attachInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (!axios.isAxiosError(error) || this._isRefreshingByInterceptor) {
          this._isRefreshingByInterceptor = false;
          return Promise.reject(error);
        }

        const originalRequest = error.config;

        console.log(
          `Request ${error.config.method?.toUpperCase() ?? ""} ${
            error.config.url
          } failed with status code ${error.response?.status}!`
        );

        if (error.response?.status === 401) {
          this._isRefreshingByInterceptor = true;

          return new Promise((resolve) => {
            this.refreshToken().then((token) => {
              axios({
                ...originalRequest,
                headers: {
                  ...originalRequest.headers,
                  Authorization: `Bearer ${token}`,
                },
              })
                .then((response) => {
                  console.log(
                    `Retry ${response.config.method?.toUpperCase()} ${
                      response.config.url
                    }: 200 OK`
                  );
                  resolve(response);
                })
                .catch((error) => {
                  console.log(
                    `Retry failed with status code ${error.response?.status}!`
                  );
                });
            });
          });
        }

        return Promise.reject(error);
      }
    );
  }

  private async refreshToken() {
    const refreshToken = await HttpService.getRefreshTokenFromAsyncStorage();
    const access = await this.getAccessToken();

    console.log("interceptors token", refreshToken);
    console.log("interceptors access", access);

    if (!refreshToken) {
      // const wallet: { id?: string | number } = useSelector(
      //   (wallet) => wallet.wallet.setExistingWallet
      // );
      // try {
      //   console.log("wallet id interceptor", wallet);
      //   await this.client.post(`/wallet/${wallet?.id}/`);
      // } catch (error) {
      //   console.log("Error delete wallet", error.response.data);
      // }

      await this.logout();
      rootNavigation.navigate("PickRegistration", {
        screen: "PickRegistrationStack",
      });
      return Promise.reject();
    }

    try {
      const response = await this.client.post<{
        access: string;
        refresh: string;
      }>("/user/token/refresh/", {
        refresh: refreshToken,
      });

      if (response.status === 200) {
        console.log(`Refresh token: 200 OK. New tokens:`);
        console.log(`Access token: ${response.data.access}`);
        await AsyncStorage.setItem("access", response.data.access);
        return Promise.resolve(response.data.access);
      }

      return Promise.reject();
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        console.error(`Cannot refresh token.\nUnknown error`);
        return Promise.reject(error);
      }

      console.error(
        `Cannot refresh token.\nRequest failed with status code ${
          error.response?.status ?? ""
        }`
      );

      if (error.response?.status === 401) {
        await this.logout();
      }

      return Promise.reject(error);
    } finally {
      this._isRefreshingByInterceptor = false;
    }

    return Promise.reject();
  }

  public destroySession = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.removeItem("access");
    await AsyncStorage.removeItem("refresh");
    this.removeHeaders(["Authorization"]);
  };

  public logout = async () => {
    await this.destroySession();
    return { ok: true };
  };

  public attachHeaders(headers: Record<string, string>) {
    Object.assign(this.client.defaults.headers, headers);
  }

  public removeHeaders(headerKeys: string[]) {
    delete axios.defaults.headers.common.Authorization;
    headerKeys.forEach((key) => delete this.client.defaults.headers[key]);
  }

  public getHeaders() {
    return this.client.defaults.headers;
  }

  public handleSuccessResponse(response: string) {
    console.log("refreshed axios");
    return response;
  }

  public createSession = async (access: string, refresh: string) => {
    await AsyncStorage.setItem("access", access);
    await AsyncStorage.setItem("refresh", refresh);
    this.setAuthorizationHeader();
  };

  public setAuthorizationHeader = () => {
    const accessToken = this.getAccessToken();
    if (accessToken) {
      this.attachHeaders({
        Authorization: `Bearer ${accessToken}`,
      });
    }
  };

  public getAccessToken = async () => {
    const user = await AsyncStorage.getItem("access");
    return user || undefined;
  };

  private static async getRefreshTokenFromAsyncStorage() {
    return AsyncStorage.getItem("refresh");
  }
}

const options = {
  baseURL: API_URL_DEVELOPMENT,
};

const httpService = new HttpService(options);

export default httpService;
