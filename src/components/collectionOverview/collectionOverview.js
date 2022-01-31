import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectColletions from '../../redux/shop/shopSelector';
import CollectionPreview from '../collectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {
        collections.map(({...props}, id) => (
          <CollectionPreview key={id} {...props} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);