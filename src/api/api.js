import axios from "axios";
import { dns } from "../utils/constant";
import { getData } from "../utils/helpers";

const Api = axios.create({ baseURL: dns + "/api" });

Api.interceptors.request.use(async (config) => {
  const user = await getData("@user");
  const headers = {
    ...config.headers,
    Authorization: "Bearer " + user?.api_token ?? "",
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  };
  config.headers = headers;
  return config;
});

Api.interceptors.response.use(
  async (response) => {
    return Promise.resolve(response);
  },
  async (error) => {
    if (error) {
      console.log('ERR AXIOS',error);
      return Promise.reject(error);
    }
  },
);

export default Api;