import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import './collectionPage.css';

const CollectionPage = ({collection}) => {
  const {items, title} = collection;
  return (
    <div className='collection-page'>
      <h2 className='collection-title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProp) => ({
  collection: selectCollection(ownProp.match.params.categoryUrl)(state)
});

export default connect(mapStateToProps)(CollectionPage);