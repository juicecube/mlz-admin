import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';
import { IDatePickerProps } from './index.type';

const DatePicker = (props: IDatePickerProps) => {
  const { value: propsValue, onChange, startOf, ...rest } = props;
  const [value, setValue] = useState<number | null>(null);
  useEffect(() => {
    setValue(propsValue || null);
  }, [propsValue]);
  return (
    <AntdDatePicker
      {...rest}
      value={value ? moment(value) : null}
      onChange={(date, dateString) => {
        const dateValue = moment(date)
          .startOf(startOf || 'ms')
          .valueOf();
        setValue(dateValue);
        onChange(dateValue, dateString);
      }}
    />
  );
};

export default DatePicker;
