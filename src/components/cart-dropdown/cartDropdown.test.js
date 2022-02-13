import React from 'react';
import { shallow } from 'enzyme';
import CartDropdown from './cart-dropdown';

it('render cart dropdown component', () => {
  expect(shallow(<CartDropdown />)).toMatchSnapshot();
});
