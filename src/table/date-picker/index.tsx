import React from 'react';
import { DatePicker } from 'antd';
import { unitOfTime } from 'moment';
import { DatePickerProps, RangePickerProps } from 'antd/lib/date-picker';
import moment from 'moment';

interface IMDatePickerProps extends Omit<DatePickerProps, 'onChange'> {
  startOf?: unitOfTime.StartOf;
  onChange?(number, string): void;
}
interface IMRangePickerProps extends Omit<RangePickerProps, 'onChange'> {
  startOf?: unitOfTime.StartOf;
  onChange?(number, string): void;
}

/**
 * @remark: M是mlz的缩写
 */
const MDatePicker = (props: IMDatePickerProps) => {
  const { value, onChange, startOf, ...rest } = props;
  return (
    <DatePicker
      {...rest}
      value={value && moment(value)}
      onChange={(val, dateString: string) => {
        onChange?.(
          moment(val)
            .startOf(startOf || 'ms')
            .valueOf(),
          dateString,
        );
      }}
    />
  );
};

export const MDateRangePicker = (props: IMRangePickerProps) => {
  const { value, onChange, startOf, ...rest } = props;
  return (
    <DatePicker.RangePicker
      {...rest}
      value={value && [moment(value[0]), moment(value[1])]}
      onChange={(val, dateString: string[]) => {
        onChange?.(
          [
            moment(val?.[0])
              .startOf(startOf || 'ms')
              .valueOf(),
            moment(val?.[1])
              .startOf(startOf || 'ms')
              .valueOf(),
          ],
          dateString,
        );
      }}
    />
  );
};

export default MDatePicker;
