import React, { useState, useEffect, CSSProperties } from 'react';
import axios from 'axios';
import { Avatar, Tooltip, Typography, Spin, Button, Icon, Affix } from '@mlz/admin';
import { uniqBy } from 'lodash-es';
import { getPaths } from '../../../../src/shared/utils';
import './index.less';

const getDocCommits = ($path: string) => axios.get('https://api.github.com/repos/juicecube/mlz-admin/commits?per_page=100&path=' + $path + '&sha=master');
const getCompCommits = ($path: string) => axios.get('https://api.github.com/repos/juicecube/mlz-admin/commits?per_page=100&path=' + $path + '&sha=master');
const getAuthorFromData = ($oneCommit) => {
  const author = $oneCommit.author || $oneCommit.commit.author;
  return {
    id: author.id || author.name,
    name: author.login || author.name,
    html_url: author.html_url,
    avatar_url: author.avatar_url || author.name,
  };
};
const TheAvatar = (props: { item: any; alternatives: string[]; rand: number; style?: CSSProperties }) => {
  const { item, alternatives, rand, style } = props;
  return (
    <Avatar src={item.avatar_url} style={{ marginRight: 2, backgroundColor: alternatives[rand], ...style }}>
      {item.avatar_url[0].toUpperCase()}
    </Avatar>
  );
};
export default () => {
  const [commits, setCommits] = useState<any[]>([]);
  const [loading, toggoleLoading] = useState(true);
  const { docPath, componentPath, antdDocPath } = getPaths();
  useEffect(() => {
    Promise.all([getDocCommits(docPath), getCompCommits(componentPath)])
      .then((res: any[]) => {
        setCommits(res.map((res_i) => res_i.data.map((commit) => getAuthorFromData(commit))));
        toggoleLoading(false);
      })
      .catch(() => toggoleLoading(false));
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
          {(() => {
            const alternatives = ['#1890ff', '#00a2ae', '#ffbf00', '#a9d5fe', '#7265e6'];
            const rand = parseInt(Math.random() * alternatives.length + '', 10);
            return commits.map((commitType, index) => {
              const commiters = uniqBy(commitType, 'id');
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
                            <Tooltip title={item.name} placement={index === 0 ? 'top' : 'bottom'} key={item.login}>
                              {item.html_url ? (
                                <a href={item.html_url} target="_blank">
                                  <TheAvatar {...{ rand, alternatives, item }} />
                                </a>
                              ) : (
                                <span>
                                  <TheAvatar {...{ rand, alternatives, item }} style={{ opacity: 0.5 }} />
                                </span>
                              )}
                            </Tooltip>
                          ) : null;
                        })) ||
                        '--'}
                    </Avatar.Group>
                  </span>
                </li>
              );
            });
          })()}
        </ul>
      </Spin>
    </div>
  );
};
