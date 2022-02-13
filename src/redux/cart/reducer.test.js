import React from 'react';
import CartActionTypes from './cart.types';
import { addItem, removeItem}  from './cart-actions';
import cartReducer from './cart.reducer';

const mockInitialState = {
  display: false,
  cartItems: []
};

describe('test cart reducer', () => {
  it('return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(mockInitialState)
  });
  
  it('return changed state', () => {
    expect(cartReducer(mockInitialState, {type:  CartActionTypes.TOGGLE_CART_HIDDEN})).toEqual({display: true, cartItems: []})
  });
});

describe('test action', () => {
  const mockItem = {
    id: 1,
    name: 'casaco',
    price: 2000
  };
  it('test add item', () => {
    const expectedAction = {
      type: CartActionTypes.ADD_ITEM,
      payload: mockItem
    };
    expect(addItem(mockItem)).toEqual(expectedAction)
  });
  
  it('test removal action', () => {
    const expectedAction = {
      type: CartActionTypes.REMOVE_ITEM,
      payload: mockItem
    };
    expect(removeItem(mockItem)).toEqual(expectedAction)
  });
});