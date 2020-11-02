import React, { useState } from 'react';
import { Select, Input, Form } from 'antd';
import { createBem } from '../shared/utils';
import './index.less';

interface RangeSelectionOption {
  key: string | number;
  name: string;
  id?: string;
}
interface CourseProcessSelectProps {
  selectOptions: RangeSelectionOption[];
  currentValue?: number[];
  width?: number;
  onChange?: (value: [number | string, number | string]) => void;
}
const { Group: InputGroup } = Input;
const { Option: SelectOption } = Select;
const rangePickerProps = {
  showSearch: true,
  optionFilterProp: 'children',
  notFoundContent: '',
  placeholder: '请选择',
};
export const SelectRange = ({ selectOptions, currentValue = [], width, onChange }: CourseProcessSelectProps) => {
  const [CurrentRange, setCurrentRange] = useState(currentValue);
  function handleChange(value, label) {
    const [begin, end] = CurrentRange;
    if (label === 'begin') {
      if (onChange) {
        onChange([value, end]);
      }
      return setCurrentRange([value, end]);
    }
    if (onChange) {
      onChange([begin, value]);
    }
    return setCurrentRange([begin, value]);
  }
  function findCurrentI() {
    const indexArr = [0, 1].map((item, i) => {
      const index = selectOptions.findIndex((option) => option.key === CurrentRange[i]);
      return index;
    });
    return indexArr;
  }
  const [beginI, endI] = findCurrentI();
  const bem = createBem('range');
  console.log(bem('input_item'));

  return (
    <div>
      <InputGroup compact>
        <Select
          {...rangePickerProps}
          className={bem('input_item')}
          style={{ width: width ?? 'auto' }}
          showArrow={false}
          onChange={(value) => handleChange(value, 'begin')}
          defaultValue={CurrentRange[0]}
          allowClear>
          {selectOptions?.map((item, i) => (
            <SelectOption key={item.key} disabled={endI === -1 ? false : i > endI} value={item.key}>
              {item.name}
            </SelectOption>
          ))}
        </Select>
        <Input className={bem('input_item_disabled')} value="~" />
        <Select
          {...rangePickerProps}
          className={bem('input_item')}
          style={{ width: width ?? 'auto' }}
          showArrow={false}
          onChange={(value) => handleChange(value, 'end')}
          defaultValue={CurrentRange[1]}
          allowClear>
          {selectOptions?.map((item, i) => (
            <SelectOption key={item.key} disabled={beginI === -1 ? false : i < beginI} value={item.key}>
              {item.name}
            </SelectOption>
          ))}
        </Select>
      </InputGroup>
    </div>
  );
};
SelectRange.defaultProps = {
  currentValue: [],
  onChange: () => ({}),
};

export default SelectRange;
