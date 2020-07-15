import { cloneDeep } from 'lodash-es';

/**
 *
 * @function 清洗对象的数据，将对应属性值为undefined的清洗掉
 * @param $object
 */
const purgeData = ($object: Record<string, unknown>) => {
  const newObj = cloneDeep($object);
  Object.entries(newObj).forEach((kv) => {
    const [key, value] = kv;
    if (value === undefined) {
      delete newObj[key];
    }
  });
  return newObj;
};
export default purgeData;
