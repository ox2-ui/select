import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectField from './SelectField';
import { Groups, Apps, People, StatusLabels, Categories, Types, Tags } from '../../data/SelectItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console

//
//      This a copy of Selext.story.js with changed component name
//

storiesOf('SelectField', module)
  .add('single', () => (
    <SelectField
      options={Groups}
      onUpdate={handleUpdate}
    />
  ))
  .add('selected', () => (
    <SelectField
      value={'attendies'}
      options={Groups}
      onUpdate={handleUpdate}
    />
  ))
  .add('multi', () => (
    <SelectField
      options={Tags}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
    />
  ))
  .add('multi selected', () => (
    <SelectField
      options={Tags}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      value={['important', 'warning']}
    />
  ))
  .add('disable clear', () => (
    <SelectField
      options={Groups}
      onUpdate={handleUpdate}
      value={'attendies'}
      clearable={false}
    />
  ))
  .add('type: colored', () => (
    <SelectField
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored - selected', () => (
    <SelectField
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
      value={'published'}
    />
  ))
  .add('type: colored multi', () => (
    <SelectField
      options={StatusLabels}
      onUpdate={handleUpdate}
      placeholder={'Filter by status'}
      type={'colored'}
      multi={true}
      simpleValue={true}
    />
  ))
  .add('type: colored-circle', () => (
    <SelectField
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: colored-circle - selected', () => (
    <SelectField
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      value={'session'}
    />
  ))
  .add('type: colored-circle multi', () => (
    <SelectField
      options={Categories}
      onUpdate={handleUpdate}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      multi={true}
      simpleValue={true}
    />
  ))
  .add('type: image', () => (
    <SelectField
      options={Apps}
      onUpdate={handleUpdate}
      placeholder={'SelectField app'}
      type={'image'}
    />
  ))
  .add('type: image - selected', () => (
    <SelectField
      value={'id2'}
      options={Apps}
      onUpdate={handleUpdate}
      placeholder={'SelectField app'}
      type={'image'}
    />
  ))
  .add('type: image multi', () => (
    <SelectField
      options={Apps}
      onUpdate={handleUpdate}
      multi={true}
      simpleValue={true}
      placeholder={'SelectField app'}
      type={'image'}
    />
  ))
  .add('type: image 2', () => (
    <SelectField
      options={People}
      onUpdate={handleUpdate}
      placeholder={'SelectField person'}
      offlineEnabled={true}
      type={'image'}
      fallbackIcon={'user'}
    />
  ))
  .add('type: image 2 multi', () => (
    <SelectField
      options={People}
      onUpdate={handleUpdate}
      placeholder={'SelectField person'}
      offlineEnabled={true}
      type={'image'}
      fallbackIcon={'user'}
      multi={true}
      simpleValue={true}
    />
  ))
  .add('type: icon', () => (
    <SelectField
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon - selected', () => (
    <SelectField
      value={'Tickets'}
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon multi', () => (
    <SelectField
      options={Types}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
      multi={true}
      simpleValue={true}
    />
  ))
  .add('type: icon & large', () => (
    <SelectField
      options={Types}
      iconSize={'25px'}
      onUpdate={handleUpdate}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon & large & multi', () => (
    <SelectField
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
