/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../pages/index';
import Nav from '../components/nav/nav';
import Form from '../components/form/form';


describe('<App />', () => {
  it('renders one <Nav /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
  it('<Nav /> has currentPath set to home', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Nav).props()).toHaveProperty('currentPath', 'home');
  });
  it('renders one <Form /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });
});
