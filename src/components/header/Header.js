import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss';

const Header = () => {
  return(
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='#' className='option'>CONTACT</Link>
        <Link to='/signin' className='option'>SIGN IN</Link>
      </div>
    </header>
  )
}

export default Header;