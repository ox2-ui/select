import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SelectField from './SelectField';
import {
  Groups,
  Apps,
  Categories,
  fontWeight,
  People,
  StatusLabels,
  Tags,
  textTransform,
  Types,
} from '../../data/SelectItems';

//
//      This a copy of Selext.story.js with changed component name
//

const handler = value => console.log('🐳', value); // eslint-disable-line no-console

const Wrapper = (
  { children }, // eslint-disable-line react/prop-types
) => <div style={{ margin: '25px 10px' }}>{children}</div>;

storiesOf('SelectField', module)
  .add('compare all', () => (
    <div>
      <Wrapper>
        <SelectField onUpdate={handler} options={Groups} />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={Groups}
          value={'attendies'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          hasError={true}
          onUpdate={handler}
          options={Groups}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          multi={true}
          onUpdate={handler}
          options={Tags}
          simpleValue={true}
          value={['important', 'warning']}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={textTransform}
          placeholder={'Text transform'}
          styledProperty={'textTransform'}
          type={'value-styled'}
          value={'uppercase'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          itemStyle={{ fontFamily: 'Roboto' }}
          onUpdate={handler}
          options={fontWeight}
          placeholder={'Weight'}
          styledProperty={'fontWeight'}
          type={'value-styled'}
          value={'700'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={StatusLabels}
          placeholder={'Filter by status'}
          type={'colored'}
          value={'published'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          multi={true}
          onUpdate={handler}
          options={StatusLabels}
          placeholder={'Filter by status'}
          simpleValue={true}
          type={'colored'}
          value={['rejected', 'published']}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={Categories}
          placeholder={'Filter by category'}
          type={'colored-circle'}
          value={'session'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          multi={true}
          onUpdate={handler}
          options={Categories}
          placeholder={'Filter by category'}
          simpleValue={true}
          type={'colored-circle'}
          value={['break', 'workshop']}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={Apps}
          placeholder={'SelectField app'}
          type={'image'}
          value={'id2'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          multi={true}
          onUpdate={handler}
          options={Apps}
          placeholder={'SelectField app'}
          simpleValue={true}
          type={'image'}
          value={['id1', 'id2']}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          fallbackIcon={'user'}
          fallbackIconBg={'neutral'}
          fallbackIconColor={'white'}
          multi={true}
          offlineEnabled={true}
          onUpdate={handler}
          options={People}
          placeholder={'SelectField person'}
          simpleValue={true}
          type={'image'}
          value={['id1', 'id3', 'id2']}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          onUpdate={handler}
          options={Types}
          placeholder={'Filter by note type'}
          type={'icon'}
          value={'Tickets'}
        />
      </Wrapper>
      <Wrapper>
        <SelectField
          multi={true}
          onUpdate={handler}
          options={Types}
          placeholder={'Filter by note type'}
          simpleValue={true}
          type={'icon'}
          value={['Tickets', 'Sessions']}
        />
      </Wrapper>
    </div>
  ))
  .add('single', () => (
    <SelectField onUpdate={handler} options={Groups} />
  ))
  .add('selected', () => (
    <SelectField
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />
  ))
  .add('with error', () => (
    <SelectField
      hasError={true}
      onUpdate={handler}
      options={Groups}
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
  .add('type: value-styled 2', () => (
    <SelectField
      itemStyle={{ fontFamily: 'Roboto' }}
      onUpdate={handler}
      options={fontWeight}
      placeholder={'Weight'}
      styledProperty={'fontWeight'}
      type={'value-styled'}
    />
  ))
  .add('type: value-styled 2 - selected', () => (
    <SelectField
      itemStyle={{ fontFamily: 'Roboto' }}
      onUpdate={handler}
      options={fontWeight}
      placeholder={'Weight'}
      styledProperty={'fontWeight'}
      type={'value-styled'}
      value={'700'}
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
  .add('type: colored multi - selected', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
      value={['rejected', 'published']}
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
  .add('type: colored-circle multi - selected', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
      value={['break', 'workshop']}
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
  .add('type: image multi - selected', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Apps}
      placeholder={'SelectField app'}
      simpleValue={true}
      type={'image'}
      value={['id1', 'id2']}
    />
  ))
  .add('type: image 2', () => (
    <SelectField
      fallbackIcon={'user'}
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
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
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'SelectField person'}
      simpleValue={true}
      type={'image'}
    />
  ))
  .add('type: image 2 multi - selected', () => (
    <SelectField
      fallbackIcon={'user'}
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'SelectField person'}
      simpleValue={true}
      type={'image'}
      value={['id1', 'id3', 'id2']}
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
  .add('type: icon multi - selected', () => (
    <SelectField
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
      value={['Tickets', 'Sessions']}
    />
  ));
