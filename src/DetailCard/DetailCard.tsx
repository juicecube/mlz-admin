import React from 'react';
import { IDetailCardProps } from './index.type';
import { createBem, purgeData } from '@/shared/utils';
import CommonTable, { renderNode } from '@/Table/commonTable';
import { Card } from 'antd';
import './DetailCard.less';

const defaultProps = (wrap?: boolean) => {
  return {
    style: Object.assign(
      {},
      {
        width: '25%',
        boxShadow: 'none',
      },
      wrap
        ? ({
            display: 'flex',
            flexDirection: 'column',
          } as const)
        : {},
    ),
    hoverable: false,
  };
};
const bem = createBem('detail');
const DetailCard = (props: IDetailCardProps) => {
  const { dataSource, colSpan, columns, displayType, SupporttedNullExceptorTypes, ...others } = props;
  return displayType !== 'table' ? (
    <Card {...others} bordered={false} className={bem('card')}>
      {columns.map((column, index) => {
        const { dataIndex, title, render, type, wrap } = column;
        return (
          <>
            {SupporttedNullExceptorTypes !== '' ? (
              <Card.Grid {...defaultProps(wrap)} key={dataIndex}>
                <span style={{ fontWeight: 600 }}>{title}：&nbsp;</span>
                {render ? render(dataSource?.[dataIndex], dataSource, index, dataIndex) : dataSource?.[dataIndex] ? renderNode(type, dataSource?.[dataIndex], column) : ''}
              </Card.Grid>
            ) : null}
          </>
        );
      })}
    </Card>
  ) : (
    <Card {...others} bordered={false} className={bem('card')}>
      <CommonTable columns={columns} dataSource={dataSource} size={others.size || 'small'} />
    </Card>
  );
};

export default DetailCard;
