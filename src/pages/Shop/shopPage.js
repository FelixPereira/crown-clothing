import React from 'react';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';

import CollectionsOverview from '../../components/collectionOverview/collectionOverview';

class ShopPage extends React.Component {
  componentDidMount() {
    const { updateCollections } = this.props;
  
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collections)
    });
  };

  render() {
    return (
      <section className='shopPage'>
        <CollectionsOverview />
      </section>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);