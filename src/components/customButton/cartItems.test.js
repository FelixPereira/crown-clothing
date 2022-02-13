import { shallow } from 'enzyme';
import React from 'react';
import CustomButton from './CustomButton';

it('test custom buttom component', () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
})