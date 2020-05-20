const __DEV__ = true;
export const ifPropertyExited = ($key, $targetObj) => Object.prototype.hasOwnProperty.call($targetObj, $key);
export const omitObject = ($targetObj, $key, $prototypable) => {
  const keies = typeof $key === 'string' ? [$key] : $key;
  const result = JSON.parse(JSON.stringify($targetObj));
  if ($prototypable === true) {
    __DEV__ && console.warn(`[${omitObject.name}]开启prototypable后将删除对象原型链上的属性，请确保你能hold住`);
    for (const key in result) {
      if (keies.includes(key)) {
        delete result[key];
      }
    }
    return result;
  }
  keies.forEach((oneKey) => {
    if (ifPropertyExited(oneKey, result)) {
      delete result[oneKey];
    }
  });
  return result;
};
export const guessPrimaryKey = ($columns) => {
  const probables = $columns.filter((column) => column.primary === true);
  if (probables.length > 0) {
    if (__DEV__ && probables.length > 1) {
      console.warn(`[${guessPrimaryKey.name}]Table.columns[]只允许指定${1}列为primary，现在${probables.reduce((prev, curr) => prev.concat([curr.dataIndex]), []).join(',')}都是`);
    }
    return probables[0].dataIndex;
  } else {
    const checkerEnds = ['id', 'Id', 'key', 'Key', '_id', '_key'];
    let indexa = 0;
    $columns.forEach((column, index) => {
      checkerEnds.some((checkerEnd, i) => {
        const matched = new RegExp(`${checkerEnd}$`, 'g').test(column?.dataIndex);
        if (matched) indexa = index;
        return matched;
      });
    });
    if (__DEV__ && !$columns[indexa].dataIndex) {
      __DEV__ && console.warn(`[${guessPrimaryKey.name}]Table.columns[]没有推测出primary，请在Table.rowkey属性上自行指定`);
      return '';
    }
    return $columns[indexa].dataIndex;
  }
};
//# sourceMappingURL=index.js.map
