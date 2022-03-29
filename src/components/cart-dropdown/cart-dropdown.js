import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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


const CartDropdown = ({history}) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  
  console.log(cartItems);
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
        dispatch(toggleCartHidden());}}>
        Got to checkout</CustomButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown);