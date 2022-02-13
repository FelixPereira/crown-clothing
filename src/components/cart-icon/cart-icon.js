import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectItemQuantity } from '../../redux/cart/cartSelectors';
import { 
  CartIconContainer,
  ItemCount,
  ShoppingIcon
 } from './cartIconStyle';


const CartIcon = ({toggleDropdownDisplay, itemQuantity}) => {
  return(
    <CartIconContainer onClick={toggleDropdownDisplay}>
      <ShoppingIcon />
      <ItemCount className='item-count'>{itemQuantity}</ItemCount>
    </CartIconContainer>
  )
}

const mapStateToProps = createStructuredSelector ({
  itemQuantity: selectItemQuantity
});

const mapDispatchToPops = (dispatch) => ({
  toggleDropdownDisplay: () =>  dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToPops)(CartIcon);