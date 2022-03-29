import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem, decreaseItem } from '../../redux/cart/cart-actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  Arrow,
  RemoveButton
} from './checkoutItemStyle';

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const dispatch = useDispatch();
  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <QuantityContainer>
        <Arrow onClick={() => dispatch(decreaseItem(cartItem))}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </QuantityContainer>
      <span className='price'>{price}</span>
      <RemoveButton onClick={() => dispatch(removeItem(cartItem))}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
};

export default CheckoutItem;