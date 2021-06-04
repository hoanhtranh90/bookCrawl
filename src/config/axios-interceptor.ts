import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_API_URL } from './constants';
import store from '../shared/store';
import Toast from 'react-native-toast-message';
const TIMEOUT = 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

const setupAxiosInterceptors = (onUnauthenticated: any) => {
  const onRequestSuccess = async (config: AxiosRequestConfig) => {
    const token = await AsyncStorage.getItem('jwtToken');
    const otpToken = await AsyncStorage.getItem('otpToken');
    const currentDeptRole = store.getState().authReducer.currentRole;
    if (currentDeptRole) {
      config.headers.UserDeptRoleId = currentDeptRole.userDeptRoleId;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (otpToken) {
      config.headers.OtpJwt = otpToken;
    }
    config.paramsSerializer = params =>
      qs.stringify(params, {
        arrayFormat: 'repeat',
      });
    return config;
  };
  const onResponseSuccess = (response: AxiosResponse) => response;
  const onResponseError = (error: AxiosError) => {
    console.log(JSON.stringify(error));
    if (error.message === 'Network Error') {
      Toast.show({
        type: 'error',
        text1: 'Mất kết nối mạng',
      });
    }
    if (error.code === '403' || error.code === '401') {
      onUnauthenticated();
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
