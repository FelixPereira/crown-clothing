import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/directory/directory';


const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return(
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
};

export default HomePage;