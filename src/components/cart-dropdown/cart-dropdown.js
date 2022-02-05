import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { 
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from './cartDropdown-style';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItems/cartItems';


const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
  return(
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length 
            ? cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <EmptyMessage className='empty-message'> Cart is empty </EmptyMessage>
        }
      </CartItemsContainer>
      <CustomButton onClick={() => {
        history.push('/checkout');
        toggleCartHidden();}}>
        Got to checkout</CustomButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispacthToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispacthToProps)(CartDropdown));