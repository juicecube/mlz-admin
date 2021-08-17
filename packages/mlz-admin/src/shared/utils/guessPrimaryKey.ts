const Window = (typeof window === 'undefined' ? { __DEV__: true } : window) as any;
const __DEV__ = Window?.__DEV__ !== 'production';

const guessPrimaryKey = ($columns: any[]): string | undefined => {
  if (!$columns) {
    throw `必须有待判断的columns数组参数`;
  }
  const probables = $columns.filter((column) => column.primary === true);
  if (probables.length > 0) {
    // 如果columns有指定了primary:boolean则使用它
    if (__DEV__ && probables.length > 1) {
      // eslint-disable-next-line no-console
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
    return $columns[indexa]?.dataIndex;
  }
};

export default guessPrimaryKey;
