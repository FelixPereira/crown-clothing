import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColletctionsPreview } from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/CollectionPreview';

import './collectionsOverview.css';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      <h2 className='shopPage__title'>Collections</h2>
      {collections.map(({...props}, id) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectColletctionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);