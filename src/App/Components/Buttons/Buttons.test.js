import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM           from 'react-dom';
import { Buttons } from './Buttons';

describe('Buttons', () => {
  it('should have three buttons', () => {
    const wrapper = shallow(<Buttons handleClick={() => {}}/>)
    console.log(wrapper.debug());

    expect(wrapper.find('.button')).toHaveLength(3);
  })

  it('should call handleClick on click', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Buttons handleClick={mockClick}/>)
    const button = wrapper.find('.button').first();

    button.simulate('click');

    expect(mockClick).toHaveBeenCalledTimes(1);
  })
})
