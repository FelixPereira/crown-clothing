import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import CartDropdown from './cart-dropdown';
import App from '../../App';

// it('render cart dropdown component', () => {
//   expect(shallow(<CartDropdown />)).toMatchSnapshot();
// });

it('shhoud render cart dropdown', () => {
  render(<App />);

 console.log('ola')
});

