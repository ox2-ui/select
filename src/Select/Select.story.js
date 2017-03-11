import React from 'react';
import { storiesOf } from '@kadira/storybook';
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


storiesOf('Select', module)
  .add('single', () => (
    <Select
      onUpdate={handler}
      options={Groups}
    />
  ))
  .add('selected', () => (
    <Select
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />
  ))
  .add('multi', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
    />
  ))
  .add('multi selected', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
      value={['important', 'warning']}
    />
  ))
  .add('disable clear', () => (
    <Select
      clearable={false}
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />
  ))
  .add('type: value-styled', () => (
    <Select
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
    />
  ))
  .add('type: value-styled - selected', () => (
    <Select
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
      value={'uppercase'}
    />
  ))
  .add('type: colored', () => (
    <Select
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored - selected', () => (
    <Select
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
      value={'published'}
    />
  ))
  .add('type: colored multi', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
    />
  ))
  .add('type: colored-circle', () => (
    <Select
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: colored-circle - selected', () => (
    <Select
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      value={'session'}
    />
  ))
  .add('type: colored-circle multi', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
    />
  ))
  .add('type: image', () => (
    <Select
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
    />
  ))
  .add('type: image - selected', () => (
    <Select
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
      value={'id2'}
    />
  ))
  .add('type: image multi', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      simpleValue={true}
      type={'image'}
    />
  ))
  .add('type: image 2', () => (
    <Select
      fallbackIcon={'user'}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'Select person'}
      type={'image'}
    />
  ))
  .add('type: image 2 multi', () => (
    <Select
      fallbackIcon={'user'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'Select person'}
      simpleValue={true}
      type={'image'}
    />
  ))
  .add('type: icon', () => (
    <Select
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon - selected', () => (
    <Select
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
      value={'Tickets'}
    />
  ))
  .add('type: icon multi', () => (
    <Select
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
    />
  ))
  .add('type: icon & large', () => (
    <Select
      iconSize={'25px'}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon & large & multi', () => (
    <Select
      iconSize={'25px'}
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      style={{height: '38px'}}
      type={'icon'}
    />
  ));
