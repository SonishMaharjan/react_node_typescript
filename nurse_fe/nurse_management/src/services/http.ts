import axios from "axios";
import { redirectTo } from "../utils";

const config = {
  baseURL: process.env.REACT_APP_BACKEND_API_URL,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

/**
 * Axios instance for AsHttp.
 */
export const http = axios.create(config);

const configWithAccessToken = (axiosConfig: any, accessToken: string) => ({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    Authorization: `Bearer ${accessToken}`,
  },
});

/**
 * Axios instance for AsHttp.
 */
export const authenticatedHttp = axios.create(config);

authenticatedHttp.interceptors.request.use(
  async (requestConfig) => {
    const accessToken = await localStorage.getItem("accessToken");

    if (accessToken) {
      return configWithAccessToken(requestConfig, accessToken);
    }

    // eslint-disable-next-line no-restricted-globals
    redirectTo("/login");

    throw new axios.Cancel("missing access token");

    //TODO: Add refesh token logic here.
    // if (!refreshToken) {

    // }

    // const newAccessToken = await refreshAccessTokenHelper(http, refreshToken);

    // await storeAccessToken(newAccessToken);

    // return configWithAccessToken(requestConfig, newAccessToken);
  },
  (requestError) => {
    throw requestError;
  }
);
