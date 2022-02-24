import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
  const WithSpinner = ({isLoading, ...otherProp}) => {
    return(
      isLoading ?
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
      : <WrappedComponent {...otherProp} />
    )
  };
  return WithSpinner;
};

export default WithSpinner;