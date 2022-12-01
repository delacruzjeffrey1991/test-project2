import axios, { AxiosResponse } from "axios";
const v3API = "https://api.us.amity.co/api/v3";
const v4API = "https://api.us.amity.co/api/v4";
import { xAPIKey, xServerKey } from "src/store/apps/auth/constants";

export async function getAuthToken(userId: string): Promise<any> {
  try {
    const url = `${v3API}/authentication/token`;
    const config = {
      headers: {
        "x-server-key": xServerKey,
      },
      params: {
        userId: userId,
      },
    };
    const response = await axios.get<string>(url, config);

    console.log("token Response");
    console.log(response);
    return response.data;
  } catch (err) {
    return "";
  }
}

export async function getSession(
  authToken: string,
  userId: string,
  deviceId: string
): Promise<any> {
  try {
    const url = `${v3API}/sessions`;
    const config = {
      headers: {
        "x-api-key": xAPIKey,
      },
    };

    const response = await axios.post<AxiosResponse<any, any>>(
      url,
      {
        authToken: authToken,
        userId: userId,
        deviceId: deviceId,
      },
      config
    );
    console.log("getSession response data in Posts");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return "";
  }
}
