import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { IRangePickerProps, valueProps } from './index.type';

const { RangePicker } = DatePicker;

const MlzRangePicker = (props: IRangePickerProps) => {
  const { value: propsValue, onChange, startOf, returnUnixValue = false, ...rest } = props;
  const [value, setValue] = useState<[valueProps, valueProps] | null>(null);
  useEffect(() => {
    setValue(propsValue || null);
  }, [propsValue]);
  const handleMomentValue = (value, startOf): [number, number] => {
    return [
      moment(value[0])
        .startOf(startOf || 'ms')
        .valueOf(),
      moment(value[1])
        .startOf(startOf || 'ms')
        .valueOf(),
    ];
  };
  return (
    <RangePicker
      {...rest}
      value={value ? [moment(value[0]), moment(value[1])] : null}
      onChange={(date, dateString) => {
        const dateValue = returnUnixValue ? handleMomentValue(date, startOf) : date;
        setValue(dateValue);
        onChange(dateValue, dateString);
      }}
    />
  );
};

export default MlzRangePicker;
