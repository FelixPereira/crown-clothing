import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, signInWithGoogle, ...otherProp }) => {
  return(
    <button className={`${signInWithGoogle ? 'sign-in-with-google' : ''} custom-button`} {...otherProp}>
      {children}
    </button>
  )
}

export default CustomButton;