import { groupBy } from 'lodash-es';

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
 * 根据某个key将一个flatten的数组树立为父子折叠结构结构
 * TODO 后面可以转移到mytils
 */
export const foldObject = (flattenedArray, foldPointFlag) => {
  const result = groupBy(flattenedArray, foldPointFlag);
};
