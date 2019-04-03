/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Guestbook from '../pages/guestbook';
import Nav from '../components/nav/nav';
import Feed from '../components/feed/feed';


describe('<Guestbook />', () => {
  it('renders one <Nav /> component', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Guestbook {...props} />);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });

  it('<Nav /> has currentPath set to home', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Guestbook {...props} />);
    expect(wrapper.find(Nav).props()).toHaveProperty('currentPath', 'guestbook');
  });
  it('renders one <Feed /> component', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Guestbook {...props} />);
    expect(wrapper.find(Feed)).toHaveLength(1);
  });
  it('<Feed /> has posts', async () => {
    const props = await Guestbook.getInitialProps();
    const wrapper = shallow(<Guestbook {...props} />);
    expect(wrapper.find(Feed).props()).toHaveProperty('messages', props.data.posts);
  });
});
