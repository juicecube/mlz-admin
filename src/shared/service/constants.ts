export type supporttingTypes = 'production' | 'development' | 'test' | 'staging' | 'dev';
enum env {
  'production' = '',
  'development' = 'dev',
  'test' = 'test',
  'staging' = 'staging',
}
export const envTransformer = (NODE_ENV: supporttingTypes) => env[NODE_ENV];
