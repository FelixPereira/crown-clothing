import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory';


const homepage = (props) => {
  return(
    <div className='homepage'>
      <Directory />
    </div>
  )
}

export default homepage;