import React from 'react';

import CustomButton from '../customButton/CustomButton';

import './cart-dropdown.scss';

const CartDropdown = () => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>Got to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;