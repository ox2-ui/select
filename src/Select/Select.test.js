/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Select from './Select';
import { Groups, Apps, People, StatusLabels, Categories, Types, Tags } from '../../data/SelectItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <Select
      options={Groups}
      onUpdate={handleUpdate}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders multi selected', () => {
  const wrapper = mount(
    <Select
      options={Tags}
      value={['important', 'warning']}
      multi={true}
      simpleValue={true}
      onUpdate={handleUpdate}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders colored type', () => {
  const wrapper = mount(
    <Select
      value={'published'}
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders colored-circle type', () => {
  const wrapper = mount(
    <Select
      value={'session'}
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders image type', () => {
  const wrapper = mount(
    <Select
      value={'id2'}
      options={Apps}
      onUpdate={handleUpdate}
      placeholder={'Select app'}
      type={'image'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders icon type', () => {
  const wrapper = mount(
    <Select
      value={'Tickets'}
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
