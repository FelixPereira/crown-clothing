import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsLoading } from '../../redux/shop/shopSelector';

import WithSpinner from '../with-spinner/with-spinner';
import collectionsOverview from './collectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading
});

const collectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverview);
  
export default collectionsOverviewContainer