import axios from 'axios';

import { application } from './env';

const axiosInstance = axios.create({
  baseURL: 'SOME_ENDPOINT/baseApi',
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      application.env !== 'production'
        ? error.response && error.response.data
        : 'Something went wrong',
    ),
);

export * from 'axios';

export default axiosInstance;
