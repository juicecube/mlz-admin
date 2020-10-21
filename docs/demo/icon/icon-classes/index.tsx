import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, message, Input, Affix, Spin, BackTop } from '@mlz/admin';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.less';

const genContent = ($className: string) => `<Icon type="${$className}" />`;
const { Search } = Input;
const IconClasses = () => {
  const [origin, setOrigin] = useState<any>([]);
  const [items, setItems] = useState<any>([]);
  const [loading, toggleLoading] = useState<boolean>(true);
  const [searchKey, setSearchKey] = useState<string>('');
  useEffect(() => {
    axios.get('https://service-81ozmkay-1252070958.gz.apigw.tencentcs.com/release/fetch_icon_classes').then((res) => {
      setItems(res.data);
      setOrigin(res.data);
      toggleLoading(false);
    });
  }, []);
  const copiedHandler = ($className: string) => {
    message.success($className.substr(0, $className.lastIndexOf('_')) + ' 复制成功');
  };
  useEffect(() => {
    setItems(origin.filter((item) => item.includes(searchKey)));
  }, [searchKey]);
  return (
    <>
      <Affix offsetTop={64}>
        <div className="search-area">
          <Search placeholder="搜索icon class" onChange={(e) => setSearchKey(e.target.value)} enterButton="搜索" />
        </div>
      </Affix>
      <Spin spinning={loading}>
        <div className="icon-classes-wrapper">
          {items.map((item) => {
            return (
              <CopyToClipboard text={genContent(item)} onCopy={() => copiedHandler(item)}>
                <div className="icon-class-container">
                  <Icon type={item} style={{ fontSize: 32 }} />
                  <span>{item.toString()}</span>
                </div>
              </CopyToClipboard>
            );
          })}
          {items.length <= 0 ? '没有找到数据' : null}
          <div className="mask" />
        </div>
      </Spin>
      <BackTop />
    </>
  );
};

export default IconClasses;
