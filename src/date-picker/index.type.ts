import { DatePickerProps, RangePickerProps } from 'antd/lib/date-picker';
import { unitOfTime, Moment } from 'moment';

export interface IDatePickerProps extends Omit<DatePickerProps, 'onChange' | 'value'> {
  value?: valueProps;
  startOf?: unitOfTime.StartOf;
  onChange?: (date: valueProps, dateString: string) => void;
  returnUnixValue?: boolean;
}

export type valueProps = number | Moment | null;

export interface IRangePickerProps extends Omit<RangePickerProps, 'onChange' | 'value'> {
  value?: [valueProps, valueProps] | null;
  startOf?: unitOfTime.StartOf;
  onChange?: (date: [valueProps, valueProps] | null, dateString: [string, string]) => void;
  returnUnixValue?: boolean;
}
