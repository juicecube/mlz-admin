import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Tooltip, Typography, Spin, Button, Icon, Affix } from '@mlz/admin';
import { uniqBy } from 'lodash-es';
import { getPaths } from '../../../../src/shared/utils';
import './index.less';

const getDocCommits = ($path: string) => axios.get('https://api.github.com/repos/juicecube/mlz-admin/commits?per_page=100&path=' + $path + '&sha=master');
const getCompCommits = ($path: string) => axios.get('https://api.github.com/repos/juicecube/mlz-admin/commits?per_page=100&path=' + $path + '&sha=master');
export default () => {
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, toggoleLoading] = useState(true);
  const { docPath, componentPath, antdDocPath } = getPaths();
  useEffect(() => {
    Promise.all([getDocCommits(docPath), getCompCommits(componentPath)])
      .then((res: any[]) => {
        setCommits([res[0].data, res[1].data]);
        toggoleLoading(false);
      })
      .catch((err) => toggoleLoading(false));
  }, []);
  return (
    <div className="committers-wrapper">
      <Affix offsetBottom={66}>
        <Button className="joinus-btn" type="primary" onClick={() => window.open(antdDocPath)} icon={<Icon type="file_search_l" />}>
          在 Ant Design 中查看
        </Button>
      </Affix>
      <Spin spinning={loading}>
        <ul>
          {commits.map((commitType, index) => {
            const commiters = uniqBy(
              commitType.map((_) => _.author),
              'id',
            );
            return (
              <li key={index}>
                <span className="commit-title">
                  <Typography.Text type="secondary">{index === 0 ? '文档贡献者' : '组件贡献者'}：</Typography.Text>
                </span>
                <span className="committers">
                  <Avatar.Group>
                    {(commiters.length &&
                      commiters.map((item: any) => {
                        return item ? (
                          <Tooltip title={item.login} placement={index === 0 ? 'top' : 'bottom'} key={item.login}>
                            <a href={item.html_url} target="_blank">
                              <Avatar src={item.avatar_url} style={{ marginRight: 3 }} />
                            </a>
                          </Tooltip>
                        ) : null;
                      })) ||
                      '--'}
                  </Avatar.Group>
                </span>
              </li>
            );
          })}
        </ul>
      </Spin>
    </div>
  );
};
