import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItems/cartItems';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-dropdown.css';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length 
            ? cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message'> Cart is empty </span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        toggleCartHidden();}}>
        Got to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispacthToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispacthToProps)(CartDropdown));