import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, decreaseItem } from '../../redux/cart/cart-actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  Arrow,
  RemoveButton
} from './checkoutItemStyle';

const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <QuantityContainer>
        <Arrow onClick={() => decreaseItem(cartItem)}>&#10094;</Arrow>
        {quantity}
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </QuantityContainer>
      <span className='price'>{price}</span>
      <RemoveButton onClick={() => removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  decreaseItem: cartItem => dispatch(decreaseItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);