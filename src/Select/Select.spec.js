/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';
import { assert } from 'chai';

describe('Select', () => {
  it('should render a <Select> element', () => {
    const wrapper = shallow(
      <Select />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
