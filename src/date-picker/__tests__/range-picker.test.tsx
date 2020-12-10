import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount } from 'enzyme';
import moment from 'moment';
import DatePicker from '..';
import { openPicker, selectCell, closePicker } from './utils.test';

describe('🧪 RangePicker', () => {
  testMount(DatePicker.RangePicker);
  testSnapshot(DatePicker.RangePicker);

  it('return unix value', () => {
    class Test extends Component {
      state = {
        // eslint-disable-next-line react/no-unused-state
        value: null,
      };

      render() {
        return (
          <DatePicker.RangePicker
            returnUnixValue
            onChange={(dateValue, dateString) => {
              this.setState({
                // eslint-disable-next-line react/no-unused-state
                value: dateValue || [null, null],
              });
            }}
          />
        );
      }
    }
    const wrapper = mount(<Test />);
    openPicker(wrapper);
    selectCell(wrapper, '3');
    openPicker(wrapper, 1);
    selectCell(wrapper, '5');
    closePicker(wrapper, 1);
    const { value } = wrapper.state() as any;
    expect(typeof value[0] === 'number' && typeof value[1] === 'number').toBe(true);
  });
});
