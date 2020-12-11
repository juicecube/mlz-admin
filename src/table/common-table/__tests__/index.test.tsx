import React, { Component } from 'react';
import { testMount } from '../../../../tests';
import { mount } from 'enzyme';
import CommonTable from '..';

const data = [
  {
    name: 'milo',
    score: 90,
    ranked: 0.05,
    moodStatus: 'red',
  },
  {
    name: 'joyce',
    score: 0,
    ranked: undefined,
    moodStatus: 'blue',
  },
  {
    name: '',
    score: 75,
    ranked: 0.6,
    moodStatus: 'green',
  },
];

describe('🧪 CommonTable', () => {
  testMount(CommonTable);

  test('如果一个值为null或undefined，则返回"--"', () => {
    const wrapper = mount(
      <CommonTable
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '得分',
            dataIndex: 'score',
            type: 'number',
          },
          {
            title: '排名',
            dataIndex: 'ranked',
            type: 'ratio',
          },
          {
            title: '心情状态',
            dataIndex: 'moodStatus',
            type: 'tag',
            enums: {
              red: { color: 'red', desc: '火辣的' },
              blue: { color: 'blue', desc: '深沉的' },
              green: { color: 'green', desc: '清凉的' },
            },
          },
        ]}
        dataSource={data}
        rowKey="name"
      />,
    );
    const tbody = wrapper.find('tbody');
    expect(tbody.find('tr').length).toBe(data.length);
    [
      {
        trLine: 1,
        tdLine: 1,
        expectation: '0',
      },
      {
        trLine: 2,
        tdLine: 0,
        expectation: '--',
      },
      {
        trLine: 1,
        tdLine: 2,
        expectation: '--',
      },
      {
        trLine: 0,
        tdLine: 2,
        expectation: '5.00%',
      },
      {
        assertion: () => {
          return tbody
            .find('tr')
            .at(2)
            .find('td')
            .at(3)
            .find('span.admini-table__tooltip').length;
        },
        expectation: 1,
      },
    ].forEach((item) => {
      const assertion = item.assertion
        ? item.assertion()
        : tbody
            .find('tr')
            .at(item.trLine)
            .find('td')
            .at(item.tdLine)
            .text();
      expect(assertion).toEqual(item.expectation);
    });
  });

  test('如果column指定了render函数，则渲染该render', () => {
    const renderedMounter = <div className="tester-container">some_value</div>;
    const wrapper = mount(
      <CommonTable
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
            render: () => renderedMounter,
          },
          {
            title: '得分',
            dataIndex: 'score',
          },
        ]}
        dataSource={data}
        rowKey="name"
      />,
    );
    const tbody = wrapper.find('tbody');
    tbody.find('tr').forEach(($tr) => {
      const firstTd = $tr.find('td').at(0);
      expect(firstTd.contains(renderedMounter)).toBeTruthy();
    });
  });

  const dataOnturns = [
    {
      name: 'Ronaldo',
      birthday: 1594267210,
      cost: 100.005,
      status: 'healthy',
      achievements: 'success',
    },
  ];
  const columnsOnturns = [
    [
      {
        title: '身价',
        dataIndex: 'cost',
        type: 'price',
      },
    ],
    [
      {
        title: '生日',
        dataIndex: 'birthday',
        type: 'date',
      },
    ],
    [
      {
        title: '生日',
        dataIndex: 'birthday',
        type: 'datetime',
      },
    ],
    [
      {
        title: '身体状态',
        dataIndex: 'status',
        type: 'enum',
        enums: {
          wounded: '受伤',
          healthy: '健康',
          wrecked: '死亡',
        },
      },
    ],
    [
      {
        title: '最近一次表现',
        dataIndex: 'achievements',
        type: 'tag',
        enums: {
          failed: { text: '输了', color: 'red' },
          success: { text: '赢了', color: 'green' },
        },
      },
    ],
  ];
  const tests = [
    {
      desc: '测试type为[price]的情况',
      expec: '¥ 100.005',
    },
    {
      desc: '测试type为[date]的情况',
      expec: '2020/07/09',
    },
    {
      desc: '测试type为[datetime]的情况',
      expec: '2020/07/09 12:00:10',
    },
    {
      desc: '测试type为[enum]的情况',
      tester: ($td) => $td.text(),
      expec: '健康',
    },
    {
      desc: '测试type为[tag]的情况',
      tester: ($td) => $td.find('.ant-tag-green').text(),
      expec: '赢了',
    },
  ];

  tests.forEach(($test, $index) => {
    test($test.desc + ``, () => {
      const wrapper = mount(<CommonTable columns={columnsOnturns[$index]} dataSource={dataOnturns} rowKey="name" />);
      const theCell = wrapper
        .find('tbody')
        .find('tr')
        .at(0)
        .find('td')
        .at(0);
      expect(typeof $test.tester === 'function' ? $test.tester(theCell) : theCell.text()).toBe($test.expec);
    });
  });

  test('table的onChange事件携带正确参数被触发', () => {
    const changeHandler = jest.fn();

    const dataLength = 15;
    const skippedPage = 2;
    const pageSize = 10;
    const thisCaseData = new Array(dataLength).fill('').map((_, index) => {
      return {
        name: index,
        score: 1 + Math.random() * 100,
      };
    });

    const wrapper = mount(
      <CommonTable
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
          },
          {
            title: '得分',
            dataIndex: 'score',
          },
        ]}
        dataSource={thisCaseData}
        rowKey="name"
        onChange={changeHandler}
        pagination={{ pageSize, total: dataLength, showSizeChanger: true, showQuickJumper: true }}
      />,
    );
    // 确定分页正常
    expect(wrapper.find('.ant-pagination-item').length).toBe(Math.ceil(dataLength / pageSize));
    wrapper.find('.ant-pagination-item-' + skippedPage).simulate('click');
    // 确定分页触发的onChange正常
    // onChange在antd的签名是function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter })
    const pagination = {
      current: skippedPage,
      pageSize,
      total: dataLength,
    };
    const filters = {};
    const sorter = {};
    const extra = {
      action: 'paginate',
      currentDataSource: thisCaseData,
    };
    expect(changeHandler).toBeCalledWith(pagination, filters, sorter, extra);
  });
});
