import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, ...otherProp }) => {
  return(
    <button className='custom-button' {...otherProp}>
      {children}
    </button>
  )
}

export default CustomButton;