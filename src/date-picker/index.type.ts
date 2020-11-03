import { DatePickerProps } from 'antd/lib/date-picker';
import { unitOfTime, Moment } from 'moment';

export interface IDatePickerProps extends Omit<DatePickerProps, 'onChange' | 'value'> {
  value?: number;
  startOf?: unitOfTime.StartOf;
  onChange: (date: number | Moment | null, dateString: string) => void;
  returnUnixValue?: boolean;
}
