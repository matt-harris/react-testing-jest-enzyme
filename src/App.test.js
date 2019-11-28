import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('has the correct h1 title', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('React testing with Jest and Enzyme');
  });

  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h2').text();
    expect(text).toEqual('0');
  });

  it('increments the count by 1, if the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('h2').text();
    expect(text).toEqual('1');
  });

  it('decrements the count by 1, if the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.decrement');
    incrementBtn.simulate('click');
    const text = wrapper.find('h2').text();
    expect(text).toEqual('-1');
  });
});
