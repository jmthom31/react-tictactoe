import React from 'react';
import { shallow } from 'enzyme';
import Board from '../index';

describe('Board', () => {

  it('renders properly and does not crash', () => {
    let grid = Array(9).fill(null)
    shallow(<Board squares={grid} />);
  });

});
