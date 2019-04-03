/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Guestbook from '../pages/guestbook';
import Feed from '../components/feed/feed';

describe('<Feed />', () => {
  it('has messages', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Feed messages={props.data.posts} />);
    expect(wrapper.find('.messagelist')).toHaveLength(1);
  });
  it('has sender', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Feed messages={props.data.posts} />);
    expect(wrapper.find('.sender').text()).toMatch(/.*/g);
  });
  it('has message', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Feed messages={props.data.posts} />);
    expect(wrapper.find('.message').text()).toMatch(/.*/g);
  });
});
