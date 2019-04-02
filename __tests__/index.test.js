/* eslint-env jest */
import { mount } from 'enzyme';
import React from 'react';

import App from '../pages/index';

describe('With Enzyme', () => {
  it('App shows name field"', () => {
    const app = mount(<App />);
    expect(app.find('.namelabel').text()).toEqual('Name');
  });
});
