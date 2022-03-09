import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsLoading } from '../../redux/shop/shopSelector';

import CollectionPage from './collectionPage';
import WithSpinner from '../../components/with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: !state => selectIsLoading(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps);
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;