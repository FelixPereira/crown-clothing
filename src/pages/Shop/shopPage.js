import React from 'react';
import {firestore} from '../../firebase/firebase';

import CollectionsOverview from '../../components/collectionOverview/collectionOverview';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
        console.log(snapshot)
    });
  }

  render() {
    return (
      <section className='shopPage'>
        <CollectionsOverview />
      </section>
    )
  }
};

export default ShopPage;