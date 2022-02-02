import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './collectionPreview.css';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items, routeName, history}) => {
  return(
    <section className='collection-preview'>
      {/* <h3 onClick={history.push(`${routeName}`)}>{title}</h3> */}
      <h3 className='title'><Link to={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link></h3>
      <section className='preview'>
        {items
            .filter((item, idx) => idx < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
      </section>
    </section>
  )
}

export default withRouter(CollectionPreview);