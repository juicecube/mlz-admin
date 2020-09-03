import React from 'react';
import { DatePicker } from 'antd';
import * as moment from 'moment';

const MDatePicker = (props) => {
  const { value, onChange, picker = 'second', ...rest } = props;
  return (
    <DatePicker
      {...rest}
      value={value && moment(value * 1000)}
      onChange={(value) => {
        onChange(
          moment(value)
            .startOf(picker)
            .unix(),
        );
      }}
    />
  );
};

const MDateRangePicker = (props) => {
  const { value, onChange, picker = 'second', ...rest } = props;
  return (
    <DatePicker.RangePicker
      {...rest}
      value={value && [moment(value[0] * 1000), moment(value[1] * 1000)]}
      onChange={(value) => {
        onChange([
          moment(value[0])
            .startOf(picker)
            .unix(),
          moment(value[1])
            .startOf(picker)
            .unix(),
        ]);
      }}
    />
  );
};

MDatePicker.RangePicker = MDateRangePicker;

export default MDatePicker;
