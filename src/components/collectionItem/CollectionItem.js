import React from 'react';
import './collectionItem.scss';


const CollectionItem = ({ id, imageUrl, price, name  }) => {
  return(
    <div className='collection-item'>
      <div 
        className='image'
        style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <h5 className='name'>{name}</h5>
        <h5 className='price'>{price}</h5>
      </div>
    </div>
  )
}

export default CollectionItem;