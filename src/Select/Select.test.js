/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Select from './Select';
import { Groups,
  Apps,
  Categories,
  People,
  StatusLabels,
  Tags,
  textTransform,
  Types,
} from '../../data/SelectItems';

const handler = (value) => console.log('🐳', value); // eslint-disable-line no-console

it('renders correctly', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={Groups}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders multi selected', () => {
  const wrapper = mount(
    <Select
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
      value={['important', 'warning']}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders colored type', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
      value={'published'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders colored-circle type', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      value={'session'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders image type', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
      value={'id2'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders icon type', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
      value={'Tickets'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders value-styled type', () => {
  const wrapper = mount(
    <Select
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
      value={'uppercase'}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
