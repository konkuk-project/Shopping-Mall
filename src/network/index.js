import axios from "axios";

const createdAxios = axios.create();

createdAxios.interceptors.request.use(
  (config) => {
    console.log("interceptor-request", config);
    return config;
  },
  (rej) => {
    console.log("interceptor-request-error", rej);
  }
);

createdAxios.interceptors.response.use(
  (res) => {
    console.log("interceptor-response", res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getPhotos = async (path) => {
  const res = await createdAxios(`https://jsonplaceholder.typicode.com${path}`);
  return res.data;
};
