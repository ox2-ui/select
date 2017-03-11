/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectField from './SelectField';
import { Groups } from '../../data/SelectItems';

const handler = (value) => console.log('🐳', value); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <SelectField
      onUpdate={handler}
      options={Groups}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
