import React, { Component } from 'react';
import testMount from '../../../../tests/testMount';
import { mount } from 'enzyme';
import CommonTable from '..';

describe('📦 CommonTable', () => {
  /**
   * https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
   * @desc 现在如果需要渲染js原生dom，则需要添加如下代码：
   */
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  // testMount(CommonTable);

  test("如果没有一个值，则返回'--'", async () => {
    const data = [
      {
        name: 'milo',
        score: 90,
      },
      {
        name: 'joyce',
        score: undefined,
      },
    ];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '得分',
        dataIndex: 'score',
      },
    ];
    const wrapper = mount(<CommonTable columns={columns} dataSource={data} rowKey="name" />);
    const tbody = wrapper.find('tbody');
    expect(tbody.find('tr').length).toBe(2);
    const theExactTd = tbody
      .find('tr')
      .at(1)
      .find('td')
      .at(1);
    expect(theExactTd.text()).toBe('--');
  });

  test('如果column指定了render函数，则渲染该render', () => {
    const data = [
      {
        name: 'milo',
        score: 90,
      },
      {
        name: 'kacy',
        score: null,
      },
    ];
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        render: (_) => <div className="tester-container">some_value</div>,
      },
      {
        title: '得分',
        dataIndex: 'score',
      },
    ];
    const wrapper = mount(<CommonTable columns={columns} dataSource={data} rowKey="name" />);
    const tbody = wrapper.find('tbody');
    tbody.find('tr').forEach(($tr) => {
      const firstTd = $tr.find('td').at(0);
      expect(firstTd.find('.tester-container').length).toBe(1);
      expect(firstTd.find('.tester-container').text()).toBe('some_value');
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
    test($test.desc, () => {
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
});
