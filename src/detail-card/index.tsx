import React from 'react';
import { IDetailCardProps } from './index.type';
import { createBem } from '../shared/utils';
import Icon from '../icon';
import CommonTable, { renderNode } from '../table/common-table';
import { Card, Descriptions } from 'antd';
import './index.less';

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
  const { dataSource, columns, displayType, title, linkable, noDataResult, ...others } = props;
  return !!dataSource ? (
    displayType !== 'table' ? (
      <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title, linkable }} />}>
        {!!columns ? (
          <Descriptions bordered {...others.descriptionProps}>
            {(columns as any).map((column, index: number) => {
              const { dataIndex, title, render, span, type } = column;
              const data = dataSource?.[dataIndex];
              return !!data ? (
                <Descriptions.Item label={title} span={span}>
                  {render ? render(data, dataSource, index) : data ? renderNode(type, data, column) : ''}
                </Descriptions.Item>
              ) : null;
            })}
          </Descriptions>
        ) : (
          noDataResult ?? null
        )}
      </Card>
    ) : (
      <Card {...others} bordered={false} className={bem('card')} title={<CardTitle {...{ title, linkable }} />}>
        <CommonTable {...{ columns, dataSource }} />
      </Card>
    )
  ) : null;
};

export default DetailCard;
