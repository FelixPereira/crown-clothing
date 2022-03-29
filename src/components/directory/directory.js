import React from 'react';
import MenuItem from '../menuItem/menuItem';
import './directory.css';
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/directory/directorySelector';

const Directory = () => {
  const sections = useSelector(selectSections);
  return(
    <div className='directory-menu'>
      {
        sections.map(({ id, ...sectionsProps }) => (
          <MenuItem key={id} {...sectionsProps} />
        ))
      }
    </div>
  )
}

export default Directory;