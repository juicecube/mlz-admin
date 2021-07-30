import { groupBy, cloneDeep } from 'lodash-es';

/**
 *
 */
export const serielizeParams2Url = (obj: Record<string, string | number>) => {};

/**
 *
 * @param fn 需要缓存的函数
 * @param duration 缓存保存时长
 */
export const memoizeFunctionResult = (fn: Function, duration: number) => {
  if (typeof fn !== 'function') {
    throw new Error('first param of memoizeFunctionResult should be a type of Function, but got ' + typeof fn);
  }
  const results = new Map();
  return (...args) => {
    const key = args.toString();
    const now = +new Date();
    if (results.has(key)) {
      if (now - results.get(key).time > duration) {
        // 保鲜期过了
        return fn(args);
      } else {
        return results.get(key).result;
      }
    } else {
      // 如果fn是一个普通函数
      const result = fn(args);
      results.set(key, {
        result,
        time: now,
      });
      return result;
    }
  };
};

/**
 * 根据primaryKey和foldPointFlag的管道对应关系。
 * 将一个flatten的数组树立为父子折叠结构结构
 */
export const foldArray = <P = any>(flattenedArray: P[], opts: { primaryKey: string | number; foldPointFlag: string | number; childrenKey?: string }) => {
  const { primaryKey, foldPointFlag, childrenKey = 'children' } = opts || {};

  const newArray = cloneDeep(flattenedArray);
  const groupedArray = groupBy(newArray, foldPointFlag);
  const result = [] as any;

  newArray.forEach((item) => {
    const foldPointFlagValue = item[primaryKey];
    if (foldPointFlagValue) {
      const children = groupedArray[foldPointFlagValue] || [];
      item[childrenKey] = children;
    }
    result.push(item);
  });

  return result as P[];
};

// eslint-disable-next-line no-shadow
enum EBasicRequestHooksStatus {
  'waiting' = 0,
  'pending' = 1 << 0,
  'resolved' = 1 << 1,
  'rejected' = 1 << 2,
}
export const getRequestStatus = (statusNumber: number | keyof typeof EBasicRequestHooksStatus) => {
  return EBasicRequestHooksStatus[statusNumber];
};
