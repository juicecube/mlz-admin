type SupportingEnv = 'development' | 'production' | 'test' | 'staging' | 'preview' | 'deploying';
declare interface Window extends global.Window {
  IconScripts: URL['href'][];
  __DEV__: SupportingEnv | undefined;
  __MLZ_ADMIN_BUILD_ENV__: SupportingEnv | undefined;
  __MLZ_ADMIN_RUNTIME_ENV__: 'development' | 'production' | 'test' | 'staging';
  __MLZ_ADMIN_VERSION__: string;
  requestIdleCallback?: (callback: () => void, options?: any) => void;
  runningBasicRequestHooksPromise?: Map<string, unknown>;
}
