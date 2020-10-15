import Http from '@mlz/axios';
import { message } from 'antd';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DECODE_HOST } from './constants';

Http.setReqInterceptor(
  (config: AxiosRequestConfig) => {
    // console.log('请求前-config', config);
    return config;
  },
  (err) => {
    // console.error(err);
    message.error(err);
  },
);

Http.setResInterceptor(
  (res: AxiosResponse) => {
    switch (res.status) {
      case 200:
        return res.data;
      default:
        return res;
    }
  },
  (err) => {
    message.error(err);
    return Promise.reject(err);
  },
);

Http.setResInterceptor(
  (res: AxiosResponse) => {
    switch (res.status) {
      case 200:
        return res.data;
      default:
        message.error('位置异同异常');
        return Promise.reject(res);
    }
  },
  (err) => {
    message.error(err);
    return Promise.reject(err);
  },
  DECODE_HOST,
);

export default Http;
