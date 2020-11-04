import Http from '@mlz/axios';
import { message } from 'antd';
import { DECODE_HOST } from './constants';

Http.setResInterceptor(
  (res) => {
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
  (res) => {
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
