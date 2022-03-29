import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionsPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/CollectionPreview';

import './collectionsOverview.css';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsPreview);
  return (
    <div className='collections-overview'>
      <h2 className='shopPage__title'>Collections</h2>
      {collections.map(({...props}, id) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  )
};

export default CollectionsOverview;