import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
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

const handler = value => console.log('🐳', value); // eslint-disable-line no-console

const Wrapper = (
  { children }, // eslint-disable-line react/prop-types
) => <div style={{ margin: '25px 10px' }}>{children}</div>;

storiesOf('Select', module)
  .add('compare all', () =>
    <div>
      <Wrapper>
        <Select onUpdate={handler} options={Groups} />
      </Wrapper>
      <Wrapper>
        <Select
          onUpdate={handler}
          options={Groups}
          value={'attendies'}
        />
      </Wrapper>
      <Wrapper>
        <Select
          hasError={true}
          onUpdate={handler}
          options={Groups}
        />
      </Wrapper>
      <Wrapper>
        <Select
          multi={true}
          onUpdate={handler}
          options={Tags}
          simpleValue={true}
          value={['important', 'warning']}
        />
      </Wrapper>
      <Wrapper>
        <Select
          onUpdate={handler}
          options={textTransform}
          placeholder={'Text transform'}
          styledProperty={'textTransform'}
          type={'value-styled'}
          value={'uppercase'}
        />
      </Wrapper>
      <Wrapper>
        <Select
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
        <Select
          onUpdate={handler}
          options={StatusLabels}
          placeholder={'Filter by status'}
          type={'colored'}
          value={'published'}
        />
      </Wrapper>
      <Wrapper>
        <Select
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
        <Select
          onUpdate={handler}
          options={Categories}
          placeholder={'Filter by category'}
          type={'colored-circle'}
          value={'session'}
        />
      </Wrapper>
      <Wrapper>
        <Select
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
        <Select
          onUpdate={handler}
          options={Apps}
          placeholder={'Select app'}
          type={'image'}
          value={'id2'}
        />
      </Wrapper>
      <Wrapper>
        <Select
          multi={true}
          onUpdate={handler}
          options={Apps}
          placeholder={'Select app'}
          simpleValue={true}
          type={'image'}
          value={['id1', 'id2']}
        />
      </Wrapper>
      <Wrapper>
        <Select
          fallbackIcon={'user'}
          fallbackIconBg={'neutral'}
          fallbackIconColor={'white'}
          multi={true}
          offlineEnabled={true}
          onUpdate={handler}
          options={People}
          placeholder={'Select person'}
          simpleValue={true}
          type={'image'}
          value={['id1', 'id3', 'id2']}
        />
      </Wrapper>
      <Wrapper>
        <Select
          onUpdate={handler}
          options={Types}
          placeholder={'Filter by note type'}
          type={'icon'}
          value={'Tickets'}
        />
      </Wrapper>
      <Wrapper>
        <Select
          multi={true}
          onUpdate={handler}
          options={Types}
          placeholder={'Filter by note type'}
          simpleValue={true}
          type={'icon'}
          value={['Tickets', 'Sessions']}
        />
      </Wrapper>
    </div>,
  )
  .add('single', () =>
    <Select onUpdate={handler} options={Groups} />,
  )
  .add('selected', () =>
    <Select
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />,
  )
  .add('with error', () =>
    <Select
      hasError={true}
      onUpdate={handler}
      options={Groups}
    />,
  )
  .add('multi', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
    />,
  )
  .add('multi selected', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Tags}
      simpleValue={true}
      value={['important', 'warning']}
    />,
  )
  .add('disable clear', () =>
    <Select
      clearable={false}
      onUpdate={handler}
      options={Groups}
      value={'attendies'}
    />,
  )
  .add('type: value-styled', () =>
    <Select
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
    />,
  )
  .add('type: value-styled - selected', () =>
    <Select
      onUpdate={handler}
      options={textTransform}
      placeholder={'Text transform'}
      styledProperty={'textTransform'}
      type={'value-styled'}
      value={'uppercase'}
    />,
  )
  .add('type: value-styled 2', () =>
    <Select
      itemStyle={{ fontFamily: 'Roboto' }}
      onUpdate={handler}
      options={fontWeight}
      placeholder={'Weight'}
      styledProperty={'fontWeight'}
      type={'value-styled'}
    />,
  )
  .add('type: value-styled 2 - selected', () =>
    <Select
      itemStyle={{ fontFamily: 'Roboto' }}
      onUpdate={handler}
      options={fontWeight}
      placeholder={'Weight'}
      styledProperty={'fontWeight'}
      type={'value-styled'}
      value={'700'}
    />,
  )
  .add('type: colored', () =>
    <Select
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
    />,
  )
  .add('type: colored - selected', () =>
    <Select
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      type={'colored'}
      value={'published'}
    />,
  )
  .add('type: colored multi', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
    />,
  )
  .add('type: colored multi - selected', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={StatusLabels}
      placeholder={'Filter by status'}
      simpleValue={true}
      type={'colored'}
      value={['rejected', 'published']}
    />,
  )
  .add('type: colored-circle', () =>
    <Select
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
    />,
  )
  .add('type: colored-circle - selected', () =>
    <Select
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      type={'colored-circle'}
      value={'session'}
    />,
  )
  .add('type: colored-circle multi', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
    />,
  )
  .add('type: colored-circle multi - selected', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Categories}
      placeholder={'Filter by category'}
      simpleValue={true}
      type={'colored-circle'}
      value={['break', 'workshop']}
    />,
  )
  .add('type: image', () =>
    <Select
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
    />,
  )
  .add('type: image - selected', () =>
    <Select
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      type={'image'}
      value={'id2'}
    />,
  )
  .add('type: image multi', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      simpleValue={true}
      type={'image'}
    />,
  )
  .add('type: image multi - selected', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Apps}
      placeholder={'Select app'}
      simpleValue={true}
      type={'image'}
      value={['id1', 'id2']}
    />,
  )
  .add('type: image 2', () =>
    <Select
      fallbackIcon={'user'}
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'Select person'}
      type={'image'}
    />,
  )
  .add('type: image 2 multi', () =>
    <Select
      fallbackIcon={'user'}
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'Select person'}
      simpleValue={true}
      type={'image'}
    />,
  )
  .add('type: image 2 multi - selected', () =>
    <Select
      fallbackIcon={'user'}
      fallbackIconBg={'neutral'}
      fallbackIconColor={'white'}
      multi={true}
      offlineEnabled={true}
      onUpdate={handler}
      options={People}
      placeholder={'Select person'}
      simpleValue={true}
      type={'image'}
      value={['id1', 'id3', 'id2']}
    />,
  )
  .add('type: icon', () =>
    <Select
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
    />,
  )
  .add('type: icon - selected', () =>
    <Select
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      type={'icon'}
      value={'Tickets'}
    />,
  )
  .add('type: icon multi', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
    />,
  )
  .add('type: icon multi - selected', () =>
    <Select
      multi={true}
      onUpdate={handler}
      options={Types}
      placeholder={'Filter by note type'}
      simpleValue={true}
      type={'icon'}
      value={['Tickets', 'Sessions']}
    />,
  );
