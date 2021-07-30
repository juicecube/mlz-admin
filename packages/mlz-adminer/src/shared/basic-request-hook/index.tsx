import React, { useState, useEffect, useCallback } from 'react';
import { isCompiled } from '../service/constant';
import { IBasicHooksOptions } from './index.type';
import { getRequestStatus } from '../utils';

const responseHandler = (res: any, responseSetter: Function, loadingToggler: Function, isCatchingError = false) => {
  !isCatchingError && responseSetter(res);
  loadingToggler(false);
  return res;
};
export const noManualSettedReminder = `run/cancel function should ran with a spacified 'manual' option setted`;

/**
 *
 * @param promiseFunction
 * @param options
 *
 * <P> means P-arams, is the type of 2nd param.
 * <R> means R-esponse, is the return type of 1st param's ran result, it usually to be a promise-resolved data.
 */
const useBasicRequest = <P extends Partial<IBasicHooksOptions>, R>(promiseFunction: (...args: any[]) => Promise<R>, options?: P) => {
  //
  const { manual, deps, requestParams, singleton = false, cache = 0, init } = options || {};

  //
  const [response, setResponse] = useState<R>();
  const [loading, toggleLoading] = useState(init?.loading || false);

  // run
  const run = useCallback((args?: unknown) => {
    if (!manual) {
      throw new Error(noManualSettedReminder);
    }
    toggleLoading(true);

    // ❗️REMARK: args of run() is important! than requestParams here
    return promiseFunction(args || requestParams)
      .then((res) => responseHandler(res, setResponse, toggleLoading))
      .catch((err) => responseHandler(err, setResponse, toggleLoading, true));
  }, []);

  // TODO: abort/throttle/debounce/cache etc,
  const abort = useCallback(() => {}, []);

  useEffect(() => {
    if (!manual) {
      // 开启请求单例
      const uniqueFrameKey = `${promiseFunction.name}-${JSON.stringify(requestParams)}`;
      const fetcher = (flag: 'forced' | 'unforced', checker = window.runningBasicRequestHooksPromise, fromCache?: boolean, initData?: unknown) => {
        // read from cache
        if (fromCache) {
          let data = null as any;
          // 获取缓存数据
          if (typeof checker?.get(uniqueFrameKey) !== 'number') {
            data = checker?.get(uniqueFrameKey);
          }
          responseHandler(data, setResponse, toggleLoading);
          return Promise.resolve(data);
        }

        //
        if (checker?.get(uniqueFrameKey) !== getRequestStatus('pending') || flag === 'forced') {
          return promiseFunction(requestParams)
            .then((res) => {
              responseHandler(res, setResponse, toggleLoading);
              checker?.set(uniqueFrameKey, res);
            })
            .catch((err) => {
              responseHandler(err, setResponse, toggleLoading, true);
              checker?.set(uniqueFrameKey, getRequestStatus('rejected'));
            });
        }
      };
      if (singleton) {
        // keep promises to be a singleton. avoiding duplicated requests from serveral
        // components who's using this or hooks those packaged with this.
        const singletonTarget = window.runningBasicRequestHooksPromise || new Map();
        if (!singletonTarget) {
          // mount a singleton pattern instance onto window.
          window.runningBasicRequestHooksPromise = new Map();
        }
        if (singletonTarget.has(uniqueFrameKey)) {
          if (singletonTarget.get(uniqueFrameKey) !== getRequestStatus('pending')) {
            fetcher('unforced', singletonTarget);
            singletonTarget.set(uniqueFrameKey, getRequestStatus('pending'));
          } else if (singletonTarget.get(uniqueFrameKey) === getRequestStatus('pending')) {
            // another request is launching, change fetcher to be getter for cache
            const loadCache = async () => {
              const cachedData = await fetcher('unforced', singletonTarget, true);
              if (!cachedData) {
                window.requestAnimationFrame(loadCache);
              }
            };
            window.requestAnimationFrame(loadCache);
          }
        } else {
          fetcher('unforced', singletonTarget);
          singletonTarget.set(uniqueFrameKey, getRequestStatus('pending'));
        }
        window.runningBasicRequestHooksPromise = singletonTarget;
      } else {
        fetcher('forced');
      }
    }
  }, deps ?? []);

  //
  const devResult = { loading, run, data: response, abort, setResponse, toggleLoading };

  type TDevResult = typeof devResult;
  type TCompiledBundleType = { loading: boolean; run: Function; data: R; abort: Function };

  const returnedValue = (isCompiled ? ({ loading, run, ...(!manual && { data: response, abort }) } as TCompiledBundleType) : devResult) as TDevResult;
  return returnedValue;
};

export default useBasicRequest;
