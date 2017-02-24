/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectField from './SelectField';
import { Groups } from '../../data/SelectItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <SelectField
      options={Groups}
      onUpdate={handleUpdate}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
