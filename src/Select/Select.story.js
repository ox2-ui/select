import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Select from './Select';

const handleUpdate = (value) => console.log('🐳', value);

const Groups = [
  { label: 'Speakers', value: 'speakers' },
  { label: 'Attendies', value: 'attendies' },
  { label: 'Moderators', value: 'moderators' },
];

const Apps = [
  { label: 'Aci', value: 'id1', image: 'http://imgur.com/N2LoYmv.png' },
  { label: 'NCS', value: 'id2', image: 'http://imgur.com/AN63ghL.png' },
  { label: 'IPE', value: 'id3', image: 'http://imgur.com/VMgTYTR.png' },
];

const People = [
  { label: 'Jane Sanders', value: 'id1', image: 'https://randomuser.me/api/portraits/women/50.jpg' },
  { label: 'Linda Garland', value: 'id2', image: 'https://randomuser.me/api/portraits/women/18.jpg' },
  { label: 'Jane Offline', value: 'id1', image: 'https://randomuser.me/api/portraits/women/50.jpg', localImg: 'ktLb8Hqxo28WdToq5.jpg' },
  { label: 'No image', value: 'id3', image: '' },
];

const StatusLabels = [
  { label: 'Published', value: 'published', color: 'action' },
  { label: 'Rejected', value: 'rejected', color: 'critical' },
  { label: 'Pending', value: 'pending', color: 'warning' },
];

const Categories = [
  { label: 'Sessions', value: 'session', color: '#3598D8' },
  { label: 'Breaks', value: 'break', color: '#2CAF65' },
  { label: 'Workshops', value: 'workshop', color: '#F29C2F' },
];

const Types = [
  { label: 'User', value: 'Tickets', icon: 'users2', iconColor: '#3498DB' },
  { label: 'Session', value: 'Sessions', icon: 'calendar-text', iconColor: '#3498DB' },
  { label: 'Sponsors & Exhibitors', value: 'Sponsors', icon: 'diamond4', iconColor: '#3498DB' },
  { label: 'General', value: 'all', icon: 'pencil3', iconColor: '#3498DB' },
];

const Tags = [
  { label: 'welcome', value: 'welcome' },
  { label: 'announcement', value: 'announcement' },
  { label: 'warning', value: 'warning' },
  { label: 'important', value: 'important' },
  { label: 'reminder', value: 'reminder' },
  { label: 'other', value: 'other' },
];

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
