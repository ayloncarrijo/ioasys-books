import axios from "axios";
import { parseCookies } from "nookies";

const Api = {
  DEFAULT: axios.create({
    baseURL: "https://books.ioasys.com.br/api/v1",
  }),
};

Api.DEFAULT.interceptors.request.use((config) => {
  const { token } = parseCookies();

  return token
    ? {
        ...config,
        headers: {
          Authorization: `Bearer ${token}`,
          ...config.headers,
        },
      }
    : config;
});

export default Api;
