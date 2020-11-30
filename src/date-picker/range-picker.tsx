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
  const handleMomentValue = (values, startOfValue): [number, number] | null => {
    return values
      ? [
          moment(values[0])
            .startOf(startOfValue || 'ms')
            .valueOf(),
          moment(values[1])
            .startOf(startOfValue || 'ms')
            .valueOf(),
        ]
      : null;
  };
  return (
    <RangePicker
      {...rest}
      value={value ? [moment(value[0]), moment(value[1])] : null}
      onChange={(date, dateString) => {
        const dateValue = returnUnixValue ? handleMomentValue(date, startOf) : date;
        setValue(dateValue);
        if (onChange) {
          onChange(dateValue, dateString);
        }
      }}
    />
  );
};

export default MlzRangePicker;
