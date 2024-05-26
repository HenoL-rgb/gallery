import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.UNSPLASH_API,
});

axios.interceptors.request.use(
  config => {
    config.params = {
      ...config.params,
      client_id: process.env.UNSPLASH_TOKEN,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axios;
