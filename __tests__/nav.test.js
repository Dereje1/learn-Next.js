/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Link from 'next/link';
import Nav from '../components/nav/nav';


describe('<Nav />', () => {
  it('Has 2 Links', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(Link)).toHaveLength(2);
  });
  it('has both link routes', () => {
    const wrapper = shallow(<Nav />);
    const routes = ['/guestbook', '/'];
    const routesArePresent = wrapper.find(Link).everyWhere(L => routes.includes(L.props().href));
    expect(routesArePresent).toEqual(true);
  });
  it('has 2 buttons', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('button')).toHaveLength(2);
  });
  it('buttons have text', () => {
    const wrapper = shallow(<Nav />);
    const linkTexts = ['Home', 'Guest Book'];
    const buttonsHaveText = wrapper.find('button').everyWhere(b => linkTexts.includes(b.text()));
    expect(buttonsHaveText).toEqual(true);
  });
});
