import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie } from "./AsyncStorage";

const apiUrl =
  process.env.REACT_APP_HOST_TYPE === "pro"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;
const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json; charset=utf-8",
  },
});
axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = getCookie("accessToken");
  config.headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return config;
});
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
