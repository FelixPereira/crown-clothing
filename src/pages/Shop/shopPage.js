import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching, selectIsLoading } from '../../redux/shop/shopSelector';
import { fetchCollectionsAsync } from '../../redux/shop/shopActions';

import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionsOverview from '../../components/collectionOverview/collectionOverview';
// import CollectionPage from '../collectionpage/collectionPage';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  };

  render() {
    const { match, IsFetching, isLoading } = this.props;
    return (
      <section className='shopPage'>
        <Route
         exact 
         path={`${match.path}`} 
         render={props => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
      </section>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  IsFetching: selectIsFetching,
  isLoading: selectIsLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
