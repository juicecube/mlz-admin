import { config } from './config';
export const isCompiled = !'$THIS_WILL_BE_EMPTY_AFTER_DIST$';
export const env = process.env.NODE_ENV || 'development';

export const mockHost = `http://rap2api.taobao.org/app/mock/252468/admini`;
export const redirectMiddleService = `https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/mock_redirect`;
export const OpenServiceHOST = config[env]?.['host']?.['open-service'];

const ServiceConfig = config;
export default ServiceConfig;
