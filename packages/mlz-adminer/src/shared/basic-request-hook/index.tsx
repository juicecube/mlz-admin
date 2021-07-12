import React, { useState, useEffect, useCallback } from 'react';
import { isCompiled } from '../service/constant';
import { IBasicHooksOptions } from './index.type';

const responseHandler = (res: any, responseSetter: Function, loadingToggler: Function, isCatchingError = false) => {
  !isCatchingError && responseSetter(res);
  loadingToggler(false);
  return res;
};
export const noManualSettedReminder = `you should try run/cancel with a spacified manual option setted in hooks`;

/**
 *
 * @param fetchPromise: Function
 * @param options: object
 *
 * @remarks
 * P是传入的Options的类型。
 * R是该请求发起完毕后，response的类型。
 */
const useBasicRequest = <P extends Partial<IBasicHooksOptions>, R>(fetchPromise: (...args: any[]) => Promise<R>, options?: P) => {
  //
  const { manual, deps, requestParams, init } = options || {};

  //
  const [response, setResponse] = useState<R>();
  const [loading, toggleLoading] = useState(init?.loading || false);

  // run
  const run = useCallback((args?: unknown) => {
    if (!manual) {
      throw new Error(noManualSettedReminder);
    }
    toggleLoading(true);
    // REMARK: run方法携带的参数权重高于requestParams
    return fetchPromise(args || requestParams)
      .then((res) => responseHandler(res, setResponse, toggleLoading))
      .catch((err) => responseHandler(err, setResponse, toggleLoading, true));
  }, []);

  //
  const abort = useCallback(() => {}, []);

  // TODO: throttle/debounce/cache etc,

  useEffect(() => {
    if (!manual) {
      fetchPromise(requestParams)
        .then((res) => responseHandler(res, setResponse, toggleLoading))
        .catch((err) => responseHandler(err, setResponse, toggleLoading, true));
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
