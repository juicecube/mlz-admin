import React, { Component } from 'react';
import { testMount, testSnapshot } from '../../../tests';
import { mount } from 'enzyme';
import DatePicker from '..';
import { openPicker, selectDate } from './utils.test';

describe('🧪 DatePicker', () => {
  testMount(DatePicker);
  testSnapshot(DatePicker);

  it('return unix value', () => {
    class Test extends Component {
      state = {
        // eslint-disable-next-line react/no-unused-state
        value: null,
      };

      render() {
        return (
          <DatePicker
            returnUnixValue
            onChange={(dateValue, dateString) => {
              this.setState({
                // eslint-disable-next-line react/no-unused-state
                value: dateValue || new Date().getTime(),
              });
            }}
          />
        );
      }
    }
    const wrapper = mount(<Test />);
    openPicker(wrapper);
    selectDate(wrapper);
    const { value } = wrapper.state() as any;
    expect(typeof value === 'number').toBe(true);
  });
});
