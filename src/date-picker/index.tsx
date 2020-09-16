import React from 'react';
import moment from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';
import { IDatePickerProps } from './index.type';

const DatePicker = (props: IDatePickerProps) => {
  const { value, onChange, startOf, ...rest } = props;
  return (
    <AntdDatePicker
      {...rest}
      value={value ? moment(value) : null}
      onChange={(date, dateString) => {
        onChange(
          moment(date)
            .startOf(startOf || 'ms')
            .valueOf(),
          dateString,
        );
      }}
    />
  );
};

export default DatePicker;
