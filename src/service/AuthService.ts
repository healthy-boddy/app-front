import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GENERATE: "/user/generate_password/",
  USERCODE: "/user/token/",
  GETWALLET: "/wallet/",
  REFRESH: "/user/token/refresh/",
  UPDATENAME: "/user/update_me/",
  GETME: "/user/me/",
  SET_NEW_EMAIL: "/user/send_change_email_pin/",
};

class AuthService extends ApiService {
  public constructor() {
    super();
    this.init();
  }

  private init = async () => {
    const token = await this.getAccessToken();
    const user = await this.getUser();
    if (token) {
      await this.setAuthorizationHeader();
    }
  };

  public destroySession = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.removeItem("access");
    await AsyncStorage.removeItem("refresh");
    this.api.removeHeaders(["Authorization"]);
  };

  public createSession = async (access: string, refresh: string) => {
    await AsyncStorage.setItem("access", access);
    await AsyncStorage.setItem("refresh", refresh);
    await this.setAuthorizationHeader();
  };

  public setAuthorizationHeader = async () => {
    const accessToken = await this.getAccessToken();
    if (accessToken) {
      this.api.attachHeaders({
        Authorization: `Bearer ${accessToken}`,
      });
    }
  };

  public getUser = async () => {
    const user = await AsyncStorage.getItem("access");
    return user;
  };

  public getAccessToken = async () => {
    const user = await AsyncStorage.getItem("access");
    return user || undefined;
  };

  public generatePassword = async (phoneNumber: string) => {
    console.log("phoneNumber", phoneNumber);
    try {
      const body: { [key: string]: string } = {
        phone_number: phoneNumber,
      };
      const response = await this.apiClient
        .post("user/send_pin/", body)
        .then((res) => {
          console.log("RES USER", res);
          return res;
        });
      return response;
    } catch (error) {}
  };

  public postClientData = async (payload: {
    phone_number: string;
    number: string;
  }) => {
    console.log("payload", payload);
    try {
      const response = await this.apiClient
        .post("/user/client/", payload)
        .then((res) => {
          console.log("RES USER", res.data, res.status);
          return res;
        });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };

  public checkCode = async (data: any) => {
    try {
      const body: object = {
        email: data.email,
        password: data.password,
      };
      const response = await this.apiClient
        .post(ENDPOINTS.USERCODE, body)
        .then((res) => {
          this.createSession(res.data.access, res.data.refresh);
          return res.status;
        });
      return response;
    } catch (error) {
      return error;
    }
  };

  public logout = async () => {
    await this.destroySession();
    return { ok: true };
  };

  public getWallet = async () => {
    const accessToken = await this.getUser();
    return await this.apiClient
      .get(ENDPOINTS.GETWALLET, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log("error wallet get", error);
        return error.response.data;
      });
  };

  public refresh = async (payload: string) => {
    const obj: object = {
      refresh: payload,
    };

    try {
      const response = await this.apiClient
        .post(ENDPOINTS.REFRESH, obj)
        .then((res) => {
          this.createSession(res.data.token, res.data.refresh_token);
        });
      return response;
    } catch (error: unknown | any) {
      return error.response;
    }
  };

  public setName = (payload) => {
    try {
      const response = this.apiClient
        .put(ENDPOINTS.UPDATENAME, payload)
        .then((res) => {
          console.log("RES set new data (email):", res.status);
          return res;
        })
        .catch((error) => {
          console.log("ERROR SET NAME", error.response.data);
        });
      return response;
    } catch (error) {
      console.log("error set name", error.response.data);
      return error;
    }
  };

  public getUserInformation = async () => {
    try {
      const response = this.apiClient.get(ENDPOINTS.GETME).then((data) => {
        return data;
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  public setNewEmail = async (payload) => {
    console.log("setNewEmail payload", payload);
    try {
      const response = this.apiClient
        .post(ENDPOINTS.SET_NEW_EMAIL, payload)
        .then((res) => {
          console.log("data", res.data);
          return res;
        });
      return response;
    } catch (error) {
      console.log("ERROR CHANGE NAME", error.response.data);
      return error;
    }
  };
}

const authService = new AuthService();

export default authService;
