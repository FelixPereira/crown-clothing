import React from 'react';
import MenuItem from '../menuItem/menuItem';
import './directory.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directorySelector';

const Directory = ({sections}) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});
export default connect(mapStateToProps)(Directory);