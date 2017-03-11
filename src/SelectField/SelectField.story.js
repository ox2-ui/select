import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectField from './SelectField';
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

//
//      This a copy of Selext.story.js with changed component name
//

storiesOf('SelectField', module)
  .add('single', () => (
    <SelectField
      onUpdate={handler}
      options={Groups}
    />
  ))
  .add('selected', () => (
    <SelectField
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />
  ))
  .add('multi', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
    />
  ))
  .add('multi selected', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
      value={['important', 'warning']}
    />
  ))
  .add('disable clear', () => (
    <SelectField
      clearable={false}
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />
  ))
  .add('type: value-styled', () => (
    <SelectField
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
    />
  ))
  .add('type: value-styled - selected', () => (
    <SelectField
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
      value={'uppercase'}
    />
  ))
  .add('type: colored', () => (
    <SelectField
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
    />
  ))
  .add('type: colored - selected', () => (
    <SelectField
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
      value={'published'}
    />
  ))
  .add('type: colored multi', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
    />
  ))
  .add('type: colored-circle', () => (
    <SelectField
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />
  ))
  .add('type: colored-circle - selected', () => (
    <SelectField
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      value={'session'}
    />
  ))
  .add('type: colored-circle multi', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
    />
  ))
  .add('type: image', () => (
    <SelectField
      onUpdate={handler}
      options={Apps}
      placeholder={'SelectField app'}
      type={'image'}
    />
  ))
  .add('type: image - selected', () => (
    <SelectField
      onUpdate={handler}
      options={Apps}
      placeholder={'SelectField app'}
      type={'image'}
      value={'id2'}
    />
  ))
  .add('type: image multi', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Apps}
      placeholder={'SelectField app'}
      simpleValue={true}
      type={'image'}
    />
  ))
  .add('type: image 2', () => (
    <SelectField
      fallbackIcon={'user'}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'SelectField person'}
      type={'image'}
    />
  ))
  .add('type: image 2 multi', () => (
    <SelectField
      fallbackIcon={'user'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'SelectField person'}
      simpleValue={true}
      type={'image'}
    />
  ))
  .add('type: icon', () => (
    <SelectField
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon - selected', () => (
    <SelectField
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
      value={'Tickets'}
    />
  ))
  .add('type: icon multi', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
    />
  ))
  .add('type: icon & large', () => (
    <SelectField
      iconSize={'25px'}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />
  ))
  .add('type: icon & large & multi', () => (
    <SelectField
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
