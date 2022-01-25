import React from 'react';
import './checkoutItem.css';
import { connect } from 'react-redux';

import { removeItem, addItem, decreaseItem } from '../../redux/cart/cart-actions';

const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(cartItem)}>&#10094;</div>
        {quantity}
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  decreaseItem: cartItem => dispatch(decreaseItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);