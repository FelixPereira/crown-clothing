import React from 'react';
import CollectionsOverview from '../../components/collectionOverview/collectionOverview';

const shopPage = () => {
  return(
    <section className='shopPage'>
      <h2 className='shopPage__title'>Collections</h2>
        <CollectionsOverview  />
    </section>
  )
};

export default shopPage;