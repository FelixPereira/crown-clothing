import React from 'react';
import Product from '../Product/Product';
import SHOP_DATA from '../../../pages/Shop/shop.data';

const Collections = () => {
  const shopProducts = SHOP_DATA;

  return(
    shopProducts.map(shopProduct => (
      <Product key={shopProduct.id} product={shopProduct} />
    ))  
  )
}

export default Collections;