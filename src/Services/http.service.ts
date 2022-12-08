import axios from "axios";
import cookies from "src/utils/cookies";

// ** Config
// import authConfig from 'src/config/auth'

const instance = axios.create({
  // baseURL: "http://192.168.0.42:6000/api/v1",
  // baseURL: "https://culturefy-backend.herokuapp.com/api/v1",
  baseURL: "http://localhost:5000/api/v1",
  // timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = cookies.get("accessToken");
  // console.log(storedToken)

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
    },
  };
});

export default instance;
