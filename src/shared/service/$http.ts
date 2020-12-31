import Http from '@mlz/axios';

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
    return Promise.reject(err);
  },
);

Http.setResInterceptor(
  (res) => {
    switch (res.status) {
      case 200:
        return res.data;
      default:
        return Promise.reject(res);
    }
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default Http;
