import React from 'react';
import { useDispatch } from 'react-redux';

import './collectionItem.css';
import CustomButton from '../customButton/CustomButton';
import { addItem } from '../../redux/cart/cart-actions';

const CollectionItem = ({ item }) => {
  const {imageUrl, price, name} = item;
  const dispatch = useDispatch();
  return(
    <div className='collection-item'>
      <div 
        className='image'
        style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <h5 className='name'>{name}</h5>
        <h5 className='price'>{price}</h5>
      </div>
      <CustomButton addToCart onClick={() => dispatch(addItem(item))} invert> Add to cart </CustomButton>
    </div> 
  )
};

export default CollectionItem;