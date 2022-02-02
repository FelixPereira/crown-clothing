import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import './collectionPage.css';

const CollectionPage = ({collection}) => {
  return (
    <div className='category'>
      {
        collection.items.map(items => (
          <CollectionItem  item={items} />
        ))
      }
    </div>
  );
};

const mapStateToProps = (state, ownProp) => ({
  collection: selectCollection(ownProp.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);