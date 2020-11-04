import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mlz/admin';

const getDocCommits = axios.get('https://api.github.com/repos/juicecube/mlz-admin/commits?per_page=100');
const collaborators = [19811291, 11535146];
export default () => {
  const [ratio, setRatio] = useState<number>(0);
  useEffect(() => {
    getDocCommits.then((res: { data: any[] }) => {
      const commitsCountsNotFromCommunity = res.data.filter((commit) => collaborators.includes(commit?.author?.id) && commit.html_url).length;
      const commitsCountsFromCommunity = 100 - commitsCountsNotFromCommunity;
      setRatio(commitsCountsFromCommunity / 100);
    });
  }, []);
  const interactiveLevel = ratio < 0.15 ? '低' : ratio < 0.4 && ratio >= 0.15 ? '中' : '高';
  return (
    <>
      <Typography.Text type="secondary" style={{ marginRight: 6 }}>
        代码社区贡献率
      </Typography.Text>
      <Typography.Text style={{ background: interactiveLevel === '低' ? 'red' : interactiveLevel === '中' ? 'orange' : 'green', borderRadius: 4, padding: '2px 6px', color: 'white', fontSize: 12 }}>
        {interactiveLevel} {(ratio * 100).toFixed(1)}%
      </Typography.Text>
    </>
  );
};
