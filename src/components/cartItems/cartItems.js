import React from 'react';

import { CartItemContainer, ItemsDetailContainer } from './cartItemsStyle';

const CartItem = ({item: {imageUrl, name, price, quantity}}) => {
  return(
    <CartItemContainer>
      <img src={imageUrl}  alt={name}/>
      <ItemsDetailContainer>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x {price}
        </span>
      </ItemsDetailContainer>
  </CartItemContainer>
  )
};

export default CartItem;