import Http from '@mlz/axios';
import { message } from 'antd';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

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
    // console.log("请求后res", res);
    switch (res.status) {
      case 200:
        return res.data;
      default:
        return res;
    }
  },
  (err) => {
    // console.log("请求后err", err);
    message.error(err);
    return Promise.reject(err);
  },
);

export default Http;
