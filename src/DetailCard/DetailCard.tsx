import React from 'react';
import { IDetailCardProps } from './index.type';
import { createBem, purgeData } from '@/shared/utils';
import { Card, Table } from 'antd';
import './DetailCard.less';

export const typeValueRefers = {
  normal: (value: any) => value || '--',
  date: '',
  datetime: '',
};
const defaultProps = {
  style: {
    width: '25%',
    boxShadow: 'none',
  },
  hoverable: false,
};
const bem = createBem('detail');
const DetailCard = (props: IDetailCardProps) => {
  const { dataSource, colSpan, columns, displayType, ...others } = props;
  return displayType !== 'table' ? (
    <Card {...others} bordered={false} className={bem('card')}>
      <Card.Grid {...defaultProps}>Content</Card.Grid>
      <Card.Grid {...defaultProps}>Content</Card.Grid>
    </Card>
  ) : (
    <Card>
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
};

export default DetailCard;
