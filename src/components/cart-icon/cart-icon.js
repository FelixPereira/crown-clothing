import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectItemQuantity } from '../../redux/cart/cartSelectors';

import './cart-icon.css';

const CartIcon = ({toggleDropdownDisplay, itemQuantity}) => {
  return(
    <div className='cart-icon' onClick={toggleDropdownDisplay}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemQuantity}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  itemQuantity: selectItemQuantity
});

const mapDispatchToPops = (dispatch) => ({
  toggleDropdownDisplay: () =>  dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToPops)(CartIcon);