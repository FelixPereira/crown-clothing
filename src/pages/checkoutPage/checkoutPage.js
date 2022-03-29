import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotal } from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeCheckoutButtom from '../../components/stripe-button/stripebutton';

import './checkoutPage.css';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  return(
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Discription</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))
      }
      <div className='total'>
        <span>${total}</span>
      </div>
      <StripeCheckoutButtom price={total} />
    </div>
  )
}

export default CheckoutPage;