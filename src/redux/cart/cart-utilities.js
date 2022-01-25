export const addItemToCart = (itemToAdd, cartItems) => {
  const existingItem = cartItems.find(
      cartItem => cartItem.id === itemToAdd.id
    );

  if(existingItem) {
    return cartItems.map(
      cartItem => cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem
      );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, itemToremove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToremove.id)
}

export const decreaseItemFromCart = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToDecrease.id);
  
  if(existingItem && existingItem.quantity > 1) {
    return cartItems.map(cartItem => cartItem.id === itemToDecrease.id 
      ? {...cartItem, quantity: cartItem.quantity -1}
      : cartItem);
  } else if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id)
  }
}