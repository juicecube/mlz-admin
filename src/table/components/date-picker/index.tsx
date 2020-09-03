import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const MDatePicker = (props) => {
  const { value, onChange, picker, ...rest } = props;
  return (
    <DatePicker
      {...rest}
      value={value && moment(value)}
      onChange={(v) => {
        onChange(
          moment(v)
            .startOf(picker)
            .valueOf(),
        );
      }}
    />
  );
};

const MDateRangePicker = (props) => {
  const { value, onChange, picker, ...rest } = props;
  return (
    <DatePicker.RangePicker
      {...rest}
      value={value && [moment(value[0]), moment(value[1])]}
      onChange={(v) => {
        onChange([
          moment(v?.[0])
            .startOf(picker)
            .valueOf(),
          moment(v?.[1])
            .startOf(picker)
            .valueOf(),
        ]);
      }}
    />
  );
};

MDatePicker.RangePicker = MDateRangePicker;

export default MDatePicker;
