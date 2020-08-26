import React, { useState } from 'react';
import ConfigProvider from '@/ConfigProvider/ConfigProvider';
import { Pagination, DatePicker, TimePicker, Calendar, Popconfirm, Table, Modal, Button, Select, Radio } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

const Page = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  return (
    <div className="locale-components">
      <div className="example" style={{ margin: '15px 0' }}>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
      <div className="example" style={{ margin: '15px 0' }}>
        <Select showSearch style={{ width: 200, marginRight: 10 }}>
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker style={{ marginRight: 10 }} />
        <TimePicker style={{ marginRight: 10 }} />
        <RangePicker style={{ width: 200 }} />
      </div>
      <div className="example" style={{ margin: '15px 0' }}>
        <Button type="primary" onClick={showModal} style={{ marginRight: 10 }}>
          Show Modal
        </Button>
        <Button onClick={info} style={{ marginRight: 10 }}>
          Show info
        </Button>
        <Button onClick={confirm} style={{ marginRight: 10 }}>
          Show confirm
        </Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </div>
      <div className="site-config-provider-calendar-wrapper">
        <Calendar fullscreen={false} value={moment()} />
      </div>
      <div className="example">
        <Table dataSource={[]} columns={columns} />
      </div>
      <Modal title="Locale Modal" visible={visible} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
    </div>
  );
};

export default () => {
  const [locale, setLocale] = useState({ locale: 'enUS' });
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
    if (!localeValue) {
      moment.locale('en');
    } else {
      moment.locale('zh-cn');
    }
  };
  return (
    <div>
      <div className="change-locale">
        <span style={{ marginRight: 16 }}>Change locale of components: </span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page key={locale ? locale.locale : 'en' /* Have to refresh for production environment */} />
      </ConfigProvider>
    </div>
  );
};
