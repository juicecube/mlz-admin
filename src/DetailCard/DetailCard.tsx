import React from 'react';
import { IDetailCardProps } from './DetailCard.type';
import { createBem } from '../shared/utils';
import Icon from '../Icon/Icon';
import CommonTable, { renderNode } from '../Table/common-table';
import { SupporttedColumnTypes } from '../Table/common-table/index.type';
import { Card } from 'antd';
import './DetailCard.less';

const defaultProps = (wrap?: boolean) => {
  return {
    hoverable: false,
    style: Object.assign(
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
  };
};
const CardTitle = (props): React.ReactElement => {
  const defaultStyle = { marginRight: 6 };
  const { linkable, title } = props;
  return (
    <>
      {linkable ? (
        <a href={`#${title}`}>
          <Icon type="paperclip_l" style={defaultStyle} id={title} />
        </a>
      ) : (
        <Icon type="list" style={defaultStyle} id={title} />
      )}
      {title}
    </>
  );
};
const bem = createBem('detail');
const DetailCard = (props: IDetailCardProps) => {
  const { dataSource, colSpan, columns, displayType, placeholder, title, linkable, ...others } = props;
  return displayType !== 'table' ? (
    <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title, linkable }} />}>
      {(columns as any).map((column, index: number) => {
        const { dataIndex, render, type, wrap } = column;
        const data = dataSource?.[dataIndex];
        return placeholder !== '' && !!data ? (
          <Card.Grid {...defaultProps(wrap)} key={dataIndex}>
            <span style={{ fontWeight: 600 }}>{column.title}：&nbsp;</span>
            {render ? render(data, dataSource, index) : data ? renderNode(type as SupporttedColumnTypes, data, column) : ''}
          </Card.Grid>
        ) : null;
      })}
    </Card>
  ) : (
    <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title, linkable }} />}>
      <CommonTable {...{ columns, dataSource }} />
    </Card>
  );
};

export default DetailCard;
