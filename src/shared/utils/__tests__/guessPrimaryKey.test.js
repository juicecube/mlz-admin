import { guessPrimaryKey } from '..';

const columnsWithSpecifiedPrimaryKey = [
  {
    title: '用户Id',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    primary: true,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const columnsWithGuessingKeyWord = [
  {
    title: '用户Id',
    dataIndex: 'user_id',
    key: 'user_id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

describe('guessPrimaryKey', function() {
  it('没有传入columns作为参数。抛出异常', function() {
    expect(() => guessPrimaryKey()).toThrow('必须有待判断的columns数组参数');
  });

  it('指定了1条primary的colum。使用它的dataIndex', function() {
    expect(guessPrimaryKey(columnsWithSpecifiedPrimaryKey)).toBe('name');
  });

  it('指定了多条primary的columns。使用第一条的dataIndex', function() {
    columnsWithSpecifiedPrimaryKey[0]['primary'] = true;
    expect(() => guessPrimaryKey(columnsWithSpecifiedPrimaryKey)).toThrow('[guessPrimaryKey]Table.columns只允许指定1列为primary，现在user_id,name都是');
  });

  it('没有指定primary。需要进行推断', function() {
    columnsWithGuessingKeyWord[0]['dataIndex'] = 'user_id';
    expect(guessPrimaryKey(columnsWithGuessingKeyWord)).toBe('user_id');
  });

  it('没有指定primary，且没有推断出结果。返回undefined', function() {
    columnsWithGuessingKeyWord[0]['dataIndex'] = 'uuid';
    expect(guessPrimaryKey(columnsWithGuessingKeyWord)).toBe(undefined);
  });
});
