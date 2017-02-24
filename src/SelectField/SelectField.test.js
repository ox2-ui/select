/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SelectField from './SelectField';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <SelectField />
  );

  expect(wrapper).toMatchSnapshot();
});
