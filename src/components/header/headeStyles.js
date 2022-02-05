import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 10%;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkOption = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;


