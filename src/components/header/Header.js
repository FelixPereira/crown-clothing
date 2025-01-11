import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
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

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const display = useSelector(selectDisplay);
  return(
    <HeaderContainer>
      <LogoContainer className='logo-container' to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to='/shop'>SHOPs</LinkOption>
        <LinkOption to='#'>CONTACT</LinkOption>
        {
          currentUser ? 
            <LinkOption as='div' onClick={() => auth.signOut()}>SIGN OUT</LinkOption>
          : <LinkOption to='/signin'>SIGN IN</LinkOption>
        }
        
        <CartIcon />
      </OptionsContainer>
      {
        display ? 
          <CartDropdown />
        : null
      }
      
    </HeaderContainer>
  );
};

export default Header;