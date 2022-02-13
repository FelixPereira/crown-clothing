import React from 'react';

import CollectionsOverview from '../../components/collectionOverview/collectionOverview';

const shopPage = ({ match }) => {
  return(
    <section className='shopPage'>
      <CollectionsOverview />
    </section>
  );
};

export default shopPage;