/* tslint:disable */
import axios from 'axios';
import Storage from './storage-util';
import { IS_LOCALHOST } from './api-config';

const TIMEOUT = 1000000; // 10000
const setupAxiosInterceptors = (onUnauthenticated, clearAuthToken) => {
  const onRequestSuccess = config => {
    const token =
      Storage.local.get('jhi-authenticationToken') ||
      Storage.session.get('jhi-authenticationToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (IS_LOCALHOST === 'true') {
      config.headers.Username = 'myappit-app-v2.myshopify.com';
    }

    config.timeout = TIMEOUT;
    // config.url = `${getBasePath().replace(/\/$/, '')}${config.url}`;
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      clearAuthToken();
      onUnauthenticated();
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
