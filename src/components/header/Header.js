import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.css';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectDisplay } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

const Header = ({ currentUser, display }) => {
  return(
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='#' className='option'>CONTACT</Link>
        {
          currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          : <Link to='/signin' className='option'>SIGN IN</Link>
        }
        
        <CartIcon />
      </div>
      {
        display ? 
          <CartDropdown />
        : null
      }
      
    </header>
  )
} 

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  display: selectDisplay
});

export default connect(mapStateToProp)(Header);