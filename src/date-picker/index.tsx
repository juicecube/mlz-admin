import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';
import { IDatePickerProps } from './index.type';
import RangePicker from './range-picker';

const DatePicker = (props: IDatePickerProps) => {
  const { value: propsValue, onChange, startOf, returnUnixValue = false, ...rest } = props;
  const [value, setValue] = useState<number | null | Moment>(null);
  useEffect(() => {
    setValue(propsValue || null);
  }, [propsValue]);
  return (
    <AntdDatePicker
      {...rest}
      value={value ? moment(value) : null}
      onChange={(date, dateString) => {
        const dateValue = returnUnixValue
          ? moment(date)
              .startOf(startOf || 'ms')
              .valueOf()
          : date;
        setValue(dateValue);
        onChange && onChange(dateValue, dateString);
      }}
    />
  );
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
