import { guessPrimaryKey } from '..';

const columnsWithPrimaryKey = [
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
  // 没有columns参数，则抛出异常
  it('without columns params', function() {
    expect(guessPrimaryKey()).toThrow('必须有待判断的columns数组参数');
  });

  // 制定了primary的columns
  it('throw a correct error reminder without any params', function() {
    expect(guessPrimaryKey(columnsWithPrimaryKey)).toBe('name');
  });

  // 没有指定primary则需要判断
  it('throw a correct error reminder without any params', function() {
    expect(guessPrimaryKey(columnsWithGuessingKeyWord)).toThrow('user_id');
  });
});
