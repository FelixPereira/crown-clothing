import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = Wrappedcomponent => {
  const WithSpinnner = ({isLoading, ...othersProps}) => {
    isLoading ?
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
      : <Wrappedcomponent {...othersProps} />
  }
  return WithSpinner;
};

export default WithSpinner;