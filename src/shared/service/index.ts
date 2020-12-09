import { supporttingTypes, env } from './constants';

// utils
export const envTransformer = (NODE_ENV: supporttingTypes) => env[NODE_ENV];

// services
export { default as decodePhone } from './decode-phone';
