const __DEV__ = (window as any).__DEV__ !== 'false';

// 预测columns可能的primary key
export const guessPrimaryKey = ($columns: any[]): string | undefined => {
  if (!$columns) {
    throw `必须有待判断的columns数组参数`;
  }
  const probables = $columns.filter((column) => column.primary === true);
  if (probables.length > 0) {
    // 如果columns有指定了primary:boolean则使用它
    if (__DEV__ && probables.length > 1) {
      console.warn(`[${guessPrimaryKey.name}]Table.columns只允许指定${1}列为primary，现在${probables.reduce((prev, curr) => prev.concat([curr.dataIndex]), []).join(',')}都是`);
    }
    return probables[0].dataIndex;
  } else {
    // 否则通过一系列逻辑猜测
    const checkerEnds = ['Id', 'key', 'Key', '_id', '_key'];
    let indexa = NaN;
    $columns.forEach((column, index) => {
      checkerEnds.some((checkerEnd) => {
        const matched = new RegExp(`${checkerEnd}$`, 'g').test(column?.dataIndex);
        if (matched) {
          indexa = index;
        }
        return matched;
      });
    });
    if (__DEV__ && isNaN(indexa)) {
      return undefined;
    }
    return $columns[indexa]?.dataIndex;
  }
};

// 数字转金额
// TODO： locale和precision后续再加
export const formatPrice = (price: number) => {
  if (!price && price !== 0) {
    throw `必须输入参数数字`;
  }
  return price && price?.toString()?.includes('.') ? `¥ ${price}` : `¥ ${price}.00`;
};
