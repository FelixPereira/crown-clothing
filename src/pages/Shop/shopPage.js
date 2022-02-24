import React from 'react';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';

import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionsOverview from '../../components/collectionOverview/collectionOverview';
import CollectionPage from '../collectionpage/collectionP';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collections);
      this.setState({loading: false});
    });
  };

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <section className='shopPage'>
        <Route
         exact 
         path={`${match.path}`} 
         render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
      </section>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);

/*
.sign-up {
  display: flex;
  flex-direction: column;
  width: 380px;
}

*/