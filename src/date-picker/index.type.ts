import { DatePickerProps } from 'antd/lib/date-picker';
import { unitOfTime } from 'moment';

export interface IDatePickerProps extends Omit<DatePickerProps, 'onChange' | 'value'> {
  value?: number;
  startOf?: unitOfTime.StartOf;
  onChange: (date: number, dateString: string) => void;
}
