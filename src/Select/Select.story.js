import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Select from './Select';
import { Groups, Apps, People, StatusLabels, Categories, Types, Tags } from '../../data/SelectItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console


storiesOf('Select', module)
  .add('single', () => (
    <Select
      options={Groups}
      onUpdate={handleUpdate}
    />
  ))
  .add('selected', () => (
    <Select
      value={'attendies'}
      options={Groups}
      onUpdate={handleUpdate}
    />
  ))
  .add('multi', () => (
    <Select
      options={Tags}
      multi={true}
      simpleValue={true}
      onUpdate={handleUpdate}
    />
  ))
  .add('multi selected', () => (
    <Select
      options={Tags}
      value={['important', 'warning']}
      multi={true}
      simpleValue={true}
      onUpdate={handleUpdate}
    />
  ))
  .add('disable clear', () => (
    <Select
      value={'attendies'}
      options={Groups}
      onUpdate={handleUpdate}
      clearable={false}
    />
  ))
  .add('type: colored', () => (
    <Select
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored - selected', () => (
    <Select
      value={'published'}
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored multi', () => (
    <Select
      options={StatusLabels}
      multi={true}
      simpleValue={true}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored-circle', () => (
    <Select
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: colored-circle - selected', () => (
    <Select
      value={'session'}
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: colored-circle multi', () => (
    <Select
      options={Categories}
      multi={true}
      simpleValue={true}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: image', () => (
    <Select
      options={Apps}
      onUpdate={handleUpdate}
      placeholder={'Select app'}
      type={'image'}
    />
  ))
  .add('type: image - selected', () => (
    <Select
      value={'id2'}
      options={Apps}
      onUpdate={handleUpdate}
      placeholder={'Select app'}
      type={'image'}
    />
  ))
  .add('type: image multi', () => (
    <Select
      options={Apps}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      placeholder={'Select app'}
      type={'image'}
    />
  ))
  .add('type: image 2', () => (
    <Select
      options={People}
      onUpdate={handleUpdate}
      placeholder={'Select person'}
      offlineEnabled={true}
      type={'image'}
      fallbackIcon={'user'}
    />
  ))
  .add('type: image 2 multi', () => (
    <Select
      options={People}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      placeholder={'Select person'}
      offlineEnabled={true}
      type={'image'}
      fallbackIcon={'user'}
    />
  ))
  .add('type: icon', () => (
    <Select
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon - selected', () => (
    <Select
      value={'Tickets'}
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon multi', () => (
    <Select
      options={Types}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon & large', () => (
    <Select
      options={Types}
      iconSize={'25px'}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon & large & multi', () => (
    <Select
      options={Types}
      iconSize={'25px'}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      style={{height: '38px'}}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ));
