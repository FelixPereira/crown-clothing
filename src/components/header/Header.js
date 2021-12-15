import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import './header.scss';

const Header = ({ currentUser }) => {
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
        
      </div>
    </header>
  )
} 

const mapStateToProp = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProp)(Header);