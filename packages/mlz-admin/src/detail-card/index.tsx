/* eslint-disable no-nested-ternary */
import React from 'react';
import { IDetailCardProps } from './index.type';
import { createBem } from '../shared/utils';
import { getDataType } from 'mytils';
import Icon from '../icon';
import CommonTable, { renderNode } from '../table/common-table';
import { Card, Descriptions, Skeleton } from 'antd';
import './index.less';

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
  const { dataSource, columns, displayType, linkable, noDataResult = null, ...others } = props;
  return displayType !== 'table' ? (
    <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title: props.title, linkable }} />}>
      {dataSource ? (
        <Skeleton active loading={props.loading}>
          <Descriptions bordered {...others.descriptionProps}>
            {(columns as any).map((column, index: number) => {
              const { dataIndex, title, render, span, type, placeholder = '--' } = column;
              const data = dataSource?.[dataIndex];
              return data ? (
                <Descriptions.Item label={title} span={span} key={dataIndex}>
                  {render ? render(data, dataSource, index) : data ? renderNode(type, data, column) : ''}
                </Descriptions.Item>
              ) : placeholder === null ? (
                placeholder
              ) : (
                <Descriptions.Item label={title} span={span} key={dataIndex}>
                  {placeholder}
                </Descriptions.Item>
              );
            })}
          </Descriptions>
        </Skeleton>
      ) : (
        noDataResult
      )}
    </Card>
  ) : (
    <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title: props.title, linkable }} />}>
      <CommonTable {...{ columns, dataSource: (getDataType(dataSource) === 'array' ? dataSource : [dataSource]) as any[] }} />
    </Card>
  );
};

export default DetailCard;
