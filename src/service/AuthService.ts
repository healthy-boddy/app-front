import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiService from "./ApiService";

const ENDPOINTS = {
  GENERATE: "/user/generate_password/",
  USERCODE: "/user/token/",
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
    try {
      const body: { [key: string]: string } = {
        phone_number: phoneNumber,
      };
      const response = await this.apiClient
        .post("user/send_pin/", body)
        .then((res) => {
          console.log("response after enter phone", res);
          return res;
        });
      return response;
    } catch (error) {
      return error.response.data.phone_number[0];
    }
  };

  public postClientData = async (payload: {
    phone_number: string;
    password: string;
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

  public checkPinCode = async (data: {
    phone_number: string;
    password: string;
  }) => {
    try {
      const body: object = {
        phone_number: data.phone_number,
        password: data.password,
      };
      const response = await this.apiClient
        .post("/user/token/", body)
        .then((res) => {
          if (res.data.access) {
            this.createSession(res.data.access, res.data.refresh);
            console.log("res data", res.data, res.status);
          }
          return res;
        });
      return response;
    } catch (error) {
      console.log("error response data check pi ", error.response.data);
      return error;
    }
  };

  public putUpdatedUserData = async (data: {
    gender: string;
    weight: string;
    birthDate: string;
  }) => {
    try {
      const body: object = {
        gender: data.gender,
        birthday: data.birthDate,
        weight: data.weight,
      };
      const response = await this.apiClient
        .put("user/client/update_me/", body)
        .then((res) => {
          // this.createSession(res.data.access, res.data.refresh);
          console.log("res data", res.data, res.status);
          return res;
        });
      return response;
    } catch (error) {
      console.log("error put method", error.response.data);
      return error;
    }
  };

  public sendPin = async (payload: string) => {
    const sendData = {
      phone_number: payload,
    };
    try {
      const response = await this.apiClient
        .post("/user/send_pin/", payload)
        .then((res) => {
          console.log("response send pin", sendData);
          return res;
        });
      return response;
    } catch (e) {
      console.log("get me error", e.response.data);
      return e;
    }
  };

  public getMe = async () => {
    try {
      const response = await this.apiClient.get("/user/me/").then((res) => {
        return res;
      });
      return response;
    } catch (e) {
      console.log("get me error", e.response.data);
      return e;
    }
  };

  public logout = async () => {
    await this.destroySession();
    return { ok: true };
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
}

const authService = new AuthService();

export default authService;
