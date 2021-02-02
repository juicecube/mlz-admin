import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';
import { IDatePickerProps, valueProps } from './index.type';
import RangePicker from './range-picker';

const DatePicker = (props: IDatePickerProps) => {
  const { value: propsValue, onChange, startOf = 'ms', returnUnixValue = false, ...rest } = props;
  const [value, setValue] = useState<valueProps>(null);
  useEffect(() => {
    setValue(propsValue || null);
  }, [propsValue]);
  return (
    <AntdDatePicker
      {...rest}
      value={value ? moment(value) : null}
      onChange={(momentObj, dateString) => {
        const dateValue = returnUnixValue
          ? moment(momentObj)
              .startOf(startOf)
              .valueOf()
          : moment(momentObj).startOf(startOf);
        setValue(dateValue);
        onChange?.(dateValue, dateString);
      }}
    />
  );
};

DatePicker.RangePicker = RangePicker;

export default DatePicker;
