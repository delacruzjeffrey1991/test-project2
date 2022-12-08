import { AxiosResponse } from "axios";
import requests from "../Services/http.service";
import cookies from "src/utils/cookies";
import { getAuthToken, getSession } from "src/utils/auth";

const AuthServices = {
  login(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/signin`, body);
  },
  async session(userId: string, email: string): Promise<any> {
    const authToken = await getAuthToken(email);
    const session = await getSession(authToken, email, userId);
    return session;
  },
  signup(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/signup`, body);
  },
  logout(): Promise<AxiosResponse<any, any>> {
    return requests.delete(`/signout`);
  },
  businessAdd(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/business`, body);
  },
  verify(): Promise<AxiosResponse<any, any>> {
    const storedToken = cookies.get("accessToken");
    if (!storedToken) return;
    return requests.post(`/verify`);
  },
};

export default AuthServices;
