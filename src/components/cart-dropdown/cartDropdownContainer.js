import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import CartDropdown from './cart-dropdown';

const mapStateToProps = createStructuredSelector({
  
});