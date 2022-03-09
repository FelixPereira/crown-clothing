import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsAsync } from '../../redux/shop/shopActions';

import collectionsOverviewContainer from '../../components/collectionOverview/collectionsOverviewContainer';


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
         component={ collectionsOverviewContainer } />
      </section>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
