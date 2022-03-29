import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectItemQuantity } from '../../redux/cart/cartSelectors';
import { 
  CartIconContainer,
  ItemCount,
  ShoppingIcon
 } from './cartIconStyle';


const CartIcon = ({toggleDropdownDisplay}) => {
  const itemQuantity = useSelector(selectItemQuantity);
  const dispatch = useDispatch();
  return(
    <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon />
      <ItemCount className='item-count'>{itemQuantity}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;