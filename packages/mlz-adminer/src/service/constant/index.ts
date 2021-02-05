export { config } from './config';
export const isCompiled = !'$THIS_WILL_BE_EMPTY_AFTER_DIST$';
export const env = process.env.NODE_ENV || 'development';
