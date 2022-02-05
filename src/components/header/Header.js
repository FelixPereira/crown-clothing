import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  LinkOption,

} from './headeStyles';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, display }) => {
  return(
    <HeaderContainer>
      <LogoContainer className='logo-container' to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to='/shop'>SHOP</LinkOption>
        <LinkOption to='#'>CONTACT</LinkOption>
        {
          currentUser ? 
            <LinkOption as='div' onClick={() => auth.signOut()}>SIGN OUT</LinkOption>
          : <LinkOption to='/signin'>SIGN IN</LinkOption>
        };
        
        <CartIcon />
      </OptionsContainer>
      {
        display ? 
          <CartDropdown />
        : null
      };
      
    </HeaderContainer>
  );
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  display: selectDisplay
});

export default connect(mapStateToProp)(Header);