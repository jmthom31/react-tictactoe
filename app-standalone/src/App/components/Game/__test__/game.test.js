import React from 'react'
import Game from '../index'
import { shallow, mount } from 'enzyme'

describe('Game', () => {


  it('renders properly and does not crash', () => {
    shallow(<Game />);
  });

  it('shows X as the first player in the status', () => {
    const wrapper = mount(<Game />)
    const firstPlayer = wrapper.find('div.game-info').children().first().text()
    expect(firstPlayer).toEqual("Next player: X")
  })

});
